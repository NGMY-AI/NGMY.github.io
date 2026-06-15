import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_family_book_ui.dart';
import 'ngmy_family_tree_payments.dart';
import 'ngmy_family_tree_sync.dart';
import 'ngmy_family_tree_sync_ui.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_dialogs.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheets_storage.dart';

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

  Future<void> _reload() async {
    final trees = await loadFamilyTrees(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _trees = trees;
      _loading = false;
    });
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
                tooltip: 'Sync family trees',
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
        const SizedBox(height: 12),
        ..._trees.map((tree) => _treeCard(tree, p)),
      ],
    );
  }

  Widget _emptyState(WorksheetPalette p) {
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
    );
  }

  Widget _treeCard(FamilyTree tree, WorksheetPalette p) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: p.cardBg,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: p.cardBorder),
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
                        '${tree.visibleMemberCount} members · Code: ${tree.code}${tree.isViewOnly ? ' · View only' : ''}',
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

  bool get _isAdmin => (widget.user as dynamic).isAdmin == true;

  bool get _canEdit => familyTreeCanEdit(_tree, widget.userEmail);

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
    final p = WorksheetPalette.of(context);
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: p.cardBg,
        title: Text('Remove family tree?', style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w900)),
        content: Text(
          _tree.isViewOnly
              ? 'This removes "${_tree.name}" from this phone only. The creator\'s copy is not affected.'
              : 'Delete "${_tree.name}" permanently? This cannot be undone.',
          style: TextStyle(color: p.secondaryText, height: 1.35),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, true),
            style: FilledButton.styleFrom(backgroundColor: Colors.redAccent),
            child: const Text('Remove'),
          ),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    await deleteFamilyTree(widget.userEmail, _tree.id);
    widget.onDataChanged();
    if (!mounted) return;
    NgmyNavigator.pop(context);
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
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Family Tree', style: TextStyle(fontWeight: FontWeight.w800, color: p.primaryText)),
                  const SizedBox(height: 8),
                  SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Row(
                      children: [
                        OutlinedButton.icon(
                          onPressed: _canEdit && _undoStack.isNotEmpty ? _undo : null,
                          icon: const Icon(Icons.undo, size: 16),
                          label: const Text('Undo'),
                        ),
                        const SizedBox(width: 8),
                        FilledButton.icon(
                          onPressed: _openFamilyBook,
                          style: FilledButton.styleFrom(backgroundColor: Colors.orange),
                          icon: const Icon(Icons.menu_book_outlined, size: 16),
                          label: const Text('Family Book'),
                        ),
                        if (_canEdit) ...[
                          const SizedBox(width: 8),
                          FilledButton.icon(
                            onPressed: _openTreeSettings,
                            style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.greenDark),
                            icon: const Icon(Icons.tune, size: 16),
                            label: const Text('Display'),
                          ),
                        ],
                        const SizedBox(width: 8),
                        OutlinedButton.icon(
                          onPressed: _openSync,
                          icon: const Icon(Icons.sync_rounded, size: 16),
                          label: const Text('Sync'),
                        ),
                        if (_tree.isViewOnly) ...[
                          const SizedBox(width: 8),
                          IconButton(
                            tooltip: 'Remove shared tree from this device',
                            onPressed: _deleteThisTree,
                            icon: const Icon(Icons.delete_outline_rounded, color: Colors.redAccent, size: 22),
                            style: IconButton.styleFrom(
                              backgroundColor: Colors.redAccent.withValues(alpha: 0.08),
                              padding: const EdgeInsets.all(10),
                            ),
                          ),
                        ] else if (familyTreeIsOwner(_tree, widget.userEmail)) ...[
                          const SizedBox(width: 8),
                          IconButton(
                            tooltip: 'Delete family tree',
                            onPressed: _deleteThisTree,
                            icon: const Icon(Icons.delete_outline_rounded, color: Colors.redAccent, size: 22),
                            style: IconButton.styleFrom(
                              backgroundColor: Colors.redAccent.withValues(alpha: 0.08),
                              padding: const EdgeInsets.all(10),
                            ),
                          ),
                        ],
                        if (_canEdit) ...[
                          const SizedBox(width: 8),
                          FilledButton.icon(
                            onPressed: () => _addMember(parentId: rootMember(_tree)?.id),
                            style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
                            icon: const Icon(Icons.add, size: 16),
                            label: const Text('Add Member'),
                          ),
                        ],
                      ],
                    ),
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
                        return SingleChildScrollView(
                          scrollDirection: Axis.horizontal,
                          child: SingleChildScrollView(
                            child: ConstrainedBox(
                              constraints: BoxConstraints(
                                minWidth: constraints.maxWidth,
                                minHeight: math.max(320, constraints.maxHeight),
                              ),
                              child: Center(
                                child: FamilyTreeCanvas(
                                  tree: _tree,
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
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: WorksheetPalette.green,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [BoxShadow(color: WorksheetPalette.green.withValues(alpha: 0.35), blurRadius: 14, offset: const Offset(0, 5))],
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: _openSync,
              customBorder: const CircleBorder(),
              child: Container(
                width: 52,
                height: 52,
                decoration: BoxDecoration(
                  color: Colors.white.withValues(alpha: 0.2),
                  shape: BoxShape.circle,
                  border: Border.all(color: Colors.white.withValues(alpha: 0.75), width: 2.5),
                  boxShadow: [
                    BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 6, offset: const Offset(0, 2)),
                  ],
                ),
                child: const Icon(Icons.park_outlined, color: Colors.white, size: 28),
              ),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        _tree.name,
                        style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900),
                      ),
                    ),
                    IconButton(
                      onPressed: _canEdit ? _renameTree : null,
                      icon: const Icon(Icons.edit_outlined, color: Colors.white, size: 18),
                      padding: EdgeInsets.zero,
                      constraints: const BoxConstraints(),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                Wrap(
                  spacing: 12,
                  runSpacing: 4,
                  children: [
                    _metaChip(Icons.people_outline, '${_tree.visibleMemberCount} members'),
                    _metaChip(Icons.lock_outline, _tree.isPrivate ? 'Private' : 'Public'),
                    _metaChip(Icons.tag, 'Code: ${_tree.code}'),
                    InkWell(
                      onTap: _manageCollaborators,
                      borderRadius: BorderRadius.circular(8),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 2, vertical: 2),
                        child: _metaChip(Icons.group_outlined, 'Collaborators (${_tree.collaboratorEmails.length})'),
                      ),
                    ),
                    if (_tree.isViewOnly) _metaChip(Icons.visibility_outlined, 'View only'),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _metaChip(IconData icon, String label) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 13, color: Colors.white70),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(color: Colors.white70, fontSize: 11, fontWeight: FontWeight.w600)),
      ],
    );
  }
}

class FamilyTreeCanvas extends StatelessWidget {
  final FamilyTree tree;
  final bool showHidden;
  final Set<String> expandedChildGroups;
  final ValueChanged<String> onToggleChildGroup;
  final ValueChanged<FamilyMember> onMemberTap;
  final bool isDark;

  const FamilyTreeCanvas({
    super.key,
    required this.tree,
    required this.showHidden,
    required this.expandedChildGroups,
    required this.onToggleChildGroup,
    required this.onMemberTap,
    required this.isDark,
  });

  @override
  Widget build(BuildContext context) {
    final layout = _FamilyTreeLayout.compute(
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
            Positioned(
              top: 0,
              left: 0,
              right: 0,
              child: Center(
                child: Text(
                  tree.name,
                  style: TextStyle(
                    fontFamily: 'Georgia',
                    fontSize: 22,
                    fontWeight: FontWeight.w700,
                    color: WorksheetPalette.teal.withValues(alpha: isDark ? 0.95 : 1),
                    letterSpacing: 0.5,
                  ),
                ),
              ),
            ),
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
  static const nameBlockHeight = 28.0;
  static const nodeHeight = avatarSize + 6 + nameBlockHeight;
  static const rowGap = 44.0;
  static const verticalStep = nodeHeight + rowGap;
  static const horizontalGap = 22.0;
  static const titleBlockHeight = 44.0;
  static const canvasPad = 24.0;

  final Map<String, _LayoutNode> nodes;
  final List<_TreeEdge> edges;
  final List<_OverflowLayoutNode> overflowNodes;
  final double width;
  final double height;

  const _FamilyTreeLayout({
    required this.nodes,
    required this.edges,
    this.overflowNodes = const [],
    required this.width,
    required this.height,
  });

  static Offset _nodeBottom(Offset topCenter) => Offset(topCenter.dx, topCenter.dy + nodeHeight);

  static Offset _avatarCenter(Offset topCenter) =>
      Offset(topCenter.dx, topCenter.dy + avatarSize / 2);

  static Offset _nodeTop(Offset topCenter) => topCenter;

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

  static _FamilyTreeLayout compute(
    FamilyTree tree, {
    required bool showHidden,
    Set<String> expandedChildGroups = const {},
  }) {
    final visible = showHidden ? tree.members : visibleMembers(tree);
    if (visible.isEmpty) {
      return const _FamilyTreeLayout(nodes: {}, edges: [], overflowNodes: [], width: 0, height: 0);
    }
    final visibleIds = visible.map((m) => m.id).toSet();
    final root = visible.firstWhere(
      (m) => m.parentId == null || m.parentId!.isEmpty || !visibleIds.contains(m.parentId),
      orElse: () => visible.first,
    );

    final nodes = <String, _LayoutNode>{};
    final edges = <_TreeEdge>[];
    final overflowNodes = <_OverflowLayoutNode>[];
    final subtreeWidths = <String, double>{};

    List<FamilyMember> kidsOf(String id) {
      return visible.where((m) => m.parentId == id).toList()
        ..sort((a, b) => a.birthOrder.compareTo(b.birthOrder));
    }

    double measure(String id) {
      if (subtreeWidths.containsKey(id)) return subtreeWidths[id]!;
      final member = visible.firstWhere((m) => m.id == id);
      final kids = kidsOf(id);
      final split = _splitChildren(tree, member, kids, expandedChildGroups);

      var width = nodeWidth;
      if (member.spouseId != null && visibleIds.contains(member.spouseId)) {
        width = nodeWidth * 2 + horizontalGap;
      }

      if (split.shown.isEmpty) {
        subtreeWidths[id] = width;
        return width;
      }

      var total = 0.0;
      for (var i = 0; i < split.shown.length; i++) {
        total += measure(split.shown[i].id);
        if (i < split.shown.length - 1) total += horizontalGap;
      }
      if (split.hasOverflow) {
        if (split.shown.isNotEmpty) total += horizontalGap;
        total += nodeWidth;
      }
      subtreeWidths[id] = math.max(total, width);
      return subtreeWidths[id]!;
    }

    void place(String id, double left, int depth) {
      if (nodes.containsKey(id)) return;

      final member = visible.firstWhere((m) => m.id == id);
      final kids = kidsOf(id);
      final split = _splitChildren(tree, member, kids, expandedChildGroups);

      final subtreeW = subtreeWidths[id] ?? nodeWidth;
      final rowTop = titleBlockHeight + depth * verticalStep;

      FamilyMember? spouse;
      if (member.spouseId != null && visibleIds.contains(member.spouseId)) {
        spouse = visible.firstWhere((m) => m.id == member.spouseId);
      }

      if (split.shown.isEmpty) {
        final centerX = left + subtreeW / 2;
        if (spouse != null && !nodes.containsKey(spouse.id)) {
          final half = nodeWidth / 2 + horizontalGap / 2;
          final memberTop = Offset(centerX - half, rowTop);
          final spouseTop = Offset(centerX + half, rowTop);
          nodes[member.id] = _LayoutNode(member: member, position: memberTop);
          nodes[spouse.id] = _LayoutNode(member: spouse, position: spouseTop);
          edges.add(_TreeEdge(
            _avatarCenter(memberTop),
            _avatarCenter(spouseTop),
            isSpouse: true,
          ));
        } else {
          nodes[id] = _LayoutNode(member: member, position: Offset(centerX, rowTop));
        }
        return;
      }

      var cursor = left;
      final childRowTop = titleBlockHeight + (depth + 1) * verticalStep;
      final childConnectorTops = <Offset>[];

      for (final child in split.shown) {
        final w = subtreeWidths[child.id] ?? nodeWidth;
        place(child.id, cursor, depth + 1);
        childConnectorTops.add(_nodeTop(nodes[child.id]!.position));
        cursor += w + horizontalGap;
      }

      if (split.hasOverflow) {
        final overflowCenter = cursor + nodeWidth / 2;
        overflowNodes.add(_OverflowLayoutNode(
          parentId: id,
          position: Offset(overflowCenter, childRowTop),
          hiddenMembers: split.hidden,
          count: split.hidden.length,
        ));
        childConnectorTops.add(_nodeTop(Offset(overflowCenter, childRowTop)));
        cursor += nodeWidth;
      }

      final parentCenterX = childConnectorTops.length == 1
          ? childConnectorTops.first.dx
          : (childConnectorTops.first.dx + childConnectorTops.last.dx) / 2;

      Offset parentTop;
      Offset parentConnectorBottom;
      if (spouse != null && !nodes.containsKey(spouse.id)) {
        final half = nodeWidth / 2 + horizontalGap / 2;
        parentTop = Offset(parentCenterX - half, rowTop);
        final spouseTop = Offset(parentCenterX + half, rowTop);
        nodes[member.id] = _LayoutNode(member: member, position: parentTop);
        nodes[spouse.id] = _LayoutNode(member: spouse, position: spouseTop);
        edges.add(_TreeEdge(_avatarCenter(parentTop), _avatarCenter(spouseTop), isSpouse: true));
        parentConnectorBottom = Offset(parentCenterX, rowTop + nodeHeight);
      } else {
        parentTop = Offset(parentCenterX, rowTop);
        nodes[id] = _LayoutNode(member: member, position: parentTop);
        parentConnectorBottom = _nodeBottom(parentTop);
      }

      edges.add(_TreeEdge(
        parentConnectorBottom,
        Offset.zero,
        childTops: childConnectorTops,
      ));
    }

    measure(root.id);
    place(root.id, 0, 0);

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

    final shiftX = canvasPad - minX;
    if (shiftX != 0) {
      for (final id in nodes.keys.toList()) {
        final n = nodes[id]!;
        nodes[id] = _LayoutNode(
          member: n.member,
          position: Offset(n.position.dx + shiftX, n.position.dy),
        );
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
      for (var i = 0; i < edges.length; i++) {
        final e = edges[i];
        edges[i] = _TreeEdge(
          Offset(e.from.dx + shiftX, e.from.dy),
          Offset(e.to.dx + shiftX, e.to.dy),
          isSpouse: e.isSpouse,
          childTops: e.childTops?.map((p) => Offset(p.dx + shiftX, p.dy)).toList(),
        );
      }
      maxX += shiftX;
    }

    return _FamilyTreeLayout(
      nodes: nodes,
      edges: edges,
      overflowNodes: overflowNodes,
      width: maxX + canvasPad,
      height: maxY + canvasPad,
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

  void _drawParentChildGroup(Canvas canvas, Paint paint, Offset parentBottom, List<Offset> childTops) {
    if (childTops.isEmpty) return;
    childTops.sort((a, b) => a.dx.compareTo(b.dx));

    if (childTops.length == 1) {
      canvas.drawLine(parentBottom, childTops.first, paint);
      return;
    }

    final midY = parentBottom.dy + (childTops.first.dy - parentBottom.dy) / 2;
    final path = Path()
      ..moveTo(parentBottom.dx, parentBottom.dy)
      ..lineTo(parentBottom.dx, midY)
      ..lineTo(childTops.first.dx, midY)
      ..lineTo(childTops.last.dx, midY);

    canvas.drawPath(path, paint);

    for (final childTop in childTops) {
      canvas.drawLine(Offset(childTop.dx, midY), childTop, paint);
    }
  }

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = WorksheetPalette.teal
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    for (final edge in layout.edges) {
      if (edge.isSpouse) {
        canvas.drawLine(edge.from, edge.to, paint);
        continue;
      }
      if (edge.childTops != null && edge.childTops!.isNotEmpty) {
        _drawParentChildGroup(canvas, paint, edge.from, edge.childTops!);
      } else if (edge.to != Offset.zero) {
        canvas.drawLine(edge.from, edge.to, paint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _FamilyTreeLinesPainter oldDelegate) =>
      oldDelegate.layout != layout;
}

class _MemberNode extends StatelessWidget {
  final FamilyMember member;
  final int siblingOrder;
  final VoidCallback onTap;

  const _MemberNode({
    required this.member,
    this.siblingOrder = 0,
    required this.onTap,
  });

  Color get _ringColor {
    switch (member.gender) {
      case FamilyGender.male:
        return WorksheetPalette.teal;
      case FamilyGender.female:
        return const Color(0xFFEC4899);
      case FamilyGender.unknown:
        return Colors.grey;
    }
  }

  @override
  Widget build(BuildContext context) {
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
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: _ringColor, width: 3),
                    color: _ringColor.withValues(alpha: 0.12),
                  ),
                  child: ClipOval(
                    child: ngmyImageFromRef(member.photoPath) != null
                        ? Image(
                            image: ngmyImageFromRef(member.photoPath)!,
                            fit: BoxFit.cover,
                            width: _FamilyTreeLayout.avatarSize,
                            height: _FamilyTreeLayout.avatarSize,
                          )
                        : Icon(Icons.person, color: _ringColor, size: 30),
                  ),
                ),
                if (siblingOrder > 0)
                  Positioned(
                    left: -4,
                    top: -4,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
                      decoration: BoxDecoration(
                        color: const Color(0xFF6366F1),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: Colors.white, width: 1.5),
                      ),
                      child: Text(
                        '#$siblingOrder',
                        style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w900),
                      ),
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 6),
            Text(
              member.name.toUpperCase(),
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 9, fontWeight: FontWeight.w700, height: 1.1),
            ),
          ],
        ),
      ),
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
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
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
    if (!NgmyFamilyTreePayments.hasActivePhotoAccess(widget.config, widget.userEmail)) {
      final fee = NgmyFamilyTreePayments.photoMonthlyFeeFromConfig(widget.config);
      final paid = await NgmyFamilyTreePayments.confirmAndCharge(
        context: context,
        user: widget.user,
        config: widget.config,
        amount: fee,
        title: 'Family Tree Photos',
        message:
            'Upload photos on family members for \$${fee.toStringAsFixed(2)} per month (30 days from payment).',
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
              Text(
                widget.title,
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: p.primaryText, letterSpacing: 0.3),
              ),
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
                  children: [
                    _MemberEditorDropdown<String?>(
                      palette: p,
                      value: _parentId,
                      icon: Icons.account_tree_outlined,
                      hint: 'Parent',
                      items: [
                        const DropdownMenuItem(value: null, child: Text('None — root ancestor')),
                        ...widget.parents.map((m) => DropdownMenuItem(value: m.id, child: Text(m.name))),
                      ],
                      onChanged: (v) => setState(() => _parentId = v),
                    ),
                    const SizedBox(height: 10),
                    _MemberEditorDropdown<String?>(
                      palette: p,
                      value: _spouseId,
                      icon: Icons.favorite_border_rounded,
                      hint: 'Spouse',
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
                _infoTile('Parent', _memberName(member.parentId), icon: Icons.account_tree_outlined),
                _infoTile('Spouse', _memberName(member.spouseId), icon: Icons.favorite_border_rounded),
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
