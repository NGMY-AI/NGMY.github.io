import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_app_builder_layout_utils.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_templates.dart';
import 'ngmy_app_builder_icon.dart';
import 'ngmy_app_studio_ai_panel.dart';

/// Screenshot-style showcase cards → existing template ids.
class NgmyStudioShowcaseTemplate {
  const NgmyStudioShowcaseTemplate({
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.templateId,
    required this.accent,
  });

  final String title;
  final String subtitle;
  final IconData icon;
  final String templateId;
  final Color accent;
}

const kNgmyStudioShowcaseTemplates = <NgmyStudioShowcaseTemplate>[
  NgmyStudioShowcaseTemplate(
    title: 'E-Commerce App',
    subtitle: 'Product grid, cart & checkout flow',
    icon: Icons.shopping_cart_outlined,
    templateId: 'luxe_store',
    accent: Color(0xFF3B82F6),
  ),
  NgmyStudioShowcaseTemplate(
    title: 'Social Media Feed',
    subtitle: 'Posts, profiles & engagement',
    icon: Icons.forum_outlined,
    templateId: 'creator_hub',
    accent: Color(0xFF8B5CF6),
  ),
  NgmyStudioShowcaseTemplate(
    title: 'Health & Fitness Tracker',
    subtitle: 'Workouts, progress & goals',
    icon: Icons.monitor_heart_outlined,
    templateId: 'pulse_fitness',
    accent: Color(0xFF10B981),
  ),
  NgmyStudioShowcaseTemplate(
    title: 'CRM Dashboard',
    subtitle: 'Clients, charts & pipeline',
    icon: Icons.contacts_outlined,
    templateId: 'invoice_pro',
    accent: Color(0xFF6366F1),
  ),
  NgmyStudioShowcaseTemplate(
    title: 'Portfolio Web App',
    subtitle: 'Showcase work & contact',
    icon: Icons.web_outlined,
    templateId: 'video_hub',
    accent: Color(0xFF0EA5E9),
  ),
  NgmyStudioShowcaseTemplate(
    title: 'Travel Booking App',
    subtitle: 'Trips, maps & reservations',
    icon: Icons.flight_outlined,
    templateId: 'qr_studio',
    accent: Color(0xFFF59E0B),
  ),
];

enum NgmyStudioNav {
  myProjects,
  buildDesign,
  aiAssistant,
  templates,
  componentLibrary,
  integrations,
  previewTest,
  publishApp,
  settings,
}

enum NgmyStudioBuildMode { dragDrop, aiLayout }

enum NgmyStudioCanvasMode { design, code }

/// Master App Studio UI — left nav, canvas, inspector (matches Flutter AI Builder screenshots).
class NgmyAppStudioDashboard extends StatefulWidget {
  const NgmyAppStudioDashboard({
    super.key,
    required this.userName,
    required this.userEmail,
    required this.isDark,
    required this.loading,
    required this.projects,
    required this.published,
    required this.activeProject,
    required this.isAdmin,
    required this.apiKey,
    required this.config,
    required this.user,
    required this.onBack,
    required this.onSelectProject,
    required this.onCreateBlank,
    required this.onUseTemplate,
    required this.onImport,
    required this.onPreviewRuntime,
    required this.onPublish,
    required this.onIntegrations,
    required this.onOpenScreenEditor,
    required this.onProjectUpdated,
    required this.onSaveProject,
    required this.onExportProject,
    required this.onDeleteProject,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
    this.initialNav = NgmyStudioNav.buildDesign,
  });

  final String userName;
  final String userEmail;
  final bool isDark;
  final bool loading;
  final List<NgmyAppProject> projects;
  final List<NgmyAppProject> published;
  final NgmyAppProject? activeProject;
  final bool isAdmin;
  final String apiKey;
  final dynamic config;
  final dynamic user;
  final VoidCallback onBack;
  final ValueChanged<NgmyAppProject> onSelectProject;
  final Future<void> Function() onCreateBlank;
  final ValueChanged<NgmyAppTemplate> onUseTemplate;
  final Future<void> Function() onImport;
  final ValueChanged<NgmyAppProject> onPreviewRuntime;
  final ValueChanged<NgmyAppProject> onPublish;
  final VoidCallback onIntegrations;
  final void Function(NgmyAppProject project, int screenIndex) onOpenScreenEditor;
  final ValueChanged<NgmyAppProject> onProjectUpdated;
  final Future<void> Function(NgmyAppProject) onSaveProject;
  final Future<void> Function(NgmyAppProject) onExportProject;
  final Future<void> Function(NgmyAppProject) onDeleteProject;
  final Future<bool> Function(double amount, String description)? onChargeWallet;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;
  final NgmyStudioNav initialNav;

  @override
  State<NgmyAppStudioDashboard> createState() => _NgmyAppStudioDashboardState();
}

class _NgmyAppStudioDashboardState extends State<NgmyAppStudioDashboard> {
  late NgmyStudioNav _nav;
  NgmyStudioBuildMode _buildMode = NgmyStudioBuildMode.dragDrop;
  NgmyStudioCanvasMode _canvasMode = NgmyStudioCanvasMode.design;
  bool _showBuildFlyout = true;
  bool _showTemplatesOverlay = false;
  bool _showGrid = true;
  int _activeScreenIndex = 0;
  int? _selectedWidgetIndex;
  String _treeQuery = '';
  bool _sidebarOpen = false;
  bool _inspectorOpen = false;

  @override
  void initState() {
    super.initState();
    _nav = widget.initialNav;
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      final w = MediaQuery.sizeOf(context).width;
      if (w >= 960) {
        setState(() {
          _sidebarOpen = true;
          _inspectorOpen = true;
        });
      }
    });
  }

  bool _isCompact(BuildContext context) => MediaQuery.sizeOf(context).width < 960;

  void _openDragDropEditor() {
    final p = widget.activeProject;
    if (p == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Open or create a project first (My Projects or Templates).')),
      );
      return;
    }
    setState(() {
      _buildMode = NgmyStudioBuildMode.dragDrop;
      _nav = NgmyStudioNav.buildDesign;
      _showBuildFlyout = false;
    });
    widget.onOpenScreenEditor(p, _activeScreenIndex.clamp(0, p.screens.length - 1));
  }

  Future<void> _confirmPublish() async {
    final p = widget.activeProject;
    if (p == null) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Open a project to publish.')));
      return;
    }
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1F2937),
        title: const Text('Publish app', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
        content: Text(
          widget.isAdmin
              ? 'Publish "${p.name}" to ngmy.org? A backup file will download and your public link will be ready.'
              : 'Submit "${p.name}" for review? It stays on this device until approved.',
          style: TextStyle(color: Colors.white.withValues(alpha: 0.85)),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: Text(widget.isAdmin ? 'Publish' : 'Submit')),
        ],
      ),
    );
    if (ok == true && mounted) widget.onPublish(p);
  }

  @override
  void didUpdateWidget(covariant NgmyAppStudioDashboard oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.activeProject != null && _activeScreenIndex >= widget.activeProject!.screens.length) {
      _activeScreenIndex = 0;
    }
  }

  NgmyAppTemplate? _templateById(String id) {
    for (final t in kNgmyAppTemplates) {
      if (t.id == id) return t;
    }
    return null;
  }

  void _pickNav(NgmyStudioNav item) {
    if (compactSidebarClose(item)) return;
    setState(() {
      _nav = item;
      _showBuildFlyout = item == NgmyStudioNav.buildDesign;
      if (item == NgmyStudioNav.templates) _showTemplatesOverlay = true;
      if (item == NgmyStudioNav.previewTest && widget.activeProject != null) {
        widget.onPreviewRuntime(widget.activeProject!);
      }
      if (item == NgmyStudioNav.publishApp) {
        _confirmPublish();
      }
      if (item == NgmyStudioNav.integrations) widget.onIntegrations();
      if (item == NgmyStudioNav.componentLibrary) _showComponentLibrary();
      if (item == NgmyStudioNav.settings) _showSettings();
    });
  }

  bool compactSidebarClose(NgmyStudioNav item) {
    final compact = _isCompact(context);
    if (compact && _sidebarOpen) {
      setState(() {
        _nav = item;
        _sidebarOpen = false;
        _showBuildFlyout = item == NgmyStudioNav.buildDesign;
        if (item == NgmyStudioNav.templates) _showTemplatesOverlay = true;
      });
      if (item == NgmyStudioNav.publishApp) _confirmPublish();
      if (item == NgmyStudioNav.integrations) widget.onIntegrations();
      if (item == NgmyStudioNav.componentLibrary) _showComponentLibrary();
      if (item == NgmyStudioNav.settings) _showSettings();
      if (item == NgmyStudioNav.previewTest && widget.activeProject != null) {
        widget.onPreviewRuntime(widget.activeProject!);
      }
      return true;
    }
    return false;
  }

  void _showComponentLibrary() {
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF1F2937),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text('Component Library', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
            const SizedBox(height: 12),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: ['text', 'button', 'hero', 'menuGrid', 'dataList', 'switch', 'form', 'qrGenerator']
                  .map((t) => Chip(label: Text(ngmyWidgetTypeLabel(t)), backgroundColor: const Color(0xFF374151), labelStyle: const TextStyle(color: Colors.white)))
                  .toList(),
            ),
            const SizedBox(height: 8),
            Text('Add widgets inside the screen editor when a project is open.', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 12)),
          ],
        ),
      ),
    );
  }

  void _showSettings() {
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF1F2937),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text('Canvas settings', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
              SwitchListTile(
                value: _showGrid,
                onChanged: (v) {
                  setState(() => _showGrid = v);
                  Navigator.pop(ctx);
                },
                title: const Text('Show alignment grid', style: TextStyle(color: Colors.white)),
                activeThumbColor: const Color(0xFF2563EB),
              ),
              SwitchListTile(
                value: _inspectorOpen,
                onChanged: (v) {
                  setState(() => _inspectorOpen = v);
                  Navigator.pop(ctx);
                },
                title: const Text('Show components panel', style: TextStyle(color: Colors.white)),
                activeThumbColor: const Color(0xFF2563EB),
              ),
              if (widget.activeProject != null)
                ListTile(
                  leading: const Icon(Icons.auto_awesome_rounded, color: Color(0xFF60A5FA)),
                  title: const Text('Open AI Assistant', style: TextStyle(color: Colors.white)),
                  onTap: () {
                    Navigator.pop(ctx);
                    setState(() => _nav = NgmyStudioNav.aiAssistant);
                  },
                ),
              ListTile(
                leading: const Icon(Icons.folder_open_rounded, color: Colors.white70),
                title: const Text('My Projects', style: TextStyle(color: Colors.white)),
                onTap: () {
                  Navigator.pop(ctx);
                  _pickNav(NgmyStudioNav.myProjects);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _confirmDeleteProject(NgmyAppProject p) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1F2937),
        title: const Text('Delete app?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
        content: Text('Delete "${p.name}" from My Projects? This cannot be undone.', style: TextStyle(color: Colors.white.withValues(alpha: 0.85))),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFFDC2626)),
            onPressed: () => Navigator.pop(ctx, true),
            child: const Text('Delete'),
          ),
        ],
      ),
    );
    if (ok == true && mounted) await widget.onDeleteProject(p);
  }

  void _showScreenPicker() {
    final p = widget.activeProject;
    if (p == null || p.screens.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Open a project with screens first.')));
      return;
    }
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF1F2937),
      builder: (ctx) => SafeArea(
        child: ListView(
          shrinkWrap: true,
          children: [
            const Padding(
              padding: EdgeInsets.all(16),
              child: Text('Screens', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
            ),
            for (var i = 0; i < p.screens.length; i++)
              ListTile(
                leading: CircleAvatar(
                  backgroundColor: _activeScreenIndex == i ? const Color(0xFF2563EB) : const Color(0xFF374151),
                  child: Text('${i + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                ),
                title: Text(p.screens[i].title, style: const TextStyle(color: Colors.white)),
                trailing: _activeScreenIndex == i ? const Icon(Icons.check_rounded, color: Color(0xFF60A5FA)) : null,
                onTap: () {
                  setState(() {
                    _activeScreenIndex = i;
                    _selectedWidgetIndex = null;
                    _nav = NgmyStudioNav.buildDesign;
                  });
                  Navigator.pop(ctx);
                },
              ),
          ],
        ),
      ),
    );
  }

  void _resetCanvasHome() {
    setState(() {
      _nav = NgmyStudioNav.buildDesign;
      _canvasMode = NgmyStudioCanvasMode.design;
      _activeScreenIndex = 0;
      _selectedWidgetIndex = null;
    });
  }

  List<Map<String, dynamic>> _activeWidgets() {
    final p = widget.activeProject;
    if (p == null || p.screens.isEmpty) return const [];
    final idx = _activeScreenIndex.clamp(0, p.screens.length - 1);
    return ngmyLayoutChildren(ngmyScreenEnsureEditable(p.screens[idx]));
  }

  @override
  Widget build(BuildContext context) {
    final w = MediaQuery.sizeOf(context).width;
    final compact = w < 960;
    final showSidebar = compact ? _sidebarOpen : true;
    final showInspector = compact ? (w >= 720 && _inspectorOpen) : _inspectorOpen;

    return Scaffold(
      backgroundColor: const Color(0xFF0B1220),
      body: Stack(
        children: [
          Row(
            children: [
              if (!compact && showSidebar) _leftSidebar(compact: false),
              Expanded(
                child: Column(
                  children: [
                    _topBar(compact: compact),
                    Expanded(
                      child: Row(
                        children: [
                          Expanded(child: _centerWorkspace(compact: compact)),
                          if (showInspector)
                            SizedBox(width: compact ? 240 : 280, child: _rightInspector()),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          if (compact && _sidebarOpen) ...[
            GestureDetector(onTap: () => setState(() => _sidebarOpen = false), child: Container(color: Colors.black54)),
            SizedBox(width: 280, child: _leftSidebar(compact: true)),
          ],
          if (_showBuildFlyout && _nav == NgmyStudioNav.buildDesign) _buildFlyout(compact),
          if (_showTemplatesOverlay) _templatesOverlay(),
        ],
      ),
    );
  }

  Widget _topBar({required bool compact}) {
    final p = widget.activeProject;
    return Container(
      padding: EdgeInsets.fromLTRB(compact ? 4 : 16, 6, compact ? 4 : 16, 6),
      decoration: BoxDecoration(
        color: const Color(0xFF111827),
        border: Border(bottom: BorderSide(color: Colors.white.withValues(alpha: 0.06))),
      ),
      child: Row(
        children: [
          if (compact)
            IconButton(
              icon: const Icon(Icons.menu_rounded, color: Colors.white70, size: 22),
              onPressed: () => setState(() => _sidebarOpen = true),
            ),
          IconButton(
            tooltip: 'Back to NGMY Hub',
            onPressed: widget.onBack,
            icon: const Icon(Icons.arrow_back_rounded, color: Colors.white70, size: 20),
          ),
          if (!compact) ...[
            const SizedBox(width: 8),
            _modeToggle(compact: compact),
          ],
          const Spacer(),
          if (compact) _modeToggle(compact: true),
          IconButton(
            tooltip: 'View app',
            onPressed: p == null ? null : () => widget.onPreviewRuntime(p),
            icon: Icon(Icons.phone_iphone_rounded, color: p == null ? Colors.white24 : const Color(0xFF60A5FA), size: 22),
          ),
          if (!compact) ...[
            IconButton(
              tooltip: 'Save',
              onPressed: p == null ? null : () => widget.onSaveProject(p),
              icon: Icon(Icons.save_outlined, color: p == null ? Colors.white24 : Colors.white70, size: 20),
            ),
            IconButton(
              tooltip: 'Download code',
              onPressed: p == null ? null : () => widget.onExportProject(p),
              icon: Icon(Icons.download_rounded, color: p == null ? Colors.white24 : Colors.white70, size: 20),
            ),
          ],
          FilledButton(
            onPressed: p == null ? null : () => widget.onSaveProject(p),
            style: FilledButton.styleFrom(
              backgroundColor: const Color(0xFF2563EB),
              foregroundColor: Colors.white,
              padding: EdgeInsets.symmetric(horizontal: compact ? 10 : 14, vertical: 8),
              minimumSize: Size(compact ? 0 : 64, 36),
            ),
            child: Text(compact ? '+ Build' : '+ Builds', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
          ),
          if (compact)
            PopupMenuButton<String>(
              icon: const Icon(Icons.more_vert_rounded, color: Colors.white70, size: 20),
              color: const Color(0xFF1F2937),
              onSelected: (v) {
                if (p == null) return;
                if (v == 'save') widget.onSaveProject(p);
                if (v == 'download') widget.onExportProject(p);
                if (v == 'publish') _confirmPublish();
                if (v == 'inspector') setState(() => _inspectorOpen = !_inspectorOpen);
              },
              itemBuilder: (_) => [
                const PopupMenuItem(value: 'save', child: Text('Save project')),
                const PopupMenuItem(value: 'download', child: Text('Download code')),
                const PopupMenuItem(value: 'publish', child: Text('Publish app')),
                const PopupMenuItem(value: 'inspector', child: Text('Toggle components')),
              ],
            )
          else
            Padding(
              padding: const EdgeInsets.only(left: 6),
              child: CircleAvatar(
                radius: 15,
                backgroundColor: const Color(0xFF6366F1),
                child: Text(
                  widget.userName.isNotEmpty ? widget.userName[0].toUpperCase() : 'U',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12),
                ),
              ),
            ),
        ],
      ),
    );
  }

  Widget _modeToggle({required bool compact}) {
    return Container(
      padding: const EdgeInsets.all(3),
      decoration: BoxDecoration(
        color: const Color(0xFF1F2937),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          _modeChip('Design', Icons.brush_outlined, _canvasMode == NgmyStudioCanvasMode.design, () {
            setState(() => _canvasMode = NgmyStudioCanvasMode.design);
          }, compact: compact),
          _modeChip('Code', Icons.code_rounded, _canvasMode == NgmyStudioCanvasMode.code, () {
            setState(() => _canvasMode = NgmyStudioCanvasMode.code);
          }, compact: compact),
        ],
      ),
    );
  }

  Widget _modeChip(String label, IconData icon, bool on, VoidCallback tap, {required bool compact}) {
    return Material(
      color: on ? const Color(0xFF374151) : Colors.transparent,
      borderRadius: BorderRadius.circular(8),
      child: InkWell(
        onTap: tap,
        borderRadius: BorderRadius.circular(8),
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: compact ? 8 : 12, vertical: compact ? 6 : 8),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: compact ? 14 : 16, color: on ? Colors.white : Colors.white54),
              if (!compact) ...[
                const SizedBox(width: 6),
                Text(label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: on ? Colors.white : Colors.white54)),
              ],
            ],
          ),
        ),
      ),
    );
  }

  Widget _leftSidebar({required bool compact}) {
    return Container(
      width: 280,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [const Color(0xFF1E3A8A), const Color(0xFF1E40AF).withValues(alpha: 0.92)],
        ),
      ),
      child: SafeArea(
        right: false,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 8, 8),
              child: Row(
                children: [
                  const Text('Menu', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                  const Spacer(),
                  if (compact)
                    IconButton(
                      onPressed: () => setState(() => _sidebarOpen = false),
                      icon: const Icon(Icons.close_rounded, color: Colors.white70),
                    ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Row(
                children: [
                  CircleAvatar(
                    radius: 22,
                    backgroundColor: Colors.white24,
                    child: Text(
                      widget.userName.isNotEmpty ? widget.userName[0].toUpperCase() : 'U',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          widget.userName.isEmpty ? 'User name' : widget.userName,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14),
                        ),
                        Text(
                          'NGMY AI Builder',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 11),
                        ),
                      ],
                    ),
                  ),
                  PopupMenuButton<String>(
                    icon: const Icon(Icons.more_vert_rounded, color: Colors.white70, size: 20),
                    color: const Color(0xFF1E293B),
                    onSelected: (v) {
                      if (v == 'import') widget.onImport();
                    },
                    itemBuilder: (_) => [
                      const PopupMenuItem(value: 'import', child: Text('Import backup')),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.symmetric(horizontal: 10),
                children: [
                  _navTile(NgmyStudioNav.myProjects, Icons.folder_open_rounded, 'My Projects'),
                  _navTile(NgmyStudioNav.buildDesign, Icons.design_services_outlined, 'Build & Design', chevron: true),
                  _navTile(NgmyStudioNav.aiAssistant, Icons.auto_awesome_rounded, 'AI Assistant'),
                  _navTile(NgmyStudioNav.templates, Icons.dashboard_customize_outlined, 'Templates'),
                  _navTile(NgmyStudioNav.componentLibrary, Icons.widgets_outlined, 'Component Library'),
                  _navTile(NgmyStudioNav.integrations, Icons.hub_outlined, 'Integrations'),
                  _navTile(NgmyStudioNav.previewTest, Icons.play_circle_outline_rounded, 'Preview & Test'),
                  _navTile(NgmyStudioNav.publishApp, Icons.rocket_launch_outlined, 'Publish App'),
                  _navTile(NgmyStudioNav.settings, Icons.settings_outlined, 'Settings'),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _navTile(NgmyStudioNav item, IconData icon, String label, {bool chevron = false}) {
    final active = _nav == item;
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Material(
        color: active ? Colors.white.withValues(alpha: 0.14) : Colors.transparent,
        borderRadius: BorderRadius.circular(12),
        child: InkWell(
          onTap: () => _pickNav(item),
          borderRadius: BorderRadius.circular(12),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            child: Row(
              children: [
                Icon(icon, size: 20, color: active ? Colors.white : Colors.white.withValues(alpha: 0.75)),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    label,
                    style: TextStyle(
                      color: active ? Colors.white : Colors.white.withValues(alpha: 0.85),
                      fontWeight: active ? FontWeight.w800 : FontWeight.w600,
                      fontSize: 14,
                    ),
                  ),
                ),
                if (chevron) Icon(Icons.chevron_right_rounded, color: Colors.white.withValues(alpha: 0.5), size: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildFlyout(bool compact) {
    final left = compact ? 288.0 : 280.0;
    final top = compact ? 56.0 : 72.0;
    return Positioned(
      left: left + 8,
      top: top,
      right: compact ? 12 : null,
      child: Material(
        elevation: 12,
        borderRadius: BorderRadius.circular(16),
        color: const Color(0xFF1F2937).withValues(alpha: 0.98),
        child: Container(
          width: compact ? null : 260,
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: Colors.white.withValues(alpha: 0.1)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _flyoutOption(
                'Drag-and-Drop Editor',
                Icons.open_with_rounded,
                _buildMode == NgmyStudioBuildMode.dragDrop,
                () {
                  setState(() => _buildMode = NgmyStudioBuildMode.dragDrop);
                  _openDragDropEditor();
                },
              ),
              const SizedBox(height: 6),
              _flyoutOption(
                'AI Layout Generator',
                Icons.psychology_outlined,
                _buildMode == NgmyStudioBuildMode.aiLayout,
                () {
                  setState(() {
                    _buildMode = NgmyStudioBuildMode.aiLayout;
                    _nav = NgmyStudioNav.aiAssistant;
                    _showBuildFlyout = false;
                  });
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _flyoutOption(String label, IconData icon, bool on, VoidCallback tap) {
    return Material(
      color: on ? const Color(0xFF374151) : Colors.transparent,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: tap,
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
          child: Row(
            children: [
              Icon(icon, color: on ? const Color(0xFF60A5FA) : Colors.white60, size: 22),
              const SizedBox(width: 12),
              Expanded(
                child: Text(label, style: TextStyle(color: on ? Colors.white : Colors.white70, fontWeight: FontWeight.w700, fontSize: 13)),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _centerWorkspace({required bool compact}) {
    if (_nav == NgmyStudioNav.myProjects) return _myProjectsPanel(compact: compact);
    if (_nav == NgmyStudioNav.aiAssistant) {
      return NgmyAppStudioAiPanel(
        project: widget.activeProject,
        apiKey: widget.apiKey,
        email: widget.userEmail,
        config: widget.config,
        user: widget.user,
        isAdmin: widget.isAdmin,
        compact: compact,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        onPersistConfig: widget.onPersistConfig,
        onProjectUpdated: (p) {
          widget.onProjectUpdated(p);
          setState(() {
            _nav = NgmyStudioNav.buildDesign;
            _activeScreenIndex = 0;
          });
        },
      );
    }
    if (_canvasMode == NgmyStudioCanvasMode.code) return _codePanel(compact: compact);

    return LayoutBuilder(
      builder: (context, constraints) {
        return Container(
          color: const Color(0xFF9CA3AF),
          child: Stack(
            children: [
              if (_showGrid) CustomPaint(painter: _GridPainter(), size: Size.infinite),
              Center(
                child: widget.loading
                    ? const CircularProgressIndicator(color: Colors.white)
                    : _phoneCanvas(compact, maxW: constraints.maxWidth, maxH: constraints.maxHeight),
              ),
              Positioned(
                left: 0,
                right: 0,
                bottom: compact ? 8 : 16,
                child: Center(child: _canvasBottomBar(compact)),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _phoneCanvas(bool compact, {required double maxW, required double maxH}) {
    final p = widget.activeProject;
    final phoneW = math.min(compact ? maxW * 0.88 : 300.0, maxW - 24);
    final phoneH = math.min(phoneW * 1.85, maxH - (compact ? 72 : 88));

    if (p == null) {
      return Container(
        width: phoneW,
        height: phoneH,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(compact ? 28 : 36),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 12))],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.phone_iphone_rounded, size: compact ? 36 : 48, color: const Color(0xFF9CA3AF)),
            const SizedBox(height: 12),
            Text('App screen', style: TextStyle(fontWeight: FontWeight.w800, color: const Color(0xFF374151), fontSize: compact ? 14 : 16)),
            const SizedBox(height: 8),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Text('Open a project from My Projects or Templates', textAlign: TextAlign.center, style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
            ),
            const SizedBox(height: 16),
            Wrap(
              alignment: WrapAlignment.center,
              spacing: 8,
              children: [
                FilledButton(onPressed: () => _pickNav(NgmyStudioNav.myProjects), child: const Text('My Projects')),
                OutlinedButton(onPressed: () => setState(() => _showTemplatesOverlay = true), child: const Text('Templates')),
              ],
            ),
          ],
        ),
      );
    }

    final widgets = _activeWidgets();
    final screen = p.screens[_activeScreenIndex.clamp(0, p.screens.length - 1)];

    return GestureDetector(
      onTap: () => widget.onOpenScreenEditor(p, _activeScreenIndex),
      child: Container(
        width: phoneW,
        height: phoneH,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(compact ? 28 : 36),
          border: Border.all(color: Colors.black.withValues(alpha: 0.08), width: 2),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 12))],
        ),
        clipBehavior: Clip.antiAlias,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              height: 44,
              color: const Color(0xFFF3F4F6),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              alignment: Alignment.centerLeft,
              child: Row(
                children: [
                  NgmyAppProjectIcon(project: p, size: 24, fontSize: 12),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(screen.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 13)),
                  ),
                  Icon(Icons.notifications_none_rounded, size: 18, color: Colors.grey.shade600),
                ],
              ),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.all(14),
                children: [
                  for (var i = 0; i < widgets.length; i++)
                    Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: GestureDetector(
                        onTap: () => setState(() => _selectedWidgetIndex = i),
                        child: _canvasWidgetBlock(widgets[i], selected: _selectedWidgetIndex == i),
                      ),
                    ),
                  if (widgets.isEmpty)
                    Container(
                      height: 80,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(color: const Color(0xFFF3F4F6), borderRadius: BorderRadius.circular(12)),
                      child: Text('Tap to edit screen', style: TextStyle(color: Colors.grey.shade600, fontSize: 12)),
                    ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _canvasWidgetBlock(Map<String, dynamic> w, {required bool selected}) {
    final type = (w['type'] ?? 'widget').toString();
    final label = ngmyWidgetTypeLabel(type);
    final text = (w['text'] ?? w['label'] ?? w['title'] ?? '').toString();
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFFE5E7EB),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: selected ? const Color(0xFF2563EB) : Colors.transparent, width: 2),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: Color(0xFF2563EB))),
          if (text.isNotEmpty) ...[
            const SizedBox(height: 4),
            Text(text, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600)),
          ],
        ],
      ),
    );
  }

  Widget _canvasBottomBar(bool compact) {
    Widget btn(IconData icon, VoidCallback? onTap, {bool on = false}) {
      return IconButton(
        onPressed: onTap,
        icon: Icon(icon, size: 20, color: on ? const Color(0xFF2563EB) : const Color(0xFF374151)),
      );
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.95),
        borderRadius: BorderRadius.circular(28),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 12)],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          btn(Icons.home_outlined, _resetCanvasHome, on: _nav == NgmyStudioNav.buildDesign && _activeScreenIndex == 0),
          btn(Icons.grid_view_rounded, () => setState(() => _showGrid = !_showGrid), on: _showGrid),
          btn(Icons.layers_outlined, () => setState(() => _inspectorOpen = !_inspectorOpen), on: _inspectorOpen),
          btn(Icons.history_rounded, _showScreenPicker),
          btn(Icons.settings_outlined, _showSettings),
        ],
      ),
    );
  }

  Widget _myProjectsPanel({required bool compact}) {
    return Container(
      color: const Color(0xFF111827),
      child: widget.loading
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              padding: EdgeInsets.all(compact ? 14 : 20),
              children: [
                Row(
                  children: [
                    Text('My Projects', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: compact ? 18 : 22)),
                    const Spacer(),
                    FilledButton.icon(
                      onPressed: widget.onCreateBlank,
                      icon: const Icon(Icons.add_rounded, size: 18),
                      label: Text(compact ? 'New' : 'New app'),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                if (widget.projects.isEmpty)
                  Center(
                    child: Padding(
                      padding: const EdgeInsets.all(32),
                      child: Text('No projects yet — create one or pick a template.', style: TextStyle(color: Colors.white.withValues(alpha: 0.6))),
                    ),
                  )
                else
                  ...widget.projects.map((p) {
                    final active = widget.activeProject?.id == p.id;
                    return Container(
                      margin: const EdgeInsets.only(bottom: 10),
                      decoration: BoxDecoration(
                        color: active ? const Color(0xFF1E3A8A).withValues(alpha: 0.35) : const Color(0xFF1F2937),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: active ? const Color(0xFF3B82F6) : Colors.white10),
                      ),
                      child: ListTile(
                        leading: NgmyAppProjectIcon(project: p, size: 44, fontSize: 22),
                        title: Text(p.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                        subtitle: Text('${p.screens.length} screens · ${p.status.label}', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
                        trailing: PopupMenuButton<String>(
                          icon: const Icon(Icons.more_horiz_rounded, color: Colors.white54),
                          onSelected: (v) {
                            if (v == 'view') widget.onPreviewRuntime(p);
                            if (v == 'edit') widget.onOpenScreenEditor(p, 0);
                            if (v == 'delete') _confirmDeleteProject(p);
                            if (v == 'canvas') {
                              widget.onSelectProject(p);
                              setState(() => _nav = NgmyStudioNav.buildDesign);
                            }
                          },
                          itemBuilder: (_) => [
                            const PopupMenuItem(value: 'canvas', child: Text('Open in canvas')),
                            const PopupMenuItem(value: 'edit', child: Text('Edit screen')),
                            const PopupMenuItem(value: 'view', child: Text('View app')),
                            const PopupMenuItem(value: 'delete', child: Text('Delete', style: TextStyle(color: Color(0xFFDC2626)))),
                          ],
                        ),
                        onTap: () {
                          widget.onSelectProject(p);
                          setState(() {
                            _nav = NgmyStudioNav.buildDesign;
                            _activeScreenIndex = 0;
                            _selectedWidgetIndex = null;
                          });
                        },
                      ),
                    );
                  }),
              ],
            ),
    );
  }

  Widget _codePanel({required bool compact}) {
    final p = widget.activeProject;
    final code = p == null
        ? '// Open a project to view generated Flutter layout JSON'
        : const JsonEncoder.withIndent('  ').convert(p.toMap());
    return Container(
      color: const Color(0xFF0F172A),
      padding: EdgeInsets.all(compact ? 10 : 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Text('Generated code', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: compact ? 14 : 16)),
              const Spacer(),
              TextButton.icon(
                onPressed: p == null
                    ? null
                    : () {
                        Clipboard.setData(ClipboardData(text: code));
                        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Copied JSON')));
                      },
                icon: const Icon(Icons.copy_rounded, size: 16, color: Colors.white70),
                label: const Text('Copy', style: TextStyle(color: Colors.white70)),
              ),
              TextButton.icon(
                onPressed: p == null ? null : () => widget.onExportProject(p),
                icon: const Icon(Icons.download_rounded, size: 16, color: Color(0xFF60A5FA)),
                label: const Text('Download', style: TextStyle(color: Color(0xFF60A5FA), fontWeight: FontWeight.w700)),
              ),
            ],
          ),
          Expanded(
            child: SingleChildScrollView(
              child: SelectableText(code, style: TextStyle(fontFamily: 'monospace', fontSize: compact ? 10 : 11, color: const Color(0xFFCBD5E1), height: 1.4)),
            ),
          ),
        ],
      ),
    );
  }

  Widget _rightInspector() {
    final widgets = _activeWidgets();
    final entries = widgets.asMap().entries.toList();
    final filtered = _treeQuery.trim().isEmpty
        ? entries
        : entries.where((e) {
            final t = ngmyWidgetTypeLabel((e.value['type'] ?? '').toString()).toLowerCase();
            return t.contains(_treeQuery.toLowerCase());
          }).toList();

    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border(left: BorderSide(color: Colors.black.withValues(alpha: 0.06))),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 8, 0),
            child: Row(
              children: [
                const Text('Components', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                const Spacer(),
                IconButton(
                  icon: const Icon(Icons.close_rounded, size: 20),
                  onPressed: () => setState(() => _inspectorOpen = false),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 8, 14, 8),
            child: TextField(
              decoration: InputDecoration(
                hintText: 'Search',
                prefixIcon: const Icon(Icons.search_rounded, size: 20),
                filled: true,
                fillColor: const Color(0xFFF3F4F6),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                contentPadding: const EdgeInsets.symmetric(vertical: 0),
              ),
              onChanged: (v) => setState(() => _treeQuery = v),
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
              children: [
                _treeNode('Ennox', depth: 0, bold: true),
                _treeNode('Componentrd', depth: 1),
                _treeNode('Drag-and-Drop', depth: 2),
                for (var i = 0; i < filtered.length; i++)
                  _treeNode(
                    ngmyWidgetTypeLabel((filtered[i].value['type'] ?? 'Widget').toString()),
                    depth: 3,
                    selected: _selectedWidgetIndex == filtered[i].key,
                    onTap: () => setState(() => _selectedWidgetIndex = filtered[i].key),
                  ),
                if (widgets.isEmpty) _treeNode('Text Widget', depth: 3, selected: true),
                _treeNode('Sidebar', depth: 3),
                _treeNode('Text', depth: 4),
                _treeNode('Widget', depth: 4),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _treeNode(String label, {required int depth, bool selected = false, bool bold = false, VoidCallback? onTap}) {
    return Material(
      color: selected ? const Color(0xFFDBEAFE) : Colors.transparent,
      borderRadius: BorderRadius.circular(8),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(8),
        child: Padding(
          padding: EdgeInsets.fromLTRB(8.0 + depth * 14, 8, 8, 8),
          child: Row(
            children: [
              Icon(Icons.widgets_outlined, size: 16, color: selected ? const Color(0xFF2563EB) : Colors.grey.shade600),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  label,
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: bold || selected ? FontWeight.w800 : FontWeight.w600,
                    color: selected ? const Color(0xFF1D4ED8) : const Color(0xFF374151),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _templatesOverlay() {
    final size = MediaQuery.sizeOf(context);
    final compact = size.width < 600;
    final cols = compact ? 1 : (size.width < 900 ? 2 : 3);
    return Material(
      color: Colors.black.withValues(alpha: 0.55),
      child: SafeArea(
        child: Center(
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: math.min(size.width - 16, 920), maxHeight: size.height * 0.88),
            child: Container(
              margin: const EdgeInsets.all(12),
              padding: EdgeInsets.fromLTRB(compact ? 14 : 24, compact ? 14 : 20, compact ? 14 : 24, compact ? 14 : 20),
              decoration: BoxDecoration(
                color: const Color(0xFF1F2937).withValues(alpha: 0.98),
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Colors.white.withValues(alpha: 0.12)),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    children: [
                      Text('Project Templates', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: compact ? 18 : 22)),
                      const Spacer(),
                      IconButton(
                        onPressed: () => setState(() {
                          _showTemplatesOverlay = false;
                          if (_nav == NgmyStudioNav.templates) _nav = NgmyStudioNav.buildDesign;
                        }),
                        icon: const Icon(Icons.close_rounded, color: Colors.white70),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Flexible(
                    child: SingleChildScrollView(
                      child: GridView.builder(
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: cols,
                          mainAxisSpacing: 10,
                          crossAxisSpacing: 10,
                          childAspectRatio: compact ? 2.6 : 1.15,
                        ),
                        itemCount: kNgmyStudioShowcaseTemplates.length,
                        itemBuilder: (_, i) => _templateCard(kNgmyStudioShowcaseTemplates[i], compact),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _templateCard(NgmyStudioShowcaseTemplate s, bool compact) {
    return Material(
      color: const Color(0xFF374151),
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        onTap: () {
          final t = _templateById(s.templateId);
          if (t != null) widget.onUseTemplate(t);
          setState(() {
            _showTemplatesOverlay = false;
            _nav = NgmyStudioNav.buildDesign;
          });
        },
        borderRadius: BorderRadius.circular(14),
        child: Padding(
          padding: EdgeInsets.all(compact ? 10 : 12),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: EdgeInsets.all(compact ? 8 : 10),
                decoration: BoxDecoration(color: s.accent.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(10)),
                child: Icon(s.icon, color: s.accent, size: compact ? 22 : 24),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(s.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: compact ? 12 : 13)),
                    const SizedBox(height: 3),
                    Text(s.subtitle, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: compact ? 10 : 11, height: 1.25)),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _GridPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.white.withValues(alpha: 0.08)
      ..strokeWidth = 1;
    const step = 24.0;
    for (var x = 0.0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }
    for (var y = 0.0; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
