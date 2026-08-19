import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_bio_chrome.dart';
import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';
import 'ngmy_bio_renderer.dart';
import 'ngmy_bio_templates.dart';
import 'ngmy_guest_link_missing.dart';
import 'ngmy_bio_launch_stub.dart' if (dart.library.html) 'ngmy_bio_launch_web.dart';
import 'ngmy_platform_graphics.dart';

const _kBioGold = Color(0xFFB8860B);

String? ngmyPublishedBioSlugFromLaunch() => ngmyReadBioSlugFromLaunchUrl();

bool ngmyIsGuestPublishedBioLaunch() {
  final slug = ngmyPublishedBioSlugFromLaunch();
  return slug != null && slug.trim().isNotEmpty;
}

class NgmyGuestPublishedBio extends StatelessWidget {
  const NgmyGuestPublishedBio({super.key, required this.slug});

  final String slug;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Bio',
      builder: ngmyCrispMaterialAppBuilder,
      theme: ThemeData(useMaterial3: true, scaffoldBackgroundColor: Colors.white),
      home: NgmyGuestBioHostScreen(slug: slug),
    );
  }
}

class NgmyGuestBioHostScreen extends StatefulWidget {
  const NgmyGuestBioHostScreen({super.key, required this.slug});

  final String slug;

  @override
  State<NgmyGuestBioHostScreen> createState() => _NgmyGuestBioHostScreenState();
}

class _NgmyGuestBioHostScreenState extends State<NgmyGuestBioHostScreen> with SingleTickerProviderStateMixin {
  NgmyBioDocument? _doc;
  String? _error;
  bool _loading = true;
  late final AnimationController _unfold;

  @override
  void initState() {
    super.initState();
    _unfold = AnimationController(vsync: this, duration: const Duration(milliseconds: 950));
    unawaited(_load());
  }

  @override
  void dispose() {
    _unfold.dispose();
    super.dispose();
  }

  void _applyTemplateChrome(NgmyBioDocument doc) {
    final tpl = ngmyBioTemplateById(doc.templateId);
    final chrome = ngmyBioPageChromeColor(tpl);
    ngmyApplyBioPageChrome(chrome);
    SystemChrome.setSystemUIOverlayStyle(ngmyBioSystemUiOverlay(chrome));
  }

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _error = null;
      _doc = null;
    });
    _unfold.reset();
    ngmyApplyBioPageChrome(Colors.white);
    SystemChrome.setSystemUIOverlayStyle(ngmyBioSystemUiOverlay(Colors.white));

    try {
      for (var attempt = 0; attempt < 2; attempt++) {
        final entry = await NgmyBioPublishRegistry.fetchBySlugForGuest(widget.slug)
            .timeout(const Duration(seconds: 10), onTimeout: () => null);
        if (!mounted) return;
        if (entry != null && entry['data'] is Map) {
          final doc = NgmyBioDocument.fromJson(Map<String, dynamic>.from(entry['data'] as Map));
          setState(() {
            _doc = doc;
            _loading = false;
          });
          _applyTemplateChrome(doc);
          await _unfold.forward();
          return;
        }
        if (attempt == 0) await Future<void>.delayed(const Duration(milliseconds: 400));
      }
    } on TimeoutException {
      // handled below
    }

    if (!mounted) return;
    setState(() {
      _loading = false;
      _error = 'This Bio link is no longer available. Ask the owner for a new link.';
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return AnnotatedRegion<SystemUiOverlayStyle>(
        value: ngmyBioSystemUiOverlay(Colors.white),
        child: const Scaffold(
          backgroundColor: Colors.white,
          body: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                CircularProgressIndicator(color: _kBioGold),
                SizedBox(height: 16),
                Text('Opening bio…', style: TextStyle(color: Color(0xFF64748B), fontWeight: FontWeight.w600)),
              ],
            ),
          ),
        ),
      );
    }
    if (_doc == null || _error != null) {
      return NgmyGuestLinkMissingPage(
        kind: 'bio',
        message: _error ?? 'This Bio page could not be found.',
        onRetry: _load,
      );
    }

    final tpl = ngmyBioTemplateById(_doc!.templateId);
    final chrome = ngmyBioPageChromeColor(tpl);

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: ngmyBioSystemUiOverlay(chrome),
      child: Scaffold(
        backgroundColor: chrome,
        body: AnimatedBuilder(
          animation: _unfold,
          builder: (context, child) {
            final t = Curves.easeOutCubic.transform(_unfold.value);
            return Opacity(opacity: t.clamp(0.0, 1.0), child: child);
          },
          child: NgmyBioPreview(document: _doc!, fullBleed: true),
        ),
      ),
    );
  }
}
