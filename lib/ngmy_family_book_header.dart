import 'package:flutter/material.dart';

import 'ngmy_family_book_storage.dart';

/// One look for the top of a family book: colours, lettering, ornament and where the title sits.
class FamilyBookHeaderStyle {
  const FamilyBookHeaderStyle({
    required this.id,
    required this.name,
    required this.note,
    required this.colors,
    required this.accent,
    required this.text,
    this.ornament = '',
    this.align = TextAlign.center,
    this.serif = true,
    this.caps = false,
    this.doubleBorder = false,
    this.kicker = true,
    this.paper = false,
  });

  final String id;
  final String name;
  final String note;
  final List<Color> colors;
  final Color accent;
  final Color text;
  final String ornament;
  final TextAlign align;
  final bool serif;
  final bool caps;
  final bool doubleBorder;
  final bool kicker;

  /// A light, printed-page header (dark lettering) instead of a dark leather one.
  final bool paper;

  String? get fontFamily => serif ? 'Georgia' : null;
}

const List<FamilyBookHeaderStyle> kFamilyBookHeaderStyles = [
  FamilyBookHeaderStyle(id: 'classic', name: 'Classic leather', note: 'Gold-edged brown leather', colors: [Color(0xFF4A2A15), Color(0xFF2A170C)], accent: Color(0xFFE8C46A), text: Color(0xFFE8C46A), ornament: '❦'),
  FamilyBookHeaderStyle(id: 'ornate', name: 'Ornate gold', note: 'Double gold border and flourishes', colors: [Color(0xFF3B1F0E), Color(0xFF1C0F07)], accent: Color(0xFFF2D27A), text: Color(0xFFF2D27A), ornament: '✦', doubleBorder: true, caps: true),
  FamilyBookHeaderStyle(id: 'parchment', name: 'Parchment', note: 'Old paper with dark ink', colors: [Color(0xFFF6E9C8), Color(0xFFE6D3A3)], accent: Color(0xFF7A3E1D), text: Color(0xFF3D2E1F), ornament: '❧', paper: true),
  FamilyBookHeaderStyle(id: 'minimal', name: 'Clean paper', note: 'Plain and elegant, like a printed book', colors: [Color(0xFFFBF7EE), Color(0xFFF1EADB)], accent: Color(0xFF9A8F78), text: Color(0xFF2B2B2B), caps: true, kicker: true, paper: true),
  FamilyBookHeaderStyle(id: 'midnight', name: 'Midnight', note: 'Deep blue with silver stars', colors: [Color(0xFF1E3A8A), Color(0xFF0B1230)], accent: Color(0xFFCBD5E1), text: Color(0xFFF1F5F9), ornament: '✧', caps: true),
  FamilyBookHeaderStyle(id: 'emerald', name: 'Emerald library', note: 'Green cloth, title on the left', colors: [Color(0xFF166534), Color(0xFF052E16)], accent: Color(0xFFE8C46A), text: Color(0xFFFEF3C7), align: TextAlign.left, ornament: '◆'),
  FamilyBookHeaderStyle(id: 'rose', name: 'Rose vintage', note: 'Burgundy with rose-gold lettering', colors: [Color(0xFF7F1D1D), Color(0xFF3F0A0A)], accent: Color(0xFFF0A8B8), text: Color(0xFFFCE7EC), ornament: '❀', doubleBorder: true),
  FamilyBookHeaderStyle(id: 'modern', name: 'Modern', note: 'Dark, bold, left-aligned', colors: [Color(0xFF1F2937), Color(0xFF0B0F17)], accent: Color(0xFF38BDF8), text: Colors.white, align: TextAlign.left, serif: false, caps: true),
];

FamilyBookHeaderStyle familyBookHeaderStyleOf(String id) =>
    kFamilyBookHeaderStyles.firstWhere((s) => s.id == id, orElse: () => kFamilyBookHeaderStyles.first);

/// The header of an open book: the title (one line, shrinks if long), a small line under it, and the tools row.
class FamilyBookHeaderBar extends StatelessWidget {
  const FamilyBookHeaderBar({
    super.key,
    required this.style,
    required this.title,
    required this.kicker,
    required this.onClose,
    this.tools,
  });

  final FamilyBookHeaderStyle style;
  final String title;

  /// The small line, for example "Family Book · 12 pages".
  final String kicker;
  final VoidCallback? onClose;
  final Widget? tools;

  @override
  Widget build(BuildContext context) {
    final s = style;
    final shown = s.caps ? title.toUpperCase() : title;
    final cross = s.align == TextAlign.left ? CrossAxisAlignment.start : CrossAxisAlignment.center;
    final box = BoxDecoration(
      borderRadius: BorderRadius.circular(s.paper ? 12 : 22),
      gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: s.colors),
      border: Border.all(color: s.accent.withValues(alpha: s.paper ? 0.6 : 0.85), width: s.paper ? 1.2 : 1.6),
      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 16, offset: const Offset(0, 6))],
    );
    Widget inner = Padding(
      padding: const EdgeInsets.fromLTRB(8, 6, 8, 6),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Row(children: [
          if (onClose != null)
            GestureDetector(
              onTap: onClose,
              child: Container(
                width: 30,
                height: 30,
                decoration: BoxDecoration(shape: BoxShape.circle, color: (s.paper ? Colors.black : Colors.black).withValues(alpha: s.paper ? 0.07 : 0.3), border: Border.all(color: s.accent.withValues(alpha: 0.6))),
                child: Icon(Icons.close_rounded, color: s.paper ? s.text : Colors.white, size: 17),
              ),
            ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: Column(crossAxisAlignment: cross, mainAxisSize: MainAxisSize.min, children: [
                FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: s.align == TextAlign.left ? Alignment.centerLeft : Alignment.center,
                  child: Row(mainAxisSize: MainAxisSize.min, children: [
                    if (s.ornament.isNotEmpty && s.align != TextAlign.left) Padding(padding: const EdgeInsets.only(right: 8), child: Text(s.ornament, style: TextStyle(color: s.accent, fontSize: 15))),
                    Text(
                      shown,
                      maxLines: 1,
                      softWrap: false,
                      style: TextStyle(
                        color: s.text,
                        fontFamily: s.fontFamily,
                        fontWeight: FontWeight.w900,
                        fontSize: s.caps ? 16 : 19,
                        letterSpacing: s.caps ? 2.2 : 0.5,
                        shadows: s.paper ? null : const [Shadow(color: Colors.black54, blurRadius: 3, offset: Offset(1, 2))],
                      ),
                    ),
                    if (s.ornament.isNotEmpty && s.align != TextAlign.left) Padding(padding: const EdgeInsets.only(left: 8), child: Text(s.ornament, style: TextStyle(color: s.accent, fontSize: 15))),
                  ]),
                ),
                if (s.kicker && kicker.trim().isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.only(top: 1),
                    child: Text(kicker, maxLines: 1, overflow: TextOverflow.ellipsis, textAlign: s.align, style: TextStyle(color: s.text.withValues(alpha: 0.65), fontSize: 10, fontStyle: s.serif ? FontStyle.italic : FontStyle.normal, letterSpacing: 0.8)),
                  ),
              ]),
            ),
          ),
          if (onClose != null) const SizedBox(width: 30),
        ]),
        if (tools != null) ...[
          Padding(padding: const EdgeInsets.symmetric(vertical: 5), child: Container(height: 1, decoration: BoxDecoration(gradient: LinearGradient(colors: [Colors.transparent, s.accent.withValues(alpha: 0.75), Colors.transparent])))),
          tools!,
        ],
      ]),
    );
    if (s.doubleBorder) {
      inner = Container(
        margin: const EdgeInsets.all(3),
        decoration: BoxDecoration(borderRadius: BorderRadius.circular(s.paper ? 9 : 19), border: Border.all(color: s.accent.withValues(alpha: 0.45))),
        child: inner,
      );
    }
    return Container(margin: const EdgeInsets.fromLTRB(12, 6, 12, 2), decoration: box, child: inner);
  }
}

/// The small running title printed at the top of each page, in the chosen header's lettering.
class FamilyBookRunningHead extends StatelessWidget {
  const FamilyBookRunningHead({super.key, required this.style, required this.title, required this.ink});
  final FamilyBookHeaderStyle style;
  final String title;
  final Color ink;

  @override
  Widget build(BuildContext context) {
    final s = style;
    final line = Container(height: 1, color: ink.withValues(alpha: 0.28));
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Row(children: [
          if (s.ornament.isNotEmpty) Text(s.ornament, style: TextStyle(color: ink.withValues(alpha: 0.55), fontSize: 11)),
          Expanded(
            child: Text(
              s.caps ? title.toUpperCase() : title,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              textAlign: s.align == TextAlign.left ? TextAlign.left : TextAlign.center,
              style: TextStyle(color: ink.withValues(alpha: 0.6), fontFamily: s.fontFamily, fontSize: 10.5, letterSpacing: s.caps ? 1.6 : 0.6, fontStyle: s.caps ? FontStyle.normal : FontStyle.italic, fontWeight: FontWeight.w700),
            ),
          ),
          if (s.ornament.isNotEmpty) Text(s.ornament, style: TextStyle(color: ink.withValues(alpha: 0.55), fontSize: 11)),
        ]),
        const SizedBox(height: 3),
        line,
        if (s.doubleBorder) Padding(padding: const EdgeInsets.only(top: 2), child: line),
      ]),
    );
  }
}

/// Bottom sheet with a live preview and the templates to choose from.
class FamilyBookHeaderPicker extends StatefulWidget {
  const FamilyBookHeaderPicker({super.key, required this.start, required this.title, required this.kicker});
  final String start;
  final String title;
  final String kicker;

  @override
  State<FamilyBookHeaderPicker> createState() => _FamilyBookHeaderPickerState();
}

class _FamilyBookHeaderPickerState extends State<FamilyBookHeaderPicker> {
  late String _id = widget.start;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.9),
        child: ListView(padding: const EdgeInsets.fromLTRB(6, 14, 6, 16), shrinkWrap: true, children: [
          const Padding(padding: EdgeInsets.symmetric(horizontal: 14), child: Text('Choose your header', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19))),
          const Padding(padding: EdgeInsets.fromLTRB(14, 2, 14, 6), child: Text('The top of your book. Tap a design to see it.', style: TextStyle(color: Colors.white60, fontSize: 12.5))),
          for (final s in kFamilyBookHeaderStyles)
            GestureDetector(
              onTap: () => setState(() => _id = s.id),
              child: Padding(
                padding: const EdgeInsets.fromLTRB(8, 4, 8, 4),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(6, 0, 6, 0),
                    child: Row(children: [
                      Icon(_id == s.id ? Icons.radio_button_checked_rounded : Icons.radio_button_off_rounded, size: 17, color: _id == s.id ? const Color(0xFFC4B5FD) : Colors.white38),
                      const SizedBox(width: 6),
                      Text(s.name, style: TextStyle(color: _id == s.id ? Colors.white : Colors.white70, fontWeight: FontWeight.w900, fontSize: 13.5)),
                      const SizedBox(width: 8),
                      Expanded(child: Text(s.note, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white38, fontSize: 11))),
                    ]),
                  ),
                  Container(
                    decoration: _id == s.id ? BoxDecoration(borderRadius: BorderRadius.circular(24), border: Border.all(color: const Color(0xFFC4B5FD), width: 2)) : null,
                    child: IgnorePointer(child: FamilyBookHeaderBar(style: s, title: widget.title, kicker: widget.kicker, onClose: () {})),
                  ),
                ]),
              ),
            ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 14, 0),
            child: FilledButton(
              onPressed: () => Navigator.pop(context, _id),
              style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(50), backgroundColor: const Color(0xFF8B5CF6), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
              child: const Text('Use this header', style: TextStyle(fontWeight: FontWeight.w900)),
            ),
          ),
        ]),
      ),
    );
  }
}

bool isFamilyBookHeaderId(Object? v) => v is String && kFamilyBookHeaderIds.contains(v);
