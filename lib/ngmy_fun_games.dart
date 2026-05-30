import 'package:flutter/material.dart';

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

class _NgmyFunGamesDialogState extends State<_NgmyFunGamesDialog> {
  static const _bg = Color(0xFF0B0E18);
  static const _panel = Color(0xFF12182A);
  static const _pink = Color(0xFFEC4899);
  static const _pinkDeep = Color(0xFFDB2777);
  static const _pinkGlow = Color(0xFFF472B6);

  int _category = 0; // 0 Love, 1 Confidence, 2 Brain, 3 Fortune
  int _loveTab = 0; // 0 Match, 1 Next, 2 Keep, 3 Date

  final _yourNameC = TextEditingController();
  final _theirNameC = TextEditingController();
  int? _matchScore;
  String? _matchMessage;

  @override
  void dispose() {
    _yourNameC.dispose();
    _theirNameC.dispose();
    super.dispose();
  }

  void _calculateLoveMatch() {
    final a = _yourNameC.text.trim();
    final b = _theirNameC.text.trim();
    if (a.isEmpty || b.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter both names to calculate your match.')),
      );
      return;
    }
    final score = _loveCompatibility(a, b);
    setState(() {
      _matchScore = score;
      _matchMessage = _loveMessage(score);
    });
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
              gradient: const LinearGradient(colors: [_pink, _pinkDeep], begin: Alignment.topLeft, end: Alignment.bottomRight),
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
                Text('Fun & Games', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 0.2)),
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

  Widget _categoryRow() {
    const items = [
      _CatItem('Love', '💕', Color(0xFFEC4899)),
      _CatItem('Confidence', '💪', Color(0xFFF59E0B)),
      _CatItem('Brain', '🧠', Color(0xFF8B5CF6)),
      _CatItem('Fortune', '🔮', Color(0xFF06B6D4)),
    ];
    return Row(
      children: List.generate(items.length, (i) {
        final item = items[i];
        final selected = _category == i;
        return Expanded(
          child: Padding(
            padding: EdgeInsets.only(left: i == 0 ? 0 : 4, right: i == items.length - 1 ? 0 : 4),
            child: GestureDetector(
              onTap: () => setState(() {
                _category = i;
                _matchScore = null;
                _matchMessage = null;
              }),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                padding: const EdgeInsets.symmetric(vertical: 10),
                decoration: BoxDecoration(
                  color: selected ? _panel : Colors.transparent,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(
                    color: selected ? Colors.white.withOpacity(0.22) : Colors.white.withOpacity(0.06),
                    width: selected ? 1.2 : 1,
                  ),
                ),
                child: Column(
                  children: [
                    Text(item.emoji, style: TextStyle(fontSize: 20, color: selected ? Colors.white : Colors.white38)),
                    const SizedBox(height: 4),
                    Text(
                      item.label,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: selected ? Colors.white : Colors.white38,
                        fontSize: 10,
                        fontWeight: FontWeight.w700,
                      ),
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
    const banners = [
      ('💕', 'Your Love Journey', _pink),
      ('💪', 'Build Your Confidence', const Color(0xFFF59E0B)),
      ('🧠', 'Train Your Brain', const Color(0xFF8B5CF6)),
      ('🔮', 'Discover Your Fortune', const Color(0xFF06B6D4)),
    ];
    final (emoji, title, color) = banners[_category];
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 10),
      decoration: BoxDecoration(
        color: color.withOpacity(0.06),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: color.withOpacity(0.55), width: 1.2),
        boxShadow: [BoxShadow(color: color.withOpacity(0.12), blurRadius: 12)],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(emoji, style: const TextStyle(fontSize: 16)),
          const SizedBox(width: 8),
          Text(title, style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 14, letterSpacing: 0.3)),
        ],
      ),
    );
  }

  Widget _loveSubTabs() {
    const tabs = [
      _SubTab('Match', '💘'),
      _SubTab('Next', '🌹'),
      _SubTab('Keep', '💞'),
      _SubTab('Date', '🌙'),
    ];
    return Row(
      children: List.generate(tabs.length, (i) {
        final tab = tabs[i];
        final selected = _loveTab == i;
        return Expanded(
          child: Padding(
            padding: EdgeInsets.only(left: i == 0 ? 0 : 3, right: i == tabs.length - 1 ? 0 : 3),
            child: GestureDetector(
              onTap: () => setState(() {
                _loveTab = i;
                _matchScore = null;
                _matchMessage = null;
              }),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                padding: const EdgeInsets.symmetric(vertical: 9),
                decoration: BoxDecoration(
                  gradient: selected
                      ? const LinearGradient(colors: [_pink, _pinkDeep], begin: Alignment.topLeft, end: Alignment.bottomRight)
                      : null,
                  color: selected ? null : _panel.withOpacity(0.6),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: selected ? _pinkGlow.withOpacity(0.5) : Colors.white.withOpacity(0.06)),
                  boxShadow: selected ? [BoxShadow(color: _pink.withOpacity(0.35), blurRadius: 10, offset: const Offset(0, 4))] : null,
                ),
                child: Column(
                  children: [
                    Text(tab.emoji, style: TextStyle(fontSize: 16, color: selected ? Colors.white : Colors.white38)),
                    const SizedBox(height: 2),
                    Text(
                      tab.label,
                      style: TextStyle(
                        color: selected ? Colors.white : Colors.white38,
                        fontSize: 10,
                        fontWeight: FontWeight.w800,
                      ),
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

  Widget _loveContent() {
    if (_loveTab == 0) return _loveMatchCalculator();
    const placeholders = [
      ('Next Step', '🌹', 'Discover what comes next in your love story.'),
      ('Keep the Spark', '💞', 'Tips to nurture and protect your connection.'),
      ('Date Ideas', '🌙', 'Romantic plans tailored for memorable evenings.'),
    ];
    final (title, emoji, subtitle) = placeholders[_loveTab - 1];
    return _comingSoonCard(title: title, emoji: emoji, subtitle: subtitle, accent: _pink);
  }

  Widget _loveMatchCalculator() {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(top: 8, right: 12, child: _floatingHeart(14, 0.35)),
        Positioned(top: 48, left: 8, child: _floatingHeart(10, 0.25)),
        Positioned(bottom: 72, right: 20, child: _floatingHeart(12, 0.3)),
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
              const Text(
                'Love Match Calculator',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
              ),
              const SizedBox(height: 6),
              Text(
                'Enter your names to discover your compatibility',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 12, fontWeight: FontWeight.w500),
              ),
              const SizedBox(height: 20),
              _nameField(controller: _yourNameC, hint: 'Your name', icon: Icons.person_outline_rounded),
              const SizedBox(height: 12),
              _nameField(controller: _theirNameC, hint: 'Their name', icon: Icons.favorite_border_rounded),
              if (_matchScore != null) ...[
                const SizedBox(height: 18),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [_pink.withOpacity(0.18), _pinkDeep.withOpacity(0.12)],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: _pink.withOpacity(0.45)),
                  ),
                  child: Column(
                    children: [
                      Text('$_matchScore%', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 36)),
                      const SizedBox(height: 4),
                      Text(
                        _matchMessage ?? '',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white.withOpacity(0.85), fontSize: 13, fontWeight: FontWeight.w600),
                      ),
                    ],
                  ),
                ),
              ],
              const SizedBox(height: 18),
              SizedBox(
                width: double.infinity,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [Color(0xFFF472B6), _pinkDeep, Color(0xFF9D174D)],
                      begin: Alignment.centerLeft,
                      end: Alignment.centerRight,
                    ),
                    borderRadius: BorderRadius.circular(14),
                    boxShadow: [BoxShadow(color: _pink.withOpacity(0.4), blurRadius: 14, offset: const Offset(0, 6))],
                  ),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      borderRadius: BorderRadius.circular(14),
                      onTap: _calculateLoveMatch,
                      child: const Padding(
                        padding: EdgeInsets.symmetric(vertical: 15),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text('✨', style: TextStyle(fontSize: 14)),
                            SizedBox(width: 8),
                            Text(
                              'Calculate Love Match',
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15, letterSpacing: 0.2),
                            ),
                            SizedBox(width: 8),
                            Text('✨', style: TextStyle(fontSize: 14)),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
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
        hintStyle: TextStyle(color: Colors.white.withOpacity(0.35), fontWeight: FontWeight.w500),
        prefixIcon: Icon(icon, color: _pinkGlow, size: 20),
        filled: true,
        fillColor: const Color(0xFF0A0F1C),
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: BorderSide(color: _pink.withOpacity(0.45), width: 1.2),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: const BorderSide(color: _pinkGlow, width: 1.5),
        ),
      ),
      onChanged: (_) {
        if (_matchScore != null) setState(() { _matchScore = null; _matchMessage = null; });
      },
    );
  }

  Widget _floatingHeart(double size, double opacity) {
    return Opacity(
      opacity: opacity,
      child: Text('💕', style: TextStyle(fontSize: size)),
    );
  }

  Widget _placeholderCategory() {
    const data = [
      ('Confidence Boost', '💪', 'Daily affirmations and power challenges coming soon.', Color(0xFFF59E0B)),
      ('Brain Games', '🧠', 'Puzzles and quick quizzes to sharpen your mind.', Color(0xFF8B5CF6)),
      ('Fortune Teller', '🔮', 'Daily luck readings and cosmic insights.', Color(0xFF06B6D4)),
    ];
    final (title, emoji, subtitle, accent) = data[_category - 1];
    return _comingSoonCard(title: title, emoji: emoji, subtitle: subtitle, accent: accent);
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
          Text(
            subtitle,
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 13, fontWeight: FontWeight.w500),
          ),
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
            decoration: BoxDecoration(
              color: accent.withOpacity(0.12),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: accent.withOpacity(0.35)),
            ),
            child: Text('Coming soon', style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 12)),
          ),
        ],
      ),
    );
  }
}

class _CatItem {
  final String label;
  final String emoji;
  final Color color;
  const _CatItem(this.label, this.emoji, this.color);
}

class _SubTab {
  final String label;
  final String emoji;
  const _SubTab(this.label, this.emoji);
}
