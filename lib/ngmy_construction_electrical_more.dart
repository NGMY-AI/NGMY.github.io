import 'dart:math' as math;

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
const List<String> kOutletKinds = ['outlet', 'gfci', 'split', 'v240four', 'v240three', 'v240only', 'isolated', 'dryer4', 'dryer3', 'range4', 'range3', 'washer', ...kMoreOutletKinds];

/// The devices that are not the five the lab began with.
const List<String> kSwitchVariants = ['switch2p', 'switch3', 'switch4', 'switchsmart', 'switchcombo'];
/// Jobs (in the city and in practice) pick their second outlet from all of these, so every job can be a different kind.
const List<String> kOutletVariants = ['split', 'v240four', 'v240three', 'v240only', 'isolated', ...kMoreOutletKinds];

/// The outlets for the big appliances: the dryer, the range and the washing machine (American NEMA style).
const List<String> kApplianceOutlets = ['dryer4', 'dryer3', 'range4', 'range3', 'washer'];

/// The cord of a dryer or range, wired at the appliance (not an outlet in the wall).
const List<String> kCordKinds = ['cord3', 'cord4'];

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
    look: 'nema1430',
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
    look: 'nema1030',
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
    look: 'nema620',
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
  ...kApplianceLessons,
  ...kMoreOutletLessons,
  ...kChartOutletLessons,
];

// ═════════════════════════════════════════════════════════════════════════════
// MORE AMERICAN OUTLETS: the other receptacles found in American houses, garages, RV pads and shops. Each one is a lesson
// (a tile on the Lessons page) and can come up as a job in the city.
// ═════════════════════════════════════════════════════════════════════════════

/// The new outlet lessons, in the order of their tiles.
const List<String> kMoreOutletKinds = ['afci', 'dualfunction', 'tamper', 'usb', 'outlet20', 'weather', 'smartoutlet', 'ev1450', 'rv30', 'welder650', 'gen1430', ...kChartOutletKinds];

const _groundChip = WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground');
const _neutralChip = WireChoice('neutral', 'White · neutral', _white, Color(0xFF111827), role: 'neutral');
const _hotChip = WireChoice('hot', 'Black · hot', _black, Colors.white, role: 'hot');
const _hot1Chip = WireChoice('hot1', 'Black · hot 1', _black, Colors.white, role: 'hot');
const _hot2Chip = WireChoice('hot2', 'Red · hot 2', _red, Colors.white, role: 'hot');

String _std120Hint(String chip, Hookup h, {String hotScrew = 'a BRASS screw', String neutralScrew = 'a SILVER screw'}) => switch (chip) {
      'ground' => 'The bare copper ground wire only goes on the GREEN screw.',
      'neutral' => 'The white neutral wire goes on $neutralScrew.',
      _ => h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : 'The black hot wire goes on $hotScrew.',
    };

/// A 120 volt outlet wired the usual way (ground green, neutral silver, hot brass), with its own words.
ElectricalLesson _std120({
  required String id,
  required String title,
  required String blurb,
  required String look,
  required List<String> about,
  String neutralLabel = 'Silver screw: NEUTRAL',
  String hotLabel = 'Brass screw: HOT',
  String neutralWhy = 'The white neutral wire goes on a silver screw.',
  String hotWhy = 'The black hot wire goes on a brass screw.',
  String hotScrew = 'a BRASS screw',
  String neutralScrew = 'a SILVER screw',
}) =>
    ElectricalLesson(
      id: id,
      title: title,
      blurb: blurb,
      look: look,
      strict: true,
      // Two steps to start (the second one says what this device is), one for each wire, two to finish: the page checks them off in that order.
      steps: [
        _intro.first,
        '${_intro.last} ${about.join(' ')}',
        'Fasten the bare copper ground to the GREEN screw.',
        'Fasten the white neutral to the ${neutralLabel.split(':').first.toLowerCase()}.',
        'Fasten the black hot to the ${hotLabel.split(':').first.toLowerCase()}.',
        ..._tail,
      ],
      chips: const [_groundChip, _neutralChip, _hotChip],
      hookups: [
        const Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
        Hookup(idSilverTop, neutralLabel, const {'neutral'}, neutralWhy, role: 'neutral'),
        Hookup(idBrassTop, hotLabel, const {'hot'}, hotWhy, role: 'hot'),
      ],
      solution: const {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'hot'},
      wrongHint: (chip, h) => _std120Hint(chip, h, hotScrew: hotScrew, neutralScrew: neutralScrew),
    );

/// A 240 volt outlet with two hots, a neutral and a ground (X, Y, W, G).
ElectricalLesson _four240({required String id, required String title, required String blurb, required String look, required List<String> about}) => ElectricalLesson(
      id: id,
      title: title,
      blurb: blurb,
      look: look,
      strict: true,
      steps: [
        _intro.first,
        '${_intro.last} ${about.join(' ')}',
        'Fasten the bare copper ground to the GREEN screw (G).',
        'Fasten the white neutral to the silver NEUTRAL (W) screw.',
        'Fasten the black hot to one HOT (X or Y) brass screw.',
        'Fasten the red hot to the other HOT brass screw.',
        ..._tail,
      ],
      chips: const [_groundChip, _neutralChip, _hot1Chip, _hot2Chip],
      hookups: const [
        Hookup(idGreen, 'Green screw G: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
        Hookup(idSilverTop, 'Silver screw W: NEUTRAL', {'neutral'}, 'The white neutral wire goes on the silver W screw.', role: 'neutral'),
        Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires (black and red) go on the two brass screws, X and Y, in either order.', role: 'hot'),
        Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires (black and red) go on the two brass screws, X and Y, in either order.', role: 'hot'),
      ],
      solution: const {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
      wrongHint: (chip, h) => _bigHint(chip, h, hasGround: true),
    );

final List<ElectricalLesson> kMoreOutletLessons = [
  _std120(
    id: 'afci',
    title: 'AFCI outlet (arc-fault)',
    blurb: 'Stops arcing from a loose or damaged wire before it starts a fire. Required in bedrooms and living rooms of new houses.',
    look: 'gfci',
    about: const [
      'An AFCI outlet looks like a GFCI, with TEST and RESET buttons. It watches the current for the crackle of an arc (a loose screw, a chewed cord) and cuts the power.',
      'The power from the panel goes on the LINE screws. The LOAD screws are for outlets further down the line; here there are none, so they stay covered.',
    ],
    neutralLabel: 'Silver LINE screw: NEUTRAL',
    hotLabel: 'Brass LINE screw: HOT',
    neutralWhy: 'The white neutral from the panel goes on the silver LINE screw.',
    hotWhy: 'The black hot from the panel goes on the brass LINE screw.',
    hotScrew: 'the brass LINE screw',
    neutralScrew: 'the silver LINE screw',
  ),
  _std120(
    id: 'dualfunction',
    title: 'Dual-function AFCI/GFCI outlet',
    blurb: 'One outlet that guards against both arcing wires (fire) and leaking current (shock). The newer electrical code asks for both in kitchens and laundry rooms, and this does it in one.',
    look: 'gfci',
    about: const [
      'It looks like a GFCI with TEST and RESET buttons and a little light that shows it is protecting. It is wired on the LINE screws, like a GFCI.',
      'The power from the panel goes on the LINE screws. The LOAD screws protect outlets further down the line; here there are none, so they stay covered.',
    ],
    neutralLabel: 'Silver LINE screw: NEUTRAL',
    hotLabel: 'Brass LINE screw: HOT',
    neutralWhy: 'The white neutral from the panel goes on the silver LINE screw.',
    hotWhy: 'The black hot from the panel goes on the brass LINE screw.',
    hotScrew: 'the brass LINE screw',
    neutralScrew: 'the silver LINE screw',
  ),
  _std120(
    id: 'tamper',
    title: 'Tamper-resistant outlet (TR)',
    blurb: 'Little shutters behind the slots keep a child from pushing a key or a pin in. Every new house must have them.',
    look: 'outlet',
    about: const ['Look for the letters TR on the face. Behind the slots there are spring shutters: they only open when both prongs of a plug push at the same time. It is wired like a normal outlet.'],
  ),
  _std120(
    id: 'usb',
    title: 'USB outlet',
    blurb: 'A normal outlet with USB charging ports built in. A small charger inside the outlet turns 120 volts into 5 volts.',
    look: 'outlet',
    about: const ['The USB ports need room behind the face, so use a deep box. It is wired like a normal outlet: the charger inside takes its power from the same hot and neutral.'],
  ),
  _std120(
    id: 'outlet20',
    title: '20 amp outlet (5-20)',
    blurb: 'The outlet with a sideways T on one slot: for a 20 amp circuit in a kitchen, a garage or for a big tool.',
    look: 'nema520',
    about: const ['Look at the face: the neutral slot has a sideways T. A 20 amp outlet must be on a 20 amp breaker with 12 gauge wire (the yellow cable). A 15 amp plug still fits it.'],
  ),
  _std120(
    id: 'weather',
    title: 'Outdoor outlet (weather-resistant GFCI)',
    blurb: 'Outside: a GFCI marked WR, under a bubble cover that stays closed even with a cord plugged in.',
    look: 'gfci',
    about: const [
      'Outside, an outlet must be a GFCI and marked WR (weather resistant), and it sits under an in-use cover (the bubble) that closes over a plugged-in cord.',
      'The power from the panel goes on the LINE screws.',
    ],
    neutralLabel: 'Silver LINE screw: NEUTRAL',
    hotLabel: 'Brass LINE screw: HOT',
    neutralWhy: 'The white neutral from the panel goes on the silver LINE screw.',
    hotWhy: 'The black hot from the panel goes on the brass LINE screw.',
    hotScrew: 'the brass LINE screw',
    neutralScrew: 'the silver LINE screw',
  ),
  _std120(
    id: 'smartoutlet',
    title: 'Smart outlet (Wi-Fi)',
    blurb: 'An outlet you can turn on and off from your phone. Its little radio always needs the neutral wire.',
    look: 'outlet',
    about: const ['A smart outlet has a radio and a small light inside, so it must have the neutral. Connect it, then pair it with its app on the phone.'],
  ),
  _four240(
    id: 'ev1450',
    title: 'Electric car charger outlet (14-50)',
    blurb: 'The 50 amp, 240 volt outlet in a garage for charging an electric car or for an RV: two hots, a neutral and a ground.',
    look: 'nema1450',
    about: const ['Look at the face: two straight slots at the sides (X and Y), a straight slot at the top (W, neutral) and a round hole (G). That is a NEMA 14-50. It takes 6 gauge wire and a 50 amp double breaker, and in a garage it must be GFCI protected at the breaker.'],
  ),
  _std120(
    id: 'rv30',
    title: 'RV outlet, 30 amp (TT-30)',
    blurb: 'The camper outlet at an RV pad: 30 amp but only 120 volts, with slanted slots so only the RV plug fits.',
    look: 'nematt30',
    about: const ['Look at the face: two slanted slots and a round ground hole. Careful: the TT-30 is 120 volts only. Putting 240 volts on it burns out the RV. One hot, one neutral, one ground, on 10 gauge wire and a 30 amp single breaker.'],
    hotLabel: 'Brass screw X: HOT',
    neutralLabel: 'Silver screw W: NEUTRAL',
    hotWhy: 'The one black hot goes on the brass X screw.',
    neutralWhy: 'The white neutral goes on the silver W screw.',
    hotScrew: 'the brass X screw',
    neutralScrew: 'the silver W screw',
  ),
  ElectricalLesson(
    id: 'welder650',
    title: 'Welder outlet (6-50)',
    blurb: 'The 50 amp, 240 volt outlet for a welder or a big compressor in a shop: two hots and a ground, no neutral.',
    look: 'nema620',
    strict: true,
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'Look at the face: two flat slots for the hots and a U-shaped ground hole, and no neutral slot. That is a NEMA 6-50, on 6 gauge wire and a 50 amp double breaker.',
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the black hot to one HOT brass screw.',
      'Fasten the red hot to the other HOT brass screw. There is no neutral.',
      ..._tail,
    ],
    chips: const [_groundChip, _hot1Chip, _hot2Chip],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, in either order.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => chip == 'ground' ? 'The bare copper ground wire only goes on the GREEN screw.' : (h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : 'Both hot wires go on the two brass screws.'),
  ),
  _four240(
    id: 'gen1430',
    title: 'Generator twist-lock (L14-30)',
    blurb: 'The round twist-lock for a portable generator: the plug turns and locks, so it cannot fall out. Two hots, a neutral and a ground.',
    look: 'nemal1430',
    about: const ['Look at the face: four curved slots in a circle. The plug goes in and turns to lock. It feeds the house through a transfer switch or an interlock, never by back-feeding an outlet.'],
  ),
];

// ═════════════════════════════════════════════════════════════════════════════
// THE BIG APPLIANCE OUTLETS (American NEMA style): the dryer (10-30 and 14-30), the range (10-50 and 14-50), the washing machine
// (5-20) and the cord of a dryer or range (3-wire and 4-wire hookup). Letters on the face and in the lessons: W is the neutral
// (white), X and Y are the two hots (black and red, 120 volts each, 240 volts between them) and G is the ground.
// ═════════════════════════════════════════════════════════════════════════════

// ═════════════════════════════════════════════════════════════════════════════
// THE OUTLETS OF THE NEMA CHARTS: every receptacle on the reference charts that the lab did not have yet (240 volt, 277 volt,
// three-phase and twist-lock). Each one is a lesson and can come up as a job in the city. Wire colours follow American practice:
// black, red and blue for 120/208/240 volts; brown, orange and yellow with a grey neutral for 277/480 volts.
// ═════════════════════════════════════════════════════════════════════════════

/// The outlets of the charts, in the order of their tiles.
const List<String> kChartOutletKinds = [
  'old2prong', 'ac615', 'v630', 'v1460', 'shore50',
  'l520', 'l530', 'l620', 'l630', 'l1420', 'l220',
  'v715', 'v720', 'v730', 'v1820', 'l2230',
  'p1520', 'p1530', 'p1550', 'p1560', 'l1530', 'l2130', 'l1630',
];

const _blue = Color(0xFF2563EB);
const _brown = Color(0xFF7C4A21);
const _orange = Color(0xFFEA7A1A);
const _yellow = Color(0xFFE5C02A);
const _grey = Color(0xFFA3A3A3);

/// One wire of a chart outlet and the screw it goes on.
class _W {
  const _W(this.chip, this.screw, this.label, this.name, {this.accepts});
  final WireChoice chip;
  final int screw;
  final String label;
  /// How the step names the wire ("the brown hot").
  final String name;
  /// Wires that may go on this screw (the hots of one outlet are interchangeable); only this wire when null.
  final Set<String>? accepts;
}

/// A chart outlet: two steps to start (the second says what it is), one for each wire, two to finish.
ElectricalLesson _chart({required String id, required String title, required String blurb, required String look, required String about, required List<_W> wires}) {
  String where(String label) => label.split(':').first.toLowerCase();
  final hooks = [
    for (final w in wires)
      Hookup(w.screw, w.label, w.accepts ?? {w.chip.key},
          w.chip.role == 'ground' ? 'The ground wire goes on the green screw.' : '${w.name[0].toUpperCase()}${w.name.substring(1)} goes on the ${where(w.label)}.',
          role: w.chip.role),
  ];
  return ElectricalLesson(
    id: id,
    title: title,
    blurb: blurb,
    look: look,
    strict: true,
    needsGround: wires.any((w) => w.chip.role == 'ground'),
    steps: [
      _intro.first,
      '${_intro.last} $about',
      for (final w in wires) 'Fasten ${w.name} to the ${where(w.label)}.',
      ..._tail,
    ],
    chips: [for (final w in wires) w.chip],
    hookups: hooks,
    solution: {for (final w in wires) w.screw: w.chip.key},
    wrongHint: (chip, h) {
      final role = wires.firstWhere((w) => w.chip.key == chip, orElse: () => wires.first).chip.role;
      if (role == 'ground') return 'The ground wire only goes on the GREEN screw.';
      if (h.id == idGreen) return 'Only the ground wire goes on the green screw.';
      final right = hooks.where((x) => x.accepts.contains(chip)).map((x) => where(x.name)).join(' or the ');
      return role == 'neutral' ? 'The neutral goes on the $right.' : 'This hot wire goes on the $right.';
    },
  );
}

const _g = _W(_groundChip, idGreen, 'Green screw G: GROUND', 'the bare copper ground');
const _gGreen = _W(WireChoice('ground', 'Green · ground', _stripe, Colors.white, role: 'ground'), idGreen, 'Green screw G: GROUND', 'the green ground');
const _w = _W(_neutralChip, idSilverTop, 'Silver screw W: NEUTRAL', 'the white neutral');
const _wGrey = _W(WireChoice('neutral', 'Grey · neutral (277 V)', _grey, Color(0xFF111827), role: 'neutral'), idSilverTop, 'Silver screw W: NEUTRAL', 'the grey neutral');
const _h120 = _W(_hotChip, idBrassTop, 'Brass screw X: HOT', 'the black hot');
const _h277 = _W(WireChoice('hot', 'Brown · hot (277 V)', _brown, Colors.white, role: 'hot'), idBrassTop, 'Brass screw X: HOT', 'the brown hot');
const _two = {'hot1', 'hot2'};
const _x2 = _W(_hot1Chip, idBrassTop, 'Brass screw X: HOT', 'the black hot', accepts: _two);
const _y2 = _W(_hot2Chip, idBrassBottom, 'Brass screw Y: HOT', 'the red hot', accepts: _two);
const _three = {'hot1', 'hot2', 'hot3'};
const _x3 = _W(_hot1Chip, idBrassTop, 'Brass screw X: HOT', 'the black hot (phase A)', accepts: _three);
const _y3 = _W(_hot2Chip, idBrassBottom, 'Brass screw Y: HOT', 'the red hot (phase B)', accepts: _three);
const _z3 = _W(WireChoice('hot3', 'Blue · hot 3', _blue, Colors.white, role: 'hot'), idSilverBottom, 'Screw Z: HOT', 'the blue hot (phase C)', accepts: _three);
const _x480 = _W(WireChoice('hot1', 'Brown · hot 1 (480 V)', _brown, Colors.white, role: 'hot'), idBrassTop, 'Brass screw X: HOT', 'the brown hot (phase A)', accepts: _three);
const _y480 = _W(WireChoice('hot2', 'Orange · hot 2 (480 V)', _orange, Colors.white, role: 'hot'), idBrassBottom, 'Brass screw Y: HOT', 'the orange hot (phase B)', accepts: _three);
const _z480 = _W(WireChoice('hot3', 'Yellow · hot 3 (480 V)', _yellow, Color(0xFF111827), role: 'hot'), idSilverBottom, 'Screw Z: HOT', 'the yellow hot (phase C)', accepts: _three);

final List<ElectricalLesson> kChartOutletLessons = [
  _chart(
    id: 'old2prong',
    title: 'Old 2-prong outlet (1-15)',
    blurb: 'The outlet of very old houses: two slots and no ground hole. 120 volts, 15 amps.',
    look: 'nema115',
    about: 'Two slots, no ground hole: a NEMA 1-15. There is no ground wire in the box, so only a hot and a neutral. When one is replaced today it must become a GFCI marked NO EQUIPMENT GROUND, or get a real ground wire.',
    wires: const [_W(_neutralChip, idSilverTop, 'Silver screw: NEUTRAL', 'the white neutral'), _W(_hotChip, idBrassTop, 'Brass screw: HOT', 'the black hot')],
  ),
  _chart(
    id: 'ac615',
    title: 'Air conditioner outlet (6-15)',
    blurb: 'A 240 volt, 15 amp outlet for a small window or wall air conditioner: two hots and a ground, no neutral.',
    look: 'nema615',
    about: 'Two flat slots lying side by side and a ground hole: a NEMA 6-15. 240 volts, 15 amps, on 14 gauge wire and a 15 amp double breaker. No neutral.',
    wires: const [_g, _x2, _y2],
  ),
  _chart(
    id: 'v630',
    title: '240 V 30 amp outlet (6-30)',
    blurb: 'A 240 volt, 30 amp outlet for a big air conditioner, a kiln or a shop compressor: two hots and a ground, no neutral.',
    look: 'nema630',
    about: 'Two flat slots, each with a bent foot, and a round ground hole: a NEMA 6-30. 10 gauge wire and a 30 amp double breaker. No neutral.',
    wires: const [_g, _x2, _y2],
  ),
  _chart(
    id: 'v1460',
    title: 'Big 60 amp outlet (14-60)',
    blurb: 'The 60 amp, 120/240 volt outlet for a big electric car charger or a shop: two hots, a neutral and a ground.',
    look: 'nema1460',
    about: 'Four openings: two hots with a bent foot, a flat neutral and a round ground: a NEMA 14-60. It takes 4 gauge wire and a 60 amp double breaker.',
    wires: const [_g, _w, _x2, _y2],
  ),
  _chart(
    id: 'shore50',
    title: 'RV shore power twist-lock (50 amp)',
    blurb: 'The 50 amp twist-lock at a marina or an RV park: 120/240 volts, two hots, a neutral and a ground.',
    look: 'nemass50',
    about: 'A big round twist-lock with four openings in a cross: the plug goes in and turns, so the wind or the water can not pull it out. 6 gauge wire and a 50 amp double breaker.',
    wires: const [_g, _w, _x2, _y2],
  ),
  _chart(
    id: 'l520',
    title: 'Twist-lock 120 V (L5-20)',
    blurb: 'A 120 volt, 20 amp twist-lock: the plug turns and locks. Stages, shops and boats.',
    look: 'nemal520',
    about: 'Three curved slots in a circle, one with a little hook (the ground): a NEMA L5-20. Push the plug in and turn it to lock. 12 gauge wire and a 20 amp breaker.',
    wires: const [_g, _w, _h120],
  ),
  _chart(
    id: 'l530',
    title: 'Twist-lock 120 V 30 amp (L5-30)',
    blurb: 'A 120 volt, 30 amp twist-lock for a big tool, a small generator or a boat.',
    look: 'nemal530',
    about: 'Three long curved slots, one with a hook for the ground: a NEMA L5-30. 10 gauge wire and a 30 amp single breaker.',
    wires: const [_g, _w, _h120],
  ),
  _chart(
    id: 'l620',
    title: 'Twist-lock 240 V (L6-20)',
    blurb: 'A 240 volt, 20 amp twist-lock for workshop tools such as a table saw: two hots and a ground.',
    look: 'nemal620',
    about: 'Three curved slots, one with a hook for the ground, and no neutral: a NEMA L6-20. 12 gauge wire and a 20 amp double breaker.',
    wires: const [_g, _x2, _y2],
  ),
  _chart(
    id: 'l630',
    title: 'Twist-lock 240 V 30 amp (L6-30)',
    blurb: 'A 240 volt, 30 amp twist-lock for big shop machines and generators: two hots and a ground.',
    look: 'nemal630',
    about: 'Three wide curved slots, one with a hook for the ground: a NEMA L6-30. 10 gauge wire and a 30 amp double breaker. No neutral.',
    wires: const [_g, _x2, _y2],
  ),
  _chart(
    id: 'l1420',
    title: 'Generator twist-lock 20 amp (L14-20)',
    blurb: 'The 20 amp, 120/240 volt twist-lock of a smaller generator: two hots, a neutral and a ground.',
    look: 'nemal1420',
    about: 'Four short curved slots, one with a hook for the ground: a NEMA L14-20. 12 gauge wire and a 20 amp double breaker, through a transfer switch or an interlock.',
    wires: const [_g, _w, _x2, _y2],
  ),
  _chart(
    id: 'l220',
    title: 'Old twist-lock, no ground (L2-20)',
    blurb: 'An old 240 volt, 20 amp twist-lock with only two curved slots: two hots, no neutral and no ground.',
    look: 'nemal220',
    about: 'Only two curved slots: a NEMA L2-20, an old design with no ground. It is only repaired, never put in new.',
    wires: const [_x2, _y2],
  ),
  _chart(
    id: 'v715',
    title: '277 V 15 amp outlet (7-15)',
    blurb: 'A 277 volt outlet for the lights of offices and stores: one hot, a neutral and a ground. A home plug never fits it.',
    look: 'nema715',
    about: 'A flat slot on top, a short upright slot and a slanted one: a NEMA 7-15. In a 277/480 volt building the hot is brown, orange or yellow and the neutral is GREY, not white.',
    wires: const [_g, _wGrey, _h277],
  ),
  _chart(
    id: 'v720',
    title: '277 V 20 amp outlet (7-20)',
    blurb: 'A 277 volt, 20 amp outlet with a T-shaped slot: commercial lighting and machines.',
    look: 'nema720',
    about: 'A T-shaped slot, a straight slot and a ground hole, turned so a 120 volt plug never fits: a NEMA 7-20. Brown hot, grey neutral, bare ground.',
    wires: const [_g, _wGrey, _h277],
  ),
  _chart(
    id: 'v730',
    title: '277 V 30 amp outlet (7-30)',
    blurb: 'A single 277 volt, 30 amp receptacle for big commercial equipment.',
    look: 'nema730',
    about: 'A wide flat slot on top, an upright slot and a round ground hole: a NEMA 7-30. 10 gauge wire, brown hot and grey neutral.',
    wires: const [_g, _wGrey, _h277],
  ),
  _chart(
    id: 'v1820',
    title: 'Three-phase Y outlet (18-20)',
    blurb: 'A 120/208 volt three-phase outlet with three hots and a neutral, and no ground slot.',
    look: 'nema1820',
    about: 'Four slots and no ground hole: a NEMA 18-20, for three-phase machines that also need 120 volts. Black, red and blue are the three phases; the white is the neutral.',
    wires: const [_w, _x3, _y3, _z3],
  ),
  _chart(
    id: 'l2230',
    title: 'Twist-lock 277/480 V (L22-30)',
    blurb: 'A 30 amp, 277/480 volt three-phase twist-lock for factories: three hots, a neutral and a ground.',
    look: 'nemal2230',
    about: 'Five curved slots: a NEMA L22-30. The 480 volt phases are brown, orange and yellow, and the neutral is grey. This is factory power, only for trained electricians.',
    wires: const [_gGreen, _wGrey, _x480, _y480, _z480],
  ),
  _chart(
    id: 'p1520',
    title: 'Three-phase 20 amp outlet (15-20)',
    blurb: 'A 250 volt, 20 amp three-phase outlet: three hots and a ground, no neutral.',
    look: 'nema1520',
    about: 'Three slots (one with a T foot) and a ground hole: a NEMA 15-20. Black, red and blue are the three phases. No neutral.',
    wires: const [_g, _x3, _y3, _z3],
  ),
  _chart(
    id: 'p1530',
    title: 'Three-phase 30 amp outlet (15-30)',
    blurb: 'A 250 volt, 30 amp three-phase outlet for shop machines: three hots and a ground.',
    look: 'nema1530',
    about: 'Three slots with bent feet and a ground hole: a NEMA 15-30. 10 gauge wire and a 30 amp three-pole breaker.',
    wires: const [_g, _x3, _y3, _z3],
  ),
  _chart(
    id: 'p1550',
    title: 'Three-phase 50 amp outlet (15-50)',
    blurb: 'A 250 volt, 50 amp three-phase outlet: three wedge-shaped slots and a round ground.',
    look: 'nema1550',
    about: 'Three wedge slots and a round ground hole at the top: a NEMA 15-50. 6 gauge wire and a 50 amp three-pole breaker.',
    wires: const [_g, _x3, _y3, _z3],
  ),
  _chart(
    id: 'p1560',
    title: 'Three-phase 60 amp outlet (15-60)',
    blurb: 'A 250 volt, 60 amp three-phase outlet for the biggest shop machines.',
    look: 'nema1560',
    about: 'Two upright slots, a flat one at the bottom and a ground at the top: a NEMA 15-60. 4 gauge wire and a 60 amp three-pole breaker.',
    wires: const [_g, _x3, _y3, _z3],
  ),
  _chart(
    id: 'l1530',
    title: 'Three-phase twist-lock (L15-30)',
    blurb: 'A 250 volt, 30 amp three-phase twist-lock: three hots and a ground.',
    look: 'nemal1530',
    about: 'Four curved slots, one with a hook (the ground): a NEMA L15-30. Black, red and blue are the three phases.',
    wires: const [_g, _x3, _y3, _z3],
  ),
  _chart(
    id: 'l2130',
    title: 'Twist-lock 5-wire (L21-30)',
    blurb: 'A 120/208 volt three-phase twist-lock with five wires: three hots, a neutral and a ground.',
    look: 'nemal2130',
    about: 'Five curved slots: a NEMA L21-30. Black, red and blue are the three phases, white is the neutral and bare copper the ground.',
    wires: const [_g, _w, _x3, _y3, _z3],
  ),
  _chart(
    id: 'l1630',
    title: 'Twist-lock 480 V three-phase (L16-30)',
    blurb: 'A 480 volt, 30 amp three-phase twist-lock for industry: three hots and a ground.',
    look: 'nemal1630',
    about: 'Four curved slots: a NEMA L16-30. The 480 volt phases are brown, orange and yellow. No neutral.',
    wires: const [_gGreen, _x480, _y480, _z480],
  ),
];

/// The slots of a twist-lock: one curved slot (drawn along the circle) at each angle in degrees, the ground one with a little hook inward.
List<NemaSlot> _twist(List<double> degrees, {double r = 0.36, double len = 0.22, int? hook}) => [
      for (var i = 0; i < degrees.length; i++) ...[
        NemaSlot(math.cos(degrees[i] * math.pi / 180) * r, math.sin(degrees[i] * math.pi / 180) * r, 0.075, len, angle: degrees[i] * math.pi / 180),
        if (hook == i) NemaSlot(math.cos(degrees[i] * math.pi / 180) * (r - 0.09), math.sin(degrees[i] * math.pi / 180) * (r - 0.09), 0.13, 0.06, angle: degrees[i] * math.pi / 180),
      ],
    ];

/// The colour of the round face: most are dark, the 1-15, the 6-15 and the 277 volt ones are white and the three-phase Y is grey.
Color nemaFaceColor(String layout) => switch (layout) {
      'nema115' || 'nema615' || 'nema715' || 'nema720' || 'nema730' => const Color(0xFFEDEBE4),
      'nema1820' => const Color(0xFFB9B5AC),
      _ => const Color(0xFF3B2F2A),
    };

/// The wrong-hint of the four dryer and range outlets.
String _bigHint(String chip, Hookup h, {required bool hasGround}) => switch (chip) {
      'ground' => 'The bare copper ground wire only goes on the GREEN screw.',
      'neutral' => 'The white neutral wire goes on the silver W screw.',
      _ => h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : 'The black and red hot wires go on the two brass screws, X and Y. The silver W screw is for the neutral.',
    };

final List<ElectricalLesson> kApplianceLessons = [
  ElectricalLesson(
    id: 'dryer4',
    title: 'Dryer outlet, 4-wire (NEMA 14-30)',
    blurb: 'The dryer outlet of every new house: 30 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G).',
    look: 'nema1430',
    strict: true,
    steps: const [
      ..._intro,
      'Look at the face: an L-shaped slot (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole (G, ground). That is a NEMA 14-30, the 4-wire dryer outlet. It takes 10 gauge wire and a 30 amp double breaker.',
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
      Hookup(idGreen, 'Green screw G: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'Silver screw W: NEUTRAL', {'neutral'}, 'The white neutral wire goes on the silver W screw.', role: 'neutral'),
      Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires (black and red) go on the two brass screws, X and Y, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires (black and red) go on the two brass screws, X and Y, in either order.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => _bigHint(chip, h, hasGround: true),
  ),
  ElectricalLesson(
    id: 'dryer3',
    title: 'Dryer outlet, 3-wire (NEMA 10-30)',
    blurb: 'The dryer outlet of older houses (before 1996): 30 amp, 240 volts. Two hots and a neutral that also grounds the dryer. No separate ground.',
    look: 'nema1030',
    strict: true,
    needsGround: false,
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'Look at the face: an L-shaped slot (W, neutral) and two slanted slots (X and Y, hot), and no ground hole. That is a NEMA 10-30, the old 3-wire dryer outlet. The neutral also grounds the dryer, which is only allowed in old houses.',
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
      Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, X and Y, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, X and Y, in either order.', role: 'hot'),
    ],
    solution: const {idSilverTop: 'neutral', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => _bigHint(chip, h, hasGround: false),
  ),
  ElectricalLesson(
    id: 'range4',
    title: 'Range outlet, 4-wire (NEMA 14-50)',
    blurb: 'The electric stove outlet of every new house: 50 amp, 240 volts. Two hots (X, Y), a neutral (W) and a separate ground (G). Also used for car chargers.',
    look: 'nema1450',
    strict: true,
    steps: const [
      ..._intro,
      'Look at the face: a straight slot at the top (W, neutral), two straight slots at the sides (X and Y, hot) and a round hole at the bottom (G, ground). That is a NEMA 14-50, the 4-wire range outlet. It takes 6 gauge wire and a 50 amp double breaker.',
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
      Hookup(idGreen, 'Green screw G: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'Silver screw W: NEUTRAL', {'neutral'}, 'The white neutral wire goes on the silver W screw.', role: 'neutral'),
      Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires (black and red) go on the two brass screws, X and Y, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires (black and red) go on the two brass screws, X and Y, in either order.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => _bigHint(chip, h, hasGround: true),
  ),
  ElectricalLesson(
    id: 'range3',
    title: 'Range outlet, 3-wire (NEMA 10-50)',
    blurb: 'The electric stove outlet of older houses (before 1996): 50 amp, 240 volts. Two hots and a neutral that also grounds the range. No separate ground.',
    look: 'nema1050',
    strict: true,
    needsGround: false,
    steps: const [
      'Turn the breaker OFF and test that the wires are dead.',
      'Look at the face: two slanted slots at the top (X and Y, hot) and one straight slot at the bottom (W, neutral), and no ground hole. That is a NEMA 10-50, the old 3-wire range outlet.',
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
      Hookup(idBrassTop, 'Brass screw X: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, X and Y, in either order.', role: 'hot'),
      Hookup(idBrassBottom, 'Brass screw Y: HOT', {'hot1', 'hot2'}, 'The two hot wires go on the two brass screws, X and Y, in either order.', role: 'hot'),
    ],
    solution: const {idSilverTop: 'neutral', idBrassTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => _bigHint(chip, h, hasGround: false),
  ),
  ElectricalLesson(
    id: 'washer',
    title: 'Washing machine outlet (NEMA 5-20)',
    blurb: 'A dedicated 120 volt, 20 amp outlet for the washer, with a T-shaped neutral slot. Near water, so it needs GFCI protection.',
    look: 'nema520',
    strict: true,
    steps: const [
      ..._intro,
      'This outlet has its own 20 amp breaker and 12 gauge wire (a yellow cable): the washer must not share its circuit with anything else. The T-shaped slot tells you it takes both 15 and 20 amp plugs. In a laundry area the new code asks for GFCI protection, from a GFCI breaker or a GFCI outlet before it.',
      'Fasten the bare copper ground to the GREEN screw.',
      'Fasten the white neutral to a SILVER screw.',
      'Fasten the black hot to a BRASS screw.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Bare copper · ground', _copper, Colors.white, role: 'ground'),
      WireChoice('neutral', 'White · neutral', _white, Color(0xFF111827), role: 'neutral'),
      WireChoice('hot', 'Black · hot', _black, Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'Green screw: GROUND', {'ground'}, 'The bare copper ground goes on the green screw.', role: 'ground'),
      Hookup(idSilverTop, 'Silver screw: NEUTRAL', {'neutral'}, 'The white neutral wire goes on a silver screw.', role: 'neutral'),
      Hookup(idBrassTop, 'Brass screw: HOT', {'hot'}, 'The black hot wire goes on a brass screw.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idSilverTop: 'neutral', idBrassTop: 'hot'},
    wrongHint: (chip, h) => switch (chip) {
      'ground' => 'The bare copper ground wire only goes on the GREEN screw.',
      'neutral' => 'The white neutral wire goes on a silver screw.',
      _ => h.id == idGreen ? 'A hot wire never goes on the green ground screw.' : 'The black hot wire goes on a brass screw.',
    },
  ),
  ElectricalLesson(
    id: 'cord3',
    title: 'Dryer or range cord, 3-wire hookup',
    blurb: 'At the back of the appliance: black to the left terminal, white (neutral) to the middle one, red to the right one. The ground strap STAYS: it joins the neutral to the frame.',
    look: 'terminal3',
    strict: true,
    needsGround: false,
    steps: const [
      ..._intro,
      'Look at the terminal block. There is a metal GROUND STRAP from the middle terminal to the frame of the appliance. On a 3-wire cord it stays on: the neutral also grounds the frame.',
      'Fasten the white neutral to the MIDDLE terminal, under the strap.',
      'Fasten the black wire to the LEFT terminal.',
      'Fasten the red wire to the RIGHT terminal.',
      ..._tail,
    ],
    chips: const [
      WireChoice('neutral', 'White · neutral (middle)', _white, Color(0xFF111827), role: 'neutral'),
      WireChoice('hot1', 'Black · hot (left)', _black, Colors.white, role: 'hot'),
      WireChoice('hot2', 'Red · hot (right)', _red, Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idBrassTop, 'MIDDLE terminal: NEUTRAL (white)', {'neutral'}, 'The white neutral wire goes on the middle terminal.', role: 'neutral'),
      Hookup(idSilverTop, 'LEFT terminal: black', {'hot1'}, 'The black wire goes on the left terminal.', role: 'hot'),
      Hookup(idBrassBottom, 'RIGHT terminal: red', {'hot2'}, 'The red wire goes on the right terminal.', role: 'hot'),
    ],
    solution: const {idBrassTop: 'neutral', idSilverTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => switch (chip) {
      'neutral' => 'The white neutral wire goes on the MIDDLE terminal, the one with the ground strap.',
      'hot1' => 'The black wire goes on the LEFT terminal.',
      _ => 'The red wire goes on the RIGHT terminal.',
    },
  ),
  ElectricalLesson(
    id: 'cord4',
    title: 'Dryer or range cord, 4-wire hookup',
    blurb: 'At the back of the appliance: REMOVE the ground strap first, then black left, white (neutral) middle, red right, and the green ground wire to the frame.',
    look: 'terminal4',
    strict: true,
    steps: const [
      ..._intro,
      'Take the metal GROUND STRAP off: tap it. On a 4-wire cord the neutral must NOT touch the frame, because the green wire grounds the frame.',
      'Fasten the green ground wire to the GREEN frame screw where the strap was.',
      'Fasten the white neutral to the MIDDLE terminal.',
      'Fasten the black wire to the LEFT terminal.',
      'Fasten the red wire to the RIGHT terminal.',
      ..._tail,
    ],
    chips: const [
      WireChoice('ground', 'Green · ground (to the frame)', _stripe, Colors.white, role: 'ground'),
      WireChoice('neutral', 'White · neutral (middle)', _white, Color(0xFF111827), role: 'neutral'),
      WireChoice('hot1', 'Black · hot (left)', _black, Colors.white, role: 'hot'),
      WireChoice('hot2', 'Red · hot (right)', _red, Colors.white, role: 'hot'),
    ],
    hookups: const [
      Hookup(idGreen, 'FRAME screw: GROUND (green)', {'ground'}, 'The green ground wire goes on the screw on the frame, where the strap was.', role: 'ground'),
      Hookup(idBrassTop, 'MIDDLE terminal: NEUTRAL (white)', {'neutral'}, 'The white neutral wire goes on the middle terminal.', role: 'neutral'),
      Hookup(idSilverTop, 'LEFT terminal: black', {'hot1'}, 'The black wire goes on the left terminal.', role: 'hot'),
      Hookup(idBrassBottom, 'RIGHT terminal: red', {'hot2'}, 'The red wire goes on the right terminal.', role: 'hot'),
    ],
    solution: const {idGreen: 'ground', idBrassTop: 'neutral', idSilverTop: 'hot1', idBrassBottom: 'hot2'},
    wrongHint: (chip, h) => switch (chip) {
      'ground' => 'The green ground wire goes on the frame screw, where the strap was.',
      'neutral' => 'The white neutral wire goes on the MIDDLE terminal.',
      'hot1' => 'The black wire goes on the LEFT terminal.',
      _ => 'The red wire goes on the RIGHT terminal.',
    },
  ),
];

/// One slot or hole on the round face of a big-appliance outlet, in the units of the lessons' bench (the disc is 0.64 across the middle).
class NemaSlot {
  const NemaSlot(this.x, this.y, this.w, this.h, {this.angle = 0, this.round = false});
  final double x, y, w, h, angle;
  final bool round;
}

/// Which face a kind of outlet has when it is a round one (dryer, range, washer, 240 volt), or null for the plain wall outlets.
String? nemaLayoutOf(String kind) => const {
      'dryer3': 'nema1030',
      'dryer4': 'nema1430',
      'range3': 'nema1050',
      'range4': 'nema1450',
      'washer': 'nema520',
      'v240three': 'nema1030',
      'v240four': 'nema1430',
      'v240only': 'nema620',
      'outlet20': 'nema520',
      'ev1450': 'nema1450',
      'welder650': 'nema620',
      'rv30': 'nematt30',
      'gen1430': 'nemal1430',
    }[kind] ??
    (kChartOutletKinds.contains(kind) ? kChartOutletLessons.firstWhere((l) => l.id == kind).look : null);

/// The slots of a round face, the same everywhere an outlet is drawn (the bench, the room, the framed house).
List<NemaSlot> nemaSlotsFor(String layout) {
  const ellA = [NemaSlot(0, 0, 0.075, 0.3), NemaSlot(0.09, -0.115, 0.2, 0.075)];
  List<NemaSlot> ell(double x, double y) => [for (final s in ellA) NemaSlot(x + s.x, y + s.y, s.w, s.h)];
  return switch (layout) {
    'nema1030' => [...ell(-0.05, 0.14), const NemaSlot(-0.3, -0.24, 0.075, 0.3, angle: -0.5), const NemaSlot(0.3, -0.24, 0.075, 0.3, angle: 0.5)],
    'nema1430' => [...ell(-0.05, 0.28), const NemaSlot(-0.4, -0.04, 0.075, 0.32), const NemaSlot(0.4, -0.04, 0.075, 0.32), const NemaSlot(0, -0.4, 0.13, 0.13, round: true)],
    'nema1050' => [const NemaSlot(-0.3, 0.2, 0.075, 0.3, angle: 0.5), const NemaSlot(0.3, 0.2, 0.075, 0.3, angle: -0.5), const NemaSlot(0, -0.26, 0.075, 0.32)],
    'nema1450' => [const NemaSlot(0, 0.3, 0.075, 0.28), const NemaSlot(-0.4, -0.04, 0.075, 0.32), const NemaSlot(0.4, -0.04, 0.075, 0.32), const NemaSlot(0, -0.4, 0.13, 0.13, round: true)],
    'nema620' => [const NemaSlot(0, 0.2, 0.32, 0.075), const NemaSlot(0, 0.0, 0.32, 0.075), const NemaSlot(0.15, -0.07, 0.075, 0.14), const NemaSlot(0, -0.36, 0.13, 0.13, round: true)],
    'nematt30' => [const NemaSlot(-0.22, 0.1, 0.075, 0.3, angle: 0.45), const NemaSlot(0.22, 0.1, 0.075, 0.3, angle: -0.45), const NemaSlot(0, -0.32, 0.13, 0.13, round: true)],
    'nemal1430' => [for (var i = 0; i < 4; i++) NemaSlot(math.cos(math.pi / 4 + i * math.pi / 2) * 0.36, math.sin(math.pi / 4 + i * math.pi / 2) * 0.36, 0.075, 0.22, angle: math.pi / 4 + i * math.pi / 2), const NemaSlot(0, 0, 0.13, 0.13, round: true)],
    // The outlets of the charts.
    'nema115' => [const NemaSlot(-0.17, 0.02, 0.075, 0.34), const NemaSlot(0.17, 0.02, 0.075, 0.26)],
    'nema615' => [const NemaSlot(-0.22, 0.1, 0.26, 0.075), const NemaSlot(0.22, 0.1, 0.26, 0.075), const NemaSlot(0, -0.3, 0.13, 0.13, round: true)],
    'nema630' => [
        const NemaSlot(-0.24, 0.06, 0.26, 0.075), const NemaSlot(-0.15, 0.17, 0.075, 0.2),
        const NemaSlot(0.24, 0.06, 0.26, 0.075), const NemaSlot(0.33, 0.17, 0.075, 0.2),
        const NemaSlot(0, -0.32, 0.13, 0.13, round: true),
      ],
    'nema1460' => [
        const NemaSlot(0, 0.32, 0.2, 0.075),
        const NemaSlot(-0.38, -0.02, 0.075, 0.32), const NemaSlot(-0.31, 0.12, 0.14, 0.06),
        const NemaSlot(0.38, -0.02, 0.075, 0.32), const NemaSlot(0.31, 0.12, 0.14, 0.06),
        const NemaSlot(0, -0.4, 0.13, 0.13, round: true),
      ],
    'nemass50' => [const NemaSlot(0, 0.36, 0.13, 0.2), const NemaSlot(-0.34, 0, 0.24, 0.08), const NemaSlot(0.34, 0, 0.24, 0.08), const NemaSlot(0, -0.34, 0.08, 0.24)],
    'nemal520' => _twist(const [40, 140, 270], hook: 2),
    'nemal530' => _twist(const [35, 145, 270], len: 0.28, hook: 2),
    'nemal620' => _twist(const [10, 170, 270], hook: 2),
    'nemal630' => _twist(const [50, 130, 270], len: 0.28, r: 0.4, hook: 2),
    'nemal1420' => _twist(const [45, 135, 225, 315], len: 0.17, hook: 2),
    'nemal220' => _twist(const [0, 180], len: 0.3),
    'nema715' => [const NemaSlot(0, 0.32, 0.36, 0.075), const NemaSlot(-0.18, 0.02, 0.075, 0.2), NemaSlot(0.14, -0.08, 0.075, 0.34, angle: -math.pi / 4)],
    'nema720' => [const NemaSlot(-0.18, 0.1, 0.075, 0.3), const NemaSlot(-0.3, 0.04, 0.2, 0.075), const NemaSlot(0.2, 0.1, 0.075, 0.26), const NemaSlot(0, -0.3, 0.13, 0.13, round: true)],
    'nema730' => [const NemaSlot(0, 0.3, 0.4, 0.075), const NemaSlot(-0.18, 0, 0.075, 0.26), const NemaSlot(0.18, 0, 0.075, 0.26), const NemaSlot(0, -0.32, 0.13, 0.13, round: true)],
    'nema1820' => [const NemaSlot(-0.24, 0.12, 0.075, 0.3), const NemaSlot(0.24, 0.12, 0.075, 0.3), const NemaSlot(0, 0.4, 0.22, 0.075), const NemaSlot(0, -0.3, 0.075, 0.24)],
    'nemal2230' => _twist(const [54, 126, 198, 270, 342], r: 0.4, len: 0.17, hook: 3),
    'nema1520' => [
        const NemaSlot(-0.3, 0.1, 0.075, 0.28), const NemaSlot(-0.4, 0.04, 0.16, 0.075),
        const NemaSlot(0.3, 0.1, 0.075, 0.28), const NemaSlot(0, 0.38, 0.22, 0.075),
        const NemaSlot(0, -0.32, 0.13, 0.13, round: true),
      ],
    'nema1530' => [
        const NemaSlot(-0.3, 0.1, 0.075, 0.28), const NemaSlot(-0.4, 0.2, 0.16, 0.075),
        const NemaSlot(0.3, 0.1, 0.075, 0.28), const NemaSlot(0.4, 0.2, 0.16, 0.075),
        const NemaSlot(0, 0.38, 0.22, 0.075),
        const NemaSlot(0, -0.32, 0.13, 0.13, round: true),
      ],
    'nema1550' => [const NemaSlot(0, 0.38, 0.14, 0.14, round: true), const NemaSlot(-0.3, 0.02, 0.24, 0.11, angle: -0.35), const NemaSlot(0.3, 0.02, 0.24, 0.11, angle: 0.35), const NemaSlot(0, -0.32, 0.11, 0.24)],
    'nema1560' => [const NemaSlot(0, 0.38, 0.13, 0.17), const NemaSlot(-0.38, 0, 0.075, 0.3), const NemaSlot(0.38, 0, 0.075, 0.3), const NemaSlot(-0.1, 0.06, 0.1, 0.075), const NemaSlot(0, -0.34, 0.28, 0.075)],
    'nemal1530' => _twist(const [0, 90, 180, 270], hook: 3),
    'nemal2130' => _twist(const [90, 162, 234, 306, 18], r: 0.4, len: 0.17, hook: 2),
    'nemal1630' => _twist(const [30, 110, 190, 270], len: 0.2, hook: 3),
    _ => [const NemaSlot(0.2, 0.12, 0.075, 0.3), const NemaSlot(-0.2, 0.12, 0.075, 0.3), const NemaSlot(-0.3, 0.12, 0.14, 0.075), const NemaSlot(0, -0.3, 0.13, 0.13, round: true)],
  };
}
