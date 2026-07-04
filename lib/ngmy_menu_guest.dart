import 'package:flutter/material.dart';

import 'ngmy_menu_footer.dart';
import 'ngmy_menu_models.dart';
import 'ngmy_menu_launch_stub.dart' if (dart.library.html) 'ngmy_menu_launch_web.dart';
import 'ngmy_menu_publish_registry.dart';
import 'ngmy_menu_renderer.dart';

String? ngmyPublishedMenuSlugFromLaunch() => ngmyReadMenuSlugFromLaunchUrl();

bool ngmyIsGuestPublishedMenuLaunch() {
  final slug = ngmyPublishedMenuSlugFromLaunch();
  return slug != null && slug.trim().isNotEmpty;
}

/// Standalone shell — published menu links open here with zero NGMY login.
class NgmyGuestPublishedMenu extends StatelessWidget {
  const NgmyGuestPublishedMenu({super.key, required this.slug});

  final String slug;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Menu',
      theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFFB8860B)), useMaterial3: true),
      home: NgmyGuestMenuHostScreen(slug: slug),
    );
  }
}

class NgmyGuestMenuHostScreen extends StatefulWidget {
  const NgmyGuestMenuHostScreen({super.key, required this.slug});

  final String slug;

  @override
  State<NgmyGuestMenuHostScreen> createState() => _NgmyGuestMenuHostScreenState();
}

class _NgmyGuestMenuHostScreenState extends State<NgmyGuestMenuHostScreen> {
  NgmyMenuDocument? _doc;
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
    });
    for (var attempt = 0; attempt < 4; attempt++) {
      final entry = await NgmyMenuPublishRegistry.fetchBySlug(widget.slug);
      if (!mounted) return;
      if (entry != null && entry['data'] is Map) {
        final doc = NgmyMenuDocument.fromJson(Map<String, dynamic>.from(entry['data'] as Map));
        doc.ensureMenuPages();
        setState(() {
          _doc = doc;
          _loading = false;
        });
        return;
      }
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 500 * (attempt + 1)));
    }
    if (!mounted) return;
    setState(() {
      _loading = false;
      _error = 'We could not open this menu. Ask the restaurant to re-share the link.';
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: Color(0xFF121212),
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(color: Color(0xFFD4AF37)),
              SizedBox(height: 16),
              Text('Opening menu…', style: TextStyle(fontWeight: FontWeight.w700, color: Colors.white70)),
            ],
          ),
        ),
      );
    }

    if (_doc == null || _error != null) {
      return Scaffold(
        appBar: AppBar(title: const Text('Menu not found')),
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.restaurant_menu_rounded, size: 56, color: Colors.black38),
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

    final doc = _doc!;
    final pages = doc.effectivePages;
    final bg = ngmyMenuPageBackgroundColor(doc.pageBackground);

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              child: pages.length == 1
                  ? _menuPage(doc, 0)
                  : PageView.builder(
                      itemCount: pages.length,
                      itemBuilder: (_, i) => _menuPage(doc, i),
                    ),
            ),
            NgmyMenuGuestFooter(links: doc.socialLinks),
          ],
        ),
      ),
    );
  }

  Widget _menuPage(NgmyMenuDocument doc, int index) {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 480),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 8),
          child: NgmyMenuPreview(document: doc, pageIndex: index),
        ),
      ),
    );
  }
}
