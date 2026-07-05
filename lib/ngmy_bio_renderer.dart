import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_templates.dart';
import 'ngmy_menu_footer.dart';

/// Link-in-bio page preview (studio + guest).
class NgmyBioPreview extends StatelessWidget {
  const NgmyBioPreview({super.key, required this.document, this.compact = false, this.maxWidth = 420});

  final NgmyBioDocument document;
  final bool compact;
  final double maxWidth;

  @override
  Widget build(BuildContext context) {
    final tpl = ngmyBioTemplateById(document.templateId);
    final ring = ngmyBioRingById(document.ringStyleId);
    final avatarSize = compact ? 72.0 : 96.0;
    final headerH = compact ? 100.0 : 140.0;
    final pad = compact ? 12.0 : 16.0;
    final name = document.displayName.trim().isEmpty ? 'Your Name' : document.displayName.trim();
    final tagline = document.tagline.trim();
    final links = document.activeLinks;

    Widget pageBg = Container(color: tpl.pageBg);
    if (document.backgroundImageBase64.isNotEmpty) {
      pageBg = Stack(
        fit: StackFit.expand,
        children: [
          _bioImage(document.backgroundImageBase64, fit: BoxFit.cover),
          Container(color: Colors.black.withValues(alpha: 0.35)),
        ],
      );
    }

    return Container(
      color: tpl.pageBg,
      child: Center(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: maxWidth),
          child: Stack(
            children: [
              pageBg,
              SingleChildScrollView(
                padding: EdgeInsets.only(bottom: pad + (document.socialLinks.hasAny ? 48 : 16)),
                child: Column(
                  children: [
                    if (document.headerImageBase64.isNotEmpty || tpl.useHeaderOverlap) ...[
                      SizedBox(
                        height: headerH,
                        width: double.infinity,
                        child: document.headerImageBase64.isNotEmpty
                            ? _bioImage(document.headerImageBase64, fit: BoxFit.cover)
                            : Container(
                                decoration: BoxDecoration(
                                  gradient: LinearGradient(
                                    colors: [tpl.titleColor.withValues(alpha: 0.15), tpl.pageBg],
                                  ),
                                ),
                              ),
                      ),
                    ],
                    Transform.translate(
                      offset: Offset(0, tpl.useHeaderOverlap ? -avatarSize * 0.45 : 0),
                      child: Column(
                        children: [
                          _avatar(document.avatarImageBase64, avatarSize, ring),
                          SizedBox(height: compact ? 8 : 12),
                          Text(
                            name,
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontFamily: 'Georgia',
                              fontSize: compact ? 20 : 24,
                              fontWeight: FontWeight.w700,
                              color: tpl.titleColor,
                              letterSpacing: 0.2,
                            ),
                          ),
                          if (tagline.isNotEmpty) ...[
                            SizedBox(height: compact ? 4 : 6),
                            Text(
                              tagline.toUpperCase(),
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                fontSize: compact ? 10 : 11,
                                fontWeight: FontWeight.w600,
                                letterSpacing: 1.2,
                                color: tpl.subtitleColor,
                              ),
                            ),
                          ],
                          SizedBox(height: compact ? 14 : 20),
                          Padding(
                            padding: EdgeInsets.symmetric(horizontal: pad),
                            child: Column(
                              children: links.map((l) => _linkCard(l, tpl, compact)).toList(),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              if (document.socialLinks.hasAny)
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: Center(
                    child: NgmyMenuGuestFooter(links: document.socialLinks, compact: compact),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _avatar(String ref, double size, NgmyBioRingStyle ring) {
    final inner = size - (ring.id == 'none' ? 0 : 8);
    return Container(
      width: size,
      height: size,
      padding: ring.id == 'none' ? null : const EdgeInsets.all(4),
      decoration: ring.buildRing(size),
      child: ClipOval(
        child: ref.isNotEmpty
            ? _bioImage(ref, fit: BoxFit.cover, width: inner, height: inner)
            : Container(
                width: inner,
                height: inner,
                color: const Color(0xFFE5E7EB),
                child: Icon(Icons.person_rounded, size: inner * 0.5, color: const Color(0xFF9CA3AF)),
              ),
      ),
    );
  }

  Widget _linkCard(NgmyBioLink link, NgmyBioTemplate tpl, bool compact) {
    final title = link.title.trim().isEmpty ? 'Link' : link.title.trim();
    return Padding(
      padding: EdgeInsets.only(bottom: compact ? 8 : 10),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => _openUrl(link.url),
          borderRadius: BorderRadius.circular(compact ? 10 : 12),
          child: Ink(
            decoration: BoxDecoration(
              color: tpl.cardBg,
              borderRadius: BorderRadius.circular(compact ? 10 : 12),
              border: Border.all(color: tpl.cardBorder, width: tpl.cardBorder.alpha > 0 ? 1 : 0),
              boxShadow: tpl.cardShadow
                  ? [BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 8, offset: const Offset(0, 2))]
                  : null,
            ),
            padding: EdgeInsets.symmetric(horizontal: compact ? 10 : 12, vertical: compact ? 10 : 12),
            child: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: link.imageBase64.isNotEmpty
                      ? _bioImage(link.imageBase64, width: compact ? 40 : 48, height: compact ? 40 : 48, fit: BoxFit.cover)
                      : Container(
                          width: compact ? 40 : 48,
                          height: compact ? 40 : 48,
                          color: tpl.subtitleColor.withValues(alpha: 0.12),
                          child: Icon(Icons.link_rounded, color: tpl.subtitleColor, size: compact ? 20 : 22),
                        ),
                ),
                SizedBox(width: compact ? 10 : 12),
                Expanded(
                  child: Text(
                    title,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontFamily: 'Georgia',
                      fontSize: compact ? 14 : 16,
                      fontWeight: FontWeight.w600,
                      color: tpl.linkTextColor,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  static Widget _bioImage(String ref, {double? width, double? height, BoxFit fit = BoxFit.contain}) {
    try {
      if (!ref.startsWith('data:image')) return const SizedBox.shrink();
      final bytes = base64Decode(ref.split(',').last);
      return Image.memory(bytes, width: width, height: height, fit: fit, gaplessPlayback: true, errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined));
    } catch (_) {
      return const Icon(Icons.broken_image_outlined);
    }
  }

  static Future<void> _openUrl(String raw) async {
    var url = raw.trim();
    if (url.isEmpty) return;
    if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://$url';
    final uri = Uri.tryParse(url);
    if (uri == null) return;
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}
