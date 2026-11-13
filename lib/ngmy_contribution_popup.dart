import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

// The contribution pop-up: it comes up in the middle of the screen when a member of a state that has a contribution going opens the app and has not
// contributed yet. Two buttons at the top (go to the Civic Registry, close), then what the contribution is for and where to send it (tap or copy).

/// Shows the pop-up on the root navigator. [onOpenRegistry] is called when the person taps the Civic Registry button (the pop-up closes first).
Future<void> showNgmyContributionPopup(
  BuildContext context, {
  required String state,
  required String purpose,
  String scopeLabel = '',
  String cashApp = '',
  String zelle = '',
  String phone = '',
  required VoidCallback onOpenRegistry,
}) {
  return showGeneralDialog<void>(
    context: context,
    useRootNavigator: true,
    barrierDismissible: false,
    barrierLabel: 'Contribution',
    barrierColor: Colors.black.withValues(alpha: 0.72),
    transitionDuration: const Duration(milliseconds: 380),
    pageBuilder: (ctx, a, b) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, secondary, _) {
      final k = Curves.easeOutBack.transform(anim.value.clamp(0.0, 1.0));
      return Opacity(
        opacity: anim.value.clamp(0.0, 1.0),
        child: Transform.scale(
          scale: 0.8 + 0.2 * k,
          child: NgmyContributionPopupCard(state: state, purpose: purpose, scopeLabel: scopeLabel, cashApp: cashApp, zelle: zelle, phone: phone, onOpenRegistry: () {
            Navigator.of(ctx, rootNavigator: true).pop();
            onOpenRegistry();
          }, onClose: () => Navigator.of(ctx, rootNavigator: true).pop()),
        ),
      );
    },
  );
}

class NgmyContributionPopupCard extends StatefulWidget {
  const NgmyContributionPopupCard({super.key, required this.state, required this.purpose, this.scopeLabel = '', this.cashApp = '', this.zelle = '', this.phone = '', required this.onOpenRegistry, required this.onClose});
  final String state, purpose, scopeLabel, cashApp, zelle, phone;
  final VoidCallback onOpenRegistry, onClose;

  @override
  State<NgmyContributionPopupCard> createState() => _NgmyContributionPopupCardState();
}

class _NgmyContributionPopupCardState extends State<NgmyContributionPopupCard> with SingleTickerProviderStateMixin {
  late final AnimationController _glow = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
  String _copied = '';

  static const _gold = Color(0xFFFACC15);
  static const _violet = Color(0xFF8B5CF6);

  @override
  void dispose() {
    _glow.dispose();
    super.dispose();
  }

  Future<void> _copy(String key, String text) async {
    await Clipboard.setData(ClipboardData(text: text.trim()));
    if (!mounted) return;
    setState(() => _copied = key);
    Future<void>.delayed(const Duration(milliseconds: 1600), () {
      if (mounted && _copied == key) setState(() => _copied = '');
    });
  }

  Future<void> _open(Uri uri) async {
    try {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    } catch (_) {}
  }

  Widget _row({required String key, required IconData icon, required String title, required String value, required Color color, VoidCallback? onTap, String hint = ''}) {
    final copied = _copied == key;
    return Padding(
      padding: const EdgeInsets.only(bottom: 9),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(18),
          onTap: onTap ?? () => _copy(key, value),
          child: Container(
            padding: const EdgeInsets.fromLTRB(10, 9, 6, 9),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.07),
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: color.withValues(alpha: 0.55), width: 1.2),
            ),
            child: Row(children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [color, Color.lerp(color, Colors.black, 0.4)!])),
                child: Icon(icon, color: Colors.white, size: 21),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(title, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 11.5, letterSpacing: 0.4)),
                  Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
                  if (hint.isNotEmpty) Text(hint, style: const TextStyle(color: Colors.white38, fontSize: 10.5)),
                ]),
              ),
              IconButton(
                key: Key('contribution-copy-$key'),
                tooltip: 'Copy',
                onPressed: () => _copy(key, value),
                icon: Icon(copied ? Icons.check_circle_rounded : Icons.copy_rounded, color: copied ? const Color(0xFF4ADE80) : Colors.white70, size: 22),
              ),
            ]),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final cash = widget.cashApp.trim(), zelle = widget.zelle.trim(), phone = widget.phone.trim();
    final handle = cash.startsWith(r'$') ? cash.substring(1) : cash;
    return Material(
      type: MaterialType.transparency,
      child: SafeArea(
        child: Center(
          // Never touching the sides: always a good space left and right, and in the middle of the screen.
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 26, vertical: 24),
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 400),
              child: AnimatedBuilder(
                animation: _glow,
                builder: (context, child) => Container(
                  key: const Key('contribution-popup'),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(32),
                    gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF241B4B), Color(0xFF131632), Color(0xFF0E1124)]),
                    border: Border.all(color: Color.lerp(_violet, _gold, _glow.value)!.withValues(alpha: 0.9), width: 2),
                    boxShadow: [BoxShadow(color: Color.lerp(_violet, _gold, _glow.value)!.withValues(alpha: 0.35), blurRadius: 36, spreadRadius: 1)],
                  ),
                  child: child,
                ),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
                  child: SingleChildScrollView(
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      // The two buttons at the top.
                      Row(children: [
                        Expanded(
                          child: GestureDetector(
                            key: const Key('contribution-open-registry'),
                            onTap: widget.onOpenRegistry,
                            child: Container(
                              padding: const EdgeInsets.symmetric(vertical: 12),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(22),
                                gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFF6D28D9)]),
                                boxShadow: [BoxShadow(color: _violet.withValues(alpha: 0.5), blurRadius: 14, offset: const Offset(0, 4))],
                              ),
                              child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                                Icon(Icons.how_to_vote_rounded, color: Colors.white, size: 19),
                                SizedBox(width: 8),
                                Flexible(child: Text('Open Civic Registry', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14))),
                              ]),
                            ),
                          ),
                        ),
                        const SizedBox(width: 10),
                        GestureDetector(
                          key: const Key('contribution-close'),
                          onTap: widget.onClose,
                          child: Container(
                            width: 46,
                            height: 46,
                            decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.1), border: Border.all(color: Colors.white30)),
                            child: const Icon(Icons.close_rounded, color: Colors.white, size: 24),
                          ),
                        ),
                      ]),
                      const SizedBox(height: 18),
                      // The heart: a round badge that glows.
                      Container(
                        width: 78,
                        height: 78,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          gradient: const RadialGradient(colors: [Color(0xFFFDE68A), Color(0xFFF59E0B)]),
                          boxShadow: [BoxShadow(color: _gold.withValues(alpha: 0.25 + 0.3 * _glow.value), blurRadius: 24, spreadRadius: 2)],
                        ),
                        child: const Icon(Icons.volunteer_activism_rounded, color: Color(0xFF3B2A06), size: 40),
                      ),
                      const SizedBox(height: 12),
                      Text('Contribution open in ${widget.state}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20, height: 1.15)),
                      if (widget.scopeLabel.isNotEmpty) ...[
                        const SizedBox(height: 6),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                          decoration: BoxDecoration(color: _violet.withValues(alpha: 0.25), borderRadius: BorderRadius.circular(14), border: Border.all(color: _violet.withValues(alpha: 0.6))),
                          child: Text(widget.scopeLabel, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 11.5)),
                        ),
                      ],
                      const SizedBox(height: 12),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(13),
                        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(20), border: Border.all(color: _gold.withValues(alpha: 0.45))),
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          const Text('WHAT IT IS FOR', style: TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 0.8)),
                          const SizedBox(height: 4),
                          Text(widget.purpose.trim().isEmpty ? 'Community contribution' : widget.purpose.trim(), style: const TextStyle(color: Colors.white, fontSize: 15.5, fontWeight: FontWeight.w700, height: 1.3)),
                        ]),
                      ),
                      const SizedBox(height: 14),
                      const Align(alignment: Alignment.centerLeft, child: Padding(padding: EdgeInsets.only(left: 4, bottom: 8), child: Text('SEND YOUR CONTRIBUTION TO', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 0.8)))),
                      if (cash.isNotEmpty)
                        _row(key: 'cash', icon: Icons.attach_money_rounded, title: 'CASH APP', value: cash, color: const Color(0xFF22C55E), hint: 'Tap to open Cash App', onTap: () => _open(Uri.parse('https://cash.app/\$$handle'))),
                      if (zelle.isNotEmpty) _row(key: 'zelle', icon: Icons.account_balance_wallet_rounded, title: 'ZELLE', value: zelle, color: const Color(0xFFA78BFA), hint: 'Tap to copy'),
                      if (phone.isNotEmpty) _row(key: 'phone', icon: Icons.call_rounded, title: 'CALL FOR HELP', value: phone, color: const Color(0xFF38BDF8), hint: 'Tap to call', onTap: () => _open(Uri.parse('tel:$phone'))),
                      const SizedBox(height: 4),
                      const Text('When you have contributed, this message stops coming. You can always see it in the Civic Registry.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white38, fontSize: 11, height: 1.3)),
                    ]),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
