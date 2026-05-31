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

String ngmyDocumentScanPrompt({String userQuestion = ''}) {
  final q = userQuestion.trim();
  final ask = q.isEmpty
      ? 'Summarize this document and list the most important details.'
      : q;
  return 'You are a document analysis assistant. The user photographed or uploaded a document image. '
      'Provide:\n'
      '1. A clear summary (2–5 sentences)\n'
      '2. **Key details** as bullet points (names, dates, amounts, deadlines, addresses, signatures, action items)\n'
      'If text is unreadable, say so briefly and suggest retaking the photo with better lighting.\n'
      'Answer directly — do not introduce yourself as "NGMY AI".\n\n'
      'User request: $ask';
}
