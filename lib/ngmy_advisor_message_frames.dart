import 'package:flutter/material.dart';

/// Advisor messages with the important parts in frames: each detail being asked for
/// (name, email, address…) gets its own frame, and the key question gets a frame whose
/// look matches what it is about (money, a job, a place, a time, feelings…). 20 styles.
class NgmyMessageFrameStyle {
  final String id;
  final String label;
  final IconData icon;
  final List<Color> colors;
  final Color accent;
  const NgmyMessageFrameStyle(this.id, this.label, this.icon, this.colors, this.accent);
}

const kNgmyMessageFrames = <NgmyMessageFrameStyle>[
  NgmyMessageFrameStyle('name', 'Name', Icons.badge_rounded, [Color(0xFF4C1D95), Color(0xFF6D28D9)], Color(0xFFC4B5FD)),
  NgmyMessageFrameStyle('email', 'Email', Icons.alternate_email_rounded, [Color(0xFF0C4A6E), Color(0xFF0369A1)], Color(0xFF7DD3FC)),
  NgmyMessageFrameStyle('phone', 'Phone', Icons.phone_iphone_rounded, [Color(0xFF064E3B), Color(0xFF047857)], Color(0xFF6EE7B7)),
  NgmyMessageFrameStyle('address', 'Home address', Icons.home_rounded, [Color(0xFF78350F), Color(0xFFB45309)], Color(0xFFFCD34D)),
  NgmyMessageFrameStyle('place', 'Location', Icons.location_on_rounded, [Color(0xFF134E4A), Color(0xFF0F766E)], Color(0xFF5EEAD4)),
  NgmyMessageFrameStyle('age', 'Age', Icons.cake_rounded, [Color(0xFF831843), Color(0xFFBE185D)], Color(0xFFF9A8D4)),
  NgmyMessageFrameStyle('time', 'Availability', Icons.schedule_rounded, [Color(0xFF312E81), Color(0xFF4338CA)], Color(0xFFA5B4FC)),
  NgmyMessageFrameStyle('date', 'Date', Icons.event_rounded, [Color(0xFF164E63), Color(0xFF0E7490)], Color(0xFF67E8F9)),
  NgmyMessageFrameStyle('money', 'Money', Icons.payments_rounded, [Color(0xFF14532D), Color(0xFF15803D)], Color(0xFFFDE68A)),
  NgmyMessageFrameStyle('job', 'Job', Icons.work_rounded, [Color(0xFF7C2D12), Color(0xFFC2410C)], Color(0xFFFDBA74)),
  NgmyMessageFrameStyle('link', 'Website', Icons.link_rounded, [Color(0xFF1E3A8A), Color(0xFF1D4ED8)], Color(0xFF93C5FD)),
  NgmyMessageFrameStyle('confirm', 'Quick check', Icons.task_alt_rounded, [Color(0xFF365314), Color(0xFF4D7C0F)], Color(0xFFBEF264)),
  NgmyMessageFrameStyle('choice', 'Your pick', Icons.touch_app_rounded, [Color(0xFF701A75), Color(0xFFA21CAF)], Color(0xFFF0ABFC)),
  NgmyMessageFrameStyle('question', 'Question', Icons.help_rounded, [Color(0xFF3B0764), Color(0xFF1E1B4B)], Color(0xFFD8B4FE)),
  NgmyMessageFrameStyle('warning', 'Important', Icons.warning_amber_rounded, [Color(0xFF7F1D1D), Color(0xFFB91C1C)], Color(0xFFFCA5A5)),
  NgmyMessageFrameStyle('win', 'Great news', Icons.celebration_rounded, [Color(0xFF713F12), Color(0xFFA16207)], Color(0xFFFDE047)),
  NgmyMessageFrameStyle('tip', 'Tip', Icons.lightbulb_rounded, [Color(0xFF422006), Color(0xFF854D0E)], Color(0xFFFEF08A)),
  NgmyMessageFrameStyle('heart', 'From the heart', Icons.favorite_rounded, [Color(0xFF881337), Color(0xFFE11D48)], Color(0xFFFDA4AF)),
  NgmyMessageFrameStyle('health', 'Health', Icons.healing_rounded, [Color(0xFF115E59), Color(0xFF0D9488)], Color(0xFF99F6E4)),
  NgmyMessageFrameStyle('travel', 'Travel', Icons.flight_takeoff_rounded, [Color(0xFF1E293B), Color(0xFF334155)], Color(0xFF7DD3FC)),
];

NgmyMessageFrameStyle ngmyMessageFrame(String id) =>
    kNgmyMessageFrames.firstWhere((s) => s.id == id, orElse: () => kNgmyMessageFrames[13]);

/// Which detail a line asks for or gives ("• Legal name (first and last):" → name).
String? ngmyDetailFrameFor(String line) {
  final l = line.toLowerCase();
  if (RegExp(r'\be-?mail\b').hasMatch(l)) return 'email';
  if (RegExp(r'\b(phone|cell|mobile|number to reach)\b').hasMatch(l)) return 'phone';
  if (RegExp(r'\b(address|street|zip)\b').hasMatch(l)) return 'address';
  if (RegExp(r'\b(name)\b').hasMatch(l)) return 'name';
  if (RegExp(r'\b(age|birthday|date of birth|how old|18\+)\b').hasMatch(l)) return 'age';
  if (RegExp(r'\b(availability|available|days?/hours|hours|shifts?|schedule)\b').hasMatch(l)) return 'time';
  if (RegExp(r'\b(city|town|area|location|where you live)\b').hasMatch(l)) return 'place';
  if (RegExp(r'\b(date|start date|when can you start)\b').hasMatch(l)) return 'date';
  if (RegExp(r'\b(pay|salary|wage|price|cost|budget|\$\d)').hasMatch(l)) return 'money';
  if (RegExp(r'\b(role|position|job|experience|employer)\b').hasMatch(l)) return 'job';
  if (RegExp(r'https?://|www\.').hasMatch(l)) return 'link';
  return null;
}

/// The vibe of a question or key sentence → which frame it gets.
String ngmyQuestionFrameFor(String q, {bool hasButtons = false}) {
  final l = q.toLowerCase();
  if (RegExp(r'\b(warning|careful|important|urgent|scam|don.?t share|deadline)\b').hasMatch(l)) return 'warning';
  if (RegExp(r'\b(congrat|you got (it|the job)|hired|approved|accepted|great news|we did it)\b').hasMatch(l)) return 'win';
  if (RegExp(r'\b(love|miss you|feel(ing)?|heart|sad|happy|lonely|hurt)\b').hasMatch(l)) return 'heart';
  if (RegExp(r'\b(doctor|health|sick|medic|pain|insurance|hospital|appointment)\b').hasMatch(l)) return 'health';
  if (RegExp(r'\b(flight|trip|travel|hotel|vacation|car|drive|miles away)\b').hasMatch(l)) return 'travel';
  if (RegExp(r'\b(pay|price|cost|money|budget|salary|\$\d|afford)').hasMatch(l)) return 'money';
  if (RegExp(r'\b(role|position|job|apply|application|hiring|opening|shift lead|cashier|crew)\b').hasMatch(l)) return 'job';
  if (RegExp(r'\b(where|which (area|city|town)|city|town|nearby|location|area)\b').hasMatch(l)) return 'place';
  if (RegExp(r'\b(when|what time|which day|schedule|available|hours|shifts?|mornings?|nights?)\b').hasMatch(l)) return 'time';
  if (RegExp(r'\b(phone|number)\b').hasMatch(l)) return 'phone';
  if (RegExp(r'\be-?mail\b').hasMatch(l)) return 'email';
  if (RegExp(r'\b(tip|idea|suggest|try this)\b').hasMatch(l)) return 'tip';
  if (RegExp(r'^(is|are|do|does|did|can|could|should|will|would|have|has)\b').hasMatch(l) ||
      RegExp(r'\b(right|correct|sound good|okay|ok)\?$').hasMatch(l)) {
    return 'confirm';
  }
  if (hasButtons || RegExp(r'\b(which|pick|choose|prefer|or)\b').hasMatch(l)) return 'choice';
  return 'question';
}

/// One piece of a message: plain text, a detail frame, or a key-sentence frame.
class NgmyMessagePart {
  final String text;
  final String? frame;
  final bool detail;
  const NgmyMessagePart(this.text, {this.frame, this.detail = false});
}

final _bullet = RegExp(r'^\s*(?:[-•*▪●◦]|\d{1,2}[.)])\s+');
final _sentenceSplit = RegExp(r'(?<=[.!?])\s+(?=[A-Z0-9"“(])');

/// Splits a message into plain text and framed parts.
List<NgmyMessagePart> ngmySplitMessageIntoFrames(String text, {bool hasButtons = false}) {
  final parts = <NgmyMessagePart>[];
  final plain = StringBuffer();
  void flushPlain() {
    final s = plain.toString().trim();
    if (s.isNotEmpty) parts.add(NgmyMessagePart(s));
    plain.clear();
  }

  for (final rawLine in text.split('\n')) {
    final line = rawLine.trimRight();
    if (line.trim().isEmpty) {
      if (plain.isNotEmpty) plain.write('\n');
      continue;
    }
    final isBullet = _bullet.hasMatch(line);
    final isLabeled = RegExp(r'^\s*[A-Za-z][A-Za-z /()&+-]{1,40}:\s*').hasMatch(line);
    final body = line.replaceFirst(_bullet, '').trim();
    final detail = (isBullet || isLabeled) && body.length <= 160 ? ngmyDetailFrameFor(body) : null;
    if (detail != null) {
      flushPlain();
      parts.add(NgmyMessagePart(body, frame: detail, detail: true));
      continue;
    }
    // Frame the questions (and nothing else) in a normal paragraph.
    final sentences = line.trim().split(_sentenceSplit);
    for (final s in sentences) {
      final q = s.trim();
      final worth = q.endsWith('?') && q.length >= 18 && q.length <= 260;
      if (worth) {
        flushPlain();
        parts.add(NgmyMessagePart(q, frame: ngmyQuestionFrameFor(q, hasButtons: hasButtons)));
      } else {
        if (plain.isNotEmpty && !plain.toString().endsWith('\n')) plain.write(' ');
        plain.write(q);
      }
    }
    if (plain.isNotEmpty) plain.write('\n');
  }
  flushPlain();
  return parts;
}

class NgmyFramedMessageText extends StatelessWidget {
  final String text;
  final bool hasButtons;
  final TextStyle style;
  const NgmyFramedMessageText(
    this.text, {
    super.key,
    this.hasButtons = false,
    this.style = const TextStyle(fontSize: 14, height: 1.45, color: Colors.white),
  });

  @override
  Widget build(BuildContext context) {
    final parts = ngmySplitMessageIntoFrames(text, hasButtons: hasButtons);
    if (parts.every((p) => p.frame == null)) return Text(text, style: style);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      mainAxisSize: MainAxisSize.min,
      children: [
        for (var i = 0; i < parts.length; i++)
          Padding(
            padding: EdgeInsets.only(top: i == 0 ? 0 : (parts[i].detail && parts[i - 1].detail ? 6 : 10)),
            child: parts[i].frame == null
                ? Text(parts[i].text, style: style)
                : _NgmyFrame(part: parts[i], style: style),
          ),
      ],
    );
  }
}

class _NgmyFrame extends StatelessWidget {
  final NgmyMessagePart part;
  final TextStyle style;
  const _NgmyFrame({required this.part, required this.style});

  @override
  Widget build(BuildContext context) {
    final s = ngmyMessageFrame(part.frame!);
    // "Phone: 478-555-1234" → label "Phone", value "478-555-1234".
    var label = s.label;
    var body = part.text;
    final colon = RegExp(r'^([^:]{2,42}):\s*(.*)$').firstMatch(body);
    if (part.detail && colon != null) {
      label = colon.group(1)!.trim();
      body = colon.group(2)!.trim();
    }
    final detail = part.detail;
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(detail ? 14 : 18),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [s.colors[0].withValues(alpha: 0.92), s.colors[1].withValues(alpha: 0.78)],
        ),
        border: Border.all(color: s.accent.withValues(alpha: 0.55), width: detail ? 1 : 1.4),
        boxShadow: [BoxShadow(color: s.colors[1].withValues(alpha: 0.35), blurRadius: detail ? 8 : 14, offset: const Offset(0, 3))],
      ),
      padding: EdgeInsets.fromLTRB(10, detail ? 8 : 10, 12, detail ? 8 : 12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: detail ? 28 : 32,
            height: detail ? 28 : 32,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Colors.black.withValues(alpha: 0.22),
              border: Border.all(color: s.accent.withValues(alpha: 0.7)),
            ),
            child: Icon(s.icon, size: detail ? 15 : 17, color: s.accent),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label.toUpperCase(),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: s.accent),
                ),
                if (body.isNotEmpty) ...[
                  const SizedBox(height: 2),
                  Text(
                    body,
                    style: style.copyWith(
                      fontWeight: detail ? FontWeight.w600 : FontWeight.w700,
                      fontSize: detail ? (style.fontSize ?? 14) : (style.fontSize ?? 14) + 0.5,
                    ),
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}
