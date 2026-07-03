import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:geolocator/geolocator.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_hub_form_ui.dart';

const _kStorageKey = 'ngmy_saved_locations_v2';

String _locationsKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

class NgmySavedLocation {
  NgmySavedLocation({
    String? id,
    required this.name,
    required this.address,
    required this.category,
    this.lat,
    this.lng,
    this.notes = '',
    this.visitCount = 0,
    DateTime? lastVisited,
    DateTime? createdAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        lastVisited = lastVisited,
        createdAt = createdAt ?? DateTime.now();

  final String id;
  final String name;
  final String address;
  final String category;
  final double? lat;
  final double? lng;
  final String notes;
  final int visitCount;
  final DateTime? lastVisited;
  final DateTime createdAt;

  bool get hasGps => lat != null && lng != null;

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'address': address,
        'category': category,
        'notes': notes,
        'visitCount': visitCount,
        if (lat != null) 'lat': lat,
        if (lng != null) 'lng': lng,
        if (lastVisited != null) 'lastVisited': lastVisited!.toIso8601String(),
        'createdAt': createdAt.toIso8601String(),
      };

  factory NgmySavedLocation.fromJson(Map<String, dynamic> json) => NgmySavedLocation(
        id: (json['id'] ?? '').toString(),
        name: (json['name'] ?? '').toString(),
        address: (json['address'] ?? '').toString(),
        category: (json['category'] ?? 'Other').toString(),
        lat: (json['lat'] as num?)?.toDouble(),
        lng: (json['lng'] as num?)?.toDouble(),
        notes: (json['notes'] ?? '').toString(),
        visitCount: (json['visitCount'] as num?)?.toInt() ?? 0,
        lastVisited: DateTime.tryParse((json['lastVisited'] ?? '').toString()),
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      );

  NgmySavedLocation copyWith({
    String? name,
    String? address,
    String? category,
    double? lat,
    double? lng,
    String? notes,
    int? visitCount,
    DateTime? lastVisited,
  }) =>
      NgmySavedLocation(
        id: id,
        name: name ?? this.name,
        address: address ?? this.address,
        category: category ?? this.category,
        lat: lat ?? this.lat,
        lng: lng ?? this.lng,
        notes: notes ?? this.notes,
        visitCount: visitCount ?? this.visitCount,
        lastVisited: lastVisited ?? this.lastVisited,
        createdAt: createdAt,
      );
}

Future<List<NgmySavedLocation>> _loadLocations(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_locationsKey(userEmail));
  if (raw != null && raw.isNotEmpty) {
    try {
      final list = jsonDecode(raw);
      if (list is List) {
        return list
            .whereType<Map>()
            .map((e) => NgmySavedLocation.fromJson(Map<String, dynamic>.from(e)))
            .where((e) => e.id.isNotEmpty)
            .toList();
      }
    } catch (_) {}
  }
  return _migrateLegacyLocation(userEmail);
}

Future<List<NgmySavedLocation>> _migrateLegacyLocation(String userEmail) async {
  final e = userEmail.toLowerCase().trim();
  final legacyKey = 'ngmy_daily_park_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(legacyKey);
  if (raw == null || raw.isEmpty) return [];
  try {
    final m = jsonDecode(raw);
    if (m is! Map) return [];
    final name = (m['level'] ?? m['site'] ?? '').toString();
    final address = (m['spot'] ?? m['address'] ?? '').toString();
    if (name.isEmpty && address.isEmpty) return [];
    final loc = NgmySavedLocation(
      name: name.isEmpty ? 'Saved place' : name,
      address: address,
      category: 'Client Site',
      lat: double.tryParse((m['lat'] ?? '').toString()),
      lng: double.tryParse((m['lng'] ?? '').toString()),
    );
    await _saveLocations(userEmail, [loc]);
    return [loc];
  } catch (_) {
    return [];
  }
}

Future<void> _saveLocations(String userEmail, List<NgmySavedLocation> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_locationsKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmySavedLocationCount({required String userEmail}) async {
  return (await _loadLocations(userEmail)).length;
}

Future<List<NgmySavedLocation>> ngmyExportSavedLocations({required String userEmail}) => _loadLocations(userEmail);

Future<void> ngmyImportSavedLocations({required String userEmail, required List<NgmySavedLocation> items}) async {
  final existing = await _loadLocations(userEmail);
  final byId = {for (final e in existing) e.id: e};
  for (final item in items) {
    byId[item.id] = item;
  }
  await _saveLocations(userEmail, byId.values.toList());
}

Future<void> showNgmySavedLocationsDialog(BuildContext context, {required String userEmail}) {
  final t = NgmyHubTheme.of(context);
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Saved Locations',
    barrierColor: t.barrier,
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (ctx, a1, a2) => _SavedLocationsScreen(userEmail: userEmail),
    transitionBuilder: (ctx, anim, _, child) {
      final slide = Tween<Offset>(begin: const Offset(0, 0.06), end: Offset.zero)
          .animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
      return FadeTransition(opacity: anim, child: SlideTransition(position: slide, child: child));
    },
  );
}

class _SavedLocationsScreen extends StatefulWidget {
  const _SavedLocationsScreen({required this.userEmail});

  final String userEmail;

  @override
  State<_SavedLocationsScreen> createState() => _SavedLocationsScreenState();
}

class _SavedLocationsScreenState extends State<_SavedLocationsScreen> {
  static const _categories = ['All', 'Client Site', 'Office', 'Warehouse', 'Delivery', 'Meeting', 'Other'];
  static const _categoryColors = {
    'Client Site': Color(0xFF38BDF8),
    'Office': Color(0xFF34D399),
    'Warehouse': Color(0xFFA78BFA),
    'Delivery': Color(0xFFFBBF24),
    'Meeting': Color(0xFFFB7185),
    'Other': Color(0xFF94A3B8),
  };

  List<NgmySavedLocation> _locations = [];
  String _filter = 'All';
  bool _loading = true;
  bool _sortByDistance = false;
  Position? _here;

  @override
  void initState() {
    super.initState();
    _reload();
    _refreshGps();
  }

  Future<void> _reload() async {
    final list = await _loadLocations(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _locations = list;
      _loading = false;
    });
  }

  Future<void> _refreshGps() async {
    try {
      var perm = await Geolocator.checkPermission();
      if (perm == LocationPermission.denied) perm = await Geolocator.requestPermission();
      if (perm == LocationPermission.denied || perm == LocationPermission.deniedForever) return;
      final pos = await Geolocator.getCurrentPosition();
      if (mounted) setState(() => _here = pos);
    } catch (_) {}
  }

  Future<void> _persist(List<NgmySavedLocation> list) async {
    await _saveLocations(widget.userEmail, list);
    if (mounted) setState(() => _locations = list);
  }

  double? _distanceKm(NgmySavedLocation loc) {
    if (_here == null || !loc.hasGps) return null;
    return Geolocator.distanceBetween(_here!.latitude, _here!.longitude, loc.lat!, loc.lng!) / 1000;
  }

  List<NgmySavedLocation> get _visible {
    var list = _locations.where((l) => _filter == 'All' || l.category == _filter).toList();
    if (_sortByDistance && _here != null) {
      list.sort((a, b) {
        final da = _distanceKm(a) ?? double.infinity;
        final db = _distanceKm(b) ?? double.infinity;
        return da.compareTo(db);
      });
    } else {
      list.sort((a, b) => (b.lastVisited ?? b.createdAt).compareTo(a.lastVisited ?? a.createdAt));
    }
    return list;
  }

  Future<void> _openEditor({NgmySavedLocation? existing}) async {
    final saved = await showNgmyModernEditorPage<NgmySavedLocation>(
      context,
      _LocationEditorPage(existing: existing),
    );
    if (saved == null) return;
    final list = List<NgmySavedLocation>.from(_locations);
    final idx = list.indexWhere((e) => e.id == saved.id);
    if (idx >= 0) {
      list[idx] = saved;
    } else {
      list.add(saved);
    }
    await _persist(list);
  }

  Future<void> _recordVisit(NgmySavedLocation loc) async {
    final updated = loc.copyWith(visitCount: loc.visitCount + 1, lastVisited: DateTime.now());
    await _persist(_locations.map((e) => e.id == loc.id ? updated : e).toList());
  }

  Future<void> _navigate(NgmySavedLocation loc) async {
    await _recordVisit(loc);
    if (loc.hasGps) {
      final uri = Uri.parse('https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}');
      if (await canLaunchUrl(uri)) await launchUrl(uri, mode: LaunchMode.externalApplication);
      return;
    }
    if (loc.address.trim().isNotEmpty) {
      final uri = Uri.parse('https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent(loc.address.trim())}');
      if (await canLaunchUrl(uri)) await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  Future<void> _delete(NgmySavedLocation loc) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) {
        final t = NgmyHubTheme.of(ctx);
        return AlertDialog(
          backgroundColor: t.dialogBg,
          title: Text('Delete location?', style: TextStyle(color: t.title)),
          content: Text('Remove ${loc.name}?', style: TextStyle(color: t.subtitle)),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
          ],
        );
      },
    );
    if (ok != true) return;
    await _persist(_locations.where((e) => e.id != loc.id).toList());
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final visible = _visible;
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    const accent = Color(0xFF34D399);

    return Material(
      color: t.scaffold,
      child: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: 160,
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [accent.withValues(alpha: t.isDark ? 0.2 : 0.12), t.heroGradientEnd],
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                ),
              ),
            ),
          ),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: () => Navigator.pop(context),
                        icon: Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(color: t.iconButtonBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: t.border)),
                          child: Icon(Icons.arrow_back_ios_new_rounded, color: t.iconButtonIcon, size: 18),
                        ),
                      ),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Site Map', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 18)),
                            Text('Addresses & pins', style: TextStyle(color: accent, fontWeight: FontWeight.w700, fontSize: 11)),
                          ],
                        ),
                      ),
                      IconButton(
                        onPressed: () => _openEditor(),
                        icon: Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            gradient: const LinearGradient(colors: [Color(0xFF34D399), Color(0xFF059669)]),
                            borderRadius: BorderRadius.circular(14),
                          ),
                          child: const Icon(Icons.add_location_alt_rounded, color: Colors.black, size: 22),
                        ),
                      ),
                    ],
                  ),
                ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () async {
                        await _refreshGps();
                        setState(() => _sortByDistance = !_sortByDistance);
                      },
                      icon: Icon(_sortByDistance ? Icons.near_me_rounded : Icons.sort_rounded, size: 16),
                      label: Text(_sortByDistance ? 'Nearest first' : 'Sort by recent'),
                      style: OutlinedButton.styleFrom(foregroundColor: accent),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 44,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.fromLTRB(16, 10, 16, 0),
                itemCount: _categories.length,
                separatorBuilder: (_, __) => const SizedBox(width: 8),
                itemBuilder: (_, i) {
                  final cat = _categories[i];
                  final selected = _filter == cat;
                  return FilterChip(
                    label: Text(cat),
                    selected: selected,
                    onSelected: (_) => setState(() => _filter = cat),
                    selectedColor: accent.withValues(alpha: t.isDark ? 0.25 : 0.18),
                    backgroundColor: t.chipOffBg,
                    checkmarkColor: accent,
                    labelStyle: TextStyle(color: selected ? accent : t.chipOffLabel, fontWeight: FontWeight.w600),
                  );
                },
              ),
            ),
            Expanded(
              child: _loading
                  ? Center(child: CircularProgressIndicator(color: accent))
                  : visible.isEmpty
                      ? Center(
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(Icons.map_rounded, size: 56, color: t.muted.withValues(alpha: 0.5)),
                                const SizedBox(height: 12),
                                Text('Your business site map', style: TextStyle(color: t.title, fontWeight: FontWeight.w700, fontSize: 16)),
                                const SizedBox(height: 6),
                                Text(
                                  'Pin client sites, offices, warehouses, and delivery drops — navigate in one tap.',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(color: t.subtitle, fontSize: 13),
                                ),
                                const SizedBox(height: 16),
                                FilledButton.icon(
                                  onPressed: () => _openEditor(),
                                  icon: const Icon(Icons.add_rounded),
                                  label: const Text('Add first location'),
                                ),
                              ],
                            ),
                          ),
                        )
                      : ListView.builder(
                          padding: EdgeInsets.fromLTRB(16, 12, 16, 24 + bottom),
                          itemCount: visible.length,
                          itemBuilder: (_, i) {
                            final loc = visible[i];
                            final color = _categoryColors[loc.category] ?? _categoryColors['Other']!;
                            final dist = _distanceKm(loc);
                            return _LocationCard(
                              location: loc,
                              accent: color,
                              distanceLabel: dist != null ? '${dist < 1 ? (dist * 1000).round() : dist.toStringAsFixed(1)} ${dist < 1 ? 'm' : 'km'} away' : null,
                              onNavigate: () => _navigate(loc),
                              onEdit: () => _openEditor(existing: loc),
                              onDelete: () => _delete(loc),
                              onCopy: () async {
                                final text = loc.hasGps
                                    ? '${loc.name}\n${loc.address}\n${loc.lat}, ${loc.lng}'
                                    : '${loc.name}\n${loc.address}';
                                await Clipboard.setData(ClipboardData(text: text));
                                if (context.mounted) {
                                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Copied address')));
                                }
                              },
                            );
                          },
                        ),
            ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _LocationEditorPage extends StatefulWidget {
  const _LocationEditorPage({this.existing});

  final NgmySavedLocation? existing;

  @override
  State<_LocationEditorPage> createState() => _LocationEditorPageState();
}

class _LocationEditorPageState extends State<_LocationEditorPage> {
  static const _accent = Color(0xFF34D399);
  late final TextEditingController _name;
  late final TextEditingController _address;
  late final TextEditingController _notes;
  String _category = 'Client Site';
  double? _lat;
  double? _lng;
  bool _locating = false;
  DateTime? _lastVisited;

  @override
  void initState() {
    super.initState();
    final e = widget.existing;
    _name = TextEditingController(text: e?.name ?? '');
    _address = TextEditingController(text: e?.address ?? '');
    _notes = TextEditingController(text: e?.notes ?? '');
    _category = e?.category ?? 'Client Site';
    _lat = e?.lat;
    _lng = e?.lng;
    _lastVisited = e?.lastVisited;
  }

  @override
  void dispose() {
    _name.dispose();
    _address.dispose();
    _notes.dispose();
    super.dispose();
  }

  Future<void> _captureGps() async {
    setState(() => _locating = true);
    try {
      var perm = await Geolocator.checkPermission();
      if (perm == LocationPermission.denied) perm = await Geolocator.requestPermission();
      if (perm == LocationPermission.denied || perm == LocationPermission.deniedForever) {
        if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Allow location to save GPS pin')));
        return;
      }
      final pos = await Geolocator.getCurrentPosition();
      setState(() {
        _lat = pos.latitude;
        _lng = pos.longitude;
      });
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('GPS failed: $e')));
    } finally {
      if (mounted) setState(() => _locating = false);
    }
  }

  void _save() {
    if (_name.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a location name')));
      return;
    }
    Navigator.pop(
      context,
      NgmySavedLocation(
        id: widget.existing?.id,
        name: _name.text.trim(),
        address: _address.text.trim(),
        category: _category,
        lat: _lat,
        lng: _lng,
        notes: _notes.text.trim(),
        visitCount: widget.existing?.visitCount ?? 0,
        lastVisited: _lastVisited,
        createdAt: widget.existing?.createdAt,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isNew = widget.existing == null;
    return NgmyModernEditorPage(
      title: isNew ? 'New Location' : 'Edit Location',
      subtitle: isNew ? 'Pin a client site, office, or delivery drop.' : 'Update this saved place.',
      accent: _accent,
      icon: Icons.map_rounded,
      onClose: () => Navigator.pop(context),
      onSave: _save,
      saveLabel: isNew ? 'Save Location' : 'Update Location',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          NgmyModernField(controller: _name, label: 'Name', hint: 'Office, client site, warehouse…', icon: Icons.label_outline_rounded, accent: _accent),
          NgmyModernField(controller: _address, label: 'Address', hint: 'Street, suite, landmark', icon: Icons.location_on_outlined, accent: _accent),
          Text('TYPE', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 8),
          NgmyModernChipRow(
            options: const ['Client Site', 'Office', 'Warehouse', 'Delivery', 'Meeting', 'Other'],
            selected: _category,
            accent: _accent,
            onSelected: (v) => setState(() => _category = v),
          ),
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: _locating ? null : _captureGps,
              borderRadius: BorderRadius.circular(14),
              child: Ink(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: _accent.withValues(alpha: 0.45)),
                  gradient: LinearGradient(colors: [_accent.withValues(alpha: 0.15), _accent.withValues(alpha: 0.05)]),
                ),
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                child: Row(
                  children: [
                    Icon(_locating ? Icons.hourglass_top_rounded : Icons.my_location_rounded, color: _accent),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        _locating
                            ? 'Getting GPS…'
                            : (_lat != null ? 'GPS pinned: ${_lat!.toStringAsFixed(5)}, ${_lng!.toStringAsFixed(5)}' : 'Tap to drop GPS pin here'),
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w600, fontSize: 13),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          const SizedBox(height: 14),
          NgmyModernDateField(label: 'Last visit', value: _lastVisited, accent: _accent, onChanged: (d) => setState(() => _lastVisited = d)),
          NgmyModernField(controller: _notes, label: 'Notes', hint: 'Gate code, contact on site…', icon: Icons.notes_rounded, accent: _accent, maxLines: 2),
        ],
      ),
    );
  }
}

class _LocationCard extends StatelessWidget {
  const _LocationCard({
    required this.location,
    required this.accent,
    required this.onNavigate,
    required this.onEdit,
    required this.onDelete,
    required this.onCopy,
    this.distanceLabel,
  });

  final NgmySavedLocation location;
  final Color accent;
  final String? distanceLabel;
  final VoidCallback onNavigate;
  final VoidCallback onEdit;
  final VoidCallback onDelete;
  final VoidCallback onCopy;

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: t.listItemBg,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: accent.withValues(alpha: 0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ListTile(
            contentPadding: const EdgeInsets.fromLTRB(14, 4, 8, 0),
            leading: CircleAvatar(
              backgroundColor: accent.withValues(alpha: 0.2),
              child: Icon(Icons.place_rounded, color: accent, size: 20),
            ),
            title: Text(location.name, style: TextStyle(color: t.title, fontWeight: FontWeight.w700)),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (location.address.isNotEmpty)
                  Text(location.address, style: TextStyle(color: t.subtitle, fontSize: 12)),
                Text(
                  [location.category, if (distanceLabel != null) distanceLabel, if (location.visitCount > 0) '${location.visitCount} visits']
                      .whereType<String>()
                      .join(' · '),
                  style: TextStyle(color: accent.withValues(alpha: 0.85), fontSize: 11),
                ),
              ],
            ),
            trailing: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                IconButton(tooltip: 'Edit', onPressed: onEdit, icon: Icon(Icons.edit_rounded, color: t.muted, size: 20)),
                IconButton(tooltip: 'Delete', onPressed: onDelete, icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444), size: 20)),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
            child: Wrap(
              spacing: 8,
              children: [
                _LocAction(icon: Icons.navigation_rounded, label: 'Navigate', color: accent, onTap: onNavigate),
                _LocAction(icon: Icons.copy_rounded, label: 'Copy', color: t.muted, onTap: onCopy),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _LocAction extends StatelessWidget {
  const _LocAction({required this.icon, required this.label, required this.color, required this.onTap});

  final IconData icon;
  final String label;
  final Color color;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(20),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        decoration: BoxDecoration(
          color: color.withValues(alpha: 0.15),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: color.withValues(alpha: 0.35)),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 14, color: color),
            const SizedBox(width: 4),
            Text(label, style: TextStyle(color: color, fontSize: 12, fontWeight: FontWeight.w600)),
          ],
        ),
      ),
    );
  }
}
