import 'package:flutter/material.dart';

import 'ngmy_phone_contacts.dart';
import 'ngmy_phone_integrations.dart';

NgmyPhoneAction ngmyPhoneActionWithContact(NgmyPhoneAction action, NgmyPhoneContact contact) {
  final fields = Map<String, String>.from(action.fields);
  fields['phone'] = contact.primaryPhone;
  fields['contactName'] = contact.name;
  return NgmyPhoneAction(type: action.type, fields: fields);
}

bool ngmyPhoneActionNeedsPhone(NgmyPhoneAction action) {
  return action.type == 'call' || action.type == 'sms' || action.type == 'whatsapp';
}

Future<List<NgmyPhoneContact>> ngmyResolveContactsForName(
  String email,
  String name, {
  List<Map<String, dynamic>> ngmyUsers = const [],
}) async {
  final all = await NgmyPhoneContactsStore.ensureHydrated(email, ngmyUsers: ngmyUsers);
  return NgmyPhoneContactsStore.search(all, name);
}

Future<NgmyPhoneContact?> ngmyPickContact(
  BuildContext context,
  List<NgmyPhoneContact> matches,
  String query,
) async {
  if (matches.length == 1) return matches.first;
  if (!context.mounted) return null;
  return showModalBottomSheet<NgmyPhoneContact>(
    context: context,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      return Container(
        margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF1C2433) : Colors.white,
          borderRadius: BorderRadius.circular(22),
        ),
        child: SafeArea(
          top: false,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const SizedBox(height: 10),
              Text(
                'Which $query?',
                style: TextStyle(
                  fontSize: 17,
                  fontWeight: FontWeight.w800,
                  color: isDark ? Colors.white : const Color(0xFF0F172A),
                ),
              ),
              const SizedBox(height: 8),
              Flexible(
                child: ListView.separated(
                  shrinkWrap: true,
                  itemCount: matches.length,
                  separatorBuilder: (_, __) => Divider(height: 1, color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                  itemBuilder: (_, i) {
                    final c = matches[i];
                    return ListTile(
                      leading: CircleAvatar(
                        backgroundColor: const Color(0xFF00B25A).withValues(alpha: 0.15),
                        child: Text(
                          c.name.isNotEmpty ? c.name[0].toUpperCase() : '?',
                          style: const TextStyle(color: Color(0xFF00B25A), fontWeight: FontWeight.w800),
                        ),
                      ),
                      title: Text(c.name, style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white : null)),
                      subtitle: Text(c.primaryPhone, style: TextStyle(color: isDark ? Colors.white54 : const Color(0xFF64748B))),
                      onTap: () => Navigator.pop(ctx, c),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}

Future<bool> ngmyShowLinkContactsSheet(
  BuildContext context, {
  required String userEmail,
  String? missingName,
  List<Map<String, dynamic>> ngmyUsers = const [],
}) async {
  if (!context.mounted) return false;
  final result = await showModalBottomSheet<bool>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      final nameC = TextEditingController();
      final phoneC = TextEditingController();
      if (missingName != null && missingName.trim().isNotEmpty) {
        nameC.text = missingName.trim();
      }
      var busy = false;
      var count = 0;
      return StatefulBuilder(
        builder: (ctx, setLocal) {
          Future<void> refreshCount() async {
            final list = await NgmyPhoneContactsStore.load(userEmail);
            if (ctx.mounted) setLocal(() => count = list.length);
          }

          if (count == 0) {
            WidgetsBinding.instance.addPostFrameCallback((_) => refreshCount());
          }

          return Padding(
            padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
            child: Container(
              margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
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
                    const Icon(Icons.contacts_rounded, size: 44, color: Color(0xFF00B25A)),
                    const SizedBox(height: 10),
                    Text(
                      'Link your contacts',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      missingName != null
                          ? 'I could not find "$missingName". Link your phone contacts or add them below — then say their name only (no number needed).'
                          : 'Link contacts so Helper AI can call or text people by name only.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13, height: 1.4, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
                    ),
                    if (count > 0) ...[
                      const SizedBox(height: 10),
                      Text('$count contacts linked', textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF00B25A), fontWeight: FontWeight.w700)),
                    ],
                    const SizedBox(height: 16),
                    if (!busy)
                      FilledButton.icon(
                        onPressed: () async {
                          setLocal(() => busy = true);
                          final n = await NgmyPhoneContactsStore.syncFromDevice(userEmail);
                          if (n == 0 && ctx.mounted) {
                            ScaffoldMessenger.of(ctx).showSnackBar(
                              const SnackBar(content: Text('Allow Contacts access in Settings, or add manually below.')),
                            );
                          }
                          await refreshCount();
                          if (ctx.mounted) setLocal(() => busy = false);
                        },
                        icon: const Icon(Icons.phone_iphone_rounded),
                        label: const Text('Sync from phone contacts'),
                        style: FilledButton.styleFrom(backgroundColor: const Color(0xFF00B25A), padding: const EdgeInsets.symmetric(vertical: 13)),
                      ),
                    if (busy) const Center(child: Padding(padding: EdgeInsets.all(12), child: CircularProgressIndicator())),
                    const SizedBox(height: 8),
                    OutlinedButton.icon(
                      onPressed: busy
                          ? null
                          : () async {
                              setLocal(() => busy = true);
                              final n = await NgmyPhoneContactsStore.importVcfFile(userEmail);
                              if (n == 0 && ctx.mounted) {
                                ScaffoldMessenger.of(ctx).showSnackBar(
                                  const SnackBar(content: Text('No contacts found in that file.')),
                                );
                              }
                              await refreshCount();
                              if (ctx.mounted) setLocal(() => busy = false);
                            },
                      icon: const Icon(Icons.upload_file_rounded),
                      label: const Text('Import contact file (.vcf)'),
                    ),
                    const SizedBox(height: 14),
                    TextField(
                      controller: nameC,
                      decoration: const InputDecoration(labelText: 'Name', hintText: 'Mom'),
                    ),
                    const SizedBox(height: 8),
                    TextField(
                      controller: phoneC,
                      keyboardType: TextInputType.phone,
                      decoration: const InputDecoration(labelText: 'Phone number'),
                    ),
                    const SizedBox(height: 12),
                    FilledButton(
                      onPressed: () async {
                        await NgmyPhoneContactsStore.addManual(userEmail, name: nameC.text, phone: phoneC.text);
                        await refreshCount();
                        if (ctx.mounted) Navigator.pop(ctx, true);
                      },
                      style: FilledButton.styleFrom(backgroundColor: const Color(0xFF2563EB)),
                      child: const Text('Save contact'),
                    ),
                    TextButton(onPressed: () => Navigator.pop(ctx, count > 0), child: const Text('Done')),
                  ],
                ),
              ),
            ),
          );
        },
      );
    },
  );
  if (result == true) {
    await NgmyPhoneContactsStore.ensureHydrated(userEmail, ngmyUsers: ngmyUsers);
    return true;
  }
  final list = await NgmyPhoneContactsStore.load(userEmail);
  return list.isNotEmpty;
}

Future<List<NgmyPhoneAction>> ngmyResolvePhoneActionsByName({
  required BuildContext context,
  required String userEmail,
  required List<NgmyPhoneAction> actions,
  List<Map<String, dynamic>> ngmyUsers = const [],
}) async {
  final all = await NgmyPhoneContactsStore.ensureHydrated(userEmail, ngmyUsers: ngmyUsers);
  final out = <NgmyPhoneAction>[];
  for (final action in actions) {
    if (!ngmyPhoneActionNeedsPhone(action)) {
      out.add(action);
      continue;
    }
    var phone = (action.fields['phone'] ?? '').trim();
    final name = (action.fields['name'] ?? action.fields['contact'] ?? '').trim();
    if (phone.isNotEmpty) {
      out.add(action);
      continue;
    }
    if (name.isEmpty) {
      out.add(action);
      continue;
    }
    var matches = NgmyPhoneContactsStore.search(all, name);
    if (matches.isEmpty) {
      if (!context.mounted) continue;
      final linked = await ngmyShowLinkContactsSheet(context, userEmail: userEmail, missingName: name, ngmyUsers: ngmyUsers);
      if (!linked || !context.mounted) continue;
      final refreshed = await NgmyPhoneContactsStore.load(userEmail);
      matches = NgmyPhoneContactsStore.search(refreshed, name);
      if (matches.isEmpty) continue;
    }
    if (!context.mounted) continue;
    final picked = await ngmyPickContact(context, matches, name);
    if (picked == null) continue;
    out.add(ngmyPhoneActionWithContact(action, picked));
  }
  return out;
}

List<Map<String, dynamic>> ngmyUsersToContactMaps(List<dynamic> users) {
  return users.map((u) {
    if (u is Map) return Map<String, dynamic>.from(u);
    try {
      return Map<String, dynamic>.from((u as dynamic).toJson() as Map);
    } catch (_) {
      return <String, dynamic>{};
    }
  }).where((m) => m.isNotEmpty).toList();
}
