import 'package:flutter/material.dart';

/// Delivery tracker shown on the transfer receipt when enabled.
enum NgmyTransferDeliveryStatus {
  hidden,
  pending,
  arrivingSoon,
  arrived,
}

extension NgmyTransferDeliveryStatusX on NgmyTransferDeliveryStatus {
  String get label {
    switch (this) {
      case NgmyTransferDeliveryStatus.hidden:
        return 'Hidden';
      case NgmyTransferDeliveryStatus.pending:
        return 'Pending';
      case NgmyTransferDeliveryStatus.arrivingSoon:
        return 'Will arrive soon';
      case NgmyTransferDeliveryStatus.arrived:
        return 'Arrived';
    }
  }

  String headline({DateTime? at}) {
    switch (this) {
      case NgmyTransferDeliveryStatus.hidden:
        return '';
      case NgmyTransferDeliveryStatus.pending:
        return 'Pending';
      case NgmyTransferDeliveryStatus.arrivingSoon:
        return 'Arriving soon';
      case NgmyTransferDeliveryStatus.arrived:
        return 'Delivered at ${ngmyFormatTransferDeliveryTime(at ?? DateTime.now())}';
    }
  }

  String subtitle() {
    switch (this) {
      case NgmyTransferDeliveryStatus.hidden:
        return '';
      case NgmyTransferDeliveryStatus.pending:
        return 'Your transfer is still pending';
      case NgmyTransferDeliveryStatus.arrivingSoon:
        return 'Your money will arrive soon';
      case NgmyTransferDeliveryStatus.arrived:
        return 'Your money has been delivered';
    }
  }

  int get completedSteps {
    switch (this) {
      case NgmyTransferDeliveryStatus.hidden:
        return 0;
      case NgmyTransferDeliveryStatus.pending:
        return 1;
      case NgmyTransferDeliveryStatus.arrivingSoon:
        return 3;
      case NgmyTransferDeliveryStatus.arrived:
        return 4;
    }
  }
}

String ngmyFormatTransferDeliveryTime(DateTime dt) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  final hour = dt.hour > 12 ? dt.hour - 12 : (dt.hour == 0 ? 12 : dt.hour);
  final ampm = dt.hour >= 12 ? 'PM' : 'AM';
  final min = dt.minute.toString().padLeft(2, '0');
  return '$hour:$min $ampm ${months[dt.month - 1]} ${dt.day}';
}

class NgmyTransferDeliveryStatusCard extends StatelessWidget {
  const NgmyTransferDeliveryStatusCard({
    super.key,
    required this.status,
    this.deliveredAt,
    this.onEditDeliveredTime,
  });

  final NgmyTransferDeliveryStatus status;
  final DateTime? deliveredAt;
  final VoidCallback? onEditDeliveredTime;

  static const _green = Color(0xFF1B5E20);
  static const _greenLight = Color(0xFF2E7D32);
  static const _trackGrey = Color(0xFFE0E0E0);
  static const _iconGrey = Color(0xFFBDBDBD);

  @override
  Widget build(BuildContext context) {
    if (status == NgmyTransferDeliveryStatus.hidden) return const SizedBox.shrink();

    final steps = status.completedSteps;
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.fromLTRB(14, 14, 14, 16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFFE0E0E0)),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 8, offset: const Offset(0, 2)),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          if (status == NgmyTransferDeliveryStatus.arrived)
            _arrivedHeadline()
          else
            Text(
              status.headline(at: deliveredAt),
              style: const TextStyle(
                color: Color(0xFF212121),
                fontWeight: FontWeight.w800,
                fontSize: 14,
                height: 1.25,
              ),
            ),
          const SizedBox(height: 4),
          Text(
            status.subtitle(),
            style: const TextStyle(color: Color(0xFF757575), fontSize: 12, height: 1.3),
          ),
          const SizedBox(height: 16),
          _tracker(steps),
        ],
      ),
    );
  }

  Widget _arrivedHeadline() {
    final at = deliveredAt ?? DateTime.now();
    final timeLabel = ngmyFormatTransferDeliveryTime(at);
    const baseStyle = TextStyle(
      color: Color(0xFF212121),
      fontWeight: FontWeight.w800,
      fontSize: 14,
      height: 1.25,
    );

    if (onEditDeliveredTime == null) {
      return Text('Delivered at $timeLabel', style: baseStyle);
    }

    return Wrap(
      crossAxisAlignment: WrapCrossAlignment.center,
      spacing: 0,
      runSpacing: 4,
      children: [
        const Text('Delivered at ', style: baseStyle),
        Material(
          color: const Color(0xFF1B5E20).withValues(alpha: 0.08),
          borderRadius: BorderRadius.circular(8),
          child: InkWell(
            onTap: onEditDeliveredTime,
            borderRadius: BorderRadius.circular(8),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    timeLabel,
                    style: const TextStyle(
                      color: Color(0xFF1B5E20),
                      fontWeight: FontWeight.w900,
                      fontSize: 14,
                      decoration: TextDecoration.underline,
                      decorationColor: Color(0xFF2E7D32),
                    ),
                  ),
                  const SizedBox(width: 4),
                  const Icon(Icons.schedule_rounded, size: 15, color: Color(0xFF2E7D32)),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _tracker(int completed) {
    const icons = [
      Icons.credit_card_rounded,
      Icons.sync_rounded,
      Icons.smartphone_rounded,
      Icons.person_rounded,
    ];

    return Row(
      children: [
        for (var i = 0; i < 4; i++) ...[
          _dot(
            icon: icons[i],
            done: i + 1 <= completed,
            highlight: i == 3 && status == NgmyTransferDeliveryStatus.arrived,
          ),
          if (i < 3)
            Expanded(
              child: Container(
                height: 3,
                margin: const EdgeInsets.symmetric(horizontal: 2),
                color: i + 2 <= completed ? _greenLight : _trackGrey,
              ),
            ),
        ],
      ],
    );
  }

  Widget _dot({required IconData icon, required bool done, required bool highlight}) {
    return Container(
      width: 36,
      height: 36,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: done ? _green : _iconGrey.withValues(alpha: 0.35),
        boxShadow: highlight
            ? [BoxShadow(color: _green.withValues(alpha: 0.35), blurRadius: 8, offset: const Offset(0, 2))]
            : null,
      ),
      child: Icon(icon, color: Colors.white, size: 18),
    );
  }
}

/// Centered clock picker — admin adjusts delivery time (date stays the same).
Future<DateTime?> showNgmyTransferDeliveryTimePicker(
  BuildContext context, {
  DateTime? initial,
}) async {
  final base = initial ?? DateTime.now();

  final result = await showTimePicker(
    context: context,
    initialTime: TimeOfDay.fromDateTime(base),
    helpText: 'Adjust delivery time',
    cancelText: 'Cancel',
    confirmText: 'Save time',
    builder: (ctx, child) {
      final themed = Theme(
        data: Theme.of(ctx).copyWith(
          colorScheme: const ColorScheme.dark(
            primary: Color(0xFF4ADE80),
            onPrimary: Color(0xFF052E16),
            surface: Color(0xFF0C1220),
            onSurface: Colors.white,
          ),
          timePickerTheme: TimePickerThemeData(
            backgroundColor: const Color(0xFF0C1220),
            dialBackgroundColor: const Color(0xFF1B5E20).withValues(alpha: 0.35),
            dialHandColor: const Color(0xFF4ADE80),
            dialTextColor: Colors.white,
            hourMinuteColor: const Color(0xFF1B5E20).withValues(alpha: 0.45),
            hourMinuteTextColor: Colors.white,
            dayPeriodColor: const Color(0xFF1B5E20).withValues(alpha: 0.45),
            dayPeriodTextColor: Colors.white,
            entryModeIconColor: const Color(0xFF4ADE80),
            helpTextStyle: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 12),
          ),
          dialogTheme: DialogThemeData(
            backgroundColor: const Color(0xFF0C1220),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
          ),
        ),
        child: child!,
      );

      return Dialog(
        backgroundColor: Colors.transparent,
        insetPadding: const EdgeInsets.symmetric(horizontal: 28, vertical: 32),
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 340),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: Material(
              color: const Color(0xFF0C1220),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(
                    padding: const EdgeInsets.fromLTRB(16, 14, 10, 14),
                    decoration: const BoxDecoration(
                      gradient: LinearGradient(colors: [Color(0xFF1B5E20), Color(0xFF2E7D32)]),
                    ),
                    child: Row(
                      children: [
                        Container(
                          width: 36,
                          height: 36,
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.18),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: const Icon(Icons.schedule_rounded, color: Colors.white, size: 20),
                        ),
                        const SizedBox(width: 10),
                        const Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('Delivery time', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                              SizedBox(height: 2),
                              Text('Defaults to now — adjust if needed', style: TextStyle(color: Colors.white70, fontSize: 10)),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  themed,
                ],
              ),
            ),
          ),
        ),
      );
    },
  );

  if (result == null) return null;
  return DateTime(base.year, base.month, base.day, result.hour, result.minute);
}

Future<void> showNgmyTransferDeliveryStatusPicker(
  BuildContext context, {
  required NgmyTransferDeliveryStatus selected,
  required void Function(NgmyTransferDeliveryStatus status, DateTime? deliveredAt) onSelect,
}) async {
  await showDialog<void>(
    context: context,
    barrierColor: Colors.black.withValues(alpha: 0.78),
    builder: (ctx) => Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 28, vertical: 32),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 340),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: Material(
            color: const Color(0xFF0C1220),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  padding: const EdgeInsets.fromLTRB(16, 14, 10, 14),
                  decoration: const BoxDecoration(
                    gradient: LinearGradient(colors: [Color(0xFF1B5E20), Color(0xFF2E7D32)]),
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 36,
                        height: 36,
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.18),
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: const Icon(Icons.local_shipping_rounded, color: Colors.white, size: 20),
                      ),
                      const SizedBox(width: 10),
                      const Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Delivery status', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                            SizedBox(height: 2),
                            Text('Show on receipt', style: TextStyle(color: Colors.white70, fontSize: 10)),
                          ],
                        ),
                      ),
                      IconButton(
                        onPressed: () => Navigator.pop(ctx),
                        icon: const Icon(Icons.close_rounded, color: Colors.white, size: 20),
                        visualDensity: VisualDensity.compact,
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
                  child: Column(
                    children: [
                      _statusOptionCard(
                        title: 'Don\'t show',
                        subtitle: 'Hide tracker on receipt',
                        icon: Icons.visibility_off_outlined,
                        accent: const Color(0xFF64748B),
                        selected: selected == NgmyTransferDeliveryStatus.hidden,
                        onTap: () {
                          onSelect(NgmyTransferDeliveryStatus.hidden, null);
                          Navigator.pop(ctx);
                        },
                      ),
                      _statusOptionCard(
                        title: NgmyTransferDeliveryStatus.pending.label,
                        subtitle: NgmyTransferDeliveryStatus.pending.subtitle(),
                        icon: Icons.hourglass_top_rounded,
                        accent: const Color(0xFFF59E0B),
                        selected: selected == NgmyTransferDeliveryStatus.pending,
                        onTap: () {
                          onSelect(NgmyTransferDeliveryStatus.pending, null);
                          Navigator.pop(ctx);
                        },
                      ),
                      _statusOptionCard(
                        title: NgmyTransferDeliveryStatus.arrivingSoon.label,
                        subtitle: NgmyTransferDeliveryStatus.arrivingSoon.subtitle(),
                        icon: Icons.local_shipping_outlined,
                        accent: const Color(0xFF0284C7),
                        selected: selected == NgmyTransferDeliveryStatus.arrivingSoon,
                        onTap: () {
                          onSelect(NgmyTransferDeliveryStatus.arrivingSoon, null);
                          Navigator.pop(ctx);
                        },
                      ),
                      _statusOptionCard(
                        title: NgmyTransferDeliveryStatus.arrived.label,
                        subtitle: NgmyTransferDeliveryStatus.arrived.subtitle(),
                        icon: Icons.check_circle_rounded,
                        accent: const Color(0xFF16A34A),
                        selected: selected == NgmyTransferDeliveryStatus.arrived,
                        onTap: () {
                          onSelect(NgmyTransferDeliveryStatus.arrived, DateTime.now());
                          Navigator.pop(ctx);
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    ),
  );
}

Widget _statusOptionCard({
  required String title,
  required String subtitle,
  required IconData icon,
  required Color accent,
  required bool selected,
  required VoidCallback onTap,
}) {
  return Padding(
    padding: const EdgeInsets.only(bottom: 8),
    child: Material(
      color: selected ? accent.withValues(alpha: 0.15) : Colors.white.withValues(alpha: 0.05),
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 11),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: selected ? accent.withValues(alpha: 0.65) : Colors.white12, width: selected ? 1.5 : 1),
          ),
          child: Row(
            children: [
              Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(
                  color: accent.withValues(alpha: selected ? 0.28 : 0.14),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Icon(icon, color: accent, size: 20),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: TextStyle(color: Colors.white, fontWeight: selected ? FontWeight.w900 : FontWeight.w700, fontSize: 13)),
                    Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 10, height: 1.25), maxLines: 2, overflow: TextOverflow.ellipsis),
                  ],
                ),
              ),
              if (selected) Icon(Icons.check_circle_rounded, color: accent, size: 20),
            ],
          ),
        ),
      ),
    ),
  );
}
