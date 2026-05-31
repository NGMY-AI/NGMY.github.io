import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:video_player/video_player.dart';

/// Admin-managed 3D floating pop-ups + luxury video ad frames.
class NgmyPopupDefaults {
  static const int standardCount = 20;
  static const int marketingCount = 5;

  static Map<String, dynamic> _theme(String id, String name, List<int> colors, String iconName) => {
        'id': id,
        'name': name,
        'colors': colors,
        'iconName': iconName,
      };

  static const Map<String, IconData> _icons = {
    'awesome': Icons.auto_awesome_rounded,
    'eco': Icons.eco_rounded,
    'sun': Icons.wb_sunny_rounded,
    'waves': Icons.waves_rounded,
    'diamond': Icons.diamond_rounded,
    'bolt': Icons.bolt_rounded,
    'star': Icons.star_rounded,
    'ice': Icons.ac_unit_rounded,
    'park': Icons.park_rounded,
    'night': Icons.nightlight_round,
    'fire': Icons.local_fire_department_rounded,
    'spa': Icons.spa_rounded,
    'party': Icons.celebration_rounded,
    'shield': Icons.shield_rounded,
    'flash': Icons.flash_on_rounded,
    'heart': Icons.favorite_rounded,
    'dark': Icons.dark_mode_rounded,
    'cloud': Icons.cloud_rounded,
    'flower': Icons.local_florist_rounded,
    'hub': Icons.hub_rounded,
    'store': Icons.storefront_rounded,
    'new': Icons.new_releases_rounded,
    'trend': Icons.trending_up_rounded,
    'casino': Icons.casino_rounded,
    'vip': Icons.workspace_premium_rounded,
  };

  static List<Map<String, dynamic>> standardThemes = [
    _theme('aurora', 'Aurora Pulse', [0xFF312E81, 0xFF6366F1, 0xFF1E1B4B], 'awesome'),
    _theme('emerald', 'Emerald Rise', [0xFF064E3B, 0xFF10B981, 0xFF022C22], 'eco'),
    _theme('sunset', 'Sunset Blaze', [0xFF7C2D12, 0xFFEA580C, 0xFF431407], 'sun'),
    _theme('ocean', 'Ocean Deep', [0xFF0C4A6E, 0xFF0284C7, 0xFF082F49], 'waves'),
    _theme('royal', 'Royal Violet', [0xFF4C1D95, 0xFF8B5CF6, 0xFF2E1065], 'diamond'),
    _theme('neon', 'Neon City', [0xFF831843, 0xFFEC4899, 0xFF500724], 'bolt'),
    _theme('gold', 'Golden Hour', [0xFF78350F, 0xFFF59E0B, 0xFF451A03], 'star'),
    _theme('ice', 'Ice Crystal', [0xFF0E7490, 0xFF67E8F9, 0xFF164E63], 'ice'),
    _theme('forest', 'Forest Mist', [0xFF14532D, 0xFF22C55E, 0xFF052E16], 'park'),
    _theme('cosmic', 'Cosmic Night', [0xFF1E1B4B, 0xFF818CF8, 0xFF0F172A], 'night'),
    _theme('ruby', 'Ruby Flame', [0xFF7F1D1D, 0xFFEF4444, 0xFF450A0A], 'fire'),
    _theme('mint', 'Mint Fresh', [0xFF134E4A, 0xFF2DD4BF, 0xFF042F2E], 'spa'),
    _theme('candy', 'Candy Pop', [0xFF9D174D, 0xFFF472B6, 0xFF500724], 'party'),
    _theme('steel', 'Steel Edge', [0xFF334155, 0xFF94A3B8, 0xFF0F172A], 'shield'),
    _theme('lime', 'Lime Burst', [0xFF3F6212, 0xFFA3E635, 0xFF1A2E05], 'flash'),
    _theme('peach', 'Peach Glow', [0xFF9A3412, 0xFFFDBA74, 0xFF431407], 'heart'),
    _theme('midnight', 'Midnight', [0xFF0F172A, 0xFF475569, 0xFF020617], 'dark'),
    _theme('sky', 'Sky Limit', [0xFF1D4ED8, 0xFF38BDF8, 0xFF1E3A8A], 'cloud'),
    _theme('rose', 'Rose Garden', [0xFF881337, 0xFFFB7185, 0xFF4C0519], 'flower'),
    _theme('ngmy', 'NGMY Classic', [0xFF065F46, 0xFF00B25A, 0xFF064E3B], 'hub'),
  ];

  static List<Map<String, dynamic>> marketingThemes = [
    _theme('store_sale', 'Store Sale', [0xFF7C3AED, 0xFFA855F7, 0xFF4C1D95], 'store'),
    _theme('new_drop', 'New Drop', [0xFF0E7490, 0xFF22D3EE, 0xFF164E63], 'new'),
    _theme('invest_boost', 'Invest Boost', [0xFF15803D, 0xFF4ADE80, 0xFF14532D], 'trend'),
    _theme('game_bonus', 'Game Bonus', [0xFF6D28D9, 0xFFC084FC, 0xFF4C1D95], 'casino'),
    _theme('vip_offer', 'VIP Offer', [0xFF78350F, 0xFFFBBF24, 0xFF451A03], 'vip'),
  ];

  static List<Map<String, dynamic>> videoFrameStyles = [
    {'id': 'gold_luxury', 'name': 'Gold Luxury', 'colors': [0xFF78350F, 0xFFFFD700, 0xFFB45309]},
    {'id': 'platinum_crown', 'name': 'Platinum Crown', 'colors': [0xFF475569, 0xFFE2E8F0, 0xFF334155]},
    {'id': 'ruby_eclipse', 'name': 'Ruby Eclipse', 'colors': [0xFF7F1D1D, 0xFFFB7185, 0xFF450A0A]},
    {'id': 'diamond_ice', 'name': 'Diamond Ice', 'colors': [0xFF0E7490, 0xFFBAE6FD, 0xFF164E63]},
    {'id': 'obsidian_neon', 'name': 'Obsidian Neon', 'colors': [0xFF0F172A, 0xFF22D3EE, 0xFF6366F1]},
  ];

  static List<Map<String, dynamic>> buildStandardPopups() {
    final list = <Map<String, dynamic>>[];
    for (var i = 0; i < standardCount; i++) {
      final theme = standardThemes[i % standardThemes.length];
      final hour = 7 + ((i * 2) % 14);
      list.add(_popupSeed(
        id: 'std_${(i + 1).toString().padLeft(2, '0')}',
        type: 'standard',
        themeId: theme['id'] as String,
        title: 'NGMY Update ${i + 1}',
        subtitle: 'Something special is waiting for you',
        orbitWords: ['NGMY', 'GROW', 'EARN', 'SHOP', 'PLAY', 'WIN', 'JOIN'],
        hour: hour,
        minute: (i * 7) % 60,
        intervalHours: i.isEven ? 3 : 5,
        maxPerDay: 1 + (i % 3),
        trigger: i % 4 == 0 ? 'every_app_open' : 'once_per_day',
        enabled: i < 3,
      ));
    }
    return list;
  }

  static List<Map<String, dynamic>> buildMarketingPopups() {
    final list = <Map<String, dynamic>>[];
    for (var i = 0; i < marketingCount; i++) {
      final theme = marketingThemes[i];
      list.add(_popupSeed(
        id: 'mkt_${(i + 1).toString().padLeft(2, '0')}',
        type: 'marketing',
        themeId: theme['id'] as String,
        title: ['NGMY Store Deal', 'Hot Product Drop', 'Invest & Grow', 'Game Center Bonus', 'VIP Member Offer'][i],
        subtitle: ['Shop exclusive items', 'Limited stock today', 'Boost your earnings', 'Roll for prizes', 'Premium rewards inside'][i],
        orbitWords: ['SALE', 'SHOP', 'DEAL', 'NGMY', 'STORE', 'NOW'],
        hour: 9 + i,
        minute: 15 * i,
        intervalHours: 4,
        maxPerDay: 2,
        trigger: 'every_app_open',
        enabled: false,
        linkUrl: '',
        linkLabel: 'Shop Now',
      ));
    }
    return list;
  }

  static List<Map<String, dynamic>> buildVideoPopups() {
    return List.generate(5, (i) {
      final frame = videoFrameStyles[i];
      return {
        'id': 'vid_${(i + 1).toString().padLeft(2, '0')}',
        'enabled': false,
        'title': ['NGMY Store Promo', 'Featured Product', 'Platform Ad', 'Season Special', 'Brand Spotlight'][i],
        'subtitle': 'Tap link below when ready',
        'videoUrl': '',
        'linkUrl': '',
        'linkLabel': 'Learn More',
        'frameStyle': frame['id'],
        'firstShowHour': 8 + i,
        'firstShowMinute': 0,
        'intervalHours': 6,
        'maxPerDay': 1,
        'trigger': 'every_app_open',
        'durationMs': 12000,
      };
    });
  }

  static List<Map<String, dynamic>> allDefaultPopups() => [
        ...buildStandardPopups(),
        ...buildMarketingPopups(),
      ];

  static Map<String, dynamic> _popupSeed({
    required String id,
    required String type,
    required String themeId,
    required String title,
    required String subtitle,
    required List<String> orbitWords,
    required int hour,
    required int minute,
    required int intervalHours,
    required int maxPerDay,
    required String trigger,
    required bool enabled,
    String linkUrl = '',
    String linkLabel = 'Open Link',
  }) =>
      {
        'id': id,
        'enabled': enabled,
        'type': type,
        'themeId': themeId,
        'title': title,
        'subtitle': subtitle,
        'orbitWords': orbitWords,
        'linkUrl': linkUrl,
        'linkLabel': linkLabel,
        'firstShowHour': hour,
        'firstShowMinute': minute,
        'intervalHours': intervalHours,
        'maxPerDay': maxPerDay,
        'trigger': trigger,
        'durationMs': 7000,
      };

  static List<Map<String, dynamic>> ensurePopups(List<Map<String, dynamic>>? raw) =>
      mergeWithDefaults(raw, allDefaultPopups());

  static List<Map<String, dynamic>> ensureVideoPopups(List<Map<String, dynamic>>? raw) =>
      mergeWithDefaults(raw, buildVideoPopups());

  /// Merge saved admin settings with defaults so toggles/fields are never wiped on sync.
  static bool popupEnabled(dynamic raw) =>
      raw == true || raw == 1 || raw.toString().toLowerCase() == 'true';

  static List<Map<String, dynamic>> mergeWithDefaults(
    List<Map<String, dynamic>>? raw,
    List<Map<String, dynamic>> defaults,
  ) {
    final byId = <String, Map<String, dynamic>>{
      for (final d in defaults) (d['id'] ?? '').toString(): Map<String, dynamic>.from(d),
    };
    if (raw != null) {
      for (final item in raw) {
        final id = (item['id'] ?? '').toString();
        if (id.isEmpty) continue;
        final base = byId[id] ?? <String, dynamic>{'id': id};
        final merged = {...base, ...Map<String, dynamic>.from(item)};
        merged['enabled'] = popupEnabled(merged['enabled']);
        byId[id] = merged;
      }
    }
    final ids = defaults.map((e) => (e['id'] ?? '').toString()).where((e) => e.isNotEmpty);
    final extra = byId.keys.where((k) => !ids.contains(k));
    return [...ids.map((id) => byId[id]!).whereType<Map<String, dynamic>>(), ...extra.map((id) => byId[id]!).whereType<Map<String, dynamic>>()];
  }

  static Map<String, dynamic>? themeById(String id) {
    for (final t in [...standardThemes, ...marketingThemes]) {
      if (t['id'] == id) return t;
    }
    return standardThemes.first;
  }

  static Map<String, dynamic>? videoFrameById(String id) {
    for (final f in videoFrameStyles) {
      if (f['id'] == id) return f;
    }
    return videoFrameStyles.first;
  }
}

class NgmyPopupOrchestrator {
  static Future<String> Function(String rawUrl)? resolveVideoUrl;

  static Future<void> handleAppOpen(
    BuildContext context, {
    required List<Map<String, dynamic>> popupsRaw,
    required List<Map<String, dynamic>> videoPopupsRaw,
    required String userEmail,
  }) async {
    if (!context.mounted) return;
    final email = userEmail.toLowerCase().trim();
    if (email.isEmpty) return;

    final popups = NgmyPopupDefaults.ensurePopups(popupsRaw);
    final videos = NgmyPopupDefaults.ensureVideoPopups(videoPopupsRaw);
    final prefs = await SharedPreferences.getInstance();
    final today = _todayKey();
    final now = DateTime.now();

    for (final raw in popups) {
      if (!context.mounted) return;
      final p = Map<String, dynamic>.from(raw);
      if (!NgmyPopupDefaults.popupEnabled(p['enabled'])) continue;
      if (!_shouldShow3d(p, prefs, email, today, now)) continue;
      await Ngmy3DFloatingPopup.show(context, config: p);
      await _markShown(prefs, email, p['id'].toString(), today, p);
    }

    for (final raw in videos) {
      if (!context.mounted) return;
      final p = Map<String, dynamic>.from(raw);
      if (!NgmyPopupDefaults.popupEnabled(p['enabled'])) continue;
      final url = (p['videoUrl'] ?? '').toString().trim();
      if (url.isEmpty) continue;
      if (!_shouldShow3d(p, prefs, email, today, now)) continue;
      await NgmyVideoPopup.show(context, config: p);
      await _markShown(prefs, email, p['id'].toString(), today, p);
    }
  }

  static String _todayKey() {
    final n = DateTime.now();
    return '${n.year}-${n.month}-${n.day}';
  }

  static String _countKey(String email, String id, String day) => 'ngmy_popup_cnt_${email.hashCode}_${id}_$day';

  static String _lastKey(String email, String id) => 'ngmy_popup_last_${email.hashCode}_$id';

  static bool _shouldShow3d(Map<String, dynamic> p, SharedPreferences prefs, String email, String today, DateTime now) {
    final id = (p['id'] ?? '').toString();
    if (id.isEmpty) return false;
    final max = (p['maxPerDay'] as num?)?.toInt() ?? 1;
    final count = prefs.getInt(_countKey(email, id, today)) ?? 0;
    if (count >= max) return false;

    final hour = (p['firstShowHour'] as num?)?.toInt() ?? 7;
    final minute = (p['firstShowMinute'] as num?)?.toInt() ?? 0;
    final scheduled = DateTime(now.year, now.month, now.day, hour, minute);
    final trigger = (p['trigger'] ?? 'once_per_day').toString();

    if (trigger == 'scheduled' && now.isBefore(scheduled)) return false;

    final intervalH = (p['intervalHours'] as num?)?.toInt() ?? 3;
    final lastMs = prefs.getInt(_lastKey(email, id));
    if (lastMs != null && count > 0) {
      final last = DateTime.fromMillisecondsSinceEpoch(lastMs);
      if (now.difference(last).inHours < intervalH) return false;
    }

    if (trigger == 'once_per_day' && count > 0) return false;

    return true;
  }

  static Future<void> _markShown(SharedPreferences prefs, String email, String id, String today, Map<String, dynamic> p) async {
    final key = _countKey(email, id, today);
    await prefs.setInt(key, (prefs.getInt(key) ?? 0) + 1);
    await prefs.setInt(_lastKey(email, id), DateTime.now().millisecondsSinceEpoch);
  }
}

class Ngmy3DFloatingPopup {
  static Future<void> show(BuildContext context, {required Map<String, dynamic> config}) {
    final ms = (config['durationMs'] as num?)?.toInt() ?? 7000;
    final overlay = Overlay.of(context, rootOverlay: true);
    late OverlayEntry entry;
    final done = Completer<void>();
    entry = OverlayEntry(
      builder: (ctx) => _Ngmy3DFloatingPopupBody(
        config: config,
        durationMs: ms,
        onDone: () {
          if (entry.mounted) entry.remove();
          if (!done.isCompleted) done.complete();
        },
      ),
    );
    overlay.insert(entry);
    return done.future.timeout(Duration(milliseconds: ms + 1200), onTimeout: () {});
  }
}

class _Ngmy3DFloatingPopupBody extends StatefulWidget {
  final Map<String, dynamic> config;
  final int durationMs;
  final VoidCallback onDone;

  const _Ngmy3DFloatingPopupBody({
    required this.config,
    required this.durationMs,
    required this.onDone,
  });

  @override
  State<_Ngmy3DFloatingPopupBody> createState() => _Ngmy3DFloatingPopupBodyState();
}

class _Ngmy3DFloatingPopupBodyState extends State<_Ngmy3DFloatingPopupBody> with TickerProviderStateMixin {
  late final AnimationController _enter;
  late final AnimationController _spin;
  late final AnimationController _orbit;
  late final AnimationController _float;
  late final AnimationController _pulse;
  bool _leaving = false;

  List<String> get _orbitWords {
    final raw = widget.config['orbitWords'];
    if (raw is List && raw.isNotEmpty) return raw.map((e) => e.toString()).toList();
    return const ['NGMY', 'GROW', 'EARN', 'PLAY'];
  }

  Map<String, dynamic> get _theme {
    return NgmyPopupDefaults.themeById((widget.config['themeId'] ?? 'ngmy').toString()) ??
        NgmyPopupDefaults.standardThemes.last;
  }

  List<Color> get _colors {
    final raw = _theme['colors'] as List?;
    if (raw == null) return [const Color(0xFF065F46), const Color(0xFF00B25A), const Color(0xFF064E3B)];
    return raw.map((c) => Color((c as num).toInt())).toList();
  }

  IconData get _icon {
    final name = (_theme['iconName'] ?? 'hub').toString();
    return NgmyPopupDefaults._icons[name] ?? Icons.hub_rounded;
  }

  @override
  void initState() {
    super.initState();
    _enter = AnimationController(vsync: this, duration: const Duration(milliseconds: 650));
    _spin = AnimationController(vsync: this, duration: Duration(milliseconds: widget.durationMs));
    _orbit = AnimationController(vsync: this, duration: Duration(milliseconds: (widget.durationMs * 1.2).round()))..repeat();
    _float = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat(reverse: true);
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..repeat(reverse: true);
    _enter.forward();
    _spin.forward();
    Future.delayed(Duration(milliseconds: widget.durationMs), _exit);
  }

  Future<void> _exit() async {
    if (!mounted || _leaving) return;
    _leaving = true;
    await _enter.reverse();
    if (mounted) widget.onDone();
  }

  @override
  void dispose() {
    _enter.dispose();
    _spin.dispose();
    _orbit.dispose();
    _float.dispose();
    _pulse.dispose();
    super.dispose();
  }

  Future<void> _openLink() async {
    final url = (widget.config['linkUrl'] ?? '').toString().trim();
    if (url.isEmpty) return;
    final uri = Uri.tryParse(url);
    if (uri != null) await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  Widget _orbitLabel(double size, int i, double t) {
    final angle = (i / _orbitWords.length) * math.pi * 2 + t * math.pi * 2;
    final radius = size * 0.54;
    return Transform.translate(
      offset: Offset(math.cos(angle) * radius, math.sin(angle) * radius),
      child: Transform.rotate(
        angle: angle + math.pi / 2,
        child: Text(
          _orbitWords[i % _orbitWords.length],
          style: TextStyle(
            color: Colors.white.withValues(alpha: 0.6 + (_pulse.value * 0.35)),
            fontSize: 10 + (_pulse.value * 2),
            fontWeight: FontWeight.w900,
            letterSpacing: 1.1,
            shadows: [Shadow(color: _colors.first.withValues(alpha: 0.9), blurRadius: 12)],
          ),
        ),
      ),
    );
  }

  Widget _faceContent(double size, double glow) {
    final title = (widget.config['title'] ?? 'NGMY').toString();
    final subtitle = (widget.config['subtitle'] ?? '').toString();
    final subtitleMaxLines = (widget.config['subtitleMaxLines'] as num?)?.toInt() ?? 2;
    final link = (widget.config['linkUrl'] ?? '').toString().trim();
    final linkLabel = (widget.config['linkLabel'] ?? 'Open Link').toString();

    return Container(
      width: size * 0.64,
      height: size * 0.64,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(28),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Color.lerp(_colors[0], _colors[1], glow)!,
            Color.lerp(_colors[1], _colors[2], 1 - glow)!,
            _colors[2],
          ],
        ),
        boxShadow: [
          BoxShadow(color: _colors[1].withValues(alpha: 0.55 + glow * 0.35), blurRadius: 36, spreadRadius: 4),
        ],
        border: Border.all(color: Colors.white.withValues(alpha: 0.24), width: 1.5),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(_icon, color: Colors.white.withValues(alpha: 0.95), size: size * 0.14),
          SizedBox(height: size * 0.03),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12),
            child: Text(
              title,
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: Colors.white, fontSize: size * 0.09, fontWeight: FontWeight.w900),
            ),
          ),
          if (subtitle.isNotEmpty) ...[
            SizedBox(height: size * 0.015),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 14),
              child: Text(
                subtitle,
                textAlign: TextAlign.center,
                maxLines: subtitleMaxLines,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: size * 0.048, fontWeight: FontWeight.w600),
              ),
            ),
          ],
          if (link.isNotEmpty) ...[
            SizedBox(height: size * 0.02),
            Text(
              linkLabel,
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11),
            ),
          ],
        ],
      ),
    );
  }

  Widget _faceBox(double size, double glow) => _faceContent(size, glow);

  Widget _core(double size, double spinY, double glow) {
    // Single face swap: when spinning past 90°, flip so text stays readable (same as front).
    final showFront = math.cos(spinY) >= 0;
    return Transform(
      alignment: Alignment.center,
      transform: Matrix4.identity()
        ..setEntry(3, 2, 0.002)
        ..rotateX(0.12 + math.sin(spinY) * 0.06)
        ..rotateY(spinY),
      child: showFront
          ? _faceBox(size, glow)
          : Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..rotateY(math.pi),
              child: _faceBox(size, glow),
            ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([_enter, _spin, _orbit, _float, _pulse]),
      builder: (context, _) {
        final enter = Curves.easeOutBack.transform(_enter.value);
        final fade = _enter.value;
        final spinY = _spin.value * math.pi * 2;
        final size = 200.0 * ((widget.config['sizeScale'] as num?)?.toDouble() ?? 1.0);
        final floatY = math.sin(_float.value * math.pi) * 8;

        return Material(
          type: MaterialType.transparency,
          child: Stack(
            fit: StackFit.expand,
            children: [
              Opacity(
                opacity: fade * 0.38,
                child: Container(
                  decoration: BoxDecoration(
                    gradient: RadialGradient(
                      center: const Alignment(0, -0.1),
                      radius: 1.2,
                      colors: [_colors[0].withValues(alpha: 0.85), const Color(0xCC000000), const Color(0xF0000000)],
                    ),
                  ),
                ),
              ),
              Center(
                child: Transform.translate(
                  offset: Offset(0, floatY + (1 - enter) * 36),
                  child: Transform.scale(
                    scale: 0.7 + enter * 0.3,
                    child: Opacity(
                      opacity: fade,
                      child: SizedBox(
                        width: size,
                        height: size,
                        child: Stack(
                          alignment: Alignment.center,
                          children: [
                            ...List.generate(_orbitWords.length, (i) => _orbitLabel(size, i, _orbit.value)),
                            _core(size, spinY, _pulse.value),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class NgmyVideoPopup {
  static Future<void> show(BuildContext context, {required Map<String, dynamic> config}) {
    final ms = (config['durationMs'] as num?)?.toInt() ?? 12000;
    return showGeneralDialog<void>(
      context: context,
      barrierDismissible: true,
      barrierLabel: 'Video popup',
      barrierColor: Colors.black54,
      transitionDuration: const Duration(milliseconds: 500),
      pageBuilder: (_, __, ___) => _NgmyVideoPopupBody(config: config, durationMs: ms),
    );
  }
}

class _NgmyVideoPopupBody extends StatefulWidget {
  final Map<String, dynamic> config;
  final int durationMs;

  const _NgmyVideoPopupBody({required this.config, required this.durationMs});

  @override
  State<_NgmyVideoPopupBody> createState() => _NgmyVideoPopupBodyState();
}

class _NgmyVideoPopupBodyState extends State<_NgmyVideoPopupBody> with SingleTickerProviderStateMixin {
  VideoPlayerController? _controller;
  late final AnimationController _frameSpin;
  bool _leaving = false;

  Map<String, dynamic> get _frame =>
      NgmyPopupDefaults.videoFrameById((widget.config['frameStyle'] ?? 'gold_luxury').toString()) ??
      NgmyPopupDefaults.videoFrameStyles.first;

  List<Color> get _frameColors {
    final raw = _frame['colors'] as List?;
    return raw?.map((c) => Color((c as num).toInt())).toList() ??
        [const Color(0xFF78350F), const Color(0xFFFFD700), const Color(0xFFB45309)];
  }

  @override
  void initState() {
    super.initState();
    _frameSpin = AnimationController(vsync: this, duration: const Duration(milliseconds: 8000))..repeat();
    _initVideo();
    Future.delayed(Duration(milliseconds: widget.durationMs), () {
      if (mounted && !_leaving) Navigator.of(context).pop();
    });
  }

  Future<void> _initVideo() async {
    var url = (widget.config['videoUrl'] ?? '').toString().trim();
    if (url.isEmpty) return;
    if (NgmyPopupOrchestrator.resolveVideoUrl != null) {
      try {
        url = await NgmyPopupOrchestrator.resolveVideoUrl!(url);
      } catch (_) {}
    }
    if (!mounted || url.isEmpty) return;
    final c = VideoPlayerController.networkUrl(Uri.parse(url));
    _controller = c;
    try {
      await c.initialize();
      await c.setLooping(true);
      await c.play();
      if (mounted) setState(() {});
    } catch (_) {}
  }

  @override
  void dispose() {
    _controller?.dispose();
    _frameSpin.dispose();
    super.dispose();
  }

  Future<void> _openLink() async {
    final url = (widget.config['linkUrl'] ?? '').toString().trim();
    if (url.isEmpty) return;
    final uri = Uri.tryParse(url);
    if (uri != null) await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  @override
  Widget build(BuildContext context) {
    final title = (widget.config['title'] ?? 'NGMY').toString();
    final link = (widget.config['linkUrl'] ?? '').toString().trim();
    final linkLabel = (widget.config['linkLabel'] ?? 'Learn More').toString();

    return Center(
      child: AnimatedBuilder(
        animation: _frameSpin,
        builder: (context, _) {
          final ry = _frameSpin.value * math.pi * 2 * 0.15;
          return Transform(
            alignment: Alignment.center,
            transform: Matrix4.identity()
              ..setEntry(3, 2, 0.0015)
              ..rotateY(ry),
            child: Container(
              margin: const EdgeInsets.symmetric(horizontal: 22),
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(26),
                gradient: LinearGradient(
                  colors: [_frameColors[0], _frameColors[1], _frameColors[2]],
                ),
                boxShadow: [
                  BoxShadow(color: _frameColors[1].withValues(alpha: 0.55), blurRadius: 28, spreadRadius: 2),
                ],
                border: Border.all(color: Colors.white.withValues(alpha: 0.35), width: 2),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                  const SizedBox(height: 10),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(16),
                    child: AspectRatio(
                      aspectRatio: _controller?.value.isInitialized == true ? _controller!.value.aspectRatio : 16 / 9,
                      child: _controller?.value.isInitialized == true
                          ? VideoPlayer(_controller!)
                          : Container(
                              color: Colors.black87,
                              child: const Center(child: CircularProgressIndicator(color: Colors.white)),
                            ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  if (link.isNotEmpty)
                    FilledButton(
                      onPressed: _openLink,
                      style: FilledButton.styleFrom(backgroundColor: Colors.black.withValues(alpha: 0.35)),
                      child: Text(linkLabel),
                    ),
                  TextButton(onPressed: () => Navigator.pop(context), child: const Text('Close', style: TextStyle(color: Colors.white70))),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

void showNgmyPopupsAdminSheet({
  required BuildContext context,
  required bool isDark,
  required List<Map<String, dynamic>> popups,
  required List<Map<String, dynamic>> videoPopups,
  required Future<bool> Function(List<Map<String, dynamic>> popups, List<Map<String, dynamic>> videos) onSave,
  Future<String> Function(String localRef)? onUploadVideo,
}) {
  showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyPopupsAdminSheet(
      isDark: isDark,
      initialPopups: popups,
      initialVideos: videoPopups,
      onSave: onSave,
      onUploadVideo: onUploadVideo,
    ),
  );
}

class _NgmyPopupsAdminSheet extends StatefulWidget {
  final bool isDark;
  final List<Map<String, dynamic>> initialPopups;
  final List<Map<String, dynamic>> initialVideos;
  final Future<bool> Function(List<Map<String, dynamic>> popups, List<Map<String, dynamic>> videos) onSave;
  final Future<String> Function(String localRef)? onUploadVideo;

  const _NgmyPopupsAdminSheet({
    required this.isDark,
    required this.initialPopups,
    required this.initialVideos,
    required this.onSave,
    this.onUploadVideo,
  });

  @override
  State<_NgmyPopupsAdminSheet> createState() => _NgmyPopupsAdminSheetState();
}

class _NgmyPopupsAdminSheetState extends State<_NgmyPopupsAdminSheet> {
  late List<Map<String, dynamic>> _popups;
  late List<Map<String, dynamic>> _videos;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    _popups = NgmyPopupDefaults.ensurePopups(widget.initialPopups);
    _videos = NgmyPopupDefaults.ensureVideoPopups(widget.initialVideos);
  }

  InputDecoration _dec(String label) => InputDecoration(
        labelText: label,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
        filled: true,
        fillColor: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
      );

  Future<void> _preview3d(Map<String, dynamic> p) async {
    await Ngmy3DFloatingPopup.show(context, config: p);
  }

  Future<void> _previewVideo(Map<String, dynamic> p) async {
    if ((p['videoUrl'] ?? '').toString().trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Add a video URL first.')));
      return;
    }
    await NgmyVideoPopup.show(context, config: p);
  }

  @override
  Widget build(BuildContext context) {
    final panel = widget.isDark ? const Color(0xFF0F111A) : Colors.white;
    return Align(
      alignment: Alignment.bottomCenter,
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.92),
        margin: const EdgeInsets.fromLTRB(12, 12, 12, 16),
        decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(26)),
        child: Column(
          children: [
            const SizedBox(height: 10),
            Container(width: 42, height: 4, decoration: BoxDecoration(color: Colors.grey.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(8))),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 14, 8, 8),
              child: Row(
                children: [
                  const Expanded(child: Text('Pop Ups', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold))),
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded)),
                ],
              ),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                children: [
                  Text('3D Pop Ups (${NgmyPopupDefaults.standardCount} standard + ${NgmyPopupDefaults.marketingCount} marketing)',
                      style: TextStyle(fontWeight: FontWeight.w800, color: widget.isDark ? Colors.white70 : Colors.black87)),
                  const SizedBox(height: 8),
                  _popupGrid(_popups, isVideo: false),
                  const SizedBox(height: 18),
                  Text('Video Ad Pop Ups (luxury frames)', style: TextStyle(fontWeight: FontWeight.w800, color: widget.isDark ? Colors.white70 : Colors.black87)),
                  const SizedBox(height: 8),
                  _popupGrid(_videos, isVideo: true),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16),
              child: FilledButton(
                onPressed: _saving
                    ? null
                    : () async {
                        setState(() => _saving = true);
                        final ok = await widget.onSave(
                          _popups.map((e) => Map<String, dynamic>.from(e)).toList(),
                          _videos.map((e) => Map<String, dynamic>.from(e)).toList(),
                        );
                        if (!context.mounted) return;
                        setState(() => _saving = false);
                        Navigator.pop(context);
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text(ok
                                ? 'Pop-up settings saved for all users.'
                                : 'Saved locally — cloud sync failed. Check connection and try again.'),
                          ),
                        );
                      },
                style: FilledButton.styleFrom(minimumSize: const Size(double.infinity, 48), backgroundColor: const Color(0xFF00B25A)),
                child: _saving
                    ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Text('SAVE POP UP SETTINGS', style: TextStyle(fontWeight: FontWeight.bold)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _popupGrid(List<Map<String, dynamic>> items, {required bool isVideo}) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 6,
        mainAxisSpacing: 6,
        childAspectRatio: 2.55,
      ),
      itemCount: items.length,
      itemBuilder: (_, i) => _popupGridCard(items[i], isVideo: isVideo),
    );
  }

  Widget _popupGridCard(Map<String, dynamic> p, {required bool isVideo}) {
    final title = (p['title'] ?? p['id'] ?? 'Pop Up').toString();
    final enabled = NgmyPopupDefaults.popupEnabled(p['enabled']);
    final theme = NgmyPopupDefaults.themeById((p['themeId'] ?? 'ngmy').toString());
    final colors = theme?['colors'] as List?;
    final c0 = colors != null && colors.isNotEmpty ? Color((colors[0] as num).toInt()) : const Color(0xFF6366F1);
    final c1 = colors != null && colors.length > 1 ? Color((colors[1] as num).toInt()) : const Color(0xFF818CF8);

    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: () => _openPopupEditor(p, isVideo: isVideo),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [c0.withValues(alpha: 0.85), c1.withValues(alpha: 0.75)],
            ),
            boxShadow: [BoxShadow(color: c1.withValues(alpha: 0.3), blurRadius: 8, offset: const Offset(0, 3))],
            border: Border.all(color: enabled ? Colors.white.withValues(alpha: 0.45) : Colors.white24),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Expanded(
                    child: Text(title, maxLines: 1, overflow: TextOverflow.ellipsis,
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 9)),
                  ),
                  Transform.scale(
                    scale: 0.62,
                    child: Switch(
                      value: enabled,
                      onChanged: (v) => setState(() => p['enabled'] = v),
                      materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                    ),
                  ),
                ],
              ),
              const Spacer(),
              Text(isVideo ? 'Video ad' : (p['type'] ?? 'standard').toString(), style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 7)),
              Text(enabled ? 'ON · tap to edit' : 'OFF', style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 7, fontWeight: FontWeight.w600)),
            ],
          ),
        ),
      ),
    );
  }

  void _openPopupEditor(Map<String, dynamic> p, {required bool isVideo}) {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _NgmyPopupEditorSheet(
        popup: p,
        isVideo: isVideo,
        isDark: widget.isDark,
        onPreview: () => isVideo ? _previewVideo(p) : _preview3d(p),
        onUploadVideo: widget.onUploadVideo,
      ),
    ).then((_) => setState(() {}));
  }

}

class _NgmyPopupEditorSheet extends StatefulWidget {
  final Map<String, dynamic> popup;
  final bool isVideo;
  final bool isDark;
  final VoidCallback onPreview;
  final Future<String> Function(String localRef)? onUploadVideo;

  const _NgmyPopupEditorSheet({
    required this.popup,
    required this.isVideo,
    required this.isDark,
    required this.onPreview,
    this.onUploadVideo,
  });

  @override
  State<_NgmyPopupEditorSheet> createState() => _NgmyPopupEditorSheetState();
}

class _NgmyPopupEditorSheetState extends State<_NgmyPopupEditorSheet> {
  late final TextEditingController _titleC;
  late final TextEditingController _subtitleC;
  late final TextEditingController _linkC;
  late final TextEditingController _linkLabelC;
  late final TextEditingController _videoC;
  late final TextEditingController _hourC;
  late final TextEditingController _minuteC;
  late final TextEditingController _intervalC;
  late final TextEditingController _maxC;
  late final TextEditingController _durationC;
  bool _uploadingVideo = false;
  final _picker = ImagePicker();

  Map<String, dynamic> get p => widget.popup;

  @override
  void initState() {
    super.initState();
    _titleC = TextEditingController(text: (p['title'] ?? '').toString());
    _subtitleC = TextEditingController(text: (p['subtitle'] ?? '').toString());
    _linkC = TextEditingController(text: (p['linkUrl'] ?? '').toString());
    _linkLabelC = TextEditingController(text: (p['linkLabel'] ?? 'Open Link').toString());
    _videoC = TextEditingController(text: (p['videoUrl'] ?? '').toString());
    _hourC = TextEditingController(text: '${p['firstShowHour'] ?? 7}');
    _minuteC = TextEditingController(text: '${p['firstShowMinute'] ?? 0}');
    _intervalC = TextEditingController(text: '${p['intervalHours'] ?? 3}');
    _maxC = TextEditingController(text: '${p['maxPerDay'] ?? 1}');
    _durationC = TextEditingController(text: '${p['durationMs'] ?? 7000}');
  }

  @override
  void dispose() {
    _titleC.dispose();
    _subtitleC.dispose();
    _linkC.dispose();
    _linkLabelC.dispose();
    _videoC.dispose();
    _hourC.dispose();
    _minuteC.dispose();
    _intervalC.dispose();
    _maxC.dispose();
    _durationC.dispose();
    super.dispose();
  }

  InputDecoration _dec(String label) => InputDecoration(
        labelText: label,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
        filled: true,
        fillColor: widget.isDark ? const Color(0xFF1C1F2E) : Colors.white,
      );

  void _apply() {
    p['title'] = _titleC.text.trim();
    p['subtitle'] = _subtitleC.text.trim();
    p['linkUrl'] = _linkC.text.trim();
    p['linkLabel'] = _linkLabelC.text.trim();
    p['videoUrl'] = _videoC.text.trim();
    p['firstShowHour'] = int.tryParse(_hourC.text.trim()) ?? 7;
    p['firstShowMinute'] = int.tryParse(_minuteC.text.trim()) ?? 0;
    p['intervalHours'] = int.tryParse(_intervalC.text.trim()) ?? 3;
    p['maxPerDay'] = int.tryParse(_maxC.text.trim()) ?? 1;
    p['durationMs'] = int.tryParse(_durationC.text.trim()) ?? 7000;
    p['enabled'] = NgmyPopupDefaults.popupEnabled(p['enabled']);
  }

  Future<void> _pickVideoFromGallery() async {
    if (widget.onUploadVideo == null) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Video upload is not available on this device.')));
      return;
    }
    final picked = await _picker.pickVideo(source: ImageSource.gallery);
    if (picked == null) return;
    setState(() => _uploadingVideo = true);
    try {
      String ref;
      if (kIsWeb) {
        ref = 'data:video/mp4;base64,${base64Encode(await picked.readAsBytes())}';
      } else {
        ref = picked.path;
      }
      final url = await widget.onUploadVideo!(ref);
      if (url.trim().isNotEmpty) {
        _videoC.text = url.trim();
        p['videoUrl'] = url.trim();
      }
    } finally {
      if (mounted) setState(() => _uploadingVideo = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final panel = widget.isDark ? const Color(0xFF0F111A) : Colors.white;
    return Align(
      alignment: Alignment.bottomCenter,
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.88),
        margin: const EdgeInsets.fromLTRB(12, 12, 12, 16),
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 16),
        decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(22)),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text((p['title'] ?? 'Edit Pop Up').toString(), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              const SizedBox(height: 8),
              SwitchListTile(
                contentPadding: EdgeInsets.zero,
                title: const Text('Pop-up enabled'),
                value: NgmyPopupDefaults.popupEnabled(p['enabled']),
                onChanged: (v) => setState(() => p['enabled'] = v),
              ),
              const SizedBox(height: 8),
              TextField(controller: _titleC, decoration: _dec('Title')),
              const SizedBox(height: 8),
              TextField(controller: _subtitleC, decoration: _dec('Subtitle')),
              const SizedBox(height: 8),
              TextField(controller: _linkC, decoration: _dec('Link URL')),
              const SizedBox(height: 8),
              TextField(controller: _linkLabelC, decoration: _dec('Link label')),
              if (widget.isVideo) ...[
                const SizedBox(height: 8),
                TextField(controller: _videoC, decoration: _dec('Video URL (optional if uploaded)')),
                const SizedBox(height: 8),
                OutlinedButton.icon(
                  onPressed: _uploadingVideo ? null : _pickVideoFromGallery,
                  icon: _uploadingVideo
                      ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                      : const Icon(Icons.video_library_outlined),
                  label: Text(_uploadingVideo ? 'Uploading...' : 'Upload video from gallery'),
                ),
                const SizedBox(height: 8),
                DropdownButtonFormField<String>(
                  value: (p['frameStyle'] ?? 'gold_luxury').toString(),
                  decoration: _dec('Frame style'),
                  items: NgmyPopupDefaults.videoFrameStyles
                      .map((f) => DropdownMenuItem(value: f['id'] as String, child: Text(f['name'] as String)))
                      .toList(),
                  onChanged: (v) => setState(() => p['frameStyle'] = v),
                ),
              ] else ...[
                const SizedBox(height: 8),
                DropdownButtonFormField<String>(
                  value: (p['themeId'] ?? 'ngmy').toString(),
                  decoration: _dec('3D theme'),
                  items: [...NgmyPopupDefaults.standardThemes, ...NgmyPopupDefaults.marketingThemes]
                      .map((t) => DropdownMenuItem(value: t['id'] as String, child: Text(t['name'] as String)))
                      .toList(),
                  onChanged: (v) => setState(() => p['themeId'] = v),
                ),
              ],
              const SizedBox(height: 8),
              Row(children: [
                Expanded(child: TextField(controller: _hourC, keyboardType: TextInputType.number, decoration: _dec('Start hour'))),
                const SizedBox(width: 8),
                Expanded(child: TextField(controller: _minuteC, keyboardType: TextInputType.number, decoration: _dec('Start minute'))),
              ]),
              const SizedBox(height: 8),
              Row(children: [
                Expanded(child: TextField(controller: _intervalC, keyboardType: TextInputType.number, decoration: _dec('Hours apart'))),
                const SizedBox(width: 8),
                Expanded(child: TextField(controller: _maxC, keyboardType: TextInputType.number, decoration: _dec('Max / day'))),
              ]),
              const SizedBox(height: 8),
              DropdownButtonFormField<String>(
                value: (p['trigger'] ?? 'once_per_day').toString(),
                decoration: _dec('When to show'),
                items: const [
                  DropdownMenuItem(value: 'every_app_open', child: Text('Every app open')),
                  DropdownMenuItem(value: 'once_per_day', child: Text('Once per day')),
                  DropdownMenuItem(value: 'scheduled', child: Text('After scheduled time')),
                ],
                onChanged: (v) => setState(() => p['trigger'] = v),
              ),
              if (!widget.isVideo) ...[
                const SizedBox(height: 8),
                TextField(controller: _durationC, keyboardType: TextInputType.number, decoration: _dec('Duration ms')),
              ],
              const SizedBox(height: 14),
              Row(children: [
                Expanded(child: OutlinedButton(onPressed: widget.onPreview, child: const Text('Preview'))),
                const SizedBox(width: 10),
                Expanded(child: FilledButton(onPressed: () { _apply(); Navigator.pop(context); }, child: const Text('Apply'))),
              ]),
            ],
          ),
        ),
      ),
    );
  }
}
