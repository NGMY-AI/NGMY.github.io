import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

String civicRegistryPinForState(Map<String, String> pinsByState, String state) {
  return (pinsByState[state.trim()] ?? '').trim();
}

/// One PIN for all users (admin sets in Management). Falls back to per-state map if empty.
String civicRegistryEffectivePin({
  required String globalPin,
  required Map<String, String> pinsByState,
  required String state,
}) {
  final g = globalPin.trim();
  if (g.isNotEmpty) return g;
  return civicRegistryPinForState(pinsByState, state);
}

Future<bool> civicRegistryIsUnlocked(String userEmail, String state) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString('civic_registry_unlock');
  if (raw == null || raw.isEmpty) return false;
  try {
    final map = jsonDecode(raw);
    if (map is! Map) return false;
    final email = (map['email'] ?? '').toString().toLowerCase().trim();
    final st = (map['state'] ?? '').toString().trim();
    return email == userEmail.toLowerCase().trim() && st == state.trim();
  } catch (_) {
    return false;
  }
}

Future<void> civicRegistrySaveUnlock(String userEmail, String state) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(
    'civic_registry_unlock',
    jsonEncode({
      'email': userEmail.toLowerCase().trim(),
      'state': state.trim(),
      'at': DateTime.now().toUtc().toIso8601String(),
    }),
  );
}

Future<void> civicRegistryClearUnlock() async {
  final prefs = await SharedPreferences.getInstance();
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
    civicRegistrySaveUnlock(widget.userEmail, _state).then((_) {
      if (!mounted) return;
      widget.onUnlocked(_state);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF3F4F6),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: widget.onBack != null
            ? IconButton(
                icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.black87),
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
                  child: DropdownButtonHideUnderline(
                    child: DropdownButton<String>(
                      value: _state,
                      isExpanded: true,
                      dropdownColor: _redBottom,
                      icon: Icon(Icons.unfold_more_rounded, color: Colors.white.withValues(alpha: 0.9)),
                      style: const TextStyle(color: Colors.white, fontSize: 15, fontWeight: FontWeight.w500),
                      items: widget.usStates
                          .map((s) => DropdownMenuItem(value: s, child: Text(s)))
                          .toList(),
                      onChanged: (v) {
                        if (v == null) return;
                        setState(() {
                          _state = v;
                          _error = null;
                        });
                      },
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
