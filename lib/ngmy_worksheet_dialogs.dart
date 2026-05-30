import 'package:flutter/material.dart';

import 'ngmy_worksheet_helpers.dart';

class CreateProjectDialogResult {
  final String name;
  final String? thumbnailPath;

  const CreateProjectDialogResult({required this.name, this.thumbnailPath});
}

class CreateFamilyTreeDialogResult {
  final String name;

  const CreateFamilyTreeDialogResult({required this.name});
}

class AddBudgetItemDialogResult {
  final String name;
  final double price;

  const AddBudgetItemDialogResult({required this.name, required this.price});
}

Future<AddBudgetItemDialogResult?> showAddBudgetItemDialog(BuildContext context) {
  return showDialog<AddBudgetItemDialogResult>(
    context: context,
    barrierDismissible: true,
    builder: (_) => const _AddBudgetItemDialog(),
  );
}

Future<String?> showWorksheetTextDialog(
  BuildContext context, {
  required String title,
  required String label,
  String initialValue = '',
  String confirmLabel = 'Save',
}) {
  return showDialog<String>(
    context: context,
    barrierDismissible: true,
    builder: (_) => _WorksheetTextDialog(
      title: title,
      label: label,
      initialValue: initialValue,
      confirmLabel: confirmLabel,
    ),
  );
}

Future<CreateProjectDialogResult?> showCreateProjectDialog(
  BuildContext context, {
  String? presetName,
}) {
  return showDialog<CreateProjectDialogResult>(
    context: context,
    barrierDismissible: true,
    builder: (_) => _CreateProjectDialog(presetName: presetName),
  );
}

Future<CreateFamilyTreeDialogResult?> showCreateFamilyTreeDialog(
  BuildContext context,
) {
  return showDialog<CreateFamilyTreeDialogResult>(
    context: context,
    barrierDismissible: true,
    builder: (_) => const _CreateFamilyTreeDialog(),
  );
}

class _CreateProjectDialog extends StatefulWidget {
  final String? presetName;

  const _CreateProjectDialog({this.presetName});

  @override
  State<_CreateProjectDialog> createState() => _CreateProjectDialogState();
}

class _CreateProjectDialogState extends State<_CreateProjectDialog> {
  late final TextEditingController _nameC;
  String? _thumbnailPath;

  @override
  void initState() {
    super.initState();
    _nameC = TextEditingController(text: widget.presetName ?? '');
  }

  @override
  void dispose() {
    _nameC.dispose();
    super.dispose();
  }

  void _submit() {
    final name = _nameC.text.trim();
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please enter a project name.')),
      );
      return;
    }
    Navigator.pop(
      context,
      CreateProjectDialogResult(name: name, thumbnailPath: _thumbnailPath),
    );
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return Dialog(
      backgroundColor: p.cardBg,
      insetPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 420),
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(
                      color: WorksheetPalette.green.withValues(alpha: 0.15),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(Icons.folder_open_rounded, color: WorksheetPalette.green),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Create Project', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText)),
                        const SizedBox(height: 2),
                        Text('Add a thumbnail and budget items after creating.', style: TextStyle(fontSize: 12, color: p.secondaryText)),
                      ],
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Icon(Icons.close_rounded, color: p.secondaryText),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              Text('Project thumbnail (16:9)', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: p.secondaryText)),
              const SizedBox(height: 8),
              AspectRatio(
                aspectRatio: 16 / 9,
                child: Material(
                  color: p.mutedSurface,
                  borderRadius: BorderRadius.circular(14),
                  clipBehavior: Clip.antiAlias,
                  child: InkWell(
                    onTap: () async {
                      final img = await ngmyPickImageBase64(maxWidth: 1920);
                      if (img != null && mounted) setState(() => _thumbnailPath = img);
                    },
                    child: Stack(
                      fit: StackFit.expand,
                      children: [
                        ngmyImageOrPlaceholder(
                          imageRef: _thumbnailPath,
                          width: double.infinity,
                          height: double.infinity,
                          icon: Icons.add_photo_alternate_outlined,
                          iconColor: p.secondaryText,
                          borderRadius: BorderRadius.circular(14),
                        ),
                        Positioned(
                          right: 8,
                          bottom: 8,
                          child: FilledButton.icon(
                            onPressed: () async {
                              final img = await ngmyPickImageBase64(maxWidth: 1920);
                              if (img != null && mounted) setState(() => _thumbnailPath = img);
                            },
                            style: FilledButton.styleFrom(
                              backgroundColor: WorksheetPalette.green,
                              foregroundColor: Colors.white,
                              visualDensity: VisualDensity.compact,
                            ),
                            icon: const Icon(Icons.photo_library_outlined, size: 16),
                            label: const Text('Choose photo'),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 16),
              TextField(
                controller: _nameC,
                autofocus: true,
                textCapitalization: TextCapitalization.sentences,
                style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w600),
                decoration: InputDecoration(
                  labelText: 'Project name',
                  hintText: 'Kitchen remodel, Wedding, etc.',
                  filled: true,
                  fillColor: p.mutedSurface,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: BorderSide(color: p.cardBorder),
                  ),
                ),
                onSubmitted: (_) => _submit(),
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
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      child: const Text('Cancel'),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      onPressed: _submit,
                      style: FilledButton.styleFrom(
                        backgroundColor: WorksheetPalette.green,
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      child: const Text('Create Project', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _CreateFamilyTreeDialog extends StatefulWidget {
  const _CreateFamilyTreeDialog();

  @override
  State<_CreateFamilyTreeDialog> createState() => _CreateFamilyTreeDialogState();
}

class _CreateFamilyTreeDialogState extends State<_CreateFamilyTreeDialog> {
  late final TextEditingController _nameC;

  @override
  void initState() {
    super.initState();
    _nameC = TextEditingController();
  }

  @override
  void dispose() {
    _nameC.dispose();
    super.dispose();
  }

  void _submit() {
    final name = _nameC.text.trim();
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please enter a family tree name.')),
      );
      return;
    }
    Navigator.pop(context, CreateFamilyTreeDialogResult(name: name));
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return Dialog(
      backgroundColor: p.cardBg,
      insetPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 420),
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(
                      color: WorksheetPalette.teal.withValues(alpha: 0.15),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(Icons.account_tree_outlined, color: WorksheetPalette.teal),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Create Family Tree', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText)),
                        const SizedBox(height: 2),
                        Text('Build generations with photos, notes, and profiles.', style: TextStyle(fontSize: 12, color: p.secondaryText)),
                      ],
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Icon(Icons.close_rounded, color: p.secondaryText),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: WorksheetPalette.green.withValues(alpha: p.isDark ? 0.12 : 0.08),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.25)),
                ),
                child: Row(
                  children: [
                    Icon(Icons.info_outline, size: 18, color: WorksheetPalette.green.withValues(alpha: 0.9)),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        'Example: Historia ya M\'Bembe',
                        style: TextStyle(fontSize: 12, color: p.primaryText, fontWeight: FontWeight.w600),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 14),
              TextField(
                controller: _nameC,
                autofocus: true,
                textCapitalization: TextCapitalization.words,
                style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w600),
                decoration: InputDecoration(
                  labelText: 'Family tree name',
                  hintText: 'Enter your family name or title',
                  filled: true,
                  fillColor: p.mutedSurface,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                  enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: BorderSide(color: p.cardBorder),
                  ),
                ),
                onSubmitted: (_) => _submit(),
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
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      child: const Text('Cancel'),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      onPressed: _submit,
                      style: FilledButton.styleFrom(
                        backgroundColor: WorksheetPalette.teal,
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                      child: const Text('Create Tree', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _AddBudgetItemDialog extends StatefulWidget {
  const _AddBudgetItemDialog();

  @override
  State<_AddBudgetItemDialog> createState() => _AddBudgetItemDialogState();
}

class _AddBudgetItemDialogState extends State<_AddBudgetItemDialog> {
  late final TextEditingController _nameC;
  late final TextEditingController _priceC;

  @override
  void initState() {
    super.initState();
    _nameC = TextEditingController();
    _priceC = TextEditingController();
  }

  @override
  void dispose() {
    _nameC.dispose();
    _priceC.dispose();
    super.dispose();
  }

  void _submit() {
    final name = _nameC.text.trim();
    if (name.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please enter an item name.')),
      );
      return;
    }
    final price = double.tryParse(_priceC.text.trim()) ?? 0;
    Navigator.pop(context, AddBudgetItemDialogResult(name: name, price: price));
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return Dialog(
      backgroundColor: p.cardBg,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Add Budget Item', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText)),
            const SizedBox(height: 14),
            TextField(
              controller: _nameC,
              autofocus: true,
              style: TextStyle(color: p.primaryText),
              decoration: InputDecoration(
                labelText: 'Item name',
                filled: true,
                fillColor: p.mutedSurface,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _priceC,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              style: TextStyle(color: p.primaryText),
              decoration: InputDecoration(
                labelText: 'Price (\$)',
                filled: true,
                fillColor: p.mutedSurface,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              ),
              onSubmitted: (_) => _submit(),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: () => Navigator.pop(context),
                    child: const Text('Cancel'),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: FilledButton(
                    onPressed: _submit,
                    style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
                    child: const Text('Add'),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _WorksheetTextDialog extends StatefulWidget {
  final String title;
  final String label;
  final String initialValue;
  final String confirmLabel;

  const _WorksheetTextDialog({
    required this.title,
    required this.label,
    required this.initialValue,
    required this.confirmLabel,
  });

  @override
  State<_WorksheetTextDialog> createState() => _WorksheetTextDialogState();
}

class _WorksheetTextDialogState extends State<_WorksheetTextDialog> {
  late final TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(text: widget.initialValue);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return Dialog(
      backgroundColor: p.cardBg,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(widget.title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText)),
            const SizedBox(height: 14),
            TextField(
              controller: _controller,
              autofocus: true,
              style: TextStyle(color: p.primaryText),
              decoration: InputDecoration(
                labelText: widget.label,
                filled: true,
                fillColor: p.mutedSurface,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              ),
              onSubmitted: (_) {
                final v = _controller.text.trim();
                if (v.isNotEmpty) Navigator.pop(context, v);
              },
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: () => Navigator.pop(context),
                    child: const Text('Cancel'),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: FilledButton(
                    onPressed: () {
                      final v = _controller.text.trim();
                      if (v.isEmpty) return;
                      Navigator.pop(context, v);
                    },
                    style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
                    child: Text(widget.confirmLabel),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
