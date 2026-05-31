import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

import 'ngmy_ai_memory.dart';

/// Gemini vision — summarize documents / images (same API key as NGMY Helper).
Future<String?> geminiAnalyzeImage({
  required String apiKey,
  required Uint8List imageBytes,
  required String mimeType,
  required String prompt,
}) async {
  final key = apiKey.trim();
  if (key.isEmpty) return null;

  final b64 = base64Encode(imageBytes);
  final safeMime = mimeType.trim().isEmpty ? 'image/jpeg' : mimeType;

  const models = ['gemini-2.0-flash', 'gemini-1.5-flash-latest', 'gemini-1.5-flash'];
  Object? lastError;

  for (final model in models) {
    try {
      final url = Uri.parse(
        'https://generativelanguage.googleapis.com/v1beta/models/$model:generateContent?key=${Uri.encodeQueryComponent(key)}',
      );
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'contents': [
            {
              'parts': [
                {
                  'inline_data': {
                    'mime_type': safeMime,
                    'data': b64,
                  },
                },
                {'text': prompt},
              ],
            },
          ],
        }),
      );
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final candidates = data['candidates'];
        if (candidates is List && candidates.isNotEmpty) {
          final parts = candidates[0]['content']?['parts'];
          if (parts is List && parts.isNotEmpty) {
            final text = parts[0]['text']?.toString();
            if (text != null && text.trim().isNotEmpty) {
              return NgmyAiMemoryStore.sanitizeHelperReply(text.trim());
            }
          }
        }
      } else {
        lastError = jsonDecode(response.body);
      }
    } catch (e) {
      lastError = e;
    }
  }

  if (lastError != null) {
    debugPrint('[gemini vision] failed: $lastError');
  }
  return null;
}

/// Analyze up to two document images in one request.
Future<String?> geminiAnalyzeImages({
  required String apiKey,
  required List<({Uint8List bytes, String mimeType})> images,
  required String prompt,
}) async {
  if (images.isEmpty) return null;
  if (images.length == 1) {
    return geminiAnalyzeImage(
      apiKey: apiKey,
      imageBytes: images.first.bytes,
      mimeType: images.first.mimeType,
      prompt: prompt,
    );
  }

  final key = apiKey.trim();
  if (key.isEmpty) return null;

  final parts = <Map<String, dynamic>>[];
  for (final img in images) {
    parts.add({
      'inline_data': {
        'mime_type': img.mimeType.trim().isEmpty ? 'image/jpeg' : img.mimeType,
        'data': base64Encode(img.bytes),
      },
    });
  }
  parts.add({'text': prompt});

  const models = ['gemini-2.0-flash', 'gemini-1.5-flash-latest', 'gemini-1.5-flash'];
  Object? lastError;

  for (final model in models) {
    try {
      final url = Uri.parse(
        'https://generativelanguage.googleapis.com/v1beta/models/$model:generateContent?key=${Uri.encodeQueryComponent(key)}',
      );
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'contents': [
            {'parts': parts},
          ],
        }),
      );
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final candidates = data['candidates'];
        if (candidates is List && candidates.isNotEmpty) {
          final outParts = candidates[0]['content']?['parts'];
          if (outParts is List && outParts.isNotEmpty) {
            final text = outParts[0]['text']?.toString();
            if (text != null && text.trim().isNotEmpty) {
              return NgmyAiMemoryStore.sanitizeHelperReply(text.trim());
            }
          }
        }
      } else {
        lastError = jsonDecode(response.body);
      }
    } catch (e) {
      lastError = e;
    }
  }

  if (lastError != null) {
    debugPrint('[gemini vision multi] failed: $lastError');
  }
  return null;
}

String ngmyDocumentScanPrompt({String userQuestion = '', int pageCount = 1, String languageCode = 'en'}) {
  final q = userQuestion.trim();
  final ask = q.isEmpty
      ? 'Summarize this document and list the most important details.'
      : q;
  final pagesNote = pageCount > 1
      ? 'The user uploaded $pageCount document pages (images). Read and combine BOTH pages — do not ignore the second page.\n'
      : 'The user photographed or uploaded a document image.\n';
  final langLine = languageCode == 'sw'
      ? 'Write your entire response in Swahili (Kiswahili). Use simple, clear language.'
      : 'Write your entire response in English.';
  return 'You are a document analysis assistant. $pagesNote'
      '$langLine\n'
      'Provide:\n'
      '1. A clear summary (2–5 sentences)\n'
      '2. **Key details** as bullet points (names, dates, amounts, deadlines, addresses, signatures, action items)\n'
      'If text is unreadable, say so briefly and suggest retaking the photo with better lighting.\n'
      'Answer directly — do not introduce yourself as "NGMY AI".\n\n'
      'User request: $ask';
}
