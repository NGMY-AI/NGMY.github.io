import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_offline_icons.dart';

/// One saved language choice (English or Swahili). It is kept on the phone and only changes
/// when the user taps a flag button, so it is the same after the app is closed and opened again.
class NgmyLangStore {
  NgmyLangStore(this.key);

  final String key;
  final ValueNotifier<String> code = ValueNotifier<String>('en');
  Future<void>? _loading;

  bool get isSw => code.value == 'sw';

  /// Reads the saved choice once.
  Future<void> load() => _loading ??= _read();

  Future<void> _read() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final saved = prefs.getString(key);
      if (saved == 'sw' || saved == 'en') code.value = saved!;
    } catch (_) {}
  }

  Future<void> set(String value) async {
    // A choice made before the saved one was read must still win.
    _loading ??= Future<void>.value();
    code.value = value == 'sw' ? 'sw' : 'en';
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(key, code.value);
    } catch (_) {}
  }

  Future<void> toggle() => set(isSw ? 'en' : 'sw');

  String t(String en, String sw) => isSw ? sw : en;
}

class NgmyUiLang {
  /// Civic Registry (and the rest of the app).
  static final NgmyLangStore civic = NgmyLangStore('ngmy_ui_lang_v1');

  /// Post work has its own choice and starts in English.
  static final NgmyLangStore post = NgmyLangStore('ngmy_post_work_lang_v1');

  static ValueNotifier<String> get code => civic.code;
  static bool get isSw => civic.isSw;
  static Future<void> load() => civic.load();
  static Future<void> set(String value) => civic.set(value);
  static Future<void> toggle() => civic.toggle();
}

/// English or Swahili text, by the Civic Registry language.
String ngmyT(String en, String sw) => NgmyUiLang.civic.t(en, sw);

/// Rebuilds [builder] whenever the language changes.
class NgmyLangBuilder extends StatefulWidget {
  const NgmyLangBuilder({super.key, required this.builder, this.store});
  final WidgetBuilder builder;
  final NgmyLangStore? store;

  @override
  State<NgmyLangBuilder> createState() => _NgmyLangBuilderState();
}

class _NgmyLangBuilderState extends State<NgmyLangBuilder> {
  NgmyLangStore get _store => widget.store ?? NgmyUiLang.civic;

  @override
  void initState() {
    super.initState();
    _store.code.addListener(_changed);
    unawaited(_store.load());
  }

  @override
  void dispose() {
    _store.code.removeListener(_changed);
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
  const NgmyLangFlag({super.key, this.store});
  final NgmyLangStore? store;

  @override
  State<NgmyLangFlag> createState() => _NgmyLangFlagState();
}

class _NgmyLangFlagState extends State<NgmyLangFlag> with SingleTickerProviderStateMixin {
  late final AnimationController _fx = AnimationController(vsync: this, duration: const Duration(milliseconds: 420));
  NgmyLangStore get _store => widget.store ?? NgmyUiLang.civic;

  @override
  void initState() {
    super.initState();
    _store.code.addListener(_changed);
    unawaited(_store.load());
  }

  @override
  void dispose() {
    _store.code.removeListener(_changed);
    _fx.dispose();
    super.dispose();
  }

  void _changed() {
    if (mounted) setState(() {});
  }

  Future<void> _tap() async {
    await _fx.forward(from: 0);
    await _store.toggle();
    if (mounted) _fx.reset();
  }

  @override
  Widget build(BuildContext context) {
    final sw = _store.isSw;
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
