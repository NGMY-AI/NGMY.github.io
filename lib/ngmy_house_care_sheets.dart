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

Widget _laborBadge(bool laborFree, {NgmyLangStore? store}) {
  final tr = (store ?? NgmyUiLang.civic).t;
  final color = laborFree ? _kCareTeal : _kJobOrange;
  return Container(
    padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
    decoration: BoxDecoration(color: color.withOpacity(0.14), borderRadius: BorderRadius.circular(999), border: Border.all(color: color.withOpacity(0.5))),
    child: Row(mainAxisSize: MainAxisSize.min, children: [
      Icon(laborFree ? Icons.verified_user_rounded : Icons.payments_rounded, size: 13, color: color),
      const SizedBox(width: 5),
      Flexible(
        child: Text(
          laborFree
              ? tr('House Care member: materials only, no labor charge', 'Mwanachama wa House Care: vifaa tu, hakuna malipo ya kazi')
              : tr('Standard work: labor + materials', 'Kazi ya kawaida: kazi + vifaa'),
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

String _pt(String en, String sw) => NgmyUiLang.post.t(en, sw);

// ── Post work ───────────────────────────────────────────────────────────────

/// Short names for the nine work categories (English / Swahili), by category id.
const Map<String, (String, String)> _kWorkLabels = {
  'faucet': ('Faucet & sink', 'Bomba na sinki'),
  'toilet': ('Toilet', 'Choo'),
  'outlet': ('Outlet & switch', 'Soketi na swichi'),
  'door': ('Door & lock', 'Mlango na kufuli'),
  'cabinet': ('Cabinet & hinge', 'Kabati na bawaba'),
  'drywall': ('Drywall patch', 'Kuziba ukuta'),
  'caulk': ('Caulk & seal', 'Kuziba mapengo'),
  'shelf': ('Shelf & mount', 'Rafu na kuning\'iniza'),
  'paint': ('Paint touch-up', 'Kupaka rangi'),
};

/// The post-work pop-up, in the middle of the screen. Returns true when the work was posted.
Future<bool> showNgmyPostWorkSheet(
  BuildContext context, {
  required String state,
  required String clientName,
  required String clientPhone,
  required Map<String, dynamic> care,
  required bool hasRegistryId,
  required Future<void> Function() onJoinCare,
}) async {
  final posted = await showGeneralDialog<bool>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Close',
    barrierColor: Colors.black.withOpacity(0.64),
    transitionDuration: const Duration(milliseconds: 380),
    pageBuilder: (_, __, ___) => _PostWorkDialog(
      state: state,
      clientName: clientName,
      clientPhone: clientPhone,
      care: care,
      hasRegistryId: hasRegistryId,
      onJoinCare: onJoinCare,
    ),
    transitionBuilder: (_, anim, __, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack, reverseCurve: Curves.easeInCubic);
      return FadeTransition(
        opacity: CurvedAnimation(parent: anim, curve: Curves.easeOut),
        child: ScaleTransition(scale: Tween<double>(begin: 0.88, end: 1).animate(curved), child: child),
      );
    },
  );
  if (posted == true && context.mounted) {
    _snack(context, _pt('Your work is posted. The first worker to pick it up will show in My requests.', 'Kazi yako imetumwa. Fundi wa kwanza atakayeipokea ataonekana kwenye Maombi yangu.'));
  }
  return posted == true;
}

class _PostWorkDialog extends StatefulWidget {
  const _PostWorkDialog({
    required this.state,
    required this.clientName,
    required this.clientPhone,
    required this.care,
    required this.hasRegistryId,
    required this.onJoinCare,
  });

  final String state;
  final String clientName;
  final String clientPhone;
  final Map<String, dynamic> care;
  final bool hasRegistryId;
  final Future<void> Function() onJoinCare;

  @override
  State<_PostWorkDialog> createState() => _PostWorkDialogState();
}

class _PostWorkDialogState extends State<_PostWorkDialog> {
  static const _orange = Color(0xFFFF8A1F);
  late final TextEditingController _name = TextEditingController(text: widget.clientName);
  late final TextEditingController _phone = TextEditingController(text: ngmyPhoneDashed(widget.clientPhone));
  final TextEditingController _address = TextEditingController();
  final TextEditingController _city = TextEditingController();
  final TextEditingController _details = TextEditingController();
  String _category = '';
  DateTime? _when;
  bool _busy = false;
  String? _error;

  bool get _member => widget.care['active'] == true;
  bool get _canSend => _member || widget.care['subscribed'] == true;
  bool get _valid =>
      widget.hasRegistryId &&
      _canSend &&
      _details.text.trim().length >= 5 &&
      _name.text.trim().isNotEmpty &&
      ngmyPhoneDigits(_phone.text).length >= 10;

  @override
  void initState() {
    super.initState();
    NgmyUiLang.post.code.addListener(_langChanged);
    unawaited(NgmyUiLang.post.load());
    for (final c in [_name, _phone, _address, _city, _details]) {
      c.addListener(() {
        if (mounted) setState(() {});
      });
    }
  }

  @override
  void dispose() {
    NgmyUiLang.post.code.removeListener(_langChanged);
    for (final c in [_name, _phone, _address, _city, _details]) {
      c.dispose();
    }
    super.dispose();
  }

  void _langChanged() {
    if (mounted) setState(() {});
  }

  String get _whenText {
    final d = _when;
    if (d == null) return '';
    final days = NgmyUiLang.post.isSw
        ? ['Jumatatu', 'Jumanne', 'Jumatano', 'Alhamisi', 'Ijumaa', 'Jumamosi', 'Jumapili']
        : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    final months = NgmyUiLang.post.isSw
        ? ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ago', 'Sep', 'Okt', 'Nov', 'Des']
        : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    final h = d.hour % 12 == 0 ? 12 : d.hour % 12;
    final m = d.minute.toString().padLeft(2, '0');
    return '${days[d.weekday - 1]}, ${months[d.month - 1]} ${d.day} · $h:$m ${d.hour < 12 ? 'AM' : 'PM'}';
  }

  Future<void> _pickTime() async {
    final now = DateTime.now();
    final date = await showDatePicker(
      context: context,
      initialDate: _when ?? now,
      firstDate: DateTime(now.year, now.month, now.day),
      lastDate: now.add(const Duration(days: 180)),
      helpText: _pt('Pick the day', 'Chagua siku'),
    );
    if (date == null || !mounted) return;
    final time = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.fromDateTime(_when ?? now.add(const Duration(hours: 1))),
      helpText: _pt('Pick the time', 'Chagua saa'),
    );
    if (time == null || !mounted) return;
    setState(() => _when = DateTime(date.year, date.month, date.day, time.hour, time.minute));
  }

  Future<void> _submit() async {
    if (!_valid || _busy) return;
    setState(() {
      _busy = true;
      _error = null;
    });
    final res = await NgmyHouseWorkersApi.postJob({
      'state': widget.state,
      'clientName': _name.text.trim(),
      'clientPhone': _phone.text.trim(),
      'address': _address.text.trim(),
      'city': _city.text.trim(),
      'category': _category,
      'details': _details.text.trim(),
      'bestTime': _whenText,
    });
    if (!mounted) return;
    if (res['ok'] == true) {
      Navigator.pop(context, true);
    } else {
      setState(() {
        _busy = false;
        _error = (res['error'] ?? _pt('Could not post. Try again.', 'Imeshindikana kutuma. Jaribu tena.')).toString();
      });
    }
  }

  Widget _rise(int i, Widget child) => TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: 1),
        duration: Duration(milliseconds: 380 + i * 90),
        curve: Curves.easeOutCubic,
        builder: (_, t, c) => Opacity(opacity: t, child: Transform.translate(offset: Offset(0, (1 - t) * 18), child: c)),
        child: child,
      );

  InputDecoration _dark(String label, {String? hint, IconData? icon}) => InputDecoration(
        labelText: label,
        hintText: hint,
        labelStyle: TextStyle(color: Colors.white.withOpacity(0.6), fontWeight: FontWeight.w700, fontSize: 13),
        hintStyle: TextStyle(color: Colors.white.withOpacity(0.3), fontSize: 13),
        prefixIcon: icon == null ? null : Icon(icon, size: 19, color: _orange),
        filled: true,
        fillColor: Colors.white.withOpacity(0.06),
        isDense: true,
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: Colors.white.withOpacity(0.1))),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: _orange, width: 1.5)),
      );

  Widget _label(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 8, top: 2),
        child: Text(t.toUpperCase(), style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1.3, color: Colors.white.withOpacity(0.5))),
      );

  Widget _categoryGrid() {
    final cats = NgmyHouseInsurance.coveredCategories;
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemCount: cats.length,
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 8, crossAxisSpacing: 8, mainAxisExtent: 86),
      itemBuilder: (_, i) {
        final cat = cats[i];
        final on = _category == cat.title;
        final label = _kWorkLabels[cat.id];
        final text = label == null ? cat.title : _pt(label.$1, label.$2);
        return GestureDetector(
          onTap: () {
            HapticFeedback.selectionClick();
            setState(() => _category = on ? '' : cat.title);
          },
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 220),
            curve: Curves.easeOut,
            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 8),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18),
              gradient: on ? const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFFF8A1F), Color(0xFFE5560B)]) : null,
              color: on ? null : Colors.white.withOpacity(0.06),
              border: Border.all(color: on ? Colors.transparent : Colors.white.withOpacity(0.1)),
              boxShadow: on ? [BoxShadow(color: _orange.withOpacity(0.45), blurRadius: 16, offset: const Offset(0, 6))] : null,
            ),
            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              AnimatedScale(scale: on ? 1.15 : 1, duration: const Duration(milliseconds: 220), child: Icon(cat.icon, size: 26, color: on ? Colors.white : _orange)),
              const SizedBox(height: 6),
              Text(text, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: on ? Colors.white : Colors.white70, fontWeight: FontWeight.w800, fontSize: 11.5, height: 1.15)),
            ]),
          ),
        );
      },
    );
  }

  Widget _notice(Color color, String text, {Widget? action}) => Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.fromLTRB(12, 10, 8, 10),
        decoration: BoxDecoration(color: color.withOpacity(0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: color.withOpacity(0.45))),
        child: Row(children: [
          Expanded(child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700, height: 1.3))),
          if (action != null) action,
        ]),
      );

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final keyboard = MediaQuery.of(context).viewInsets.bottom;
    final enabled = _valid && !_busy;
    return SafeArea(
      child: Center(
        child: Material(
          color: Colors.transparent,
          child: Container(
            constraints: BoxConstraints(maxWidth: 420, maxHeight: size.height * 0.94 - keyboard),
            margin: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(32),
              gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF2A1606), Color(0xFF0E0B10), Color(0xFF0A1420)]),
              border: Border.all(color: Colors.white.withOpacity(0.1)),
              boxShadow: [BoxShadow(color: _orange.withOpacity(0.25), blurRadius: 50, spreadRadius: -10)],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(32),
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 14, 8, 4),
                  child: Row(children: [
                    Container(
                      width: 38,
                      height: 38,
                      decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), gradient: const LinearGradient(colors: [Color(0xFFFF8A1F), Color(0xFFE5560B)])),
                      child: const Icon(Icons.add_task_rounded, color: Colors.white, size: 21),
                    ),
                    const SizedBox(width: 10),
                    Expanded(child: Text(_pt('Post work', 'Tuma kazi'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19))),
                    NgmyLangFlag(store: NgmyUiLang.post),
                    IconButton(onPressed: () => Navigator.pop(context, false), icon: Icon(Icons.close_rounded, color: Colors.white.withOpacity(0.6))),
                  ]),
                ),
                Flexible(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.fromLTRB(18, 6, 18, 18),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                      _rise(
                        0,
                        Text(
                          _pt(
                            'Write the work you want done. It shows up for the workers in your state right away, and the first worker to pick it up gets it.',
                            'Andika kazi unayotaka ifanyike. Inaonekana mara moja kwa mafundi wa jimbo lako, na fundi wa kwanza kuipokea ataipata.',
                          ),
                          style: TextStyle(fontSize: 12.5, color: Colors.white.withOpacity(0.6), height: 1.4),
                        ),
                      ),
                      const SizedBox(height: 12),
                      if (!_canSend)
                        _notice(
                          _orange,
                          _pt('Join House Care and pay for it to send work. Members do not pay for labor, only materials.', 'Jiunge na House Care na ulipe ili kutuma kazi. Wanachama hawalipi kazi, vifaa tu.'),
                          action: TextButton(
                            onPressed: () async {
                              Navigator.pop(context, false);
                              await widget.onJoinCare();
                            },
                            child: Text(_pt('Join', 'Jiunge'), style: const TextStyle(color: _orange, fontWeight: FontWeight.w900)),
                          ),
                        ),
                      if (!widget.hasRegistryId)
                        _notice(
                          const Color(0xFFEF4444),
                          _pt(
                            'To submit work you need to be registered in Civic Registry. Your work goes to the workers in the state you are registered in.',
                            'Ili kutuma kazi lazima uwe umesajiliwa kwenye Civic Registry. Kazi yako huenda kwa mafundi wa jimbo ulilosajiliwa.',
                          ),
                        ),
                      _rise(1, Align(alignment: Alignment.centerLeft, child: _laborBadge(_member, store: NgmyUiLang.post))),
                      const SizedBox(height: 14),
                      _rise(2, _label(_pt('What kind of work?', 'Kazi ya aina gani?'))),
                      _rise(2, _categoryGrid()),
                      const SizedBox(height: 16),
                      _rise(3, _label(_pt('What needs to be fixed', 'Kinachohitaji kutengenezwa'))),
                      _rise(
                        3,
                        TextField(
                          controller: _details,
                          maxLines: 4,
                          style: const TextStyle(color: Colors.white),
                          decoration: _dark(_pt('Describe the work *', 'Eleza kazi *'), hint: _pt('What is broken, leaking, or not working…', 'Nini kimeharibika, kinavuja, au hakifanyi kazi…')),
                        ),
                      ),
                      const SizedBox(height: 16),
                      _rise(4, _label(_pt('Where', 'Mahali'))),
                      _rise(4, TextField(controller: _address, style: const TextStyle(color: Colors.white), decoration: _dark(_pt('Address', 'Anwani'), icon: Icons.home_rounded))),
                      const SizedBox(height: 10),
                      _rise(4, TextField(controller: _city, style: const TextStyle(color: Colors.white), decoration: _dark(_pt('City', 'Jiji'), icon: Icons.location_city_rounded))),
                      const SizedBox(height: 16),
                      _rise(5, _label(_pt('Best time', 'Muda mzuri'))),
                      _rise(
                        5,
                        GestureDetector(
                          onTap: _pickTime,
                          child: Container(
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(16),
                              color: _when == null ? Colors.white.withOpacity(0.06) : _orange.withOpacity(0.14),
                              border: Border.all(color: _when == null ? Colors.white.withOpacity(0.1) : _orange.withOpacity(0.7)),
                            ),
                            child: Row(children: [
                              const Icon(Icons.schedule_rounded, size: 20, color: _orange),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Text(
                                  _when == null ? _pt('Tap to choose a day and time', 'Gusa kuchagua siku na saa') : _whenText,
                                  style: TextStyle(color: _when == null ? Colors.white54 : Colors.white, fontWeight: FontWeight.w800, fontSize: 13.5),
                                ),
                              ),
                              if (_when != null)
                                GestureDetector(
                                  onTap: () => setState(() => _when = null),
                                  child: Icon(Icons.close_rounded, size: 18, color: Colors.white.withOpacity(0.6)),
                                )
                              else
                                Icon(Icons.chevron_right_rounded, color: Colors.white.withOpacity(0.4)),
                            ]),
                          ),
                        ),
                      ),
                      const SizedBox(height: 16),
                      _rise(6, _label(_pt('You', 'Wewe'))),
                      _rise(6, TextField(controller: _name, style: const TextStyle(color: Colors.white), decoration: _dark(_pt('Your name *', 'Jina lako *'), icon: Icons.person_rounded))),
                      const SizedBox(height: 10),
                      _rise(
                        6,
                        TextField(
                          controller: _phone,
                          keyboardType: TextInputType.phone,
                          inputFormatters: const [NgmyPhoneDashFormatter()],
                          style: const TextStyle(color: Colors.white),
                          decoration: _dark(_pt('Phone number (WhatsApp) *', 'Namba ya simu (WhatsApp) *'), hint: '123-456-7890', icon: Icons.phone_rounded),
                        ),
                      ),
                      if (_error != null) ...[
                        const SizedBox(height: 12),
                        Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w700, fontSize: 12.5)),
                      ],
                      const SizedBox(height: 18),
                      _rise(
                        7,
                        AnimatedOpacity(
                          duration: const Duration(milliseconds: 250),
                          opacity: enabled || _busy ? 1 : 0.45,
                          child: Container(
                            height: 56,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                              gradient: const LinearGradient(colors: [Color(0xFFFF9A3C), Color(0xFFE5560B)]),
                              boxShadow: enabled ? [BoxShadow(color: _orange.withOpacity(0.5), blurRadius: 22, offset: const Offset(0, 9))] : null,
                            ),
                            child: Material(
                              color: Colors.transparent,
                              child: InkWell(
                                borderRadius: BorderRadius.circular(20),
                                onTap: enabled ? _submit : null,
                                child: Center(
                                  child: _busy
                                      ? const SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2.6, color: Colors.white))
                                      : Row(mainAxisSize: MainAxisSize.min, children: [
                                          const Icon(Icons.send_rounded, color: Colors.white, size: 20),
                                          const SizedBox(width: 10),
                                          Text(_pt('Post work', 'Tuma kazi'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17, letterSpacing: 0.3)),
                                        ]),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ]),
                  ),
                ),
              ]),
            ),
          ),
        ),
      ),
    );
  }
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

  /// A small one-line row: the work category, the place, and Accept at the end. Tap it for everything.
  Widget _card(Map<String, dynamic> job, _HwColors c) {
    final id = job['id'].toString();
    final fresh = _fresh.contains(id);
    final category = (job['category'] ?? '').toString().isEmpty ? 'Home work' : job['category'].toString();
    final place = [job['city'], _ago(job['createdAt'])].where((e) => (e ?? '').toString().isNotEmpty).join(' · ');
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(14),
          onTap: () => _showOffer(job),
          child: Ink(
            padding: const EdgeInsets.fromLTRB(12, 7, 7, 7),
            decoration: BoxDecoration(
              color: c.tile,
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: fresh ? _kJobOrange : c.line, width: fresh ? 1.6 : 1),
            ),
            child: Row(children: [
              if (fresh)
                Container(
                  margin: const EdgeInsets.only(right: 8),
                  width: 8,
                  height: 8,
                  decoration: const BoxDecoration(color: _kJobOrange, shape: BoxShape.circle),
                ),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(category, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontWeight: FontWeight.w900, color: c.ink, fontSize: 14)),
                  if (place.isNotEmpty) Text(place, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11, color: c.muted)),
                ]),
              ),
              const SizedBox(width: 8),
              SizedBox(
                height: 36,
                child: ElevatedButton(
                  onPressed: _picking != null ? null : () => _pick(job),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF3FA535),
                    foregroundColor: Colors.white,
                    elevation: 0,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(11)),
                  ),
                  child: _picking == id
                      ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                      : const Text('Accept', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13.5)),
                ),
              ),
            ]),
          ),
        ),
      ),
    );
  }
}

/// The offer card: the work, the client name, the address and what needs fixing, with Accept at the end.
class _OfferSheet extends StatelessWidget {
  const _OfferSheet({required this.job});
  final Map<String, dynamic> job;

  Widget _line(_HwColors c, IconData icon, String label, String value) {
    if (value.trim().isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Container(
          width: 32,
          height: 32,
          decoration: BoxDecoration(color: _kJobOrange.withOpacity(0.14), borderRadius: BorderRadius.circular(10)),
          child: Icon(icon, size: 17, color: _kJobOrange),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(label.toUpperCase(), style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w800, letterSpacing: 1, color: c.muted)),
            Text(value, style: TextStyle(fontSize: 14, height: 1.35, fontWeight: FontWeight.w700, color: c.ink)),
          ]),
        ),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    final place = [job['address'], job['city'], job['state']].where((e) => (e ?? '').toString().trim().isNotEmpty).join(', ');
    return Container(
      margin: const EdgeInsets.fromLTRB(10, 0, 10, 14),
      padding: const EdgeInsets.fromLTRB(20, 14, 20, 12),
      decoration: BoxDecoration(color: c.sheet, borderRadius: BorderRadius.circular(24), border: Border.all(color: c.line)),
      child: SafeArea(
        top: false,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.82),
          child: SingleChildScrollView(
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: c.line, borderRadius: BorderRadius.circular(3)))),
              const SizedBox(height: 14),
              Center(child: Text('Work details', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900, letterSpacing: 1.6, color: _kJobOrange))),
              const SizedBox(height: 6),
              Center(
                child: Text(
                  (job['category'] ?? '').toString().isEmpty ? 'Home work' : job['category'].toString(),
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: c.ink),
                ),
              ),
              const SizedBox(height: 14),
              _line(c, Icons.person_rounded, 'Client', (job['clientName'] ?? '').toString()),
              _line(c, Icons.location_on_rounded, 'Address', place),
              _line(c, Icons.build_rounded, 'What needs to be fixed', (job['details'] ?? '').toString()),
              _line(c, Icons.schedule_rounded, 'Best time', (job['bestTime'] ?? '').toString()),
              Center(child: _laborBadge(job['laborFree'] == true)),
              const SizedBox(height: 16),
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
        ),
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
    if (widget.cashAppUrl.trim().isEmpty) {
      _snack(context, 'Cash App is not set up yet.', error: true);
      return;
    }
    final res = await showNgmyCareCashAppSheet(
      context,
      amount: fullTerm ? _termPrice : _price,
      label: fullTerm ? 'Full $_years-year agreement' : 'House Care · 30 days',
      cashAppUrl: widget.cashAppUrl,
      cashAppTag: widget.cashAppTag,
      fullTerm: fullTerm,
    );
    if (res == null || !mounted) return;
    await _reload();
    if (mounted) _snack(context, 'Payment submitted. Thank you.');
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
        child: Text('Paid until ${_careDate(_care['nextDue'])}. You can pay again in the last 3 days.', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12.5)),
      );
    }
    final waiting = _care['pendingPayment'];
    if (waiting is Map) {
      return Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: const Color(0xFFF59E0B).withOpacity(0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFFF59E0B).withOpacity(0.5))),
        child: Row(children: [
          const Icon(Icons.hourglass_top_rounded, color: Color(0xFFF59E0B), size: 20),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              'Your \$${((waiting['amount'] as num?) ?? 0).toStringAsFixed(0)} Cash App payment was received. We are confirming it now.',
              style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12.5, height: 1.3),
            ),
          ),
        ]),
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
  List<Map<String, dynamic>> _payments = [];
  bool _loading = true;
  bool _showPayments = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final results = await Future.wait([NgmyHouseWorkersApi.adminCare(), NgmyHouseWorkersApi.adminCarePayments(), NgmyHouseWorkersApi.adminBrowserPayments()]);
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (results[0]['ok'] == true) {
        _rows = _maps(results[0]['members']);
        _error = null;
      } else {
        _error = (results[0]['error'] ?? 'Could not load.').toString();
      }
      _payments = [
        if (results[1]['ok'] == true) ..._maps(results[1]['payments']),
        if (results[2]['ok'] == true) ..._maps(results[2]['payments']),
      ]..sort((a, b) => (b['createdAt'] ?? '').toString().compareTo((a['createdAt'] ?? '').toString()));
    });
  }

  int get _pendingPayments => _payments.where((p) => p['status'] == 'pending').length;

  Future<void> _decide(Map<String, dynamic> p, bool approve) async {
    final browser = p['kind'] == 'browser';
    final res = browser
        ? await NgmyHouseWorkersApi.adminBrowserPaymentDecide((p['id'] ?? '').toString(), approve)
        : await NgmyHouseWorkersApi.adminCarePaymentDecide((p['id'] ?? '').toString(), approve);
    if (!mounted) return;
    if (res['ok'] == true) {
      _snack(context, approve ? (browser ? 'Payment approved. The 2 hours of browser time are on their way.' : 'Payment approved. House Care is active.') : 'Payment rejected.');
      _load();
    } else {
      _snack(context, (res['error'] ?? 'Could not update.').toString(), error: true);
    }
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

  Widget _tab(_HwColors c, String label, bool on, VoidCallback tap) => Expanded(
        child: GestureDetector(
          onTap: tap,
          child: Container(
            padding: const EdgeInsets.symmetric(vertical: 10),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: on ? _kCareTeal.withOpacity(0.18) : c.tile,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: on ? _kCareTeal : c.line),
            ),
            child: Text(label, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5, color: on ? _kCareTeal : c.muted)),
          ),
        ),
      );

  Widget _paymentCard(Map<String, dynamic> p, _HwColors c) {
    final status = (p['status'] ?? '').toString();
    final color = status == 'approved' ? _kHwGreen : (status == 'rejected' ? const Color(0xFFEF4444) : const Color(0xFFF59E0B));
    final what = p['kind'] == 'browser' ? 'Advisor browser · 2 hours' : (p['term'] == true ? 'Full agreement' : (p['plan'] == 'premium' ? 'Premium month' : 'Monthly'));
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(16), border: Border.all(color: c.line)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text((p['name'] ?? '').toString(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontWeight: FontWeight.w900, color: c.ink, fontSize: 14)),
              Text('${p['email']}', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11.5, color: c.muted)),
              Text('$what · ${_careDate(p['createdAt'])} · Cash App', style: TextStyle(fontSize: 11.5, color: c.muted)),
            ]),
          ),
          const SizedBox(width: 8),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text('\$${((p['amount'] as num?) ?? 0) == ((p['amount'] as num?) ?? 0).roundToDouble() ? ((p['amount'] as num?) ?? 0).toStringAsFixed(0) : ((p['amount'] as num?) ?? 0).toStringAsFixed(2)}', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: c.ink)),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
              decoration: BoxDecoration(color: color.withOpacity(0.15), borderRadius: BorderRadius.circular(999)),
              child: Text(status.toUpperCase(), style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, color: color)),
            ),
          ]),
        ]),
        if ((p['code'] ?? '').toString().isNotEmpty || (p['proofUrl'] ?? '').toString().isNotEmpty) ...[
          const SizedBox(height: 10),
          Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
            if ((p['proofUrl'] ?? '').toString().isNotEmpty)
              GestureDetector(
                onTap: () => _zoom((p['proofUrl'] ?? '').toString(), '${p['name']} · payment screenshot'),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(10),
                  child: SizedBox(
                    width: 64,
                    height: 84,
                    child: Image.network((p['proofUrl'] ?? '').toString(), fit: BoxFit.cover, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_rounded)),
                  ),
                ),
              ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('CODE IN THE CASH APP NOTE', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w800, letterSpacing: 1, color: c.muted)),
                Text((p['code'] ?? '').toString().isEmpty ? '—' : (p['code'] ?? '').toString(), style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, letterSpacing: 3, color: _kHwGreen)),
                Text('Tap the picture to enlarge it', style: TextStyle(fontSize: 11, color: c.muted)),
              ]),
            ),
          ]),
        ],
        if (status == 'pending') ...[
          const SizedBox(height: 10),
          Row(children: [
            Expanded(
              child: OutlinedButton(
                onPressed: () => _decide(p, false),
                style: OutlinedButton.styleFrom(foregroundColor: const Color(0xFFEF4444), side: const BorderSide(color: Color(0xFFEF4444))),
                child: const Text('Reject'),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(child: FilledButton(onPressed: () => _decide(p, true), style: FilledButton.styleFrom(backgroundColor: _kHwGreen), child: const Text('Approve'))),
          ]),
        ],
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    Widget body;
    if (_loading) {
      body = const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()));
    } else if (_showPayments) {
      body = _payments.isEmpty
          ? Padding(padding: const EdgeInsets.all(30), child: Text('No Cash App payments yet.', textAlign: TextAlign.center, style: TextStyle(color: c.muted)))
          : Column(children: [for (final p in _payments) _paymentCard(p, c)]);
    } else if (_error != null) {
      body = Padding(padding: const EdgeInsets.all(30), child: Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted)));
    } else if (_rows.isEmpty) {
      body = Padding(padding: const EdgeInsets.all(30), child: Text('Nobody has signed the agreement yet.', textAlign: TextAlign.center, style: TextStyle(color: c.muted)));
    } else {
      body = Column(children: [for (final m in _rows) _memberCard(m, c)]);
    }
    return _sheetFrame(
      context,
      title: 'House Care members',
      icon: Icons.fact_check_rounded,
      child: ListView(
        shrinkWrap: true,
        padding: const EdgeInsets.fromLTRB(14, 0, 14, 16),
        children: [
          Row(children: [
            _tab(c, 'Signatures (${_rows.length})', !_showPayments, () => setState(() => _showPayments = false)),
            const SizedBox(width: 8),
            _tab(c, _pendingPayments > 0 ? 'Payments ($_pendingPayments new)' : 'Payments', _showPayments, () => setState(() => _showPayments = true)),
          ]),
          const SizedBox(height: 12),
          body,
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

// ── Cash App payment: code, send, screenshot, submit ───────────────────────

/// The Cash App payment card for House Care, a pop-up in the middle of the screen. Like a Growth
/// Income deposit: the member writes the code in the Cash App note, sends the money, then attaches
/// the screenshot of the payment and submits. Returns the server's answer once sent, or null.
Future<Map<String, dynamic>?> showNgmyCareCashAppSheet(
  BuildContext context, {
  required double amount,
  required String label,
  required String cashAppUrl,
  required String cashAppTag,
  required bool fullTerm,
  /// Sends the payment somewhere else than House Care (the code, the screenshot as base64 and its type). It returns the server's answer.
  Future<Map<String, dynamic>> Function(String code, String proofBase64, String proofMime)? onSubmit,
}) {
  return showGeneralDialog<Map<String, dynamic>>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Close',
    barrierColor: Colors.black.withOpacity(0.62),
    transitionDuration: const Duration(milliseconds: 380),
    pageBuilder: (_, __, ___) => _CareCashAppSheet(amount: amount, label: label, cashAppUrl: cashAppUrl, cashAppTag: cashAppTag, fullTerm: fullTerm, onSubmit: onSubmit),
    transitionBuilder: (_, anim, __, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack, reverseCurve: Curves.easeInCubic);
      return FadeTransition(
        opacity: CurvedAnimation(parent: anim, curve: Curves.easeOut),
        child: ScaleTransition(scale: Tween<double>(begin: 0.86, end: 1).animate(curved), child: child),
      );
    },
  );
}

class _CareCashAppSheet extends StatefulWidget {
  const _CareCashAppSheet({required this.amount, required this.label, required this.cashAppUrl, required this.cashAppTag, required this.fullTerm, this.onSubmit});

  final Future<Map<String, dynamic>> Function(String code, String proofBase64, String proofMime)? onSubmit;

  final double amount;
  final String label;
  final String cashAppUrl;
  final String cashAppTag;
  final bool fullTerm;

  @override
  State<_CareCashAppSheet> createState() => _CareCashAppSheetState();
}

class _CareCashAppSheetState extends State<_CareCashAppSheet> with SingleTickerProviderStateMixin {
  static const _green = Color(0xFF22E07A);
  static const _deep = Color(0xFF04120C);
  final String _code = (10000 + math.Random().nextInt(89999)).toString();
  late final AnimationController _glow = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat(reverse: true);
  bool _opened = false;
  bool _busy = false;
  bool _copied = false;
  Uint8List? _shot;
  String _shotMime = 'image/jpeg';

  String get _amountText => widget.amount == widget.amount.roundToDouble() ? widget.amount.toStringAsFixed(0) : widget.amount.toStringAsFixed(2);

  @override
  void dispose() {
    _glow.dispose();
    super.dispose();
  }

  Future<void> _copyCode() async {
    await Clipboard.setData(ClipboardData(text: _code));
    HapticFeedback.selectionClick();
    if (mounted) setState(() => _copied = true);
  }

  Future<void> _openCashApp() async {
    final base = widget.cashAppUrl.trim();
    if (base.isEmpty) {
      _snack(context, 'Cash App is not set up yet.', error: true);
      return;
    }
    await Clipboard.setData(ClipboardData(text: _code));
    final url = base.endsWith('/') ? '$base$_amountText' : '$base/$_amountText';
    final ok = await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
    if (mounted) setState(() {
      _opened = ok;
      _copied = true;
    });
  }

  Future<void> _pickShot() async {
    try {
      final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1200, imageQuality: 70);
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (!mounted) return;
      setState(() {
        _shot = bytes;
        _shotMime = file.path.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
      });
    } catch (_) {
      if (mounted) _snack(context, 'Could not open your photos. Try again.', error: true);
    }
  }

  Future<void> _submit() async {
    if (_shot == null || _busy) return;
    setState(() => _busy = true);
    final custom = widget.onSubmit;
    final res = custom != null
        ? await custom(_code, base64Encode(_shot!), _shotMime)
        : await NgmyHouseWorkersApi.planCashApp(
            'basic',
            term: widget.fullTerm,
            code: _code,
            proofBase64: base64Encode(_shot!),
            proofMime: _shotMime,
          );
    if (!mounted) return;
    setState(() => _busy = false);
    if (res['ok'] == true) {
      Navigator.pop(context, res);
    } else {
      _snack(context, (res['error'] ?? 'Could not send the payment.').toString(), error: true);
    }
  }

  /// Each block rises into place one after the other.
  Widget _rise(int i, Widget child) => TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: 1),
        duration: Duration(milliseconds: 420 + i * 110),
        curve: Curves.easeOutCubic,
        builder: (_, t, c) => Opacity(opacity: t, child: Transform.translate(offset: Offset(0, (1 - t) * 22), child: c)),
        child: child,
      );

  Widget _badge(int n, bool done) => AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        width: 30,
        height: 30,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: done ? const LinearGradient(colors: [Color(0xFF22E07A), Color(0xFF0FA958)]) : null,
          color: done ? null : Colors.white.withOpacity(0.08),
          border: Border.all(color: done ? Colors.transparent : Colors.white.withOpacity(0.22)),
          boxShadow: done ? [BoxShadow(color: _green.withOpacity(0.5), blurRadius: 12)] : null,
        ),
        child: AnimatedSwitcher(
          duration: const Duration(milliseconds: 250),
          child: done
              ? const Icon(Icons.check_rounded, key: ValueKey('ok'), size: 18, color: Colors.white)
              : Text('$n', key: ValueKey('n$n'), style: const TextStyle(fontWeight: FontWeight.w900, color: Colors.white70, fontSize: 13)),
        ),
      );

  Widget _stepCard({required int n, required String title, required String body, required bool done, Widget? child}) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 300),
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        color: Colors.white.withOpacity(done ? 0.07 : 0.045),
        border: Border.all(color: done ? _green.withOpacity(0.55) : Colors.white.withOpacity(0.09)),
      ),
      child: Column(children: [
        Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          _badge(n, done),
          const SizedBox(width: 10),
          Flexible(child: Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
        ]),
        const SizedBox(height: 6),
        Text(body, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.62), fontSize: 12.5, height: 1.35)),
        if (child != null) ...[const SizedBox(height: 12), child],
      ]),
    );
  }

  Widget _gradientButton(String text, IconData icon, VoidCallback? onTap, {bool busy = false, List<Color> colors = const [Color(0xFF22E07A), Color(0xFF0FA958)]}) {
    final enabled = onTap != null && !busy;
    return AnimatedOpacity(
      duration: const Duration(milliseconds: 250),
      opacity: onTap == null ? 0.42 : 1,
      child: Container(
        height: 52,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          gradient: LinearGradient(colors: colors),
          boxShadow: onTap == null ? null : [BoxShadow(color: colors.last.withOpacity(0.45), blurRadius: 18, offset: const Offset(0, 7))],
        ),
        child: Material(
          color: Colors.transparent,
          child: InkWell(
            borderRadius: BorderRadius.circular(18),
            onTap: enabled ? onTap : null,
            child: Center(
              child: busy
                  ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white))
                  : Row(mainAxisSize: MainAxisSize.min, children: [
                      Icon(icon, size: 20, color: Colors.white),
                      const SizedBox(width: 8),
                      Flexible(child: Text(text, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15.5))),
                    ]),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final tag = widget.cashAppTag.trim();
    final size = MediaQuery.of(context).size;
    return SafeArea(
      child: Center(
        child: Material(
          color: Colors.transparent,
          child: Container(
            constraints: BoxConstraints(maxWidth: 400, maxHeight: size.height * 0.92),
            margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(32),
              gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF0A2A1C), _deep, Color(0xFF071B2B)]),
              border: Border.all(color: Colors.white.withOpacity(0.1)),
              boxShadow: [BoxShadow(color: _green.withOpacity(0.28), blurRadius: 50, spreadRadius: -8)],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(32),
              child: Stack(children: [
                Positioned(top: -70, right: -50, child: Container(width: 190, height: 190, decoration: BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [_green.withOpacity(0.22), Colors.transparent])))),
                SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(18, 22, 18, 20),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                    _rise(
                      0,
                      Column(children: [
                        Container(
                          width: 58,
                          height: 58,
                          decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [Color(0xFF22E07A), Color(0xFF0FA958)])),
                          child: const Icon(Icons.attach_money_rounded, color: Colors.white, size: 32),
                        ),
                        const SizedBox(height: 10),
                        Text(widget.label.toUpperCase(), textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.6), fontWeight: FontWeight.w800, fontSize: 10.5, letterSpacing: 2)),
                        TweenAnimationBuilder<double>(
                          tween: Tween(begin: 0, end: widget.amount),
                          duration: const Duration(milliseconds: 1100),
                          curve: Curves.easeOutCubic,
                          builder: (_, v, __) => Text('\$${widget.amount == widget.amount.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 46, height: 1.15)),
                        ),
                        if (tag.isNotEmpty) Text('to $tag', style: const TextStyle(color: _green, fontWeight: FontWeight.w800, fontSize: 14)),
                      ]),
                    ),
                    const SizedBox(height: 16),
                    _rise(
                      1,
                      _stepCard(
                        n: 1,
                        title: 'Your code',
                        body: 'Write this code in the Cash App note.',
                        done: _copied,
                        child: AnimatedBuilder(
                          animation: _glow,
                          builder: (_, __) => GestureDetector(
                            onTap: _copyCode,
                            child: Container(
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(16),
                                color: _green.withOpacity(0.1),
                                border: Border.all(color: _green.withOpacity(0.4 + 0.3 * _glow.value)),
                                boxShadow: [BoxShadow(color: _green.withOpacity(0.12 + 0.2 * _glow.value), blurRadius: 18)],
                              ),
                              child: Column(children: [
                                Text(_code, style: const TextStyle(fontSize: 32, fontWeight: FontWeight.w900, color: _green, letterSpacing: 7)),
                                const SizedBox(height: 2),
                                Row(mainAxisSize: MainAxisSize.min, children: [
                                  Icon(_copied ? Icons.check_rounded : Icons.copy_rounded, size: 13, color: Colors.white54),
                                  const SizedBox(width: 5),
                                  Text(_copied ? 'Copied' : 'Tap to copy', style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w700)),
                                ]),
                              ]),
                            ),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 10),
                    _rise(
                      2,
                      _stepCard(
                        n: 2,
                        title: 'Send the money',
                        body: 'Open Cash App and send \$$_amountText with the code in the note.',
                        done: _opened,
                        child: _gradientButton('Open Cash App', Icons.open_in_new_rounded, _openCashApp),
                      ),
                    ),
                    const SizedBox(height: 10),
                    _rise(
                      3,
                      _stepCard(
                        n: 3,
                        title: 'Screenshot your payment',
                        body: 'Take a screenshot that shows the amount and the code, then add it here.',
                        done: _shot != null,
                        child: Column(children: [
                          AnimatedSize(
                            duration: const Duration(milliseconds: 300),
                            curve: Curves.easeOutCubic,
                            child: _shot == null
                                ? const SizedBox(width: double.infinity)
                                : Padding(
                                    padding: const EdgeInsets.only(bottom: 10),
                                    child: ClipRRect(
                                      borderRadius: BorderRadius.circular(16),
                                      child: ConstrainedBox(constraints: const BoxConstraints(maxHeight: 170), child: Image.memory(_shot!, fit: BoxFit.contain)),
                                    ),
                                  ),
                          ),
                          _gradientButton(
                            _shot == null ? 'Add screenshot' : 'Change screenshot',
                            _shot == null ? Icons.add_photo_alternate_rounded : Icons.swap_horiz_rounded,
                            _pickShot,
                            colors: const [Color(0xFF3B82F6), Color(0xFF1D4ED8)],
                          ),
                        ]),
                      ),
                    ),
                    const SizedBox(height: 16),
                    _rise(4, _gradientButton('Submit payment', Icons.arrow_forward_rounded, _shot == null ? null : _submit, busy: _busy)),
                    const SizedBox(height: 4),
                    TextButton(
                      onPressed: _busy ? null : () => Navigator.pop(context),
                      child: Text('Cancel', style: TextStyle(color: Colors.white.withOpacity(0.55), fontWeight: FontWeight.w800)),
                    ),
                  ]),
                ),
              ]),
            ),
          ),
        ),
      ),
    );
  }
}

// ── Rate a worker ───────────────────────────────────────────────────────────

/// A centered, animated rating pop-up: tap the stars, pick what went well, add a note.
Future<({int stars, String review})?> showNgmyRateWorkerDialog(BuildContext context, {required String workerName, String photoUrl = ''}) {
  return showGeneralDialog<({int stars, String review})>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Close',
    barrierColor: Colors.black.withOpacity(0.62),
    transitionDuration: const Duration(milliseconds: 360),
    pageBuilder: (_, __, ___) => _RateWorkerDialog(workerName: workerName, photoUrl: photoUrl),
    transitionBuilder: (_, anim, __, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack, reverseCurve: Curves.easeInCubic);
      return FadeTransition(
        opacity: CurvedAnimation(parent: anim, curve: Curves.easeOut),
        child: ScaleTransition(scale: Tween<double>(begin: 0.86, end: 1).animate(curved), child: child),
      );
    },
  );
}

class _RateWorkerDialog extends StatefulWidget {
  const _RateWorkerDialog({required this.workerName, required this.photoUrl});
  final String workerName;
  final String photoUrl;

  @override
  State<_RateWorkerDialog> createState() => _RateWorkerDialogState();
}

class _RateWorkerDialogState extends State<_RateWorkerDialog> {
  static const _gold = Color(0xFFFBBF24);
  static const _labels = ['Poor', 'Could be better', 'Good', 'Great', 'Excellent'];
  static const _tags = ['On time', 'Polite', 'Clean work', 'Fair price', 'Fast', 'Professional'];
  int _stars = 5;
  final Set<String> _picked = {};
  final TextEditingController _note = TextEditingController();

  @override
  void dispose() {
    _note.dispose();
    super.dispose();
  }

  void _send() {
    final extra = _picked.isEmpty ? '' : '${_picked.join(' · ')}. ';
    Navigator.pop(context, (stars: _stars, review: '$extra${_note.text.trim()}'.trim()));
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final keyboard = MediaQuery.of(context).viewInsets.bottom;
    return SafeArea(
      child: Center(
        child: Material(
          color: Colors.transparent,
          child: Container(
            constraints: BoxConstraints(maxWidth: 380, maxHeight: size.height * 0.92 - keyboard),
            margin: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF2B1B05), Color(0xFF0F0A04), Color(0xFF170F1F)]),
              border: Border.all(color: Colors.white.withOpacity(0.1)),
              boxShadow: [BoxShadow(color: _gold.withOpacity(0.22), blurRadius: 46, spreadRadius: -8)],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(30),
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(20, 24, 20, 14),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  Center(
                    child: Container(
                      width: 74,
                      height: 74,
                      padding: const EdgeInsets.all(3),
                      decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [Color(0xFFFBBF24), Color(0xFFF97316)])),
                      child: ClipOval(
                        child: widget.photoUrl.isEmpty
                            ? Container(color: const Color(0xFF1F2937), child: const Icon(Icons.person_rounded, color: Colors.white70, size: 36))
                            : Image.network(widget.photoUrl, fit: BoxFit.cover, errorBuilder: (_, __, ___) => Container(color: const Color(0xFF1F2937), child: const Icon(Icons.person_rounded, color: Colors.white70, size: 36))),
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Text('How was ${widget.workerName}?', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                  const SizedBox(height: 4),
                  Text('Your rating helps other people choose.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 12.5)),
                  const SizedBox(height: 16),
                  Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                    for (var i = 0; i < 5; i++)
                      GestureDetector(
                        onTap: () {
                          HapticFeedback.selectionClick();
                          setState(() => _stars = i + 1);
                        },
                        child: AnimatedScale(
                          scale: i < _stars ? 1.12 : 0.94,
                          duration: Duration(milliseconds: 220 + i * 40),
                          curve: Curves.easeOutBack,
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 4),
                            child: Icon(
                              i < _stars ? Icons.star_rounded : Icons.star_outline_rounded,
                              size: 42,
                              color: i < _stars ? _gold : Colors.white.withOpacity(0.25),
                              shadows: i < _stars ? [Shadow(color: _gold.withOpacity(0.6), blurRadius: 14)] : null,
                            ),
                          ),
                        ),
                      ),
                  ]),
                  const SizedBox(height: 6),
                  AnimatedSwitcher(
                    duration: const Duration(milliseconds: 220),
                    child: Text(_labels[_stars - 1], key: ValueKey(_stars), textAlign: TextAlign.center, style: const TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 14)),
                  ),
                  const SizedBox(height: 14),
                  Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 7,
                    runSpacing: 7,
                    children: [
                      for (final t in _tags)
                        GestureDetector(
                          onTap: () => setState(() => _picked.contains(t) ? _picked.remove(t) : _picked.add(t)),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(999),
                              color: _picked.contains(t) ? _gold.withOpacity(0.2) : Colors.white.withOpacity(0.06),
                              border: Border.all(color: _picked.contains(t) ? _gold : Colors.white.withOpacity(0.14)),
                            ),
                            child: Text(t, style: TextStyle(color: _picked.contains(t) ? _gold : Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
                          ),
                        ),
                    ],
                  ),
                  const SizedBox(height: 14),
                  TextField(
                    controller: _note,
                    maxLines: 3,
                    style: const TextStyle(color: Colors.white),
                    decoration: InputDecoration(
                      hintText: 'Tell us more (optional)',
                      hintStyle: TextStyle(color: Colors.white.withOpacity(0.35)),
                      filled: true,
                      fillColor: Colors.white.withOpacity(0.06),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                      enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: Colors.white.withOpacity(0.1))),
                      focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: _gold, width: 1.4)),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Container(
                    height: 52,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(18),
                      gradient: const LinearGradient(colors: [Color(0xFFFBBF24), Color(0xFFF97316)]),
                      boxShadow: [BoxShadow(color: const Color(0xFFF97316).withOpacity(0.4), blurRadius: 18, offset: const Offset(0, 7))],
                    ),
                    child: Material(
                      color: Colors.transparent,
                      child: InkWell(
                        borderRadius: BorderRadius.circular(18),
                        onTap: _send,
                        child: const Center(child: Text('Submit rating', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15.5))),
                      ),
                    ),
                  ),
                  TextButton(onPressed: () => Navigator.pop(context), child: Text('Not now', style: TextStyle(color: Colors.white.withOpacity(0.55), fontWeight: FontWeight.w800))),
                ]),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

// ── Admin: one worker's record ──────────────────────────────────────────────

/// Everything an admin needs about one worker: contact, work done this week / month / ever,
/// money, speed, ratings and what clients wrote.
Future<void> showNgmyAdminWorkerStats(BuildContext context, {required String email, String name = '', String photoUrl = ''}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _AdminWorkerStatsSheet(email: email, name: name, photoUrl: photoUrl),
  );
}

class _AdminWorkerStatsSheet extends StatefulWidget {
  const _AdminWorkerStatsSheet({required this.email, required this.name, required this.photoUrl});
  final String email;
  final String name;
  final String photoUrl;

  @override
  State<_AdminWorkerStatsSheet> createState() => _AdminWorkerStatsSheetState();
}

class _AdminWorkerStatsSheetState extends State<_AdminWorkerStatsSheet> {
  Map<String, dynamic>? _data;
  String? _error;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final res = await NgmyHouseWorkersApi.adminWorkerStats(widget.email);
    if (!mounted) return;
    setState(() {
      if (res['ok'] == true) {
        _data = res;
      } else {
        _error = (res['error'] ?? 'Could not load this worker.').toString();
      }
    });
  }

  Widget _tile(_HwColors c, String value, String label, Color color) => Expanded(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 6),
          decoration: BoxDecoration(
            color: color.withOpacity(0.1),
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: color.withOpacity(0.35)),
          ),
          child: Column(children: [
            FittedBox(fit: BoxFit.scaleDown, child: Text(value, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: c.ink))),
            const SizedBox(height: 2),
            Text(label, textAlign: TextAlign.center, style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w800, color: c.muted)),
          ]),
        ),
      );

  Widget _row(_HwColors c, String k, String v) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 5),
        child: Row(children: [
          Expanded(child: Text(k, style: TextStyle(color: c.muted, fontSize: 12.5))),
          Flexible(child: Text(v, textAlign: TextAlign.right, style: TextStyle(color: c.ink, fontWeight: FontWeight.w800, fontSize: 13))),
        ]),
      );

  Widget _heading(_HwColors c, String t) => Padding(
        padding: const EdgeInsets.only(top: 14, bottom: 8),
        child: Text(t.toUpperCase(), style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1.3, color: c.muted)),
      );

  @override
  Widget build(BuildContext context) {
    final c = _HwColors(context);
    final d = _data;
    final w = d?['worker'] is Map ? Map<String, dynamic>.from(d!['worker'] as Map) : const <String, dynamic>{};
    final s = d?['stats'] is Map ? Map<String, dynamic>.from(d!['stats'] as Map) : const <String, dynamic>{};
    final dist = s['distribution'] is Map ? Map<String, dynamic>.from(s['distribution'] as Map) : const <String, dynamic>{};
    final ratingCount = (s['ratingCount'] as num?)?.toInt() ?? 0;
    final rating = (s['rating'] as num?)?.toDouble() ?? 0;
    final reviews = _maps(d?['reviews']);
    final phone = (w['phone'] ?? '').toString();
    return _sheetFrame(
      context,
      title: 'Worker record',
      icon: Icons.badge_rounded,
      child: d == null
          ? Padding(
              padding: const EdgeInsets.all(40),
              child: Center(child: _error != null ? Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted)) : const CircularProgressIndicator()),
            )
          : SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(16, 4, 16, 18),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Row(children: [
                  NgmyRingAvatar(url: (w['photoUrl'] ?? widget.photoUrl).toString(), name: (w['name'] ?? widget.name).toString(), size: 64),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text((w['name'] ?? widget.name).toString(), style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: c.ink)),
                      Text([w['city'], w['state']].where((e) => (e ?? '').toString().isNotEmpty).join(', '), style: TextStyle(fontSize: 12, color: c.muted)),
                      const SizedBox(height: 3),
                      Row(children: [
                        NgmyStars(rating: rating, size: 15),
                        const SizedBox(width: 6),
                        Text(ratingCount == 0 ? 'No ratings yet' : '${rating.toStringAsFixed(1)} (${ratingCount})', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: c.ink)),
                      ]),
                    ]),
                  ),
                ]),
                _heading(c, 'Work done'),
                Row(children: [
                  _tile(c, '${s['week'] ?? 0}', 'This week', _kHwAccent),
                  const SizedBox(width: 8),
                  _tile(c, '${s['month'] ?? 0}', 'This month', _kHwGreen),
                  const SizedBox(width: 8),
                  _tile(c, '${s['last30'] ?? 0}', 'Last 30 days', _kCareTeal),
                  const SizedBox(width: 8),
                  _tile(c, '${s['done'] ?? 0}', 'All time', _kJobOrange),
                ]),
                const SizedBox(height: 8),
                _row(c, 'Working on now', '${s['inProgress'] ?? 0}'),
                _row(c, 'Cancelled', '${s['cancelled'] ?? 0}'),
                _row(c, 'Last job finished', (s['lastDone'] ?? '').toString().isEmpty ? 'None yet' : _careDate(s['lastDone'])),
                _row(c, 'Average time to finish', (s['avgHours'] as num? ?? 0) == 0 ? '—' : '${s['avgHours']} hours'),
                _heading(c, 'Money'),
                _row(c, 'Earned this month', _money(s['earnedMonth'])),
                _row(c, 'Earned all time', _money(s['earned'])),
                _heading(c, 'Contact'),
                _row(c, 'Phone', phone.isEmpty ? '—' : phone),
                _row(c, 'Email', (w['email'] ?? '').toString()),
                _row(c, 'Status', (w['status'] ?? '').toString()),
                _row(c, 'Joined', _careDate(w['createdAt'])),
                if (phone.isNotEmpty) ...[
                  const SizedBox(height: 8),
                  OutlinedButton.icon(
                    onPressed: () => ngmyOpenWhatsApp(context, phone, 'Hi ${w['name']}, this is NGMY House & Insurance.'),
                    icon: const Icon(Icons.chat_rounded, size: 18),
                    label: const Text('WhatsApp the worker'),
                  ),
                ],
                _heading(c, 'Ratings'),
                if (ratingCount == 0)
                  Text('Nobody has rated this worker yet.', style: TextStyle(color: c.muted, fontSize: 12.5))
                else
                  for (var star = 5; star >= 1; star--)
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 3),
                      child: Row(children: [
                        SizedBox(width: 16, child: Text('$star', style: TextStyle(fontWeight: FontWeight.w800, color: c.ink, fontSize: 12))),
                        const Icon(Icons.star_rounded, size: 13, color: Color(0xFFF59E0B)),
                        const SizedBox(width: 8),
                        Expanded(
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(6),
                            child: LinearProgressIndicator(
                              minHeight: 8,
                              value: ratingCount == 0 ? 0 : ((dist['$star'] as num?) ?? 0) / ratingCount,
                              backgroundColor: c.line,
                              color: const Color(0xFFF59E0B),
                            ),
                          ),
                        ),
                        const SizedBox(width: 8),
                        SizedBox(width: 24, child: Text('${dist['$star'] ?? 0}', textAlign: TextAlign.right, style: TextStyle(color: c.muted, fontSize: 12))),
                      ]),
                    ),
                if (reviews.isNotEmpty) ...[
                  _heading(c, 'What clients wrote'),
                  for (final r in reviews)
                    Container(
                      margin: const EdgeInsets.only(bottom: 8),
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(color: c.tile, borderRadius: BorderRadius.circular(12), border: Border.all(color: c.line)),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Row(children: [
                          NgmyStars(rating: ((r['rating'] as num?) ?? 0).toDouble(), size: 13),
                          const Spacer(),
                          Text('${r['client'] ?? ''} · ${_careDate(r['at'])}', style: TextStyle(fontSize: 11, color: c.muted)),
                        ]),
                        if ((r['review'] ?? '').toString().isNotEmpty) ...[
                          const SizedBox(height: 4),
                          Text((r['review'] ?? '').toString(), style: TextStyle(fontSize: 12.5, color: c.ink, height: 1.35)),
                        ],
                      ]),
                    ),
                ],
              ]),
            ),
    );
  }
}
