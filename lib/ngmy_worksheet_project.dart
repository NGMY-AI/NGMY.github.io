import 'package:flutter/material.dart';

import 'ngmy_nav.dart';
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
  }

  Future<void> _persist() async {
    setState(() => _saving = true);
    await upsertWorksheetProject(widget.userEmail, _project);
    if (mounted) setState(() => _saving = false);
  }

  Future<void> _pickThumbnail() async {
    final img = await ngmyPickImageBase64(maxWidth: 1920);
    if (img == null) return;
    setState(() => _project = _project.copyWith(thumbnailPath: img));
    await _persist();
  }

  Future<void> _addBudgetItem() async {
    final result = await showAddBudgetItemDialog(context);
    if (result == null || !mounted) return;

    final item = BudgetItem(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      name: result.name,
      price: result.price,
    );
    setState(() {
      _project = _project.copyWith(items: [..._project.items, item]);
    });
    await _persist();
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
                    AspectRatio(
                      aspectRatio: 16 / 9,
                      child: Stack(
                        fit: StackFit.expand,
                        children: [
                          ngmyImageOrPlaceholder(
                            imageRef: _project.thumbnailPath,
                            width: double.infinity,
                            height: double.infinity,
                            icon: Icons.photo_camera_outlined,
                            borderRadius: BorderRadius.circular(16),
                          ),
                          Positioned(
                            right: 10,
                            bottom: 10,
                            child: FilledButton.icon(
                              onPressed: _pickThumbnail,
                              style: FilledButton.styleFrom(
                                backgroundColor: WorksheetPalette.green,
                                foregroundColor: Colors.white,
                              ),
                              icon: const Icon(Icons.photo_library_outlined, size: 18),
                              label: const Text('Thumbnail'),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      _project.name,
                      style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: p.primaryText),
                    ),
                    const SizedBox(height: 8),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: WorksheetPalette.green,
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Project Total',
                                  style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12),
                                ),
                                const SizedBox(height: 4),
                                Text(
                                  ngmyFormatMoney(_project.totalSpending),
                                  style: const TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.w900),
                                ),
                              ],
                            ),
                          ),
                          Material(
                            color: Colors.white.withValues(alpha: 0.18),
                            borderRadius: BorderRadius.circular(12),
                            child: InkWell(
                              onTap: () => showNgmyWorksheetProjectShareSheet(
                                context,
                                ownerEmail: widget.userEmail,
                                project: _project,
                              ),
                              borderRadius: BorderRadius.circular(12),
                              child: const Padding(
                                padding: EdgeInsets.all(10),
                                child: Icon(Icons.ios_share_rounded, color: Colors.white, size: 22),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
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
                          style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
                          icon: const Icon(Icons.add, size: 18),
                          label: const Text('Add Item'),
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
                              'Add item names and prices to track spending.',
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

  Widget _budgetRow(BudgetItem item, WorksheetPalette p) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: BoxDecoration(
        color: p.cardBg,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: p.cardBorder),
        boxShadow: [BoxShadow(color: p.shadow, blurRadius: 8, offset: const Offset(0, 2))],
      ),
      child: Row(
        children: [
          Expanded(
            child: Text(item.name, style: TextStyle(fontWeight: FontWeight.w700, color: p.primaryText)),
          ),
          Text(
            ngmyFormatMoney(item.price),
            style: const TextStyle(fontWeight: FontWeight.w800, color: WorksheetPalette.greenDark, fontSize: 15),
          ),
          IconButton(
            onPressed: () => _deleteItem(item),
            icon: Icon(Icons.delete_outline, color: p.secondaryText, size: 20),
          ),
        ],
      ),
    );
  }
}
