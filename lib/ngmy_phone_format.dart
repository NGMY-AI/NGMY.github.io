import 'package:flutter/services.dart';

/// Single source of truth for how NGMY shows phone numbers: 123-456-7890.
///
/// Dashes land after the 3rd and 6th digit. Anything past 10 digits (country
/// code, extension) keeps flowing after the second dash so international
/// numbers are still enterable.
String ngmyPhoneDashed(String raw) {
  var digits = raw.replaceAll(RegExp(r'\D'), '');
  if (digits.isEmpty) return '';
  if (digits.length == 11 && digits.startsWith('1')) {
    digits = digits.substring(1);
  }
  final buf = StringBuffer();
  for (var i = 0; i < digits.length; i++) {
    if (i == 3 || i == 6) buf.write('-');
    buf.write(digits[i]);
  }
  return buf.toString();
}

/// Digits only — what gets stored and compared.
String ngmyPhoneDigits(String raw) => raw.replaceAll(RegExp(r'\D'), '');

/// Types dashes in as the user enters a phone number.
class NgmyPhoneDashFormatter extends TextInputFormatter {
  const NgmyPhoneDashFormatter();

  @override
  TextEditingValue formatEditUpdate(
    TextEditingValue oldValue,
    TextEditingValue newValue,
  ) {
    final digits = ngmyPhoneDigits(newValue.text);
    if (digits.length > 15) return oldValue;
    final text = ngmyPhoneDashed(newValue.text);
    return TextEditingValue(
      text: text,
      selection: TextSelection.collapsed(offset: text.length),
    );
  }
}
