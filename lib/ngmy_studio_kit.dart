import 'dart:async';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

/// Shared pieces for the Core Protocol studios: page, tool panel, buttons, sound and sharing.
const Color kStudioBg = Color(0xFF121212);
const Color kStudioPanel = Color(0xFF17171A);

/// The page every studio sits in: a back button, a title, a help button, the stage and a tool panel.
/// The sound style of each studio (by its title). Studios not listed here are about music.
const Map<String, String> kStudioSoundThemes = {
  'SPARK PAINTER': 'sparkle',
  'MANDALA MAKER': 'sparkle',
  'TITLE ANIMATOR': 'whoosh',
  'PALETTE LAB': 'click',
  'GRAVITY TOY': 'bounce',
  'ORBIT STUDIO': 'space',
  'SWARM STUDIO': 'bubble',
  'FIREWORK DESIGNER': 'pop',
  'CHAIN BURST': 'zap',
  'CIRCUIT LAB': 'tech',
  'PERIODIC TABLE': 'lab',
  'BODY EXPLORER': 'organic',
  'SPIN THE WHEEL': 'click',
  'FOCUS TIMER': 'tech',
  'MEMORY MATCH': 'bubble',
  'LUCKY POCKET': 'click',
  'ELECTRONICS LAB': 'tech',
  'AI INVENTOR': 'tech',
  'MAGNET LAB': 'tech',
  'RADIO LAB': 'tech',
  'POWER PLANT': 'tech',
  'POWER GRID': 'tech',
  'INTERNET JOURNEY': 'tech',
  'ROBOT CODER': 'tech',
  'BUG SMASHER': 'pop',
  'ROCKET LANDER': 'space',
  'DATA SNAKE': 'bubble',
  'BINARY 2048': 'click',
  'SIGNAL BREAKER': 'zap',
  'PASSWORD LAB': 'click',
  'WAVE LAB': 'tech',
  'BUG HUNT': 'click',
  'PIXEL TV': 'tech',
};

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
    // Each studio gets sounds that match what it is about.
    NgmyTone.theme = kStudioSoundThemes[title] ?? 'music';
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

/// Gives a studio a steady clock: [onFrame] is called every frame with the time step, and the
/// studio redraws after it. [nowMs] counts up from when the studio opened.
mixin StudioFrames<T extends StatefulWidget> on State<T>, SingleTickerProviderStateMixin<T> {
  late final Ticker _frameTicker;
  Duration _lastFrame = Duration.zero;
  int nowMs = 0;

  void onFrame(double dt);

  final List<Timer> _laterTimers = [];

  /// Runs [fn] after [ms], and cancels it if the studio is closed first.
  void later(int ms, VoidCallback fn) {
    late final Timer t;
    t = Timer(Duration(milliseconds: ms), () {
      _laterTimers.remove(t);
      if (mounted) fn();
    });
    _laterTimers.add(t);
  }

  void startFrames() {
    _frameTicker = createTicker((e) {
      final dt = ((e - _lastFrame).inMicroseconds / 1e6).clamp(0.0, 0.04);
      _lastFrame = e;
      nowMs = e.inMilliseconds;
      onFrame(dt);
      if (mounted) setState(() {});
    })..start();
  }

  @override
  void dispose() {
    for (final t in _laterTimers) {
      t.cancel();
    }
    _frameTicker.dispose();
    super.dispose();
  }
}

/// Musical scales as semitone steps above the root.
const Map<String, List<int>> kStudioScales = {
  'Pentatonic': [0, 2, 4, 7, 9],
  'Major': [0, 2, 4, 5, 7, 9, 11],
  'Minor': [0, 2, 3, 5, 7, 8, 10],
  'Blues': [0, 3, 5, 6, 7, 10],
  'Dreamy': [0, 2, 4, 6, 7, 9, 11],
};

/// The instruments every studio can play. Each is built from sound waves, so no sound files are needed.
const List<(String, String)> kStudioInstruments = [
  ('piano', 'Piano'),
  ('organ', 'Organ'),
  ('bell', 'Bell'),
  ('pluck', 'Pluck'),
  ('synth', 'Synth'),
  ('flute', 'Flute'),
];

/// Sounds made on the fly (no sound files). They fail quietly if sound is not available, and the
/// visuals still play.
class NgmyTone {
  static final Map<String, Uint8List> _cache = {};
  static final List<AudioPlayer> _pool = [];
  static int _next = 0;
  static bool enabled = true;

  /// What kind of sounds the open studio makes. 'music' and 'space' use the real instruments; the
  /// others turn every note into a sound that matches the studio (blips, pops, thumps, zaps...).
  static String theme = 'music';

  /// The note names C, C#, D … B.
  static const names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  static Uint8List _wav(double freq, int ms, String wave, double sweep, String inst) {
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
    // For instruments: the strength of each overtone, and how fast the sound dies away.
    List<double> partials = const [1];
    List<double> ratios = const [1];
    var decay = 3.0;
    var attack = 0.006;
    var sustain = false;
    var breath = 0.0;
    switch (inst) {
      case 'piano':
        partials = const [1, 0.55, 0.32, 0.2, 0.12, 0.07];
        ratios = const [1, 2, 3, 4, 5, 6];
        decay = 3.4;
      case 'organ':
        partials = const [1, 0.6, 0.45, 0.3, 0.22, 0.15];
        ratios = const [1, 2, 3, 4, 6, 8];
        attack = 0.02;
        sustain = true;
      case 'bell':
        partials = const [1, 0.6, 0.38, 0.22, 0.12];
        ratios = const [1, 2.76, 5.4, 8.93, 13.3];
        decay = 2.4;
      case 'pluck':
        partials = const [1, 0.7, 0.45, 0.28, 0.16, 0.1, 0.06];
        ratios = const [1, 2, 3, 4, 5, 6, 7];
        decay = 7;
      case 'synth':
        partials = const [1, 0.5, 0.33, 0.25, 0.2, 0.16, 0.14, 0.12];
        ratios = const [1, 2, 3, 4, 5, 6, 7, 8];
        attack = 0.012;
        sustain = true;
      case 'flute':
        partials = const [1, 0.18, 0.06];
        ratios = const [1, 2, 3];
        attack = 0.07;
        sustain = true;
        breath = 0.035;
    }
    final phases = List<double>.filled(partials.length, 0);
    for (var i = 0; i < n; i++) {
      final t = i / n;
      final secs = i / rate;
      final f = freq * (1 + sweep * (1 - t));
      double s;
      if (inst.isNotEmpty) {
        s = 0;
        for (var k = 0; k < partials.length; k++) {
          phases[k] += 2 * math.pi * f * ratios[k] / rate;
          // Higher overtones fade a little faster, like a real string or bell.
          final d = inst == 'bell' || inst == 'piano' || inst == 'pluck' ? math.exp(-decay * secs * (1 + k * 0.35)) : 1.0;
          s += math.sin(phases[k]) * partials[k] * d;
        }
        s /= 1.9;
        if (breath > 0) s += (rnd.nextDouble() * 2 - 1) * breath;
        final atk = math.min(1.0, secs / attack);
        final tail = math.min(1.0, (n - i) / (rate * 0.09));
        final env = sustain ? atk * tail : atk * tail * math.exp(-decay * 0.12 * secs);
        s *= env;
      } else {
        phase += 2 * math.pi * f / rate;
        s = switch (wave) {
          'square' => math.sin(phase) >= 0 ? 0.6 : -0.6,
          'noise' => (rnd.nextDouble() * 2 - 1) * 0.8,
          'tri' => (2 / math.pi) * math.asin(math.sin(phase)),
          'saw' => ((phase / (2 * math.pi)) % 1.0) * 1.2 - 0.6,
          _ => math.sin(phase),
        };
        // A quick attack and a smooth fade so it does not click.
        final env = math.min(1.0, i / 120) * math.pow(1 - t, 1.6);
        s *= env;
      }
      data.setInt16(44 + i * 2, (s * 0.8 * 32000).round().clamp(-32768, 32767), Endian.little);
    }
    return data.buffer.asUint8List();
  }

  /// Plays a sound. [inst] picks an instrument (piano, organ, bell, pluck, synth, flute); without
  /// one, [wave] (sine, square, tri, noise) makes a plain tone or a drum-like hit.
  static Future<void> play(double freq, {int ms = 180, String wave = 'sine', double sweep = 0, double volume = 0.7, String inst = ''}) async {
    if (!enabled) return;
    try {
      final key = '${freq.round()}|$ms|$wave|$sweep|$inst';
      final bytes = _cache.putIfAbsent(key, () => _wav(freq, ms, wave, sweep, inst));
      if (_pool.length < 12) _pool.add(AudioPlayer()..setReleaseMode(ReleaseMode.stop));
      final p = _pool[_next++ % _pool.length];
      await p.play(BytesSource(bytes), volume: volume);
    } catch (_) {
      // No sound on this device or browser: the visuals still play.
    }
  }

  /// A note on an instrument, by semitones above middle C.
  static Future<void> playNote(String inst, int semis, {int ms = 600, double volume = 0.7}) {
    if (theme == 'music') return play(note(semis), ms: ms, inst: inst, volume: volume);
    if (theme == 'space') return play(note(semis), ms: ms, inst: inst == 'piano' || inst == 'bell' || inst == 'pluck' ? 'synth' : inst, volume: volume);
    return sfx(theme, semis, ms: ms, volume: volume);
  }

  /// A themed sound effect. [semis] only changes its pitch a little, so it still feels alive.
  static Future<void> sfx(String kind, int semis, {int ms = 200, double volume = 0.6}) {
    final f = note(semis.clamp(-12, 36));
    final short = math.min(ms, 260);
    switch (kind) {
      case 'tech':
        return play(f * 2, ms: math.min(short, 110), wave: 'square', volume: volume * 0.45);
      case 'sparkle':
        return play(f * 2.5, ms: 130, wave: 'tri', sweep: -0.35, volume: volume * 0.6);
      case 'bounce':
        return play(140 + (semis % 12) * 9, ms: 150, sweep: 0.9, volume: volume);
      case 'bubble':
        return play(260 + (semis % 12) * 22, ms: 120, sweep: -0.55, volume: volume * 0.85);
      case 'pop':
        play(f, ms: 160, wave: 'tri', sweep: -0.7, volume: volume * 0.4);
        return play(900, ms: 90, wave: 'noise', volume: volume * 0.45);
      case 'zap':
        return play(f * 3, ms: 150, wave: 'square', sweep: 1.6, volume: volume * 0.4);
      case 'click':
        return play(2600 + (semis % 7) * 180, ms: 30, wave: 'noise', volume: volume * 0.5);
      case 'whoosh':
        play(320, ms: 220, sweep: -0.7, volume: volume * 0.35);
        return play(1500, ms: 200, wave: 'noise', volume: volume * 0.22);
      case 'organic':
        return play(85 + (semis % 12) * 5, ms: 190, sweep: 1.1, volume: volume);
      case 'lab':
        return play(f * 1.6, ms: 140, wave: 'tri', sweep: -0.3, volume: volume * 0.55);
      default:
        return play(f, ms: short, wave: 'tri', volume: volume * 0.5);
    }
  }

  /// Several notes at the same moment.
  static void chord(String inst, List<int> semis, {int ms = 900, double volume = 0.5}) {
    if (theme == 'music' || theme == 'space') {
      for (final s in semis) {
        playNote(inst, s, ms: ms, volume: volume);
      }
      return;
    }
    if (!enabled) return;
    // A quick run of the themed sound instead of a piano chord.
    var i = 0;
    for (final s in semis.take(4)) {
      final d = i++ * 70;
      if (d == 0) {
        playNote(inst, s, ms: ms, volume: volume);
      } else {
        Future<void>.delayed(Duration(milliseconds: d), () => playNote(inst, s, ms: ms, volume: volume));
      }
    }
  }

  /// A note by its number of semitones above middle C.
  static double note(int semis) => 261.63 * math.pow(2, semis / 12).toDouble();

  static String nameOf(int semis) => names[((semis % 12) + 12) % 12];

  /// Drum sounds, by name.
  static void drum(String kind, {double volume = 0.8, int kit = 0}) {
    final k = kit == 1 ? 1.25 : (kit == 2 ? 0.8 : 1.0);
    switch (kind) {
      case 'kick':
        play(95 * k, ms: 200, sweep: 1.8, volume: volume);
      case 'snare':
        play(220 * k, ms: 140, wave: 'noise', volume: volume * 0.65);
      case 'hat':
        play(5000, ms: 50, wave: 'noise', volume: volume * 0.35);
      case 'open':
        play(5200, ms: 220, wave: 'noise', volume: volume * 0.35);
      case 'clap':
        play(1100 * k, ms: 100, wave: 'noise', volume: volume * 0.5);
      case 'tom':
        play(150 * k, ms: 230, sweep: 1.0, volume: volume);
      case 'low':
        play(100 * k, ms: 260, sweep: 0.9, volume: volume);
      case 'rim':
        play(1700 * k, ms: 60, wave: 'square', volume: volume * 0.4);
      case 'cow':
        play(820 * k, ms: 240, wave: 'square', volume: volume * 0.3);
      case 'crash':
        play(3200, ms: 650, wave: 'noise', volume: volume * 0.4);
      case 'shake':
        play(7000, ms: 90, wave: 'noise', volume: volume * 0.3);
      default:
        play(60 * k, ms: 300, wave: 'sine', volume: volume);
    }
  }
}

/// Progress that stays on the phone (levels reached, high scores), kept apart from the account so
/// logging out or closing the app never sends a player back.
class NgmyProgress {
  static Future<Map<String, dynamic>> load(String game) async {
    try {
      final p = await SharedPreferences.getInstance();
      final raw = p.getString('ngmy_play_progress_v1_$game');
      if (raw == null) return {};
      final d = jsonDecode(raw);
      return d is Map ? Map<String, dynamic>.from(d) : {};
    } catch (_) {
      return {};
    }
  }

  static Future<void> save(String game, Map<String, dynamic> data) async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString('ngmy_play_progress_v1_$game', jsonEncode(data));
    } catch (_) {}
  }
}
