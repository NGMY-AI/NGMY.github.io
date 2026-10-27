import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_electronics_board.dart';
import 'ngmy_electronics_more_parts.dart';
import 'ngmy_electronics_screens.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Even more parts for the Electronics Lab: appliances, toys and machines.
// Each one needs the right power: too little and it stays off, too much and it burns out.
// ═════════════════════════════════════════════════════════════════════════════

const Map<String, DeviceSpec> kExtraDeviceSpecs = {
  'fridge': DeviceSpec(20, 4.0, 13.0, polar: false),
  'washer': DeviceSpec(14, 5.0, 13.5, polar: false),
  'blender': DeviceSpec(9, 2.4, 10.0, polar: false),
  'drone': DeviceSpec(7, 5.0, 12.5, polar: false),
  'drill': DeviceSpec(8, 3.5, 12.0, polar: false),
  'torch': DeviceSpec(15, 2.0, 6.0, polar: false),
  'neon': DeviceSpec(45, 6.0, 13.5),
  'microwave': DeviceSpec(10, 8.0, 13.5, polar: false),
  'doorbell': DeviceSpec(25, 3.0, 12.0),
  'camera': DeviceSpec(35, 4.0, 12.0),
  'console': DeviceSpec(40, 4.5, 9.5),
  'heartmon': DeviceSpec(55, 3.0, 9.0),
  'aquarium': DeviceSpec(18, 3.0, 9.0, polar: false),
  'lighthouse': DeviceSpec(22, 4.0, 13.5, polar: false),
  'discoball': DeviceSpec(16, 5.0, 13.5, polar: false),
  'robot': DeviceSpec(30, 4.0, 9.0),
  'toaster': DeviceSpec(5, 3.5, 13.0, polar: false),
  'ledstrip': DeviceSpec(25, 3.0, 13.5),
  'pump': DeviceSpec(14, 2.5, 9.0, polar: false),
  'hairdryer': DeviceSpec(6, 6.0, 13.0, polar: false),
  'headphones': DeviceSpec(30, 1.2, 5.0),
  'smartwatch': DeviceSpec(35, 3.0, 4.5),
  'tablet': DeviceSpec(20, 4.5, 7.5),
};

/// Machines whose blades or wheels turn faster with more volts.
const Set<String> kSpinners = {'fan', 'toycar', 'blender', 'drone', 'drill', 'washer', 'discoball', 'lighthouse', 'pump', 'hairdryer'};

const List<PartInfo> kExtraPartInfos = [
  PartInfo('fridge', 'Fridge', '🧊', Color(0xFF7DD3FC), 'Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.', 'A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.'),
  PartInfo('washer', 'Washing machine', '🫧', Color(0xFF60A5FA), 'The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.', 'A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.'),
  PartInfo('blender', 'Blender', '🥤', Color(0xFFF87171), 'Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.', 'A fast motor spins steel blades at the bottom of a jug.'),
  PartInfo('drone', 'Drone', '🚁', Color(0xFF94A3B8), 'Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.', 'Four small motors spin propellers that push air down, so the drone is pushed up.'),
  PartInfo('drill', 'Power drill', '🔩', Color(0xFFFBBF24), 'The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.', 'A strong motor and gears turn the drill bit slowly but with great force.'),
  PartInfo('torch', 'Torch', '🔦', Color(0xFFFDE68A), 'A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.', 'A small bulb sits in a curved mirror that throws the light forward in a beam.'),
  PartInfo('neon', 'Neon sign', '🪧', Color(0xFFF472B6), 'A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.', 'A glass tube full of neon gas glows when electricity passes through it.'),
  PartInfo('microwave', 'Microwave', '🍲', Color(0xFFFB923C), 'The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.', 'A tube makes invisible microwaves that shake the water in food so it gets hot.'),
  PartInfo('doorbell', 'Doorbell', '🔔', Color(0xFFFACC15), 'Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.', 'A little hammer, pulled by a magnet, hits a metal bar again and again.'),
  PartInfo('camera', 'Security camera', '📷', Color(0xFF64748B), 'A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.', 'A small sensor turns light into numbers, many times a second, and a chip makes them into a video.'),
  PartInfo('console', 'Game console', '🎮', Color(0xFFA78BFA), 'Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.', 'A fast chip draws the picture over and over, many times each second.'),
  PartInfo('heartmon', 'Heart monitor', '🩺', Color(0xFFF43F5E), 'Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.', 'Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.'),
  PartInfo('aquarium', 'Aquarium', '🐠', Color(0xFF22D3EE), 'A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.', 'A small motor pushes air through a stone, making lots of tiny bubbles.'),
  PartInfo('lighthouse', 'Lighthouse', '🗼', Color(0xFFFDE047), 'A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.', 'A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.'),
  PartInfo('discoball', 'Disco ball', '🪩', Color(0xFFE879F9), 'Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.', 'Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.'),
  PartInfo('robot', 'Robot', '🤖', Color(0xFF38BDF8), 'Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.', 'A tiny computer reads sensors and tells small motors in the arms and head what to do.'),
  PartInfo('toaster', 'Toaster', '🍞', Color(0xFFD97706), 'Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.', 'Thin wires get red hot as the current squeezes through them and toast the bread.'),
  PartInfo('ledstrip', 'LED strip', '🌈', Color(0xFFF472B6), 'A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.', 'Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.'),
  PartInfo('pump', 'Water pump', '🚰', Color(0xFF38BDF8), 'Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.', 'A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.'),
  PartInfo('hairdryer', 'Hair dryer', '💨', Color(0xFFFB7185), 'Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.', 'A fan blows air past a hot coil of wire, the same coil idea as a toaster.'),
  PartInfo('headphones', 'Headphones', '🎧', Color(0xFFA78BFA), 'Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.', 'Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.'),
  PartInfo('smartwatch', 'Smart watch', '⌚', Color(0xFF34D399), 'Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.', 'A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.'),
  PartInfo('tablet', 'Tablet', '📲', Color(0xFF60A5FA), 'A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.', 'A bright flat screen, a fast chip and a lithium battery in a thin case.'),
];

/// Draws one of the extra appliances around the origin. Returns false for a kind that is not handled here.
bool paintExtraPart(Canvas c, Part p, double time, void Function(Canvas, String, Offset, Color, double) text) {
  final on = p.glow > 0 && !p.burnt;
  Paint fill(Color col) => Paint()..color = col;
  Paint line(Color col, double w) => Paint()..style = PaintingStyle.stroke..strokeWidth = w..color = col..strokeCap = StrokeCap.round;
  RRect rr(double l, double t, double w, double h, [double r = 5]) => RRect.fromRectAndRadius(Rect.fromLTWH(l, t, w, h), Radius.circular(r));
  Paint grad(Rect r, Color a, Color b) => Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [a, b]).createShader(r);
  switch (p.kind) {
    case 'fridge':
      final body = rr(-16, -28, 32, 54);
      c.drawRRect(body, grad(body.outerRect, const Color(0xFFF1F5F9), const Color(0xFF94A3B8)));
      c.drawLine(const Offset(-16, -8), const Offset(16, -8), line(Colors.black45, 1.4));
      c.drawLine(const Offset(10, -22), const Offset(10, -13), line(const Color(0xFF475569), 2.4));
      c.drawLine(const Offset(10, -4), const Offset(10, 8), line(const Color(0xFF475569), 2.4));
      if (on) {
        c.drawCircle(const Offset(0, -18), 14, fill(const Color(0xFFBAE6FD).withValues(alpha: 0.5))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 7));
        for (var k = 0; k < 3; k++) {
          final ph = (time * 0.6 + k / 3) % 1.0;
          text(c, '❄', Offset(-12 + k * 9.0, 4 + ph * 16), Colors.white.withValues(alpha: 1 - ph), 9);
        }
      }
      return true;
    case 'washer':
      c.drawRRect(rr(-22, -26, 44, 50), grad(const Rect.fromLTWH(-22, -26, 44, 50), const Color(0xFFF8FAFC), const Color(0xFFCBD5E1)));
      c.drawCircle(const Offset(0, 4), 16, fill(const Color(0xFF475569)));
      c.drawCircle(const Offset(0, 4), 13, fill(on ? const Color(0xFF38BDF8).withValues(alpha: 0.85) : const Color(0xFF0F172A)));
      if (on) {
        c.save();
        c.translate(0, 4);
        c.rotate(p.spin * 0.6);
        for (var k = 0; k < 3; k++) {
          c.drawLine(Offset.zero, Offset(math.cos(k * 2.09) * 11, math.sin(k * 2.09) * 11), line(Colors.white70, 3));
        }
        c.restore();
        for (var k = 0; k < 4; k++) {
          final ph = (time * 0.8 + k * 0.25) % 1.0;
          c.drawCircle(Offset(math.sin(k * 2.0 + time) * 9, 4 - ph * 12), 1.6 + ph * 2, fill(Colors.white.withValues(alpha: 0.8 * (1 - ph))));
        }
      }
      c.drawCircle(const Offset(-14, -19), 2.4, fill(on ? const Color(0xFF22C55E) : const Color(0xFF64748B)));
      c.drawCircle(const Offset(-7, -19), 2.4, fill(const Color(0xFF64748B)));
      return true;
    case 'blender':
      c.drawRRect(rr(-14, 14, 28, 12, 4), fill(const Color(0xFF374151)));
      final jug = Path()..moveTo(-16, -26)..lineTo(16, -26)..lineTo(12, 14)..lineTo(-12, 14)..close();
      c.drawPath(jug, fill(const Color(0xFFBAE6FD).withValues(alpha: 0.35)));
      if (on) c.drawPath(Path()..moveTo(-14, -10)..lineTo(14, -10)..lineTo(12, 14)..lineTo(-12, 14)..close(), fill(const Color(0xFFEF4444).withValues(alpha: 0.7)));
      c.drawPath(jug, line(Colors.white70, 1.6));
      c.save();
      c.translate(0, 10);
      c.rotate(p.spin);
      c.drawLine(const Offset(-9, 0), const Offset(9, 0), line(const Color(0xFFE5E7EB), 3));
      c.restore();
      if (on) {
        for (var k = 0; k < 3; k++) {
          c.drawCircle(Offset(math.sin(time * 9 + k * 2) * 9, -10 - ((time * 1.6 + k * 0.33) % 1.0) * 12), 2.4, fill(const Color(0xFFFCA5A5)));
        }
      }
      return true;
    case 'drone':
      c.drawRRect(rr(-10, -4, 20, 10, 4), fill(const Color(0xFF334155)));
      c.drawCircle(const Offset(0, 1), 3, fill(on ? const Color(0xFF22C55E) : const Color(0xFF64748B)));
      final lift = on ? -3 + math.sin(time * 4) * 2 : 4.0;
      for (final x in const [-24.0, 24.0]) {
        c.drawLine(Offset(x * 0.4, 1), Offset(x, -4 + lift), line(const Color(0xFF475569), 3));
        c.save();
        c.translate(x, -6 + lift);
        c.drawLine(const Offset(-11, 0), const Offset(11, 0), line(Colors.white.withValues(alpha: on ? 0.35 : 0.9), 3));
        if (on) c.drawOval(Rect.fromCenter(center: Offset.zero, width: 24 + math.sin(p.spin * 3) * 4, height: 6), fill(Colors.white.withValues(alpha: 0.25)));
        c.restore();
      }
      return true;
    case 'drill':
      final body = Path()..moveTo(-24, -12)..lineTo(10, -12)..lineTo(10, 2)..lineTo(-2, 2)..lineTo(-6, 22)..lineTo(-16, 22)..lineTo(-14, 2)..lineTo(-24, 2)..close();
      c.drawPath(body, grad(const Rect.fromLTWH(-24, -12, 34, 34), const Color(0xFFFBBF24), const Color(0xFFB45309)));
      c.drawRect(const Rect.fromLTWH(10, -8, 8, 6), fill(const Color(0xFF9CA3AF)));
      c.save();
      c.translate(18, -5);
      c.rotate(p.spin * 2);
      c.drawLine(const Offset(0, 0), const Offset(14, 0), line(const Color(0xFFE5E7EB), 2.4));
      c.drawLine(const Offset(2, -2), const Offset(12, 2), line(Colors.black38, 1));
      c.restore();
      if (on) {
        for (var k = 0; k < 4; k++) {
          final ph = (time * 3 + k * 0.25) % 1.0;
          c.drawCircle(Offset(34 + ph * 6, -5 + math.sin(k * 3.0 + time * 20) * 6 * ph), 1.4, fill(const Color(0xFFFDE047).withValues(alpha: 1 - ph)));
        }
      }
      return true;
    case 'torch':
      if (on) {
        final k = (0.5 + 0.12 * (p.v.abs() - 2)).clamp(0.5, 1.0);
        c.drawPath(Path()..moveTo(16, -6)..lineTo(52, -26)..lineTo(52, 18)..lineTo(16, 4)..close(), fill(const Color(0xFFFDE68A).withValues(alpha: 0.35 * k)));
      }
      c.drawRRect(rr(-26, -6, 30, 12, 3), grad(const Rect.fromLTWH(-26, -6, 30, 12), const Color(0xFF6B7280), const Color(0xFF1F2937)));
      final head = Path()..moveTo(4, -6)..lineTo(18, -12)..lineTo(18, 12)..lineTo(4, 6)..close();
      c.drawPath(head, fill(const Color(0xFF374151)));
      c.drawCircle(const Offset(15, 0), 7, fill(on ? Colors.white : const Color(0xFF9CA3AF)));
      return true;
    case 'neon':
      c.drawRRect(rr(-30, -14, 60, 28, 6), fill(const Color(0xFF0B0F17)));
      final flick = on && (p.onAge > 0.5 || (time * 17).floor() % 3 != 0);
      final col = flick ? const Color(0xFFF472B6) : const Color(0xFF5B2A44);
      if (flick) c.drawRRect(rr(-28, -12, 56, 24, 6), fill(const Color(0xFFF472B6).withValues(alpha: 0.35))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
      c.drawRRect(rr(-27, -11, 54, 22, 5), line(col, 2.2));
      text(c, 'OPEN', const Offset(-18, -9), col, 17);
      return true;
    case 'microwave':
      c.drawRRect(rr(-30, -18, 60, 38), grad(const Rect.fromLTWH(-30, -18, 60, 38), const Color(0xFFE5E7EB), const Color(0xFF6B7280)));
      c.drawRRect(rr(-26, -14, 38, 30, 3), fill(on ? const Color(0xFFFDE68A).withValues(alpha: 0.75) : const Color(0xFF111827)));
      if (on) {
        c.save();
        c.translate(-7, 8);
        c.rotate(p.spin * 0.5);
        c.drawOval(Rect.fromCenter(center: Offset.zero, width: 22, height: 7), fill(const Color(0xFFB45309)));
        c.restore();
      }
      c.drawRRect(rr(15, -14, 12, 12, 2), fill(const Color(0xFF0B0F17)));
      if (on) {
        final left = (59 - (time * 1.0).floor() % 60).toString().padLeft(2, '0');
        text(c, '0:$left', const Offset(15, -12), const Color(0xFF4ADE80), 6.5);
      }
      c.drawCircle(const Offset(21, 8), 4, fill(const Color(0xFF9CA3AF)));
      return true;
    case 'doorbell':
      c.drawRRect(rr(-16, -26, 32, 52, 8), fill(const Color(0xFFE2E8F0)));
      c.drawCircle(const Offset(0, -8), 10, fill(on ? const Color(0xFFFACC15) : const Color(0xFF475569)));
      c.save();
      c.translate(0, -8);
      c.rotate(on ? math.sin(time * 16) * 0.45 : 0);
      text(c, '🔔', const Offset(-8, -9), Colors.white, 16);
      c.restore();
      c.drawCircle(const Offset(0, 14), 6, fill(const Color(0xFF3B82F6)));
      c.drawCircle(const Offset(0, 14), 6, line(Colors.white, 1.6));
      if (on) {
        for (var k = 1; k <= 2; k++) {
          c.drawArc(Rect.fromCircle(center: const Offset(0, -8), radius: 14.0 + k * 6 + (time * 14) % 6), -0.9, 1.8, false, line(const Color(0xFFFACC15).withValues(alpha: 0.9 - k * 0.3), 1.8));
        }
      }
      return true;
    case 'camera':
      c.drawLine(const Offset(-18, 20), const Offset(-6, 6), line(const Color(0xFF475569), 4));
      c.save();
      c.rotate(on ? math.sin(time * 0.9) * 0.18 : 0);
      c.drawRRect(rr(-24, -14, 46, 22, 5), grad(const Rect.fromLTWH(-24, -14, 46, 22), const Color(0xFFE5E7EB), const Color(0xFF64748B)));
      c.drawCircle(const Offset(14, -3), 8, fill(const Color(0xFF111827)));
      c.drawCircle(const Offset(14, -3), 4.5, fill(on ? const Color(0xFF38BDF8) : const Color(0xFF1F2937)));
      c.drawCircle(const Offset(-17, -8), 2.2, fill(on && (time * 1.6).floor() % 2 == 0 ? const Color(0xFFEF4444) : const Color(0xFF450A0A)));
      c.restore();
      if (on) text(c, 'REC', const Offset(-24, 14), const Color(0xFFEF4444), 9);
      return true;
    case 'console':
      c.drawRRect(rr(-28, -22, 56, 44, 8), grad(const Rect.fromLTWH(-28, -22, 56, 44), const Color(0xFF6D28D9), const Color(0xFF312E81)));
      final scr = rr(-20, -17, 40, 22, 3);
      c.drawRRect(scr, fill(const Color(0xFF020617)));
      if (on) {
        final bx = math.sin(time * 2.3) * 14, by = math.cos(time * 3.1) * 6;
        c.drawCircle(Offset(bx, -6 + by), 2.6, fill(Colors.white));
        c.drawRect(Rect.fromLTWH(-18, -9 + math.sin(time * 2.3 + 0.4) * 6, 2.4, 8), fill(const Color(0xFF4ADE80)));
        c.drawRect(Rect.fromLTWH(15.6, -9 + math.sin(time * 2.3 - 0.4) * 6, 2.4, 8), fill(const Color(0xFFF472B6)));
      }
      c.drawCircle(const Offset(-16, 14), 4, fill(Colors.black54));
      c.drawCircle(const Offset(14, 12), 2.4, fill(const Color(0xFFEF4444)));
      c.drawCircle(const Offset(20, 15), 2.4, fill(const Color(0xFF22C55E)));
      return true;
    case 'heartmon':
      c.drawRRect(rr(-30, -22, 60, 44, 6), fill(const Color(0xFF111827)));
      c.drawRRect(rr(-26, -18, 52, 28, 3), fill(const Color(0xFF020617)));
      if (on) {
        final path = Path();
        for (var x = -25.0; x <= 25.0; x += 1.0) {
          final ph = ((x + 25) / 50 - time * 0.5) % 1.0;
          final double beat = ph < 0.1 ? math.sin(ph / 0.1 * math.pi) * -1 : (ph < 0.14 ? 0.6 : (ph < 0.2 ? -0.4 : 0.0));
          final y = -4 + beat * 11;
          x == -25.0 ? path.moveTo(x, y) : path.lineTo(x, y);
        }
        c.drawPath(path, line(const Color(0xFF4ADE80), 1.8));
        text(c, '72', const Offset(14, -17), const Color(0xFFF43F5E), 11);
        text(c, '♥', const Offset(-26, -18), const Color(0xFFF43F5E).withValues(alpha: (math.sin(time * 9) + 1.4) / 2.4), 9 + math.sin(time * 9) * 1.2);
      }
      c.drawCircle(const Offset(-20, 16), 3, fill(on ? const Color(0xFF22C55E) : const Color(0xFF475569)));
      return true;
    case 'aquarium':
      c.drawRRect(rr(-26, -20, 52, 40, 4), fill(const Color(0xFF0EA5E9).withValues(alpha: on ? 0.5 : 0.3)));
      c.drawRRect(rr(-26, -20, 52, 40, 4), line(Colors.white70, 1.6));
      c.drawRect(const Rect.fromLTWH(-25, 14, 50, 5), fill(const Color(0xFFD6B77B)));
      if (on) {
        final fx = math.sin(time * 1.1) * 14;
        c.save();
        c.translate(fx, -2 + math.sin(time * 2) * 3);
        if (math.cos(time * 1.1) < 0) c.scale(-1, 1);
        c.drawOval(Rect.fromCenter(center: Offset.zero, width: 14, height: 8), fill(const Color(0xFFFB923C)));
        c.drawPath(Path()..moveTo(-6, 0)..lineTo(-12, -4)..lineTo(-12, 4)..close(), fill(const Color(0xFFF97316)));
        c.drawCircle(const Offset(3, -1), 1.2, fill(Colors.black));
        c.restore();
        for (var k = 0; k < 5; k++) {
          final ph = (time * 0.7 + k * 0.2) % 1.0;
          c.drawCircle(Offset(-18 + math.sin(ph * 8 + k) * 2, 13 - ph * 30), 1.4 + (k % 2), line(Colors.white70, 1));
        }
      }
      return true;
    case 'lighthouse':
      final tower = Path()..moveTo(-9, 22)..lineTo(-5, -16)..lineTo(5, -16)..lineTo(9, 22)..close();
      c.drawPath(tower, grad(const Rect.fromLTWH(-9, -16, 18, 38), Colors.white, const Color(0xFFDC2626)));
      c.drawRect(const Rect.fromLTWH(-6, -22, 12, 7), fill(on ? const Color(0xFFFDE047) : const Color(0xFF475569)));
      c.drawPath(Path()..moveTo(-7, -22)..lineTo(0, -29)..lineTo(7, -22)..close(), fill(const Color(0xFF7F1D1D)));
      if (on) {
        final a = math.sin(p.spin * 0.3);
        final len = 34.0;
        c.drawPath(Path()..moveTo(0, -19)..lineTo(a * len, -19 - 7)..lineTo(a * len, -19 + 7)..close(), fill(const Color(0xFFFDE047).withValues(alpha: 0.45)));
        c.drawCircle(const Offset(0, -19), 14, fill(const Color(0xFFFDE047).withValues(alpha: 0.35))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 7));
      }
      return true;
    case 'discoball':
      c.drawLine(const Offset(0, -28), const Offset(0, -16), line(const Color(0xFF9CA3AF), 1.4));
      c.drawCircle(const Offset(0, 0), 16, grad(const Rect.fromLTRB(-16, -16, 16, 16), const Color(0xFFF8FAFC), const Color(0xFF64748B)));
      for (var k = 0; k < 8; k++) {
        c.drawLine(Offset(-16, -12 + k * 3.4), Offset(16, -12 + k * 3.4), line(Colors.black26, 0.7));
      }
      for (var k = 0; k < 5; k++) {
        final a = p.spin * 0.5 + k * 1.26;
        c.drawLine(Offset(math.cos(a) * 16 * 0.3, math.sin(a) * 16 * 0.3), Offset(math.cos(a) * 16, 0), line(Colors.black26, 0.7));
      }
      if (on) {
        const cols = [Color(0xFFF472B6), Color(0xFF38BDF8), Color(0xFFFDE047), Color(0xFF4ADE80)];
        for (var k = 0; k < 10; k++) {
          final a = time * 2 + k * 0.63;
          final r = 22 + (k % 3) * 6.0;
          c.drawCircle(Offset(math.cos(a) * r, math.sin(a) * r * 0.8), 1.8, fill(cols[k % 4].withValues(alpha: 0.5 + 0.5 * math.sin(time * 9 + k))));
        }
      }
      return true;
    case 'robot':
      c.drawRRect(rr(-14, -4, 28, 24, 5), grad(const Rect.fromLTWH(-14, -4, 28, 24), const Color(0xFFCBD5E1), const Color(0xFF64748B)));
      c.drawRRect(rr(-12, -26, 24, 20, 5), grad(const Rect.fromLTWH(-12, -26, 24, 20), const Color(0xFFE2E8F0), const Color(0xFF94A3B8)));
      c.drawLine(const Offset(0, -26), const Offset(0, -31), line(const Color(0xFF475569), 1.6));
      c.drawCircle(const Offset(0, -32), 2.2, fill(on ? const Color(0xFFEF4444) : const Color(0xFF475569)));
      final blink = on && (time * 0.8) % 1.0 > 0.08;
      for (final x in const [-5.0, 5.0]) {
        c.drawCircle(Offset(x, -17), 3.2, fill(on ? (blink ? const Color(0xFF22D3EE) : const Color(0xFF0E7490)) : const Color(0xFF1F2937)));
      }
      c.save();
      c.translate(14, 0);
      c.rotate(on ? -0.6 + math.sin(time * 5) * 0.6 : 0.3);
      c.drawLine(Offset.zero, const Offset(11, 8), line(const Color(0xFF94A3B8), 4));
      c.restore();
      c.drawLine(const Offset(-14, 0), const Offset(-24, 10), line(const Color(0xFF94A3B8), 4));
      c.drawRect(const Rect.fromLTWH(-6, 5, 12, 7), fill(on ? const Color(0xFF22D3EE).withValues(alpha: 0.7) : const Color(0xFF334155)));
      return true;
    case 'toaster':
      final pop = on ? math.min(1.0, p.onAge / 3.0) : 0.0;
      for (final x in const [-14.0, 3.0]) {
        c.drawRRect(rr(x + 1, -4 - pop * 14, 10, 14, 2), fill(Color.lerp(const Color(0xFFFDE68A), const Color(0xFFB45309), pop)!));
      }
      c.drawRRect(rr(-24, -6, 48, 26, 8), grad(const Rect.fromLTWH(-24, -6, 48, 26), const Color(0xFFE5E7EB), const Color(0xFF6B7280)));
      for (final x in const [-14.0, 3.0]) {
        c.drawRRect(rr(x, -5, 12, 5, 2), fill(on ? const Color(0xFFEA580C) : const Color(0xFF111827)));
        if (on) c.drawRRect(rr(x, -5, 12, 5, 2), fill(const Color(0xFFFB923C).withValues(alpha: 0.5))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
      }
      c.drawLine(const Offset(24, 2), const Offset(30, 2), line(const Color(0xFF111827), 3));
      return true;
    case 'ledstrip':
      c.drawRRect(rr(-34, -4, 68, 10, 4), fill(const Color(0xFF1F2937)));
      for (var k = 0; k < 9; k++) {
        final hue = (time * 90 + k * 40) % 360;
        final col = on ? HSVColor.fromAHSV(1, hue, 0.8, 1).toColor() : const Color(0xFF374151);
        if (on) c.drawCircle(Offset(-30 + k * 7.5, 1), 7, fill(col.withValues(alpha: 0.45))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
        c.drawCircle(Offset(-30 + k * 7.5, 1), 2.6, fill(col));
      }
      c.drawRRect(rr(-40, -2, 6, 6, 1), fill(const Color(0xFF9CA3AF)));
      return true;
    case 'pump':
      c.drawRRect(rr(-16, -2, 32, 22, 6), grad(const Rect.fromLTWH(-16, -2, 32, 22), const Color(0xFF0EA5E9), const Color(0xFF075985)));
      c.drawCircle(const Offset(-2, 9), 8, fill(const Color(0xFF082F49)));
      c.save();
      c.translate(-2, 9);
      c.rotate(p.spin);
      for (var k = 0; k < 3; k++) {
        c.drawLine(Offset.zero, Offset(math.cos(k * 2.09) * 7, math.sin(k * 2.09) * 7), line(const Color(0xFFBAE6FD), 2.4));
      }
      c.restore();
      c.drawPath(Path()..moveTo(16, 6)..lineTo(26, 6)..lineTo(26, -20)..lineTo(10, -20), line(const Color(0xFF94A3B8), 4));
      if (on) {
        for (var k = 0; k < 5; k++) {
          final ph = (time * 0.9 + k * 0.2) % 1.0;
          c.drawCircle(Offset(26, 6 - ph * 26), 2.2, fill(const Color(0xFF7DD3FC)));
        }
        c.drawCircle(const Offset(8, -14), 3.2, fill(const Color(0xFF7DD3FC).withValues(alpha: 0.7)));
      }
      return true;
    case 'hairdryer':
      c.save();
      c.rotate(-0.15);
      c.drawRRect(rr(-26, -14, 40, 22, 10), grad(const Rect.fromLTWH(-26, -14, 40, 22), const Color(0xFFFB7185), const Color(0xFFBE123C)));
      c.drawRRect(rr(14, -10, 12, 14, 3), fill(const Color(0xFF1F2937)));
      c.drawRRect(rr(-10, 6, 12, 22, 4), fill(const Color(0xFF374151)));
      c.restore();
      if (on) {
        for (var k = 0; k < 4; k++) {
          final ph = (time * 3 + k * 0.25) % 1.0;
          c.drawLine(Offset(24 + ph * 18, -10 + k * 5.0), Offset(32 + ph * 18, -10 + k * 5.0), line(Colors.white.withValues(alpha: 1 - ph), 1.8));
        }
        c.drawCircle(const Offset(20, -3), 8, fill(const Color(0xFFFB923C).withValues(alpha: 0.4))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
      }
      return true;
    case 'headphones':
      c.drawArc(Rect.fromCenter(center: const Offset(0, 2), width: 44, height: 44), math.pi, math.pi, false, line(const Color(0xFF475569), 4));
      for (final x in const [-22.0, 22.0]) {
        c.drawRRect(rr(x - 7, 0, 14, 20, 6), grad(Rect.fromLTWH(x - 7, 0, 14, 20), const Color(0xFFA78BFA), const Color(0xFF5B21B6)));
        if (on) {
          for (var k = 1; k <= 2; k++) {
            c.drawArc(Rect.fromCircle(center: Offset(x, 10), radius: 10.0 + k * 5 + (time * 12) % 5), x < 0 ? 2.2 : -0.9, 1.6, false, line(const Color(0xFFC4B5FD).withValues(alpha: 0.9 - k * 0.3), 1.6));
          }
        }
      }
      if (on) text(c, '♪', Offset(-4, -8 - (time * 14) % 8), const Color(0xFFE9D5FF), 12);
      return true;
    case 'smartwatch':
      c.drawRRect(rr(-8, -30, 16, 14, 3), fill(const Color(0xFF1F2937)));
      c.drawRRect(rr(-8, 14, 16, 14, 3), fill(const Color(0xFF1F2937)));
      c.drawRRect(rr(-14, -17, 28, 32, 8), grad(const Rect.fromLTWH(-14, -17, 28, 32), const Color(0xFF9CA3AF), const Color(0xFF374151)));
      c.drawRRect(rr(-11, -14, 22, 26, 6), fill(const Color(0xFF020617)));
      if (on) {
        final now = DateTime.now();
        text(c, '${now.hour.toString().padLeft(2, '0')}:${now.minute.toString().padLeft(2, '0')}', const Offset(-9.5, -11), const Color(0xFF4ADE80), 9.5);
        final beat = (math.sin(time * 9) + 1) / 2;
        text(c, '♥', Offset(-8, 1), Color.lerp(const Color(0xFF9F1239), const Color(0xFFF43F5E), beat)!, 8 + beat * 2);
        text(c, '${70 + (time * 2).floor() % 6}', const Offset(0, 2), Colors.white, 7);
      }
      return true;
    case 'tablet':
      c.drawRRect(rr(-30, -22, 60, 44, 6), fill(const Color(0xFF0B0F17)));
      c.drawRRect(rr(-30, -22, 60, 44, 6), line(const Color(0xFF94A3B8), 1.6));
      final scr = rr(-27, -19, 54, 38, 3);
      if (on) {
        c.save();
        c.clipRRect(scr);
        c.translate(-27, -19);
        paintNgmyAd(c, const Size(54, 38), time);
        c.restore();
      } else {
        c.drawRRect(scr, fill(const Color(0xFF05070A)));
      }
      return true;
    case 'buck':
      final board = rr(-26, -22, 52, 42, 5);
      c.drawRRect(board, grad(board.outerRect, const Color(0xFF1D4ED8), const Color(0xFF1E3A8A)));
      c.drawRRect(board, line(Colors.white24, 1.2));
      // Coil (the inductor) and a small chip.
      c.drawCircle(const Offset(-10, 4), 9, fill(const Color(0xFF111827)));
      c.drawCircle(const Offset(-10, 4), 6, line(const Color(0xFFB45309), 2));
      c.drawRRect(rr(4, -2, 14, 10, 2), fill(const Color(0xFF111827)));
      // Display with live volts in and out.
      c.drawRRect(rr(-22, -19, 44, 12, 2), fill(const Color(0xFF020617)));
      text(c, '${p.vin.toStringAsFixed(1)}→${(on ? p.vout : p.volts).toStringAsFixed(1)}V', const Offset(-20.5, -17.6), on ? const Color(0xFF4ADE80) : const Color(0xFF64748B), 8.2);
      c.drawCircle(const Offset(18, 14), 2.4, fill(on ? const Color(0xFF22C55E) : const Color(0xFF334155)));
      text(c, 'IN', const Offset(-24, 11), Colors.white70, 6);
      text(c, 'OUT', const Offset(6, 11), Colors.white70, 6);
      return true;
    case 'regulator':
      final heat = on ? (p.drop * p.i.abs() / 2.5).clamp(0.0, 1.0) : 0.0;
      c.drawRRect(rr(-14, -26, 28, 22, 3), fill(Color.lerp(const Color(0xFF94A3B8), const Color(0xFFEF4444), heat)!));
      c.drawCircle(const Offset(0, -20), 3, fill(const Color(0xFF334155)));
      c.drawRRect(rr(-12, -4, 24, 18, 3), grad(const Rect.fromLTWH(-12, -4, 24, 18), const Color(0xFF374151), const Color(0xFF030712)));
      text(c, '7805', const Offset(-9, 0), Colors.white70, 8);
      for (final x in const [-8.0, 0.0, 8.0]) {
        c.drawRect(Rect.fromLTWH(x - 1, 14, 2, 8), fill(const Color(0xFFD1D5DB)));
      }
      if (heat > 0.2) {
        for (var k = 0; k < 3; k++) {
          final ph = (time * 0.9 + k * 0.33) % 1.0;
          c.drawCircle(Offset(-6 + k * 6.0, -28 - ph * 12), 2 + ph * 2, fill(Colors.white.withValues(alpha: 0.5 * (1 - ph))));
        }
      }
      text(c, '5V', const Offset(-7, -24), Colors.black87, 9);
      return true;
    case 'diode':
      c.drawLine(const Offset(-34, 0), const Offset(34, 0), line(const Color(0xFFD1D5DB), 2.4));
      c.drawRRect(rr(-14, -7, 28, 14, 6), fill(const Color(0xFFF59E0B).withValues(alpha: 0.85)));
      c.drawRect(const Rect.fromLTWH(8, -7, 4, 14), fill(Colors.black87));
      if (on) c.drawRRect(rr(-14, -7, 28, 14, 6), fill(const Color(0xFFFDE047).withValues(alpha: 0.4))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      c.drawPath(Path()..moveTo(-8, -4)..lineTo(-8, 4)..lineTo(-1, 0)..close(), fill(Colors.black54));
      text(c, 'one way', const Offset(-17, 10), Colors.white54, 8);
      return true;
    case 'ldr':
      c.drawLine(const Offset(-34, 0), const Offset(-9, 0), line(const Color(0xFFD1D5DB), 2.4));
      c.drawLine(const Offset(9, 0), const Offset(34, 0), line(const Color(0xFFD1D5DB), 2.4));
      c.drawCircle(const Offset(0, 0), 12, fill(const Color(0xFFB45309)));
      c.drawCircle(const Offset(0, 0), 12, line(const Color(0xFF451A03), 1.6));
      final zig = Path()..moveTo(-8, -6);
      for (var k = 0; k < 5; k++) {
        zig.lineTo(k.isEven ? 8 : -8, -6 + k * 3.0);
      }
      c.drawPath(zig, line(const Color(0xFFFDE68A), 1.4));
      text(c, '☀', Offset(-6, -26), Color.lerp(const Color(0xFF475569), const Color(0xFFFDE047), p.level)!, 14);
      text(c, '${(20 + 980 * (1 - p.level)).round()}Ω', const Offset(-14, 13), Colors.white70, 8.5);
      return true;
  }
  return false;
}

/// Parts that take volts down or protect a circuit.
const List<PartInfo> kPowerPartInfos = [
  PartInfo('buck', 'Step-down converter', '🔽', Color(0xFF2DD4BF), 'Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.', 'A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.'),
  PartInfo('regulator', '5 V regulator', '🧊', Color(0xFF94A3B8), 'Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.', 'A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.'),
  PartInfo('diode', 'Diode', '➡️', Color(0xFFFBBF24), 'Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.', 'A join between two kinds of crystal that electrons can cross in one direction but not the other.'),
  PartInfo('ldr', 'Light sensor', '🌞', Color(0xFFFDE047), 'A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.', 'A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.'),
];
