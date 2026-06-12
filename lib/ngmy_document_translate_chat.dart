import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_modern_chat_prefix.dart';

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

/// Paste foreign messages → read in your language. Write your reply → copy in their language.
Future<void> showNgmyDocumentTranslateChat(
  BuildContext context, {
  required String geminiApiKey,
  required Future<String> Function() refreshApiKey,
  String initialMyLanguage = 'en',
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyDocumentTranslateSheet(
      geminiApiKey: geminiApiKey,
      refreshApiKey: refreshApiKey,
      initialMyLanguage: initialMyLanguage,
    ),
  );
}

class _NgmyDocumentTranslateSheet extends StatefulWidget {
  const _NgmyDocumentTranslateSheet({
    required this.geminiApiKey,
    required this.refreshApiKey,
    required this.initialMyLanguage,
  });

  final String geminiApiKey;
  final Future<String> Function() refreshApiKey;
  final String initialMyLanguage;

  @override
  State<_NgmyDocumentTranslateSheet> createState() => _NgmyDocumentTranslateSheetState();
}

class _NgmyDocumentTranslateSheetState extends State<_NgmyDocumentTranslateSheet> {
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

  @override
  void initState() {
    super.initState();
    _myLang = widget.initialMyLanguage == 'sw' ? 'sw' : 'en';
    _theirLang = _myLang == 'en' ? 'sw' : 'en';
  }

  @override
  void dispose() {
    _inputC.dispose();
    super.dispose();
  }

  void _setMyLang(String code) {
    setState(() {
      _myLang = code;
      _theirLang = code == 'en' ? 'sw' : 'en';
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
    setState(() {
      _busy = false;
      if (result.text != null && result.text!.trim().isNotEmpty) {
        _output = result.text!.trim();
      } else {
        _error = result.error ?? 'Could not translate. Try again.';
      }
    });
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

  Widget _langChip(String code, bool selected, VoidCallback onTap) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            color: selected ? _violet.withValues(alpha: 0.35) : Colors.white.withValues(alpha: 0.06),
            border: Border.all(color: selected ? _cyan.withValues(alpha: 0.7) : Colors.white24),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(ngmyLangFlag(code), style: const TextStyle(fontSize: 18)),
              const SizedBox(width: 6),
              Text(
                ngmyLangLabel(code),
                style: TextStyle(
                  color: selected ? Colors.white : Colors.white70,
                  fontWeight: FontWeight.w800,
                  fontSize: 12,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    final fromLabel = _replyMode ? ngmyLangLabel(_myLang) : ngmyLangLabel(_theirLang);
    final toLabel = _replyMode ? ngmyLangLabel(_theirLang) : ngmyLangLabel(_myLang);

    return Padding(
      padding: EdgeInsets.only(bottom: bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.92),
        margin: const EdgeInsets.fromLTRB(12, 0, 12, 14),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(24),
          gradient: const LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF0F172A), Color(0xFF1E1B4B), Color(0xFF134E4A)],
          ),
          border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 24, offset: const Offset(0, 12))],
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const SizedBox(height: 10),
            Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(4))),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 8, 0),
              child: Row(
                children: [
                  const NgmyModernChatPrefixIcon(size: 28),
                  const SizedBox(width: 10),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Message translator', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                        Text('Paste chats · copy replies', style: TextStyle(color: Colors.white60, fontSize: 11)),
                      ],
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: const Icon(Icons.close_rounded, color: Colors.white70),
                  ),
                ],
              ),
            ),
            Flexible(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(16, 12, 16, 18),
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
                        const SizedBox(width: 8),
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
                    const SizedBox(height: 14),
                    Text('I understand', style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontWeight: FontWeight.w800, fontSize: 11)),
                    const SizedBox(height: 6),
                    Row(
                      children: [
                        _langChip('en', _myLang == 'en', () => _setMyLang('en')),
                        const SizedBox(width: 8),
                        _langChip('sw', _myLang == 'sw', () => _setMyLang('sw')),
                        const Spacer(),
                        IconButton(
                          tooltip: 'Swap languages',
                          onPressed: _swapLanguages,
                          icon: const Icon(Icons.swap_horiz_rounded, color: _cyan),
                        ),
                      ],
                    ),
                    const SizedBox(height: 6),
                    Text(
                      'Other person speaks: ${ngmyLangLabel(_theirLang)}',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
                    ),
                    const SizedBox(height: 12),
                    TextField(
                      controller: _inputC,
                      maxLines: 4,
                      minLines: 3,
                      style: const TextStyle(color: Colors.white, fontSize: 14),
                      decoration: InputDecoration(
                        hintText: _replyMode
                            ? 'Type your reply in ${ngmyLangLabel(_myLang)}…'
                            : 'Paste their message in ${ngmyLangLabel(_theirLang)}…',
                        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 13),
                        filled: true,
                        fillColor: Colors.white.withValues(alpha: 0.06),
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                      ),
                    ),
                    const SizedBox(height: 10),
                    FilledButton.icon(
                      onPressed: _busy ? null : _translate,
                      icon: _busy
                          ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Icon(Icons.translate_rounded, size: 20),
                      label: Text(_busy ? 'Translating…' : 'Translate ($fromLabel → $toLabel)'),
                      style: FilledButton.styleFrom(
                        backgroundColor: _violet,
                        minimumSize: const Size(double.infinity, 46),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                    ),
                    if (_error != null) ...[
                      const SizedBox(height: 10),
                      Text(_error!, style: const TextStyle(color: Color(0xFFF87171), fontSize: 12)),
                    ],
                    if (_output != null) ...[
                      const SizedBox(height: 14),
                      Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: () => _copy(_output!),
                          borderRadius: BorderRadius.circular(16),
                          child: Ink(
                            padding: const EdgeInsets.all(14),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(16),
                              color: _mint.withValues(alpha: 0.12),
                              border: Border.all(color: _mint.withValues(alpha: 0.45)),
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Row(
                                  children: [
                                    Text(
                                      'In $toLabel',
                                      style: const TextStyle(color: _mint, fontWeight: FontWeight.w800, fontSize: 11),
                                    ),
                                    const Spacer(),
                                    IconButton(
                                      visualDensity: VisualDensity.compact,
                                      padding: EdgeInsets.zero,
                                      constraints: const BoxConstraints(minWidth: 32, minHeight: 32),
                                      tooltip: 'Copy',
                                      onPressed: () => _copy(_output!),
                                      icon: const Icon(Icons.copy_rounded, color: _mint, size: 20),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 6),
                                SelectableText(
                                  _output!,
                                  style: const TextStyle(color: Colors.white, fontSize: 15, height: 1.45, fontWeight: FontWeight.w600),
                                ),
                                const SizedBox(height: 8),
                                Text(
                                  'Tap message or copy icon to copy · paste in your chat app',
                                  style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10),
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
        borderRadius: BorderRadius.circular(14),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            color: selected ? _cyan.withValues(alpha: 0.18) : Colors.white.withValues(alpha: 0.04),
            border: Border.all(color: selected ? _cyan.withValues(alpha: 0.55) : Colors.white12),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(icon, size: 16, color: selected ? _cyan : Colors.white54),
                  const SizedBox(width: 6),
                  Text(label, style: TextStyle(color: selected ? Colors.white : Colors.white70, fontWeight: FontWeight.w900, fontSize: 12)),
                ],
              ),
              const SizedBox(height: 2),
              Text(sub, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 9, height: 1.2)),
            ],
          ),
        ),
      ),
    );
  }
}
