import 'package:flutter/material.dart';

/// Registrar-controlled Civic Registry login: session kick, timed lock, removed block.
enum NgmyCivicAccessKind { ok, removed, deceased, locked, loggedOut }

enum NgmyCivicAccessAction { logout, lock, lift }

class NgmyCivicAccessStatus {
  const NgmyCivicAccessStatus({
    required this.kind,
    this.lockedUntil,
    this.sessionEpoch,
  });

  final NgmyCivicAccessKind kind;
  final DateTime? lockedUntil;
  final DateTime? sessionEpoch;

  bool get allowsLogin => kind == NgmyCivicAccessKind.ok || kind == NgmyCivicAccessKind.loggedOut;

  bool get invalidatesStoredUnlock =>
      kind == NgmyCivicAccessKind.removed ||
      kind == NgmyCivicAccessKind.deceased ||
      kind == NgmyCivicAccessKind.locked ||
      kind == NgmyCivicAccessKind.loggedOut;

  String get message {
    switch (kind) {
      case NgmyCivicAccessKind.removed:
        return 'You were removed from Civic Registry and cannot log in.';
      case NgmyCivicAccessKind.deceased:
        return 'This Civic Registry record is closed and cannot be used to log in.';
      case NgmyCivicAccessKind.locked:
        final until = lockedUntil?.toLocal();
        if (until == null) {
          return 'You are blocked from Civic Registry. Contact your authorized registrar.';
        }
        return 'You are blocked from Civic Registry until ${formatAccessUntil(until)}.';
      case NgmyCivicAccessKind.loggedOut:
        return 'You were logged out of Civic Registry. Enter your PIN, name, date of birth, and Registry ID again.';
      case NgmyCivicAccessKind.ok:
        return '';
    }
  }
}

class NgmyCivicAccessDuration {
  const NgmyCivicAccessDuration(this.label, this.duration);
  final String label;
  final Duration duration;
}

const List<NgmyCivicAccessDuration> kNgmyCivicAccessDurations = [
  NgmyCivicAccessDuration('1 hour', Duration(hours: 1)),
  NgmyCivicAccessDuration('6 hours', Duration(hours: 6)),
  NgmyCivicAccessDuration('12 hours', Duration(hours: 12)),
  NgmyCivicAccessDuration('1 day', Duration(days: 1)),
  NgmyCivicAccessDuration('3 days', Duration(days: 3)),
  NgmyCivicAccessDuration('7 days', Duration(days: 7)),
  NgmyCivicAccessDuration('30 days', Duration(days: 30)),
];

String formatAccessUntil(DateTime local) {
  final m = local.month.toString().padLeft(2, '0');
  final d = local.day.toString().padLeft(2, '0');
  var hour = local.hour;
  final ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  if (hour == 0) hour = 12;
  final min = local.minute.toString().padLeft(2, '0');
  return '$m/$d/${local.year} $hour:$min $ampm';
}

class NgmyCivicRegistryAccess {
  static const accessKeys = [
    'accessControlAt',
    'accessSessionEpoch',
    'accessLockedUntil',
    'accessLockedBy',
    'accessLockHours',
    'accessLockLiftedAt',
  ];

  static DateTime? parseStamp(dynamic raw) {
    final s = (raw ?? '').toString().trim();
    if (s.isEmpty) return null;
    return DateTime.tryParse(s);
  }

  static DateTime? lockedUntilOf(Map<String, dynamic>? member) {
    final until = parseStamp(member?['accessLockedUntil']);
    if (until == null) return null;
    if (!DateTime.now().toUtc().isBefore(until.toUtc())) return null;
    return until;
  }

  static DateTime? sessionEpochOf(Map<String, dynamic>? member) =>
      parseStamp(member?['accessSessionEpoch']);

  static void copyAccessFields(Map<String, dynamic> dest, Map<String, dynamic> src) {
    for (final key in accessKeys) {
      dest[key] = src[key];
    }
  }

  /// Keep the later registrar action when two copies of a member are merged.
  static void mergeInto(Map<String, dynamic> next, Map<String, dynamic> other) {
    final nextAt = parseStamp(next['accessControlAt']);
    final otherAt = parseStamp(other['accessControlAt']);
    if (otherAt == null) return;
    if (nextAt != null && !otherAt.isAfter(nextAt)) return;
    copyAccessFields(next, other);
  }

  static Map<String, dynamic> apply({
    required Map<String, dynamic> member,
    required NgmyCivicAccessAction action,
    Duration? lockFor,
    String lockedBy = '',
  }) {
    final next = Map<String, dynamic>.from(member);
    final now = DateTime.now().toUtc();
    next['accessControlAt'] = now.toIso8601String();
    next['accessLockedBy'] = lockedBy.trim();
    next['updatedAt'] = now.toIso8601String();
    switch (action) {
      case NgmyCivicAccessAction.logout:
        next['accessSessionEpoch'] = now.toIso8601String();
      case NgmyCivicAccessAction.lock:
        final forDur = lockFor ?? const Duration(hours: 24);
        next['accessLockedUntil'] = now.add(forDur).toIso8601String();
        next['accessLockHours'] = forDur.inHours;
        next['accessSessionEpoch'] = now.toIso8601String();
      case NgmyCivicAccessAction.lift:
        next['accessLockedUntil'] = '';
        next['accessLockHours'] = null;
        next['accessLockLiftedAt'] = now.toIso8601String();
    }
    return next;
  }

  /// [localUnlockAt] is the stored session time. Omit it when checking a fresh login.
  static NgmyCivicAccessStatus evaluate({
    required bool removed,
    bool deceased = false,
    Map<String, dynamic>? member,
    DateTime? localUnlockAt,
  }) {
    if (removed) return const NgmyCivicAccessStatus(kind: NgmyCivicAccessKind.removed);
    if (deceased) return const NgmyCivicAccessStatus(kind: NgmyCivicAccessKind.deceased);
    final until = lockedUntilOf(member);
    if (until != null) {
      return NgmyCivicAccessStatus(kind: NgmyCivicAccessKind.locked, lockedUntil: until);
    }
    final epoch = sessionEpochOf(member);
    if (epoch != null && localUnlockAt != null && localUnlockAt.toUtc().isBefore(epoch.toUtc())) {
      return NgmyCivicAccessStatus(kind: NgmyCivicAccessKind.loggedOut, sessionEpoch: epoch);
    }
    return NgmyCivicAccessStatus(kind: NgmyCivicAccessKind.ok, sessionEpoch: epoch);
  }
}

Future<void> showNgmyCivicAccessControlSheet({
  required BuildContext context,
  required Map<String, dynamic> record,
  required bool removed,
  required Future<Map<String, dynamic>?> Function(NgmyCivicAccessAction action, {Duration? lockFor}) onApply,
}) {
  final name = (record['fullName'] ?? record['registryId'] ?? 'Member').toString().trim();
  final rid = (record['registryId'] ?? '').toString().trim();
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      var live = Map<String, dynamic>.from(record);
      var busy = false;
      return StatefulBuilder(
        builder: (ctx, setSheet) {
          final isDark = Theme.of(ctx).brightness == Brightness.dark;
          final panel = isDark ? const Color(0xFF151C2C) : Colors.white;
          final ink = isDark ? Colors.white : const Color(0xFF0F172A);
          final status = NgmyCivicRegistryAccess.evaluate(removed: removed, member: live);
          final locked = !removed && status.kind == NgmyCivicAccessKind.locked;

          Future<void> run(NgmyCivicAccessAction action, {Duration? lockFor}) async {
            if (busy) return;
            setSheet(() => busy = true);
            final updated = await onApply(action, lockFor: lockFor);
            if (!ctx.mounted) return;
            setSheet(() {
              busy = false;
              if (updated != null) live = Map<String, dynamic>.from(updated);
            });
          }

          return Padding(
            padding: EdgeInsets.only(bottom: MediaQuery.paddingOf(ctx).bottom),
            child: Container(
              decoration: BoxDecoration(
                color: panel,
                borderRadius: const BorderRadius.vertical(top: Radius.circular(22)),
              ),
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Center(
                    child: Container(
                      width: 36,
                      height: 4,
                      decoration: BoxDecoration(
                        color: Colors.grey.withOpacity(0.4),
                        borderRadius: BorderRadius.circular(99),
                      ),
                    ),
                  ),
                  const SizedBox(height: 14),
                  Text(
                    'Civic Registry access',
                    style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: ink),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    rid.isEmpty ? name : '$name · $rid',
                    style: TextStyle(fontSize: 13, color: ink.withOpacity(0.65)),
                  ),
                  const SizedBox(height: 12),
                  if (removed)
                    _accessBanner(
                      isDark,
                      Icons.block_rounded,
                      'This member was removed. Their information cannot open Civic Registry.',
                    )
                  else if (locked)
                    _accessBanner(
                      isDark,
                      Icons.lock_clock_rounded,
                      status.message,
                    ),
                  if (locked) ...[
                    const SizedBox(height: 12),
                    FilledButton.icon(
                      onPressed: busy ? null : () => run(NgmyCivicAccessAction.lift),
                      icon: const Icon(Icons.lock_open_rounded, size: 18),
                      label: Text(busy ? 'Updating…' : 'Give access back'),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF15803D),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                      ),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      'Remove the restriction now. They can log in again on any phone or device with their information.',
                      style: TextStyle(fontSize: 12, height: 1.35, color: ink.withOpacity(0.7)),
                    ),
                  ],
                  if (!removed) ...[
                    const SizedBox(height: 8),
                    ListTile(
                      contentPadding: EdgeInsets.zero,
                      leading: const Icon(Icons.logout_rounded, color: Color(0xFFB91C1C)),
                      title: const Text('Log out of Civic Registry', style: TextStyle(fontWeight: FontWeight.w800)),
                      subtitle: const Text('They must enter PIN, name, date of birth, and Registry ID again.'),
                      onTap: busy ? null : () => run(NgmyCivicAccessAction.logout),
                    ),
                    const Divider(height: 20),
                    Text(
                      'Restrict login for a time',
                      style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: ink.withOpacity(0.8)),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      'Blocks this member on every device. You can give access back before the time ends.',
                      style: TextStyle(fontSize: 12, height: 1.35, color: ink.withOpacity(0.65)),
                    ),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: [
                        for (final d in kNgmyCivicAccessDurations)
                          ActionChip(
                            label: Text(d.label, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12)),
                            onPressed: busy ? null : () => run(NgmyCivicAccessAction.lock, lockFor: d.duration),
                          ),
                      ],
                    ),
                  ],
                  const SizedBox(height: 8),
                  TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
                ],
              ),
            ),
          );
        },
      );
    },
  );
}

Widget _accessBanner(bool isDark, IconData icon, String text) {
  return Container(
    padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(
      color: isDark ? const Color(0xFF3F1D1D) : const Color(0xFFFEE2E2),
      borderRadius: BorderRadius.circular(12),
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, size: 18, color: const Color(0xFFB91C1C)),
        const SizedBox(width: 8),
        Expanded(child: Text(text, style: const TextStyle(fontSize: 13, height: 1.35))),
      ],
    ),
  );
}
