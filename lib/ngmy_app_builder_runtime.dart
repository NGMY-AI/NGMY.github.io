import 'package:flutter/material.dart';

import 'ngmy_app_builder_models.dart';

/// Renders any screen from a flexible JSON widget tree — no fixed limits.
class NgmyAppLayoutRenderer extends StatelessWidget {
  final Map<String, dynamic> layout;
  final Color theme;
  final void Function(String? targetScreenId) onNavigate;
  final void Function(String message) onSnack;

  const NgmyAppLayoutRenderer({
    super.key,
    required this.layout,
    required this.theme,
    required this.onNavigate,
    required this.onSnack,
  });

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: _buildNode(context, layout),
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
          children: children.map((c) => Padding(padding: const EdgeInsets.only(bottom: 8), child: _buildNode(context, c))).toList(),
        );
      case 'row':
        return Row(
          children: children.map((c) => Expanded(child: Padding(padding: const EdgeInsets.only(right: 6), child: _buildNode(context, c)))).toList(),
        );
      case 'wrap':
        return Wrap(
          spacing: 8,
          runSpacing: 8,
          children: children.map((c) => _buildNode(context, c)).toList(),
        );
      case 'card':
        return Card(
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: children.isEmpty ? const SizedBox.shrink() : _buildNode(context, children.first),
          ),
        );
      case 'hero':
        return Container(
          width: double.infinity,
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: [theme, theme.withOpacity(0.7)]),
            borderRadius: BorderRadius.circular(16),
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
        if (style == 'title') ts = const TextStyle(fontWeight: FontWeight.w900, fontSize: 22);
        if (style == 'subtitle') ts = TextStyle(fontSize: 14, color: Colors.grey.shade700);
        if (style == 'caption') ts = const TextStyle(fontSize: 11, color: Colors.grey);
        return Text((node['text'] ?? '').toString(), style: ts, textAlign: _textAlign(node['align']));
      case 'button':
        return FilledButton(
          onPressed: () {
            final action = (node['action'] ?? '').toString();
            if (action == 'snack') {
              onSnack((node['message'] ?? 'Done').toString());
            } else {
              onNavigate((node['target'] ?? node['targetScreenId'] ?? '').toString());
            }
          },
          style: FilledButton.styleFrom(backgroundColor: theme, minimumSize: Size(double.infinity, (node['large'] == true) ? 52 : 44)),
          child: Text((node['label'] ?? 'Button').toString()),
        );
      case 'spacer':
        return SizedBox(height: (node['height'] as num?)?.toDouble() ?? 16);
      case 'divider':
        return const Divider();
      case 'image':
        final url = (node['url'] ?? '').toString();
        if (url.isEmpty) {
          return Container(height: 120, color: Colors.grey.shade200, child: const Icon(Icons.image_outlined, size: 48));
        }
        return ClipRRect(
          borderRadius: BorderRadius.circular(12),
          child: Image.network(url, height: 160, width: double.infinity, fit: BoxFit.cover, errorBuilder: (_, __, ___) => Container(height: 120, color: Colors.grey.shade200)),
        );
      case 'list':
        final itemsRaw = node['items'];
        final items = <Map<String, dynamic>>[];
        if (itemsRaw is List) {
          for (final i in itemsRaw) {
            if (i is Map) items.add(Map<String, dynamic>.from(i));
          }
        }
        return Column(
          children: items.map((item) {
            return Card(
              child: ListTile(
                leading: Icon(_iconData(item['icon']), color: theme),
                title: Text((item['label'] ?? item['title'] ?? 'Item').toString(), style: const TextStyle(fontWeight: FontWeight.w700)),
                subtitle: (item['subtitle'] ?? '').toString().isEmpty ? null : Text(item['subtitle'].toString()),
                onTap: () => onNavigate((item['target'] ?? item['targetScreenId'] ?? '').toString()),
              ),
            );
          }).toList(),
        );
      case 'menugrid':
      case 'menu_grid':
      case 'menu':
        final itemsRaw = node['items'];
        final items = <Map<String, dynamic>>[];
        if (itemsRaw is List) {
          for (final i in itemsRaw) {
            if (i is Map) items.add(Map<String, dynamic>.from(i));
          }
        }
        final cols = (node['columns'] as num?)?.toInt() ?? 2;
        return GridView.count(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          crossAxisCount: cols.clamp(1, 4),
          mainAxisSpacing: 10,
          crossAxisSpacing: 10,
          childAspectRatio: 1.1,
          children: items.map((item) {
            return InkWell(
              onTap: () => onNavigate((item['target'] ?? item['targetScreenId'] ?? '').toString()),
              borderRadius: BorderRadius.circular(14),
              child: Container(
                decoration: BoxDecoration(
                  color: theme.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: theme.withOpacity(0.25)),
                ),
                padding: const EdgeInsets.all(10),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(_iconData(item['icon']), color: theme, size: 28),
                    const SizedBox(height: 6),
                    Text((item['label'] ?? 'Menu').toString(), textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
                  ],
                ),
              ),
            );
          }).toList(),
        );
      case 'tabs':
        return _TabsLayout(node: node, theme: theme, builder: _buildNode, onNavigate: onNavigate);
      case 'form':
        return _FormLayout(node: node, theme: theme, onSnack: onSnack);
      case 'chip':
        return Chip(
          label: Text((node['label'] ?? '').toString()),
          backgroundColor: theme.withOpacity(0.12),
        );
      default:
        if (children.isNotEmpty) {
          return Column(children: children.map((c) => _buildNode(context, c)).toList());
        }
        return Text((node['text'] ?? '').toString());
    }
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
      _ => Icons.apps_rounded,
    };
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
    _tc = TabController(length: _tabs.length, vsync: this);
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
        SizedBox(
          height: 320,
          child: TabBarView(
            controller: _tc,
            children: _tabs.map((t) {
              final layout = t['layout'];
              if (layout is Map) {
                return SingleChildScrollView(
                  padding: const EdgeInsets.all(12),
                  child: widget.builder(context, Map<String, dynamic>.from(layout)),
                );
              }
              return Center(child: Text((t['text'] ?? '').toString()));
            }).toList(),
          ),
        ),
      ],
    );
  }
}

class _FormLayout extends StatefulWidget {
  final Map<String, dynamic> node;
  final Color theme;
  final void Function(String message) onSnack;

  const _FormLayout({required this.node, required this.theme, required this.onSnack});

  @override
  State<_FormLayout> createState() => _FormLayoutState();
}

class _FormLayoutState extends State<_FormLayout> {
  final _controllers = <String, TextEditingController>{};

  @override
  void dispose() {
    for (final c in _controllers.values) {
      c.dispose();
    }
    super.dispose();
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
          return Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: TextField(
              controller: _controllers[id],
              maxLines: (f['type'] ?? '').toString() == 'text' ? 3 : 1,
              keyboardType: (f['type'] ?? '').toString() == 'number' ? TextInputType.number : TextInputType.text,
              decoration: InputDecoration(labelText: (f['label'] ?? 'Field').toString()),
            ),
          );
        }),
        FilledButton(
          onPressed: () => widget.onSnack((widget.node['successMessage'] ?? widget.node['message'] ?? 'Submitted!').toString()),
          style: FilledButton.styleFrom(backgroundColor: widget.theme, minimumSize: const Size(double.infinity, 48)),
          child: Text((widget.node['submitLabel'] ?? 'Submit').toString()),
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
NGMY App Code — edit JSON freely (like Flutter/Android Studio on your phone).

SCREEN kinds: welcome, menu, content, form, aiChat, custom

UNLIMITED layouts in data.layout — widget types:
  column, row, wrap, card, hero, text, button, spacer, divider,
  image, list, menuGrid, tabs, form, chip

Example — 5 menus on one screen:
{
  "id": "home",
  "title": "Home",
  "kind": "custom",
  "data": {
    "layout": {
      "type": "column",
      "children": [
        {"type": "hero", "emoji": "🚀", "title": "My App", "subtitle": "Pick a section"},
        {"type": "menuGrid", "columns": 2, "items": [
          {"label": "Shop", "icon": "shop", "target": "shop"},
          {"label": "News", "icon": "info", "target": "news"},
          {"label": "Chat", "icon": "chat", "target": "chat"},
          {"label": "Profile", "icon": "person", "target": "profile"},
          {"label": "Settings", "icon": "settings", "target": "settings"}
        ]}
      ]
    }
  }
}

Tell AI anything — it will write this JSON for you.
''';
