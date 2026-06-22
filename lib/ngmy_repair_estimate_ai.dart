import 'dart:convert';
import 'dart:math' as math;

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
  final String jobTier;
  final double estimatedLaborHours;
  final double laborRatePerHour;
  final String pricingNote;

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
    this.jobTier = 'standard',
    this.estimatedLaborHours = 0,
    this.laborRatePerHour = 0,
    this.pricingNote = '',
  });

  String get jobTierLabel => ngmyRepairJobTierLabel(jobTier);

  String get combinedDescription {
    final parts = <String>[
      if (fixtureType.isNotEmpty) 'Fixture: $fixtureType',
      if (scopeOfWork.isNotEmpty) scopeOfWork,
      if (estimatedLaborHours > 0 && laborRatePerHour > 0)
        'Labor: ${estimatedLaborHours.toStringAsFixed(1)} hr × \$${laborRatePerHour.toStringAsFixed(0)}/hr',
      if (locationNote.isNotEmpty) locationNote,
      if (pricingNote.isNotEmpty) pricingNote,
      if (laborCost > 0 || materialsCost > 0)
        'Labor \$${laborCost.toStringAsFixed(2)} · Materials \$${materialsCost.toStringAsFixed(2)}',
      validityNote,
    ];
    return parts.join('\n');
  }

  NgmyRepairEstimateResult copyWith({
    String? fixtureType,
    String? scopeOfWork,
    String? itemName,
    double? laborCost,
    double? materialsCost,
    double? total,
    String? validityNote,
    String? locationNote,
    String? paymentTerms,
    String? jobTier,
    double? estimatedLaborHours,
    double? laborRatePerHour,
    String? pricingNote,
  }) {
    return NgmyRepairEstimateResult(
      fixtureType: fixtureType ?? this.fixtureType,
      scopeOfWork: scopeOfWork ?? this.scopeOfWork,
      itemName: itemName ?? this.itemName,
      laborCost: laborCost ?? this.laborCost,
      materialsCost: materialsCost ?? this.materialsCost,
      total: total ?? this.total,
      validityNote: validityNote ?? this.validityNote,
      locationNote: locationNote ?? this.locationNote,
      paymentTerms: paymentTerms ?? this.paymentTerms,
      jobTier: jobTier ?? this.jobTier,
      estimatedLaborHours: estimatedLaborHours ?? this.estimatedLaborHours,
      laborRatePerHour: laborRatePerHour ?? this.laborRatePerHour,
      pricingNote: pricingNote ?? this.pricingNote,
    );
  }
}

String ngmyRepairJobTierLabel(String tier) {
  switch (tier.trim().toLowerCase()) {
    case 'minimal':
      return 'Quick fix';
    case 'minor':
      return 'Minor repair';
    case 'standard':
      return 'Standard repair';
    case 'moderate':
      return 'Moderate job';
    case 'major':
      return 'Major repair';
    case 'extensive':
      return 'Extensive work';
    default:
      return 'Repair';
  }
}

class _RepairTierSpec {
  const _RepairTierSpec({
    required this.id,
    required this.minTotal,
    required this.maxTotal,
    required this.defaultHours,
    required this.minHours,
    required this.maxHours,
    required this.rateMin,
    required this.rateMax,
    required this.materialsMin,
    required this.materialsMax,
    required this.maxMaterialsShare,
  });

  final String id;
  final double minTotal;
  final double maxTotal;
  final double defaultHours;
  final double minHours;
  final double maxHours;
  final double rateMin;
  final double rateMax;
  final double materialsMin;
  final double materialsMax;
  final double maxMaterialsShare;
}

const _kRepairTiers = <String, _RepairTierSpec>{
  'minimal': _RepairTierSpec(
    id: 'minimal',
    minTotal: 65,
    maxTotal: 185,
    defaultHours: 1.0,
    minHours: 0.5,
    maxHours: 1.5,
    rateMin: 50,
    rateMax: 68,
    materialsMin: 8,
    materialsMax: 45,
    maxMaterialsShare: 0.38,
  ),
  'minor': _RepairTierSpec(
    id: 'minor',
    minTotal: 95,
    maxTotal: 340,
    defaultHours: 1.75,
    minHours: 1.0,
    maxHours: 3.0,
    rateMin: 55,
    rateMax: 72,
    materialsMin: 12,
    materialsMax: 95,
    maxMaterialsShare: 0.42,
  ),
  'standard': _RepairTierSpec(
    id: 'standard',
    minTotal: 175,
    maxTotal: 680,
    defaultHours: 3.0,
    minHours: 2.0,
    maxHours: 5.0,
    rateMin: 58,
    rateMax: 78,
    materialsMin: 25,
    materialsMax: 180,
    maxMaterialsShare: 0.45,
  ),
  'moderate': _RepairTierSpec(
    id: 'moderate',
    minTotal: 380,
    maxTotal: 1250,
    defaultHours: 6.0,
    minHours: 4.0,
    maxHours: 10.0,
    rateMin: 62,
    rateMax: 85,
    materialsMin: 45,
    materialsMax: 380,
    maxMaterialsShare: 0.48,
  ),
  'major': _RepairTierSpec(
    id: 'major',
    minTotal: 750,
    maxTotal: 3200,
    defaultHours: 12.0,
    minHours: 8.0,
    maxHours: 24.0,
    rateMin: 68,
    rateMax: 95,
    materialsMin: 80,
    materialsMax: 900,
    maxMaterialsShare: 0.52,
  ),
  'extensive': _RepairTierSpec(
    id: 'extensive',
    minTotal: 1400,
    maxTotal: 7500,
    defaultHours: 20.0,
    minHours: 12.0,
    maxHours: 40.0,
    rateMin: 72,
    rateMax: 105,
    materialsMin: 150,
    materialsMax: 2200,
    maxMaterialsShare: 0.55,
  ),
};

String _repairEstimatePrompt({
  required String city,
  required String state,
  required String userNotes,
}) {
  final loc = [city, state].where((s) => s.trim().isNotEmpty).join(', ');
  return '''
You are a fair, licensed US contractor estimator. Price REPAIR work only — not full replacements unless the photo shows the item is destroyed.

Study the photo. Identify the fixture, damage, and realistic scope. Optional notes: ${userNotes.trim().isEmpty ? '(none — use photo only)' : userNotes.trim()}
Location: ${loc.isEmpty ? 'US national average' : loc}

FAIR PRICING RULES (mandatory):
1. Pick exactly one jobTier from: minimal, minor, standard, moderate, major, extensive
   - minimal: cosmetic / under 1.5 hr (hook, caulk, scratch, loose screw, small patch)
   - minor: small fix 1–3 hr (hinge, outlet cover, drip, bracket, small drywall)
   - standard: typical handyman 2–5 hr (faucet, door/window repair, tile section, appliance hookup)
   - moderate: half–full day 4–10 hr (large drywall area, multiple fixtures, deck board, siding section)
   - major: multi-day visible damage (bathroom gut section, HVAC repair, large leak damage)
   - extensive: structural, roof, full system replacement visible — use sparingly
2. estimatedLaborHours = realistic hours for THIS job only (not padded)
3. laborRatePerHour = \$50–\$85 handyman (higher only for licensed trade work in photo)
4. materialsCost = actual parts at retail (not marked up heavily); small jobs often \$15–\$60
5. laborCost = round(estimatedLaborHours × laborRatePerHour, 2)
6. total = laborCost + materialsCost (must match exactly)

Do NOT inflate. A speaker stand or towel hook is "minimal" (\$65–\$185 total). A dripping faucet is "minor" or "standard", not major.
Do NOT underprice dangerous work — but most household photos are small jobs.

Reply ONLY with JSON:
{
  "jobTier": "minimal|minor|standard|moderate|major|extensive",
  "estimatedLaborHours": 1.5,
  "laborRatePerHour": 62,
  "fixtureType": "short name",
  "scopeOfWork": "2-4 sentences — what you see and what work is needed",
  "itemName": "invoice line title",
  "laborCost": 0.00,
  "materialsCost": 0.00,
  "total": 0.00,
  "pricingNote": "One sentence: why this tier and hours are fair for this job",
  "validityNote": "Valid 30 days from issue date",
  "locationNote": "Regional adjustment note",
  "paymentTerms": "50% deposit · balance on completion"
}
''';
}

double _regionalMultiplier(String city, String state) {
  final s = state.trim().toUpperCase();
  const high = {'CA', 'NY', 'HI', 'MA', 'WA', 'DC', 'NJ', 'CT', 'CO', 'MD', 'AK'};
  const low = {'MS', 'AR', 'WV', 'OK', 'KY', 'AL', 'LA', 'NM'};
  if (high.contains(s)) return 1.14;
  if (low.contains(s)) return 0.94;
  final c = city.toLowerCase();
  if (c.contains('san francisco') || c.contains('manhattan') || c.contains('brooklyn') || c.contains('seattle')) {
    return 1.18;
  }
  return 1.0;
}

String _normalizeTierId(String? raw) {
  final t = (raw ?? '').trim().toLowerCase();
  if (_kRepairTiers.containsKey(t)) return t;
  if (t.contains('minimal') || t.contains('quick') || t.contains('tiny')) return 'minimal';
  if (t.contains('minor') || t.contains('small')) return 'minor';
  if (t.contains('moderate') || t.contains('medium')) return 'moderate';
  if (t.contains('major') || t.contains('large')) return 'major';
  if (t.contains('extensive') || t.contains('structural') || t.contains('full')) return 'extensive';
  return 'standard';
}

String _inferTierFromText(String blob) {
  const extensive = ['roof', 'hvac', 'furnace', 'foundation', 'structural', 'rewire', 'panel upgrade', 'water heater replace'];
  const major = ['flood', 'mold', 'subfloor', 'beam', 'load-bearing', 'sewer line', 'main line', 'full bathroom'];
  const moderate = ['multiple', 'several', 'large section', 'whole wall', 'deck', 'siding', 'shower pan'];
  const minor = [
    'hinge', 'hook', 'bracket', 'caulk', 'patch', 'scratch', 'knob', 'handle', 'outlet cover',
    'towel', 'shelf', 'mount', 'anchor', 'grout touch', 'drip', 'loose',
  ];
  const minimal = ['touch-up', 'touch up', 'nick', 'dent', 'scuff', 'tighten', 'adjust'];

  if (extensive.any(blob.contains)) return 'extensive';
  if (major.any(blob.contains)) return 'major';
  if (moderate.any(blob.contains)) return 'moderate';
  if (minimal.any(blob.contains)) return 'minimal';
  if (minor.any(blob.contains)) return 'minor';
  return 'standard';
}

String _resolveTier({
  required String? aiTier,
  required String fixtureType,
  required String scope,
  required String itemName,
  required double aiTotal,
}) {
  final ai = _normalizeTierId(aiTier);
  final blob = '${fixtureType.toLowerCase()} ${scope.toLowerCase()} ${itemName.toLowerCase()}';
  final inferred = _inferTierFromText(blob);

  const order = ['minimal', 'minor', 'standard', 'moderate', 'major', 'extensive'];
  final aiIdx = order.indexOf(ai);
  final infIdx = order.indexOf(inferred);

  // If AI total is wildly mismatched to tier, trust inference for small jobs.
  final spec = _kRepairTiers[ai]!;
  if (aiTotal > spec.maxTotal * 1.35 && infIdx < aiIdx) return inferred;
  if (aiTotal < spec.minTotal * 0.55 && infIdx < aiIdx) return inferred;

  // Never let text alone jump to extensive without major keywords.
  if (inferred == 'extensive' && !extensiveKeywords.any(blob.contains)) {
    return aiIdx >= order.indexOf('major') ? ai : 'major';
  }

  // Prefer the lower (fairer) tier when AI and text disagree by 2+ steps on small totals.
  if (aiTotal < 400 && (aiIdx - infIdx).abs() >= 2) {
    return aiIdx < infIdx ? ai : inferred;
  }

  return ai;
}

const extensiveKeywords = ['roof', 'hvac', 'furnace', 'foundation', 'structural'];

double _roundMoney(double v) => (v * 100).round() / 100;

/// Applies fair-market floors, caps, labor/materials split, and regional adjustment.
NgmyRepairEstimateResult ngmyNormalizeRepairEstimatePricing(
  NgmyRepairEstimateResult r, {
  String city = '',
  String state = '',
}) {
  final mult = _regionalMultiplier(city, state);
  final tierId = _resolveTier(
    aiTier: r.jobTier,
    fixtureType: r.fixtureType,
    scope: r.scopeOfWork,
    itemName: r.itemName,
    aiTotal: r.total,
  );
  final spec = _kRepairTiers[tierId]!;

  var hours = r.estimatedLaborHours > 0 ? r.estimatedLaborHours : spec.defaultHours;
  hours = hours.clamp(spec.minHours, spec.maxHours);

  var rate = r.laborRatePerHour > 0 ? r.laborRatePerHour : (spec.rateMin + spec.rateMax) / 2;
  rate = rate.clamp(spec.rateMin, spec.rateMax);

  var materials = r.materialsCost > 0 ? r.materialsCost : spec.materialsMin;
  materials = materials.clamp(spec.materialsMin, spec.materialsMax);

  var labor = _roundMoney(hours * rate);
  if (r.laborCost > 0) {
    final blended = (labor + r.laborCost) / 2;
    labor = _roundMoney(blended.clamp(spec.rateMin * spec.minHours, spec.rateMax * spec.maxHours));
  }

  var total = _roundMoney(labor + materials);
  var minTotal = _roundMoney(spec.minTotal * mult);
  var maxTotal = _roundMoney(spec.maxTotal * mult);

  // Materials cannot dominate small handyman jobs.
  final maxMat = total * spec.maxMaterialsShare;
  if (materials > maxMat && total > 0) {
    materials = _roundMoney(maxMat);
    total = _roundMoney(labor + materials);
  }

  if (total > maxTotal) {
    final ratio = maxTotal / total;
    labor = _roundMoney(labor * ratio);
    materials = _roundMoney(materials * ratio);
    total = _roundMoney(labor + materials);
    if (total > maxTotal) {
      final fix = maxTotal / total;
      labor = _roundMoney(labor * fix);
      materials = _roundMoney(materials * fix);
      total = maxTotal;
    }
  } else if (total < minTotal) {
    final need = minTotal - total;
    labor = _roundMoney(labor + need * 0.75);
    materials = _roundMoney(materials + need * 0.25);
    total = _roundMoney(labor + materials);
    hours = rate > 0 ? labor / rate : hours;
  }

  // Reconcile labor + materials = total
  total = _roundMoney(labor + materials);
  if ((total - maxTotal).abs() > 0.01 && total > maxTotal) {
    labor = _roundMoney(maxTotal - materials);
    total = _roundMoney(labor + materials);
  }

  final note = r.pricingNote.trim().isNotEmpty
      ? r.pricingNote.trim()
      : 'Fair ${ngmyRepairJobTierLabel(tierId).toLowerCase()} rate for ~${hours.toStringAsFixed(1)} hr labor + parts.';

  var locationNote = r.locationNote.trim();
  if (mult != 1.0 && locationNote.isEmpty) {
    locationNote = mult > 1
        ? 'Includes modest adjustment for higher-cost area (+${((mult - 1) * 100).round()}%).'
        : 'Adjusted for lower-cost region.';
  }

  return r.copyWith(
    jobTier: tierId,
    estimatedLaborHours: _roundMoney(hours),
    laborRatePerHour: _roundMoney(rate),
    laborCost: labor,
    materialsCost: materials,
    total: total,
    pricingNote: note,
    locationNote: locationNote,
  );
}

/// @deprecated Use [ngmyNormalizeRepairEstimatePricing].
NgmyRepairEstimateResult ngmyClampRepairEstimatePricing(NgmyRepairEstimateResult r) =>
    ngmyNormalizeRepairEstimatePricing(r);

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
  final hours = n(map['estimatedLaborHours']);
  final rate = n(map['laborRatePerHour']);

  if (labor <= 0 && hours > 0 && rate > 0) labor = hours * rate;
  if (total <= 0) total = labor + materials;
  if (total <= 0) return null;

  if (labor <= 0 && total > 0) {
    labor = math.max(0, total - materials);
  }
  if (materials <= 0 && total > labor) {
    materials = total - labor;
  }

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
    jobTier: _normalizeTierId(map['jobTier']?.toString()),
    estimatedLaborHours: hours,
    laborRatePerHour: rate,
    pricingNote: (map['pricingNote'] ?? '').toString(),
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
  return (
    result: ngmyNormalizeRepairEstimatePricing(parsed, city: city, state: state),
    error: null,
  );
}

/// Modern estimate themes (compact preview).
const kNgmyEstimateTemplateIds = ['estimate_slate', 'estimate_ocean', 'estimate_mint', 'estimate_pro'];

String ngmyEstimateTemplateLabel(String id) {
  switch (id) {
    case 'estimate_slate':
    case 'essential_gold':
      return 'Slate';
    case 'estimate_ocean':
    case 'essential_emerald':
      return 'Ocean';
    case 'estimate_mint':
    case 'essential_amber':
      return 'Mint';
    case 'estimate_pro':
      return 'Pro';
    default:
      return 'Estimate';
  }
}
