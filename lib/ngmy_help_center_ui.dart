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
  late final TextEditingController _receiverPhoneC;
  late final TextEditingController _receiverCountryC;
  late final TextEditingController _senderCashAppC;
  late final TextEditingController _helpTopicC;
  late final TextEditingController _helpDetailsC;
  late final TextEditingController _helpLocationC;
  late final TextEditingController _preferredContactC;
  late final TextEditingController _pickupC;
  late final TextEditingController _deliveryC;
  late final TextEditingController _mileageC;
  late final TextEditingController _jobDescC;
  late final AnimationController _pulse;
  String _reference = '';
  bool _cashAppOpened = false;

  @override
  void initState() {
    super.initState();
    _cfg = NgmyHelpCenterConfig.fromMap(widget.configMap);
    _notesC = TextEditingController();
    _qtyC = TextEditingController();
    _priceC = TextEditingController();
    _receiverC = TextEditingController();
    _receiverPhoneC = TextEditingController();
    _receiverCountryC = TextEditingController();
    _senderCashAppC = TextEditingController();
    _helpTopicC = TextEditingController();
    _helpDetailsC = TextEditingController();
    _helpLocationC = TextEditingController();
    _preferredContactC = TextEditingController();
    _pickupC = TextEditingController();
    _deliveryC = TextEditingController();
    _mileageC = TextEditingController();
    _jobDescC = TextEditingController();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _notesC.dispose();
    _qtyC.dispose();
    _priceC.dispose();
    _receiverC.dispose();
    _receiverPhoneC.dispose();
    _receiverCountryC.dispose();
    _senderCashAppC.dispose();
    _helpTopicC.dispose();
    _helpDetailsC.dispose();
    _helpLocationC.dispose();
    _preferredContactC.dispose();
    _pickupC.dispose();
    _deliveryC.dispose();
    _mileageC.dispose();
    _jobDescC.dispose();
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
      _receiverPhoneC.clear();
      _receiverCountryC.clear();
      _senderCashAppC.clear();
      _helpTopicC.clear();
      _helpDetailsC.clear();
      _helpLocationC.clear();
      _preferredContactC.clear();
      _pickupC.clear();
      _deliveryC.clear();
      _mileageC.clear();
      _jobDescC.clear();
      _cashAppOpened = false;
      _reference = 'HC-${DateTime.now().year}${DateTime.now().month.toString().padLeft(2, '0')}${DateTime.now().day.toString().padLeft(2, '0')}-${1000 + DateTime.now().millisecond % 9000}';
    });
  }

  bool get _isSendMoney => _selected != null && ngmyHelpCenterIsSendMoney(_selected!);

  bool get _isGeneralHelp => _selected != null && ngmyHelpCenterIsGeneralHelp(_selected!);

  bool get _isMovingDelivery => _selected != null && ngmyHelpCenterIsMovingDelivery(_selected!);

  void _resetCashApp() => setState(() => _cashAppOpened = false);

  bool get _canContact {
    final s = _selected;
    if (s == null) return false;
    if (_isSendMoney) {
      if (_receiverC.text.trim().isEmpty) return false;
      if (_receiverPhoneC.text.trim().length < 10) return false;
      if (_receiverCountryC.text.trim().isEmpty) return false;
      if (_senderCashAppC.text.trim().isEmpty) return false;
      if ((double.tryParse(_priceC.text.trim()) ?? 0) <= 0) return false;
      return true;
    }
    if (_isGeneralHelp) {
      return _helpTopicC.text.trim().isNotEmpty && _helpDetailsC.text.trim().length >= 8;
    }
    if (_isMovingDelivery) {
      return _pickupC.text.trim().isNotEmpty &&
          _deliveryC.text.trim().isNotEmpty &&
          (double.tryParse(_mileageC.text.trim()) ?? 0) > 0;
    }
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
      receiverPhone: _receiverPhoneC.text,
      receiverCountry: _receiverCountryC.text,
      senderCashAppTag: _senderCashAppC.text,
      helpTopic: _helpTopicC.text,
      helpDetails: _helpDetailsC.text,
      helpLocation: _helpLocationC.text,
      preferredContact: _preferredContactC.text,
      pickupAddress: _pickupC.text,
      deliveryAddress: _deliveryC.text,
      mileage: _mileageC.text,
      jobDescription: _jobDescC.text,
      notes: _notesC.text,
      qty: _qtyC.text,
      price: _priceC.text,
      reference: _reference,
    );
  }

  bool get _canContactWhatsApp {
    if (!_canContact) return false;
    if (_isSendMoney && _cfg.cashAppEnabled && _cfg.resolvedCashAppUrl().isNotEmpty && !_cashAppOpened) {
      return false;
    }
    return true;
  }

  double get _transferAmount => double.tryParse(_priceC.text.trim()) ?? 0;

  Future<void> _openCashApp() async {
    if (!_canContact) {
      _snack('Fill in receiver details, amount, and your Cash App tag first.');
      return;
    }
    final url = _cfg.resolvedCashAppUrl();
    if (url.isEmpty) {
      _snack('Cash App is not configured yet.');
      return;
    }
    final uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      _snack('Could not open Cash App.');
      return;
    }
    setState(() => _cashAppOpened = true);
    _snack('After you send ${_cfg.cashAppDisplayTag()}, tap Send on WhatsApp.');
  }

  Future<void> _openWhatsApp() async {
    if (!_canContact) {
      if (_isSendMoney) {
        _snack('Fill receiver name, phone, country, amount, and your Cash App tag.');
      } else if (_isGeneralHelp) {
        _snack('Add a topic and describe what you need help with.');
      } else if (_isMovingDelivery) {
        _snack('Enter pickup address, delivery address, and mileage.');
      } else {
        _snack('Complete your request first.');
      }
      return;
    }
    if (_isSendMoney && _cfg.cashAppEnabled && _cfg.resolvedCashAppUrl().isNotEmpty && !_cashAppOpened) {
      _snack('Pay on Cash App first, then send your WhatsApp request.');
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
      if (_isSendMoney) {
        _snack('Fill receiver name, phone, country, amount, and your Cash App tag.');
      } else if (_isGeneralHelp) {
        _snack('Add a topic and describe what you need help with.');
      } else if (_isMovingDelivery) {
        _snack('Enter pickup address, delivery address, and mileage.');
      } else {
        _snack('Complete your request first.');
      }
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
                    if (double.tryParse(s.defaultPrice) != null && (double.tryParse(s.defaultPrice) ?? 0) > 0 && !ngmyHelpCenterIsMovingDelivery(s))
                      Padding(
                        padding: const EdgeInsets.only(top: 4),
                        child: Text(
                          ngmyHelpCenterIsSendMoney(s)
                              ? '\$2 fee under \$30 · 5% at \$30+'
                              : ngmyHelpCenterIsGeneralHelp(s)
                                  ? 'Tell us anything you need'
                                  : 'From \$${double.tryParse(s.defaultPrice)!.toStringAsFixed(2)}',
                          style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: _accent),
                        ),
                      ),
                    if (ngmyHelpCenterIsMovingDelivery(s))
                      const Padding(
                        padding: EdgeInsets.only(top: 4),
                        child: Text(
                          '\$2.50/mi over 10 mi · under 10 mi on WhatsApp',
                          style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: _accent),
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
            _textField('Receiver full name *', _receiverC, isDark, onChanged: (_) => _resetCashApp(), textCapitalization: TextCapitalization.words),
            const SizedBox(height: 10),
            _textField('Receiver phone number *', _receiverPhoneC, isDark, onChanged: (_) => _resetCashApp(), keyboard: TextInputType.phone),
            const SizedBox(height: 10),
            _textField('Destination country *', _receiverCountryC, isDark, onChanged: (_) => _resetCashApp(), textCapitalization: TextCapitalization.words, hint: 'e.g. USA, Ghana, Nigeria'),
            const SizedBox(height: 10),
            _field('Transfer amount (\$) *', _priceC, isDark, onChanged: (_) => _resetCashApp()),
            const SizedBox(height: 10),
            _textField('Your Cash App tag *', _senderCashAppC, isDark, onChanged: (_) => _resetCashApp(), hint: r'$YourTag — so we know who paid'),
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
          ] else if (_isGeneralHelp) ...[
            const SizedBox(height: 10),
            Text(
              'Tell us what you need — add as much detail as you want.',
              style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : const Color(0xFF475569)),
            ),
            const SizedBox(height: 10),
            _textField('What do you need help with? *', _helpTopicC, isDark, textCapitalization: TextCapitalization.sentences),
            const SizedBox(height: 10),
            _textField('Describe your request *', _helpDetailsC, isDark, maxLines: 4, hint: 'Explain the problem, what you tried, and what outcome you want…'),
            const SizedBox(height: 10),
            _textField('Your location (optional)', _helpLocationC, isDark, textCapitalization: TextCapitalization.words),
            const SizedBox(height: 10),
            _textField('Best time to contact you (optional)', _preferredContactC, isDark, hint: 'e.g. Weekdays after 5pm'),
          ] else if (_isMovingDelivery) ...[
            const SizedBox(height: 10),
            _textField('Pickup address *', _pickupC, isDark, maxLines: 2, hint: 'Where items are coming from'),
            const SizedBox(height: 10),
            _textField('Delivery address *', _deliveryC, isDark, maxLines: 2, hint: 'Where items are going'),
            const SizedBox(height: 10),
            _field('Estimated mileage (miles) *', _mileageC, isDark, onChanged: (_) => setState(() {})),
            const SizedBox(height: 10),
            _deliveryFeeBox(isDark),
          ] else ...[
            const SizedBox(height: 10),
            _textField('Job description', _jobDescC, isDark, maxLines: 3, hint: 'What needs to be done?'),
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
            _isSendMoney
                ? 'Step 1: Pay on Cash App · Step 2: Send on WhatsApp or call.'
                : 'Nothing is sent from the app — tap WhatsApp or Call to reach us with this message.',
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

  Widget _deliveryFeeBox(bool isDark) {
    final miles = double.tryParse(_mileageC.text.trim()) ?? 0;
    final est = ngmyHelpCenterDeliveryEstimate(_mileageC.text);
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: _accent.withValues(alpha: isDark ? 0.1 : 0.06),
        border: Border.all(color: _accent.withValues(alpha: 0.4)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text('DELIVERY PRICING', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.2, color: isDark ? _accent : const Color(0xFF0E7490))),
          const SizedBox(height: 6),
          if (miles <= 0)
            Text('Enter mileage to see your estimate.', style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54))
          else if (est != null) ...[
            _summaryLine('Miles', miles.toStringAsFixed(1), isDark),
            _summaryLine('Rate', '\$${kNgmyHelpCenterDeliveryRatePerMile.toStringAsFixed(2)}/mi', isDark),
            _summaryLine('Est. fee', '\$${est.toStringAsFixed(2)}', isDark),
          ] else ...[
            _summaryLine('Miles', miles.toStringAsFixed(1), isDark),
            Text(
              '10 miles or less — we will confirm your price on WhatsApp.',
              style: TextStyle(fontSize: 11, height: 1.35, fontWeight: FontWeight.w600, color: isDark ? Colors.amber.shade200 : const Color(0xFFB45309)),
            ),
          ],
        ],
      ),
    );
  }

  Widget _textField(
    String label,
    TextEditingController c,
    bool isDark, {
    ValueChanged<String>? onChanged,
    TextInputType? keyboard,
    TextCapitalization textCapitalization = TextCapitalization.none,
    int maxLines = 1,
    String? hint,
  }) {
    return TextField(
      controller: c,
      onChanged: onChanged ?? (_) => setState(() {}),
      keyboardType: keyboard,
      textCapitalization: textCapitalization,
      maxLines: maxLines,
      decoration: InputDecoration(
        labelText: label,
        hintText: hint,
        filled: true,
        fillColor: isDark ? Colors.white.withOpacity(0.04) : const Color(0xFFF8FAFC),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
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
    final showCashApp = _isSendMoney && _cfg.cashAppEnabled && _cfg.resolvedCashAppUrl().isNotEmpty;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        if (showCashApp) ...[
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              color: const Color(0xFF00D632).withValues(alpha: isDark ? 0.12 : 0.08),
              border: Border.all(color: const Color(0xFF00D632).withValues(alpha: 0.45)),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Icon(Icons.info_outline_rounded, size: 18, color: Color(0xFF00A82D)),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    _cfg.sendMoneyPayFirstNote(),
                    style: TextStyle(fontSize: 11, height: 1.4, fontWeight: FontWeight.w600, color: isDark ? Colors.greenAccent.shade100 : const Color(0xFF166534)),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 10),
          FilledButton.icon(
            onPressed: _canContact ? _openCashApp : null,
            icon: const Icon(Icons.payments_rounded),
            label: Text(
              _cfg.cashAppButtonLabelForAmount(_transferAmount),
              style: const TextStyle(fontWeight: FontWeight.w900),
            ),
            style: FilledButton.styleFrom(
              backgroundColor: const Color(0xFF00D632),
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(vertical: 14),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
          ),
          if (_cfg.whatsappEnabled) const SizedBox(height: 10),
        ],
        if (_cfg.whatsappEnabled)
          FilledButton.icon(
            onPressed: _canContactWhatsApp ? _openWhatsApp : null,
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
