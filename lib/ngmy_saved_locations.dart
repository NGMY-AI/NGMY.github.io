import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:geolocator/geolocator.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_hub_form_ui.dart';
import 'ngmy_store_location.dart';

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
  double? _hereLat;
  double? _hereLng;

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
      final result = await ngmyFetchCurrentGpsDetailed();
      final reading = result.reading;
      if (reading == null || !mounted) return;
      setState(() {
        _hereLat = reading.lat;
        _hereLng = reading.lng;
      });
    } catch (_) {}
  }

  Future<void> _persist(List<NgmySavedLocation> list) async {
    await _saveLocations(widget.userEmail, list);
    if (mounted) setState(() => _locations = list);
  }

  double? _distanceKm(NgmySavedLocation loc) {
    if (_hereLat == null || _hereLng == null || !loc.hasGps) return null;
    return Geolocator.distanceBetween(_hereLat!, _hereLng!, loc.lat!, loc.lng!) / 1000;
  }

  List<NgmySavedLocation> get _visible {
    var list = _locations.where((l) => _filter == 'All' || l.category == _filter).toList();
    if (_sortByDistance && _hereLat != null && _hereLng != null) {
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
      final result = await ngmyFetchCurrentGpsDetailed();
      if (result.failure != null) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text(ngmyGpsFailureMessage(result.failure!))),
          );
        }
        return;
      }
      final reading = result.reading;
      if (reading == null) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Could not read GPS. Try again outdoors or allow location.')),
          );
        }
        return;
      }
      final label = reading.label.trim();
      setState(() {
        _lat = reading.lat;
        _lng = reading.lng;
      });
      if (label.isNotEmpty) {
        _address.text = label;
      }
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
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: _locating ? null : _captureGps,
              borderRadius: BorderRadius.circular(14),
              child: Ink(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: _accent.withValues(alpha: 0.55)),
                  gradient: LinearGradient(colors: [_accent.withValues(alpha: 0.22), _accent.withValues(alpha: 0.08)]),
                ),
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                child: Row(
                  children: [
                    Icon(_locating ? Icons.hourglass_top_rounded : Icons.my_location_rounded, color: _accent, size: 26),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            _locating ? 'Getting GPS & address…' : 'Drop GPS pin here',
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            _locating
                                ? 'Please wait…'
                                : (_lat != null
                                    ? 'Pinned · tap again to refresh address'
                                    : 'Tap for your live location — wait outdoors for best accuracy'),
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontWeight: FontWeight.w500, fontSize: 11),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          const SizedBox(height: 14),
          NgmyModernField(controller: _name, label: 'Name', hint: 'Office, client site, warehouse…', icon: Icons.label_outline_rounded, accent: _accent),
          NgmyModernField(controller: _address, label: 'Address', hint: 'Filled from GPS — edit if needed', icon: Icons.location_on_outlined, accent: _accent),
          Text('TYPE', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 8),
          NgmyModernChipRow(
            options: const ['Client Site', 'Office', 'Warehouse', 'Delivery', 'Meeting', 'Other'],
            selected: _category,
            accent: _accent,
            onSelected: (v) => setState(() => _category = v),
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
    final meta = [
      location.category,
      if (distanceLabel != null) distanceLabel,
      if (location.visitCount > 0) '${location.visitCount} visits',
    ].whereType<String>().join(' · ');

    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      height: 160,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        boxShadow: [
          BoxShadow(color: accent.withValues(alpha: 0.3), blurRadius: 16, offset: const Offset(0, 6)),
          const BoxShadow(color: Colors.black26, blurRadius: 8, offset: Offset(0, 2)),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(18),
        child: Stack(
          children: [
            Positioned.fill(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      const Color(0xFF052E1C),
                      Color.lerp(const Color(0xFF064E3B), accent, 0.4)!,
                      Color.lerp(const Color(0xFF022C22), accent, 0.55)!,
                    ],
                  ),
                ),
              ),
            ),
            Positioned(
              right: -12,
              bottom: -18,
              child: Icon(Icons.map_rounded, size: 110, color: Colors.white.withValues(alpha: 0.07)),
            ),
            Positioned(
              left: 0,
              right: 0,
              top: 0,
              height: 30,
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: [accent, accent.withValues(alpha: 0.7)]),
                ),
                child: const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 14),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Text('SITE MAP CARD', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.5)),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 38, 10, 12),
              child: Row(
                children: [
                  Container(
                    width: 46,
                    height: 46,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: LinearGradient(colors: [accent, accent.withValues(alpha: 0.65)]),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.4)),
                    ),
                    child: const Icon(Icons.place_rounded, color: Colors.white, size: 24),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          location.name,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16),
                        ),
                        if (location.address.isNotEmpty) ...[
                          const SizedBox(height: 3),
                          Text(location.address, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 11, fontWeight: FontWeight.w600)),
                        ],
                        const Spacer(),
                        if (meta.isNotEmpty)
                          Text(meta, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 11)),
                        if (location.hasGps)
                          Text(
                            '${location.lat!.toStringAsFixed(4)}, ${location.lng!.toStringAsFixed(4)}',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w600),
                          ),
                      ],
                    ),
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      _LocCircleBtn(icon: Icons.navigation_rounded, onTap: onNavigate, color: accent),
                      _LocCircleBtn(icon: Icons.copy_rounded, onTap: onCopy),
                      _LocCircleBtn(icon: Icons.edit_rounded, onTap: onEdit),
                      _LocCircleBtn(icon: Icons.delete_outline_rounded, onTap: onDelete, danger: true),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _LocCircleBtn extends StatelessWidget {
  const _LocCircleBtn({required this.icon, required this.onTap, this.color, this.danger = false});
  final IconData icon;
  final VoidCallback onTap;
  final Color? color;
  final bool danger;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 5),
      child: InkWell(
        onTap: onTap,
        customBorder: const CircleBorder(),
        child: Container(
          width: 28,
          height: 28,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: Colors.white.withValues(alpha: 0.12),
            border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
          ),
          child: Icon(icon, size: 14, color: danger ? const Color(0xFFFCA5A5) : (color ?? Colors.white)),
        ),
      ),
    );
  }
}

