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
import 'ngmy_guest_html_splash_stub.dart' if (dart.library.html) 'ngmy_guest_html_splash_web.dart';
import 'ngmy_platform_graphics.dart';

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
      theme: ThemeData(
        useMaterial3: true,
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF121212),
      ),
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

class _NgmyGuestBioHostScreenState extends State<NgmyGuestBioHostScreen> {
  NgmyBioDocument? _doc;
  String? _error;
  bool _loading = true;
  bool _connectionProblem = false;

  @override
  void initState() {
    super.initState();
    ngmyReleaseGuestHtmlSplash();
    unawaited(_load());
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
      _connectionProblem = false;
    });
    ngmyApplyBioPageChrome(const Color(0xFF121212));
    SystemChrome.setSystemUIOverlayStyle(ngmyBioSystemUiOverlay(const Color(0xFF121212)));

    Map<String, dynamic>? entry = await ngmyWaitPrefetchedGuestBio();
    var reachable = entry != null;
    if (entry == null || entry['data'] is! Map) {
      try {
        final result = await NgmyBioPublishRegistry.fetchBySlugForGuestStatus(widget.slug)
            .timeout(const Duration(seconds: 8), onTimeout: () => (reachable: false, entry: null));
        reachable = result.reachable;
        entry = result.entry;
      } on TimeoutException {
        reachable = false;
        entry = null;
      }
    }

    if (!mounted) return;
    if (entry != null && entry['data'] is Map) {
      final doc = NgmyBioDocument.fromJson(Map<String, dynamic>.from(entry['data'] as Map));
      setState(() {
        _doc = doc;
        _loading = false;
        _connectionProblem = false;
      });
      _applyTemplateChrome(doc);
      ngmyReleaseGuestHtmlSplash();
      return;
    }

    setState(() {
      _loading = false;
      _connectionProblem = !reachable;
      _error = reachable
          ? 'This Bio link is no longer available. Ask the owner for a new link.'
          : 'Could not load this Bio. Check your connection and tap Try again.';
    });
    ngmyReleaseGuestHtmlSplash();
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return AnnotatedRegion<SystemUiOverlayStyle>(
        value: ngmyBioSystemUiOverlay(const Color(0xFF121212)),
        child: const Scaffold(
          backgroundColor: Color(0xFF121212),
          body: Center(
            child: SizedBox(
              width: 18,
              height: 18,
              child: CircularProgressIndicator(
                strokeWidth: 2,
                color: Color(0x66FFFFFF),
              ),
            ),
          ),
        ),
      );
    }
    if (_doc == null || _error != null) {
      return NgmyGuestLinkMissingPage(
        kind: 'bio',
        message: _error ?? 'This Bio page could not be found.',
        connectionProblem: _connectionProblem,
        onRetry: _load,
      );
    }

    final tpl = ngmyBioTemplateById(_doc!.templateId);
    final chrome = ngmyBioPageChromeColor(tpl);

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: ngmyBioSystemUiOverlay(chrome),
      child: Scaffold(
        backgroundColor: chrome,
        body: NgmyBioPreview(document: _doc!, fullBleed: true),
      ),
    );
  }
}
