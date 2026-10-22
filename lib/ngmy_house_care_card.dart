import 'dart:convert';

import 'package:flutter/material.dart';

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
      'price': (care['price'] as num?)?.toDouble() ?? 50,
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
    final price = (data['price'] as num?)?.toDouble() ?? 50;
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
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF0C4A6E), Color(0xFF0F766E), Color(0xFF064E3B)]),
      ),
      child: Stack(
        children: [
          Positioned(right: -30, top: -30, child: Icon(Icons.home_work_rounded, size: 190, color: Colors.white.withValues(alpha: 0.07))),
          Padding(
            padding: const EdgeInsets.fromLTRB(22, 38, 22, 18),
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
                  child: Text(dueLine, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 30, height: 1.1)),
                ),
                if (dueNote.isNotEmpty)
                  Text(dueNote, style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 12.5)),
                const Spacer(),
                Row(children: [
                  Expanded(
                    child: Text(
                      name.isEmpty ? 'Member' : name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Flexible(
                    child: Text(
                      [
                        '\$${price.toStringAsFixed(0)}/month',
                        if (termYears > 0) '$termYears-year agreement',
                      ].join(' · '),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 11.5),
                    ),
                  ),
                ]),
                const SizedBox(height: 2),
                const Text('Work is free of labor charges. You pay for materials only.', style: TextStyle(color: Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w600)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
