import 'dart:convert';

import 'package:flutter/material.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_helper_kb.dart';

/// AI helper for Help Topics admin — generates categories and Q&A from natural language.
class NgmyHelperKbAi {
  static String _systemPrompt(List<NgmyHelperKbCategory> existing) {
    final existingSummary = existing
        .map((c) => '- ${c.id}: ${c.title} (${c.questions.length} questions)')
        .join('\n');
    return '''
You are NGMY Help Topics Builder. The admin describes categories and FAQ content for the NGMY app.
Return ONLY valid JSON (no markdown fences) matching this schema:
{
  "message": "short confirmation for admin",
  "categories": [
    {
      "title": "Category name",
      "iconKey": "investments|games|loans|withdrawals|deposits|civic|store|jobs|refunds|account|music|help",
      "colorValue": 4280391411,
      "questions": [
        {
          "question": "User question text?",
          "printable": false,
          "answerBlocks": [
            {"type": "heading", "content": "Optional title"},
            {"type": "text", "content": "Clear stored answer paragraph."},
            {"type": "bullets", "content": "Point one\\nPoint two"},
            {"type": "link", "label": "Learn more", "url": "https://example.com"}
          ]
        }
      ]
    }
  ],
  "replaceCategoryId": null
}

Rules:
- Write professional FAQ answers for NGMY (investments, clock-in, wallet, civic registry, store, jobs, media).
- Each category needs 2-5 strong questions with complete answerBlocks.
- Use iconKey and colorValue that fit the topic.
- If admin asks to update one category, set replaceCategoryId to that category id from the list below.
- If admin asks for a new category, omit replaceCategoryId.
- Never use AI chat tone in answers — write definitive help articles.

Existing categories:
${existingSummary.isEmpty ? '(none yet)' : existingSummary}
''';
  }

  static Future<({String? error, String? message, List<NgmyHelperKbCategory> categories, String? replaceId})> generate({
    required String apiKeyRaw,
    required String adminInstruction,
    required List<NgmyHelperKbCategory> existing,
  }) async {
    final key = apiKeyRaw.trim();
    if (key.isEmpty) {
      return (error: 'Add an AI API key in Admin → Announcements → Global Settings first.', message: null, categories: <NgmyHelperKbCategory>[], replaceId: null);
    }
    final creds = ngmyParseAiCredentials(key);
    final prompt = '${_systemPrompt(existing)}\n\nAdmin instruction:\n$adminInstruction';
    final result = await ngmyAiGenerateWithCredentials(creds, prompt);
    if (result.text == null || result.text!.trim().isEmpty) {
      return (error: result.error ?? 'AI returned no content.', message: null, categories: <NgmyHelperKbCategory>[], replaceId: null);
    }
    try {
      var raw = result.text!.trim();
      if (raw.startsWith('```')) {
        raw = raw.replaceFirst(RegExp(r'^```(?:json)?\s*'), '').replaceFirst(RegExp(r'\s*```$'), '');
      }
      final decoded = jsonDecode(raw);
      if (decoded is! Map) {
        return (error: 'AI response was not valid JSON.', message: null, categories: <NgmyHelperKbCategory>[], replaceId: null);
      }
      final map = Map<String, dynamic>.from(decoded);
      final message = map['message']?.toString();
      final replaceId = map['replaceCategoryId']?.toString();
      final rawCats = map['categories'];
      if (rawCats is! List || rawCats.isEmpty) {
        return (error: 'AI did not return any categories.', message: message, categories: <NgmyHelperKbCategory>[], replaceId: replaceId);
      }
      final built = <NgmyHelperKbCategory>[];
      final baseOrder = existing.length;
      for (var i = 0; i < rawCats.length; i++) {
        final c = Map<String, dynamic>.from(rawCats[i] as Map);
        final id = 'cat_ai_${DateTime.now().microsecondsSinceEpoch}_$i';
        final questionsRaw = c['questions'];
        final questions = <NgmyHelperKbQuestion>[];
        if (questionsRaw is List) {
          for (var qi = 0; qi < questionsRaw.length; qi++) {
            final q = Map<String, dynamic>.from(questionsRaw[qi] as Map);
            final blocksRaw = q['answerBlocks'];
            final blocks = <NgmyHelperKbBlock>[];
            if (blocksRaw is List) {
              for (final b in blocksRaw) {
                blocks.add(NgmyHelperKbBlock.fromJson(Map<String, dynamic>.from(b as Map)));
              }
            }
            if (blocks.isEmpty) {
              blocks.add(NgmyHelperKbBlock(type: 'text', content: (q['answer'] ?? 'Answer pending.').toString()));
            }
            questions.add(NgmyHelperKbQuestion(
              id: 'q_ai_${DateTime.now().microsecondsSinceEpoch}_$qi',
              question: (q['question'] ?? 'Question').toString(),
              answerBlocks: blocks,
              printable: q['printable'] == true,
              sortOrder: qi,
            ));
          }
        }
        built.add(NgmyHelperKbCategory(
          id: id,
          title: (c['title'] ?? 'New Category').toString(),
          icon: _iconFromKey((c['iconKey'] ?? 'help').toString()),
          colorValue: c['colorValue'] is num ? (c['colorValue'] as num).toInt() : 0xFF64748B,
          sortOrder: baseOrder + i,
          questions: questions,
        ));
      }
      return (error: null, message: message, categories: built, replaceId: replaceId?.isNotEmpty == true ? replaceId : null);
    } catch (e) {
      return (error: 'Could not parse AI JSON: $e', message: null, categories: <NgmyHelperKbCategory>[], replaceId: null);
    }
  }

  static IconData _iconFromKey(String key) {
    switch (key) {
      case 'investments':
        return Icons.show_chart_rounded;
      case 'games':
        return Icons.sports_esports_rounded;
      case 'loans':
        return Icons.account_balance_wallet_rounded;
      case 'withdrawals':
        return Icons.download_rounded;
      case 'deposits':
        return Icons.swap_horiz_rounded;
      case 'civic':
        return Icons.verified_user_rounded;
      case 'store':
        return Icons.storefront_rounded;
      case 'jobs':
        return Icons.work_rounded;
      case 'refunds':
        return Icons.replay_rounded;
      case 'account':
        return Icons.person_rounded;
      case 'music':
        return Icons.music_note_rounded;
      default:
        return Icons.help_rounded;
    }
  }
}

List<NgmyHelperKbCategory> ngmyHelperKbMergeAiResult({
  required List<NgmyHelperKbCategory> current,
  required List<NgmyHelperKbCategory> generated,
  String? replaceCategoryId,
}) {
  var next = List<NgmyHelperKbCategory>.from(current);
  if (replaceCategoryId != null && generated.length == 1) {
    final idx = next.indexWhere((c) => c.id == replaceCategoryId);
    if (idx >= 0) {
      next[idx] = generated.first.copyWith(id: replaceCategoryId, sortOrder: next[idx].sortOrder);
      return next;
    }
  }
  next.addAll(generated);
  for (var i = 0; i < next.length; i++) {
    next[i] = next[i].copyWith(sortOrder: i);
  }
  return next;
}
