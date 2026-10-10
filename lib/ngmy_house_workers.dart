import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_circle_cropper.dart';
import 'ngmy_edge_invoke.dart';
import 'ngmy_house_insurance.dart';
import 'ngmy_state_picker.dart';
import 'ngmy_upload_shrink.dart';

/// House & Insurance workers: people who fix houses. Users see the approved
/// workers of their state, send them work, and rate them when it is done.
/// Phone numbers are only shared after a worker accepts a job.
class NgmyHouseWorkersApi {
  static Future<Map<String, dynamic>> _call(String action, [Map<String, dynamic> extra = const {}]) async {
    try {
      final res = await ngmyEdgeInvoke({'action': action, ...extra}, timeout: const Duration(seconds: 30));
      if (res == null) return {'ok': false, 'error': 'No connection. Try again.'};
      return res;
    } catch (e) {
      return {'ok': false, 'error': 'No connection. Try again.'};
    }
  }

  static Future<Map<String, dynamic>> list(String state) => _call('hwList', {'state': state});
  static Future<Map<String, dynamic>> me() => _call('hwMe');
  static Future<Map<String, dynamic>> apply(Map<String, dynamic> form) => _call('hwApply', form);
  static Future<Map<String, dynamic>> request(Map<String, dynamic> form) => _call('hwRequest', form);
  static Future<Map<String, dynamic>> respond(String id, bool accept) =>
      _call('hwRespond', {'requestId': id, 'decision': accept ? 'accept' : 'decline'});
  static Future<Map<String, dynamic>> done(String id) => _call('hwDone', {'requestId': id});
  static Future<Map<String, dynamic>> rate(String id, int rating, String review) =>
      _call('hwRate', {'requestId': id, 'rating': rating, 'review': review});
  static Future<Map<String, dynamic>> cancel(String id) => _call('hwCancel', {'requestId': id});
  static Future<Map<String, dynamic>> adminList() => _call('hwAdminList');
  static Future<Map<String, dynamic>> adminDecide(String email, String decision) =>
      // Not 'email': that key is stripped from every signed-in request.
      _call('hwAdminDecide', {'workerEmail': email, 'decision': decision});
}

const Color _kHwAccent = Color(0xFF0EA5E9);
const Color _kHwGreen = Color(0xFF10B981);

List<Map<String, dynamic>> _maps(dynamic raw) =>
    raw is List ? raw.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList() : <Map<String, dynamic>>[];

String _shortDate(dynamic raw) {
  final d = DateTime.tryParse((raw ?? '').toString())?.toLocal();
  if (d == null) return '';
  return '${d.month}/${d.day}/${d.year}';
}

String _waDigits(String phone) {
  var digits = phone.replaceAll(RegExp(r'\D'), '');
  if (digits.length == 10) digits = '1$digits';
  return digits;
}

Future<void> ngmyOpenWhatsApp(BuildContext context, String phone, String text) async {
  final digits = _waDigits(phone);
  if (digits.isEmpty) {
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('No WhatsApp number on file.')));
    return;
  }
  final uri = Uri.parse('https://wa.me/$digits?text=${Uri.encodeComponent(text)}');
  await launchUrl(uri, mode: LaunchMode.externalApplication);
}

Future<void> _openUrl(String url) async {
  final uri = Uri.tryParse(url);
  if (uri == null || url.trim().isEmpty) return;
  await launchUrl(uri, mode: LaunchMode.externalApplication);
}

void _snack(BuildContext context, String text, {bool error = false}) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text(text), backgroundColor: error ? Colors.red.shade700 : null),
  );
}

class _HwColors {
  _HwColors(BuildContext context) : isDark = Theme.of(context).brightness == Brightness.dark;
  final bool isDark;
  Color get sheet => isDark ? const Color(0xFF151A24) : Colors.white;
  Color get tile => isDark ? const Color(0xFF1F2633) : const Color(0xFFF6F8FB);
  Color get line => isDark ? const Color(0xFF2B3444) : const Color(0xFFE2E8F0);
  Color get ink => isDark ? Colors.white : const Color(0xFF0F172A);
  Color get muted => isDark ? Colors.white60 : const Color(0xFF64748B);
}

/// Round profile photo with a colored ring turning around it.
class NgmyRingAvatar extends StatelessWidget {
  const NgmyRingAvatar({super.key, required this.url, required this.size, this.spin, this.name = ''});

  final String url;
  final double size;
  final Animation<double>? spin;
  final String name;

  @override
  Widget build(BuildContext context) {
    final ring = Container(
      width: size,
      height: size,
      decoration: const BoxDecoration(
        shape: BoxShape.circle,
        gradient: SweepGradient(
          colors: [Color(0xFF0EA5E9), Color(0xFF10B981), Color(0xFFF59E0B), Color(0xFFEC4899), Color(0xFF0EA5E9)],
        ),
      ),
    );
    final initials = name.trim().isEmpty
        ? '?'
        : name.trim().split(RegExp(r'\s+')).take(2).map((p) => p[0].toUpperCase()).join();
    final inner = Container(
      width: size - 6,
      height: size - 6,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: Theme.of(context).brightness == Brightness.dark ? const Color(0xFF151A24) : Colors.white, width: 2.5),
        color: const Color(0xFF334155),
      ),
      clipBehavior: Clip.antiAlias,
      child: url.trim().isEmpty
          ? Center(
              child: Text(initials, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: size * 0.28)),
            )
          : Image.network(
              url,
              width: size - 6,
              height: size - 6,
              fit: BoxFit.cover,
              errorBuilder: (_, __, ___) => Center(
                child: Text(initials, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: size * 0.28)),
              ),
            ),
    );
    return SizedBox(
      width: size,
      height: size,
      child: Stack(
        alignment: Alignment.center,
        children: [
          if (spin != null) RotationTransition(turns: spin!, child: ring) else ring,
          inner,
        ],
      ),
    );
  }
}

class NgmyStars extends StatelessWidget {
  const NgmyStars({super.key, required this.rating, this.size = 14});
  final double rating;
  final double size;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: List.generate(5, (i) {
        final v = rating - i;
        final icon = v >= 0.75 ? Icons.star_rounded : (v >= 0.25 ? Icons.star_half_rounded : Icons.star_border_rounded);
        return Icon(icon, size: size, color: const Color(0xFFF59E0B));
      }),
    );
  }
}

/// The workers strip shown inside House & Insurance.
class NgmyHouseWorkersSection extends StatefulWidget {
  const NgmyHouseWorkersSection({
    super.key,
    required this.state,
    required this.clientName,
    required this.clientEmail,
    required this.clientPhone,
    required this.isAdmin,
    required this.reportUrl,
  });

  final String state;
  final String clientName;
  final String clientEmail;
  final String clientPhone;
  final bool isAdmin;

  /// Admin WhatsApp link with [text] already filled in (for reports).
  final String Function(String text) reportUrl;

  @override
  State<NgmyHouseWorkersSection> createState() => _NgmyHouseWorkersSectionState();
}

class _NgmyHouseWorkersSectionState extends State<NgmyHouseWorkersSection> with SingleTickerProviderStateMixin {
  late final AnimationController _spin = AnimationController(vsync: this, duration: const Duration(seconds: 4))..repeat();
  List<Map<String, dynamic>> _workers = [];
  Map<String, dynamic>? _me;
  bool _loading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void didUpdateWidget(covariant NgmyHouseWorkersSection oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.state != widget.state) _load();
  }

  @override
  void dispose() {
    _spin.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _error = null;
    });
    final results = await Future.wait([NgmyHouseWorkersApi.list(widget.state), NgmyHouseWorkersApi.me()]);
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (results[0]['ok'] == true) {
        _workers = _maps(results[0]['workers']);
      } else {
        _error = (results[0]['error'] ?? 'Could not load workers.').toString();
      }
      if (results[1]['ok'] == true) _me = Map<String, dynamic>.from(results[1]);
    });
  }

  Map<String, dynamic>? get _myWorker =>
      _me?['worker'] is Map ? Map<String, dynamic>.from(_me!['worker'] as Map) : null;

  int get _openRequests => _maps(_me?['requests'])
      .where((r) => r['status'] == 'pending' || r['status'] == 'accepted' || (r['status'] == 'done' && r['rating'] == null))
      .length;

  int get _newJobs => _maps(_me?['inbox']).where((r) => r['status'] == 'pending').length;

  void _openWorker(Map<String, dynamic> w) {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _WorkerProfileSheet(
        worker: w,
        spin: _spin,
        onSubmitWork: () async {
          Navigator.pop(context);
          final sent = await showNgmySubmitWorkSheet(
            context,
            worker: w,
            clientName: widget.clientName,
            clientPhone: widget.clientPhone,
          );
          if (sent) _load();
        },
        onReport: () => _openUrl(widget.reportUrl(
          'NGMY House & Insurance — report about worker ${w['name']} (${w['city']}, ${w['state']}).\n'
          'What happened: ',
        )),
      ),
    );
  }

  Future<void> _openMyRequests() async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _MyRequestsSheet(reportUrl: widget.reportUrl),
    );
    _load();
  }

  Future<void> _openInbox() async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _WorkInboxSheet(workerName: (_myWorker?['name'] ?? '').toString()),
    );
    _load();
  }

  Future<void> _openAdmin() async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _AdminWorkersSheet(spin: _spin),
    );
    _load();
  }

  Widget _pill(String label, IconData icon, Color color, VoidCallback onTap, {int badge = 0}) {
    final c = _HwColors(context);
    return Material(
      color: color.withOpacity(c.isDark ? 0.18 : 0.1),
      borderRadius: BorderRadius.circular(999),
      child: InkWell(
        borderRadius: BorderRadius.circular(999),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 14, color: color),
              const SizedBox(width: 4),
              Text(label, style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.w800, color: color)),
              if (badge > 0) ...[
                const SizedBox(width: 5),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1),
                  decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(999)),
                  child: Text('$badge', style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900)),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    final myWorker = _myWorker;
    final workerApproved = myWorker?['status'] == 'approved';
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 12, 12, 10),
      decoration: BoxDecoration(
        color: c.tile,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _kHwAccent.withOpacity(0.3)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              const Icon(Icons.engineering_rounded, color: _kHwAccent, size: 20),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  widget.state.trim().isEmpty ? 'House workers' : 'Workers in ${widget.state}',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14.5, color: c.ink),
                ),
              ),
              IconButton(
                tooltip: 'Refresh',
                visualDensity: VisualDensity.compact,
                onPressed: _load,
                icon: Icon(Icons.refresh_rounded, size: 18, color: c.muted),
              ),
            ],
          ),
          const SizedBox(height: 6),
          SizedBox(
            height: 112,
            child: _loading
                ? const Center(child: SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2)))
                : (_workers.isEmpty
                    ? Center(
                        child: Text(
                          _error ?? 'No workers in ${widget.state.trim().isEmpty ? 'your state' : widget.state} yet.',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: c.muted, fontSize: 12),
                        ),
                      )
                    : ListView.separated(
                        scrollDirection: Axis.horizontal,
                        itemCount: _workers.length,
                        separatorBuilder: (_, __) => const SizedBox(width: 12),
                        itemBuilder: (_, i) {
                          final w = _workers[i];
                          final rating = (w['rating'] as num?)?.toDouble() ?? 0;
                          return InkWell(
                            borderRadius: BorderRadius.circular(12),
                            onTap: () => _openWorker(w),
                            child: SizedBox(
                              width: 78,
                              child: Column(
                                children: [
                                  NgmyRingAvatar(
                                    url: (w['photoUrl'] ?? '').toString(),
                                    name: (w['name'] ?? '').toString(),
                                    size: 66,
                                    spin: _spin,
                                  ),
                                  const SizedBox(height: 5),
                                  Text(
                                    (w['name'] ?? '').toString(),
                                    maxLines: 1,
                                    overflow: TextOverflow.ellipsis,
                                    style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.w800, color: c.ink),
                                  ),
                                  const SizedBox(height: 2),
                                  rating > 0
                                      ? NgmyStars(rating: rating, size: 11)
                                      : Text('New', style: TextStyle(fontSize: 10, color: c.muted, fontWeight: FontWeight.w700)),
                                ],
                              ),
                            ),
                          );
                        },
                      )),
          ),
          const SizedBox(height: 6),
          Wrap(
            spacing: 6,
            runSpacing: 6,
            children: [
              _pill('My requests', Icons.assignment_rounded, _kHwAccent, _openMyRequests, badge: _openRequests),
              if (workerApproved)
                _pill('Work inbox', Icons.inbox_rounded, _kHwGreen, _openInbox, badge: _newJobs),
              if (myWorker != null && !workerApproved)
                _pill(
                  myWorker['status'] == 'pending' ? 'Worker application: waiting' : 'Worker application: ${myWorker['status']}',
                  Icons.hourglass_top_rounded,
                  const Color(0xFFF59E0B),
                  () => showNgmyWorkerApplySheet(context, state: widget.state, clientName: widget.clientName, clientPhone: widget.clientPhone).then((_) => _load()),
                ),
              if (widget.isAdmin)
                _pill('Worker applications', Icons.admin_panel_settings_rounded, const Color(0xFF8B5CF6), _openAdmin),
            ],
          ),
        ],
      ),
    );
  }
}

/// Top-of-card button: apply to become a house worker.
class NgmyApplyWorkerButton extends StatelessWidget {
  const NgmyApplyWorkerButton({
    super.key,
    required this.state,
    required this.clientName,
    required this.clientPhone,
  });

  final String state;
  final String clientName;
  final String clientPhone;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(12),
        onTap: () => showNgmyWorkerApplySheet(context, state: state, clientName: clientName, clientPhone: clientPhone),
        child: Ink(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            gradient: const LinearGradient(colors: [Color(0xFF0284C7), Color(0xFF10B981)]),
          ),
          child: const Row(
            children: [
              Icon(Icons.construction_rounded, color: Colors.white, size: 18),
              SizedBox(width: 8),
              Expanded(
                child: Text(
                  'Apply to be a worker',
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13.5),
                ),
              ),
              Icon(Icons.arrow_forward_rounded, color: Colors.white, size: 18),
            ],
          ),
        ),
      ),
    );
  }
}

Widget _sheetFrame(BuildContext context, {required String title, required IconData icon, required Widget child}) {
  final c = _HwColors(context);
  return Padding(
    padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
    child: Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.9, maxWidth: 560),
      margin: const EdgeInsets.fromLTRB(10, 10, 10, 12),
      decoration: BoxDecoration(
        color: c.sheet,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: c.line),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 8, 4),
            child: Row(
              children: [
                Icon(icon, color: _kHwAccent),
                const SizedBox(width: 8),
                Expanded(child: Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: c.ink))),
                IconButton(onPressed: () => Navigator.pop(context), icon: Icon(Icons.close_rounded, color: c.muted)),
              ],
            ),
          ),
          Flexible(child: child),
        ],
      ),
    ),
  );
}

InputDecoration _field(BuildContext context, String label, {String? hint, IconData? icon}) {
  final c = _HwColors(context);
  return InputDecoration(
    labelText: label,
    hintText: hint,
    prefixIcon: icon == null ? null : Icon(icon, size: 19, color: _kHwAccent),
    filled: true,
    fillColor: c.tile,
    isDense: true,
    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: c.line)),
    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: c.line)),
    focusedBorder: const OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(12)),
      borderSide: BorderSide(color: _kHwAccent, width: 1.6),
    ),
  );
}

Widget _primaryButton(String label, IconData icon, VoidCallback? onPressed, {Color color = _kHwAccent, bool busy = false}) {
  return SizedBox(
    height: 46,
    child: ElevatedButton.icon(
      onPressed: busy ? null : onPressed,
      icon: busy
          ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
          : Icon(icon, size: 18),
      label: Text(label, style: const TextStyle(fontWeight: FontWeight.w800)),
      style: ElevatedButton.styleFrom(
        backgroundColor: color,
        foregroundColor: Colors.white,
        elevation: 0,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(13)),
      ),
    ),
  );
}

class _WorkerProfileSheet extends StatelessWidget {
  const _WorkerProfileSheet({required this.worker, required this.spin, required this.onSubmitWork, required this.onReport});

  final Map<String, dynamic> worker;
  final Animation<double> spin;
  final VoidCallback onSubmitWork;
  final VoidCallback onReport;

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    final rating = (worker['rating'] as num?)?.toDouble() ?? 0;
    final count = (worker['ratingCount'] as num?)?.toInt() ?? 0;
    final jobs = (worker['jobsDone'] as num?)?.toInt() ?? 0;
    final skills = (worker['skills'] as List?)?.map((e) => e.toString()).toList() ?? const <String>[];
    final bio = (worker['bio'] ?? '').toString().trim();
    return _sheetFrame(
      context,
      title: 'Worker profile',
      icon: Icons.engineering_rounded,
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(
              child: NgmyRingAvatar(
                url: (worker['photoUrl'] ?? '').toString(),
                name: (worker['name'] ?? '').toString(),
                size: 108,
                spin: spin,
              ),
            ),
            const SizedBox(height: 10),
            Text(
              (worker['name'] ?? '').toString(),
              textAlign: TextAlign.center,
              style: TextStyle(fontWeight: FontWeight.w900, fontSize: 19, color: c.ink),
            ),
            Text(
              [worker['city'], worker['state']].where((e) => (e ?? '').toString().trim().isNotEmpty).join(', '),
              textAlign: TextAlign.center,
              style: TextStyle(color: c.muted, fontSize: 12.5),
            ),
            const SizedBox(height: 10),
            Row(
              children: [
                Expanded(
                  child: _statBox(
                    context,
                    count > 0 ? NgmyStars(rating: rating, size: 15) : Text('New', style: TextStyle(fontWeight: FontWeight.w900, color: c.ink)),
                    count > 0 ? '${rating.toStringAsFixed(1)} · $count rating${count == 1 ? '' : 's'}' : 'No ratings yet',
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: _statBox(
                    context,
                    Text('$jobs', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: c.ink)),
                    jobs == 1 ? 'job done' : 'jobs done',
                  ),
                ),
              ],
            ),
            if (skills.isNotEmpty) ...[
              const SizedBox(height: 12),
              Wrap(
                spacing: 6,
                runSpacing: 6,
                children: skills
                    .map((s) => Container(
                          padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                          decoration: BoxDecoration(
                            color: _kHwAccent.withOpacity(c.isDark ? 0.18 : 0.1),
                            borderRadius: BorderRadius.circular(999),
                          ),
                          child: Text(s, style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700, color: _kHwAccent)),
                        ))
                    .toList(),
              ),
            ],
            if (bio.isNotEmpty) ...[
              const SizedBox(height: 12),
              Text(bio, style: TextStyle(fontSize: 13, height: 1.35, color: c.ink.withOpacity(0.85))),
            ],
            const SizedBox(height: 16),
            _primaryButton('Submit work', Icons.send_rounded, onSubmitWork),
            const SizedBox(height: 8),
            TextButton.icon(
              onPressed: onReport,
              icon: const Icon(Icons.flag_rounded, size: 17),
              label: const Text('Report this worker', style: TextStyle(fontWeight: FontWeight.w800)),
              style: TextButton.styleFrom(foregroundColor: Colors.red.shade400),
            ),
          ],
        ),
      ),
    );
  }

  Widget _statBox(BuildContext context, Widget top, String label) {
    final c = _HwColors(context);
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 9),
      decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(12), border: Border.all(color: c.line)),
      child: Column(
        children: [
          top,
          const SizedBox(height: 3),
          Text(label, style: TextStyle(fontSize: 11, color: c.muted, fontWeight: FontWeight.w600)),
        ],
      ),
    );
  }
}

/// Client sends a job to a worker. Text only: what is wrong, where, when.
Future<bool> showNgmySubmitWorkSheet(
  BuildContext context, {
  required Map<String, dynamic> worker,
  required String clientName,
  required String clientPhone,
}) async {
  final nameC = TextEditingController(text: clientName);
  final phoneC = TextEditingController(text: clientPhone);
  final addressC = TextEditingController();
  final cityC = TextEditingController(text: (worker['city'] ?? '').toString());
  final detailsC = TextEditingController();
  final timeC = TextEditingController();
  String category = '';
  var busy = false;
  final sent = await showModalBottomSheet<bool>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => StatefulBuilder(
      builder: (ctx, setSheet) {
        final c = _HwColors(ctx);
        Future<void> submit() async {
          setSheet(() => busy = true);
          final res = await NgmyHouseWorkersApi.request({
            'workerId': worker['id'],
            'clientName': nameC.text.trim(),
            'clientPhone': phoneC.text.trim(),
            'address': addressC.text.trim(),
            'city': cityC.text.trim(),
            'category': category,
            'details': detailsC.text.trim(),
            'bestTime': timeC.text.trim(),
          });
          if (!ctx.mounted) return;
          setSheet(() => busy = false);
          if (res['ok'] == true) {
            Navigator.pop(ctx, true);
          } else {
            _snack(ctx, (res['error'] ?? 'Could not send. Try again.').toString(), error: true);
          }
        }

        return _sheetFrame(
          ctx,
          title: 'Submit work to ${worker['name']}',
          icon: Icons.send_rounded,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'Tell the worker what is wrong. Once they accept, you will both get each other\'s WhatsApp to talk.',
                  style: TextStyle(fontSize: 12, color: c.muted, height: 1.35),
                ),
                const SizedBox(height: 12),
                Wrap(
                  spacing: 6,
                  runSpacing: 6,
                  children: [
                    for (final cat in NgmyHouseInsurance.coveredCategories)
                      ChoiceChip(
                        label: Text(cat.title, style: const TextStyle(fontSize: 11.5)),
                        selected: category == cat.title,
                        onSelected: (_) => setSheet(() => category = category == cat.title ? '' : cat.title),
                        selectedColor: _kHwAccent.withOpacity(0.25),
                        visualDensity: VisualDensity.compact,
                      ),
                  ],
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: detailsC,
                  maxLines: 4,
                  decoration: _field(ctx, 'What is wrong? *', hint: 'Describe the problem: what is broken, leaking, or not working…'),
                ),
                const SizedBox(height: 10),
                TextField(controller: addressC, decoration: _field(ctx, 'Address of the work', icon: Icons.home_rounded)),
                const SizedBox(height: 10),
                TextField(controller: cityC, decoration: _field(ctx, 'City', icon: Icons.location_city_rounded)),
                const SizedBox(height: 10),
                TextField(controller: timeC, decoration: _field(ctx, 'Best time (optional)', hint: 'e.g. Saturday morning', icon: Icons.schedule_rounded)),
                const SizedBox(height: 10),
                TextField(controller: nameC, decoration: _field(ctx, 'Your name *', icon: Icons.person_rounded)),
                const SizedBox(height: 10),
                TextField(
                  controller: phoneC,
                  keyboardType: TextInputType.phone,
                  decoration: _field(ctx, 'Your WhatsApp number *', icon: Icons.phone_rounded),
                ),
                const SizedBox(height: 16),
                _primaryButton('Send to ${worker['name']}', Icons.send_rounded, submit, busy: busy),
              ],
            ),
          ),
        );
      },
    ),
  );
  if (sent == true && context.mounted) {
    _snack(context, 'Sent to ${worker['name']}. Their WhatsApp shows in My requests once they accept.');
  }
  return sent == true;
}

/// Apply to be a worker (or edit your worker profile).
Future<void> showNgmyWorkerApplySheet(
  BuildContext context, {
  required String state,
  required String clientName,
  required String clientPhone,
}) async {
  final mine = await NgmyHouseWorkersApi.me();
  if (!context.mounted) return;
  final existing = mine['worker'] is Map ? Map<String, dynamic>.from(mine['worker'] as Map) : null;
  final nameC = TextEditingController(text: (existing?['name'] ?? clientName).toString());
  final phoneC = TextEditingController(text: (existing?['phone'] ?? clientPhone).toString());
  final cityC = TextEditingController(text: (existing?['city'] ?? '').toString());
  final bioC = TextEditingController(text: (existing?['bio'] ?? '').toString());
  var pickedState = (existing?['state'] ?? state).toString().trim();
  if (!kNgmyUsStates.contains(pickedState)) pickedState = kNgmyUsStates.first;
  final skills = <String>{...((existing?['skills'] as List?)?.map((e) => e.toString()) ?? const <String>[])};
  final photoUrl = (existing?['photoUrl'] ?? '').toString();
  Uint8ListHolder? photo;
  var busy = false;

  final saved = await showModalBottomSheet<bool>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => StatefulBuilder(
      builder: (ctx, setSheet) {
        final c = _HwColors(ctx);
        Future<void> pickPhoto() async {
          final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1600, imageQuality: 90);
          if (file == null) return;
          final raw = await file.readAsBytes();
          if (!ctx.mounted) return;
          // Let them move and zoom the photo so it fills the circle.
          final cropped = await showNgmyCircleCropper(ctx, raw);
          if (cropped == null) return;
          final shrunk = ngmyShrinkImageForUpload(cropped, mime: 'image/jpeg', maxSide: 600, quality: 82);
          setSheet(() => photo = Uint8ListHolder(shrunk.bytes, shrunk.mime));
        }

        Future<void> submit() async {
          setSheet(() => busy = true);
          final res = await NgmyHouseWorkersApi.apply({
            'name': nameC.text.trim(),
            'phone': phoneC.text.trim(),
            'state': pickedState,
            'city': cityC.text.trim(),
            'bio': bioC.text.trim(),
            'skills': skills.toList(),
            if (photo != null) 'photoBase64': base64Encode(photo!.bytes),
            if (photo != null) 'photoMime': photo!.mime,
          });
          if (!ctx.mounted) return;
          setSheet(() => busy = false);
          if (res['ok'] == true) {
            Navigator.pop(ctx, true);
          } else {
            _snack(ctx, (res['error'] ?? 'Could not send. Try again.').toString(), error: true);
          }
        }

        final status = (existing?['status'] ?? '').toString();
        return _sheetFrame(
          ctx,
          title: existing == null ? 'Apply to be a worker' : 'Your worker profile',
          icon: Icons.construction_rounded,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                if (status.isNotEmpty)
                  Container(
                    margin: const EdgeInsets.only(bottom: 10),
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: (status == 'approved' ? _kHwGreen : const Color(0xFFF59E0B)).withOpacity(0.12),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      status == 'approved'
                          ? 'You are an approved worker. Users in $pickedState can see you and send you work.'
                          : status == 'pending'
                              ? 'Your application is waiting for NGMY to approve it.'
                              : 'Your application was $status. You can update it and send it again.',
                      style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: c.ink),
                    ),
                  )
                else
                  Text(
                    'Fix houses for people in your state. NGMY reviews every worker. After each job, clients rate your work.',
                    style: TextStyle(fontSize: 12, color: c.muted, height: 1.35),
                  ),
                const SizedBox(height: 12),
                Center(
                  child: GestureDetector(
                    onTap: pickPhoto,
                    child: Stack(
                      clipBehavior: Clip.none,
                      children: [
                        Container(
                          width: 96,
                          height: 96,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: c.tile,
                            border: Border.all(color: _kHwAccent, width: 2),
                          ),
                          clipBehavior: Clip.antiAlias,
                          child: photo != null
                              ? Image.memory(photo!.bytes, width: 96, height: 96, fit: BoxFit.cover)
                              : (photoUrl.isNotEmpty
                                  ? Image.network(photoUrl, width: 96, height: 96, fit: BoxFit.cover)
                                  : Icon(Icons.person_rounded, size: 46, color: c.muted)),
                        ),
                        const Positioned(
                          right: -2,
                          bottom: -2,
                          child: CircleAvatar(
                            radius: 15,
                            backgroundColor: _kHwAccent,
                            child: Icon(Icons.camera_alt_rounded, size: 16, color: Colors.white),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 4),
                Center(child: Text('Profile photo *', style: TextStyle(fontSize: 11, color: c.muted))),
                const SizedBox(height: 12),
                TextField(controller: nameC, decoration: _field(ctx, 'Full name *', icon: Icons.person_rounded)),
                const SizedBox(height: 10),
                TextField(
                  controller: phoneC,
                  keyboardType: TextInputType.phone,
                  decoration: _field(ctx, 'WhatsApp number *', icon: Icons.phone_rounded),
                ),
                const SizedBox(height: 10),
                DropdownButtonFormField<String>(
                  value: pickedState,
                  isExpanded: true,
                  decoration: _field(ctx, 'State *', icon: Icons.map_rounded),
                  items: kNgmyUsStates.map((s) => DropdownMenuItem(value: s, child: Text(s))).toList(),
                  onChanged: (v) => setSheet(() => pickedState = v ?? pickedState),
                ),
                const SizedBox(height: 10),
                TextField(controller: cityC, decoration: _field(ctx, 'City', icon: Icons.location_city_rounded)),
                const SizedBox(height: 12),
                Text('What can you fix? *', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: c.ink)),
                const SizedBox(height: 6),
                Wrap(
                  spacing: 6,
                  runSpacing: 6,
                  children: [
                    for (final cat in [
                      ...NgmyHouseInsurance.coveredCategories.map((e) => e.title),
                      'Painting',
                      'Plumbing',
                      'Electrical',
                      'Roofing',
                      'Flooring',
                      'Yard work',
                    ])
                      FilterChip(
                        label: Text(cat, style: const TextStyle(fontSize: 11.5)),
                        selected: skills.contains(cat),
                        onSelected: (on) => setSheet(() => on ? skills.add(cat) : skills.remove(cat)),
                        selectedColor: _kHwAccent.withOpacity(0.25),
                        visualDensity: VisualDensity.compact,
                      ),
                  ],
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: bioC,
                  maxLines: 3,
                  decoration: _field(ctx, 'About you (optional)', hint: 'Experience, tools you have, when you can work…'),
                ),
                const SizedBox(height: 16),
                _primaryButton(
                  existing == null ? 'Send application' : 'Save profile',
                  Icons.check_circle_rounded,
                  submit,
                  color: _kHwGreen,
                  busy: busy,
                ),
              ],
            ),
          ),
        );
      },
    ),
  );
  if (saved == true && context.mounted) {
    _snack(
      context,
      existing?['status'] == 'approved'
          ? 'Your worker profile was saved.'
          : 'Application sent. NGMY will review it, then users in $pickedState can find you.',
    );
  }
}

class Uint8ListHolder {
  Uint8ListHolder(this.bytes, this.mime);
  final Uint8List bytes;
  final String mime;
}

Color _statusColor(String status) {
  switch (status) {
    case 'accepted':
      return _kHwAccent;
    case 'done':
      return _kHwGreen;
    case 'declined':
    case 'cancelled':
      return const Color(0xFF94A3B8);
    default:
      return const Color(0xFFF59E0B);
  }
}

String _statusLabel(String status) {
  switch (status) {
    case 'accepted':
      return 'Accepted';
    case 'done':
      return 'Done';
    case 'declined':
      return 'Declined';
    case 'cancelled':
      return 'Cancelled';
    default:
      return 'Waiting';
  }
}

Widget _statusPill(String status) {
  final color = _statusColor(status);
  return Container(
    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
    decoration: BoxDecoration(color: color.withOpacity(0.15), borderRadius: BorderRadius.circular(999)),
    child: Text(_statusLabel(status), style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w900, color: color)),
  );
}

class _MyRequestsSheet extends StatefulWidget {
  const _MyRequestsSheet({required this.reportUrl});
  final String Function(String text) reportUrl;

  @override
  State<_MyRequestsSheet> createState() => _MyRequestsSheetState();
}

class _MyRequestsSheetState extends State<_MyRequestsSheet> {
  List<Map<String, dynamic>> _rows = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final res = await NgmyHouseWorkersApi.me();
    if (!mounted) return;
    setState(() {
      _loading = false;
      _rows = _maps(res['requests']);
    });
  }

  Future<void> _act(Future<Map<String, dynamic>> call, String okText) async {
    final res = await call;
    if (!mounted) return;
    if (res['ok'] == true) {
      _snack(context, okText);
    } else {
      _snack(context, (res['error'] ?? 'Try again.').toString(), error: true);
    }
    _load();
  }

  Future<void> _rate(Map<String, dynamic> r) async {
    var stars = 5;
    final reviewC = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setD) => AlertDialog(
          title: Text('Rate ${(r['worker'] as Map?)?['name'] ?? 'the worker'}'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: List.generate(5, (i) {
                  return IconButton(
                    onPressed: () => setD(() => stars = i + 1),
                    icon: Icon(i < stars ? Icons.star_rounded : Icons.star_border_rounded, color: const Color(0xFFF59E0B), size: 32),
                  );
                }),
              ),
              TextField(controller: reviewC, maxLines: 3, decoration: const InputDecoration(hintText: 'How was the work? (optional)')),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Send rating')),
          ],
        ),
      ),
    );
    if (ok == true) await _act(NgmyHouseWorkersApi.rate(r['id'].toString(), stars, reviewC.text.trim()), 'Thanks for rating.');
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    return _sheetFrame(
      context,
      title: 'My requests',
      icon: Icons.assignment_rounded,
      child: _loading
          ? const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
          : (_rows.isEmpty
              ? Padding(
                  padding: const EdgeInsets.all(30),
                  child: Text('You have not sent work to a worker yet.', textAlign: TextAlign.center, style: TextStyle(color: c.muted)),
                )
              : ListView(
                  shrinkWrap: true,
                  padding: const EdgeInsets.fromLTRB(14, 4, 14, 16),
                  children: _rows.map((r) {
                    final w = Map<String, dynamic>.from((r['worker'] as Map?) ?? const {});
                    final status = (r['status'] ?? '').toString();
                    final phone = (w['phone'] ?? '').toString();
                    return Container(
                      margin: const EdgeInsets.only(bottom: 10),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(14), border: Border.all(color: c.line)),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Row(
                            children: [
                              NgmyRingAvatar(url: (w['photoUrl'] ?? '').toString(), name: (w['name'] ?? '').toString(), size: 40),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text((w['name'] ?? 'Worker').toString(), style: TextStyle(fontWeight: FontWeight.w900, color: c.ink)),
                                    Text(
                                      [r['category'], _shortDate(r['createdAt'])].where((e) => (e ?? '').toString().isNotEmpty).join(' · '),
                                      style: TextStyle(fontSize: 11, color: c.muted),
                                    ),
                                  ],
                                ),
                              ),
                              _statusPill(status),
                            ],
                          ),
                          const SizedBox(height: 8),
                          Text((r['details'] ?? '').toString(), style: TextStyle(fontSize: 12.5, color: c.ink.withOpacity(0.85))),
                          if (r['rating'] != null) ...[
                            const SizedBox(height: 6),
                            NgmyStars(rating: (r['rating'] as num).toDouble()),
                          ],
                          const SizedBox(height: 8),
                          Wrap(
                            spacing: 6,
                            runSpacing: 6,
                            children: [
                              if (status == 'accepted' && phone.isNotEmpty)
                                FilledButton.icon(
                                  onPressed: () => ngmyOpenWhatsApp(
                                    context,
                                    phone,
                                    'Hi ${w['name']}, this is about the NGMY House & Insurance work you accepted: ${r['details']}',
                                  ),
                                  icon: const Icon(Icons.chat_rounded, size: 16),
                                  label: const Text('WhatsApp'),
                                  style: FilledButton.styleFrom(backgroundColor: const Color(0xFF25D366), visualDensity: VisualDensity.compact),
                                ),
                              if (status == 'accepted')
                                OutlinedButton(
                                  onPressed: () => _act(NgmyHouseWorkersApi.done(r['id'].toString()), 'Marked as done. Please rate the work.'),
                                  style: OutlinedButton.styleFrom(visualDensity: VisualDensity.compact),
                                  child: const Text('Work is done'),
                                ),
                              if (status == 'done' && r['rating'] == null)
                                FilledButton.icon(
                                  onPressed: () => _rate(r),
                                  icon: const Icon(Icons.star_rounded, size: 16),
                                  label: const Text('Rate'),
                                  style: FilledButton.styleFrom(backgroundColor: const Color(0xFFF59E0B), visualDensity: VisualDensity.compact),
                                ),
                              if (status == 'pending')
                                OutlinedButton(
                                  onPressed: () => _act(NgmyHouseWorkersApi.cancel(r['id'].toString()), 'Request cancelled.'),
                                  style: OutlinedButton.styleFrom(visualDensity: VisualDensity.compact),
                                  child: const Text('Cancel'),
                                ),
                              TextButton.icon(
                                onPressed: () => _openUrl(widget.reportUrl(
                                  'NGMY House & Insurance — report about worker ${w['name']} (${w['state']}).\n'
                                  'Request: ${r['details']}\nWhat happened: ',
                                )),
                                icon: const Icon(Icons.flag_rounded, size: 15),
                                label: const Text('Report'),
                                style: TextButton.styleFrom(foregroundColor: Colors.red.shade400, visualDensity: VisualDensity.compact),
                              ),
                            ],
                          ),
                        ],
                      ),
                    );
                  }).toList(),
                )),
    );
  }
}

class _WorkInboxSheet extends StatefulWidget {
  const _WorkInboxSheet({required this.workerName});
  final String workerName;

  @override
  State<_WorkInboxSheet> createState() => _WorkInboxSheetState();
}

class _WorkInboxSheetState extends State<_WorkInboxSheet> {
  List<Map<String, dynamic>> _rows = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final res = await NgmyHouseWorkersApi.me();
    if (!mounted) return;
    setState(() {
      _loading = false;
      _rows = _maps(res['inbox']);
    });
  }

  Future<void> _act(Future<Map<String, dynamic>> call, String okText) async {
    final res = await call;
    if (!mounted) return;
    if (res['ok'] == true) {
      _snack(context, okText);
    } else {
      _snack(context, (res['error'] ?? 'Try again.').toString(), error: true);
    }
    _load();
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    return _sheetFrame(
      context,
      title: 'Work inbox',
      icon: Icons.inbox_rounded,
      child: _loading
          ? const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
          : (_rows.isEmpty
              ? Padding(
                  padding: const EdgeInsets.all(30),
                  child: Text('No work requests yet.', textAlign: TextAlign.center, style: TextStyle(color: c.muted)),
                )
              : ListView(
                  shrinkWrap: true,
                  padding: const EdgeInsets.fromLTRB(14, 4, 14, 16),
                  children: _rows.map((r) {
                    final status = (r['status'] ?? '').toString();
                    final phone = (r['clientPhone'] ?? '').toString();
                    return Container(
                      margin: const EdgeInsets.only(bottom: 10),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(14), border: Border.all(color: c.line)),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Row(
                            children: [
                              Expanded(
                                child: Text(
                                  (r['clientName'] ?? 'Client').toString(),
                                  style: TextStyle(fontWeight: FontWeight.w900, color: c.ink),
                                ),
                              ),
                              _statusPill(status),
                            ],
                          ),
                          Text(
                            [r['category'], r['city'], _shortDate(r['createdAt'])].where((e) => (e ?? '').toString().isNotEmpty).join(' · '),
                            style: TextStyle(fontSize: 11, color: c.muted),
                          ),
                          const SizedBox(height: 8),
                          Text((r['details'] ?? '').toString(), style: TextStyle(fontSize: 12.5, color: c.ink.withOpacity(0.85))),
                          if ((r['address'] ?? '').toString().isNotEmpty || (r['bestTime'] ?? '').toString().isNotEmpty) ...[
                            const SizedBox(height: 6),
                            Text(
                              [
                                if ((r['address'] ?? '').toString().isNotEmpty) 'Address: ${r['address']}',
                                if ((r['bestTime'] ?? '').toString().isNotEmpty) 'Best time: ${r['bestTime']}',
                              ].join('\n'),
                              style: TextStyle(fontSize: 11.5, color: c.muted),
                            ),
                          ],
                          if (r['rating'] != null) ...[
                            const SizedBox(height: 6),
                            NgmyStars(rating: (r['rating'] as num).toDouble()),
                            if ((r['review'] ?? '').toString().isNotEmpty)
                              Text('"${r['review']}"', style: TextStyle(fontSize: 11.5, fontStyle: FontStyle.italic, color: c.muted)),
                          ],
                          const SizedBox(height: 8),
                          Wrap(
                            spacing: 6,
                            runSpacing: 6,
                            children: [
                              if (status == 'pending') ...[
                                FilledButton.icon(
                                  onPressed: () => _act(NgmyHouseWorkersApi.respond(r['id'].toString(), true), 'Accepted. You can now WhatsApp the client.'),
                                  icon: const Icon(Icons.check_rounded, size: 16),
                                  label: const Text('Accept'),
                                  style: FilledButton.styleFrom(backgroundColor: _kHwGreen, visualDensity: VisualDensity.compact),
                                ),
                                OutlinedButton(
                                  onPressed: () => _act(NgmyHouseWorkersApi.respond(r['id'].toString(), false), 'Declined.'),
                                  style: OutlinedButton.styleFrom(visualDensity: VisualDensity.compact),
                                  child: const Text('Decline'),
                                ),
                              ],
                              if (status == 'accepted' && phone.isNotEmpty)
                                FilledButton.icon(
                                  onPressed: () => ngmyOpenWhatsApp(
                                    context,
                                    phone,
                                    'Hi ${r['clientName']}, this is ${widget.workerName} from NGMY House & Insurance. '
                                    'I accepted your work: ${r['details']}',
                                  ),
                                  icon: const Icon(Icons.chat_rounded, size: 16),
                                  label: const Text('WhatsApp client'),
                                  style: FilledButton.styleFrom(backgroundColor: const Color(0xFF25D366), visualDensity: VisualDensity.compact),
                                ),
                              if (status == 'accepted')
                                OutlinedButton(
                                  onPressed: () => _act(NgmyHouseWorkersApi.done(r['id'].toString()), 'Marked as done. The client can now rate you.'),
                                  style: OutlinedButton.styleFrom(visualDensity: VisualDensity.compact),
                                  child: const Text('Mark done'),
                                ),
                            ],
                          ),
                        ],
                      ),
                    );
                  }).toList(),
                )),
    );
  }
}

class _AdminWorkersSheet extends StatefulWidget {
  const _AdminWorkersSheet({required this.spin});
  final Animation<double> spin;

  @override
  State<_AdminWorkersSheet> createState() => _AdminWorkersSheetState();
}

class _AdminWorkersSheetState extends State<_AdminWorkersSheet> {
  List<Map<String, dynamic>> _rows = [];
  bool _loading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final res = await NgmyHouseWorkersApi.adminList();
    if (!mounted) return;
    setState(() {
      _loading = false;
      _error = res['ok'] == true ? null : (res['error'] ?? 'Could not load.').toString();
      _rows = _maps(res['workers']);
    });
  }

  Future<void> _decide(String email, String decision) async {
    final res = await NgmyHouseWorkersApi.adminDecide(email, decision);
    if (!mounted) return;
    if (res['ok'] != true) _snack(context, (res['error'] ?? 'Try again.').toString(), error: true);
    _load();
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    return _sheetFrame(
      context,
      title: 'Worker applications',
      icon: Icons.admin_panel_settings_rounded,
      child: _loading
          ? const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
          : (_rows.isEmpty
              ? Padding(
                  padding: const EdgeInsets.all(30),
                  child: Text(_error ?? 'No worker applications yet.', textAlign: TextAlign.center, style: TextStyle(color: c.muted)),
                )
              : ListView(
                  shrinkWrap: true,
                  padding: const EdgeInsets.fromLTRB(14, 4, 14, 16),
                  children: _rows.map((w) {
                    final status = (w['status'] ?? '').toString();
                    final rating = (w['rating'] as num?)?.toDouble() ?? 0;
                    return Container(
                      margin: const EdgeInsets.only(bottom: 10),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(14), border: Border.all(color: c.line)),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Row(
                            children: [
                              NgmyRingAvatar(url: (w['photoUrl'] ?? '').toString(), name: (w['name'] ?? '').toString(), size: 46, spin: widget.spin),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text((w['name'] ?? '').toString(), style: TextStyle(fontWeight: FontWeight.w900, color: c.ink)),
                                    Text(
                                      '${w['city'] ?? ''}${(w['city'] ?? '').toString().isEmpty ? '' : ', '}${w['state'] ?? ''} · ${w['phone'] ?? ''}',
                                      style: TextStyle(fontSize: 11, color: c.muted),
                                    ),
                                    Text((w['email'] ?? '').toString(), style: TextStyle(fontSize: 11, color: c.muted)),
                                  ],
                                ),
                              ),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                decoration: BoxDecoration(
                                  color: (status == 'approved' ? _kHwGreen : (status == 'pending' ? const Color(0xFFF59E0B) : const Color(0xFF94A3B8))).withOpacity(0.15),
                                  borderRadius: BorderRadius.circular(999),
                                ),
                                child: Text(
                                  status,
                                  style: TextStyle(
                                    fontSize: 10.5,
                                    fontWeight: FontWeight.w900,
                                    color: status == 'approved' ? _kHwGreen : (status == 'pending' ? const Color(0xFFF59E0B) : const Color(0xFF94A3B8)),
                                  ),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 6),
                          Text(
                            ((w['skills'] as List?) ?? const []).join(', '),
                            style: TextStyle(fontSize: 11.5, color: c.ink.withOpacity(0.8)),
                          ),
                          if (rating > 0) ...[
                            const SizedBox(height: 4),
                            Row(children: [
                              NgmyStars(rating: rating, size: 13),
                              const SizedBox(width: 4),
                              Text('${w['ratingCount']} · ${w['jobsDone']} jobs', style: TextStyle(fontSize: 11, color: c.muted)),
                            ]),
                          ],
                          const SizedBox(height: 8),
                          Wrap(
                            spacing: 6,
                            runSpacing: 6,
                            children: [
                              if (status != 'approved')
                                FilledButton(
                                  onPressed: () => _decide(w['email'].toString(), 'approve'),
                                  style: FilledButton.styleFrom(backgroundColor: _kHwGreen, visualDensity: VisualDensity.compact),
                                  child: const Text('Approve'),
                                ),
                              if (status == 'pending')
                                OutlinedButton(
                                  onPressed: () => _decide(w['email'].toString(), 'reject'),
                                  style: OutlinedButton.styleFrom(visualDensity: VisualDensity.compact),
                                  child: const Text('Reject'),
                                ),
                              if (status == 'approved')
                                OutlinedButton(
                                  onPressed: () => _decide(w['email'].toString(), 'remove'),
                                  style: OutlinedButton.styleFrom(foregroundColor: Colors.red.shade400, visualDensity: VisualDensity.compact),
                                  child: const Text('Remove'),
                                ),
                              TextButton.icon(
                                onPressed: () => ngmyOpenWhatsApp(context, (w['phone'] ?? '').toString(), 'Hi ${w['name']}, this is NGMY about your worker application.'),
                                icon: const Icon(Icons.chat_rounded, size: 15),
                                label: const Text('WhatsApp'),
                                style: TextButton.styleFrom(foregroundColor: const Color(0xFF25D366), visualDensity: VisualDensity.compact),
                              ),
                            ],
                          ),
                        ],
                      ),
                    );
                  }).toList(),
                )),
    );
  }
}

