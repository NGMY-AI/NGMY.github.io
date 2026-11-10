import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_virtual_phone.dart';
import 'ngmy_vphone_ngmy_apps.dart' deferred as ngmy_apps;

// ═════════════════════════════════════════════════════════════════════════════
// What makes the virtual phone a phone of its own: its own identity (name, number, device number), its own place in the world,
// and its own App Store, where the apps are NGMY apps (the studios of NGMY) that are installed on this phone and removed again.
// ═════════════════════════════════════════════════════════════════════════════

class PhoneCity {
  const PhoneCity(this.name, this.country, this.lat, this.lon);
  final String name, country;
  final double lat, lon;
}

const List<PhoneCity> kPhoneCities = [
  PhoneCity('Dar es Salaam', 'Tanzania', -6.7924, 39.2083),
  PhoneCity('Nairobi', 'Kenya', -1.2921, 36.8219),
  PhoneCity('Lagos', 'Nigeria', 6.5244, 3.3792),
  PhoneCity('Accra', 'Ghana', 5.6037, -0.1870),
  PhoneCity('Cairo', 'Egypt', 30.0444, 31.2357),
  PhoneCity('London', 'United Kingdom', 51.5074, -0.1278),
  PhoneCity('Paris', 'France', 48.8566, 2.3522),
  PhoneCity('New York', 'United States', 40.7128, -74.0060),
  PhoneCity('Los Angeles', 'United States', 34.0522, -118.2437),
  PhoneCity('Mexico City', 'Mexico', 19.4326, -99.1332),
  PhoneCity('Rio de Janeiro', 'Brazil', -22.9068, -43.1729),
  PhoneCity('Dubai', 'United Arab Emirates', 25.2048, 55.2708),
  PhoneCity('Mumbai', 'India', 19.0760, 72.8777),
  PhoneCity('Tokyo', 'Japan', 35.6762, 139.6503),
  PhoneCity('Sydney', 'Australia', -33.8688, 151.2093),
];

/// An NGMY app that can be installed on the phone.
class NgmyApp {
  const NgmyApp(this.def, this.blurb, this.category);
  final PhoneAppDef def;
  final String blurb, category;
}

const List<NgmyApp> kNgmyApps = [
  NgmyApp(PhoneAppDef('title', 'Title Animator', Icons.title_rounded, [Color(0xFF38BDF8), Color(0xFF6366F1)]), 'Moving titles with many movements, looks and backgrounds. Download the whole animation.', 'Create'),
  NgmyApp(PhoneAppDef('universe', 'Universe Explorer', Icons.public_rounded, [Color(0xFF0EA5E9), Color(0xFF1E3A8A)]), 'The Earth Globe and the facts of the universe. The globe works with no internet.', 'Learn'),
  NgmyApp(PhoneAppDef('beat', 'Beat Maker', Icons.graphic_eq_rounded, [Color(0xFFF472B6), Color(0xFF9D174D)]), 'Make a beat and play it back.', 'Music'),
  NgmyApp(PhoneAppDef('piano', 'Piano Studio', Icons.piano_rounded, [Color(0xFFFBBF24), Color(0xFFEA580C)]), 'A two octave piano with songs to play along.', 'Music'),
  NgmyApp(PhoneAppDef('drums', 'Drum Pads', Icons.album_rounded, [Color(0xFFF87171), Color(0xFFB91C1C)]), 'Tap the pads and play the drums.', 'Music'),
  NgmyApp(PhoneAppDef('palette', 'Palette Lab', Icons.palette_rounded, [Color(0xFFA78BFA), Color(0xFF5B21B6)]), 'Five colours that match, with the codes to copy.', 'Create'),
  NgmyApp(PhoneAppDef('mandala', 'Mandala Studio', Icons.filter_vintage_rounded, [Color(0xFF34D399), Color(0xFF0E7490)]), 'Draw a pattern that repeats round a circle.', 'Create'),
  NgmyApp(PhoneAppDef('fireworks', 'Fireworks', Icons.celebration_rounded, [Color(0xFFFB923C), Color(0xFFC2410C)]), 'Light up the night sky.', 'Create'),
  NgmyApp(PhoneAppDef('gravity', 'Gravity Lab', Icons.blur_circular_rounded, [Color(0xFF22D3EE), Color(0xFF1D4ED8)]), 'Planets pull on each other. Watch what happens.', 'Learn'),
  NgmyApp(PhoneAppDef('sparks', 'Spark Painter', Icons.brush_rounded, [Color(0xFFFDE047), Color(0xFFCA8A04)]), 'Paint with sparks of light.', 'Create'),
];

/// Everything this phone owns besides its look: who it is, where it is, and which NGMY apps are installed.
class PhoneData {
  String deviceId = '';
  String number = '';
  int city = 0;
  final Set<String> installed = {};

  PhoneData() {
    _identity();
  }

  void _identity() {
    final r = math.Random.secure();
    String hex(int n) => List.generate(n, (_) => r.nextInt(16).toRadixString(16)).join();
    deviceId = '${hex(4)}-${hex(4)}-${hex(4)}-${hex(4)}'.toUpperCase();
    number = '+1 555 01${r.nextInt(10)}${r.nextInt(10)}${r.nextInt(10)}${r.nextInt(10)}${r.nextInt(10)}';
  }

  PhoneCity get where => kPhoneCities[city.clamp(0, kPhoneCities.length - 1)];
  bool isInstalled(String id) => installed.contains(id);

  void reset() {
    city = 0;
    installed.clear();
    _identity();
  }

  Map<String, dynamic> toJson() => {'id': deviceId, 'num': number, 'city': city, 'inst': installed.toList()};

  void load(Map<String, dynamic>? m) {
    if (m == null) return;
    deviceId = (m['id'] as String?) ?? deviceId;
    number = (m['num'] as String?) ?? number;
    city = (m['city'] as num?)?.toInt() ?? 0;
    installed
      ..clear()
      ..addAll(((m['inst'] as List?) ?? const []).map((e) => '$e').where((id) => kNgmyApps.any((a) => a.def.id == id)));
  }
}

/// The page of an app that is not built in (or null if [id] is not one of them).
Widget? buildExtraApp(String id, NgmyVirtualPhoneState p) {
  if (id == 'store') return PhoneStoreApp(phone: p);
  final a = kNgmyApps.where((a) => a.def.id == id);
  if (a.isNotEmpty) return NgmyAppHost(app: a.first);
  return null;
}

Widget phoneAppPage(String title, Widget child, {bool dark = false}) {
  final bg = dark ? const Color(0xFF0B0B0F) : const Color(0xFFF8FAFC);
  final fg = dark ? Colors.white : const Color(0xFF0F172A);
  return Material(
    color: bg,
    child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Padding(padding: const EdgeInsets.fromLTRB(16, 8, 8, 6), child: Text(title, style: TextStyle(color: fg, fontWeight: FontWeight.w900, fontSize: 22))),
      Expanded(child: child),
    ]),
  );
}

InputDecoration _field(String hint) => InputDecoration(hintText: hint, filled: true, fillColor: const Color(0xFFE2E8F0), isDense: true, border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none));

/// An NGMY app running inside the phone: it is loaded when it is opened, and it sees the size of the phone screen, not of the device.
class NgmyAppHost extends StatefulWidget {
  const NgmyAppHost({super.key, required this.app});
  final NgmyApp app;

  @override
  State<NgmyAppHost> createState() => _NgmyAppHostState();
}

class _NgmyAppHostState extends State<NgmyAppHost> {
  late final Future<void> _load = ngmy_apps.loadLibrary();

  @override
  Widget build(BuildContext context) {
    return Material(
      color: const Color(0xFF0B0B0F),
      child: FutureBuilder<void>(
        future: _load,
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) return const Center(child: CircularProgressIndicator(color: Colors.white));
          if (snap.hasError) return const Center(child: Padding(padding: EdgeInsets.all(20), child: Text('This app could not be opened. Check the internet and try again.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70))));
          final body = ngmy_apps.buildNgmyAppBody(widget.app.def.id);
          if (body == null) return const SizedBox.shrink();
          return LayoutBuilder(builder: (context, c) {
            // The app is laid out as it would be on a normal phone (at least 360 by 680), and shrunk if the phone screen is smaller,
            // so nothing is cut off or overflows.
            final s = math.min(1.0, math.min(c.maxWidth / 360, c.maxHeight / 680));
            final vw = c.maxWidth / s, vh = c.maxHeight / s;
            final mq = MediaQuery.of(context);
            return ClipRect(
              child: FittedBox(
                fit: BoxFit.fill,
                child: SizedBox(
                  width: vw,
                  height: vh,
                  child: MediaQuery(data: mq.copyWith(size: Size(vw, vh), padding: EdgeInsets.zero, viewPadding: EdgeInsets.zero), child: body),
                ),
              ),
            );
          });
        },
      ),
    );
  }
}

// ── Identity and place (shown in Settings) ───────────────────────────────────

class PhoneIdentitySection extends StatefulWidget {
  const PhoneIdentitySection({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<PhoneIdentitySection> createState() => _PhoneIdentitySectionState();
}

class _PhoneIdentitySectionState extends State<PhoneIdentitySection> {
  @override
  Widget build(BuildContext context) {
    final d = widget.phone.data;
    Widget row(String a, String b) => Padding(padding: const EdgeInsets.symmetric(vertical: 3), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [SizedBox(width: 92, child: Text(a, style: const TextStyle(color: Colors.black54, fontSize: 12.5))), Expanded(child: Text(b, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12.5)))]));
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      const Text('This phone', style: TextStyle(fontWeight: FontWeight.w800)),
      const SizedBox(height: 6),
      Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14), boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 6)]),
        child: Column(children: [
          row('Name', widget.phone.phoneName),
          row('Phone number', d.number),
          row('Device ID', d.deviceId),
          row('Place', '${d.where.name}, ${d.where.country}'),
          row('Apps', '${d.installed.length} NGMY apps installed'),
        ]),
      ),
      const SizedBox(height: 14),
      const Text('Where this phone is', style: TextStyle(fontWeight: FontWeight.w800)),
      const SizedBox(height: 4),
      const Text('The phone has a place of its own. It never reads the place of the device you are using.', style: TextStyle(color: Colors.black54, fontSize: 12)),
      const SizedBox(height: 6),
      DropdownButtonFormField<int>(
        key: const Key('vphone-city'),
        initialValue: d.city,
        isExpanded: true,
        decoration: _field(''),
        items: [for (var i = 0; i < kPhoneCities.length; i++) DropdownMenuItem(value: i, child: Text('${kPhoneCities[i].name}, ${kPhoneCities[i].country}'))],
        onChanged: (v) {
          if (v == null) return;
          setState(() => d.city = v);
          widget.phone.saveData();
        },
      ),
      const SizedBox(height: 10),
      Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(color: const Color(0xFFFEF3C7), borderRadius: BorderRadius.circular(12)),
        child: const Text('Honest note: the phone has its own name, number, apps and place. It uses the internet connection of the device it runs on, so websites still see that device\'s internet address. A browser cannot give a page a different one.', style: TextStyle(fontSize: 12, height: 1.4, color: Color(0xFF78350F))),
      ),
    ]);
  }
}

// ── App Store ────────────────────────────────────────────────────────────────

class PhoneStoreApp extends StatefulWidget {
  const PhoneStoreApp({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<PhoneStoreApp> createState() => _PhoneStoreAppState();
}

class _PhoneStoreAppState extends State<PhoneStoreApp> {
  String _cat = 'All';
  final Map<String, double> _progress = {};
  String _q = '';

  void _install(NgmyApp a) {
    if (_progress.containsKey(a.def.id)) return;
    setState(() => _progress[a.def.id] = 0);
    Timer.periodic(const Duration(milliseconds: 120), (t) {
      if (!mounted) {
        t.cancel();
        return;
      }
      final next = (_progress[a.def.id] ?? 0) + 0.12 + 0.08 * math.Random().nextDouble();
      if (next >= 1) {
        t.cancel();
        setState(() => _progress.remove(a.def.id));
        widget.phone.installApp(a.def.id);
        widget.phone.showBanner('${a.def.label} installed');
      } else {
        setState(() => _progress[a.def.id] = next);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.phone.data;
    final cats = ['All', ...{for (final a in kNgmyApps) a.category}];
    final list = [for (final a in kNgmyApps) if ((_cat == 'All' || a.category == _cat) && a.def.label.toLowerCase().contains(_q.toLowerCase())) a];
    return phoneAppPage(
      'NGMY Apps',
      Column(children: [
        Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: TextField(key: const Key('vphone-store-search'), onChanged: (v) => setState(() => _q = v), decoration: _field('Search apps').copyWith(prefixIcon: const Icon(Icons.search_rounded, size: 20)))),
        SizedBox(
          height: 44,
          child: ListView(scrollDirection: Axis.horizontal, padding: const EdgeInsets.symmetric(horizontal: 10), children: [
            for (final c in cats) Padding(padding: const EdgeInsets.all(4), child: ChoiceChip(label: Text(c), selected: _cat == c, onSelected: (_) => setState(() => _cat = c))),
          ]),
        ),
        Expanded(
          child: ListView(padding: const EdgeInsets.fromLTRB(12, 0, 12, 16), children: [
            for (final a in list)
              Container(
                key: Key('vphone-store-${a.def.id}'),
                margin: const EdgeInsets.only(bottom: 10),
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: const [BoxShadow(color: Colors.black12, blurRadius: 6)]),
                child: Row(children: [
                  Container(width: 48, height: 48, decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), gradient: LinearGradient(colors: a.def.colors)), child: Icon(a.def.icon, color: Colors.white)),
                  const SizedBox(width: 10),
                  Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(a.def.label, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 14.5)),
                    Text(a.blurb, maxLines: 3, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.black54, fontSize: 11.5, height: 1.3)),
                    Text(a.category, style: const TextStyle(color: Colors.black38, fontSize: 11)),
                  ])),
                  const SizedBox(width: 6),
                  if (_progress.containsKey(a.def.id))
                    SizedBox(width: 56, child: LinearProgressIndicator(value: _progress[a.def.id]))
                  else if (d.isInstalled(a.def.id))
                    Column(mainAxisSize: MainAxisSize.min, children: [
                      FilledButton(key: Key('vphone-open-${a.def.id}'), style: FilledButton.styleFrom(visualDensity: VisualDensity.compact), onPressed: () => widget.phone.openApp(a.def.id), child: const Text('Open')),
                      TextButton(key: Key('vphone-remove-${a.def.id}'), style: TextButton.styleFrom(visualDensity: VisualDensity.compact, foregroundColor: Colors.red), onPressed: () => setState(() => widget.phone.removeApp(a.def.id)), child: const Text('Remove', style: TextStyle(fontSize: 12))),
                    ])
                  else
                    FilledButton(key: Key('vphone-get-${a.def.id}'), style: FilledButton.styleFrom(visualDensity: VisualDensity.compact), onPressed: () => _install(a), child: const Text('Get')),
                ]),
              ),
            if (list.isEmpty) const Padding(padding: EdgeInsets.all(30), child: Center(child: Text('No apps found', style: TextStyle(color: Colors.black45)))),
            const Padding(padding: EdgeInsets.all(8), child: Text('These are NGMY apps, made for NGMY. Apps from the Google Play Store or the Apple App Store cannot run inside a web page.', textAlign: TextAlign.center, style: TextStyle(color: Colors.black38, fontSize: 11, height: 1.4))),
          ]),
        ),
      ]),
    );
  }
}
