import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import 'ngmy_virtual_phone.dart';
import 'ngmy_vphone_link.dart';
import 'ngmy_vphone_player.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The things that make the virtual phone a phone of its own: its own identity (name, number, device number),
// its own place in the world, its own App Store with apps that are installed and removed, its own files and downloads,
// contacts, messages and calendar. All of it is kept apart from the device that runs it.
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

class PhoneFile {
  PhoneFile(this.name, this.mime, this.b64, this.size, this.date, {this.link = ''});
  final String name, mime, b64, link;
  final int size;
  final DateTime date;

  bool get isImage => mime.startsWith('image/');
  Uint8List get bytes => base64Decode(b64);

  Map<String, dynamic> toJson() => {'n': name, 'm': mime, 'b': b64, 's': size, 'd': date.millisecondsSinceEpoch, 'l': link};
  static PhoneFile from(Map<String, dynamic> m) => PhoneFile('${m['n']}', '${m['m']}', '${m['b']}', (m['s'] as num?)?.toInt() ?? 0, DateTime.fromMillisecondsSinceEpoch((m['d'] as num?)?.toInt() ?? 0), link: '${m['l'] ?? ''}');
}

class PhoneContact {
  PhoneContact(this.name, this.number);
  final String name, number;
}

class PhoneMessage {
  PhoneMessage(this.who, this.mine, this.text, this.at);
  final String who, text;
  final bool mine;
  final DateTime at;
}

class PhoneEvent {
  PhoneEvent(this.title, this.day);
  final String title;
  final DateTime day;
}

class StoreApp {
  const StoreApp(this.def, this.blurb, this.category, this.sizeMb);
  final PhoneAppDef def;
  final String blurb, category;
  final double sizeMb;
}

const List<StoreApp> kStoreApps = [
  StoreApp(PhoneAppDef('contacts', 'Contacts', Icons.contacts_rounded, [Color(0xFF38BDF8), Color(0xFF0369A1)]), 'Keep the names and numbers of the people you know.', 'Social', 2.1),
  StoreApp(PhoneAppDef('messages', 'Messages', Icons.chat_bubble_rounded, [Color(0xFF4ADE80), Color(0xFF15803D)]), 'Write messages to your contacts. They stay on this phone.', 'Social', 3.4),
  StoreApp(PhoneAppDef('calendar', 'Calendar', Icons.calendar_month_rounded, [Color(0xFFF87171), Color(0xFFB91C1C)]), 'Keep your events and see what is coming.', 'Tools', 2.8),
  StoreApp(PhoneAppDef('maps', 'Maps', Icons.map_rounded, [Color(0xFF34D399), Color(0xFF0E7490)]), 'A map of the place this phone is in.', 'Travel', 6.5),
  StoreApp(PhoneAppDef('music', 'Music', Icons.music_note_rounded, [Color(0xFFF472B6), Color(0xFF9D174D)]), 'Play a song or any sound from a link, and keep a playlist.', 'Media', 4.2),
  StoreApp(PhoneAppDef('photos', 'Photos', Icons.photo_library_rounded, [Color(0xFFFBBF24), Color(0xFFEA580C)]), 'Every picture you downloaded to this phone.', 'Media', 3.0),
  StoreApp(PhoneAppDef('tictactoe', 'Tic Tac Toe', Icons.grid_3x3_rounded, [Color(0xFFA78BFA), Color(0xFF5B21B6)]), 'Play noughts and crosses against the phone.', 'Games', 1.2),
  StoreApp(PhoneAppDef('guess', 'Number Guess', Icons.casino_rounded, [Color(0xFF22D3EE), Color(0xFF1D4ED8)]), 'The phone thinks of a number. Find it.', 'Games', 0.9),
];

/// Everything this phone owns besides its look: who it is, where it is, what is installed and what is stored on it.
class PhoneData {
  String deviceId = '';
  String number = '';
  String brand = 'NGMY Phone';
  int city = 0;
  final Set<String> installed = {};
  final List<PhoneContact> contacts = [];
  final List<PhoneMessage> messages = [];
  final List<PhoneEvent> events = [];
  final List<PhoneFile> files = [];
  final List<SavedVideo> playlist = [];

  static const int maxFileBytes = 1500000;
  static const int maxStoreBytes = 4000000;

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
  int get usedBytes => files.fold(0, (a, f) => a + f.b64.length * 3 ~/ 4);
  bool isInstalled(String id) => installed.contains(id);

  void reset() {
    brand = 'NGMY Phone';
    city = 0;
    installed.clear();
    contacts.clear();
    messages.clear();
    events.clear();
    files.clear();
    playlist.clear();
    _identity();
  }

  Map<String, dynamic> toJson() => {
        'id': deviceId,
        'num': number,
        'brand': brand,
        'city': city,
        'inst': installed.toList(),
        'con': [for (final c in contacts) {'n': c.name, 'p': c.number}],
        'msg': [for (final m in messages) {'w': m.who, 'm': m.mine, 't': m.text, 'a': m.at.millisecondsSinceEpoch}],
        'ev': [for (final e in events) {'t': e.title, 'd': e.day.millisecondsSinceEpoch}],
        'files': [for (final f in files) f.toJson()],
        'pl': [for (final p in playlist) p.toJson()],
      };

  void load(Map<String, dynamic>? m) {
    if (m == null) return;
    deviceId = (m['id'] as String?) ?? deviceId;
    number = (m['num'] as String?) ?? number;
    brand = (m['brand'] as String?) ?? brand;
    city = (m['city'] as num?)?.toInt() ?? 0;
    installed
      ..clear()
      ..addAll(((m['inst'] as List?) ?? const []).map((e) => '$e'));
    contacts
      ..clear()
      ..addAll(((m['con'] as List?) ?? const []).map((e) => PhoneContact('${(e as Map)['n']}', '${e['p']}')));
    messages
      ..clear()
      ..addAll(((m['msg'] as List?) ?? const []).map((e) => PhoneMessage('${(e as Map)['w']}', e['m'] == true, '${e['t']}', DateTime.fromMillisecondsSinceEpoch((e['a'] as num).toInt()))));
    events
      ..clear()
      ..addAll(((m['ev'] as List?) ?? const []).map((e) => PhoneEvent('${(e as Map)['t']}', DateTime.fromMillisecondsSinceEpoch((e['d'] as num).toInt()))));
    files
      ..clear()
      ..addAll(((m['files'] as List?) ?? const []).map((e) => PhoneFile.from((e as Map).cast<String, dynamic>())));
    playlist
      ..clear()
      ..addAll(((m['pl'] as List?) ?? const []).map((e) => SavedVideo('${(e as Map)['u']}', '${e['t']}')));
  }
}

/// The page of an app that is not built in (or null if [id] is not one of them).
Widget? buildExtraApp(String id, NgmyVirtualPhoneState p) => switch (id) {
      'store' => PhoneStoreApp(phone: p),
      'files' => PhoneFilesApp(phone: p),
      'contacts' => PhoneContactsApp(phone: p),
      'messages' => PhoneMessagesApp(phone: p),
      'calendar' => PhoneCalendarApp(phone: p),
      'maps' => PhoneMapsApp(phone: p),
      'music' => PhoneMusicApp(phone: p),
      'photos' => PhoneGalleryApp(phone: p),
      'tictactoe' => const PhoneTicTacToeApp(),
      'guess' => const PhoneGuessApp(),
      _ => null,
    };

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

String _mb(int bytes) => '${(bytes / 1000000).toStringAsFixed(1)} MB';

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
          row('Storage', '${_mb(d.usedBytes)} of ${_mb(PhoneData.maxStoreBytes)} used'),
          row('Apps', '${d.installed.length} installed from the App Store'),
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
        child: const Text('Honest note: the phone has its own name, number, files, apps, accounts and place. It uses the internet connection of the device it runs on, so websites still see that device\'s internet address. A browser cannot give a page a different one.', style: TextStyle(fontSize: 12, height: 1.4, color: Color(0xFF78350F))),
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

  void _install(StoreApp a) {
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
    final cats = ['All', ...{for (final a in kStoreApps) a.category}];
    final list = [for (final a in kStoreApps) if ((_cat == 'All' || a.category == _cat) && a.def.label.toLowerCase().contains(_q.toLowerCase())) a];
    return phoneAppPage(
      'App Store',
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
                    Text(a.blurb, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.black54, fontSize: 11.5, height: 1.3)),
                    Text('${a.category} · ${a.sizeMb} MB', style: const TextStyle(color: Colors.black38, fontSize: 11)),
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
            const Padding(padding: EdgeInsets.all(8), child: Text('Apps here are made for this phone. Apps from the Google Play Store or the Apple App Store cannot run inside a web page.', textAlign: TextAlign.center, style: TextStyle(color: Colors.black38, fontSize: 11, height: 1.4))),
          ]),
        ),
      ]),
    );
  }
}

// ── Files and downloads ──────────────────────────────────────────────────────

class PhoneFilesApp extends StatefulWidget {
  const PhoneFilesApp({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<PhoneFilesApp> createState() => _PhoneFilesAppState();
}

class _PhoneFilesAppState extends State<PhoneFilesApp> {
  final _text = TextEditingController();
  bool _busy = false;
  String? _message;

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  String _mimeOf(String name, String? header) {
    if (header != null && header.contains('/') && !header.contains('octet')) return header.split(';').first.trim();
    final n = name.toLowerCase();
    for (final e in const {'.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.mp4': 'video/mp4', '.txt': 'text/plain', '.pdf': 'application/pdf'}.entries) {
      if (n.endsWith(e.key)) return e.value;
    }
    return 'application/octet-stream';
  }

  Future<void> _download() async {
    final l = parseVideoLink(_text.text);
    if (!l.playable) {
      setState(() => _message = 'Paste the link of the file to download.');
      return;
    }
    final d = widget.phone.data;
    setState(() {
      _busy = true;
      _message = 'Downloading…';
    });
    final name = Uri.parse(l.url).pathSegments.where((s) => s.isNotEmpty).lastOrNull ?? Uri.parse(l.url).host;
    try {
      final r = await http.get(Uri.parse(l.url)).timeout(const Duration(seconds: 25));
      if (r.statusCode != 200) throw 'status ${r.statusCode}';
      final bytes = r.bodyBytes;
      if (bytes.length > PhoneData.maxFileBytes) {
        d.addFile(PhoneFile('$name (link)', 'link', '', 0, DateTime.now(), link: l.url));
        _message = 'That file is ${_mb(bytes.length)}, more than this phone keeps (${_mb(PhoneData.maxFileBytes)} a file), so a shortcut to it was saved instead.';
      } else if (d.usedBytes + bytes.length > PhoneData.maxStoreBytes) {
        _message = 'The phone storage is full. Delete a file first.';
      } else {
        d.addFile(PhoneFile(Uri.decodeComponent(name), _mimeOf(name, r.headers['content-type']), base64Encode(bytes), bytes.length, DateTime.now(), link: l.url));
        _message = 'Downloaded ${Uri.decodeComponent(name)} (${_mb(bytes.length)}).';
      }
      widget.phone.saveData();
    } catch (_) {
      d.addFile(PhoneFile('$name (link)', 'link', '', 0, DateTime.now(), link: l.url));
      widget.phone.saveData();
      _message = 'The site did not let this phone download the file (a browser rule), so a shortcut to it was saved instead.';
    }
    if (mounted) setState(() => _busy = false);
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.phone.data;
    return phoneAppPage(
      'Files',
      ListView(padding: const EdgeInsets.fromLTRB(12, 0, 12, 20), children: [
        Row(children: [
          Expanded(child: TextField(key: const Key('vphone-dl-field'), controller: _text, keyboardType: TextInputType.url, onSubmitted: (_) => _download(), decoration: _field('Link of a file to download'))),
          const SizedBox(width: 6),
          FilledButton(key: const Key('vphone-dl'), onPressed: _busy ? null : _download, child: const Icon(Icons.download_rounded)),
        ]),
        if (_message != null) Padding(padding: const EdgeInsets.only(top: 8), child: Text(_message!, key: const Key('vphone-dl-msg'), style: const TextStyle(fontSize: 12.5, color: Colors.black54))),
        const SizedBox(height: 10),
        LinearProgressIndicator(value: d.usedBytes / PhoneData.maxStoreBytes, minHeight: 6),
        Padding(padding: const EdgeInsets.symmetric(vertical: 4), child: Text('${_mb(d.usedBytes)} of ${_mb(PhoneData.maxStoreBytes)} used on this phone', style: const TextStyle(fontSize: 11.5, color: Colors.black45))),
        if (d.files.isEmpty) const Padding(padding: EdgeInsets.all(30), child: Center(child: Text('Nothing downloaded yet', style: TextStyle(color: Colors.black45)))),
        for (var i = 0; i < d.files.length; i++)
          ListTile(
            key: Key('vphone-file-$i'),
            contentPadding: EdgeInsets.zero,
            leading: d.files[i].isImage ? ClipRRect(borderRadius: BorderRadius.circular(8), child: Image.memory(d.files[i].bytes, width: 44, height: 44, fit: BoxFit.cover, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_rounded))) : Icon(d.files[i].mime == 'link' ? Icons.link_rounded : (d.files[i].mime.startsWith('audio') ? Icons.audiotrack_rounded : Icons.insert_drive_file_rounded), size: 34),
            title: Text(d.files[i].name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
            subtitle: Text(d.files[i].mime == 'link' ? 'Shortcut' : _mb(d.files[i].size), style: const TextStyle(fontSize: 11.5)),
            trailing: IconButton(onPressed: () => setState(() {
                  d.files.removeAt(i);
                  widget.phone.saveData();
                }), icon: const Icon(Icons.delete_outline_rounded)),
          ),
      ]),
    );
  }
}

extension PhoneFileAdd on PhoneData {
  void addFile(PhoneFile f) => files.insert(0, f);
}

// ── Contacts ─────────────────────────────────────────────────────────────────

class PhoneContactsApp extends StatefulWidget {
  const PhoneContactsApp({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<PhoneContactsApp> createState() => _PhoneContactsAppState();
}

class _PhoneContactsAppState extends State<PhoneContactsApp> {
  final _name = TextEditingController(), _num = TextEditingController();

  @override
  void dispose() {
    _name.dispose();
    _num.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.phone.data;
    final list = [...d.contacts]..sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));
    return phoneAppPage(
      'Contacts',
      Column(children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12),
          child: Row(children: [
            Expanded(child: TextField(key: const Key('vphone-con-name'), controller: _name, decoration: _field('Name'))),
            const SizedBox(width: 6),
            Expanded(child: TextField(key: const Key('vphone-con-num'), controller: _num, keyboardType: TextInputType.phone, decoration: _field('Number'))),
            IconButton(
              key: const Key('vphone-con-add'),
              onPressed: () {
                if (_name.text.trim().isEmpty) return;
                setState(() => d.contacts.add(PhoneContact(_name.text.trim(), _num.text.trim())));
                _name.clear();
                _num.clear();
                widget.phone.saveData();
              },
              icon: const Icon(Icons.person_add_alt_1_rounded, color: Color(0xFF0369A1)),
            ),
          ]),
        ),
        Expanded(
          child: list.isEmpty
              ? const Center(child: Text('No contacts yet', style: TextStyle(color: Colors.black45)))
              : ListView(children: [
                  for (final c in list)
                    ListTile(
                      leading: CircleAvatar(backgroundColor: const Color(0xFF38BDF8), child: Text(c.name[0].toUpperCase(), style: const TextStyle(color: Colors.white))),
                      title: Text(c.name, style: const TextStyle(fontWeight: FontWeight.w700)),
                      subtitle: Text(c.number),
                      trailing: IconButton(onPressed: () => setState(() {
                            d.contacts.remove(c);
                            widget.phone.saveData();
                          }), icon: const Icon(Icons.delete_outline_rounded)),
                    ),
                ]),
        ),
      ]),
    );
  }
}

// ── Messages ─────────────────────────────────────────────────────────────────

class PhoneMessagesApp extends StatefulWidget {
  const PhoneMessagesApp({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<PhoneMessagesApp> createState() => _PhoneMessagesAppState();
}

class _PhoneMessagesAppState extends State<PhoneMessagesApp> {
  String? _who;
  final _text = TextEditingController();

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.phone.data;
    if (_who == null) {
      return phoneAppPage(
        'Messages',
        d.contacts.isEmpty
            ? const Center(child: Padding(padding: EdgeInsets.all(24), child: Text('Add a contact in Contacts first, then write to them here.', textAlign: TextAlign.center, style: TextStyle(color: Colors.black45))))
            : ListView(children: [
                for (final c in d.contacts)
                  ListTile(
                    key: Key('vphone-msg-${c.name}'),
                    leading: CircleAvatar(backgroundColor: const Color(0xFF4ADE80), child: Text(c.name[0].toUpperCase(), style: const TextStyle(color: Colors.white))),
                    title: Text(c.name, style: const TextStyle(fontWeight: FontWeight.w700)),
                    subtitle: Text(d.messages.where((m) => m.who == c.name).lastOrNull?.text ?? 'No messages yet', maxLines: 1, overflow: TextOverflow.ellipsis),
                    onTap: () => setState(() => _who = c.name),
                  ),
              ]),
      );
    }
    final thread = d.messages.where((m) => m.who == _who).toList();
    return phoneAppPage(
      _who!,
      Column(children: [
        Expanded(
          child: ListView(padding: const EdgeInsets.all(12), children: [
            for (final m in thread)
              Align(
                alignment: m.mine ? Alignment.centerRight : Alignment.centerLeft,
                child: Container(margin: const EdgeInsets.symmetric(vertical: 3), padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8), decoration: BoxDecoration(color: m.mine ? const Color(0xFF22C55E) : const Color(0xFFE2E8F0), borderRadius: BorderRadius.circular(16)), child: Text(m.text, style: TextStyle(color: m.mine ? Colors.white : Colors.black87))),
              ),
            const Padding(padding: EdgeInsets.all(8), child: Text('Messages stay on this phone.', textAlign: TextAlign.center, style: TextStyle(color: Colors.black38, fontSize: 11))),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(8, 0, 8, 6),
          child: Row(children: [
            IconButton(onPressed: () => setState(() => _who = null), icon: const Icon(Icons.arrow_back_rounded)),
            Expanded(child: TextField(key: const Key('vphone-msg-field'), controller: _text, decoration: _field('Message'))),
            IconButton(
              key: const Key('vphone-msg-send'),
              onPressed: () {
                final t = _text.text.trim();
                if (t.isEmpty) return;
                setState(() => d.messages.add(PhoneMessage(_who!, true, t, DateTime.now())));
                _text.clear();
                widget.phone.saveData();
              },
              icon: const Icon(Icons.send_rounded, color: Color(0xFF15803D)),
            ),
          ]),
        ),
      ]),
    );
  }
}

// ── Calendar ─────────────────────────────────────────────────────────────────

class PhoneCalendarApp extends StatefulWidget {
  const PhoneCalendarApp({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<PhoneCalendarApp> createState() => _PhoneCalendarAppState();
}

class _PhoneCalendarAppState extends State<PhoneCalendarApp> {
  final _title = TextEditingController();
  DateTime _day = DateTime.now();

  @override
  void dispose() {
    _title.dispose();
    super.dispose();
  }

  String _fmt(DateTime d) => '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';

  @override
  Widget build(BuildContext context) {
    final d = widget.phone.data;
    final list = [...d.events]..sort((a, b) => a.day.compareTo(b.day));
    return phoneAppPage(
      'Calendar',
      Column(children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12),
          child: Row(children: [
            Expanded(child: TextField(key: const Key('vphone-ev-title'), controller: _title, decoration: _field('Event'))),
            TextButton(
              key: const Key('vphone-ev-day'),
              onPressed: () async {
                final r = await showDatePicker(context: context, initialDate: _day, firstDate: DateTime(2020), lastDate: DateTime(2100));
                if (r != null) setState(() => _day = r);
              },
              child: Text(_fmt(_day)),
            ),
            IconButton(
              key: const Key('vphone-ev-add'),
              onPressed: () {
                if (_title.text.trim().isEmpty) return;
                setState(() => d.events.add(PhoneEvent(_title.text.trim(), _day)));
                _title.clear();
                widget.phone.saveData();
              },
              icon: const Icon(Icons.add_circle_rounded, color: Color(0xFFB91C1C), size: 30),
            ),
          ]),
        ),
        Expanded(
          child: list.isEmpty
              ? const Center(child: Text('No events', style: TextStyle(color: Colors.black45)))
              : ListView(children: [
                  for (final e in list)
                    ListTile(
                      leading: const Icon(Icons.event_rounded, color: Color(0xFFB91C1C)),
                      title: Text(e.title, style: const TextStyle(fontWeight: FontWeight.w700)),
                      subtitle: Text(_fmt(e.day)),
                      trailing: IconButton(onPressed: () => setState(() {
                            d.events.remove(e);
                            widget.phone.saveData();
                          }), icon: const Icon(Icons.close_rounded)),
                    ),
                ]),
        ),
      ]),
    );
  }
}

// ── Maps ─────────────────────────────────────────────────────────────────────

class PhoneMapsApp extends StatelessWidget {
  const PhoneMapsApp({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  Widget build(BuildContext context) {
    final c = phone.data.where;
    const span = 0.03;
    final url = 'https://www.openstreetmap.org/export/embed.html?bbox=${c.lon - span},${c.lat - span},${c.lon + span},${c.lat + span}&layer=mapnik&marker=${c.lat},${c.lon}';
    return phoneAppPage(
      'Maps',
      Column(children: [
        Padding(padding: const EdgeInsets.all(10), child: Row(children: [const Icon(Icons.place_rounded, color: Color(0xFFDC2626)), const SizedBox(width: 6), Expanded(child: Text('This phone is in ${c.name}, ${c.country}', key: const Key('vphone-map-place'), style: const TextStyle(fontWeight: FontWeight.w700)))])),
        Expanded(child: VPhonePlayer(key: ValueKey(url), link: VPhoneLink(VPhoneLinkKind.page, url, url, 'Map'))),
      ]),
    );
  }
}

// ── Music ────────────────────────────────────────────────────────────────────

class PhoneMusicApp extends StatefulWidget {
  const PhoneMusicApp({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<PhoneMusicApp> createState() => _PhoneMusicAppState();
}

class _PhoneMusicAppState extends State<PhoneMusicApp> {
  final _text = TextEditingController();
  VPhoneLink _now = VPhoneLink.none;
  int _id = 0;

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  void _play(String raw) {
    final l = parseVideoLink(raw);
    if (!l.playable) return;
    setState(() {
      _now = l;
      _id++;
      _text.text = l.url;
    });
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.phone.data;
    return phoneAppPage(
      'Music',
      dark: true,
      ListView(padding: const EdgeInsets.fromLTRB(12, 0, 12, 20), children: [
        Row(children: [
          Expanded(child: TextField(key: const Key('vphone-music-field'), controller: _text, style: const TextStyle(color: Colors.white), onSubmitted: _play, decoration: _field('Link of a song or any sound').copyWith(fillColor: Colors.white10, hintStyle: const TextStyle(color: Colors.white38)))),
          IconButton(onPressed: () => _play(_text.text), icon: const Icon(Icons.play_circle_fill_rounded, color: Color(0xFFF472B6), size: 34)),
        ]),
        if (_now.playable) ...[
          const SizedBox(height: 10),
          ClipRRect(borderRadius: BorderRadius.circular(14), child: SizedBox(height: _now.kind == VPhoneLinkKind.file ? 70 : 200, child: VPhonePlayer(key: ValueKey(_id), link: _now))),
          Row(children: [
            Expanded(child: Text(_now.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700))),
            TextButton(
              key: const Key('vphone-music-add'),
              onPressed: () {
                if (!d.playlist.any((p) => p.url == _now.url)) setState(() => d.playlist.add(SavedVideo(_now.url, _now.title)));
                widget.phone.saveData();
              },
              child: const Text('Add to playlist'),
            ),
          ]),
        ],
        const SizedBox(height: 14),
        const Text('Playlist', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
        if (d.playlist.isEmpty) const Padding(padding: EdgeInsets.all(14), child: Text('Nothing here yet', style: TextStyle(color: Colors.white38))),
        for (final s in d.playlist)
          ListTile(
            contentPadding: EdgeInsets.zero,
            leading: const Icon(Icons.music_note_rounded, color: Color(0xFFF472B6)),
            title: Text(s.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white)),
            trailing: IconButton(onPressed: () => setState(() {
                  d.playlist.remove(s);
                  widget.phone.saveData();
                }), icon: const Icon(Icons.close_rounded, color: Colors.white54)),
            onTap: () => _play(s.url),
          ),
      ]),
    );
  }
}

// ── Photos ───────────────────────────────────────────────────────────────────

class PhoneGalleryApp extends StatefulWidget {
  const PhoneGalleryApp({super.key, required this.phone});
  final NgmyVirtualPhoneState phone;

  @override
  State<PhoneGalleryApp> createState() => _PhoneGalleryAppState();
}

class _PhoneGalleryAppState extends State<PhoneGalleryApp> {
  PhoneFile? _open;

  @override
  Widget build(BuildContext context) {
    final pics = widget.phone.data.files.where((f) => f.isImage).toList();
    if (_open != null) {
      return phoneAppPage(
        _open!.name,
        GestureDetector(onTap: () => setState(() => _open = null), child: Container(color: Colors.black, child: Center(child: InteractiveViewer(child: Image.memory(_open!.bytes))))),
        dark: true,
      );
    }
    return phoneAppPage(
      'Photos',
      pics.isEmpty
          ? const Center(child: Padding(padding: EdgeInsets.all(24), child: Text('No pictures yet. Download an image link in Files and it shows up here.', textAlign: TextAlign.center, style: TextStyle(color: Colors.black45))))
          : GridView.count(padding: const EdgeInsets.all(6), crossAxisCount: 3, mainAxisSpacing: 4, crossAxisSpacing: 4, children: [for (final f in pics) GestureDetector(onTap: () => setState(() => _open = f), child: Image.memory(f.bytes, fit: BoxFit.cover, errorBuilder: (_, __, ___) => const ColoredBox(color: Colors.black12)))]),
    );
  }
}

// ── Games ────────────────────────────────────────────────────────────────────

/// The noughts and crosses logic, apart from the screen so it can be tested.
class TicTacToe {
  final List<String> cells = List.filled(9, '');
  static const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ];

  String? get winner {
    for (final l in lines) {
      final a = cells[l[0]];
      if (a.isNotEmpty && a == cells[l[1]] && a == cells[l[2]]) return a;
    }
    return null;
  }

  bool get full => cells.every((c) => c.isNotEmpty);
  bool get over => winner != null || full;

  /// You are X. The phone (O) wins when it can, blocks when it must, and otherwise takes the middle, a corner, then any place.
  void play(int i) {
    if (over || cells[i].isNotEmpty) return;
    cells[i] = 'X';
    if (over) return;
    int? pick(String who) {
      for (final l in lines) {
        final marks = l.where((k) => cells[k] == who).length;
        final empty = l.where((k) => cells[k].isEmpty).toList();
        if (marks == 2 && empty.length == 1) return empty.first;
      }
      return null;
    }

    final m = pick('O') ?? pick('X') ?? (cells[4].isEmpty ? 4 : [0, 2, 6, 8, 1, 3, 5, 7].firstWhere((k) => cells[k].isEmpty));
    cells[m] = 'O';
  }
}

class PhoneTicTacToeApp extends StatefulWidget {
  const PhoneTicTacToeApp({super.key});

  @override
  State<PhoneTicTacToeApp> createState() => _PhoneTicTacToeAppState();
}

class _PhoneTicTacToeAppState extends State<PhoneTicTacToeApp> {
  var g = TicTacToe();

  @override
  Widget build(BuildContext context) {
    final w = g.winner;
    return phoneAppPage(
      'Tic Tac Toe',
      Center(
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Text(w != null ? (w == 'X' ? 'You win!' : 'The phone wins') : (g.full ? 'A draw' : 'Your turn (X)'), key: const Key('vphone-ttt-status'), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
          const SizedBox(height: 12),
          SizedBox(
            width: 210,
            height: 210,
            child: GridView.count(crossAxisCount: 3, mainAxisSpacing: 6, crossAxisSpacing: 6, physics: const NeverScrollableScrollPhysics(), children: [
              for (var i = 0; i < 9; i++)
                GestureDetector(
                  key: Key('vphone-ttt-$i'),
                  onTap: () => setState(() => g.play(i)),
                  child: Container(decoration: BoxDecoration(color: const Color(0xFFEDE9FE), borderRadius: BorderRadius.circular(12)), alignment: Alignment.center, child: Text(g.cells[i], style: TextStyle(fontSize: 38, fontWeight: FontWeight.w900, color: g.cells[i] == 'X' ? const Color(0xFF5B21B6) : const Color(0xFFDC2626)))),
                ),
            ]),
          ),
          const SizedBox(height: 12),
          FilledButton(onPressed: () => setState(() => g = TicTacToe()), child: const Text('New game')),
        ]),
      ),
    );
  }
}

class PhoneGuessApp extends StatefulWidget {
  const PhoneGuessApp({super.key});

  @override
  State<PhoneGuessApp> createState() => _PhoneGuessAppState();
}

class _PhoneGuessAppState extends State<PhoneGuessApp> {
  int secret = math.Random().nextInt(100) + 1;
  int tries = 0;
  String hint = 'I am thinking of a number from 1 to 100.';
  final _t = TextEditingController();

  @override
  void dispose() {
    _t.dispose();
    super.dispose();
  }

  void guess() {
    final n = int.tryParse(_t.text.trim());
    if (n == null || n < 1 || n > 100) {
      setState(() => hint = 'Type a number from 1 to 100.');
      return;
    }
    setState(() {
      tries++;
      hint = n == secret ? 'Yes! It was $secret. You needed $tries ${tries == 1 ? 'try' : 'tries'}.' : (n < secret ? '$n is too low.' : '$n is too high.');
      if (n == secret) {
        secret = math.Random().nextInt(100) + 1;
        tries = 0;
      }
    });
    _t.clear();
  }

  @override
  Widget build(BuildContext context) => phoneAppPage(
        'Number Guess',
        Padding(
          padding: const EdgeInsets.all(20),
          child: Column(children: [
            Text(hint, key: const Key('vphone-guess-hint'), textAlign: TextAlign.center, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700)),
            const SizedBox(height: 16),
            TextField(key: const Key('vphone-guess-field'), controller: _t, keyboardType: TextInputType.number, onSubmitted: (_) => guess(), decoration: _field('Your guess')),
            const SizedBox(height: 10),
            FilledButton(key: const Key('vphone-guess-go'), onPressed: guess, child: const Text('Guess')),
          ]),
        ),
      );
}
