import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_bio_image_crop.dart';
import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';
import 'ngmy_bio_renderer.dart';
import 'ngmy_bio_storage.dart';
import 'ngmy_bio_templates.dart';
import 'ngmy_bio_urls.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_bio_qr.dart';
import 'ngmy_menu_qr.dart' show NgmyMenuQrWidget;
import 'ngmy_qr_download.dart';

const _kBioAccent = Color(0xFFB8860B);

/// Bio page editor — opened from Menu Studio.
class NgmyBioStudioEditor extends StatefulWidget {
  const NgmyBioStudioEditor({
    super.key,
    required this.userEmail,
    required this.document,
    required this.onBack,
    required this.onSaved,
  });

  final String userEmail;
  final NgmyBioDocument document;
  final VoidCallback onBack;
  final VoidCallback onSaved;

  @override
  State<NgmyBioStudioEditor> createState() => _NgmyBioStudioEditorState();
}

class _NgmyBioStudioEditorState extends State<NgmyBioStudioEditor> {
  late NgmyBioDocument _doc;
  int _tab = 0;
  bool _publishing = false;
  bool _previewExpanded = true;
  final _qrCaptureKey = GlobalKey();

  final _nameC = TextEditingController();
  final _taglineC = TextEditingController();
  final _slugC = TextEditingController();
  final _socialInstagramC = TextEditingController();
  final _socialFacebookC = TextEditingController();
  final _socialYoutubeC = TextEditingController();
  final _socialWebsiteC = TextEditingController();

  @override
  void initState() {
    super.initState();
    _doc = widget.document.copy();
    _bind();
  }

  @override
  void dispose() {
    _nameC.dispose();
    _taglineC.dispose();
    _slugC.dispose();
    _socialInstagramC.dispose();
    _socialFacebookC.dispose();
    _socialYoutubeC.dispose();
    _socialWebsiteC.dispose();
    super.dispose();
  }

  void _bind() {
    _nameC.text = _doc.displayName;
    _taglineC.text = _doc.tagline;
    _slugC.text = _doc.slug;
    _socialInstagramC.text = _doc.socialLinks.instagram;
    _socialFacebookC.text = _doc.socialLinks.facebook;
    _socialYoutubeC.text = _doc.socialLinks.youtube;
    _socialWebsiteC.text = _doc.socialLinks.website;
    for (final c in [_nameC, _taglineC]) {
      c.removeListener(_previewRefresh);
      c.addListener(_previewRefresh);
    }
  }

  void _previewRefresh() {
    _doc.displayName = _nameC.text;
    _doc.tagline = _taglineC.text;
    if (mounted) setState(() {});
  }

  void _sync() {
    _doc.displayName = _nameC.text.trim();
    _doc.tagline = _taglineC.text.trim();
    _doc.slug = _slugC.text.trim().toLowerCase();
    _doc.socialLinks = _doc.socialLinks.copyWith(
      instagram: _socialInstagramC.text.trim(),
      facebook: _socialFacebookC.text.trim(),
      youtube: _socialYoutubeC.text.trim(),
      website: _socialWebsiteC.text.trim(),
    );
  }

  Future<void> _save() async {
    _sync();
    await saveNgmyBio(userEmail: widget.userEmail, doc: _doc);
    widget.onSaved();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Bio saved')));
  }

  Future<void> _publish() async {
    _sync();
    if (_doc.displayName.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Add your name first')));
      return;
    }
    setState(() => _publishing = true);
    final slugs = await NgmyBioPublishRegistry.fetchAllSlugs();
    if (_doc.slug.isEmpty) {
      _doc.slug = ngmyBuildUniqueBioSlug(_doc.displayName, slugs);
      _slugC.text = _doc.slug;
    }
    _doc.publicUrl = ngmyBioPublicUrlForSlug(_doc.slug);
    _doc.status = 'published';
    final err = await NgmyBioPublishRegistry.publish(slug: _doc.slug, data: _doc.toJson(), createdByEmail: widget.userEmail);
    await saveNgmyBio(userEmail: widget.userEmail, doc: _doc);
    setState(() => _publishing = false);
    widget.onSaved();
    if (!mounted) return;
    if (err != null) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(err)));
      return;
    }
    await _copyLink(_doc.publicUrl);
  }

  Future<void> _copyLink(String url) async {
    if (url.trim().isEmpty) return;
    await Clipboard.setData(ClipboardData(text: url));
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Published! Link copied: $url')));
  }

  void _openFullPreview() {
    _sync();
    showDialog<void>(
      context: context,
      barrierColor: Colors.black87,
      builder: (ctx) => Dialog.fullscreen(
        backgroundColor: Colors.black,
        child: Stack(
          children: [
            SafeArea(
              child: Center(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 420, maxHeight: 780),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(24),
                    child: NgmyBioPreview(document: _doc, compact: false, interactive: false),
                  ),
                ),
              ),
            ),
            Positioned(
              top: MediaQuery.paddingOf(ctx).top + 8,
              right: 12,
              child: Material(
                color: Colors.white.withValues(alpha: 0.15),
                borderRadius: BorderRadius.circular(24),
                child: IconButton(
                  onPressed: () => Navigator.pop(ctx),
                  icon: const Icon(Icons.close_rounded, color: Colors.white),
                ),
              ),
            ),
            Positioned(
              bottom: MediaQuery.paddingOf(ctx).bottom + 16,
              left: 0,
              right: 0,
              child: Center(
                child: FilledButton.icon(
                  onPressed: () => Navigator.pop(ctx),
                  style: FilledButton.styleFrom(backgroundColor: _kBioAccent, padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 14)),
                  icon: const Icon(Icons.edit_rounded),
                  label: const Text('Back to editing'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _pickImage(void Function(String b64) setter, {int maxSize = 1200}) async {
    try {
      final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: maxSize.toDouble(), imageQuality: 88);
      if (file == null) return;
      final bytes = await file.readAsBytes();
      setState(() => setter('data:image/jpeg;base64,${base64Encode(bytes)}'));
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not pick image: $e')));
    }
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final qrUrl = _doc.publicUrl.isNotEmpty ? _doc.publicUrl : ngmyBioPublicUrlForSlug(_doc.slug.isEmpty ? 'preview' : _doc.slug);
    final wide = MediaQuery.sizeOf(context).width > 720;

    return Material(
      color: t.scaffold,
      child: SafeArea(
        child: Column(
          children: [
            _topBar(t),
            if (_doc.publicUrl.isNotEmpty) _linkBar(t, _doc.publicUrl),
            Expanded(
              child: wide ? _wideLayout(t, qrUrl) : _mobileLayout(t, qrUrl),
            ),
            _bottomBar(t),
          ],
        ),
      ),
    );
  }

  Widget _wideLayout(NgmyHubTheme t, String qrUrl) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Expanded(flex: 5, child: _tabBody(t, qrUrl)),
        Expanded(
          flex: 4,
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(12, 8, 12, 0),
                child: Row(
                  children: [
                    Icon(Icons.visibility_rounded, size: 16, color: t.muted),
                    const SizedBox(width: 6),
                    Text('Live preview', style: TextStyle(color: t.subtitle, fontWeight: FontWeight.w700, fontSize: 12)),
                  ],
                ),
              ),
              Expanded(
                child: Container(
                  margin: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: t.border),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 16)],
                  ),
                  clipBehavior: Clip.antiAlias,
                  child: RepaintBoundary(
                    child: NgmyBioPreview(document: _doc, compact: false),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _mobileLayout(NgmyHubTheme t, String qrUrl) {
    const collapsedH = 52.0;
    const expandedH = 240.0;
    return Column(
      children: [
        AnimatedContainer(
          duration: const Duration(milliseconds: 280),
          curve: Curves.easeInOut,
          height: _previewExpanded ? expandedH : collapsedH,
          child: Column(
            children: [
              Material(
                color: t.listItemBg,
                child: InkWell(
                  onTap: () => setState(() => _previewExpanded = !_previewExpanded),
                  child: Container(
                    height: collapsedH,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    decoration: BoxDecoration(border: Border(bottom: BorderSide(color: t.border))),
                    child: Row(
                      children: [
                        Icon(_previewExpanded ? Icons.keyboard_arrow_up_rounded : Icons.keyboard_arrow_down_rounded, color: _kBioAccent),
                        const SizedBox(width: 8),
                        Text(
                          _previewExpanded ? 'Hide preview' : 'Show preview',
                          style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 13),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              if (_previewExpanded)
                Expanded(
                  child: Container(
                    decoration: BoxDecoration(border: Border(bottom: BorderSide(color: t.border))),
                    clipBehavior: Clip.antiAlias,
                    child: RepaintBoundary(
                      child: NgmyBioPreview(document: _doc, compact: true),
                    ),
                  ),
                ),
            ],
          ),
        ),
        Expanded(child: _tabBody(t, qrUrl)),
      ],
    );
  }

  Widget _topBar(NgmyHubTheme t) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 4, 12, 0),
      child: Row(
        children: [
          IconButton(onPressed: widget.onBack, icon: Icon(Icons.arrow_back_ios_new_rounded, color: t.iconButtonIcon, size: 18)),
          Expanded(
            child: Text(_doc.displayName.trim().isEmpty ? 'New Bio' : _doc.displayName.trim(), style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 16), overflow: TextOverflow.ellipsis),
          ),
          if (_doc.publicUrl.isNotEmpty)
            IconButton(onPressed: () => _copyLink(_doc.publicUrl), icon: const Icon(Icons.copy_rounded, color: _kBioAccent)),
        ],
      ),
    );
  }

  Widget _linkBar(NgmyHubTheme t, String url) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(color: _kBioAccent.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(12), border: Border.all(color: _kBioAccent.withValues(alpha: 0.3))),
        child: Row(
          children: [
            const Icon(Icons.link_rounded, color: _kBioAccent, size: 16),
            const SizedBox(width: 8),
            Expanded(child: Text(url, style: TextStyle(color: t.title, fontSize: 11, fontWeight: FontWeight.w600), overflow: TextOverflow.ellipsis)),
          ],
        ),
      ),
    );
  }

  Widget _bottomBar(NgmyHubTheme t) {
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 8, 12, 12),
      decoration: BoxDecoration(color: t.scaffold, border: Border(top: BorderSide(color: t.border))),
      child: Row(
        children: [
          Expanded(
            child: OutlinedButton(onPressed: _save, child: const Text('Save')),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: OutlinedButton.icon(
              onPressed: _openFullPreview,
              icon: const Icon(Icons.visibility_outlined, size: 18),
              label: const Text('Preview'),
              style: OutlinedButton.styleFrom(foregroundColor: _kBioAccent, side: const BorderSide(color: _kBioAccent)),
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            flex: 2,
            child: FilledButton(
              onPressed: _publishing ? null : _publish,
              style: FilledButton.styleFrom(backgroundColor: _kBioAccent),
              child: _publishing
                  ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : const Text('Publish'),
            ),
          ),
        ],
      ),
    );
  }

  Widget _tabBody(NgmyHubTheme t, String qrUrl) {
    return Column(
      children: [
        _tabNavBar(t),
        Expanded(
          child: IndexedStack(
            index: _tab,
            children: [
              _profileTab(t),
              _linksTab(t),
              _designTab(t),
              _socialTab(t),
              _qrTab(t, qrUrl),
            ],
          ),
        ),
      ],
    );
  }

  static const _tabMeta = [
    (Icons.person_outline_rounded, 'Profile'),
    (Icons.link_rounded, 'Links'),
    (Icons.palette_outlined, 'Design'),
    (Icons.share_outlined, 'Social'),
    (Icons.qr_code_2_rounded, 'QR'),
  ];

  Widget _tabNavBar(NgmyHubTheme t) {
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 6, 12, 8),
      padding: const EdgeInsets.all(5),
      decoration: BoxDecoration(
        color: t.listItemBg,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: t.border),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 10, offset: const Offset(0, 2))],
      ),
      child: Row(
        children: List.generate(_tabMeta.length, (i) {
          final sel = _tab == i;
          final (icon, label) = _tabMeta[i];
          return Expanded(
            child: GestureDetector(
              onTap: () => setState(() => _tab = i),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                curve: Curves.easeOut,
                padding: const EdgeInsets.symmetric(vertical: 10),
                decoration: BoxDecoration(
                  color: sel ? _kBioAccent : Colors.transparent,
                  borderRadius: BorderRadius.circular(14),
                  boxShadow: sel ? [BoxShadow(color: _kBioAccent.withValues(alpha: 0.35), blurRadius: 8, offset: const Offset(0, 2))] : null,
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(icon, size: 18, color: sel ? Colors.white : t.muted),
                    const SizedBox(height: 3),
                    Text(
                      label,
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: sel ? FontWeight.w800 : FontWeight.w600,
                        color: sel ? Colors.white : t.subtitle,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        }),
      ),
    );
  }

  Widget _sectionCard(NgmyHubTheme t, {required String title, String? subtitle, required Widget child}) {
    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: t.listItemBg,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: t.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 14)),
          if (subtitle != null) ...[
            const SizedBox(height: 4),
            Text(subtitle, style: TextStyle(color: t.subtitle, fontSize: 12)),
          ],
          const SizedBox(height: 14),
          child,
        ],
      ),
    );
  }

  Widget _profileTab(NgmyHubTheme t) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        _sectionCard(
          t,
          title: 'Your identity',
          subtitle: 'Name and tagline shown on your bio page.',
          child: Column(
            children: [
              NgmyModernField(controller: _nameC, label: 'Display name', hint: 'KB Pablo', icon: Icons.person_outline_rounded, accent: _kBioAccent),
              const SizedBox(height: 12),
              NgmyModernField(controller: _taglineC, label: 'Bio line', hint: 'MAKE MONEY ONLINE', icon: Icons.short_text_rounded, accent: _kBioAccent),
              const SizedBox(height: 12),
              NgmyModernField(controller: _slugC, label: 'Custom link slug', hint: 'my-bio', icon: Icons.link_rounded, accent: _kBioAccent),
            ],
          ),
        ),
        _sectionCard(
          t,
          title: 'Profile photo size',
          subtitle: 'Drag to make your avatar bigger or smaller on the page.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(Icons.photo_size_select_large_rounded, size: 18, color: t.muted),
                  Expanded(
                    child: Slider(
                      value: _doc.profileScale,
                      min: 0.65,
                      max: 1.6,
                      divisions: 19,
                      activeColor: _kBioAccent,
                      label: '${(_doc.profileScale * 100).round()}%',
                      onChanged: (v) => setState(() => _doc.profileScale = v),
                    ),
                  ),
                  Text('${(_doc.profileScale * 100).round()}%', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
                ],
              ),
            ],
          ),
        ),
        _sectionCard(
          t,
          title: 'Photos',
          subtitle: 'Profile, header banner, and full-page background.',
          child: Column(
            children: [
              _photoTile(t, label: 'Profile photo', hint: 'Square photo — shown in the ring', hasImage: _doc.avatarImageBase64.isNotEmpty, onPick: () => _pickImage((b) => _doc.avatarImageBase64 = b, maxSize: 800), onClear: () => setState(() => _doc.avatarImageBase64 = '')),
              const SizedBox(height: 10),
              _photoTile(t, label: 'Header banner', hint: 'Wide banner — crop to fit', hasImage: _doc.headerImageBase64.isNotEmpty, onPick: () async {
                final url = await ngmyBioPickBannerImage(context);
                if (url != null) setState(() => _doc.headerImageBase64 = url);
              }, onClear: () => setState(() => _doc.headerImageBase64 = '')),
              const SizedBox(height: 10),
              _photoTile(t, label: 'Page background', hint: 'Optional full-page backdrop', hasImage: _doc.backgroundImageBase64.isNotEmpty, onPick: () => _pickImage((b) => _doc.backgroundImageBase64 = b), onClear: () => setState(() => _doc.backgroundImageBase64 = '')),
            ],
          ),
        ),
      ],
    );
  }

  Widget _photoTile(NgmyHubTheme t, {required String label, required String hint, required bool hasImage, required VoidCallback onPick, required VoidCallback onClear}) {
    return Material(
      color: t.fieldFill,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onPick,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), border: Border.all(color: t.border)),
          child: Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(color: _kBioAccent.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10)),
                child: Icon(hasImage ? Icons.check_circle_rounded : Icons.add_photo_alternate_outlined, color: hasImage ? const Color(0xFF059669) : _kBioAccent),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(label, style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 13)),
                    Text(hint, style: TextStyle(color: t.subtitle, fontSize: 11)),
                  ],
                ),
              ),
              if (hasImage)
                IconButton(
                  onPressed: onClear,
                  icon: Icon(Icons.close_rounded, size: 18, color: t.muted),
                  padding: EdgeInsets.zero,
                  constraints: const BoxConstraints(minWidth: 32, minHeight: 32),
                ),
              Icon(Icons.chevron_right_rounded, color: t.muted, size: 20),
            ],
          ),
        ),
      ),
    );
  }

  Widget _linksTab(NgmyHubTheme t) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        _sectionCard(
          t,
          title: 'Link cards',
          subtitle: 'Each card has an image, title, and URL. Tap to edit.',
          child: Column(
            children: [
              ..._doc.links.asMap().entries.map((e) => _linkEditor(t, e.key, e.value)),
              const SizedBox(height: 4),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton.icon(
                  onPressed: () => setState(() => _doc.links.add(NgmyBioLink(id: ngmyBioNewId(), title: 'New link', url: ''))),
                  icon: const Icon(Icons.add_rounded),
                  label: const Text('Add link'),
                  style: OutlinedButton.styleFrom(foregroundColor: _kBioAccent, side: BorderSide(color: _kBioAccent.withValues(alpha: 0.5))),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _linkEditor(NgmyHubTheme t, int index, NgmyBioLink link) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: t.scaffold, borderRadius: BorderRadius.circular(12), border: Border.all(color: t.border)),
      child: Column(
        children: [
          Row(
            children: [
              GestureDetector(
                onTap: () => _pickImage((b) => setState(() => link.imageBase64 = b), maxSize: 400),
                child: Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), color: t.fieldFill, border: Border.all(color: t.border)),
                  clipBehavior: Clip.antiAlias,
                  child: link.imageBase64.isNotEmpty
                      ? Image.memory(base64Decode(link.imageBase64.split(',').last), fit: BoxFit.cover)
                      : Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(Icons.image_outlined, color: t.muted, size: 20),
                            Text('Image', style: TextStyle(color: t.muted, fontSize: 8)),
                          ],
                        ),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: TextFormField(
                  initialValue: link.title,
                  decoration: InputDecoration(labelText: 'Link name', hintText: 'My store', isDense: true, filled: true, fillColor: t.fieldFill, border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide(color: t.border))),
                  onChanged: (v) {
                    link.title = v;
                    setState(() {});
                  },
                ),
              ),
              IconButton(onPressed: () => setState(() => _doc.links.removeAt(index)), icon: Icon(Icons.delete_outline_rounded, color: t.muted)),
            ],
          ),
          const SizedBox(height: 8),
          TextFormField(
            initialValue: link.url,
            decoration: InputDecoration(labelText: 'URL', hintText: 'https://...', isDense: true, filled: true, fillColor: t.fieldFill, border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide(color: t.border)), prefixIcon: const Icon(Icons.link_rounded, size: 18)),
            onChanged: (v) => link.url = v,
          ),
        ],
      ),
    );
  }

  Widget _designTab(NgmyHubTheme t) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        _sectionCard(
          t,
          title: 'Templates',
          subtitle: 'Pick a layout — curves flow into the same page color.',
          child: LayoutBuilder(
            builder: (context, constraints) {
              const cols = 4;
              const gap = 8.0;
              final cellW = (constraints.maxWidth - gap * (cols - 1)) / cols;
              return GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: cols,
                  crossAxisSpacing: gap,
                  mainAxisSpacing: 10,
                  childAspectRatio: cellW / (cellW * 1.28 + 20),
                ),
                itemCount: kNgmyBioTemplates.length,
                itemBuilder: (context, i) {
                  final tpl = kNgmyBioTemplates[i];
                  final sel = _doc.templateId == tpl.id;
                  return GestureDetector(
                    onTap: () => setState(() => _doc.templateId = tpl.id),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        NgmyBioTemplateThumb(template: tpl, selected: sel, size: cellW),
                        const SizedBox(height: 3),
                        Text(
                          tpl.name,
                          style: TextStyle(
                            fontSize: 8,
                            fontWeight: sel ? FontWeight.w900 : FontWeight.w600,
                            color: sel ? _kBioAccent : t.subtitle,
                          ),
                          textAlign: TextAlign.center,
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                    ),
                  );
                },
              );
            },
          ),
        ),
        _sectionCard(
          t,
          title: 'Profile ring',
          subtitle: 'Frame around your profile photo.',
          child: Wrap(
            spacing: 12,
            runSpacing: 14,
            children: kNgmyBioRingStyles.map((ring) => _ringChip(t, ring)).toList(),
          ),
        ),
      ],
    );
  }

  Widget _ringChip(NgmyHubTheme t, NgmyBioRingStyle ring) {
    final sel = _doc.ringStyleId == ring.id;
    return GestureDetector(
      onTap: () => setState(() => _doc.ringStyleId = ring.id),
      child: Column(
        children: [
          Container(
            width: 52,
            height: 52,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: sel ? _kBioAccent : Colors.transparent, width: 2.5),
              boxShadow: sel ? [BoxShadow(color: _kBioAccent.withValues(alpha: 0.2), blurRadius: 8)] : null,
            ),
            padding: const EdgeInsets.all(2),
            child: Container(
              decoration: ring.buildRing(46),
              padding: const EdgeInsets.all(3),
              child: const CircleAvatar(backgroundColor: Color(0xFFE5E7EB), child: Icon(Icons.person, size: 14)),
            ),
          ),
          const SizedBox(height: 4),
          SizedBox(
            width: 56,
            child: Text(ring.label, style: TextStyle(fontSize: 9, fontWeight: sel ? FontWeight.w900 : FontWeight.w500, color: sel ? _kBioAccent : t.subtitle), textAlign: TextAlign.center, maxLines: 2),
          ),
        ],
      ),
    );
  }

  Widget _socialTab(NgmyHubTheme t) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        _sectionCard(
          t,
          title: 'Social icons',
          subtitle: 'Optional — small circles at the bottom of your bio page.',
          child: Column(
            children: [
              NgmyModernField(controller: _socialInstagramC, label: 'Instagram', hint: 'https://instagram.com/you', icon: Icons.camera_alt_outlined, accent: _kBioAccent),
              const SizedBox(height: 10),
              NgmyModernField(controller: _socialFacebookC, label: 'Facebook', hint: 'https://facebook.com/you', icon: Icons.facebook_outlined, accent: _kBioAccent),
              const SizedBox(height: 10),
              NgmyModernField(controller: _socialYoutubeC, label: 'YouTube', hint: 'https://youtube.com/@you', icon: Icons.play_circle_outline_rounded, accent: _kBioAccent),
              const SizedBox(height: 10),
              NgmyModernField(controller: _socialWebsiteC, label: 'Website', hint: 'https://yoursite.com', icon: Icons.language_rounded, accent: _kBioAccent),
            ],
          ),
        ),
      ],
    );
  }

  Widget _qrTab(NgmyHubTheme t, String qrUrl) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        _sectionCard(
          t,
          title: 'QR code',
          subtitle: 'Share your bio offline — scan to open your page.',
          child: Column(
            children: [
              Center(
                child: NgmyBioQrWidget(data: qrUrl, captureKey: _qrCaptureKey),
              ),
              const SizedBox(height: 16),
              SizedBox(
                width: double.infinity,
                child: FilledButton.icon(
                  onPressed: () async {
                    final bytes = await NgmyMenuQrWidget.capturePng(_qrCaptureKey);
                    if (bytes == null) return;
                    await downloadNgmyQrImage(bytes, '${_doc.slug.isEmpty ? 'bio' : _doc.slug}_qr.png');
                  },
                  icon: const Icon(Icons.download_rounded),
                  label: const Text('Download QR'),
                  style: FilledButton.styleFrom(backgroundColor: _kBioAccent),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
