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
  })  : originalDueDate = originalDueDate ?? dueDate,
        createdAt = createdAt ?? DateTime.now();

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

  bool get isPaid => paidAt != null;

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

  int missedDays([DateTime? now]) {
    final end = isPaid
        ? ngmyCashierDateOnly(paidAt!)
        : ngmyCashierDateOnly(now ?? DateTime.now());
    final due = ngmyCashierDateOnly(dueDate);
    final openMissed = end.isAfter(due) ? end.difference(due).inDays : 0;
    return accruedMissedDays + openMissed;
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
    );
  }

  NgmyCashierIou copy() => NgmyCashierIou.fromJson(toJson());
}
