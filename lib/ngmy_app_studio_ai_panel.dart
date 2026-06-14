import 'package:flutter/material.dart';

import 'ngmy_app_builder_ai.dart';
import 'ngmy_app_builder_ai_usage.dart';
import 'ngmy_app_builder_copilot_storage.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';

/// Inline AI assistant panel — matches App Studio dashboard styling.
class NgmyAppStudioAiPanel extends StatefulWidget {
  const NgmyAppStudioAiPanel({
    super.key,
    required this.project,
    required this.apiKey,
    required this.email,
    required this.config,
    required this.user,
    required this.isAdmin,
    required this.onProjectUpdated,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
    this.compact = false,
  });

  final NgmyAppProject? project;
  final String apiKey;
  final String email;
  final dynamic config;
  final dynamic user;
  final bool isAdmin;
  final ValueChanged<NgmyAppProject> onProjectUpdated;
  final Future<bool> Function(double amount, String description)? onChargeWallet;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;
  final bool compact;

  @override
  State<NgmyAppStudioAiPanel> createState() => _NgmyAppStudioAiPanelState();
}

class _NgmyAppStudioAiPanelState extends State<NgmyAppStudioAiPanel> {
  final _inputC = TextEditingController();
  final _scrollC = ScrollController();
  final List<Map<String, String>> _messages = [];
  NgmyAppProject? _project;
  bool _busy = false;
  int _promptsRemaining = -1;

  static const _hints = [
    'Build a store with cart and checkout',
    'Create an invoice app with payment QR',
    'Make a fitness tracker with progress charts',
    'Add a dark profile screen to my app',
  ];

  @override
  void initState() {
    super.initState();
    _project = widget.project;
    _loadMemory();
    _refreshUsage();
  }

  @override
  void didUpdateWidget(covariant NgmyAppStudioAiPanel oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.project?.id != widget.project?.id) {
      _project = widget.project;
    }
  }

  Future<void> _refreshUsage() async {
    final left = await NgmyAppBuilderAiUsage.promptsRemaining(
      widget.config,
      widget.email,
      isAdmin: widget.isAdmin,
    );
    if (mounted) setState(() => _promptsRemaining = left);
  }

  Future<bool> _ensureAiAccess({required bool isNewAppRequest}) => NgmyAppBuilderAiUsage.ensureAccess(
        context: context,
        config: widget.config,
        email: widget.email,
        isNewAppRequest: isNewAppRequest,
        isAdmin: widget.isAdmin,
        user: widget.user,
        onCharge: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        onPersistConfig: widget.onPersistConfig,
      );

  Future<void> _loadMemory() async {
    final stored = await NgmyAppBuilderCopilotMemoryStore.load(
      widget.email,
      projectId: _project?.id,
    );
    if (!mounted) return;
    if (stored.isNotEmpty) {
      setState(() => _messages.addAll(stored));
      return;
    }
    setState(() {
      if (_project == null) {
        _messages.add({
          'role': 'ai',
          'text': 'Hi! I\'m NGMY AI — describe any app and I\'ll build working screens, forms, and menus for your canvas.',
        });
      } else {
        _messages.add({
          'role': 'ai',
          'text': 'I have "${_project!.name}" loaded. Tell me what to add, change, or redesign.',
        });
      }
    });
    await _persistMemory();
  }

  Future<void> _persistMemory() async {
    await NgmyAppBuilderCopilotMemoryStore.save(
      widget.email,
      projectId: _project?.id,
      messages: _messages,
    );
  }

  @override
  void dispose() {
    _inputC.dispose();
    _scrollC.dispose();
    super.dispose();
  }

  Future<void> _send([String? preset]) async {
    final text = (preset ?? _inputC.text).trim();
    if (text.isEmpty || _busy) return;
    final isNewApp = widget.project == null && _project == null;
    if (!await _ensureAiAccess(isNewAppRequest: isNewApp)) return;
    _inputC.clear();
    setState(() {
      _messages.add({'role': 'user', 'text': text});
      _busy = true;
    });
    await _persistMemory();
    final hadProjectBefore = _project != null;
    final result = await ngmyAppBuilderAiCopilot(
      apiKey: widget.apiKey,
      userMessage: text,
      project: _project,
      ownerEmail: widget.email,
      history: _messages,
    );
    if (!mounted) return;
    var savedProject = false;
    setState(() {
      _messages.add({'role': 'ai', 'text': result.message});
      if (result.updatedProject != null) {
        final base = result.updatedProject!;
        _project = NgmyAppProject(
          id: _project?.id ?? base.id,
          name: base.name,
          tagline: base.tagline,
          ownerEmail: widget.email,
          themeColor: base.themeColor,
          screens: base.screens,
          status: _project?.status ?? base.status,
          createdAt: _project?.createdAt ?? base.createdAt,
          updatedAt: base.updatedAt,
          slug: _project?.slug ?? base.slug,
          publicUrl: _project?.publicUrl ?? base.publicUrl,
          seoDescription: base.seoDescription,
          database: base.database,
          customCode: base.customCode,
          appIcon: base.appIcon,
          shell: base.shell.isNotEmpty ? base.shell : (_project?.shell ?? const {}),
          publishedAt: _project?.publishedAt,
          reviewNote: _project?.reviewNote,
        );
        savedProject = true;
      }
      _busy = false;
    });
    if (savedProject && _project != null) {
      await ngmySaveUserAppProject(widget.email, _project!);
      if (!hadProjectBefore) {
        await NgmyAppBuilderAiUsage.markAiCreatedApp(widget.email, _project!.id);
      }
      widget.onProjectUpdated(_project!);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('"${_project!.name}" updated on canvas (${_project!.screens.length} screens).'),
            behavior: SnackBarBehavior.floating,
          ),
        );
      }
    }
    if (!widget.isAdmin) {
      await NgmyAppBuilderAiUsage.recordPrompt(widget.email);
    }
    await _refreshUsage();
    await _persistMemory();
    await Future<void>.delayed(const Duration(milliseconds: 50));
    if (_scrollC.hasClients) _scrollC.jumpTo(_scrollC.position.maxScrollExtent);
  }

  void _applyToCanvas() {
    if (_project == null) return;
    widget.onProjectUpdated(_project!);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('"${_project!.name}" applied to canvas.'), behavior: SnackBarBehavior.floating),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF111827),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: EdgeInsets.fromLTRB(widget.compact ? 12 : 20, 12, widget.compact ? 12 : 20, 8),
            decoration: BoxDecoration(
              border: Border(bottom: BorderSide(color: Colors.white.withValues(alpha: 0.06))),
            ),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: const Color(0xFF2563EB).withValues(alpha: 0.2),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: const Icon(Icons.auto_awesome_rounded, color: Color(0xFF60A5FA), size: 20),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'NGMY AI Assistant',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          fontSize: widget.compact ? 15 : 17,
                        ),
                      ),
                      Text(
                        _project?.name ?? 'New app from prompt',
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11),
                      ),
                    ],
                  ),
                ),
                if (_project != null)
                  TextButton(
                    onPressed: _applyToCanvas,
                    child: const Text('Use on canvas', style: TextStyle(fontWeight: FontWeight.w800, color: Color(0xFF60A5FA))),
                  ),
              ],
            ),
          ),
          if (_promptsRemaining >= 0)
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: Text(
                '$_promptsRemaining free AI prompts left',
                style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.55)),
              ),
            ),
          if (_project != null)
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 6, 16, 0),
              child: Text(
                '${_project!.screens.length} screens · ${_project!.name}',
                style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: Color(0xFF34D399)),
              ),
            ),
          Expanded(
            child: ListView.builder(
              controller: _scrollC,
              padding: EdgeInsets.all(widget.compact ? 12 : 16),
              itemCount: _messages.length,
              itemBuilder: (_, i) {
                final m = _messages[i];
                final isUser = m['role'] == 'user';
                return Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    mainAxisAlignment: isUser ? MainAxisAlignment.end : MainAxisAlignment.start,
                    children: [
                      if (!isUser) ...[
                        CircleAvatar(
                          radius: 14,
                          backgroundColor: const Color(0xFF2563EB).withValues(alpha: 0.25),
                          child: const Icon(Icons.auto_awesome_rounded, size: 14, color: Color(0xFF60A5FA)),
                        ),
                        const SizedBox(width: 8),
                      ],
                      Flexible(
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                          decoration: BoxDecoration(
                            color: isUser ? const Color(0xFF2563EB) : const Color(0xFF1F2937),
                            borderRadius: BorderRadius.only(
                              topLeft: const Radius.circular(14),
                              topRight: const Radius.circular(14),
                              bottomLeft: Radius.circular(isUser ? 14 : 4),
                              bottomRight: Radius.circular(isUser ? 4 : 14),
                            ),
                            border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                          ),
                          child: Text(
                            m['text'] ?? '',
                            style: TextStyle(color: isUser ? Colors.white : Colors.white.withValues(alpha: 0.9), height: 1.35, fontSize: widget.compact ? 13 : 14),
                          ),
                        ),
                      ),
                      if (isUser) ...[
                        const SizedBox(width: 8),
                        CircleAvatar(
                          radius: 14,
                          backgroundColor: const Color(0xFF6366F1).withValues(alpha: 0.25),
                          child: const Icon(Icons.person_rounded, size: 14, color: Color(0xFF818CF8)),
                        ),
                      ],
                    ],
                  ),
                );
              },
            ),
          ),
          if (_busy) const LinearProgressIndicator(minHeight: 2, color: Color(0xFF2563EB)),
          SizedBox(
            height: 40,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              children: _hints.map((h) {
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: ActionChip(
                    backgroundColor: const Color(0xFF1F2937),
                    labelStyle: TextStyle(fontSize: widget.compact ? 10 : 11, color: Colors.white.withValues(alpha: 0.85)),
                    label: Text(h, maxLines: 1, overflow: TextOverflow.ellipsis),
                    onPressed: _busy ? null : () => _send(h),
                  ),
                );
              }).toList(),
            ),
          ),
          Padding(
            padding: EdgeInsets.fromLTRB(12, 4, 12, widget.compact ? 10 : 14),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                color: const Color(0xFF1F2937),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: Colors.white.withValues(alpha: 0.1)),
              ),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _inputC,
                      minLines: 1,
                      maxLines: 3,
                      style: const TextStyle(color: Colors.white, fontSize: 14),
                      decoration: InputDecoration(
                        hintText: 'Describe your app or changes…',
                        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 13),
                        border: InputBorder.none,
                        contentPadding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
                      ),
                      onSubmitted: (_) => _send(),
                    ),
                  ),
                  IconButton.filled(
                    style: IconButton.styleFrom(backgroundColor: const Color(0xFF2563EB), minimumSize: const Size(40, 40)),
                    onPressed: _busy ? null : () => _send(),
                    icon: const Icon(Icons.send_rounded, size: 18),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
