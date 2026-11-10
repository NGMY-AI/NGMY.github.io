import 'dart:async';
import 'dart:convert';

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

class PhoneAppDef {
  const PhoneAppDef(this.id, this.label, this.icon, this.colors);
  final String id, label;
  final IconData icon;
  final List<Color> colors;
}

const List<PhoneAppDef> kPhoneApps = [
  PhoneAppDef('videos', 'Videos', Icons.play_circle_fill_rounded, [Color(0xFFEF4444), Color(0xFFF97316)]),
  PhoneAppDef('web', 'Web', Icons.public_rounded, [Color(0xFF0EA5E9), Color(0xFF6366F1)]),
  PhoneAppDef('notes', 'Notes', Icons.sticky_note_2_rounded, [Color(0xFFFACC15), Color(0xFFF59E0B)]),
  PhoneAppDef('calc', 'Calculator', Icons.calculate_rounded, [Color(0xFF475569), Color(0xFF1E293B)]),
  PhoneAppDef('clock', 'Clock', Icons.access_time_filled_rounded, [Color(0xFF22C55E), Color(0xFF14B8A6)]),
  PhoneAppDef('store', 'App Store', Icons.shopping_bag_rounded, [Color(0xFF3B82F6), Color(0xFF1D4ED8)]),
  PhoneAppDef('files', 'Files', Icons.folder_rounded, [Color(0xFFFB923C), Color(0xFFC2410C)]),
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
  final List<String> notes = [];
  final List<SavedVideo> saved = [];
  final List<SavedVideo> recent = [];
  String? banner;
  Timer? _tick, _bannerTimer;
  DateTime now = DateTime.now();
  bool loaded = false;
  final PhoneData data = PhoneData();

  /// The video that the wall of phones is playing (null: just this one phone), and the last video, so coming back to one phone plays it here.
  VPhoneLink? wallLink;
  VPhoneLink lastLink = VPhoneLink.none;
  int wallRun = 0;

  void startWall(VPhoneLink l) => setState(() {
        lastLink = l;
        wallLink = l;
        wallRun++;
      });

  void endWall() => setState(() => wallLink = null);

  /// The built-in apps and the ones installed from the App Store.
  List<PhoneAppDef> get allApps => [...kPhoneApps, for (final a in kStoreApps) if (data.isInstalled(a.def.id)) a.def];

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
        notes
          ..clear()
          ..addAll(((m['notes'] as List?) ?? const []).map((e) => '$e'));
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
      await p.setString(_kPrefs, jsonEncode({'wall': wallpaper, 'bright': brightness, 'name': phoneName, 'notes': notes, 'saved': [for (final s in saved) s.toJson()], 'recent': [for (final s in recent) s.toJson()], 'data': data.toJson()}));
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

  void setNotes(List<String> n) {
    setState(() {
      notes
        ..clear()
        ..addAll(n);
    });
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
      notes.clear();
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
    return Scaffold(
      backgroundColor: const Color(0xFF0B1020),
      body: SafeArea(
        child: Column(children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(6, 4, 14, 0),
            child: Row(children: [
              IconButton(onPressed: () => Navigator.maybePop(context), icon: const Icon(Icons.arrow_back_rounded, color: Colors.white)),
              const Icon(Icons.smartphone_rounded, color: Color(0xFF38BDF8)),
              const SizedBox(width: 8),
              const Text('Phone', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(width: 10),
              Expanded(child: Text(wallLink != null ? '100 phones, four at a time' : 'A phone of its own, inside NGMY', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12.5))),
            ]),
          ),
          Expanded(
            child: wallLink != null ? NgmyPhoneWallView(key: ValueKey('wall$wallRun'), link: wallLink!, onOneDevice: endWall) : LayoutBuilder(builder: (context, c) {
              final h = (c.maxHeight - 16).clamp(300.0, 900.0);
              final w = (h * 9 / 19).clamp(180.0, c.maxWidth - 16);
              final height = w * 19 / 9 > c.maxHeight - 8 ? c.maxHeight - 8 : w * 19 / 9;
              return Center(child: SizedBox(width: w, height: height, child: _device(w)));
            }),
          ),
        ]),
      ),
    );
  }

  // ── The device ──

  Widget _device(double w) {
    final bezel = w * 0.035;
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF0A0A0C),
        borderRadius: BorderRadius.circular(w * 0.16),
        border: Border.all(color: const Color(0xFF3B3F4A), width: 2.5),
        boxShadow: [BoxShadow(color: const Color(0xFF38BDF8).withValues(alpha: 0.18), blurRadius: 40, spreadRadius: 2)],
      ),
      padding: EdgeInsets.all(bezel),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(w * 0.13),
        child: Stack(fit: StackFit.expand, children: [
          _wallpaperLayer(),
          Positioned.fill(top: w * 0.13, bottom: w * 0.08, child: _screen()),
          Positioned(top: 0, left: 0, right: 0, child: _statusBar(w)),
          Positioned(top: w * 0.028, left: 0, right: 0, child: Center(child: Container(width: w * 0.24, height: w * 0.07, decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(w * 0.04))))),
          if (banner != null) Positioned(top: w * 0.11, left: 12, right: 12, child: _bannerView()),
          Positioned(left: 0, right: 0, bottom: 0, height: w * 0.08, child: _homeBar()),
          IgnorePointer(child: ColoredBox(color: Colors.black.withValues(alpha: (1 - brightness) * 0.8))),
        ]),
      ),
    );
  }

  Widget _wallpaperLayer() {
    if (!locked && app != null) return ColoredBox(color: app == 'calc' ? Colors.black : (app == 'videos' || app == 'music' ? const Color(0xFF0B0B0F) : const Color(0xFFF8FAFC)));
    final c = kPhoneWallpapers[wallpaper];
    return Container(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: c)));
  }

  Widget _statusBar(double w) {
    final hh = now.hour.toString().padLeft(2, '0'), mm = now.minute.toString().padLeft(2, '0');
    final dark = app != null && app != 'videos' && app != 'calc' && app != 'music';
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
          child: Container(width: 110, height: 5, decoration: BoxDecoration(color: (app != null && app != 'videos' && app != 'calc' && app != 'music') ? Colors.black54 : Colors.white70, borderRadius: BorderRadius.circular(3))),
        ),
      );

  Widget _screen() {
    if (!loaded) return const Center(child: CircularProgressIndicator(color: Colors.white));
    if (locked) return _lockScreen();
    final Widget content = switch (app) {
      'videos' => _VideosApp(phone: this),
      'web' => _WebApp(phone: this),
      'notes' => _NotesApp(phone: this),
      'calc' => const _CalcApp(),
      'clock' => _ClockApp(phone: this),
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
          Expanded(child: Text('$phoneName\n${saved.length} saved videos · ${notes.length} notes', style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.35))),
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

// ── Notes ──────────────────────────────────────────────────────────────────

class _NotesApp extends StatefulWidget {
  const _NotesApp({required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<_NotesApp> createState() => _NotesAppState();
}

class _NotesAppState extends State<_NotesApp> {
  final _text = TextEditingController();

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  void _add() {
    final s = _text.text.trim();
    if (s.isEmpty) return;
    widget.phone.setNotes([s, ...widget.phone.notes]);
    _text.clear();
  }

  @override
  Widget build(BuildContext context) {
    final notes = widget.phone.notes;
    return _AppPage(
      title: 'Notes',
      child: Column(children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12),
          child: Row(children: [
            Expanded(child: TextField(key: const Key('vphone-note-field'), controller: _text, minLines: 1, maxLines: 3, decoration: InputDecoration(hintText: 'Write a note', filled: true, fillColor: const Color(0xFFFEF9C3), isDense: true, border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none)))),
            IconButton(key: const Key('vphone-note-add'), onPressed: _add, icon: const Icon(Icons.add_circle_rounded, color: Color(0xFFF59E0B), size: 32)),
          ]),
        ),
        Expanded(
          child: notes.isEmpty
              ? const Center(child: Text('No notes yet', style: TextStyle(color: Colors.black45)))
              : ListView.builder(
                  padding: const EdgeInsets.all(12),
                  itemCount: notes.length,
                  itemBuilder: (_, i) => Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    padding: const EdgeInsets.fromLTRB(14, 10, 4, 10),
                    decoration: BoxDecoration(color: const Color(0xFFFEF3C7), borderRadius: BorderRadius.circular(14)),
                    child: Row(children: [
                      Expanded(child: Text(notes[i], style: const TextStyle(color: Color(0xFF422006), fontSize: 14, height: 1.35))),
                      IconButton(onPressed: () => widget.phone.setNotes([...notes]..removeAt(i)), icon: const Icon(Icons.close_rounded, size: 18, color: Colors.black45)),
                    ]),
                  ),
                ),
        ),
      ]),
    );
  }
}

// ── Calculator ─────────────────────────────────────────────────────────────

/// The working of the calculator, apart from the buttons, so it can be tested.
class PhoneCalc {
  String shown = '0';
  double? _acc;
  String? _op;
  bool _fresh = true;

  static String _fmt(double v) {
    if (v.isNaN || v.isInfinite) return 'Error';
    if (v == v.roundToDouble() && v.abs() < 1e12) return v.round().toString();
    var s = v.toStringAsPrecision(10);
    if (s.contains('.') && !s.contains('e')) s = s.replaceFirst(RegExp(r'0+$'), '').replaceFirst(RegExp(r'\.$'), '');
    return s;
  }

  double get _cur => double.tryParse(shown) ?? 0;

  double _apply(double a, String op, double b) => switch (op) {
        '+' => a + b,
        '−' => a - b,
        '×' => a * b,
        '÷' => b == 0 ? double.nan : a / b,
        _ => b,
      };

  void press(String k) {
    if (shown == 'Error' && k != 'C') return;
    if (RegExp(r'^[0-9]$').hasMatch(k)) {
      shown = _fresh || shown == '0' ? k : (shown.length < 14 ? shown + k : shown);
      _fresh = false;
    } else if (k == '.') {
      if (_fresh) {
        shown = '0.';
        _fresh = false;
      } else if (!shown.contains('.')) {
        shown += '.';
      }
    } else if (k == 'C') {
      shown = '0';
      _acc = null;
      _op = null;
      _fresh = true;
    } else if (k == '±') {
      if (shown != '0') shown = shown.startsWith('-') ? shown.substring(1) : '-$shown';
    } else if (k == '%') {
      shown = _fmt(_cur / 100);
      _fresh = true;
    } else if (k == '=') {
      if (_op != null && _acc != null) {
        shown = _fmt(_apply(_acc!, _op!, _cur));
        _acc = null;
        _op = null;
        _fresh = true;
      }
    } else {
      if (_op != null && _acc != null && !_fresh) {
        final r = _apply(_acc!, _op!, _cur);
        shown = _fmt(r);
        _acc = r;
      } else {
        _acc = _cur;
      }
      _op = k;
      _fresh = true;
    }
  }
}

class _CalcApp extends StatefulWidget {
  const _CalcApp();

  @override
  State<_CalcApp> createState() => _CalcAppState();
}

class _CalcAppState extends State<_CalcApp> {
  final calc = PhoneCalc();

  @override
  Widget build(BuildContext context) {
    const rows = [
      ['C', '±', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '−'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    return Container(
      color: Colors.black,
      padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
      child: Column(children: [
        Expanded(child: Align(alignment: Alignment.bottomRight, child: Padding(padding: const EdgeInsets.all(10), child: FittedBox(child: Text(calc.shown, key: const Key('vphone-calc-display'), style: const TextStyle(color: Colors.white, fontSize: 60, fontWeight: FontWeight.w300)))))),
        for (final r in rows)
          Expanded(
            child: Row(children: [
              for (final k in r)
                Expanded(
                  flex: k == '0' ? 2 : 1,
                  child: Padding(
                    padding: const EdgeInsets.all(3),
                    child: Material(
                      color: '÷×−+='.contains(k) ? const Color(0xFFF59E0B) : (k == 'C' || k == '±' || k == '%' ? const Color(0xFF64748B) : const Color(0xFF27272A)),
                      shape: const StadiumBorder(),
                      child: InkWell(key: Key('vphone-calc-$k'), customBorder: const StadiumBorder(), onTap: () => setState(() => calc.press(k)), child: Center(child: Text(k, style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.w500)))),
                    ),
                  ),
                ),
            ]),
          ),
      ]),
    );
  }
}

// ── Clock ──────────────────────────────────────────────────────────────────

class _ClockApp extends StatefulWidget {
  const _ClockApp({required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<_ClockApp> createState() => _ClockAppState();
}

class _ClockAppState extends State<_ClockApp> {
  final _sw = Stopwatch();
  Timer? _t;
  int _timerLeft = 0;
  bool _timerOn = false;

  @override
  void initState() {
    super.initState();
    _t = Timer.periodic(const Duration(milliseconds: 100), (_) {
      if (!mounted) return;
      setState(() {});
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  String _two(int n) => n.toString().padLeft(2, '0');

  void _timerTick() {
    if (!_timerOn) return;
    Future.delayed(const Duration(seconds: 1), () {
      if (!mounted || !_timerOn) return;
      setState(() {
        _timerLeft--;
        if (_timerLeft <= 0) {
          _timerLeft = 0;
          _timerOn = false;
          widget.phone.showBanner('Timer finished');
        }
      });
      _timerTick();
    });
  }

  @override
  Widget build(BuildContext context) {
    final n = widget.phone.now;
    final ms = _sw.elapsedMilliseconds;
    final sw = '${_two(ms ~/ 60000)}:${_two(ms ~/ 1000 % 60)}.${(ms ~/ 100 % 10)}';
    return _AppPage(
      title: 'Clock',
      child: ListView(padding: const EdgeInsets.all(16), children: [
        Center(child: Text('${_two(n.hour)}:${_two(n.minute)}:${_two(n.second)}', style: const TextStyle(fontSize: 54, fontWeight: FontWeight.w200))),
        const SizedBox(height: 18),
        _card('Stopwatch', Text(sw, key: const Key('vphone-stopwatch'), style: const TextStyle(fontSize: 34, fontWeight: FontWeight.w300)), [
          FilledButton(key: const Key('vphone-sw-toggle'), onPressed: () => setState(() => _sw.isRunning ? _sw.stop() : _sw.start()), child: Text(_sw.isRunning ? 'Stop' : 'Start')),
          OutlinedButton(onPressed: () => setState(() => _sw..stop()..reset()), child: const Text('Reset')),
        ]),
        const SizedBox(height: 14),
        _card('Timer', Text('${_two(_timerLeft ~/ 60)}:${_two(_timerLeft % 60)}', key: const Key('vphone-timer'), style: const TextStyle(fontSize: 34, fontWeight: FontWeight.w300)), [
          OutlinedButton(onPressed: _timerOn ? null : () => setState(() => _timerLeft += 60), child: const Text('+1 min')),
          FilledButton(
            key: const Key('vphone-timer-toggle'),
            onPressed: _timerLeft == 0 && !_timerOn
                ? null
                : () {
                    setState(() => _timerOn = !_timerOn);
                    _timerTick();
                  },
            child: Text(_timerOn ? 'Pause' : 'Start'),
          ),
          OutlinedButton(onPressed: () => setState(() {
                _timerOn = false;
                _timerLeft = 0;
              }), child: const Text('Clear')),
        ]),
      ]),
    );
  }

  Widget _card(String title, Widget body, List<Widget> buttons) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(18), boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 8)]),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(title, style: const TextStyle(fontWeight: FontWeight.w800, color: Colors.black54)),
          body,
          const SizedBox(height: 8),
          Wrap(spacing: 8, children: buttons),
        ]),
      );
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
        PhoneIdentitySection(phone: p),
        const SizedBox(height: 18),
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
        const SizedBox(height: 10),
        ListTile(contentPadding: EdgeInsets.zero, leading: const Icon(Icons.lock_outline_rounded), title: const Text('Lock the phone'), onTap: p.lock),
        ListTile(
          key: const Key('vphone-reset'),
          contentPadding: EdgeInsets.zero,
          leading: const Icon(Icons.restart_alt_rounded, color: Colors.red),
          title: const Text('Reset this phone', style: TextStyle(color: Colors.red)),
          subtitle: const Text('Clears its notes, saved videos and settings. Your real phone is not touched.'),
          onTap: p.resetPhone,
        ),
      ]),
    );
  }
}
