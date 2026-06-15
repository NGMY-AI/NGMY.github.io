import 'package:flutter/material.dart';

import 'ngmy_app_builder_ai.dart';
import 'ngmy_app_builder_ai_usage.dart';
import 'ngmy_app_builder_copilot_storage.dart';
import 'ngmy_app_builder_layout_utils.dart';
import 'ngmy_app_builder_models.dart';

/// Persistent AI chat for one widget — history saved to local storage.
class NgmyWidgetAiChatSheet extends StatefulWidget {
  const NgmyWidgetAiChatSheet({
    super.key,
    required this.widgetJson,
    required this.widgetIndex,
    required this.screen,
    required this.allScreens,
    required this.themeColor,
    required this.isDark,
    required this.apiKey,
    required this.email,
    this.projectId,
    this.config,
    this.user,
    this.isAdmin = false,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
    this.getScreen,
  });

  final Map<String, dynamic> widgetJson;
  final int widgetIndex;
  final NgmyAppScreen screen;
  final List<NgmyAppScreen> allScreens;
  final Color themeColor;
  final bool isDark;
  final String apiKey;
  final String email;
  final String? projectId;
  final dynamic config;
  final dynamic user;
  final bool isAdmin;
  final Future<bool> Function(double amount, String description)? onChargeWallet;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;
  final NgmyAppScreen Function()? getScreen;

  @override
  State<NgmyWidgetAiChatSheet> createState() => _NgmyWidgetAiChatSheetState();
}

class _NgmyWidgetAiChatSheetState extends State<NgmyWidgetAiChatSheet> {
  final _input = TextEditingController();
  final _scroll = ScrollController();
  final _messages = <Map<String, String>>[];
  bool _busy = false;
  late Map<String, dynamic> _widgetJson;

  String get _scope => NgmyAppBuilderCopilotMemoryStore.widgetScope(
        widget.projectId ?? 'draft',
        widget.screen.id,
        widget.widgetIndex,
      );

  @override
  void initState() {
    super.initState();
    _widgetJson = Map<String, dynamic>.from(widget.widgetJson);
    _loadHistory();
  }

  Future<void> _loadHistory() async {
    final h = await NgmyAppBuilderCopilotMemoryStore.loadScoped(widget.email, _scope);
    if (!mounted) return;
    setState(() {
      _messages
        ..clear()
        ..addAll(h);
      if (_messages.isEmpty) {
        final type = ngmyWidgetTypeLabel((_widgetJson['type'] ?? '').toString());
        _messages.add({
          'role': 'ai',
          'text': 'Hi! I remember our past chats about this $type widget. '
              'Ask me to change colors, text, design, invoice template, map behavior, QR settings — anything.',
        });
      }
    });
  }

  Future<void> _persist() async {
    await NgmyAppBuilderCopilotMemoryStore.saveScoped(widget.email, _scope, _messages);
  }

  Future<void> _send() async {
    final text = _input.text.trim();
    if (text.isEmpty || _busy) return;
    _input.clear();
    setState(() {
      _messages.add({'role': 'user', 'text': text});
      _busy = true;
    });
    await _persist();
    _scrollToEnd();

    if (!await NgmyAppBuilderAiUsage.ensureAccess(
      context: context,
      config: widget.config,
      email: widget.email,
      isNewAppRequest: false,
      isAdmin: widget.isAdmin,
      user: widget.user,
      onCharge: widget.onChargeWallet,
      onDataChanged: widget.onDataChanged,
      onPersistConfig: widget.onPersistConfig,
    )) {
      if (mounted) setState(() => _busy = false);
      return;
    }

    final result = await ngmyAppBuilderAiEditWidget(
      apiKey: widget.apiKey,
      screen: widget.getScreen?.call() ?? widget.screen,
      widgetIndex: widget.widgetIndex,
      widgetJson: _widgetJson,
      allScreens: widget.allScreens,
      userMessage: text,
      history: _messages.where((m) => m['role'] == 'user' || m['role'] == 'ai').toList(),
    );

    if (!mounted) return;
    if (!widget.isAdmin && widget.email.isNotEmpty) {
      await NgmyAppBuilderAiUsage.recordPrompt(widget.email);
    }

    final children = ngmyLayoutChildren(result.screen ?? widget.screen);
    if (widget.widgetIndex >= 0 && widget.widgetIndex < children.length) {
      _widgetJson = Map<String, dynamic>.from(children[widget.widgetIndex]);
    }

    setState(() {
      _messages.add({'role': 'ai', 'text': result.message});
      _busy = false;
    });
    await _persist();
    _scrollToEnd();
  }

  void _scrollToEnd() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scroll.hasClients) {
        _scroll.animateTo(_scroll.position.maxScrollExtent, duration: const Duration(milliseconds: 250), curve: Curves.easeOut);
      }
    });
  }

  @override
  void dispose() {
    _input.dispose();
    _scroll.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final typeLabel = ngmyWidgetTypeLabel((_widgetJson['type'] ?? '').toString());
    final bg = widget.isDark ? const Color(0xFF1E293B) : Colors.white;
    final sub = widget.isDark ? Colors.white60 : Colors.black54;

    return Container(
      height: MediaQuery.sizeOf(context).height * 0.72,
      decoration: BoxDecoration(
        color: bg,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: Column(
        children: [
          const SizedBox(height: 10),
          Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade400, borderRadius: BorderRadius.circular(2))),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 8, 8),
            child: Row(
              children: [
                const Icon(Icons.auto_awesome_rounded, color: Color(0xFFF59E0B)),
                const SizedBox(width: 8),
                Expanded(child: Text('AI · $typeLabel', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: widget.isDark ? Colors.white : Colors.black87))),
                IconButton(
                  tooltip: 'Clear chat history',
                  onPressed: () async {
                    await NgmyAppBuilderCopilotMemoryStore.clearScoped(widget.email, _scope);
                    if (!mounted) return;
                    setState(() {
                      _messages.clear();
                      _messages.add({'role': 'ai', 'text': 'Chat cleared. What should I change in this widget?'});
                    });
                  },
                  icon: Icon(Icons.delete_sweep_outlined, color: sub, size: 20),
                ),
                IconButton(onPressed: () => Navigator.pop(context, _NgmyWidgetAiChatResult(updatedWidget: _widgetJson)), icon: Icon(Icons.close, color: sub)),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Text('Conversation saved on this device — Bolt remembers what you asked before.', style: TextStyle(fontSize: 11, color: sub)),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: ListView.builder(
              controller: _scroll,
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
              itemCount: _messages.length,
              itemBuilder: (_, i) {
                final m = _messages[i];
                final isUser = m['role'] == 'user';
                return Align(
                  alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.82),
                    decoration: BoxDecoration(
                      color: isUser ? const Color(0xFFF59E0B).withValues(alpha: widget.isDark ? 0.25 : 0.15) : (widget.isDark ? const Color(0xFF111827) : Colors.grey.shade100),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Text(m['text'] ?? '', style: TextStyle(color: widget.isDark ? Colors.white : Colors.black87, fontSize: 14)),
                  ),
                );
              },
            ),
          ),
          if (_busy)
            Padding(
              padding: const EdgeInsets.all(8),
              child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: widget.themeColor)), const SizedBox(width: 10), Text('Bolt is updating…', style: TextStyle(color: sub, fontSize: 12))]),
            ),
          Padding(
            padding: EdgeInsets.fromLTRB(12, 4, 12, 12 + MediaQuery.viewInsetsOf(context).bottom),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _input,
                    minLines: 1,
                    maxLines: 4,
                    decoration: InputDecoration(
                      hintText: 'Change colors, design, template, text…',
                      filled: true,
                      fillColor: widget.isDark ? const Color(0xFF111827) : Colors.grey.shade50,
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                      contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    ),
                    onSubmitted: (_) => _send(),
                  ),
                ),
                const SizedBox(width: 8),
                FilledButton(onPressed: _busy ? null : _send, style: FilledButton.styleFrom(backgroundColor: const Color(0xFFF59E0B), shape: const CircleBorder(), padding: const EdgeInsets.all(14)), child: const Icon(Icons.send_rounded)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _NgmyWidgetAiChatResult {
  const _NgmyWidgetAiChatResult({required this.updatedWidget, this.updatedScreen});
  final Map<String, dynamic> updatedWidget;
  final NgmyAppScreen? updatedScreen;
}

/// Opens persistent widget AI chat; returns updated widget JSON if changed.
Future<Map<String, dynamic>?> showNgmyWidgetAiChat({
  required BuildContext context,
  required Map<String, dynamic> widgetJson,
  required int widgetIndex,
  required NgmyAppScreen screen,
  required List<NgmyAppScreen> allScreens,
  required Color themeColor,
  required bool isDark,
  required String apiKey,
  required String email,
  String? projectId,
  dynamic config,
  dynamic user,
  bool isAdmin = false,
  Future<bool> Function(double amount, String description)? onChargeWallet,
  VoidCallback? onDataChanged,
  Future<bool> Function()? onPersistConfig,
  NgmyAppScreen Function()? getScreen,
}) async {
  final result = await showModalBottomSheet<_NgmyWidgetAiChatResult>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => NgmyWidgetAiChatSheet(
      widgetJson: widgetJson,
      widgetIndex: widgetIndex,
      screen: screen,
      allScreens: allScreens,
      themeColor: themeColor,
      isDark: isDark,
      apiKey: apiKey,
      email: email,
      projectId: projectId,
      config: config,
      user: user,
      isAdmin: isAdmin,
      onChargeWallet: onChargeWallet,
      onDataChanged: onDataChanged,
      onPersistConfig: onPersistConfig,
      getScreen: getScreen,
    ),
  );
  return result?.updatedWidget;
}
