import 'package:flutter/services.dart';

/// Dial-code + grouping patterns for US senders and African receivers.
class NgmyHelpCenterPhonePattern {
  const NgmyHelpCenterPhonePattern({
    required this.dialCode,
    required this.groups,
    this.label = '',
    this.optionalLeadingPlus = false,
    this.emptyWhenBlank = false,
  });

  final String dialCode;
  final List<int> groups;
  final String label;

  /// US sender: + is optional in the field.
  final bool optionalLeadingPlus;

  /// Return empty string instead of "+" when the field is cleared.
  final bool emptyWhenBlank;

  /// US senders — country code 1, grouped 3 · 3 · 6 (optional leading +).
  static const usSender = NgmyHelpCenterPhonePattern(
    dialCode: '1',
    groups: [3, 3, 6],
    label: 'US Sender',
    optionalLeadingPlus: true,
    emptyWhenBlank: true,
  );

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
  if (sender) return NgmyHelpCenterPhonePattern.usSender;
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
  if (c.contains('united states') || c == 'usa' || c == 'us') return NgmyHelpCenterPhonePattern.usSender;
  return NgmyHelpCenterPhonePattern.generic;
}

String ngmyHelpCenterDigitsOnly(String raw) => raw.replaceAll(RegExp(r'[^\d]'), '');

List<String> _chunkDigits(String digits, List<int> groups) {
  final chunks = <String>[];
  var idx = 0;
  for (final size in groups) {
    if (idx >= digits.length) break;
    final end = (idx + size).clamp(0, digits.length);
    if (end <= idx) break;
    chunks.add(digits.substring(idx, end));
    idx += size;
  }
  if (idx < digits.length) chunks.add(digits.substring(idx));
  return chunks;
}

String ngmyHelpCenterFormatPhone(String raw, NgmyHelpCenterPhonePattern pattern) {
  if (pattern.optionalLeadingPlus) return ngmyHelpCenterFormatSenderPhone(raw);

  var digits = ngmyHelpCenterDigitsOnly(raw);
  if (digits.isEmpty) return pattern.emptyWhenBlank ? '' : '+';

  if (pattern.dialCode.isNotEmpty) {
    if (!digits.startsWith(pattern.dialCode)) {
      if (digits.startsWith('0')) digits = digits.substring(1);
      digits = pattern.dialCode + digits;
    }
    final local = digits.substring(pattern.dialCode.length);
    final chunks = _chunkDigits(local, pattern.groups);
    return '+${pattern.dialCode}${chunks.isEmpty ? '' : ' ${chunks.join(' ')}'}'.trim();
  }

  final chunks = _chunkDigits(digits, pattern.groups);
  return '+${chunks.join(' ')}';
}

/// US sender — 3 · 3 · 6 grouping; leading +1 is optional.
String ngmyHelpCenterFormatSenderPhone(String raw) {
  var digits = ngmyHelpCenterDigitsOnly(raw);
  if (digits.isEmpty) return '';

  final usePlus = raw.trim().startsWith('+');
  var national = digits;
  if (digits.startsWith('1') && digits.length > 1) {
    national = digits.substring(1);
  }

  final chunks = _chunkDigits(national, NgmyHelpCenterPhonePattern.usSender.groups);
  final spaced = chunks.where((c) => c.isNotEmpty).join(' ');
  if (spaced.isEmpty) return usePlus ? '+' : '';

  if (usePlus) return '+1 $spaced'.trim();
  return spaced;
}

/// Formats phone numbers with spaced groups.
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
  if (pattern.optionalLeadingPlus) return '234 567 890123 or +1 234 567 890123';
  if (pattern.dialCode == '255') return '+255 712 345 678';
  if (pattern.dialCode == '254') return '+254 712 345 678';
  if (pattern.dialCode.isNotEmpty) return '+${pattern.dialCode} XXX XXX XXX';
  return '+ country code, then number';
}

String ngmyHelpCenterDisplayPhone(String raw, {String country = '', bool sender = false}) {
  if (raw.trim().isEmpty) return '—';
  if (sender) return ngmyHelpCenterFormatSenderPhone(raw);
  final pattern = ngmyHelpCenterPhonePatternForCountry(country);
  final formatted = ngmyHelpCenterFormatPhone(raw, pattern);
  if (formatted.isEmpty || formatted == '+') return raw.trim();
  return formatted;
}
