import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_hub_form_ui.dart';
import 'ngmy_menu_models.dart';
import 'ngmy_menu_publish_registry.dart';
import 'ngmy_menu_qr.dart';
import 'ngmy_menu_renderer.dart';
import 'ngmy_menu_storage.dart';
import 'ngmy_menu_templates.dart';
import 'ngmy_menu_urls.dart';
import 'ngmy_qr_download.dart';

const _kMenuAccent = Color(0xFFD4AF37);

Future<void> showNgmyMenuStudioDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Menu Studio',
    barrierColor: Colors.black.withValues(alpha: 0.92),
    transitionDuration: const Duration(milliseconds: 340),
    pageBuilder: (_, __, ___) => _NgmyMenuStudio(userEmail: userEmail),
    transitionBuilder: (_, anim, __, child) {
      final slide = Tween<Offset>(begin: const Offset(0, 0.03), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
      return FadeTransition(opacity: anim, child: SlideTransition(position: slide, child: child));
    },
  );
}

class _NgmyMenuStudio extends StatefulWidget {
  const _NgmyMenuStudio({required this.userEmail});

  final String userEmail;

  @override
  State<_NgmyMenuStudio> createState() => _NgmyMenuStudioState();
}

class _NgmyMenuStudioState extends State<_NgmyMenuStudio> {
  List<NgmyMenuDocument> _menus = [];
  bool _loading = true;
  NgmyMenuDocument? _editing;
  bool _publishing = false;
  int _tab = 0;
  final _qrCaptureKey = GlobalKey();

  final _nameC = TextEditingController();
  final _taglineC = TextEditingController();
  final _slugC = TextEditingController();
  final _centerLabelC = TextEditingController();
  final _cardPhoneC = TextEditingController();
  final _cardAddressC = TextEditingController();
  final _cardHoursC = TextEditingController();
  final _cardWebsiteC = TextEditingController();

  @override
  void initState() {
    super.initState();
    _reload();
  }

  @override
  void dispose() {
    _nameC.removeListener(_refreshPreview);
    _taglineC.removeListener(_refreshPreview);
    _nameC.dispose();
    _taglineC.dispose();
    _slugC.dispose();
    _centerLabelC.dispose();
    _cardPhoneC.dispose();
    _cardAddressC.dispose();
    _cardHoursC.dispose();
    _cardWebsiteC.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final list = await loadNgmyMenus(userEmail: widget.userEmail);
    if (!mounted) return;
    setState(() {
      _menus = list;
      _loading = false;
    });
  }

  void _newMenu() {
    final doc = ngmyMenuBlankDocument();
    setState(() {
      _editing = doc;
      _tab = 0;
      _bindEditors(doc);
    });
  }

  void _openMenu(NgmyMenuDocument doc) {
    setState(() {
      _editing = doc.copy();
      _tab = 0;
      _bindEditors(_editing!);
    });
  }

  void _bindEditors(NgmyMenuDocument doc) {
    _nameC.text = doc.restaurantName;
    _taglineC.text = doc.tagline;
    _slugC.text = doc.slug;
    _centerLabelC.text = doc.qrStyle.centerLabel;
    _cardPhoneC.text = doc.qrStyle.cardPhone;
    _cardAddressC.text = doc.qrStyle.cardAddress;
    _cardHoursC.text = doc.qrStyle.cardHours;
    _cardWebsiteC.text = doc.qrStyle.cardWebsite;
    _nameC.removeListener(_refreshPreview);
    _taglineC.removeListener(_refreshPreview);
    _nameC.addListener(_refreshPreview);
    _taglineC.addListener(_refreshPreview);
  }

  void _refreshPreview() {
    final doc = _editing;
    if (doc == null) return;
    doc.restaurantName = _nameC.text;
    doc.tagline = _taglineC.text;
    if (mounted) setState(() {});
  }

  void _syncFromEditors() {
    final doc = _editing;
    if (doc == null) return;
    doc.restaurantName = _nameC.text.trim();
    doc.tagline = _taglineC.text.trim();
    doc.slug = _slugC.text.trim().toLowerCase();
    doc.qrStyle = doc.qrStyle.copyWith(
      centerLabel: _centerLabelC.text.trim(),
      cardPhone: _cardPhoneC.text.trim(),
      cardAddress: _cardAddressC.text.trim(),
      cardHours: _cardHoursC.text.trim(),
      cardWebsite: _cardWebsiteC.text.trim(),
    );
  }

  Future<void> _pickCardLogo() async {
    final doc = _editing;
    if (doc == null) return;
    try {
      final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 512, maxHeight: 512, imageQuality: 88);
      if (file == null) return;
      final bytes = await file.readAsBytes();
      setState(() {
        doc.qrStyle = doc.qrStyle.copyWith(logoBase64: base64Encode(bytes), showCardLogo: true);
      });
    } catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not pick logo: $e')));
    }
  }

  void _removeCardLogo() {
    final doc = _editing;
    if (doc == null) return;
    setState(() => doc.qrStyle = doc.qrStyle.copyWith(logoBase64: '', showCardLogo: false));
  }

  Future<void> _copyLink(String url) async {
    if (url.trim().isEmpty) return;
    await Clipboard.setData(ClipboardData(text: url.trim()));
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Link copied: $url'), behavior: SnackBarBehavior.floating, duration: const Duration(seconds: 3)),
    );
  }

  Future<void> _save() async {
    final doc = _editing;
    if (doc == null) return;
    _syncFromEditors();
    await saveNgmyMenu(userEmail: widget.userEmail, doc: doc);
    await _reload();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Menu saved'), behavior: SnackBarBehavior.floating));
  }

  Future<void> _publish() async {
    final doc = _editing;
    if (doc == null) return;
    _syncFromEditors();
    if (doc.restaurantName.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Add a restaurant name first')));
      return;
    }

    setState(() => _publishing = true);
    final slugs = await NgmyMenuPublishRegistry.fetchAllSlugs();
    if (doc.slug.isEmpty) {
      doc.slug = ngmyBuildUniqueMenuSlug(doc.restaurantName, slugs);
      _slugC.text = doc.slug;
    }
    doc.publicUrl = ngmyMenuPublicUrlForSlug(doc.slug);
    doc.status = 'published';

    final err = await NgmyMenuPublishRegistry.publish(
      slug: doc.slug,
      data: doc.toJson(),
      createdByEmail: widget.userEmail,
    );
    await saveNgmyMenu(userEmail: widget.userEmail, doc: doc);
    if (!mounted) return;
    setState(() => _publishing = false);

    if (err != null) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(err)));
      return;
    }

    await showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Menu published!'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text('Anyone can open this link — no login required.'),
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Theme.of(ctx).colorScheme.surfaceContainerHighest,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: _kMenuAccent.withValues(alpha: 0.35)),
              ),
              child: SelectableText(doc.publicUrl, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13)),
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
          FilledButton.icon(
            onPressed: () async {
              await Clipboard.setData(ClipboardData(text: doc.publicUrl));
              if (ctx.mounted) Navigator.pop(ctx);
              if (mounted) {
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied to clipboard!')));
              }
            },
            icon: const Icon(Icons.copy_rounded, size: 18),
            label: const Text('Copy link'),
          ),
        ],
      ),
    );
  }

  Future<void> _downloadQr() async {
    final doc = _editing;
    if (doc == null || doc.publicUrl.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Publish first to get a QR link')));
      return;
    }
    final bytes = await NgmyMenuQrWidget.capturePng(_qrCaptureKey);
    if (bytes == null) return;
    await downloadNgmyQrImage(bytes, '${doc.slug}_menu_qr.png');
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    if (_editing != null) return _editor(t);
    return Material(
      color: t.scaffold,
      child: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: 240,
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [const Color(0xFF1A1410).withValues(alpha: t.isDark ? 0.95 : 0.15), t.scaffold],
                ),
              ),
            ),
          ),
          SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                _homeTopBar(t),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 4, 20, 16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Menu Studio', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 28, letterSpacing: -0.5)),
                      const SizedBox(height: 6),
                      Text(
                        'Luxury menus · publish online · custom QR codes',
                        style: TextStyle(color: t.subtitle, fontSize: 13, height: 1.35),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      onTap: _newMenu,
                      borderRadius: BorderRadius.circular(18),
                      child: Ink(
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(colors: [Color(0xFFD4AF37), Color(0xFFB8860B)]),
                          borderRadius: BorderRadius.circular(18),
                          boxShadow: [BoxShadow(color: _kMenuAccent.withValues(alpha: 0.4), blurRadius: 20, offset: const Offset(0, 8))],
                        ),
                        padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 20),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              padding: const EdgeInsets.all(8),
                              decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.15), shape: BoxShape.circle),
                              child: const Icon(Icons.add_rounded, color: Colors.black, size: 22),
                            ),
                            const SizedBox(width: 12),
                            const Text('Create new menu', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 16)),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 18),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Text('YOUR MENUS', style: t.sectionLabel),
                ),
                const SizedBox(height: 8),
                Expanded(
                  child: _loading
                      ? const Center(child: CircularProgressIndicator(color: _kMenuAccent))
                      : _menus.isEmpty
                          ? Center(
                              child: Padding(
                                padding: const EdgeInsets.all(32),
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(Icons.restaurant_menu_rounded, size: 56, color: t.muted),
                                    const SizedBox(height: 12),
                                    Text('No menus yet', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 16)),
                                    const SizedBox(height: 4),
                                    Text('Tap Create new menu to start', style: TextStyle(color: t.subtitle, fontSize: 13)),
                                  ],
                                ),
                              ),
                            )
                          : ListView.builder(
                              padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
                              itemCount: _menus.length,
                              itemBuilder: (_, i) => _menuListTile(t, _menus[i]),
                            ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _homeTopBar(NgmyHubTheme t) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 4, 8, 0),
      child: Row(
        children: [
          IconButton(
            onPressed: () => Navigator.pop(context),
            icon: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(color: t.iconButtonBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: t.border)),
              child: Icon(Icons.close_rounded, color: t.iconButtonIcon, size: 20),
            ),
          ),
        ],
      ),
    );
  }

  Widget _menuListTile(NgmyHubTheme t, NgmyMenuDocument m) {
    final name = m.restaurantName.trim().isEmpty ? 'Untitled menu' : m.restaurantName;
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: t.listItemBg,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: t.border),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: t.isDark ? 0.2 : 0.04), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => _openMenu(m),
          borderRadius: BorderRadius.circular(16),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(
              children: [
                Container(
                  width: 48,
                  height: 48,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(colors: [_kMenuAccent.withValues(alpha: 0.25), _kMenuAccent.withValues(alpha: 0.08)]),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: _kMenuAccent.withValues(alpha: 0.35)),
                  ),
                  child: const Icon(Icons.restaurant_menu_rounded, color: _kMenuAccent),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(name, style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 15)),
                      const SizedBox(height: 3),
                      Text(
                        m.isPublished ? 'Published · ${m.templateId.replaceAll('_', ' ')}' : 'Draft · ${m.templateId.replaceAll('_', ' ')}',
                        style: TextStyle(color: t.subtitle, fontSize: 11),
                      ),
                    ],
                  ),
                ),
                if (m.isPublished && m.publicUrl.isNotEmpty)
                  IconButton(
                    tooltip: 'Copy link',
                    onPressed: () => _copyLink(m.publicUrl),
                    icon: Icon(Icons.link_rounded, color: _kMenuAccent, size: 20),
                  ),
                Icon(Icons.chevron_right_rounded, color: t.muted),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _editor(NgmyHubTheme t) {
    final doc = _editing!;
    final title = doc.restaurantName.trim().isEmpty ? 'New menu' : doc.restaurantName.trim();
    final qrUrl = doc.publicUrl.isNotEmpty ? doc.publicUrl : ngmyMenuPublicUrlForSlug(doc.slug.isEmpty ? 'preview' : doc.slug);

    return Material(
      color: t.scaffold,
      child: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: 180,
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [_kMenuAccent.withValues(alpha: t.isDark ? 0.35 : 0.18), t.scaffold],
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                ),
              ),
            ),
          ),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(4, 4, 12, 0),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: () => setState(() => _editing = null),
                        icon: Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(color: t.iconButtonBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: t.border)),
                          child: Icon(Icons.arrow_back_ios_new_rounded, color: t.iconButtonIcon, size: 16),
                        ),
                      ),
                      Expanded(
                        child: Text(title, style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 18), overflow: TextOverflow.ellipsis),
                      ),
                      if (doc.publicUrl.isNotEmpty)
                        IconButton(
                          tooltip: 'Copy menu link',
                          onPressed: () => _copyLink(doc.publicUrl),
                          icon: Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              color: _kMenuAccent.withValues(alpha: 0.15),
                              borderRadius: BorderRadius.circular(12),
                              border: Border.all(color: _kMenuAccent.withValues(alpha: 0.4)),
                            ),
                            child: const Icon(Icons.copy_rounded, color: _kMenuAccent, size: 18),
                          ),
                        ),
                    ],
                  ),
                ),
                if (doc.publicUrl.isNotEmpty) _publishedLinkBar(t, doc.publicUrl),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                  child: Row(
                    children: [
                      _pillTab('Edit', 0, t),
                      const SizedBox(width: 8),
                      _pillTab('Design', 1, t),
                      const SizedBox(width: 8),
                      _pillTab('QR Code', 2, t),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                Expanded(
                  child: IndexedStack(
                    index: _tab,
                    children: [
                      _editTab(t, doc),
                      _designTab(t, doc),
                      _qrTab(t, doc, qrUrl),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
                  child: Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: _save,
                          style: OutlinedButton.styleFrom(minimumSize: const Size.fromHeight(50), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14))),
                          child: const Text('Save', style: TextStyle(fontWeight: FontWeight.w800)),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: FilledButton(
                          onPressed: _publishing ? null : _publish,
                          style: FilledButton.styleFrom(
                            backgroundColor: _kMenuAccent,
                            foregroundColor: Colors.black,
                            minimumSize: const Size.fromHeight(50),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: _publishing
                              ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.black))
                              : const Text('Publish', style: TextStyle(fontWeight: FontWeight.w900)),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _publishedLinkBar(NgmyHubTheme t, String url) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 4, 16, 0),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(
          color: _kMenuAccent.withValues(alpha: t.isDark ? 0.12 : 0.1),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: _kMenuAccent.withValues(alpha: 0.35)),
        ),
        child: Row(
          children: [
            const Icon(Icons.public_rounded, color: _kMenuAccent, size: 18),
            const SizedBox(width: 8),
            Expanded(
              child: Text(url, style: TextStyle(color: t.title, fontSize: 11, fontWeight: FontWeight.w700), overflow: TextOverflow.ellipsis),
            ),
            TextButton.icon(
              onPressed: () => _copyLink(url),
              icon: const Icon(Icons.copy_rounded, size: 16),
              label: const Text('Copy'),
              style: TextButton.styleFrom(foregroundColor: _kMenuAccent, visualDensity: VisualDensity.compact),
            ),
          ],
        ),
      ),
    );
  }

  Widget _pillTab(String label, int index, NgmyHubTheme t) {
    final sel = _tab == index;
    return Expanded(
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => setState(() => _tab = index),
          borderRadius: BorderRadius.circular(24),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            padding: const EdgeInsets.symmetric(vertical: 10),
            decoration: BoxDecoration(
              gradient: sel ? const LinearGradient(colors: [Color(0xFFD4AF37), Color(0xFFB8860B)]) : null,
              color: sel ? null : (t.isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF1F5F9)),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: sel ? _kMenuAccent : t.border),
            ),
            child: Text(
              label,
              textAlign: TextAlign.center,
              style: TextStyle(
                color: sel ? Colors.black : t.chipOffLabel,
                fontWeight: FontWeight.w800,
                fontSize: 12,
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget _editTab(NgmyHubTheme t, NgmyMenuDocument doc) {
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
      children: [
        _panel(
          t,
          title: 'Restaurant info',
          child: Column(
            children: [
              NgmyModernField(controller: _nameC, label: 'Restaurant name', hint: 'Your restaurant name', icon: Icons.storefront_rounded, accent: _kMenuAccent),
              NgmyModernField(controller: _taglineC, label: 'Tagline', hint: 'Fresh flavors · crafted daily', icon: Icons.format_quote_rounded, accent: _kMenuAccent),
              NgmyModernField(controller: _slugC, label: 'Link slug (optional)', hint: 'your-restaurant-name', icon: Icons.link_rounded, accent: _kMenuAccent),
            ],
          ),
        ),
        const SizedBox(height: 14),
        _panel(
          t,
          title: 'Menu sections',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              ...doc.sections.asMap().entries.map((e) => _sectionEditor(t, doc, e.key, e.value)),
              OutlinedButton.icon(
                onPressed: () {
                  setState(() => doc.sections.add(NgmyMenuSection(title: 'New Section', items: [NgmyMenuItem(name: '', description: '', ingredients: '', price: '')])));
                },
                icon: const Icon(Icons.add_rounded),
                label: const Text('Add section'),
                style: OutlinedButton.styleFrom(foregroundColor: _kMenuAccent, side: BorderSide(color: _kMenuAccent.withValues(alpha: 0.5))),
              ),
            ],
          ),
        ),
        const SizedBox(height: 14),
        _panel(
          t,
          title: 'Live preview',
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: NgmyMenuPreview(document: doc, compact: true),
          ),
        ),
      ],
    );
  }

  Widget _panel(NgmyHubTheme t, {required String title, required Widget child}) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: t.surface.withValues(alpha: t.isDark ? 0.85 : 1),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: t.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(title.toUpperCase(), style: t.sectionLabel.copyWith(color: _kMenuAccent.withValues(alpha: 0.9))),
          const SizedBox(height: 12),
          child,
        ],
      ),
    );
  }

  Widget _sectionEditor(NgmyHubTheme t, NgmyMenuDocument doc, int sIdx, NgmyMenuSection section) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: t.fieldFill,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: t.inputBorder),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(
                child: TextFormField(
                  initialValue: section.title,
                  style: TextStyle(color: t.title, fontWeight: FontWeight.w800),
                  decoration: InputDecoration(
                    labelText: 'Section title',
                    labelStyle: TextStyle(color: t.subtitle, fontSize: 11),
                    border: InputBorder.none,
                    isDense: true,
                  ),
                  onChanged: (v) => section.title = v,
                ),
              ),
              IconButton(
                icon: const Icon(Icons.delete_outline_rounded, color: Colors.redAccent, size: 20),
                onPressed: () => setState(() => doc.sections.removeAt(sIdx)),
              ),
            ],
          ),
          const Divider(height: 1),
          ...section.items.asMap().entries.map((e) => _itemEditor(t, section, e.key, e.value)),
          TextButton.icon(
            onPressed: () => setState(() => section.items.add(NgmyMenuItem(name: '', description: '', ingredients: '', price: ''))),
            icon: const Icon(Icons.add_rounded, size: 18),
            label: const Text('Add item'),
            style: TextButton.styleFrom(foregroundColor: _kMenuAccent),
          ),
        ],
      ),
    );
  }

  Widget _itemEditor(NgmyHubTheme t, NgmyMenuSection section, int iIdx, NgmyMenuItem item) {
    return Padding(
      padding: const EdgeInsets.only(top: 10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                flex: 3,
                child: TextFormField(
                  initialValue: item.name,
                  style: TextStyle(color: t.title, fontWeight: FontWeight.w700),
                  decoration: InputDecoration(
                    labelText: 'Item name',
                    labelStyle: TextStyle(color: t.subtitle, fontSize: 11),
                    filled: true,
                    fillColor: t.inputFill,
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: t.inputBorder)),
                    isDense: true,
                  ),
                  onChanged: (v) => item.name = v,
                ),
              ),
              const SizedBox(width: 8),
              SizedBox(
                width: 100,
                child: TextFormField(
                  initialValue: ngmyMenuPriceDigits(item.price),
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[\d.]'))],
                  style: TextStyle(color: t.title, fontWeight: FontWeight.w800),
                  decoration: InputDecoration(
                    labelText: 'Price',
                    labelStyle: TextStyle(color: t.subtitle, fontSize: 11),
                    prefixText: '\$ ',
                    prefixStyle: TextStyle(color: _kMenuAccent, fontWeight: FontWeight.w900, fontSize: 15),
                    filled: true,
                    fillColor: t.inputFill,
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: t.inputBorder)),
                    isDense: true,
                  ),
                  onChanged: (v) => item.price = ngmyMenuPriceDigits(v),
                ),
              ),
              IconButton(
                visualDensity: VisualDensity.compact,
                icon: Icon(Icons.close_rounded, size: 18, color: t.muted),
                onPressed: () => setState(() => section.items.removeAt(iIdx)),
              ),
            ],
          ),
          const SizedBox(height: 8),
          TextFormField(
            initialValue: item.description,
            minLines: 1,
            maxLines: 2,
            style: TextStyle(color: t.title, fontSize: 13),
            decoration: InputDecoration(
              labelText: 'Description',
              hintText: 'Crispy, served with house sauce…',
              labelStyle: TextStyle(color: t.subtitle, fontSize: 11),
              filled: true,
              fillColor: t.inputFill,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: t.inputBorder)),
              isDense: true,
            ),
            onChanged: (v) => item.description = v,
          ),
          const SizedBox(height: 8),
          TextFormField(
            initialValue: item.ingredients,
            minLines: 1,
            maxLines: 2,
            style: TextStyle(color: t.title, fontSize: 13),
            decoration: InputDecoration(
              labelText: 'Ingredients & mix-ins',
              hintText: 'Tomato, basil, mozzarella · add truffle oil',
              labelStyle: TextStyle(color: t.subtitle, fontSize: 11),
              filled: true,
              fillColor: t.inputFill,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide(color: t.inputBorder)),
              isDense: true,
            ),
            onChanged: (v) => item.ingredients = v,
          ),
        ],
      ),
    );
  }

  Widget _designTab(NgmyHubTheme t, NgmyMenuDocument doc) {
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
      children: [
        _panel(
          t,
          title: 'Guest page background',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('Background when customers open your menu link', style: TextStyle(color: t.subtitle, fontSize: 11)),
              const SizedBox(height: 10),
              _pageBackgroundPicker(t, doc),
            ],
          ),
        ),
        const SizedBox(height: 14),
        Text('Choose a luxurious template', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 16)),
        const SizedBox(height: 4),
        Text('Tap to preview — each design has its own layout style', style: TextStyle(color: t.subtitle, fontSize: 12)),
        const SizedBox(height: 14),
        ...kNgmyMenuTemplates.map((tmpl) {
          final sel = doc.templateId == tmpl.id;
          return Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () => setState(() => doc.templateId = tmpl.id),
                borderRadius: BorderRadius.circular(18),
                child: Ink(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(color: sel ? _kMenuAccent : t.border, width: sel ? 2.5 : 1),
                    boxShadow: sel ? [BoxShadow(color: _kMenuAccent.withValues(alpha: 0.25), blurRadius: 16, offset: const Offset(0, 6))] : null,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(14, 12, 14, 6),
                        child: Row(
                          children: [
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(tmpl.name, style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 14)),
                                  Text('${tmpl.category} · ${tmpl.subtitle}', style: TextStyle(color: t.subtitle, fontSize: 11)),
                                ],
                              ),
                            ),
                            if (sel) const Icon(Icons.check_circle_rounded, color: _kMenuAccent),
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(16),
                          child: SizedBox(
                            height: 160,
                            child: NgmyMenuPreview(
                              document: NgmyMenuDocument(
                                id: 'preview',
                                restaurantName: tmpl.name,
                                tagline: tmpl.subtitle,
                                templateId: tmpl.id,
                                sections: [
                                  NgmyMenuSection(
                                    title: 'Signature',
                                    items: [
                                      NgmyMenuItem(
                                        name: 'Chef\'s Special',
                                        description: 'House favorite',
                                        ingredients: 'Seasonal ingredients',
                                        price: '24.00',
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                              compact: true,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          );
        }),
      ],
    );
  }

  Widget _qrTab(NgmyHubTheme t, NgmyMenuDocument doc, String qrUrl) {
    final qs = doc.qrStyle;
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
      children: [
        _panel(
          t,
          title: 'QR display style',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  Expanded(child: _displayModeTile(t, doc, 'plain', Icons.qr_code_2_rounded, 'Plain QR')),
                  const SizedBox(width: 10),
                  Expanded(child: _displayModeTile(t, doc, 'card', Icons.badge_outlined, 'Card')),
                ],
              ),
              if (qs.displayMode == 'card') ...[
                const SizedBox(height: 14),
                Text('Card layout', style: TextStyle(color: t.subtitle, fontSize: 11, fontWeight: FontWeight.w700)),
                const SizedBox(height: 8),
                NgmyQrCardTemplatePicker(
                  selected: qs.cardTemplate,
                  onSelected: (id) => setState(() => doc.qrStyle = doc.qrStyle.copyWith(cardTemplate: id)),
                ),
              ],
            ],
          ),
        ),
        const SizedBox(height: 14),
        Center(
          child: NgmyMenuQrDisplay(
            data: qrUrl,
            style: qs,
            restaurantName: doc.restaurantName,
            tagline: doc.tagline,
            large: qs.displayMode == 'card',
            captureKey: _qrCaptureKey,
          ),
        ),
        const SizedBox(height: 14),
        _panel(
          t,
          title: 'Restaurant subtitle',
          child: NgmyModernField(
            controller: _taglineC,
            label: 'Line under restaurant name',
            hint: 'Fresh flavors · open daily · scan to order',
            icon: Icons.format_quote_rounded,
            accent: _kMenuAccent,
          ),
        ),
        const SizedBox(height: 14),
        if (qs.displayMode == 'card')
          _panel(
            t,
            title: 'Card info (optional)',
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  children: [
                    GestureDetector(
                      onTap: _pickCardLogo,
                      child: Container(
                        width: 72,
                        height: 72,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: t.fieldFill,
                          border: Border.all(color: _kMenuAccent.withValues(alpha: 0.5), width: 2),
                        ),
                        clipBehavior: Clip.antiAlias,
                        child: qs.logoBase64.isNotEmpty
                            ? _logoThumb(qs.logoBase64)
                            : Icon(Icons.add_a_photo_outlined, color: _kMenuAccent, size: 28),
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          FilledButton.icon(
                            onPressed: _pickCardLogo,
                            icon: const Icon(Icons.image_rounded, size: 18),
                            label: const Text('Restaurant logo'),
                            style: FilledButton.styleFrom(backgroundColor: _kMenuAccent, foregroundColor: Colors.black),
                          ),
                          if (qs.logoBase64.isNotEmpty)
                            TextButton(onPressed: _removeCardLogo, child: const Text('Remove logo')),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                _cardField(t, _cardPhoneC, Icons.phone_rounded, 'Phone', '555-123-4567', (v) => doc.qrStyle = doc.qrStyle.copyWith(cardPhone: v)),
                _cardField(t, _cardAddressC, Icons.location_on_outlined, 'Address', '123 Main St, City', (v) => doc.qrStyle = doc.qrStyle.copyWith(cardAddress: v)),
                _cardField(t, _cardHoursC, Icons.schedule_rounded, 'Hours', 'Mon–Sat 11am–10pm', (v) => doc.qrStyle = doc.qrStyle.copyWith(cardHours: v)),
                _cardField(t, _cardWebsiteC, Icons.language_rounded, 'Website', 'yourrestaurant.com', (v) => doc.qrStyle = doc.qrStyle.copyWith(cardWebsite: v)),
              ],
            ),
          ),
        if (qs.displayMode == 'card') const SizedBox(height: 14),
        _panel(
          t,
          title: 'Customize QR',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              TextField(
                controller: _centerLabelC,
                decoration: InputDecoration(
                  labelText: 'Center logo text (optional)',
                  hintText: 'MC',
                  filled: true,
                  fillColor: t.fieldFill,
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                ),
                onChanged: (v) => setState(() => doc.qrStyle = doc.qrStyle.copyWith(centerLabel: v)),
              ),
              const SizedBox(height: 14),
              Text('Corner style', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
              const SizedBox(height: 8),
              NgmyQrCornerIconPicker(
                selected: qs.cornerStyle,
                accent: _kMenuAccent,
                onSelected: (id) => setState(() => doc.qrStyle = doc.qrStyle.copyWith(cornerStyle: id)),
              ),
              const SizedBox(height: 14),
              Text('Color presets', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
              const SizedBox(height: 8),
              NgmyQrColorSwatchPicker(
                style: qs,
                onSelected: (p) => setState(() {
                  doc.qrStyle = doc.qrStyle.copyWith(foreground: p.fg, background: p.bg, accent: p.accent);
                }),
              ),
              const SizedBox(height: 14),
              Text('QR eye shape', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
              const SizedBox(height: 8),
              NgmyQrEyeIconPicker(
                options: kNgmyMenuQrEyeOptions,
                selected: qs.eyeShape,
                accent: _kMenuAccent,
                onSelected: (id) => setState(() => doc.qrStyle = doc.qrStyle.copyWith(eyeShape: id)),
              ),
              const SizedBox(height: 10),
              Text('Dot shape', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
              const SizedBox(height: 8),
              NgmyQrEyeIconPicker(
                options: kNgmyMenuQrModuleOptions,
                selected: qs.moduleShape,
                accent: _kMenuAccent,
                onSelected: (id) => setState(() => doc.qrStyle = doc.qrStyle.copyWith(moduleShape: id)),
              ),
            ],
          ),
        ),
        const SizedBox(height: 14),
        if (doc.publicUrl.isNotEmpty) _publishedLinkBar(t, doc.publicUrl),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(
              child: OutlinedButton.icon(
                onPressed: _downloadQr,
                icon: const Icon(Icons.download_rounded),
                label: const Text('Save PNG'),
              ),
            ),
            if (doc.publicUrl.isNotEmpty) ...[
              const SizedBox(width: 10),
              Expanded(
                child: FilledButton.icon(
                  onPressed: () => _copyLink(doc.publicUrl),
                  style: FilledButton.styleFrom(backgroundColor: _kMenuAccent, foregroundColor: Colors.black),
                  icon: const Icon(Icons.copy_rounded),
                  label: const Text('Copy link'),
                ),
              ),
            ],
          ],
        ),
      ],
    );
  }

  Widget _pageBackgroundPicker(NgmyHubTheme t, NgmyMenuDocument doc) {
    return Row(
      children: kNgmyMenuPageBackgrounds.map((opt) {
        final sel = doc.pageBackground == opt.id;
        return Expanded(
          child: Padding(
            padding: EdgeInsets.only(right: opt.id == kNgmyMenuPageBackgrounds.last.id ? 0 : 8),
            child: Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () => setState(() => doc.pageBackground = opt.id),
                borderRadius: BorderRadius.circular(14),
                child: Ink(
                  height: 52,
                  decoration: BoxDecoration(
                    color: opt.color,
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: sel ? _kMenuAccent : t.border, width: sel ? 2.5 : 1),
                    boxShadow: sel ? [BoxShadow(color: _kMenuAccent.withValues(alpha: 0.25), blurRadius: 8)] : null,
                  ),
                  child: Center(
                    child: Text(
                      opt.label,
                      style: TextStyle(
                        color: opt.id == 'white' ? const Color(0xFF334155) : const Color(0xFF475569),
                        fontWeight: sel ? FontWeight.w900 : FontWeight.w700,
                        fontSize: 12,
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }).toList(),
    );
  }

  Widget _displayModeTile(NgmyHubTheme t, NgmyMenuDocument doc, String mode, IconData icon, String label) {
    final sel = doc.qrStyle.displayMode == mode;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => setState(() => doc.qrStyle = doc.qrStyle.copyWith(displayMode: mode)),
        borderRadius: BorderRadius.circular(14),
        child: Ink(
          padding: const EdgeInsets.symmetric(vertical: 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            gradient: sel ? const LinearGradient(colors: [Color(0xFFD4AF37), Color(0xFFB8860B)]) : null,
            color: sel ? null : t.fieldFill,
            border: Border.all(color: sel ? _kMenuAccent : t.border),
          ),
          child: Column(
            children: [
              Icon(icon, color: sel ? Colors.black : t.subtitle, size: 28),
              const SizedBox(height: 6),
              Text(label, style: TextStyle(color: sel ? Colors.black : t.title, fontWeight: FontWeight.w800, fontSize: 12)),
            ],
          ),
        ),
      ),
    );
  }

  Widget _cardField(NgmyHubTheme t, TextEditingController c, IconData icon, String label, String hint, ValueChanged<String> onChanged) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: TextField(
        controller: c,
        decoration: InputDecoration(
          labelText: label,
          hintText: hint,
          prefixIcon: Icon(icon, color: _kMenuAccent, size: 20),
          filled: true,
          fillColor: t.fieldFill,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
        ),
        onChanged: (v) {
          onChanged(v);
          setState(() {});
        },
      ),
    );
  }

  Widget _logoThumb(String b64) {
    try {
      return Image.memory(base64Decode(b64), fit: BoxFit.cover);
    } catch (_) {
      return Icon(Icons.broken_image_outlined, color: _kMenuAccent);
    }
  }
}
