import 'ngmy_phone_integrations.dart';

/// Detect call / text / WhatsApp / iMessage requests that use a person's name.
List<NgmyPhoneAction> ngmyInferContactActionsFromUserMessage(String userText) {
  final text = userText.trim();
  if (text.isEmpty) return const [];
  final lower = text.toLowerCase();

  String? channel;
  if (lower.contains('whatsapp')) {
    channel = 'whatsapp';
  } else if (lower.contains('imessage') || lower.contains('i message')) {
    channel = 'sms';
  }

  String? body;
  final bodyMatch = RegExp(
    r'(?:saying|say|message|text|tell(?:ing)?)\s+(.+)$',
    caseSensitive: false,
  ).firstMatch(text);
  if (bodyMatch != null) {
    var b = bodyMatch.group(1)?.trim() ?? '';
    b = b.replaceAll(RegExp(r'\s+on\s+(whatsapp|imessage|messages?)$', caseSensitive: false), '').trim();
    if (b.length >= 2 && b.length < 500) body = b;
  }

  final name = _extractPersonName(lower, text);
  if (name == null || name.isEmpty) return const [];

  final wantsCall = RegExp(r'\b(call|phone|dial|ring)\b', caseSensitive: false).hasMatch(lower);
  final wantsText = RegExp(r'\b(text|message|sms|whatsapp|imessage|send)\b', caseSensitive: false).hasMatch(lower);

  if (wantsCall && !wantsText) {
    return [NgmyPhoneAction(type: 'call', fields: {'name': name})];
  }
  if (wantsText || channel == 'whatsapp') {
    final type = channel == 'whatsapp' ? 'whatsapp' : 'sms';
    final fields = <String, String>{'name': name};
    if (body != null) fields['body'] = body;
    return [NgmyPhoneAction(type: type, fields: fields)];
  }
  if (wantsCall) {
    return [NgmyPhoneAction(type: 'call', fields: {'name': name})];
  }
  return const [];
}

String? _extractPersonName(String lower, String original) {
  final patterns = <RegExp>[
    RegExp(r'\b(?:call|text|message|whatsapp|imessage)\s+(.+?)(?:\s+(?:on|saying|and|to)\b|$)', caseSensitive: false),
    RegExp(r'\b(?:send (?:a )?message to|text)\s+(.+?)(?:\s+(?:on|saying)\b|$)', caseSensitive: false),
    RegExp(r"\bto\s+([a-z][a-z\s.'-]{1,40}?)(?:\s+(?:on|saying|that)\b|$)", caseSensitive: false),
  ];
  for (final p in patterns) {
    final m = p.firstMatch(lower);
    if (m == null) continue;
    var raw = m.group(1)?.trim() ?? '';
    raw = raw.replaceAll(RegExp(r'\s+on\s+(whatsapp|imessage|messages?)$', caseSensitive: false), '').trim();
    raw = raw.replaceAll(RegExp(r'\s+saying\s+.+$', caseSensitive: false), '').trim();
    if (raw.length >= 2 && raw.length <= 50 && !RegExp(r'^\d+$').hasMatch(raw.replaceAll(RegExp(r'\s'), ''))) {
      return _titleCase(raw);
    }
  }

  final quoted = RegExp("\"([^\"]+)\"|'([^']+)'").firstMatch(original);
  if (quoted != null) {
    return (quoted.group(1) ?? quoted.group(2) ?? '').trim();
  }
  return null;
}

String _titleCase(String s) {
  return s.split(RegExp(r'\s+')).map((w) {
    if (w.isEmpty) return w;
    if (w.length == 1) return w.toUpperCase();
    return '${w[0].toUpperCase()}${w.substring(1)}';
  }).join(' ');
}
