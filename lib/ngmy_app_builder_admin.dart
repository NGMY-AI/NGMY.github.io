import 'package:flutter/material.dart';

import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';

/// Admin controls for NGMY App Builder — release to public + review queue.
Future<void> showNgmyAppBuilderAdminSheet({
  required BuildContext context,
  required dynamic config,
  required bool isDark,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersist,
}) async {
  var enabled = (config as dynamic).appBuilderEnabled == true;
  var published = ngmyPublishedAppsFromConfig(config);
  var queue = ngmyReviewQueueFromConfig(config);

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
                    const Text('NGMY App Builder', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20)),
                    const SizedBox(height: 6),
                    Text(
                      'Admin tests the builder first. When ready, open it for all users via the hub center star.',
                      style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54, height: 1.35),
                    ),
                    const SizedBox(height: 14),
                    SwitchListTile(
                      contentPadding: EdgeInsets.zero,
                      title: const Text('Open App Builder for all users', style: TextStyle(fontWeight: FontWeight.w800)),
                      subtitle: const Text('When on, everyone can tap the center star in NGMY Hub'),
                      value: enabled,
                      activeThumbColor: const Color(0xFFF59E0B),
                      onChanged: (v) => setST(() => enabled = v),
                    ),
                    const SizedBox(height: 12),
                    Text('Review queue (${queue.length})', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
                    const SizedBox(height: 8),
                    if (queue.isEmpty)
                      Text('No apps waiting for review.', style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54))
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
                                          setST(() {
                                            published = ngmyPublishedAppsFromConfig(config);
                                            queue = ngmyReviewQueueFromConfig(config);
                                          });
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
                                          setST(() => queue = ngmyReviewQueueFromConfig(config));
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
                    Text('Published apps (${published.length})', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
                    const SizedBox(height: 8),
                    if (published.isEmpty)
                      Text('No published apps yet.', style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black54))
                    else
                      ...published.map((p) {
                        return ListTile(
                          contentPadding: EdgeInsets.zero,
                          title: Text(p.name, style: const TextStyle(fontWeight: FontWeight.w700)),
                          subtitle: Text('by ${p.ownerEmail}'),
                          trailing: IconButton(
                            icon: const Icon(Icons.public_off_outlined, color: Color(0xFFEF4444)),
                            onPressed: () async {
                              await ngmyUnpublishAppProject(config, p.id);
                              setST(() => published = ngmyPublishedAppsFromConfig(config));
                            },
                          ),
                        );
                      }),
                    const SizedBox(height: 18),
                    FilledButton(
                      onPressed: () async {
                        (config as dynamic).appBuilderEnabled = enabled;
                        onDataChanged();
                        final ok = await onPersist();
                        if (ctx.mounted) {
                          Navigator.pop(ctx);
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: Text(ok ? 'App Builder settings saved.' : 'Saved locally — cloud sync pending.'),
                              backgroundColor: ok ? const Color(0xFF16A34A) : Colors.orange,
                            ),
                          );
                        }
                      },
                      style: FilledButton.styleFrom(backgroundColor: const Color(0xFFF59E0B), minimumSize: const Size(double.infinity, 48)),
                      child: const Text('Save App Builder settings', style: TextStyle(fontWeight: FontWeight.w800)),
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
