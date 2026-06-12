import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_modern_chat_prefix.dart';
import 'ngmy_translate_payments.dart';

String ngmyLangLabel(String code) => code == 'sw' ? 'Swahili' : 'English';

String ngmyLangFlag(String code) => code == 'sw' ? '🇹🇿' : '🇺🇸';

String _translatePrompt({
  required String text,
  required String fromCode,
  required String toCode,
}) {
  final from = ngmyLangLabel(fromCode);
  final to = ngmyLangLabel(toCode);
  return 'You are a chat message translator (SMS, WhatsApp, etc.). '
      'Translate from $from to $to. Keep tone and meaning. '
      'Output ONLY the translated message text — no quotes, labels, or explanation.\n\n'
      'Message:\n$text';
}

/// Full-screen chat translator — paste foreign messages or write replies.
Future<void> showNgmyDocumentTranslateChat(
  BuildContext context, {
  required String geminiApiKey,
  required Future<String> Function() refreshApiKey,
  String initialMyLanguage = 'en',
  dynamic user,
  dynamic config,
  Future<bool> Function(double amount, String description)? onCharge,
  VoidCallback? onDataChanged,
  Future<bool> Function()? onPersistConfig,
}) {
  return Navigator.of(context).push(
    PageRouteBuilder<void>(
      fullscreenDialog: true,
      transitionDuration: const Duration(milliseconds: 420),
      reverseTransitionDuration: const Duration(milliseconds: 320),
      pageBuilder: (context, animation, secondaryAnimation) => _NgmyDocumentTranslatePage(
        geminiApiKey: geminiApiKey,
        refreshApiKey: refreshApiKey,
        initialMyLanguage: initialMyLanguage,
        user: user,
        config: config,
        onCharge: onCharge,
        onDataChanged: onDataChanged,
        onPersistConfig: onPersistConfig,
      ),
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        final slide = Tween<Offset>(begin: const Offset(0, 0.06), end: Offset.zero)
            .animate(CurvedAnimation(parent: animation, curve: Curves.easeOutCubic));
        return FadeTransition(opacity: animation, child: SlideTransition(position: slide, child: child));
      },
    ),
  );
}

class _NgmyDocumentTranslatePage extends StatefulWidget {
  const _NgmyDocumentTranslatePage({
    required this.geminiApiKey,
    required this.refreshApiKey,
    required this.initialMyLanguage,
    this.user,
    this.config,
    this.onCharge,
    this.onDataChanged,
    this.onPersistConfig,
  });

  final String geminiApiKey;
  final Future<String> Function() refreshApiKey;
  final String initialMyLanguage;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description)? onCharge;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

  @override
  State<_NgmyDocumentTranslatePage> createState() => _NgmyDocumentTranslatePageState();
}

class _NgmyDocumentTranslatePageState extends State<_NgmyDocumentTranslatePage> {
  static const _mint = Color(0xFF34D399);
  static const _cyan = Color(0xFF22D3EE);
  static const _violet = Color(0xFF8B5CF6);

  late String _myLang;
  late String _theirLang;
  bool _replyMode = false;
  final _inputC = TextEditingController();
  String? _output;
  String? _error;
  bool _busy = false;
  int? _remainingFree;

  bool get _paymentsEnabled =>
      widget.user != null && widget.config != null && widget.onCharge != null && widget.onDataChanged != null && widget.onPersistConfig != null;

  @override
  void initState() {
    super.initState();
    _myLang = widget.initialMyLanguage == 'sw' ? 'sw' : 'en';
    _theirLang = _myLang == 'en' ? 'sw' : 'en';
    _refreshRemaining();
  }

  @override
  void dispose() {
    _inputC.dispose();
    super.dispose();
  }

  Future<void> _refreshRemaining() async {
    if (!_paymentsEnabled) return;
    final email = ((widget.user as dynamic).email as String?) ?? '';
    final isAdmin = (widget.user as dynamic).isAdmin == true;
    final remaining = await NgmyTranslatePayments.remainingFree(widget.config, email, isAdmin: isAdmin);
    if (mounted) setState(() => _remainingFree = remaining);
  }

  void _setMyLang(String code) {
    setState(() {
      _myLang = code;
      _theirLang = code == 'en' ? 'sw' : 'en';
      _output = null;
      _error = null;
    });
  }

  void _setTheirLang(String code) {
    setState(() {
      _theirLang = code;
      _myLang = code == 'en' ? 'sw' : 'en';
      _output = null;
      _error = null;
    });
  }

  void _swapLanguages() {
    setState(() {
      final t = _myLang;
      _myLang = _theirLang;
      _theirLang = t;
      _output = null;
      _error = null;
    });
  }

  Future<void> _translate() async {
    final text = _inputC.text.trim();
    if (text.isEmpty) {
      setState(() => _error = 'Paste or type a message first.');
      return;
    }

    if (_paymentsEnabled) {
      final ok = await NgmyTranslatePayments.ensureAccess(
        context: context,
        user: widget.user,
        config: widget.config,
        onCharge: widget.onCharge!,
        onDataChanged: widget.onDataChanged!,
        onPersistConfig: widget.onPersistConfig!,
      );
      if (!ok || !mounted) return;
    }

    setState(() {
      _busy = true;
      _error = null;
      _output = null;
    });

    var apiKey = widget.geminiApiKey.trim();
    if (apiKey.isEmpty) apiKey = (await widget.refreshApiKey()).trim();
    if (apiKey.isEmpty) {
      if (!mounted) return;
      setState(() {
        _busy = false;
        _error = 'AI is not connected. Ask admin to save an API key.';
      });
      return;
    }

    final from = _replyMode ? _myLang : _theirLang;
    final to = _replyMode ? _theirLang : _myLang;
    final creds = ngmyParseAiCredentials(apiKey);
    final result = await ngmyAiGenerateWithCredentials(creds, _translatePrompt(text: text, fromCode: from, toCode: to));

    if (!mounted) return;
    if (result.text != null && result.text!.trim().isNotEmpty) {
      if (_paymentsEnabled) {
        final email = ((widget.user as dynamic).email as String?) ?? '';
        await NgmyTranslatePayments.recordTranslation(email);
        await _refreshRemaining();
      }
      setState(() {
        _busy = false;
        _output = result.text!.trim();
      });
    } else {
      setState(() {
        _busy = false;
        _error = result.error ?? 'Could not translate. Try again.';
      });
    }
  }

  void _copy(String text) {
    Clipboard.setData(ClipboardData(text: text));
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Copied — paste it in your chat'),
        backgroundColor: Color(0xFF059669),
        duration: Duration(seconds: 2),
      ),
    );
  }

  Widget _langChip(String code, {required String caption, required VoidCallback onTap}) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            color: Colors.white.withValues(alpha: 0.08),
            border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(caption, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 10, fontWeight: FontWeight.w700)),
              const SizedBox(height: 4),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(ngmyLangFlag(code), style: const TextStyle(fontSize: 22)),
                  const SizedBox(width: 8),
                  Text(
                    ngmyLangLabel(code),
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _swapButton() {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: _swapLanguages,
        customBorder: const CircleBorder(),
        child: Container(
          width: 48,
          height: 48,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: _cyan.withValues(alpha: 0.15),
            border: Border.all(color: _cyan.withValues(alpha: 0.55)),
            boxShadow: [BoxShadow(color: _cyan.withValues(alpha: 0.25), blurRadius: 12)],
          ),
          child: const Icon(Icons.swap_horiz_rounded, color: _cyan, size: 26),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    final fromLabel = _replyMode ? ngmyLangLabel(_myLang) : ngmyLangLabel(_theirLang);
    final toLabel = _replyMode ? ngmyLangLabel(_theirLang) : ngmyLangLabel(_myLang);

    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      resizeToAvoidBottomInset: true,
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF0F172A), Color(0xFF1E1B4B), Color(0xFF134E4A)],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(4, 4, 8, 0),
                child: Row(
                  children: [
                    IconButton(
                      onPressed: () => Navigator.pop(context),
                      icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70),
                    ),
                    const NgmyModernChatPrefixIcon(size: 28),
                    const SizedBox(width: 10),
                    const Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Message translator', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                          Text('Paste chats · copy replies', style: TextStyle(color: Colors.white60, fontSize: 11)),
                        ],
                      ),
                    ),
                    if (_remainingFree != null && _remainingFree! < 999999)
                      Container(
                        margin: const EdgeInsets.only(right: 4),
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        decoration: BoxDecoration(
                          color: _violet.withValues(alpha: 0.25),
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: _violet.withValues(alpha: 0.5)),
                        ),
                        child: Text(
                          '$_remainingFree free left',
                          style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800),
                        ),
                      ),
                  ],
                ),
              ),
              Expanded(
                child: SingleChildScrollView(
                  padding: EdgeInsets.fromLTRB(20, 16, 20, 20 + bottom),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Row(
                        children: [
                          Expanded(
                            child: _modeTab(
                              selected: !_replyMode,
                              icon: Icons.mark_chat_read_rounded,
                              label: 'They wrote',
                              sub: 'Paste what you don\'t understand',
                              onTap: () => setState(() {
                                _replyMode = false;
                                _output = null;
                                _error = null;
                              }),
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: _modeTab(
                              selected: _replyMode,
                              icon: Icons.reply_rounded,
                              label: 'You reply',
                              sub: 'Write in your language',
                              onTap: () => setState(() {
                                _replyMode = true;
                                _output = null;
                                _error = null;
                              }),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 28),
                      Text(
                        'Languages',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontWeight: FontWeight.w800, fontSize: 12),
                      ),
                      const SizedBox(height: 12),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          _langChip(_theirLang, caption: 'They speak', onTap: () => _setTheirLang(_theirLang == 'en' ? 'sw' : 'en')),
                          const SizedBox(width: 14),
                          _swapButton(),
                          const SizedBox(width: 14),
                          _langChip(_myLang, caption: 'I understand', onTap: () => _setMyLang(_myLang == 'en' ? 'sw' : 'en')),
                        ],
                      ),
                      const SizedBox(height: 28),
                      TextField(
                        controller: _inputC,
                        maxLines: 6,
                        minLines: 5,
                        style: const TextStyle(color: Colors.white, fontSize: 15),
                        decoration: InputDecoration(
                          hintText: _replyMode
                              ? 'Type your reply in ${ngmyLangLabel(_myLang)}…'
                              : 'Paste their message in ${ngmyLangLabel(_theirLang)}…',
                          hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 14),
                          filled: true,
                          fillColor: Colors.white.withValues(alpha: 0.07),
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                        ),
                      ),
                      const SizedBox(height: 14),
                      FilledButton.icon(
                        onPressed: _busy ? null : _translate,
                        icon: _busy
                            ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                            : const Icon(Icons.translate_rounded, size: 22),
                        label: Text(_busy ? 'Translating…' : 'Translate ($fromLabel → $toLabel)'),
                        style: FilledButton.styleFrom(
                          backgroundColor: _violet,
                          minimumSize: const Size(double.infinity, 52),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        ),
                      ),
                      if (_error != null) ...[
                        const SizedBox(height: 12),
                        Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFF87171), fontSize: 13)),
                      ],
                      if (_output != null) ...[
                        const SizedBox(height: 20),
                        Material(
                          color: Colors.transparent,
                          child: InkWell(
                            onTap: () => _copy(_output!),
                            borderRadius: BorderRadius.circular(18),
                            child: Ink(
                              padding: const EdgeInsets.all(16),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(18),
                                color: _mint.withValues(alpha: 0.12),
                                border: Border.all(color: _mint.withValues(alpha: 0.45)),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  Row(
                                    children: [
                                      Text('In $toLabel', style: const TextStyle(color: _mint, fontWeight: FontWeight.w800, fontSize: 12)),
                                      const Spacer(),
                                      IconButton(
                                        visualDensity: VisualDensity.compact,
                                        padding: EdgeInsets.zero,
                                        constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
                                        tooltip: 'Copy',
                                        onPressed: () => _copy(_output!),
                                        icon: const Icon(Icons.copy_rounded, color: _mint, size: 22),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 8),
                                  SelectableText(
                                    _output!,
                                    style: const TextStyle(color: Colors.white, fontSize: 16, height: 1.5, fontWeight: FontWeight.w600),
                                  ),
                                  const SizedBox(height: 10),
                                  Text(
                                    'Tap message or copy icon to copy · paste in your chat app',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _modeTab({
    required bool selected,
    required IconData icon,
    required String label,
    required String sub,
    required VoidCallback onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            color: selected ? _cyan.withValues(alpha: 0.18) : Colors.white.withValues(alpha: 0.05),
            border: Border.all(color: selected ? _cyan.withValues(alpha: 0.55) : Colors.white12),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(icon, size: 18, color: selected ? _cyan : Colors.white54),
                  const SizedBox(width: 8),
                  Text(label, style: TextStyle(color: selected ? Colors.white : Colors.white70, fontWeight: FontWeight.w900, fontSize: 13)),
                ],
              ),
              const SizedBox(height: 4),
              Text(sub, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10, height: 1.25)),
            ],
          ),
        ),
      ),
    );
  }
}
