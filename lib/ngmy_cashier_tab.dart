import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_cashier_iou.dart';
import 'ngmy_cashier_receipt_pdf.dart';
import 'ngmy_cashier_storage.dart';
import 'ngmy_delete_confirm_dialog.dart';
import 'ngmy_worksheet_glow_frame.dart';
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

  String _fmtDate(DateTime d) {
    final local = d.toLocal();
    return '${local.year}-${local.month.toString().padLeft(2, '0')}-${local.day.toString().padLeft(2, '0')}';
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

    final saved = await showDialog<bool>(
      context: context,
      builder: (ctx) {
        return StatefulBuilder(
          builder: (ctx, setLocal) {
            return AlertDialog(
              backgroundColor: p.cardBg,
              title: Text(
                existing == null ? 'Who owes you?' : 'Edit debt',
                style: TextStyle(
                  color: p.primaryText,
                  fontWeight: FontWeight.w900,
                ),
              ),
              content: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    TextField(
                      controller: nameCtrl,
                      style: TextStyle(color: p.primaryText),
                      decoration: InputDecoration(
                        labelText: 'Person name',
                        labelStyle: TextStyle(color: p.secondaryText),
                      ),
                      textCapitalization: TextCapitalization.words,
                    ),
                    const SizedBox(height: 10),
                    TextField(
                      controller: amountCtrl,
                      style: TextStyle(color: p.primaryText),
                      keyboardType: const TextInputType.numberWithOptions(
                        decimal: true,
                      ),
                      inputFormatters: [
                        FilteringTextInputFormatter.allow(RegExp(r'[0-9.]')),
                      ],
                      decoration: InputDecoration(
                        labelText: 'Amount owed',
                        prefixText: '\$ ',
                        labelStyle: TextStyle(color: p.secondaryText),
                      ),
                    ),
                    const SizedBox(height: 14),
                    ListTile(
                      contentPadding: EdgeInsets.zero,
                      title: Text(
                        'Pay-by date',
                        style: TextStyle(
                          color: p.primaryText,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      subtitle: Text(
                        _fmtDate(due),
                        style: TextStyle(color: p.secondaryText),
                      ),
                      trailing: const Icon(
                        Icons.calendar_month_rounded,
                        color: WorksheetPalette.greenDark,
                      ),
                      onTap: () async {
                        final picked = await showDatePicker(
                          context: ctx,
                          initialDate: due,
                          firstDate: DateTime(2020),
                          lastDate: DateTime(2100),
                        );
                        if (picked != null) {
                          setLocal(() => due = ngmyCashierDateOnly(picked));
                        }
                      },
                    ),
                    if (existing != null) ...[
                      const SizedBox(height: 4),
                      Text(
                        'Changing the date extends the deadline. Missed days already counted stay on the record.',
                        style: TextStyle(
                          color: p.secondaryText,
                          fontSize: 12,
                          height: 1.35,
                        ),
                      ),
                    ],
                    const SizedBox(height: 8),
                    TextField(
                      controller: notesCtrl,
                      style: TextStyle(color: p.primaryText),
                      maxLines: 2,
                      decoration: InputDecoration(
                        labelText: 'Notes (optional)',
                        labelStyle: TextStyle(color: p.secondaryText),
                      ),
                    ),
                  ],
                ),
              ),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(ctx, false),
                  child: const Text('Cancel'),
                ),
                FilledButton(
                  style: FilledButton.styleFrom(
                    backgroundColor: WorksheetPalette.greenDark,
                  ),
                  onPressed: () => Navigator.pop(ctx, true),
                  child: Text(existing == null ? 'Save' : 'Update'),
                ),
              ],
            );
          },
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
        ),
      );
    } else {
      existing.personName = name;
      existing.amount = amount;
      existing.notes = notes;
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
      final ok = await showDialog<bool>(
        context: context,
        builder: (ctx) => AlertDialog(
          backgroundColor: p.cardBg,
          title: Text(
            'Mark as paid?',
            style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w900),
          ),
          content: Text(
            '${iou.personName} · ${ngmyFormatMoney(iou.amount)}\nMissed days: ${iou.missedDays()}',
            style: TextStyle(color: p.secondaryText, height: 1.4),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(ctx, false),
              child: const Text('Cancel'),
            ),
            FilledButton(
              style: FilledButton.styleFrom(
                backgroundColor: WorksheetPalette.greenDark,
              ),
              onPressed: () => Navigator.pop(ctx, true),
              child: const Text('Mark paid'),
            ),
          ],
        ),
      );
      if (ok != true) return;
      iou.markPaid();
    }
    await upsertNgmyCashierIou(widget.userEmail, iou);
    await _reload();
  }

  Future<void> _printReceipt(NgmyCashierIou iou) async {
    try {
      final ok = await ngmyPrintCashierIouReceipt(iou);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            ok
                ? 'Receipt ready to print / download.'
                : 'Could not open the receipt.',
          ),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Print failed: $e')),
      );
    }
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
      backgroundColor: p.cardBg,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(18)),
      ),
      builder: (ctx) {
        return SafeArea(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              ListTile(
                leading: Icon(
                  iou.isPaid
                      ? Icons.undo_rounded
                      : Icons.check_circle_outline_rounded,
                  color: WorksheetPalette.greenDark,
                ),
                title: Text(iou.isPaid ? 'Mark unpaid' : 'Mark paid'),
                onTap: () {
                  Navigator.pop(ctx);
                  _togglePaid(iou);
                },
              ),
              ListTile(
                leading: const Icon(Icons.edit_outlined),
                title: const Text('Edit / extend due date'),
                onTap: () {
                  Navigator.pop(ctx);
                  _addOrEdit(iou);
                },
              ),
              ListTile(
                leading: const Icon(Icons.print_outlined),
                title: const Text('Print receipt'),
                subtitle: Text(
                  'Missed days, due date, and paid date',
                  style: TextStyle(color: p.secondaryText, fontSize: 12),
                ),
                onTap: () {
                  Navigator.pop(ctx);
                  _printReceipt(iou);
                },
              ),
              ListTile(
                leading: Icon(Icons.delete_outline, color: Colors.red.shade400),
                title: Text(
                  'Delete',
                  style: TextStyle(color: Colors.red.shade400),
                ),
                onTap: () {
                  Navigator.pop(ctx);
                  _delete(iou);
                },
              ),
              const SizedBox(height: 8),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Center(child: CircularProgressIndicator());
    }

    final open = _items.where((e) => !e.isPaid).toList();
    final paid = _items.where((e) => e.isPaid).toList();
    final openTotal = open.fold<double>(0, (s, e) => s + e.amount);

    return WorksheetGlowFrame(
      style: WorksheetFrameStyle.cashier,
      glowStrength: 0.95,
      padding: const EdgeInsets.fromLTRB(12, 12, 12, 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: p.cardBg,
              borderRadius: BorderRadius.circular(15),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Who owes me',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w900,
                    color: p.primaryText,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  'Stored only on this device. You’ll get a reminder the day before someone is due to pay.',
                  style: TextStyle(
                    fontSize: 13,
                    height: 1.35,
                    color: p.secondaryText,
                  ),
                ),
                const SizedBox(height: 12),
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        open.isEmpty
                            ? 'Nothing owed right now'
                            : '${open.length} open · ${ngmyFormatMoney(openTotal)}',
                        style: const TextStyle(
                          color: WorksheetPalette.greenDark,
                          fontWeight: FontWeight.w800,
                          fontSize: 14,
                        ),
                      ),
                    ),
                    FilledButton.icon(
                      style: FilledButton.styleFrom(
                        backgroundColor: WorksheetPalette.greenDark,
                        foregroundColor: Colors.white,
                      ),
                      onPressed: () => _addOrEdit(),
                      icon: const Icon(Icons.person_add_alt_1_rounded, size: 18),
                      label: const Text('Add'),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          if (_items.isEmpty)
            Container(
              decoration: BoxDecoration(
                color: p.cardBg,
                borderRadius: BorderRadius.circular(15),
              ),
              padding: const EdgeInsets.all(28),
              child: Column(
                children: [
                  Icon(
                    Icons.account_balance_wallet_outlined,
                    size: 52,
                    color: p.secondaryText.withValues(alpha: 0.45),
                  ),
                  const SizedBox(height: 14),
                  Text(
                    'Track money people owe you',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w800,
                      color: p.primaryText,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Add a name, amount, and the day they will pay you.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 13,
                      color: p.secondaryText,
                      height: 1.4,
                    ),
                  ),
                ],
              ),
            )
          else ...[
            ...open.map(_card),
            if (paid.isNotEmpty) ...[
              Padding(
                padding: const EdgeInsets.fromLTRB(4, 10, 4, 8),
                child: Text(
                  'Paid',
                  style: TextStyle(
                    color: p.secondaryText,
                    fontWeight: FontWeight.w800,
                    fontSize: 12,
                    letterSpacing: 0.6,
                  ),
                ),
              ),
              ...paid.map(_card),
            ],
          ],
        ],
      ),
    );
  }

  Widget _card(NgmyCashierIou iou) {
    final missed = iou.missedDays();
    final tomorrow = iou.isDueTomorrow();
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: p.cardBg,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(
          color: iou.isPaid
              ? p.secondaryText.withValues(alpha: 0.2)
              : iou.isOverdue
                  ? Colors.red.withValues(alpha: 0.45)
                  : tomorrow
                      ? WorksheetPalette.greenDark.withValues(alpha: 0.55)
                      : p.secondaryText.withValues(alpha: 0.18),
        ),
      ),
      child: InkWell(
        borderRadius: BorderRadius.circular(14),
        onTap: () => _openActions(iou),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(14, 12, 8, 12),
          child: Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  color: WorksheetPalette.greenDark.withValues(alpha: 0.12),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(
                  iou.isPaid
                      ? Icons.check_rounded
                      : Icons.person_outline_rounded,
                  color: WorksheetPalette.greenDark,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      iou.personName,
                      style: TextStyle(
                        fontWeight: FontWeight.w800,
                        fontSize: 15,
                        color: p.primaryText,
                        decoration:
                            iou.isPaid ? TextDecoration.lineThrough : null,
                      ),
                    ),
                    const SizedBox(height: 3),
                    Text(
                      iou.isPaid
                          ? 'Paid ${_fmtDate(iou.paidAt!)} · missed $missed day${missed == 1 ? '' : 's'}'
                          : 'Due ${_fmtDate(iou.dueDate)}'
                              '${tomorrow ? ' · pays tomorrow' : ''}'
                              '${missed > 0 ? ' · missed $missed day${missed == 1 ? '' : 's'}' : ''}',
                      style: TextStyle(
                        color: iou.isOverdue && !iou.isPaid
                            ? Colors.red.shade400
                            : p.secondaryText,
                        fontSize: 12.5,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
              ),
              Text(
                ngmyFormatMoney(iou.amount),
                style: TextStyle(
                  color: p.primaryText,
                  fontWeight: FontWeight.w900,
                  fontSize: 15,
                ),
              ),
              IconButton(
                onPressed: () => _openActions(iou),
                icon: Icon(Icons.more_vert_rounded, color: p.secondaryText),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
