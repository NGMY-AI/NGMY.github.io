/// Public-facing NGMY Advisors badge text (never raw AI personality prompts).

const String _kHub = 'NGMY Advisors';

class NgmyAdvisorBadgeCopy {
  const NgmyAdvisorBadgeCopy({
    required this.roleTitle,
    required this.about,
    required this.style,
  });

  final String roleTitle;
  final String about;
  final String style;
}

NgmyAdvisorBadgeCopy ngmyAdvisorBadgeCopy({
  required String name,
  required String role,
}) {
  final n = name.trim().toUpperCase();
  final byName = _byName[n];
  if (byName != null) return byName;

  final r = role.trim().toLowerCase().replaceAll(' ', '_');
  return _byRole[r] ??
      NgmyAdvisorBadgeCopy(
        roleTitle: 'Certified Advisor',
        about:
            '${n.isEmpty ? 'This advisor' : n} is a verified member of $_kHub, '
            'trusted to listen with care and guide with clarity.',
        style:
            'Polished, respectful, and professional — clear guidance with a warm human touch.',
      );
}

/// Short chip label for worn badges.
String ngmyAdvisorBadgeChipLabel(String name, String role) =>
    ngmyAdvisorBadgeCopy(name: name, role: role).roleTitle;

const _byName = <String, NgmyAdvisorBadgeCopy>{
  'MARIAM DUSABE': NgmyAdvisorBadgeCopy(
    roleTitle: 'Relationship & Lifestyle Advisor',
    about:
        'MARIAM DUSABE represents $_kHub with grace and confidence. '
        'She offers thoughtful companionship, dating conversation, and everyday life support — '
        'poised, selective, and fully present for meaningful talk.',
    style:
        'Elegant and approachable. Warm when trust is earned; composed standards from the first hello.',
  ),
  'SUZANA VANESSA': NgmyAdvisorBadgeCopy(
    roleTitle: 'Personal Connection Advisor',
    about:
        'SUZANA VANESSA is a rising voice on $_kHub — charming, grounded, and open to real conversation. '
        'Members may talk through dating, daily life, hopes, or simply good company. '
        'She welcomes dialogue with professionalism and self-respect.',
    style:
        'Refined connection: playful yet dignified, hard to rush, easy to talk to about anything.',
  ),
  'ANNA AMURI': NgmyAdvisorBadgeCopy(
    roleTitle: 'Lifestyle & Guidance Advisor',
    about:
        'ANNA AMURI brings polished counsel to $_kHub members seeking balance, '
        'clarity, and confident next steps in personal and social life.',
    style: 'Calm, articulate, and encouraging — practical wisdom with modern elegance.',
  ),
  'ALISA JOHN': NgmyAdvisorBadgeCopy(
    roleTitle: 'Conversation & Confidence Advisor',
    about:
        'ALISA JOHN helps members speak with clarity and carry themselves with confidence — '
        'from everyday chats to moments that matter.',
    style: 'Bright, professional, and sincere — sharp insight delivered with kindness.',
  ),
  'SUZANA MBUTO': NgmyAdvisorBadgeCopy(
    roleTitle: 'Personal Growth Advisor',
    about:
        'SUZANA MBUTO supports members navigating growth, relationships, and daily decisions '
        'with steady judgment and a welcoming presence on $_kHub.',
    style: 'Steady, warm, and clear — mentorship with sisterly care and professional poise.',
  ),
  'SUZY BENET': NgmyAdvisorBadgeCopy(
    roleTitle: 'Social & Lifestyle Advisor',
    about:
        'SUZY BENET is a verified $_kHub advisor known for stylish conversation, '
        'social confidence, and honest perspective.',
    style: 'Chic, witty, and professional — good company with high standards.',
  ),
  'MINA SAMUEL': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wellness & Presence Advisor',
    about:
        'MINA SAMUEL guides members toward calmer days, healthier habits of mind, '
        'and conversations that restore focus and peace.',
    style: 'Gentle professionalism — soft tone, clear boundaries, lasting encouragement.',
  ),
  'ALEX REMY': NgmyAdvisorBadgeCopy(
    roleTitle: 'Strategic Life Advisor',
    about:
        'ALEX REMY provides sharp, respectful guidance for careers, decisions, and daily strategy '
        'as a certified $_kHub professional.',
    style: 'Direct, respectful, and composed — premium advice without the clutter.',
  ),
  'JEREMIAH NESTO': NgmyAdvisorBadgeCopy(
    roleTitle: 'Ethics & Counsel Advisor',
    about:
        'JEREMIAH NESTO offers principled counsel for members seeking direction, integrity, '
        'and steady support through complex moments.',
    style: 'Thoughtful, firm, and fair — wisdom spoken with quiet authority.',
  ),
  'MSHAURI AMANI': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wisdom Advisor',
    about:
        'MSHAURI AMANI is the elder voice of $_kHub — an older woman of experience '
        'who offers community wisdom, patience, and time-tested guidance for life’s harder questions.',
    style:
        'Mature, gracious, and deeply listening — traditional wisdom delivered with modern respect.',
  ),
};

const _byRole = <String, NgmyAdvisorBadgeCopy>{
  'romantic': NgmyAdvisorBadgeCopy(
    roleTitle: 'Relationship Advisor',
    about:
        'A verified Relationship Advisor on $_kHub — available for dating conversation, '
        'companionship chat, and respectful romantic guidance.',
    style: 'Warm, selective, and professional — chemistry with composure.',
  ),
  'companion': NgmyAdvisorBadgeCopy(
    roleTitle: 'Personal Companion Advisor',
    about:
        'A certified Companion Advisor offering thoughtful conversation and everyday support '
        'for members of $_kHub.',
    style: 'Friendly professionalism — natural chat with reliable presence.',
  ),
  'friend': NgmyAdvisorBadgeCopy(
    roleTitle: 'Trusted Friend Advisor',
    about: 'A professional Friend Advisor for honest talk, encouragement, and everyday perspective.',
    style: 'Open, loyal, and respectful — a steady friend with good judgment.',
  ),
  'therapist': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wellness Counsel Advisor',
    about:
        'Provides structured, compassionate listening and coping guidance within $_kHub standards.',
    style: 'Calm clinical professionalism — clear language, careful pacing.',
  ),
  'counselor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Guidance Counselor',
    about: 'Certified counseling support for clarity, stress, and personal decisions.',
    style: 'Supportive and structured — practical steps with empathy.',
  ),
  'teacher': NgmyAdvisorBadgeCopy(
    roleTitle: 'Learning Advisor',
    about: 'Academic and skills guidance with patient, professional instruction.',
    style: 'Clear lessons, encouraging tone, and stepwise clarity.',
  ),
  'lawyer': NgmyAdvisorBadgeCopy(
    roleTitle: 'Legal Awareness Advisor',
    about: 'Explains legal concepts in plain language for informed decisions (not a substitute for licensed counsel).',
    style: 'Precise, formal, and careful with facts.',
  ),
  'financial_advisor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Financial Clarity Advisor',
    about: 'Helps members organize money decisions with disciplined, ethical guidance.',
    style: 'Numbers with patience — practical plans, no pressure.',
  ),
  'pastor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Faith & Pastoral Advisor',
    about: 'Spiritual encouragement and pastoral conversation rooted in respect and scripture-minded care.',
    style: 'Gentle authority — prayerful, hopeful, grounded.',
  ),
  'bible_study_teacher': NgmyAdvisorBadgeCopy(
    roleTitle: 'Scripture Study Advisor',
    about: 'Guides thoughtful Bible study and faith conversations with teaching care.',
    style: 'Instructive and humble — scripture first, pride last.',
  ),
  'debater': NgmyAdvisorBadgeCopy(
    roleTitle: 'Argument Strategy Advisor',
    about: 'Trains members to argue with logic, composure, and persuasive structure.',
    style: 'Sharp minds, clean tone — win the point without losing dignity.',
  ),
  'marriage_advisor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Marriage & Family Advisor',
    about: 'Seasoned guidance for partnership, respect, and family harmony.',
    style: 'Mature counsel — balanced, discreet, and fair to both sides.',
  ),
  'doctor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Health Literacy Advisor',
    about: 'Explains health topics clearly for better questions and informed choices (not emergency care).',
    style: 'Clinical calm — accurate, careful, easy to follow.',
  ),
  'mentor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Life Mentor',
    about: 'Long-view mentorship for growth, discipline, and purpose.',
    style: 'Seasoned encouragement — high standards, kind delivery.',
  ),
  'career_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Career Strategy Advisor',
    about: 'Professional coaching for careers, interviews, and advancement plans.',
    style: 'Executive clarity — actionable, confident, concise.',
  ),
  'fitness_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Fitness Performance Advisor',
    about: 'Training mindset and habit support for stronger, sustainable routines.',
    style: 'Energetic professionalism — goals first, excuses last.',
  ),
  'life_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Life Strategy Advisor',
    about: 'Holistic coaching for habits, goals, and personal direction.',
    style: 'Vision with structure — motivating and accountable.',
  ),
  'translator': NgmyAdvisorBadgeCopy(
    roleTitle: 'Language Practice Advisor',
    about: 'Language practice and cultural bridge-building with patient professionalism.',
    style: 'Clear, slow when needed, celebratory when you improve.',
  ),
  'mshauri': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wisdom Advisor',
    about: 'Community wisdom and elder guidance for members seeking cultural grounding and life direction.',
    style: 'Elder grace — patient listening, time-tested advice.',
  ),
  'pickup_line': NgmyAdvisorBadgeCopy(
    roleTitle: 'Charm Strategy Advisor',
    about: 'Helps members craft confident, respectful openers and better social presence.',
    style: 'Clever without crude — charm with class.',
  ),
  'smart_mouth': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wit & Banter Advisor',
    about: 'Sharpens comebacks and conversation timing with stylish restraint.',
    style: 'Quick wit, professional filter — funny without disrespect.',
  ),
  'text_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Messaging Strategy Advisor',
    about: 'Coaches texting, timing, and tone for stronger digital conversations.',
    style: 'Strategic, modern, and respectful — every reply with intention.',
  ),
};
