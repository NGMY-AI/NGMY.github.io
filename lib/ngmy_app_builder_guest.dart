import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_app_builder.dart';
import 'ngmy_app_builder_launch_stub.dart' if (dart.library.html) 'ngmy_app_builder_launch_web.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_urls.dart';
import 'ngmy_supabase_config.dart';

const _kPublishedAppSettingPrefix = 'ngmy_published_app_';
const _kPublishedAppsManifestKey = 'ngmy_published_apps_manifest';
const _kGuestAppCachePrefix = 'ngmy_guest_app_cache_';

final Map<String, NgmyAppProject> _guestAppMemoryCache = {};

Future<void> ngmyCloudPersistPublishedApp(NgmyAppProject project) async {
  if (project.slug.trim().isEmpty) return;
  final slug = project.slug.trim().toLowerCase();
  final payload = <String, dynamic>{
    ...project.toMap(),
    'savedAt': DateTime.now().toUtc().toIso8601String(),
  };
  try {
    await Supabase.instance.client.from('ngmy_settings').upsert([
      {
        'key': '$_kPublishedAppSettingPrefix$slug',
        'value': payload,
        'updated_at': DateTime.now().toUtc().toIso8601String(),
      },
    ], onConflict: 'key');
  } catch (e) {
    debugPrint('[app builder] cloud persist app $slug: $e');
  }

  await _cacheGuestAppLocally(slug, payload);

  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_kPublishedAppsManifestKey);
    final list = <Map<String, dynamic>>[];
    if (raw != null && raw.isNotEmpty) {
      final decoded = jsonDecode(raw);
      if (decoded is List) {
        for (final item in decoded) {
          if (item is Map) list.add(Map<String, dynamic>.from(item));
        }
      }
    }
    list.removeWhere((e) => (e['slug'] ?? '').toString().toLowerCase() == slug);
    list.insert(0, {
      'slug': slug,
      'name': project.name,
      'publicUrl': project.publicUrl,
      'seoDescription': project.seoDescription,
      'ownerEmail': project.ownerEmail,
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    });
    await prefs.setString(_kPublishedAppsManifestKey, jsonEncode(list));
  } catch (e) {
    debugPrint('[app builder] manifest persist: $e');
  }
}

Future<void> _cacheGuestAppLocally(String slug, Map<String, dynamic> payload) async {
  _guestAppMemoryCache[slug] = NgmyAppProject.fromMap(payload);
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('$_kGuestAppCachePrefix$slug', jsonEncode(payload));
  } catch (e) {
    debugPrint('[app builder] guest cache $slug: $e');
  }
}

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
      final decoded = jsonDecode(resp.body);
      return _projectFromPayload(decoded);
    }
  } catch (e) {
    debugPrint('[app builder] static json $slug: $e');
  }
  return null;
}

Future<NgmyAppProject?> _fetchGuestAppFromSupabaseRest(String slug) async {
  try {
    final uri = Uri.parse(
      '$kNgmySupabaseUrl/rest/v1/ngmy_settings'
      '?select=value'
      '&key=eq.$_kPublishedAppSettingPrefix$slug'
      '&limit=1',
    );
    final resp = await http.get(
      uri,
      headers: {
        'apikey': kNgmySupabaseAnonKey,
        'Authorization': 'Bearer $kNgmySupabaseAnonKey',
      },
    ).timeout(const Duration(seconds: 12));
    if (resp.statusCode == 200 && resp.body.isNotEmpty) {
      final decoded = jsonDecode(resp.body);
      if (decoded is List && decoded.isNotEmpty) {
        final row = decoded.first;
        if (row is Map) return _projectFromPayload(row['value']);
      }
    }
  } catch (e) {
    debugPrint('[app builder] supabase rest $slug: $e');
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
      final decoded = jsonDecode(cached);
      final p = _projectFromPayload(decoded);
      if (p != null) {
        _guestAppMemoryCache[target] = p;
        return p;
      }
    }
  } catch (e) {
    debugPrint('[app builder] guest prefs cache $target: $e');
  }

  final staticApp = await _fetchStaticGuestAppJson(target);
  if (staticApp != null) {
    await _cacheGuestAppLocally(target, staticApp.toMap());
    return staticApp;
  }

  final restApp = await _fetchGuestAppFromSupabaseRest(target);
  if (restApp != null) {
    await _cacheGuestAppLocally(target, restApp.toMap());
    return restApp;
  }

  try {
    final row = await Supabase.instance.client
        .from('ngmy_settings')
        .select()
        .eq('key', '$_kPublishedAppSettingPrefix$target')
        .maybeSingle();
    final value = row?['value'];
    final p = _projectFromPayload(value);
    if (p != null) {
      await _cacheGuestAppLocally(target, p.toMap());
      return p;
    }
  } catch (e) {
    debugPrint('[app builder] cloud fetch $target: $e');
  }

  try {
    final prefs = await SharedPreferences.getInstance();
    final configRaw = prefs.getString('app_config');
    if (configRaw != null && configRaw.isNotEmpty) {
      final decoded = jsonDecode(configRaw);
      if (decoded is Map) {
        final found = ngmyFindPublishedAppBySlug(decoded, target);
        if (found != null) return found;
      }
    }
  } catch (e) {
    debugPrint('[app builder] local config fetch: $e');
  }

  try {
    final configRow = await Supabase.instance.client.from('config').select().eq('id', '1').maybeSingle();
    if (configRow != null) {
      final published = configRow['appBuilderPublished'];
      if (published is List) {
        for (final item in published) {
          if (item is! Map) continue;
          final p = NgmyAppProject.fromMap(Map<String, dynamic>.from(item));
          if (p.slug.toLowerCase() == target) return p;
        }
      }
    }
  } catch (e) {
    debugPrint('[app builder] config table fetch: $e');
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

/// Full-screen GitHub-hosted viewer — opens a user's published app from their unique link (no NGMY login).
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
      _error = 'This app link was not found. Ask the creator to publish again.';
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
