import 'package:flutter/material.dart';

import 'ngmy_app_builder_storage.dart';
import 'ngmy_app_builder_urls.dart';
import 'ngmy_app_studio_access.dart';

/// Admin controls for NGMY App Builder — local storage only, no cloud database.
Future<void> showNgmyAppBuilderAdminSheet({
  required BuildContext context,
  required dynamic config,
  required bool isDark,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersist,
}) async {
  var enabled = (config as dynamic).appBuilderEnabled == true;
  var published = await ngmyLoadLocalPublishedApps();
  var queue = await ngmyLoadLocalReviewQueue();

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
                    const Text('NGMY App Studio', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20)),
                    const SizedBox(height: 6),
                    Text(
                      'Apps are stored on each user\'s device only — not in Supabase. Users download .ngmy.json backups to restore apps.',
                      style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54, height: 1.35),
                    ),
                    const SizedBox(height: 14),
                    SwitchListTile(
                      contentPadding: EdgeInsets.zero,
                      title: const Text('Open App Builder for all users', style: TextStyle(fontWeight: FontWeight.w800)),
                      subtitle: const Text('When on, everyone can tap the center star in NGMY Hub. Tap Save to sync for all users.'),
                      value: enabled,
                      activeThumbColor: const Color(0xFFF59E0B),
                      onChanged: (v) => setST(() => enabled = v),
                    ),
                    const SizedBox(height: 12),
                    Text('Review queue on this device (${queue.length})', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
                    const SizedBox(height: 8),
                    if (queue.isEmpty)
                      Text('No apps waiting on this device.', style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54))
                    else
                      ...queue.map((p) {
                        return Card(
                          margin: const EdgeInsets.only(bottom: 8),
                          color: isDark ? const Color(0xFF151922) : const Color(0xFFF8FAFC),
                          child: Padding(
                            padding: const EdgeInsets.all(12),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(p.name, style: const TextStyle(fontWeight: FontWeight.w800)),
                                Text('by ${p.ownerEmail} · ${p.screens.length} screens', style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),
                                const SizedBox(height: 8),
                                Row(
                                  children: [
                                    Expanded(
                                      child: FilledButton(
                                        onPressed: () async {
                                          await ngmyPublishAppProject(config, p.ownerEmail, p);
                                          published = await ngmyLoadLocalPublishedApps();
                                          queue = await ngmyLoadLocalReviewQueue();
                                          setST(() {});
                                        },
                                        style: FilledButton.styleFrom(backgroundColor: const Color(0xFF10B981)),
                                        child: const Text('Approve'),
                                      ),
                                    ),
                                    const SizedBox(width: 8),
                                    Expanded(
                                      child: OutlinedButton(
                                        onPressed: () async {
                                          await ngmyRejectAppProject(config, p.ownerEmail, p, 'Please improve navigation and copy, then resubmit.');
                                          queue = await ngmyLoadLocalReviewQueue();
                                          setST(() {});
                                        },
                                        child: const Text('Reject'),
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        );
                      }),
                    const SizedBox(height: 16),
                    Text('Published on this device (${published.length})', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
                    const SizedBox(height: 8),
                    if (published.isEmpty)
                      Text('No published apps on this device.', style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54))
                    else
                      ...published.map((p) {
                        return ListTile(
                          contentPadding: EdgeInsets.zero,
                          title: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w700)),
                          subtitle: Text(ngmyResolvedPublicUrl(p).isNotEmpty ? ngmyResolvedPublicUrl(p) : 'by ${p.ownerEmail}'),
                          trailing: IconButton(
                            icon: const Icon(Icons.public_off_outlined, color: Color(0xFFEF4444)),
                            onPressed: () async {
                              await ngmyUnpublishAppProject(config, p.id);
                              published = await ngmyLoadLocalPublishedApps();
                              setST(() {});
                            },
                          ),
                        );
                      }),
                    const SizedBox(height: 18),
                    FilledButton(
                      onPressed: () async {
                        (config as dynamic).appBuilderEnabled = enabled;
                        onDataChanged();
                        final cloudOk = await NgmyAppStudioAccess.persist(config);
                        await onPersist();
                        if (ctx.mounted) {
                          Navigator.pop(ctx);
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: Text(
                                cloudOk
                                    ? 'App Studio is ${enabled ? 'open' : 'closed'} for all users.'
                                    : 'Saved on this device — connect and save again to sync for everyone.',
                              ),
                              backgroundColor: cloudOk ? const Color(0xFF16A34A) : Colors.orange,
                            ),
                          );
                        }
                      },
                      style: FilledButton.styleFrom(backgroundColor: const Color(0xFFF59E0B), minimumSize: const Size(double.infinity, 48)),
                      child: const Text('Save settings', style: TextStyle(fontWeight: FontWeight.w800)),
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
