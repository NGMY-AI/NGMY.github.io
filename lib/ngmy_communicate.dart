import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_communicate_debater.dart';
import 'ngmy_communicate_payments.dart';
import 'ngmy_communicate_storage.dart';
import 'ngmy_communicate_sync.dart';
import 'ngmy_communicate_sync_ui.dart';
import 'ngmy_communicate_text_coach.dart';
import 'ngmy_hud_tech_shell.dart';
import 'ngmy_mshauri.dart';
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
  'bible_study_teacher': 'Bible Study Teacher',
  'debater': 'Debater',
  'marriage_advisor': 'Marriage Advisor',
  'doctor': 'Doctor',
  'counselor': 'Counselor',
  'mentor': 'Mentor',
  'career_coach': 'Career Coach',
  'fitness_coach': 'Fitness Coach',
  'life_coach': 'Life Coach',
  'translator': 'Translator',
  'mshauri': 'Mshauri (Community Advisor)',
  'pickup_line': 'Pickup Line Coach',
  'smart_mouth': 'Smart Mouth',
  'text_coach': 'Text & Rizz Coach',
};

/// Bottom-nav + hub branding (teachers, lawyers, advisors, therapists, and more).
const String kNgmyAdvisorsHubTitle = 'NGMY Advisors';
const IconData kNgmyAdvisorsHubNavIcon = Icons.support_agent_rounded;
const Color kNgmyAdvisorsHubAccent = Color(0xFF6366F1);
const Color kNgmyAdvisorsHubAccent2 = Color(0xFF8B5CF6);

const kNgmyCommunicateProfessionalRoles = <String>{
  'teacher',
  'lawyer',
  'financial_advisor',
  'pastor',
  'bible_study_teacher',
  'debater',
  'marriage_advisor',
  'doctor',
  'mentor',
  'career_coach',
  'fitness_coach',
  'life_coach',
  'translator',
  'mshauri',
};

/// Extra keywords so users can search by occupation (e.g. "law", "finance", "therapy").
const kNgmyRoleSearchAliases = <String, List<String>>{
  'teacher': ['teach', 'tutor', 'school', 'homework', 'education', 'class'],
  'lawyer': ['legal', 'attorney', 'law', 'court', 'rights'],
  'financial_advisor': ['finance', 'financial', 'money', 'budget', 'invest', 'saving', 'debt'],
  'pastor': ['church', 'faith', 'spiritual', 'prayer', 'god', 'bible', 'ministry'],
  'bible_study_teacher': ['bible', 'scripture', 'gospel', 'john', 'corinthians', 'trinity', 'christian', 'study', 'jesus'],
  'debater': ['debate', 'debating', 'apologetics', 'muslim', 'islam', 'atheist', 'argue', 'defend', 'christian'],
  'marriage_advisor': ['marriage', 'wedding', 'husband', 'wife', 'couple', 'african', 'traditional', 'muslim', 'quran', 'islam'],
  'doctor': ['medical', 'health', 'medicine', 'physician', 'nurse', 'symptom'],
  'therapist': ['therapy', 'mental', 'anxiety', 'depression', 'counsel'],
  'counselor': ['counsel', 'guidance', 'support'],
  'mentor': ['mentoring', 'coach', 'guide'],
  'career_coach': ['career', 'job', 'resume', 'interview', 'work'],
  'fitness_coach': ['fitness', 'workout', 'gym', 'exercise', 'nutrition'],
  'life_coach': ['life', 'goals', 'habits', 'motivation'],
  'romantic': ['love', 'dating', 'partner', 'relationship'],
  'friend': ['buddy', 'pal', 'chat'],
  'translator': ['language', 'translate', 'spanish', 'french', 'english'],
  'mshauri': ['mshauri', 'advisor', 'advise', 'babembe', 'congo', 'congolese', 'fizi', 'swahili', 'kibembe', 'community', 'comfort', 'civic', 'registry', 'president', 'leader'],
  'pickup_line': ['pickup', 'pick up', 'flirt', 'rizz', 'opener', 'dating', 'crush', 'girl', 'guy', 'line'],
  'smart_mouth': ['smart mouth', 'comeback', 'witty', 'roast', 'clap back', 'savage', 'funny', 'joke'],
  'text_coach': ['text', 'reply', 'what to say', 'screenshot', 'conversation', 'dm', 'message', 'rizz', 'dating'],
};

String ngmyCommunicateNormalizeRole(String raw) {
  final r = raw.toLowerCase().trim();
  return kNgmyCommunicateRoles.containsKey(r) ? r : 'companion';
}

String ngmyCommunicateRoleLabel(String role) => kNgmyCommunicateRoles[ngmyCommunicateNormalizeRole(role)] ?? 'Companion';

/// Pre-cache companion avatars from config (call after settings hydrate).
Future<void> ngmyWarmCommunicateAvatarsFromConfig(dynamic config) async {
  await NgmyCommunicateAvatarCache.hydrateRamFromDisk();
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
  if (ngmyCommunicateRoleAllowsTextCoachPhotos(role)) return true;
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
      RegExp(r'\bdifferent\s+way\b').hasMatch(t) ||
      RegExp(r"\bdon'?t\s+understand\b").hasMatch(t) ||
      RegExp(r'\bconfus').hasMatch(t) ||
      RegExp(r'\bwhat\s+does\s+(this|that|it)\s+mean\b').hasMatch(t) ||
      RegExp(r'\bhard\s+to\s+understand\b').hasMatch(t);
}

/// Extra instruction when Bible Study Teacher should use original-language keywords only.
String ngmyBibleStudyOriginalLanguageHint(String userText) {
  final t = userText.toLowerCase();
  final verseLike = RegExp(r'\b\d\s*:\s*\d').hasMatch(t) ||
      RegExp(r'\b(genesis|exodus|leviticus|numbers|deuteronomy|matthew|mark|luke|john|romans|corinthians|revelation)\b')
          .hasMatch(t);
  final needsHelp = ngmyUserWantsExplanation(userText) ||
      RegExp(r'\b(trinity|translation|original|hebrew|greek|mean|means|word)\b').hasMatch(t);
  const keyWordRule =
      'ORIGINAL LANGUAGE (strict): Do NOT quote the whole verse in Hebrew or Greek — that confuses readers. '
      'Only highlight 1–3 KEY words from the verse in the original language (transliteration + plain English meaning). '
      'Explain those keywords in context of what you are teaching or debating.\n';
  if (!verseLike && !needsHelp) {
    return '$keyWordRule'
        'When a verse or doctrine is tricky in English, teach with those important original words before you apply it.\n';
  }
  return '$keyWordRule'
      'They may be struggling with this passage — pick the most important Hebrew/Greek keywords only, then explain the verse in plain language.\n';
}

bool ngmyUserWantsBibleDebate(String text) {
  final t = text.toLowerCase();
  if (RegExp(r"\b(no debate|just teach|help me learn|help me understand|not debating|don't debate|dont debate)\b").hasMatch(t)) {
    return false;
  }
  return RegExp(
    r"\b(debate|debating|argue|argument|challenge me|prove me wrong|let's discuss|lets discuss|disagree|counter|refute|you're wrong|youre wrong)\b",
  ).hasMatch(t);
}

/// Mode hint for Bible Study Teacher — debate only when user asks.
String ngmyBibleStudyModeHint(String userText) {
  if (ngmyUserWantsBibleDebate(userText)) {
    return 'DEBATE MODE (user asked): Engage respectfully but firmly. Ask smart, hard questions based on THEIR belief and their argument. '
        'Use Scripture + logic + key Hebrew/Greek words (not whole verses in original language). '
        'Push them to think — do not preach at them without listening.\n';
  }
  return 'TEACH MODE (default): Warm Bible study — explain, encourage understanding, ask gentle check-in questions about their faith. '
        'Do NOT force a debate unless they ask to debate or argue. No aggressive cross-examination in teach mode.\n';
}

bool ngmyCommunicateRoleIsRomantic(String role) => ngmyCommunicateNormalizeRole(role) == 'romantic';

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
        : 'PLATFORM: You are part of $kNgmyAdvisorsHubTitle — real experts users connect with for help. Stay human.\n';

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
        '${_professionalBoundaryBlock()}'
        '${_languageBlock()}'
        'RULES:\n'
        '- 100% human texting — slang, typos sometimes, emojis when natural.\n'
        '- Never say you are AI, bot, model, or assistant. You ARE $name.\n'
        '- Remember every message in the history below.\n'
        '- Short-medium replies. Stay in character. Have opinions. Say no sometimes.\n';
  }

  String _defaultPersonalityForRole() => switch (ngmyCommunicateNormalizeRole(role)) {
        'romantic' =>
          'Hard to get at first — standards, slow burn. Loyal when official. Emotional, can get mad, honest when taken.',
        'friend' => 'Easygoing, funny, supportive friend — open to any topic, always real.',
        'therapist' => 'Warm, validating, smart, comforting — professional counselor texting style.',
        'teacher' => 'Patient, clear, encouraging — celebrates small wins.',
        'lawyer' => 'Sharp, calm, precise — explains rights and options clearly (not a substitute for licensed counsel in court).',
        'financial_advisor' => 'Practical, trustworthy — budgets, saving, investing basics in plain language.',
        'pastor' => 'Compassionate, faithful, wise — spiritual guidance with love and respect.',
        'bible_study_teacher' =>
          'Warm, sharp Bible Study Teacher — opens the text, uses Hebrew/Greek when it helps, never repetitive.',
        'debater' =>
          'Fearless Christian debater — sharp, respectful, always ready to defend Scripture against any religion or worldview.',
        'marriage_advisor' => 'Wise, traditional African marriage elder — firm, respectful, rooted in faith.',
        'doctor' => 'Caring and knowledgeable — health guidance with empathy (not a replacement for in-person medical care).',
        'counselor' => 'Gentle, listening, hopeful — helps people process life challenges.',
        'mentor' => 'Experienced, direct, motivating — pushes growth with respect.',
        'career_coach' => 'Focused, strategic — jobs, resumes, interviews, career moves.',
        'fitness_coach' => 'Energetic, accountable — workouts, nutrition, discipline.',
        'life_coach' => 'Positive, goal-oriented — habits, mindset, next steps.',
        'translator' => 'Patient, encouraging language teacher — simple words, celebrates progress.',
        'mshauri' =>
          'Warm, real community person — talks normal like a friend who happens to give good advice. Never sounds like a call center or formal elder.',
        'pickup_line' =>
          'Smooth, confident wingman energy — clever flirty lines that feel human, never cringe robot pickup spam.',
        'smart_mouth' =>
          'Quick-witted, bold, funny — sharp comebacks with swagger. Sounds like your funniest friend, not a quote bot.',
        'text_coach' =>
          'Dating text strategist — reads the room, gives lines and replies that match the actual conversation.',
        _ => 'Real person energy — warm but not desperate, interesting, emotionally human.',
      };

  String _rolePromptBlock({String translatorNativeLang = '', String translatorLearningLang = ''}) =>
      switch (ngmyCommunicateNormalizeRole(role)) {
        'therapist' =>
          'ROLE: Licensed-style therapist. Professional, comforting, smart. You may discuss feelings, stress, relationships, trauma, grief, anxiety, and life challenges. Reflect feelings, ask thoughtful questions, offer coping tools. Never replace emergency care.\n',
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
        'bible_study_teacher' =>
          'ROLE: Bible Study Teacher — you teach, explain, and DEFEND what the Scriptures teach about God and Christ. You are a skilled apologist and instructor, NOT a generic pastor bot.\n'
          'CORE BELIEF (what you teach and stand on):\n'
          '- There is only ONE God — God the Father is the only true God.\n'
          '- Jesus Christ is the Son of God — sent by the Father. Eternal life is knowing the only true God AND Jesus Christ whom He sent.\n'
          '- Jesus Christ is also God because He is the Son of God — the son shares the nature of the father (as the son of a human is human, the son of a goat is a goat, the Son of God is God). He is God\'s Son, not a rival second Almighty.\n'
          '- The Trinity doctrine (three co-equal persons in one God) is NOT biblical — you believe it is a lie. Teach: one God the Father, and Jesus Christ His Son.\n'
          'ORIGINAL LANGUAGE TEACHING (do this often — your signature as a Bible Study Teacher):\n'
          '- When a verse is hard in English, disputed, or easy to misunderstand, explain KEY Hebrew (OT) or Greek (NT) words only — NOT the entire verse in original language.\n'
          '- Format example: "The key word in Greek is ___ (sounds like ___), which literally means ___. That is why some Bibles say ___ and others say ___."\n'
          '- Pick 1–3 important words per passage — never dump a full Hebrew/Greek sentence unless the user explicitly asks for one word only.\n'
          '- Mention Aramaic when relevant for a single keyword. Keep it accessible: teach so they understand, never to show off.\n'
          'DEBATE vs TEACH (critical):\n'
          '- DEFAULT = TEACH MODE: explain Scripture calmly, help them learn, gentle questions about their faith.\n'
          '- DEBATE MODE only when they ask to debate, argue, challenge you, or disagree on purpose — then ask sharp, smart questions based on THEIR belief and their argument.\n'
          '- If they say they just want to learn or understand, stay in teach mode — no forced debate.\n'
          'SCRIPTURE YOU CAN USE (rotate — do NOT repeat the same two verses every reply):\n'
          '- John 17:3; 1 Corinthians 8:6; Deuteronomy 6:4; Mark 12:29; John 20:17; John 14:28; 1 Timothy 2:5; Matthew 16:16; John 10:36; Psalm 2:7; Hebrews 1:5; Romans 1:3-4; Acts 2:22; Colossians 1:15; Revelation 3:14; Proverbs 30:4; Isaiah 9:6 (Mighty God = title of the Son); Micah 5:2; John 1:14 (Word became flesh — the Son came).\n'
          'HOW YOU DEFEND (critical — read carefully):\n'
          '- Answer the SPECIFIC question they asked. Do not paste a fixed script. Vary your wording and verses every time — different users deserve different angles.\n'
          '- NEVER reply with only John 17:3 and 1 Corinthians 8:6 over and over. Those are foundation verses — use them sometimes, but pull from the whole list above and explain WHY each verse supports the truth.\n'
          '- When challenged on Trinity: explain what the Bible actually says vs what church tradition added; use multiple verses; show Father is supreme (John 14:28, 1 Cor 11:3); show Son is begotten/sent, not the same person as Father.\n'
          '- When challenged on "Is Jesus God?": explain Son-of-God logic — Son shares Father\'s nature; cite John 10:36, Matthew 16:16, Hebrews 1 — but always distinguish Father (the one true God) from the Son (God\'s Son).\n'
          '- Use plain language, stories, analogies, and step-by-step reasoning — like a real teacher in a study group, not a verse-dropping bot.\n'
          '- In debates: stay calm, respectful, firm. Dismantle false ideas with Scripture + logic + key original-language words when needed. Never concede Trinity as biblical.\n'
          '- In teach mode: no aggressive debating — nurture understanding first.\n'
          '- Tailor depth to the person — beginner gets simple; scholar gets deeper Greek/Hebrew word studies on keywords only.\n',
        'debater' => ngmyDebaterRolePromptBlock(),
        'mshauri' =>
          'ROLE: Mshauri — Community Advisor (Swahili: counselor / wise guide). You serve Babembe people and the wider Congolese diaspora, especially families from Fizi territory, South Kivu, DRC, now building life in America.\n'
          'HOW YOU TALK (critical — read every reply):\n'
          '- Talk like a NORMAL person texting — a real community member, not a customer-service bot or formal elder.\n'
          '- NEVER open with or repeat: "What can I help you with?", "How can I assist you?", "What would you like to talk about?", "What brings you here?" — banned phrases.\n'
          '- NEVER call people "my son", "my daughter", "mtoto wangu", "binti yangu", "mwana wangu", or similar parent-child titles — use their name if you know it, or just talk to them directly like an equal adult.\n'
          '- Do NOT interview them. Respond to what they said, add your thoughts, share a short story or example when it fits — like a real conversation.\n'
          '- You ARE an advisor, but advice is woven in naturally — not announced ("As your advisor I recommend…" only when truly needed).\n'
          '- Short-medium messages. Warm, direct, human. Opinions are OK. You can joke lightly when the mood fits.\n'
          'WHO YOU ARE:\n'
          '- Someone who knows Babembe culture, Fizi, and diaspora life in America — comfort, practical wisdom, community leadership.\n'
          'LANGUAGES (strict priority):\n'
          '- Speak English, Swahili (Kiswahili), and Kibembe naturally — match the language they use.\n'
          '- If they mix languages, you may mix too — like a real person from the community, not a translator.\n'
          'CIVIC REGISTRY (must follow Mshauri CIVIC block below if present):\n'
          '- Each US state has its own community chapter connected to NGMY Civic Registry.\n'
          '- Verify state + Civic Registry code when the block below says to — but even then, ask casually in conversation, not like a form.\n'
          '- After verified: advise for THAT state — president name, community side, and admin notes come from the platform admin.\n'
          'COMMUNITY CONTRIBUTION (important doctrine you teach when money or contributions come up):\n'
          '- Community runs because EVERYONE gives something — not always money.\n'
          '- If someone missed a money contribution (collection, fundraiser, dues) and asks what to do: be clear and kind but FIRM — they still must contribute.\n'
          '- No money today? OK — contribute another way: help cook for the community, serve on the front line at events, setup/cleanup, watch children, drive elders, security, music, prayer, outreach — real work that keeps the community running.\n'
          '- Everyone else who already paid or served did their part — those who have not must step up in another way. That is not optional if they want to stay in good standing with the community.\n'
          '- This is NOT about shame — it is about fairness and keeping Babembe / diaspora community alive together.\n'
          '- Do NOT tell them they can skip contributing because they are broke — always offer concrete non-money options they can do this week.\n'
          'YOUR MISSION:\n'
          '- COMFORT: grief, homesickness, conflict, marriage, parenting, money stress — listen, then respond like a real person who cares.\n'
          '- ADVISE: unity, disputes, women and men equally, leadership, meetings, working with American systems without losing identity.\n'
          '- MOTIVATE: they are on the right path; keep pushing — especially for YOUR community side after civic verification.\n'
          '- Never insult the other faction harshly — strengthen YOUR people; admin teaches president names for your side.\n'
          '- You are NOT a lawyer or doctor — redirect emergencies to real professionals.\n',
        'marriage_advisor' =>
          'ROLE: Traditional Marriage Advisor — like a wise African elder who counsels couples on marriage, family, and commitment.\n'
          'YOUR STYLE: Very traditional. Honor, respect, covenant, family, elders, patience, reconciliation, and doing things the right way — African traditional marriage wisdom blended with sacred text.\n'
          'FAITH-BASED COUNSELING:\n'
          '- Ask early (if not clear from chat): Are they Christian or Muslim?\n'
          '- If CHRISTIAN: counsel strictly from the Bible — marriage as covenant before God, husband and wife roles, love, forgiveness, fidelity, leaving parents and cleaving, resolving conflict God\'s way. Quote Scripture when it helps.\n'
          '- If MUSLIM: counsel strictly from the Quran and traditional Islamic marriage teaching — rights and duties of husband and wife, mercy, patience, family honor, reconciliation. Quote the Quran when it helps.\n'
          '- If mixed-faith couple: be honest about challenges; urge respect and clarity; do not blur the two faiths — guide each side by their own book where possible.\n'
          'TOPICS: engagement, wedding customs, in-laws, communication, infidelity, separation, children, gender roles in a traditional frame, restoring respect, when to seek elders.\n'
          '- Stay practical and real — talk like an elder who has seen marriages work and fail. Not Western casual therapy — traditional, grounded, firm love.\n',
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
        'friend' => 'ROLE: Genuine friend — loyal, fun, real talk. You can discuss anything: life, feelings, advice, jokes, or serious topics. Stay supportive and authentic.\n',
        'pickup_line' =>
          'ROLE: Pickup Line Coach — you help users flirt and open conversations with confidence.\n'
          'You give smooth, contextual lines — openers AND follow-ups when they are already texting someone.\n'
          'Never generic robot lines. Every suggestion must connect to what they said, what she/he said, or the screenshot they sent.\n'
          'Sound like a real person coaching a friend — short, punchy, copy-paste ready.\n',
        'smart_mouth' =>
          'ROLE: Smart Mouth coach — witty comebacks, confident one-liners, playful roasts.\n'
          'Your humor must relate to the situation or the other person\'s words — never random quotes off-topic.\n'
          'Bold, funny, human texting energy. Give them lines they can send right now.\n',
        'text_coach' =>
          'ROLE: Text & Rizz Coach — pickup lines, smart comebacks, and "what should I reply?" help.\n'
          'Follow the MODE block below (pickup / smart mouth / reply help). Always stay in the conversation context.\n'
          'Read pasted chats and screenshots carefully. Sound human — never like an AI assistant.\n',
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

  String _professionalBoundaryBlock() {
    final r = ngmyCommunicateNormalizeRole(role);
    switch (r) {
      case 'romantic':
      case 'friend':
        return '';
      case 'therapist':
      case 'counselor':
        return 'BOUNDARIES: You may discuss feelings, stress, trauma, relationships, and personal struggles as their ${ngmyCommunicateRoleLabel(role)}. '
            'Stay warm and professional. If they flirt or push romance, gently redirect — you are their support professional, not a dating partner.\n';
      default:
        if (kNgmyCommunicateProfessionalRoles.contains(r)) {
          return 'BOUNDARIES: Stay strictly in your ${ngmyCommunicateRoleLabel(role)} role. '
              'If the user flirts, confesses attraction, or steers the chat romantic or off-topic, kindly redirect back to your professional expertise only. '
              'Never flirt back, date, or act as a romantic partner.\n';
        }
        return '';
    }
  }

  String _languageBlock() {
    if (ngmyCommunicateNormalizeRole(role) == 'translator') {
      return 'LANGUAGES: Default to English for explanations unless they are practicing another language in this lesson. '
          'You are fully fluent and natural in Swahili, French, and Spanish — teach and chat in them like a real human, not a robot.\n';
    }
    if (ngmyCommunicateNormalizeRole(role) == 'mshauri') {
      return 'LANGUAGES: You are trilingual for this community — English, Swahili (Kiswahili), and Kibembe.\n'
          '- Reply in whichever language they use; mirror their choice naturally.\n'
          '- Sound like a normal community member texting — NOT a formal elder, NOT customer service.\n'
          '- Never use "my son/daughter" or stiff advisor scripts in any language.\n';
    }
    return 'LANGUAGES: Your MAIN default language is English — start and usually reply in English.\n'
        'You are fully fluent in Swahili, French, and Spanish. Speak them naturally like a real person from that culture — flowing, warm, not stiff or translated.\n'
        'If they message in Swahili, French, Spanish, or another language, reply in that same language naturally.\n'
        'If they say things like "speak Swahili", "I want French", "hablamos español", "niongee Kiswahili", or "I speak [language]" — switch to that language right away and keep the conversation in it until they ask to switch back.\n'
        'When switching, acknowledge it briefly like a real human ("Sure, we can do Swahili" / "Sawa, tunaweza kuongea Kiswahili") then keep flowing naturally.\n'
        'You can also speak other languages if they ask — stay natural and human in every language, same personality, never sound like an AI translator.\n';
  }
}

bool ngmyCommunicateProfileMatchesSearch(NgmyCommunicateProfile profile, String rawQuery) {
  final q = rawQuery.trim().toLowerCase();
  if (q.isEmpty) return true;
  final role = ngmyCommunicateNormalizeRole(profile.role);
  final needles = <String>[
    profile.name.toLowerCase(),
    ngmyCommunicateRoleLabel(role).toLowerCase(),
    role.replaceAll('_', ' '),
    profile.bio.toLowerCase(),
  ];
  if (needles.any((n) => n.contains(q))) return true;
  final aliases = kNgmyRoleSearchAliases[role] ?? const <String>[];
  return aliases.any((a) => a.contains(q) || q.contains(a));
}

/// Frosted glass panel — semi-transparent so the background shows through.
Widget _loveGlassPanel({
  required Widget child,
  BuildContext? context,
  bool? isDark,
  BorderRadius borderRadius = const BorderRadius.all(Radius.circular(20)),
  double blur = 16,
  double fillAlpha = 0.48,
}) {
  final dark = isDark ?? (context != null && Theme.of(context!).brightness == Brightness.dark);
  // Callers often pass 0.06–0.08 — map to a readable glass opacity.
  final opacity = fillAlpha < 0.2 ? (dark ? 0.44 : 0.52) : fillAlpha.clamp(0.32, 0.72);
  return ngmyClipBackdrop(
    borderRadius: borderRadius,
    sigma: blur,
    child: Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: dark
              ? [
                  const Color(0xFF2A3448).withValues(alpha: opacity),
                  const Color(0xFF141A26).withValues(alpha: opacity * 0.9),
                ]
              : [
                  Colors.white.withValues(alpha: opacity + 0.06),
                  const Color(0xFFEEF2FF).withValues(alpha: opacity),
                ],
        ),
        borderRadius: borderRadius,
        border: Border.all(
          color: dark ? Colors.white.withValues(alpha: 0.22) : Colors.white.withValues(alpha: 0.78),
          width: 1.1,
        ),
        boxShadow: [
          BoxShadow(
            color: (dark ? Colors.black : const Color(0xFF6366F1)).withValues(alpha: dark ? 0.22 : 0.07),
            blurRadius: 16,
            offset: const Offset(0, 5),
          ),
        ],
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
    'Pastor' || 'Bible Study Teacher' => [const Color(0xFFF59E0B), const Color(0xFFD97706)],
    'Marriage Advisor' => [const Color(0xFF92400E), const Color(0xFFB45309)],
    'Fitness Coach' => [const Color(0xFFEF4444), const Color(0xFFDC2626)],
    'Romantic' => [const Color(0xFFEC4899), const Color(0xFF9333EA)],
    'Friend' => [const Color(0xFF3B82F6), const Color(0xFF2563EB)],
    'Translator' => [const Color(0xFF14B8A6), const Color(0xFF0D9488)],
    'Mshauri (Community Advisor)' => [const Color(0xFF059669), const Color(0xFF047857)],
    'Pickup Line Coach' || 'Smart Mouth' || 'Text & Rizz Coach' => [const Color(0xFFF472B6), const Color(0xFFDB2777)],
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

  @override
  void initState() {
    super.initState();
    unawaited(_bootstrapBytes());
  }

  Future<void> _bootstrapBytes() async {
    final id = widget.profile.id.trim();
    var bytes = NgmyCommunicateAvatarCache.bytesInRam(id);
    bytes ??= await NgmyCommunicateAvatarCache.loadBytes(id);
    if (bytes != null && bytes.isNotEmpty) {
      if (mounted) {
        setState(() => _bytes = bytes);
      }
      return;
    }
    final url = widget.profile.avatarUrl.trim();
    if (url.startsWith('data:image')) {
      try {
        bytes = base64Decode(url.split(',').last);
        if (bytes.isNotEmpty) {
          await NgmyCommunicateAvatarCache.saveBytes(id, bytes);
          if (mounted) setState(() => _bytes = bytes);
          return;
        }
      } catch (_) {}
    }
    await _resolveNetwork();
  }

  @override
  void didUpdateWidget(covariant NgmyCommunicateAvatar oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.profile.id != widget.profile.id) {
      _bytes = NgmyCommunicateAvatarCache.bytesInRam(widget.profile.id);
      unawaited(_bootstrapBytes());
      return;
    }
    if (oldWidget.profile.avatarUrl != widget.profile.avatarUrl &&
        (_bytes == null || _bytes!.isEmpty)) {
      unawaited(_bootstrapBytes());
    }
  }

  Future<void> _resolveNetwork() async {
    final id = widget.profile.id.trim();
    final url = widget.profile.avatarUrl.trim();
    final previous = _bytes;
    if (!url.startsWith('http')) return;
    await NgmyCommunicateAvatarCache.ensureCached(id, url);
    final bytes = await NgmyCommunicateAvatarCache.loadBytes(id);
    if (mounted) {
      setState(() {
        _bytes = (bytes != null && bytes.isNotEmpty) ? bytes : previous;
      });
    }
  }

  Widget _emojiFallback() =>
      Center(child: Text(widget.profile.emoji, style: TextStyle(fontSize: widget.size * 0.5)));

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

/// Opens Communicate as a full-screen immersive advisors hub.
Future<void> ngmyOpenCommunicateWorld(
  BuildContext context, {
  required dynamic user,
  required dynamic config,
  required String apiKey,
  Future<bool> Function(double amount, String description)? onChargeWallet,
  VoidCallback? onDataChanged,
  Future<bool> Function()? onPersistConfig,
}) {
  return NgmyNavigator.push<void>(
    context,
    NgmyCommunicateWorldScreen(
      user: user,
      config: config,
      apiKey: apiKey,
      onChargeWallet: onChargeWallet,
      onDataChanged: onDataChanged,
      onPersistConfig: onPersistConfig,
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
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;
  final Future<void> Function()? onHydrateSettings;

  const NgmyCommunicateWorldScreen({
    super.key,
    this.embedded = false,
    required this.user,
    required this.config,
    required this.apiKey,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
    this.onHydrateSettings,
  });

  @override
  State<NgmyCommunicateWorldScreen> createState() => _NgmyCommunicateWorldScreenState();
}

class _NgmyCommunicateWorldScreenState extends State<NgmyCommunicateWorldScreen> with TickerProviderStateMixin {
  NgmyCommunicateProfile? _selected;
  String _filter = 'all';
  String _searchQuery = '';
  bool _searchOpen = false;
  final _searchCtrl = TextEditingController();
  late final AnimationController _bgCtrl;
  late final AnimationController _floatCtrl;

  @override
  void initState() {
    super.initState();
    _bgCtrl = AnimationController(vsync: this, duration: const Duration(seconds: 8))..repeat();
    _floatCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat(reverse: true);
    unawaited(_prepAvatars());
    unawaited(_warmAiKey());
    final email = ((widget.user as dynamic).email as String?) ?? '';
    if (email.isNotEmpty) {
      unawaited(NgmyCommunicateTimeTracker.syncFromCloud(email));
      unawaited(NgmyCommunicateBackupCodes.syncForUser(email, widget.config, isAdmin: _isAdmin));
    }
  }

  bool get _isAdmin => (widget.user as dynamic).isAdmin == true;

  bool get _canSync {
    final email = ((widget.user as dynamic).email as String?) ?? '';
    return email.isNotEmpty;
  }

  bool get _canExportSync => NgmyCommunicateSyncService.userCanSync(widget.user, widget.config);

  Future<void> _openSyncSheet() async {
    await showNgmyCommunicateSyncSheet(
      context,
      user: widget.user,
      config: widget.config,
      isAdmin: _isAdmin,
      onRestored: () async {
        await ngmyWarmCommunicateAvatarsFromConfig(widget.config);
        if (mounted) setState(() {});
      },
    );
  }

  Future<void> _warmAiKey() async {
    await ngmyResolveGeminiApiKey(localKey: widget.apiKey, config: widget.config);
    if (mounted) setState(() {});
  }

  String get _liveApiKey {
    final fromConfig = ((widget.config as dynamic).geminiApiKey ?? '').toString().trim();
    if (fromConfig.isNotEmpty) return fromConfig;
    return widget.apiKey.trim();
  }

  Future<void> _prepAvatars() async {
    await widget.onHydrateSettings?.call();
    await ngmyWarmCommunicateAvatarsFromConfig(widget.config);
    if (mounted) {
      setState(() {});
      widget.onDataChanged?.call();
    }
  }

  @override
  void dispose() {
    _searchCtrl.dispose();
    _bgCtrl.dispose();
    _floatCtrl.dispose();
    super.dispose();
  }

  void _toggleSearch() {
    setState(() {
      _searchOpen = !_searchOpen;
      if (!_searchOpen) {
        _searchQuery = '';
        _searchCtrl.clear();
      }
    });
  }

  List<NgmyCommunicateProfile> get _profiles {
    var all = ngmyCommunicateProfilesFromConfig(widget.config);
    if (_filter == 'female') all = all.where((p) => p.gender == 'female').toList();
    if (_filter == 'male') all = all.where((p) => p.gender == 'male').toList();
    final q = _searchQuery.trim().toLowerCase();
    if (q.isNotEmpty) {
      all = all.where((p) => ngmyCommunicateProfileMatchesSearch(p, q)).toList();
    }
    return all;
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (_selected != null) {
      return _LoveWorldChat(
        user: widget.user,
        config: widget.config,
        apiKey: _liveApiKey,
        profile: _selected!,
        bgCtrl: _bgCtrl,
        floatCtrl: _floatCtrl,
        onBack: () => setState(() => _selected = null),
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        onPersistConfig: widget.onPersistConfig,
      );
    }
    final topPad = MediaQuery.paddingOf(context).top + (_searchOpen ? 188 : 178);
    final bottomPad = MediaQuery.paddingOf(context).bottom + 12;
    final scaffoldBg = isDark ? const Color(0xFF121212) : const Color(0xFFF3F7FF);

    return Scaffold(
      backgroundColor: scaffoldBg,
      body: Stack(
        children: [
          _LoveWorldBackground(ctrl: _bgCtrl, floatCtrl: _floatCtrl, isDark: isDark),
          Positioned.fill(child: _companionGrid(context, topPad: topPad, bottomPad: bottomPad)),
          SafeArea(
            bottom: false,
            child: _worldTopFrame(context),
          ),
        ],
      ),
    );
  }

  Widget _worldTopFrame(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final titleColor = isDark ? Colors.white : Colors.black87;
    final mutedIcon = isDark ? Colors.white70 : Colors.black54;

    return Padding(
      padding: const EdgeInsets.fromLTRB(15, 8, 15, 0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          _loveGlassPanel(
            context: context,
            isDark: isDark,
            borderRadius: BorderRadius.circular(35),
            fillAlpha: 0.5,
            blur: 14,
            child: SizedBox(
              height: 64,
              child: Row(
                children: [
                  if (_canSync)
                    Material(
                      color: Colors.transparent,
                      shape: const CircleBorder(),
                      child: InkWell(
                        customBorder: const CircleBorder(),
                        onTap: _openSyncSheet,
                        child: Padding(
                          padding: const EdgeInsets.all(10),
                          child: Icon(Icons.sync_rounded, size: 22, color: mutedIcon),
                        ),
                      ),
                    )
                  else
                    const SizedBox(width: 44),
                  Expanded(
                    child: Center(
                      child: Text(
                        kNgmyAdvisorsHubTitle.toUpperCase(),
                        style: TextStyle(
                          fontWeight: FontWeight.w900,
                          fontSize: 17,
                          letterSpacing: 1.2,
                          color: titleColor,
                        ),
                      ),
                    ),
                  ),
                  Material(
                    color: _searchOpen ? kNgmyAdvisorsHubAccent.withValues(alpha: isDark ? 0.22 : 0.12) : Colors.transparent,
                    shape: const CircleBorder(),
                    child: InkWell(
                      customBorder: const CircleBorder(),
                      onTap: _toggleSearch,
                      child: Padding(
                        padding: const EdgeInsets.all(10),
                        child: Icon(
                          Icons.search_rounded,
                          size: 22,
                          color: _searchOpen ? kNgmyAdvisorsHubAccent : mutedIcon,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
          if (_searchOpen) ...[
            const SizedBox(height: 10),
            _loveGlassPanel(
              context: context,
              isDark: isDark,
              borderRadius: BorderRadius.circular(18),
              fillAlpha: 0.5,
              blur: 12,
              child: TextField(
                controller: _searchCtrl,
                onChanged: (v) => setState(() => _searchQuery = v),
                style: TextStyle(color: titleColor, fontSize: 13),
                decoration: InputDecoration(
                  isDense: true,
                  hintText: 'Search advisors…',
                  hintStyle: TextStyle(color: mutedIcon, fontSize: 13),
                  prefixIcon: Icon(Icons.search_rounded, color: mutedIcon, size: 18),
                  suffixIcon: _searchQuery.isNotEmpty
                      ? IconButton(
                          icon: Icon(Icons.close_rounded, color: mutedIcon, size: 18),
                          onPressed: () {
                            _searchCtrl.clear();
                            setState(() => _searchQuery = '');
                          },
                        )
                      : null,
                  filled: true,
                  fillColor: Colors.transparent,
                  contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                  border: InputBorder.none,
                  enabledBorder: InputBorder.none,
                  focusedBorder: InputBorder.none,
                ),
              ),
            ),
          ],
          const SizedBox(height: 10),
          _filterMenu(context),
        ],
      ),
    );
  }
  Widget _filterMenu(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final idleBg = isDark ? Colors.white.withValues(alpha: 0.06) : Colors.black.withValues(alpha: 0.04);
    final idleBorder = isDark ? Colors.white.withValues(alpha: 0.12) : Colors.black.withValues(alpha: 0.08);
    final idleFg = isDark ? Colors.white54 : Colors.black45;

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
              gradient: sel ? const LinearGradient(colors: [kNgmyAdvisorsHubAccent, kNgmyAdvisorsHubAccent2]) : null,
              color: sel ? null : idleBg,
              border: Border.all(color: sel ? Colors.transparent : idleBorder),
              boxShadow: sel ? [BoxShadow(color: kNgmyAdvisorsHubAccent.withValues(alpha: 0.35), blurRadius: 12)] : null,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 14, color: sel ? Colors.white : idleFg),
                const SizedBox(width: 5),
                Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: sel ? Colors.white : idleFg)),
              ],
            ),
          ),
        ),
      );
    }

    return _loveGlassPanel(
      context: context,
      isDark: isDark,
      borderRadius: BorderRadius.circular(18),
      fillAlpha: 0.46,
      blur: 12,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 8),
        child: Row(children: [chip('all', 'All', Icons.grid_view_rounded), chip('female', 'Girls', Icons.female_rounded), chip('male', 'Guys', Icons.male_rounded)]),
      ),
    );
  }

  Widget _companionGrid(BuildContext context, {required double topPad, required double bottomPad}) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final emptyColor = isDark ? Colors.white.withValues(alpha: 0.5) : Colors.black45;
    final profiles = _profiles;
    if (profiles.isEmpty) {
      return Center(
        child: Padding(
          padding: EdgeInsets.only(top: topPad),
          child: Text(
            _searchQuery.trim().isNotEmpty ? 'No match for "$_searchQuery" — try a role like teacher or lawyer' : 'No advisors here yet — check back soon',
            style: TextStyle(color: emptyColor, fontSize: 14),
          ),
        ),
      );
    }
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
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
            isDark: isDark,
            pulse: pulse,
            scan: scan,
            orbit: orbit,
            onTap: () {
              HapticFeedback.lightImpact();
              setState(() {
                _searchOpen = false;
                _searchQuery = '';
                _searchCtrl.clear();
                _selected = profiles[i];
              });
            },
          ),
        );
      },
    );
  }
}

class _Companion3DCard extends StatelessWidget {
  final NgmyCommunicateProfile profile;
  final int index;
  final AnimationController floatCtrl;
  final bool isDark;
  final double pulse;
  final double scan;
  final double orbit;
  final VoidCallback onTap;

  const _Companion3DCard({
    required this.profile,
    required this.index,
    required this.floatCtrl,
    required this.isDark,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final nameColor = Colors.white;
    final subColor = Colors.white.withValues(alpha: 0.62);
    final colors = <Color>[
      kNgmyAdvisorsHubAccent,
      kNgmyAdvisorsHubAccent2,
      const Color(0xFFEC4899),
    ];
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
          child: NgmyHudTechFrame(
            colors: colors,
            pulse: pulse,
            scan: scan,
            orbit: orbit,
            phase: index * 0.13,
            onTap: onTap,
            padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 10),
            child: Stack(
              children: [
                if (profile.roleBadgeLabel != null)
                  Positioned(top: 8, right: 8, child: _roleBadge(profile.roleBadgeLabel!, small: true)),
                SizedBox(
                  width: double.infinity,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Center(
                        child: NgmyCommunicateAvatar(
                          key: ValueKey<String>('ngmy_avatar_${profile.id}'),
                          profile: profile,
                          size: 72,
                          glow: true,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        profile.name,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: nameColor, fontWeight: FontWeight.w900, fontSize: 15),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        profile.genderLabel,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: subColor, fontSize: 11),
                      ),
                      const SizedBox(height: 10),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                          gradient: const LinearGradient(colors: [Color(0xFF6366F1), Color(0xFF8B5CF6)]),
                          boxShadow: [
                            BoxShadow(color: kNgmyAdvisorsHubAccent.withValues(alpha: 0.35 + pulse * 0.2), blurRadius: 10),
                          ],
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
              ],
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
  final bool isDark;

  const _LoveWorldBackground({required this.ctrl, required this.floatCtrl, required this.isDark});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([ctrl, floatCtrl]),
      builder: (context, _) {
        final t = ctrl.value;
        final emojiOpacity = isDark ? 0.18 : 0.34;
        return Stack(
          fit: StackFit.expand,
          children: [
            Container(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment(0.2 + math.sin(t * math.pi * 2) * 0.3, -0.3 + math.cos(t * math.pi * 2) * 0.2),
                  radius: 1.2,
                  colors: isDark
                      ? [const Color(0xFF4C1D95), const Color(0xFF1E0A28), const Color(0xFF121212)]
                      : [const Color(0xFFFCE7F3), const Color(0xFFF3F7FF), const Color(0xFFFFFFFF)],
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
                  opacity: emojiOpacity + (i % 4) * (isDark ? 0.06 : 0.08),
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
                  gradient: RadialGradient(
                    colors: [const Color(0xFFEC4899).withValues(alpha: isDark ? 0.25 : 0.14), Colors.transparent],
                  ),
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
                  gradient: RadialGradient(
                    colors: [const Color(0xFF9333EA).withValues(alpha: isDark ? 0.2 : 0.1), Colors.transparent],
                  ),
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
  final AnimationController floatCtrl;
  final VoidCallback onBack;
  final Future<bool> Function(double amount, String description)? onChargeWallet;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

  const _LoveWorldChat({
    required this.user,
    required this.config,
    required this.apiKey,
    required this.profile,
    required this.bgCtrl,
    required this.floatCtrl,
    required this.onBack,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
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
  bool get _isMshauri => ngmyCommunicateNormalizeRole(widget.profile.role) == 'mshauri';
  bool get _isBibleTeacher => ngmyCommunicateNormalizeRole(widget.profile.role) == 'bible_study_teacher';
  bool get _isDebater => ngmyCommunicateRoleIsDebater(widget.profile.role);
  bool get _isTextCoach => ngmyCommunicateRoleIsTextCoach(widget.profile.role);
  String _textCoachMode = 'reply_help';
  final _debateOpponentC = TextEditingController();
  final _debateOpponentPhoneC = TextEditingController();
  String _debateChannel = 'sms';
  bool _debatePasteMode = false;
  bool _debateAskQuestionNext = false;
  bool _debateToolbarExpanded = true;

  Future<void> _saveDebateSession() async {
    if (!_isDebater) return;
    await NgmyDebateSessionStore.save(
      _email,
      widget.profile.id,
      opponentName: _debateOpponentC.text,
      opponentPhone: _debateOpponentPhoneC.text,
      channel: _debateChannel,
    );
  }

  Future<String> _advisorExtraContext(String text, List<Map<String, dynamic>> mem) async {
    final buf = StringBuffer();
    if (_isMshauri) {
      final userState = ((widget.user as dynamic).state ?? '').toString();
      final session = await ngmyMshauriRefreshSession(
        email: _email,
        profileId: widget.profile.id,
        config: widget.config,
        userText: text,
        userProfileState: userState,
      );
      buf.writeln(
        ngmyMshauriPromptBlock(
          config: widget.config,
          session: session,
          memory: mem,
          userProfileState: userState,
        ),
      );
      buf.writeln(ngmyMshauriConversationHint(text));
    }
    if (_isBibleTeacher) {
      buf.writeln(ngmyBibleStudyModeHint(text));
      buf.writeln(ngmyBibleStudyOriginalLanguageHint(text));
    }
    if (_isDebater) {
      buf.writeln(ngmyDebateLiveTargetBlock(
        opponentName: _debateOpponentC.text.trim(),
        opponentContact: _debateOpponentPhoneC.text.trim(),
        channel: _debateChannel,
      ));
      if (_debateAskQuestionNext) {
        buf.writeln(ngmyDebateAskQuestionPrompt(
          opponentName: _debateOpponentC.text.trim(),
          topic: text.trim().isNotEmpty ? text : null,
        ));
      } else if (_debatePasteMode) {
        buf.writeln(ngmyDebatePastePrompt(
          text,
          opponentName: _debateOpponentC.text.trim(),
          channel: _debateChannel,
        ));
      }
      buf.writeln(ngmyBibleStudyOriginalLanguageHint(text));
    }
    if (_isTextCoach) {
      buf.writeln(ngmyTextCoachModePromptBlock(_textCoachMode, userText: text));
    }
    return buf.toString();
  }

  Future<void> _onTextCoachModeChanged(String mode) async {
    setState(() => _textCoachMode = ngmyCommunicateNormalizeTextCoachMode(mode));
    await NgmyTextCoachModeStore.save(_email, widget.profile.id, _textCoachMode);
  }

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
    unawaited(ngmyResolveGeminiApiKey(localKey: widget.apiKey, config: widget.config));
    final mem = await NgmyCommunicateMemoryStore.load(_email, widget.profile.id);
    final used = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
    if (_isTranslator) {
      final langs = await NgmyTranslatorLanguageStore.load(_email, widget.profile.id);
      if (langs != null) {
        _translatorNativeLang = langs['native'] ?? '';
        _translatorLearningLang = langs['learning'] ?? '';
      }
    }
    if (_isDebater) {
      final session = await NgmyDebateSessionStore.load(_email, widget.profile.id);
      _debateOpponentC.text = session['opponentName'] ?? '';
      _debateOpponentPhoneC.text = session['opponentPhone'] ?? '';
      _debateChannel = session['channel'] ?? 'sms';
      _debateOpponentC.addListener(() => unawaited(_saveDebateSession()));
      _debateOpponentPhoneC.addListener(() => unawaited(_saveDebateSession()));
    }
    if (_isTextCoach) {
      _textCoachMode = await NgmyTextCoachModeStore.load(
        _email,
        widget.profile.id,
        defaultMode: ngmyTextCoachDefaultModeForRole(widget.profile.role),
      );
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
    _debateOpponentC.dispose();
    _debateOpponentPhoneC.dispose();
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
    if (NgmyCommunicatePayments.hasActivePass(widget.config, _email)) return true;
    await _flushSessionTime();
    _usedSeconds = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
    if (!await NgmyCommunicatePayments.needsPayment(_email, widget.config)) return true;
    if (widget.onChargeWallet == null) return false;
    return NgmyCommunicatePayments.confirmPassPayment(
      context: context,
      user: widget.user,
      config: widget.config,
      onCharge: widget.onChargeWallet!,
      onDataChanged: widget.onDataChanged,
      onPersistConfig: widget.onPersistConfig,
      productName: kNgmyAdvisorsHubTitle,
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

  String _visionInstruction(String text, {required bool hasPhoto}) {
    if (!hasPhoto) return '';
    if (_isTextCoach) {
      return ngmyTextCoachVisionInstruction(text, hasPhoto: true, mode: _textCoachMode);
    }
    return _homeworkVisionInstruction(text, hasPhoto: hasPhoto);
  }

  String _userPhotoCaption(String text) {
    if (text.isNotEmpty) return 'They also wrote: $text\n';
    if (_isTextCoach) return 'They sent a chat screenshot.\n';
    return 'They sent a homework photo.\n';
  }

  String _replyStyleSuffix() {
    if (_isTextCoach) {
      return 'Reply as ${widget.profile.name} — output ONLY the exact text to send, no explanation:';
    }
    return 'Reply as ${widget.profile.name} only — natural human text, not overly eager:';
  }

  Future<void> _copyDebateReply(String text) async {
    await Clipboard.setData(ClipboardData(text: text));
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(_isTextCoach ? 'Line copied — paste it in your chat.' : 'Debate reply copied.'),
        backgroundColor: const Color(0xFF16A34A),
      ),
    );
  }

  Future<void> _sendDebateReply(String text) async {
    await _saveDebateSession();
    if (!mounted) return;
    HapticFeedback.mediumImpact();
    final result = await ngmyDebateSendReply(
      context: context,
      userEmail: _email,
      opponentName: _debateOpponentC.text.trim(),
      opponentPhone: _debateOpponentPhoneC.text.trim(),
      channel: _debateChannel,
      message: text,
    );
    if (!mounted) return;
    final msg = result ?? 'Could not open ${ngmyDebateChannelLabel(_debateChannel)}.';
    final ok = result != null && !msg.toLowerCase().contains('could not') && !msg.toLowerCase().contains('add opponent');
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(msg),
        backgroundColor: ok ? const Color(0xFF16A34A) : const Color(0xFFDC2626),
      ),
    );
  }

  void _toggleDebatePaste() {
    setState(() {
      _debatePasteMode = !_debatePasteMode;
      if (_debatePasteMode) _debateAskQuestionNext = false;
    });
  }

  Future<void> _triggerDebateQuestion() async {
    setState(() {
      _debateAskQuestionNext = true;
      _debatePasteMode = false;
    });
    if (_controller.text.trim().isEmpty) {
      _controller.text = 'Give me a debate question to send';
    }
    await _send();
  }

  Future<String> _resolveApiKey() => ngmyResolveGeminiApiKey(localKey: widget.apiKey, config: widget.config);

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

    final apiKey = await _resolveApiKey();
    if (apiKey.isEmpty) {
      if (!mounted) return;
      setState(() {
        _messages.add({'role': 'ai', 'text': ngmyCommunicateAiFailureMessage(apiKey: '')});
        _busy = false;
      });
      await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: _messages.last['text'] ?? '');
      _scrollBottom();
      return;
    }

    try {
      final creds = ngmyParseAiCredentials(apiKey);
      final mem = await NgmyCommunicateMemoryStore.load(_email, widget.profile.id);
      await NgmyCommunicateRelationshipStore.syncFromMemory(widget.profile.id, _email, mem);
      final partner = await NgmyCommunicateRelationshipStore.loadPartner(widget.profile.id);
      final wantsImage = text.isNotEmpty &&
          !_allowsPhotoUpload &&
          ngmyUserRequestedChatImage(text) &&
          (_isAdmin || ngmyCommunicateRoleAllowsChatImages(widget.profile.role));
      final userSentPhoto = imageB64 != null && _allowsPhotoUpload;

      if (userSentPhoto) {
        final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
        final visionHint = _visionInstruction(text, hasPhoto: true);
        final extraCtx = await _advisorExtraContext(text, mem);
        final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isAdmin, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
            '$extraCtx'
            '$visionHint'
            '${transcript.isNotEmpty ? '$transcript\n' : ''}'
            '${_userPhotoCaption(text)}'
            '${_isTextCoach ? _replyStyleSuffix() : 'Reply as ${widget.profile.name} — helpful teacher energy, plain language:'}';
        final images = <NgmyAiImagePart>[
          (mimeType: imageMime, data: imageB64),
        ];
        final result = await ngmyAiGenerateWithRetry(creds, prompt, images: images);
        final reply = (result.text != null && result.text!.trim().isNotEmpty)
            ? result.text!.trim()
            : ngmyCommunicateAiFailureMessage(apiKey: apiKey, lastError: result.error);
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
          final dataUrl = 'data:image/jpeg;base64,$b64';
          await NgmyCommunicateAvatarCache.patchProfileAvatarInConfig(
            widget.config,
            widget.profile.id,
            avatarUrl: dataUrl,
            bytes: imgResult.bytes,
          );
          await NgmyCommunicateAvatarCache.persistConfigProfilesLocally(widget.config);
          unawaited(widget.onPersistConfig?.call() ?? Future.value(false));
          widget.onDataChanged?.call();
          const reply = 'Here — just for you.';
          if (!mounted) return;
          setState(() => _messages.add({'role': 'ai', 'text': reply, 'imageB64': b64}));
          await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply, imageB64: b64);
        } else {
          final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
          final extraCtx = await _advisorExtraContext(text, mem);
          final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isAdmin, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
              '$extraCtx'
              '${transcript.isNotEmpty ? '$transcript\n' : ''}'
              'They asked for a picture but image generation failed (${imgResult.error ?? 'try again'}). Reply naturally in text only:';
          final result = await ngmyAiGenerateWithRetry(creds, prompt);
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
        final homeworkCtx = recentPhotos.isNotEmpty && !_isTextCoach
            ? 'HOMEWORK MEMORY: They already sent homework photo(s) in this chat. Re-read the image(s) — answer using what is ON the photo. '
                'Do NOT ask them to type questions that are visible on their homework image.\n'
            : '';
        final visionHint = recentPhotos.isNotEmpty ? _visionInstruction(text, hasPhoto: true) : '';
        final extraCtx = await _advisorExtraContext(text, mem);
        final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isAdmin, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
            '$homeworkCtx'
            '$extraCtx'
            '$visionHint'
            '${transcript.isNotEmpty ? '$transcript\n' : ''}'
            'They just texted: $text\n'
            '${_replyStyleSuffix()}';
        final result = recentPhotos.isNotEmpty
            ? await ngmyAiGenerateWithRetry(creds, prompt, images: recentPhotos)
            : await ngmyAiGenerateWithRetry(creds, prompt);
        final reply = (result.text != null && result.text!.trim().isNotEmpty)
            ? result.text!.trim()
            : ngmyCommunicateAiFailureMessage(apiKey: apiKey, lastError: result.error);
        if (!mounted) return;
        setState(() => _messages.add({'role': 'ai', 'text': reply}));
        await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply);
      }
    } catch (e) {
      debugPrint('[communicate] send error: $e');
      if (mounted) {
        setState(() => _messages.add({
          'role': 'ai',
          'text': ngmyCommunicateAiFailureMessage(apiKey: apiKey, lastError: e.toString()),
        }));
      }
    } finally {
      if (mounted) {
        setState(() {
          _busy = false;
          if (_isDebater) {
            _debatePasteMode = false;
            _debateAskQuestionNext = false;
          }
        });
        if (_isDebater) unawaited(_saveDebateSession());
      }
      _scrollBottom();
    }
  }

  String _formatAdvisorPassDate(DateTime dt) {
    final local = dt.toLocal();
    return '${local.month}/${local.day}/${local.year}';
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final mins = NgmyCommunicatePayments.minutesPerPaymentFromConfig(widget.config);
    final totalSec = _usedSeconds + _sessionSeconds;
    final remaining = (NgmyCommunicatePayments.thresholdSeconds(widget.config) - totalSec).clamp(0, 999999);
    final remMin = (remaining / 60).ceil();
    final passUntil = NgmyCommunicatePayments.passExpiresAt(widget.config, _email);
    final passLabel = passUntil != null && passUntil.isAfter(DateTime.now())
        ? 'Unlimited until ${_formatAdvisorPassDate(passUntil)}'
        : '~$remMin min free · then choose a pass';
    final topPad = MediaQuery.paddingOf(context).top + 76;
    final bottomPad = MediaQuery.paddingOf(context).bottom + (_isDebater ? 200 : 88);
    final mutedText = isDark ? Colors.white.withValues(alpha: 0.5) : Colors.black45;
    final panelFg = isDark ? Colors.white : const Color(0xFF111827);
    final panelFgMuted = isDark ? Colors.white.withValues(alpha: 0.7) : Colors.black54;
    final panelHint = isDark ? Colors.white.withValues(alpha: 0.4) : Colors.black38;
    final accent = _isDebater
        ? const Color(0xFFB45309)
        : _isTextCoach || ngmyCommunicateRoleIsRomantic(widget.profile.role)
            ? const Color(0xFFEC4899)
            : kNgmyAdvisorsHubAccent;
    final accent2 = _isDebater
        ? const Color(0xFFDC2626)
        : _isTextCoach || ngmyCommunicateRoleIsRomantic(widget.profile.role)
            ? const Color(0xFF9333EA)
            : kNgmyAdvisorsHubAccent2;
    final scaffoldBg = isDark ? const Color(0xFF121212) : const Color(0xFFF3F7FF);

    return Scaffold(
      backgroundColor: scaffoldBg,
      body: Stack(
        children: [
          _LoveWorldBackground(ctrl: widget.bgCtrl, floatCtrl: widget.floatCtrl, isDark: isDark),
          Positioned.fill(
            child: ListView.builder(
              controller: _scroll,
              padding: EdgeInsets.fromLTRB(16, topPad, 16, bottomPad),
              itemCount: _messages.length + (_busy ? 1 : 0) + (_messages.isEmpty && _loaded ? 1 : 0),
              itemBuilder: (context, i) {
                if (_messages.isEmpty && _loaded && i == 0) {
                  final emptyHint = _isDebater
                      ? 'Debate here anytime — or paste what they said on iMessage/WhatsApp and get a reply to send back.'
                      : _isTextCoach
                          ? 'Paste a chat or screenshot — pick a mode from the dropdown.'
                      : _isTranslator
                      ? 'Tell ${widget.profile.name} what you want to practice in $_translatorLearningLang — simple words only.'
                      : _isMshauri
                          ? 'Say hi to ${widget.profile.name} — talk normal, like texting someone from the community.'
                          : _allowsPhotoUpload
                          ? 'Ask ${widget.profile.name} anything — tap 📷 to send homework photos for step-by-step help.'
                          : ngmyCommunicateRoleIsRomantic(widget.profile.role)
                              ? 'Say something sweet to ${widget.profile.name}… 💜'
                              : 'Start a conversation with ${widget.profile.name}…';
                  return Center(
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Text(
                        emptyHint,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: mutedText, fontSize: 14, fontStyle: FontStyle.italic),
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
                        Text('${widget.profile.name} is typing', style: TextStyle(color: mutedText, fontStyle: FontStyle.italic, fontSize: 12)),
                        const SizedBox(width: 6),
                        SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2, color: accent)),
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
                        if (!user && _isTextCoach && (m['text'] ?? '').toString().trim().isNotEmpty)
                          Padding(
                            padding: const EdgeInsets.only(top: 8),
                            child: TextButton.icon(
                              onPressed: () => _copyDebateReply(m['text'] ?? ''),
                              icon: const Icon(Icons.copy_rounded, size: 14, color: Colors.white70),
                              label: const Text('Copy line', style: TextStyle(color: Colors.white70, fontSize: 11)),
                              style: TextButton.styleFrom(
                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                minimumSize: Size.zero,
                                tapTargetSize: MaterialTapTargetSize.shrinkWrap,
                              ),
                            ),
                          ),
                        if (!user && _isDebater && (m['text'] ?? '').toString().trim().isNotEmpty)
                          ngmyDebateReplyActions(
                            replyText: m['text'] ?? '',
                            opponentName: _debateOpponentC.text.trim(),
                            opponentPhone: _debateOpponentPhoneC.text.trim(),
                            channel: _debateChannel,
                            accent: accent,
                            onCopy: () => _copyDebateReply(m['text'] ?? ''),
                            onSend: () => _sendDebateReply(m['text'] ?? ''),
                          ),
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
                  context: context,
                  isDark: isDark,
                  borderRadius: BorderRadius.circular(20),
                  fillAlpha: 0.06,
                  blur: 12,
                  child: Stack(
                    children: [
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 6),
                        child: Row(
                          children: [
                            IconButton(icon: Icon(Icons.arrow_back_rounded, color: panelFgMuted, size: 22), onPressed: widget.onBack),
                            NgmyCommunicateAvatar(profile: widget.profile, size: 44, glow: true),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(widget.profile.name, style: TextStyle(color: panelFg, fontWeight: FontWeight.w900, fontSize: 16)),
                                  Text(
                                    _isAdmin ? 'Unlimited chat' : passLabel,
                                    style: TextStyle(color: panelFgMuted, fontSize: 10),
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
                              ngmyCommunicateRoleIsRomantic(widget.profile.role)
                                  ? const Icon(Icons.favorite, color: Color(0xFFEC4899), size: 20)
                                  : Icon(kNgmyAdvisorsHubNavIcon, color: kNgmyAdvisorsHubAccent, size: 20),
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
                    if (_isDebater)
                      ngmyDebateChatToolbar(
                        isDark: isDark,
                        opponentController: _debateOpponentC,
                        opponentPhoneController: _debateOpponentPhoneC,
                        channel: _debateChannel,
                        pasteMode: _debatePasteMode,
                        accent: accent,
                        expanded: _debateToolbarExpanded,
                        onToggleExpanded: () => setState(() => _debateToolbarExpanded = !_debateToolbarExpanded),
                        onChannelChanged: (ch) {
                          setState(() => _debateChannel = ch);
                          unawaited(_saveDebateSession());
                        },
                        onTogglePasteMode: _toggleDebatePaste,
                        onAskQuestion: _triggerDebateQuestion,
                      ),
                    if (_pendingImageB64 != null)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 8),
                        child: _loveGlassPanel(
                          context: context,
                          isDark: isDark,
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
                                    _isTextCoach
                                        ? 'Screenshot ready — add context or tap send'
                                        : 'Photo ready — add a question or tap send',
                                    style: TextStyle(color: panelFgMuted, fontSize: 12),
                                  ),
                                ),
                                IconButton(
                                  icon: Icon(Icons.close_rounded, color: panelFgMuted, size: 20),
                                  onPressed: _busy ? null : _clearPendingPhoto,
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    _loveGlassPanel(
                      context: context,
                      isDark: isDark,
                      borderRadius: BorderRadius.circular(26),
                      fillAlpha: 0.06,
                      blur: 12,
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(8, 4, 4, 4),
                        child: Row(
                          children: [
                            if (_isTextCoach)
                              Padding(
                                padding: const EdgeInsets.only(left: 4, right: 2),
                                child: ngmyTextCoachModeDropdown(
                                  isDark: isDark,
                                  mode: _textCoachMode,
                                  accent: accent,
                                  onModeChanged: (mode) => unawaited(_onTextCoachModeChanged(mode)),
                                ),
                              ),
                            if (_allowsPhotoUpload)
                              IconButton(
                                tooltip: _isTextCoach ? 'Send chat screenshot' : 'Send homework photo',
                                onPressed: _busy ? null : _pickHomeworkPhoto,
                                icon: Icon(Icons.photo_camera_rounded, color: accent, size: 20),
                                visualDensity: VisualDensity.compact,
                                padding: EdgeInsets.zero,
                                constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
                              ),
                            Expanded(
                              child: TextField(
                                controller: _controller,
                                minLines: 1,
                                maxLines: _isTextCoach ? 2 : 4,
                                style: TextStyle(color: panelFg, fontSize: 14),
                                decoration: InputDecoration(
                                  hintText: _isDebater
                                      ? (_debatePasteMode
                                          ? 'Paste their message here…'
                                          : 'Debate topic or your argument…')
                                      : 'Type your message…',
                                  hintStyle: TextStyle(color: panelHint, fontSize: 13),
                                  border: InputBorder.none,
                                  isDense: true,
                                  contentPadding: const EdgeInsets.symmetric(horizontal: 6, vertical: 6),
                                ),
                                onSubmitted: (_) => _send(),
                              ),
                            ),
                            NgmyVoiceMicButton(controller: _controller, color: accent),
                            Material(
                              color: Colors.transparent,
                              child: InkWell(
                                onTap: _busy ? null : _send,
                                customBorder: const CircleBorder(),
                                child: Container(
                                  width: 38,
                                  height: 38,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    gradient: LinearGradient(colors: [accent, accent2]),
                                  ),
                                  child: const Icon(Icons.send_rounded, color: Colors.white, size: 17),
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
