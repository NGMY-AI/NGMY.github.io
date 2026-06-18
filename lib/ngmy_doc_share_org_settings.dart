import 'package:flutter/material.dart';

import 'ngmy_doc_share_school.dart';
import 'ngmy_studio_hub.dart';

/// Organization owner — change access code, password, and organization name.
class NgmyDocShareOrgSettingsPage extends StatefulWidget {
  const NgmyDocShareOrgSettingsPage({
    super.key,
    required this.ownerEmail,
    required this.initialLoginCode,
    required this.initialOrgName,
  });

  final String ownerEmail;
  final String initialLoginCode;
  final String initialOrgName;

  @override
  State<NgmyDocShareOrgSettingsPage> createState() => _NgmyDocShareOrgSettingsPageState();
}

class _NgmyDocShareOrgSettingsPageState extends State<NgmyDocShareOrgSettingsPage> {
  late final TextEditingController _nameC;
  late final TextEditingController _codeC;
  late final TextEditingController _passC;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    _nameC = TextEditingController(text: widget.initialOrgName);
    _codeC = TextEditingController(text: widget.initialLoginCode);
    _passC = TextEditingController();
  }

  @override
  void dispose() {
    _nameC.dispose();
    _codeC.dispose();
    _passC.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    if (_saving) return;
    setState(() => _saving = true);
    try {
      final ok = await NgmyDocShareSchool.updateOrganizationPortal(
        ownerEmail: widget.ownerEmail,
        loginCode: widget.initialLoginCode,
        organizationName: _nameC.text,
        newLoginCode: _codeC.text.trim() != widget.initialLoginCode.trim() ? _codeC.text : null,
        password: _passC.text.trim().isEmpty ? null : _passC.text,
      );
      if (!mounted) return;
      if (!ok) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not save. Access code may already be in use.')),
        );
        return;
      }
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Organization settings saved.')),
      );
      Navigator.pop(context, true);
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        title: const Text('Organization settings', style: TextStyle(fontWeight: FontWeight.w900)),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(22),
                gradient: const LinearGradient(
                  colors: [Color(0xFF2563EB), Color(0xFF7C3AED)],
                ),
              ),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Your team portal', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                  SizedBox(height: 6),
                  Text(
                    'Share the access code and member password with your team. They only sign in once.',
                    style: TextStyle(color: Colors.white70, fontSize: 13, height: 1.4),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _nameC,
              decoration: const InputDecoration(
                labelText: 'Organization name',
                prefixIcon: Icon(Icons.apartment_rounded),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _codeC,
              decoration: const InputDecoration(
                labelText: 'Access code',
                helperText: 'Team members enter this code to sign in',
                prefixIcon: Icon(Icons.badge_rounded),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _passC,
              obscureText: true,
              decoration: const InputDecoration(
                labelText: 'New member password (optional)',
                helperText: 'Leave blank to keep current password',
                prefixIcon: Icon(Icons.key_rounded),
              ),
            ),
            const SizedBox(height: 24),
            FilledButton(
              onPressed: _saving ? null : _save,
              style: FilledButton.styleFrom(
                backgroundColor: kNgmyStudioHubAccent,
                minimumSize: const Size(double.infinity, 48),
              ),
              child: _saving
                  ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : const Text('Save changes', style: TextStyle(fontWeight: FontWeight.w800)),
            ),
          ],
        ),
      ),
    );
  }
}
