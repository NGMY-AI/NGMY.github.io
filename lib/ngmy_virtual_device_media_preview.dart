import 'package:flutter/material.dart';

import 'ngmy_studio_colors.dart';
import 'ngmy_virtual_device_media.dart';

/// Lightweight grid preview — no iframe/WebView (prevents mobile tab crashes).
class NgmyVirtualDeviceMediaPreview extends StatefulWidget {
  const NgmyVirtualDeviceMediaPreview({
    super.key,
    required this.media,
    this.compact = true,
    this.queued = false,
    this.batchLabel,
  });

  final NgmyVirtualMediaTarget media;
  final bool compact;
  final bool queued;
  final String? batchLabel;

  @override
  State<NgmyVirtualDeviceMediaPreview> createState() => _NgmyVirtualDeviceMediaPreviewState();
}

class _NgmyVirtualDeviceMediaPreviewState extends State<NgmyVirtualDeviceMediaPreview> with SingleTickerProviderStateMixin {
  late AnimationController _pulse;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1400))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final compact = widget.compact;
    return Stack(
      fit: StackFit.expand,
      children: [
        _PreviewBackdrop(media: widget.media),
        DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Colors.transparent, Colors.black.withValues(alpha: 0.55)],
            ),
          ),
        ),
        Center(
          child: FadeTransition(
            opacity: Tween<double>(begin: 0.72, end: 1).animate(CurvedAnimation(parent: _pulse, curve: Curves.easeInOut)),
            child: Icon(
              Icons.play_circle_fill_rounded,
              color: Colors.white.withValues(alpha: 0.92),
              size: compact ? 20 : 44,
            ),
          ),
        ),
        Positioned(
          top: compact ? 2 : 8,
          right: compact ? 2 : 8,
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: compact ? 3 : 6, vertical: compact ? 1 : 3),
            decoration: BoxDecoration(
              color: widget.queued ? Colors.white.withValues(alpha: 0.22) : Colors.red.shade600,
              borderRadius: BorderRadius.circular(compact ? 4 : 6),
            ),
            child: Text(
              widget.queued ? 'WAIT' : 'LIVE',
              style: TextStyle(
                color: Colors.white,
                fontSize: compact ? 5 : 9,
                fontWeight: FontWeight.w900,
                letterSpacing: 0.4,
              ),
            ),
          ),
        ),
        if (widget.batchLabel != null)
          Positioned(
            left: compact ? 3 : 8,
            top: compact ? 3 : 8,
            child: Text(
              widget.batchLabel!,
              style: TextStyle(
                color: Colors.white.withValues(alpha: 0.75),
                fontSize: compact ? 5 : 9,
                fontWeight: FontWeight.w800,
              ),
            ),
          ),
        Positioned(
          left: compact ? 3 : 8,
          bottom: compact ? 3 : 8,
          child: Text(
            widget.media.label,
            style: TextStyle(
              color: Colors.white.withValues(alpha: 0.85),
              fontSize: compact ? 6 : 11,
              fontWeight: FontWeight.w800,
            ),
          ),
        ),
      ],
    );
  }
}

class _PreviewBackdrop extends StatelessWidget {
  const _PreviewBackdrop({required this.media});

  final NgmyVirtualMediaTarget media;

  @override
  Widget build(BuildContext context) {
    final url = media.previewImageUrl;
    if (url != null && url.isNotEmpty) {
      return Image.network(
        url,
        fit: BoxFit.cover,
        gaplessPlayback: true,
        errorBuilder: (context, error, stackTrace) => _PlatformFallback(media: media),
        loadingBuilder: (context, child, progress) {
          if (progress == null) return child;
          return Stack(
            fit: StackFit.expand,
            children: [
              _PlatformFallback(media: media),
              const Center(
                child: SizedBox(
                  width: 18,
                  height: 18,
                  child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white54),
                ),
              ),
            ],
          );
        },
      );
    }
    return _PlatformFallback(media: media);
  }
}

class _PlatformFallback extends StatelessWidget {
  const _PlatformFallback({required this.media});

  final NgmyVirtualMediaTarget media;

  @override
  Widget build(BuildContext context) {
    final (colors, icon) = switch (media.platform) {
      NgmyVirtualMediaPlatform.youtube => (<Color>[const Color(0xFF1A1A1A), const Color(0xFF3D0A0A)], Icons.play_circle_fill_rounded),
      NgmyVirtualMediaPlatform.tiktok => (<Color>[const Color(0xFF0F0F0F), const Color(0xFF102028)], Icons.music_note_rounded),
      NgmyVirtualMediaPlatform.instagram => (<Color>[const Color(0xFF4A1A6B), const Color(0xFF1A2744)], Icons.camera_alt_rounded),
      NgmyVirtualMediaPlatform.facebook => (<Color>[const Color(0xFF0F172A), const Color(0xFF1E3A8A)], Icons.facebook_rounded),
      NgmyVirtualMediaPlatform.other => (<Color>[const Color(0xFF111827), const Color(0xFF1E293B)], Icons.videocam_rounded),
    };
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: colors),
      ),
      child: Center(
        child: Icon(icon, color: kNgmyStudioHubAccent.withValues(alpha: 0.55), size: 28),
      ),
    );
  }
}
