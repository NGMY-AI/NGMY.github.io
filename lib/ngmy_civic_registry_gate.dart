import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

const String _kUnlockPrefsKey = 'civic_registry_unlock_v2';

String civicRegistryPinForState(Map<String, String> pinsByState, String state) {
  return (pinsByState[state.trim()] ?? '').trim();
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

Future<bool> civicRegistryIsUnlocked(
  String userEmail, {
  required String state,
  required String globalPin,
  required Map<String, String> pinsByState,
}) async {
  final email = userEmail.toLowerCase().trim();
  final st = state.trim();
  if (email.isEmpty || st.isEmpty) return false;
  final expectedSig = civicRegistryPinSignature(globalPin: globalPin, pinsByState: pinsByState, state: st);
  if (expectedSig.isEmpty) return false;

  final root = await _loadUnlockRoot();
  if ((root['email'] ?? '').toString().toLowerCase().trim() != email) return false;
  final states = root['states'];
  if (states is! Map) return false;
  final entry = states[st];
  if (entry is! Map) return false;
  final storedSig = (entry['pinSig'] ?? '').toString();
  if (storedSig.isEmpty) {
    // Legacy unlock without pinSig — accept once and upgrade storage.
    await civicRegistrySaveUnlock(
      userEmail,
      state: st,
      globalPin: globalPin,
      pinsByState: pinsByState,
    );
    return true;
  }
  return storedSig == expectedSig;
}

Future<void> civicRegistrySaveUnlock(
  String userEmail, {
  required String state,
  required String globalPin,
  required Map<String, String> pinsByState,
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
  };
  root['states'] = states;
  await _saveUnlockRoot(root);
}

Future<void> civicRegistryClearUnlock() async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.remove(_kUnlockPrefsKey);
  await prefs.remove('civic_registry_unlock');
}

/// Red gate screen — state + PIN before registry (matches civic registry design).
class CivicRegistryGateScreen extends StatefulWidget {
  final List<String> usStates;
  final Map<String, String> pinsByState;
  final String userEmail;
  final String initialState;
  final void Function(String state) onUnlocked;
  final VoidCallback? onBack;
  final String globalPin;

  const CivicRegistryGateScreen({
    super.key,
    required this.usStates,
    required this.pinsByState,
    required this.globalPin,
    required this.userEmail,
    required this.initialState,
    required this.onUnlocked,
    this.onBack,
  });

  @override
  State<CivicRegistryGateScreen> createState() => _CivicRegistryGateScreenState();
}

class _CivicRegistryGateScreenState extends State<CivicRegistryGateScreen> {
  late String _state;
  final _pinC = TextEditingController();
  String? _error;
  bool _busy = false;

  static const _redTop = Color(0xFFE53935);
  static const _redBottom = Color(0xFFB71C1C);

  @override
  void initState() {
    super.initState();
    _state = widget.usStates.contains(widget.initialState) ? widget.initialState : widget.usStates.first;
  }

  @override
  void dispose() {
    _pinC.dispose();
    super.dispose();
  }

  void _unlock() {
    final pin = _pinC.text.trim();
    if (_state.trim().isEmpty) {
      setState(() => _error = 'Choose your state.');
      return;
    }
    if (pin.isEmpty) {
      setState(() => _error = 'Enter the PIN from your state registrar.');
      return;
    }
    final expected = civicRegistryEffectivePin(
      globalPin: widget.globalPin,
      pinsByState: widget.pinsByState,
      state: _state,
    );
    if (expected.isEmpty) {
      setState(() => _error = 'Registry PIN not set yet. Contact your state registrar.');
      return;
    }
    if (pin != expected) {
      setState(() => _error = 'Incorrect PIN for $_state.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    civicRegistrySaveUnlock(
      widget.userEmail,
      state: _state,
      globalPin: widget.globalPin,
      pinsByState: widget.pinsByState,
    ).then((_) {
      if (!mounted) return;
      widget.onUnlocked(_state);
    });
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
    setState(() {
      _state = picked;
      _error = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final pageBg = isDark ? const Color(0xFF121212) : const Color(0xFFF3F4F6);
    final backIconColor = isDark ? Colors.white70 : Colors.black87;

    return Scaffold(
      backgroundColor: pageBg,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        foregroundColor: backIconColor,
        leading: widget.onBack != null
            ? IconButton(
                icon: Icon(Icons.arrow_back_ios_new_rounded, color: backIconColor),
                onPressed: widget.onBack,
              )
            : null,
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
                  'Put your pin',
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.92),
                    fontSize: 15,
                    fontWeight: FontWeight.w500,
                  ),
                ),
                const SizedBox(height: 28),
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
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Enter PIN',
                    style: TextStyle(
                      color: Colors.white.withValues(alpha: 0.95),
                      fontSize: 13,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                _fieldShell(
                  child: TextField(
                    controller: _pinC,
                    obscureText: true,
                    keyboardType: TextInputType.number,
                    style: const TextStyle(color: Colors.white, fontSize: 15),
                    decoration: InputDecoration(
                      hintText: 'Enter PIN code',
                      hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.45)),
                      border: InputBorder.none,
                      isDense: true,
                    ),
                    onSubmitted: (_) => _unlock(),
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
                    onPressed: _busy ? null : _unlock,
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
                        : const Text('Unlock Registry'),
                  ),
                ),
                const SizedBox(height: 22),
                Divider(color: Colors.white.withValues(alpha: 0.35), height: 1),
                const SizedBox(height: 14),
                Text(
                  'Contact your state registrar if you need access',
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
