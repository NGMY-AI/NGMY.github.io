import 'package:flutter/material.dart';

import 'ngmy_electrical_safety.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The sheets of the electrical school: the wire guide, the test, and the test results.
// ═════════════════════════════════════════════════════════════════════════════

const Color _amber = Color(0xFFF59E0B);

Color _statusColor(SafetyStatus s) => switch (s) {
      SafetyStatus.correct => const Color(0xFF4ADE80),
      SafetyStatus.incorrect => const Color(0xFFFB923C),
      SafetyStatus.unsafe => const Color(0xFFF87171),
      SafetyStatus.incomplete => const Color(0xFFFACC15),
      SafetyStatus.requiresVerification => const Color(0xFFA78BFA),
    };

/// Wire colors and what they usually mean, with the exceptions and the reminder to verify.
Future<void> showWireGuide(BuildContext context) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: const Color(0xFF17171C),
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
    builder: (ctx) => SafeArea(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.85),
        child: ListView(shrinkWrap: true, padding: const EdgeInsets.all(16), children: [
          const Text('Wire guide (U.S. houses)', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
          const SizedBox(height: 6),
          const Text(kWireGuideNote, style: TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.35)),
          const SizedBox(height: 10),
          for (final g in kWireGuide)
            Container(
              margin: const EdgeInsets.only(bottom: 8),
              padding: const EdgeInsets.all(11),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.white12)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('${g.color}: ${g.function}', style: const TextStyle(color: _amber, fontWeight: FontWeight.w900, fontSize: 14)),
                const SizedBox(height: 3),
                Text('Goes to: ${g.terminal}\nCircuit: ${g.circuit}', style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
                const SizedBox(height: 3),
                Text(g.note, style: const TextStyle(color: Colors.white, fontSize: 12.5, height: 1.35)),
                const SizedBox(height: 3),
                Text('Exception: ${g.exception}', style: const TextStyle(color: Color(0xFFFDBA74), fontSize: 12, height: 1.35)),
              ]),
            ),
          const SizedBox(height: 6),
          const Text('Never rely on color alone. With the power off, prove what each wire does with a tester and the device diagram. A licensed electrician does real house wiring.', style: TextStyle(color: Colors.white54, fontSize: 12, height: 1.35)),
        ]),
      ),
    ),
  );
}

/// The test: first the questions (nothing is revealed), then Submit, then the results with the explanations.
Future<TestResult?> showTestFlow(BuildContext context, {required String title, required List<TestAttempt> attempts, required List<TestQuestion> questions}) {
  final session = TestSession(attempts, questions);
  return showModalBottomSheet<TestResult>(
    context: context,
    isScrollControlled: true,
    backgroundColor: const Color(0xFF17171C),
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
    builder: (ctx) => _TestSheet(session: session, title: title),
  );
}

class _TestSheet extends StatefulWidget {
  const _TestSheet({required this.session, required this.title});
  final TestSession session;
  final String title;

  @override
  State<_TestSheet> createState() => _TestSheetState();
}

class _TestSheetState extends State<_TestSheet> {
  final Map<int, int> chosen = {};
  TestResult? result;

  @override
  Widget build(BuildContext context) {
    final r = result;
    return SafeArea(
      child: ConstrainedBox(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.9),
        child: ListView(shrinkWrap: true, padding: const EdgeInsets.all(16), children: r == null ? _questions() : _results(r)),
      ),
    );
  }

  List<Widget> _questions() {
    final qs = widget.session.questions;
    return [
      Text('Test: ${widget.title}', style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
      const SizedBox(height: 4),
      const Text('Answer, then submit. Nothing is marked until you submit.', style: TextStyle(color: Colors.white60, fontSize: 12.5)),
      const SizedBox(height: 10),
      for (var i = 0; i < qs.length; i++) ...[
        Text('${i + 1}. ${qs[i].text}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
        for (var c = 0; c < qs[i].choices.length; c++)
          RadioListTile<int>(
            dense: true,
            value: c,
            groupValue: chosen[i],
            title: Text(qs[i].choices[c], style: const TextStyle(color: Colors.white70, fontSize: 13)),
            onChanged: (v) {
              widget.session.answer(i, v!);
              setState(() => chosen[i] = v);
            },
          ),
        const SizedBox(height: 4),
      ],
      const SizedBox(height: 8),
      FilledButton(
        onPressed: () {
          final res = widget.session.submit();
          setState(() => result = res);
        },
        child: const Text('Submit the test'),
      ),
    ];
  }

  List<Widget> _results(TestResult r) {
    final col = r.passed ? const Color(0xFF4ADE80) : const Color(0xFFF87171);
    return [
      Text(r.passed ? 'Passed' : 'Not passed', style: TextStyle(color: col, fontSize: 22, fontWeight: FontWeight.w900)),
      Text('Score ${r.score}%  (pass mark $kPassMark%)', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800)),
      if (r.items.any((i) => !i.report.safe))
        const Padding(
          padding: EdgeInsets.only(top: 6),
          child: Text('A circuit that is not CORRECT and safe can never pass, even if the light or fan would have worked.', style: TextStyle(color: Color(0xFFFDBA74), fontSize: 12.5, height: 1.35)),
        ),
      const SizedBox(height: 10),
      for (final i in r.items)
        Container(
          margin: const EdgeInsets.only(bottom: 8),
          padding: const EdgeInsets.all(11),
          decoration: BoxDecoration(color: _statusColor(i.report.status).withValues(alpha: 0.1), borderRadius: BorderRadius.circular(12), border: Border.all(color: _statusColor(i.report.status).withValues(alpha: 0.6))),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('${i.title}: ${i.report.status.label} (${i.points}%)', style: TextStyle(color: _statusColor(i.report.status), fontWeight: FontWeight.w900, fontSize: 13.5)),
            if (i.report.findings.isEmpty) const Text('Every connection is on the right terminal and every safety check passes.', style: TextStyle(color: Colors.white70, fontSize: 12.5)),
            for (final f in i.report.findings) ...[
              const SizedBox(height: 4),
              Text('${f.status.label}: ${f.message}', style: const TextStyle(color: Colors.white, fontSize: 12.5, height: 1.3)),
              Text('Rule: ${f.rule}', style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.3)),
              Text('Fix: ${f.fix}', style: const TextStyle(color: Color(0xFFBAE6FD), fontSize: 12, height: 1.3)),
            ],
          ]),
        ),
      for (final q in r.answers)
        Container(
          margin: const EdgeInsets.only(bottom: 8),
          padding: const EdgeInsets.all(11),
          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(12), border: Border.all(color: q.right ? const Color(0xFF4ADE80) : const Color(0xFFF87171))),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('${q.right ? '✅' : '❌'} ${q.question.text}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
            Text('Correct answer: ${q.question.choices[q.question.correct]}', style: const TextStyle(color: Colors.white70, fontSize: 12.5)),
            Text(q.question.why, style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.3)),
          ]),
        ),
      const SizedBox(height: 4),
      FilledButton(onPressed: () => Navigator.pop(context, result), child: const Text('Close')),
    ];
  }
}
