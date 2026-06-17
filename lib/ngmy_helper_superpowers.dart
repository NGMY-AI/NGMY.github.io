import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_helper_call_memory.dart';

/// Exclusive NGMY Helper abilities — showcase in UI and AI prompt.
const List<({String id, String label, String tryPrompt})> kNgmyHelperSuperpowers = [
  (id: 'call_detective', label: 'Call Detective', tryPrompt: 'Who called me at 2 AM today?'),
  (id: 'voicemail', label: 'Voicemail Reader', tryPrompt: 'Paste voicemail text and summarize who called'),
  (id: 'invoice', label: 'Invoice Snap', tryPrompt: 'Read this invoice and remind me to pay'),
  (id: 'brief', label: 'NGMY Brief', tryPrompt: 'NGMY morning brief'),
  (id: 'chain', label: 'Smart Chain', tryPrompt: 'Remind me Friday 10am to call Mom about the invoice'),
  (id: 'clipboard', label: 'Clipboard', tryPrompt: 'What is in my clipboard?'),
];

String ngmyHelperSuperpowersContext({String callMemoryDirectory = ''}) {
  final lines = kNgmyHelperSuperpowers.map((s) => '- ${s.label}: e.g. "${s.tryPrompt}"').join('\n');
  return '''
NGMY EXCLUSIVE SUPERPOWERS (other generic AIs cannot do these on the user's phone):
$lines

CALL DETECTIVE rules:
- iPhone does not let websites read the call log directly. NGMY learns calls when the user uploads a Recent Calls screenshot or pastes voicemail text (⚡ button).
- When user asks "who called at 2am", search NGMY CALL MEMORY below first. If a match exists, answer with name, number, time, and voicemail summary.
- If memory is empty, tell them to tap ⚡ → "Call log screenshot" or paste voicemail once — then ask again.
- After learning a call, confirm what you saved.

INVOICE SNAP: When user sends a bill/invoice image, extract company, amount, due date, phone — suggest calendar reminder + call/text actions using phone integrations.

SMART CHAIN: One request can trigger calendar + optional sms/call actions in the action block.

${callMemoryDirectory.isNotEmpty ? '$callMemoryDirectory\n' : ''}
''';
}

const String _extractCallsSystem = '''
You extract call / voicemail data from the user's image or text for NGMY Call Detective.
Return ONLY valid JSON (no markdown):
{
  "calls": [
    {
      "when": "2026-06-17T02:03:00",
      "phone": "+14785550100",
      "name": "John Smith",
      "note": "mentioned invoice",
      "transcript": "optional voicemail text"
    }
  ],
  "summary": "one sentence for the user"
}
Use local datetime ISO for "when". If year missing use today. If only time visible assume today unless user said yesterday.
''';

Future<({List<NgmyCallMemoryEntry> entries, String summary})> ngmyExtractCallsFromVision(
  NgmyAiCredentials creds,
  String userNote, {
  required String imageB64,
  String mime = 'image/jpeg',
}) async {
  final prompt = '$_extractCallsSystem\n\nUser note: ${userNote.isEmpty ? '(none)' : userNote}\n'
      'Extract every visible call or voicemail from this screenshot.';
  final result = await ngmyAiGenerateWithCredentials(
    creds,
    prompt,
    images: [(mimeType: mime, data: imageB64)],
  );
  return _parseExtractResult(result.text, source: 'screenshot');
}

Future<({List<NgmyCallMemoryEntry> entries, String summary})> ngmyExtractCallsFromText(
  NgmyAiCredentials creds,
  String pastedText,
) async {
  final prompt = '$_extractCallsSystem\n\nVoicemail or call notes pasted by user:\n$pastedText';
  final result = await ngmyAiGenerateWithCredentials(creds, prompt);
  return _parseExtractResult(result.text, source: 'paste');
}

Future<({List<NgmyCallMemoryEntry> entries, String summary})> ngmyExtractCallsFromInvoice(
  NgmyAiCredentials creds, {
  required String imageB64,
  String mime = 'image/jpeg',
}) async {
  const invoiceSystem = '''
Extract invoice/bill info. Return ONLY JSON:
{
  "calls": [],
  "invoice": {
    "vendor": "Company",
    "amount": "\$120.00",
    "dueDate": "2026-06-20",
    "phone": "+1...",
    "summary": "what this bill is for"
  },
  "summary": "friendly sentence for user"
}
If a callback phone is on the invoice, also add to calls array with note "invoice callback".
''';
  final result = await ngmyAiGenerateWithCredentials(
    creds,
    invoiceSystem,
    images: [(mimeType: mime, data: imageB64)],
  );
  return _parseExtractResult(result.text, source: 'invoice');
}

({List<NgmyCallMemoryEntry> entries, String summary}) _parseExtractResult(String? raw, {required String source}) {
  if (raw == null || raw.trim().isEmpty) {
    return (entries: <NgmyCallMemoryEntry>[], summary: 'Could not read that — try a clearer screenshot.');
  }
  try {
    var text = raw.trim();
    if (text.startsWith('```')) {
      text = text.replaceFirst(RegExp(r'^```(?:json)?\s*'), '').replaceFirst(RegExp(r'\s*```$'), '');
    }
    final decoded = jsonDecode(text);
    if (decoded is! Map) throw FormatException('not map');
    final map = Map<String, dynamic>.from(decoded);
    final summary = (map['summary'] ?? '').toString();
    final callsRaw = map['calls'];
    final entries = <NgmyCallMemoryEntry>[];
    if (callsRaw is List) {
      for (var i = 0; i < callsRaw.length; i++) {
        final c = Map<String, dynamic>.from(callsRaw[i] as Map);
        DateTime when = DateTime.now();
        try {
          when = DateTime.parse((c['when'] ?? '').toString()).toLocal();
        } catch (_) {}
        entries.add(NgmyCallMemoryEntry(
          id: 'call_${DateTime.now().microsecondsSinceEpoch}_$i',
          when: when,
          phone: c['phone']?.toString(),
          name: c['name']?.toString(),
          note: c['note']?.toString(),
          transcript: c['transcript']?.toString(),
          source: source,
        ));
      }
    }
    final inv = map['invoice'];
    if (inv is Map && entries.isEmpty) {
      final im = Map<String, dynamic>.from(inv);
      final phone = im['phone']?.toString();
      if (phone != null && phone.trim().isNotEmpty) {
        entries.add(NgmyCallMemoryEntry(
          id: 'inv_${DateTime.now().microsecondsSinceEpoch}',
          when: DateTime.now(),
          phone: phone,
          name: im['vendor']?.toString(),
          note: 'Invoice: ${im['amount'] ?? ''} due ${im['dueDate'] ?? ''} — ${im['summary'] ?? ''}',
          source: source,
        ));
      }
    }
    return (entries: entries, summary: summary.isNotEmpty ? summary : 'Saved ${entries.length} item(s) to Call Detective memory.');
  } catch (e) {
    debugPrint('[superpowers] parse: $e');
    return (entries: <NgmyCallMemoryEntry>[], summary: 'I could not parse that — try again with a clearer image or paste.');
  }
}

Future<String> ngmyHelperSuperpowerPreflight({
  required String userEmail,
  required String userText,
}) async {
  final buf = StringBuffer();
  if (ngmyUserAsksWhoCalled(userText)) {
    final queryTime = ngmyParseCallQueryTime(userText);
    if (queryTime != null) {
      final hits = await NgmyCallMemoryStore.searchAround(userEmail, anchor: queryTime);
      if (hits.isNotEmpty) {
        buf.writeln('CALL DETECTIVE MATCH for ~${NgmyCallMemoryEntry.formatWhen(queryTime)}:');
        for (final h in hits) {
          buf.writeln('- ${h.summaryLine}');
          if (h.transcript != null && h.transcript!.trim().isNotEmpty) {
            buf.writeln('  Said: ${h.transcript}');
          }
        }
      } else {
        buf.writeln('CALL DETECTIVE: no saved calls near that time. Tell user to upload call log screenshot via ⚡ once.');
      }
    }
  }
  if (RegExp(r'\bclipboard\b', caseSensitive: false).hasMatch(userText)) {
    try {
      final clip = await Clipboard.getData(Clipboard.kTextPlain);
      final t = clip?.text?.trim() ?? '';
      if (t.isNotEmpty) {
        buf.writeln('CLIPBOARD CONTENT (user asked):\n$t\n');
      } else {
        buf.writeln('CLIPBOARD: empty or not accessible — user may need to paste manually.\n');
      }
    } catch (_) {
      buf.writeln('CLIPBOARD: could not read — ask user to paste the text.\n');
    }
  }
  if (ngmyUserWantsMorningBrief(userText)) {
    final calls = await NgmyCallMemoryStore.load(userEmail);
    buf.writeln('NGMY MORNING BRIEF — include recent calls/voicemails from memory, wallet highlights from LIVE DB if present, and 1-2 actionable suggestions (calendar/call/text).');
    if (calls.isNotEmpty) {
      buf.writeln(NgmyCallMemoryStore.directoryForAi(calls, max: 10));
    } else {
      buf.writeln('No saved calls yet — suggest user tap ⚡ to teach Call Detective once.');
    }
  }
  return buf.toString().trim();
}
