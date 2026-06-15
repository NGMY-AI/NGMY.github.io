import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_app_builder_data.dart';

/// Interactive map UI — real OpenStreetMap tiles, search, pins, Google Maps directions.
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
  String _query = '';

  @override
  void dispose() {
    _searchC.dispose();
    super.dispose();
  }

  Future<void> _openMaps({String? address, double? lat, double? lng}) async {
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

  String _staticMapUrl(double lat, double lng, int width, int height) {
    final w = width.clamp(200, 1280);
    final h = height.clamp(200, 1280);
    return 'https://staticmap.openstreetmap.de/staticmap.php'
        '?center=$lat,$lng&zoom=13&size=${w}x$h&maptype=mapnik'
        '&markers=$lat,$lng,red-pushpin';
  }

  Widget _buildMapCanvas({
    required double centerLat,
    required double centerLng,
    required double? height,
    required bool expand,
    required List<Map<String, dynamic>> filtered,
    required String titleField,
    required String subtitleField,
    required String latField,
    required String lngField,
  }) {
    final mapStack = LayoutBuilder(
          builder: (context, constraints) {
            final w = constraints.maxWidth.isFinite ? constraints.maxWidth.round() : 600;
            final h = constraints.maxHeight.isFinite ? constraints.maxHeight.round() : (height?.round() ?? 320);
            return Stack(
              fit: StackFit.expand,
              children: [
                Image.network(
                  _staticMapUrl(centerLat, centerLng, w, h),
                  fit: BoxFit.cover,
                  loadingBuilder: (_, child, progress) {
                    if (progress == null) return child;
                    return Stack(
                      fit: StackFit.expand,
                      children: [
                        CustomPaint(
                          painter: _MapCanvasPainter(
                            centerLat: centerLat,
                            centerLng: centerLng,
                            pins: filtered.length,
                            theme: widget.theme,
                          ),
                        ),
                        Center(
                          child: CircularProgressIndicator(color: widget.theme, strokeWidth: 2),
                        ),
                      ],
                    );
                  },
                  errorBuilder: (_, __, ___) => CustomPaint(
                    painter: _MapCanvasPainter(
                      centerLat: centerLat,
                      centerLng: centerLng,
                      pins: filtered.length,
                      theme: widget.theme,
                    ),
                  ),
                ),
                Positioned(
                  top: 12,
                  right: 12,
                  child: Material(
                    color: Colors.white,
                    elevation: 4,
                    borderRadius: BorderRadius.circular(10),
                    child: InkWell(
                      onTap: () => _openMaps(lat: centerLat, lng: centerLng),
                      borderRadius: BorderRadius.circular(10),
                      child: const Padding(
                        padding: EdgeInsets.all(10),
                        child: Icon(Icons.my_location_rounded, color: Color(0xFF2563EB), size: 22),
                      ),
                    ),
                  ),
                ),
                ...List.generate(math.min(filtered.length, 6), (i) {
                  final angle = (i / math.max(filtered.length, 1)) * 2 * math.pi;
                  final dx = 0.5 + math.cos(angle) * 0.28;
                  final dy = 0.45 + math.sin(angle) * 0.22;
                  return Align(
                    alignment: Alignment(dx * 2 - 1, dy * 2 - 1),
                    child: GestureDetector(
                      onTap: () {
                        final r = filtered[i];
                        final lat = double.tryParse('${r[latField] ?? ''}');
                        final lng = double.tryParse('${r[lngField] ?? ''}');
                        if (lat != null && lng != null) {
                          _openMaps(lat: lat, lng: lng);
                        } else {
                          _openMaps(address: '${r[titleField] ?? ''} ${r[subtitleField] ?? ''}'.trim());
                        }
                      },
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.location_on_rounded, color: widget.theme, size: 32, shadows: const [Shadow(color: Colors.black26, blurRadius: 4)]),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(6)),
                            child: Text(
                              (filtered[i][titleField] ?? 'Place').toString(),
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(fontSize: 9, fontWeight: FontWeight.w800),
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                }),
                Positioned(
                  left: 8,
                  bottom: 8,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.92), borderRadius: BorderRadius.circular(8)),
                    child: Text(
                      '© OpenStreetMap · ${centerLat.toStringAsFixed(2)}, ${centerLng.toStringAsFixed(2)}',
                      style: const TextStyle(fontSize: 9, color: Color(0xFF64748B), fontWeight: FontWeight.w600),
                    ),
                  ),
                ),
              ],
            );
          },
        );
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: expand
          ? SizedBox(width: double.infinity, child: mapStack)
          : SizedBox(height: height ?? 320, width: double.infinity, child: mapStack),
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
    final placeholder = (widget.node['placeholder'] ?? 'Search places, addresses…').toString();
    final centerLat = (widget.node['centerLat'] as num?)?.toDouble() ?? 40.7128;
    final centerLng = (widget.node['centerLng'] as num?)?.toDouble() ?? -74.006;

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
              suffixIcon: IconButton(
                icon: Icon(Icons.navigation_rounded, color: widget.theme),
                tooltip: 'Search in Google Maps',
                onPressed: () => _openMaps(),
              ),
              border: InputBorder.none,
              contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
            ),
            onChanged: (v) => setState(() => _query = v),
            onSubmitted: (_) => _openMaps(),
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
                        icon: const Icon(Icons.directions_rounded, color: Color(0xFF2563EB)),
                        onPressed: () {
                          final lat = double.tryParse('${r[latField] ?? ''}');
                          final lng = double.tryParse('${r[lngField] ?? ''}');
                          if (lat != null && lng != null) {
                            _openMaps(lat: lat, lng: lng);
                          } else {
                            _openMaps(address: '${r[titleField] ?? ''} ${r[subtitleField] ?? ''}'.trim());
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

            if (canExpand) {
              return Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  searchBar,
                  const SizedBox(height: 10),
                  Expanded(
                    child: _buildMapCanvas(
                      centerLat: centerLat,
                      centerLng: centerLng,
                      height: null,
                      expand: true,
                      filtered: filtered,
                      titleField: titleField,
                      subtitleField: subtitleField,
                      latField: latField,
                      lngField: lngField,
                    ),
                  ),
                  if (filtered.isNotEmpty) ...[
                    const SizedBox(height: 10),
                    ConstrainedBox(
                      constraints: BoxConstraints(maxHeight: math.min(220, constraints.maxHeight * 0.35)),
                      child: SingleChildScrollView(child: placeList),
                    ),
                  ],
                ],
              );
            }

            return Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                searchBar,
                const SizedBox(height: 10),
                _buildMapCanvas(
                  centerLat: centerLat,
                  centerLng: centerLng,
                  height: configuredHeight,
                  expand: false,
                  filtered: filtered,
                  titleField: titleField,
                  subtitleField: subtitleField,
                  latField: latField,
                  lngField: lngField,
                ),
                if (filtered.isNotEmpty) ...[
                  const SizedBox(height: 10),
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

class _MapCanvasPainter extends CustomPainter {
  _MapCanvasPainter({required this.centerLat, required this.centerLng, required this.pins, required this.theme});

  final double centerLat;
  final double centerLng;
  final int pins;
  final Color theme;

  @override
  void paint(Canvas canvas, Size size) {
    final bg = Paint()..color = const Color(0xFFE8F4EA);
    canvas.drawRect(Offset.zero & size, bg);

    final park = Paint()..color = const Color(0xFFB8E0B4);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.05, size.height * 0.55, size.width * 0.35, size.height * 0.35), const Radius.circular(12)), park);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.55, size.height * 0.08, size.width * 0.38, size.height * 0.28), const Radius.circular(10)), park);

    final water = Paint()..color = const Color(0xFF93C5FD);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(size.width * 0.62, size.height * 0.62, size.width * 0.32, size.height * 0.3), const Radius.circular(8)), water);

    final road = Paint()
      ..color = const Color(0xFFCBD5E1)
      ..strokeWidth = 10
      ..strokeCap = StrokeCap.round;
    canvas.drawLine(Offset(0, size.height * 0.42), Offset(size.width, size.height * 0.38), road);
    canvas.drawLine(Offset(size.width * 0.35, 0), Offset(size.width * 0.42, size.height), road);
    canvas.drawLine(Offset(size.width * 0.72, 0), Offset(size.width * 0.68, size.height), road);

    final minor = Paint()
      ..color = Colors.white
      ..strokeWidth = 4;
    for (var i = 0.15; i < 0.9; i += 0.18) {
      canvas.drawLine(Offset(size.width * i, 0), Offset(size.width * (i + 0.02), size.height), minor);
    }

    final label = TextPainter(
      text: TextSpan(
        text: 'Map · ${centerLat.toStringAsFixed(2)}, ${centerLng.toStringAsFixed(2)}',
        style: const TextStyle(color: Color(0xFF64748B), fontSize: 10, fontWeight: FontWeight.w600),
      ),
      textDirection: TextDirection.ltr,
    )..layout(maxWidth: size.width - 16);
    label.paint(canvas, Offset(8, size.height - 18));
  }

  @override
  bool shouldRepaint(covariant _MapCanvasPainter oldDelegate) => oldDelegate.pins != pins;
}
