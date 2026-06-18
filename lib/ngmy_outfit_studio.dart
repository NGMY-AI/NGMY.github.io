import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_video_studio_picker.dart';

const Color _accent = Color(0xFFEC4899);
const Color _accent2 = Color(0xFF7C3AED);

void showNgmyOutfitStudio({
  required BuildContext context,
  required Future<String> Function() resolveApiKey,
}) {
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmyOutfitStudioPage(resolveApiKey: resolveApiKey),
    ),
  );
}

class NgmyOutfitStudioPage extends StatefulWidget {
  const NgmyOutfitStudioPage({super.key, required this.resolveApiKey});

  final Future<String> Function() resolveApiKey;

  @override
  State<NgmyOutfitStudioPage> createState() => _NgmyOutfitStudioPageState();
}

class _NgmyOutfitStudioPageState extends State<NgmyOutfitStudioPage> {
  NgmyStudioLogoPick? _personPick;
  NgmyStudioLogoPick? _outfitPick;
  Uint8List? _resultBytes;
  bool _busy = false;
  String? _error;
  String? _status;
  final _styleNotesC = TextEditingController();

  Future<Uint8List?> _pickToBytes(NgmyStudioLogoPick? pick) async {
    if (pick == null) return null;
    if (pick.bytes != null && pick.bytes!.isNotEmpty) return pick.bytes;
    final path = pick.filePath;
    if (path != null && path.isNotEmpty && !kIsWeb) {
      return File(path).readAsBytes();
    }
    return null;
  }

  Future<void> _pickPerson() async {
    final pick = await pickNgmyStudioLogo();
    if (!mounted || pick == null) return;
    setState(() {
      _personPick = pick;
      _resultBytes = null;
      _error = null;
    });
  }

  Future<void> _pickOutfit() async {
    final pick = await pickNgmyStudioLogo();
    if (!mounted || pick == null) return;
    setState(() {
      _outfitPick = pick;
      _resultBytes = null;
      _error = null;
    });
  }

  Future<void> _generate() async {
    final personBytes = await _pickToBytes(_personPick);
    final outfitBytes = await _pickToBytes(_outfitPick);
    if (personBytes == null || personBytes.isEmpty) {
      setState(() => _error = 'Add a photo of the person first.');
      return;
    }
    if (outfitBytes == null || outfitBytes.isEmpty) {
      setState(() => _error = 'Add a photo of the outfit/dress first.');
      return;
    }

    setState(() {
      _busy = true;
      _error = null;
      _status = 'Connecting to NGMY AI…';
      _resultBytes = null;
    });

    try {
      final apiKey = await widget.resolveApiKey();
      if (!mounted) return;
      if (apiKey.trim().isEmpty) {
        setState(() {
          _busy = false;
          _error = 'NGMY AI key not loaded. Ask admin to save Gemini key in Management Menus → NGMY AI, then reload.';
        });
        return;
      }

      setState(() => _status = 'Dressing your photo — this can take up to a minute…');

      final result = await ngmyAiVirtualOutfitTryOn(
        apiKey: apiKey,
        personBytes: personBytes,
        outfitBytes: outfitBytes,
        styleNotes: _styleNotesC.text.trim(),
        onStatus: (s) {
          if (mounted) setState(() => _status = s);
        },
      );

      if (!mounted) return;
      if (result.bytes != null && result.bytes!.length > 2048) {
        setState(() {
          _resultBytes = result.bytes;
          _busy = false;
          _status = null;
        });
      } else {
        setState(() {
          _busy = false;
          _status = null;
          _error = result.error ?? 'Could not generate outfit image. Try clearer photos.';
        });
      }
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _busy = false;
        _status = null;
        _error = e.toString();
      });
    }
  }

  @override
  void dispose() {
    _styleNotesC.dispose();
    super.dispose();
  }

  Future<void> _download() async {
    final bytes = _resultBytes;
    if (bytes == null) return;
    final msg = await downloadNgmyQrImage(bytes, 'ngmy-outfit-${DateTime.now().millisecondsSinceEpoch}.png');
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B0F1A) : const Color(0xFFF8FAFC),
      appBar: AppBar(
        title: const Text('AI Outfit Studio', style: TextStyle(fontWeight: FontWeight.w900)),
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.close_rounded),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(20, 0, 20, 28),
          children: [
            _header(isDark),
            const SizedBox(height: 18),
            _pickCard(
              isDark: isDark,
              title: '1 · Your photo',
              subtitle: 'Full-body or upper-body photo of the person',
              icon: Icons.person_rounded,
              pick: _personPick,
              onTap: _busy ? null : _pickPerson,
            ),
            const SizedBox(height: 12),
            _pickCard(
              isDark: isDark,
              title: '2 · Outfit / dress',
              subtitle: 'Photo of the clothes they should wear',
              icon: Icons.checkroom_rounded,
              pick: _outfitPick,
              onTap: _busy ? null : _pickOutfit,
            ),
            const SizedBox(height: 12),
            Text(
              '3 · Style & scene (optional)',
              style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13, color: isDark ? Colors.white : const Color(0xFF0F172A)),
            ),
            const SizedBox(height: 8),
            TextField(
              controller: _styleNotesC,
              enabled: !_busy,
              maxLines: 4,
              textCapitalization: TextCapitalization.sentences,
              decoration: InputDecoration(
                hintText: 'e.g. Walking in a luxurious house, black aviator sunglasses, silver luxury watch, confident pose like a fashion lookbook…',
                hintStyle: TextStyle(fontSize: 12, color: isDark ? Colors.white38 : Colors.black38),
                filled: true,
                fillColor: isDark ? const Color(0xFF12182A) : Colors.white,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: _accent.withValues(alpha: 0.25)),
                ),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(16),
                  borderSide: BorderSide(color: _accent.withValues(alpha: 0.25)),
                ),
              ),
            ),
            const SizedBox(height: 8),
            Text(
              'Describe pose, location, glasses, watches, or vibe. AI dresses you fully in the outfit — not a piece on your shoulder.',
              style: TextStyle(fontSize: 11, height: 1.35, color: isDark ? Colors.white54 : Colors.black54),
            ),
            const SizedBox(height: 20),
            FilledButton.icon(
              onPressed: _busy ? null : _generate,
              icon: _busy
                  ? const SizedBox(
                      width: 18,
                      height: 18,
                      child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                    )
                  : const Icon(Icons.auto_awesome_rounded),
              label: Text(_busy ? 'Generating…' : 'Dress with AI'),
              style: FilledButton.styleFrom(
                backgroundColor: _accent,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 16),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              ),
            ),
            if (_status != null) ...[
              const SizedBox(height: 12),
              Text(_status!, textAlign: TextAlign.center, style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54)),
            ],
            if (_error != null) ...[
              const SizedBox(height: 12),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.red.withValues(alpha: isDark ? 0.15 : 0.08),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.red.withValues(alpha: 0.4)),
                ),
                child: Text(_error!, style: TextStyle(fontSize: 12, color: isDark ? Colors.redAccent : Colors.red.shade800)),
              ),
            ],
            if (_resultBytes != null) ...[
              const SizedBox(height: 22),
              Text('RESULT', style: TextStyle(fontSize: 10, letterSpacing: 1.6, fontWeight: FontWeight.w900, color: isDark ? Colors.white54 : Colors.black45)),
              const SizedBox(height: 10),
              ClipRRect(
                borderRadius: BorderRadius.circular(18),
                child: Image.memory(_resultBytes!, fit: BoxFit.contain),
              ),
              const SizedBox(height: 12),
              OutlinedButton.icon(
                onPressed: _download,
                icon: const Icon(Icons.download_rounded),
                label: const Text('Save image'),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _header(bool isDark) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: LinearGradient(
          colors: [_accent.withValues(alpha: isDark ? 0.25 : 0.12), _accent2.withValues(alpha: isDark ? 0.2 : 0.1)],
        ),
        border: Border.all(color: _accent.withValues(alpha: 0.35)),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              gradient: const LinearGradient(colors: [_accent, _accent2]),
              borderRadius: BorderRadius.circular(14),
            ),
            child: const Icon(Icons.style_rounded, color: Colors.white),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              'Upload your photo + outfit. Add style notes for pose, scene, glasses & watches. AI fully dresses you — head to toe.',
              style: TextStyle(fontSize: 12, height: 1.35, color: isDark ? Colors.white70 : const Color(0xFF334155)),
            ),
          ),
        ],
      ),
    );
  }

  Widget _pickCard({
    required bool isDark,
    required String title,
    required String subtitle,
    required IconData icon,
    required NgmyStudioLogoPick? pick,
    required VoidCallback? onTap,
  }) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            color: isDark ? const Color(0xFF12182A) : Colors.white,
            border: Border.all(color: _accent.withValues(alpha: pick != null ? 0.5 : 0.2)),
          ),
          child: Row(
            children: [
              _PickThumb(pick: pick, icon: icon),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                    Text(subtitle, style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),
                  ],
                ),
              ),
              Icon(pick != null ? Icons.check_circle_rounded : Icons.add_photo_alternate_rounded, color: pick != null ? _accent : (isDark ? Colors.white38 : Colors.black26)),
            ],
          ),
        ),
      ),
    );
  }
}

class _PickThumb extends StatelessWidget {
  const _PickThumb({required this.pick, required this.icon});

  final NgmyStudioLogoPick? pick;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<Uint8List?>(
      future: _load(),
      builder: (context, snap) {
        final bytes = snap.data;
        return Container(
          width: 56,
          height: 56,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            color: const Color(0xFF7C3AED).withValues(alpha: 0.12),
          ),
          clipBehavior: Clip.antiAlias,
          child: bytes != null
              ? Image.memory(bytes, fit: BoxFit.cover)
              : Icon(icon, color: const Color(0xFF7C3AED)),
        );
      },
    );
  }

  Future<Uint8List?> _load() async {
    if (pick == null) return null;
    if (pick!.bytes != null && pick!.bytes!.isNotEmpty) return pick!.bytes;
    final path = pick!.filePath;
    if (path != null && path.isNotEmpty && !kIsWeb) {
      return File(path).readAsBytes();
    }
    return null;
  }
}
