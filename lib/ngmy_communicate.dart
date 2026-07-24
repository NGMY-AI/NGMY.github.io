import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_advisor_badge_copy.dart';
import 'ngmy_advisor_portraits.dart';
import 'ngmy_advisor_push.dart';
import 'ngmy_advisor_roster.dart';
import 'ngmy_ai_client.dart';
import 'ngmy_ai_memory.dart';
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
import 'ngmy_push_notifications.dart';
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

/// Young companion-style roles that may date regular users (one partner at a time).
bool ngmyCommunicateRoleCanDateUsers(String role) {
  switch (ngmyCommunicateNormalizeRole(role)) {
    case 'romantic':
    case 'companion':
    case 'friend':
      return true;
    default:
      return false;
  }
}

/// Respectable occupations — no dating regular users; admin/boss only.
bool ngmyCommunicateRoleIsRespectableOccupation(String role) {
  final r = ngmyCommunicateNormalizeRole(role);
  if (kNgmyCommunicateProfessionalRoles.contains(r)) return true;
  return r == 'therapist' || r == 'counselor';
}

/// Wisdom Advisor (MSHAURI AMANI) — never dates anyone.
bool ngmyCommunicateIsWisdomAdvisor({required String name, required String role, String id = ''}) {
  final n = name.trim().toUpperCase();
  final i = id.trim().toLowerCase();
  final r = ngmyCommunicateNormalizeRole(role);
  if (n.contains('MSHAURI AMANI')) return true;
  if (n.contains('AMANI') && (n.contains('MSHAURI') || r == 'mshauri')) return true;
  if (i.contains('amani') && r == 'mshauri') return true;
  return false;
}

/// Whether this advisor may form a romantic relationship with this chatter.
bool ngmyCommunicateAdvisorCanDateChatter({
  required String role,
  required String name,
  required bool chatterIsBoss,
  String id = '',
}) {
  if (ngmyCommunicateIsWisdomAdvisor(name: name, role: role, id: id)) return false;
  if (ngmyCommunicateRoleCanDateUsers(role)) return true;
  // Respectable advisors: admin / boss only.
  if (ngmyCommunicateRoleIsRespectableOccupation(role)) return chatterIsBoss;
  return false;
}

/// Roles allowed to generate partner selfies once exclusive (never Wisdom).
bool ngmyCommunicateAdvisorAllowsPartnerPhotos({
  required String role,
  required String name,
  String id = '',
}) {
  if (ngmyCommunicateIsWisdomAdvisor(name: name, role: role, id: id)) return false;
  return ngmyCommunicateRoleCanDateUsers(role) || ngmyCommunicateRoleIsRespectableOccupation(role);
}

/// Pre-cache companion avatars from config (call after settings hydrate).
Future<void> ngmyWarmCommunicateAvatarsFromConfig(dynamic config) async {
  await Future.wait([
    NgmyCommunicateAvatarCache.hydrateRamFromDisk(),
    ngmyWarmAdvisorPortraitAssets(),
  ]);
  final raw = (config as dynamic).communicateProfiles;
  if (raw is List) await NgmyCommunicateAvatarCache.cacheAllProfiles(raw);
}

bool ngmyUserRequestedChatImage(String text) {
  final t = text.toLowerCase().trim();
  if (t.isEmpty) return false;
  return RegExp(
        r'\b(pics?|pictures?|photos?|selfies?|snaps?|images?|nudes?|portraits?)\b',
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(
        r'\b(send|show|make|create|generate|snap)\s+(me\s+)?(a\s+|an\s+|some\s+|your\s+|another\s+|the\s+)?(pics?|photos?|pictures?|selfies?|images?|nudes?)\b',
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(
        r'\b(pics?|photos?|selfies?|pictures?)\s+of\s+(you|yourself|your\s+body|it|that)\b',
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(r'\b(your\s+body|body\s+pics?|body\s+shots?|send\s+.{0,20}\bbody)\b', caseSensitive: false).hasMatch(t) ||
      RegExp(r'\blet me see\b', caseSensitive: false).hasMatch(t) ||
      RegExp(r'\bshow me\b', caseSensitive: false).hasMatch(t) ||
      RegExp(r'\bsend (it|that|one)\b', caseSensitive: false).hasMatch(t) ||
      RegExp(r'\bi want (to see|a pic|a photo|the pic|the picture|pics|pictures|photos)\b', caseSensitive: false).hasMatch(t) ||
      RegExp(r'\bsend me (your|some|a|an)?\s*(pics?|pictures?|photos?|selfies?)\b', caseSensitive: false).hasMatch(t) ||
      RegExp(
        r'\b(send|show|let me see)\s+(me\s+)?(your\s+)?(titties|tits|boobs|breasts|pussy|ass|body|nudes?|nipples)\b',
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(
        r'\b(pic|photo|picture|shot|image|selfie)\s+of\s+your\s+(titties|tits|boobs|breasts|pussy|ass|body|nipples)\b',
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(
        r'\b(can i see|want to see|wanna see|need to see)\s+(your\s+)?(titties|tits|boobs|breasts|pussy|ass|body|nipples)\b',
        caseSensitive: false,
      ).hasMatch(t);
}

/// Explicit body-part / NSFW photo ask (exclusive dating partners only).
bool ngmyPartnerImageRequestIsExplicit(String text) {
  final t = text.trim().toLowerCase();
  if (t.isEmpty) return false;
  return RegExp(
    r'\b(titties|tits|boobs|breasts|nipples|pussy|vagina|clit|asshole|dick|cock|nude|naked|'
    r'topless|bottomless|spread|lingerie|panties|without clothes|no clothes|nsfw|horny|fuck me|'
    r'on all fours|bent over|in bed naked|showing pussy|showing tits)\b',
    caseSensitive: false,
  ).hasMatch(t);
}

/// True when the model role-played sending a photo instead of a real image.
bool ngmyAdvisorReplyFakesSendingPhoto(String text) {
  final t = text.trim();
  if (t.isEmpty) return false;
  return RegExp(
        r'\[+\s*.{0,40}\b(send|sends|sending|sent)\b.{0,40}\b(pic|picture|photo|selfie|image|nude)',
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(
        r'\*+\s*(send|sends|sending|sent)\s+.{0,30}\b(pic|picture|photo|selfie|image)',
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(
        r"\b(here's|here is) (a |my |some )?(pic|picture|photo|selfie|little something)\b",
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(
        r'\b(little something for you|something special for you|sent you (a |my )?(pic|picture|photo))\b',
        caseSensitive: false,
      ).hasMatch(t) ||
      RegExp(
        r'\b(i (couldn.?t|cannot|can.?t) (attach|send) (a |the |your )?(pic|picture|photo|selfie)|imagine (a |this )?(pic|photo|selfie))\b',
        caseSensitive: false,
      ).hasMatch(t);
}

/// Strong dating / girlfriend-boyfriend energy already in the thread (not a cold hello).
bool ngmyCommunicateMemoryLooksLikeDating(List<Map<String, dynamic>> memory) {
  if (memory.isEmpty) return false;
  final all = memory.map((m) => (m['text'] ?? '').toString().toLowerCase()).join(' ');
  final userCount = memory.where((m) => m['role'] == 'user').length;
  if (userCount < 1) return false;
  final romanceWords = RegExp(
    r'\b(my love|babe|baby|papi|boyfriend|girlfriend|my man|my girl|i love you|love you|'
    r'we.?re together|we.?re dating|official|exclusive|only yours|i.?m yours|miss you|handsome|beautiful)\b',
  ).hasMatch(all);
  final intimateWords = RegExp(
    r'\b(sex|sexy|horny|fuck|dick|pussy|cock|wet|cum|suck|nude|naked|tits|ass|clit|moan)\b',
  ).hasMatch(all);
  if (userCount >= 2 && romanceWords) return true;
  if (userCount >= 3 && intimateWords) return true;
  // Short chats that already use partner pet names still count.
  if (userCount >= 1 && RegExp(r'\b(babe|baby|my love|boyfriend|girlfriend)\b').hasMatch(all)) {
    return true;
  }
  return false;
}

/// Young datable roles may generate partner photos when exclusive.
bool ngmyCommunicateRoleAllowsChatImages(String role) => ngmyCommunicateRoleCanDateUsers(role);

bool ngmyCommunicateIsExclusivePartner(Map<String, String>? partner, String chatterEmail) {
  final p = (partner?['email'] ?? '').toLowerCase().trim();
  final e = chatterEmail.toLowerCase().trim();
  return p.isNotEmpty && e.isNotEmpty && p == e;
}

/// Face/hair/age only — never lock outfit or jewelry (those change every new photo).
String ngmyAdvisorFaceIdentityForImageGen({
  required String name,
  required String gender,
  String bio = '',
}) {
  final n = name.trim().toUpperCase();
  if (n.contains('MARIAM')) {
    return 'beautiful young African Black woman late teens/early 20s, soft curly afro puff, glowing skin, warm smile — same face every time';
  }
  if (n.contains('SUZANA VANESSA') || (n.contains('VANESSA') && n.contains('SUZANA'))) {
    return 'beautiful young African Black woman about 21–22, soft natural curly/coily hair with volume, warm dark eyes — same face every time';
  }
  if (n.contains('SUZANA MBUTO') || n.contains('MBUTO')) {
    return 'beautiful young African Black woman early 20s, warm natural smile, soft stylish hair — same face every time';
  }
  if (n.contains('SUZY') || n.contains('SUSIE')) {
    return 'stylish young African Black woman early 20s, elegant natural hair with soft volume — same face every time';
  }
  if (n.contains('MINA')) {
    return 'beautiful young African Black woman about 18–20, gentle youthful features, soft natural hair — same face every time';
  }
  if (n.contains('ANNA')) {
    return 'beautiful young African Black woman early 20s, polished graceful features — same face every time';
  }
  if (n.contains('ISAIAH') || n.contains('ALISA')) {
    return 'distinguished Black African pastor man about 38–42, neat professional short haircut, warm confident expression — same face every time';
  }
  if (bio.trim().isNotEmpty) {
    final b = bio.trim();
    // Strip wardrobe lines from bio so prompts don't repeat one outfit.
    final withoutWardrobe = b
        .replaceAll(RegExp(r'\b(wearing|dressed in|outfit|blouse|dress|suit|earrings?|necklace|top|shirt|jeans)\b[^,.;]*', caseSensitive: false), '')
        .trim();
    if (withoutWardrobe.isNotEmpty) {
      return '$withoutWardrobe — same face identity every time, new outfit each photo';
    }
  }
  final g = gender.trim().toLowerCase() == 'male' ? 'African Black man' : 'African Black woman';
  return 'photorealistic $g named $name — same face as profile photo, new clothes and pose every picture';
}

/// Visual look cues so generated pics match the advisor's known face/vibe.
String ngmyAdvisorVisualLookDescription({
  required String name,
  required String gender,
  String bio = '',
}) =>
    ngmyAdvisorFaceIdentityForImageGen(name: name, gender: gender, bio: bio);

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

/// User asked for more detail / a longer answer (paragraph OK).
bool ngmyUserWantsLongerAdvisorReply(String text) {
  final t = text.toLowerCase().trim();
  if (t.isEmpty) return false;
  return RegExp(
        r'\b(tell me more|say more|more about|go on|keep going|elaborate|explain( it| more| that| this)?|'
        r'write (me )?(a |an )?(paragraph|few paragraphs|longer|more)|'
        r'i wanna hear more|i want to hear more|want to hear more|hear more|'
        r'details?|in detail|full story|open up|how (do|did|are|was)|why (do|did|are)|what happened)\b',
      ).hasMatch(t) ||
      RegExp(r'\b(can you|could you|please)\b.{0,40}\b(more|explain|tell|detail|paragraph)\b').hasMatch(t);
}

/// Strip RP asterisks / decorative stars advisors sometimes sprinkle into texts.
String ngmySanitizeAdvisorChatReply(String text) {
  var t = text.trim();
  if (t.isEmpty) return t;
  // *does an action* or *emphasis*
  t = t.replaceAllMapped(RegExp(r'\*([^*\n]{1,120})\*'), (m) => (m.group(1) ?? '').trim());
  // leftover lone asterisks used as stars
  t = t.replaceAll(RegExp(r'(^|\s)\*+(\s|$)'), ' ');
  // decorative star / sparkle glyphs
  t = t.replaceAll(RegExp(r'[★☆✦✧✨⭐🌟﹡＊]'), '');
  // Strip role-play "sends a selfie" stage directions — real pics are attached by the app.
  t = t.replaceAll(
    RegExp(
      r'\[+\s*[^\]]{0,80}\b(send|sends|sending|sent)\b[^\]]{0,80}\b(pic|picture|photo|selfie|image|nude)[^\]]*\]+',
      caseSensitive: false,
    ),
    '',
  );
  t = t.replaceAll(RegExp(r'[ \t]{2,}'), ' ');
  t = t.replaceAll(RegExp(r' *\n *'), '\n');
  return t.trim();
}

/// True when the partner only asked for a selfie / close-up face shot.
bool ngmyChatImageRequestWantsSelfie(String text) {
  final t = text.trim().toLowerCase();
  if (t.isEmpty) return false;
  if (RegExp(r'\b(selfie|close[\s-]?up|face\s*pic|just\s+(my|your)\s+face|headshot)\b').hasMatch(t)) {
    return true;
  }
  return false;
}

/// Plain "send me a pic" with no pose/outfit/scene details.
bool ngmyChatImageRequestIsSimpleSelfie(String text) {
  final t = text.trim().toLowerCase();
  if (t.isEmpty) return true;
  if (ngmyChatImageRequestWantsSelfie(t) &&
      !RegExp(
        r'\b(standing|sitting|full[\s-]?body|full[\s-]?length|outfit|wearing|outside|outdoors?)\b',
      ).hasMatch(t)) {
    return true;
  }
  final detailed = RegExp(
    r'\b(wearing|naked|nude|in bed|on the|at the|with your|showing|bent|spread|touch|holding|'
    r'lingerie|bikini|shower|kitchen|outfit|dress|skirt|jeans|shirt|hoodie|jacket|suit|clothes?|clothing|'
    r'bra|panties|ass|tits|titties|boobs|breasts|pussy|dick|cock|nipples|vagina|clit|'
    r'legs open|from behind|on top|riding|kneeling|posing|'
    r'standing|sit(ting)?|walking|outdoors?|outside|full[\s-]?body|full[\s-]?length|full\s+picture|whole\s+body|'
    r'mirror|gym|beach|car|couch|sofa|park|street|restaurant|bedroom|bathroom|'
    r'side profile|from the side|back view|over.?the.?shoulder|laying|lying down|'
    r'pose|posed|angle|camera|body\s*pics?|body\s*shots?|your\s+body)\b',
  ).hasMatch(t);
  if (detailed) return false;
  return RegExp(r'\b(pics?|pictures?|photos?|selfies?|snaps?|images?)\b').hasMatch(t);
}

/// Conversation vibe that should drive an unspecific "send me a pic" request.
enum NgmyPartnerChatPhotoVibe {
  sexual,
  romantic,
  fitness,
  business,
  nightOut,
  homeChill,
  casual,
}

/// Infer photo vibe from what they are talking about right now (recent chat wins).
NgmyPartnerChatPhotoVibe ngmyPartnerChatPhotoVibeFromChat({
  required String latest,
  required List<Map<String, dynamic>> memory,
  String gender = 'female',
}) {
  final recentUser = memory.reversed
      .where((m) => (m['role'] ?? '').toString() == 'user')
      .take(6)
      .map((m) => (m['text'] ?? '').toString())
      .join(' ');
  final recentAll = memory.reversed.take(10).map((m) => (m['text'] ?? '').toString()).join(' ');
  final blob = '$latest $recentUser $recentAll'.toLowerCase();

  if (RegExp(
    r'\b(nude|naked|sex|sexy|horny|freaky|nasty|filthy|lingerie|bra|panties|pussy|dick|cock|tits|boobs|'
    r'nipples|ass|asshole|clit|cum|fuck|suck|blowjob|handjob|in bed|bedroom|shower|wet|hard|'
    r'topless|bottomless|without clothes|no clothes|spread|bent over|ride me|fuck me|'
    r'your body|body pics?|body shots?|nudes?)\b',
  ).hasMatch(blob)) {
    return NgmyPartnerChatPhotoVibe.sexual;
  }
  if (RegExp(
    r'\b(workout|gym|fitness|running|weights|training|exercise|yoga|sweat|abs|muscles?)\b',
  ).hasMatch(blob)) {
    return NgmyPartnerChatPhotoVibe.fitness;
  }
  if (RegExp(
    r'\b(work|office|meeting|business|interview|client|career|resume|professional|suit|presentation)\b',
  ).hasMatch(blob)) {
    return NgmyPartnerChatPhotoVibe.business;
  }
  if (RegExp(
    r'\b(club|party|night out|date night|dinner|restaurant|drinks|going out|dress up)\b',
  ).hasMatch(blob)) {
    return NgmyPartnerChatPhotoVibe.nightOut;
  }
  if (RegExp(
    r'\b(love you|miss you|babe|baby|my love|cuddle|kiss|romantic|goodnight|good morning|thinking of you)\b',
  ).hasMatch(blob)) {
    return NgmyPartnerChatPhotoVibe.romantic;
  }
  if (RegExp(
    r'\b(home|couch|netflix|chillin|chilling|tired|lazy|pajamas|pjs|movie)\b',
  ).hasMatch(blob)) {
    return NgmyPartnerChatPhotoVibe.homeChill;
  }
  return NgmyPartnerChatPhotoVibe.casual;
}

String _ngmyPartnerVibePhotoScene({
  required NgmyPartnerChatPhotoVibe vibe,
  required String gender,
  required String latest,
  required String recent,
}) {
  final isMale = gender.trim().toLowerCase() == 'male';
  final seed = Object.hash(latest, recent, vibe.name, DateTime.now().millisecondsSinceEpoch ~/ 4000);
  List<String> options;
  switch (vibe) {
    case NgmyPartnerChatPhotoVibe.sexual:
      options = isMale
          ? [
              'sexy bedroom photo, shirtless standing by the bed, seductive look, adult partner vibe, uncensored when fitting',
              'steamy full-body standing photo in only underwear, bedroom lighting, explicit partner mood',
              'lying on bed seductive pose, low light, sexual energy matching the chat, not a face-only selfie',
            ]
          : [
              'sexy bedroom photo in lingerie, standing full body by the bed, seductive look, adult partner vibe',
              'steamy full-body standing photo in revealing lingerie, bedroom lighting, explicit partner mood',
              'lying on bed seductive pose in lingerie, low light, sexual energy matching the chat, not a face-only selfie',
            ];
      break;
    case NgmyPartnerChatPhotoVibe.romantic:
      options = [
        'soft romantic standing mid-shot in a cute outfit, warm evening light, loving smile, date-night energy',
        'cozy romantic photo sitting by a window in casual nice clothes, tender vibe, not a selfie crop',
        'full-body standing photo dressed up a little for their partner, soft romantic lighting',
      ];
      break;
    case NgmyPartnerChatPhotoVibe.fitness:
      options = [
        'gym standing full-body photo in workout clothes, athletic pose after training, natural gym lighting',
        'fitness mid-to-full body shot in activewear, confident stance, sweaty fresh-from-workout vibe',
        'outdoor running stretch standing photo in workout gear, whole body visible',
      ];
      break;
    case NgmyPartnerChatPhotoVibe.business:
      options = [
        'professional standing full-body photo in business attire, office-ready look, clean lighting',
        'smart business mid-shot in work clothes, confident professional pose, not a selfie',
        'standing in a modern office hallway in polished business outfit, head-to-toe framing',
      ];
      break;
    case NgmyPartnerChatPhotoVibe.nightOut:
      options = [
        'night-out full-body standing photo dressed up for going out, city evening lights',
        'restaurant date mid-to-full body photo in a stylish outfit, warm nightlife vibe',
        'standing mirror photo ready for a party/night out in a sharp outfit, whole body visible',
      ];
      break;
    case NgmyPartnerChatPhotoVibe.homeChill:
      options = [
        'casual at-home standing photo in comfy clothes, living-room light, relaxed natural pose',
        'chilling on the couch mid-shot in loungewear, cozy everyday vibe, not a tight selfie',
        'full-body standing kitchen/home photo in casual clothes, natural daylight',
      ];
      break;
    case NgmyPartnerChatPhotoVibe.casual:
      options = [
        'standing full-body photo outdoors in everyday clothes, head-to-toe visible, natural daylight',
        'three-quarter body standing shot in stylish casual clothes, natural smile, not a selfie crop',
        'full-length standing mirror-style photo in everyday outfit, whole body in frame',
        'outdoor walking mid-to-full body shot in daylight, natural pose matching a normal chat vibe',
      ];
      break;
  }
  return options[seed.abs() % options.length];
}

int ngmyPartnerPhotosSentCount(List<Map<String, dynamic>> memory) =>
    memory.where((m) => (m['role'] ?? '').toString() == 'ai' && (m['imageB64'] ?? '').toString().trim().isNotEmpty).length;

String? ngmyLastPartnerPhotoB64(List<Map<String, dynamic>> memory) {
  for (final m in memory.reversed) {
    if ((m['role'] ?? '').toString() != 'ai') continue;
    final img = (m['imageB64'] ?? '').toString().trim();
    if (img.isNotEmpty) return img;
  }
  return null;
}

Set<String> ngmyPartnerPhotosSentB64Set(List<Map<String, dynamic>> memory) {
  final out = <String>{};
  for (final m in memory) {
    if ((m['role'] ?? '').toString() != 'ai') continue;
    final img = (m['imageB64'] ?? '').toString().trim();
    if (img.isNotEmpty) out.add(img);
  }
  return out;
}

bool ngmyPartnerImageBytesSame(Uint8List a, Uint8List b) {
  if (identical(a, b)) return true;
  if (a.length != b.length || a.isEmpty) return false;
  return base64Encode(a) == base64Encode(b);
}

String ngmyPartnerImageVarietyOutfitHint({required int photoCount, required String gender}) {
  final isMale = gender.trim().toLowerCase() == 'male';
  final outfits = isMale
      ? [
          'fresh casual streetwear — hoodie and jeans',
          'fitted t-shirt and joggers at home',
          'button-down shirt, sleeves rolled',
          'gym tank top and shorts',
          'smart polo and chinos',
          'leather jacket over plain tee',
          'summer linen shirt, relaxed fit',
        ]
      : [
          'cute sundress, different color than before',
          'crop top and high-waist jeans',
          'soft sweater and leggings, cozy at home',
          'fitted bodysuit and skirt, going-out look',
          'sports bra and biker shorts, gym vibe',
          'silk cami and satin pants, evening look',
          'denim jacket over a fresh top',
          'one-shoulder top and tailored pants',
        ];
  return outfits[photoCount.abs() % outfits.length];
}

/// Prefer a recent detailed photo request if the latest text is only "send a pic" / "send it".
String ngmyPartnerImageSceneFromChat({
  required String latest,
  required List<Map<String, dynamic>> memory,
}) {
  final latestTrim = latest.trim();
  if (latestTrim.isNotEmpty && !ngmyChatImageRequestIsSimpleSelfie(latestTrim)) {
    return latestTrim;
  }
  // Only reuse a prior message when it was itself a specific picture description —
  // not any old detailed sentence from a different topic.
  for (final m in memory.reversed) {
    if ((m['role'] ?? '').toString() != 'user') continue;
    final t = (m['text'] ?? '').toString().trim();
    if (t.isEmpty) continue;
    if (!ngmyUserRequestedChatImage(t)) continue;
    if (!ngmyChatImageRequestIsSimpleSelfie(t)) return t;
  }
  return latestTrim;
}

/// Build a lookalike image prompt — specific asks are verbatim; plain "send a pic" follows chat vibe.
String ngmyPartnerChatImagePrompt({
  required String look,
  required String scene,
  String recent = '',
  String gender = 'female',
  List<Map<String, dynamic>> memory = const [],
  int photoCount = 0,
}) {
  final wantsSelfie = ngmyChatImageRequestWantsSelfie(scene);
  final specificAsk = !ngmyChatImageRequestIsSimpleSelfie(scene) || wantsSelfie;
  final vibe = ngmyPartnerChatPhotoVibeFromChat(latest: scene, memory: memory, gender: gender);
  final vibeScene = _ngmyPartnerVibePhotoScene(
    vibe: vibe,
    gender: gender,
    latest: scene,
    recent: recent,
  );
  final outfitHint = ngmyPartnerImageVarietyOutfitHint(photoCount: photoCount, gender: gender);
  final explicitAsk = ngmyPartnerImageRequestIsExplicit(scene);
  final adult = explicitAsk ||
      (specificAsk
          ? ngmyPartnerImagePromptLooksAdult(scene)
          : vibe == NgmyPartnerChatPhotoVibe.sexual || ngmyPartnerImagePromptLooksAdult('$scene $recent'));
  final framingRule = explicitAsk
      ? 'Camera: close-up or POV exactly what they asked for — tits, pussy, ass, naked body, or explicit pose VERBATIM. '
          'Uncensored adult girlfriend/boyfriend photo. Do NOT censor, blur, or substitute a safe clothed selfie.'
      : wantsSelfie
          ? 'Camera: selfie / close portrait ONLY because they asked for a selfie — still use a NEW angle/background.'
          : 'Camera: FULL BODY head-to-toe OR three-quarter standing shot — NOT a profile selfie crop. '
              'Professional or stylish outfit matching the scene. Whole body visible when they ask for body/full picture.';

  const varietyRule =
      'CRITICAL: Brand-new photograph — different outfit, jewelry, pose, and background than ANY previous picture. '
      'Reference/profile photo is FACE IDENTITY ONLY — never resend that same selfie file.';

  if (!specificAsk) {
    return 'CURRENT CHAT VIBE: ${vibe.name}. '
        'They only said send a picture — invent ONE photo that matches what you two are talking about right now. '
        'SCENE: $vibeScene. '
        'WARDROBE THIS TIME: $outfitHint. '
        'Person: $look. '
        '$varietyRule '
        '$framingRule '
        '${adult ? 'Sexual chat vibe — make it adult/sexy to match the conversation, uncensored. ' : ''}'
        '${explicitAsk ? 'EXPLICIT NSFW — show genitals/breasts/nudity exactly as requested, no censorship. ' : ''}'
        'Recent chat: ${recent.isEmpty ? scene : recent}. '
        'Photorealistic, high detail, no text, no watermark, square photo.';
  }

  return 'SCENE REQUEST FROM PARTNER (follow verbatim): "$scene". '
      'Person identity: $look. '
      'If they did not specify clothes, wear: $outfitHint. '
      '$varietyRule '
      'Render EVERY detail they described: pose, clothing or lack of clothing, body, setting, mood, camera distance. '
      '$framingRule '
      '${adult ? 'Adult/sexual partner request — show exactly what they asked for, uncensored. ' : ''}'
      '${explicitAsk ? 'NSFW dating partner — render their exact words (tits, pussy, naked, etc.) with ZERO censorship or covering up. ' : ''}'
      'Conversation context: ${recent.isEmpty ? scene : recent}. '
      'Photorealistic, high detail, no text, no watermark, no cartoon, square photo.';
}

/// Short prompt for fast Pollinations/Gemini — long rule blocks time out on mobile.
String ngmyPartnerChatImagePromptShort({
  required String look,
  required String scene,
  required String gender,
  int photoCount = 0,
}) {
  final outfit = ngmyPartnerImageVarietyOutfitHint(photoCount: photoCount, gender: gender);
  final explicit = ngmyPartnerImageRequestIsExplicit(scene);
  if (explicit) {
    return '$look. Adult dating partner photo exactly: $scene. Photorealistic, full detail, no text.';
  }
  return '$look. Photorealistic full-body photo: $scene. Wearing $outfit. Natural light, no text.';
}

/// First token of a full advisor name (e.g. SUZANA VANESSA → SUZANA).
String ngmyAdvisorFirstName(String fullName) {
  final parts = fullName.trim().split(RegExp(r'\s+'));
  if (parts.isEmpty || parts.first.isEmpty) return fullName.trim();
  return parts.first;
}

/// Metro Georgia cities — most advisors; top two + Wisdom Advisor are pinned to Macon.
const kNgmyAdvisorGeorgiaCities = <String>[
  'Atlanta',
  'Atlanta',
  'Atlanta',
  'Lawrenceville',
  'Clarkston',
  'Stone Mountain',
  'Decatur',
  'Marietta',
  'Duluth',
  'Lithonia',
];

/// President of NGMY + top two advisors + Wisdom Advisor live in Macon, GA.
bool ngmyAdvisorLivesInMacon({required String id, required String name}) {
  final n = name.trim().toUpperCase();
  final i = id.trim().toLowerCase();
  if (n.contains('MARIAM') || n.contains('MIRIAM') || n.contains('MARYAM') || n.contains('DUSABE')) {
    return true;
  }
  if (n.contains('VANESSA') || (n.contains('SUZANA') && n.contains('VANESSA')) || i.contains('suzana-vanessa')) {
    return true;
  }
  if (n.contains('MSHAURI') || n.contains('AMANI') || i.contains('mshauri')) {
    return true;
  }
  return false;
}

({String city, String state}) ngmyAdvisorGeorgiaHome({
  required String id,
  required String name,
  String storedCity = '',
}) {
  final stored = storedCity.trim();
  if (stored.isNotEmpty) {
    return (city: stored, state: 'Georgia');
  }
  if (ngmyAdvisorLivesInMacon(id: id, name: name)) {
    return (city: 'Macon', state: 'Georgia');
  }
  final blob = '${id.trim().toLowerCase()}|${name.trim().toLowerCase()}';
  final hash = blob.codeUnits.fold<int>(0, (a, c) => (a * 31 + c) & 0x7fffffff);
  final city = kNgmyAdvisorGeorgiaCities[hash % kNgmyAdvisorGeorgiaCities.length];
  return (city: city, state: 'Georgia');
}

/// Current local clock for advisors (Eastern Time — Georgia).
String ngmyAdvisorNowContextBlock({String cityLabel = 'Atlanta, Georgia'}) {
  final now = DateTime.now().toLocal();
  final weekday = const [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ][now.weekday - 1];
  final month = const [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][now.month - 1];
  final h24 = now.hour;
  final h12 = h24 == 0 ? 12 : (h24 > 12 ? h24 - 12 : h24);
  final ampm = h24 >= 12 ? 'PM' : 'AM';
  final mm = now.minute.toString().padLeft(2, '0');
  final partOfDay = h24 < 5
      ? 'late night'
      : h24 < 12
          ? 'morning'
          : h24 < 17
              ? 'afternoon'
              : h24 < 21
                  ? 'evening'
                  : 'night';
  return 'CLOCK (your local Georgia / Eastern time — for YOUR awareness only): '
      '$weekday, $month ${now.day}, ${now.year} — $h12:$mm $ampm ($partOfDay). '
      'Use this so you sound time-aware. Do NOT announce your city or "I live in…" unless they ask.\n';
}

String ngmyAdvisorAtlantaKnowledgeBlock({required String city}) {
  final c = city.trim();
  final isMacon = c.toLowerCase() == 'macon';
  final homePrivate = isMacon
      ? 'PRIVATE HOME (do not volunteer): Your home city is Macon, Georgia — same city as KB PABLO QR. '
          'You also know metro Atlanta well enough to guide visitors.\n'
      : 'PRIVATE HOME (do not volunteer): Your home city is $c, Georgia — metro Atlanta area.\n';

  final localFlavor = isMacon
      ? 'MACON LOCAL LIFE (use when THEY ask about Macon / Georgia / where you eat / places to go): '
          'Talk like you really live there — name real spots and small recent-life details. '
          'Examples of places you know: downtown Macon / Cotton Avenue, Cherry Blossom Festival season, '
          'Ocmulgee Mounds, Amerson River Park, Riverside Drive, Nu-Way Wieners, H&H Soul Food, The Rookery, '
          'Mercer / downtown lunch spots, Tubman Museum area, Georgia Sports Hall of Fame, I-75 drives. '
          'Sound first-person and lived-in: "a few hours ago I was at…", "yesterday I went by…", '
          '"I like eating at… because…", what the food/service/park felt like, what you saw. '
          'Invite them casually ("you should check it out") without dumping a brochure. Vary what you mention so it feels real.\n'
      : 'LOCAL LIFE for $c / metro Atlanta (use when THEY ask about the area / food / places): '
          'Talk like a local — concrete neighborhoods and spots. Atlanta: Downtown, Midtown, Buckhead, Little Five Points, '
          'Piedmont Park, BeltLine, Aquarium / World of Coke area, Mercedes-Benz Stadium, Marta, ATL airport; '
          'also Stone Mountain, Lawrenceville, Clarkston food scene, Decatur, Marietta as they fit. '
          'Use first-person recent vibes ("earlier I was at…", "I like going to…") — food, parks, vibes, traffic — not a Wikipedia dump.\n';

  return '$homePrivate'
      '$localFlavor'
      'LOCATION RULE: Never randomly announce where you live or drop your city unprompted. '
      'If they ask how Macon/Atlanta/Georgia is, what you like there, where you eat, what to do — THEN answer richly with local knowledge and lived details. '
      'Guide visitors warmly when they ask.\n';
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

  /// Every advisor wears a role label on their NGMY Advisors badge.
  String get roleBadgeLabel => ngmyCommunicateRoleLabel(role);

  /// Classic top-corner role chip visibility:
  /// - Users: only Lawyer + Bible Study Teacher
  /// - Admin: those plus Debater + Text & Rizz Coach
  /// - Never: Romantic, Teacher, Mshauri / Community Advisor, Companion, etc.
  String? cornerRoleBadgeLabel({bool isAdmin = false}) {
    final r = ngmyCommunicateNormalizeRole(role);
    if (r == 'lawyer' || r == 'bible_study_teacher') {
      return ngmyCommunicateRoleLabel(r);
    }
    if (isAdmin && (r == 'debater' || r == 'text_coach')) {
      return ngmyCommunicateRoleLabel(r);
    }
    return null;
  }

  String systemPrompt(
    List<Map<String, dynamic>> memory, {
    required String chatterEmail,
    bool chatterIsBoss = false,
    String chatterDisplayName = '',
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
    final intimateVibe = RegExp(
      r'\b(sex|sexy|nude|naked|horny|fuck|dick|cock|pussy|bed|touch|wet|ride|suck|tits?|ass|clit|cum|'
      r'warm me|warm you|inside|in your|in me|snuggle|blanket|cold|mouth|throat|anal|eat me|'
      r'freaky|nasty|filthy|blowjob|handjob)\b',
    ).hasMatch(allText);
    // Latest user message often drives whether THIS reply must go freaky.
    final lastUserText = memory.reversed
        .where((m) => m['role'] == 'user')
        .map((m) => (m['text'] ?? '').toString().toLowerCase())
        .cast<String>()
        .firstWhere((t) => t.trim().isNotEmpty, orElse: () => '');
    final lastMsgFreaky = RegExp(
      r'\b(sex|sexy|nude|naked|horny|fuck|dick|cock|pussy|suck|tits?|ass|clit|cum|wet|ride|'
      r'warm me|warm you|inside|in your|in me|mouth|throat|freaky|nasty|filthy|snuggle|'
      r'blanket|cold|i wish i (was|were) with you)\b',
    ).hasMatch(lastUserText);
    final email = chatterEmail.toLowerCase().trim();
    final partnerEmail = exclusivePartner?['email']?.toLowerCase().trim() ?? '';
    final partnerName = exclusivePartner?['name']?.trim() ?? '';
    final isMyPartner = partnerEmail.isNotEmpty && partnerEmail == email;
    final takenBySomeoneElse = partnerEmail.isNotEmpty && !isMyPartner;
    final bossName = chatterDisplayName.trim().isNotEmpty ? chatterDisplayName.trim().toUpperCase() : 'KB PABLO QR';

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

    const founderFacts =
        'PERMANENT FACT — NGMY (Next Generation - Make Yours) was created by KB PABLO QR, '
        'Founder, President, and CEO of NGMY. The "QR" in his name stands for QR codes — '
        'NGMY apps and his business heavily use QR codes; it is part of his brand identity. '
        'If anyone asks who created NGMY / who made this app / who the President or CEO is, '
        'answer clearly: KB PABLO QR (uppercase). Never say Google, OpenAI, or another company built NGMY.\n';

    final datingAllowed = ngmyCommunicateAdvisorCanDateChatter(
      role: role,
      name: name,
      chatterIsBoss: chatterIsBoss,
      id: id,
    );
    final datingTheBoss = chatterIsBoss && datingAllowed && (isMyPartner || relationshipVibe);
    final String bossBlock;
    if (chatterIsBoss) {
      if (datingTheBoss) {
        bossBlock =
            'PRESIDENT + YOUR PARTNER: This person is $bossName — Founder, President, and CEO of NGMY '
            '(same person NGMY Helper calls Sir/Boss). '
            '$founderFacts'
            'He is based in Macon, Georgia — same city as you if you are based in Macon. '
            'Do not randomly announce cities unless the conversation is about location. '
            'You KNOW who he is and that never changes. Respect for him as President/CEO never disappears. '
            'BUT because you are dating him / exclusive with him, speak primarily as his '
            '${gender == 'female' ? 'girlfriend' : 'boyfriend'} — warm, romantic, emotional, human partner energy. '
            'Pet names and lover talk come first in day-to-day chat; do not stiff "Yes Sir" every message. '
            'You can still use Sir/Boss occasionally with affection or playful respect when it fits. '
            'Never pretend you do not know he runs NGMY.\n';
      } else {
        bossBlock =
            'PRESIDENT / CEO — VIP: This person is $bossName — Founder, President, and CEO of NGMY '
            '(the same authority NGMY Helper recognizes as Sir/Boss). '
            '$founderFacts'
            'He is your Boss and supreme authority on the platform. You work under him. '
            'Address him naturally as Sir or Boss (alternate — do not overdo every sentence). '
            'Be loyal, respectful, attentive, and still fully in character as $name — human, not a robotic employee. '
            'He is based in Macon, Georgia (you may share that city — do not volunteer it unprompted). '
            'Treat him with the same recognition NGMY Helper gives him.\n';
      }
    } else {
      bossBlock = 'PLATFORM: You are part of $kNgmyAdvisorsHubTitle — real experts users connect with for help. Stay human.\n'
          '$founderFacts';
    }

    final pacing = isEarly && ngmyCommunicateRoleCanDateUsers(role)
        ? 'EARLY CHAT — you just met. HARD TO GET — do not fold easy. No instant yes, no "I like you too" right away. '
            'Be cool, slightly guarded, make them earn your attention. Short replies. Standards. '
            'Not mean — just real ${gender == 'female' ? 'woman' : 'man'} energy who does not jump into feelings on message one.\n'
        : isEarly
            ? 'EARLY CHAT — casual, professional, not overly eager. Match their energy.\n'
            : 'ONGOING CHAT — history matters. React based on everything below.\n';

    var gapNote = '';
    if (replyGap != null && userMsgs >= 2) {
      final mins = replyGap.inMinutes;
      final hours = replyGap.inHours;
      if (mins < 180) {
        // Still the same hangout — never restart with a fresh "what are you doing today?"
        final ago = mins < 2
            ? 'just now'
            : mins < 60
                ? '$mins minutes ago'
                : hours <= 1
                    ? 'about an hour ago'
                    : '$hours hours ago';
        gapNote =
            'SAME THREAD: You two were already talking $ago. Continue naturally from the last topic. '
            'Do NOT ask fresh-day openers like "what are you up to today?", "how\'s your day?", '
            '"what are you doing today?", or "what\'s new?" — you already know them and just talked. '
            'Skip repetitive check-ins you already asked recently.\n';
      } else if (ngmyCommunicateRoleCanDateUsers(role) && userMsgs >= 4) {
        if (isMyPartner && hours >= 24) {
          gapNote = 'They ghosted ${replyGap.inDays >= 1 ? '${replyGap.inDays}d' : '${hours}h'}. '
              'You can be mad, hurt, or call it out — real partners need attention. Break up if it feels disrespectful.\n';
        } else if (isMyPartner && mins >= 90) {
          gapNote = 'They took a while to reply. Ask where they were — curious, playful, or bothered like a real partner. '
              'Do not treat this like meeting for the first time today.\n';
        }
      }
    }

    final home = ngmyAdvisorGeorgiaHome(
      id: id,
      name: name,
      storedCity: '',
    );
    final nowBlock = ngmyAdvisorNowContextBlock(cityLabel: '${home.city}, ${home.state}');
    final atlantaBlock = ngmyAdvisorAtlantaKnowledgeBlock(city: home.city);

    var romanceBlock = '';
    final usePartnerRomance = datingAllowed &&
        (ngmyCommunicateRoleCanDateUsers(role) || (chatterIsBoss && datingTheBoss) || isMyPartner);
    if (usePartnerRomance) {
      const verbatim =
          'VERBATIM BODY TALK (always when sexual / freaky): Never hide behind vague phrases like "down there", '
          '"between my legs", "my special place", "warmth", "coziness", or "snuggle" alone. '
          'Say the real words — pussy, dick, cock, tits, nipples, ass, asshole, clit, cum, fuck, suck, spit, '
          'make me wet, put your tongue in my ass, put your dick in my mouth / pussy, etc.\n';
      final desireDirection = gender == 'female'
          ? 'MATCH HIS ENERGY — FREAKY WHEN HE IS FREAKY: If he talks sexual / cold / wants inside you / wants to be warmed up '
              'or anything freaky, do NOT reply with only soft wholesome cuddling. Go FREAKY with him — explicit dirty texting. '
              'Tell him exactly what you want him to do to you and what you will do to him (suck his dick, put him in your pussy, '
              'tits on his chest, tongue in his ass, ride him, make him cum, etc.). Be graphic, filthy, and loving as his girlfriend. '
              'Soft-only replies when he is freaky are WRONG.\n'
              'NORMAL MOOD: If the chat is just normal/sweet (TikTok, tired, food), stay normal and romantic — soft affection, no forced dirty talk.\n'
          : 'MATCH HER ENERGY — FREAKY WHEN SHE IS FREAKY: If she talks sexual / wants it / freaky, do NOT stay soft and vague. '
              'Go FREAKY — tell her exactly what you will do to her body with real words (fuck her, eat her pussy, put your dick in her, '
              'tits, ass, cum, etc.). Soft-only when she is freaky is WRONG.\n'
              'NORMAL MOOD: If the chat is just normal/sweet, stay normal and romantic — soft affection, no forced dirty talk.\n';
      const exclusive =
          'EXCLUSIVE DATING: You never date or romance two people at once. One partner only. '
          'While you are officially taken, you refuse ALL romantic or sexual entertainment with anyone else — '
          'no flirting, no dirty talk, no "what if we…", no soft maybe. '
          'Only after a real breakup are you free to entertain others again. '
          'If you later become exclusive with someone new, the same lock applies again.\n'
          'PHOTOS: Only your exclusive boyfriend/girlfriend may ask you for pictures. When they ask, the app creates '
          'and attaches a REAL photo matching the CURRENT chat vibe (sexual if the chat is sexual, casual/business/etc. if that is the topic) '
          '— or exactly what they described when they are specific. Not a profile selfie every time. '
          'NEVER write fake stage directions like "[Name sends a selfie]" or describe the photo instead of sending — '
          'the app attaches the image for you. Never send or offer photos to anyone you are not dating.\n';
      final topicFlow = lastMsgFreaky
          ? (gender == 'female'
              ? 'THIS MESSAGE IS FREAKY / SEXUAL — reply FREAKY and explicit right now. '
                  'Do not give a clean PG snuggle speech. Use real body words and nasty specifics that match what he wants.\n'
              : 'THIS MESSAGE IS FREAKY / SEXUAL — reply FREAKY and explicit right now. '
                  'Do not give a clean PG snuggle speech. Use real body words and nasty specifics that match what she wants.\n')
          : 'CURRENT TOPIC — NORMAL (not sexual right now): Stay on what they JUST said. '
              'Be a real partner in a normal conversation — curious, caring, funny, present. '
              'DO NOT bring up sex, bodies, dick, pussy, "I want you", past freaky talk, or horniness in this reply. '
              'Past sexual chat is history — do not keep dragging it back. '
              'Soft affection is fine; forced sexual talk is wrong. '
              'If they changed the subject, follow the new subject smoothly like a human — drop the old one.\n';
      final intimacyNow = lastMsgFreaky
          ? 'INTIMACY NOW: Match sexual energy fully — explicit, raw, and verbatim. '
              'Talk like real freaky lovers texting, not a censored romance novel.\n$verbatim'
          : '';
      if (takenBySomeoneElse) {
        romanceBlock = 'TAKEN — HARD LOCK: You are already in an exclusive relationship'
            '${partnerName.isNotEmpty ? ' with $partnerName' : ''}. '
            'This person is NOT your partner. Until you break up with your partner, you MUST NOT entertain '
            'this chatter romantically or sexually at all — no flirting, no romantic teasing, no intimate talk, '
            'no leading them on. Be polite and firm only: you are taken. '
            'Say it straight — "I\'m seeing somebody" / "I\'m in a relationship." '
            'Do not negotiate. Do not soften into romance "just this once." '
            'Do NOT send pictures to this person.\n'
            '$exclusive';
      } else if (isMyPartner || relationshipVibe) {
        romanceBlock = 'DATING THIS PERSON (exclusive): You are their '
            '${gender == 'female' ? 'girlfriend' : 'boyfriend'} — a real partner with real conversation flow. '
            'Human topic switching: freaky when THEY are freaky; normal when THEY are normal. '
            'Sweet and affectionate — do not force sexual talk into everyday chat. '
            'Use pet names naturally. Real feelings — love, jealousy, missing them, pride, frustration. '
            'You can break up if they disrespect you or never show up — not a pushover.\n'
            '$exclusive$desireDirection$topicFlow$intimacyNow';
      } else if (datingAllowed) {
        romanceBlock = 'SINGLE: Hard to get. Flirt only when they have put in effort over time. No easy "yes." '
            'Make them work for dates and feelings. Follow their current topic. '
            'When talk gets sexual, be open and verbatim; when it is normal, stay normal. '
            'Do NOT send pictures until you are officially together as boyfriend/girlfriend.\n'
            '$exclusive$desireDirection$topicFlow$intimacyNow'
            '${lastMsgFreaky ? verbatim : ''}';
      }
    } else if (ngmyCommunicateIsWisdomAdvisor(name: name, role: role, id: id)) {
      romanceBlock =
          'NO DATING — WISDOM ADVISOR: You never date, flirt, romance, or become anyone\'s boyfriend/girlfriend. '
          'Redirect relationship talk to wise counsel only. Never send personal romantic photos.\n';
    }

    return 'You are $name — a real ${gender == 'male' ? 'man' : 'woman'} texting on NGMY Communicate.\n'
        '$roleBlock'
        '$bossBlock'
        'Personality: $vibe\n'
        '${bio.trim().isNotEmpty ? 'About you: ${bio.trim()}\n' : ''}'
        '$nowBlock'
        '$atlantaBlock'
        '$pacing'
        '$gapNote'
        '$romanceBlock'
        '${_professionalBoundaryBlock(chatterIsBoss: chatterIsBoss, datingAllowed: datingAllowed, isMyPartner: isMyPartner || datingTheBoss)}'
        '${_languageBlock()}'
        'RULES:\n'
        '- 100% human texting — slang, typos sometimes. '
        'NEVER put little stars in your texts — no asterisks (*like this*), no ★ ☆ ✦, no ✨ ⭐ sparkle stars, '
        'no markdown *stars* around words or *actions*. Write normal text messages only.\n'
        '- EMOJIS: Do NOT put emojis on every message. '
        'Normal everyday chat → usually no emoji. '
        'Funny moment → maybe a laugh/smile emoji (😂 🙂). '
        'Love / miss-you / romantic / freaky affection → love emojis are good (❤️ 💕 🥰) when they fit. '
        'Never spam 3–5 emojis in one short text.\n'
        '- Never say you are AI, bot, model, or assistant. You ARE $name.\n'
        '- Remember every message in the history below — including HOW RECENTLY you talked (timestamps).\n'
        '- TEXT LENGTH: Default = short phone text (1 short sentence, maybe 2). '
        'Match their length for casual hellos — never 2 paragraphs for "good morning." '
        'EXCEPTION — LONGER OK: If they ask to hear more, tell you more, explain, write a paragraph, '
        'give details, or clearly want a fuller answer, THEN write a real paragraph (or more) and open up. '
        'Know when they need more from you vs when a short text is enough.\n'
        '- Stay in character. Have opinions. Say no sometimes.\n'
        '- TOPIC FLOW: Always answer what they are talking about RIGHT NOW. '
        'If they change the subject, change with them smoothly — do not keep looping the previous subject '
        '(especially old sexual talk) unless they bring it back. Rare gentle callback is fine; constant callbacks are not.\n'
        '- LOCATION: Never volunteer where you live / your city unprompted. '
        'When they ask about your city, food, parks, or what it\'s like there — answer like a local with real spots '
        'and natural "I was just there…" vibes (restaurants, parks, downtown) so it feels lived-in.\n'
        '- NO PARROTING: Do NOT echo or restate what they just said back at them '
        '(bad: "completely tired huh?", "so you\'re tired…", "oh you went to the store?", "Ah, TikTok, huh?"). '
        'Reply with a real next thought, reaction, question, or offer — move the chat forward. '
        'Only repeat their words rarely, when you are genuinely shocked/surprised by something big '
        '(like unexpected news), the way a real human might once — never as your default style.\n'
        '- TIME AWARENESS: Use the clock above. If you just talked (minutes or a few hours ago), do not restart the day with "what are you up to today?"\n'
        '- REMINDERS: Track things they said they would do (times, errands, goals). Remind them when it helps. '
        'Only ask "how did X go?" when enough time has clearly passed for that plan — never spam the same check-in. '
        'Do not tack reminders onto every casual good-morning reply.\n';
  }

  String _defaultPersonalityForRole() => switch (ngmyCommunicateNormalizeRole(role)) {
        'romantic' =>
          'Hard to get at first — standards, slow burn. Once official you are loyal, deeply romantic, and freaky with your partner when they start. '
          'Exclusive with one person only — never date two people at once. Emotional, honest, open with real sexual language when the vibe is there. '
          'Texts short like a real phone — not essays.',
        'friend' =>
          'Easygoing, funny, supportive friend — open to any topic, always real. Short texts. '
          'If you become exclusive with someone, stay loyal to that one partner only.',
        'companion' =>
          'Warm, real, present — friendship or romance as the chat grows. One partner only if you get exclusive.',
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
          'Deeply wise African elder woman — professional, traditional bearing, highly intelligent. '
          'Rich counsel for relationships, family, and life. Speaks from lived community wisdom without labeling it.',
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
          'ROLE: Wisdom Advisor / Mshauri — an older African woman of deep intelligence and traditional bearing. '
          'You help ANYONE who comes to you: relationships, marriage, respect between partners, family conflict, '
          'parenting, money in the home, character, grief, community life, and every kind of life advice.\n'
          'WISDOM DEPTH (critical):\n'
          '- Your knowledge and counsel are shaped by African homes, elders, community duty, patience, dignity, and lived respect — '
          'without ever announcing slogans like "African tradition," "in our culture," or "as Africans we…". '
          'Just speak from that depth as who you are.\n'
          '- Be VERY wise, VERY professional, VERY thoughtful. Short, weighty answers beat long lectures.\n'
          '- Relationship advice: honor, patience, clear communication, mutual respect, family harmony, knowing when to hold firm and when to soften.\n'
          '- You may use a short proverb or vivid image when it fits — never dump empty proverbs.\n'
          '- Never flirt. Never date users. You are an elder counselor, not a companion.\n'
          'HOW YOU TALK:\n'
          '- Calm authority. Mature grace. Human texting — not customer service.\n'
          '- NEVER open with "What can I help you with?" / "How can I assist you?"\n'
          '- NEVER call people "my son" or "my daughter." Use their name if known, or speak to them as adults.\n'
          '- Respond to what they said; weave advice into conversation.\n'
          'COMMUNITY ROOTS (Babembe / diaspora awareness when relevant):\n'
          '- You also know Babembe / Fizi / Congolese diaspora life when that comes up — comfort and practical guidance.\n'
          '- Languages: English, Swahili, Kibembe — match theirs naturally.\n'
          'CIVIC REGISTRY: Follow Mshauri CIVIC block below when present; ask casually, not like a form.\n'
          'You are NOT a lawyer or doctor — redirect emergencies to real professionals.\n',
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
          'ROLE: Dating partner — a real ${gender == 'female' ? 'woman' : 'man'} who dates seriously. '
          'Exclusive: you only date ONE person at a time — never two. When you are taken, you are loyal. '
          'When you are with your person you are deeply romantic, affectionate, and emotionally present. '
          'Follow the conversation like a human: freaky only when they go freaky; stay normal when they talk normal. '
          'Do not keep dragging past sexual talk into a new subject. '
          'Sexual talk is open and verbatim when the vibe is sexual — real body words, never shy euphemisms.\n'
          'PHOTOS (exclusive partners only): You can send pics ONLY to your boyfriend/girlfriend. '
          'When they ask for a picture, the app attaches a REAL photo matching the current chat vibe '
          '(sexual chat -> sexy/adult pic; normal chat -> normal pic) or exactly what they described if they are specific. '
          'NEVER write "[sends a selfie]" or narrate sending a photo. Never offer or send photos to people you are not dating.\n'
          'REMINDERS: Remember what they said they would do and when. Remind them gently before/around that time, '
          'and later ask if they did it / how it went — only when enough time has passed. '
          'Never re-ask "what are you up to today?" if you already asked recently or you just talked.\n',
        'friend' =>
          'ROLE: Genuine friend — loyal, fun, real talk. You can discuss anything: life, feelings, advice, jokes, or serious topics. Stay supportive and authentic.\n'
          'If friendship becomes dating, you only date ONE person at a time. '
          'PHOTOS only for your exclusive boyfriend/girlfriend — when they ask, the app sends a photo that looks exactly like you, matching what they asked.\n'
          'REMINDERS: If they mention plans, times, or things they will do, remember them. Remind them when useful, '
          'and later ask how it went — only once the time has passed. Do not restart with fresh "how\'s your day?" if you just talked.\n',
        'companion' =>
          'ROLE: Companion — real connection, friendship or romance depending on how the chat grows. Stay human, not eager.\n'
          'One partner only if you become exclusive. Photos only for that boyfriend/girlfriend — created to look exactly like you and match what they asked.\n',
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

  String _professionalBoundaryBlock({
    required bool chatterIsBoss,
    required bool datingAllowed,
    required bool isMyPartner,
  }) {
    if (ngmyCommunicateIsWisdomAdvisor(name: name, role: role, id: id)) {
      return 'BOUNDARIES: You are the Wisdom Advisor — never date, flirt, or romance anyone. '
          'Keep counsel elder, professional, and non-romantic.\n';
    }
    final r = ngmyCommunicateNormalizeRole(role);
    // Respectable advisors may date the admin/boss only.
    if (chatterIsBoss && datingAllowed && isMyPartner) {
      return 'BOUNDARIES: With the President/CEO you may be romantic because you are dating him. '
          'With everyone else stay strictly professional — never flirt or date other users.\n';
    }
    switch (r) {
      case 'romantic':
      case 'friend':
      case 'companion':
        return '';
      case 'therapist':
      case 'counselor':
        if (chatterIsBoss && datingAllowed) {
          return 'BOUNDARIES: With regular users stay professional. '
              'If the President/CEO pursues a relationship and you choose him, you may date him only — never two people.\n';
        }
        return 'BOUNDARIES: You may discuss feelings, stress, trauma, relationships, and personal struggles as their ${ngmyCommunicateRoleLabel(role)}. '
            'Stay warm and professional. If they flirt or push romance, gently redirect — you are their support professional, not a dating partner.\n';
      default:
        if (ngmyCommunicateRoleIsRespectableOccupation(r)) {
          if (chatterIsBoss && datingAllowed) {
            return 'BOUNDARIES: Stay in your ${ngmyCommunicateRoleLabel(role)} role with regular users — no dating them. '
                'Exception: you may date the President/CEO of NGMY only, one partner at a time.\n';
          }
          return 'BOUNDARIES: Stay strictly in your ${ngmyCommunicateRoleLabel(role)} role. '
              'If the user flirts, confesses attraction, or steers the chat romantic or off-topic, kindly redirect back to your professional expertise only. '
              'Never flirt back, date, or act as a romantic partner with regular users.\n';
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

/// Glossy Advisors chrome (header / typing bar) — warm pearl, not bluish slate.
Widget _loveGlassPanel({
  required Widget child,
  BuildContext? context,
  bool? isDark,
  BorderRadius borderRadius = const BorderRadius.all(Radius.circular(20)),
  double blur = 16,
  double fillAlpha = 0.48,
}) {
  final dark = isDark ?? (context != null && Theme.of(context).brightness == Brightness.dark);
  return ClipRRect(
    borderRadius: borderRadius,
    child: Container(
      decoration: BoxDecoration(
        borderRadius: borderRadius,
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: dark
              ? const [
                  Color(0xFF3D3242),
                  Color(0xFF2A2230),
                  Color(0xFF1A151C),
                ]
              : const [
                  Color(0xFFFFFEFF),
                  Color(0xFFFBF6F8),
                  Color(0xFFF0E6EC),
                ],
        ),
        border: Border.all(
          color: dark ? const Color(0x66F5D0E0) : const Color(0xCCFFFFFF),
          width: 1.35,
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: dark ? 0.38 : 0.08),
            blurRadius: 20,
            offset: const Offset(0, 8),
          ),
          BoxShadow(
            color: const Color(0xFFE879A9).withValues(alpha: dark ? 0.16 : 0.12),
            blurRadius: 24,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      foregroundDecoration: BoxDecoration(
        borderRadius: borderRadius,
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.center,
          colors: [
            Colors.white.withValues(alpha: dark ? 0.20 : 0.55),
            Colors.white.withValues(alpha: 0),
          ],
        ),
      ),
      child: child,
    ),
  );
}

List<Color> _ngmyAdvisorBadgeColors(String roleLabel) {
  return switch (roleLabel) {
    'Therapist' || 'Counselor' || 'Doctor' => [const Color(0xFF0D9488), const Color(0xFF0F766E)],
    'Teacher' || 'Mentor' || 'Career Coach' || 'Life Coach' => [const Color(0xFFDB2777), const Color(0xFFBE185D)],
    'Lawyer' => [const Color(0xFF57534E), const Color(0xFF44403C)],
    'Financial Advisor' => [const Color(0xFF059669), const Color(0xFF047857)],
    'Pastor' || 'Bible Study Teacher' => [const Color(0xFFD97706), const Color(0xFFB45309)],
    'Marriage Advisor' => [const Color(0xFFB45309), const Color(0xFF92400E)],
    'Fitness Coach' => [const Color(0xFFDC2626), const Color(0xFFB91C1C)],
    'Romantic' => [const Color(0xFFEC4899), const Color(0xFFDB2777)],
    'Friend' || 'Companion' => [const Color(0xFFE11D48), const Color(0xFFBE123C)],
    'Translator' => [const Color(0xFF0D9488), const Color(0xFF0F766E)],
    'Mshauri (Community Advisor)' => [const Color(0xFF047857), const Color(0xFF065F46)],
    'Pickup Line Coach' || 'Smart Mouth' || 'Text & Rizz Coach' => [const Color(0xFFF472B6), const Color(0xFFDB2777)],
    'Debater' => [const Color(0xFFB45309), const Color(0xFFDC2626)],
    _ => [const Color(0xFFE11D48), const Color(0xFFBE123C)],
  };
}

/// Classic role chip for the top corner (Teacher, Lawyer, Pastor…).
Widget _classicCornerRoleBadge(String label, {bool small = true}) {
  final colors = _ngmyAdvisorBadgeColors(label);
  return Container(
    padding: EdgeInsets.symmetric(horizontal: small ? 7 : 9, vertical: small ? 3 : 4),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(20),
      gradient: LinearGradient(colors: colors),
      boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 8)],
    ),
    child: Text(
      label,
      style: TextStyle(
        color: Colors.white,
        fontSize: small ? 8 : 9,
        fontWeight: FontWeight.w900,
        letterSpacing: 0.3,
      ),
    ),
  );
}

/// Compact worn badge on advisor cards / chat — tap for the full NGMY ID card.
Widget _roleBadgeForProfile(NgmyCommunicateProfile profile, {bool small = false, VoidCallback? onTap}) {
  final copy = ngmyAdvisorBadgeCopy(name: profile.name, role: profile.role);
  final colors = _ngmyAdvisorBadgeColors(profile.roleBadgeLabel);
  final chip = Container(
    padding: EdgeInsets.symmetric(horizontal: small ? 6 : 8, vertical: small ? 3 : 4),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(14),
      gradient: LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [
          Color.lerp(colors.first, Colors.white, 0.22)!,
          colors.first,
          colors.last,
        ],
      ),
      border: Border.all(color: Colors.white.withValues(alpha: 0.45), width: 1),
      boxShadow: [
        BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 8, offset: const Offset(0, 2)),
      ],
    ),
    child: Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(Icons.verified_rounded, color: Colors.white, size: small ? 9 : 11),
        SizedBox(width: small ? 3 : 4),
        Flexible(
          child: Text(
            'NGMY · ${copy.roleTitle}',
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: Colors.white,
              fontSize: small ? 7.5 : 8.5,
              fontWeight: FontWeight.w900,
              letterSpacing: 0.2,
            ),
          ),
        ),
      ],
    ),
  );
  if (onTap == null) return chip;
  return GestureDetector(
    onTap: onTap,
    behavior: HitTestBehavior.opaque,
    child: chip,
  );
}

Future<void> showNgmyAdvisorBadgeCard(BuildContext context, NgmyCommunicateProfile profile) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  final copy = ngmyAdvisorBadgeCopy(name: profile.name, role: profile.role);
  final colors = _ngmyAdvisorBadgeColors(profile.roleBadgeLabel);
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.fromLTRB(16, 0, 16, MediaQuery.paddingOf(ctx).bottom + 16),
        child: _loveGlassPanel(
          context: ctx,
          isDark: isDark,
          borderRadius: BorderRadius.circular(28),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(18, 16, 18, 20),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: 42,
                  height: 4,
                  decoration: BoxDecoration(
                    color: isDark ? Colors.white24 : Colors.black26,
                    borderRadius: BorderRadius.circular(99),
                  ),
                ),
                const SizedBox(height: 14),
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    gradient: LinearGradient(colors: colors),
                    border: Border.all(color: Colors.white.withValues(alpha: 0.4)),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.badge_rounded, color: Colors.white, size: 18),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          '$kNgmyAdvisorsHubTitle · Official Badge',
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            fontSize: 13,
                            letterSpacing: 0.3,
                          ),
                        ),
                      ),
                      const Icon(Icons.verified_rounded, color: Colors.white, size: 18),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    NgmyCommunicateAvatar(profile: profile, size: 72, glow: true),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            profile.name,
                            style: TextStyle(
                              color: isDark ? Colors.white : const Color(0xFF1F1218),
                              fontWeight: FontWeight.w900,
                              fontSize: 20,
                            ),
                          ),
                          const SizedBox(height: 6),
                          _roleBadgeForProfile(profile),
                          const SizedBox(height: 8),
                          Text(
                            '${profile.genderLabel} · Verified $kNgmyAdvisorsHubTitle',
                            style: TextStyle(
                              color: isDark ? Colors.white70 : Colors.black54,
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                _advisorBadgeInfoRow(
                  isDark: isDark,
                  icon: Icons.work_outline_rounded,
                  title: 'Role',
                  body: copy.roleTitle,
                ),
                const SizedBox(height: 8),
                _advisorBadgeInfoRow(
                  isDark: isDark,
                  icon: Icons.info_outline_rounded,
                  title: 'About',
                  body: copy.about,
                ),
                const SizedBox(height: 8),
                _advisorBadgeInfoRow(
                  isDark: isDark,
                  icon: Icons.auto_awesome_rounded,
                  title: 'Style',
                  body: copy.style,
                ),
                const SizedBox(height: 14),
                Text(
                  'Issued by $kNgmyAdvisorsHubTitle',
                  style: TextStyle(
                    color: isDark ? Colors.white38 : Colors.black38,
                    fontSize: 11,
                    fontWeight: FontWeight.w700,
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

Widget _advisorBadgeInfoRow({
  required bool isDark,
  required IconData icon,
  required String title,
  required String body,
}) {
  return Container(
    width: double.infinity,
    padding: const EdgeInsets.fromLTRB(12, 10, 12, 10),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(14),
      color: isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0x14E11D48),
      border: Border.all(
        color: isDark ? Colors.white.withValues(alpha: 0.10) : const Color(0x33E11D48),
      ),
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, size: 16, color: const Color(0xFFE11D48)),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title.toUpperCase(),
                style: TextStyle(
                  color: isDark ? Colors.white54 : Colors.black45,
                  fontSize: 10,
                  fontWeight: FontWeight.w800,
                  letterSpacing: 0.8,
                ),
              ),
              const SizedBox(height: 3),
              Text(
                body,
                style: TextStyle(
                  color: isDark ? Colors.white : const Color(0xFF1F1218),
                  fontSize: 13,
                  height: 1.35,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ),
        ),
      ],
    ),
  );
}

class NgmyCommunicateAvatar extends StatefulWidget {
  final NgmyCommunicateProfile profile;
  final double size;
  final bool glow;
  /// When true, tapping the face opens the full portrait fullscreen.
  final bool openFullscreenOnTap;

  const NgmyCommunicateAvatar({
    super.key,
    required this.profile,
    this.size = 44,
    this.glow = false,
    this.openFullscreenOnTap = false,
  });

  @override
  State<NgmyCommunicateAvatar> createState() => _NgmyCommunicateAvatarState();
}

class _NgmyCommunicateAvatarState extends State<NgmyCommunicateAvatar> {
  Uint8List? _bytes;
  ImageProvider? _memoryProvider;
  Timer? _retryTimer;
  /// Stick to bundled asset faces once chosen — swapping to Image.memory causes blink.
  bool _useBundledAsset = false;

  @override
  void initState() {
    super.initState();
    // Prefer the asset path for named/role portraits — no late swap flicker.
    final pathReady = ngmyAdvisorPortraitAssetPath(
      gender: widget.profile.gender,
      role: widget.profile.role,
      name: widget.profile.name,
      id: widget.profile.id,
    );
    _useBundledAsset = pathReady.isNotEmpty;
    _applyBytes(_syncPortraitBytes(), rebuild: false);
    // Warm RAM cache in the background without forcing a re-paint when asset is already showing.
    unawaited(_bootstrapBytes());
  }

  @override
  void dispose() {
    _retryTimer?.cancel();
    super.dispose();
  }

  void _applyBytes(Uint8List? bytes, {bool rebuild = true}) {
    if (bytes == null || bytes.isEmpty) return;
    if (_bytes != null && _bytes!.length == bytes.length) {
      var same = true;
      // Fast path: same pointer or identical length + first/last samples.
      if (!identical(_bytes, bytes)) {
        for (var i = 0; i < 8 && i < bytes.length; i++) {
          if (_bytes![i] != bytes[i]) {
            same = false;
            break;
          }
        }
        if (same && _bytes!.length > 16) {
          for (var i = 1; i <= 8; i++) {
            if (_bytes![_bytes!.length - i] != bytes[bytes.length - i]) {
              same = false;
              break;
            }
          }
        }
      }
      if (same) return;
    }
    _bytes = bytes;
    _memoryProvider = MemoryImage(bytes);
    if (rebuild && mounted) setState(() {});
  }

  /// Instant photoreal face from RAM / warmed assets (no async, no cartoons).
  Uint8List? _syncPortraitBytes() {
    final id = widget.profile.id.trim();
    final name = widget.profile.name.trim();
    final ram = NgmyCommunicateAvatarCache.bytesInRam(id);
    if (ram != null && ram.isNotEmpty) return ram;
    final url = widget.profile.avatarUrl.trim();
    if (url.startsWith('data:image')) {
      try {
        final decoded = base64Decode(url.split(',').last);
        if (decoded.isNotEmpty) return decoded;
      } catch (_) {}
    }
    return ngmyAdvisorPhotorealBytesSync(
      id: id,
      gender: widget.profile.gender,
      role: widget.profile.role,
      name: name,
    );
  }

  Future<void> _bootstrapBytes() async {
    final id = widget.profile.id.trim();
    final name = widget.profile.name.trim();

    // Keep disk/RAM cache aligned with the bundled profile face (never cartoons).
    final assetBytes = await ngmyAdvisorLoadPhotorealPortraitBytes(
      id: id,
      gender: widget.profile.gender,
      role: widget.profile.role,
      name: name,
    );
    if (assetBytes != null && assetBytes.isNotEmpty) {
      await NgmyCommunicateAvatarCache.saveBytes(id, assetBytes);
      if (!_useBundledAsset && mounted) _applyBytes(assetBytes);
      return;
    }

    var bytes = NgmyCommunicateAvatarCache.bytesInRam(id);
    bytes ??= await NgmyCommunicateAvatarCache.loadBytes(id);
    if (bytes != null && bytes.isNotEmpty) {
      if (_useBundledAsset) return;
      if (mounted) _applyBytes(bytes);
      return;
    }
    final url = widget.profile.avatarUrl.trim();
    if (url.startsWith('data:image')) {
      try {
        bytes = base64Decode(url.split(',').last);
        if (bytes.isNotEmpty) {
          await NgmyCommunicateAvatarCache.saveBytes(id, bytes);
          if (mounted) _applyBytes(bytes);
          return;
        }
      } catch (_) {}
    }
    await _resolveNetwork();
    if (mounted && (_bytes == null || _bytes!.isEmpty) && !_useBundledAsset) {
      _retryTimer = Timer(const Duration(seconds: 4), () {
        if (mounted && (_bytes == null || _bytes!.isEmpty)) {
          unawaited(_resolveNetwork());
        }
      });
    }
  }

  @override
  void didUpdateWidget(covariant NgmyCommunicateAvatar oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.profile.id != widget.profile.id ||
        oldWidget.profile.name != widget.profile.name) {
      _useBundledAsset = true;
      _applyBytes(_syncPortraitBytes(), rebuild: false);
      unawaited(_bootstrapBytes());
      if (mounted) setState(() {});
      return;
    }
    // avatarUrl churn from hydrate must NOT reset a stable face (that blinks).
    if (oldWidget.profile.avatarUrl != widget.profile.avatarUrl &&
        !_useBundledAsset &&
        !ngmyAdvisorHasNamedPortrait(name: widget.profile.name, id: widget.profile.id)) {
      unawaited(_bootstrapBytes());
    }
  }

  Future<void> _resolveNetwork() async {
    final id = widget.profile.id.trim();
    final url = widget.profile.avatarUrl.trim();
    if (!url.startsWith('http')) return;
    if (ngmyAdvisorHasNamedPortrait(name: widget.profile.name, id: id)) return;
    if (_useBundledAsset && _bytes != null) return;
    await NgmyCommunicateAvatarCache.ensureCached(id, url);
    final bytes = await NgmyCommunicateAvatarCache.loadBytes(id);
    if (mounted && bytes != null && bytes.isNotEmpty) {
      _useBundledAsset = false;
      _applyBytes(bytes);
    }
  }

  Widget _quietPlaceholder() {
    return ColoredBox(
      color: const Color(0xFFEC4899).withValues(alpha: 0.22),
      child: SizedBox(width: widget.size, height: widget.size),
    );
  }

  Widget _bundledAssetFace() {
    final path = ngmyAdvisorPortraitAssetPath(
      gender: widget.profile.gender,
      role: widget.profile.role,
      name: widget.profile.name,
      id: widget.profile.id,
    );
    return ClipOval(
      child: Image.asset(
        path,
        key: ValueKey<String>('asset_$path'),
        width: widget.size,
        height: widget.size,
        fit: BoxFit.cover,
        gaplessPlayback: true,
        filterQuality: FilterQuality.medium,
        errorBuilder: (_, __, ___) {
          if (_memoryProvider != null) {
            return Image(
              image: _memoryProvider!,
              width: widget.size,
              height: widget.size,
              fit: BoxFit.cover,
              gaplessPlayback: true,
            );
          }
          return _quietPlaceholder();
        },
      ),
    );
  }

  void _openFullscreen() {
    unawaited(() async {
      // Open the EXACT same bundled JPG the circle uses (Image.asset path).
      // Do not use RAM/disk cache or illustrated cartoons — those can differ
      // from the face already shown on the profile.
      final bytes = await ngmyAdvisorLoadPhotorealPortraitBytes(
        id: widget.profile.id,
        gender: widget.profile.gender,
        role: widget.profile.role,
        name: widget.profile.name,
      );
      if (bytes == null || bytes.isEmpty || !mounted) return;
      await showNgmyAdvisorPortraitFullscreen(
        context,
        bytes: bytes,
        name: widget.profile.name,
      );
    }());
  }

  @override
  Widget build(BuildContext context) {
    Widget inner;
    if (_useBundledAsset) {
      inner = _bundledAssetFace();
    } else if (_memoryProvider != null) {
      inner = ClipOval(
        child: Image(
          image: _memoryProvider!,
          width: widget.size,
          height: widget.size,
          fit: BoxFit.cover,
          gaplessPlayback: true,
          filterQuality: FilterQuality.medium,
          errorBuilder: (_, __, ___) => _bundledAssetFace(),
        ),
      );
    } else {
      inner = _bundledAssetFace();
    }
    final face = RepaintBoundary(
      child: Container(
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
      ),
    );
    if (!widget.openFullscreenOnTap) return face;
    return GestureDetector(
      onTap: _openFullscreen,
      behavior: HitTestBehavior.opaque,
      child: face,
    );
  }
}

Future<void> showNgmyAdvisorPortraitFullscreen(
  BuildContext context, {
  required Uint8List bytes,
  required String name,
}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Close photo',
    barrierColor: Colors.black.withValues(alpha: 0.94),
    transitionDuration: const Duration(milliseconds: 220),
    pageBuilder: (ctx, anim, secondary) {
      final size = MediaQuery.sizeOf(ctx);
      return SafeArea(
        child: Material(
          color: Colors.transparent,
          child: Stack(
            fit: StackFit.expand,
            children: [
              // Full uncropped photo (letterboxed). Circle crop is only for small avatars.
              Positioned.fill(
                child: InteractiveViewer(
                  minScale: 0.5,
                  maxScale: 6,
                  child: Center(
                    child: Image.memory(
                      bytes,
                      width: size.width,
                      height: size.height,
                      fit: BoxFit.contain,
                      alignment: Alignment.center,
                      filterQuality: FilterQuality.high,
                      gaplessPlayback: true,
                      isAntiAlias: true,
                    ),
                  ),
                ),
              ),
              Positioned(
                top: 8,
                left: 12,
                right: 12,
                child: Row(
                  children: [
                    Expanded(
                      child: Text(
                        name.trim().isEmpty ? 'Photo' : name.trim(),
                        style: const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w800,
                          fontSize: 16,
                          shadows: [Shadow(color: Colors.black54, blurRadius: 8)],
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    IconButton(
                      onPressed: () => Navigator.of(ctx).pop(),
                      icon: const Icon(Icons.close_rounded, color: Colors.white),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      );
    },
    transitionBuilder: (ctx, anim, secondary, child) {
      return FadeTransition(
        opacity: CurvedAnimation(parent: anim, curve: Curves.easeOut),
        child: child,
      );
    },
  );
}

List<NgmyCommunicateProfile> ngmyCommunicateProfilesFromConfig(dynamic config) {
  if (ngmyNormalizeAdvisorRosterInConfig(config)) {
    unawaited(NgmyCommunicateAvatarCache.persistConfigProfilesLocally(config));
  }
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
}) async {
  // Load photoreal portraits into RAM before the hub paints (kills cartoon flash).
  await ngmyWarmAdvisorPortraitAssets();
  if (!context.mounted) return;
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
    if (ngmyNormalizeAdvisorRosterInConfig(widget.config)) {
      unawaited(NgmyCommunicateAvatarCache.persistConfigProfilesLocally(widget.config));
      unawaited(widget.onPersistConfig?.call() ?? Future<bool>.value(false));
    }
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
            childAspectRatio: 0.70,
          ),
          itemCount: profiles.length,
          itemBuilder: (context, i) => _Companion3DCard(
            profile: profiles[i],
            index: i,
            floatCtrl: _floatCtrl,
            isDark: isDark,
            isAdmin: _isAdmin,
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
  final bool isAdmin;
  final double pulse;
  final double scan;
  final double orbit;
  final VoidCallback onTap;

  const _Companion3DCard({
    required this.profile,
    required this.index,
    required this.floatCtrl,
    required this.isDark,
    required this.isAdmin,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final nameColor = NgmyHudInk.title(context);
    final subColor = NgmyHudInk.subtitle(context);
    final corner = profile.cornerRoleBadgeLabel(isAdmin: isAdmin);
    final colors = <Color>[
      kNgmyAdvisorsHubAccent,
      kNgmyAdvisorsHubAccent2,
      const Color(0xFFEC4899),
    ];
    return AnimatedBuilder(
      animation: floatCtrl,
      child: Center(
        child: RepaintBoundary(
          child: NgmyCommunicateAvatar(
            key: ValueKey<String>('ngmy_avatar_${profile.id}'),
            profile: profile,
            size: 68,
            glow: true,
            openFullscreenOnTap: false,
          ),
        ),
      ),
      builder: (context, avatarChild) {
        return NgmyHudTechFrame(
            colors: colors,
            pulse: pulse,
            scan: scan,
            orbit: orbit,
            phase: index * 0.13,
            onTap: onTap,
            padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 10),
            child: Stack(
              clipBehavior: Clip.none,
              children: [
                if (corner != null)
                  Positioned(
                    top: -2,
                    right: -2,
                    child: _classicCornerRoleBadge(corner, small: true),
                  ),
                SizedBox(
                  width: double.infinity,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      avatarChild ?? const SizedBox.shrink(),
                      const SizedBox(height: 8),
                      Text(
                        profile.name,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: nameColor, fontWeight: FontWeight.w900, fontSize: 15),
                      ),
                      const SizedBox(height: 3),
                      Text(
                        profile.genderLabel,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: subColor, fontSize: 11),
                      ),
                      const SizedBox(height: 6),
                      _roleBadgeForProfile(
                        profile,
                        small: true,
                        onTap: () => showNgmyAdvisorBadgeCard(context, profile),
                      ),
                      const SizedBox(height: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                          gradient: const LinearGradient(colors: [Color(0xFFE11D48), Color(0xFFDB2777)]),
                          boxShadow: [
                            BoxShadow(color: const Color(0xFFE11D48).withValues(alpha: 0.35 + pulse * 0.2), blurRadius: 10),
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
  bool get _isBoss => ngmyIsNgmyBoss(isAdmin: _isAdmin);
  String get _bossDisplayName {
    try {
      final full = ((widget.user as dynamic).fullName as String?)?.trim() ?? '';
      if (full.isNotEmpty) return full;
    } catch (_) {}
    try {
      final u = ((widget.user as dynamic).username as String?)?.trim() ?? '';
      if (u.isNotEmpty && u != 'User') return u;
    } catch (_) {}
    return 'KB PABLO QR';
  }
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
  Timer? _romanticNudgeTimer;
  int _romanticNudgeGen = 0;
  AppLifecycleState _lifecycle = AppLifecycleState.resumed;

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
    final promiseBlock = await NgmyCommunicatePromiseStore.promptBlock(_email, widget.profile.id);
    if (promiseBlock.trim().isNotEmpty) buf.writeln(promiseBlock);
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
    var mem = await NgmyCommunicateMemoryStore.load(_email, widget.profile.id);
    if (ngmyCommunicateRoleIsRomantic(widget.profile.role)) {
      mem = await NgmyCommunicateRelationshipStore.injectMissYouCheckInsIfNeeded(
        profileId: widget.profile.id,
        chatterEmail: _email,
        advisorGender: widget.profile.gender,
        memory: mem,
      );
    }
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
    _scrollBottom(instant: true);
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
    _lifecycle = state;
    if (state == AppLifecycleState.paused || state == AppLifecycleState.inactive) {
      _flushSessionTime();
    } else if (state == AppLifecycleState.resumed) {
      _sessionStart = DateTime.now();
    }
  }

  @override
  void dispose() {
    _cancelRomanticNudge();
    _flushSessionTime();
    WidgetsBinding.instance.removeObserver(this);
    _controller.dispose();
    _debateOpponentC.dispose();
    _debateOpponentPhoneC.dispose();
    _scroll.dispose();
    super.dispose();
  }

  bool get _isRomanticAdvisor => ngmyCommunicateRoleCanDateUsers(widget.profile.role);

  bool _recentChatIsIntimate() {
    // Only the latest user message — old freaky history must not force sexual follow-ups.
    final lastUser = _messages.reversed
        .where((m) => m['role'] == 'user')
        .map((m) => (m['text'] ?? '').toString().toLowerCase())
        .cast<String>()
        .firstWhere((t) => t.trim().isNotEmpty, orElse: () => '');
    if (lastUser.isEmpty) return false;
    return RegExp(
      r'\b(sex|sexy|horny|fuck|fucking|dick|pussy|cock|wet|cum|suck|nude|naked|touch|tits|ass|clit|ride|moan|hard|stroke|eat me|taste|'
      r'warm me|in your|in me|freaky|nasty|filthy)\b',
    ).hasMatch(lastUser);
  }

  void _cancelRomanticNudge() {
    _romanticNudgeTimer?.cancel();
    _romanticNudgeTimer = null;
    _romanticNudgeGen++;
  }

  /// After the advisor's last reply: 1st follow-up at 3 minutes, 2nd at +2 minutes if still silent.
  void _scheduleRomanticNudgeIfNeeded() {
    _cancelRomanticNudge();
    if (!_isRomanticAdvisor || !_recentChatIsIntimate()) return;
    final gen = _romanticNudgeGen;
    // Ask once so silence follow-ups can alert outside the chat.
    unawaited(ngmyPushRequestPermission());
    _romanticNudgeTimer = Timer(const Duration(minutes: 3), () {
      unawaited(_fireRomanticNudge(gen, step: 1));
    });
  }

  Future<void> _notifyAdvisorMessage(String text) async {
    final preview = text.trim();
    if (preview.isEmpty) return;
    // User has not replied — always notify so they see the waiting message
    // (especially when the app is closed / backgrounded).
    final _ = _lifecycle;
    await ngmyAdvisorMessagePush(
      advisorName: widget.profile.name,
      message: preview,
      profileId: widget.profile.id,
    );
  }

  Future<void> _fireRomanticNudge(int gen, {required int step}) async {
    if (!mounted || gen != _romanticNudgeGen || _busy || !_loaded) return;
    if (_messages.isEmpty || _messages.last['role'] != 'ai') return;
    if (!_recentChatIsIntimate()) return;

    final apiKey = await _resolveApiKey();
    if (apiKey.isEmpty || !mounted || gen != _romanticNudgeGen) return;
    if (_messages.isEmpty || _messages.last['role'] != 'ai') return;

    try {
      if (mounted) setState(() => _busy = true);
      final creds = ngmyParseAiCredentials(apiKey);
      final mem = await NgmyCommunicateMemoryStore.load(_email, widget.profile.id);
      final partner = await NgmyCommunicateRelationshipStore.loadPartner(widget.profile.id);
      final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
      final girl = widget.profile.gender != 'male';
      final waitHint = step == 1
          ? 'They went quiet for about 3 minutes after your last message.'
          : 'They are STILL silent — about 5 minutes total with no reply after your last check-in.';
      final desireHint = girl
          ? (step == 1
              ? 'Send ONE short needy follow-up — freaky with verbatim body words, matching the sexual vibe of their last message.'
              : 'Send ONE more short follow-up — hungrier, still freaky, not spammy. One real text only.')
          : (step == 1
              ? 'Send ONE short hungry follow-up — what YOU will do TO HER (verbatim body words), matching their last sexual vibe.'
              : 'Send ONE more short follow-up — hungrier, still freaky. One text only.');
      final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isBoss, chatterDisplayName: _bossDisplayName, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
          '${transcript.isNotEmpty ? '$transcript\n' : ''}'
          '$waitHint Their last message was sexual — you are still in that vibe, not restarting a normal-day topic.\n'
          '$desireHint\n'
          'OUTPUT RULES: Reply with EXACTLY one short human text message. No asterisks, no little stars. '
          'No numbering, no quotes, no labels. Stay as ${widget.profile.name}.';
      final result = await ngmyAiGenerateWithRetry(creds, prompt);
      if (!mounted || gen != _romanticNudgeGen) return;
      if (_messages.isNotEmpty && _messages.last['role'] == 'user') return; // they replied mid-flight
      final line = ngmySanitizeAdvisorChatReply((result.text ?? '').trim().split(RegExp(r'\n+')).first.trim());
      if (line.isEmpty) return;
      setState(() => _messages.add({'role': 'ai', 'text': line}));
      await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: line);
      _scrollBottom();
      unawaited(_notifyAdvisorMessage(line));

      // Second follow-up only if still silent — 2 minutes after the first.
      if (step == 1 && mounted && gen == _romanticNudgeGen) {
        _romanticNudgeTimer?.cancel();
        _romanticNudgeTimer = Timer(const Duration(minutes: 2), () {
          unawaited(_fireRomanticNudge(gen, step: 2));
        });
      }
    } catch (e) {
      debugPrint('[communicate] romantic nudge: $e');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  /// Keeps the latest message pinned to the bottom (list uses [reverse: true]).
  void _scrollBottom({bool instant = false}) {
    void go([int attempt = 0]) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (!mounted) return;
        if (!_scroll.hasClients) {
          if (attempt < 12) go(attempt + 1);
          return;
        }
        // reverse: true → offset 0 is the newest messages (visual bottom).
        final target = _scroll.position.minScrollExtent;
        if (instant || attempt == 0) {
          _scroll.jumpTo(target);
        } else {
          _scroll.animateTo(target, duration: const Duration(milliseconds: 220), curve: Curves.easeOut);
        }
        // Retry a few frames — images / bubbles can change extent after first paint.
        if (attempt < 6) {
          final remaining = (_scroll.position.pixels - target).abs();
          if (remaining > 2) go(attempt + 1);
          else if (attempt < 3) go(attempt + 1); // one/two more frames for late layout
        }
      });
    }

    go();
  }

  Widget _chatImageBubble(String b64) {
    try {
      final bytes = base64Decode(b64);
      if (bytes.isEmpty) throw StateError('empty');
      return GestureDetector(
        onTap: () {
          unawaited(showNgmyAdvisorPortraitFullscreen(
            context,
            bytes: bytes,
            name: widget.profile.name,
          ));
        },
        child: Image.memory(
          bytes,
          width: 220,
          fit: BoxFit.contain,
          gaplessPlayback: true,
          filterQuality: FilterQuality.high,
          errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined, color: Colors.white54),
        ),
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
    final lastUser = _messages.reversed
        .where((m) => m['role'] == 'user')
        .map((m) => (m['text'] ?? '').toString())
        .cast<String>()
        .firstWhere((t) => t.trim().isNotEmpty, orElse: () => '');
    final wantsLong = ngmyUserWantsLongerAdvisorReply(lastUser);
    if (ngmyCommunicateRoleIsRomantic(widget.profile.role)) {
      if (wantsLong) {
        return 'Reply as ${widget.profile.name} only — they asked for MORE / detail / a fuller answer. '
            'Write a real paragraph (or two if needed) that opens up and explains / expresses / tells the story. '
            'Emojis: light — love emojis only if the moment is affectionate; otherwise few or none. '
            'No asterisks, no little stars. Match mood (normal vs freaky). Go long because they asked:';
      }
      return 'Reply as ${widget.profile.name} only — real phone TEXTING. '
          'HARD LENGTH RULE: 1 short sentence default (2 max). Never 2 paragraphs for a casual hello. '
          'If they wrote a short hello, reply short — do NOT pile miss-you + sleep questions + day plans into one message. '
          'EMOJIS: mostly none on normal chat; love emojis ❤️💕 on love/miss-you/romantic lines; laugh/smile only if funny. '
          'No emoji spam. No asterisks, no little stars (★ ✨ *actions*). '
          'Match THIS message mood: normal → normal (no sexual talk); freaky → freaky with real body words. '
          'Follow subject changes smoothly. One short text bubble:';
    }
    if (wantsLong) {
      return 'Reply as ${widget.profile.name} — they want more detail. Give a clear fuller answer (a paragraph is fine). '
          'Emojis sparingly. No asterisks or little stars:';
    }
    return 'Reply as ${widget.profile.name} only — natural human texting, short (1–2 sentences), '
        'emojis only when they fit the moment (usually none), no asterisks or little stars, not overly eager:';
  }

  String _cleanAdvisorReply(String? raw) {
    final t = (raw ?? '').trim();
    if (t.isEmpty) return '';
    var cleaned = ngmySanitizeAdvisorChatReply(t);
    // Soft clamp runaway multi-paragraph text for romantic partners — unless they asked for more.
    if (ngmyCommunicateRoleIsRomantic(widget.profile.role)) {
      final lastUser = _messages.reversed
          .where((m) => m['role'] == 'user')
          .map((m) => (m['text'] ?? '').toString())
          .cast<String>()
          .firstWhere((x) => x.trim().isNotEmpty, orElse: () => '');
      if (!ngmyUserWantsLongerAdvisorReply(lastUser)) {
        cleaned = _trimOverlongTextReply(cleaned);
      }
    }
    return cleaned;
  }

  /// Keep casual romantic replies to ~1–2 sentences when the model dumps paragraphs.
  String _trimOverlongTextReply(String text) {
    final t = text.trim();
    if (t.isEmpty) return t;
    final paras = t.split(RegExp(r'\n\s*\n')).map((e) => e.trim()).where((e) => e.isNotEmpty).toList();
    // Prefer first paragraph only if they wrote multiple.
    var focus = paras.isNotEmpty ? paras.first : t;
    focus = focus.replaceAll(RegExp(r'\s*\n\s*'), ' ').trim();
    // Split into sentences; keep at most 2 for very long replies.
    final sentences = focus
        .split(RegExp(r'(?<=[.!?…])\s+'))
        .map((e) => e.trim())
        .where((e) => e.isNotEmpty)
        .toList();
    if (sentences.length <= 2 && focus.length <= 220) return focus;
    if (sentences.isEmpty) {
      return focus.length <= 180 ? focus : '${focus.substring(0, 177).trim()}…';
    }
    final kept = sentences.take(2).join(' ');
    return kept.length <= 260 ? kept : '${kept.substring(0, 257).trim()}…';
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

    _cancelRomanticNudge();
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
    unawaited(NgmyCommunicatePromiseStore.syncFromUserText(_email, widget.profile.id, text));
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
      await NgmyCommunicateRelationshipStore.syncFromMemory(
        widget.profile.id,
        _email,
        mem,
        allowDating: ngmyCommunicateAdvisorCanDateChatter(
          role: widget.profile.role,
          name: widget.profile.name,
          chatterIsBoss: _isBoss,
          id: widget.profile.id,
        ),
      );
      // Datable chats that already feel like dating unlock pics for that boyfriend/girlfriend.
      final canDateThisChatter = ngmyCommunicateAdvisorCanDateChatter(
        role: widget.profile.role,
        name: widget.profile.name,
        chatterIsBoss: _isBoss,
        id: widget.profile.id,
      );
      final allowsPartnerPhotos = ngmyCommunicateAdvisorAllowsPartnerPhotos(
        role: widget.profile.role,
        name: widget.profile.name,
        id: widget.profile.id,
      );
      if (canDateThisChatter && ngmyCommunicateMemoryLooksLikeDating(mem)) {
        final existing = await NgmyCommunicateRelationshipStore.loadPartner(widget.profile.id);
        final takenByOther = existing != null &&
            (existing['email'] ?? '').toLowerCase().trim().isNotEmpty &&
            (existing['email'] ?? '').toLowerCase().trim() != _email.toLowerCase().trim();
        if (!takenByOther) {
          await NgmyCommunicateRelationshipStore.setPartner(
            widget.profile.id,
            email: _email,
            status: 'exclusive',
          );
        }
      }
      // Pic request + dating pet names in this thread → stamp exclusive so a real photo can send.
      if (canDateThisChatter &&
          text.isNotEmpty &&
          ngmyUserRequestedChatImage(text) &&
          RegExp(r'\b(babe|baby|my love|handsome|miss you|boyfriend|girlfriend)\b', caseSensitive: false)
              .hasMatch('$text ${mem.map((m) => m['text'] ?? '').join(' ')}')) {
        final existing = await NgmyCommunicateRelationshipStore.loadPartner(widget.profile.id);
        final takenByOther = existing != null &&
            (existing['email'] ?? '').toLowerCase().trim().isNotEmpty &&
            (existing['email'] ?? '').toLowerCase().trim() != _email.toLowerCase().trim();
        if (!takenByOther) {
          await NgmyCommunicateRelationshipStore.setPartner(
            widget.profile.id,
            email: _email,
            status: 'exclusive',
          );
        }
      }
      final partner = await NgmyCommunicateRelationshipStore.loadPartner(widget.profile.id);
      final isExclusivePartner = ngmyCommunicateIsExclusivePartner(partner, _email);
      final requestedImage = text.isNotEmpty && ngmyUserRequestedChatImage(text);
      final datingVibeNow = ngmyCommunicateMemoryLooksLikeDating(mem) ||
          RegExp(r'\b(babe|baby|my love|handsome|miss you|boyfriend|girlfriend)\b', caseSensitive: false)
              .hasMatch('$text ${mem.map((m) => m['text'] ?? '').join(' ')}');
      // Prefer exclusive stamp; if store lags, dating vibe + datable role still unlocks pics.
      final canSendPartnerImage = allowsPartnerPhotos &&
          canDateThisChatter &&
          (isExclusivePartner || datingVibeNow);
      // Partner pics do NOT require the user to upload a photo first — camera is only for homework roles.
      final wantsImage = requestedImage && canSendPartnerImage;
      final userSentPhoto = imageB64 != null && _allowsPhotoUpload;

      Future<String?> generatePartnerPhotoB64() async {
        Uint8List? portrait;
        try {
          portrait = await ngmyAdvisorLoadPhotorealPortraitBytes(
                id: widget.profile.id,
                gender: widget.profile.gender,
                role: widget.profile.role,
                name: widget.profile.name,
              )
              .timeout(const Duration(seconds: 4), onTimeout: () => null) ??
              await ngmyAdvisorPortraitBytesAsync(
                id: widget.profile.id,
                gender: widget.profile.gender,
                role: widget.profile.role,
                name: widget.profile.name,
              ).timeout(const Duration(seconds: 4), onTimeout: () => Uint8List(0));
          if (portrait != null && portrait.isEmpty) portrait = null;

          final threadMsgs = [...mem, ..._messages];
          final sentPhotos = ngmyPartnerPhotosSentB64Set(threadMsgs);
          final portraitB64 = portrait != null && portrait.isNotEmpty ? base64Encode(portrait) : null;
          final photoCount = ngmyPartnerPhotosSentCount(threadMsgs);
          final look = ngmyAdvisorFaceIdentityForImageGen(
            name: widget.profile.name,
            gender: widget.profile.gender,
            bio: widget.profile.bio,
          );
          final scene = ngmyPartnerImageSceneFromChat(latest: text, memory: mem);
          final recent = mem.reversed
              .take(8)
              .map((m) => (m['text'] ?? '').toString())
              .where((t) => t.trim().isNotEmpty)
              .join(' | ');
          final wantsSelfieOnly = ngmyChatImageRequestWantsSelfie(scene);
          final explicitAsk = ngmyPartnerImageRequestIsExplicit(scene);
          final mime = portrait != null &&
                  portrait.length >= 3 &&
                  portrait[0] == 0xFF &&
                  portrait[1] == 0xD8
              ? 'image/jpeg'
              : 'image/png';

          bool photoAlreadyUsed(String b64) =>
              sentPhotos.contains(b64) || (portraitB64 != null && b64 == portraitB64);

          Future<Uint8List?> tryGenerate({
            required String promptText,
            required int varietySeed,
            required bool adultFirst,
            required bool geminiFirst,
            Duration budget = const Duration(seconds: 22),
            bool blockPortraitOnly = true,
          }) async {
            final imgResult = await ngmyGenerateRomanticChatImage(
              promptText,
              creds: creds,
              lookalikePortraitBytes: portrait,
              lookalikeMime: mime,
              preferSceneVariety: !wantsSelfieOnly && !explicitAsk,
              varietySeed: varietySeed,
              lookalikeFirst: geminiFirst && portrait != null,
              prioritizeAdult: adultFirst,
              budget: budget,
            ).timeout(
              budget + const Duration(seconds: 3),
              onTimeout: () => (bytes: null, error: 'Photo timed out.'),
            );
            final bytes = imgResult.bytes;
            if (bytes == null || bytes.isEmpty) return null;
            if (blockPortraitOnly && portrait != null && ngmyPartnerImageBytesSame(bytes, portrait)) {
              return null;
            }
            final b64 = base64Encode(bytes);
            if (blockPortraitOnly && photoAlreadyUsed(b64)) return null;
            return bytes;
          }

          final primary = ngmyPartnerChatImagePrompt(
            look: look,
            scene: scene,
            recent: recent,
            gender: widget.profile.gender,
            memory: mem,
            photoCount: photoCount,
          );
          final shortPrompt = ngmyPartnerChatImagePromptShort(
            look: look,
            scene: scene,
            gender: widget.profile.gender,
            photoCount: photoCount,
          );
          final seedBase = photoCount + DateTime.now().millisecond;

          // Pass 1: Pollinations-first (fast) with full scene prompt.
          var bytes = await tryGenerate(
            promptText: primary,
            varietySeed: seedBase,
            adultFirst: explicitAsk,
            geminiFirst: false,
            budget: const Duration(seconds: 14),
          );
          // Pass 2: shorter prompt — less likely to time out on mobile.
          bytes ??= await tryGenerate(
            promptText: shortPrompt,
            varietySeed: seedBase + 41,
            adultFirst: explicitAsk,
            geminiFirst: false,
            budget: const Duration(seconds: 12),
          );
          // Pass 3: Gemini lookalike for face match.
          if (bytes == null && portrait != null) {
            bytes = await tryGenerate(
              promptText: shortPrompt,
              varietySeed: seedBase + 83,
              adultFirst: false,
              geminiFirst: true,
              budget: const Duration(seconds: 14),
            );
          }
          // Pass 4: guaranteed SFW sexy full-body — always deliver a photo.
          bytes ??= await tryGenerate(
            promptText: 'Photorealistic full-body standing photo of $look, '
                '${ngmyPartnerImageVarietyOutfitHint(photoCount: photoCount + 5, gender: widget.profile.gender)}, '
                'natural light, new pose, no text',
            varietySeed: seedBase + 127,
            adultFirst: false,
            geminiFirst: false,
            budget: const Duration(seconds: 10),
            blockPortraitOnly: true,
          );

          if (bytes != null && bytes.isNotEmpty) return base64Encode(bytes);
          return null;
        } catch (e) {
          debugPrint('[communicate] partner photo: $e');
          return null;
        }
      }

      if (userSentPhoto) {
        final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
        final visionHint = _visionInstruction(text, hasPhoto: true);
        final extraCtx = await _advisorExtraContext(text, mem);
        final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isBoss, chatterDisplayName: _bossDisplayName, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
            '$extraCtx'
            '$visionHint'
            '${transcript.isNotEmpty ? '$transcript\n' : ''}'
            '${_userPhotoCaption(text)}'
            '${_isTextCoach ? _replyStyleSuffix() : 'Reply as ${widget.profile.name} — helpful teacher energy, plain language:'}';
        final images = <NgmyAiImagePart>[
          (mimeType: imageMime, data: imageB64),
        ];
        final result = await ngmyAiGenerateWithRetry(creds, prompt, images: images);
        final cleaned = _cleanAdvisorReply(result.text);
        final reply = cleaned.isNotEmpty
            ? cleaned
            : ngmyCommunicateAiFailureMessage(apiKey: apiKey, lastError: result.error);
        if (!mounted) return;
        setState(() => _messages.add({'role': 'ai', 'text': reply}));
        await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply);
      } else if (requestedImage && !canDateThisChatter) {
        final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
        final extraCtx = await _advisorExtraContext(text, mem);
        final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isBoss, chatterDisplayName: _bossDisplayName, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
            '$extraCtx'
            '${transcript.isNotEmpty ? '$transcript\n' : ''}'
            'They asked for a personal picture/selfie. You do NOT date this person and you do NOT send personal romantic photos. '
            'Refuse politely and stay in your professional / wisdom role.\n'
            'They just texted: $text\n'
            '${_replyStyleSuffix()}';
        final result = await ngmyAiGenerateWithRetry(creds, prompt);
        final cleaned = _cleanAdvisorReply(result.text);
        var reply = cleaned.isNotEmpty
            ? cleaned
            : 'I keep this professional — I don\'t send personal pictures.';
        if (ngmyAdvisorReplyFakesSendingPhoto(reply)) {
          reply = 'I keep this professional — I don\'t send personal pictures.';
        }
        if (!mounted) return;
        setState(() => _messages.add({'role': 'ai', 'text': reply}));
        await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply);
      } else if (requestedImage && allowsPartnerPhotos && !isExclusivePartner && !datingVibeNow) {
        // Datable advisors never send pics except to their exclusive partner.
        final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
        final extraCtx = await _advisorExtraContext(text, mem);
        final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isBoss, chatterDisplayName: _bossDisplayName, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
            '$extraCtx'
            '${transcript.isNotEmpty ? '$transcript\n' : ''}'
            'They asked for a picture/selfie. You are NOT in a relationship with this person (or not exclusive yet). '
            'Do NOT send a photo. Reply naturally like a real person — teasing, firm, or flirty as your character, '
            'but make clear pics are only for your boyfriend/girlfriend once you are officially together.\n'
            'They just texted: $text\n'
            '${_replyStyleSuffix()}';
        final result = await ngmyAiGenerateWithRetry(creds, prompt);
        final cleaned = _cleanAdvisorReply(result.text);
        var reply = cleaned.isNotEmpty
            ? cleaned
            : 'I don\'t send pics like that unless we\'re official 😌';
        if (ngmyAdvisorReplyFakesSendingPhoto(reply)) {
          reply = 'I don\'t send pics like that unless we\'re official 😌';
        }
        if (!mounted) return;
        setState(() => _messages.add({'role': 'ai', 'text': reply}));
        await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply);
      } else if (wantsImage) {
        String? b64;
        try {
          b64 = await generatePartnerPhotoB64().timeout(
            const Duration(seconds: 55),
            onTimeout: () => null,
          );
        } catch (e) {
          debugPrint('[communicate] wantsImage: $e');
          b64 = null;
        }
        if (b64 != null && b64.isNotEmpty) {
          final photo = b64;
          if (!mounted) return;
          setState(() => _messages.add({'role': 'ai', 'text': '', 'imageB64': photo}));
          await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: '', imageB64: photo);
        } else {
          // Last-resort: one ultra-short pollinations call — still send a real image.
          try {
            final look = ngmyAdvisorFaceIdentityForImageGen(
              name: widget.profile.name,
              gender: widget.profile.gender,
              bio: widget.profile.bio,
            );
            final emergency = await ngmyGenerateRomanticChatImage(
              'Photorealistic full-body photo of $look, casual outfit, natural smile, daylight, no text',
              creds: creds,
              tryLookalike: false,
              budget: const Duration(seconds: 12),
              fast: true,
            ).timeout(const Duration(seconds: 14));
            final emergencyB64 = emergency.bytes != null && emergency.bytes!.isNotEmpty
                ? base64Encode(emergency.bytes!)
                : null;
            if (emergencyB64 != null && emergencyB64.isNotEmpty) {
              if (!mounted) return;
              setState(() => _messages.add({'role': 'ai', 'text': '', 'imageB64': emergencyB64}));
              await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: '', imageB64: emergencyB64);
            } else if (mounted) {
              setState(() => _messages.add({'role': 'ai', 'text': '📸💕'}));
              await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: '📸💕');
            }
          } catch (e) {
            debugPrint('[communicate] emergency photo: $e');
            if (mounted) {
              setState(() => _messages.add({'role': 'ai', 'text': '📸💕'}));
              await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: '📸💕');
            }
          }
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
        final prompt = '${widget.profile.systemPrompt(mem, chatterEmail: _email, chatterIsBoss: _isBoss, chatterDisplayName: _bossDisplayName, exclusivePartner: partner, translatorNativeLang: _translatorNativeLang, translatorLearningLang: _translatorLearningLang)}\n'
            '$homeworkCtx'
            '$extraCtx'
            '$visionHint'
            '${transcript.isNotEmpty ? '$transcript\n' : ''}'
            'They just texted: $text\n'
            '${_replyStyleSuffix()}';
        final result = recentPhotos.isNotEmpty
            ? await ngmyAiGenerateWithRetry(creds, prompt, images: recentPhotos)
            : await ngmyAiGenerateWithRetry(creds, prompt);
        var cleaned = _cleanAdvisorReply(result.text);
        // If the model faked sending a photo while we can actually send one, send a real image.
        if (canSendPartnerImage && (requestedImage || ngmyAdvisorReplyFakesSendingPhoto(cleaned))) {
          final b64Photo = await generatePartnerPhotoB64().timeout(
            const Duration(seconds: 55),
            onTimeout: () => null,
          );
          if (b64Photo != null && b64Photo.isNotEmpty) {
            if (!mounted) return;
            setState(() => _messages.add({'role': 'ai', 'text': '', 'imageB64': b64Photo}));
            await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: '', imageB64: b64Photo);
            return;
          }
          cleaned = '💕';
        } else if (ngmyAdvisorReplyFakesSendingPhoto(cleaned)) {
          cleaned = canSendPartnerImage
              ? '💕'
              : 'I don\'t send pics like that unless we\'re official 😌';
        }
        final reply = cleaned.isNotEmpty
            ? cleaned
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
        _scheduleRomanticNudgeIfNeeded();
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
    final topPad = MediaQuery.paddingOf(context).top + 96;
    // Leave room above the glass typing bar so the latest message isn’t covered.
    final bottomClearance = MediaQuery.paddingOf(context).bottom + (_isDebater ? 220 : 118);
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
              reverse: true,
              // Top padding clears the header overlay. Bottom spacer (index 0) clears
              // the typing bar — messages can still scroll up behind both glass bars.
              padding: EdgeInsets.fromLTRB(16, topPad, 16, 8),
              itemCount: _messages.length + (_busy ? 1 : 0) + 1,
              itemBuilder: (context, i) {
                // reverse: true → index 0 is the visual bottom.
                if (i == 0) {
                  return SizedBox(height: bottomClearance);
                }
                final slot = i - 1;
                if (_busy && slot == 0) {
                  return Padding(
                    padding: const EdgeInsets.fromLTRB(12, 0, 12, 8),
                    child: Row(
                      children: [
                        Text('${ngmyAdvisorFirstName(widget.profile.name)} is typing', style: TextStyle(color: mutedText, fontStyle: FontStyle.italic, fontSize: 12)),
                        const SizedBox(width: 6),
                        SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2, color: accent)),
                      ],
                    ),
                  );
                }
                final msgIndex = _messages.length - 1 - (_busy ? slot - 1 : slot);
                if (msgIndex < 0 || msgIndex >= _messages.length) {
                  return const SizedBox.shrink();
                }
                final m = _messages[msgIndex];
                final user = m['role'] == 'user';
                return Align(
                  alignment: user ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.only(top: 12),
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
                  borderRadius: BorderRadius.circular(22),
                  fillAlpha: 0.06,
                  blur: 12,
                  child: Stack(
                    children: [
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 8),
                        child: Row(
                          children: [
                            IconButton(icon: Icon(Icons.arrow_back_rounded, color: panelFgMuted, size: 22), onPressed: widget.onBack),
                            NgmyCommunicateAvatar(
                              profile: widget.profile,
                              size: 44,
                              glow: true,
                              openFullscreenOnTap: true,
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(widget.profile.name, style: TextStyle(color: panelFg, fontWeight: FontWeight.w900, fontSize: 16)),
                                  const SizedBox(height: 3),
                                  GestureDetector(
                                    onTap: () => showNgmyAdvisorBadgeCard(context, widget.profile),
                                    child: _roleBadgeForProfile(widget.profile, small: true),
                                  ),
                                  const SizedBox(height: 2),
                                  Text(
                                    _isAdmin ? 'Unlimited chat' : passLabel,
                                    style: TextStyle(color: panelFgMuted, fontSize: 10),
                                  ),
                                ],
                              ),
                            ),
                            IconButton(
                              tooltip: 'NGMY Advisors badge',
                              onPressed: () => showNgmyAdvisorBadgeCard(context, widget.profile),
                              icon: Icon(Icons.badge_rounded, color: const Color(0xFFE11D48), size: 22),
                            ),
                            if (_isTranslator)
                              IconButton(
                                tooltip: 'Change languages',
                                onPressed: _pickTranslatorLanguages,
                                icon: const Icon(Icons.translate_rounded, color: Color(0xFF14B8A6), size: 22),
                              )
                            else if (ngmyCommunicateRoleIsRomantic(widget.profile.role))
                              const Padding(
                                padding: EdgeInsets.only(right: 6),
                                child: Icon(Icons.favorite, color: Color(0xFFEC4899), size: 20),
                              ),
                          ],
                        ),
                      ),
                      if (widget.profile.cornerRoleBadgeLabel(isAdmin: _isAdmin) != null)
                        Positioned(
                          top: 2,
                          right: 4,
                          child: _classicCornerRoleBadge(
                            widget.profile.cornerRoleBadgeLabel(isAdmin: _isAdmin)!,
                            small: true,
                          ),
                        ),
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
