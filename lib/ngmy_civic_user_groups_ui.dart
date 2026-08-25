import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_civic_user_groups.dart';
import 'ngmy_civic_user_groups_payments.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_download.dart';

const _kBolt = Color(0xFF67E8F9);
const _kBoltHot = Color(0xFFE0F2FE);
const _kHelpGreen = Color(0xFF4ADE80);
const _kHelpGreenHot = Color(0xFFBBF7D0);
/// Matches Civic Registry dark chrome / status-bar area.
const _kInk = Color(0xFF121212);
const _kPanel = Color(0xFF0F111A);

const _kLightningStatusBar = SystemUiOverlayStyle(
  statusBarColor: _kInk,
  statusBarIconBrightness: Brightness.light,
  statusBarBrightness: Brightness.dark,
);

Future<void> _copyGroupCodeSnack(BuildContext context, String code) async {
  await Clipboard.setData(ClipboardData(text: code));
  if (!context.mounted) return;
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text('Copied $code')),
  );
}

List<NgmyCivicUserGroupLedgerEntry> _contributionsForMember(
  NgmyCivicUserGroup group,
  String memberName,
) {
  final key = memberName.trim().toLowerCase();
  return group.ledger
      .where(
        (e) =>
            e.kind == NgmyCivicUserGroupLedgerKind.contribution &&
            e.label.trim().toLowerCase() == key,
      )
      .toList();
}

double _contributionTotalForMember(NgmyCivicUserGroup group, String memberName) =>
    _contributionsForMember(group, memberName)
        .fold<double>(0, (s, e) => s + e.amount);

enum _MemberHistoryFilter { all, contributions, missed }

sealed class _MemberHistoryItem {
  const _MemberHistoryItem({required this.at});
  final DateTime at;
}

class _ContributionHistoryItem extends _MemberHistoryItem {
  const _ContributionHistoryItem({required super.at, required this.entry});
  final NgmyCivicUserGroupLedgerEntry entry;
}

class _MissedHistoryItem extends _MemberHistoryItem {
  const _MissedHistoryItem({
    required super.at,
    required this.purpose,
    required this.pending,
    this.entryId = '',
  });
  final String purpose;
  final bool pending;
  final String entryId;
}

List<_MemberHistoryItem> _memberHistoryItems(
  NgmyCivicUserGroup group,
  String name,
  String email,
) {
  final items = <_MemberHistoryItem>[
    ..._contributionsForMember(group, name).map(
      (e) => _ContributionHistoryItem(at: e.at, entry: e),
    ),
    ...group.missedForMember(name, email).map(
      (e) => _MissedHistoryItem(
        at: e.at,
        purpose: e.purpose,
        pending: false,
        entryId: e.id,
      ),
    ),
  ];
  if (group.helpModeActive &&
      group.helpCampaignId.isNotEmpty &&
      !group.contributedToCampaign(name, group.helpCampaignId)) {
    items.add(
      _MissedHistoryItem(
        at: group.helpCampaignStartedAt ?? DateTime.now().toUtc(),
        purpose: group.helpPurpose.trim().isEmpty
            ? 'Help round'
            : group.helpPurpose.trim(),
        pending: true,
      ),
    );
  }
  items.sort((a, b) => b.at.compareTo(a.at));
  return items;
}

Future<void> _openLightningCashApp(String raw) async {
  final trimmed = raw.trim();
  if (trimmed.isEmpty) return;
  final handle = trimmed.startsWith(r'$') ? trimmed.substring(1) : trimmed;
  final uri = Uri.parse('https://cash.app/\$$handle');
  if (await canLaunchUrl(uri)) {
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}

Future<void> _callLightningPhone(String raw) async {
  final phone = raw.replaceAll(RegExp(r'[^\d+]'), '');
  if (phone.isEmpty) return;
  final uri = Uri.parse('tel:$phone');
  if (await canLaunchUrl(uri)) {
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}

Future<void> openNgmyCivicUserGroupsHub(
  BuildContext context, {
  required String userEmail,
  required String userName,
  required bool isAdmin,
}) {
  NgmyCivicUserGroupsStore.warmCacheFromLocal();
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
  late final AnimationController _orbit;
  late final AnimationController _stagger;
  List<NgmyCivicUserGroup> _owned = [];
  List<NgmyCivicUserGroup> _joined = [];

  @override
  void initState() {
    super.initState();
    _owned = NgmyCivicUserGroupsStore.cachedOwnedBy(widget.userEmail);
    _joined = NgmyCivicUserGroupsStore.cachedJoinedBy(widget.userEmail);
    _bolt = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1400),
    )..forward();
    _pulse = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1800),
    )..repeat(reverse: true);
    _orbit = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 6),
    )..repeat();
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
    _orbit.dispose();
    _stagger.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final owned = await NgmyCivicUserGroupsStore.ownedBy(widget.userEmail);
    final joined = await NgmyCivicUserGroupsStore.joinedBy(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _owned = owned;
      _joined = joined;
    });
  }

  Future<void> _createGroup() async {
    final ok = await NgmyCivicUserGroupsPayments.ensureCanCreateOwnedGroup(
      context: context,
      email: widget.userEmail,
      isAdmin: widget.isAdmin,
    );
    if (!ok || !mounted) return;
    final code = await _showNgmyLightningCreateGroupSheet(context);
    if (code == null || !mounted) return;
    try {
      final group = await NgmyCivicUserGroupsStore.createGroup(
        inviteCode: code,
        ownerEmail: widget.userEmail,
        ownerName: widget.userName,
      );
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
    } on StateError catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(e.message)),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('$e')),
      );
    }
  }

  Future<void> _joinByCode() async {
    final code = await _showNgmyLightningTextSheet(
      context,
      title: 'Join with code',
      subtitle: 'Enter the group code from the owner (3 letters + numbers).',
      hint: ngmyCivicUserGroupCodeHint(),
      confirmLabel: 'Join group',
      icon: Icons.vpn_key_rounded,
      capitalize: true,
      letterSpacing: 1.6,
    );
    if (code == null || !mounted) return;
    await _joinWithCode(code);
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
    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: _kLightningStatusBar,
      child: Scaffold(
        backgroundColor: _kInk,
        body: Stack(
          children: [
            AnimatedBuilder(
            animation: Listenable.merge([_bolt, _pulse, _orbit]),
            builder: (context, _) {
              return CustomPaint(
                painter: _LightningAtmospherePainter(
                  progress: Curves.easeOutCubic.transform(_bolt.value),
                  pulse: _pulse.value,
                  orbit: _orbit.value,
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
                  padding: const EdgeInsets.fromLTRB(12, 6, 12, 0),
                  child: _LightningTopBar(
                    title: 'LIGHTNING GROUPS',
                    onBack: () => NgmyNavigator.pop(context),
                  ),
                ),
                Expanded(
                  child: ListView(
                          padding: const EdgeInsets.fromLTRB(18, 10, 18, 36),
                          children: [
                            _LightningHeroPanel(
                              bolt: _bolt,
                              pulse: _pulse,
                              orbit: _orbit,
                              onCreate: _createGroup,
                              onJoin: _joinByCode,
                              onScan: _scanQr,
                            ),
                            const SizedBox(height: 22),
                            _sectionTitle('YOU OWN'),
                            if (_owned.isEmpty)
                              _emptyHint(
                                  'Create your free group — one free owned group.')
                            else
                              ..._owned.asMap().entries.map(
                                    (e) => _staggerTile(
                                      e.key,
                                      _GroupCard(
                                        group: e.value,
                                        subtitle:
                                            'Owner · ${e.value.memberCount}/$kNgmyCivicUserGroupFreeMemberCap seats',
                                        pulse: _pulse,
                                        orbit: _orbit,
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
                              _emptyHint(
                                  'Join with a code or QR from a friend.')
                            else
                              ..._joined.asMap().entries.map(
                                    (e) => _staggerTile(
                                      e.key + _owned.length,
                                      _GroupCard(
                                        group: e.value,
                                        subtitle:
                                            'Member · Owner ${e.value.ownerName}',
                                        pulse: _pulse,
                                        orbit: _orbit,
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
    required this.pulse,
    required this.orbit,
  });

  final NgmyCivicUserGroup group;
  final String subtitle;
  final VoidCallback onTap;
  final Animation<double> pulse;
  final Animation<double> orbit;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: AnimatedBuilder(
        animation: Listenable.merge([pulse, orbit]),
        builder: (context, _) {
          final g = pulse.value;
          return Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: onTap,
              borderRadius: BorderRadius.circular(18),
              child: CustomPaint(
                painter: _LightningFramePainter(
                  intensity: 0.35 + g * 0.4,
                  corners: true,
                  phase: orbit.value,
                ),
                child: Ink(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(18),
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [
                        Color.lerp(_kPanel, _kBolt, 0.06 + g * 0.05)!,
                        _kPanel.withValues(alpha: 0.95),
                      ],
                    ),
                    border: Border.all(
                      color: _kBolt.withValues(alpha: 0.28 + g * 0.25),
                      width: 1.2,
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: _kBolt.withValues(alpha: 0.08 + g * 0.12),
                        blurRadius: 18,
                      ),
                    ],
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 46,
                        height: 46,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: _kBolt.withValues(alpha: 0.14),
                          border: Border.all(
                            color: _kBolt.withValues(alpha: 0.55),
                          ),
                          boxShadow: [
                            BoxShadow(
                              color: _kBolt.withValues(alpha: 0.35),
                              blurRadius: 12,
                            ),
                          ],
                        ),
                        child: const Icon(Icons.bolt_rounded, color: _kBolt),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              group.inviteCode,
                              style: const TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w900,
                                fontSize: 16,
                                letterSpacing: 1.4,
                              ),
                            ),
                            const SizedBox(height: 2),
                            Text(
                              subtitle,
                              style: const TextStyle(
                                  color: Colors.white54, fontSize: 12),
                            ),
                          ],
                        ),
                      ),
                      Icon(Icons.chevron_right_rounded,
                          color: _kBolt.withValues(alpha: 0.7)),
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _LightningAtmospherePainter extends CustomPainter {
  _LightningAtmospherePainter({
    required this.progress,
    required this.pulse,
    this.orbit = 0,
  });

  final double progress;
  final double pulse;
  final double orbit;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = _kInk);

    final midGlow = Paint()
      ..shader = ui.Gradient.radial(
        Offset(size.width * 0.5, size.height * 0.48),
        size.width * 0.38,
        [
          _kBolt.withValues(alpha: 0.07 + pulse * 0.06),
          Colors.transparent,
        ],
      );
    canvas.drawRect(Offset.zero & size, midGlow);

    // Orbiting energy ring (center — not screen edges).
    final cx = size.width * 0.5;
    final cy = size.height * 0.44;
    final ringR = size.width * 0.28;
    final angle = orbit * math.pi * 2;
    for (var i = 0; i < 3; i++) {
      final a = angle + (i * math.pi * 2 / 3);
      final ox = cx + math.cos(a) * ringR;
      final oy = cy + math.sin(a) * ringR * 0.55;
      canvas.drawCircle(
        Offset(ox, oy),
        3 + pulse * 2,
        Paint()..color = _kBolt.withValues(alpha: 0.35 + pulse * 0.25),
      );
      canvas.drawCircle(
        Offset(ox, oy),
        8 + pulse * 4,
        Paint()
          ..color = _kBolt.withValues(alpha: 0.12)
          ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8),
      );
    }

    // Traveling light arc along an inner ellipse.
    final arcPaint = Paint()
      ..color = _kBoltHot.withValues(alpha: 0.18 + pulse * 0.12)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6);
    final arcPath = Path();
    const segments = 48;
    for (var i = 0; i <= segments; i++) {
      final t = (i / segments) * math.pi * 1.4 + angle * 1.6;
      final x = cx + math.cos(t) * ringR * 0.92;
      final y = cy + math.sin(t) * ringR * 0.42;
      if (i == 0) {
        arcPath.moveTo(x, y);
      } else {
        arcPath.lineTo(x, y);
      }
    }
    canvas.drawPath(arcPath, arcPaint);

    final boltPath = Path()
      ..moveTo(cx + 14, cy - 52)
      ..lineTo(cx - 16, cy - 4)
      ..lineTo(cx + 2, cy - 4)
      ..lineTo(cx - 20, cy + 54);

    final glow = Paint()
      ..color = _kBolt.withValues(alpha: 0.1 + pulse * 0.08)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 10
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 14);
    final stroke = Paint()
      ..color = _kBolt.withValues(alpha: 0.32 + progress * 0.4)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    for (final metric in boltPath.computeMetrics()) {
      final drawn = metric.extractPath(0, metric.length * progress);
      canvas.drawPath(drawn, glow);
      canvas.drawPath(drawn, stroke);
    }

    final spark = Paint()..color = _kBoltHot.withValues(alpha: 0.14 + pulse * 0.2);
    for (var i = 0; i < 14; i++) {
      final x = (math.sin(i * 1.9 + orbit * math.pi * 4) * 0.35 + 0.5) * size.width;
      final y = (math.cos(i * 2.3 + pulse * 3) * 0.22 + 0.46) * size.height;
      canvas.drawCircle(Offset(x, y), 1.2 + pulse * 1.2, spark);
    }
  }

  @override
  bool shouldRepaint(covariant _LightningAtmospherePainter oldDelegate) =>
      oldDelegate.progress != progress ||
      oldDelegate.pulse != pulse ||
      oldDelegate.orbit != orbit;
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
    with TickerProviderStateMixin {
  NgmyCivicUserGroup? _group;
  late final AnimationController _pulse;
  late final AnimationController _orbit;
  int _tab = 0; // 0 ledger, 1 people, 2 invite

  bool get _isOwner =>
      _group != null &&
      (_group!.isOwner(widget.userEmail) || widget.isAdmin);

  @override
  void initState() {
    super.initState();
    _group = NgmyCivicUserGroupsStore.cachedById(widget.groupId);
    _pulse = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1600),
    )..repeat(reverse: true);
    _orbit = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 6),
    )..repeat();
    _reload();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _orbit.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final g = await NgmyCivicUserGroupsStore.findById(widget.groupId);
    if (!mounted) return;
    setState(() => _group = g);
  }

  Future<void> _addLedger(NgmyCivicUserGroupLedgerKind kind) async {
    if (!_isOwner || _group == null) return;
    if (kind == NgmyCivicUserGroupLedgerKind.contribution &&
        !_group!.helpModeActive) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Activate help mode before recording a contribution.'),
        ),
      );
      return;
    }
    if (kind == NgmyCivicUserGroupLedgerKind.contribution &&
        _group!.helpModeActive &&
        _group!.helpCampaignId.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Help mode is active but missing a campaign.')),
      );
      return;
    }
    final people = <({String name, String email})>[
      (name: _group!.ownerName, email: _group!.ownerEmail),
      ..._group!.members.map((m) => (name: m.name, email: m.email)),
    ];
    final result = await _showNgmyLightningLedgerSheet(
      context,
      kind: kind,
      members: people,
      helpPurpose: kind == NgmyCivicUserGroupLedgerKind.contribution &&
              _group!.helpModeActive
          ? _group!.helpPurpose
          : null,
    );
    if (result == null || !mounted) return;
    if (result.amount <= 0) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter a valid amount.')),
      );
      return;
    }
    if (kind == NgmyCivicUserGroupLedgerKind.contribution) {
      final verified = await _showLightningContributionVerifySheet(
        context,
        memberName: result.label,
        amount: result.amount,
        helpPurpose: _group!.helpModeActive ? _group!.helpPurpose : null,
      );
      if (verified != true || !mounted) return;
    }
    _group!.ledger.insert(
      0,
      NgmyCivicUserGroupLedgerEntry(
        id: 'led_${DateTime.now().millisecondsSinceEpoch}',
        kind: kind,
        amount: result.amount,
        label: result.label,
        note: result.note,
        at: DateTime.now().toUtc(),
        byEmail: widget.userEmail,
        campaignId: kind == NgmyCivicUserGroupLedgerKind.contribution &&
                _group!.helpModeActive
            ? _group!.helpCampaignId
            : '',
      ),
    );
    if (kind == NgmyCivicUserGroupLedgerKind.contribution &&
        _group!.helpModeActive &&
        _group!.helpCampaignId.isNotEmpty) {
      final memberEmail = _group!.emailForMemberName(result.label);
      if (memberEmail != null) {
        _group!.clearMissedForCampaignContribution(
          memberName: result.label,
          memberEmail: memberEmail,
          campaignId: _group!.helpCampaignId,
        );
      }
    }
    await NgmyCivicUserGroupsStore.saveGroup(_group!);
    await _reload();
  }

  Future<void> _openHelpMode() async {
    final g = _group;
    if (g == null) return;
    if (!_isOwner && !g.helpModeActive) return;
    final updated = await _showLightningHelpModeSheet(
      context,
      group: g,
      pulse: _pulse,
      isOwner: _isOwner,
    );
    if (updated == null || !mounted) return;
    if (_isOwner) {
      _group = updated;
      await NgmyCivicUserGroupsStore.saveGroup(_group!);
      await _reload();
    }
  }

  Future<void> _removeMember(String name, String email) async {
    if (!_isOwner || _group == null) return;
    final confirm = await _showLightningRemoveMemberSheet(
      context,
      memberName: name,
      memberEmail: email,
    );
    if (confirm != true) return;
    await NgmyCivicUserGroupsStore.removeMember(
      groupId: _group!.id,
      memberEmail: email,
    );
    await _reload();
  }

  Future<void> _openMemberProfile({
    required String name,
    required String email,
    required String role,
    DateTime? joinedAt,
  }) async {
    final g = _group;
    if (g == null) return;
    await _showLightningMemberProfileSheet(
      context,
      group: g,
      name: name,
      email: email,
      role: role,
      joinedAt: joinedAt,
      pulse: _pulse,
      isOwner: _isOwner,
      onClearMissed: _isOwner
          ? (entryId) async {
              g.clearMissedEntry(entryId: entryId);
              await NgmyCivicUserGroupsStore.saveGroup(g);
              await _reload();
            }
          : null,
    );
  }

  Future<void> _copyCode() async {
    final g = _group;
    if (g == null) return;
    await _copyGroupCodeSnack(context, g.inviteCode);
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

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: _kLightningStatusBar,
      child: Scaffold(
        backgroundColor: _kInk,
        body: Stack(
          children: [
            AnimatedBuilder(
              animation: Listenable.merge([_pulse, _orbit]),
              builder: (context, _) => CustomPaint(
                painter: _LightningAtmospherePainter(
                  progress: 1,
                  pulse: _pulse.value,
                  orbit: _orbit.value,
                ),
                size: Size.infinite,
              ),
            ),
            SafeArea(
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(12, 6, 12, 0),
                    child: _LightningTopBar(
                      title: 'GROUP',
                      groupCode: g?.inviteCode,
                      onCopyCode: g == null
                          ? null
                          : () => _copyGroupCodeSnack(context, g.inviteCode),
                      onBack: () => NgmyNavigator.pop(context),
                      helpModeActive: g?.helpModeActive ?? false,
                      showHelpButton:
                          _isOwner || (g?.helpModeActive ?? false),
                      helpPulse: _pulse,
                      onHelpTap: _openHelpMode,
                    ),
                  ),
                if (g != null) ...[
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 10, 16, 8),
                  child: _LightningStatFrame(
                    pulse: _pulse,
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
                        (1, 'People'),
                        (2, 'Invite'),
                      ])
                        Expanded(
                          child: Padding(
                            padding: EdgeInsets.only(
                              right: e.$1 == 2 ? 0 : 6,
                            ),
                            child: _LightningTabFrame(
                              label: e.$2,
                              selected: _tab == e.$1,
                              pulse: _pulse,
                              orbit: _orbit,
                              onTap: () => setState(() => _tab = e.$1),
                            ),
                          ),
                        ),
                    ],
                  ),
                ),
                Expanded(child: _buildTab(g)),
                ] else
                  const Expanded(
                    child: SizedBox.shrink(),
                  ),
              ],
            ),
          ),
        ],
      ),
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
            _personTile(
              g,
              g.ownerName,
              g.ownerEmail,
              'Owner',
              joinedAt: g.createdAt,
              onTap: () => _openMemberProfile(
                name: g.ownerName,
                email: g.ownerEmail,
                role: 'Owner',
                joinedAt: g.createdAt,
              ),
            ),
            ...g.members.map(
              (m) => _personTile(
                g,
                m.name,
                m.email,
                'Member',
                joinedAt: m.joinedAt,
                onTap: () => _openMemberProfile(
                  name: m.name,
                  email: m.email,
                  role: 'Member',
                  joinedAt: m.joinedAt,
                ),
                onRemove: _isOwner
                    ? () => _removeMember(m.name, m.email)
                    : null,
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
      case 2:
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
              child: GestureDetector(
                onTap: () => _copyGroupCodeSnack(context, g.inviteCode),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      g.inviteCode,
                      style: const TextStyle(
                        color: _kBolt,
                        fontWeight: FontWeight.w900,
                        fontSize: 22,
                        letterSpacing: 2,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 8),
            const Center(
              child: Text(
                'Tap code to copy',
                style: TextStyle(color: Colors.white38, fontSize: 12),
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
    NgmyCivicUserGroup group,
    String name,
    String email,
    String role, {
    DateTime? joinedAt,
    required VoidCallback onTap,
    VoidCallback? onRemove,
  }) {
    final total = _contributionTotalForMember(group, name);
    final hasPaid = total > 0;
    final missedTotal = group.missedFor(name, email);
    final missedThisRound = group.helpModeActive &&
        group.helpCampaignId.isNotEmpty &&
        !group.contributedToCampaign(name, group.helpCampaignId);
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: _kBolt.withValues(alpha: 0.2)),
      ),
      child: Material(
        color: _kPanel,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(14),
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Row(
              children: [
                Container(
                  width: 40,
                  height: 40,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _kBolt.withValues(alpha: 0.12),
                    border: Border.all(color: _kBolt.withValues(alpha: 0.4)),
                  ),
                  child: Icon(
                    missedThisRound
                        ? Icons.warning_amber_rounded
                        : hasPaid
                            ? Icons.bolt_rounded
                            : Icons.person_outline_rounded,
                    color: missedThisRound
                        ? Colors.orangeAccent
                        : hasPaid
                            ? _kBolt
                            : Colors.white38,
                    size: 20,
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(name,
                          style: const TextStyle(
                              color: Colors.white, fontWeight: FontWeight.w700)),
                      Text('$role · $email',
                          style: const TextStyle(
                              color: Colors.white38, fontSize: 11)),
                      const SizedBox(height: 2),
                      Text(
                        missedThisRound
                            ? 'Missed this help round · tap for profile'
                            : hasPaid
                                ? 'Contributed \$${total.toStringAsFixed(2)} · tap for profile'
                                : missedTotal > 0
                                    ? '$missedTotal missed · tap for profile'
                                    : 'No contributions yet · tap for profile',
                        style: TextStyle(
                          color: missedThisRound
                              ? Colors.orangeAccent.withValues(alpha: 0.9)
                              : hasPaid
                                  ? _kBolt.withValues(alpha: 0.85)
                                  : missedTotal > 0
                                      ? Colors.orangeAccent.withValues(alpha: 0.85)
                                      : Colors.orangeAccent.withValues(alpha: 0.85),
                          fontSize: 10,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ),
                if (onRemove != null)
                  IconButton(
                    tooltip: 'Remove member',
                    onPressed: onRemove,
                    icon: Icon(Icons.person_remove_outlined,
                        color: Colors.redAccent.withValues(alpha: 0.85)),
                  )
                else
                  Icon(Icons.chevron_right_rounded,
                      color: _kBolt.withValues(alpha: 0.6)),
              ],
            ),
          ),
        ),
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

/// Dark civic-style chrome for the floating top bar.
class _LightningTopBar extends StatelessWidget {
  const _LightningTopBar({
    required this.title,
    required this.onBack,
    this.groupCode,
    this.onCopyCode,
    this.showHelpButton = false,
    this.helpModeActive = false,
    this.helpPulse,
    this.onHelpTap,
  });

  final String title;
  final VoidCallback onBack;
  final String? groupCode;
  final VoidCallback? onCopyCode;
  final bool showHelpButton;
  final bool helpModeActive;
  final Animation<double>? helpPulse;
  final VoidCallback? onHelpTap;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 6),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(28),
        color: _kInk,
        border: Border.all(color: _kBolt.withValues(alpha: 0.22), width: 1.1),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: 0.35),
            blurRadius: 14,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        children: [
          IconButton(
            tooltip: 'Back',
            onPressed: onBack,
            icon: const Icon(Icons.arrow_back_ios_new_rounded, color: _kBoltHot),
          ),
          Expanded(
            child: groupCode != null && groupCode!.isNotEmpty
                ? Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        title,
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          color: Colors.white54,
                          fontWeight: FontWeight.w800,
                          letterSpacing: 1.6,
                          fontSize: 10,
                        ),
                      ),
                      const SizedBox(height: 2),
                      Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: onCopyCode,
                          borderRadius: BorderRadius.circular(8),
                          child: Padding(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 8, vertical: 4),
                            child: Text(
                              groupCode!,
                              textAlign: TextAlign.center,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                color: _kBolt,
                                fontWeight: FontWeight.w900,
                                letterSpacing: 2,
                                fontSize: 17,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  )
                : Text(
                    title,
                    textAlign: TextAlign.center,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 1.2,
                      fontSize: 14,
                    ),
                  ),
          ),
          if (showHelpButton)
            _HelpModeTopButton(
              active: helpModeActive,
              pulse: helpPulse,
              onTap: onHelpTap,
            )
          else
            const SizedBox(width: 48),
        ],
      ),
    );
  }
}

class _HelpModeTopButton extends StatelessWidget {
  const _HelpModeTopButton({
    required this.active,
    this.pulse,
    this.onTap,
  });

  final bool active;
  final Animation<double>? pulse;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    Widget iconButton(double glow) {
      final scale = active ? 1.0 + glow * 0.12 : 1.0;
      return IconButton(
        tooltip: active ? 'Help mode active' : 'Activate help mode',
        onPressed: onTap,
        icon: Transform.scale(
          scale: scale,
          child: Container(
            width: 38,
            height: 38,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: active
                  ? _kHelpGreen.withValues(alpha: 0.28 + glow * 0.22)
                  : Colors.white.withValues(alpha: 0.06),
              border: Border.all(
                color: active
                    ? _kHelpGreenHot.withValues(alpha: 0.85 + glow * 0.15)
                    : _kBolt.withValues(alpha: 0.35),
                width: active ? 2 : 1.1,
              ),
              boxShadow: active
                  ? [
                      BoxShadow(
                        color: _kHelpGreen.withValues(alpha: 0.45 + glow * 0.4),
                        blurRadius: 16 + glow * 14,
                        spreadRadius: 1 + glow * 2,
                      ),
                      BoxShadow(
                        color: _kHelpGreenHot.withValues(alpha: 0.25 + glow * 0.35),
                        blurRadius: 8 + glow * 6,
                      ),
                    ]
                  : null,
            ),
            child: Icon(
              Icons.volunteer_activism_rounded,
              size: 20,
              color: active ? _kHelpGreenHot : _kBolt.withValues(alpha: 0.85),
              shadows: active
                  ? [
                      Shadow(
                        color: _kHelpGreen.withValues(alpha: 0.95),
                        blurRadius: 10 + glow * 8,
                      ),
                    ]
                  : null,
            ),
          ),
        ),
      );
    }

    if (pulse == null || !active) return iconButton(0);
    return AnimatedBuilder(
      animation: pulse!,
      builder: (context, _) => iconButton(pulse!.value),
    );
  }
}

class _LightningTabFrame extends StatelessWidget {
  const _LightningTabFrame({
    required this.label,
    required this.selected,
    required this.pulse,
    required this.orbit,
    required this.onTap,
  });

  final String label;
  final bool selected;
  final Animation<double> pulse;
  final Animation<double> orbit;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([pulse, orbit]),
      builder: (context, _) {
        final g = pulse.value;
        return Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: onTap,
            borderRadius: BorderRadius.circular(14),
            child: CustomPaint(
              painter: _LightningFramePainter(
                intensity: selected ? 0.55 + g * 0.35 : 0.25 + g * 0.15,
                corners: true,
                phase: orbit.value,
              ),
              child: Ink(
                height: 40,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  color: selected
                      ? _kBolt.withValues(alpha: 0.12 + g * 0.06)
                      : _kPanel.withValues(alpha: 0.85),
                  border: Border.all(
                    color: selected
                        ? _kBolt.withValues(alpha: 0.55 + g * 0.25)
                        : _kBolt.withValues(alpha: 0.18),
                  ),
                ),
                child: Center(
                  child: Text(
                    label,
                    style: TextStyle(
                      color: selected ? _kBoltHot : Colors.white38,
                      fontWeight: FontWeight.w800,
                      fontSize: 12,
                      letterSpacing: 0.6,
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

class _LightningHeroPanel extends StatelessWidget {
  const _LightningHeroPanel({
    required this.bolt,
    required this.pulse,
    required this.orbit,
    required this.onCreate,
    required this.onJoin,
    required this.onScan,
  });

  final Animation<double> bolt;
  final Animation<double> pulse;
  final Animation<double> orbit;
  final VoidCallback onCreate;
  final VoidCallback onJoin;
  final VoidCallback onScan;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: Listenable.merge([bolt, pulse, orbit]),
      builder: (context, _) {
        final g = 0.35 + pulse.value * 0.45;
        final ringAngle = orbit.value * math.pi * 2;
        return CustomPaint(
          painter: _LightningFramePainter(
            intensity: 0.55 + g * 0.35,
            corners: true,
            phase: orbit.value,
          ),
          child: Container(
            padding: const EdgeInsets.fromLTRB(18, 22, 18, 18),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(24),
              color: _kInk,
              border: Border.all(
                color: _kBolt.withValues(alpha: 0.35 + g * 0.3),
                width: 1.3,
              ),
              boxShadow: [
                BoxShadow(
                  color: _kBolt.withValues(alpha: 0.12 + g * 0.15),
                  blurRadius: 24,
                ),
              ],
            ),
            child: Column(
              children: [
                Transform.scale(
                  scale: 0.85 + bolt.value * 0.25,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      for (var i = 0; i < 3; i++)
                        Transform.translate(
                          offset: Offset(
                            38 * math.cos(ringAngle + i * math.pi * 2 / 3),
                            28 * math.sin(ringAngle + i * math.pi * 2 / 3),
                          ),
                          child: Container(
                            width: 6 + pulse.value * 4,
                            height: 6 + pulse.value * 4,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: _kBoltHot.withValues(alpha: 0.55 + g * 0.3),
                              boxShadow: [
                                BoxShadow(
                                  color: _kBolt.withValues(alpha: 0.45),
                                  blurRadius: 10,
                                ),
                              ],
                            ),
                          ),
                        ),
                      Container(
                        width: 78,
                        height: 78,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          gradient: RadialGradient(
                            colors: [
                              _kBolt.withValues(alpha: 0.55),
                              _kBolt.withValues(alpha: 0.08),
                              Colors.transparent,
                            ],
                          ),
                          boxShadow: [
                            BoxShadow(
                              color: _kBolt.withValues(alpha: 0.45),
                              blurRadius: 28,
                            ),
                          ],
                        ),
                        child: Icon(
                          Icons.bolt_rounded,
                          size: 46,
                          color: _kBoltHot,
                          shadows: [
                            Shadow(
                              color: _kBolt.withValues(alpha: 0.9),
                              blurRadius: 22,
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 10),
                const Text(
                  'LIGHTNING CIRCLE',
                  style: TextStyle(
                    color: _kBolt,
                    fontWeight: FontWeight.w900,
                    letterSpacing: 2.2,
                    fontSize: 12,
                  ),
                ),
                const SizedBox(height: 8),
                const Text(
                  'Your own civic circle — no states, no case wallet.\n'
                  'Invite by code or QR. Owner tracks money in & out.',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white70,
                    height: 1.4,
                    fontSize: 13,
                  ),
                ),
                const SizedBox(height: 16),
                Row(
                  children: [
                    Expanded(
                      child: _GlowButton(
                        label: 'Create group',
                        icon: Icons.add_rounded,
                        pulse: pulse,
                        onTap: onCreate,
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: _GlowButton(
                        label: 'Join code',
                        icon: Icons.vpn_key_rounded,
                        pulse: pulse,
                        outlined: true,
                        onTap: onJoin,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                _GlowButton(
                  label: 'Scan invite QR',
                  icon: Icons.qr_code_scanner_rounded,
                  pulse: pulse,
                  outlined: true,
                  onTap: onScan,
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _LightningStatFrame extends StatelessWidget {
  const _LightningStatFrame({required this.pulse, required this.child});

  final Animation<double> pulse;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: pulse,
      builder: (context, _) {
        final g = pulse.value;
        return CustomPaint(
          painter: _LightningFramePainter(intensity: 0.4 + g * 0.35, corners: false),
          child: Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18),
              color: _kInk,
              border: Border.all(color: _kBolt.withValues(alpha: 0.35)),
              boxShadow: [
                BoxShadow(
                  color: _kBolt.withValues(alpha: 0.12 + g * 0.1),
                  blurRadius: 16,
                ),
              ],
            ),
            child: child,
          ),
        );
      },
    );
  }
}

class _LightningFramePainter extends CustomPainter {
  _LightningFramePainter({
    required this.intensity,
    this.corners = true,
    this.phase = 0,
  });

  final double intensity;
  final bool corners;
  final double phase;

  @override
  void paint(Canvas canvas, Size size) {
    final r = RRect.fromRectAndRadius(
      Offset.zero & size,
      const Radius.circular(18),
    );
    final paint = Paint()
      ..color = _kBolt.withValues(alpha: 0.06 * intensity)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4);
    canvas.drawRRect(r, paint);

    // Traveling spark along the card edge.
    final sparkPaint = Paint()
      ..color = _kBoltHot.withValues(alpha: 0.35 + 0.45 * intensity)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6);
    final w = size.width;
    final h = size.height;
    final perimeter = 2 * (w + h);
    final dist = (phase * perimeter) % perimeter;
    Offset spark;
    if (dist < w) {
      spark = Offset(dist, 0);
    } else if (dist < w + h) {
      spark = Offset(w, dist - w);
    } else if (dist < 2 * w + h) {
      spark = Offset(2 * w + h - dist, h);
    } else {
      spark = Offset(0, perimeter - dist);
    }
    canvas.drawCircle(spark, 3.5 + intensity * 2, sparkPaint);
    canvas.drawCircle(spark, 1.5, Paint()..color = _kBoltHot.withValues(alpha: 0.9));

    if (!corners) return;

    void corner(Offset o, bool flipX, bool flipY) {
      final sx = flipX ? -1.0 : 1.0;
      final sy = flipY ? -1.0 : 1.0;
      final p = Path()
        ..moveTo(o.dx, o.dy)
        ..lineTo(o.dx + 7 * sx, o.dy + 14 * sy)
        ..lineTo(o.dx - 2 * sx, o.dy + 14 * sy)
        ..lineTo(o.dx + 6 * sx, o.dy + 28 * sy);
      canvas.drawPath(
        p,
        Paint()
          ..color = _kBolt.withValues(alpha: 0.35 * intensity)
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.3
          ..strokeCap = StrokeCap.round,
      );
    }

    corner(const Offset(10, 8), false, false);
    corner(Offset(size.width - 10, 8), true, false);
    corner(Offset(10, size.height - 8), false, true);
    corner(Offset(size.width - 10, size.height - 8), true, true);
  }

  @override
  bool shouldRepaint(covariant _LightningFramePainter oldDelegate) =>
      oldDelegate.intensity != intensity ||
      oldDelegate.corners != corners ||
      oldDelegate.phase != phase;
}

class _LightningLedgerResult {
  const _LightningLedgerResult({
    required this.label,
    required this.amount,
    required this.note,
  });

  final String label;
  final double amount;
  final String note;
}

/// Group code: 3 uppercase letters then 1–5 digits.
class _NgmyGroupCodeInputFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(
    TextEditingValue oldValue,
    TextEditingValue newValue,
  ) {
    final raw = newValue.text.toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
    if (raw.isEmpty) {
      return const TextEditingValue(text: '');
    }
    final letters = StringBuffer();
    final digits = StringBuffer();
    for (var i = 0; i < raw.length; i++) {
      final ch = raw[i];
      if (RegExp(r'[A-Z]').hasMatch(ch) && letters.length < 3) {
        letters.write(ch);
      } else if (RegExp(r'[0-9]').hasMatch(ch) && digits.length < 5) {
        digits.write(ch);
      }
    }
    final out = '${letters.toString()}${digits.toString()}';
    return TextEditingValue(
      text: out,
      selection: TextSelection.collapsed(offset: out.length),
    );
  }
}

Future<String?> _showNgmyLightningCreateGroupSheet(BuildContext context) {
  final controller = TextEditingController();
  var errorText = '';

  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: StatefulBuilder(
          builder: (ctx, setLocal) {
            return _LightningSheetShell(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _sheetHeader(
                    icon: Icons.bolt_rounded,
                    title: 'Create lightning group',
                    subtitle:
                        'Pick your group code: 3 letters + 1–5 numbers (e.g. ABC123).',
                  ),
                  const SizedBox(height: 16),
                  TextField(
                    controller: controller,
                    autofocus: true,
                    inputFormatters: [_NgmyGroupCodeInputFormatter()],
                    textCapitalization: TextCapitalization.characters,
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 2.2,
                      fontSize: 20,
                    ),
                    decoration: _lightningFieldDecoration(ngmyCivicUserGroupCodeHint())
                        .copyWith(
                      errorText: errorText.isEmpty ? null : errorText,
                    ),
                    onChanged: (_) {
                      if (errorText.isNotEmpty) {
                        setLocal(() => errorText = '');
                      }
                    },
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    'Type letters or numbers in any order — code becomes 3 letters then numbers (e.g. ABC123).',
                    style: TextStyle(color: Colors.white38, fontSize: 11, height: 1.35),
                  ),
                  const SizedBox(height: 18),
                  Row(
                    children: [
                      Expanded(
                        child: TextButton(
                          onPressed: () => Navigator.pop(ctx),
                          child: const Text('Cancel',
                              style: TextStyle(color: Colors.white54)),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        flex: 2,
                        child: FilledButton(
                          onPressed: () {
                            final code = controller.text.trim().toUpperCase();
                            if (!ngmyCivicUserGroupCodeIsValid(code)) {
                              setLocal(() {
                                errorText =
                                    'Use exactly 3 letters + 1–5 numbers (e.g. ABC123).';
                              });
                              return;
                            }
                            Navigator.pop(ctx, code);
                          },
                          style: FilledButton.styleFrom(
                            backgroundColor: _kBolt,
                            foregroundColor: _kInk,
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(14),
                            ),
                          ),
                          child: const Text(
                            'Create group',
                            style: TextStyle(fontWeight: FontWeight.w900),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            );
          },
        ),
      );
    },
  ).whenComplete(controller.dispose);
}

Future<String?> _showNgmyLightningTextSheet(
  BuildContext context, {
  required String title,
  required String subtitle,
  required String hint,
  required String confirmLabel,
  required IconData icon,
  bool capitalize = false,
  double letterSpacing = 0,
}) {
  final controller = TextEditingController();
  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: _LightningSheetShell(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _sheetHeader(icon: icon, title: title, subtitle: subtitle),
              const SizedBox(height: 16),
              TextField(
                controller: controller,
                autofocus: true,
                textCapitalization: capitalize
                    ? TextCapitalization.characters
                    : TextCapitalization.sentences,
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.w700,
                  letterSpacing: letterSpacing,
                  fontSize: 16,
                ),
                decoration: _lightningFieldDecoration(hint),
                onSubmitted: (v) {
                  final t = v.trim();
                  if (t.isNotEmpty) Navigator.pop(ctx, t);
                },
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(
                    child: TextButton(
                      onPressed: () => Navigator.pop(ctx),
                      child: const Text('Cancel',
                          style: TextStyle(color: Colors.white54)),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    flex: 2,
                    child: FilledButton(
                      onPressed: () {
                        final t = controller.text.trim();
                        if (t.isEmpty) return;
                        Navigator.pop(ctx, t);
                      },
                      style: FilledButton.styleFrom(
                        backgroundColor: _kBolt,
                        foregroundColor: _kInk,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                        ),
                      ),
                      child: Text(
                        confirmLabel,
                        style: const TextStyle(fontWeight: FontWeight.w900),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      );
    },
  ).whenComplete(controller.dispose);
}

Future<_LightningLedgerResult?> _showNgmyLightningLedgerSheet(
  BuildContext context, {
  required NgmyCivicUserGroupLedgerKind kind,
  required List<({String name, String email})> members,
  String? helpPurpose,
}) {
  final isContribution = kind == NgmyCivicUserGroupLedgerKind.contribution;
  final amountC = TextEditingController();
  final labelC = TextEditingController();
  final searchC = TextEditingController();
  var selectedName = members.isNotEmpty ? members.first.name : '';
  var searchOpen = false;

  return showModalBottomSheet<_LightningLedgerResult>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: StatefulBuilder(
          builder: (ctx, setLocal) {
            final query = searchC.text.trim().toLowerCase();
            final filtered = query.isEmpty
                ? members
                : members
                    .where(
                      (m) =>
                          m.name.toLowerCase().contains(query) ||
                          m.email.toLowerCase().contains(query),
                    )
                    .toList();
            if (filtered.isNotEmpty &&
                !filtered.any((m) => m.name == selectedName)) {
              selectedName = filtered.first.name;
            }

            return _LightningSheetShell(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  if (isContribution)
                    _contributionSheetHeader(
                      searchOpen: searchOpen,
                      onToggleSearch: () => setLocal(
                        () => searchOpen = !searchOpen,
                      ),
                    )
                  else
                    _sheetHeader(
                      icon: Icons.payments_outlined,
                      title: 'Record spending',
                      subtitle: 'Log what left the group case.',
                    ),
                  if (isContribution) ...[
                    const SizedBox(height: 4),
                    const Text(
                      'Record contribution',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w900,
                        fontSize: 16,
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Tap who put money in — people who joined this group.',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Colors.white54, fontSize: 12),
                    ),
                    if (helpPurpose != null && helpPurpose.trim().isNotEmpty) ...[
                      const SizedBox(height: 10),
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: _kHelpGreen.withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(
                            color: _kHelpGreen.withValues(alpha: 0.45),
                          ),
                        ),
                        child: Text(
                          'Help mode: ${helpPurpose.trim()}',
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                            color: Colors.white70,
                            fontSize: 12,
                            height: 1.35,
                          ),
                        ),
                      ),
                    ],
                  ],
                  const SizedBox(height: 14),
                  if (isContribution) ...[
                    if (searchOpen) ...[
                      TextField(
                        controller: searchC,
                        autofocus: true,
                        style: const TextStyle(color: Colors.white),
                        decoration: _lightningFieldDecoration('Search member…'),
                        onChanged: (_) => setLocal(() {}),
                      ),
                      const SizedBox(height: 10),
                    ],
                    Text(
                      'WHO CONTRIBUTED',
                      style: TextStyle(
                        color: _kBolt.withValues(alpha: 0.85),
                        fontWeight: FontWeight.w800,
                        letterSpacing: 1.4,
                        fontSize: 11,
                      ),
                    ),
                    const SizedBox(height: 8),
                    if (members.isEmpty)
                      const Text(
                        'No members yet — invite people with your code first.',
                        style: TextStyle(color: Colors.white54, fontSize: 13),
                      )
                    else if (filtered.isEmpty)
                      const Text(
                        'No member matches that search.',
                        style: TextStyle(color: Colors.white54, fontSize: 13),
                      )
                    else
                      ConstrainedBox(
                        constraints: const BoxConstraints(maxHeight: 150),
                        child: SingleChildScrollView(
                          child: Wrap(
                            spacing: 8,
                            runSpacing: 8,
                            children: [
                              for (final m in filtered)
                                ChoiceChip(
                                  label: Text(m.name),
                                  selected: selectedName == m.name,
                                  onSelected: (_) =>
                                      setLocal(() => selectedName = m.name),
                                  selectedColor: _kBolt,
                                  backgroundColor:
                                      Colors.white.withValues(alpha: 0.06),
                                  labelStyle: TextStyle(
                                    color: selectedName == m.name
                                        ? _kInk
                                        : Colors.white70,
                                    fontWeight: FontWeight.w700,
                                  ),
                                  side: BorderSide(
                                    color: selectedName == m.name
                                        ? _kBolt
                                        : _kBolt.withValues(alpha: 0.25),
                                  ),
                                ),
                            ],
                          ),
                        ),
                      ),
                  ] else ...[
                    TextField(
                      controller: labelC,
                      style: const TextStyle(color: Colors.white),
                      decoration: _lightningFieldDecoration('What was spent'),
                    ),
                  ],
                  const SizedBox(height: 12),
                  TextField(
                    controller: amountC,
                    autofocus: !isContribution,
                    keyboardType:
                        const TextInputType.numberWithOptions(decimal: true),
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w800,
                      fontSize: 18,
                    ),
                    decoration: _lightningFieldDecoration('Amount (\$)'),
                  ),
                  const SizedBox(height: 18),
                  Row(
                    children: [
                      Expanded(
                        child: TextButton(
                          onPressed: () => Navigator.pop(ctx),
                          child: const Text('Cancel',
                              style: TextStyle(color: Colors.white54)),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        flex: 2,
                        child: FilledButton(
                          onPressed: () {
                            final amount =
                                double.tryParse(amountC.text.trim()) ?? 0;
                            final label = isContribution
                                ? (selectedName.trim().isEmpty
                                    ? '—'
                                    : selectedName.trim())
                                : (labelC.text.trim().isEmpty
                                    ? '—'
                                    : labelC.text.trim());
                            if (isContribution &&
                                members.isNotEmpty &&
                                selectedName.trim().isEmpty) {
                              return;
                            }
                            Navigator.pop(
                              ctx,
                              _LightningLedgerResult(
                                label: label,
                                amount: amount,
                                note: '',
                              ),
                            );
                          },
                          style: FilledButton.styleFrom(
                            backgroundColor: _kBolt,
                            foregroundColor: _kInk,
                            padding: const EdgeInsets.symmetric(vertical: 14),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(14),
                            ),
                          ),
                          child: const Text(
                            'Save',
                            style: TextStyle(fontWeight: FontWeight.w900),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            );
          },
        ),
      );
    },
  ).whenComplete(() {
    amountC.dispose();
    labelC.dispose();
    searchC.dispose();
  });
}

Widget _contributionSheetHeader({
  required bool searchOpen,
  required VoidCallback onToggleSearch,
}) {
  return Row(
    children: [
      Container(
        width: 46,
        height: 46,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: _kBolt.withValues(alpha: 0.14),
          border: Border.all(color: _kBolt.withValues(alpha: 0.5)),
          boxShadow: [
            BoxShadow(color: _kBolt.withValues(alpha: 0.25), blurRadius: 12),
          ],
        ),
        child: const Icon(Icons.add_card_rounded, color: _kBolt),
      ),
      const Spacer(),
      Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onToggleSearch,
          borderRadius: BorderRadius.circular(14),
          child: Container(
            width: 46,
            height: 46,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: searchOpen
                  ? _kBolt.withValues(alpha: 0.22)
                  : Colors.white.withValues(alpha: 0.06),
              border: Border.all(
                color: searchOpen ? _kBolt : _kBolt.withValues(alpha: 0.35),
              ),
            ),
            child: Icon(
              Icons.search_rounded,
              color: searchOpen ? _kBoltHot : _kBolt,
            ),
          ),
        ),
      ),
    ],
  );
}

Future<bool?> _showLightningRemoveMemberSheet(
  BuildContext context, {
  required String memberName,
  required String memberEmail,
}) {
  return showModalBottomSheet<bool>(
    context: context,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: const EdgeInsets.fromLTRB(12, 0, 12, 14),
        child: _LightningSheetShell(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: Colors.redAccent.withValues(alpha: 0.15),
                    border: Border.all(
                      color: Colors.redAccent.withValues(alpha: 0.55),
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.redAccent.withValues(alpha: 0.25),
                        blurRadius: 16,
                      ),
                    ],
                  ),
                  child: const Icon(Icons.person_remove_rounded,
                      color: Colors.redAccent),
                ),
              ),
              const SizedBox(height: 14),
              const Text(
                'Remove member?',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.w900,
                  fontSize: 18,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                memberName,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: _kBolt,
                  fontWeight: FontWeight.w800,
                  fontSize: 16,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                memberEmail,
                textAlign: TextAlign.center,
                style: const TextStyle(color: Colors.white54, fontSize: 12),
              ),
              const SizedBox(height: 10),
              const Text(
                'They will lose access to this group ledger and invite list.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white38, fontSize: 12, height: 1.35),
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(
                    child: TextButton(
                      onPressed: () => Navigator.pop(ctx, false),
                      child: const Text('Keep member',
                          style: TextStyle(color: Colors.white54)),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    flex: 2,
                    child: FilledButton(
                      onPressed: () => Navigator.pop(ctx, true),
                      style: FilledButton.styleFrom(
                        backgroundColor: Colors.redAccent,
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                        ),
                      ),
                      child: const Text(
                        'Remove',
                        style: TextStyle(fontWeight: FontWeight.w900),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      );
    },
  );
}

Future<void> _showLightningMemberProfileSheet(
  BuildContext context, {
  required NgmyCivicUserGroup group,
  required String name,
  required String email,
  required String role,
  DateTime? joinedAt,
  required Animation<double> pulse,
  bool isOwner = false,
  Future<void> Function(String entryId)? onClearMissed,
}) {
  final contributions = _contributionsForMember(group, name);
  final total = contributions.fold<double>(0, (s, e) => s + e.amount);
  final missedTotal = group.missedFor(name, email);
  final missedThisRound = group.helpModeActive &&
      group.helpCampaignId.isNotEmpty &&
      !group.contributedToCampaign(name, group.helpCampaignId);
  final campaignContributions = group.helpCampaignId.isEmpty
      ? const <NgmyCivicUserGroupLedgerEntry>[]
      : contributions
          .where((e) => e.campaignId == group.helpCampaignId)
          .toList();
  final missed = missedThisRound || (missedTotal > 0 && total <= 0);

  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(
          bottom: MediaQuery.viewInsetsOf(ctx).bottom,
          left: 12,
          right: 12,
        ),
        child: DraggableScrollableSheet(
          initialChildSize: 0.72,
          minChildSize: 0.45,
          maxChildSize: 0.92,
          builder: (context, scrollController) {
            var historyFilter = _MemberHistoryFilter.all;
            return StatefulBuilder(
              builder: (context, setLocal) {
                return _LightningSheetShell(
                  cornerBolts: false,
                  child: _MemberProfileSheetBody(
                    scrollController: scrollController,
                    group: group,
                    name: name,
                    email: email,
                    role: role,
                    joinedAt: joinedAt,
                    pulse: pulse,
                    contributions: contributions,
                    total: total,
                    missedTotal: missedTotal,
                    missedThisRound: missedThisRound,
                    campaignContributions: campaignContributions,
                    missed: missed,
                    historyFilter: historyFilter,
                    isOwner: isOwner,
                    onFilterChanged: (f) => setLocal(() => historyFilter = f),
                    onClearMissed: onClearMissed == null
                        ? null
                        : (entryId) async {
                            await onClearMissed(entryId);
                            if (context.mounted) {
                              setLocal(() {});
                            }
                          },
                  ),
                );
              },
            );
          },
        ),
      );
    },
  );
}

class _MemberProfileSheetBody extends StatelessWidget {
  const _MemberProfileSheetBody({
    required this.scrollController,
    required this.group,
    required this.name,
    required this.email,
    required this.role,
    required this.joinedAt,
    required this.pulse,
    required this.contributions,
    required this.total,
    required this.missedTotal,
    required this.missedThisRound,
    required this.campaignContributions,
    required this.missed,
    required this.historyFilter,
    required this.isOwner,
    required this.onFilterChanged,
    this.onClearMissed,
  });

  final ScrollController scrollController;
  final NgmyCivicUserGroup group;
  final String name;
  final String email;
  final String role;
  final DateTime? joinedAt;
  final Animation<double> pulse;
  final List<NgmyCivicUserGroupLedgerEntry> contributions;
  final double total;
  final int missedTotal;
  final bool missedThisRound;
  final List<NgmyCivicUserGroupLedgerEntry> campaignContributions;
  final bool missed;
  final _MemberHistoryFilter historyFilter;
  final bool isOwner;
  final ValueChanged<_MemberHistoryFilter> onFilterChanged;
  final Future<void> Function(String entryId)? onClearMissed;

  List<_MemberHistoryItem> get _filteredHistory {
    final all = _memberHistoryItems(group, name, email);
    return switch (historyFilter) {
      _MemberHistoryFilter.all => all,
      _MemberHistoryFilter.contributions =>
        all.whereType<_ContributionHistoryItem>().toList(),
      _MemberHistoryFilter.missed =>
        all.whereType<_MissedHistoryItem>().toList(),
    };
  }

  @override
  Widget build(BuildContext context) {
    final filtered = _filteredHistory;
    final liveContributions = _contributionsForMember(group, name);
    final liveTotal =
        liveContributions.fold<double>(0, (s, e) => s + e.amount);
    final liveMissedTotal = group.missedFor(name, email);
    final liveMissedThisRound = group.helpModeActive &&
        group.helpCampaignId.isNotEmpty &&
        !group.contributedToCampaign(name, group.helpCampaignId);
    final liveCampaignContributions = group.helpCampaignId.isEmpty
        ? const <NgmyCivicUserGroupLedgerEntry>[]
        : liveContributions
            .where((e) => e.campaignId == group.helpCampaignId)
            .toList();
    final liveMissed =
        liveMissedThisRound || (liveMissedTotal > 0 && liveTotal <= 0);
    return ListView(
      controller: scrollController,
      children: [
        AnimatedBuilder(
          animation: pulse,
          builder: (context, _) {
            final g = pulse.value;
            return Center(
              child: Container(
                width: 64,
                height: 64,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: _kBolt.withValues(alpha: 0.12 + g * 0.08),
                  border: Border.all(
                    color: _kBolt.withValues(alpha: 0.45 + g * 0.25),
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: _kBolt.withValues(alpha: 0.2 + g * 0.15),
                      blurRadius: 18,
                    ),
                  ],
                ),
                child: Icon(
                  liveMissed ? Icons.warning_amber_rounded : Icons.bolt_rounded,
                  color: liveMissed ? Colors.orangeAccent : _kBolt,
                  size: 32,
                ),
              ),
            );
          },
        ),
        const SizedBox(height: 12),
        Text(
          name,
          textAlign: TextAlign.center,
          style: const TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.w900,
            fontSize: 20,
          ),
        ),
        Text(
          '$role · $email',
          textAlign: TextAlign.center,
          style: const TextStyle(color: Colors.white54, fontSize: 12),
        ),
        if (joinedAt != null) ...[
          const SizedBox(height: 4),
          Text(
            'Joined ${joinedAt!.toLocal().toString().split(' ').first}',
            textAlign: TextAlign.center,
            style: const TextStyle(color: Colors.white38, fontSize: 11),
          ),
        ],
        const SizedBox(height: 16),
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: _kPanel,
            borderRadius: BorderRadius.circular(14),
            border: Border.all(
              color: (liveMissed ? Colors.orangeAccent : _kBolt)
                  .withValues(alpha: 0.35),
            ),
          ),
          child: Column(
            children: [
              Text(
                liveMissedThisRound
                    ? 'MISSED THIS HELP ROUND'
                    : liveMissedTotal > 0
                        ? 'MISSED CONTRIBUTIONS'
                        : 'CONTRIBUTION STATUS',
                style: TextStyle(
                  color: liveMissed
                      ? Colors.orangeAccent
                      : _kBolt.withValues(alpha: 0.9),
                  fontWeight: FontWeight.w800,
                  letterSpacing: 1.2,
                  fontSize: 11,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                liveMissedThisRound
                    ? 'Not recorded for "${group.helpPurpose.trim()}". They will be marked missed when help mode ends.'
                    : liveMissedTotal > 0
                        ? '$liveMissedTotal missed contribution${liveMissedTotal == 1 ? '' : 's'} total · \$${liveTotal.toStringAsFixed(2)} contributed overall'
                        : 'Total contributed: \$${liveTotal.toStringAsFixed(2)}',
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: Colors.white70,
                  height: 1.35,
                  fontSize: 13,
                ),
              ),
              if (group.helpModeActive && group.helpPurpose.trim().isNotEmpty) ...[
                const SizedBox(height: 8),
                Text(
                  'Active help: ${group.helpPurpose.trim()}',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: _kHelpGreen.withValues(alpha: 0.95),
                    fontSize: 11,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ],
              if (liveCampaignContributions.isNotEmpty) ...[
                const SizedBox(height: 6),
                Text(
                  'This round: \$${liveCampaignContributions.fold<double>(0, (s, e) => s + e.amount).toStringAsFixed(2)}',
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    color: _kBolt,
                    fontSize: 12,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ],
            ],
          ),
        ),
        const SizedBox(height: 16),
        Row(
          children: [
            Expanded(
              child: Text(
                'CONTRIBUTION HISTORY',
                style: TextStyle(
                  color: _kBolt.withValues(alpha: 0.85),
                  fontWeight: FontWeight.w800,
                  letterSpacing: 1.4,
                  fontSize: 11,
                ),
              ),
            ),
            PopupMenuButton<_MemberHistoryFilter>(
              tooltip: 'Filter history',
              padding: EdgeInsets.zero,
              icon: Icon(
                Icons.filter_list_rounded,
                size: 20,
                color: historyFilter == _MemberHistoryFilter.all
                    ? _kBolt.withValues(alpha: 0.75)
                    : _kHelpGreenHot,
              ),
              color: _kPanel,
              onSelected: onFilterChanged,
              itemBuilder: (ctx) => [
                _historyFilterItem('All', _MemberHistoryFilter.all),
                _historyFilterItem('Contributions', _MemberHistoryFilter.contributions),
                _historyFilterItem('Missed', _MemberHistoryFilter.missed),
              ],
            ),
          ],
        ),
        const SizedBox(height: 8),
        if (filtered.isEmpty)
          Text(
            historyFilter == _MemberHistoryFilter.missed
                ? 'No missed contributions for this member.'
                : historyFilter == _MemberHistoryFilter.contributions
                    ? 'No recorded contributions for this member.'
                    : 'No history yet for this member.',
            style: const TextStyle(color: Colors.white38),
          )
        else
          ...filtered.map((item) => _historyTile(context, item)),
        const SizedBox(height: 12),
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Close', style: TextStyle(color: Colors.white54)),
        ),
      ],
    );
  }

  PopupMenuItem<_MemberHistoryFilter> _historyFilterItem(
    String label,
    _MemberHistoryFilter value,
  ) {
    return PopupMenuItem(
      value: value,
      child: Row(
        children: [
          if (historyFilter == value)
            const Icon(Icons.check_rounded, color: _kHelpGreen, size: 16)
          else
            const SizedBox(width: 16),
          const SizedBox(width: 8),
          Text(
            label,
            style: TextStyle(
              color: historyFilter == value ? _kHelpGreenHot : Colors.white70,
              fontWeight:
                  historyFilter == value ? FontWeight.w800 : FontWeight.w500,
            ),
          ),
        ],
      ),
    );
  }

  Widget _historyTile(BuildContext context, _MemberHistoryItem item) {
    if (item is _ContributionHistoryItem) {
      final e = item.entry;
      final title = e.campaignId.isNotEmpty && e.note.isNotEmpty
          ? e.note
          : (group.helpPurpose.isNotEmpty && e.campaignId.isNotEmpty
              ? group.helpPurpose
              : e.label);
      return Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: _kPanel,
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: _kBolt.withValues(alpha: 0.22)),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Icon(Icons.south_west_rounded, color: _kBolt, size: 18),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w900,
                      fontSize: 15,
                      height: 1.2,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    e.at.toLocal().toString().split('.').first,
                    style: const TextStyle(color: Colors.white38, fontSize: 10),
                  ),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Text(
              '\$${e.amount.toStringAsFixed(2)}',
              style: const TextStyle(
                color: _kBolt,
                fontWeight: FontWeight.w900,
                fontSize: 14,
              ),
            ),
          ],
        ),
      );
    }

    final missedItem = item as _MissedHistoryItem;
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: _kPanel,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: Colors.orangeAccent.withValues(alpha: missedItem.pending ? 0.35 : 0.5),
        ),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Icon(
            missedItem.pending ? Icons.hourglass_top_rounded : Icons.close_rounded,
            color: Colors.orangeAccent,
            size: 18,
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  missedItem.purpose,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w900,
                    fontSize: 15,
                    height: 1.2,
                  ),
                ),
                const SizedBox(height: 3),
                Text(
                  missedItem.pending
                      ? 'Active help round'
                      : missedItem.at.toLocal().toString().split('.').first,
                  style: const TextStyle(color: Colors.white38, fontSize: 10),
                ),
              ],
            ),
          ),
          if (isOwner &&
              !missedItem.pending &&
              missedItem.entryId.isNotEmpty &&
              onClearMissed != null)
            TextButton(
              onPressed: () async {
                final ok = await _showLightningClearMissedConfirmSheet(
                  context,
                  purpose: missedItem.purpose,
                );
                if (ok == true) {
                  await onClearMissed!(missedItem.entryId);
                }
              },
              style: TextButton.styleFrom(
                foregroundColor: _kHelpGreenHot,
                padding: const EdgeInsets.symmetric(horizontal: 8),
                minimumSize: Size.zero,
                tapTargetSize: MaterialTapTargetSize.shrinkWrap,
              ),
              child: const Text(
                'Clear',
                style: TextStyle(fontWeight: FontWeight.w800, fontSize: 11),
              ),
            )
          else
            Text(
              missedItem.pending ? 'PENDING' : 'MISSED',
              style: const TextStyle(
                color: Colors.orangeAccent,
                fontWeight: FontWeight.w900,
                fontSize: 12,
              ),
            ),
        ],
      ),
    );
  }
}

Future<bool?> _showLightningClearMissedConfirmSheet(
  BuildContext context, {
  required String purpose,
}) {
  return showModalBottomSheet<bool>(
    context: context,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: const EdgeInsets.fromLTRB(12, 0, 12, 14),
        child: _LightningSheetShell(
          cornerBolts: false,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _kHelpGreen.withValues(alpha: 0.14),
                    border: Border.all(color: _kHelpGreen.withValues(alpha: 0.55)),
                  ),
                  child: const Icon(Icons.check_circle_outline_rounded, color: _kHelpGreen),
                ),
              ),
              const SizedBox(height: 14),
              const Text(
                'Clear missed contribution?',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.w900,
                  fontSize: 18,
                ),
              ),
              const SizedBox(height: 10),
              Text(
                purpose,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: _kHelpGreenHot,
                  fontWeight: FontWeight.w800,
                  fontSize: 16,
                  height: 1.25,
                ),
              ),
              const SizedBox(height: 10),
              const Text(
                'This removes the missed mark for this member. Only clear if they paid or you confirmed the contribution.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white38, fontSize: 12, height: 1.35),
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(
                    child: TextButton(
                      onPressed: () => Navigator.pop(ctx, false),
                      child: const Text('Keep missed',
                          style: TextStyle(color: Colors.white54)),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    flex: 2,
                    child: FilledButton(
                      onPressed: () => Navigator.pop(ctx, true),
                      style: FilledButton.styleFrom(
                        backgroundColor: _kHelpGreen,
                        foregroundColor: _kInk,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                        ),
                      ),
                      child: const Text(
                        'Yes, clear it',
                        style: TextStyle(fontWeight: FontWeight.w900),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      );
    },
  );
}

Future<bool?> _showLightningContributionVerifySheet(
  BuildContext context, {
  required String memberName,
  required double amount,
  String? helpPurpose,
}) {
  return showModalBottomSheet<bool>(
    context: context,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: const EdgeInsets.fromLTRB(12, 0, 12, 14),
        child: _LightningSheetShell(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _kBolt.withValues(alpha: 0.14),
                    border: Border.all(color: _kBolt.withValues(alpha: 0.55)),
                  ),
                  child: const Icon(Icons.fact_check_rounded, color: _kBolt),
                ),
              ),
              const SizedBox(height: 14),
              const Text(
                'Verify contribution',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.w900,
                  fontSize: 18,
                ),
              ),
              const SizedBox(height: 12),
              _verifyRow('Member', memberName),
              _verifyRow('Amount', '\$${amount.toStringAsFixed(2)}'),
              if (helpPurpose != null && helpPurpose.trim().isNotEmpty)
                _verifyRow('Help for', helpPurpose.trim()),
              const SizedBox(height: 10),
              const Text(
                'Make sure this is correct before saving to the ledger.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white38, fontSize: 12, height: 1.35),
              ),
              const SizedBox(height: 18),
              Row(
                children: [
                  Expanded(
                    child: TextButton(
                      onPressed: () => Navigator.pop(ctx, false),
                      child: const Text('Go back',
                          style: TextStyle(color: Colors.white54)),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    flex: 2,
                    child: FilledButton(
                      onPressed: () => Navigator.pop(ctx, true),
                      style: FilledButton.styleFrom(
                        backgroundColor: _kBolt,
                        foregroundColor: _kInk,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                        ),
                      ),
                      child: const Text(
                        'Confirm & save',
                        style: TextStyle(fontWeight: FontWeight.w900),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      );
    },
  );
}

Widget _verifyRow(String label, String value) {
  return Padding(
    padding: const EdgeInsets.symmetric(vertical: 4),
    child: Row(
      children: [
        Text(label,
            style: const TextStyle(color: Colors.white38, fontSize: 12)),
        const Spacer(),
        Flexible(
          child: Text(
            value,
            textAlign: TextAlign.right,
            style: const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.w800,
              fontSize: 13,
            ),
          ),
        ),
      ],
    ),
  );
}

Future<NgmyCivicUserGroup?> _showLightningHelpModeSheet(
  BuildContext context, {
  required NgmyCivicUserGroup group,
  required Animation<double> pulse,
  required bool isOwner,
}) {
  if (!isOwner) {
    return _showLightningHelpModeMemberSheet(context, group: group, pulse: pulse);
  }

  final purposeC = TextEditingController(text: group.helpPurpose);
  final cashC = TextEditingController(text: group.helpCashApp);
  final zelleC = TextEditingController(text: group.helpZelle);
  final phoneC = TextEditingController(text: group.helpPhone);
  final active = group.helpModeActive;

  void applyFields() {
    group.saveHelpSettings(
      purpose: purposeC.text,
      cashApp: cashC.text,
      zelle: zelleC.text,
      phone: phoneC.text,
    );
  }

  return showModalBottomSheet<NgmyCivicUserGroup>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: DraggableScrollableSheet(
          initialChildSize: 0.82,
          minChildSize: 0.5,
          maxChildSize: 0.94,
          builder: (context, scrollController) {
            return _LightningSheetShell(
              child: ListView(
                controller: scrollController,
                children: [
                  _helpModeSheetHeader(pulse: pulse, active: active),
                  const SizedBox(height: 8),
                  Text(
                    active ? 'Help mode is live' : 'Set up group help mode',
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.w900,
                      fontSize: 18,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    active
                        ? 'Members see the green icon and your payment details. Turn off when the round ends.'
                        : 'Fill in where members send money. These details stay saved for next time.',
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      color: Colors.white54,
                      fontSize: 12,
                      height: 1.35,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'HELP DETAILS',
                    style: TextStyle(
                      color: _kHelpGreen.withValues(alpha: 0.9),
                      fontWeight: FontWeight.w800,
                      letterSpacing: 1.4,
                      fontSize: 11,
                    ),
                  ),
                  const SizedBox(height: 10),
                  TextField(
                    controller: purposeC,
                    maxLines: 2,
                    style: const TextStyle(color: Colors.white),
                    decoration: _lightningFieldDecoration(
                      'What are you collecting for?',
                    ),
                  ),
                  const SizedBox(height: 10),
                  TextField(
                    controller: cashC,
                    style: const TextStyle(color: Colors.white),
                    decoration: _lightningFieldDecoration('Cash App'),
                  ),
                  const SizedBox(height: 10),
                  TextField(
                    controller: zelleC,
                    style: const TextStyle(color: Colors.white),
                    decoration: _lightningFieldDecoration('Zelle'),
                  ),
                  const SizedBox(height: 10),
                  TextField(
                    controller: phoneC,
                    keyboardType: TextInputType.phone,
                    style: const TextStyle(color: Colors.white),
                    decoration: _lightningFieldDecoration(
                      'Phone — questions or confirm payment',
                    ),
                  ),
                  const SizedBox(height: 18),
                  if (active) ...[
                    FilledButton(
                      onPressed: () {
                        applyFields();
                        group.deactivateHelpMode();
                        Navigator.pop(ctx, group);
                      },
                      style: FilledButton.styleFrom(
                        backgroundColor: Colors.redAccent,
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                        ),
                      ),
                      child: const Text(
                        'Deactivate help mode',
                        style: TextStyle(fontWeight: FontWeight.w900),
                      ),
                    ),
                    const SizedBox(height: 8),
                    OutlinedButton(
                      onPressed: () {
                        applyFields();
                        Navigator.pop(ctx, group);
                      },
                      style: OutlinedButton.styleFrom(
                        foregroundColor: _kHelpGreenHot,
                        side: BorderSide(color: _kHelpGreen.withValues(alpha: 0.55)),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                        ),
                      ),
                      child: const Text(
                        'Save details',
                        style: TextStyle(fontWeight: FontWeight.w800),
                      ),
                    ),
                  ] else ...[
                    OutlinedButton(
                      onPressed: () {
                        applyFields();
                        Navigator.pop(ctx, group);
                      },
                      style: OutlinedButton.styleFrom(
                        foregroundColor: _kBolt,
                        side: BorderSide(color: _kBolt.withValues(alpha: 0.45)),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                        ),
                      ),
                      child: const Text(
                        'Save details for later',
                        style: TextStyle(fontWeight: FontWeight.w800),
                      ),
                    ),
                    const SizedBox(height: 8),
                    FilledButton(
                      onPressed: () {
                        applyFields();
                        if (group.helpPurpose.trim().isEmpty) return;
                        group.activateHelpMode();
                        Navigator.pop(ctx, group);
                      },
                      style: FilledButton.styleFrom(
                        backgroundColor: _kHelpGreen,
                        foregroundColor: _kInk,
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14),
                        ),
                      ),
                      child: const Text(
                        'Activate help mode',
                        style: TextStyle(fontWeight: FontWeight.w900),
                      ),
                    ),
                  ],
                  const SizedBox(height: 8),
                  TextButton(
                    onPressed: () => Navigator.pop(ctx),
                    child: const Text('Cancel',
                        style: TextStyle(color: Colors.white54)),
                  ),
                ],
              ),
            );
          },
        ),
      );
    },
  ).whenComplete(() {
    purposeC.dispose();
    cashC.dispose();
    zelleC.dispose();
    phoneC.dispose();
  });
}

Future<NgmyCivicUserGroup?> _showLightningHelpModeMemberSheet(
  BuildContext context, {
  required NgmyCivicUserGroup group,
  required Animation<double> pulse,
}) {
  return showModalBottomSheet<NgmyCivicUserGroup>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: const EdgeInsets.fromLTRB(12, 0, 12, 14),
        child: DraggableScrollableSheet(
          initialChildSize: 0.72,
          minChildSize: 0.45,
          maxChildSize: 0.9,
          builder: (context, scrollController) {
            return _LightningSheetShell(
              cornerBolts: false,
              child: ListView(
                controller: scrollController,
                children: [
                  _helpModeSheetHeader(pulse: pulse, active: true),
                  const SizedBox(height: 10),
                  const Text(
                    'HELP MODE ACTIVE',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: _kHelpGreenHot,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 1.6,
                      fontSize: 14,
                    ),
                  ),
                  const SizedBox(height: 6),
                  const Text(
                    'Send your contribution using the details below. Call if you have questions or to confirm payment was received.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white54,
                      fontSize: 12,
                      height: 1.35,
                    ),
                  ),
                  const SizedBox(height: 16),
                  if (group.helpPurpose.trim().isNotEmpty)
                    _helpInfoCard(
                      ctx,
                      label: 'COLLECTING FOR',
                      value: group.helpPurpose.trim(),
                      icon: Icons.flag_rounded,
                    ),
                  if (group.helpCashApp.trim().isNotEmpty)
                    _helpInfoCard(
                      ctx,
                      label: 'CASH APP',
                      value: group.helpCashApp.trim(),
                      icon: Icons.payments_rounded,
                      onTap: () => _openLightningCashApp(group.helpCashApp),
                      tapHint: 'Open Cash App',
                    ),
                  if (group.helpZelle.trim().isNotEmpty)
                    _helpInfoCard(
                      ctx,
                      label: 'ZELLE',
                      value: group.helpZelle.trim(),
                      icon: Icons.account_balance_rounded,
                    ),
                  if (group.helpPhone.trim().isNotEmpty)
                    _helpInfoCard(
                      ctx,
                      label: 'PHONE',
                      value: group.helpPhone.trim(),
                      icon: Icons.phone_in_talk_rounded,
                      onTap: () => _callLightningPhone(group.helpPhone),
                      tapHint: 'Call',
                    ),
                  if (group.helpPurpose.trim().isEmpty &&
                      group.helpCashApp.trim().isEmpty &&
                      group.helpZelle.trim().isEmpty &&
                      group.helpPhone.trim().isEmpty)
                    const Padding(
                      padding: EdgeInsets.symmetric(vertical: 12),
                      child: Text(
                        'The group owner has not added payment details yet.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white38),
                      ),
                    ),
                  const SizedBox(height: 12),
                  TextButton(
                    onPressed: () => Navigator.pop(ctx),
                    child: const Text('Close',
                        style: TextStyle(color: Colors.white54)),
                  ),
                ],
              ),
            );
          },
        ),
      );
    },
  );
}

Widget _helpModeSheetHeader({
  required Animation<double> pulse,
  required bool active,
}) {
  return AnimatedBuilder(
    animation: pulse,
    builder: (context, _) {
      final g = pulse.value;
      return Center(
        child: Container(
          width: 56,
          height: 56,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: active
                ? _kHelpGreen.withValues(alpha: 0.22 + g * 0.18)
                : _kBolt.withValues(alpha: 0.14),
            border: Border.all(
              color: active
                  ? _kHelpGreenHot.withValues(alpha: 0.85 + g * 0.15)
                  : _kBolt.withValues(alpha: 0.5),
              width: active ? 2 : 1,
            ),
            boxShadow: active
                ? [
                    BoxShadow(
                      color: _kHelpGreen.withValues(alpha: 0.4 + g * 0.35),
                      blurRadius: 18 + g * 10,
                      spreadRadius: 1 + g,
                    ),
                  ]
                : null,
          ),
          child: Icon(
            Icons.volunteer_activism_rounded,
            color: active ? _kHelpGreenHot : _kBolt,
            shadows: active
                ? [
                    Shadow(
                      color: _kHelpGreen.withValues(alpha: 0.95),
                      blurRadius: 12 + g * 8,
                    ),
                  ]
                : null,
          ),
        ),
      );
    },
  );
}

Widget _helpInfoCard(
  BuildContext context, {
  required String label,
  required String value,
  required IconData icon,
  VoidCallback? onTap,
  String? tapHint,
}) {
  final card = Container(
    margin: const EdgeInsets.only(bottom: 10),
    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
    decoration: BoxDecoration(
      color: _kPanel,
      borderRadius: BorderRadius.circular(18),
      border: Border.all(color: _kHelpGreen.withValues(alpha: 0.35)),
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Icon(icon, color: _kHelpGreen, size: 20),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                label,
                style: TextStyle(
                  color: _kHelpGreen.withValues(alpha: 0.85),
                  fontWeight: FontWeight.w800,
                  letterSpacing: 1.1,
                  fontSize: 10,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                value,
                style: TextStyle(
                  color: onTap != null ? _kHelpGreenHot : Colors.white,
                  fontWeight: FontWeight.w700,
                  fontSize: 14,
                  height: 1.3,
                  decoration: onTap != null ? TextDecoration.underline : null,
                  decorationColor: _kHelpGreen.withValues(alpha: 0.6),
                ),
              ),
              if (onTap != null && tapHint != null) ...[
                const SizedBox(height: 4),
                Text(
                  'Tap to $tapHint',
                  style: TextStyle(
                    color: _kHelpGreen.withValues(alpha: 0.75),
                    fontSize: 10,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ],
            ],
          ),
        ),
        IconButton(
          tooltip: 'Copy',
          onPressed: () async {
            await Clipboard.setData(ClipboardData(text: value));
            if (!context.mounted) return;
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text('Copied $label')),
            );
          },
          icon: Icon(Icons.copy_rounded,
              size: 18, color: _kHelpGreen.withValues(alpha: 0.9)),
        ),
      ],
    ),
  );

  if (onTap == null) return card;
  return Material(
    color: Colors.transparent,
    child: InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(18),
      child: card,
    ),
  );
}

class _LightningSheetShell extends StatelessWidget {
  const _LightningSheetShell({
    required this.child,
    this.cornerBolts = true,
  });

  final Widget child;
  final bool cornerBolts;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 0, 12, 14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        color: _kInk,
        border: Border.all(color: _kBolt.withValues(alpha: 0.4), width: 1.3),
        boxShadow: [
          BoxShadow(
            color: _kBolt.withValues(alpha: 0.22),
            blurRadius: 28,
          ),
        ],
      ),
      child: CustomPaint(
        painter: _LightningFramePainter(
          intensity: 0.85,
          corners: cornerBolts,
        ),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(18, 18, 18, 16),
          child: child,
        ),
      ),
    );
  }
}

Widget _sheetHeader({
  required IconData icon,
  required String title,
  required String subtitle,
}) {
  return Row(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Container(
        width: 46,
        height: 46,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: _kBolt.withValues(alpha: 0.16),
          border: Border.all(color: _kBolt.withValues(alpha: 0.55)),
          boxShadow: [
            BoxShadow(color: _kBolt.withValues(alpha: 0.35), blurRadius: 14),
          ],
        ),
        child: Icon(icon, color: _kBolt),
      ),
      const SizedBox(width: 12),
      Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: const TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w900,
                fontSize: 17,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              subtitle,
              style: const TextStyle(
                color: Colors.white60,
                height: 1.35,
                fontSize: 12.5,
              ),
            ),
          ],
        ),
      ),
    ],
  );
}

InputDecoration _lightningFieldDecoration(String hint) {
  return InputDecoration(
    hintText: hint,
    hintStyle: const TextStyle(color: Colors.white38),
    filled: true,
    fillColor: Colors.white.withValues(alpha: 0.05),
    contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: BorderSide(color: _kBolt.withValues(alpha: 0.25)),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: const BorderSide(color: _kBolt, width: 1.4),
    ),
  );
}

