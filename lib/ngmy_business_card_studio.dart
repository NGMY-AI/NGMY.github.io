import 'dart:async';
import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_business_card_models.dart';
import 'ngmy_business_card_renderer.dart';
import 'ngmy_business_card_storage.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_hud_tech_shell.dart';
import 'ngmy_qr_download.dart';

const _kBizCardHudColors = [Color(0xFF22C55E), Color(0xFF16A34A)];

/// Inline or full-screen business card designer.
class NgmyBusinessCardStudio extends StatefulWidget {
  const NgmyBusinessCardStudio({
    super.key,
    required this.userEmail,
    this.compact = false,
    this.showExpandButton = true,
    this.initialDocument,
    this.onDocumentChanged,
  });

  final String userEmail;
  final bool compact;
  final bool showExpandButton;
  final NgmyBusinessCardDocument? initialDocument;
  final ValueChanged<NgmyBusinessCardDocument>? onDocumentChanged;

  @override
  State<NgmyBusinessCardStudio> createState() => NgmyBusinessCardStudioState();
}

class NgmyBusinessCardStudioState extends State<NgmyBusinessCardStudio> {
  late NgmyBusinessCardDocument _doc;
  String _category = 'all';
  bool _editMode = true;
  final GlobalKey _captureKey = GlobalKey();
  TextEditingController? _activeField;
  String? _selectedElementId;
  int _galleryReload = 0;

  static const _businessEmojis = [
    '💼', '📇', '✨', '🏢', '💡', '🎯', '⭐', '🔥', '💎', '🚀',
    '📞', '✉️', '🌐', '📍', '💰', '🤝', '🎨', '📊', '🏆', '👔',
    '💻', '📝', '🔔', '✅', '🌟', '🏠', '📱', '💳', '🎓', '⚡',
  ];

  static const _accentColors = [
    Color(0xFF2563EB), Color(0xFF059669), Color(0xFFDB2777), Color(0xFFD4AF37),
    Color(0xFF0F172A), Color(0xFF22D3EE), Color(0xFF7C3AED), Color(0xFFEF4444),
    Color(0xFFF97316), Color(0xFF14B8A6),
  ];

  static const _bgColors = [
    Color(0xFFFFFFFF), Color(0xFFF8FAFC), Color(0xFF0F172A), Color(0xFF111827),
    Color(0xFF1E1B4B), Color(0xFF0A0A0A), Color(0xFFFAF9F7), Color(0xFFECFEFF),
  ];

  static const _textColors = [
    Color(0xFF0F172A), Color(0xFFFFFFFF), Color(0xFF18181B), Color(0xFF1E293B),
    Color(0xFF3FB950), Color(0xFFD4AF37), Color(0xFFDB2777),
  ];

  static const _borderColors = [
    Color(0xFFD4AF37), Color(0xFF2563EB), Color(0xFF22C55E), Color(0xFF7C3AED),
    Color(0xFFEF4444), Color(0xFF0F172A),
  ];

  final _nameC = TextEditingController();
  final _titleC = TextEditingController();
  final _companyC = TextEditingController();
  final _phoneC = TextEditingController();
  final _emailC = TextEditingController();
  final _websiteC = TextEditingController();
  final _addressC = TextEditingController();
  final _taglineC = TextEditingController();

  @override
  void initState() {
    super.initState();
    _doc = widget.initialDocument?.copy() ?? NgmyBusinessCardDocument();
    _syncControllersFromDoc();
  }

  @override
  void didUpdateWidget(covariant NgmyBusinessCardStudio oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.initialDocument != null && widget.initialDocument!.id != _doc.id) {
      _doc = widget.initialDocument!.copy();
      _syncControllersFromDoc();
    }
  }

  void loadDocument(NgmyBusinessCardDocument doc) {
    setState(() {
      _doc = doc.copy();
      _syncControllersFromDoc();
    });
    widget.onDocumentChanged?.call(_doc);
  }

  void _syncControllersFromDoc() {
    _nameC.text = _doc.fullName;
    _titleC.text = _doc.jobTitle;
    _companyC.text = _doc.company;
    _phoneC.text = _doc.phone;
    _emailC.text = _doc.email;
    _websiteC.text = _doc.website;
    _addressC.text = _doc.address;
    _taglineC.text = _doc.tagline;
  }

  void _applyControllersToDoc() {
    _doc
      ..fullName = _nameC.text.trim()
      ..jobTitle = _titleC.text.trim()
      ..company = _companyC.text.trim()
      ..phone = _phoneC.text.trim()
      ..email = _emailC.text.trim()
      ..website = _websiteC.text.trim()
      ..address = _addressC.text.trim()
      ..tagline = _taglineC.text.trim()
      ..touch();
    widget.onDocumentChanged?.call(_doc);
  }

  @override
  void dispose() {
    _nameC.dispose();
    _titleC.dispose();
    _companyC.dispose();
    _phoneC.dispose();
    _emailC.dispose();
    _websiteC.dispose();
    _addressC.dispose();
    _taglineC.dispose();
    super.dispose();
  }

  Future<void> _pickLogo() async {
    try {
      final file = await ImagePicker().pickImage(
        source: ImageSource.gallery,
        maxWidth: 512,
        maxHeight: 512,
        imageQuality: 90,
      );
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (bytes.isEmpty) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Could not read that image. Try another file.')));
        }
        return;
      }
      setState(() {
        _doc.logoBase64 = base64Encode(bytes);
        // Make sure a previously hidden logo slot is shown again.
        _doc.hidden.remove('logo');
        _doc.touch();
      });
      widget.onDocumentChanged?.call(_doc);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Logo error: $e')));
      }
    }
  }

  Future<void> _saveCard() async {
    _applyControllersToDoc();
    await saveNgmyBusinessCard(_doc.toJson(), userEmail: widget.userEmail);
    if (!mounted) return;
    setState(() => _galleryReload++);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Business card saved on this device.'), backgroundColor: Color(0xFF16A34A)),
    );
  }

  Future<void> _downloadCard() async {
    _applyControllersToDoc();
    try {
      await Future.delayed(const Duration(milliseconds: 120));
      await WidgetsBinding.instance.endOfFrame;
      final boundary = _captureKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) throw Exception('Preview not ready.');
      final image = await boundary.toImage(pixelRatio: 4.0);
      final bytes = (await image.toByteData(format: ui.ImageByteFormat.png))?.buffer.asUint8List();
      if (bytes == null) throw Exception('Could not render card.');
      final slug = _doc.fullName.replaceAll(RegExp(r'[^a-zA-Z0-9]+'), '_').toLowerCase();
      final msg = await downloadNgmyQrImage(bytes, 'business_card_${slug}_${DateTime.now().millisecondsSinceEpoch}');
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg), backgroundColor: const Color(0xFF16A34A)));
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Download failed: $e')));
      }
    }
  }

  void _selectTemplate(NgmyBusinessCardTemplate tpl) {
    setState(() {
      _doc.templateId = tpl.id;
      _doc.accentColor = null;
      _doc.backgroundColor = null;
      _doc.backgroundEndColor = null;
      _doc.textColor = null;
      _doc.borderColor = null;
      ngmyCardResetLayout(_doc);
    });
    widget.onDocumentChanged?.call(_doc);
  }

  void _insertEmoji(String emoji) {
    setState(() {
      _doc.cardEmoji = emoji;
      _doc.touch();
    });
    widget.onDocumentChanged?.call(_doc);
  }

  void _clearEmoji() {
    setState(() {
      _doc.cardEmoji = '';
      _doc.touch();
    });
    widget.onDocumentChanged?.call(_doc);
  }

  void _selectElement(String id) {
    setState(() => _selectedElementId = id);
  }

  void _nudgeSelectedScale(double delta) {
    final id = _selectedElementId;
    if (id == null) return;
    setState(() {
      ngmyCardNudgeElementScale(_doc, id, delta);
    });
    widget.onDocumentChanged?.call(_doc);
  }

  void _insertIconSnippet(String snippet) {
    if (_activeField == null) return;
    setState(() {
      final c = _activeField!;
      final sel = c.selection;
      final text = c.text;
      final pos = sel.start >= 0 ? sel.start : text.length;
      c.text = text.substring(0, pos) + snippet + text.substring(pos);
      c.selection = TextSelection.collapsed(offset: pos + snippet.length);
      _applyControllersToDoc();
    });
    widget.onDocumentChanged?.call(_doc);
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final templates = ngmyBusinessCardTemplatesForCategory(_category);
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            NgmyToolkitAliveSection(
              colors: _kBizCardHudColors,
              pulse: pulse,
              scan: scan,
              orbit: orbit,
              phase: 0.06,
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              child: SizedBox(
                height: 36,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  children: [
                    _chip('All', 'all'),
                    ...kNgmyBusinessCardCategories.map((c) => _chip(c.$2, c.$1)),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 10),
            NgmyToolkitAliveSection(
              colors: _kBizCardHudColors,
              pulse: pulse,
              scan: scan,
              orbit: orbit,
              phase: 0.14,
              padding: const EdgeInsets.all(8),
              child: SizedBox(
                height: 100,
                child: ListView.separated(
                  scrollDirection: Axis.horizontal,
                  itemCount: templates.length,
                  separatorBuilder: (_, __) => const SizedBox(width: 8),
                  itemBuilder: (_, i) {
                    final tpl = templates[i];
                    final selected = tpl.id == _doc.templateId;
                    return GestureDetector(
                      onTap: () => _selectTemplate(tpl),
                      child: Container(
                        width: 120,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: selected ? const Color(0xFF22C55E) : t.chipOffBorder,
                            width: selected ? 2 : 1,
                          ),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Expanded(child: ngmyBusinessCardTemplateThumb(tpl, width: 120)),
                            Padding(
                              padding: const EdgeInsets.fromLTRB(4, 3, 4, 5),
                              child: Text(
                                tpl.name,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                textAlign: TextAlign.center,
                                style: TextStyle(color: t.chipOffLabel, fontWeight: FontWeight.w800, fontSize: 8),
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
            const SizedBox(height: 12),
            Center(
              child: RepaintBoundary(
                key: _captureKey,
                child: NgmyBusinessCardPreview(
                  document: _doc,
                  interactive: _editMode,
                  width: widget.compact ? 320 : 360,
                  selectedElementId: _selectedElementId,
                  onElementSelect: _selectElement,
                  onElementDrag: (id, delta) {
                    setState(() {
                      _selectedElementId = id;
                      ngmyCardSetElementOffset(_doc, id, delta);
                    });
                    widget.onDocumentChanged?.call(_doc);
                  },
                ),
              ),
            ),
            if (_editMode && _selectedElementId != null) _selectedElementSizeBar(),
            const SizedBox(height: 10),
            NgmyToolkitAliveSection(
              colors: _kBizCardHudColors,
              pulse: pulse,
              scan: scan,
              orbit: orbit,
              phase: 0.22,
              padding: const EdgeInsets.all(8),
              child: Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () => setState(() => _editMode = !_editMode),
                      icon: Icon(_editMode ? Icons.touch_app_rounded : Icons.visibility_rounded, size: 18),
                      label: Text(_editMode ? 'Drag Mode On' : 'Preview Mode'),
                    ),
                  ),
                  const SizedBox(width: 8),
                  IconButton(
                    tooltip: 'Reset layout',
                    onPressed: () {
                      setState(() {
                        ngmyCardResetLayout(_doc);
                        _selectedElementId = null;
                      });
                      widget.onDocumentChanged?.call(_doc);
                    },
                    icon: const Icon(Icons.restart_alt_rounded),
                  ),
                  IconButton(
                    tooltip: 'Add logo',
                    onPressed: _pickLogo,
                    icon: const Icon(Icons.add_photo_alternate_outlined),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 8),
            NgmyToolkitAliveSection(
              colors: _kBizCardHudColors,
              pulse: pulse,
              scan: scan,
              orbit: orbit,
              phase: 0.3,
              padding: EdgeInsets.zero,
              child: _toolsPanel(),
            ),
            const SizedBox(height: 10),
            NgmyToolkitAliveSection(
              colors: _kBizCardHudColors,
              pulse: pulse,
              scan: scan,
              orbit: orbit,
              phase: 0.38,
              padding: const EdgeInsets.all(8),
              child: Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: _saveCard,
                      icon: const Icon(Icons.save_outlined),
                      label: const Text('Save Card'),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: FilledButton.icon(
                      onPressed: _downloadCard,
                      style: FilledButton.styleFrom(backgroundColor: const Color(0xFF22C55E), foregroundColor: Colors.black),
                      icon: const Icon(Icons.download_rounded),
                      label: const Text('Download'),
                    ),
                  ),
                ],
              ),
            ),
            if (!widget.compact && widget.showExpandButton) ...[
              const SizedBox(height: 8),
              TextButton.icon(
                onPressed: () => _openFullStudio(context),
                icon: const Icon(Icons.open_in_full_rounded, size: 18),
                label: const Text('Open full-screen studio'),
              ),
            ],
            const SizedBox(height: 16),
            Text('Saved cards', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 14)),
            const SizedBox(height: 8),
            NgmyBusinessCardGallery(
              key: ValueKey('biz-gallery-$_galleryReload'),
              userEmail: widget.userEmail,
              onOpen: loadDocument,
            ),
          ],
        );
      },
    );
  }

  Widget _chip(String label, String id) {
    final t = NgmyHubTheme.of(context);
    final on = _category == id;
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: FilterChip(
        label: Text(label, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 11, color: on ? Colors.black : t.chipOffLabel)),
        selected: on,
        onSelected: (_) => setState(() => _category = id),
        selectedColor: const Color(0xFF22C55E),
        backgroundColor: t.chipOffBg,
        checkmarkColor: Colors.black,
        side: BorderSide(color: on ? const Color(0xFF22C55E) : t.chipOffBorder),
        padding: const EdgeInsets.symmetric(horizontal: 4),
        visualDensity: VisualDensity.compact,
      ),
    );
  }

  Widget _toolsPanel() {
    final t = NgmyHubTheme.of(context);
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: t.panel,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: t.isDark ? 0.2 : 0.35)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.all(6),
                decoration: BoxDecoration(color: const Color(0xFF22C55E).withValues(alpha: 0.15), borderRadius: BorderRadius.circular(8)),
                child: const Icon(Icons.palette_rounded, color: Color(0xFF22C55E), size: 18),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Text('Design Studio', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 15)),
              ),
            ],
          ),
          const SizedBox(height: 10),
          _emojiStrip(),
          const SizedBox(height: 8),
          _iconStrip(),
          const SizedBox(height: 12),
          _fieldRow(_field('Full name', _nameC, 'name'), _field('Job title', _titleC, 'title')),
          _fieldRow(_field('Company', _companyC, 'company'), _field('Phone', _phoneC, 'phone')),
          _fieldRow(_field('Email', _emailC, 'email'), _field('Website', _websiteC, 'website')),
          _fieldRow(_field('Address', _addressC, 'address'), _field('Tagline', _taglineC, 'tagline')),
          const SizedBox(height: 10),
          _styleSection('Accent', _accentColors, _doc.accentColor, (c) {
            setState(() => _doc.accentColor = c);
            _doc.touch();
            widget.onDocumentChanged?.call(_doc);
          }, defaultLabel: 'Default'),
          const SizedBox(height: 8),
          _styleSection('Background', _bgColors, _doc.backgroundColor, (c) {
            setState(() => _doc.backgroundColor = c);
            _doc.touch();
            widget.onDocumentChanged?.call(_doc);
          }, defaultLabel: 'Template'),
          const SizedBox(height: 8),
          _styleSection('Text color', _textColors, _doc.textColor, (c) {
            setState(() => _doc.textColor = c);
            _doc.touch();
            widget.onDocumentChanged?.call(_doc);
          }, defaultLabel: 'Auto'),
          const SizedBox(height: 8),
          _styleSection('Card border', _borderColors, _doc.borderColor, (c) {
            setState(() => _doc.borderColor = c);
            _doc.touch();
            widget.onDocumentChanged?.call(_doc);
          }, defaultLabel: 'None'),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Text size', style: TextStyle(color: t.subtitle, fontSize: 11, fontWeight: FontWeight.w700)),
                    Slider(
                      value: _doc.fontScale.clamp(0.85, 1.3),
                      min: 0.85,
                      max: 1.3,
                      divisions: 9,
                      activeColor: const Color(0xFF22C55E),
                      onChanged: (v) {
                        setState(() {
                          _doc.fontScale = v;
                          _doc.touch();
                        });
                        widget.onDocumentChanged?.call(_doc);
                      },
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              FilterChip(
                label: const Text('Bold', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 11)),
                selected: _doc.boldText,
                onSelected: (v) {
                  setState(() {
                    _doc.boldText = v;
                    _doc.touch();
                  });
                  widget.onDocumentChanged?.call(_doc);
                },
                selectedColor: const Color(0xFF22C55E),
                checkmarkColor: Colors.black,
                backgroundColor: t.isDark ? Colors.black26 : const Color(0xFFE2E8F0),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _fieldRow(Widget left, Widget right) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(child: left),
          const SizedBox(width: 8),
          Expanded(child: right),
        ],
      ),
    );
  }

  Widget _selectedElementSizeBar() {
    final t = NgmyHubTheme.of(context);
    final id = _selectedElementId!;
    final scale = ngmyCardElementScale(_doc, id);
    final pct = (scale * 100).round();
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
      decoration: BoxDecoration(
        color: t.panel,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: 0.35)),
      ),
      child: Row(
        children: [
          Icon(Icons.open_with_rounded, size: 16, color: const Color(0xFF22C55E).withValues(alpha: 0.85)),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              'Selected: ${ngmyCardElementLabel(id)}',
              style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12),
            ),
          ),
          IconButton(
            constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
            padding: EdgeInsets.zero,
            onPressed: scale <= 0.55 ? null : () => _nudgeSelectedScale(-0.08),
            icon: const Icon(Icons.remove_circle_outline, color: Color(0xFF22C55E), size: 22),
          ),
          Text('$pct%', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 13)),
          IconButton(
            constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
            padding: EdgeInsets.zero,
            onPressed: scale >= 2.45 ? null : () => _nudgeSelectedScale(0.08),
            icon: const Icon(Icons.add_circle_outline, color: Color(0xFF22C55E), size: 22),
          ),
        ],
      ),
    );
  }

  Widget _emojiStrip() {
    final t = NgmyHubTheme.of(context);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Business emojis', style: TextStyle(color: t.subtitle, fontSize: 10, fontWeight: FontWeight.w700)),
        const SizedBox(height: 6),
        SizedBox(
          height: 38,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: _businessEmojis.length + 1,
            separatorBuilder: (_, __) => const SizedBox(width: 4),
            itemBuilder: (_, i) {
              if (i == 0) {
                final noneSelected = _doc.cardEmoji.trim().isEmpty;
                return GestureDetector(
                  onTap: _clearEmoji,
                  child: Container(
                    width: 36,
                    height: 36,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      color: noneSelected ? const Color(0xFF22C55E).withValues(alpha: 0.2) : t.fieldFill,
                      border: Border.all(color: noneSelected ? const Color(0xFF22C55E) : t.border),
                    ),
                    child: Text('None', style: TextStyle(color: noneSelected ? const Color(0xFF22C55E) : t.muted, fontWeight: FontWeight.w800, fontSize: 8)),
                  ),
                );
              }
              final e = _businessEmojis[i - 1];
              final selected = _doc.cardEmoji == e;
              return GestureDetector(
                onTap: () {
                  _insertEmoji(e);
                  _selectElement('card_emoji');
                },
                child: Container(
                  width: 36,
                  height: 36,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: selected ? const Color(0xFF22C55E).withValues(alpha: 0.2) : t.fieldFill,
                    border: Border.all(color: selected ? const Color(0xFF22C55E) : t.border),
                  ),
                  child: Text(e, style: const TextStyle(fontSize: 18)),
                ),
              );
            },
          ),
        ),
        Text('None clears emoji · tap to place · drag to move · use +/- to resize', style: TextStyle(color: t.muted, fontSize: 9)),
      ],
    );
  }

  Widget _iconStrip() {
    final t = NgmyHubTheme.of(context);
    const icons = [
      (Icons.phone_rounded, '📞 '),
      (Icons.email_rounded, '✉️ '),
      (Icons.language_rounded, '🌐 '),
      (Icons.location_on_rounded, '📍 '),
      (Icons.business_rounded, '🏢 '),
      (Icons.star_rounded, '⭐ '),
    ];
    return SizedBox(
      height: 32,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: icons.length,
        separatorBuilder: (_, __) => const SizedBox(width: 6),
        itemBuilder: (_, i) {
          final (icon, snippet) = icons[i];
          return ActionChip(
            avatar: Icon(icon, size: 16, color: const Color(0xFF22C55E)),
            label: const Text('', style: TextStyle(fontSize: 0)),
            padding: EdgeInsets.zero,
            visualDensity: VisualDensity.compact,
            backgroundColor: t.fieldFill,
            side: BorderSide(color: t.border),
            onPressed: () => _insertIconSnippet(snippet),
          );
        },
      ),
    );
  }

  Widget _styleSection(String label, List<Color> colors, Color? selected, ValueChanged<Color?> onPick, {required String defaultLabel}) {
    final t = NgmyHubTheme.of(context);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: TextStyle(color: t.subtitle, fontSize: 11, fontWeight: FontWeight.w700)),
        const SizedBox(height: 6),
        SizedBox(
          height: 32,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: [
              _colorDot(null, label: defaultLabel, selected: selected == null, onTap: () => onPick(null)),
              ...colors.map((c) => _colorDot(c, selected: selected == c, onTap: () => onPick(c))),
            ],
          ),
        ),
      ],
    );
  }

  Widget _colorDot(Color? color, {String? label, required bool selected, required VoidCallback onTap}) {
    final t = NgmyHubTheme.of(context);
    return Padding(
      padding: const EdgeInsets.only(right: 8),
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          width: label != null ? null : 28,
          height: 28,
          padding: label != null ? const EdgeInsets.symmetric(horizontal: 10) : null,
          decoration: BoxDecoration(
            shape: label == null ? BoxShape.circle : BoxShape.rectangle,
            borderRadius: label != null ? BorderRadius.circular(14) : null,
            color: color ?? (t.isDark ? const Color(0xFF1E293B) : const Color(0xFFE2E8F0)),
            border: Border.all(color: selected ? const Color(0xFF22C55E) : t.chipOffBorder, width: selected ? 2.5 : 1),
          ),
          alignment: Alignment.center,
          child: label != null
              ? Text(label, style: TextStyle(color: t.chipOffLabel, fontSize: 9, fontWeight: FontWeight.w700))
              : null,
        ),
      ),
    );
  }

  Widget _field(String label, TextEditingController c, String elementId) {
    final t = NgmyHubTheme.of(context);
    final visible = ngmyCardElementVisible(_doc, elementId);
    return Row(
      children: [
        IconButton(
          constraints: const BoxConstraints(minWidth: 32, minHeight: 32),
          padding: EdgeInsets.zero,
          onPressed: () {
            setState(() {
              _doc.hidden[elementId] = visible;
              _doc.touch();
            });
            widget.onDocumentChanged?.call(_doc);
          },
          icon: Icon(visible ? Icons.visibility_rounded : Icons.visibility_off_rounded, size: 16, color: t.muted),
        ),
        Expanded(
          child: TextField(
            controller: c,
            onTap: () => _activeField = c,
            onChanged: (_) {
              _applyControllersToDoc();
              setState(() {});
            },
            style: TextStyle(color: t.title, fontWeight: FontWeight.w600, fontSize: 12),
            decoration: InputDecoration(
              labelText: label,
              labelStyle: TextStyle(color: t.muted, fontSize: 11),
              isDense: true,
              contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
              filled: true,
              fillColor: t.fieldFill,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
                borderSide: BorderSide(color: t.inputBorder),
              ),
              focusedBorder: const OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(10)),
                borderSide: BorderSide(color: Color(0xFF22C55E), width: 1.4),
              ),
            ),
          ),
        ),
      ],
    );
  }

  void _openFullStudio(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    showDialog<void>(
      context: context,
      barrierColor: t.overlayDark,
      builder: (ctx) {
        final w = MediaQuery.of(ctx).size.width;
        final dialogW = w > 540 ? 520.0 : w - 24;
        return Dialog(
          insetPadding: const EdgeInsets.all(12),
          backgroundColor: Colors.transparent,
          child: NgmyHudMotion(
            builder: (context, pulse, scan, orbit) {
              return NgmyToolkitAlivePanel(
                colors: _kBizCardHudColors,
                pulse: pulse,
                scan: scan,
                orbit: orbit,
                width: dialogW,
                maxHeight: MediaQuery.of(context).size.height * 0.92,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    NgmyToolkitAliveHeader(
                      title: 'Business Card Studio',
                      subtitle: '34 templates · emojis · colors · drag to design',
                      colors: _kBizCardHudColors,
                      pulse: pulse,
                      orbit: orbit,
                      icon: Icons.badge_rounded,
                      onClose: () => Navigator.pop(context),
                    ),
                    Flexible(
                      child: SingleChildScrollView(
                        padding: const EdgeInsets.all(12),
                        child: NgmyBusinessCardStudio(
                          userEmail: widget.userEmail,
                          initialDocument: _doc,
                          showExpandButton: false,
                          onDocumentChanged: (d) => loadDocument(d),
                        ),
                      ),
                    ),
                  ],
                ),
              );
            },
          ),
        );
      },
    );
  }
}

void showNgmyBusinessCardStudioDialog(BuildContext context, {required String userEmail, NgmyBusinessCardDocument? doc}) {
  final barrier = NgmyHubTheme.of(context).barrier;
  showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Business Card Studio',
    barrierColor: barrier,
    transitionDuration: const Duration(milliseconds: 300),
    pageBuilder: (ctx, a1, a2) {
      final w = MediaQuery.of(ctx).size.width;
      final dialogW = w > 540 ? 520.0 : w - 24;
      return Dialog(
        insetPadding: const EdgeInsets.all(12),
        backgroundColor: Colors.transparent,
        child: NgmyHudMotion(
          builder: (context, pulse, scan, orbit) {
            return NgmyToolkitAlivePanel(
              colors: _kBizCardHudColors,
              pulse: pulse,
              scan: scan,
              orbit: orbit,
              width: dialogW,
              maxHeight: MediaQuery.of(context).size.height * 0.92,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  NgmyToolkitAliveHeader(
                    title: 'Business Card Studio',
                    subtitle: '34 templates · emojis · colors · drag to design',
                    colors: _kBizCardHudColors,
                    pulse: pulse,
                    orbit: orbit,
                    icon: Icons.badge_rounded,
                    onClose: () => Navigator.pop(context),
                  ),
                  Flexible(
                    child: SingleChildScrollView(
                      padding: const EdgeInsets.all(12),
                      child: NgmyBusinessCardStudio(userEmail: userEmail, initialDocument: doc, showExpandButton: false),
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      );
    },
    transitionBuilder: (ctx, anim, _, child) {
      return FadeTransition(
        opacity: anim,
        child: ScaleTransition(scale: Tween<double>(begin: 0.96, end: 1).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)), child: child),
      );
    },
  );
}

/// Saved cards gallery for Market Hub frame 4.
class NgmyBusinessCardGallery extends StatefulWidget {
  const NgmyBusinessCardGallery({
    super.key,
    required this.userEmail,
    required this.onOpen,
  });

  final String userEmail;
  final ValueChanged<NgmyBusinessCardDocument> onOpen;

  @override
  State<NgmyBusinessCardGallery> createState() => _NgmyBusinessCardGalleryState();
}

class _NgmyBusinessCardGalleryState extends State<NgmyBusinessCardGallery> {
  late Future<List<Map<String, dynamic>>> _future;

  @override
  void initState() {
    super.initState();
    _future = loadNgmyBusinessCards(userEmail: widget.userEmail);
  }

  @override
  void didUpdateWidget(covariant NgmyBusinessCardGallery oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.userEmail != widget.userEmail) {
      _future = loadNgmyBusinessCards(userEmail: widget.userEmail);
    }
  }

  void _reload() {
    setState(() => _future = loadNgmyBusinessCards(userEmail: widget.userEmail));
  }

  Future<void> _deleteCard(String id) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Delete business card?'),
        content: const Text('This removes the saved card from this device.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, true),
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFFEF4444)),
            child: const Text('Delete'),
          ),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    await deleteNgmyBusinessCard(id, userEmail: widget.userEmail);
    if (!mounted) return;
    _reload();
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return FutureBuilder<List<Map<String, dynamic>>>(
      future: _future,
      builder: (context, snap) {
        final raw = snap.data ?? [];
        if (snap.connectionState == ConnectionState.waiting && raw.isEmpty) {
          return const SizedBox(height: 80, child: Center(child: CircularProgressIndicator(color: Color(0xFF22C55E))));
        }
        if (raw.isEmpty) {
          return Text(
            'No saved cards yet. Design one above and tap Save Card.',
            style: TextStyle(color: t.subtitle, fontWeight: FontWeight.w600, fontSize: 12),
          );
        }
        return Column(
          children: raw.take(8).map((entry) {
            final doc = NgmyBusinessCardDocument.fromJson(entry);
            return Stack(
              children: [
                Container(
                  margin: const EdgeInsets.only(bottom: 8),
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: t.listItemBg,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: t.border),
                  ),
                  child: Row(
                    children: [
                      SizedBox(
                        width: 96,
                        child: NgmyBusinessCardPreview(document: doc, width: 96, interactive: false),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(doc.fullName, style: TextStyle(color: t.title, fontWeight: FontWeight.w800)),
                            Text(doc.company, style: TextStyle(color: t.subtitle, fontSize: 11)),
                            Text(doc.template.name, style: TextStyle(color: t.muted, fontSize: 10)),
                          ],
                        ),
                      ),
                      TextButton(onPressed: () => widget.onOpen(doc), child: const Text('Open')),
                    ],
                  ),
                ),
                Positioned(
                  top: 2,
                  right: 2,
                  child: IconButton(
                    tooltip: 'Delete card',
                    visualDensity: VisualDensity.compact,
                    padding: EdgeInsets.zero,
                    constraints: const BoxConstraints(minWidth: 30, minHeight: 30),
                    onPressed: () => _deleteCard(doc.id),
                    icon: Icon(Icons.delete_outline_rounded, size: 18, color: t.muted),
                  ),
                ),
              ],
            );
          }).toList(),
        );
      },
    );
  }
}
