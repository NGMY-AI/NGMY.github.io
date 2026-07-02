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
      _doc.textColor = null;
      ngmyCardResetLayout(_doc);
    });
    widget.onDocumentChanged?.call(_doc);
  }

  @override
  Widget build(BuildContext context) {
    final templates = ngmyBusinessCardTemplatesForCategory(_category);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Wrap(
          spacing: 6,
          runSpacing: 6,
          children: [
            _chip('All', 'all'),
            ...kNgmyBusinessCardCategories.map((c) => _chip(c.$2, c.$1)),
          ],
        ),
        const SizedBox(height: 10),
        SizedBox(
          height: 108,
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
                  width: 130,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(
                      color: selected ? const Color(0xFF22C55E) : Colors.white24,
                      width: selected ? 2 : 1,
                    ),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Expanded(child: ngmyBusinessCardTemplateThumb(tpl, width: 130)),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(6, 4, 6, 6),
                        child: Text(
                          tpl.name,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.center,
                          style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 9),
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
    return FilterChip(
      label: Text(label, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 11, color: on ? Colors.black : Colors.white70)),
      selected: on,
      onSelected: (_) => setState(() => _category = id),
      selectedColor: const Color(0xFF22C55E),
      backgroundColor: const Color(0xFF0B1020),
      checkmarkColor: Colors.black,
      side: BorderSide(color: on ? const Color(0xFF22C55E) : Colors.white24),
    );
  }

  Widget _toolsPanel() {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFF0B1020),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white10),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text('Design Tools', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
          const SizedBox(height: 4),
          Text(
            'Edit fields below or drag items on the card. Toggle visibility per line.',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11),
          ),
          const SizedBox(height: 10),
          _field('Full name', _nameC, 'name'),
          _field('Job title', _titleC, 'title'),
          _field('Company', _companyC, 'company'),
          _field('Phone', _phoneC, 'phone'),
          _field('Email', _emailC, 'email'),
          _field('Website', _websiteC, 'website'),
          _field('Address', _addressC, 'address'),
          _field('Tagline', _taglineC, 'tagline'),
          const SizedBox(height: 8),
          const Text('Accent color', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 12)),
          const SizedBox(height: 6),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: [
              _colorDot(const Color(0xFF2563EB)),
              _colorDot(const Color(0xFF059669)),
              _colorDot(const Color(0xFFDB2777)),
              _colorDot(const Color(0xFFD4AF37)),
              _colorDot(const Color(0xFF0F172A)),
              _colorDot(const Color(0xFF22D3EE)),
              _colorDot(null, label: 'Default'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _colorDot(Color? color, {String? label}) {
    final selected = color == null ? _doc.accentColor == null : _doc.accentColor == color;
    return GestureDetector(
      onTap: () {
        setState(() => _doc.accentColor = color);
        _doc.touch();
        widget.onDocumentChanged?.call(_doc);
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: selected ? const Color(0xFF22C55E) : Colors.white24, width: selected ? 2 : 1),
          color: color ?? const Color(0xFF1E293B),
        ),
        child: Text(label ?? '', style: TextStyle(color: color == null ? Colors.white70 : Colors.transparent, fontSize: 10)),
      ),
    );
  }

  Widget _field(String label, TextEditingController c, String elementId) {
    final visible = ngmyCardElementVisible(_doc, elementId);
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Row(
        children: [
          IconButton(
            constraints: const BoxConstraints(minWidth: 36, minHeight: 36),
            padding: EdgeInsets.zero,
            onPressed: () {
              setState(() {
                _doc.hidden[elementId] = visible;
                _doc.touch();
              });
              widget.onDocumentChanged?.call(_doc);
            },
            icon: Icon(visible ? Icons.visibility_rounded : Icons.visibility_off_rounded, size: 18, color: Colors.white54),
          ),
          Expanded(
            child: TextField(
              controller: c,
              onChanged: (_) {
                _applyControllersToDoc();
                setState(() {});
              },
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 13),
              decoration: InputDecoration(
                labelText: label,
                labelStyle: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 12),
                isDense: true,
                filled: true,
                fillColor: Colors.black26,
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(10),
                  borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1)),
                ),
              ),
            ),
          ),
        ],
      ),
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
                child: NgmyBusinessCardStudio(userEmail: userEmail, initialDocument: doc, showExpandButton: false),
              ),
            ),
          ],
        ),
      ),
    ),
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
