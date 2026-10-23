import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

/// Shared pieces for the Core Protocol studios: page, tool panel, buttons, sound and sharing.
const Color kStudioBg = Color(0xFF121212);
const Color kStudioPanel = Color(0xFF17171A);

/// The page every studio sits in: a back button, a title, a help button, the stage and a tool panel.
class StudioPage extends StatelessWidget {
  const StudioPage({
    super.key,
    required this.title,
    required this.accent,
    required this.help,
    required this.stage,
    this.tools,
    this.actions = const [],
  });

  final String title;
  final Color accent;

  /// What this studio is and how to play with it (shown by the ? button, and once on first open).
  final String help;
  final Widget stage;
  final Widget? tools;
  final List<Widget> actions;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kStudioBg,
      body: SafeArea(
        child: Column(children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(4, 4, 6, 2),
            child: Row(children: [
              IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 20)),
              Expanded(child: Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: accent, fontWeight: FontWeight.w900, letterSpacing: 1.6, fontSize: 14.5))),
              ...actions,
              IconButton(
                tooltip: 'How to play',
                onPressed: () => showStudioHelp(context, title, help, accent),
                icon: Icon(Icons.help_outline_rounded, color: accent, size: 22),
              ),
            ]),
          ),
          Expanded(child: stage),
          if (tools != null)
            Container(
              width: double.infinity,
              padding: const EdgeInsets.fromLTRB(12, 10, 12, 12),
              decoration: BoxDecoration(color: kStudioPanel, border: Border(top: BorderSide(color: Colors.white.withValues(alpha: 0.08)))),
              child: tools,
            ),
        ]),
      ),
    );
  }
}

Future<void> showStudioHelp(BuildContext context, String title, String help, Color accent) {
  return showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      backgroundColor: const Color(0xFF1B1B1F),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24), side: BorderSide(color: accent.withValues(alpha: 0.4))),
      title: Text(title, style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 16, letterSpacing: 1.2)),
      content: Text(help, style: const TextStyle(color: Colors.white70, height: 1.5, fontSize: 14)),
      actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Got it'))],
    ),
  );
}

/// A pill you can switch on: used for brushes, modes and styles.
class StudioChip extends StatelessWidget {
  const StudioChip({super.key, required this.label, required this.selected, required this.onTap, this.icon, this.color = const Color(0xFF34D399)});
  final String label;
  final bool selected;
  final VoidCallback onTap;
  final IconData? icon;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: 7),
      child: GestureDetector(
        onTap: () {
          HapticFeedback.selectionClick();
          onTap();
        },
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(999),
            color: selected ? color.withValues(alpha: 0.22) : Colors.white.withValues(alpha: 0.06),
            border: Border.all(color: selected ? color : Colors.white.withValues(alpha: 0.12), width: selected ? 1.6 : 1),
          ),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            if (icon != null) ...[Icon(icon, size: 16, color: selected ? color : Colors.white60), const SizedBox(width: 5)],
            Text(label, style: TextStyle(color: selected ? Colors.white : Colors.white70, fontWeight: FontWeight.w800, fontSize: 12)),
          ]),
        ),
      ),
    );
  }
}

/// A row of chips that scrolls sideways.
class StudioRow extends StatelessWidget {
  const StudioRow({super.key, required this.children, this.label});
  final List<Widget> children;
  final String? label;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(children: [
        if (label != null) SizedBox(width: 54, child: Text(label!, style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.8))),
        Expanded(child: SingleChildScrollView(scrollDirection: Axis.horizontal, child: Row(children: children))),
      ]),
    );
  }
}

/// A labelled slider.
class StudioSlider extends StatelessWidget {
  const StudioSlider({super.key, required this.label, required this.value, required this.onChanged, this.min = 0, this.max = 1, this.color = const Color(0xFF34D399), this.display});
  final String label;
  final double value;
  final ValueChanged<double> onChanged;
  final double min;
  final double max;
  final Color color;
  final String? display;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 34,
      child: Row(children: [
        SizedBox(width: 78, child: Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 11.5, fontWeight: FontWeight.w800))),
        Expanded(
          child: SliderTheme(
            data: SliderTheme.of(context).copyWith(activeTrackColor: color, thumbColor: color, inactiveTrackColor: Colors.white12, overlayColor: color.withValues(alpha: 0.2), trackHeight: 3.5),
            child: Slider(value: value.clamp(min, max), min: min, max: max, onChanged: onChanged),
          ),
        ),
        SizedBox(width: 38, child: Text(display ?? value.toStringAsFixed(1), textAlign: TextAlign.right, style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w700))),
      ]),
    );
  }
}

/// A button with an icon and a label.
class StudioButton extends StatelessWidget {
  const StudioButton({super.key, required this.icon, required this.label, required this.onTap, this.color = Colors.white});
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: 7),
      child: Material(
        color: color.withValues(alpha: 0.12),
        borderRadius: BorderRadius.circular(12),
        child: InkWell(
          borderRadius: BorderRadius.circular(12),
          onTap: () {
            HapticFeedback.selectionClick();
            onTap();
          },
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 8),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(icon, size: 17, color: color),
              const SizedBox(width: 5),
              Text(label, style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 12)),
            ]),
          ),
        ),
      ),
    );
  }
}

/// A round colour dot you can pick.
class StudioSwatch extends StatelessWidget {
  const StudioSwatch({super.key, required this.color, required this.selected, required this.onTap, this.rainbow = false});
  final Color color;
  final bool selected;
  final VoidCallback onTap;
  final bool rainbow;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        HapticFeedback.selectionClick();
        onTap();
      },
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        margin: const EdgeInsets.only(right: 9),
        width: selected ? 34 : 28,
        height: selected ? 34 : 28,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: rainbow ? null : color,
          gradient: rainbow ? const SweepGradient(colors: [Color(0xFFF87171), Color(0xFFFACC15), Color(0xFF4ADE80), Color(0xFF38BDF8), Color(0xFFC084FC), Color(0xFFF87171)]) : null,
          border: Border.all(color: selected ? Colors.white : Colors.white24, width: selected ? 2.5 : 1),
          boxShadow: selected ? [BoxShadow(color: color.withValues(alpha: 0.6), blurRadius: 10)] : null,
        ),
      ),
    );
  }
}

const List<Color> kStudioColors = [
  Color(0xFFF472B6),
  Color(0xFFFACC15),
  Color(0xFF4ADE80),
  Color(0xFF38BDF8),
  Color(0xFFA78BFA),
  Color(0xFFF87171),
  Color(0xFFFFFFFF),
  Color(0xFFFB923C),
];

/// Saves or shares a picture of whatever [boundaryKey] wraps.
Future<void> studioShare(BuildContext context, GlobalKey boundaryKey, {String name = 'ngmy-studio'}) async {
  try {
    final b = boundaryKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
    if (b == null) return;
    final img = await b.toImage(pixelRatio: 2);
    final data = await img.toByteData(format: ui.ImageByteFormat.png);
    if (data == null) return;
    final bytes = data.buffer.asUint8List();
    await Share.shareXFiles([XFile.fromData(bytes, mimeType: 'image/png', name: '$name.png')], text: 'Made in NGMY Core Protocol');
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Could not share the picture here. Try a screenshot instead.')));
    }
  }
}

/// A short musical tone made on the fly (no sound files needed). Fails quietly if sound is not available.
class NgmyTone {
  static final Map<String, Uint8List> _cache = {};
  static final List<AudioPlayer> _pool = [];
  static int _next = 0;
  static bool enabled = true;

  static Uint8List _wav(double freq, int ms, String wave, double sweep) {
    const rate = 22050;
    final n = rate * ms ~/ 1000;
    final data = ByteData(44 + n * 2);
    void str(int o, String s) {
      for (var i = 0; i < s.length; i++) {
        data.setUint8(o + i, s.codeUnitAt(i));
      }
    }

    str(0, 'RIFF');
    data.setUint32(4, 36 + n * 2, Endian.little);
    str(8, 'WAVE');
    str(12, 'fmt ');
    data.setUint32(16, 16, Endian.little);
    data.setUint16(20, 1, Endian.little);
    data.setUint16(22, 1, Endian.little);
    data.setUint32(24, rate, Endian.little);
    data.setUint32(28, rate * 2, Endian.little);
    data.setUint16(32, 2, Endian.little);
    data.setUint16(34, 16, Endian.little);
    str(36, 'data');
    data.setUint32(40, n * 2, Endian.little);
    final rnd = math.Random(3);
    var phase = 0.0;
    for (var i = 0; i < n; i++) {
      final t = i / n;
      final f = freq * (1 + sweep * (1 - t));
      phase += 2 * math.pi * f / rate;
      var s = switch (wave) {
        'square' => math.sin(phase) >= 0 ? 0.6 : -0.6,
        'noise' => (rnd.nextDouble() * 2 - 1) * 0.8,
        'tri' => (2 / math.pi) * math.asin(math.sin(phase)),
        _ => math.sin(phase),
      };
      // A quick attack and a smooth fade so it does not click.
      final env = math.min(1.0, i / 120) * math.pow(1 - t, 1.6);
      s *= env * 0.8;
      data.setInt16(44 + i * 2, (s * 32000).round().clamp(-32768, 32767), Endian.little);
    }
    return data.buffer.asUint8List();
  }

  static Future<void> play(double freq, {int ms = 180, String wave = 'sine', double sweep = 0, double volume = 0.7}) async {
    if (!enabled) return;
    try {
      final key = '${freq.round()}|$ms|$wave|$sweep';
      final bytes = _cache.putIfAbsent(key, () => _wav(freq, ms, wave, sweep));
      if (_pool.length < 8) _pool.add(AudioPlayer()..setReleaseMode(ReleaseMode.stop));
      final p = _pool[_next++ % _pool.length];
      await p.play(BytesSource(bytes), volume: volume);
    } catch (_) {
      // No sound on this device or browser: the visuals still play.
    }
  }

  /// A note by its number of semitones above middle C.
  static double note(int semis) => 261.63 * math.pow(2, semis / 12).toDouble();

  static bool get supported => !kIsWeb || true;
}
