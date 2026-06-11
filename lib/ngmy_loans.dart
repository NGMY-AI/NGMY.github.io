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

import 'ngmy_offline.dart';

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
  });

  final String userEmail;
  final String username;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final Future<bool> Function()? onPersistNow;

  @override
  State<NgmyLoanServicesScreen> createState() => _NgmyLoanServicesScreenState();
}

class _NgmyLoanServicesScreenState extends State<NgmyLoanServicesScreen> {
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
      appBar: AppBar(
        backgroundColor: ui.card,
        foregroundColor: ui.textPrimary,
        elevation: 0,
        surfaceTintColor: ui.card,
        leading: IconButton(icon: Icon(Icons.arrow_back_ios_new_rounded, color: ui.textPrimary), onPressed: () => Navigator.pop(context)),
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(7),
              decoration: BoxDecoration(color: _loanGreen, borderRadius: BorderRadius.circular(9)),
              child: const Icon(Icons.trending_up_rounded, color: Colors.white, size: 18),
            ),
            const SizedBox(width: 10),
            Text('Loan Services', style: TextStyle(fontWeight: FontWeight.w800, color: ui.textPrimary)),
          ],
        ),
      ),
      body: RefreshIndicator(
        onRefresh: () async {
          widget.onDataChanged();
          await Future<void>.delayed(const Duration(milliseconds: 400));
        },
        child: SingleChildScrollView(
          physics: const AlwaysScrollableScrollPhysics(),
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _headerCard(),
              const SizedBox(height: 20),
              Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  color: ui.card,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: ui.border),
                  boxShadow: isDark ? null : [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 12, offset: const Offset(0, 4))],
                ),
                child: Material(
                  color: Colors.transparent,
                  child: InkWell(
                    borderRadius: BorderRadius.circular(16),
                    onTap: () => _openApplication(context),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 18),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Icon(Icons.description_outlined, color: _loanGreen, size: 22),
                          SizedBox(width: 10),
                          Text('Apply for a Loan', style: TextStyle(fontWeight: FontWeight.w800, color: _loanGreen, fontSize: 16)),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              if (active.isNotEmpty) ...[
                const SizedBox(height: 24),
                Text('Active loans — live tracking', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: ui.textPrimary)),
                const SizedBox(height: 10),
                ...active.map((a) => _loanTile(context, a, isDark)),
              ],
              if (pending.isNotEmpty) ...[
                const SizedBox(height: 20),
                Text('Pending review', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: ui.textPrimary)),
                ...pending.map((a) => _loanTile(context, a, isDark)),
              ],
              if (rejected.isNotEmpty) ...[
                const SizedBox(height: 20),
                const Text('Rejected — you may apply again', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.redAccent)),
                ...rejected.map((a) => _loanTile(context, a, isDark)),
              ],
              const SizedBox(height: 24),
              _howItWorks(isDark),
              const SizedBox(height: 12),
              OutlinedButton.icon(
                onPressed: () => showNgmyLoanCalculator(context),
                icon: const Icon(Icons.calculate_outlined),
                label: const Text('Loan calculator (36% interest)'),
              ),
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
              'Call ${widget.config.loanPhone} or apply with collateral. Max 3 active loans.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 13, height: 1.4),
            ),
          ],
        ),
      );

  Widget _howItWorks(bool isDark) => Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF1C1F2E) : const Color(0xFFE8F0FF),
          borderRadius: BorderRadius.circular(20),
        ),
        child: Text(widget.config.loanHowItWorks, style: TextStyle(fontSize: 13, height: 1.7, color: isDark ? Colors.white70 : Colors.black87)),
      );

  Widget _loanTile(BuildContext context, Map<String, dynamic> app, bool isDark) {
    final status = (app['status'] ?? 'pending').toString();
    final amount = (app['amount'] as num?)?.toDouble() ?? 0;
    Color c = Colors.orange;
    if (status == 'approved') c = Colors.green;
    if (status == 'rejected') c = Colors.red;
    return Card(
      margin: const EdgeInsets.only(bottom: 10),
      child: ListTile(
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
        title: Text('\$${ngmyLoanFormatCurrency(amount)} · ${status.toUpperCase()}', style: TextStyle(fontWeight: FontWeight.w800, color: c)),
        subtitle: Text(
          status == 'rejected' && (app['rejectionReason'] ?? '').toString().isNotEmpty
              ? 'Rejected: ${app['rejectionReason']}'
              : (app['scheduleSummary'] ?? app['createdAt'] ?? '').toString(),
          maxLines: 3,
        ),
        trailing: status == 'approved' ? const Icon(Icons.track_changes_rounded, color: Color(0xFF00B25A)) : null,
      ),
    );
  }

  Future<void> _openApplication(BuildContext context) async {
    final activeCount = NgmyLoanStore.appsForUser(widget.config.loanApplications, widget.userEmail)
        .where((a) => (a['status'] ?? '') == 'approved' || (a['status'] ?? '') == 'pending')
        .length;
    if (activeCount >= 3) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Maximum 3 active or pending loans. Finish or wait for review on current applications.')));
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
  const NgmyLoanTrackingScreen({super.key, required this.loanId, required this.config, required this.onDataChanged, required this.isAdmin, this.onPersistNow});

  final String loanId;
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final bool isAdmin;
  final Future<bool> Function()? onPersistNow;

  @override
  State<NgmyLoanTrackingScreen> createState() => _NgmyLoanTrackingScreenState();
}

class _NgmyLoanTrackingScreenState extends State<NgmyLoanTrackingScreen> {
  Map<String, dynamic>? get _loan {
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == widget.loanId);
    if (i < 0) return null;
    return widget.config.loanApplications[i];
  }

  Future<void> _mutateLoan(void Function(Map<String, dynamic> loan) fn) async {
    final i = widget.config.loanApplications.indexWhere((a) => (a['id'] ?? '').toString() == widget.loanId);
    if (i < 0) return;
    fn(widget.config.loanApplications[i]);
    widget.config.loanApplications[i]['updatedAt'] = DateTime.now().toUtc().toIso8601String();
    widget.onDataChanged();
    await widget.onPersistNow?.call();
    if (!mounted) return;
    setState(() {});
  }

  Future<void> _recordPayment(Map<String, dynamic> payment) async {
    final dueAmt = (payment['amount'] as num?)?.toDouble() ?? 0;
    final amountC = TextEditingController(text: ngmyLoanFormatCurrency(dueAmt));
    final noteC = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => AlertDialog(
        title: const Text('Record payment received'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: amountC,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: const InputDecoration(labelText: 'Amount received (\$)', border: OutlineInputBorder()),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: noteC,
              decoration: const InputDecoration(labelText: 'Note (optional)', border: OutlineInputBorder()),
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(c, true), child: const Text('Save')),
        ],
      ),
    );
    if (ok != true) return;
    final received = double.tryParse(amountC.text.replaceAll(RegExp(r'[^0-9.]'), '')) ?? dueAmt;
    final payId = (payment['id'] ?? '').toString();
    await _mutateLoan((loan) {
      final payments = (loan['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
      final idx = payments.indexWhere((p) => (p['id'] ?? '').toString() == payId);
      if (idx < 0) return;
      payments[idx]['status'] = 'paid';
      payments[idx]['paidAmount'] = received;
      payments[idx]['paidAt'] = DateTime.now().toUtc().toIso8601String();
      if (noteC.text.trim().isNotEmpty) payments[idx]['adminNote'] = noteC.text.trim();
      loan['payments'] = payments;
    });
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Payment recorded.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    final loan = _loan;
    if (loan == null) {
      return Scaffold(
        appBar: AppBar(title: const Text('Loan tracking')),
        body: const Center(child: Text('Loan not found.')),
      );
    }
    final payments = (loan['payments'] as List?)?.map((e) => Map<String, dynamic>.from(e as Map)).toList() ?? [];
    final cash = (loan['companyCashApp'] ?? widget.config.officialCashApp).toString();
    final zelle = (loan['companyZelle'] ?? widget.config.loanCompanyZelle).toString();
    final paidCount = payments.where((p) => (p['status'] ?? '') == 'paid').length;

    return Scaffold(
      appBar: AppBar(title: Text(widget.isAdmin ? 'Admin loan tracking' : 'My loan payments')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text('\$${ngmyLoanFormatCurrency((loan['amount'] as num?)?.toDouble() ?? 0)} loan', style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 20)),
          Text((loan['scheduleSummary'] ?? '').toString(), style: const TextStyle(color: Colors.grey)),
          Text('Total due: \$${ngmyLoanFormatCurrency((loan['totalRepayment'] as num?)?.toDouble() ?? 0)}', style: const TextStyle(fontWeight: FontWeight.w700)),
          Text('$paidCount of ${payments.length} weekly payments received', style: TextStyle(color: Colors.green.shade700, fontWeight: FontWeight.w600)),
          const SizedBox(height: 16),
          const Text('Pay the company', style: TextStyle(fontWeight: FontWeight.bold)),
          if (cash.isNotEmpty)
            Card(
              child: ListTile(
                leading: const Icon(Icons.attach_money, color: Colors.green),
                title: Text('Cash App: \$$cash'),
                subtitle: const Text('Tap to open Cash App'),
                trailing: FilledButton(
                  onPressed: () => NgmyLoanLogic.openCashApp(cash),
                  child: const Text('Pay'),
                ),
              ),
            ),
          if (zelle.isNotEmpty)
            Card(
              child: ListTile(
                leading: const Icon(Icons.account_balance, color: Colors.blue),
                title: Text('Zelle: $zelle'),
                subtitle: const Text('Send payment to this Zelle'),
              ),
            ),
          const Divider(),
          Text(widget.isAdmin ? 'Weekly schedule — record when received' : 'Your weekly payment schedule', style: const TextStyle(fontWeight: FontWeight.bold)),
          ...payments.map((p) => _paymentTile(context, p)),
        ],
      ),
    );
  }

  Widget _paymentTile(BuildContext context, Map<String, dynamic> p) {
    final due = DateTime.tryParse((p['dueDate'] ?? '').toString())?.toLocal();
    final paid = (p['status'] ?? '') == 'paid';
    final paidAmt = (p['paidAmount'] as num?)?.toDouble();
    final dueAmt = (p['amount'] as num?)?.toDouble() ?? 0;
    return Card(
      child: ListTile(
        title: Text('\$${ngmyLoanFormatCurrency(dueAmt)}', style: TextStyle(fontWeight: FontWeight.w800, color: paid ? Colors.green : Colors.orange)),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(due != null ? 'Due ${due.month}/${due.day}/${due.year}' : 'Scheduled'),
            if (paid && paidAmt != null) Text('Received: \$${ngmyLoanFormatCurrency(paidAmt)}', style: const TextStyle(color: Colors.green, fontSize: 12)),
            if ((p['adminNote'] ?? '').toString().isNotEmpty) Text((p['adminNote'] ?? '').toString(), style: const TextStyle(fontSize: 11)),
          ],
        ),
        trailing: paid
            ? const Icon(Icons.check_circle, color: Colors.green)
            : (widget.isAdmin
                ? TextButton(onPressed: () => _recordPayment(p), child: const Text('Record'))
                : const Icon(Icons.schedule)),
      ),
    );
  }
}

void showNgmyLoanCalculator(BuildContext context) {
  final amt = TextEditingController();
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
          height: MediaQuery.of(context).size.height * 0.62,
          decoration: BoxDecoration(
            color: Theme.of(context).scaffoldBackgroundColor,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(30)),
          ),
          padding: const EdgeInsets.all(25),
          child: Column(
            children: [
              Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade400, borderRadius: BorderRadius.circular(99))),
              const SizedBox(height: 20),
              const Text('Loan Calculator', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              const SizedBox(height: 20),
              TextField(
                controller: amt,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                decoration: const InputDecoration(labelText: 'Loan amount (\$)', border: OutlineInputBorder()),
                onChanged: (_) => setST(() {}),
              ),
              const SizedBox(height: 20),
              if (term != null) Text(term.summary, style: TextStyle(color: Colors.green.shade700, fontWeight: FontWeight.w600)),
              const SizedBox(height: 12),
              _calcRow('Interest (36%)', '\$${ngmyLoanFormatCurrency(interest)}', Colors.orange),
              _calcRow('Total repayment', '\$${ngmyLoanFormatCurrency(total)}', Colors.blue),
              if (weekly > 0) _calcRow('Each weekly payment', '\$${ngmyLoanFormatCurrency(weekly)}', Colors.green),
              const Spacer(),
              ElevatedButton(onPressed: () => Navigator.pop(context), child: const Text('Close')),
            ],
          ),
        );
      },
    ),
  );
}

Widget _calcRow(String l, String v, Color c) => Padding(
      padding: const EdgeInsets.symmetric(vertical: 6),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(l),
          Text(v, style: TextStyle(color: c, fontWeight: FontWeight.w900, fontSize: 17)),
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
  });
  final NgmyLoanConfigBridge config;
  final VoidCallback onDataChanged;
  final bool isDark;
  final ScrollController scrollController;
  final VoidCallback? onEditSettings;
  final Future<bool> Function()? onPersistNow;

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
