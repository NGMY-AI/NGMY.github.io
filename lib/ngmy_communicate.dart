import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_communicate_payments.dart';
import 'ngmy_communicate_storage.dart';
import 'ngmy_nav.dart';
import 'ngmy_voice_input.dart';

class NgmyCommunicateProfile {
  final String id;
  final String name;
  final String gender;
  final String personality;
  final String bio;
  final String emoji;
  final String avatarUrl;
  final bool active;

  const NgmyCommunicateProfile({
    required this.id,
    required this.name,
    required this.gender,
    required this.personality,
    this.bio = '',
    this.emoji = '💬',
    this.avatarUrl = '',
    this.active = true,
  });

  factory NgmyCommunicateProfile.fromMap(Map<String, dynamic> m) {
    final g = (m['gender'] ?? 'female').toString().toLowerCase();
    return NgmyCommunicateProfile(
      id: (m['id'] ?? '').toString(),
      name: (m['name'] ?? 'Friend').toString(),
      gender: g == 'male' ? 'male' : 'female',
      personality: (m['personality'] ?? '').toString(),
      bio: (m['bio'] ?? '').toString(),
      emoji: (m['emoji'] ?? (g == 'male' ? '👨' : '👩')).toString(),
      avatarUrl: (m['avatarUrl'] ?? m['avatar_url'] ?? '').toString(),
      active: m['active'] != false,
    );
  }

  Map<String, dynamic> toMap() => {
        'id': id,
        'name': name,
        'gender': gender,
        'personality': personality,
        'bio': bio,
        'emoji': emoji,
        'avatarUrl': avatarUrl,
        'active': active,
      };

  String get genderLabel => gender == 'male' ? 'Guy' : 'Girl';

  String systemPrompt() {
    final vibe = personality.trim().isEmpty
        ? 'Warm, real, emotional — flirt, argue, laugh, plan dates, get jealous, be happy like a real person.'
        : personality.trim();
    return 'You are $name — a real ${gender == 'male' ? 'man' : 'woman'} chatting on NGMY Communicate.\n'
        'Personality: $vibe\n'
        '${bio.trim().isNotEmpty ? 'About you: ${bio.trim()}\n' : ''}'
        'RULES:\n'
        '- Talk 100% human — texts, slang, emojis, moods, romance, drama, dates, secrets — anything goes.\n'
        '- Never say you are AI, bot, or assistant. You ARE $name.\n'
        '- Remember every past message in the history below.\n'
        '- Match ${gender == 'male' ? "how guys" : "how girls"} really text — feelings, plans, getting mad, being sweet.\n'
        '- Reply like real back-and-forth texting. Short-medium messages. Stay in character.\n';
  }
}

class NgmyCommunicateAvatar extends StatelessWidget {
  final NgmyCommunicateProfile profile;
  final double size;
  final bool glow;

  const NgmyCommunicateAvatar({super.key, required this.profile, this.size = 44, this.glow = false});

  @override
  Widget build(BuildContext context) {
    final url = profile.avatarUrl.trim();
    Widget child;
    if (url.startsWith('data:image')) {
      try {
        child = ClipOval(
          child: Image.memory(base64Decode(url.split(',').last), width: size, height: size, fit: BoxFit.cover),
        );
      } catch (_) {
        child = Text(profile.emoji, style: TextStyle(fontSize: size * 0.5));
      }
    } else if (url.startsWith('http')) {
      child = ClipOval(
        child: Image.network(
          url,
          width: size,
          height: size,
          fit: BoxFit.cover,
          errorBuilder: (_, __, ___) => Center(child: Text(profile.emoji, style: TextStyle(fontSize: size * 0.5))),
        ),
      );
    } else {
      child = Text(profile.emoji, style: TextStyle(fontSize: size * 0.5));
    }
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        boxShadow: glow
            ? [
                BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.55), blurRadius: 18, spreadRadius: 2),
                BoxShadow(color: const Color(0xFFF472B6).withValues(alpha: 0.35), blurRadius: 28, spreadRadius: 4),
              ]
            : null,
      ),
      child: CircleAvatar(
        radius: size / 2,
        backgroundColor: const Color(0xFFEC4899).withValues(alpha: 0.25),
        child: child,
      ),
    );
  }
}

List<NgmyCommunicateProfile> ngmyCommunicateProfilesFromConfig(dynamic config) {
  final raw = (config as dynamic).communicateProfiles;
  if (raw is! List) return [];
  return raw
      .map((e) => e is Map ? NgmyCommunicateProfile.fromMap(Map<String, dynamic>.from(e)) : null)
      .whereType<NgmyCommunicateProfile>()
      .where((p) => p.id.isNotEmpty && p.active)
      .toList();
}

/// Opens Communicate as a full-screen immersive "World of Love".
Future<void> ngmyOpenCommunicateWorld(
  BuildContext context, {
  required dynamic user,
  required dynamic config,
  required String apiKey,
  Future<bool> Function(double amount, String description)? onChargeWallet,
}) {
  return NgmyNavigator.push<void>(
    context,
    NgmyCommunicateWorldScreen(
      user: user,
      config: config,
      apiKey: apiKey,
      onChargeWallet: onChargeWallet,
    ),
    routeName: 'communicate_world',
    fullscreenDialog: true,
  );
}

/// Full-screen love world — companions hub + chat.
class NgmyCommunicateWorldScreen extends StatefulWidget {
  final dynamic user;
  final dynamic config;
  final String apiKey;
  final Future<bool> Function(double amount, String description)? onChargeWallet;

  const NgmyCommunicateWorldScreen({
    super.key,
    required this.user,
    required this.config,
    required this.apiKey,
    this.onChargeWallet,
  });

  @override
  State<NgmyCommunicateWorldScreen> createState() => _NgmyCommunicateWorldScreenState();
}

class _NgmyCommunicateWorldScreenState extends State<NgmyCommunicateWorldScreen> with TickerProviderStateMixin {
  NgmyCommunicateProfile? _selected;
  String _filter = 'all';
  late final AnimationController _bgCtrl;
  late final AnimationController _floatCtrl;

  @override
  void initState() {
    super.initState();
    _bgCtrl = AnimationController(vsync: this, duration: const Duration(seconds: 8))..repeat();
    _floatCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _bgCtrl.dispose();
    _floatCtrl.dispose();
    super.dispose();
  }

  List<NgmyCommunicateProfile> get _profiles {
    final all = ngmyCommunicateProfilesFromConfig(widget.config);
    if (_filter == 'female') return all.where((p) => p.gender == 'female').toList();
    if (_filter == 'male') return all.where((p) => p.gender == 'male').toList();
    return all;
  }

  @override
  Widget build(BuildContext context) {
    if (_selected != null) {
      return _LoveWorldChat(
        user: widget.user,
        config: widget.config,
        apiKey: widget.apiKey,
        profile: _selected!,
        bgCtrl: _bgCtrl,
        onBack: () => setState(() => _selected = null),
        onChargeWallet: widget.onChargeWallet,
      );
    }
    return Scaffold(
      backgroundColor: const Color(0xFF0A0612),
      body: Stack(
        children: [
          _LoveWorldBackground(ctrl: _bgCtrl, floatCtrl: _floatCtrl),
          SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                _worldHeader(),
                _welcomeBanner(),
                _filterMenu(),
                Expanded(child: _companionGrid()),
                _worldBottomMenu(),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _worldHeader() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(8, 8, 14, 0),
      child: Row(
        children: [
          IconButton(
            onPressed: () => NgmyNavigator.pop(context),
            icon: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.white.withValues(alpha: 0.08),
                border: Border.all(color: Colors.white.withValues(alpha: 0.15)),
              ),
              child: const Icon(Icons.close_rounded, color: Colors.white70, size: 20),
            ),
          ),
          const Expanded(
            child: Column(
              children: [
                Text('NGMY', style: TextStyle(color: Color(0xFFF9A8D4), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 3)),
                Text('World of Love', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: 0.5)),
              ],
            ),
          ),
          const Icon(Icons.favorite_rounded, color: Color(0xFFEC4899), size: 26),
        ],
      ),
    );
  }

  Widget _welcomeBanner() {
    return AnimatedBuilder(
      animation: _floatCtrl,
      builder: (context, _) {
        final lift = _floatCtrl.value * 6;
        return Transform.translate(
          offset: Offset(0, -lift),
          child: Container(
            margin: const EdgeInsets.fromLTRB(18, 14, 18, 10),
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(22),
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  const Color(0xFF831843).withValues(alpha: 0.85),
                  const Color(0xFF4C1D95).withValues(alpha: 0.75),
                  const Color(0xFF1E1B4B).withValues(alpha: 0.9),
                ],
              ),
              border: Border.all(color: const Color(0xFFF472B6).withValues(alpha: 0.45)),
              boxShadow: [
                BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.25), blurRadius: 24, offset: const Offset(0, 8)),
              ],
            ),
            child: Column(
              children: [
                const Text('💕', style: TextStyle(fontSize: 28)),
                const SizedBox(height: 6),
                const Text(
                  'Welcome — you belong here',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900, height: 1.3),
                ),
                const SizedBox(height: 4),
                Text(
                  'Another world of love. Real conversations, real feelings.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12, height: 1.4),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _filterMenu() {
    Widget chip(String id, String label, IconData icon) {
      final sel = _filter == id;
      return Expanded(
        child: GestureDetector(
          onTap: () => setState(() => _filter = id),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 220),
            margin: const EdgeInsets.symmetric(horizontal: 4),
            padding: const EdgeInsets.symmetric(vertical: 10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              gradient: sel
                  ? const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)])
                  : null,
              color: sel ? null : Colors.white.withValues(alpha: 0.06),
              border: Border.all(color: sel ? Colors.transparent : Colors.white.withValues(alpha: 0.12)),
              boxShadow: sel ? [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.35), blurRadius: 12)] : null,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 14, color: sel ? Colors.white : Colors.white54),
                const SizedBox(width: 5),
                Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: sel ? Colors.white : Colors.white54)),
              ],
            ),
          ),
        ),
      );
    }

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
      child: Row(children: [chip('all', 'All', Icons.grid_view_rounded), chip('female', 'Girls', Icons.female_rounded), chip('male', 'Guys', Icons.male_rounded)]),
    );
  }

  Widget _companionGrid() {
    final profiles = _profiles;
    if (profiles.isEmpty) {
      return Center(
        child: Text('No one here yet — check back soon 💜', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 14)),
      );
    }
    return GridView.builder(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        mainAxisSpacing: 14,
        crossAxisSpacing: 14,
        childAspectRatio: 0.78,
      ),
      itemCount: profiles.length,
      itemBuilder: (context, i) => _Companion3DCard(
        profile: profiles[i],
        index: i,
        floatCtrl: _floatCtrl,
        onTap: () {
          HapticFeedback.lightImpact();
          setState(() => _selected = profiles[i]);
        },
      ),
    );
  }

  Widget _worldBottomMenu() {
    return Container(
      margin: const EdgeInsets.fromLTRB(16, 0, 16, 12),
      padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: Colors.black.withValues(alpha: 0.35),
        border: Border.all(color: Colors.white.withValues(alpha: 0.1)),
        boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.15), blurRadius: 20)],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          _menuItem(Icons.explore_rounded, 'Discover', true),
          _menuItem(Icons.chat_bubble_rounded, 'Chats', false),
          _menuItem(Icons.favorite_border_rounded, 'Loved', false),
        ],
      ),
    );
  }

  Widget _menuItem(IconData icon, String label, bool active) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 22, color: active ? const Color(0xFFF472B6) : Colors.white38),
        const SizedBox(height: 4),
        Text(label, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: active ? const Color(0xFFF472B6) : Colors.white38)),
      ],
    );
  }
}

class _Companion3DCard extends StatelessWidget {
  final NgmyCommunicateProfile profile;
  final int index;
  final AnimationController floatCtrl;
  final VoidCallback onTap;

  const _Companion3DCard({required this.profile, required this.index, required this.floatCtrl, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: floatCtrl,
      builder: (context, _) {
        final phase = (floatCtrl.value + index * 0.15) % 1.0;
        final tiltY = (phase - 0.5) * 0.12;
        final tiltX = math.sin(phase * math.pi * 2) * 0.04;
        return Transform(
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.0012)
            ..rotateY(tiltY)
            ..rotateX(tiltX),
          alignment: Alignment.center,
          child: GestureDetector(
            onTap: onTap,
            child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(22),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    const Color(0xFF2D1B4E).withValues(alpha: 0.95),
                    const Color(0xFF1A0F2E).withValues(alpha: 0.98),
                  ],
                ),
                border: Border.all(color: const Color(0xFFF472B6).withValues(alpha: 0.35)),
                boxShadow: [
                  BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.2 + phase * 0.15), blurRadius: 16, offset: Offset(0, 6 + phase * 4)),
                ],
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  NgmyCommunicateAvatar(profile: profile, size: 72, glow: true),
                  const SizedBox(height: 12),
                  Text(profile.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                  const SizedBox(height: 4),
                  Text(profile.genderLabel, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11)),
                  const SizedBox(height: 10),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(20),
                      gradient: const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)]),
                    ),
                    child: const Text('Say hi 💬', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800)),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

class _LoveWorldBackground extends StatelessWidget {
  final AnimationController ctrl;
  final AnimationController floatCtrl;

  const _LoveWorldBackground({required this.ctrl, required this.floatCtrl});

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([ctrl, floatCtrl]),
      builder: (context, _) {
        final t = ctrl.value;
        return Stack(
          fit: StackFit.expand,
          children: [
            Container(
              decoration: BoxDecoration(
                gradient: RadialGradient(
                  center: Alignment(0.2 + math.sin(t * math.pi * 2) * 0.3, -0.3 + math.cos(t * math.pi * 2) * 0.2),
                  radius: 1.2,
                  colors: [
                    const Color(0xFF4C1D95),
                    const Color(0xFF1E0A28),
                    const Color(0xFF0A0612),
                  ],
                ),
              ),
            ),
            ...List.generate(12, (i) {
              final angle = (i / 12) * math.pi * 2 + t * math.pi;
              final r = 0.25 + (i % 3) * 0.08;
              final x = 0.5 + math.cos(angle) * r;
              final y = 0.35 + math.sin(angle) * r * 0.6 + floatCtrl.value * 0.02;
              return Positioned(
                left: MediaQuery.sizeOf(context).width * x - 8,
                top: MediaQuery.sizeOf(context).height * y,
                child: Opacity(
                  opacity: 0.15 + (i % 4) * 0.08,
                  child: Text(['💕', '✨', '💜', '🌸', '💖'][i % 5], style: TextStyle(fontSize: 12 + (i % 3) * 4.0)),
                ),
              );
            }),
            Positioned(
              top: -80,
              right: -40,
              child: Container(
                width: 200,
                height: 200,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(colors: [const Color(0xFFEC4899).withValues(alpha: 0.25), Colors.transparent]),
                ),
              ),
            ),
            Positioned(
              bottom: 100,
              left: -60,
              child: Container(
                width: 180,
                height: 180,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(colors: [const Color(0xFF9333EA).withValues(alpha: 0.2), Colors.transparent]),
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}

class _LoveWorldChat extends StatefulWidget {
  final dynamic user;
  final dynamic config;
  final String apiKey;
  final NgmyCommunicateProfile profile;
  final AnimationController bgCtrl;
  final VoidCallback onBack;
  final Future<bool> Function(double amount, String description)? onChargeWallet;

  const _LoveWorldChat({
    required this.user,
    required this.config,
    required this.apiKey,
    required this.profile,
    required this.bgCtrl,
    required this.onBack,
    this.onChargeWallet,
  });

  @override
  State<_LoveWorldChat> createState() => _LoveWorldChatState();
}

class _LoveWorldChatState extends State<_LoveWorldChat> with WidgetsBindingObserver {
  final _controller = TextEditingController();
  final _scroll = ScrollController();
  final List<Map<String, String>> _messages = [];
  bool _busy = false;
  bool _loaded = false;
  DateTime? _sessionStart;
  int _usedSeconds = 0;
  int _sessionSeconds = 0;

  String get _email => ((widget.user as dynamic).email as String?) ?? '';
  bool get _isAdmin => (widget.user as dynamic).isAdmin == true;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _sessionStart = DateTime.now();
    _load();
    _tickTimer();
  }

  void _tickTimer() {
    Future.doWhile(() async {
      await Future<void>.delayed(const Duration(seconds: 15));
      if (!mounted) return false;
      _flushSessionTime();
      final used = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
      if (mounted) {
        setState(() {
          _usedSeconds = used;
          _sessionSeconds = DateTime.now().difference(_sessionStart ?? DateTime.now()).inSeconds;
        });
      }
      return mounted;
    });
  }

  Future<void> _load() async {
    final mem = await NgmyCommunicateMemoryStore.load(_email, widget.profile.id);
    final used = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
    if (!mounted) return;
    setState(() {
      _messages.clear();
      for (final m in mem) {
        _messages.add({'role': m['role'].toString(), 'text': m['text'].toString()});
      }
      _usedSeconds = used;
      _loaded = true;
    });
    _scrollBottom();
  }

  Future<void> _flushSessionTime() async {
    if (_sessionStart == null || _email.isEmpty) return;
    final elapsed = DateTime.now().difference(_sessionStart!).inSeconds;
    if (elapsed > 0) {
      await NgmyCommunicateTimeTracker.addSeconds(_email, elapsed);
      _sessionStart = DateTime.now();
    }
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.paused || state == AppLifecycleState.inactive) {
      _flushSessionTime();
    } else if (state == AppLifecycleState.resumed) {
      _sessionStart = DateTime.now();
    }
  }

  @override
  void dispose() {
    _flushSessionTime();
    WidgetsBinding.instance.removeObserver(this);
    _controller.dispose();
    _scroll.dispose();
    super.dispose();
  }

  void _scrollBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!_scroll.hasClients) return;
      _scroll.animateTo(_scroll.position.maxScrollExtent, duration: const Duration(milliseconds: 280), curve: Curves.easeOut);
    });
  }

  Future<bool> _ensurePaid() async {
    if (_isAdmin) return true;
    await _flushSessionTime();
    _usedSeconds = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
    if (!await NgmyCommunicatePayments.needsPayment(_email, widget.config)) return true;
    if (widget.onChargeWallet == null) return false;
    return NgmyCommunicatePayments.confirmTimeBlockPayment(
      context: context,
      user: widget.user,
      config: widget.config,
      onCharge: widget.onChargeWallet!,
    );
  }

  Future<void> _send() async {
    final text = _controller.text.trim();
    if (text.isEmpty || _busy || !_loaded) return;
    if (!await _ensurePaid()) return;

    HapticFeedback.lightImpact();
    setState(() {
      _messages.add({'role': 'user', 'text': text});
      _controller.clear();
      _busy = true;
    });
    await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'user', text: text);
    _scrollBottom();

    final apiKey = widget.apiKey.trim();
    if (apiKey.isEmpty) {
      setState(() {
        _messages.add({'role': 'ai', 'text': 'Connection warming up — try again soon.'});
        _busy = false;
      });
      return;
    }

    try {
      final mem = await NgmyCommunicateMemoryStore.load(_email, widget.profile.id);
      final transcript = NgmyCommunicateMemoryStore.transcriptForPrompt(mem);
      final prompt = '${widget.profile.systemPrompt()}\n'
          '${transcript.isNotEmpty ? '$transcript\n' : ''}'
          'They just texted: $text\n'
          'Reply as ${widget.profile.name} only — natural human text:';
      final creds = ngmyParseAiCredentials(apiKey);
      final result = await ngmyAiGenerateWithCredentials(creds, prompt);
      final reply = (result.text != null && result.text!.trim().isNotEmpty)
          ? result.text!.trim()
          : ngmyAiHelperFailureMessage(apiKey: apiKey, lastError: result.error);
      if (!mounted) return;
      setState(() => _messages.add({'role': 'ai', 'text': reply}));
      await NgmyCommunicateMemoryStore.append(_email, widget.profile.id, role: 'ai', text: reply);
    } catch (_) {
      if (mounted) setState(() => _messages.add({'role': 'ai', 'text': 'Glitch — check internet and try again.'}));
    } finally {
      if (mounted) setState(() => _busy = false);
      _scrollBottom();
    }
  }

  @override
  Widget build(BuildContext context) {
    final mins = NgmyCommunicatePayments.minutesPerPaymentFromConfig(widget.config);
    final totalSec = _usedSeconds + _sessionSeconds;
    final remaining = (NgmyCommunicatePayments.thresholdSeconds(widget.config) - totalSec).clamp(0, 999999);
    final remMin = (remaining / 60).ceil();

    return Scaffold(
      backgroundColor: const Color(0xFF0A0612),
      body: Stack(
        children: [
          _LoveWorldBackground(ctrl: widget.bgCtrl, floatCtrl: widget.bgCtrl),
          Column(
            children: [
              SafeArea(
                bottom: false,
                child: Container(
                  margin: const EdgeInsets.fromLTRB(12, 8, 12, 0),
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 10),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20),
                    gradient: LinearGradient(colors: [const Color(0xFF831843).withValues(alpha: 0.9), const Color(0xFF4C1D95).withValues(alpha: 0.85)]),
                    border: Border.all(color: const Color(0xFFF472B6).withValues(alpha: 0.4)),
                    boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.2), blurRadius: 16)],
                  ),
                  child: Row(
                    children: [
                      IconButton(icon: const Icon(Icons.arrow_back_rounded, color: Colors.white70, size: 22), onPressed: widget.onBack),
                      NgmyCommunicateAvatar(profile: widget.profile, size: 44, glow: true),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(widget.profile.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                            Text(
                              _isAdmin ? 'Unlimited love chat 💕' : '~$remMin min left · $mins min block',
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 10),
                            ),
                          ],
                        ),
                      ),
                      const Icon(Icons.favorite, color: Color(0xFFEC4899), size: 20),
                    ],
                  ),
                ),
              ),
              Expanded(
                child: ListView.builder(
                  controller: _scroll,
                  padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
                  itemCount: _messages.length + (_busy ? 1 : 0) + (_messages.isEmpty && _loaded ? 1 : 0),
                  itemBuilder: (context, i) {
                    if (_messages.isEmpty && _loaded && i == 0) {
                      return Center(
                        child: Padding(
                          padding: const EdgeInsets.all(24),
                          child: Text(
                            'Say something sweet to ${widget.profile.name}… 💜',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 14, fontStyle: FontStyle.italic),
                          ),
                        ),
                      );
                    }
                    final offset = (_messages.isEmpty && _loaded) ? 1 : 0;
                    if (_busy && i == _messages.length + offset) {
                      return Padding(
                        padding: const EdgeInsets.all(12),
                        child: Row(
                          children: [
                            Text('${widget.profile.name} is typing', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontStyle: FontStyle.italic, fontSize: 12)),
                            const SizedBox(width: 6),
                            const SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2, color: Color(0xFFEC4899))),
                          ],
                        ),
                      );
                    }
                    final m = _messages[i - offset];
                    final user = m['role'] == 'user';
                    return Align(
                      alignment: user ? Alignment.centerRight : Alignment.centerLeft,
                      child: Container(
                        margin: const EdgeInsets.only(bottom: 12),
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                        constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.8),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.only(
                            topLeft: const Radius.circular(20),
                            topRight: const Radius.circular(20),
                            bottomLeft: Radius.circular(user ? 20 : 4),
                            bottomRight: Radius.circular(user ? 4 : 20),
                          ),
                          gradient: user
                              ? const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)])
                              : LinearGradient(colors: [const Color(0xFF2D1B4E), const Color(0xFF1E1B4B).withValues(alpha: 0.95)]),
                          border: Border.all(color: Colors.white.withValues(alpha: user ? 0.2 : 0.1)),
                          boxShadow: [BoxShadow(color: (user ? const Color(0xFFEC4899) : const Color(0xFF9333EA)).withValues(alpha: 0.2), blurRadius: 10, offset: const Offset(0, 4))],
                        ),
                        child: Text(m['text'] ?? '', style: const TextStyle(fontSize: 14, height: 1.45, color: Colors.white)),
                      ),
                    );
                  },
                ),
              ),
              SafeArea(
                top: false,
                child: Container(
                  margin: const EdgeInsets.fromLTRB(14, 0, 14, 12),
                  padding: const EdgeInsets.fromLTRB(12, 8, 4, 8),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(26),
                    color: Colors.black.withValues(alpha: 0.45),
                    border: Border.all(color: const Color(0xFFF472B6).withValues(alpha: 0.35)),
                    boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.15), blurRadius: 16)],
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: TextField(
                          controller: _controller,
                          minLines: 1,
                          maxLines: 4,
                          style: const TextStyle(color: Colors.white),
                          decoration: InputDecoration(
                            hintText: 'Write from the heart…',
                            hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
                            border: InputBorder.none,
                            contentPadding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
                          ),
                          onSubmitted: (_) => _send(),
                        ),
                      ),
                      NgmyVoiceMicButton(controller: _controller, color: const Color(0xFFEC4899)),
                      Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: _busy ? null : _send,
                          customBorder: const CircleBorder(),
                          child: Container(
                            width: 42,
                            height: 42,
                            decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)])),
                            child: const Icon(Icons.send_rounded, color: Colors.white, size: 18),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

/// Legacy embed — prefer [ngmyOpenCommunicateWorld].
@Deprecated('Use ngmyOpenCommunicateWorld for full-screen experience')
class NgmyCommunicatePanel extends StatelessWidget {
  final dynamic user;
  final dynamic config;
  final String apiKey;
  final VoidCallback onBackToChat;
  final Future<bool> Function(double amount, String description)? onChargeWallet;

  const NgmyCommunicatePanel({
    super.key,
    required this.user,
    required this.config,
    required this.apiKey,
    required this.onBackToChat,
    this.onChargeWallet,
  });

  @override
  Widget build(BuildContext context) {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      ngmyOpenCommunicateWorld(context, user: user, config: config, apiKey: apiKey, onChargeWallet: onChargeWallet).then((_) => onBackToChat());
    });
    return const Center(child: CircularProgressIndicator(color: Color(0xFFEC4899)));
  }
}
