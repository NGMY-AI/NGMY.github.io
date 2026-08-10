import 'package:flutter/material.dart';

import 'ngmy_cashier_tab.dart';
import 'ngmy_delete_confirm_dialog.dart';
import 'ngmy_family_tree.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_builtin_thumbnails.dart';
import 'ngmy_worksheet_dialogs.dart';
import 'ngmy_worksheet_glow_frame.dart';
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

class _NgmyWorksheetsScreenState extends State<NgmyWorksheetsScreen> with WidgetsBindingObserver {
  _WorksheetTab _tab = _WorksheetTab.projects;
  List<WorksheetProject> _projects = [];
  bool _loading = true;
  int _familyTreeVersion = 0;

  double get _totalAll =>
      _projects.fold(0.0, (sum, p) => sum + p.totalSpending);

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _reload();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      _reload();
    }
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
    final saved = await upsertWorksheetProject(widget.userEmail, project);
    await _reload();
    if (!mounted) return;
    if (!saved) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Could not save project on this device. Please try again.'),
        ),
      );
      return;
    }
    WorksheetProject toOpen = project;
    for (final p in _projects) {
      if (p.id == project.id) {
        toOpen = p;
        break;
      }
    }
    if (result.thumbnailPath != null &&
        result.thumbnailPath!.trim().isNotEmpty &&
        (toOpen.thumbnailPath == null || toOpen.thumbnailPath!.trim().isEmpty)) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Project saved, but the photo could not be stored. Try choosing the photo again.'),
        ),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Project "${result.name}" saved on this device.')),
      );
    }
    _openProject(toOpen);
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

  Future<void> _importSharedProject(String choice) async {
    WorksheetProject? imported;
    if (choice == 'file') {
      imported = await ngmyPickAndParseWorksheetProjectBackup();
    } else if (choice == 'scan') {
      final raw = await ngmyScanWorksheetProjectQrPayload(context);
      if (raw != null && raw.trim().isNotEmpty) {
        imported = await ngmyWorksheetProjectFromShareRawAsync(raw);
      }
    }
    if (imported == null) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            choice == 'scan'
                ? 'Could not read that QR. Stay online for cloud project codes, or try Upload file.'
                : 'Could not read that project backup.',
          ),
        ),
      );
      return;
    }

    final project = ngmyWorksheetProjectCopyForImport(imported);
    final saved = await upsertWorksheetProject(widget.userEmail, project);
    await _reload();
    if (!mounted) return;
    if (!saved) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not save imported project to this device. Please try again.')),
      );
      return;
    }
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Imported "${project.name}"')),
    );
    _openProject(project);
  }

  Future<void> _confirmClearAll(WorksheetPalette p) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (c) => Dialog(
        backgroundColor: p.cardBg,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 64,
                height: 64,
                decoration: BoxDecoration(
                  color: const Color(0xFFEF4444).withValues(alpha: p.isDark ? 0.18 : 0.08),
                  shape: BoxShape.circle,
                  border: Border.all(color: const Color(0xFFEF4444).withValues(alpha: 0.28)),
                ),
                child: const Icon(Icons.delete_forever_rounded, color: Color(0xFFEF4444), size: 30),
              ),
              const SizedBox(height: 16),
              Text('Clear all projects?', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText)),
              const SizedBox(height: 8),
              Text(
                'This permanently removes every worksheet project on this device. This cannot be undone.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 13, height: 1.4, color: p.secondaryText),
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => Navigator.pop(c, false),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: p.primaryText,
                        side: BorderSide(color: p.cardBorder),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      onPressed: () => Navigator.pop(c, true),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFFEF4444),
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: const Text('Clear all', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
    if (ok == true) {
      await saveWorksheetProjects(widget.userEmail, []);
      await _reload();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('All projects cleared')));
    }
  }

  void _openSettings(WorksheetPalette p) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
          child: Container(
            decoration: BoxDecoration(
              color: p.cardBg,
              borderRadius: BorderRadius.circular(28),
              boxShadow: [BoxShadow(color: p.shadow, blurRadius: 28, offset: const Offset(0, 12))],
            ),
            clipBehavior: Clip.antiAlias,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.fromLTRB(20, 12, 20, 18),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: p.isDark
                          ? const [Color(0xFF064E3B), Color(0xFF0F766E)]
                          : const [Color(0xFF059669), Color(0xFF10B981)],
                    ),
                  ),
                  child: Column(
                    children: [
                      Container(
                        width: 40,
                        height: 4,
                        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.45), borderRadius: BorderRadius.circular(99)),
                      ),
                      const SizedBox(height: 14),
                      const Row(
                        children: [
                          Icon(Icons.sync_alt_rounded, color: Colors.white, size: 22),
                          SizedBox(width: 10),
                          Expanded(
                            child: Text(
                              'Transfer & settings',
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 4),
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          'Move worksheet projects between phones',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 12, fontWeight: FontWeight.w500),
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 18, 18, 20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('IMPORT PROJECT', style: TextStyle(fontSize: 11, letterSpacing: 1.1, fontWeight: FontWeight.w800, color: p.secondaryText)),
                      const SizedBox(height: 10),
                      Row(
                        children: [
                          Expanded(
                            child: _settingsActionCard(
                              p: p,
                              icon: Icons.qr_code_scanner_rounded,
                              title: 'Scan QR',
                              subtitle: 'Camera import',
                              color: const Color(0xFF8B5CF6),
                              onTap: () async {
                                Navigator.pop(ctx);
                                await _importSharedProject('scan');
                              },
                            ),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: _settingsActionCard(
                              p: p,
                              icon: Icons.upload_file_rounded,
                              title: 'Upload file',
                              subtitle: '.json backup',
                              color: const Color(0xFF0EA5E9),
                              onTap: () async {
                                Navigator.pop(ctx);
                                await _importSharedProject('file');
                              },
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 18),
                      Text('DANGER ZONE', style: TextStyle(fontSize: 11, letterSpacing: 1.1, fontWeight: FontWeight.w800, color: p.secondaryText)),
                      const SizedBox(height: 10),
                      Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: () async {
                            Navigator.pop(ctx);
                            await _confirmClearAll(p);
                          },
                          borderRadius: BorderRadius.circular(16),
                          child: Container(
                            width: double.infinity,
                            padding: const EdgeInsets.all(14),
                            decoration: BoxDecoration(
                              color: const Color(0xFFEF4444).withValues(alpha: p.isDark ? 0.14 : 0.06),
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(color: const Color(0xFFEF4444).withValues(alpha: 0.28)),
                            ),
                            child: Row(
                              children: [
                                Container(
                                  padding: const EdgeInsets.all(10),
                                  decoration: BoxDecoration(
                                    color: const Color(0xFFEF4444).withValues(alpha: 0.12),
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  child: const Icon(Icons.delete_forever_rounded, color: Color(0xFFEF4444), size: 22),
                                ),
                                const SizedBox(width: 12),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text('Clear all projects', style: TextStyle(fontWeight: FontWeight.w800, color: p.primaryText)),
                                      Text('Remove every project on this device', style: TextStyle(fontSize: 12, color: p.secondaryText)),
                                    ],
                                  ),
                                ),
                                Icon(Icons.chevron_right_rounded, color: p.secondaryText),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _settingsActionCard({
    required WorksheetPalette p,
    required IconData icon,
    required String title,
    required String subtitle,
    required Color color,
    required VoidCallback onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          padding: const EdgeInsets.fromLTRB(12, 14, 12, 14),
          decoration: BoxDecoration(
            color: p.isDark ? p.mutedSurface : Colors.white,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: p.cardBorder),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: color.withValues(alpha: 0.14),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(icon, color: color, size: 22),
              ),
              const SizedBox(height: 12),
              Text(title, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14, color: p.primaryText)),
              const SizedBox(height: 2),
              Text(subtitle, style: TextStyle(fontSize: 11, color: p.secondaryText)),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _openProjectMenu(WorksheetProject project, WorksheetPalette p) async {
    final action = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
          child: Container(
            decoration: BoxDecoration(
              color: p.cardBg,
              borderRadius: BorderRadius.circular(24),
              boxShadow: [BoxShadow(color: p.shadow, blurRadius: 24, offset: const Offset(0, 10))],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const SizedBox(height: 10),
                Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(color: p.cardBorder, borderRadius: BorderRadius.circular(99)),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 16, 18, 8),
                  child: Row(
                    children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(12),
                        child: SizedBox(
                          width: 48,
                          height: 48,
                          child: ngmyWorksheetThumbnail(
                            imageRef: project.thumbnailPath,
                            width: 48,
                            height: 48,
                            icon: Icons.folder_outlined,
                            iconColor: p.secondaryText,
                            borderRadius: BorderRadius.circular(12),
                            animate: true,
                          ),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(project.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: p.primaryText)),
                            Text(
                              '${project.items.length} items · ${ngmyFormatMoney(project.totalSpending)}',
                              style: TextStyle(fontSize: 12, color: p.secondaryText, fontWeight: FontWeight.w600),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const Divider(height: 1),
                _projectMenuTile(
                  p: p,
                  icon: Icons.sync_alt_rounded,
                  iconColor: WorksheetPalette.green,
                  title: 'Transfer project',
                  subtitle: 'QR code or backup file',
                  onTap: () => Navigator.pop(ctx, 'transfer'),
                ),
                _projectMenuTile(
                  p: p,
                  icon: Icons.delete_outline_rounded,
                  iconColor: const Color(0xFFEF4444),
                  title: 'Delete project',
                  subtitle: 'Remove from this device',
                  danger: true,
                  onTap: () => Navigator.pop(ctx, 'delete'),
                ),
                const SizedBox(height: 10),
              ],
            ),
          ),
        ),
      ),
    );
    if (!mounted || action == null) return;
    if (action == 'transfer') {
      showNgmyWorksheetProjectShareSheet(
        context,
        ownerEmail: widget.userEmail,
        project: project,
        onImported: (imported) async {
          await upsertWorksheetProject(widget.userEmail, imported);
          await _reload();
        },
      );
    } else if (action == 'delete') {
      await _confirmDeleteProject(project, p);
    }
  }

  Widget _projectMenuTile({
    required WorksheetPalette p,
    required IconData icon,
    required Color iconColor,
    required String title,
    required String subtitle,
    required VoidCallback onTap,
    bool danger = false,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
          child: Row(
            children: [
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: iconColor.withValues(alpha: 0.12),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(icon, color: iconColor, size: 22),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: TextStyle(fontWeight: FontWeight.w800, color: danger ? const Color(0xFFEF4444) : p.primaryText)),
                    Text(subtitle, style: TextStyle(fontSize: 12, color: p.secondaryText)),
                  ],
                ),
              ),
              Icon(Icons.chevron_right_rounded, color: p.secondaryText),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _confirmDeleteProject(WorksheetProject project, WorksheetPalette p) async {
    final ok = await showNgmyDeleteConfirm(
      context,
      title: 'Delete project?',
      message: 'Remove “${project.name}” and all of its budget items from this device?',
    );
    if (ok == true) {
      await deleteWorksheetProject(widget.userEmail, project.id);
      await _reload();
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Deleted “${project.name}”')),
      );
    }
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
                      NgmyCashierTab(
                        userEmail: widget.userEmail,
                        palette: p,
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

  WorksheetFrameStyle get _activeTabFrameStyle {
    switch (_tab) {
      case _WorksheetTab.projects:
        return WorksheetFrameStyle.projects;
      case _WorksheetTab.cashier:
        return WorksheetFrameStyle.cashier;
      case _WorksheetTab.familyTree:
        return WorksheetFrameStyle.familyTree;
    }
  }

  Widget _headerCard(WorksheetPalette p) {
    return WorksheetGlowFrame(
      style: WorksheetFrameStyle.header,
      glowStrength: 1.0,
      child: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          color: WorksheetPalette.green,
          borderRadius: BorderRadius.circular(15),
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
      ),
    );
  }

  Widget _tabBar(WorksheetPalette p) {
    return WorksheetGlowFrame(
      style: _activeTabFrameStyle,
      glowStrength: 0.95,
      borderRadius: 14,
      padding: const EdgeInsets.all(4),
      child: Container(
        decoration: BoxDecoration(
          color: p.isDark ? p.mutedSurface : Colors.white,
          borderRadius: BorderRadius.circular(13),
        ),
        child: Row(
          children: [
            _tabChip(p: p, tab: _WorksheetTab.projects, icon: Icons.folder_outlined, label: 'Projects'),
            _tabChip(p: p, tab: _WorksheetTab.cashier, icon: Icons.payments_outlined, label: 'Cashier'),
            _tabChip(p: p, tab: _WorksheetTab.familyTree, icon: Icons.account_tree_outlined, label: 'Family Tree'),
          ],
        ),
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
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 220),
            curve: Curves.easeOutCubic,
            padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 6),
            decoration: BoxDecoration(
              color: active ? WorksheetPalette.green : Colors.transparent,
              borderRadius: BorderRadius.circular(12),
              border: active
                  ? Border.all(color: Colors.white.withValues(alpha: 0.55), width: 2)
                  : Border.all(color: Colors.transparent, width: 2),
              boxShadow: active
                  ? [
                      BoxShadow(
                        color: WorksheetPalette.green.withValues(alpha: 0.42),
                        blurRadius: 14,
                        spreadRadius: 0.5,
                        offset: const Offset(0, 4),
                      ),
                    ]
                  : null,
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
        WorksheetNewProjectButton(onPressed: _createProject),
      ],
    );
  }

  Widget _projectsBody(WorksheetPalette p) {
    if (_projects.isEmpty) {
      return WorksheetGlowFrame(
        style: WorksheetFrameStyle.projects,
        glowStrength: 1.05,
        padding: const EdgeInsets.fromLTRB(24, 32, 24, 28),
        child: Container(
          width: double.infinity,
          decoration: BoxDecoration(
            color: p.cardBg,
            borderRadius: BorderRadius.circular(15),
          ),
          child: Column(
          children: [
            Container(
              width: 108,
              height: 108,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: const LinearGradient(
                  colors: [WorksheetPalette.green, WorksheetPalette.greenDark],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                boxShadow: [
                  BoxShadow(
                    color: WorksheetPalette.green.withValues(alpha: 0.5),
                    blurRadius: 28,
                    spreadRadius: 2,
                    offset: const Offset(0, 10),
                  ),
                ],
              ),
              child: const Icon(Icons.folder_open_rounded, color: Colors.white, size: 52),
            ),
            const SizedBox(height: 20),
            Text('No Projects Yet', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: p.primaryText)),
            const SizedBox(height: 8),
            Text(
              'Create a new project, or import one someone shared with you.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 14, color: p.secondaryText, height: 1.4),
            ),
            const SizedBox(height: 22),
            Row(
              children: [
                Expanded(
                  child: _emptyImportAction(
                    p: p,
                    icon: Icons.qr_code_scanner_rounded,
                    label: 'Scan QR',
                    onTap: () => _importSharedProject('scan'),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: _emptyImportAction(
                    p: p,
                    icon: Icons.upload_file_rounded,
                    label: 'Upload file',
                    onTap: () => _importSharedProject('file'),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 14),
            FilledButton(
              onPressed: _createProject,
              style: FilledButton.styleFrom(
                backgroundColor: WorksheetPalette.green,
                foregroundColor: Colors.white,
                minimumSize: const Size(double.infinity, 48),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text('Create Project', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
            ),
          ],
        ),
        ),
      );
    }

    return WorksheetGlowFrame(
      style: WorksheetFrameStyle.projects,
      glowStrength: 1.0,
      padding: const EdgeInsets.all(10),
      child: Column(children: _projects.map((proj) => _projectTile(proj, p)).toList()),
    );
  }

  Widget _emptyImportAction({
    required WorksheetPalette p,
    required IconData icon,
    required String label,
    required VoidCallback onTap,
  }) {
    return Material(
      color: WorksheetPalette.green.withValues(alpha: p.isDark ? 0.18 : 0.1),
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.45)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, color: WorksheetPalette.greenDark, size: 26),
              const SizedBox(height: 8),
              Text(
                label,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: WorksheetPalette.greenDark,
                  fontWeight: FontWeight.w800,
                  fontSize: 13,
                ),
              ),
            ],
          ),
        ),
      ),
    );
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
                  child: ngmyWorksheetThumbnail(
                    imageRef: project.thumbnailPath,
                    width: double.infinity,
                    height: double.infinity,
                    icon: Icons.folder_outlined,
                    iconColor: p.secondaryText,
                    borderRadius: BorderRadius.zero,
                    animate: true,
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
                      onPressed: () => _openProjectMenu(project, p),
                      icon: Icon(Icons.more_vert_rounded, color: p.secondaryText),
                      tooltip: 'Project options',
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

}
