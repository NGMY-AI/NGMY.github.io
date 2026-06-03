import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Per-state + optional global Civic Registry PIN helpers.
class NgmyCivicRegistryPins {
  static const _localKey = 'ngmy_civic_registry_pins_backup';

  static Map<String, String> mergeMaps(Map<String, String> local, Map<String, String> remote) {
    final out = Map<String, String>.from(remote);
    for (final e in local.entries) {
      final k = e.key.trim();
      final v = e.value.trim();
      if (k.isEmpty) continue;
      if (v.isNotEmpty) out[k] = v;
    }
    return out;
  }

  static String effectivePin({
    required String state,
    required String globalPin,
    required Map<String, String> pinsByState,
  }) {
    final st = state.trim();
    final perState = (pinsByState[st] ?? '').trim();
    if (perState.isNotEmpty) return perState;
    return globalPin.trim();
  }

  static Future<void> saveLocalBackup({
    required String globalPin,
    required Map<String, String> pinsByState,
  }) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(
        _localKey,
        jsonEncode({'global': globalPin, 'byState': pinsByState}),
      );
    } catch (_) {}
  }

  static Future<({String global, Map<String, String> byState})> loadLocalBackup() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_localKey);
      if (raw == null || raw.isEmpty) return (global: '', byState: <String, String>{});
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return (global: '', byState: <String, String>{});
      final global = (decoded['global'] ?? '').toString();
      final byState = <String, String>{};
      final m = decoded['byState'];
      if (m is Map) {
        m.forEach((k, v) {
          final key = k.toString().trim();
          final val = v.toString().trim();
          if (key.isNotEmpty && val.isNotEmpty) byState[key] = val;
        });
      }
      return (global: global, byState: byState);
    } catch (_) {
      return (global: '', byState: <String, String>{});
    }
  }
}

void showNgmyCivicRegistryPinSheet(
  BuildContext context, {
  required bool isDark,
  required List<String> usStates,
  required String globalPin,
  required Map<String, String> pinsByState,
  required String initialState,
  required bool canEditAnyState,
  required String reviewerAssignedState,
  required Future<void> Function(String state, String pin, String globalPin) onSave,
}) {
  showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (sheetCtx) => _CivicRegistryPinSheet(
      isDark: isDark,
      usStates: usStates,
      globalPin: globalPin,
      pinsByState: Map<String, String>.from(pinsByState),
      initialState: initialState,
      canEditAnyState: canEditAnyState,
      reviewerAssignedState: reviewerAssignedState,
      onSave: onSave,
    ),
  );
}

class _CivicRegistryPinSheet extends StatefulWidget {
  final bool isDark;
  final List<String> usStates;
  final String globalPin;
  final Map<String, String> pinsByState;
  final String initialState;
  final bool canEditAnyState;
  final String reviewerAssignedState;
  final Future<void> Function(String state, String pin, String globalPin) onSave;

  const _CivicRegistryPinSheet({
    required this.isDark,
    required this.usStates,
    required this.globalPin,
    required this.pinsByState,
    required this.initialState,
    required this.canEditAnyState,
    required this.reviewerAssignedState,
    required this.onSave,
  });

  @override
  State<_CivicRegistryPinSheet> createState() => _CivicRegistryPinSheetState();
}

class _CivicRegistryPinSheetState extends State<_CivicRegistryPinSheet> {
  late String _state;
  late final TextEditingController _pinC;
  late final TextEditingController _globalC;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    final allowed = _allowedStates;
    _state = allowed.contains(widget.initialState)
        ? widget.initialState
        : (allowed.isNotEmpty ? allowed.first : widget.usStates.first);
    _pinC = TextEditingController(text: widget.pinsByState[_state] ?? '');
    _globalC = TextEditingController(text: widget.globalPin);
  }

  List<String> get _allowedStates {
    if (widget.canEditAnyState) return widget.usStates;
    final assigned = widget.reviewerAssignedState.trim();
    if (assigned.isEmpty) return widget.usStates;
    return widget.usStates.where((s) => s.trim().toLowerCase() == assigned.toLowerCase()).toList();
  }

  @override
  void dispose() {
    _pinC.dispose();
    _globalC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = widget.isDark;
    final allowed = _allowedStates;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          margin: const EdgeInsets.fromLTRB(14, 14, 14, 18),
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 22),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF0F111A) : Colors.white,
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  const Icon(Icons.pin_rounded, color: Color(0xFF6200EE)),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Text(
                      widget.canEditAnyState ? 'State registry PINs' : '$_state registry PIN',
                      style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 18),
                    ),
                  ),
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded)),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                widget.canEditAnyState
                    ? 'Each state can have its own PIN. Members use the PIN for the state they select at the gate.'
                    : 'Set the PIN for your state. Only members entering $_state will use this code.',
                style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54, height: 1.35),
              ),
              const SizedBox(height: 14),
              if (allowed.length > 1)
                DropdownButtonFormField<String>(
                  value: allowed.contains(_state) ? _state : allowed.first,
                  decoration: InputDecoration(
                    labelText: 'State',
                    filled: true,
                    fillColor: isDark ? const Color(0xFF1C1F2E) : const Color(0xFFF8FAFC),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  items: allowed.map((s) => DropdownMenuItem(value: s, child: Text(s))).toList(),
                  onChanged: _busy
                      ? null
                      : (v) {
                          if (v == null) return;
                          setState(() {
                            _state = v;
                            _pinC.text = widget.pinsByState[v] ?? '';
                          });
                        },
                )
              else if (allowed.isNotEmpty)
                Text('State: $_state', style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87)),
              const SizedBox(height: 12),
              TextField(
                controller: _pinC,
                keyboardType: TextInputType.number,
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'PIN for $_state',
                  filled: true,
                  fillColor: isDark ? const Color(0xFF1C1F2E) : const Color(0xFFF8FAFC),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                ),
              ),
              if (widget.canEditAnyState) ...[
                const SizedBox(height: 12),
                TextField(
                  controller: _globalC,
                  keyboardType: TextInputType.number,
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Fallback PIN (all states without their own PIN)',
                    filled: true,
                    fillColor: isDark ? const Color(0xFF1C1F2E) : const Color(0xFFF8FAFC),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                ),
              ],
              const SizedBox(height: 16),
              FilledButton(
                onPressed: _busy
                    ? null
                    : () async {
                        final pin = _pinC.text.trim();
                        if (pin.isEmpty) {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Enter a PIN for this state.')),
                          );
                          return;
                        }
                        setState(() => _busy = true);
                        try {
                          await widget.onSave(_state, pin, _globalC.text.trim());
                          if (!context.mounted) return;
                          Navigator.pop(context);
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text('Registry PIN saved for $_state.')),
                          );
                        } finally {
                          if (mounted) setState(() => _busy = false);
                        }
                      },
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF6200EE),
                  minimumSize: const Size(double.infinity, 48),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
                child: _busy
                    ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Text('Save PIN', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
