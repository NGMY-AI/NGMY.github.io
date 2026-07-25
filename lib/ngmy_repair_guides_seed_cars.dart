import 'ngmy_repair_guides_models.dart';

/// Repair step photos (Unsplash — automotive / tools).
abstract final class RepairGuideStockImages {
  static const tools = 'https://images.unsplash.com/photo-1530124566582-883327c96642?w=800&q=80';
  static const engineBay = 'https://images.unsplash.com/photo-1486262715619-67b85e0b08af?w=800&q=80';
  static const oilChange = 'https://images.unsplash.com/photo-1625047509168-a7026f36de0c?w=800&q=80';
  static const brakes = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
  static const battery = 'https://images.unsplash.com/photo-1599305445671-ac2912636371?w=800&q=80';
  static const sparkPlugs = 'https://images.unsplash.com/photo-1619642751034-765df036d329?w=800&q=80';
  static const tires = 'https://images.unsplash.com/photo-1489824904134-891ab78932f1?w=800&q=80';
  static const airFilter = 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80';
  static const mechanic = 'https://images.unsplash.com/photo-1487754183691-776567091645?w=800&q=80';
  static const carExterior = 'https://images.unsplash.com/photo-1492144534655-ae79c964c114?w=800&q=80';
  static const coolant = 'https://images.unsplash.com/photo-1621939514649-280e2ee25a60?w=800&q=80';
  static const headlight = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80';
  static const wipers = 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80';
  static const jackStand = 'https://images.unsplash.com/photo-1615900937012-60fe417685a2?w=800&q=80';
  static const transmission = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80';
}

class _Vehicle {
  const _Vehicle(this.make, this.model, this.year, {this.variant = ''});
  final String make;
  final String model;
  final int year;
  final String variant;

  String get slug =>
      '${make}_${model}_$year'.toLowerCase().replaceAll(RegExp(r'[^a-z0-9]+'), '_');

  String get label {
    final v = variant.trim();
    return v.isEmpty ? '$make $model $year' : '$make $model $year $v';
  }
}

RepairGuide _guide(
  _Vehicle v,
  DateTime now, {
  required String suffix,
  required String repairTitle,
  required String summary,
  required String coverUrl,
  required List<RepairGuideStep> steps,
}) {
  return RepairGuide(
    id: 'seed_${v.slug}_$suffix',
    categoryId: 'car',
    make: v.make,
    model: v.model,
    year: v.year,
    variant: v.variant,
    repairTitle: repairTitle,
    summary: summary,
    coverImageUrl: coverUrl,
    steps: steps,
    authorEmail: 'ngmy@seed',
    createdAt: now,
    updatedAt: now,
    isSeed: true,
  );
}

RepairGuideStep _s(int n, String title, String body, String img, {List<String> tools = const [], String? warning}) {
  return RepairGuideStep(order: n, title: title, body: body, imageUrl: img, tools: tools, warning: warning);
}

List<RepairGuideStep> _oilSteps(_Vehicle v, {String oil = '0W-20', String qty = '4.8 qt', String drain = '14 mm'}) => [
      _s(1, 'Gather supplies', 'For ${v.label}: $qty of $oil, new oil filter, $drain drain plug socket, drain pan, funnel, gloves, and jack stands.', RepairGuideStockImages.tools, tools: ['Oil filter wrench', 'Socket set', 'Drain pan']),
      _s(2, 'Lift the vehicle safely', 'Park on level ground. Jack the front (or use ramps) and set jack stands on the frame — never work under a jack alone.', RepairGuideStockImages.jackStand, warning: 'Always use jack stands.', tools: ['Jack', 'Jack stands']),
      _s(3, 'Drain old oil', 'Remove the $drain drain plug with the pan underneath. Let oil drain 5–10 minutes.', RepairGuideStockImages.oilChange, tools: ['$drain socket']),
      _s(4, 'Replace oil filter', 'Unscrew the old filter. Lubricate the new gasket with fresh oil. Hand-tighten the new filter.', RepairGuideStockImages.oilChange, tools: ['Oil filter wrench']),
      _s(5, 'Refill & check level', 'Reinstall drain plug. Lower the car. Add $oil through the fill cap. Run engine 30 sec, shut off, check dipstick.', RepairGuideStockImages.engineBay, tools: ['Funnel']),
    ];

List<RepairGuideStep> _airFilterSteps(_Vehicle v) => [
      _s(1, 'Open air box', 'Locate the engine air filter box — usually on the driver side of ${v.label}. Release clips or screws.', RepairGuideStockImages.engineBay),
      _s(2, 'Swap filter', 'Remove dirty filter. Vacuum debris from the housing. Drop in new filter with gasket seated.', RepairGuideStockImages.airFilter),
      _s(3, 'Close & check', 'Latch the housing. Start engine — idle should be smooth.', RepairGuideStockImages.carExterior),
    ];

List<RepairGuideStep> _cabinFilterSteps(_Vehicle v) => [
      _s(1, 'Access glove box area', 'Empty glove box. Push sides inward to lower it (most ${v.make} models) or check manual for dash access.', RepairGuideStockImages.carExterior),
      _s(2, 'Replace filter', 'Slide out old cabin filter. Note airflow arrow on the new filter.', RepairGuideStockImages.airFilter),
      _s(3, 'Reinstall panel', 'Close filter door and glove box. Run fan on high to confirm airflow.', RepairGuideStockImages.airFilter),
    ];

List<RepairGuideStep> _brakePadSteps(_Vehicle v) => [
      _s(1, 'Remove wheel', 'Loosen lug nuts on the ground. Jack up, use stands, remove wheel.', RepairGuideStockImages.jackStand, tools: ['Lug wrench']),
      _s(2, 'Remove caliper', 'Unbolt caliper slide pins or bracket bolts. Hang caliper — do not stress the brake hose.', RepairGuideStockImages.brakes, tools: ['Socket set']),
      _s(3, 'Compress piston & install pads', 'Push caliper piston back with a C-clamp. Install new pads and hardware.', RepairGuideStockImages.brakes, warning: 'Brake fluid reservoir may rise — do not overflow.', tools: ['C-clamp']),
      _s(4, 'Reassemble & bed-in', 'Remount caliper and wheel. Torque lug nuts. Drive gently and perform moderate stops to seat pads.', RepairGuideStockImages.tires, tools: ['Torque wrench']),
    ];

List<RepairGuideStep> _batterySteps(_Vehicle v) => [
      _s(1, 'Identify battery group size', 'Check old battery label or owner manual for ${v.label} group size.', RepairGuideStockImages.battery),
      _s(2, 'Disconnect negative first', '10 mm wrench: negative terminal first, then positive. Remove hold-down bracket.', RepairGuideStockImages.battery, warning: 'Disconnect negative first to prevent shorts.', tools: ['10 mm wrench']),
      _s(3, 'Install new battery', 'Place new battery, secure bracket, connect positive then negative. Spray terminal protectant.', RepairGuideStockImages.battery),
    ];

List<RepairGuideStep> _transFluidSteps(_Vehicle v) => [
      _s(1, 'Warm up & park level', 'Drive ${v.label} 10 minutes. Park level, engine running, foot on brake.', RepairGuideStockImages.transmission),
      _s(2, 'Check dipstick', 'Pull transmission dipstick (if equipped). Wipe, reinsert, read level between marks.', RepairGuideStockImages.transmission, tools: ['Shop rag']),
      _s(3, 'Top off if low', 'Add manufacturer-approved ATF through dipstick tube using a narrow funnel — small amounts only.', RepairGuideStockImages.transmission, warning: 'Do not overfill — shifts can slip.'),
      _s(4, 'Sealed units', 'Many newer models have no dipstick — if low, have a shop verify leaks before forcing fill.', RepairGuideStockImages.mechanic),
    ];

List<RepairGuideStep> _coolantSteps(_Vehicle v) => [
      _s(1, 'Check cold level', 'Engine cold only. Check overflow tank between MIN and MAX.', RepairGuideStockImages.coolant, warning: 'Never open hot radiator cap.'),
      _s(2, 'Top off', 'Add premixed coolant matching ${v.make} spec (often orange or pink long-life).', RepairGuideStockImages.coolant),
      _s(3, 'Inspect hoses', 'Squeeze upper/lower radiator hoses — replace if swollen or cracked.', RepairGuideStockImages.engineBay),
    ];

List<RepairGuideStep> _sparkSteps(_Vehicle v, {String gap = '0.043 in'}) => [
      _s(1, 'Disconnect battery', 'Remove negative cable before coil work.', RepairGuideStockImages.battery, warning: 'Disconnect battery first.'),
      _s(2, 'Remove coils & plugs', 'Unplug coils, remove bolts, pull coils straight up. Use spark plug socket to remove plugs.', RepairGuideStockImages.engineBay, tools: ['Spark plug socket']),
      _s(3, 'Gap & install', 'Gap new plugs to $gap. Hand-thread, torque to spec. Reinstall coils and battery.', RepairGuideStockImages.sparkPlugs, tools: ['Feeler gauge', 'Torque wrench']),
    ];

List<RepairGuideStep> _wiperSteps(_Vehicle v) => [
      _s(1, 'Lift arms', 'Turn ignition on then off. Lift wiper arms off glass.', RepairGuideStockImages.wipers),
      _s(2, 'Release blade', 'Press tab on adapter, slide blade off hook arm.', RepairGuideStockImages.wipers),
      _s(3, 'Install new blades', 'Match driver/passenger lengths. Click until locked.', RepairGuideStockImages.wipers),
    ];

List<RepairGuideStep> _headlightSteps(_Vehicle v) => [
      _s(1, 'Open hood & access bulb', 'Open hood. Remove rubber cap behind headlight assembly on ${v.label}.', RepairGuideStockImages.headlight),
      _s(2, 'Swap bulb', 'Twist bulb counter-clockwise. Do not touch halogen glass with bare skin.', RepairGuideStockImages.headlight, warning: 'Oil from skin can shorten bulb life.'),
      _s(3, 'Test beams', 'Reconnect, test low and high beam before closing cap.', RepairGuideStockImages.headlight),
    ];

List<RepairGuideStep> _tireRotateSteps(_Vehicle v) => [
      _s(1, 'Set pressure', 'Inflate all tires to door-jamb PSI cold.', RepairGuideStockImages.tires, tools: ['Tire gauge']),
      _s(2, 'Cross-rotate', 'Follow owner manual pattern — FWD often crosses rear tires forward.', RepairGuideStockImages.jackStand),
      _s(3, 'Torque lug nuts', 'Star pattern, torque to spec (often 80–100 ft·lb).', RepairGuideStockImages.tires, tools: ['Torque wrench']),
    ];

List<RepairGuide> _standardCarPack(_Vehicle v, DateTime now) => [
      _guide(v, now, suffix: 'oil', repairTitle: 'Oil & Filter Change', summary: 'DIY oil change at home for ${v.label}.', coverUrl: RepairGuideStockImages.oilChange, steps: _oilSteps(v)),
      _guide(v, now, suffix: 'air_filter', repairTitle: 'Engine Air Filter', summary: 'Quick filter swap — improves MPG and acceleration.', coverUrl: RepairGuideStockImages.airFilter, steps: _airFilterSteps(v)),
      _guide(v, now, suffix: 'cabin_filter', repairTitle: 'Cabin Air Filter', summary: 'Cleaner AC air — behind glove box on most models.', coverUrl: RepairGuideStockImages.airFilter, steps: _cabinFilterSteps(v)),
      _guide(v, now, suffix: 'brake_pads', repairTitle: 'Front Brake Pads', summary: 'Replace worn front pads at home with basic tools.', coverUrl: RepairGuideStockImages.brakes, steps: _brakePadSteps(v)),
      _guide(v, now, suffix: 'battery', repairTitle: 'Battery Replacement', summary: 'Swap a dead 12V battery in your driveway.', coverUrl: RepairGuideStockImages.battery, steps: _batterySteps(v)),
      _guide(v, now, suffix: 'trans_fluid', repairTitle: 'Transmission Fluid Check', summary: 'Check level and top off ATF safely.', coverUrl: RepairGuideStockImages.transmission, steps: _transFluidSteps(v)),
      _guide(v, now, suffix: 'coolant', repairTitle: 'Coolant Check & Top-Off', summary: 'Prevent overheating — check overflow tank.', coverUrl: RepairGuideStockImages.coolant, steps: _coolantSteps(v)),
      _guide(v, now, suffix: 'spark_plugs', repairTitle: 'Spark Plug Replacement', summary: 'Fix misfires and rough idle — coil-on-plug engines.', coverUrl: RepairGuideStockImages.sparkPlugs, steps: _sparkSteps(v)),
      _guide(v, now, suffix: 'wipers', repairTitle: 'Wiper Blade Replacement', summary: 'Stop streaking — 5-minute DIY.', coverUrl: RepairGuideStockImages.wipers, steps: _wiperSteps(v)),
      _guide(v, now, suffix: 'headlight', repairTitle: 'Headlight Bulb', summary: 'Replace burned-out low-beam bulb.', coverUrl: RepairGuideStockImages.headlight, steps: _headlightSteps(v)),
      _guide(v, now, suffix: 'tire_rotate', repairTitle: 'Tire Rotation', summary: 'Even tire wear — rotate every 5,000–7,500 miles.', coverUrl: RepairGuideStockImages.tires, steps: _tireRotateSteps(v)),
    ];

List<RepairGuide> kRepairGuideCarSeedGuides() {
  final now = DateTime.now();
  const vehicles = [
    _Vehicle('Toyota', 'Camry', 2020, variant: '2.5L'),
    _Vehicle('Honda', 'Civic', 2019, variant: '2.0L'),
    _Vehicle('Ford', 'F-150', 2021, variant: '5.0L V8'),
    _Vehicle('Chevrolet', 'Silverado', 2020, variant: '1500'),
    _Vehicle('Nissan', 'Altima', 2018, variant: '2.5L'),
    _Vehicle('Jeep', 'Wrangler', 2022, variant: 'Unlimited'),
    _Vehicle('Ram', '1500', 2020, variant: '5.7L Hemi'),
    _Vehicle('Hyundai', 'Elantra', 2021),
    _Vehicle('Kia', 'Sportage', 2022),
    _Vehicle('Subaru', 'Outback', 2020, variant: '2.5L'),
    _Vehicle('Toyota', 'RAV4', 2021),
    _Vehicle('Honda', 'CR-V', 2022),
    _Vehicle('Ford', 'Explorer', 2020),
    _Vehicle('Chevrolet', 'Equinox', 2021),
    _Vehicle('Ford', 'Mustang', 2019, variant: 'GT 5.0L'),
    _Vehicle('Toyota', 'Tacoma', 2022, variant: 'V6'),
    _Vehicle('Honda', 'Accord', 2020),
    _Vehicle('Chevrolet', 'Tahoe', 2021),
    _Vehicle('GMC', 'Sierra', 2019, variant: '1500'),
    _Vehicle('BMW', '3 Series', 2019, variant: '330i'),
    _Vehicle('Mercedes-Benz', 'C-Class', 2020, variant: 'C300'),
  ];

  final out = <RepairGuide>[];
  for (final v in vehicles) {
    out.addAll(_standardCarPack(v, now));
  }

  // Tesla — no oil/spark plugs; EV-specific DIY items.
  const tesla = _Vehicle('Tesla', 'Model 3', 2023);
  out.addAll([
    _guide(tesla, now, suffix: '12v_battery', repairTitle: '12V Battery Service', summary: 'Low-voltage battery supports computers and accessories.', coverUrl: RepairGuideStockImages.battery, steps: _batterySteps(tesla)),
    _guide(tesla, now, suffix: 'cabin_filter', repairTitle: 'Cabin HEPA Filter', summary: 'Replace HVAC filter — often under front trunk trim.', coverUrl: RepairGuideStockImages.airFilter, steps: _cabinFilterSteps(tesla)),
    _guide(tesla, now, suffix: 'wipers', repairTitle: 'Wiper Blades', summary: 'Replace streaking wipers on Model 3.', coverUrl: RepairGuideStockImages.wipers, steps: _wiperSteps(tesla)),
    _guide(tesla, now, suffix: 'tire_rotate', repairTitle: 'Tire Rotation', summary: 'Rotate tires per Tesla schedule — check door placard PSI.', coverUrl: RepairGuideStockImages.tires, steps: _tireRotateSteps(tesla)),
    _guide(tesla, now, suffix: 'coolant', repairTitle: 'Battery Coolant Check', summary: 'Visual check only — battery loop is sealed; top off only per Tesla service manual.', coverUrl: RepairGuideStockImages.coolant, steps: _coolantSteps(tesla)),
  ]);

  return out;
}

List<RepairGuide> kRepairGuideSeedGuides() => kRepairGuideCarSeedGuides();
