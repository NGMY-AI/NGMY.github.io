/// Public-facing NGMY Advisors badge text — short, professional, first person, unique per person.
/// No dating / relationship wording in About or Style.

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
      about: '${roleCopy.about} — $n, $_kHub.',
      style: roleCopy.style,
    );
  }
  final who = n.isEmpty ? 'Your counselor' : n;
  return NgmyAdvisorBadgeCopy(
    roleTitle: 'Certified Advisor',
    about: '$who — verified on $_kHub. Clear listening, steady guidance.',
    style: 'Measured tone. Professional warmth. No fluff.',
  );
}

String ngmyAdvisorBadgeChipLabel(String name, String role) =>
    ngmyAdvisorBadgeCopy(name: name, role: role).roleTitle;

const _byName = <String, NgmyAdvisorBadgeCopy>{
  'SUZANA VANESSA': NgmyAdvisorBadgeCopy(
    roleTitle: 'Personal Connection Advisor',
    about:
        'Charming, grounded, and verified on $_kHub. Daily quotes, content craft, and — for the owner — personal helper energy.',
    style: 'Playful dignity. Motivating quotes. Video ideas that hit.',
  ),
  'MARIAM DUSABE': NgmyAdvisorBadgeCopy(
    roleTitle: 'Lifestyle Advisor',
    about:
        'Grace under pressure on $_kHub. For the owner: first personal helper + content genius for Reels and clips.',
    style: 'Poised openings. Sharp video craft. Never rushed.',
  ),
  'ANNA AMURI': NgmyAdvisorBadgeCopy(
    roleTitle: 'Guidance Advisor',
    about: 'Balance and next-step clarity — that is what I bring to every $_kHub session.',
    style: 'Calm voice. Practical wisdom. Modern elegance.',
  ),
  'ISAIAH JOHN': NgmyAdvisorBadgeCopy(
    roleTitle: 'Bible Study Advisor',
    about: 'Scripture opened with pastoral authority — a seasoned Black pastor teaching with clarity and care on $_kHub.',
    style: 'Calm dignity. Faith-led. Clear and respectful.',
  ),
  // Legacy rename — Alisa John became Isaiah John (male pastor).
  'ALISA JOHN': NgmyAdvisorBadgeCopy(
    roleTitle: 'Bible Study Advisor',
    about: 'Scripture opened with pastoral authority — a seasoned Black pastor teaching with clarity and care on $_kHub.',
    style: 'Calm dignity. Faith-led. Clear and respectful.',
  ),
  'SUZANA MBUTO': NgmyAdvisorBadgeCopy(
    roleTitle: 'Growth Advisor',
    about: 'Steady judgment for personal growth and daily decisions on $_kHub.',
    style: 'Warm steadiness. Sisterly care. Professional finish.',
  ),
  'SUZY BENET': NgmyAdvisorBadgeCopy(
    roleTitle: 'Lifestyle Advisor',
    about: 'Stylish conversation and honest perspective — that is my $_kHub lane.',
    style: 'Chic wit. High standards. Clean delivery.',
  ),
  'MINA SAMUEL': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wellness Advisor',
    about: 'I restore focus and calm — healthier habits of mind, quieter days.',
    style: 'Gentle pace. Clear boundaries. Lasting encouragement.',
  ),
  'ALEX REMY': NgmyAdvisorBadgeCopy(
    roleTitle: 'Strategy Advisor',
    about: 'Sharp counsel for careers and choices. Certified professionalism on $_kHub.',
    style: 'Direct. Composed. Zero clutter.',
  ),
  'JEREMIAH NESTO': NgmyAdvisorBadgeCopy(
    roleTitle: 'Counsel Advisor',
    about: 'Principled direction when integrity and steady support matter most.',
    style: 'Firm fairness. Quiet authority. Thought before volume.',
  ),
  'MSHAURI AMANI': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wisdom Advisor',
    about: 'Elder experience for life’s harder questions — patience and time-tested judgment.',
    style: 'Mature listening. Traditional wisdom. Modern respect.',
  ),
  'CHLOE MITCHELL': NgmyAdvisorBadgeCopy(
    roleTitle: 'Bible Study Advisor',
    about: 'Scripture opened with care — teaching, clarity, and pastoral warmth on $_kHub.',
    style: 'Humble instruction. Faith-led. Respectful and clear.',
  ),
};

const _byRole = <String, NgmyAdvisorBadgeCopy>{
  'romantic': NgmyAdvisorBadgeCopy(
    roleTitle: 'Connection Advisor',
    about: 'Verified Connection Advisor on $_kHub — presence, discretion, and human conversation.',
    style: 'Warm composure. Selective energy. Professional polish.',
  ),
  'companion': NgmyAdvisorBadgeCopy(
    roleTitle: 'Companion Advisor',
    about: 'Everyday conversation support with reliable presence on $_kHub.',
    style: 'Natural chat. Steady reliability. Friendly professionalism.',
  ),
  'friend': NgmyAdvisorBadgeCopy(
    roleTitle: 'Peer Advisor',
    about: 'Honest talk and everyday perspective — certified peer support.',
    style: 'Loyal tone. Respect first. Good judgment.',
  ),
  'therapist': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wellness Counsel Advisor',
    about: 'Structured listening and coping tools within $_kHub standards.',
    style: 'Clinical calm. Careful pacing. Clear language.',
  ),
  'counselor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Guidance Counselor',
    about: 'Clarity for stress and decisions with certified counseling care.',
    style: 'Supportive structure. Empathy with next steps.',
  ),
  'teacher': NgmyAdvisorBadgeCopy(
    roleTitle: 'Learning Advisor',
    about: 'Patient instruction for skills and schoolwork.',
    style: 'Stepwise clarity. Encouraging tone. Simple words.',
  ),
  'lawyer': NgmyAdvisorBadgeCopy(
    roleTitle: 'Legal Awareness Advisor',
    about: 'Plain-language options and risks — not a courtroom substitute.',
    style: 'Precise. Formal. Careful with facts.',
  ),
  'financial_advisor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Financial Clarity Advisor',
    about: 'Disciplined money guidance — budgets, plans, calm decisions.',
    style: 'Patient numbers. Practical plans. No pressure.',
  ),
  'pastor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Faith Advisor',
    about: 'Pastoral conversation rooted in respect and scripture-minded care.',
    style: 'Gentle authority. Hopeful. Grounded.',
  ),
  'bible_study_teacher': NgmyAdvisorBadgeCopy(
    roleTitle: 'Bible Study Advisor',
    about: 'Bible study with teaching care — clarity, Scripture, and pastoral respect.',
    style: 'Humble instruction. Scripture-led. Accessible.',
  ),
  'debater': NgmyAdvisorBadgeCopy(
    roleTitle: 'Argument Strategy Advisor',
    about: 'Logic, composure, and persuasive structure for hard conversations.',
    style: 'Sharp mind. Clean tone. Dignity intact.',
  ),
  'marriage_advisor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Family Advisor',
    about: 'Seasoned counsel for partnership and family harmony.',
    style: 'Balanced. Discreet. Fair to both sides.',
  ),
  'doctor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Health Literacy Advisor',
    about: 'Clear health education — not emergency care.',
    style: 'Accurate. Careful. Easy to follow.',
  ),
  'mentor': NgmyAdvisorBadgeCopy(
    roleTitle: 'Life Mentor',
    about: 'Long-view mentorship for growth and discipline.',
    style: 'High standards. Kind delivery.',
  ),
  'career_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Career Strategy Advisor',
    about: 'Interviews, advancement, and workplace strategy.',
    style: 'Executive clarity. Actionable. Concise.',
  ),
  'fitness_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Fitness Advisor',
    about: 'Training mindset and sustainable routines.',
    style: 'Goals first. Energetic professionalism.',
  ),
  'life_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Life Strategy Advisor',
    about: 'Habits, goals, and personal direction with structure.',
    style: 'Vision plus accountability.',
  ),
  'translator': NgmyAdvisorBadgeCopy(
    roleTitle: 'Language Practice Advisor',
    about: 'Patient language practice and cultural bridging.',
    style: 'Clear. Celebratory of progress. Never rushed.',
  ),
  'mshauri': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wisdom Advisor',
    about: 'Community wisdom and elder guidance for grounded life direction.',
    style: 'Patient listening. Time-tested advice.',
  ),
  'pickup_line': NgmyAdvisorBadgeCopy(
    roleTitle: 'Charm Strategy Advisor',
    about: 'Confident, respectful openers and social presence coaching.',
    style: 'Clever with class. Never crude.',
  ),
  'smart_mouth': NgmyAdvisorBadgeCopy(
    roleTitle: 'Wit Advisor',
    about: 'Comebacks and timing with stylish restraint.',
    style: 'Quick wit. Professional filter.',
  ),
  'text_coach': NgmyAdvisorBadgeCopy(
    roleTitle: 'Messaging Strategy Advisor',
    about: 'Texting tone, timing, and reply strategy.',
    style: 'Strategic. Modern. Intentional.',
  ),
};
