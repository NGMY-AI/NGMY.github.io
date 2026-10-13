import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_advisor_push.dart';
import 'ngmy_civic_registry_cloud.dart';
import 'ngmy_invoice_signature.dart';
import 'ngmy_share_image.dart';

/// Civic Registry — Give & Lend.
///
/// A member gives or lends money, an item or a service to another member.
/// Both unlock it with their own Registry ID + date of birth. The receiver
/// accepts and signs; the giver gets a receipt. Not paid back / returned
/// within 3 days after the due date → the server files an AI-written claim
/// on the receiver's record (the AI interview at the start collects the facts).

const _green = Color(0xFF10B981);
const _deep = Color(0xFF065F46);

// ── Server calls ────────────────────────────────────────────────────────────

/// Unlocked for this app session only (never saved on the phone).
class NgmyCivicGiveSession {
  NgmyCivicGiveSession._();
  static String rid = '';
  static String dob = '';
  static String name = '';
  static bool get unlocked => rid.isNotEmpty && dob.isNotEmpty;
  static void lock() {
    rid = '';
    dob = '';
    name = '';
  }
}

typedef _GiveResult = ({bool ok, String? error, Map<String, dynamic> data});

Future<_GiveResult> _giveCall(String action, Map<String, dynamic> body, {bool withCreds = true}) async {
  try {
    final res = await ngmyCivicInvoke({
      'action': action,
      if (withCreds) 'rid': NgmyCivicGiveSession.rid,
      if (withCreds) 'dob': NgmyCivicGiveSession.dob,
      ...body,
    }, timeout: const Duration(seconds: 40));
    if (res == null) return (ok: false, error: 'No connection. Try again.', data: <String, dynamic>{});
    final ok = res['ok'] == true;
    return (ok: ok, error: ok ? null : '${res['error'] ?? 'Something went wrong.'}', data: res);
  } catch (e) {
    return (ok: false, error: 'No connection. Try again.', data: <String, dynamic>{});
  }
}

List<Map<String, dynamic>> _items(Map<String, dynamic> data) =>
    (data['items'] as List? ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();

// ── Notifications ───────────────────────────────────────────────────────────

Timer? _watchTimer;
String _watchEmail = '';

/// Checks every couple of minutes for new requests / answers and shows the
/// app's tap notification. Call once after sign-in; safe to call again.
void ngmyCivicGivesStartWatcher(String email) {
  final e = email.trim().toLowerCase();
  if (e.isEmpty || e == _watchEmail) return;
  _watchEmail = e;
  _watchTimer?.cancel();
  Future<void> tick() async {
    if (_watchEmail != e) return;
    final r = await _giveCall('civicGiveInbox', const {}, withCreds: false);
    if (!r.ok) return;
    final prefs = await SharedPreferences.getInstance();
    final key = 'ngmy_civic_give_seen_v1_$e';
    final seen = <String, dynamic>{};
    try {
      seen.addAll(Map<String, dynamic>.from(jsonDecode(prefs.getString(key) ?? '{}') as Map));
    } catch (_) {}
    final first = seen.isEmpty;
    for (final g in _items(r.data)) {
      final id = '${g['id']}';
      final status = '${g['status']}';
      if (seen[id] == status) continue;
      seen[id] = status;
      if (first) continue; // first look after install: don't flood
      final other = '${g['other'] ?? 'A member'}';
      final what = '${g['what'] ?? ''}';
      final mine = g['role'] == 'giver';
      String? title;
      String? body;
      if (!mine && status == 'pending') {
        title = 'New request in Civic Registry';
        body = '$other wants to give you $what. In Civic Registry, search your name and tap the giving badge on your card to accept.';
      } else if (mine && status == 'accepted') {
        title = '$other accepted and signed';
        body = 'Your receipt for $what is ready in Civic Registry.';
      } else if (mine && status == 'declined') {
        title = '$other declined';
        body = 'They did not accept $what.';
      } else if (status == 'claimed') {
        title = 'Automatic claim filed';
        body = mine ? 'A claim was filed because $what was not paid back on time.' : 'A claim was filed on your record: $what was not paid back on time.';
      }
      if (title != null) {
        unawaited(ngmyAdvisorMessagePush(advisorName: title, message: body ?? '', profileId: 'civic_give_$id'));
      }
    }
    await prefs.setString(key, jsonEncode(seen));
  }

  unawaited(tick());
  // Every 5 minutes, only while the app is on screen (one small read each).
  _watchTimer = Timer.periodic(const Duration(minutes: 5), (_) {
    final s = WidgetsBinding.instance.lifecycleState;
    if (s == AppLifecycleState.hidden || s == AppLifecycleState.paused || s == AppLifecycleState.detached) return;
    unawaited(tick());
  });
}

void ngmyCivicGivesStopWatcher() {
  _watchTimer?.cancel();
  _watchTimer = null;
  _watchEmail = '';
  NgmyCivicGiveSession.lock();
}

// ── The corner button ───────────────────────────────────────────────────────

/// Same look as the Rankings award badge: a small round badge that sits half
/// over the top edge of a card. Shows a giving icon.
class NgmyCivicGiveBadge extends StatelessWidget {
  const NgmyCivicGiveBadge({super.key, required this.onTap, required this.isDark});
  final VoidCallback onTap;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: 'Give & Lend',
      child: Tooltip(
        message: 'Give & Lend',
        child: GestureDetector(
          onTap: () {
            HapticFeedback.selectionClick();
            onTap();
          },
          child: Container(
            padding: const EdgeInsets.all(5),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF1E293B) : Colors.white,
              shape: BoxShape.circle,
              border: Border.all(color: isDark ? Colors.white24 : const Color(0xFFE2E8F0)),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.35 : 0.12), blurRadius: 6, offset: const Offset(0, 2))],
            ),
            child: const Icon(Icons.volunteer_activism_rounded, size: 17, color: _green),
          ),
        ),
      ),
    );
  }
}

// ── Entry point ─────────────────────────────────────────────────────────────

/// Opens Give & Lend. [targetRid]/[targetName] is the member whose card was
/// tapped; when it's the user themself, it opens their own requests.
Future<void> showNgmyCivicGives(BuildContext context, {String targetRid = '', String targetName = ''}) async {
  if (!NgmyCivicGiveSession.unlocked) {
    final ok = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => const _UnlockSheet(),
    );
    if (ok != true || !context.mounted) return;
  }
  await Navigator.of(context).push(MaterialPageRoute<void>(
    builder: (_) => _GivesHubPage(targetRid: targetRid.trim().toUpperCase(), targetName: targetName.trim()),
  ));
}

// ── Unlock: Registry ID + date of birth ─────────────────────────────────────

class _UnlockSheet extends StatefulWidget {
  const _UnlockSheet();
  @override
  State<_UnlockSheet> createState() => _UnlockSheetState();
}

class _UnlockSheetState extends State<_UnlockSheet> {
  final _rid = TextEditingController();
  final _dob = TextEditingController();
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    _rid.dispose();
    _dob.dispose();
    super.dispose();
  }

  Future<void> _pickDob() async {
    final now = DateTime.now();
    final d = await showDatePicker(
      context: context,
      initialDate: DateTime(now.year - 30),
      firstDate: DateTime(1900),
      lastDate: now,
      helpText: 'Your date of birth',
    );
    if (d != null) {
      _dob.text = '${d.month.toString().padLeft(2, '0')}/${d.day.toString().padLeft(2, '0')}/${d.year}';
    }
  }

  Future<void> _unlock() async {
    final rid = _rid.text.trim().toUpperCase();
    final dob = _dob.text.trim();
    if (rid.length < 4 || dob.length < 8) {
      setState(() => _error = 'Enter your Registry ID and date of birth.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    final prevRid = NgmyCivicGiveSession.rid;
    final prevDob = NgmyCivicGiveSession.dob;
    NgmyCivicGiveSession.rid = rid;
    NgmyCivicGiveSession.dob = dob;
    final r = await _giveCall('civicGiveUnlock', const {});
    if (!mounted) return;
    if (r.ok) {
      NgmyCivicGiveSession.name = '${(r.data['me'] as Map?)?['name'] ?? ''}';
      Navigator.pop(context, true);
    } else {
      NgmyCivicGiveSession.rid = prevRid;
      NgmyCivicGiveSession.dob = prevDob;
      setState(() {
        _busy = false;
        _error = r.error;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    InputDecoration deco(String label, IconData icon, {String? hint}) => InputDecoration(
          labelText: label,
          hintText: hint,
          prefixIcon: Icon(icon),
          filled: true,
          fillColor: isDark ? Colors.white.withValues(alpha: 0.05) : const Color(0xFFF1F5F9),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
        );
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Container(
        constraints: const BoxConstraints(maxWidth: 560),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF111827) : Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(26)),
        ),
        child: SafeArea(
          top: false,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(22, 12, 22, 22),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey, borderRadius: BorderRadius.circular(99)))),
                const SizedBox(height: 18),
                Center(
                  child: Container(
                    width: 64,
                    height: 64,
                    decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [_green, _deep])),
                    child: const Icon(Icons.volunteer_activism_rounded, color: Colors.white, size: 32),
                  ),
                ),
                const SizedBox(height: 12),
                const Text('Give & Lend', textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 21)),
                const SizedBox(height: 4),
                Text(
                  'Unlock with your own Registry ID and date of birth.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: isDark ? Colors.white60 : Colors.black54, fontSize: 13),
                ),
                const SizedBox(height: 18),
                TextField(
                  controller: _rid,
                  textCapitalization: TextCapitalization.characters,
                  decoration: deco('Your Registry ID', Icons.badge_rounded),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: _dob,
                  readOnly: true,
                  onTap: _pickDob,
                  decoration: deco('Your date of birth', Icons.cake_rounded, hint: 'MM/DD/YYYY'),
                ),
                if (_error != null) ...[
                  const SizedBox(height: 12),
                  Text(_error!, style: const TextStyle(color: Colors.redAccent, fontWeight: FontWeight.w700)),
                ],
                const SizedBox(height: 18),
                SizedBox(
                  height: 52,
                  child: ElevatedButton.icon(
                    onPressed: _busy ? null : _unlock,
                    icon: _busy
                        ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                        : const Icon(Icons.lock_open_rounded),
                    label: const Text('Unlock', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: _green,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ── Hub: requests for me, things I gave ─────────────────────────────────────

String _money(num v) => '\$${v.toStringAsFixed(2).replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (_) => ',')}';
String _date(String iso) {
  final d = DateTime.tryParse(iso)?.toLocal();
  if (d == null) return '—';
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return '${m[d.month - 1]} ${d.day}, ${d.year}';
}

String _what(Map<String, dynamic> g) => g['kind'] == 'money' ? _money((g['amount'] as num?) ?? 0) : '${g['title'] ?? 'Item'}';

({String label, Color color, IconData icon}) _statusLook(Map<String, dynamic> g) {
  final overdue = g['status'] == 'accepted' && (DateTime.tryParse('${g['dueAt']}')?.isBefore(DateTime.now()) ?? false);
  return switch ('${g['status']}') {
    'pending' => (label: 'Waiting', color: const Color(0xFFF59E0B), icon: Icons.hourglass_top_rounded),
    'accepted' => overdue
        ? (label: 'Overdue', color: const Color(0xFFEF4444), icon: Icons.warning_amber_rounded)
        : (label: 'Active', color: _green, icon: Icons.handshake_rounded),
    'returned' => (label: 'Paid back', color: const Color(0xFF3B82F6), icon: Icons.verified_rounded),
    'claimed' => (label: 'Claim filed', color: const Color(0xFFDC2626), icon: Icons.gavel_rounded),
    'declined' => (label: 'Declined', color: Colors.grey, icon: Icons.block_rounded),
    _ => (label: 'Cancelled', color: Colors.grey, icon: Icons.close_rounded),
  };
}

IconData _kindIcon(String kind) => switch (kind) {
      'money' => Icons.payments_rounded,
      'item' => Icons.inventory_2_rounded,
      'service' => Icons.handyman_rounded,
      _ => Icons.redeem_rounded,
    };

class _GivesHubPage extends StatefulWidget {
  const _GivesHubPage({required this.targetRid, required this.targetName});
  final String targetRid;
  final String targetName;
  @override
  State<_GivesHubPage> createState() => _GivesHubPageState();
}

class _GivesHubPageState extends State<_GivesHubPage> {
  List<Map<String, dynamic>> _list = [];
  bool _loading = true;
  String? _error;

  bool get _otherTarget => widget.targetRid.isNotEmpty && widget.targetRid != NgmyCivicGiveSession.rid;

  @override
  void initState() {
    super.initState();
    unawaited(_load());
  }

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _error = null;
    });
    final r = await _giveCall('civicGiveList', const {});
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (r.ok) {
        _list = _items(r.data);
      } else {
        _error = r.error;
      }
    });
  }

  Future<void> _open(Map<String, dynamic> g) async {
    final changed = await showModalBottomSheet<bool>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _GiveDetailSheet(give: g),
    );
    if (changed == true) unawaited(_load());
  }

  Future<void> _giveNew() async {
    final made = await Navigator.of(context).push<bool>(MaterialPageRoute(
      builder: (_) => _GiveCreatePage(toRid: widget.targetRid, toName: widget.targetName),
    ));
    if (made == true) unawaited(_load());
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final forMe = _list.where((g) => g['role'] == 'receiver' && g['status'] == 'pending').toList();
    final active = _list.where((g) => g['status'] == 'accepted' || (g['status'] == 'pending' && g['role'] == 'giver')).toList();
    final done = _list.where((g) => !forMe.contains(g) && !active.contains(g)).toList();
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B0F14) : const Color(0xFFF5F7FA),
      appBar: AppBar(
        title: const Text('Give & Lend', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
        actions: [
          IconButton(tooltip: 'Refresh', onPressed: _load, icon: const Icon(Icons.refresh_rounded)),
          IconButton(
            tooltip: 'Lock',
            onPressed: () {
              NgmyCivicGiveSession.lock();
              Navigator.pop(context);
            },
            icon: const Icon(Icons.lock_rounded),
          ),
        ],
      ),
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 680),
          child: RefreshIndicator(
            onRefresh: _load,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 32),
              children: [
                _hero(isDark),
                const SizedBox(height: 18),
                if (_loading)
                  const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
                else if (_error != null)
                  Padding(padding: const EdgeInsets.all(24), child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.redAccent)))
                else ...[
                  _section('Waiting for your answer', forMe, isDark, empty: 'No requests for you right now.'),
                  _section('Active', active, isDark, empty: 'Nothing active.'),
                  if (done.isNotEmpty) _section('History', done, isDark),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _hero(bool isDark) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF047857), Color(0xFF065F46), Color(0xFF064E3B)]),
        boxShadow: [BoxShadow(color: _green.withValues(alpha: 0.3), blurRadius: 20, offset: const Offset(0, 8))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.verified_user_rounded, color: Colors.white70, size: 18),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  'Unlocked as ${NgmyCivicGiveSession.name.isEmpty ? NgmyCivicGiveSession.rid : NgmyCivicGiveSession.name}',
                  style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 12.5),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Text(
            _otherTarget ? 'Give or lend to ${widget.targetName.isEmpty ? 'this member' : widget.targetName}' : 'Your gives & loans',
            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
          ),
          const SizedBox(height: 4),
          Text(
            'Money, things or services. They accept and sign, you get a receipt. Not paid back 3 days after the date? A claim is filed automatically.',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12, height: 1.35),
          ),
          if (_otherTarget) ...[
            const SizedBox(height: 14),
            SizedBox(
              width: double.infinity,
              height: 48,
              child: ElevatedButton.icon(
                onPressed: _giveNew,
                icon: const Icon(Icons.add_rounded),
                label: const Text('Start a give / loan', style: TextStyle(fontWeight: FontWeight.w900)),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: _deep,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
              ),
            ),
          ],
        ],
      ),
    );
  }

  Widget _section(String title, List<Map<String, dynamic>> rows, bool isDark, {String? empty}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : const Color(0xFF0F172A))),
          const SizedBox(height: 8),
          if (rows.isEmpty && empty != null)
            Text(empty, style: TextStyle(color: isDark ? Colors.white54 : Colors.black45, fontSize: 13))
          else
            for (final g in rows) _tile(g, isDark),
        ],
      ),
    );
  }

  Widget _tile(Map<String, dynamic> g, bool isDark) {
    final look = _statusLook(g);
    final mine = g['role'] == 'giver';
    final party = (mine ? g['recipient'] : g['giver']) as Map?;
    final other = party == null ? null : party['name'];
    return Card(
      margin: const EdgeInsets.only(bottom: 10),
      color: isDark ? const Color(0xFF151A21) : Colors.white,
      elevation: 0,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18), side: BorderSide(color: look.color.withValues(alpha: 0.35))),
      child: ListTile(
        onTap: () => _open(g),
        contentPadding: const EdgeInsets.fromLTRB(14, 6, 10, 6),
        leading: CircleAvatar(
          backgroundColor: look.color.withValues(alpha: 0.15),
          child: Icon(_kindIcon('${g['kind']}'), color: look.color),
        ),
        title: Text(_what(g), maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w900)),
        subtitle: Text(
          '${mine ? 'To' : 'From'} ${other ?? 'member'} · due ${_date('${g['dueAt']}')}',
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: const TextStyle(fontSize: 12),
        ),
        trailing: Container(
          padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
          decoration: BoxDecoration(color: look.color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(99)),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(look.icon, size: 13, color: look.color),
              const SizedBox(width: 4),
              Text(look.label, style: TextStyle(color: look.color, fontWeight: FontWeight.w900, fontSize: 11)),
            ],
          ),
        ),
      ),
    );
  }
}

// ── Create: what, dates, AI questions, review ───────────────────────────────

class _GiveCreatePage extends StatefulWidget {
  const _GiveCreatePage({required this.toRid, required this.toName});
  final String toRid;
  final String toName;
  @override
  State<_GiveCreatePage> createState() => _GiveCreatePageState();
}

class _GiveCreatePageState extends State<_GiveCreatePage> {
  int _step = 0; // 0 what, 1 AI questions, 2 review
  String _kind = 'money';
  final _amount = TextEditingController();
  final _title = TextEditingController();
  final _desc = TextEditingController();
  final _value = TextEditingController();
  final _note = TextEditingController();
  DateTime _givenAt = DateTime.now();
  DateTime? _dueAt;
  List<String> _questions = [];
  final List<TextEditingController> _answers = [];
  bool _busy = false;
  String? _error;

  static const _kinds = [
    ('money', 'Money', Icons.payments_rounded),
    ('item', 'Item', Icons.inventory_2_rounded),
    ('service', 'Service', Icons.handyman_rounded),
    ('other', 'Other', Icons.redeem_rounded),
  ];

  @override
  void dispose() {
    for (final c in [_amount, _title, _desc, _value, _note, ..._answers]) {
      c.dispose();
    }
    super.dispose();
  }

  String get _whatText => _kind == 'money' ? _money(double.tryParse(_amount.text) ?? 0) : _title.text.trim();

  Future<void> _pick({required bool due}) async {
    final now = DateTime.now();
    final d = await showDatePicker(
      context: context,
      initialDate: due ? (_dueAt ?? _givenAt.add(const Duration(days: 14))) : _givenAt,
      firstDate: due ? _givenAt : DateTime(now.year - 1),
      lastDate: DateTime(now.year + 10),
      helpText: due ? 'Pay back / return by' : 'Date it is given',
    );
    if (d == null) return;
    setState(() {
      if (due) {
        _dueAt = d;
      } else {
        _givenAt = d;
        if (_dueAt != null && _dueAt!.isBefore(d)) _dueAt = null;
      }
    });
  }

  /// Step 1 → 2: the AI asks what it needs to know to write a fair claim later.
  Future<void> _toQuestions() async {
    if (_kind == 'money' && !((double.tryParse(_amount.text) ?? 0) > 0)) {
      setState(() => _error = 'Enter the amount.');
      return;
    }
    if (_kind != 'money' && _title.text.trim().length < 2) {
      setState(() => _error = 'Say what you are giving.');
      return;
    }
    if (_dueAt == null) {
      setState(() => _error = 'Pick the date it must be paid back / returned.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    final qs = await _aiQuestions();
    if (!mounted) return;
    for (final c in _answers) {
      c.dispose();
    }
    _answers
      ..clear()
      ..addAll(qs.map((_) => TextEditingController()));
    setState(() {
      _questions = qs;
      _busy = false;
      _step = 1;
    });
  }

  Future<List<String>> _aiQuestions() async {
    final fallback = <String>[
      if (_kind == 'money') 'What is the money for?' else 'What condition is it in right now?',
      if (_kind == 'money') 'How will it be paid back — all at once or in parts?' else 'Where and how should it be returned?',
      'Is there anything extra if it comes back late?',
      'Did anyone else see this agreement (a witness)? Who?',
      'How can they reach you to pay back / return it?',
    ];
    try {
      final key = await ngmyResolveGeminiApiKey();
      if (key.trim().isEmpty) return fallback;
      final prompt = '''
A community member in a civic registry is ${_kind == 'money' ? 'lending' : 'giving / lending'} something to another member.
What: ${_kind == 'money' ? 'money, $_whatText' : '$_kind: $_whatText${_desc.text.trim().isEmpty ? '' : ' — ${_desc.text.trim()}'}${_value.text.trim().isEmpty ? '' : ' (worth about \$${_value.text.trim()})'}'}
Given on ${_date(_givenAt.toIso8601String())}, due back ${_date(_dueAt!.toIso8601String())}.

If it is NOT paid back / returned on time, a formal claim will be written from the answers. Ask the GIVER 5 short, specific questions (max 14 words each) whose answers would make that claim clear and fair: purpose, how and where it is paid back / returned, condition or value, any agreed extras or late terms, witnesses, contact. Tailor them to this exact situation.
Reply with a JSON array of 5 strings only.''';
      final r = await ngmyAiGenerateWithCredentials(ngmyParseAiCredentials(key), prompt);
      final raw = r.text ?? '';
      final s = raw.indexOf('[');
      final e = raw.lastIndexOf(']');
      if (s < 0 || e <= s) return fallback;
      final list = (jsonDecode(raw.substring(s, e + 1)) as List).map((x) => '$x'.trim()).where((x) => x.length > 4).take(6).toList();
      return list.length >= 3 ? list : fallback;
    } catch (_) {
      return fallback;
    }
  }

  void _toReview() {
    for (var i = 0; i < _questions.length; i++) {
      if (_answers[i].text.trim().length < 2) {
        setState(() => _error = 'Answer every question — the AI needs it to write a fair claim if it isn\'t paid back.');
        return;
      }
    }
    setState(() {
      _error = null;
      _step = 2;
    });
  }

  Future<void> _send() async {
    setState(() {
      _busy = true;
      _error = null;
    });
    final r = await _giveCall('civicGiveCreate', {
      'to': widget.toRid,
      'kind': _kind,
      'amount': double.tryParse(_amount.text) ?? 0,
      'title': _kind == 'money' ? 'Money' : _title.text.trim(),
      'description': _desc.text.trim(),
      'itemValue': double.tryParse(_value.text) ?? 0,
      'givenAt': DateTime(_givenAt.year, _givenAt.month, _givenAt.day, 12).toUtc().toIso8601String(),
      'dueAt': DateTime(_dueAt!.year, _dueAt!.month, _dueAt!.day, 12).toUtc().toIso8601String(),
      'qa': [for (var i = 0; i < _questions.length; i++) {'q': _questions[i], 'a': _answers[i].text.trim()}],
      'note': _note.text.trim(),
    });
    if (!mounted) return;
    if (r.ok) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Request sent to ${widget.toName}. They get a notification to accept and sign.')));
      Navigator.pop(context, true);
    } else {
      setState(() {
        _busy = false;
        _error = r.error;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final panel = isDark ? const Color(0xFF151A21) : Colors.white;
    InputDecoration deco(String label, {String? hint, Widget? prefix}) => InputDecoration(
          labelText: label,
          hintText: hint,
          prefix: prefix,
          filled: true,
          fillColor: isDark ? Colors.white.withValues(alpha: 0.05) : const Color(0xFFF1F5F9),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
        );

    Widget body;
    if (_step == 0) {
      body = Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text('What are you giving?', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
          const SizedBox(height: 10),
          Row(
            children: [
              for (final (id, label, icon) in _kinds)
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 3),
                    child: GestureDetector(
                      onTap: () => setState(() => _kind = id),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 160),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          color: _kind == id ? _green.withValues(alpha: 0.15) : panel,
                          border: Border.all(color: _kind == id ? _green : Colors.grey.withValues(alpha: 0.25), width: _kind == id ? 1.6 : 1),
                        ),
                        child: Column(
                          children: [
                            Icon(icon, color: _kind == id ? _green : Colors.grey),
                            const SizedBox(height: 4),
                            Text(label, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: _kind == id ? _green : null)),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
            ],
          ),
          const SizedBox(height: 16),
          if (_kind == 'money')
            TextField(
              controller: _amount,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'^\d*\.?\d{0,2}'))],
              style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 24),
              decoration: deco('Amount', prefix: const Text('\$ ', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 24))),
            )
          else ...[
            TextField(controller: _title, decoration: deco('What is it?', hint: _kind == 'service' ? 'e.g. Fixing the roof' : 'e.g. Generator, phone, car')),
            const SizedBox(height: 10),
            TextField(controller: _desc, maxLines: 2, decoration: deco('Details (brand, size, condition…)')),
            const SizedBox(height: 10),
            TextField(
              controller: _value,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: deco('About how much is it worth? (optional)', prefix: const Text('\$ ')),
            ),
          ],
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(child: _dateBox('Given on', _date(_givenAt.toIso8601String()), () => _pick(due: false), panel)),
              const SizedBox(width: 10),
              Expanded(child: _dateBox('Pay back / return by', _dueAt == null ? 'Pick a date' : _date(_dueAt!.toIso8601String()), () => _pick(due: true), panel, highlight: _dueAt == null)),
            ],
          ),
          const SizedBox(height: 10),
          TextField(controller: _note, maxLines: 2, decoration: deco('Note for them (optional)')),
          const SizedBox(height: 8),
          Text(
            'Not paid back / returned within 3 days after the date? A claim is added to their Civic Registry record automatically.',
            style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54, height: 1.35),
          ),
        ],
      );
    } else if (_step == 1) {
      body = Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Container(
                width: 34,
                height: 34,
                decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFF6366F1)])),
                child: const Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 18),
              ),
              const SizedBox(width: 10),
              const Expanded(child: Text('A few questions from the AI', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16))),
            ],
          ),
          const SizedBox(height: 6),
          Text(
            'Your answers are kept with the agreement. If it is not paid back on time, the AI uses them to write the claim.',
            style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54, height: 1.35),
          ),
          const SizedBox(height: 14),
          for (var i = 0; i < _questions.length; i++) ...[
            Text('${i + 1}. ${_questions[i]}', style: const TextStyle(fontWeight: FontWeight.w800)),
            const SizedBox(height: 6),
            TextField(controller: _answers[i], maxLines: 2, minLines: 1, decoration: deco('Your answer')),
            const SizedBox(height: 14),
          ],
        ],
      );
    } else {
      body = _ReviewCard(
        what: _whatText,
        kind: _kind,
        toName: widget.toName,
        toRid: widget.toRid,
        fromName: NgmyCivicGiveSession.name,
        givenAt: _date(_givenAt.toIso8601String()),
        dueAt: _date(_dueAt!.toIso8601String()),
        details: _desc.text.trim(),
        qa: [for (var i = 0; i < _questions.length; i++) (_questions[i], _answers[i].text.trim())],
      );
    }

    final steps = ['Details', 'AI questions', 'Review'];
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B0F14) : const Color(0xFFF5F7FA),
      appBar: AppBar(title: Text('Give to ${widget.toName}', style: const TextStyle(fontWeight: FontWeight.w900)), centerTitle: true),
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 620),
          child: ListView(
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 32),
            children: [
              Row(
                children: [
                  for (var i = 0; i < steps.length; i++)
                    Expanded(
                      child: Column(
                        children: [
                          AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            height: 5,
                            margin: const EdgeInsets.symmetric(horizontal: 3),
                            decoration: BoxDecoration(borderRadius: BorderRadius.circular(99), color: i <= _step ? _green : Colors.grey.withValues(alpha: 0.25)),
                          ),
                          const SizedBox(height: 4),
                          Text(steps[i], style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: i <= _step ? _green : Colors.grey)),
                        ],
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 16),
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(22)),
                child: body,
              ),
              if (_error != null) ...[
                const SizedBox(height: 12),
                Text(_error!, style: const TextStyle(color: Colors.redAccent, fontWeight: FontWeight.w700)),
              ],
              const SizedBox(height: 16),
              Row(
                children: [
                  if (_step > 0)
                    Expanded(
                      child: OutlinedButton(
                        onPressed: _busy ? null : () => setState(() => _step--),
                        style: OutlinedButton.styleFrom(minimumSize: const Size(0, 52), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
                        child: const Text('Back', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                  if (_step > 0) const SizedBox(width: 10),
                  Expanded(
                    flex: 2,
                    child: ElevatedButton.icon(
                      onPressed: _busy ? null : (_step == 0 ? _toQuestions : (_step == 1 ? _toReview : _send)),
                      icon: _busy
                          ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : Icon(_step == 2 ? Icons.send_rounded : Icons.arrow_forward_rounded),
                      label: Text(
                        _step == 0 ? (_busy ? 'The AI is thinking…' : 'Next') : (_step == 1 ? 'Review' : 'Send request'),
                        style: const TextStyle(fontWeight: FontWeight.w900),
                      ),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: _green,
                        foregroundColor: Colors.white,
                        minimumSize: const Size(0, 52),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                      ),
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

  Widget _dateBox(String label, String value, VoidCallback onTap, Color panel, {bool highlight = false}) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: highlight ? _green : Colors.grey.withValues(alpha: 0.25), width: highlight ? 1.6 : 1),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.grey)),
            const SizedBox(height: 4),
            Row(
              children: [
                const Icon(Icons.event_rounded, size: 16, color: _green),
                const SizedBox(width: 6),
                Expanded(child: Text(value, style: const TextStyle(fontWeight: FontWeight.w900))),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _ReviewCard extends StatelessWidget {
  const _ReviewCard({
    required this.what,
    required this.kind,
    required this.toName,
    required this.toRid,
    required this.fromName,
    required this.givenAt,
    required this.dueAt,
    required this.details,
    required this.qa,
  });
  final String what, kind, toName, toRid, fromName, givenAt, dueAt, details;
  final List<(String, String)> qa;

  @override
  Widget build(BuildContext context) {
    final muted = Theme.of(context).brightness == Brightness.dark ? Colors.white60 : Colors.black54;
    Widget row(String a, String b) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 4),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(width: 110, child: Text(a, style: TextStyle(color: muted, fontWeight: FontWeight.w600))),
              Expanded(child: Text(b, style: const TextStyle(fontWeight: FontWeight.w800))),
            ],
          ),
        );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Center(
          child: Column(
            children: [
              Icon(_kindIcon(kind), color: _green, size: 34),
              const SizedBox(height: 6),
              Text(what, textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 26)),
              Text('to $toName', style: TextStyle(color: muted, fontWeight: FontWeight.w700)),
            ],
          ),
        ),
        const Divider(height: 26),
        row('From', fromName),
        row('To', '$toName ($toRid)'),
        row('Given on', givenAt),
        row('Back by', dueAt),
        if (details.isNotEmpty) row('Details', details),
        const Divider(height: 26),
        for (final (q, a) in qa) row(q, a),
      ],
    );
  }
}

// ── Detail: accept & sign, receipt, mark paid back ──────────────────────────

class _GiveDetailSheet extends StatefulWidget {
  const _GiveDetailSheet({required this.give});
  final Map<String, dynamic> give;
  @override
  State<_GiveDetailSheet> createState() => _GiveDetailSheetState();
}

class _GiveDetailSheetState extends State<_GiveDetailSheet> {
  bool _busy = false;
  String? _error;
  Map<String, dynamic> get g => widget.give;
  bool get _mine => g['role'] == 'giver';

  Future<void> _act(String action, Map<String, dynamic> body, String done) async {
    setState(() {
      _busy = true;
      _error = null;
    });
    final r = await _giveCall(action, {'id': g['id'], ...body});
    if (!mounted) return;
    if (r.ok) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(done)));
      Navigator.pop(context, true);
    } else {
      setState(() {
        _busy = false;
        _error = r.error;
      });
    }
  }

  Future<void> _acceptAndSign() async {
    final name = await showDialog<String>(context: context, builder: (_) => const _SignNameDialog());
    if (name == null || !mounted) return;
    String? png;
    await showNgmyFullscreenSignature(
      context,
      title: 'Sign to accept',
      points: const [],
      onSave: (pts, size, color, width) async {
        png = await _signaturePng(pts, size, color, width);
      },
    );
    // onSave runs async; give it a moment to finish drawing.
    for (var i = 0; i < 20 && png == null; i++) {
      await Future<void>.delayed(const Duration(milliseconds: 50));
    }
    if (!mounted) return;
    if (png == null) {
      setState(() => _error = 'Please sign in the box to accept.');
      return;
    }
    await _act('civicGiveRespond', {'accept': true, 'signName': name, 'signImage': png}, 'Accepted and signed. ${g['giver']?['name'] ?? 'The giver'} gets the receipt.');
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final look = _statusLook(g);
    final status = '${g['status']}';
    final other = _mine ? g['recipient'] as Map? : g['giver'] as Map?;
    final qa = (g['qa'] as List? ?? const []).whereType<Map>().toList();
    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.92, maxWidth: 640),
      decoration: BoxDecoration(color: isDark ? const Color(0xFF111827) : Colors.white, borderRadius: const BorderRadius.vertical(top: Radius.circular(26))),
      child: SafeArea(
        top: false,
        child: ListView(
          shrinkWrap: true,
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
          children: [
            Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey, borderRadius: BorderRadius.circular(99)))),
            const SizedBox(height: 14),
            if (status == 'accepted' || status == 'returned' || status == 'claimed')
              NgmyCivicGiveReceipt(give: g)
            else ...[
              Row(
                children: [
                  CircleAvatar(radius: 24, backgroundColor: look.color.withValues(alpha: 0.15), child: Icon(_kindIcon('${g['kind']}'), color: look.color)),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(_what(g), style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 22)),
                        Text('${_mine ? 'To' : 'From'} ${other?['name'] ?? 'member'} (${other?['rid'] ?? ''})', style: const TextStyle(fontWeight: FontWeight.w700)),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                    decoration: BoxDecoration(color: look.color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(99)),
                    child: Text(look.label, style: TextStyle(color: look.color, fontWeight: FontWeight.w900, fontSize: 12)),
                  ),
                ],
              ),
              const SizedBox(height: 14),
              _kv('Given on', _date('${g['givenAt']}')),
              _kv('Pay back / return by', _date('${g['dueAt']}')),
              if ('${g['description'] ?? ''}'.isNotEmpty) _kv('Details', '${g['description']}'),
              if (((g['itemValue'] as num?) ?? 0) > 0) _kv('Worth about', _money(g['itemValue'] as num)),
              if ('${g['note'] ?? ''}'.isNotEmpty) _kv('Note', '${g['note']}'),
              if (qa.isNotEmpty) ...[
                const Divider(height: 24),
                for (final x in qa) _kv('${x['q']}', '${x['a']}'),
              ],
              if (!_mine && status == 'pending')
                Container(
                  margin: const EdgeInsets.only(top: 14),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: const Color(0xFFF59E0B).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14)),
                  child: const Text(
                    'By accepting you agree to pay it back / return it by the date above. If you don\'t, 3 days later a claim is added to your Civic Registry record.',
                    style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.w700, height: 1.35),
                  ),
                ),
            ],
            if (_error != null) ...[
              const SizedBox(height: 10),
              Text(_error!, style: const TextStyle(color: Colors.redAccent, fontWeight: FontWeight.w700)),
            ],
            const SizedBox(height: 16),
            if (!_mine && status == 'pending')
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: _busy ? null : () => _act('civicGiveRespond', {'accept': false}, 'Declined.'),
                      style: OutlinedButton.styleFrom(foregroundColor: Colors.redAccent, minimumSize: const Size(0, 52), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
                      child: const Text('Decline', style: TextStyle(fontWeight: FontWeight.w900)),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    flex: 2,
                    child: ElevatedButton.icon(
                      onPressed: _busy ? null : _acceptAndSign,
                      icon: const Icon(Icons.draw_rounded),
                      label: const Text('Accept & sign', style: TextStyle(fontWeight: FontWeight.w900)),
                      style: ElevatedButton.styleFrom(backgroundColor: _green, foregroundColor: Colors.white, minimumSize: const Size(0, 52), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
                    ),
                  ),
                ],
              ),
            if (_mine && status == 'pending')
              OutlinedButton(
                onPressed: _busy ? null : () => _act('civicGiveUpdate', {'op': 'cancel'}, 'Request cancelled.'),
                style: OutlinedButton.styleFrom(minimumSize: const Size(0, 50), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
                child: const Text('Cancel this request', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            if (_mine && (status == 'accepted' || status == 'claimed'))
              ElevatedButton.icon(
                onPressed: _busy
                    ? null
                    : () => _act('civicGiveUpdate', {'op': 'returned'},
                        status == 'claimed' ? 'Marked paid back — the claim is now resolved.' : 'Marked paid back / returned.'),
                icon: const Icon(Icons.verified_rounded),
                label: Text(g['kind'] == 'money' ? 'They paid me back' : 'They returned it', style: const TextStyle(fontWeight: FontWeight.w900)),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF3B82F6),
                  foregroundColor: Colors.white,
                  minimumSize: const Size(0, 52),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
              ),
          ],
        ),
      ),
    );
  }

  Widget _kv(String k, String v) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 5),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(k, style: const TextStyle(fontSize: 11.5, color: Colors.grey, fontWeight: FontWeight.w700)),
            const SizedBox(height: 2),
            Text(v, style: const TextStyle(fontWeight: FontWeight.w800)),
          ],
        ),
      );
}

class _SignNameDialog extends StatefulWidget {
  const _SignNameDialog();
  @override
  State<_SignNameDialog> createState() => _SignNameDialogState();
}

class _SignNameDialogState extends State<_SignNameDialog> {
  final _c = TextEditingController(text: NgmyCivicGiveSession.name);

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Your full name'),
      content: TextField(controller: _c, autofocus: true, textCapitalization: TextCapitalization.words, decoration: const InputDecoration(hintText: 'Type your full name')),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
        ElevatedButton(
          onPressed: () {
            final n = _c.text.trim();
            if (n.length >= 3) Navigator.pop(context, n);
          },
          child: const Text('Next: sign'),
        ),
      ],
    );
  }
}

/// The drawn signature as a small PNG data URL.
Future<String?> _signaturePng(List<Offset?> pts, Size size, Color color, double width) async {
  final drawn = pts.whereType<Offset>().toList();
  if (drawn.length < 4 || size.isEmpty) return null;
  final minX = drawn.map((p) => p.dx).reduce(math.min);
  final maxX = drawn.map((p) => p.dx).reduce(math.max);
  final minY = drawn.map((p) => p.dy).reduce(math.min);
  final maxY = drawn.map((p) => p.dy).reduce(math.max);
  final box = Rect.fromLTRB(minX, minY, maxX, maxY).inflate(width * 2 + 6);
  final scale = math.min(1.0, 640 / math.max(box.width, 1));
  final w = (box.width * scale).ceil().clamp(40, 640);
  final h = (box.height * scale).ceil().clamp(30, 400);
  final recorder = ui.PictureRecorder();
  final canvas = Canvas(recorder);
  canvas.scale(scale);
  canvas.translate(-box.left, -box.top);
  final paint = Paint()
    ..color = const Color(0xFF0F172A)
    ..strokeWidth = width.clamp(2.0, 6.0)
    ..strokeCap = StrokeCap.round
    ..strokeJoin = StrokeJoin.round
    ..style = PaintingStyle.stroke;
  for (var i = 0; i < pts.length - 1; i++) {
    final a = pts[i];
    final b = pts[i + 1];
    if (a != null && b != null) canvas.drawLine(a, b, paint);
  }
  final img = await recorder.endRecording().toImage(w.toInt(), h.toInt());
  final bytes = await img.toByteData(format: ui.ImageByteFormat.png);
  if (bytes == null) return null;
  return 'data:image/png;base64,${base64Encode(bytes.buffer.asUint8List())}';
}

// ── Receipt ─────────────────────────────────────────────────────────────────

/// The signed receipt (both sides can see it; the giver can share it as a picture).
class NgmyCivicGiveReceipt extends StatefulWidget {
  const NgmyCivicGiveReceipt({super.key, required this.give});
  final Map<String, dynamic> give;
  @override
  State<NgmyCivicGiveReceipt> createState() => _NgmyCivicGiveReceiptState();
}

class _NgmyCivicGiveReceiptState extends State<NgmyCivicGiveReceipt> {
  final _key = GlobalKey();

  Future<void> _share() async {
    try {
      final boundary = _key.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) return;
      final img = await boundary.toImage(pixelRatio: 3);
      final bytes = await img.toByteData(format: ui.ImageByteFormat.png);
      if (bytes == null) return;
      final msg = await shareNgmyPngBytes(bytes.buffer.asUint8List(), 'ngmy-receipt-${widget.give['receiptNo'] ?? 'give'}.png', title: 'NGMY receipt');
      if (mounted && msg.isNotEmpty) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } catch (e) {
      debugPrint('[civic-give] share receipt: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    final g = widget.give;
    final look = _statusLook(g);
    final sig = g['signature'] as Map?;
    Uint8List? sigBytes;
    try {
      final s = '${sig?['image'] ?? ''}';
      if (s.contains(',')) sigBytes = base64Decode(s.split(',').last);
    } catch (_) {}
    const ink = Color(0xFF0F172A);
    const muted = Color(0xFF64748B);
    Widget row(String a, String b) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 5),
          child: Row(
            children: [
              Text(a, style: const TextStyle(color: muted, fontWeight: FontWeight.w600, fontSize: 12.5)),
              const Spacer(),
              Flexible(child: Text(b, textAlign: TextAlign.right, style: const TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 13))),
            ],
          ),
        );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        RepaintBoundary(
          key: _key,
          child: Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(22),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.15), blurRadius: 18, offset: const Offset(0, 8))],
            ),
            clipBehavior: Clip.antiAlias,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  padding: const EdgeInsets.fromLTRB(18, 16, 18, 18),
                  decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF047857), Color(0xFF064E3B)])),
                  child: Column(
                    children: [
                      Row(
                        children: [
                          const Icon(Icons.account_balance_rounded, color: Colors.white70, size: 18),
                          const SizedBox(width: 6),
                          const Expanded(child: Text('NGMY CIVIC REGISTRY', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.6))),
                          Text('${g['receiptNo'] ?? ''}', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 11)),
                        ],
                      ),
                      const SizedBox(height: 14),
                      Text(g['kind'] == 'money' ? 'LOAN RECEIPT' : 'GIVE RECEIPT', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 2, fontSize: 12)),
                      const SizedBox(height: 4),
                      FittedBox(child: Text(_what(g), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 34))),
                    ],
                  ),
                ),
                // Ticket notch line.
                SizedBox(
                  height: 14,
                  child: LayoutBuilder(
                    builder: (_, c) => Row(
                      children: [
                        for (var i = 0; i < (c.maxWidth / 10).floor(); i++)
                          Container(width: 5, height: 1.5, margin: const EdgeInsets.only(right: 5), color: const Color(0xFFCBD5E1)),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 2, 18, 16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      row('Given by', '${g['giver']?['name']} · ${g['giver']?['rid']}'),
                      row('Received by', '${g['recipient']?['name']} · ${g['recipient']?['rid']}'),
                      row('Given on', _date('${g['givenAt']}')),
                      row(g['kind'] == 'money' ? 'Pay back by' : 'Return by', _date('${g['dueAt']}')),
                      if (g['kind'] != 'money' && '${g['description'] ?? ''}'.isNotEmpty) row('Details', '${g['description']}'),
                      if (g['returnedAt'] != null) row(g['kind'] == 'money' ? 'Paid back on' : 'Returned on', _date('${g['returnedAt']}')),
                      const SizedBox(height: 10),
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(color: const Color(0xFFF8FAFC), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFFE2E8F0))),
                        child: Row(
                          children: [
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text('Signed by the receiver', style: TextStyle(color: muted, fontSize: 11, fontWeight: FontWeight.w700)),
                                  const SizedBox(height: 4),
                                  if (sigBytes != null) SizedBox(height: 54, child: Image.memory(sigBytes, fit: BoxFit.contain, alignment: Alignment.centerLeft)),
                                  Text('${sig?['name'] ?? ''}', style: const TextStyle(color: ink, fontWeight: FontWeight.w900)),
                                  Text(_date('${sig?['at'] ?? ''}'), style: const TextStyle(color: muted, fontSize: 11)),
                                ],
                              ),
                            ),
                            Transform.rotate(
                              angle: -0.2,
                              child: Container(
                                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                                decoration: BoxDecoration(border: Border.all(color: look.color, width: 2.4), borderRadius: BorderRadius.circular(8)),
                                child: Text(look.label.toUpperCase(), style: TextStyle(color: look.color, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
                              ),
                            ),
                          ],
                        ),
                      ),
                      if ('${g['claimText'] ?? ''}'.isNotEmpty) ...[
                        const SizedBox(height: 10),
                        Container(
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(color: const Color(0xFFFEF2F2), borderRadius: BorderRadius.circular(14)),
                          child: Text('Claim: ${g['claimText']}', style: const TextStyle(color: Color(0xFF991B1B), fontSize: 12, fontWeight: FontWeight.w600, height: 1.35)),
                        ),
                      ],
                      const SizedBox(height: 10),
                      const Text(
                        'Not paid back / returned within 3 days after the date → a claim is added to the receiver\'s Civic Registry record.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: muted, fontSize: 10.5, height: 1.3),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 10),
        TextButton.icon(onPressed: _share, icon: const Icon(Icons.ios_share_rounded), label: const Text('Save / share receipt')),
      ],
    );
  }
}
