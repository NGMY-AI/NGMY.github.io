import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_bio_image_crop.dart';
import 'ngmy_bio_link_icons.dart';
import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';
import 'ngmy_bio_renderer.dart';
import 'ngmy_bio_storage.dart';
import 'ngmy_local_bio_publish_registry.dart';
import 'ngmy_local_bio_storage.dart';
import 'ngmy_local_bio_urls.dart';
import 'ngmy_bio_ring_frames.dart';
import 'ngmy_bio_templates.dart';
import 'ngmy_bio_urls.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_studio_backend.dart';
import 'ngmy_studio_payments.dart';
import 'ngmy_bio_qr.dart';
import 'ngmy_menu_qr.dart' show NgmyMenuQrWidget;
import 'ngmy_qr_download.dart';

const _kBioAccent = Color(0xFFB8860B);

class _LinkIconPick {
  const _LinkIconPick.clear() : codePoint = 0, brandId = '', clear = true;
  const _LinkIconPick.material(this.codePoint) : brandId = '', clear = false;
  const _LinkIconPick.brand(this.brandId) : codePoint = 0, clear = false;
  final bool clear;
  final int codePoint;
  final String brandId;
}

/// Bio page editor — opened from Menu Studio.
class NgmyBioStudioEditor extends StatefulWidget {
  const NgmyBioStudioEditor({
    super.key,
    required this.userEmail,
    this.isAdmin = false,
    this.existingBioIds = const [],
    required this.document,
    this.backend = NgmyStudioPublishBackend.cloud,
    required this.onBack,
    required this.onSaved,
  });

  final String userEmail;
  final bool isAdmin;
  final List<String> existingBioIds;
  final NgmyBioDocument document;
  final NgmyStudioPublishBackend backend;
  final VoidCallback onBack;
  final ValueChanged<NgmyBioDocument> onSaved;

  bool get _isLocal => backend == NgmyStudioPublishBackend.localDevice;

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
    _originalPublishedSlug = _doc.slug.trim();
    _anchorDisplayName = _doc.displayName.trim();
    _bind();
  }

  @override
  void didUpdateWidget(covariant NgmyBioStudioEditor oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Parent list reloads must not blank a name the user already has on screen.
    if (oldWidget.document.id != widget.document.id) {
      _doc = widget.document.copy();
      _anchorDisplayName = _doc.displayName.trim();
      _bind();
      return;
    }
    final incoming = widget.document;
    if (incoming.updatedAt.isAfter(_doc.updatedAt)) {
      final incomingName = incoming.displayName.trim();
      final keepName = incomingName.isNotEmpty
          ? incomingName
          : (_anchorDisplayName.isNotEmpty
                ? _anchorDisplayName
                : _doc.displayName.trim());
      _doc = incoming.copy();
      if (keepName.isNotEmpty) {
        _doc.displayName = keepName;
        _anchorDisplayName = keepName;
      }
      // Update non-name fields from parent without resetting the name field
      // caret if the user is mid-edit with the same text.
      _taglineC.text = _doc.tagline;
      _slugC.text = _doc.slug;
      if (_nameC.text.trim() != _doc.displayName.trim() &&
          _doc.displayName.trim().isNotEmpty &&
          _nameC.text.trim().isEmpty) {
        _nameC.text = _doc.displayName;
      }
      if (mounted) setState(() {});
    }
  }

  @override
  void dispose() {
    _nameC.dispose();
    _taglineC.dispose();
    _slugC.removeListener(_onSlugEdited);
    _slugC.dispose();
    _socialInstagramC.dispose();
    _socialFacebookC.dispose();
    _socialYoutubeC.dispose();
    _socialWebsiteC.dispose();
    super.dispose();
  }

  void _bind() {
    _nameC.text = _doc.displayName;
    if (_doc.displayName.trim().isNotEmpty) {
      _anchorDisplayName = _doc.displayName.trim();
    }
    _taglineC.text = _doc.tagline;
    final slug = ngmySanitizeBioSlug(_doc.slug);
    _doc.slug = slug;
    _slugC.text = slug;
    if (slug.isNotEmpty) {
      _doc.publicUrl = widget._isLocal
          ? ngmyLocalBioPublicUrlForSlug(slug)
          : ngmyBioPublicUrlForSlug(slug);
    }
    _socialInstagramC.text = _doc.socialLinks.instagram;
    _socialFacebookC.text = _doc.socialLinks.facebook;
    _socialYoutubeC.text = _doc.socialLinks.youtube;
    _socialWebsiteC.text = _doc.socialLinks.website;
    for (final c in [_nameC, _taglineC]) {
      c.removeListener(_previewRefresh);
      c.addListener(_previewRefresh);
    }
    _slugC.removeListener(_onSlugEdited);
    _slugC.addListener(_onSlugEdited);
  }

  void _onSlugEdited() {
    final cleaned = ngmySanitizeBioSlug(_slugC.text);
    if (cleaned != _slugC.text) {
      _slugC.value = TextEditingValue(
        text: cleaned,
        selection: TextSelection.collapsed(offset: cleaned.length),
      );
    }
    _doc.slug = cleaned;
    if (cleaned.isNotEmpty) {
      _doc.publicUrl = widget._isLocal
          ? ngmyLocalBioPublicUrlForSlug(cleaned)
          : ngmyBioPublicUrlForSlug(cleaned);
    }
    if (mounted) setState(() {});
  }

  /// Last non-empty display name the user saved or typed — never wiped by an
  /// empty field, reload race, or accidental Save.
  String _anchorDisplayName = '';
  String _originalPublishedSlug = '';

  void _previewRefresh() {
    final typed = _nameC.text;
    if (typed.trim().isNotEmpty) {
      _doc.displayName = typed;
      _anchorDisplayName = typed.trim();
    }
    // Empty field while editing must not blank the live title / preview name.
    _doc.tagline = _taglineC.text;
    if (mounted) setState(() {});
  }

  void _sync() {
    final typed = _nameC.text.trim();
    if (typed.isNotEmpty) {
      _doc.displayName = typed;
      _anchorDisplayName = typed;
    } else if (_anchorDisplayName.isNotEmpty) {
      // Keep the existing name unless the user typed a replacement.
      _doc.displayName = _anchorDisplayName;
      if (_nameC.text != _anchorDisplayName) {
        _nameC.value = TextEditingValue(
          text: _anchorDisplayName,
          selection: TextSelection.collapsed(offset: _anchorDisplayName.length),
        );
      }
    } else {
      _doc.displayName = '';
    }
    _doc.tagline = _taglineC.text.trim();
    _doc.slug = ngmySanitizeBioSlug(_slugC.text);
    if (_slugC.text != _doc.slug) {
      _slugC.value = TextEditingValue(
        text: _doc.slug,
        selection: TextSelection.collapsed(offset: _doc.slug.length),
      );
    }
    _doc.socialLinks = _doc.socialLinks.copyWith(
      instagram: _socialInstagramC.text.trim(),
      facebook: _socialFacebookC.text.trim(),
      youtube: _socialYoutubeC.text.trim(),
      website: _socialWebsiteC.text.trim(),
    );
  }

  Future<void> _save() async {
    _sync();
    final expectedName = _doc.displayName.trim();
    try {
      if (widget._isLocal) {
        await saveNgmyLocalBio(userEmail: widget.userEmail, doc: _doc);
      } else {
        await saveNgmyBio(userEmail: widget.userEmail, doc: _doc);
      }
      // Prove the write stuck — SharedPreferences/web quota failures used to
      // look like a successful Save while the display name never persisted.
      final stored = widget._isLocal
          ? await loadNgmyLocalBios(userEmail: widget.userEmail)
          : await loadNgmyBios(userEmail: widget.userEmail);
      NgmyBioDocument? found;
      for (final d in stored) {
        if (d.id == _doc.id) {
          found = d;
          break;
        }
      }
      if (found == null) {
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Could not save Bio. Please try again.'),
            backgroundColor: Colors.red,
          ),
        );
        return;
      }
      // If storage came back blank but we just saved a name, keep ours.
      if (found.displayName.trim().isEmpty && expectedName.isNotEmpty) {
        found.displayName = expectedName;
        if (widget._isLocal) {
          await saveNgmyLocalBio(userEmail: widget.userEmail, doc: found);
        } else {
          await saveNgmyBio(userEmail: widget.userEmail, doc: found);
        }
      } else if (found.displayName.trim() != expectedName &&
          expectedName.isNotEmpty) {
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Could not save display name. Try a smaller photo, then Save again.',
            ),
            backgroundColor: Colors.red,
          ),
        );
        return;
      }

      // Apply saved fields in place — no full rebind (avoids title blink / wipe).
      _doc.displayName = found.displayName.trim().isNotEmpty
          ? found.displayName
          : expectedName;
      _doc.tagline = found.tagline;
      _doc.slug = found.slug;
      _doc.socialLinks = found.socialLinks;
      _doc.status = found.status;
      _doc.publicUrl = found.publicUrl;
      _doc.updatedAt = found.updatedAt;
      _anchorDisplayName = _doc.displayName.trim();
      if (_nameC.text.trim() != _anchorDisplayName &&
          _anchorDisplayName.isNotEmpty) {
        _nameC.value = TextEditingValue(
          text: _anchorDisplayName,
          selection: TextSelection.collapsed(offset: _anchorDisplayName.length),
        );
      }
      if (mounted) setState(() {});
      widget.onSaved(_doc.copy());
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            expectedName.isEmpty ? 'Bio saved' : 'Bio saved — $expectedName',
          ),
        ),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Save failed: $e'),
          backgroundColor: Colors.red,
        ),
      );
    }
  }

  Future<void> _publish() async {
    _sync();
    if (_doc.displayName.trim().isEmpty) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('Add your name first')));
      return;
    }
    if (!widget._isLocal) {
      final allowed = await NgmyStudioPayments.ensureCanPublishBio(
        context: context,
        email: widget.userEmail,
        bioId: _doc.id,
        templateId: _doc.templateId,
        existingIdsOldestFirst: widget.existingBioIds,
        isAdmin: widget.isAdmin,
      );
      if (!allowed || !mounted) return;
    }
    setState(() => _publishing = true);
    final slugs = widget._isLocal
        ? await NgmyLocalBioPublishRegistry.fetchAllSlugs()
        : await NgmyBioPublishRegistry.fetchAllSlugs();
    _doc.slug = ngmySanitizeBioSlug(_slugC.text);
    if (_doc.slug.isEmpty) {
      _doc.slug = widget._isLocal
          ? ngmyBuildUniqueLocalBioSlug(_doc.displayName, slugs)
          : ngmyBuildUniqueBioSlug(_doc.displayName, slugs);
    }
    _slugC.text = _doc.slug;
    final String? err;
    if (widget._isLocal) {
      err = await NgmyLocalBioPublishRegistry.publish(
        slug: _doc.slug,
        data: _doc.toJson(),
      );
    } else {
      err = await NgmyBioPublishRegistry.publish(
        slug: _doc.slug,
        data: _doc.toJson(),
        createdByEmail: widget.userEmail,
      );
    }
    if (err == null) {
      final stale = _originalPublishedSlug.trim();
      if (stale.isNotEmpty &&
          stale.toLowerCase() != _doc.slug &&
          ngmySanitizeBioSlug(stale) != _doc.slug) {
        if (!widget._isLocal) {
          await NgmyBioPublishRegistry.unpublishSlug(
            stale,
            ownerEmail: widget.userEmail,
          );
        }
      }
      _originalPublishedSlug = _doc.slug;
      final base = widget._isLocal
          ? ngmyLocalBioPublicUrlForSlug(_doc.slug)
          : ngmyBioPublicUrlForSlug(_doc.slug);
      _doc.publicUrl = widget._isLocal
          ? NgmyLocalBioPublishRegistry.publicUrlFor(
              _doc.slug,
              _doc.toJson(),
              baseUrl: base,
            )
          : base;
      _doc.status = 'published';
    }
    if (widget._isLocal) {
      await saveNgmyLocalBio(userEmail: widget.userEmail, doc: _doc);
    } else {
      await saveNgmyBio(userEmail: widget.userEmail, doc: _doc);
    }
    setState(() => _publishing = false);
    widget.onSaved(_doc.copy());
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
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          widget._isLocal
              ? 'Published! Anyone can open this link.'
              : 'Published! Link copied: $url',
        ),
      ),
    );
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
                  constraints: const BoxConstraints(
                    maxWidth: 420,
                    maxHeight: 780,
                  ),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(24),
                    child: NgmyBioPreview(
                      document: _doc,
                      compact: false,
                      interactive: false,
                      fullBleed: true,
                    ),
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
                  style: FilledButton.styleFrom(
                    backgroundColor: _kBioAccent,
                    padding: const EdgeInsets.symmetric(
                      horizontal: 28,
                      vertical: 14,
                    ),
                  ),
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

  Future<bool> _ensureBioPhotoChangeAllowed({required bool isReplacement}) async {
    if (widget._isLocal) return true;
    if (!mounted) return false;
    return NgmyStudioPayments.ensureCanSelectBioAvatar(
      context: context,
      email: widget.userEmail,
      bioId: _doc.id,
      existingIdsOldestFirst: widget.existingBioIds,
      isReplacement: isReplacement,
      isAdmin: widget.isAdmin,
    );
  }

  Future<void> _recordBioPhotoBaselineIfNeeded() async {
    if (widget._isLocal || widget.isAdmin) return;
    await NgmyStudioPayments.recordBioAvatarBaseline(
      email: widget.userEmail,
      bioId: _doc.id,
    );
  }

  Future<void> _pickImage(
    void Function(String b64) setter, {
    int maxSize = 1200,
    bool isReplacement = false,
    bool gatePayment = false,
  }) async {
    try {
      final file = await ImagePicker().pickImage(
        source: ImageSource.gallery,
        maxWidth: maxSize.toDouble(),
        imageQuality: 88,
      );
      if (file == null || !mounted) return;
      final encoded = 'data:image/jpeg;base64,${base64Encode(await file.readAsBytes())}';
      if (!mounted) return;
      if (gatePayment) {
        final allowed = await _ensureBioPhotoChangeAllowed(isReplacement: isReplacement);
        if (!allowed || !mounted) return;
      }
      setState(() => setter(encoded));
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('Could not pick image: $e')));
      }
    }
  }

  Future<void> _pickAvatarImage() async {
    try {
      final file = await ImagePicker().pickImage(
        source: ImageSource.gallery,
        maxWidth: 800,
        imageQuality: 88,
      );
      if (file == null || !mounted) return;
      final encoded =
          'data:image/jpeg;base64,${base64Encode(await file.readAsBytes())}';
      if (!mounted) return;

      final allowed = await _ensureBioPhotoChangeAllowed(
        isReplacement: _doc.avatarImageBase64.isNotEmpty,
      );
      if (!allowed || !mounted) return;
      setState(() => _doc.avatarImageBase64 = encoded);
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('Could not pick image: $e')));
      }
    }
  }

  Future<void> _clearAvatarImage() async {
    if (_doc.avatarImageBase64.isEmpty) return;
    await _recordBioPhotoBaselineIfNeeded();
    if (mounted) setState(() => _doc.avatarImageBase64 = '');
  }

  Future<void> _pickHeaderBanner() async {
    final url = await ngmyBioPickBannerImage(context);
    if (url == null || !mounted) return;
    final allowed = await _ensureBioPhotoChangeAllowed(
      isReplacement: _doc.headerImageBase64.isNotEmpty,
    );
    if (!allowed || !mounted) return;
    setState(() => _doc.headerImageBase64 = url);
  }

  Future<void> _clearHeaderBanner() async {
    if (_doc.headerImageBase64.isEmpty) return;
    await _recordBioPhotoBaselineIfNeeded();
    if (mounted) setState(() => _doc.headerImageBase64 = '');
  }

  Future<void> _pickBackgroundImage() async {
    await _pickImage(
      (b) => _doc.backgroundImageBase64 = b,
      isReplacement: _doc.backgroundImageBase64.isNotEmpty,
      gatePayment: true,
    );
  }

  Future<void> _clearBackgroundImage() async {
    if (_doc.backgroundImageBase64.isEmpty) return;
    await _recordBioPhotoBaselineIfNeeded();
    if (mounted) setState(() => _doc.backgroundImageBase64 = '');
  }

  int _linkGalleryPhotoCount({String? excludingLinkId}) {
    var n = 0;
    for (final link in _doc.links) {
      if (excludingLinkId != null && link.id == excludingLinkId) continue;
      if (link.hasGalleryImage) n++;
    }
    return n;
  }

  bool get _linkGalleryUnlimited => widget.isAdmin;

  Future<void> _pickLinkGalleryImage(NgmyBioLink link) async {
    final replacing = link.hasGalleryImage;
    if (!replacing &&
        !_linkGalleryUnlimited &&
        _linkGalleryPhotoCount(excludingLinkId: link.id) >=
            kNgmyBioMaxLinkGalleryPhotos) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            'Only 2 gallery photos allowed on link cards. Use an icon for other links.',
          ),
        ),
      );
      return;
    }
    try {
      final file = await ImagePicker().pickImage(
        source: ImageSource.gallery,
        maxWidth: 400,
        imageQuality: 88,
      );
      if (file == null || !mounted) return;
      final encoded =
          'data:image/jpeg;base64,${base64Encode(await file.readAsBytes())}';
      if (!mounted) return;
      final allowed = await _ensureBioPhotoChangeAllowed(
        isReplacement: replacing,
      );
      if (!allowed || !mounted) return;
      setState(() {
        link.imageBase64 = encoded;
        link.iconCodePoint = 0;
        link.iconAsset = '';
      });
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('Could not pick image: $e')));
      }
    }
  }

  Future<void> _clearLinkGalleryImage(NgmyBioLink link) async {
    if (!link.hasGalleryImage) return;
    await _recordBioPhotoBaselineIfNeeded();
    if (mounted) setState(() => link.imageBase64 = '');
  }

  Future<void> _openLinkIconPicker(NgmyBioLink link) async {
    const gridDelegate = SliverGridDelegateWithFixedCrossAxisCount(
      crossAxisCount: 4,
      mainAxisSpacing: 8,
      crossAxisSpacing: 8,
      childAspectRatio: 0.88,
    );
    Widget tile({
      required bool selected,
      required VoidCallback onTap,
      required Widget glyph,
      required String label,
    }) {
      final t = NgmyHubTheme.of(context);
      return InkWell(
        borderRadius: BorderRadius.circular(14),
        onTap: onTap,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            color: selected ? _kBioAccent.withValues(alpha: 0.16) : t.fieldFill,
            border: Border.all(
              color: selected ? _kBioAccent : t.border,
              width: selected ? 1.6 : 1,
            ),
          ),
          padding: const EdgeInsets.all(8),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              glyph,
              const SizedBox(height: 6),
              Text(
                label,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.w700,
                  color: t.muted,
                  height: 1.15,
                ),
              ),
            ],
          ),
        ),
      );
    }

    final picked = await showModalBottomSheet<_LinkIconPick>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        final t = NgmyHubTheme.of(ctx);
        return DraggableScrollableSheet(
          initialChildSize: 0.72,
          minChildSize: 0.45,
          maxChildSize: 0.92,
          builder: (_, scrollController) {
            return Container(
              decoration: BoxDecoration(
                color: t.scaffold,
                borderRadius: const BorderRadius.vertical(
                  top: Radius.circular(22),
                ),
                border: Border.all(color: t.border),
              ),
              child: Column(
                children: [
                  const SizedBox(height: 10),
                  Container(
                    width: 40,
                    height: 4,
                    decoration: BoxDecoration(
                      color: t.muted.withValues(alpha: 0.45),
                      borderRadius: BorderRadius.circular(999),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
                    child: Row(
                      children: [
                        const Expanded(
                          child: Text(
                            'Choose a link icon',
                            style: TextStyle(
                              fontWeight: FontWeight.w900,
                              fontSize: 17,
                            ),
                          ),
                        ),
                        if (link.hasIcon)
                          TextButton(
                            onPressed: () => Navigator.pop(ctx, const _LinkIconPick.clear()),
                            child: const Text('Clear'),
                          ),
                        IconButton(
                          onPressed: () => Navigator.pop(ctx),
                          icon: const Icon(Icons.close_rounded),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
                    child: Text(
                      widget.isAdmin
                          ? 'Icons are free. Admin can add a gallery photo on every link.'
                          : 'Icons are free. Gallery photos are limited to '
                              '$kNgmyBioMaxLinkGalleryPhotos per Bio.',
                      style: TextStyle(color: t.muted, fontSize: 12.5),
                    ),
                  ),
                  Expanded(
                    child: CustomScrollView(
                      controller: scrollController,
                      slivers: [
                        SliverPadding(
                          padding: const EdgeInsets.fromLTRB(12, 4, 12, 8),
                          sliver: SliverGrid(
                            gridDelegate: gridDelegate,
                            delegate: SliverChildBuilderDelegate(
                              (_, i) {
                                final choice = kNgmyBioLinkIcons[i];
                                final selected = link.iconCodePoint == choice.codePoint &&
                                    !link.hasGalleryImage &&
                                    !link.hasBrandIcon;
                                return tile(
                                  selected: selected,
                                  onTap: () => Navigator.pop(
                                    ctx,
                                    _LinkIconPick.material(choice.codePoint),
                                  ),
                                  glyph: Icon(
                                    choice.icon,
                                    color: selected ? _kBioAccent : t.title,
                                    size: 26,
                                  ),
                                  label: choice.label,
                                );
                              },
                              childCount: kNgmyBioLinkIcons.length,
                            ),
                          ),
                        ),
                        SliverToBoxAdapter(
                          child: Padding(
                            padding: const EdgeInsets.fromLTRB(16, 10, 16, 6),
                            child: Text(
                              'Picture icons',
                              style: TextStyle(
                                fontWeight: FontWeight.w900,
                                fontSize: 13,
                                color: t.title,
                              ),
                            ),
                          ),
                        ),
                        SliverPadding(
                          padding: const EdgeInsets.fromLTRB(12, 4, 12, 28),
                          sliver: SliverGrid(
                            gridDelegate: gridDelegate,
                            delegate: SliverChildBuilderDelegate(
                              (_, i) {
                                final brand = kNgmyBioBrandLinkIcons[i];
                                final selected = link.iconAsset == brand.id &&
                                    !link.hasGalleryImage;
                                return tile(
                                  selected: selected,
                                  onTap: () => Navigator.pop(
                                    ctx,
                                    _LinkIconPick.brand(brand.id),
                                  ),
                                  glyph: ngmyBioCircularBrandIcon(brand.asset, size: 36),
                                  label: brand.label,
                                );
                              },
                              childCount: kNgmyBioBrandLinkIcons.length,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
    if (picked == null || !mounted) return;
    if (picked.clear) {
      setState(() {
        link.iconCodePoint = 0;
        link.iconAsset = '';
      });
      return;
    }
    if (link.hasGalleryImage) {
      await _recordBioPhotoBaselineIfNeeded();
    }
    if (!mounted) return;
    setState(() {
      link.imageBase64 = '';
      if (picked.brandId.isNotEmpty) {
        link.iconAsset = picked.brandId;
        link.iconCodePoint = 0;
      } else {
        link.iconCodePoint = picked.codePoint;
        link.iconAsset = '';
      }
    });
  }

  Future<void> _openLinkRingPicker(NgmyBioLink link) async {
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        final t = NgmyHubTheme.of(ctx);
        return DraggableScrollableSheet(
          initialChildSize: 0.7,
          minChildSize: 0.45,
          maxChildSize: 0.92,
          builder: (_, scrollController) {
            return Container(
              decoration: BoxDecoration(
                color: t.scaffold,
                borderRadius: const BorderRadius.vertical(top: Radius.circular(22)),
                border: Border.all(color: t.border),
              ),
              child: Column(
                children: [
                  const SizedBox(height: 10),
                  Container(
                    width: 40,
                    height: 4,
                    decoration: BoxDecoration(
                      color: t.muted.withValues(alpha: 0.45),
                      borderRadius: BorderRadius.circular(999),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
                    child: Row(
                      children: [
                        const Expanded(
                          child: Text(
                            'Link picture ring',
                            style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17),
                          ),
                        ),
                        IconButton(
                          onPressed: () => Navigator.pop(ctx),
                          icon: const Icon(Icons.close_rounded),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
                    child: Text(
                      'Same rings as your profile photo. The link picture stays a circle.',
                      style: TextStyle(color: t.muted, fontSize: 12.5),
                    ),
                  ),
                  Expanded(
                    child: GridView.builder(
                      controller: scrollController,
                      padding: const EdgeInsets.fromLTRB(12, 4, 12, 24),
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 4,
                        mainAxisSpacing: 10,
                        crossAxisSpacing: 8,
                        childAspectRatio: 0.78,
                      ),
                      itemCount: kNgmyBioRingStyles.length,
                      itemBuilder: (_, i) {
                        final ring = kNgmyBioRingStyles[i];
                        final selected = link.ringStyleId == ring.id;
                        return InkWell(
                          borderRadius: BorderRadius.circular(14),
                          onTap: () {
                            setState(() => link.ringStyleId = ring.id);
                            Navigator.pop(ctx);
                          },
                          child: Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(14),
                              color: selected ? _kBioAccent.withValues(alpha: 0.16) : t.fieldFill,
                              border: Border.all(
                                color: selected ? _kBioAccent : t.border,
                                width: selected ? 1.6 : 1,
                              ),
                            ),
                            padding: const EdgeInsets.all(6),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                NgmyBioRingFrame(
                                  ringId: ring.id,
                                  size: 28,
                                  accent: ring.auraColor ?? _kBioAccent,
                                  child: const CircleAvatar(
                                    radius: 14,
                                    backgroundColor: Color(0xFFE5E7EB),
                                    child: Icon(Icons.link_rounded, size: 14),
                                  ),
                                ),
                                const SizedBox(height: 4),
                                Text(
                                  ring.label,
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontSize: 9,
                                    fontWeight: FontWeight.w800,
                                    color: selected ? _kBioAccent : t.subtitle,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final qrUrl = _doc.publicUrl.isNotEmpty
        ? _doc.publicUrl
        : (widget._isLocal
              ? ngmyLocalBioPublicUrlForSlug(
                  _doc.slug.isEmpty ? 'preview' : _doc.slug,
                )
              : ngmyBioPublicUrlForSlug(
                  _doc.slug.isEmpty ? 'preview' : _doc.slug,
                ));
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
                    Text(
                      'Live preview',
                      style: TextStyle(
                        color: t.subtitle,
                        fontWeight: FontWeight.w700,
                        fontSize: 12,
                      ),
                    ),
                  ],
                ),
              ),
              Expanded(
                child: Container(
                  margin: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: t.border),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: 0.08),
                        blurRadius: 16,
                      ),
                    ],
                  ),
                  clipBehavior: Clip.antiAlias,
                  child: RepaintBoundary(
                    child: NgmyBioPreview(
                      document: _doc,
                      compact: false,
                      fullBleed: true,
                    ),
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
                  onTap: () =>
                      setState(() => _previewExpanded = !_previewExpanded),
                  child: Container(
                    height: collapsedH,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    decoration: BoxDecoration(
                      border: Border(bottom: BorderSide(color: t.border)),
                    ),
                    child: Row(
                      children: [
                        Icon(
                          _previewExpanded
                              ? Icons.keyboard_arrow_up_rounded
                              : Icons.keyboard_arrow_down_rounded,
                          color: _kBioAccent,
                        ),
                        const SizedBox(width: 8),
                        Text(
                          _previewExpanded ? 'Hide preview' : 'Show preview',
                          style: TextStyle(
                            color: t.title,
                            fontWeight: FontWeight.w800,
                            fontSize: 13,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              if (_previewExpanded)
                Expanded(
                  child: Container(
                    decoration: BoxDecoration(
                      border: Border(bottom: BorderSide(color: t.border)),
                    ),
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
          IconButton(
            onPressed: widget.onBack,
            icon: Icon(
              Icons.arrow_back_ios_new_rounded,
              color: t.iconButtonIcon,
              size: 18,
            ),
          ),
          Expanded(
            child: Text(
              () {
                final live = _doc.displayName.trim();
                if (live.isNotEmpty) return live;
                if (_anchorDisplayName.isNotEmpty) return _anchorDisplayName;
                return 'New Bio';
              }(),
              style: TextStyle(
                color: t.title,
                fontWeight: FontWeight.w900,
                fontSize: 16,
              ),
              overflow: TextOverflow.ellipsis,
            ),
          ),
          if (_doc.publicUrl.isNotEmpty)
            IconButton(
              onPressed: () => _copyLink(_doc.publicUrl),
              icon: const Icon(Icons.copy_rounded, color: _kBioAccent),
            ),
        ],
      ),
    );
  }

  Widget _linkBar(NgmyHubTheme t, String url) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
        decoration: BoxDecoration(
          color: _kBioAccent.withValues(alpha: 0.1),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: _kBioAccent.withValues(alpha: 0.3)),
        ),
        child: Row(
          children: [
            const Icon(Icons.link_rounded, color: _kBioAccent, size: 16),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                url,
                style: TextStyle(
                  color: t.title,
                  fontSize: 11,
                  fontWeight: FontWeight.w600,
                ),
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// Keep labels sharp by laying text out at its final size. FittedBox applies
  /// a fractional raster scale on narrow phones, which softens letter edges.
  static Widget _barLabel(String text) => Text(
    text,
    maxLines: 1,
    softWrap: false,
    overflow: TextOverflow.ellipsis,
    style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700),
  );

  Widget _bottomBar(NgmyHubTheme t) {
    // Publish gives up width to Preview so all three labels fit side by side.
    const compact = EdgeInsets.symmetric(horizontal: 6);
    const barSize = Size(0, 44);
    return Container(
      padding: const EdgeInsets.fromLTRB(12, 8, 12, 12),
      decoration: BoxDecoration(
        color: t.scaffold,
        border: Border(top: BorderSide(color: t.border)),
      ),
      child: Row(
        children: [
          Expanded(
            flex: 3,
            child: OutlinedButton(
              onPressed: _save,
              style: OutlinedButton.styleFrom(
                padding: compact,
                minimumSize: barSize,
              ),
              child: _barLabel('Save'),
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            flex: 5,
            child: OutlinedButton.icon(
              onPressed: _openFullPreview,
              icon: const Icon(Icons.visibility_outlined, size: 16),
              label: _barLabel('Preview'),
              style: OutlinedButton.styleFrom(
                foregroundColor: _kBioAccent,
                side: const BorderSide(color: _kBioAccent),
                padding: compact,
                minimumSize: barSize,
              ),
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            flex: 4,
            child: FilledButton(
              onPressed: _publishing ? null : _publish,
              style: FilledButton.styleFrom(
                backgroundColor: _kBioAccent,
                padding: compact,
                minimumSize: barSize,
              ),
              child: _publishing
                  ? const SizedBox(
                      width: 18,
                      height: 18,
                      child: CircularProgressIndicator(
                        strokeWidth: 2,
                        color: Colors.white,
                      ),
                    )
                  : _barLabel('Publish'),
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
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.04),
            blurRadius: 10,
            offset: const Offset(0, 2),
          ),
        ],
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
                  boxShadow: sel
                      ? [
                          BoxShadow(
                            color: _kBioAccent.withValues(alpha: 0.35),
                            blurRadius: 8,
                            offset: const Offset(0, 2),
                          ),
                        ]
                      : null,
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

  Widget _sectionCard(
    NgmyHubTheme t, {
    required String title,
    String? subtitle,
    required Widget child,
  }) {
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
          Text(
            title,
            style: TextStyle(
              color: t.title,
              fontWeight: FontWeight.w900,
              fontSize: 14,
            ),
          ),
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
              NgmyModernField(
                controller: _nameC,
                label: 'Display name',
                hint: kNgmyBioDefaultDisplayName,
                icon: Icons.person_outline_rounded,
                accent: _kBioAccent,
              ),
              const SizedBox(height: 12),
              NgmyModernField(
                controller: _taglineC,
                label: 'Bio line',
                hint: 'MAKE MONEY ONLINE',
                icon: Icons.short_text_rounded,
                accent: _kBioAccent,
              ),
              const SizedBox(height: 12),
              NgmyModernField(
                controller: _slugC,
                label: 'Custom link slug',
                hint: 'kbpabloq',
                icon: Icons.link_rounded,
                accent: _kBioAccent,
              ),
              const SizedBox(height: 6),
              Text(
                'Public link is ngmy.org/bio/ plus up to 10 letters. '
                'You can put 1–2 numbers in front. Do not paste Instagram or other website URLs here.',
                style: TextStyle(color: t.muted, fontSize: 12, height: 1.35, fontWeight: FontWeight.w500),
              ),
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
                  Icon(
                    Icons.photo_size_select_large_rounded,
                    size: 18,
                    color: t.muted,
                  ),
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
                  Text(
                    '${(_doc.profileScale * 100).round()}%',
                    style: TextStyle(
                      color: t.title,
                      fontWeight: FontWeight.w800,
                      fontSize: 12,
                    ),
                  ),
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
              _photoTile(
                t,
                label: 'Profile photo',
                hint: 'Shares photo changes with banner & background',
                hasImage: _doc.avatarImageBase64.isNotEmpty,
                onPick: _pickAvatarImage,
                onClear: _clearAvatarImage,
              ),
              const SizedBox(height: 10),
              _photoTile(
                t,
                label: 'Header banner',
                hint: 'Wide banner — counts as a photo change',
                hasImage: _doc.headerImageBase64.isNotEmpty,
                onPick: _pickHeaderBanner,
                onClear: _clearHeaderBanner,
              ),
              const SizedBox(height: 10),
              _photoTile(
                t,
                label: 'Page background',
                hint: 'Full-page backdrop — counts as a photo change',
                hasImage: _doc.backgroundImageBase64.isNotEmpty,
                onPick: _pickBackgroundImage,
                onClear: _clearBackgroundImage,
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _photoTile(
    NgmyHubTheme t, {
    required String label,
    required String hint,
    required bool hasImage,
    required VoidCallback onPick,
    required VoidCallback onClear,
  }) {
    return Material(
      color: t.fieldFill,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onPick,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: t.border),
          ),
          child: Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  color: _kBioAccent.withValues(alpha: 0.12),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: Icon(
                  hasImage
                      ? Icons.check_circle_rounded
                      : Icons.add_photo_alternate_outlined,
                  color: hasImage ? const Color(0xFF059669) : _kBioAccent,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      label,
                      style: TextStyle(
                        color: t.title,
                        fontWeight: FontWeight.w800,
                        fontSize: 13,
                      ),
                    ),
                    Text(
                      hint,
                      style: TextStyle(color: t.subtitle, fontSize: 11),
                    ),
                  ],
                ),
              ),
              if (hasImage)
                IconButton(
                  onPressed: onClear,
                  icon: Icon(Icons.close_rounded, size: 18, color: t.muted),
                  padding: EdgeInsets.zero,
                  constraints: const BoxConstraints(
                    minWidth: 32,
                    minHeight: 32,
                  ),
                ),
              Icon(Icons.chevron_right_rounded, color: t.muted, size: 20),
            ],
          ),
        ),
      ),
    );
  }

  void _moveLink(int index, int delta) {
    final next = index + delta;
    if (next < 0 || next >= _doc.links.length) return;
    setState(() {
      final item = _doc.links.removeAt(index);
      _doc.links.insert(next, item);
    });
  }

  Widget _linksTab(NgmyHubTheme t) {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        _sectionCard(
          t,
          title: 'Link cards',
          subtitle:
              'Photo, name, and URL. Use the arrows to pick which link shows first, second, and so on on your live page.',
          child: Column(
            children: [
              if (_doc.links.isEmpty)
                Container(
                  width: double.infinity,
                  margin: const EdgeInsets.only(bottom: 12),
                  padding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 22,
                  ),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    gradient: LinearGradient(
                      colors: [_kBioAccent.withValues(alpha: 0.10), t.scaffold],
                    ),
                    border: Border.all(
                      color: _kBioAccent.withValues(alpha: 0.28),
                    ),
                  ),
                  child: Column(
                    children: [
                      Container(
                        width: 52,
                        height: 52,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: _kBioAccent.withValues(alpha: 0.15),
                          border: Border.all(
                            color: _kBioAccent.withValues(alpha: 0.4),
                          ),
                        ),
                        child: const Icon(
                          Icons.add_link_rounded,
                          color: _kBioAccent,
                          size: 26,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        'No links yet',
                        style: TextStyle(
                          color: t.title,
                          fontWeight: FontWeight.w900,
                          fontSize: 15,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        'Add your store, socials, booking page, or anything guests should open.',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: t.subtitle,
                          fontSize: 12,
                          height: 1.35,
                        ),
                      ),
                    ],
                  ),
                ),
              ..._doc.links.asMap().entries.map(
                (e) => _linkEditor(t, e.key, e.value),
              ),
              const SizedBox(height: 6),
              SizedBox(
                width: double.infinity,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(14),
                    gradient: const LinearGradient(
                      colors: [Color(0xFFD4AF37), Color(0xFFB8860B)],
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: _kBioAccent.withValues(alpha: 0.28),
                        blurRadius: 12,
                        offset: const Offset(0, 4),
                      ),
                    ],
                  ),
                  child: Material(
                    color: Colors.transparent,
                    child: InkWell(
                      borderRadius: BorderRadius.circular(14),
                      onTap: () => setState(
                        () => _doc.links.add(
                          NgmyBioLink(
                            id: ngmyBioNewId(),
                            title: 'New link',
                            url: '',
                          ),
                        ),
                      ),
                      child: const Padding(
                        padding: EdgeInsets.symmetric(vertical: 14),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.add_rounded,
                              color: Colors.white,
                              size: 20,
                            ),
                            SizedBox(width: 8),
                            Text(
                              'Add link card',
                              style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w900,
                                fontSize: 14,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _linkEditor(NgmyHubTheme t, int index, NgmyBioLink link) {
    final hasImage = link.hasGalleryImage;
    final brandAsset = hasImage
        ? null
        : ngmyBioBrandAssetForLink(
            iconCodePoint: link.iconCodePoint,
            iconAsset: link.iconAsset,
          );
    final iconData = brandAsset != null
        ? null
        : ngmyBioLinkIconFromCodePoint(link.iconCodePoint);
    final hasUrl = link.url.trim().isNotEmpty;
    final galleryUsed = _linkGalleryPhotoCount();
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: t.isDark
              ? [const Color(0xFF1A1F2E), const Color(0xFF12161F)]
              : [Colors.white, const Color(0xFFFFFBF0)],
        ),
        border: Border.all(
          color: hasUrl ? _kBioAccent.withValues(alpha: 0.45) : t.border,
          width: 1.2,
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: t.isDark ? 0.28 : 0.06),
            blurRadius: 14,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 12, 8, 0),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 8,
                    vertical: 3,
                  ),
                  decoration: BoxDecoration(
                    color: _kBioAccent.withValues(alpha: 0.14),
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: Text(
                    'LINK ${index + 1}',
                    style: const TextStyle(
                      color: _kBioAccent,
                      fontWeight: FontWeight.w900,
                      fontSize: 10,
                      letterSpacing: 0.8,
                    ),
                  ),
                ),
                const SizedBox(width: 4),
                IconButton(
                  tooltip: 'Move up — show this link first',
                  visualDensity: VisualDensity.compact,
                  onPressed: index == 0 ? null : () => _moveLink(index, -1),
                  icon: Icon(
                    Icons.keyboard_arrow_up_rounded,
                    color: index == 0 ? t.muted.withValues(alpha: 0.35) : _kBioAccent,
                  ),
                ),
                IconButton(
                  tooltip: 'Move down',
                  visualDensity: VisualDensity.compact,
                  onPressed: index >= _doc.links.length - 1 ? null : () => _moveLink(index, 1),
                  icon: Icon(
                    Icons.keyboard_arrow_down_rounded,
                    color: index >= _doc.links.length - 1
                        ? t.muted.withValues(alpha: 0.35)
                        : _kBioAccent,
                  ),
                ),
                const Spacer(),
                IconButton(
                  tooltip: 'Link picture ring',
                  onPressed: () => _openLinkRingPicker(link),
                  icon: Icon(
                    Icons.radio_button_unchecked_rounded,
                    color: link.ringStyleId != 'none' ? _kBioAccent : t.muted,
                  ),
                ),
                IconButton(
                  tooltip: 'Remove link',
                  onPressed: () => setState(() => _doc.links.removeAt(index)),
                  icon: Icon(Icons.delete_outline_rounded, color: t.muted),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 0, 12, 6),
            child: Text(
              widget.isAdmin
                  ? 'Gallery photos on links: $galleryUsed  ·  No limit for admin  ·  Icons are free'
                  : 'Gallery photos on links: $galleryUsed / $kNgmyBioMaxLinkGalleryPhotos  ·  Icons are free',
              style: TextStyle(
                color: t.muted,
                fontSize: 11,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 4, 12, 14),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                GestureDetector(
                  onTap: () => _pickLinkGalleryImage(link),
                  onLongPress: hasImage
                      ? () => _clearLinkGalleryImage(link)
                      : null,
                  child: Stack(
                    children: [
                      NgmyBioRingFrame(
                        ringId: link.ringStyleId,
                        size: 72,
                        accent: ngmyBioRingById(link.ringStyleId).auraColor ?? _kBioAccent,
                        child: Container(
                          width: 72,
                          height: 72,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            gradient: LinearGradient(
                              colors: [
                                _kBioAccent.withValues(alpha: 0.18),
                                _kBioAccent.withValues(alpha: 0.05),
                              ],
                            ),
                            border: Border.all(
                              color: _kBioAccent.withValues(alpha: 0.4),
                              width: 1.3,
                            ),
                          ),
                          clipBehavior: Clip.antiAlias,
                          child: hasImage
                              ? ClipOval(
                                  child: Image.memory(
                                    base64Decode(link.imageBase64.split(',').last),
                                    fit: BoxFit.cover,
                                    width: 72,
                                    height: 72,
                                    filterQuality: FilterQuality.high,
                                  ),
                                )
                              : brandAsset != null
                                  ? ngmyBioCircularBrandIcon(brandAsset, size: 72)
                                  : iconData != null
                                  ? Icon(
                                      iconData,
                                      color: _kBioAccent,
                                      size: 32,
                                    )
                                  : Column(
                                      mainAxisAlignment: MainAxisAlignment.center,
                                      children: [
                                        Icon(
                                          Icons.add_photo_alternate_outlined,
                                          color: _kBioAccent.withValues(
                                            alpha: 0.85,
                                          ),
                                          size: 24,
                                        ),
                                        const SizedBox(height: 2),
                                        Text(
                                          'Photo',
                                          style: TextStyle(
                                            color: t.muted,
                                            fontSize: 9,
                                            fontWeight: FontWeight.w700,
                                          ),
                                        ),
                                      ],
                                    ),
                        ),
                      ),
                      Positioned(
                        right: 4,
                        bottom: 4,
                        child: Container(
                          padding: const EdgeInsets.all(4),
                          decoration: BoxDecoration(
                            color: Colors.black.withValues(alpha: 0.55),
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(
                            Icons.edit_rounded,
                            color: Colors.white,
                            size: 12,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 8),
                Column(
                  children: [
                    Tooltip(
                      message: 'Choose icon',
                      child: Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: () => _openLinkIconPicker(link),
                          borderRadius: BorderRadius.circular(14),
                          child: Container(
                            width: 44,
                            height: 72,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(14),
                              color: _kBioAccent.withValues(alpha: 0.12),
                              border: Border.all(
                                color: _kBioAccent.withValues(alpha: 0.4),
                              ),
                            ),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(
                                  Icons.apps_rounded,
                                  color: _kBioAccent,
                                  size: 22,
                                ),
                                const SizedBox(height: 4),
                                Text(
                                  'Icon',
                                  style: TextStyle(
                                    color: _kBioAccent.withValues(alpha: 0.95),
                                    fontSize: 9,
                                    fontWeight: FontWeight.w800,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    children: [
                      TextFormField(
                        initialValue: link.title,
                        style: TextStyle(
                          color: t.title,
                          fontWeight: FontWeight.w800,
                          fontSize: 15,
                        ),
                        decoration: InputDecoration(
                          labelText: 'Link name',
                          hintText: 'My store',
                          isDense: true,
                          filled: true,
                          fillColor: t.fieldFill,
                          prefixIcon: const Icon(
                            Icons.label_outline_rounded,
                            size: 18,
                            color: _kBioAccent,
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: BorderSide(color: t.border),
                          ),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: BorderSide(color: t.border),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: const BorderSide(
                              color: _kBioAccent,
                              width: 1.4,
                            ),
                          ),
                        ),
                        onChanged: (v) {
                          link.title = v;
                          setState(() {});
                        },
                      ),
                      const SizedBox(height: 8),
                      TextFormField(
                        initialValue: link.url,
                        style: TextStyle(color: t.title, fontSize: 13.5),
                        decoration: InputDecoration(
                          labelText: 'URL',
                          hintText: 'https://…',
                          isDense: true,
                          filled: true,
                          fillColor: t.fieldFill,
                          prefixIcon: Icon(
                            Icons.link_rounded,
                            size: 18,
                            color: hasUrl ? _kBioAccent : t.muted,
                          ),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: BorderSide(color: t.border),
                          ),
                          enabledBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: BorderSide(color: t.border),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(12),
                            borderSide: const BorderSide(
                              color: _kBioAccent,
                              width: 1.4,
                            ),
                          ),
                        ),
                        onChanged: (v) {
                          link.url = v;
                          setState(() {});
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          if (hasUrl || link.title.trim().isNotEmpty)
            Container(
              margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                color: t.isDark
                    ? Colors.white.withValues(alpha: 0.04)
                    : const Color(0xFFFFF8E7),
                border: Border.all(color: _kBioAccent.withValues(alpha: 0.22)),
              ),
              child: Row(
                children: [
                  Icon(Icons.visibility_outlined, size: 16, color: t.muted),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      link.title.trim().isEmpty
                          ? 'Untitled link'
                          : link.title.trim(),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        color: t.title,
                        fontWeight: FontWeight.w800,
                        fontSize: 13,
                      ),
                    ),
                  ),
                  if (hasUrl)
                    Text(
                      'Live preview',
                      style: TextStyle(
                        color: _kBioAccent.withValues(alpha: 0.9),
                        fontWeight: FontWeight.w700,
                        fontSize: 10,
                      ),
                    ),
                ],
              ),
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
                        NgmyBioTemplateThumb(
                          template: tpl,
                          selected: sel,
                          size: cellW,
                        ),
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
          child: LayoutBuilder(
            builder: (context, constraints) {
              const cols = 5;
              const gap = 8.0;
              final cellW = (constraints.maxWidth - gap * (cols - 1)) / cols;
              return GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: cols,
                  crossAxisSpacing: gap,
                  mainAxisSpacing: 12,
                  childAspectRatio: cellW / 72,
                ),
                itemCount: kNgmyBioRingStyles.length,
                itemBuilder: (context, i) =>
                    _ringChip(t, kNgmyBioRingStyles[i]),
              );
            },
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
            width: 56,
            height: 56,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(
                color: sel ? _kBioAccent : Colors.transparent,
                width: 2.5,
              ),
              boxShadow: sel
                  ? [
                      BoxShadow(
                        color: _kBioAccent.withValues(alpha: 0.2),
                        blurRadius: 8,
                      ),
                    ]
                  : null,
            ),
            child: NgmyBioRingFrame(
              ringId: ring.id,
              size: 36,
              accent: ring.auraColor ?? _kBioAccent,
              child: const CircleAvatar(
                radius: 18,
                backgroundColor: Color(0xFFE5E7EB),
                child: Icon(Icons.person, size: 14),
              ),
            ),
          ),
          const SizedBox(height: 4),
          SizedBox(
            width: 56,
            child: Text(
              ring.label,
              style: TextStyle(
                fontSize: 9,
                fontWeight: sel ? FontWeight.w900 : FontWeight.w500,
                color: sel ? _kBioAccent : t.subtitle,
              ),
              textAlign: TextAlign.center,
              maxLines: 2,
            ),
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
              NgmyModernField(
                controller: _socialInstagramC,
                label: 'Instagram',
                hint: 'https://instagram.com/you',
                icon: Icons.camera_alt_outlined,
                accent: _kBioAccent,
              ),
              const SizedBox(height: 10),
              NgmyModernField(
                controller: _socialFacebookC,
                label: 'Facebook',
                hint: 'https://facebook.com/you',
                icon: Icons.facebook_outlined,
                accent: _kBioAccent,
              ),
              const SizedBox(height: 10),
              NgmyModernField(
                controller: _socialYoutubeC,
                label: 'YouTube',
                hint: 'https://youtube.com/@you',
                icon: Icons.play_circle_outline_rounded,
                accent: _kBioAccent,
              ),
              const SizedBox(height: 10),
              NgmyModernField(
                controller: _socialWebsiteC,
                label: 'Website',
                hint: 'https://yoursite.com',
                icon: Icons.language_rounded,
                accent: _kBioAccent,
              ),
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
                    final bytes = await NgmyMenuQrWidget.capturePng(
                      _qrCaptureKey,
                    );
                    if (bytes == null) return;
                    await downloadNgmyQrImage(
                      bytes,
                      '${_doc.slug.isEmpty ? 'bio' : _doc.slug}_qr.png',
                    );
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
