import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_help_center.dart';
import 'ngmy_nav.dart';

const _accent = Color(0xFF00E5FF);
const _accent2 = Color(0xFF7C3AED);
const _waGreen = Color(0xFF25D366);

/// Help Center — users pick a service, get a request summary, contact admin via WhatsApp or phone.
class NgmyHelpCenterScreen extends StatefulWidget {
  const NgmyHelpCenterScreen({
    super.key,
    required this.configMap,
    required this.clientName,
    this.clientEmail = '',
    this.clientPhone = '',
  });

  final Map<String, dynamic> configMap;
  final String clientName;
  final String clientEmail;
  final String clientPhone;

  @override
  State<NgmyHelpCenterScreen> createState() => _NgmyHelpCenterScreenState();
}

class _NgmyHelpCenterScreenState extends State<NgmyHelpCenterScreen> with SingleTickerProviderStateMixin {
  late NgmyHelpCenterConfig _cfg;
  NgmyHelpCenterService? _selected;
  late final TextEditingController _notesC;
  late final TextEditingController _qtyC;
  late final TextEditingController _priceC;
  late final TextEditingController _receiverC;
  late final AnimationController _pulse;
  String _reference = '';

  @override
  void initState() {
    super.initState();
    _cfg = NgmyHelpCenterConfig.fromMap(widget.configMap);
    _notesC = TextEditingController();
    _qtyC = TextEditingController();
    _priceC = TextEditingController();
    _receiverC = TextEditingController();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _notesC.dispose();
    _qtyC.dispose();
    _priceC.dispose();
    _receiverC.dispose();
    _pulse.dispose();
    super.dispose();
  }

  void _selectService(NgmyHelpCenterService s) {
    HapticFeedback.lightImpact();
    setState(() {
      _selected = s;
      _qtyC.text = s.defaultQty;
      _priceC.text = s.defaultPrice;
      _notesC.clear();
      _receiverC.clear();
      _reference = 'HC-${DateTime.now().year}${DateTime.now().month.toString().padLeft(2, '0')}${DateTime.now().day.toString().padLeft(2, '0')}-${1000 + DateTime.now().millisecond % 9000}';
    });
  }

  bool get _isSendMoney => _selected != null && ngmyHelpCenterIsSendMoney(_selected!);

  bool get _canContact {
    if (_selected == null) return false;
    if (_isSendMoney && _receiverC.text.trim().isEmpty) return false;
    if (_isSendMoney && (double.tryParse(_priceC.text.trim()) ?? 0) <= 0) return false;
    return true;
  }

  String get _message {
    final s = _selected;
    if (s == null) return '';
    return _cfg.buildRequestMessage(
      service: s,
      clientName: widget.clientName,
      clientEmail: widget.clientEmail,
      clientPhone: widget.clientPhone,
      receiverName: _receiverC.text,
      notes: _notesC.text,
      qty: _qtyC.text,
      price: _priceC.text,
      reference: _reference,
    );
  }

  Future<void> _openWhatsApp() async {
    if (!_canContact) {
      _snack(_isSendMoney ? 'Enter receiver name and transfer amount first.' : 'Complete your request first.');
      return;
    }
    final url = _cfg.resolvedWhatsAppUrl(prefilledText: _message);
    if (url.isEmpty) {
      _snack('WhatsApp link is not configured yet.');
      return;
    }
    final uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      _snack('Could not open WhatsApp.');
    }
  }

  Future<void> _callPhone() async {
    if (!_canContact) {
      _snack(_isSendMoney ? 'Enter receiver name and transfer amount first.' : 'Complete your request first.');
      return;
    }
    final digits = _cfg.digitsPhone();
    if (digits.isEmpty) {
      _snack('Phone number is not configured yet.');
      return;
    }
    final uri = Uri.parse('tel:$digits');
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      _snack('Could not start a call.');
    }
  }

  void _snack(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF050810) : const Color(0xFFF0F4FF);
    final services = _cfg.activeServices();

    return Scaffold(
      backgroundColor: bg,
      body: Stack(
        children: [
          Positioned.fill(child: CustomPaint(painter: _HelpCenterBgPainter(isDark: isDark))),
          SafeArea(
            child: Column(
              children: [
                _topBar(isDark),
                Expanded(
                  child: _cfg.enabled
                      ? ListView(
                          padding: const EdgeInsets.fromLTRB(18, 0, 18, 28),
                          children: [
                            _posterCard(isDark),
                            const SizedBox(height: 22),
                            _stepsRow(isDark),
                            const SizedBox(height: 22),
                            Text('CHOOSE A SERVICE', style: TextStyle(fontSize: 10, letterSpacing: 2, fontWeight: FontWeight.w900, color: isDark ? Colors.white54 : Colors.black45)),
                            const SizedBox(height: 12),
                            if (services.isEmpty)
                              _emptyServices(isDark)
                            else
                              ...services.map((s) => Padding(padding: const EdgeInsets.only(bottom: 10), child: _serviceCard(s, isDark))),
                            if (_selected != null) ...[
                              const SizedBox(height: 8),
                              _summaryCard(isDark),
                              const SizedBox(height: 16),
                              _contactButtons(isDark),
                            ],
                          ],
                        )
                      : _disabledState(isDark),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _topBar(bool isDark) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(6, 4, 12, 8),
      child: Row(
        children: [
          IconButton(
            icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 20),
            onPressed: () => NgmyNavigator.pop(context),
            color: isDark ? Colors.white : Colors.black87,
          ),
          Expanded(
            child: Column(
              children: [
                Text(_cfg.title, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                Text(_cfg.subtitle, style: TextStyle(fontSize: 10, color: isDark ? Colors.white54 : Colors.black45)),
              ],
            ),
          ),
          AnimatedBuilder(
            animation: _pulse,
            builder: (_, __) => Container(
              width: 10,
              height: 10,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Color.lerp(const Color(0xFF22C55E), _accent, _pulse.value),
                boxShadow: [BoxShadow(color: _accent.withOpacity(0.35 + _pulse.value * 0.25), blurRadius: 10)],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _posterCard(bool isDark) {
    return AnimatedBuilder(
      animation: _pulse,
      builder: (_, __) => Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(24),
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Color.lerp(const Color(0xFF0F172A), _accent2, 0.15 + _pulse.value * 0.05)!,
              Color.lerp(const Color(0xFF1E1B4B), const Color(0xFF0E7490), 0.2 + _pulse.value * 0.08)!,
            ],
          ),
          border: Border.all(color: _accent.withOpacity(0.35 + _pulse.value * 0.15), width: 1.2),
          boxShadow: [
            BoxShadow(color: _accent2.withOpacity(0.22), blurRadius: 24, offset: const Offset(0, 10)),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: Colors.white.withOpacity(0.08),
                    border: Border.all(color: _accent.withOpacity(0.5)),
                  ),
                  child: const Icon(Icons.volunteer_activism_rounded, color: _accent, size: 22),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    _cfg.posterHeadline,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16, height: 1.25),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 14),
            Text(
              _cfg.posterBody,
              style: TextStyle(color: Colors.white.withOpacity(0.82), fontSize: 12.5, height: 1.45),
            ),
          ],
        ),
      ),
    );
  }

  Widget _stepsRow(bool isDark) {
    final steps = _cfg.steps.isEmpty
        ? const ['Pick a service', 'Review summary', 'Send via WhatsApp or call']
        : _cfg.steps;
    return Row(
      children: List.generate(steps.length, (i) {
        final active = _selected != null ? i <= 1 : i == 0;
        return Expanded(
          child: Row(
            children: [
              Expanded(
                child: Column(
                  children: [
                    Container(
                      width: 28,
                      height: 28,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: active ? const LinearGradient(colors: [_accent, _accent2]) : null,
                        color: active ? null : (isDark ? Colors.white12 : Colors.black12),
                        border: Border.all(color: active ? Colors.transparent : _accent.withOpacity(0.25)),
                      ),
                      child: Text('${i + 1}', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, color: active ? Colors.white : (isDark ? Colors.white54 : Colors.black45))),
                    ),
                    const SizedBox(height: 6),
                    Text(
                      steps[i],
                      textAlign: TextAlign.center,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: 8, height: 1.2, fontWeight: FontWeight.w700, color: isDark ? Colors.white60 : Colors.black54),
                    ),
                  ],
                ),
              ),
              if (i < steps.length - 1)
                Padding(
                  padding: const EdgeInsets.only(bottom: 22),
                  child: Container(width: 12, height: 1, color: _accent.withOpacity(0.35)),
                ),
            ],
          ),
        );
      }),
    );
  }

  Widget _serviceCard(NgmyHelpCenterService s, bool isDark) {
    final selected = _selected?.id == s.id;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => _selectService(s),
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            gradient: selected
                ? LinearGradient(colors: [_accent.withOpacity(0.22), _accent2.withOpacity(0.18)])
                : null,
            color: selected ? null : (isDark ? Colors.white.withOpacity(0.05) : Colors.white),
            border: Border.all(color: selected ? _accent.withOpacity(0.65) : (isDark ? Colors.white12 : Colors.black12), width: selected ? 1.6 : 1),
            boxShadow: selected ? [BoxShadow(color: _accent.withOpacity(0.18), blurRadius: 14)] : null,
          ),
          child: Row(
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  gradient: LinearGradient(colors: [s.id.hashCode.isEven ? _accent2 : _accent, s.id.hashCode.isEven ? _accent : _accent2]),
                ),
                child: Icon(ngmyHelpCenterIconData(s.icon), color: Colors.white, size: 24),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(s.name, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                    if (s.description.isNotEmpty)
                      Text(s.description, style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54)),
                    if (double.tryParse(s.defaultPrice) != null && (double.tryParse(s.defaultPrice) ?? 0) > 0)
                      Padding(
                        padding: const EdgeInsets.only(top: 4),
                        child: Text(
                          ngmyHelpCenterIsSendMoney(s)
                              ? '\$2 fee under \$30 · 5% at \$30+'
                              : 'From \$${double.tryParse(s.defaultPrice)!.toStringAsFixed(2)}',
                          style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: _accent),
                        ),
                      ),
                  ],
                ),
              ),
              Icon(selected ? Icons.check_circle_rounded : Icons.chevron_right_rounded, color: selected ? _accent : (isDark ? Colors.white38 : Colors.black26)),
            ],
          ),
        ),
      ),
    );
  }

  Widget _summaryCard(bool isDark) {
    final s = _selected!;
    final isMoney = ngmyHelpCenterIsSendMoney(s);
    final amount = double.tryParse(_priceC.text.trim()) ?? 0;
    final fee = ngmyHelpCenterMoneyTransferFee(amount);
    final recipientGets = amount - fee;
    final feeLabel = amount < kNgmyHelpCenterMoneyTransferMinAmount
        ? 'Fee (\$2 flat)'
        : 'Fee (5%)';

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: isDark ? const Color(0xFF0C1220) : Colors.white,
        border: Border.all(color: _accent.withOpacity(0.35)),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(isDark ? 0.3 : 0.06), blurRadius: 16)],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              const Icon(Icons.receipt_long_rounded, color: _accent, size: 20),
              const SizedBox(width: 8),
              Text('REQUEST SUMMARY', style: TextStyle(fontSize: 10, letterSpacing: 1.6, fontWeight: FontWeight.w900, color: isDark ? Colors.white70 : Colors.black54)),
              const Spacer(),
              Text('#$_reference', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: isDark ? Colors.white38 : Colors.black38)),
            ],
          ),
          const SizedBox(height: 12),
          _summaryLine('Service', s.name, isDark),
          _summaryLine('Your name', widget.clientName, isDark),
          if (widget.clientEmail.trim().isNotEmpty) _summaryLine('Your email', widget.clientEmail, isDark),
          if (widget.clientPhone.trim().isNotEmpty) _summaryLine('Your phone', widget.clientPhone, isDark),
          if (isMoney) ...[
            const SizedBox(height: 10),
            TextField(
              controller: _receiverC,
              onChanged: (_) => setState(() {}),
              textCapitalization: TextCapitalization.words,
              decoration: InputDecoration(
                labelText: 'Receiver full name *',
                filled: true,
                fillColor: isDark ? Colors.white.withOpacity(0.04) : const Color(0xFFF8FAFC),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
              ),
            ),
            const SizedBox(height: 10),
            _field('Transfer amount (\$) *', _priceC, isDark, onChanged: (_) => setState(() {})),
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                color: const Color(0xFFF59E0B).withOpacity(isDark ? 0.12 : 0.1),
                border: Border.all(color: const Color(0xFFF59E0B).withOpacity(0.45)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    amount < kNgmyHelpCenterMoneyTransferMinAmount
                        ? 'NGMY service fee — \$2 flat (under \$30)'
                        : 'NGMY service fee — 5%',
                    style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: isDark ? Colors.amber : const Color(0xFFB45309)),
                  ),
                  const SizedBox(height: 6),
                  _summaryLine('Transfer', '\$${amount.toStringAsFixed(2)}', isDark),
                  _summaryLine(feeLabel, '\$${fee.toStringAsFixed(2)}', isDark),
                  _summaryLine('Recipient gets', '\$${recipientGets.toStringAsFixed(2)}', isDark),
                ],
              ),
            ),
          ] else ...[
            const SizedBox(height: 10),
            Row(
              children: [
                Expanded(child: _field('Qty', _qtyC, isDark, onChanged: (_) => setState(() {}))),
                const SizedBox(width: 10),
                Expanded(child: _field('Est. rate (\$)', _priceC, isDark, onChanged: (_) => setState(() {}))),
              ],
            ),
          ],
          const SizedBox(height: 10),
          TextField(
            controller: _notesC,
            onChanged: (_) => setState(() {}),
            maxLines: 2,
            decoration: InputDecoration(
              labelText: 'Notes (optional)',
              filled: true,
              fillColor: isDark ? Colors.white.withOpacity(0.04) : const Color(0xFFF8FAFC),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
            ),
          ),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              color: isDark ? Colors.black26 : const Color(0xFFF1F5F9),
              border: Border.all(color: isDark ? Colors.white10 : Colors.black12),
            ),
            child: Text(
              _message,
              style: TextStyle(fontSize: 11, height: 1.4, color: isDark ? Colors.white70 : const Color(0xFF334155), fontFamily: 'monospace'),
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'Nothing is sent from the app — tap WhatsApp or Call to reach us with this message.',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 9, color: isDark ? Colors.white38 : Colors.black45, height: 1.3),
          ),
        ],
      ),
    );
  }

  Widget _summaryLine(String label, String value, bool isDark) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        children: [
          SizedBox(width: 72, child: Text(label, style: TextStyle(fontSize: 10, color: isDark ? Colors.white.withOpacity(0.45) : Colors.black45))),
          Expanded(child: Text(value, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: isDark ? Colors.white : const Color(0xFF0F172A)))),
        ],
      ),
    );
  }

  Widget _field(String label, TextEditingController c, bool isDark, {ValueChanged<String>? onChanged}) {
    return TextField(
      controller: c,
      onChanged: onChanged,
      keyboardType: const TextInputType.numberWithOptions(decimal: true),
      decoration: InputDecoration(
        labelText: label,
        isDense: true,
        filled: true,
        fillColor: isDark ? Colors.white.withOpacity(0.04) : const Color(0xFFF8FAFC),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
      ),
    );
  }

  Widget _contactButtons(bool isDark) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        if (_cfg.whatsappEnabled)
          FilledButton.icon(
            onPressed: _canContact ? _openWhatsApp : null,
            icon: const Icon(Icons.chat_rounded),
            label: Text(_cfg.whatsappButtonLabel, style: const TextStyle(fontWeight: FontWeight.w900)),
            style: FilledButton.styleFrom(
              backgroundColor: _waGreen,
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(vertical: 14),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
          ),
        if (_cfg.whatsappEnabled && _cfg.callEnabled) const SizedBox(height: 10),
        if (_cfg.callEnabled)
          OutlinedButton.icon(
            onPressed: _canContact ? _callPhone : null,
            icon: const Icon(Icons.phone_in_talk_rounded),
            label: Text(_cfg.callButtonLabel, style: const TextStyle(fontWeight: FontWeight.w800)),
            style: OutlinedButton.styleFrom(
              foregroundColor: isDark ? Colors.white : const Color(0xFF0F172A),
              side: BorderSide(color: _accent.withOpacity(0.55)),
              padding: const EdgeInsets.symmetric(vertical: 14),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
          ),
      ],
    );
  }

  Widget _emptyServices(bool isDark) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(16), color: isDark ? Colors.white.withOpacity(0.05) : Colors.white),
      child: Text('Services will appear here once your admin configures them.', textAlign: TextAlign.center, style: TextStyle(color: isDark ? Colors.white60 : Colors.black54)),
    );
  }

  Widget _disabledState(bool isDark) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(28),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.hourglass_empty_rounded, size: 48, color: isDark ? Colors.white38 : Colors.black26),
            const SizedBox(height: 12),
            Text('Help Center is temporarily unavailable.', textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : Colors.black54)),
          ],
        ),
      ),
    );
  }
}

class _HelpCenterBgPainter extends CustomPainter {
  _HelpCenterBgPainter({required this.isDark});
  final bool isDark;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint();
    paint.shader = RadialGradient(
      colors: [const Color(0xFF7C3AED).withOpacity(isDark ? 0.14 : 0.08), Colors.transparent],
    ).createShader(Rect.fromCircle(center: Offset(size.width * 0.85, size.height * 0.08), radius: size.width * 0.45));
    canvas.drawRect(Offset.zero & size, paint);
    paint.shader = RadialGradient(
      colors: [const Color(0xFF00E5FF).withOpacity(isDark ? 0.1 : 0.06), Colors.transparent],
    ).createShader(Rect.fromCircle(center: Offset(size.width * 0.1, size.height * 0.55), radius: size.width * 0.4));
    canvas.drawRect(Offset.zero & size, paint);
  }

  @override
  bool shouldRepaint(covariant _HelpCenterBgPainter oldDelegate) => oldDelegate.isDark != isDark;
}
