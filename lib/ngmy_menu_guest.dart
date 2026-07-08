import 'package:flutter/material.dart';

import 'ngmy_menu_footer.dart';
import 'ngmy_menu_models.dart';
import 'ngmy_menu_launch_stub.dart' if (dart.library.html) 'ngmy_menu_launch_web.dart';
import 'ngmy_guest_link_missing.dart';
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
  final PageController _pageController = PageController();
  int _pageIndex = 0;

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
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
          _pageIndex = 0;
        });
        if (_pageController.hasClients) {
          _pageController.jumpToPage(0);
        }
        return;
      }
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 500 * (attempt + 1)));
    }
    if (!mounted) return;
    setState(() {
      _loading = false;
      _error = 'This menu link is no longer available. Ask the restaurant for a new link.';
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
      return NgmyGuestLinkMissingPage(
        kind: 'menu',
        message: _error ?? 'This menu page could not be found.',
        onRetry: _load,
      );
    }

    final doc = _doc!;
    final pages = doc.effectivePages;
    final bg = ngmyMenuPageBackgroundColor(doc.pageBackground);
    final multi = pages.length > 1;
    final hasSocial = doc.socialLinks.hasAny;
    final showFooter = multi || hasSocial;

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              child: multi
                  ? PageView.builder(
                      controller: _pageController,
                      itemCount: pages.length,
                      onPageChanged: (i) => setState(() => _pageIndex = i),
                      itemBuilder: (_, i) => _menuPage(doc, i),
                    )
                  : _menuPage(doc, 0),
            ),
            if (showFooter)
              SizedBox(
                height: multi && hasSocial ? 52 : (multi ? 28 : 40),
                child: Stack(
                  alignment: Alignment.center,
                  clipBehavior: Clip.none,
                  children: [
                    if (hasSocial)
                      Align(
                        alignment: Alignment.bottomCenter,
                        child: NgmyMenuGuestFooter(links: doc.socialLinks),
                      ),
                    if (multi)
                      Align(
                        alignment: Alignment.topCenter,
                        child: NgmyMenuPageDotsIndicator(
                          count: pages.length,
                          activeIndex: _pageIndex,
                          pageBackgroundId: doc.pageBackground,
                        ),
                      ),
                  ],
                ),
              ),
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
