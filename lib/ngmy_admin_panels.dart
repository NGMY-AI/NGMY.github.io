part of 'main.dart';

InputDecoration ngmyAdminInputDecoration({
  required String label,
  required bool isDark,
  String? hint,
}) {
  final borderColor = isDark ? Colors.white24 : const Color(0xFFD1D5DB);
  return InputDecoration(
    labelText: label,
    hintText: hint,
    isDense: true,
    filled: true,
    fillColor: isDark ? const Color(0xFF121726) : const Color(0xFFF8FAFC),
    contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: BorderSide(color: borderColor),
    ),
    focusedBorder: const OutlineInputBorder(
      borderRadius: BorderRadius.all(Radius.circular(14)),
      borderSide: BorderSide(color: Color(0xFF3B82F6), width: 1.4),
    ),
  );
}
