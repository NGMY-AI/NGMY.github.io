import 'dart:math' as math;
import 'package:flutter/material.dart';

import 'ngmy_dice_config.dart';
import 'ngmy_dice_cube.dart';
import 'ngmy_game_nav.dart';
import 'ngmy_game_result_popup.dart';
import 'ngmy_nav.dart';
import 'ngmy_multiplayer.dart';

export 'ngmy_game_result_popup.dart' show showNgmyGameResultPopup;

/// Min/max round timer (seconds) for admin Game Center settings.
const int ngmyMinGameSeconds = 1;
const int ngmyMaxGameSeconds = 120;

/// All Game Center game ids (admin time limits use these keys). Dice is separate screen.
const List<String> kNgmyGameIds = [
  'puzzle',
  'typing',
  'memory',
  'math',
  'reflex',
  'scramble',
  'pattern',
  'sequence',
  'simon',
  'color',
  'card',
  ...kNgmyProGameIds,
];

const Map<String, String> kNgmyGameTitles = {
  'dice': 'Dice Roll',
  'puzzle': '8-Puzzle Solver',
  'typing': 'Typing Speed',
  'memory': 'Memory Match',
  'math': 'Math Quiz',
  'reflex': 'Reflex Test',
  'scramble': 'Word Scramble',
  'pattern': 'Pattern Memory',
  'sequence': 'Number Sequence',
  'simon': 'Simon Says',
  'color': 'Color Rush',
  'card': 'Card Match',
  ...kNgmyProGameTitles,
};

/// Dice roll lands on one of these five outcomes.
const List<int> kNgmyDiceOutcomes = [1, 2, 3, -1, -2];

String ngmyDiceOutcomeLabel(int outcome) {
  if (outcome > 0) return '+$outcome';
  return '$outcome';
}

/// Games shown in admin time-limit grid (includes dice).
List<String> get kNgmyAdminGameIds => ['dice', ...kNgmyGameIds];

Map<String, int> ngmyDefaultGameTimeLimits() {
  return {for (final id in kNgmyAdminGameIds) id: 60};
}

Map<String, int> ngmyParseGameTimeLimits(dynamic raw) {
  final out = ngmyDefaultGameTimeLimits();
  if (raw is Map) {
    for (final e in raw.entries) {
      final id = e.key.toString();
      if (!out.containsKey(id)) continue;
      final v = e.value is int ? e.value as int : int.tryParse('${e.value}') ?? 0;
      if (v >= ngmyMinGameSeconds && v <= ngmyMaxGameSeconds) out[id] = v;
    }
  }
  return out;
}

int ngmyGameTimeLimitSeconds(String gameId, Map<String, int> limits) {
  return limits[gameId] ?? ngmyDefaultGameTimeLimits()[gameId] ?? 90;
}

/// Full sentences for typing skill game (character-by-character match).
const List<String> kNgmySentenceBank = [
  'Today Jeremiah was eating apple in church with his sister.',
  'The skilled trader analyzed profit margins before placing the next order.',
  'Maria completed every typing challenge without missing a single character.',
  'Investors earn rewards when focus and accuracy stay high under pressure.',
  'The warehouse team shipped forty packages before the afternoon deadline.',
  'Learning difficult sentences builds speed and precision for real work.',
  'David reviewed the contract twice to avoid costly mistakes in the report.',
  'Strong players practice daily until challenging tasks feel manageable.',
  'The conference speaker shared ideas that changed how teams collaborate.',
  'Every correct keystroke moves you closer to the maximum payout today.',
];

/// 100 unique long words — cycling index per user in SharedPreferences.
const List<String> kNgmyWordBank = [
  'ACCOMPLISHMENT', 'ADMINISTRATION', 'AUTHENTICATION', 'BIBLIOGRAPHY', 'BIODEGRADABLE',
  'CANTANKEROUSLY', 'CHARACTERISTIC', 'CIRCUMSTANTIAL', 'COMMUNICATION', 'COMPREHENSION',
  'CONGRATULATIONS', 'CONSTITUTIONAL', 'CONTRADICTORY', 'COUNTERBALANCE', 'DEMONSTRATION',
  'DISAPPOINTMENT', 'DISCRIMINATION', 'ELECTRIFICATION', 'ENCYCLOPEDIA', 'ENTERTAINMENT',
  'ENVIRONMENTAL', 'EXPERIMENTATION', 'EXTRAORDINARY', 'GENERATIONALLY', 'HALLUCINATION',
  'HOSPITALIZATION', 'HYPOTHETICAL', 'IDENTIFICATION', 'ILLUSTRATION', 'IMPLEMENTATION',
  'INDIVIDUALISTIC', 'INDUSTRIALIZATION', 'INFORMATIONAL', 'INSUBORDINATION', 'INTERNATIONAL',
  'INTERPRETATION', 'JURISPRUDENCE', 'KNOWLEDGEABLE', 'LIGHTHEARTEDLY', 'MAGNIFICENTLY',
  'MANUFACTURING', 'MATERIALISTIC', 'MISUNDERSTANDING', 'MULTIDIMENSIONAL', 'MYSTERIOUSNESS',
  'NATIONALISTIC', 'NEVERTHELESS', 'NOTWITHSTANDING', 'ORGANIZATIONAL', 'OVERWHELMINGLY',
  'PARLIAMENTARY', 'PERFECTIONISTIC', 'PHARMACEUTICAL', 'PHENOMENOLOGICAL', 'PHILANTHROPIC',
  'PHOTOGRAPHICAL', 'PRECIPITATION', 'PREDOMINANTLY', 'PRESERVATIONIST', 'PROCRASTINATION',
  'PROFESSIONALISM', 'PSYCHOLOGICAL', 'QUALIFICATION', 'QUESTIONABLY', 'RECONSTRUCTION',
  'REFRIGERATION', 'REPRESENTATIVE', 'REVOLUTIONARY', 'SCHOLASTICALLY', 'SIGNIFICANCE',
  'SOPHISTICATED', 'SPECIFICATION', 'SPIRITUALISTIC', 'STANDARDIZATION', 'SUBSTANTIALLY',
  'SUPERINTENDENT', 'SURPRISINGLY', 'SUSTAINABILITY', 'TECHNOLOGICAL', 'TEMPERAMENTAL',
  'TERMINOLOGICAL', 'THANKSGIVING', 'THOUGHTFULLY', 'TRADITIONALIST', 'TRANSFORMATION',
  'TRANSPORTATION', 'UNCONTROLLABLE', 'UNDERSTANDING', 'UNPRECEDENTED', 'UNSUBSTANTIATED',
  'VULNERABILITY', 'WESTERNIZATION', 'WHOLESALENESS', 'WILLINGNESSES', 'WONDERSTRUCKLY',
  'XENODIAGNOSIS', 'YOUTHFULNESSES', 'ZEALOUSNESSES', 'ABRACADABRAISM', 'ABSENTMINDEDLY',
  'ACCELEROMETER', 'ACKNOWLEDGMENT', 'ADVENTURESOMELY', 'AFFECTIONATELY', 'AGGRANDIZEMENT',
];

class NgmyMathQuestion {
  final String prompt;
  final String answer;
  final List<String> choices;
  const NgmyMathQuestion({required this.prompt, required this.answer, required this.choices});
}

List<NgmyMathQuestion> buildNgmyMathBank() {
  final bank = <NgmyMathQuestion>[];
  final rng = math.Random(42);
  for (var i = 0; i < 100; i++) {
    final a = 12 + rng.nextInt(88);
    final b = 8 + rng.nextInt(72);
    final op = i % 4;
    late String prompt;
    late int ans;
    if (op == 0) {
      prompt = '$a + $b = ?';
      ans = a + b;
    } else if (op == 1) {
      prompt = '$a × $b = ?';
      ans = a * b;
    } else if (op == 2) {
      final hi = math.max(a, b);
      final lo = math.min(a, b);
      prompt = '$hi − $lo = ?';
      ans = hi - lo;
    } else {
      final d = b == 0 ? 1 : b;
      final q = a ~/ d;
      prompt = '$q × $d = ?';
      ans = q * d;
    }
    final wrong = <int>{};
    while (wrong.length < 3) {
      wrong.add(ans + rng.nextInt(17) - 8);
    }
    wrong.remove(ans);
    while (wrong.length < 3) wrong.add(ans + wrong.length + 3);
    final choices = [ans.toString(), ...wrong.map((w) => w.toString())]..shuffle(rng);
    bank.add(NgmyMathQuestion(prompt: prompt, answer: ans.toString(), choices: choices));
  }
  return bank;
}

String scrambleWord(String word) {
  final chars = word.split('');
  if (chars.length < 4) return word.split('').reversed.join();
  final rng = math.Random();
  for (var t = 0; t < 12; t++) {
    chars.shuffle(rng);
    final s = chars.join();
    if (s != word) return s;
  }
  return chars.reversed.join();
}

/// Full-screen dice game — roll lands on +1, +2, +3 (win) or −1, −2 (lose).
class NgmyDiceGameScreen extends StatefulWidget {
  final double balance;
  final String userEmail;
  final NgmyDiceSettings diceSettings;
  final VoidCallback onDiceSettingsChanged;
  final bool Function(double bet, String note) onChargeBet;
  final void Function(double payout, String note, {double bonus}) onPayout;
  final VoidCallback? onSessionStarted;

  const NgmyDiceGameScreen({
    super.key,
    required this.balance,
    required this.userEmail,
    required this.diceSettings,
    required this.onDiceSettingsChanged,
    required this.onChargeBet,
    required this.onPayout,
    this.onSessionStarted,
  });

  @override
  State<NgmyDiceGameScreen> createState() => _NgmyDiceGameScreenState();
}

class _NgmyDiceGameScreenState extends State<NgmyDiceGameScreen> {
  final math.Random _rng = math.Random();
  final TextEditingController _customBetC = TextEditingController();
  double _bet = 2;
  int? _landedOutcome;
  int? _rollPreview;
  bool _rolling = false;
  bool _betLocked = false;

  double get _profit => _effectiveBet() * 0.46;

  @override
  void dispose() {
    _customBetC.dispose();
    super.dispose();
  }

  double _effectiveBet() {
    final custom = double.tryParse(_customBetC.text.trim());
    if (custom != null && custom >= 2) return custom;
    return _bet;
  }

  Future<void> _roll() async {
    if (_rolling) return;
    final wager = _effectiveBet();
    if (wager < 2) {
      _toast('Minimum bet is \$2.00');
      return;
    }
    if (!_betLocked) {
      if (widget.balance < wager) {
        _toast('Insufficient balance.');
        return;
      }
      if (!widget.onChargeBet(wager, 'Dice Roll bet')) {
        _toast('Could not place bet.');
        return;
      }
      widget.onSessionStarted?.call();
      setState(() => _betLocked = true);
    }

    final outcome = ngmyPickDiceOutcome(widget.diceSettings, widget.userEmail, _rng);
    widget.onDiceSettingsChanged();
    setState(() {
      _rolling = true;
      _landedOutcome = null;
      _rollPreview = null;
    });

    const steps = 24;
    for (var i = 0; i < steps; i++) {
      await Future<void>.delayed(Duration(milliseconds: 40 + i * 6));
      if (!mounted) return;
      setState(() => _rollPreview = kNgmyDiceOutcomes[_rng.nextInt(kNgmyDiceOutcomes.length)]);
    }
    await Future<void>.delayed(const Duration(milliseconds: 320));
    if (!mounted) return;

    final win = outcome > 0;
    final bonus = outcome == 3 ? 3.0 : 0.0;
    final label = ngmyDiceOutcomeLabel(outcome);
    setState(() {
      _rolling = false;
      _rollPreview = null;
      _landedOutcome = outcome;
    });

    if (!mounted) return;
    if (win) {
      final payout = wager * 1.46 + bonus;
      widget.onPayout(payout, 'Dice Roll $label', bonus: bonus);
      await showNgmyGameResultPopup(
        context,
        win: true,
        title: 'YOU WIN!',
        outcomeLabel: label,
        subtitle: bonus > 0
            ? '+\$${payout.toStringAsFixed(2)} total (includes \$3 bonus for +3!)'
            : '+\$${payout.toStringAsFixed(2)} added to your balance',
        onGoBack: ngmyGameGoBack,
        onPlayAgain: () => setState(() {
          _betLocked = false;
          _landedOutcome = null;
          _rollPreview = null;
        }),
      );
    } else {
      await showNgmyGameResultPopup(
        context,
        win: false,
        title: 'YOU LOSE',
        outcomeLabel: label,
        subtitle: 'Better luck on the next roll!',
        onGoBack: ngmyGameGoBack,
        onPlayAgain: () => setState(() {
          _betLocked = false;
          _landedOutcome = null;
          _rollPreview = null;
        }),
      );
    }
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Widget _outcomeChip(String label, Color bg, {required bool landed}) {
    // Use Container (not AnimatedContainer): animating null ↔ boxShadow with
    // easeOutBack lerps blurRadius below 0 and crashes the app.
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 3),
        child: Container(
          height: landed ? 48 : 40,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: landed ? bg : bg.withValues(alpha: 0.35),
            borderRadius: BorderRadius.circular(10),
            border: Border.all(color: landed ? Colors.white : bg.withValues(alpha: 0.7), width: landed ? 2.5 : 1.2),
            boxShadow: landed
                ? [BoxShadow(color: bg.withValues(alpha: 0.65), blurRadius: 14, spreadRadius: 1)]
                : const [],
          ),
          child: Text(
            label,
            style: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.w900,
              fontSize: landed ? 18 : 15,
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final bal = widget.balance;
    final wager = _effectiveBet();
    return Scaffold(
      backgroundColor: const Color(0xFF2B1454),
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 4, 12, 8),
              child: Row(
                children: [
                  TextButton.icon(
                    onPressed: () => NgmyNavigator.pop(context),
                    icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 16, color: Colors.white70),
                    label: const Text('Back', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
                  ),
                  const Spacer(),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                    decoration: BoxDecoration(
                      color: Colors.orange,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Icon(Icons.account_balance_wallet_rounded, color: Colors.white, size: 18),
                        const SizedBox(width: 6),
                        Text(
                          '\$${bal.toStringAsFixed(2)}',
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 0, 14, 8),
                child: Column(
                  children: [
                    SizedBox(
                      height: math.min(MediaQuery.sizeOf(context).height * 0.30, 200),
                      width: double.infinity,
                      child: Container(
                        decoration: BoxDecoration(
                          color: const Color(0xFF6B4C9A).withOpacity(0.55),
                          borderRadius: BorderRadius.circular(18),
                          border: Border.all(color: Colors.white.withOpacity(0.12)),
                        ),
                        child: Center(
                          child: Ngmy3DDiceCube(
                            rolling: _rolling,
                            outcome: _rolling ? _rollPreview : _landedOutcome,
                            size: math.min(MediaQuery.sizeOf(context).width * 0.40, 132),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      'Roll lands on one of:',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 11, fontWeight: FontWeight.w600),
                    ),
                    const SizedBox(height: 4),
                    Row(
                      children: [
                        for (final o in kNgmyDiceOutcomes)
                          _outcomeChip(
                            ngmyDiceOutcomeLabel(o),
                            o > 0 ? const Color(0xFF22C55E) : const Color(0xFFEF4444),
                            landed: !_rolling && _landedOutcome == o,
                          ),
                      ],
                    ),
                    if (!_rolling && _landedOutcome != null)
                      Padding(
                        padding: const EdgeInsets.only(top: 6),
                        child: Text(
                          'Landed on ${ngmyDiceOutcomeLabel(_landedOutcome!)}',
                          style: TextStyle(
                            color: _landedOutcome! > 0 ? const Color(0xFF4ADE80) : const Color(0xFFF87171),
                            fontWeight: FontWeight.w900,
                            fontSize: 20,
                          ),
                        ),
                      ),
                    const SizedBox(height: 6),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Text('Bet Amount', style: TextStyle(color: Colors.white.withOpacity(0.85), fontWeight: FontWeight.w800, fontSize: 12)),
                    ),
                    const SizedBox(height: 4),
                    Row(
                      children: [2.0, 5.0, 10.0, 25.0].map((v) {
                        final sel = _bet == v && _customBetC.text.trim().isEmpty;
                        return Expanded(
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 3),
                            child: Material(
                              color: sel ? const Color(0xFF22C55E) : Colors.white.withOpacity(0.14),
                              borderRadius: BorderRadius.circular(10),
                              child: InkWell(
                                onTap: _betLocked
                                    ? null
                                    : () => setState(() {
                                        _bet = v;
                                        _customBetC.clear();
                                      }),
                                borderRadius: BorderRadius.circular(10),
                                child: SizedBox(
                                  height: 38,
                                  child: Center(
                                    child: Text(
                                      '\$${v.toStringAsFixed(0)}',
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.w800,
                                        fontSize: v >= 10 ? 13 : 15,
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        );
                      }).toList()
                        ..add(
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.only(left: 3),
                              child: TextField(
                                controller: _customBetC,
                                enabled: !_betLocked,
                                keyboardType: TextInputType.number,
                                textAlign: TextAlign.center,
                                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
                                decoration: InputDecoration(
                                  hintText: '\$',
                                  hintStyle: const TextStyle(color: Colors.white54),
                                  filled: true,
                                  fillColor: Colors.white.withOpacity(0.14),
                                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
                                  contentPadding: const EdgeInsets.symmetric(vertical: 10),
                                  isDense: true,
                                ),
                              ),
                            ),
                          ),
                        ),
                    ),
                    const SizedBox(height: 4),
                    Align(
                      alignment: Alignment.centerRight,
                      child: Text(
                        'Perfect Score Profit: +\$${_profit.toStringAsFixed(2)}',
                        style: const TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w800, fontSize: 11),
                      ),
                    ),
                    const SizedBox(height: 8),
                    SizedBox(
                      width: double.infinity,
                      height: 48,
                      child: ElevatedButton(
                        onPressed: _rolling ? null : _roll,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF7C3AED),
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: Text(
                          '🎲 ROLL (\$${wager.toStringAsFixed(2)})',
                          style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
