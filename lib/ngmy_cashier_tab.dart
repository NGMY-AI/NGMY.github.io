import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_cashier_iou.dart';
import 'ngmy_cashier_receipt_preview.dart';
import 'ngmy_cashier_storage.dart';
import 'ngmy_delete_confirm_dialog.dart';
import 'ngmy_invoice_signature.dart';
import 'ngmy_worksheet_helpers.dart';

/// Worksheets → Cashier: local “who owes me” tracker.
class NgmyCashierTab extends StatefulWidget {
  const NgmyCashierTab({
    super.key,
    required this.userEmail,
    required this.palette,
  });

  final String userEmail;
  final WorksheetPalette palette;

  @override
  State<NgmyCashierTab> createState() => _NgmyCashierTabState();
}

class _NgmyCashierTabState extends State<NgmyCashierTab> {
  List<NgmyCashierIou> _items = [];
  bool _loading = true;

  WorksheetPalette get p => widget.palette;

  static const _accent = Color(0xFF0F766E);

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await loadNgmyCashierIous(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _items = list;
      _loading = false;
    });
  }

  String _fmtDate(DateTime d) => ngmyCashierFmtDate(d);

  InputDecoration _fieldDecoration(String label, {String? prefix}) {
    return InputDecoration(
      labelText: label,
      prefixText: prefix,
      isDense: true,
      filled: true,
      fillColor: p.isDark ? const Color(0xFF0F172A) : const Color(0xFFF8FAFC),
      labelStyle: TextStyle(color: p.secondaryText, fontSize: 13),
      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
        borderSide: BorderSide(color: p.secondaryText.withValues(alpha: 0.22)),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
        borderSide: BorderSide(color: p.secondaryText.withValues(alpha: 0.22)),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
        borderSide: const BorderSide(color: _accent, width: 1.4),
      ),
    );
  }

  Future<String?> _pickPhoto({required bool fromCamera}) async {
    try {
      final file = await ImagePicker().pickImage(
        source: fromCamera ? ImageSource.camera : ImageSource.gallery,
        maxWidth: 900,
        maxHeight: 900,
        imageQuality: 72,
      );
      if (file == null) return null;
      final bytes = await file.readAsBytes();
      return 'data:image/jpeg;base64,${base64Encode(bytes)}';
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Could not pick photo: $e')),
        );
      }
      return null;
    }
  }

  Widget _optionalAttachTile({
    required String title,
    required String subtitle,
    required IconData icon,
    required bool hasValue,
    required VoidCallback onAdd,
    required VoidCallback? onClear,
  }) {
    return Container(
      margin: const EdgeInsets.only(top: 8),
      padding: const EdgeInsets.fromLTRB(10, 8, 8, 8),
      decoration: BoxDecoration(
        color: p.isDark ? const Color(0xFF0F172A) : const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: p.secondaryText.withValues(alpha: 0.18)),
      ),
      child: Row(
        children: [
          Icon(icon, size: 18, color: hasValue ? _accent : p.secondaryText),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    color: p.primaryText,
                    fontWeight: FontWeight.w700,
                    fontSize: 12.5,
                  ),
                ),
                Text(
                  hasValue ? 'Added · optional' : subtitle,
                  style: TextStyle(
                    color: hasValue ? _accent : p.secondaryText,
                    fontSize: 10.5,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ),
          ),
          TextButton(
            onPressed: onAdd,
            style: TextButton.styleFrom(
              foregroundColor: _accent,
              visualDensity: VisualDensity.compact,
            ),
            child: Text(hasValue ? 'Change' : 'Add'),
          ),
          if (hasValue && onClear != null)
            IconButton(
              onPressed: onClear,
              visualDensity: VisualDensity.compact,
              icon: Icon(Icons.close_rounded, size: 18, color: p.secondaryText),
            ),
        ],
      ),
    );
  }

  Future<void> _addOrEdit([NgmyCashierIou? existing]) async {
    final nameCtrl = TextEditingController(text: existing?.personName ?? '');
    final amountCtrl = TextEditingController(
      text: existing == null
          ? ''
          : (existing.amount == existing.amount.roundToDouble()
              ? existing.amount.toInt().toString()
              : existing.amount.toStringAsFixed(2)),
    );
    final notesCtrl = TextEditingController(text: existing?.notes ?? '');
    var due = existing == null
        ? ngmyCashierDateOnly(DateTime.now().add(const Duration(days: 7)))
        : ngmyCashierDateOnly(existing.dueDate);
    var idPhoto = existing?.idPhotoBase64 ?? '';
    var selfie = existing?.selfieBase64 ?? '';
    final signaturePoints = List<Offset?>.from(existing?.signaturePoints ?? []);

    final saved = await showGeneralDialog<bool>(
      context: context,
      barrierDismissible: true,
      barrierLabel: 'Dismiss',
      barrierColor: Colors.black.withValues(alpha: 0.55),
      transitionDuration: const Duration(milliseconds: 180),
      pageBuilder: (ctx, a1, a2) => const SizedBox.shrink(),
      transitionBuilder: (ctx, anim, secondary, child) {
        return FadeTransition(
          opacity: anim,
          child: ScaleTransition(
            scale: Tween<double>(begin: 0.96, end: 1).animate(
              CurvedAnimation(parent: anim, curve: Curves.easeOutCubic),
            ),
            child: Center(
              child: Material(
                color: Colors.transparent,
                child: StatefulBuilder(
                  builder: (ctx, setLocal) {
                    return Container(
                      width: 360,
                      constraints: BoxConstraints(
                        maxHeight: MediaQuery.sizeOf(ctx).height * 0.88,
                      ),
                      margin: const EdgeInsets.symmetric(horizontal: 18),
                      padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
                      decoration: BoxDecoration(
                        color: p.cardBg,
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(
                          color: p.secondaryText.withValues(alpha: 0.16),
                        ),
                      ),
                      child: SingleChildScrollView(
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Row(
                              children: [
                                Expanded(
                                  child: Text(
                                    existing == null ? 'Add person' : 'Edit',
                                    style: TextStyle(
                                      color: p.primaryText,
                                      fontWeight: FontWeight.w800,
                                      fontSize: 16,
                                    ),
                                  ),
                                ),
                                InkWell(
                                  onTap: () => Navigator.pop(ctx, false),
                                  borderRadius: BorderRadius.circular(8),
                                  child: Padding(
                                    padding: const EdgeInsets.all(4),
                                    child: Icon(
                                      Icons.close_rounded,
                                      size: 20,
                                      color: p.secondaryText,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 12),
                            TextField(
                              controller: nameCtrl,
                              autofocus: existing == null,
                              style: TextStyle(
                                color: p.primaryText,
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                              ),
                              decoration: _fieldDecoration('Name'),
                              textCapitalization: TextCapitalization.words,
                              textInputAction: TextInputAction.next,
                            ),
                            const SizedBox(height: 10),
                            TextField(
                              controller: amountCtrl,
                              style: TextStyle(
                                color: p.primaryText,
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                              ),
                              keyboardType:
                                  const TextInputType.numberWithOptions(
                                decimal: true,
                              ),
                              inputFormatters: [
                                FilteringTextInputFormatter.allow(
                                  RegExp(r'[0-9.]'),
                                ),
                              ],
                              decoration: _fieldDecoration(
                                'Amount',
                                prefix: '\$ ',
                              ),
                            ),
                            const SizedBox(height: 10),
                            Material(
                              color: p.isDark
                                  ? const Color(0xFF0F172A)
                                  : const Color(0xFFF8FAFC),
                              borderRadius: BorderRadius.circular(10),
                              child: InkWell(
                                borderRadius: BorderRadius.circular(10),
                                onTap: () async {
                                  final picked = await showDatePicker(
                                    context: ctx,
                                    initialDate: due,
                                    firstDate: DateTime(2020),
                                    lastDate: DateTime(2100),
                                  );
                                  if (picked != null) {
                                    setLocal(
                                      () => due = ngmyCashierDateOnly(picked),
                                    );
                                  }
                                },
                                child: Container(
                                  padding: const EdgeInsets.symmetric(
                                    horizontal: 12,
                                    vertical: 12,
                                  ),
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10),
                                    border: Border.all(
                                      color: p.secondaryText
                                          .withValues(alpha: 0.22),
                                    ),
                                  ),
                                  child: Row(
                                    children: [
                                      Expanded(
                                        child: Column(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              'Pay by',
                                              style: TextStyle(
                                                color: p.secondaryText,
                                                fontSize: 11,
                                                fontWeight: FontWeight.w600,
                                              ),
                                            ),
                                            const SizedBox(height: 2),
                                            Text(
                                              _fmtDate(due),
                                              style: TextStyle(
                                                color: p.primaryText,
                                                fontSize: 14,
                                                fontWeight: FontWeight.w700,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      const Icon(
                                        Icons.calendar_today_outlined,
                                        size: 18,
                                        color: _accent,
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                            if (existing != null) ...[
                              const SizedBox(height: 8),
                              Text(
                                'Extending keeps missed days already counted.',
                                style: TextStyle(
                                  color: p.secondaryText,
                                  fontSize: 11,
                                  height: 1.3,
                                ),
                              ),
                            ],
                            const SizedBox(height: 10),
                            TextField(
                              controller: notesCtrl,
                              style: TextStyle(
                                color: p.primaryText,
                                fontSize: 13,
                              ),
                              maxLines: 2,
                              decoration: _fieldDecoration('Note (optional)'),
                            ),
                            const SizedBox(height: 12),
                            Text(
                              'Optional verification',
                              style: TextStyle(
                                color: p.primaryText,
                                fontWeight: FontWeight.w800,
                                fontSize: 12.5,
                              ),
                            ),
                            Text(
                              'ID photo, selfie, and signature from the person who owes you — all optional.',
                              style: TextStyle(
                                color: p.secondaryText,
                                fontSize: 11,
                                height: 1.3,
                              ),
                            ),
                            _optionalAttachTile(
                              title: 'ID photo',
                              subtitle: 'Upload from gallery',
                              icon: Icons.badge_outlined,
                              hasValue: idPhoto.isNotEmpty,
                              onAdd: () async {
                                final v = await _pickPhoto(fromCamera: false);
                                if (v != null) setLocal(() => idPhoto = v);
                              },
                              onClear: () => setLocal(() => idPhoto = ''),
                            ),
                            _optionalAttachTile(
                              title: 'Selfie',
                              subtitle: 'Camera or gallery',
                              icon: Icons.face_retouching_natural_outlined,
                              hasValue: selfie.isNotEmpty,
                              onAdd: () async {
                                final choice = await showModalBottomSheet<String>(
                                  context: ctx,
                                  backgroundColor: p.cardBg,
                                  builder: (sheetCtx) => SafeArea(
                                    child: Column(
                                      mainAxisSize: MainAxisSize.min,
                                      children: [
                                        ListTile(
                                          leading: const Icon(Icons.photo_camera_outlined),
                                          title: const Text('Take photo'),
                                          onTap: () =>
                                              Navigator.pop(sheetCtx, 'camera'),
                                        ),
                                        ListTile(
                                          leading: const Icon(Icons.photo_library_outlined),
                                          title: const Text('Gallery'),
                                          onTap: () =>
                                              Navigator.pop(sheetCtx, 'gallery'),
                                        ),
                                      ],
                                    ),
                                  ),
                                );
                                if (choice == null) return;
                                final v = await _pickPhoto(
                                  fromCamera: choice == 'camera',
                                );
                                if (v != null) setLocal(() => selfie = v);
                              },
                              onClear: () => setLocal(() => selfie = ''),
                            ),
                            const SizedBox(height: 8),
                            NgmyInvoiceSignaturePad(
                              title: 'Signature (optional)',
                              points: signaturePoints,
                              onChanged: () => setLocal(() {}),
                              onClear: () =>
                                  setLocal(() => signaturePoints.clear()),
                              onFullscreen: () async {
                                await showNgmyFullscreenSignature(
                                  ctx,
                                  title: 'Debtor signature',
                                  points: signaturePoints,
                                  onSave: (savedPts, size, color, stroke) {
                                    setLocal(() {
                                      signaturePoints
                                        ..clear()
                                        ..addAll(savedPts);
                                    });
                                  },
                                );
                              },
                            ),
                            const SizedBox(height: 14),
                            Row(
                              children: [
                                Expanded(
                                  child: OutlinedButton(
                                    onPressed: () =>
                                        Navigator.pop(ctx, false),
                                    style: OutlinedButton.styleFrom(
                                      foregroundColor: p.secondaryText,
                                      side: BorderSide(
                                        color: p.secondaryText
                                            .withValues(alpha: 0.28),
                                      ),
                                      padding: const EdgeInsets.symmetric(
                                        vertical: 11,
                                      ),
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(10),
                                      ),
                                    ),
                                    child: const Text(
                                      'Cancel',
                                      style: TextStyle(
                                        fontWeight: FontWeight.w700,
                                        fontSize: 13,
                                      ),
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 8),
                                Expanded(
                                  child: FilledButton(
                                    onPressed: () => Navigator.pop(ctx, true),
                                    style: FilledButton.styleFrom(
                                      backgroundColor: _accent,
                                      foregroundColor: Colors.white,
                                      padding: const EdgeInsets.symmetric(
                                        vertical: 11,
                                      ),
                                      shape: RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(10),
                                      ),
                                    ),
                                    child: Text(
                                      existing == null ? 'Save' : 'Update',
                                      style: const TextStyle(
                                        fontWeight: FontWeight.w800,
                                        fontSize: 13,
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
          ),
        );
      },
    );

    final name = nameCtrl.text.trim();
    final amount = double.tryParse(amountCtrl.text.trim()) ?? 0;
    final notes = notesCtrl.text.trim();
    nameCtrl.dispose();
    amountCtrl.dispose();
    notesCtrl.dispose();
    if (saved != true || !mounted) return;
    if (name.isEmpty || amount <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Enter a name and an amount greater than 0.'),
        ),
      );
      return;
    }

    if (existing == null) {
      await upsertNgmyCashierIou(
        widget.userEmail,
        NgmyCashierIou(
          id: ngmyCashierIouNewId(),
          personName: name,
          amount: amount,
          dueDate: due,
          notes: notes,
          idPhotoBase64: idPhoto,
          selfieBase64: selfie,
          signaturePoints: signaturePoints,
        ),
      );
    } else {
      existing.personName = name;
      existing.amount = amount;
      existing.notes = notes;
      existing.idPhotoBase64 = idPhoto;
      existing.selfieBase64 = selfie;
      existing.signaturePoints
        ..clear()
        ..addAll(signaturePoints);
      if (ngmyCashierDateOnly(due) != ngmyCashierDateOnly(existing.dueDate)) {
        existing.extendDueDate(due);
      }
      await upsertNgmyCashierIou(widget.userEmail, existing);
    }
    await _reload();
  }

  Future<void> _togglePaid(NgmyCashierIou iou) async {
    if (iou.isPaid) {
      iou.markUnpaid();
    } else {
      final ok = await showGeneralDialog<bool>(
        context: context,
        barrierDismissible: true,
        barrierLabel: 'Dismiss',
        barrierColor: Colors.black.withValues(alpha: 0.55),
        transitionDuration: const Duration(milliseconds: 160),
        pageBuilder: (ctx, a1, a2) => const SizedBox.shrink(),
        transitionBuilder: (ctx, anim, secondary, child) {
          return FadeTransition(
            opacity: anim,
            child: Center(
              child: Material(
                color: Colors.transparent,
                child: Container(
                  width: 300,
                  margin: const EdgeInsets.symmetric(horizontal: 24),
                  padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
                  decoration: BoxDecoration(
                    color: p.cardBg,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(
                      color: p.secondaryText.withValues(alpha: 0.16),
                    ),
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Text(
                        'Mark paid?',
                        style: TextStyle(
                          color: p.primaryText,
                          fontWeight: FontWeight.w800,
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        '${iou.personName} · ${ngmyFormatMoney(iou.amount)}',
                        style: TextStyle(
                          color: p.secondaryText,
                          fontSize: 13,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      Text(
                        'Missed days: ${iou.missedDays()}',
                        style: TextStyle(
                          color: iou.missedDays() > 0
                              ? const Color(0xFFDC2626)
                              : _accent,
                          fontSize: 12,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      const SizedBox(height: 14),
                      Row(
                        children: [
                          Expanded(
                            child: OutlinedButton(
                              onPressed: () => Navigator.pop(ctx, false),
                              style: OutlinedButton.styleFrom(
                                foregroundColor: p.secondaryText,
                                side: BorderSide(
                                  color:
                                      p.secondaryText.withValues(alpha: 0.28),
                                ),
                                padding:
                                    const EdgeInsets.symmetric(vertical: 10),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(10),
                                ),
                              ),
                              child: const Text(
                                'Cancel',
                                style: TextStyle(fontWeight: FontWeight.w700),
                              ),
                            ),
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: FilledButton(
                              onPressed: () => Navigator.pop(ctx, true),
                              style: FilledButton.styleFrom(
                                backgroundColor: _accent,
                                foregroundColor: Colors.white,
                                padding:
                                    const EdgeInsets.symmetric(vertical: 10),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(10),
                                ),
                              ),
                              child: const Text(
                                'Paid',
                                style: TextStyle(fontWeight: FontWeight.w800),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      );
      if (ok != true) return;
      iou.markPaid();
    }
    await upsertNgmyCashierIou(widget.userEmail, iou);
    await _reload();
  }

  Future<void> _delete(NgmyCashierIou iou) async {
    final ok = await showNgmyDeleteConfirm(
      context,
      title: 'Delete this debt?',
      message:
          '${iou.personName} · ${ngmyFormatMoney(iou.amount)} will be removed from this device.',
    );
    if (ok != true) return;
    await deleteNgmyCashierIou(widget.userEmail, iou.id);
    await _reload();
  }

  Future<void> _openActions(NgmyCashierIou iou) async {
    await showModalBottomSheet<void>(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        Widget action({
          required IconData icon,
          required String label,
          required VoidCallback onTap,
          Color? color,
        }) {
          final c = color ?? p.primaryText;
          return InkWell(
            onTap: onTap,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
              child: Row(
                children: [
                  Icon(icon, size: 20, color: c),
                  const SizedBox(width: 12),
                  Text(
                    label,
                    style: TextStyle(
                      color: c,
                      fontWeight: FontWeight.w700,
                      fontSize: 14,
                    ),
                  ),
                ],
              ),
            ),
          );
        }

        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
            child: Container(
              decoration: BoxDecoration(
                color: p.cardBg,
                borderRadius: BorderRadius.circular(14),
                border: Border.all(
                  color: p.secondaryText.withValues(alpha: 0.14),
                ),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(14, 12, 14, 8),
                    child: Row(
                      children: [
                        Expanded(
                          child: Text(
                            iou.personName,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              color: p.primaryText,
                              fontWeight: FontWeight.w800,
                              fontSize: 14,
                            ),
                          ),
                        ),
                        Text(
                          ngmyFormatMoney(iou.amount),
                          style: const TextStyle(
                            color: _accent,
                            fontWeight: FontWeight.w800,
                            fontSize: 13,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Divider(
                    height: 1,
                    color: p.secondaryText.withValues(alpha: 0.12),
                  ),
                  action(
                    icon: Icons.receipt_long_outlined,
                    label: 'View receipt',
                    onTap: () {
                      Navigator.pop(ctx);
                      showNgmyCashierReceiptViewer(context, iou: iou);
                    },
                  ),
                  action(
                    icon: iou.isPaid
                        ? Icons.undo_rounded
                        : Icons.check_circle_outline_rounded,
                    label: iou.isPaid ? 'Mark unpaid' : 'Mark paid',
                    onTap: () {
                      Navigator.pop(ctx);
                      _togglePaid(iou);
                    },
                  ),
                  action(
                    icon: Icons.edit_outlined,
                    label: 'Edit',
                    onTap: () {
                      Navigator.pop(ctx);
                      _addOrEdit(iou);
                    },
                  ),
                  if (iou.hasIdPhoto)
                    action(
                      icon: Icons.badge_outlined,
                      label: 'View / download ID',
                      onTap: () {
                        Navigator.pop(ctx);
                        showNgmyCashierAttachmentViewer(
                          context,
                          title: 'ID photo · ${iou.personName}',
                          base64Image: iou.idPhotoBase64,
                          downloadName:
                              'ngmy_cashier_id_${iou.id}.jpg',
                        );
                      },
                    ),
                  if (iou.hasSelfie)
                    action(
                      icon: Icons.face_outlined,
                      label: 'View / download selfie',
                      onTap: () {
                        Navigator.pop(ctx);
                        showNgmyCashierAttachmentViewer(
                          context,
                          title: 'Selfie · ${iou.personName}',
                          base64Image: iou.selfieBase64,
                          downloadName:
                              'ngmy_cashier_selfie_${iou.id}.jpg',
                        );
                      },
                    ),
                  if (iou.hasSignature)
                    action(
                      icon: Icons.draw_outlined,
                      label: 'View / download signature',
                      onTap: () {
                        Navigator.pop(ctx);
                        showNgmyCashierSignatureViewer(context, iou: iou);
                      },
                    ),
                  action(
                    icon: Icons.delete_outline_rounded,
                    label: 'Delete',
                    color: const Color(0xFFDC2626),
                    onTap: () {
                      Navigator.pop(ctx);
                      _delete(iou);
                    },
                  ),
                  const SizedBox(height: 4),
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Padding(
        padding: EdgeInsets.symmetric(vertical: 40),
        child: Center(
          child: SizedBox(
            width: 22,
            height: 22,
            child: CircularProgressIndicator(strokeWidth: 2.2, color: _accent),
          ),
        ),
      );
    }

    final open = _items.where((e) => !e.isPaid).toList();
    final paid = _items.where((e) => e.isPaid).toList();
    final openTotal = open.fold<double>(0, (s, e) => s + e.amount);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Cashier',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w800,
                      color: p.primaryText,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    open.isEmpty
                        ? 'Nobody owes you'
                        : '${open.length} open · ${ngmyFormatMoney(openTotal)}',
                    style: TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: p.secondaryText,
                    ),
                  ),
                ],
              ),
            ),
            Material(
              color: _accent,
              borderRadius: BorderRadius.circular(10),
              child: InkWell(
                onTap: () => _addOrEdit(),
                borderRadius: BorderRadius.circular(10),
                child: const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.add_rounded, color: Colors.white, size: 18),
                      SizedBox(width: 4),
                      Text(
                        'Add',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w800,
                          fontSize: 13,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 12),
        if (_items.isEmpty)
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(vertical: 28, horizontal: 16),
            decoration: BoxDecoration(
              color: p.cardBg,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(
                color: p.secondaryText.withValues(alpha: 0.14),
              ),
            ),
            child: Column(
              children: [
                Icon(
                  Icons.payments_outlined,
                  size: 28,
                  color: p.secondaryText.withValues(alpha: 0.55),
                ),
                const SizedBox(height: 10),
                Text(
                  'Add someone who owes you',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w700,
                    color: p.primaryText,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  'Name, amount, and pay-by date — saved on this device.',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 12,
                    color: p.secondaryText,
                    height: 1.35,
                  ),
                ),
              ],
            ),
          )
        else ...[
          Container(
            decoration: BoxDecoration(
              color: p.cardBg,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(
                color: p.secondaryText.withValues(alpha: 0.14),
              ),
            ),
            clipBehavior: Clip.antiAlias,
            child: Column(
              children: [
                for (var i = 0; i < open.length; i++) ...[
                  _row(open[i]),
                  if (i < open.length - 1)
                    Divider(
                      height: 1,
                      indent: 14,
                      endIndent: 14,
                      color: p.secondaryText.withValues(alpha: 0.1),
                    ),
                ],
              ],
            ),
          ),
          if (paid.isNotEmpty) ...[
            const SizedBox(height: 14),
            Text(
              'Paid',
              style: TextStyle(
                color: p.secondaryText,
                fontWeight: FontWeight.w700,
                fontSize: 11,
                letterSpacing: 0.4,
              ),
            ),
            const SizedBox(height: 6),
            Container(
              decoration: BoxDecoration(
                color: p.cardBg,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(
                  color: p.secondaryText.withValues(alpha: 0.12),
                ),
              ),
              clipBehavior: Clip.antiAlias,
              child: Column(
                children: [
                  for (var i = 0; i < paid.length; i++) ...[
                    _row(paid[i]),
                    if (i < paid.length - 1)
                      Divider(
                        height: 1,
                        indent: 14,
                        endIndent: 14,
                        color: p.secondaryText.withValues(alpha: 0.1),
                      ),
                  ],
                ],
              ),
            ),
          ],
        ],
      ],
    );
  }

  Widget _row(NgmyCashierIou iou) {
    final missed = iou.missedDays();
    final tomorrow = iou.isDueTomorrow();
    final statusColor = iou.isPaid
        ? (iou.paidOnTime ? _accent : const Color(0xFFDC2626))
        : iou.isOverdue
            ? const Color(0xFFDC2626)
            : tomorrow
                ? _accent
                : p.secondaryText;

    String meta;
    if (iou.isPaid) {
      meta = iou.paidOnTime
          ? 'Paid on time ${_fmtDate(iou.paidAt!)}'
          : 'Paid ${_fmtDate(iou.paidAt!)} · $missed missed';
    } else if (tomorrow) {
      meta = 'Pays tomorrow';
    } else if (missed > 0) {
      meta = 'Due ${_fmtDate(iou.dueDate)} · $missed missed';
    } else {
      meta = 'Due ${_fmtDate(iou.dueDate)}';
    }

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => _openActions(iou),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(12, 10, 6, 10),
          child: Row(
            children: [
              Container(
                width: 3,
                height: 28,
                decoration: BoxDecoration(
                  color: iou.isPaid
                      ? (iou.paidOnTime
                          ? _accent.withValues(alpha: 0.55)
                          : const Color(0xFFDC2626))
                      : iou.isOverdue
                          ? const Color(0xFFDC2626)
                          : tomorrow
                              ? _accent
                              : _accent.withValues(alpha: 0.35),
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Flexible(
                          child: Text(
                            iou.personName,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontWeight: FontWeight.w700,
                              fontSize: 14,
                              color: p.primaryText.withValues(
                                alpha: iou.isPaid ? 0.55 : 1,
                              ),
                            ),
                          ),
                        ),
                        if (iou.hasAttachments) ...[
                          const SizedBox(width: 6),
                          Icon(
                            Icons.attach_file_rounded,
                            size: 14,
                            color: p.secondaryText.withValues(alpha: 0.7),
                          ),
                        ],
                      ],
                    ),
                    const SizedBox(height: 2),
                    Text(
                      meta,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        color: statusColor,
                        fontSize: 11.5,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Text(
                ngmyFormatMoney(iou.amount),
                style: TextStyle(
                  color: p.primaryText.withValues(alpha: iou.isPaid ? 0.55 : 1),
                  fontWeight: FontWeight.w800,
                  fontSize: 13.5,
                ),
              ),
              Icon(
                Icons.chevron_right_rounded,
                size: 20,
                color: p.secondaryText.withValues(alpha: 0.55),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
