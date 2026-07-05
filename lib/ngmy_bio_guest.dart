import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';
import 'ngmy_bio_renderer.dart';
import 'ngmy_bio_launch_stub.dart' if (dart.library.html) 'ngmy_bio_launch_web.dart';

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
      theme: ThemeData(useMaterial3: true, colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF2563EB))),
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

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    setState(() {
      _loading = true;
      _error = null;
      _doc = null;
    });

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
              CircularProgressIndicator(color: Color(0xFF2563EB)),
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
    return Scaffold(body: NgmyBioPreview(document: _doc!, lightweight: true));
  }
}
