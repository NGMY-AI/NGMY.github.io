import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_app_builder_ai.dart';
import 'ngmy_app_builder_icon.dart';
import 'ngmy_app_builder_layout_utils.dart';
import 'ngmy_app_builder_screen_editor.dart';
import 'ngmy_app_builder_cloud.dart';
import 'ngmy_app_builder_guest.dart';
import 'ngmy_app_builder_launch_stub.dart' if (dart.library.html) 'ngmy_app_builder_launch_web.dart';
import 'ngmy_app_builder_open_stub.dart' if (dart.library.html) 'ngmy_app_builder_open_web.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_copilot_storage.dart';
import 'ngmy_app_builder_export.dart';
import 'ngmy_app_builder_runtime.dart';
import 'ngmy_app_builder_runtime_social.dart';
import 'ngmy_app_builder_storage.dart';
import 'ngmy_app_builder_templates.dart';
import 'ngmy_app_builder_urls.dart';
import 'ngmy_app_builder_ai_usage.dart';
import 'ngmy_app_studio_payments.dart';
import 'ngmy_app_studio_dashboard.dart';
import 'ngmy_app_studio_shell.dart';
import 'ngmy_nav.dart';

void ngmyTryOpenPublishedAppFromUrl(
  BuildContext context, {
  required dynamic config,
  String apiKey = '',
  String email = '',
}) {
  final slug = ngmyPublishedAppSlugFromLaunch();
  if (slug == null || slug.isEmpty) return;
  WidgetsBinding.instance.addPostFrameCallback((_) async {
    if (!context.mounted) return;
    var app = await ngmyFindPublishedAppBySlugLocal(slug);
    app ??= await ngmyFetchPublishedAppBySlug(slug);
    if (!context.mounted || app == null) return;
    await ngmyOpenPublishedAppStandalone(app);
  });
}

Future<void> _ngmyShowAppPublicUrlDialog(BuildContext context, NgmyAppProject project) async {
  final refreshed = ngmyRefreshAppProjectPublicUrl(project);
  final url = ngmyAppPublicUrlForSlug(refreshed.slug.isNotEmpty ? refreshed.slug : project.slug);
  if (url.isEmpty) return;
  await showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      title: const Text('Your app is live'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            '"${project.name}" is hosted on ngmy.org as its own app. Share this link — it opens outside NGMY, no login required:',
            style: TextStyle(color: Colors.grey.shade700),
          ),
          const SizedBox(height: 12),
          SelectableText(url, style: const TextStyle(fontWeight: FontWeight.w700, color: Color(0xFF2563EB), fontSize: 13)),
          const SizedBox(height: 10),
          Text('App ID: ${project.slug}', style: const TextStyle(fontSize: 11, color: Colors.grey)),
          if (project.seoDescription.isNotEmpty) ...[
            const SizedBox(height: 10),
            Text('Google description: ${project.seoDescription}', style: const TextStyle(fontSize: 12)),
          ],
        ],
      ),
      actions: [
        TextButton(
          onPressed: () {
            Clipboard.setData(ClipboardData(text: url));
            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied!')));
          },
          child: const Text('Copy link'),
        ),
        FilledButton(
          onPressed: () {
            Navigator.pop(ctx);
            unawaited(ngmyOpenPublishedAppStandalone(refreshed));
          },
          child: const Text('Open live app'),
        ),
      ],
    ),
  );
}

Future<void> showNgmyAppBuilder({
  required BuildContext context,
  required dynamic user,
  required dynamic config,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersistConfig,
  Future<bool> Function(double amount, String description)? onChargeWallet,
}) {
  return NgmyNavigator.push(
    context,
    NgmyAppBuilderScreen(
      user: user,
      config: config,
      onDataChanged: onDataChanged,
      onPersistConfig: onPersistConfig,
      onChargeWallet: onChargeWallet,
    ),
    routeName: 'NgmyAppBuilderScreen',
  );
}

class NgmyAppBuilderScreen extends StatefulWidget {
  final dynamic user;
  final dynamic config;
  final VoidCallback onDataChanged;
  final Future<bool> Function() onPersistConfig;
  final Future<bool> Function(double amount, String description)? onChargeWallet;

  const NgmyAppBuilderScreen({
    super.key,
    required this.user,
    required this.config,
    required this.onDataChanged,
    required this.onPersistConfig,
    this.onChargeWallet,
  });

  @override
  State<NgmyAppBuilderScreen> createState() => _NgmyAppBuilderScreenState();
}

class _NgmyAppBuilderScreenState extends State<NgmyAppBuilderScreen> {
  int _tabIndex = 0;
  List<NgmyAppProject> _mine = [];
  List<NgmyAppProject> _published = [];
  bool _loading = true;
  Set<String> _cloudSavedProjectIds = {};
  NgmyAppProject? _activeProject;

  bool get _isAdmin => widget.user.isAdmin == true;
  String get _email => widget.user.email.toString().toLowerCase().trim();
  String get _apiKey => widget.config.geminiApiKey?.toString() ?? '';

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    setState(() => _loading = true);
    _cloudSavedProjectIds = await NgmyAppStudioCloudSlot.fetchSavedProjectIds(_email);
    final cloudApps = await NgmyAppStudioCloudSlot.pullAllIntoLocal(_email);
    _mine = await ngmyLoadUserAppProjects(_email);
    for (final cloud in cloudApps) {
      if (!_mine.any((p) => p.id == cloud.id)) {
        _mine.insert(0, cloud);
      }
    }
    _published = await ngmyLoadLocalPublishedApps();
    if (mounted) setState(() => _loading = false);
  }

  Future<void> _openEditor(NgmyAppProject project) async {
    final updated = await NgmyNavigator.push<NgmyAppProject>(
      context,
      NgmyAppEditorScreen(
        project: project,
        isAdmin: _isAdmin,
        apiKey: _apiKey,
        email: _email,
        config: widget.config,
        user: widget.user,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        onPersistConfig: widget.onPersistConfig,
      ),
      routeName: 'NgmyAppEditorScreen',
    );
    if (updated != null) {
      await ngmySaveUserAppProject(_email, updated);
      await _reload();
    }
  }

  Future<void> _createBlank() async {
    final p = NgmyAppProject.blank(ownerEmail: _email);
    await ngmySaveUserAppProject(_email, p);
    await _reload();
    if (mounted) setState(() => _activeProject = p);
  }

  Future<void> _useTemplate(NgmyAppTemplate template) async {
    final p = template.build(_email);
    await ngmySaveUserAppProject(_email, p);
    await _reload();
    if (!mounted) return;
    setState(() => _activeProject = p);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('"${template.name}" added to My Projects — edit on the canvas.')),
    );
  }

  Future<void> _saveActiveProject(NgmyAppProject project) async {
    await ngmySaveUserAppProject(_email, project);
    if (mounted) {
      setState(() => _activeProject = project);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('"${project.name}" saved (${project.screens.length} screens).')),
      );
    }
    await _reload();
  }

  Future<void> _deleteProjectFromStudio(NgmyAppProject project) async {
    await ngmyDeleteUserAppProject(_email, project.id);
    if (mounted) {
      if (_activeProject?.id == project.id) setState(() => _activeProject = null);
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('"${project.name}" deleted.')));
    }
    await _reload();
  }

  void _onProjectUpdatedFromStudio(NgmyAppProject project) {
    setState(() => _activeProject = project);
    unawaited(_reload());
  }

  /// Legacy tab UI still references this — dashboard uses inline AI panel instead.
  Future<void> _openAiCopilot({NgmyAppProject? project}) async {
    if (project != null && mounted) setState(() => _activeProject = project);
  }

  Future<void> _previewTemplate(NgmyAppTemplate template) async => _useTemplate(template);

  Future<void> _submitOrPublish(NgmyAppProject project) async {
    if (_isAdmin) {
      final result = await ngmyPublishAppProject(widget.config, _email, project);
      final published = ngmyRefreshAppProjectPublicUrl(result.project);
      await ngmySaveUserAppProject(_email, published);
      await ngmyCachePublishedAppLocally(published);
      await _exportApp(published);
      if (!mounted) return;
      await _ngmyShowAppPublicUrlDialog(context, published);
      final cloudNote = result.cloudWarning == null
          ? 'Your link works on any phone or browser.'
          : '${result.cloudWarning} Link may not open on other devices until publish succeeds online.';
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Published. $cloudNote Backup .ngmy.json downloaded.')),
      );
    } else {
      await ngmySubmitAppForReview(widget.config, _email, project);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Saved on this device. Admin can review on this device.')));
    }
    await _reload();
  }

  Future<void> _exportApp(NgmyAppProject project) async {
    try {
      final msg = await ngmyDownloadAppBundle(project);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Export failed: $e')));
    }
  }

  Future<void> _importApp() async {
    final result = await ngmyPickAndImportAppBundleDetailed(_email);
    if (!mounted) return;
    if (!result.ok) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(result.errorMessage ?? 'Import failed.')));
      return;
    }
    final imported = result.project!;
    await _reload();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('"${imported.name}" restored from backup!')));
    if (mounted) setState(() => _activeProject = imported);
  }

  Future<void> _saveToCloud(NgmyAppProject project) async {
    final isUpdate = _cloudSavedProjectIds.contains(project.id);
    if (!isUpdate && _cloudSavedProjectIds.length >= NgmyAppStudioPayments.maxCloudApps) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Cloud limit: ${NgmyAppStudioPayments.maxCloudApps} apps max. Update an existing cloud app or remove one first.'),
          behavior: SnackBarBehavior.floating,
        ),
      );
      return;
    }
    final charge = widget.onChargeWallet;
    if (charge != null) {
      final ok = await NgmyAppStudioPayments.confirmAndChargeCloudSave(
        context: context,
        user: widget.user,
        config: widget.config,
        email: _email,
        appName: project.name,
        onCharge: (amount, description) async {
          final charged = await charge(amount, description);
          if (charged) widget.onDataChanged();
          return charged;
        },
      );
      if (!ok) return;
      await widget.onPersistConfig();
    }
    final err = await NgmyAppStudioCloudSlot.save(_email, project);
    if (!mounted) return;
    if (err == null) {
      setState(() => _cloudSavedProjectIds = {..._cloudSavedProjectIds, project.id});
      final subNote = NgmyAppStudioPayments.hasActiveSubscription(widget.config, _email)
          ? ' Synced on all your devices.'
          : '';
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('"${project.name}" saved to cloud (${_cloudSavedProjectIds.length}/${NgmyAppStudioPayments.maxCloudApps}).$subNote')),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(err)));
    }
  }

  Future<void> _openPublishedOrPreview(NgmyAppProject project) async {
    if (ngmyProjectHasStandaloneLink(project)) {
      final ok = await ngmyOpenPublishedAppStandalone(project);
      if (!mounted) return;
      if (!ok) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not open live app link. Copy the ngmy.org link and try in a browser.')),
        );
      }
      return;
    }
    NgmyNavigator.push(
      context,
      NgmyAppRuntimeScreen(project: project, apiKey: _apiKey, email: _email),
      routeName: 'NgmyAppRuntimeScreen',
    );
  }

  void _copyUrl(NgmyAppProject project) {
    final url = ngmyResolvedPublicUrl(project);
    if (url.isEmpty) return;
    Clipboard.setData(ClipboardData(text: url));
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('ngmy.org link copied')));
  }

  Future<void> _openScreenFromDashboard(NgmyAppProject project, int screenIndex) async {
    if (screenIndex < 0 || screenIndex >= project.screens.length) return;
    final edited = await NgmyNavigator.push<NgmyAppScreen>(
      context,
      NgmyAppScreenEditorPage(
        screen: project.screens[screenIndex],
        allScreens: project.screens,
        themeColor: project.theme,
        screenIndex: screenIndex,
        projectId: project.id,
        apiKey: _apiKey,
        email: _email,
        config: widget.config,
        user: widget.user,
        isAdmin: _isAdmin,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        onPersistConfig: widget.onPersistConfig,
      ),
      routeName: 'NgmyAppScreenEditorPage',
    );
    if (edited == null || !mounted) return;
    final list = [...project.screens];
    list[screenIndex] = edited;
    final updated = project.copyWith(screens: list);
    await ngmySaveUserAppProject(_email, updated);
    setState(() => _activeProject = updated);
    await _reload();
  }

  Future<void> _openIntegrationsFromDashboard() async {
    if (_activeProject == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Open a project first — then connect Supabase or other backends.')),
      );
      return;
    }
    await _showIntegrationsDialog(_activeProject!);
  }

  Future<void> _showIntegrationsDialog(NgmyAppProject project) async {
    var db = project.database;
    final urlC = TextEditingController(text: db.projectUrl);
    final keyC = TextEditingController(text: db.apiKey);
    final pathC = TextEditingController(text: db.collectionPath);
    final notesC = TextEditingController(text: db.notes);
    var provider = db.provider;
    var updated = project;
    await showDialog<void>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setST) => AlertDialog(
          backgroundColor: const Color(0xFF1F2937),
          title: const Text('Integrations', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                DropdownButtonFormField<NgmyAppDatabaseProvider>(
                  value: provider,
                  dropdownColor: const Color(0xFF374151),
                  style: const TextStyle(color: Colors.white),
                  decoration: const InputDecoration(labelText: 'Database', labelStyle: TextStyle(color: Colors.white70)),
                  items: NgmyAppDatabaseProvider.values
                      .map((p) => DropdownMenuItem(value: p, child: Text(p.label, style: const TextStyle(color: Colors.white))))
                      .toList(),
                  onChanged: (v) => setST(() => provider = v ?? NgmyAppDatabaseProvider.none),
                ),
                const SizedBox(height: 8),
                TextField(controller: urlC, style: const TextStyle(color: Colors.white), decoration: const InputDecoration(labelText: 'Project URL / API endpoint', labelStyle: TextStyle(color: Colors.white70))),
                TextField(controller: keyC, style: const TextStyle(color: Colors.white), decoration: const InputDecoration(labelText: 'API key (optional)', labelStyle: TextStyle(color: Colors.white70))),
                TextField(controller: pathC, style: const TextStyle(color: Colors.white), decoration: const InputDecoration(labelText: 'Collection / table path', labelStyle: TextStyle(color: Colors.white70))),
                TextField(controller: notesC, maxLines: 2, style: const TextStyle(color: Colors.white), decoration: const InputDecoration(labelText: 'Notes', labelStyle: TextStyle(color: Colors.white70))),
              ],
            ),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
            FilledButton(
              onPressed: () {
                updated = project.copyWith(
                  database: NgmyAppDatabaseConfig(
                    provider: provider,
                    projectUrl: urlC.text.trim(),
                    apiKey: keyC.text.trim(),
                    collectionPath: pathC.text.trim(),
                    notes: notesC.text.trim(),
                  ),
                );
                Navigator.pop(ctx);
              },
              child: const Text('Save'),
            ),
          ],
        ),
      ),
    );
    urlC.dispose();
    keyC.dispose();
    pathC.dispose();
    notesC.dispose();
    await ngmySaveUserAppProject(_email, updated);
    if (mounted) {
      setState(() => _activeProject = updated);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Integrations saved.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final userName = (widget.user.username ?? widget.user.email ?? '').toString().trim();
    return NgmyAppStudioDashboard(
      userName: userName.isEmpty ? 'User name' : userName,
      userEmail: _email,
      isDark: isDark,
      loading: _loading,
      projects: _mine,
      published: _published,
      activeProject: _activeProject,
      isAdmin: _isAdmin,
      apiKey: _apiKey,
      config: widget.config,
      user: widget.user,
      onChargeWallet: widget.onChargeWallet,
      onDataChanged: widget.onDataChanged,
      onPersistConfig: widget.onPersistConfig,
      onExit: () => NgmyNavigator.pop(context),
      onSelectProject: (p) => setState(() => _activeProject = p),
      onCreateBlank: _createBlank,
      onUseTemplate: _useTemplate,
      onImport: _importApp,
      onPreviewRuntime: (p) => NgmyNavigator.push(
        context,
        NgmyAppRuntimeScreen(project: p, apiKey: _apiKey, email: _email),
        routeName: 'NgmyAppRuntimeScreen',
      ),
      onOpenPublishedApp: (p) => ngmyOpenPublishedAppStandalone(p),
      onPublish: (p) => _submitOrPublish(p),
      onIntegrations: () => unawaited(_openIntegrationsFromDashboard()),
      onOpenScreenEditor: (p, i) => unawaited(_openScreenFromDashboard(p, i)),
      onProjectUpdated: _onProjectUpdatedFromStudio,
      onSaveProject: _saveActiveProject,
      onExportProject: _exportApp,
      onDeleteProject: _deleteProjectFromStudio,
    );
  }

  // Legacy tab UI kept for reference — dashboard replaces shell below.
  Widget _legacyAppStudioShell(bool isDark) {
    final bg = isDark ? const Color(0xFF07080F) : const Color(0xFFE8EDF5);
    return Scaffold(
      backgroundColor: bg,
      body: Column(
        children: [
          NgmyAppStudioTopBar(
            isDark: isDark,
            onBack: () => NgmyNavigator.pop(context),
          ),
          Expanded(
            child: _loading
                ? const Center(child: CircularProgressIndicator())
                : NgmyAppStudioContentFrame(
                    isDark: isDark,
                    child: IndexedStack(
                      index: _tabIndex,
                      children: [
                        _myAppsTab(isDark),
                        _createTab(isDark),
                        _templatesTab(isDark),
                        _galleryTab(isDark),
                        _copilotTab(isDark),
                      ],
                    ),
                  ),
          ),
          NgmyAppStudioBottomNav(
            index: _tabIndex,
            isDark: isDark,
            onChanged: (i) => setState(() => _tabIndex = i),
          ),
        ],
      ),
    );
  }

  Widget _myAppsTab(bool isDark) {
    if (_mine.isEmpty) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(28),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFF6366F1), Color(0xFF8B5CF6)]),
                  borderRadius: BorderRadius.circular(24),
                ),
                child: const Icon(Icons.rocket_launch_rounded, size: 48, color: Colors.white),
              ),
              const SizedBox(height: 16),
              const Text('Build your first app', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 8),
              Text('Tap Create or talk to AI — working forms, lists, and settings included.', textAlign: TextAlign.center, style: TextStyle(color: isDark ? Colors.white54 : Colors.black54)),
              const SizedBox(height: 20),
              FilledButton.icon(onPressed: () => setState(() => _tabIndex = 1), icon: const Icon(Icons.add_rounded), label: const Text('Get started')),
            ],
          ),
        ),
      );
    }
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: _mine.length,
      itemBuilder: (_, i) {
        final p = _mine[i];
        return Container(
          margin: const EdgeInsets.only(bottom: 12),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF1E293B) : Colors.white,
            borderRadius: BorderRadius.circular(18),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 12, offset: const Offset(0, 4))],
          ),
          child: ListTile(
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
            leading: NgmyAppProjectIcon(project: p, size: 48, fontSize: 24),
            title: Row(
              children: [
                Expanded(child: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w800))),
                if (_cloudSavedProjectIds.contains(p.id))
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                    decoration: BoxDecoration(
                      color: const Color(0xFF10B981).withValues(alpha: 0.15),
                      borderRadius: BorderRadius.circular(6),
                    ),
                    child: const Text('CLOUD', style: TextStyle(fontSize: 8, fontWeight: FontWeight.w900, color: Color(0xFF10B981))),
                  ),
              ],
            ),
            subtitle: Text(
              ngmyResolvedPublicUrl(p).isNotEmpty
                  ? '${p.status.label} · ${p.screens.length} screens · ngmy.org link'
                  : '${p.status.label} · ${p.screens.length} screens',
            ),
            trailing: PopupMenuButton<String>(
              onSelected: (v) async {
                if (v == 'edit') await _openEditor(p);
                if (v == 'ai') await _openAiCopilot(project: p);
                if (v == 'cloud') await _saveToCloud(p);
                if (v == 'preview') {
                  if (ngmyProjectHasStandaloneLink(p)) {
                    unawaited(_openPublishedOrPreview(p));
                  } else {
                    NgmyNavigator.push(context, NgmyAppRuntimeScreen(project: p, apiKey: _apiKey, email: _email), routeName: 'NgmyAppRuntimeScreen');
                  }
                }
                if (v == 'open') unawaited(ngmyOpenPublishedAppStandalone(p));
                if (v == 'copy' && ngmyResolvedPublicUrl(p).isNotEmpty) _copyUrl(p);
                if (v == 'export') await _exportApp(p);
                if (v == 'publish') await _submitOrPublish(p);
                if (v == 'delete') {
                  await ngmyDeleteUserAppProject(_email, p.id);
                  await _reload();
                }
              },
              itemBuilder: (_) => [
                const PopupMenuItem(value: 'edit', child: Text('Edit')),
                const PopupMenuItem(value: 'ai', child: Text('Talk to AI Copilot')),
                PopupMenuItem(
                  value: 'cloud',
                  child: Text(
                    _cloudSavedProjectIds.contains(p.id)
                        ? 'Update cloud save'
                        : 'Save to cloud (${_cloudSavedProjectIds.length}/${NgmyAppStudioPayments.maxCloudApps})',
                  ),
                ),
                const PopupMenuItem(value: 'preview', child: Text('Preview in builder')),
                if (ngmyResolvedPublicUrl(p).isNotEmpty) const PopupMenuItem(value: 'open', child: Text('Open live app')),
                if (ngmyResolvedPublicUrl(p).isNotEmpty) const PopupMenuItem(value: 'copy', child: Text('Copy ngmy.org link')),
                const PopupMenuItem(value: 'export', child: Text('Download backup (.ngmy.json)')),
                PopupMenuItem(value: 'publish', child: Text(_isAdmin ? 'Publish now' : 'Submit for review')),
                const PopupMenuItem(value: 'delete', child: Text('Delete')),
              ],
            ),
            onTap: () => _openEditor(p),
          ),
        );
      },
    );
  }

  Widget _createTab(bool isDark) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Center(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              decoration: BoxDecoration(
                gradient: const LinearGradient(colors: [Color(0xFF6366F1), Color(0xFF8B5CF6)]),
                borderRadius: BorderRadius.circular(30),
                boxShadow: [BoxShadow(color: const Color(0xFF6366F1).withValues(alpha: 0.25), blurRadius: 12, offset: const Offset(0, 4))],
              ),
              child: const Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 18),
                  SizedBox(width: 8),
                  Text('AI App Studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                ],
              ),
            ),
          ),
          const SizedBox(height: 14),
          Text(
            'Describe your app — Bolt builds forms, lists, settings, dark/light mode, and workouts.',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 12, height: 1.35, color: isDark ? Colors.white60 : Colors.black54),
          ),
          const SizedBox(height: 16),
          Material(
            color: isDark ? const Color(0xFF1E293B) : Colors.white,
            borderRadius: BorderRadius.circular(18),
            child: InkWell(
              onTap: () => _openAiCopilot(),
              borderRadius: BorderRadius.circular(18),
              child: Padding(
                padding: const EdgeInsets.all(18),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(color: const Color(0xFFF59E0B).withValues(alpha: 0.15), borderRadius: BorderRadius.circular(14)),
                      child: const Icon(Icons.mic_rounded, color: Color(0xFFF59E0B), size: 28),
                    ),
                    const SizedBox(width: 14),
                    const Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Talk to Bolt AI', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                          SizedBox(height: 4),
                          Text('"Build a venue manager with settings that work"', style: TextStyle(fontSize: 12, color: Colors.grey)),
                        ],
                      ),
                    ),
                    const Icon(Icons.arrow_forward_ios_rounded, size: 16),
                  ],
                ),
              ),
            ),
          ),
          const SizedBox(height: 12),
          OutlinedButton.icon(
            onPressed: _createBlank,
            icon: const Icon(Icons.code_rounded),
            label: const Text('Blank canvas + Code Studio'),
            style: OutlinedButton.styleFrom(minimumSize: const Size(double.infinity, 52), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
          ),
          const SizedBox(height: 12),
          OutlinedButton.icon(
            onPressed: _importApp,
            icon: const Icon(Icons.upload_file_rounded),
            label: const Text('Import app from backup file'),
            style: OutlinedButton.styleFrom(minimumSize: const Size(double.infinity, 52), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
          ),
          const SizedBox(height: 8),
          Text(
            'Save up to ${NgmyAppStudioPayments.maxCloudApps} apps to NGMY cloud with a monthly subscription — syncs on every device. Download .ngmy.json backups anytime.',
            style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54, height: 1.35),
          ),
          const SizedBox(height: 24),
          Text('What works now', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : Colors.black87)),
          const SizedBox(height: 12),
          _featureRow(Icons.check_circle_rounded, 'Forms that save data (venues, orders, check-ins)'),
          _featureRow(Icons.check_circle_rounded, 'Lists that show your saved items'),
          _featureRow(Icons.check_circle_rounded, 'Settings toggles that actually persist'),
          _featureRow(Icons.check_circle_rounded, 'Interactive workout plans with progress'),
          _featureRow(Icons.link_rounded, 'Unique ngmy.org link when published'),
        ],
      ),
    );
  }

  Widget _templatesTab(bool isDark) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Text(
          'Tap to preview — nothing is saved until you tap "Save to My Apps".',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54, height: 1.35),
        ),
        const SizedBox(height: 14),
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 14, crossAxisSpacing: 14, childAspectRatio: 0.72),
          itemCount: kNgmyAppTemplates.length,
          itemBuilder: (_, i) {
            final t = kNgmyAppTemplates[i];
            final color = Color(t.themeColor);
            return Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () => _previewTemplate(t),
                borderRadius: BorderRadius.circular(22),
                child: Container(
                  decoration: BoxDecoration(
                    color: isDark ? const Color(0xFF1E293B) : Colors.white,
                    borderRadius: BorderRadius.circular(22),
                    border: Border.all(color: color.withValues(alpha: 0.28)),
                    boxShadow: [BoxShadow(color: color.withValues(alpha: 0.12), blurRadius: 16, offset: const Offset(0, 8))],
                  ),
                  clipBehavior: Clip.antiAlias,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Container(
                        height: 56,
                        padding: const EdgeInsets.symmetric(horizontal: 14),
                        decoration: BoxDecoration(
                          gradient: LinearGradient(colors: [color, color.withValues(alpha: 0.72)]),
                        ),
                        child: Row(
                          children: [
                            Text(t.icon, style: const TextStyle(fontSize: 26)),
                            const Spacer(),
                            if (t.badge.isNotEmpty)
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.22), borderRadius: BorderRadius.circular(8)),
                                child: Text(t.badge, style: const TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: Colors.white)),
                              ),
                          ],
                        ),
                      ),
                      Expanded(
                        child: Padding(
                          padding: const EdgeInsets.all(14),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(t.name, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: isDark ? Colors.white : Colors.black87)),
                              const SizedBox(height: 6),
                              Text(
                                t.description,
                                maxLines: 3,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54, height: 1.35),
                              ),
                              const Spacer(),
                              Row(
                                children: [
                                  Icon(Icons.play_circle_fill_rounded, size: 16, color: color),
                                  const SizedBox(width: 4),
                                  Text('Preview template', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: color)),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ],
    );
  }

  Widget _featureRow(IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 18, color: const Color(0xFF10B981)),
          const SizedBox(width: 10),
          Expanded(child: Text(text, style: const TextStyle(fontSize: 13, height: 1.35))),
        ],
      ),
    );
  }

  Widget _galleryTab(bool isDark) {
    if (_published.isEmpty) {
      return Center(
        child: Text(
          _isAdmin ? 'Publish an app from My Apps to fill the gallery.' : 'No published apps yet. Check back soon!',
          textAlign: TextAlign.center,
          style: TextStyle(color: isDark ? Colors.white54 : Colors.black54),
        ),
      );
    }
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: _published.length,
      itemBuilder: (_, i) {
        final p = _published[i];
        return Card(
          child: ListTile(
            leading: CircleAvatar(backgroundColor: p.theme, child: const Icon(Icons.star_rounded, color: Colors.white)),
            title: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w800)),
            subtitle: Text(
              ngmyResolvedPublicUrl(p).isNotEmpty
                  ? ngmyResolvedPublicUrl(p)
                  : (p.tagline.isEmpty ? 'by ${p.ownerEmail}' : p.tagline),
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
            trailing: IconButton(
              icon: const Icon(Icons.link_rounded),
              onPressed: ngmyResolvedPublicUrl(p).isEmpty ? null : () => _copyUrl(p),
            ),
            onTap: () => _openPublishedOrPreview(p),
          ),
        );
      },
    );
  }

  Widget _copilotTab(bool isDark) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Container(
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(
            gradient: const LinearGradient(colors: [Color(0xFFF59E0B), Color(0xFFEA580C)]),
            borderRadius: BorderRadius.circular(20),
          ),
          child: InkWell(
            onTap: () => _openAiCopilot(),
            child: const Row(
              children: [
                CircleAvatar(radius: 28, backgroundColor: Colors.white24, child: Icon(Icons.construction_rounded, color: Colors.white, size: 28)),
                SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Bolt — AI Coder', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                      SizedBox(height: 4),
                      Text('Build working apps: "Add venue form that saves", "Make settings toggles work"', style: TextStyle(color: Colors.white, fontSize: 12)),
                    ],
                  ),
                ),
                Icon(Icons.arrow_forward_rounded, color: Colors.white),
              ],
            ),
          ),
        ),
        const SizedBox(height: 16),
        Text('AI Team', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : Colors.black87)),
        const SizedBox(height: 10),
        ...kNgmyAppBuilderActors.map((actor) {
          return Container(
            margin: const EdgeInsets.only(bottom: 10),
            decoration: BoxDecoration(
              color: isDark ? const Color(0xFF1E293B) : Colors.white,
              borderRadius: BorderRadius.circular(16),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.05), blurRadius: 8)],
            ),
            child: ListTile(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              leading: Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(color: actor.color.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
                child: Icon(actor.icon, color: actor.color),
              ),
              title: Text(actor.name, style: const TextStyle(fontWeight: FontWeight.w800)),
              subtitle: Text('${actor.role} · ${actor.description}', maxLines: 2, overflow: TextOverflow.ellipsis),
              trailing: Icon(Icons.chat_bubble_outline_rounded, color: actor.color),
              onTap: () {
                NgmyNavigator.push(
                  context,
                  NgmyAppBuilderActorChatScreen(actor: actor, apiKey: _apiKey, email: _email),
                  routeName: 'NgmyAppBuilderActorChatScreen',
                );
              },
            ),
          );
        }),
      ],
    );
  }
}

class NgmyAppEditorScreen extends StatefulWidget {
  final NgmyAppProject project;
  final bool isAdmin;
  final String apiKey;
  final String email;
  final dynamic config;
  final dynamic user;
  final Future<bool> Function(double amount, String description)? onChargeWallet;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

  const NgmyAppEditorScreen({
    super.key,
    required this.project,
    required this.isAdmin,
    required this.apiKey,
    required this.email,
    this.config,
    this.user,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
  });

  @override
  State<NgmyAppEditorScreen> createState() => _NgmyAppEditorScreenState();
}

class _NgmyAppEditorScreenState extends State<NgmyAppEditorScreen> {
  late NgmyAppProject _project;
  late TextEditingController _nameC;
  late TextEditingController _taglineC;
  late TextEditingController _iconC;

  @override
  void initState() {
    super.initState();
    _project = widget.project;
    _nameC = TextEditingController(text: _project.name);
    _taglineC = TextEditingController(text: _project.tagline);
    _iconC = TextEditingController(text: _project.appIcon);
  }

  @override
  void dispose() {
    _nameC.dispose();
    _taglineC.dispose();
    _iconC.dispose();
    super.dispose();
  }

  void _saveLocal() {
    setState(() {
      _project = _project.copyWith(
        name: _nameC.text.trim(),
        tagline: _taglineC.text.trim(),
        appIcon: _iconC.text.trim(),
      );
    });
  }

  Future<void> _persistAndPop() async {
    _saveLocal();
    await ngmySaveUserAppProject(widget.email, _project);
    if (mounted) Navigator.pop(context, _project);
  }

  Future<void> _exportCurrent() async {
    _saveLocal();
    await ngmySaveUserAppProject(widget.email, _project);
    final msg = await ngmyDownloadAppBundle(_project);
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _pickAppIcon() async {
    final img = await ImagePicker().pickImage(source: ImageSource.gallery, imageQuality: 88, maxWidth: 256, maxHeight: 256);
    if (img == null || !mounted) return;
    final bytes = await img.readAsBytes();
    if (!mounted) return;
    setState(() {
      _iconC.text = '$kNgmyAppIconImagePrefix${base64Encode(bytes)}';
      _saveLocal();
    });
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Custom icon uploaded'), behavior: SnackBarBehavior.floating));
  }

  void _clearAppIconImage() {
    if (!_project.hasUploadedIconImage) return;
    setState(() {
      _iconC.text = '🚀';
      _saveLocal();
    });
  }

  Future<void> _openScreenEditor(int index) async {
    final s = _project.screens[index];
    final edited = await NgmyNavigator.push<NgmyAppScreen>(
      context,
      NgmyAppScreenEditorPage(
        screen: s,
        allScreens: _project.screens,
        themeColor: _project.theme,
        screenIndex: index,
        projectId: _project.id,
        apiKey: widget.apiKey,
        email: widget.email,
        config: widget.config,
        user: widget.user,
        isAdmin: widget.isAdmin,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        onPersistConfig: widget.onPersistConfig,
      ),
      routeName: 'NgmyAppScreenEditorPage',
    );
    if (edited != null && mounted) {
      final list = [..._project.screens];
      list[index] = edited;
      setState(() => _project = _project.copyWith(screens: list));
    }
  }

  Future<void> _quickAddScreen(String kind) async {
    final screen = ngmyQuickAddScreen(kind, _project);
    final screens = [..._project.screens, screen];
    setState(() => _project = _project.copyWith(screens: screens));
    if (!mounted) return;
    final label = switch (kind) {
      'form' => 'Form screen added — saves data to your app',
      'list' => 'List screen added — shows saved items',
      'settings' => 'Settings screen added — toggles work in preview',
      _ => 'Menu screen added — links to your screens',
    };
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(label), behavior: SnackBarBehavior.floating));
    await _openScreenEditor(screens.length - 1);
  }

  Future<void> _openCopilot() async {
    final updated = await NgmyNavigator.push<NgmyAppProject>(
      context,
      NgmyAppBuilderCopilotScreen(
        project: _project,
        apiKey: widget.apiKey,
        email: widget.email,
        config: widget.config,
        user: widget.user,
        isAdmin: widget.isAdmin,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        onPersistConfig: widget.onPersistConfig,
      ),
      routeName: 'NgmyAppBuilderCopilotScreen',
    );
    if (updated != null) {
      setState(() {
        _project = updated;
        _nameC.text = updated.name;
        _taglineC.text = updated.tagline;
      });
    }
  }

  Future<void> _editDatabase() async {
    var db = _project.database;
    final urlC = TextEditingController(text: db.projectUrl);
    final keyC = TextEditingController(text: db.apiKey);
    final pathC = TextEditingController(text: db.collectionPath);
    final notesC = TextEditingController(text: db.notes);
    var provider = db.provider;
    await showDialog<void>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setST) => AlertDialog(
          title: const Text('Connect database'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                DropdownButtonFormField<NgmyAppDatabaseProvider>(
                  value: provider,
                  decoration: const InputDecoration(labelText: 'Database'),
                  items: NgmyAppDatabaseProvider.values
                      .map((p) => DropdownMenuItem(value: p, child: Text(p.label)))
                      .toList(),
                  onChanged: (v) => setST(() => provider = v ?? NgmyAppDatabaseProvider.none),
                ),
                const SizedBox(height: 8),
                TextField(controller: urlC, decoration: const InputDecoration(labelText: 'Project URL / API endpoint')),
                TextField(controller: keyC, decoration: const InputDecoration(labelText: 'API key (optional)')),
                TextField(controller: pathC, decoration: const InputDecoration(labelText: 'Collection / table path')),
                TextField(controller: notesC, maxLines: 2, decoration: const InputDecoration(labelText: 'Notes')),
              ],
            ),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
            FilledButton(
              onPressed: () {
                setState(() {
                  _project = _project.copyWith(
                    database: NgmyAppDatabaseConfig(
                      provider: provider,
                      projectUrl: urlC.text.trim(),
                      apiKey: keyC.text.trim(),
                      collectionPath: pathC.text.trim(),
                      notes: notesC.text.trim(),
                    ),
                  );
                });
                Navigator.pop(ctx);
              },
              child: const Text('Save'),
            ),
          ],
        ),
      ),
    );
    urlC.dispose();
    keyC.dispose();
    pathC.dispose();
    notesC.dispose();
  }

  Widget _editorCard({required Widget child, required bool isDark}) {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1E293B) : Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: isDark ? Colors.white10 : Colors.grey.shade200),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.15 : 0.04), blurRadius: 10, offset: const Offset(0, 3))],
      ),
      child: child,
    );
  }

  Future<void> _runAiReview() async {
    _saveLocal();
    if (!mounted) return;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        backgroundColor: isDark ? const Color(0xFF1E293B) : Colors.white,
        content: Row(
          children: [
            const CircularProgressIndicator(color: Color(0xFF10B981)),
            const SizedBox(width: 16),
            Expanded(child: Text('Sage is reviewing your app…', style: TextStyle(color: isDark ? Colors.white : Colors.black87))),
          ],
        ),
      ),
    );
    String review;
    try {
      final actor = kNgmyAppBuilderActors.firstWhere((a) => a.id == 'reviewer');
      review = await ngmyAppBuilderAiChat(
        apiKey: widget.apiKey,
        actor: actor,
        userMessage: 'Review this app for publish readiness. List issues and a score 0-100.',
        project: _project,
      );
    } catch (e) {
      review = 'Review failed: $e';
    }
    if (!mounted) return;
    Navigator.of(context, rootNavigator: true).pop();
    await showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: isDark ? const Color(0xFF1E293B) : Colors.white,
        title: Text('Sage Review', style: TextStyle(color: isDark ? Colors.white : Colors.black87)),
        content: SingleChildScrollView(child: Text(review, style: TextStyle(color: isDark ? Colors.white70 : Colors.black87))),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('OK'))],
      ),
    );
  }

  String _screenWidgetSummary(NgmyAppScreen s) {
    final children = ngmyLayoutChildren(ngmyScreenEnsureEditable(s));
    if (children.isEmpty) return s.kind.label;
    final types = children.map((w) => ngmyWidgetTypeLabel((w['type'] ?? '').toString())).take(3).join(' · ');
    final extra = children.length > 3 ? ' +${children.length - 3}' : '';
    return '$types$extra';
  }

  Widget _buildVisualEditor(bool isDark) {
    final theme = _project.theme;
    final subText = isDark ? Colors.white60 : Colors.grey.shade600;
    final titleColor = isDark ? Colors.white : Colors.black87;
    final fieldFill = isDark ? const Color(0xFF111827) : Colors.grey.shade50;
    return ListView(
      padding: const EdgeInsets.fromLTRB(12, 12, 12, 100),
      children: [
        if (ngmyResolvedPublicUrl(_project).isNotEmpty)
          _editorCard(
            isDark: isDark,
            child: ListTile(
              contentPadding: EdgeInsets.zero,
              leading: Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(color: const Color(0xFF2563EB).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12)),
                child: const Icon(Icons.public_rounded, color: Color(0xFF2563EB)),
              ),
              title: Text('ngmy.org link', style: TextStyle(fontWeight: FontWeight.w800, color: titleColor)),
              subtitle: Text(ngmyResolvedPublicUrl(_project), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: subText)),
              trailing: IconButton(
                icon: const Icon(Icons.copy_rounded),
                onPressed: () {
                  final link = ngmyResolvedPublicUrl(_project);
                  Clipboard.setData(ClipboardData(text: link));
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('ngmy.org link copied!')));
                },
              ),
            ),
          ),
        _editorCard(
          isDark: isDark,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  NgmyAppProjectIcon(project: _project.copyWith(appIcon: _iconC.text.trim()), size: 56, fontSize: 28),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('App identity', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: theme)),
                        const SizedBox(height: 4),
                        Text(_nameC.text.trim().isEmpty ? 'Untitled app' : _nameC.text.trim(), style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: titleColor)),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              TextField(
                controller: _nameC,
                style: TextStyle(color: titleColor),
                decoration: InputDecoration(
                  labelText: 'App name',
                  filled: true,
                  fillColor: fieldFill,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                ),
                onChanged: (_) => _saveLocal(),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _taglineC,
                style: TextStyle(color: titleColor),
                decoration: InputDecoration(
                  labelText: 'Tagline / Google description',
                  filled: true,
                  fillColor: fieldFill,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                ),
                onChanged: (_) => _saveLocal(),
              ),
              const SizedBox(height: 14),
              Text('App icon', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: subText)),
              const SizedBox(height: 8),
              Row(
                children: [
                  for (final e in const ['🚀', '✨', '💎'])
                    Padding(
                      padding: const EdgeInsets.only(right: 8),
                      child: Material(
                        color: _iconC.text == e ? theme.withValues(alpha: 0.15) : Colors.grey.shade100,
                        borderRadius: BorderRadius.circular(14),
                        child: InkWell(
                          onTap: () {
                            _iconC.text = e;
                            _saveLocal();
                          },
                          borderRadius: BorderRadius.circular(14),
                          child: SizedBox(width: 52, height: 52, child: Center(child: Text(e, style: const TextStyle(fontSize: 26)))),
                        ),
                      ),
                    ),
                  OutlinedButton.icon(
                    onPressed: _pickAppIcon,
                    icon: const Icon(Icons.upload_rounded, size: 18),
                    label: const Text('Upload'),
                  ),
                  if (_iconC.text.startsWith(kNgmyAppIconImagePrefix))
                    IconButton(
                      tooltip: 'Remove custom image',
                      onPressed: _clearAppIconImage,
                      icon: Icon(Icons.close_rounded, color: Colors.red.shade400),
                    ),
                ],
              ),
            ],
          ),
        ),
        _editorCard(
          isDark: isDark,
          child: ListTile(
            contentPadding: EdgeInsets.zero,
            leading: Icon(Icons.storage_rounded, color: theme),
            title: Text('External database', style: TextStyle(fontWeight: FontWeight.w800, color: titleColor)),
            subtitle: Text(_project.database.isConnected ? _project.database.provider.label : 'Optional — Firebase, Supabase, MongoDB', style: TextStyle(color: subText)),
            trailing: const Icon(Icons.chevron_right_rounded),
            onTap: _editDatabase,
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(left: 4, bottom: 8, top: 4),
          child: Text('Quick add screens', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: titleColor)),
        ),
        Text('Ready-made screens with forms, lists, and navigation — opens the screen studio.', style: TextStyle(fontSize: 12, color: subText)),
        const SizedBox(height: 10),
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: Row(
            children: [
              _QuickAddTile(isDark: isDark, theme: theme, icon: Icons.edit_note_rounded, label: 'Form', subtitle: 'Save data', onTap: () => _quickAddScreen('form')),
              _QuickAddTile(isDark: isDark, theme: theme, icon: Icons.list_alt_rounded, label: 'List', subtitle: 'Show items', onTap: () => _quickAddScreen('list')),
              _QuickAddTile(isDark: isDark, theme: theme, icon: Icons.dashboard_rounded, label: 'Menu', subtitle: 'Navigation', onTap: () => _quickAddScreen('menu')),
              _QuickAddTile(isDark: isDark, theme: theme, icon: Icons.tune_rounded, label: 'Settings', subtitle: 'Toggles', onTap: () => _quickAddScreen('settings')),
            ],
          ),
        ),
        const SizedBox(height: 18),
        Row(
          children: [
            Text('Screens', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: titleColor)),
            const Spacer(),
            Text('Drag ≡ to reorder', style: TextStyle(fontSize: 11, color: subText)),
          ],
        ),
        const SizedBox(height: 8),
        ReorderableListView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          buildDefaultDragHandles: false,
          itemCount: _project.screens.length,
          onReorder: (oldIndex, newIndex) {
            setState(() {
              final list = [..._project.screens];
              if (newIndex > oldIndex) newIndex -= 1;
              final item = list.removeAt(oldIndex);
              list.insert(newIndex, item);
              _project = _project.copyWith(screens: list);
            });
          },
          itemBuilder: (context, e) {
            final s = _project.screens[e];
            final isHome = e == 0;
            return Container(
              key: ValueKey(s.id),
              margin: const EdgeInsets.only(bottom: 8),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1E293B) : Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: isHome ? theme.withValues(alpha: 0.35) : (isDark ? Colors.white10 : Colors.grey.shade200), width: isHome ? 1.5 : 1),
              ),
              child: Material(
                color: Colors.transparent,
                child: InkWell(
                  borderRadius: BorderRadius.circular(16),
                  onTap: () => _openScreenEditor(e),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    child: Row(
                      children: [
                        ReorderableDragStartListener(
                          index: e,
                          child: Icon(Icons.drag_handle_rounded, color: isDark ? Colors.white38 : Colors.grey.shade400),
                        ),
                        const SizedBox(width: 8),
                        Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(color: theme.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10)),
                          child: Icon(s.kind.icon, color: theme, size: 20),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                children: [
                                  Expanded(child: Text(s.title, style: TextStyle(fontWeight: FontWeight.w800, color: titleColor))),
                                  if (isHome)
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                                      decoration: BoxDecoration(color: theme.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(6)),
                                      child: Text('HOME', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: theme)),
                                    ),
                                ],
                              ),
                              const SizedBox(height: 2),
                              Text(_screenWidgetSummary(s), style: TextStyle(fontSize: 12, color: subText)),
                            ],
                          ),
                        ),
                        IconButton(icon: Icon(Icons.edit_rounded, size: 20, color: theme), onPressed: () => _openScreenEditor(e)),
                        IconButton(
                          icon: Icon(Icons.delete_outline_rounded, size: 20, color: Colors.red.shade300),
                          onPressed: _project.screens.length <= 1
                              ? null
                              : () => setState(() {
                                    final list = [..._project.screens]..removeAt(e);
                                    _project = _project.copyWith(screens: list);
                                  }),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          },
        ),
        const SizedBox(height: 8),
        OutlinedButton.icon(
          onPressed: _addNewScreen,
          icon: const Icon(Icons.add_rounded),
          label: const Text('Add blank screen'),
          style: OutlinedButton.styleFrom(minimumSize: const Size(double.infinity, 48)),
        ),
        const SizedBox(height: 16),
        FilledButton.icon(
          onPressed: _runAiReview,
          icon: const Icon(Icons.fact_check_rounded),
          label: const Text('AI Review'),
          style: FilledButton.styleFrom(backgroundColor: const Color(0xFF10B981), minimumSize: const Size(double.infinity, 48)),
        ),
      ],
    );
  }

  Future<void> _addNewScreen() async {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final titleC = TextEditingController(text: 'New Screen');
    final title = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => Container(
        padding: EdgeInsets.fromLTRB(20, 16, 20, MediaQuery.paddingOf(ctx).bottom + 24),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF1E293B) : Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade300, borderRadius: BorderRadius.circular(2)))),
            const SizedBox(height: 16),
            Text('New screen', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: isDark ? Colors.white : Colors.black87)),
            const SizedBox(height: 6),
            Text('Opens the screen studio so you can add buttons, forms, lists, and menus.', style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : Colors.grey.shade600)),
            const SizedBox(height: 16),
            TextField(
              controller: titleC,
              autofocus: true,
              decoration: InputDecoration(
                labelText: 'Screen name',
                filled: true,
                fillColor: Colors.grey.shade50,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
              ),
            ),
            const SizedBox(height: 16),
            FilledButton(
              onPressed: () => Navigator.pop(ctx, titleC.text.trim()),
              style: FilledButton.styleFrom(backgroundColor: _project.theme, minimumSize: const Size(double.infinity, 48)),
              child: const Text('Create & edit'),
            ),
          ],
        ),
      ),
    );
    titleC.dispose();
    if (title == null || title.isEmpty || !mounted) return;
    final id = 'scr_${DateTime.now().millisecondsSinceEpoch}';
    final screen = NgmyAppScreen(
      id: id,
      title: title,
      kind: NgmyAppScreenKind.custom,
      data: {
        'layout': {
          'type': 'column',
          'children': [
            {'type': 'text', 'text': title, 'style': 'title'},
            {'type': 'text', 'text': 'Tap + Add widget to build this screen.', 'style': 'subtitle'},
          ],
        },
      },
    );
    setState(() => _project = _project.copyWith(screens: [..._project.screens, screen]));
    await _openScreenEditor(_project.screens.length - 1);
  }

  @override
  Widget build(BuildContext context) {
    final theme = _project.theme;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF07080F) : const Color(0xFFE8EDF5);
    final headerText = isDark ? Colors.white : const Color(0xFF0F172A);
    final appTitle = _nameC.text.trim().isEmpty ? 'Edit App' : _nameC.text.trim();

    return DefaultTabController(
      length: 2,
      child: Scaffold(
        backgroundColor: bg,
        body: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(12, 6, 12, 8),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                  decoration: BoxDecoration(
                    color: isDark ? const Color(0xFF1E293B) : Colors.white,
                    borderRadius: BorderRadius.circular(28),
                    border: Border.all(color: (isDark ? Colors.white : Colors.black).withValues(alpha: 0.08)),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.2 : 0.06), blurRadius: 10, offset: const Offset(0, 3))],
                  ),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: () => Navigator.maybePop(context),
                        icon: Icon(Icons.arrow_back_rounded, color: headerText, size: 22),
                      ),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(appTitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: headerText)),
                            Text('My App', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: theme)),
                          ],
                        ),
                      ),
                      IconButton(icon: Icon(Icons.download_rounded, color: headerText), tooltip: 'Backup', onPressed: _exportCurrent),
                      IconButton(
                        icon: Icon(Icons.preview_rounded, color: headerText),
                        tooltip: 'Preview',
                        onPressed: () => NgmyNavigator.push(
                          context,
                          NgmyAppRuntimeScreen(project: _project, apiKey: widget.apiKey, email: widget.email),
                          routeName: 'NgmyAppRuntimeScreen',
                        ),
                      ),
                      FilledButton(
                        onPressed: _persistAndPop,
                        style: FilledButton.styleFrom(backgroundColor: theme, foregroundColor: Colors.white, padding: const EdgeInsets.symmetric(horizontal: 14)),
                        child: const Text('Save', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                      const SizedBox(width: 4),
                    ],
                  ),
                ),
              ),
              Expanded(
                child: NgmyAppStudioContentFrame(
                  isDark: isDark,
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(12, 12, 12, 0),
                        child: Container(
                          padding: const EdgeInsets.all(4),
                          decoration: BoxDecoration(
                            color: isDark ? const Color(0xFF0F172A) : const Color(0xFFF1F5F9),
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(color: (isDark ? Colors.white : Colors.black).withValues(alpha: 0.06)),
                          ),
                          child: TabBar(
                            indicator: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              color: theme.withValues(alpha: isDark ? 0.35 : 0.18),
                            ),
                            indicatorSize: TabBarIndicatorSize.tab,
                            dividerColor: Colors.transparent,
                            labelColor: isDark ? Colors.white : theme,
                            unselectedLabelColor: isDark ? Colors.white54 : Colors.black54,
                            tabs: const [
                              Tab(icon: Icon(Icons.dashboard_customize_rounded, size: 20), text: 'Visual'),
                              Tab(icon: Icon(Icons.code_rounded, size: 20), text: 'Code'),
                            ],
                          ),
                        ),
                      ),
                      Expanded(
                        child: TabBarView(
                          children: [
                            _buildVisualEditor(isDark),
                            NgmyAppCodeStudioTab(
                              project: _project,
                              onProjectChanged: (p) {
                                setState(() {
                                  _project = p;
                                  _nameC.text = p.name;
                                  _taglineC.text = p.tagline;
                                  _iconC.text = p.appIcon;
                                });
                              },
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
        floatingActionButton: FloatingActionButton.extended(
          onPressed: _openCopilot,
          backgroundColor: const Color(0xFFF59E0B),
          icon: const Icon(Icons.auto_awesome_rounded),
          label: const Text('Ask Bolt AI'),
        ),
      ),
    );
  }
}

class _QuickAddTile extends StatelessWidget {
  const _QuickAddTile({required this.isDark, required this.theme, required this.icon, required this.label, required this.subtitle, required this.onTap});
  final bool isDark;
  final Color theme;
  final IconData icon;
  final String label;
  final String subtitle;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: 10),
      child: Material(
        color: isDark ? const Color(0xFF1E293B) : Colors.white,
        borderRadius: BorderRadius.circular(16),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(16),
          child: Container(
            width: 108,
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: theme.withValues(alpha: 0.2)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(icon, color: theme),
                const SizedBox(height: 8),
                Text(label, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: isDark ? Colors.white : Colors.black87)),
                Text(subtitle, style: TextStyle(fontSize: 10, color: isDark ? Colors.white60 : Colors.grey.shade600)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class NgmyAppCodeStudioTab extends StatefulWidget {
  final NgmyAppProject project;
  final ValueChanged<NgmyAppProject> onProjectChanged;

  const NgmyAppCodeStudioTab({super.key, required this.project, required this.onProjectChanged});

  @override
  State<NgmyAppCodeStudioTab> createState() => _NgmyAppCodeStudioTabState();
}

class _NgmyAppCodeStudioTabState extends State<NgmyAppCodeStudioTab> {
  late TextEditingController _codeC;
  String? _error;

  @override
  void initState() {
    super.initState();
    _codeC = TextEditingController(text: widget.project.toPrettyJson());
  }

  @override
  void didUpdateWidget(covariant NgmyAppCodeStudioTab oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.project.updatedAt != widget.project.updatedAt && _error == null) {
      _codeC.text = widget.project.toPrettyJson();
    }
  }

  @override
  void dispose() {
    _codeC.dispose();
    super.dispose();
  }

  void _format() {
    try {
      final decoded = jsonDecode(_codeC.text);
      _codeC.text = const JsonEncoder.withIndent('  ').convert(decoded);
      setState(() => _error = null);
    } catch (e) {
      setState(() => _error = 'Invalid JSON: $e');
    }
  }

  void _apply() {
    try {
      final decoded = jsonDecode(_codeC.text);
      if (decoded is! Map) {
        setState(() => _error = 'Root must be a JSON object.');
        return;
      }
      final map = Map<String, dynamic>.from(decoded);
      map['id'] = widget.project.id;
      map['createdAt'] = widget.project.createdAt;
      map['ownerEmail'] = widget.project.ownerEmail;
      map['status'] = widget.project.status.name;
      if (widget.project.slug.isNotEmpty) map['slug'] = widget.project.slug;
      if (widget.project.publicUrl.isNotEmpty) map['publicUrl'] = widget.project.publicUrl;
      if (widget.project.publishedAt != null) map['publishedAt'] = widget.project.publishedAt;
      if (widget.project.reviewNote != null) map['reviewNote'] = widget.project.reviewNote;
      final updated = NgmyAppProject.fromMap(map);
      widget.onProjectChanged(updated);
      setState(() => _error = null);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Code applied — check Preview!')));
    } catch (e) {
      setState(() => _error = 'Could not apply: $e');
    }
  }

  void _showSchema() {
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Code schema'),
        content: SingleChildScrollView(child: Text(kNgmyAppBuilderCodeSchemaHelp)),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close'))],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Material(
          color: const Color(0xFF1E293B),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 10, 12, 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Code Studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                const SizedBox(height: 4),
                Text(
                  'Edit full app JSON on your phone — like Android Studio / Xcode. AI writes this too.',
                  style: TextStyle(color: Colors.white.withOpacity(0.75), fontSize: 12),
                ),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    FilledButton.icon(onPressed: _apply, icon: const Icon(Icons.play_arrow_rounded, size: 18), label: const Text('Apply')),
                    OutlinedButton.icon(
                      onPressed: _format,
                      style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white38)),
                      icon: const Icon(Icons.auto_fix_high_rounded, size: 18),
                      label: const Text('Format'),
                    ),
                    OutlinedButton.icon(
                      onPressed: _showSchema,
                      style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white38)),
                      icon: const Icon(Icons.help_outline_rounded, size: 18),
                      label: const Text('Schema'),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
        if (_error != null)
          Container(
            color: const Color(0xFFFEE2E2),
            padding: const EdgeInsets.all(10),
            child: Text(_error!, style: const TextStyle(color: Color(0xFFB91C1C), fontSize: 12)),
          ),
        Expanded(
          child: TextField(
            controller: _codeC,
            maxLines: null,
            expands: true,
            style: const TextStyle(fontFamily: 'monospace', fontSize: 12),
            decoration: const InputDecoration(
              border: InputBorder.none,
              contentPadding: EdgeInsets.all(12),
              hintText: '{ "name": "My App", "screens": [...] }',
            ),
            onChanged: (_) {
              if (_error != null) setState(() => _error = null);
            },
          ),
        ),
      ],
    );
  }
}

class NgmyAppBuilderCopilotScreen extends StatefulWidget {
  final NgmyAppProject? project;
  final String apiKey;
  final String email;
  final dynamic config;
  final dynamic user;
  final bool isAdmin;
  final Future<bool> Function(double amount, String description)? onChargeWallet;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

  const NgmyAppBuilderCopilotScreen({
    super.key,
    this.project,
    required this.apiKey,
    required this.email,
    this.config,
    this.user,
    this.isAdmin = false,
    this.onChargeWallet,
    this.onDataChanged,
    this.onPersistConfig,
  });

  @override
  State<NgmyAppBuilderCopilotScreen> createState() => _NgmyAppBuilderCopilotScreenState();
}

class _NgmyAppBuilderCopilotScreenState extends State<NgmyAppBuilderCopilotScreen> {
  final _inputC = TextEditingController();
  final _scrollC = ScrollController();
  final List<Map<String, String>> _messages = [];
  NgmyAppProject? _project;
  bool _busy = false;
  int _promptsRemaining = -1;

  static const _hints = [
    'Build me a QR code app for websites and text with save list',
    'Create an invoice app where I bill clients and show payment QR',
    'Make a video link hub to save and open YouTube URLs',
    'Build a store with products, cart, and checkout',
    'Create anything — full working app with all screens wired',
  ];

  @override
  void initState() {
    super.initState();
    _project = widget.project;
    _loadMemory();
    _refreshUsage();
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
          'text': 'Hi! I\'m Bolt — your AI coder. Ask for ANY app: media, store, invoice, QR, video hub, fitness, anything. I write full working JSON.',
        });
      } else {
        _messages.add({
          'role': 'ai',
          'text': 'I have "${_project!.name}" loaded. Tell me ANY change — dark mode, menus, layouts, colors. Nothing is off limits.',
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
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('"${_project!.name}" saved to My Apps (${_project!.screens.length} screens). Tap Preview or Use app.'),
            behavior: SnackBarBehavior.floating,
            duration: const Duration(seconds: 4),
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

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF07080F) : const Color(0xFFE8EDF5),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        flexibleSpace: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [Color(0xFF0F172A), Color(0xFF312E81)],
            ),
          ),
        ),
        foregroundColor: Colors.white,
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.5)),
                boxShadow: [BoxShadow(color: const Color(0xFFF59E0B).withValues(alpha: 0.35), blurRadius: 12)],
              ),
              child: const Icon(Icons.construction_rounded, color: Color(0xFFFBBF24), size: 20),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Bolt AI', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                  Text(_project?.name ?? 'New app', style: const TextStyle(fontSize: 11, color: Colors.white70)),
                ],
              ),
            ),
          ],
        ),
        actions: [
          if (_project != null)
            TextButton(
              onPressed: () => Navigator.pop(context, _project),
              child: const Text('Use app', style: TextStyle(fontWeight: FontWeight.w800, color: Colors.white)),
            ),
        ],
      ),
      body: Column(
        children: [
          if (_promptsRemaining >= 0)
            Container(
              width: double.infinity,
              margin: const EdgeInsets.fromLTRB(12, 8, 12, 4),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1E293B) : const Color(0xFFEFF6FF),
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: const Color(0xFF6366F1).withValues(alpha: 0.35)),
              ),
              child: Text(
                '$_promptsRemaining free AI prompts left',
                style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : const Color(0xFF4338CA)),
              ),
            ),
          if (_project != null)
            Container(
              width: double.infinity,
              margin: const EdgeInsets.fromLTRB(12, 0, 12, 8),
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: [const Color(0xFF10B981).withValues(alpha: 0.2), const Color(0xFF6366F1).withValues(alpha: 0.15)]),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: const Color(0xFF10B981).withValues(alpha: 0.35)),
              ),
              child: Text('${_project!.screens.length} screens · ${_project!.name}', style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12)),
            ),
          Expanded(
            child: ListView.builder(
              controller: _scrollC,
              padding: const EdgeInsets.all(16),
              itemCount: _messages.length,
              itemBuilder: (_, i) {
                final m = _messages[i];
                final isUser = m['role'] == 'user';
                return Padding(
                  padding: const EdgeInsets.only(bottom: 12),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    mainAxisAlignment: isUser ? MainAxisAlignment.end : MainAxisAlignment.start,
                    children: [
                      if (!isUser) ...[
                        CircleAvatar(
                          radius: 16,
                          backgroundColor: const Color(0xFFF59E0B).withValues(alpha: 0.2),
                          child: const Icon(Icons.smart_toy_rounded, size: 16, color: Color(0xFFF59E0B)),
                        ),
                        const SizedBox(width: 8),
                      ],
                      Flexible(
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                          decoration: BoxDecoration(
                            gradient: isUser
                                ? LinearGradient(colors: [const Color(0xFFF59E0B).withValues(alpha: 0.85), const Color(0xFFEA580C).withValues(alpha: 0.75)])
                                : null,
                            color: isUser ? null : (isDark ? const Color(0xFF1E293B) : Colors.white),
                            borderRadius: BorderRadius.only(
                              topLeft: const Radius.circular(18),
                              topRight: const Radius.circular(18),
                              bottomLeft: Radius.circular(isUser ? 18 : 4),
                              bottomRight: Radius.circular(isUser ? 4 : 18),
                            ),
                            border: Border.all(color: (isUser ? Colors.white : const Color(0xFF6366F1)).withValues(alpha: 0.15)),
                            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 10, offset: const Offset(0, 4))],
                          ),
                          child: Text(
                            m['text'] ?? '',
                            style: TextStyle(
                              color: isUser ? Colors.white : (isDark ? Colors.white : Colors.black87),
                              height: 1.4,
                              fontSize: 14,
                            ),
                          ),
                        ),
                      ),
                      if (isUser) ...[
                        const SizedBox(width: 8),
                        CircleAvatar(
                          radius: 16,
                          backgroundColor: const Color(0xFF6366F1).withValues(alpha: 0.2),
                          child: const Icon(Icons.person_rounded, size: 16, color: Color(0xFF6366F1)),
                        ),
                      ],
                    ],
                  ),
                );
              },
            ),
          ),
          if (_busy)
            const LinearProgressIndicator(minHeight: 2, color: Color(0xFFF59E0B), backgroundColor: Color(0xFF1E293B)),
          SizedBox(
            height: 44,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              children: _hints.map((h) {
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: ActionChip(
                    backgroundColor: const Color(0xFF312E81).withValues(alpha: 0.12),
                    label: Text(h, style: const TextStyle(fontSize: 11)),
                    onPressed: _busy ? null : () => _send(h),
                  ),
                );
              }).toList(),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 8, 12, 12),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1E293B) : Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: const Color(0xFF6366F1).withValues(alpha: 0.25)),
                boxShadow: [BoxShadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.12), blurRadius: 16)],
              ),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _inputC,
                      minLines: 1,
                      maxLines: 4,
                      decoration: const InputDecoration(
                        hintText: 'Command Bolt — menus, icons, database…',
                        border: InputBorder.none,
                        contentPadding: EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                      ),
                      onSubmitted: (_) => _send(),
                    ),
                  ),
                  IconButton.filled(
                    style: IconButton.styleFrom(backgroundColor: const Color(0xFFF59E0B)),
                    onPressed: _busy ? null : () => _send(),
                    icon: const Icon(Icons.send_rounded),
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

class NgmyAppBuilderActorChatScreen extends StatefulWidget {
  final NgmyAppBuilderActor actor;
  final String apiKey;
  final String email;
  final NgmyAppProject? project;

  const NgmyAppBuilderActorChatScreen({
    super.key,
    required this.actor,
    required this.apiKey,
    required this.email,
    this.project,
  });

  @override
  State<NgmyAppBuilderActorChatScreen> createState() => _NgmyAppBuilderActorChatScreenState();
}

class _NgmyAppBuilderActorChatScreenState extends State<NgmyAppBuilderActorChatScreen> {
  final _inputC = TextEditingController();
  final _scrollC = ScrollController();
  final List<Map<String, String>> _messages = [];
  bool _busy = false;

  Future<void> _send() async {
    final text = _inputC.text.trim();
    if (text.isEmpty || _busy) return;
    _inputC.clear();
    setState(() {
      _messages.add({'role': 'user', 'text': text});
      _busy = true;
    });
    if (widget.actor.id == 'builder') {
      final result = await ngmyAppBuilderAiCopilot(
        apiKey: widget.apiKey,
        userMessage: text,
        project: widget.project,
        history: _messages,
      );
      if (!mounted) return;
      setState(() {
        _messages.add({'role': 'ai', 'text': result.message});
        _busy = false;
      });
    } else {
      final reply = await ngmyAppBuilderAiChat(
        apiKey: widget.apiKey,
        actor: widget.actor,
        userMessage: text,
        project: widget.project,
        history: _messages,
      );
      if (!mounted) return;
      setState(() {
        _messages.add({'role': 'ai', 'text': reply});
        _busy = false;
      });
    }
    await Future<void>.delayed(const Duration(milliseconds: 50));
    if (_scrollC.hasClients) _scrollC.jumpTo(_scrollC.position.maxScrollExtent);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(widget.actor.name, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
            Text(widget.actor.role, style: const TextStyle(fontSize: 11)),
          ],
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              controller: _scrollC,
              padding: const EdgeInsets.all(16),
              itemCount: _messages.length,
              itemBuilder: (_, i) {
                final m = _messages[i];
                final isUser = m['role'] == 'user';
                return Align(
                  alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    padding: const EdgeInsets.all(12),
                    constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.82),
                    decoration: BoxDecoration(
                      color: isUser ? widget.actor.color.withOpacity(0.15) : Colors.grey.withOpacity(0.12),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Text(m['text'] ?? ''),
                  ),
                );
              },
            ),
          ),
          if (_busy) const LinearProgressIndicator(minHeight: 2),
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 8, 12, 12),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _inputC,
                    minLines: 1,
                    maxLines: 4,
                    decoration: InputDecoration(
                      hintText: 'Ask ${widget.actor.name}…',
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                    onSubmitted: (_) => _send(),
                  ),
                ),
                const SizedBox(width: 8),
                IconButton.filled(onPressed: _busy ? null : _send, icon: const Icon(Icons.send_rounded)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class NgmyAppRuntimeScreen extends StatefulWidget {
  final NgmyAppProject project;
  final String apiKey;
  final String email;

  const NgmyAppRuntimeScreen({
    super.key,
    required this.project,
    this.apiKey = '',
    this.email = '',
  });

  @override
  State<NgmyAppRuntimeScreen> createState() => _NgmyAppRuntimeScreenState();
}

class _NgmyAppRuntimeScreenState extends State<NgmyAppRuntimeScreen> {
  late String _screenId;
  final Map<String, TextEditingController> _formControllers = {};
  late final NgmyAppDataStore _dataStore;

  @override
  void initState() {
    super.initState();
    _screenId = widget.project.homeScreen.id;
    _dataStore = NgmyAppDataStore.forApp(widget.project.id);
    _dataStore.ensureLoaded();
  }

  @override
  void dispose() {
    for (final c in _formControllers.values) {
      c.dispose();
    }
    super.dispose();
  }

  void _go(String? targetId) {
    if (targetId == null || targetId.trim().isEmpty) return;
    final next = widget.project.screenById(targetId);
    if (next != null) {
      setState(() => _screenId = next.id);
      return;
    }
    // A button/menu item pointed at a screen id that doesn't exist in this
    // app — silently doing nothing looks like the button is broken. Surface
    // it instead so it's obvious this is a missing-screen problem, not a
    // dead button.
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('This button points to a screen that doesn\'t exist yet ("$targetId"). Ask the AI to add it, or edit the button\'s target.')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: _dataStore,
      builder: (context, _) {
        final screen = widget.project.screenById(_screenId) ?? widget.project.homeScreen;
        final theme = widget.project.theme;
        final dark = _dataStore.darkModeEnabled;
        final hideBar = screen.data['hideAppBar'] == true;
        final fullBleed = screen.data['fullBleed'] == true;
        final layout = ngmyScreenLayout(screen);
        final rootType = (layout?['type'] ?? '').toString().toLowerCase();
        final isMapScreen = rootType == 'mapview' || rootType == 'map' || rootType == 'map_view';
        final bg = fullBleed
            ? (isMapScreen ? const Color(0xFFF1F5F9) : Colors.black)
            : (dark ? const Color(0xFF0F172A) : theme.withValues(alpha: 0.08));
        final barBg = dark ? const Color(0xFF1E293B) : theme;
        final navItems = ngmyParseBottomNavItems(widget.project.shell['bottomNav']);
        return Scaffold(
          backgroundColor: bg,
          extendBodyBehindAppBar: fullBleed && hideBar,
          appBar: hideBar
              ? null
              : AppBar(
                  backgroundColor: barBg,
                  foregroundColor: Colors.white,
                  title: Text(screen.title.isNotEmpty ? screen.title : widget.project.name, style: const TextStyle(fontWeight: FontWeight.w900)),
                  actions: [
                    IconButton(
                      icon: const Icon(Icons.home_rounded),
                      onPressed: () => setState(() => _screenId = widget.project.homeScreen.id),
                    ),
                  ],
                ),
          body: fullBleed
              ? SafeArea(bottom: navItems != null, child: _buildScreen(screen, theme, dark))
              : SafeArea(child: _buildScreen(screen, theme, dark)),
          bottomNavigationBar: navItems == null
              ? null
              : NavigationBar(
                  selectedIndex: navItems.indexWhere((e) => (e['target'] ?? '').toString() == _screenId).clamp(0, navItems.length - 1),
                  onDestinationSelected: (i) {
                    final t = (navItems[i]['target'] ?? '').toString();
                    if (t.isNotEmpty) _go(t);
                  },
                  backgroundColor: dark ? const Color(0xFF0F172A) : Colors.white,
                  indicatorColor: theme.withValues(alpha: 0.2),
                  destinations: [
                    for (final item in navItems)
                      NavigationDestination(
                        icon: Icon(ngmyShellNavIcon(item['icon']?.toString())),
                        label: (item['label'] ?? '').toString(),
                      ),
                  ],
                ),
        );
      },
    );
  }

  Widget _buildScreen(NgmyAppScreen screen, Color theme, bool dark) {
    if (ngmyScreenUsesCustomLayout(screen)) {
      final layout = ngmyScreenLayout(screen);
      if (layout != null) {
        return NgmyAppLayoutRenderer(
          layout: layout,
          theme: theme,
          isDarkMode: dark,
          fullBleed: screen.data['fullBleed'] == true,
          appId: widget.project.id,
          onNavigate: _go,
          onSnack: (msg) => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg))),
        );
      }
    }
    switch (screen.kind) {
      case NgmyAppScreenKind.welcome:
        return _welcome(screen, theme);
      case NgmyAppScreenKind.menu:
        return _menu(screen, theme);
      case NgmyAppScreenKind.content:
        return _content(screen);
      case NgmyAppScreenKind.form:
        return _form(screen, theme);
      case NgmyAppScreenKind.aiChat:
        return _aiChat(screen, theme);
      case NgmyAppScreenKind.custom:
        return Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Text(
              'This screen needs a data.layout tree.\nOpen Code Studio or ask AI to build it.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.grey.shade700),
            ),
          ),
        );
    }
  }

  Widget _welcome(NgmyAppScreen screen, Color theme) {
    final subtitle = (screen.data['subtitle'] ?? '').toString();
    final buttonLabel = (screen.data['buttonLabel'] ?? 'Continue').toString();
    final emoji = (screen.data['heroEmoji'] ?? '✨').toString();
    final target = screen.data['buttonTargetScreenId']?.toString();
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(emoji, style: const TextStyle(fontSize: 56)),
          const SizedBox(height: 16),
          Text(screen.title, textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 28)),
          const SizedBox(height: 8),
          Text(subtitle, textAlign: TextAlign.center, style: TextStyle(color: Colors.grey.shade700)),
          const SizedBox(height: 24),
          FilledButton(
            onPressed: () => _go(target),
            style: FilledButton.styleFrom(backgroundColor: theme, minimumSize: const Size(double.infinity, 50)),
            child: Text(buttonLabel),
          ),
        ],
      ),
    );
  }

  Widget _menu(NgmyAppScreen screen, Color theme) {
    final itemsRaw = screen.data['items'];
    final items = <Map<String, String>>[];
    if (itemsRaw is List) {
      for (final item in itemsRaw) {
        if (item is Map) {
          items.add(item.map((k, v) => MapEntry(k.toString(), v.toString())));
        }
      }
    }
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Text(screen.title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 22)),
        const SizedBox(height: 12),
        ...items.map((item) {
          return Card(
            child: ListTile(
              leading: Icon(Icons.arrow_forward_rounded, color: theme),
              title: Text(item['label'] ?? 'Item', style: const TextStyle(fontWeight: FontWeight.w700)),
              onTap: () => _go(item['targetScreenId']),
            ),
          );
        }),
      ],
    );
  }

  Widget _content(NgmyAppScreen screen) {
    final body = (screen.data['body'] ?? '').toString();
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(screen.title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 22)),
          const SizedBox(height: 12),
          Text(body, style: const TextStyle(fontSize: 15, height: 1.45)),
        ],
      ),
    );
  }

  Widget _form(NgmyAppScreen screen, Color theme) {
    final fieldsRaw = screen.data['fields'];
    final fields = <Map<String, String>>[];
    if (fieldsRaw is List) {
      for (final f in fieldsRaw) {
        if (f is Map) fields.add(f.map((k, v) => MapEntry(k.toString(), v.toString())));
      }
    }
    for (final f in fields) {
      final id = f['id'] ?? '';
      _formControllers.putIfAbsent(id, () => TextEditingController());
    }
    final submitLabel = (screen.data['submitLabel'] ?? 'Submit').toString();
    final success = (screen.data['successMessage'] ?? 'Submitted!').toString();
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(screen.title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 22)),
          const SizedBox(height: 12),
          ...fields.map((f) {
            final id = f['id'] ?? '';
            return Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: TextField(
                controller: _formControllers[id],
                decoration: InputDecoration(labelText: f['label'] ?? 'Field'),
              ),
            );
          }),
          FilledButton(
            onPressed: () async {
              final data = <String, dynamic>{};
              for (final f in fields) {
                final id = f['id'] ?? '';
                data[id] = _formControllers[id]?.text.trim() ?? '';
              }
              final collection = (screen.data['collection'] ?? '').toString();
              if (collection.isNotEmpty) {
                await _dataStore.addRecord(collection, data);
                for (final c in _formControllers.values) {
                  c.clear();
                }
              }
              if (!mounted) return;
              ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(success)));
              final nav = (screen.data['navigateAfter'] ?? '').toString();
              if (nav.isNotEmpty) _go(nav);
            },
            style: FilledButton.styleFrom(backgroundColor: theme, minimumSize: const Size(double.infinity, 48)),
            child: Text(submitLabel),
          ),
        ],
      ),
    );
  }

  Widget _aiChat(NgmyAppScreen screen, Color theme) {
    final actorId = (screen.data['actorId'] ?? 'architect').toString();
    final actor = ngmyAppBuilderActorById(actorId);
    return NgmyAppBuilderActorChatScreen(actor: actor, apiKey: widget.apiKey, email: widget.email, project: widget.project);
  }
}

/// Preview template without saving to My Apps until user confirms.
class _NgmyTemplatePreviewScreen extends StatelessWidget {
  final NgmyAppTemplate template;
  final NgmyAppProject project;
  final String apiKey;
  final String email;

  const _NgmyTemplatePreviewScreen({
    required this.template,
    required this.project,
    required this.apiKey,
    required this.email,
  });

  Future<void> _save(BuildContext context) async {
    final p = template.build(email);
    await ngmySaveUserAppProject(email, p);
    if (context.mounted) Navigator.pop(context, true);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Preview · ${template.name}', style: const TextStyle(fontWeight: FontWeight.w800)),
        actions: [
          TextButton.icon(
            onPressed: () => _save(context),
            icon: const Icon(Icons.save_rounded, size: 18),
            label: const Text('Save to My Apps', style: TextStyle(fontWeight: FontWeight.w800)),
          ),
        ],
      ),
      body: Column(
        children: [
          Material(
            color: const Color(0xFF6366F1).withValues(alpha: 0.1),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              child: Row(
                children: [
                  const Icon(Icons.info_outline_rounded, size: 18, color: Color(0xFF6366F1)),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      'Preview only — not in My Apps until you tap Save.',
                      style: TextStyle(fontSize: 12, color: Colors.grey.shade800, fontWeight: FontWeight.w600),
                    ),
                  ),
                ],
              ),
            ),
          ),
          Expanded(
            child: NgmyAppRuntimeScreen(project: project, apiKey: apiKey, email: email),
          ),
        ],
      ),
      bottomNavigationBar: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
          child: FilledButton.icon(
            onPressed: () => _save(context),
            icon: const Icon(Icons.rocket_launch_rounded),
            label: const Text('Save to My Apps & customize'),
            style: FilledButton.styleFrom(
              backgroundColor: Color(template.themeColor),
              minimumSize: const Size(double.infinity, 50),
            ),
          ),
        ),
      ),
    );
  }
}
