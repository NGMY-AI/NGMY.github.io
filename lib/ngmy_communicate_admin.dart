import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_communicate.dart';

/// Admin → Management → Communicate — create AI companion profiles.
Future<void> showNgmyCommunicateAdminSheet({
  required BuildContext context,
  required dynamic config,
  required bool isDark,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersist,
}) async {
  var profiles = ngmyCommunicateProfilesFromConfig(config);
  final raw = (config as dynamic).communicateProfiles;
  if (raw is List) {
    profiles = raw
        .map((e) => e is Map ? NgmyCommunicateProfile.fromMap(Map<String, dynamic>.from(e)) : null)
        .whereType<NgmyCommunicateProfile>()
        .where((p) => p.id.isNotEmpty)
        .toList();
  }
  var enabled = (config as dynamic).communicateEnabled == true;

  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setST) {
          return Padding(
            padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
            child: Container(
              constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(ctx).height * 0.9),
              margin: const EdgeInsets.fromLTRB(14, 14, 14, 18),
              padding: const EdgeInsets.fromLTRB(20, 18, 20, 22),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF0F111A) : Colors.white,
                borderRadius: BorderRadius.circular(26),
                border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
              ),
              child: SingleChildScrollView(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    const Text('Communicate Companions', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20)),
                    const SizedBox(height: 6),
                    Text(
                      'Create AI people for users to chat with. Double-tap Chat tab to reveal Communicate.',
                      style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54, height: 1.35),
                    ),
                    const SizedBox(height: 14),
                    SwitchListTile(
                      contentPadding: EdgeInsets.zero,
                      title: const Text('Open Communicate for users', style: TextStyle(fontWeight: FontWeight.w800)),
                      subtitle: const Text('When off, double-tap Chat does nothing extra'),
                      value: enabled,
                      activeThumbColor: const Color(0xFFEC4899),
                      onChanged: (v) => setST(() => enabled = v),
                    ),
                    const SizedBox(height: 8),
                    FilledButton.icon(
                      onPressed: () async {
                        final created = await _openProfileEditor(ctx, isDark: isDark);
                        if (created != null) setST(() => profiles = [...profiles, created]);
                      },
                      icon: const Icon(Icons.person_add_rounded),
                      label: const Text('Add companion'),
                      style: FilledButton.styleFrom(backgroundColor: const Color(0xFFEC4899)),
                    ),
                    const SizedBox(height: 14),
                    ...profiles.map((p) {
                      return Card(
                        margin: const EdgeInsets.only(bottom: 8),
                        color: isDark ? const Color(0xFF151922) : const Color(0xFFF8FAFC),
                        child: ListTile(
                          leading: NgmyCommunicateAvatar(profile: p, size: 44),
                          title: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w800)),
                          subtitle: Text(
                            '${p.gender == 'male' ? 'Male' : 'Female'} · ${p.role == 'companion' ? 'Companion' : p.role == 'therapist' ? 'Therapist' : 'Teacher'} · ${p.active ? 'Active' : 'Hidden'}',
                          ),
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              IconButton(
                                icon: const Icon(Icons.edit_outlined, size: 20),
                                onPressed: () async {
                                  final edited = await _openProfileEditor(ctx, isDark: isDark, existing: p);
                                  if (edited != null) {
                                    setST(() {
                                      profiles = profiles.map((x) => x.id == edited.id ? edited : x).toList();
                                    });
                                  }
                                },
                              ),
                              IconButton(
                                icon: const Icon(Icons.delete_outline_rounded, size: 20, color: Color(0xFFEF4444)),
                                onPressed: () => setST(() => profiles = profiles.where((x) => x.id != p.id).toList()),
                              ),
                            ],
                          ),
                        ),
                      );
                    }),
                    const SizedBox(height: 16),
                    FilledButton(
                      onPressed: () async {
                        (config as dynamic).communicateEnabled = enabled;
                        (config as dynamic).communicateProfiles = profiles.map((p) => p.toMap()).toList();
                        onDataChanged();
                        final ok = await onPersist();
                        if (ctx.mounted) {
                          Navigator.pop(ctx);
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text(ok ? 'Communicate settings saved.' : 'Saved locally — cloud sync pending.')),
                          );
                        }
                      },
                      style: FilledButton.styleFrom(backgroundColor: const Color(0xFFEC4899), minimumSize: const Size(double.infinity, 48)),
                      child: const Text('Save Communicate', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
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

Future<NgmyCommunicateProfile?> _openProfileEditor(
  BuildContext ctx, {
  required bool isDark,
  NgmyCommunicateProfile? existing,
}) async {
  final nameC = TextEditingController(text: existing?.name ?? '');
  final bioC = TextEditingController(text: existing?.bio ?? '');
  final personalityC = TextEditingController(text: existing?.personality ?? '');
  final emojiC = TextEditingController(text: existing?.emoji ?? '👩');
  var gender = existing?.gender ?? 'female';
  var role = existing?.role ?? 'companion';
  var active = existing?.active ?? true;
  var avatarUrl = existing?.avatarUrl ?? '';

  final result = await showDialog<NgmyCommunicateProfile>(
    context: ctx,
    builder: (dCtx) {
      return StatefulBuilder(
        builder: (dCtx, setD) {
          final preview = NgmyCommunicateProfile(
            id: existing?.id ?? 'preview',
            name: nameC.text.trim().isEmpty ? 'Companion' : nameC.text.trim(),
            gender: gender,
            personality: personalityC.text,
            bio: bioC.text,
            emoji: emojiC.text.trim().isEmpty ? (gender == 'male' ? '👨' : '👩') : emojiC.text.trim(),
            avatarUrl: avatarUrl,
            role: role,
            active: active,
          );
          return AlertDialog(
            title: Text(existing == null ? 'New companion' : 'Edit companion', style: const TextStyle(fontWeight: FontWeight.w900)),
            content: SizedBox(
              width: 340,
              child: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Center(child: NgmyCommunicateAvatar(profile: preview, size: 88)),
                    const SizedBox(height: 10),
                    OutlinedButton.icon(
                      onPressed: () async {
                        final img = await ImagePicker().pickImage(source: ImageSource.gallery, imageQuality: 80, maxWidth: 512);
                        if (img == null) return;
                        final bytes = await img.readAsBytes();
                        setD(() => avatarUrl = 'data:image/jpeg;base64,${base64Encode(bytes)}');
                      },
                      icon: const Icon(Icons.photo_camera_rounded, size: 18),
                      label: const Text('Upload avatar photo'),
                      style: OutlinedButton.styleFrom(foregroundColor: const Color(0xFFEC4899)),
                    ),
                    if (avatarUrl.isNotEmpty)
                      TextButton(
                        onPressed: () => setD(() => avatarUrl = ''),
                        child: const Text('Remove photo — use emoji instead'),
                      ),
                    const SizedBox(height: 12),
                    TextField(
                      controller: nameC,
                      decoration: const InputDecoration(labelText: 'Name', border: OutlineInputBorder()),
                      onChanged: (_) => setD(() {}),
                    ),
                    const SizedBox(height: 10),
                    TextField(
                      controller: emojiC,
                      decoration: const InputDecoration(
                        labelText: 'Emoji fallback',
                        helperText: 'Shown if no photo uploaded',
                        border: OutlineInputBorder(),
                      ),
                      onChanged: (_) => setD(() {}),
                    ),
                    const SizedBox(height: 10),
                    DropdownButtonFormField<String>(
                      value: gender,
                      decoration: const InputDecoration(labelText: 'Gender', border: OutlineInputBorder()),
                      items: const [
                        DropdownMenuItem(value: 'female', child: Text('Female')),
                        DropdownMenuItem(value: 'male', child: Text('Male')),
                      ],
                      onChanged: (v) => setD(() => gender = v ?? 'female'),
                    ),
                    const SizedBox(height: 10),
                    DropdownButtonFormField<String>(
                      value: role,
                      decoration: const InputDecoration(
                        labelText: 'Role',
                        helperText: 'Therapist & teacher get special badges and behavior',
                        border: OutlineInputBorder(),
                      ),
                      items: const [
                        DropdownMenuItem(value: 'companion', child: Text('Companion')),
                        DropdownMenuItem(value: 'therapist', child: Text('Therapist')),
                        DropdownMenuItem(value: 'teacher', child: Text('Teacher')),
                      ],
                      onChanged: (v) => setD(() => role = v ?? 'companion'),
                    ),
                    const SizedBox(height: 10),
                    TextField(
                      controller: personalityC,
                      maxLines: 3,
                      decoration: InputDecoration(
                        labelText: 'Personality',
                        helperText: role == 'therapist'
                            ? 'Warm, professional, comforting…'
                            : role == 'teacher'
                                ? 'Patient, encouraging, clear…'
                                : 'Romantic, playful, jealous, sweet…',
                        border: const OutlineInputBorder(),
                      ),
                    ),
                    const SizedBox(height: 10),
                    TextField(
                      controller: bioC,
                      maxLines: 2,
                      decoration: const InputDecoration(labelText: 'Bio (optional)', border: OutlineInputBorder()),
                    ),
                    SwitchListTile(
                      contentPadding: EdgeInsets.zero,
                      title: const Text('Visible to users'),
                      value: active,
                      activeThumbColor: const Color(0xFFEC4899),
                      onChanged: (v) => setD(() => active = v),
                    ),
                  ],
                ),
              ),
            ),
            actions: [
              TextButton(onPressed: () => Navigator.pop(dCtx), child: const Text('Cancel')),
              FilledButton(
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFFEC4899)),
                onPressed: () {
                  final name = nameC.text.trim();
                  if (name.isEmpty) return;
                  Navigator.pop(
                    dCtx,
                    NgmyCommunicateProfile(
                      id: existing?.id ?? 'cmp-${DateTime.now().microsecondsSinceEpoch}',
                      name: name,
                      gender: gender,
                      personality: personalityC.text.trim(),
                      bio: bioC.text.trim(),
                      emoji: emojiC.text.trim().isEmpty ? (gender == 'male' ? '👨' : '👩') : emojiC.text.trim(),
                      avatarUrl: avatarUrl,
                      role: role,
                      active: active,
                    ),
                  );
                },
                child: const Text('Save'),
              ),
            ],
          );
        },
      );
    },
  );

  nameC.dispose();
  bioC.dispose();
  personalityC.dispose();
  emojiC.dispose();
  return result;
}
