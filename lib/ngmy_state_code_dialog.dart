import 'package:flutter/material.dart';

import 'ngmy_ui_lang.dart';

/// The pop-up an Authorized Registrar sees when changing to another state: that state's Civic Registry code is
/// needed first. A shield badge, the move from one state to the other, a short explanation, a rounded code field
/// with show/hide, a clear error line, and a big Verify & Change button. Light and dark mode.
///
/// [verify] checks the code: it returns null when the code is right, or the message to show when it is not.
Future<bool> showNgmyStateCodeDialog(
  BuildContext context, {
  required String fromState,
  required String toState,
  required Future<String?> Function(String code) verify,
}) async {
  final ok = await showDialog<bool>(
    context: context,
    barrierDismissible: false,
    barrierColor: Colors.black.withValues(alpha: 0.7),
    builder: (_) => NgmyStateCodeDialog(fromState: fromState, toState: toState, verify: verify),
  );
  return ok == true;
}

class NgmyStateCodeDialog extends StatefulWidget {
  const NgmyStateCodeDialog({super.key, required this.fromState, required this.toState, required this.verify});

  final String fromState;
  final String toState;
  final Future<String?> Function(String code) verify;

  @override
  State<NgmyStateCodeDialog> createState() => _NgmyStateCodeDialogState();
}

class _NgmyStateCodeDialogState extends State<NgmyStateCodeDialog> {
  final _code = TextEditingController();
  bool _busy = false;
  bool _show = false;
  String _error = '';

  static const _brand = Color(0xFF7C3AED);
  static const _brand2 = Color(0xFF4F46E5);

  @override
  void dispose() {
    _code.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (_busy) return;
    final code = _code.text.trim();
    if (code.isEmpty) {
      setState(() => _error = ngmyT('Enter the state code.', 'Weka msimbo wa jimbo.'));
      return;
    }
    setState(() {
      _busy = true;
      _error = '';
    });
    final err = await widget.verify(code);
    if (!mounted) return;
    if (err == null) {
      Navigator.pop(context, true);
      return;
    }
    setState(() {
      _busy = false;
      _error = err;
    });
  }

  @override
  Widget build(BuildContext context) {
    final dark = Theme.of(context).brightness == Brightness.dark;
    final card = dark ? const Color(0xFF15122A) : Colors.white;
    final ink = dark ? Colors.white : const Color(0xFF111827);
    final soft = dark ? Colors.white70 : const Color(0xFF4B5563);
    final edge = dark ? const Color(0xFF3B3355) : const Color(0xFFDDD6FE);
    final fieldFill = dark ? const Color(0xFF0E0C1C) : const Color(0xFFFBFAFF);
    final from = widget.fromState.trim();

    OutlineInputBorder border(Color c, double w) =>
        OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: c, width: w));

    return Dialog(
      key: const Key('state-code-dialog'),
      insetPadding: const EdgeInsets.symmetric(horizontal: 22, vertical: 24),
      backgroundColor: Colors.transparent,
      elevation: 0,
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 400),
        child: Container(
          decoration: BoxDecoration(
            color: card,
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: dark ? _brand.withValues(alpha: 0.5) : edge, width: 1.4),
            boxShadow: [BoxShadow(color: _brand.withValues(alpha: dark ? 0.35 : 0.18), blurRadius: 30, offset: const Offset(0, 12))],
          ),
          clipBehavior: Clip.antiAlias,
          child: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Top band: shield badge and the title.
                Container(
                  padding: const EdgeInsets.fromLTRB(20, 22, 20, 18),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: dark
                          ? [const Color(0xFF2E1065), const Color(0xFF1E1B4B)]
                          : [const Color(0xFFF5F3FF), const Color(0xFFEEF2FF)],
                    ),
                  ),
                  child: Column(
                    children: [
                      Container(
                        width: 64,
                        height: 64,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          gradient: const LinearGradient(colors: [Color(0xFFA78BFA), _brand, _brand2], begin: Alignment.topLeft, end: Alignment.bottomRight),
                          boxShadow: [BoxShadow(color: _brand.withValues(alpha: 0.45), blurRadius: 18, offset: const Offset(0, 6))],
                          border: Border.all(color: Colors.white.withValues(alpha: 0.8), width: 2.5),
                        ),
                        child: const Icon(Icons.shield_rounded, color: Colors.white, size: 32),
                      ),
                      const SizedBox(height: 12),
                      Text(
                        ngmyT('State code needed', 'Msimbo wa jimbo unahitajika'),
                        textAlign: TextAlign.center,
                        style: TextStyle(color: ink, fontSize: 19, fontWeight: FontWeight.w900, letterSpacing: 0.2),
                      ),
                      const SizedBox(height: 12),
                      // The move: from the state you are in to the one you picked.
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          if (from.isNotEmpty) ...[
                            Flexible(child: _chip(from, dark: dark, strong: false)),
                            Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 8),
                              child: Icon(Icons.arrow_forward_rounded, size: 20, color: dark ? const Color(0xFFC4B5FD) : _brand),
                            ),
                          ],
                          Flexible(child: _chip(widget.toState, dark: dark, strong: true)),
                        ],
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Text(
                        ngmyT('Enter the Civic Registry code of ${widget.toState} to open it.', 'Weka msimbo wa Civic Registry wa ${widget.toState} kuufungua.'),
                        textAlign: TextAlign.center,
                        style: TextStyle(color: soft, fontSize: 13.5, height: 1.4, fontWeight: FontWeight.w600),
                      ),
                      const SizedBox(height: 16),
                      TextField(
                        key: const Key('state-code-field'),
                        controller: _code,
                        autofocus: true,
                        obscureText: !_show,
                        enabled: !_busy,
                        textInputAction: TextInputAction.done,
                        onSubmitted: (_) => _submit(),
                        onChanged: (_) {
                          if (_error.isNotEmpty) setState(() => _error = '');
                        },
                        style: TextStyle(color: ink, fontSize: 18, fontWeight: FontWeight.w800, letterSpacing: _show ? 1.5 : 4),
                        decoration: InputDecoration(
                          labelText: ngmyT('State code', 'Msimbo wa jimbo'),
                          filled: true,
                          fillColor: fieldFill,
                          contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 16),
                          labelStyle: TextStyle(color: soft, fontWeight: FontWeight.w600),
                          floatingLabelStyle: TextStyle(color: dark ? const Color(0xFFC4B5FD) : _brand, fontWeight: FontWeight.w800),
                          prefixIcon: Icon(Icons.key_rounded, color: dark ? const Color(0xFFC4B5FD) : _brand),
                          suffixIcon: IconButton(
                            tooltip: _show ? ngmyT('Hide', 'Ficha') : ngmyT('Show', 'Onyesha'),
                            onPressed: () => setState(() => _show = !_show),
                            icon: Icon(_show ? Icons.visibility_off_rounded : Icons.visibility_rounded, color: soft),
                          ),
                          border: border(_error.isEmpty ? edge : const Color(0xFFEF4444), 1.4),
                          enabledBorder: border(_error.isEmpty ? edge : const Color(0xFFEF4444), 1.4),
                          disabledBorder: border(edge, 1.4),
                          focusedBorder: border(_error.isEmpty ? (dark ? const Color(0xFFA78BFA) : _brand) : const Color(0xFFEF4444), 2),
                        ),
                      ),
                      if (_error.isNotEmpty) ...[
                        const SizedBox(height: 10),
                        Container(
                          key: const Key('state-code-error'),
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                          decoration: BoxDecoration(
                            color: const Color(0xFFEF4444).withValues(alpha: dark ? 0.16 : 0.08),
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(color: const Color(0xFFEF4444).withValues(alpha: 0.45)),
                          ),
                          child: Row(
                            children: [
                              const Icon(Icons.error_outline_rounded, color: Color(0xFFEF4444), size: 18),
                              const SizedBox(width: 8),
                              Expanded(
                                child: Text(_error, style: TextStyle(color: dark ? const Color(0xFFFCA5A5) : const Color(0xFFB91C1C), fontWeight: FontWeight.w700, fontSize: 12.5)),
                              ),
                            ],
                          ),
                        ),
                      ],
                      const SizedBox(height: 14),
                      // A reminder that the registrar tools stay at home.
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                        decoration: BoxDecoration(
                          color: dark ? Colors.white.withValues(alpha: 0.05) : const Color(0xFFF9FAFB),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: dark ? Colors.white12 : const Color(0xFFE5E7EB)),
                        ),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Icon(Icons.home_work_rounded, size: 18, color: dark ? const Color(0xFFFBBF24) : const Color(0xFFD97706)),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Text(
                                ngmyT('Your Authorized Registrar tools stay in your home state.', 'Zana zako za Msajili Aliyeidhinishwa zinabaki kwenye jimbo lako la nyumbani.'),
                                style: TextStyle(color: soft, fontSize: 12, height: 1.35, fontWeight: FontWeight.w600),
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 18),
                      // The main button.
                      DecoratedBox(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          gradient: LinearGradient(colors: _busy ? [const Color(0xFF9CA3AF), const Color(0xFF6B7280)] : const [_brand, _brand2]),
                          boxShadow: _busy ? null : [BoxShadow(color: _brand.withValues(alpha: 0.4), blurRadius: 14, offset: const Offset(0, 5))],
                        ),
                        child: Material(
                          type: MaterialType.transparency,
                          child: InkWell(
                            key: const Key('state-code-verify'),
                            borderRadius: BorderRadius.circular(16),
                            onTap: _busy ? null : _submit,
                            child: SizedBox(
                              height: 52,
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  if (_busy)
                                    const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white))
                                  else
                                    const Icon(Icons.verified_user_rounded, color: Colors.white, size: 20),
                                  const SizedBox(width: 10),
                                  Text(
                                    _busy ? ngmyT('Checking…', 'Inakagua…') : ngmyT('Verify & Change', 'Thibitisha na Badilisha'),
                                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15.5),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 8),
                      TextButton(
                        key: const Key('state-code-cancel'),
                        onPressed: _busy ? null : () => Navigator.pop(context, false),
                        style: TextButton.styleFrom(foregroundColor: soft, minimumSize: const Size.fromHeight(44)),
                        child: Text(ngmyT('Cancel', 'Ghairi'), style: const TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _chip(String text, {required bool dark, required bool strong}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(30),
        gradient: strong ? const LinearGradient(colors: [_brand, _brand2]) : null,
        color: strong ? null : (dark ? Colors.white.withValues(alpha: 0.08) : Colors.white),
        border: Border.all(color: strong ? Colors.transparent : (dark ? Colors.white24 : const Color(0xFFDDD6FE))),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.location_on_rounded, size: 15, color: strong ? Colors.white : (dark ? Colors.white70 : const Color(0xFF6B7280))),
          const SizedBox(width: 4),
          Flexible(
            child: Text(
              text,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                color: strong ? Colors.white : (dark ? Colors.white70 : const Color(0xFF374151)),
                fontWeight: FontWeight.w800,
                fontSize: 13,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
