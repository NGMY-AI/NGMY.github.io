import 'dart:async';
import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

/// Vehicle background from a VIN, for the advisors: the free U.S. government
/// (NHTSA) records — what the car is, its safety recalls, and owner complaints
/// (including crash and fire reports) for that model and year.
///
/// The car's OWN accident / title history (salvage, flood, odometer) is not in
/// any free public record; the advisor says so and points to an NMVTIS report.

final _vinRe = RegExp(r'\b[A-HJ-NPR-Z0-9]{17}\b', caseSensitive: false);

/// The first VIN in [text], upper-cased, or null.
String? ngmyFindVin(String text) {
  for (final m in _vinRe.allMatches(text)) {
    final v = m.group(0)!.toUpperCase();
    // A real VIN mixes letters and digits.
    if (RegExp(r'[A-Z]').hasMatch(v) && RegExp(r'[0-9]').hasMatch(v)) return v;
  }
  return null;
}

/// North American check digit (position 9). Null when it can't apply.
bool? ngmyVinCheckDigitOk(String vin) {
  if (vin.length != 17) return null;
  const values = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, //
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'P': 7, 'R': 9, //
    'S': 2, 'T': 3, 'U': 4, 'V': 5, 'W': 6, 'X': 7, 'Y': 8, 'Z': 9,
  };
  const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
  var sum = 0;
  for (var i = 0; i < 17; i++) {
    final c = vin[i];
    final v = int.tryParse(c) ?? values[c];
    if (v == null) return null;
    sum += v * weights[i];
  }
  final r = sum % 11;
  final want = r == 10 ? 'X' : '$r';
  return vin[8] == want;
}

final _cache = <String, String>{};

Future<Map<String, dynamic>?> _getJson(String url) async {
  try {
    final r = await http.get(Uri.parse(url)).timeout(const Duration(seconds: 9));
    if (r.statusCode != 200) return null;
    final j = jsonDecode(r.body);
    return j is Map<String, dynamic> ? j : null;
  } catch (e) {
    debugPrint('[vin] $url: $e');
    return null;
  }
}

String _short(Object? v, [int max = 220]) {
  final s = (v ?? '').toString().replaceAll(RegExp(r'\s+'), ' ').trim();
  return s.length > max ? '${s.substring(0, max)}…' : s;
}

/// Everything we found for [vin], written for the advisor's prompt.
Future<String> ngmyVinReportBlock(String vin) async {
  final cached = _cache[vin];
  if (cached != null) return cached;

  final decoded = await _getJson('https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/$vin?format=json');
  final res = (decoded?['Results'] as List?)?.cast<Map>().firstOrNull;
  String f(String k) => (res?[k] ?? '').toString().trim();

  final buf = StringBuffer('VEHICLE LOOKUP FOR VIN $vin (live U.S. government NHTSA records, fetched just now):\n');
  if (res == null || f('Make').isEmpty) {
    buf.writeln('- The NHTSA decoder could not decode this VIN${decoded == null ? ' (the lookup did not respond)' : ''}. '
        'Ask them to double-check the 17 characters (no I, O or Q).');
    final out = buf.toString();
    if (decoded != null) _cache[vin] = out;
    return out;
  }

  final year = f('ModelYear'), make = f('Make'), model = f('Model');
  final check = ngmyVinCheckDigitOk(vin);
  final specs = <String, String>{
    'Vehicle': [year, make, model, f('Trim'), f('Series')].where((s) => s.isNotEmpty).join(' '),
    'Body': [f('BodyClass'), f('Doors').isEmpty ? '' : '${f('Doors')} doors'].where((s) => s.isNotEmpty).join(', '),
    'Type': f('VehicleType'),
    'Engine': [
      f('EngineCylinders').isEmpty ? '' : '${f('EngineCylinders')} cyl',
      f('DisplacementL').isEmpty ? '' : '${double.tryParse(f('DisplacementL'))?.toStringAsFixed(1) ?? f('DisplacementL')} L',
      f('EngineHP').isEmpty ? '' : '${f('EngineHP')} hp',
      f('EngineModel'),
    ].where((s) => s.isNotEmpty).join(' · '),
    'Fuel': [f('FuelTypePrimary'), f('ElectrificationLevel')].where((s) => s.isNotEmpty).join(', '),
    'Drive': f('DriveType'),
    'Transmission': [f('TransmissionStyle'), f('TransmissionSpeeds').isEmpty ? '' : '${f('TransmissionSpeeds')}-speed'].where((s) => s.isNotEmpty).join(' '),
    'Built by': f('Manufacturer'),
    'Built in': [f('PlantCity'), f('PlantState'), f('PlantCountry')].where((s) => s.isNotEmpty).join(', '),
    'Weight class': f('GVWR'),
    'Airbags': [f('AirBagLocFront'), f('AirBagLocCurtain'), f('AirBagLocSide')].where((s) => s.isNotEmpty).join('; '),
    'Safety tech': [f('ABS') == 'Standard' ? 'ABS' : '', f('ESC') == 'Standard' ? 'stability control' : '', f('BlindSpotMon').isNotEmpty ? 'blind-spot monitor' : '', f('ForwardCollisionWarning').isNotEmpty ? 'forward-collision warning' : '', f('BackupCamera').isNotEmpty ? 'backup camera' : '']
        .where((s) => s.isNotEmpty)
        .join(', '),
  };
  for (final e in specs.entries) {
    if (e.value.trim().isNotEmpty) buf.writeln('- ${e.key}: ${e.value}');
  }
  final err = f('ErrorText');
  if (err.isNotEmpty && !err.startsWith('0 ')) buf.writeln('- Decoder note: ${_short(err, 200)}');
  if (check == false) buf.writeln('- WARNING: the VIN check digit does not match (possible typo, a non-North-American VIN, or an altered VIN).');

  if (year.isNotEmpty && model.isNotEmpty) {
    final q = 'make=${Uri.encodeQueryComponent(make)}&model=${Uri.encodeQueryComponent(model)}&modelYear=$year';
    final both = await Future.wait([
      _getJson('https://api.nhtsa.gov/recalls/recallsByVehicle?$q'),
      _getJson('https://api.nhtsa.gov/complaints/complaintsByVehicle?$q'),
    ]);
    final recalls = (both[0]?['results'] as List?)?.cast<Map>() ?? const [];
    final complaints = (both[1]?['results'] as List?)?.cast<Map>() ?? const [];

    if (both[0] == null) {
      buf.writeln('RECALLS: the recall lookup did not respond — suggest checking nhtsa.gov/recalls with the VIN.');
    } else if (recalls.isEmpty) {
      buf.writeln('RECALLS: none on record for the $year $make $model.');
    } else {
      buf.writeln('RECALLS for the $year $make $model (${recalls.length} total; whether THIS car was already repaired shows at nhtsa.gov/recalls with the VIN):');
      for (final r in recalls.take(8)) {
        buf.writeln('  • ${r['ReportReceivedDate'] ?? ''} — ${_short(r['Component'], 80)}: ${_short(r['Summary'], 200)} Fix: ${_short(r['Remedy'], 120)}'
            '${r['parkIt'] == true ? ' (PARK IT — do not drive until fixed)' : ''}');
      }
    }

    if (both[1] != null) {
      final crash = complaints.where((c) => c['crash'] == true).length;
      final fire = complaints.where((c) => c['fire'] == true).length;
      final injuries = complaints.fold<int>(0, (s, c) => s + ((c['numberOfInjuries'] as num?)?.toInt() ?? 0));
      final deaths = complaints.fold<int>(0, (s, c) => s + ((c['numberOfDeaths'] as num?)?.toInt() ?? 0));
      final parts = <String, int>{};
      for (final c in complaints) {
        for (final p in (c['components'] ?? '').toString().split(',')) {
          final k = p.trim();
          if (k.isNotEmpty) parts[k] = (parts[k] ?? 0) + 1;
        }
      }
      final top = (parts.entries.toList()..sort((a, b) => b.value.compareTo(a.value))).take(5).map((e) => '${e.key} (${e.value})').join(', ');
      // Complaints carry the first 11 VIN characters — same model, plant and build series as this car.
      final prefix = vin.substring(0, 11);
      final sameSeries = complaints.where((c) => (c['vin'] ?? '').toString().toUpperCase() == prefix).toList();
      buf.writeln('OWNER COMPLAINTS for the $year $make $model: ${complaints.length} total · $crash mention a crash · $fire mention a fire · $injuries injuries · $deaths deaths.');
      if (top.isNotEmpty) buf.writeln('  Most reported problems: $top');
      if (sameSeries.isNotEmpty) {
        final sc = sameSeries.where((c) => c['crash'] == true).length;
        buf.writeln('  ${sameSeries.length} complaint(s) are from cars with the same first 11 VIN characters as this one ($sc mention a crash) — same build series, not necessarily this exact car.');
        for (final c in sameSeries.take(3)) {
          buf.writeln('   – ${c['dateOfIncident'] ?? ''}${c['crash'] == true ? ' [crash]' : ''}: ${_short(c['summary'], 180)}');
        }
      }
    }
  }

  buf.writeln(
    'HOW TO ANSWER: give them a clean, organised vehicle background from the facts above (what the car is, engine/specs, where it was built, '
    'recalls with plain-language risk, common problems and crash/fire complaint numbers for this model). '
    "IMPORTANT: this specific car's own accident, salvage/flood title and odometer history are NOT in these free records — say so honestly, "
    'never invent or guess accidents, and tell them to get an NMVTIS vehicle history report (e.g. VinAudit, AutoCheck or Carfax) for that, '
    'plus a pre-purchase inspection by a mechanic if they are buying it.',
  );
  final out = buf.toString();
  _cache[vin] = out;
  return out;
}
