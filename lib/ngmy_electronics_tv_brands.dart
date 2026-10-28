import 'package:flutter/material.dart';

import 'ngmy_electronics_screens.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The apps screen of each TV brand, drawn the way that brand draws its own home screen:
// Samsung (Smart Hub bar at the bottom), LG (webOS cards), Sony (Google TV rows), Apple TV (big centred
// icons that lift when focused) and Bang & Olufsen (quiet, warm, text first).
// ═════════════════════════════════════════════════════════════════════════════

/// The brand a TV kind belongs to: samsung, lg, sony, apple or bo.
String tvBrandOf(String kind) => switch (kind) {
      'lgtv' => 'lg',
      'sonytv' => 'sony',
      'appletv' => 'apple',
      'bangtv' => 'bo',
      _ => 'samsung',
    };

/// The accent colour of a brand's remote and screen frame.
Color tvBrandAccent(String kind) => switch (tvBrandOf(kind)) {
      'lg' => const Color(0xFFE11D48),
      'sony' => const Color(0xFF9CA3AF),
      'apple' => const Color(0xFFE5E7EB),
      'bo' => const Color(0xFFD6B77B),
      _ => const Color(0xFF38BDF8),
    };

class NgmyTvHome extends StatefulWidget {
  const NgmyTvHome({super.key, required this.kind, required this.onOpen, required this.onClose});
  final String kind;
  final void Function(int app) onOpen;
  final VoidCallback onClose;

  @override
  State<NgmyTvHome> createState() => _NgmyTvHomeState();
}

class _NgmyTvHomeState extends State<NgmyTvHome> {
  int _focus = 0;

  void _tap(int k) {
    setState(() => _focus = k);
    widget.onOpen(k);
  }

  @override
  Widget build(BuildContext context) {
    return switch (tvBrandOf(widget.kind)) {
      'lg' => _lg(),
      'sony' => _sony(),
      'apple' => _apple(),
      'bo' => _bo(),
      _ => _samsung(),
    };
  }

  String get _clock {
    final n = DateTime.now();
    return '${n.hour.toString().padLeft(2, '0')}:${n.minute.toString().padLeft(2, '0')}';
  }

  Widget _tile(int k, {required double w, required double h, double radius = 10, bool label = false, Color? ring, double fs = 22}) {
    final a = kNgmyApps[k];
    final on = _focus == k;
    return GestureDetector(
      onTap: () => _tap(k),
      child: Container(
        width: w,
        height: h,
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [a.color, Color.lerp(a.color, Colors.black, 0.55)!]),
          borderRadius: BorderRadius.circular(radius),
          border: Border.all(color: on ? (ring ?? Colors.white) : Colors.transparent, width: on ? 2.5 : 0),
        ),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Text(a.emoji, style: TextStyle(fontSize: fs)),
          if (label) Padding(padding: const EdgeInsets.only(top: 2), child: Text(a.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w700))),
        ]),
      ),
    );
  }

  // ── Samsung: Smart Hub. A dark screen with one strip along the bottom, the focused app is lifted and named. ──
  Widget _samsung() {
    return GestureDetector(
      onTap: widget.onClose,
      child: Container(
        decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF05080F), Color(0xFF0B1A33)])),
        padding: const EdgeInsets.fromLTRB(10, 6, 10, 0),
        child: Column(children: [
          Row(children: [
            const Text('SAMSUNG', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 2)),
            const SizedBox(width: 8),
            const Text('NGMY Apps', style: TextStyle(color: Colors.white54, fontSize: 9.5, fontWeight: FontWeight.w700)),
            const Spacer(),
            const Icon(Icons.search_rounded, color: Colors.white70, size: 13),
            const SizedBox(width: 8),
            const Icon(Icons.settings_rounded, color: Colors.white70, size: 13),
            const SizedBox(width: 8),
            Text(_clock, style: const TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.w700)),
          ]),
          const Spacer(),
          Align(alignment: Alignment.centerLeft, child: Text(kNgmyApps[_focus].name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13))),
          Align(alignment: Alignment.centerLeft, child: Text(kNgmyApps[_focus].blurb, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white60, fontSize: 9.5))),
          const SizedBox(height: 6),
          Container(
            padding: const EdgeInsets.fromLTRB(6, 8, 6, 8),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: const BorderRadius.vertical(top: Radius.circular(14))),
            child: Row(children: [
              for (final ic in const [Icons.home_rounded, Icons.apps_rounded])
                Container(width: 34, height: 34, margin: const EdgeInsets.only(right: 5), decoration: BoxDecoration(color: Colors.white12, borderRadius: BorderRadius.circular(8)), child: Icon(ic, color: Colors.white70, size: 17)),
              Expanded(
                child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(children: [
                    for (var k = 0; k < kNgmyApps.length; k++)
                      Padding(
                        padding: const EdgeInsets.only(right: 5),
                        child: AnimatedScale(scale: _focus == k ? 1.12 : 1, duration: const Duration(milliseconds: 150), child: _tile(k, w: 52, h: 44, radius: 8, label: true, ring: const Color(0xFF38BDF8), fs: 14)),
                      ),
                  ]),
                ),
              ),
            ]),
          ),
        ]),
      ),
    );
  }

  // ── LG: webOS. A dark launcher bar with wide cards and a rose-red focus. ──
  Widget _lg() {
    return GestureDetector(
      onTap: widget.onClose,
      child: Container(
        decoration: const BoxDecoration(gradient: RadialGradient(center: Alignment(0.5, -0.6), radius: 1.3, colors: [Color(0xFF3A0E1C), Color(0xFF0A0A0A)])),
        padding: const EdgeInsets.fromLTRB(12, 6, 12, 8),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Container(padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2), decoration: BoxDecoration(color: const Color(0xFFE11D48), borderRadius: BorderRadius.circular(10)), child: const Text('LG', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10))),
            const SizedBox(width: 6),
            const Text('Home', style: TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.w700)),
            const Spacer(),
            Text(_clock, style: const TextStyle(color: Colors.white70, fontSize: 10)),
          ]),
          const Spacer(),
          SizedBox(
            height: 62,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              itemCount: kNgmyApps.length,
              separatorBuilder: (_, __) => const SizedBox(width: 6),
              itemBuilder: (_, k) => Column(mainAxisSize: MainAxisSize.min, children: [
                AnimatedScale(scale: _focus == k ? 1.1 : 1, duration: const Duration(milliseconds: 150), child: _tile(k, w: 80, h: 46, radius: 6, ring: Colors.white, fs: 18)),
                if (_focus == k) Padding(padding: const EdgeInsets.only(top: 2), child: Text(kNgmyApps[k].name, style: const TextStyle(color: Colors.white, fontSize: 8.5, fontWeight: FontWeight.w700))),
              ]),
            ),
          ),
        ]),
      ),
    );
  }

  // ── Sony: Google TV. A top bar, a big picture card for what is focused, then rows of tiles. ──
  Widget _sony() {
    final a = kNgmyApps[_focus];
    return GestureDetector(
      onTap: widget.onClose,
      child: Container(
        color: const Color(0xFF16181C),
        padding: const EdgeInsets.fromLTRB(10, 6, 10, 6),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Container(padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2), decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(12)), child: const Row(children: [Icon(Icons.search_rounded, color: Colors.white70, size: 11), SizedBox(width: 3), Text('Search', style: TextStyle(color: Colors.white60, fontSize: 9))])),
            const SizedBox(width: 8),
            for (final t in const ['For you', 'Apps', 'Library']) Padding(padding: const EdgeInsets.only(right: 8), child: Text(t, style: TextStyle(color: t == 'Apps' ? Colors.white : Colors.white54, fontWeight: FontWeight.w700, fontSize: 9.5))),
            const Spacer(),
            Text(_clock, style: const TextStyle(color: Colors.white70, fontSize: 9.5)),
          ]),
          const SizedBox(height: 5),
          Expanded(
            child: Row(children: [
              Expanded(
                flex: 5,
                child: Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(gradient: LinearGradient(colors: [a.color, Color.lerp(a.color, Colors.black, 0.7)!]), borderRadius: BorderRadius.circular(10)),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.end, children: [
                    Text(a.emoji, style: const TextStyle(fontSize: 22)),
                    Text(a.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
                    Text(a.blurb, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white70, fontSize: 8.5)),
                    const SizedBox(height: 3),
                    GestureDetector(onTap: () => widget.onOpen(_focus), child: Container(padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2), decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(10)), child: const Text('Open', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w800, fontSize: 9)))),
                  ]),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                flex: 6,
                child: GridView.builder(
                  padding: EdgeInsets.zero,
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 5, crossAxisSpacing: 5, childAspectRatio: 1.35),
                  itemCount: kNgmyApps.length,
                  itemBuilder: (_, k) => _tile(k, w: double.infinity, h: double.infinity, radius: 8, label: true, ring: Colors.white, fs: 15),
                ),
              ),
            ]),
          ),
        ]),
      ),
    );
  }

  // ── Apple TV: tvOS. A soft wallpaper, a clean dock of big rounded icons; the focused one rises. ──
  Widget _apple() {
    return GestureDetector(
      onTap: widget.onClose,
      child: Container(
        decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF6D7A93), Color(0xFF2B2E44), Color(0xFF7B4B6A)])),
        padding: const EdgeInsets.fromLTRB(10, 6, 10, 8),
        child: Column(children: [
          Row(children: [
            const Icon(Icons.apple_rounded, color: Colors.white, size: 13),
            const SizedBox(width: 3),
            const Text('tv', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11)),
            const Spacer(),
            Text(_clock, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 10)),
          ]),
          const Spacer(),
          SizedBox(
            height: 68,
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
                for (var k = 0; k < kNgmyApps.length; k++)
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: AnimatedContainer(
                      duration: const Duration(milliseconds: 180),
                      margin: EdgeInsets.only(bottom: _focus == k ? 6 : 0),
                      decoration: BoxDecoration(boxShadow: _focus == k ? const [BoxShadow(color: Colors.black54, blurRadius: 14, offset: Offset(0, 8))] : const []),
                      child: AnimatedScale(scale: _focus == k ? 1.18 : 1, duration: const Duration(milliseconds: 180), child: _tile(k, w: 44, h: 44, radius: 12, ring: Colors.white, fs: 20)),
                    ),
                  ),
              ]),
            ),
          ),
          const SizedBox(height: 4),
          Text(kNgmyApps[_focus].name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 11)),
        ]),
      ),
    );
  }

  // ── Bang & Olufsen: Beovision. Warm, quiet, thin lines, the names are the menu. ──
  Widget _bo() {
    return GestureDetector(
      onTap: widget.onClose,
      child: Container(
        color: const Color(0xFF1A1714),
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 8),
        child: Row(children: [
          Expanded(
            flex: 4,
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('BANG & OLUFSEN', style: TextStyle(color: Color(0xFFD6B77B), fontSize: 8, letterSpacing: 3, fontWeight: FontWeight.w600)),
              const Spacer(),
              Text(kNgmyApps[_focus].emoji, style: const TextStyle(fontSize: 26)),
              const SizedBox(height: 4),
              Text(kNgmyApps[_focus].name, style: const TextStyle(color: Color(0xFFF1E8D8), fontSize: 15, fontFamily: 'serif', fontWeight: FontWeight.w300)),
              const SizedBox(height: 2),
              Text(kNgmyApps[_focus].blurb, style: const TextStyle(color: Color(0xFFA89F90), fontSize: 8.5)),
              const SizedBox(height: 6),
              GestureDetector(onTap: () => widget.onOpen(_focus), child: Container(padding: const EdgeInsets.only(bottom: 1), decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFD6B77B)))), child: const Text('OPEN', style: TextStyle(color: Color(0xFFD6B77B), fontSize: 8.5, letterSpacing: 2)))),
              const Spacer(),
            ]),
          ),
          Container(width: 0.6, color: const Color(0xFF4A443C), margin: const EdgeInsets.symmetric(horizontal: 12)),
          Expanded(
            flex: 3,
            child: ListView(children: [
              for (var k = 0; k < kNgmyApps.length; k++)
                GestureDetector(
                  onTap: () => _tap(k),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 3),
                    child: Text(kNgmyApps[k].name, style: TextStyle(color: _focus == k ? const Color(0xFFD6B77B) : const Color(0xFFA89F90), fontSize: _focus == k ? 12 : 10.5, fontFamily: 'serif', fontWeight: FontWeight.w300)),
                  ),
                ),
            ]),
          ),
        ]),
      ),
    );
  }
}
