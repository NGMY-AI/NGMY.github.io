import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_delete_confirm_dialog.dart';
import 'ngmy_family_book_ui.dart';
import 'ngmy_family_tree_payments.dart';
import 'ngmy_family_tree_sync.dart';
import 'ngmy_family_tree_sync_ui.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_dialogs.dart';
import 'ngmy_worksheet_glow_frame.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheets_storage.dart';
import 'ngmy_stripe_payments.dart';

class NgmyFamilyTreeTab extends StatefulWidget {
  final String userEmail;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description) onChargeWallet;
  final VoidCallback onDataChanged;
  final VoidCallback onChanged;

  const NgmyFamilyTreeTab({
    super.key,
    required this.userEmail,
    required this.user,
    required this.config,
    required this.onChargeWallet,
    required this.onDataChanged,
    required this.onChanged,
  });

  @override
  State<NgmyFamilyTreeTab> createState() => _NgmyFamilyTreeTabState();
}

class _NgmyFamilyTreeTabState extends State<NgmyFamilyTreeTab> {
  List<FamilyTree> _trees = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _reload();
    final email = widget.userEmail;
    if (email.isNotEmpty) {
      unawaited(NgmyFamilyTreeBackupCodes.syncForUser(
        email,
        widget.config,
        isAdmin: (widget.user as dynamic).isAdmin == true,
      ));
    }
  }

  bool get _isAdmin => (widget.user as dynamic).isAdmin == true;

  Future<void> _openSync() async {
    await showNgmyFamilyTreeSyncPage(
      context,
      user: widget.user,
      config: widget.config,
      isAdmin: _isAdmin,
      onRestored: () {
        unawaited(_reload());
        widget.onDataChanged();
        widget.onChanged();
      },
    );
    await _reload();
  }

  Future<void> _openImportSync() async {
    await showNgmyFamilyTreeSyncPage(
      context,
      user: widget.user,
      config: widget.config,
      isAdmin: _isAdmin,
      importOnly: true,
      onRestored: () {
        unawaited(_reload());
        widget.onDataChanged();
        widget.onChanged();
      },
    );
    await _reload();
  }

  /// Shows the trees saved on this phone right away, then swaps in the cloud-merged list.
  /// Before, the page waited on three database calls (up to 12 s each) and a failed one
  /// left the spinner up forever.
  Future<void> _reload() async {
    try {
      final local = await loadFamilyTreesLocalOnly(widget.userEmail);
      if (mounted && (_loading || local.isNotEmpty)) {
        setState(() {
          if (local.isNotEmpty || _trees.isEmpty) _trees = local;
          _loading = false;
        });
      }
    } catch (_) {}
    try {
      final trees = await loadFamilyTrees(widget.userEmail).timeout(const Duration(seconds: 25));
      if (!mounted) return;
      setState(() => _trees = trees);
    } catch (_) {
      // Offline / slow: keep what the phone has.
    } finally {
      if (mounted && _loading) setState(() => _loading = false);
    }
  }

  Future<void> _forceCloudSync() async {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Syncing family trees with the database…'), duration: Duration(seconds: 2)),
    );
    final trees = await loadFamilyTrees(widget.userEmail);
    final cloudOk = await saveFamilyTrees(widget.userEmail, trees);
    final after = await loadFamilyTrees(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _trees = after;
      _loading = false;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          cloudOk
              ? 'Family trees synced — ${_trees.length} tree(s) on this phone and in the database.'
              : 'Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.',
        ),
        backgroundColor: cloudOk ? Colors.green : Colors.orange,
        duration: const Duration(seconds: 5),
      ),
    );
    widget.onChanged();
  }

  Future<void> _createTree() async {
    final result = await showCreateFamilyTreeDialog(context);
    if (result == null || !mounted) return;

    final name = result.name.trim();
    if (name.isEmpty) return;

    final fee = NgmyFamilyTreePayments.createFeeFromConfig(widget.config);
    final paid = await NgmyFamilyTreePayments.confirmAndCharge(
      context: context,
      user: widget.user,
      config: widget.config,
      amount: fee,
      title: 'Create Family Tree',
      message: 'Each family tree costs \$${fee.toStringAsFixed(2)} (one-time per tree).',
      onCharge: widget.onChargeWallet,
    );
    if (!paid || !mounted) return;

    final tree = FamilyTree(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      name: name.toUpperCase(),
      code: generateFamilyTreeCode(name),
      createdAt: DateTime.now(),
      ownerEmail: widget.userEmail,
      localRole: FamilyTreeAccessRole.owner,
    );
    await upsertFamilyTree(widget.userEmail, tree);
    await _reload();
    widget.onDataChanged();
    widget.onChanged();
    if (!mounted) return;
    _openTree(tree);
  }

  Future<void> _openTree(FamilyTree tree) async {
    final localTrees = await loadFamilyTreesLocalOnly(widget.userEmail);
    final local = localTrees.where((t) => t.id == tree.id).firstOrNull;
    final updated = await NgmyNavigator.push<FamilyTree>(
      context,
      NgmyFamilyTreeDetailScreen(
        userEmail: widget.userEmail,
        user: widget.user,
        config: widget.config,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
        tree: local ?? tree,
      ),
      routeName: 'NgmyFamilyTreeDetailScreen',
    );
    if (updated != null) {
      await upsertFamilyTree(widget.userEmail, updated);
    }
    await _reload();
    widget.onChanged();
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    if (_loading) {
      return Center(child: CircularProgressIndicator(color: p.secondaryText));
    }
    if (_trees.isEmpty) {
      return _emptyState(p);
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Text(
              'Family Trees (${_trees.length})',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: p.primaryText),
            ),
            const Spacer(),
            if (_trees.isNotEmpty)
              IconButton(
                tooltip: 'Sync family trees with database',
                onPressed: () => unawaited(_forceCloudSync()),
                icon: Icon(Icons.cloud_sync_rounded, color: WorksheetPalette.green),
              ),
            if (_trees.isNotEmpty)
              IconButton(
                tooltip: 'Transfer / backup file',
                onPressed: _openSync,
                icon: Icon(Icons.sync_rounded, color: WorksheetPalette.green),
              ),
            FilledButton.icon(
              onPressed: _createTree,
              style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
              icon: const Icon(Icons.add, size: 18),
              label: const Text('New Tree'),
            ),
          ],
        ),
        const SizedBox(height: 14),
        Column(
          children: [
            for (var i = 0; i < _trees.length; i++) ...[
              if (i > 0) const SizedBox(height: 12),
              WorksheetGlowFrame(
                style: WorksheetFrameStyle.familyTree,
                glowStrength: 1.0,
                borderRadius: 14,
                // Lights hug the tree card — no oversized outer box.
                padding: EdgeInsets.zero,
                child: _treeCard(_trees[i], p),
              ),
            ],
          ],
        ),
      ],
    );
  }

  Widget _emptyState(WorksheetPalette p) {
    return WorksheetGlowFrame(
      style: WorksheetFrameStyle.familyTree,
      glowStrength: 1.05,
      borderRadius: 15,
      padding: EdgeInsets.zero,
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.fromLTRB(24, 36, 24, 32),
        decoration: BoxDecoration(
          color: p.cardBg,
          borderRadius: BorderRadius.circular(15),
        ),
        child: Column(
          children: [
            Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: _openImportSync,
                customBorder: const CircleBorder(),
                child: Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: WorksheetPalette.green.withValues(alpha: 0.12),
                    border: Border.all(color: WorksheetPalette.green, width: 2),
                  ),
                  child: const Icon(Icons.park_outlined, color: WorksheetPalette.green, size: 32),
                ),
              ),
            ),
            const SizedBox(height: 16),
            Text('No Family Trees Yet', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: p.primaryText)),
            const SizedBox(height: 8),
            Text(
              'Create a family tree with names, photos, notes, and generations.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 14, color: p.secondaryText, height: 1.4),
            ),
            const SizedBox(height: 22),
            FilledButton(
              onPressed: _createTree,
              style: FilledButton.styleFrom(
                backgroundColor: WorksheetPalette.teal,
                padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 14),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              child: const Text('Create Family Tree', style: TextStyle(fontWeight: FontWeight.w700)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _treeCard(FamilyTree tree, WorksheetPalette p) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: p.cardBg,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: p.cardBorder.withValues(alpha: 0.55)),
        boxShadow: [BoxShadow(color: p.shadow, blurRadius: 10, offset: const Offset(0, 3))],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => _openTree(tree),
          borderRadius: BorderRadius.circular(14),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(
              children: [
                Container(
                  width: 48,
                  height: 48,
                  decoration: BoxDecoration(
                    color: WorksheetPalette.green.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Icon(Icons.park_outlined, color: WorksheetPalette.green),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(tree.name, style: TextStyle(fontWeight: FontWeight.w800, color: p.primaryText)),
                      const SizedBox(height: 2),
                      Text(
                        '${tree.visibleMemberCount} members · Code: ${tree.code}'
                        '${tree.isPrivate ? '' : ' · Public'}'
                        '${tree.isViewOnly ? ' · View only' : ''}',
                        style: TextStyle(color: p.secondaryText, fontSize: 12),
                      ),
                    ],
                  ),
                ),
                Icon(Icons.chevron_right, color: p.secondaryText),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class NgmyFamilyTreeDetailScreen extends StatefulWidget {
  final String userEmail;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description) onChargeWallet;
  final VoidCallback onDataChanged;
  final FamilyTree tree;

  const NgmyFamilyTreeDetailScreen({
    super.key,
    required this.userEmail,
    required this.user,
    required this.config,
    required this.onChargeWallet,
    required this.onDataChanged,
    required this.tree,
  });

  @override
  State<NgmyFamilyTreeDetailScreen> createState() =>
      _NgmyFamilyTreeDetailScreenState();
}

class _NgmyFamilyTreeDetailScreenState extends State<NgmyFamilyTreeDetailScreen> {
  late FamilyTree _tree;
  final List<FamilyTree> _undoStack = [];
  bool _showHidden = false;
  final Set<String> _expandedChildGroups = {};
  final TransformationController _zoom = TransformationController();
  bool _didCenterRoot = false;
  String? _centeredForTreeId;

  @override
  void initState() {
    super.initState();
    _tree = widget.tree;
    unawaited(_loadLocalTree());
    final email = widget.userEmail;
    if (email.isNotEmpty) {
      unawaited(NgmyFamilyTreeBackupCodes.syncForUser(
        email,
        widget.config,
        isAdmin: (widget.user as dynamic).isAdmin == true,
      ));
    }
  }

  @override
  void dispose() {
    _zoom.dispose();
    super.dispose();
  }

  bool get _isAdmin => (widget.user as dynamic).isAdmin == true;

  bool get _canEdit => familyTreeCanEdit(_tree, widget.userEmail);

  Future<void> _togglePrivacy() async {
    if (!_isAdmin) {
      _toast('Only an admin can make a family tree public or private.');
      return;
    }
    final nextPrivate = !_tree.isPrivate;
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text(nextPrivate ? 'Make private?' : 'Make public?'),
        content: Text(
          nextPrivate
              ? 'Private trees are only visible to the owner and invited collaborators.'
              : 'Public trees appear in Family Trees for every NGMY user (view only for others).',
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, true),
            style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
            child: Text(nextPrivate ? 'Make private' : 'Make public'),
          ),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    _pushUndo();
    setState(() => _tree = _tree.copyWith(isPrivate: nextPrivate));
    await _persist();
    widget.onDataChanged();
    _toast(nextPrivate ? 'Family tree is now private.' : 'Family tree is now public for all users.');
  }

  /// Fits the whole tree on screen once per tree (not smaller than a readable size),
  /// with the root family in the middle.
  void _scheduleFit({required Size viewport, required Size content, required double rootX}) {
    if (_centeredForTreeId == _tree.id && _didCenterRoot) return;
    _didCenterRoot = true;
    _centeredForTreeId = _tree.id;
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) _fit(viewport, content, rootX);
    });
  }

  void _fit(Size viewport, Size content, double rootX) {
    final s = math.min(1.0, math.max(0.45, math.min(viewport.width / content.width, viewport.height / content.height)));
    final tx = content.width * s <= viewport.width ? (viewport.width - content.width * s) / 2 : viewport.width / 2 - rootX * s;
    final ty = content.height * s <= viewport.height ? (viewport.height - content.height * s) / 2 : 8.0;
    _zoom.value = Matrix4.identity()
      ..translateByDouble(tx, ty, 0, 1)
      ..scaleByDouble(s, s, 1, 1);
  }

  /// Zoom buttons: zoom around the middle of the screen.
  void _zoomBy(double factor, Size viewport) {
    final m = _zoom.value.clone();
    final current = m.getMaxScaleOnAxis();
    final target = (current * factor).clamp(0.2, 3.0);
    final f = target / current;
    final c = Offset(viewport.width / 2, viewport.height / 2);
    _zoom.value = Matrix4.identity()
      ..translateByDouble(c.dx, c.dy, 0, 1)
      ..scaleByDouble(f, f, 1, 1)
      ..translateByDouble(-c.dx, -c.dy, 0, 1)
      ..multiply(m);
  }

  Future<void> _loadLocalTree() async {
    final trees = await loadFamilyTreesLocalOnly(widget.userEmail);
    final fresh = trees.where((t) => t.id == widget.tree.id).firstOrNull;
    if (fresh != null && mounted) {
      setState(() => _tree = fresh);
    }
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _openSync() async {
    await showNgmyFamilyTreeSyncPage(
      context,
      user: widget.user,
      config: widget.config,
      isAdmin: _isAdmin,
      onlyTreeId: _tree.id,
      onRestored: () async {
        final trees = await loadFamilyTrees(widget.userEmail);
        final updated = trees.where((t) => t.id == _tree.id).firstOrNull;
        if (updated != null && mounted) {
          setState(() => _tree = updated);
        }
        widget.onDataChanged();
      },
    );
    final trees = await loadFamilyTrees(widget.userEmail);
    final updated = trees.where((t) => t.id == _tree.id).firstOrNull;
    if (updated != null && mounted) {
      setState(() => _tree = updated);
    }
  }

  void _pushUndo() {
    _undoStack.add(_tree);
    if (_undoStack.length > 25) _undoStack.removeAt(0);
  }

  Future<void> _persist() async {
    await upsertFamilyTree(widget.userEmail, _tree);
  }

  Future<void> _renameTree() async {
    if (!_canEdit) {
      _toast('View only — you cannot rename this shared tree.');
      return;
    }
    final name = await showWorksheetTextDialog(
      context,
      title: 'Edit family tree name',
      label: 'Family tree name',
      initialValue: _tree.name,
      confirmLabel: 'Save',
    );
    if (name == null || !mounted) return;
    final cleaned = name.trim().toUpperCase();
    if (cleaned.isEmpty) return;
    _pushUndo();
    setState(() {
      _tree = _tree.copyWith(name: cleaned, code: generateFamilyTreeCode(cleaned));
    });
    await _persist();
  }

  Future<void> _openTreeSettings() async {
    if (!_canEdit) {
      _toast('View only — display settings are locked.');
      return;
    }
    final p = WorksheetPalette.of(context);
    var limit = _tree.visibleChildrenPerParent;
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setLocal) => AlertDialog(
          backgroundColor: p.cardBg,
          title: Text('Tree display settings', style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w800)),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'How many children to show per parent before a "+ more" dropdown (0 = show all).',
                style: TextStyle(color: p.secondaryText, height: 1.35, fontSize: 13),
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  IconButton(
                    onPressed: limit > 0 ? () => setLocal(() => limit -= 1) : null,
                    icon: const Icon(Icons.remove_circle_outline),
                  ),
                  Expanded(
                    child: Text(
                      limit == 0 ? 'Show all children' : 'Show $limit children, then dropdown',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontWeight: FontWeight.w800, color: p.primaryText),
                    ),
                  ),
                  IconButton(
                    onPressed: () => setLocal(() => limit += 1),
                    icon: const Icon(Icons.add_circle_outline),
                  ),
                ],
              ),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(
              onPressed: () => Navigator.pop(ctx, true),
              style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
              child: const Text('Save'),
            ),
          ],
        ),
      ),
    );
    if (ok != true || !mounted) return;
    _pushUndo();
    setState(() {
      _tree = _tree.copyWith(visibleChildrenPerParent: limit);
      _expandedChildGroups.clear();
    });
    await _persist();
  }

  Future<void> _addMember({String? parentId}) async {
    if (!_canEdit) {
      _toast('View only — you cannot add members to this shared tree.');
      return;
    }
    final result = await showDialog<FamilyMember>(
      context: context,
      builder: (ctx) => _MemberEditorDialog(
        title: 'Add Member',
        parents: visibleMembers(_tree),
        initialParentId: parentId,
        tree: _tree,
        userEmail: widget.userEmail,
        user: widget.user,
        config: widget.config,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
      ),
    );
    if (result == null) return;
    _pushUndo();
    setState(() {
      _tree = _tree.copyWith(members: [..._tree.members, result]);
    });
    await _persist();
  }

  Future<void> _viewMember(FamilyMember member) async {
    final p = WorksheetPalette.of(context);
    await showDialog<void>(
      context: context,
      builder: (ctx) => _MemberViewDialog(member: member, tree: _tree, palette: p),
    );
  }

  void _onMemberTap(FamilyMember member) {
    if (_canEdit) {
      _editMember(member);
    } else {
      _viewMember(member);
    }
  }

  Future<void> _showSharedRemoveBlockedDialog({required bool needsOwnTree, required bool needsPhoto}) async {
    final p = WorksheetPalette.of(context);
    if (!mounted) return;
    await showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: p.cardBg,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        icon: Icon(Icons.info_outline_rounded, color: WorksheetPalette.green, size: 36),
        title: Text(
          'Almost there',
          style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w900),
          textAlign: TextAlign.center,
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              needsOwnTree
                  ? 'To remove a shared family tree from this phone, first create your own family tree in NGMY.'
                  : 'To remove a shared family tree, you also need an active Family Tree photo pass.',
              textAlign: TextAlign.center,
              style: TextStyle(color: p.secondaryText, height: 1.45, fontSize: 14),
            ),
            if (needsPhoto && !needsOwnTree) ...[
              const SizedBox(height: 12),
              Text(
                'Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.',
                textAlign: TextAlign.center,
                style: TextStyle(color: p.secondaryText, height: 1.4, fontSize: 12),
              ),
            ],
          ],
        ),
        actionsAlignment: MainAxisAlignment.center,
        actions: [
          FilledButton(
            onPressed: () => Navigator.pop(ctx),
            style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
            child: const Text('Got it', style: TextStyle(fontWeight: FontWeight.w800)),
          ),
        ],
      ),
    );
  }

  Future<void> _deleteThisTree() async {
    if (_tree.isViewOnly) {
      final hasOwn = await userHasOwnedFamilyTree(widget.userEmail);
      final hasPhoto = NgmyFamilyTreePayments.hasActivePhotoAccess(widget.config, widget.userEmail);
      if (!hasOwn || !hasPhoto) {
        await _showSharedRemoveBlockedDialog(needsOwnTree: !hasOwn, needsPhoto: !hasPhoto);
        return;
      }
    } else if (!familyTreeIsOwner(_tree, widget.userEmail)) {
      _toast('Only the tree creator can delete this family tree.');
      return;
    }

    if (!mounted) return;
    final ok = await showNgmyDeleteConfirm(
      context,
      title: 'Remove family tree?',
      message: _tree.isViewOnly
          ? 'This removes "${_tree.name}" from this phone only. The creator\'s copy is not affected.'
          : 'Delete "${_tree.name}" permanently? This cannot be undone.',
      confirmLabel: 'Remove',
    );
    if (ok != true || !mounted) return;
    await deleteFamilyTree(widget.userEmail, _tree.id);
    widget.onDataChanged();
    if (!mounted) return;
    NgmyNavigator.pop(context);
  }

  /// Removes one person. Their children stay in the tree: they move under the other
  /// parent (the spouse) when there is one, otherwise under the grandparent.
  Future<void> _deleteMember(FamilyMember member) async {
    if (!_canEdit) return;
    final members = _tree.members;
    String? partner = member.spouseId;
    if (partner == null || !members.any((m) => m.id == partner)) {
      partner = members.where((m) => m.spouseId == member.id).map((m) => m.id).firstOrNull;
    }
    final newParent = partner ?? member.parentId;
    _pushUndo();
    setState(() {
      _tree = _tree.copyWith(
        members: [
          for (final m in members)
            if (m.id != member.id)
              FamilyMember(
                id: m.id,
                name: m.name,
                gender: m.gender,
                parentId: m.parentId == member.id ? newParent : m.parentId,
                spouseId: m.spouseId == member.id ? null : m.spouseId,
                photoPath: m.photoPath,
                notes: m.notes,
                birthDate: m.birthDate,
                birthPlace: m.birthPlace,
                deathDate: m.deathDate,
                occupation: m.occupation,
                birthOrder: m.birthOrder,
                hidden: m.hidden,
                visibleChildrenCap: m.visibleChildrenCap,
              ),
        ],
      );
    });
    await _persist();
    _toast('${member.name} was removed. Tap Undo to bring them back.');
  }

  Future<void> _editMember(FamilyMember member) async {
    if (!_canEdit) {
      await _viewMember(member);
      return;
    }
    final result = await showDialog<FamilyMember>(
      context: context,
      builder: (ctx) => _MemberEditorDialog(
        title: 'Member Profile',
        onDelete: () => _deleteMember(member),
        member: member,
        parents: visibleMembers(_tree).where((m) => m.id != member.id).toList(),
        tree: _tree,
        userEmail: widget.userEmail,
        user: widget.user,
        config: widget.config,
        onChargeWallet: widget.onChargeWallet,
        onDataChanged: widget.onDataChanged,
      ),
    );
    if (result == null) return;
    _pushUndo();
    setState(() {
      _tree = _tree.copyWith(
        members: _tree.members.map((m) => m.id == result.id ? result : m).toList(),
      );
    });
    await _persist();
  }

  void _undo() {
    if (!_canEdit) return;
    if (_undoStack.isEmpty) return;
    setState(() => _tree = _undoStack.removeLast());
    _persist();
  }

  Future<void> _manageCollaborators() async {
    if (!familyTreeCanManageCollaborators(_tree, widget.userEmail)) {
      _toast('Only the tree creator can invite collaborators.');
      return;
    }
    final p = WorksheetPalette.of(context);
    final emailCtrl = TextEditingController();
    var collabs = List<String>.from(_tree.collaboratorEmails.map(_normalizeCollabEmail).where((e) => e.isNotEmpty));

    final saved = await showDialog<bool>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setLocal) => AlertDialog(
          backgroundColor: p.cardBg,
          title: Text('Collaborators', style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w900)),
          content: SizedBox(
            width: 360,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'Invited users can edit this tree and add members. QR/file recipients stay view-only.',
                  style: TextStyle(color: p.secondaryText, fontSize: 12, height: 1.35),
                ),
                const SizedBox(height: 12),
                if (collabs.isEmpty)
                  Text('No collaborators yet.', style: TextStyle(color: p.secondaryText, fontSize: 13))
                else
                  ...collabs.map(
                    (e) => ListTile(
                      contentPadding: EdgeInsets.zero,
                      title: Text(e, style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w700)),
                      trailing: IconButton(
                        icon: const Icon(Icons.remove_circle_outline, color: Colors.redAccent),
                        onPressed: () => setLocal(() => collabs.remove(e)),
                      ),
                    ),
                  ),
                const SizedBox(height: 8),
                TextField(
                  controller: emailCtrl,
                  decoration: InputDecoration(
                    labelText: 'Invite by email',
                    hintText: 'friend@email.com',
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  keyboardType: TextInputType.emailAddress,
                ),
              ],
            ),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(
              onPressed: () {
                final email = _normalizeCollabEmail(emailCtrl.text);
                if (email.isNotEmpty && !collabs.contains(email) && email != _normalizeCollabEmail(widget.userEmail)) {
                  setLocal(() => collabs.add(email));
                  emailCtrl.clear();
                }
              },
              style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
              child: const Text('Add'),
            ),
            FilledButton(
              onPressed: () {
                final pending = _normalizeCollabEmail(emailCtrl.text);
                if (pending.isNotEmpty && !collabs.contains(pending) && pending != _normalizeCollabEmail(widget.userEmail)) {
                  collabs.add(pending);
                }
                Navigator.pop(ctx, true);
              },
              style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
              child: const Text('Save invites'),
            ),
          ],
        ),
      ),
    );
    emailCtrl.dispose();
    if (saved != true || !mounted) return;
    _pushUndo();
    setState(() {
      _tree = _tree.copyWith(
        collaboratorEmails: collabs,
        ownerEmail: familyTreeOwnerEmail(_tree, widget.userEmail),
        localRole: FamilyTreeAccessRole.owner,
      );
    });
    await _persist();
    _toast('Collaborators updated.');
  }

  String _normalizeCollabEmail(String raw) => raw.toLowerCase().trim();

  void _openFamilyBook() {
    unawaited(showFamilyBookSheet(
      context,
      userEmail: widget.userEmail,
      treeId: _tree.id,
      canEdit: _canEdit,
      bookTitle: _tree.name,
      membersPage: familyTreeMembersBookText(_tree),
      familyFacts: familyTreeFactsForAi(_tree),
    ));
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    final hiddenCount = _tree.members.where((m) => m.hidden).length;
    return Scaffold(
      backgroundColor: p.pageBg,
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
              child: InkWell(
                onTap: () => NgmyNavigator.pop(context, _tree),
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.arrow_back, size: 18, color: p.secondaryText),
                      const SizedBox(width: 6),
                      Text('Back to Family Trees', style: TextStyle(color: p.secondaryText, fontWeight: FontWeight.w600)),
                    ],
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: _headerBanner(p),
            ),
            if (_tree.isViewOnly)
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 10, 16, 0),
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  decoration: BoxDecoration(
                    color: Colors.amber.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: Colors.amber.withValues(alpha: 0.45)),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.visibility_outlined, color: Colors.amber, size: 20),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          'View only — shared by ${familyTreeOwnerEmail(_tree, widget.userEmail)}. You can keep up to $kNgmyFamilyTreeMaxSharedTrees shared trees. Tap a member to view details.',
                          style: TextStyle(color: p.primaryText, fontSize: 12, height: 1.35, fontWeight: FontWeight.w600),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 10, 16, 6),
              child: Row(
                children: [
                  Text(
                    'Family Tree',
                    style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: p.primaryText),
                  ),
                  const Spacer(),
                  if (_canEdit && _undoStack.isNotEmpty)
                    _FamilyTreeMiniTool(
                      tooltip: 'Undo',
                      icon: Icons.undo_rounded,
                      onPressed: _undo,
                      p: p,
                    ),
                  _FamilyTreeMiniTool(
                    tooltip: 'Family Book',
                    icon: Icons.menu_book_outlined,
                    onPressed: _openFamilyBook,
                    p: p,
                    tint: Colors.orange.shade700,
                  ),
                  if (_canEdit)
                    _FamilyTreeMiniTool(
                      tooltip: 'Display settings',
                      icon: Icons.tune_rounded,
                      onPressed: _openTreeSettings,
                      p: p,
                      tint: WorksheetPalette.greenDark,
                    ),
                  _FamilyTreeMiniTool(
                    tooltip: 'Sync',
                    icon: Icons.sync_rounded,
                    onPressed: _openSync,
                    p: p,
                  ),
                  if (_tree.isViewOnly || familyTreeIsOwner(_tree, widget.userEmail))
                    _FamilyTreeMiniTool(
                      tooltip: _tree.isViewOnly ? 'Remove shared tree' : 'Delete tree',
                      icon: Icons.delete_outline_rounded,
                      onPressed: _deleteThisTree,
                      p: p,
                      tint: Colors.redAccent,
                    ),
                  if (_canEdit)
                    _FamilyTreeMiniTool(
                      tooltip: 'Add member',
                      icon: Icons.person_add_alt_1_rounded,
                      onPressed: () => _addMember(parentId: rootMember(_tree)?.id),
                      p: p,
                      tint: WorksheetPalette.teal,
                    ),
                ],
              ),
            ),
            Expanded(
              child: _tree.visibleMemberCount == 0
                  ? Center(
                      child: Text(
                        'Add your first member to build the tree.',
                        style: TextStyle(color: p.secondaryText),
                      ),
                    )
                  : LayoutBuilder(
                      builder: (context, constraints) {
                        final layout = _FamilyTreeLayout.compute(
                          _tree,
                          showHidden: _showHidden,
                          expandedChildGroups: _expandedChildGroups,
                        );
                        final contentW = layout.width + 32;
                        final contentH = layout.height + 32;
                        if (layout.nodes.isNotEmpty) {
                          _scheduleFit(
                            viewport: constraints.biggest,
                            content: Size(contentW, contentH),
                            rootX: layout.rootCenterX,
                          );
                        }
                        return Container(
                          margin: const EdgeInsets.fromLTRB(12, 4, 12, 8),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(22),
                            gradient: LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: p.isDark
                                  ? const [Color(0xFF0E1A17), Color(0xFF0B1220)]
                                  : const [Color(0xFFFBF7EE), Color(0xFFEFF6EF)],
                            ),
                            border: Border.all(color: p.isDark ? Colors.white10 : const Color(0xFFE5DCC8)),
                          ),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(22),
                            child: Stack(children: [
                              Positioned.fill(child: CustomPaint(painter: _DotGridPainter(isDark: p.isDark))),
                              // Pinch (or use the buttons) to zoom; drag to move around.
                              Positioned.fill(
                                child: InteractiveViewer(
                                  transformationController: _zoom,
                                  constrained: false,
                                  minScale: 0.2,
                                  maxScale: 3,
                                  boundaryMargin: EdgeInsets.all(math.max(constraints.maxWidth, constraints.maxHeight)),
                                  child: SizedBox(
                                    width: contentW,
                                    height: contentH,
                                    child: _FamilyTreeCanvas(
                                      tree: _tree,
                                      layout: layout,
                                      showHidden: _showHidden,
                                      expandedChildGroups: _expandedChildGroups,
                                      onToggleChildGroup: (parentId) {
                                        setState(() {
                                          if (_expandedChildGroups.contains(parentId)) {
                                            _expandedChildGroups.remove(parentId);
                                          } else {
                                            _expandedChildGroups.add(parentId);
                                          }
                                        });
                                      },
                                      onMemberTap: _onMemberTap,
                                      isDark: p.isDark,
                                    ),
                                  ),
                                ),
                              ),
                              Positioned(
                                right: 10,
                                bottom: 10,
                                child: _ZoomControls(
                                  isDark: p.isDark,
                                  onIn: () => _zoomBy(1.25, constraints.biggest),
                                  onOut: () => _zoomBy(0.8, constraints.biggest),
                                  onFit: () => _fit(constraints.biggest, Size(contentW, contentH), layout.rootCenterX),
                                ),
                              ),
                            ]),
                          ),
                        );
                      },
                    ),
            ),
            if (hiddenCount > 0)
              Center(
                child: TextButton.icon(
                  onPressed: () => setState(() => _showHidden = !_showHidden),
                  icon: Icon(_showHidden ? Icons.expand_less : Icons.expand_more),
                  label: Text(_showHidden ? 'Hide hidden members' : '$hiddenCount hidden'),
                ),
              ),
          ],
        ),
      ),
    );
  }

  Widget _headerBanner(WorksheetPalette p) {
    final owner = !_tree.isViewOnly;
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF064E3B), Color(0xFF047857), Color(0xFF0D9488)],
        ),
        boxShadow: [BoxShadow(color: const Color(0xFF047857).withValues(alpha: 0.35), blurRadius: 18, offset: const Offset(0, 8))],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(22),
        child: Stack(children: [
          // Big soft tree in the corner.
          Positioned(
            right: -18,
            bottom: -26,
            child: Icon(Icons.park_rounded, size: 130, color: Colors.white.withValues(alpha: 0.08)),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 14, 10, 14),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Row(children: [
                Material(
                  color: Colors.transparent,
                  child: InkWell(
                    onTap: _openSync,
                    customBorder: const CircleBorder(),
                    child: Container(
                      width: 46,
                      height: 46,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.white.withValues(alpha: 0.16),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.45), width: 1.5),
                      ),
                      child: const Icon(Icons.park_rounded, color: Colors.white, size: 24),
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(
                      _tree.name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: 0.3),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      '${_tree.visibleMemberCount} ${_tree.visibleMemberCount == 1 ? 'member' : 'members'}',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 12.5, fontWeight: FontWeight.w600),
                    ),
                  ]),
                ),
                if (_canEdit)
                  IconButton(
                    tooltip: 'Rename',
                    onPressed: _renameTree,
                    icon: const Icon(Icons.edit_rounded, color: Colors.white, size: 18),
                  ),
              ]),
              const SizedBox(height: 12),
              // Three equal tiles in one straight line.
              Row(children: [
                Expanded(
                  child: _infoTile(
                    _tree.isPrivate ? Icons.lock_rounded : Icons.public_rounded,
                    'Privacy',
                    _tree.isPrivate ? 'Private' : 'Public',
                    onTap: _isAdmin ? _togglePrivacy : null,
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: _infoTile(Icons.tag_rounded, 'Tree code', _tree.code, onTap: () async {
                    await Clipboard.setData(ClipboardData(text: _tree.code));
                    _toast('Tree code copied.');
                  }),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: _infoTile(
                    Icons.group_add_rounded,
                    'Collaborators',
                    _tree.collaboratorEmails.isEmpty ? 'Invite' : '${_tree.collaboratorEmails.length} · Manage',
                    onTap: _manageCollaborators,
                  ),
                ),
              ]),
              if (_tree.isViewOnly) ...[
                const SizedBox(height: 8),
                _metaChip(Icons.visibility_rounded, 'View only'),
              ],
            ]),
          ),
        ]),
      ),
    );
  }

  Widget _infoTile(IconData icon, String label, String value, {VoidCallback? onTap}) {
    return Material(
      color: Colors.white.withValues(alpha: 0.14),
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 9),
          child: Column(children: [
            Icon(icon, size: 18, color: Colors.white),
            const SizedBox(height: 4),
            Text(label, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 10.5, fontWeight: FontWeight.w700)),
            const SizedBox(height: 1),
            Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 12.5, fontWeight: FontWeight.w900)),
          ]),
        ),
      ),
    );
  }

  Widget _metaChip(IconData icon, String label, {VoidCallback? onTap}) {
    return Material(
      color: Colors.white.withValues(alpha: 0.15),
      borderRadius: BorderRadius.circular(999),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(999),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            Icon(icon, size: 14, color: Colors.white),
            const SizedBox(width: 5),
            Text(label, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700)),
          ]),
        ),
      ),
    );
  }
}

class _FamilyTreeCanvas extends StatelessWidget {
  final FamilyTree tree;
  final _FamilyTreeLayout? layout;
  final bool showHidden;
  final Set<String> expandedChildGroups;
  final ValueChanged<String> onToggleChildGroup;
  final ValueChanged<FamilyMember> onMemberTap;
  final bool isDark;

  const _FamilyTreeCanvas({
    required this.tree,
    this.layout,
    required this.showHidden,
    required this.expandedChildGroups,
    required this.onToggleChildGroup,
    required this.onMemberTap,
    required this.isDark,
  });

  @override
  Widget build(BuildContext context) {
    final layout = this.layout ??
        _FamilyTreeLayout.compute(
          tree,
          showHidden: showHidden,
          expandedChildGroups: expandedChildGroups,
        );
    if (layout.nodes.isEmpty && layout.overflowNodes.isEmpty) return const SizedBox.shrink();

    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
      child: SizedBox(
        width: layout.width,
        height: layout.height,
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            CustomPaint(
              size: Size(layout.width, layout.height),
              painter: _FamilyTreeLinesPainter(layout: layout),
            ),
            ...layout.nodes.entries.map((entry) {
              final member = entry.value.member;
              final pos = entry.value.position;
              return Positioned(
                left: pos.dx - _FamilyTreeLayout.nodeWidth / 2,
                top: pos.dy,
                child: _MemberNode(
                  member: member,
                  siblingOrder: siblingDisplayOrder(tree, member),
                  onTap: () => onMemberTap(member),
                ),
              );
            }),
            ...layout.overflowNodes.map((overflow) {
              return Positioned(
                left: overflow.position.dx - _FamilyTreeLayout.nodeWidth / 2,
                top: overflow.position.dy,
                child: _OverflowChildrenNode(
                  count: overflow.count,
                  hiddenMembers: overflow.hiddenMembers,
                  expanded: expandedChildGroups.contains(overflow.parentId),
                  onTap: () => onToggleChildGroup(overflow.parentId),
                  onMemberTap: onMemberTap,
                ),
              );
            }),
          ],
        ),
      ),
    );
  }
}

/// Everything in the tree, written out for the AI that writes the family book: each person
/// with gender, dates and age, places, work, notes, spouse, parents and children.
String familyTreeFactsForAi(FamilyTree tree) {
  final vis = visibleMembers(tree);
  if (vis.isEmpty) return '';
  final byId = {for (final m in vis) m.id: m};
  final year = DateTime.now().year;
  String? partnerOf(FamilyMember m) {
    if (byId.containsKey(m.spouseId)) return m.spouseId;
    return vis.where((o) => o.spouseId == m.id).map((o) => o.id).firstOrNull;
  }

  final out = StringBuffer('Family tree "${tree.name}" (${vis.length} people):\n');
  for (final m in vis) {
    final bits = <String>[];
    if (m.gender != FamilyGender.unknown) bits.add(m.gender == FamilyGender.male ? 'male' : 'female');
    final born = _yearOf(m.birthDate);
    final died = _yearOf(m.deathDate);
    if (m.birthDate.trim().isNotEmpty) bits.add('born ${m.birthDate.trim()}${m.birthPlace.trim().isNotEmpty ? ' in ${m.birthPlace.trim()}' : ''}');
    if (m.birthDate.trim().isEmpty && m.birthPlace.trim().isNotEmpty) bits.add('from ${m.birthPlace.trim()}');
    if (m.deathDate.trim().isNotEmpty) bits.add('died ${m.deathDate.trim()}');
    if (born != null && died == null) bits.add('about ${year - int.parse(born)} years old');
    if (born != null && died != null) bits.add('lived about ${int.parse(died) - int.parse(born)} years');
    if (m.occupation.trim().isNotEmpty) bits.add('work: ${m.occupation.trim()}');
    final sp = partnerOf(m);
    if (sp != null) bits.add('married to ${byId[sp]!.name}');
    final par = m.parentId;
    if (par != null && byId.containsKey(par) && par != sp) {
      final other = partnerOf(byId[par]!);
      bits.add('child of ${byId[par]!.name}${other != null && other != m.id ? ' and ${byId[other]!.name}' : ''}');
    }
    final kids = vis.where((k) => k.parentId == m.id && k.id != sp).map((k) => k.name).toList();
    if (kids.isNotEmpty) bits.add('children: ${kids.join(', ')}');
    out.write('- ${m.name}${bits.isEmpty ? '' : ' — ${bits.join('; ')}'}');
    final notes = m.notes.trim();
    if (notes.isNotEmpty) out.write('. Notes: ${notes.length > 600 ? '${notes.substring(0, 600)}…' : notes}');
    out.writeln();
  }
  return out.toString().trim();
}

/// The "Our Family" page of a printed Family Book: everyone by generation, with their
/// spouse and parent.
String familyTreeMembersBookText(FamilyTree tree) {
  final vis = visibleMembers(tree);
  if (vis.isEmpty) return '';
  final byId = {for (final m in vis) m.id: m};
  String? partnerOf(FamilyMember m) {
    if (byId.containsKey(m.spouseId)) return m.spouseId;
    return vis.where((o) => o.spouseId == m.id).map((o) => o.id).firstOrNull;
  }

  int? chainDepth(FamilyMember m) {
    var d = 0;
    var cur = m;
    final seen = <String>{m.id};
    while (cur.parentId != null && byId.containsKey(cur.parentId) && seen.add(cur.parentId!)) {
      cur = byId[cur.parentId]!;
      d++;
    }
    return d;
  }

  final depth = <String, int>{};
  for (final m in vis) {
    depth[m.id] = chainDepth(m)!;
  }
  // A married-in spouse belongs to their partner's generation: one added under their
  // partner as "parent" first, then one with no parent here whose partner has one.
  for (final m in vis) {
    final p = partnerOf(m);
    if (p != null && m.parentId == p) depth[m.id] = depth[p]!;
  }
  for (final m in vis) {
    if (m.parentId != null && byId.containsKey(m.parentId)) continue;
    final p = partnerOf(m);
    if (p == null) continue;
    final partner = byId[p]!;
    if (partner.parentId != null && byId.containsKey(partner.parentId) && partner.parentId != m.id) {
      depth[m.id] = depth[p]!;
    }
  }
  final gens = depth.values.toSet().toList()..sort();
  final out = StringBuffer();
  for (final g in gens) {
    out.writeln('Generation ${g + 1}');
    for (final m in vis.where((m) => depth[m.id] == g)) {
      final bits = <String>[];
      final sp = partnerOf(m);
      if (sp != null) bits.add('married to ${byId[sp]!.name}');
      final par = m.parentId;
      if (par != null && byId.containsKey(par) && sp != par) bits.add('child of ${byId[par]!.name}');
      out.writeln('• ${m.name}${bits.isEmpty ? '' : ' — ${bits.join(', ')}'}');
    }
    out.writeln();
  }
  return out.toString().trim();
}

/// Laid-out top-center of each visible member (tests check the tree never overlaps).
@visibleForTesting
Map<String, Offset> familyTreeLayoutPositions(FamilyTree tree, {Set<String> expanded = const {}}) =>
    _FamilyTreeLayout.compute(tree, showHidden: false, expandedChildGroups: expanded)
        .nodes
        .map((k, v) => MapEntry(k, v.position));

class _OverflowLayoutNode {
  final String parentId;
  final Offset position;
  final List<FamilyMember> hiddenMembers;
  final int count;

  const _OverflowLayoutNode({
    required this.parentId,
    required this.position,
    required this.hiddenMembers,
    required this.count,
  });
}

class _LayoutNode {
  final FamilyMember member;
  final Offset position;

  const _LayoutNode({required this.member, required this.position});
}

class _FamilyTreeLayout {
  static const nodeWidth = 84.0;
  static const avatarSize = 56.0;
  static const nameBlockHeight = 50.0; // room for a full name on up to three lines, plus the years
  static const nodeHeight = avatarSize + 6 + nameBlockHeight;
  static const rowGap = 44.0;
  static const verticalStep = nodeHeight + rowGap;
  static const horizontalGap = 22.0;
  static const titleBlockHeight = 16.0;
  static const canvasPad = 24.0;

  /// Edge-to-edge space between cousins (children of different parents) on one row.
  static const cousinGap = horizontalGap * 2;

  final Map<String, _LayoutNode> nodes;
  final List<_TreeEdge> edges;
  final List<_OverflowLayoutNode> overflowNodes;
  final double width;
  final double height;
  final String? rootId;
  final double? rootCenter;

  const _FamilyTreeLayout({
    required this.nodes,
    required this.edges,
    this.overflowNodes = const [],
    required this.width,
    required this.height,
    this.rootId,
    this.rootCenter,
  });

  /// Root X in scroll content (canvas left padding included).
  double get rootCenterX {
    if (rootCenter != null) return rootCenter! + 16;
    if (rootId == null) return width / 2;
    final root = nodes[rootId!];
    if (root == null) return width / 2;
    return root.position.dx + 16;
  }

  static Offset _avatarCenter(Offset topCenter) =>
      Offset(topCenter.dx, topCenter.dy + avatarSize / 2);

  static ({List<FamilyMember> shown, List<FamilyMember> hidden, bool hasOverflow}) _splitChildren(
    FamilyTree tree,
    FamilyMember parent,
    List<FamilyMember> kids,
    Set<String> expanded,
  ) {
    final cap = familyTreeVisibleChildCap(tree, parent);
    if (cap <= 0 || kids.length <= cap) {
      return (shown: kids, hidden: const [], hasOverflow: false);
    }
    if (expanded.contains(parent.id)) {
      return (shown: kids, hidden: const [], hasOverflow: false);
    }
    return (
      shown: kids.take(cap).toList(),
      hidden: kids.skip(cap).toList(),
      hasOverflow: true,
    );
  }

  /// Tidy-tree layout. Every person (or couple) is measured with its whole family below it,
  /// and sibling families are packed side by side using their outlines row by row, so no two
  /// people ever overlap and every child stays under their own parents — however many members
  /// or spouses are added. Spouse links count from either side (only one of the two partners
  /// usually stores it), and children recorded under either partner hang under the couple.
  static _FamilyTreeLayout compute(
    FamilyTree tree, {
    required bool showHidden,
    Set<String> expandedChildGroups = const {},
  }) {
    final visible = showHidden ? tree.members : visibleMembers(tree);
    if (visible.isEmpty) {
      return const _FamilyTreeLayout(nodes: {}, edges: [], overflowNodes: [], width: 0, height: 0);
    }
    final byId = <String, FamilyMember>{};
    for (final m in visible) {
      byId.putIfAbsent(m.id, () => m);
    }

    bool validId(String? id) => id != null && id.isNotEmpty && byId.containsKey(id);

    final partnersOf = <String, List<String>>{};
    void link(String a, String b) {
      final list = partnersOf.putIfAbsent(a, () => <String>[]);
      if (!list.contains(b)) list.add(b);
    }

    for (final m in byId.values) {
      final sid = m.spouseId;
      if (!validId(sid) || sid == m.id) continue;
      link(m.id, sid!);
      link(sid, m.id);
    }
    bool isPartner(String a, String b) => partnersOf[a]?.contains(b) ?? false;

    final kidsByParent = <String, List<FamilyMember>>{};
    for (final m in byId.values) {
      final p = m.parentId;
      if (!validId(p) || p == m.id || isPartner(p!, m.id)) continue;
      kidsByParent.putIfAbsent(p, () => <FamilyMember>[]).add(m);
    }

    bool hasVisibleParent(FamilyMember m) => validId(m.parentId) && m.parentId != m.id;

    int countBelow(String id, Set<String> seen) {
      if (!seen.add(id)) return 0;
      var n = 1;
      for (final k in kidsByParent[id] ?? const <FamilyMember>[]) {
        n += countBelow(k.id, seen);
      }
      for (final p in partnersOf[id] ?? const <String>[]) {
        if (seen.contains(p)) continue;
        seen.add(p);
        for (final k in kidsByParent[p] ?? const <FamilyMember>[]) {
          n += countBelow(k.id, seen);
        }
      }
      return n;
    }

    // Root: the parentless person heading the biggest family (a newly added spouse of the
    // root also has no parent — they must not take over as the top of the tree).
    final parentless = byId.values.where((m) => !hasVisibleParent(m)).toList();
    var root = parentless.isEmpty ? byId.values.first : parentless.first;
    if (parentless.length > 1) {
      var best = -1;
      for (final m in parentless) {
        final c = countBelow(m.id, <String>{});
        if (c > best) {
          best = c;
          root = m;
        }
      }
    }

    final claimed = <String>{};
    final depthOf = <String, int>{};
    final spouseFor = <String, String>{};
    final childOrder = <String, List<String>>{};
    final relX = <String, double>{};
    final overflowOf = <String, ({double dx, List<FamilyMember> hidden})>{};

    // Returns this unit's outline: per row below it (0 = own row), its left and right edge
    // relative to its own center.
    List<(double, double)> measure(String id, int depth) {
      claimed.add(id);
      depthOf[id] = depth;
      final member = byId[id]!;

      String? spouse;
      for (final pid in partnersOf[id] ?? const <String>[]) {
        if (claimed.contains(pid) || member.parentId == pid) continue;
        spouse = pid;
        break;
      }
      if (spouse != null) {
        claimed.add(spouse);
        depthOf[spouse] = depth;
        spouseFor[id] = spouse;
      }

      final kids = <FamilyMember>[...?kidsByParent[id]];
      if (spouse != null) {
        for (final k in kidsByParent[spouse] ?? const <FamilyMember>[]) {
          if (k.id != id && !kids.any((x) => x.id == k.id)) kids.add(k);
        }
      }
      kids.removeWhere((k) => claimed.contains(k.id));
      kids.sort((a, b) => a.birthOrder.compareTo(b.birthOrder));
      final split = _splitChildren(tree, member, kids, expandedChildGroups);

      final ownHalf = spouse != null ? nodeWidth + horizontalGap / 2 : nodeWidth / 2;

      final slotIds = <String?>[];
      final slotOutlines = <List<(double, double)>>[];
      for (final child in split.shown) {
        if (claimed.contains(child.id)) continue;
        slotIds.add(child.id);
        slotOutlines.add(measure(child.id, depth + 1));
      }
      if (split.hasOverflow) {
        slotIds.add(null);
        slotOutlines.add([(-nodeWidth / 2, nodeWidth / 2)]);
      }

      childOrder[id] = [for (final s in slotIds) if (s != null) s];
      if (slotIds.isEmpty) return [(-ownHalf, ownHalf)];

      // Pack each child family against everything already placed to its left.
      final xs = <double>[];
      final rightEdge = <double>[];
      for (final outline in slotOutlines) {
        var x = 0.0;
        if (xs.isNotEmpty) {
          x = double.negativeInfinity;
          final rows = math.min(rightEdge.length, outline.length);
          for (var r = 0; r < rows; r++) {
            final gap = r == 0 ? horizontalGap : cousinGap;
            x = math.max(x, rightEdge[r] + gap - outline[r].$1);
          }
        }
        xs.add(x);
        for (var r = 0; r < outline.length; r++) {
          final edge = x + outline[r].$2;
          if (r < rightEdge.length) {
            rightEdge[r] = math.max(rightEdge[r], edge);
          } else {
            rightEdge.add(edge);
          }
        }
      }

      final mid = (xs.first + xs.last) / 2;
      final result = <(double, double)>[(-ownHalf, ownHalf)];
      for (var i = 0; i < slotOutlines.length; i++) {
        final dx = xs[i] - mid;
        final sid = slotIds[i];
        if (sid != null) {
          relX[sid] = dx;
        } else {
          overflowOf[id] = (dx: dx, hidden: split.hidden);
        }
        final outline = slotOutlines[i];
        for (var r = 0; r < outline.length; r++) {
          final l = dx + outline[r].$1;
          final rr = dx + outline[r].$2;
          if (r + 1 < result.length) {
            result[r + 1] = (math.min(result[r + 1].$1, l), math.max(result[r + 1].$2, rr));
          } else {
            result.add((l, rr));
          }
        }
      }
      return result;
    }

    // Lay out the main family, then any loose branches to its right on their own rows.
    final unitCenters = <String, double>{};
    final topUnits = <String>[];
    final forestRight = <int, double>{};

    void placeTop(String id, int depth) {
      final outline = measure(id, depth);
      var x = 0.0;
      if (topUnits.isNotEmpty) {
        x = double.negativeInfinity;
        for (var r = 0; r < outline.length; r++) {
          final right = forestRight[depth + r];
          if (right == null) continue;
          x = math.max(x, right + cousinGap * 2 - outline[r].$1);
        }
        if (x == double.negativeInfinity) {
          final anyRight = forestRight.values.fold<double>(0, math.max);
          x = anyRight + cousinGap * 2 - outline.first.$1;
        }
      }
      for (var r = 0; r < outline.length; r++) {
        final edge = x + outline[r].$2;
        final row = depth + r;
        forestRight[row] = math.max(forestRight[row] ?? double.negativeInfinity, edge);
      }
      topUnits.add(id);
      unitCenters[id] = x;
    }

    placeTop(root.id, 0);
    for (final m in byId.values) {
      if (claimed.contains(m.id)) continue;
      // Climb to the highest member of this loose branch that isn't laid out yet.
      var top = m;
      final seen = <String>{m.id};
      while (hasVisibleParent(top)) {
        final p = byId[top.parentId]!;
        if (claimed.contains(p.id) || !seen.add(p.id)) break;
        top = p;
      }
      var depth = 0;
      if (hasVisibleParent(top) && depthOf.containsKey(top.parentId)) {
        depth = depthOf[top.parentId]! + 1;
      } else {
        final partner = (partnersOf[top.id] ?? const <String>[]).where(depthOf.containsKey).firstOrNull;
        if (partner != null) depth = depthOf[partner]!;
      }
      placeTop(top.id, depth);
    }

    final nodes = <String, _LayoutNode>{};
    final overflowNodes = <_OverflowLayoutNode>[];
    final coupleCenter = <String, double>{};

    double rowTopOf(int depth) => titleBlockHeight + depth * verticalStep;

    void assign(String id, double cx) {
      final depth = depthOf[id] ?? 0;
      final top = rowTopOf(depth);
      coupleCenter[id] = cx;
      final spouse = spouseFor[id];
      if (spouse != null) {
        const half = nodeWidth / 2 + horizontalGap / 2;
        nodes[id] = _LayoutNode(member: byId[id]!, position: Offset(cx - half, top));
        nodes[spouse] = _LayoutNode(member: byId[spouse]!, position: Offset(cx + half, top));
      } else {
        nodes[id] = _LayoutNode(member: byId[id]!, position: Offset(cx, top));
      }
      for (final kid in childOrder[id] ?? const <String>[]) {
        assign(kid, cx + (relX[kid] ?? 0));
      }
      final o = overflowOf[id];
      if (o != null) {
        overflowNodes.add(_OverflowLayoutNode(
          parentId: id,
          position: Offset(cx + o.dx, rowTopOf(depth + 1)),
          hiddenMembers: o.hidden,
          count: o.hidden.length,
        ));
      }
    }

    for (final id in topUnits) {
      assign(id, unitCenters[id]!);
    }

    var minX = double.infinity;
    var maxX = 0.0;
    var maxY = titleBlockHeight;
    for (final node in nodes.values) {
      minX = math.min(minX, node.position.dx - nodeWidth / 2);
      maxX = math.max(maxX, node.position.dx + nodeWidth / 2);
      maxY = math.max(maxY, node.position.dy + nodeHeight + verticalStep);
    }
    for (final overflow in overflowNodes) {
      minX = math.min(minX, overflow.position.dx - nodeWidth / 2);
      maxX = math.max(maxX, overflow.position.dx + nodeWidth / 2);
      maxY = math.max(maxY, overflow.position.dy + nodeHeight + 40);
    }
    if (minX == double.infinity) minX = 0;

    final shiftX = canvasPad - minX;
    for (final id in nodes.keys.toList()) {
      final n = nodes[id]!;
      nodes[id] = _LayoutNode(member: n.member, position: Offset(n.position.dx + shiftX, n.position.dy));
    }
    for (var i = 0; i < overflowNodes.length; i++) {
      final o = overflowNodes[i];
      overflowNodes[i] = _OverflowLayoutNode(
        parentId: o.parentId,
        position: Offset(o.position.dx + shiftX, o.position.dy),
        hiddenMembers: o.hiddenMembers,
        count: o.count,
      );
    }
    for (final id in coupleCenter.keys.toList()) {
      coupleCenter[id] = coupleCenter[id]! + shiftX;
    }
    maxX += shiftX;

    final edges = <_TreeEdge>[];
    spouseFor.forEach((id, spouse) {
      edges.add(_TreeEdge(
        _avatarCenter(nodes[id]!.position),
        _avatarCenter(nodes[spouse]!.position),
        isSpouse: true,
      ));
    });
    for (final entry in childOrder.entries) {
      final parentId = entry.key;
      final pcx = coupleCenter[parentId];
      if (pcx == null) continue;
      final tops = <Offset>[
        for (final kid in entry.value)
          if (coupleCenter.containsKey(kid)) Offset(coupleCenter[kid]!, nodes[kid]!.position.dy),
        for (final o in overflowNodes.where((o) => o.parentId == parentId)) o.position,
      ];
      if (tops.isEmpty) continue;
      tops.sort((a, b) => a.dx.compareTo(b.dx));
      final py = nodes[parentId]!.position.dy;
      edges.add(_TreeEdge(Offset(pcx, py + nodeHeight), Offset.zero, childTops: tops));
    }

    return _FamilyTreeLayout(
      nodes: nodes,
      edges: edges,
      overflowNodes: overflowNodes,
      width: maxX + canvasPad,
      height: maxY + canvasPad,
      rootId: root.id,
      rootCenter: coupleCenter[root.id],
    );
  }
}

class _TreeEdge {
  final Offset from;
  final Offset to;
  final bool isSpouse;
  final List<Offset>? childTops;

  const _TreeEdge(this.from, this.to, {this.isSpouse = false, this.childTops});
}

class _FamilyTreeLinesPainter extends CustomPainter {
  final _FamilyTreeLayout layout;

  _FamilyTreeLinesPainter({required this.layout});

  void _drawSpouseLink(Canvas canvas, Paint paint, Offset a, Offset b) {
    // Keep the marriage bar in the gap between avatars — never draw through the circles.
    final left = a.dx <= b.dx ? a : b;
    final right = a.dx <= b.dx ? b : a;
    const r = _FamilyTreeLayout.avatarSize / 2;
    const pad = 3.0;
    final x1 = left.dx + r + pad;
    final x2 = right.dx - r - pad;
    if (x2 <= x1 + 2) return;
    final y = (left.dy + right.dy) / 2;
    final bar = Paint()
      ..color = const Color(0xFFEC4899).withValues(alpha: 0.75)
      ..strokeWidth = 2
      ..strokeCap = StrokeCap.round;
    canvas.drawLine(Offset(x1, y), Offset(x2, y), bar);
    // A small heart on the marriage line.
    final c = Offset((x1 + x2) / 2, y);
    const h = 5.5;
    final heart = Path()
      ..moveTo(c.dx, c.dy + h)
      ..cubicTo(c.dx - h * 1.8, c.dy - h * 0.2, c.dx - h * 0.9, c.dy - h * 1.6, c.dx, c.dy - h * 0.55)
      ..cubicTo(c.dx + h * 0.9, c.dy - h * 1.6, c.dx + h * 1.8, c.dy - h * 0.2, c.dx, c.dy + h)
      ..close();
    canvas.drawCircle(c, h + 3.5, Paint()..color = Colors.white);
    canvas.drawPath(heart, Paint()..color = const Color(0xFFEC4899));
  }

  /// Parent to children with soft rounded corners.
  void _drawParentChildGroup(Canvas canvas, Paint paint, Offset parentBottom, List<Offset> childTops) {
    if (childTops.isEmpty) return;
    childTops.sort((a, b) => a.dx.compareTo(b.dx));
    final midY = parentBottom.dy + (childTops.first.dy - parentBottom.dy) / 2;
    const r = 10.0;

    final centered = childTops.any((t) => (t.dx - parentBottom.dx).abs() < 0.5);
    final nearest = childTops.map((t) => (t.dx - parentBottom.dx).abs()).where((d) => d >= 0.5).fold<double>(double.infinity, math.min);
    canvas.drawLine(parentBottom, Offset(parentBottom.dx, centered ? midY : midY - math.min(r, nearest / 2)), paint);
    for (final top in childTops) {
      final dx = top.dx - parentBottom.dx;
      if (dx.abs() < 0.5) {
        canvas.drawLine(Offset(top.dx, midY), top, paint);
        continue;
      }
      final dir = dx.sign;
      final rr = math.min(r, dx.abs() / 2);
      final path = Path()
        ..moveTo(parentBottom.dx, midY - rr)
        ..quadraticBezierTo(parentBottom.dx, midY, parentBottom.dx + dir * rr, midY)
        ..lineTo(top.dx - dir * rr, midY)
        ..quadraticBezierTo(top.dx, midY, top.dx, midY + rr)
        ..lineTo(top.dx, top.dy);
      canvas.drawPath(path, paint);
    }
  }

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = WorksheetPalette.teal.withValues(alpha: 0.75)
      ..strokeWidth = 2.2
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    for (final edge in layout.edges) {
      if (edge.childTops != null && edge.childTops!.isNotEmpty) {
        _drawParentChildGroup(canvas, paint, edge.from, edge.childTops!);
      } else if (!edge.isSpouse && edge.to != Offset.zero) {
        canvas.drawLine(edge.from, edge.to, paint);
      }
    }
    // Marriage lines last so their hearts sit on top.
    for (final edge in layout.edges) {
      if (edge.isSpouse) _drawSpouseLink(canvas, paint, edge.from, edge.to);
    }
  }

  @override
  bool shouldRepaint(covariant _FamilyTreeLinesPainter oldDelegate) =>
      oldDelegate.layout != layout;
}

/// First 4-digit year in a date the user typed ("12 May 1948" → "1948").
String? _yearOf(String s) => RegExp(r'(1[5-9]\d\d|20\d\d)').firstMatch(s)?.group(1);

class _MemberNode extends StatelessWidget {
  final FamilyMember member;
  final int siblingOrder;
  final VoidCallback onTap;

  const _MemberNode({
    required this.member,
    this.siblingOrder = 0,
    required this.onTap,
  });

  List<Color> get _ring {
    if (member.deathDate.trim().isNotEmpty) return const [Color(0xFF94A3B8), Color(0xFF64748B)];
    switch (member.gender) {
      case FamilyGender.male:
        return const [Color(0xFF14B8A6), Color(0xFF2563EB)];
      case FamilyGender.female:
        return const [Color(0xFFF472B6), Color(0xFFE11D48)];
      case FamilyGender.unknown:
        return const [Color(0xFFA3A3A3), Color(0xFF6B7280)];
    }
  }

  String get _years {
    final b = _yearOf(member.birthDate);
    final d = _yearOf(member.deathDate);
    if (b != null && d != null) return '$b – $d';
    if (b != null) return 'b. $b';
    if (d != null) return '† $d';
    return '';
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ring = _ring;
    final photo = ngmyImageFromRef(member.photoPath);
    final years = _years;
    return GestureDetector(
      onTap: onTap,
      child: SizedBox(
        width: _FamilyTreeLayout.nodeWidth,
        height: _FamilyTreeLayout.nodeHeight,
        child: Column(
          children: [
            Stack(
              clipBehavior: Clip.none,
              children: [
                Container(
                  width: _FamilyTreeLayout.avatarSize,
                  height: _FamilyTreeLayout.avatarSize,
                  padding: const EdgeInsets.all(2.5),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: ring),
                    boxShadow: [BoxShadow(color: ring.last.withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 4))],
                  ),
                  child: Container(
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: isDark ? const Color(0xFF111827) : Colors.white,
                      border: Border.all(color: isDark ? const Color(0xFF111827) : Colors.white, width: 2),
                    ),
                    child: ClipOval(
                      child: photo != null
                          ? Image(image: photo, fit: BoxFit.cover)
                          : Container(
                              decoration: BoxDecoration(
                                gradient: LinearGradient(colors: [ring.first.withValues(alpha: 0.18), ring.last.withValues(alpha: 0.28)]),
                              ),
                              alignment: Alignment.center,
                              child: Text(
                                member.name.trim().isEmpty ? '?' : member.name.trim()[0].toUpperCase(),
                                style: TextStyle(color: ring.last, fontWeight: FontWeight.w900, fontSize: 20),
                              ),
                            ),
                    ),
                  ),
                ),
                if (siblingOrder > 0)
                  Positioned(
                    right: -6,
                    top: -4,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1.5),
                      decoration: BoxDecoration(
                        color: const Color(0xFF6366F1),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: isDark ? const Color(0xFF111827) : Colors.white, width: 1.5),
                      ),
                      child: Text(
                        '$siblingOrder',
                        style: const TextStyle(color: Colors.white, fontSize: 8.5, fontWeight: FontWeight.w900),
                      ),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 4),
            Container(
              constraints: const BoxConstraints(maxWidth: _FamilyTreeLayout.nodeWidth),
              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2.5),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1F2937) : Colors.white,
                borderRadius: BorderRadius.circular(8),
                border: Border.all(color: ring.first.withValues(alpha: 0.35)),
                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.3 : 0.06), blurRadius: 6, offset: const Offset(0, 2))],
              ),
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                Text(
                  member.name.trim(),
                  textAlign: TextAlign.center,
                  // The whole name is always shown: it wraps onto more lines, and shrinks a little when very long.
                  maxLines: 4,
                  style: TextStyle(
                    fontSize: member.name.trim().length <= 24 ? 9.5 : (member.name.trim().length <= 32 ? 8.2 : 7.2),
                    fontWeight: FontWeight.w800,
                    height: 1.15,
                    color: isDark ? Colors.white : const Color(0xFF1F2937),
                  ),
                ),
                if (years.isNotEmpty)
                  Text(
                    years,
                    maxLines: 1,
                    style: TextStyle(fontSize: 7.5, height: 1.1, fontWeight: FontWeight.w600, color: isDark ? Colors.white60 : const Color(0xFF6B7280)),
                  ),
              ]),
            ),
          ],
        ),
      ),
    );
  }
}

/// Soft dotted paper behind the tree.
class _DotGridPainter extends CustomPainter {
  _DotGridPainter({required this.isDark});
  final bool isDark;

  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()..color = (isDark ? Colors.white : const Color(0xFF7C6A46)).withValues(alpha: isDark ? 0.05 : 0.09);
    for (var y = 10.0; y < size.height; y += 20) {
      for (var x = 10.0; x < size.width; x += 20) {
        canvas.drawCircle(Offset(x, y), 1, p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DotGridPainter old) => old.isDark != isDark;
}

/// + / − / fit buttons over the tree.
class _ZoomControls extends StatelessWidget {
  const _ZoomControls({required this.isDark, required this.onIn, required this.onOut, required this.onFit});
  final bool isDark;
  final VoidCallback onIn;
  final VoidCallback onOut;
  final VoidCallback onFit;

  @override
  Widget build(BuildContext context) {
    Widget btn(IconData icon, String tip, VoidCallback onTap) => Tooltip(
          message: tip,
          child: InkWell(
            onTap: onTap,
            borderRadius: BorderRadius.circular(10),
            child: SizedBox(width: 38, height: 38, child: Icon(icon, size: 20, color: isDark ? Colors.white : const Color(0xFF1F2937))),
          ),
        );
    return Material(
      color: isDark ? const Color(0xFF1F2937) : Colors.white,
      elevation: 4,
      shadowColor: Colors.black26,
      borderRadius: BorderRadius.circular(12),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        btn(Icons.add_rounded, 'Zoom in', onIn),
        Container(width: 22, height: 1, color: isDark ? Colors.white12 : Colors.black12),
        btn(Icons.remove_rounded, 'Zoom out', onOut),
        Container(width: 22, height: 1, color: isDark ? Colors.white12 : Colors.black12),
        btn(Icons.fit_screen_rounded, 'Fit the whole tree', onFit),
      ]),
    );
  }
}

class _OverflowChildrenNode extends StatelessWidget {
  final int count;
  final List<FamilyMember> hiddenMembers;
  final bool expanded;
  final VoidCallback onTap;
  final ValueChanged<FamilyMember> onMemberTap;

  const _OverflowChildrenNode({
    required this.count,
    required this.hiddenMembers,
    required this.expanded,
    required this.onTap,
    required this.onMemberTap,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: _FamilyTreeLayout.nodeWidth,
      child: Column(
        children: [
          GestureDetector(
            onTap: onTap,
            child: Container(
              width: _FamilyTreeLayout.avatarSize,
              height: _FamilyTreeLayout.avatarSize,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: WorksheetPalette.teal.withValues(alpha: 0.15),
                border: Border.all(color: WorksheetPalette.teal, width: 2, style: BorderStyle.solid),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(expanded ? Icons.expand_less : Icons.expand_more, color: WorksheetPalette.teal, size: 22),
                  Text(
                    '+$count',
                    style: const TextStyle(color: WorksheetPalette.teal, fontSize: 11, fontWeight: FontWeight.w900),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 6),
          Text(
            expanded ? 'SHOW LESS' : 'MORE KIDS',
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 8, fontWeight: FontWeight.w800, color: WorksheetPalette.teal),
          ),
          if (expanded) ...[
            const SizedBox(height: 6),
            ...hiddenMembers.map(
              (m) => Padding(
                padding: const EdgeInsets.only(bottom: 4),
                child: InkWell(
                  onTap: () => onMemberTap(m),
                  borderRadius: BorderRadius.circular(8),
                  child: Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
                    decoration: BoxDecoration(
                      color: WorksheetPalette.teal.withValues(alpha: 0.12),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Text(
                      '#${m.birthOrder} ${m.name}',
                      textAlign: TextAlign.center,
                      maxLines: 4,
                      style: const TextStyle(fontSize: 8, fontWeight: FontWeight.w700),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ],
      ),
    );
  }
}

class _MemberEditorDialog extends StatefulWidget {
  final String title;
  final FamilyMember? member;
  final List<FamilyMember> parents;
  final String? initialParentId;
  final FamilyTree? tree;
  final String userEmail;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description) onChargeWallet;
  final VoidCallback onDataChanged;
  /// Shown as a small trash icon in the corner when set (editing an existing member).
  final VoidCallback? onDelete;

  const _MemberEditorDialog({
    required this.title,
    required this.userEmail,
    required this.user,
    required this.config,
    required this.onChargeWallet,
    required this.onDataChanged,
    this.member,
    this.parents = const [],
    this.initialParentId,
    this.tree,
    this.onDelete,
  });

  @override
  State<_MemberEditorDialog> createState() => _MemberEditorDialogState();
}

class _MemberEditorDialogState extends State<_MemberEditorDialog> {
  late final TextEditingController _nameC;
  late final TextEditingController _notesC;
  late final TextEditingController _birthC;
  late final TextEditingController _placeC;
  late final TextEditingController _deathC;
  late final TextEditingController _jobC;
  late FamilyGender _gender;
  String? _parentId;
  String? _spouseId;
  String? _photoPath;
  int _birthOrder = 1;
  int _visibleChildrenCap = 0;
  bool _hidden = false;

  @override
  void initState() {
    super.initState();
    final m = widget.member;
    _nameC = TextEditingController(text: m?.name ?? '');
    _notesC = TextEditingController(text: m?.notes ?? '');
    _birthC = TextEditingController(text: m?.birthDate ?? '');
    _placeC = TextEditingController(text: m?.birthPlace ?? '');
    _deathC = TextEditingController(text: m?.deathDate ?? '');
    _jobC = TextEditingController(text: m?.occupation ?? '');
    _gender = m?.gender ?? FamilyGender.unknown;
    _parentId = m?.parentId ?? widget.initialParentId;
    _spouseId = m?.spouseId;
    _photoPath = m?.photoPath;
    _birthOrder = m?.birthOrder ?? (widget.tree != null ? nextBirthOrderForParent(widget.tree!, widget.initialParentId) : 1);
    _visibleChildrenCap = m?.visibleChildrenCap ?? 0;
    _hidden = m?.hidden ?? false;
  }

  @override
  void dispose() {
    _nameC.dispose();
    _notesC.dispose();
    _birthC.dispose();
    _placeC.dispose();
    _deathC.dispose();
    _jobC.dispose();
    super.dispose();
  }

  Future<void> _pickPhoto() async {
    final hasPhoto = NgmyFamilyTreePayments.hasActivePhotoAccess(widget.config, widget.userEmail);
    final hasStripe = await NgmyStripePayments.hasActiveAccess(widget.userEmail, NgmyStripeProduct.familyTree);
    if (!hasPhoto && !hasStripe && !(widget.user as dynamic).isAdmin) {
      final paid = await NgmyFamilyTreePayments.confirmAndCharge(
        context: context,
        user: widget.user,
        config: widget.config,
        amount: 0,
        title: 'Family Tree Photos',
        message: 'Subscribe to upload family photos (30 days).',
        onCharge: widget.onChargeWallet,
      );
      if (!paid || !mounted) return;
      NgmyFamilyTreePayments.grantPhotoAccess(widget.config, widget.userEmail);
      widget.onDataChanged();
    }
    final img = await ngmyPickImageBase64(maxWidth: 800);
    if (img != null && mounted) setState(() => _photoPath = img);
  }

  void _save() {
    final name = _nameC.text.trim().toUpperCase();
    if (name.isEmpty) return;
    Navigator.pop(
      context,
      (widget.member ?? FamilyMember(id: DateTime.now().microsecondsSinceEpoch.toString(), name: name)).copyWith(
        name: name,
        gender: _gender,
        parentId: _parentId,
        spouseId: _spouseId,
        photoPath: _photoPath,
        notes: _notesC.text.trim(),
        birthDate: _birthC.text.trim(),
        birthPlace: _placeC.text.trim(),
        deathDate: _deathC.text.trim(),
        occupation: _jobC.text.trim(),
        birthOrder: _birthOrder,
        hidden: _hidden,
        visibleChildrenCap: _visibleChildrenCap,
      ),
    );
  }

  /// Small "are you sure?" before removing the member.
  Future<void> _confirmDelete() async {
    final name = widget.member?.name.trim() ?? '';
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        insetPadding: const EdgeInsets.symmetric(horizontal: 60),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
        contentPadding: const EdgeInsets.fromLTRB(20, 18, 20, 6),
        actionsPadding: const EdgeInsets.fromLTRB(12, 0, 12, 8),
        content: Text(
          'Delete ${name.isEmpty ? 'this member' : name}?',
          textAlign: TextAlign.center,
          style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15),
        ),
        actionsAlignment: MainAxisAlignment.center,
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          TextButton(
            onPressed: () => Navigator.pop(ctx, true),
            child: Text('Delete', style: TextStyle(color: Colors.red.shade600, fontWeight: FontWeight.w800)),
          ),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    Navigator.pop(context);
    widget.onDelete?.call();
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    final spouseOptions = widget.parents.where((m) => m.id != widget.member?.id).toList();

    return AlertDialog(
      backgroundColor: p.cardBg,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
      insetPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 20),
      contentPadding: const EdgeInsets.fromLTRB(18, 16, 18, 8),
      actionsPadding: EdgeInsets.zero,
      actions: const [],
      content: SizedBox(
        width: 420,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Stack(alignment: Alignment.center, children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 30),
                  child: Text(
                    widget.title,
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: p.primaryText, letterSpacing: 0.3),
                  ),
                ),
                if (widget.onDelete != null && widget.member != null)
                  Positioned(
                    right: 0,
                    child: Tooltip(
                      message: 'Delete member',
                      child: InkWell(
                        onTap: _confirmDelete,
                        customBorder: const CircleBorder(),
                        child: Padding(
                          padding: const EdgeInsets.all(5),
                          child: Icon(Icons.delete_outline_rounded, size: 17, color: Colors.red.shade400),
                        ),
                      ),
                    ),
                  ),
              ]),
              const SizedBox(height: 14),
              Center(
                child: GestureDetector(
                  onTap: _pickPhoto,
                  child: Stack(
                    children: [
                      CircleAvatar(
                        radius: 42,
                        backgroundColor: p.mutedSurface,
                        backgroundImage: ngmyImageFromRef(_photoPath),
                        child: _photoPath == null ? Icon(Icons.person, size: 40, color: p.secondaryText) : null,
                      ),
                      Positioned(
                        right: 0,
                        bottom: 0,
                        child: CircleAvatar(
                          radius: 14,
                          backgroundColor: WorksheetPalette.teal,
                          child: const Icon(Icons.camera_alt, size: 14, color: Colors.white),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 18),
              _MemberEditorSection(
                palette: p,
                label: 'Identity',
                child: Column(
                  children: [
                    _MemberEditorTextField(
                      palette: p,
                      controller: _nameC,
                      hint: 'Full name',
                      icon: Icons.badge_outlined,
                      textCapitalization: TextCapitalization.characters,
                    ),
                    const SizedBox(height: 10),
                    _MemberEditorGenderRow(
                      palette: p,
                      value: _gender,
                      onChanged: (g) => setState(() => _gender = g),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              _MemberEditorSection(
                palette: p,
                label: 'Family links',
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text(
                      '1. Parent',
                      style: TextStyle(
                        color: p.secondaryText,
                        fontSize: 11,
                        fontWeight: FontWeight.w800,
                        letterSpacing: 0.3,
                      ),
                    ),
                    const SizedBox(height: 6),
                    _MemberEditorDropdown<String?>(
                      palette: p,
                      value: _parentId,
                      icon: Icons.account_tree_outlined,
                      hint: 'Who is their parent?',
                      items: [
                        const DropdownMenuItem(value: null, child: Text('None — root ancestor')),
                        ...widget.parents.map((m) => DropdownMenuItem(value: m.id, child: Text(m.name))),
                      ],
                      onChanged: (v) => setState(() => _parentId = v),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      '2. Spouse',
                      style: TextStyle(
                        color: p.secondaryText,
                        fontSize: 11,
                        fontWeight: FontWeight.w800,
                        letterSpacing: 0.3,
                      ),
                    ),
                    const SizedBox(height: 6),
                    _MemberEditorDropdown<String?>(
                      palette: p,
                      value: _spouseId,
                      icon: Icons.favorite_border_rounded,
                      hint: 'Who is their spouse / partner?',
                      items: [
                        const DropdownMenuItem(value: null, child: Text('None')),
                        ...spouseOptions.map((m) => DropdownMenuItem(value: m.id, child: Text(m.name))),
                      ],
                      onChanged: (v) => setState(() => _spouseId = v),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              _MemberEditorSection(
                palette: p,
                label: 'Life details',
                child: Column(
                  children: [
                    _MemberEditorTextField(
                      palette: p,
                      controller: _birthC,
                      hint: 'Birth date',
                      icon: Icons.cake_outlined,
                    ),
                    const SizedBox(height: 10),
                    _MemberEditorTextField(
                      palette: p,
                      controller: _placeC,
                      hint: 'Birth place',
                      icon: Icons.place_outlined,
                    ),
                    const SizedBox(height: 10),
                    _MemberEditorTextField(
                      palette: p,
                      controller: _deathC,
                      hint: 'Date of death (if deceased)',
                      icon: Icons.church_outlined,
                    ),
                    const SizedBox(height: 10),
                    _MemberEditorTextField(
                      palette: p,
                      controller: _jobC,
                      hint: 'Occupation',
                      icon: Icons.work_outline_rounded,
                    ),
                    const SizedBox(height: 10),
                    _MemberEditorTextField(
                      palette: p,
                      controller: _notesC,
                      hint: 'Notes',
                      icon: Icons.notes_rounded,
                      minLines: 3,
                      maxLines: 5,
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 12),
              _MemberEditorStepperCard(
                palette: p,
                title: 'Child order',
                subtitle: _ordinalLabel(_birthOrder),
                onMinus: () => setState(() => _birthOrder = math.max(1, _birthOrder - 1)),
                onPlus: () => setState(() => _birthOrder += 1),
              ),
              if (widget.member != null && widget.tree != null && childrenOf(widget.tree!, widget.member!.id).isNotEmpty) ...[
                const SizedBox(height: 10),
                _MemberEditorStepperCard(
                  palette: p,
                  title: 'Visible in tree',
                  subtitle: _visibleChildrenCap == 0
                      ? 'Uses tree default'
                      : 'Show $_visibleChildrenCap, rest in menu',
                  onMinus: _visibleChildrenCap > 0 ? () => setState(() => _visibleChildrenCap -= 1) : null,
                  onPlus: () => setState(() => _visibleChildrenCap += 1),
                ),
              ],
              const SizedBox(height: 10),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                decoration: BoxDecoration(
                  color: p.mutedSurface,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: p.cardBorder),
                ),
                child: SwitchListTile(
                  contentPadding: EdgeInsets.zero,
                  activeThumbColor: WorksheetPalette.teal,
                  title: Text('Hidden member', style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w700, fontSize: 14)),
                  subtitle: Text('Hide from the tree canvas', style: TextStyle(color: p.secondaryText, fontSize: 11)),
                  value: _hidden,
                  onChanged: (v) => setState(() => _hidden = v),
                ),
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => Navigator.pop(context),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: p.primaryText,
                        side: BorderSide(color: p.cardBorder),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    flex: 2,
                    child: FilledButton(
                      onPressed: _save,
                      style: FilledButton.styleFrom(
                        backgroundColor: WorksheetPalette.green,
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        elevation: 0,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: const Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.check_rounded, size: 20),
                          SizedBox(width: 8),
                          Text('Save member', style: TextStyle(fontWeight: FontWeight.w800)),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 4),
            ],
          ),
        ),
      ),
    );
  }

  String _ordinalLabel(int n) {
    if (n % 100 >= 11 && n % 100 <= 13) return '${n}th child';
    switch (n % 10) {
      case 1:
        return '${n}st child';
      case 2:
        return '${n}nd child';
      case 3:
        return '${n}rd child';
      default:
        return '${n}th child';
    }
  }
}

class _MemberEditorSection extends StatelessWidget {
  const _MemberEditorSection({required this.palette, required this.label, required this.child});

  final WorksheetPalette palette;
  final String label;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 4, bottom: 8),
          child: Text(
            label.toUpperCase(),
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.w800,
              letterSpacing: 1.1,
              color: palette.secondaryText,
            ),
          ),
        ),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: palette.mutedSurface,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: palette.cardBorder),
          ),
          child: child,
        ),
      ],
    );
  }
}

class _MemberEditorTextField extends StatelessWidget {
  const _MemberEditorTextField({
    required this.palette,
    required this.controller,
    required this.hint,
    required this.icon,
    this.textCapitalization,
    this.minLines = 1,
    this.maxLines = 1,
  });

  final WorksheetPalette palette;
  final TextEditingController controller;
  final String hint;
  final IconData icon;
  final TextCapitalization? textCapitalization;
  final int minLines;
  final int maxLines;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: palette.cardBg,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: palette.cardBorder.withValues(alpha: 0.85)),
      ),
      child: TextField(
        controller: controller,
        minLines: minLines,
        maxLines: maxLines,
        textCapitalization: textCapitalization ?? TextCapitalization.none,
        style: TextStyle(color: palette.primaryText, fontSize: 14, fontWeight: FontWeight.w600),
        decoration: InputDecoration(
          hintText: hint,
          hintStyle: TextStyle(color: palette.secondaryText, fontWeight: FontWeight.w500),
          prefixIcon: Icon(icon, size: 20, color: WorksheetPalette.teal),
          border: InputBorder.none,
          contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
        ),
      ),
    );
  }
}

class _MemberEditorDropdown<T> extends StatelessWidget {
  const _MemberEditorDropdown({
    required this.palette,
    required this.value,
    required this.icon,
    required this.hint,
    required this.items,
    required this.onChanged,
  });

  final WorksheetPalette palette;
  final T? value;
  final IconData icon;
  final String hint;
  final List<DropdownMenuItem<T>> items;
  final ValueChanged<T?> onChanged;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10),
      decoration: BoxDecoration(
        color: palette.cardBg,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: palette.cardBorder.withValues(alpha: 0.85)),
      ),
      child: DropdownButtonHideUnderline(
        child: DropdownButton<T>(
          isExpanded: true,
          value: value,
          icon: Icon(Icons.expand_more_rounded, color: palette.secondaryText),
          style: TextStyle(color: palette.primaryText, fontSize: 14, fontWeight: FontWeight.w600),
          dropdownColor: palette.cardBg,
          hint: Text(hint, style: TextStyle(color: palette.secondaryText, fontWeight: FontWeight.w500)),
          items: items,
          onChanged: onChanged,
        ),
      ),
    );
  }
}

class _MemberEditorGenderRow extends StatelessWidget {
  const _MemberEditorGenderRow({
    required this.palette,
    required this.value,
    required this.onChanged,
  });

  final WorksheetPalette palette;
  final FamilyGender value;
  final ValueChanged<FamilyGender> onChanged;

  @override
  Widget build(BuildContext context) {
    Widget chip(FamilyGender g, String label, IconData icon) {
      final selected = value == g;
      return Expanded(
        child: Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: () => onChanged(g),
            borderRadius: BorderRadius.circular(12),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 180),
              padding: const EdgeInsets.symmetric(vertical: 10),
              decoration: BoxDecoration(
                color: selected ? WorksheetPalette.teal.withValues(alpha: 0.18) : palette.cardBg,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(
                  color: selected ? WorksheetPalette.teal : palette.cardBorder.withValues(alpha: 0.85),
                  width: selected ? 1.5 : 1,
                ),
              ),
              child: Column(
                children: [
                  Icon(icon, size: 18, color: selected ? WorksheetPalette.teal : palette.secondaryText),
                  const SizedBox(height: 4),
                  Text(
                    label,
                    style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w800,
                      color: selected ? WorksheetPalette.teal : palette.secondaryText,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    }

    return Row(
      children: [
        chip(FamilyGender.male, 'Male', Icons.male_rounded),
        const SizedBox(width: 8),
        chip(FamilyGender.female, 'Female', Icons.female_rounded),
        const SizedBox(width: 8),
        chip(FamilyGender.unknown, 'Other', Icons.person_outline_rounded),
      ],
    );
  }
}

class _MemberEditorStepperCard extends StatelessWidget {
  const _MemberEditorStepperCard({
    required this.palette,
    required this.title,
    required this.subtitle,
    required this.onPlus,
    this.onMinus,
  });

  final WorksheetPalette palette;
  final String title;
  final String subtitle;
  final VoidCallback? onMinus;
  final VoidCallback onPlus;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: BoxDecoration(
        color: palette.mutedSurface,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: palette.cardBorder),
      ),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: TextStyle(color: palette.primaryText, fontWeight: FontWeight.w800, fontSize: 13)),
                Text(subtitle, style: TextStyle(color: palette.secondaryText, fontSize: 11)),
              ],
            ),
          ),
          _StepperIconButton(palette: palette, icon: Icons.remove_rounded, onPressed: onMinus),
          const SizedBox(width: 6),
          _StepperIconButton(palette: palette, icon: Icons.add_rounded, onPressed: onPlus),
        ],
      ),
    );
  }
}

class _StepperIconButton extends StatelessWidget {
  const _StepperIconButton({required this.palette, required this.icon, this.onPressed});

  final WorksheetPalette palette;
  final IconData icon;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    final enabled = onPressed != null;
    return Material(
      color: enabled ? WorksheetPalette.teal.withValues(alpha: 0.12) : palette.cardBg,
      borderRadius: BorderRadius.circular(10),
      child: InkWell(
        onTap: onPressed,
        borderRadius: BorderRadius.circular(10),
        child: SizedBox(
          width: 36,
          height: 36,
          child: Icon(icon, size: 20, color: enabled ? WorksheetPalette.teal : palette.secondaryText.withValues(alpha: 0.4)),
        ),
      ),
    );
  }
}

class _MemberViewDialog extends StatelessWidget {
  const _MemberViewDialog({
    required this.member,
    required this.tree,
    required this.palette,
  });

  final FamilyMember member;
  final FamilyTree tree;
  final WorksheetPalette palette;

  Color _genderColor(FamilyGender gender) {
    switch (gender) {
      case FamilyGender.male:
        return WorksheetPalette.teal;
      case FamilyGender.female:
        return const Color(0xFFEC4899);
      case FamilyGender.unknown:
        return Colors.grey;
    }
  }

  String _genderLabel(FamilyGender gender) {
    switch (gender) {
      case FamilyGender.male:
        return 'Male';
      case FamilyGender.female:
        return 'Female';
      case FamilyGender.unknown:
        return 'Not specified';
    }
  }

  String _memberName(String? id) {
    if (id == null || id.isEmpty) return '—';
    for (final m in tree.members) {
      if (m.id == id) return m.name;
    }
    return '—';
  }

  Widget _infoTile(String label, String value, {IconData? icon}) {
    final text = value.trim().isEmpty ? '—' : value.trim();
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 11),
      decoration: BoxDecoration(
        color: palette.cardBg,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: palette.cardBorder.withValues(alpha: 0.85)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (icon != null) ...[
            Icon(icon, size: 18, color: WorksheetPalette.teal),
            const SizedBox(width: 10),
          ],
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label.toUpperCase(),
                  style: TextStyle(
                    color: palette.secondaryText,
                    fontSize: 9,
                    fontWeight: FontWeight.w800,
                    letterSpacing: 0.8,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  text,
                  style: TextStyle(color: palette.primaryText, fontSize: 14, fontWeight: FontWeight.w700, height: 1.35),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _section(String title, List<Widget> children) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 4, bottom: 8),
          child: Text(
            title.toUpperCase(),
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.w800,
              letterSpacing: 1.1,
              color: palette.secondaryText,
            ),
          ),
        ),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            color: palette.mutedSurface,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: palette.cardBorder),
          ),
          child: Column(children: children),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final order = siblingDisplayOrder(tree, member);
    final ring = _genderColor(member.gender);
    final photo = ngmyImageFromRef(member.photoPath);

    return Dialog(
      backgroundColor: palette.cardBg,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 420),
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(18, 16, 18, 18),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                member.name,
                textAlign: TextAlign.center,
                style: TextStyle(color: palette.primaryText, fontWeight: FontWeight.w900, fontSize: 18),
              ),
              const SizedBox(height: 4),
              Text(
                tree.isViewOnly ? 'Shared family tree · view only' : 'Member profile',
                textAlign: TextAlign.center,
                style: TextStyle(color: palette.secondaryText, fontSize: 12, fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 16),
              Center(
                child: Container(
                  padding: const EdgeInsets.all(4),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: ring, width: 3),
                    boxShadow: [BoxShadow(color: ring.withValues(alpha: 0.25), blurRadius: 12)],
                  ),
                  child: CircleAvatar(
                    radius: 52,
                    backgroundColor: ring.withValues(alpha: 0.12),
                    backgroundImage: photo,
                    child: photo == null ? Icon(Icons.person, size: 48, color: ring) : null,
                  ),
                ),
              ),
              const SizedBox(height: 10),
              Center(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  decoration: BoxDecoration(
                    color: ring.withValues(alpha: 0.14),
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: ring.withValues(alpha: 0.45)),
                  ),
                  child: Text(
                    _genderLabel(member.gender),
                    style: TextStyle(color: ring, fontWeight: FontWeight.w800, fontSize: 12),
                  ),
                ),
              ),
              const SizedBox(height: 18),
              _section('Identity', [
                _infoTile('Full name', member.name, icon: Icons.badge_outlined),
                if (order > 0) _infoTile('Child order', '#$order', icon: Icons.format_list_numbered_rounded),
              ]),
              const SizedBox(height: 12),
              _section('Life details', [
                _infoTile('Birth date', member.birthDate, icon: Icons.cake_outlined),
                _infoTile('Birth place', member.birthPlace, icon: Icons.place_outlined),
                _infoTile('Date of death', member.deathDate, icon: Icons.church_outlined),
                _infoTile('Occupation', member.occupation, icon: Icons.work_outline_rounded),
              ]),
              const SizedBox(height: 12),
              _section('Family links', [
                _infoTile('1. Parent', _memberName(member.parentId), icon: Icons.account_tree_outlined),
                _infoTile('2. Spouse', _memberName(member.spouseId), icon: Icons.favorite_border_rounded),
              ]),
              if (member.notes.trim().isNotEmpty) ...[
                const SizedBox(height: 12),
                _section('Notes', [
                  _infoTile('Notes', member.notes, icon: Icons.notes_rounded),
                ]),
              ],
              const SizedBox(height: 18),
              FilledButton(
                onPressed: () => Navigator.pop(context),
                style: FilledButton.styleFrom(
                  backgroundColor: WorksheetPalette.green,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
                child: const Text('Close', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _FamilyTreeMiniTool extends StatelessWidget {
  const _FamilyTreeMiniTool({
    required this.tooltip,
    required this.icon,
    required this.onPressed,
    required this.p,
    this.tint,
  });

  final String tooltip;
  final IconData icon;
  final VoidCallback onPressed;
  final WorksheetPalette p;
  final Color? tint;

  @override
  Widget build(BuildContext context) {
    final color = tint ?? p.secondaryText;
    return Padding(
      padding: const EdgeInsets.only(left: 4),
      child: Tooltip(
        message: tooltip,
        child: Material(
          color: color.withValues(alpha: p.isDark ? 0.14 : 0.08),
          borderRadius: BorderRadius.circular(8),
          child: InkWell(
            onTap: onPressed,
            borderRadius: BorderRadius.circular(8),
            child: SizedBox(
              width: 30,
              height: 30,
              child: Icon(icon, size: 16, color: color),
            ),
          ),
        ),
      ),
    );
  }
}
