import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_nav.dart';
import 'ngmy_worksheet_builtin_thumbnails.dart';
import 'ngmy_worksheet_dialogs.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheet_project_share.dart';
import 'ngmy_worksheets_storage.dart';

class NgmyWorksheetProjectScreen extends StatefulWidget {
  final String userEmail;
  final WorksheetProject project;

  const NgmyWorksheetProjectScreen({
    super.key,
    required this.userEmail,
    required this.project,
  });

  @override
  State<NgmyWorksheetProjectScreen> createState() =>
      _NgmyWorksheetProjectScreenState();
}

class _NgmyWorksheetProjectScreenState extends State<NgmyWorksheetProjectScreen> {
  late WorksheetProject _project;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    _project = widget.project;
    _reloadFromStorage();
  }

  @override
  void dispose() {
    unawaited(upsertWorksheetProject(widget.userEmail, _project));
    super.dispose();
  }

  Future<void> _reloadFromStorage() async {
    final saved = await loadWorksheetProjectById(widget.userEmail, widget.project.id);
    if (saved != null && mounted) {
      setState(() => _project = saved);
    }
  }

  Future<void> _persist() async {
    setState(() => _saving = true);
    await upsertWorksheetProject(widget.userEmail, _project);
    if (mounted) setState(() => _saving = false);
  }

  Future<void> _pickThumbnail() async {
    final p = WorksheetPalette.of(context);
    final picked = await showDialog<String?>(
      context: context,
      builder: (ctx) {
        var thumb = _project.thumbnailPath;
        return StatefulBuilder(
          builder: (ctx, setLocal) {
            return Dialog(
              backgroundColor: p.cardBg,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
              child: Padding(
                padding: const EdgeInsets.fromLTRB(18, 18, 18, 14),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text('Project thumbnail', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: p.primaryText)),
                    const SizedBox(height: 6),
                    Text('Tap circle for themes · tap frame for gallery', style: TextStyle(fontSize: 11, color: p.secondaryText)),
                    const SizedBox(height: 12),
                    NgmyWorksheetThumbnailPickerFrame(
                      thumbnailPath: thumb,
                      onThumbnailChanged: (ref) => setLocal(() => thumb = ref),
                    ),
                    const SizedBox(height: 14),
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () => Navigator.pop(ctx),
                            child: const Text('Cancel'),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: FilledButton(
                            onPressed: () => Navigator.pop(ctx, thumb),
                            style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
                            child: const Text('Save', style: TextStyle(fontWeight: FontWeight.w800)),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            );
          },
        );
      },
    );
    if (picked == null || !mounted) return;
    setState(() => _project = _project.copyWith(thumbnailPath: picked));
    await _persist();
  }

  Future<void> _addBudgetItem() async {
    final result = await showAddBudgetItemDialog(context);
    if (result == null || !mounted) return;

    final item = BudgetItem(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      name: result.name,
      quantity: result.quantity,
      unitPrice: result.unitPrice,
      unitLabel: result.unitLabel,
    );
    setState(() {
      _project = _project.copyWith(items: [..._project.items, item]);
    });
    await _persist();
  }

  void _openShare() {
    showNgmyWorksheetProjectShareSheet(
      context,
      ownerEmail: widget.userEmail,
      project: _project,
      onImported: (imported) async {
        await upsertWorksheetProject(widget.userEmail, imported);
        if (!context.mounted) return;
        NgmyNavigator.pop(context, imported);
      },
    );
  }

  Widget _thumbnailHero(WorksheetPalette p) {
    return AspectRatio(
      aspectRatio: 16 / 9,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          gradient: const LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Color(0xFF34D399),
              Color(0xFF10B981),
              Color(0xFF0D9488),
              Color(0xFF059669),
            ],
          ),
          boxShadow: [
            BoxShadow(
              color: WorksheetPalette.green.withValues(alpha: p.isDark ? 0.5 : 0.38),
              blurRadius: 22,
              offset: const Offset(0, 10),
            ),
            BoxShadow(
              color: WorksheetPalette.teal.withValues(alpha: 0.2),
              blurRadius: 32,
              spreadRadius: -4,
            ),
          ],
        ),
        padding: const EdgeInsets.all(5),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(17),
            border: Border.all(color: Colors.white.withValues(alpha: 0.45), width: 1.2),
            boxShadow: [
              BoxShadow(
                color: Colors.white.withValues(alpha: 0.18),
                blurRadius: 10,
                spreadRadius: -2,
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: Stack(
              fit: StackFit.expand,
              children: [
                ngmyWorksheetThumbnail(
                  imageRef: _project.thumbnailPath,
                  width: double.infinity,
                  height: double.infinity,
                  icon: Icons.photo_camera_outlined,
                  borderRadius: BorderRadius.circular(16),
                ),
                // Inner vignette for depth
                DecoratedBox(
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: [
                        Colors.white.withValues(alpha: 0.06),
                        Colors.transparent,
                        Colors.black.withValues(alpha: 0.22),
                      ],
                    ),
                  ),
                ),
                // Corner accents
                Positioned(top: 8, left: 8, child: _frameCorner(accent: true)),
                Positioned(top: 8, right: 8, child: Transform.flip(flipX: true, child: _frameCorner(accent: true))),
                Positioned(bottom: 8, left: 8, child: Transform.flip(flipY: true, child: _frameCorner(accent: false))),
                Positioned(bottom: 8, right: 8, child: Transform.flip(flipX: true, flipY: true, child: _frameCorner(accent: false))),
                Positioned(
                  right: 10,
                  bottom: 10,
                  child: FilledButton.icon(
                    onPressed: _pickThumbnail,
                    style: FilledButton.styleFrom(
                      backgroundColor: Colors.black.withValues(alpha: 0.45),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    icon: const Icon(Icons.photo_library_outlined, size: 17),
                    label: const Text('Thumbnail', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _frameCorner({required bool accent}) {
    return Container(
      width: 22,
      height: 22,
      decoration: BoxDecoration(
        border: Border(
          top: BorderSide(color: Colors.white.withValues(alpha: accent ? 0.85 : 0.55), width: 2.5),
          left: BorderSide(color: Colors.white.withValues(alpha: accent ? 0.85 : 0.55), width: 2.5),
        ),
        borderRadius: const BorderRadius.only(topLeft: Radius.circular(4)),
      ),
    );
  }

  Widget _worksheetShareButton() {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: _openShare,
        borderRadius: BorderRadius.circular(14),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            color: Colors.white.withValues(alpha: 0.12),
            border: Border.all(color: const Color(0xFF7DD3FC).withValues(alpha: 0.75), width: 1.6),
            boxShadow: [
              BoxShadow(
                color: const Color(0xFF38BDF8).withValues(alpha: 0.28),
                blurRadius: 14,
                offset: const Offset(0, 4),
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: const Color(0xFF38BDF8).withValues(alpha: 0.22),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.5)),
                  ),
                  child: const Icon(Icons.sync_alt_rounded, color: Colors.white, size: 22),
                ),
                const SizedBox(height: 5),
                const Text(
                  'Share',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w800,
                    fontSize: 11,
                    letterSpacing: 0.25,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Future<void> _deleteItem(BudgetItem item) async {
    setState(() {
      _project = _project.copyWith(
        items: _project.items.where((e) => e.id != item.id).toList(),
      );
    });
    await _persist();
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return Scaffold(
      backgroundColor: p.pageBg,
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
              child: InkWell(
                onTap: () => NgmyNavigator.pop(context, _project),
                borderRadius: BorderRadius.circular(8),
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.arrow_back_ios_new, size: 16, color: p.secondaryText),
                      const SizedBox(width: 6),
                      Text('Back to Projects', style: TextStyle(color: p.secondaryText, fontWeight: FontWeight.w600)),
                    ],
                  ),
                ),
              ),
            ),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _thumbnailHero(p),
                    const SizedBox(height: 16),
                    Text(
                      _project.name,
                      style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: p.primaryText),
                    ),
                    const SizedBox(height: 8),
                    _projectTotalCard(p),
                    const SizedBox(height: 18),
                    Row(
                      children: [
                        Text(
                          'Budget Items (${_project.items.length})',
                          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: p.primaryText),
                        ),
                        const Spacer(),
                        FilledButton.icon(
                          onPressed: _addBudgetItem,
                          style: FilledButton.styleFrom(
                            backgroundColor: WorksheetPalette.green,
                            foregroundColor: Colors.white,
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                          ),
                          icon: const Icon(Icons.add_rounded, size: 18),
                          label: const Text('Add Item', style: TextStyle(fontWeight: FontWeight.w800)),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    if (_project.items.isEmpty)
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(28),
                        decoration: BoxDecoration(
                          color: p.cardBg,
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: p.cardBorder),
                        ),
                        child: Column(
                          children: [
                            Icon(Icons.receipt_long_outlined, size: 48, color: p.secondaryText),
                            const SizedBox(height: 10),
                            Text('No budget items yet', style: TextStyle(fontWeight: FontWeight.w700, color: p.primaryText)),
                            const SizedBox(height: 6),
                            Text(
                              'Add item names, units, and prices to track spending.',
                              textAlign: TextAlign.center,
                              style: TextStyle(color: p.secondaryText),
                            ),
                          ],
                        ),
                      )
                    else
                      ..._project.items.map((item) => _budgetRow(item, p)),
                    if (_saving)
                      Padding(
                        padding: const EdgeInsets.only(top: 12),
                        child: Center(child: CircularProgressIndicator(color: p.secondaryText)),
                      ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _projectTotalCard(WorksheetPalette p) {
    final itemCount = _project.items.length;
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: p.isDark
              ? [const Color(0xFF0F2922), const Color(0xFF134E4A), const Color(0xFF065F46)]
              : [const Color(0xFF059669), const Color(0xFF10B981), const Color(0xFF14B8A6)],
        ),
        boxShadow: [
          BoxShadow(
            color: WorksheetPalette.green.withValues(alpha: p.isDark ? 0.45 : 0.35),
            blurRadius: 24,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(22),
        child: Stack(
          children: [
            Positioned(
              right: -24,
              top: -24,
              child: Icon(
                Icons.account_balance_wallet_rounded,
                size: 120,
                color: Colors.white.withValues(alpha: 0.08),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 18, 16, 18),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                              decoration: BoxDecoration(
                                color: Colors.white.withValues(alpha: 0.16),
                                borderRadius: BorderRadius.circular(20),
                                border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
                              ),
                              child: Text(
                                '$itemCount ${itemCount == 1 ? 'item' : 'items'}',
                                style: TextStyle(
                                  color: Colors.white.withValues(alpha: 0.92),
                                  fontSize: 11,
                                  fontWeight: FontWeight.w800,
                                  letterSpacing: 0.3,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 14),
                        Text(
                          'PROJECT TOTAL',
                          style: TextStyle(
                            color: Colors.white.withValues(alpha: 0.75),
                            fontSize: 11,
                            fontWeight: FontWeight.w800,
                            letterSpacing: 1.4,
                          ),
                        ),
                        const SizedBox(height: 6),
                        ngmyWorksheetMoneyText(_project.totalSpending, large: true),
                        if (itemCount > 0) ...[
                          const SizedBox(height: 8),
                          Text(
                            'Sum of all budget line items',
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.65),
                              fontSize: 11,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                  const SizedBox(width: 10),
                  _worksheetShareButton(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _budgetRow(BudgetItem item, WorksheetPalette p) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: p.cardBg,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: p.shadow,
            blurRadius: 12,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(
                width: 5,
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    colors: [WorksheetPalette.green, WorksheetPalette.teal],
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  ),
                ),
              ),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(12, 12, 8, 12),
                  child: Row(
                    children: [
                      Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                          color: WorksheetPalette.green.withValues(alpha: p.isDark ? 0.22 : 0.12),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: const Icon(Icons.receipt_long_rounded, color: WorksheetPalette.greenDark, size: 20),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              item.name,
                              maxLines: 2,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(
                                fontWeight: FontWeight.w800,
                                fontSize: 15,
                                color: p.primaryText,
                                height: 1.25,
                              ),
                            ),
                            if (item.quantity != 1 || item.unitLabel != 'each') ...[
                              const SizedBox(height: 4),
                              Text(
                                '${item.quantityLabel} ${ngmyFormatMoney(item.unitPrice)}',
                                style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w600,
                                  color: p.secondaryText,
                                ),
                              ),
                            ],
                          ],
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            colors: [
                              WorksheetPalette.green.withValues(alpha: 0.14),
                              WorksheetPalette.teal.withValues(alpha: 0.1),
                            ],
                          ),
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: ngmyWorksheetMoneyText(
                          item.lineTotal,
                          color: WorksheetPalette.greenDark,
                          weight: FontWeight.w900,
                        ),
                      ),
                      IconButton(
                        onPressed: () => _deleteItem(item),
                        visualDensity: VisualDensity.compact,
                        icon: Icon(Icons.close_rounded, color: p.secondaryText.withValues(alpha: 0.75), size: 20),
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
  }
}
