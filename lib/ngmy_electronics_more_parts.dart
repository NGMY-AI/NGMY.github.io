import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_electronics_board.dart';
import 'ngmy_electronics_extra_parts.dart';
import 'ngmy_electronics_screens.dart';

// ═════════════════════════════════════════════════════════════════════════════
// More parts for the Electronics Lab: gadgets that need the right power, plus meters.
// ═════════════════════════════════════════════════════════════════════════════

/// What a household gadget needs: its resistance, the volts it needs to switch on, and the most it can take.
class DeviceSpec {
  const DeviceSpec(this.load, this.minV, this.maxV, {this.polar = true});
  final double load;
  final double minV;
  final double maxV;

  /// Must be wired the right way round (its left dot, marked +, towards the battery +).
  final bool polar;
}

const Map<String, DeviceSpec> kDeviceSpecs = {
  ...kExtraDeviceSpecs,
  'radio': DeviceSpec(30, 2.5, 10.5),
  'tv': DeviceSpec(50, 5.5, 13.5),
  'fan': DeviceSpec(12, 2.0, 9.5, polar: false),
  'speaker': DeviceSpec(16, 1.3, 9.5),
  'clock': DeviceSpec(40, 2.5, 7.0),
  'calculator': DeviceSpec(60, 1.2, 4.8),
  'phone': DeviceSpec(25, 4.0, 7.0),
  'router': DeviceSpec(30, 8.0, 14.0),
  'siren': DeviceSpec(18, 5.0, 13.5),
  'toycar': DeviceSpec(8, 2.0, 9.5, polar: false),
  'lamp': DeviceSpec(12, 2.5, 8.0, polar: false),
  'lights': DeviceSpec(20, 3.5, 13.5),
  'kettle': DeviceSpec(3.5, 3.0, 13.0, polar: false),
};

const List<PartInfo> kMorePartInfos = [
  PartInfo('voltmeter', 'Voltmeter', '🧭', Color(0xFF34D399), 'Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.', 'A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.'),
  PartInfo('ammeter', 'Ammeter', '📟', Color(0xFFFBBF24), 'Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!', 'A coil on a needle with a tiny resistor, so the current passes through it almost freely.'),
  PartInfo('fan', 'Fan', '🌀', Color(0xFF38BDF8), 'Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.', 'A small motor turns plastic blades that push the air.'),
  PartInfo('speaker', 'Speaker', '🔊', Color(0xFFF472B6), 'Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.', 'A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.'),
  PartInfo('clock', 'Digital clock', '⏰', Color(0xFF4ADE80), 'Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.', 'A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.'),
  PartInfo('calculator', 'Calculator', '🧮', Color(0xFFA3E635), 'Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.', 'A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.'),
  PartInfo('phone', 'Phone charging', '📱', Color(0xFF60A5FA), 'Charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.', 'A lithium battery is filled slowly by a charging chip that keeps the voltage just right.'),
  PartInfo('router', 'WiFi router', '📶', Color(0xFF2DD4BF), 'Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.', 'A small computer plus a radio that sends and receives the internet through the air.'),
  PartInfo('siren', 'Siren', '🚨', Color(0xFFEF4444), 'A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.', 'A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.'),
  PartInfo('toycar', 'Toy car', '🚗', Color(0xFFFB923C), 'A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.', 'A small motor turns a gear that spins the back wheels.'),
  PartInfo('kettle', 'Kettle', '🫖', Color(0xFFFDBA74), 'Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!', 'A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.'),
  PartInfo('lamp', 'Desk lamp', '🪔', Color(0xFFFDE047), 'A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.', 'A bulb in a bendy arm, with a shade that points the light down at your desk.'),
  PartInfo('lights', 'Party lights', '🎄', Color(0xFFE879F9), 'A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.', 'Many small bulbs joined along one wire, each with its own colour of glass.'),
];

/// Draws one of the extra parts around the origin. Returns false for a kind that is not handled here.
bool paintMorePart(Canvas c, Part p, double time, void Function(Canvas, String, Offset, Color, double) text) {
  final on = p.glow > 0 && !p.burnt;
  switch (p.kind) {
    case 'voltmeter':
    case 'ammeter':
      final isV = p.kind == 'voltmeter';
      final face = Rect.fromCircle(center: const Offset(0, -2), radius: 23);
      c.drawCircle(const Offset(0, -2), 25, Paint()..color = const Color(0xFF111827));
      c.drawCircle(const Offset(0, -2), 23, Paint()..shader = const RadialGradient(center: Alignment(-0.3, -0.4), colors: [Colors.white, Color(0xFFE5E7EB)]).createShader(face));
      for (var k = 0; k <= 10; k++) {
        final a = math.pi * 0.8 + k * math.pi * 1.4 / 10;
        c.drawLine(Offset(math.cos(a) * 17, math.sin(a) * 17 - 2), Offset(math.cos(a) * 21, math.sin(a) * 21 - 2), Paint()..color = Colors.black87..strokeWidth = k % 5 == 0 ? 1.8 : 1);
      }
      final reading = isV ? p.v.abs() : p.i.abs();
      final k = (reading / (isV ? 15 : 1.0)).clamp(0.0, 1.0);
      final a = math.pi * 0.8 + k * math.pi * 1.4;
      c.drawLine(const Offset(0, -2), Offset(math.cos(a) * 18, math.sin(a) * 18 - 2), Paint()..color = const Color(0xFFDC2626)..strokeWidth = 2..strokeCap = StrokeCap.round);
      c.drawCircle(const Offset(0, -2), 3, Paint()..color = Colors.black87);
      text(c, isV ? 'V' : 'A', const Offset(-4, -17), Colors.black87, 12);
      text(c, isV ? '${reading.toStringAsFixed(1)} V' : '${(reading * 1000).round()} mA', const Offset(-15, 6), const Color(0xFF111827), 9.5);
      return true;
    case 'fan':
      c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-12, 14, 24, 8), const Radius.circular(3)), Paint()..color = const Color(0xFF475569));
      c.drawRect(const Rect.fromLTWH(-3, 5, 6, 10), Paint()..color = const Color(0xFF64748B));
      c.drawCircle(const Offset(0, -6), 22, Paint()..color = const Color(0xFF0F172A).withValues(alpha: 0.6));
      for (var k = 0; k < 4; k++) {
        c.save();
        c.translate(0, -6);
        c.rotate(p.spin + k * math.pi / 2);
        c.drawOval(Rect.fromCenter(center: const Offset(0, -10), width: 10, height: 18), Paint()..color = const Color(0xFF7DD3FC).withValues(alpha: on && p.glow > 0.5 ? 0.55 : 0.95));
        c.restore();
      }
      c.drawCircle(const Offset(0, -6), 4, Paint()..color = const Color(0xFF1E293B));
      c.drawCircle(const Offset(0, -6), 22, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFCBD5E1));
      c.drawCircle(const Offset(0, -6), 14, Paint()..style = PaintingStyle.stroke..strokeWidth = 0.8..color = Colors.white30);
      return true;
    case 'speaker':
      final box = RRect.fromRectAndRadius(const Rect.fromLTWH(-22, -26, 44, 50), const Radius.circular(7));
      c.drawRRect(box, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF374151), Color(0xFF111827)]).createShader(box.outerRect));
      final pulse = on ? math.sin(time * 40) * 1.6 : 0.0;
      c.drawCircle(const Offset(0, 6), 14 + pulse, Paint()..shader = const RadialGradient(colors: [Color(0xFF4B5563), Color(0xFF030712)]).createShader(Rect.fromCircle(center: const Offset(0, 6), radius: 15)));
      c.drawCircle(const Offset(0, 6), 5, Paint()..color = const Color(0xFF9CA3AF));
      c.drawCircle(const Offset(0, -14), 5 + pulse * 0.4, Paint()..color = const Color(0xFF6B7280));
      if (on) {
        for (var k = 1; k <= 3; k++) {
          c.drawArc(Rect.fromCircle(center: const Offset(24, 0), radius: 6.0 + k * 6 + (time * 18) % 6), -0.8, 1.6, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.8..color = const Color(0xFFF472B6).withValues(alpha: 0.9 - k * 0.2));
        }
      }
      return true;
    case 'clock':
      final body = RRect.fromRectAndRadius(const Rect.fromLTWH(-32, -17, 64, 34), const Radius.circular(7));
      c.drawRRect(body, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF374151), Color(0xFF0B0F17)]).createShader(body.outerRect));
      c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-28, -13, 56, 26), const Radius.circular(4)), Paint()..color = const Color(0xFF030712));
      if (on) {
        final now = DateTime.now();
        final colon = now.millisecond < 500 ? ':' : ' ';
        final hh = now.hour.toString().padLeft(2, '0'), mm = now.minute.toString().padLeft(2, '0');
        c.drawRect(const Rect.fromLTWH(-28, -13, 56, 26), Paint()..color = const Color(0xFF4ADE80).withValues(alpha: 0.12));
        text(c, '$hh$colon$mm', const Offset(-25, -11), const Color(0xFF4ADE80), 21);
      }
      c.drawCircle(const Offset(-24, -22), 2.4, Paint()..color = const Color(0xFFCBD5E1));
      c.drawCircle(const Offset(24, -22), 2.4, Paint()..color = const Color(0xFFCBD5E1));
      return true;
    case 'calculator':
      final body = RRect.fromRectAndRadius(const Rect.fromLTWH(-20, -28, 40, 54), const Radius.circular(6));
      c.drawRRect(body, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF4B5563), Color(0xFF1F2937)]).createShader(body.outerRect));
      c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-16, -24, 32, 14), const Radius.circular(2)), Paint()..color = on ? const Color(0xFFBEF264) : const Color(0xFF3F4A3A));
      if (on) text(c, '3.14159', const Offset(-14, -23), const Color(0xFF1A2E05), 10.5);
      for (var r = 0; r < 4; r++) {
        for (var q = 0; q < 4; q++) {
          c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(-15 + q * 8.0, -6 + r * 8.0, 6, 6), const Radius.circular(1.5)), Paint()..color = q == 3 ? const Color(0xFFF97316) : const Color(0xFFE5E7EB));
        }
      }
      return true;
    case 'phone':
      final body = RRect.fromRectAndRadius(const Rect.fromLTWH(-15, -29, 30, 54), const Radius.circular(6));
      c.drawRRect(body, Paint()..color = const Color(0xFF0B0F17));
      c.drawRRect(body, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.6..color = const Color(0xFF94A3B8));
      final screen = RRect.fromRectAndRadius(const Rect.fromLTWH(-12, -25, 24, 44), const Radius.circular(3));
      if (on) {
        c.drawRRect(screen, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1E3A8A), Color(0xFF0B1230)]).createShader(screen.outerRect));
        // The phone plays NGMY ads while it charges.
        c.save();
        c.clipRRect(screen);
        c.translate(-12, -25);
        paintNgmyAd(c, const Size(24, 44), time);
        c.restore();
        final level = (time * 0.12) % 1.0;
        c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-12, 12, 24, 7), const Radius.circular(2)), Paint()..color = Colors.black54);
        c.drawRect(Rect.fromLTWH(-10, 14.5, 20 * level, 2.4), Paint()..color = const Color(0xFF4ADE80));
        text(c, '⚡${(level * 100).round()}%', const Offset(-9, 12.2), Colors.white, 6);
      } else {
        c.drawRRect(screen, Paint()..color = const Color(0xFF05070A));
      }
      return true;
    case 'router':
      final body = RRect.fromRectAndRadius(const Rect.fromLTWH(-30, -4, 60, 22), const Radius.circular(5));
      c.drawRRect(body, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFF1F5F9), Color(0xFF94A3B8)]).createShader(body.outerRect));
      for (final x in const [-22.0, 22.0]) {
        c.drawLine(Offset(x, -4), Offset(x + (x < 0 ? -4 : 4), -28), Paint()..color = const Color(0xFF1F2937)..strokeWidth = 4..strokeCap = StrokeCap.round);
      }
      for (var k = 0; k < 4; k++) {
        final blink = on && ((time * (3 + k * 1.3)).floor() % 2 == 0 || k == 0);
        c.drawCircle(Offset(-15 + k * 10.0, 11), 2.6, Paint()..color = blink ? const Color(0xFF22C55E) : const Color(0xFF334155));
      }
      if (on) {
        for (var k = 1; k <= 3; k++) {
          c.drawArc(Rect.fromCircle(center: const Offset(0, -6), radius: 8.0 + k * 6 + (time * 10) % 6), -2.3, 1.5, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.8..color = const Color(0xFF2DD4BF).withValues(alpha: 0.9 - k * 0.2));
        }
      }
      return true;
    case 'siren':
      final flash = on ? (math.sin(time * 14) + 1) / 2 : 0.0;
      c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-20, 12, 40, 10), const Radius.circular(3)), Paint()..color = const Color(0xFF374151));
      if (on) c.drawCircle(const Offset(0, -2), 34, Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.5 * flash)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14));
      final dome = Path()..moveTo(-16, 12)..lineTo(-16, -2)..quadraticBezierTo(0, -30, 16, -2)..lineTo(16, 12)..close();
      c.drawPath(dome, Paint()..color = Color.lerp(const Color(0xFF7F1D1D), const Color(0xFFFF6B6B), flash)!);
      c.drawPath(dome, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.white38);
      if (on) {
        c.save();
        c.translate(0, -2);
        c.rotate(time * 7);
        c.drawLine(Offset.zero, const Offset(0, -14), Paint()..color = Colors.white.withValues(alpha: 0.7)..strokeWidth = 3);
        c.restore();
      }
      return true;
    case 'toycar':
      final bob = on ? math.sin(time * 30) * 0.8 : 0.0;
      c.save();
      c.translate(0, bob);
      final body = Path()..moveTo(-28, 8)..lineTo(-28, -2)..lineTo(-16, -4)..lineTo(-10, -16)..lineTo(10, -16)..lineTo(18, -4)..lineTo(28, -2)..lineTo(28, 8)..close();
      c.drawPath(body, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFFB923C), Color(0xFFC2410C)]).createShader(const Rect.fromLTWH(-28, -16, 56, 24)));
      c.drawPath(Path()..moveTo(-8, -4)..lineTo(-4, -13)..lineTo(4, -13)..lineTo(4, -4)..close(), Paint()..color = const Color(0xFFBAE6FD));
      c.drawPath(Path()..moveTo(8, -4)..lineTo(8, -13)..lineTo(11, -13)..lineTo(15, -4)..close(), Paint()..color = const Color(0xFFBAE6FD));
      for (final x in const [-16.0, 16.0]) {
        c.drawCircle(Offset(x, 10), 7.5, Paint()..color = const Color(0xFF111827));
        c.save();
        c.translate(x, 10);
        c.rotate(p.spin * 1.4);
        for (var k = 0; k < 4; k++) {
          c.drawLine(Offset.zero, Offset(math.cos(k * math.pi / 2) * 5.5, math.sin(k * math.pi / 2) * 5.5), Paint()..color = const Color(0xFFE5E7EB)..strokeWidth = 1.6);
        }
        c.restore();
      }
      c.restore();
      if (on) {
        for (var k = 0; k < 3; k++) {
          c.drawLine(Offset(-34 - ((time * 40 + k * 8) % 14), -4.0 + k * 5), Offset(-42 - ((time * 40 + k * 8) % 14), -4.0 + k * 5), Paint()..color = Colors.white54..strokeWidth = 1.6);
        }
      }
      return true;
    case 'kettle':
      final body = Path()..moveTo(-18, 20)..lineTo(-14, -12)..quadraticBezierTo(0, -20, 14, -12)..lineTo(18, 20)..close();
      c.drawPath(body, Paint()..shader = const LinearGradient(colors: [Color(0xFF9CA3AF), Color(0xFFF9FAFB), Color(0xFF6B7280)]).createShader(const Rect.fromLTWH(-18, -18, 36, 38)));
      c.drawPath(Path()..moveTo(14, -10)..lineTo(30, -22)..lineTo(32, -18)..lineTo(16, -4)..close(), Paint()..color = const Color(0xFFD1D5DB));
      c.drawPath(Path()..moveTo(-14, -8)..quadraticBezierTo(-34, -6, -18, 12), Paint()..style = PaintingStyle.stroke..strokeWidth = 5..color = const Color(0xFF111827));
      c.drawRect(const Rect.fromLTWH(-18, 20, 36, 4), Paint()..color = on ? Color.lerp(const Color(0xFFFB923C), const Color(0xFFFFEDD5), (math.sin(time * 6) + 1) / 2)! : const Color(0xFF374151));
      if (on) {
        c.drawCircle(const Offset(0, 22), 24, Paint()..color = const Color(0xFFFB923C).withValues(alpha: 0.3)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
        for (var k = 0; k < 4; k++) {
          final ph = (time * 0.9 + k * 0.25) % 1.0;
          c.drawCircle(Offset(30 + math.sin(ph * 9 + k) * 4, -26 - ph * 26), 3 + ph * 5, Paint()..color = Colors.white.withValues(alpha: 0.6 * (1 - ph)));
        }
      }
      c.drawCircle(const Offset(0, -17), 3, Paint()..color = const Color(0xFF111827));
      return true;
    case 'lamp':
      if (on) {
        final k = (0.4 + 0.12 * (p.v.abs() - 3)).clamp(0.4, 1.0);
        c.drawPath(Path()..moveTo(-10, -14)..lineTo(-30, 24)..lineTo(10, 24)..lineTo(8, -14)..close(), Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.28 * k));
        c.drawCircle(const Offset(-2, -10), 24, Paint()..color = const Color(0xFFFDE047).withValues(alpha: 0.5 * k)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 12));
      }
      c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(-6, 18, 30, 6), const Radius.circular(3)), Paint()..color = const Color(0xFF374151));
      c.drawLine(const Offset(10, 20), const Offset(14, -4), Paint()..color = const Color(0xFF9CA3AF)..strokeWidth = 3..strokeCap = StrokeCap.round);
      c.drawLine(const Offset(14, -4), const Offset(-2, -20), Paint()..color = const Color(0xFF9CA3AF)..strokeWidth = 3..strokeCap = StrokeCap.round);
      final shade = Path()..moveTo(-14, -16)..lineTo(6, -26)..lineTo(10, -12)..lineTo(-10, -6)..close();
      c.drawPath(shade, Paint()..color = on ? const Color(0xFFFBBF24) : const Color(0xFF9A3412));
      c.drawCircle(const Offset(-2, -9), 4, Paint()..color = on ? Colors.white : const Color(0xFF6B7280));
      return true;
    case 'lights':
      final wire = Path()..moveTo(-34, -6)..quadraticBezierTo(0, 22, 34, -6);
      c.drawPath(wire, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFF166534));
      const cols = [Color(0xFFEF4444), Color(0xFFFACC15), Color(0xFF22C55E), Color(0xFF38BDF8), Color(0xFFE879F9)];
      for (var k = 0; k < 5; k++) {
        final t = (k + 0.5) / 5;
        final pos = Offset(-34 + 68 * t, -6 + 4 * t * (1 - t) * 4 * 4.2 / 1.0 * 0.75 + 0);
        final lit = on && ((time * 2.4 + k * 0.7) % 1.8 < 1.1);
        if (lit) c.drawCircle(pos + const Offset(0, 6), 12, Paint()..color = cols[k].withValues(alpha: 0.6)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 7));
        c.drawPath(Path()..moveTo(pos.dx - 3, pos.dy)..lineTo(pos.dx + 3, pos.dy)..lineTo(pos.dx + 5, pos.dy + 11)..quadraticBezierTo(pos.dx, pos.dy + 17, pos.dx - 5, pos.dy + 11)..close(), Paint()..color = lit ? cols[k] : Color.lerp(cols[k], Colors.black, 0.65)!);
      }
      return true;
  }
  return paintExtraPart(c, p, time, text);
}
