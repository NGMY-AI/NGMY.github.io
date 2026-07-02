import 'package:flutter/material.dart';

import 'ngmy_mechanic_car_scene.dart';
import 'ngmy_mechanic_car_mesh.dart';
import 'ngmy_mechanic_studio_models.dart';

void showNgmyMechanicStudio({required BuildContext context}) {
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => const NgmyMechanicStudioPage(),
    ),
  );
}

class NgmyMechanicStudioPage extends StatefulWidget {
  const NgmyMechanicStudioPage({super.key});

  @override
  State<NgmyMechanicStudioPage> createState() => _NgmyMechanicStudioPageState();
}

class _NgmyMechanicStudioPageState extends State<NgmyMechanicStudioPage> {
  int _carIndex = 0;
  NgmyMechanicMode _mode = NgmyMechanicMode.explore;
  final Set<String> _removed = {};
  final Set<String> _learned = {};
  String? _selectedId;
  double _explode = 0.0;
  double _doorOpen = 0.0;
  bool _hoodOpen = false;

  NgmyMechanicCarProfile get _car => kNgmyMechanicCars[_carIndex];
  List<NgmyMechanicCarPart> get _parts => ngmyMechanicPartsForCar(_car);

  NgmyMechanicCarDoorState get _doors => NgmyMechanicCarDoorState(
        frontLeft: _doorOpen,
        frontRight: _doorOpen,
        rearLeft: _doorOpen * 0.85,
        rearRight: _doorOpen * 0.85,
        hood: _hoodOpen ? 1.0 : 0.0,
      );

  int get _installedCount => _parts.length - _removed.length;

  void _selectCar(int i) {
    setState(() {
      _carIndex = i;
      _removed.clear();
      _selectedId = null;
      _explode = 0;
      _doorOpen = 0;
      _hoodOpen = false;
    });
  }

  void _setMode(NgmyMechanicMode m) {
    setState(() {
      _mode = m;
      _selectedId = null;
      if (m == NgmyMechanicMode.explore) {
        _explode = 0;
      } else if (m == NgmyMechanicMode.disassemble && _removed.isEmpty) {
        _explode = 0.35;
      } else if (m == NgmyMechanicMode.assemble) {
        _explode = _removed.isEmpty ? 0 : 0.45;
      }
    });
  }

  void _onPartTap(NgmyMechanicCarPart part) {
    setState(() {
      _selectedId = part.id;
      _learned.add(part.id);
      if (_mode == NgmyMechanicMode.disassemble) {
        _removed.add(part.id);
        _explode = (_removed.length / _parts.length).clamp(0.25, 1.0);
      }
    });
    _showPartSheet(part);
  }

  void _installPart(NgmyMechanicCarPart part) {
    setState(() {
      _removed.remove(part.id);
      _selectedId = part.id;
      _learned.add(part.id);
      _explode = _removed.isEmpty ? 0.15 : (_removed.length / _parts.length).clamp(0.2, 0.85);
    });
    if (_removed.isEmpty && _mode == NgmyMechanicMode.assemble) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: const Text('Build complete — you rebuilt the whole car!'),
          backgroundColor: kNgmyMechanicAccent,
          behavior: SnackBarBehavior.floating,
        ),
      );
    }
  }

  void _showPartSheet(NgmyMechanicCarPart part) {
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF111827),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(22)),
      ),
      builder: (ctx) {
        return Padding(
          padding: EdgeInsets.fromLTRB(20, 16, 20, 20 + MediaQuery.paddingOf(ctx).bottom),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(
                    color: Colors.white24,
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
              ),
              const SizedBox(height: 14),
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(colors: [part.color, part.color.withValues(alpha: 0.5)]),
                      borderRadius: BorderRadius.circular(14),
                    ),
                    child: Icon(part.icon, color: Colors.white, size: 28),
                  ),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          part.name,
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            fontSize: 20,
                          ),
                        ),
                        Text(
                          ngmyMechanicCategoryLabel(part.category),
                          style: TextStyle(color: kNgmyMechanicAccent2.withValues(alpha: 0.9), fontSize: 12),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              _infoBlock('What it is', part.summary),
              const SizedBox(height: 10),
              _infoBlock('What it does', part.function),
              const SizedBox(height: 10),
              _infoBlock('Pro tip', part.maintenance),
              if (_mode == NgmyMechanicMode.disassemble && !_removed.contains(part.id)) ...[
                const SizedBox(height: 16),
                SizedBox(
                  width: double.infinity,
                  child: FilledButton.icon(
                    onPressed: () {
                      Navigator.pop(ctx);
                      setState(() {
                        _removed.add(part.id);
                        _explode = (_removed.length / _parts.length).clamp(0.25, 1.0);
                      });
                    },
                    icon: const Icon(Icons.build_circle_outlined),
                    label: const Text('Remove this part'),
                    style: FilledButton.styleFrom(backgroundColor: kNgmyMechanicAccent),
                  ),
                ),
              ],
            ],
          ),
        );
      },
    );
  }

  Widget _infoBlock(String title, String body) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.06),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.white12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(color: kNgmyMechanicAccent, fontWeight: FontWeight.w800, fontSize: 12)),
          const SizedBox(height: 4),
          Text(body, style: const TextStyle(color: Colors.white70, height: 1.4, fontSize: 13)),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final progress = _parts.isEmpty ? 0.0 : _learned.length / _parts.length;

    return Scaffold(
      backgroundColor: kNgmyMechanicGarageBg,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back_rounded, color: Colors.white),
          onPressed: () => Navigator.pop(context),
        ),
        title: ShaderMask(
          shaderCallback: (b) => const LinearGradient(colors: [kNgmyMechanicAccent, kNgmyMechanicAccent2]).createShader(b),
          child: const Text(
            '3D MECHANIC LAB',
            style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1, color: Colors.white, fontSize: 16),
          ),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 12),
            child: Center(
              child: Text(
                '${(_learned.length).clamp(0, _parts.length)}/${_parts.length} learned',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 11, fontWeight: FontWeight.w700),
              ),
            ),
          ),
        ],
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Learn real automotive systems — take cars apart, study every component, and put them back together.',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 12, height: 1.35),
                ),
                const SizedBox(height: 10),
                ClipRRect(
                  borderRadius: BorderRadius.circular(6),
                  child: LinearProgressIndicator(
                    value: progress,
                    minHeight: 5,
                    backgroundColor: Colors.white12,
                    color: kNgmyMechanicAccent,
                  ),
                ),
              ],
            ),
          ),
          SizedBox(
            height: 92,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              itemCount: kNgmyMechanicCars.length,
              separatorBuilder: (_, __) => const SizedBox(width: 10),
              itemBuilder: (_, i) {
                final c = kNgmyMechanicCars[i];
                final sel = i == _carIndex;
                return InkWell(
                  onTap: () => _selectCar(i),
                  borderRadius: BorderRadius.circular(16),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 220),
                    width: 132,
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      gradient: sel
                          ? LinearGradient(colors: [c.bodyColor.withValues(alpha: 0.9), c.accentColor.withValues(alpha: 0.55)])
                          : null,
                      color: sel ? null : Colors.white.withValues(alpha: 0.06),
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: sel ? c.accentColor : Colors.white24, width: sel ? 2 : 1),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Icon(c.icon, color: Colors.white, size: 26),
                        const Spacer(),
                        Text(c.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                        Text(
                          c.tagline,
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 9, height: 1.2),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
          const SizedBox(height: 8),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              children: [
                _modeChip(NgmyMechanicMode.explore, Icons.explore_rounded, 'Explore'),
                const SizedBox(width: 8),
                _modeChip(NgmyMechanicMode.disassemble, Icons.handyman_rounded, 'Disassemble'),
                const SizedBox(width: 8),
                _modeChip(NgmyMechanicMode.assemble, Icons.construction_rounded, 'Assemble'),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              children: [
                Expanded(
                  child: _accessoryChip(
                    icon: Icons.door_front_door_rounded,
                    label: _doorOpen > 0.5 ? 'Close doors' : 'Open doors',
                    active: _doorOpen > 0.5,
                    onTap: () => setState(() => _doorOpen = _doorOpen > 0.5 ? 0.0 : 1.0),
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: _accessoryChip(
                    icon: Icons.car_repair_rounded,
                    label: _hoodOpen ? 'Close hood' : 'Open hood',
                    active: _hoodOpen,
                    onTap: () => setState(() => _hoodOpen = !_hoodOpen),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(12, 0, 12, 8),
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: kNgmyMechanicAccent2.withValues(alpha: 0.25)),
                  boxShadow: [
                    BoxShadow(
                      color: kNgmyMechanicAccent.withValues(alpha: 0.12),
                      blurRadius: 24,
                      spreadRadius: 2,
                    ),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: NgmyMechanicCarScene(
                    car: _car,
                    parts: _parts,
                    removedPartIds: _removed,
                    selectedPartId: _selectedId,
                    explodeStrength: _explode,
                    doors: _doors,
                    showPartMarkers: _mode != NgmyMechanicMode.explore,
                    onPartTap: _onPartTap,
                  ),
                ),
              ),
            ),
          ),
          _partsTray(),
        ],
      ),
    );
  }

  Widget _accessoryChip({
    required IconData icon,
    required String label,
    required bool active,
    required VoidCallback onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 8),
          decoration: BoxDecoration(
            gradient: active ? const LinearGradient(colors: [Color(0xFF22C55E), Color(0xFF16A34A)]) : null,
            color: active ? null : Colors.white.withValues(alpha: 0.06),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: active ? Colors.transparent : Colors.white24),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 16, color: Colors.white),
              const SizedBox(width: 6),
              Flexible(
                child: Text(
                  label,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _modeChip(NgmyMechanicMode mode, IconData icon, String label) {
    final sel = _mode == mode;
    return Expanded(
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => _setMode(mode),
          borderRadius: BorderRadius.circular(12),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 180),
            padding: const EdgeInsets.symmetric(vertical: 10),
            decoration: BoxDecoration(
              gradient: sel ? const LinearGradient(colors: [kNgmyMechanicAccent, kNgmyMechanicAccent2]) : null,
              color: sel ? null : Colors.white.withValues(alpha: 0.06),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: sel ? Colors.transparent : Colors.white24),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 16, color: Colors.white),
                const SizedBox(width: 6),
                Flexible(
                  child: Text(
                    label,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _partsTray() {
    final removedParts = _parts.where((p) => _removed.contains(p.id)).toList()
      ..sort((a, b) => a.installOrder.compareTo(b.installOrder));
    final trayH = removedParts.isEmpty ? 72.0 : 128.0;

    return Container(
      width: double.infinity,
      padding: EdgeInsets.fromLTRB(16, 10, 16, 10 + MediaQuery.paddingOf(context).bottom),
      decoration: BoxDecoration(
        color: const Color(0xFF0F172A),
        border: Border(top: BorderSide(color: kNgmyMechanicAccent.withValues(alpha: 0.25))),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Row(
            children: [
              Text(
                _mode == NgmyMechanicMode.assemble ? 'Parts bench — tap to install' : 'Work bay',
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12),
              ),
              const Spacer(),
              Text(
                '$_installedCount / ${_parts.length} on car',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11),
              ),
            ],
          ),
          SizedBox(
            height: trayH,
            child: removedParts.isEmpty
                ? Center(
                    child: Text(
                      _mode == NgmyMechanicMode.disassemble
                          ? 'Tap glowing parts on the car to remove them'
                          : _mode == NgmyMechanicMode.assemble
                              ? 'Remove parts first, then reinstall from here'
                              : 'Tap any part on the car to learn what it does',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 12),
                    ),
                  )
                : ListView.separated(
                    scrollDirection: Axis.horizontal,
                    itemCount: removedParts.length,
                    separatorBuilder: (_, __) => const SizedBox(width: 10),
                    itemBuilder: (_, i) {
                      final p = removedParts[i];
                      return InkWell(
                        onTap: _mode == NgmyMechanicMode.assemble ? () => _installPart(p) : () => _showPartSheet(p),
                        borderRadius: BorderRadius.circular(14),
                        child: Container(
                          width: 96,
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: p.color.withValues(alpha: 0.25),
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(color: p.color.withValues(alpha: 0.6)),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Icon(p.icon, color: Colors.white, size: 26),
                              const SizedBox(height: 6),
                              Text(
                                p.name,
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                textAlign: TextAlign.center,
                                style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w700),
                              ),
                              if (_mode == NgmyMechanicMode.assemble)
                                const Padding(
                                  padding: EdgeInsets.only(top: 4),
                                  child: Text('Install', style: TextStyle(color: kNgmyMechanicAccent2, fontSize: 8)),
                                ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}
