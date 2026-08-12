import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_business_card_storage.dart';
import 'ngmy_civic_voting.dart';
import 'ngmy_home_vote_ad_card.dart';
import 'ngmy_home_vote_ads.dart';
import 'ngmy_hub_form_ui.dart';

/// Full admin studio for home-deck voting advertisements.
class NgmyHomeVoteAdStudioPanel extends StatefulWidget {
  const NgmyHomeVoteAdStudioPanel({super.key, required this.userEmail});

  final String userEmail;

  @override
  State<NgmyHomeVoteAdStudioPanel> createState() => _NgmyHomeVoteAdStudioPanelState();
}

class _NgmyHomeVoteAdStudioPanelState extends State<NgmyHomeVoteAdStudioPanel> {
  List<NgmyCivicVotingCandidate> _candidates = [];
  NgmyHomeVoteAdCampaign _draft = NgmyHomeVoteAdCampaign();
  NgmyHomeVoteAdCampaign _live = NgmyHomeVoteAdCampaign();
  bool _busy = false;
  bool _loaded = false;

  final _nameC = TextEditingController();
  final _headlineC = TextEditingController();
  final _supportC = TextEditingController();
  final _ctaC = TextEditingController();
  final _marqueeC = TextEditingController();

  static const _accents = <Color>[
    Color(0xFFFACC15),
    Color(0xFFEF4444),
    Color(0xFF22D3EE),
    Color(0xFFF97316),
    Color(0xFFD4AF37),
    Color(0xFFA78BFA),
    Color(0xFFE879F9),
    Color(0xFF34D399),
    Color(0xFFE2E8F0),
    Color(0xFF60A5FA),
  ];

  @override
  void initState() {
    super.initState();
    unawaited(_bootstrap());
  }

  @override
  void dispose() {
    _nameC.dispose();
    _headlineC.dispose();
    _supportC.dispose();
    _ctaC.dispose();
    _marqueeC.dispose();
    super.dispose();
  }

  Future<void> _bootstrap() async {
    final voting = await NgmyCivicVotingStore.load(forceCloud: true);
    final ad = await NgmyHomeVoteAdStore.load(forceCloud: true);
    final candidates = <NgmyCivicVotingCandidate>[];
    final seen = <String>{};
    for (final poll in voting.allPolls) {
      for (final c in poll.candidates) {
        final id = c.id.trim();
        if (id.isEmpty || !seen.add(id)) continue;
        candidates.add(c);
      }
    }
    if (!mounted) return;
    setState(() {
      _candidates = candidates;
      _live = ad;
      _draft = ad.isLive
          ? ad
          : NgmyHomeVoteAdCampaign(
              headline: 'VOTE NOW',
              supportLine: 'Your voice. Your community. Your choice.',
              ctaText: 'CAST YOUR BALLOT',
              marqueeText: 'VOTE · SUPPORT THIS CANDIDATE · MAKE YOUR VOICE COUNT · CIVIC REGISTRY VOTING ·',
              slideStyle: 'cinematic',
            );
      _syncFieldsFromDraft();
      _loaded = true;
    });
  }

  void _syncFieldsFromDraft() {
    _nameC.text = _draft.candidateName;
    _headlineC.text = _draft.headline;
    _supportC.text = _draft.supportLine;
    _ctaC.text = _draft.ctaText;
    _marqueeC.text = _draft.marqueeText;
  }

  void _applyFieldsToDraft() {
    _draft = _draft.copyWith(
      candidateName: _nameC.text.trim(),
      headline: _headlineC.text.trim(),
      supportLine: _supportC.text.trim(),
      ctaText: _ctaC.text.trim(),
      marqueeText: _marqueeC.text.trim(),
      bioNote: _supportC.text.trim(),
    );
  }

  void _pickCandidate(NgmyCivicVotingCandidate c) {
    setState(() {
      _draft = _draft.copyWith(
        candidateId: c.id,
        candidateName: c.name.toUpperCase(),
        photoUrl: c.photoUrl,
        // Keep custom background if admin already set one.
        backgroundUrl: _draft.backgroundUrl.trim().isNotEmpty ? _draft.backgroundUrl : c.photoUrl,
        bioNote: c.bioNote.trim().isEmpty ? _draft.bioNote : c.bioNote.trim(),
        supportLine: c.bioNote.trim().isEmpty
            ? (_draft.supportLine.trim().isEmpty ? 'Vote for ${c.name}. Make your voice count.' : _draft.supportLine)
            : c.bioNote.trim(),
        headline: _draft.headline.trim().isEmpty ? 'VOTE NOW' : _draft.headline,
        ctaText: _draft.ctaText.trim().isEmpty ? 'CAST YOUR BALLOT' : _draft.ctaText,
        marqueeText: _draft.marqueeText.trim().isEmpty
            ? 'VOTE FOR ${c.name.toUpperCase()} · CAST YOUR BALLOT · CIVIC REGISTRY VOTING ·'
            : _draft.marqueeText,
      );
      _syncFieldsFromDraft();
    });
  }

  Future<void> _pickBackground() async {
    try {
      final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1600, maxHeight: 1600, imageQuality: 88);
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (bytes.isEmpty) return;
      final dataUrl = 'data:image/jpeg;base64,${base64Encode(bytes)}';
      setState(() => _draft = _draft.copyWith(backgroundUrl: dataUrl));
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not load background: $e')));
    }
  }

  Future<void> _pickCirclePhoto() async {
    try {
      final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 900, maxHeight: 900, imageQuality: 90);
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (bytes.isEmpty) return;
      final dataUrl = 'data:image/jpeg;base64,${base64Encode(bytes)}';
      setState(() => _draft = _draft.copyWith(photoUrl: dataUrl));
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not load photo: $e')));
    }
  }

  Future<void> _publish() async {
    _applyFieldsToDraft();
    if (_draft.candidateName.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Pick a candidate or type a name first.')));
      return;
    }
    final days = await showModalBottomSheet<int>(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        final isDark = Theme.of(ctx).brightness == Brightness.dark;
        final bg = isDark ? const Color(0xFF1E1E1E) : Colors.white;
        return SafeArea(
          child: Container(
            margin: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(18)),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Padding(
                  padding: EdgeInsets.fromLTRB(16, 16, 16, 8),
                  child: Text('How long should this ad run?', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
                ),
                ...kNgmyHomeVoteAdDurations.map(
                  (d) => ListTile(
                    title: Text(d.$2, style: const TextStyle(fontWeight: FontWeight.w700)),
                    onTap: () => Navigator.pop(ctx, d.$1),
                  ),
                ),
                const SizedBox(height: 8),
              ],
            ),
          ),
        );
      },
    );
    if (days == null || !mounted) return;
    setState(() => _busy = true);
    final ok = await NgmyHomeVoteAdStore.publish(
      draft: _draft,
      durationDays: days,
      publishedBy: widget.userEmail,
    );
    final ad = await NgmyHomeVoteAdStore.load();
    if (!mounted) return;
    setState(() {
      _live = ad;
      _draft = ad;
      _syncFieldsFromDraft();
      _busy = false;
    });
    ngmyBumpHomeCardsRevision();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(ok ? 'Ad published to everyone’s home cards.' : 'Saved on this device — will sync when online.'),
        backgroundColor: ok ? Colors.green : Colors.orange,
      ),
    );
  }

  Future<void> _remove() async {
    setState(() => _busy = true);
    final ok = await NgmyHomeVoteAdStore.remove(publishedBy: widget.userEmail);
    final ad = await NgmyHomeVoteAdStore.load();
    if (!mounted) return;
    setState(() {
      _live = ad;
      _busy = false;
    });
    ngmyBumpHomeCardsRevision();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(ok ? 'Home ad removed.' : 'Removed on this device — will sync when online.'),
        backgroundColor: ok ? Colors.green : Colors.orange,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    if (!_loaded) {
      return const Padding(
        padding: EdgeInsets.all(24),
        child: Center(child: CircularProgressIndicator()),
      );
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text('Voting Ad Studio', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 16)),
        const SizedBox(height: 4),
        Text(
          'Same size as home cards. Edit slides, copy, and photos — then publish.',
          style: TextStyle(color: t.chipOffLabel, fontSize: 12, fontWeight: FontWeight.w600),
        ),
        const SizedBox(height: 12),

        // Exact home card height preview
        Text('Preview (home card size)', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
        const SizedBox(height: 8),
        NgmyHomeVoteAdCard(
          campaign: _draft.copyWith(
            candidateName: _nameC.text.trim().isEmpty ? _draft.candidateName : _nameC.text.trim(),
            headline: _headlineC.text.trim().isEmpty ? _draft.headline : _headlineC.text.trim(),
            supportLine: _supportC.text.trim().isEmpty ? _draft.supportLine : _supportC.text.trim(),
            ctaText: _ctaC.text.trim().isEmpty ? _draft.ctaText : _ctaC.text.trim(),
            marqueeText: _marqueeC.text.trim().isEmpty ? _draft.marqueeText : _marqueeC.text.trim(),
          ),
          isDark: t.isDark,
          forceHeight: kNgmyHomeVoteAdCardHeight,
        ),
        const SizedBox(height: 14),

        Text('Candidates', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
        const SizedBox(height: 8),
        if (_candidates.isEmpty)
          Text('No voting candidates yet. Add them in Civic Voting.', style: TextStyle(color: t.chipOffLabel, fontSize: 12))
        else
          SizedBox(
            height: 74,
            child: ListView.separated(
              scrollDirection: Axis.horizontal,
              itemCount: _candidates.length,
              separatorBuilder: (_, __) => const SizedBox(width: 8),
              itemBuilder: (_, i) {
                final c = _candidates[i];
                final on = _draft.candidateId == c.id;
                final photo = ngmyCivicVotingPhotoProvider(c.photoUrl);
                return GestureDetector(
                  onTap: () => _pickCandidate(c),
                  child: Container(
                    width: 148,
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      color: t.panel,
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: on ? const Color(0xFFFACC15) : t.chipOffBorder, width: on ? 2 : 1),
                    ),
                    child: Row(
                      children: [
                        CircleAvatar(
                          radius: 20,
                          backgroundImage: photo,
                          child: photo == null ? Text(c.name.isNotEmpty ? c.name[0] : '?') : null,
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(c.name, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 11)),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
        const SizedBox(height: 14),

        Text('Slide styles', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
        const SizedBox(height: 8),
        SizedBox(
          height: 40,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: kNgmyVoteAdSlideStyles.length,
            separatorBuilder: (_, __) => const SizedBox(width: 6),
            itemBuilder: (_, i) {
              final s = kNgmyVoteAdSlideStyles[i];
              final on = _draft.slideStyle == s.id;
              return FilterChip(
                avatar: Icon(s.icon, size: 16, color: on ? Colors.black : s.accent),
                label: Text(s.label, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 11, color: on ? Colors.black : t.chipOffLabel)),
                selected: on,
                onSelected: (_) => setState(() => _draft = _draft.copyWith(slideStyle: s.id, accentArgb: s.accent.toARGB32())),
                selectedColor: s.accent,
                backgroundColor: t.chipOffBg,
                side: BorderSide(color: on ? s.accent : t.chipOffBorder),
                visualDensity: VisualDensity.compact,
              );
            },
          ),
        ),
        const SizedBox(height: 14),

        Text('Photos', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(
              child: OutlinedButton.icon(
                onPressed: _pickBackground,
                icon: const Icon(Icons.wallpaper_rounded, size: 18),
                label: const Text('Change background'),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: OutlinedButton.icon(
                onPressed: _pickCirclePhoto,
                icon: const Icon(Icons.account_circle_rounded, size: 18),
                label: const Text('Change circle'),
              ),
            ),
          ],
        ),
        const SizedBox(height: 8),
        Wrap(
          spacing: 8,
          runSpacing: 4,
          children: [
            FilterChip(
              label: const Text('Show circle photo'),
              selected: _draft.showCirclePhoto,
              onSelected: (v) => setState(() => _draft = _draft.copyWith(showCirclePhoto: v)),
            ),
            FilterChip(
              label: const Text('Running ticker'),
              selected: _draft.showMarquee,
              onSelected: (v) => setState(() => _draft = _draft.copyWith(showMarquee: v)),
            ),
            if (_draft.backgroundUrl.trim().isNotEmpty)
              ActionChip(
                label: const Text('Clear background'),
                onPressed: () => setState(() => _draft = _draft.copyWith(backgroundUrl: '')),
              ),
          ],
        ),
        const SizedBox(height: 14),

        Text('Accent color', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
        const SizedBox(height: 8),
        SizedBox(
          height: 34,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: _accents.length,
            separatorBuilder: (_, __) => const SizedBox(width: 8),
            itemBuilder: (_, i) {
              final c = _accents[i];
              final on = _draft.accentArgb == c.toARGB32();
              return GestureDetector(
                onTap: () => setState(() => _draft = _draft.copyWith(accentArgb: c.toARGB32())),
                child: Container(
                  width: 28,
                  height: 28,
                  decoration: BoxDecoration(
                    color: c,
                    shape: BoxShape.circle,
                    border: Border.all(color: on ? Colors.white : Colors.white24, width: on ? 3 : 1),
                  ),
                ),
              );
            },
          ),
        ),
        const SizedBox(height: 14),

        Text('Ad copy', style: TextStyle(color: t.title, fontWeight: FontWeight.w800, fontSize: 12)),
        const SizedBox(height: 8),
        _field(t, 'Candidate name', _nameC, onChanged: (_) => setState(() {})),
        _field(t, 'Headline / badge', _headlineC, onChanged: (_) => setState(() {})),
        _field(t, 'Support line (vote for…)', _supportC, onChanged: (_) => setState(() {}), maxLines: 2),
        _field(t, 'Call to action', _ctaC, onChanged: (_) => setState(() {})),
        _field(t, 'Running ticker text', _marqueeC, onChanged: (_) => setState(() {}), maxLines: 2),
        const SizedBox(height: 6),
        Wrap(
          spacing: 6,
          children: [
            ActionChip(
              label: const Text('Vote for name'),
              onPressed: () {
                final n = _nameC.text.trim().isEmpty ? 'THIS CANDIDATE' : _nameC.text.trim();
                setState(() {
                  _supportC.text = 'Vote for $n. Make your voice count.';
                  _marqueeC.text = 'VOTE FOR ${n.toUpperCase()} · CAST YOUR BALLOT · CIVIC REGISTRY VOTING ·';
                });
              },
            ),
            ActionChip(
              label: const Text('Community voice'),
              onPressed: () {
                setState(() {
                  _headlineC.text = 'YOUR VOTE';
                  _supportC.text = 'Stand with your community. Every ballot matters.';
                  _ctaC.text = 'VOTE TODAY';
                });
              },
            ),
            ActionChip(
              label: const Text('Billboard punch'),
              onPressed: () {
                setState(() {
                  _draft = _draft.copyWith(slideStyle: 'billboard', accentArgb: const Color(0xFFEF4444).toARGB32());
                  _headlineC.text = 'VOTE';
                  _ctaC.text = 'NOW';
                });
              },
            ),
          ],
        ),
        const SizedBox(height: 16),

        if (_live.isLive) ...[
          Text(
            'Live now · ${_live.candidateName}${_live.endsAt.length >= 10 ? ' · until ${_live.endsAt.substring(0, 10)}' : ''}',
            style: TextStyle(color: t.chipOffLabel, fontWeight: FontWeight.w700, fontSize: 11),
          ),
          const SizedBox(height: 8),
        ],
        Row(
          children: [
            Expanded(
              child: FilledButton.icon(
                onPressed: _busy ? null : _publish,
                icon: const Icon(Icons.campaign_rounded),
                label: Text(_live.isLive ? 'Replace home ad' : 'Put on home cards'),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF2563EB), foregroundColor: Colors.white, minimumSize: const Size(0, 48)),
              ),
            ),
            if (_live.isLive) ...[
              const SizedBox(width: 8),
              OutlinedButton(
                onPressed: _busy ? null : _remove,
                child: const Text('Remove'),
              ),
            ],
          ],
        ),
      ],
    );
  }

  Widget _field(NgmyHubTheme t, String label, TextEditingController c, {int maxLines = 1, ValueChanged<String>? onChanged}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: TextField(
        controller: c,
        maxLines: maxLines,
        onChanged: onChanged,
        style: TextStyle(color: t.title, fontWeight: FontWeight.w600, fontSize: 13),
        decoration: InputDecoration(
          labelText: label,
          filled: true,
          fillColor: t.fieldFill,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
        ),
      ),
    );
  }
}
