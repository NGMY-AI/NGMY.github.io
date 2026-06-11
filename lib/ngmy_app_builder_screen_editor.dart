import 'package:flutter/material.dart';

import 'ngmy_app_builder_layout_utils.dart';
import 'ngmy_app_builder_models.dart';

/// Full-screen studio for editing one app screen — widgets, wiring, drag reorder.
class NgmyAppScreenEditorPage extends StatefulWidget {
  const NgmyAppScreenEditorPage({
    super.key,
    required this.screen,
    required this.allScreens,
    required this.themeColor,
    this.screenIndex = 0,
  });

  final NgmyAppScreen screen;
  final List<NgmyAppScreen> allScreens;
  final Color themeColor;
  final int screenIndex;

  @override
  State<NgmyAppScreenEditorPage> createState() => _NgmyAppScreenEditorPageState();
}

class _NgmyAppScreenEditorPageState extends State<NgmyAppScreenEditorPage> {
  late TextEditingController _titleCtrl;
  late NgmyAppScreen _screen;
  late List<Map<String, dynamic>> _widgets;

  @override
  void initState() {
    super.initState();
    _screen = ngmyScreenEnsureEditable(widget.screen);
    _titleCtrl = TextEditingController(text: _screen.title);
    _widgets = ngmyLayoutChildren(_screen);
  }

  @override
  void dispose() {
    _titleCtrl.dispose();
    super.dispose();
  }

  NgmyAppScreen _buildResult() {
    var s = _screen.copyWith(title: _titleCtrl.text.trim().isEmpty ? 'Screen' : _titleCtrl.text.trim());
    s = ngmyScreenWithLayoutChildren(s, _widgets);
    return s;
  }

  void _saveAndPop() => Navigator.pop(context, _buildResult());

  void _addWidget(String type) {
    setState(() {
      _widgets.add(ngmyNewWidget(type, screens: widget.allScreens));
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Added ${ngmyWidgetTypeLabel(type)}'), behavior: SnackBarBehavior.floating, duration: const Duration(seconds: 2)),
    );
  }

  void _openAddPalette() {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _AddWidgetSheet(themeColor: widget.themeColor, onAdd: (t) {
        Navigator.pop(ctx);
        _addWidget(t);
      }),
    );
  }

  Future<void> _editWidget(int index) async {
    final updated = await showModalBottomSheet<Map<String, dynamic>>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _WidgetEditorSheet(
        widget: _widgets[index],
        screens: widget.allScreens,
        themeColor: widget.themeColor,
      ),
    );
    if (updated != null && mounted) {
      setState(() => _widgets[index] = updated);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = widget.themeColor;
    return Scaffold(
      backgroundColor: const Color(0xFFF4F6FA),
      body: SafeArea(
        child: Column(
          children: [
            _EditorHeader(
              theme: theme,
              title: 'Edit screen',
              subtitle: 'Screen ${widget.screenIndex + 1} · drag ≡ to reorder',
              onBack: () => Navigator.pop(context),
              onDone: _saveAndPop,
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 100),
                children: [
                  _SectionCard(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Screen name', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Colors.grey.shade600)),
                        const SizedBox(height: 8),
                        TextField(
                          controller: _titleCtrl,
                          decoration: InputDecoration(
                            hintText: 'e.g. Home, Cart, Profile',
                            filled: true,
                            fillColor: Colors.grey.shade50,
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      Text('Widgets on this screen', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: Colors.grey.shade800)),
                      const Spacer(),
                      Text('${_widgets.length}', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: theme)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  if (_widgets.isEmpty)
                    _SectionCard(
                      child: Column(
                        children: [
                          Icon(Icons.widgets_outlined, size: 40, color: Colors.grey.shade400),
                          const SizedBox(height: 8),
                          Text('No widgets yet', style: TextStyle(fontWeight: FontWeight.w700, color: Colors.grey.shade700)),
                          const SizedBox(height: 4),
                          Text('Add buttons, forms, lists, menus, and more.', style: TextStyle(fontSize: 13, color: Colors.grey.shade600), textAlign: TextAlign.center),
                        ],
                      ),
                    )
                  else
                    ReorderableListView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      buildDefaultDragHandles: false,
                      onReorder: (o, n) {
                        setState(() {
                          if (n > o) n--;
                          final item = _widgets.removeAt(o);
                          _widgets.insert(n, item);
                        });
                      },
                      itemCount: _widgets.length,
                      itemBuilder: (context, i) {
                        final w = _widgets[i];
                        final type = (w['type'] ?? 'text').toString();
                        return _WidgetTile(
                          key: ValueKey('w_${i}_${type}_${_widgets.length}'),
                          index: i,
                          type: type,
                          label: _widgetSummary(w),
                          theme: theme,
                          onEdit: () => _editWidget(i),
                          onDelete: () => setState(() => _widgets.removeAt(i)),
                        );
                      },
                    ),
                  const SizedBox(height: 12),
                  _QuickWidgetChips(theme: theme, onAdd: _addWidget),
                ],
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _openAddPalette,
        backgroundColor: theme,
        icon: const Icon(Icons.add),
        label: const Text('Add widget'),
      ),
    );
  }

  String _widgetSummary(Map<String, dynamic> w) {
    final type = (w['type'] ?? '').toString();
    switch (type) {
      case 'button':
      case 'outlined_button':
        final label = (w['label'] ?? 'Button').toString();
        final target = (w['target'] ?? w['targetScreenId'] ?? '').toString();
        final screen = widget.allScreens.where((s) => s.id == target).map((s) => s.title).firstOrNull;
        return '$label → ${screen ?? (target.isEmpty ? 'no target' : target)}';
      case 'form':
        return 'Form · saves to ${w['collection'] ?? 'entries'}';
      case 'dataList':
        return 'List · ${w['collection'] ?? 'entries'}';
      case 'menuGrid':
        final items = w['items'];
        final n = items is List ? items.length : 0;
        return 'Menu · $n items';
      case 'switch':
        return (w['label'] ?? 'Switch').toString();
      case 'hero':
        return (w['title'] ?? 'Hero').toString();
      case 'text':
        return (w['text'] ?? 'Text').toString();
      case 'stat':
        return 'Stat · ${w['collection'] ?? ''}';
      default:
        return ngmyWidgetTypeLabel(type);
    }
  }
}

class _EditorHeader extends StatelessWidget {
  const _EditorHeader({
    required this.theme,
    required this.title,
    required this.subtitle,
    required this.onBack,
    required this.onDone,
  });

  final Color theme;
  final String title;
  final String subtitle;
  final VoidCallback onBack;
  final VoidCallback onDone;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(8, 8, 12, 16),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [theme, theme.withValues(alpha: 0.85)]),
        borderRadius: const BorderRadius.vertical(bottom: Radius.circular(20)),
        boxShadow: [BoxShadow(color: theme.withValues(alpha: 0.25), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: Row(
        children: [
          IconButton(onPressed: onBack, icon: const Icon(Icons.arrow_back_ios_new, color: Colors.white, size: 20)),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800)),
                Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 12)),
              ],
            ),
          ),
          FilledButton(
            onPressed: onDone,
            style: FilledButton.styleFrom(backgroundColor: Colors.white, foregroundColor: theme, padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10)),
            child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
          ),
        ],
      ),
    );
  }
}

class _SectionCard extends StatelessWidget {
  const _SectionCard({required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.grey.shade200),
      ),
      child: child,
    );
  }
}

class _WidgetTile extends StatelessWidget {
  const _WidgetTile({
    super.key,
    required this.index,
    required this.type,
    required this.label,
    required this.theme,
    required this.onEdit,
    required this.onDelete,
  });

  final int index;
  final String type;
  final String label;
  final Color theme;
  final VoidCallback onEdit;
  final VoidCallback onDelete;

  IconData get _icon {
    switch (type) {
      case 'button':
      case 'outlined_button':
        return Icons.smart_button_outlined;
      case 'form':
        return Icons.edit_note_outlined;
      case 'dataList':
        return Icons.list_alt;
      case 'menuGrid':
        return Icons.grid_view_rounded;
      case 'switch':
        return Icons.toggle_on_outlined;
      case 'hero':
        return Icons.view_carousel_outlined;
      case 'stat':
        return Icons.analytics_outlined;
      case 'image':
        return Icons.image_outlined;
      default:
        return Icons.text_fields;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Material(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          onTap: onEdit,
          borderRadius: BorderRadius.circular(14),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: Colors.grey.shade200),
            ),
            child: Row(
              children: [
                ReorderableDragStartListener(
                  index: index,
                  child: Icon(Icons.drag_handle, color: Colors.grey.shade400),
                ),
                const SizedBox(width: 8),
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(color: theme.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10)),
                  child: Icon(_icon, size: 20, color: theme),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(ngmyWidgetTypeLabel(type), style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: theme)),
                      Text(label, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 13, color: Colors.grey.shade800)),
                    ],
                  ),
                ),
                IconButton(icon: Icon(Icons.delete_outline, size: 20, color: Colors.red.shade300), onPressed: onDelete),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _QuickWidgetChips extends StatelessWidget {
  const _QuickWidgetChips({required this.theme, required this.onAdd});
  final Color theme;
  final void Function(String type) onAdd;

  static const _chips = [
    ('button', 'Button'),
    ('form', 'Form'),
    ('dataList', 'List'),
    ('menuGrid', 'Menu'),
    ('hero', 'Hero'),
    ('switch', 'Switch'),
  ];

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: [
        for (final (type, label) in _chips)
          ActionChip(
            label: Text(label, style: const TextStyle(fontSize: 12)),
            avatar: Icon(Icons.add, size: 16, color: theme),
            onPressed: () => onAdd(type),
          ),
      ],
    );
  }
}

class _AddWidgetSheet extends StatelessWidget {
  const _AddWidgetSheet({required this.themeColor, required this.onAdd});
  final Color themeColor;
  final void Function(String type) onAdd;

  static const _groups = <String, List<(String, String, IconData)>>{
    'Actions': [
      ('button', 'Button', Icons.smart_button),
      ('outlined_button', 'Outlined button', Icons.crop_square),
    ],
    'Content': [
      ('title', 'Title text', Icons.title),
      ('text', 'Body text', Icons.text_fields),
      ('hero', 'Hero banner', Icons.view_carousel),
      ('image', 'Image', Icons.image),
      ('card', 'Card', Icons.credit_card),
    ],
    'Data & forms': [
      ('form', 'Form (save data)', Icons.edit_note),
      ('dataList', 'Data list', Icons.list),
      ('stat', 'Stat counter', Icons.analytics),
    ],
    'Navigation': [
      ('menuGrid', 'Menu grid', Icons.grid_view),
    ],
    'Interactive': [
      ('switch', 'Toggle', Icons.toggle_on),
      ('checklist', 'Checklist', Icons.checklist),
      ('workout', 'Workout plan', Icons.fitness_center),
    ],
    'Layout': [
      ('spacer', 'Spacer', Icons.space_bar),
      ('divider', 'Divider', Icons.horizontal_rule),
    ],
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.75),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(height: 10),
          Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade300, borderRadius: BorderRadius.circular(2))),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Row(
              children: [
                Text('Add widget', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: Colors.grey.shade900)),
                const Spacer(),
                IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close)),
              ],
            ),
          ),
          Flexible(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
              children: [
                for (final entry in _groups.entries) ...[
                  Text(entry.key, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: themeColor)),
                  const SizedBox(height: 8),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: [
                      for (final (type, label, icon) in entry.value)
                        _PaletteTile(type: type, label: label, icon: icon, color: themeColor, onTap: () => onAdd(type)),
                    ],
                  ),
                  const SizedBox(height: 16),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _PaletteTile extends StatelessWidget {
  const _PaletteTile({required this.type, required this.label, required this.icon, required this.color, required this.onTap});
  final String type;
  final String label;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: color.withValues(alpha: 0.08),
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: SizedBox(
          width: 100,
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 8),
            child: Column(
              children: [
                Icon(icon, color: color),
                const SizedBox(height: 6),
                Text(label, textAlign: TextAlign.center, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Colors.grey.shade800)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _WidgetEditorSheet extends StatefulWidget {
  const _WidgetEditorSheet({required this.widget, required this.screens, required this.themeColor});
  final Map<String, dynamic> widget;
  final List<NgmyAppScreen> screens;
  final Color themeColor;

  @override
  State<_WidgetEditorSheet> createState() => _WidgetEditorSheetState();
}

class _WidgetEditorSheetState extends State<_WidgetEditorSheet> {
  late Map<String, dynamic> _w;

  @override
  void initState() {
    super.initState();
    _w = Map<String, dynamic>.from(widget.widget);
  }

  void _set(String key, dynamic value) => setState(() => _w[key] = value);

  @override
  Widget build(BuildContext context) {
    final type = (_w['type'] ?? '').toString();
    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.85),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(height: 10),
          Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.shade300, borderRadius: BorderRadius.circular(2))),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 16, 12, 8),
            child: Row(
              children: [
                Text('Edit ${ngmyWidgetTypeLabel(type)}', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
                const Spacer(),
                FilledButton(onPressed: () => Navigator.pop(context, _w), child: const Text('Save')),
              ],
            ),
          ),
          Flexible(
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 32),
              children: _fieldsForType(type),
            ),
          ),
        ],
      ),
    );
  }

  List<Widget> _fieldsForType(String type) {
    switch (type) {
      case 'button':
      case 'outlined_button':
        return [
          _tf('Label', _w['label']?.toString() ?? '', (v) => _set('label', v)),
          _screenPicker('Opens screen', (_w['target'] ?? _w['targetScreenId'] ?? '').toString(), (id) {
            _set('target', id);
            _set('targetScreenId', id);
          }),
          if (type == 'button') ...[
            _dropdown('Action', (_w['action'] ?? 'navigate').toString(), const ['navigate', 'snack', 'clear'], (v) => _set('action', v)),
            if ((_w['action'] ?? 'navigate') == 'snack')
              _tf('Snack message', (_w['message'] ?? '').toString(), (v) => _set('message', v)),
            if ((_w['action'] ?? 'navigate') == 'clear')
              _tf('Collection to clear', (_w['collection'] ?? '').toString(), (v) => _set('collection', v)),
            SwitchListTile(
              title: const Text('Large button'),
              value: _w['large'] == true,
              onChanged: (v) => _set('large', v),
            ),
          ],
        ];
      case 'text':
        return [
          _tf('Text', (_w['text'] ?? '').toString(), (v) => _set('text', v), maxLines: 3),
          _dropdown('Style', (_w['style'] ?? 'subtitle').toString(), const ['title', 'subtitle', 'body'], (v) => _set('style', v)),
        ];
      case 'hero':
        return [
          _tf('Emoji', (_w['emoji'] ?? '✨').toString(), (v) => _set('emoji', v)),
          _tf('Title', (_w['title'] ?? '').toString(), (v) => _set('title', v)),
          _tf('Subtitle', (_w['subtitle'] ?? '').toString(), (v) => _set('subtitle', v)),
        ];
      case 'form':
        return [
          _tf('Collection name', (_w['collection'] ?? 'entries').toString(), (v) => _set('collection', v)),
          _tf('Submit button', (_w['submitLabel'] ?? 'Submit').toString(), (v) => _set('submitLabel', v)),
          _tf('Success message', (_w['successMessage'] ?? 'Saved!').toString(), (v) => _set('successMessage', v)),
          _screenPicker('Go to screen after save (optional)', (_w['navigateAfter'] ?? '').toString(), (id) => _set('navigateAfter', id), allowEmpty: true),
          const SizedBox(height: 8),
          Text('Form fields (JSON lines: id, label, type)', style: TextStyle(fontSize: 12, color: Colors.grey.shade600)),
          const SizedBox(height: 4),
          _FormFieldsEditor(fields: _w['fields'], onChanged: (f) => _set('fields', f)),
        ];
      case 'dataList':
        return [
          _tf('Collection', (_w['collection'] ?? 'entries').toString(), (v) => _set('collection', v)),
          _tf('Title field', (_w['titleField'] ?? 'name').toString(), (v) => _set('titleField', v)),
          _tf('Subtitle field', (_w['subtitleField'] ?? '').toString(), (v) => _set('subtitleField', v)),
          _tf('Empty message', (_w['emptyText'] ?? '').toString(), (v) => _set('emptyText', v)),
          _tf('Add button label', (_w['addLabel'] ?? 'Add').toString(), (v) => _set('addLabel', v)),
          _screenPicker('Add button opens', (_w['addTarget'] ?? '').toString(), (id) => _set('addTarget', id), allowEmpty: true),
          SwitchListTile(title: const Text('Allow delete'), value: _w['allowDelete'] == true, onChanged: (v) => _set('allowDelete', v)),
        ];
      case 'menuGrid':
        return [
          _dropdown('Columns', (_w['columns'] ?? 2).toString(), const ['2', '3'], (v) => _set('columns', int.tryParse(v) ?? 2)),
          const SizedBox(height: 8),
          Text('Menu items', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.grey.shade700)),
          _MenuItemsEditor(
            items: _w['items'],
            screens: widget.screens,
            onChanged: (items) => _set('items', items),
          ),
        ];
      case 'switch':
        return [
          _tf('Setting key', (_w['setting'] ?? 'setting').toString(), (v) => _set('setting', v)),
          _tf('Label', (_w['label'] ?? '').toString(), (v) => _set('label', v)),
          _tf('Subtitle', (_w['subtitle'] ?? '').toString(), (v) => _set('subtitle', v)),
          SwitchListTile(title: const Text('Default on'), value: _w['default'] != false, onChanged: (v) => _set('default', v)),
        ];
      case 'stat':
        return [
          _tf('Collection', (_w['collection'] ?? 'entries').toString(), (v) => _set('collection', v)),
          _tf('Label', (_w['label'] ?? 'Total').toString(), (v) => _set('label', v)),
        ];
      case 'image':
        return [_tf('Image URL', (_w['url'] ?? '').toString(), (v) => _set('url', v))];
      default:
        return [Text('No extra settings for this widget.', style: TextStyle(color: Colors.grey.shade600))];
    }
  }

  Widget _tf(String label, String value, void Function(String) onChanged, {int maxLines = 1}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: TextField(
        controller: TextEditingController(text: value)..selection = TextSelection.collapsed(offset: value.length),
        maxLines: maxLines,
        decoration: InputDecoration(labelText: label, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12))),
        onChanged: onChanged,
      ),
    );
  }

  Widget _dropdown(String label, String value, List<String> options, void Function(String) onChanged) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: DropdownButtonFormField<String>(
        value: options.contains(value) ? value : options.first,
        decoration: InputDecoration(labelText: label, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12))),
        items: [for (final o in options) DropdownMenuItem(value: o, child: Text(o))],
        onChanged: (v) { if (v != null) onChanged(v); },
      ),
    );
  }

  Widget _screenPicker(String label, String currentId, void Function(String) onChanged, {bool allowEmpty = false}) {
    final ids = <String?>[if (allowEmpty) '', ...widget.screens.map((s) => s.id)];
    final safe = ids.contains(currentId) ? currentId : (allowEmpty ? '' : widget.screens.firstOrNull?.id ?? '');
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: DropdownButtonFormField<String>(
        value: safe,
        decoration: InputDecoration(labelText: label, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12))),
        items: [
          for (final id in ids)
            DropdownMenuItem(
              value: id ?? '',
              child: Text(id == null || id.isEmpty ? '(none)' : widget.screens.firstWhere((s) => s.id == id, orElse: () => NgmyAppScreen.welcome(id: id, title: id)).title),
            ),
        ],
        onChanged: (v) => onChanged(v ?? ''),
      ),
    );
  }
}

class _FormFieldsEditor extends StatefulWidget {
  const _FormFieldsEditor({required this.fields, required this.onChanged});
  final dynamic fields;
  final void Function(List<Map<String, dynamic>>) onChanged;

  @override
  State<_FormFieldsEditor> createState() => _FormFieldsEditorState();
}

class _FormFieldsEditorState extends State<_FormFieldsEditor> {
  late List<Map<String, dynamic>> _fields;

  @override
  void initState() {
    super.initState();
    _fields = [];
    if (widget.fields is List) {
      for (final f in widget.fields as List) {
        if (f is Map) _fields.add(Map<String, dynamic>.from(f));
      }
    }
    if (_fields.isEmpty) {
      _fields = [
        {'id': 'name', 'label': 'Name', 'type': 'text'},
      ];
    }
  }

  void _sync() => widget.onChanged(_fields);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        for (var i = 0; i < _fields.length; i++)
          Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    decoration: const InputDecoration(labelText: 'Label', isDense: true, border: OutlineInputBorder()),
                    controller: TextEditingController(text: (_fields[i]['label'] ?? '').toString()),
                    onChanged: (v) {
                      _fields[i]['label'] = v;
                      _fields[i]['id'] = v.toLowerCase().replaceAll(RegExp(r'[^a-z0-9]'), '_');
                      _sync();
                    },
                  ),
                ),
                const SizedBox(width: 8),
                DropdownButton<String>(
                  value: (_fields[i]['type'] ?? 'text').toString(),
                  items: const [
                    DropdownMenuItem(value: 'text', child: Text('Text')),
                    DropdownMenuItem(value: 'number', child: Text('Number')),
                    DropdownMenuItem(value: 'email', child: Text('Email')),
                    DropdownMenuItem(value: 'multiline', child: Text('Long text')),
                  ],
                  onChanged: (v) {
                    if (v != null) {
                      setState(() => _fields[i]['type'] = v);
                      _sync();
                    }
                  },
                ),
                IconButton(
                  icon: const Icon(Icons.remove_circle_outline, color: Colors.red),
                  onPressed: () {
                    setState(() => _fields.removeAt(i));
                    _sync();
                  },
                ),
              ],
            ),
          ),
        TextButton.icon(
          onPressed: () {
            setState(() => _fields.add({'id': 'field_${_fields.length}', 'label': 'New field', 'type': 'text'}));
            _sync();
          },
          icon: const Icon(Icons.add),
          label: const Text('Add field'),
        ),
      ],
    );
  }
}

class _MenuItemsEditor extends StatefulWidget {
  const _MenuItemsEditor({required this.items, required this.screens, required this.onChanged});
  final dynamic items;
  final List<NgmyAppScreen> screens;
  final void Function(List<Map<String, dynamic>>) onChanged;

  @override
  State<_MenuItemsEditor> createState() => _MenuItemsEditorState();
}

class _MenuItemsEditorState extends State<_MenuItemsEditor> {
  late List<Map<String, dynamic>> _items;

  @override
  void initState() {
    super.initState();
    _items = [];
    if (widget.items is List) {
      for (final item in widget.items as List) {
        if (item is Map) _items.add(Map<String, dynamic>.from(item));
      }
    }
  }

  void _sync() => widget.onChanged(_items);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        for (var i = 0; i < _items.length; i++)
          Card(
            margin: const EdgeInsets.only(bottom: 8),
            child: Padding(
              padding: const EdgeInsets.all(12),
              child: Column(
                children: [
                  TextField(
                    decoration: const InputDecoration(labelText: 'Label', isDense: true, border: OutlineInputBorder()),
                    controller: TextEditingController(text: (_items[i]['label'] ?? '').toString()),
                    onChanged: (v) {
                      _items[i]['label'] = v;
                      _sync();
                    },
                  ),
                  const SizedBox(height: 8),
                  DropdownButtonFormField<String>(
                    value: widget.screens.any((s) => s.id == (_items[i]['target'] ?? '').toString())
                        ? (_items[i]['target'] ?? '').toString()
                        : widget.screens.firstOrNull?.id,
                    decoration: const InputDecoration(labelText: 'Opens screen', border: OutlineInputBorder()),
                    items: [for (final s in widget.screens) DropdownMenuItem(value: s.id, child: Text(s.title))],
                    onChanged: (v) {
                      if (v != null) {
                        setState(() => _items[i]['target'] = v);
                        _sync();
                      }
                    },
                  ),
                  Align(
                    alignment: Alignment.centerRight,
                    child: TextButton(onPressed: () {
                      setState(() => _items.removeAt(i));
                      _sync();
                    }, child: const Text('Remove', style: TextStyle(color: Colors.red))),
                  ),
                ],
              ),
            ),
          ),
        TextButton.icon(
          onPressed: () {
            setState(() => _items.add({
              'label': 'New item',
              'icon': 'menu',
              'target': widget.screens.firstOrNull?.id ?? '',
            }));
            _sync();
          },
          icon: const Icon(Icons.add),
          label: const Text('Add menu item'),
        ),
      ],
    );
  }
}
