import 'package:flutter/material.dart';

import 'ngmy_worksheet_helpers.dart';

String ngmyCashierIouNewId() =>
    'iou_${DateTime.now().microsecondsSinceEpoch}';

DateTime ngmyCashierDateOnly(DateTime d) =>
    DateTime(d.year, d.month, d.day);

int ngmyCashierDaysBetween(DateTime a, DateTime b) {
  final aa = ngmyCashierDateOnly(a);
  final bb = ngmyCashierDateOnly(b);
  return bb.difference(aa).inDays;
}

String ngmyCashierFmtDate(DateTime? d, {bool withTime = false}) {
  if (d == null) return '';
  final local = d.toLocal();
  final date =
      '${local.month}/${local.day}/${local.year}';
  if (!withTime) return date;
  final h = local.hour.toString().padLeft(2, '0');
  final m = local.minute.toString().padLeft(2, '0');
  return '$date $h:$m';
}

List<Map<String, double>> ngmyCashierSerializeSignature(List<Offset?> points) {
  final out = <Map<String, double>>[];
  for (final p in points) {
    if (p == null) {
      out.add(const {'x': -1, 'y': -1});
    } else {
      out.add({'x': p.dx, 'y': p.dy});
    }
  }
  return out;
}

List<Offset?> ngmyCashierDeserializeSignature(dynamic raw) {
  if (raw is! List) return [];
  final out = <Offset?>[];
  for (final item in raw) {
    if (item is! Map) {
      out.add(null);
      continue;
    }
    final x = item['x'];
    final y = item['y'];
    if (x is num && y is num) {
      if (x < 0 && y < 0) {
        out.add(null);
      } else {
        out.add(Offset(x.toDouble(), y.toDouble()));
      }
    } else {
      out.add(null);
    }
  }
  return out;
}

/// Local IOU / "who owes me" ledger entry for Worksheets → Cashier.
class NgmyCashierIou {
  NgmyCashierIou({
    required this.id,
    required this.personName,
    required this.amount,
    required this.dueDate,
    DateTime? originalDueDate,
    this.accruedMissedDays = 0,
    this.paidAt,
    this.notes = '',
    DateTime? createdAt,
    this.dayBeforeReminderSeenKey = '',
    this.idPhotoBase64 = '',
    this.selfieBase64 = '',
    List<Offset?>? signaturePoints,
  })  : originalDueDate = originalDueDate ?? dueDate,
        createdAt = createdAt ?? DateTime.now(),
        signaturePoints = signaturePoints ?? <Offset?>[];

  final String id;
  String personName;
  double amount;

  /// Current expected pay date (can be extended).
  DateTime dueDate;

  /// First promised pay date — missed-day math never forgets this baseline.
  DateTime originalDueDate;

  /// Days already counted as missed before the latest due-date extension.
  int accruedMissedDays;

  DateTime? paidAt;
  String notes;
  final DateTime createdAt;

  /// Last day-before reminder key shown (`yyyy-MM-dd` of due date).
  String dayBeforeReminderSeenKey;

  /// Optional attachments from the person who owes (local only).
  String idPhotoBase64;
  String selfieBase64;
  List<Offset?> signaturePoints;

  bool get isPaid => paidAt != null;

  bool get hasIdPhoto => idPhotoBase64.trim().isNotEmpty;
  bool get hasSelfie => selfieBase64.trim().isNotEmpty;
  bool get hasSignature =>
      signaturePoints.any((p) => p != null);

  bool get hasAttachments => hasIdPhoto || hasSelfie || hasSignature;

  bool get isOverdue {
    if (isPaid) return false;
    return ngmyCashierDateOnly(DateTime.now())
        .isAfter(ngmyCashierDateOnly(dueDate));
  }

  /// Reminder fires the calendar day before [dueDate] while unpaid.
  bool isDueTomorrow([DateTime? now]) {
    if (isPaid) return false;
    final today = ngmyCashierDateOnly(now ?? DateTime.now());
    final due = ngmyCashierDateOnly(dueDate);
    return due.difference(today).inDays == 1;
  }

  int missedDays([DateTime? now]) => missedCalendarDates(now).length;

  bool get paidOnTime => isPaid && missedDays() == 0;

  /// Calendar days after the original due date through paid day / today.
  List<DateTime> missedCalendarDates([DateTime? now]) {
    final start = ngmyCashierDateOnly(originalDueDate);
    final end = isPaid
        ? ngmyCashierDateOnly(paidAt!)
        : ngmyCashierDateOnly(now ?? DateTime.now());
    if (!end.isAfter(start)) return const [];
    final dates = <DateTime>[];
    for (var d = start.add(const Duration(days: 1));
        !d.isAfter(end);
        d = d.add(const Duration(days: 1))) {
      dates.add(d);
    }
    return dates;
  }

  String get statusLabel {
    if (isPaid) {
      return paidOnTime ? 'PAID ON TIME' : 'PAID LATE';
    }
    if (isOverdue) return 'UNPAID · OVERDUE';
    return 'UNPAID';
  }

  /// Extend the pay date; keep counting prior missed days.
  void extendDueDate(DateTime newDue) {
    if (isPaid) return;
    final today = ngmyCashierDateOnly(DateTime.now());
    final oldDue = ngmyCashierDateOnly(dueDate);
    if (today.isAfter(oldDue)) {
      accruedMissedDays += today.difference(oldDue).inDays;
    }
    dueDate = ngmyCashierDateOnly(newDue);
    dayBeforeReminderSeenKey = '';
  }

  void markPaid([DateTime? when]) {
    paidAt = when ?? DateTime.now();
  }

  void markUnpaid() {
    paidAt = null;
  }

  String get amountLabel => ngmyFormatMoney(amount);

  Map<String, dynamic> toJson() => {
        'id': id,
        'personName': personName,
        'amount': amount,
        'dueDate': dueDate.toIso8601String(),
        'originalDueDate': originalDueDate.toIso8601String(),
        'accruedMissedDays': accruedMissedDays,
        'paidAt': paidAt?.toIso8601String(),
        'notes': notes,
        'createdAt': createdAt.toIso8601String(),
        'dayBeforeReminderSeenKey': dayBeforeReminderSeenKey,
        'idPhotoBase64': idPhotoBase64,
        'selfieBase64': selfieBase64,
        'signature': ngmyCashierSerializeSignature(signaturePoints),
      };

  factory NgmyCashierIou.fromJson(Map<String, dynamic> json) {
    DateTime parseDt(dynamic v, {DateTime? fallback}) {
      final parsed = DateTime.tryParse(v?.toString() ?? '');
      return parsed ?? fallback ?? DateTime.now();
    }

    final due = parseDt(json['dueDate']);
    return NgmyCashierIou(
      id: (json['id'] ?? ngmyCashierIouNewId()).toString(),
      personName: (json['personName'] ?? '').toString(),
      amount: (json['amount'] is num)
          ? (json['amount'] as num).toDouble()
          : double.tryParse(json['amount']?.toString() ?? '') ?? 0,
      dueDate: due,
      originalDueDate: parseDt(json['originalDueDate'], fallback: due),
      accruedMissedDays: () {
        final raw = json['accruedMissedDays'];
        if (raw is int) return raw;
        return int.tryParse(raw?.toString() ?? '') ?? 0;
      }(),
      paidAt: DateTime.tryParse(json['paidAt']?.toString() ?? ''),
      notes: (json['notes'] ?? '').toString(),
      createdAt: parseDt(json['createdAt']),
      dayBeforeReminderSeenKey:
          (json['dayBeforeReminderSeenKey'] ?? '').toString(),
      idPhotoBase64: (json['idPhotoBase64'] ?? '').toString(),
      selfieBase64: (json['selfieBase64'] ?? '').toString(),
      signaturePoints: ngmyCashierDeserializeSignature(json['signature']),
    );
  }

  NgmyCashierIou copy() => NgmyCashierIou.fromJson(toJson());
}
