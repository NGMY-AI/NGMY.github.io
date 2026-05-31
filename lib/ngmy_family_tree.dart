import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_nav.dart';
import 'ngmy_worksheet_dialogs.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheets_storage.dart';

class NgmyFamilyTreeTab extends StatefulWidget {
  final String userEmail;
  final VoidCallback onChanged;

  const NgmyFamilyTreeTab({
    super.key,
    required this.userEmail,
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

    final tree = FamilyTree(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      name: name.toUpperCase(),
      code: generateFamilyTreeCode(name),
      createdAt: DateTime.now(),
    );
    await upsertFamilyTree(widget.userEmail, tree);
    await _reload();
    widget.onChanged();
    if (!mounted) return;
    _openTree(tree);
  }

  Future<void> _openTree(FamilyTree tree) async {
    final updated = await NgmyNavigator.push<FamilyTree>(
      context,
      NgmyFamilyTreeDetailScreen(userEmail: widget.userEmail, tree: tree),
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
          Icon(Icons.account_tree_outlined, size: 56, color: p.secondaryText.withValues(alpha: 0.5)),
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
                        '${tree.visibleMemberCount} members · Code: ${tree.code}',
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
  final FamilyTree tree;

  const NgmyFamilyTreeDetailScreen({
    super.key,
    required this.userEmail,
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

  @override
  void initState() {
    super.initState();
    _tree = widget.tree;
  }

  void _pushUndo() {
    _undoStack.add(_tree);
    if (_undoStack.length > 25) _undoStack.removeAt(0);
  }

  Future<void> _persist() async {
    await upsertFamilyTree(widget.userEmail, _tree);
  }

  Future<void> _renameTree() async {
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

  Future<void> _addMember({String? parentId}) async {
    final result = await showDialog<FamilyMember>(
      context: context,
      builder: (ctx) => _MemberEditorDialog(
        title: 'Add Member',
        parents: visibleMembers(_tree),
        initialParentId: parentId,
      ),
    );
    if (result == null) return;
    _pushUndo();
    setState(() {
      _tree = _tree.copyWith(members: [..._tree.members, result]);
    });
    await _persist();
  }

  Future<void> _editMember(FamilyMember member) async {
    final result = await showDialog<FamilyMember>(
      context: context,
      builder: (ctx) => _MemberEditorDialog(
        title: 'Member Profile',
        member: member,
        parents: visibleMembers(_tree).where((m) => m.id != member.id).toList(),
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
    if (_undoStack.isEmpty) return;
    setState(() => _tree = _undoStack.removeLast());
    _persist();
  }

  void _openFamilyBook() {
    final p = WorksheetPalette.of(context);
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: p.cardBg,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (ctx) => DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.75,
        minChildSize: 0.45,
        maxChildSize: 0.95,
        builder: (_, controller) => Column(
          children: [
            const SizedBox(height: 10),
            Container(width: 42, height: 4, decoration: BoxDecoration(color: Colors.grey.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(8))),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Row(
                children: [
                  const Icon(Icons.menu_book_outlined, color: Colors.orange),
                  const SizedBox(width: 8),
                  Text('Family Book', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText)),
                ],
              ),
            ),
            Expanded(
              child: ListView.builder(
                controller: controller,
                itemCount: visibleMembers(_tree).length,
                itemBuilder: (_, i) {
                  final m = visibleMembers(_tree)[i];
                  return ListTile(
                    leading: CircleAvatar(
                      backgroundColor: _genderColor(m.gender).withValues(alpha: 0.2),
                      backgroundImage: ngmyImageFromRef(m.photoPath),
                      child: m.photoPath == null ? Icon(Icons.person, color: _genderColor(m.gender)) : null,
                    ),
                    title: Text(m.name, style: TextStyle(fontWeight: FontWeight.w700, color: p.primaryText)),
                    subtitle: Text(
                      [m.birthDate, m.occupation, m.notes].where((e) => e.trim().isNotEmpty).join(' · '),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                    onTap: () {
                      Navigator.pop(ctx);
                      _editMember(m);
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

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
                          onPressed: _undoStack.isEmpty ? null : _undo,
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
                        const SizedBox(width: 8),
                        FilledButton.icon(
                          onPressed: () => _addMember(parentId: rootMember(_tree)?.id),
                          style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
                          icon: const Icon(Icons.add, size: 16),
                          label: const Text('Add Member'),
                        ),
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
                                  onMemberTap: _editMember,
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
          Container(
            width: 52,
            height: 52,
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.2),
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.park_outlined, color: Colors.white, size: 28),
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
                      onPressed: _renameTree,
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
                    _metaChip(Icons.group_outlined, 'Collaborators (${_tree.collaboratorEmails.length})'),
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
  final ValueChanged<FamilyMember> onMemberTap;
  final bool isDark;

  const FamilyTreeCanvas({
    super.key,
    required this.tree,
    required this.showHidden,
    required this.onMemberTap,
    required this.isDark,
  });

  @override
  Widget build(BuildContext context) {
    final layout = _FamilyTreeLayout.compute(tree, showHidden: showHidden);
    if (layout.nodes.isEmpty) return const SizedBox.shrink();

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
                  childCount: descendantCount(tree, member.id),
                  onTap: () => onMemberTap(member),
                ),
              );
            }),
          ],
        ),
      ),
    );
  }
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
  final double width;
  final double height;

  const _FamilyTreeLayout({
    required this.nodes,
    required this.edges,
    required this.width,
    required this.height,
  });

  static Offset _nodeBottom(Offset topCenter) => Offset(topCenter.dx, topCenter.dy + nodeHeight);

  static Offset _avatarCenter(Offset topCenter) =>
      Offset(topCenter.dx, topCenter.dy + avatarSize / 2);

  static Offset _nodeTop(Offset topCenter) => topCenter;

  static _FamilyTreeLayout compute(FamilyTree tree, {required bool showHidden}) {
    final visible = showHidden ? tree.members : visibleMembers(tree);
    if (visible.isEmpty) {
      return const _FamilyTreeLayout(nodes: {}, edges: [], width: 0, height: 0);
    }
    final visibleIds = visible.map((m) => m.id).toSet();
    final root = visible.firstWhere(
      (m) => m.parentId == null || m.parentId!.isEmpty || !visibleIds.contains(m.parentId),
      orElse: () => visible.first,
    );

    final nodes = <String, _LayoutNode>{};
    final edges = <_TreeEdge>[];
    final subtreeWidths = <String, double>{};

    double measure(String id) {
      if (subtreeWidths.containsKey(id)) return subtreeWidths[id]!;
      final member = visible.firstWhere((m) => m.id == id);
      final kids = visible.where((m) => m.parentId == id).toList()
        ..sort((a, b) => a.birthOrder.compareTo(b.birthOrder));

      var width = nodeWidth;
      if (member.spouseId != null && visibleIds.contains(member.spouseId)) {
        width = nodeWidth * 2 + horizontalGap;
      }

      if (kids.isEmpty) {
        subtreeWidths[id] = width;
        return width;
      }

      var total = 0.0;
      for (var i = 0; i < kids.length; i++) {
        total += measure(kids[i].id);
        if (i < kids.length - 1) total += horizontalGap;
      }
      subtreeWidths[id] = math.max(total, width);
      return subtreeWidths[id]!;
    }

    void place(String id, double left, int depth) {
      if (nodes.containsKey(id)) return;

      final member = visible.firstWhere((m) => m.id == id);
      final kids = visible.where((m) => m.parentId == id).toList()
        ..sort((a, b) => a.birthOrder.compareTo(b.birthOrder));

      final subtreeW = subtreeWidths[id] ?? nodeWidth;
      final rowTop = titleBlockHeight + depth * verticalStep;

      FamilyMember? spouse;
      if (member.spouseId != null && visibleIds.contains(member.spouseId)) {
        spouse = visible.firstWhere((m) => m.id == member.spouseId);
      }

      if (kids.isEmpty) {
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
      for (final child in kids) {
        final w = subtreeWidths[child.id] ?? nodeWidth;
        place(child.id, cursor, depth + 1);
        cursor += w + horizontalGap;
      }

      final childTops = kids.map((c) => nodes[c.id]!.position).toList();
      final parentCenterX = (childTops.first.dx + childTops.last.dx) / 2;

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
        childTops: childTops.map(_nodeTop).toList(),
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

    final shiftX = canvasPad - minX;
    if (shiftX != 0) {
      for (final id in nodes.keys.toList()) {
        final n = nodes[id]!;
        nodes[id] = _LayoutNode(
          member: n.member,
          position: Offset(n.position.dx + shiftX, n.position.dy),
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
  final int childCount;
  final VoidCallback onTap;

  const _MemberNode({
    required this.member,
    required this.childCount,
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
                if (childCount > 0)
                  Positioned(
                    right: -2,
                    bottom: -2,
                    child: Container(
                      width: 20,
                      height: 20,
                      alignment: Alignment.center,
                      decoration: const BoxDecoration(
                        color: WorksheetPalette.green,
                        shape: BoxShape.circle,
                      ),
                      child: Text(
                        '$childCount',
                        style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800),
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

class _MemberEditorDialog extends StatefulWidget {
  final String title;
  final FamilyMember? member;
  final List<FamilyMember> parents;
  final String? initialParentId;

  const _MemberEditorDialog({
    required this.title,
    this.member,
    this.parents = const [],
    this.initialParentId,
  });

  @override
  State<_MemberEditorDialog> createState() => _MemberEditorDialogState();
}

class _MemberEditorDialogState extends State<_MemberEditorDialog> {
  late final TextEditingController _nameC;
  late final TextEditingController _notesC;
  late final TextEditingController _birthC;
  late final TextEditingController _placeC;
  late final TextEditingController _jobC;
  late FamilyGender _gender;
  String? _parentId;
  String? _spouseId;
  String? _photoPath;
  int _birthOrder = 1;
  bool _hidden = false;

  @override
  void initState() {
    super.initState();
    final m = widget.member;
    _nameC = TextEditingController(text: m?.name ?? '');
    _notesC = TextEditingController(text: m?.notes ?? '');
    _birthC = TextEditingController(text: m?.birthDate ?? '');
    _placeC = TextEditingController(text: m?.birthPlace ?? '');
    _jobC = TextEditingController(text: m?.occupation ?? '');
    _gender = m?.gender ?? FamilyGender.unknown;
    _parentId = m?.parentId ?? widget.initialParentId;
    _spouseId = m?.spouseId;
    _photoPath = m?.photoPath;
    _birthOrder = m?.birthOrder ?? 1;
    _hidden = m?.hidden ?? false;
  }

  @override
  void dispose() {
    _nameC.dispose();
    _notesC.dispose();
    _birthC.dispose();
    _placeC.dispose();
    _jobC.dispose();
    super.dispose();
  }

  Future<void> _pickPhoto() async {
    final img = await ngmyPickImageBase64(maxWidth: 800);
    if (img != null) setState(() => _photoPath = img);
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return AlertDialog(
      backgroundColor: p.cardBg,
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
      content: SizedBox(
        width: 420,
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(widget.title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText)),
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
              const SizedBox(height: 14),
              TextField(
                controller: _nameC,
                textCapitalization: TextCapitalization.characters,
                style: TextStyle(color: p.primaryText),
                decoration: const InputDecoration(labelText: 'Full name', border: OutlineInputBorder()),
              ),
              const SizedBox(height: 10),
              DropdownButtonFormField<FamilyGender>(
                initialValue: _gender,
                decoration: const InputDecoration(labelText: 'Gender', border: OutlineInputBorder()),
                items: const [
                  DropdownMenuItem(value: FamilyGender.male, child: Text('Male')),
                  DropdownMenuItem(value: FamilyGender.female, child: Text('Female')),
                  DropdownMenuItem(value: FamilyGender.unknown, child: Text('Unknown')),
                ],
                onChanged: (v) => setState(() => _gender = v ?? FamilyGender.unknown),
              ),
              const SizedBox(height: 10),
              DropdownButtonFormField<String?>(
                initialValue: _parentId,
                decoration: const InputDecoration(labelText: 'Parent (optional)', border: OutlineInputBorder()),
                items: [
                  const DropdownMenuItem(value: null, child: Text('None (root ancestor)')),
                  ...widget.parents.map((m) => DropdownMenuItem(value: m.id, child: Text(m.name))),
                ],
                onChanged: (v) => setState(() => _parentId = v),
              ),
              const SizedBox(height: 10),
              DropdownButtonFormField<String?>(
                initialValue: _spouseId,
                decoration: const InputDecoration(labelText: 'Spouse (optional)', border: OutlineInputBorder()),
                items: [
                  const DropdownMenuItem(value: null, child: Text('None')),
                  ...widget.parents
                      .where((m) => m.id != widget.member?.id)
                      .map((m) => DropdownMenuItem(value: m.id, child: Text(m.name))),
                ],
                onChanged: (v) => setState(() => _spouseId = v),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _birthC,
                style: TextStyle(color: p.primaryText),
                decoration: const InputDecoration(labelText: 'Birth date', border: OutlineInputBorder()),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _placeC,
                style: TextStyle(color: p.primaryText),
                decoration: const InputDecoration(labelText: 'Birth place', border: OutlineInputBorder()),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _jobC,
                style: TextStyle(color: p.primaryText),
                decoration: const InputDecoration(labelText: 'Occupation', border: OutlineInputBorder()),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _notesC,
                minLines: 3,
                maxLines: 5,
                style: TextStyle(color: p.primaryText),
                decoration: const InputDecoration(labelText: 'Notes', border: OutlineInputBorder()),
              ),
              const SizedBox(height: 10),
              Row(
                children: [
                  Expanded(
                    child: Text('Birth order: $_birthOrder'),
                  ),
                  IconButton(
                    onPressed: () => setState(() => _birthOrder = math.max(1, _birthOrder - 1)),
                    icon: const Icon(Icons.remove_circle_outline),
                  ),
                  IconButton(
                    onPressed: () => setState(() => _birthOrder += 1),
                    icon: const Icon(Icons.add_circle_outline),
                  ),
                ],
              ),
              SwitchListTile(
                contentPadding: EdgeInsets.zero,
                title: Text('Hidden member', style: TextStyle(color: p.primaryText)),
                value: _hidden,
                onChanged: (v) => setState(() => _hidden = v),
              ),
            ],
          ),
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
        FilledButton(
          onPressed: () {
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
                occupation: _jobC.text.trim(),
                birthOrder: _birthOrder,
                hidden: _hidden,
              ),
            );
          },
          style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
          child: const Text('Save'),
        ),
      ],
    );
  }
}
