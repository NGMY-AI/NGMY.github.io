import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';
import 'ngmy_bio_renderer.dart';
import 'ngmy_bio_storage.dart';
import 'ngmy_bio_templates.dart';
import 'ngmy_bio_urls.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_menu_qr.dart';
import 'ngmy_qr_download.dart';

const _kBioAccent = Color(0xFF2563EB);

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
              child: wide
                  ? Row(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Expanded(flex: 5, child: _tabBody(t, qrUrl)),
                        Expanded(
                          flex: 4,
                          child: Container(
                            margin: const EdgeInsets.all(12),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(20),
                              border: Border.all(color: t.border),
                              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 16)],
                            ),
                            clipBehavior: Clip.antiAlias,
                            child: NgmyBioPreview(document: _doc, compact: false),
                          ),
                        ),
                      ],
                    )
                  : Column(
                      children: [
                        SizedBox(height: 220, child: NgmyBioPreview(document: _doc, compact: true)),
                        Expanded(child: _tabBody(t, qrUrl)),
                      ],
                    ),
            ),
            _bottomBar(t),
          ],
        ),
      ),
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
            IconButton(onPressed: () => _copyLink(_doc.publicUrl), icon: Icon(Icons.copy_rounded, color: _kBioAccent)),
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
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
      decoration: BoxDecoration(color: t.scaffold, border: Border(top: BorderSide(color: t.border))),
      child: Row(
        children: [
          Expanded(
            child: OutlinedButton(onPressed: _save, child: const Text('Save')),
          ),
          const SizedBox(width: 10),
          Expanded(
            flex: 2,
            child: FilledButton(
              onPressed: _publishing ? null : _publish,
              style: FilledButton.styleFrom(backgroundColor: _kBioAccent),
              child: _publishing
                  ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : const Text('Publish Bio'),
            ),
          ),
        ],
      ),
    );
  }

  Widget _tabBody(NgmyHubTheme t, String qrUrl) {
    return Column(
      children: [
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          child: Row(
            children: [
              _pill('Profile', 0, t),
              _pill('Links', 1, t),
              _pill('Design', 2, t),
              _pill('Social', 3, t),
              _pill('QR', 4, t),
            ],
          ),
        ),
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

  Widget _pill(String label, int i, NgmyHubTheme t) {
    final sel = _tab == i;
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: FilterChip(
        label: Text(label, style: TextStyle(fontWeight: sel ? FontWeight.w800 : FontWeight.w600, fontSize: 12)),
        selected: sel,
        onSelected: (_) => setState(() => _tab = i),
        selectedColor: _kBioAccent.withValues(alpha: 0.2),
        checkmarkColor: _kBioAccent,
      ),
    );
  }

  Widget _profileTab(NgmyHubTheme t) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        NgmyModernField(controller: _nameC, label: 'Your name', hint: 'KB Pablo', icon: Icons.person_outline_rounded, accent: _kBioAccent),
        const SizedBox(height: 12),
        NgmyModernField(controller: _taglineC, label: 'Bio line', hint: 'MAKE MONEY ONLINE', icon: Icons.short_text_rounded, accent: _kBioAccent),
        const SizedBox(height: 12),
        NgmyModernField(controller: _slugC, label: 'Link slug', hint: 'my-bio', icon: Icons.link_rounded, accent: _kBioAccent),
        const SizedBox(height: 16),
        Text('PHOTOS', style: t.sectionLabel),
        const SizedBox(height: 8),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            _photoBtn('Profile photo', () => _pickImage((b) => _doc.avatarImageBase64 = b, maxSize: 800)),
            _photoBtn('Header banner', () => _pickImage((b) => _doc.headerImageBase64 = b)),
            _photoBtn('Background', () => _pickImage((b) => _doc.backgroundImageBase64 = b)),
          ],
        ),
      ],
    );
  }

  Widget _photoBtn(String label, VoidCallback onTap) {
    return OutlinedButton.icon(onPressed: onTap, icon: const Icon(Icons.add_photo_alternate_outlined, size: 18), label: Text(label));
  }

  Widget _linksTab(NgmyHubTheme t) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        ..._doc.links.asMap().entries.map((e) => _linkEditor(t, e.key, e.value)),
        OutlinedButton.icon(
          onPressed: () => setState(() => _doc.links.add(NgmyBioLink(id: ngmyBioNewId(), title: 'New link', url: ''))),
          icon: const Icon(Icons.add_rounded),
          label: const Text('Add link'),
        ),
      ],
    );
  }

  Widget _linkEditor(NgmyHubTheme t, int index, NgmyBioLink link) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: t.listItemBg, borderRadius: BorderRadius.circular(14), border: Border.all(color: t.border)),
      child: Column(
        children: [
          Row(
            children: [
              GestureDetector(
                onTap: () => _pickImage((b) => setState(() => link.imageBase64 = b), maxSize: 400),
                child: Container(
                  width: 48,
                  height: 48,
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), color: t.fieldFill, border: Border.all(color: t.border)),
                  clipBehavior: Clip.antiAlias,
                  child: link.imageBase64.isNotEmpty
                      ? Image.memory(base64Decode(link.imageBase64.split(',').last), fit: BoxFit.cover)
                      : Icon(Icons.image_outlined, color: t.muted),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: TextFormField(
                  initialValue: link.title,
                  decoration: InputDecoration(labelText: 'Link name', hintText: 'Target', isDense: true, border: OutlineInputBorder(borderRadius: BorderRadius.circular(10))),
                  onChanged: (v) => link.title = v,
                ),
              ),
              IconButton(onPressed: () => setState(() => _doc.links.removeAt(index)), icon: Icon(Icons.delete_outline_rounded, color: t.muted)),
            ],
          ),
          const SizedBox(height: 8),
          TextFormField(
            initialValue: link.url,
            decoration: InputDecoration(labelText: 'URL', hintText: 'https://...', isDense: true, border: OutlineInputBorder(borderRadius: BorderRadius.circular(10))),
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
        Text('APPEARANCE TEMPLATES', style: t.sectionLabel),
        const SizedBox(height: 8),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: kNgmyBioTemplates.map((tpl) {
            final sel = _doc.templateId == tpl.id;
            return GestureDetector(
              onTap: () => setState(() => _doc.templateId = tpl.id),
              child: Container(
                width: 100,
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: tpl.pageBg,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: sel ? _kBioAccent : tpl.cardBorder, width: sel ? 2.5 : 1),
                ),
                child: Column(
                  children: [
                    Container(height: 24, width: double.infinity, decoration: BoxDecoration(color: tpl.cardBg, borderRadius: BorderRadius.circular(4), border: Border.all(color: tpl.cardBorder))),
                    const SizedBox(height: 4),
                    Text(tpl.name, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: tpl.titleColor), textAlign: TextAlign.center),
                  ],
                ),
              ),
            );
          }).toList(),
        ),
        const SizedBox(height: 20),
        Text('PROFILE RING (optional)', style: t.sectionLabel),
        const SizedBox(height: 8),
        Wrap(
          spacing: 10,
          runSpacing: 10,
          children: kNgmyBioRingStyles.map((ring) {
            final sel = _doc.ringStyleId == ring.id;
            return GestureDetector(
              onTap: () => setState(() => _doc.ringStyleId = ring.id),
              child: Column(
                children: [
                  Container(
                    width: 48,
                    height: 48,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: sel ? _kBioAccent : Colors.transparent, width: 2),
                    ),
                    padding: const EdgeInsets.all(2),
                    child: Container(
                      decoration: ring.buildRing(40),
                      padding: const EdgeInsets.all(3),
                      child: const CircleAvatar(backgroundColor: Color(0xFFE5E7EB), child: Icon(Icons.person, size: 16)),
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(ring.label, style: TextStyle(fontSize: 9, fontWeight: sel ? FontWeight.w800 : FontWeight.w500, color: t.subtitle)),
                ],
              ),
            );
          }).toList(),
        ),
      ],
    );
  }

  Widget _socialTab(NgmyHubTheme t) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Text('Optional social icons appear as small circles at the bottom of your Bio.', style: TextStyle(color: t.subtitle, fontSize: 12)),
        const SizedBox(height: 12),
        NgmyModernField(controller: _socialInstagramC, label: 'Instagram', hint: 'https://instagram.com/you', icon: Icons.camera_alt_outlined, accent: _kBioAccent),
        NgmyModernField(controller: _socialFacebookC, label: 'Facebook', hint: 'https://facebook.com/you', icon: Icons.facebook_outlined, accent: _kBioAccent),
        NgmyModernField(controller: _socialYoutubeC, label: 'YouTube', hint: 'https://youtube.com/@you', icon: Icons.play_circle_outline_rounded, accent: _kBioAccent),
        NgmyModernField(controller: _socialWebsiteC, label: 'Website', hint: 'https://yoursite.com', icon: Icons.language_rounded, accent: _kBioAccent),
      ],
    );
  }

  Widget _qrTab(NgmyHubTheme t, String qrUrl) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Center(
          child: NgmyMenuQrDisplay(
            data: qrUrl,
            style: _doc.qrStyle,
            restaurantName: _doc.displayName,
            tagline: _doc.tagline,
            large: false,
            captureKey: _qrCaptureKey,
          ),
        ),
        const SizedBox(height: 16),
        FilledButton.icon(
          onPressed: () async {
            final bytes = await NgmyMenuQrWidget.capturePng(_qrCaptureKey);
            if (bytes == null) return;
            await downloadNgmyQrImage(bytes, '${_doc.slug.isEmpty ? 'bio' : _doc.slug}_qr.png');
          },
          icon: const Icon(Icons.download_rounded),
          label: const Text('Download QR'),
          style: FilledButton.styleFrom(backgroundColor: _kBioAccent),
        ),
      ],
    );
  }
}
