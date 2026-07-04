import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_legal_content.dart';

/// Parsed section from a legal document.
class NgmyLegalSection {
  const NgmyLegalSection({required this.title, required this.body});

  final String title;
  final String body;
}

List<NgmyLegalSection> parseNgmyLegalSections(String raw) {
  final lines = raw.trim().split('\n');
  if (lines.isEmpty) return [];

  final sections = <NgmyLegalSection>[];
  String? introTitle;
  final introLines = <String>[];
  String? currentTitle;
  final currentLines = <String>[];

  void flushCurrent() {
    if (currentTitle == null) return;
    sections.add(NgmyLegalSection(title: currentTitle!, body: currentLines.join('\n').trim()));
    currentTitle = null;
    currentLines.clear();
  }

  void flushIntro() {
    if (introTitle == null && introLines.isEmpty) return;
    sections.add(NgmyLegalSection(
      title: introTitle ?? 'Overview',
      body: introLines.join('\n').trim(),
    ));
    introTitle = null;
    introLines.clear();
  }

  final sectionRe = RegExp(r'^(\d+)\.\s+(.+)$');

  for (final line in lines) {
    final trimmed = line.trim();
    if (trimmed.isEmpty) continue;

    final match = sectionRe.firstMatch(trimmed);
    if (match != null) {
      if (currentTitle == null && introLines.isNotEmpty) {
        flushIntro();
      } else {
        flushCurrent();
      }
      currentTitle = '${match.group(1)}. ${match.group(2)}';
      continue;
    }

    if (currentTitle != null) {
      currentLines.add(trimmed);
    } else if (introTitle == null && !trimmed.startsWith('Effective Date:')) {
      introTitle = trimmed;
    } else {
      introLines.add(trimmed);
    }
  }

  if (currentTitle != null) {
    flushCurrent();
  } else if (introLines.isNotEmpty || introTitle != null) {
    flushIntro();
  }

  return sections.where((s) => s.title.isNotEmpty || s.body.isNotEmpty).toList();
}

String _phoneTelUri(String phone) {
  final digits = phone.replaceAll(RegExp(r'[^\d+]'), '');
  if (digits.startsWith('+')) return 'tel:$digits';
  if (digits.length == 10) return 'tel:+1$digits';
  return 'tel:$digits';
}

Future<void> _openUri(Uri uri) async {
  if (!await canLaunchUrl(uri)) return;
  await launchUrl(uri, mode: LaunchMode.externalApplication);
}

Future<void> _copyText(BuildContext context, String text, String label) async {
  await Clipboard.setData(ClipboardData(text: text));
  if (!context.mounted) return;
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text('$label copied'), duration: const Duration(seconds: 2)),
  );
}

/// Email or phone row with tap-to-action and copy.
class NgmyLegalContactRow extends StatelessWidget {
  const NgmyLegalContactRow({
    super.key,
    required this.icon,
    required this.label,
    required this.value,
    required this.isEmail,
    required this.isDark,
    required this.accent,
  });

  final IconData icon;
  final String label;
  final String value;
  final bool isEmail;
  final bool isDark;
  final Color accent;

  @override
  Widget build(BuildContext context) {
    final onTap = isEmail
        ? () => _openUri(Uri(scheme: 'mailto', path: value))
        : () => _openUri(Uri.parse(_phoneTelUri(value)));

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 4),
          child: Row(
            children: [
              Icon(icon, size: 18, color: accent),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      label,
                      style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
                    ),
                    Text(
                      value,
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w700,
                        color: accent,
                        decoration: TextDecoration.underline,
                        decorationColor: accent.withValues(alpha: 0.5),
                      ),
                    ),
                  ],
                ),
              ),
              IconButton(
                tooltip: 'Copy',
                visualDensity: VisualDensity.compact,
                padding: EdgeInsets.zero,
                constraints: const BoxConstraints(minWidth: 32, minHeight: 32),
                onPressed: () => _copyText(context, value, label),
                icon: Icon(Icons.copy_rounded, size: 16, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

Widget ngmyLegalLinkifiedText(String text, bool isDark, Color accent) {
  final spans = <InlineSpan>[];
  final emailRe = RegExp(RegExp.escape(kNgmyLegalEmail));
  final phoneRe = RegExp(RegExp.escape(kNgmyLegalPhone));
  var i = 0;
  while (i < text.length) {
    final emailMatch = emailRe.matchAsPrefix(text, i);
    final phoneMatch = phoneRe.matchAsPrefix(text, i);
    if (emailMatch != null) {
      final v = emailMatch.group(0)!;
      spans.add(WidgetSpan(
        alignment: PlaceholderAlignment.baseline,
        baseline: TextBaseline.alphabetic,
        child: GestureDetector(
          onTap: () => _openUri(Uri(scheme: 'mailto', path: v)),
          child: Text(v, style: TextStyle(color: accent, fontWeight: FontWeight.w700, decoration: TextDecoration.underline)),
        ),
      ));
      i += v.length;
      continue;
    }
    if (phoneMatch != null) {
      final v = phoneMatch.group(0)!;
      spans.add(WidgetSpan(
        alignment: PlaceholderAlignment.baseline,
        baseline: TextBaseline.alphabetic,
        child: GestureDetector(
          onTap: () => _openUri(Uri.parse(_phoneTelUri(v))),
          child: Text(v, style: TextStyle(color: accent, fontWeight: FontWeight.w700, decoration: TextDecoration.underline)),
        ),
      ));
      i += v.length;
      continue;
    }
    final nextEmail = text.indexOf(kNgmyLegalEmail, i);
    final nextPhone = text.indexOf(kNgmyLegalPhone, i);
    int next = -1;
    if (nextEmail >= 0) next = nextEmail;
    if (nextPhone >= 0 && (next < 0 || nextPhone < next)) next = nextPhone;
    if (next < 0) {
      spans.add(TextSpan(
        text: text.substring(i),
        style: TextStyle(fontSize: 13.5, height: 1.62, color: isDark ? Colors.white.withValues(alpha: 0.82) : const Color(0xFF475569)),
      ));
      break;
    }
    if (next > i) {
      spans.add(TextSpan(
        text: text.substring(i, next),
        style: TextStyle(fontSize: 13.5, height: 1.62, color: isDark ? Colors.white.withValues(alpha: 0.82) : const Color(0xFF475569)),
      ));
    }
    i = next;
  }
  return RichText(text: TextSpan(children: spans));
}

/// Opens a redesigned full-screen legal document viewer.
Future<void> showNgmyLegalDocument(
  BuildContext context, {
  required String title,
  String? body,
}) {
  final content = (body ?? '').trim().isEmpty
      ? (title.toLowerCase().contains('privacy') ? kNgmyPrivacyPolicy : kNgmyTermsAndConditions)
      : body!.trim();

  return Navigator.of(context).push<void>(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmyLegalDocumentPage(title: title, body: content),
    ),
  );
}

class NgmyLegalDocumentPage extends StatelessWidget {
  const NgmyLegalDocumentPage({super.key, required this.title, required this.body});

  final String title;
  final String body;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final isPrivacy = title.toLowerCase().contains('privacy');
    final accent = isPrivacy ? const Color(0xFF7C3AED) : const Color(0xFF059669);
    final bg = isDark ? const Color(0xFF0B1018) : const Color(0xFFF4F7FB);
    final sections = parseNgmyLegalSections(body);

    return Scaffold(
      backgroundColor: bg,
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            pinned: true,
            expandedHeight: 148,
            backgroundColor: accent,
            foregroundColor: Colors.white,
            leading: IconButton(
              icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 18),
              onPressed: () => Navigator.pop(context),
            ),
            flexibleSpace: FlexibleSpaceBar(
              titlePadding: const EdgeInsets.fromLTRB(56, 0, 16, 16),
              title: Text(
                title,
                style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: Colors.white),
              ),
              background: Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [accent, accent.withValues(alpha: 0.82)],
                  ),
                ),
                child: Stack(
                  children: [
                    Positioned(
                      right: -20,
                      top: -10,
                      child: Icon(
                        isPrivacy ? Icons.privacy_tip_rounded : Icons.gavel_rounded,
                        size: 120,
                        color: Colors.white.withValues(alpha: 0.12),
                      ),
                    ),
                    Positioned(
                      left: 20,
                      bottom: 52,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.18),
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.35)),
                        ),
                        child: Text(
                          'Effective $kNgmyLegalEffectiveDate',
                          style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 28),
            sliver: SliverList(
              delegate: SliverChildBuilderDelegate(
                (context, index) {
                  if (index == sections.length) {
                    return _contactFooter(context, isDark, accent);
                  }
                  final section = sections[index];
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: _sectionCard(section, isDark, accent),
                  );
                },
                childCount: sections.length + 1,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _sectionCard(NgmyLegalSection section, bool isDark, Color accent) {
    final card = isDark ? const Color(0xFF141C2B) : Colors.white;
    final border = isDark ? Colors.white12 : const Color(0xFFE2E8F0);
    final isContact = section.title.toLowerCase().contains('contact');
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
      decoration: BoxDecoration(
        color: card,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: border),
        boxShadow: [
          if (!isDark)
            BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 10, offset: const Offset(0, 4)),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 4,
                height: 36,
                decoration: BoxDecoration(color: accent, borderRadius: BorderRadius.circular(4)),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Text(
                  section.title,
                  style: TextStyle(
                    fontWeight: FontWeight.w900,
                    fontSize: 14,
                    height: 1.3,
                    color: isDark ? Colors.white : const Color(0xFF0F172A),
                  ),
                ),
              ),
            ],
          ),
          if (section.body.isNotEmpty) ...[
            const SizedBox(height: 10),
            if (isContact)
              Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  ngmyLegalLinkifiedText(section.body, isDark, accent),
                  const SizedBox(height: 8),
                  NgmyLegalContactRow(
                    icon: Icons.email_outlined,
                    label: 'Email',
                    value: kNgmyLegalEmail,
                    isEmail: true,
                    isDark: isDark,
                    accent: accent,
                  ),
                  NgmyLegalContactRow(
                    icon: Icons.phone_outlined,
                    label: 'Phone',
                    value: kNgmyLegalPhone,
                    isEmail: false,
                    isDark: isDark,
                    accent: accent,
                  ),
                ],
              )
            else
              ngmyLegalLinkifiedText(section.body, isDark, accent),
          ],
        ],
      ),
    );
  }

  Widget _contactFooter(BuildContext context, bool isDark, Color accent) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: accent.withValues(alpha: isDark ? 0.14 : 0.08),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: accent.withValues(alpha: 0.35)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Contact NGMY',
            style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : const Color(0xFF0F172A)),
          ),
          const SizedBox(height: 4),
          Text(
            'Tap to email or call. Use the copy icon to save contact details.',
            style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
          ),
          const SizedBox(height: 8),
          NgmyLegalContactRow(
            icon: Icons.email_outlined,
            label: 'Email',
            value: kNgmyLegalEmail,
            isEmail: true,
            isDark: isDark,
            accent: accent,
          ),
          NgmyLegalContactRow(
            icon: Icons.phone_outlined,
            label: 'Phone',
            value: kNgmyLegalPhone,
            isEmail: false,
            isDark: isDark,
            accent: accent,
          ),
        ],
      ),
    );
  }
}

/// Compact Terms / Privacy links for login and other screens.
class NgmyLegalFooterLinks extends StatelessWidget {
  const NgmyLegalFooterLinks({super.key, this.termsBody, this.privacyBody});

  final String? termsBody;
  final String? privacyBody;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final linkColor = isDark ? const Color(0xFF93C5FD) : const Color(0xFF6200EE);

    return Padding(
      padding: const EdgeInsets.only(top: 8),
      child: Wrap(
        alignment: WrapAlignment.center,
        crossAxisAlignment: WrapCrossAlignment.center,
        children: [
          TextButton(
            onPressed: () => showNgmyLegalDocument(
              context,
              title: 'Terms & Conditions',
              body: termsBody ?? kNgmyTermsAndConditions,
            ),
            style: TextButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              minimumSize: Size.zero,
              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
            ),
            child: Text('Terms & Conditions', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: linkColor)),
          ),
          Text('·', style: TextStyle(color: isDark ? Colors.white38 : Colors.grey, fontSize: 12)),
          TextButton(
            onPressed: () => showNgmyLegalDocument(
              context,
              title: 'Privacy Policy',
              body: privacyBody ?? kNgmyPrivacyPolicy,
            ),
            style: TextButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              minimumSize: Size.zero,
              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
            ),
            child: Text('Privacy Policy', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: linkColor)),
          ),
        ],
      ),
    );
  }
}
