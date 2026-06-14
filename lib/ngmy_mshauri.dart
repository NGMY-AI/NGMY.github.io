import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_civic_registry_gate.dart';

/// Per-state settings the admin teaches each Mshauri (president name, faction notes, etc.).
class NgmyMshauriStateSettings {
  final String presidentName;
  final String presidentNameAlt;
  final String groupLabel;
  final String groupLabelAlt;
  final String adminNotes;

  const NgmyMshauriStateSettings({
    this.presidentName = '',
    this.presidentNameAlt = '',
    this.groupLabel = '',
    this.groupLabelAlt = '',
    this.adminNotes = '',
  });

  factory NgmyMshauriStateSettings.fromMap(Map<String, dynamic>? m) {
    if (m == null) return const NgmyMshauriStateSettings();
    return NgmyMshauriStateSettings(
      presidentName: (m['presidentName'] ?? m['president'] ?? '').toString().trim(),
      presidentNameAlt: (m['presidentNameAlt'] ?? m['presidentAlt'] ?? '').toString().trim(),
      groupLabel: (m['groupLabel'] ?? m['group'] ?? '').toString().trim(),
      groupLabelAlt: (m['groupLabelAlt'] ?? m['groupAlt'] ?? '').toString().trim(),
      adminNotes: (m['adminNotes'] ?? m['notes'] ?? '').toString().trim(),
    );
  }

  Map<String, dynamic> toMap() => {
        'presidentName': presidentName,
        'presidentNameAlt': presidentNameAlt,
        'groupLabel': groupLabel,
        'groupLabelAlt': groupLabelAlt,
        'adminNotes': adminNotes,
      };

  bool get hasContent =>
      presidentName.isNotEmpty ||
      presidentNameAlt.isNotEmpty ||
      groupLabel.isNotEmpty ||
      adminNotes.isNotEmpty;
}

Map<String, NgmyMshauriStateSettings> ngmyMshauriSettingsFromConfig(dynamic config) {
  final raw = (config as dynamic).mshauriSettingsByState;
  if (raw is! Map) return {};
  final out = <String, NgmyMshauriStateSettings>{};
  raw.forEach((k, v) {
    final state = k.toString().trim();
    if (state.isEmpty) return;
    if (v is Map) {
      out[state] = NgmyMshauriStateSettings.fromMap(Map<String, dynamic>.from(v));
    }
  });
  return out;
}

void ngmyMshauriWriteSettingsToConfig(dynamic config, Map<String, NgmyMshauriStateSettings> settings) {
  (config as dynamic).mshauriSettingsByState = settings.map((k, v) => MapEntry(k, v.toMap()));
}

const kNgmyMshauriDefaultUsStates = <String>[
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
];

List<String> ngmyMshauriKnownStates(dynamic config) {
  final states = <String>{};
  final pins = (config as dynamic).civicRegistryPinsByState;
  if (pins is Map) {
    for (final k in pins.keys) {
      final s = k.toString().trim();
      if (s.isNotEmpty) states.add(s);
    }
  }
  final cities = (config as dynamic).civicCitiesByState;
  if (cities is Map) {
    for (final k in cities.keys) {
      final s = k.toString().trim();
      if (s.isNotEmpty) states.add(s);
    }
  }
  if (states.isEmpty) return List<String>.from(kNgmyMshauriDefaultUsStates);
  final list = states.toList()..sort();
  return list;
}

/// Per-user Mshauri civic session (state + verified civic code).
class NgmyMshauriCivicStore {
  NgmyMshauriCivicStore._();

  static String _key(String email, String profileId) =>
      'ngmy_mshauri_civic_${email.toLowerCase().trim()}_$profileId';

  static Future<Map<String, dynamic>> load(String email, String profileId) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return {};
    final p = await SharedPreferences.getInstance();
    final raw = p.getString(_key(email, profileId));
    if (raw == null || raw.isEmpty) return {};
    try {
      final m = jsonDecode(raw);
      if (m is Map) return Map<String, dynamic>.from(m);
    } catch (_) {}
    return {};
  }

  static Future<void> save(String email, String profileId, Map<String, dynamic> session) async {
    if (email.trim().isEmpty || profileId.trim().isEmpty) return;
    final p = await SharedPreferences.getInstance();
    if (session.isEmpty) {
      await p.remove(_key(email, profileId));
      return;
    }
    await p.setString(_key(email, profileId), jsonEncode(session));
  }
}

String? _matchStateInText(String text, List<String> states) {
  final t = text.toLowerCase();
  String? best;
  var bestLen = 0;
  for (final st in states) {
    final s = st.toLowerCase();
    if (t.contains(s) && s.length > bestLen) {
      best = st;
      bestLen = s.length;
    }
  }
  return best;
}

bool _pinMatches(String entered, String expected) {
  final a = entered.trim();
  final b = expected.trim();
  if (a.isEmpty || b.isEmpty) return false;
  return a == b;
}

/// Updates civic session when user names a state or enters a registry code.
Future<Map<String, dynamic>> ngmyMshauriRefreshSession({
  required String email,
  required String profileId,
  required dynamic config,
  required String userText,
  String userProfileState = '',
}) async {
  var session = await NgmyMshauriCivicStore.load(email, profileId);
  final states = ngmyMshauriKnownStates(config);
  final text = userText.trim();
  if (text.isEmpty) return session;

  final globalPin = ((config as dynamic).civicRegistryPin ?? '').toString();
  final pinsByState = (config as dynamic).civicRegistryPinsByState;
  final pinMap = pinsByState is Map
      ? pinsByState.map((k, v) => MapEntry(k.toString().trim(), v.toString().trim()))
      : <String, String>{};

  final verified = session['verified'] == true;
  final pendingState = (session['pendingState'] ?? '').toString().trim();

  if (!verified) {
    final named = _matchStateInText(text, states);
    if (named != null && named != pendingState) {
      session = {...session, 'pendingState': named, 'verified': false};
      await NgmyMshauriCivicStore.save(email, profileId, session);
    }

    final stateForPin = (session['pendingState'] ?? named ?? userProfileState).toString().trim();
    if (stateForPin.isNotEmpty) {
      final expected = civicRegistryEffectivePin(
        globalPin: globalPin,
        pinsByState: pinMap,
        state: stateForPin,
      );
      if (expected.isNotEmpty && _pinMatches(text, expected)) {
        session = {
          'state': stateForPin,
          'pendingState': stateForPin,
          'verified': true,
          'verifiedAt': DateTime.now().toUtc().toIso8601String(),
        };
        await NgmyMshauriCivicStore.save(email, profileId, session);
        return session;
      }

      final alreadyUnlocked = await civicRegistryIsUnlocked(
        email,
        state: stateForPin,
        globalPin: globalPin,
        pinsByState: pinMap,
      );
      if (alreadyUnlocked && named != null) {
        session = {
          'state': stateForPin,
          'pendingState': stateForPin,
          'verified': true,
          'verifiedAt': DateTime.now().toUtc().toIso8601String(),
          'viaRegistry': true,
        };
        await NgmyMshauriCivicStore.save(email, profileId, session);
      }
    }
  }

  return session;
}

String ngmyMshauriPromptBlock({
  required dynamic config,
  required Map<String, dynamic> session,
  required List<Map<String, dynamic>> memory,
  String userProfileState = '',
}) {
  final states = ngmyMshauriKnownStates(config);
  final settingsByState = ngmyMshauriSettingsFromConfig(config);
  final verified = session['verified'] == true;
  final state = (session['state'] ?? session['pendingState'] ?? userProfileState).toString().trim();
  final pending = (session['pendingState'] ?? '').toString().trim();
  final settings = state.isNotEmpty ? settingsByState[state] : null;

  final buf = StringBuffer();
  buf.writeln('MSHAURI CIVIC REGISTRY LINK (mandatory onboarding until verified):');
  if (!verified) {
    buf.writeln(
      '- You have NOT verified this person for a state yet. Greet them like a normal community person — not a help desk.',
    );
    buf.writeln(
      '- Step 1 (casual): figure out which US state they belong to for civic registry (${states.take(8).join(", ")}${states.length > 8 ? ", …" : ""}). Work it into conversation — do not interrogate.',
    );
    if (pending.isNotEmpty) {
      buf.writeln(
        '- Step 2 NOW: They may have named $pending — ask naturally for their Civic Registry code for $pending (same code as NGMY Civic Registry).',
      );
      buf.writeln(
        '- When they enter the correct code, acknowledge briefly and continue talking normal — full state-specific advising after that. Never reveal the code.',
      );
    } else {
      buf.writeln(
        '- Step 2: After state is clear, ask for their Civic Registry code for that state before deep state-leadership advice — still talk human, not robotic.',
      );
    }
    buf.writeln('- Until verified, keep it conversational — state + code can come up over a few messages, not one formal script.');
    return buf.toString();
  }

  buf.writeln('- VERIFIED for state: $state. They completed Civic Registry connection for this state.');
  if (settings != null && settings.hasContent) {
    if (settings.groupLabel.isNotEmpty) {
      buf.writeln('- Their community / side you serve: ${settings.groupLabel}.');
    }
    if (settings.presidentName.isNotEmpty) {
      buf.writeln(
        '- President / leader name for YOUR side (admin taught you): ${settings.presidentName}. '
        'Use this name when encouraging them — they are on the right path under this leadership.',
      );
    }
    if (settings.presidentNameAlt.isNotEmpty || settings.groupLabelAlt.isNotEmpty) {
      buf.writeln(
        '- Context only (other group in $state): '
        '${settings.groupLabelAlt.isNotEmpty ? "group ${settings.groupLabelAlt}" : "another faction"}'
        '${settings.presidentNameAlt.isNotEmpty ? ", leader ${settings.presidentNameAlt}" : ""}. '
        'Do NOT recruit for the other side — comfort and strengthen YOUR community\'s people.',
      );
    }
    if (settings.adminNotes.isNotEmpty) {
      buf.writeln('- Admin guidance for $state: ${settings.adminNotes}');
    }
  } else {
    buf.writeln(
      '- No admin president name loaded yet for $state — still advise with warmth; ask admin to set president name in Communicate → Mshauri settings.',
    );
  }
  buf.writeln(
    '- Now: talk normal, comfort and advise when it fits — leadership, family, community, contribution, hope. '
    'They live in America but carry Babembe / Fizi identity — honor both without sounding like a formal elder.',
  );
  return buf.toString();
}

/// Per-message hints so Mshauri stays conversational and handles contribution topics well.
String ngmyMshauriConversationHint(String userText) {
  final t = userText.toLowerCase();
  final contributionLike = RegExp(
    r"\b(contribution|contribute|collect|collection|dues|fund|fundrais|money|pay|paid|didn't pay|didnt pay|couldn't pay|couldnt pay|no money|broke|help mode|community help)\b",
  ).hasMatch(t);
  final greetingOnly = t.trim().length < 24 &&
      RegExp(r'^(hi|hey|hello|habari|jambo|mbote|salama|good morning|good evening)\b').hasMatch(t.trim());

  final buf = StringBuffer();
  buf.writeln(
    'MSHAURI STYLE REMINDER: Reply like a normal person in this message — no "what can I help you with", no "my son/daughter". '
    'React to what they said; advice comes naturally.',
  );
  if (greetingOnly) {
    buf.writeln(
      'They just greeted you — greet back warmly and casually (e.g. ask how they are, mention something real about community life). '
      'Do NOT ask what they need help with.',
    );
  }
  if (contributionLike) {
    buf.writeln(
      'CONTRIBUTION TOPIC: If they missed paying money, be firm but kind — they MUST still contribute another way '
      '(cooking, front-line service at events, setup, cleanup, transport, childcare, security, etc.) because everyone else already did their part. '
      'Give 2–3 concrete non-money options they can do soon. Not optional if they want to stay right with the community.',
    );
  }
  return buf.toString();
}

/// Admin: per-state president / group names for Mshauri advisors.
Future<void> showNgmyMshauriAdminSheet({
  required BuildContext context,
  required dynamic config,
  required bool isDark,
  required VoidCallback onDataChanged,
  required Future<bool> Function() onPersist,
}) async {
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyMshauriAdminSheet(
      config: config,
      isDark: isDark,
      onDataChanged: onDataChanged,
      onPersist: onPersist,
      rootContext: context,
    ),
  );
}

class _NgmyMshauriAdminSheet extends StatefulWidget {
  const _NgmyMshauriAdminSheet({
    required this.config,
    required this.isDark,
    required this.onDataChanged,
    required this.onPersist,
    required this.rootContext,
  });

  final dynamic config;
  final bool isDark;
  final VoidCallback onDataChanged;
  final Future<bool> Function() onPersist;
  final BuildContext rootContext;

  @override
  State<_NgmyMshauriAdminSheet> createState() => _NgmyMshauriAdminSheetState();
}

class _NgmyMshauriAdminSheetState extends State<_NgmyMshauriAdminSheet> {
  late Map<String, NgmyMshauriStateSettings> _settings;
  late String _selectedState;
  late TextEditingController _presidentC;
  late TextEditingController _presidentAltC;
  late TextEditingController _groupC;
  late TextEditingController _groupAltC;
  late TextEditingController _notesC;

  @override
  void initState() {
    super.initState();
    _settings = Map<String, NgmyMshauriStateSettings>.from(ngmyMshauriSettingsFromConfig(widget.config));
    _selectedState = ngmyMshauriKnownStates(widget.config).first;
    _presidentC = TextEditingController();
    _presidentAltC = TextEditingController();
    _groupC = TextEditingController();
    _groupAltC = TextEditingController();
    _notesC = TextEditingController();
    _loadFieldsForState(_selectedState);
  }

  void _loadFieldsForState(String state) {
    final current = _settings[state] ?? const NgmyMshauriStateSettings();
    _presidentC.text = current.presidentName;
    _presidentAltC.text = current.presidentNameAlt;
    _groupC.text = current.groupLabel;
    _groupAltC.text = current.groupLabelAlt;
    _notesC.text = current.adminNotes;
  }

  void _saveCurrentState() {
    _settings[_selectedState] = NgmyMshauriStateSettings(
      presidentName: _presidentC.text.trim(),
      presidentNameAlt: _presidentAltC.text.trim(),
      groupLabel: _groupC.text.trim(),
      groupLabelAlt: _groupAltC.text.trim(),
      adminNotes: _notesC.text.trim(),
    );
  }

  @override
  void dispose() {
    _presidentC.dispose();
    _presidentAltC.dispose();
    _groupC.dispose();
    _groupAltC.dispose();
    _notesC.dispose();
    super.dispose();
  }

  Future<void> _saveAll() async {
    _saveCurrentState();
    ngmyMshauriWriteSettingsToConfig(widget.config, _settings);
    widget.onDataChanged();
    final ok = await widget.onPersist();
    if (!mounted) return;
    Navigator.pop(context);
    if (widget.rootContext.mounted) {
      ScaffoldMessenger.of(widget.rootContext).showSnackBar(
        SnackBar(content: Text(ok ? 'Mshauri state settings saved.' : 'Saved locally — cloud sync pending.')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final states = ngmyMshauriKnownStates(widget.config);
    final isDark = widget.isDark;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.92),
        margin: const EdgeInsets.fromLTRB(12, 12, 12, 16),
        padding: const EdgeInsets.fromLTRB(20, 18, 20, 22),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF0F111A) : Colors.white,
          borderRadius: BorderRadius.circular(26),
          border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text('Mshauri — per state', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 6),
              Text(
                'Teach each Mshauri advisor your president name and community side for every US state. '
                'Users verify with Civic Registry code for that state.',
                style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54, height: 1.35),
              ),
              const SizedBox(height: 16),
              DropdownButtonFormField<String>(
                value: states.contains(_selectedState) ? _selectedState : states.first,
                decoration: InputDecoration(
                  labelText: 'State',
                  filled: true,
                  fillColor: isDark ? const Color(0xFF151922) : const Color(0xFFF8FAFC),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
                items: states.map((s) => DropdownMenuItem(value: s, child: Text(s))).toList(),
                onChanged: (v) {
                  if (v == null || v == _selectedState) return;
                  _saveCurrentState();
                  setState(() {
                    _selectedState = v;
                    _loadFieldsForState(v);
                  });
                },
              ),
              const SizedBox(height: 12),
              TextField(
                controller: _presidentC,
                decoration: const InputDecoration(
                  labelText: 'Your president / leader name',
                  hintText: 'Name for YOUR community side in this state',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _groupC,
                decoration: const InputDecoration(
                  labelText: 'Your group / community label',
                  hintText: 'e.g. Babembe — Fizi chapter',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _presidentAltC,
                decoration: const InputDecoration(
                  labelText: 'Other faction president (context only)',
                  hintText: 'Optional — if two groups exist in this state',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _groupAltC,
                decoration: const InputDecoration(
                  labelText: 'Other group label (context only)',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _notesC,
                minLines: 2,
                maxLines: 5,
                decoration: const InputDecoration(
                  labelText: 'Extra guidance for the AI',
                  hintText: 'Motivation themes, leadership focus, what to tell women/men…',
                  border: OutlineInputBorder(),
                ),
              ),
              const SizedBox(height: 18),
              FilledButton(
                onPressed: _saveAll,
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF059669), minimumSize: const Size(double.infinity, 48)),
                child: const Text('Save Mshauri settings', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
