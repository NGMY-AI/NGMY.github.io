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
  });

  final NgmyTransferDeliveryStatus status;
  final DateTime? deliveredAt;

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

Future<void> showNgmyTransferDeliveryStatusPicker(
  BuildContext context, {
  required NgmyTransferDeliveryStatus selected,
  required void Function(NgmyTransferDeliveryStatus status, DateTime? deliveredAt) onSelect,
}) async {
  await showModalBottomSheet<void>(
    context: context,
    backgroundColor: const Color(0xFF0B1020),
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(18))),
    builder: (ctx) {
      return SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 14, 16, 20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text('Delivery status', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
              const SizedBox(height: 4),
              Text(
                'Show on the receipt whether the money is pending, arriving soon, or delivered.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11),
              ),
              const SizedBox(height: 14),
              _statusTile(
                ctx,
                title: 'Don\'t show',
                subtitle: 'Hide delivery tracker on receipt',
                icon: Icons.visibility_off_outlined,
                selected: selected == NgmyTransferDeliveryStatus.hidden,
                onTap: () {
                  onSelect(NgmyTransferDeliveryStatus.hidden, null);
                  Navigator.pop(ctx);
                },
              ),
              _statusTile(
                ctx,
                title: NgmyTransferDeliveryStatus.pending.label,
                subtitle: NgmyTransferDeliveryStatus.pending.subtitle(),
                icon: Icons.hourglass_top_rounded,
                selected: selected == NgmyTransferDeliveryStatus.pending,
                onTap: () {
                  onSelect(NgmyTransferDeliveryStatus.pending, null);
                  Navigator.pop(ctx);
                },
              ),
              _statusTile(
                ctx,
                title: NgmyTransferDeliveryStatus.arrivingSoon.label,
                subtitle: NgmyTransferDeliveryStatus.arrivingSoon.subtitle(),
                icon: Icons.local_shipping_outlined,
                selected: selected == NgmyTransferDeliveryStatus.arrivingSoon,
                onTap: () {
                  onSelect(NgmyTransferDeliveryStatus.arrivingSoon, null);
                  Navigator.pop(ctx);
                },
              ),
              _statusTile(
                ctx,
                title: NgmyTransferDeliveryStatus.arrived.label,
                subtitle: NgmyTransferDeliveryStatus.arrived.subtitle(),
                icon: Icons.check_circle_outline_rounded,
                selected: selected == NgmyTransferDeliveryStatus.arrived,
                onTap: () {
                  onSelect(NgmyTransferDeliveryStatus.arrived, DateTime.now());
                  Navigator.pop(ctx);
                },
              ),
            ],
          ),
        ),
      );
    },
  );
}

Widget _statusTile(
  BuildContext ctx, {
  required String title,
  required String subtitle,
  required IconData icon,
  required bool selected,
  required VoidCallback onTap,
}) {
  return Padding(
    padding: const EdgeInsets.only(bottom: 8),
    child: Material(
      color: selected ? const Color(0xFF14B8A6).withValues(alpha: 0.18) : Colors.white.withValues(alpha: 0.06),
      borderRadius: BorderRadius.circular(12),
      child: ListTile(
        leading: Icon(icon, color: selected ? const Color(0xFF5EEAD4) : Colors.white70),
        title: Text(title, style: TextStyle(color: Colors.white, fontWeight: selected ? FontWeight.w900 : FontWeight.w700)),
        subtitle: Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11)),
        trailing: selected ? const Icon(Icons.check_circle_rounded, color: Color(0xFF5EEAD4)) : null,
        onTap: onTap,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
          side: BorderSide(color: selected ? const Color(0xFF14B8A6).withValues(alpha: 0.55) : Colors.white12),
        ),
      ),
    ),
  );
}
