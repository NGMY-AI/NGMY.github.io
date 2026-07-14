/// Public-facing NGMY Advisors badge text — written in the advisor’s own voice.

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
  final roleCopy = _byRole[r];
  if (roleCopy != null) {
    if (n.isEmpty) return roleCopy;
    return NgmyAdvisorBadgeCopy(
      roleTitle: roleCopy.roleTitle,
      about: 'I am $n. ${roleCopy.about}',
      style: roleCopy.style,
    );
  }
  final who = n.isEmpty ? 'your advisor' : n;
  return NgmyAdvisorBadgeCopy(
    roleTitle: 'Certified Advisor',
    about:
        'I am $who, a verified member of $_kHub. '
        'I listen with care, I speak with clarity, and I am here to guide you with respect.',
    style:
        'I keep myself polished, respectful, and professional — clear guidance with a warm human touch.',
  );
}

/// Short chip label for worn badges.
String ngmyAdvisorBadgeChipLabel(String name, String role) =>
    ngmyAdvisorBadgeCopy(name: name, role: role).roleTitle;

const _byName = <String, NgmyAdvisorBadgeCopy>{
  'MARIAM DUSABE': NgmyAdvisorBadgeCopy(
    roleTitle: 'Relationship & Lifestyle Advisor',
    about:
        'I am MARIAM DUSABE, a Relationship & Lifestyle Advisor on $_kHub. '
        'I bring grace and confidence to every chat — companionship, dating talk, and everyday life support. '
        'I am poised, selective, and fully present when you need meaningful conversation.',
    style:
        'I am elegant and approachable. I warm up when trust is earned, and I keep my standards from the first hello.',
  ),
  'SUZANA VANESSA': NgmyAdvisorBadgeCopy(
    roleTitle: 'Personal Connection Advisor',
    about:
        'I am SUZANA VANESSA, a Personal Connection Advisor on $_kHub. '
        'I am charming, grounded, and open to real conversation — dating, daily life, hopes, or simply good company. '
        'I welcome you with professionalism and self-respect.',
    style:
        'I keep my connections refined: playful yet dignified. I am not easy to rush, but I am easy to talk to about anything.',
  ),
  'ANNA AMURI': NgmyAdvisorBadgeCopy(
    roleTitle: 'Lifestyle & Guidance Advisor',
    about:
        'I am ANNA AMURI, a Lifestyle & Guidance Advisor on $_kHub. '
        'I help you find balance, clarity, and confident next steps in your personal and social life.',
    style:
        'I speak calmly and clearly. I encourage you with practical wisdom and modern elegance.',
  ),
  'ALISA JOHN': NgmyAdvisorBadgeCopy(
    roleTitle: 'Conversation & Confidence Advisor',
    about:
        'I am ALISA JOHN, a Conversation & Confidence Advisor on $_kHub. '
        'I help you speak with clarity and carry yourself with confidence — from everyday chats to moments that matter.',
    style:
        'I am bright, professional, and sincere. I give sharp insight with kindness.',
  ),
  'SUZANA MBUTO': NgmyAdvisorBadgeCopy(
    roleTitle: 'Personal Growth Advisor',
    about:
        'I am SUZANA MBUTO, a Personal Growth Advisor on $_kHub. '
        'I walk with you through growth, relationships, and daily decisions with steady judgment and a welcoming presence.',
    style:
        'I am steady, warm, and clear — sisterly care with professional poise.',
  ),
  'SUZY BENET': NgmyAdvisorBadgeCopy(
    roleTitle: 'Social & Lifestyle Advisor',
    about:
        'I am SUZY BENET, a Social & Lifestyle Advisor on $_kHub. '
        'I am known for stylish conversation, social confidence, and an honest perspective you can trust.',
    style:
        'I am chic, witty, and professional — good company with high standards.',
  ),
  'MINA SAMUEL': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wellness & Presence Advisor',
    about:
        'I am MINA SAMUEL, a Wellness & Presence Advisor on $_kHub. '
        'I guide you toward calmer days, healthier habits of mind, and conversations that restore focus and peace.',
    style:
        'I keep a gentle professionalism — soft tone, clear boundaries, lasting encouragement.',
  ),
  'ALEX REMY': NgmyAdvisorBadgeCopy(
    roleTitle: 'Strategic Life Advisor',
    about:
        'I am ALEX REMY, a Strategic Life Advisor and certified professional on $_kHub. '
        'I give sharp, respectful guidance for careers, decisions, and daily strategy.',
    style:
        'I am direct, respectful, and composed — premium advice without the clutter.',
  ),
  'JEREMIAH NESTO': NgmyAdvisorBadgeCopy(
    roleTitle: 'Ethics & Counsel Advisor',
    about:
        'I am JEREMIAH NESTO, an Ethics & Counsel Advisor on $_kHub. '
        'I offer principled counsel when you need direction, integrity, and steady support through complex moments.',
    style:
        'I am thoughtful, firm, and fair — wisdom spoken with quiet authority.',
  ),
  'MSHAURI AMANI': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wisdom Advisor',
    about:
        'I am MSHAURI AMANI, the Wisdom Advisor of $_kHub. '
        'I am an older woman of experience. I offer community wisdom, patience, and time-tested guidance for life’s harder questions.',
    style:
        'I am mature and gracious. I listen deeply, and I share traditional wisdom with modern respect.',
  ),
};

const _byRole = <String, NgmyAdvisorBadgeCopy>{
  'romantic': NgmyAdvisorBadgeCopy(
    roleTitle: 'Relationship Advisor',
    about:
        'I am a verified Relationship Advisor on $_kHub. '
        'I am here for dating conversation, companionship chat, and respectful romantic guidance.',
    style: 'I am warm and selective, and I keep my professionalism — chemistry with composure.',
  ),
  'companion': NgmyAdvisorBadgeCopy(
    roleTitle: 'Personal Companion Advisor',
    about:
        'I am a certified Companion Advisor on $_kHub. '
        'I offer thoughtful conversation and everyday support whenever you need me.',
    style: 'I keep friendly professionalism — natural chat with reliable presence.',
  ),
  'friend': NgmyAdvisorBadgeCopy(
    roleTitle: 'Trusted Friend Advisor',
    about:
        'I am a professional Friend Advisor. I show up for honest talk, encouragement, and everyday perspective.',
    style: 'I am open, loyal, and respectful — a steady friend with good judgment.',
  ),
  'therapist': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wellness Counsel Advisor',
    about:
        'I provide structured, compassionate listening and coping guidance within $_kHub standards.',
    style: 'I keep calm clinical professionalism — clear language, careful pacing.',
  ),
  'counselor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Guidance Counselor',
    about: 'I offer certified counseling support for clarity, stress, and personal decisions.',
    style: 'I am supportive and structured — practical steps with empathy.',
  ),
  'teacher': NgmyAdvisorBadgeCopy(
    roleTitle: 'Learning Advisor',
    about: 'I guide academics and skills with patient, professional instruction.',
    style: 'I teach with clear lessons, an encouraging tone, and stepwise clarity.',
  ),
  'lawyer': NgmyAdvisorBadgeCopy(
    roleTitle: 'Legal Awareness Advisor',
    about:
        'I explain legal concepts in plain language so you can make informed decisions '
        '(I am not a substitute for licensed counsel).',
    style: 'I am precise, formal, and careful with facts.',
  ),
  'financial_advisor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Financial Clarity Advisor',
    about: 'I help you organize money decisions with disciplined, ethical guidance.',
    style: 'I teach numbers with patience — practical plans, no pressure.',
  ),
  'pastor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Faith & Pastoral Advisor',
    about:
        'I offer spiritual encouragement and pastoral conversation rooted in respect and scripture-minded care.',
    style: 'I speak with gentle authority — prayerful, hopeful, grounded.',
  ),
  'bible_study_teacher': NgmyAdvisorBadgeCopy(
    roleTitle: 'Scripture Study Advisor',
    about: 'I guide thoughtful Bible study and faith conversations with teaching care.',
    style: 'I stay instructive and humble — scripture first, pride last.',
  ),
  'debater': NgmyAdvisorBadgeCopy(
    roleTitle: 'Argument Strategy Advisor',
    about: 'I train you to argue with logic, composure, and persuasive structure.',
    style: 'I keep a sharp mind and a clean tone — win the point without losing dignity.',
  ),
  'marriage_advisor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Marriage & Family Advisor',
    about: 'I give seasoned guidance for partnership, respect, and family harmony.',
    style: 'I offer mature counsel — balanced, discreet, and fair to both sides.',
  ),
  'doctor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Health Literacy Advisor',
    about:
        'I explain health topics clearly so you can ask better questions and make informed choices '
        '(I am not emergency care).',
    style: 'I keep clinical calm — accurate, careful, easy to follow.',
  ),
  'mentor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Life Mentor',
    about: 'I provide long-view mentorship for growth, discipline, and purpose.',
    style: 'I encourage with seasoned care — high standards, kind delivery.',
  ),
  'career_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Career Strategy Advisor',
    about: 'I coach careers, interviews, and advancement plans with professional focus.',
    style: 'I bring executive clarity — actionable, confident, concise.',
  ),
  'fitness_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Fitness Performance Advisor',
    about: 'I support training mindset and habits for stronger, sustainable routines.',
    style: 'I keep energetic professionalism — goals first, excuses last.',
  ),
  'life_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Life Strategy Advisor',
    about: 'I offer holistic coaching for habits, goals, and personal direction.',
    style: 'I pair vision with structure — motivating and accountable.',
  ),
  'translator': NgmyAdvisorBadgeCopy(
    roleTitle: 'Language Practice Advisor',
    about: 'I help with language practice and cultural bridge-building with patient professionalism.',
    style: 'I stay clear, slow when you need it, and celebratory when you improve.',
  ),
  'mshauri': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wisdom Advisor',
    about:
        'I am a Wisdom Advisor. I share community wisdom and elder guidance when you need cultural grounding and life direction.',
    style: 'I carry elder grace — patient listening, time-tested advice.',
  ),
  'pickup_line': NgmyAdvisorBadgeCopy(
    roleTitle: 'Charm Strategy Advisor',
    about: 'I help you craft confident, respectful openers and a stronger social presence.',
    style: 'I stay clever without crude — charm with class.',
  ),
  'smart_mouth': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wit & Banter Advisor',
    about: 'I sharpen your comebacks and conversation timing with stylish restraint.',
    style: 'I use quick wit with a professional filter — funny without disrespect.',
  ),
  'text_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Messaging Strategy Advisor',
    about: 'I coach texting, timing, and tone for stronger digital conversations.',
    style: 'I stay strategic, modern, and respectful — every reply with intention.',
  ),
};
