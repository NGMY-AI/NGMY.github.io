import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_fun_games_cache.dart';
import 'ngmy_love_content.dart';
import 'ngmy_love_popups.dart';

/// Fun & Games — Entertainment Hub (opened from the **M** in NGMY Services).
void showNgmyFunGamesDialog(BuildContext context) {
  showDialog<void>(
    context: context,
    barrierColor: Colors.black.withOpacity(0.82),
    builder: (ctx) => const _NgmyFunGamesDialog(),
  );
}

class _NgmyFunGamesDialog extends StatefulWidget {
  const _NgmyFunGamesDialog();

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

  late final AnimationController _heartCtrl;
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
    _loadCache();
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
                    ] else
                      _placeholderCategory(),
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
            child: const Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 20),
          ),
          const SizedBox(width: 12),
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Fun & Games', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
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
      width: 32,
      height: 32,
      decoration: BoxDecoration(
        gradient: selected
            ? LinearGradient(colors: [item.color, item.color.withValues(alpha: 0.65)])
            : null,
        color: selected ? null : item.color.withValues(alpha: 0.15),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: selected ? Colors.white38 : Colors.white12),
      ),
      child: Icon(item.icon, color: selected ? Colors.white : item.color, size: 18),
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
                });
                NgmyFunGamesCache.saveCategory(i);
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
                    Text(item.emoji, style: const TextStyle(fontSize: 12)),
                    const SizedBox(height: 2),
                    Text(
                      item.label,
                      textAlign: TextAlign.center,
                      style: TextStyle(color: selected ? Colors.white : Colors.white38, fontSize: 9, fontWeight: FontWeight.w700),
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
          Icon(item.icon, color: item.color, size: 18),
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
                      Icon(tab.icon, size: 16, color: selected ? Colors.white : Colors.white38),
                      Text(tab.emoji, style: TextStyle(fontSize: 12, color: selected ? Colors.white : Colors.white38)),
                      Text(tab.label, style: TextStyle(color: selected ? Colors.white : Colors.white38, fontSize: 10, fontWeight: FontWeight.w800)),
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
          emoji: '🌹',
          title: 'What happens next?',
          subtitle: 'You just met — here is a romantic first-step idea.',
          buttonLabel: 'Show me what\'s next',
          onGenerate: () => _pickIdea(tab: 1),
        );
      case 2:
        return _loveIdeaPanel(
          emoji: '💞',
          title: 'Keep the connection growing',
          subtitle: 'Tap for a relationship tip — what to do after the first spark.',
          buttonLabel: 'Get relationship tip',
          onGenerate: () => _pickIdea(tab: 2),
        );
      case 3:
        return _loveIdeaPanel(
          emoji: '🌙',
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
    required String emoji,
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
              Text(emoji, style: const TextStyle(fontSize: 36)),
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
                    const Icon(Icons.auto_awesome, color: Colors.white, size: 18),
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
              const Text('💘', style: TextStyle(fontSize: 32)),
              const SizedBox(height: 8),
              const Text('Love Match Calculator', textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 6),
              Text('Enter both names — your match shows here and in a love popup', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 12)),
              const SizedBox(height: 20),
              _nameField(controller: _yourNameC, hint: 'Your name', icon: Icons.person_outline_rounded),
              const SizedBox(height: 12),
              _nameField(controller: _theirNameC, hint: 'Their name', icon: Icons.favorite_border_rounded),
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

  Widget _nameField({required TextEditingController controller, required String hint, required IconData icon}) {
    return TextField(
      controller: controller,
      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
      textCapitalization: TextCapitalization.words,
      decoration: InputDecoration(
        hintText: hint,
        hintStyle: TextStyle(color: Colors.white.withOpacity(0.35)),
        prefixIcon: Icon(icon, color: _pinkGlow, size: 20),
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

  Widget _placeholderCategory() {
    final item = _categories[_category];
    return _comingSoonCard(title: '${item.label} Zone', emoji: item.emoji, subtitle: 'More games and challenges coming soon.', accent: item.color);
  }

  Widget _comingSoonCard({required String title, required String emoji, required String subtitle, required Color accent}) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(18, 28, 18, 28),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: accent.withOpacity(0.22)),
      ),
      child: Column(
        children: [
          Text(emoji, style: const TextStyle(fontSize: 40)),
          const SizedBox(height: 12),
          Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
          const SizedBox(height: 8),
          Text(subtitle, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 13)),
        ],
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
