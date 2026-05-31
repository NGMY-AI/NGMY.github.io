import 'dart:math';

import 'package:flutter/material.dart';

/// Admin-scheduled delivery of media comments, likes, and followers.
class NgmyMediaDelivery {
  static const String kindComment = 'comment';
  static const String kindLike = 'like';
  static const String kindFollower = 'follower';

  /// Evenly space [count] deliveries across [span]. Instant when span is zero.
  static List<DateTime> spreadDeliveryTimes(int count, Duration span, {DateTime? start}) {
    if (count <= 0) return const [];
    final origin = (start ?? DateTime.now()).toUtc();
    if (span.inMilliseconds <= 0 || count == 1) {
      return List.generate(count, (_) => origin);
    }
    final out = <DateTime>[];
    for (var i = 0; i < count; i++) {
      final ms = ((i + 1) * span.inMilliseconds / count).round();
      out.add(origin.add(Duration(milliseconds: ms)));
    }
    return out;
  }

  static String newItemId() => 'md_${DateTime.now().microsecondsSinceEpoch}_${Random().nextInt(999999)}';

  static List<Map<String, dynamic>> queueComments({
    required String postId,
    required List<Map<String, dynamic>> comments,
    required Duration spread,
  }) {
    final times = spreadDeliveryTimes(comments.length, spread);
    return List.generate(comments.length, (i) {
      return {
        'id': newItemId(),
        'kind': kindComment,
        'postId': postId,
        'payload': Map<String, dynamic>.from(comments[i]),
        'deliverAt': times[i].toIso8601String(),
        'delivered': false,
      };
    });
  }

  static List<Map<String, dynamic>> queueLikes({
    required String postId,
    required List<String> likerIds,
    required Duration spread,
  }) {
    final times = spreadDeliveryTimes(likerIds.length, spread);
    return List.generate(likerIds.length, (i) {
      return {
        'id': newItemId(),
        'kind': kindLike,
        'postId': postId,
        'payload': likerIds[i],
        'deliverAt': times[i].toIso8601String(),
        'delivered': false,
      };
    });
  }

  static List<Map<String, dynamic>> queueFollowers({
    required String userEmail,
    required List<String> followerIds,
    required Duration spread,
  }) {
    final times = spreadDeliveryTimes(followerIds.length, spread);
    return List.generate(followerIds.length, (i) {
      return {
        'id': newItemId(),
        'kind': kindFollower,
        'userEmail': userEmail.toLowerCase().trim(),
        'payload': followerIds[i],
        'deliverAt': times[i].toIso8601String(),
        'delivered': false,
      };
    });
  }

  static List<Map<String, dynamic>> mergeQueues(List<Map<String, dynamic>> local, List<Map<String, dynamic>> remote) {
    final byId = <String, Map<String, dynamic>>{};
    for (final raw in [...remote, ...local]) {
      final item = Map<String, dynamic>.from(raw);
      final id = (item['id'] ?? '').toString();
      if (id.isEmpty) continue;
      if (item['delivered'] == true) continue;
      byId[id] = item;
    }
    return byId.values.toList()
      ..sort((a, b) {
        final ta = DateTime.tryParse((a['deliverAt'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0);
        final tb = DateTime.tryParse((b['deliverAt'] ?? '').toString()) ?? DateTime.fromMillisecondsSinceEpoch(0);
        return ta.compareTo(tb);
      });
  }

  static String describeSpread(Duration spread, int count) {
    if (spread.inMilliseconds <= 0 || count <= 1) return 'All $count arrive instantly.';
    final hours = spread.inMinutes / 60.0;
    final perHour = count / (hours <= 0 ? 1 : hours);
    if (hours >= 48) {
      return '$count items over ${spread.inDays} day(s) (~${perHour.toStringAsFixed(1)}/hour).';
    }
    if (hours >= 1) {
      return '$count items over ${hours.toStringAsFixed(1)} hour(s) (~${perHour.toStringAsFixed(1)}/hour).';
    }
    return '$count items over ${spread.inMinutes} min (~${(count / spread.inMinutes).toStringAsFixed(1)}/min).';
  }

  /// Returns null if cancelled. Duration.zero = instant.
  static Future<Duration?> pickSchedule(BuildContext context, {required int count, required String label}) async {
    Duration selected = Duration.zero;
    final customHoursCtrl = TextEditingController(text: '4');
    final customDaysCtrl = TextEditingController(text: '1');

    Duration? fromPreset(String key) {
      switch (key) {
        case 'instant':
          return Duration.zero;
        case '1h':
          return const Duration(hours: 1);
        case '4h':
          return const Duration(hours: 4);
        case '12h':
          return const Duration(hours: 12);
        case '1d':
          return const Duration(days: 1);
        case '3d':
          return const Duration(days: 3);
        case '7d':
          return const Duration(days: 7);
        case 'custom_h':
          final h = double.tryParse(customHoursCtrl.text.trim()) ?? 0;
          if (h <= 0) return null;
          return Duration(minutes: (h * 60).round());
        case 'custom_d':
          final d = double.tryParse(customDaysCtrl.text.trim()) ?? 0;
          if (d <= 0) return null;
          return Duration(hours: (d * 24).round());
        default:
          return Duration.zero;
      }
    }

    return showDialog<Duration>(
      context: context,
      builder: (ctx) {
        String preset = 'instant';
        return StatefulBuilder(
          builder: (context, setDlg) {
            selected = fromPreset(preset) ?? Duration.zero;
            return AlertDialog(
              title: Text('Delivery speed — $label'),
              content: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Text('How should $count item(s) arrive?', style: TextStyle(color: Colors.grey.shade700, fontSize: 13)),
                    const SizedBox(height: 12),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: [
                        _chip(ctx, setDlg, 'Instant', 'instant', preset, (v) => preset = v),
                        _chip(ctx, setDlg, '1 hour', '1h', preset, (v) => preset = v),
                        _chip(ctx, setDlg, '4 hours', '4h', preset, (v) => preset = v),
                        _chip(ctx, setDlg, '12 hours', '12h', preset, (v) => preset = v),
                        _chip(ctx, setDlg, '1 day', '1d', preset, (v) => preset = v),
                        _chip(ctx, setDlg, '3 days', '3d', preset, (v) => preset = v),
                        _chip(ctx, setDlg, '7 days', '7d', preset, (v) => preset = v),
                      ],
                    ),
                    const SizedBox(height: 14),
                    TextField(
                      controller: customHoursCtrl,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      decoration: const InputDecoration(labelText: 'Custom hours', border: OutlineInputBorder()),
                      onTap: () => setDlg(() => preset = 'custom_h'),
                      onChanged: (_) => setDlg(() => preset = 'custom_h'),
                    ),
                    const SizedBox(height: 8),
                    TextField(
                      controller: customDaysCtrl,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      decoration: const InputDecoration(labelText: 'Custom days', border: OutlineInputBorder()),
                      onTap: () => setDlg(() => preset = 'custom_d'),
                      onChanged: (_) => setDlg(() => preset = 'custom_d'),
                    ),
                    const SizedBox(height: 12),
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: const Color(0xFF7C3AED).withValues(alpha: 0.08),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Text(
                        NgmyMediaDelivery.describeSpread(selected, count),
                        style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600),
                      ),
                    ),
                  ],
                ),
              ),
              actions: [
                TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
                FilledButton(
                  onPressed: () {
                    final d = fromPreset(preset);
                    if (d == null) return;
                    Navigator.pop(ctx, d);
                  },
                  child: const Text('Schedule'),
                ),
              ],
            );
          },
        );
      },
    );
  }

  static Widget _chip(
    BuildContext ctx,
    StateSetter setDlg,
    String label,
    String value,
    String selected,
    ValueChanged<String> onPick,
  ) {
    final on = selected == value;
    return FilterChip(
      label: Text(label),
      selected: on,
      onSelected: (_) {
        onPick(value);
        setDlg(() {});
      },
    );
  }
}
