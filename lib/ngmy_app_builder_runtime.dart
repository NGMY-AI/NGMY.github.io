import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_runtime_extras.dart';
import 'ngmy_app_builder_runtime_map.dart';
import 'ngmy_app_builder_runtime_social.dart';

/// Renders interactive app screens from JSON — forms save, lists show data, settings work.
class NgmyAppLayoutRenderer extends StatefulWidget {
  final Map<String, dynamic> layout;
  final Color theme;
  final String appId;
  final bool isDarkMode;
  final void Function(String? targetScreenId) onNavigate;
  final void Function(String message) onSnack;
  final bool fullBleed;

  const NgmyAppLayoutRenderer({
    super.key,
    required this.layout,
    required this.theme,
    required this.appId,
    this.isDarkMode = false,
    this.fullBleed = false,
    required this.onNavigate,
    required this.onSnack,
  });

  @override
  State<NgmyAppLayoutRenderer> createState() => _NgmyAppLayoutRendererState();
}

class _NgmyAppLayoutRendererState extends State<NgmyAppLayoutRenderer> with SingleTickerProviderStateMixin {
  late final NgmyAppDataStore _store;
  late AnimationController _menuFx;

  @override
  void initState() {
    super.initState();
    _store = NgmyAppDataStore.forApp(widget.appId);
    _store.ensureLoaded();
    _menuFx = AnimationController(vsync: this, duration: const Duration(seconds: 3))..repeat();
  }

  @override
  void dispose() {
    _menuFx.dispose();
    super.dispose();
  }

  bool _isImmersiveRoot(String type) {
    switch (type) {
      case 'reelfeed':
      case 'reel_feed':
      case 'reels':
      case 'socialfeed':
      case 'social_feed':
      case 'searchhub':
      case 'search_hub':
        return true;
      default:
        return false;
    }
  }

  @override
  Widget build(BuildContext context) {
    final rootType = (widget.layout['type'] ?? 'column').toString().toLowerCase();
    final immersive = widget.fullBleed || _isImmersiveRoot(rootType);
    return ListenableBuilder(
      listenable: _store,
      builder: (context, _) {
        final node = _buildNode(context, widget.layout);
        if (immersive) {
          return SizedBox.expand(child: node);
        }
        return SingleChildScrollView(
          padding: const EdgeInsets.all(16),
          child: node,
        );
      },
    );
  }

  Widget _buildNode(BuildContext context, Map<String, dynamic> node) {
    final type = (node['type'] ?? 'text').toString().toLowerCase();
    final childrenRaw = node['children'];
    final children = <Map<String, dynamic>>[];
    if (childrenRaw is List) {
      for (final c in childrenRaw) {
        if (c is Map) children.add(Map<String, dynamic>.from(c));
      }
    }

    switch (type) {
      case 'column':
        return Column(
          crossAxisAlignment: _crossAlign(node['align']),
          children: children.map((c) => Padding(padding: const EdgeInsets.only(bottom: 10), child: _buildNode(context, c))).toList(),
        );
      case 'row':
        return Row(
          children: children.map((c) => Expanded(child: Padding(padding: const EdgeInsets.only(right: 6), child: _buildNode(context, c)))).toList(),
        );
      case 'wrap':
        return Wrap(spacing: 8, runSpacing: 8, children: children.map((c) => _buildNode(context, c)).toList());
      case 'card':
        return Card(
          elevation: 2,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: children.isEmpty
                ? const SizedBox.shrink()
                : Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: children.map((c) => Padding(padding: const EdgeInsets.only(bottom: 8), child: _buildNode(context, c))).toList(),
                  ),
          ),
        );
      case 'hero':
        return Container(
          width: double.infinity,
          padding: const EdgeInsets.all(22),
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: [widget.theme, widget.theme.withValues(alpha: 0.72)]),
            borderRadius: BorderRadius.circular(20),
            boxShadow: [BoxShadow(color: widget.theme.withValues(alpha: 0.25), blurRadius: 16, offset: const Offset(0, 6))],
          ),
          child: Column(
            children: [
              if ((node['emoji'] ?? '').toString().isNotEmpty)
                Text((node['emoji'] ?? '').toString(), style: const TextStyle(fontSize: 48)),
              if ((node['title'] ?? '').toString().isNotEmpty)
                Text((node['title'] ?? '').toString(), textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24)),
              if ((node['subtitle'] ?? '').toString().isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: Text((node['subtitle'] ?? '').toString(), textAlign: TextAlign.center, style: const TextStyle(color: Colors.white)),
                ),
            ],
          ),
        );
      case 'text':
        final style = (node['style'] ?? '').toString();
        TextStyle? ts;
        if (style == 'title') {
          ts = TextStyle(
            fontWeight: FontWeight.w900,
            fontSize: 22,
            color: widget.isDarkMode ? Colors.white : Colors.black87,
          );
        }
        if (style == 'subtitle') {
          ts = TextStyle(fontSize: 14, color: widget.isDarkMode ? Colors.white70 : Colors.grey.shade700);
        }
        if (style == 'caption') {
          ts = TextStyle(fontSize: 11, color: widget.isDarkMode ? Colors.white54 : Colors.grey);
        }
        return Text(
          (node['text'] ?? '').toString(),
          style: ts ?? TextStyle(color: widget.isDarkMode ? Colors.white : Colors.black87),
          textAlign: _textAlign(node['align']),
        );
      case 'button':
        return FilledButton(
          onPressed: () => _handleButton(node),
          style: FilledButton.styleFrom(
            backgroundColor: widget.theme,
            minimumSize: Size(double.infinity, (node['large'] == true) ? 52 : 46),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
          ),
          child: Text((node['label'] ?? 'Button').toString()),
        );
      case 'outlinedbutton':
      case 'outlined_button':
        return OutlinedButton(
          onPressed: () => _handleButton(node),
          style: OutlinedButton.styleFrom(
            foregroundColor: widget.theme,
            minimumSize: Size(double.infinity, 46),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            side: BorderSide(color: widget.theme),
          ),
          child: Text((node['label'] ?? 'Button').toString()),
        );
      case 'spacer':
        return SizedBox(height: (node['height'] as num?)?.toDouble() ?? 16);
      case 'divider':
        return const Divider();
      case 'image':
        final url = (node['url'] ?? '').toString();
        if (url.isEmpty) {
          return Container(height: 120, decoration: BoxDecoration(color: Colors.grey.shade200, borderRadius: BorderRadius.circular(12)), child: const Icon(Icons.image_outlined, size: 48));
        }
        return ClipRRect(
          borderRadius: BorderRadius.circular(12),
          child: Image.network(url, height: 160, width: double.infinity, fit: BoxFit.cover, errorBuilder: (_, __, ___) => Container(height: 120, color: Colors.grey.shade200)),
        );
      case 'list':
        return _staticList(node);
      case 'menugrid':
      case 'menu_grid':
      case 'menu':
        return _menuGrid(node);
      case 'tabs':
        return _TabsLayout(node: node, theme: widget.theme, builder: _buildNode, onNavigate: widget.onNavigate);
      case 'form':
        return _FormLayout(node: node, theme: widget.theme, store: _store, onSnack: widget.onSnack, onNavigate: widget.onNavigate);
      case 'switch':
      case 'toggle':
        return _SettingSwitch(node: node, theme: widget.theme, store: _store);
      case 'datalist':
      case 'data_list':
        return _DataList(node: node, theme: widget.theme, store: _store, onNavigate: widget.onNavigate, onSnack: widget.onSnack);
      case 'workout':
      case 'workoutplan':
      case 'workout_plan':
        return _WorkoutPlan(node: node, theme: widget.theme, store: _store);
      case 'checklist':
        return _Checklist(node: node, theme: widget.theme, store: _store);
      case 'stat':
      case 'stats':
        return _StatCard(node: node, theme: widget.theme, store: _store);
      case 'chip':
        return Chip(label: Text((node['label'] ?? '').toString()), backgroundColor: widget.theme.withValues(alpha: 0.12));
      case 'qrcode':
      case 'qr_code':
      case 'qr':
        return NgmyRuntimeQrDisplay(
          data: (node['data'] ?? node['value'] ?? node['text'] ?? '').toString(),
          label: (node['label'] ?? '').toString(),
          theme: widget.theme,
          isDark: widget.isDarkMode,
          size: (node['size'] as num?)?.toDouble() ?? 200,
        );
      case 'qrgenerator':
      case 'qr_generator':
      case 'qrGenerator':
        return NgmyRuntimeQrGenerator(
          node: node,
          theme: widget.theme,
          store: _store,
          isDark: widget.isDarkMode,
          onSnack: widget.onSnack,
        );
      case 'invoicebuilder':
      case 'invoice_builder':
      case 'invoiceBuilder':
        return NgmyRuntimeInvoiceBuilder(
          node: node,
          theme: widget.theme,
          store: _store,
          isDark: widget.isDarkMode,
          onSnack: widget.onSnack,
        );
      case 'reelfeed':
      case 'reel_feed':
      case 'reels':
        return NgmyRuntimeReelFeed(
          node: node,
          theme: widget.theme,
          store: _store,
          isDark: widget.isDarkMode,
          onSnack: widget.onSnack,
        );
      case 'socialfeed':
      case 'social_feed':
        return NgmyRuntimeSocialFeed(
          node: node,
          theme: widget.theme,
          store: _store,
          isDark: widget.isDarkMode,
          onSnack: widget.onSnack,
        );
      case 'postcomposer':
      case 'post_composer':
        return NgmyRuntimePostComposer(
          node: node,
          theme: widget.theme,
          store: _store,
          isDark: widget.isDarkMode,
          onSnack: widget.onSnack,
          onNavigate: widget.onNavigate,
        );
      case 'searchhub':
      case 'search_hub':
        return NgmyRuntimeSearchHub(
          node: node,
          theme: widget.theme,
          store: _store,
          isDark: widget.isDarkMode,
          onSnack: widget.onSnack,
        );
      case 'mapview':
      case 'map_view':
      case 'map':
        return NgmyRuntimeMapView(
          node: node,
          theme: widget.theme,
          store: _store,
          isDark: widget.isDarkMode,
          onSnack: widget.onSnack,
        );
      case 'profile':
        return NgmyRuntimeProfile(
          node: node,
          theme: widget.theme,
          store: _store,
          isDark: widget.isDarkMode,
        );
      default:
        if (children.isNotEmpty) {
          return Column(children: children.map((c) => _buildNode(context, c)).toList());
        }
        return Text((node['text'] ?? '').toString());
    }
  }

  void _handleButton(Map<String, dynamic> node) {
    final action = (node['action'] ?? 'navigate').toString().toLowerCase();
    switch (action) {
      case 'snack':
        widget.onSnack((node['message'] ?? 'Done').toString());
        return;
      case 'openurl':
      case 'open_url':
      case 'link':
        ngmyRuntimeOpenUrl((node['url'] ?? node['link'] ?? node['target'] ?? '').toString(), widget.onSnack);
        return;
      case 'clear':
        final col = (node['collection'] ?? '').toString();
        if (col.isNotEmpty) {
          _store.ensureLoaded().then((_) async {
            final list = _store.records(col);
            for (final r in list) {
              await _store.deleteRecord(col, r['id']?.toString() ?? '');
            }
            widget.onSnack((node['message'] ?? 'Cleared').toString());
          });
        }
        return;
      default:
        widget.onNavigate((node['target'] ?? node['targetScreenId'] ?? '').toString());
    }
  }

  Widget _staticList(Map<String, dynamic> node) {
    final items = _parseItems(node['items']);
    return Column(
      children: items.map((item) {
        return Card(
          margin: const EdgeInsets.only(bottom: 8),
          child: ListTile(
            leading: Icon(_iconData(item['icon']), color: widget.theme),
            title: Text((item['label'] ?? item['title'] ?? 'Item').toString(), style: const TextStyle(fontWeight: FontWeight.w700)),
            subtitle: (item['subtitle'] ?? '').toString().isEmpty ? null : Text(item['subtitle'].toString()),
            trailing: const Icon(Icons.chevron_right_rounded),
            onTap: () => widget.onNavigate((item['target'] ?? item['targetScreenId'] ?? '').toString()),
          ),
        );
      }).toList(),
    );
  }

  Widget _menuGrid(Map<String, dynamic> node) {
    final items = _parseItems(node['items']);
    final cols = (node['columns'] as num?)?.toInt() ?? 2;
    final style = (node['style'] ?? 'classic').toString().toLowerCase();
    return AnimatedBuilder(
      animation: _menuFx,
      builder: (context, _) {
        final pulse = math.sin(_menuFx.value * 2 * math.pi);
        final shimmer = (pulse + 1) / 2;
        return GridView.count(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          crossAxisCount: cols.clamp(1, 4),
          mainAxisSpacing: 10,
          crossAxisSpacing: 10,
          childAspectRatio: 1.05,
          children: items.map((item) {
            final customEmoji = (item['emoji'] ?? '').toString().trim();
            final borderColor = switch (style) {
              'neon' => Color.lerp(widget.theme, const Color(0xFF38BDF8), shimmer)!,
              'hologram' => Color.lerp(widget.theme, const Color(0xFFEC4899), shimmer * 0.7)!,
              'pulse' => widget.theme.withValues(alpha: 0.35 + shimmer * 0.45),
              _ => widget.theme.withValues(alpha: 0.2),
            };
            return Material(
              color: widget.theme.withValues(alpha: style == 'pulse' ? 0.06 + shimmer * 0.08 : 0.08),
              borderRadius: BorderRadius.circular(16),
              elevation: style == 'neon' ? 4 + shimmer * 6 : 0,
              shadowColor: widget.theme.withValues(alpha: 0.4),
              child: InkWell(
                onTap: () => widget.onNavigate((item['target'] ?? item['targetScreenId'] ?? '').toString()),
                borderRadius: BorderRadius.circular(16),
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: borderColor, width: style == 'neon' ? 1.6 : 1),
                    gradient: style == 'hologram'
                        ? LinearGradient(
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                            colors: [
                              widget.theme.withValues(alpha: 0.12 + shimmer * 0.1),
                              const Color(0xFF7C3AED).withValues(alpha: 0.08 + shimmer * 0.12),
                            ],
                          )
                        : null,
                  ),
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      if (customEmoji.isNotEmpty)
                        Text(customEmoji, style: TextStyle(fontSize: 28 + shimmer * (style == 'pulse' ? 4 : 0)))
                      else
                        Icon(_iconData(item['icon']), color: widget.theme, size: 30),
                      const SizedBox(height: 8),
                      Text(
                        (item['label'] ?? 'Menu').toString(),
                        textAlign: TextAlign.center,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12),
                      ),
                    ],
                  ),
                ),
              ),
            );
          }).toList(),
        );
      },
    );
  }

  List<Map<String, dynamic>> _parseItems(dynamic raw) {
    final items = <Map<String, dynamic>>[];
    if (raw is List) {
      for (final i in raw) {
        if (i is Map) items.add(Map<String, dynamic>.from(i));
      }
    }
    return items;
  }

  CrossAxisAlignment _crossAlign(dynamic raw) => switch ((raw ?? '').toString()) {
        'center' => CrossAxisAlignment.center,
        'end' => CrossAxisAlignment.end,
        _ => CrossAxisAlignment.start,
      };

  TextAlign _textAlign(dynamic raw) => switch ((raw ?? '').toString()) {
        'center' => TextAlign.center,
        'right' => TextAlign.right,
        _ => TextAlign.left,
      };

  IconData _iconData(dynamic raw) {
    final name = (raw ?? 'star').toString().toLowerCase();
    return switch (name) {
      'home' => Icons.home_rounded,
      'menu' => Icons.menu_rounded,
      'mail' => Icons.mail_rounded,
      'phone' => Icons.phone_rounded,
      'shop' => Icons.storefront_rounded,
      'cart' => Icons.shopping_cart_rounded,
      'person' => Icons.person_rounded,
      'settings' => Icons.settings_rounded,
      'info' => Icons.info_rounded,
      'star' => Icons.star_rounded,
      'fitness' => Icons.fitness_center_rounded,
      'food' => Icons.restaurant_rounded,
      'music' => Icons.music_note_rounded,
      'video' => Icons.videocam_rounded,
      'chat' => Icons.chat_rounded,
      'add' => Icons.add_rounded,
      'venue' => Icons.location_city_rounded,
      'calendar' => Icons.calendar_month_rounded,
      _ => Icons.apps_rounded,
    };
  }
}

class _DataList extends StatelessWidget {
  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final void Function(String? target) onNavigate;
  final void Function(String message) onSnack;

  const _DataList({required this.node, required this.theme, required this.store, required this.onNavigate, required this.onSnack});

  @override
  Widget build(BuildContext context) {
    final collection = (node['collection'] ?? '').toString();
    final titleField = (node['titleField'] ?? 'name').toString();
    final subtitleField = (node['subtitleField'] ?? 'subtitle').toString();
    final emptyText = (node['emptyText'] ?? 'Nothing here yet.').toString();
    final addTarget = (node['addTarget'] ?? node['addScreen'] ?? '').toString();
    final allowDelete = node['allowDelete'] != false;
    final urlField = (node['urlField'] ?? node['linkField'] ?? 'url').toString();
    final records = store.records(collection);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        if (records.isEmpty)
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(color: Colors.grey.shade100, borderRadius: BorderRadius.circular(14)),
            child: Text(emptyText, textAlign: TextAlign.center, style: TextStyle(color: Colors.grey.shade700)),
          ),
        ...records.map((r) {
          final title = (r[titleField] ?? r['title'] ?? r['name'] ?? 'Item').toString();
          final subtitle = (r[subtitleField] ?? r['description'] ?? r['notes'] ?? '').toString();
          final link = (r[urlField] ?? r['url'] ?? r['link'] ?? '').toString().trim();
          return Card(
            margin: const EdgeInsets.only(bottom: 8),
            child: ListTile(
              leading: CircleAvatar(backgroundColor: theme.withValues(alpha: 0.15), child: Icon(link.isNotEmpty ? Icons.play_circle_rounded : Icons.article_rounded, color: theme, size: 20)),
              title: Text(title, style: const TextStyle(fontWeight: FontWeight.w700)),
              subtitle: subtitle.isEmpty ? null : Text(subtitle, maxLines: 2, overflow: TextOverflow.ellipsis),
              onTap: link.isNotEmpty ? () => ngmyRuntimeOpenUrl(link, onSnack) : null,
              trailing: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  if (link.isNotEmpty)
                    IconButton(
                      icon: Icon(Icons.open_in_new_rounded, color: theme),
                      onPressed: () => ngmyRuntimeOpenUrl(link, onSnack),
                    ),
                  if (allowDelete)
                    IconButton(
                      icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444)),
                      onPressed: () => store.deleteRecord(collection, r['id']?.toString() ?? ''),
                    )
                  else if (link.isEmpty)
                    const Icon(Icons.chevron_right_rounded),
                ],
              ),
            ),
          );
        }),
        if (addTarget.isNotEmpty)
          FilledButton.icon(
            onPressed: () => onNavigate(addTarget),
            icon: const Icon(Icons.add_rounded),
            label: Text((node['addLabel'] ?? 'Add new').toString()),
            style: FilledButton.styleFrom(backgroundColor: theme, minimumSize: const Size(double.infinity, 48)),
          ),
      ],
    );
  }
}

class _SettingSwitch extends StatelessWidget {
  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;

  const _SettingSwitch({required this.node, required this.theme, required this.store});

  @override
  Widget build(BuildContext context) {
    final key = (node['setting'] ?? node['id'] ?? node['label'] ?? 'setting').toString();
    final label = (node['label'] ?? 'Setting').toString();
    final subtitle = (node['subtitle'] ?? '').toString();
    final defaultOn = node['default'] == true;
    final value = store.getSetting(key, defaultValue: defaultOn);
    return Card(
      child: SwitchListTile(
        title: Text(label, style: const TextStyle(fontWeight: FontWeight.w700)),
        subtitle: subtitle.isEmpty ? null : Text(subtitle),
        value: value,
        activeTrackColor: theme.withValues(alpha: 0.35),
        onChanged: (v) => store.setSetting(key, v),
      ),
    );
  }
}

class _WorkoutPlan extends StatelessWidget {
  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;

  const _WorkoutPlan({required this.node, required this.theme, required this.store});

  @override
  Widget build(BuildContext context) {
    final planId = (node['planId'] ?? node['id'] ?? 'workout').toString();
    final title = (node['title'] ?? 'Workout').toString();
    final exercisesRaw = node['exercises'];
    final exercises = <Map<String, dynamic>>[];
    if (exercisesRaw is List) {
      for (final e in exercisesRaw) {
        if (e is Map) exercises.add(Map<String, dynamic>.from(e));
      }
    }
    final checked = store.checkedItems(planId);
    final done = checked.length;
    final total = exercises.length;
    final pct = total == 0 ? 0.0 : done / total;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 20)),
        const SizedBox(height: 8),
        ClipRRect(
          borderRadius: BorderRadius.circular(8),
          child: LinearProgressIndicator(value: pct, minHeight: 8, backgroundColor: theme.withValues(alpha: 0.15), color: theme),
        ),
        const SizedBox(height: 4),
        Text('$done of $total exercises complete', style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
        const SizedBox(height: 12),
        ...exercises.map((ex) {
          final id = (ex['id'] ?? ex['name'] ?? '').toString();
          final name = (ex['name'] ?? 'Exercise').toString();
          final sets = (ex['sets'] ?? ex['reps'] ?? '').toString();
          final isDone = checked.contains(id);
          return Card(
            margin: const EdgeInsets.only(bottom: 8),
            child: CheckboxListTile(
              value: isDone,
              activeColor: theme,
              title: Text(name, style: TextStyle(fontWeight: FontWeight.w700, decoration: isDone ? TextDecoration.lineThrough : null)),
              subtitle: sets.isEmpty ? null : Text(sets),
              onChanged: (v) => store.toggleChecklistItem(planId, id, v == true),
            ),
          );
        }),
        if (done == total && total > 0)
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: const Color(0xFF10B981).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12)),
            child: const Row(
              children: [
                Icon(Icons.celebration_rounded, color: Color(0xFF10B981)),
                SizedBox(width: 8),
                Expanded(child: Text('Workout complete! Great job!', style: TextStyle(fontWeight: FontWeight.w800, color: Color(0xFF059669)))),
              ],
            ),
          ),
      ],
    );
  }
}

class _Checklist extends StatelessWidget {
  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;

  const _Checklist({required this.node, required this.theme, required this.store});

  @override
  Widget build(BuildContext context) {
    final listId = (node['id'] ?? 'checklist').toString();
    final itemsRaw = node['items'];
    final items = <Map<String, dynamic>>[];
    if (itemsRaw is List) {
      for (final i in itemsRaw) {
        if (i is Map) items.add(Map<String, dynamic>.from(i));
        if (i is String) items.add({'id': i, 'label': i});
      }
    }
    final checked = store.checkedItems(listId);
    return Column(
      children: items.map((item) {
        final id = (item['id'] ?? item['label'] ?? '').toString();
        final label = (item['label'] ?? id).toString();
        return Card(
          margin: const EdgeInsets.only(bottom: 6),
          child: CheckboxListTile(
            value: checked.contains(id),
            activeColor: theme,
            title: Text(label),
            onChanged: (v) => store.toggleChecklistItem(listId, id, v == true),
          ),
        );
      }).toList(),
    );
  }
}

class _StatCard extends StatelessWidget {
  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;

  const _StatCard({required this.node, required this.theme, required this.store});

  @override
  Widget build(BuildContext context) {
    final collection = (node['collection'] ?? '').toString();
    final label = (node['label'] ?? 'Total').toString();
    final count = collection.isEmpty ? 0 : store.recordCount(collection);
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [theme, theme.withValues(alpha: 0.7)]),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Row(
        children: [
          Text('$count', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 32)),
          const SizedBox(width: 12),
          Expanded(child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14))),
        ],
      ),
    );
  }
}

class _TabsLayout extends StatefulWidget {
  final Map<String, dynamic> node;
  final Color theme;
  final Widget Function(BuildContext, Map<String, dynamic>) builder;
  final void Function(String? target) onNavigate;

  const _TabsLayout({required this.node, required this.theme, required this.builder, required this.onNavigate});

  @override
  State<_TabsLayout> createState() => _TabsLayoutState();
}

class _TabsLayoutState extends State<_TabsLayout> with SingleTickerProviderStateMixin {
  late TabController _tc;
  late List<Map<String, dynamic>> _tabs;

  @override
  void initState() {
    super.initState();
    final raw = widget.node['tabs'];
    _tabs = [];
    if (raw is List) {
      for (final t in raw) {
        if (t is Map) _tabs.add(Map<String, dynamic>.from(t));
      }
    }
    if (_tabs.isEmpty) _tabs = [{'label': 'Tab 1', 'layout': {'type': 'text', 'text': 'Content'}}];
    _tc = TabController(length: _tabs.length, vsync: this)..addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _tc.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TabBar(
          controller: _tc,
          isScrollable: true,
          labelColor: widget.theme,
          tabs: _tabs.map((t) => Tab(text: (t['label'] ?? 'Tab').toString())).toList(),
        ),
        AnimatedBuilder(
          animation: _tc,
          builder: (context, _) {
            final layout = _tabs[_tc.index]['layout'];
            if (layout is Map) {
              return Padding(
                padding: const EdgeInsets.only(top: 12),
                child: widget.builder(context, Map<String, dynamic>.from(layout)),
              );
            }
            return Padding(padding: const EdgeInsets.all(12), child: Text((_tabs[_tc.index]['text'] ?? '').toString()));
          },
        ),
      ],
    );
  }
}

class _FormLayout extends StatefulWidget {
  final Map<String, dynamic> node;
  final Color theme;
  final NgmyAppDataStore store;
  final void Function(String message) onSnack;
  final void Function(String? target) onNavigate;

  const _FormLayout({required this.node, required this.theme, required this.store, required this.onSnack, required this.onNavigate});

  @override
  State<_FormLayout> createState() => _FormLayoutState();
}

class _FormLayoutState extends State<_FormLayout> {
  final _controllers = <String, TextEditingController>{};
  bool _saving = false;

  @override
  void dispose() {
    for (final c in _controllers.values) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _submit() async {
    if (_saving) return;
    setState(() => _saving = true);
    final fieldsRaw = widget.node['fields'];
    final fields = <Map<String, dynamic>>[];
    if (fieldsRaw is List) {
      for (final f in fieldsRaw) {
        if (f is Map) fields.add(Map<String, dynamic>.from(f));
      }
    }
    final data = <String, dynamic>{};
    for (final f in fields) {
      final id = (f['id'] ?? f['label'] ?? '').toString();
      data[id] = _controllers[id]?.text.trim() ?? '';
    }
    final collection = (widget.node['collection'] ?? '').toString();
    if (collection.isNotEmpty) {
      await widget.store.addRecord(collection, data);
    }
    if (!mounted) return;
    setState(() => _saving = false);
    if (widget.node['clearOnSubmit'] != false) {
      for (final c in _controllers.values) {
        c.clear();
      }
    }
    widget.onSnack((widget.node['successMessage'] ?? widget.node['message'] ?? 'Saved!').toString());
    final nav = (widget.node['navigateAfter'] ?? widget.node['target'] ?? '').toString();
    if (nav.isNotEmpty) widget.onNavigate(nav);
  }

  @override
  Widget build(BuildContext context) {
    final fieldsRaw = widget.node['fields'];
    final fields = <Map<String, dynamic>>[];
    if (fieldsRaw is List) {
      for (final f in fieldsRaw) {
        if (f is Map) fields.add(Map<String, dynamic>.from(f));
      }
    }
    for (final f in fields) {
      final id = (f['id'] ?? f['label'] ?? '').toString();
      _controllers.putIfAbsent(id, () => TextEditingController());
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        ...fields.map((f) {
          final id = (f['id'] ?? f['label'] ?? '').toString();
          final type = (f['type'] ?? 'text').toString();
          return Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: TextField(
              controller: _controllers[id],
              maxLines: type == 'text' || type == 'textarea' ? 3 : 1,
              keyboardType: type == 'number' ? TextInputType.number : (type == 'email' ? TextInputType.emailAddress : TextInputType.text),
              decoration: InputDecoration(
                labelText: (f['label'] ?? 'Field').toString(),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              ),
            ),
          );
        }),
        FilledButton(
          onPressed: _saving ? null : _submit,
          style: FilledButton.styleFrom(backgroundColor: widget.theme, minimumSize: const Size(double.infinity, 48), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
          child: _saving
              ? const SizedBox(height: 20, width: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
              : Text((widget.node['submitLabel'] ?? 'Submit').toString()),
        ),
      ],
    );
  }
}

bool ngmyScreenUsesCustomLayout(NgmyAppScreen screen) {
  if (screen.kind == NgmyAppScreenKind.custom) return true;
  return screen.data['layout'] is Map;
}

Map<String, dynamic>? ngmyScreenLayout(NgmyAppScreen screen) {
  final layout = screen.data['layout'];
  if (layout is Map) return Map<String, dynamic>.from(layout);
  return null;
}

const String kNgmyAppBuilderCodeSchemaHelp = '''
NGMY App Builder — FUNCTIONAL apps (not just text!)

RULE: Every app must WORK. Forms SAVE data. Lists SHOW saved data. Settings TOGGLE. Workouts are CHECKABLE.

SCREEN kind: use "custom" with data.layout for interactive apps.

WIDGET TYPES (all functional):
  column, row, wrap, card, hero, text, button, spacer, divider, image,
  list, menuGrid, tabs, chip,
  form — MUST include "collection" to save data,
  dataList — shows saved records from "collection",
  switch — toggles a setting (persists),
  workoutPlan — checkable exercises with progress bar,
  checklist — checkable items (persists),
  stat — shows count from a collection

FORM (saves data):
{"type":"form","collection":"venues","fields":[
  {"id":"name","label":"Venue name","type":"text"},
  {"id":"capacity","label":"Capacity","type":"number"}
],"submitLabel":"Create Venue","successMessage":"Venue created!","navigateAfter":"venues_list","clearOnSubmit":true}

DATA LIST (shows saved items):
{"type":"dataList","collection":"venues","titleField":"name","subtitleField":"capacity",
 "emptyText":"No venues yet. Tap Add to create one.","addTarget":"create_venue","addLabel":"Add Venue","allowDelete":true}

SETTINGS (working toggles):
{"type":"switch","setting":"notifications","label":"Push notifications","subtitle":"Get alerts for bookings","default":true}

DARK / LIGHT MODE (works at runtime — use setting key dark_mode):
{"type":"switch","setting":"dark_mode","label":"Dark mode","subtitle":"Turn off for light theme across the whole app","default":true}
When user toggles dark_mode, the app instantly switches light/dark backgrounds and text. Always implement this when user asks for theme settings.

WORKOUT PLAN (interactive):
{"type":"workoutPlan","planId":"strength_day1","title":"Strength Day 1","exercises":[
  {"id":"sq","name":"Squats","sets":"3x12"},
  {"id":"bp","name":"Bench Press","sets":"3x10"}
]}

VENUE APP EXAMPLE — home screen:
{"type":"column","children":[
  {"type":"hero","emoji":"🏟️","title":"Venue Manager","subtitle":"Create and manage venues"},
  {"type":"stat","collection":"venues","label":"Venues created"},
  {"type":"menuGrid","columns":2,"items":[
    {"label":"My Venues","icon":"venue","target":"venues_list"},
    {"label":"Add Venue","icon":"add","target":"create_venue"},
    {"label":"Settings","icon":"settings","target":"settings"},
    {"label":"Contact","icon":"mail","target":"contact"}
  ]}
]}

NEVER use plain text screens for features users can interact with. Use forms + dataList + switches.

BUTTON WIRING:
{"type":"button","label":"Go to cart","target":"cart","action":"navigate","large":true}
{"type":"button","label":"Show tip","action":"snack","message":"Thanks for visiting!"}
{"type":"button","label":"Clear all","action":"clear","collection":"cart"}

STORE APP MINIMUM SCREENS (when user asks for shop/store):
home, add_product (form collection:products), products_list (dataList), cart (dataList collection:cart), checkout (form), settings (switches).
Home menuGrid: Browse→products_list, Sell→add_product, Cart→cart, Settings→settings.

QR CODE (WORKING — renders real scannable QR):
Static: {"type":"qrCode","data":"https://example.com","label":"Scan to visit"}
Live generator URL: {"type":"qrGenerator","mode":"url","placeholder":"https://yoursite.com","collection":"qr_codes","allowSave":true}
Live generator text: {"type":"qrGenerator","mode":"text","placeholder":"Your message","collection":"qr_codes"}

INVOICE APP (use invoiceBuilder — creates real invoice + optional payment QR):
{"type":"invoiceBuilder","collection":"invoices","title":"New Invoice"}
Plus dataList screen: collection invoices, titleField client, subtitleField amount

VIDEO / LINK HUB: form saves video URLs to collection "videos", dataList shows them, button {"action":"openUrl","url":"{{field}}"} or per-item open button on list screen with link field.

WHEN USER ASKS FOR QR / INVOICE / VIDEO APP — you MUST use qrGenerator, qrCode, invoiceBuilder widgets. Never reply without ---APP_JSON--- when they want to create or change an app.

TIKTOK / REELS / SHORT VIDEO (NEVER use hero+stat+menuGrid — that is WRONG):
Home screen MUST be: {"id":"feed","kind":"custom","data":{"fullBleed":true,"hideAppBar":true,"layout":{"type":"reelFeed","collection":"reels"}}}
Include shell.bottomNav: Home→feed, Discover→discover, Post→create, Inbox→inbox, Profile→profile
Screens: feed (reelFeed), create (postComposer mode reel), profile (profile widget). Theme #FE2C55.

FACEBOOK / SOCIAL FEED:
Home: {"type":"socialFeed","collection":"posts"} with fullBleed. Create screen: postComposer mode post. shell.bottomNav.

GOOGLE / SEARCH:
Home: {"type":"searchHub","collection":"bookmarks"} fullBleed hideAppBar. Form screen to save bookmarks.

MAPS / NAVIGATION / TRAVEL / UBER-LIKE (NEVER hero+menuGrid):
Home MUST use mapView fullBleed hideAppBar:
{"type":"mapView","collection":"places","titleField":"name","subtitleField":"address","latField":"lat","lngField":"lng","height":420,"placeholder":"Search destinations…"}
Add form to save places (name, address, lat, lng). dataList of saved trips/places. shell.bottomNav: Map→home, Saved→list, Add→form, Profile→profile.
Pins open Google Maps directions. User can ask for ANY map style app — delivery, travel, fleet, real estate.

AI CUSTOM TEMPLATES: When user describes ANY app type, design unique layouts — do NOT default to hero+menuGrid. Use mapView, socialFeed, reelFeed, searchHub, tabs, dataList-first, stat dashboards, or mixed columns as appropriate.

FORBIDDEN for TikTok/Facebook/Google/Map requests: hero + menuGrid hub as the only home screen.
''';
