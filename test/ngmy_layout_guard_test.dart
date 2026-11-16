// GUARD: the fixes for the black bar at the top and bottom of the screen on iPhone, and the page layouts the owner approved.
//
// These were changed back by accident more than once. The website is only published when this file passes (see
// .github/workflows/deploy-pages.yml, step "Guard the approved layout"). If one of these checks fails, something undid an approved fix:
// put the fix back. Change a check here ONLY when the owner has asked for that exact thing to change.

import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_core_protocol_sims.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:shared_preferences/shared_preferences.dart';

String _read(String path) => File(path).readAsStringSync();

void main() {
  group('Black bar on iPhone (web/index.html)', () {
    final html = _read('web/index.html');

    test('Safari tab on iPhone: the app runs to the bottom edge of the screen, under Safari\'s bar, and the menu is kept above the bar', () {
      expect(html, contains('if (appleTouch && !homeScreenApp) {'), reason: 'the Safari-tab branch of the height');
      expect(html, contains('window.outerHeight'), reason: 'the height is the whole screen (outerHeight), measured on the owner\'s iPhone');
      expect(html, contains("de.setAttribute('data-ngmy-overlap'"), reason: 'how much is under the Safari bar is handed to the app for the menu');
      expect(html, contains("de.style.setProperty('--ngmy-full'"), reason: 'the page box is given that full height');
    });

    test('The app saved to the Home Screen on iPhone: the same, as tall as the screen', () {
      expect(html, contains('} else if (appleTouch && homeScreenApp) {'));
      expect(html, contains('env(safe-area-inset-top)'), reason: 'tells whether the page starts under the clock');
    });

    test('The page is not pinned on iPhone (Safari cut a pinned layer off and filled the rest with black)', () {
      expect(html, contains('@supports (-webkit-touch-callout: none)'), reason: 'only Safari on iPhone');
      expect(html, contains('@media (display-mode: browser)'));
      expect(html, contains('@media (display-mode: standalone)'));
      final unpinned = RegExp(r'body \{ position: absolute !important;').allMatches(html).length;
      expect(unpinned, greaterThanOrEqualTo(2), reason: 'body unpinned in the Safari tab AND in the Home Screen app');
      final viewUnpinned = RegExp(r'flutter-view \{ position: absolute !important;').allMatches(html).length;
      expect(viewUnpinned, greaterThanOrEqualTo(2));
      expect(html, contains('height: var(--ngmy-full'), reason: 'the page box uses the full height');
    });

    test('After the keyboard closes the page is put back in place (the bar that came after typing)', () {
      expect(html, contains("document.addEventListener('focusout'"));
      expect(html, contains('function pushedUp()'));
      expect(html, contains('if (pushedUp()) resettle(); else remeasure();'));
    });

    test('The bar that came back by itself: the height the app really drew is compared with the screen and fixed when short', () {
      expect(html, contains('function drawnHeight()'));
      expect(html, contains("root.querySelectorAll('flt-canvas-container canvas')"));
      expect(html, contains('if (drawn > 0 && want - drawn > 4) shortSeen++; else shortSeen = 0;'));
      expect(html, contains("lastSig = '';"), reason: 'forces the app to measure again even when the screen numbers look unchanged');
    });

    test('The temporary height readout is gone', () {
      expect(html, isNot(contains('ngmy-heights')));
      expect(html, isNot(contains('ngmy-diag')));
    });
  });

  group('Black bar in the app itself', () {
    test('Every page runs to the bottom edge; only in a Safari tab is the part under Safari\'s bar kept free', () {
      final g = _read('lib/ngmy_platform_graphics.dart');
      expect(g, contains('padding: mq.padding.copyWith(bottom: ngmyBrowserBottomOverlap()),'));
      expect(_read('lib/ngmy_bottom_overlap_web.dart'), contains("getAttribute('data-ngmy-overlap')"));
      expect(_read('lib/ngmy_bottom_overlap_stub.dart'), contains('=> 0;'));
    });

    test('The bottom menu sits above Safari\'s bar', () {
      expect(_read('lib/main.dart'), contains('bottom: 20 + bottomInset,'));
    });

    // Pages whose list slides up under the clock when scrolled (no dark band at the top), like the Advisors page.
    const underTheClock = {
      'lib/main.dart': 3, // My Profile, Invest, Documents
      'lib/ngmy_slides_studio.dart': 1, // NGMY Slides
      'lib/ngmy_construction_lab.dart': 1, // Construction Lab
      'lib/ngmy_construction_learn.dart': 1,
      'lib/ngmy_doc_share_gate_ui.dart': 1,
      'lib/ngmy_local_growth_income_ui.dart': 1,
      'lib/ngmy_account_snapshot_ui.dart': 1,
      'lib/ngmy_market_hub_screen.dart': 1,
      'lib/ngmy_worksheets.dart': 1,
      'lib/ngmy_core_protocol_sims.dart': 1, // Core Protocol
    };
    for (final e in underTheClock.entries) {
      test('${e.key}: the list slides up under the clock (no dark band at the top)', () {
        final n = 'MediaQuery.paddingOf(context).top +'.allMatches(_read(e.key)).length;
        expect(n, greaterThanOrEqualTo(e.value));
      });
    }
  });

  group('Approved by the owner on 2026-11-15', () {
    test('Business Essentials: the name in a frame in the middle of the top bar (as in the owner\'s screenshot)', () {
      expect(_read('lib/ngmy_business_essentials.dart'), contains('framed: true,'));
      expect(_read('lib/ngmy_hud_tech_shell.dart'), contains('Expanded(child: NgmyFramedTitle(title: title, subtitle: subtitle ?? \'\', accent: colors.first))'));
    });

    test('Civic Registry: the ID icon follows the same rule as the home card and falls back to the account (never disappears after a reset)', () {
      final m = _read('lib/main.dart');
      expect(m, contains("return (record['registryId'] ?? '').toString().trim().isNotEmpty;"));
      expect(m, contains('final rid = (widget.user.registryId ?? \'\').trim();'));
      expect(m, contains('return NgmyCivicRegistryMembers.buildRecord('));
    });

    test('Hati ya Kiapo cha Uongozi: only the admin deletes it, and then it is gone for everyone', () {
      final s = _read('lib/ngmy_slides_studio.dart');
      expect(s, contains('if (!ngmyIsHatiKiapoUongoziDeck(deck.deckKind) || widget.isAdmin) ...['));
      expect(s, contains('final synced = await NgmyHatiKiapoStore.delete(state);'));
      expect(s, contains("key: const Key('slides-create-kiapo'),"));
      final k = _read('lib/ngmy_hati_kiapo_uongozi.dart');
      expect(k, contains("'deletedByState': _deleted,"));
      expect(k, contains('if (!isAppAdmin && await NgmyHatiKiapoStore.isDeleted(trimmed)) {'));
    });
  });

  group('Core Protocol page', () {
    setUp(() {
      SharedPreferences.setMockInitialValues({});
      NgmyTone.enabled = false;
    });

    testWidgets('the name is in a frame in the middle at the top, with the back button at the side (like the Construction Lab)', (t) async {
      t.view.physicalSize = const Size(430, 932);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(const MaterialApp(home: NgmyCoreProtocolSimsScreen()));
      await t.pump(const Duration(milliseconds: 300));
      final frame = t.getRect(find.byKey(const Key('core-protocol-title-frame')));
      final back = t.getRect(find.byKey(const Key('core-protocol-back')));
      expect(find.text('🧪 Core Protocol'), findsOneWidget);
      expect((frame.center.dx - 215).abs(), lessThan(4), reason: 'in the middle');
      expect(frame.top, lessThan(40), reason: 'at the top');
      expect(back.left, lessThan(20), reason: 'back button at the side');
      expect((back.center.dy - frame.center.dy).abs(), lessThan(12), reason: 'on the same line as the frame');
      // It scrolls away with the page, like the other pages (no fixed band at the top).
      await t.drag(find.byType(CustomScrollView).first, const Offset(0, -300));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.byKey(const Key('core-protocol-title-frame')).hitTestable(), findsNothing);
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 5));
    });
  });
}
