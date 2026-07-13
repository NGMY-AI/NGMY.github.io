import 'dart:math' as math;

import 'package:flutter/material.dart';

/// One row on the helpers ranking paper.
class NgmyHelperRankRow {
  const NgmyHelperRankRow({
    required this.rank,
    required this.name,
    required this.registryId,
    required this.helps,
    required this.missed,
  });

  final int rank;
  final String name;
  final String registryId;
  final int helps;
  final int missed;
}

enum NgmyHelpersRankKind { top, least, non }

extension NgmyHelpersRankKindX on NgmyHelpersRankKind {
  /// Swahili header for the paper.
  String get swahiliTitle {
    switch (this) {
      case NgmyHelpersRankKind.top:
        return 'Wasaidizi Bora';
      case NgmyHelpersRankKind.least:
        return 'Wasaidizi Wachache';
      case NgmyHelpersRankKind.non:
        return 'Wasio Saidia';
    }
  }

  String get swahiliSubtitle {
    switch (this) {
      case NgmyHelpersRankKind.top:
        return 'Orodha ya wanaosaidia zaidi katika jimbo';
      case NgmyHelpersRankKind.least:
        return 'Orodha ya wanaosaidia kidogo katika jimbo';
      case NgmyHelpersRankKind.non:
        return 'Orodha ya wasio saidia katika jimbo';
    }
  }

  Color get accent {
    switch (this) {
      case NgmyHelpersRankKind.top:
        return const Color(0xFF15803D);
      case NgmyHelpersRankKind.least:
        return const Color(0xFFC2410C);
      case NgmyHelpersRankKind.non:
        return const Color(0xFFB91C1C);
    }
  }

  Color get softFill {
    switch (this) {
      case NgmyHelpersRankKind.top:
        return const Color(0xFFECFDF5);
      case NgmyHelpersRankKind.least:
        return const Color(0xFFFFF7ED);
      case NgmyHelpersRankKind.non:
        return const Color(0xFFFEF2F2);
    }
  }
}

Future<void> showNgmyHelpersRankPaper(
  BuildContext context, {
  required NgmyHelpersRankKind kind,
  required String stateName,
  required List<NgmyHelperRankRow> rows,
}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Funga',
    barrierColor: Colors.black.withValues(alpha: 0.55),
    transitionDuration: const Duration(milliseconds: 380),
    pageBuilder: (ctx, anim, secondary) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, secondary, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutCubic);
      return FadeTransition(
        opacity: curved,
        child: ScaleTransition(
          scale: Tween<double>(begin: 0.94, end: 1).animate(curved),
          child: _NgmyHelpersRankPaperDialog(
            kind: kind,
            stateName: stateName,
            rows: rows,
          ),
        ),
      );
    },
  );
}

class _NgmyHelpersRankPaperDialog extends StatelessWidget {
  const _NgmyHelpersRankPaperDialog({
    required this.kind,
    required this.stateName,
    required this.rows,
  });

  final NgmyHelpersRankKind kind;
  final String stateName;
  final List<NgmyHelperRankRow> rows;

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now().toLocal();
    final dateStr =
        '${now.year.toString().padLeft(4, '0')}-${now.month.toString().padLeft(2, '0')}-${now.day.toString().padLeft(2, '0')}';
    final maxHelps = rows.fold<int>(0, (m, r) => math.max(m, r.helps));
    final maxMissed = rows.fold<int>(0, (m, r) => math.max(m, r.missed));
    final chartMax = math.max(1, kind == NgmyHelpersRankKind.non ? maxMissed : maxHelps);

    return SafeArea(
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 520, maxHeight: 720),
          child: Material(
            color: Colors.transparent,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 18),
              child: Column(
                children: [
                  Expanded(
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(18),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.28),
                            blurRadius: 28,
                            offset: const Offset(0, 14),
                          ),
                        ],
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(18),
                        child: ColoredBox(
                          color: const Color(0xFFF8F4EC),
                          child: Stack(
                            children: [
                              Positioned.fill(
                                child: CustomPaint(
                                  painter: _PaperGrainPainter(accent: kind.accent),
                                ),
                              ),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  Container(
                                    padding: const EdgeInsets.fromLTRB(20, 18, 20, 14),
                                    decoration: BoxDecoration(
                                      gradient: LinearGradient(
                                        begin: Alignment.topLeft,
                                        end: Alignment.bottomRight,
                                        colors: [
                                          kind.softFill,
                                          const Color(0xFFF8F4EC),
                                        ],
                                      ),
                                      border: Border(
                                        bottom: BorderSide(color: kind.accent.withValues(alpha: 0.35), width: 1.4),
                                      ),
                                    ),
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                          children: [
                                            Text(
                                              dateStr,
                                              style: TextStyle(
                                                fontSize: 11,
                                                fontWeight: FontWeight.w700,
                                                color: kind.accent.withValues(alpha: 0.85),
                                                letterSpacing: 0.4,
                                              ),
                                            ),
                                            const Spacer(),
                                            Text(
                                              stateName.toUpperCase(),
                                              style: TextStyle(
                                                fontSize: 11,
                                                fontWeight: FontWeight.w800,
                                                letterSpacing: 1.1,
                                                color: kind.accent,
                                              ),
                                            ),
                                          ],
                                        ),
                                        const SizedBox(height: 12),
                                        Text(
                                          kind.swahiliTitle,
                                          style: TextStyle(
                                            fontFamily: 'Georgia',
                                            fontSize: 26,
                                            fontWeight: FontWeight.w900,
                                            height: 1.15,
                                            color: const Color(0xFF1C1917),
                                            decoration: TextDecoration.underline,
                                            decorationColor: kind.accent.withValues(alpha: 0.55),
                                            decorationThickness: 2,
                                          ),
                                        ),
                                        const SizedBox(height: 6),
                                        Text(
                                          kind.swahiliSubtitle,
                                          style: const TextStyle(
                                            fontSize: 12,
                                            height: 1.35,
                                            color: Color(0xFF57534E),
                                            fontWeight: FontWeight.w600,
                                          ),
                                        ),
                                        const SizedBox(height: 10),
                                        Row(
                                          children: [
                                            _chip('Wanachama', '${rows.length}', kind.accent),
                                            const SizedBox(width: 8),
                                            _chip(
                                              kind == NgmyHelpersRankKind.non ? 'Amekosa' : 'Misaada',
                                              kind == NgmyHelpersRankKind.non
                                                  ? '${rows.fold<int>(0, (s, r) => s + r.missed)}'
                                                  : '${rows.fold<int>(0, (s, r) => s + r.helps)}',
                                              kind.accent,
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ),
                                  if (rows.isNotEmpty)
                                    Padding(
                                      padding: const EdgeInsets.fromLTRB(16, 14, 16, 6),
                                      child: SizedBox(
                                        height: 88,
                                        child: CustomPaint(
                                          painter: _HelpersBarChartPainter(
                                            rows: rows.take(8).toList(),
                                            kind: kind,
                                            chartMax: chartMax,
                                          ),
                                          child: const SizedBox.expand(),
                                        ),
                                      ),
                                    ),
                                  Padding(
                                    padding: const EdgeInsets.fromLTRB(16, 4, 16, 0),
                                    child: Row(
                                      children: const [
                                        SizedBox(width: 28, child: Text('#', style: _colHead)),
                                        Expanded(flex: 4, child: Text('Jina', style: _colHead)),
                                        Expanded(child: Text('Misaada', style: _colHead, textAlign: TextAlign.right)),
                                        Expanded(child: Text('Amekosa', style: _colHead, textAlign: TextAlign.right)),
                                      ],
                                    ),
                                  ),
                                  const Divider(height: 12, thickness: 1, color: Color(0xFFD6D3D1)),
                                  Expanded(
                                    child: rows.isEmpty
                                        ? const Center(
                                            child: Text(
                                              'Hakuna data bado.',
                                              style: TextStyle(
                                                fontSize: 14,
                                                fontWeight: FontWeight.w700,
                                                color: Color(0xFF78716C),
                                              ),
                                            ),
                                          )
                                        : ListView.builder(
                                            padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                                            itemCount: rows.length,
                                            itemBuilder: (context, i) {
                                              final r = rows[i];
                                              final zebra = i.isEven;
                                              return Container(
                                                margin: const EdgeInsets.only(bottom: 6),
                                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 9),
                                                decoration: BoxDecoration(
                                                  color: zebra ? Colors.white.withValues(alpha: 0.72) : kind.softFill.withValues(alpha: 0.55),
                                                  borderRadius: BorderRadius.circular(10),
                                                  border: Border.all(color: kind.accent.withValues(alpha: 0.12)),
                                                ),
                                                child: Row(
                                                  children: [
                                                    SizedBox(
                                                      width: 28,
                                                      child: Text(
                                                        '${r.rank}',
                                                        style: TextStyle(
                                                          fontWeight: FontWeight.w900,
                                                          fontSize: 15,
                                                          color: kind.accent,
                                                        ),
                                                      ),
                                                    ),
                                                    Expanded(
                                                      flex: 4,
                                                      child: Column(
                                                        crossAxisAlignment: CrossAxisAlignment.start,
                                                        children: [
                                                          Text(
                                                            r.name.isEmpty ? '—' : r.name,
                                                            maxLines: 1,
                                                            overflow: TextOverflow.ellipsis,
                                                            style: const TextStyle(
                                                              fontWeight: FontWeight.w800,
                                                              fontSize: 13,
                                                              color: Color(0xFF1C1917),
                                                            ),
                                                          ),
                                                          if (r.registryId.isNotEmpty)
                                                            Text(
                                                              r.registryId,
                                                              maxLines: 1,
                                                              overflow: TextOverflow.ellipsis,
                                                              style: TextStyle(
                                                                fontSize: 10,
                                                                fontWeight: FontWeight.w700,
                                                                color: kind.accent.withValues(alpha: 0.85),
                                                              ),
                                                            ),
                                                        ],
                                                      ),
                                                    ),
                                                    Expanded(
                                                      child: Text(
                                                        '${r.helps}',
                                                        textAlign: TextAlign.right,
                                                        style: const TextStyle(
                                                          fontWeight: FontWeight.w800,
                                                          fontSize: 12,
                                                          color: Color(0xFF15803D),
                                                        ),
                                                      ),
                                                    ),
                                                    Expanded(
                                                      child: Text(
                                                        '${r.missed}',
                                                        textAlign: TextAlign.right,
                                                        style: const TextStyle(
                                                          fontWeight: FontWeight.w800,
                                                          fontSize: 12,
                                                          color: Color(0xFFB91C1C),
                                                        ),
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              );
                                            },
                                          ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.fromLTRB(20, 0, 20, 14),
                                    child: Row(
                                      children: [
                                        const Text(
                                          'NGMY · Sajili ya Kiraia',
                                          style: TextStyle(
                                            fontSize: 10,
                                            fontWeight: FontWeight.w700,
                                            letterSpacing: 0.3,
                                            color: Color(0xFF78716C),
                                          ),
                                        ),
                                        const Spacer(),
                                        Text(
                                          'NGMY.ORG',
                                          style: TextStyle(
                                            fontSize: 11,
                                            fontWeight: FontWeight.w900,
                                            letterSpacing: 1.2,
                                            color: kind.accent,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  SizedBox(
                    width: double.infinity,
                    child: FilledButton(
                      onPressed: () => Navigator.of(context).maybePop(),
                      style: FilledButton.styleFrom(
                        backgroundColor: kind.accent,
                        foregroundColor: Colors.white,
                        minimumSize: const Size(double.infinity, 46),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: const Text('Funga', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  static const _colHead = TextStyle(
    fontSize: 10,
    fontWeight: FontWeight.w800,
    letterSpacing: 0.4,
    color: Color(0xFF78716C),
  );

  Widget _chip(String label, String value, Color accent) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.75),
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: accent.withValues(alpha: 0.25)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(label, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: accent.withValues(alpha: 0.9))),
          const SizedBox(width: 6),
          Text(value, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: accent)),
        ],
      ),
    );
  }
}

class _PaperGrainPainter extends CustomPainter {
  _PaperGrainPainter({required this.accent});

  final Color accent;

  @override
  void paint(Canvas canvas, Size size) {
    final edge = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          accent.withValues(alpha: 0.05),
          Colors.transparent,
          const Color(0xFF78716C).withValues(alpha: 0.04),
        ],
      ).createShader(Offset.zero & size);
    canvas.drawRect(Offset.zero & size, edge);

    final rule = Paint()
      ..color = const Color(0xFFD6D3D1).withValues(alpha: 0.35)
      ..strokeWidth = 1;
    for (var y = 120.0; y < size.height - 40; y += 22) {
      canvas.drawLine(Offset(18, y), Offset(size.width - 18, y), rule);
    }
  }

  @override
  bool shouldRepaint(covariant _PaperGrainPainter oldDelegate) => oldDelegate.accent != accent;
}

class _HelpersBarChartPainter extends CustomPainter {
  _HelpersBarChartPainter({
    required this.rows,
    required this.kind,
    required this.chartMax,
  });

  final List<NgmyHelperRankRow> rows;
  final NgmyHelpersRankKind kind;
  final int chartMax;

  @override
  void paint(Canvas canvas, Size size) {
    if (rows.isEmpty) return;
    final n = rows.length;
    final gap = 6.0;
    final barW = (size.width - gap * (n - 1)) / n;
    final baseY = size.height - 4;

    for (var i = 0; i < n; i++) {
      final r = rows[i];
      final value = kind == NgmyHelpersRankKind.non ? r.missed : r.helps;
      final h = (value / chartMax) * (size.height - 18);
      final x = i * (barW + gap);
      final rect = RRect.fromRectAndRadius(
        Rect.fromLTWH(x, baseY - h, barW, math.max(4, h)),
        const Radius.circular(6),
      );
      final paint = Paint()
        ..shader = LinearGradient(
          begin: Alignment.bottomCenter,
          end: Alignment.topCenter,
          colors: [
            kind.accent.withValues(alpha: 0.35),
            kind.accent,
          ],
        ).createShader(rect.outerRect);
      canvas.drawRRect(rect, paint);
    }
  }

  @override
  bool shouldRepaint(covariant _HelpersBarChartPainter oldDelegate) =>
      oldDelegate.rows != rows || oldDelegate.kind != kind || oldDelegate.chartMax != chartMax;
}
