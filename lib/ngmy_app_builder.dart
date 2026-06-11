import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_app_builder_ai.dart';
import 'ngmy_app_builder_guest.dart';
import 'ngmy_app_builder_launch_stub.dart' if (dart.library.html) 'ngmy_app_builder_launch_web.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';
import 'ngmy_app_builder_templates.dart';
import 'ngmy_app_builder_urls.dart';
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
    var app = ngmyFindPublishedAppBySlug(config, slug);
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
}) {
  return NgmyNavigator.push(
    context,
    NgmyAppBuilderScreen(
      user: user,
      config: config,
      onDataChanged: onDataChanged,
      onPersistConfig: onPersistConfig,
    ),
    routeName: 'NgmyAppBuilderScreen',
  );
}

class NgmyAppBuilderScreen extends StatefulWidget {
  final dynamic user;
  final dynamic config;
  final VoidCallback onDataChanged;
  final Future<bool> Function() onPersistConfig;

  const NgmyAppBuilderScreen({
    super.key,
    required this.user,
    required this.config,
    required this.onDataChanged,
    required this.onPersistConfig,
  });

  @override
  State<NgmyAppBuilderScreen> createState() => _NgmyAppBuilderScreenState();
}

class _NgmyAppBuilderScreenState extends State<NgmyAppBuilderScreen> with SingleTickerProviderStateMixin {
  late TabController _tabs;
  List<NgmyAppProject> _mine = [];
  List<NgmyAppProject> _published = [];
  bool _loading = true;

  bool get _isAdmin => widget.user.isAdmin == true;
  String get _email => widget.user.email.toString().toLowerCase().trim();
  String get _apiKey => widget.config.geminiApiKey?.toString() ?? '';

  @override
  void initState() {
    super.initState();
    _tabs = TabController(length: 5, vsync: this);
    _reload();
  }

  @override
  void dispose() {
    _tabs.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    setState(() => _loading = true);
    _mine = await ngmyLoadUserAppProjects(_email);
    _published = ngmyPublishedAppsFromConfig(widget.config);
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
      await widget.onPersistConfig();
      widget.onDataChanged();
      if (!mounted) return;
      await _ngmyShowAppPublicUrlDialog(context, published);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('App published with a public link!')));
    } else {
      await ngmySubmitAppForReview(widget.config, _email, project);
      await widget.onPersistConfig();
      widget.onDataChanged();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('App submitted for admin review.')));
    }
    await _reload();
  }

  void _copyUrl(String url) {
    Clipboard.setData(ClipboardData(text: url));
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied to clipboard')));
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B0D14) : const Color(0xFFF8FAFC),
      appBar: AppBar(
        title: const Text('NGMY App Builder', style: TextStyle(fontWeight: FontWeight.w900)),
        bottom: TabBar(
          controller: _tabs,
          isScrollable: true,
          tabs: const [
            Tab(text: 'My Apps'),
            Tab(text: 'Create'),
            Tab(text: 'Templates'),
            Tab(text: 'Gallery'),
            Tab(text: 'AI Copilot'),
          ],
        ),
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : TabBarView(
              controller: _tabs,
              children: [
                _myAppsTab(isDark),
                _createTab(isDark),
                _templatesTab(isDark),
                _galleryTab(isDark),
                _copilotTab(isDark),
              ],
            ),
    );
  }

  Widget _myAppsTab(bool isDark) {
    if (_mine.isEmpty) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.apps_rounded, size: 56, color: isDark ? Colors.white24 : Colors.black26),
              const SizedBox(height: 12),
              const Text('No apps yet', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18)),
              const SizedBox(height: 8),
              Text('Create your first app in the Create tab.', textAlign: TextAlign.center, style: TextStyle(color: isDark ? Colors.white54 : Colors.black54)),
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
        return Card(
          margin: const EdgeInsets.only(bottom: 10),
          child: ListTile(
            leading: CircleAvatar(backgroundColor: p.theme, child: const Icon(Icons.apps_rounded, color: Colors.white)),
            title: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w800)),
            subtitle: Text(
              p.publicUrl.isNotEmpty
                  ? '${p.status.label} · ${p.screens.length} screens · Link ready'
                  : '${p.status.label} · ${p.screens.length} screens',
            ),
            trailing: PopupMenuButton<String>(
              onSelected: (v) async {
                if (v == 'edit') await _openEditor(p);
                if (v == 'ai') await _openAiCopilot(project: p);
                if (v == 'preview') {
                  NgmyNavigator.push(context, NgmyAppRuntimeScreen(project: p, apiKey: _apiKey, email: _email), routeName: 'NgmyAppRuntimeScreen');
                }
                if (v == 'copy' && p.publicUrl.isNotEmpty) _copyUrl(p.publicUrl);
                if (v == 'publish') await _submitOrPublish(p);
                if (v == 'delete') {
                  await ngmyDeleteUserAppProject(_email, p.id);
                  await _reload();
                }
              },
              itemBuilder: (_) => [
                const PopupMenuItem(value: 'edit', child: Text('Edit')),
                const PopupMenuItem(value: 'ai', child: Text('Talk to AI Copilot')),
                const PopupMenuItem(value: 'preview', child: Text('Preview')),
                if (p.publicUrl.isNotEmpty) const PopupMenuItem(value: 'copy', child: Text('Copy public link')),
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
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(
              gradient: const LinearGradient(colors: [Color(0xFFF59E0B), Color(0xFFEC4899)]),
              borderRadius: BorderRadius.circular(20),
            ),
            child: const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Build your own app', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                SizedBox(height: 6),
                Text('Talk to AI, pick a template, connect Firebase/Supabase, and get a public link.', style: TextStyle(color: Colors.white, fontSize: 13)),
              ],
            ),
          ),
          const SizedBox(height: 20),
          FilledButton.icon(
            onPressed: () => _openAiCopilot(),
            icon: const Icon(Icons.record_voice_over_rounded),
            label: const Text('Talk to AI — build your app'),
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFF6366F1), minimumSize: const Size(double.infinity, 52)),
          ),
          const SizedBox(height: 12),
          OutlinedButton.icon(
            onPressed: _createBlank,
            icon: const Icon(Icons.add_rounded),
            label: const Text('Start from blank'),
            style: OutlinedButton.styleFrom(minimumSize: const Size(double.infinity, 52)),
          ),
          const SizedBox(height: 24),
          Text('What you get', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
          const SizedBox(height: 10),
          _featureRow(Icons.link_rounded, 'Public URL when published — share on Google & social'),
          _featureRow(Icons.storage_rounded, 'Connect Firebase, Supabase, MongoDB, or custom API'),
          _featureRow(Icons.dashboard_rounded, 'Welcome, menu, content, form, and AI chat screens'),
          _featureRow(Icons.smart_toy_rounded, 'Command AI: "add a contact form", "change colors", etc.'),
        ],
      ),
    );
  }

  Widget _templatesTab(bool isDark) {
    return GridView.builder(
      padding: const EdgeInsets.all(16),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 12, crossAxisSpacing: 12, childAspectRatio: 0.92),
      itemCount: kNgmyAppTemplates.length,
      itemBuilder: (_, i) {
        final t = kNgmyAppTemplates[i];
        return InkWell(
          onTap: () => _createFromTemplate(t),
          borderRadius: BorderRadius.circular(16),
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              color: Color(t.themeColor).withOpacity(0.12),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: Color(t.themeColor).withOpacity(0.35)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(t.icon, style: const TextStyle(fontSize: 28)),
                const Spacer(),
                Text(t.name, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                const SizedBox(height: 4),
                Text(t.description, maxLines: 3, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54)),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _featureRow(IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(
        children: [
          Icon(icon, size: 18, color: const Color(0xFFF59E0B)),
          const SizedBox(width: 10),
          Expanded(child: Text(text, style: const TextStyle(fontSize: 13))),
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
        Card(
          color: const Color(0xFFF59E0B).withOpacity(0.12),
          child: ListTile(
            leading: const CircleAvatar(backgroundColor: Color(0xFFF59E0B), child: Icon(Icons.construction_rounded, color: Colors.white)),
            title: const Text('Bolt — AI App Copilot', style: TextStyle(fontWeight: FontWeight.w900)),
            subtitle: const Text('Talk and command: "Create a salon app", "Add pricing screen", "Connect Firebase"'),
            trailing: const Icon(Icons.arrow_forward_rounded),
            onTap: () => _openAiCopilot(),
          ),
        ),
        const SizedBox(height: 8),
        ...kNgmyAppBuilderActors.map((actor) {
          return Card(
            margin: const EdgeInsets.only(bottom: 10),
            child: ListTile(
              leading: CircleAvatar(backgroundColor: actor.color, child: Icon(actor.icon, color: Colors.white)),
              title: Text(actor.name, style: const TextStyle(fontWeight: FontWeight.w800)),
              subtitle: Text('${actor.role}\n${actor.description}', maxLines: 2, overflow: TextOverflow.ellipsis),
              isThreeLine: true,
              trailing: const Icon(Icons.chat_rounded),
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

  @override
  void initState() {
    super.initState();
    _project = widget.project;
    _nameC = TextEditingController(text: _project.name);
    _taglineC = TextEditingController(text: _project.tagline);
  }

  @override
  void dispose() {
    _nameC.dispose();
    _taglineC.dispose();
    super.dispose();
  }

  void _saveLocal() {
    setState(() {
      _project = _project.copyWith(name: _nameC.text.trim(), tagline: _taglineC.text.trim());
    });
  }

  Future<void> _persistAndPop() async {
    _saveLocal();
    await ngmySaveUserAppProject(widget.email, _project);
    if (mounted) Navigator.pop(context, _project);
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Edit App', style: TextStyle(fontWeight: FontWeight.w900)),
        actions: [
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
      body: ListView(
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
          const SizedBox(height: 12),
          ListTile(
            contentPadding: EdgeInsets.zero,
            title: const Text('Database connection', style: TextStyle(fontWeight: FontWeight.w800)),
            subtitle: Text(_project.database.isConnected ? _project.database.provider.label : 'Not connected — tap to add Firebase, Supabase, etc.'),
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
                Navigator.pop(
                  ctx,
                  NgmyAppScreen(id: id, title: titleC.text.trim(), kind: kind, data: const {'body': 'Your content here.'}),
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
    'Create a fitness coaching app with workouts and check-in form',
    'Add a pricing screen to my app',
    'Change the welcome message to say Hello Atlanta',
    'Connect my app to Firebase for form submissions',
    'Make the theme color purple',
  ];

  @override
  void initState() {
    super.initState();
    _project = widget.project;
    if (_project == null) {
      _messages.add({
        'role': 'ai',
        'text': 'Hi! I\'m Bolt, your AI app builder. Tell me what app you want — I\'ll create screens, forms, and navigation for you. Try: "Build a restaurant app with menu and reservations"',
      });
    } else {
      _messages.add({
        'role': 'ai',
        'text': 'I have "${_project!.name}" loaded. Tell me what to change — add screens, edit text, connect a database, or fix navigation.',
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
    return Scaffold(
      appBar: AppBar(
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Bolt AI Copilot', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
            Text(_project?.name ?? 'New app', style: const TextStyle(fontSize: 11)),
          ],
        ),
        actions: [
          if (_project != null)
            TextButton(
              onPressed: () => Navigator.pop(context, _project),
              child: const Text('Use app', style: TextStyle(fontWeight: FontWeight.w800)),
            ),
        ],
      ),
      body: Column(
        children: [
          if (_project != null)
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              color: const Color(0xFF10B981).withOpacity(0.12),
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
                return Align(
                  alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    padding: const EdgeInsets.all(12),
                    constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.85),
                    decoration: BoxDecoration(
                      color: isUser ? const Color(0xFFF59E0B).withOpacity(0.18) : Colors.grey.withOpacity(0.12),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Text(m['text'] ?? ''),
                  ),
                );
              },
            ),
          ),
          if (_busy) const LinearProgressIndicator(minHeight: 2),
          SizedBox(
            height: 44,
            child: ListView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              children: _hints.map((h) {
                return Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: ActionChip(label: Text(h, style: const TextStyle(fontSize: 11)), onPressed: _busy ? null : () => _send(h)),
                );
              }).toList(),
            ),
          ),
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
                      hintText: 'Command Bolt: create, edit, connect database…',
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                    ),
                    onSubmitted: (_) => _send(),
                  ),
                ),
                const SizedBox(width: 8),
                IconButton.filled(
                  style: IconButton.styleFrom(backgroundColor: const Color(0xFFF59E0B)),
                  onPressed: _busy ? null : () => _send(),
                  icon: const Icon(Icons.send_rounded),
                ),
              ],
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

  @override
  void initState() {
    super.initState();
    _screenId = widget.project.homeScreen.id;
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
            onPressed: () {
              final db = widget.project.database;
              final msg = db.isConnected
                  ? '$success (Saved locally — connect ${db.provider.label} in builder to sync to cloud.)'
                  : success;
              ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
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
