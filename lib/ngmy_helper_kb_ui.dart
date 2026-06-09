import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_helper_kb.dart';
import 'ngmy_worksheet_helpers.dart';

/// User-facing Help Topics UI (non-AI) — category grid + Q&A thread.
class NgmyHelperKbHub extends StatefulWidget {
  final List<NgmyHelperKbCategory> categories;
  final String logoUrl;
  final Widget Function(String logoUrl, {double size}) logoBuilder;
  final void Function(NgmyHelperKbCategory category, NgmyHelperKbQuestion question) onQuestionAsked;
  final List<Map<String, dynamic>> kbThread;
  final bool showTapToSwitch;
  final VoidCallback? onTapLogoSwitch;

  const NgmyHelperKbHub({
    super.key,
    required this.categories,
    required this.logoUrl,
    required this.logoBuilder,
    required this.onQuestionAsked,
    required this.kbThread,
    this.showTapToSwitch = false,
    this.onTapLogoSwitch,
  });

  @override
  State<NgmyHelperKbHub> createState() => _NgmyHelperKbHubState();
}

class _NgmyHelperKbHubState extends State<NgmyHelperKbHub> {
  String? _selectedCategoryId;
  final ScrollController _threadScroll = ScrollController();

  NgmyHelperKbCategory? get _selectedCategory {
    if (_selectedCategoryId == null) return null;
    for (final c in widget.categories) {
      if (c.id == _selectedCategoryId) return c;
    }
    return null;
  }

  void _askQuestion(NgmyHelperKbQuestion q) {
    final cat = _selectedCategory;
    if (cat == null) return;
    widget.onQuestionAsked(cat, q);
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_threadScroll.hasClients) {
        _threadScroll.animateTo(
          _threadScroll.position.maxScrollExtent,
          duration: const Duration(milliseconds: 280),
          curve: Curves.easeOut,
        );
      }
    });
  }

  @override
  void dispose() {
    _threadScroll.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final cat = _selectedCategory;
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 14),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            const Color(0xFFE0F2FE).withValues(alpha: 0.55),
            const Color(0xFFF0FDF4).withValues(alpha: 0.35),
            Colors.white.withValues(alpha: 0.9),
          ],
        ),
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: const Color(0xFFBAE6FD).withValues(alpha: 0.5)),
      ),
      child: Column(
        children: [
          Expanded(
            child: cat == null ? _buildCategoryGrid() : _buildQuestionList(cat),
          ),
          if (widget.kbThread.isNotEmpty) _buildThread(),
        ],
      ),
    );
  }

  Widget _buildCategoryGrid() {
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 18, 16, 16),
      children: [
        Center(
          child: GestureDetector(
            onTap: widget.onTapLogoSwitch,
            child: Column(
              children: [
                Container(
                  width: 72,
                  height: 72,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: Colors.white,
                    boxShadow: [
                      BoxShadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.25), blurRadius: 16, spreadRadius: 2),
                      BoxShadow(color: const Color(0xFF3B82F6).withValues(alpha: 0.18), blurRadius: 12),
                    ],
                    border: Border.all(color: const Color(0xFF93C5FD), width: 2),
                  ),
                  child: ClipOval(child: widget.logoBuilder(widget.logoUrl, size: 72)),
                ),
                if (widget.showTapToSwitch) ...[
                  const SizedBox(height: 6),
                  const Text('Tap to switch', style: TextStyle(color: Color(0xFF16A34A), fontWeight: FontWeight.w700, fontSize: 12)),
                ],
              ],
            ),
          ),
        ),
        const SizedBox(height: 14),
        const Text(
          'Hi! I\'m NGMY Helper 👋',
          textAlign: TextAlign.center,
          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: Color(0xFF0F172A)),
        ),
        const SizedBox(height: 6),
        const Text(
          'Select a category below to find answers to common NGMY questions:',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 13, color: Color(0xFF64748B), height: 1.35),
        ),
        const SizedBox(height: 18),
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            mainAxisSpacing: 12,
            crossAxisSpacing: 12,
            childAspectRatio: 0.82,
          ),
          itemCount: widget.categories.length,
          itemBuilder: (_, i) {
            final c = widget.categories[i];
            return _CategoryTile(
              category: c,
              onTap: () => setState(() => _selectedCategoryId = c.id),
            );
          },
        ),
      ],
    );
  }

  Widget _buildQuestionList(NgmyHelperKbCategory cat) {
    final sorted = List<NgmyHelperKbQuestion>.from(cat.questions)..sort((a, b) => a.sortOrder.compareTo(b.sortOrder));
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
          child: Row(
            children: [
              IconButton(
                onPressed: () => setState(() => _selectedCategoryId = null),
                icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 18),
                color: const Color(0xFF334155),
              ),
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: Color(cat.colorValue).withValues(alpha: 0.15),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(cat.icon, color: Color(cat.colorValue), size: 22),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Text(cat.title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: Color(0xFF0F172A))),
              ),
            ],
          ),
        ),
        const Padding(
          padding: EdgeInsets.fromLTRB(16, 0, 16, 8),
          child: Text('Tap a question — the answer appears instantly.', style: TextStyle(fontSize: 12, color: Color(0xFF64748B))),
        ),
        Expanded(
          child: ListView.separated(
            padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
            itemCount: sorted.length,
            separatorBuilder: (_, __) => const SizedBox(height: 10),
            itemBuilder: (_, i) {
              final q = sorted[i];
              return Material(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                elevation: 0,
                child: InkWell(
                  borderRadius: BorderRadius.circular(16),
                  onTap: () => _askQuestion(q),
                  child: Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: const Color(0xFFE2E8F0)),
                      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 8, offset: const Offset(0, 2))],
                    ),
                    child: Row(
                      children: [
                        if (q.thumbnailPath != null && q.thumbnailPath!.isNotEmpty)
                          ClipRRect(
                            borderRadius: BorderRadius.circular(10),
                            child: ngmyImageOrPlaceholder(
                              imageRef: q.thumbnailPath,
                              width: 56,
                              height: 42,
                              borderRadius: BorderRadius.circular(10),
                              icon: Icons.quiz_outlined,
                            ),
                          )
                        else
                          Container(
                            width: 56,
                            height: 42,
                            decoration: BoxDecoration(
                              color: Color(cat.colorValue).withValues(alpha: 0.12),
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: Icon(Icons.chat_bubble_outline_rounded, color: Color(cat.colorValue), size: 22),
                          ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Text(q.question, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13, color: Color(0xFF1E293B), height: 1.3)),
                        ),
                        const Icon(Icons.send_rounded, size: 18, color: Color(0xFF94A3B8)),
                      ],
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  Widget _buildThread() {
    return Container(
      constraints: const BoxConstraints(maxHeight: 220),
      decoration: const BoxDecoration(
        color: Color(0xFFF8FAFC),
        borderRadius: BorderRadius.vertical(bottom: Radius.circular(22)),
        border: Border(top: BorderSide(color: Color(0xFFE2E8F0))),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Padding(
            padding: EdgeInsets.fromLTRB(14, 10, 14, 4),
            child: Text('Your answers', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12, color: Color(0xFF64748B))),
          ),
          Expanded(
            child: ListView.builder(
              controller: _threadScroll,
              padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
              itemCount: widget.kbThread.length,
              itemBuilder: (_, i) {
                final item = widget.kbThread[i];
                return Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Align(
                        alignment: Alignment.centerRight,
                        child: Container(
                          constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.72),
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                          decoration: BoxDecoration(
                            color: const Color(0xFF00B25A),
                            borderRadius: BorderRadius.circular(16),
                          ),
                          child: Text(
                            (item['question'] ?? '').toString(),
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 13),
                          ),
                        ),
                      ),
                      const SizedBox(height: 6),
                      Align(
                        alignment: Alignment.centerLeft,
                        child: Container(
                          constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.85),
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: const Color(0xFFE2E8F0)),
                          ),
                          child: NgmyHelperKbAnswerView(
                            blocks: _blocksFromThreadItem(item),
                            printable: item['printable'] == true,
                          ),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }

  List<NgmyHelperKbBlock> _blocksFromThreadItem(Map<String, dynamic> item) {
    final raw = item['answerBlocks'];
    if (raw is List) {
      return raw.map((e) => NgmyHelperKbBlock.fromJson(Map<String, dynamic>.from(e as Map))).toList();
    }
    final text = (item['answer'] ?? '').toString();
    if (text.isEmpty) return const [];
    return [NgmyHelperKbBlock(type: 'text', content: text)];
  }
}

class _CategoryTile extends StatelessWidget {
  final NgmyHelperKbCategory category;
  final VoidCallback onTap;

  const _CategoryTile({required this.category, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final color = Color(category.colorValue);
    return Material(
      color: Colors.white,
      borderRadius: BorderRadius.circular(16),
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: onTap,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: const Color(0xFFE2E8F0)),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.05), blurRadius: 8, offset: const Offset(0, 2))],
          ),
          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 10),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  color: color.withValues(alpha: 0.15),
                  borderRadius: BorderRadius.circular(14),
                ),
                child: Icon(category.icon, color: color, size: 24),
              ),
              const SizedBox(height: 8),
              Text(
                category.title,
                textAlign: TextAlign.center,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 11, color: Color(0xFF1E293B), height: 1.15),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class NgmyHelperKbAnswerView extends StatelessWidget {
  final List<NgmyHelperKbBlock> blocks;
  final bool printable;

  const NgmyHelperKbAnswerView({super.key, required this.blocks, this.printable = false});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (printable)
          Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFFDBEAFE),
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.print_rounded, size: 14, color: Color(0xFF1D4ED8)),
                SizedBox(width: 4),
                Text('Printable document', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: Color(0xFF1D4ED8))),
              ],
            ),
          ),
        ...blocks.map((b) => _BlockWidget(block: b)),
      ],
    );
  }
}

class _BlockWidget extends StatelessWidget {
  final NgmyHelperKbBlock block;

  const _BlockWidget({required this.block});

  @override
  Widget build(BuildContext context) {
    switch (block.type) {
      case 'heading':
        return Padding(
          padding: const EdgeInsets.only(bottom: 8, top: 4),
          child: Text(block.content, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: Color(0xFF0F172A))),
        );
      case 'image':
        final ref = block.url ?? block.content;
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 8),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: ngmyImageOrPlaceholder(imageRef: ref, width: double.infinity, height: 160, fit: BoxFit.cover),
          ),
        );
      case 'video':
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 8),
          child: _KbVideoBlock(ref: block.url ?? block.content),
        );
      case 'link':
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 4),
          child: InkWell(
            onTap: () {
              final uri = Uri.tryParse(block.url ?? block.content);
              if (uri != null) launchUrl(uri, mode: LaunchMode.externalApplication);
            },
            child: Text(
              block.label?.isNotEmpty == true ? block.label! : (block.url ?? block.content),
              style: const TextStyle(color: Color(0xFF2563EB), fontWeight: FontWeight.w700, decoration: TextDecoration.underline),
            ),
          ),
        );
      case 'signature':
        return Padding(
          padding: const EdgeInsets.only(top: 12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Divider(),
              Text(block.content, style: const TextStyle(fontStyle: FontStyle.italic, fontWeight: FontWeight.w700, color: Color(0xFF334155))),
              const SizedBox(height: 16),
              Container(width: 120, height: 1, color: const Color(0xFF94A3B8)),
              const SizedBox(height: 4),
              const Text('Signature', style: TextStyle(fontSize: 10, color: Color(0xFF94A3B8))),
            ],
          ),
        );
      case 'bullets':
        final lines = block.content.split('\n').where((l) => l.trim().isNotEmpty);
        return Padding(
          padding: const EdgeInsets.symmetric(vertical: 6),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: lines
                .map((l) => Padding(
                      padding: const EdgeInsets.only(bottom: 4),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('•  ', style: TextStyle(fontWeight: FontWeight.w900)),
                          Expanded(child: Text(l.trim(), style: const TextStyle(height: 1.35, color: Color(0xFF334155)))),
                        ],
                      ),
                    ))
                .toList(),
          ),
        );
      case 'divider':
        return const Padding(padding: EdgeInsets.symmetric(vertical: 8), child: Divider());
      default:
        if (block.content.trim().isEmpty) return const SizedBox.shrink();
        return Padding(
          padding: const EdgeInsets.only(bottom: 6),
          child: Text(block.content, style: const TextStyle(height: 1.4, color: Color(0xFF334155), fontSize: 13)),
        );
    }
  }
}

class _KbVideoBlock extends StatefulWidget {
  final String ref;

  const _KbVideoBlock({required this.ref});

  @override
  State<_KbVideoBlock> createState() => _KbVideoBlockState();
}

class _KbVideoBlockState extends State<_KbVideoBlock> {
  VideoPlayerController? _c;

  @override
  void initState() {
    super.initState();
    _init();
  }

  Future<void> _init() async {
    final ref = widget.ref.trim();
    if (ref.isEmpty) return;
    try {
      VideoPlayerController? c;
      if (ref.startsWith('http') || ref.startsWith('supabase://')) {
        c = VideoPlayerController.networkUrl(Uri.parse(ref));
      } else {
        return;
      }
      await c.initialize();
      if (!mounted) return;
      setState(() => _c = c);
    } catch (_) {}
  }

  @override
  void dispose() {
    _c?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final c = _c;
    if (c == null || !c.value.isInitialized) {
      return Container(
        height: 120,
        alignment: Alignment.center,
        decoration: BoxDecoration(color: Colors.black12, borderRadius: BorderRadius.circular(12)),
        child: const Icon(Icons.videocam_rounded, color: Colors.white54, size: 36),
      );
    }
    return ClipRRect(
      borderRadius: BorderRadius.circular(12),
      child: AspectRatio(
        aspectRatio: c.value.aspectRatio,
        child: Stack(
          alignment: Alignment.center,
          children: [
            VideoPlayer(c),
            IconButton(
              onPressed: () => setState(() => c.value.isPlaying ? c.pause() : c.play()),
              icon: Icon(c.value.isPlaying ? Icons.pause_circle_filled : Icons.play_circle_fill, color: Colors.white, size: 44),
            ),
          ],
        ),
      ),
    );
  }
}
