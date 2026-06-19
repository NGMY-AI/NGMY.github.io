import 'dart:convert';

import 'package:flutter/material.dart';

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
    if (src.startsWith('supabase://')) return null;
    return null;
  }

  @override
  Widget build(BuildContext context) {
    final w = 340.0 * scale;
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

    return Container(
      width: w,
      height: h,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10 * scale),
        boxShadow: [
          BoxShadow(color: Colors.black.withOpacity(0.22), blurRadius: 12 * scale, offset: Offset(0, 4 * scale)),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(10 * scale),
        child: Stack(
          fit: StackFit.expand,
          children: [
            CustomPaint(painter: _IdCardBackgroundPainter(isGeorgia: isGeorgia)),
            Padding(
              padding: EdgeInsets.fromLTRB(8 * scale, 6 * scale, 8 * scale, 6 * scale),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _headerRow(stateUpper, docTitle, badge, code, scale),
                  SizedBox(height: 4 * scale),
                  Expanded(
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        _photoColumn(photo, name, scale),
                        SizedBox(width: 6 * scale),
                        Expanded(child: _dataColumn(registryId, dob, name, address, city, code, room, iss, exp, scale)),
                        SizedBox(width: 4 * scale),
                        _rightColumn(photo, dob, isGeorgia, code, scale),
                      ],
                    ),
                  ),
                  SizedBox(height: 2 * scale),
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
    return Row(
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
                  fontSize: 15 * scale,
                  fontWeight: FontWeight.w900,
                  color: const Color(0xFF1E3A8A),
                  height: 1,
                  letterSpacing: 0.5,
                ),
              ),
              Text(
                docTitle,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontSize: 6.5 * scale,
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
              style: TextStyle(fontSize: 8 * scale, fontWeight: FontWeight.w900, color: Colors.black87),
            ),
          ),
        ),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(badge, style: TextStyle(fontSize: 10 * scale, fontWeight: FontWeight.w900)),
            SizedBox(width: 3 * scale),
            Container(
              width: 14 * scale,
              height: 14 * scale,
              decoration: const BoxDecoration(color: Colors.black, shape: BoxShape.circle),
              child: Icon(Icons.star_rounded, size: 9 * scale, color: const Color(0xFFFBBF24)),
            ),
            SizedBox(width: 3 * scale),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('USA', style: TextStyle(fontSize: 4.5 * scale, fontWeight: FontWeight.w800, color: const Color(0xFFB91C1C))),
                Text(code, style: TextStyle(fontSize: 5 * scale, fontWeight: FontWeight.w900)),
              ],
            ),
          ],
        ),
      ],
    );
  }

  static String _signaturePreview(String name) {
    final parts = name.trim().split(RegExp(r'\s+')).where((p) => p.isNotEmpty).toList();
    if (parts.isEmpty) return 'Signature';
    if (parts.length == 1) return parts.first.toLowerCase();
    return '${parts.first[0]}${parts.last.toLowerCase()}';
  }

  Widget _photoColumn(ImageProvider? photo, String name, double scale) {
    return SizedBox(
      width: 72 * scale,
      child: Column(
        children: [
          Expanded(
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                color: const Color(0xFFD1D5DB),
                border: Border.all(color: Colors.black54, width: 0.8),
              ),
              child: photo != null
                  ? Image(image: photo, fit: BoxFit.cover, color: Colors.black.withOpacity(0.05), colorBlendMode: BlendMode.darken)
                  : Icon(Icons.person, size: 36 * scale, color: Colors.white70),
            ),
          ),
          SizedBox(height: 2 * scale),
          Container(
            width: double.infinity,
            height: 12 * scale,
            alignment: Alignment.centerLeft,
            decoration: BoxDecoration(
              border: Border(bottom: BorderSide(color: Colors.black87, width: 0.8)),
            ),
            child: Text(
              _signaturePreview(name),
              maxLines: 1,
              overflow: TextOverflow.clip,
              style: TextStyle(fontSize: 7 * scale, fontStyle: FontStyle.italic, fontWeight: FontWeight.w600),
            ),
          ),
        ],
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
        padding: EdgeInsets.only(bottom: 1.5 * scale),
        child: RichText(
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
          text: TextSpan(
            style: TextStyle(fontSize: 5.2 * scale, color: Colors.black87, height: 1.15),
            children: [
              TextSpan(text: '$label ', style: const TextStyle(fontWeight: FontWeight.w600)),
              TextSpan(text: value, style: TextStyle(fontWeight: bold ? FontWeight.w900 : FontWeight.w800, fontSize: (bold ? 6.2 : 5.2) * scale)),
            ],
          ),
        ),
      );
    }

    final addrLine = [address, if (city.isNotEmpty) '$city, $code', if (room.isNotEmpty) room].where((s) => s.isNotEmpty).join('\n');

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
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
        const Spacer(),
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

  Widget _rightColumn(ImageProvider? photo, String dob, bool isGeorgia, String code, double scale) {
    return SizedBox(
      width: 78 * scale,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(
            top: 0,
            right: 0,
            child: isGeorgia
                ? CustomPaint(size: Size(62 * scale, 62 * scale), painter: _PeachPainter())
                : Container(
                    width: 56 * scale,
                    height: 56 * scale,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(colors: [const Color(0xFF93C5FD).withOpacity(0.5), const Color(0xFF1E40AF).withOpacity(0.15)]),
                      border: Border.all(color: const Color(0xFF1E3A8A), width: 1.2),
                    ),
                    alignment: Alignment.center,
                    child: Text(code, style: TextStyle(fontSize: 16 * scale, fontWeight: FontWeight.w900, color: const Color(0xFF1E3A8A))),
                  ),
          ),
          Positioned(
            bottom: 2 * scale,
            right: 2 * scale,
            child: Column(
              children: [
                Container(
                  width: 34 * scale,
                  height: 42 * scale,
                  decoration: BoxDecoration(
                    color: const Color(0xFFD1D5DB),
                    border: Border.all(color: Colors.black45),
                  ),
                  child: photo != null
                      ? Opacity(
                          opacity: 0.55,
                          child: Image(image: photo, fit: BoxFit.cover),
                        )
                      : null,
                ),
                Container(
                  width: 34 * scale,
                  color: Colors.white70,
                  padding: EdgeInsets.symmetric(vertical: 1 * scale),
                  child: Text(
                    dob.isEmpty ? '--/--/----' : dob,
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 4.5 * scale, fontWeight: FontWeight.w800),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _footerRow(String registryId, String phone, double scale) {
    return Row(
      children: [
        Expanded(
          child: Text(
            '5 DD ${registryId.padRight(20, '0')}${phone.replaceAll(RegExp(r'\D'), '').padRight(8, '0')}'.substring(0, 28.clamp(0, 40)),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(fontSize: 4.5 * scale, fontWeight: FontWeight.w600, letterSpacing: 0.3),
          ),
        ),
        Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.favorite, size: 7 * scale, color: Colors.black87),
            SizedBox(width: 2 * scale),
            Text('CIVIC REGISTRY', style: TextStyle(fontSize: 4.5 * scale, fontWeight: FontWeight.w800)),
          ],
        ),
      ],
    );
  }
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
      ..color = Colors.black.withOpacity(0.04)
      ..strokeWidth = 0.6;
    for (var i = -size.height; i < size.width + size.height; i += 8) {
      canvas.drawLine(Offset(i.toDouble(), 0), Offset(i + size.height, size.height), line);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _PeachPainter extends CustomPainter {
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
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

Future<void> showNgmyCivicRegistryIdCardDialog(
  BuildContext context, {
  required Map<String, dynamic> record,
  String? photoPath,
  ImageProvider? photoImage,
  VoidCallback? onChangePhoto,
}) {
  return showDialog<void>(
    context: context,
    builder: (ctx) {
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      final resolvedPhoto = photoPath ?? (record['idPhotoPath'] ?? '').toString();
      return Dialog(
        insetPadding: const EdgeInsets.all(16),
        backgroundColor: isDark ? const Color(0xFF111827) : const Color(0xFFF3F4F6),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        child: Padding(
          padding: const EdgeInsets.all(18),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                children: [
                  const Expanded(
                    child: Text('Registry ID / Passport', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
                  ),
                  if (onChangePhoto != null)
                    IconButton(
                      tooltip: 'Change photo',
                      onPressed: () {
                        Navigator.pop(ctx);
                        onChangePhoto();
                      },
                      icon: const Icon(Icons.photo_camera_outlined),
                    ),
                  IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close)),
                ],
              ),
              const SizedBox(height: 12),
              FittedBox(
                child: NgmyCivicRegistryIdCard(
                  record: record,
                  photoPath: resolvedPhoto.isEmpty ? null : resolvedPhoto,
                  photoImage: photoImage,
                ),
              ),
              const SizedBox(height: 12),
              Text(
                'Official Civic Registry identity card',
                style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
              ),
            ],
          ),
        ),
      );
    },
  );
}
