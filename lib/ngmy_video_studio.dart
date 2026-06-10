import 'dart:async';
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_studio_download.dart';
import 'ngmy_video_studio_blob_stub.dart' if (dart.library.html) 'ngmy_video_studio_blob.dart' as blob_util;
import 'ngmy_video_studio_export.dart';
import 'ngmy_video_studio_logo.dart';
import 'ngmy_video_studio_models.dart';
import 'ngmy_video_studio_painter.dart';
import 'ngmy_video_studio_picker.dart';
import 'ngmy_studio_slot_video.dart';
import 'ngmy_banner_text_style.dart';
import 'ngmy_news_banner_painter.dart';

void showNgmyVideoStudio(BuildContext context) {
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => const _NgmyVideoStudioPage(),
    ),
  );
}

class _SlotMedia {
  VideoPlayerController? controller;
  String? source;
  String? blobUrl;

  Future<void> dispose() async {
    await controller?.dispose();
    if (blobUrl != null) blob_util.revokeNgmyBlobUrl(blobUrl!);
    controller = null;
    source = null;
    blobUrl = null;
  }
}

class _NgmyVideoStudioPage extends StatefulWidget {
  const _NgmyVideoStudioPage();

  @override
  State<_NgmyVideoStudioPage> createState() => _NgmyVideoStudioPageState();
}

class _NgmyVideoStudioPageState extends State<_NgmyVideoStudioPage> {
  static const _bg = Color(0xFF06080F);
  static const _panel = Color(0xFF0F1419);
  static const _accent = Color(0xFF00B25A);

  NgmyVideoFormat _format = NgmyVideoFormat.tiktok;
  NgmyVideoTemplateId _templateId = NgmyVideoTemplateId.ttBanner0;
  bool _templatesExpanded = false;
  bool _exporting = false;
  double _exportProgress = 0;
  String _exportStatus = '';
  String? _activeSlotId;
  bool _picking = false;

  final Map<String, Rect> _slotRects = {};
  final Map<String, NgmyVideoSlotShape> _slotShapes = {};
  final Map<String, NgmySlotKind> _slotKinds = {};
  final Map<String, _SlotMedia> _slotMedia = {};
  final Map<String, Uint8List> _logoBytes = {};
  final Map<String, String> _logoPaths = {};
  final Map<String, bool> _logoVisible = {};
  final Map<String, NgmyLogoFrameStyle> _logoFrameStyles = {};
  String? _preparingSlotId;

  final _headlineC = TextEditingController();
  final _titleC = TextEditingController();
  final _subtitleC = TextEditingController();
  final _liveC = TextEditingController();
  double _headlineScale = 1.0;
  double _titleScale = 1.0;
  NgmyBannerTextStyle _bannerTextStyle = NgmyBannerTextStyle.broadcastClassic;

  NgmyVideoTemplateDef get _def => ngmyTemplateDef(_templateId);
  List<NgmyVideoTemplateDef> get _formatTemplates => ngmyTemplatesForFormat(_format);
  List<NgmyVideoSlotDef> get _logoSlots =>
      _def.slots.where((s) => s.kind == NgmySlotKind.logoAnim).toList(growable: false);

  @override
  void initState() {
    super.initState();
    _loadTemplate(_templateId, resetMedia: true);
  }

  Future<void> _disposeAllMedia() async {
    for (final m in _slotMedia.values) {
      try {
        await m.dispose();
      } catch (e) {
        debugPrint('[studio] dispose media: $e');
      }
    }
  }

  Future<void> _closeStudio() async {
    if (_exporting) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Please wait for export to finish.')),
        );
      }
      return;
    }
    FocusManager.instance.primaryFocus?.unfocus();
    await _disposeAllMedia();
    if (mounted) Navigator.of(context).pop();
  }

  @override
  void dispose() {
    for (final m in _slotMedia.values) {
      unawaited(m.dispose());
    }
    _headlineC.dispose();
    _titleC.dispose();
    _subtitleC.dispose();
    _liveC.dispose();
    super.dispose();
  }

  void _setFormat(NgmyVideoFormat f) {
    if (_format == f) return;
    setState(() {
      _format = f;
      _templateId = ngmyDefaultTemplateFor(f);
      _loadTemplate(_templateId, resetMedia: false);
      for (final s in _def.slots) {
        _slotRects[s.id] = s.defaultRect(f);
      }
    });
  }

  void _loadTemplate(NgmyVideoTemplateId id, {required bool resetMedia}) {
    final def = ngmyTemplateDef(id);
    _headlineC.text = def.defaultHeadline;
    _titleC.text = def.defaultTitle;
    _subtitleC.text = def.defaultSubtitle;
    _liveC.text = def.defaultLive;
    _slotRects.clear();
    _slotShapes.clear();
    _slotKinds.clear();
    for (final s in def.slots) {
      _slotRects[s.id] = s.defaultRect(_format);
      _slotShapes[s.id] = s.shape;
      _slotKinds[s.id] = s.kind;
      if (s.kind == NgmySlotKind.logoAnim) {
        _logoVisible.putIfAbsent(s.id, () => true);
        _logoFrameStyles.putIfAbsent(s.id, () => NgmyLogoFrameStyle.goldRing);
      }
    }
    for (final s in def.slots) {
      _slotMedia.putIfAbsent(s.id, () => _SlotMedia());
    }
    if (resetMedia) {
      for (final m in _slotMedia.values) {
        unawaited(m.dispose());
      }
      _slotMedia.clear();
      _logoBytes.clear();
      _logoPaths.clear();
      for (final s in def.slots) {
        _slotMedia[s.id] = _SlotMedia();
      }
    }
    _activeSlotId = def.slots.isNotEmpty ? def.slots.first.id : null;
  }

  Future<void> _pickVideoForSlot(String slotId) async {
    if (_picking) return;
    setState(() {
      _picking = true;
      _preparingSlotId = slotId;
    });
    try {
      final picked = await pickNgmyStudioVideo();
      if (picked == null) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('No video selected. Try an MP4 or MOV file.')),
          );
        }
        return;
      }

      await Future<void>.delayed(Duration.zero);
      if (!mounted) return;

      if (!_slotMedia.containsKey(slotId)) {
        _slotMedia[slotId] = _SlotMedia();
      }
      final media = _slotMedia[slotId]!;
      try {
        await media.dispose();
      } catch (e) {
        debugPrint('[studio] media dispose: $e');
      }

      if (!mounted) return;

      String? source;
      if (kIsWeb) {
        final path = picked.path;
        if (path != null && path.isNotEmpty) {
          source = path;
        } else {
          final bytes = picked.bytes;
          if (bytes == null || bytes.isEmpty) {
            throw StateError('Could not read video. Try a smaller MP4 file.');
          }
          source = blob_util.createNgmyBlobUrl(bytes, picked.mime);
          if (source.isEmpty) {
            throw StateError('Could not prepare video on this browser.');
          }
        }
        media.blobUrl = source.startsWith('blob:') ? source : null;
      } else {
        source = picked.path;
        if (source == null || source.isEmpty) {
          throw StateError('Invalid video file path.');
        }
      }

      media.source = source;
      media.controller = null;
      _slotMedia[slotId] = media;
      if (!mounted) return;
      setState(() => _activeSlotId = slotId);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Video added — stays on your device until you download.'),
          ),
        );
      }
    } catch (e) {
      await _slotMedia[slotId]?.dispose();
      _slotMedia.remove(slotId);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Upload failed: $e'), backgroundColor: Colors.red.shade700),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _picking = false;
          _preparingSlotId = null;
        });
      }
    }
  }

  Future<void> _pickLogoForSlot(String slotId) async {
    if (_picking) return;
    setState(() {
      _picking = true;
      _preparingSlotId = slotId;
    });
    try {
      final picked = await pickNgmyStudioLogo();
      if (picked == null || !picked.hasContent) return;
      await Future<void>.delayed(Duration.zero);
      if (!mounted) return;
      Uint8List? logoBytes;
      if (!kIsWeb && picked.filePath != null) {
        try {
          final bytes = await File(picked.filePath!).readAsBytes();
          if (bytes.isNotEmpty) logoBytes = bytes;
        } catch (e) {
          debugPrint('[studio] logo bytes read: $e');
        }
      }
      setState(() {
        if (picked.filePath != null) {
          _logoPaths[slotId] = picked.filePath!;
          if (logoBytes != null) {
            _logoBytes[slotId] = logoBytes;
          } else {
            _logoBytes.remove(slotId);
          }
        } else if (picked.bytes != null) {
          _logoBytes[slotId] = picked.bytes!;
          _logoPaths.remove(slotId);
        }
        _activeSlotId = slotId;
      });
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Logo added — it will animate like a news pop-up.')),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Logo upload failed: $e')));
      }
    } finally {
      if (mounted) {
        setState(() {
          _picking = false;
          _preparingSlotId = null;
        });
      }
    }
  }

  NgmyVideoStudioExportConfig _exportConfig() {
    final sources = <String, String>{};
    for (final e in _slotMedia.entries) {
      if (e.value.source != null && e.value.source!.isNotEmpty) {
        sources[e.key] = e.value.source!;
      }
    }
    final logos = <String, String>{};
    for (final e in _logoBytes.entries) {
      final url = ngmyLogoBytesToDataUrl(e.value);
      if (url != null) logos[e.key] = url;
    }
    for (final e in _logoPaths.entries) {
      final path = e.value.trim();
      if (path.isEmpty) continue;
      if (path.startsWith('blob:') || path.startsWith('data:') || path.startsWith('http')) {
        logos.putIfAbsent(e.key, () => path);
      }
    }
    return NgmyVideoStudioExportConfig(
      templateId: _templateId,
      format: _format,
      backgroundAsset: _def.assetPath,
      videoSourcesBySlot: sources,
      logoDataUrlBySlot: logos,
      slotRects: Map.from(_slotRects),
      slotShapes: Map.from(_slotShapes),
      slotKinds: Map.from(_slotKinds),
      logoVisibleBySlot: Map.from(_logoVisible),
      logoFrameStyleBySlot: Map.from(_logoFrameStyles),
      headline: _headlineC.text.trim(),
      title: _titleC.text.trim(),
      subtitle: _subtitleC.text.trim(),
      liveLabel: _liveC.text.trim(),
      headlineFontScale: _headlineScale,
      titleFontScale: _titleScale,
      showTextOverlay: _def.showTextOverlay,
      newsBannerStyle: _def.newsBannerStyle,
      newsTopAccent: _def.newsTopAccent,
      bannerTextStyle: _bannerTextStyle,
    );
  }

  Future<void> _showIosSaveVideoDialog(String hint) async {
    if (!mounted) return;
    final name = ngmyStagedIosStudioVideoName ?? 'your video';
    final displayName = name.toLowerCase().endsWith('.webm')
        ? '${name.substring(0, name.length - 5)}.mp4'
        : name;
    await showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1A1A2E),
        title: const Text('Save your video', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
        content: Text(
          'Tap Save below. Your video is exported as MP4 so it can go into Photos.\n\n'
          '• In the menu, tap Save Video (or Add to Photos).\n'
          '• Do not pick "Save to Files" only — choose Save Video for your gallery.\n\n'
          'File: $displayName',
          style: const TextStyle(color: Colors.white70, height: 1.35, fontSize: 13),
        ),
        actions: [
          TextButton(
            onPressed: () {
              ngmyClearStagedIosStudioVideo();
              Navigator.pop(ctx);
            },
            child: const Text('Cancel'),
          ),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFF00B25A)),
            onPressed: () async {
              // Share/download must run on the button tap (iOS requires user gesture).
              final saved = await ngmySaveStagedStudioVideo();
              if (ctx.mounted) Navigator.pop(ctx);
              if (!mounted) return;
              final wasWebm = name.toLowerCase().endsWith('.webm');
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(
                    saved
                        ? 'In the menu, tap Save Video or Add to Photos.'
                        : wasWebm
                            ? 'This file was WebM (not supported in Photos). Tap Download again — the app now exports MP4 for iPhone.'
                            : 'Video opened — tap Share ↗ at the bottom, then Save Video or Add to Photos.',
                  ),
                  duration: const Duration(seconds: 9),
                ),
              );
            },
            child: const Text('Save to Photos / Files'),
          ),
        ],
      ),
    );
  }

  Future<void> _export() async {
    final hasVideo = _slotMedia.values.any((m) => m.source != null && m.source!.isNotEmpty);
    if (!hasVideo) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Upload a video into at least one screen frame.')),
      );
      return;
    }
    final cfg = _exportConfig();
    final instant = cfg.canDirectDownload;
    setState(() {
      _exporting = true;
      _exportProgress = instant ? 0.5 : 0;
      _exportStatus = instant ? 'Saving your video…' : 'Preparing export…';
    });
    try {
      final msg = cfg.canDirectDownload
          ? await exportNgmyVideoStudioDirect(videoSourceUrl: cfg.videoSourcesBySlot.values.first)
          : await exportNgmyVideoStudioComposed(
              config: cfg,
              onProgress: (p, status) {
                if (!mounted) return;
                setState(() {
                  _exportProgress = p;
                  _exportStatus = status;
                });
              },
            );
      if (mounted) {
        final lower = msg.toLowerCase();
        if (ngmyHasStagedIosStudioVideo || lower.contains('tap open & save')) {
          await _showIosSaveVideoDialog(msg);
        } else if (lower.startsWith('export failed') ||
            lower.contains('not added') ||
            lower.contains('unsupported')) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text(msg), backgroundColor: Colors.red.shade700, duration: const Duration(seconds: 9)),
          );
        } else {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text(msg), duration: const Duration(seconds: 6)),
          );
        }
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Export failed: $e'), backgroundColor: Colors.red.shade700),
        );
      }
    } finally {
      if (mounted) {
        setState(() {
          _exporting = false;
          _exportStatus = '';
          _exportProgress = 0;
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final wide = MediaQuery.sizeOf(context).width > 760;
    return PopScope(
      canPop: !_picking && !_exporting,
      onPopInvokedWithResult: (didPop, _) {
        if (didPop) return;
        if (_picking || _exporting) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text(_exporting ? 'Export in progress…' : 'Loading video…'),
            ),
          );
        }
      },
      child: Scaffold(
      backgroundColor: _bg,
      appBar: AppBar(
        backgroundColor: _panel,
        foregroundColor: Colors.white,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_rounded),
          onPressed: _closeStudio,
        ),
        title: const Row(
          children: [
            Icon(Icons.live_tv_rounded, color: _accent, size: 22),
            SizedBox(width: 10),
            Text('NGMY Studio', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17)),
          ],
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 4),
            child: FilledButton.icon(
              onPressed: _exporting ? null : _export,
              style: FilledButton.styleFrom(
                backgroundColor: const Color(0xFF00B25A),
                foregroundColor: Colors.white,
                disabledBackgroundColor: const Color(0xFF00B25A).withValues(alpha: 0.55),
                disabledForegroundColor: Colors.white70,
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              ),
              icon: _exporting
                  ? const SizedBox(
                      width: 16,
                      height: 16,
                      child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                    )
                  : const Icon(Icons.download_rounded, size: 18),
              label: Text(_exporting ? (_exportStatus.isNotEmpty ? _exportStatus : 'Saving…') : 'Download'),
            ),
          ),
          IconButton(icon: const Icon(Icons.close_rounded), onPressed: _closeStudio),
        ],
      ),
      body: wide
          ? Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(flex: 5, child: _previewScroll()),
                Expanded(flex: 4, child: _controlsScroll()),
              ],
            )
          : ListView(
              padding: const EdgeInsets.all(12),
              children: [
                _formatBar(),
                const SizedBox(height: 10),
                _previewCard(),
                const SizedBox(height: 12),
                _templatePicker(),
                const SizedBox(height: 12),
                ..._controlSections(),
              ],
            ),
      ),
    );
  }

  Widget _previewScroll() => ListView(
        padding: const EdgeInsets.all(14),
        children: [_formatBar(), const SizedBox(height: 10), _previewCard()],
      );

  Widget _controlsScroll() => ListView(
        padding: const EdgeInsets.all(14),
        children: [
          _templatePicker(),
          const SizedBox(height: 14),
          ..._controlSections(),
        ],
      );

  Widget _formatBar() {
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: Colors.white12),
      ),
      child: Row(
        children: kNgmyStudioFormatOrder.map((f) {
          final sel = f == _format;
          return Expanded(
            child: Padding(
              padding: const EdgeInsets.all(3),
              child: Material(
                color: sel ? _accent : Colors.transparent,
                borderRadius: BorderRadius.circular(10),
                child: InkWell(
                  borderRadius: BorderRadius.circular(10),
                  onTap: () => _setFormat(f),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    child: Column(
                      children: [
                        Icon(
                          f == NgmyVideoFormat.youtube ? Icons.smart_display_outlined : Icons.phone_android_outlined,
                          color: sel ? Colors.white : Colors.white60,
                          size: 22,
                        ),
                        const SizedBox(height: 4),
                        Text(f.label, style: TextStyle(color: sel ? Colors.white : Colors.white60, fontWeight: FontWeight.w900, fontSize: 12)),
                        Text(f.sizeLabel, style: TextStyle(color: sel ? Colors.white70 : Colors.white38, fontSize: 9)),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }

  Widget _templatePicker() {
    final templates = _formatTemplates;
    return Material(
      color: _panel,
      elevation: 0,
      clipBehavior: Clip.antiAlias,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: const BorderSide(color: Colors.white12),
      ),
      child: Theme(
        data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
        child: ExpansionTile(
          backgroundColor: Colors.transparent,
          collapsedBackgroundColor: Colors.transparent,
          initiallyExpanded: _templatesExpanded,
          onExpansionChanged: (v) => setState(() => _templatesExpanded = v),
          iconColor: Colors.white70,
          collapsedIconColor: Colors.white70,
          title: Row(
            children: [
              Icon(_def.icon, color: _accent, size: 20),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      '${_format.label} templates',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14),
                    ),
                    Text(_def.name, style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 11)),
                  ],
                ),
              ),
            ],
          ),
          subtitle: Text(
            '25 broadcast overlays per format — video, logo, frames, text, download',
            style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 10),
          ),
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(10, 0, 10, 12),
              child: GridView.builder(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  childAspectRatio: 1.2,
                  crossAxisSpacing: 8,
                  mainAxisSpacing: 8,
                ),
                itemCount: templates.length,
                itemBuilder: (_, i) {
                  final t = templates[i];
                  final sel = t.id == _templateId;
                  return Material(
                    color: sel ? _accent.withOpacity(0.2) : Colors.white.withOpacity(0.04),
                    borderRadius: BorderRadius.circular(12),
                    child: InkWell(
                      borderRadius: BorderRadius.circular(12),
                      onTap: () {
                        setState(() {
                          _templateId = t.id;
                          _loadTemplate(t.id, resetMedia: true);
                          _templatesExpanded = false;
                        });
                      },
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: sel ? _accent : Colors.white12, width: sel ? 2 : 1),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Expanded(
                              child: ClipRRect(
                                borderRadius: const BorderRadius.vertical(top: Radius.circular(11)),
                                child: t.usesPhotoBackdrop
                                    ? Image.asset(t.assetPath!, fit: BoxFit.cover)
                                    : Stack(
                                        fit: StackFit.expand,
                                        children: [
                                          CustomPaint(
                                            painter: NgmyVideoTemplatePainter(
                                              templateId: t.id,
                                              format: t.forFormat,
                                              slotRects: {for (final s in t.slots) s.id: s.defaultRect(t.forFormat)},
                                              slotShapes: {for (final s in t.slots) s.id: s.shape},
                                              headline: t.defaultHeadline,
                                              title: t.defaultTitle,
                                              subtitle: t.defaultSubtitle,
                                              liveLabel: t.defaultLive,
                                              headlineFontScale: 0.7,
                                              titleFontScale: 0.65,
                                              layer: NgmyTemplatePaintLayer.background,
                                            ),
                                          ),
                                          CustomPaint(
                                            painter: NgmyVideoTemplatePainter(
                                              templateId: t.id,
                                              format: t.forFormat,
                                              slotRects: {for (final s in t.slots) s.id: s.defaultRect(t.forFormat)},
                                              slotShapes: {for (final s in t.slots) s.id: s.shape},
                                              headline: t.defaultHeadline,
                                              title: t.defaultTitle,
                                              subtitle: t.defaultSubtitle,
                                              liveLabel: t.defaultLive,
                                              headlineFontScale: 0.7,
                                              titleFontScale: 0.65,
                                              layer: NgmyTemplatePaintLayer.foreground,
                                            ),
                                          ),
                                        ],
                                      ),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(6),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(t.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: sel ? Colors.white : Colors.white70, fontWeight: FontWeight.w800, fontSize: 10)),
                                  Text('${t.slots.length} slot${t.slots.length > 1 ? "s" : ""} · ${t.category}', style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 8)),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _previewCard() {
    return Container(
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white12),
      ),
      padding: const EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text('Preview · ${_format.sizeLabel}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
          const SizedBox(height: 8),
          AspectRatio(
            aspectRatio: _format.aspectRatio,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: _buildStage(),
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'Video fills the frame. Overlays sit inset with margins — edit text, logo, and scale.',
            style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 10, height: 1.35),
          ),
        ],
      ),
    );
  }

  Widget _buildStage() {
    return LayoutBuilder(
      builder: (context, constraints) {
        final size = Size(constraints.maxWidth, constraints.maxHeight);
        final children = <Widget>[];

        if (_def.usesPhotoBackdrop) {
          children.add(
            Positioned.fill(
              child: Image.asset(_def.assetPath!, fit: BoxFit.cover, alignment: Alignment.center),
            ),
          );
        } else {
          children.add(
            CustomPaint(
              painter: NgmyVideoTemplatePainter(
                templateId: _templateId,
                format: _format,
                slotRects: _slotRects,
                slotShapes: _slotShapes,
                headline: _headlineC.text,
                title: _titleC.text,
                subtitle: _subtitleC.text,
                liveLabel: _liveC.text,
                headlineFontScale: _headlineScale,
                titleFontScale: _titleScale,
                layer: NgmyTemplatePaintLayer.background,
              ),
              child: const SizedBox.expand(),
            ),
          );
        }

        if (_def.isNewsBanner) {
          for (final slot in _def.slots) {
            if (slot.kind != NgmySlotKind.logoAnim) children.add(_slotLayer(slot, size));
          }
          children.add(
            Positioned.fill(
              child: CustomPaint(
                painter: NgmyNewsBannerPainter(
                  style: _def.newsBannerStyle!,
                  headline: _headlineC.text,
                  title: _titleC.text,
                  subtitle: _subtitleC.text,
                  liveLabel: _liveC.text,
                  topAccent: _def.newsTopAccent,
                  scale: _headlineScale,
                  textStyle: _bannerTextStyle,
                ),
              ),
            ),
          );
          for (final slot in _def.slots) {
            if (slot.kind == NgmySlotKind.logoAnim) children.add(_slotLayer(slot, size));
          }
          for (final slot in _def.slots) {
            children.add(_slotTap(slot, size));
          }
          return Stack(fit: StackFit.expand, children: children);
        }

        for (final slot in _def.slots) {
          children.add(_slotLayer(slot, size));
        }

        if (!_def.usesPhotoBackdrop) {
          children.add(
            CustomPaint(
              painter: NgmyVideoTemplatePainter(
                templateId: _templateId,
                format: _format,
                slotRects: _slotRects,
                slotShapes: _slotShapes,
                headline: _headlineC.text,
                title: _titleC.text,
                subtitle: _subtitleC.text,
                liveLabel: _liveC.text,
                headlineFontScale: _headlineScale,
                titleFontScale: _titleScale,
                layer: NgmyTemplatePaintLayer.foreground,
              ),
              child: const SizedBox.expand(),
            ),
          );
        }

        if (!_def.usesPhotoBackdrop) {
          children.add(
            CustomPaint(
              painter: NgmyVideoTemplatePainter(
                templateId: _templateId,
                format: _format,
                slotRects: _slotRects,
                slotShapes: _slotShapes,
                headline: _headlineC.text,
                title: _titleC.text,
                subtitle: _subtitleC.text,
                liveLabel: _liveC.text,
                headlineFontScale: _headlineScale,
                titleFontScale: _titleScale,
                layer: NgmyTemplatePaintLayer.frameBorders,
              ),
              child: const SizedBox.expand(),
            ),
          );
        }

        for (final slot in _def.slots) {
          children.add(_slotTap(slot, size));
        }

        return Stack(fit: StackFit.expand, children: children);
      },
    );
  }

  Rect _px(Rect n, Size size) => Rect.fromLTWH(n.left * size.width, n.top * size.height, n.width * size.width, n.height * size.height);

  Widget _slotLayer(NgmyVideoSlotDef slot, Size size) {
    final rect = _slotRects[slot.id];
    if (rect == null) return const SizedBox.shrink();
    final px = _px(rect, size);

    if (slot.kind == NgmySlotKind.logoAnim) {
      if (_logoVisible[slot.id] == false) return const SizedBox.shrink();
      return Positioned.fromRect(
        rect: px,
        child: ConstrainedBox(
          constraints: const BoxConstraints(minWidth: 20, minHeight: 20),
          child: NgmyStudioLogoAnim(
            imageBytes: _logoBytes[slot.id],
            filePath: _logoPaths[slot.id],
            shape: _slotShapes[slot.id] ?? NgmyVideoSlotShape.rect,
            frameStyle: _logoFrameStyles[slot.id] ?? NgmyLogoFrameStyle.goldRing,
          ),
        ),
      );
    }

    final media = _slotMedia[slot.id];
    final src = media?.source;
    Widget child;
    if (src != null && src.isNotEmpty) {
      child = NgmyStudioSlotVideo(key: ValueKey('${slot.id}|$src'), source: src);
    } else {
      child = Container(
        color: Colors.black87,
        alignment: Alignment.center,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(Icons.tv_rounded, color: Colors.white54, size: 28),
            const SizedBox(height: 4),
            Text(slot.label, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white54, fontSize: 9)),
          ],
        ),
      );
    }

    if (slot.shape == NgmyVideoSlotShape.circle) {
      child = ClipOval(child: child);
    } else {
      child = ClipRRect(borderRadius: BorderRadius.circular(2), child: child);
    }

    return Positioned.fromRect(
      rect: px,
      child: ConstrainedBox(
        constraints: const BoxConstraints(minWidth: 24, minHeight: 24),
        child: child,
      ),
    );
  }

  Widget _slotTap(NgmyVideoSlotDef slot, Size size) {
    final rect = _slotRects[slot.id];
    if (rect == null) return const SizedBox.shrink();
    final px = _px(rect, size);
    final active = _activeSlotId == slot.id;
    final hasVideo = slot.kind == NgmySlotKind.video &&
        (_slotMedia[slot.id]?.source?.isNotEmpty ?? false);

    void onDrag(DragUpdateDetails d) {
      setState(() {
        var r = _slotRects[slot.id]!;
        var l = (r.left + d.delta.dx / size.width).clamp(0.0, 1.0 - r.width);
        var t = (r.top + d.delta.dy / size.height).clamp(0.0, 1.0 - r.height);
        _slotRects[slot.id] = Rect.fromLTWH(l, t, r.width, r.height);
      });
    }

    return Positioned.fromRect(
      rect: px,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          Positioned.fill(
            child: IgnorePointer(
              ignoring: active && hasVideo,
              child: GestureDetector(
                onTap: () => setState(() => _activeSlotId = slot.id),
                onPanUpdate: active && !hasVideo ? onDrag : null,
                child: Container(
                  decoration: BoxDecoration(
                    border: Border.all(color: active ? const Color(0xFFFF3B8A) : Colors.transparent, width: 2),
                  ),
                ),
              ),
            ),
          ),
          if (active)
            Positioned(
              right: 2,
              bottom: 2,
              child: GestureDetector(
                onPanUpdate: onDrag,
                child: Container(
                  width: 28,
                  height: 28,
                  decoration: BoxDecoration(
                    color: Colors.black54,
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: const Icon(Icons.open_with, color: Colors.white, size: 16),
                ),
              ),
            ),
        ],
      ),
    );
  }

  List<Widget> _controlSections() {
    NgmyVideoSlotDef? slotDef;
    if (_activeSlotId != null) {
      for (final s in _def.slots) {
        if (s.id == _activeSlotId) {
          slotDef = s;
          break;
        }
      }
    }

    return [
      Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: _panel, borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Media layers', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
            if (_picking)
              LinearProgressIndicator(
                minHeight: 2,
                color: _accent,
                semanticsLabel: _preparingSlotId == null ? 'Working…' : 'Preparing preview…',
              ),
            if (_logoSlots.isNotEmpty) ...[
              const SizedBox(height: 8),
              ..._logoSlots.map((logoSlot) {
                final visible = _logoVisible[logoSlot.id] ?? true;
                return SwitchListTile(
                  contentPadding: EdgeInsets.zero,
                  dense: true,
                  title: Text(
                    _logoSlots.length == 1 ? 'Show brand logo' : 'Show ${logoSlot.label}',
                    style: const TextStyle(color: Colors.white, fontSize: 12),
                  ),
                  subtitle: Text(
                    visible ? 'Logo slot visible in preview & export' : 'Logo slot hidden (no upload needed)',
                    style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 10),
                  ),
                  value: visible,
                  activeThumbColor: _accent,
                  onChanged: _picking
                      ? null
                      : (v) => setState(() {
                            _logoVisible[logoSlot.id] = v;
                            _activeSlotId = logoSlot.id;
                          }),
                );
              }),
            ],
            const SizedBox(height: 8),
            ..._def.slots.map((s) {
              final isLogo = s.kind == NgmySlotKind.logoAnim;
              final has = isLogo
                  ? (_logoBytes.containsKey(s.id) || _logoPaths.containsKey(s.id))
                  : (_slotMedia[s.id]?.source != null);
              return Padding(
                padding: const EdgeInsets.only(bottom: 6),
                child: OutlinedButton.icon(
                  onPressed: _picking
                      ? null
                      : () {
                          setState(() => _activeSlotId = s.id);
                          if (isLogo) {
                            _pickLogoForSlot(s.id);
                          } else {
                            _pickVideoForSlot(s.id);
                          }
                        },
                  icon: Icon(
                    isLogo ? Icons.animation : Icons.upload_file_rounded,
                    size: 18,
                    color: has ? Colors.greenAccent : Colors.white70,
                  ),
                  label: Text(s.label, style: const TextStyle(fontSize: 12)),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: Colors.white,
                    side: BorderSide(color: _activeSlotId == s.id ? _accent : Colors.white24),
                    backgroundColor: _activeSlotId == s.id ? _accent.withOpacity(0.12) : null,
                  ),
                ),
              );
            }),
          ],
        ),
      ),
      if (slotDef != null) ...[
        Builder(
          builder: (context) {
            final sid = slotDef!.id;
            final rect = _slotRects[sid];
            if (rect == null) return const SizedBox.shrink();
            final isLogo = slotDef.kind == NgmySlotKind.logoAnim;
            return Column(
              children: [
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: _panel, borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(isLogo ? 'Brand logo' : 'Resize: ${slotDef.label}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12)),
                      if (isLogo) ...[
                        const SizedBox(height: 6),
                        SwitchListTile(
                          contentPadding: EdgeInsets.zero,
                          dense: true,
                          title: const Text('Show brand logo', style: TextStyle(color: Colors.white, fontSize: 12)),
                          value: _logoVisible[sid] ?? true,
                          activeThumbColor: _accent,
                          onChanged: (v) => setState(() => _logoVisible[sid] = v),
                        ),
                        Text('Shape', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 10)),
                        const SizedBox(height: 4),
                        Row(
                          children: [
                            _logoShapeChip(sid, NgmyVideoSlotShape.circle, Icons.account_circle_outlined, 'Circle'),
                            const SizedBox(width: 8),
                            _logoShapeChip(sid, NgmyVideoSlotShape.rect, Icons.crop_square_rounded, 'Rectangle'),
                          ],
                        ),
                        const SizedBox(height: 10),
                        Text('Logo frame', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 10)),
                        const SizedBox(height: 6),
                        Wrap(
                          spacing: 6,
                          runSpacing: 6,
                          children: NgmyLogoFrameStyle.values.map((f) {
                            final sel = (_logoFrameStyles[sid] ?? NgmyLogoFrameStyle.goldRing) == f;
                            return ChoiceChip(
                              label: Text(f.label, style: TextStyle(fontSize: 9, color: sel ? Colors.white : Colors.white70)),
                              selected: sel,
                              selectedColor: _accent.withOpacity(0.35),
                              backgroundColor: Colors.white.withOpacity(0.06),
                              side: BorderSide(color: sel ? _accent : Colors.white24),
                              onSelected: (_) => setState(() => _logoFrameStyles[sid] = f),
                            );
                          }).toList(),
                        ),
                        const SizedBox(height: 8),
                      ],
                      _slider('Width', rect.width, isLogo ? 0.06 : 0.08, isLogo ? 0.42 : 0.98, (v) {
                        setState(() {
                          final r = _slotRects[sid]!;
                          _slotRects[sid] = Rect.fromLTWH(r.left, r.top, v, r.height);
                        });
                      }),
                      _slider('Height', rect.height, isLogo ? 0.05 : 0.06, isLogo ? 0.38 : 0.92, (v) {
                        setState(() {
                          final r = _slotRects[sid]!;
                          _slotRects[sid] = Rect.fromLTWH(r.left, r.top, r.width, v);
                        });
                      }),
                    ],
                  ),
                ),
              ],
            );
          },
        ),
      ],
      if (_def.showTextOverlay || _def.isNewsBanner) ...[
        const SizedBox(height: 12),
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(color: _panel, borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                _def.isNewsBanner ? 'Overlay text' : 'Text overlays',
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13),
              ),
              const SizedBox(height: 4),
              Text(
                'Main banner · brand name · social left · social right',
                style: TextStyle(color: Colors.white.withOpacity(0.45), fontSize: 10),
              ),
              const SizedBox(height: 8),
              _field('Main banner text', _headlineC, maxLines: 3),
              _field('Brand / channel name', _titleC),
              _field('Social handle (left)', _subtitleC),
              _field('Social handle (right)', _liveC),
              const SizedBox(height: 8),
              Text('Brand & social text style', style: TextStyle(color: Colors.white.withOpacity(0.55), fontSize: 10)),
              const SizedBox(height: 6),
              Wrap(
                spacing: 6,
                runSpacing: 6,
                children: NgmyBannerTextStyle.values.map((s) {
                  final sel = _bannerTextStyle == s;
                  return ChoiceChip(
                    label: Text(s.label, style: TextStyle(fontSize: 9, color: sel ? Colors.white : Colors.white70)),
                    selected: sel,
                    selectedColor: _accent.withOpacity(0.35),
                    backgroundColor: Colors.white.withOpacity(0.06),
                    side: BorderSide(color: sel ? _accent : Colors.white24),
                    onSelected: (_) => setState(() => _bannerTextStyle = s),
                  );
                }).toList(),
              ),
              _slider('Overlay scale', _headlineScale, 0.6, 1.8, (v) => setState(() => _headlineScale = v)),
            ],
          ),
        ),
      ],
    ];
  }

  Widget _field(String label, TextEditingController c, {int maxLines = 1}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: TextField(
        controller: c,
        maxLines: maxLines,
        onChanged: (_) => setState(() {}),
        style: const TextStyle(color: Colors.white, fontSize: 13),
        decoration: InputDecoration(
          labelText: label,
          labelStyle: TextStyle(color: Colors.white.withOpacity(0.6), fontSize: 11),
          filled: true,
          fillColor: Colors.white.withOpacity(0.06),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
        ),
      ),
    );
  }

  Widget _logoShapeChip(String sid, NgmyVideoSlotShape shape, IconData icon, String label) {
    final sel = (_slotShapes[sid] ?? NgmyVideoSlotShape.rect) == shape;
    return Expanded(
      child: Material(
        color: sel ? _accent.withOpacity(0.22) : Colors.white.withOpacity(0.05),
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          borderRadius: BorderRadius.circular(10),
          onTap: () => setState(() => _slotShapes[sid] = shape),
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 8),
            child: Column(
              children: [
                Icon(icon, color: sel ? _accent : Colors.white54, size: 20),
                const SizedBox(height: 2),
                Text(label, style: TextStyle(color: sel ? Colors.white : Colors.white60, fontSize: 9, fontWeight: FontWeight.w700)),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _slider(String label, double value, double min, double max, ValueChanged<double> onChanged) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: TextStyle(color: Colors.white.withOpacity(0.65), fontSize: 10)),
        Slider(value: value.clamp(min, max), min: min, max: max, activeColor: _accent, onChanged: onChanged),
      ],
    );
  }
}
