import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/services.dart' show rootBundle;

import 'ngmy_studio_kit.dart';

/// One country: its outline (lists of lon/lat rings) and what we know about it.
class UCountry {
  UCountry({required this.name, required this.code, required this.continent, required this.subregion, required this.pop, required this.gdp, required this.income, required this.cLon, required this.cLat, required this.rings}) {
    // Pre-compute so the globe can draw thousands of points quickly.
    var minLon = 999.0, maxLon = -999.0, minLat = 999.0, maxLat = -999.0;
    for (final r in rings) {
      for (final p in r) {
        if (p[0] < minLon) minLon = p[0];
        if (p[0] > maxLon) maxLon = p[0];
        if (p[1] < minLat) minLat = p[1];
        if (p[1] > maxLat) maxLat = p[1];
      }
    }
    this.minLon = minLon;
    this.maxLon = maxLon;
    this.minLat = minLat;
    this.maxLat = maxLat;
    // The biggest piece decides how far to zoom: tiny islands should not hide a big country.
    var bestSpan = 0.0;
    for (final r in rings) {
      var a = 999.0, b = -999.0, c = 999.0, d = -999.0;
      for (final p in r) {
        if (p[0] < a) a = p[0];
        if (p[0] > b) b = p[0];
        if (p[1] < c) c = p[1];
        if (p[1] > d) d = p[1];
      }
      final span = math.max(b - a, d - c);
      if (span > bestSpan) bestSpan = span;
    }
    span = bestSpan;
    areaKm2 = _area();
  }

  final String name;
  final String code;
  final String continent;
  final String subregion;
  final double pop;
  final double gdp; // millions of US dollars
  final String income;
  final double cLon;
  final double cLat;
  final List<List<List<double>>> rings;
  late final double minLon, maxLon, minLat, maxLat;
  late final double span;
  late final double areaKm2;

  String get capital => kCapitals[code] ?? '—';

  double _area() {
    var total = 0.0;
    for (final r in rings) {
      var a = 0.0;
      for (var i = 0; i < r.length - 1; i++) {
        final lat = (r[i][1] + r[i + 1][1]) / 2 * math.pi / 180;
        final x0 = r[i][0] * math.cos(lat), y0 = r[i][1];
        final x1 = r[i + 1][0] * math.cos(lat), y1 = r[i + 1][1];
        a += x0 * y1 - x1 * y0;
      }
      total += a.abs() / 2;
    }
    return total * 111.32 * 111.32;
  }

  bool contains(double lon, double lat) {
    if (lon < minLon || lon > maxLon || lat < minLat || lat > maxLat) return false;
    for (final r in rings) {
      var inside = false;
      for (var i = 0, j = r.length - 1; i < r.length; j = i++) {
        final xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1];
        if ((yi > lat) != (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) inside = !inside;
      }
      if (inside) return true;
    }
    return false;
  }
}

class UWorld {
  UWorld(this.countries);
  final List<UCountry> countries;

  static UWorld? _cached;
  static Future<UWorld>? _loading;

  static Future<UWorld> load() => _loading ??= _read();

  static Future<UWorld> _read() async {
    final raw = await rootBundle.loadString('assets/data/world110.json');
    return _cached = parse(raw);
  }

  static UWorld parse(String raw) {
    final list = jsonDecode(raw) as List;
    final out = <UCountry>[];
    for (final e in list) {
      final m = e as Map<String, dynamic>;
      final rings = [
        for (final r in (m['r'] as List)) [for (final p in (r as List)) [(p[0] as num).toDouble(), (p[1] as num).toDouble()]],
      ];
      out.add(UCountry(
        name: m['n'] as String,
        code: m['a'] as String,
        continent: m['ct'] as String,
        subregion: m['sr'] as String,
        pop: (m['pop'] as num).toDouble(),
        gdp: (m['gdp'] as num).toDouble(),
        income: ((m['inc'] as String).replaceFirst(RegExp(r'^\d\.\s*'), '')),
        cLon: (m['c'][0] as num).toDouble(),
        cLat: (m['c'][1] as num).toDouble(),
        rings: rings,
      ));
    }
    return UWorld(out);
  }

  UCountry? at(double lon, double lat) {
    var l = lon;
    while (l > 180) {
      l -= 360;
    }
    while (l < -180) {
      l += 360;
    }
    UCountry? best;
    for (final c in countries) {
      if (c.contains(l, lat)) {
        // Antarctica is huge: let a smaller country on top win.
        if (best == null || c.span < best.span) best = c;
      }
    }
    return best;
  }
}

String formatBig(double v) {
  if (v >= 1e12) return '${(v / 1e12).toStringAsFixed(1)} trillion';
  if (v >= 1e9) return '${(v / 1e9).toStringAsFixed(2)} billion';
  if (v >= 1e6) return '${(v / 1e6).toStringAsFixed(1)} million';
  if (v >= 1e3) return '${(v / 1e3).toStringAsFixed(1)} thousand';
  return v.toStringAsFixed(0);
}

String withCommas(num v) {
  final s = v.round().toString();
  final b = StringBuffer();
  for (var i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 == 0) b.write(',');
    b.write(s[i]);
  }
  return b.toString();
}

const Map<String, String> kCapitals = {
  'FJI': 'Suva', 'TZA': 'Dodoma', 'SAH': 'El Aaiún (disputed)', 'CAN': 'Ottawa', 'USA': 'Washington, D.C.', 'KAZ': 'Astana', 'UZB': 'Tashkent', 'PNG': 'Port Moresby',
  'IDN': 'Jakarta', 'ARG': 'Buenos Aires', 'CHL': 'Santiago', 'COD': 'Kinshasa', 'SOM': 'Mogadishu', 'KEN': 'Nairobi', 'SDN': 'Khartoum', 'TCD': "N'Djamena",
  'HTI': 'Port-au-Prince', 'DOM': 'Santo Domingo', 'RUS': 'Moscow', 'BHS': 'Nassau', 'FLK': 'Stanley', 'NOR': 'Oslo', 'GRL': 'Nuuk', 'ATF': 'Port-aux-Français',
  'TLS': 'Dili', 'ZAF': 'Pretoria, Cape Town, Bloemfontein', 'LSO': 'Maseru', 'MEX': 'Mexico City', 'URY': 'Montevideo', 'BRA': 'Brasília', 'BOL': 'Sucre and La Paz',
  'PER': 'Lima', 'COL': 'Bogotá', 'PAN': 'Panama City', 'CRI': 'San José', 'NIC': 'Managua', 'HND': 'Tegucigalpa', 'SLV': 'San Salvador', 'GTM': 'Guatemala City',
  'BLZ': 'Belmopan', 'VEN': 'Caracas', 'GUY': 'Georgetown', 'SUR': 'Paramaribo', 'FRA': 'Paris', 'ECU': 'Quito', 'PRI': 'San Juan', 'JAM': 'Kingston', 'CUB': 'Havana',
  'ZWE': 'Harare', 'BWA': 'Gaborone', 'NAM': 'Windhoek', 'SEN': 'Dakar', 'MLI': 'Bamako', 'MRT': 'Nouakchott', 'BEN': 'Porto-Novo', 'NER': 'Niamey', 'NGA': 'Abuja',
  'CMR': 'Yaoundé', 'TGO': 'Lomé', 'GHA': 'Accra', 'CIV': 'Yamoussoukro', 'GIN': 'Conakry', 'GNB': 'Bissau', 'LBR': 'Monrovia', 'SLE': 'Freetown', 'BFA': 'Ouagadougou',
  'CAF': 'Bangui', 'COG': 'Brazzaville', 'GAB': 'Libreville', 'GNQ': 'Malabo', 'ZMB': 'Lusaka', 'MWI': 'Lilongwe', 'MOZ': 'Maputo', 'SWZ': 'Mbabane', 'AGO': 'Luanda',
  'BDI': 'Gitega', 'ISR': 'Jerusalem', 'LBN': 'Beirut', 'MDG': 'Antananarivo', 'PSX': 'Ramallah (seat of government)', 'GMB': 'Banjul', 'TUN': 'Tunis', 'DZA': 'Algiers',
  'JOR': 'Amman', 'ARE': 'Abu Dhabi', 'QAT': 'Doha', 'KWT': 'Kuwait City', 'IRQ': 'Baghdad', 'OMN': 'Muscat', 'VUT': 'Port Vila', 'KHM': 'Phnom Penh', 'THA': 'Bangkok',
  'LAO': 'Vientiane', 'MMR': 'Naypyidaw', 'VNM': 'Hanoi', 'PRK': 'Pyongyang', 'KOR': 'Seoul', 'MNG': 'Ulaanbaatar', 'IND': 'New Delhi', 'BGD': 'Dhaka', 'BTN': 'Thimphu',
  'NPL': 'Kathmandu', 'PAK': 'Islamabad', 'AFG': 'Kabul', 'TJK': 'Dushanbe', 'KGZ': 'Bishkek', 'TKM': 'Ashgabat', 'IRN': 'Tehran', 'SYR': 'Damascus', 'ARM': 'Yerevan',
  'SWE': 'Stockholm', 'BLR': 'Minsk', 'UKR': 'Kyiv', 'POL': 'Warsaw', 'AUT': 'Vienna', 'HUN': 'Budapest', 'MDA': 'Chișinău', 'ROU': 'Bucharest', 'LTU': 'Vilnius',
  'LVA': 'Riga', 'EST': 'Tallinn', 'DEU': 'Berlin', 'BGR': 'Sofia', 'GRC': 'Athens', 'TUR': 'Ankara', 'ALB': 'Tirana', 'HRV': 'Zagreb', 'CHE': 'Bern', 'LUX': 'Luxembourg',
  'BEL': 'Brussels', 'NLD': 'Amsterdam', 'PRT': 'Lisbon', 'ESP': 'Madrid', 'IRL': 'Dublin', 'NCL': 'Nouméa', 'SLB': 'Honiara', 'NZL': 'Wellington', 'AUS': 'Canberra',
  'LKA': 'Sri Jayawardenepura Kotte', 'CHN': 'Beijing', 'TWN': 'Taipei', 'ITA': 'Rome', 'DNK': 'Copenhagen', 'GBR': 'London', 'ISL': 'Reykjavík', 'AZE': 'Baku',
  'GEO': 'Tbilisi', 'PHL': 'Manila', 'MYS': 'Kuala Lumpur', 'BRN': 'Bandar Seri Begawan', 'SVN': 'Ljubljana', 'FIN': 'Helsinki', 'SVK': 'Bratislava', 'CZE': 'Prague',
  'ERI': 'Asmara', 'JPN': 'Tokyo', 'PRY': 'Asunción', 'YEM': "Sana'a", 'SAU': 'Riyadh', 'ATA': 'No capital (research stations)', 'CYN': 'North Nicosia', 'CYP': 'Nicosia',
  'MAR': 'Rabat', 'EGY': 'Cairo', 'LBY': 'Tripoli', 'ETH': 'Addis Ababa', 'DJI': 'Djibouti', 'SOL': 'Hargeisa', 'UGA': 'Kampala', 'RWA': 'Kigali', 'BIH': 'Sarajevo',
  'MKD': 'Skopje', 'SRB': 'Belgrade', 'MNE': 'Podgorica', 'KOS': 'Pristina', 'TTO': 'Port of Spain', 'SDS': 'Juba',
};

/// A world of the solar system and what makes it special.
class UBody {
  const UBody(this.name, this.kind, this.au, this.radiusKm, this.periodDays, this.dayHours, this.gravity, this.moons, this.tempC, this.fact, this.colorValue, {this.lengthOfDay = ''});
  final String name;
  final String kind; // star, planet, dwarf, moon
  final double au; // average distance from the Sun
  final double radiusKm;
  final double periodDays; // one trip round the Sun
  final double dayHours; // one spin
  final double gravity; // m/s² at the surface
  final int moons;
  final double tempC;
  final String fact;
  final int colorValue;
  final String lengthOfDay;

  double get diameterKm => radiusKm * 2;
}

const List<UBody> kBodies = [
  UBody('Sun', 'star', 0, 696340, 0, 609.6, 274, 0, 5500, 'It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.', 0xFFFBBF24),
  UBody('Mercury', 'planet', 0.39, 2440, 88, 1407.6, 3.70, 0, 167, 'A year is only 88 days, but one sunrise to the next takes 176 Earth days.', 0xFF9CA3AF),
  UBody('Venus', 'planet', 0.72, 6052, 224.7, 5832.5, 8.87, 0, 464, 'The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.', 0xFFFCD34D),
  UBody('Earth', 'planet', 1.0, 6371, 365.25, 24, 9.81, 1, 15, 'The only world we know with life. About 71% of its surface is ocean.', 0xFF38BDF8),
  UBody('Mars', 'planet', 1.52, 3390, 687, 24.6, 3.71, 2, -65, 'Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.', 0xFFF87171),
  UBody('Jupiter', 'planet', 5.20, 69911, 4331, 9.9, 24.79, 95, -110, 'Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.', 0xFFFB923C),
  UBody('Saturn', 'planet', 9.58, 58232, 10747, 10.7, 10.44, 146, -140, 'Its rings are mostly ice. Saturn is so light for its size that it would float in water.', 0xFFFDE68A),
  UBody('Uranus', 'planet', 19.2, 25362, 30589, 17.2, 8.87, 28, -195, 'It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.', 0xFF67E8F9),
  UBody('Neptune', 'planet', 30.1, 24622, 59800, 16.1, 11.15, 16, -200, 'Winds here reach about 2,000 km/h, the fastest in the solar system.', 0xFF60A5FA),
  UBody('Pluto', 'dwarf', 39.5, 1188, 90560, 153.3, 0.62, 5, -230, 'A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.', 0xFFD6BCFA),
];

/// A place you could stand, with how hard it pulls you down.
class UWorldG {
  const UWorldG(this.name, this.g, this.air, this.colorValue);
  final String name;
  final double g; // m/s²
  final double air; // 0 none, 1 like Earth
  final int colorValue;
}

const List<UWorldG> kGravityWorlds = [
  UWorldG('Moon', 1.62, 0, 0xFFD1D5DB),
  UWorldG('Mars', 3.71, 0.01, 0xFFF87171),
  UWorldG('Earth', 9.81, 1, 0xFF38BDF8),
  UWorldG('Jupiter', 24.79, 1.4, 0xFFFB923C),
  UWorldG('Sun', 274, 2, 0xFFFBBF24),
];

class USize {
  const USize(this.name, this.radiusKm, this.colorValue, this.note);
  final String name;
  final double radiusKm;
  final int colorValue;
  final String note;
}

const List<USize> kSizes = [
  USize('Moon', 1737, 0xFFD1D5DB, 'Our only natural satellite.'),
  USize('Earth', 6371, 0xFF38BDF8, 'Our home.'),
  USize('Neptune', 24622, 0xFF60A5FA, 'The farthest planet.'),
  USize('Saturn', 58232, 0xFFFDE68A, 'The ringed planet.'),
  USize('Jupiter', 69911, 0xFFFB923C, 'The biggest planet.'),
  USize('Sun', 696340, 0xFFFBBF24, 'An ordinary, medium-sized star.'),
  USize('Sirius A', 1190000, 0xFFBFDBFE, 'The brightest star in our night sky.'),
  USize('Arcturus', 17900000, 0xFFFDBA74, 'An orange giant star.'),
  USize('Betelgeuse', 531000000, 0xFFF87171, 'A red supergiant that will explode one day.'),
  USize('UY Scuti', 667000000, 0xFFEF4444, 'One of the largest known stars.'),
];

const List<String> kUniverseFacts = [
  'Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.',
  'There are more stars in the universe than grains of sand on all of Earth\'s beaches.',
  'A day on Venus is longer than its year.',
  'The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.',
  'A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.',
  'The Moon moves about 3.8 cm farther from Earth every year.',
  'If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.',
  'Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.',
  'Gravity is the weakest of the four forces, yet it holds galaxies together.',
  'Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.',
  'The universe is about 13.8 billion years old and is still expanding.',
  'Saturn is the only planet less dense than water.',
  'On the Moon you could jump about six times higher than on Earth.',
  'Most of the mass of a galaxy is dark matter that nobody has ever seen.',
  'Jupiter\'s gravity is so strong it pulls comets and asteroids away from Earth.',
  'A year on Neptune lasts 165 Earth years.',
];

/// Slow, dreamy notes that play quietly while you explore.
class UAmbient {
  double _acc = 0;
  final math.Random _rnd = math.Random();
  int _i = 0;

  void update(double dt, bool on) {
    if (!on) return;
    _acc += dt;
    if (_acc < 2.8) return;
    _acc = 0;
    final scale = kStudioScales['Dreamy']!;
    final semis = scale[_rnd.nextInt(scale.length)] + (_rnd.nextBool() ? 0 : 12) - 12;
    NgmyTone.playNote(_i++ % 3 == 0 ? 'flute' : 'bell', semis, ms: 2200, volume: 0.1);
  }
}
