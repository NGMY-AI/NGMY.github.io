import 'package:flutter/services.dart';

/// Dial-code + grouping for US senders and African receivers.
class NgmyHelpCenterPhonePattern {
  const NgmyHelpCenterPhonePattern({
    required this.dialCode,
    required this.groups,
    this.label = '',
    this.optionalLeadingPlus = false,
    this.emptyWhenBlank = false,
    this.receiverLocalOnly = false,
  });

  final String dialCode;
  final List<int> groups;
  final String label;
  final bool optionalLeadingPlus;
  final bool emptyWhenBlank;

  /// Receiver field shows dial code as prefix; user types local part only.
  final bool receiverLocalOnly;

  /// US senders — 3 · 3 · 6 (optional +1).
  static const usSender = NgmyHelpCenterPhonePattern(
    dialCode: '1',
    groups: [3, 3, 6],
    label: 'US Sender',
    optionalLeadingPlus: true,
    emptyWhenBlank: true,
  );

  /// African receivers — local part is 3 digits, space, then 6 digits together.
  static const africanLocal = NgmyHelpCenterPhonePattern(
    dialCode: '',
    groups: [3, 6],
    label: 'Africa local',
    receiverLocalOnly: true,
    emptyWhenBlank: true,
  );

  static const generic = NgmyHelpCenterPhonePattern(
    dialCode: '',
    groups: [3, 6],
    label: 'International',
    receiverLocalOnly: true,
    emptyWhenBlank: true,
  );
}

/// African country name keywords → ITU dial code (no +).
const Map<String, String> kNgmyAfricanCountryDialCodes = {
  // East Africa
  'tanzania': '255',
  'tanz': '255',
  'kenya': '254',
  'uganda': '256',
  'rwanda': '250',
  'burundi': '257',
  'south sudan': '211',
  'sudan': '249',
  'ethiopia': '251',
  'somalia': '252',
  'djibouti': '253',
  'eritrea': '291',
  'madagascar': '261',
  'mauritius': '230',
  'seychelles': '248',
  'comoros': '269',
  'reunion': '262',
  // West Africa
  'ghana': '233',
  'nigeria': '234',
  'senegal': '221',
  'ivory coast': '225',
  "cote d'ivoire": '225',
  'côte d\'ivoire': '225',
  'mali': '223',
  'burkina faso': '226',
  'burkina': '226',
  'niger': '227',
  'guinea': '224',
  'sierra leone': '232',
  'liberia': '231',
  'togo': '228',
  'benin': '229',
  'gambia': '220',
  'cape verde': '238',
  'mauritania': '222',
  'guinea-bissau': '245',
  'guinea bissau': '245',
  // Central Africa
  'drc': '243',
  'democratic republic of congo': '243',
  'dr congo': '243',
  'congo kinshasa': '243',
  'kinshasa': '243',
  'congo': '242',
  'republic of congo': '242',
  'congo brazzaville': '242',
  'brazzaville': '242',
  'cameroon': '237',
  'chad': '235',
  'central african republic': '236',
  'car': '236',
  'gabon': '241',
  'equatorial guinea': '240',
  'sao tome': '239',
  // Southern Africa
  'south africa': '27',
  'zambia': '260',
  'zimbabwe': '263',
  'malawi': '265',
  'mozambique': '258',
  'botswana': '267',
  'namibia': '264',
  'angola': '244',
  'lesotho': '266',
  'eswatini': '268',
  'swaziland': '268',
  // North Africa
  'egypt': '20',
  'morocco': '212',
  'algeria': '213',
  'tunisia': '216',
  'libya': '218',
  'western sahara': '212',
};

String? ngmyHelpCenterDialCodeForCountry(String country) {
  final raw = country.trim().toLowerCase();
  if (raw.isEmpty) return null;
  if (kNgmyAfricanCountryDialCodes.containsKey(raw)) return kNgmyAfricanCountryDialCodes[raw];

  final keys = kNgmyAfricanCountryDialCodes.keys.toList()..sort((a, b) => b.length.compareTo(a.length));
  for (final key in keys) {
    if (raw.contains(key)) return kNgmyAfricanCountryDialCodes[key];
  }
  return null;
}

NgmyHelpCenterPhonePattern ngmyHelpCenterPhonePatternForCountry(String country, {bool sender = false}) {
  if (sender) return NgmyHelpCenterPhonePattern.usSender;
  final code = ngmyHelpCenterDialCodeForCountry(country);
  if (code != null) {
    return NgmyHelpCenterPhonePattern(
      dialCode: code,
      groups: const [3, 6],
      label: country.trim(),
      receiverLocalOnly: true,
      emptyWhenBlank: true,
    );
  }
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

/// Local African number only: XXX XXXXXX (3 digits, space, 6 digits together).
String ngmyHelpCenterFormatReceiverLocal(String raw) {
  var digits = ngmyHelpCenterDigitsOnly(raw);
  if (digits.isEmpty) return '';
  if (digits.startsWith('0')) digits = digits.substring(1);
  final chunks = _chunkDigits(digits, const [3, 6]);
  return chunks.where((c) => c.isNotEmpty).join(' ');
}

/// Full receiver display: +CODE XXX XXXXXX — code auto, then 3, then 6 together.
String ngmyHelpCenterFormatReceiverFull(String localRaw, NgmyHelpCenterPhonePattern pattern) {
  var digits = ngmyHelpCenterDigitsOnly(localRaw);
  if (digits.isEmpty) return pattern.dialCode.isEmpty ? '' : '+${pattern.dialCode}';

  if (pattern.dialCode.isNotEmpty && digits.startsWith(pattern.dialCode)) {
    digits = digits.substring(pattern.dialCode.length);
  }
  if (digits.startsWith('0')) digits = digits.substring(1);

  final chunks = _chunkDigits(digits, const [3, 6]);
  if (pattern.dialCode.isEmpty) return '+${chunks.join(' ')}'.trim();
  if (chunks.isEmpty) return '+${pattern.dialCode}';
  return '+${pattern.dialCode} ${chunks.join(' ')}';
}

String ngmyHelpCenterReceiverLocalFromStored(String fullPhone, String country) {
  final pattern = ngmyHelpCenterPhonePatternForCountry(country);
  var digits = ngmyHelpCenterDigitsOnly(fullPhone);
  if (pattern.dialCode.isNotEmpty && digits.startsWith(pattern.dialCode)) {
    digits = digits.substring(pattern.dialCode.length);
  }
  if (digits.startsWith('0')) digits = digits.substring(1);
  return ngmyHelpCenterFormatReceiverLocal(digits);
}

String ngmyHelpCenterFormatPhone(String raw, NgmyHelpCenterPhonePattern pattern) {
  if (pattern.optionalLeadingPlus) return ngmyHelpCenterFormatSenderPhone(raw);
  if (pattern.receiverLocalOnly) return ngmyHelpCenterFormatReceiverLocal(raw);

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

/// US sender — 3 · 3 · 6; +1 optional.
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

/// Receiver local part formatter (no country code in field).
class NgmyHelpCenterReceiverLocalFormatter extends TextInputFormatter {
  const NgmyHelpCenterReceiverLocalFormatter();
  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    final formatted = ngmyHelpCenterFormatReceiverLocal(newValue.text);
    return TextEditingValue(
      text: formatted,
      selection: TextSelection.collapsed(offset: formatted.length),
    );
  }
}

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

String ngmyHelpCenterPhoneHint(NgmyHelpCenterPhonePattern pattern, {bool receiverLocal = false}) {
  if (pattern.optionalLeadingPlus) return '234 567 890123 or +1 234 567 890123';
  if (receiverLocal || pattern.receiverLocalOnly) return '712 345678';
  if (pattern.dialCode.isNotEmpty) return '+${pattern.dialCode} 712 345678';
  return '712 345678';
}

String ngmyHelpCenterDisplayPhone(String raw, {String country = '', bool sender = false, String? localOnly}) {
  if (raw.trim().isEmpty) return '—';
  if (sender) return ngmyHelpCenterFormatSenderPhone(raw);
  final pattern = ngmyHelpCenterPhonePatternForCountry(country);
  final local = localOnly ?? raw;
  return ngmyHelpCenterFormatReceiverFull(local, pattern);
}

int ngmyHelpCenterReceiverLocalDigitCount(String localRaw) {
  return ngmyHelpCenterDigitsOnly(localRaw).length;
}
