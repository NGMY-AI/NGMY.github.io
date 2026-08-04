import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_hud_tech_shell.dart';
import 'ngmy_stripe_payments.dart';

abstract final class NgmyPhoneUnlockColors {
  static const sky = Color(0xFF0EA5E9);
  static const indigo = Color(0xFF6366F1);
  static const violet = Color(0xFF8B5CF6);
  static const deep = Color(0xFF0B1020);
  static const panel = Color(0xFF111827);
}

Future<void> showNgmyPhoneUnlock(
  BuildContext context, {
  required String userEmail,
  bool isAdmin = false,
}) async {
  final email = userEmail.trim();
  if (email.isEmpty) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Sign in to use Phone Unlock.'),
        behavior: SnackBarBehavior.floating,
      ),
    );
    return;
  }

  final paid = await NgmyStripePayments.ensurePaid(
    context: context,
    product: NgmyStripeProduct.phoneUnlock,
    email: email,
    isAdmin: isAdmin,
  );
  if (!paid || !context.mounted) return;

  await Navigator.of(context).push<void>(
    MaterialPageRoute<void>(builder: (_) => const NgmyPhoneUnlockPage()),
  );
}

/// Opens Android Settings on the user's phone (best effort).
Future<bool> ngmyOpenPhoneSettings() => _tryLaunch([
  'intent:#Intent;action=android.settings.SETTINGS;end',
  'intent:#Intent;action=android.settings.SETTINGS;category=android.intent.category.DEFAULT;end',
  if (!kIsWeb && Platform.isIOS) 'app-settings:',
]);

/// Opens Google Chrome on the user's phone (best effort).
Future<bool> ngmyOpenPhoneChrome() => _tryLaunch([
  'intent:#Intent;package=com.android.chrome;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;end',
  'googlechrome://navigate?url=https://www.google.com',
  'googlechrome://',
  if (!kIsWeb && Platform.isIOS) 'googlechrome://',
  'https://www.google.com',
]);

/// Opens the Google app or Google home in the browser (best effort).
Future<bool> ngmyOpenPhoneGoogle() => _tryLaunch([
  'intent:#Intent;package=com.google.android.googlequicksearchbox;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;end',
  'intent:#Intent;action=android.intent.action.VIEW;data=https://www.google.com;package=com.google.android.googlequicksearchbox;end',
  'https://www.google.com',
]);

Future<bool> ngmyOpenGoogleAccountRecovery() => _tryLaunch([
  'intent:#Intent;action=android.intent.action.VIEW;data=https://accounts.google.com/signin/recovery;end',
  'https://accounts.google.com/signin/recovery',
]);

Future<bool> ngmyOpenPhoneWifiSettings() => _tryLaunch([
  'intent:#Intent;action=android.settings.WIFI_SETTINGS;end',
  'intent:#Intent;action=android.settings.WIRELESS_SETTINGS;end',
]);

Future<bool> _tryLaunch(List<String> candidates) async {
  for (final raw in candidates) {
    try {
      final uri = Uri.parse(raw);
      if (await canLaunchUrl(uri)) {
        final ok = await launchUrl(uri, mode: LaunchMode.externalApplication);
        if (ok) return true;
      }
    } catch (e) {
      debugPrint('[phone_unlock] launch failed ($raw): $e');
    }
  }
  return false;
}

class NgmyPhoneUnlockPage extends StatelessWidget {
  const NgmyPhoneUnlockPage({super.key});

  static const _accent = [NgmyPhoneUnlockColors.sky, NgmyPhoneUnlockColors.indigo, NgmyPhoneUnlockColors.violet];

  Future<void> _launch(BuildContext context, {required String label, required Future<bool> Function() open}) async {
    final ok = await open();
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          ok ? 'Opening $label on your phone…' : 'Could not open $label — try from your Android phone with NGMY installed.',
        ),
        behavior: SnackBarBehavior.floating,
        duration: const Duration(seconds: 3),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return Scaffold(
          backgroundColor: NgmyPhoneUnlockColors.deep,
          body: SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                NgmyToolkitAliveHeader(
                  title: 'Phone Unlock',
                  subtitle: 'Google lock help · quick links',
                  colors: _accent,
                  pulse: pulse,
                  orbit: orbit,
                  icon: Icons.phonelink_lock_rounded,
                  onClose: () => Navigator.pop(context),
                ),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(18, 8, 18, 28),
                    children: [
                      _HeroCard(pulse: pulse),
                      const SizedBox(height: 18),
                      Text(
                        'Open on your phone',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.92),
                          fontWeight: FontWeight.w900,
                          fontSize: 16,
                          letterSpacing: 0.2,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        'Tap a button — it launches Settings, Chrome, or Google right away on your Android phone.',
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12.5, height: 1.45),
                      ),
                      const SizedBox(height: 14),
                      _QuickOpenButton(
                        label: 'Open Google',
                        subtitle: 'Google app or google.com',
                        icon: Icons.travel_explore_rounded,
                        colors: const [Color(0xFF4285F4), Color(0xFF34A853)],
                        pulse: pulse,
                        onTap: () => _launch(context, label: 'Google', open: ngmyOpenPhoneGoogle),
                      ),
                      const SizedBox(height: 10),
                      _QuickOpenButton(
                        label: 'Open Google Chrome',
                        subtitle: 'Browser for account recovery',
                        icon: Icons.language_rounded,
                        colors: const [Color(0xFFEA4335), Color(0xFFFBBC04), Color(0xFF34A853)],
                        pulse: pulse,
                        onTap: () => _launch(context, label: 'Chrome', open: ngmyOpenPhoneChrome),
                      ),
                      const SizedBox(height: 10),
                      _QuickOpenButton(
                        label: 'Open Settings',
                        subtitle: 'Phone system settings',
                        icon: Icons.settings_rounded,
                        colors: const [Color(0xFF64748B), Color(0xFF334155)],
                        pulse: pulse,
                        onTap: () => _launch(context, label: 'Settings', open: ngmyOpenPhoneSettings),
                      ),
                      const SizedBox(height: 24),
                      Text(
                        'Unlock tools',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.92),
                          fontWeight: FontWeight.w900,
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(height: 10),
                      _ToolTile(
                        icon: Icons.wifi_rounded,
                        title: 'Wi‑Fi settings',
                        body: 'Connect to internet during setup so Google can verify your account.',
                        onTap: () => _launch(context, label: 'Wi‑Fi settings', open: ngmyOpenPhoneWifiSettings),
                      ),
                      _ToolTile(
                        icon: Icons.manage_accounts_rounded,
                        title: 'Google account recovery',
                        body: 'Reset your password with email, phone, or backup codes — use the account that was on this phone before the reset.',
                        onTap: () => _launch(context, label: 'Account recovery', open: ngmyOpenGoogleAccountRecovery),
                      ),
                      _ToolTile(
                        icon: Icons.timer_rounded,
                        title: 'Wait after factory reset',
                        body: 'If you just reset the phone, Google may need 24–72 hours before the same account can sign in again.',
                        onTap: null,
                      ),
                      _ToolTile(
                        icon: Icons.verified_user_rounded,
                        title: 'Use the original Google account',
                        body: 'Enter the exact Gmail that was signed in before the lock. A different account will not remove Factory Reset Protection.',
                        onTap: null,
                      ),
                      const SizedBox(height: 18),
                      _StepsCard(pulse: pulse, scan: scan, orbit: orbit),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _HeroCard extends StatelessWidget {
  const _HeroCard({required this.pulse});

  final double pulse;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            NgmyPhoneUnlockColors.indigo.withValues(alpha: 0.35 + pulse * 0.08),
            NgmyPhoneUnlockColors.violet.withValues(alpha: 0.22),
          ],
        ),
        border: Border.all(color: NgmyPhoneUnlockColors.sky.withValues(alpha: 0.35)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              gradient: const LinearGradient(colors: NgmyPhoneUnlockPage._accent),
            ),
            child: const Icon(Icons.lock_open_rounded, color: Colors.white, size: 26),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Stuck on Google account lock?',
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15.5, height: 1.25),
                ),
                const SizedBox(height: 6),
                Text(
                  'Use the quick links below to jump to Google, Chrome, or Settings. Then recover the Gmail that was on this phone before the reset.',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 12.5, height: 1.45),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _QuickOpenButton extends StatelessWidget {
  const _QuickOpenButton({
    required this.label,
    required this.subtitle,
    required this.icon,
    required this.colors,
    required this.pulse,
    required this.onTap,
  });

  final String label;
  final String subtitle;
  final IconData icon;
  final List<Color> colors;
  final double pulse;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            gradient: LinearGradient(
              begin: Alignment.centerLeft,
              end: Alignment.centerRight,
              colors: colors.map((c) => c.withValues(alpha: 0.88 + pulse * 0.06)).toList(),
            ),
            boxShadow: [
              BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 6)),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
            child: Row(
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.18),
                    borderRadius: BorderRadius.circular(14),
                  ),
                  child: Icon(icon, color: Colors.white, size: 24),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                      const SizedBox(height: 2),
                      Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 12)),
                    ],
                  ),
                ),
                Icon(Icons.open_in_new_rounded, color: Colors.white.withValues(alpha: 0.9), size: 22),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _ToolTile extends StatelessWidget {
  const _ToolTile({
    required this.icon,
    required this.title,
    required this.body,
    this.onTap,
  });

  final IconData icon;
  final String title;
  final String body;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Material(
        color: NgmyPhoneUnlockColors.panel,
        borderRadius: BorderRadius.circular(16),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(16),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(icon, color: NgmyPhoneUnlockColors.sky, size: 22),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                      const SizedBox(height: 4),
                      Text(body, style: TextStyle(color: Colors.white.withValues(alpha: 0.62), fontSize: 12.5, height: 1.4)),
                    ],
                  ),
                ),
                if (onTap != null) Icon(Icons.chevron_right_rounded, color: Colors.white.withValues(alpha: 0.45)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _StepsCard extends StatelessWidget {
  const _StepsCard({required this.pulse, required this.scan, required this.orbit});

  final double pulse;
  final double scan;
  final double orbit;

  @override
  Widget build(BuildContext context) {
    const steps = [
      'Tap Open Settings and connect Wi‑Fi if you are still in setup.',
      'Tap Open Google Chrome, then go to Account recovery if you forgot your password.',
      'Sign in with the same Google account that was on this phone before the reset.',
      'If it still says "This device was reset," wait up to 72 hours and try again with the original account.',
    ];
    return NgmyToolkitAlivePanel(
      colors: NgmyPhoneUnlockPage._accent,
      pulse: pulse,
      scan: scan,
      orbit: orbit,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Step-by-step', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
            const SizedBox(height: 12),
            for (var i = 0; i < steps.length; i++) ...[
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 24,
                    height: 24,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: NgmyPhoneUnlockColors.sky.withValues(alpha: 0.25),
                      border: Border.all(color: NgmyPhoneUnlockColors.sky.withValues(alpha: 0.6)),
                    ),
                    child: Text('${i + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11)),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Text(steps[i], style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 12.5, height: 1.45)),
                    ),
                  ),
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }
}
