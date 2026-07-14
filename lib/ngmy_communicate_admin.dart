import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_advisor_roster.dart';
import 'ngmy_communicate.dart';
import 'ngmy_communicate_storage.dart';
import 'ngmy_mshauri.dart';

/// Admin → Management → Communicate — create AI companion profiles.
Future<void> showNgmyCommunicateAdminSheet({
  required BuildContext context,
  required dynamic config,
  required bool isDark,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersist,
  String apiKey = '',
}) async {
  ngmyNormalizeAdvisorRosterInConfig(config);
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
                        final created = await _openProfileEditor(ctx, isDark: isDark, apiKey: apiKey);
                        if (created != null) setST(() => profiles = [...profiles, created]);
                      },
                      icon: const Icon(Icons.person_add_rounded),
                      label: const Text('Add companion'),
                      style: FilledButton.styleFrom(backgroundColor: const Color(0xFFEC4899)),
                    ),
                    const SizedBox(height: 8),
                    OutlinedButton.icon(
                      onPressed: () => showNgmyMshauriAdminSheet(
                        context: ctx,
                        config: config,
                        isDark: isDark,
                        onDataChanged: onDataChanged,
                        onPersist: onPersist,
                      ),
                      icon: const Icon(Icons.public_rounded, color: Color(0xFF059669)),
                      label: const Text('Mshauri — state & president settings'),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: const Color(0xFF059669),
                        side: const BorderSide(color: Color(0xFF059669)),
                        minimumSize: const Size(double.infinity, 44),
                      ),
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
                            '${p.gender == 'male' ? 'Male' : 'Female'} · ${ngmyCommunicateRoleLabel(p.role)} · ${p.active ? 'Active' : 'Hidden'}',
                          ),
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              IconButton(
                                icon: const Icon(Icons.edit_outlined, size: 20),
                                onPressed: () async {
                                  final edited = await _openProfileEditor(ctx, isDark: isDark, existing: p, apiKey: apiKey);
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

InputDecoration _commEditorField(String label, {String? hint, bool dark = true}) {
  return InputDecoration(
    labelText: label,
    hintText: hint,
    labelStyle: TextStyle(color: dark ? Colors.white70 : Colors.black54, fontWeight: FontWeight.w600),
    hintStyle: TextStyle(color: dark ? Colors.white38 : Colors.black38),
    filled: true,
    fillColor: dark ? const Color(0xFF1A1028) : const Color(0xFFF8FAFC),
    border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.12))),
    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1))),
    focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: const BorderSide(color: Color(0xFFEC4899), width: 1.5)),
    contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
  );
}

Future<NgmyCommunicateProfile?> _openProfileEditor(
  BuildContext ctx, {
  required bool isDark,
  NgmyCommunicateProfile? existing,
  String apiKey = '',
}) async {
  final nameC = TextEditingController(text: existing?.name ?? '');
  final bioC = TextEditingController(text: existing?.bio ?? '');
  final personalityC = TextEditingController(text: existing?.personality ?? '');
  final emojiC = TextEditingController(text: existing?.emoji ?? '👩');
  var gender = existing?.gender ?? 'female';
  var role = existing?.role ?? 'companion';
  var active = existing?.active ?? true;
  var avatarUrl = existing?.avatarUrl ?? '';
  final aiPromptC = TextEditingController();
  var aiGenerating = false;

  final result = await showModalBottomSheet<NgmyCommunicateProfile>(
    context: ctx,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
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
          final bottom = MediaQuery.viewInsetsOf(dCtx).bottom;
          return Padding(
            padding: EdgeInsets.only(bottom: bottom),
            child: Container(
              constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(dCtx).height * 0.94),
              margin: const EdgeInsets.fromLTRB(10, 10, 10, 14),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(28),
                gradient: const LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xFF1A0F2E), Color(0xFF0D0818)],
                ),
                border: Border.all(color: const Color(0xFFF472B6).withValues(alpha: 0.35)),
                boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.25), blurRadius: 32, offset: const Offset(0, 12))],
              ),
              child: Column(
                children: [
                  const SizedBox(height: 10),
                  Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(4))),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(20, 16, 12, 8),
                    child: Row(
                      children: [
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                existing == null ? 'Create Companion' : 'Edit Companion',
                                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, letterSpacing: 0.2),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                '$kNgmyAdvisorsHubTitle · ${ngmyCommunicateRoleLabel(role)}',
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12, fontWeight: FontWeight.w600),
                              ),
                            ],
                          ),
                        ),
                        IconButton(
                          onPressed: () => Navigator.pop(dCtx),
                          icon: Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.08)),
                            child: const Icon(Icons.close_rounded, color: Colors.white70, size: 20),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.fromLTRB(20, 4, 20, 12),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Center(
                            child: Container(
                              padding: const EdgeInsets.all(4),
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                gradient: const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)]),
                                boxShadow: [BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.4), blurRadius: 20)],
                              ),
                              child: NgmyCommunicateAvatar(profile: preview, size: 96, glow: true),
                            ),
                          ),
                          const SizedBox(height: 14),
                          Row(
                            children: [
                              Expanded(
                                child: FilledButton.icon(
                                  onPressed: () async {
                                    final img = await ImagePicker().pickImage(source: ImageSource.gallery, imageQuality: 80, maxWidth: 512);
                                    if (img == null) return;
                                    final bytes = await img.readAsBytes();
                                    setD(() => avatarUrl = 'data:image/jpeg;base64,${base64Encode(bytes)}');
                                  },
                                  icon: const Icon(Icons.add_a_photo_rounded, size: 18),
                                  label: const Text('Photo'),
                                  style: FilledButton.styleFrom(
                                    backgroundColor: const Color(0xFFEC4899),
                                    foregroundColor: Colors.white,
                                    padding: const EdgeInsets.symmetric(vertical: 12),
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  ),
                                ),
                              ),
                              if (avatarUrl.isNotEmpty) ...[
                                const SizedBox(width: 10),
                                TextButton(
                                  onPressed: () => setD(() => avatarUrl = ''),
                                  child: const Text('Remove', style: TextStyle(color: Color(0xFFF472B6))),
                                ),
                              ],
                            ],
                          ),
                          const SizedBox(height: 12),
                          TextField(
                            controller: aiPromptC,
                            style: const TextStyle(color: Colors.white, fontSize: 13),
                            decoration: _commEditorField('AI image prompt', hint: 'Any look — portrait, romantic, artistic…'),
                          ),
                          const SizedBox(height: 8),
                          OutlinedButton.icon(
                            onPressed: aiGenerating
                                ? null
                                : () async {
                                    final prompt = aiPromptC.text.trim();
                                    if (prompt.isEmpty || apiKey.trim().isEmpty) return;
                                    setD(() => aiGenerating = true);
                                    final creds = ngmyParseAiCredentials(apiKey);
                                    final result = await ngmyAiGenerateImage(creds, prompt);
                                    if (!dCtx.mounted) return;
                                    setD(() => aiGenerating = false);
                                    if (result.bytes != null) {
                                      setD(() => avatarUrl = 'data:image/jpeg;base64,${base64Encode(result.bytes!)}');
                                    } else {
                                      ScaffoldMessenger.of(dCtx).showSnackBar(
                                        SnackBar(content: Text(result.error ?? 'Image generation failed')),
                                      );
                                    }
                                  },
                            icon: aiGenerating
                                ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                                : const Icon(Icons.auto_awesome_rounded, size: 18, color: Color(0xFFF472B6)),
                            label: Text(aiGenerating ? 'Creating…' : 'Generate avatar photo', style: const TextStyle(color: Color(0xFFF472B6), fontWeight: FontWeight.w700)),
                            style: OutlinedButton.styleFrom(
                              side: BorderSide(color: const Color(0xFFF472B6).withValues(alpha: 0.5)),
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                            ),
                          ),
                          const SizedBox(height: 18),
                          Text('Basics', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
                          const SizedBox(height: 10),
                          TextField(
                            controller: nameC,
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
                            decoration: _commEditorField('Name'),
                            onChanged: (_) => setD(() {}),
                          ),
                          const SizedBox(height: 12),
                          TextField(
                            controller: emojiC,
                            style: const TextStyle(color: Colors.white),
                            decoration: _commEditorField('Emoji fallback', hint: '👩 or 👨'),
                            onChanged: (_) => setD(() {}),
                          ),
                          const SizedBox(height: 18),
                          Text('Gender', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
                          const SizedBox(height: 8),
                          Row(
                            children: [
                              _genderChip('female', 'Female', Icons.female_rounded, gender, (v) => setD(() => gender = v)),
                              const SizedBox(width: 10),
                              _genderChip('male', 'Male', Icons.male_rounded, gender, (v) => setD(() => gender = v)),
                            ],
                          ),
                          const SizedBox(height: 18),
                          Text('Role', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
                          const SizedBox(height: 8),
                          Wrap(
                            spacing: 8,
                            runSpacing: 8,
                            children: kNgmyCommunicateRoles.entries.map((e) {
                              final sel = role == e.key;
                              return GestureDetector(
                                onTap: () => setD(() => role = e.key),
                                child: AnimatedContainer(
                                  duration: const Duration(milliseconds: 180),
                                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(20),
                                    gradient: sel ? const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)]) : null,
                                    color: sel ? null : Colors.white.withValues(alpha: 0.06),
                                    border: Border.all(color: sel ? Colors.transparent : Colors.white.withValues(alpha: 0.14)),
                                  ),
                                  child: Text(
                                    e.value,
                                    style: TextStyle(color: sel ? Colors.white : Colors.white60, fontSize: 11, fontWeight: FontWeight.w800),
                                  ),
                                ),
                              );
                            }).toList(),
                          ),
                          const SizedBox(height: 18),
                          Text('Personality & bio', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
                          const SizedBox(height: 10),
                          TextField(
                            controller: personalityC,
                            maxLines: 3,
                            style: const TextStyle(color: Colors.white),
                            decoration: _commEditorField(
                              'Personality',
                              hint: switch (ngmyCommunicateNormalizeRole(role)) {
                                'romantic' => 'Hard to get, loyal when official…',
                                'therapist' => 'Warm, professional…',
                                'translator' => 'Patient, simple, celebrates small wins…',
                                _ => 'How they talk and act…',
                              },
                            ),
                          ),
                          const SizedBox(height: 12),
                          TextField(
                            controller: bioC,
                            maxLines: 2,
                            style: const TextStyle(color: Colors.white),
                            decoration: _commEditorField('Bio (optional)'),
                          ),
                          const SizedBox(height: 8),
                          Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(14),
                              color: Colors.white.withValues(alpha: 0.05),
                              border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                            ),
                            child: SwitchListTile(
                              title: Text('Visible in $kNgmyAdvisorsHubTitle', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                              subtitle: Text('Off = hidden from users', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11)),
                              value: active,
                              activeThumbColor: const Color(0xFFEC4899),
                              onChanged: (v) => setD(() => active = v),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(20, 8, 20, 18),
                    child: Row(
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () => Navigator.pop(dCtx),
                            style: OutlinedButton.styleFrom(
                              foregroundColor: Colors.white70,
                              side: BorderSide(color: Colors.white.withValues(alpha: 0.2)),
                              padding: const EdgeInsets.symmetric(vertical: 14),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                            ),
                            child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          flex: 2,
                          child: FilledButton(
                            onPressed: () {
                              final name = nameC.text.trim();
                              if (name.isEmpty) return;
                              final id = existing?.id ?? 'cmp-${DateTime.now().microsecondsSinceEpoch}';
                              if (avatarUrl.trim().isNotEmpty) {
                                NgmyCommunicateAvatarCache.saveFromDataUrl(id, avatarUrl);
                              }
                              Navigator.pop(
                                dCtx,
                                NgmyCommunicateProfile(
                                  id: id,
                                  name: name,
                                  gender: gender,
                                  personality: personalityC.text.trim(),
                                  bio: bioC.text.trim(),
                                  emoji: emojiC.text.trim().isEmpty ? (gender == 'male' ? '👨' : '👩') : emojiC.text.trim(),
                                  avatarUrl: avatarUrl,
                                  role: ngmyCommunicateNormalizeRole(role),
                                  active: active,
                                ),
                              );
                            },
                            style: FilledButton.styleFrom(
                              backgroundColor: const Color(0xFFEC4899),
                              padding: const EdgeInsets.symmetric(vertical: 14),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                            ),
                            child: Text(existing == null ? 'Create companion' : 'Save changes', style: const TextStyle(fontWeight: FontWeight.w900)),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      );
    },
  );

  nameC.dispose();
  bioC.dispose();
  personalityC.dispose();
  emojiC.dispose();
  aiPromptC.dispose();
  return result;
}

Widget _genderChip(String value, String label, IconData icon, String selected, ValueChanged<String> onTap) {
  final sel = selected == value;
  return Expanded(
    child: GestureDetector(
      onTap: () => onTap(value),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.symmetric(vertical: 12),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(14),
          gradient: sel ? const LinearGradient(colors: [Color(0xFFEC4899), Color(0xFF9333EA)]) : null,
          color: sel ? null : Colors.white.withValues(alpha: 0.06),
          border: Border.all(color: sel ? Colors.transparent : Colors.white.withValues(alpha: 0.12)),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 16, color: sel ? Colors.white : Colors.white54),
            const SizedBox(width: 6),
            Text(label, style: TextStyle(color: sel ? Colors.white : Colors.white54, fontWeight: FontWeight.w800, fontSize: 12)),
          ],
        ),
      ),
    ),
  );
}
