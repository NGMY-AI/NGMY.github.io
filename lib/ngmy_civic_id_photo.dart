import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_civic_registry_members.dart';

const _promptKeyPrefix = 'ngmy_civic_id_photo_prompted_v1_';

Future<bool> ngmyCivicIdPhotoPromptWasShown(String email) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool('$_promptKeyPrefix${NgmyCivicRegistryMembers.emailKey(email)}') == true;
  } catch (_) {
    return false;
  }
}

Future<void> ngmyMarkCivicIdPhotoPromptShown(String email) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('$_promptKeyPrefix${NgmyCivicRegistryMembers.emailKey(email)}', true);
  } catch (_) {}
}

Future<String?> ngmyPickCivicIdPhotoBytes() async {
  final img = await ImagePicker().pickImage(source: ImageSource.gallery, imageQuality: 78, maxWidth: 900);
  if (img == null) return null;
  final bytes = await img.readAsBytes();
  return 'data:image/jpeg;base64,${base64Encode(bytes)}';
}

void ngmySaveCivicIdPhotoOnMember(dynamic config, String email, String photoPath) {
  final member = NgmyCivicRegistryMembers.findByEmail(config, email);
  if (member == null) return;
  NgmyCivicRegistryMembers.upsert(config, {...member, 'idPhotoPath': photoPath.trim()});
}

String? ngmyCivicIdPhotoForRecord(Map<String, dynamic> record, {String? profilePicturePath}) {
  final civic = (record['idPhotoPath'] ?? '').toString().trim();
  if (civic.isNotEmpty) return civic;
  final profile = (profilePicturePath ?? '').trim();
  if (profile.isNotEmpty) return profile;
  return null;
}

Future<void> showNgmyCivicIdPhotoSheet(
  BuildContext context, {
  required dynamic config,
  required String email,
  required Future<void> Function() onSaved,
  bool skippable = true,
}) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      var uploading = false;
      return StatefulBuilder(
        builder: (ctx, setSheet) {
          Future<void> pickAndSave() async {
            setSheet(() => uploading = true);
            final path = await ngmyPickCivicIdPhotoBytes();
            if (path == null) {
              setSheet(() => uploading = false);
              return;
            }
            ngmySaveCivicIdPhotoOnMember(config, email, path);
            await ngmyMarkCivicIdPhotoPromptShown(email);
            await onSaved();
            if (ctx.mounted) Navigator.pop(ctx);
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('ID photo saved — it will appear on your registry card.'), backgroundColor: Color(0xFF059669)),
              );
            }
          }

          return Padding(
            padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
            child: Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                margin: const EdgeInsets.fromLTRB(14, 14, 14, 18),
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 22),
                decoration: BoxDecoration(
                  color: isDark ? const Color(0xFF0F111A) : Colors.white,
                  borderRadius: BorderRadius.circular(24),
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    const Text('Add your ID photo', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)),
                    const SizedBox(height: 8),
                    Text(
                      'Optional — upload a portrait for your Civic Registry ID or passport card. You can skip and add one later from the ID icon.',
                      style: TextStyle(fontSize: 13, height: 1.35, color: isDark ? Colors.white60 : Colors.black54),
                    ),
                    const SizedBox(height: 16),
                    FilledButton.icon(
                      onPressed: uploading ? null : pickAndSave,
                      icon: uploading
                          ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Icon(Icons.add_a_photo_outlined),
                      label: Text(uploading ? 'Saving…' : 'Choose photo'),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF6200EE),
                        minimumSize: const Size(double.infinity, 48),
                      ),
                    ),
                    if (skippable) ...[
                      const SizedBox(height: 8),
                      TextButton(
                        onPressed: uploading
                            ? null
                            : () async {
                                await ngmyMarkCivicIdPhotoPromptShown(email);
                                if (ctx.mounted) Navigator.pop(ctx);
                              },
                        child: const Text('Skip for now'),
                      ),
                    ],
                  ],
                ),
              ),
            ),
          );
        },
      );
    },
  );
}
