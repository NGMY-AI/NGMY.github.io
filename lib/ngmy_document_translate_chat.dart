import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_elevenlabs_tts.dart';
import 'ngmy_modern_chat_prefix.dart';
import 'ngmy_offline_icons.dart';
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

String _wordLessonPrompt({
  required String word,
  required String sentence,
  required String wordLangCode,
  required String explainLangCode,
}) {
  final wordLang = ngmyLangLabel(wordLangCode);
  final explainLang = ngmyLangLabel(explainLangCode);
  return 'You are a friendly language teacher. A student tapped ONE word to learn it.\n'
      'Word language: $wordLang\n'
      'Explain in: $explainLang\n'
      'Full sentence context: $sentence\n'
      'Word they tapped: $word\n\n'
      'Reply in this exact format (plain text, keep it short and simple):\n'
      'MEANING: (one simple line in $explainLang)\n'
      'IN $wordLang: (the word again)\n'
      'EXAMPLE: (one easy example sentence in $wordLang)\n'
      'TRANSLATION: (that example in $explainLang)\n'
      'TIP: (one tiny usage tip for beginners)';
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
  String? _lastSourceText;
  String? _error;
  bool _busy = false;
  bool _wordBusy = false;
  String? _wordLesson;
  String? _wordLessonTitle;
  int? _remainingFree;
  String? _speakingKey;
  bool _speakingBusy = false;

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
    NgmyElevenLabsTts.stop();
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
        _lastSourceText = text;
        _output = result.text!.trim();
        _wordLesson = null;
        _wordLessonTitle = null;
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

  Future<void> _speakText({
    required String text,
    required String langCode,
    required String key,
  }) async {
    if (_speakingBusy) return;
    if (NgmyElevenLabsTts.isSpeaking(key)) {
      await NgmyElevenLabsTts.stop();
      if (mounted) setState(() => _speakingKey = null);
      return;
    }

    setState(() {
      _speakingBusy = true;
      _speakingKey = key;
    });

    final apiKey = await NgmyElevenLabsTts.resolveApiKey(config: widget.config);
    final result = await NgmyElevenLabsTts.speak(
      apiKey: apiKey,
      text: text,
      langCode: langCode,
      key: key,
    );

    if (!mounted) return;
    setState(() => _speakingBusy = false);
    if (result.error != null) {
      setState(() => _speakingKey = null);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(result.error!), backgroundColor: const Color(0xFFDC2626)),
      );
    } else if (!NgmyElevenLabsTts.isSpeaking(key)) {
      setState(() => _speakingKey = null);
    }
  }

  Widget _speakButton({
    required String text,
    required String langCode,
    required String key,
    required Color color,
    String tooltip = 'Listen',
  }) {
    final active = _speakingKey == key && (NgmyElevenLabsTts.isSpeaking(key) || _speakingBusy);
    return IconButton(
      visualDensity: VisualDensity.compact,
      padding: EdgeInsets.zero,
      constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
      tooltip: active ? 'Stop' : tooltip,
      onPressed: (_speakingBusy && _speakingKey != key) || text.trim().isEmpty
          ? null
          : () => _speakText(text: text, langCode: langCode, key: key),
      icon: _speakingBusy && _speakingKey == key
          ? SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: color))
          : Icon(active ? Icons.stop_circle_outlined : Icons.volume_up_rounded, color: color, size: 22),
    );
  }

  Future<void> _learnWord({
    required String word,
    required String sentence,
    required String wordLangCode,
    required String explainLangCode,
  }) async {
    if (_wordBusy || word.trim().isEmpty) return;
    setState(() {
      _wordBusy = true;
      _wordLesson = null;
      _wordLessonTitle = word;
    });

    var apiKey = widget.geminiApiKey.trim();
    if (apiKey.isEmpty) apiKey = (await widget.refreshApiKey()).trim();
    if (apiKey.isEmpty) {
      if (!mounted) return;
      setState(() {
        _wordBusy = false;
        _wordLesson = 'AI is not connected. Ask admin to save an API key.';
      });
      return;
    }

    final creds = ngmyParseAiCredentials(apiKey);
    final result = await ngmyAiGenerateWithCredentials(
      creds,
      _wordLessonPrompt(
        word: word,
        sentence: sentence,
        wordLangCode: wordLangCode,
        explainLangCode: explainLangCode,
      ),
    );

    if (!mounted) return;
    setState(() {
      _wordBusy = false;
      _wordLesson = (result.text != null && result.text!.trim().isNotEmpty)
          ? result.text!.trim()
          : (result.error ?? 'Could not load word lesson. Try again.');
    });
  }

  Widget _clickableSentence({
    required String text,
    required String wordLangCode,
    required String explainLangCode,
    required Color accent,
    String caption = 'Tap any word to learn it',
  }) {
    final re = RegExp(r"[\w\u00C0-\u024F\u0400-\u04FF\u0600-\u06FF\u0900-\u097F']+");
    final spans = <InlineSpan>[];
    var last = 0;
    for (final m in re.allMatches(text)) {
      if (m.start > last) {
        spans.add(TextSpan(text: text.substring(last, m.start)));
      }
      final word = m.group(0) ?? '';
      spans.add(
        WidgetSpan(
          alignment: PlaceholderAlignment.baseline,
          baseline: TextBaseline.alphabetic,
          child: GestureDetector(
            onTap: () => _learnWord(
              word: word,
              sentence: text,
              wordLangCode: wordLangCode,
              explainLangCode: explainLangCode,
            ),
            child: Container(
              margin: const EdgeInsets.symmetric(horizontal: 1, vertical: 1),
              padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 2),
              decoration: BoxDecoration(
                color: accent.withValues(alpha: 0.18),
                borderRadius: BorderRadius.circular(6),
                border: Border.all(color: accent.withValues(alpha: 0.35)),
              ),
              child: Text(word, style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 15)),
            ),
          ),
        ),
      );
      last = m.end;
    }
    if (last < text.length) {
      spans.add(TextSpan(text: text.substring(last)));
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        if (caption.isNotEmpty) ...[
          Text(caption, style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w700)),
          const SizedBox(height: 8),
        ],
        RichText(
          text: TextSpan(
            style: const TextStyle(color: Colors.white, fontSize: 15, height: 1.55, fontWeight: FontWeight.w500),
            children: spans,
          ),
        ),
      ],
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
                  NgmyLangFlagBadge(langCode: code, height: 22),
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
                    if (_remainingFree != null && !NgmyTranslatePayments.isUnlimitedRemaining(_remainingFree!))
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
                        onChanged: (_) => setState(() {}),
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
                      if (_lastSourceText != null && _output != null) ...[
                        const SizedBox(height: 16),
                        Container(
                          padding: const EdgeInsets.all(14),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(16),
                            color: Colors.white.withValues(alpha: 0.06),
                            border: Border.all(color: Colors.white12),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              Row(
                                children: [
                                  Text(
                                    'Original ($fromLabel) — tap a word',
                                    style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w700),
                                  ),
                                  const Spacer(),
                                  _speakButton(
                                    text: _lastSourceText!,
                                    langCode: _replyMode ? _myLang : _theirLang,
                                    key: 'source',
                                    color: _cyan,
                                    tooltip: 'Listen to original',
                                  ),
                                ],
                              ),
                              const SizedBox(height: 8),
                              _clickableSentence(
                                text: _lastSourceText!,
                                wordLangCode: _replyMode ? _myLang : _theirLang,
                                explainLangCode: _replyMode ? _theirLang : _myLang,
                                accent: _cyan,
                                caption: '',
                              ),
                            ],
                          ),
                        ),
                      ],
                      if (_output != null) ...[
                        const SizedBox(height: 14),
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
                                      _speakButton(
                                        text: _output!,
                                        langCode: _replyMode ? _theirLang : _myLang,
                                        key: 'translation',
                                        color: _mint,
                                        tooltip: 'Listen to translation',
                                      ),
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
                                  _clickableSentence(
                                    text: _output!,
                                    wordLangCode: _replyMode ? _theirLang : _myLang,
                                    explainLangCode: _replyMode ? _myLang : _theirLang,
                                    accent: _mint,
                                    caption: 'Translation — tap a word to learn it',
                                  ),
                                  const SizedBox(height: 10),
                                  Text(
                                    'Tap speaker to hear · tap a word to learn · or copy the full message',
                                    textAlign: TextAlign.center,
                                    style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                      if (_wordBusy || _wordLesson != null) ...[
                        const SizedBox(height: 14),
                        Container(
                          padding: const EdgeInsets.all(14),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(16),
                            color: _violet.withValues(alpha: 0.14),
                            border: Border.all(color: _violet.withValues(alpha: 0.45)),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Expanded(
                                    child: Text(
                                      _wordLessonTitle != null ? 'Word: $_wordLessonTitle' : 'Word lesson',
                                      style: const TextStyle(color: _violet, fontWeight: FontWeight.w900, fontSize: 13),
                                    ),
                                  ),
                                  if (_wordLesson != null)
                                    IconButton(
                                      visualDensity: VisualDensity.compact,
                                      onPressed: () => setState(() {
                                        _wordLesson = null;
                                        _wordLessonTitle = null;
                                      }),
                                      icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 20),
                                    ),
                                ],
                              ),
                              const SizedBox(height: 8),
                              if (_wordBusy)
                                const Center(child: Padding(padding: EdgeInsets.all(12), child: CircularProgressIndicator(strokeWidth: 2, color: _violet)))
                              else if (_wordLesson != null)
                                SelectableText(
                                  _wordLesson!,
                                  style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.5),
                                ),
                            ],
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
