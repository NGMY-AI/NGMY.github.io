import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_vphone_extra.dart';
import 'ngmy_vphone_link.dart';
import 'ngmy_vphone_wall.dart';
import 'ngmy_vphone_player.dart';

// ═════════════════════════════════════════════════════════════════════════════
// A virtual phone: a whole phone of its own inside the app, separate from the device that is running it.
// It has a lock screen, a home screen and its own apps (Videos, Web, Notes, Calculator, Clock, Settings).
// In Videos you paste the link of any video (YouTube, Vimeo or a video file) and it plays on the virtual phone.
// ═════════════════════════════════════════════════════════════════════════════

Future<void> showNgmyVirtualPhone(BuildContext context) => Navigator.of(context).push<void>(MaterialPageRoute<void>(builder: (_) => const NgmyVirtualPhonePage()));

const String _kPrefs = 'ngmy_vphone_v1';

/// How far from its first size to the full screen the phone is at each step.
const List<double> kPhoneSizeSteps = [0.0, 0.4, 0.75, 1.0];

class PhoneAppDef {
  const PhoneAppDef(this.id, this.label, this.icon, this.colors);
  final String id, label;
  final IconData icon;
  final List<Color> colors;
}

const List<PhoneAppDef> kPhoneApps = [
  PhoneAppDef('videos', 'Videos', Icons.play_circle_fill_rounded, [Color(0xFFEF4444), Color(0xFFF97316)]),
  PhoneAppDef('web', 'Web', Icons.public_rounded, [Color(0xFF0EA5E9), Color(0xFF6366F1)]),
  PhoneAppDef('store', 'App Store', Icons.shopping_bag_rounded, [Color(0xFF3B82F6), Color(0xFF1D4ED8)]),
  PhoneAppDef('settings', 'Settings', Icons.settings_rounded, [Color(0xFF94A3B8), Color(0xFF64748B)]),
];

const List<List<Color>> kPhoneWallpapers = [
  [Color(0xFF1E1B4B), Color(0xFF7C3AED), Color(0xFFEC4899)],
  [Color(0xFF0C4A6E), Color(0xFF0EA5E9), Color(0xFF5EEAD4)],
  [Color(0xFF052E16), Color(0xFF16A34A), Color(0xFFFDE047)],
  [Color(0xFF450A0A), Color(0xFFDC2626), Color(0xFFFB923C)],
  [Color(0xFF020617), Color(0xFF1E293B), Color(0xFF475569)],
  [Color(0xFF831843), Color(0xFFF472B6), Color(0xFFFDE68A)],
];

class SavedVideo {
  SavedVideo(this.url, this.title);
  final String url, title;
  Map<String, String> toJson() => {'u': url, 't': title};
}

class NgmyVirtualPhonePage extends StatefulWidget {
  const NgmyVirtualPhonePage({super.key});

  @override
  State<NgmyVirtualPhonePage> createState() => NgmyVirtualPhoneState();
}

class NgmyVirtualPhoneState extends State<NgmyVirtualPhonePage> {
  bool locked = true;
  String? app;
  int wallpaper = 0;
  double brightness = 1.0;
  String phoneName = 'My NGMY Phone';
  final List<SavedVideo> saved = [];
  final List<SavedVideo> recent = [];
  String? banner;
  Timer? _tick, _bannerTimer;
  DateTime now = DateTime.now();
  bool loaded = false;
  final PhoneData data = PhoneData();

  /// The app that is open has a dark page (the Videos app and the NGMY apps).
  bool get darkApp => app == 'videos' || (app != null && kNgmyApps.any((a) => a.def.id == app));

  /// The video that the wall of phones is playing (null: just this one phone), and the last video, so coming back to one phone plays it here.
  VPhoneLink? wallLink;
  VPhoneLink lastLink = VPhoneLink.none;
  int wallRun = 0;

  /// How big the phone is: 0 as it first is, then bigger each time its top is double-tapped, 3 is the full screen.
  int sizeLevel = 0;

  void startWall(VPhoneLink l) => setState(() {
        lastLink = l;
        wallLink = l;
        wallRun++;
      });

  void endWall() => setState(() => wallLink = null);

  /// The built-in apps and the ones installed from the App Store.
  List<PhoneAppDef> get allApps => [...kPhoneApps, for (final a in kNgmyApps) if (data.isInstalled(a.def.id)) a.def];

  void saveData() => _save();

  void installApp(String id) {
    setState(() => data.installed.add(id));
    _save();
  }

  void removeApp(String id) {
    setState(() => data.installed.remove(id));
    _save();
  }

  @override
  void initState() {
    super.initState();
    _tick = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() => now = DateTime.now());
    });
    _load();
  }

  @override
  void dispose() {
    _tick?.cancel();
    _bannerTimer?.cancel();
    super.dispose();
  }

  Future<void> _load() async {
    try {
      final p = await SharedPreferences.getInstance();
      final raw = p.getString(_kPrefs);
      if (raw != null) {
        final m = jsonDecode(raw) as Map<String, dynamic>;
        wallpaper = ((m['wall'] as num?)?.toInt() ?? 0).clamp(0, kPhoneWallpapers.length - 1);
        brightness = ((m['bright'] as num?)?.toDouble() ?? 1.0).clamp(0.3, 1.0);
        phoneName = (m['name'] as String?) ?? phoneName;
        data.load((m['data'] as Map?)?.cast<String, dynamic>());
        SavedVideo v(dynamic e) => SavedVideo('${(e as Map)['u']}', '${e['t']}');
        saved
          ..clear()
          ..addAll(((m['saved'] as List?) ?? const []).map(v));
        recent
          ..clear()
          ..addAll(((m['recent'] as List?) ?? const []).map(v));
      }
    } catch (_) {}
    if (mounted) setState(() => loaded = true);
  }

  Future<void> _save() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString(_kPrefs, jsonEncode({'wall': wallpaper, 'bright': brightness, 'name': phoneName, 'saved': [for (final s in saved) s.toJson()], 'recent': [for (final s in recent) s.toJson()], 'data': data.toJson()}));
    } catch (_) {}
  }

  void unlock() => setState(() => locked = false);
  void lock() => setState(() {
        locked = true;
        app = null;
      });
  void goHome() => setState(() => app = null);
  void openApp(String id) => setState(() {
        locked = false;
        app = id;
      });

  void showBanner(String text) {
    _bannerTimer?.cancel();
    setState(() => banner = text);
    _bannerTimer = Timer(const Duration(seconds: 3), () {
      if (mounted) setState(() => banner = null);
    });
  }

  void remember(VPhoneLink l) {
    recent.removeWhere((r) => r.url == l.url);
    recent.insert(0, SavedVideo(l.url, l.title));
    if (recent.length > 12) recent.removeLast();
    _save();
  }

  bool isSaved(String url) => saved.any((s) => s.url == url);

  void toggleSave(VPhoneLink l) {
    if (isSaved(l.url)) {
      saved.removeWhere((s) => s.url == l.url);
      showBanner('Removed from Videos');
    } else {
      saved.insert(0, SavedVideo(l.url, l.title));
      showBanner('Saved to Videos');
    }
    setState(() {});
    _save();
  }

  void removeSaved(SavedVideo v) {
    setState(() => saved.remove(v));
    _save();
  }


  void setWallpaper(int i) {
    setState(() => wallpaper = i);
    _save();
  }

  void setBrightness(double b) {
    setState(() => brightness = b);
    _save();
  }

  void setName(String n) {
    phoneName = n.trim().isEmpty ? 'My NGMY Phone' : n.trim();
    _save();
  }

  Future<void> resetPhone() async {
    setState(() {
      saved.clear();
      recent.clear();
      wallpaper = 0;
      brightness = 1;
      phoneName = 'My NGMY Phone';
      data.reset();
      app = null;
      locked = true;
    });
    await _save();
  }

  @override
  Widget build(BuildContext context) {
    final full = sizeLevel == 3 && wallLink == null;
    return Scaffold(
      backgroundColor: const Color(0xFF0B1020),
      body: SafeArea(
        top: !full,
        bottom: !full,
        child: Column(children: [
          if (!full)
            Padding(
              padding: const EdgeInsets.fromLTRB(6, 4, 14, 0),
              child: Row(children: [
                IconButton(onPressed: () => Navigator.maybePop(context), icon: const Icon(Icons.arrow_back_rounded, color: Colors.white)),
                const Icon(Icons.smartphone_rounded, color: Color(0xFF38BDF8)),
                const SizedBox(width: 8),
                const Text('Phone', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                const SizedBox(width: 10),
                Expanded(child: Text(wallLink != null ? '100 phones, four at a time' : 'Double-tap the top of the phone to make it bigger', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12.5))),
              ]),
            ),
          Expanded(
            child: wallLink != null
                ? NgmyPhoneWallView(key: ValueKey('wall$wallRun'), link: wallLink!, onOneDevice: endWall)
                : LayoutBuilder(builder: (context, c) {
                    // The phone as it is, then bigger each time the top of it is double-tapped, until it fills the whole screen.
                    final h0 = (c.maxHeight - 16).clamp(300.0, 900.0);
                    final w0 = (h0 * 9 / 19).clamp(180.0, c.maxWidth - 16);
                    final baseH = w0 * 19 / 9 > c.maxHeight - 8 ? c.maxHeight - 8 : w0 * 19 / 9;
                    final f = kPhoneSizeSteps[sizeLevel];
                    final w = w0 + (c.maxWidth - w0) * f, height = baseH + (c.maxHeight - baseH) * f;
                    return Center(
                      child: AnimatedContainer(
                        key: const Key('vphone-device'),
                        duration: const Duration(milliseconds: 260),
                        curve: Curves.easeOutCubic,
                        width: w,
                        height: height,
                        child: _device(math.min(w, height * 9 / 19), full: sizeLevel == 3),
                      ),
                    );
                  }),
          ),
        ]),
      ),
    );
  }

  /// Double-tap on the top of the phone (the black bar with the camera): the phone gets bigger, step by step, up to the full screen, then back to its first size.
  void growPhone() => setState(() => sizeLevel = (sizeLevel + 1) % kPhoneSizeSteps.length);

  // ── The device ──

  Widget _device(double w, {bool full = false}) {
    final bezel = full ? 0.0 : w * 0.035;
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF0A0A0C),
        borderRadius: BorderRadius.circular(full ? 0 : w * 0.16),
        border: full ? null : Border.all(color: const Color(0xFF3B3F4A), width: 2.5),
        boxShadow: [BoxShadow(color: const Color(0xFF38BDF8).withValues(alpha: 0.18), blurRadius: 40, spreadRadius: 2)],
      ),
      padding: EdgeInsets.all(bezel),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(full ? 0 : w * 0.13),
        child: Stack(fit: StackFit.expand, children: [
          _wallpaperLayer(),
          Positioned.fill(top: w * 0.13, bottom: w * 0.08, child: _screen()),
          Positioned(top: 0, left: 0, right: 0, child: _statusBar(w)),
          Positioned(top: w * 0.028, left: 0, right: 0, child: Center(child: Container(width: w * 0.24, height: w * 0.07, decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(w * 0.04))))),
          // Double-tap the top (the black bar with the camera) to make the phone bigger.
          Positioned(top: 0, left: 0, right: 0, height: w * 0.17, child: GestureDetector(key: const Key('vphone-top'), behavior: HitTestBehavior.opaque, onDoubleTap: growPhone, child: const SizedBox.expand())),
          if (banner != null) Positioned(top: w * 0.11, left: 12, right: 12, child: _bannerView()),
          Positioned(left: 0, right: 0, bottom: 0, height: w * 0.08, child: _homeBar()),
          IgnorePointer(child: ColoredBox(color: Colors.black.withValues(alpha: (1 - brightness) * 0.8))),
        ]),
      ),
    );
  }

  Widget _wallpaperLayer() {
    if (!locked && app != null) return ColoredBox(color: darkApp ? const Color(0xFF0B0B0F) : const Color(0xFFF8FAFC));
    final c = kPhoneWallpapers[wallpaper];
    return Container(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: c)));
  }

  Widget _statusBar(double w) {
    final hh = now.hour.toString().padLeft(2, '0'), mm = now.minute.toString().padLeft(2, '0');
    final dark = app != null && !darkApp;
    final col = dark ? Colors.black87 : Colors.white;
    final fs = (w * 0.04).clamp(10.0, 15.0);
    return Padding(
      padding: EdgeInsets.fromLTRB(w * 0.08, w * 0.035, w * 0.08, 0),
      child: Row(children: [
        Text('$hh:$mm', key: const Key('vphone-clock'), style: TextStyle(color: col, fontWeight: FontWeight.w800, fontSize: fs)),
        const Spacer(),
        Icon(Icons.signal_cellular_alt_rounded, color: col, size: fs + 2),
        const SizedBox(width: 4),
        Icon(Icons.wifi_rounded, color: col, size: fs + 2),
        const SizedBox(width: 4),
        Icon(Icons.battery_5_bar_rounded, color: col, size: fs + 4),
      ]),
    );
  }

  Widget _bannerView() => Material(
        color: Colors.transparent,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
          decoration: BoxDecoration(color: const Color(0xEE1F2937), borderRadius: BorderRadius.circular(18)),
          child: Text(banner!, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13)),
        ),
      );

  Widget _homeBar() => GestureDetector(
        key: const Key('vphone-home-bar'),
        behavior: HitTestBehavior.opaque,
        onTap: goHome,
        onVerticalDragEnd: (d) {
          if ((d.primaryVelocity ?? 0) < -200) goHome();
        },
        child: Center(
          child: Container(width: 110, height: 5, decoration: BoxDecoration(color: (app != null && !darkApp) ? Colors.black54 : Colors.white70, borderRadius: BorderRadius.circular(3))),
        ),
      );

  Widget _screen() {
    if (!loaded) return const Center(child: CircularProgressIndicator(color: Colors.white));
    if (locked) return _lockScreen();
    final Widget content = switch (app) {
      'videos' => _VideosApp(phone: this),
      'web' => _WebApp(phone: this),
      'settings' => _SettingsApp(phone: this),
      _ => (app == null ? null : buildExtraApp(app!, this)) ?? _homeScreen(),
    };
    return AnimatedSwitcher(duration: const Duration(milliseconds: 220), child: KeyedSubtree(key: ValueKey(app ?? 'home'), child: content));
  }

  Widget _lockScreen() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    final hh = now.hour.toString().padLeft(2, '0'), mm = now.minute.toString().padLeft(2, '0');
    return GestureDetector(
      key: const Key('vphone-lock'),
      behavior: HitTestBehavior.opaque,
      onTap: unlock,
      onVerticalDragEnd: (d) {
        if ((d.primaryVelocity ?? 0) < -150) unlock();
      },
      child: Column(children: [
        const SizedBox(height: 40),
        Text('${days[now.weekday - 1]}, ${months[now.month - 1]} ${now.day}', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 15)),
        Text('$hh:$mm', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w200, fontSize: 76, height: 1.1)),
        const SizedBox(height: 6),
        Text(phoneName, style: const TextStyle(color: Colors.white60, fontSize: 13)),
        const Spacer(),
        const Icon(Icons.keyboard_arrow_up_rounded, color: Colors.white70, size: 30),
        const Text('Swipe up or tap to unlock', style: TextStyle(color: Colors.white70, fontSize: 13)),
        const SizedBox(height: 20),
      ]),
    );
  }

  Widget _homeScreen() {
    const dock = ['videos', 'web', 'store', 'settings'];
    final hh = now.hour.toString().padLeft(2, '0'), mm = now.minute.toString().padLeft(2, '0');
    return Column(children: [
      const SizedBox(height: 14),
      Container(
        margin: const EdgeInsets.symmetric(horizontal: 18),
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(22)),
        child: Row(children: [
          Text('$hh:$mm', style: const TextStyle(color: Colors.white, fontSize: 34, fontWeight: FontWeight.w300)),
          const SizedBox(width: 14),
          Expanded(child: Text('$phoneName\n${saved.length} saved videos · ${data.installed.length} apps', style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.35))),
        ]),
      ),
      const SizedBox(height: 22),
      Expanded(
        child: GridView.count(
          crossAxisCount: 4,
          padding: const EdgeInsets.symmetric(horizontal: 12),
          mainAxisSpacing: 14,
          childAspectRatio: 0.82,
                    children: [for (final a in allApps) _AppIcon(a, onTap: () => openApp(a.id))],
        ),
      ),
      Container(
        margin: const EdgeInsets.fromLTRB(12, 0, 12, 6),
        padding: const EdgeInsets.symmetric(vertical: 8),
        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(26)),
        child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [for (final id in dock) _AppIcon(kPhoneApps.firstWhere((a) => a.id == id), onTap: () => openApp(id), label: false)]),
      ),
    ]);
  }
}

class _AppIcon extends StatelessWidget {
  const _AppIcon(this.app, {required this.onTap, this.label = true});
  final PhoneAppDef app;
  final VoidCallback onTap;
  final bool label;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      key: Key('vphone-app-${app.id}${label ? '' : '-dock'}'),
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Container(
          width: 52,
          height: 52,
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(15), gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: app.colors), boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 6, offset: Offset(0, 3))]),
          child: Icon(app.icon, color: Colors.white, size: 30),
        ),
        if (label) ...[const SizedBox(height: 4), Text(app.label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w600))],
      ]),
    );
  }
}

/// The white page of an app, under the status bar.
class _AppPage extends StatelessWidget {
  const _AppPage({required this.title, required this.child, this.dark = false, this.actions = const []});
  final String title;
  final Widget child;
  final bool dark;
  final List<Widget> actions;

  @override
  Widget build(BuildContext context) {
    final bg = dark ? const Color(0xFF0B0B0F) : const Color(0xFFF8FAFC);
    final fg = dark ? Colors.white : const Color(0xFF0F172A);
    return Material(
      color: bg,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 8, 6),
          child: Row(children: [
            Expanded(child: Text(title, style: TextStyle(color: fg, fontWeight: FontWeight.w900, fontSize: 22))),
            ...actions,
          ]),
        ),
        Expanded(child: child),
      ]),
    );
  }
}

// ── Videos ─────────────────────────────────────────────────────────────────

class _VideosApp extends StatefulWidget {
  const _VideosApp({required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<_VideosApp> createState() => _VideosAppState();
}

class _VideosAppState extends State<_VideosApp> {
  late final _text = TextEditingController(text: widget.phone.lastLink.url);
  late VPhoneLink _now = widget.phone.lastLink;
  String? _problem;
  int _playId = 0;

  NgmyVirtualPhoneState get phone => widget.phone;

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  void _play(String raw) {
    final l = parseVideoLink(raw);
    if (!l.playable) {
      setState(() => _problem = 'That does not look like a link. Paste the full address of a video, for example a YouTube link.');
      return;
    }
    FocusManager.instance.primaryFocus?.unfocus();
    phone.remember(l);
    // A video link opens the four phones of the wall, all playing it. (A web page link stays on this one phone.)
    if (l.kind != VPhoneLinkKind.page) {
      phone.startWall(l);
      return;
    }
    setState(() {
      _problem = null;
      _now = l;
      _playId++;
      _text.text = l.url;
    });
  }

  Future<void> _paste() async {
    final d = await Clipboard.getData(Clipboard.kTextPlain);
    final s = d?.text?.trim() ?? '';
    if (s.isEmpty) {
      phone.showBanner('Nothing to paste yet. Copy a video link first.');
      return;
    }
    _text.text = s;
    _play(s);
  }

  @override
  Widget build(BuildContext context) {
    return _AppPage(
      title: 'Videos',
      dark: true,
      child: ListView(padding: const EdgeInsets.fromLTRB(14, 0, 14, 20), children: [
        Row(children: [
          Expanded(
            child: TextField(
              key: const Key('vphone-link-field'),
              controller: _text,
              style: const TextStyle(color: Colors.white, fontSize: 14),
              keyboardType: TextInputType.url,
              textInputAction: TextInputAction.go,
              onSubmitted: _play,
              decoration: InputDecoration(
                hintText: 'Paste a video link',
                hintStyle: const TextStyle(color: Colors.white38),
                filled: true,
                fillColor: Colors.white10,
                isDense: true,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                suffixIcon: IconButton(key: const Key('vphone-paste'), onPressed: _paste, icon: const Icon(Icons.content_paste_rounded, color: Colors.white70, size: 20)),
              ),
            ),
          ),
          const SizedBox(width: 8),
          FilledButton(key: const Key('vphone-play'), onPressed: () => _play(_text.text), style: FilledButton.styleFrom(backgroundColor: const Color(0xFFEF4444), padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14)), child: const Icon(Icons.play_arrow_rounded)),
        ]),
        if (_problem != null) Padding(padding: const EdgeInsets.only(top: 8), child: Text(_problem!, key: const Key('vphone-problem'), style: const TextStyle(color: Color(0xFFFCA5A5), fontSize: 12.5))),
        const SizedBox(height: 12),
        if (_now.playable) ...[
          ClipRRect(borderRadius: BorderRadius.circular(14), child: AspectRatio(aspectRatio: 16 / 9, child: VPhonePlayer(key: ValueKey(_playId), link: _now))),
          const SizedBox(height: 8),
          Row(children: [
            Expanded(child: Text(_now.title, key: const Key('vphone-now-title'), maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14))),
            IconButton(key: const Key('vphone-save'), onPressed: () => phone.toggleSave(_now), icon: Icon(phone.isSaved(_now.url) ? Icons.bookmark_rounded : Icons.bookmark_border_rounded, color: const Color(0xFFFACC15))),
          ]),
        ] else
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(16)),
            child: const Column(children: [
              Icon(Icons.ondemand_video_rounded, color: Colors.white54, size: 44),
              SizedBox(height: 8),
              Text('Paste the link of any video', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
              SizedBox(height: 4),
              Text('YouTube, Vimeo, or a link to a video file (mp4, webm, mov...). It plays right here on this phone.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white54, fontSize: 12.5, height: 1.4)),
            ]),
          ),
        if (phone.saved.isNotEmpty) ...[
          const SizedBox(height: 18),
          const Text('Saved', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
          for (final s in phone.saved) _tile(s, saved: true),
        ],
        if (phone.recent.isNotEmpty) ...[
          const SizedBox(height: 18),
          const Text('Recent', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
          for (final s in phone.recent.take(6)) _tile(s),
        ],
      ]),
    );
  }

  Widget _tile(SavedVideo s, {bool saved = false}) => ListTile(
        key: Key('vphone-tile-${s.url}'),
        contentPadding: EdgeInsets.zero,
        dense: true,
        leading: Container(width: 44, height: 32, decoration: BoxDecoration(color: Colors.white12, borderRadius: BorderRadius.circular(8)), child: const Icon(Icons.play_arrow_rounded, color: Colors.white70)),
        title: Text(s.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 13.5, fontWeight: FontWeight.w700)),
        subtitle: Text(s.url, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white38, fontSize: 11)),
        trailing: saved ? IconButton(onPressed: () => setState(() => phone.removeSaved(s)), icon: const Icon(Icons.delete_outline_rounded, color: Colors.white54, size: 20)) : null,
        onTap: () => _play(s.url),
      );
}

// ── Web ────────────────────────────────────────────────────────────────────

class _WebApp extends StatefulWidget {
  const _WebApp({required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<_WebApp> createState() => _WebAppState();
}

class _WebAppState extends State<_WebApp> {
  final _text = TextEditingController();
  VPhoneLink _page = VPhoneLink.none;
  int _id = 0;

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  void _go(String raw) {
    final l = parseVideoLink(raw);
    if (!l.playable) {
      widget.phone.showBanner('Type or paste a web address.');
      return;
    }
    FocusManager.instance.primaryFocus?.unfocus();
    setState(() {
      _page = l;
      _id++;
      _text.text = l.url;
    });
  }

  @override
  Widget build(BuildContext context) {
    return _AppPage(
      title: 'Web',
      child: Column(children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12),
          child: TextField(
            key: const Key('vphone-web-field'),
            controller: _text,
            keyboardType: TextInputType.url,
            textInputAction: TextInputAction.go,
            onSubmitted: _go,
            decoration: InputDecoration(hintText: 'Web address', filled: true, fillColor: const Color(0xFFE2E8F0), isDense: true, border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none), prefixIcon: const Icon(Icons.lock_outline_rounded, size: 18), suffixIcon: IconButton(onPressed: () => _go(_text.text), icon: const Icon(Icons.arrow_forward_rounded))),
          ),
        ),
        const SizedBox(height: 8),
        Expanded(
          child: _page.playable
              ? VPhonePlayer(key: ValueKey(_id), link: _page)
              : const Center(child: Padding(padding: EdgeInsets.all(24), child: Text('Type a web address above. Some sites do not allow themselves to be shown inside another page.', textAlign: TextAlign.center, style: TextStyle(color: Colors.black54, height: 1.4)))),
        ),
      ]),
    );
  }
}

// ── Settings ───────────────────────────────────────────────────────────────

class _SettingsApp extends StatefulWidget {
  const _SettingsApp({required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<_SettingsApp> createState() => _SettingsAppState();
}

class _SettingsAppState extends State<_SettingsApp> {
  late final TextEditingController _name = TextEditingController(text: widget.phone.phoneName);

  @override
  void dispose() {
    _name.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final p = widget.phone;
    return _AppPage(
      title: 'Settings',
      child: ListView(padding: const EdgeInsets.all(16), children: [
        const Text('Phone name', style: TextStyle(fontWeight: FontWeight.w800)),
        const SizedBox(height: 6),
        TextField(controller: _name, onChanged: p.setName, decoration: InputDecoration(filled: true, fillColor: const Color(0xFFE2E8F0), isDense: true, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none))),
        const SizedBox(height: 18),
        const Text('Wallpaper', style: TextStyle(fontWeight: FontWeight.w800)),
        const SizedBox(height: 8),
        Wrap(spacing: 10, runSpacing: 10, children: [
          for (var i = 0; i < kPhoneWallpapers.length; i++)
            GestureDetector(
              key: Key('vphone-wall-$i'),
              onTap: () => setState(() => p.setWallpaper(i)),
              child: Container(
                width: 52,
                height: 80,
                decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: kPhoneWallpapers[i]), border: Border.all(color: p.wallpaper == i ? const Color(0xFF0EA5E9) : Colors.transparent, width: 3)),
              ),
            ),
        ]),
        const SizedBox(height: 18),
        const Text('Brightness', style: TextStyle(fontWeight: FontWeight.w800)),
        Slider(min: 0.3, max: 1.0, value: p.brightness, onChanged: (v) => setState(() => p.setBrightness(v))),
        const SizedBox(height: 8),
        PhoneIdentitySection(phone: p),
        const SizedBox(height: 18),
        const SizedBox(height: 10),
        ListTile(contentPadding: EdgeInsets.zero, leading: const Icon(Icons.lock_outline_rounded), title: const Text('Lock the phone'), onTap: p.lock),
        ListTile(
          key: const Key('vphone-reset'),
          contentPadding: EdgeInsets.zero,
          leading: const Icon(Icons.restart_alt_rounded, color: Colors.red),
          title: const Text('Reset this phone', style: TextStyle(color: Colors.red)),
          subtitle: const Text('Clears its saved videos, apps and settings. Your real phone is not touched.'),
          onTap: p.resetPhone,
        ),
      ]),
    );
  }
}
