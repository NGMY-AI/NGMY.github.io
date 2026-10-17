import 'package:flutter/material.dart';

/// Icons you can put in a slide's text: a long, fixed list in groups, plus any symbol you type.
const List<(String, List<String>)> kNgmySlideIconGroups = [
  ('Faces & people', ['😀', '😃', '😄', '😁', '😊', '😎', '🤩', '🥳', '😇', '🤗', '🙌', '👏', '🤝', '👍', '👋', '💪', '🙏', '✨']),
  ('Ideas & work', ['💡', '🎯', '🚀', '📈', '📊', '📌', '📍', '📣', '🔔', '🧭', '🛠️', '🔧', '⚙️', '🧠', '📚', '📝', '✏️', '📖', '🗂️', '📅', '⏰', '✅', '❌', '⚠️', '❓', '❗']),
  ('Nature', ['🌿', '🌱', '🌳', '🌸', '🌼', '🌻', '🌞', '🌈', '🌊', '🔥', '💧', '❄️', '🌙', '⭐', '🌟', '☀️', '🍀']),
  ('Places & things', ['🏠', '🏫', '🏥', '🏦', '🏪', '🚗', '🚌', '✈️', '🎁', '💰', '💵', '💳', '🛒', '🏆', '🥇', '🎉', '🎈', '🎶', '🎵', '🎤', '📷', '🎬', '🖼️', '💻', '📱']),
  ('Symbols', ['❤️', '💚', '💙', '💜', '🧡', '💛', '🖤', '🤍', '⬆️', '➡️', '🔶', '🔷', '🔴', '🟢', '🔵', '🟡']),
];

/// Opens the icon picker. Returns the icon the user chose (or typed), or null.
Future<String?> showNgmySlideIconPicker(BuildContext context) {
  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => const _IconPickerSheet(),
  );
}

class _IconPickerSheet extends StatefulWidget {
  const _IconPickerSheet();
  @override
  State<_IconPickerSheet> createState() => _IconPickerSheetState();
}

class _IconPickerSheetState extends State<_IconPickerSheet> {
  final _own = TextEditingController();

  @override
  void dispose() {
    _own.dispose();
    super.dispose();
  }

  void _pick(String icon) => Navigator.pop(context, icon);

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    return SafeArea(
      child: Container(
        margin: const EdgeInsets.fromLTRB(10, 10, 10, 12),
        padding: const EdgeInsets.fromLTRB(18, 16, 12, 16),
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.8),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF0F172A) : Colors.white,
          borderRadius: BorderRadius.circular(28),
          border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(children: [
              Expanded(child: Text('Choose an icon', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 19))),
              IconButton(onPressed: () => Navigator.pop(context), icon: Icon(Icons.close_rounded, color: muted)),
            ]),
            Flexible(
              child: ListView(
                shrinkWrap: true,
                children: [
                  for (final (name, icons) in kNgmySlideIconGroups) ...[
                    Padding(
                      padding: const EdgeInsets.only(top: 8, bottom: 8),
                      child: Text(name.toUpperCase(),
                          style: TextStyle(color: muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
                    ),
                    Wrap(
                      spacing: 6,
                      runSpacing: 6,
                      children: [
                        for (final icon in icons)
                          InkWell(
                            borderRadius: BorderRadius.circular(12),
                            onTap: () => _pick(icon),
                            child: Container(
                              width: 44,
                              height: 44,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12),
                                color: isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF1F5F9),
                              ),
                              child: Text(icon, style: const TextStyle(fontSize: 22)),
                            ),
                          ),
                      ],
                    ),
                  ],
                  const SizedBox(height: 14),
                  Text('YOUR OWN', style: TextStyle(color: muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
                  const SizedBox(height: 8),
                  Row(children: [
                    Expanded(
                      child: TextField(
                        controller: _own,
                        style: TextStyle(color: ink),
                        decoration: InputDecoration(
                          hintText: 'Type or paste any icon',
                          filled: true,
                          fillColor: isDark ? const Color(0xFF1E293B) : const Color(0xFFF8FAFC),
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                          isDense: true,
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    FilledButton(
                      onPressed: () {
                        final v = _own.text.trim();
                        if (v.isNotEmpty) _pick(v);
                      },
                      child: const Text('Use'),
                    ),
                  ]),
                  const SizedBox(height: 8),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
