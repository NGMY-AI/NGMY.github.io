import 'package:flutter/material.dart';

const List<String> kNgmyUsStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

/// Modern searchable state picker — glass sheet, no stock dropdown.
Future<String?> showNgmyStatePickerSheet(
  BuildContext context, {
  required List<String> states,
  required String selected,
  String title = 'Choose state',
  String searchHint = 'Search states…',
  String emptyLabel = 'No matches',
}) async {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  final q = TextEditingController();
  final filtered = ValueNotifier<List<String>>(List<String>.from(states));

  void applyFilter() {
    final s = q.text.trim().toLowerCase();
    if (s.isEmpty) {
      filtered.value = List<String>.from(states);
      return;
    }
    filtered.value = states.where((st) => st.toLowerCase().contains(s)).toList(growable: false);
  }

  q.addListener(applyFilter);

  final result = await showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (sheetCtx) {
      final bg = isDark ? const Color(0xFF121212) : Colors.white;
      final panel = isDark ? const Color(0xFF1A1A1A) : const Color(0xFFF8FAFC);
      final border = isDark ? Colors.white12 : const Color(0xFFE2E8F0);
      final text = isDark ? Colors.white : const Color(0xFF0F172A);
      final muted = isDark ? const Color(0xFF94A3B8) : Colors.black54;

      return SafeArea(
        child: Align(
          alignment: Alignment.bottomCenter,
          child: Container(
            constraints: BoxConstraints(
              maxWidth: 520,
              maxHeight: MediaQuery.sizeOf(sheetCtx).height * 0.82,
            ),
            margin: const EdgeInsets.fromLTRB(14, 14, 14, 14),
            decoration: BoxDecoration(
              color: bg,
              borderRadius: BorderRadius.circular(28),
              border: Border.all(color: border, width: 1.2),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF22D3EE).withValues(alpha: isDark ? 0.18 : 0.10),
                  blurRadius: 28,
                  offset: const Offset(0, 12),
                ),
                BoxShadow(
                  color: Colors.black.withValues(alpha: isDark ? 0.55 : 0.10),
                  blurRadius: 24,
                  offset: const Offset(0, 16),
                ),
              ],
            ),
            child: Column(
              children: [
                const SizedBox(height: 12),
                Container(
                  width: 42,
                  height: 5,
                  decoration: BoxDecoration(
                    color: isDark ? Colors.white24 : Colors.black12,
                    borderRadius: BorderRadius.circular(99),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 14, 10, 8),
                  child: Row(
                    children: [
                      Container(
                        width: 38,
                        height: 38,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          gradient: LinearGradient(
                            colors: [
                              const Color(0xFF22D3EE).withValues(alpha: 0.35),
                              const Color(0xFFA78BFA).withValues(alpha: 0.28),
                            ],
                          ),
                          border: Border.all(color: Colors.white24),
                        ),
                        child: const Icon(Icons.map_rounded, color: Colors.white, size: 18),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Text(
                          title,
                          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: text),
                        ),
                      ),
                      IconButton(
                        onPressed: () => Navigator.pop(sheetCtx),
                        icon: Icon(Icons.close_rounded, color: muted),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 18),
                  child: Container(
                    decoration: BoxDecoration(
                      color: panel,
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: border),
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    child: Row(
                      children: [
                        Icon(Icons.search_rounded, color: muted),
                        const SizedBox(width: 8),
                        Expanded(
                          child: TextField(
                            controller: q,
                            autofocus: true,
                            style: TextStyle(color: text, fontWeight: FontWeight.w600),
                            decoration: InputDecoration(
                              hintText: searchHint,
                              hintStyle: TextStyle(color: muted),
                              border: InputBorder.none,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 10),
                Expanded(
                  child: ValueListenableBuilder<List<String>>(
                    valueListenable: filtered,
                    builder: (_, list, _) {
                      if (list.isEmpty) {
                        return Center(child: Text(emptyLabel, style: TextStyle(color: muted, fontWeight: FontWeight.w700)));
                      }
                      return ListView.builder(
                        padding: const EdgeInsets.fromLTRB(14, 0, 14, 18),
                        itemCount: list.length,
                        itemBuilder: (_, i) {
                          final state = list[i];
                          final isSelected = state == selected;
                          return Padding(
                            padding: const EdgeInsets.only(bottom: 8),
                            child: Material(
                              color: Colors.transparent,
                              child: InkWell(
                                borderRadius: BorderRadius.circular(16),
                                onTap: () => Navigator.pop(sheetCtx, state),
                                child: Ink(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(16),
                                    gradient: isSelected
                                        ? LinearGradient(
                                            colors: [
                                              const Color(0xFF22D3EE).withValues(alpha: 0.22),
                                              const Color(0xFFA78BFA).withValues(alpha: 0.16),
                                            ],
                                          )
                                        : null,
                                    color: isSelected ? null : panel,
                                    border: Border.all(
                                      color: isSelected
                                          ? const Color(0xFF22D3EE).withValues(alpha: 0.55)
                                          : border,
                                      width: isSelected ? 1.4 : 1,
                                    ),
                                  ),
                                  child: Padding(
                                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                                    child: Row(
                                      children: [
                                        Expanded(
                                          child: Text(
                                            state,
                                            style: TextStyle(
                                              fontWeight: FontWeight.w800,
                                              fontSize: 15,
                                              color: text,
                                            ),
                                          ),
                                        ),
                                        if (isSelected)
                                          const Icon(Icons.check_circle_rounded, color: Color(0xFF22D3EE), size: 22),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          );
                        },
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      );
    },
  );

  q.dispose();
  filtered.dispose();
  return result;
}
