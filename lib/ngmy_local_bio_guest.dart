import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_bio_chrome.dart';
import 'ngmy_bio_models.dart';
import 'ngmy_bio_renderer.dart';
import 'ngmy_bio_templates.dart';
import 'ngmy_local_bio_launch_stub.dart' if (dart.library.html) 'ngmy_local_bio_launch_web.dart';
import 'ngmy_local_bio_publish_registry.dart';

const _kBioGold = Color(0xFF0EA5E9);

String? ngmyPublishedLocalBioSlugFromLaunch() => ngmyReadLocalBioSlugFromLaunchUrl();

bool ngmyIsGuestLocalPublishedBioLaunch() {
  final slug = ngmyPublishedLocalBioSlugFromLaunch();
  return slug != null && slug.trim().isNotEmpty;
}

class NgmyGuestLocalPublishedBio extends StatelessWidget {
  const NgmyGuestLocalPublishedBio({super.key, required this.slug});

  final String slug;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Local Bio',
      theme: ThemeData(useMaterial3: true, scaffoldBackgroundColor: Colors.white),
      home: NgmyGuestLocalBioHostScreen(slug: slug),
    );
  }
}

class NgmyGuestLocalBioHostScreen extends StatefulWidget {
  const NgmyGuestLocalBioHostScreen({super.key, required this.slug});

  final String slug;

  @override
  State<NgmyGuestLocalBioHostScreen> createState() => _NgmyGuestLocalBioHostScreenState();
}

class _NgmyGuestLocalBioHostScreenState extends State<NgmyGuestLocalBioHostScreen> with SingleTickerProviderStateMixin {
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

    for (var attempt = 0; attempt < 4; attempt++) {
      final entry = await NgmyLocalBioPublishRegistry.fetchBySlugForGuest(widget.slug);
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
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 500 * (attempt + 1)));
    }

    if (!mounted) return;
    setState(() {
      _loading = false;
      _error = 'We could not open this Bio page. Ask the host to publish again while online.';
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
                Text('Opening local bio…', style: TextStyle(color: Color(0xFF64748B), fontWeight: FontWeight.w600)),
              ],
            ),
          ),
        ),
      );
    }
    if (_doc == null || _error != null) {
      return Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.white,
          foregroundColor: const Color(0xFF0F172A),
          elevation: 0,
          title: const Text('Local Bio not found'),
        ),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.devices_rounded, size: 56, color: Colors.black38),
                const SizedBox(height: 12),
                Text(_error ?? 'Not found', textAlign: TextAlign.center),
                const SizedBox(height: 16),
                FilledButton(onPressed: _load, child: const Text('Try again')),
              ],
            ),
          ),
        ),
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
            final fold = (1 - t).clamp(0.0, 1.0);
            return Opacity(
              opacity: (t * 1.1).clamp(0.0, 1.0),
              child: Transform(
                alignment: Alignment.topCenter,
                transform: Matrix4.identity()
                  ..setEntry(3, 2, 0.0012)
                  ..rotateX(fold * 0.65)
                  ..translateByDouble(0.0, fold * 48.0, 0.0, 1.0),
                child: child,
              ),
            );
          },
          child: NgmyBioPreview(document: _doc!, lightweight: true, fullBleed: true),
        ),
      ),
    );
  }
}
