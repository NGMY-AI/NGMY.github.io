import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_gemini_vision.dart';

/// G-Services — scan documents with the same Gemini AI as NGMY Helper.
void showNgmyDocumentScanner(
  BuildContext context, {
  required String geminiApiKey,
  required Future<String> Function() refreshApiKey,
  VoidCallback? onOpenPriceCalculator,
}) {
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => _NgmyDocumentScannerPage(
        geminiApiKey: geminiApiKey,
        refreshApiKey: refreshApiKey,
        onOpenPriceCalculator: onOpenPriceCalculator,
      ),
    ),
  );
}

class _NgmyDocumentScannerPage extends StatefulWidget {
  const _NgmyDocumentScannerPage({
    required this.geminiApiKey,
    required this.refreshApiKey,
    this.onOpenPriceCalculator,
  });

  final String geminiApiKey;
  final Future<String> Function() refreshApiKey;
  final VoidCallback? onOpenPriceCalculator;

  @override
  State<_NgmyDocumentScannerPage> createState() => _NgmyDocumentScannerPageState();
}

class _NgmyDocumentScannerPageState extends State<_NgmyDocumentScannerPage> {
  static const _accent = Color(0xFF10B981);
  static const _bg = Color(0xFF0A1222);

  final _picker = ImagePicker();
  final _questionC = TextEditingController();

  Uint8List? _bytes;
  String? _mime;
  String? _previewPath;
  String? _dataPreview;
  bool _analyzing = false;
  String? _result;
  String? _error;

  @override
  void dispose() {
    _questionC.dispose();
    super.dispose();
  }

  Future<void> _pick(ImageSource source) async {
    try {
      final file = await _picker.pickImage(
        source: source,
        imageQuality: 82,
        maxWidth: 2000,
      );
      if (file == null) return;
      final bytes = await file.readAsBytes();
      if (!mounted) return;
      setState(() {
        _bytes = bytes;
        _mime = 'image/jpeg';
        _result = null;
        _error = null;
        _previewPath = kIsWeb ? null : file.path;
        _dataPreview = kIsWeb ? 'data:image/jpeg;base64,${base64Encode(bytes)}' : null;
      });
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Could not load image: $e')),
        );
      }
    }
  }

  Future<void> _analyze() async {
    if (_bytes == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Take or choose a photo of your document first.')),
      );
      return;
    }

    setState(() {
      _analyzing = true;
      _error = null;
      _result = null;
    });

    try {
      var apiKey = widget.geminiApiKey.trim();
      if (apiKey.isEmpty) {
        apiKey = (await widget.refreshApiKey()).trim();
      }
      if (apiKey.isEmpty) {
        setState(() {
          _error = 'AI is not connected. Ask an admin to save the Gemini API key in Admin → Management Hub.';
          _analyzing = false;
        });
        return;
      }

      final reply = await geminiAnalyzeImage(
        apiKey: apiKey,
        imageBytes: _bytes!,
        mimeType: _mime ?? 'image/jpeg',
        prompt: ngmyDocumentScanPrompt(userQuestion: _questionC.text),
      );

      if (!mounted) return;
      setState(() {
        _analyzing = false;
        if (reply != null && reply.isNotEmpty) {
          _result = reply;
        } else {
          _error = 'Could not analyze the document. Check the API key and try a clearer photo.';
        }
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _analyzing = false;
        _error = 'Something went wrong: $e';
      });
    }
  }

  Widget _preview() {
    if (_bytes == null) {
      return Container(
        height: 200,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: Colors.white.withValues(alpha: 0.06),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: Colors.white24),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.document_scanner_outlined, size: 48, color: Colors.white.withValues(alpha: 0.35)),
            const SizedBox(height: 10),
            Text(
              'No document yet',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontWeight: FontWeight.w600),
            ),
          ],
        ),
      );
    }

    Widget img;
    if (_dataPreview != null) {
      img = Image.memory(_bytes!, fit: BoxFit.contain);
    } else if (_previewPath != null && !kIsWeb) {
      img = Image.file(File(_previewPath!), fit: BoxFit.contain);
    } else {
      img = Image.memory(_bytes!, fit: BoxFit.contain);
    }

    return ClipRRect(
      borderRadius: BorderRadius.circular(14),
      child: Container(
        constraints: const BoxConstraints(maxHeight: 280),
        color: Colors.black26,
        child: img,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bg,
      appBar: AppBar(
        backgroundColor: const Color(0xFF0F2744),
        foregroundColor: Colors.white,
        title: const Row(
          children: [
            Icon(Icons.document_scanner_rounded, color: _accent, size: 22),
            SizedBox(width: 10),
            Text('Document Scanner', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17)),
          ],
        ),
        actions: [
          if (widget.onOpenPriceCalculator != null)
            TextButton.icon(
              onPressed: widget.onOpenPriceCalculator,
              icon: const Icon(Icons.calculate_outlined, size: 18),
              label: const Text('Calculator'),
              style: TextButton.styleFrom(foregroundColor: Colors.white70),
            ),
          IconButton(icon: const Icon(Icons.close_rounded), onPressed: () => Navigator.pop(context)),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 28),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Photograph any document — receipts, letters, contracts, forms. AI summarizes it and pulls out the important details.',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.72), fontSize: 13, height: 1.4),
            ),
            const SizedBox(height: 14),
            _preview(),
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: _analyzing ? null : () => _pick(ImageSource.camera),
                    icon: const Icon(Icons.photo_camera_outlined),
                    label: const Text('Camera'),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Colors.white,
                      side: const BorderSide(color: _accent),
                      padding: const EdgeInsets.symmetric(vertical: 12),
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: _analyzing ? null : () => _pick(ImageSource.gallery),
                    icon: const Icon(Icons.photo_library_outlined),
                    label: const Text('Gallery'),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: Colors.white,
                      side: const BorderSide(color: Colors.white24),
                      padding: const EdgeInsets.symmetric(vertical: 12),
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 14),
            TextField(
              controller: _questionC,
              maxLines: 2,
              style: const TextStyle(color: Colors.white, fontSize: 14),
              decoration: InputDecoration(
                hintText: 'Optional: ask about this document…',
                hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
                filled: true,
                fillColor: Colors.white.withValues(alpha: 0.06),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
              ),
            ),
            const SizedBox(height: 14),
            FilledButton.icon(
              onPressed: _analyzing ? null : _analyze,
              icon: _analyzing
                  ? const SizedBox(
                      width: 20,
                      height: 20,
                      child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white),
                    )
                  : const Icon(Icons.auto_awesome_rounded),
              label: Text(_analyzing ? 'Analyzing document…' : 'Scan & summarize'),
              style: FilledButton.styleFrom(
                backgroundColor: _accent,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 14),
              ),
            ),
            if (_error != null) ...[
              const SizedBox(height: 16),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.red.withValues(alpha: 0.15),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.redAccent.withValues(alpha: 0.5)),
                ),
                child: Text(_error!, style: const TextStyle(color: Colors.redAccent, fontSize: 13)),
              ),
            ],
            if (_result != null) ...[
              const SizedBox(height: 16),
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: const Color(0xFF0F2744),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: _accent.withValues(alpha: 0.45)),
                ),
                child: SelectableText(
                  _result!,
                  style: const TextStyle(color: Colors.white, fontSize: 14, height: 1.45),
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}
