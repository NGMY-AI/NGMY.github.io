import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_helper_kb.dart';
import 'ngmy_worksheet_helpers.dart';

class _KbPalette {
  final bool isDark;

  const _KbPalette(this.isDark);

  factory _KbPalette.of(BuildContext context) =>
      _KbPalette(Theme.of(context).brightness == Brightness.dark);

  Color get panelBg => isDark ? const Color(0xFF0F141B) : const Color(0xFFF8FAFC);
  Color get panelBorder => isDark ? const Color(0xFF334155) : const Color(0xFFBAE6FD);
  Color get cardBg => isDark ? const Color(0xFF151C28) : Colors.white;
  Color get cardBorder => isDark ? const Color(0xFF334155) : const Color(0xFFE2E8F0);
  Color get titleText => isDark ? const Color(0xFFF8FAFC) : const Color(0xFF0F172A);
  Color get bodyText => isDark ? const Color(0xFFCBD5E1) : const Color(0xFF334155);
  Color get mutedText => isDark ? const Color(0xFF94A3B8) : const Color(0xFF64748B);
  Color get accentGreen => const Color(0xFF16A34A);
  Color get answerBg => isDark ? const Color(0xFF111827) : Colors.white;
  Color get storedBadgeBg => isDark ? const Color(0xFF1E3A5F) : const Color(0xFFDBEAFE);
  Color get storedBadgeText => isDark ? const Color(0xFF93C5FD) : const Color(0xFF1D4ED8);
  Color get linkColor => isDark ? const Color(0xFF60A5FA) : const Color(0xFF2563EB);
  Color get shadow => Colors.black.withValues(alpha: isDark ? 0.28 : 0.06);

  List<Color> get headerGradient => isDark
      ? [const Color(0xFF0F172A).withValues(alpha: 0.9), const Color(0xFF1E293B).withValues(alpha: 0.85)]
      : [const Color(0xFFE0F2FE).withValues(alpha: 0.55), const Color(0xFFF0FDF4).withValues(alpha: 0.45)];
}

enum _KbView { grid, questions, answer }

/// User-facing Help Topics UI — stored answers only (no AI).
class NgmyHelperKbHub extends StatefulWidget {
  final List<NgmyHelperKbCategory> categories;
  final String logoUrl;
  final Widget Function(String logoUrl, {double size}) logoBuilder;
  final bool showTapToSwitch;
  final VoidCallback? onTapLogoSwitch;

  const NgmyHelperKbHub({
    super.key,
    required this.categories,
    required this.logoUrl,
    required this.logoBuilder,
    this.showTapToSwitch = false,
    this.onTapLogoSwitch,
  });

  @override
  State<NgmyHelperKbHub> createState() => _NgmyHelperKbHubState();
}

class _NgmyHelperKbHubState extends State<NgmyHelperKbHub> {
  _KbView _view = _KbView.grid;
  String? _selectedCategoryId;
  String? _selectedQuestionId;

  NgmyHelperKbCategory? get _selectedCategory {
    if (_selectedCategoryId == null) return null;
    for (final c in widget.categories) {
      if (c.id == _selectedCategoryId) return c;
    }
    return null;
  }

  NgmyHelperKbQuestion? get _selectedQuestion {
    final cat = _selectedCategory;
    if (cat == null || _selectedQuestionId == null) return null;
    for (final q in cat.questions) {
      if (q.id == _selectedQuestionId) return q;
    }
    return null;
  }

  void _openCategory(String id) {
    setState(() {
      _selectedCategoryId = id;
      _selectedQuestionId = null;
      _view = _KbView.questions;
    });
  }

  void _openQuestion(NgmyHelperKbQuestion q) {
    setState(() {
      _selectedQuestionId = q.id;
      _view = _KbView.answer;
    });
  }

  void _backToGrid() {
    setState(() {
      _view = _KbView.grid;
      _selectedCategoryId = null;
      _selectedQuestionId = null;
    });
  }

  void _backToQuestions() {
    setState(() {
      _view = _KbView.questions;
      _selectedQuestionId = null;
    });
  }

  List<NgmyHelperKbCategory> get _sortedCategories {
    final list = List<NgmyHelperKbCategory>.from(widget.categories);
    list.sort((a, b) => a.sortOrder.compareTo(b.sortOrder));
    return list;
  }

  @override
  Widget build(BuildContext context) {
    final p = _KbPalette.of(context);
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 14),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: p.headerGradient,
        ),
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: p.panelBorder.withValues(alpha: 0.55)),
      ),
      clipBehavior: Clip.antiAlias,
      child: switch (_view) {
        _KbView.grid => _buildCategoryGrid(p),
        _KbView.questions => _buildQuestionList(p, _selectedCategory!),
        _KbView.answer => _buildAnswerView(p, _selectedCategory!, _selectedQuestion!),
      },
    );
  }

  Widget _buildCategoryGrid(_KbPalette p) {
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
                    color: p.cardBg,
                    boxShadow: [
                      BoxShadow(color: const Color(0xFF7C3AED).withValues(alpha: 0.22), blurRadius: 14),
                      BoxShadow(color: p.shadow, blurRadius: 8),
                    ],
                    border: Border.all(color: p.panelBorder, width: 2),
                  ),
                  child: ClipOval(child: widget.logoBuilder(widget.logoUrl, size: 72)),
                ),
                if (widget.showTapToSwitch) ...[
                  const SizedBox(height: 6),
                  Text('Tap to switch', style: TextStyle(color: p.accentGreen, fontWeight: FontWeight.w700, fontSize: 12)),
                ],
              ],
            ),
          ),
        ),
        const SizedBox(height: 14),
        Text(
          'Hi! I\'m NGMY Helper 👋',
          textAlign: TextAlign.center,
          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: p.titleText),
        ),
        const SizedBox(height: 6),
        Text(
          'Select a category below to find answers to common NGMY questions:',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 13, color: p.mutedText, height: 1.35),
        ),
        const SizedBox(height: 18),
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            mainAxisSpacing: 10,
            crossAxisSpacing: 10,
            childAspectRatio: 1.0,
          ),
          itemCount: _sortedCategories.length,
          itemBuilder: (_, i) {
            final c = _sortedCategories[i];
            return _CategoryTile(category: c, palette: p, onTap: () => _openCategory(c.id));
          },
        ),
      ],
    );
  }

  Widget _buildQuestionList(_KbPalette p, NgmyHelperKbCategory cat) {
    final sorted = List<NgmyHelperKbQuestion>.from(cat.questions)..sort((a, b) => a.sortOrder.compareTo(b.sortOrder));
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _KbTopBar(
          palette: p,
          onBack: _backToGrid,
          icon: cat.icon,
          iconColor: Color(cat.colorValue),
          title: cat.title,
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
          child: Text('Tap a question to read the stored answer.', style: TextStyle(fontSize: 12, color: p.mutedText)),
        ),
        Expanded(
          child: sorted.isEmpty
              ? Center(child: Text('No questions in this category yet.', style: TextStyle(color: p.mutedText)))
              : ListView.separated(
                  padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
                  itemCount: sorted.length,
                  separatorBuilder: (_, __) => const SizedBox(height: 10),
                  itemBuilder: (_, i) {
                    final q = sorted[i];
                    return Material(
                      color: p.cardBg,
                      borderRadius: BorderRadius.circular(16),
                      child: InkWell(
                        borderRadius: BorderRadius.circular(16),
                        onTap: () => _openQuestion(q),
                        child: Container(
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: p.cardBorder),
                            boxShadow: [BoxShadow(color: p.shadow, blurRadius: 8, offset: const Offset(0, 2))],
                          ),
                          child: Row(
                            children: [
                              if (q.thumbnailPath != null && q.thumbnailPath!.isNotEmpty)
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(10),
                                  child: ngmyImageOrPlaceholder(
                                    imageRef: q.thumbnailPath,
                                    width: 52,
                                    height: 52,
                                    borderRadius: BorderRadius.circular(10),
                                    icon: Icons.quiz_outlined,
                                    iconColor: p.mutedText,
                                  ),
                                )
                              else
                                Container(
                                  width: 52,
                                  height: 52,
                                  decoration: BoxDecoration(
                                    color: Color(cat.colorValue).withValues(alpha: 0.15),
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  child: Icon(Icons.quiz_outlined, color: Color(cat.colorValue), size: 24),
                                ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Text(
                                  q.question,
                                  style: TextStyle(fontWeight: FontWeight.w700, fontSize: 13, color: p.titleText, height: 1.3),
                                ),
                              ),
                              Icon(Icons.chevron_right_rounded, color: p.mutedText, size: 22),
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

  Widget _buildAnswerView(_KbPalette p, NgmyHelperKbCategory cat, NgmyHelperKbQuestion q) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _KbTopBar(
          palette: p,
          onBack: _backToQuestions,
          icon: cat.icon,
          iconColor: Color(cat.colorValue),
          title: 'Answer',
        ),
        Expanded(
          child: ListView(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 20),
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: const Color(0xFF00B25A),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Text(
                  q.question,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14, height: 1.35),
                ),
              ),
              const SizedBox(height: 12),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: p.answerBg,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: p.cardBorder),
                  boxShadow: [BoxShadow(color: p.shadow, blurRadius: 10, offset: const Offset(0, 3))],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      margin: const EdgeInsets.only(bottom: 12),
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(
                        color: p.storedBadgeBg,
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.menu_book_rounded, size: 14, color: p.storedBadgeText),
                          const SizedBox(width: 5),
                          Text(
                            'Stored answer',
                            style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: p.storedBadgeText),
                          ),
                        ],
                      ),
                    ),
                    NgmyHelperKbAnswerView(blocks: q.answerBlocks, printable: q.printable, palette: p),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

class _KbTopBar extends StatelessWidget {
  final _KbPalette palette;
  final VoidCallback onBack;
  final IconData icon;
  final Color iconColor;
  final String title;

  const _KbTopBar({
    required this.palette,
    required this.onBack,
    required this.icon,
    required this.iconColor,
    required this.title,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 8, 12, 4),
      child: Row(
        children: [
          IconButton(
            onPressed: onBack,
            icon: Icon(Icons.arrow_back_ios_new_rounded, size: 18, color: palette.titleText),
          ),
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: iconColor.withValues(alpha: 0.15),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Icon(icon, color: iconColor, size: 22),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: palette.titleText)),
          ),
        ],
      ),
    );
  }
}

class _CategoryTile extends StatelessWidget {
  final NgmyHelperKbCategory category;
  final _KbPalette palette;
  final VoidCallback onTap;

  const _CategoryTile({required this.category, required this.palette, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final color = Color(category.colorValue);
    return AspectRatio(
      aspectRatio: 1,
      child: Material(
        color: palette.cardBg,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          borderRadius: BorderRadius.circular(14),
          onTap: onTap,
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: palette.cardBorder),
              boxShadow: [BoxShadow(color: palette.shadow, blurRadius: 6, offset: const Offset(0, 2))],
            ),
            padding: const EdgeInsets.all(8),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  width: 40,
                  height: 40,
                  decoration: BoxDecoration(
                    color: color.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(category.icon, color: color, size: 22),
                ),
                const SizedBox(height: 6),
                Text(
                  category.title,
                  textAlign: TextAlign.center,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontWeight: FontWeight.w800,
                    fontSize: 10,
                    color: palette.titleText,
                    height: 1.1,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class NgmyHelperKbAnswerView extends StatelessWidget {
  final List<NgmyHelperKbBlock> blocks;
  final bool printable;
  final _KbPalette? palette;

  const NgmyHelperKbAnswerView({super.key, required this.blocks, this.printable = false, this.palette});

  @override
  Widget build(BuildContext context) {
    final p = palette ?? _KbPalette.of(context);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (printable)
          Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: p.storedBadgeBg,
              borderRadius: BorderRadius.circular(8),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.print_rounded, size: 14, color: p.storedBadgeText),
                const SizedBox(width: 4),
                Text('Printable document', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: p.storedBadgeText)),
              ],
            ),
          ),
        ...blocks.map((b) => _BlockWidget(block: b, palette: p)),
      ],
    );
  }
}

class _BlockWidget extends StatelessWidget {
  final NgmyHelperKbBlock block;
  final _KbPalette palette;

  const _BlockWidget({required this.block, required this.palette});

  @override
  Widget build(BuildContext context) {
    switch (block.type) {
      case 'heading':
        return Padding(
          padding: const EdgeInsets.only(bottom: 8, top: 4),
          child: Text(block.content, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: palette.titleText)),
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
          child: _KbVideoBlock(ref: block.url ?? block.content, palette: palette),
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
              style: TextStyle(color: palette.linkColor, fontWeight: FontWeight.w700, decoration: TextDecoration.underline),
            ),
          ),
        );
      case 'signature':
        return Padding(
          padding: const EdgeInsets.only(top: 12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Divider(color: palette.cardBorder),
              Text(block.content, style: TextStyle(fontStyle: FontStyle.italic, fontWeight: FontWeight.w700, color: palette.bodyText)),
              const SizedBox(height: 16),
              Container(width: 120, height: 1, color: palette.mutedText),
              const SizedBox(height: 4),
              Text('Signature', style: TextStyle(fontSize: 10, color: palette.mutedText)),
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
                          Text('•  ', style: TextStyle(fontWeight: FontWeight.w900, color: palette.bodyText)),
                          Expanded(child: Text(l.trim(), style: TextStyle(height: 1.35, color: palette.bodyText))),
                        ],
                      ),
                    ))
                .toList(),
          ),
        );
      case 'divider':
        return Padding(padding: const EdgeInsets.symmetric(vertical: 8), child: Divider(color: palette.cardBorder));
      default:
        if (block.content.trim().isEmpty) return const SizedBox.shrink();
        return Padding(
          padding: const EdgeInsets.only(bottom: 6),
          child: _styledText(block.content, palette),
        );
    }
  }

  static Widget _styledText(String raw, _KbPalette palette) {
    final spans = <TextSpan>[];
    final pattern = RegExp(r'\*\*(.+?)\*\*|\*(.+?)\*|__(.+?)__');
    var last = 0;
    for (final m in pattern.allMatches(raw)) {
      if (m.start > last) {
        spans.add(TextSpan(text: raw.substring(last, m.start), style: TextStyle(height: 1.4, color: palette.bodyText, fontSize: 13)));
      }
      if (m.group(1) != null) {
        spans.add(TextSpan(text: m.group(1), style: TextStyle(height: 1.4, color: palette.bodyText, fontSize: 13, fontWeight: FontWeight.w800)));
      } else if (m.group(2) != null) {
        spans.add(TextSpan(text: m.group(2), style: TextStyle(height: 1.4, color: palette.bodyText, fontSize: 13, fontStyle: FontStyle.italic)));
      } else if (m.group(3) != null) {
        spans.add(TextSpan(text: m.group(3), style: TextStyle(height: 1.4, color: palette.bodyText, fontSize: 13, decoration: TextDecoration.underline)));
      }
      last = m.end;
    }
    if (last < raw.length) {
      spans.add(TextSpan(text: raw.substring(last), style: TextStyle(height: 1.4, color: palette.bodyText, fontSize: 13)));
    }
    return RichText(text: TextSpan(children: spans));
  }
}

class _KbVideoBlock extends StatefulWidget {
  final String ref;
  final _KbPalette palette;

  const _KbVideoBlock({required this.ref, required this.palette});

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
    if (ref.isEmpty || (!ref.startsWith('http') && !ref.startsWith('supabase://'))) return;
    try {
      final c = VideoPlayerController.networkUrl(Uri.parse(ref));
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
        decoration: BoxDecoration(
          color: widget.palette.isDark ? const Color(0xFF1E293B) : Colors.black12,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Icon(Icons.videocam_rounded, color: widget.palette.mutedText, size: 36),
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
