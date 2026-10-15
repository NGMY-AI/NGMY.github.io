/// What the NGMY AI writers (Slides, Books) know about the M'MBONDO community, the Civic
/// Registry ("the system") and the NGMY app, so a request like "make a presentation about
/// the civic registry for our community" comes out right without the user explaining it.
const String kNgmyCommunityKnowledge = '''
ABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):
- The community is M'MBONDO (also written MBONDO). Its motto is "EMO 'YA M'MBONDO". Members live in different US states.
- The Civic Registry — people also just call it "the system" — was built inside the NGMY app for the M'MBONDO community.
- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing — when you know where your money goes, you give.
- What it does:
  • Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.
  • Lets each state know how many members it has (state totals, nationwide totals).
  • Records contributions with receipts and contribution reports, so everyone sees the money trail.
  • Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.
  • Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.
- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.
- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.
''';

/// The block above, only when the request is about the community / registry / app.
String ngmyCommunityKnowledgeFor(String request) {
  final t = request.toLowerCase();
  const triggers = [
    'civic', 'registry', 'registrar', 'mbondo', "m'mbondo", 'mmbondo', 'ngmy', 'the system', 'our system',
    'our community', 'the community', 'community', 'contribution', 'michango', 'jamii', 'jumuiya', 'advisor',
  ];
  return triggers.any(t.contains) ? kNgmyCommunityKnowledge : '';
}
