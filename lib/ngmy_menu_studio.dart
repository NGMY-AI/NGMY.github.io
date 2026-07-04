import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_hub_form_ui.dart';
import 'ngmy_menu_models.dart';
import 'ngmy_menu_publish_registry.dart';
import 'ngmy_menu_qr.dart';
import 'ngmy_menu_renderer.dart';
import 'ngmy_menu_storage.dart';
import 'ngmy_menu_templates.dart';
import 'ngmy_menu_urls.dart';
import 'ngmy_qr_download.dart';

Future<void> showNgmyMenuStudioDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Menu Studio',
    barrierColor: Colors.black.withValues(alpha: 0.88),
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (_, __, ___) => _NgmyMenuStudio(userEmail: userEmail),
    transitionBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
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
  final _qrCaptureKey = GlobalKey();

  final _nameC = TextEditingController();
  final _taglineC = TextEditingController();
  final _slugC = TextEditingController();
  final _centerLabelC = TextEditingController();

  @override
  void initState() {
    super.initState();
    _reload();
  }

  @override
  void dispose() {
    _nameC.dispose();
    _taglineC.dispose();
    _slugC.dispose();
    _centerLabelC.dispose();
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
      _bindEditors(doc);
    });
  }

  void _openMenu(NgmyMenuDocument doc) {
    setState(() {
      _editing = doc.copy();
      _bindEditors(_editing!);
    });
  }

  void _bindEditors(NgmyMenuDocument doc) {
    _nameC.text = doc.restaurantName;
    _taglineC.text = doc.tagline;
    _slugC.text = doc.slug;
    _centerLabelC.text = doc.qrStyle.centerLabel;
  }

  void _syncFromEditors() {
    final doc = _editing;
    if (doc == null) return;
    doc.restaurantName = _nameC.text.trim();
    doc.tagline = _taglineC.text.trim();
    doc.slug = _slugC.text.trim().toLowerCase();
    doc.qrStyle = doc.qrStyle.copyWith(centerLabel: _centerLabelC.text.trim());
  }

  Future<void> _save() async {
    final doc = _editing;
    if (doc == null) return;
    _syncFromEditors();
    await saveNgmyMenu(userEmail: widget.userEmail, doc: doc);
    await _reload();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Menu saved')));
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
        content: SelectableText(
          '${doc.publicUrl}\n\nAnyone can open this link — no login required.',
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
          FilledButton(
            onPressed: () {
              Clipboard.setData(ClipboardData(text: doc.publicUrl));
              Navigator.pop(ctx);
            },
            child: const Text('Copy link'),
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
      child: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            _topBar(t, title: 'Menu Studio', onBack: () => Navigator.pop(context)),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 8),
              child: Text(
                'Create restaurant menus · publish like a website · custom QR codes',
                style: TextStyle(color: t.subtitle, fontSize: 13),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: FilledButton.icon(
                onPressed: _newMenu,
                icon: const Icon(Icons.add_rounded),
                label: const Text('New menu'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFFB8860B),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
            ),
            const SizedBox(height: 12),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator())
                  : _menus.isEmpty
                      ? Center(child: Text('No menus yet', style: TextStyle(color: t.subtitle)))
                      : ListView.builder(
                          padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
                          itemCount: _menus.length,
                          itemBuilder: (_, i) {
                            final m = _menus[i];
                            return Card(
                              margin: const EdgeInsets.only(bottom: 10),
                              child: ListTile(
                                leading: CircleAvatar(
                                  backgroundColor: const Color(0xFFB8860B).withValues(alpha: 0.15),
                                  child: const Icon(Icons.restaurant_menu_rounded, color: Color(0xFFB8860B)),
                                ),
                                title: Text(
                                  m.restaurantName.trim().isEmpty ? 'Untitled menu' : m.restaurantName,
                                  style: const TextStyle(fontWeight: FontWeight.w800),
                                ),
                                subtitle: Text(m.isPublished ? m.publicUrl : 'Draft · ${m.templateId}'),
                                trailing: m.isPublished ? const Icon(Icons.public_rounded, size: 18) : null,
                                onTap: () => _openMenu(m),
                              ),
                            );
                          },
                        ),
            ),
          ],
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
      child: SafeArea(
        child: DefaultTabController(
          length: 3,
          child: Column(
            children: [
              _topBar(t, title: title, onBack: () => setState(() => _editing = null)),
              TabBar(
                labelColor: const Color(0xFFB8860B),
                unselectedLabelColor: t.subtitle,
                indicatorColor: const Color(0xFFB8860B),
                tabs: const [
                  Tab(text: 'Edit'),
                  Tab(text: 'Design'),
                  Tab(text: 'QR Code'),
                ],
              ),
              Expanded(
                child: TabBarView(
                  children: [
                    _editTab(t, doc),
                    _designTab(t, doc),
                    _qrTab(doc, qrUrl),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
                child: Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(onPressed: _save, child: const Text('Save')),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: FilledButton(
                        onPressed: _publishing ? null : _publish,
                        style: FilledButton.styleFrom(backgroundColor: const Color(0xFFB8860B)),
                        child: _publishing
                            ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                            : const Text('Publish'),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _editTab(NgmyHubTheme t, NgmyMenuDocument doc) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        TextField(
          controller: _nameC,
          decoration: const InputDecoration(
            labelText: 'Restaurant name',
            hintText: 'Enter your restaurant name',
            border: OutlineInputBorder(),
          ),
          onChanged: (_) => setState(() {}),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: _taglineC,
          decoration: const InputDecoration(labelText: 'Tagline', border: OutlineInputBorder()),
          onChanged: (_) => setState(() {}),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: _slugC,
          decoration: const InputDecoration(
            labelText: 'Link slug (optional)',
            hintText: 'your-restaurant-name',
            border: OutlineInputBorder(),
          ),
        ),
        const SizedBox(height: 16),
        Text('Menu sections', style: TextStyle(color: t.title, fontWeight: FontWeight.w900)),
        ...doc.sections.asMap().entries.map((e) => _sectionEditor(doc, e.key, e.value)),
        TextButton.icon(
          onPressed: () {
            setState(() => doc.sections.add(NgmyMenuSection(title: 'New Section', items: [NgmyMenuItem(name: 'Item', price: '\$0.00')])));
          },
          icon: const Icon(Icons.add_rounded),
          label: const Text('Add section'),
        ),
        const SizedBox(height: 16),
        Text('Preview', style: TextStyle(color: t.title, fontWeight: FontWeight.w900)),
        const SizedBox(height: 8),
        NgmyMenuPreview(document: doc, compact: true),
      ],
    );
  }

  Widget _sectionEditor(NgmyMenuDocument doc, int sIdx, NgmyMenuSection section) {
    return Card(
      margin: const EdgeInsets.only(top: 10),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Expanded(
                  child: TextFormField(
                    initialValue: section.title,
                    decoration: const InputDecoration(labelText: 'Section title', isDense: true),
                    onChanged: (v) => section.title = v,
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.delete_outline_rounded, color: Colors.red),
                  onPressed: () => setState(() => doc.sections.removeAt(sIdx)),
                ),
              ],
            ),
            ...section.items.asMap().entries.map((e) {
              final i = e.value;
              final iIdx = e.key;
              return Padding(
                padding: const EdgeInsets.only(top: 8),
                child: Row(
                  children: [
                    Expanded(
                      flex: 3,
                      child: TextFormField(
                        initialValue: i.name,
                        decoration: const InputDecoration(labelText: 'Item', isDense: true),
                        onChanged: (v) => i.name = v,
                      ),
                    ),
                    const SizedBox(width: 6),
                    Expanded(
                      flex: 2,
                      child: TextFormField(
                        initialValue: i.price,
                        decoration: const InputDecoration(labelText: 'Price', isDense: true),
                        onChanged: (v) => i.price = v,
                      ),
                    ),
                    IconButton(
                      icon: const Icon(Icons.close_rounded, size: 18),
                      onPressed: () => setState(() => section.items.removeAt(iIdx)),
                    ),
                  ],
                ),
              );
            }),
            TextButton(
              onPressed: () => setState(() => section.items.add(NgmyMenuItem(name: 'New item', price: '\$0.00'))),
              child: const Text('+ Add item'),
            ),
          ],
        ),
      ),
    );
  }

  Widget _designTab(NgmyHubTheme t, NgmyMenuDocument doc) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Text('Choose a template', style: TextStyle(color: t.title, fontWeight: FontWeight.w900)),
        const SizedBox(height: 10),
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 10, crossAxisSpacing: 10, childAspectRatio: 0.85),
          itemCount: kNgmyMenuTemplates.length,
          itemBuilder: (_, i) {
            final tmpl = kNgmyMenuTemplates[i];
            final sel = doc.templateId == tmpl.id;
            return GestureDetector(
              onTap: () => setState(() => doc.templateId = tmpl.id),
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: sel ? const Color(0xFFB8860B) : Colors.white24, width: sel ? 2.5 : 1),
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(12),
                  child: Stack(
                    fit: StackFit.expand,
                    children: [
                      NgmyMenuPreview(
                        document: NgmyMenuDocument(
                          id: 'preview',
                          restaurantName: tmpl.name,
                          tagline: tmpl.category,
                          templateId: tmpl.id,
                          sections: [
                            NgmyMenuSection(
                              title: 'Sample',
                              items: [NgmyMenuItem(name: 'Dish', price: '\$12')],
                            ),
                          ],
                        ),
                        compact: true,
                      ),
                      if (sel)
                        const Align(
                          alignment: Alignment.topRight,
                          child: Padding(
                            padding: EdgeInsets.all(6),
                            child: Icon(Icons.check_circle_rounded, color: Color(0xFFB8860B)),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ],
    );
  }

  Widget _qrTab(NgmyMenuDocument doc, String qrUrl) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        Center(
          child: NgmyMenuQrWidget(
            data: qrUrl,
            style: doc.qrStyle,
            large: true,
            captureKey: _qrCaptureKey,
          ),
        ),
        const SizedBox(height: 16),
        TextField(
          controller: _centerLabelC,
          decoration: const InputDecoration(labelText: 'Center logo text (e.g. MC)', border: OutlineInputBorder()),
          onChanged: (v) => setState(() => doc.qrStyle = doc.qrStyle.copyWith(centerLabel: v)),
        ),
        const SizedBox(height: 12),
        const Text('Corner style', style: TextStyle(fontWeight: FontWeight.w800)),
        Wrap(
          spacing: 8,
          children: kNgmyMenuQrCornerStyles.map((c) {
            final sel = doc.qrStyle.cornerStyle == c['id'];
            return ChoiceChip(
              label: Text(c['label']!),
              selected: sel,
              onSelected: (_) => setState(() => doc.qrStyle = doc.qrStyle.copyWith(cornerStyle: c['id'])),
            );
          }).toList(),
        ),
        const SizedBox(height: 12),
        const Text('Color presets', style: TextStyle(fontWeight: FontWeight.w800)),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: kNgmyMenuQrPresets.map((p) {
            return ActionChip(
              label: Text(p['label']!),
              onPressed: () => setState(() {
                doc.qrStyle = doc.qrStyle.copyWith(
                  foreground: int.parse(p['fg']!),
                  background: int.parse(p['bg']!),
                  accent: int.parse(p['accent']!),
                );
              }),
            );
          }).toList(),
        ),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(child: _shapeChip('Eyes: Circle', doc.qrStyle.eyeShape == 'circle', () => doc.qrStyle.copyWith(eyeShape: 'circle'))),
            const SizedBox(width: 8),
            Expanded(child: _shapeChip('Eyes: Square', doc.qrStyle.eyeShape == 'square', () => doc.qrStyle.copyWith(eyeShape: 'square'))),
          ],
        ),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _shapeChip('Dots: Circle', doc.qrStyle.moduleShape == 'circle', () => doc.qrStyle.copyWith(moduleShape: 'circle'))),
            const SizedBox(width: 8),
            Expanded(child: _shapeChip('Dots: Square', doc.qrStyle.moduleShape == 'square', () => doc.qrStyle.copyWith(moduleShape: 'square'))),
          ],
        ),
        const SizedBox(height: 16),
        Row(
          children: [
            Expanded(
              child: OutlinedButton.icon(
                onPressed: _downloadQr,
                icon: const Icon(Icons.download_rounded),
                label: const Text('Save QR PNG'),
              ),
            ),
            if (doc.publicUrl.isNotEmpty) ...[
              const SizedBox(width: 10),
              Expanded(
                child: FilledButton.icon(
                  onPressed: () => launchUrl(Uri.parse(doc.publicUrl), mode: LaunchMode.externalApplication),
                  icon: const Icon(Icons.open_in_new_rounded),
                  label: const Text('Open menu'),
                ),
              ),
            ],
          ],
        ),
      ],
    );
  }

  Widget _shapeChip(String label, bool selected, NgmyMenuQrStyle Function() apply) {
    return FilterChip(
      label: Text(label, style: const TextStyle(fontSize: 11)),
      selected: selected,
      onSelected: (_) => setState(() => _editing!.qrStyle = apply()),
    );
  }

  Widget _topBar(NgmyHubTheme t, {required String title, required VoidCallback onBack}) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 4, 12, 4),
      child: Row(
        children: [
          IconButton(onPressed: onBack, icon: Icon(Icons.arrow_back_rounded, color: t.title)),
          Expanded(child: Text(title, style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 18), overflow: TextOverflow.ellipsis)),
        ],
      ),
    );
  }
}
