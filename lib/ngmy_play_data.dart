import 'dart:convert';

import 'package:flutter/services.dart';

/// Loads and caches the bundled open-data files (periodic table, sky, plates).
class NgmyPlayData {
  static final Map<String, Future<dynamic>> _cache = {};

  static Future<dynamic> json(String name) => _cache[name] ??= rootBundle.loadString('assets/data/$name.json').then(jsonDecode);
}

/// What happens when two elements meet. Keys are sorted symbols joined by '+'.
const Map<String, (String, String)> kCompounds = {
  'H+O': ('Water (H2O)', 'Two hydrogens hold one oxygen. Every living thing needs it.'),
  'Cl+Na': ('Table salt (NaCl)', 'A soft metal and a poisonous gas join into the salt on your food.'),
  'C+O': ('Carbon dioxide (CO2)', 'What you breathe out and plants breathe in.'),
  'Fe+O': ('Rust (iron oxide)', 'Iron slowly joins with oxygen from the air.'),
  'Cl+H': ('Hydrochloric acid (HCl)', 'Strong acid. Your stomach makes a weak version to digest food.'),
  'H+N': ('Ammonia (NH3)', 'Used in cleaners and to make plant food.'),
  'C+H': ('Methane (CH4)', 'The gas in natural gas, and what cows burp.'),
  'Ca+O': ('Quicklime (CaO)', 'Made by heating limestone. Used in cement.'),
  'Mg+O': ('Magnesia (MgO)', 'What is left after magnesium burns with a bright white flame.'),
  'Na+O': ('Sodium oxide (Na2O)', 'Reacts strongly with water to make lye.'),
  'Al+O': ('Alumina (Al2O3)', 'Rubies and sapphires are made of this.'),
  'O+Si': ('Silica (SiO2)', 'Sand and quartz. Glass is made from it.'),
  'H+H': ('Hydrogen gas (H2)', 'The lightest gas. Two atoms hold hands.'),
  'O+O': ('Oxygen gas (O2)', 'The air you breathe is one fifth of this.'),
  'N+N': ('Nitrogen gas (N2)', 'Four fifths of the air around you.'),
  'Ag+S': ('Tarnish (silver sulfide)', 'Why silver spoons go dark.'),
  'Cu+O': ('Copper oxide', 'The green-black coat on old copper.'),
  'Cl+K': ('Potassium chloride (KCl)', 'A salt substitute. Your nerves use potassium.'),
  'C+C': ('Diamond or graphite', 'Pure carbon. Pencils and diamonds are the same atom, joined differently.'),
  'F+H': ('Hydrogen fluoride (HF)', 'Very dangerous acid. Fluoride in toothpaste is a safe cousin.'),
  'O+S': ('Sulfur dioxide (SO2)', 'The smell of a struck match and of volcanoes.'),
};
