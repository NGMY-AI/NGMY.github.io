import 'ngmy_stripe_payments.dart';

/// App knowledge injected into NGMY Advisors chat.
///
/// - **Every advisor** gets [_userHowTo] — how members use the app.
/// - **Boss + Mariam / Suzana** also get [_ownerDeep] — full subscriptions,
///   freemium rules, guest URLs, roles, and how studios work.
///
/// Stripe prices/titles/durations are built live from [NgmyStripePayments] so
/// when you change a product in `ngmy_stripe_payments.dart`, advisor answers
/// update automatically on the next message. Update [_userHowTo] / [_ownerDeep]
/// prose when you add or move major features.
class NgmyAdvisorAppKnowledge {
  /// Build the knowledge block for one outbound advisor reply.
  static String forChat({
    required bool chatterIsBoss,
    required bool isBossPersonalHelper,
  }) {
    final buf = StringBuffer()
      ..writeln('=== NGMY APP KNOWLEDGE (use this — do not invent features) ===')
      ..writeln(_userHowTo)
      ..writeln()
      ..writeln(_privacyRules(
        chatterIsBoss: chatterIsBoss,
        isBossPersonalHelper: isBossPersonalHelper,
      ));

    if (chatterIsBoss && isBossPersonalHelper) {
      buf
        ..writeln()
        ..writeln(_civicRegistryPromotionTalkingPoints)
        ..writeln()
        ..writeln(_ownerDeep)
        ..writeln()
        ..writeln(_liveStripeCatalog());
    } else if (chatterIsBoss) {
      buf.writeln(
        'BOSS NOTE: For the deepest subscription / pricing / internal catalog, '
        'chat Mariam Dusabe or Suzana Vanessa (first row personal helpers). '
        'You may still help with normal how-to using the knowledge above.',
      );
    }

    return buf.toString().trim();
  }

  static String _privacyRules({
    required bool chatterIsBoss,
    required bool isBossPersonalHelper,
  }) {
    if (chatterIsBoss && isBossPersonalHelper) {
      return 'OWNER DEPTH UNLOCKED: This chat is with the NGMY Boss/admin. '
          'Answer ANY question about how NGMY works, studios, guest links, roles, '
          'subscriptions, prices, freemium rules, and entitlements using the deep '
          'blocks below. Prefer live Stripe catalog numbers. Be clear and useful. '
          'Still stay in character as a human personal helper — not a robot FAQ.';
    }
    if (chatterIsBoss) {
      return 'This chatter is the NGMY Boss. Help with how-to. For the full paid '
          'catalog and deep internal subscription detail, point them to Mariam or Suzana.';
    }
    return 'PUBLIC MEMBER RULES: Answer simple how-to questions (where to tap, how to publish, '
        'what a hub does, free allowances). '
        'Do NOT dump the full paid price list, admin-only fees, or internal subscription '
        'catalog. If they ask exact paid prices, explain freemium briefly and tell them '
        'the in-app paywall shows the live price — do not invent numbers. '
        'Never discuss admin emails, backend secrets, API keys, or how to bypass paywalls.';
  }

  /// Boss personal helpers (Mariam + Suzana) — video scripts about Civic Registry promo.
  static const String _civicRegistryPromotionTalkingPoints = '''
CIVIC REGISTRY PROMO TALKING POINTS (for Boss video scripts — Mariam & Suzana):
- WHAT IT IS: NGMY Civic Registry = community digital membership across US states — not a government ID, but OUR system for Congolese/African diaspora families to stay organized, counted, and helped together in America.
- WHY IT MATTERS: scattered families, no central record, hard to coordinate help, contributions, or know who is in the community — Civic Registry fixes that with dignity.
- KEY FEATURES TO MENTION IN VIDEOS: enroll members, state-based community, Authorized Registrars, help-mode contributions (community gives together), claims/support, family size on record, searchable roster, PIN-protected state cases, nationwide unity.
- EMOTIONAL ANGLES THAT GO VIRAL: "finally we have our own system", mama counting her children, church/community leader enrolling families, young diaspora kid explaining app to parents, before/after chaos vs organized community, pride in African identity + practical American life.
- CTA EXAMPLES: download NGMY at ngmy.org, open NGMY Hub → Civic Registry, enroll your family, tell your state registrar, join the next help round.
- TONE: proud, warm, real — Congolese/Swahili/English as Boss prefers. Never sound like a scammy MLM ad.''';

  /// Compact member-facing guide for every advisor.
  static const String _userHowTo = '''
WHAT NGMY IS: Next Generation - Make Yours — multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.

BOTTOM NAV (7 tabs):
1) Home — brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).
2) Tool Hub — Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.
3) Slides — presentations + Marriage/Hati documents.
4) NGMY Hub (center) — Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.
5) Advisors — AI advisor chat (this hub).
6) Creator Hub — Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.
7) Profile — theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).

MENU STUDIO (Tool Hub → Menu Studio):
- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}
- First menu free; more menus need Menu Studio subscription (paywall shows price).
- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}
- First Bio free with starter template; more Bios/templates need Bio Studio subscription.
- Extra Bio photo/header changes may need a photo pack after free changes.
- Local Menu / Local Bio: Home Essentials hub → device-local publish at /local-menu/ and /local-bio/

BUSINESS CARD: Tool Hub → create/edit/download. Paid unlock for edit+download window (paywall).

SLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.

ADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).

CIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), Civic King/Admin roles. Guest enroll can use ?civic=enroll. Georgia first registrar path differs; other states may need State Registrar sponsorship.

VAULT GAMES (Home → Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.

GROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically \$10. Plan availability is admin-controlled.

CREATOR TOOLS:
- Doc Share — share docs; free individual creations then paid / org license.
- QR Generator — free saves then paid access window.
- Transfer — receive free; limited free sends then monthly unlock.
- Kiswahili School — Basics free; other levels one-time unlock.
- Document Scanner — trial then monthly.
- Message Translator — paid unlimited.
- Phone Unlock — short access window.
- Video Studio / Recorder / Play Zone — Creator Hub tools.
- Worksheets → Cashier (IOUs/receipts), Family Tree (create/photos may be paid).
- Invoices — free standard tier with limited free premium saves; paid templates via paywall.
- App Builder — Hub center (if enabled); cloud + Bolt AI may be paid.
- Music Studio — AI songs may cost wallet credits when enabled.

STORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.

GUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.

HOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.''';

  /// Deep owner/product knowledge for Mariam + Suzana when chatting with Boss.
  static const String _ownerDeep = '''
=== OWNER-ONLY DEEP PRODUCT KNOWLEDGE (Boss + personal helpers) ===
You are a powerful NGMY product expert for the Boss. Explain HOW things work end-to-end.

MENU STUDIO INTERNALS:
- Library holds Menus + Bios. Publish writes to cloud registry; guest Flutter apps serve /bio and /menu.
- Free menu: sticky first freeMenuId. Free Bio: oldest Bio + gold_curved template; photo change quotas.
- Stripe: menu_studio (monthly), bio_studio (monthly), bio_photo_pack (2 changes).
- Local paths use local registries and /local-bio /local-menu guest apps.
- Bio guest load: HTML "Loading NGMY" splash held until bio surface ready (no second "Opening bio…" Flutter loader).

SLIDES / MARRIAGE:
- Slides Pro = monthly Stripe slides_studio.
- Marriage/Hati = marriageDocument Stripe — short 4-hour session.

FREEMIUM QUICK MAP (exact Stripe \$ below):
- Menu: 1 free → Menu Studio sub
- Bio: 1 free starter → Bio Studio; photo packs after free changes
- QR: 2 free saves → QR Generator
- Transfer: 2 free sends → Device Transfer
- Invoices: invoiceFreeCount free premium path → Invoice product
- Advisors: advisorFreeMinutes free → Advisors product
- Kiswahili: basics free → per-level lifetime
- Vault: 1 free play without investment
- Doc Share: config free individual count; org license Stripe; individual wallet fee may exist
- State Registrar: Georgia free first path; other states \$50/mo first AR
- Scanner / Translator / Phone Unlock / Business Card / Family Tree / Slides: see Stripe catalog

WALLET vs STRIPE:
- Many features use Stripe Payment Links (ngmy.org success ?ngmy_pay_ok=1&ngmy_pay={slug}).
- Some wallet fees (invoice tiers, family tree create/photo, App Studio cloud, Bolt AI, Music song, repair estimates, legacy advisor passes) are admin-configurable on AppConfig — say "admin may override wallet fee" when relevant.
- Admins bypass paywalls. Provisional unlock ~60 min after checkout redirect while webhook confirms.

INVESTMENT PLANS:
- Prices commonly \$5–\$1000 bands (Starter→Diamond naming). Daily ROI ~2.86%, 261 clock-in work days.
- Free trial (admin-granted) gives daily bonus / short clock-in; does NOT unlock Vault games.

ROLES:
- App Admin (Boss): hardcoded admin emails; isAdmin; full bypass + management.
- Crowns: king/queen cosmetic + rewards.
- Civic: Authorized Registrar (max 5/state), Civic King, Civic Registry Admin (any state, does not count toward AR cap), App Admin over civic PIN.
- Store sell grant: canSellOnStore. Workers/helpers: approval flags.

HUBS RECAP FOR DEEP ANSWERS:
- Business Essentials + Home Essentials: notes, contacts, meds, site map, tasks, hotlines, paint mix, bible dictionary, alarms, local menu/bio.
- Helper AI / Help Topics: separate from Advisors; Helper can use live DB dumps. You (Advisors) use THIS knowledge block.
- Communicate pass: Stripe advisors preferred; wallet legacy passes may still exist.

WHEN BOSS CHANGES THE APP: Trust the LIVE STRIPE CATALOG section for prices. If he describes a change he just shipped, acknowledge it and answer with the new behavior he stated.''';

  static String _liveStripeCatalog() {
    final buf = StringBuffer()
      ..writeln('=== LIVE STRIPE CATALOG (auto from code — prefer these prices) ===')
      ..writeln(
        'Free constants: invoiceFreeCount=${NgmyStripePayments.invoiceFreeCount}, '
        'advisorFreeMinutes=${NgmyStripePayments.advisorFreeMinutes}, '
        'dayTrialHours=${NgmyStripePayments.dayTrialHours}, '
        'monthlyAccessDays=${NgmyStripePayments.monthlyAccessDays}, '
        'marriageSessionHours=${NgmyStripePayments.marriageSessionHours}, '
        'phoneUnlockAccessDays=${NgmyStripePayments.phoneUnlockAccessDays}.',
      );
    for (final p in NgmyStripeProduct.values) {
      buf.writeln(
        '- ${NgmyStripePayments.productTitle(p)} '
        '(${NgmyStripePayments.productSlug(p)}): '
        '${NgmyStripePayments.priceLabel(p)} / ${NgmyStripePayments.durationLabel(p)} — '
        '${NgmyStripePayments.productSubtitle(p)}',
      );
    }
    buf.writeln(
      'Other common wallet defaults (may be admin-overridden): App Studio Cloud ~\$2/mo, '
      'Bolt AI ~\$3/mo, Music AI song ~\$1, Repair Estimates ~\$4.99/mo, '
      'Family Tree create ~\$5 / photo monthly ~\$15, Doc Share individual unlock ~\$4.99.',
    );
    return buf.toString().trim();
  }
}
