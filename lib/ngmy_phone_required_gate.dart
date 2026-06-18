import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

bool ngmyUserPhoneOnFile(String phone) {
  final digits = phone.replaceAll(RegExp(r'[^\d]'), '');
  return digits.length >= 10;
}

/// Blocks the app until the signed-in user saves a valid phone number on their account.
class NgmyPhoneRequiredGate extends StatefulWidget {
  const NgmyPhoneRequiredGate({
    super.key,
    required this.phone,
    required this.email,
    required this.onSavePhone,
    required this.child,
  });

  final String phone;
  final String email;
  final Future<bool> Function(String phone) onSavePhone;
  final Widget child;

  @override
  State<NgmyPhoneRequiredGate> createState() => _NgmyPhoneRequiredGateState();
}

class _NgmyPhoneRequiredGateState extends State<NgmyPhoneRequiredGate> {
  final _phoneC = TextEditingController();
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    _phoneC.text = widget.phone.trim();
  }

  @override
  void dispose() {
    _phoneC.dispose();
    super.dispose();
  }

  bool get _needsPhone => !ngmyUserPhoneOnFile(widget.phone);

  Future<void> _save() async {
    final phone = _phoneC.text.trim();
    if (!ngmyUserPhoneOnFile(phone)) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Enter a valid phone number (at least 10 digits).')),
      );
      return;
    }
    setState(() => _saving = true);
    try {
      final ok = await widget.onSavePhone(phone);
      if (!mounted) return;
      if (!ok) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not save phone. It may already be registered.')),
        );
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (!_needsPhone) return widget.child;
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Stack(
      children: [
        IgnorePointer(child: widget.child),
        Positioned.fill(
          child: ColoredBox(
            color: isDark ? const Color(0xEE050810) : const Color(0xEEF0F4FF),
            child: SafeArea(
              child: Center(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(24),
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 400),
                    child: Container(
                      padding: const EdgeInsets.all(22),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(22),
                        gradient: LinearGradient(
                          colors: isDark
                              ? [const Color(0xFF1E1B4B), const Color(0xFF0F172A)]
                              : [Colors.white, const Color(0xFFEEF2FF)],
                        ),
                        border: Border.all(color: const Color(0xFF7C3AED).withOpacity(0.45)),
                        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.15), blurRadius: 24)],
                      ),
                      child: DefaultTextStyle(
                        style: TextStyle(
                          decoration: TextDecoration.none,
                          decorationColor: Colors.transparent,
                          color: isDark ? Colors.white : const Color(0xFF0F172A),
                        ),
                        child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          const Icon(Icons.phone_android_rounded, size: 48, color: Color(0xFF7C3AED)),
                          const SizedBox(height: 14),
                          Text(
                            'Phone number required',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.w900,
                              color: isDark ? Colors.white : const Color(0xFF0F172A),
                              decoration: TextDecoration.none,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            'Every NGMY account must have a phone number on file before using the app. Your email is already registered. Add your phone to continue.',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 13,
                              height: 1.4,
                              color: isDark ? Colors.white70 : Colors.black54,
                              decoration: TextDecoration.none,
                            ),
                          ),
                          if (widget.email.trim().isNotEmpty) ...[
                            const SizedBox(height: 12),
                            Text(
                              'Email: ${widget.email}',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                fontSize: 11,
                                color: isDark ? Colors.white54 : Colors.black45,
                                decoration: TextDecoration.none,
                              ),
                            ),
                          ],
                          const SizedBox(height: 18),
                          TextField(
                            controller: _phoneC,
                            keyboardType: TextInputType.phone,
                            autocorrect: false,
                            enableSuggestions: false,
                            spellCheckConfiguration: const SpellCheckConfiguration.disabled(),
                            style: TextStyle(
                              decoration: TextDecoration.none,
                              color: isDark ? Colors.white : const Color(0xFF0F172A),
                            ),
                            inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[\d+\-\(\)\s]'))],
                            decoration: InputDecoration(
                              labelText: 'Your phone number',
                              prefixIcon: const Icon(Icons.phone_rounded),
                              filled: true,
                              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                              enabledBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(14),
                                borderSide: BorderSide(color: isDark ? Colors.white24 : Colors.black12),
                              ),
                              focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(14),
                                borderSide: const BorderSide(color: Color(0xFF7C3AED), width: 1.6),
                              ),
                              labelStyle: TextStyle(
                                decoration: TextDecoration.none,
                                color: isDark ? Colors.white60 : Colors.black54,
                              ),
                              floatingLabelStyle: TextStyle(
                                decoration: TextDecoration.none,
                                color: isDark ? Colors.white70 : Colors.black87,
                              ),
                            ),
                          ),
                          const SizedBox(height: 16),
                          FilledButton(
                            onPressed: _saving ? null : _save,
                            style: FilledButton.styleFrom(
                              padding: const EdgeInsets.symmetric(vertical: 14),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                            ),
                            child: _saving
                                ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                                : const Text('Save & continue', style: TextStyle(fontWeight: FontWeight.w900, decoration: TextDecoration.none)),
                          ),
                        ],
                      ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}
