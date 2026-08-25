import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_civic_user_groups.dart';
import 'ngmy_civic_user_groups_payments.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_download.dart';

const _kBolt = Color(0xFF67E8F9);
const _kBoltHot = Color(0xFFE0F2FE);
const _kInk = Color(0xFF020617);
const _kPanel = Color(0xFF0B1224);

Future<void> openNgmyCivicUserGroupsHub(
  BuildContext context, {
  required String userEmail,
  required String userName,
  required bool isAdmin,
}) {
  return NgmyNavigator.push(
    context,
    NgmyCivicUserGroupsHubScreen(
      userEmail: userEmail,
      userName: userName,
      isAdmin: isAdmin,
    ),
  );
}

class NgmyCivicUserGroupsHubScreen extends StatefulWidget {
  const NgmyCivicUserGroupsHubScreen({
    super.key,
    required this.userEmail,
    required this.userName,
    required this.isAdmin,
  });

  final String userEmail;
  final String userName;
  final bool isAdmin;

  @override
  State<NgmyCivicUserGroupsHubScreen> createState() =>
      _NgmyCivicUserGroupsHubScreenState();
}

class _NgmyCivicUserGroupsHubScreenState
    extends State<NgmyCivicUserGroupsHubScreen>
    with TickerProviderStateMixin {
  late final AnimationController _bolt;
  late final AnimationController _pulse;
  late final AnimationController _stagger;
  List<NgmyCivicUserGroup> _owned = [];
  List<NgmyCivicUserGroup> _joined = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _bolt = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1400),
    )..forward();
    _pulse = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1800),
    )..repeat(reverse: true);
    _stagger = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 900),
    )..forward();
    _reload();
  }

  @override
  void dispose() {
    _bolt.dispose();
    _pulse.dispose();
    _stagger.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    setState(() => _loading = true);
    final owned = await NgmyCivicUserGroupsStore.ownedBy(widget.userEmail);
    final joined = await NgmyCivicUserGroupsStore.joinedBy(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _owned = owned;
      _joined = joined;
      _loading = false;
    });
  }

  Future<void> _createGroup() async {
    final ok = await NgmyCivicUserGroupsPayments.ensureCanCreateOwnedGroup(
      context: context,
      email: widget.userEmail,
      isAdmin: widget.isAdmin,
    );
    if (!ok || !mounted) return;
    final nameC = TextEditingController();
    final created = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: _kPanel,
        title: const Text('Create lightning group',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
        content: TextField(
          controller: nameC,
          autofocus: true,
          style: const TextStyle(color: Colors.white),
          decoration: const InputDecoration(
            hintText: 'Group name',
            hintStyle: TextStyle(color: Colors.white54),
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx, false),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, true),
            style: FilledButton.styleFrom(backgroundColor: _kBolt),
            child: const Text('Create', style: TextStyle(color: _kInk)),
          ),
        ],
      ),
    );
    if (created != true || !mounted) return;
    final group = await NgmyCivicUserGroupsStore.createGroup(
      name: nameC.text,
      ownerEmail: widget.userEmail,
      ownerName: widget.userName,
    );
    nameC.dispose();
    await _reload();
    if (!mounted) return;
    await NgmyNavigator.push(
      context,
      NgmyCivicUserGroupHomeScreen(
        groupId: group.id,
        userEmail: widget.userEmail,
        userName: widget.userName,
        isAdmin: widget.isAdmin,
      ),
    );
    await _reload();
  }

  Future<void> _joinByCode() async {
    final codeC = TextEditingController();
    final go = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: _kPanel,
        title: const Text('Join with code',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
        content: TextField(
          controller: codeC,
          autofocus: true,
          textCapitalization: TextCapitalization.characters,
          style: const TextStyle(color: Colors.white, letterSpacing: 1.2),
          decoration: const InputDecoration(
            hintText: 'GRP-XXXXXX',
            hintStyle: TextStyle(color: Colors.white54),
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx, false),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, true),
            style: FilledButton.styleFrom(backgroundColor: _kBolt),
            child: const Text('Join', style: TextStyle(color: _kInk)),
          ),
        ],
      ),
    );
    if (go != true || !mounted) return;
    await _joinWithCode(codeC.text);
    codeC.dispose();
  }

  Future<void> _joinWithCode(String raw) async {
    final found = await NgmyCivicUserGroupsStore.findByInviteCode(raw);
    if (found == null) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('No group found for that code.')),
      );
      return;
    }
    if (found.isMember(widget.userEmail)) {
      if (!mounted) return;
      await NgmyNavigator.push(
        context,
        NgmyCivicUserGroupHomeScreen(
          groupId: found.id,
          userEmail: widget.userEmail,
          userName: widget.userName,
          isAdmin: widget.isAdmin,
        ),
      );
      await _reload();
      return;
    }
    final underCap = await NgmyCivicUserGroupsPayments.canAcceptAnotherMember(
      ownerEmail: found.ownerEmail,
      groupId: found.id,
      currentMemberCount: found.memberCount,
      isAdmin: false,
    );
    if (!underCap) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            'This group is full (100 members). Ask the owner to unlock more seats.',
          ),
        ),
      );
      return;
    }
    final joined = await NgmyCivicUserGroupsStore.joinByCode(
      inviteCode: found.inviteCode,
      email: widget.userEmail,
      name: widget.userName,
    );
    if (!mounted) return;
    if (joined == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not join that group.')),
      );
      return;
    }
    await _reload();
    if (!mounted) return;
    await NgmyNavigator.push(
      context,
      NgmyCivicUserGroupHomeScreen(
        groupId: joined.id,
        userEmail: widget.userEmail,
        userName: widget.userName,
        isAdmin: widget.isAdmin,
      ),
    );
    await _reload();
  }

  Future<void> _scanQr() async {
    final code = await NgmyNavigator.push<String>(
      context,
      const _NgmyCivicUserGroupScanScreen(),
    );
    if (code == null || code.isEmpty || !mounted) return;
    await _joinWithCode(code);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _kInk,
      body: Stack(
        children: [
          AnimatedBuilder(
            animation: Listenable.merge([_bolt, _pulse]),
            builder: (context, _) {
              return CustomPaint(
                painter: _LightningAtmospherePainter(
                  progress: Curves.easeOutCubic.transform(_bolt.value),
                  pulse: _pulse.value,
                ),
                size: Size.infinite,
              );
            },
          ),
          SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 4, 12, 0),
                  child: Row(
                    children: [
                      IconButton(
                        tooltip: 'Back',
                        onPressed: () => NgmyNavigator.pop(context),
                        icon: const Icon(Icons.arrow_back_ios_new_rounded,
                            color: _kBoltHot),
                      ),
                      const Expanded(
                        child: Text(
                          'LIGHTNING GROUPS',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            letterSpacing: 1.4,
                            fontSize: 15,
                          ),
                        ),
                      ),
                      const SizedBox(width: 48),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 8, 20, 4),
                  child: AnimatedBuilder(
                    animation: _pulse,
                    builder: (context, child) {
                      final g = 0.35 + _pulse.value * 0.45;
                      return Container(
                        padding: const EdgeInsets.all(18),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(22),
                          gradient: LinearGradient(
                            colors: [
                              Color.lerp(_kPanel, _kBolt, g * 0.18)!,
                              _kPanel,
                            ],
                          ),
                          border: Border.all(
                            color: _kBolt.withValues(alpha: 0.25 + g * 0.35),
                          ),
                          boxShadow: [
                            BoxShadow(
                              color: _kBolt.withValues(alpha: 0.12 + g * 0.2),
                              blurRadius: 24,
                              spreadRadius: 1,
                            ),
                          ],
                        ),
                        child: child,
                      );
                    },
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            AnimatedBuilder(
                              animation: _bolt,
                              builder: (context, _) {
                                return Transform.scale(
                                  scale: 0.7 + _bolt.value * 0.3,
                                  child: Icon(
                                    Icons.bolt_rounded,
                                    color: _kBolt,
                                    size: 36,
                                    shadows: [
                                      Shadow(
                                        color: _kBolt.withValues(alpha: 0.8),
                                        blurRadius: 18,
                                      ),
                                    ],
                                  ),
                                );
                              },
                            ),
                            const SizedBox(width: 10),
                            const Expanded(
                              child: Text(
                                'Your own civic circle — no states, no case wallet. '
                                'Invite by code or QR. Owner tracks contributions & spending.',
                                style: TextStyle(
                                  color: Colors.white70,
                                  height: 1.35,
                                  fontSize: 13,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 14),
                        Row(
                          children: [
                            Expanded(
                              child: _GlowButton(
                                label: 'Create group',
                                icon: Icons.add_rounded,
                                pulse: _pulse,
                                onTap: _createGroup,
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: _GlowButton(
                                label: 'Join code',
                                icon: Icons.vpn_key_rounded,
                                pulse: _pulse,
                                outlined: true,
                                onTap: _joinByCode,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 10),
                        _GlowButton(
                          label: 'Scan invite QR',
                          icon: Icons.qr_code_scanner_rounded,
                          pulse: _pulse,
                          outlined: true,
                          onTap: _scanQr,
                        ),
                      ],
                    ),
                  ),
                ),
                if (_loading)
                  const Expanded(
                    child: Center(
                      child: CircularProgressIndicator(color: _kBolt),
                    ),
                  )
                else
                  Expanded(
                    child: ListView(
                      padding: const EdgeInsets.fromLTRB(20, 12, 20, 28),
                      children: [
                        _sectionTitle('YOU OWN'),
                        if (_owned.isEmpty)
                          _emptyHint('Create your free group — one free owned group.')
                        else
                          ..._owned.asMap().entries.map(
                                (e) => _staggerTile(
                                  e.key,
                                  _GroupCard(
                                    group: e.value,
                                    subtitle:
                                        'Owner · ${e.value.memberCount}/$kNgmyCivicUserGroupFreeMemberCap seats',
                                    onTap: () async {
                                      await NgmyNavigator.push(
                                        context,
                                        NgmyCivicUserGroupHomeScreen(
                                          groupId: e.value.id,
                                          userEmail: widget.userEmail,
                                          userName: widget.userName,
                                          isAdmin: widget.isAdmin,
                                        ),
                                      );
                                      await _reload();
                                    },
                                  ),
                                ),
                              ),
                        const SizedBox(height: 18),
                        _sectionTitle('YOU JOINED'),
                        if (_joined.isEmpty)
                          _emptyHint('Join with a code or QR from a friend.')
                        else
                          ..._joined.asMap().entries.map(
                                (e) => _staggerTile(
                                  e.key + _owned.length,
                                  _GroupCard(
                                    group: e.value,
                                    subtitle:
                                        'Member · Owner ${e.value.ownerName}',
                                    onTap: () async {
                                      await NgmyNavigator.push(
                                        context,
                                        NgmyCivicUserGroupHomeScreen(
                                          groupId: e.value.id,
                                          userEmail: widget.userEmail,
                                          userName: widget.userName,
                                          isAdmin: widget.isAdmin,
                                        ),
                                      );
                                      await _reload();
                                    },
                                  ),
                                ),
                              ),
                      ],
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _staggerTile(int index, Widget child) {
    return AnimatedBuilder(
      animation: _stagger,
      builder: (context, _) {
        final t = Curves.easeOutCubic.transform(
          (((_stagger.value * 1.4) - index * 0.08).clamp(0.0, 1.0)),
        );
        return Opacity(
          opacity: t,
          child: Transform.translate(
            offset: Offset(0, (1 - t) * 18),
            child: child,
          ),
        );
      },
    );
  }

  Widget _sectionTitle(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(
          t,
          style: TextStyle(
            color: _kBolt.withValues(alpha: 0.85),
            fontWeight: FontWeight.w800,
            letterSpacing: 1.6,
            fontSize: 11,
          ),
        ),
      );

  Widget _emptyHint(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 12),
        child: Text(t, style: const TextStyle(color: Colors.white38, fontSize: 13)),
      );
}

class _GlowButton extends StatelessWidget {
  const _GlowButton({
    required this.label,
    required this.icon,
    required this.pulse,
    required this.onTap,
    this.outlined = false,
  });

  final String label;
  final IconData icon;
  final Animation<double> pulse;
  final VoidCallback onTap;
  final bool outlined;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: pulse,
      builder: (context, _) {
        final g = pulse.value;
        return Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: onTap,
            borderRadius: BorderRadius.circular(14),
            child: Ink(
              height: 46,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(14),
                color: outlined ? Colors.transparent : _kBolt.withValues(alpha: 0.92),
                border: Border.all(
                  color: _kBolt.withValues(alpha: outlined ? 0.55 + g * 0.35 : 0.9),
                  width: 1.4,
                ),
                boxShadow: outlined
                    ? null
                    : [
                        BoxShadow(
                          color: _kBolt.withValues(alpha: 0.25 + g * 0.25),
                          blurRadius: 16,
                        ),
                      ],
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(icon, size: 18, color: outlined ? _kBolt : _kInk),
                  const SizedBox(width: 8),
                  Text(
                    label,
                    style: TextStyle(
                      color: outlined ? _kBoltHot : _kInk,
                      fontWeight: FontWeight.w800,
                      fontSize: 13,
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}

class _GroupCard extends StatelessWidget {
  const _GroupCard({
    required this.group,
    required this.subtitle,
    required this.onTap,
  });

  final NgmyCivicUserGroup group;
  final String subtitle;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(16),
          child: Ink(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              color: _kPanel.withValues(alpha: 0.92),
              border: Border.all(color: _kBolt.withValues(alpha: 0.22)),
            ),
            child: Row(
              children: [
                Container(
                  width: 42,
                  height: 42,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _kBolt.withValues(alpha: 0.15),
                    border: Border.all(color: _kBolt.withValues(alpha: 0.5)),
                  ),
                  child: const Icon(Icons.bolt_rounded, color: _kBolt),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        group.name,
                        style: const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w800,
                          fontSize: 15,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        subtitle,
                        style: const TextStyle(color: Colors.white54, fontSize: 12),
                      ),
                    ],
                  ),
                ),
                const Icon(Icons.chevron_right_rounded, color: Colors.white38),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _LightningAtmospherePainter extends CustomPainter {
  _LightningAtmospherePainter({required this.progress, required this.pulse});

  final double progress;
  final double pulse;

  @override
  void paint(Canvas canvas, Size size) {
    final bg = Paint()
      ..shader = ui.Gradient.radial(
        Offset(size.width * 0.72, size.height * 0.12),
        size.width * 0.7,
        [
          Color.lerp(_kInk, const Color(0xFF083344), 0.55 + pulse * 0.2)!,
          _kInk,
        ],
      );
    canvas.drawRect(Offset.zero & size, bg);

    final boltPath = Path()
      ..moveTo(size.width * 0.62, size.height * 0.02)
      ..lineTo(size.width * 0.48, size.height * 0.18)
      ..lineTo(size.width * 0.56, size.height * 0.18)
      ..lineTo(size.width * 0.40, size.height * 0.38);

    final glow = Paint()
      ..color = _kBolt.withValues(alpha: 0.12 + pulse * 0.1)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 10
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14);
    final stroke = Paint()
      ..color = _kBolt.withValues(alpha: 0.35 + progress * 0.45)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    final metric = boltPath.computeMetrics().first;
    final drawn = metric.extractPath(0, metric.length * progress);
    canvas.drawPath(drawn, glow);
    canvas.drawPath(drawn, stroke);

    final spark = Paint()..color = _kBoltHot.withValues(alpha: 0.15 + pulse * 0.2);
    for (var i = 0; i < 12; i++) {
      final x = (math.sin(i * 1.7 + pulse * 3) * 0.5 + 0.5) * size.width;
      final y = (math.cos(i * 2.1 + pulse * 2) * 0.5 + 0.5) * size.height * 0.55;
      canvas.drawCircle(Offset(x, y), 1.6 + pulse, spark);
    }
  }

  @override
  bool shouldRepaint(covariant _LightningAtmospherePainter oldDelegate) =>
      oldDelegate.progress != progress || oldDelegate.pulse != pulse;
}

class NgmyCivicUserGroupHomeScreen extends StatefulWidget {
  const NgmyCivicUserGroupHomeScreen({
    super.key,
    required this.groupId,
    required this.userEmail,
    required this.userName,
    required this.isAdmin,
  });

  final String groupId;
  final String userEmail;
  final String userName;
  final bool isAdmin;

  @override
  State<NgmyCivicUserGroupHomeScreen> createState() =>
      _NgmyCivicUserGroupHomeScreenState();
}

class _NgmyCivicUserGroupHomeScreenState
    extends State<NgmyCivicUserGroupHomeScreen>
    with SingleTickerProviderStateMixin {
  NgmyCivicUserGroup? _group;
  late final AnimationController _pulse;
  int _tab = 0; // 0 ledger, 1 notes, 2 members, 3 invite

  bool get _isOwner =>
      _group != null &&
      (_group!.isOwner(widget.userEmail) || widget.isAdmin);

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1600),
    )..repeat(reverse: true);
    _reload();
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final g = await NgmyCivicUserGroupsStore.findById(widget.groupId);
    if (!mounted) return;
    setState(() => _group = g);
  }

  Future<void> _addLedger(NgmyCivicUserGroupLedgerKind kind) async {
    if (!_isOwner || _group == null) return;
    final labelC = TextEditingController();
    final amountC = TextEditingController();
    final noteC = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: _kPanel,
        title: Text(
          kind == NgmyCivicUserGroupLedgerKind.contribution
              ? 'Record contribution'
              : 'Record spending',
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: labelC,
              style: const TextStyle(color: Colors.white),
              decoration: InputDecoration(
                hintText: kind == NgmyCivicUserGroupLedgerKind.contribution
                    ? 'Who contributed'
                    : 'What was spent',
                hintStyle: const TextStyle(color: Colors.white54),
              ),
            ),
            TextField(
              controller: amountC,
              keyboardType:
                  const TextInputType.numberWithOptions(decimal: true),
              style: const TextStyle(color: Colors.white),
              decoration: const InputDecoration(
                hintText: 'Amount',
                hintStyle: TextStyle(color: Colors.white54),
              ),
            ),
            TextField(
              controller: noteC,
              style: const TextStyle(color: Colors.white),
              decoration: const InputDecoration(
                hintText: 'Note (optional)',
                hintStyle: TextStyle(color: Colors.white54),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx, false),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, true),
            style: FilledButton.styleFrom(backgroundColor: _kBolt),
            child: const Text('Save', style: TextStyle(color: _kInk)),
          ),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    final amount = double.tryParse(amountC.text.trim()) ?? 0;
    if (amount <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter a valid amount.')),
      );
      return;
    }
    _group!.ledger.insert(
      0,
      NgmyCivicUserGroupLedgerEntry(
        id: 'led_${DateTime.now().millisecondsSinceEpoch}',
        kind: kind,
        amount: amount,
        label: labelC.text.trim().isEmpty ? '—' : labelC.text.trim(),
        note: noteC.text.trim(),
        at: DateTime.now().toUtc(),
        byEmail: widget.userEmail,
      ),
    );
    await NgmyCivicUserGroupsStore.saveGroup(_group!);
    labelC.dispose();
    amountC.dispose();
    noteC.dispose();
    await _reload();
  }

  Future<void> _addNote() async {
    if (!_isOwner || _group == null) return;
    final textC = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: _kPanel,
        title: const Text('Group note',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
        content: TextField(
          controller: textC,
          maxLines: 4,
          autofocus: true,
          style: const TextStyle(color: Colors.white),
          decoration: const InputDecoration(
            hintText: 'Write a note…',
            hintStyle: TextStyle(color: Colors.white54),
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx, false),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, true),
            style: FilledButton.styleFrom(backgroundColor: _kBolt),
            child: const Text('Save', style: TextStyle(color: _kInk)),
          ),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    final text = textC.text.trim();
    textC.dispose();
    if (text.isEmpty) return;
    _group!.notes.insert(
      0,
      NgmyCivicUserGroupNote(
        id: 'note_${DateTime.now().millisecondsSinceEpoch}',
        text: text,
        at: DateTime.now().toUtc(),
        byEmail: widget.userEmail,
      ),
    );
    await NgmyCivicUserGroupsStore.saveGroup(_group!);
    await _reload();
  }

  Future<void> _removeMember(String email) async {
    if (!_isOwner || _group == null) return;
    final confirm = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: _kPanel,
        title: const Text('Remove member?',
            style: TextStyle(color: Colors.white)),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx, false),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, true),
            child: const Text('Remove'),
          ),
        ],
      ),
    );
    if (confirm != true) return;
    await NgmyCivicUserGroupsStore.removeMember(
      groupId: _group!.id,
      memberEmail: email,
    );
    await _reload();
  }

  Future<void> _copyCode() async {
    final g = _group;
    if (g == null) return;
    await Clipboard.setData(ClipboardData(text: g.inviteCode));
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Copied ${g.inviteCode}')),
    );
  }

  Future<void> _downloadQr() async {
    final g = _group;
    if (g == null) return;
    try {
      final painter = QrPainter(
        data: ngmyCivicUserGroupQrPayload(g.inviteCode),
        version: QrVersions.auto,
        gapless: true,
        eyeStyle: const QrEyeStyle(color: Color(0xFF020617)),
        dataModuleStyle: const QrDataModuleStyle(color: Color(0xFF020617)),
      );
      final image = await painter.toImageData(720);
      if (image == null || !mounted) return;
      final msg = await downloadNgmyQrImage(
        image.buffer.asUint8List(),
        'ngmy_group_${g.inviteCode}.png',
      );
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Could not save QR: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final g = _group;
    if (g == null) {
      return const Scaffold(
        backgroundColor: _kInk,
        body: Center(child: CircularProgressIndicator(color: _kBolt)),
      );
    }

    return Scaffold(
      backgroundColor: _kInk,
      body: Stack(
        children: [
          AnimatedBuilder(
            animation: _pulse,
            builder: (context, _) => CustomPaint(
              painter: _LightningAtmospherePainter(
                progress: 1,
                pulse: _pulse.value,
              ),
              size: Size.infinite,
            ),
          ),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 4, 12, 0),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: () => NgmyNavigator.pop(context),
                        icon: const Icon(Icons.arrow_back_ios_new_rounded,
                            color: _kBoltHot),
                      ),
                      Expanded(
                        child: Text(
                          g.name.toUpperCase(),
                          textAlign: TextAlign.center,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            letterSpacing: 1.1,
                            fontSize: 14,
                          ),
                        ),
                      ),
                      const SizedBox(width: 48),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 8, 16, 8),
                  child: Container(
                    padding: const EdgeInsets.all(14),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(18),
                      color: _kPanel.withValues(alpha: 0.9),
                      border: Border.all(color: _kBolt.withValues(alpha: 0.3)),
                    ),
                    child: Row(
                      children: [
                        _stat('In', g.totalContributions),
                        _stat('Out', g.totalSpending),
                        _stat('Balance', g.balance),
                        _stat('People', g.memberCount.toDouble(), money: false),
                      ],
                    ),
                  ),
                ),
                if (_isOwner)
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: Row(
                      children: [
                        Expanded(
                          child: _GlowButton(
                            label: 'Contribution',
                            icon: Icons.add_card_rounded,
                            pulse: _pulse,
                            onTap: () => _addLedger(
                              NgmyCivicUserGroupLedgerKind.contribution,
                            ),
                          ),
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: _GlowButton(
                            label: 'Spending',
                            icon: Icons.payments_outlined,
                            pulse: _pulse,
                            outlined: true,
                            onTap: () => _addLedger(
                              NgmyCivicUserGroupLedgerKind.spending,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                const SizedBox(height: 10),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  child: Row(
                    children: [
                      for (final e in [
                        (0, 'Ledger'),
                        (1, 'Notes'),
                        (2, 'People'),
                        (3, 'Invite'),
                      ])
                        Expanded(
                          child: TextButton(
                            onPressed: () => setState(() => _tab = e.$1),
                            child: Text(
                              e.$2,
                              style: TextStyle(
                                color: _tab == e.$1 ? _kBolt : Colors.white38,
                                fontWeight: FontWeight.w800,
                                fontSize: 12,
                              ),
                            ),
                          ),
                        ),
                    ],
                  ),
                ),
                Expanded(child: _buildTab(g)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _stat(String label, double value, {bool money = true}) {
    return Expanded(
      child: Column(
        children: [
          Text(label,
              style: const TextStyle(color: Colors.white38, fontSize: 10)),
          const SizedBox(height: 2),
          Text(
            money ? '\$${value.toStringAsFixed(2)}' : value.toInt().toString(),
            style: const TextStyle(
              color: _kBoltHot,
              fontWeight: FontWeight.w900,
              fontSize: 13,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTab(NgmyCivicUserGroup g) {
    switch (_tab) {
      case 1:
        return ListView(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
          children: [
            if (_isOwner)
              Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: _GlowButton(
                  label: 'Add note',
                  icon: Icons.note_add_outlined,
                  pulse: _pulse,
                  onTap: _addNote,
                ),
              ),
            if (g.notes.isEmpty)
              const Text('No notes yet.',
                  style: TextStyle(color: Colors.white38))
            else
              ...g.notes.map(
                (n) => Container(
                  margin: const EdgeInsets.only(bottom: 8),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: _kPanel,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: _kBolt.withValues(alpha: 0.15)),
                  ),
                  child: Text(n.text,
                      style: const TextStyle(color: Colors.white70, height: 1.35)),
                ),
              ),
          ],
        );
      case 2:
        return ListView(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
          children: [
            _personTile(g.ownerName, g.ownerEmail, 'Owner', null),
            ...g.members.map(
              (m) => _personTile(
                m.name,
                m.email,
                'Member',
                _isOwner ? () => _removeMember(m.email) : null,
              ),
            ),
            if (g.memberCount >= kNgmyCivicUserGroupFreeMemberCap && _isOwner)
              Padding(
                padding: const EdgeInsets.only(top: 12),
                child: _GlowButton(
                  label: 'Unlock 100+ members',
                  icon: Icons.lock_open_rounded,
                  pulse: _pulse,
                  onTap: () async {
                    await NgmyCivicUserGroupsPayments.ensureCanAcceptMember(
                      context: context,
                      ownerEmail: g.ownerEmail,
                      groupId: g.id,
                      currentMemberCount: g.memberCount,
                      isAdmin: widget.isAdmin,
                    );
                  },
                ),
              ),
          ],
        );
      case 3:
        return ListView(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
          children: [
            Center(
              child: Container(
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  boxShadow: [
                    BoxShadow(
                      color: _kBolt.withValues(alpha: 0.35),
                      blurRadius: 24,
                    ),
                  ],
                ),
                child: QrImageView(
                  data: ngmyCivicUserGroupQrPayload(g.inviteCode),
                  size: 200,
                  backgroundColor: Colors.white,
                ),
              ),
            ),
            const SizedBox(height: 16),
            Center(
              child: SelectableText(
                g.inviteCode,
                style: const TextStyle(
                  color: _kBolt,
                  fontWeight: FontWeight.w900,
                  fontSize: 22,
                  letterSpacing: 2,
                ),
              ),
            ),
            const SizedBox(height: 14),
            if (_isOwner) ...[
              _GlowButton(
                label: 'Copy invite code',
                icon: Icons.copy_rounded,
                pulse: _pulse,
                onTap: _copyCode,
              ),
              const SizedBox(height: 10),
              _GlowButton(
                label: 'Download QR',
                icon: Icons.download_rounded,
                pulse: _pulse,
                outlined: true,
                onTap: _downloadQr,
              ),
            ] else
              const Text(
                'Ask the owner for the code or QR to invite others.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white38),
              ),
          ],
        );
      default:
        final entries = g.ledger;
        return ListView(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
          children: [
            if (entries.isEmpty)
              const Text('No contributions or spending yet.',
                  style: TextStyle(color: Colors.white38))
            else
              ...entries.map((e) {
                final inMoney =
                    e.kind == NgmyCivicUserGroupLedgerKind.contribution;
                return Container(
                  margin: const EdgeInsets.only(bottom: 8),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: _kPanel,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(
                      color: (inMoney ? _kBolt : Colors.orangeAccent)
                          .withValues(alpha: 0.25),
                    ),
                  ),
                  child: Row(
                    children: [
                      Icon(
                        inMoney
                            ? Icons.south_west_rounded
                            : Icons.north_east_rounded,
                        color: inMoney ? _kBolt : Colors.orangeAccent,
                        size: 18,
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(e.label,
                                style: const TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.w700)),
                            if (e.note.isNotEmpty)
                              Text(e.note,
                                  style: const TextStyle(
                                      color: Colors.white54, fontSize: 12)),
                          ],
                        ),
                      ),
                      Text(
                        '${inMoney ? '+' : '-'}\$${e.amount.toStringAsFixed(2)}',
                        style: TextStyle(
                          color: inMoney ? _kBolt : Colors.orangeAccent,
                          fontWeight: FontWeight.w900,
                        ),
                      ),
                    ],
                  ),
                );
              }),
          ],
        );
    }
  }

  Widget _personTile(
    String name,
    String email,
    String role,
    VoidCallback? onRemove,
  ) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: _kPanel,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: _kBolt.withValues(alpha: 0.15)),
      ),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name,
                    style: const TextStyle(
                        color: Colors.white, fontWeight: FontWeight.w700)),
                Text('$role · $email',
                    style:
                        const TextStyle(color: Colors.white38, fontSize: 11)),
              ],
            ),
          ),
          if (onRemove != null)
            IconButton(
              onPressed: onRemove,
              icon: const Icon(Icons.person_remove_outlined,
                  color: Colors.white54),
            ),
        ],
      ),
    );
  }
}

class _NgmyCivicUserGroupScanScreen extends StatefulWidget {
  const _NgmyCivicUserGroupScanScreen();

  @override
  State<_NgmyCivicUserGroupScanScreen> createState() =>
      _NgmyCivicUserGroupScanScreenState();
}

class _NgmyCivicUserGroupScanScreenState
    extends State<_NgmyCivicUserGroupScanScreen> {
  final _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.noDuplicates,
  );
  bool _done = false;

  void _onDetect(BarcodeCapture capture) {
    if (_done) return;
    for (final b in capture.barcodes) {
      final raw = b.rawValue ?? '';
      final code = ngmyParseCivicUserGroupInviteCode(raw);
      if (code != null) {
        _done = true;
        NgmyNavigator.pop(context, code);
        return;
      }
    }
  }

  @override
  void dispose() {
    _camera.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        title: const Text('Scan group QR'),
        leading: IconButton(
          icon: const Icon(Icons.close),
          onPressed: () => NgmyNavigator.pop(context),
        ),
      ),
      body: MobileScanner(controller: _camera, onDetect: _onDetect),
    );
  }
}
