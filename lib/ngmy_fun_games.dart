import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'generated/ngmy_confidence_quotes.g.dart';
import 'generated/ngmy_fortune.g.dart';
import 'generated/ngmy_riddles.g.dart';
import 'ngmy_fun_games_cache.dart';
import 'ngmy_fun_games_limits.dart';
import 'ngmy_fun_games_popups.dart';
import 'ngmy_love_content.dart';
import 'ngmy_love_popups.dart';

/// Play Zone — love match, confidence, brain teasers & fortune (Creator Toolkit).
void showNgmyFunGamesDialog(BuildContext context, {String? userEmail}) {
  showDialog<void>(
    context: context,
    barrierColor: Colors.black.withOpacity(0.82),
    builder: (ctx) => _NgmyFunGamesDialog(userEmail: userEmail),
  );
}

class _NgmyFunGamesDialog extends StatefulWidget {
  final String? userEmail;
  const _NgmyFunGamesDialog({this.userEmail});

  @override
  State<_NgmyFunGamesDialog> createState() => _NgmyFunGamesDialogState();
}

class _NgmyFunGamesDialogState extends State<_NgmyFunGamesDialog> with TickerProviderStateMixin {
  static const _bg = Color(0xFF0B0E18);
  static const _panel = Color(0xFF12182A);
  static const _pink = Color(0xFFEC4899);
  static const _pinkDeep = Color(0xFFDB2777);
  static const _pinkGlow = Color(0xFFF472B6);
  static const _redLove = Color(0xFFEF4444);

  int _category = 0;
  int _loveTab = 0;

  final _yourNameC = TextEditingController();
  final _theirNameC = TextEditingController();
  int? _matchScore;
  String? _matchMessage;

  String? _currentIdea;
  int _ideaIndex = 0;
  bool _pulseBtn = false;

  // Confidence
  int _confContentIndex = 0;
  int _confCyclePosition = 0;
  bool _confCanViewToday = true;
  String? _confTodayQuote;
  String? _confDisplayQuote;

  // Brain
  int _riddleContentIndex = 0;
  int _riddlesRemaining = 15;
  bool _riddleAnswerVisible = false;

  // Fortune
  int _fortuneContentIndex = 0;
  int _fortunesRemaining = 1;
  NgmyFortuneItem? _currentFortune;
  bool _fortuneRevealed = false;

  late final AnimationController _heartCtrl;
  late final AnimationController _orbCtrl;
  late final AnimationController _brainCtrl;
  final _rng = math.Random();

  static const _categories = [
    _CatItem('Love', Icons.favorite_rounded, '💕', Color(0xFFEC4899)),
    _CatItem('Confidence', Icons.bolt_rounded, '💪', Color(0xFFF59E0B)),
    _CatItem('Brain', Icons.psychology_alt_rounded, '🧠', Color(0xFF8B5CF6)),
    _CatItem('Fortune', Icons.auto_awesome_rounded, '🔮', Color(0xFF06B6D4)),
  ];

  @override
  void initState() {
    super.initState();
    _heartCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat();
    _orbCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat();
    _brainCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat();
    _loadCache();
    unawaited(NgmyFunGamesLimits.configureUser(widget.userEmail));
    _loadLimits();
  }

  Future<void> _loadLimits() async {
    await NgmyFunGamesLimits.configureUser(widget.userEmail);
    final conf = await NgmyFunGamesLimits.confidenceState(NgmyConfidenceQuotes.count);
    final riddles = await NgmyFunGamesLimits.riddleState(NgmyRiddlesContent.count);
    final fortune = await NgmyFunGamesLimits.fortuneState(NgmyFortuneContent.count);
    if (!mounted) return;
    setState(() {
      _confContentIndex = conf.contentIndex;
      _confCyclePosition = conf.cyclePosition;
      _confCanViewToday = conf.canViewToday;
      _confTodayQuote = conf.todayQuote;
      _confDisplayQuote = conf.todayQuote ?? NgmyConfidenceQuotes.at(conf.contentIndex);
      _riddleContentIndex = riddles.contentIndex;
      _riddlesRemaining = riddles.remaining;
      _riddleAnswerVisible = false;
      _fortuneContentIndex = fortune.contentIndex;
      _fortunesRemaining = fortune.remaining;
    });
  }

  Future<void> _loadCache() async {
    final saved = await NgmyFunGamesCache.load();
    if (!mounted) return;
    setState(() {
      _category = saved.category;
      _loveTab = saved.loveTab;
    });
  }

  @override
  void dispose() {
    _heartCtrl.dispose();
    _orbCtrl.dispose();
    _brainCtrl.dispose();
    _yourNameC.dispose();
    _theirNameC.dispose();
    super.dispose();
  }

  void _calculateLoveMatch() async {
    final a = _yourNameC.text.trim();
    final b = _theirNameC.text.trim();
    if (a.isEmpty || b.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter both names to calculate your match.')),
      );
      return;
    }
    final score = _loveCompatibility(a, b);
    final message = _loveMessage(score);
    setState(() {
      _matchScore = score;
      _matchMessage = message;
      _pulseBtn = true;
    });
    Future<void>.delayed(const Duration(milliseconds: 120), () {
      if (mounted) setState(() => _pulseBtn = false);
    });
    await showNgmyLoveMatchPopup(context, score: score, message: message);
  }

  int _loveCompatibility(String a, String b) {
    final combined = (a + b).toLowerCase().replaceAll(RegExp(r'\s+'), '');
    var hash = 0;
    for (var i = 0; i < combined.length; i++) {
      hash = (hash * 31 + combined.codeUnitAt(i)) & 0x7fffffff;
    }
    final vowels = RegExp(r'[aeiou]').allMatches(combined).length;
    final bonus = (a.length + b.length + vowels * 7) % 23;
    return ((hash + bonus) % 56 + 44).clamp(44, 99);
  }

  String _loveMessage(int score) {
    if (score >= 90) return 'Soulmate energy! The stars are aligned for you two.';
    if (score >= 80) return 'Strong chemistry — this connection has serious potential.';
    if (score >= 70) return 'A sweet match with room to grow even closer.';
    if (score >= 60) return 'Good vibes! Friendship could bloom into something more.';
    return 'Every great story starts somewhere — keep exploring together.';
  }

  void _pickIdea({required int tab}) {
    setState(() {
      _ideaIndex = _rng.nextInt(NgmyLoveContent.ideaCount);
      _pulseBtn = true;
      if (tab == 1) {
        _currentIdea = NgmyLoveContent.randomNext(_ideaIndex);
      } else if (tab == 2) {
        _currentIdea = NgmyLoveContent.randomKeep(_ideaIndex);
      } else if (tab == 3) {
        _currentIdea = NgmyLoveContent.randomDate(_ideaIndex);
      } else {
        _currentIdea = null;
      }
    });
    Future<void>.delayed(const Duration(milliseconds: 140), () {
      if (mounted) setState(() => _pulseBtn = false);
    });

    final meta = switch (tab) {
      1 => ('Next step for you two', '🌹'),
      2 => ('Keep the spark alive', '💞'),
      3 => ('Date idea', '🌙'),
      _ => ('', ''),
    };
    if (_currentIdea != null && meta.$1.isNotEmpty) {
      showNgmyLoveIdeaPopup(context, title: meta.$1, emoji: meta.$2, idea: _currentIdea!);
    }
  }

  @override
  Widget build(BuildContext context) {
    final w = MediaQuery.of(context).size.width;
    final dialogW = w > 520 ? 420.0 : w - 28;

    return Dialog(
      insetPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 24),
      backgroundColor: Colors.transparent,
      child: Container(
        width: dialogW,
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.88),
        decoration: BoxDecoration(
          color: _bg,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: Colors.white.withOpacity(0.08)),
          boxShadow: [
            BoxShadow(color: _pink.withOpacity(0.12), blurRadius: 32, spreadRadius: 2),
            BoxShadow(color: Colors.black.withOpacity(0.55), blurRadius: 24, offset: const Offset(0, 12)),
          ],
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            _header(),
            Flexible(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 18),
                child: Column(
                  children: [
                    _categoryRow(),
                    const SizedBox(height: 14),
                    _sectionBanner(),
                    const SizedBox(height: 12),
                    if (_category == 0) ...[
                      _loveSubTabs(),
                      const SizedBox(height: 16),
                      _loveContent(),
                    ] else if (_category == 1)
                      _confidenceContent()
                    else if (_category == 2)
                      _brainContent()
                    else
                      _fortuneContent(),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _header() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
      child: Row(
        children: [
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(
              gradient: const LinearGradient(colors: [_pink, _pinkDeep]),
              borderRadius: BorderRadius.circular(10),
              boxShadow: [BoxShadow(color: _pink.withOpacity(0.45), blurRadius: 10)],
            ),
            child: const Center(
              child: Text('✨', style: TextStyle(fontSize: 20)),
            ),
          ),
          const SizedBox(width: 12),
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Play Zone', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                Text('Entertainment Hub', style: TextStyle(color: Color(0xFF94A3B8), fontSize: 12, fontWeight: FontWeight.w600)),
              ],
            ),
          ),
          IconButton(
            onPressed: () => Navigator.of(context).pop(),
            icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 22),
          ),
        ],
      ),
    );
  }

  Widget _categoryIcon(_CatItem item, bool selected) {
    return Container(
      width: 36,
      height: 36,
      decoration: BoxDecoration(
        gradient: selected
            ? LinearGradient(colors: [item.color, item.color.withValues(alpha: 0.65)])
            : null,
        color: selected ? null : item.color.withValues(alpha: 0.15),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: selected ? Colors.white38 : Colors.white12),
      ),
      child: Center(
        child: Icon(item.icon, size: 20, color: selected ? Colors.white : item.color),
      ),
    );
  }

  Widget _categoryRow() {
    return Row(
      children: List.generate(_categories.length, (i) {
        final item = _categories[i];
        final selected = _category == i;
        return Expanded(
          child: Padding(
            padding: EdgeInsets.only(left: i == 0 ? 0 : 4, right: i == _categories.length - 1 ? 0 : 4),
            child: GestureDetector(
              onTap: () {
                setState(() {
                  _category = i;
                  _matchScore = null;
                  _matchMessage = null;
                  _currentIdea = null;
                  _riddleAnswerVisible = false;
                  _fortuneRevealed = false;
                });
                NgmyFunGamesCache.saveCategory(i);
                _loadLimits();
              },
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                padding: const EdgeInsets.symmetric(vertical: 8),
                decoration: BoxDecoration(
                  color: selected ? _panel : Colors.transparent,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: selected ? Colors.white.withOpacity(0.22) : Colors.white.withOpacity(0.06)),
                ),
                child: Column(
                  children: [
                    _categoryIcon(item, selected),
                    const SizedBox(height: 4),
                    Text(
                      item.label,
                      textAlign: TextAlign.center,
                      style: TextStyle(color: selected ? Colors.white : Colors.white54, fontSize: 9, fontWeight: FontWeight.w700),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      }),
    );
  }

  Widget _sectionBanner() {
    final item = _categories[_category];
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 10),
      decoration: BoxDecoration(
        color: item.color.withOpacity(0.06),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: item.color.withOpacity(0.55), width: 1.2),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(item.icon, size: 20, color: item.color),
          const SizedBox(width: 8),
          Text(
            _category == 0 ? 'Your Love Journey' : '${item.label} Zone',
            style: TextStyle(color: item.color, fontWeight: FontWeight.w800, fontSize: 14),
          ),
        ],
      ),
    );
  }

  Widget _loveSubTabs() {
    const tabs = [
      _SubTab('Match', '💘', Icons.favorite_rounded),
      _SubTab('Next', '🌹', Icons.north_east_rounded),
      _SubTab('Keep', '💞', Icons.favorite_border_rounded),
      _SubTab('Date', '🌙', Icons.nightlight_round),
    ];
    return Row(
      children: List.generate(tabs.length, (i) {
        final tab = tabs[i];
        final selected = _loveTab == i;
        return Expanded(
          child: Padding(
            padding: EdgeInsets.only(left: i == 0 ? 0 : 3, right: i == tabs.length - 1 ? 0 : 3),
            child: GestureDetector(
              onTap: () {
                setState(() {
                  _loveTab = i;
                  _matchScore = null;
                  _matchMessage = null;
                });
                NgmyFunGamesCache.saveLoveTab(i);
              },
              child: AnimatedScale(
                scale: selected ? 1.04 : 1.0,
                duration: const Duration(milliseconds: 180),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  padding: const EdgeInsets.symmetric(vertical: 9),
                  decoration: BoxDecoration(
                    gradient: selected
                        ? const LinearGradient(colors: [_redLove, _pinkDeep], begin: Alignment.topLeft, end: Alignment.bottomRight)
                        : null,
                    color: selected ? null : _panel.withOpacity(0.6),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: selected ? _pinkGlow.withOpacity(0.55) : Colors.white.withOpacity(0.06)),
                    boxShadow: selected ? [BoxShadow(color: _redLove.withOpacity(0.4), blurRadius: 10, offset: const Offset(0, 4))] : null,
                  ),
                  child: Column(
                    children: [
                      Icon(tab.icon, size: 20, color: selected ? Colors.white : Colors.white70),
                      Text(tab.label, style: TextStyle(color: selected ? Colors.white : Colors.white54, fontSize: 10, fontWeight: FontWeight.w800)),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
      }),
    );
  }

  Widget _loveContent() {
    switch (_loveTab) {
      case 0:
        return _loveMatchCalculator();
      case 1:
        return _loveIdeaPanel(
          icon: Icons.local_florist_rounded,
          title: 'What happens next?',
          subtitle: 'You just met — here is a romantic first-step idea.',
          buttonLabel: 'Show me what\'s next',
          onGenerate: () => _pickIdea(tab: 1),
        );
      case 2:
        return _loveIdeaPanel(
          icon: Icons.favorite_rounded,
          title: 'Keep the connection growing',
          subtitle: 'Tap for a relationship tip — what to do after the first spark.',
          buttonLabel: 'Get relationship tip',
          onGenerate: () => _pickIdea(tab: 2),
        );
      case 3:
        return _loveIdeaPanel(
          icon: Icons.nightlight_round,
          title: 'Date inspiration',
          subtitle: 'Romantic date ideas when you are ready to plan something special.',
          buttonLabel: 'Generate date idea',
          onGenerate: () => _pickIdea(tab: 3),
        );
      default:
        return const SizedBox.shrink();
    }
  }

  Widget _loveIdeaPanel({
    required IconData icon,
    required String title,
    required String subtitle,
    required String buttonLabel,
    required VoidCallback onGenerate,
  }) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(top: 12, right: 16, child: _mini3DHeart(36)),
        Positioned(bottom: 40, left: 10, child: _mini3DHeart(28)),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.fromLTRB(18, 22, 18, 20),
          decoration: BoxDecoration(
            color: _panel,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: _redLove.withOpacity(0.35)),
            boxShadow: [BoxShadow(color: _pink.withOpacity(0.12), blurRadius: 18)],
          ),
          child: Column(
            children: [
              Icon(icon, size: 40, color: _pinkGlow),
              const SizedBox(height: 8),
              Text(title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(height: 6),
              Text(subtitle, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 12)),
              const SizedBox(height: 16),
              if (_currentIdea != null && _loveTab != 0) ...[
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(colors: [_redLove.withOpacity(0.15), _pinkDeep.withOpacity(0.1)]),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: _pink.withOpacity(0.4)),
                  ),
                  child: Text(_currentIdea!, style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.45, fontWeight: FontWeight.w500)),
                ),
                const SizedBox(height: 14),
              ],
              _loveActionButton(label: buttonLabel, onTap: onGenerate),
              const SizedBox(height: 8),
              Text(
                '${NgmyLoveContent.ideaCount} romantic ideas · saved on your device',
                style: TextStyle(color: Colors.white.withOpacity(0.35), fontSize: 10),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _mini3DHeart(double size) {
    return AnimatedBuilder(
      animation: _heartCtrl,
      builder: (context, _) {
        final t = _heartCtrl.value * math.pi * 2;
        return Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.002)
            ..rotateY(math.sin(t) * 0.35)
            ..rotateX(0.4),
          child: Icon(Icons.favorite_rounded, color: _redLove.withValues(alpha: 0.35 + math.sin(t) * 0.15), size: size),
        );
      },
    );
  }

  Widget _loveActionButton({required String label, required VoidCallback onTap}) {
    return AnimatedScale(
      scale: _pulseBtn ? 0.96 : 1.0,
      duration: const Duration(milliseconds: 120),
      child: SizedBox(
        width: double.infinity,
        child: DecoratedBox(
          decoration: BoxDecoration(
            gradient: const LinearGradient(colors: [_redLove, _pinkDeep, Color(0xFF9F1239)]),
            borderRadius: BorderRadius.circular(14),
            boxShadow: [BoxShadow(color: _redLove.withOpacity(0.45), blurRadius: 14, offset: const Offset(0, 6))],
          ),
          child: Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: BorderRadius.circular(14),
              onTap: onTap,
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 15),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text('✨', style: TextStyle(fontSize: 16)),
                    const SizedBox(width: 8),
                    Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _loveMatchResultCard() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 18, horizontal: 16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [_redLove, _pinkDeep, Color(0xFF9F1239)],
        ),
        border: Border.all(color: Colors.white.withOpacity(0.35)),
        boxShadow: [BoxShadow(color: _redLove.withOpacity(0.35), blurRadius: 14, offset: const Offset(0, 6))],
      ),
      child: Column(
        children: [
          const Text('💘', style: TextStyle(fontSize: 28)),
          const SizedBox(height: 6),
          Text(
            '$_matchScore%',
            style: const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.w900,
              fontSize: 44,
              height: 1,
              shadows: [Shadow(color: Colors.black26, blurRadius: 6)],
            ),
          ),
          const SizedBox(height: 4),
          const Text('Love Match', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14, letterSpacing: 0.8)),
          if (_matchMessage != null && _matchMessage!.isNotEmpty) ...[
            const SizedBox(height: 10),
            Text(
              _matchMessage!,
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withOpacity(0.92), fontSize: 13, height: 1.35, fontWeight: FontWeight.w600),
            ),
          ],
        ],
      ),
    );
  }

  Widget _loveMatchCalculator() {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(top: 8, right: 12, child: _mini3DHeart(42)),
        Positioned(top: 48, left: 8, child: _mini3DHeart(30)),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.fromLTRB(18, 22, 18, 20),
          decoration: BoxDecoration(
            color: _panel,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: _pink.withOpacity(0.18)),
          ),
          child: Column(
            children: [
              const Icon(Icons.favorite_rounded, size: 36, color: _pinkGlow),
              const SizedBox(height: 8),
              const Text('Love Match Calculator', textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 6),
              Text('Enter both names — your match shows here and in a love popup', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 12)),
              const SizedBox(height: 20),
              _nameField(controller: _yourNameC, hint: 'Your name', prefixIcon: Icons.person_rounded),
              const SizedBox(height: 12),
              _nameField(controller: _theirNameC, hint: 'Their name', prefixIcon: Icons.favorite_rounded),
              if (_matchScore != null) ...[
                const SizedBox(height: 18),
                _loveMatchResultCard(),
              ],
              const SizedBox(height: 18),
              _loveActionButton(label: 'Calculate Love Match', onTap: _calculateLoveMatch),
            ],
          ),
        ),
      ],
    );
  }

  Widget _nameField({required TextEditingController controller, required String hint, required IconData prefixIcon}) {
    return TextField(
      controller: controller,
      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
      textCapitalization: TextCapitalization.words,
      decoration: InputDecoration(
        hintText: hint,
        hintStyle: TextStyle(color: Colors.white.withOpacity(0.35)),
        prefixIcon: Icon(prefixIcon, color: _pinkGlow, size: 22),
        filled: true,
        fillColor: const Color(0xFF0A0F1C),
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: _pink.withOpacity(0.45), width: 1.2)),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: const BorderSide(color: _pinkGlow, width: 1.5)),
      ),
      onChanged: (_) {
        if (_matchScore != null) setState(() { _matchScore = null; _matchMessage = null; });
      },
    );
  }

  Future<void> _revealConfidenceQuote() async {
    if (!_confCanViewToday) {
      if (_confTodayQuote != null) {
        await showNgmyConfidencePopup(context, quote: _confTodayQuote!);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('One confidence boost per day — come back tomorrow! 💪')),
        );
      }
      return;
    }
    final idx = _confContentIndex;
    final quote = NgmyConfidenceQuotes.at(idx);
    final result = await NgmyFunGamesLimits.consumeConfidenceQuote(quote, idx, NgmyConfidenceQuotes.count);
    if (result == null || !mounted) return;
    final nextState = await NgmyFunGamesLimits.confidenceState(NgmyConfidenceQuotes.count);
    setState(() {
      _confCanViewToday = false;
      _confTodayQuote = result.quote;
      _confDisplayQuote = result.quote;
      _confContentIndex = nextState.contentIndex;
      _confCyclePosition = nextState.cyclePosition;
      _pulseBtn = true;
    });
    Future<void>.delayed(const Duration(milliseconds: 140), () {
      if (mounted) setState(() => _pulseBtn = false);
    });
    await showNgmyConfidencePopup(context, quote: result.quote);
  }

  Future<void> _revealRiddleAnswer() async {
    setState(() => _riddleAnswerVisible = true);
  }

  Future<void> _nextRiddle() async {
    if (_riddlesRemaining <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('15 riddles per day — your brain earned a rest! 🧠')),
      );
      return;
    }
    final next = await NgmyFunGamesLimits.advanceRiddle(NgmyRiddlesContent.count);
    if (next == null) {
      if (mounted) await _loadLimits();
      return;
    }
    setState(() {
      _riddleContentIndex = next;
      _riddlesRemaining = (_riddlesRemaining - 1).clamp(0, NgmyFunGamesLimits.riddlesDailyLimit);
      _riddleAnswerVisible = false;
      _pulseBtn = true;
    });
    Future<void>.delayed(const Duration(milliseconds: 140), () {
      if (mounted) setState(() => _pulseBtn = false);
    });
  }

  Future<void> _revealFortune() async {
    if (_fortuneRevealed && _currentFortune != null && _fortunesRemaining <= 0) {
      await showNgmyFortunePopup(context, fortune: _currentFortune!);
      return;
    }
    if (_fortunesRemaining <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('One fortune per day — come back tomorrow! 🔮')),
      );
      return;
    }
    final consumed = await NgmyFunGamesLimits.consumeFortune(NgmyFortuneContent.count);
    if (consumed == null) {
      if (mounted) await _loadLimits();
      return;
    }
    final item = NgmyFortuneContent.at(consumed.contentIndex);
    final nextState = await NgmyFunGamesLimits.fortuneState(NgmyFortuneContent.count);
    setState(() {
      _currentFortune = item;
      _fortuneRevealed = true;
      _fortuneContentIndex = nextState.contentIndex;
      _fortunesRemaining = nextState.remaining;
      _pulseBtn = true;
    });
    Future<void>.delayed(const Duration(milliseconds: 140), () {
      if (mounted) setState(() => _pulseBtn = false);
    });
    await showNgmyFortunePopup(context, fortune: item);
  }

  Widget _confidenceContent() {
    const accent = Color(0xFFF59E0B);
    const accentDeep = Color(0xFFB45309);
    final progress = NgmyConfidenceQuotes.count > 0 ? _confCyclePosition / NgmyConfidenceQuotes.count : 0.0;

    return Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(top: 10, right: 14, child: _mini3DIcon(Icons.bolt_rounded, accent, 38, _orbCtrl)),
        Positioned(bottom: 36, left: 8, child: _mini3DIcon(Icons.bolt_rounded, accent, 28, _orbCtrl)),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.fromLTRB(18, 22, 18, 20),
          decoration: BoxDecoration(
            color: _panel,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: accent.withOpacity(0.4)),
            boxShadow: [BoxShadow(color: accent.withOpacity(0.15), blurRadius: 18)],
          ),
          child: Column(
            children: [
              SizedBox(
                width: 120,
                height: 120,
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    SizedBox(
                      width: 120,
                      height: 120,
                      child: CircularProgressIndicator(
                        value: progress == 0 ? null : progress,
                        strokeWidth: 8,
                        backgroundColor: accent.withOpacity(0.15),
                        color: accent,
                      ),
                    ),
                    AnimatedBuilder(
                      animation: _orbCtrl,
                      builder: (context, _) {
                        final t = _orbCtrl.value * math.pi * 2;
                        return Transform(
                          alignment: Alignment.center,
                          transform: Matrix4.identity()
                            ..setEntry(3, 2, 0.003)
                            ..rotateY(math.sin(t) * 0.4),
                          child: const Text('💪', style: TextStyle(fontSize: 44)),
                        );
                      },
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 10),
              const Text('Confidence Circle', textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(height: 6),
              Text(
                _confCanViewToday ? 'One powerful quote per day — keep building your confidence circle.' : 'Today\'s boost unlocked — come back tomorrow for the next.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 12),
              ),
              const SizedBox(height: 16),
              if (_confDisplayQuote != null)
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(colors: [accent.withOpacity(0.2), accentDeep.withOpacity(0.12)]),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: accent.withOpacity(0.45)),
                  ),
                  child: Text(_confDisplayQuote!, style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.45, fontWeight: FontWeight.w600)),
                ),
              const SizedBox(height: 14),
              _accentActionButton(
                label: _confCanViewToday ? 'Reveal Today\'s Boost' : 'View Today\'s Boost Again',
                onTap: _revealConfidenceQuote,
                colors: const [Color(0xFFFBBF24), accent, accentDeep],
                glow: accent,
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _brainContent() {
    const accent = Color(0xFF8B5CF6);
    const accentDeep = Color(0xFF6D28D9);
    final riddle = NgmyRiddlesContent.at(_riddleContentIndex);
    final catLabel = riddle.category[0].toUpperCase() + riddle.category.substring(1);

    return Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(top: 8, right: 12, child: _mini3DIcon(Icons.psychology_alt_rounded, accent, 40, _brainCtrl)),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.fromLTRB(18, 22, 18, 20),
          decoration: BoxDecoration(
            color: _panel,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: accent.withOpacity(0.35)),
            boxShadow: [BoxShadow(color: accent.withOpacity(0.12), blurRadius: 18)],
          ),
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(color: accent.withOpacity(0.2), borderRadius: BorderRadius.circular(20), border: Border.all(color: accent.withOpacity(0.5))),
                    child: Text(catLabel, style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 11)),
                  ),
                ],
              ),
              const SizedBox(height: 12),
              const Text('Brain Teasers', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(height: 4),
              Text('$_riddlesRemaining of ${NgmyFunGamesLimits.riddlesDailyLimit} riddles left today', style: TextStyle(color: accent, fontSize: 12, fontWeight: FontWeight.w700)),
              const SizedBox(height: 14),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: const Color(0xFF0A0F1C),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: accent.withOpacity(0.35)),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text('RIDDLE', style: TextStyle(color: Color(0xFF94A3B8), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
                    const SizedBox(height: 8),
                    Text(riddle.question, style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.45, fontWeight: FontWeight.w600)),
                    if (_riddleAnswerVisible) ...[
                      const SizedBox(height: 14),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          gradient: LinearGradient(colors: [accent.withOpacity(0.25), accentDeep.withOpacity(0.15)]),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: accent.withOpacity(0.5)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text('ANSWER', style: TextStyle(color: Color(0xFFC4B5FD), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
                            const SizedBox(height: 6),
                            Text(riddle.answer, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                          ],
                        ),
                      ),
                    ],
                  ],
                ),
              ),
              const SizedBox(height: 14),
              if (!_riddleAnswerVisible)
                _accentActionButton(label: 'Reveal Answer', onTap: _revealRiddleAnswer, colors: const [accent, accentDeep], glow: accent)
              else
                _accentActionButton(label: 'Next Riddle →', onTap: _nextRiddle, colors: const [accent, accentDeep], glow: accent),
            ],
          ),
        ),
      ],
    );
  }

  Widget _fortuneContent() {
    const accent = Color(0xFF06B6D4);
    const accentDeep = Color(0xFF0891B2);
    final fortune = _currentFortune;

    return Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(top: 6, right: 10, child: _mini3DIcon(Icons.auto_awesome_rounded, accent, 36, _orbCtrl)),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.fromLTRB(18, 22, 18, 20),
          decoration: BoxDecoration(
            color: _panel,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: accent.withOpacity(0.35)),
            boxShadow: [BoxShadow(color: accent.withOpacity(0.12), blurRadius: 18)],
          ),
          child: Column(
            children: [
              AnimatedBuilder(
                animation: _orbCtrl,
                builder: (context, _) {
                  final t = _orbCtrl.value * math.pi * 2;
                  return Transform(
                    alignment: Alignment.center,
                    transform: Matrix4.identity()
                      ..setEntry(3, 2, 0.004)
                      ..rotateY(math.sin(t) * 0.55)
                      ..rotateX(0.3 + math.cos(t * 0.7) * 0.12),
                    child: Container(
                      width: 96,
                      height: 96,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: RadialGradient(colors: [Colors.white.withOpacity(0.85), accent, accentDeep.withOpacity(0.5)]),
                        boxShadow: [BoxShadow(color: accent.withOpacity(0.5), blurRadius: 20)],
                      ),
                      child: const Center(child: Text('🔮', style: TextStyle(fontSize: 42))),
                    ),
                  );
                },
              ),
              const SizedBox(height: 12),
              const Text('Fortune Crystal', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
              const SizedBox(height: 4),
              Text(
                _fortunesRemaining > 0 ? 'Your daily fortune is ready' : 'Come back tomorrow for a new fortune',
                style: TextStyle(color: accent, fontSize: 12, fontWeight: FontWeight.w700),
              ),
              const SizedBox(height: 14),
              if (_fortuneRevealed && fortune != null)
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(colors: [accent.withOpacity(0.18), accentDeep.withOpacity(0.1)]),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: accent.withOpacity(0.4)),
                  ),
                  child: Column(
                    children: [
                      Text(fortune.mood, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1)),
                      const SizedBox(height: 8),
                      Text(fortune.text, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.4, fontWeight: FontWeight.w600)),
                      const SizedBox(height: 10),
                      Text('Lucky: ${fortune.luckyNumbers.join(' · ')}', style: TextStyle(color: Colors.white.withOpacity(0.65), fontSize: 12, fontWeight: FontWeight.w700)),
                    ],
                  ),
                )
              else
                Text('Shake the crystal — tap below for your fortune.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 12)),
              const SizedBox(height: 14),
              _accentActionButton(
                label: _fortuneRevealed ? 'View Today\'s Fortune Again' : 'Reveal My Fortune',
                onTap: _revealFortune,
                colors: const [accent, accentDeep, Color(0xFF164E63)],
                glow: accent,
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _mini3DIcon(IconData icon, Color color, double size, AnimationController ctrl) {
    return AnimatedBuilder(
      animation: ctrl,
      builder: (context, _) {
        final t = ctrl.value * math.pi * 2;
        return Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.002)
            ..rotateY(math.sin(t) * 0.35)
            ..rotateX(0.35),
          child: Icon(icon, color: color.withValues(alpha: 0.35 + math.sin(t) * 0.15), size: size),
        );
      },
    );
  }

  Widget _accentActionButton({
    required String label,
    required VoidCallback onTap,
    required List<Color> colors,
    required Color glow,
  }) {
    return AnimatedScale(
      scale: _pulseBtn ? 0.96 : 1.0,
      duration: const Duration(milliseconds: 120),
      child: SizedBox(
        width: double.infinity,
        child: DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors),
            borderRadius: BorderRadius.circular(14),
            boxShadow: [BoxShadow(color: glow.withOpacity(0.45), blurRadius: 14, offset: const Offset(0, 6))],
          ),
          child: Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: BorderRadius.circular(14),
              onTap: onTap,
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 15),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text('✨', style: TextStyle(fontSize: 16)),
                    const SizedBox(width: 8),
                    Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _CatItem {
  final String label;
  final IconData icon;
  final String emoji;
  final Color color;
  const _CatItem(this.label, this.icon, this.emoji, this.color);
}

class _SubTab {
  final String label;
  final String emoji;
  final IconData icon;
  const _SubTab(this.label, this.emoji, this.icon);
}
