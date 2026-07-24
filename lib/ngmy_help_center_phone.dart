import 'package:flutter/services.dart';

/// Dial-code + grouping patterns for African destinations (and US senders).
class NgmyHelpCenterPhonePattern {
  const NgmyHelpCenterPhonePattern({
    required this.dialCode,
    required this.groups,
    this.label = '',
  });

  final String dialCode;
  final List<int> groups;
  final String label;

  static const us = NgmyHelpCenterPhonePattern(dialCode: '1', groups: [3, 3, 4], label: 'US');
  static const tanzania = NgmyHelpCenterPhonePattern(dialCode: '255', groups: [3, 3, 3], label: 'Tanzania');
  static const kenya = NgmyHelpCenterPhonePattern(dialCode: '254', groups: [3, 3, 3], label: 'Kenya');
  static const uganda = NgmyHelpCenterPhonePattern(dialCode: '256', groups: [3, 3, 3], label: 'Uganda');
  static const rwanda = NgmyHelpCenterPhonePattern(dialCode: '250', groups: [3, 3, 3], label: 'Rwanda');
  static const drc = NgmyHelpCenterPhonePattern(dialCode: '243', groups: [3, 3, 3], label: 'DRC');
  static const ghana = NgmyHelpCenterPhonePattern(dialCode: '233', groups: [3, 3, 3], label: 'Ghana');
  static const nigeria = NgmyHelpCenterPhonePattern(dialCode: '234', groups: [3, 3, 3], label: 'Nigeria');
  static const southAfrica = NgmyHelpCenterPhonePattern(dialCode: '27', groups: [2, 3, 4], label: 'South Africa');
  static const zambia = NgmyHelpCenterPhonePattern(dialCode: '260', groups: [3, 3, 3], label: 'Zambia');
  static const zimbabwe = NgmyHelpCenterPhonePattern(dialCode: '263', groups: [3, 3, 3], label: 'Zimbabwe');
  static const malawi = NgmyHelpCenterPhonePattern(dialCode: '265', groups: [3, 3, 3], label: 'Malawi');
  static const mozambique = NgmyHelpCenterPhonePattern(dialCode: '258', groups: [3, 3, 3], label: 'Mozambique');
  static const ethiopia = NgmyHelpCenterPhonePattern(dialCode: '251', groups: [3, 3, 3], label: 'Ethiopia');
  static const cameroon = NgmyHelpCenterPhonePattern(dialCode: '237', groups: [3, 3, 3], label: 'Cameroon');
  static const burundi = NgmyHelpCenterPhonePattern(dialCode: '257', groups: [3, 3, 3], label: 'Burundi');
  static const generic = NgmyHelpCenterPhonePattern(dialCode: '', groups: [3, 3, 3, 3], label: 'International');
}

NgmyHelpCenterPhonePattern ngmyHelpCenterPhonePatternForCountry(String country, {bool sender = false}) {
  if (sender && country.trim().isEmpty) return NgmyHelpCenterPhonePattern.us;
  final c = country.trim().toLowerCase();
  if (c.isEmpty) return NgmyHelpCenterPhonePattern.generic;
  if (c.contains('tanzania') || c.contains('tanz')) return NgmyHelpCenterPhonePattern.tanzania;
  if (c.contains('kenya')) return NgmyHelpCenterPhonePattern.kenya;
  if (c.contains('uganda')) return NgmyHelpCenterPhonePattern.uganda;
  if (c.contains('rwanda')) return NgmyHelpCenterPhonePattern.rwanda;
  if (c.contains('drc') || c.contains('congo') || c.contains('kinshasa')) return NgmyHelpCenterPhonePattern.drc;
  if (c.contains('ghana')) return NgmyHelpCenterPhonePattern.ghana;
  if (c.contains('nigeria')) return NgmyHelpCenterPhonePattern.nigeria;
  if (c.contains('south africa')) return NgmyHelpCenterPhonePattern.southAfrica;
  if (c.contains('zambia')) return NgmyHelpCenterPhonePattern.zambia;
  if (c.contains('zimbabwe')) return NgmyHelpCenterPhonePattern.zimbabwe;
  if (c.contains('malawi')) return NgmyHelpCenterPhonePattern.malawi;
  if (c.contains('mozambique')) return NgmyHelpCenterPhonePattern.mozambique;
  if (c.contains('ethiopia')) return NgmyHelpCenterPhonePattern.ethiopia;
  if (c.contains('cameroon')) return NgmyHelpCenterPhonePattern.cameroon;
  if (c.contains('burundi')) return NgmyHelpCenterPhonePattern.burundi;
  if (c.contains('united states') || c == 'usa' || c == 'us') return NgmyHelpCenterPhonePattern.us;
  return NgmyHelpCenterPhonePattern.generic;
}

String ngmyHelpCenterDigitsOnly(String raw) => raw.replaceAll(RegExp(r'\D'), '');

String ngmyHelpCenterFormatPhone(String raw, NgmyHelpCenterPhonePattern pattern) {
  var digits = ngmyHelpCenterDigitsOnly(raw);
  if (digits.isEmpty) return '+';

  if (pattern.dialCode.isNotEmpty) {
    if (!digits.startsWith(pattern.dialCode)) {
      if (digits.startsWith('0')) digits = digits.substring(1);
      digits = pattern.dialCode + digits;
    }
    final local = digits.substring(pattern.dialCode.length);
    final chunks = <String>[];
    var idx = 0;
    for (final size in pattern.groups) {
      if (idx >= local.length) break;
      final end = (idx + size).clamp(0, local.length);
      if (end <= idx) break;
      chunks.add(local.substring(idx, end));
      idx += size;
    }
    if (idx < local.length) chunks.add(local.substring(idx));
    return '+${pattern.dialCode}${chunks.isEmpty ? '' : ' ${chunks.join(' ')}'}'.trim();
  }

  final chunks = <String>[];
  var idx = 0;
  while (idx < digits.length) {
    final end = (idx + 3).clamp(0, digits.length);
    chunks.add(digits.substring(idx, end));
    idx += 3;
  }
  return '+${chunks.join(' ')}';
}

/// Formats international phone numbers with leading + and spaced groups.
class NgmyHelpCenterPhoneFormatter extends TextInputFormatter {
  NgmyHelpCenterPhoneFormatter({required this.pattern});

  final NgmyHelpCenterPhonePattern pattern;

  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final formatted = ngmyHelpCenterFormatPhone(newValue.text, pattern);
    return TextEditingValue(
      text: formatted,
      selection: TextSelection.collapsed(offset: formatted.length),
    );
  }
}

String ngmyHelpCenterPhoneHint(NgmyHelpCenterPhonePattern pattern) {
  if (pattern.dialCode == '255') return '+255 712 345 678';
  if (pattern.dialCode == '254') return '+254 712 345 678';
  if (pattern.dialCode == '1') return '+1 234 567 8901';
  if (pattern.dialCode.isNotEmpty) return '+${pattern.dialCode} XXX XXX XXX';
  return '+ country code, then number';
}
