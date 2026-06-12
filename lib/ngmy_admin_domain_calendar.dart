import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Admin domain renewal calendar — local only (SharedPreferences).
class NgmyDomainReminderSettings {
  const NgmyDomainReminderSettings({required this.expiryDate, this.note = ''});

  final DateTime expiryDate;
  final String note;

  Map<String, dynamic> toJson() => {
        'expiryDate': expiryDate.toUtc().toIso8601String(),
        'note': note,
      };

  factory NgmyDomainReminderSettings.fromJson(Map<String, dynamic> json) {
    final raw = json['expiryDate']?.toString() ?? '';
    final parsed = DateTime.tryParse(raw);
    return NgmyDomainReminderSettings(
      expiryDate: parsed ?? DateTime(2029, 6, 11),
      note: (json['note'] ?? '').toString(),
    );
  }
}

class NgmyDomainReminderStore {
  static const _prefsKey = 'ngmy_domain_renewal_reminder_v1';

  static Future<NgmyDomainReminderSettings> load() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw != null && raw.trim().isNotEmpty) {
        final decoded = jsonDecode(raw);
        if (decoded is Map) {
          return NgmyDomainReminderSettings.fromJson(Map<String, dynamic>.from(decoded));
        }
      }
    } catch (_) {}
    return NgmyDomainReminderSettings(expiryDate: DateTime(2029, 6, 11));
  }

  static Future<void> save(NgmyDomainReminderSettings settings) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_prefsKey, jsonEncode(settings.toJson()));
  }
}

String ngmyFormatDomainDate(DateTime d) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return '${months[d.month - 1]} ${d.day}, ${d.year}';
}

/// Runs on app open for admin — notifies 1 day before and on expiry day.
Future<void> ngmyRunDomainRenewalReminderIfNeeded({
  required bool isAdmin,
  required Future<void> Function(String title, String body) onNotify,
}) async {
  if (!isAdmin) return;
  final settings = await NgmyDomainReminderStore.load();
  final now = DateTime.now();
  final expiry = DateTime(settings.expiryDate.year, settings.expiryDate.month, settings.expiryDate.day);
  final today = DateTime(now.year, now.month, now.day);
  final daysUntil = expiry.difference(today).inDays;

  if (daysUntil == 1) {
    await onNotify(
      'ngmy.org renews tomorrow',
      'Your domain expires on ${ngmyFormatDomainDate(expiry)}. Renew at your registrar so NGMY stays online.',
    );
  } else if (daysUntil == 0) {
    await onNotify(
      'ngmy.org expires today',
      'Renew your domain today (${ngmyFormatDomainDate(expiry)}) or the site may go offline.',
    );
  } else if (daysUntil < 0) {
    await onNotify(
      'ngmy.org domain overdue',
      'Domain expired ${daysUntil.abs()} day(s) ago. Renew immediately at your registrar.',
    );
  }
}

class NgmyAdminDomainCalendarPanel extends StatefulWidget {
  const NgmyAdminDomainCalendarPanel({super.key, required this.isDark});

  final bool isDark;

  @override
  State<NgmyAdminDomainCalendarPanel> createState() => _NgmyAdminDomainCalendarPanelState();
}

class _NgmyAdminDomainCalendarPanelState extends State<NgmyAdminDomainCalendarPanel> {
  NgmyDomainReminderSettings? _settings;
  bool _loading = true;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final s = await NgmyDomainReminderStore.load();
    if (!mounted) return;
    setState(() {
      _settings = s;
      _loading = false;
    });
  }

  Future<void> _pickDate() async {
    final current = _settings?.expiryDate ?? DateTime(2029, 6, 11);
    final picked = await showDatePicker(
      context: context,
      initialDate: current,
      firstDate: DateTime(2026),
      lastDate: DateTime(2040),
      helpText: 'Domain expiry date',
    );
    if (picked == null || !mounted) return;
    setState(() => _settings = NgmyDomainReminderSettings(expiryDate: picked, note: _settings?.note ?? ''));
  }

  Future<void> _save() async {
    final s = _settings;
    if (s == null) return;
    setState(() => _saving = true);
    await NgmyDomainReminderStore.save(s);
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Domain calendar saved on this device.'), backgroundColor: Color(0xFF16A34A)),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_loading || _settings == null) {
      return const Center(child: CircularProgressIndicator());
    }

    final isDark = widget.isDark;
    final expiry = _settings!.expiryDate;
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final expiryDay = DateTime(expiry.year, expiry.month, expiry.day);
    final daysLeft = expiryDay.difference(today).inDays;
    final accent = daysLeft <= 1 ? const Color(0xFFEF4444) : (daysLeft <= 30 ? const Color(0xFFF59E0B) : const Color(0xFF06B6D4));

    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 32),
      children: [
        Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(
              colors: isDark
                  ? [const Color(0xFF0C4A6E), const Color(0xFF134E4A), const Color(0xFF1E1B4B)]
                  : [const Color(0xFFECFEFF), const Color(0xFFE0F2FE), const Color(0xFFF5F3FF)],
            ),
            border: Border.all(color: accent.withValues(alpha: 0.45)),
            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.15), blurRadius: 20, offset: const Offset(0, 8))],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: accent.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12)),
                    child: Icon(Icons.calendar_month_rounded, color: accent, size: 28),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'ngmy.org domain',
                          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                        ),
                        Text(
                          'Renewal countdown & reminders',
                          style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              Text(
                daysLeft < 0 ? 'OVERDUE' : (daysLeft == 0 ? 'EXPIRES TODAY' : 'TIME REMAINING'),
                style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2, color: accent),
              ),
              const SizedBox(height: 6),
              Text(
                daysLeft < 0
                    ? '${daysLeft.abs()} days past expiry'
                    : daysLeft == 0
                        ? 'Renew today'
                        : '$daysLeft days left',
                style: TextStyle(fontWeight: FontWeight.w900, fontSize: 36, color: isDark ? Colors.white : const Color(0xFF0F172A)),
              ),
              const SizedBox(height: 8),
              Text(
                'Expires ${ngmyFormatDomainDate(expiry)}',
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : Colors.black87),
              ),
            ],
          ),
        ),
        const SizedBox(height: 16),
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF151922) : Colors.white,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('Reminder rules', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
              const SizedBox(height: 8),
              Text(
                '• Saved on this device only\n'
                '• Notification 1 day before expiry\n'
                '• Notification again on expiry day\n'
                '• Shows each time you open NGMY (admin)',
                style: TextStyle(fontSize: 12, height: 1.45, color: isDark ? Colors.white60 : Colors.black54),
              ),
              const SizedBox(height: 16),
              OutlinedButton.icon(
                onPressed: _pickDate,
                icon: const Icon(Icons.event_rounded),
                label: Text('Set expiry date (${ngmyFormatDomainDate(expiry)})'),
              ),
              const SizedBox(height: 10),
              FilledButton.icon(
                onPressed: _saving ? null : _save,
                icon: _saving
                    ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Icon(Icons.save_rounded),
                label: const Text('Save calendar'),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF06B6D4), minimumSize: const Size(double.infinity, 48)),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
