import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:http/http.dart' as http;
import 'package:latlong2/latlong.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_app_builder_data.dart';

/// Real OpenStreetMap tiles — search geocodes and moves the map in-app.
class NgmyRuntimeMapView extends StatefulWidget {
  const NgmyRuntimeMapView({
    super.key,
    required this.node,
    required this.theme,
    required this.store,
    required this.isDark,
    required this.onSnack,
    this.fillHeight = false,
  });

  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final bool isDark;
  final void Function(String message) onSnack;
  final bool fillHeight;

  @override
  State<NgmyRuntimeMapView> createState() => _NgmyRuntimeMapViewState();
}

class _NgmyRuntimeMapViewState extends State<NgmyRuntimeMapView> {
  final _searchC = TextEditingController();
  final _mapController = MapController();
  String _query = '';
  late double _centerLat;
  late double _centerLng;
  double _zoom = 14;
  String _searchResultLabel = '';
  bool _geocoding = false;

  bool get _inApp => widget.node['inApp'] != false;

  @override
  void initState() {
    super.initState();
    _centerLat = (widget.node['centerLat'] as num?)?.toDouble() ?? 40.7128;
    _centerLng = (widget.node['centerLng'] as num?)?.toDouble() ?? -74.006;
    _zoom = (widget.node['zoom'] as num?)?.toDouble() ?? 14;
  }

  @override
  void dispose() {
    _searchC.dispose();
    _mapController.dispose();
    super.dispose();
  }

  void _moveMap(double lat, double lng, {double? zoom, String? label}) {
    setState(() {
      _centerLat = lat;
      _centerLng = lng;
      if (zoom != null) _zoom = zoom;
      if (label != null) _searchResultLabel = label;
    });
    _mapController.move(LatLng(lat, lng), _zoom);
  }

  Future<void> _openExternalMaps({String? address, double? lat, double? lng}) async {
    Uri uri;
    if (lat != null && lng != null) {
      uri = Uri.parse('https://www.google.com/maps/search/?api=1&query=$lat,$lng');
    } else {
      final q = Uri.encodeComponent(address ?? _searchC.text.trim());
      if (q.isEmpty) {
        widget.onSnack('Enter a place or address to search');
        return;
      }
      uri = Uri.parse('https://www.google.com/maps/search/?api=1&query=$q');
    }
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    } else {
      widget.onSnack('Could not open maps');
    }
  }

  Future<void> _geocodeInApp(String query) async {
    final q = query.trim();
    if (q.isEmpty) return;
    setState(() => _geocoding = true);
    try {
      final uri = Uri.parse(
        'https://nominatim.openstreetmap.org/search?q=${Uri.encodeComponent(q)}&format=json&limit=1',
      );
      final res = await http.get(uri, headers: const {'User-Agent': 'NGMY-App-Builder/1.0 (contact@ngmy.org)'});
      if (res.statusCode == 200) {
        final list = jsonDecode(res.body);
        if (list is List && list.isNotEmpty && list.first is Map) {
          final m = Map<String, dynamic>.from(list.first as Map);
          final lat = double.tryParse('${m['lat']}');
          final lng = double.tryParse('${m['lon']}');
          if (lat != null && lng != null) {
            final name = (m['display_name'] ?? q).toString();
            _moveMap(lat, lng, zoom: 15, label: name);
            widget.onSnack('Found: ${name.split(',').first}');
            return;
          }
        }
      }
      widget.onSnack('Place not found — try a different address');
    } catch (_) {
      widget.onSnack('Search failed — check your connection');
    } finally {
      if (mounted) setState(() => _geocoding = false);
    }
  }

  void _showPlaceSheet(Map<String, dynamic> place, {required String titleField, required String subtitleField, required String latField, required String lngField}) {
    final title = (place[titleField] ?? place['name'] ?? 'Place').toString();
    final subtitle = (place[subtitleField] ?? place['address'] ?? '').toString();
    final lat = double.tryParse('${place[latField] ?? place['lat'] ?? ''}');
    final lng = double.tryParse('${place[lngField] ?? place['lng'] ?? ''}');
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: widget.isDark ? const Color(0xFF1E293B) : Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => Padding(
        padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Icon(Icons.place_rounded, color: widget.theme),
                const SizedBox(width: 10),
                Expanded(child: Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: widget.isDark ? Colors.white : Colors.black87))),
              ],
            ),
            if (subtitle.isNotEmpty) ...[const SizedBox(height: 8), Text(subtitle, style: TextStyle(color: widget.isDark ? Colors.white70 : Colors.black54))],
            if (lat != null && lng != null) ...[
              const SizedBox(height: 6),
              Text('${lat.toStringAsFixed(4)}, ${lng.toStringAsFixed(4)}', style: TextStyle(fontSize: 12, color: widget.isDark ? Colors.white38 : Colors.black45)),
            ],
            const SizedBox(height: 16),
            FilledButton.icon(
              onPressed: () {
                Navigator.pop(ctx);
                if (lat != null && lng != null) {
                  _moveMap(lat, lng, zoom: 16, label: title);
                }
              },
              icon: const Icon(Icons.map_rounded),
              label: const Text('Show on map'),
              style: FilledButton.styleFrom(backgroundColor: widget.theme),
            ),
            const SizedBox(height: 8),
            OutlinedButton.icon(
              onPressed: () {
                Navigator.pop(ctx);
                _openExternalMaps(lat: lat, lng: lng, address: title);
              },
              icon: const Icon(Icons.open_in_new_rounded),
              label: const Text('Open in Google Maps'),
            ),
          ],
        ),
      ),
    );
  }

  List<Marker> _markersForPlaces(
    List<Map<String, dynamic>> places, {
    required String titleField,
    required String latField,
    required String lngField,
  }) {
    final markers = <Marker>[
      Marker(
        point: LatLng(_centerLat, _centerLng),
        width: 44,
        height: 44,
        child: Icon(Icons.my_location_rounded, color: widget.theme, size: 40, shadows: const [Shadow(color: Colors.black26, blurRadius: 6)]),
      ),
    ];
    for (final r in places) {
      final lat = double.tryParse('${r[latField] ?? r['lat'] ?? ''}');
      final lng = double.tryParse('${r[lngField] ?? r['lng'] ?? ''}');
      if (lat == null || lng == null) continue;
      final title = (r[titleField] ?? 'Place').toString();
      markers.add(
        Marker(
          point: LatLng(lat, lng),
          width: 40,
          height: 48,
          child: GestureDetector(
            onTap: () {
              _moveMap(lat, lng, zoom: 16, label: title);
              if (_inApp) {
                _showPlaceSheet(r, titleField: titleField, subtitleField: 'address', latField: latField, lngField: lngField);
              }
            },
            child: Column(
              children: [
                Icon(Icons.location_on_rounded, color: widget.theme, size: 34),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 1),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(4)),
                  child: Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 8, fontWeight: FontWeight.w800)),
                ),
              ],
            ),
          ),
        ),
      );
    }
    return markers;
  }

  Widget _buildLiveMap({
    required double height,
    required List<Map<String, dynamic>> filtered,
    required String titleField,
    required String latField,
    required String lngField,
  }) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: SizedBox(
        height: height,
        width: double.infinity,
        child: Stack(
          children: [
            FlutterMap(
              mapController: _mapController,
              options: MapOptions(
                initialCenter: LatLng(_centerLat, _centerLng),
                initialZoom: _zoom,
                minZoom: 3,
                maxZoom: 18,
                interactionOptions: const InteractionOptions(flags: InteractiveFlag.all),
                onMapEvent: (e) {
                  if (e is MapEventMoveEnd) {
                    final c = _mapController.camera.center;
                    setState(() {
                      _centerLat = c.latitude;
                      _centerLng = c.longitude;
                      _zoom = _mapController.camera.zoom;
                    });
                  }
                },
              ),
              children: [
                TileLayer(
                  urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                  userAgentPackageName: 'org.ngmy.app',
                  maxZoom: 19,
                ),
                MarkerLayer(markers: _markersForPlaces(filtered, titleField: titleField, latField: latField, lngField: lngField)),
              ],
            ),
            if (_searchResultLabel.isNotEmpty)
              Positioned(
                top: 10,
                left: 10,
                right: 10,
                child: Material(
                  elevation: 4,
                  borderRadius: BorderRadius.circular(12),
                  color: Colors.white,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    child: Row(
                      children: [
                        Icon(Icons.place_rounded, color: widget.theme, size: 20),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            _searchResultLabel,
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: Color(0xFF1E293B)),
                          ),
                        ),
                        IconButton(
                          icon: const Icon(Icons.close, size: 18),
                          onPressed: () => setState(() => _searchResultLabel = ''),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            Positioned(
              left: 8,
              bottom: 8,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.92), borderRadius: BorderRadius.circular(8)),
                child: const Text('© OpenStreetMap contributors', style: TextStyle(fontSize: 9, color: Color(0xFF64748B), fontWeight: FontWeight.w600)),
              ),
            ),
            Positioned(
              right: 8,
              bottom: 8,
              child: Material(
                color: Colors.white,
                elevation: 3,
                borderRadius: BorderRadius.circular(10),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    IconButton(
                      icon: const Icon(Icons.add, size: 20),
                      onPressed: () => _mapController.move(LatLng(_centerLat, _centerLng), (_zoom + 1).clamp(3, 18)),
                    ),
                    IconButton(
                      icon: const Icon(Icons.remove, size: 20),
                      onPressed: () => _mapController.move(LatLng(_centerLat, _centerLng), (_zoom - 1).clamp(3, 18)),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final collection = (widget.node['collection'] ?? 'places').toString();
    final titleField = (widget.node['titleField'] ?? 'name').toString();
    final subtitleField = (widget.node['subtitleField'] ?? 'address').toString();
    final latField = (widget.node['latField'] ?? 'lat').toString();
    final lngField = (widget.node['lngField'] ?? 'lng').toString();
    final configuredHeight = (widget.node['height'] as num?)?.toDouble() ?? 320;
    final placeholder = (widget.node['placeholder'] ?? 'Search address or place…').toString();

    return AnimatedBuilder(
      animation: widget.store,
      builder: (context, _) {
        final records = widget.store.records(collection);
        final filtered = _query.trim().isEmpty
            ? records
            : records.where((r) {
                final t = '${r[titleField] ?? ''} ${r[subtitleField] ?? ''}'.toLowerCase();
                return t.contains(_query.toLowerCase());
              }).toList();

        final searchBar = Container(
          decoration: BoxDecoration(
            color: widget.isDark ? const Color(0xFF1E293B) : Colors.white,
            borderRadius: BorderRadius.circular(14),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 8, offset: const Offset(0, 2))],
          ),
          child: TextField(
            controller: _searchC,
            decoration: InputDecoration(
              hintText: placeholder,
              prefixIcon: const Icon(Icons.search_rounded),
              suffixIcon: _geocoding
                  ? Padding(
                      padding: const EdgeInsets.all(12),
                      child: SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: widget.theme)),
                    )
                  : FilledButton.tonal(
                      onPressed: () => _geocodeInApp(_searchC.text),
                      style: FilledButton.styleFrom(backgroundColor: widget.theme.withValues(alpha: 0.15), foregroundColor: widget.theme, padding: const EdgeInsets.symmetric(horizontal: 12)),
                      child: const Text('Search', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
                    ),
              border: InputBorder.none,
              contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
            ),
            onChanged: (v) => setState(() => _query = v),
            onSubmitted: (v) => _inApp ? _geocodeInApp(v) : _openExternalMaps(address: v),
          ),
        );

        final placeList = filtered.isEmpty
            ? const SizedBox.shrink()
            : Column(
                children: filtered.take(4).map((r) {
                  return Card(
                    margin: const EdgeInsets.only(bottom: 6),
                    child: ListTile(
                      dense: true,
                      leading: CircleAvatar(backgroundColor: widget.theme.withValues(alpha: 0.15), child: Icon(Icons.place_rounded, color: widget.theme, size: 20)),
                      title: Text((r[titleField] ?? 'Place').toString(), style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13)),
                      subtitle: (r[subtitleField] ?? '').toString().isEmpty ? null : Text(r[subtitleField].toString(), maxLines: 1, overflow: TextOverflow.ellipsis),
                      trailing: IconButton(
                        icon: Icon(Icons.map_rounded, color: widget.theme),
                        onPressed: () {
                          final lat = double.tryParse('${r[latField] ?? ''}');
                          final lng = double.tryParse('${r[lngField] ?? ''}');
                          if (_inApp) {
                            if (lat != null && lng != null) {
                              _moveMap(lat, lng, zoom: 16, label: (r[titleField] ?? 'Place').toString());
                            } else {
                              _geocodeInApp('${r[titleField] ?? ''} ${r[subtitleField] ?? ''}');
                            }
                            _showPlaceSheet(r, titleField: titleField, subtitleField: subtitleField, latField: latField, lngField: lngField);
                          } else if (lat != null && lng != null) {
                            _openExternalMaps(lat: lat, lng: lng);
                          }
                        },
                      ),
                    ),
                  );
                }).toList(),
              );

        return LayoutBuilder(
          builder: (context, constraints) {
            final canExpand = widget.fillHeight && constraints.maxHeight.isFinite && constraints.maxHeight > 280;
            final mapHeight = canExpand ? constraints.maxHeight - 120 : configuredHeight;

            return Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                searchBar,
                const SizedBox(height: 10),
                if (canExpand)
                  Expanded(child: _buildLiveMap(height: mapHeight.clamp(200, 2000), filtered: filtered, titleField: titleField, latField: latField, lngField: lngField))
                else
                  _buildLiveMap(height: configuredHeight, filtered: filtered, titleField: titleField, latField: latField, lngField: lngField),
                if (filtered.isNotEmpty) ...[
                  const SizedBox(height: 10),
                  if (canExpand)
                    ConstrainedBox(constraints: BoxConstraints(maxHeight: 180), child: SingleChildScrollView(child: placeList))
                  else
                    placeList,
                ],
              ],
            );
          },
        );
      },
    );
  }
}
