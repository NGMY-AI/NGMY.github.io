import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:geolocator/geolocator.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

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

Future<void> showNgmySavedLocationsDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Saved Locations',
    barrierColor: Colors.black.withValues(alpha: 0.88),
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
    final saved = await showModalBottomSheet<NgmySavedLocation>(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF0C1220),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => _LocationEditorSheet(existing: existing),
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
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF0C1220),
        title: const Text('Delete location?', style: TextStyle(color: Colors.white)),
        content: Text('Remove ${loc.name}?', style: const TextStyle(color: Colors.white70)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
        ],
      ),
    );
    if (ok != true) return;
    await _persist(_locations.where((e) => e.id != loc.id).toList());
  }

  @override
  Widget build(BuildContext context) {
    final visible = _visible;
    final bottom = MediaQuery.viewInsetsOf(context).bottom;

    return Material(
      color: const Color(0xFF05070C),
      child: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
              child: Row(
                children: [
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                  const Expanded(
                    child: Text('Saved Locations', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 18)),
                  ),
                  IconButton(onPressed: () => _openEditor(), icon: const Icon(Icons.add_location_alt_rounded, color: Color(0xFF34D399))),
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
                      style: OutlinedButton.styleFrom(foregroundColor: const Color(0xFF34D399)),
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
                    selectedColor: const Color(0xFF34D399).withValues(alpha: 0.25),
                    checkmarkColor: const Color(0xFF34D399),
                    labelStyle: TextStyle(color: selected ? const Color(0xFF34D399) : Colors.white70, fontWeight: FontWeight.w600),
                  );
                },
              ),
            ),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator(color: Color(0xFF34D399)))
                  : visible.isEmpty
                      ? Center(
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Icon(Icons.map_rounded, size: 56, color: Colors.white.withValues(alpha: 0.2)),
                                const SizedBox(height: 12),
                                const Text('Your business site map', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 16)),
                                const SizedBox(height: 6),
                                Text(
                                  'Pin client sites, offices, warehouses, and delivery drops — navigate in one tap.',
                                  textAlign: TextAlign.center,
                                  style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13),
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
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.05),
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
            title: Text(location.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
            subtitle: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (location.address.isNotEmpty)
                  Text(location.address, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
                Text(
                  [location.category, if (distanceLabel != null) distanceLabel, if (location.visitCount > 0) '${location.visitCount} visits']
                      .whereType<String>()
                      .join(' · '),
                  style: TextStyle(color: accent.withValues(alpha: 0.85), fontSize: 11),
                ),
              ],
            ),
            trailing: PopupMenuButton<String>(
              icon: Icon(Icons.more_vert_rounded, color: Colors.white.withValues(alpha: 0.5)),
              color: const Color(0xFF111827),
              onSelected: (v) {
                switch (v) {
                  case 'edit':
                    onEdit();
                  case 'delete':
                    onDelete();
                }
              },
              itemBuilder: (_) => const [
                PopupMenuItem(value: 'edit', child: Text('Edit')),
                PopupMenuItem(value: 'delete', child: Text('Delete')),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
            child: Wrap(
              spacing: 8,
              children: [
                _LocAction(icon: Icons.navigation_rounded, label: 'Navigate', color: accent, onTap: onNavigate),
                _LocAction(icon: Icons.copy_rounded, label: 'Copy', color: Colors.white54, onTap: onCopy),
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

class _LocationEditorSheet extends StatefulWidget {
  const _LocationEditorSheet({this.existing});

  final NgmySavedLocation? existing;

  @override
  State<_LocationEditorSheet> createState() => _LocationEditorSheetState();
}

class _LocationEditorSheetState extends State<_LocationEditorSheet> {
  late final TextEditingController _name;
  late final TextEditingController _address;
  late final TextEditingController _notes;
  String _category = 'Client Site';
  double? _lat;
  double? _lng;
  bool _locating = false;

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

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    return Padding(
      padding: EdgeInsets.fromLTRB(16, 12, 16, 16 + bottom),
      child: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)))),
            const SizedBox(height: 12),
            Text(widget.existing == null ? 'New location' : 'Edit location', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 17)),
            const SizedBox(height: 12),
            _field(_name, 'Location name'),
            _field(_address, 'Address / suite / landmark'),
            const SizedBox(height: 4),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: ['Client Site', 'Office', 'Warehouse', 'Delivery', 'Meeting', 'Other'].map((cat) {
                final selected = _category == cat;
                return ChoiceChip(
                  label: Text(cat),
                  selected: selected,
                  onSelected: (_) => setState(() => _category = cat),
                  selectedColor: const Color(0xFF34D399).withValues(alpha: 0.25),
                  labelStyle: TextStyle(color: selected ? const Color(0xFF34D399) : Colors.white70),
                );
              }).toList(),
            ),
            const SizedBox(height: 8),
            OutlinedButton.icon(
              onPressed: _locating ? null : _captureGps,
              icon: _locating
                  ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                  : const Icon(Icons.my_location_rounded, size: 18),
              label: Text(_locating ? 'Getting GPS…' : (_lat != null ? 'GPS: ${_lat!.toStringAsFixed(5)}, ${_lng!.toStringAsFixed(5)}' : 'Drop GPS pin here')),
              style: OutlinedButton.styleFrom(foregroundColor: const Color(0xFF34D399)),
            ),
            const SizedBox(height: 8),
            _field(_notes, 'Notes (gate code, contact on site…)', maxLines: 2),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () {
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
                      lastVisited: widget.existing?.lastVisited,
                      createdAt: widget.existing?.createdAt,
                    ),
                  );
                },
                child: Text(widget.existing == null ? 'Save location' : 'Update location'),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _field(TextEditingController c, String label, {int maxLines = 1}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: TextField(
        controller: c,
        maxLines: maxLines,
        style: const TextStyle(color: Colors.white),
        decoration: InputDecoration(
          labelText: label,
          labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.5)),
          filled: true,
          fillColor: Colors.white.withValues(alpha: 0.06),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
        ),
      ),
    );
  }
}
