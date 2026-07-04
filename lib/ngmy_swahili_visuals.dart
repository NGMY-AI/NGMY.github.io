import 'package:flutter/material.dart';

/// Visual cue for a Swahili/English lesson word — picture + emoji fallback.
class SwahiliWordVisual {
  const SwahiliWordVisual({
    required this.emoji,
    this.imageUrl,
    this.icon,
    this.gradient = const [Color(0xFFE0F2FE), Color(0xFFBAE6FD)],
    this.label,
  });

  final String emoji;
  final String? imageUrl;
  final IconData? icon;
  final List<Color> gradient;
  final String? label;
}

class _VisualRule {
  const _VisualRule(this.keywords, this.visual);

  final List<String> keywords;
  final SwahiliWordVisual visual;
}

const _kRules = <_VisualRule>[
  _VisualRule(['where are you going', 'unaenda wapi'], SwahiliWordVisual(emoji: '🚶', imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['going back home', 'ninarudi nyumbani', 'nyumbani', 'at home'], SwahiliWordVisual(emoji: '🏠', imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop', gradient: [Color(0xFFFEF3C7), Color(0xFFFDE68A)])),
  _VisualRule(['at work', 'kazini', 'working', 'kazi', 'nafanya kazi'], SwahiliWordVisual(emoji: '💼', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
  _VisualRule(['at school', 'shuleni', 'shule', 'student', 'mwanafunzi'], SwahiliWordVisual(emoji: '🏫', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['lot to do', 'shughuli', 'busy'], SwahiliWordVisual(emoji: '📋', imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop', gradient: [Color(0xFFFCE7F3), Color(0xFFFBCFE8)])),
  _VisualRule(['rest tomorrow', 'pumzika', 'tired', 'choka', 'nimechoka', 'sleep'], SwahiliWordVisual(emoji: '😴', imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop', gradient: [Color(0xFFEDE9FE), Color(0xFFC4B5FD)])),
  _VisualRule(['important', 'muhimu'], SwahiliWordVisual(emoji: '⭐', imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop', gradient: [Color(0xFFFEF9C3), Color(0xFFFDE047)])),
  _VisualRule(['forget', 'sahau', 'usisahau'], SwahiliWordVisual(emoji: '📝', imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop', gradient: [Color(0xFFFFEDD5), Color(0xFFFDBA74)])),
  _VisualRule(['remember', 'kumbuka', 'nimekumbuka'], SwahiliWordVisual(emoji: '💡', imageUrl: 'https://images.unsplash.com/photo-1516328768425-f75fbb26e079?w=400&h=300&fit=crop', gradient: [Color(0xFFFEF3C7), Color(0xFFFBBF24)])),
  _VisualRule(['good idea', 'wazo zuri', 'wazo', 'idea'], SwahiliWordVisual(emoji: '💭', imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop', gradient: [Color(0xFFDBEAFE), Color(0xFF60A5FA)])),
  _VisualRule(['happy', 'furaha'], SwahiliWordVisual(emoji: '😊', imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop', gradient: [Color(0xFFFEF9C3), Color(0xFFFACC15)])),
  _VisualRule(['doctor', 'daktari'], SwahiliWordVisual(emoji: '👨‍⚕️', imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['friend', 'rafiki'], SwahiliWordVisual(emoji: '👫', imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop', gradient: [Color(0xFFFCE7F3), Color(0xFFF9A8D4)])),
  _VisualRule(['phone', 'simu'], SwahiliWordVisual(emoji: '📱', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop', gradient: [Color(0xFFE0E7FF), Color(0xFFA5B4FC)])),
  _VisualRule(['car', 'gari'], SwahiliWordVisual(emoji: '🚗', imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop', gradient: [Color(0xFFFEE2E2), Color(0xFFFCA5A5)])),
  _VisualRule(['child', 'mtoto'], SwahiliWordVisual(emoji: '👶', imageUrl: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop', gradient: [Color(0xFFFCE7F3), Color(0xFFF9A8D4)])),
  _VisualRule(['egg', 'yai'], SwahiliWordVisual(emoji: '🥚', gradient: [Color(0xFFFFFBEB), Color(0xFFFDE68A)])),
  _VisualRule(['house', 'nyumba'], SwahiliWordVisual(emoji: '🏠', imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop', gradient: [Color(0xFFFEF3C7), Color(0xFFFDE68A)])),
  _VisualRule(['fruit', 'matunda', 'tunda'], SwahiliWordVisual(emoji: '🍎', imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['water', 'maji'], SwahiliWordVisual(emoji: '💧', imageUrl: 'https://images.unsplash.com/photo-1548839140-29a7492991ef?w=400&h=300&fit=crop', gradient: [Color(0xFFDBEAFE), Color(0xFF7DD3FC)])),
  _VisualRule(['food', 'chakula', 'cook', 'pika'], SwahiliWordVisual(emoji: '🍽️', imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', gradient: [Color(0xFFFFEDD5), Color(0xFFFDBA74)])),
  _VisualRule(['help', 'msaada', 'saidia', 'kusaidia'], SwahiliWordVisual(emoji: '🤝', imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['question', 'swali'], SwahiliWordVisual(emoji: '❓', gradient: [Color(0xFFE0E7FF), Color(0xFFC7D2FE)])),
  _VisualRule(['problem', 'tatizo'], SwahiliWordVisual(emoji: '⚠️', gradient: [Color(0xFFFEE2E2), Color(0xFFFCA5A5)])),
  _VisualRule(['news', 'habari'], SwahiliWordVisual(emoji: '📰', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
  _VisualRule(['plan', 'mpango'], SwahiliWordVisual(emoji: '🗺️', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['sick', 'umwa', 'ninaumwa'], SwahiliWordVisual(emoji: '🤒', gradient: [Color(0xFFFEE2E2), Color(0xFFFCA5A5)])),
  _VisualRule(['here', 'hapa', 'tuko hapa'], SwahiliWordVisual(emoji: '📍', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['married', 'nimeoa'], SwahiliWordVisual(emoji: '💍', gradient: [Color(0xFFFCE7F3), Color(0xFFF9A8D4)])),
  _VisualRule(['beautiful', 'mrembo'], SwahiliWordVisual(emoji: '✨', gradient: [Color(0xFFFCE7F3), Color(0xFFF9A8D4)])),
  _VisualRule(['handsome', 'mtanashati'], SwahiliWordVisual(emoji: '😎', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['tall', 'mrefu'], SwahiliWordVisual(emoji: '🧍', gradient: [Color(0xFFE0F2FE), Color(0xFF7DD3FC)])),
  _VisualRule(['short', 'mfupi'], SwahiliWordVisual(emoji: '🙋', gradient: [Color(0xFFFEF3C7), Color(0xFFFDE68A)])),
  _VisualRule(['famous', 'maarufu'], SwahiliWordVisual(emoji: '🌟', gradient: [Color(0xFFFEF9C3), Color(0xFFFDE047)])),
  _VisualRule(['please', 'tafadhali'], SwahiliWordVisual(emoji: '🙏', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['thank', 'asante'], SwahiliWordVisual(emoji: '🙏', gradient: [Color(0xFFFEF3C7), Color(0xFFFDE68A)])),
  _VisualRule(['welcome', 'karibu'], SwahiliWordVisual(emoji: '👋', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['coming', 'ninakuja', 'kuja'], SwahiliWordVisual(emoji: '🏃', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['wait', 'ngoja'], SwahiliWordVisual(emoji: '⏳', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
  _VisualRule(['hurry', 'harakisha'], SwahiliWordVisual(emoji: '⚡', gradient: [Color(0xFFFEF9C3), Color(0xFFFDE047)])),
  _VisualRule(['minute', 'dakika'], SwahiliWordVisual(emoji: '⏱️', gradient: [Color(0xFFE0E7FF), Color(0xFFC7D2FE)])),
  _VisualRule(['because', 'kwasababu'], SwahiliWordVisual(emoji: '🔗', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
  _VisualRule(['okay', 'sawa'], SwahiliWordVisual(emoji: '👍', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(["can't go", 'siwezi'], SwahiliWordVisual(emoji: '🚫', gradient: [Color(0xFFFEE2E2), Color(0xFFFCA5A5)])),
  _VisualRule(['father', 'baba'], SwahiliWordVisual(emoji: '👨', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['mother', 'mama'], SwahiliWordVisual(emoji: '👩', gradient: [Color(0xFFFCE7F3), Color(0xFFF9A8D4)])),
  _VisualRule(['brother', 'kaka'], SwahiliWordVisual(emoji: '👦', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['sister', 'dada'], SwahiliWordVisual(emoji: '👧', gradient: [Color(0xFFFCE7F3), Color(0xFFF9A8D4)])),
  _VisualRule(['grandmother', 'bibi'], SwahiliWordVisual(emoji: '👵', gradient: [Color(0xFFFEF3C7), Color(0xFFFDE68A)])),
  _VisualRule(['grandfather', 'babu'], SwahiliWordVisual(emoji: '👴', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
  _VisualRule(['love', 'penda', 'ninakupenda'], SwahiliWordVisual(emoji: '❤️', gradient: [Color(0xFFFEE2E2), Color(0xFFFCA5A5)])),
  _VisualRule(['goodbye', 'kwaheri'], SwahiliWordVisual(emoji: '👋', gradient: [Color(0xFFE0E7FF), Color(0xFFC7D2FE)])),
  _VisualRule(['name', 'jina'], SwahiliWordVisual(emoji: '🪪', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['yes', 'ndiyo'], SwahiliWordVisual(emoji: '✅', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['no', 'hapana'], SwahiliWordVisual(emoji: '❌', gradient: [Color(0xFFFEE2E2), Color(0xFFFCA5A5)])),
  _VisualRule(['today', 'leo'], SwahiliWordVisual(emoji: '☀️', gradient: [Color(0xFFFEF9C3), Color(0xFFFDE047)])),
  _VisualRule(['tomorrow', 'kesho'], SwahiliWordVisual(emoji: '🌅', gradient: [Color(0xFFFFEDD5), Color(0xFFFDBA74)])),
  _VisualRule(['now', 'sasa'], SwahiliWordVisual(emoji: '⏰', gradient: [Color(0xFFE0E7FF), Color(0xFFC7D2FE)])),
  _VisualRule(['morning', 'asubuhi'], SwahiliWordVisual(emoji: '🌄', gradient: [Color(0xFFFEF9C3), Color(0xFFFDE047)])),
  _VisualRule(['evening', 'jioni'], SwahiliWordVisual(emoji: '🌆', gradient: [Color(0xFFFFEDD5), Color(0xFFFDBA74)])),
  _VisualRule(['night', 'usiku'], SwahiliWordVisual(emoji: '🌙', gradient: [Color(0xFFEDE9FE), Color(0xFFC4B5FD)])),
  _VisualRule(['eat', 'kula', 'ninakula'], SwahiliWordVisual(emoji: '🍴', gradient: [Color(0xFFFFEDD5), Color(0xFFFDBA74)])),
  _VisualRule(['drink', 'kunywa'], SwahiliWordVisual(emoji: '🥤', gradient: [Color(0xFFDBEAFE), Color(0xFF7DD3FC)])),
  _VisualRule(['read', 'soma', 'ninajifunza', 'learning'], SwahiliWordVisual(emoji: '📖', imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['speak', 'ongea', 'kiswahili'], SwahiliWordVisual(emoji: '🗣️', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['listen', 'sikiliza'], SwahiliWordVisual(emoji: '👂', gradient: [Color(0xFFE0E7FF), Color(0xFFC7D2FE)])),
  _VisualRule(['understand', 'elewa'], SwahiliWordVisual(emoji: '💡', gradient: [Color(0xFFFEF9C3), Color(0xFFFDE047)])),
  _VisualRule(['play', 'cheza'], SwahiliWordVisual(emoji: '⚽', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['where', 'wapi'], SwahiliWordVisual(emoji: '🗺️', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['when', 'lini'], SwahiliWordVisual(emoji: '📅', gradient: [Color(0xFFE0E7FF), Color(0xFFC7D2FE)])),
  _VisualRule(['who', 'nani'], SwahiliWordVisual(emoji: '👤', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
  _VisualRule(['what', 'nini'], SwahiliWordVisual(emoji: '❔', gradient: [Color(0xFFFEF3C7), Color(0xFFFDE68A)])),
  _VisualRule(['hot', 'moto'], SwahiliWordVisual(emoji: '🔥', gradient: [Color(0xFFFEE2E2), Color(0xFFFCA5A5)])),
  _VisualRule(['cold', 'baridi'], SwahiliWordVisual(emoji: '🧊', gradient: [Color(0xFFDBEAFE), Color(0xFF7DD3FC)])),
  _VisualRule(['big', 'kubwa'], SwahiliWordVisual(emoji: '🐘', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
  _VisualRule(['small', 'ndogo'], SwahiliWordVisual(emoji: '🐭', gradient: [Color(0xFFFEF3C7), Color(0xFFFDE68A)])),
  _VisualRule(['bird', 'ndege'], SwahiliWordVisual(emoji: '🐦', imageUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&h=300&fit=crop', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['open', 'fungua'], SwahiliWordVisual(emoji: '🚪', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['close', 'funga'], SwahiliWordVisual(emoji: '🚪', gradient: [Color(0xFFFEE2E2), Color(0xFFFCA5A5)])),
  _VisualRule(['strong', 'nguvu'], SwahiliWordVisual(emoji: '💪', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['weak', 'dhaifu'], SwahiliWordVisual(emoji: '😔', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
  _VisualRule(['mimi', ' i '], SwahiliWordVisual(emoji: '🙋', gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)])),
  _VisualRule(['wewe', 'ninyi', 'you'], SwahiliWordVisual(emoji: '👉', gradient: [Color(0xFFFCE7F3), Color(0xFFF9A8D4)])),
  _VisualRule(['sisi', ' we '], SwahiliWordVisual(emoji: '👥', gradient: [Color(0xFFDCFCE7), Color(0xFF86EFAC)])),
  _VisualRule(['wana', 'they'], SwahiliWordVisual(emoji: '👨‍👩‍👧', gradient: [Color(0xFFE0E7FF), Color(0xFFC7D2FE)])),
  _VisualRule(['yeye', 'he', 'she'], SwahiliWordVisual(emoji: '🧑', gradient: [Color(0xFFE2E8F0), Color(0xFFCBD5E1)])),
];

const _kDefaultVisual = SwahiliWordVisual(
  emoji: '📚',
  gradient: [Color(0xFFDBEAFE), Color(0xFF93C5FD)],
);

SwahiliWordVisual resolveSwahiliWordVisual({required String swahili, required String english}) {
  final hay = '${swahili.toLowerCase()} ${english.toLowerCase()}';
  for (final rule in _kRules) {
    for (final kw in rule.keywords) {
      if (hay.contains(kw)) return rule.visual;
    }
  }
  return _kDefaultVisual;
}

/// Compact picture tile for list rows (screenshot-style, image on the right).
class SwahiliWordVisualTile extends StatelessWidget {
  const SwahiliWordVisualTile({
    super.key,
    required this.visual,
    this.size = 72,
    this.compact = false,
  });

  final SwahiliWordVisual visual;
  final double size;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(compact ? 12 : 16),
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: visual.gradient),
          border: Border.all(color: Colors.white.withValues(alpha: 0.65), width: 1.2),
          boxShadow: [
            BoxShadow(color: visual.gradient.last.withValues(alpha: 0.35), blurRadius: 8, offset: const Offset(0, 3)),
          ],
        ),
        child: _VisualContent(visual: visual, emojiSize: compact ? 28 : 34),
      ),
    );
  }
}

/// Large hero picture for the word study screen.
class SwahiliWordVisualHero extends StatelessWidget {
  const SwahiliWordVisualHero({super.key, required this.visual, required this.english});

  final SwahiliWordVisual visual;
  final String english;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: Container(
        width: double.infinity,
        height: 180,
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: visual.gradient),
          border: Border.all(color: Colors.white.withValues(alpha: 0.5)),
        ),
        child: Stack(
          fit: StackFit.expand,
          children: [
            _VisualContent(visual: visual, emojiSize: 64, fill: true),
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [Colors.transparent, Colors.black.withValues(alpha: 0.45)],
                  ),
                ),
                child: Text(
                  english,
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15, shadows: [Shadow(blurRadius: 6, color: Colors.black45)]),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _VisualContent extends StatelessWidget {
  const _VisualContent({required this.visual, required this.emojiSize, this.fill = false});

  final SwahiliWordVisual visual;
  final double emojiSize;
  final bool fill;

  @override
  Widget build(BuildContext context) {
    if (visual.imageUrl != null && visual.imageUrl!.isNotEmpty) {
      return Image.network(
        visual.imageUrl!,
        fit: BoxFit.cover,
        width: fill ? double.infinity : null,
        height: fill ? double.infinity : null,
        loadingBuilder: (_, child, progress) {
          if (progress == null) return child;
          return Center(child: Text(visual.emoji, style: TextStyle(fontSize: emojiSize)));
        },
        errorBuilder: (_, __, ___) => Center(child: Text(visual.emoji, style: TextStyle(fontSize: emojiSize))),
      );
    }
    return Center(child: Text(visual.emoji, style: TextStyle(fontSize: emojiSize)));
  }
}

/// Number badge like social-media vocabulary posts.
class SwahiliLessonNumberBadge extends StatelessWidget {
  const SwahiliLessonNumberBadge({super.key, required this.number, this.color = const Color(0xFF7C3AED)});

  final int number;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 28,
      height: 28,
      alignment: Alignment.center,
      decoration: BoxDecoration(color: color, shape: BoxShape.circle),
      child: Text(
        '$number',
        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13),
      ),
    );
  }
}
