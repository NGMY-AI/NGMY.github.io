import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_app_builder_ai.dart';
import 'ngmy_app_builder_cloud.dart';
import 'ngmy_app_builder_guest.dart';
import 'ngmy_app_builder_launch_stub.dart' if (dart.library.html) 'ngmy_app_builder_launch_web.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_export.dart';
import 'ngmy_app_builder_runtime.dart';
import 'ngmy_app_builder_storage.dart';
import 'ngmy_app_builder_templates.dart';
import 'ngmy_app_builder_urls.dart';
import 'ngmy_app_studio_payments.dart';
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
    NgmyNavigator.push(
      context,
      NgmyAppRuntimeScreen(project: app, apiKey: apiKey, email: email),
      routeName: 'NgmyAppRuntimeScreen',
    );
  });
}

Future<void> _ngmyShowAppPublicUrlDialog(BuildContext context, NgmyAppProject project) async {
  final url = project.publicUrl.trim();
  if (url.isEmpty) return;
  await showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      title: const Text('Your unique GitHub link'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('This link is only for "${project.name}" — hosted on GitHub Pages. Share it anywhere:', style: TextStyle(color: Colors.grey.shade700)),
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
        FilledButton(onPressed: () => Navigator.pop(ctx), child: const Text('Done')),
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
  String? _cloudSavedProjectId;

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
    _cloudSavedProjectId = await NgmyAppStudioCloudSlot.fetchSavedProjectId(_email);
    final cloud = await NgmyAppStudioCloudSlot.pullIntoLocal(_email);
    _mine = await ngmyLoadUserAppProjects(_email);
    if (cloud != null && !_mine.any((p) => p.id == cloud.id)) {
      _mine.insert(0, cloud);
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
    await _openEditor(p);
  }

  Future<void> _openAiCopilot({NgmyAppProject? project}) async {
    final updated = await NgmyNavigator.push<NgmyAppProject>(
      context,
      NgmyAppBuilderCopilotScreen(project: project, apiKey: _apiKey, email: _email),
      routeName: 'NgmyAppBuilderCopilotScreen',
    );
    if (updated != null) {
      await ngmySaveUserAppProject(_email, updated);
      await _reload();
      await _openEditor(updated);
    }
  }

  Future<void> _createFromTemplate(NgmyAppTemplate template) async {
    final p = template.build(_email);
    await ngmySaveUserAppProject(_email, p);
    await _reload();
    await _openEditor(p);
  }

  Future<void> _submitOrPublish(NgmyAppProject project) async {
    if (_isAdmin) {
      final published = await ngmyPublishAppProject(widget.config, _email, project);
      await _exportApp(published);
      if (!mounted) return;
      await _ngmyShowAppPublicUrlDialog(context, published);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Published locally. Backup file downloaded — keep your .ngmy.json file safe!')),
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
    await _openEditor(imported);
  }

  Future<void> _saveToCloud(NgmyAppProject project) async {
    final charge = widget.onChargeWallet;
    if (charge != null) {
      final ok = await NgmyAppStudioPayments.confirmAndChargeCloudSave(
        context: context,
        user: widget.user,
        config: widget.config,
        appName: project.name,
        onCharge: (amount, description) async {
          final charged = await charge(amount, description);
          if (charged) widget.onDataChanged();
          return charged;
        },
      );
      if (!ok) return;
    }
    final saved = await NgmyAppStudioCloudSlot.save(_email, project);
    if (!mounted) return;
    if (saved) {
      setState(() => _cloudSavedProjectId = project.id);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('"${project.name}" saved to cloud — opens on all your devices.')),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Cloud save failed. Check your connection and try again.')),
      );
    }
  }

  void _copyUrl(String url) {
    Clipboard.setData(ClipboardData(text: url));
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied to clipboard')));
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
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
            leading: Container(
              width: 48,
              height: 48,
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: [p.theme, p.theme.withValues(alpha: 0.7)]),
                borderRadius: BorderRadius.circular(14),
                boxShadow: [BoxShadow(color: p.theme.withValues(alpha: 0.35), blurRadius: 10)],
              ),
              alignment: Alignment.center,
              child: Text(p.displayIcon, style: const TextStyle(fontSize: 24)),
            ),
            title: Row(
              children: [
                Expanded(child: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w800))),
                if (_cloudSavedProjectId == p.id)
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
              p.publicUrl.isNotEmpty
                  ? '${p.status.label} · ${p.screens.length} screens · Live link'
                  : '${p.status.label} · ${p.screens.length} screens',
            ),
            trailing: PopupMenuButton<String>(
              onSelected: (v) async {
                if (v == 'edit') await _openEditor(p);
                if (v == 'ai') await _openAiCopilot(project: p);
                if (v == 'cloud') await _saveToCloud(p);
                if (v == 'preview') {
                  NgmyNavigator.push(context, NgmyAppRuntimeScreen(project: p, apiKey: _apiKey, email: _email), routeName: 'NgmyAppRuntimeScreen');
                }
                if (v == 'copy' && p.publicUrl.isNotEmpty) _copyUrl(p.publicUrl);
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
                  child: Text(_cloudSavedProjectId == p.id ? 'Update cloud save' : 'Save to cloud (1 slot)'),
                ),
                const PopupMenuItem(value: 'preview', child: Text('Preview')),
                if (p.publicUrl.isNotEmpty) const PopupMenuItem(value: 'copy', child: Text('Copy public link')),
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
          Container(
            padding: const EdgeInsets.all(22),
            decoration: BoxDecoration(
              gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF6366F1), Color(0xFF8B5CF6), Color(0xFFEC4899)]),
              borderRadius: BorderRadius.circular(24),
              boxShadow: [BoxShadow(color: const Color(0xFF6366F1).withValues(alpha: 0.35), blurRadius: 20, offset: const Offset(0, 8))],
            ),
            child: const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(children: [Icon(Icons.auto_awesome_rounded, color: Colors.white), SizedBox(width: 8), Text('AI App Studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22))]),
                SizedBox(height: 10),
                Text('Describe your app — Bolt builds working forms, lists, settings, and workouts. Not just text.', style: TextStyle(color: Colors.white, fontSize: 14, height: 1.4)),
              ],
            ),
          ),
          const SizedBox(height: 20),
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
            'Save one app to NGMY cloud (syncs on every device). Download .ngmy.json backups anytime — import restores your app.',
            style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54, height: 1.35),
          ),
          const SizedBox(height: 24),
          Text('What works now', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : Colors.black87)),
          const SizedBox(height: 12),
          _featureRow(Icons.check_circle_rounded, 'Forms that save data (venues, orders, check-ins)'),
          _featureRow(Icons.check_circle_rounded, 'Lists that show your saved items'),
          _featureRow(Icons.check_circle_rounded, 'Settings toggles that actually persist'),
          _featureRow(Icons.check_circle_rounded, 'Interactive workout plans with progress'),
          _featureRow(Icons.link_rounded, 'Unique public link when published'),
        ],
      ),
    );
  }

  Widget _templatesTab(bool isDark) {
    return GridView.builder(
      padding: const EdgeInsets.all(16),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 14, crossAxisSpacing: 14, childAspectRatio: 0.88),
      itemCount: kNgmyAppTemplates.length,
      itemBuilder: (_, i) {
        final t = kNgmyAppTemplates[i];
        final color = Color(t.themeColor);
        return Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: () => _createFromTemplate(t),
            borderRadius: BorderRadius.circular(20),
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [color.withValues(alpha: 0.15), color.withValues(alpha: 0.05)]),
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: color.withValues(alpha: 0.25)),
                boxShadow: [BoxShadow(color: color.withValues(alpha: 0.12), blurRadius: 10, offset: const Offset(0, 4))],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(t.icon, style: const TextStyle(fontSize: 32)),
                  const Spacer(),
                  Text(t.name, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                  const SizedBox(height: 4),
                  Text(t.description, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54, height: 1.3)),
                  const SizedBox(height: 8),
                  Row(children: [Icon(Icons.bolt_rounded, size: 14, color: color), const SizedBox(width: 4), Text('Interactive', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: color))]),
                ],
              ),
            ),
          ),
        );
      },
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
            subtitle: Text(p.publicUrl.isNotEmpty ? p.publicUrl : (p.tagline.isEmpty ? 'by ${p.ownerEmail}' : p.tagline), maxLines: 2, overflow: TextOverflow.ellipsis),
            trailing: IconButton(
              icon: const Icon(Icons.link_rounded),
              onPressed: p.publicUrl.isEmpty ? null : () => _copyUrl(p.publicUrl),
            ),
            onTap: () => NgmyNavigator.push(context, NgmyAppRuntimeScreen(project: p, apiKey: _apiKey, email: _email), routeName: 'NgmyAppRuntimeScreen'),
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

  const NgmyAppEditorScreen({
    super.key,
    required this.project,
    required this.isAdmin,
    required this.apiKey,
    required this.email,
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

  Future<void> _openCopilot() async {
    final updated = await NgmyNavigator.push<NgmyAppProject>(
      context,
      NgmyAppBuilderCopilotScreen(project: _project, apiKey: widget.apiKey, email: widget.email),
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

  Widget _buildVisualEditor() {
    return ListView(
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 88),
        children: [
          if (_project.publicUrl.isNotEmpty)
            Card(
              color: const Color(0xFF2563EB).withOpacity(0.08),
              child: ListTile(
                leading: const Icon(Icons.public_rounded, color: Color(0xFF2563EB)),
                title: const Text('Public link', style: TextStyle(fontWeight: FontWeight.w800)),
                subtitle: Text(_project.publicUrl, maxLines: 2, overflow: TextOverflow.ellipsis),
                trailing: IconButton(
                  icon: const Icon(Icons.copy_rounded),
                  onPressed: () {
                    Clipboard.setData(ClipboardData(text: _project.publicUrl));
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied!')));
                  },
                ),
              ),
            ),
          TextField(controller: _nameC, decoration: const InputDecoration(labelText: 'App name'), onChanged: (_) => _saveLocal()),
          const SizedBox(height: 10),
          TextField(controller: _taglineC, decoration: const InputDecoration(labelText: 'Tagline / Google description'), onChanged: (_) => _saveLocal()),
          const SizedBox(height: 10),
          TextField(
            controller: _iconC,
            decoration: const InputDecoration(
              labelText: 'App icon (emoji)',
              hintText: '🚀 ✨ 🤖 💎',
              prefixIcon: Icon(Icons.emoji_emotions_rounded),
            ),
            onChanged: (_) => _saveLocal(),
          ),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            children: ['🚀', '✨', '🤖', '💎', '🔥', '⚡', '🎯', '🌟'].map((e) {
              return ActionChip(
                label: Text(e, style: const TextStyle(fontSize: 18)),
                onPressed: () {
                  _iconC.text = e;
                  _saveLocal();
                },
              );
            }).toList(),
          ),
          const SizedBox(height: 12),
          Card(
            color: const Color(0xFF10B981).withValues(alpha: 0.08),
            child: ListTile(
              leading: const Icon(Icons.cloud_sync_rounded, color: Color(0xFF10B981)),
              title: const Text('Backup & cloud', style: TextStyle(fontWeight: FontWeight.w800)),
              subtitle: const Text('Download .ngmy.json backup anytime. Save one app to NGMY cloud from My Apps.'),
              trailing: IconButton(
                icon: const Icon(Icons.download_rounded),
                onPressed: _exportCurrent,
                tooltip: 'Download backup',
              ),
            ),
          ),
          const SizedBox(height: 8),
          ListTile(
            contentPadding: EdgeInsets.zero,
            title: const Text('External database (optional)', style: TextStyle(fontWeight: FontWeight.w800)),
            subtitle: Text(_project.database.isConnected ? _project.database.provider.label : 'Optional — connect your own Firebase/Supabase'),
            trailing: const Icon(Icons.storage_rounded),
            onTap: _editDatabase,
          ),
          const SizedBox(height: 16),
          const Text('Screens', style: TextStyle(fontWeight: FontWeight.w800)),
          const SizedBox(height: 8),
          ..._project.screens.asMap().entries.map((e) {
            final s = e.value;
            return Card(
              child: ListTile(
                leading: Icon(s.kind.icon, color: _project.theme),
                title: Text(s.title, style: const TextStyle(fontWeight: FontWeight.w700)),
                subtitle: Text(s.kind.label),
                trailing: IconButton(
                  icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444)),
                  onPressed: _project.screens.length <= 1
                      ? null
                      : () => setState(() {
                            final list = [..._project.screens]..removeAt(e.key);
                            _project = _project.copyWith(screens: list);
                          }),
                ),
                onTap: () async {
                  final edited = await _editScreenDialog(s);
                  if (edited != null) {
                    final list = [..._project.screens];
                    list[e.key] = edited;
                    setState(() => _project = _project.copyWith(screens: list));
                  }
                },
              ),
            );
          }),
          const SizedBox(height: 8),
          OutlinedButton.icon(
            onPressed: () async {
              final created = await _addScreenDialog();
              if (created != null) {
                setState(() => _project = _project.copyWith(screens: [..._project.screens, created]));
              }
            },
            icon: const Icon(Icons.add_rounded),
            label: const Text('Add screen'),
          ),
          const SizedBox(height: 16),
          FilledButton.icon(
            onPressed: () async {
              final actor = kNgmyAppBuilderActors.firstWhere((a) => a.id == 'reviewer');
              final review = await ngmyAppBuilderAiChat(
                apiKey: widget.apiKey,
                actor: actor,
                userMessage: 'Review this app for publish readiness.',
                project: _project,
              );
              if (!context.mounted) return;
              showDialog<void>(
                context: context,
                builder: (ctx) => AlertDialog(
                  title: const Text('Sage Review'),
                  content: SingleChildScrollView(child: Text(review)),
                  actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('OK'))],
                ),
              );
            },
            icon: const Icon(Icons.fact_check_rounded),
            label: const Text('AI Review'),
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFF10B981), minimumSize: const Size(double.infinity, 48)),
          ),
        ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Edit App', style: TextStyle(fontWeight: FontWeight.w900)),
          bottom: const TabBar(
            tabs: [
              Tab(icon: Icon(Icons.dashboard_customize_rounded), text: 'Visual'),
              Tab(icon: Icon(Icons.code_rounded), text: 'Code Studio'),
            ],
          ),
          actions: [
            IconButton(icon: const Icon(Icons.download_rounded), tooltip: 'Download backup', onPressed: _exportCurrent),
            IconButton(icon: const Icon(Icons.smart_toy_rounded), tooltip: 'AI Copilot', onPressed: _openCopilot),
            IconButton(
              icon: const Icon(Icons.preview_rounded),
              onPressed: () => NgmyNavigator.push(
                    context,
                    NgmyAppRuntimeScreen(project: _project, apiKey: widget.apiKey, email: widget.email),
                    routeName: 'NgmyAppRuntimeScreen',
                  ),
            ),
            TextButton(onPressed: _persistAndPop, child: const Text('Save', style: TextStyle(fontWeight: FontWeight.w800))),
          ],
        ),
        floatingActionButton: FloatingActionButton.extended(
          onPressed: _openCopilot,
          backgroundColor: const Color(0xFFF59E0B),
          icon: const Icon(Icons.mic_rounded),
          label: const Text('Ask AI'),
        ),
        body: TabBarView(
          children: [
            _buildVisualEditor(),
            NgmyAppCodeStudioTab(
              project: _project,
              onProjectChanged: (p) {
                setState(() {
                  _project = p;
                  _nameC.text = p.name;
                  _taglineC.text = p.tagline;
                });
              },
            ),
          ],
        ),
      ),
    );
  }

  Future<NgmyAppScreen?> _editScreenDialog(NgmyAppScreen screen) async {
    final titleC = TextEditingController(text: screen.title);
    final bodyC = TextEditingController(text: (screen.data['body'] ?? screen.data['subtitle'] ?? '').toString());
    return showDialog<NgmyAppScreen>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text('Edit ${screen.kind.label}'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(controller: titleC, decoration: const InputDecoration(labelText: 'Title')),
            const SizedBox(height: 8),
            TextField(controller: bodyC, maxLines: 4, decoration: const InputDecoration(labelText: 'Text / subtitle / body')),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () {
              final data = Map<String, dynamic>.from(screen.data);
              if (screen.kind == NgmyAppScreenKind.welcome) {
                data['subtitle'] = bodyC.text.trim();
              } else if (screen.kind == NgmyAppScreenKind.content) {
                data['body'] = bodyC.text.trim();
              }
              Navigator.pop(ctx, screen.copyWith(title: titleC.text.trim(), data: data));
            },
            child: const Text('Save'),
          ),
        ],
      ),
    );
  }

  Future<NgmyAppScreen?> _addScreenDialog() async {
    var kind = NgmyAppScreenKind.content;
    final titleC = TextEditingController(text: 'New Screen');
    return showDialog<NgmyAppScreen>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setST) => AlertDialog(
          title: const Text('Add screen'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              DropdownButtonFormField<NgmyAppScreenKind>(
                value: kind,
                decoration: const InputDecoration(labelText: 'Screen type'),
                items: NgmyAppScreenKind.values
                    .map((k) => DropdownMenuItem(value: k, child: Text(k.label)))
                    .toList(),
                onChanged: (v) => setST(() => kind = v ?? NgmyAppScreenKind.content),
              ),
              TextField(controller: titleC, decoration: const InputDecoration(labelText: 'Title')),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
            FilledButton(
              onPressed: () {
                final id = 'scr_${DateTime.now().millisecondsSinceEpoch}';
                final data = kind == NgmyAppScreenKind.custom
                    ? {
                        'layout': {
                          'type': 'column',
                          'children': [
                            {'type': 'hero', 'emoji': '✨', 'title': titleC.text.trim(), 'subtitle': 'Edit in Code Studio or ask AI'},
                            {'type': 'menuGrid', 'columns': 2, 'items': []},
                          ],
                        },
                      }
                    : const {'body': 'Your content here.'};
                Navigator.pop(
                  ctx,
                  NgmyAppScreen(id: id, title: titleC.text.trim(), kind: kind, data: data),
                );
              },
              child: const Text('Add'),
            ),
          ],
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

  const NgmyAppBuilderCopilotScreen({
    super.key,
    this.project,
    required this.apiKey,
    required this.email,
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

  static const _hints = [
    'Build a venue manager — forms save venues, list shows them, settings toggles work',
    'Make my fitness app workouts interactive with checkable exercises',
    'Add a contact form that saves leads and a list screen to view them',
    'Fix settings — add working notification and dark mode toggles',
    'Replace all text-only screens with working forms and data lists',
  ];

  @override
  void initState() {
    super.initState();
    _project = widget.project;
    if (_project == null) {
      _messages.add({
        'role': 'ai',
        'text': 'Hi! I\'m Bolt — your unrestricted AI coder. Ask for ANYTHING: five menus, tabs, custom screens, database hooks. I write the full JSON code. Or use Code Studio to edit yourself.',
      });
    } else {
      _messages.add({
        'role': 'ai',
        'text': 'I have "${_project!.name}" loaded. Tell me ANY change — unlimited menus, tabs, layouts, database, colors. Nothing is off limits.',
      });
    }
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
    _inputC.clear();
    setState(() {
      _messages.add({'role': 'user', 'text': text});
      _busy = true;
    });
    final result = await ngmyAppBuilderAiCopilot(
      apiKey: widget.apiKey,
      userMessage: text,
      project: _project,
      history: _messages,
    );
    if (!mounted) return;
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
          publishedAt: _project?.publishedAt,
          reviewNote: _project?.reviewNote,
        );
      }
      _busy = false;
    });
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
    if (next != null) setState(() => _screenId = next.id);
  }

  @override
  Widget build(BuildContext context) {
    final screen = widget.project.screenById(_screenId) ?? widget.project.homeScreen;
    final theme = widget.project.theme;
    return Scaffold(
      backgroundColor: theme.withOpacity(0.08),
      appBar: AppBar(
        backgroundColor: theme,
        foregroundColor: Colors.white,
        title: Text(widget.project.name, style: const TextStyle(fontWeight: FontWeight.w900)),
        actions: [
          IconButton(
            icon: const Icon(Icons.home_rounded),
            onPressed: () => setState(() => _screenId = widget.project.homeScreen.id),
          ),
        ],
      ),
      body: SafeArea(child: _buildScreen(screen, theme)),
    );
  }

  Widget _buildScreen(NgmyAppScreen screen, Color theme) {
    if (ngmyScreenUsesCustomLayout(screen)) {
      final layout = ngmyScreenLayout(screen);
      if (layout != null) {
        return NgmyAppLayoutRenderer(
          layout: layout,
          theme: theme,
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
