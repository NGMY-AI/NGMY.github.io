// NGMY Advisors — dating rules (enforced by the server for all users):
//  • Professional with everyone by default — no flirting, pet names or romance.
//  • Dating starts only when a user clearly asks AND the advisor is single.
//  • One partner per advisor; professional with everyone else.
//  • No message from the partner for 30 days → breakup.
//  • After a breakup the same person waits 1 year; only 2 chances in total.

import 'ngmy_edge_invoke.dart';

/// Server answer for "this user + this advisor".
class NgmyAdvisorRelationship {
  const NgmyAdvisorRelationship(this.state, {this.availableAt, this.started = false});

  /// dating_you | single | taken | cooldown | no_more_chances | unknown
  final String state;
  final DateTime? availableAt;
  final bool started;

  bool get datingYou => state == 'dating_you';

  static NgmyAdvisorRelationship fromJson(Map<String, dynamic>? m) {
    if (m == null || m['ok'] != true) return const NgmyAdvisorRelationship('unknown');
    return NgmyAdvisorRelationship(
      (m['state'] ?? 'unknown').toString(),
      availableAt: DateTime.tryParse('${m['availableAt'] ?? ''}'),
      started: m['started'] == true,
    );
  }
}

Future<NgmyAdvisorRelationship> ngmyAdvisorRelationshipCall(String action, String advisorId) async {
  try {
    final res = await ngmyEdgeInvoke({'action': action, 'advisorId': advisorId}, timeout: const Duration(seconds: 12));
    return NgmyAdvisorRelationship.fromJson(res);
  } catch (_) {
    return const NgmyAdvisorRelationship('unknown');
  }
}

/// The user clearly asks to start dating / be together.
bool ngmyUserAsksToDate(String text) => RegExp(
      r"\b(be my (girl ?friend|boy ?friend|partner|wife|husband|bae|woman|man)|will you (be mine|date me|go out with me|marry me)|"
      r"(can|could|should|shall) we (date|be together|be a couple|go out)|date me|go out with me|let'?s (date|be together|be a couple)|"
      r"i want (to date you|you to be mine|us to be together)|be in a relationship with me|be my lover)\b",
      caseSensitive: false,
    ).hasMatch(text);

/// The user ends the relationship.
bool ngmyUserEndsRelationship(String text) => RegExp(
      r"\b(break ?up|we'?re (done|over|finished)|it'?s over (between us)?|i'?m (done with you|leaving you|ending (this|us|it))|"
      r"let'?s (end|stop) (this|us|it)|i don'?t want to (date|be with) you)\b",
      caseSensitive: false,
    ).hasMatch(text);

/// Prompt block — overrides any warm / romantic persona when they are NOT the partner.
String ngmyAdvisorProfessionalBlock(NgmyAdvisorRelationship rel) {
  final why = switch (rel.state) {
    'taken' => 'You are in a relationship with someone else. If they flirt or ask you out, say kindly that you are '
        'seeing someone and keep it professional.',
    'cooldown' => 'You two broke up before. If they ask you out again, say kindly you are not ready yet'
        '${rel.availableAt != null ? ' (not before ${rel.availableAt!.toLocal().month}/${rel.availableAt!.toLocal().year})' : ''}.',
    'no_more_chances' => 'You already gave them a second chance. If they ask you out again, say kindly but clearly that '
        'it will not happen again — you can only stay friends / professional.',
    _ => 'You are not dating this person. If they want to date you, they must ask you directly.',
  };
  return 'PROFESSIONAL MODE (this overrides any warm or romantic persona above): Be friendly, respectful and helpful, '
      'like a professional advisor. NO flirting, NO romance, NO sexual talk, NO pet names (love, honey, baby, babe, '
      'sweetheart, darling, dear, my love), NO hearts or kiss emojis, NO "miss you". $why\n';
}

/// One-time note for the reply right after a dating request / breakup.
String ngmyAdvisorDatingEventNote(String event, NgmyAdvisorRelationship rel) {
  if (event == 'ask') {
    if (rel.started) {
      return 'THEY JUST ASKED YOU OUT AND YOU SAID YES — you are now officially dating them (and only them). '
          'Reply happily in character.\n';
    }
    return switch (rel.state) {
      'dating_you' => 'You are already dating them.\n',
      'taken' => 'THEY JUST ASKED YOU OUT: say no kindly — you are already seeing someone.\n',
      'cooldown' => 'THEY JUST ASKED YOU OUT: say no kindly — you broke up and you are not ready to date them again yet.\n',
      'no_more_chances' => 'THEY JUST ASKED YOU OUT: say no kindly but firmly — you already gave them a second chance.\n',
      _ => '',
    };
  }
  if (event == 'end') {
    return 'THEY JUST BROKE UP WITH YOU. Accept it gracefully and with dignity, from now on stay professional.\n';
  }
  return '';
}

/// Removes pet names / romantic emojis from replies to anyone who isn't the partner.
String ngmyStripPetNames(String text) {
  var t = text;
  // Only pet names used to ADDRESS them ("Okay, love." / "Hi honey," / "Love, I…") — never "I love that".
  t = t.replaceAllMapped(
    RegExp(
      r"(^|,\s*|\b(?:hi|hey|hello|okay|ok|oh|yes|no|sure|thanks|thank you|aww|sir)\s+)"
      r"(my love|love|honey|hun|baby|babe|sweetheart|sweetie|darling|dear|handsome|beautiful|gorgeous|cutie)"
      r"(?=\s*[,.!?]|\s*$)",
      caseSensitive: false,
    ),
    (m) => (m.group(1) ?? '').trim().startsWith(',') ? '' : (m.group(1) ?? ''),
  );
  t = t.replaceAll(RegExp(r'[❤️💕💖💗💘💞💓😘😍🥰💋]'), '');
  t = t.replaceAllMapped(RegExp(r'\s+([,.!?])'), (m) => m.group(1)!).replaceAll(RegExp(r'[ \t]{2,}'), ' ');
  t = t.replaceAll(RegExp(r'^[,.\s]+'), '');
  return t.trim();
}
