part of 'ngmy_house_workers.dart';

// House Care and the work board.
//  • Anyone registered in Civic Registry can post work for their state. A House Care member pays for
//    materials only; everyone else is charged like normal work (labor and materials).
//  • Workers see posted work on a live Job board and the first one to tap gets it.
//  • House Care is a monthly membership signed with a chosen term, a signature and a selfie.
//    The admin sees every signature and selfie.

const Color _kCareTeal = Color(0xFF14B8A6);
const Color _kJobOrange = Color(0xFFF97316);

/// The agreement a member signs. The server stores the version that was signed.
const List<(String, String)> _kCareAgreement = [
  (
    'What NGMY does for you',
    'Once every month, NGMY comes to work at your home. If there is anything wrong with the house, '
        'contact us and we will go and fix it. You can ask for help every month.'
  ),
  (
    'What you pay',
    'You pay for the materials only (parts, paint, supplies). While your membership is paid, you do not pay '
        'for the labor, the work itself.'
  ),
  (
    'The monthly payment',
    'The membership is \$125 every month. If a payment is missed, the free labor pauses until the payment is made. '
        'Work you post while the membership is not paid is charged like normal work.'
  ),
  (
    'How long you stay',
    'You agree to stay for the number of years you chose. The term starts with your first payment.'
  ),
  (
    'Where and what',
    'The work is for small home fixes at the home of the member, in the state where the member is registered in '
        'Civic Registry.'
  ),
  (
    'Your signature and selfie',
    'Your signature and your selfie are kept by NGMY so we know who signed. The NGMY admin can see them.'
  ),
];

Widget _laborBadge(bool laborFree) {
  final color = laborFree ? _kCareTeal : _kJobOrange;
  return Container(
    padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
    decoration: BoxDecoration(color: color.withOpacity(0.14), borderRadius: BorderRadius.circular(999), border: Border.all(color: color.withOpacity(0.5))),
    child: Row(mainAxisSize: MainAxisSize.min, children: [
      Icon(laborFree ? Icons.verified_user_rounded : Icons.payments_rounded, size: 13, color: color),
      const SizedBox(width: 5),
      Flexible(
        child: Text(
          laborFree ? 'House Care member: materials only, no labor charge' : 'Standard work: labor + materials',
          style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w900, color: color),
        ),
      ),
    ]),
  );
}

String _careDate(dynamic raw) {
  final d = DateTime.tryParse((raw ?? '').toString())?.toLocal();
  if (d == null) return '—';
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return '${m[d.month - 1]} ${d.day}, ${d.year}';
}

String _ago(dynamic raw) {
  final d = DateTime.tryParse((raw ?? '').toString())?.toLocal();
  if (d == null) return '';
  final diff = DateTime.now().difference(d);
  if (diff.inMinutes < 1) return 'just now';
  if (diff.inMinutes < 60) return '${diff.inMinutes} min ago';
  if (diff.inHours < 24) return '${diff.inHours} h ago';
  return '${diff.inDays} d ago';
}

/// What a worker charged when finishing the work. Labor is fixed at 0 for a House Care member's work.
Future<({double materials, double labor})?> _askWorkCosts(BuildContext context, {required bool laborFree}) {
  final matC = TextEditingController();
  final labC = TextEditingController();
  return showDialog<({double materials, double labor})>(
    context: context,
    builder: (ctx) {
      final c = _HwColors(ctx);
      return AlertDialog(
        backgroundColor: c.sheet,
        title: Text('Work finished', style: TextStyle(color: c.ink, fontWeight: FontWeight.w900)),
        content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text(
            laborFree
                ? 'This client is a House Care member: they pay for materials only. Labor is \$0.'
                : 'Write what the work cost. The client is charged like normal work.',
            style: TextStyle(color: c.muted, fontSize: 12.5, height: 1.35),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: matC,
            keyboardType: const TextInputType.numberWithOptions(decimal: true),
            decoration: _field(ctx, 'Materials (\$)', icon: Icons.hardware_rounded),
          ),
          if (!laborFree) ...[
            const SizedBox(height: 10),
            TextField(
              controller: labC,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: _field(ctx, 'Labor (\$)', icon: Icons.engineering_rounded),
            ),
          ],
        ]),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () => Navigator.pop(
              ctx,
              (
                materials: double.tryParse(matC.text.trim().replaceAll(',', '.')) ?? 0,
                labor: laborFree ? 0.0 : (double.tryParse(labC.text.trim().replaceAll(',', '.')) ?? 0),
              ),
            ),
            child: const Text('Mark done'),
          ),
        ],
      );
    },
  );
}

// ── Post work ───────────────────────────────────────────────────────────────

Future<bool> showNgmyPostWorkSheet(
  BuildContext context, {
  required String state,
  required String clientName,
  required String clientPhone,
  required Map<String, dynamic> care,
  required bool hasRegistryId,
  required Future<void> Function() onJoinCare,
}) async {
  final nameC = TextEditingController(text: clientName);
  final phoneC = TextEditingController(text: clientPhone);
  final addressC = TextEditingController();
  final cityC = TextEditingController();
  final detailsC = TextEditingController();
  final timeC = TextEditingController();
  String category = '';
  var busy = false;
  final member = care['active'] == true;
  final posted = await showModalBottomSheet<bool>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => StatefulBuilder(
      builder: (ctx, setSheet) {
        final c = _HwColors(ctx);
        Future<void> submit() async {
          setSheet(() => busy = true);
          final res = await NgmyHouseWorkersApi.postJob({
            'state': state,
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
            _snack(ctx, (res['error'] ?? 'Could not post. Try again.').toString(), error: true);
          }
        }

        return _sheetFrame(
          ctx,
          title: 'Post work',
          icon: Icons.add_task_rounded,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'Write the work you want done. It shows up for the workers in your state right away, and the first worker to pick it up gets it.',
                  style: TextStyle(fontSize: 12, color: c.muted, height: 1.35),
                ),
                const SizedBox(height: 10),
                Align(alignment: Alignment.centerLeft, child: _laborBadge(member)),
                if (!member) ...[
                  const SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: _kCareTeal.withOpacity(0.1), borderRadius: BorderRadius.circular(12), border: Border.all(color: _kCareTeal.withOpacity(0.4))),
                    child: Row(children: [
                      Expanded(
                        child: Text(
                          'Members of House Care do not pay for labor, only materials.',
                          style: TextStyle(fontSize: 11.5, color: c.ink, fontWeight: FontWeight.w700, height: 1.3),
                        ),
                      ),
                      TextButton(
                        onPressed: () async {
                          Navigator.pop(ctx, false);
                          await onJoinCare();
                        },
                        child: const Text('Join'),
                      ),
                    ]),
                  ),
                ],
                if (!hasRegistryId) ...[
                  const SizedBox(height: 8),
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: const Color(0xFFEF4444).withOpacity(0.1), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFFEF4444).withOpacity(0.45))),
                    child: Text(
                      'To submit work you need to be registered in Civic Registry. Your work goes to the workers in the state you are registered in.',
                      style: TextStyle(fontSize: 11.5, color: c.ink, fontWeight: FontWeight.w700, height: 1.3),
                    ),
                  ),
                ],
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
                        selectedColor: _kJobOrange.withOpacity(0.25),
                        visualDensity: VisualDensity.compact,
                      ),
                  ],
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: detailsC,
                  maxLines: 4,
                  decoration: _field(ctx, 'What work do you want done? *', hint: 'Describe it: what is broken, leaking, or not working…'),
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
                TextField(controller: phoneC, keyboardType: TextInputType.phone, decoration: _field(ctx, 'Your WhatsApp number *', icon: Icons.phone_rounded)),
                const SizedBox(height: 16),
                _primaryButton('Post work', Icons.send_rounded, hasRegistryId ? submit : null, color: _kJobOrange, busy: busy),
              ],
            ),
          ),
        );
      },
    ),
  );
  if (posted == true && context.mounted) {
    _snack(context, 'Your work is posted. The first worker to pick it up will show in My requests.');
  }
  return posted == true;
}

// ── Live work feed (workers) ────────────────────────────────────────────────
// Work rolls in by itself, like batches on a delivery app: no button to open. Each new job slides in,
// the phone buzzes, an offer card pops up, and the worker just taps Accept.

class _LiveWorkFeed extends StatefulWidget {
  const _LiveWorkFeed({required this.workerName, required this.onChanged});
  final String workerName;
  final VoidCallback onChanged;

  @override
  State<_LiveWorkFeed> createState() => _LiveWorkFeedState();
}

class _LiveWorkFeedState extends State<_LiveWorkFeed> with SingleTickerProviderStateMixin {
  List<Map<String, dynamic>> _jobs = [];
  final Set<String> _seen = {};
  final Set<String> _fresh = {};
  final Set<String> _offered = {};
  bool _firstLoad = true;
  bool _offerOpen = false;
  String? _error;
  String? _picking;
  Timer? _timer;
  late final AnimationController _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..repeat(reverse: true);

  @override
  void initState() {
    super.initState();
    _load();
    _timer = Timer.periodic(const Duration(seconds: 6), (_) => _load());
  }

  @override
  void dispose() {
    _timer?.cancel();
    _pulse.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final res = await NgmyHouseWorkersApi.jobs();
    if (!mounted) return;
    if (res['ok'] != true) {
      if (_jobs.isEmpty) setState(() => _error = (res['error'] ?? '').toString());
      return;
    }
    final jobs = _maps(res['jobs']);
    final newOnes = <Map<String, dynamic>>[
      for (final j in jobs)
        if (!_seen.contains(j['id'].toString())) j,
    ];
    setState(() {
      _error = null;
      _jobs = jobs;
      _fresh.removeWhere((id) => !jobs.any((j) => j['id'].toString() == id));
      if (!_firstLoad) _fresh.addAll(newOnes.map((j) => j['id'].toString()));
      _seen.addAll(jobs.map((j) => j['id'].toString()));
    });
    final wasFirst = _firstLoad;
    _firstLoad = false;
    if (newOnes.isNotEmpty) {
      HapticFeedback.heavyImpact();
      SystemSound.play(SystemSoundType.alert);
      // The newest offer pops up by itself (on the very first load only if something is waiting).
      if (!_offerOpen && (!wasFirst || jobs.isNotEmpty)) {
        final next = newOnes.firstWhere((j) => !_offered.contains(j['id'].toString()), orElse: () => const {});
        if (next.isNotEmpty) unawaited(_showOffer(next));
      }
    }
  }

  Future<void> _showOffer(Map<String, dynamic> job) async {
    final id = job['id'].toString();
    _offered.add(id);
    _offerOpen = true;
    final accepted = await showModalBottomSheet<bool>(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) => _OfferSheet(job: job),
    );
    _offerOpen = false;
    if (accepted == true && mounted) await _pick(job);
  }

  Future<void> _pick(Map<String, dynamic> job) async {
    if (_picking != null) return;
    setState(() => _picking = job['id'].toString());
    final res = await NgmyHouseWorkersApi.pickJob(job['id'].toString());
    if (!mounted) return;
    setState(() => _picking = null);
    if (res['ok'] != true) {
      _snack(context, (res['error'] ?? 'Could not accept this work.').toString(), error: true);
      _load();
      return;
    }
    final phone = (res['clientPhone'] ?? '').toString();
    final name = (res['clientName'] ?? 'the client').toString();
    final address = (res['address'] ?? '').toString();
    final laborFree = res['laborFree'] == true;
    widget.onChanged();
    await showDialog<void>(
      context: context,
      builder: (ctx) {
        final c = _HwColors(ctx);
        return AlertDialog(
          backgroundColor: c.sheet,
          title: Row(children: [
            const Icon(Icons.check_circle_rounded, color: _kHwGreen),
            const SizedBox(width: 8),
            Text('The work is yours', style: TextStyle(color: c.ink, fontWeight: FontWeight.w900)),
          ]),
          content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('$name\n${address.isEmpty ? '' : '$address\n'}${phone.isEmpty ? '' : phone}', style: TextStyle(color: c.ink, height: 1.4)),
            const SizedBox(height: 10),
            _laborBadge(laborFree),
            const SizedBox(height: 8),
            Text('It is also in your Work inbox. Contact the client on WhatsApp and set the time.', style: TextStyle(color: c.muted, fontSize: 12.5, height: 1.35)),
          ]),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Later')),
            if (phone.isNotEmpty)
              FilledButton.icon(
                onPressed: () {
                  Navigator.pop(ctx);
                  ngmyOpenWhatsApp(context, phone, 'Hi $name, this is ${widget.workerName} from NGMY House & Insurance. I accepted your work and I am ready to talk about it.');
                },
                icon: const Icon(Icons.chat_rounded, size: 16),
                label: const Text('WhatsApp client'),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF25D366)),
              ),
          ],
        );
      },
    );
    _load();
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 10, 12, 4),
      decoration: BoxDecoration(
        color: c.sheet,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _kJobOrange.withOpacity(0.45)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(children: [
            FadeTransition(
              opacity: Tween(begin: 0.35, end: 1.0).animate(_pulse),
              child: Container(width: 9, height: 9, decoration: const BoxDecoration(color: _kHwGreen, shape: BoxShape.circle)),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                _jobs.isEmpty ? 'Looking for work…' : '${_jobs.length} available ${_jobs.length == 1 ? 'job' : 'jobs'}',
                style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14.5, color: c.ink),
              ),
            ),
            Text('LIVE', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.4, color: _kHwGreen.withOpacity(0.9))),
          ]),
          const SizedBox(height: 8),
          if (_jobs.isEmpty)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 16),
              child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: _kJobOrange)),
                const SizedBox(width: 10),
                Flexible(
                  child: Text(
                    _error != null && _error!.isNotEmpty ? _error! : 'New work appears here by itself.',
                    style: TextStyle(color: c.muted, fontSize: 12.5),
                  ),
                ),
              ]),
            ),
          for (final job in _jobs)
            TweenAnimationBuilder<double>(
              key: ValueKey(job['id']),
              tween: Tween(begin: 0, end: 1),
              duration: const Duration(milliseconds: 460),
              curve: Curves.easeOutBack,
              builder: (context, t, child) => Opacity(
                opacity: t.clamp(0.0, 1.0),
                child: Transform.translate(offset: Offset(0, (1 - t) * 26), child: child),
              ),
              child: _card(job, c),
            ),
        ],
      ),
    );
  }

  Widget _card(Map<String, dynamic> job, _HwColors c) {
    final id = job['id'].toString();
    final fresh = _fresh.contains(id);
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: c.tile,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: fresh ? _kJobOrange : c.line, width: fresh ? 1.8 : 1),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          if (fresh)
            Container(
              margin: const EdgeInsets.only(right: 8),
              padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
              decoration: BoxDecoration(color: _kJobOrange, borderRadius: BorderRadius.circular(999)),
              child: const Text('NEW', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900)),
            ),
          Expanded(
            child: Text(
              (job['category'] ?? '').toString().isEmpty ? 'Home work' : job['category'].toString(),
              style: TextStyle(fontWeight: FontWeight.w900, color: c.ink, fontSize: 16),
            ),
          ),
          Text(_ago(job['createdAt']), style: TextStyle(fontSize: 11, color: c.muted)),
        ]),
        const SizedBox(height: 2),
        Text([job['city'], job['clientName']].where((e) => (e ?? '').toString().isNotEmpty).join(' · '), style: TextStyle(fontSize: 11.5, color: c.muted)),
        const SizedBox(height: 6),
        Text((job['details'] ?? '').toString(), maxLines: 3, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 13, color: c.ink.withOpacity(0.9), height: 1.35)),
        const SizedBox(height: 8),
        Align(alignment: Alignment.centerLeft, child: _laborBadge(job['laborFree'] == true)),
        const SizedBox(height: 10),
        SizedBox(
          height: 46,
          child: ElevatedButton(
            onPressed: _picking != null ? null : () => _pick(job),
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF3FA535),
              foregroundColor: Colors.white,
              elevation: 0,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            ),
            child: _picking == id
                ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Text('Accept', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
          ),
        ),
      ]),
    );
  }
}

/// The offer card that pops up when new work arrives: details and one big Accept button.
class _OfferSheet extends StatelessWidget {
  const _OfferSheet({required this.job});
  final Map<String, dynamic> job;

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    return Container(
      margin: const EdgeInsets.fromLTRB(10, 0, 10, 14),
      padding: const EdgeInsets.fromLTRB(20, 14, 20, 18),
      decoration: BoxDecoration(color: c.sheet, borderRadius: BorderRadius.circular(24), border: Border.all(color: c.line)),
      child: SafeArea(
        top: false,
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: c.line, borderRadius: BorderRadius.circular(3)))),
          const SizedBox(height: 14),
          Center(child: Text('New work', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900, letterSpacing: 1.6, color: _kJobOrange))),
          const SizedBox(height: 6),
          Center(
            child: Text(
              (job['category'] ?? '').toString().isEmpty ? 'Home work' : job['category'].toString(),
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: c.ink),
            ),
          ),
          const SizedBox(height: 4),
          Center(
            child: Text(
              [job['city'], job['state']].where((e) => (e ?? '').toString().isNotEmpty).join(', '),
              style: TextStyle(fontSize: 14, color: c.muted),
            ),
          ),
          const SizedBox(height: 12),
          Text((job['details'] ?? '').toString(), maxLines: 5, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: TextStyle(fontSize: 15, height: 1.4, color: c.ink.withOpacity(0.9))),
          const SizedBox(height: 12),
          Center(child: _laborBadge(job['laborFree'] == true)),
          const SizedBox(height: 18),
          SizedBox(
            height: 54,
            child: ElevatedButton(
              onPressed: () => Navigator.pop(context, true),
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF3FA535),
                foregroundColor: Colors.white,
                elevation: 0,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
              ),
              child: const Text('Accept', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
            ),
          ),
          TextButton(onPressed: () => Navigator.pop(context, false), child: Text('Not now', style: TextStyle(color: c.muted, fontWeight: FontWeight.w700))),
        ]),
      ),
    );
  }
}

// ── Work record: jobs done and money earned, month by month ─────────────────

String _monthName(String key) {
  const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  final parts = key.split('-');
  if (parts.length != 2) return key;
  final m = int.tryParse(parts[1]) ?? 0;
  return m >= 1 && m <= 12 ? '${names[m - 1]} ${parts[0]}' : key;
}

String _money(dynamic v) => '\$${((v as num?) ?? 0).toDouble().toStringAsFixed(2)}';

/// A small card with this month's count and earnings. Tap it for every month.
class _WorkRecordCard extends StatelessWidget {
  const _WorkRecordCard({required this.stats});
  final Map<String, dynamic> stats;

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    final month = stats['thisMonth'] is Map ? Map<String, dynamic>.from(stats['thisMonth'] as Map) : const <String, dynamic>{};
    return InkWell(
      borderRadius: BorderRadius.circular(16),
      onTap: () => showModalBottomSheet<void>(
        context: context,
        isScrollControlled: true,
        backgroundColor: Colors.transparent,
        builder: (_) => _WorkRecordSheet(stats: stats),
      ),
      child: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: c.sheet, borderRadius: BorderRadius.circular(16), border: Border.all(color: _kHwGreen.withOpacity(0.45))),
        child: Row(children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(color: _kHwGreen.withOpacity(0.16), borderRadius: BorderRadius.circular(12)),
            child: const Icon(Icons.query_stats_rounded, color: _kHwGreen),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('My work record · ${_monthName((month['month'] ?? '').toString())}', style: TextStyle(fontWeight: FontWeight.w900, color: c.ink, fontSize: 13)),
              const SizedBox(height: 3),
              Text(
                '${month['done'] ?? 0} job${(month['done'] ?? 0) == 1 ? '' : 's'} done · ${_money(month['earned'])} earned',
                style: TextStyle(color: c.muted, fontSize: 12.5, fontWeight: FontWeight.w700),
              ),
            ]),
          ),
          Icon(Icons.chevron_right_rounded, color: c.muted),
        ]),
      ),
    );
  }
}

class _WorkRecordSheet extends StatelessWidget {
  const _WorkRecordSheet({required this.stats});
  final Map<String, dynamic> stats;

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    final months = _maps(stats['months']);
    return _sheetFrame(
      context,
      title: 'My work record',
      icon: Icons.query_stats_rounded,
      child: ListView(
        shrinkWrap: true,
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 18),
        children: [
          Row(children: [
            Expanded(child: _recordBox(c, 'All time', '${stats['totalDone'] ?? 0}', 'jobs done')),
            const SizedBox(width: 10),
            Expanded(child: _recordBox(c, 'All time', _money(stats['totalEarned']), 'earned')),
          ]),
          const SizedBox(height: 16),
          Text('MONTH BY MONTH', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.2, color: c.muted)),
          const SizedBox(height: 8),
          if (months.isEmpty)
            Padding(padding: const EdgeInsets.symmetric(vertical: 24), child: Text('No finished jobs yet. Accept work and mark it done to start your record.', textAlign: TextAlign.center, style: TextStyle(color: c.muted))),
          for (final m in months)
            Container(
              margin: const EdgeInsets.only(bottom: 8),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(14), border: Border.all(color: c.line)),
              child: Row(children: [
                Expanded(child: Text(_monthName((m['month'] ?? '').toString()), style: TextStyle(fontWeight: FontWeight.w900, color: c.ink))),
                Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                  Text('${m['done']} job${m['done'] == 1 ? '' : 's'}', style: TextStyle(fontWeight: FontWeight.w800, color: c.ink)),
                  Text('${_money(m['earned'])} paid', style: TextStyle(fontSize: 12, color: _kHwGreen, fontWeight: FontWeight.w800)),
                ]),
              ]),
            ),
          const SizedBox(height: 6),
          Text(
            'Earned adds the labor you charged on standard jobs and what NGMY paid you for House Care member jobs.',
            style: TextStyle(fontSize: 11.5, color: c.muted, height: 1.35),
          ),
        ],
      ),
    );
  }

  Widget _recordBox(_HwColors c, String top, String big, String bottom) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(16), border: Border.all(color: c.line)),
        child: Column(children: [
          Text(top.toUpperCase(), style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.2, color: c.muted)),
          const SizedBox(height: 4),
          FittedBox(fit: BoxFit.scaleDown, child: Text(big, style: TextStyle(fontSize: 26, fontWeight: FontWeight.w900, color: c.ink))),
          Text(bottom, style: TextStyle(fontSize: 12, color: c.muted)),
        ]),
      );
}

// ── Admin: record what NGMY paid workers for House Care jobs ────────────────

class _AdminPaySheet extends StatefulWidget {
  const _AdminPaySheet();

  @override
  State<_AdminPaySheet> createState() => _AdminPaySheetState();
}

class _AdminPaySheetState extends State<_AdminPaySheet> {
  List<Map<String, dynamic>> _jobs = [];
  bool _loading = true;
  String? _error;
  final Map<String, TextEditingController> _amounts = {};

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void dispose() {
    for (final c in _amounts.values) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _load() async {
    final res = await NgmyHouseWorkersApi.adminPayList();
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (res['ok'] == true) {
        _jobs = _maps(res['jobs']);
        _error = null;
      } else {
        _error = (res['error'] ?? 'Could not load.').toString();
      }
    });
  }

  Future<void> _pay(Map<String, dynamic> job) async {
    final id = job['id'].toString();
    final amount = double.tryParse((_amounts[id]?.text ?? '').trim().replaceAll(',', '.'));
    if (amount == null || amount < 0) {
      _snack(context, 'Type the amount you paid.', error: true);
      return;
    }
    final res = await NgmyHouseWorkersApi.adminPay(id, amount);
    if (!mounted) return;
    if (res['ok'] == true) {
      _snack(context, 'Saved: ${_money(amount)} paid to ${job['workerName']}.');
      _load();
    } else {
      _snack(context, (res['error'] ?? 'Could not save.').toString(), error: true);
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    return _sheetFrame(
      context,
      title: 'Pay workers',
      icon: Icons.payments_rounded,
      child: _loading
          ? const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
          : _error != null
              ? Padding(padding: const EdgeInsets.all(30), child: Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted)))
              : _jobs.isEmpty
                  ? Padding(padding: const EdgeInsets.all(30), child: Text('Nothing to pay right now. Finished House Care jobs show here until you record the pay.', textAlign: TextAlign.center, style: TextStyle(color: c.muted)))
                  : ListView(
                      shrinkWrap: true,
                      padding: const EdgeInsets.fromLTRB(14, 0, 14, 16),
                      children: [
                        for (final j in _jobs)
                          Container(
                            margin: const EdgeInsets.only(bottom: 10),
                            padding: const EdgeInsets.all(12),
                            decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(14), border: Border.all(color: c.line)),
                            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                              Text('${j['workerName']}', style: TextStyle(fontWeight: FontWeight.w900, color: c.ink)),
                              Text([j['category'], j['city'], _shortDate(j['doneAt'])].where((e) => (e ?? '').toString().isNotEmpty).join(' · '), style: TextStyle(fontSize: 11.5, color: c.muted)),
                              const SizedBox(height: 6),
                              Text((j['details'] ?? '').toString(), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 12.5, color: c.ink.withOpacity(0.85))),
                              const SizedBox(height: 8),
                              Row(children: [
                                Expanded(
                                  child: TextField(
                                    controller: _amounts.putIfAbsent(j['id'].toString(), () => TextEditingController()),
                                    keyboardType: const TextInputType.numberWithOptions(decimal: true),
                                    decoration: _field(context, 'Amount paid (\$)', icon: Icons.attach_money_rounded),
                                  ),
                                ),
                                const SizedBox(width: 8),
                                FilledButton(onPressed: () => _pay(j), child: const Text('Save')),
                              ]),
                            ]),
                          ),
                      ],
                    ),
    );
  }
}

// ── House Care membership ───────────────────────────────────────────────────

Future<void> showNgmyHouseCareSheet(
  BuildContext context, {
  required Map<String, dynamic> care,
  required bool hasRegistryId,
  required String state,
  required String clientName,
  required String clientEmail,
  required String cashAppUrl,
  required String cashAppTag,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _CareSheet(
      care: care,
      hasRegistryId: hasRegistryId,
      state: state,
      clientName: clientName,
      clientEmail: clientEmail,
      cashAppUrl: cashAppUrl,
      cashAppTag: cashAppTag,
    ),
  );
}

class _CareSheet extends StatefulWidget {
  const _CareSheet({
    required this.care,
    required this.hasRegistryId,
    required this.state,
    required this.clientName,
    required this.clientEmail,
    required this.cashAppUrl,
    required this.cashAppTag,
  });

  final Map<String, dynamic> care;
  final bool hasRegistryId;
  final String state;
  final String clientName;
  final String clientEmail;
  final String cashAppUrl;
  final String cashAppTag;

  @override
  State<_CareSheet> createState() => _CareSheetState();
}

class _CareSheetState extends State<_CareSheet> {
  late Map<String, dynamic> _care = Map<String, dynamic>.from(widget.care);
  late bool _hasRegistryId = widget.hasRegistryId;
  int _term = 1;
  bool _accepted = false;
  bool _busy = false;
  late final TextEditingController _nameC = TextEditingController(text: widget.clientName);
  final List<Offset?> _ink = [];
  Uint8List? _selfie;
  String _selfieMime = 'image/jpeg';

  static const _terms = [(1, '1 year'), (2, '2 years'), (3, '3 years'), (4, '4 years')];

  @override
  void initState() {
    super.initState();
    _reload();
  }

  @override
  void dispose() {
    _nameC.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final res = await NgmyHouseWorkersApi.care();
    if (!mounted || res['ok'] != true) return;
    setState(() {
      if (res['care'] is Map) _care = Map<String, dynamic>.from(res['care'] as Map);
      final elig = res['eligibility'];
      if (elig is Map) _hasRegistryId = elig['hasRegistryId'] == true || _hasRegistryId;
    });
  }

  bool get _signed => _care['signed'] == true;
  bool get _active => _care['active'] == true;
  bool get _hasInk => _ink.any((p) => p != null);

  Future<void> _takeSelfie() async {
    try {
      XFile? file;
      try {
        file = await ImagePicker().pickImage(source: ImageSource.camera, preferredCameraDevice: CameraDevice.front, maxWidth: 900, imageQuality: 78);
      } catch (_) {
        file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 900, imageQuality: 78);
      }
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (!mounted) return;
      setState(() {
        _selfie = bytes;
        _selfieMime = file!.path.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
      });
    } catch (e) {
      if (mounted) _snack(context, 'Could not take the selfie. Try again.', error: true);
    }
  }

  Future<Uint8List> _signaturePng() async {
    const w = 600.0, h = 240.0;
    final rec = ui.PictureRecorder();
    final canvas = Canvas(rec);
    canvas.drawRect(const Rect.fromLTWH(0, 0, w, h), Paint()..color = Colors.white);
    final paint = Paint()
      ..color = const Color(0xFF0F172A)
      ..strokeWidth = 4
      ..strokeCap = StrokeCap.round
      ..style = PaintingStyle.stroke;
    for (var i = 0; i < _ink.length - 1; i++) {
      final a = _ink[i];
      final b = _ink[i + 1];
      if (a != null && b != null) canvas.drawLine(Offset(a.dx * w, a.dy * h), Offset(b.dx * w, b.dy * h), paint);
    }
    final img = await rec.endRecording().toImage(w.toInt(), h.toInt());
    final data = await img.toByteData(format: ui.ImageByteFormat.png);
    return data!.buffer.asUint8List();
  }

  bool get _canSign => _hasRegistryId && _accepted && _hasInk && _selfie != null && _nameC.text.trim().length >= 3;

  Future<void> _sign() async {
    if (!_canSign || _busy) return;
    setState(() => _busy = true);
    final sig = await _signaturePng();
    final res = await NgmyHouseWorkersApi.careSign({
      'termYears': _term,
      'fullName': _nameC.text.trim(),
      'accepted': true,
      'state': widget.state,
      'signatureBase64': base64Encode(sig),
      'selfieBase64': base64Encode(_selfie!),
      'selfieMime': _selfieMime,
    });
    if (!mounted) return;
    setState(() => _busy = false);
    if (res['ok'] == true) {
      if (res['care'] is Map) setState(() => _care = Map<String, dynamic>.from(res['care'] as Map));
      _snack(context, 'Agreement signed. Now start your membership.');
    } else {
      _snack(context, (res['error'] ?? 'Could not sign. Try again.').toString(), error: true);
    }
  }

  Future<void> _payCard() async {
    if (!NgmyStripePayments.hasCheckoutLink(NgmyStripeProduct.houseInsurance)) {
      _snack(context, 'Card checkout is not linked yet. Use Cash App.', error: true);
      return;
    }
    final paid = await NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.houseInsurance,
      email: widget.clientEmail,
      isAdmin: false,
      title: 'House Care',
      message: '\$${_price.toStringAsFixed(0)} for 30 days of House Care.',
    );
    if (!mounted) return;
    if (paid) {
      await _reload();
      if (mounted) _snack(context, 'Payment received. Your House Care is active.');
    }
  }

  double get _price => (_care['price'] as num?)?.toDouble() ?? 125;
  int get _years => (_care['termYears'] as num?)?.toInt() ?? 1;
  double get _termPrice => (_care['termPrice'] as num?)?.toDouble() ?? _price * 12 * _years;

  Future<void> _payCashApp({bool fullTerm = false}) async {
    final base = widget.cashAppUrl.trim();
    if (base.isEmpty) {
      _snack(context, 'Cash App is not set up yet.', error: true);
      return;
    }
    final amount = (fullTerm ? _termPrice : _price).toStringAsFixed(0);
    final payUrl = base.endsWith('/') ? '$base$amount' : '$base/$amount';
    final opened = await launchUrl(Uri.parse(payUrl), mode: LaunchMode.externalApplication);
    if (!opened || !mounted) return;
    final sent = await showNgmyCashAppPaymentConfirm(context, amountText: amount, cashAppTag: widget.cashAppTag);
    if (sent != true || !mounted) return;
    setState(() => _busy = true);
    final res = await NgmyHouseWorkersApi.planCashApp('basic', term: fullTerm);
    if (!mounted) return;
    setState(() => _busy = false);
    if (res['ok'] == true) {
      await _reload();
      if (mounted) _snack(context, 'Thank you. Your House Care is active.');
    } else {
      _snack(context, (res['error'] ?? 'Could not record the payment.').toString(), error: true);
    }
  }

  // ── Views ─────────────────────────────────────────────────────────────────

  Widget _benefit(_HwColors c, IconData icon, String title, String body) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Container(
            width: 34,
            height: 34,
            decoration: BoxDecoration(color: _kCareTeal.withOpacity(0.16), borderRadius: BorderRadius.circular(11)),
            child: Icon(icon, size: 19, color: _kCareTeal),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: TextStyle(fontWeight: FontWeight.w900, color: c.ink, fontSize: 13)),
              Text(body, style: TextStyle(color: c.muted, fontSize: 12, height: 1.3)),
            ]),
          ),
        ]),
      );

  Widget _payButtons() {
    if (_care['prepaid'] == true) {
      return Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: const Color(0xFF34D399).withOpacity(0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFF34D399).withOpacity(0.5))),
        child: Text('Paid in full until ${_careDate(_care['nextDue'])}. No payment is needed until then.', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12.5)),
      );
    }
    final p = _price.toStringAsFixed(0);
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      _primaryButton('Pay \$$p with card', Icons.credit_card_rounded, _payCard, color: const Color(0xFF6366F1), busy: _busy),
      const SizedBox(height: 8),
      _primaryButton('Pay \$$p with Cash App', Icons.attach_money_rounded, () => _payCashApp(), color: const Color(0xFF00B84A), busy: _busy),
      const SizedBox(height: 8),
      _primaryButton('Pay full $_years-year agreement \$${_termPrice.toStringAsFixed(0)}', Icons.workspace_premium_rounded, () => _payCashApp(fullTerm: true), color: const Color(0xFFF59E0B), busy: _busy),
    ]);
  }

  Widget _activeView(_HwColors c) {
    Widget row(String k, String v) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 6),
          child: Row(children: [
            Expanded(child: Text(k, style: TextStyle(color: c.muted, fontSize: 12.5))),
            Text(v, style: TextStyle(color: c.ink, fontWeight: FontWeight.w900, fontSize: 13)),
          ]),
        );
    final due = DateTime.tryParse((_care['nextDue'] ?? '').toString())?.toLocal();
    final days = due?.difference(DateTime.now()).inDays;
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          gradient: const LinearGradient(colors: [Color(0xFF0C4A6E), Color(0xFF0F766E)]),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Row(children: [
            Icon(Icons.verified_user_rounded, color: Color(0xFF34D399), size: 18),
            SizedBox(width: 6),
            Text('ACTIVE MEMBER', style: TextStyle(color: Color(0xFF34D399), fontWeight: FontWeight.w900, fontSize: 11.5, letterSpacing: 1.2)),
          ]),
          const SizedBox(height: 12),
          const Text('NEXT PAYMENT DUE', style: TextStyle(color: Colors.white60, fontSize: 10.5, fontWeight: FontWeight.w800, letterSpacing: 1.3)),
          Text(_careDate(_care['nextDue']), style: const TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.w900)),
          if (days != null)
            Text(days < 0 ? 'Payment is late' : (days == 0 ? 'Due today' : 'In $days day${days == 1 ? '' : 's'}'), style: const TextStyle(color: Color(0xFF99F6E4), fontWeight: FontWeight.w800)),
        ]),
      ),
      const SizedBox(height: 12),
      row('Monthly fee', '\$${((_care['price'] as num?) ?? 125).toStringAsFixed(0)}'),
      row('Agreement', '${_care['termYears'] ?? 1} year${(_care['termYears'] ?? 1) == 1 ? '' : 's'}'),
      row('Started', _careDate(_care['startedAt'])),
      row('Agreement ends', _careDate(_care['termEnds'])),
      const SizedBox(height: 8),
      _benefit(c, Icons.engineering_rounded, 'No labor charge', 'Post work and the worker does not charge you for the labor. You pay for materials only.'),
      _benefit(c, Icons.support_agent_rounded, 'Contact us every month', 'If anything is wrong with the house, contact us and we will go and fix it.'),
      const SizedBox(height: 4),
      Text('Pay the next month early', style: TextStyle(fontWeight: FontWeight.w800, color: c.ink)),
      const SizedBox(height: 8),
      _payButtons(),
    ]);
  }

  Widget _payView(_HwColors c) {
    final lapsed = _care['status'] == 'lapsed';
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: _kCareTeal.withOpacity(0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: _kCareTeal.withOpacity(0.45))),
        child: Row(children: [
          const Icon(Icons.draw_rounded, color: _kCareTeal),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              lapsed
                  ? 'Your last payment ran out. Pay to get labor-free work again.'
                  : 'Your agreement is signed (${_care['termYears']} year${_care['termYears'] == 1 ? '' : 's'}). Pay the first month to start.',
              style: TextStyle(color: c.ink, fontWeight: FontWeight.w700, fontSize: 12.5, height: 1.3),
            ),
          ),
        ]),
      ),
      const SizedBox(height: 14),
      _payButtons(),
    ]);
  }

  Widget _signView(_HwColors c) {
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Text('NGMY House Care', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: c.ink)),
      const SizedBox(height: 4),
      Text('\$125 a month. We work for you, you pay for materials.', style: TextStyle(color: c.muted, fontSize: 12.5)),
      const SizedBox(height: 14),
      _benefit(c, Icons.engineering_rounded, 'No labor charge', 'The work is free of labor charges. You pay for the materials only.'),
      _benefit(c, Icons.event_repeat_rounded, 'Every month', 'Contact us once a month: if anything is wrong with the house, we go and fix it.'),
      _benefit(c, Icons.add_task_rounded, 'Post work any time', 'Write the work you want done and the workers in your state pick it up.'),
      if (!_hasRegistryId)
        Container(
          margin: const EdgeInsets.only(bottom: 10),
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(color: const Color(0xFFEF4444).withOpacity(0.1), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFFEF4444).withOpacity(0.45))),
          child: Text('You need to be registered in Civic Registry to join House Care.', style: TextStyle(fontSize: 12, color: c.ink, fontWeight: FontWeight.w700)),
        ),
      Text('How long do you want to stay?', style: TextStyle(fontWeight: FontWeight.w900, color: c.ink)),
      const SizedBox(height: 8),
      for (final (years, label) in _terms)
        GestureDetector(
          onTap: () => setState(() => _term = years),
          child: Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              color: _term == years ? _kCareTeal.withOpacity(0.14) : c.tile,
              border: Border.all(color: _term == years ? _kCareTeal : c.line, width: _term == years ? 2 : 1),
            ),
            child: Row(children: [
              Icon(_term == years ? Icons.radio_button_checked_rounded : Icons.radio_button_off_rounded, color: _term == years ? _kCareTeal : c.muted, size: 20),
              const SizedBox(width: 10),
              Text(label, style: TextStyle(fontWeight: FontWeight.w800, color: c.ink)),
            ]),
          ),
        ),
      const SizedBox(height: 10),
      Text('NGMY agreement', style: TextStyle(fontWeight: FontWeight.w900, color: c.ink)),
      const SizedBox(height: 8),
      Container(
        constraints: const BoxConstraints(maxHeight: 230),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(14), border: Border.all(color: c.line)),
        child: Scrollbar(
          child: SingleChildScrollView(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              for (final (i, (title, body)) in _kCareAgreement.indexed) ...[
                Text('${i + 1}. $title', style: TextStyle(fontWeight: FontWeight.w900, color: c.ink, fontSize: 12.5)),
                const SizedBox(height: 2),
                Text(body, style: TextStyle(color: c.muted, fontSize: 12, height: 1.35)),
                const SizedBox(height: 10),
              ],
            ]),
          ),
        ),
      ),
      const SizedBox(height: 12),
      TextField(controller: _nameC, onChanged: (_) => setState(() {}), textCapitalization: TextCapitalization.words, decoration: _field(context, 'Your full name *', icon: Icons.person_rounded)),
      const SizedBox(height: 6),
      CheckboxListTile(
        contentPadding: EdgeInsets.zero,
        controlAffinity: ListTileControlAffinity.leading,
        value: _accepted,
        onChanged: (v) => setState(() => _accepted = v == true),
        title: Text(
          'I read the NGMY agreement and I agree to stay for $_term year${_term == 1 ? '' : 's'}.',
          style: TextStyle(fontSize: 12.5, color: c.ink, fontWeight: FontWeight.w700),
        ),
      ),
      const SizedBox(height: 6),
      Row(children: [
        Expanded(child: Text('Sign here', style: TextStyle(fontWeight: FontWeight.w900, color: c.ink))),
        TextButton(onPressed: () => setState(_ink.clear), child: const Text('Clear')),
      ]),
      _SignaturePad(points: _ink, onChanged: () => setState(() {})),
      const SizedBox(height: 12),
      Text('Your selfie', style: TextStyle(fontWeight: FontWeight.w900, color: c.ink)),
      const SizedBox(height: 8),
      Row(children: [
        ClipOval(
          child: Container(
            width: 74,
            height: 74,
            color: c.tile,
            child: _selfie == null ? Icon(Icons.face_rounded, size: 38, color: c.muted) : Image.memory(_selfie!, fit: BoxFit.cover),
          ),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: OutlinedButton.icon(
            onPressed: _takeSelfie,
            icon: const Icon(Icons.camera_alt_rounded, size: 18),
            label: Text(_selfie == null ? 'Take a selfie' : 'Take it again'),
          ),
        ),
      ]),
      const SizedBox(height: 16),
      _primaryButton('Sign and continue', Icons.draw_rounded, _canSign ? _sign : null, color: _kCareTeal, busy: _busy),
      if (!_canSign)
        Padding(
          padding: const EdgeInsets.only(top: 8),
          child: Text(
            'To continue: choose the years, tick the agreement, sign, and add your selfie.',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 11.5, color: c.muted),
          ),
        ),
    ]);
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    return _sheetFrame(
      context,
      title: 'House Care',
      icon: Icons.verified_user_rounded,
      child: Material(
        type: MaterialType.transparency,
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(16, 4, 16, 18),
          child: _active ? _activeView(c) : (_signed ? _payView(c) : _signView(c)),
        ),
      ),
    );
  }
}

/// A plain signature pad. Points are kept as 0..1 positions so the picture is the same at any size.
class _SignaturePad extends StatelessWidget {
  const _SignaturePad({required this.points, required this.onChanged});

  final List<Offset?> points;
  final VoidCallback onChanged;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, box) {
      final w = box.maxWidth;
      const h = 150.0;
      void add(Offset p) {
        points.add(Offset((p.dx / w).clamp(0.0, 1.0), (p.dy / h).clamp(0.0, 1.0)));
        onChanged();
      }

      return Container(
        height: h,
        width: w,
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFFCBD5E1))),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(13),
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onPanStart: (d) => add(d.localPosition),
            onPanUpdate: (d) => add(d.localPosition),
            onPanEnd: (_) {
              points.add(null);
              onChanged();
            },
            child: CustomPaint(painter: _InkPainter(List<Offset?>.of(points)), size: Size(w, h)),
          ),
        ),
      );
    });
  }
}

class _InkPainter extends CustomPainter {
  _InkPainter(this.points);
  final List<Offset?> points;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFF0F172A)
      ..strokeWidth = 2.6
      ..strokeCap = StrokeCap.round;
    for (var i = 0; i < points.length - 1; i++) {
      final a = points[i];
      final b = points[i + 1];
      if (a != null && b != null) canvas.drawLine(Offset(a.dx * size.width, a.dy * size.height), Offset(b.dx * size.width, b.dy * size.height), paint);
    }
  }

  @override
  bool shouldRepaint(_InkPainter old) => true;
}

// ── Admin: every House Care agreement ───────────────────────────────────────

/// Opens the admin list of House Care members (signatures, selfies, revoke) from the Admin Dashboard.
Future<void> showNgmyAdminHouseCareSheet(BuildContext context) => showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => const _AdminCareSheet(),
    );

class _AdminCareSheet extends StatefulWidget {
  const _AdminCareSheet();

  @override
  State<_AdminCareSheet> createState() => _AdminCareSheetState();
}

class _AdminCareSheetState extends State<_AdminCareSheet> {
  List<Map<String, dynamic>> _rows = [];
  bool _loading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final res = await NgmyHouseWorkersApi.adminCare();
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (res['ok'] == true) {
        _rows = _maps(res['members']);
        _error = null;
      } else {
        _error = (res['error'] ?? 'Could not load.').toString();
      }
    });
  }

  void _zoom(String url, String title) {
    if (url.isEmpty) return;
    showDialog<void>(
      context: context,
      builder: (ctx) => Dialog(
        backgroundColor: Colors.black,
        insetPadding: const EdgeInsets.all(14),
        child: Stack(children: [
          InteractiveViewer(child: Center(child: Image.network(url, fit: BoxFit.contain))),
          Positioned(top: 6, right: 6, child: IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close_rounded, color: Colors.white))),
          Positioned(left: 14, top: 14, child: Text(title, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800))),
        ]),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    return _sheetFrame(
      context,
      title: 'House Care members',
      icon: Icons.fact_check_rounded,
      child: _loading
          ? const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
          : _error != null
              ? Padding(padding: const EdgeInsets.all(30), child: Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted)))
              : _rows.isEmpty
                  ? Padding(padding: const EdgeInsets.all(30), child: Text('Nobody has signed the agreement yet.', textAlign: TextAlign.center, style: TextStyle(color: c.muted)))
                  : ListView(
                      shrinkWrap: true,
                      padding: const EdgeInsets.fromLTRB(14, 0, 14, 16),
                      children: [
                        for (final m in _rows) _memberCard(m, c),
                      ],
                    ),
    );
  }

  Widget _memberCard(Map<String, dynamic> m, _HwColors c) {
    final status = (m['status'] ?? '').toString();
    final color = status == 'active' ? _kHwGreen : (status == 'cancelled' ? const Color(0xFFEF4444) : const Color(0xFFF59E0B));
    final selfie = (m['selfieUrl'] ?? '').toString();
    final sig = (m['signatureUrl'] ?? '').toString();
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(16), border: Border.all(color: c.line)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          GestureDetector(
            onTap: () => _zoom(selfie, '${m['fullName']} · selfie'),
            child: ClipOval(
              child: Container(
                width: 62,
                height: 62,
                color: c.line,
                child: selfie.isEmpty ? const Icon(Icons.face_rounded) : Image.network(selfie, fit: BoxFit.cover, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_rounded)),
              ),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text((m['fullName'] ?? '').toString(), style: TextStyle(fontWeight: FontWeight.w900, color: c.ink, fontSize: 14.5)),
              Text((m['email'] ?? '').toString(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11.5, color: c.muted)),
              Text([m['state'], '${m['termYears']}-year agreement'].where((e) => (e ?? '').toString().isNotEmpty).join(' · '), style: TextStyle(fontSize: 11.5, color: c.muted)),
            ]),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
            decoration: BoxDecoration(color: color.withOpacity(0.15), borderRadius: BorderRadius.circular(999)),
            child: Text(status.toUpperCase(), style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: color)),
          ),
        ]),
        const SizedBox(height: 10),
        Text('Signed ${_careDate(m['agreedAt'])}  ·  Next payment ${_careDate(m['nextDue'])}  ·  Ends ${_careDate(m['termEnds'])}', style: TextStyle(fontSize: 11.5, color: c.muted, height: 1.4)),
        const SizedBox(height: 8),
        Text('Signature', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: c.muted)),
        const SizedBox(height: 4),
        GestureDetector(
          onTap: () => _zoom(sig, '${m['fullName']} · signature'),
          child: Container(
            height: 70,
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(10), border: Border.all(color: c.line)),
            child: sig.isEmpty ? const SizedBox() : Image.network(sig, fit: BoxFit.contain, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_rounded)),
          ),
        ),
        const SizedBox(height: 10),
        status == 'cancelled'
            ? OutlinedButton.icon(
                onPressed: () => _setRevoked(m, false),
                icon: const Icon(Icons.restore_rounded, size: 18),
                label: const Text('Restore subscription'),
              )
            : OutlinedButton.icon(
                onPressed: () => _setRevoked(m, true),
                style: OutlinedButton.styleFrom(foregroundColor: const Color(0xFFEF4444), side: const BorderSide(color: Color(0xFFEF4444))),
                icon: const Icon(Icons.block_rounded, size: 18),
                label: const Text('Revoke subscription'),
              ),
      ]),
    );
  }

  Future<void> _setRevoked(Map<String, dynamic> m, bool revoke) async {
    final email = (m['email'] ?? '').toString();
    if (revoke) {
      final ok = await showDialog<bool>(
        context: context,
        builder: (ctx) => AlertDialog(
          title: const Text('Revoke House Care?'),
          content: Text('${m['fullName']} will lose free labor and the House Care card will leave their home screen.'),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Revoke')),
          ],
        ),
      );
      if (ok != true || !mounted) return;
    }
    final res = revoke ? await NgmyHouseWorkersApi.adminCareRevoke(email) : await NgmyHouseWorkersApi.adminCareRestore(email);
    if (!mounted) return;
    if (res['ok'] == true) {
      _snack(context, revoke ? 'Subscription revoked.' : 'Subscription restored.');
      _load();
    } else {
      _snack(context, (res['error'] ?? 'Could not update.').toString(), error: true);
    }
  }
}

/// The work record sheet and the offer card as plain widgets, for tests.
@visibleForTesting
Widget ngmyWorkRecordSheetForTest(Map<String, dynamic> stats) => _WorkRecordSheet(stats: stats);

@visibleForTesting
Widget ngmyOfferSheetForTest(Map<String, dynamic> job) => _OfferSheet(job: job);

@visibleForTesting
Widget ngmyWorkRecordCardForTest(Map<String, dynamic> stats) => _WorkRecordCard(stats: stats);
