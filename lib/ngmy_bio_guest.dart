import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';
import 'ngmy_bio_renderer.dart';
import 'ngmy_bio_launch_stub.dart' if (dart.library.html) 'ngmy_bio_launch_web.dart';

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
      theme: ThemeData(useMaterial3: true, colorScheme: ColorScheme.fromSeed(seedColor: _kBioGold)),
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

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _error = null;
      _doc = null;
    });
    _unfold.reset();

    try {
      for (var attempt = 0; attempt < 2; attempt++) {
        final entry = await NgmyBioPublishRegistry.fetchBySlugForGuest(widget.slug)
            .timeout(const Duration(seconds: 10), onTimeout: () => null);
        if (!mounted) return;
        if (entry != null && entry['data'] is Map) {
          setState(() {
            _doc = NgmyBioDocument.fromJson(Map<String, dynamic>.from(entry['data'] as Map));
            _loading = false;
          });
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
      _error = 'We could not open this Bio page. Ask the owner to re-share the link.';
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: Color(0xFF111827),
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(color: _kBioGold),
              SizedBox(height: 16),
              Text('Opening bio…', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w600)),
            ],
          ),
        ),
      );
    }
    if (_doc == null || _error != null) {
      return Scaffold(
        appBar: AppBar(title: const Text('Bio not found')),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(_error ?? 'Not found', textAlign: TextAlign.center),
                const SizedBox(height: 16),
                FilledButton(onPressed: _load, child: const Text('Try again')),
              ],
            ),
          ),
        ),
      );
    }

    return Scaffold(
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
        child: NgmyBioPreview(document: _doc!, lightweight: true),
      ),
    );
  }
}
