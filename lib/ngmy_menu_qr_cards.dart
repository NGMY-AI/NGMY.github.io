import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_menu_models.dart';
import 'ngmy_menu_qr.dart';

/// Restaurant info shown on optional QR card templates.
class NgmyMenuQrCardInfo {
  const NgmyMenuQrCardInfo({
    required this.restaurantName,
    required this.tagline,
    required this.style,
  });

  final String restaurantName;
  final String tagline;
  final NgmyMenuQrStyle style;

  String get phone => style.cardPhone;
  String get address => style.cardAddress;
  String get hours => style.cardHours;
  String get website => style.cardWebsite;
  String get logoBase64 => style.logoBase64;
  bool get showLogo => style.showCardLogo && logoBase64.trim().isNotEmpty;
}

class NgmyMenuQrCardWidget extends StatelessWidget {
  const NgmyMenuQrCardWidget({
    super.key,
    required this.data,
    required this.info,
    required this.qrStyle,
    this.large = false,
  });

  final String data;
  final NgmyMenuQrCardInfo info;
  final NgmyMenuQrStyle qrStyle;
  final bool large;

  @override
  Widget build(BuildContext context) {
    final tpl = ngmyMenuQrCardTemplateById(qrStyle.cardTemplate);
    final w = large ? 340.0 : 300.0;
    final accent = tpl.accentColor;
    final name = info.restaurantName.trim().isEmpty ? 'Your Restaurant' : info.restaurantName.trim();

    return SizedBox(
      width: w,
      child: _shell(tpl, accent, Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          _header(tpl, accent, name),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 14, 18, 20),
            child: Column(
              children: [
                if (info.showLogo) _logoCircle(accent, tpl.bodyColor),
                if (info.tagline.trim().isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: Text(info.tagline, textAlign: TextAlign.center, style: TextStyle(color: _subColor(tpl), fontSize: 12, fontStyle: FontStyle.italic, height: 1.35)),
                  ),
                ..._infoRows(tpl, accent),
                const SizedBox(height: 12),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.qr_code_scanner_rounded, color: accent, size: 18),
                    const SizedBox(width: 8),
                    Text('Scan for menu', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: _titleColor(tpl))),
                  ],
                ),
                const SizedBox(height: 12),
                Center(child: NgmyMenuQrWidget(data: data, style: qrStyle, large: false)),
              ],
            ),
          ),
        ],
      )),
    );
  }

  Widget _shell(NgmyMenuQrCardTemplateOption tpl, Color accent, Widget child) {
    BoxDecoration deco;
    switch (tpl.id) {
      case 'modern_gradient':
        deco = BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          gradient: LinearGradient(colors: [tpl.headerColor, tpl.headerColor.withValues(alpha: 0.7)]),
          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 10))],
        );
      case 'classic_border':
        deco = BoxDecoration(
          color: tpl.bodyColor,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: accent, width: 2.5),
        );
      case 'minimal_clean':
        deco = BoxDecoration(
          color: tpl.bodyColor,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: const Color(0xFFE4E4E7)),
        );
      case 'neon_night':
        deco = BoxDecoration(
          gradient: LinearGradient(colors: [tpl.headerColor, tpl.bodyColor]),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: accent.withValues(alpha: 0.6), width: 1.5),
          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.25), blurRadius: 20)],
        );
      case 'art_deco':
        deco = BoxDecoration(
          color: tpl.bodyColor,
          borderRadius: BorderRadius.circular(18),
          border: Border(top: BorderSide(color: accent, width: 3), bottom: BorderSide(color: accent, width: 3)),
        );
      default:
        deco = BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [tpl.headerColor, tpl.bodyColor]),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: accent.withValues(alpha: 0.5), width: 1.5),
          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.22), blurRadius: 28, offset: const Offset(0, 12))],
        );
    }
    return DecoratedBox(decoration: deco, child: ClipRRect(borderRadius: BorderRadius.circular(20), child: child));
  }

  Widget _header(NgmyMenuQrCardTemplateOption tpl, Color accent, String name) {
    final isLightHeader = tpl.id == 'minimal_clean' || tpl.id == 'classic_border' || tpl.id == 'marble_cream';
    final titleColor = isLightHeader ? const Color(0xFF18181B) : accent;
    final bg = tpl.id == 'modern_gradient' ? Colors.transparent : tpl.headerColor.withValues(alpha: tpl.id == 'modern_gradient' ? 1 : 0.95);

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(18, 18, 18, 10),
      decoration: BoxDecoration(
        color: bg,
        border: tpl.id == 'classic_border' ? Border(bottom: BorderSide(color: accent.withValues(alpha: 0.3))) : null,
      ),
      child: Column(
        children: [
          if (tpl.id == 'luxury_gold' || tpl.id == 'champagne') Icon(tpl.icon, color: accent, size: 20),
          if (tpl.id == 'luxury_gold' || tpl.id == 'champagne') const SizedBox(height: 6),
          Text(
            name,
            textAlign: TextAlign.center,
            style: TextStyle(color: titleColor, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: tpl.id == 'minimal_clean' ? 2 : 0.8),
          ),
          if (tpl.id == 'modern_gradient')
            Padding(
              padding: const EdgeInsets.only(top: 4),
              child: Text('VIEW MENU', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w700, fontSize: 11, letterSpacing: 2)),
            ),
        ],
      ),
    );
  }

  Widget _logoCircle(Color accent, Color bg) {
    Uint8List? bytes;
    try {
      bytes = base64Decode(info.logoBase64);
    } catch (_) {}
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Center(
        child: Container(
          width: large ? 72 : 64,
          height: large ? 72 : 64,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: bg,
            border: Border.all(color: accent, width: 2.5),
            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.25), blurRadius: 12)],
          ),
          clipBehavior: Clip.antiAlias,
          child: bytes != null
              ? Image.memory(bytes, fit: BoxFit.cover)
              : Icon(Icons.restaurant_rounded, color: accent, size: 32),
        ),
      ),
    );
  }

  List<Widget> _infoRows(NgmyMenuQrCardTemplateOption tpl, Color accent) {
    final rows = <Widget>[];
    void addRow(IconData icon, String text) {
      if (text.trim().isEmpty) return;
      rows.add(Padding(
        padding: const EdgeInsets.only(bottom: 6),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Icon(icon, size: 14, color: accent),
            const SizedBox(width: 8),
            Expanded(child: Text(text, style: TextStyle(color: _subColor(tpl), fontSize: 11, height: 1.35))),
          ],
        ),
      ));
    }

    addRow(Icons.phone_rounded, info.phone);
    addRow(Icons.location_on_outlined, info.address);
    addRow(Icons.schedule_rounded, info.hours);
    addRow(Icons.language_rounded, info.website);
    return rows;
  }

  Color _subColor(NgmyMenuQrCardTemplateOption tpl) {
    final light = tpl.id == 'minimal_clean' || tpl.id == 'classic_border' || tpl.id == 'bistro_warm' || tpl.id == 'marble_cream';
    return light ? const Color(0xFF64748B) : const Color(0xFFC9B896);
  }

  Color _titleColor(NgmyMenuQrCardTemplateOption tpl) {
    final light = tpl.id == 'minimal_clean' || tpl.id == 'classic_border';
    return light ? const Color(0xFF0F172A) : tpl.accentColor;
  }
}
