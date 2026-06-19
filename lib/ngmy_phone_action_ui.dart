import 'package:flutter/material.dart';

import 'ngmy_phone_integrations.dart';

String ngmyFormatPhoneDisplay(String phone) {
  final digits = phone.replaceAll(RegExp(r'[^\d]'), '');
  if (digits.length == 10) {
    return '(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6)}';
  }
  if (digits.length == 11 && digits.startsWith('1')) {
    return '+1 (${digits.substring(1, 4)}) ${digits.substring(4, 7)}-${digits.substring(7)}';
  }
  return phone.trim();
}

Color _accentForType(String type) => switch (type) {
      'calendar' => const Color(0xFF00B25A),
      'alarm' => const Color(0xFFF97316),
      'call' => const Color(0xFF2563EB),
      'sms' => const Color(0xFF7C3AED),
      'whatsapp' => const Color(0xFF25D366),
      'email' => const Color(0xFFEA580C),
      'maps' => const Color(0xFF0891B2),
      _ => const Color(0xFF00B25A),
    };

String _headlineFor(NgmyPhoneAction action) => switch (action.type) {
      'calendar' => 'Add to iPhone Calendar',
      'alarm' => 'Set wake-up alarm',
      'call' => 'Place a phone call',
      'sms' => 'Send iMessage / text',
      'whatsapp' => 'Send WhatsApp message',
      'email' => 'Compose an email',
      'maps' => 'Open in Maps',
      'open_url' => 'Open link',
      _ => action.label,
    };

String _subtitleFor(NgmyPhoneAction action) => switch (action.type) {
      'calendar' =>
        'Tap continue — iPhone will ask if ngmy.org may show a calendar invite. Tap Allow, then Add.',
      'alarm' =>
        'NGMY opens your Calendar with a ringing alert at the wake time. On iPhone tap Allow / Add on the calendar prompt (Apple does not allow apps to write inside the Clock app). On Android, Clock may open too.',
      'call' => 'Opens your Phone app to call this contact.',
      'sms' => 'Opens Messages / iMessage with this person.',
      'whatsapp' => 'Opens WhatsApp with this person and your message.',
      'email' => 'This opens Mail with the address filled in.',
      'maps' => 'This opens Maps for this location.',
      'open_url' => 'This opens the link in your browser.',
      _ => 'Continue to connect with an app on your phone.',
    };

String _primaryLabelFor(NgmyPhoneAction action) => switch (action.type) {
      'calendar' => 'Show calendar invite',
      'alarm' => 'Set wake alarm',
      'call' => 'Call now',
      'sms' => 'Open Messages',
      'whatsapp' => 'Open WhatsApp',
      'email' => 'Open Mail',
      'maps' => 'Open Maps',
      'open_url' => 'Open link',
      _ => 'Continue',
    };

Widget _detailCard(NgmyPhoneAction action, Color accent, bool isDark) {
  final detail = switch (action.type) {
    'call' || 'sms' || 'whatsapp' => action.summary,
    _ => action.summary,
  };
  return Container(
    width: double.infinity,
    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
    decoration: BoxDecoration(
      color: isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC),
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: accent.withValues(alpha: 0.28)),
    ),
    child: Row(
      children: [
        Container(
          width: 42,
          height: 42,
          decoration: BoxDecoration(
            color: accent.withValues(alpha: 0.14),
            borderRadius: BorderRadius.circular(12),
          ),
          child: Icon(action.icon, color: accent, size: 22),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Text(
            detail,
            style: TextStyle(
              fontSize: action.type == 'call' || action.type == 'sms' ? 18 : 15,
              fontWeight: FontWeight.w700,
              letterSpacing: action.type == 'call' || action.type == 'sms' ? 0.3 : 0,
              color: isDark ? Colors.white : const Color(0xFF0F172A),
              height: 1.25,
            ),
          ),
        ),
      ],
    ),
  );
}

/// Modern NGMY bottom sheet for phone actions (call, calendar, sms, email).
Future<bool> ngmyShowPhoneActionSheet({
  required BuildContext context,
  required NgmyPhoneAction action,
}) async {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  final accent = _accentForType(action.type);

  final result = await showModalBottomSheet<bool>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: Container(
          margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF1C2433) : Colors.white,
            borderRadius: BorderRadius.circular(24),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.18),
                blurRadius: 28,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: SafeArea(
            top: false,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(22, 10, 22, 20),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    width: 40,
                    height: 4,
                    decoration: BoxDecoration(
                      color: isDark ? Colors.white24 : const Color(0xFFE2E8F0),
                      borderRadius: BorderRadius.circular(99),
                    ),
                  ),
                  const SizedBox(height: 18),
                  Container(
                    width: 64,
                    height: 64,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [accent, accent.withValues(alpha: 0.72)],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      borderRadius: BorderRadius.circular(20),
                      boxShadow: [
                        BoxShadow(
                          color: accent.withValues(alpha: 0.35),
                          blurRadius: 16,
                          offset: const Offset(0, 6),
                        ),
                      ],
                    ),
                    child: Icon(action.icon, color: Colors.white, size: 30),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    _headlineFor(action),
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w800,
                      color: isDark ? Colors.white : const Color(0xFF0F172A),
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    _subtitleFor(action),
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 13,
                      height: 1.4,
                      color: isDark ? Colors.white60 : const Color(0xFF64748B),
                    ),
                  ),
                  const SizedBox(height: 18),
                  _detailCard(action, accent, isDark),
                  const SizedBox(height: 20),
                  SizedBox(
                    width: double.infinity,
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [accent, accent.withValues(alpha: 0.85)],
                        ),
                        borderRadius: BorderRadius.circular(14),
                        boxShadow: [
                          BoxShadow(
                            color: accent.withValues(alpha: 0.32),
                            blurRadius: 12,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      child: Material(
                        color: Colors.transparent,
                        child: InkWell(
                          borderRadius: BorderRadius.circular(14),
                          onTap: () => Navigator.pop(ctx, true),
                          child: Padding(
                            padding: const EdgeInsets.symmetric(vertical: 15),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(action.icon, color: Colors.white, size: 20),
                                const SizedBox(width: 8),
                                Text(
                                  _primaryLabelFor(action),
                                  style: const TextStyle(
                                    color: Colors.white,
                                    fontSize: 15,
                                    fontWeight: FontWeight.w800,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 6),
                  TextButton(
                    onPressed: () => Navigator.pop(ctx, false),
                    child: Text(
                      'Not now',
                      style: TextStyle(
                        color: isDark ? Colors.white54 : const Color(0xFF94A3B8),
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    },
  );
  return result == true;
}

/// Calendar-specific entry — same modern sheet, then native invite on continue.
Future<void> ngmyPresentPhoneCalendarSheet({
  required BuildContext context,
  required NgmyPhoneAction action,
  required Future<void> Function(String? result) onDone,
}) async {
  if (!context.mounted) return;
  final ok = await ngmyShowPhoneActionSheet(context: context, action: action);
  if (!ok || !context.mounted) return;
  final result = await ngmyRunPhoneAction(action, skipConfirmation: true);
  await onDone(result);
}

/// Wake alarm entry — confirm sheet, then schedule notification.
Future<void> ngmyPresentPhoneAlarmSheet({
  required BuildContext context,
  required NgmyPhoneAction action,
  required String userEmail,
  required Future<void> Function(String? result) onDone,
}) async {
  if (!context.mounted) return;
  final ok = await ngmyShowPhoneActionSheet(context: context, action: action);
  if (!ok || !context.mounted) return;
  final result = await ngmyRunPhoneAction(action, skipConfirmation: true, userEmail: userEmail);
  await onDone(result);
}
