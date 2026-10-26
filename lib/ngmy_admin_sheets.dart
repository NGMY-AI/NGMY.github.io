import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// The pop-ups of the admin Users screen: one calm, modern look for money, confirmations, editing and referrals.
class _SheetColors {
  _SheetColors(this.dark)
      : bg = dark ? const Color(0xFF111827) : Colors.white,
        card = dark ? const Color(0xFF1B2436) : const Color(0xFFF1F5F9),
        ink = dark ? Colors.white : const Color(0xFF0F172A),
        muted = dark ? const Color(0xFF94A3B8) : const Color(0xFF64748B),
        line = dark ? const Color(0xFF2A3550) : const Color(0xFFE2E8F0);
  final bool dark;
  final Color bg, card, ink, muted, line;
}

Future<T?> _showSheet<T>(BuildContext context, bool dark, Widget Function(BuildContext, _SheetColors) build) {
  final c = _SheetColors(dark);
  return showModalBottomSheet<T>(
    context: context,
    isScrollControlled: true,
    useSafeArea: true,
    backgroundColor: Colors.transparent,
    barrierColor: Colors.black.withValues(alpha: 0.6),
    builder: (ctx) => Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(ctx).viewInsets.bottom),
      child: Container(
        constraints: const BoxConstraints(maxWidth: 520),
        decoration: BoxDecoration(
          color: c.bg,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
          border: Border.all(color: c.line),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 30)],
        ),
        child: SafeArea(
          top: false,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 10, 20, 18),
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Center(child: Container(width: 42, height: 4, margin: const EdgeInsets.only(bottom: 14), decoration: BoxDecoration(color: c.line, borderRadius: BorderRadius.circular(4)))),
              build(ctx, c),
            ]),
          ),
        ),
      ),
    ),
  );
}

Widget _header(_SheetColors c, IconData icon, Color color, String title, String? subtitle) => Row(children: [
      Container(
        width: 48,
        height: 48,
        decoration: BoxDecoration(color: color.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(16)),
        child: Icon(icon, color: color, size: 26),
      ),
      const SizedBox(width: 14),
      Expanded(
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(title, style: TextStyle(color: c.ink, fontWeight: FontWeight.w900, fontSize: 19, letterSpacing: -0.2)),
          if (subtitle != null && subtitle.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 2), child: Text(subtitle, style: TextStyle(color: c.muted, fontSize: 12.5, height: 1.3))),
        ]),
      ),
    ]);

Widget _primaryButton(String label, Color color, VoidCallback? onTap, {IconData? icon}) => SizedBox(
      height: 54,
      child: FilledButton(
        onPressed: onTap,
        style: FilledButton.styleFrom(backgroundColor: color, foregroundColor: Colors.white, disabledBackgroundColor: color.withValues(alpha: 0.3), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
        child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          if (icon != null) ...[Icon(icon, size: 20), const SizedBox(width: 8)],
          Text(label, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15.5)),
        ]),
      ),
    );

Widget _ghostButton(BuildContext ctx, _SheetColors c, String label, {VoidCallback? onTap}) => SizedBox(
      height: 46,
      child: TextButton(onPressed: onTap ?? () => Navigator.pop(ctx), child: Text(label, style: TextStyle(color: c.muted, fontWeight: FontWeight.w800))),
    );

String _money(double v) {
  final neg = v < 0;
  final fixed = v.abs().toStringAsFixed(2);
  final parts = fixed.split('.');
  final whole = parts[0].replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (m) => ',');
  return '${neg ? '-' : ''}\$$whole.${parts[1]}';
}

/// Add, remove or reimburse money. [sign] is 1 (adds), -1 (takes away) or 0 (no preview, like a credit grant).
/// Returns the amount, or null when cancelled.
Future<double?> ngmyAdminMoneySheet(
  BuildContext context, {
  required bool isDark,
  required String title,
  required String subtitle,
  required IconData icon,
  required Color color,
  required String confirmLabel,
  required double balance,
  int sign = 1,
  String balanceLabel = 'Current balance',
}) {
  final ctrl = TextEditingController();
  return _showSheet<double>(context, isDark, (ctx, c) {
    return StatefulBuilder(builder: (ctx, setS) {
      final amt = double.tryParse(ctrl.text.replaceAll(',', '').trim()) ?? 0;
      final after = sign == 0 ? balance : (balance + sign * amt).clamp(0.0, double.infinity);
      final tooMuch = sign < 0 && amt > balance + 0.0001;
      void quick(double v) => setS(() => ctrl.text = v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(2));
      return Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        _header(c, icon, color, title, subtitle),
        const SizedBox(height: 18),
        Container(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
          decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(20), border: Border.all(color: tooMuch ? const Color(0xFFEF4444) : color.withValues(alpha: 0.5), width: 1.4)),
          child: Row(children: [
            Text('\$', style: TextStyle(color: color, fontSize: 34, fontWeight: FontWeight.w900)),
            const SizedBox(width: 6),
            Expanded(
              child: TextField(
                controller: ctrl,
                autofocus: true,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[0-9.]')), LengthLimitingTextInputFormatter(10)],
                onChanged: (_) => setS(() {}),
                style: TextStyle(color: c.ink, fontSize: 34, fontWeight: FontWeight.w900),
                decoration: InputDecoration(border: InputBorder.none, isDense: true, hintText: '0.00', hintStyle: TextStyle(color: c.muted.withValues(alpha: 0.5), fontSize: 34, fontWeight: FontWeight.w900)),
              ),
            ),
          ]),
        ),
        const SizedBox(height: 12),
        Wrap(spacing: 8, runSpacing: 8, children: [
          for (final v in const [5.0, 10.0, 25.0, 50.0, 100.0, 500.0])
            ActionChip(
              label: Text('\$${v.toStringAsFixed(0)}', style: TextStyle(color: color, fontWeight: FontWeight.w800)),
              backgroundColor: color.withValues(alpha: 0.12),
              side: BorderSide(color: color.withValues(alpha: 0.35)),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
              onPressed: () => quick(v),
            ),
        ]),
        if (sign != 0) ...[
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(16)),
            child: Row(children: [
              Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(balanceLabel, style: TextStyle(color: c.muted, fontSize: 11.5, fontWeight: FontWeight.w700)),
                const SizedBox(height: 3),
                Text(_money(balance), style: TextStyle(color: c.ink, fontSize: 17, fontWeight: FontWeight.w900)),
              ])),
              Icon(Icons.arrow_forward_rounded, color: c.muted),
              Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                Text('New balance', style: TextStyle(color: c.muted, fontSize: 11.5, fontWeight: FontWeight.w700)),
                const SizedBox(height: 3),
                Text(_money(after), style: TextStyle(color: amt > 0 ? color : c.ink, fontSize: 17, fontWeight: FontWeight.w900)),
              ])),
            ]),
          ),
        ],
        if (tooMuch)
          Padding(padding: const EdgeInsets.only(top: 8), child: Text('That is more than the balance. The balance will be set to \$0.00.', style: const TextStyle(color: Color(0xFFF59E0B), fontSize: 12, fontWeight: FontWeight.w700))),
        const SizedBox(height: 16),
        _primaryButton(confirmLabel, color, amt > 0 ? () => Navigator.pop(ctx, amt) : null, icon: icon),
        _ghostButton(ctx, c, 'Cancel'),
      ]);
    });
  });
}

/// A clear yes / no question. [notes] are short reassurance lines shown with a check mark.
Future<bool> ngmyAdminConfirmSheet(
  BuildContext context, {
  required bool isDark,
  required String title,
  required String message,
  required IconData icon,
  required Color color,
  required String confirmLabel,
  List<String> notes = const [],
}) async {
  final r = await _showSheet<bool>(context, isDark, (ctx, c) {
    return Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      _header(c, icon, color, title, null),
      const SizedBox(height: 14),
      Text(message, style: TextStyle(color: c.ink, fontSize: 14.5, height: 1.45)),
      if (notes.isNotEmpty) ...[
        const SizedBox(height: 12),
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(color: const Color(0xFF22C55E).withValues(alpha: 0.10), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: 0.3))),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            for (final n in notes)
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 3),
                child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Icon(Icons.check_circle_rounded, color: Color(0xFF22C55E), size: 18),
                  const SizedBox(width: 8),
                  Expanded(child: Text(n, style: TextStyle(color: c.ink, fontSize: 13, height: 1.35))),
                ]),
              ),
          ]),
        ),
      ],
      const SizedBox(height: 18),
      _primaryButton(confirmLabel, color, () => Navigator.pop(ctx, true), icon: icon),
      _ghostButton(ctx, c, 'Cancel', onTap: () => Navigator.pop(ctx, false)),
    ]);
  });
  return r == true;
}

/// Edit the basic details of an account. Returns the new values, or null when cancelled.
Future<Map<String, String>?> ngmyAdminEditUserSheet(
  BuildContext context, {
  required bool isDark,
  required String username,
  required String email,
  required String phone,
  required String fullName,
  List<TextInputFormatter> phoneFormatters = const [],
}) {
  final nameC = TextEditingController(text: username);
  final emailC = TextEditingController(text: email);
  final phoneC = TextEditingController(text: phone);
  final fullC = TextEditingController(text: fullName);
  return _showSheet<Map<String, String>>(context, isDark, (ctx, c) {
    InputDecoration deco(String label, IconData icon) => InputDecoration(
          labelText: label,
          labelStyle: TextStyle(color: c.muted),
          prefixIcon: Icon(icon, color: c.muted, size: 20),
          filled: true,
          fillColor: c.card,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
          focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: Color(0xFF6366F1), width: 1.6)),
        );
    Widget field(TextEditingController ctl, String label, IconData icon, {TextInputType? type, List<TextInputFormatter>? fmt}) => Padding(
          padding: const EdgeInsets.only(bottom: 12),
          child: TextField(controller: ctl, keyboardType: type, inputFormatters: fmt, style: TextStyle(color: c.ink, fontWeight: FontWeight.w600), decoration: deco(label, icon)),
        );
    return Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      _header(c, Icons.edit_rounded, const Color(0xFF6366F1), 'Edit user', 'Change the name, email or phone of this account'),
      const SizedBox(height: 18),
      field(nameC, 'Username', Icons.alternate_email_rounded),
      field(fullC, 'Full name', Icons.badge_outlined),
      field(emailC, 'Email', Icons.mail_outline_rounded, type: TextInputType.emailAddress),
      field(phoneC, 'Phone number', Icons.phone_outlined, type: TextInputType.phone, fmt: phoneFormatters),
      const SizedBox(height: 4),
      _primaryButton('Save changes', const Color(0xFF6366F1), () => Navigator.pop(ctx, {'username': nameC.text, 'email': emailC.text, 'phone': phoneC.text, 'fullName': fullC.text}), icon: Icons.check_rounded),
      _ghostButton(ctx, c, 'Cancel'),
    ]);
  });
}

/// The people this user referred.
Future<void> ngmyAdminReferralsSheet(
  BuildContext context, {
  required bool isDark,
  required String name,
  required String code,
  required int total,
  required List<(String, String)> people,
}) {
  return _showSheet<void>(context, isDark, (ctx, c) {
    return Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      _header(c, Icons.link_rounded, const Color(0xFF06B6D4), 'Referrals', name),
      const SizedBox(height: 16),
      Row(children: [
        Expanded(child: _stat(c, 'Code', code)),
        const SizedBox(width: 10),
        Expanded(child: _stat(c, 'Total referrals', '$total')),
      ]),
      const SizedBox(height: 14),
      if (people.isEmpty)
        Padding(padding: const EdgeInsets.symmetric(vertical: 10), child: Text('No referred users yet.', style: TextStyle(color: c.muted)))
      else
        for (final p in people)
          Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(14)),
            child: Row(children: [
              CircleAvatar(radius: 16, backgroundColor: const Color(0xFF06B6D4).withValues(alpha: 0.2), child: Text(p.$1.isEmpty ? '?' : p.$1[0].toUpperCase(), style: const TextStyle(color: Color(0xFF06B6D4), fontWeight: FontWeight.w900))),
              const SizedBox(width: 10),
              Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(p.$1, style: TextStyle(color: c.ink, fontWeight: FontWeight.w800)),
                Text(p.$2, style: TextStyle(color: c.muted, fontSize: 12)),
              ])),
            ]),
          ),
      const SizedBox(height: 8),
      _ghostButton(ctx, c, 'Close'),
    ]);
  });
}

Widget _stat(_SheetColors c, String label, String value) => Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: c.card, borderRadius: BorderRadius.circular(16)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(label, style: TextStyle(color: c.muted, fontSize: 11.5, fontWeight: FontWeight.w700)),
        const SizedBox(height: 3),
        Text(value, style: TextStyle(color: c.ink, fontSize: 15, fontWeight: FontWeight.w900)),
      ]),
    );
