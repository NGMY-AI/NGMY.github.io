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

PRICING — fair, competitive handyman rates (do NOT inflate):
- Tiny / simple fixes (speaker stand, shelf bracket, towel hook, small drywall patch, loose screw, caulk touch-up): total usually \$75–\$250 (often \$100–\$200).
- Small repairs (minor drywall, faucet drip, door hinge, outlet cover): \$120–\$400.
- Medium jobs (partial drywall section, appliance install, window/door repair): \$250–\$900.
- Major work only when photo clearly shows large damage (HVAC, roof, full room): \$800+.
Assume REPAIR not full replacement unless the item is clearly destroyed.
Handyman labor: \$45–\$75/hr, typically 1–2 hrs for small items.
Materials: real parts cost only (patch kit \$15–\$40, brackets \$10–\$60, small parts under \$100).
Never quote \$1000+ for a small household item like a speaker stand or minor wall patch.

Location: ${loc.isEmpty ? 'US national average' : loc} — high-cost metros may add up to 20%; do not double prices.

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
total must equal laborCost + materialsCost. Keep totals realistic for the size of the job visible in the photo.
''';
}

bool _isSmallRepairJob(String blob) {
  const keys = [
    'speaker', 'stand', 'bracket', 'hook', 'knob', 'handle', 'patch', 'hole', 'crack',
    'touch-up', 'touch up', 'loose', 'screw', 'anchor', 'shelf', 'towel', 'caulk', 'grout',
    'drywall', 'nick', 'dent', 'scratch', 'trim', 'molding', 'baseboard', 'picture', 'mount',
  ];
  return keys.any(blob.contains);
}

bool _isMediumRepairJob(String blob) {
  const keys = [
    'faucet', 'toilet', 'door', 'window', 'outlet', 'fan', 'light', 'tile', 'cabinet',
    'counter', 'appliance', 'disposal', 'garbage', 'leak', 'pipe', 'section',
  ];
  return keys.any(blob.contains);
}

double _maxTotalForJob(String fixtureType, String scope, String itemName) {
  final blob = '${fixtureType.toLowerCase()} ${scope.toLowerCase()} ${itemName.toLowerCase()}';
  if (_isSmallRepairJob(blob)) return 325;
  if (_isMediumRepairJob(blob)) return 950;
  return 4200;
}

/// Pulls inflated AI totals down to realistic market ranges.
NgmyRepairEstimateResult ngmyClampRepairEstimatePricing(NgmyRepairEstimateResult r) {
  final maxTotal = _maxTotalForJob(r.fixtureType, r.scopeOfWork, r.itemName);
  if (r.total <= maxTotal) return r;

  final ratio = maxTotal / r.total;
  var labor = (r.laborCost * ratio * 100).round() / 100;
  var materials = (r.materialsCost * ratio * 100).round() / 100;
  var total = labor + materials;
  if (total > maxTotal) {
    final tRatio = maxTotal / total;
    labor = (labor * tRatio * 100).round() / 100;
    materials = (materials * tRatio * 100).round() / 100;
    total = maxTotal;
  }

  return NgmyRepairEstimateResult(
    fixtureType: r.fixtureType,
    scopeOfWork: r.scopeOfWork,
    itemName: r.itemName,
    laborCost: labor,
    materialsCost: materials,
    total: total,
    validityNote: r.validityNote,
    locationNote: r.locationNote.isEmpty ? 'Adjusted to typical local handyman rates.' : r.locationNote,
    paymentTerms: r.paymentTerms,
  );
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
  return (result: ngmyClampRepairEstimatePricing(parsed), error: null);
}

/// Modern estimate themes (compact preview).
const kNgmyEstimateTemplateIds = ['estimate_slate', 'estimate_ocean', 'estimate_mint'];

String ngmyEstimateTemplateLabel(String id) {
  switch (id) {
    case 'estimate_slate':
    case 'essential_gold':
      return 'Slate Pro';
    case 'estimate_ocean':
    case 'essential_emerald':
      return 'Ocean';
    case 'estimate_mint':
    case 'essential_amber':
      return 'Mint';
    default:
      return 'Estimate';
  }
}
