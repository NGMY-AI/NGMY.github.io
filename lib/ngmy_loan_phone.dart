import 'package:flutter/services.dart';

/// US loan phone: +1 234 567 8901
String ngmyLoanDigitsOnly(String raw) => raw.replaceAll(RegExp(r'\D'), '');

List<String> _ngmyLoanChunkDigits(String digits, List<int> groups) {
  final out = <String>[];
  var i = 0;
  for (final g in groups) {
    if (i >= digits.length) break;
    final end = (i + g).clamp(0, digits.length);
    out.add(digits.substring(i, end));
    i = end;
  }
  if (i < digits.length) out.add(digits.substring(i));
  return out;
}

String ngmyLoanFormatUsPhone(String raw) {
  var digits = ngmyLoanDigitsOnly(raw);
  if (digits.isEmpty) return '+1 ';

  if (digits.startsWith('1') && digits.length > 1) {
    digits = digits.substring(1);
  }
  digits = digits.length > 10 ? digits.substring(0, 10) : digits;

  final chunks = _ngmyLoanChunkDigits(digits, const [3, 3, 4]);
  final body = chunks.where((c) => c.isNotEmpty).join(' ');
  return body.isEmpty ? '+1 ' : '+1 $body';
}

String ngmyLoanDisplayUsPhone(String raw) {
  final formatted = ngmyLoanFormatUsPhone(raw);
  if (formatted.trim() == '+1') return '—';
  return formatted.trim();
}

class NgmyLoanUsPhoneFormatter extends TextInputFormatter {
  const NgmyLoanUsPhoneFormatter();

  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final formatted = ngmyLoanFormatUsPhone(newValue.text);
    return TextEditingValue(
      text: formatted,
      selection: TextSelection.collapsed(offset: formatted.length),
    );
  }
}

/// MM/DD/YYYY with auto slashes.
String ngmyLoanFormatDateInput(String raw) {
  final digits = ngmyLoanDigitsOnly(raw);
  if (digits.isEmpty) return '';

  final buf = StringBuffer();
  for (var i = 0; i < digits.length && i < 8; i++) {
    if (i == 2 || i == 4) buf.write('/');
    buf.write(digits[i]);
  }
  return buf.toString();
}

class NgmyLoanDateFormatter extends TextInputFormatter {
  const NgmyLoanDateFormatter();

  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final formatted = ngmyLoanFormatDateInput(newValue.text);
    return TextEditingValue(
      text: formatted,
      selection: TextSelection.collapsed(offset: formatted.length),
    );
  }
}

String ngmyLoanFormatDobDisplay(DateTime? dt) {
  if (dt == null) return 'Select date';
  final m = dt.month.toString().padLeft(2, '0');
  final d = dt.day.toString().padLeft(2, '0');
  return '$m/$d/${dt.year}';
}

bool ngmyLoanIsCompleteUsPhone(String raw) {
  final digits = ngmyLoanDigitsOnly(raw);
  if (digits.length == 10) return true;
  if (digits.length == 11 && digits.startsWith('1')) return true;
  return false;
}

bool ngmyLoanIsCompleteDate(String raw) {
  final parts = raw.split('/');
  if (parts.length != 3) return false;
  if (parts[0].length != 2 || parts[1].length != 2 || parts[2].length != 4) return false;
  final m = int.tryParse(parts[0]);
  final d = int.tryParse(parts[1]);
  final y = int.tryParse(parts[2]);
  if (m == null || d == null || y == null) return false;
  if (m < 1 || m > 12 || d < 1 || d > 31 || y < 1900) return false;
  return DateTime(y, m, d).month == m && DateTime(y, m, d).day == d;
}
