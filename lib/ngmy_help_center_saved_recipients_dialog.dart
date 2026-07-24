import 'dart:convert';

import 'package:flutter/material.dart';

import 'ngmy_help_center_send_money_store.dart';

const _accent = Color(0xFF00E5FF);

/// Centered saved-recipients picker with swipe-to-pin and swipe-to-delete.
Future<void> showNgmySavedRecipientsDialog(
  BuildContext context, {
  required List<NgmyHelpCenterSavedRecipient> recipients,
  required ValueChanged<NgmyHelpCenterSavedRecipient> onApply,
  required Future<void> Function() onListChanged,
}) async {
  await showDialog<void>(
    context: context,
    barrierColor: Colors.black.withValues(alpha: 0.78),
    builder: (ctx) => _SavedRecipientsDialog(
      initial: recipients,
      onApply: (entry) {
        Navigator.pop(ctx);
        onApply(entry);
      },
      onListChanged: onListChanged,
    ),
  );
}

class _SavedRecipientsDialog extends StatefulWidget {
  const _SavedRecipientsDialog({
    required this.initial,
    required this.onApply,
    required this.onListChanged,
  });

  final List<NgmyHelpCenterSavedRecipient> initial;
  final ValueChanged<NgmyHelpCenterSavedRecipient> onApply;
  final Future<void> Function() onListChanged;

  @override
  State<_SavedRecipientsDialog> createState() => _SavedRecipientsDialogState();
}

class _SavedRecipientsDialogState extends State<_SavedRecipientsDialog> {
  late List<NgmyHelpCenterSavedRecipient> _list;

  @override
  void initState() {
    super.initState();
    _list = List<NgmyHelpCenterSavedRecipient>.from(widget.initial);
  }

  Future<void> _reload() async {
    final next = await ngmyLoadHelpCenterSavedRecipients();
    if (mounted) setState(() => _list = next);
    await widget.onListChanged();
  }

  Future<void> _delete(NgmyHelpCenterSavedRecipient entry) async {
    await ngmyDeleteHelpCenterSavedRecipient(entry.id);
    await _reload();
  }

  Future<void> _togglePin(NgmyHelpCenterSavedRecipient entry) async {
    await ngmyToggleHelpCenterSavedRecipientPin(entry.id);
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 24, vertical: 28),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 380, maxHeight: 520),
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
                    gradient: LinearGradient(
                      colors: [Color(0xFF0E7490), Color(0xFF164E63)],
                    ),
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
                        child: const Icon(Icons.people_alt_rounded, color: Colors.white, size: 20),
                      ),
                      const SizedBox(width: 10),
                      const Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Saved recipients', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                            SizedBox(height: 2),
                            Text('Tap to use · swipe to pin or delete', style: TextStyle(color: Colors.white70, fontSize: 10)),
                          ],
                        ),
                      ),
                      IconButton(
                        onPressed: () => Navigator.pop(context),
                        icon: const Icon(Icons.close_rounded, color: Colors.white, size: 20),
                        visualDensity: VisualDensity.compact,
                      ),
                    ],
                  ),
                ),
                Flexible(
                  child: _list.isEmpty
                      ? Padding(
                          padding: const EdgeInsets.all(28),
                          child: Text(
                            'No saved recipients yet.\nSave someone from a receipt to see them here.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12, height: 1.4),
                          ),
                        )
                      : ListView.separated(
                          padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
                          itemCount: _list.length,
                          separatorBuilder: (_, __) => const SizedBox(height: 10),
                          itemBuilder: (_, i) {
                            final entry = _list[i];
                            return _RecipientSwipeTile(
                              entry: entry,
                              onTap: () => widget.onApply(entry),
                              onDelete: () => _delete(entry),
                              onPin: () => _togglePin(entry),
                            );
                          },
                        ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _RecipientSwipeTile extends StatelessWidget {
  const _RecipientSwipeTile({
    required this.entry,
    required this.onTap,
    required this.onDelete,
    required this.onPin,
  });

  final NgmyHelpCenterSavedRecipient entry;
  final VoidCallback onTap;
  final Future<void> Function() onDelete;
  final Future<void> Function() onPin;

  @override
  Widget build(BuildContext context) {
    return Dismissible(
      key: ValueKey('${entry.id}-${entry.pinned}'),
      direction: DismissDirection.horizontal,
      background: Container(
        alignment: Alignment.centerLeft,
        padding: const EdgeInsets.only(left: 18),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(14),
          gradient: LinearGradient(
            colors: entry.pinned
                ? [const Color(0xFF78716C), const Color(0xFF57534E)]
                : [const Color(0xFFD4AF37), const Color(0xFFB8860B)],
          ),
        ),
        child: Row(
          children: [
            Icon(entry.pinned ? Icons.push_pin_rounded : Icons.push_pin_outlined, color: Colors.white, size: 20),
            const SizedBox(width: 8),
            Text(entry.pinned ? 'Unpin' : 'Pin', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
          ],
        ),
      ),
      secondaryBackground: Container(
        alignment: Alignment.centerRight,
        padding: const EdgeInsets.only(right: 18),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(14),
          gradient: const LinearGradient(colors: [Color(0xFFDC2626), Color(0xFFB91C1C)]),
        ),
        child: const Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            Text('Delete', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
            SizedBox(width: 8),
            Icon(Icons.delete_outline_rounded, color: Colors.white, size: 20),
          ],
        ),
      ),
      confirmDismiss: (direction) async {
        if (direction == DismissDirection.endToStart) {
          await onDelete();
          return true;
        }
        await onPin();
        return false;
      },
      child: Material(
        color: Colors.white.withValues(alpha: 0.06),
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(14),
          child: Container(
            padding: const EdgeInsets.fromLTRB(12, 12, 12, 12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: entry.pinned ? const Color(0xFFD4AF37).withValues(alpha: 0.55) : Colors.white12),
            ),
            child: Row(
              children: [
                Container(
                  width: 42,
                  height: 42,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    gradient: LinearGradient(
                      colors: entry.pinned
                          ? [const Color(0xFFD4AF37).withValues(alpha: 0.35), const Color(0xFFB8860B).withValues(alpha: 0.25)]
                          : [_accent.withValues(alpha: 0.25), const Color(0xFF7C3AED).withValues(alpha: 0.2)],
                    ),
                  ),
                  child: Center(
                    child: Text(
                      entry.receiverName.trim().isNotEmpty ? entry.receiverName.trim()[0].toUpperCase() : '?',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16),
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Expanded(
                            child: Text(
                              entry.receiverName,
                              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                            ),
                          ),
                          if (entry.pinned)
                            Container(
                              margin: const EdgeInsets.only(left: 6),
                              padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                              decoration: BoxDecoration(
                                color: const Color(0xFFD4AF37).withValues(alpha: 0.2),
                                borderRadius: BorderRadius.circular(6),
                              ),
                              child: const Text('PINNED', style: TextStyle(color: Color(0xFFFBBF24), fontSize: 8, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
                            ),
                        ],
                      ),
                      const SizedBox(height: 3),
                      Text(
                        entry.receiverCountry,
                        style: TextStyle(color: _accent.withValues(alpha: 0.85), fontSize: 11, fontWeight: FontWeight.w700),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        entry.receiverPhone,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 10),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
                Icon(Icons.arrow_forward_ios_rounded, size: 14, color: Colors.white.withValues(alpha: 0.35)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ignore: unused_element — kept for potential future bulk export
String _encodeRecipients(List<NgmyHelpCenterSavedRecipient> list) =>
    jsonEncode(list.map((e) => e.toMap()).toList());
