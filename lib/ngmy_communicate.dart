import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_communicate_payments.dart';
import 'ngmy_communicate_storage.dart';
import 'ngmy_voice_input.dart';

class NgmyCommunicateProfile {
  final String id;
  final String name;
  final String gender;
  final String personality;
  final String bio;
  final String emoji;
  final bool active;

  const NgmyCommunicateProfile({
    required this.id,
    required this.name,
    required this.gender,
    required this.personality,
    this.bio = '',
    this.emoji = '💬',
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

List<NgmyCommunicateProfile> ngmyCommunicateProfilesFromConfig(dynamic config) {
  final raw = (config as dynamic).communicateProfiles;
  if (raw is! List) return [];
  return raw
      .map((e) => e is Map ? NgmyCommunicateProfile.fromMap(Map<String, dynamic>.from(e)) : null)
      .whereType<NgmyCommunicateProfile>()
      .where((p) => p.id.isNotEmpty && p.active)
      .toList();
}

/// Companion list + chat — hidden Communicate mode inside Helper.
class NgmyCommunicatePanel extends StatefulWidget {
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
  State<NgmyCommunicatePanel> createState() => _NgmyCommunicatePanelState();
}

class _NgmyCommunicatePanelState extends State<NgmyCommunicatePanel> {
  NgmyCommunicateProfile? _selected;

  @override
  Widget build(BuildContext context) {
    if (_selected != null) {
      return _CommunicateChatView(
        user: widget.user,
        config: widget.config,
        apiKey: widget.apiKey,
        profile: _selected!,
        onBack: () => setState(() => _selected = null),
        onChargeWallet: widget.onChargeWallet,
      );
    }
    final profiles = ngmyCommunicateProfilesFromConfig(widget.config);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 4, 14, 8),
          child: Row(
            children: [
              IconButton(
                icon: const Icon(Icons.arrow_back_rounded, size: 20),
                onPressed: widget.onBackToChat,
                tooltip: 'Back to Chat',
              ),
              Expanded(
                child: Text(
                  'Communicate',
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : Colors.black87),
                ),
              ),
            ],
          ),
        ),
        Expanded(
          child: profiles.isEmpty
              ? Center(
                  child: Padding(
                    padding: const EdgeInsets.all(24),
                    child: Text(
                      'No companions available yet.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: isDark ? Colors.white54 : Colors.black45),
                    ),
                  ),
                )
              : ListView.builder(
                  padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
                  itemCount: profiles.length,
                  itemBuilder: (context, i) {
                    final p = profiles[i];
                    return Card(
                      margin: const EdgeInsets.only(bottom: 10),
                      color: isDark ? const Color(0xFF1A2030) : Colors.white,
                      child: ListTile(
                        leading: CircleAvatar(
                          backgroundColor: const Color(0xFFEC4899).withValues(alpha: 0.2),
                          child: Text(p.emoji, style: const TextStyle(fontSize: 22)),
                        ),
                        title: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w800)),
                        subtitle: Text('${p.genderLabel} · Tap to chat', style: const TextStyle(fontSize: 11)),
                        trailing: const Icon(Icons.chat_bubble_outline_rounded, color: Color(0xFFEC4899)),
                        onTap: () => setState(() => _selected = p),
                      ),
                    );
                  },
                ),
        ),
      ],
    );
  }
}

class _CommunicateChatView extends StatefulWidget {
  final dynamic user;
  final dynamic config;
  final String apiKey;
  final NgmyCommunicateProfile profile;
  final VoidCallback onBack;
  final Future<bool> Function(double amount, String description)? onChargeWallet;

  const _CommunicateChatView({
    required this.user,
    required this.config,
    required this.apiKey,
    required this.profile,
    required this.onBack,
    this.onChargeWallet,
  });

  @override
  State<_CommunicateChatView> createState() => _CommunicateChatViewState();
}

class _CommunicateChatViewState extends State<_CommunicateChatView> with WidgetsBindingObserver {
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
      if (mounted) setState(() {
        _usedSeconds = used;
        _sessionSeconds = DateTime.now().difference(_sessionStart ?? DateTime.now()).inSeconds;
      });
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
    final used = await NgmyCommunicateTimeTracker.getUsedSeconds(_email);
    _usedSeconds = used;
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
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final mins = NgmyCommunicatePayments.minutesPerPaymentFromConfig(widget.config);
    final totalSec = _usedSeconds + _sessionSeconds;
    final remaining = (NgmyCommunicatePayments.thresholdSeconds(widget.config) - totalSec).clamp(0, 999999);
    final remMin = (remaining / 60).ceil();

    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(8, 4, 14, 4),
          child: Row(
            children: [
              IconButton(icon: const Icon(Icons.arrow_back_rounded, size: 20), onPressed: widget.onBack),
              Text(widget.profile.emoji, style: const TextStyle(fontSize: 20)),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(widget.profile.name, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : Colors.black87)),
                    Text(
                      _isAdmin ? 'Admin — free chat' : '~$remMin min left in block ($mins min / \$${NgmyCommunicatePayments.feeAmountFromConfig(widget.config).toStringAsFixed(2)})',
                      style: TextStyle(fontSize: 10, color: isDark ? Colors.white54 : Colors.black45),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        Expanded(
          child: ListView.builder(
            controller: _scroll,
            padding: const EdgeInsets.fromLTRB(14, 8, 14, 8),
            itemCount: _messages.length + (_busy ? 1 : 0),
            itemBuilder: (context, i) {
              if (_busy && i == _messages.length) {
                return const Padding(padding: EdgeInsets.all(12), child: Text('typing…', style: TextStyle(fontStyle: FontStyle.italic, fontSize: 12)));
              }
              final m = _messages[i];
              final user = m['role'] == 'user';
              return Align(
                alignment: user ? Alignment.centerRight : Alignment.centerLeft,
                child: Container(
                  margin: const EdgeInsets.only(bottom: 10),
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.78),
                  decoration: BoxDecoration(
                    color: user
                        ? const Color(0xFFEC4899).withValues(alpha: isDark ? 0.35 : 0.15)
                        : (isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9)),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Text(m['text'] ?? '', style: TextStyle(fontSize: 14, height: 1.4, color: isDark ? Colors.white : Colors.black87)),
                ),
              );
            },
          ),
        ),
        Container(
          margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
          padding: const EdgeInsets.fromLTRB(8, 6, 4, 6),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: isDark ? const Color(0xFF0F172A) : Colors.white,
            border: Border.all(color: const Color(0xFFEC4899).withValues(alpha: 0.25)),
          ),
          child: Row(
            children: [
              Expanded(
                child: TextField(
                  controller: _controller,
                  minLines: 1,
                  maxLines: 4,
                  decoration: const InputDecoration(
                    hintText: 'Text…',
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  ),
                  onSubmitted: (_) => _send(),
                ),
              ),
              NgmyVoiceMicButton(controller: _controller, color: const Color(0xFFEC4899)),
              IconButton(icon: const Icon(Icons.send_rounded, color: Color(0xFFEC4899)), onPressed: _busy ? null : _send),
            ],
          ),
        ),
      ],
    );
  }
}
