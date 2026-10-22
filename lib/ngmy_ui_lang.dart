import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_offline_icons.dart';

/// The language chosen with the flag button (English or Swahili). It is saved on the phone and
/// only changes when the user taps the flag.
class NgmyUiLang {
  static const _prefsKey = 'ngmy_ui_lang_v1';
  static final ValueNotifier<String> code = ValueNotifier<String>('en');
  static bool _loaded = false;

  static bool get isSw => code.value == 'sw';

  static Future<void> load() async {
    if (_loaded) return;
    _loaded = true;
    try {
      final prefs = await SharedPreferences.getInstance();
      final saved = prefs.getString(_prefsKey);
      if (saved == 'sw' || saved == 'en') code.value = saved!;
    } catch (_) {}
  }

  static Future<void> set(String value) async {
    code.value = value == 'sw' ? 'sw' : 'en';
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_prefsKey, code.value);
    } catch (_) {}
  }

  static Future<void> toggle() => set(isSw ? 'en' : 'sw');
}

/// English or Swahili text, by the saved language.
String ngmyT(String en, String sw) => NgmyUiLang.isSw ? sw : en;

/// Rebuilds [builder] whenever the language changes.
class NgmyLangBuilder extends StatefulWidget {
  const NgmyLangBuilder({super.key, required this.builder});
  final WidgetBuilder builder;

  @override
  State<NgmyLangBuilder> createState() => _NgmyLangBuilderState();
}

class _NgmyLangBuilderState extends State<NgmyLangBuilder> {
  @override
  void initState() {
    super.initState();
    NgmyUiLang.code.addListener(_changed);
    unawaited(NgmyUiLang.load());
  }

  @override
  void dispose() {
    NgmyUiLang.code.removeListener(_changed);
    super.dispose();
  }

  void _changed() {
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) => widget.builder(context);
}

/// A small flag button: tap it to switch between English and Swahili (the flag flips).
class NgmyLangFlag extends StatefulWidget {
  const NgmyLangFlag({super.key});

  @override
  State<NgmyLangFlag> createState() => _NgmyLangFlagState();
}

class _NgmyLangFlagState extends State<NgmyLangFlag> with SingleTickerProviderStateMixin {
  late final AnimationController _fx = AnimationController(vsync: this, duration: const Duration(milliseconds: 420));

  @override
  void initState() {
    super.initState();
    NgmyUiLang.code.addListener(_changed);
    unawaited(NgmyUiLang.load());
  }

  @override
  void dispose() {
    NgmyUiLang.code.removeListener(_changed);
    _fx.dispose();
    super.dispose();
  }

  void _changed() {
    if (mounted) setState(() {});
  }

  Future<void> _tap() async {
    await _fx.forward(from: 0);
    await NgmyUiLang.toggle();
    if (mounted) _fx.reset();
  }

  @override
  Widget build(BuildContext context) {
    final sw = NgmyUiLang.isSw;
    return Tooltip(
      message: sw ? 'Kiswahili — gusa kubadilisha' : 'English — tap to change',
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: _tap,
          borderRadius: BorderRadius.circular(14),
          child: AnimatedBuilder(
            animation: _fx,
            builder: (context, child) {
              final t = Curves.easeInOutCubic.transform(_fx.value);
              return Transform(
                alignment: Alignment.center,
                transform: Matrix4.identity()
                  ..setEntry(3, 2, 0.002)
                  ..rotateY(t * math.pi)
                  ..scale(1.0 + math.sin(t * math.pi) * 0.12),
                child: child,
              );
            },
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(14),
                color: Colors.white.withValues(alpha: 0.12),
                border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
              ),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                NgmyOfflineEmoji(sw ? '🇹🇿' : '🇺🇸', fontSize: 20),
                const SizedBox(width: 4),
                Text(sw ? 'SW' : 'EN', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11)),
              ]),
            ),
          ),
        ),
      ),
    );
  }
}
