import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_gemini_vision.dart';

/// Parsed repair estimate from AI vision + location context.
class NgmyRepairEstimateResult {
  final String fixtureType;
  final String scopeOfWork;
  final String itemName;
  final double laborCost;
  final double materialsCost;
  final double total;
  final String validityNote;
  final String locationNote;
  final String paymentTerms;

  const NgmyRepairEstimateResult({
    required this.fixtureType,
    required this.scopeOfWork,
    required this.itemName,
    required this.laborCost,
    required this.materialsCost,
    required this.total,
    this.validityNote = 'Valid 30 days',
    this.locationNote = '',
    this.paymentTerms = '50% deposit to schedule · balance due on completion',
  });

  String get combinedDescription {
    final parts = <String>[
      if (fixtureType.isNotEmpty) 'Fixture: $fixtureType',
      if (scopeOfWork.isNotEmpty) scopeOfWork,
      if (locationNote.isNotEmpty) locationNote,
      if (laborCost > 0 || materialsCost > 0)
        'Labor \$${laborCost.toStringAsFixed(2)} · Materials \$${materialsCost.toStringAsFixed(2)}',
      validityNote,
    ];
    return parts.join('\n');
  }
}

String _repairEstimatePrompt({
  required String city,
  required String state,
  required String userNotes,
}) {
  final loc = [city, state].where((s) => s.trim().isNotEmpty).join(', ');
  return '''
You are a licensed contractor estimator for residential and commercial repair in the United States.

PRIMARY TASK: Study the attached photo carefully. Identify the fixture, damage, wear, or job-site conditions and produce a professional repair estimate from the image alone.
The customer may leave notes empty — you MUST still inspect the photo, infer what needs fixing, and price labor + materials without asking for more text.

Location context: ${loc.isEmpty ? 'Not specified — use typical US national average; note the assumption in locationNote.' : loc}
Optional customer notes (extra context only, may be empty): ${userNotes.trim().isEmpty ? '(none — rely entirely on the photo)' : userNotes.trim()}

Adjust labor and materials for this city/state market (high-cost metros: NYC, SF, LA, Seattle, Boston, Miami — add 15–35%; rural areas may be lower).
If notes are empty, describe what you see in the photo inside scopeOfWork and itemName.

Reply with ONLY valid JSON (no markdown):
{
  "fixtureType": "short name e.g. Kitchen faucet, Roof shingle, HVAC unit",
  "scopeOfWork": "2-4 sentences describing repair scope",
  "itemName": "invoice line title e.g. Faucet replacement & labor",
  "laborCost": 0.00,
  "materialsCost": 0.00,
  "total": 0.00,
  "validityNote": "Valid 30 days from issue date",
  "locationNote": "One sentence on regional pricing applied",
  "paymentTerms": "Short payment terms for customer"
}
total must equal laborCost + materialsCost (reasonable professional estimate, not a token amount).
''';
}

Map<String, dynamic>? _extractJsonMap(String raw) {
  final t = raw.trim();
  if (t.isEmpty) return null;
  try {
    final decoded = jsonDecode(t);
    if (decoded is Map) return Map<String, dynamic>.from(decoded);
  } catch (_) {}
  final start = t.indexOf('{');
  final end = t.lastIndexOf('}');
  if (start >= 0 && end > start) {
    try {
      final decoded = jsonDecode(t.substring(start, end + 1));
      if (decoded is Map) return Map<String, dynamic>.from(decoded);
    } catch (_) {}
  }
  return null;
}

NgmyRepairEstimateResult? _parseEstimateMap(Map<String, dynamic> map) {
  double n(dynamic v) {
    if (v is num) return v.toDouble();
    return double.tryParse('$v') ?? 0;
  }

  var labor = n(map['laborCost']);
  var materials = n(map['materialsCost']);
  var total = n(map['total']);
  if (total <= 0) total = labor + materials;
  if (total <= 0) return null;

  return NgmyRepairEstimateResult(
    fixtureType: (map['fixtureType'] ?? '').toString(),
    scopeOfWork: (map['scopeOfWork'] ?? '').toString(),
    itemName: (map['itemName'] ?? map['fixtureType'] ?? 'Repair estimate').toString(),
    laborCost: labor,
    materialsCost: materials,
    total: total,
    validityNote: (map['validityNote'] ?? 'Valid 30 days').toString(),
    locationNote: (map['locationNote'] ?? '').toString(),
    paymentTerms: (map['paymentTerms'] ?? '50% deposit · balance on completion').toString(),
  );
}

Future<({NgmyRepairEstimateResult? result, String? error})> ngmyGenerateRepairEstimate({
  required String apiKey,
  required List<int> imageBytes,
  required String mimeType,
  required String city,
  required String state,
  required String userNotes,
}) async {
  if (imageBytes.isEmpty) return (result: null, error: 'Add a photo of the fixture or job site.');
  final prompt = _repairEstimatePrompt(city: city, state: state, userNotes: userNotes);
  final vision = await geminiAnalyzeImages(
    apiKey: apiKey,
    images: [(bytes: Uint8List.fromList(imageBytes), mimeType: mimeType)],
    prompt: prompt,
  );
  if (vision.error != null && vision.text == null) {
    return (result: null, error: vision.error);
  }
  final map = _extractJsonMap(vision.text ?? '');
  if (map == null) {
    return (result: null, error: 'AI could not build an estimate. Try a clearer photo and add city/state.');
  }
  final parsed = _parseEstimateMap(map);
  if (parsed == null) {
    return (result: null, error: 'Estimate totals were invalid. Try again.');
  }
  return (result: parsed, error: null);
}

/// Gold Herald, Emerald Chronicle, Amber Flash — estimate-only luxury templates.
const kNgmyEstimateTemplateIds = ['essential_gold', 'essential_emerald', 'essential_amber'];

String ngmyEstimateTemplateLabel(String id) {
  switch (id) {
    case 'essential_gold':
      return 'Gold Herald';
    case 'essential_emerald':
      return 'Emerald Chronicle';
    case 'essential_amber':
      return 'Amber Flash';
    default:
      return 'Estimate';
  }
}
