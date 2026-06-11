import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_app_builder.dart';
import 'ngmy_app_builder_launch_stub.dart' if (dart.library.html) 'ngmy_app_builder_launch_web.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_urls.dart';

const _kPublishedAppSettingPrefix = 'ngmy_published_app_';
const _kPublishedAppsManifestKey = 'ngmy_published_apps_manifest';

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

Future<NgmyAppProject?> ngmyFetchPublishedAppBySlug(String slug) async {
  final target = slug.trim().toLowerCase();
  if (target.isEmpty) return null;

  try {
    final row = await Supabase.instance.client
        .from('ngmy_settings')
        .select()
        .eq('key', '$_kPublishedAppSettingPrefix$target')
        .maybeSingle();
    final value = row?['value'];
    if (value is Map) {
      return NgmyAppProject.fromMap(Map<String, dynamic>.from(value));
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
      if (attempt < 3) await Future<void>.delayed(Duration(milliseconds: 600 * (attempt + 1)));
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
