import 'dart:convert';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'ngmy_qr_download.dart';

/// Id of the House Care card on the home screen (one per account).
const String kNgmyHouseCareCardId = 'ngmy_house_care_card';

const _months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

String _niceDate(String raw) {
  final d = DateTime.tryParse(raw)?.toLocal();
  if (d == null) return '';
  return '${_months[d.month - 1]} ${d.day}, ${d.year}';
}

/// What the home card remembers about the membership, from the server's `care` object.
String ngmyHouseCareSnapshot(Map<String, dynamic> care, String name) => jsonEncode({
      'name': name.trim(),
      'status': (care['status'] ?? 'pending').toString(),
      'nextDue': care['nextDue']?.toString() ?? '',
      'termYears': (care['termYears'] as num?)?.toInt() ?? 0,
      'termEnds': care['termEnds']?.toString() ?? '',
      'price': (care['price'] as num?)?.toDouble() ?? 125,
    });

/// The face of the House Care card: the membership at a glance, and when the next payment is due.
class NgmyHouseCareCardFace extends StatelessWidget {
  const NgmyHouseCareCardFace({super.key, required this.json});

  final String json;

  @override
  Widget build(BuildContext context) {
    var data = <String, dynamic>{};
    try {
      final m = jsonDecode(json);
      if (m is Map) data = Map<String, dynamic>.from(m);
    } catch (_) {}
    final status = (data['status'] ?? 'pending').toString();
    final due = DateTime.tryParse((data['nextDue'] ?? '').toString())?.toLocal();
    // Whole days left, counting a part of a day as a day.
    final daysLeft = due == null ? null : (due.difference(DateTime.now()).inMinutes / 1440).ceil();
    final name = (data['name'] ?? '').toString();
    final termYears = (data['termYears'] as num?)?.toInt() ?? 0;
    final price = (data['price'] as num?)?.toDouble() ?? 125;
    final (label, color) = switch (status) {
      'active' => ('ACTIVE', const Color(0xFF34D399)),
      'lapsed' => ('PAYMENT DUE', const Color(0xFFFBBF24)),
      'cancelled' => ('ENDED', const Color(0xFFF87171)),
      _ => ('FIRST PAYMENT NEEDED', const Color(0xFFFBBF24)),
    };
    final dueLine = status == 'active'
        ? (due == null ? '—' : _niceDate(due.toIso8601String()))
        : (status == 'lapsed' && due != null ? 'Was due ${_niceDate(due.toIso8601String())}' : 'Pay to start');
    final dueNote = status != 'active' || daysLeft == null
        ? ''
        : daysLeft < 0
            ? 'Payment is late'
            : daysLeft == 0
                ? 'Due today'
                : daysLeft == 1
                    ? 'Due tomorrow'
                    : 'In $daysLeft days';
    // A small card (a narrow phone) is laid out a little tighter so every line fits, nothing pushed off the bottom.
    return LayoutBuilder(builder: (context, box) {
    final tight = box.maxHeight.isFinite && box.maxHeight < 196;
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF0C4A6E), Color(0xFF0F766E), Color(0xFF064E3B)]),
      ),
      child: Stack(
        children: [
          Positioned(right: -30, top: -30, child: Icon(Icons.home_work_rounded, size: 190, color: Colors.white.withValues(alpha: 0.07))),
          Padding(
            padding: EdgeInsets.fromLTRB(22, tight ? 20 : 38, 22, tight ? 10 : 18),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(children: [
                  const Icon(Icons.verified_user_rounded, color: Colors.white, size: 18),
                  const SizedBox(width: 8),
                  const Expanded(
                    child: FittedBox(
                      fit: BoxFit.scaleDown,
                      alignment: Alignment.centerLeft,
                      child: Text('NGMY HOUSE CARE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 1.8)),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                    decoration: BoxDecoration(color: color.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(20), border: Border.all(color: color.withValues(alpha: 0.7))),
                    child: Text(label, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.8)),
                  ),
                ]),
                const Spacer(),
                const Text('NEXT PAYMENT DUE', style: TextStyle(color: Colors.white60, fontWeight: FontWeight.w800, fontSize: 10.5, letterSpacing: 1.4)),
                const SizedBox(height: 2),
                FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text(dueLine, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: tight ? 26 : 30, height: 1.1)),
                ),
                if (dueNote.isNotEmpty)
                  Text(dueNote, style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 12.5)),
                const Spacer(),
                Text(
                  name.isEmpty ? 'Member' : name,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14),
                ),
                // The price and the agreement on their own line, always whole (shrunk a little on a narrow card, never cut).
                FittedBox(
                  key: const Key('house-care-terms'),
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text(
                    [
                      '\$${price.toStringAsFixed(0)}/month',
                      if (termYears > 0) '$termYears-year agreement',
                    ].join(' · '),
                    maxLines: 1,
                    style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 11.5),
                  ),
                ),
                const SizedBox(height: 2),
                const FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text('Work is free of labor charges. You pay for materials only.', maxLines: 1, style: TextStyle(color: Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w600)),
                ),
              ],
            ),
          ),
        ],
      ),
    );
    });
  }
}

/// The House Care card exactly as it is on the home screen (same face, same shape, same round corners), with a
/// white round download button on it. The button saves a picture of the card (the button itself is not in it).
class NgmyHouseCareCardDownloadable extends StatefulWidget {
  const NgmyHouseCareCardDownloadable({super.key, required this.json});

  final String json;

  @override
  State<NgmyHouseCareCardDownloadable> createState() => _NgmyHouseCareCardDownloadableState();
}

class _NgmyHouseCareCardDownloadableState extends State<NgmyHouseCareCardDownloadable> {
  final _captureKey = GlobalKey();
  bool _busy = false;

  Future<Uint8List?> _capture() async {
    await WidgetsBinding.instance.endOfFrame;
    final boundary = _captureKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
    if (boundary == null) return null;
    final image = await boundary.toImage(pixelRatio: 3.0);
    final data = await image.toByteData(format: ui.ImageByteFormat.png);
    return data?.buffer.asUint8List();
  }

  Future<void> _download() async {
    if (_busy) return;
    setState(() => _busy = true);
    final messenger = ScaffoldMessenger.maybeOf(context);
    try {
      final bytes = await _capture();
      if (bytes == null) throw Exception('Could not make the picture.');
      var name = 'member';
      try {
        final m = jsonDecode(widget.json);
        if (m is Map) name = (m['name'] ?? '').toString().trim();
      } catch (_) {}
      final safe = name.replaceAll(RegExp(r'[^\w\-]+'), '_');
      final msg = await downloadNgmyQrImage(bytes, 'ngmy_house_care_${safe.isEmpty ? 'member' : safe}');
      messenger?.showSnackBar(SnackBar(content: Text(msg)));
    } catch (e) {
      messenger?.showSnackBar(SnackBar(content: Text('Download failed: $e')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, box) {
      final w = box.maxWidth.isFinite ? box.maxWidth : 360.0;
      // The home card shape: 1.55 : 1 (the same rule as the home cards), less the 16 at the top of the deck.
      final h = (w / 1.55).clamp(190.0, 420.0) - 16;
      return SizedBox(
        width: w,
        height: h,
        child: Stack(
          children: [
            Positioned.fill(
              child: RepaintBoundary(
                key: _captureKey,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(28),
                  child: NgmyHouseCareCardFace(json: widget.json),
                ),
              ),
            ),
            Positioned(
              top: 6,
              right: 10,
              child: Material(
                color: Colors.white,
                shape: const CircleBorder(),
                elevation: 4,
                shadowColor: Colors.black45,
                child: InkWell(
                  key: const Key('house-care-download'),
                  customBorder: const CircleBorder(),
                  onTap: _busy ? null : _download,
                  child: SizedBox(
                    width: 30,
                    height: 30,
                    child: Center(
                      child: _busy
                          ? const SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2, color: Color(0xFF0F766E)))
                          : const Icon(Icons.download_rounded, size: 18, color: Color(0xFF0F766E)),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      );
    });
  }
}
