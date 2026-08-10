import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_civic_state_wallet.dart';
import 'ngmy_nav.dart';

class _WalletTone {
  _WalletTone(this.isDark);

  final bool isDark;

  Color get pageBg => isDark ? const Color(0xFF0A0A0A) : const Color(0xFFF3F4F6);
  Color get headerFg => isDark ? Colors.white : const Color(0xFF0F172A);
  Color get headerMuted => isDark ? Colors.white70 : const Color(0xFF64748B);
  Color get cardBg => isDark ? const Color(0xFF171717) : Colors.white;
  Color get cardBorder => isDark ? const Color(0xFF2A2A2A) : const Color(0xFFE5E7EB);
  Color get primaryText => isDark ? Colors.white : const Color(0xFF0F172A);
  Color get secondaryText => isDark ? const Color(0xFFA3A3A3) : const Color(0xFF64748B);
  Color get chipBg => isDark ? const Color(0xFF262626) : const Color(0xFFF1F5F9);
  Color get chipSelected => isDark ? Colors.white : Colors.black;
  Color get chipSelectedFg => isDark ? Colors.black : Colors.white;
  Color get iconWell => isDark ? const Color(0xFF262626) : const Color(0xFFF1F5F9);
  Color get progressTrack => isDark ? const Color(0xFF333333) : const Color(0xFFE2E8F0);
  Color get accent => const Color(0xFF059669);
  Color get dialogBg => isDark ? const Color(0xFF141414) : Colors.white;
  Color get fieldFill => isDark ? const Color(0xFF1F1F1F) : const Color(0xFFF8FAFC);
  Color get fieldBorder => isDark ? const Color(0xFF3F3F3F) : const Color(0xFFD1D5DB);
}

/// Themed state wallet (true dark / light — no bluish slate).
class NgmyCivicStateWalletScreen extends StatefulWidget {
  const NgmyCivicStateWalletScreen({
    super.key,
    required this.state,
    required this.canEdit,
    required this.snapshotBuilder,
    required this.onAddSpending,
    required this.onUpdateSpending,
    required this.onDeleteSpending,
  });

  final String state;
  final bool canEdit;
  final NgmyCivicWalletSnapshot Function() snapshotBuilder;
  final Future<void> Function({
    required double amount,
    required String description,
  }) onAddSpending;
  final Future<void> Function({
    required String spendingId,
    required double amount,
    required String description,
  }) onUpdateSpending;
  final Future<void> Function(String spendingId) onDeleteSpending;

  @override
  State<NgmyCivicStateWalletScreen> createState() => _NgmyCivicStateWalletScreenState();
}

class _NgmyCivicStateWalletScreenState extends State<NgmyCivicStateWalletScreen> {
  late NgmyCivicWalletSnapshot _snap;
  int _range = 2;
  bool _searchOpen = false;
  final _searchC = TextEditingController();
  DateTimeRange? _dateFilter;

  @override
  void initState() {
    super.initState();
    _snap = widget.snapshotBuilder();
    _searchC.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _searchC.dispose();
    super.dispose();
  }

  void _reload() => setState(() => _snap = widget.snapshotBuilder());

  String _money(double v) {
    final neg = v < 0;
    final abs = v.abs();
    final whole = abs.floor();
    final cents = ((abs - whole) * 100).round().clamp(0, 99);
    final core =
        '\$${whole.toString().replaceAllMapped(RegExp(r'(\d)(?=(\d{3})+(?!\d))'), (m) => '${m[1]},')}.${cents.toString().padLeft(2, '0')}';
    return neg ? '-$core' : core;
  }

  List<NgmyCivicWalletTxn> get _filteredRecent {
    final q = _searchC.text.trim().toLowerCase();
    final now = DateTime.now();
    DateTime? rangeStart;
    switch (_range) {
      case 0:
        rangeStart = DateTime(now.year, now.month, now.day);
        break;
      case 1:
        rangeStart = now.subtract(const Duration(days: 7));
        break;
      case 2:
        rangeStart = DateTime(now.year, now.month, 1);
        break;
      case 3:
        rangeStart = DateTime(now.year, 1, 1);
        break;
    }
    return _snap.recent.where((t) {
      if (q.isNotEmpty && !t.title.toLowerCase().contains(q)) return false;
      if (_dateFilter != null) {
        final d = DateTime(t.at.year, t.at.month, t.at.day);
        final a = DateTime(_dateFilter!.start.year, _dateFilter!.start.month, _dateFilter!.start.day);
        final b = DateTime(_dateFilter!.end.year, _dateFilter!.end.month, _dateFilter!.end.day);
        if (d.isBefore(a) || d.isAfter(b)) return false;
      } else if (rangeStart != null && t.at.isBefore(rangeStart)) {
        return false;
      }
      return true;
    }).toList();
  }

  Future<void> _pickDateFilter() async {
    final now = DateTime.now();
    final picked = await showDateRangePicker(
      context: context,
      firstDate: DateTime(now.year - 5),
      lastDate: DateTime(now.year + 1),
      initialDateRange: _dateFilter ??
          DateTimeRange(start: now.subtract(const Duration(days: 30)), end: now),
      helpText: 'Filter by date',
      builder: (context, child) {
        final isDark = Theme.of(context).brightness == Brightness.dark;
        return Theme(
          data: Theme.of(context).copyWith(
            colorScheme: isDark
                ? const ColorScheme.dark(
                    primary: Color(0xFF059669),
                    surface: Color(0xFF141414),
                    onSurface: Colors.white,
                  )
                : const ColorScheme.light(
                    primary: Color(0xFF059669),
                    surface: Colors.white,
                    onSurface: Color(0xFF0F172A),
                  ),
          ),
          child: child!,
        );
      },
    );
    if (!mounted) return;
    setState(() => _dateFilter = picked);
  }

  Future<void> _promptSpending({NgmyCivicWalletSpendingRow? existing}) async {
    if (!widget.canEdit) return;
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    final amountC = TextEditingController(
      text: existing == null
          ? ''
          : existing.amount.toStringAsFixed(existing.amount == existing.amount.roundToDouble() ? 0 : 2),
    );
    final noteC = TextEditingController(text: existing?.description ?? '');
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) {
        return Dialog(
          backgroundColor: Colors.transparent,
          insetPadding: const EdgeInsets.all(20),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 420),
            padding: const EdgeInsets.fromLTRB(20, 18, 20, 16),
            decoration: BoxDecoration(
              color: tone.dialogBg,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: tone.cardBorder),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withValues(alpha: tone.isDark ? 0.45 : 0.12),
                  blurRadius: 28,
                  offset: const Offset(0, 12),
                ),
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  children: [
                    Container(
                      width: 42,
                      height: 42,
                      decoration: BoxDecoration(
                        color: tone.accent.withValues(alpha: tone.isDark ? 0.22 : 0.12),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Icon(Icons.receipt_long_rounded, color: tone.accent),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            existing == null ? 'Record spending' : 'Update spending',
                            style: TextStyle(
                              color: tone.primaryText,
                              fontWeight: FontWeight.w900,
                              fontSize: 18,
                            ),
                          ),
                          Text(
                            'Money stays available until you record it here.',
                            style: TextStyle(color: tone.secondaryText, fontSize: 12),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 18),
                TextField(
                  controller: amountC,
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w700),
                  decoration: _fieldDec(tone, 'Amount (\$)', Icons.attach_money_rounded),
                ),
                const SizedBox(height: 12),
                TextField(
                  controller: noteC,
                  style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w600),
                  maxLines: 2,
                  decoration: _fieldDec(tone, 'What was it spent on?', Icons.edit_note_rounded),
                ),
                const SizedBox(height: 18),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(ctx, false),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: tone.secondaryText,
                          side: BorderSide(color: tone.fieldBorder),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: FilledButton(
                        onPressed: () => Navigator.pop(ctx, true),
                        style: FilledButton.styleFrom(
                          backgroundColor: tone.accent,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
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
    if (ok != true || !mounted) return;
    final amount = double.tryParse(amountC.text.trim().replaceAll(',', '')) ?? 0;
    final note = noteC.text.trim();
    if (amount <= 0 || note.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter a valid amount and what it was spent on.')),
      );
      return;
    }
    if (existing == null) {
      await widget.onAddSpending(amount: amount, description: note);
    } else {
      await widget.onUpdateSpending(spendingId: existing.id, amount: amount, description: note);
    }
    if (!mounted) return;
    _reload();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Spending recorded — members see it live.')),
    );
  }

  InputDecoration _fieldDec(_WalletTone tone, String label, IconData icon) {
    return InputDecoration(
      labelText: label,
      labelStyle: TextStyle(color: tone.secondaryText),
      prefixIcon: Icon(icon, color: tone.secondaryText),
      filled: true,
      fillColor: tone.fieldFill,
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: tone.fieldBorder),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: tone.accent, width: 1.5),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final tone = _WalletTone(Theme.of(context).brightness == Brightness.dark);
    final spent = _snap.spent;
    final available = _snap.available;
    final budget = math.max(_snap.collected, spent + available);
    final spentRatio = budget <= 0 ? 0.0 : (spent / budget).clamp(0.0, 1.0);
    final recent = _filteredRecent;

    return Scaffold(
      backgroundColor: tone.pageBg,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 4, 12, 0),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => NgmyNavigator.pop(context),
                    icon: Icon(Icons.arrow_back_rounded, color: tone.headerFg),
                  ),
                  Expanded(
                    child: Column(
                      children: [
                        Text(
                          'State case · ${_snap.state}',
                          style: TextStyle(color: tone.headerMuted, fontWeight: FontWeight.w600, fontSize: 12),
                        ),
                        Text('Available', style: TextStyle(color: tone.headerMuted, fontSize: 11)),
                        Text(
                          _money(available),
                          style: TextStyle(
                            color: tone.headerFg,
                            fontWeight: FontWeight.w900,
                            fontSize: 32,
                            letterSpacing: -1,
                            height: 1.05,
                          ),
                        ),
                      ],
                    ),
                  ),
                  if (widget.canEdit)
                    IconButton(
                      tooltip: 'Record spending',
                      onPressed: () => _promptSpending(),
                      icon: Container(
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                          color: tone.isDark ? Colors.white : Colors.black,
                          shape: BoxShape.circle,
                        ),
                        child: Icon(Icons.add, color: tone.isDark ? Colors.black : Colors.white),
                      ),
                    )
                  else
                    const SizedBox(width: 48),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 4, 18, 0),
              child: Text(
                'Contributions stay available until an authorized registrar records spending.',
                textAlign: TextAlign.center,
                style: TextStyle(color: tone.secondaryText, fontSize: 11, height: 1.3),
              ),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(18, 14, 18, 28),
                children: [
                  _Card(
                    tone: tone,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Monthly Budget', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 16, color: tone.primaryText)),
                        const SizedBox(height: 14),
                        Row(
                          children: [
                            Expanded(
                              child: _BudgetStat(tone: tone, label: 'Spent', value: '${_money(spent)} / ${_money(budget)}'),
                            ),
                            Expanded(
                              child: _BudgetStat(tone: tone, label: 'Available', value: _money(available), alignEnd: true),
                            ),
                          ],
                        ),
                        const SizedBox(height: 14),
                        ClipRRect(
                          borderRadius: BorderRadius.circular(99),
                          child: LinearProgressIndicator(
                            value: spentRatio,
                            minHeight: 10,
                            backgroundColor: tone.progressTrack,
                            valueColor: const AlwaysStoppedAnimation(Color(0xFFF97316)),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 14),
                  _Card(
                    tone: tone,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Expenses', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: tone.primaryText)),
                        const SizedBox(height: 14),
                        Wrap(
                          spacing: 8,
                          children: [
                            for (var i = 0; i < 4; i++)
                              ChoiceChip(
                                label: Text(const ['Day', 'Week', 'Month', 'Year'][i]),
                                selected: _range == i && _dateFilter == null,
                                onSelected: (_) => setState(() {
                                  _range = i;
                                  _dateFilter = null;
                                }),
                                selectedColor: tone.chipSelected,
                                labelStyle: TextStyle(
                                  color: (_range == i && _dateFilter == null) ? tone.chipSelectedFg : tone.secondaryText,
                                  fontWeight: FontWeight.w700,
                                  fontSize: 12,
                                ),
                                backgroundColor: tone.chipBg,
                                showCheckmark: false,
                              ),
                          ],
                        ),
                        const SizedBox(height: 18),
                        Row(
                          children: [
                            SizedBox(
                              width: 140,
                              height: 140,
                              child: CustomPaint(
                                painter: _DonutPainter(
                                  slices: _snap.categories.map((c) => _DonutSlice(c.amount, c.color)).toList(),
                                  centerLabel: 'Total',
                                  centerValue: _money(spent),
                                  labelColor: tone.secondaryText,
                                  valueColor: tone.primaryText,
                                  emptyColor: tone.progressTrack,
                                ),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                children: [
                                  if (_snap.categories.isEmpty)
                                    Text('No spending recorded yet.', style: TextStyle(color: tone.secondaryText, fontSize: 13))
                                  else
                                    for (final c in _snap.categories.take(6))
                                      Padding(
                                        padding: const EdgeInsets.only(bottom: 8),
                                        child: Row(
                                          children: [
                                            Container(width: 8, height: 8, decoration: BoxDecoration(color: c.color, shape: BoxShape.circle)),
                                            const SizedBox(width: 8),
                                            Expanded(
                                              child: Text(
                                                c.name,
                                                style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12, color: tone.secondaryText),
                                                overflow: TextOverflow.ellipsis,
                                              ),
                                            ),
                                            Text(
                                              _money(c.amount),
                                              style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: tone.primaryText),
                                            ),
                                          ],
                                        ),
                                      ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 14),
                  _Card(
                    tone: tone,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Expanded(
                              child: Text('Last Transactions', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: tone.primaryText)),
                            ),
                            IconButton(
                              tooltip: _dateFilter == null ? 'Filter dates' : 'Clear date filter',
                              visualDensity: VisualDensity.compact,
                              onPressed: () async {
                                if (_dateFilter != null) {
                                  setState(() => _dateFilter = null);
                                  return;
                                }
                                await _pickDateFilter();
                              },
                              icon: Icon(
                                Icons.tune_rounded,
                                size: 20,
                                color: _dateFilter == null ? tone.secondaryText : tone.accent,
                              ),
                            ),
                            IconButton(
                              tooltip: 'Search by name',
                              visualDensity: VisualDensity.compact,
                              onPressed: () => setState(() {
                                _searchOpen = !_searchOpen;
                                if (!_searchOpen) _searchC.clear();
                              }),
                              icon: Icon(
                                Icons.search_rounded,
                                size: 20,
                                color: _searchOpen ? tone.accent : tone.secondaryText,
                              ),
                            ),
                          ],
                        ),
                        if (_searchOpen) ...[
                          const SizedBox(height: 4),
                          TextField(
                            controller: _searchC,
                            style: TextStyle(color: tone.primaryText, fontWeight: FontWeight.w600),
                            decoration: _fieldDec(tone, 'Search contribution or spending name', Icons.search_rounded),
                          ),
                          const SizedBox(height: 8),
                        ],
                        if (_dateFilter != null)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 8),
                            child: Text(
                              'Dates: ${_dateFilter!.start.month}/${_dateFilter!.start.day}/${_dateFilter!.start.year}'
                              ' – ${_dateFilter!.end.month}/${_dateFilter!.end.day}/${_dateFilter!.end.year}',
                              style: TextStyle(color: tone.accent, fontSize: 12, fontWeight: FontWeight.w700),
                            ),
                          ),
                        if (recent.isEmpty)
                          Text(
                            'No matching activity for ${_snap.state}.',
                            style: TextStyle(color: tone.secondaryText),
                          )
                        else
                          for (final t in recent.take(20))
                            Padding(
                              padding: const EdgeInsets.only(bottom: 12),
                              child: Row(
                                children: [
                                  Container(
                                    width: 40,
                                    height: 40,
                                    decoration: BoxDecoration(color: tone.iconWell, borderRadius: BorderRadius.circular(12)),
                                    child: Icon(
                                      t.isInflow ? Icons.south_west_rounded : Icons.north_east_rounded,
                                      color: t.isInflow ? const Color(0xFF059669) : const Color(0xFFEA580C),
                                      size: 20,
                                    ),
                                  ),
                                  const SizedBox(width: 10),
                                  Expanded(
                                    child: Column(
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Text(
                                          t.title,
                                          style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14, color: tone.primaryText),
                                          overflow: TextOverflow.ellipsis,
                                        ),
                                        Text(
                                          t.isInflow ? 'Contribution' : 'Spending',
                                          style: TextStyle(color: tone.secondaryText, fontSize: 12),
                                        ),
                                      ],
                                    ),
                                  ),
                                  Text(
                                    '${t.isInflow ? '+' : '-'}${_money(t.amount.abs())}',
                                    style: TextStyle(
                                      fontWeight: FontWeight.w900,
                                      color: t.isInflow ? const Color(0xFF059669) : tone.primaryText,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                      ],
                    ),
                  ),
                  if (widget.canEdit) ...[
                    const SizedBox(height: 14),
                    _Card(
                      tone: tone,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Expanded(
                                child: Text('Registrar edits', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: tone.primaryText)),
                              ),
                              TextButton.icon(
                                onPressed: () => _promptSpending(),
                                icon: const Icon(Icons.add_rounded, size: 18),
                                label: const Text('Add'),
                              ),
                            ],
                          ),
                          Text(
                            'Record spending manually — contributions are not spent automatically.',
                            style: TextStyle(color: tone.secondaryText, fontSize: 12),
                          ),
                          const SizedBox(height: 10),
                          if (_snap.spendings.isEmpty)
                            Text('No spending rows yet.', style: TextStyle(color: tone.secondaryText))
                          else
                            for (final s in _snap.spendings)
                              ListTile(
                                contentPadding: EdgeInsets.zero,
                                title: Text(s.description, style: TextStyle(fontWeight: FontWeight.w700, color: tone.primaryText)),
                                subtitle: Text(_money(s.amount), style: TextStyle(color: tone.secondaryText)),
                                trailing: Row(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    IconButton(
                                      icon: Icon(Icons.edit_outlined, color: tone.secondaryText),
                                      onPressed: () => _promptSpending(existing: s),
                                    ),
                                    IconButton(
                                      icon: const Icon(Icons.delete_outline, color: Color(0xFFDC2626)),
                                      onPressed: () async {
                                        await widget.onDeleteSpending(s.id);
                                        if (!mounted) return;
                                        _reload();
                                      },
                                    ),
                                  ],
                                ),
                              ),
                        ],
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _BudgetStat extends StatelessWidget {
  const _BudgetStat({required this.tone, required this.label, required this.value, this.alignEnd = false});
  final _WalletTone tone;
  final String label;
  final String value;
  final bool alignEnd;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: alignEnd ? CrossAxisAlignment.end : CrossAxisAlignment.start,
      children: [
        Text(label, style: TextStyle(color: tone.secondaryText, fontSize: 12, fontWeight: FontWeight.w600)),
        const SizedBox(height: 2),
        Text(value, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: tone.primaryText)),
      ],
    );
  }
}

class _Card extends StatelessWidget {
  const _Card({required this.tone, required this.child});
  final _WalletTone tone;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(18, 16, 18, 16),
      decoration: BoxDecoration(
        color: tone.cardBg,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: tone.cardBorder),
        boxShadow: [
          if (!tone.isDark)
            BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 18, offset: const Offset(0, 8)),
        ],
      ),
      child: child,
    );
  }
}

class _DonutSlice {
  const _DonutSlice(this.value, this.color);
  final double value;
  final Color color;
}

class _DonutPainter extends CustomPainter {
  _DonutPainter({
    required this.slices,
    required this.centerLabel,
    required this.centerValue,
    required this.labelColor,
    required this.valueColor,
    required this.emptyColor,
  });
  final List<_DonutSlice> slices;
  final String centerLabel;
  final String centerValue;
  final Color labelColor;
  final Color valueColor;
  final Color emptyColor;

  @override
  void paint(Canvas canvas, Size size) {
    final center = Offset(size.width / 2, size.height / 2);
    final radius = math.min(size.width, size.height) / 2;
    final rect = Rect.fromCircle(center: center, radius: radius - 6);
    final total = slices.fold<double>(0, (s, e) => s + e.value);
    var start = -math.pi / 2;
    if (total <= 0 || slices.isEmpty) {
      canvas.drawArc(
        rect,
        0,
        math.pi * 2,
        false,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 16
          ..color = emptyColor
          ..strokeCap = StrokeCap.round,
      );
    } else {
      for (final slice in slices) {
        final sweep = (slice.value / total) * math.pi * 2;
        canvas.drawArc(
          rect,
          start,
          sweep,
          false,
          Paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 16
            ..color = slice.color
            ..strokeCap = StrokeCap.butt,
        );
        start += sweep;
      }
    }
    final tp1 = TextPainter(
      text: TextSpan(text: centerLabel, style: TextStyle(color: labelColor, fontSize: 11, fontWeight: FontWeight.w600)),
      textDirection: TextDirection.ltr,
    )..layout();
    final tp2 = TextPainter(
      text: TextSpan(text: centerValue, style: TextStyle(color: valueColor, fontSize: 13, fontWeight: FontWeight.w900)),
      textDirection: TextDirection.ltr,
    )..layout(maxWidth: radius);
    tp1.paint(canvas, Offset(center.dx - tp1.width / 2, center.dy - 12));
    tp2.paint(canvas, Offset(center.dx - tp2.width / 2, center.dy + 2));
  }

  @override
  bool shouldRepaint(covariant _DonutPainter oldDelegate) => true;
}

/// Soft mesh only used on the unlock screen (not the wallet itself).
class WalletUnlockMeshBackground extends StatelessWidget {
  const WalletUnlockMeshBackground({super.key});

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (isDark) {
      return const ColoredBox(color: Color(0xFF0A0A0A));
    }
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF7C3AED), Color(0xFF2563EB), Color(0xFFDB2777), Color(0xFFF97316)],
          stops: [0.0, 0.35, 0.7, 1.0],
        ),
      ),
      child: Stack(
        fit: StackFit.expand,
        children: [
          Positioned(top: -80, right: -40, child: _blob(220, const Color(0xFFA78BFA).withValues(alpha: 0.45))),
          Positioned(bottom: 80, left: -60, child: _blob(260, const Color(0xFF38BDF8).withValues(alpha: 0.35))),
          Positioned(bottom: -40, right: 20, child: _blob(180, const Color(0xFFF472B6).withValues(alpha: 0.4))),
        ],
      ),
    );
  }

  Widget _blob(double size, Color color) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: color,
        boxShadow: [BoxShadow(color: color, blurRadius: 60, spreadRadius: 10)],
      ),
    );
  }
}
