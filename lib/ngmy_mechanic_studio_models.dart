import 'package:flutter/material.dart';

enum NgmyMechanicMode { explore, disassemble, assemble }

enum NgmyMechanicPartCategory {
  powertrain,
  cooling,
  electrical,
  brakes,
  suspension,
  exhaust,
  intake,
  fluids,
  climate,
  body,
}

class NgmyMechanicCarPart {
  const NgmyMechanicCarPart({
    required this.id,
    required this.name,
    required this.category,
    required this.icon,
    required this.color,
    required this.posX,
    required this.posY,
    required this.posZ,
    required this.explodeX,
    required this.explodeY,
    required this.explodeZ,
    required this.summary,
    required this.function,
    required this.maintenance,
    this.installOrder = 50,
    this.size = 1.0,
  });

  final String id;
  final String name;
  final NgmyMechanicPartCategory category;
  final IconData icon;
  final Color color;
  /// 3D position on the car (meters, origin at car center).
  final double posX;
  final double posY;
  final double posZ;
  final double explodeX;
  final double explodeY;
  final double explodeZ;
  final String summary;
  final String function;
  final String maintenance;
  final int installOrder;
  final double size;
}

class NgmyMechanicCarProfile {
  const NgmyMechanicCarProfile({
    required this.id,
    required this.name,
    required this.tagline,
    required this.bodyColor,
    required this.accentColor,
    required this.wheelColor,
    required this.lengthScale,
    required this.heightScale,
    required this.icon,
  });

  final String id;
  final String name;
  final String tagline;
  final Color bodyColor;
  final Color accentColor;
  final Color wheelColor;
  final double lengthScale;
  final double heightScale;
  final IconData icon;
}

const kNgmyMechanicAccent = Color(0xFFF97316);
const kNgmyMechanicAccent2 = Color(0xFF0EA5E9);
const kNgmyMechanicGarageBg = Color(0xFF0B1220);

const List<NgmyMechanicCarProfile> kNgmyMechanicCars = [
  NgmyMechanicCarProfile(
    id: 'sedan',
    name: 'City Sedan',
    tagline: 'Front-engine, daily driver layout',
    bodyColor: Color(0xFF94A3B8),
    accentColor: Color(0xFF38BDF8),
    wheelColor: Color(0xFF1E293B),
    lengthScale: 1.0,
    heightScale: 0.92,
    icon: Icons.directions_car_filled_rounded,
  ),
  NgmyMechanicCarProfile(
    id: 'suv',
    name: 'Family SUV',
    tagline: 'Raised chassis & AWD-ready',
    bodyColor: Color(0xFF166534),
    accentColor: Color(0xFF4ADE80),
    wheelColor: Color(0xFF14532D),
    lengthScale: 1.08,
    heightScale: 1.12,
    icon: Icons.airport_shuttle_rounded,
  ),
  NgmyMechanicCarProfile(
    id: 'sports',
    name: 'Sports Coupe',
    tagline: 'Mid-front engine, low profile',
    bodyColor: Color(0xFFB91C1C),
    accentColor: Color(0xFFFBBF24),
    wheelColor: Color(0xFF111827),
    lengthScale: 0.96,
    heightScale: 0.82,
    icon: Icons.sports_motorsports_rounded,
  ),
  NgmyMechanicCarProfile(
    id: 'pickup',
    name: 'Work Pickup',
    tagline: 'Body-on-frame toughness',
    bodyColor: Color(0xFF92400E),
    accentColor: Color(0xFFFDE68A),
    wheelColor: Color(0xFF292524),
    lengthScale: 1.14,
    heightScale: 1.05,
    icon: Icons.local_shipping_rounded,
  ),
];

List<NgmyMechanicCarPart> ngmyMechanicPartsForCar(NgmyMechanicCarProfile car) {
  final ls = car.lengthScale;
  final hs = car.heightScale;
  final sill = (car.id == 'suv' ? 0.48 : car.id == 'sports' ? 0.28 : 0.38) * hs;
  final belt = sill + (car.id == 'suv' ? 0.42 : 0.36) * hs;
  return [
    NgmyMechanicCarPart(
      id: 'engine',
      name: 'Engine Block',
      category: NgmyMechanicPartCategory.powertrain,
      icon: Icons.settings_rounded,
      color: const Color(0xFF475569),
      posX: 0,
      posY: sill + 0.14,
      posZ: -1.05 * ls,
      explodeX: 0,
      explodeY: 0.35,
      explodeZ: 0.25,
      summary: 'Converts fuel into motion through controlled combustion.',
      function:
          'Pistons move inside cylinders, turning the crankshaft. That rotation travels through the transmission to the wheels.',
      maintenance: 'Change oil on schedule, listen for knocks, fix leaks early.',
      installOrder: 20,
      size: 1.15,
    ),
    NgmyMechanicCarPart(
      id: 'battery',
      name: '12V Battery',
      category: NgmyMechanicPartCategory.electrical,
      icon: Icons.battery_charging_full_rounded,
      color: const Color(0xFF22C55E),
      posX: 0.42 * ls,
      posY: sill + 0.18,
      posZ: -0.85 * ls,
      explodeX: 0.35,
      explodeY: 0.2,
      explodeZ: 0.15,
      summary: 'Stores energy to start the car and power electronics.',
      function: 'Delivers high current to the starter motor, then is recharged by the alternator while driving.',
      maintenance: 'Clean terminals, test voltage yearly, replace every 3–5 years.',
      installOrder: 5,
    ),
    NgmyMechanicCarPart(
      id: 'radiator',
      name: 'Radiator',
      category: NgmyMechanicPartCategory.cooling,
      icon: Icons.ac_unit_rounded,
      color: const Color(0xFF94A3B8),
      posX: 0,
      posY: sill + 0.12,
      posZ: -1.95 * ls,
      explodeX: 0,
      explodeY: 0.15,
      explodeZ: -0.35,
      summary: 'Dissipates heat from engine coolant.',
      function: 'Hot coolant flows through fins; airflow (and fans) pull heat away so the engine stays in safe temperature range.',
      maintenance: 'Flush coolant per manual, check hoses, never open hot cap.',
      installOrder: 35,
    ),
    NgmyMechanicCarPart(
      id: 'alternator',
      name: 'Alternator',
      category: NgmyMechanicPartCategory.electrical,
      icon: Icons.electric_bolt_rounded,
      color: const Color(0xFFEAB308),
      posX: -0.38 * ls,
      posY: sill + 0.16,
      posZ: -0.95 * ls,
      explodeX: -0.4,
      explodeY: 0.25,
      explodeZ: 0.12,
      summary: 'Generates electricity while the engine runs.',
      function: 'A belt spins the alternator rotor, producing AC converted to DC for battery charging and vehicle systems.',
      maintenance: 'Inspect drive belt tension, watch for dim lights or dead battery warnings.',
      installOrder: 40,
    ),
    NgmyMechanicCarPart(
      id: 'starter',
      name: 'Starter Motor',
      category: NgmyMechanicPartCategory.electrical,
      icon: Icons.power_rounded,
      color: const Color(0xFF6366F1),
      posX: 0.28 * ls,
      posY: sill + 0.1,
      posZ: -1.08 * ls,
      explodeX: 0.3,
      explodeY: 0.18,
      explodeZ: 0.1,
      summary: 'Cranks the engine for ignition.',
      function: 'Engages the flywheel ring gear to spin the crankshaft until the engine fires on its own.',
      maintenance: 'Clicking with no crank often means weak battery or worn starter solenoid.',
      installOrder: 25,
    ),
    NgmyMechanicCarPart(
      id: 'transmission',
      name: 'Transmission',
      category: NgmyMechanicPartCategory.powertrain,
      icon: Icons.sync_rounded,
      color: const Color(0xFF334155),
      posX: 0,
      posY: sill + 0.1,
      posZ: -0.15 * ls,
      explodeX: 0,
      explodeY: 0.22,
      explodeZ: 0.35,
      summary: 'Multiplies engine torque and selects gear ratios.',
      function: 'Manual or automatic gears match engine speed to road speed for acceleration and fuel economy.',
      maintenance: 'Service fluid intervals matter; slipping or harsh shifts need diagnosis.',
      installOrder: 45,
      size: 1.1,
    ),
    NgmyMechanicCarPart(
      id: 'brake_pads',
      name: 'Brake Pads',
      category: NgmyMechanicPartCategory.brakes,
      icon: Icons.stop_circle_rounded,
      color: const Color(0xFFDC2626),
      posX: -0.94 * ls,
      posY: sill + 0.02,
      posZ: -1.45 * ls,
      explodeX: -0.55,
      explodeY: 0.12,
      explodeZ: 0,
      summary: 'Friction material that slows the rotor.',
      function: 'Calipers squeeze pads against spinning rotors, converting motion energy into heat.',
      maintenance: 'Replace when squealing or under minimum thickness; bed new pads properly.',
      installOrder: 55,
    ),
    NgmyMechanicCarPart(
      id: 'brake_rotors',
      name: 'Brake Rotors',
      category: NgmyMechanicPartCategory.brakes,
      icon: Icons.album_rounded,
      color: const Color(0xFF71717A),
      posX: -0.94 * ls,
      posY: sill,
      posZ: -1.42 * ls,
      explodeX: -0.6,
      explodeY: 0.08,
      explodeZ: -0.05,
      summary: 'Discs bolted to the wheel hub.',
      function: 'Provide the surface pads clamp against; vented designs shed heat during hard stops.',
      maintenance: 'Measure thickness, resurface or replace if warped (pedal pulse).',
      installOrder: 60,
    ),
    NgmyMechanicCarPart(
      id: 'strut',
      name: 'Strut Assembly',
      category: NgmyMechanicPartCategory.suspension,
      icon: Icons.unfold_more_rounded,
      color: const Color(0xFF0F766E),
      posX: -0.94 * ls,
      posY: sill + 0.22,
      posZ: -1.48 * ls,
      explodeX: -0.5,
      explodeY: 0.35,
      explodeZ: 0.05,
      summary: 'Supports weight and absorbs bumps.',
      function: 'Coil spring + damper control wheel travel, keeping tires planted for grip and comfort.',
      maintenance: 'Leaking oil on strut means replacement; clunks over bumps check mounts.',
      installOrder: 65,
    ),
    NgmyMechanicCarPart(
      id: 'exhaust',
      name: 'Exhaust System',
      category: NgmyMechanicPartCategory.exhaust,
      icon: Icons.air_rounded,
      color: const Color(0xFF78716C),
      posX: 0.32 * ls,
      posY: sill + 0.04,
      posZ: 1.25 * ls,
      explodeX: 0.15,
      explodeY: 0.1,
      explodeZ: 0.45,
      summary: 'Routes burned gases safely rearward.',
      function: 'Header/manifold collects exhaust, catalytic converter reduces emissions, muffler lowers noise.',
      maintenance: 'Rust holes cause leaks; rattles may mean broken hangers or heat shields.',
      installOrder: 70,
    ),
    NgmyMechanicCarPart(
      id: 'air_filter',
      name: 'Air Filter',
      category: NgmyMechanicPartCategory.intake,
      icon: Icons.filter_alt_rounded,
      color: const Color(0xFFF59E0B),
      posX: 0,
      posY: belt - 0.02,
      posZ: -1.35 * ls,
      explodeX: 0,
      explodeY: 0.4,
      explodeZ: -0.1,
      summary: 'Cleans air before it enters the engine.',
      function: 'Traps dust and debris so only clean air mixes with fuel for combustion.',
      maintenance: 'Inspect every oil change; dirty filters hurt power and MPG.',
      installOrder: 10,
    ),
    NgmyMechanicCarPart(
      id: 'oil_filter',
      name: 'Oil Filter',
      category: NgmyMechanicPartCategory.fluids,
      icon: Icons.oil_barrel_rounded,
      color: const Color(0xFFEA580C),
      posX: -0.32 * ls,
      posY: sill + 0.06,
      posZ: -0.72 * ls,
      explodeX: -0.35,
      explodeY: 0.15,
      explodeZ: 0.2,
      summary: 'Traps metal and soot in engine oil.',
      function: 'Bypass filter element removes contaminants so oil can lubricate bearings and camshafts.',
      maintenance: 'Replace with every oil service; coat gasket lightly, hand-tight plus ¾ turn.',
      installOrder: 15,
    ),
    NgmyMechanicCarPart(
      id: 'ac_compressor',
      name: 'A/C Compressor',
      category: NgmyMechanicPartCategory.climate,
      icon: Icons.severe_cold_rounded,
      color: const Color(0xFF0284C7),
      posX: -0.4 * ls,
      posY: sill + 0.14,
      posZ: -0.88 * ls,
      explodeX: -0.45,
      explodeY: 0.22,
      explodeZ: 0.08,
      summary: 'Pumps refrigerant through the climate system.',
      function: 'Compresses low-pressure gas to high pressure, enabling heat exchange in condenser and evaporator.',
      maintenance: 'Weak cold air? Check refrigerant level, clutch engagement, and belt condition.',
      installOrder: 50,
    ),
    NgmyMechanicCarPart(
      id: 'hood',
      name: 'Hood / Bonnet',
      category: NgmyMechanicPartCategory.body,
      icon: Icons.car_repair_rounded,
      color: Color.lerp(car.bodyColor, Colors.white, 0.12)!,
      posX: 0,
      posY: belt + 0.02,
      posZ: -1.25 * ls,
      explodeX: 0,
      explodeY: 0.55,
      explodeZ: -0.05,
      summary: 'Access panel over the engine bay.',
      function: 'Protects engine components and allows technicians to service the powertrain.',
      maintenance: 'Check latch alignment; prop rod or struts must hold hood securely when open.',
      installOrder: 80,
      size: 1.25,
    ),
    NgmyMechanicCarPart(
      id: 'wheel_fl',
      name: 'Front Wheel',
      category: NgmyMechanicPartCategory.suspension,
      icon: Icons.tire_repair_rounded,
      color: car.wheelColor,
      posX: -0.94 * ls,
      posY: 0.36 * hs,
      posZ: -1.45 * ls,
      explodeX: -0.65,
      explodeY: 0.05,
      explodeZ: -0.15,
      summary: 'Tire + rim assembly transfers grip to the road.',
      function: 'Bearings allow rotation; tire contact patch provides traction, braking, and steering.',
      maintenance: 'Rotate tires, check pressure monthly, inspect tread depth and sidewall damage.',
      installOrder: 75,
    ),
  ];
}

String ngmyMechanicCategoryLabel(NgmyMechanicPartCategory c) {
  switch (c) {
    case NgmyMechanicPartCategory.powertrain:
      return 'Powertrain';
    case NgmyMechanicPartCategory.cooling:
      return 'Cooling';
    case NgmyMechanicPartCategory.electrical:
      return 'Electrical';
    case NgmyMechanicPartCategory.brakes:
      return 'Brakes';
    case NgmyMechanicPartCategory.suspension:
      return 'Suspension';
    case NgmyMechanicPartCategory.exhaust:
      return 'Exhaust';
    case NgmyMechanicPartCategory.intake:
      return 'Intake';
    case NgmyMechanicPartCategory.fluids:
      return 'Fluids';
    case NgmyMechanicPartCategory.climate:
      return 'Climate';
    case NgmyMechanicPartCategory.body:
      return 'Body';
  }
}
