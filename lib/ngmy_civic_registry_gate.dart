import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_civic_identity.dart';
import 'ngmy_civic_registry_access.dart';
import 'ngmy_civic_registry_cloud.dart';
import 'ngmy_civic_registry_stats.dart';

const String _kUnlockPrefsKey = 'civic_registry_unlock_v2';

String civicRegistryPinForState(Map<String, String> pinsByState, String state) {
  final sk = NgmyCivicRegistryStats.canonicalStateKey(state);
  if (sk.isEmpty) return '';
  final direct = (pinsByState[state.trim()] ?? pinsByState[sk] ?? '').trim();
  if (direct.isNotEmpty) return direct;
  for (final e in pinsByState.entries) {
    if (NgmyCivicRegistryStats.canonicalStateKey(e.key) == sk) {
      return e.value.trim();
    }
  }
  return '';
}

/// Per-state PIN first; optional global fallback when a state has no PIN set.
String civicRegistryEffectivePin({
  required String globalPin,
  required Map<String, String> pinsByState,
  required String state,
}) {
  final perState = civicRegistryPinForState(pinsByState, state);
  if (perState.isNotEmpty) return perState;
  return globalPin.trim();
}

String civicRegistryPinSignature({
  required String globalPin,
  required Map<String, String> pinsByState,
  required String state,
}) {
  final pin = civicRegistryEffectivePin(globalPin: globalPin, pinsByState: pinsByState, state: state);
  if (pin.isEmpty) return '';
  return '${state.trim().toLowerCase()}|${pin.hashCode}';
}

Map<String, dynamic> _normalizeUnlockRoot(dynamic raw) {
  if (raw is! Map) return {'v': 2, 'email': '', 'states': <String, dynamic>{}};
  final map = Map<String, dynamic>.from(raw);
  if (map['v'] == 2 && map['states'] is Map) {
    return {
      'v': 2,
      'email': (map['email'] ?? '').toString().toLowerCase().trim(),
      'states': Map<String, dynamic>.from(map['states'] as Map),
    };
  }
  // Legacy v1: { email, state, at }
  final email = (map['email'] ?? '').toString().toLowerCase().trim();
  final state = (map['state'] ?? '').toString().trim();
  final states = <String, dynamic>{};
  if (email.isNotEmpty && state.isNotEmpty) {
    states[state] = {'pinSig': (map['pinSig'] ?? '').toString(), 'at': map['at']};
  }
  return {'v': 2, 'email': email, 'states': states};
}

Future<Map<String, dynamic>> _loadUnlockRoot() async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_kUnlockPrefsKey) ?? prefs.getString('civic_registry_unlock');
  if (raw == null || raw.isEmpty) return {'v': 2, 'email': '', 'states': <String, dynamic>{}};
  try {
    return _normalizeUnlockRoot(jsonDecode(raw));
  } catch (_) {
    return {'v': 2, 'email': '', 'states': <String, dynamic>{}};
  }
}

Future<void> _saveUnlockRoot(Map<String, dynamic> root) async {
  final prefs = await SharedPreferences.getInstance();
  root['v'] = 2;
  await prefs.setString(_kUnlockPrefsKey, jsonEncode(root));
  await prefs.remove('civic_registry_unlock');
}

Future<Map<String, dynamic>?> civicRegistryStoredUnlockEntry(
  String userEmail, {
  required String state,
}) async {
  final email = userEmail.toLowerCase().trim();
  final st = state.trim();
  if (email.isEmpty || st.isEmpty) return null;
  final root = await _loadUnlockRoot();
  if ((root['email'] ?? '').toString().toLowerCase().trim() != email) return null;
  final states = root['states'];
  if (states is! Map) return null;
  final entry = states[st] ?? states[st.toLowerCase()];
  if (entry is! Map) return null;
  return Map<String, dynamic>.from(entry);
}

Future<String?> civicRegistryStoredPinSig(String userEmail, {required String state}) async {
  final entry = await civicRegistryStoredUnlockEntry(userEmail, state: state);
  if (entry == null) return null;
  final sig = (entry['pinSig'] ?? '').toString().trim();
  return sig.isEmpty ? null : sig;
}

Future<void> civicRegistryClearUnlockForState(String userEmail, {required String state}) async {
  final email = userEmail.toLowerCase().trim();
  final st = state.trim();
  if (email.isEmpty || st.isEmpty) return;
  final root = await _loadUnlockRoot();
  if ((root['email'] ?? '').toString().toLowerCase().trim() != email) return;
  final states = Map<String, dynamic>.from((root['states'] as Map?) ?? {});
  states.remove(st);
  states.remove(st.toLowerCase());
  root['states'] = states;
  await _saveUnlockRoot(root);
}

Future<void> civicRegistrySaveServerUnlock(
  String userEmail, {
  required String state,
  required String pinSig,
  String registryId = '',
}) async {
  final email = userEmail.toLowerCase().trim();
  final st = state.trim();
  final sig = pinSig.trim();
  if (email.isEmpty || st.isEmpty || sig.isEmpty) return;
  final root = await _loadUnlockRoot();
  if ((root['email'] ?? '').toString().toLowerCase().trim() != email) {
    root['email'] = email;
    root['states'] = <String, dynamic>{};
  }
  final states = Map<String, dynamic>.from((root['states'] as Map?) ?? {});
  states[st] = {
    'pinSig': sig,
    'at': DateTime.now().toUtc().toIso8601String(),
    if (registryId.trim().isNotEmpty) 'registryId': registryId.trim(),
  };
  root['states'] = states;
  await _saveUnlockRoot(root);
}

Future<bool> civicRegistryIsUnlocked(
  String userEmail, {
  required String state,
  required String globalPin,
  required Map<String, String> pinsByState,
  NgmyCivicAccessStatus? access,
}) async {
  if (access != null && access.invalidatesStoredUnlock) return false;
  final email = userEmail.toLowerCase().trim();
  final st = state.trim();
  if (email.isEmpty || st.isEmpty) return false;

  final root = await _loadUnlockRoot();
  if ((root['email'] ?? '').toString().toLowerCase().trim() != email) return false;
  final states = root['states'];
  if (states is! Map) return false;
  final entry = states[st] ?? states[st.toLowerCase()];
  if (entry is! Map) return false;
  final storedSig = (entry['pinSig'] ?? '').toString();
  if (storedSig.isEmpty) return false;

  // Server-issued pinSig (v1:…) — members no longer hold PINs locally.
  if (storedSig.startsWith('v1:')) return true;

  final expectedSig = civicRegistryPinSignature(globalPin: globalPin, pinsByState: pinsByState, state: st);
  if (expectedSig.isEmpty) {
    // No local PIN copy — treat a stored unlock as valid for this session.
    return true;
  }
  return storedSig == expectedSig;
}

Future<void> civicRegistrySaveUnlock(
  String userEmail, {
  required String state,
  required String globalPin,
  required Map<String, String> pinsByState,
  String registryId = '',
}) async {
  final email = userEmail.toLowerCase().trim();
  final st = state.trim();
  if (email.isEmpty || st.isEmpty) return;
  final sig = civicRegistryPinSignature(globalPin: globalPin, pinsByState: pinsByState, state: st);
  if (sig.isEmpty) return;

  final root = await _loadUnlockRoot();
  if ((root['email'] ?? '').toString().toLowerCase().trim() != email) {
    root['email'] = email;
    root['states'] = <String, dynamic>{};
  }
  final states = Map<String, dynamic>.from((root['states'] as Map?) ?? {});
  states[st] = {
    'pinSig': sig,
    'at': DateTime.now().toUtc().toIso8601String(),
    if (registryId.trim().isNotEmpty) 'registryId': registryId.trim(),
  };
  root['states'] = states;
  await _saveUnlockRoot(root);
}

Future<void> civicRegistryClearUnlock() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.remove(_kUnlockPrefsKey);
  await prefs.remove('civic_registry_unlock');
}

/// Red gate screen — state PIN → member name → DOB → registry ID.
/// Only shown for states that already have an Authorized Registrar.
class CivicRegistryGateScreen extends StatefulWidget {
  final List<String> usStates;
  final Map<String, String> pinsByState;
  final String userEmail;
  final String initialState;
  final void Function(String state) onUnlocked;
  final VoidCallback? onBack;
  final String globalPin;
  final List<Map<String, dynamic>> members;
  final List<Map<String, dynamic>> removed;
  /// When false for a picked state, unlock immediately (no PIN / identity).
  final bool Function(String state)? stateRequiresUnlock;
  final String? initialMessage;

  const CivicRegistryGateScreen({
    super.key,
    required this.usStates,
    required this.pinsByState,
    required this.globalPin,
    required this.userEmail,
    required this.initialState,
    required this.onUnlocked,
    this.onBack,
    this.members = const [],
    this.removed = const [],
    this.stateRequiresUnlock,
    this.initialMessage,
  });

  @override
  State<CivicRegistryGateScreen> createState() => _CivicRegistryGateScreenState();
}

class _CivicRegistryGateScreenState extends State<CivicRegistryGateScreen> {
  late String _state;
  int _step = 0; // 0 pin, 1 name, 2 dob, 3 registry id
  final _pinC = TextEditingController();
  final _nameC = TextEditingController();
  final _dobC = TextEditingController();
  final _idC = TextEditingController();
  String? _error;
  bool _busy = false;
  Map<String, dynamic>? _matchedMember;
  String? _serverPinSig;
  String? _matchedMemberEmail;
  String _enteredPin = '';

  static const _redTop = Color(0xFFE53935);
  static const _redBottom = Color(0xFFB71C1C);

  static const _stepTitles = [
    'Enter PIN',
    'Member name',
    'Date of birth',
    'Registry ID',
  ];

  static const _stepHints = [
    'Enter the PIN from your state registrar.',
    'Enter your full name exactly as registered.',
    'Enter the date of birth that matches that name (MM/DD/YYYY).',
    'Enter your Civic Registry ID number.',
  ];

  @override
  void initState() {
    super.initState();
    _state = widget.usStates.contains(widget.initialState) ? widget.initialState : widget.usStates.first;
    _error = (widget.initialMessage ?? '').trim().isEmpty ? null : widget.initialMessage!.trim();
    // Authorized Registrar returning home (or any state that does not require
    // unlock) should never be stuck on verify membership.
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (!mounted) return;
      final requires = widget.stateRequiresUnlock?.call(_state) ?? true;
      if (!requires) widget.onUnlocked(_state);
    });
  }

  NgmyCivicAccessStatus _accessFor(Map<String, dynamic>? member, {String name = ''}) {
    final want = name.trim().toLowerCase();
    final removed = widget.removed.any((r) {
      final email = (r['email'] ?? '').toString().trim().toLowerCase();
      final rid = (r['registryId'] ?? '').toString().trim().toUpperCase();
      final rn = (r['fullName'] ?? '').toString().trim().toLowerCase();
      if (member != null) {
        final me = (member['email'] ?? '').toString().trim().toLowerCase();
        final mr = (member['registryId'] ?? '').toString().trim().toUpperCase();
        if (me.isNotEmpty && me == email) return true;
        if (mr.isNotEmpty && mr == rid) return true;
      }
      return want.isNotEmpty && rn == want;
    });
    return NgmyCivicRegistryAccess.evaluate(removed: removed, member: member);
  }

  @override
  void dispose() {
    _pinC.dispose();
    _nameC.dispose();
    _dobC.dispose();
    _idC.dispose();
    super.dispose();
  }

  TextEditingController get _activeController {
    switch (_step) {
      case 0:
        return _pinC;
      case 1:
        return _nameC;
      case 2:
        return _dobC;
      default:
        return _idC;
    }
  }

  TextInputType get _keyboard {
    switch (_step) {
      case 0:
        return TextInputType.number;
      case 2:
        return TextInputType.number;
      case 3:
        return TextInputType.text;
      default:
        return TextInputType.name;
    }
  }

  bool get _obscure => _step == 0;

  List<TextInputFormatter>? get _formatters {
    if (_step == 2) {
      return [
        const NgmyCivicDobInputFormatter(),
        LengthLimitingTextInputFormatter(10),
      ];
    }
    if (_step == 0) {
      return [FilteringTextInputFormatter.digitsOnly];
    }
    return null;
  }

  void _goBackStep() {
    if (_busy) return;
    if (_step <= 0) {
      widget.onBack?.call();
      return;
    }
    setState(() {
      _error = null;
      _step -= 1;
      if (_step < 1) _matchedMember = null;
    });
  }

  Future<void> _continue() async {
    final value = _activeController.text.trim();
    if (_state.trim().isEmpty) {
      setState(() => _error = 'Choose your state.');
      return;
    }
    if (value.isEmpty) {
      setState(() => _error = 'This field is required.');
      return;
    }

    if (_step == 0) {
      setState(() {
        _busy = true;
        _error = null;
      });
      final localExpected = civicRegistryEffectivePin(
        globalPin: widget.globalPin,
        pinsByState: widget.pinsByState,
        state: _state,
      );
      _enteredPin = value;
      if (localExpected.isNotEmpty && value == localExpected) {
        if (!mounted) return;
        setState(() {
          _busy = false;
          _serverPinSig = 'v1:local';
          _error = null;
          _step = 1;
          _matchedMember = null;
          _matchedMemberEmail = null;
        });
        // Upgrade to server pinSig in background when online (gate steps 2–3 need it).
        unawaited(() async {
          final verified = await ngmyCivicVerifyStatePin(
            email: widget.userEmail,
            state: _state,
            pin: value,
          );
          if (!mounted) return;
          if (verified.ok && (verified.pinSig ?? '').trim().isNotEmpty) {
            setState(() => _serverPinSig = verified.pinSig);
          }
        }());
        return;
      }
      try {
        final verified = await ngmyCivicVerifyStatePin(
          email: widget.userEmail,
          state: _state,
          pin: value,
        );
        if (!mounted) return;
        if (!verified.ok || verified.pinSig == null || verified.pinSig!.isEmpty) {
          setState(() {
            _busy = false;
            _error = verified.error ?? 'Incorrect PIN for $_state.';
          });
          return;
        }
        setState(() {
          _busy = false;
          _serverPinSig = verified.pinSig;
          _error = null;
          _step = 1;
          _matchedMember = null;
          _matchedMemberEmail = null;
        });
      } catch (_) {
        if (!mounted) return;
        setState(() {
          _busy = false;
          _error = 'Could not verify PIN. Check your connection and try again.';
        });
      }
      return;
    }

    if (_step == 1) {
      setState(() {
        _busy = true;
        _error = null;
      });
      try {
        final localMember = NgmyCivicWalletIdentity.findByName(
          members: widget.members,
          state: _state,
          fullName: value,
        );
        final localAccess = _accessFor(localMember, name: value);
        if (!localAccess.allowsLogin) {
          if (!mounted) return;
          setState(() {
            _busy = false;
            _error = localAccess.message;
          });
          return;
        }
        if (localMember != null) {
          if (!mounted) return;
          setState(() {
            _busy = false;
            _error = null;
            _matchedMember = localMember;
            _matchedMemberEmail = (localMember['email'] ?? '').toString();
            _step = 2;
          });
          return;
        }

        var pinSig = (_serverPinSig ?? '').trim();
        if (pinSig.isEmpty || pinSig == 'v1:local') {
          if (_enteredPin.isEmpty) {
            setState(() {
              _busy = false;
              _error = 'Enter your state PIN again, then your name.';
              _step = 0;
            });
            return;
          }
          final verified = await ngmyCivicVerifyStatePin(
            email: widget.userEmail,
            state: _state,
            pin: _enteredPin,
          );
          if (!verified.ok || (verified.pinSig ?? '').isEmpty) {
            if (!mounted) return;
            setState(() {
              _busy = false;
              _error = verified.error ?? 'Could not verify PIN. Check connection and try again.';
            });
            return;
          }
          pinSig = verified.pinSig!;
          _serverPinSig = pinSig;
        }

        final matched = await ngmyCivicGateMatchName(
          email: widget.userEmail,
          state: _state,
          pinSig: pinSig,
          fullName: value,
        );
        if (!mounted) return;
        if (!matched.ok || (matched.memberEmail ?? '').isEmpty) {
          setState(() {
            _busy = false;
            _error = matched.error ?? 'That name is not registered in $_state.';
          });
          return;
        }
        setState(() {
          _busy = false;
          _matchedMemberEmail = matched.memberEmail;
          _matchedMember = null;
          _error = null;
          _step = 2;
        });
      } catch (_) {
        if (!mounted) return;
        setState(() {
          _busy = false;
          _error = 'Could not verify name. Check your connection and try again.';
        });
      }
      return;
    }

    final pinSig = (_serverPinSig ?? '').trim();
    if (pinSig.isEmpty || pinSig == 'v1:local') {
      if (_step == 2) {
        final member = _matchedMember;
        if (member == null) {
          setState(() {
            _error = 'Start over — name step was lost.';
            _step = 1;
          });
          return;
        }
        if (!NgmyCivicWalletIdentity.dobMatches(member, value)) {
          setState(() => _error = 'Date of birth does not match that registered name.');
          return;
        }
        setState(() {
          _error = null;
          _step = 3;
        });
        return;
      }
      final member = _matchedMember;
      if (member == null) {
        setState(() {
          _error = 'Start over — verification incomplete.';
          _step = 1;
        });
        return;
      }
      if (!NgmyCivicWalletIdentity.idMatches(member, value)) {
        setState(() => _error = 'Registry ID does not match that member.');
        return;
      }
      setState(() {
        _busy = true;
        _error = null;
      });
      final rid = (member['registryId'] ?? '').toString();
      await civicRegistrySaveUnlock(
        widget.userEmail,
        state: _state,
        globalPin: widget.globalPin,
        pinsByState: widget.pinsByState,
        registryId: rid,
      );
      if (!mounted) return;
      widget.onUnlocked(_state);
      return;
    }

    if (_step == 2) {
      final memberEmail = (_matchedMemberEmail ?? '').trim();
      if (memberEmail.isEmpty) {
        setState(() {
          _error = 'Start over — name step was lost.';
          _step = 1;
        });
        return;
      }
      setState(() {
        _busy = true;
        _error = null;
      });
      final verified = await ngmyCivicGateVerifyIdentity(
        email: widget.userEmail,
        state: _state,
        pinSig: pinSig,
        memberEmail: memberEmail,
        dob: value,
        step: 'dob',
      );
      if (!mounted) return;
      if (!verified.ok) {
        setState(() {
          _busy = false;
          _error = verified.error ?? 'Date of birth does not match that registered name.';
        });
        return;
      }
      setState(() {
        _busy = false;
        _error = null;
        _step = 3;
      });
      return;
    }

    final memberEmail = (_matchedMemberEmail ?? '').trim();
    if (memberEmail.isEmpty) {
      setState(() {
        _error = 'Start over — verification incomplete.';
        _step = 1;
      });
      return;
    }
    final preAccess = _accessFor(_matchedMember);
    if (!preAccess.allowsLogin) {
      setState(() => _error = preAccess.message);
      return;
    }
    final preAccess = _accessFor(_matchedMember);
    if (!preAccess.allowsLogin) {
      setState(() => _error = preAccess.message);
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    final verified = await ngmyCivicGateVerifyIdentity(
      email: widget.userEmail,
      state: _state,
      pinSig: pinSig,
      memberEmail: memberEmail,
      registryId: value,
      step: 'id',
    );
    if (!mounted) return;
    if (!verified.ok) {
      setState(() {
        _busy = false;
        _error = verified.error ?? 'Registry ID does not match that member.';
      });
      return;
    }
    await civicRegistrySaveServerUnlock(
      widget.userEmail,
      state: _state,
      pinSig: pinSig,
      registryId: verified.registryId ?? value,
    );
    if (!mounted) return;
    widget.onUnlocked(_state);
  }

  Future<void> _pickState() async {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final q = TextEditingController();
    final filtered = ValueNotifier<List<String>>(widget.usStates);

    void applyFilter() {
      final s = q.text.trim().toLowerCase();
      if (s.isEmpty) {
        filtered.value = widget.usStates;
        return;
      }
      filtered.value = widget.usStates.where((st) => st.toLowerCase().contains(s)).toList(growable: false);
    }

    q.addListener(applyFilter);
    final picked = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (sheetCtx) {
        final bg = isDark ? const Color(0xFF0B1220) : Colors.white;
        final border = isDark ? Colors.white10 : const Color(0xFFE5E7EB);
        final text = isDark ? Colors.white : const Color(0xFF0F172A);
        final muted = isDark ? Colors.white70 : Colors.black54;

        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: () => Navigator.pop(sheetCtx),
          child: SafeArea(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: GestureDetector(
                onTap: () {},
                child: Container(
                  constraints: const BoxConstraints(maxWidth: 520),
                  margin: const EdgeInsets.fromLTRB(12, 12, 12, 12),
                  decoration: BoxDecoration(
                    color: bg,
                    borderRadius: BorderRadius.circular(26),
                    border: Border.all(color: border, width: 1.2),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: isDark ? 0.6 : 0.12),
                        blurRadius: 26,
                        offset: const Offset(0, 14),
                      ),
                    ],
                  ),
                  child: DraggableScrollableSheet(
                    expand: false,
                    initialChildSize: 0.78,
                    minChildSize: 0.48,
                    maxChildSize: 0.92,
                    builder: (_, controller) {
                      return Padding(
                        padding: EdgeInsets.only(
                          left: 18,
                          right: 18,
                          top: 14,
                          bottom: 14 + MediaQuery.viewInsetsOf(sheetCtx).bottom,
                        ),
                        child: Column(
                          children: [
                            Container(
                              width: 44,
                              height: 5,
                              decoration: BoxDecoration(
                                color: isDark ? Colors.white24 : Colors.black12,
                                borderRadius: BorderRadius.circular(99),
                              ),
                            ),
                            const SizedBox(height: 12),
                            Row(
                              children: [
                                Expanded(
                                  child: Text(
                                    'Select your state',
                                    style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: text),
                                  ),
                                ),
                                IconButton(
                                  tooltip: 'Close',
                                  onPressed: () => Navigator.pop(sheetCtx),
                                  icon: Icon(Icons.close_rounded, color: muted),
                                ),
                              ],
                            ),
                            const SizedBox(height: 6),
                            Container(
                              decoration: BoxDecoration(
                                color: isDark ? Colors.white10 : const Color(0xFFF3F4F6),
                                borderRadius: BorderRadius.circular(18),
                                border: Border.all(color: border),
                              ),
                              padding: const EdgeInsets.symmetric(horizontal: 12),
                              child: Row(
                                children: [
                                  Icon(Icons.search_rounded, color: muted),
                                  const SizedBox(width: 8),
                                  Expanded(
                                    child: TextField(
                                      controller: q,
                                      style: TextStyle(color: text, fontSize: 14),
                                      decoration: InputDecoration(
                                        hintText: 'Search state…',
                                        hintStyle: TextStyle(color: muted),
                                        border: InputBorder.none,
                                      ),
                                    ),
                                  ),
                                  IconButton(
                                    tooltip: 'Clear',
                                    onPressed: () => q.text = '',
                                    icon: Icon(Icons.backspace_rounded, color: muted, size: 18),
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 10),
                            Expanded(
                              child: ValueListenableBuilder<List<String>>(
                                valueListenable: filtered,
                                builder: (_, states, __) {
                                  if (states.isEmpty) {
                                    return Center(
                                      child: Text('No results', style: TextStyle(color: muted, fontWeight: FontWeight.w700)),
                                    );
                                  }
                                  return ListView.separated(
                                    controller: controller,
                                    itemCount: states.length,
                                    separatorBuilder: (_, __) => Divider(height: 1, color: border),
                                    itemBuilder: (_, i) {
                                      final state = states[i];
                                      final selected = state == _state;
                                      return ListTile(
                                        dense: true,
                                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                        title: Text(state, style: TextStyle(fontWeight: FontWeight.w800, color: text)),
                                        trailing: selected ? Icon(Icons.check_circle_rounded, color: Colors.greenAccent.shade400) : null,
                                        onTap: () => Navigator.pop(sheetCtx, state),
                                      );
                                    },
                                  );
                                },
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
    q.dispose();
    filtered.dispose();

    if (!mounted) return;
    if (picked == null || picked.trim().isEmpty) return;
    final requires = widget.stateRequiresUnlock?.call(picked) ?? true;
    if (!requires) {
      widget.onUnlocked(picked);
      return;
    }
    setState(() {
      _state = picked;
      _error = null;
      _step = 0;
      _matchedMember = null;
      _pinC.clear();
      _nameC.clear();
      _dobC.clear();
      _idC.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final pageBg = isDark ? const Color(0xFF121212) : const Color(0xFFF3F4F6);
    final backIconColor = isDark ? Colors.white70 : Colors.black87;
    final progress = (_step + 1) / 4.0;

    return Scaffold(
      backgroundColor: pageBg,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        foregroundColor: backIconColor,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new_rounded, color: backIconColor),
          onPressed: _busy ? null : _goBackStep,
        ),
      ),
      body: Align(
        alignment: const Alignment(0, -0.14),
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(22, 0, 22, 24),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 420),
            padding: const EdgeInsets.fromLTRB(22, 28, 22, 22),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(28),
              gradient: const LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [_redTop, _redBottom],
              ),
              boxShadow: [
                BoxShadow(
                  color: _redTop.withValues(alpha: 0.35),
                  blurRadius: 24,
                  offset: const Offset(0, 12),
                ),
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.white.withValues(alpha: 0.85), width: 2),
                  ),
                  child: const Icon(Icons.shield_outlined, color: Colors.white, size: 36),
                ),
                const SizedBox(height: 16),
                const Text(
                  'Civic Registry',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 26,
                    fontWeight: FontWeight.w900,
                    letterSpacing: 0.3,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  'Verify your membership',
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.92),
                    fontSize: 15,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                const SizedBox(height: 18),
                ClipRRect(
                  borderRadius: BorderRadius.circular(99),
                  child: LinearProgressIndicator(
                    value: progress,
                    minHeight: 5,
                    backgroundColor: Colors.white.withValues(alpha: 0.22),
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Step ${_step + 1} of 4',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 11, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 22),
                if (_step == 0) ...[
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Select Your State',
                      style: TextStyle(
                        color: Colors.white.withValues(alpha: 0.95),
                        fontSize: 13,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                  const SizedBox(height: 8),
                  _fieldShell(
                    child: Material(
                      color: Colors.transparent,
                      child: InkWell(
                        borderRadius: BorderRadius.circular(16),
                        onTap: _busy ? null : _pickState,
                        child: Padding(
                          padding: const EdgeInsets.symmetric(vertical: 12),
                          child: Row(
                            children: [
                              Expanded(
                                child: Text(
                                  _state,
                                  style: const TextStyle(color: Colors.white, fontSize: 15, fontWeight: FontWeight.w600),
                                ),
                              ),
                              Icon(Icons.keyboard_arrow_down_rounded, color: Colors.white.withValues(alpha: 0.9)),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'You will only see data from the state you select',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 11),
                  ),
                  const SizedBox(height: 20),
                ],
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    _stepTitles[_step],
                    style: TextStyle(
                      color: Colors.white.withValues(alpha: 0.95),
                      fontSize: 13,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  _stepHints[_step],
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 12, height: 1.35),
                ),
                const SizedBox(height: 10),
                _fieldShell(
                  child: TextField(
                    key: ValueKey('civic-gate-$_step'),
                    controller: _activeController,
                    obscureText: _obscure,
                    keyboardType: _keyboard,
                    inputFormatters: _formatters,
                    textCapitalization: _step == 1 ? TextCapitalization.words : TextCapitalization.none,
                    style: const TextStyle(color: Colors.white, fontSize: 15),
                    decoration: InputDecoration(
                      hintText: _step == 2 ? 'MM/DD/YYYY' : _stepTitles[_step],
                      hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.45)),
                      border: InputBorder.none,
                      isDense: true,
                    ),
                    onSubmitted: (_) => _busy ? null : _continue(),
                  ),
                ),
                if (_error != null) ...[
                  const SizedBox(height: 10),
                  Text(
                    _error!,
                    textAlign: TextAlign.center,
                    style: const TextStyle(color: Color(0xFFFFCDD2), fontSize: 12, fontWeight: FontWeight.w600),
                  ),
                ],
                const SizedBox(height: 22),
                SizedBox(
                  width: double.infinity,
                  height: 52,
                  child: FilledButton(
                    onPressed: _busy ? null : _continue,
                    style: FilledButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: _redTop,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      textStyle: const TextStyle(fontSize: 17, fontWeight: FontWeight.w800),
                    ),
                    child: _busy
                        ? const SizedBox(
                            width: 22,
                            height: 22,
                            child: CircularProgressIndicator(strokeWidth: 2, color: _redTop),
                          )
                        : Text(_step == 3 ? 'Unlock Registry' : 'Continue'),
                  ),
                ),
                const SizedBox(height: 22),
                Divider(color: Colors.white.withValues(alpha: 0.35), height: 1),
                const SizedBox(height: 14),
                Text(
                  'Name, date of birth, and registry ID must match Civic Registry records',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 12),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _fieldShell({required Widget child}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.white.withValues(alpha: 0.35)),
      ),
      child: child,
    );
  }
}
