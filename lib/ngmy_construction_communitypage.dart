import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_construction_community.dart';
import 'ngmy_construction_home.dart';
import 'ngmy_construction_homepage.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_construction_tour.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THE COMMUNITY PAGE: calls for help, the people, the hospital and the shop.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyCommunityPage extends StatefulWidget {
  const NgmyCommunityPage({super.key});

  @override
  State<NgmyCommunityPage> createState() => _NgmyCommunityPageState();
}

class _NgmyCommunityPageState extends State<NgmyCommunityPage> {
  Community? c;
  late HomeProject home;
  Timer? _tick;
  String tab = 'calls';
  String? toast;
  Timer? _toastTimer;
  int _beat = 0;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final saved = await Community.loadJson();
    if (!mounted) return;
    Community made;
    if (saved != null) {
      final seed = (saved['seed'] as num?)?.toInt() ?? 1;
      // The same house as before: the one that is open now, or the saved one with its repairs.
      if (HomeProject.session?.seed == seed) {
        home = HomeProject.session!;
      } else {
        home = HomeProject.session = HomeProject(seed: seed);
        Community.applyHouse(home, saved);
      }
      made = Community.fromJson(saved);
      // A little time passes while the app is closed, but gently: nobody dies while you are away.
      final away = DateTime.now().millisecondsSinceEpoch - ((saved['at'] as num?)?.toInt() ?? DateTime.now().millisecondsSinceEpoch);
      var secs = (away / 1000 * 0.15).clamp(0.0, 90.0);
      while (secs > 0) {
        final step = secs > 5 ? 5.0 : secs;
        made.advance(step, home);
        secs -= step;
      }
    } else {
      home = HomeProject.session ??= HomeProject(seed: DateTime.now().millisecondsSinceEpoch % 100000);
      made = Community(houseSeed: home.seed, seed: home.seed);
      made.syncCalls(home);
    }
    Community.active = made;
    setState(() => c = made);
    _tick = Timer.periodic(const Duration(seconds: 1), (_) => _step());
  }

  void _step() {
    final cm = c;
    if (cm == null || !mounted) return;
    final before = cm.log.isEmpty ? '' : cm.log.first;
    cm.advance(1, home);
    if (cm.log.isNotEmpty && cm.log.first != before) _say(cm.log.first);
    if (++_beat % 8 == 0) cm.save(home);
    setState(() {});
  }

  @override
  void dispose() {
    _tick?.cancel();
    _toastTimer?.cancel();
    c?.save(home);
    super.dispose();
  }

  void _say(String t) {
    _toastTimer?.cancel();
    setState(() => toast = t);
    _toastTimer = Timer(const Duration(seconds: 7), () {
      if (mounted) setState(() => toast = null);
    });
  }

  Future<void> _goFix(HelpCall call) async {
    final info = kResidents[call.resident];
    final roomId = call.kind == 'power' ? info.room : (info.bath >= 0 ? info.bath : info.room);
    home.current = roomId;
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => const NgmyHousePage()));
    if (!mounted) return;
    c?.syncCalls(home);
    c?.save(home);
    setState(() {});
  }

  Future<void> _visit(Resident p) async {
    home.current = p.info.room;
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => const NgmyHousePage()));
    if (!mounted) return;
    c?.syncCalls(home);
    setState(() {});
  }

  // ── Pieces ──

  Widget _pill(String t, Color col) => Container(padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 6), decoration: BoxDecoration(color: col.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(14), border: Border.all(color: col.withValues(alpha: 0.7))), child: Text(t, style: TextStyle(color: col, fontWeight: FontWeight.w900, fontSize: 12.5)));

  Widget _bar(String label, double v, Color col) => Padding(
        padding: const EdgeInsets.only(bottom: 4),
        child: Row(children: [
          SizedBox(width: 62, child: Text(label, style: const TextStyle(color: Colors.white60, fontSize: 11.5))),
          Expanded(
            child: ClipRRect(
              borderRadius: BorderRadius.circular(6),
              child: LinearProgressIndicator(value: (v / 100).clamp(0.0, 1.0), minHeight: 8, backgroundColor: Colors.white12, valueColor: AlwaysStoppedAnimation(col)),
            ),
          ),
        ]),
      );

  Widget _btn(String label, VoidCallback? f, {Color col = kConAmber}) => GestureDetector(
        onTap: f,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
          decoration: BoxDecoration(color: f == null ? Colors.white10 : col.withValues(alpha: 0.22), borderRadius: BorderRadius.circular(12), border: Border.all(color: f == null ? Colors.white24 : col)),
          child: Text(label, style: TextStyle(color: f == null ? Colors.white38 : col, fontWeight: FontWeight.w900, fontSize: 12.5)),
        ),
      );

  Widget _card({required Widget child, Color col = Colors.white24}) => Container(
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [col.withValues(alpha: 0.1), kConPanel]), borderRadius: BorderRadius.circular(18), border: Border.all(color: col.withValues(alpha: 0.5))),
        child: child,
      );

  Widget _tab(String id, String label, {int badge = 0}) {
    final on = tab == id;
    return Expanded(
      child: GestureDetector(
        onTap: () => setState(() => tab = id),
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 3),
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(color: on ? kConAmber.withValues(alpha: 0.22) : Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(14), border: Border.all(color: on ? kConAmber : Colors.white24, width: on ? 2 : 1)),
          child: Center(child: Text(badge > 0 ? '$label ($badge)' : label, style: TextStyle(color: on ? kConAmber : Colors.white70, fontWeight: FontWeight.w900, fontSize: 12.5))),
        ),
      ),
    );
  }

  // ── The four tabs ──

  Widget _calls(Community cm) {
    if (cm.calls.isEmpty) {
      return Padding(
        padding: const EdgeInsets.all(24),
        child: Column(children: const [
          Text('✨', style: TextStyle(fontSize: 44)),
          SizedBox(height: 8),
          Text('Nobody needs help right now.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
          SizedBox(height: 4),
          Text('Everybody\'s wiring and plumbing works. Keep an eye on food and health: things break when you least expect it.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white60, fontSize: 13, height: 1.4)),
        ]),
      );
    }
    return Column(children: [
      for (final call in cm.calls)
        _card(
          col: call.kind == 'power' ? const Color(0xFFFACC15) : const Color(0xFF60A5FA),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              _Face(style: kResidents[call.resident].style, size: 44),
              const SizedBox(width: 10),
              Expanded(child: Text(kResidents[call.resident].name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
              _pill('${call.kind == 'power' ? '⚡ Power' : '🚰 Leak'}  +${call.reward}', call.kind == 'power' ? const Color(0xFFFACC15) : const Color(0xFF60A5FA)),
            ]),
            const SizedBox(height: 8),
            Text('"${call.message}"', style: const TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.4, fontStyle: FontStyle.italic)),
            const SizedBox(height: 10),
            Align(alignment: Alignment.centerRight, child: _btn('🔧 Go and fix it', () => _goFix(call))),
          ]),
        ),
    ]);
  }

  Widget _people(Community cm) {
    return Column(children: [
      for (final p in cm.residents)
        _card(
          col: !p.alive ? Colors.white24 : (p.mood == 'fine' ? const Color(0xFF4ADE80) : const Color(0xFFF87171)),
          child: Opacity(
            opacity: p.alive ? 1 : 0.5,
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Row(children: [
                _Face(style: p.info.style, size: 50),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('${p.name}  ${p.badge}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                    Text(p.info.about, style: const TextStyle(color: Colors.white54, fontSize: 11.5)),
                    Text('Now: ${p.mood}', style: TextStyle(color: p.mood == 'fine' ? const Color(0xFF86EFAC) : const Color(0xFFFCA5A5), fontWeight: FontWeight.w800, fontSize: 12.5)),
                  ]),
                ),
              ]),
              const SizedBox(height: 8),
              _bar('Food', 100 - p.hunger, const Color(0xFFFB923C)),
              _bar('Health', p.health, const Color(0xFF4ADE80)),
              _bar('Home', p.comfort, const Color(0xFF60A5FA)),
              if (p.alive) ...[
                const SizedBox(height: 6),
                Wrap(spacing: 8, runSpacing: 8, children: [
                  _btn('🍞 Feed', () => _say(cm.feed(p))),
                  _btn('💊 Medicine', p.sick ? () => _say(cm.giveMedicine(p)) : null, col: const Color(0xFFA78BFA)),
                  _btn('🏥 Hospital', p.inBed >= 0 ? null : () => _say(cm.admit(p)), col: const Color(0xFFF87171)),
                  _btn('🏠 Visit', () => _visit(p), col: const Color(0xFF67E8F9)),
                ]),
              ],
            ]),
          ),
        ),
    ]);
  }

  Widget _hospital(Community cm) {
    return Column(children: [
      const Padding(
        padding: EdgeInsets.fromLTRB(8, 4, 8, 12),
        child: Text('Sick people can stay in a hospital bed. Treat each patient before their care runs out, and they go home better.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.4)),
      ),
      for (var i = 0; i < cm.beds.length; i++)
        _card(
          col: cm.beds[i].resident < 0 ? Colors.white24 : const Color(0xFFF87171),
          child: cm.beds[i].resident < 0
              ? Row(children: [const Text('🛏️', style: TextStyle(fontSize: 26)), const SizedBox(width: 10), Text('Bed ${i + 1}: empty', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, fontSize: 14))])
              : Builder(builder: (_) {
                  final b = cm.beds[i];
                  final p = cm.residents[b.resident];
                  return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Row(children: [
                      _Face(style: p.info.style, size: 44),
                      const SizedBox(width: 10),
                      Expanded(child: Text('Bed ${i + 1}: ${p.name}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
                      _btn('💉 Treat', () => _say(cm.treat(i)), col: const Color(0xFFF87171)),
                    ]),
                    const SizedBox(height: 8),
                    _bar('Care', b.care, b.care < 30 ? const Color(0xFFEF4444) : const Color(0xFF38BDF8)),
                    _bar('Getting better', b.heal, const Color(0xFF4ADE80)),
                  ]);
                }),
        ),
    ]);
  }

  Widget _shop(Community cm) {
    return Column(children: [
      _card(
        col: const Color(0xFFFB923C),
        child: Row(children: [
          const Text('🍞', style: TextStyle(fontSize: 30)),
          const SizedBox(width: 10),
          const Expanded(child: Text('5 portions of food\n10 points', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14, height: 1.3))),
          _btn('Buy', () => _say(cm.buy('food'))),
        ]),
      ),
      _card(
        col: const Color(0xFFA78BFA),
        child: Row(children: [
          const Text('💊', style: TextStyle(fontSize: 30)),
          const SizedBox(width: 10),
          const Expanded(child: Text('3 doses of medicine\n12 points', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14, height: 1.3))),
          _btn('Buy', () => _say(cm.buy('medicine')), col: const Color(0xFFA78BFA)),
        ]),
      ),
      _card(
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('How you are doing', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
          const SizedBox(height: 6),
          Text('Calls answered: ${cm.served}\nPatients sent home better: ${cm.saved}\nPeople lost: ${cm.deaths}', style: const TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.5)),
          if (cm.everyoneGone) ...[
            const SizedBox(height: 10),
            _btn('Start a new community', () async {
              await Community.forget();
              HomeProject.session = null;
              if (!mounted) return;
              _tick?.cancel();
              Community.active = null;
              setState(() => c = null);
              _load();
            }),
          ],
        ]),
      ),
    ]);
  }

  @override
  Widget build(BuildContext context) {
    final cm = c;
    return Scaffold(
      backgroundColor: kStudioBg,
      body: SafeArea(
        child: cm == null
            ? const Center(child: CircularProgressIndicator())
            : Column(children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(4, 6, 12, 4),
                  child: Row(children: [
                    IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
                    const Expanded(child: Center(child: Text('🏘 Community', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)))),
                    _pill('⭐ ${cm.points}', kConAmber),
                  ]),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(12, 0, 12, 8),
                  child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [_pill('🍞 ${cm.food}', const Color(0xFFFB923C)), const SizedBox(width: 8), _pill('💊 ${cm.medicine}', const Color(0xFFA78BFA)), const SizedBox(width: 8), _pill('🏥 ${cm.beds.where((b) => b.resident >= 0).length}/${cm.beds.length}', const Color(0xFFF87171))]),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 9),
                  child: Row(children: [_tab('calls', '📞 Calls', badge: cm.calls.length), _tab('people', '👨‍👩‍👧 People'), _tab('hospital', '🏥 Hospital'), _tab('shop', '🛒 Shop')]),
                ),
                const SizedBox(height: 8),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(12, 0, 12, 16),
                    children: [
                      switch (tab) { 'people' => _people(cm), 'hospital' => _hospital(cm), 'shop' => _shop(cm), _ => _calls(cm) },
                    ],
                  ),
                ),
                if (toast != null)
                  Container(
                    width: double.infinity,
                    margin: const EdgeInsets.fromLTRB(12, 0, 12, 10),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(color: const Color(0xFF14532D).withValues(alpha: 0.96), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFF4ADE80))),
                    child: Text(toast!, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13, height: 1.35)),
                  ),
              ]),
      ),
    );
  }
}

/// A little face for a resident: skin, hair, shirt collar, eyes and a smile.
class _Face extends StatelessWidget {
  const _Face({required this.style, this.size = 44});
  final PersonStyle style;
  final double size;

  @override
  Widget build(BuildContext context) => SizedBox(width: size, height: size, child: CustomPaint(painter: _FacePainter(style)));
}

class _FacePainter extends CustomPainter {
  _FacePainter(this.s);
  final PersonStyle s;

  @override
  void paint(Canvas c, Size z) {
    final w = z.width;
    c.drawCircle(Offset(w / 2, w / 2), w / 2, Paint()..color = Colors.white10);
    c.save();
    c.clipPath(Path()..addOval(Rect.fromLTWH(0, 0, w, w)));
    c.drawOval(Rect.fromLTWH(w * 0.1, w * 0.78, w * 0.8, w * 0.5), Paint()..color = s.shirt);
    c.drawOval(Rect.fromLTWH(w * 0.27, w * 0.16, w * 0.46, w * 0.56), Paint()..color = s.skin);
    c.drawArc(Rect.fromLTWH(w * 0.24, w * 0.1, w * 0.52, w * 0.5), 3.14, 3.14, true, Paint()..color = s.hair);
    c.drawCircle(Offset(w * 0.42, w * 0.44), w * 0.035, Paint()..color = const Color(0xFF15171C));
    c.drawCircle(Offset(w * 0.58, w * 0.44), w * 0.035, Paint()..color = const Color(0xFF15171C));
    c.drawArc(Rect.fromLTWH(w * 0.4, w * 0.5, w * 0.2, w * 0.12), 0.2, 2.7, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.4
      ..color = const Color(0xFF7F1D1D));
    c.restore();
  }

  @override
  bool shouldRepaint(covariant _FacePainter old) => false;
}
