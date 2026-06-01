import 'package:flutter/material.dart';

/// Typing accuracy: correct matching chars / target length (mistakes & missed reduce payout).
int ngmyTypingCorrectCount(String target, String typed) {
  var c = 0;
  for (var i = 0; i < target.length; i++) {
    if (i < typed.length && typed[i] == target[i]) c++;
  }
  return c;
}

int ngmyTypingWrongCount(String target, String typed) {
  final correct = ngmyTypingCorrectCount(target, typed);
  return target.length - correct;
}

@Deprecated('Use ngmyTypingCorrectCount')
int ngmyTypingMatchCount(String target, String typed) => ngmyTypingCorrectCount(target, typed);

/// Free typing — users keep going; mistakes shown in red, counted for payout.
class NgmyTypingSentencePanel extends StatefulWidget {
  final String sentence;
  final TextEditingController controller;
  final ValueChanged<int> onCorrectCount;
  final ValueChanged<int>? onWrongCount;
  final VoidCallback? onCompleted;

  const NgmyTypingSentencePanel({
    super.key,
    required this.sentence,
    required this.controller,
    required this.onCorrectCount,
    this.onWrongCount,
    this.onCompleted,
  });

  @override
  State<NgmyTypingSentencePanel> createState() => _NgmyTypingSentencePanelState();
}

class _NgmyTypingSentencePanelState extends State<NgmyTypingSentencePanel> with SingleTickerProviderStateMixin {
  late AnimationController _caretBlink;

  @override
  void initState() {
    super.initState();
    _caretBlink = AnimationController(vsync: this, duration: const Duration(milliseconds: 530))..repeat(reverse: true);
    widget.controller.addListener(_sync);
    _sync();
  }

  @override
  void didUpdateWidget(covariant NgmyTypingSentencePanel oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.sentence != widget.sentence) {
      widget.controller.clear();
      _sync();
    }
  }

  void _sync() {
    final typed = widget.controller.text;
    final target = widget.sentence;
    final correct = ngmyTypingCorrectCount(target, typed);
    final wrong = ngmyTypingWrongCount(target, typed);
    widget.onCorrectCount(correct);
    widget.onWrongCount?.call(wrong);
    setState(() {});
    if (typed.length >= target.length && target.isNotEmpty) {
      widget.onCompleted?.call();
    }
  }

  @override
  void dispose() {
    widget.controller.removeListener(_sync);
    _caretBlink.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final s = widget.sentence;
    final typed = widget.controller.text;
    final correct = ngmyTypingCorrectCount(s, typed);
    final wrong = ngmyTypingWrongCount(s, typed);
    final caretAt = typed.length;

    final spans = <InlineSpan>[];
    final maxLen = mathMax(s.length, typed.length);
    for (var i = 0; i < maxLen; i++) {
      if (i == caretAt && i <= s.length) {
        spans.add(
          WidgetSpan(
            alignment: PlaceholderAlignment.middle,
            child: FadeTransition(
              opacity: _caretBlink,
              child: Container(
                width: 3,
                height: 22,
                margin: const EdgeInsets.symmetric(horizontal: 1),
                decoration: BoxDecoration(
                  color: const Color(0xFFFBBF24),
                  borderRadius: BorderRadius.circular(1),
                  boxShadow: [BoxShadow(color: const Color(0xFFFBBF24).withValues(alpha: 0.6), blurRadius: 6)],
                ),
              ),
            ),
          ),
        );
      }
      if (i >= s.length) {
        if (i < typed.length) {
          spans.add(TextSpan(text: typed[i], style: const TextStyle(color: Color(0xFFEF4444), fontWeight: FontWeight.w800, fontSize: 17)));
        }
        continue;
      }
      final targetCh = s[i];
      final typedCh = i < typed.length ? typed[i] : null;
      Color color;
      FontWeight weight = FontWeight.w500;
      if (typedCh == null) {
        color = Colors.white.withValues(alpha: 0.4);
      } else if (typedCh == targetCh) {
        color = const Color(0xFF4ADE80);
        weight = FontWeight.w700;
      } else {
        color = const Color(0xFFEF4444);
        weight = FontWeight.w800;
      }
      spans.add(TextSpan(text: targetCh, style: TextStyle(color: color, fontWeight: weight, fontSize: 17, height: 1.45)));
    }
    if (caretAt >= s.length) {
      spans.add(
        WidgetSpan(
          alignment: PlaceholderAlignment.middle,
          child: FadeTransition(
            opacity: _caretBlink,
            child: Container(width: 3, height: 22, color: const Color(0xFFFBBF24)),
          ),
        ),
      );
    }

    final pct = s.isEmpty ? 0 : ((correct / s.length) * 100).round();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: Colors.black.withValues(alpha: 0.35),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: Colors.white24),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  _statChip('Correct', '$correct', const Color(0xFF22C55E)),
                  const SizedBox(width: 8),
                  _statChip('Wrong / missed', '$wrong', const Color(0xFFEF4444)),
                  const Spacer(),
                  Text('$pct% accuracy', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900)),
                ],
              ),
              const SizedBox(height: 6),
              const Text('Keep typing — mistakes are counted in your payout', style: TextStyle(color: Colors.white54, fontSize: 11)),
            ],
          ),
        ),
        const SizedBox(height: 12),
        Expanded(
          child: SingleChildScrollView(
            child: SelectableText.rich(TextSpan(children: spans)),
          ),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: widget.controller,
          autofocus: true,
          maxLines: 3,
          style: const TextStyle(color: Colors.white, fontSize: 16),
          decoration: InputDecoration(
            hintText: 'Type the sentence — you can fix mistakes as you go',
            hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
            filled: true,
            fillColor: Colors.black.withValues(alpha: 0.35),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
              borderSide: const BorderSide(color: Color(0xFFFBBF24), width: 2),
            ),
          ),
        ),
      ],
    );
  }

  Widget _statChip(String label, String value, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(color: color.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(8)),
      child: Text('$label: $value', style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 12)),
    );
  }

  int mathMax(int a, int b) => a > b ? a : b;
}
