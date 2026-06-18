import 'package:flutter/material.dart';

import 'ngmy_doc_share_ui.dart';
import 'ngmy_video_studio.dart';

const Color kNgmyStudioHubAccent = Color(0xFF7C3AED);
const Color kNgmyStudioHubAccent2 = Color(0xFF00B25A);

/// Bottom-nav launcher — opens the NGMY Studio menu hub.
class NgmyStudioHubNavIcon extends StatelessWidget {
  const NgmyStudioHubNavIcon({super.key, this.dimmed = false, this.size = 30});

  final bool dimmed;
  final double size;

  @override
  Widget build(BuildContext context) {
    final fg = dimmed ? Colors.grey : Colors.white;
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        gradient: dimmed
            ? null
            : const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2],
              ),
        color: dimmed ? Colors.transparent : null,
        border: dimmed ? Border.all(color: Colors.grey.shade400, width: 1.4) : null,
        boxShadow: dimmed
            ? null
            : [
                BoxShadow(
                  color: kNgmyStudioHubAccent.withValues(alpha: 0.38),
                  blurRadius: 10,
                  offset: const Offset(0, 3),
                ),
              ],
      ),
      child: Icon(Icons.dashboard_customize_rounded, size: size * 0.58, color: fg),
    );
  }
}

void showNgmyStudioHub(BuildContext context, {required String userEmail}) {
  if (userEmail.trim().isEmpty) return;
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmyStudioHubPage(userEmail: userEmail.trim()),
    ),
  );
}

class NgmyStudioHubPage extends StatelessWidget {
  const NgmyStudioHubPage({super.key, required this.userEmail});

  final String userEmail;

  @override
  Widget build(BuildContext context) {
    const bg = Color(0xFF06080F);
    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: Colors.white,
        elevation: 0,
        title: const Text('NGMY Studio', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 0.4)),
        leading: IconButton(
          icon: const Icon(Icons.close_rounded),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(18, 8, 18, 28),
        children: [
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [Color(0xFF1E1035), Color(0xFF0F1419)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.35)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2]),
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: const Icon(Icons.auto_awesome_mosaic_rounded, color: Colors.white, size: 26),
                    ),
                    const SizedBox(width: 12),
                    const Expanded(
                      child: Text(
                        'Create & Share',
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 8),
                Text(
                  'Video templates, documents, and file sharing — saved on your device.',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 13, height: 1.4),
                ),
              ],
            ),
          ),
          const SizedBox(height: 22),
          _hubTile(
            context,
            icon: Icons.movie_creation_rounded,
            colors: const [Color(0xFF6D28D9), Color(0xFF9333EA)],
            title: 'Video Studio',
            subtitle: 'Edit templates, add clips & logos, export videos',
            onTap: () => showNgmyVideoStudio(context),
          ),
          const SizedBox(height: 14),
          _hubTile(
            context,
            icon: Icons.folder_shared_rounded,
            colors: const [Color(0xFF0D9488), Color(0xFF059669)],
            title: 'Doc Share',
            subtitle: 'Upload any file, share via QR — photos, videos, documents',
            onTap: () {
              Navigator.of(context).push(
                MaterialPageRoute<void>(
                  fullscreenDialog: true,
                  builder: (_) => NgmyDocSharePage(email: userEmail),
                ),
              );
            },
          ),
        ],
      ),
    );
  }

  Widget _hubTile(
    BuildContext context, {
    required IconData icon,
    required List<Color> colors,
    required String title,
    required String subtitle,
    required VoidCallback onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(22),
        child: Ink(
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(
            color: const Color(0xFF0F1419),
            borderRadius: BorderRadius.circular(22),
            border: Border.all(color: colors.first.withValues(alpha: 0.35)),
          ),
          child: Row(
            children: [
              Container(
                width: 54,
                height: 54,
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: colors),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Icon(icon, color: Colors.white, size: 28),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                    const SizedBox(height: 4),
                    Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 12, height: 1.35)),
                  ],
                ),
              ),
              Icon(Icons.arrow_forward_ios_rounded, size: 16, color: Colors.white.withValues(alpha: 0.45)),
            ],
          ),
        ),
      ),
    );
  }
}
