import 'dart:convert';

import 'package:flutter/material.dart';

import 'ngmy_hud_tech_shell.dart';
import 'ngmy_repair_guides_models.dart';
import 'ngmy_repair_guides_storage.dart';
import 'ngmy_worksheet_helpers.dart';

const _accent = Color(0xFFF97316);
const _accent2 = Color(0xFFEA580C);
const _hudColors = [_accent, _accent2];

void showNgmyRepairGuides({required BuildContext context, String? userEmail}) {
  Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmyRepairGuidesPage(userEmail: userEmail ?? ''),
    ),
  );
}

class NgmyRepairGuidesPage extends StatefulWidget {
  const NgmyRepairGuidesPage({super.key, required this.userEmail});

  final String userEmail;

  @override
  State<NgmyRepairGuidesPage> createState() => _NgmyRepairGuidesPageState();
}

class _NgmyRepairGuidesPageState extends State<NgmyRepairGuidesPage> {
  List<RepairGuide> _guides = const [];
  bool _loading = true;
  String _query = '';
  final _searchC = TextEditingController();

  @override
  void initState() {
    super.initState();
    _reload();
  }

  @override
  void dispose() {
    _searchC.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    setState(() => _loading = true);
    final list = await loadRepairGuides(userEmail: widget.userEmail);
    if (!mounted) return;
    setState(() {
      _guides = list;
      _loading = false;
    });
  }

  void _openCategory(RepairGuideCategory cat) {
    Navigator.of(context).push<void>(
      MaterialPageRoute<void>(
        builder: (_) => _RepairGuideBrowsePage(
          userEmail: widget.userEmail,
          category: cat,
          guides: filterRepairGuides(_guides, categoryId: cat.id, query: _query),
          onChanged: _reload,
        ),
      ),
    );
  }

  void _openGuide(RepairGuide guide) {
    Navigator.of(context).push<void>(
      MaterialPageRoute<void>(
        builder: (_) => _RepairGuideReaderPage(guide: guide),
      ),
    );
  }

  Future<void> _createGuide() async {
    final created = await Navigator.of(context).push<RepairGuide>(
      MaterialPageRoute<RepairGuide>(
        builder: (_) => _RepairGuideEditorPage(userEmail: widget.userEmail),
      ),
    );
    if (created != null) {
      await upsertRepairGuide(userEmail: widget.userEmail, guide: created);
      await _reload();
      if (mounted) _openGuide(created);
    }
  }

  @override
  Widget build(BuildContext context) {
    final filtered = filterRepairGuides(_guides, query: _query);
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return NgmyToolkitAlivePageChrome(
          colors: _hudColors,
          pulse: pulse,
          scan: scan,
          orbit: orbit,
          header: NgmyToolkitAliveHeader(
            colors: _hudColors,
            pulse: pulse,
            orbit: orbit,
            title: 'FIX MANUAL',
            subtitle: 'Step-by-step repair guides · make · model · year',
            onClose: () => Navigator.pop(context),
            trailing: IconButton(
              tooltip: 'Create guide',
              onPressed: _createGuide,
              icon: const Icon(Icons.add_circle_outline_rounded, color: Colors.white),
            ),
          ),
          child: _loading
              ? const Center(child: CircularProgressIndicator(color: _accent))
              : ListView(
                  padding: const EdgeInsets.fromLTRB(18, 8, 18, 28),
                  children: [
                    _HeroBanner(pulse: pulse),
                    const SizedBox(height: 16),
                    TextField(
                      controller: _searchC,
                      onChanged: (v) => setState(() => _query = v),
                      decoration: InputDecoration(
                        hintText: 'Search make, model, year, repair…',
                        prefixIcon: const Icon(Icons.search_rounded),
                        filled: true,
                        fillColor: Colors.white.withValues(alpha: 0.06),
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                      ),
                    ),
                    const SizedBox(height: 18),
                    Text(
                      'BROWSE BY CATEGORY',
                      style: TextStyle(
                        fontWeight: FontWeight.w900,
                        fontSize: 11,
                        letterSpacing: 1.2,
                        color: Colors.white.withValues(alpha: 0.55),
                      ),
                    ),
                    const SizedBox(height: 10),
                    GridView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        mainAxisSpacing: 10,
                        crossAxisSpacing: 10,
                        childAspectRatio: 1.35,
                      ),
                      itemCount: kRepairGuideCategories.length,
                      itemBuilder: (_, i) {
                        final cat = kRepairGuideCategories[i];
                        final count = _guides.where((g) => g.categoryId == cat.id).length;
                        return _CategoryTile(
                          category: cat,
                          count: count,
                          onTap: () => _openCategory(cat),
                        );
                      },
                    ),
                    const SizedBox(height: 22),
                    Row(
                      children: [
                        Text(
                          'ALL GUIDES',
                          style: TextStyle(
                            fontWeight: FontWeight.w900,
                            fontSize: 11,
                            letterSpacing: 1.2,
                            color: Colors.white.withValues(alpha: 0.55),
                          ),
                        ),
                        const Spacer(),
                        Text('${filtered.length}', style: TextStyle(color: _accent.withValues(alpha: 0.9), fontWeight: FontWeight.w800)),
                      ],
                    ),
                    const SizedBox(height: 10),
                    if (filtered.isEmpty)
                      Padding(
                        padding: const EdgeInsets.symmetric(vertical: 24),
                        child: Text(
                          'No guides yet. Tap + to create your first repair manual.',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 13),
                        ),
                      )
                    else
                      ...filtered.map((g) => _GuideListTile(guide: g, onTap: () => _openGuide(g))),
                  ],
                ),
        );
      },
    );
  }
}

class _HeroBanner extends StatelessWidget {
  const _HeroBanner({required this.pulse});

  final double pulse;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            _accent.withValues(alpha: 0.35 + pulse * 0.1),
            const Color(0xFF1E293B),
          ],
        ),
        border: Border.all(color: _accent.withValues(alpha: 0.45)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Never take broken for an answer',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17, height: 1.25),
          ),
          const SizedBox(height: 8),
          Text(
            'Free step-by-step repair guides for cars, phones, appliances & more — with photos for every step.',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 12.5, height: 1.4),
          ),
        ],
      ),
    );
  }
}

class _CategoryTile extends StatelessWidget {
  const _CategoryTile({required this.category, required this.count, required this.onTap});

  final RepairGuideCategory category;
  final int count;
  final VoidCallback onTap;

  IconData _icon() {
    switch (category.iconName) {
      case 'directions_car':
        return Icons.directions_car_filled_rounded;
      case 'smartphone':
        return Icons.smartphone_rounded;
      case 'computer':
        return Icons.computer_rounded;
      case 'kitchen':
        return Icons.kitchen_rounded;
      case 'devices':
        return Icons.devices_rounded;
      case 'tablet':
        return Icons.tablet_rounded;
      case 'sports_esports':
        return Icons.sports_esports_rounded;
      case 'photo_camera':
        return Icons.photo_camera_rounded;
      case 'laptop_mac':
        return Icons.laptop_mac_rounded;
      default:
        return Icons.home_repair_service_rounded;
    }
  }

  @override
  Widget build(BuildContext context) {
    final c1 = Color(category.colors.first);
    final c2 = Color(category.colors.length > 1 ? category.colors[1] : category.colors.first);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            gradient: LinearGradient(colors: [c1.withValues(alpha: 0.22), c2.withValues(alpha: 0.08)]),
            border: Border.all(color: c1.withValues(alpha: 0.35)),
          ),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Icon(_icon(), color: c1, size: 28),
                const Spacer(),
                Text(category.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                Text('$count guides', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _GuideListTile extends StatelessWidget {
  const _GuideListTile({required this.guide, required this.onTap});

  final RepairGuide guide;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final cat = repairGuideCategoryById(guide.categoryId);
    final accent = cat != null ? Color(cat.colors.first) : _accent;
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Material(
        color: Colors.white.withValues(alpha: 0.04),
        borderRadius: BorderRadius.circular(16),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(16),
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Row(
              children: [
                _GuideThumb(guide: guide, accent: accent),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        guide.repairTitle.toUpperCase(),
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        guide.deviceLabel,
                        style: TextStyle(color: accent.withValues(alpha: 0.95), fontWeight: FontWeight.w700, fontSize: 12),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        '${guide.steps.length} steps · ${cat?.label ?? 'Guide'}',
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
                      ),
                    ],
                  ),
                ),
                Icon(Icons.chevron_right_rounded, color: Colors.white.withValues(alpha: 0.35)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _GuideThumb extends StatelessWidget {
  const _GuideThumb({required this.guide, required this.accent});

  final RepairGuide guide;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    final img = guide.coverImageBase64 ??
        () {
          for (final s in guide.steps) {
            if (s.imageBase64 != null && s.imageBase64!.isNotEmpty) return s.imageBase64;
          }
          return null;
        }();
    return ClipRRect(
      borderRadius: BorderRadius.circular(12),
      child: Container(
        width: 56,
        height: 56,
        color: accent.withValues(alpha: 0.15),
        child: img != null && img.startsWith('data:image')
            ? Image.memory(base64Decode(img.split(',').last), fit: BoxFit.cover)
            : Icon(Icons.build_circle_outlined, color: accent, size: 28),
      ),
    );
  }
}

class _RepairGuideBrowsePage extends StatelessWidget {
  const _RepairGuideBrowsePage({
    required this.userEmail,
    required this.category,
    required this.guides,
    required this.onChanged,
  });

  final String userEmail;
  final RepairGuideCategory category;
  final List<RepairGuide> guides;
  final Future<void> Function() onChanged;

  @override
  Widget build(BuildContext context) {
    final colors = [Color(category.colors.first), Color(category.colors.length > 1 ? category.colors[1] : category.colors.first)];
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return NgmyToolkitAlivePageChrome(
          colors: colors,
          pulse: pulse,
          scan: scan,
          orbit: orbit,
          header: NgmyToolkitAliveHeader(
            colors: colors,
            pulse: pulse,
            orbit: orbit,
            title: category.label.toUpperCase(),
            subtitle: '${guides.length} repair guides',
            onClose: () => Navigator.pop(context),
          ),
          child: guides.isEmpty
              ? Center(
                  child: Text(
                    'No guides in this category yet.\nCreate one from the main Fix Manual screen.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.5)),
                  ),
                )
              : ListView(
                  padding: const EdgeInsets.fromLTRB(18, 8, 18, 28),
                  children: guides
                      .map(
                        (g) => _GuideListTile(
                          guide: g,
                          onTap: () => Navigator.of(context).push<void>(
                            MaterialPageRoute<void>(
                              builder: (_) => _RepairGuideReaderPage(guide: g),
                            ),
                          ),
                        ),
                      )
                      .toList(),
                ),
        );
      },
    );
  }
}

class _RepairGuideReaderPage extends StatefulWidget {
  const _RepairGuideReaderPage({required this.guide});

  final RepairGuide guide;

  @override
  State<_RepairGuideReaderPage> createState() => _RepairGuideReaderPageState();
}

class _RepairGuideReaderPageState extends State<_RepairGuideReaderPage> {
  late final PageController _pageC;
  int _step = 0;

  @override
  void initState() {
    super.initState();
    _pageC = PageController();
  }

  @override
  void dispose() {
    _pageC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final guide = widget.guide;
    final steps = guide.steps;
    final cat = repairGuideCategoryById(guide.categoryId);
    final colors = cat != null
        ? [Color(cat.colors.first), Color(cat.colors.length > 1 ? cat.colors[1] : cat.colors.first)]
        : _hudColors;

    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return NgmyToolkitAlivePageChrome(
          colors: colors,
          pulse: pulse,
          scan: scan,
          orbit: orbit,
          header: NgmyToolkitAliveHeader(
            colors: colors,
            pulse: pulse,
            orbit: orbit,
            title: guide.repairTitle.toUpperCase(),
            subtitle: guide.deviceLabel,
            onClose: () => Navigator.pop(context),
          ),
          child: Column(
            children: [
              if (guide.summary.trim().isNotEmpty)
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 4, 18, 0),
                  child: Text(guide.summary, style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 12.5, height: 1.4)),
                ),
              Padding(
                padding: const EdgeInsets.fromLTRB(18, 12, 18, 8),
                child: Row(
                  children: [
                    Text(
                      'STEP ${_step + 1} OF ${steps.length}',
                      style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1),
                    ),
                    const Spacer(),
                    if (_step > 0)
                      TextButton(onPressed: () => _pageC.previousPage(duration: const Duration(milliseconds: 280), curve: Curves.easeOutCubic), child: const Text('Back')),
                    if (_step < steps.length - 1)
                      TextButton(onPressed: () => _pageC.nextPage(duration: const Duration(milliseconds: 280), curve: Curves.easeOutCubic), child: const Text('Next')),
                  ],
                ),
              ),
              Expanded(
                child: PageView.builder(
                  controller: _pageC,
                  itemCount: steps.length,
                  onPageChanged: (i) => setState(() => _step = i),
                  itemBuilder: (_, i) => _StepCard(step: steps[i], accent: colors.first, index: i),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class _StepCard extends StatelessWidget {
  const _StepCard({required this.step, required this.accent, required this.index});

  final RepairGuideStep step;
  final Color accent;
  final int index;

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(18, 0, 18, 24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          if (step.imageBase64 != null && step.imageBase64!.startsWith('data:image'))
            ClipRRect(
              borderRadius: BorderRadius.circular(16),
              child: AspectRatio(
                aspectRatio: 16 / 10,
                child: Image.memory(base64Decode(step.imageBase64!.split(',').last), fit: BoxFit.cover),
              ),
            )
          else
            Container(
              height: 160,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                gradient: LinearGradient(colors: [accent.withValues(alpha: 0.25), const Color(0xFF1E293B)]),
                border: Border.all(color: accent.withValues(alpha: 0.3)),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.photo_camera_outlined, color: accent, size: 36),
                  const SizedBox(height: 8),
                  Text('Step ${index + 1} photo', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12)),
                ],
              ),
            ),
          const SizedBox(height: 16),
          Text(step.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
          const SizedBox(height: 10),
          Text(step.body, style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 14.5, height: 1.55)),
          if (step.warning != null && step.warning!.trim().isNotEmpty) ...[
            const SizedBox(height: 14),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: const Color(0xFFEF4444).withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: const Color(0xFFEF4444).withValues(alpha: 0.4)),
              ),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Icon(Icons.warning_amber_rounded, color: Color(0xFFFCA5A5), size: 20),
                  const SizedBox(width: 10),
                  Expanded(child: Text(step.warning!, style: const TextStyle(color: Color(0xFFFCA5A5), fontSize: 13, height: 1.4))),
                ],
              ),
            ),
          ],
          if (step.tools.isNotEmpty) ...[
            const SizedBox(height: 14),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: step.tools
                  .map(
                    (t) => Chip(
                      label: Text(t, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700)),
                      backgroundColor: accent.withValues(alpha: 0.15),
                      side: BorderSide(color: accent.withValues(alpha: 0.35)),
                      visualDensity: VisualDensity.compact,
                    ),
                  )
                  .toList(),
            ),
          ],
        ],
      ),
    );
  }
}

class _RepairGuideEditorPage extends StatefulWidget {
  const _RepairGuideEditorPage({required this.userEmail});

  final String userEmail;

  @override
  State<_RepairGuideEditorPage> createState() => _RepairGuideEditorPageState();
}

class _RepairGuideEditorPageState extends State<_RepairGuideEditorPage> {
  String _categoryId = 'car';
  final _makeC = TextEditingController();
  final _modelC = TextEditingController();
  final _yearC = TextEditingController();
  final _variantC = TextEditingController();
  final _titleC = TextEditingController();
  final _summaryC = TextEditingController();
  String? _coverBase64;
  final List<_EditableStep> _steps = [_EditableStep()];

  @override
  void dispose() {
    _makeC.dispose();
    _modelC.dispose();
    _yearC.dispose();
    _variantC.dispose();
    _titleC.dispose();
    _summaryC.dispose();
    for (final s in _steps) {
      s.dispose();
    }
    super.dispose();
  }

  Future<void> _pickCover() async {
    final b64 = await ngmyPickImageBase64(maxWidth: 1600);
    if (b64 != null && mounted) setState(() => _coverBase64 = b64);
  }

  Future<void> _save() async {
    final make = _makeC.text.trim();
    final model = _modelC.text.trim();
    final title = _titleC.text.trim();
    if (make.isEmpty || model.isEmpty || title.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Make, model, and repair title are required.')));
      return;
    }
    final year = int.tryParse(_yearC.text.trim());
    final now = DateTime.now();
    final steps = <RepairGuideStep>[];
    for (var i = 0; i < _steps.length; i++) {
      final s = _steps[i];
      final st = s.titleC.text.trim();
      final body = s.bodyC.text.trim();
      if (st.isEmpty && body.isEmpty) continue;
      steps.add(
        RepairGuideStep(
          order: steps.length + 1,
          title: st.isEmpty ? 'Step ${steps.length + 1}' : st,
          body: body,
          imageBase64: s.imageBase64,
          tools: s.toolsC.text.split(',').map((e) => e.trim()).where((e) => e.isNotEmpty).toList(),
          warning: s.warningC.text.trim().isEmpty ? null : s.warningC.text.trim(),
        ),
      );
    }
    if (steps.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Add at least one step.')));
      return;
    }
    final guide = RepairGuide(
      id: ngmyRepairGuideNewId(),
      categoryId: _categoryId,
      make: make,
      model: model,
      year: year,
      variant: _variantC.text.trim(),
      repairTitle: title,
      summary: _summaryC.text.trim(),
      coverImageBase64: _coverBase64,
      steps: steps,
      authorEmail: widget.userEmail,
      createdAt: now,
      updatedAt: now,
    );
    if (mounted) Navigator.pop(context, guide);
  }

  @override
  Widget build(BuildContext context) {
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return NgmyToolkitAlivePageChrome(
          colors: _hudColors,
          pulse: pulse,
          scan: scan,
          orbit: orbit,
          header: NgmyToolkitAliveHeader(
            colors: _hudColors,
            pulse: pulse,
            orbit: orbit,
            title: 'NEW GUIDE',
            subtitle: 'Build a step-by-step repair manual',
            onClose: () => Navigator.pop(context),
            trailing: TextButton(onPressed: _save, child: const Text('Save', style: TextStyle(fontWeight: FontWeight.w800, color: Colors.white))),
          ),
          child: ListView(
            padding: const EdgeInsets.fromLTRB(18, 8, 18, 32),
            children: [
              DropdownButtonFormField<String>(
                value: _categoryId,
                decoration: _fieldDeco('Category'),
                dropdownColor: const Color(0xFF1E293B),
                items: kRepairGuideCategories
                    .map((c) => DropdownMenuItem(value: c.id, child: Text(c.label)))
                    .toList(),
                onChanged: (v) => setState(() => _categoryId = v ?? 'car'),
              ),
              const SizedBox(height: 12),
              TextField(controller: _makeC, decoration: _fieldDeco('Make (e.g. Nissan)')),
              const SizedBox(height: 10),
              TextField(controller: _modelC, decoration: _fieldDeco('Model (e.g. Altima)')),
              const SizedBox(height: 10),
              Row(
                children: [
                  Expanded(child: TextField(controller: _yearC, keyboardType: TextInputType.number, decoration: _fieldDeco('Year'))),
                  const SizedBox(width: 10),
                  Expanded(child: TextField(controller: _variantC, decoration: _fieldDeco('Trim / variant'))),
                ],
              ),
              const SizedBox(height: 10),
              TextField(controller: _titleC, decoration: _fieldDeco('Repair title (e.g. Spark Plug Replacement)')),
              const SizedBox(height: 10),
              TextField(controller: _summaryC, maxLines: 2, decoration: _fieldDeco('Short summary')),
              const SizedBox(height: 14),
              OutlinedButton.icon(
                onPressed: _pickCover,
                icon: const Icon(Icons.add_photo_alternate_outlined),
                label: Text(_coverBase64 == null ? 'Add cover photo' : 'Change cover photo'),
              ),
              const SizedBox(height: 20),
              Text('STEPS', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.1, color: Colors.white.withValues(alpha: 0.55), fontSize: 11)),
              const SizedBox(height: 10),
              ..._steps.asMap().entries.map((e) => _StepEditor(
                    index: e.key,
                    step: e.value,
                    onRemove: _steps.length > 1 ? () => setState(() => _steps.removeAt(e.key)) : null,
                  )),
              TextButton.icon(
                onPressed: () => setState(() => _steps.add(_EditableStep())),
                icon: const Icon(Icons.add_rounded),
                label: const Text('Add step'),
              ),
            ],
          ),
        );
      },
    );
  }

  InputDecoration _fieldDeco(String label) {
    return InputDecoration(
      labelText: label,
      filled: true,
      fillColor: Colors.white.withValues(alpha: 0.06),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
    );
  }
}

class _EditableStep {
  _EditableStep();

  final titleC = TextEditingController();
  final bodyC = TextEditingController();
  final toolsC = TextEditingController();
  final warningC = TextEditingController();
  String? imageBase64;

  void dispose() {
    titleC.dispose();
    bodyC.dispose();
    toolsC.dispose();
    warningC.dispose();
  }
}

class _StepEditor extends StatefulWidget {
  const _StepEditor({required this.index, required this.step, this.onRemove});

  final int index;
  final _EditableStep step;
  final VoidCallback? onRemove;

  @override
  State<_StepEditor> createState() => _StepEditorState();
}

class _StepEditorState extends State<_StepEditor> {
  Future<void> _pickPhoto() async {
    final b64 = await ngmyPickImageBase64(maxWidth: 1600);
    if (b64 != null) {
      widget.step.imageBase64 = b64;
      if (mounted) setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    final step = widget.step;
    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.04),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: _accent.withValues(alpha: 0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Text('Step ${widget.index + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
              const Spacer(),
              if (widget.onRemove != null)
                IconButton(onPressed: widget.onRemove, icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.45), size: 20)),
            ],
          ),
          TextField(controller: step.titleC, decoration: const InputDecoration(labelText: 'Step title')),
          const SizedBox(height: 8),
          TextField(controller: step.bodyC, maxLines: 4, decoration: const InputDecoration(labelText: 'Instructions')),
          const SizedBox(height: 8),
          TextField(controller: step.toolsC, decoration: const InputDecoration(labelText: 'Tools (comma separated)')),
          const SizedBox(height: 8),
          TextField(controller: step.warningC, decoration: const InputDecoration(labelText: 'Warning (optional)')),
          const SizedBox(height: 8),
          OutlinedButton.icon(
            onPressed: _pickPhoto,
            icon: const Icon(Icons.photo_camera_outlined, size: 18),
            label: Text(step.imageBase64 == null ? 'Add step photo' : 'Photo added — tap to change'),
          ),
        ],
      ),
    );
  }
}
