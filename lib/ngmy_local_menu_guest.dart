import 'package:flutter/material.dart';

import 'ngmy_guest_link_missing.dart';
import 'ngmy_local_menu_launch_stub.dart' if (dart.library.html) 'ngmy_local_menu_launch_web.dart';
import 'ngmy_local_menu_publish_registry.dart';
import 'ngmy_menu_footer.dart';
import 'ngmy_menu_models.dart';
import 'ngmy_menu_renderer.dart';

String? ngmyPublishedLocalMenuSlugFromLaunch() => ngmyReadLocalMenuSlugFromLaunchUrl();

bool ngmyIsGuestLocalPublishedMenuLaunch() {
  final slug = ngmyPublishedLocalMenuSlugFromLaunch();
  return slug != null && slug.trim().isNotEmpty;
}

/// Guest shell for device-local published menus (no cloud).
class NgmyGuestLocalPublishedMenu extends StatelessWidget {
  const NgmyGuestLocalPublishedMenu({super.key, required this.slug});

  final String slug;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Local Menu',
      theme: ThemeData(colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF0EA5E9)), useMaterial3: true),
      home: NgmyGuestLocalMenuHostScreen(slug: slug),
    );
  }
}

class NgmyGuestLocalMenuHostScreen extends StatefulWidget {
  const NgmyGuestLocalMenuHostScreen({super.key, required this.slug});

  final String slug;

  @override
  State<NgmyGuestLocalMenuHostScreen> createState() => _NgmyGuestLocalMenuHostScreenState();
}

class _NgmyGuestLocalMenuHostScreenState extends State<NgmyGuestLocalMenuHostScreen> {
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
      final entry = await NgmyLocalMenuPublishRegistry.fetchBySlugForGuest(widget.slug);
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
      _error = 'We could not open this menu. Ask the host to copy the full published link and try again.';
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: Color(0xFF0F172A),
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(color: Color(0xFF38BDF8)),
              SizedBox(height: 16),
              Text('Opening local menu…', style: TextStyle(fontWeight: FontWeight.w700, color: Colors.white70)),
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
