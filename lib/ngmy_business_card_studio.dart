import 'dart:async';
import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_business_card_models.dart';
import 'ngmy_business_card_renderer.dart';
import 'ngmy_business_card_storage.dart';
import 'ngmy_qr_download.dart';

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
        maxWidth: 400,
        maxHeight: 400,
        imageQuality: 88,
      );
      if (file == null) return;
      final bytes = await file.readAsBytes();
      setState(() {
        _doc.logoBase64 = base64Encode(bytes);
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
    final templates = ngmyBusinessCardTemplatesForCategory(_category);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(
          height: 36,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: [
              _chip('All', 'all'),
              ...kNgmyBusinessCardCategories.map((c) => _chip(c.$2, c.$1)),
            ],
          ),
        ),
        const SizedBox(height: 10),
        SizedBox(
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
                      color: selected ? const Color(0xFF22C55E) : Colors.white24,
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
                          style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 8),
                        ),
                      ),
                    ],
                  ),
                ),
              );
            },
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
              onElementDrag: (id, delta) {
                setState(() {
                  ngmyCardSetElementOffset(_doc, id, delta);
                });
                widget.onDocumentChanged?.call(_doc);
              },
            ),
          ),
        ),
        const SizedBox(height: 10),
        Row(
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
                setState(() => ngmyCardResetLayout(_doc));
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
        const SizedBox(height: 8),
        _toolsPanel(),
        const SizedBox(height: 10),
        Row(
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
        if (!widget.compact && widget.showExpandButton) ...[
          const SizedBox(height: 8),
          TextButton.icon(
            onPressed: () => _openFullStudio(context),
            icon: const Icon(Icons.open_in_full_rounded, size: 18),
            label: const Text('Open full-screen studio'),
          ),
        ],
        const SizedBox(height: 16),
        const Text('Saved cards', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
        const SizedBox(height: 8),
        NgmyBusinessCardGallery(
          userEmail: widget.userEmail,
          onOpen: loadDocument,
        ),
      ],
    );
  }

  Widget _chip(String label, String id) {
    final on = _category == id;
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: FilterChip(
        label: Text(label, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 11, color: on ? Colors.black : Colors.white70)),
        selected: on,
        onSelected: (_) => setState(() => _category = id),
        selectedColor: const Color(0xFF22C55E),
        backgroundColor: const Color(0xFF0B1020),
        checkmarkColor: Colors.black,
        side: BorderSide(color: on ? const Color(0xFF22C55E) : Colors.white24),
        padding: const EdgeInsets.symmetric(horizontal: 4),
        visualDensity: VisualDensity.compact,
      ),
    );
  }

  Widget _toolsPanel() {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFF0B1020),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: 0.2)),
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
              const Expanded(
                child: Text('Design Studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
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
                    Text('Text size', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 11, fontWeight: FontWeight.w700)),
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
                backgroundColor: Colors.black26,
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

  Widget _emojiStrip() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Business emojis', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 10, fontWeight: FontWeight.w700)),
        const SizedBox(height: 6),
        SizedBox(
          height: 38,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: _businessEmojis.length,
            separatorBuilder: (_, __) => const SizedBox(width: 4),
            itemBuilder: (_, i) {
              final e = _businessEmojis[i];
              final selected = _doc.cardEmoji == e;
              return GestureDetector(
                onTap: () => _insertEmoji(e),
                child: Container(
                  width: 36,
                  height: 36,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: selected ? const Color(0xFF22C55E).withValues(alpha: 0.2) : Colors.black26,
                    border: Border.all(color: selected ? const Color(0xFF22C55E) : Colors.white12),
                  ),
                  child: Text(e, style: const TextStyle(fontSize: 18)),
                ),
              );
            },
          ),
        ),
        Text('Tap to place on card · drag emoji to move', style: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 9)),
      ],
    );
  }

  Widget _iconStrip() {
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
            backgroundColor: Colors.black26,
            side: const BorderSide(color: Colors.white12),
            onPressed: () => _insertIconSnippet(snippet),
          );
        },
      ),
    );
  }

  Widget _styleSection(String label, List<Color> colors, Color? selected, ValueChanged<Color?> onPick, {required String defaultLabel}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 11, fontWeight: FontWeight.w700)),
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
            color: color ?? const Color(0xFF1E293B),
            border: Border.all(color: selected ? const Color(0xFF22C55E) : Colors.white24, width: selected ? 2.5 : 1),
          ),
          alignment: Alignment.center,
          child: label != null
              ? Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 9, fontWeight: FontWeight.w700))
              : null,
        ),
      ),
    );
  }

  Widget _field(String label, TextEditingController c, String elementId) {
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
          icon: Icon(visible ? Icons.visibility_rounded : Icons.visibility_off_rounded, size: 16, color: Colors.white54),
        ),
        Expanded(
          child: TextField(
            controller: c,
            onTap: () => _activeField = c,
            onChanged: (_) {
              _applyControllersToDoc();
              setState(() {});
            },
            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 12),
            decoration: InputDecoration(
              labelText: label,
              labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
              isDense: true,
              contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
              filled: true,
              fillColor: Colors.black26,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(10),
                borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1)),
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
    showDialog<void>(
      context: context,
      barrierColor: Colors.black87,
      builder: (ctx) => Dialog(
        insetPadding: const EdgeInsets.all(12),
        backgroundColor: const Color(0xFF05070C),
        child: SizedBox(
          width: 520,
          height: MediaQuery.of(ctx).size.height * 0.92,
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(12, 10, 4, 0),
                child: Row(
                  children: [
                    const Expanded(
                      child: Text('Business Card Studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                    ),
                    IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close, color: Colors.white70)),
                  ],
                ),
              ),
              Expanded(
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
        ),
      ),
    );
  }
}

void showNgmyBusinessCardStudioDialog(BuildContext context, {required String userEmail, NgmyBusinessCardDocument? doc}) {
  showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Business Card Studio',
    barrierColor: Colors.black.withValues(alpha: 0.9),
    transitionDuration: const Duration(milliseconds: 300),
    pageBuilder: (ctx, a1, a2) => Center(
      child: Material(
        color: Colors.transparent,
        child: Container(
          width: 520,
          height: MediaQuery.of(ctx).size.height * 0.92,
          margin: const EdgeInsets.all(12),
          clipBehavior: Clip.antiAlias,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: const LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Color(0xFF05070C), Color(0xFF0B1020), Color(0xFF0F172A)],
            ),
            border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: 0.25)),
          ),
          child: Column(
            children: [
              Container(
                padding: const EdgeInsets.fromLTRB(16, 14, 8, 12),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [const Color(0xFF22C55E).withValues(alpha: 0.2), Colors.transparent],
                  ),
                  border: Border(bottom: BorderSide(color: Colors.white.withValues(alpha: 0.06))),
                ),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(colors: [Color(0xFF22C55E), Color(0xFF16A34A)]),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Icon(Icons.badge_rounded, color: Colors.black, size: 22),
                    ),
                    const SizedBox(width: 10),
                    const Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Business Card Studio', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                          Text('34 templates · emojis · colors · drag to design', style: TextStyle(color: Colors.white54, fontSize: 10, fontWeight: FontWeight.w600)),
                        ],
                      ),
                    ),
                    IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                  ],
                ),
              ),
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(12),
                  child: NgmyBusinessCardStudio(userEmail: userEmail, initialDocument: doc, showExpandButton: false),
                ),
              ),
            ],
          ),
        ),
      ),
    ),
    transitionBuilder: (ctx, anim, _, child) {
      return FadeTransition(
        opacity: anim,
        child: ScaleTransition(scale: Tween<double>(begin: 0.96, end: 1).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)), child: child),
      );
    },
  );
}

/// Saved cards gallery for Market Hub frame 4.
class NgmyBusinessCardGallery extends StatelessWidget {
  const NgmyBusinessCardGallery({
    super.key,
    required this.userEmail,
    required this.onOpen,
  });

  final String userEmail;
  final ValueChanged<NgmyBusinessCardDocument> onOpen;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Map<String, dynamic>>>(
      future: loadNgmyBusinessCards(userEmail: userEmail),
      builder: (context, snap) {
        final raw = snap.data ?? [];
        if (snap.connectionState == ConnectionState.waiting && raw.isEmpty) {
          return const SizedBox(height: 80, child: Center(child: CircularProgressIndicator(color: Color(0xFF22C55E))));
        }
        if (raw.isEmpty) {
          return Text(
            'No saved cards yet. Design one above and tap Save Card.',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w600, fontSize: 12),
          );
        }
        return Column(
          children: raw.take(8).map((entry) {
            final doc = NgmyBusinessCardDocument.fromJson(entry);
            return Container(
              margin: const EdgeInsets.only(bottom: 8),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: const Color(0xFF0B1020),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: Colors.white10),
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
                        Text(doc.fullName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                        Text(doc.company, style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11)),
                        Text(doc.template.name, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10)),
                      ],
                    ),
                  ),
                  TextButton(onPressed: () => onOpen(doc), child: const Text('Open')),
                ],
              ),
            );
          }).toList(),
        );
      },
    );
  }
}
