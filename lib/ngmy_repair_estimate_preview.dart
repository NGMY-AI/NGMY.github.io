import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_repair_estimate_ai.dart';

/// Fixed design width — parent scales with [FittedBox] so it fits any phone screen.
const double kNgmyRepairEstimateDesignWidth = 340;

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

/// Modern compact estimate card (no luxury invoice chrome, no blur overlays).
class NgmyRepairEstimatePreview extends StatelessWidget {
  const NgmyRepairEstimatePreview({super.key, required this.data});

  final NgmyRepairEstimatePreviewData data;

  @override
  Widget build(BuildContext context) {
    final theme = _themeFor(data.templateId);
    final biz = data.businessName.trim().isEmpty ? 'Your Business' : data.businessName.trim();
    final client = data.clientName.trim().isEmpty ? 'Customer' : data.clientName.trim();

    return Container(
      width: kNgmyRepairEstimateDesignWidth,
      decoration: BoxDecoration(
        color: theme.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: theme.accent.withValues(alpha: 0.45), width: 1.2),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4)),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(15),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              padding: const EdgeInsets.fromLTRB(14, 12, 14, 10),
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: theme.headerGradient),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 36,
                    height: 36,
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.15),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Icon(Icons.handyman_rounded, color: theme.onHeader, size: 20),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          biz,
                          style: TextStyle(color: theme.onHeader, fontWeight: FontWeight.w900, fontSize: 13),
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                        ),
                        if (data.businessPhone.trim().isNotEmpty)
                          Text(data.businessPhone.trim(), style: TextStyle(color: theme.onHeader.withValues(alpha: 0.8), fontSize: 10)),
                        if (data.businessStreet.trim().isNotEmpty)
                          Text(data.businessStreet.trim(), style: TextStyle(color: theme.onHeader.withValues(alpha: 0.72), fontSize: 9)),
                        if (data.businessCityStateZip.trim().isNotEmpty)
                          Text(data.businessCityStateZip.trim(), style: TextStyle(color: theme.onHeader.withValues(alpha: 0.72), fontSize: 9)),
                      ],
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.14),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Text('ESTIMATE', style: TextStyle(color: theme.onHeader, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 0.8)),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 10, 14, 12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: _meta('Estimate #', data.estimateNo, theme),
                      ),
                      Expanded(
                        child: _meta('Issued', data.issuedDate, theme),
                      ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Row(
                    children: [
                      Expanded(child: _meta('Client', client, theme)),
                      Expanded(child: _meta('Valid until', data.validUntil, theme)),
                    ],
                  ),
                  if (data.photoBytes != null) ...[
                    const SizedBox(height: 10),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(10),
                      child: Image.memory(data.photoBytes!, height: 72, width: double.infinity, fit: BoxFit.cover),
                    ),
                  ],
                  const SizedBox(height: 10),
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: theme.panel,
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: theme.accent.withValues(alpha: 0.2)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(data.estimate.itemName, style: TextStyle(color: theme.text, fontWeight: FontWeight.w800, fontSize: 12)),
                        const SizedBox(height: 4),
                        Text(
                          data.estimate.scopeOfWork,
                          style: TextStyle(color: theme.muted, fontSize: 10, height: 1.35),
                          maxLines: 4,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 8),
                  _line('Labor', data.estimate.laborCost, theme),
                  _line('Materials', data.estimate.materialsCost, theme),
                  const SizedBox(height: 6),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(colors: [theme.accent.withValues(alpha: 0.2), theme.accent2.withValues(alpha: 0.12)]),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Row(
                      children: [
                        Text('Total', style: TextStyle(color: theme.text, fontWeight: FontWeight.w800, fontSize: 12)),
                        const Spacer(),
                        Text(
                          '\$${data.estimate.total.toStringAsFixed(2)}',
                          style: TextStyle(color: theme.accent, fontWeight: FontWeight.w900, fontSize: 18),
                        ),
                      ],
                    ),
                  ),
                  if (data.estimate.paymentTerms.trim().isNotEmpty) ...[
                    const SizedBox(height: 8),
                    Text(data.estimate.paymentTerms.trim(), style: TextStyle(color: theme.muted, fontSize: 9, height: 1.3)),
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
        Text(label.toUpperCase(), style: TextStyle(color: theme.muted, fontSize: 8, fontWeight: FontWeight.w700, letterSpacing: 0.5)),
        Text(value, style: TextStyle(color: theme.text, fontSize: 10, fontWeight: FontWeight.w700)),
      ],
    );
  }

  Widget _line(String label, double amount, _EstimateTheme theme) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        children: [
          Text(label, style: TextStyle(color: theme.muted, fontSize: 10)),
          const Spacer(),
          Text('\$${amount.toStringAsFixed(2)}', style: TextStyle(color: theme.text, fontSize: 10, fontWeight: FontWeight.w700)),
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
