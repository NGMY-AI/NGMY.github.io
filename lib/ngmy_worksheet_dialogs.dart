import 'package:flutter/material.dart';

import 'ngmy_worksheet_builtin_thumbnails.dart';
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
  final double quantity;
  final double unitPrice;
  final String unitLabel;

  const AddBudgetItemDialogResult({
    required this.name,
    required this.quantity,
    required this.unitPrice,
    required this.unitLabel,
  });

  double get lineTotal => quantity * unitPrice;
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
              const SizedBox(height: 4),
              Text('Full animated preview — use Themes or Your photos below', style: TextStyle(fontSize: 11, color: p.secondaryText, fontWeight: FontWeight.w500)),
              const SizedBox(height: 8),
              NgmyWorksheetThumbnailPickerFrame(
                thumbnailPath: _thumbnailPath,
                onThumbnailChanged: (ref) {
                  if (mounted) setState(() => _thumbnailPath = ref);
                },
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

const _kBudgetUnitPresets = [
  'each',
  'pcs',
  'boxes',
  'bags',
  'hours',
  'days',
  'sq ft',
  'gallons',
  'lbs',
  'ft',
  'other',
];

class _AddBudgetItemDialogState extends State<_AddBudgetItemDialog> {
  late final TextEditingController _nameC;
  late final TextEditingController _qtyC;
  late final TextEditingController _priceC;
  late final TextEditingController _customUnitC;
  String _unit = 'each';

  @override
  void initState() {
    super.initState();
    _nameC = TextEditingController();
    _qtyC = TextEditingController(text: '1');
    _priceC = TextEditingController();
    _customUnitC = TextEditingController();
  }

  @override
  void dispose() {
    _nameC.dispose();
    _qtyC.dispose();
    _priceC.dispose();
    _customUnitC.dispose();
    super.dispose();
  }

  double get _quantity {
    final v = double.tryParse(_qtyC.text.trim());
    if (v == null || v <= 0) return 1;
    return v;
  }

  double get _unitPrice => double.tryParse(_priceC.text.trim()) ?? 0;

  double get _lineTotal => _quantity * _unitPrice;

  String get _resolvedUnit {
    if (_unit == 'other') {
      final c = _customUnitC.text.trim();
      return c.isEmpty ? 'units' : c;
    }
    return _unit;
  }

  void _bumpQty(double delta) {
    final next = (_quantity + delta).clamp(0.25, 999999);
    final whole = next == next.roundToDouble();
    _qtyC.text = whole ? next.toInt().toString() : next.toStringAsFixed(2).replaceAll(RegExp(r'\.?0+$'), '');
    setState(() {});
  }

  InputDecoration _fieldDecoration(WorksheetPalette p, String label, {String? hint, IconData? icon}) {
    return InputDecoration(
      labelText: label,
      hintText: hint,
      prefixIcon: icon != null ? Icon(icon, size: 20, color: WorksheetPalette.green) : null,
      filled: true,
      fillColor: p.mutedSurface,
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: p.cardBorder),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: const BorderSide(color: WorksheetPalette.green, width: 1.6),
      ),
      contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
    );
  }

  void _submit() {
    final name = _nameC.text.trim();
    if (_unitPrice <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter an amount greater than zero.')),
      );
      return;
    }
    Navigator.pop(
      context,
      AddBudgetItemDialogResult(
        name: name,
        quantity: _quantity,
        unitPrice: _unitPrice,
        unitLabel: _resolvedUnit,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return Dialog(
      backgroundColor: p.cardBg,
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 20),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 440),
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  Container(
                    width: 48,
                    height: 48,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [
                          WorksheetPalette.green.withValues(alpha: 0.22),
                          WorksheetPalette.teal.withValues(alpha: 0.14),
                        ],
                      ),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                    ),
                    child: const Icon(Icons.add_shopping_cart_rounded, color: WorksheetPalette.greenDark, size: 26),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Add Budget Item', style: TextStyle(fontSize: 19, fontWeight: FontWeight.w900, color: p.primaryText)),
                        const SizedBox(height: 2),
                        Text('Amount required · name optional', style: TextStyle(fontSize: 12, color: p.secondaryText, fontWeight: FontWeight.w500)),
                      ],
                    ),
                  ),
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Icon(Icons.close_rounded, color: p.secondaryText),
                  ),
                ],
              ),
              const SizedBox(height: 18),
              TextField(
                controller: _nameC,
                textCapitalization: TextCapitalization.sentences,
                style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w600),
                decoration: _fieldDecoration(p, 'Item name (optional)', hint: 'Lumber, paint, labor…', icon: Icons.label_outline_rounded),
              ),
              const SizedBox(height: 14),
              Text('Units', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: p.secondaryText, letterSpacing: 0.3)),
              const SizedBox(height: 8),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    decoration: BoxDecoration(
                      color: p.mutedSurface,
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: p.cardBorder),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        IconButton(
                          onPressed: () => _bumpQty(-1),
                          icon: Icon(Icons.remove_rounded, color: p.primaryText, size: 20),
                          visualDensity: VisualDensity.compact,
                        ),
                        SizedBox(
                          width: 52,
                          child: TextField(
                            controller: _qtyC,
                            keyboardType: const TextInputType.numberWithOptions(decimal: true),
                            textAlign: TextAlign.center,
                            style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: p.primaryText),
                            decoration: const InputDecoration(
                              border: InputBorder.none,
                              isDense: true,
                              contentPadding: EdgeInsets.symmetric(vertical: 10),
                            ),
                            onChanged: (_) => setState(() {}),
                          ),
                        ),
                        IconButton(
                          onPressed: () => _bumpQty(1),
                          icon: Icon(Icons.add_rounded, color: p.primaryText, size: 20),
                          visualDensity: VisualDensity.compact,
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: TextField(
                      controller: _priceC,
                      autofocus: true,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w700, fontSize: 16),
                      decoration: _fieldDecoration(p, 'Amount', hint: '0.00', icon: Icons.attach_money_rounded),
                      onChanged: (_) => setState(() {}),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),
              Wrap(
                spacing: 6,
                runSpacing: 6,
                children: _kBudgetUnitPresets.map((u) {
                  final selected = _unit == u;
                  return FilterChip(
                    selected: selected,
                    label: Text(u == 'other' ? 'Other' : u, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700)),
                    onSelected: (_) => setState(() => _unit = u),
                    selectedColor: WorksheetPalette.green.withValues(alpha: 0.2),
                    checkmarkColor: WorksheetPalette.greenDark,
                    side: BorderSide(color: selected ? WorksheetPalette.green : p.cardBorder),
                    padding: const EdgeInsets.symmetric(horizontal: 2),
                    visualDensity: VisualDensity.compact,
                  );
                }).toList(),
              ),
              if (_unit == 'other') ...[
                const SizedBox(height: 10),
                TextField(
                  controller: _customUnitC,
                  textCapitalization: TextCapitalization.words,
                  style: TextStyle(color: p.primaryText),
                  decoration: _fieldDecoration(p, 'Custom unit', hint: 'rolls, sheets, trips…'),
                  onChanged: (_) => setState(() {}),
                ),
              ],
              const SizedBox(height: 16),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [
                      WorksheetPalette.green.withValues(alpha: p.isDark ? 0.18 : 0.1),
                      WorksheetPalette.teal.withValues(alpha: p.isDark ? 0.12 : 0.06),
                    ],
                  ),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Line total',
                            style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: p.secondaryText, letterSpacing: 0.4),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            '${_quantity == _quantity.roundToDouble() ? _quantity.toInt() : _quantity} $_resolvedUnit × ${ngmyFormatMoney(_unitPrice)}',
                            style: TextStyle(fontSize: 12, color: p.secondaryText, fontWeight: FontWeight.w600),
                          ),
                        ],
                      ),
                    ),
                    ngmyWorksheetMoneyText(_lineTotal, color: WorksheetPalette.greenDark, large: false, weight: FontWeight.w900),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: () => Navigator.pop(context),
                      style: OutlinedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        side: BorderSide(color: p.cardBorder),
                      ),
                      child: Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700, color: p.primaryText)),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    flex: 2,
                    child: FilledButton.icon(
                      onPressed: _submit,
                      style: FilledButton.styleFrom(
                        backgroundColor: WorksheetPalette.green,
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        elevation: 0,
                      ),
                      icon: const Icon(Icons.check_rounded, size: 20),
                      label: const Text('Add to budget', style: TextStyle(fontWeight: FontWeight.w800)),
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
