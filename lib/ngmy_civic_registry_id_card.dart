import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_civic_id_scanner.dart';

/// Georgia-style horizontal ID / passport card for Civic Registry members.
class NgmyCivicRegistryIdCard extends StatelessWidget {
  const NgmyCivicRegistryIdCard({
    super.key,
    required this.record,
    this.photoPath,
    this.photoImage,
    this.scale = 1.0,
  });

  final Map<String, dynamic> record;
  final String? photoPath;
  final ImageProvider? photoImage;
  final double scale;

  static const _stateCodes = {
    'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA',
    'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'Florida': 'FL', 'Georgia': 'GA',
    'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA',
    'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD',
    'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO',
    'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ',
    'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH',
    'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
    'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT',
    'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY',
  };

  static String stateCode(String state) {
    final s = state.trim();
    if (s.length == 2) return s.toUpperCase();
    return _stateCodes[s] ?? (s.length >= 2 ? s.substring(0, 2).toUpperCase() : 'ST');
  }

  static String _docTitle(String idType) {
    final t = idType.trim().toLowerCase();
    if (t.contains('passport')) return 'PASSPORT';
    if (t.contains('driver')) return "DRIVER'S LICENSE";
    if (t.contains('voter')) return 'VOTERS CARD';
    if (t.contains('national')) return 'NATIONAL ID';
    return idType.trim().isEmpty ? 'CIVIC REGISTRY ID' : idType.trim().toUpperCase();
  }

  static String _docBadge(String idType) {
    final t = idType.trim().toLowerCase();
    if (t.contains('passport')) return 'PP';
    if (t.contains('driver')) return 'DL';
    if (t.contains('voter')) return 'VC';
    return 'ID';
  }

  static String _formatIssueDate(Map<String, dynamic> record) {
    final raw = (record['passportGrantedAt'] ?? record['enrolledAt'] ?? '').toString();
    if (raw.isEmpty) return '--/--/----';
    try {
      final dt = DateTime.parse(raw).toLocal();
      return '${dt.month.toString().padLeft(2, '0')}/${dt.day.toString().padLeft(2, '0')}/${dt.year}';
    } catch (_) {
      return '--/--/----';
    }
  }

  static String _formatExpDate(Map<String, dynamic> record) {
    final raw = (record['passportGrantedAt'] ?? record['enrolledAt'] ?? '').toString();
    if (raw.isEmpty) return '--/--/----';
    try {
      final dt = DateTime.parse(raw).toLocal().add(const Duration(days: 3650));
      return '${dt.month.toString().padLeft(2, '0')}/${dt.day.toString().padLeft(2, '0')}/${dt.year}';
    } catch (_) {
      return '--/--/----';
    }
  }

  static ImageProvider? _photoProvider(String? path) {
    if (path == null || path.trim().isEmpty) return null;
    final src = path.trim();
    if (src.startsWith('data:image')) {
      try {
        return MemoryImage(base64Decode(src.split(',').last));
      } catch (_) {
        return null;
      }
    }
    if (src.startsWith('http') || src.startsWith('blob:')) return NetworkImage(src);
    return null;
  }

  static String _signaturePreview(String name) {
    final parts = name.trim().split(RegExp(r'\s+')).where((p) => p.isNotEmpty).toList();
    if (parts.isEmpty) return 'Signature';
    if (parts.length == 1) return parts.first.toLowerCase();
    return '${parts.first[0]}${parts.last.toLowerCase()}';
  }

  static Widget _circlePhoto(ImageProvider? photo, double size, {double opacity = 1, double iconSize = 28}) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: const Color(0xFFE5E7EB),
        border: Border.all(color: const Color(0xFF374151), width: 1.4),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.12), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      clipBehavior: Clip.antiAlias,
      child: photo != null
          ? Opacity(
              opacity: opacity,
              child: Image(image: photo, fit: BoxFit.cover, width: size, height: size),
            )
          : Icon(Icons.person_rounded, size: iconSize, color: Colors.white),
    );
  }

  @override
  Widget build(BuildContext context) {
    const baseW = 360.0;
    final w = baseW * scale;
    final h = w / 1.586;
    final state = (record['state'] ?? '').toString();
    final stateUpper = state.trim().isEmpty ? 'STATE' : state.trim().toUpperCase();
    final code = stateCode(state);
    final idType = (record['idType'] ?? 'Registry ID').toString();
    final docTitle = _docTitle(idType);
    final badge = _docBadge(idType);
    final name = (record['fullName'] ?? '').toString().trim().toUpperCase();
    final registryId = (record['registryId'] ?? '').toString().trim();
    final dob = (record['dob'] ?? '').toString().trim();
    final address = (record['homeAddress'] ?? '').toString().trim().toUpperCase();
    final city = (record['city'] ?? '').toString().trim().toUpperCase();
    final room = (record['room'] ?? '').toString().trim();
    final phone = (record['phone'] ?? '').toString().trim();
    final iss = _formatIssueDate(record);
    final exp = _formatExpDate(record);
    final photo = photoImage ?? _photoProvider(photoPath ?? (record['idPhotoPath'] ?? '').toString());
    final isGeorgia = state.trim().toLowerCase() == 'georgia';
    final photoSize = 78.0 * scale;
    final ghostSize = 46.0 * scale;

    return SizedBox(
      width: w,
      height: h,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(12 * scale),
        clipBehavior: Clip.hardEdge,
        child: Stack(
          fit: StackFit.expand,
          clipBehavior: Clip.hardEdge,
          children: [
            CustomPaint(painter: _IdCardBackgroundPainter(isGeorgia: isGeorgia)),
            CustomPaint(painter: _NgmyCenterWatermarkPainter(scale: scale)),
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              height: 16 * scale,
              child: CustomPaint(painter: _NgmyHologramStripPainter(scale: scale)),
            ),
            Padding(
              padding: EdgeInsets.fromLTRB(10 * scale, 8 * scale, 10 * scale, 9 * scale),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _headerRow(stateUpper, docTitle, badge, code, scale),
                  SizedBox(height: 6 * scale),
                  Expanded(
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(
                          width: 88 * scale,
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              _circlePhoto(photo, photoSize, iconSize: 34 * scale),
                              SizedBox(height: 5 * scale),
                              Container(
                                width: double.infinity,
                                padding: EdgeInsets.only(bottom: 2 * scale),
                                decoration: const BoxDecoration(
                                  border: Border(bottom: BorderSide(color: Color(0xFF111827), width: 1)),
                                ),
                                child: Text(
                                  _signaturePreview(name),
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(
                                    fontSize: 9 * scale,
                                    fontStyle: FontStyle.italic,
                                    fontWeight: FontWeight.w600,
                                    color: const Color(0xFF111827),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(width: 8 * scale),
                        Expanded(
                          child: LayoutBuilder(
                            builder: (context, constraints) {
                              return FittedBox(
                                fit: BoxFit.scaleDown,
                                alignment: Alignment.topLeft,
                                child: SizedBox(
                                  width: constraints.maxWidth,
                                  child: _dataColumn(registryId, dob, name, address, city, code, room, iss, exp, scale),
                                ),
                              );
                            },
                          ),
                        ),
                        SizedBox(width: 6 * scale),
                        SizedBox(
                          width: 82 * scale,
                          child: Stack(
                            clipBehavior: Clip.hardEdge,
                            children: [
                              Align(
                                alignment: Alignment.topRight,
                                child: isGeorgia
                                    ? SizedBox(
                                        width: 68 * scale,
                                        height: 68 * scale,
                                        child: CustomPaint(painter: _PeachPainter(showNgmy: true, ngmyScale: scale)),
                                      )
                                    : Container(
                                        width: 62 * scale,
                                        height: 62 * scale,
                                        decoration: BoxDecoration(
                                          shape: BoxShape.circle,
                                          gradient: RadialGradient(
                                            colors: [
                                              const Color(0xFF93C5FD).withOpacity(0.55),
                                              const Color(0xFF1E40AF).withOpacity(0.12),
                                            ],
                                          ),
                                          border: Border.all(color: const Color(0xFF1E3A8A), width: 1.4),
                                        ),
                                        child: Stack(
                                          alignment: Alignment.center,
                                          children: [
                                            Text(
                                              code,
                                              style: TextStyle(fontSize: 16 * scale, fontWeight: FontWeight.w900, color: const Color(0xFF1E3A8A)),
                                            ),
                                            Positioned(
                                              bottom: 4 * scale,
                                              child: CustomPaint(
                                                size: Size(34 * scale, 10 * scale),
                                                painter: _MiniNgmySealPainter(scale: scale),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                              ),
                              Align(
                                alignment: Alignment.bottomRight,
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    _circlePhoto(photo, ghostSize, opacity: 0.62, iconSize: 22 * scale),
                                    SizedBox(height: 2 * scale),
                                    Text(
                                      dob.isEmpty ? '--/--/----' : dob,
                                      style: TextStyle(fontSize: 7 * scale, fontWeight: FontWeight.w900, color: const Color(0xFF111827)),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(height: 4 * scale),
                  _footerRow(registryId, phone, scale),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _headerRow(String stateUpper, String docTitle, String badge, String code, double scale) {
    return FittedBox(
      fit: BoxFit.scaleDown,
      alignment: Alignment.centerLeft,
      child: SizedBox(
        width: 340 * scale,
        child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          flex: 3,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                stateUpper,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontSize: 19 * scale,
                  fontWeight: FontWeight.w900,
                  color: const Color(0xFF1E3A8A),
                  height: 1,
                  letterSpacing: 0.4,
                ),
              ),
              Text(
                docTitle,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontSize: 8.5 * scale,
                  fontWeight: FontWeight.w800,
                  color: const Color(0xFFB91C1C),
                  height: 1.1,
                ),
              ),
            ],
          ),
        ),
        Expanded(
          flex: 4,
          child: Center(
            child: Text(
              docTitle,
              textAlign: TextAlign.center,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: 10.5 * scale, fontWeight: FontWeight.w900, color: const Color(0xFF111827)),
            ),
          ),
        ),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(badge, style: TextStyle(fontSize: 12 * scale, fontWeight: FontWeight.w900)),
            SizedBox(width: 4 * scale),
            Container(
              width: 16 * scale,
              height: 16 * scale,
              decoration: const BoxDecoration(color: Colors.black, shape: BoxShape.circle),
              child: Icon(Icons.star_rounded, size: 10 * scale, color: const Color(0xFFE2E8F0)),
            ),
            SizedBox(width: 4 * scale),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('USA', style: TextStyle(fontSize: 5.5 * scale, fontWeight: FontWeight.w800, color: const Color(0xFFB91C1C))),
                Text(code, style: TextStyle(fontSize: 6.5 * scale, fontWeight: FontWeight.w900)),
              ],
            ),
          ],
        ),
      ],
        ),
      ),
    );
  }

  Widget _dataColumn(
    String registryId,
    String dob,
    String name,
    String address,
    String city,
    String code,
    String room,
    String iss,
    String exp,
    double scale,
  ) {
    Widget field(String label, String value, {bool bold = false}) {
      return Padding(
        padding: EdgeInsets.only(bottom: 2 * scale),
        child: RichText(
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
          text: TextSpan(
            style: TextStyle(fontSize: 7.5 * scale, color: const Color(0xFF111827), height: 1.15),
            children: [
              if (label.isNotEmpty)
                TextSpan(text: '$label ', style: const TextStyle(fontWeight: FontWeight.w600)),
              TextSpan(
                text: value,
                style: TextStyle(
                  fontWeight: bold ? FontWeight.w900 : FontWeight.w800,
                  fontSize: (bold ? 9.5 : 7.5) * scale,
                ),
              ),
            ],
          ),
        ),
      );
    }

    final addrLine = [address, if (city.isNotEmpty) '$city, $code', if (room.isNotEmpty) room].where((s) => s.isNotEmpty).join('\n');

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Row(
          children: [
            Expanded(child: field('4d DL NO.', registryId.isEmpty ? '--------' : registryId)),
            Expanded(child: field('3 DOB', dob.isEmpty ? '--/--/----' : dob, bold: true)),
          ],
        ),
        Row(
          children: [
            Expanded(child: field('9 CLASS', room.isEmpty ? 'C' : room)),
            Expanded(child: field('4b EXP', exp, bold: true)),
          ],
        ),
        field('', name, bold: true),
        if (addrLine.isNotEmpty) field('8', addrLine),
        SizedBox(height: 4 * scale),
        Row(
          children: [
            Expanded(child: field('REST', 'NONE')),
            Expanded(child: field('EYES', 'BRO')),
          ],
        ),
        Row(
          children: [
            Expanded(child: field('END', 'NONE')),
            Expanded(child: field('WGT', '—')),
          ],
        ),
        Row(
          children: [
            Expanded(child: field('4a ISS', iss)),
            Expanded(child: field('HGT', '—')),
          ],
        ),
        field('15 SEX', '—'),
      ],
    );
  }

  Widget _footerRow(String registryId, String phone, double scale) {
    final ddRaw = '5 DD ${registryId.padRight(20, '0')}${phone.replaceAll(RegExp(r'\D'), '').padRight(8, '0')}';
    final dd = ddRaw.length > 28 ? ddRaw.substring(0, 28) : ddRaw;
    final qrData = registryId.isNotEmpty ? ngmyCivicIdQrPayload(registryId) : 'NGMY-CIVIC';
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Expanded(
          child: Text(
            dd,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(fontSize: 6.5 * scale, fontWeight: FontWeight.w600, letterSpacing: 0.3),
          ),
        ),
        Container(
          padding: EdgeInsets.all(1.5 * scale),
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(color: const Color(0xFF374151), width: 0.8),
            borderRadius: BorderRadius.circular(3 * scale),
          ),
          child: QrImageView(
            data: qrData,
            size: 24 * scale,
            padding: EdgeInsets.zero,
            backgroundColor: Colors.white,
            eyeStyle: const QrEyeStyle(color: Color(0xFF111827)),
            dataModuleStyle: const QrDataModuleStyle(color: Color(0xFF111827)),
          ),
        ),
        SizedBox(width: 4 * scale),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.favorite, size: 8 * scale, color: const Color(0xFF111827)),
            SizedBox(width: 3 * scale),
            Text('CIVIC REGISTRY', style: TextStyle(fontSize: 6.5 * scale, fontWeight: FontWeight.w800)),
          ],
        ),
      ],
    );
  }
}

class _NgmyCenterWatermarkPainter extends CustomPainter {
  _NgmyCenterWatermarkPainter({required this.scale});

  final double scale;

  @override
  void paint(Canvas canvas, Size size) {
    _PeachPainter._paintEmbossedNgmy(
      canvas,
      Offset(size.width * 0.52, size.height * 0.52),
      34 * scale,
      opacity: 0.11,
      rotate: -0.32,
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _NgmyHologramStripPainter extends CustomPainter {
  _NgmyHologramStripPainter({required this.scale});

  final double scale;

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    final band = Paint()
      ..shader = LinearGradient(
        colors: [
          const Color(0xFFCBD5E1).withOpacity(0.08),
          const Color(0xFFE2E8F0).withOpacity(0.28),
          const Color(0xFF94A3B8).withOpacity(0.22),
          const Color(0xFFE2E8F0).withOpacity(0.28),
          const Color(0xFFCBD5E1).withOpacity(0.08),
        ],
      ).createShader(rect);
    canvas.drawRect(rect, band);

    final step = 34.0 * scale;
    for (var x = -step; x < size.width + step; x += step) {
      _PeachPainter._paintEmbossedNgmy(
        canvas,
        Offset(x + step * 0.5, size.height * 0.52),
        7.5 * scale,
        opacity: 0.42,
        rotate: -0.08,
      );
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _IdCardBackgroundPainter extends CustomPainter {
  _IdCardBackgroundPainter({required this.isGeorgia});

  final bool isGeorgia;

  @override
  void paint(Canvas canvas, Size size) {
    final rect = Offset.zero & size;
    final bg = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: isGeorgia
            ? [const Color(0xFFE8F5E0), const Color(0xFFF5E6C8), const Color(0xFFDCEFCF)]
            : [const Color(0xFFE8F0FA), const Color(0xFFF5F0E6), const Color(0xFFE2EEF8)],
      ).createShader(rect);
    canvas.drawRect(rect, bg);

    final line = Paint()
      ..color = Colors.black.withOpacity(0.03)
      ..strokeWidth = 0.6;
    for (var i = -size.height; i < size.width + size.height; i += 9) {
      canvas.drawLine(Offset(i.toDouble(), 0), Offset(i + size.height, size.height), line);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _PeachPainter extends CustomPainter {
  _PeachPainter({this.showNgmy = false, this.ngmyScale = 1});

  final bool showNgmy;
  final double ngmyScale;

  @override
  void paint(Canvas canvas, Size size) {
    final cx = size.width * 0.55;
    final cy = size.height * 0.5;
    final peach = Paint()..color = const Color(0xFFF97316).withOpacity(0.72);
    final leaf = Paint()..color = const Color(0xFF16A34A).withOpacity(0.8);
    canvas.drawOval(Rect.fromCenter(center: Offset(cx, cy), width: size.width * 0.72, height: size.height * 0.78), peach);
    canvas.drawOval(Rect.fromCenter(center: Offset(cx - size.width * 0.08, cy - size.height * 0.28), width: size.width * 0.22, height: size.height * 0.18), leaf);
    final stem = Paint()
      ..color = const Color(0xFF854D0E)
      ..strokeWidth = 1.2
      ..style = PaintingStyle.stroke;
    canvas.drawLine(Offset(cx, cy - size.height * 0.34), Offset(cx + size.width * 0.04, cy - size.height * 0.42), stem);

    if (showNgmy) {
      _paintCurvedNgmyOnPeach(canvas, Offset(cx, cy), size.width * 0.34, ngmyScale);
    }
  }

  static void _paintCurvedNgmyOnPeach(Canvas canvas, Offset center, double radius, double scale) {
    const text = 'NGMY';
    final fontSize = 8.8 * scale;
    final startAngle = -1.05;
    final sweep = 2.1 / math.max(text.length - 1, 1);
    for (var i = 0; i < text.length; i++) {
      final angle = startAngle + sweep * i;
      final px = center.dx + math.cos(angle) * radius;
      final py = center.dy + math.sin(angle) * radius * 0.55;
      canvas.save();
      canvas.translate(px, py);
      canvas.rotate(angle + math.pi / 2);
      _paintEmbossedNgmy(canvas, Offset.zero, fontSize, opacity: 0.95, rotate: 0, singleLetter: text[i]);
      canvas.restore();
    }
  }

  static void _paintEmbossedNgmy(
    Canvas canvas,
    Offset center,
    double fontSize, {
    required double opacity,
    double rotate = 0,
    String? singleLetter,
  }) {
    final text = singleLetter ?? 'NGMY';
    canvas.save();
    canvas.translate(center.dx, center.dy);
    canvas.rotate(rotate);
    final builder = ui.ParagraphBuilder(
      ui.ParagraphStyle(textAlign: TextAlign.center, fontWeight: FontWeight.w900),
    )
      ..pushStyle(
        ui.TextStyle(
          color: Color.fromRGBO(241, 245, 249, opacity),
          fontSize: fontSize,
          fontWeight: FontWeight.w900,
          letterSpacing: singleLetter == null ? 1.4 : 0,
          shadows: [
            ui.Shadow(color: Color.fromRGBO(255, 255, 255, opacity * 0.95), blurRadius: fontSize * 0.22),
            ui.Shadow(color: Color.fromRGBO(148, 163, 184, opacity * 0.85), blurRadius: fontSize * 0.38),
            ui.Shadow(color: Color.fromRGBO(0, 0, 0, opacity * 0.35), blurRadius: fontSize * 0.08, offset: Offset(0, fontSize * 0.08)),
          ],
        ),
      )
      ..addText(text);
    final paragraph = builder.build()..layout(ui.ParagraphConstraints(width: fontSize * (singleLetter == null ? 5.5 : 1.4)));
    canvas.drawParagraph(paragraph, Offset(-paragraph.maxIntrinsicWidth / 2, -fontSize / 2));
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _PeachPainter oldDelegate) => false;
}

class _MiniNgmySealPainter extends CustomPainter {
  _MiniNgmySealPainter({required this.scale});

  final double scale;

  @override
  void paint(Canvas canvas, Size size) {
    _PeachPainter._paintEmbossedNgmy(canvas, Offset(size.width / 2, size.height / 2), 7 * scale, opacity: 0.92, rotate: -0.12);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

Widget _floatingIconButton({
  required IconData icon,
  required VoidCallback onPressed,
  String? tooltip,
}) {
  return Material(
    color: Colors.white.withOpacity(0.92),
    elevation: 3,
    shadowColor: Colors.black26,
    shape: const CircleBorder(),
    child: IconButton(
      tooltip: tooltip,
      onPressed: onPressed,
      icon: Icon(icon, color: const Color(0xFF111827)),
      visualDensity: VisualDensity.compact,
    ),
  );
}

Future<void> showNgmyCivicRegistryIdCardDialog(
  BuildContext context, {
  required Map<String, dynamic> record,
  String? photoPath,
  ImageProvider? photoImage,
  VoidCallback? onChangePhoto,
}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Close ID',
    barrierColor: Colors.black.withOpacity(0.35),
    pageBuilder: (ctx, _, __) {
      final resolvedPhoto = photoPath ?? (record['idPhotoPath'] ?? '').toString();
      final maxH = MediaQuery.sizeOf(ctx).height * 0.82;
      return SafeArea(
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Center(
              child: SizedBox(
                height: maxH,
                width: MediaQuery.sizeOf(ctx).width,
                child: FittedBox(
                  fit: BoxFit.contain,
                  child: SizedBox(
                    width: 360,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        NgmyCivicRegistryIdCard(
                          record: record,
                          photoPath: resolvedPhoto.isEmpty ? null : resolvedPhoto,
                          photoImage: photoImage,
                          scale: 1,
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Official Civic Registry ID',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                            color: Colors.white.withOpacity(0.92),
                            shadows: const [Shadow(color: Colors.black54, blurRadius: 6)],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            Positioned(
              top: 8,
              right: 8,
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (onChangePhoto != null)
                    _floatingIconButton(
                      icon: Icons.photo_camera_outlined,
                      tooltip: 'Change photo',
                      onPressed: () {
                        Navigator.pop(ctx);
                        onChangePhoto();
                      },
                    ),
                  if (onChangePhoto != null) const SizedBox(width: 8),
                  _floatingIconButton(
                    icon: Icons.close,
                    tooltip: 'Close',
                    onPressed: () => Navigator.pop(ctx),
                  ),
                ],
              ),
            ),
          ],
        ),
      );
    },
  );
}
