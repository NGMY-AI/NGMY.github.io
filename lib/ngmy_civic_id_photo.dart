import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_civic_registry_members.dart';

const _promptKeyPrefix = 'ngmy_civic_id_photo_prompted_v1_';
const _localPhotoKeyPrefix = 'ngmy_civic_id_photo_local_v1_';

/// Short token stored on the member / home card — real bytes live in prefs.
const kNgmyCivicIdPhotoLocalToken = 'local:civic';

final Map<String, String> _localPhotoCache = {};

String _emailKey(String email) => NgmyCivicRegistryMembers.emailKey(email);

String _localPhotoKey(String email) => '$_localPhotoKeyPrefix${_emailKey(email)}';

Future<bool> ngmyCivicIdPhotoPromptWasShown(String email) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool('$_promptKeyPrefix${_emailKey(email)}') == true;
  } catch (_) {
    return false;
  }
}

Future<void> ngmyMarkCivicIdPhotoPromptShown(String email) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('$_promptKeyPrefix${_emailKey(email)}', true);
  } catch (_) {}
}

/// Persists JPEG bytes on-device so the Civic ID photo works offline.
Future<String> ngmySaveCivicIdPhotoLocal(String email, Uint8List bytes) async {
  final b64 = base64Encode(bytes);
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_localPhotoKey(email), b64);
  final dataUrl = 'data:image/jpeg;base64,$b64';
  _localPhotoCache[_emailKey(email)] = dataUrl;
  return kNgmyCivicIdPhotoLocalToken;
}

/// Loads the on-device photo into the sync cache (call on app / home load).
Future<String?> ngmyLoadCivicIdPhotoLocal(String email) async {
  final cached = _localPhotoCache[_emailKey(email)];
  if (cached != null && cached.isNotEmpty) return cached;
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_localPhotoKey(email));
    if (raw == null || raw.isEmpty) return null;
    final dataUrl = raw.startsWith('data:') ? raw : 'data:image/jpeg;base64,$raw';
    _localPhotoCache[_emailKey(email)] = dataUrl;
    return dataUrl;
  } catch (_) {
    return null;
  }
}

String? ngmyCachedCivicIdPhoto(String email) {
  final v = _localPhotoCache[_emailKey(email)];
  if (v == null || v.isEmpty) return null;
  return v;
}

bool ngmyIsCivicIdPhotoLocalToken(String? path) {
  final p = (path ?? '').trim();
  return p == kNgmyCivicIdPhotoLocalToken || p.startsWith('local:civic');
}

Future<String?> ngmyPickCivicIdPhotoBytes() async {
  final img = await ImagePicker().pickImage(
    source: ImageSource.gallery,
    imageQuality: 62,
    maxWidth: 640,
  );
  if (img == null) return null;
  final bytes = await img.readAsBytes();
  return 'data:image/jpeg;base64,${base64Encode(bytes)}';
}

/// Pick from gallery and save locally; returns the `local:civic` token.
Future<String?> ngmyPickAndPersistCivicIdPhoto(String email) async {
  final img = await ImagePicker().pickImage(
    source: ImageSource.gallery,
    imageQuality: 62,
    maxWidth: 640,
  );
  if (img == null) return null;
  final bytes = await img.readAsBytes();
  return ngmySaveCivicIdPhotoLocal(email, bytes);
}

/// Migrates a data-URL photo into local storage; returns the token (or existing path).
Future<String> ngmyEnsureCivicIdPhotoLocal(String email, String photoPath) async {
  final src = photoPath.trim();
  if (src.isEmpty) return '';
  if (ngmyIsCivicIdPhotoLocalToken(src)) {
    await ngmyLoadCivicIdPhotoLocal(email);
    return kNgmyCivicIdPhotoLocalToken;
  }
  if (src.startsWith('data:image')) {
    try {
      final b64 = src.contains(',') ? src.split(',').last : src;
      return ngmySaveCivicIdPhotoLocal(email, base64Decode(b64));
    } catch (_) {
      return src;
    }
  }
  // Already a short path / URL — keep, but prefer local if we have one.
  final local = await ngmyLoadCivicIdPhotoLocal(email);
  if (local != null) return kNgmyCivicIdPhotoLocalToken;
  return src;
}

void ngmySaveCivicIdPhotoOnMember(dynamic config, String email, String photoPath) {
  final member = NgmyCivicRegistryMembers.findByEmail(config, email);
  if (member == null) return;
  NgmyCivicRegistryMembers.upsert(config, {...member, 'idPhotoPath': photoPath.trim()});
}

String? ngmyCivicIdPhotoForRecord(Map<String, dynamic> record, {String? profilePicturePath, String? emailHint}) {
  final civic = (record['idPhotoPath'] ?? '').toString().trim();
  final email = (emailHint ?? record['email'] ?? '').toString().trim();
  if (ngmyIsCivicIdPhotoLocalToken(civic) || civic.isEmpty) {
    final cached = email.isEmpty ? null : ngmyCachedCivicIdPhoto(email);
    if (cached != null && cached.isNotEmpty) return cached;
  }
  if (civic.isNotEmpty && !ngmyIsCivicIdPhotoLocalToken(civic)) return civic;
  final profile = (profilePicturePath ?? '').trim();
  if (profile.isNotEmpty) return profile;
  if (email.isNotEmpty) {
    final cached = ngmyCachedCivicIdPhoto(email);
    if (cached != null && cached.isNotEmpty) return cached;
  }
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
            final token = await ngmyPickAndPersistCivicIdPhoto(email);
            if (token == null) {
              setSheet(() => uploading = false);
              return;
            }
            ngmySaveCivicIdPhotoOnMember(config, email, token);
            await ngmyMarkCivicIdPhotoPromptShown(email);
            await onSaved();
            if (ctx.mounted) Navigator.pop(ctx);
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('ID photo saved on this device — it stays available offline.'),
                  backgroundColor: Color(0xFF059669),
                ),
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
                    Text(
                      skippable ? 'Add your ID photo' : 'Add your ID photo first',
                      style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 18),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      skippable
                          ? 'Optional — upload a portrait for your Civic Registry ID. It is saved on this device so it stays when you are offline.'
                          : 'Upload a portrait photo for your Civic Registry ID before adding it to Home. It is saved on this device.',
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
