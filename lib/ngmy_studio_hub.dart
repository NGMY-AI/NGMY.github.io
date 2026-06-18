import 'package:flutter/material.dart';

import 'ngmy_doc_share_ui.dart';
import 'ngmy_video_studio.dart';

const Color kNgmyStudioHubAccent = Color(0xFF7C3AED);
const Color kNgmyStudioHubAccent2 = Color(0xFF00B25A);

/// Bottom-nav icon for the Creator Toolkit tab.
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

/// Main tab content — 2-column grid of creator tools (Video Studio, Doc Share, …).
class NgmyCreatorHubTab extends StatelessWidget {
  const NgmyCreatorHubTab({super.key, required this.userEmail, required this.bottomScrollPadding});

  final String userEmail;
  final double bottomScrollPadding;

  @override
  Widget build(BuildContext context) {
    final tools = <_CreatorTool>[
      _CreatorTool(
        icon: Icons.movie_creation_rounded,
        colors: const [Color(0xFF6D28D9), Color(0xFF9333EA)],
        title: 'Video Studio',
        subtitle: 'Templates, clips & export',
        onTap: () => showNgmyVideoStudio(context),
      ),
      _CreatorTool(
        icon: Icons.folder_shared_rounded,
        colors: const [Color(0xFF0D9488), Color(0xFF059669)],
        title: 'Doc Share',
        subtitle: 'Upload & share any file',
        onTap: () {
          if (userEmail.trim().isEmpty) return;
          Navigator.of(context).push(
            MaterialPageRoute<void>(
              builder: (_) => NgmyDocSharePage(email: userEmail.trim()),
            ),
          );
        },
      ),
    ];

    return Scaffold(
      backgroundColor: Colors.transparent,
      body: SafeArea(
        bottom: false,
        child: CustomScrollView(
          slivers: [
            SliverToBoxAdapter(
              child: Padding(
                padding: EdgeInsets.fromLTRB(20, 10, 20, bottomScrollPadding),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const _CreatorHubTitle(),
                    const SizedBox(height: 18),
                    GridView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        mainAxisSpacing: 12,
                        crossAxisSpacing: 12,
                        childAspectRatio: 1.22,
                      ),
                      itemCount: tools.length,
                      itemBuilder: (_, i) => _CreatorToolCard(tool: tools[i]),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _CreatorHubTitle extends StatelessWidget {
  const _CreatorHubTitle();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            gradient: const LinearGradient(colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2]),
            borderRadius: BorderRadius.circular(14),
            boxShadow: [
              BoxShadow(
                color: kNgmyStudioHubAccent.withValues(alpha: 0.35),
                blurRadius: 12,
                offset: const Offset(0, 4),
              ),
            ],
          ),
          child: const Icon(Icons.auto_awesome_mosaic_rounded, color: Colors.white, size: 26),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: ShaderMask(
            shaderCallback: (bounds) => const LinearGradient(
              colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2],
            ).createShader(bounds),
            child: const Text(
              'CREATOR TOOLKIT',
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w900,
                fontSize: 22,
                letterSpacing: 1.1,
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class _CreatorTool {
  const _CreatorTool({
    required this.icon,
    required this.colors,
    required this.title,
    required this.subtitle,
    required this.onTap,
  });

  final IconData icon;
  final List<Color> colors;
  final String title;
  final String subtitle;
  final VoidCallback onTap;
}

class _CreatorToolCard extends StatelessWidget {
  const _CreatorToolCard({required this.tool});

  final _CreatorTool tool;

  @override
  Widget build(BuildContext context) {
    final surface = Theme.of(context).colorScheme.surfaceContainerHighest.withValues(alpha: 0.55);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: tool.onTap,
        borderRadius: BorderRadius.circular(22),
        child: Ink(
          padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
          decoration: BoxDecoration(
            color: surface,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: tool.colors.first.withValues(alpha: 0.35)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 52,
                height: 52,
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: tool.colors),
                  borderRadius: BorderRadius.circular(14),
                ),
                child: Icon(tool.icon, color: Colors.white, size: 32),
              ),
              const Spacer(),
              Text(
                tool.title,
                style: TextStyle(
                  color: Theme.of(context).colorScheme.onSurface,
                  fontWeight: FontWeight.w900,
                  fontSize: 14,
                ),
              ),
              const SizedBox(height: 2),
              Text(
                tool.subtitle,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.62),
                  fontSize: 10.5,
                  height: 1.25,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
