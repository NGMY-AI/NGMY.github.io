import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_repair_estimate_ai.dart';

/// Fixed design width — parent scales with [FittedBox] so it fits any phone screen.
const double kNgmyRepairEstimateDesignWidth = 360;

class NgmyRepairEstimatePreviewData {
  const NgmyRepairEstimatePreviewData({
    required this.templateId,
    required this.businessName,
    required this.businessPhone,
    required this.businessStreet,
    required this.businessCityStateZip,
    required this.estimateNo,
    required this.issuedDate,
    required this.validUntil,
    required this.clientName,
    required this.estimate,
    this.photoBytes,
  });

  final String templateId;
  final String businessName;
  final String businessPhone;
  final String businessStreet;
  final String businessCityStateZip;
  final String estimateNo;
  final String issuedDate;
  final String validUntil;
  final String clientName;
  final NgmyRepairEstimateResult estimate;
  final Uint8List? photoBytes;
}

/// Professional compact estimate document for preview and download.
class NgmyRepairEstimatePreview extends StatelessWidget {
  const NgmyRepairEstimatePreview({super.key, required this.data});

  final NgmyRepairEstimatePreviewData data;

  @override
  Widget build(BuildContext context) {
    final theme = _themeFor(data.templateId);
    final biz = data.businessName.trim().isEmpty ? 'Your Business' : data.businessName.trim();
    final client = data.clientName.trim().isEmpty ? 'Customer' : data.clientName.trim();
    final e = data.estimate;

    return Container(
      width: kNgmyRepairEstimateDesignWidth,
      decoration: BoxDecoration(
        color: theme.surface,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: theme.accent.withValues(alpha: 0.35)),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.28), blurRadius: 16, offset: const Offset(0, 6)),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(17),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 12),
              decoration: BoxDecoration(gradient: LinearGradient(colors: theme.headerGradient)),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.16),
                          borderRadius: BorderRadius.circular(11),
                          border: Border.all(color: Colors.white24),
                        ),
                        child: Icon(Icons.handyman_rounded, color: theme.onHeader, size: 22),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              biz,
                              style: TextStyle(color: theme.onHeader, fontWeight: FontWeight.w900, fontSize: 14),
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                            ),
                            if (data.businessPhone.trim().isNotEmpty)
                              Text(data.businessPhone.trim(), style: TextStyle(color: theme.onHeader.withValues(alpha: 0.82), fontSize: 10)),
                          ],
                        ),
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.14),
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: Text('ESTIMATE', style: TextStyle(color: theme.onHeader, fontWeight: FontWeight.w900, fontSize: 8, letterSpacing: 1)),
                          ),
                          const SizedBox(height: 4),
                          Text('#${data.estimateNo}', style: TextStyle(color: theme.onHeader.withValues(alpha: 0.75), fontSize: 9, fontWeight: FontWeight.w700)),
                        ],
                      ),
                    ],
                  ),
                  if (data.businessStreet.trim().isNotEmpty || data.businessCityStateZip.trim().isNotEmpty) ...[
                    const SizedBox(height: 6),
                    Text(
                      [data.businessStreet.trim(), data.businessCityStateZip.trim()].where((s) => s.isNotEmpty).join(' · '),
                      style: TextStyle(color: theme.onHeader.withValues(alpha: 0.7), fontSize: 9),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ],
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    children: [
                      Expanded(child: _meta('Prepared for', client, theme)),
                      Expanded(child: _meta('Issued', data.issuedDate, theme)),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Row(
                    children: [
                      Expanded(child: _meta('Job type', e.jobTierLabel, theme)),
                      Expanded(child: _meta('Valid until', data.validUntil, theme)),
                    ],
                  ),
                  if (data.photoBytes != null) ...[
                    const SizedBox(height: 10),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(10),
                      child: Image.memory(
                        data.photoBytes!,
                        key: ValueKey<int>(data.photoBytes!.lengthInBytes),
                        height: 78,
                        width: double.infinity,
                        fit: BoxFit.cover,
                        gaplessPlayback: true,
                        filterQuality: FilterQuality.high,
                      ),
                    ),
                  ],
                  const SizedBox(height: 10),
                  Container(
                    padding: const EdgeInsets.all(11),
                    decoration: BoxDecoration(
                      color: theme.panel,
                      borderRadius: BorderRadius.circular(11),
                      border: Border.all(color: theme.accent.withValues(alpha: 0.22)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(e.itemName, style: TextStyle(color: theme.text, fontWeight: FontWeight.w900, fontSize: 12)),
                        if (e.fixtureType.trim().isNotEmpty) ...[
                          const SizedBox(height: 2),
                          Text(e.fixtureType.trim(), style: TextStyle(color: theme.muted, fontSize: 9, fontWeight: FontWeight.w600)),
                        ],
                        const SizedBox(height: 5),
                        Text(
                          e.scopeOfWork,
                          style: TextStyle(color: theme.muted, fontSize: 10, height: 1.4),
                          maxLines: 5,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),
                  Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: theme.accent.withValues(alpha: 0.15)),
                    ),
                    child: Column(
                      children: [
                        if (e.estimatedLaborHours > 0 && e.laborRatePerHour > 0)
                          _line(
                            'Labor (${e.estimatedLaborHours.toStringAsFixed(1)} hr × \$${e.laborRatePerHour.toStringAsFixed(0)}/hr)',
                            e.laborCost,
                            theme,
                            bold: false,
                          )
                        else
                          _line('Labor', e.laborCost, theme),
                        _divider(theme),
                        _line('Materials & parts', e.materialsCost, theme),
                        _divider(theme),
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 9),
                          child: Row(
                            children: [
                              Text('Total estimate', style: TextStyle(color: theme.text, fontWeight: FontWeight.w900, fontSize: 12)),
                              const Spacer(),
                              Text(
                                '\$${e.total.toStringAsFixed(2)}',
                                style: TextStyle(color: theme.accent, fontWeight: FontWeight.w900, fontSize: 20),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  if (e.pricingNote.trim().isNotEmpty) ...[
                    const SizedBox(height: 8),
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(Icons.verified_rounded, size: 13, color: theme.accent.withValues(alpha: 0.9)),
                        const SizedBox(width: 5),
                        Expanded(
                          child: Text(
                            e.pricingNote.trim(),
                            style: TextStyle(color: theme.muted, fontSize: 9, height: 1.35, fontStyle: FontStyle.italic),
                          ),
                        ),
                      ],
                    ),
                  ],
                  if (e.locationNote.trim().isNotEmpty) ...[
                    const SizedBox(height: 4),
                    Text(e.locationNote.trim(), style: TextStyle(color: theme.muted.withValues(alpha: 0.85), fontSize: 8.5, height: 1.3)),
                  ],
                  if (e.paymentTerms.trim().isNotEmpty) ...[
                    const SizedBox(height: 8),
                    Text(e.paymentTerms.trim(), style: TextStyle(color: theme.muted, fontSize: 8.5, height: 1.3)),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _meta(String label, String value, _EstimateTheme theme) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label.toUpperCase(), style: TextStyle(color: theme.muted, fontSize: 7.5, fontWeight: FontWeight.w700, letterSpacing: 0.6)),
        const SizedBox(height: 1),
        Text(value, style: TextStyle(color: theme.text, fontSize: 10, fontWeight: FontWeight.w800)),
      ],
    );
  }

  Widget _divider(_EstimateTheme theme) => Divider(height: 1, color: theme.accent.withValues(alpha: 0.12));

  Widget _line(String label, double amount, _EstimateTheme theme, {bool bold = true}) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
      child: Row(
        children: [
          Expanded(
            child: Text(label, style: TextStyle(color: theme.muted, fontSize: 10, fontWeight: bold ? FontWeight.w600 : FontWeight.w500)),
          ),
          Text('\$${amount.toStringAsFixed(2)}', style: TextStyle(color: theme.text, fontSize: 10, fontWeight: FontWeight.w800)),
        ],
      ),
    );
  }

  _EstimateTheme _themeFor(String id) {
    switch (id) {
      case 'estimate_ocean':
      case 'essential_emerald':
        return const _EstimateTheme(
          surface: Color(0xFF0C1929),
          panel: Color(0xFF112236),
          text: Color(0xFFE2E8F0),
          muted: Color(0xFF94A3B8),
          accent: Color(0xFF38BDF8),
          accent2: Color(0xFF0EA5E9),
          onHeader: Colors.white,
          headerGradient: [Color(0xFF0C4A6E), Color(0xFF0369A1)],
        );
      case 'estimate_mint':
      case 'essential_amber':
        return const _EstimateTheme(
          surface: Color(0xFF0A1A14),
          panel: Color(0xFF102820),
          text: Color(0xFFECFDF5),
          muted: Color(0xFF86EFAC),
          accent: Color(0xFF34D399),
          accent2: Color(0xFF10B981),
          onHeader: Colors.white,
          headerGradient: [Color(0xFF065F46), Color(0xFF047857)],
        );
      case 'estimate_pro':
        return const _EstimateTheme(
          surface: Color(0xFFFAFAF9),
          panel: Color(0xFFF5F5F4),
          text: Color(0xFF1C1917),
          muted: Color(0xFF78716C),
          accent: Color(0xFF0D9488),
          accent2: Color(0xFF14B8A6),
          onHeader: Colors.white,
          headerGradient: [Color(0xFF134E4A), Color(0xFF0F766E)],
        );
      case 'estimate_slate':
      case 'essential_gold':
      default:
        return const _EstimateTheme(
          surface: Color(0xFF111827),
          panel: Color(0xFF1F2937),
          text: Color(0xFFF3F4F6),
          muted: Color(0xFF9CA3AF),
          accent: Color(0xFF22D3EE),
          accent2: Color(0xFF06B6D4),
          onHeader: Colors.white,
          headerGradient: [Color(0xFF1E293B), Color(0xFF334155)],
        );
    }
  }
}

class _EstimateTheme {
  const _EstimateTheme({
    required this.surface,
    required this.panel,
    required this.text,
    required this.muted,
    required this.accent,
    required this.accent2,
    required this.onHeader,
    required this.headerGradient,
  });

  final Color surface;
  final Color panel;
  final Color text;
  final Color muted;
  final Color accent;
  final Color accent2;
  final Color onHeader;
  final List<Color> headerGradient;
}
