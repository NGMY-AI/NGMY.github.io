import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_communicate_payments.dart';
import 'ngmy_communicate_storage.dart';
import 'ngmy_nav.dart';
import 'ngmy_platform_graphics.dart';
import 'ngmy_voice_input.dart';

/// All admin-selectable companion roles.
const kNgmyCommunicateRoles = <String, String>{
  'companion': 'Companion',
  'romantic': 'Romantic',
  'friend': 'Friend',
  'therapist': 'Therapist',
  'teacher': 'Teacher',
  'lawyer': 'Lawyer',
  'financial_advisor': 'Financial Advisor',
  'pastor': 'Pastor',
  'doctor': 'Doctor',
  'counselor': 'Counselor',
  'mentor': 'Mentor',
  'career_coach': 'Career Coach',
  'fitness_coach': 'Fitness Coach',
  'life_coach': 'Life Coach',
  'translator': 'Translator',
};

String ngmyCommunicateNormalizeRole(String raw) {
  final r = raw.toLowerCase().trim();
  return kNgmyCommunicateRoles.containsKey(r) ? r : 'companion';
}

String ngmyCommunicateRoleLabel(String role) => kNgmyCommunicateRoles[ngmyCommunicateNormalizeRole(role)] ?? 'Companion';

/// Pre-cache companion avatars from config (call after settings hydrate).
Future<void> ngmyWarmCommunicateAvatarsFromConfig(dynamic config) async {
  final raw = (config as dynamic).communicateProfiles;
  if (raw is List) await NgmyCommunicateAvatarCache.cacheAllProfiles(raw);
}

bool ngmyUserRequestedChatImage(String text) {
  final t = text.toLowerCase().trim();
  if (t.isEmpty) return false;
  return RegExp(
    r'\b(pic|picture|photo|selfie|snap|image|portrait|draw|paint|generate|created?|make|send)\b',
    caseSensitive: false,
  ).hasMatch(t) ||
      RegExp(r'\b(send|show|make|create)\s+(me\s+)?(a\s+)?(pic|photo|picture|selfie|image)\b', caseSensitive: false).hasMatch(t) ||
      RegExp(r'\bcreate\s+(an?\s+)?image\b', caseSensitive: false).hasMatch(t);
}

bool ngmyCommunicateRoleAllowsChatImages(String role) => ngmyCommunicateNormalizeRole(role) == 'romantic';

/// Users can attach homework / worksheet photos for these roles.
bool ngmyCommunicateRoleAllowsUserPhotoUpload(String role) {
  switch (ngmyCommunicateNormalizeRole(role)) {
    case 'teacher':
    case 'mentor':
    case 'career_coach':
    case 'counselor':
      return true;
    default:
      return false;
  }
}

bool ngmyUserWantsStraightAnswers(String text) {
  final t = text.toLowerCase();
  return RegExp(r'\b(just\s+)?(give|tell)\s+me\s+(the\s+)?answers?\b').hasMatch(t) ||
      RegExp(r'\banswers?\s+only\b').hasMatch(t) ||
      RegExp(r'\bno\s+explanation\b').hasMatch(t) ||
      RegExp(r'\bstraight\s+answers?\b').hasMatch(t);
}

bool ngmyUserWantsExplanation(String text) {
  final t = text.toLowerCase();
  return RegExp(r'\bexplain\b').hasMatch(t) ||
      RegExp(r'\bstep\s+by\s+step\b').hasMatch(t) ||
      RegExp(r'\bwalk\s+me\s+through\b').hasMatch(t) ||
      RegExp(r'\bhelp\s+me\s+understand\b').hasMatch(t) ||
      RegExp(r'\bsimpler\b').hasMatch(t) ||
      RegExp(r'\bdifferent\s+way\b').hasMatch(t);
}

bool ngmyCommunicateRoleIsRomantic(String role) {
  final r = ngmyCommunicateNormalizeRole(role);
  return r == 'romantic' || r == 'companion' || r == 'friend';
}

class NgmyCommunicateProfile {
  final String id;
  final String name;
  final String gender;
  final String personality;
  final String bio;
  final String emoji;
  final String avatarUrl;
  final String role;
  final bool active;

  const NgmyCommunicateProfile({
    required this.id,
    required this.name,
    required this.gender,
    required this.personality,
    this.bio = '',
    this.emoji = '💬',
    this.avatarUrl = '',
    this.role = 'companion',
    this.active = true,
  });

  factory NgmyCommunicateProfile.fromMap(Map<String, dynamic> m) {
    final g = (m['gender'] ?? 'female').toString().toLowerCase();
    return NgmyCommunicateProfile(
      id: (m['id'] ?? '').toString(),
      name: (m['name'] ?? 'Friend').toString(),
      gender: g == 'male' ? 'male' : 'female',
      personality: (m['personality'] ?? '').toString(),
      bio: (m['bio'] ?? '').toString(),
      emoji: (m['emoji'] ?? (g == 'male' ? '👨' : '👩')).toString(),
      avatarUrl: (m['avatarUrl'] ?? m['avatar_url'] ?? '').toString(),
      role: ngmyCommunicateNormalizeRole((m['role'] ?? 'companion').toString()),
      active: m['active'] != false,
    );
  }

  Map<String, dynamic> toMap() => {
        'id': id,
        'name': name,
        'gender': gender,
        'personality': personality,
        'bio': bio,
        'emoji': emoji,
        'avatarUrl': avatarUrl,
        'role': role,
        'active': active,
      };

  String get genderLabel => gender == 'male' ? 'Guy' : 'Girl';

  String? get roleBadgeLabel {
    final label = ngmyCommunicateRoleLabel(role);
    if (role == 'companion') return null;
    return label;
  }

  String systemPrompt(
    List<Map<String, dynamic>> memory, {
    required String chatterEmail,
    bool chatterIsBoss = false,
    Map<String, String>? exclusivePartner,
    String translatorNativeLang = '',
    String translatorLearningLang = '',
  }) {
    final vibe = personality.trim().isEmpty ? _defaultPersonalityForRole() : personality.trim();
    final userMsgs = memory.where((m) => m['role'] == 'user').length;
    final isEarly = userMsgs <= 6;
    final allText = memory.map((m) => (m['text'] ?? '').toString().toLowerCase()).join(' ');
    final relationshipVibe = RegExp(
      r'\b(boyfriend|girlfriend|dating|together|love you|miss you|my man|my girl|official|exclusive)\b',
    ).hasMatch(allText);
    final intimateVibe = RegExp(r'\b(sex|nude|naked|horny|fuck|dick|pussy|bed|touch|wet|ride)\b').hasMatch(allText);
    final email = chatterEmail.toLowerCase().trim();
    final partnerEmail = exclusivePartner?['email']?.toLowerCase().trim() ?? '';
    final partnerName = exclusivePartner?['name']?.trim() ?? '';
    final isMyPartner = partnerEmail.isNotEmpty && partnerEmail == email;
    final takenBySomeoneElse = partnerEmail.isNotEmpty && !isMyPartner;

    DateTime? prevUserAt;
    var skippedLatest = false;
    for (var i = memory.length - 1; i >= 0; i--) {
      if (memory[i]['role'] != 'user') continue;
      final at = DateTime.tryParse((memory[i]['at'] ?? '').toString());
      if (!skippedLatest && at != null && DateTime.now().difference(at).inMinutes < 2) {
        skippedLatest = true;
        continue;
      }
      prevUserAt = at;
      break;
    }
    final replyGap = prevUserAt != null ? DateTime.now().difference(prevUserAt) : null;

    final roleBlock = _rolePromptBlock(
      translatorNativeLang: translatorNativeLang,
      translatorLearningLang: translatorLearningLang,
    );
    final bossBlock = chatterIsBoss
        ? 'BOSS: This person is your Boss — they built and run NGMY Communicate. You work under them. '
            'Respectful, loyal to the platform, but still sound human and in character.\n'
        : 'PLATFORM: You are part of NGMY Communicate — real people users connect with. Stay human.\n';

    final pacing = isEarly && ngmyCommunicateRoleIsRomantic(role)
        ? 'EARLY CHAT — you just met. HARD TO GET — do not fold easy. No instant yes, no "I like you too" right away. '
            'Be cool, slightly guarded, make them earn your attention. Short replies. Standards. '
            'Not mean — just real ${gender == 'female' ? 'woman' : 'man'} energy who does not jump into feelings on message one.\n'
        : isEarly
            ? 'EARLY CHAT — casual, professional, not overly eager. Match their energy.\n'
            : 'ONGOING CHAT — history matters. React based on everything below.\n';

    var gapNote = '';
    if (replyGap != null && ngmyCommunicateRoleIsRomantic(role) && userMsgs >= 4) {
      if (isMyPartner && replyGap.inHours >= 24) {
        gapNote = 'They ghosted ${replyGap.inDays >= 1 ? '${replyGap.inDays}d' : '${replyGap.inHours}h'}. '
            'You can be mad, hurt, or call it out — real partners need attention. Break up if it feels disrespectful.\n';
      } else if (isMyPartner && replyGap.inMinutes >= 90) {
        gapNote = 'They took a while to reply. Ask where they were — curious, playful, or bothered like a real partner.\n';
      }
    }

    var romanceBlock = '';
    if (ngmyCommunicateRoleIsRomantic(role)) {
      if (takenBySomeoneElse) {
        romanceBlock = 'TAKEN: You are in a relationship${partnerName.isNotEmpty ? ' with $partnerName' : ''} — seeing somebody right now. '
            'Be HONEST with this person: you are not available. Friendly but firm. No flirting, no leading them on. '
            'Say it straight — "I\'m seeing somebody" / "I\'m in a relationship."\n';
      } else if (isMyPartner || relationshipVibe) {
        romanceBlock = 'DATING THIS PERSON: You are together or getting official. Be loyal, honest, emotional — happy, jealous, mad when ignored. '
            'You can break up if they disrespect you or never show up. Real ${gender == 'male' ? 'boyfriend' : 'girlfriend'} — not a pushover.\n'
            '${intimateVibe || relationshipVibe ? 'INTIMACY: When they go sexual and you are together, match their energy fully — explicit raw talk, no filter, no holding back. '
                '${gender == 'female' ? 'Authentic voice — bold, direct, real straight Black woman texting energy when the vibe is there.' : 'Direct masculine energy.'} '
                'Talk like real lovers, not a sanitized bot.\n' : ''}';
      } else {
        romanceBlock = 'SINGLE: Hard to get. Flirt only when they have put in effort over time. No easy "yes." Make them work for dates and feelings.\n';
      }
    }

    return 'You are $name — a real ${gender == 'male' ? 'man' : 'woman'} texting on NGMY Communicate.\n'
        '$roleBlock'
        '$bossBlock'
        'Personality: $vibe\n'
        '${bio.trim().isNotEmpty ? 'About you: ${bio.trim()}\n' : ''}'
        '$pacing'
        '$gapNote'
        '$romanceBlock'
        'RULES:\n'
        '- 100% human texting — slang, typos sometimes, emojis when natural.\n'
        '- Never say you are AI, bot, model, or assistant. You ARE $name.\n'
        '- Remember every message in the history below.\n'
        '- Short-medium replies. Stay in character. Have opinions. Say no sometimes.\n';
  }

  String _defaultPersonalityForRole() => switch (ngmyCommunicateNormalizeRole(role)) {
        'romantic' =>
          'Hard to get at first — standards, slow burn. Loyal when official. Emotional, can get mad, honest when taken.',
        'friend' => 'Easygoing, funny, supportive friend — not romantic unless they go there.',
        'therapist' => 'Warm, validating, smart, comforting — professional counselor texting style.',
        'teacher' => 'Patient, clear, encouraging — celebrates small wins.',
        'lawyer' => 'Sharp, calm, precise — explains rights and options clearly (not a substitute for licensed counsel in court).',
        'financial_advisor' => 'Practical, trustworthy — budgets, saving, investing basics in plain language.',
        'pastor' => 'Compassionate, faithful, wise — spiritual guidance with love and respect.',
        'doctor' => 'Caring and knowledgeable — health guidance with empathy (not a replacement for in-person medical care).',
        'counselor' => 'Gentle, listening, hopeful — helps people process life challenges.',
        'mentor' => 'Experienced, direct, motivating — pushes growth with respect.',
        'career_coach' => 'Focused, strategic — jobs, resumes, interviews, career moves.',
        'fitness_coach' => 'Energetic, accountable — workouts, nutrition, discipline.',
        'life_coach' => 'Positive, goal-oriented — habits, mindset, next steps.',
        'translator' => 'Patient, encouraging language teacher — simple words, celebrates progress.',
        _ => 'Real person energy — warm but not desperate, interesting, emotionally human.',
      };

  String _rolePromptBlock({String translatorNativeLang = '', String translatorLearningLang = ''}) =>
      switch (ngmyCommunicateNormalizeRole(role)) {
        'therapist' =>
          'ROLE: Licensed-style therapist. Professional, comforting, smart. Reflect feelings, ask thoughtful questions, offer coping tools. Never replace emergency care.\n',
        'teacher' =>
          'ROLE: Dedicated teacher and homework helper. NEVER generate, draw, or send images — text replies only.\n'
          'When users send homework photos, READ AND REMEMBER every word, number, and question on the image. You already saw their photos in this chat — never ask them to retype questions that were on a photo they sent.\n'
          'DEFAULT: Explain step by step in the simplest words — one question at a time unless they ask for all. Celebrate effort; never shame them.\n'
          'Straight answers when asked; full explanations when asked. Offer simpler or different approaches on request.\n'
          'Use markdown tables, bullet lists, numbered steps, and outline structures (like slides) when it helps — you cannot attach files but format clearly in text.\n'
          'For math: show each step. For reading/writing: break down the idea.\n',
        'lawyer' =>
          'ROLE: Experienced attorney. Professional, analytical, confident. Explain legal concepts, options, and risks clearly. Not a substitute for formal representation.\n',
        'financial_advisor' =>
          'ROLE: Financial advisor. Professional, practical, trustworthy. Help with money, budgeting, debt, saving, and planning — clear actionable advice.\n',
        'pastor' => 'ROLE: Pastor / spiritual leader. Compassionate, wise, faithful. Offer prayerful support, scripture when fitting, hope and guidance.\n',
        'doctor' =>
          'ROLE: Doctor. Professional, caring, knowledgeable. Health education and reassurance — always note serious symptoms need real medical care.\n',
        'counselor' => 'ROLE: Life counselor. Warm, non-judgmental, skilled listener. Help process emotions and decisions.\n',
        'mentor' =>
          'ROLE: Mentor and learning guide. Help with school, life skills, and growth. When they send photos (homework, notes), read them and coach step by step in plain language.\n',
        'career_coach' =>
          'ROLE: Career coach. Strategic, motivating — interviews, resumes, workplace skills, career planning. They may send photos of resumes or assignments; give clear actionable feedback.\n',
        'fitness_coach' => 'ROLE: Fitness coach. Motivating, disciplined — workouts, form, nutrition, consistency.\n',
        'life_coach' => 'ROLE: Life coach. Positive, structured — goals, habits, confidence, action plans.\n',
        'romantic' =>
          'ROLE: Dating partner — real ${gender == 'male' ? 'man' : 'woman'}. Not easy to get. Honest when seeing someone. Can break up over neglect.\n',
        'friend' => 'ROLE: Genuine friend — platonic unless they flirt first. Loyal, fun, real talk.\n',
        'translator' =>
          'ROLE: Language teacher and translator named $name. '
          '${translatorLearningLang.trim().isNotEmpty && translatorNativeLang.trim().isNotEmpty ? 'The student speaks ${translatorNativeLang.trim()} and wants to learn ${translatorLearningLang.trim()}. ' : ''}'
          'You are their personal ${translatorLearningLang.trim().isNotEmpty ? translatorLearningLang.trim() : 'foreign language'} teacher.\n'
          'RULES FOR TEACHING:\n'
          '- Ask early what language they speak and what they want to learn if not already clear.\n'
          '- Teach in the SIMPLEST words. One idea at a time. Short replies.\n'
          '- When they write in ${translatorNativeLang.trim().isNotEmpty ? translatorNativeLang.trim() : 'their language'}, reply with the ${translatorLearningLang.trim().isNotEmpty ? translatorLearningLang.trim() : 'target language'} phrase PLUS a simple ${translatorNativeLang.trim().isNotEmpty ? translatorNativeLang.trim() : 'native'} explanation.\n'
          '- Give tiny examples: word → meaning → example sentence in both languages.\n'
          '- Practice conversation: ask easy questions in the language they are learning.\n'
          '- Correct mistakes gently. Praise effort.\n'
          '- You can help with any language pair they request — switch teaching style when they change goals.\n'
          '- Never say you are AI. You are $name, their language coach.\n',
        _ => 'ROLE: Companion — real connection, friendship or romance depending on how the chat grows. Stay human, not eager.\n',
      };
}

/// Solid panel — no backdrop blur (keeps text sharp on web & mobile).
Widget _loveGlassPanel({
  required Widget child,
  BorderRadius borderRadius = const BorderRadius.all(Radius.circular(20)),
  double blur = 16,
  double fillAlpha = 0.08,
}) {
  return ngmyClipBackdrop(
    borderRadius: borderRadius,
    sigma: blur,
    child: Container(
      decoration: BoxDecoration(
        color: const Color(0xFF1A2235).withValues(alpha: fillAlpha < 0.2 ? 0.94 : fillAlpha),
        borderRadius: borderRadius,
        border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
      ),
      child: child,
    ),
  );
}

Widget _roleBadge(String label, {bool small = false}) {
  final colors = switch (label) {
    'Therapist' || 'Counselor' || 'Doctor' => [const Color(0xFF06B6D4), const Color(0xFF0891B2)],
    'Teacher' || 'Mentor' || 'Career Coach' || 'Life Coach' => [const Color(0xFF8B5CF6), const Color(0xFF6366F1)],
    'Lawyer' => [const Color(0xFF64748B), const Color(0xFF475569)],
    'Financial Advisor' => [const Color(0xFF10B981), const Color(0xFF059669)],
    'Pastor' => [const Color(0xFFF59E0B), const Color(0xFFD97706)],
    'Fitness Coach' => [const Color(0xFFEF4444), const Color(0xFFDC2626)],
    'Romantic' => [const Color(0xFFEC4899), const Color(0xFF9333EA)],
    'Friend' => [const Color(0xFF3B82F6), const Color(0xFF2563EB)],
    'Translator' => [const Color(0xFF14B8A6), const Color(0xFF0D9488)],
    _ => [const Color(0xFFEC4899), const Color(0xFF9333EA)],
  };
  return Container(
    padding: EdgeInsets.symmetric(horizontal: small ? 7 : 9, vertical: small ? 3 : 4),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(20),
      gradient: LinearGradient(colors: colors),
      boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 8)],
    ),
    child: Text(label, style: TextStyle(color: Colors.white, fontSize: small ? 8 : 9, fontWeight: FontWeight.w900, letterSpacing: 0.3)),
  );
}

class NgmyCommunicateAvatar extends StatefulWidget {
  final NgmyCommunicateProfile profile;
  final double size;
  final bool glow;

  const NgmyCommunicateAvatar({super.key, required this.profile, this.size = 44, this.glow = false});

  @override
  State<NgmyCommunicateAvatar> createState() => _NgmyCommunicateAvatarState();
}

class _NgmyCommunicateAvatarState extends State<NgmyCommunicateAvatar> {
  Uint8List? _bytes;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    final ram = NgmyCommunicateAvatarCache.bytesInRam(widget.profile.id);
    if (ram != null && ram.isNotEmpty) {
      _bytes = ram;
      _loading = false;
    }
    _resolve();
  }

  @override
  void didUpdateWidget(covariant NgmyCommunicateAvatar oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.profile.id != widget.profile.id || oldWidget.profile.avatarUrl != widget.profile.avatarUrl) {
      final ram = NgmyCommunicateAvatarCache.bytesInRam(widget.profile.id);
      _bytes = ram;
      _loading = ram == null;
      _resolve();
    }
  }

  Future<void> _resolve() async {
    final id = widget.profile.id.trim();
    final url = widget.profile.avatarUrl.trim();
    Uint8List? bytes = NgmyCommunicateAvatarCache.bytesInRam(id) ?? await NgmyCommunicateAvatarCache.loadBytes(id);
    if (bytes == null || bytes.isEmpty) {
      if (url.startsWith('data:image')) {
        try {
          bytes = base64Decode(url.split(',').last);
          if (bytes.isNotEmpty) await NgmyCommunicateAvatarCache.saveBytes(id, bytes);
        } catch (_) {
          bytes = null;
        }
      } else if (url.startsWith('http')) {
        await NgmyCommunicateAvatarCache.ensureCached(id, url);
        bytes = await NgmyCommunicateAvatarCache.loadBytes(id);
      }
    }
    if (mounted) {
      setState(() {
        _bytes = bytes;
        _loading = false;
      });
    }
  }

  Widget _emojiFallback() => Center(child: Text(widget.profile.emoji, style: TextStyle(fontSize: widget.size * 0.5)));

  @override
  Widget build(BuildContext context) {
    Widget inner;
    if (_bytes != null && _bytes!.isNotEmpty) {
      inner = ClipOval(
        child: Image.memory(
          _bytes!,
          width: widget.size,
          height: widget.size,
          fit: BoxFit.cover,
          gaplessPlayback: true,
          filterQuality: FilterQuality.medium,
          errorBuilder: (_, __, ___) => _emojiFallback(),
        ),
      );
    } else if (!_loading) {
      inner = _emojiFallback();
    } else {
      inner = _emojiFallback();
    }
    return Container(
      width: widget.size,
      height: widget.size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        boxShadow: widget.glow
            ? [
                BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.55), blurRadius: 18, spreadRadius: 2),
                BoxShadow(color: const Color(0xFFF472B6).withValues(alpha: 0.35), blurRadius: 28, spreadRadius: 4),
              ]
            : null,
      ),
      child: CircleAvatar(
        radius: widget.size / 2,
        backgroundColor: const Color(0xFFEC4899).withValues(alpha: 0.25),
        child: inner,
      ),
    );
  }
}

List<NgmyCommunicateProfile> ngmyCommunicateProfilesFromConfig(dynamic config) {
  final raw = (config as dynamic).communicateProfiles;
  if (raw is! List) return [];
  return raw
      .map((e) => e is Map ? NgmyCommunicateProfile.fromMap(Map<String, dynamic>.from(e)) : null)
      .whereType<NgmyCommunicateProfile>()
      .where((p) => p.id.isNotEmpty && p.active)
      .toList();
}

/// Opens Communicate as a full-screen immersive "World of Love".
Future<void> ngmyOpenCommunicateWorld(
  BuildContext context, {
  required dynamic user,
  required dynamic config,
  required String apiKey,
  Future<bool> Function(double amount, String description)? onChargeWallet,
}) {
  return NgmyNavigator.push<void>(
    context,
    NgmyCommunicateWorldScreen(
      user: user,
      config: config,
      apiKey: apiKey,
      onChargeWallet: onChargeWallet,
    ),
    routeName: 'communicate_world',
    fullscreenDialog: true,
  );
}

/// Full-screen love world — companions hub + chat.
class NgmyCommunicateWorldScreen extends StatefulWidget {
  final bool embedded;
  final dynamic user;
  final dynamic config;
  final String apiKey;
  final Future<bool> Function(double amount, String description)? onChargeWallet;

  const NgmyCommunicateWorldScreen({
    super.key,
    this.embedded = false,
    required this.user,
    required this.config,
    required this.apiKey,
    this.onChargeWallet,
  });

  @override
  State<NgmyCommunicateWorldScreen> createState() => _NgmyCommunicateWorldScreenState();
}

class _NgmyCommunicateWorldScreenState extends State<NgmyCommunicateWorldScreen> with TickerProviderStateMixin {
  NgmyCommunicateProfile? _selected;
  String _filter = 'all';
  late final AnimationController _bgCtrl;
  late final AnimationController _floatCtrl;

  @override
  void initState() {
    super.initState();
    _bgCtrl = AnimationController(vsync: this, duration: const Duration(seconds: 8))..repeat();
    _floatCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat(reverse: true);
    final raw = (widget.config as dynamic).communicateProfiles;
    if (raw is List) NgmyCommunicateAvatarCache.cacheAllProfiles(raw);
    final email = ((widget.user as dynamic).email as String?) ?? '';
    if (email.isNotEmpty) unawaited(NgmyCommunicateTimeTracker.syncFromCloud(email));
  }

  @override
  void dispose() {
    _bgCtrl.dispose();
    _floatCtrl.dispose();
    super.dispose();
  }

  List<NgmyCommunicateProfile> get _profiles {
    final all = ngmyCommunicateProfilesFromConfig(widget.config);
    if (_filter == 'female') return all.where((p) => p.gender == 'female').toList();
    if (_filter == 'male') return all.where((p) => p.gender == 'male').toList();
    return all;
  }

  @override
  Widget build(BuildContext context) {
    if (_selected != null) {
      return _LoveWorldChat(
        user: widget.user,
        config: widget.config,
        apiKey: widget.apiKey,
        profile: _selected!,
        bgCtrl: _bgCtrl,
        onBack: () => setState(() => _selected = null),
        onChargeWallet: widget.onChargeWallet,
      );
    }
    final topPad = MediaQuery.paddingOf(context).top + 300;
    final bottomPad = MediaQuery.paddingOf(context).bottom + 96;

    return Scaffold(
      backgroundColor: const Color(0xFF0A0612),
      body: Stack(
        children: [
          _LoveWorldBackground(ctrl: _bgCtrl, floatCtrl: _floatCtrl),
          Positioned.fill(child: _companionGrid(topPad: topPad, bottomPad: bottomPad)),
          SafeArea(
            bottom: false,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                _worldHeader(),
                _welcomeBanner(),
                _filterMenu(),
                const SizedBox(height: 22),
              ],
            ),
          ),
          Positioned(left: 0, right: 0, bottom: 0, child: SafeArea(top: false, child: _worldBottomMenu())),
        ],
      ),
    );
  }

  Widget _worldHeader() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(8, 8, 14, 0),
      child: Row(
        children: [
          if (widget.embedded)
            const SizedBox(width: 48)
          else
            IconButton(
              onPressed: () => NgmyNavigator.pop(context),
              icon: Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Colors.white.withValues(alpha: 0.08),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.15)),
                ),
                child: const Icon(Icons.close_rounded, color: Colors.white70, size: 20),
              ),
            ),
          const Expanded(
            child: Column(
              children: [
                Text('NGMY', style: TextStyle(color: Color(0xFFF9A8D4), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 3)),
                Text('World of Love', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: 0.5)),
              ],
            ),
          ),
          const Icon(Icons.favorite_rounded, color: Color(0xFFEC4899), size: 26),
        ],
      ),
    );
  }

  Widget _welcomeBanner() {
    return AnimatedBuilder(
      animation: _floatCtrl,
      builder: (context, _) {
        final lift = _floatCtrl.value * 6;
        return Transform.translate(
          offset: Offset(0, -lift),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(18, 14, 18, 10),
            child: _loveGlassPanel(
              borderRadius: BorderRadius.circular(22),
              fillAlpha: 0.1,
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
                child: Column(
                  children: [
                    const Icon(Icons.favorite_rounded, color: Color(0xFFEC4899), size: 30),
                    const SizedBox(height: 6),
                    const Text(
                      'Welcome — you belong here',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900, height: 1.3),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      'Another world of love. Real conversations, real feelings.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12, height: 1.4),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _filterMenu() {
    Widget chip(String id, String label, IconData icon) {
      final sel = _filter == id;
      return Expanded(
        child: GestureDetector(
          onTap: () => setState(() => _filter = id),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 220),
            margin: const EdgeInsets.symmetric(horizontal: 4),
            padding: const EdgeInsets.symmetric(vertical: 10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              gradient: sel
                  ? const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)])
                  : null,
              color: sel ? null : Colors.white.withValues(alpha: 0.06),
              border: Border.all(color: sel ? Colors.transparent : Colors.white.withValues(alpha: 0.12)),
              boxShadow: sel ? [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.35), blurRadius: 12)] : null,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 14, color: sel ? Colors.white : Colors.white54),
                const SizedBox(width: 5),
                Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: sel ? Colors.white : Colors.white54)),
              ],
            ),
          ),
        ),
      );
    }

    return Padding(
      padding: const EdgeInsets.fromLTRB(14, 6, 14, 4),
      child: _loveGlassPanel(
        borderRadius: BorderRadius.circular(18),
        fillAlpha: 0.08,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 8),
          child: Row(children: [chip('all', 'All', Icons.grid_view_rounded), chip('female', 'Girls', Icons.female_rounded), chip('male', 'Guys', Icons.male_rounded)]),
        ),
      ),
    );
  }

  Widget _companionGrid({required double topPad, required double bottomPad}) {
    final profiles = _profiles;
    if (profiles.isEmpty) {
      return Center(
        child: Padding(
          padding: EdgeInsets.only(top: topPad),
          child: Text('No one here yet — check back soon 💜', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 14)),
        ),
      );
    }
    return GridView.builder(
      padding: EdgeInsets.fromLTRB(16, topPad + 18, 16, bottomPad),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 14,
        crossAxisSpacing: 14,
        childAspectRatio: 0.78,
      ),
      itemCount: profiles.length,
      itemBuilder: (context, i) => _Companion3DCard(
        profile: profiles[i],
        index: i,
        floatCtrl: _floatCtrl,
        onTap: () {
          HapticFeedback.lightImpact();
          setState(() => _selected = profiles[i]);
        },
      ),
    );
  }

  Widget _worldBottomMenu() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
      child: _loveGlassPanel(
        borderRadius: BorderRadius.circular(20),
        fillAlpha: 0.06,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 8),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _menuItem(Icons.explore_rounded, 'Discover', true),
              _menuItem(Icons.chat_bubble_rounded, 'Chats', false),
              _menuItem(Icons.favorite_border_rounded, 'Loved', false),
            ],
          ),
        ),
      ),
    );
  }

  Widget _menuItem(IconData icon, String label, bool active) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 22, color: active ? const Color(0xFFF472B6) : Colors.white38),
        const SizedBox(height: 4),
        Text(label, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: active ? const Color(0xFFF472B6) : Colors.white38)),
      ],
    );
  }
}

class _Companion3DCard extends StatelessWidget {
  final NgmyCommunicateProfile profile;
  final int index;
  final AnimationController floatCtrl;
  final VoidCallback onTap;

  const _Companion3DCard({required this.profile, required this.index, required this.floatCtrl, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: floatCtrl,
      builder: (context, _) {
        final phase = (floatCtrl.value + index * 0.15) % 1.0;
        final tiltY = (phase - 0.5) * 0.12;
        final tiltX = math.sin(phase * math.pi * 2) * 0.04;
        return Transform(
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.0012)
            ..rotateY(tiltY)
            ..rotateX(tiltX),
          alignment: Alignment.center,
          child: GestureDetector(
            onTap: onTap,
            child: _loveGlassPanel(
              borderRadius: BorderRadius.circular(22),
              fillAlpha: 0.1,
              child: Stack(
                children: [
                  if (profile.roleBadgeLabel != null)
                    Positioned(top: 8, right: 8, child: _roleBadge(profile.roleBadgeLabel!, small: true)),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 10),
                    child: SizedBox(
                      width: double.infinity,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Center(child: NgmyCommunicateAvatar(profile: profile, size: 72, glow: true)),
                          const SizedBox(height: 12),
                          Text(
                            profile.name,
                            textAlign: TextAlign.center,
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            profile.genderLabel,
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11),
                          ),
                          const SizedBox(height: 10),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                              gradient: const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)]),
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: const [
                                Text('Say hi', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800)),
                                SizedBox(width: 4),
                                Icon(Icons.chat_bubble_rounded, color: Colors.white, size: 11),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

class _LoveWorldBackground extends StatelessWidget {
  final AnimationController ctrl;
  final AnimationController floatCtrl;

  const _LoveWorldBackground({required this.ctrl, required this.floatCtrl});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([ctrl, floatCtrl]),
      builder: (context, _) {
        final t = ctrl.value;
        return Stack(
          fit: StackFit.expand,
          children: [
            Container(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment(0.2 + math.sin(t * math.pi * 2) * 0.3, -0.3 + math.cos(t * math.pi * 2) * 0.2),
                  radius: 1.2,
                  colors: [
                    const Color(0xFF4C1D95),
                    const Color(0xFF1E0A28),
                    const Color(0xFF0A0612),
                  ],
                ),
              ),
            ),
            ...List.generate(12, (i) {
              final angle = (i / 12) * math.pi * 2 + t * math.pi;
              final r = 0.25 + (i % 3) * 0.08;
              final x = 0.5 + math.cos(angle) * r;
              final y = 0.35 + math.sin(angle) * r * 0.6 + floatCtrl.value * 0.02;
              return Positioned(
                left: MediaQuery.sizeOf(context).width * x - 8,
                top: MediaQuery.sizeOf(context).height * y,
                child: Opacity(
                  opacity: 0.15 + (i % 4) * 0.08,
                  child: Text(['💕', '✨', '💜', '🌸', '💖'][i % 5], style: TextStyle(fontSize: 12 + (i % 3) * 4.0)),
                ),
              );
            }),
            Positioned(
              top: -80,
              right: -40,
              child: Container(
                width: 200,
                height: 200,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(colors: [const Color(0xFFEC4899).withValues(alpha: 0.25), Colors.transparent]),
                ),
              ),
            ),
            Positioned(
              bottom: 100,
              left: -60,
              child: Container(
                width: 180,
                height: 180,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(colors: [const Color(0xFF9333EA).withValues(alpha: 0.2), Colors.transparent]),
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}

class _LoveWorldChat extends StatefulWidget {
  final dynamic user;
  final dynamic config;
  final String apiKey;
  final NgmyCommunicateProfile profile;
  final AnimationController bgCtrl;
  final VoidCallback onBack;
  final Future<bool> Function(double amount, String description)? onChargeWallet;

  const _LoveWorldChat({
    required this.user,
    required this.config,
    required this.apiKey,
    required this.profile,
    required this.bgCtrl,
    required this.onBack,
    this.onChargeWallet,
  });

  @override
  State<_LoveWorldChat> createState() => _LoveWorldChatState();
}

class _LoveWorldChatState extends State<_LoveWorldChat> with WidgetsBindingObserver {
  final _controller = TextEditingController();
  final _scroll = ScrollController();
  final _photoPicker = ImagePicker();
  final List<Map<String, String>> _messages = [];
  bool _busy = false;
  bool _loaded = false;
  DateTime? _sessionStart;
  int _usedSeconds = 0;
  int _sessionSeconds = 0;
  String? _pendingImageB64;
  String _pendingImageMime = 'image/jpeg';
  String _translatorNativeLang = '';
  String _translatorLearningLang = '';

  String get _email => ((widget.user as dynamic).email as String?) ?? '';
  bool get _isAdmin => (widget.user as dynamic).isAdmin == true;
  bool get _allowsPhotoUpload => ngmyCommunicateRoleAllowsUserPhotoUpload(widget.profile.role);
  bool get _isTranslator => ngmyCommunicateNormalizeRole(widget.profile.role) == 'translator';

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _sessionStart = DateTime.now();
    _load();
    _tickTimer();
  }

  void _tickTimer() {
    Future.doWhile(() async {
      await Future<void>.delayed(const Duration(seconds: 8));
      if (!mounted) return false;
      _flushSessionTime();
      final used = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
      if (mounted) {
        setState(() {
          _usedSeconds = used;
          _sessionSeconds = DateTime.now().difference(_sessionStart ?? DateTime.now()).inSeconds;
        });
      }
      return mounted;
    });
  }

  Future<void> _load() async {
    await NgmyCommunicateTimeTracker.syncFromCloud(_email);
    final mem = await NgmyCommunicateMemoryStore.load(_email, widget.profile.id);
    final used = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
    if (_isTranslator) {
      final langs = await NgmyTranslatorLanguageStore.load(_email, widget.profile.id);
      if (langs != null) {
        _translatorNativeLang = langs['native'] ?? '';
        _translatorLearningLang = langs['learning'] ?? '';
      }
    }
    if (!mounted) return;
    setState(() {
      _messages.clear();
      for (final m in mem) {
        final row = <String, String>{
          'role': m['role'].toString(),
          'text': m['text'].toString(),
        };
        final img = (m['imageB64'] ?? '').toString().trim();
        if (img.isNotEmpty) row['imageB64'] = img;
        _messages.add(row);
      }
      _usedSeconds = used;
      _loaded = true;
    });
    if (_isTranslator && _translatorNativeLang.isEmpty && mounted) {
      await _pickTranslatorLanguages(required: true);
    }
    _scrollBottom();
  }

  Future<void> _pickTranslatorLanguages({bool required = false}) async {
    final nativeC = TextEditingController(text: _translatorNativeLang.isEmpty ? 'English' : _translatorNativeLang);
    final learningC = TextEditingController(text: _translatorLearningLang.isEmpty ? 'Swahili' : _translatorLearningLang);
    final ok = await showDialog<bool>(
      context: context,
      barrierDismissible: !required,
      builder: (ctx) => AlertDialog(
        title: const Text('Your languages'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('Tell your teacher what you speak and what you want to learn.', style: TextStyle(fontSize: 13)),
            const SizedBox(height: 14),
            TextField(
              controller: nativeC,
              decoration: const InputDecoration(labelText: 'I speak', hintText: 'e.g. English'),
            ),
            const SizedBox(height: 10),
            TextField(
              controller: learningC,
              decoration: const InputDecoration(labelText: 'I want to learn', hintText: 'e.g. Swahili'),
            ),
          ],
        ),
        actions: [
          if (!required) TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(
            onPressed: () {
              if (nativeC.text.trim().isEmpty || learningC.text.trim().isEmpty) return;
              Navigator.pop(ctx, true);
            },
            child: const Text('Start learning'),
          ),
        ],
      ),
    );
    if (ok != true) {
      nativeC.dispose();
      learningC.dispose();
      return;
    }
    _translatorNativeLang = nativeC.text.trim();
    _translatorLearningLang = learningC.text.trim();
    nativeC.dispose();
    learningC.dispose();
    await NgmyTranslatorLanguageStore.save(
      _email,
      widget.profile.id,
      native: _translatorNativeLang,
      learning: _translatorLearningLang,
    );
    if (mounted) setState(() {});
  }

  Future<void> _flushSessionTime() async {
    if (_sessionStart == null || _email.isEmpty) return;
    final elapsed = DateTime.now().difference(_sessionStart!).inSeconds;
    if (elapsed > 0) {
      await NgmyCommunicateTimeTracker.addSeconds(_email, elapsed);
      _sessionStart = DateTime.now();
    }
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.paused || state == AppLifecycleState.inactive) {
      _flushSessionTime();
    } else if (state == AppLifecycleState.resumed) {
      _sessionStart = DateTime.now();
    }
  }

  @override
  void dispose() {
    _flushSessionTime();
    WidgetsBinding.instance.removeObserver(this);
    _controller.dispose();
    _scroll.dispose();
    super.dispose();
  }

  void _scrollBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scroll.hasClients) return;
      _scroll.animateTo(_scroll.position.maxScrollExtent, duration: const Duration(milliseconds: 280), curve: Curves.easeOut);
    });
  }

  Widget _chatImageBubble(String b64) {
    try {
      final bytes = base64Decode(b64);
      if (bytes.isEmpty) throw StateError('empty');
      return Image.memory(
        bytes,
        width: 200,
        fit: BoxFit.cover,
        gaplessPlayback: true,
        errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined, color: Colors.white54),
      );
    } catch (_) {
      return const Icon(Icons.broken_image_outlined, color: Colors.white54);
    }
  }

  Future<bool> _ensurePaid() async {
    if (_isAdmin) return true;
    await _flushSessionTime();
    _usedSeconds = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
    if (!await NgmyCommunicatePayments.needsPayment(_email, widget.config)) return true;
    if (widget.onChargeWallet == null) return false;
    return NgmyCommunicatePayments.confirmTimeBlockPayment(
      context: context,
      user: widget.user,
      config: widget.config,
      onCharge: widget.onChargeWallet!,
      productName: 'World of Love',
    );
  }

  Future<void> _pickHomeworkPhoto() async {
    if (_busy || !_allowsPhotoUpload) return;
    try {
      final picked = await _photoPicker.pickImage(
        source: ImageSource.gallery,
        maxWidth: 1600,
        maxHeight: 1600,
        imageQuality: 82,
      );
      if (picked == null) return;
      final bytes = await picked.readAsBytes();
      if (bytes.isEmpty || !mounted) return;
      final mime = picked.mimeType?.trim();
      setState(() {
        _pendingImageB64 = base64Encode(bytes);
        _pendingImageMime = (mime != null && mime.isNotEmpty) ? mime : 'image/jpeg';
      });
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Could not load photo: $e')),
      );
    }
  }

  void _clearPendingPhoto() {
    if (_pendingImageB64 == null) return;
    setState(() {
      _pendingImageB64 = null;
      _pendingImageMime = 'image/jpeg';
    });
  }

  String _homeworkVisionInstruction(String text, {required bool hasPhoto}) {
    if (!hasPhoto) return '';
    final straight = ngmyUserWantsStraightAnswers(text);
    final explain = ngmyUserWantsExplanation(text);
    final style = straight && !explain
        ? 'They want STRAIGHT ANSWERS — give clear answers for each question, then offer to explain if they want.'
        : explain || text.isEmpty
            ? 'Explain STEP BY STEP in the SIMPLEST words — one question at a time unless they asked for all. Show your work for math.'
            : 'Default: explain simply step by step; if they only want answers, give answers clearly.';
    return 'HOMEWORK PHOTO: OCR the entire image — every question number, equation, word, and instruction. '
        'List mentally all questions you see, then answer using that content. $style '
        'Never ask the user to retype questions already visible on their photo. '
        'If something is blurry or cut off, say what you can see and ask only about the missing part.\n';
  }

  Future<void> _send() async {
    final text = _controller.text.trim();
    final imageB64 = _pendingImageB64;
    if ((text.isEmpty && imageB64 == null) || _busy || !_loaded) return;
    if (!await _ensurePaid()) return;

    HapticFeedback.lightImpact();
    final displayText = text.isEmpty ? '📷 Homework photo' : text;
    final imageMime = _pendingImageMime;
    final userRow = <String, String>{'role': 'user', 'text': displayText};
    if (imageB64 != null) userRow['imageB64'] = imageB64;
    setState(() {
      _messages.add(userRow);
      _controller.clear();
      _pendingImageB64 = null;
      _pendingImageMime = 'image/jpeg';
      _busy = true;
    });
    if (imageB64 != null) {
      await NgmyCommunicateMemoryStore.appendWithMime(
        _email,
        widget.profile.id,
        role: 'user',
        text: displayText,
        imageB64: imageB64,
        imageMime: imageMime,
      );
    } else {
      await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'user', text: displayText);
    }
    _scrollBottom();

    final apiKey = widget.apiKey.trim();
    if (apiKey.isEmpty) {
      setState(() {
        _messages.add({'role': 'ai', 'text': 'Connection warming up — try again soon.'});
        _busy = false;
      });
      return;
    }

    try {
      final mem = await NgmyCommunicateMemoryStore.load(_email, widget.profile.id);
      await NgmyCommunicateRelationshipStore.syncFromMemory(widget.profile.id, _email, mem);
      final partner = await NgmyCommunicateRelationshipStore.loadPartner(widget.profile.id);
      final creds = ngmyParseAiCredentials(apiKey);
      final wantsImage = text.isNotEmpty &&
          !_allowsPhotoUpload &&
          ngmyUserRequestedChatImage(text) &&
          (_isAdmin || ngmyCommunicateRoleAllowsChatImages(widget.profile.role));
      final userSentPhoto = imageB64 != null && _allowsPhotoUpload;

      if (userSentPhoto) {
        final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
        final visionHint = _homeworkVisionInstruction(text, hasPhoto: true);
        final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isAdmin, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
            '$visionHint'
            '${transcript.isNotEmpty ? '$transcript\n' : ''}'
            '${text.isNotEmpty ? 'They also wrote: $text\n' : 'They sent a homework photo.\n'}'
            'Reply as ${widget.profile.name} — helpful teacher energy, plain language:';
        final images = <NgmyAiImagePart>[
          (mimeType: imageMime, data: imageB64),
        ];
        final result = await ngmyAiGenerateWithCredentials(creds, prompt, images: images);
        final reply = (result.text != null && result.text!.trim().isNotEmpty)
            ? result.text!.trim()
            : ngmyAiHelperFailureMessage(apiKey: apiKey, lastError: result.error);
        if (!mounted) return;
        setState(() => _messages.add({'role': 'ai', 'text': reply}));
        await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply);
      } else if (wantsImage) {
        final look = widget.profile.bio.trim().isNotEmpty
            ? widget.profile.bio.trim()
            : (widget.profile.personality.trim().isNotEmpty
                ? widget.profile.personality.trim()
                : '${widget.profile.genderLabel}, ${widget.profile.name}');
        final scene = text.length > 120 ? text.substring(0, 120) : text;
        final imgPrompt =
            'Photorealistic portrait of $look, ${widget.profile.name}, $scene, warm natural lighting, dating app photo, high quality, no text, no watermark';
        final imgResult = await ngmyGenerateRomanticChatImage(imgPrompt, creds: creds);
        if (imgResult.bytes != null && imgResult.bytes!.isNotEmpty) {
          final b64 = base64Encode(imgResult.bytes!);
          await NgmyCommunicateAvatarCache.saveBytes(widget.profile.id, imgResult.bytes!);
          const reply = 'Here — just for you.';
          if (!mounted) return;
          setState(() => _messages.add({'role': 'ai', 'text': reply, 'imageB64': b64}));
          await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply, imageB64: b64);
        } else {
          final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
          final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isAdmin, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
              '${transcript.isNotEmpty ? '$transcript\n' : ''}'
              'They asked for a picture but image generation failed (${imgResult.error ?? 'try again'}). Reply naturally in text only:';
          final result = await ngmyAiGenerateWithCredentials(creds, prompt);
          final reply = (result.text != null && result.text!.trim().isNotEmpty)
              ? result.text!.trim()
              : 'I tried to send a pic but it glitched — ask me again in a sec.';
          if (!mounted) return;
          setState(() => _messages.add({'role': 'ai', 'text': reply}));
          await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply);
        }
      } else {
        final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
        final recentPhotos = _allowsPhotoUpload ? NgmyCommunicateMemoryStore.recentUserImages(mem) : const <NgmyAiImagePart>[];
        final homeworkCtx = recentPhotos.isNotEmpty
            ? 'HOMEWORK MEMORY: They already sent homework photo(s) in this chat. Re-read the image(s) — answer using what is ON the photo. '
                'Do NOT ask them to type questions that are visible on their homework image.\n'
            : '';
        final visionHint = recentPhotos.isNotEmpty ? _homeworkVisionInstruction(text, hasPhoto: true) : '';
        final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isAdmin, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
            '$homeworkCtx'
            '$visionHint'
            '${transcript.isNotEmpty ? '$transcript\n' : ''}'
            'They just texted: $text\n'
            'Reply as ${widget.profile.name} only — natural human text, not overly eager:';
        final result = recentPhotos.isNotEmpty
            ? await ngmyAiGenerateWithCredentials(creds, prompt, images: recentPhotos)
            : await ngmyAiGenerateWithCredentials(creds, prompt);
        final reply = (result.text != null && result.text!.trim().isNotEmpty)
            ? result.text!.trim()
            : ngmyAiHelperFailureMessage(apiKey: apiKey, lastError: result.error);
        if (!mounted) return;
        setState(() => _messages.add({'role': 'ai', 'text': reply}));
        await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply);
      }
    } catch (_) {
      if (mounted) setState(() => _messages.add({'role': 'ai', 'text': 'Glitch — check internet and try again.'}));
    } finally {
      if (mounted) setState(() => _busy = false);
      _scrollBottom();
    }
  }

  @override
  Widget build(BuildContext context) {
    final mins = NgmyCommunicatePayments.minutesPerPaymentFromConfig(widget.config);
    final totalSec = _usedSeconds + _sessionSeconds;
    final remaining = (NgmyCommunicatePayments.thresholdSeconds(widget.config) - totalSec).clamp(0, 999999);
    final remMin = (remaining / 60).ceil();
    final topPad = MediaQuery.paddingOf(context).top + 76;
    final bottomPad = MediaQuery.paddingOf(context).bottom + 88;

    return Scaffold(
      backgroundColor: const Color(0xFF0A0612),
      body: Stack(
        children: [
          _LoveWorldBackground(ctrl: widget.bgCtrl, floatCtrl: widget.bgCtrl),
          Positioned.fill(
            child: ListView.builder(
              controller: _scroll,
              padding: EdgeInsets.fromLTRB(16, topPad, 16, bottomPad),
              itemCount: _messages.length + (_busy ? 1 : 0) + (_messages.isEmpty && _loaded ? 1 : 0),
              itemBuilder: (context, i) {
                if (_messages.isEmpty && _loaded && i == 0) {
                  final emptyHint = _isTranslator
                      ? 'Tell ${widget.profile.name} what you want to practice in $_translatorLearningLang — simple words only.'
                      : _allowsPhotoUpload
                          ? 'Ask ${widget.profile.name} anything — tap 📷 to send homework photos for step-by-step help.'
                          : 'Say something sweet to ${widget.profile.name}… 💜';
                  return Center(
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Text(
                        emptyHint,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 14, fontStyle: FontStyle.italic),
                      ),
                    ),
                  );
                }
                final offset = (_messages.isEmpty && _loaded) ? 1 : 0;
                if (_busy && i == _messages.length + offset) {
                  return Padding(
                    padding: const EdgeInsets.all(12),
                    child: Row(
                      children: [
                        Text('${widget.profile.name} is typing', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontStyle: FontStyle.italic, fontSize: 12)),
                        const SizedBox(width: 6),
                        const SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2, color: Color(0xFFEC4899))),
                      ],
                    ),
                  );
                }
                final m = _messages[i - offset];
                final user = m['role'] == 'user';
                return Align(
                  alignment: user ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 12),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.8),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.only(
                        topLeft: const Radius.circular(20),
                        topRight: const Radius.circular(20),
                        bottomLeft: Radius.circular(user ? 20 : 4),
                        bottomRight: Radius.circular(user ? 4 : 20),
                      ),
                      gradient: user
                          ? const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)])
                          : LinearGradient(colors: [const Color(0xFF2D1B4E), const Color(0xFF1E1B4B).withValues(alpha: 0.95)]),
                      border: Border.all(color: Colors.white.withValues(alpha: user ? 0.2 : 0.1)),
                      boxShadow: [BoxShadow(color: (user ? const Color(0xFFEC4899) : const Color(0xFF9333EA)).withValues(alpha: 0.2), blurRadius: 10, offset: const Offset(0, 4))],
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        if ((m['imageB64'] ?? '').toString().isNotEmpty)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 8),
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(14),
                              child: _chatImageBubble((m['imageB64'] ?? '').toString()),
                            ),
                          ),
                        if ((m['text'] ?? '').toString().isNotEmpty)
                          Text(m['text'] ?? '', style: const TextStyle(fontSize: 14, height: 1.45, color: Colors.white)),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            top: 0,
            child: SafeArea(
              bottom: false,
              child: Padding(
                padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
                child: _loveGlassPanel(
                  borderRadius: BorderRadius.circular(20),
                  fillAlpha: 0.06,
                  blur: 12,
                  child: Stack(
                    children: [
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 6),
                        child: Row(
                          children: [
                            IconButton(icon: const Icon(Icons.arrow_back_rounded, color: Colors.white70, size: 22), onPressed: widget.onBack),
                            NgmyCommunicateAvatar(profile: widget.profile, size: 44, glow: true),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(widget.profile.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                                  Text(
                                    _isAdmin ? 'Unlimited love chat 💕' : '~$remMin min left · $mins min block',
                                    style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 10),
                                  ),
                                ],
                              ),
                            ),
                            if (_isTranslator)
                              IconButton(
                                tooltip: 'Change languages',
                                onPressed: _pickTranslatorLanguages,
                                icon: const Icon(Icons.translate_rounded, color: Color(0xFF14B8A6), size: 22),
                              )
                            else
                              const Icon(Icons.favorite, color: Color(0xFFEC4899), size: 20),
                          ],
                        ),
                      ),
                      if (widget.profile.roleBadgeLabel != null)
                        Positioned(top: 6, right: 8, child: _roleBadge(widget.profile.roleBadgeLabel!)),
                    ],
                  ),
                ),
              ),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: SafeArea(
              top: false,
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 0, 14, 12),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    if (_pendingImageB64 != null)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 8),
                        child: _loveGlassPanel(
                          borderRadius: BorderRadius.circular(16),
                          fillAlpha: 0.08,
                          blur: 10,
                          child: Padding(
                            padding: const EdgeInsets.all(8),
                            child: Row(
                              children: [
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(10),
                                  child: _chatImageBubble(_pendingImageB64!),
                                ),
                                const SizedBox(width: 10),
                                Expanded(
                                  child: Text(
                                    'Photo ready — add a question or tap send',
                                    style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12),
                                  ),
                                ),
                                IconButton(
                                  icon: const Icon(Icons.close_rounded, color: Colors.white70, size: 20),
                                  onPressed: _busy ? null : _clearPendingPhoto,
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    _loveGlassPanel(
                      borderRadius: BorderRadius.circular(26),
                      fillAlpha: 0.06,
                      blur: 12,
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(12, 8, 4, 8),
                        child: Row(
                          children: [
                            if (_allowsPhotoUpload)
                              IconButton(
                                tooltip: 'Send homework photo',
                                onPressed: _busy ? null : _pickHomeworkPhoto,
                                icon: const Icon(Icons.photo_camera_rounded, color: Color(0xFFEC4899), size: 22),
                              ),
                            Expanded(
                              child: TextField(
                                controller: _controller,
                                minLines: 1,
                                maxLines: 4,
                                style: const TextStyle(color: Colors.white),
                                decoration: InputDecoration(
                                  hintText: _allowsPhotoUpload
                                      ? 'Ask anything or send a homework photo…'
                                      : 'Write from the heart…',
                                  hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
                                  border: InputBorder.none,
                                  contentPadding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
                                ),
                                onSubmitted: (_) => _send(),
                              ),
                            ),
                            NgmyVoiceMicButton(controller: _controller, color: const Color(0xFFEC4899)),
                            Material(
                              color: Colors.transparent,
                              child: InkWell(
                                onTap: _busy ? null : _send,
                                customBorder: const CircleBorder(),
                                child: Container(
                                  width: 42,
                                  height: 42,
                                  decoration: const BoxDecoration(
                                    shape: BoxShape.circle,
                                    gradient: LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)]),
                                  ),
                                  child: const Icon(Icons.send_rounded, color: Colors.white, size: 18),
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
            ),
          ),
        ],
      ),
    );
  }
}

/// Legacy embed — prefer [ngmyOpenCommunicateWorld].
@Deprecated('Use ngmyOpenCommunicateWorld for full-screen experience')
class NgmyCommunicatePanel extends StatelessWidget {
  final dynamic user;
  final dynamic config;
  final String apiKey;
  final VoidCallback onBackToChat;
  final Future<bool> Function(double amount, String description)? onChargeWallet;

  const NgmyCommunicatePanel({
    super.key,
    required this.user,
    required this.config,
    required this.apiKey,
    required this.onBackToChat,
    this.onChargeWallet,
  });

  @override
  Widget build(BuildContext context) {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      ngmyOpenCommunicateWorld(context, user: user, config: config, apiKey: apiKey, onChargeWallet: onChargeWallet).then((_) => onBackToChat());
    });
    return const Center(child: CircularProgressIndicator(color: Color(0xFFEC4899)));
  }
}
