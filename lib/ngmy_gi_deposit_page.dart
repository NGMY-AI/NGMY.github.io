import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:url_launcher/url_launcher.dart';

import 'main.dart';
import 'ngmy_nav.dart';
import 'ngmy_store_payment_notification.dart';

/// Growth Income deposit: send the money to NGMY Pay (tap the $cashtag to open
/// Cash App), put the code in the payment note, add your tag and screenshot.
class NgmyGiDepositPage extends StatefulWidget {
  const NgmyGiDepositPage({
    super.key,
    required this.user,
    required this.amount,
    required this.onAdd,
    required this.config,
    this.successHint = 'Your deposit is pending. Admin will verify your payment proof and credit your balance.',
  });

  final UserData user;
  final double amount;
  final void Function(AppTransaction) onAdd;
  final AppConfig config;
  final String successHint;

  @override
  State<NgmyGiDepositPage> createState() => _NgmyGiDepositPageState();
}

class _NgmyGiDepositPageState extends State<NgmyGiDepositPage> {
  static const _bg = Color(0xFF0B0F14);
  static const _panel = Color(0xFF151A21);
  static const _green = Color(0xFF2EF6A3);
  static const _emerald = Color(0xFF059669);
  static const _cashGreen = Color(0xFF00D64F);

  PaymentMethod _method = PaymentMethod.cashApp;
  final _tag = TextEditingController();
  String? _screenshotRef;
  late final String _code = (10000 + math.Random().nextInt(89999)).toString();

  bool get _cash => _method == PaymentMethod.cashApp;
  String get _payTo => _cash ? widget.config.officialCashApp.trim() : widget.config.officialBitcoin.trim();
  String get _cashTag {
    final t = _payTo.replaceAll(RegExp(r'^\$+'), '').trim();
    return t.isEmpty ? '' : '\$$t';
  }

  @override
  void dispose() {
    _tag.dispose();
    super.dispose();
  }

  void _toast(String m) => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(m)));

  Future<void> _copy(String text, String what) async {
    await Clipboard.setData(ClipboardData(text: text));
    HapticFeedback.selectionClick();
    if (mounted) _toast('$what copied');
  }

  /// Opens Cash App on the NGMY Pay tag (with the amount filled in), or the Bitcoin wallet.
  Future<void> _openPayApp() async {
    if (_payTo.isEmpty) {
      _toast('Payment details are not available right now. Please try again later.');
      return;
    }
    HapticFeedback.mediumImpact();
    final amount = widget.amount.toStringAsFixed(2);
    final url = _cash ? Uri.parse('https://cash.app/$_cashTag/$amount') : Uri.parse('bitcoin:$_payTo');
    try {
      final ok = await launchUrl(url, mode: LaunchMode.externalApplication);
      if (!ok) await _copy(_cash ? _cashTag : _payTo, _cash ? 'Cash App tag' : 'Bitcoin address');
    } catch (_) {
      await _copy(_cash ? _cashTag : _payTo, _cash ? 'Cash App tag' : 'Bitcoin address');
    }
  }

  Future<void> _pickScreenshot() async {
    final img = await ImagePicker().pickImage(source: ImageSource.gallery);
    if (img == null) return;
    final bytes = await img.readAsBytes();
    final mime = img.name.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
    setState(() => _screenshotRef = 'data:$mime;base64,${base64Encode(bytes)}');
  }

  void _submit() {
    final t = _cash ? ngmyNormalizeCashAppTagForSubmit(_tag.text) : _tag.text.trim();
    if (t.isEmpty) {
      _toast(_cash ? 'Enter your Cash App tag (the one you paid from).' : 'Enter the Bitcoin wallet you paid from.');
      return;
    }
    if (_screenshotRef == null) {
      _toast('Add a screenshot of your payment.');
      return;
    }
    widget.onAdd(AppTransaction(
      id: DateTime.now().toString(),
      userEmail: widget.user.email,
      amount: widget.amount,
      type: TransactionType.deposit,
      method: _method,
      sourceDetails: t,
      screenshotPath: _screenshotRef,
      verificationCode: _code,
      timestamp: DateTime.now(),
    ));
    NgmyNavigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bg,
      appBar: AppBar(
        backgroundColor: _bg,
        foregroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(icon: const Icon(Icons.arrow_back_ios_new_rounded), onPressed: () => NgmyNavigator.pop(context)),
        title: const Text('Deposit', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17)),
        centerTitle: true,
      ),
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 560),
          child: ListView(
            padding: const EdgeInsets.fromLTRB(18, 6, 18, 40),
            children: [
              _amountHero(),
              const SizedBox(height: 18),
              _methodToggle(),
              const SizedBox(height: 18),
              _step(1, 'Send the money to NGMY Pay', _payCard()),
              _step(2, 'Put this code in the payment note', _codeCard()),
              _step(3, _cash ? 'Your Cash App tag' : 'Your Bitcoin wallet', _tagField()),
              _step(4, 'Screenshot of your payment', _proofCard(), last: true),
              const SizedBox(height: 6),
              Text(
                widget.successHint,
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11.5, fontWeight: FontWeight.w600, height: 1.4),
              ),
              const SizedBox(height: 16),
              SizedBox(
                height: 56,
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(18),
                    gradient: const LinearGradient(colors: [Color(0xFF10B981), _emerald]),
                    boxShadow: [BoxShadow(color: _emerald.withValues(alpha: 0.45), blurRadius: 18, offset: const Offset(0, 8))],
                  ),
                  child: ElevatedButton.icon(
                    onPressed: _submit,
                    icon: const Icon(Icons.check_circle_rounded),
                    label: const Text('I sent it — submit deposit', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.transparent,
                      shadowColor: Colors.transparent,
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _amountHero() {
    return Container(
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 22),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF064E3B), Color(0xFF065F46), Color(0xFF0B3B2E)]),
        border: Border.all(color: _green.withValues(alpha: 0.25)),
        boxShadow: [BoxShadow(color: _emerald.withValues(alpha: 0.25), blurRadius: 24, offset: const Offset(0, 10))],
      ),
      child: Column(
        children: [
          Text('YOU\'RE ADDING', style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 2)),
          const SizedBox(height: 6),
          FittedBox(
            child: Text(
              '\$${formatCurrency(widget.amount)}',
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 44, letterSpacing: -1),
            ),
          ),
          const SizedBox(height: 6),
          Text('to your Growth Income wallet', style: TextStyle(color: _green.withValues(alpha: 0.85), fontWeight: FontWeight.w700, fontSize: 12)),
        ],
      ),
    );
  }

  Widget _methodToggle() {
    Widget opt(PaymentMethod m, IconData icon, String label) {
      final on = _method == m;
      return Expanded(
        child: GestureDetector(
          onTap: () => setState(() => _method = m),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 200),
            height: 46,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              color: on ? Colors.white.withValues(alpha: 0.1) : Colors.transparent,
              border: Border.all(color: on ? _green.withValues(alpha: 0.5) : Colors.transparent),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 20, color: on ? _green : Colors.white54),
                const SizedBox(width: 6),
                Text(label, style: TextStyle(color: on ? Colors.white : Colors.white54, fontWeight: FontWeight.w800)),
              ],
            ),
          ),
        ),
      );
    }

    return Container(
      padding: const EdgeInsets.all(5),
      decoration: BoxDecoration(color: _panel, borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white.withValues(alpha: 0.06))),
      child: Row(
        children: [
          opt(PaymentMethod.cashApp, Icons.attach_money_rounded, 'Cash App'),
          const SizedBox(width: 5),
          opt(PaymentMethod.bitcoin, Icons.currency_bitcoin_rounded, 'Bitcoin'),
        ],
      ),
    );
  }

  /// A numbered step with a line down to the next one.
  Widget _step(int n, String title, Widget body, {bool last = false}) {
    return IntrinsicHeight(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SizedBox(
            width: 34,
            child: Column(
              children: [
                Container(
                  width: 28,
                  height: 28,
                  alignment: Alignment.center,
                  decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [_green, _emerald])),
                  child: Text('$n', style: const TextStyle(color: Color(0xFF052E1F), fontWeight: FontWeight.w900, fontSize: 13)),
                ),
                if (!last)
                  Expanded(
                    child: Container(width: 2, margin: const EdgeInsets.symmetric(vertical: 4), color: _green.withValues(alpha: 0.18)),
                  ),
              ],
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Padding(
              padding: EdgeInsets.only(bottom: last ? 12 : 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(top: 4, bottom: 10),
                    child: Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14.5)),
                  ),
                  body,
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _payCard() {
    final label = _cash ? _cashTag : _payTo;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: _openPayApp,
        borderRadius: BorderRadius.circular(20),
        child: Ink(
          padding: const EdgeInsets.fromLTRB(16, 14, 12, 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: _cash
                ? const LinearGradient(colors: [Color(0xFF00C244), Color(0xFF00A33A)])
                : const LinearGradient(colors: [Color(0xFFF7931A), Color(0xFFD97706)]),
            boxShadow: [BoxShadow(color: (_cash ? _cashGreen : const Color(0xFFF7931A)).withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 6))],
          ),
          child: Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12)),
                child: Icon(_cash ? Icons.attach_money_rounded : Icons.currency_bitcoin_rounded, color: _cash ? _cashGreen : const Color(0xFFF7931A), size: 30),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      _cash ? 'NGMY Pay · Cash App' : 'NGMY Pay · Bitcoin',
                      style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w700, fontSize: 11.5),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      label.isEmpty ? 'Not set yet' : label,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: _cash ? 22 : 13, letterSpacing: _cash ? 0.3 : 0),
                    ),
                    const SizedBox(height: 4),
                    Row(
                      children: [
                        const Icon(Icons.open_in_new_rounded, color: Colors.white, size: 13),
                        const SizedBox(width: 4),
                        Text(
                          _cash ? 'Tap to pay \$${formatCurrency(widget.amount)} in Cash App' : 'Tap to open your Bitcoin wallet',
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              IconButton(
                tooltip: 'Copy',
                onPressed: label.isEmpty ? null : () => _copy(label, _cash ? 'Cash App tag' : 'Bitcoin address'),
                icon: const Icon(Icons.copy_rounded, color: Colors.white),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _codeCard() {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: _panel,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFF8B5CF6).withValues(alpha: 0.35)),
      ),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              for (final ch in _code.split(''))
                Container(
                  width: 42,
                  height: 52,
                  margin: const EdgeInsets.symmetric(horizontal: 3),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: [const Color(0xFF8B5CF6).withValues(alpha: 0.28), const Color(0xFF8B5CF6).withValues(alpha: 0.08)],
                    ),
                    border: Border.all(color: const Color(0xFFC4B5FD).withValues(alpha: 0.4)),
                  ),
                  child: Text(ch, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24)),
                ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: Text(
                  'Type it in the note ("For") box when you pay, so admin can match your money to you.',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 11.5, fontWeight: FontWeight.w600, height: 1.35),
                ),
              ),
              const SizedBox(width: 8),
              TextButton.icon(
                onPressed: () => _copy(_code, 'Code'),
                icon: const Icon(Icons.copy_rounded, size: 16),
                label: const Text('Copy', style: TextStyle(fontWeight: FontWeight.w900)),
                style: TextButton.styleFrom(foregroundColor: const Color(0xFFC4B5FD)),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _tagField() {
    return TextField(
      controller: _tag,
      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16),
      decoration: InputDecoration(
        filled: true,
        fillColor: _panel,
        prefixText: _cash ? '\$ ' : null,
        prefixStyle: const TextStyle(color: _green, fontWeight: FontWeight.w900, fontSize: 16),
        hintText: _cash ? 'YourCashTag' : 'bc1…',
        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.3), fontWeight: FontWeight.w700),
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(18), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.08))),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(18), borderSide: const BorderSide(color: _green)),
      ),
    );
  }

  Widget _proofCard() {
    final has = _screenshotRef != null;
    return GestureDetector(
      onTap: _pickScreenshot,
      child: Container(
        padding: EdgeInsets.all(has ? 8 : 22),
        decoration: BoxDecoration(
          color: _panel,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: (has ? _green : Colors.white).withValues(alpha: has ? 0.5 : 0.12), width: 1.4),
        ),
        child: has
            ? Column(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(14),
                    child: ConstrainedBox(
                      constraints: const BoxConstraints(maxHeight: 260),
                      child: NgmyPaymentProofImage(path: _screenshotRef),
                    ),
                  ),
                  const SizedBox(height: 8),
                  const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.check_circle_rounded, color: _green, size: 16),
                      SizedBox(width: 6),
                      Text('Screenshot added · tap to change', style: TextStyle(color: _green, fontWeight: FontWeight.w800, fontSize: 12)),
                    ],
                  ),
                  const SizedBox(height: 4),
                ],
              )
            : Column(
                children: [
                  Container(
                    width: 54,
                    height: 54,
                    decoration: BoxDecoration(shape: BoxShape.circle, color: _green.withValues(alpha: 0.12)),
                    child: const Icon(Icons.add_photo_alternate_rounded, color: _green, size: 28),
                  ),
                  const SizedBox(height: 10),
                  const Text('Add payment screenshot', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                  const SizedBox(height: 3),
                  Text('Show the amount, the date and NGMY Pay', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11.5, fontWeight: FontWeight.w600)),
                ],
              ),
      ),
    );
  }
}
