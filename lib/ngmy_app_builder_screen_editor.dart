import 'package:flutter/material.dart';

import 'ngmy_app_builder_ai.dart';
import 'ngmy_app_builder_ai_usage.dart';
import 'ngmy_app_builder_runtime.dart';
import 'ngmy_app_builder_layout_utils.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_studio_shell.dart';

/// Full-screen studio for editing one app screen — widgets, wiring, drag reorder.
class NgmyAppScreenEditorPage extends StatefulWidget {
  const NgmyAppScreenEditorPage({
    super.key,
    required this.screen,
    required this.allScreens,
    required this.themeColor,
    this.screenIndex = 0,
    this.apiKey = '',
    this.email = '',
    this.config,
    this.user,
    this.isAdmin = false,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
  });

  final NgmyAppScreen screen;
  final List<NgmyAppScreen> allScreens;
  final Color themeColor;
  final int screenIndex;
  final String apiKey;
  final String email;
  final dynamic config;
  final dynamic user;
  final bool isAdmin;
  final Future<bool> Function(double amount, String description)? onChargeWallet;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

  @override
  State<NgmyAppScreenEditorPage> createState() => _NgmyAppScreenEditorPageState();
}

class _NgmyAppScreenEditorPageState extends State<NgmyAppScreenEditorPage> {
  late TextEditingController _titleCtrl;
  late NgmyAppScreen _screen;
  late List<Map<String, dynamic>> _widgets;

  @override
  void initState() {
    super.initState();
    _screen = ngmyScreenEnsureEditable(widget.screen);
    _titleCtrl = TextEditingController(text: _screen.title);
    _widgets = ngmyLayoutChildren(_screen);
  }

  @override
  void dispose() {
    _titleCtrl.dispose();
    super.dispose();
  }

  NgmyAppScreen _buildResult() {
    var s = _screen.copyWith(title: _titleCtrl.text.trim().isEmpty ? 'Screen' : _titleCtrl.text.trim());
    s = ngmyScreenWithLayoutChildren(s, _widgets);
    return s;
  }

  void _saveAndPop() => Navigator.pop(context, _buildResult());

  void _insertWidget(String type, {int? atIndex}) {
    setState(() {
      final w = ngmyNewWidget(type, screens: widget.allScreens);
      if (atIndex != null && atIndex >= 0 && atIndex <= _widgets.length) {
        _widgets.insert(atIndex, w);
      } else {
        _widgets.add(w);
      }
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Added ${ngmyWidgetTypeLabel(type)}'), behavior: SnackBarBehavior.floating, duration: const Duration(seconds: 2)),
    );
  }

  void _addWidget(String type) => _insertWidget(type);

  void _openAddPalette() {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _AddWidgetSheet(themeColor: widget.themeColor, onAdd: (t) {
        Navigator.pop(ctx);
        _addWidget(t);
      }),
    );
  }

  Future<void> _editWidget(int index) async {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final updated = await showModalBottomSheet<Map<String, dynamic>>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _WidgetEditorSheet(
        widget: _widgets[index],
        widgetIndex: index,
        screens: widget.allScreens,
        themeColor: widget.themeColor,
        isDark: isDark,
        apiKey: widget.apiKey,
        screen: _buildResult(),
        email: widget.email,
        config: widget.config,
        user: widget.user,
        isAdmin: widget.isAdmin,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        onPersistConfig: widget.onPersistConfig,
      ),
    );
    if (updated != null && mounted) {
      setState(() => _widgets[index] = updated);
    }
  }

  Future<void> _askAi() async {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ctrl = TextEditingController();
    final request = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: Container(
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF1E293B) : Colors.white,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('Ask Bolt AI', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: isDark ? Colors.white : Colors.black87)),
              const SizedBox(height: 6),
              Text(
                'Describe how buttons should work, what text should say, or how this screen should look.',
                style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : Colors.black54),
              ),
              const SizedBox(height: 14),
              TextField(
                controller: ctrl,
                autofocus: true,
                maxLines: 4,
                decoration: InputDecoration(
                  hintText: 'e.g. Add a big Checkout button that goes to cart and make the title say Welcome',
                  filled: true,
                  fillColor: isDark ? const Color(0xFF111827) : Colors.grey.shade50,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                ),
              ),
              const SizedBox(height: 14),
              FilledButton.icon(
                onPressed: () => Navigator.pop(ctx, ctrl.text.trim()),
                icon: const Icon(Icons.auto_awesome_rounded),
                label: const Text('Update screen with AI'),
                style: FilledButton.styleFrom(backgroundColor: widget.themeColor, minimumSize: const Size(double.infinity, 48)),
              ),
            ],
          ),
        ),
      ),
    );
    ctrl.dispose();
    if (request == null || request.isEmpty || !mounted) return;

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
      return;
    }

    showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        content: Row(
          children: [
            CircularProgressIndicator(color: widget.themeColor),
            const SizedBox(width: 16),
            Expanded(child: Text('Bolt is updating your screen…', style: TextStyle(color: isDark ? Colors.white : Colors.black87))),
          ],
        ),
      ),
    );

    final result = await ngmyAppBuilderAiEditScreen(
      apiKey: widget.apiKey,
      screen: _buildResult(),
      allScreens: widget.allScreens,
      userMessage: request,
    );

    if (!mounted) return;
    Navigator.pop(context);

    if (!widget.isAdmin && widget.email.isNotEmpty) {
      await NgmyAppBuilderAiUsage.recordPrompt(widget.email);
    }

    if (result.screen != null) {
      final s = ngmyScreenEnsureEditable(result.screen!);
      setState(() {
        _screen = s;
        _titleCtrl.text = s.title;
        _widgets = ngmyLayoutChildren(s);
      });
    }

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(result.message), behavior: SnackBarBehavior.floating, duration: const Duration(seconds: 4)),
    );
  }

  Future<void> _askAiForWidgetAt(int index) async {
    if (index < 0 || index >= _widgets.length) return;
    final w = _widgets[index];
    final typeLabel = ngmyWidgetTypeLabel((w['type'] ?? '').toString());
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ctrl = TextEditingController();
    final request = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: Container(
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF1E293B) : Colors.white,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  const Icon(Icons.auto_awesome_rounded, color: Color(0xFFF59E0B)),
                  const SizedBox(width: 8),
                  Expanded(child: Text('Ask AI — $typeLabel', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: isDark ? Colors.white : Colors.black87))),
                ],
              ),
              const SizedBox(height: 6),
              Text(
                'Tell Bolt exactly what to change in this widget only — text, colors, links, buttons, fields, anything.',
                style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : Colors.black54),
              ),
              const SizedBox(height: 14),
              TextField(
                controller: ctrl,
                autofocus: true,
                maxLines: 4,
                decoration: InputDecoration(
                  hintText: 'e.g. Change the button label to Buy Now and open the checkout screen',
                  filled: true,
                  fillColor: isDark ? const Color(0xFF111827) : Colors.grey.shade50,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                ),
              ),
              const SizedBox(height: 14),
              FilledButton.icon(
                onPressed: () => Navigator.pop(ctx, ctrl.text.trim()),
                icon: const Icon(Icons.auto_awesome_rounded),
                label: const Text('Update this widget'),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFFF59E0B), minimumSize: const Size(double.infinity, 48)),
              ),
            ],
          ),
        ),
      ),
    );
    ctrl.dispose();
    if (request == null || request.isEmpty || !mounted) return;

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
      return;
    }

    showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        content: Row(
          children: [
            const CircularProgressIndicator(color: Color(0xFFF59E0B)),
            const SizedBox(width: 16),
            Expanded(child: Text('Bolt is updating this widget…', style: TextStyle(color: isDark ? Colors.white : Colors.black87))),
          ],
        ),
      ),
    );

    final result = await ngmyAppBuilderAiEditWidget(
      apiKey: widget.apiKey,
      screen: _buildResult(),
      widgetIndex: index,
      widgetJson: w,
      allScreens: widget.allScreens,
      userMessage: request,
    );

    if (!mounted) return;
    Navigator.pop(context);

    if (!widget.isAdmin && widget.email.isNotEmpty) {
      await NgmyAppBuilderAiUsage.recordPrompt(widget.email);
    }

    if (result.screen != null) {
      final children = ngmyLayoutChildren(result.screen!);
      if (index >= 0 && index < children.length) {
        setState(() => _widgets[index] = Map<String, dynamic>.from(children[index]));
      }
    }

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(result.message), behavior: SnackBarBehavior.floating, duration: const Duration(seconds: 4)),
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = widget.themeColor;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF07080F) : const Color(0xFFE8EDF5);
    final subText = isDark ? Colors.white60 : Colors.grey.shade600;
    final titleText = isDark ? Colors.white : Colors.grey.shade800;
    final fieldFill = isDark ? const Color(0xFF111827) : Colors.grey.shade50;
    final narrow = MediaQuery.sizeOf(context).width < 520;
    final previewLayout = {
      'type': 'column',
      'children': _widgets,
    };

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: Column(
          children: [
            _EditorHeader(
              theme: theme,
              title: 'Drag & drop editor',
              subtitle: narrow ? 'Tap tools · drag ≡ to reorder' : 'Screen ${widget.screenIndex + 1} · drag ≡ to reorder · drop tools below',
              onBack: () => Navigator.pop(context),
              onDone: _saveAndPop,
            ),
            Expanded(
              child: NgmyAppStudioContentFrame(
                isDark: isDark,
                child: ListView(
                  padding: EdgeInsets.fromLTRB(12, 12, 12, narrow ? 180 : 140),
                  children: [
                    _SectionCard(
                      isDark: isDark,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Text('Live preview', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: subText)),
                              const Spacer(),
                              Text('${_widgets.length} widgets', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: theme)),
                            ],
                          ),
                          const SizedBox(height: 8),
                          Container(
                            constraints: BoxConstraints(
                              minHeight: 220,
                              maxHeight: MediaQuery.sizeOf(context).height * 0.42,
                            ),
                            decoration: BoxDecoration(
                              color: isDark ? const Color(0xFF111827) : Colors.white,
                              borderRadius: BorderRadius.circular(14),
                              border: Border.all(color: isDark ? Colors.white10 : Colors.grey.shade200),
                            ),
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(14),
                              child: _widgets.isEmpty
                                  ? Padding(
                                      padding: const EdgeInsets.all(24),
                                      child: Center(
                                        child: Text('Add widgets from the toolbar below', style: TextStyle(color: subText, fontSize: 13)),
                                      ),
                                    )
                                  : SingleChildScrollView(
                                      padding: const EdgeInsets.all(12),
                                      child: NgmyAppLayoutRenderer(
                                        layout: previewLayout,
                                        theme: theme,
                                        appId: 'editor_preview_${widget.screen.id}',
                                        isDarkMode: isDark,
                                        embedded: true,
                                        onNavigate: (_) {},
                                        onSnack: (m) => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(m))),
                                      ),
                                    ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10),
                    _WidgetToolStrip(
                      theme: theme,
                      isDark: isDark,
                      onAdd: _addWidget,
                    ),
                    const SizedBox(height: 10),
                    _SectionCard(
                      isDark: isDark,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Screen name', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: subText)),
                          const SizedBox(height: 8),
                          TextField(
                            controller: _titleCtrl,
                            style: TextStyle(color: isDark ? Colors.white : Colors.black87),
                            decoration: InputDecoration(
                              hintText: 'e.g. Home, Cart, Profile',
                              filled: true,
                              fillColor: fieldFill,
                              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10),
                    Material(
                      color: const Color(0xFFF59E0B).withValues(alpha: isDark ? 0.15 : 0.1),
                      borderRadius: BorderRadius.circular(14),
                      child: InkWell(
                        onTap: _askAi,
                        borderRadius: BorderRadius.circular(14),
                        child: Padding(
                          padding: const EdgeInsets.all(14),
                          child: Row(
                            children: [
                              const Icon(Icons.auto_awesome_rounded, color: Color(0xFFF59E0B)),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text('Ask AI about this screen', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
                                    Text('Tell Bolt how buttons should work or how text should read', style: TextStyle(fontSize: 12, color: subText)),
                                  ],
                                ),
                              ),
                              Icon(Icons.chevron_right_rounded, color: subText),
                            ],
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        Text('Widgets on this screen', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: titleText)),
                        const Spacer(),
                        Text('${_widgets.length}', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: theme)),
                      ],
                    ),
                    const SizedBox(height: 8),
                    if (_widgets.isEmpty)
                      DragTarget<String>(
                        onAcceptWithDetails: (d) => _insertWidget(d.data),
                        builder: (context, candidates, rejected) {
                          final hover = candidates.isNotEmpty;
                          return _SectionCard(
                            isDark: isDark,
                            child: Container(
                              padding: const EdgeInsets.all(20),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12),
                                border: Border.all(
                                  color: hover ? theme : (isDark ? Colors.white12 : Colors.grey.shade300),
                                  width: hover ? 2 : 1,
                                ),
                              ),
                              child: Column(
                                children: [
                                  Icon(Icons.touch_app_outlined, size: 40, color: hover ? theme : subText),
                                  const SizedBox(height: 8),
                                  Text(
                                    hover ? 'Drop to add widget' : 'No widgets yet',
                                    style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white : Colors.grey.shade700),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    'Tap a tool above or drag it here · or ask AI below.',
                                    style: TextStyle(fontSize: 13, color: subText),
                                    textAlign: TextAlign.center,
                                  ),
                                ],
                              ),
                            ),
                          );
                        },
                      )
                    else
                      DragTarget<String>(
                        onAcceptWithDetails: (d) => _insertWidget(d.data, atIndex: _widgets.length),
                        builder: (context, candidates, rejected) {
                          return Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              if (candidates.isNotEmpty)
                                Container(
                                  margin: const EdgeInsets.only(bottom: 8),
                                  padding: const EdgeInsets.all(12),
                                  decoration: BoxDecoration(
                                    color: theme.withValues(alpha: 0.12),
                                    borderRadius: BorderRadius.circular(12),
                                    border: Border.all(color: theme),
                                  ),
                                  child: Text('Drop here to add at bottom', style: TextStyle(color: theme, fontWeight: FontWeight.w700, fontSize: 12)),
                                ),
                              ReorderableListView.builder(
                                shrinkWrap: true,
                                physics: const NeverScrollableScrollPhysics(),
                                buildDefaultDragHandles: false,
                                onReorder: (o, n) {
                                  setState(() {
                                    if (n > o) n--;
                                    final item = _widgets.removeAt(o);
                                    _widgets.insert(n, item);
                                  });
                                },
                                itemCount: _widgets.length,
                                itemBuilder: (context, i) {
                                  final w = _widgets[i];
                                  final type = (w['type'] ?? 'text').toString();
                                  return _WidgetTile(
                                    key: ValueKey('w_${i}_${type}_${_widgets.length}'),
                                    index: i,
                                    type: type,
                                    label: _widgetSummary(w),
                                    theme: theme,
                                    isDark: isDark,
                                    onEdit: () => _editWidget(i),
                                    onAskAi: () => _askAiForWidgetAt(i),
                                    onDelete: () => setState(() => _widgets.removeAt(i)),
                                    onDropWidget: (dropType) => setState(() {
                                      _widgets.insert(i + 1, ngmyNewWidget(dropType, screens: widget.allScreens));
                                    }),
                                  );
                                },
                              ),
                            ],
                          );
                        },
                      ),
                    const SizedBox(height: 12),
                    _QuickWidgetChips(theme: theme, isDark: isDark, onAdd: _addWidget),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: narrow
          ? Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                FloatingActionButton(
                  heroTag: 'screen_ai',
                  onPressed: _askAi,
                  backgroundColor: const Color(0xFFF59E0B),
                  tooltip: 'Ask AI',
                  child: const Icon(Icons.auto_awesome_rounded),
                ),
                const SizedBox(height: 10),
                FloatingActionButton(
                  heroTag: 'screen_add',
                  onPressed: _openAddPalette,
                  backgroundColor: theme,
                  tooltip: 'Add widget',
                  child: const Icon(Icons.add),
                ),
              ],
            )
          : Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                FloatingActionButton.extended(
                  heroTag: 'screen_ai',
                  onPressed: _askAi,
                  backgroundColor: const Color(0xFFF59E0B),
                  icon: const Icon(Icons.auto_awesome_rounded),
                  label: const Text('Ask AI'),
                ),
                const SizedBox(height: 10),
                FloatingActionButton.extended(
                  heroTag: 'screen_add',
                  onPressed: _openAddPalette,
                  backgroundColor: theme,
                  icon: const Icon(Icons.add),
                  label: const Text('Add widget'),
                ),
              ],
            ),
    );
  }

  String _widgetSummary(Map<String, dynamic> w) {
    final type = (w['type'] ?? '').toString();
    switch (type) {
      case 'button':
      case 'outlined_button':
        final label = (w['label'] ?? 'Button').toString();
        final target = (w['target'] ?? w['targetScreenId'] ?? '').toString();
        final screen = widget.allScreens.where((s) => s.id == target).map((s) => s.title).firstOrNull;
        return '$label → ${screen ?? (target.isEmpty ? 'no target' : target)}';
      case 'form':
        return 'Form · saves to ${w['collection'] ?? 'entries'}';
      case 'dataList':
        return 'List · ${w['collection'] ?? 'entries'}';
      case 'menuGrid':
        final items = w['items'];
        final n = items is List ? items.length : 0;
        return 'Menu · $n items';
      case 'switch':
        return (w['label'] ?? 'Switch').toString();
      case 'hero':
        return (w['title'] ?? 'Hero').toString();
      case 'text':
        return (w['text'] ?? 'Text').toString();
      case 'stat':
        return 'Stat · ${w['collection'] ?? ''}';
      default:
        return ngmyWidgetTypeLabel(type);
    }
  }
}

class _EditorHeader extends StatelessWidget {
  const _EditorHeader({
    required this.theme,
    required this.title,
    required this.subtitle,
    required this.onBack,
    required this.onDone,
  });

  final Color theme;
  final String title;
  final String subtitle;
  final VoidCallback onBack;
  final VoidCallback onDone;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(8, 8, 12, 16),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [theme, theme.withValues(alpha: 0.85)]),
        borderRadius: const BorderRadius.vertical(bottom: Radius.circular(20)),
        boxShadow: [BoxShadow(color: theme.withValues(alpha: 0.25), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: Row(
        children: [
          IconButton(onPressed: onBack, icon: const Icon(Icons.arrow_back_ios_new, color: Colors.white, size: 20)),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800)),
                Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 12)),
              ],
            ),
          ),
          FilledButton(
            onPressed: onDone,
            style: FilledButton.styleFrom(backgroundColor: Colors.white, foregroundColor: theme, padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10)),
            child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
          ),
        ],
      ),
    );
  }
}

class _SectionCard extends StatelessWidget {
  const _SectionCard({required this.child, required this.isDark});
  final Widget child;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1E293B) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: isDark ? Colors.white10 : Colors.grey.shade200),
      ),
      child: child,
    );
  }
}

class _WidgetTile extends StatelessWidget {
  const _WidgetTile({
    super.key,
    required this.index,
    required this.type,
    required this.label,
    required this.theme,
    required this.isDark,
    required this.onEdit,
    required this.onAskAi,
    required this.onDelete,
    this.onDropWidget,
  });

  final int index;
  final String type;
  final String label;
  final Color theme;
  final bool isDark;
  final VoidCallback onEdit;
  final VoidCallback onAskAi;
  final VoidCallback onDelete;
  final void Function(String type)? onDropWidget;

  IconData get _icon {
    switch (type) {
      case 'button':
      case 'outlined_button':
        return Icons.smart_button_outlined;
      case 'form':
        return Icons.edit_note_outlined;
      case 'dataList':
        return Icons.list_alt;
      case 'menuGrid':
        return Icons.grid_view_rounded;
      case 'switch':
        return Icons.toggle_on_outlined;
      case 'hero':
        return Icons.view_carousel_outlined;
      case 'stat':
        return Icons.analytics_outlined;
      case 'mapView':
      case 'map':
        return Icons.map_outlined;
      case 'reelFeed':
        return Icons.smart_display_outlined;
      case 'socialFeed':
        return Icons.dynamic_feed_outlined;
      case 'searchHub':
        return Icons.search;
      case 'qrGenerator':
        return Icons.qr_code_2;
      case 'invoiceBuilder':
        return Icons.receipt_long;
      case 'image':
        return Icons.image_outlined;
      default:
        return Icons.text_fields;
    }
  }

  @override
  Widget build(BuildContext context) {
    final tile = Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Material(
        color: isDark ? const Color(0xFF1E293B) : Colors.white,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          onTap: onEdit,
          borderRadius: BorderRadius.circular(14),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: isDark ? Colors.white10 : Colors.grey.shade200),
            ),
            child: Row(
              children: [
                ReorderableDragStartListener(
                  index: index,
                  child: Icon(Icons.drag_handle, color: isDark ? Colors.white38 : Colors.grey.shade400),
                ),
                const SizedBox(width: 8),
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(color: theme.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10)),
                  child: Icon(_icon, size: 20, color: theme),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(ngmyWidgetTypeLabel(type), style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: theme)),
                      Text(label, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 13, color: isDark ? Colors.white70 : Colors.grey.shade800)),
                    ],
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.auto_awesome_rounded, size: 20),
                  color: const Color(0xFFF59E0B),
                  tooltip: 'Ask AI to update this widget',
                  onPressed: onAskAi,
                ),
                IconButton(icon: Icon(Icons.delete_outline, size: 20, color: Colors.red.shade300), onPressed: onDelete),
              ],
            ),
          ),
        ),
      ),
    );
    if (onDropWidget == null) return tile;
    return DragTarget<String>(
      onAcceptWithDetails: (d) => onDropWidget!(d.data),
      builder: (context, candidates, rejected) {
        return Column(
          children: [
            if (candidates.isNotEmpty)
              Container(
                margin: const EdgeInsets.only(bottom: 4),
                height: 3,
                decoration: BoxDecoration(color: theme, borderRadius: BorderRadius.circular(2)),
              ),
            tile,
          ],
        );
      },
    );
  }
}

class _QuickWidgetChips extends StatelessWidget {
  const _QuickWidgetChips({required this.theme, required this.isDark, required this.onAdd});
  final Color theme;
  final bool isDark;
  final void Function(String type) onAdd;

  static const _chips = [
    ('button', 'Button'),
    ('form', 'Form'),
    ('dataList', 'List'),
    ('mapView', 'Map'),
    ('menuGrid', 'Menu'),
    ('hero', 'Hero'),
    ('switch', 'Switch'),
    ('reelFeed', 'Reels'),
    ('socialFeed', 'Feed'),
    ('qrGenerator', 'QR'),
    ('stat', 'Stat'),
  ];

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: [
        for (final (type, label) in _chips)
          ActionChip(
            label: Text(label, style: const TextStyle(fontSize: 12)),
            avatar: Icon(Icons.add, size: 16, color: theme),
            onPressed: () => onAdd(type),
          ),
      ],
    );
  }
}

class _WidgetToolStrip extends StatelessWidget {
  const _WidgetToolStrip({
    required this.theme,
    required this.isDark,
    required this.onAdd,
  });

  final Color theme;
  final bool isDark;
  final void Function(String type) onAdd;

  static const _tools = <(String, IconData, String)>[
    ('button', Icons.smart_button_outlined, 'Button'),
    ('outlined_button', Icons.crop_square_outlined, 'Outline'),
    ('title', Icons.title, 'Title'),
    ('text', Icons.text_fields, 'Text'),
    ('hero', Icons.view_carousel_outlined, 'Hero'),
    ('form', Icons.edit_note_outlined, 'Form'),
    ('dataList', Icons.list_alt, 'List'),
    ('menuGrid', Icons.grid_view_rounded, 'Menu'),
    ('stat', Icons.analytics_outlined, 'Stat'),
    ('checklist', Icons.checklist, 'Tasks'),
    ('switch', Icons.toggle_on_outlined, 'Toggle'),
    ('card', Icons.credit_card, 'Card'),
    ('image', Icons.image_outlined, 'Image'),
    ('divider', Icons.horizontal_rule, 'Divider'),
    ('spacer', Icons.space_bar, 'Spacer'),
    ('mapView', Icons.map_outlined, 'Map'),
    ('searchHub', Icons.search, 'Search'),
    ('socialFeed', Icons.dynamic_feed_outlined, 'Feed'),
    ('reelFeed', Icons.smart_display_outlined, 'Reels'),
    ('postComposer', Icons.video_call_outlined, 'Post'),
    ('profile', Icons.person_outline, 'Profile'),
    ('qrCode', Icons.qr_code, 'QR'),
    ('qrGenerator', Icons.qr_code_2, 'QR gen'),
    ('invoiceBuilder', Icons.receipt_long, 'Invoice'),
    ('workout', Icons.fitness_center, 'Workout'),
    ('tabs', Icons.tab_outlined, 'Tabs'),
    ('chip', Icons.label_outline, 'Chip'),
    ('list', Icons.format_list_bulleted, 'Links'),
    ('dark_mode', Icons.dark_mode_outlined, 'Dark'),
    ('link', Icons.link, 'Link'),
    ('banner', Icons.campaign_outlined, 'Banner'),
    ('progress', Icons.linear_scale, 'Progress'),
    ('rating', Icons.star_outline, 'Rating'),
    ('contact', Icons.contact_phone_outlined, 'Contact'),
    ('video', Icons.videocam_outlined, 'Video'),
  ];

  @override
  Widget build(BuildContext context) {
    final sub = isDark ? Colors.white60 : Colors.grey.shade600;
    return _SectionCard(
      isDark: isDark,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Widget tools', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: sub)),
          const SizedBox(height: 4),
          Text('Tap to add · long-press and drag onto the list', style: TextStyle(fontSize: 11, color: sub)),
          const SizedBox(height: 10),
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 5,
              mainAxisSpacing: 8,
              crossAxisSpacing: 8,
              childAspectRatio: 0.82,
            ),
            itemCount: ngmyWidgetGridPaddedCount(_tools.length),
            itemBuilder: (_, i) {
              if (i >= _tools.length) {
                return const SizedBox.shrink();
              }
              final (type, icon, label) = _tools[i];
              return LongPressDraggable<String>(
                data: type,
                feedback: Material(
                  elevation: 8,
                  borderRadius: BorderRadius.circular(14),
                  color: theme,
                  child: SizedBox(width: 56, height: 56, child: Icon(icon, color: Colors.white, size: 28)),
                ),
                childWhenDragging: Opacity(
                  opacity: 0.35,
                  child: _toolChip(type, icon, label, compact: true),
                ),
                child: _toolChip(type, icon, label, compact: true),
              );
            },
          ),
        ],
      ),
    );
  }

  Widget _toolChip(String type, IconData icon, String label, {bool compact = false}) {
    return Tooltip(
      message: label,
      child: Material(
        color: isDark ? const Color(0xFF111827) : Colors.grey.shade50,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          onTap: () => onAdd(type),
          borderRadius: BorderRadius.circular(14),
          child: Container(
            width: compact ? double.infinity : 64,
            padding: EdgeInsets.symmetric(vertical: compact ? 6 : 8, horizontal: 4),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: isDark ? Colors.white12 : Colors.grey.shade300),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: compact ? 20 : 22, color: theme),
                const SizedBox(height: 4),
                Text(
                  label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: compact ? 8 : 9, fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : Colors.grey.shade700),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _AddWidgetSheet extends StatelessWidget {
  const _AddWidgetSheet({required this.themeColor, required this.onAdd});
  final Color themeColor;
  final void Function(String type) onAdd;

  static const _groups = <String, List<(String, String, IconData)>>{
    'Actions': [
      ('button', 'Button', Icons.smart_button),
      ('outlined_button', 'Outlined button', Icons.crop_square),
    ],
    'Content': [
      ('title', 'Title text', Icons.title),
      ('text', 'Body text', Icons.text_fields),
      ('hero', 'Hero banner', Icons.view_carousel),
      ('image', 'Image', Icons.image),
      ('card', 'Card', Icons.credit_card),
    ],
    'Data & forms': [
      ('form', 'Form (save data)', Icons.edit_note),
      ('dataList', 'Data list', Icons.list),
      ('stat', 'Stat counter', Icons.analytics),
    ],
    'Navigation': [
      ('menuGrid', 'Menu grid', Icons.grid_view),
      ('list', 'Link list', Icons.format_list_bulleted),
      ('tabs', 'Tabs', Icons.tab),
    ],
    'Interactive': [
      ('switch', 'Toggle', Icons.toggle_on),
      ('dark_mode', 'Dark mode', Icons.dark_mode),
      ('checklist', 'Checklist', Icons.checklist),
      ('workout', 'Workout plan', Icons.fitness_center),
      ('chip', 'Chip tag', Icons.label),
    ],
    'QR & Invoices': [
      ('qrGenerator', 'QR generator', Icons.qr_code_2),
      ('qrCode', 'Static QR', Icons.qr_code),
      ('invoiceBuilder', 'Invoice', Icons.receipt_long),
    ],
    'Social & Video': [
      ('reelFeed', 'TikTok feed', Icons.smart_display_rounded),
      ('socialFeed', 'Social feed', Icons.dynamic_feed_rounded),
      ('postComposer', 'Post / reel', Icons.video_call_rounded),
      ('searchHub', 'Search hub', Icons.search_rounded),
      ('mapView', 'Map view', Icons.map_rounded),
      ('profile', 'Profile', Icons.person_rounded),
    ],
    'Layout': [
      ('spacer', 'Spacer', Icons.space_bar),
      ('divider', 'Divider', Icons.horizontal_rule),
    ],
    'More widgets': [
      ('link', 'Link button', Icons.link),
      ('banner', 'Banner alert', Icons.campaign),
      ('progress', 'Progress bar', Icons.linear_scale),
      ('rating', 'Star rating', Icons.star),
      ('contact', 'Contact card', Icons.contact_phone),
      ('video', 'Video', Icons.videocam),
    ],
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.75),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(height: 10),
          Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade300, borderRadius: BorderRadius.circular(2))),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Row(
              children: [
                Text('Add widget', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: Colors.grey.shade900)),
                const Spacer(),
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close)),
              ],
            ),
          ),
          Flexible(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
              children: [
                for (final entry in _groups.entries) ...[
                  Text(entry.key, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: themeColor)),
                  const SizedBox(height: 8),
                  GridView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 5,
                      mainAxisSpacing: 8,
                      crossAxisSpacing: 8,
                      childAspectRatio: 0.85,
                    ),
                    itemCount: ngmyWidgetGridPaddedCount(entry.value.length),
                    itemBuilder: (_, i) {
                      if (i >= entry.value.length) {
                        return const SizedBox.shrink();
                      }
                      final (type, label, icon) = entry.value[i];
                      return _PaletteTile(type: type, label: label, icon: icon, color: themeColor, onTap: () => onAdd(type));
                    },
                  ),
                  const SizedBox(height: 16),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _PaletteTile extends StatelessWidget {
  const _PaletteTile({required this.type, required this.label, required this.icon, required this.color, required this.onTap});
  final String type;
  final String label;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: color.withValues(alpha: 0.08),
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 4),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, color: color, size: 22),
              const SizedBox(height: 6),
              Text(label, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: Colors.grey.shade800)),
            ],
          ),
        ),
      ),
    );
  }
}

class _WidgetEditorSheet extends StatefulWidget {
  const _WidgetEditorSheet({
    required this.widget,
    required this.widgetIndex,
    required this.screens,
    required this.themeColor,
    required this.isDark,
    this.apiKey = '',
    this.screen,
    this.email = '',
    this.config,
    this.user,
    this.isAdmin = false,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
  });
  final Map<String, dynamic> widget;
  final int widgetIndex;
  final List<NgmyAppScreen> screens;
  final Color themeColor;
  final bool isDark;
  final String apiKey;
  final NgmyAppScreen? screen;
  final String email;
  final dynamic config;
  final dynamic user;
  final bool isAdmin;
  final Future<bool> Function(double amount, String description)? onChargeWallet;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

  @override
  State<_WidgetEditorSheet> createState() => _WidgetEditorSheetState();
}

class _WidgetEditorSheetState extends State<_WidgetEditorSheet> {
  late Map<String, dynamic> _w;

  @override
  void initState() {
    super.initState();
    _w = Map<String, dynamic>.from(widget.widget);
  }

  void _set(String key, dynamic value) => setState(() => _w[key] = value);

  Future<void> _askAiForWidget() async {
    if (widget.screen == null) return;
    final ctrl = TextEditingController();
    final request = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: widget.isDark ? const Color(0xFF1E293B) : Colors.white,
        title: Row(
          children: [
            const Icon(Icons.auto_awesome_rounded, color: Color(0xFFF59E0B)),
            const SizedBox(width: 8),
            Expanded(child: Text('Ask AI', style: TextStyle(color: widget.isDark ? Colors.white : Colors.black87))),
          ],
        ),
        content: TextField(
          controller: ctrl,
          autofocus: true,
          maxLines: 4,
          decoration: InputDecoration(
            hintText: 'Tell Bolt anything to change in this widget — text, links, colors, actions…',
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, ctrl.text.trim()), child: const Text('Apply')),
        ],
      ),
    );
    ctrl.dispose();
    if (request == null || request.isEmpty || !mounted) return;

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
      return;
    }

    final result = await ngmyAppBuilderAiEditWidget(
      apiKey: widget.apiKey,
      screen: widget.screen!,
      widgetIndex: widget.widgetIndex,
      widgetJson: _w,
      allScreens: widget.screens,
      userMessage: request,
    );
    if (!mounted) return;
    if (!widget.isAdmin && widget.email.isNotEmpty) {
      await NgmyAppBuilderAiUsage.recordPrompt(widget.email);
    }
    final layout = ngmyScreenLayout(result.screen ?? widget.screen!);
    final children = layout?['children'];
    if (children is List && widget.widgetIndex >= 0 && widget.widgetIndex < children.length) {
      final c = children[widget.widgetIndex];
      if (c is Map) {
        setState(() => _w = Map<String, dynamic>.from(c));
      }
    }
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(result.message), behavior: SnackBarBehavior.floating));
  }

  @override
  Widget build(BuildContext context) {
    final type = (_w['type'] ?? '').toString();
    final sheetBg = widget.isDark ? const Color(0xFF1E293B) : Colors.white;
    final titleColor = widget.isDark ? Colors.white : Colors.black87;
    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.85),
      decoration: BoxDecoration(
        color: sheetBg,
        borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(height: 10),
          Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade300, borderRadius: BorderRadius.circular(2))),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 16, 12, 8),
            child: Row(
              children: [
                Expanded(child: Text('Edit ${ngmyWidgetTypeLabel(type)}', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: titleColor))),
                if (widget.apiKey.isNotEmpty)
                  IconButton(
                    tooltip: 'Ask AI',
                    onPressed: _askAiForWidget,
                    icon: const Icon(Icons.auto_awesome_rounded, color: Color(0xFFF59E0B)),
                  ),
                FilledButton(onPressed: () => Navigator.pop(context, _w), child: const Text('Save')),
              ],
            ),
          ),
          Flexible(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 32),
              children: _fieldsForType(type),
            ),
          ),
        ],
      ),
    );
  }

  List<Widget> _fieldsForType(String type) {
    switch (type) {
      case 'button':
      case 'outlined_button':
        return [
          _tf('Label', _w['label']?.toString() ?? '', (v) => _set('label', v)),
          _screenPicker('Opens screen', (_w['target'] ?? _w['targetScreenId'] ?? '').toString(), (id) {
            _set('target', id);
            _set('targetScreenId', id);
          }),
          if (type == 'button') ...[
            _dropdown('Action', (_w['action'] ?? 'navigate').toString(), const ['navigate', 'snack', 'clear'], (v) => _set('action', v)),
            if ((_w['action'] ?? 'navigate') == 'snack')
              _tf('Snack message', (_w['message'] ?? '').toString(), (v) => _set('message', v)),
            if ((_w['action'] ?? 'navigate') == 'clear')
              _tf('Collection to clear', (_w['collection'] ?? '').toString(), (v) => _set('collection', v)),
            SwitchListTile(
              title: const Text('Large button'),
              value: _w['large'] == true,
              onChanged: (v) => _set('large', v),
            ),
          ],
        ];
      case 'text':
        return [
          _tf('Text', (_w['text'] ?? '').toString(), (v) => _set('text', v), maxLines: 3),
          _dropdown('Style', (_w['style'] ?? 'subtitle').toString(), const ['title', 'subtitle', 'body'], (v) => _set('style', v)),
        ];
      case 'hero':
        return [
          _tf('Emoji', (_w['emoji'] ?? '✨').toString(), (v) => _set('emoji', v)),
          _tf('Title', (_w['title'] ?? '').toString(), (v) => _set('title', v)),
          _tf('Subtitle', (_w['subtitle'] ?? '').toString(), (v) => _set('subtitle', v)),
        ];
      case 'form':
        return [
          _tf('Collection name', (_w['collection'] ?? 'entries').toString(), (v) => _set('collection', v)),
          _tf('Submit button', (_w['submitLabel'] ?? 'Submit').toString(), (v) => _set('submitLabel', v)),
          _tf('Success message', (_w['successMessage'] ?? 'Saved!').toString(), (v) => _set('successMessage', v)),
          _screenPicker('Go to screen after save (optional)', (_w['navigateAfter'] ?? '').toString(), (id) => _set('navigateAfter', id), allowEmpty: true),
          const SizedBox(height: 8),
          Text('Form fields (JSON lines: id, label, type)', style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
          const SizedBox(height: 4),
          _FormFieldsEditor(fields: _w['fields'], onChanged: (f) => _set('fields', f)),
        ];
      case 'dataList':
        return [
          _tf('Collection', (_w['collection'] ?? 'entries').toString(), (v) => _set('collection', v)),
          _tf('Title field', (_w['titleField'] ?? 'name').toString(), (v) => _set('titleField', v)),
          _tf('Subtitle field', (_w['subtitleField'] ?? '').toString(), (v) => _set('subtitleField', v)),
          _tf('Empty message', (_w['emptyText'] ?? '').toString(), (v) => _set('emptyText', v)),
          _tf('Add button label', (_w['addLabel'] ?? 'Add').toString(), (v) => _set('addLabel', v)),
          _screenPicker('Add button opens', (_w['addTarget'] ?? '').toString(), (id) => _set('addTarget', id), allowEmpty: true),
          SwitchListTile(title: const Text('Allow delete'), value: _w['allowDelete'] == true, onChanged: (v) => _set('allowDelete', v)),
        ];
      case 'menuGrid':
        return [
          _dropdown('Columns', (_w['columns'] ?? 2).toString(), const ['2', '3'], (v) => _set('columns', int.tryParse(v) ?? 2)),
          const SizedBox(height: 8),
          Text('Menu items', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.grey.shade700)),
          _MenuItemsEditor(
            items: _w['items'],
            screens: widget.screens,
            onChanged: (items) => _set('items', items),
          ),
        ];
      case 'switch':
        return [
          _tf('Setting key', (_w['setting'] ?? 'setting').toString(), (v) => _set('setting', v)),
          _tf('Label', (_w['label'] ?? '').toString(), (v) => _set('label', v)),
          _tf('Subtitle', (_w['subtitle'] ?? '').toString(), (v) => _set('subtitle', v)),
          SwitchListTile(title: const Text('Default on'), value: _w['default'] != false, onChanged: (v) => _set('default', v)),
        ];
      case 'stat':
        return [
          _tf('Collection', (_w['collection'] ?? 'entries').toString(), (v) => _set('collection', v)),
          _tf('Label', (_w['label'] ?? 'Total').toString(), (v) => _set('label', v)),
        ];
      case 'image':
        return [_tf('Image URL', (_w['url'] ?? '').toString(), (v) => _set('url', v))];
      case 'spacer':
        return [_tf('Height (px)', (_w['height'] ?? 16).toString(), (v) => _set('height', int.tryParse(v) ?? 16))];
      case 'divider':
        return [Text('Divider — no extra settings.', style: TextStyle(color: Colors.grey.shade600))];
      case 'checklist':
        return [
          _tf('Checklist ID', (_w['id'] ?? 'tasks').toString(), (v) => _set('id', v)),
          const SizedBox(height: 8),
          Text('Items (one per line)', style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
          _tf('Tasks', _checklistLines(), (v) {
            _set('items', v.split('\n').where((l) => l.trim().isNotEmpty).map((l) => {'id': l.hashCode.toString(), 'label': l.trim()}).toList());
          }, maxLines: 5),
        ];
      case 'workout':
      case 'workoutPlan':
        return [
          _tf('Plan title', (_w['title'] ?? 'Workout').toString(), (v) => _set('title', v)),
          _tf('Plan ID', (_w['planId'] ?? 'plan1').toString(), (v) => _set('planId', v)),
        ];
      case 'mapView':
      case 'map':
        return [
          _tf('Places collection', (_w['collection'] ?? 'places').toString(), (v) => _set('collection', v)),
          _tf('Title field', (_w['titleField'] ?? 'name').toString(), (v) => _set('titleField', v)),
          _tf('Map height (px)', (_w['height'] ?? 240).toString(), (v) => _set('height', int.tryParse(v) ?? 240)),
        ];
      case 'reelFeed':
        return [
          _tf('Reels collection', (_w['collection'] ?? 'reels').toString(), (v) => _set('collection', v)),
          _tf('Preview height (px)', (_w['height'] ?? 220).toString(), (v) => _set('height', int.tryParse(v) ?? 220)),
        ];
      case 'socialFeed':
        return [_tf('Posts collection', (_w['collection'] ?? 'posts').toString(), (v) => _set('collection', v))];
      case 'searchHub':
        return [
          _tf('Bookmarks collection', (_w['collection'] ?? 'bookmarks').toString(), (v) => _set('collection', v)),
          _tf('Search placeholder', (_w['placeholder'] ?? 'Search the web').toString(), (v) => _set('placeholder', v)),
        ];
      case 'postComposer':
        return [
          _tf('Save to collection', (_w['collection'] ?? 'reels').toString(), (v) => _set('collection', v)),
          _dropdown('Mode', (_w['mode'] ?? 'reel').toString(), const ['reel', 'post'], (v) => _set('mode', v)),
          _tf('After post go to screen ID', (_w['navigateAfter'] ?? '').toString(), (v) => _set('navigateAfter', v)),
        ];
      case 'profile':
        return [
          _tf('Username / handle', (_w['handle'] ?? '@you').toString(), (v) => _set('handle', v)),
          _tf('Posts collection', (_w['collection'] ?? 'reels').toString(), (v) => _set('collection', v)),
        ];
      case 'qrCode':
      case 'qr':
        return [
          _tf('QR data / URL', (_w['data'] ?? '').toString(), (v) => _set('data', v)),
          _tf('Label', (_w['label'] ?? '').toString(), (v) => _set('label', v)),
        ];
      case 'qrGenerator':
        return [
          _tf('Save collection', (_w['collection'] ?? 'qr_codes').toString(), (v) => _set('collection', v)),
          _tf('Placeholder', (_w['placeholder'] ?? '').toString(), (v) => _set('placeholder', v)),
        ];
      case 'invoiceBuilder':
        return [
          _tf('Invoices collection', (_w['collection'] ?? 'invoices').toString(), (v) => _set('collection', v)),
          _tf('Title', (_w['title'] ?? 'Create invoice').toString(), (v) => _set('title', v)),
        ];
      case 'chip':
        return [_tf('Chip label', (_w['label'] ?? 'Tag').toString(), (v) => _set('label', v))];
      case 'card':
        return [
          Text('Edit card contents by adding nested widgets via AI or rebuild the card.', style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
        ];
      case 'link':
        return [
          _tf('Link label', (_w['label'] ?? 'Open link').toString(), (v) => _set('label', v)),
          _tf('URL', (_w['url'] ?? '').toString(), (v) => _set('url', v)),
        ];
      case 'banner':
        return [
          _tf('Banner text', (_w['text'] ?? '').toString(), (v) => _set('text', v), maxLines: 3),
          _dropdown('Style', (_w['variant'] ?? 'info').toString(), const ['info', 'warning', 'success'], (v) => _set('variant', v)),
        ];
      case 'progress':
        return [
          _tf('Label', (_w['label'] ?? 'Progress').toString(), (v) => _set('label', v)),
          _tf('Value 0–1', (_w['value'] ?? 0.65).toString(), (v) => _set('value', double.tryParse(v) ?? 0.65)),
        ];
      case 'rating':
        return [
          _tf('Label', (_w['label'] ?? 'Rating').toString(), (v) => _set('label', v)),
          _tf('Stars 0–5', (_w['value'] ?? 4.5).toString(), (v) => _set('value', double.tryParse(v) ?? 4.5)),
        ];
      case 'contact':
        return [
          _tf('Name', (_w['name'] ?? 'Contact').toString(), (v) => _set('name', v)),
          _tf('Phone', (_w['phone'] ?? '').toString(), (v) => _set('phone', v)),
          _tf('Email', (_w['email'] ?? '').toString(), (v) => _set('email', v)),
        ];
      case 'video':
        return [
          _tf('Video URL (MP4)', (_w['url'] ?? '').toString(), (v) => _set('url', v)),
          _tf('Caption', (_w['caption'] ?? '').toString(), (v) => _set('caption', v)),
        ];
      default:
        return [Text('No extra settings for this widget. Use Ask AI to change it.', style: TextStyle(color: Colors.grey.shade600))];
    }
  }

  String _checklistLines() {
    final items = _w['items'];
    if (items is! List) return '';
    return items.map((e) => (e is Map ? (e['label'] ?? '').toString() : e.toString())).join('\n');
  }

  Widget _tf(String label, String value, void Function(String) onChanged, {int maxLines = 1}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: TextField(
        controller: TextEditingController(text: value)..selection = TextSelection.collapsed(offset: value.length),
        maxLines: maxLines,
        decoration: InputDecoration(labelText: label, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12))),
        onChanged: onChanged,
      ),
    );
  }

  Widget _dropdown(String label, String value, List<String> options, void Function(String) onChanged) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: DropdownButtonFormField<String>(
        value: options.contains(value) ? value : options.first,
        decoration: InputDecoration(labelText: label, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12))),
        items: [for (final o in options) DropdownMenuItem(value: o, child: Text(o))],
        onChanged: (v) { if (v != null) onChanged(v); },
      ),
    );
  }

  Widget _screenPicker(String label, String currentId, void Function(String) onChanged, {bool allowEmpty = false}) {
    final ids = <String?>[if (allowEmpty) '', ...widget.screens.map((s) => s.id)];
    final safe = ids.contains(currentId) ? currentId : (allowEmpty ? '' : widget.screens.firstOrNull?.id ?? '');
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: DropdownButtonFormField<String>(
        value: safe,
        decoration: InputDecoration(labelText: label, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12))),
        items: [
          for (final id in ids)
            DropdownMenuItem(
              value: id ?? '',
              child: Text(id == null || id.isEmpty ? '(none)' : widget.screens.firstWhere((s) => s.id == id, orElse: () => NgmyAppScreen.welcome(id: id, title: id)).title),
            ),
        ],
        onChanged: (v) => onChanged(v ?? ''),
      ),
    );
  }
}

class _FormFieldsEditor extends StatefulWidget {
  const _FormFieldsEditor({required this.fields, required this.onChanged});
  final dynamic fields;
  final void Function(List<Map<String, dynamic>>) onChanged;

  @override
  State<_FormFieldsEditor> createState() => _FormFieldsEditorState();
}

class _FormFieldsEditorState extends State<_FormFieldsEditor> {
  late List<Map<String, dynamic>> _fields;

  @override
  void initState() {
    super.initState();
    _fields = [];
    if (widget.fields is List) {
      for (final f in widget.fields as List) {
        if (f is Map) _fields.add(Map<String, dynamic>.from(f));
      }
    }
    if (_fields.isEmpty) {
      _fields = [
        {'id': 'name', 'label': 'Name', 'type': 'text'},
      ];
    }
  }

  void _sync() => widget.onChanged(_fields);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        for (var i = 0; i < _fields.length; i++)
          Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    decoration: const InputDecoration(labelText: 'Label', isDense: true, border: OutlineInputBorder()),
                    controller: TextEditingController(text: (_fields[i]['label'] ?? '').toString()),
                    onChanged: (v) {
                      _fields[i]['label'] = v;
                      _fields[i]['id'] = v.toLowerCase().replaceAll(RegExp(r'[^a-z0-9]'), '_');
                      _sync();
                    },
                  ),
                ),
                const SizedBox(width: 8),
                DropdownButton<String>(
                  value: (_fields[i]['type'] ?? 'text').toString(),
                  items: const [
                    DropdownMenuItem(value: 'text', child: Text('Text')),
                    DropdownMenuItem(value: 'number', child: Text('Number')),
                    DropdownMenuItem(value: 'email', child: Text('Email')),
                    DropdownMenuItem(value: 'multiline', child: Text('Long text')),
                  ],
                  onChanged: (v) {
                    if (v != null) {
                      setState(() => _fields[i]['type'] = v);
                      _sync();
                    }
                  },
                ),
                IconButton(
                  icon: const Icon(Icons.remove_circle_outline, color: Colors.red),
                  onPressed: () {
                    setState(() => _fields.removeAt(i));
                    _sync();
                  },
                ),
              ],
            ),
          ),
        TextButton.icon(
          onPressed: () {
            setState(() => _fields.add({'id': 'field_${_fields.length}', 'label': 'New field', 'type': 'text'}));
            _sync();
          },
          icon: const Icon(Icons.add),
          label: const Text('Add field'),
        ),
      ],
    );
  }
}

class _MenuItemsEditor extends StatefulWidget {
  const _MenuItemsEditor({required this.items, required this.screens, required this.onChanged});
  final dynamic items;
  final List<NgmyAppScreen> screens;
  final void Function(List<Map<String, dynamic>>) onChanged;

  @override
  State<_MenuItemsEditor> createState() => _MenuItemsEditorState();
}

class _MenuItemsEditorState extends State<_MenuItemsEditor> {
  late List<Map<String, dynamic>> _items;

  @override
  void initState() {
    super.initState();
    _items = [];
    if (widget.items is List) {
      for (final item in widget.items as List) {
        if (item is Map) _items.add(Map<String, dynamic>.from(item));
      }
    }
  }

  void _sync() => widget.onChanged(_items);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        for (var i = 0; i < _items.length; i++)
          Card(
            margin: const EdgeInsets.only(bottom: 8),
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                children: [
                  TextField(
                    decoration: const InputDecoration(labelText: 'Label', isDense: true, border: OutlineInputBorder()),
                    controller: TextEditingController(text: (_items[i]['label'] ?? '').toString()),
                    onChanged: (v) {
                      _items[i]['label'] = v;
                      _sync();
                    },
                  ),
                  const SizedBox(height: 8),
                  DropdownButtonFormField<String>(
                    value: widget.screens.any((s) => s.id == (_items[i]['target'] ?? '').toString())
                        ? (_items[i]['target'] ?? '').toString()
                        : widget.screens.firstOrNull?.id,
                    decoration: const InputDecoration(labelText: 'Opens screen', border: OutlineInputBorder()),
                    items: [for (final s in widget.screens) DropdownMenuItem(value: s.id, child: Text(s.title))],
                    onChanged: (v) {
                      if (v != null) {
                        setState(() => _items[i]['target'] = v);
                        _sync();
                      }
                    },
                  ),
                  Align(
                    alignment: Alignment.centerRight,
                    child: TextButton(onPressed: () {
                      setState(() => _items.removeAt(i));
                      _sync();
                    }, child: const Text('Remove', style: TextStyle(color: Colors.red))),
                  ),
                ],
              ),
            ),
          ),
        TextButton.icon(
          onPressed: () {
            setState(() => _items.add({
              'label': 'New item',
              'icon': 'menu',
              'target': widget.screens.firstOrNull?.id ?? '',
            }));
            _sync();
          },
          icon: const Icon(Icons.add),
          label: const Text('Add menu item'),
        ),
      ],
    );
  }
}
