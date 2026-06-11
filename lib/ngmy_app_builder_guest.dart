import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_app_builder.dart';
import 'ngmy_app_builder_launch_stub.dart' if (dart.library.html) 'ngmy_app_builder_launch_web.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';

const _kGuestAppCachePrefix = 'ngmy_guest_app_cache_';

final Map<String, NgmyAppProject> _guestAppMemoryCache = {};

NgmyAppProject? _projectFromPayload(dynamic value) {
  if (value is Map) {
    return NgmyAppProject.fromMap(Map<String, dynamic>.from(value));
  }
  return null;
}

Future<NgmyAppProject?> _fetchStaticGuestAppJson(String slug) async {
  if (!kIsWeb) return null;
  try {
    final base = ngmyAppBuilderBaseUrl();
    final url = '${base}apps/$slug.json';
    final resp = await http.get(Uri.parse(url)).timeout(const Duration(seconds: 12));
    if (resp.statusCode == 200 && resp.body.isNotEmpty) {
      return _projectFromPayload(jsonDecode(resp.body));
    }
  } catch (e) {
    debugPrint('[app builder] static json $slug: $e');
  }
  return null;
}

Future<NgmyAppProject?> ngmyFetchPublishedAppBySlug(String slug) async {
  final target = slug.trim().toLowerCase();
  if (target.isEmpty) return null;

  final mem = _guestAppMemoryCache[target];
  if (mem != null) return mem;

  try {
    final prefs = await SharedPreferences.getInstance();
    final cached = prefs.getString('$_kGuestAppCachePrefix$target');
    if (cached != null && cached.isNotEmpty) {
      final p = _projectFromPayload(jsonDecode(cached));
      if (p != null) {
        _guestAppMemoryCache[target] = p;
        return p;
      }
    }
  } catch (e) {
    debugPrint('[app builder] guest prefs cache $target: $e');
  }

  final published = await ngmyLoadLocalPublishedApps();
  for (final p in published) {
    if (p.slug.toLowerCase() == target) {
      _guestAppMemoryCache[target] = p;
      return p;
    }
  }

  final staticApp = await _fetchStaticGuestAppJson(target);
  if (staticApp != null) {
    await ngmyCachePublishedAppLocally(staticApp);
    _guestAppMemoryCache[target] = staticApp;
    return staticApp;
  }

  return null;
}

/// Standalone shell — published app links open here with zero NGMY login.
class NgmyGuestPublishedApp extends StatelessWidget {
  final String slug;

  const NgmyGuestPublishedApp({super.key, required this.slug});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'App',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF6366F1)),
        useMaterial3: true,
      ),
      home: NgmyPublishedAppHostScreen(slug: slug),
    );
  }
}

class NgmyPublishedAppHostScreen extends StatefulWidget {
  final String slug;

  const NgmyPublishedAppHostScreen({super.key, required this.slug});

  @override
  State<NgmyPublishedAppHostScreen> createState() => _NgmyPublishedAppHostScreenState();
}

class _NgmyPublishedAppHostScreenState extends State<NgmyPublishedAppHostScreen> {
  NgmyAppProject? _project;
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
      final app = await ngmyFetchPublishedAppBySlug(widget.slug);
      if (!mounted) return;
      if (app != null) {
        setState(() {
          _project = app;
          _loading = false;
        });
        return;
      }
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 500 * (attempt + 1)));
    }
    if (!mounted) return;
    setState(() {
      _loading = false;
      _error = 'This app link was not found on this device. Import your .ngmy.json backup file in App Builder.';
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: Colors.white,
        body: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CircularProgressIndicator(),
              SizedBox(height: 16),
              Text('Opening your app…', style: TextStyle(fontWeight: FontWeight.w700)),
            ],
          ),
        ),
      );
    }
    if (_project != null) {
      return NgmyAppRuntimeScreen(project: _project!);
    }
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(title: const Text('App not found')),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.link_off_rounded, size: 56, color: Colors.grey),
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
}

String? ngmyPublishedAppSlugFromLaunch() => ngmyReadAppSlugFromLaunchUrl();

bool ngmyIsGuestPublishedAppLaunch() {
  final slug = ngmyPublishedAppSlugFromLaunch();
  return slug != null && slug.trim().isNotEmpty;
}
