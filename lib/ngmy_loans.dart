import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_network_resilience.dart';
import 'ngmy_offline.dart';

/// Lightweight cloud status map — users see approve/reject without re-downloading full loans.
class NgmyLoanStatusCloud {
  static const _settingsKey = 'ngmy_loan_status_map_v1';

  static Map<String, dynamic> statusMapFromApps(List<Map<String, dynamic>> apps) {
    final map = <String, dynamic>{};
    for (final raw in apps) {
      final id = (raw['id'] ?? '').toString().trim();
      final status = (raw['status'] ?? '').toString().trim();
      if (id.isEmpty || status.isEmpty) continue;
      map[id] = {
        'status': status,
        'approvedAt': raw['approvedAt'],
        'rejectionReason': raw['rejectionReason'],
        'updatedAt': raw['updatedAt'] ?? DateTime.now().toUtc().toIso8601String(),
      };
    }
    return map;
  }

  static void applyStatusMap(List<Map<String, dynamic>> apps, Map<String, dynamic> statusMap) {
    for (var i = 0; i < apps.length; i++) {
      final id = (apps[i]['id'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      final override = statusMap[id];
      if (override is! Map) continue;
      final remote = Map<String, dynamic>.from(override);
      final rs = (remote['status'] ?? '').toString();
      if (rs.isEmpty) continue;
      final ls = (apps[i]['status'] ?? 'pending').toString();
      final remoteFinal = rs == 'approved' || rs == 'rejected';
      final localFinal = ls == 'approved' || ls == 'rejected';
      final ru = (remote['updatedAt'] ?? '').toString();
      final lu = (apps[i]['updatedAt'] ?? '').toString();
      if (remoteFinal && !localFinal) {
        apps[i]['status'] = rs;
        if (remote['approvedAt'] != null) apps[i]['approvedAt'] = remote['approvedAt'];
        if (remote['rejectionReason'] != null) apps[i]['rejectionReason'] = remote['rejectionReason'];
        if (ru.isNotEmpty) apps[i]['updatedAt'] = ru;
      } else if (remoteFinal && localFinal && ru.compareTo(lu) > 0) {
        apps[i]['status'] = rs;
        if (remote['approvedAt'] != null) apps[i]['approvedAt'] = remote['approvedAt'];
        if (remote['rejectionReason'] != null) apps[i]['rejectionReason'] = remote['rejectionReason'];
        apps[i]['updatedAt'] = ru;
      }
    }
  }

  static Future<void> pushFromApps(List<Map<String, dynamic>> apps) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      final row = {
        'key': _settingsKey,
        'value': {
          'statuses': statusMapFromApps(apps),
          'savedAt': DateTime.now().toUtc().toIso8601String(),
        },
        'updated_at': DateTime.now().toUtc().toIso8601String(),
      };
      await Supabase.instance.client.from('ngmy_settings').upsert([row], onConflict: 'key');
    } catch (e) {
      debugPrint('[loan status cloud] push: $e');
    }
  }

  static Future<void> fetchAndApply(List<Map<String, dynamic>> apps) async {
    if (!await ngmyCanReachCloud() || apps.isEmpty) return;
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _settingsKey).maybeSingle();
      if (row == null) return;
      final value = row['value'];
      if (value is! Map) return;
      final statuses = value['statuses'];
      if (statuses is Map) {
        applyStatusMap(apps, Map<String, dynamic>.from(statuses));
      }
    } catch (e) {
      debugPrint('[loan status cloud] fetch: $e');
    }
  }
}

/// Instant local backup for admin loan approve/reject — survives cloud lag.
class NgmyLoanStatusStore {
  static String _key(String loanId) => 'ngmy_loan_status_${loanId.trim()}';

  static Future<void> saveDecision(
    String loanId, {
    required String status,
    String? approvedAt,
    String? rejectionReason,
  }) async {
    if (loanId.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(loanId),
      jsonEncode({
        'status': status,
        if (approvedAt != null) 'approvedAt': approvedAt,
        if (rejectionReason != null) 'rejectionReason': rejectionReason,
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      }),
    );
  }

  static Future<void> applyTo(List<Map<String, dynamic>> apps) async {
    if (apps.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    for (var i = 0; i < apps.length; i++) {
      final id = (apps[i]['id'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      final raw = prefs.getString(_key(id));
      if (raw == null || raw.isEmpty) continue;
      try {
        final m = Map<String, dynamic>.from(jsonDecode(raw) as Map);
        final status = (m['status'] ?? '').toString();
        if (status.isEmpty) continue;
        apps[i]['status'] = status;
        if (m['approvedAt'] != null) apps[i]['approvedAt'] = m['approvedAt'];
        if (m['rejectionReason'] != null) apps[i]['rejectionReason'] = m['rejectionReason'];
        if (m['updatedAt'] != null) apps[i]['updatedAt'] = m['updatedAt'];
      } catch (_) {}
    }
  }
}

/// Merge payment rows — paid status always wins (admin recordings survive user stale sync).
List<Map<String, dynamic>> ngmyLoanMergePaymentsList(
  List<Map<String, dynamic>> local,
  List<Map<String, dynamic>> remote,
) {
  if (remote.isEmpty) return local.map((e) => Map<String, dynamic>.from(e)).toList();
  if (local.isEmpty) return remote.map((e) => Map<String, dynamic>.from(e)).toList();
  final byId = <String, Map<String, dynamic>>{};
  for (final p in local) {
    final id = (p['id'] ?? '').toString();
    if (id.isNotEmpty) byId[id] = Map<String, dynamic>.from(p);
  }
  for (final p in remote) {
    final id = (p['id'] ?? '').toString();
    if (id.isEmpty) continue;
    final r = Map<String, dynamic>.from(p);
    final existing = byId[id];
    if (existing == null) {
      byId[id] = r;
      continue;
    }
    final localPaid = (existing['status'] ?? '') == 'paid';
    final remotePaid = (r['status'] ?? '') == 'paid';
    if (remotePaid && !localPaid) {
      byId[id] = r;
    } else if (localPaid && !remotePaid) {
      byId[id] = existing;
    } else {
      final lp = (existing['paidAt'] ?? '').toString();
      final rp = (r['paidAt'] ?? '').toString();
      byId[id] = rp.compareTo(lp) >= 0 ? r : existing;
    }
  }
  final out = byId.values.toList();
  out.sort((a, b) => (a['id'] ?? '').toString().compareTo((b['id'] ?? '').toString()));
  return out;
}

void ngmyLoanMergePaymentsIntoApp(Map<String, dynamic> dst, Map<String, dynamic> src) {
  final local = (dst['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
  final remote = (src['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
  if (local.isEmpty && remote.isEmpty) return;
  dst['payments'] = ngmyLoanMergePaymentsList(local, remote);
}

int ngmyLoanPaidCount(List<dynamic> payments) =>
    payments.where((p) => p is Map && (p['status'] ?? '') == 'paid').length;

double ngmyLoanPaidTotal(List<dynamic> payments) {
  var sum = 0.0;
  for (final p in payments) {
    if (p is! Map) continue;
    if ((p['status'] ?? '') != 'paid') continue;
    sum += (p['paidAmount'] as num?)?.toDouble() ?? (p['amount'] as num?)?.toDouble() ?? 0;
  }
  return sum;
}

/// Cloud + local backup for weekly payment recordings (admin → user in real time).
class NgmyLoanPaymentsCloud {
  static const _settingsKey = 'ngmy_loan_payments_map_v1';

  static List<Map<String, dynamic>> paymentsFromLoan(Map<String, dynamic> loan) {
    return (loan['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
  }

  static Map<String, dynamic> paymentsMapFromApps(List<Map<String, dynamic>> apps) {
    final map = <String, dynamic>{};
    for (final loan in apps) {
      final id = (loan['id'] ?? '').toString().trim();
      final payments = paymentsFromLoan(loan);
      if (id.isEmpty || payments.isEmpty) continue;
      map[id] = {
        'payments': payments,
        'updatedAt': loan['paymentsUpdatedAt'] ?? loan['updatedAt'] ?? DateTime.now().toUtc().toIso8601String(),
      };
    }
    return map;
  }

  static void applyPaymentsMap(List<Map<String, dynamic>> apps, Map<String, dynamic> payMap) {
    for (var i = 0; i < apps.length; i++) {
      final id = (apps[i]['id'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      final entry = payMap[id];
      if (entry is! Map) continue;
      final remote = Map<String, dynamic>.from(entry);
      final remotePayments = (remote['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
      if (remotePayments.isEmpty) continue;
      final localPayments = paymentsFromLoan(apps[i]);
      apps[i]['payments'] = ngmyLoanMergePaymentsList(localPayments, remotePayments);
      final ru = (remote['updatedAt'] ?? '').toString();
      if (ru.isNotEmpty) apps[i]['paymentsUpdatedAt'] = ru;
    }
  }

  static Future<void> pushLoan(String loanId, Map<String, dynamic> loan) async {
    if (!await ngmyCanReachCloud() || loanId.trim().isEmpty) return;
    try {
      final payments = paymentsFromLoan(loan);
      if (payments.isEmpty) return;
      Map<String, dynamic> existing = {};
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _settingsKey).maybeSingle();
      if (row != null) {
        final value = row['value'];
        if (value is Map) {
          final m = value['payments'];
          if (m is Map) existing = Map<String, dynamic>.from(m);
        }
      }
      existing[loanId] = {
        'payments': payments,
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      };
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _settingsKey,
          'value': {'payments': existing, 'savedAt': DateTime.now().toUtc().toIso8601String()},
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
    } catch (e) {
      debugPrint('[loan payments cloud] push: $e');
    }
  }

  static Future<void> pushFromApps(List<Map<String, dynamic>> apps) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _settingsKey,
          'value': {'payments': paymentsMapFromApps(apps), 'savedAt': DateTime.now().toUtc().toIso8601String()},
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key');
    } catch (e) {
      debugPrint('[loan payments cloud] push all: $e');
    }
  }

  static Future<void> fetchAndApply(List<Map<String, dynamic>> apps) async {
    if (!await ngmyCanReachCloud() || apps.isEmpty) return;
    try {
      final row = await Supabase.instance.client.from('ngmy_settings').select().eq('key', _settingsKey).maybeSingle();
      if (row == null) return;
      final value = row['value'];
      if (value is! Map) return;
      final payments = value['payments'];
      if (payments is Map) applyPaymentsMap(apps, Map<String, dynamic>.from(payments));
    } catch (e) {
      debugPrint('[loan payments cloud] fetch: $e');
    }
  }

  static Future<void> fetchAndApplyForLoan(List<Map<String, dynamic>> apps, String loanId) async {
    await fetchAndApply(apps);
    await NgmyLoanPaymentsStore.applyTo(apps, loanId: loanId);
  }
}

class NgmyLoanPaymentsStore {
  static String _key(String loanId) => 'ngmy_loan_payments_${loanId.trim()}';

  static Future<void> save(String loanId, List<Map<String, dynamic>> payments) async {
    if (loanId.trim().isEmpty || payments.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      _key(loanId),
      jsonEncode({
        'payments': payments,
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
      }),
    );
  }

  static Future<void> applyTo(List<Map<String, dynamic>> apps, {String? loanId}) async {
    if (apps.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    for (var i = 0; i < apps.length; i++) {
      final id = (apps[i]['id'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      if (loanId != null && loanId.trim().isNotEmpty && id != loanId.trim()) continue;
      final raw = prefs.getString(_key(id));
      if (raw == null || raw.isEmpty) continue;
      try {
        final m = Map<String, dynamic>.from(jsonDecode(raw) as Map);
        final stored = (m['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
        if (stored.isEmpty) continue;
        final local = NgmyLoanPaymentsCloud.paymentsFromLoan(apps[i]);
        apps[i]['payments'] = ngmyLoanMergePaymentsList(local, stored);
        if (m['updatedAt'] != null) apps[i]['paymentsUpdatedAt'] = m['updatedAt'];
      } catch (_) {}
    }
  }
}

/// Cached loan photo widget — no blink on tap/rebuild.
class NgmyLoanImage extends StatefulWidget {
  const NgmyLoanImage(this.ref, {super.key, this.fit = BoxFit.cover});
  final dynamic ref;
  final BoxFit fit;

  @override
  State<NgmyLoanImage> createState() => _NgmyLoanImageState();
}

class _NgmyLoanImageState extends State<NgmyLoanImage> {
  static final Map<String, String> _resolvedUrls = {};
  static final Map<String, Uint8List> _memoryBytes = {};

  String? _display;
  Uint8List? _bytes;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _resolve();
  }

  Future<void> _resolve() async {
    final src = (widget.ref ?? '').toString().trim();
    if (src.isEmpty) {
      if (mounted) setState(() => _loading = false);
      return;
    }
    if (src.startsWith('data:image')) {
      try {
        final b = base64Decode(src.split(',').last);
        _memoryBytes[src] = b;
        if (mounted) setState(() { _bytes = b; _loading = false; });
        return;
      } catch (_) {}
    }
    if (_memoryBytes.containsKey(src)) {
      if (mounted) setState(() { _bytes = _memoryBytes[src]; _loading = false; });
      return;
    }
    if (_resolvedUrls.containsKey(src)) {
      if (mounted) setState(() { _display = _resolvedUrls[src]; _loading = false; });
      return;
    }
    if (src.startsWith('http')) {
      _resolvedUrls[src] = src;
      if (mounted) setState(() { _display = src; _loading = false; });
      return;
    }
    final resolved = await NgmyLoanStore.resolveRef(src);
    _resolvedUrls[src] = resolved;
    if (resolved.startsWith('data:image')) {
      try {
        final b = base64Decode(resolved.split(',').last);
        _memoryBytes[src] = b;
        if (mounted) setState(() { _bytes = b; _loading = false; });
        return;
      } catch (_) {}
    }
    if (mounted) setState(() { _display = resolved; _loading = false; });
  }

  @override
  Widget build(BuildContext context) {
    if (_bytes != null && _bytes!.isNotEmpty) {
      return Image.memory(_bytes!, fit: widget.fit, gaplessPlayback: true, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined, size: 28));
    }
    final url = _display ?? '';
    if (url.startsWith('http')) {
      return Image.network(url, fit: widget.fit, gaplessPlayback: true, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined, size: 28));
    }
    if (!kIsWeb && url.startsWith('/')) {
      return Image.file(File(url), fit: widget.fit, gaplessPlayback: true);
    }
    if (_loading) {
      return const Center(child: SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2)));
    }
    return const Icon(Icons.image_not_supported, size: 32);
  }
}

/// Bridge to app config without importing main.dart (avoids circular imports).
class NgmyLoanConfigBridge {
  NgmyLoanConfigBridge({
    required this.loanApplications,
    required this.loanPhone,
    required this.loanHowItWorks,
    required this.officialCashApp,
    required this.loanCompanyZelle,
  });

  List<Map<String, dynamic>> loanApplications;
  String loanPhone;
  String loanHowItWorks;
  String officialCashApp;
  String loanCompanyZelle;
}

String ngmyLoanFormatCurrency(double v) {
  if (v == v.roundToDouble()) return v.toStringAsFixed(0);
  return v.toStringAsFixed(2);
}

const Color _loanGreen = Color(0xFF00B25A);
const Color _loanGreenDark = Color(0xFF00894B);

class _LoanUi {
  _LoanUi(this.isDark);
  final bool isDark;

  Color get pageBg => isDark ? const Color(0xFF0A0E18) : const Color(0xFFF3F4F6);
  Color get card => isDark ? const Color(0xFF151B28) : Colors.white;
  Color get fieldFill => isDark ? const Color(0xFF1E2535) : const Color(0xFFF9FAFB);
  Color get textPrimary => isDark ? Colors.white : const Color(0xFF111827);
  Color get textSecondary => isDark ? Colors.white70 : const Color(0xFF6B7280);
  Color get border => isDark ? Colors.white24 : Colors.grey.shade300;
  Color get subtle => isDark ? Colors.white12 : Colors.black.withValues(alpha: 0.04);
}

/// Loan applications, admin review, and payment tracking.
class NgmyLoanServicesScreen extends StatefulWidget {
  const NgmyLoanServicesScreen({
    super.key,
    required this.userEmail,
    required this.username,
    required this.config,
    required this.onDataChanged,
    this.onPersistNow,
    this.onRefreshLoans,
  });

  final String userEmail;
  final String username;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final Future<bool> Function()? onPersistNow;
  final Future<void> Function()? onRefreshLoans;

  @override
  State<NgmyLoanServicesScreen> createState() => _NgmyLoanServicesScreenState();
}

class _NgmyLoanServicesScreenState extends State<NgmyLoanServicesScreen> with WidgetsBindingObserver {
  bool _refreshing = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    unawaited(_refreshLoans());
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) unawaited(_refreshLoans());
  }

  Future<void> _refreshLoans() async {
    if (_refreshing) return;
    _refreshing = true;
    try {
      await widget.onRefreshLoans?.call();
      await NgmyLoanStatusCloud.fetchAndApply(widget.config.loanApplications);
      await NgmyLoanPaymentsCloud.fetchAndApply(widget.config.loanApplications);
      await NgmyLoanPaymentsStore.applyTo(widget.config.loanApplications);
    } finally {
      _refreshing = false;
      if (mounted) setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ui = _LoanUi(isDark);
    final myLoans = NgmyLoanStore.appsForUser(widget.config.loanApplications, widget.userEmail);
    final active = myLoans.where((a) => (a['status'] ?? '') == 'approved').toList();
    final pending = myLoans.where((a) => (a['status'] ?? '') == 'pending').toList();
    final rejected = myLoans.where((a) => (a['status'] ?? '') == 'rejected').toList();

    return Scaffold(
      backgroundColor: ui.pageBg,
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: ui.textPrimary,
        elevation: 0,
        scrolledUnderElevation: 0,
        surfaceTintColor: Colors.transparent,
        leading: Padding(
          padding: const EdgeInsets.only(left: 8),
          child: IconButton(
            icon: Icon(Icons.arrow_back_ios_new_rounded, color: ui.textPrimary, size: 20),
            onPressed: () => Navigator.pop(context),
          ),
        ),
        title: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: isDark ? Colors.white.withValues(alpha: 0.08) : Colors.white.withValues(alpha: 0.92),
            border: Border.all(color: _loanGreen.withValues(alpha: 0.35)),
            boxShadow: [
              BoxShadow(color: _loanGreen.withValues(alpha: 0.15), blurRadius: 12, offset: const Offset(0, 4)),
              BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.2 : 0.06), blurRadius: 6),
            ],
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: const EdgeInsets.all(6),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: const Icon(Icons.trending_up_rounded, color: Colors.white, size: 16),
              ),
              const SizedBox(width: 8),
              Text('Loan Services', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: ui.textPrimary)),
            ],
          ),
        ),
        centerTitle: true,
      ),
      body: RefreshIndicator(
        color: _loanGreen,
        onRefresh: _refreshLoans,
        child: SingleChildScrollView(
          physics: const AlwaysScrollableScrollPhysics(),
          padding: EdgeInsets.fromLTRB(20, MediaQuery.paddingOf(context).top + kToolbarHeight + 8, 20, 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _headerCard(),
              if (active.isNotEmpty) ...[
                const SizedBox(height: 18),
                ...active.map((a) => _activeLoanHeroCard(context, a, isDark)),
              ],
              const SizedBox(height: 18),
              Center(
                child: Material(
                  color: Colors.transparent,
                  child: InkWell(
                    borderRadius: BorderRadius.circular(28),
                    onTap: () => _openApplication(context),
                    child: Ink(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(28),
                        gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]),
                        boxShadow: [
                          BoxShadow(color: _loanGreen.withValues(alpha: 0.4), blurRadius: 14, offset: const Offset(0, 5)),
                        ],
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 12),
                      child: const Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.description_outlined, color: Colors.white, size: 18),
                          SizedBox(width: 8),
                          Text('Apply for a Loan', style: TextStyle(fontWeight: FontWeight.w900, color: Colors.white, fontSize: 14)),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              if (pending.isNotEmpty) ...[
                const SizedBox(height: 20),
                Text('Pending review', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: ui.textPrimary)),
                const SizedBox(height: 8),
                ...pending.map((a) => _loanTile(context, a, isDark)),
              ],
              if (rejected.isNotEmpty) ...[
                const SizedBox(height: 20),
                const Text('Rejected — you may apply again', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.redAccent)),
                ...rejected.map((a) => _loanTile(context, a, isDark)),
              ],
              const SizedBox(height: 24),
              _howItWorks(context, isDark),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }

  Widget _headerCard() => Container(
        width: double.infinity,
        padding: const EdgeInsets.all(22),
        decoration: BoxDecoration(
          gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]),
          borderRadius: BorderRadius.circular(22),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Row(
              children: [
                Icon(Icons.attach_money_rounded, color: Colors.white, size: 28),
                SizedBox(width: 12),
                Text('Loan Services', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 22)),
              ],
            ),
            const SizedBox(height: 10),
            Text(
              'Call ${widget.config.loanPhone} or apply with collateral.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 13, height: 1.4),
            ),
            const SizedBox(height: 6),
            Text(
              'Up to 2 loans under \$1,000 · 1 loan if \$1,000+.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 11, fontWeight: FontWeight.w600),
            ),
          ],
        ),
      );

  Widget _howItWorks(BuildContext context, bool isDark) {
    final lines = widget.config.loanHowItWorks.split('\n').where((l) => l.trim().isNotEmpty).toList();
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: isDark ? const Color(0xFF151B28) : Colors.white,
        border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFD1FAE5)),
        boxShadow: isDark ? null : [BoxShadow(color: _loanGreen.withValues(alpha: 0.08), blurRadius: 16, offset: const Offset(0, 6))],
      ),
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 16, 48, 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('How it works', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : _loanGreenDark)),
                const SizedBox(height: 12),
                ...lines.asMap().entries.map((e) {
                  final text = e.value.replaceFirst(RegExp(r'^\d+\.\s*'), '').trim();
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          width: 22,
                          height: 22,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(color: _loanGreen.withValues(alpha: 0.15), shape: BoxShape.circle),
                          child: Text('${e.key + 1}', style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w900, color: _loanGreen)),
                        ),
                        const SizedBox(width: 10),
                        Expanded(child: Text(text, style: TextStyle(fontSize: 12, height: 1.45, color: isDark ? Colors.white70 : Colors.black87))),
                      ],
                    ),
                  );
                }),
              ],
            ),
          ),
          Positioned(
            top: 10,
            right: 10,
            child: Material(
              color: Colors.transparent,
              child: InkWell(
                borderRadius: BorderRadius.circular(12),
                onTap: () => showNgmyLoanCalculator(context),
                child: Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]),
                    borderRadius: BorderRadius.circular(12),
                    boxShadow: [BoxShadow(color: _loanGreen.withValues(alpha: 0.35), blurRadius: 8, offset: const Offset(0, 3))],
                  ),
                  child: const Icon(Icons.calculate_rounded, color: Colors.white, size: 18),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _activeLoanHeroCard(BuildContext context, Map<String, dynamic> app, bool isDark) {
    final amount = (app['amount'] as num?)?.toDouble() ?? 0;
    final total = (app['totalRepayment'] as num?)?.toDouble() ?? 0;
    final payments = app['payments'] as List? ?? [];
    final paid = ngmyLoanPaidCount(payments);
    final totalWeeks = payments.length;
    final progress = totalWeeks > 0 ? paid / totalWeeks : 0.0;
    final paidTotal = ngmyLoanPaidTotal(payments);
    final remaining = (total - paidTotal).clamp(0.0, total).toDouble();
    final weekly = totalWeeks > 0 ? total / totalWeeks : 0.0;

    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        gradient: const LinearGradient(
          colors: [Color(0xFF00C96A), Color(0xFF007A45), Color(0xFF005C34)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        boxShadow: [
          BoxShadow(color: _loanGreen.withValues(alpha: 0.45), blurRadius: 22, offset: const Offset(0, 10)),
          BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 8, offset: const Offset(0, 4)),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(26),
          onTap: () => Navigator.push(
            context,
            MaterialPageRoute<void>(
              builder: (_) => NgmyLoanTrackingScreen(
                loanId: (app['id'] ?? '').toString(),
                config: widget.config,
                onDataChanged: widget.onDataChanged,
                isAdmin: false,
                onPersistNow: widget.onPersistNow,
                onRefreshLoans: widget.onRefreshLoans,
              ),
            ),
          ),
          child: Stack(
            children: [
              Positioned(right: -30, top: -30, child: Container(width: 120, height: 120, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.08)))),
              Positioned(left: -20, bottom: -20, child: Container(width: 80, height: 80, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.06)))),
              Padding(
                padding: const EdgeInsets.fromLTRB(22, 22, 22, 20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(20)),
                          child: const Text('ACTIVE LOAN', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
                        ),
                        const Spacer(),
                        const Icon(Icons.bolt_rounded, color: Colors.white70, size: 20),
                        const SizedBox(width: 4),
                        const Text('Live', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w800)),
                      ],
                    ),
                    const SizedBox(height: 16),
                    Text('\$${ngmyLoanFormatCurrency(amount)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 38, height: 1)),
                    const SizedBox(height: 4),
                    Text((app['scheduleSummary'] ?? '').toString(), style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12)),
                    const SizedBox(height: 18),
                    Row(
                      children: [
                        _heroStat('Total due', '\$${ngmyLoanFormatCurrency(total)}'),
                        const SizedBox(width: 16),
                        _heroStat('Weekly', '\$${ngmyLoanFormatCurrency(weekly)}'),
                        const SizedBox(width: 16),
                        _heroStat('Left', '\$${ngmyLoanFormatCurrency(remaining)}'),
                      ],
                    ),
                    const SizedBox(height: 16),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(6),
                      child: LinearProgressIndicator(value: progress, minHeight: 8, backgroundColor: Colors.white24, color: Colors.white),
                    ),
                    const SizedBox(height: 8),
                    Row(
                      children: [
                        Text('$paid of $totalWeeks payments received', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12)),
                        const Spacer(),
                        const Text('Tap to track →', style: TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w600)),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _heroStat(String label, String value) => Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 10, fontWeight: FontWeight.w600)),
            Text(value, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
          ],
        ),
      );

  Widget _loanTile(BuildContext context, Map<String, dynamic> app, bool isDark) {
    final status = (app['status'] ?? 'pending').toString();
    final amount = (app['amount'] as num?)?.toDouble() ?? 0;
    final payments = app['payments'] as List? ?? [];
    final paid = ngmyLoanPaidCount(payments);
    final total = payments.length;
    final progress = total > 0 ? paid / total : 0.0;
    Color c = Colors.orange;
    if (status == 'approved') c = _loanGreen;
    if (status == 'rejected') c = Colors.red;
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF151B28) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: c.withValues(alpha: 0.35)),
        boxShadow: isDark ? null : [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 10, offset: const Offset(0, 4))],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: status == 'approved'
            ? () => Navigator.push(
                  context,
                  MaterialPageRoute<void>(
                    builder: (_) => NgmyLoanTrackingScreen(
                      loanId: (app['id'] ?? '').toString(),
                      config: widget.config,
                      onDataChanged: widget.onDataChanged,
                      isAdmin: false,
                      onPersistNow: widget.onPersistNow,
                      onRefreshLoans: widget.onRefreshLoans,
                    ),
                  ),
                )
            : (status == 'rejected'
                ? () {
                    final reason = (app['rejectionReason'] ?? '').toString();
                    showDialog<void>(
                      context: context,
                      builder: (c) => AlertDialog(
                        title: const Text('Application rejected'),
                        content: Text(reason.isEmpty ? 'No reason provided. You may apply again.' : reason),
                        actions: [TextButton(onPressed: () => Navigator.pop(c), child: const Text('OK'))],
                      ),
                    );
                  }
                : null),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(color: c.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
                  child: Icon(status == 'approved' ? Icons.payments_rounded : Icons.hourglass_top_rounded, color: c, size: 22),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('\$${ngmyLoanFormatCurrency(amount)} · ${status.toUpperCase()}', style: TextStyle(fontWeight: FontWeight.w900, color: c, fontSize: 14)),
                      const SizedBox(height: 4),
                      Text(
                        status == 'rejected' && (app['rejectionReason'] ?? '').toString().isNotEmpty
                            ? 'Rejected: ${app['rejectionReason']}'
                            : (app['scheduleSummary'] ?? '').toString(),
                        maxLines: 2,
                        style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.grey.shade600),
                      ),
                      if (status == 'approved' && total > 0) ...[
                        const SizedBox(height: 8),
                        ClipRRect(
                          borderRadius: BorderRadius.circular(4),
                          child: LinearProgressIndicator(value: progress, minHeight: 5, backgroundColor: c.withValues(alpha: 0.15), color: c),
                        ),
                        const SizedBox(height: 4),
                        Text('$paid of $total payments received', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: c)),
                      ],
                    ],
                  ),
                ),
                if (status == 'approved') const Icon(Icons.chevron_right_rounded, color: _loanGreen),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<void> _openApplication(BuildContext context) async {
    final myLoans = NgmyLoanStore.appsForUser(widget.config.loanApplications, widget.userEmail);
    if (!NgmyLoanLogic.canUserApplyAnother(myLoans)) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(NgmyLoanLogic.loanLimitMessage(myLoans))));
      return;
    }
    final ok = await Navigator.push<bool>(
      context,
      MaterialPageRoute<bool>(builder: (_) => NgmyLoanApplicationScreen(userEmail: widget.userEmail, username: widget.username, config: widget.config, onDataChanged: widget.onDataChanged, onPersistNow: widget.onPersistNow)),
    );
    if (ok == true && mounted) setState(() {});
  }
}

class NgmyLoanApplicationScreen extends StatefulWidget {
  const NgmyLoanApplicationScreen({super.key, required this.userEmail, required this.username, required this.config, required this.onDataChanged, this.onPersistNow});
  final String userEmail;
  final String username;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final Future<bool> Function()? onPersistNow;

  @override
  State<NgmyLoanApplicationScreen> createState() => _NgmyLoanApplicationScreenState();
}

class _NgmyLoanApplicationScreenState extends State<NgmyLoanApplicationScreen> {
  final _amountC = TextEditingController();
  final _fullNameC = TextEditingController();
  final _phoneC = TextEditingController();
  final _emailC = TextEditingController();
  final _addressC = TextEditingController();
  final _govIdC = TextEditingController();
  final _idExpC = TextEditingController();
  final _ssnC = TextEditingController();
  final _receiveDetailC = TextEditingController();
  final _customCollateralC = TextEditingController();
  final _picker = ImagePicker();

  String? _paymentMethod;
  String? _collateralChoice;
  String _idType = 'drivers_license';
  int _termMonths = 12;
  DateTime? _dateOfBirth;
  bool _submitting = false;
  Timer? _draftTimer;

  String? _idFront;
  String? _idBack;
  String? _selfie;
  String? _titleFront;
  String? _titleBack;

  double get _amount => double.tryParse(_amountC.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 0;

  @override
  void initState() {
    super.initState();
    _emailC.text = widget.userEmail;
    _loadDraft();
    for (final c in [_amountC, _fullNameC, _phoneC, _emailC, _addressC, _govIdC, _idExpC, _ssnC, _receiveDetailC, _customCollateralC]) {
      c.addListener(_scheduleDraftSave);
    }
  }

  void _scheduleDraftSave() {
    _draftTimer?.cancel();
    _draftTimer = Timer(const Duration(milliseconds: 500), _saveDraft);
  }

  Future<void> _loadDraft() async {
    final d = await NgmyLoanDraftStore.load(widget.userEmail);
    if (d == null || !mounted) return;
    setState(() {
      _amountC.text = (d['amount'] ?? '').toString();
      _fullNameC.text = (d['fullLegalName'] ?? '').toString();
      _phoneC.text = (d['phone'] ?? '').toString();
      _emailC.text = (d['email'] ?? widget.userEmail).toString();
      _addressC.text = (d['homeAddress'] ?? '').toString();
      _govIdC.text = (d['governmentId'] ?? '').toString();
      _idExpC.text = (d['idExpiration'] ?? '').toString();
      _ssnC.text = (d['ssn'] ?? '').toString();
      _receiveDetailC.text = (d['receiveDetails'] ?? d['payoutDestination'] ?? '').toString();
      _customCollateralC.text = (d['collateralCustomNote'] ?? '').toString();
      _idType = (d['idType'] ?? 'drivers_license').toString();
      _paymentMethod = (d['receiveMethod'] as String?)?.isNotEmpty == true ? d['receiveMethod'].toString() : null;
      _collateralChoice = (d['collateralType'] as String?)?.isNotEmpty == true ? d['collateralType'].toString() : null;
      _termMonths = (d['termMonths'] as num?)?.toInt() ?? 12;
      final dob = DateTime.tryParse((d['dateOfBirth'] ?? '').toString());
      if (dob != null) _dateOfBirth = dob;
      _idFront = (d['idFrontRef'] as String?)?.isNotEmpty == true ? d['idFrontRef'].toString() : null;
      _idBack = (d['idBackRef'] as String?)?.isNotEmpty == true ? d['idBackRef'].toString() : null;
      _selfie = (d['selfieRef'] as String?)?.isNotEmpty == true ? d['selfieRef'].toString() : null;
      _titleFront = (d['titleFrontRef'] as String?)?.isNotEmpty == true ? d['titleFrontRef'].toString() : null;
      _titleBack = (d['titleBackRef'] as String?)?.isNotEmpty == true ? d['titleBackRef'].toString() : null;
    });
  }

  Future<void> _saveDraft() async {
    await NgmyLoanDraftStore.save(widget.userEmail, {
      'amount': _amountC.text.trim(),
      'fullLegalName': _fullNameC.text.trim(),
      'phone': _phoneC.text.trim(),
      'email': _emailC.text.trim(),
      'homeAddress': _addressC.text.trim(),
      'governmentId': _govIdC.text.trim(),
      'idExpiration': _idExpC.text.trim(),
      'ssn': _ssnC.text.trim(),
      'receiveDetails': _receiveDetailC.text.trim(),
      'payoutDestination': _receiveDetailC.text.trim(),
      'collateralCustomNote': _customCollateralC.text.trim(),
      'idType': _idType,
      'receiveMethod': _paymentMethod ?? '',
      'collateralType': _collateralChoice ?? '',
      'termMonths': _termMonths,
      'dateOfBirth': _dateOfBirth?.toUtc().toIso8601String() ?? '',
      'idFrontRef': _idFront ?? '',
      'idBackRef': _idBack ?? '',
      'selfieRef': _selfie ?? '',
      'titleFrontRef': _titleFront ?? '',
      'titleBackRef': _titleBack ?? '',
    });
  }

  @override
  void dispose() {
    _draftTimer?.cancel();
    _amountC.dispose();
    _fullNameC.dispose();
    _phoneC.dispose();
    _emailC.dispose();
    _addressC.dispose();
    _govIdC.dispose();
    _idExpC.dispose();
    _ssnC.dispose();
    _receiveDetailC.dispose();
    _customCollateralC.dispose();
    super.dispose();
  }

  InputDecoration _fieldDeco(_LoanUi ui, String label, {String? hint, bool required = true}) => InputDecoration(
        labelText: required ? '$label *' : label,
        hintText: hint,
        labelStyle: TextStyle(color: ui.textSecondary),
        hintStyle: TextStyle(color: ui.textSecondary.withValues(alpha: 0.7)),
        filled: true,
        fillColor: ui.fieldFill,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: ui.border)),
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: ui.border)),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: const BorderSide(color: _loanGreen, width: 1.5)),
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      );

  Widget _sectionTitle(_LoanUi ui, String title) => Padding(
        padding: const EdgeInsets.only(bottom: 10, top: 4),
        child: Text(title, style: TextStyle(fontSize: 17, fontWeight: FontWeight.w800, color: ui.textPrimary)),
      );

  Widget _uploadBox(_LoanUi ui, {required String label, required String hint, required bool done, required VoidCallback onTap}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('$label *', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 12, color: ui.textSecondary)),
          const SizedBox(height: 5),
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: onTap,
              borderRadius: BorderRadius.circular(10),
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 11, horizontal: 12),
                decoration: BoxDecoration(
                  color: done ? _loanGreen.withValues(alpha: isDark ? 0.15 : 0.08) : ui.fieldFill,
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: done ? _loanGreen : ui.border, width: done ? 1.5 : 1),
                ),
                child: Row(
                  children: [
                    Icon(done ? Icons.check_circle_rounded : Icons.add_a_photo_outlined, color: done ? _loanGreen : ui.textSecondary, size: 20),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        done ? 'Uploaded — tap to replace' : hint,
                        style: TextStyle(color: done ? _loanGreen : ui.textSecondary, fontSize: 12, fontWeight: FontWeight.w500),
                      ),
                    ),
                    Icon(Icons.chevron_right_rounded, color: ui.textSecondary, size: 20),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  bool get isDark => Theme.of(context).brightness == Brightness.dark;

  Widget _choiceChip(_LoanUi ui, {required String label, required IconData icon, required bool selected, required VoidCallback onTap}) {
    return Expanded(
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(10),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 6),
            decoration: BoxDecoration(
              color: selected ? _loanGreen.withValues(alpha: isDark ? 0.22 : 0.12) : ui.fieldFill,
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: selected ? _loanGreen : ui.border, width: selected ? 1.5 : 1),
            ),
            child: Column(
              children: [
                Icon(icon, size: 20, color: selected ? _loanGreen : ui.textSecondary),
                const SizedBox(height: 4),
                Text(label, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: selected ? _loanGreen : ui.textSecondary)),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<ImageSource?> _showPhotoSourceSheet(String label) async {
    final ui = _LoanUi(isDark);
    return showModalBottomSheet<ImageSource>(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (c) => Padding(
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 20),
        child: Container(
          decoration: BoxDecoration(
            color: ui.card,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: ui.border),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const SizedBox(height: 10),
              Container(width: 36, height: 4, decoration: BoxDecoration(color: ui.border, borderRadius: BorderRadius.circular(99))),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 16, 20, 8),
                child: Text(label, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 16, color: ui.textPrimary)),
              ),
              Text('Choose how to add your photo', style: TextStyle(fontSize: 12, color: ui.textSecondary)),
              const SizedBox(height: 12),
              ListTile(
                leading: Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(color: _loanGreen.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10)),
                  child: const Icon(Icons.camera_alt_rounded, color: _loanGreen),
                ),
                title: Text('Take photo', style: TextStyle(fontWeight: FontWeight.w700, color: ui.textPrimary)),
                onTap: () => Navigator.pop(c, ImageSource.camera),
              ),
              ListTile(
                leading: Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(color: _loanGreen.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10)),
                  child: const Icon(Icons.photo_library_rounded, color: _loanGreen),
                ),
                title: Text('Choose from gallery', style: TextStyle(fontWeight: FontWeight.w700, color: ui.textPrimary)),
                onTap: () => Navigator.pop(c, ImageSource.gallery),
              ),
              const SizedBox(height: 8),
              TextButton(onPressed: () => Navigator.pop(c), child: Text('Cancel', style: TextStyle(color: ui.textSecondary))),
              const SizedBox(height: 8),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _pickDob() async {
    final now = DateTime.now();
    final picked = await showDatePicker(
      context: context,
      initialDate: _dateOfBirth ?? DateTime(now.year - 25),
      firstDate: DateTime(now.year - 100),
      lastDate: DateTime(now.year - 18),
    );
    if (picked != null) setState(() => _dateOfBirth = picked);
  }

  Future<String?> _pickPhoto(String label) async {
    final src = await _showPhotoSourceSheet(label);
    if (src == null) return null;
    final file = await _picker.pickImage(source: src, imageQuality: 82, maxWidth: 1600);
    if (file == null) return null;
    return NgmyLoanStore.storeImageRef(file);
  }

  List<String> _validate() {
    final missing = <String>[];
    if (_amount <= 0) missing.add('Requested loan amount');
    if (_fullNameC.text.trim().isEmpty) missing.add('Full legal name');
    if (_dateOfBirth == null) missing.add('Date of birth');
    if (_phoneC.text.trim().isEmpty) missing.add('Phone number');
    if (_emailC.text.trim().isEmpty) missing.add('Email address');
    if (_addressC.text.trim().isEmpty) missing.add('Home address');
    if (_ssnC.text.replaceAll(RegExp(r'\D'), '').length != 9) missing.add('Social Security Number (9 digits)');
    if (_govIdC.text.trim().isEmpty) missing.add('Government ID number');
    if (_idExpC.text.trim().isEmpty) missing.add('ID expiration date');
    if (_idFront == null) missing.add('ID photo — front');
    if (_idBack == null) missing.add('ID photo — back');
    if (_selfie == null) missing.add('Selfie photo');
    if (_paymentMethod == null) missing.add('Payment method (tap Cash App, Zelle, or Other)');
    if (_receiveDetailC.text.trim().isEmpty) missing.add(_paymentDetailLabel());
    if (_collateralChoice == null) {
      missing.add('Collateral type (phone, vehicle, property, or other)');
    } else if (_collateralChoice == 'custom') {
      if (_customCollateralC.text.trim().isEmpty) missing.add('Description of what you are offering as collateral');
    } else {
      if (_titleFront == null) missing.add('Collateral photo — front');
      if (_titleBack == null) missing.add('Collateral photo — back');
    }
    if (_amount > 2000 && _termMonths < 1) missing.add('Repayment term (choose months for loans over \$2,000)');
    return missing;
  }

  Future<void> _submit() async {
    final missing = _validate();
    if (missing.isNotEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Please complete:\n• ${missing.join('\n• ')}'), duration: const Duration(seconds: 5)),
      );
      return;
    }
    final myLoans = NgmyLoanStore.appsForUser(widget.config.loanApplications, widget.userEmail);
    if (!NgmyLoanLogic.canUserApplyAnother(myLoans, newAmount: _amount)) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(NgmyLoanLogic.loanLimitMessage(myLoans, newAmount: _amount))));
      return;
    }
    setState(() => _submitting = true);
    try {
      final collateralType = _collateralChoice ?? 'custom';
      final term = NgmyLoanLogic.termForAmount(_amount, userMonths: _amount > 2000 ? _termMonths : null);
      final interest = _amount * NgmyLoanLogic.interestRate;
      final total = _amount + interest;
      final weekly = total / term.weeks;

      final payments = List.generate(term.weeks, (i) {
        final due = DateTime.now().add(Duration(days: 7 * (i + 1)));
        return {
          'id': '${i + 1}',
          'dueDate': due.toUtc().toIso8601String(),
          'amount': double.parse(weekly.toStringAsFixed(2)),
          'status': 'pending',
          'paidAmount': 0.0,
          'paidAt': '',
        };
      });

      widget.config.loanApplications.insert(0, {
        'id': DateTime.now().microsecondsSinceEpoch.toString(),
        'userEmail': widget.userEmail,
        'username': widget.username,
        'status': 'pending',
        'createdAt': DateTime.now().toUtc().toIso8601String(),
        'updatedAt': DateTime.now().toUtc().toIso8601String(),
        'amount': _amount,
        'interestRate': NgmyLoanLogic.interestRate,
        'totalRepayment': double.parse(total.toStringAsFixed(2)),
        'scheduleSummary': term.summary,
        'termWeeks': term.weeks,
        'termMonths': _amount > 2000 ? _termMonths : term.monthsLabel,
        'collateralType': collateralType,
        'collateralCustomNote': _customCollateralC.text.trim(),
        'fullLegalName': _fullNameC.text.trim(),
        'dateOfBirth': _dateOfBirth?.toUtc().toIso8601String() ?? '',
        'phone': _phoneC.text.trim(),
        'email': _emailC.text.trim(),
        'homeAddress': _addressC.text.trim(),
        'idType': _idType,
        'idExpiration': _idExpC.text.trim(),
        'ssn': _ssnC.text.trim(),
        'governmentId': _govIdC.text.trim(),
        'idFrontRef': _idFront,
        'idBackRef': _idBack,
        'selfieRef': _selfie,
        'titleFrontRef': _titleFront ?? '',
        'titleBackRef': _titleBack ?? '',
        'receiveMethod': _paymentMethod ?? 'other',
        'receiveDetails': _receiveDetailC.text.trim(),
        'payoutDestination': _receiveDetailC.text.trim(),
        'companyCashApp': widget.config.officialCashApp,
        'companyZelle': widget.config.loanCompanyZelle,
        'rejectionReason': '',
        'payments': payments,
      });
      widget.onDataChanged();
      await widget.onPersistNow?.call();
      await NgmyLoanDraftStore.clear(widget.userEmail);
      if (!mounted) return;
      Navigator.pop(context, true);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Loan application submitted. Admin will review soon.')));
    } finally {
      if (mounted) setState(() => _submitting = false);
    }
  }

  String _paymentDetailLabel() {
    return switch (_paymentMethod) {
      'cashapp' => 'Cash App \$cashtag',
      'zelle' => 'Zelle phone or email',
      'other' => 'How you want to receive funds',
      _ => 'Payment details',
    };
  }

  String _paymentDetailHint() {
    return switch (_paymentMethod) {
      'cashapp' => r'e.g. $YourCashtag',
      'zelle' => 'Phone number or email on Zelle',
      'other' => 'Bank name, routing, or other instructions',
      _ => '',
    };
  }

  String _collateralPhotoLabel(String side) {
    final type = _collateralChoice;
    final base = switch (type) {
      'phone' => 'Phone',
      'car' => 'Vehicle title',
      'house' => 'Property document',
      _ => 'Collateral',
    };
    return '$base — $side';
  }

  @override
  Widget build(BuildContext context) {
    final ui = _LoanUi(isDark);
    final term = _amount > 0 ? NgmyLoanLogic.termForAmount(_amount, userMonths: _amount > 2000 ? _termMonths : null) : null;

    return Scaffold(
      backgroundColor: ui.pageBg,
      appBar: AppBar(
        backgroundColor: ui.card,
        foregroundColor: ui.textPrimary,
        elevation: 0,
        surfaceTintColor: ui.card,
        leading: IconButton(icon: Icon(Icons.arrow_back_ios_new_rounded, color: ui.textPrimary), onPressed: () => Navigator.pop(context)),
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(color: _loanGreen, borderRadius: BorderRadius.circular(10)),
              child: const Icon(Icons.trending_up_rounded, color: Colors.white, size: 20),
            ),
            const SizedBox(width: 10),
            Text('Loan Application', style: TextStyle(color: ui.textPrimary, fontWeight: FontWeight.w800, fontSize: 18)),
          ],
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 28),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: ui.card,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: ui.border),
            boxShadow: isDark ? null : [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 16, offset: const Offset(0, 4))],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _sectionTitle(ui, 'Loan Details'),
              TextField(
                controller: _amountC,
                style: TextStyle(color: ui.textPrimary),
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                decoration: _fieldDeco(ui, 'Requested Loan Amount (\$)', hint: 'Enter amount'),
                onChanged: (_) => setState(() {}),
              ),
              const SizedBox(height: 10),
              if (term != null)
                Text(term.summary, style: const TextStyle(color: _loanGreenDark, fontSize: 12, fontWeight: FontWeight.w600)),
              if (_amount > 2000) ...[
                const SizedBox(height: 10),
                DropdownButtonFormField<int>(
                  value: _termMonths,
                  dropdownColor: ui.card,
                  style: TextStyle(color: ui.textPrimary),
                  decoration: _fieldDeco(ui, 'Repayment Period (Months)', required: true),
                  items: const [3, 6, 9, 12].map((m) => DropdownMenuItem(value: m, child: Text('$m months'))).toList(),
                  onChanged: (v) => setState(() => _termMonths = v ?? 12),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: Text('Loans over \$2,000 can be repaid in up to 12 months.', style: TextStyle(color: ui.textSecondary, fontSize: 11)),
                ),
              ],
              const SizedBox(height: 18),
              _sectionTitle(ui, 'Personal Information'),
              TextField(controller: _fullNameC, style: TextStyle(color: ui.textPrimary), decoration: _fieldDeco(ui, 'Full Legal Name', hint: 'First Middle Last')),
              const SizedBox(height: 10),
              InkWell(
                onTap: _pickDob,
                borderRadius: BorderRadius.circular(12),
                child: InputDecorator(
                  decoration: _fieldDeco(ui, 'Date of Birth'),
                  child: Text(
                    _dateOfBirth == null ? 'Select date' : '${_dateOfBirth!.month}/${_dateOfBirth!.day}/${_dateOfBirth!.year}',
                    style: TextStyle(color: _dateOfBirth == null ? ui.textSecondary : ui.textPrimary),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              TextField(controller: _phoneC, style: TextStyle(color: ui.textPrimary), keyboardType: TextInputType.phone, decoration: _fieldDeco(ui, 'Phone Number', hint: '+1 (555) 123-4567')),
              const SizedBox(height: 10),
              TextField(controller: _emailC, style: TextStyle(color: ui.textPrimary), keyboardType: TextInputType.emailAddress, decoration: _fieldDeco(ui, 'Email Address', hint: 'you@email.com')),
              const SizedBox(height: 10),
              TextField(controller: _addressC, style: TextStyle(color: ui.textPrimary), maxLines: 2, decoration: _fieldDeco(ui, 'Home Address', hint: 'Street, City, State, ZIP')),
              const SizedBox(height: 18),
              _sectionTitle(ui, 'Government-Issued ID'),
              DropdownButtonFormField<String>(
                value: _idType,
                dropdownColor: ui.card,
                style: TextStyle(color: ui.textPrimary),
                decoration: _fieldDeco(ui, 'ID Type'),
                items: const [
                  DropdownMenuItem(value: 'drivers_license', child: Text("Driver's License")),
                  DropdownMenuItem(value: 'passport', child: Text('Passport')),
                  DropdownMenuItem(value: 'state_id', child: Text('State ID')),
                  DropdownMenuItem(value: 'other', child: Text('Other')),
                ],
                onChanged: (v) => setState(() => _idType = v ?? 'drivers_license'),
              ),
              const SizedBox(height: 10),
              TextField(controller: _govIdC, style: TextStyle(color: ui.textPrimary), decoration: _fieldDeco(ui, 'ID Number', hint: 'Enter ID number')),
              const SizedBox(height: 10),
              TextField(controller: _idExpC, style: TextStyle(color: ui.textPrimary), decoration: _fieldDeco(ui, 'ID Expiration Date', hint: 'MM/DD/YYYY')),
              _uploadBox(ui, label: 'ID — front', hint: 'Tap to add front of ID', done: _idFront != null, onTap: () async { final r = await _pickPhoto('ID — front'); if (r != null) { setState(() => _idFront = r); _scheduleDraftSave(); } }),
              _uploadBox(ui, label: 'ID — back', hint: 'Tap to add back of ID', done: _idBack != null, onTap: () async { final r = await _pickPhoto('ID — back'); if (r != null) { setState(() => _idBack = r); _scheduleDraftSave(); } }),
              const SizedBox(height: 6),
              _sectionTitle(ui, 'Identity Verification'),
              Text('Clear selfie for identity verification.', style: TextStyle(fontSize: 12, color: ui.textSecondary)),
              const SizedBox(height: 6),
              _uploadBox(ui, label: 'Selfie', hint: 'Tap to add selfie', done: _selfie != null, onTap: () async { final r = await _pickPhoto('Selfie'); if (r != null) { setState(() => _selfie = r); _scheduleDraftSave(); } }),
              const SizedBox(height: 10),
              TextField(
                controller: _ssnC,
                style: TextStyle(color: ui.textPrimary),
                keyboardType: TextInputType.number,
                decoration: _fieldDeco(ui, 'Social Security Number', hint: 'XXX-XX-XXXX'),
                inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[0-9-]'))],
              ),
              Text('Your information is encrypted and secure.', style: TextStyle(fontSize: 11, color: ui.textSecondary)),
              const SizedBox(height: 18),
              _sectionTitle(ui, 'How you receive funds'),
              Text('Tap one payment method, then enter your details.', style: TextStyle(fontSize: 12, color: ui.textSecondary)),
              const SizedBox(height: 8),
              Row(
                children: [
                  _choiceChip(ui, label: 'Cash App', icon: Icons.attach_money_rounded, selected: _paymentMethod == 'cashapp', onTap: () => setState(() { _paymentMethod = 'cashapp'; _receiveDetailC.clear(); })),
                  const SizedBox(width: 8),
                  _choiceChip(ui, label: 'Zelle', icon: Icons.account_balance_rounded, selected: _paymentMethod == 'zelle', onTap: () => setState(() { _paymentMethod = 'zelle'; _receiveDetailC.clear(); })),
                  const SizedBox(width: 8),
                  _choiceChip(ui, label: 'Other', icon: Icons.more_horiz_rounded, selected: _paymentMethod == 'other', onTap: () => setState(() { _paymentMethod = 'other'; _receiveDetailC.clear(); })),
                ],
              ),
              if (_paymentMethod != null) ...[
                const SizedBox(height: 10),
                TextField(
                  controller: _receiveDetailC,
                  style: TextStyle(color: ui.textPrimary),
                  decoration: _fieldDeco(ui, _paymentDetailLabel(), hint: _paymentDetailHint()),
                ),
              ],
              const SizedBox(height: 18),
              _sectionTitle(ui, 'Collateral'),
              Text('Choose what you are putting up. Photos appear only after you pick a type.', style: TextStyle(fontSize: 12, color: ui.textSecondary)),
              const SizedBox(height: 8),
              Row(
                children: [
                  _choiceChip(ui, label: 'Phone', icon: Icons.smartphone_rounded, selected: _collateralChoice == 'phone', onTap: () => setState(() { _collateralChoice = 'phone'; _titleFront = null; _titleBack = null; _customCollateralC.clear(); })),
                  const SizedBox(width: 8),
                  _choiceChip(ui, label: 'Vehicle', icon: Icons.directions_car_rounded, selected: _collateralChoice == 'car', onTap: () => setState(() { _collateralChoice = 'car'; _titleFront = null; _titleBack = null; _customCollateralC.clear(); })),
                ],
              ),
              const SizedBox(height: 8),
              Row(
                children: [
                  _choiceChip(ui, label: 'Property', icon: Icons.home_work_rounded, selected: _collateralChoice == 'house', onTap: () => setState(() { _collateralChoice = 'house'; _titleFront = null; _titleBack = null; _customCollateralC.clear(); })),
                  const SizedBox(width: 8),
                  _choiceChip(ui, label: 'Other', icon: Icons.inventory_2_outlined, selected: _collateralChoice == 'custom', onTap: () => setState(() { _collateralChoice = 'custom'; _titleFront = null; _titleBack = null; })),
                ],
              ),
              if (_collateralChoice == 'custom') ...[
                const SizedBox(height: 10),
                TextField(
                  controller: _customCollateralC,
                  style: TextStyle(color: ui.textPrimary),
                  maxLines: 4,
                  decoration: _fieldDeco(ui, 'Describe your collateral', hint: 'What you are offering, make/model, value, condition…', required: true),
                ),
                Text('We will review other collateral before approval — no photos required.', style: TextStyle(fontSize: 11, color: ui.textSecondary)),
              ] else if (_collateralChoice != null) ...[
                const SizedBox(height: 10),
                _uploadBox(ui, label: _collateralPhotoLabel('front'), hint: 'Tap to add front photo', done: _titleFront != null, onTap: () async { final r = await _pickPhoto(_collateralPhotoLabel('front')); if (r != null) { setState(() => _titleFront = r); _scheduleDraftSave(); } }),
                _uploadBox(ui, label: _collateralPhotoLabel('back'), hint: 'Tap to add back photo', done: _titleBack != null, onTap: () async { final r = await _pickPhoto(_collateralPhotoLabel('back')); if (r != null) { setState(() => _titleBack = r); _scheduleDraftSave(); } }),
              ],
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: FilledButton(
                      onPressed: _submitting ? null : _submit,
                      style: FilledButton.styleFrom(
                        minimumSize: const Size(double.infinity, 48),
                        backgroundColor: _loanGreen,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      child: _submitting
                          ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Text('Submit Application', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: OutlinedButton(
                      onPressed: _submitting ? null : () => Navigator.pop(context),
                      style: OutlinedButton.styleFrom(
                        minimumSize: const Size(0, 48),
                        foregroundColor: ui.textPrimary,
                        side: BorderSide(color: ui.border),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w600)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class NgmyLoanTrackingScreen extends StatefulWidget {
  const NgmyLoanTrackingScreen({
    super.key,
    required this.loanId,
    required this.config,
    required this.onDataChanged,
    required this.isAdmin,
    this.onPersistNow,
    this.onRefreshLoans,
  });

  final String loanId;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final bool isAdmin;
  final Future<bool> Function()? onPersistNow;
  final Future<void> Function()? onRefreshLoans;

  @override
  State<NgmyLoanTrackingScreen> createState() => _NgmyLoanTrackingScreenState();
}

class _NgmyLoanTrackingScreenState extends State<NgmyLoanTrackingScreen> with WidgetsBindingObserver {
  Timer? _poll;
  bool _syncing = false;
  DateTime? _lastSync;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    unawaited(_pullLatest());
    _poll = Timer.periodic(const Duration(seconds: 5), (_) => unawaited(_pullLatest(silent: true)));
  }

  @override
  void dispose() {
    _poll?.cancel();
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) unawaited(_pullLatest());
  }

  Map<String, dynamic>? get _loan {
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == widget.loanId);
    if (i < 0) return null;
    return widget.config.loanApplications[i];
  }

  Future<void> _pullLatest({bool silent = false}) async {
    if (_syncing) return;
    _syncing = true;
    try {
      await widget.onRefreshLoans?.call();
      await NgmyLoanPaymentsCloud.fetchAndApplyForLoan(widget.config.loanApplications, widget.loanId);
    } finally {
      _syncing = false;
      _lastSync = DateTime.now();
      if (mounted) setState(() {});
    }
  }

  Future<void> _mutateLoan(void Function(Map<String, dynamic> loan) fn) async {
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == widget.loanId);
    if (i < 0) return;
    fn(widget.config.loanApplications[i]);
    final now = DateTime.now().toUtc().toIso8601String();
    widget.config.loanApplications[i]['updatedAt'] = now;
    widget.config.loanApplications[i]['paymentsUpdatedAt'] = now;
    final loan = widget.config.loanApplications[i];
    final payments = NgmyLoanPaymentsCloud.paymentsFromLoan(loan);
    await NgmyLoanPaymentsStore.save(widget.loanId, payments);
    await NgmyLoanPaymentsCloud.pushLoan(widget.loanId, loan);
    final ok = await widget.onPersistNow?.call() ?? false;
    widget.onDataChanged();
    if (!mounted) return;
    setState(() {});
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(ok ? 'Payment saved — user sees it live.' : 'Saved on this device — syncing…'),
        backgroundColor: ok ? _loanGreen : Colors.orange,
      ),
    );
  }

  Future<void> _recordPayment(Map<String, dynamic> payment) async {
    final dueAmt = (payment['amount'] as num?)?.toDouble() ?? 0;
    final amountC = TextEditingController(text: ngmyLoanFormatCurrency(dueAmt));
    final noteC = TextEditingController();
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ok = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (c) => Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(c).bottom),
        child: Container(
          margin: const EdgeInsets.fromLTRB(14, 0, 14, 18),
          padding: const EdgeInsets.fromLTRB(22, 20, 22, 22),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF151B28) : Colors.white,
            borderRadius: BorderRadius.circular(24),
            border: Border.all(color: _loanGreen.withValues(alpha: 0.3)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text('Record payment received', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(height: 6),
              Text('Week #${payment['id']}', style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
              const SizedBox(height: 16),
              TextField(
                controller: amountC,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                decoration: InputDecoration(
                  labelText: 'Amount received (\$)',
                  prefixIcon: const Icon(Icons.attach_money_rounded, color: _loanGreen),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: noteC,
                decoration: InputDecoration(
                  labelText: 'Note (optional)',
                  prefixIcon: const Icon(Icons.notes_rounded, color: _loanGreen),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(child: OutlinedButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel'))),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      style: FilledButton.styleFrom(backgroundColor: _loanGreen, padding: const EdgeInsets.symmetric(vertical: 14)),
                      onPressed: () => Navigator.pop(c, true),
                      child: const Text('Mark received'),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
    if (ok != true) {
      amountC.dispose();
      noteC.dispose();
      return;
    }
    final received = double.tryParse(amountC.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? dueAmt;
    final noteText = noteC.text.trim();
    amountC.dispose();
    noteC.dispose();
    final payId = (payment['id'] ?? '').toString();
    await _mutateLoan((loan) {
      final payments = NgmyLoanPaymentsCloud.paymentsFromLoan(loan);
      final idx = payments.indexWhere((p) => (p['id'] ?? '').toString() == payId);
      if (idx < 0) return;
      payments[idx]['status'] = 'paid';
      payments[idx]['paidAmount'] = received;
      payments[idx]['paidAt'] = DateTime.now().toUtc().toIso8601String();
      if (noteText.isNotEmpty) payments[idx]['adminNote'] = noteText;
      loan['payments'] = payments;
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final loan = _loan;
    if (loan == null) {
      return Scaffold(
        backgroundColor: isDark ? const Color(0xFF0A0E18) : const Color(0xFFF3F4F6),
        appBar: AppBar(title: const Text('Loan tracking')),
        body: const Center(child: Text('Loan not found.')),
      );
    }
    final payments = NgmyLoanPaymentsCloud.paymentsFromLoan(loan);
    final cash = (loan['companyCashApp'] ?? widget.config.officialCashApp).toString();
    final zelle = (loan['companyZelle'] ?? widget.config.loanCompanyZelle).toString();
    final paidCount = ngmyLoanPaidCount(payments);
    final paidTotal = ngmyLoanPaidTotal(payments);
    final totalDue = (loan['totalRepayment'] as num?)?.toDouble() ?? 0;
    final progress = payments.isEmpty ? 0.0 : paidCount / payments.length;
    final remaining = (totalDue - paidTotal).clamp(0.0, totalDue).toDouble();

    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0A0E18) : const Color(0xFFF3F4F6),
      body: RefreshIndicator(
        color: _loanGreen,
        onRefresh: () => _pullLatest(),
        child: CustomScrollView(
          physics: const AlwaysScrollableScrollPhysics(),
          slivers: [
            SliverAppBar(
              expandedHeight: 220,
              pinned: true,
              backgroundColor: _loanGreen,
              foregroundColor: Colors.white,
              flexibleSpace: FlexibleSpaceBar(
                title: Text(widget.isAdmin ? 'Loan tracking' : 'My payments', style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                background: Container(
                  decoration: const BoxDecoration(
                    gradient: LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)], begin: Alignment.topLeft, end: Alignment.bottomRight),
                  ),
                  child: SafeArea(
                    child: Padding(
                      padding: const EdgeInsets.fromLTRB(20, 56, 20, 16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('\$${ngmyLoanFormatCurrency((loan['amount'] as num?)?.toDouble() ?? 0)} loan', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26)),
                          Text((loan['scheduleSummary'] ?? '').toString(), style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12)),
                          const SizedBox(height: 14),
                          Row(
                            children: [
                              Stack(
                                alignment: Alignment.center,
                                children: [
                                  SizedBox(
                                    width: 56,
                                    height: 56,
                                    child: CircularProgressIndicator(value: progress, strokeWidth: 5, backgroundColor: Colors.white24, color: Colors.white),
                                  ),
                                  Text('${(progress * 100).round()}%', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
                                ],
                              ),
                              const SizedBox(width: 16),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text('$paidCount of ${payments.length} received', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                                    Text('\$${ngmyLoanFormatCurrency(paidTotal)} paid · \$${ngmyLoanFormatCurrency(remaining)} left', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 11)),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              actions: [
                if (_lastSync != null)
                  Padding(
                    padding: const EdgeInsets.only(right: 8),
                    child: Center(child: Text('Live', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: Colors.white.withValues(alpha: 0.9)))),
                  ),
              ],
            ),
            SliverPadding(
              padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
              sliver: SliverToBoxAdapter(
                child: Text('Pay the company', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : Colors.black87)),
              ),
            ),
            if (cash.isNotEmpty)
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                sliver: SliverToBoxAdapter(child: _payMethodCard(
                  isDark: isDark,
                  icon: Icons.payments_rounded,
                  iconColor: const Color(0xFF00D632),
                  title: 'Cash App',
                  subtitle: '\$$cash',
                  actionLabel: 'Open',
                  onAction: () => NgmyLoanLogic.openCashApp(cash),
                )),
              ),
            if (zelle.isNotEmpty) ...[
              const SliverToBoxAdapter(child: SizedBox(height: 10)),
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                sliver: SliverToBoxAdapter(child: _payMethodCard(
                  isDark: isDark,
                  icon: Icons.account_balance_rounded,
                  iconColor: const Color(0xFF6D28D9),
                  title: 'Zelle',
                  subtitle: zelle,
                  actionLabel: 'Copy',
                  onAction: () {
                    Clipboard.setData(ClipboardData(text: zelle));
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Zelle copied')));
                  },
                )),
              ),
            ],
            SliverPadding(
              padding: const EdgeInsets.fromLTRB(16, 22, 16, 8),
              sliver: SliverToBoxAdapter(
                child: Text(
                  widget.isAdmin ? 'Weekly schedule — tap to record' : 'Your payment schedule',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : Colors.black87),
                ),
              ),
            ),
            SliverPadding(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 10),
              sliver: SliverGrid(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 8,
                  crossAxisSpacing: 8,
                  childAspectRatio: 1.75,
                ),
                delegate: SliverChildBuilderDelegate(
                  (context, i) => _paymentGridTile(context, payments[i], isDark: isDark),
                  childCount: payments.length,
                ),
              ),
            ),
            const SliverToBoxAdapter(child: SizedBox(height: 32)),
          ],
        ),
      ),
    );
  }

  Widget _payMethodCard({
    required bool isDark,
    required IconData icon,
    required Color iconColor,
    required String title,
    required String subtitle,
    required String actionLabel,
    required VoidCallback onAction,
  }) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF151B28) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isDark ? Colors.white12 : Colors.grey.shade200),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: iconColor.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
            child: Icon(icon, color: iconColor, size: 22),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
                Text(subtitle, style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.grey.shade600)),
              ],
            ),
          ),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: _loanGreen, padding: const EdgeInsets.symmetric(horizontal: 16)),
            onPressed: onAction,
            child: Text(actionLabel),
          ),
        ],
      ),
    );
  }

  Widget _paymentGridTile(BuildContext context, Map<String, dynamic> p, {required bool isDark}) {
    final due = DateTime.tryParse((p['dueDate'] ?? '').toString())?.toLocal();
    final paid = (p['status'] ?? '') == 'paid';
    final dueAmt = (p['amount'] as num?)?.toDouble() ?? 0;
    final paidAt = DateTime.tryParse((p['paidAt'] ?? '').toString())?.toLocal();
    final statusColor = paid ? _loanGreen : const Color(0xFFF59E0B);
    final dateLabel = paid && paidAt != null
        ? '${paidAt.month}/${paidAt.day}'
        : (due != null ? '${due.month}/${due.day}' : '—');
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(12),
        onTap: widget.isAdmin && !paid ? () => _recordPayment(p) : null,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
          decoration: BoxDecoration(
            color: paid ? _loanGreen.withValues(alpha: isDark ? 0.14 : 0.08) : (isDark ? const Color(0xFF1A2235) : Colors.white),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: statusColor.withValues(alpha: paid ? 0.45 : 0.25)),
          ),
          child: Row(
            children: [
              Icon(paid ? Icons.check_circle_rounded : Icons.schedule_rounded, color: statusColor, size: 16),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Row(
                      children: [
                        Text('Wk ${p['id']}', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: isDark ? Colors.white54 : Colors.grey.shade600)),
                        const SizedBox(width: 6),
                        Text(dateLabel, style: TextStyle(fontSize: 9, color: isDark ? Colors.white38 : Colors.grey.shade500)),
                      ],
                    ),
                    Text('\$${ngmyLoanFormatCurrency(dueAmt)}', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : Colors.black87, height: 1.1)),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                decoration: BoxDecoration(color: statusColor.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(8)),
                child: Text(paid ? 'PAID' : 'DUE', style: TextStyle(fontSize: 7, fontWeight: FontWeight.w900, color: statusColor)),
              ),
              if (widget.isAdmin && !paid) ...[
                const SizedBox(width: 4),
                GestureDetector(
                  onTap: () => _recordPayment(p),
                  child: Container(
                    padding: const EdgeInsets.all(4),
                    decoration: BoxDecoration(color: _loanGreen, borderRadius: BorderRadius.circular(6)),
                    child: const Icon(Icons.check_rounded, color: Colors.white, size: 12),
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

void showNgmyLoanCalculator(BuildContext context) {
  final amt = TextEditingController();
  final isDark = Theme.of(context).brightness == Brightness.dark;
  showModalBottomSheet(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (c) => StatefulBuilder(
      builder: (context, setST) {
        final loan = double.tryParse(amt.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? 0;
        final interest = loan * NgmyLoanLogic.interestRate;
        final total = loan + interest;
        final term = loan > 0 ? NgmyLoanLogic.termForAmount(loan) : null;
        final weekly = term != null && term.weeks > 0 ? total / term.weeks : 0.0;

        return Container(
          margin: const EdgeInsets.fromLTRB(12, 0, 12, 16),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF151B28) : Colors.white,
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: _loanGreen.withValues(alpha: 0.3)),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.15), blurRadius: 24, offset: const Offset(0, 8))],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(22, 20, 22, 18),
                decoration: const BoxDecoration(
                  gradient: LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF00894B)]),
                  borderRadius: BorderRadius.vertical(top: Radius.circular(26)),
                ),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12)),
                      child: const Icon(Icons.calculate_rounded, color: Colors.white, size: 22),
                    ),
                    const SizedBox(width: 12),
                    const Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Loan Calculator', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                          Text('36% interest · weekly payments', style: TextStyle(color: Colors.white70, fontSize: 11)),
                        ],
                      ),
                    ),
                    IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70, size: 22)),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
                child: Column(
                  children: [
                    TextField(
                      controller: amt,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: isDark ? Colors.white : Colors.black87),
                      decoration: InputDecoration(
                        prefixText: '\$ ',
                        prefixStyle: const TextStyle(color: _loanGreen, fontWeight: FontWeight.w900, fontSize: 18),
                        hintText: '0',
                        filled: true,
                        fillColor: isDark ? const Color(0xFF1E2535) : const Color(0xFFF0FDF4),
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                      ),
                      onChanged: (_) => setST(() {}),
                    ),
                    if (term != null) ...[
                      const SizedBox(height: 14),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                        decoration: BoxDecoration(color: _loanGreen.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(10)),
                        child: Text(term.summary, style: const TextStyle(color: _loanGreenDark, fontWeight: FontWeight.w700, fontSize: 12)),
                      ),
                    ],
                    const SizedBox(height: 14),
                    _calcCard('Interest (36%)', '\$${ngmyLoanFormatCurrency(interest)}', const Color(0xFFF59E0B), isDark),
                    const SizedBox(height: 8),
                    _calcCard('Total repayment', '\$${ngmyLoanFormatCurrency(total)}', const Color(0xFF3B82F6), isDark),
                    if (weekly > 0) ...[
                      const SizedBox(height: 8),
                      _calcCard('Weekly payment', '\$${ngmyLoanFormatCurrency(weekly)}', _loanGreen, isDark, highlight: true),
                    ],
                  ],
                ),
              ),
            ],
          ),
        );
      },
    ),
  );
}

Widget _calcCard(String label, String value, Color accent, bool isDark, {bool highlight = false}) => Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
      decoration: BoxDecoration(
        color: highlight ? accent.withValues(alpha: 0.12) : (isDark ? const Color(0xFF1E2535) : const Color(0xFFF9FAFB)),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: highlight ? accent.withValues(alpha: 0.4) : (isDark ? Colors.white10 : Colors.grey.shade200)),
      ),
      child: Row(
        children: [
          Container(width: 4, height: 28, decoration: BoxDecoration(color: accent, borderRadius: BorderRadius.circular(2))),
          const SizedBox(width: 12),
          Expanded(child: Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: isDark ? Colors.white70 : Colors.black54))),
          Text(value, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 16)),
        ],
      ),
    );

void showNgmyLoanAdminSheet(
  BuildContext context, {
  required NgmyLoanConfigBridge config,
  required VoidCallback onDataChanged,
  required bool isDark,
  VoidCallback? onEditSettings,
  Future<bool> Function()? onPersistNow,
  Future<void> Function()? onRefreshLoans,
}) {
  showModalBottomSheet(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => DraggableScrollableSheet(
      initialChildSize: 0.92,
      minChildSize: 0.5,
      maxChildSize: 0.96,
      builder: (_, scroll) => _NgmyLoanAdminPanel(
        config: config,
        onDataChanged: onDataChanged,
        isDark: isDark,
        scrollController: scroll,
        onEditSettings: onEditSettings,
        onPersistNow: onPersistNow,
        onRefreshLoans: onRefreshLoans,
      ),
    ),
  );
}

class _NgmyLoanAdminPanel extends StatefulWidget {
  const _NgmyLoanAdminPanel({
    required this.config,
    required this.onDataChanged,
    required this.isDark,
    required this.scrollController,
    this.onEditSettings,
    this.onPersistNow,
    this.onRefreshLoans,
  });
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final bool isDark;
  final ScrollController scrollController;
  final VoidCallback? onEditSettings;
  final Future<bool> Function()? onPersistNow;
  final Future<void> Function()? onRefreshLoans;

  @override
  State<_NgmyLoanAdminPanel> createState() => _NgmyLoanAdminPanelState();
}

class _NgmyLoanAdminPanelState extends State<_NgmyLoanAdminPanel> {
  @override
  Widget build(BuildContext context) {
    final apps = List<Map<String, dynamic>>.from(widget.config.loanApplications.map((e) => Map<String, dynamic>.from(e)))
      ..sort((a, b) => (b['createdAt'] ?? '').toString().compareTo((a['createdAt'] ?? '').toString()));

    return Container(
      decoration: BoxDecoration(
        color: widget.isDark ? const Color(0xFF0F111A) : Colors.white,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: ListView(
        controller: widget.scrollController,
        padding: const EdgeInsets.fromLTRB(18, 12, 18, 24),
        children: [
          Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade400, borderRadius: BorderRadius.circular(99)))),
          const SizedBox(height: 12),
          Row(
            children: [
              const Expanded(child: Text('Loan Center', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold))),
              if (widget.onEditSettings != null)
                TextButton.icon(
                  onPressed: () {
                    Navigator.pop(context);
                    widget.onEditSettings!();
                  },
                  icon: const Icon(Icons.settings, size: 18),
                  label: const Text('Settings'),
                ),
            ],
          ),
          Text('${apps.where((a) => (a['status'] ?? '') == 'pending').length} pending · ${apps.length} total', style: TextStyle(color: Colors.grey.shade600)),
          const SizedBox(height: 16),
          if (apps.isEmpty) const Padding(padding: EdgeInsets.all(24), child: Text('No loan applications yet.', textAlign: TextAlign.center)),
          ...apps.map((a) => _adminCard(context, a)),
        ],
      ),
    );
  }

  Widget _adminCard(BuildContext context, Map<String, dynamic> app) {
    final status = (app['status'] ?? 'pending').toString();
    final id = (app['id'] ?? '').toString();
    final statusColor = switch (status) {
      'approved' => _loanGreen,
      'rejected' => Colors.redAccent,
      _ => Colors.orange,
    };
    return Card(
      margin: const EdgeInsets.only(bottom: 14),
      elevation: widget.isDark ? 0 : 2,
      color: widget.isDark ? const Color(0xFF151B28) : Colors.white,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16), side: BorderSide(color: statusColor.withValues(alpha: 0.35))),
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: () => _openLoanDetail(context, app),
        child: Padding(
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Text(
                      (app['fullLegalName'] ?? app['username'] ?? 'Applicant').toString(),
                      style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16),
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(color: statusColor.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(20)),
                    child: Text(status.toUpperCase(), style: TextStyle(color: statusColor, fontSize: 10, fontWeight: FontWeight.w900)),
                  ),
                ],
              ),
              const SizedBox(height: 6),
              Text(
                '\$${ngmyLoanFormatCurrency((app['amount'] as num?)?.toDouble() ?? 0)} · ${NgmyLoanLogic.collateralLabel((app['collateralType'] ?? '').toString())}',
                style: TextStyle(fontSize: 12, color: Colors.grey.shade600, fontWeight: FontWeight.w600),
              ),
              Text((app['userEmail'] ?? app['email'] ?? '').toString(), style: TextStyle(fontSize: 11, color: Colors.grey.shade500)),
              const SizedBox(height: 10),
              const Row(
                children: [
                  Icon(Icons.touch_app_rounded, size: 14, color: _loanGreen),
                  SizedBox(width: 6),
                  Expanded(
                    child: Text(
                      'Tap to view full application & zoom photos',
                      style: TextStyle(fontSize: 11, color: _loanGreenDark, fontWeight: FontWeight.w700),
                    ),
                  ),
                ],
              ),
              if (status == 'pending') ...[
                const SizedBox(height: 10),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(onPressed: () => _reject(context, id), child: const Text('Reject')),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: FilledButton(
                        style: FilledButton.styleFrom(backgroundColor: _loanGreen),
                        onPressed: () => _approve(id),
                        child: const Text('Approve'),
                      ),
                    ),
                  ],
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }

  void _openLoanDetail(BuildContext context, Map<String, dynamic> app) {
    final id = (app['id'] ?? '').toString();
    final status = (app['status'] ?? 'pending').toString();
    Navigator.push(
      context,
      MaterialPageRoute<void>(
        builder: (ctx) => Scaffold(
          backgroundColor: widget.isDark ? const Color(0xFF0A0E18) : const Color(0xFFF3F4F6),
          appBar: AppBar(
            title: Text((app['fullLegalName'] ?? 'Loan application').toString(), style: const TextStyle(fontWeight: FontWeight.w900)),
            actions: [
              if (status == 'approved')
                IconButton(
                  icon: const Icon(Icons.payments_outlined),
                  onPressed: () => Navigator.push(
                    ctx,
                    MaterialPageRoute<void>(
                      builder: (_) => NgmyLoanTrackingScreen(
                        loanId: id,
                        config: widget.config,
                        onDataChanged: widget.onDataChanged,
                        isAdmin: true,
                        onPersistNow: widget.onPersistNow,
                        onRefreshLoans: widget.onRefreshLoans,
                      ),
                    ),
                  ),
                ),
            ],
          ),
          body: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              _detailSection('Loan', [
                _detailRow('Amount', '\$${ngmyLoanFormatCurrency((app['amount'] as num?)?.toDouble() ?? 0)}'),
                _detailRow('Total repayment', '\$${ngmyLoanFormatCurrency((app['totalRepayment'] as num?)?.toDouble() ?? 0)}'),
                _detailRow('Schedule', (app['scheduleSummary'] ?? '').toString()),
                _detailRow('Term weeks', (app['termWeeks'] ?? '').toString()),
                _detailRow('Status', status),
              ]),
              _detailSection('Applicant', [
                _detailRow('Full legal name', (app['fullLegalName'] ?? '').toString()),
                _detailRow('Username', (app['username'] ?? '').toString()),
                _detailRow('Email', (app['email'] ?? app['userEmail'] ?? '').toString()),
                _detailRow('Phone', (app['phone'] ?? '').toString()),
                _detailRow('Date of birth', _fmtDate(app['dateOfBirth'])),
                _detailRow('Home address', (app['homeAddress'] ?? '').toString()),
              ]),
              _detailSection('Government ID', [
                _detailRow('ID type', _idTypeLabel((app['idType'] ?? '').toString())),
                _detailRow('ID number', (app['governmentId'] ?? '').toString()),
                _detailRow('ID expiration', (app['idExpiration'] ?? '').toString()),
                _detailRow('SSN', (app['ssn'] ?? '').toString()),
              ]),
              _detailSection('Payout', [
                _detailRow('Method', (app['receiveMethod'] ?? '').toString()),
                _detailRow('Details', (app['receiveDetails'] ?? app['payoutDestination'] ?? '').toString()),
              ]),
              _detailSection('Collateral', [
                _detailRow('Type', NgmyLoanLogic.collateralLabel((app['collateralType'] ?? '').toString())),
                if ((app['collateralCustomNote'] ?? '').toString().isNotEmpty)
                  _detailRow('Description', (app['collateralCustomNote'] ?? '').toString()),
              ]),
              _detailSection('Photos — tap to zoom', [
                _photoGrid(ctx, [
                  if ((app['idFrontRef'] ?? '').toString().isNotEmpty) ('ID front', app['idFrontRef']),
                  if ((app['idBackRef'] ?? '').toString().isNotEmpty) ('ID back', app['idBackRef']),
                  if ((app['selfieRef'] ?? '').toString().isNotEmpty) ('Selfie', app['selfieRef']),
                  if ((app['titleFrontRef'] ?? '').toString().isNotEmpty) ('Collateral front', app['titleFrontRef']),
                  if ((app['titleBackRef'] ?? '').toString().isNotEmpty) ('Collateral back', app['titleBackRef']),
                ]),
              ]),
              if (status == 'rejected' && (app['rejectionReason'] ?? '').toString().isNotEmpty)
                _detailSection('Rejection', [_detailRow('Reason', (app['rejectionReason'] ?? '').toString())]),
              if (status == 'pending') ...[
                const SizedBox(height: 8),
                Row(
                  children: [
                    Expanded(child: OutlinedButton(onPressed: () { Navigator.pop(ctx); _reject(context, id); }, child: const Text('Reject'))),
                    const SizedBox(width: 10),
                    Expanded(child: FilledButton(style: FilledButton.styleFrom(backgroundColor: _loanGreen), onPressed: () { Navigator.pop(ctx); _approve(id); }, child: const Text('Approve loan'))),
                  ],
                ),
              ],
              const SizedBox(height: 24),
            ],
          ),
        ),
      ),
    );
  }

  Widget _detailSection(String title, List<Widget> children) => Container(
        margin: const EdgeInsets.only(bottom: 14),
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: widget.isDark ? const Color(0xFF151B28) : Colors.white,
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: widget.isDark ? Colors.white12 : Colors.grey.shade200),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: _loanGreenDark)),
            const SizedBox(height: 10),
            ...children,
          ],
        ),
      );

  Widget _detailRow(String label, String value) {
    if (value.trim().isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: Colors.grey.shade600, letterSpacing: 0.3)),
          const SizedBox(height: 2),
          Text(value, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, height: 1.35)),
        ],
      ),
    );
  }

  Widget _photoGrid(BuildContext context, List<(String, dynamic)> items) {
    if (items.isEmpty) return const Text('No photos attached', style: TextStyle(fontSize: 12, color: Colors.grey));
    return Wrap(
      spacing: 10,
      runSpacing: 10,
      children: items.map((e) {
        return GestureDetector(
          onTap: () => NgmyLoanStore.openZoom(context, e.$2, label: e.$1),
          child: Column(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: SizedBox(width: 100, height: 100, child: NgmyLoanImage(e.$2)),
              ),
              const SizedBox(height: 4),
              Text(e.$1, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w700)),
            ],
          ),
        );
      }).toList(),
    );
  }

  String _fmtDate(dynamic raw) {
    final d = DateTime.tryParse((raw ?? '').toString())?.toLocal();
    if (d == null) return (raw ?? '').toString();
    return '${d.month}/${d.day}/${d.year}';
  }

  String _idTypeLabel(String t) => switch (t) {
        'drivers_license' => "Driver's License",
        'passport' => 'Passport',
        'state_id' => 'State ID',
        'other' => 'Other',
        _ => t,
      };

  Future<void> _approve(String id) async {
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == id);
    if (i < 0) return;
    final approvedAt = DateTime.now().toUtc().toIso8601String();
    widget.config.loanApplications[i]['status'] = 'approved';
    widget.config.loanApplications[i]['approvedAt'] = approvedAt;
    widget.config.loanApplications[i]['updatedAt'] = approvedAt;
    await NgmyLoanStatusStore.saveDecision(id, status: 'approved', approvedAt: approvedAt);
    await NgmyLoanStatusCloud.pushFromApps(widget.config.loanApplications);
    final ok = await widget.onPersistNow?.call() ?? false;
    widget.onDataChanged();
    if (!context.mounted) return;
    setState(() {});
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(ok ? 'Loan approved and saved.' : 'Approved on this device — sync failed. Check internet and open Loan Center again.'),
        backgroundColor: ok ? _loanGreen : Colors.orange,
      ),
    );
  }

  Future<void> _reject(BuildContext context, String id) async {
    final reasonC = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: const Text('Reject application'),
        content: TextField(controller: reasonC, maxLines: 3, decoration: const InputDecoration(labelText: 'Why rejected? (user will see this)')),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(c, true), child: const Text('Reject')),
        ],
      ),
    );
    if (ok != true) {
      reasonC.dispose();
      return;
    }
    final reason = reasonC.text.trim();
    reasonC.dispose();
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == id);
    if (i < 0) return;
    final updatedAt = DateTime.now().toUtc().toIso8601String();
    widget.config.loanApplications[i]['status'] = 'rejected';
    widget.config.loanApplications[i]['rejectionReason'] = reason;
    widget.config.loanApplications[i]['updatedAt'] = updatedAt;
    await NgmyLoanStatusStore.saveDecision(id, status: 'rejected', rejectionReason: reason);
    await NgmyLoanStatusCloud.pushFromApps(widget.config.loanApplications);
    final saved = await widget.onPersistNow?.call() ?? false;
    widget.onDataChanged();
    if (!context.mounted) return;
    setState(() {});
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(saved ? 'Loan rejected and saved.' : 'Rejected locally — cloud sync failed.'),
        backgroundColor: saved ? _loanGreen : Colors.orange,
      ),
    );
  }
}

class NgmyLoanLogic {
  static const interestRate = 0.36;

  static List<Map<String, dynamic>> _activeLoans(List<Map<String, dynamic>> userLoans) => userLoans
      .where((a) {
        final s = (a['status'] ?? '').toString();
        return s == 'approved' || s == 'pending';
      })
      .map((e) => Map<String, dynamic>.from(e))
      .toList();

  /// Under \$1,000: max 2 active/pending. \$1,000+: max 1.
  static bool canUserApplyAnother(List<Map<String, dynamic>> userLoans, {double? newAmount}) {
    final active = _activeLoans(userLoans);
    if (active.isEmpty) return true;
    final anyLarge = active.any((a) => ((a['amount'] as num?)?.toDouble() ?? 0) >= 1000);
    final newLarge = (newAmount ?? 0) >= 1000;
    if (anyLarge || newLarge) return active.length < 1;
    return active.length < 2;
  }

  static String loanLimitMessage(List<Map<String, dynamic>> userLoans, {double? newAmount}) {
    final active = _activeLoans(userLoans);
    final anyLarge = active.any((a) => ((a['amount'] as num?)?.toDouble() ?? 0) >= 1000);
    final newLarge = (newAmount ?? 0) >= 1000;
    if (anyLarge || newLarge) {
      return 'Loans of \$1,000 or more allow only 1 active application at a time.';
    }
    return 'You can have up to 2 active loans under \$1,000. Wait for review or finish current ones.';
  }

  static String requiredCollateralType(double amount) {
    if (amount <= 200) return 'phone';
    if (amount >= 2000) return 'house';
    return 'car';
  }

  static String collateralLabel(String type) => switch (type) {
        'phone' => 'Phone (2 photos)',
        'car' => 'Vehicle title (front & back)',
        'house' => 'Property title (front & back)',
        _ => 'Collateral',
      };

  static ({int weeks, String summary, String monthsLabel}) termForAmount(double amount, {int? userMonths}) {
    if (amount <= 300) {
      return (weeks: 4, summary: '4 weekly payments over 1 month', monthsLabel: '1 month');
    }
    if (amount <= 500) {
      return (weeks: 6, summary: '6 weekly payments over 6 weeks (1½ months)', monthsLabel: '6 weeks');
    }
    if (amount <= 2000) {
      return (weeks: 12, summary: '12 weekly payments over 3 months', monthsLabel: '3 months');
    }
    final months = (userMonths ?? 12).clamp(3, 12);
    final weeks = months * 4;
    return (weeks: weeks, summary: '$weeks weekly payments over $months months', monthsLabel: '$months months');
  }

  static Future<void> openCashApp(String tag) async {
    final handle = tag.trim().replaceFirst(r'$', '');
    if (handle.isEmpty) return;
    final uri = Uri.parse('https://cash.app/\$$handle');
    if (await canLaunchUrl(uri)) await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}

class NgmyLoanDraftStore {
  static String _key(String email) => 'ngmy_loan_draft_${email.toLowerCase().trim()}';

  static Future<Map<String, dynamic>?> load(String email) async {
    if (email.trim().isEmpty) return null;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email));
    if (raw == null || raw.isEmpty) return null;
    try {
      final d = jsonDecode(raw);
      if (d is Map) return Map<String, dynamic>.from(d);
    } catch (_) {}
    return null;
  }

  static Future<void> save(String email, Map<String, dynamic> draft) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(email), jsonEncode(draft));
  }

  static Future<void> clear(String email) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_key(email));
  }
}

class NgmyLoanStore {
  static List<Map<String, dynamic>> appsForUser(List<Map<String, dynamic>> all, String email) {
    final key = email.toLowerCase().trim();
    return all.where((a) => (a['userEmail'] ?? '').toString().toLowerCase().trim() == key).map((e) => Map<String, dynamic>.from(e)).toList();
  }

  static Future<String> storeImageRef(XFile file) async {
    final bytes = await file.readAsBytes();
    if (await ngmyDeviceIsOnline()) {
      final uploaded = await _upload(bytes, 'loans/${DateTime.now().microsecondsSinceEpoch}.jpg');
      if (uploaded != null) return uploaded;
    }
    if (kIsWeb) {
      return 'data:image/jpeg;base64,${base64Encode(bytes)}';
    }
    return file.path;
  }

  static Future<String?> _upload(Uint8List bytes, String path) async {
    try {
      final storage = Supabase.instance.client.storage.from('media');
      await storage.uploadBinary(path, bytes, fileOptions: const FileOptions(upsert: true, contentType: 'image/jpeg'));
      return 'supabase://media/$path';
    } catch (e) {
      debugPrint('[loan] upload: $e');
      return null;
    }
  }

  static Future<String> resolveRef(String ref) async {
    final src = ref.trim();
    if (!src.startsWith('supabase://media/')) return src;
    final path = src.replaceFirst('supabase://media/', '');
    try {
      final storage = Supabase.instance.client.storage.from('media');
      if (await ngmyDeviceIsOnline()) {
        final signed = await storage.createSignedUrl(path, 60 * 60 * 24).timeout(const Duration(seconds: 10));
        if (signed.isNotEmpty) return signed;
      }
      return storage.getPublicUrl(path);
    } catch (e) {
      debugPrint('[loan] resolve: $e');
      try {
        return Supabase.instance.client.storage.from('media').getPublicUrl(path);
      } catch (_) {
        return src;
      }
    }
  }

  static Widget imageWidget(dynamic ref) => NgmyLoanImage(ref);

  static void openZoom(BuildContext context, dynamic ref, {String label = 'Photo'}) {
    final src = (ref ?? '').toString();
    if (src.isEmpty) return;
    Navigator.push(
      context,
      MaterialPageRoute<void>(
        builder: (ctx) => _NgmyLoanZoomPage(ref: src, label: label),
      ),
    );
  }
}

class _NgmyLoanZoomPage extends StatelessWidget {
  final String ref;
  final String label;
  const _NgmyLoanZoomPage({required this.ref, required this.label});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(backgroundColor: Colors.black, foregroundColor: Colors.white, title: Text(label, style: const TextStyle(fontSize: 14))),
      body: InteractiveViewer(
        minScale: 0.5,
        maxScale: 5,
        child: Center(child: NgmyLoanImage(ref, fit: BoxFit.contain)),
      ),
    );
  }
}
