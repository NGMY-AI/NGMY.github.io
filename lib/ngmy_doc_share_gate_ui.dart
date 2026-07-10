import 'package:flutter/material.dart';

import 'ngmy_doc_share_payments.dart';
import 'ngmy_doc_share_school.dart';
import 'ngmy_doc_share_ui.dart';
import 'ngmy_hud_tech_shell.dart';
import 'ngmy_studio_hub.dart';

/// Doc Share entry — individual vs organization paths, smart routing, redesigned sheets.
Future<void> openNgmyDocShare({
  required BuildContext context,
  required dynamic user,
  required dynamic config,
  required Future<bool> Function(double amount, String description) onCharge,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersistConfig,
}) async {
  final email = ((user as dynamic).email as String?) ?? '';
  if (email.trim().isEmpty) return;
  final isAdmin = (user as dynamic).isAdmin == true;
  final trimmed = email.trim();

  if (isAdmin) {
    await _pushDocShare(
      context,
      email: trimmed,
      user: user,
      config: config,
      isAdmin: true,
      onCharge: onCharge,
      onDataChanged: onDataChanged,
      onPersistConfig: onPersistConfig,
    );
    return;
  }

  final resolved = await _resolveEntry(
    email: trimmed,
    user: user,
    config: config,
    onCharge: onCharge,
    onDataChanged: onDataChanged,
    onPersistConfig: onPersistConfig,
  );

  if (!context.mounted) return;

  switch (resolved) {
    case _DocShareEntry.docShare:
      await _pushDocShare(
        context,
        email: trimmed,
        user: user,
        config: config,
        memberMode: await NgmyDocShareSchool.hasActiveMemberSession(trimmed, config: config),
        orgOwnerMode: await _isOrgOwnerWithAccess(trimmed, config),
        onCharge: onCharge,
        onDataChanged: onDataChanged,
        onPersistConfig: onPersistConfig,
      );
    case _DocShareEntry.gate:
      await Navigator.of(context).push<void>(
        MaterialPageRoute<void>(
          builder: (_) => _DocShareGatePage(
            email: trimmed,
            user: user,
            config: config,
            onCharge: onCharge,
            onDataChanged: onDataChanged,
            onPersistConfig: onPersistConfig,
          ),
        ),
      );
    case _DocShareEntry.gateNoIndividual:
      await Navigator.of(context).push<void>(
        MaterialPageRoute<void>(
          builder: (_) => _DocShareGatePage(
            email: trimmed,
            user: user,
            config: config,
            hideIndividual: true,
            onCharge: onCharge,
            onDataChanged: onDataChanged,
            onPersistConfig: onPersistConfig,
          ),
        ),
      );
  }
}

enum _DocShareEntry { docShare, gate, gateNoIndividual }

Future<_DocShareEntry> _resolveEntry({
  required String email,
  required dynamic user,
  required dynamic config,
  required Future<bool> Function(double amount, String description) onCharge,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersistConfig,
}) async {
  final path = await NgmyDocSharePayments.savedPath(email);
  final exhausted = await NgmyDocSharePayments.individualFreeExhausted(config, email);

  if (path == NgmyDocSharePayments.pathMember) {
    if (await NgmyDocShareSchool.hasActiveMemberSession(email, config: config)) {
      return _DocShareEntry.docShare;
    }
    await NgmyDocSharePayments.clearSavedPath(email);
    return exhausted ? _DocShareEntry.gateNoIndividual : _DocShareEntry.gate;
  }

  if (path == NgmyDocSharePayments.pathOrgOwner) {
    if (NgmyDocSharePayments.hasSchoolLicense(config, email)) {
      return _DocShareEntry.docShare;
    }
    await NgmyDocSharePayments.clearSavedPath(email);
    return exhausted ? _DocShareEntry.gateNoIndividual : _DocShareEntry.gate;
  }

  if (path == NgmyDocSharePayments.pathIndividual) {
    if (!exhausted || NgmyDocSharePayments.hasIndividualAccess(config, email)) {
      return _DocShareEntry.docShare;
    }
    await NgmyDocSharePayments.clearSavedPath(email);
    return _DocShareEntry.gateNoIndividual;
  }

  return exhausted ? _DocShareEntry.gateNoIndividual : _DocShareEntry.gate;
}

Future<bool> _isOrgOwnerWithAccess(String email, dynamic config) async {
  if (!NgmyDocSharePayments.hasSchoolLicense(config, email)) return false;
  final path = await NgmyDocSharePayments.savedPath(email);
  return path == NgmyDocSharePayments.pathOrgOwner;
}

Future<void> _pushDocShare(
  BuildContext context, {
  required String email,
  required dynamic user,
  required dynamic config,
  bool isAdmin = false,
  bool memberMode = false,
  bool orgOwnerMode = false,
  required Future<bool> Function(double amount, String description) onCharge,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersistConfig,
}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      builder: (_) => NgmyDocSharePage(
        email: email,
        user: user,
        config: config,
        isAdmin: isAdmin,
        schoolMode: memberMode,
        orgOwnerMode: orgOwnerMode,
        onCharge: onCharge,
        onDataChanged: onDataChanged,
        onPersistConfig: onPersistConfig,
      ),
    ),
  );
}

class _DocShareGatePage extends StatefulWidget {
  const _DocShareGatePage({
    required this.email,
    required this.user,
    required this.config,
    required this.onCharge,
    required this.onDataChanged,
    required this.onPersistConfig,
    this.hideIndividual = false,
  });

  final String email;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description) onCharge;
  final VoidCallback onDataChanged;
  final Future<bool> Function() onPersistConfig;
  final bool hideIndividual;

  @override
  State<_DocShareGatePage> createState() => _DocShareGatePageState();
}

class _DocShareGatePageState extends State<_DocShareGatePage> {
  int? _remaining;

  @override
  void initState() {
    super.initState();
    _refreshRemaining();
  }

  Future<void> _refreshRemaining() async {
    final r = await NgmyDocSharePayments.remainingFree(widget.config, widget.email);
    if (mounted) setState(() => _remaining = r);
  }

  Future<void> _openIndividual() async {
    final exhausted = await NgmyDocSharePayments.individualFreeExhausted(widget.config, widget.email);
    if (exhausted) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Free uploads used up. Join an organization or subscribe as an owner.')),
      );
      return;
    }
    await NgmyDocSharePayments.setSavedPath(widget.email, NgmyDocSharePayments.pathIndividual);
    if (!mounted) return;
    await Navigator.of(context).pushReplacement<void, void>(
      MaterialPageRoute<void>(
        builder: (_) => NgmyDocSharePage(
          email: widget.email,
          user: widget.user,
          config: widget.config,
          onCharge: widget.onCharge,
          onDataChanged: widget.onDataChanged,
          onPersistConfig: widget.onPersistConfig,
        ),
      ),
    );
  }

  Future<void> _openTeamMember() async {
    final result = await _showMemberLoginSheet(context);
    if (result == null || !mounted) return;

    final valid = await NgmyDocShareSchool.validateMemberLogin(
      memberEmail: widget.email,
      loginCode: result.code,
      password: result.password,
      config: widget.config,
    );
    if (!mounted) return;
    if (!valid) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Access code or password incorrect, or organization subscription expired.')),
      );
      return;
    }
    await NgmyDocSharePayments.setSavedPath(widget.email, NgmyDocSharePayments.pathMember);
    if (!mounted) return;
    await Navigator.of(context).pushReplacement<void, void>(
      MaterialPageRoute<void>(
        builder: (_) => NgmyDocSharePage(
          email: widget.email,
          user: widget.user,
          config: widget.config,
          schoolMode: true,
          onCharge: widget.onCharge,
          onDataChanged: widget.onDataChanged,
          onPersistConfig: widget.onPersistConfig,
        ),
      ),
    );
  }

  Future<void> _openOrgOwner() async {
    final licensed = await NgmyDocSharePayments.ensureSchoolLicense(
      context: context,
      user: widget.user,
      config: widget.config,
      onCharge: widget.onCharge,
      onDataChanged: widget.onDataChanged,
      onPersistConfig: widget.onPersistConfig,
    );
    if (!licensed || !mounted) return;

    await NgmyDocSharePayments.setSavedPath(widget.email, NgmyDocSharePayments.pathOrgOwner);

    var portal = await NgmyDocShareSchool.ownerPortal(widget.email);
    if (portal == null || portal['active'] != true) {
      if (!mounted) return;
      final setup = await _showOrgPortalSheet(context);
      if (setup == null || !mounted) return;

      final created = await NgmyDocShareSchool.createOrganizationPortal(
        ownerEmail: widget.email,
        organizationName: setup.name,
        loginCode: setup.code,
        password: setup.password,
      );
      if (!mounted) return;
      if (!created) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not create portal. Access code may already be in use.')),
        );
        return;
      }
      portal = await NgmyDocShareSchool.ownerPortal(widget.email);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Portal ready. Share code "${setup.code}" and your member password.')),
      );
    }

    if (!mounted) return;
    await Navigator.of(context).pushReplacement<void, void>(
      MaterialPageRoute<void>(
        builder: (_) => NgmyDocSharePage(
          email: widget.email,
          user: widget.user,
          config: widget.config,
          orgOwnerMode: true,
          onCharge: widget.onCharge,
          onDataChanged: widget.onDataChanged,
          onPersistConfig: widget.onPersistConfig,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final limit = NgmyDocSharePayments.individualFreeLimitFromConfig(widget.config);
    final remainingLabel = _remaining == null
        ? '…'
        : NgmyDocSharePayments.isUnlimitedRemaining(_remaining!)
            ? 'Unlimited'
            : '$_remaining of $limit free';

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 28),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              NgmyHudMotion(
                builder: (context, pulse, scan, orbit) {
                  const colors = [Color(0xFF0D9488), Color(0xFF7C3AED)];
                  return NgmyToolkitAliveSection(
                    colors: colors,
                    pulse: pulse,
                    scan: scan,
                    orbit: orbit,
                    padding: const EdgeInsets.fromLTRB(4, 2, 8, 2),
                    child: Row(
                      children: [
                        IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.arrow_back_rounded, color: Colors.white70)),
                        Expanded(
                          child: NgmyToolkitAliveHeader(
                            title: 'Doc Share',
                            subtitle: 'Upload · share · sync',
                            colors: colors,
                            pulse: pulse,
                            orbit: orbit,
                            icon: Icons.folder_shared_rounded,
                            dense: true,
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),
              const SizedBox(height: 8),
              Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(28),
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF0D9488), Color(0xFF059669), Color(0xFF7C3AED)],
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: kNgmyStudioHubAccent.withValues(alpha: 0.35),
                      blurRadius: 24,
                      offset: const Offset(0, 12),
                    ),
                  ],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.2),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Text('NGMY DOC SHARE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.2)),
                    ),
                    const SizedBox(height: 14),
                    const Text(
                      'Share files & videos\nwith a scan.',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 28, height: 1.15),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      'Photos, documents, long videos — QR transfer to any phone.',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.92), fontSize: 14, height: 1.45),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 22),
              Text(
                widget.hideIndividual ? 'Choose how to continue' : 'Who are you?',
                style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : const Color(0xFF0F172A)),
              ),
              if (widget.hideIndividual) ...[
                const SizedBox(height: 6),
                Text(
                  'Your free personal uploads are used up. Join a team or subscribe for your organization.',
                  style: TextStyle(fontSize: 13, height: 1.4, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
                ),
              ],
              const SizedBox(height: 12),
              if (!widget.hideIndividual) ...[
                _GateChoiceCard(
                  icon: Icons.person_rounded,
                  colors: const [Color(0xFF6D28D9), Color(0xFF9333EA)],
                  title: 'Individual',
                  subtitle: 'Personal use · $remainingLabel uploads/shares',
                  onTap: _openIndividual,
                ),
                const SizedBox(height: 12),
              ],
              _GateChoiceCard(
                icon: Icons.groups_rounded,
                colors: const [Color(0xFF0D9488), Color(0xFF059669)],
                title: 'Team Member',
                subtitle: 'Sign in with your organization access code + password',
                onTap: _openTeamMember,
              ),
              const SizedBox(height: 12),
              _GateChoiceCard(
                icon: Icons.corporate_fare_rounded,
                colors: const [Color(0xFF2563EB), Color(0xFF7C3AED)],
                title: 'Organization Owner',
                subtitle:
                    'Subscribe for your team · create member logins (\$${NgmyDocSharePayments.schoolLicenseFeeFromConfig(widget.config).toStringAsFixed(0)}/yr)',
                onTap: _openOrgOwner,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _GateChoiceCard extends StatelessWidget {
  const _GateChoiceCard({
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

  @override
  Widget build(BuildContext context) {
    final surface = Theme.of(context).colorScheme.surfaceContainerHighest.withValues(alpha: 0.55);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(22),
        child: Ink(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: surface,
            borderRadius: BorderRadius.circular(22),
            border: Border.all(color: colors.first.withValues(alpha: 0.35)),
          ),
          child: Row(
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: colors),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Icon(icon, color: Colors.white, size: 30),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                    const SizedBox(height: 4),
                    Text(subtitle, style: TextStyle(fontSize: 12, height: 1.35, color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.65))),
                  ],
                ),
              ),
              Icon(Icons.arrow_forward_ios_rounded, size: 16, color: colors.first.withValues(alpha: 0.7)),
            ],
          ),
        ),
      ),
    );
  }
}

class _MemberLoginResult {
  const _MemberLoginResult({required this.code, required this.password});
  final String code;
  final String password;
}

class _OrgPortalSetup {
  const _OrgPortalSetup({required this.name, required this.code, required this.password});
  final String name;
  final String code;
  final String password;
}

Future<_MemberLoginResult?> _showMemberLoginSheet(BuildContext context) async {
  final codeC = TextEditingController();
  final passC = TextEditingController();
  final isDark = Theme.of(context).brightness == Brightness.dark;

  final result = await showModalBottomSheet<_MemberLoginResult>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: Container(
          margin: const EdgeInsets.fromLTRB(12, 0, 12, 16),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF151B28) : Colors.white,
            borderRadius: BorderRadius.circular(28),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(24, 22, 24, 20),
                decoration: const BoxDecoration(
                  borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
                  gradient: LinearGradient(colors: [Color(0xFF0D9488), Color(0xFF059669)]),
                ),
                child: const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Team Member sign-in', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                    SizedBox(height: 6),
                    Text(
                      'Enter the access code and password from your organization.',
                      style: TextStyle(color: Colors.white70, fontSize: 13, height: 1.4),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
                child: Column(
                  children: [
                    TextField(
                      controller: codeC,
                      textCapitalization: TextCapitalization.none,
                      decoration: InputDecoration(
                        labelText: 'Access code',
                        hintText: 'From your manager or admin',
                        prefixIcon: const Icon(Icons.vpn_key_rounded),
                        filled: true,
                        fillColor: isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF8FAFC),
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                      ),
                    ),
                    const SizedBox(height: 12),
                    TextField(
                      controller: passC,
                      obscureText: true,
                      decoration: InputDecoration(
                        labelText: 'Password',
                        prefixIcon: const Icon(Icons.lock_rounded),
                        filled: true,
                        fillColor: isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF8FAFC),
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                      ),
                    ),
                    const SizedBox(height: 18),
                    Row(
                      children: [
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () => Navigator.pop(ctx),
                            child: const Text('Cancel'),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          flex: 2,
                          child: FilledButton(
                            onPressed: () {
                              if (codeC.text.trim().length < 3 || passC.text.trim().length < 4) {
                                ScaffoldMessenger.of(ctx).showSnackBar(
                                  const SnackBar(content: Text('Enter a valid access code and password.')),
                                );
                                return;
                              }
                              Navigator.pop(ctx, _MemberLoginResult(code: codeC.text.trim(), password: passC.text));
                            },
                            style: FilledButton.styleFrom(backgroundColor: const Color(0xFF059669)),
                            child: const Text('Sign in', style: TextStyle(fontWeight: FontWeight.w800)),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
  codeC.dispose();
  passC.dispose();
  return result;
}

Future<_OrgPortalSetup?> _showOrgPortalSheet(BuildContext context) async {
  final nameC = TextEditingController();
  final codeC = TextEditingController();
  final passC = TextEditingController();
  final isDark = Theme.of(context).brightness == Brightness.dark;

  final result = await showModalBottomSheet<_OrgPortalSetup>(
    context: context,
    isScrollControlled: true,
    isDismissible: false,
    enableDrag: false,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return Padding(
        padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(ctx).bottom),
        child: Container(
          margin: const EdgeInsets.fromLTRB(12, 0, 12, 16),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF151B28) : Colors.white,
            borderRadius: BorderRadius.circular(28),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(24, 22, 24, 20),
                decoration: const BoxDecoration(
                  borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
                  gradient: LinearGradient(colors: [Color(0xFF2563EB), Color(0xFF7C3AED)]),
                ),
                child: const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Create your organization', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                    SizedBox(height: 6),
                    Text(
                      'Set an access code and member password. Share them with your team — they sign in once.',
                      style: TextStyle(color: Colors.white70, fontSize: 13, height: 1.4),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
                child: Column(
                  children: [
                    TextField(
                      controller: nameC,
                      decoration: _portalFieldDecoration(isDark, 'Organization name', Icons.apartment_rounded),
                    ),
                    const SizedBox(height: 10),
                    TextField(
                      controller: codeC,
                      decoration: _portalFieldDecoration(isDark, 'Access code', Icons.badge_rounded, hint: 'e.g. acme-team'),
                    ),
                    const SizedBox(height: 10),
                    TextField(
                      controller: passC,
                      obscureText: true,
                      decoration: _portalFieldDecoration(isDark, 'Member password', Icons.key_rounded),
                    ),
                    const SizedBox(height: 18),
                    FilledButton(
                      onPressed: () {
                        if (nameC.text.trim().isEmpty || codeC.text.trim().length < 3 || passC.text.trim().length < 4) {
                          ScaffoldMessenger.of(ctx).showSnackBar(
                            const SnackBar(content: Text('Fill in organization name, access code, and password.')),
                          );
                          return;
                        }
                        Navigator.pop(
                          ctx,
                          _OrgPortalSetup(name: nameC.text.trim(), code: codeC.text.trim(), password: passC.text.trim()),
                        );
                      },
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF7C3AED),
                        minimumSize: const Size(double.infinity, 48),
                      ),
                      child: const Text('Create portal', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
  nameC.dispose();
  codeC.dispose();
  passC.dispose();
  return result;
}

InputDecoration _portalFieldDecoration(bool isDark, String label, IconData icon, {String? hint}) {
  return InputDecoration(
    labelText: label,
    hintText: hint,
    prefixIcon: Icon(icon),
    filled: true,
    fillColor: isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF8FAFC),
    border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
  );
}

/// When individual free tier is exhausted during use, return user to role selection.
Future<void> ngmyDocShareReturnToRoleGate(BuildContext context, {required String email}) async {
  await NgmyDocSharePayments.clearSavedPath(email);
  if (!context.mounted) return;
  Navigator.of(context).pop();
}
