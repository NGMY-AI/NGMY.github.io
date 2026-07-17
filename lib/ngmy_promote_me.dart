import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_hub_form_ui.dart';

const _kStorageKey = 'ngmy_promote_me_v1';

String _keyFor(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

class NgmyPromoteProfile {
  NgmyPromoteProfile({
    this.name = '',
    this.role = '',
    this.tagline = '',
    this.bio = '',
    this.location = '',
    this.website = '',
    this.links = '',
  });

  String name;
  String role;
  String tagline;
  String bio;
  String location;
  String website;

  /// Free-form extra handles/links, one per line (Instagram, LinkedIn, etc).
  String links;

  bool get isFilled =>
      name.trim().isNotEmpty &&
      (role.trim().isNotEmpty || bio.trim().isNotEmpty);

  Map<String, dynamic> toJson() => {
    'name': name,
    'role': role,
    'tagline': tagline,
    'bio': bio,
    'location': location,
    'website': website,
    'links': links,
  };

  factory NgmyPromoteProfile.fromJson(Map<String, dynamic> j) =>
      NgmyPromoteProfile(
        name: (j['name'] ?? '').toString(),
        role: (j['role'] ?? '').toString(),
        tagline: (j['tagline'] ?? '').toString(),
        bio: (j['bio'] ?? '').toString(),
        location: (j['location'] ?? '').toString(),
        website: (j['website'] ?? '').toString(),
        links: (j['links'] ?? '').toString(),
      );
}

Future<NgmyPromoteProfile> _loadProfile(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_keyFor(userEmail));
  if (raw == null || raw.isEmpty) return NgmyPromoteProfile();
  try {
    return NgmyPromoteProfile.fromJson(jsonDecode(raw) as Map<String, dynamic>);
  } catch (_) {
    return NgmyPromoteProfile();
  }
}

Future<void> _saveProfile(String userEmail, NgmyPromoteProfile p) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_keyFor(userEmail), jsonEncode(p.toJson()));
}

Future<int> ngmyPromoteMeCount({required String userEmail}) async {
  final p = await _loadProfile(userEmail);
  return p.isFilled ? 1 : 0;
}

String _oneLiner(NgmyPromoteProfile p) {
  final role = p.tagline.trim().isNotEmpty ? p.tagline.trim() : p.role.trim();
  return role.isEmpty ? p.name.trim() : '${p.name.trim()} — $role';
}

String _shortBio(NgmyPromoteProfile p) {
  final where = p.location.trim().isNotEmpty
      ? ' based in ${p.location.trim()}'
      : '';
  final what = p.role.trim().isNotEmpty ? p.role.trim() : 'a professional';
  final tag = p.tagline.trim().isNotEmpty ? ' ${p.tagline.trim()}.' : '';
  return '${p.name.trim()} is $what$where.$tag';
}

String _fullBio(NgmyPromoteProfile p) {
  final buf = StringBuffer(_shortBio(p));
  if (p.bio.trim().isNotEmpty) buf.write('\n\n${p.bio.trim()}');
  final extras = <String>[
    if (p.website.trim().isNotEmpty) 'Website: ${p.website.trim()}',
    if (p.links.trim().isNotEmpty)
      ...p.links
          .trim()
          .split('\n')
          .map((l) => l.trim())
          .where((l) => l.isNotEmpty),
  ];
  if (extras.isNotEmpty) buf.write('\n\n${extras.join(' · ')}');
  return buf.toString();
}

String _factSheet(NgmyPromoteProfile p) {
  final rows = <String>[
    'Name: ${p.name.trim()}',
    if (p.role.trim().isNotEmpty) 'What they do: ${p.role.trim()}',
    if (p.location.trim().isNotEmpty) 'Location: ${p.location.trim()}',
    if (p.website.trim().isNotEmpty) 'Website: ${p.website.trim()}',
    if (p.links.trim().isNotEmpty)
      ...p.links
          .trim()
          .split('\n')
          .map((l) => 'Link: ${l.trim()}')
          .where((l) => l != 'Link:'),
    if (p.bio.trim().isNotEmpty) 'About: ${p.bio.trim()}',
  ];
  return rows.join('\n');
}

String _aiIntro(NgmyPromoteProfile p) {
  return "Please remember this about me so you can answer questions about who I am: ${_fullBio(p)}\n\n"
      'Whenever I ask "who am I" or you need to describe me, use the details above.';
}

Future<void> showNgmyPromoteMeDialog(
  BuildContext context, {
  required String userEmail,
}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Promote Me',
    barrierColor: NgmyHubTheme.of(context).barrier,
    transitionDuration: const Duration(milliseconds: 300),
    pageBuilder: (ctx, a1, a2) => _PromoteMeScreen(userEmail: userEmail),
    transitionBuilder: (ctx, anim, a2, child) => FadeTransition(
      opacity: anim,
      child: ScaleTransition(
        scale: Tween<double>(
          begin: 0.96,
          end: 1,
        ).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)),
        child: child,
      ),
    ),
  );
}

class _PromoteMeScreen extends StatefulWidget {
  const _PromoteMeScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_PromoteMeScreen> createState() => _PromoteMeScreenState();
}

class _PromoteMeScreenState extends State<_PromoteMeScreen> {
  static const _accent1 = Color(0xFF06B6D4);
  static const _accent2 = Color(0xFF6366F1);

  bool _loading = true;
  bool _editing = false;
  late NgmyPromoteProfile _profile;

  final _name = TextEditingController();
  final _role = TextEditingController();
  final _tagline = TextEditingController();
  final _bio = TextEditingController();
  final _location = TextEditingController();
  final _website = TextEditingController();
  final _links = TextEditingController();

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final p = await _loadProfile(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _profile = p;
      _name.text = p.name;
      _role.text = p.role;
      _tagline.text = p.tagline;
      _bio.text = p.bio;
      _location.text = p.location;
      _website.text = p.website;
      _links.text = p.links;
      _loading = false;
      _editing = !p.isFilled;
    });
  }

  Future<void> _save() async {
    final p = NgmyPromoteProfile(
      name: _name.text,
      role: _role.text,
      tagline: _tagline.text,
      bio: _bio.text,
      location: _location.text,
      website: _website.text,
      links: _links.text,
    );
    if (p.name.trim().isEmpty) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('Add your name first')));
      return;
    }
    await _saveProfile(widget.userEmail, p);
    if (!mounted) return;
    setState(() {
      _profile = p;
      _editing = false;
    });
    HapticFeedback.mediumImpact();
  }

  Future<void> _copy(String text, String label) async {
    await Clipboard.setData(ClipboardData(text: text));
    if (!mounted) return;
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(SnackBar(content: Text('$label copied')));
    HapticFeedback.selectionClick();
  }

  @override
  Widget build(BuildContext context) {
    final hub = NgmyHubTheme.of(context);
    final pad = MediaQuery.paddingOf(context);
    return Material(
      color: hub.scaffold,
      child: SafeArea(
        child: _loading
            ? const Center(child: CircularProgressIndicator(color: _accent1))
            : Padding(
                padding: EdgeInsets.fromLTRB(16, 10, 16, pad.bottom + 10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _header(hub),
                    const SizedBox(height: 14),
                    Expanded(
                      child: SingleChildScrollView(
                        child: _editing ? _editorForm(hub) : _promoView(hub),
                      ),
                    ),
                  ],
                ),
              ),
      ),
    );
  }

  Widget _header(NgmyHubTheme hub) {
    return Row(
      children: [
        Container(
          width: 42,
          height: 42,
          decoration: BoxDecoration(
            gradient: const LinearGradient(colors: [_accent1, _accent2]),
            borderRadius: BorderRadius.circular(14),
            boxShadow: [
              BoxShadow(
                color: _accent2.withValues(alpha: 0.35),
                blurRadius: 14,
                offset: const Offset(0, 5),
              ),
            ],
          ),
          child: const Center(
            child: Text('📣', style: TextStyle(fontSize: 20)),
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Promote Me',
                style: TextStyle(
                  color: hub.title,
                  fontWeight: FontWeight.w900,
                  fontSize: 20,
                ),
              ),
              Text(
                'Your ready-to-share bio',
                style: TextStyle(
                  color: hub.subtitle,
                  fontSize: 12,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ),
        ),
        if (!_editing)
          IconButton(
            onPressed: () => setState(() => _editing = true),
            icon: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: hub.iconButtonBg,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: hub.border),
              ),
              child: Icon(
                Icons.edit_rounded,
                color: hub.iconButtonIcon,
                size: 18,
              ),
            ),
          ),
        IconButton(
          onPressed: () => Navigator.pop(context),
          icon: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: hub.iconButtonBg,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: hub.border),
            ),
            child: Icon(
              Icons.close_rounded,
              color: hub.iconButtonIcon,
              size: 18,
            ),
          ),
        ),
      ],
    );
  }

  Widget _explainer(NgmyHubTheme hub) {
    return Container(
      padding: const EdgeInsets.all(14),
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        color: _accent1.withValues(alpha: hub.isDark ? 0.12 : 0.08),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _accent1.withValues(alpha: 0.3)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('💡', style: TextStyle(fontSize: 18)),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              'NGMY can\'t reach into Google or Gemini and edit what they know — nobody can. '
              'What actually works is posting the same accurate bio everywhere: your website, socials, '
              'Google Business listing, and pasted straight into an AI chat. Fill this in once, then copy '
              'the version you need below.',
              style: TextStyle(
                color: hub.subtitle,
                fontSize: 12,
                height: 1.4,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _editorForm(NgmyHubTheme hub) {
    InputDecoration dec(String label, {String? hint}) => InputDecoration(
      labelText: label,
      hintText: hint,
      labelStyle: TextStyle(color: hub.subtitle),
      filled: true,
      fillColor: hub.inputFill,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: hub.inputBorder),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(14),
        borderSide: BorderSide(color: hub.inputBorder),
      ),
    );
    TextStyle style() =>
        TextStyle(color: hub.title, fontWeight: FontWeight.w500);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _explainer(hub),
        TextField(
          controller: _name,
          style: style(),
          decoration: dec('Your name'),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: _role,
          style: style(),
          decoration: dec(
            'What you do',
            hint: 'e.g. Real estate agent, musician, coach',
          ),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: _tagline,
          style: style(),
          decoration: dec(
            'One-line tagline',
            hint: 'e.g. Helping families find their first home',
          ),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: _location,
          style: style(),
          decoration: dec('Location', hint: 'City, state/country'),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: _website,
          style: style(),
          decoration: dec('Website (optional)'),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: _links,
          style: style(),
          maxLines: 3,
          decoration: dec(
            'Social links (one per line)',
            hint: 'Instagram, LinkedIn, TikTok…',
          ),
        ),
        const SizedBox(height: 10),
        TextField(
          controller: _bio,
          style: style(),
          maxLines: 6,
          decoration: dec(
            'About you',
            hint: 'A few sentences — achievements, story, what makes you, you',
          ),
        ),
        const SizedBox(height: 16),
        SizedBox(
          width: double.infinity,
          child: FilledButton(
            onPressed: _save,
            style: FilledButton.styleFrom(
              backgroundColor: _accent2,
              padding: const EdgeInsets.symmetric(vertical: 14),
            ),
            child: const Text(
              'Save profile',
              style: TextStyle(fontWeight: FontWeight.w800),
            ),
          ),
        ),
      ],
    );
  }

  Widget _promoView(NgmyHubTheme hub) {
    final p = _profile;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _explainer(hub),
        _bioCard(hub, emoji: '⚡', title: 'One-liner', text: _oneLiner(p)),
        const SizedBox(height: 10),
        _bioCard(hub, emoji: '📝', title: 'Short bio', text: _shortBio(p)),
        const SizedBox(height: 10),
        _bioCard(hub, emoji: '📖', title: 'Full bio', text: _fullBio(p)),
        const SizedBox(height: 10),
        _bioCard(hub, emoji: '📇', title: 'Fact sheet', text: _factSheet(p)),
        const SizedBox(height: 10),
        _bioCard(
          hub,
          emoji: '🤖',
          title: 'Paste into an AI chat',
          text: _aiIntro(p),
        ),
      ],
    );
  }

  Widget _bioCard(
    NgmyHubTheme hub, {
    required String emoji,
    required String title,
    required String text,
  }) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: hub.surface,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: hub.border),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(emoji, style: const TextStyle(fontSize: 16)),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  title,
                  style: TextStyle(
                    color: hub.title,
                    fontWeight: FontWeight.w800,
                    fontSize: 13,
                  ),
                ),
              ),
              IconButton(
                visualDensity: VisualDensity.compact,
                onPressed: () => _copy(text, title),
                icon: Icon(
                  Icons.copy_rounded,
                  size: 17,
                  color: hub.iconButtonIcon,
                ),
              ),
              IconButton(
                visualDensity: VisualDensity.compact,
                onPressed: () => Share.share(text, subject: title),
                icon: Icon(
                  Icons.ios_share_rounded,
                  size: 17,
                  color: hub.iconButtonIcon,
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            text,
            style: TextStyle(
              color: hub.subtitle,
              fontSize: 12.5,
              height: 1.4,
              fontWeight: FontWeight.w600,
            ),
          ),
        ],
      ),
    );
  }
}
