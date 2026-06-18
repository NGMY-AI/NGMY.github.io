import 'package:flutter/material.dart';

import 'ngmy_doc_share_payments.dart';
import 'ngmy_doc_share_school.dart';
import 'ngmy_doc_share_ui.dart';
import 'ngmy_studio_hub.dart';

/// Doc Share entry — individual vs school, payments, beautiful flyer layout.
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

  if (isAdmin) {
    await Navigator.of(context).push<void>(
      MaterialPageRoute<void>(
        builder: (_) => NgmyDocSharePage(
          email: email.trim(),
          user: user,
          config: config,
          isAdmin: true,
          onCharge: onCharge,
          onDataChanged: onDataChanged,
          onPersistConfig: onPersistConfig,
        ),
      ),
    );
    return;
  }

  await Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      builder: (_) => _DocShareGatePage(
        email: email.trim(),
        user: user,
        config: config,
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
  });

  final String email;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description) onCharge;
  final VoidCallback onDataChanged;
  final Future<bool> Function() onPersistConfig;

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
    final ok = await NgmyDocSharePayments.ensureIndividualAccess(
      context: context,
      user: widget.user,
      config: widget.config,
      onCharge: widget.onCharge,
      onDataChanged: widget.onDataChanged,
      onPersistConfig: widget.onPersistConfig,
    );
    if (!ok || !mounted) return;
    await Navigator.of(context).pushReplacement<void, void>(
      MaterialPageRoute<void>(
        builder: (_) => NgmyDocSharePage(
          email: widget.email,
          user: widget.user,
          config: widget.config,
          isAdmin: false,
          onCharge: widget.onCharge,
          onDataChanged: widget.onDataChanged,
          onPersistConfig: widget.onPersistConfig,
        ),
      ),
    );
  }

  Future<void> _openSchoolStudent() async {
    final loginC = TextEditingController();
    final passC = TextEditingController();
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('School login', style: TextStyle(fontWeight: FontWeight.w900)),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: loginC,
              decoration: const InputDecoration(
                labelText: 'School code',
                hintText: 'From your teacher',
                prefixIcon: Icon(Icons.school_rounded),
              ),
            ),
            const SizedBox(height: 10),
            TextField(
              controller: passC,
              obscureText: true,
              decoration: const InputDecoration(
                labelText: 'Password',
                prefixIcon: Icon(Icons.lock_rounded),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Enter')),
        ],
      ),
    );
    if (ok != true || !mounted) return;

    final valid = await NgmyDocShareSchool.validateStudentLogin(
      studentEmail: widget.email,
      loginCode: loginC.text,
      password: passC.text,
    );
    if (!mounted) return;
    if (!valid) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('School code or password incorrect.')),
      );
      return;
    }
    await Navigator.of(context).pushReplacement<void, void>(
      MaterialPageRoute<void>(
        builder: (_) => NgmyDocSharePage(
          email: widget.email,
          user: widget.user,
          config: widget.config,
          isAdmin: false,
          onCharge: widget.onCharge,
          onDataChanged: widget.onDataChanged,
          onPersistConfig: widget.onPersistConfig,
          schoolMode: true,
        ),
      ),
    );
  }

  Future<void> _openSchoolAdmin() async {
    final licensed = await NgmyDocSharePayments.ensureSchoolLicense(
      context: context,
      user: widget.user,
      config: widget.config,
      onCharge: widget.onCharge,
      onDataChanged: widget.onDataChanged,
      onPersistConfig: widget.onPersistConfig,
    );
    if (!licensed || !mounted) return;

    final nameC = TextEditingController();
    final codeC = TextEditingController();
    final passC = TextEditingController();
    final setup = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        title: const Text('Create school portal', style: TextStyle(fontWeight: FontWeight.w900)),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                'Set a school code and password. Share these with students so they can log in under School.',
                style: TextStyle(fontSize: 13, height: 1.4),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: nameC,
                decoration: const InputDecoration(labelText: 'School name', prefixIcon: Icon(Icons.apartment_rounded)),
              ),
              const SizedBox(height: 8),
              TextField(
                controller: codeC,
                decoration: const InputDecoration(labelText: 'School code (username)', prefixIcon: Icon(Icons.badge_rounded)),
              ),
              const SizedBox(height: 8),
              TextField(
                controller: passC,
                obscureText: true,
                decoration: const InputDecoration(labelText: 'Student password', prefixIcon: Icon(Icons.key_rounded)),
              ),
            ],
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Later')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Create')),
        ],
      ),
    );
    if (setup != true || !mounted) {
      await _openIndividual();
      return;
    }

    final created = await NgmyDocShareSchool.createSchoolPortal(
      ownerEmail: widget.email,
      schoolName: nameC.text,
      loginCode: codeC.text,
      password: passC.text,
    );
    if (!mounted) return;
    if (!created) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not create portal. Code may already be in use.')),
      );
      return;
    }
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Portal ready. Students use code "${codeC.text.trim()}" + your password.')),
    );
    await _openIndividual();
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
              Row(
                children: [
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.arrow_back_rounded)),
                  const Expanded(
                    child: Text(
                      'Doc Share',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18),
                    ),
                  ),
                  const SizedBox(width: 48),
                ],
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
              Text('Who are you?', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : const Color(0xFF0F172A))),
              const SizedBox(height: 12),
              _GateChoiceCard(
                icon: Icons.person_rounded,
                colors: const [Color(0xFF6D28D9), Color(0xFF9333EA)],
                title: 'Individual',
                subtitle: 'Personal use · $remainingLabel uploads/shares',
                onTap: _openIndividual,
              ),
              const SizedBox(height: 12),
              _GateChoiceCard(
                icon: Icons.school_rounded,
                colors: const [Color(0xFF0D9488), Color(0xFF059669)],
                title: 'School — Student',
                subtitle: 'Enter school code + password from your teacher',
                onTap: _openSchoolStudent,
              ),
              const SizedBox(height: 12),
              _GateChoiceCard(
                icon: Icons.admin_panel_settings_rounded,
                colors: const [Color(0xFF2563EB), Color(0xFF7C3AED)],
                title: 'School — Administrator',
                subtitle:
                    'Pay school license · create student login (\$${NgmyDocSharePayments.schoolLicenseFeeFromConfig(widget.config).toStringAsFixed(0)}/yr)',
                onTap: _openSchoolAdmin,
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
