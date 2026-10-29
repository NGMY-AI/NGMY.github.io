import 'package:flutter/material.dart';

import 'ngmy_construction_electrical.dart';

// ═════════════════════════════════════════════════════════════════════════════
// MORE SWITCHES AND OUTLETS. Only the types that are wired in a genuinely different way (a different face or feature wires like
// one of these). Each is a lesson in the Construction Lab and can come up as a job: the right device has to be chosen and then
// every wire put on the right terminal.
// ═════════════════════════════════════════════════════════════════════════════

const Color _black = Color(0xFF26262A);
const Color _red = Color(0xFFD14B3A);
const Color _white = Color(0xFFF1F1EA);
const Color _copper = Color(0xFFC2763A);
const Color _stripe = Color(0xFF2FA24F);

const List<String> kSwitchKinds = ['switch', 'switch2p', 'switch3', 'switch4', 'switchsmart', 'switchcombo'];
const List<String> kOutletKinds = ['outlet', 'gfci', 'split', 'v240four', 'v240three', 'v240only', 'isolated'];

/// The devices that are not the five the lab began with.
const List<String> kSwitchVariants = ['switch2p', 'switch3', 'switch4', 'switchsmart', 'switchcombo'];
const List<String> kOutletVariants = ['split', 'v240four', 'v240three', 'v240only', 'isolated'];

/// The five devices the lab began with.
const Set<String> kLegacyKinds = {'outlet', 'gfci', 'switch', 'light', 'fan'};

bool isSwitchKind(String kind) => kSwitchKinds.contains(kind);
bool isOutletKind(String kind) => kOutletKinds.contains(kind);

/// What a device is called in a job list ("an outlet", "a three-way switch").
String deviceKindName(String kind) => switch (kind) {
      'outlet' => 'Outlet',
      'gfci' => 'GFCI outlet',
      'switch' => 'Light switch',
      'light' => 'Ceiling light',
      'fan' => 'Ceiling fan',
      _ => electricalLesson(kind).title,
    };

const List<String> _intro = [
  'Turn the breaker OFF and test that the wires are dead.',
  'Look at the device and the wires. Learn which wire is which before you touch a screw.',
];

const List<String> _tail = [
  'Fold the wires back and push the device into the box.',
  'Put the cover plate on, turn the power on and test.',
];

final List<ElectricalLesson> kMoreLessons = [
  // ── Switches ──
  ElectricalLesson(
    id: 'switch2p',
    title: 'Double-pole switch (240 V)',
    blurb: 'Breaks BOTH hot legs of a 240 volt circuit at once: water heaters and baseboard heat.',
    look: 'switch',
    strict: true,
    steps: const [
      ..._intro,
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten hot leg 1 from the panel (black) to the top LEFT screw.',
      'Fasten hot leg 2 from the panel (red) to the top RIGHT screw.',
      'Fasten hot leg 1 to the heater (black) to the bottom LEFT screw.',
      'Fasten hot leg 2 to the heater (red) to the bottom RIGHT screw.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('lineA', 'Black · hot leg 1 (from the panel)', _black, Colors.white, role: 'hot'),
      WireChoice('lineB', 'Red · hot leg 2 (from the panel)', _red, Colors.white, role: 'hot'),
      WireChoice('loadA', 'Black · hot leg 1 (to the heater)', Color(0xFF3A2E2E), Colors.white, role: 'hot'),
      WireChoice('loadB', 'Red · hot leg 2 (to the heater)', Color(0xFFB03A2B), Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'LINE screw 1 (top left)', {'lineA'}, 'Hot leg 1 from the panel goes on the top left screw.', role: 'hot'),
      Hookup(idBrassTop, 'LINE screw 2 (top right)', {'lineB'}, 'Hot leg 2 from the panel goes on the top right screw.', role: 'hot'),
      Hookup(idSilverBottom, 'LOAD screw 1 (bottom left)', {'loadA'}, 'Hot leg 1 to the heater goes on the bottom left screw: it is switched through from the top left one.', role: 'hot'),
      Hookup(idBrassBottom, 'LOAD screw 2 (bottom right)', {'loadB'}, 'Hot leg 2 to the heater goes on the bottom right screw.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'lineA', idBrassTop: 'lineB', idSilverBottom: 'loadA', idBrassBottom: 'loadB'},
    wrongHint: (chip, h) => chip == 'ground'
        ? 'The bare copper ground wire only goes on the GREEN screw.'
        : h.id == idGreen
            ? 'A hot wire never goes on the green ground screw.'
            : 'A double-pole switch has two LINE screws on top (power in) and two LOAD screws on the bottom (power out to the heater). Each leg goes straight down the same side: left leg on the left screws, right leg on the right ones.',
  ),
  ElectricalLesson(
    id: 'switch3',
    title: 'Three-way switch',
    blurb: 'One light, two switches. One COMMON screw and two TRAVELER screws; it pairs with a second three-way.',
    look: 'switch',
    strict: true,
    steps: const [
      ..._intro,
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the black wire (power in, or to the light) to the COMMON screw: the odd-coloured one.',
      'Fasten the first traveler (red) to a TRAVELER screw.',
      'Fasten the second traveler (white wire taped black) to the other TRAVELER screw.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('common', 'Black · COMMON (power in or to the light)', _black, Colors.white, role: 'hot'),
      WireChoice('trav1', 'Red · traveler 1', _red, Colors.white, role: 'hot'),
      WireChoice('trav2', 'White taped black · traveler 2', _white, Color(0xFF111827), role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'COMMON screw (the odd one)', {'common'}, 'The COMMON screw is the one with a different colour. The black wire that brings the power in, or goes to the light, belongs here.', role: 'hot'),
      Hookup(idBrassTop, 'Traveler screw (top)', {'trav1', 'trav2'}, 'The two traveler wires go on the two brass traveler screws, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Traveler screw (bottom)', {'trav1', 'trav2'}, 'The two traveler wires go on the two brass traveler screws, in either order.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'common', idBrassTop: 'trav1', idBrassBottom: 'trav2'},
    wrongHint: (chip, h) => chip == 'ground'
        ? 'The bare copper ground wire only goes on the GREEN screw.'
        : h.id == idGreen
            ? 'A hot wire never goes on the green ground screw.'
            : (chip == 'common' ? 'The COMMON wire does not go on a traveler screw. It goes on the odd-coloured COMMON screw.' : 'The travelers go on the two brass TRAVELER screws. The COMMON screw is for the black power wire only.'),
  ),
  ElectricalLesson(
    id: 'switch4',
    title: 'Four-way switch',
    blurb: 'Sits in the middle of two three-way switches: two traveler wires in on one side, two out on the other.',
    look: 'switch',
    strict: true,
    steps: const [
      ..._intro,
      'Fasten the bare copper ground to the GREEN screw.',
      'The first traveler from the FIRST three-way goes on a top screw (IN).',
      'The second traveler from the FIRST three-way goes on the other top screw (IN).',
      'The first traveler to the SECOND three-way goes on a bottom screw (OUT).',
      'The second traveler to the SECOND three-way goes on the other bottom screw (OUT).',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('in1', 'Red · traveler in 1 (from the first 3-way)', _red, Colors.white, role: 'hot'),
      WireChoice('in2', 'White taped red · traveler in 2', _white, Color(0xFF111827), role: 'hot'),
      WireChoice('out1', 'Red · traveler out 1 (to the second 3-way)', Color(0xFFB03A2B), Colors.white, role: 'hot'),
      WireChoice('out2', 'White taped red · traveler out 2', Color(0xFFE5E7EB), Color(0xFF111827), role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'IN screw (top left)', {'in1', 'in2'}, 'The two travelers coming from the first three-way go on the two top screws.', role: 'hot'),
      Hookup(idBrassTop, 'IN screw (top right)', {'in1', 'in2'}, 'The two travelers coming from the first three-way go on the two top screws.', role: 'hot'),
      Hookup(idSilverBottom, 'OUT screw (bottom left)', {'out1', 'out2'}, 'The two travelers going to the second three-way go on the two bottom screws.', role: 'hot'),
      Hookup(idBrassBottom, 'OUT screw (bottom right)', {'out1', 'out2'}, 'The two travelers going to the second three-way go on the two bottom screws.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'in1', idBrassTop: 'in2', idSilverBottom: 'out1', idBrassBottom: 'out2'},
    wrongHint: (chip, h) => chip == 'ground'
        ? 'The bare copper ground wire only goes on the GREEN screw.'
        : h.id == idGreen
            ? 'A traveler never goes on the green ground screw.'
            : 'A four-way has a pair of screws for the travelers coming IN (top) and a pair for the travelers going OUT (bottom). Do not mix the two pairs.',
  ),
  ElectricalLesson(
    id: 'switchsmart',
    title: 'Smart, motion or timer switch',
    blurb: 'Needs a NEUTRAL wire in the box as well: hot in, hot out to the light, neutral and ground.',
    look: 'switch',
    strict: true,
    steps: const [
      ..._intro,
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the white NEUTRAL wire to the NEUTRAL (silver) screw. A regular switch never touches the neutral, this one does.',
      'Fasten the black wire from the panel to the LINE screw.',
      'Fasten the black wire that goes to the light to the LOAD screw.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('neutral', 'White · neutral', _white, Color(0xFF111827), role: 'neutral'),
      WireChoice('line', 'Black · hot from the panel (LINE)', _black, Colors.white, role: 'hot'),
      WireChoice('load', 'Black · hot to the light (LOAD)', Color(0xFF3A2E2E), Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'NEUTRAL screw (silver)', {'neutral'}, 'The electronics inside need the neutral wire to run. White goes on the silver screw.', role: 'neutral'),
      Hookup(idBrassTop, 'LINE screw (brass, hot in)', {'line'}, 'The black wire from the breaker panel goes on the LINE screw.', role: 'hot'),
      Hookup(idBrassBottom, 'LOAD screw (brass, hot out)', {'load'}, 'The black wire that goes to the light goes on the LOAD screw.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'line', idBrassBottom: 'load'},
    wrongHint: (chip, h) => switch (chip) {
      'ground' => 'The bare copper ground wire only goes on the GREEN screw.',
      'neutral' => 'The white neutral wire goes on the silver NEUTRAL screw only.',
      _ => h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : (chip == 'line' ? 'The wire from the panel is the LINE: it goes on the LINE screw.' : 'The wire to the light is the LOAD: it goes on the LOAD screw.'),
    },
  ),
  ElectricalLesson(
    id: 'switchcombo',
    title: 'Combination (double) switch',
    blurb: 'Two switches in one device: one hot feed is split between them, and two separate lights come out.',
    look: 'switch',
    strict: true,
    steps: const [
      ..._intro,
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the single black feed from the panel to the FEED screw (it powers both switches through a joined tab).',
      'Fasten the black wire to the first light to the screw of switch 1.',
      'Fasten the black wire to the second light to the screw of switch 2.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('feed', 'Black · hot feed from the panel', _black, Colors.white, role: 'hot'),
      WireChoice('loadA', 'Black · to light 1', Color(0xFF3A2E2E), Colors.white, role: 'hot'),
      WireChoice('loadB', 'Black · to light 2', Color(0xFF2B2B33), Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idBrassTop, 'FEED screw (joined tab)', {'feed'}, 'The one feed wire goes on the side where the brass screws are joined by a tab: it powers both switches.', role: 'hot'),
      Hookup(idBrassBottom, 'Switch 1 screw → light 1', {'loadA', 'loadB'}, 'Each switch has its own screw on the other side, and each goes to its own light.', role: 'hot'),
      Hookup(idSilverBottom, 'Switch 2 screw → light 2', {'loadA', 'loadB'}, 'Each switch has its own screw on the other side, and each goes to its own light.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idBrassTop: 'feed', idBrassBottom: 'loadA', idSilverBottom: 'loadB'},
    wrongHint: (chip, h) => chip == 'ground'
        ? 'The bare copper ground wire only goes on the GREEN screw.'
        : h.id == idGreen
            ? 'A hot wire never goes on the green ground screw.'
            : (chip == 'feed' ? 'The feed goes on the FEED screw, where the two switches are joined.' : 'The wires to the lights go on the separate screws, one for each switch.'),
  ),
  // ── Outlets ──
  ElectricalLesson(
    id: 'split',
    title: 'Split (half-switched) outlet',
    blurb: 'The tab between the brass screws is broken off: the top half is switched, the bottom half is always on.',
    look: 'outlet',
    strict: true,
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'Break off the little brass tab between the two brass screws, so the two halves are separate.',
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the white neutral to a SILVER screw (the silver tab stays joined).',
      'Fasten the always-hot black wire to the bottom BRASS screw.',
      'Fasten the switched hot (red, from the wall switch) to the top BRASS screw.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('neutral', 'White · neutral', _white, Color(0xFF111827), role: 'neutral'),
      WireChoice('always', 'Black · always hot (from the panel)', _black, Colors.white, role: 'hot'),
      WireChoice('switched', 'Red · switched hot (from the wall switch)', _red, Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'Silver screw (top): NEUTRAL', {'neutral'}, 'Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.', role: 'neutral'),
      Hookup(idSilverBottom, 'Silver screw (bottom): NEUTRAL', {'neutral'}, 'Neutral goes on a silver screw. The silver screws stay joined, so one wire feeds both halves.', role: 'neutral'),
      Hookup(idBrassTop, 'Brass screw (top): SWITCHED hot', {'switched'}, 'The top half is the switched one: the red wire that comes back from the wall switch goes here.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw (bottom): ALWAYS hot', {'always'}, 'The bottom half is always on: the black wire straight from the panel goes here.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'switched', idBrassBottom: 'always'},
    wrongHint: (chip, h) => switch (chip) {
      'ground' => 'The bare copper ground wire only goes on the GREEN screw.',
      'neutral' => 'The white neutral wire goes on a SILVER screw.',
      'always' => h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : 'The always-hot wire goes on the BOTTOM brass screw. The top one is for the switched wire.',
      _ => h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : 'The switched hot wire (red) goes on the TOP brass screw.',
    },
  ),
  ElectricalLesson(
    id: 'v240four',
    title: '4-wire 240 V outlet (dryer, range, EV)',
    blurb: 'Two hots, a neutral and a ground: the dryer 14-30, and the range and car charger 14-50.',
    look: 'outlet',
    strict: true,
    steps: const [
      ..._intro,
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the white neutral to the silver NEUTRAL (W) screw.',
      'Fasten the black hot to one HOT (X or Y) brass screw.',
      'Fasten the red hot to the other HOT brass screw.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('neutral', 'White · neutral', _white, Color(0xFF111827), role: 'neutral'),
      WireChoice('hot1', 'Black · hot 1', _black, Colors.white, role: 'hot'),
      WireChoice('hot2', 'Red · hot 2', _red, Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'Silver screw W: NEUTRAL', {'neutral'}, 'The white neutral wire goes on the silver W screw.', role: 'neutral'),
      Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires (black and red) go on the two brass screws, X and Y, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires (black and red) go on the two brass screws, X and Y, in either order.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => switch (chip) {
      'ground' => 'The bare copper ground wire only goes on the GREEN screw.',
      'neutral' => 'The white neutral wire goes on the silver W screw.',
      _ => h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : 'The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral.',
    },
  ),
  ElectricalLesson(
    id: 'v240three',
    title: '3-wire 240 V outlet (old dryer or range)',
    blurb: 'Two hots and a neutral, with no separate ground: the old 10-30 and 10-50, from before 1996.',
    look: 'outlet',
    strict: true,
    needsGround: false,
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'There is no separate ground wire here: the neutral also grounds the frame of the old appliance. This is only allowed in old installations.',
      'Fasten the white neutral to the silver NEUTRAL (W) screw.',
      'Fasten the black hot to one HOT (X or Y) brass screw.',
      'Fasten the red hot to the other HOT brass screw.',
      ..._tail,
    ],
    chips: const [
      WireChoice('neutral', 'White · neutral', _white, Color(0xFF111827), role: 'neutral'),
      WireChoice('hot1', 'Black · hot 1', _black, Colors.white, role: 'hot'),
      WireChoice('hot2', 'Red · hot 2', _red, Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idSilverTop, 'Silver screw W: NEUTRAL', {'neutral'}, 'The white neutral wire goes on the silver W screw.', role: 'neutral'),
      Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, in either order.', role: 'hot'),
    ],
    solution: const {idSilverTop: 'neutral', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => chip == 'neutral' ? 'The white neutral wire goes on the silver W screw.' : 'The black and red hot wires go on the two brass screws, X and Y.',
  ),
  ElectricalLesson(
    id: 'v240only',
    title: '240 V only outlet (window AC, welder)',
    blurb: 'Two hots and a ground, and no neutral at all: the 6-series outlets.',
    look: 'outlet',
    strict: true,
    steps: const [
      ..._intro,
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the black hot to one HOT brass screw.',
      'Fasten the red hot to the other HOT brass screw. There is no neutral and no silver screw in use.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('hot1', 'Black · hot 1', _black, Colors.white, role: 'hot'),
      WireChoice('hot2', 'Red · hot 2', _red, Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, in either order.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => chip == 'ground' ? 'The bare copper ground wire only goes on the GREEN screw.' : (h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : 'Both hot wires go on the two brass screws.'),
  ),
  ElectricalLesson(
    id: 'isolated',
    title: 'Isolated-ground outlet',
    blurb: 'Hot and neutral as usual, but the ground goes on its own wire straight back to the panel: shops and offices.',
    look: 'outlet',
    strict: true,
    steps: const [
      ..._intro,
      'Fasten the white neutral to a SILVER screw.',
      'Fasten the black hot to a BRASS screw.',
      'Fasten the green wire with the yellow stripe (the isolated ground, which runs all the way to the panel) to the GREEN screw with the orange triangle. The box itself is grounded with its own bare copper wire.',
      ..._tail,
    ],
    chips: const [
      WireChoice('neutral', 'White · neutral', _white, Color(0xFF111827), role: 'neutral'),
      WireChoice('hot', 'Black · hot', _black, Colors.white, role: 'hot'),
      WireChoice('isoground', 'Green with yellow stripe · isolated ground', _stripe, Colors.white, role: 'ground'),
    ],
    hookups: const [
      Hookup(idGreen, 'Isolated-ground screw (green, orange triangle)', {'isoground'}, 'The dedicated ground wire goes on the green screw with the orange triangle. It does not touch the box or the strap.', role: 'ground'),
      Hookup(idSilverTop, 'Silver screw: NEUTRAL', {'neutral'}, 'The white neutral wire goes on a silver screw.', role: 'neutral'),
      Hookup(idBrassTop, 'Brass screw: HOT', {'hot'}, 'The black hot wire goes on a brass screw.', role: 'hot'),
    ],
    solution: const {idGreen: 'isoground', idSilverTop: 'neutral', idBrassTop: 'hot'},
    wrongHint: (chip, h) => switch (chip) {
      'isoground' => 'The isolated ground wire only goes on the green screw with the orange triangle.',
      'neutral' => 'The white neutral wire goes on a silver screw.',
      _ => h.id == idGreen ? 'A hot wire never goes on the ground screw.' : 'The black hot wire goes on a brass screw.',
    },
  ),
];
