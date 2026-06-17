import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_helper_superpowers.dart';

enum NgmySuperpowerAttachKind { callScreenshot, invoice, voicemailPaste }

Future<({NgmySuperpowerAttachKind? kind, String? imageB64, String? mime, String? pastedText})?>
    showNgmySuperpowerAttachSheet(BuildContext context, {required bool isDark}) async {
  return showModalBottomSheet<({NgmySuperpowerAttachKind? kind, String? imageB64, String? mime, String? pastedText})?>(
    context: context,
    backgroundColor: Colors.transparent,
    isScrollControlled: true,
    builder: (ctx) {
      final pasteC = TextEditingController();
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: Container(
          margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF1C2433) : Colors.white,
            borderRadius: BorderRadius.circular(22),
          ),
          child: SafeArea(
            top: false,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  children: [
                    const Icon(Icons.bolt_rounded, color: Color(0xFFF59E0B), size: 28),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        'NGMY Superpowers',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w800,
                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(
                  'Teach NGMY once — then ask "who called at 2 AM?" and it remembers.',
                  style: TextStyle(fontSize: 12, height: 1.35, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
                ),
                const SizedBox(height: 14),
                FilledButton.icon(
                  onPressed: () async {
                    final picker = ImagePicker();
                    final img = await picker.pickImage(source: ImageSource.gallery, imageQuality: 85, maxWidth: 1600);
                    if (img == null || !ctx.mounted) return;
                    final bytes = await img.readAsBytes();
                    Navigator.pop(ctx, (
                      kind: NgmySuperpowerAttachKind.callScreenshot,
                      imageB64: base64Encode(bytes),
                      mime: 'image/jpeg',
                      pastedText: null,
                    ));
                  },
                  icon: const Icon(Icons.phone_callback_rounded),
                  label: const Text('Call log screenshot'),
                  style: FilledButton.styleFrom(backgroundColor: const Color(0xFF2563EB), padding: const EdgeInsets.symmetric(vertical: 13)),
                ),
                const SizedBox(height: 8),
                FilledButton.icon(
                  onPressed: () async {
                    final picker = ImagePicker();
                    final img = await picker.pickImage(source: ImageSource.gallery, imageQuality: 85, maxWidth: 1600);
                    if (img == null || !ctx.mounted) return;
                    final bytes = await img.readAsBytes();
                    Navigator.pop(ctx, (
                      kind: NgmySuperpowerAttachKind.invoice,
                      imageB64: base64Encode(bytes),
                      mime: 'image/jpeg',
                      pastedText: null,
                    ));
                  },
                  icon: const Icon(Icons.receipt_long_rounded),
                  label: const Text('Invoice / bill photo'),
                  style: FilledButton.styleFrom(backgroundColor: const Color(0xFF00B25A), padding: const EdgeInsets.symmetric(vertical: 13)),
                ),
                const SizedBox(height: 14),
                TextField(
                  controller: pasteC,
                  minLines: 2,
                  maxLines: 5,
                  decoration: InputDecoration(
                    labelText: 'Paste iPhone voicemail text',
                    hintText: 'Copy transcript from Phone app → paste here',
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                ),
                const SizedBox(height: 10),
                OutlinedButton(
                  onPressed: () {
                    final t = pasteC.text.trim();
                    if (t.isEmpty) return;
                    Navigator.pop(ctx, (
                      kind: NgmySuperpowerAttachKind.voicemailPaste,
                      imageB64: null,
                      mime: null,
                      pastedText: t,
                    ));
                  },
                  child: const Text('Save voicemail text'),
                ),
              ],
            ),
          ),
        ),
      );
    },
  );
}

Widget ngmySuperpowerChips({
  required bool isDark,
  required void Function(String prompt) onTap,
  required bool disabled,
}) {
  return SizedBox(
    height: 34,
    child: ListView.separated(
      scrollDirection: Axis.horizontal,
      itemCount: kNgmyHelperSuperpowers.length,
      separatorBuilder: (_, __) => const SizedBox(width: 6),
      itemBuilder: (_, i) {
        final s = kNgmyHelperSuperpowers[i];
        return ActionChip(
          avatar: const Icon(Icons.bolt, size: 14, color: Color(0xFFF59E0B)),
          label: Text(s.label, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w700)),
          backgroundColor: isDark ? const Color(0xFF1C2433) : const Color(0xFFFFF7ED),
          side: BorderSide(color: const Color(0xFFF59E0B).withValues(alpha: 0.45)),
          onPressed: disabled ? null : () => onTap(s.tryPrompt),
        );
      },
    ),
  );
}
