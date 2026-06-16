import 'package:flutter/material.dart';

import 'ngmy_family_tree.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_dialogs.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheet_project.dart';
import 'ngmy_worksheet_project_share.dart';
import 'ngmy_worksheets_storage.dart';

enum _WorksheetTab { projects, cashier, familyTree }

class NgmyWorksheetsScreen extends StatefulWidget {
  final String userEmail;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description) onChargeWallet;
  final VoidCallback onDataChanged;

  const NgmyWorksheetsScreen({
    super.key,
    required this.userEmail,
    required this.user,
    required this.config,
    required this.onChargeWallet,
    required this.onDataChanged,
  });

  @override
  State<NgmyWorksheetsScreen> createState() => _NgmyWorksheetsScreenState();
}

class _NgmyWorksheetsScreenState extends State<NgmyWorksheetsScreen> {
  _WorksheetTab _tab = _WorksheetTab.projects;
  List<WorksheetProject> _projects = [];
  bool _loading = true;
  int _familyTreeVersion = 0;

  double get _totalAll =>
      _projects.fold(0.0, (sum, p) => sum + p.totalSpending);

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await loadWorksheetProjects(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _projects = list;
      _loading = false;
    });
  }

  Future<void> _createProject([String? presetName]) async {
    final result = await showCreateProjectDialog(context, presetName: presetName);
    if (result == null || !mounted) return;

    final project = WorksheetProject(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      name: result.name,
      thumbnailPath: result.thumbnailPath,
      createdAt: DateTime.now(),
    );
    await upsertWorksheetProject(widget.userEmail, project);
    await _reload();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Project "${result.name}" created.')),
    );
    _openProject(project);
  }

  Future<void> _openProject(WorksheetProject project) async {
    final updated = await NgmyNavigator.push<WorksheetProject>(
      context,
      NgmyWorksheetProjectScreen(userEmail: widget.userEmail, project: project),
      routeName: 'NgmyWorksheetProjectScreen',
    );
    if (updated != null) {
      await upsertWorksheetProject(widget.userEmail, updated);
    }
    await _reload();
  }

  Future<void> _importSharedProject() async {
    final choice = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Import shared project'),
        content: const Text('Scan a project QR code or upload a backup file from someone who shared their worksheet project.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          TextButton(onPressed: () => Navigator.pop(ctx, 'file'), child: const Text('Upload file')),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, 'scan'),
            style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
            child: const Text('Scan QR'),
          ),
        ],
      ),
    );
    if (choice == null || !mounted) return;

    WorksheetProject? imported;
    if (choice == 'file') {
      imported = await ngmyPickAndParseWorksheetProjectBackup();
    } else if (choice == 'scan') {
      final raw = await ngmyScanWorksheetProjectQrPayload(context);
      if (raw != null && raw.trim().isNotEmpty) {
        imported = ngmyWorksheetProjectFromShareRaw(raw);
      }
    }
    if (imported == null) {
      if (choice != 'file' && choice != 'scan') return;
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not read that project backup.')),
      );
      return;
    }

    final project = ngmyWorksheetProjectCopyForImport(imported);
    await upsertWorksheetProject(widget.userEmail, project);
    await _reload();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Imported "${project.name}"')),
    );
    _openProject(project);
  }

  void _openSettings(WorksheetPalette p) {
    showModalBottomSheet(
      context: context,
      backgroundColor: p.cardBg,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Worksheets Settings',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: p.primaryText)),
              const SizedBox(height: 12),
              ListTile(
                leading: const Icon(Icons.file_download_outlined, color: WorksheetPalette.green),
                title: Text('Import shared project', style: TextStyle(color: p.primaryText)),
                subtitle: Text('From QR or backup file', style: TextStyle(color: p.secondaryText, fontSize: 12)),
                onTap: () async {
                  Navigator.pop(ctx);
                  await _importSharedProject();
                },
              ),
              ListTile(
                leading: const Icon(Icons.delete_outline, color: Colors.redAccent),
                title: Text('Clear all projects', style: TextStyle(color: p.primaryText)),
                onTap: () async {
                  Navigator.pop(ctx);
                  final ok = await showDialog<bool>(
                    context: context,
                    builder: (c) => AlertDialog(
                      title: const Text('Clear all projects?'),
                      content: const Text('This cannot be undone.'),
                      actions: [
                        TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
                        FilledButton(
                          onPressed: () => Navigator.pop(c, true),
                          style: FilledButton.styleFrom(backgroundColor: Colors.redAccent),
                          child: const Text('Clear'),
                        ),
                      ],
                    ),
                  );
                  if (ok == true) {
                    await saveWorksheetProjects(widget.userEmail, []);
                    await _reload();
                  }
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return Scaffold(
      backgroundColor: p.pageBg,
      body: SafeArea(
        child: _loading
            ? const Center(child: CircularProgressIndicator(color: WorksheetPalette.green))
            : SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(20, 8, 20, 32),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _backRow(p),
                    const SizedBox(height: 12),
                    _headerCard(p),
                    const SizedBox(height: 16),
                    _tabBar(p),
                    const SizedBox(height: 18),
                    if (_tab == _WorksheetTab.projects) ...[
                      _projectsHeader(p),
                      const SizedBox(height: 14),
                      _projectsBody(p),
                    ] else if (_tab == _WorksheetTab.cashier)
                      _placeholderTab(
                        p: p,
                        icon: Icons.calculate_outlined,
                        title: 'Cashier',
                        subtitle: 'Track daily spending and receipts here.',
                      )
                    else
                      NgmyFamilyTreeTab(
                        key: ValueKey(_familyTreeVersion),
                        userEmail: widget.userEmail,
                        user: widget.user,
                        config: widget.config,
                        onChargeWallet: widget.onChargeWallet,
                        onDataChanged: () {
                          widget.onDataChanged();
                          setState(() => _familyTreeVersion++);
                        },
                        onChanged: () => setState(() => _familyTreeVersion++),
                      ),
                  ],
                ),
              ),
      ),
    );
  }

  Widget _backRow(WorksheetPalette p) {
    return InkWell(
      onTap: () => NgmyNavigator.pop(context),
      borderRadius: BorderRadius.circular(8),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.arrow_back_ios_new, size: 16, color: p.secondaryText),
            const SizedBox(width: 6),
            Text(
              'Back to Profile',
              style: TextStyle(color: p.secondaryText, fontWeight: FontWeight.w600, fontSize: 14),
            ),
          ],
        ),
      ),
    );
  }

  Widget _headerCard(WorksheetPalette p) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: WorksheetPalette.green,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: WorksheetPalette.green.withValues(alpha: 0.35),
            blurRadius: 16,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.22),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Icon(Icons.folder_open_rounded, color: Colors.white, size: 24),
                ),
                const SizedBox(width: 12),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Worksheets',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 22,
                          fontWeight: FontWeight.w900,
                          height: 1.1,
                        ),
                      ),
                      SizedBox(height: 4),
                      Text(
                        'Track your project spending',
                        style: TextStyle(
                          color: Color(0xD9FFFFFF),
                          fontSize: 13,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                ),
                Material(
                  color: Colors.transparent,
                  child: InkWell(
                    onTap: () => _openSettings(p),
                    borderRadius: BorderRadius.circular(12),
                    child: Container(
                      width: 40,
                      height: 40,
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.22),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Icon(Icons.settings_outlined, color: Colors.white, size: 22),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Container(
            width: double.infinity,
            margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            decoration: BoxDecoration(
              color: WorksheetPalette.greenDark.withValues(alpha: 0.55),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Total All Projects',
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.85),
                    fontSize: 12,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  ngmyFormatMoney(_totalAll),
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                    fontWeight: FontWeight.w900,
                    height: 1,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _tabBar(WorksheetPalette p) {
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: p.isDark ? p.mutedSurface : Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: p.cardBorder),
      ),
      child: Row(
        children: [
          _tabChip(p: p, tab: _WorksheetTab.projects, icon: Icons.folder_outlined, label: 'Projects'),
          _tabChip(p: p, tab: _WorksheetTab.cashier, icon: Icons.calculate_outlined, label: 'Cashier'),
          _tabChip(p: p, tab: _WorksheetTab.familyTree, icon: Icons.account_tree_outlined, label: 'Family Tree'),
        ],
      ),
    );
  }

  Widget _tabChip({
    required WorksheetPalette p,
    required _WorksheetTab tab,
    required IconData icon,
    required String label,
  }) {
    final active = _tab == tab;
    return Expanded(
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => setState(() => _tab = tab),
          borderRadius: BorderRadius.circular(12),
          child: Container(
            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 6),
            decoration: BoxDecoration(
              color: active ? WorksheetPalette.green : Colors.transparent,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 16, color: active ? Colors.white : p.tabInactive),
                const SizedBox(width: 5),
                Flexible(
                  child: Text(
                    label,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w700,
                      color: active ? Colors.white : p.tabInactive,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _projectsHeader(WorksheetPalette p) {
    return Row(
      children: [
        Text(
          'Projects (${_projects.length})',
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: p.primaryText),
        ),
        const Spacer(),
        Material(
          color: WorksheetPalette.green,
          borderRadius: BorderRadius.circular(10),
          child: InkWell(
            onTap: _createProject,
            borderRadius: BorderRadius.circular(10),
            child: const Padding(
              padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.add, color: Colors.white, size: 18),
                  SizedBox(width: 4),
                  Text(
                    'New Project',
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13),
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _projectsBody(WorksheetPalette p) {
    if (_projects.isEmpty) {
      return Container(
        width: double.infinity,
        padding: const EdgeInsets.fromLTRB(24, 36, 24, 32),
        decoration: BoxDecoration(
          color: p.cardBg,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: p.cardBorder),
          boxShadow: [BoxShadow(color: p.shadow, blurRadius: 14, offset: const Offset(0, 4))],
        ),
        child: Column(
          children: [
            Icon(Icons.folder_open_outlined, size: 56, color: p.secondaryText.withValues(alpha: 0.45)),
            const SizedBox(height: 16),
            Text('No Projects Yet', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: p.primaryText)),
            const SizedBox(height: 8),
            Text(
              'Create your first project with a 16:9 thumbnail and budget items.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 14, color: p.secondaryText, height: 1.4),
            ),
            const SizedBox(height: 22),
            FilledButton(
              onPressed: _createProject,
              style: FilledButton.styleFrom(
                backgroundColor: WorksheetPalette.green,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 14),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text('Create Project', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
            ),
          ],
        ),
      );
    }

    return Column(children: _projects.map((proj) => _projectTile(proj, p)).toList());
  }

  Widget _projectTile(WorksheetProject project, WorksheetPalette p) {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: p.cardBg,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: p.cardBorder),
        boxShadow: [BoxShadow(color: p.shadow, blurRadius: 10, offset: const Offset(0, 3))],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => _openProject(project),
          borderRadius: BorderRadius.circular(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(14)),
                child: AspectRatio(
                  aspectRatio: 16 / 9,
                  child: ngmyImageOrPlaceholder(
                    imageRef: project.thumbnailPath,
                    width: double.infinity,
                    height: double.infinity,
                    icon: Icons.folder_outlined,
                    iconColor: p.secondaryText,
                    borderRadius: BorderRadius.zero,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(14),
                child: Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(project.name, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: p.primaryText)),
                          const SizedBox(height: 4),
                          Text(
                            '${project.items.length} budget items · ${ngmyFormatMoney(project.totalSpending)}',
                            style: const TextStyle(color: WorksheetPalette.greenDark, fontWeight: FontWeight.w700, fontSize: 13),
                          ),
                        ],
                      ),
                    ),
                    IconButton(
                      onPressed: () async {
                        final ok = await showDialog<bool>(
                          context: context,
                          builder: (c) => AlertDialog(
                            title: const Text('Delete project?'),
                            content: Text('Remove "${project.name}"?'),
                            actions: [
                              TextButton(onPressed: () => Navigator.pop(c, false), child: const Text('Cancel')),
                              FilledButton(
                                onPressed: () => Navigator.pop(c, true),
                                style: FilledButton.styleFrom(backgroundColor: Colors.redAccent),
                                child: const Text('Delete'),
                              ),
                            ],
                          ),
                        );
                        if (ok == true) {
                          await deleteWorksheetProject(widget.userEmail, project.id);
                          await _reload();
                        }
                      },
                      icon: Icon(Icons.more_vert, color: p.secondaryText),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _placeholderTab({
    required WorksheetPalette p,
    required IconData icon,
    required String title,
    required String subtitle,
  }) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(24, 36, 24, 32),
      decoration: BoxDecoration(
        color: p.cardBg,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: p.cardBorder),
        boxShadow: [BoxShadow(color: p.shadow, blurRadius: 14, offset: const Offset(0, 4))],
      ),
      child: Column(
        children: [
          Icon(icon, size: 56, color: p.secondaryText.withValues(alpha: 0.45)),
          const SizedBox(height: 16),
          Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: p.primaryText)),
          const SizedBox(height: 8),
          Text(subtitle, textAlign: TextAlign.center, style: TextStyle(fontSize: 14, color: p.secondaryText, height: 1.4)),
        ],
      ),
    );
  }
}
