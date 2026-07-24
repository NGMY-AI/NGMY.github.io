import 'dart:async';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_help_center.dart';
import 'ngmy_help_center_phone.dart';
import 'ngmy_help_center_saved_recipients_dialog.dart';
import 'ngmy_help_center_send_money_delivery_status.dart';
import 'ngmy_help_center_send_money_receipt.dart';
import 'ngmy_help_center_send_money_receipt_templates.dart';
import 'ngmy_help_center_send_money_store.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_download.dart';

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
    this.isAdmin = false,
  });

  final Map<String, dynamic> configMap;
  final String clientName;
  final String clientEmail;
  final String clientPhone;
  final bool isAdmin;

  @override
  State<NgmyHelpCenterScreen> createState() => _NgmyHelpCenterScreenState();
}

class _NgmyHelpCenterScreenState extends State<NgmyHelpCenterScreen> with TickerProviderStateMixin {
  late NgmyHelpCenterConfig _cfg;
  NgmyHelpCenterService? _selected;
  late final TextEditingController _notesC;
  late final TextEditingController _qtyC;
  late final TextEditingController _priceC;
  late final TextEditingController _receiverC;
  late final TextEditingController _receiverPhoneC;
  late final TextEditingController _receiverCountryC;
  late final TextEditingController _senderCashAppC;
  late final TextEditingController _senderPhoneC;
  late final TextEditingController _helpTopicC;
  late final TextEditingController _helpDetailsC;
  late final TextEditingController _helpLocationC;
  late final TextEditingController _preferredContactC;
  late final TextEditingController _pickupC;
  late final TextEditingController _deliveryC;
  late final TextEditingController _mileageC;
  late final TextEditingController _jobDescC;
  late final TextEditingController _serviceAddressC;
  late final TextEditingController _fixtureTypeC;
  late final TextEditingController _problemDetailsC;
  late final TextEditingController _preferredScheduleC;
  late final TextEditingController _urgencyC;
  late final AnimationController _pulse;
  late final AnimationController _enter;
  String _reference = '';
  bool _cashAppOpened = false;
  NgmyHelpCenterSenderInfo _savedSender = const NgmyHelpCenterSenderInfo();
  List<NgmyHelpCenterSavedRecipient> _savedRecipients = const [];
  String _receiptTemplateId = 'modern';
  Timer? _senderPhoneSaveTimer;

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
    _senderPhoneC = TextEditingController();
    _helpTopicC = TextEditingController();
    _helpDetailsC = TextEditingController();
    _helpLocationC = TextEditingController();
    _preferredContactC = TextEditingController();
    _pickupC = TextEditingController();
    _deliveryC = TextEditingController();
    _mileageC = TextEditingController();
    _jobDescC = TextEditingController();
    _serviceAddressC = TextEditingController();
    _fixtureTypeC = TextEditingController();
    _problemDetailsC = TextEditingController();
    _preferredScheduleC = TextEditingController();
    _urgencyC = TextEditingController();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _enter = AnimationController(vsync: this, duration: const Duration(milliseconds: 900))..forward();
    _loadSendMoneyLocalData();
  }

  Future<void> _loadSendMoneyLocalData() async {
    final sender = await ngmyLoadHelpCenterSenderInfo();
    final saved = await ngmyLoadHelpCenterSavedRecipients();
    final templateId = await ngmyLoadHelpCenterReceiptTemplateId();
    if (!mounted) return;
    setState(() {
      _savedSender = sender;
      _savedRecipients = saved;
      _receiptTemplateId = templateId;
      final phone = sender.phone.trim().isNotEmpty
          ? sender.phone.trim()
          : widget.clientPhone.trim();
      if (phone.isNotEmpty && _senderPhoneC.text.trim().isEmpty) {
        _senderPhoneC.text = ngmyHelpCenterFormatSenderPhone(phone);
      }
    });
  }

  void _scheduleSenderPhoneSave() {
    _senderPhoneSaveTimer?.cancel();
    _senderPhoneSaveTimer = Timer(const Duration(milliseconds: 400), () {
      unawaited(_persistSenderInfo());
    });
  }

  NgmyHelpCenterPhonePattern get _senderPhonePattern => NgmyHelpCenterPhonePattern.usSender;

  NgmyHelpCenterPhonePattern get _receiverPhonePattern =>
      ngmyHelpCenterPhonePatternForCountry(_receiverCountryC.text.trim());

  String get _fullReceiverPhone =>
      ngmyHelpCenterFormatReceiverFull(_receiverPhoneC.text, _receiverPhonePattern);

  void _onReceiverCountryChanged(String value) {
    _resetCashApp();
    final local = ngmyHelpCenterReceiverLocalFromStored(_receiverPhoneC.text, value);
    _receiverPhoneC.text = local;
  }

  @override
  void dispose() {
    _senderPhoneSaveTimer?.cancel();
    _notesC.dispose();
    _qtyC.dispose();
    _priceC.dispose();
    _receiverC.dispose();
    _receiverPhoneC.dispose();
    _receiverCountryC.dispose();
    _senderCashAppC.dispose();
    _senderPhoneC.dispose();
    _helpTopicC.dispose();
    _helpDetailsC.dispose();
    _helpLocationC.dispose();
    _preferredContactC.dispose();
    _pickupC.dispose();
    _deliveryC.dispose();
    _mileageC.dispose();
    _jobDescC.dispose();
    _serviceAddressC.dispose();
    _fixtureTypeC.dispose();
    _problemDetailsC.dispose();
    _preferredScheduleC.dispose();
    _urgencyC.dispose();
    _pulse.dispose();
    _enter.dispose();
    super.dispose();
  }

  Animation<double> _stagger(double begin, double end) {
    return CurvedAnimation(
      parent: _enter,
      curve: Interval(begin, end, curve: Curves.easeOutCubic),
    );
  }

  Widget _enterBlock({required double begin, required double end, required Widget child, Offset from = const Offset(0, 0.08)}) {
    final anim = _stagger(begin, end);
    return FadeTransition(
      opacity: anim,
      child: SlideTransition(
        position: Tween<Offset>(begin: from, end: Offset.zero).animate(anim),
        child: child,
      ),
    );
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
      _serviceAddressC.clear();
      _fixtureTypeC.clear();
      _problemDetailsC.clear();
      _preferredScheduleC.clear();
      _urgencyC.clear();
      _cashAppOpened = false;
      _reference = 'HC-${DateTime.now().year}${DateTime.now().month.toString().padLeft(2, '0')}${DateTime.now().day.toString().padLeft(2, '0')}-${1000 + DateTime.now().millisecond % 9000}';
    });
  }

  bool get _isSendMoney => _selected != null && ngmyHelpCenterIsSendMoney(_selected!);

  bool get _isGeneralHelp => _selected != null && ngmyHelpCenterIsGeneralHelp(_selected!);

  bool get _isMovingDelivery => _selected != null && ngmyHelpCenterIsMovingDelivery(_selected!);

  bool get _isHouseFixture => _selected != null && ngmyHelpCenterIsHouseFixture(_selected!);

  void _touchForm() => setState(() {});

  void _resetCashApp() => setState(() => _cashAppOpened = false);

  String get _resolvedSenderName {
    final fromWidget = widget.clientName.trim();
    if (fromWidget.isNotEmpty) return fromWidget;
    return _savedSender.name.trim();
  }

  String get _resolvedSenderPhone {
    final typed = _senderPhoneC.text.trim();
    if (typed.isNotEmpty && typed != '+') return typed;
    final fromWidget = widget.clientPhone.trim();
    if (fromWidget.isNotEmpty) return fromWidget;
    return _savedSender.phone.trim();
  }

  String get _resolvedSenderEmail {
    final fromWidget = widget.clientEmail.trim();
    if (fromWidget.isNotEmpty) return fromWidget;
    return _savedSender.email.trim();
  }

  Future<void> _persistSenderInfo() async {
    final info = NgmyHelpCenterSenderInfo(
      name: _resolvedSenderName,
      phone: _resolvedSenderPhone,
      email: _resolvedSenderEmail,
    );
    _savedSender = info;
    await ngmySaveHelpCenterSenderInfo(info);
  }

  bool get _canShowReceipt {
    if (!_isSendMoney) return false;
    if (_receiverC.text.trim().isEmpty) return false;
    if (_receiverCountryC.text.trim().isEmpty) return false;
    if (_receiverPhonePattern.dialCode.isEmpty) return false;
    if (ngmyHelpCenterReceiverLocalDigitCount(_receiverPhoneC.text) < 9) return false;
    if (_transferAmount <= 0) return false;
    if (ngmyHelpCenterDigitsOnly(_resolvedSenderPhone).length < 6) return false;
    return true;
  }

  NgmyHelpCenterSendMoneyReceipt _buildReceipt() {
    return NgmyHelpCenterSendMoneyReceipt.fromForm(
      reference: _reference,
      senderName: _resolvedSenderName,
      senderPhone: _resolvedSenderPhone,
      senderEmail: _resolvedSenderEmail,
      receiverName: _receiverC.text,
      receiverPhone: _fullReceiverPhone,
      receiverCountry: _receiverCountryC.text,
      transferAmountText: _priceC.text,
      serviceName: _selected?.name ?? 'Send Money',
    );
  }

  Future<void> _saveSavedRecipientFromForm() async {
    await ngmySaveHelpCenterSavedRecipient(
      receiverName: _receiverC.text,
      receiverPhone: _fullReceiverPhone,
      receiverCountry: _receiverCountryC.text,
    );
    final saved = await ngmyLoadHelpCenterSavedRecipients();
    if (mounted) setState(() => _savedRecipients = saved);
  }

  void _applySavedRecipient(NgmyHelpCenterSavedRecipient entry) {
    HapticFeedback.lightImpact();
    setState(() {
      _receiverC.text = entry.receiverName;
      _receiverPhoneC.text = ngmyHelpCenterReceiverLocalFromStored(
        entry.receiverPhone,
        entry.receiverCountry,
      );
      _receiverCountryC.text = entry.receiverCountry;
      _cashAppOpened = false;
    });
  }

  Future<void> _openSendMoneyReceipt() async {
    if (!_isSendMoney || !widget.isAdmin) return;
    HapticFeedback.lightImpact();
    await _persistSenderInfo();
    final receipt = _buildReceipt();
    if (!mounted) return;
    await showDialog<void>(
      context: context,
      barrierColor: Colors.black.withValues(alpha: 0.72),
      builder: (ctx) => _SendMoneyReceiptDialog(
        receipt: receipt,
        templateId: _receiptTemplateId,
        isDark: Theme.of(context).brightness == Brightness.dark,
        isComplete: _canShowReceipt,
        savedRecipients: _savedRecipients,
        onApplyRecipient: (entry) {
          _applySavedRecipient(entry);
          Navigator.pop(ctx);
        },
        onTemplateChanged: (id) async {
          _receiptTemplateId = id;
          await ngmySaveHelpCenterReceiptTemplateId(id);
          if (mounted) setState(() {});
        },
        onSaveRecipient: () async {
          await _saveSavedRecipientFromForm();
          if (mounted) _snack('Recipient saved — tap the people icon anytime to reuse.');
        },
        onListChanged: () async {
          final saved = await ngmyLoadHelpCenterSavedRecipients();
          if (mounted) setState(() => _savedRecipients = saved);
        },
      ),
    );
  }

  bool get _canContact {
    final s = _selected;
    if (s == null) return false;
    if (_isSendMoney) {
      if (_receiverC.text.trim().isEmpty) return false;
      if (_receiverCountryC.text.trim().isEmpty) return false;
      if (_receiverPhonePattern.dialCode.isEmpty) return false;
      if (ngmyHelpCenterReceiverLocalDigitCount(_receiverPhoneC.text) < 9) return false;
      if (_senderCashAppC.text.trim().isEmpty) return false;
      if (ngmyHelpCenterDigitsOnly(_resolvedSenderPhone).length < 6) return false;
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
    if (_isHouseFixture) {
      return _serviceAddressC.text.trim().isNotEmpty &&
          _fixtureTypeC.text.trim().isNotEmpty &&
          _jobDescC.text.trim().length >= 8 &&
          _problemDetailsC.text.trim().isNotEmpty;
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
      receiverPhone: _fullReceiverPhone,
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
      serviceAddress: _serviceAddressC.text,
      fixtureType: _fixtureTypeC.text,
      problemDetails: _problemDetailsC.text,
      preferredSchedule: _preferredScheduleC.text,
      urgency: _urgencyC.text,
      notes: _notesC.text,
      qty: _qtyC.text,
      price: _priceC.text,
      reference: _reference,
    );
  }

  /// Send Money: WhatsApp unlocks only after Pay on Cash App. Other services: unlock when form is complete.
  bool get _canContactWhatsApp {
    if (!_canContact) return false;
    if (_isSendMoney && !_cashAppOpened) return false;
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
    unawaited(_persistSenderInfo());
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
      } else if (_isHouseFixture) {
        _snack('Enter service address, fixture type, job description, and problem details.');
      } else {
        _snack('Complete your request first.');
      }
      return;
    }
    if (_isSendMoney && !_cashAppOpened) {
      _snack('Tap Pay on Cash App first — then Send on WhatsApp will turn on.');
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
      } else if (_isHouseFixture) {
        _snack('Enter service address, fixture type, job description, and problem details.');
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
                            _enterBlock(begin: 0.0, end: 0.35, child: _posterCard(isDark)),
                            const SizedBox(height: 22),
                            _enterBlock(begin: 0.12, end: 0.48, child: _stepsRow(isDark)),
                            const SizedBox(height: 22),
                            _enterBlock(
                              begin: 0.2,
                              end: 0.55,
                              child: Text('CHOOSE A SERVICE', style: TextStyle(fontSize: 10, letterSpacing: 2, fontWeight: FontWeight.w900, color: isDark ? Colors.white54 : Colors.black45)),
                            ),
                            const SizedBox(height: 12),
                            if (services.isEmpty)
                              _enterBlock(begin: 0.25, end: 0.6, child: _emptyServices(isDark))
                            else
                              GridView.builder(
                                shrinkWrap: true,
                                physics: const NeverScrollableScrollPhysics(),
                                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                                  crossAxisCount: 2,
                                  mainAxisSpacing: 10,
                                  crossAxisSpacing: 10,
                                  childAspectRatio: 0.92,
                                ),
                                itemCount: services.length,
                                itemBuilder: (_, i) {
                                  final t0 = (0.22 + i * 0.06).clamp(0.0, 0.85);
                                  final t1 = (t0 + 0.28).clamp(0.0, 1.0);
                                  return _enterBlock(
                                    begin: t0,
                                    end: t1,
                                    from: Offset(i.isEven ? -0.06 : 0.06, 0.1),
                                    child: _serviceGridTile(services[i], isDark),
                                  );
                                },
                              ),
                            AnimatedSwitcher(
                              duration: const Duration(milliseconds: 380),
                              switchInCurve: Curves.easeOutCubic,
                              switchOutCurve: Curves.easeInCubic,
                              transitionBuilder: (child, anim) => FadeTransition(
                                opacity: anim,
                                child: SlideTransition(
                                  position: Tween<Offset>(begin: const Offset(0, 0.12), end: Offset.zero).animate(anim),
                                  child: child,
                                ),
                              ),
                              child: _selected == null
                                  ? const SizedBox.shrink(key: ValueKey('hc-none'))
                                  : Column(
                                      key: ValueKey('hc-${_selected!.id}'),
                                      children: [
                                        const SizedBox(height: 8),
                                        _summaryCard(isDark),
                                        const SizedBox(height: 16),
                                        _contactButtons(isDark),
                                      ],
                                    ),
                            ),
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

  Widget _serviceGridTile(NgmyHelpCenterService s, bool isDark) {
    final selected = _selected?.id == s.id;
    final isMoney = ngmyHelpCenterIsSendMoney(s);
    return AnimatedScale(
      scale: selected ? 1.04 : 1.0,
      duration: const Duration(milliseconds: 240),
      curve: Curves.easeOutBack,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => _selectService(s),
          borderRadius: BorderRadius.circular(18),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 240),
            curve: Curves.easeOutCubic,
            padding: const EdgeInsets.fromLTRB(10, 12, 10, 10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18),
              gradient: selected
                  ? LinearGradient(colors: [_accent.withOpacity(0.22), _accent2.withOpacity(0.18)])
                  : null,
              color: selected ? null : (isDark ? Colors.white.withOpacity(0.05) : Colors.white),
              border: Border.all(color: selected ? _accent.withOpacity(0.65) : (isDark ? Colors.white12 : Colors.black12), width: selected ? 1.6 : 1),
              boxShadow: selected ? [BoxShadow(color: _accent.withOpacity(0.22), blurRadius: 16)] : null,
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                AnimatedBuilder(
                  animation: _pulse,
                  builder: (_, __) => Transform.scale(
                    scale: selected ? 1.0 + _pulse.value * 0.04 : 1.0,
                    child: Container(
                      width: 46,
                      height: 46,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(14),
                        gradient: LinearGradient(
                          colors: isMoney
                              ? [const Color(0xFF059669), const Color(0xFF10B981)]
                              : [s.id.hashCode.isEven ? _accent2 : _accent, s.id.hashCode.isEven ? _accent : _accent2],
                        ),
                        boxShadow: selected
                            ? [BoxShadow(color: _accent.withOpacity(0.35 + _pulse.value * 0.2), blurRadius: 12)]
                            : null,
                      ),
                      child: Icon(ngmyHelpCenterServiceIcon(s), color: Colors.white, size: 24),
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  s.name,
                  textAlign: TextAlign.center,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12, height: 1.15, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                ),
                if (s.description.isNotEmpty) ...[
                  const SizedBox(height: 4),
                  Text(
                    s.description,
                    textAlign: TextAlign.center,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 9, height: 1.2, color: isDark ? Colors.white60 : Colors.black54),
                  ),
                ],
                AnimatedOpacity(
                  opacity: selected ? 1 : 0,
                  duration: const Duration(milliseconds: 200),
                  child: const Padding(
                    padding: EdgeInsets.only(top: 6),
                    child: Icon(Icons.check_circle_rounded, size: 16, color: _accent),
                  ),
                ),
              ],
            ),
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
        : 'Fee (7%)';

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
              Expanded(
                child: isMoney
                    ? widget.isAdmin
                        ? Material(
                            color: Colors.transparent,
                            child: InkWell(
                              onTap: _openSendMoneyReceipt,
                              borderRadius: BorderRadius.circular(10),
                              child: Padding(
                                padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 2),
                                child: Row(
                                  children: [
                                    const Icon(Icons.receipt_long_rounded, color: _accent, size: 20),
                                    const SizedBox(width: 8),
                                    Text(
                                      'REQUEST SUMMARY',
                                      style: TextStyle(
                                        fontSize: 10,
                                        letterSpacing: 1.6,
                                        fontWeight: FontWeight.w900,
                                        color: isDark ? Colors.white70 : Colors.black54,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          )
                        : Padding(
                            padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 2),
                            child: Row(
                              children: [
                                const Icon(Icons.receipt_long_rounded, color: _accent, size: 20),
                                const SizedBox(width: 8),
                                Text(
                                  'REQUEST SUMMARY',
                                  style: TextStyle(
                                    fontSize: 10,
                                    letterSpacing: 1.6,
                                    fontWeight: FontWeight.w900,
                                    color: isDark ? Colors.white70 : Colors.black54,
                                  ),
                                ),
                              ],
                            ),
                          )
                    : Row(
                        children: [
                          const Icon(Icons.receipt_long_rounded, color: _accent, size: 20),
                          const SizedBox(width: 8),
                          Text(
                            'REQUEST SUMMARY',
                            style: TextStyle(
                              fontSize: 10,
                              letterSpacing: 1.6,
                              fontWeight: FontWeight.w900,
                              color: isDark ? Colors.white70 : Colors.black54,
                            ),
                          ),
                        ],
                      ),
              ),
              Text('#$_reference', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: isDark ? Colors.white38 : Colors.black38)),
            ],
          ),
          const SizedBox(height: 12),
          _summaryLine('Service', s.name, isDark),
          _summaryLine('Your name', isMoney ? _resolvedSenderName : widget.clientName, isDark),
          if ((isMoney ? _resolvedSenderEmail : widget.clientEmail).trim().isNotEmpty)
            _summaryLine('Your email', isMoney ? _resolvedSenderEmail : widget.clientEmail, isDark),
          if ((isMoney ? _resolvedSenderPhone : widget.clientPhone).trim().isNotEmpty)
            _summaryLine('Your phone', isMoney ? _resolvedSenderPhone : widget.clientPhone, isDark),
          if (isMoney) ...[
            const SizedBox(height: 10),
            _phoneField(
              'Your phone *',
              _senderPhoneC,
              isDark,
              pattern: _senderPhonePattern,
              onChanged: (_) {
                _resetCashApp();
                _scheduleSenderPhoneSave();
              },
            ),
            const SizedBox(height: 10),
            _textField('Receiver full name *', _receiverC, isDark, onChanged: (_) => _resetCashApp(), textCapitalization: TextCapitalization.words),
            const SizedBox(height: 10),
            _textField(
              'Destination country *',
              _receiverCountryC,
              isDark,
              onChanged: _onReceiverCountryChanged,
              textCapitalization: TextCapitalization.words,
              hint: 'e.g. Tanzania, Ghana, DRC Congo, Kenya, Nigeria',
            ),
            const SizedBox(height: 10),
            _receiverPhoneField(isDark),
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
                        ? 'NGMY service fee \$2 flat (under \$30)'
                        : 'NGMY service fee 7%',
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
            _textField('What do you need help with? *', _helpTopicC, isDark, onChanged: (_) => _touchForm(), textCapitalization: TextCapitalization.sentences),
            const SizedBox(height: 10),
            _textField('Describe your request *', _helpDetailsC, isDark, maxLines: 4, onChanged: (_) => _touchForm(), hint: 'Explain the problem, what you tried, and what outcome you want…'),
            const SizedBox(height: 10),
            _textField('Your location (optional)', _helpLocationC, isDark, onChanged: (_) => _touchForm(), textCapitalization: TextCapitalization.words),
            const SizedBox(height: 10),
            _textField('Best time to contact you (optional)', _preferredContactC, isDark, onChanged: (_) => _touchForm(), hint: 'e.g. Weekdays after 5pm'),
          ] else if (_isMovingDelivery) ...[
            const SizedBox(height: 10),
            _textField('Pickup address *', _pickupC, isDark, maxLines: 2, onChanged: (_) => _touchForm(), hint: 'Where items are coming from'),
            const SizedBox(height: 10),
            _textField('Delivery address *', _deliveryC, isDark, maxLines: 2, onChanged: (_) => _touchForm(), hint: 'Where items are going'),
            const SizedBox(height: 10),
            _field('Estimated mileage (miles) *', _mileageC, isDark, onChanged: (_) => _touchForm()),
            const SizedBox(height: 10),
            _deliveryFeeBox(isDark),
          ] else if (_isHouseFixture) ...[
            const SizedBox(height: 10),
            Text(
              'Tell us about the repair — the more detail, the faster we can help.',
              style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : const Color(0xFF475569)),
            ),
            const SizedBox(height: 10),
            _textField('Service address *', _serviceAddressC, isDark, maxLines: 2, onChanged: (_) => _touchForm(), hint: 'Where the work needs to be done'),
            const SizedBox(height: 10),
            _textField('Fixture / area *', _fixtureTypeC, isDark, onChanged: (_) => _touchForm(), hint: 'e.g. Kitchen faucet, bathroom tile, outlet'),
            const SizedBox(height: 10),
            _textField('Job description *', _jobDescC, isDark, maxLines: 3, onChanged: (_) => _touchForm(), hint: 'What work do you need done?'),
            const SizedBox(height: 10),
            _textField('Problem details *', _problemDetailsC, isDark, maxLines: 3, onChanged: (_) => _touchForm(), hint: 'What is broken, leaking, or not working?'),
            const SizedBox(height: 10),
            _textField('Urgency (optional)', _urgencyC, isDark, onChanged: (_) => _touchForm(), hint: 'e.g. Emergency, this week, flexible'),
            const SizedBox(height: 10),
            _textField('Preferred date / time (optional)', _preferredScheduleC, isDark, onChanged: (_) => _touchForm(), hint: 'When works best for you?'),
          ] else ...[
            const SizedBox(height: 10),
            _textField('Job description', _jobDescC, isDark, maxLines: 3, onChanged: (_) => _touchForm(), hint: 'What needs to be done?'),
            const SizedBox(height: 10),
            Row(
              children: [
                Expanded(child: _field('Qty', _qtyC, isDark, onChanged: (_) => _touchForm())),
                const SizedBox(width: 10),
                Expanded(child: _field('Est. rate (\$)', _priceC, isDark, onChanged: (_) => _touchForm())),
              ],
            ),
          ],
          const SizedBox(height: 10),
          TextField(
            controller: _notesC,
            onChanged: (_) => _touchForm(),
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
                ? (_cashAppOpened
                    ? 'Cash App opened — tap Send on WhatsApp to finish.'
                    : 'Step 1: Pay on Cash App · Step 2: Send on WhatsApp turns on after payment.')
                : _canContactWhatsApp
                    ? 'All set — tap Send on WhatsApp or Call.'
                    : 'Fill in every required field (*) to turn on Send on WhatsApp.',
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

  Widget _receiverPhoneField(bool isDark) {
    final pattern = _receiverPhonePattern;
    final prefix = pattern.dialCode.isNotEmpty ? '+${pattern.dialCode} ' : null;
    return TextField(
      key: ValueKey('recv-${pattern.dialCode}'),
      controller: _receiverPhoneC,
      onChanged: (_) => _resetCashApp(),
      keyboardType: TextInputType.phone,
      inputFormatters: const [NgmyHelpCenterReceiverLocalFormatter()],
      decoration: InputDecoration(
        labelText: 'Receiver phone number *',
        hintText: ngmyHelpCenterPhoneHint(pattern, receiverLocal: true),
        prefixText: prefix,
        prefixIcon: prefix == null ? const Icon(Icons.phone_rounded, size: 18) : null,
        filled: true,
        fillColor: isDark ? Colors.white.withOpacity(0.04) : const Color(0xFFF8FAFC),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
      ),
    );
  }

  Widget _phoneField(
    String label,
    TextEditingController c,
    bool isDark, {
    required NgmyHelpCenterPhonePattern pattern,
    ValueChanged<String>? onChanged,
    Key? fieldKey,
  }) {
    return TextField(
      key: fieldKey,
      controller: c,
      onChanged: onChanged ?? (_) => _touchForm(),
      keyboardType: TextInputType.phone,
      inputFormatters: [NgmyHelpCenterPhoneFormatter(pattern: pattern)],
      decoration: InputDecoration(
        labelText: label,
        hintText: ngmyHelpCenterPhoneHint(pattern),
        prefixIcon: const Icon(Icons.phone_rounded, size: 18),
        filled: true,
        fillColor: isDark ? Colors.white.withOpacity(0.04) : const Color(0xFFF8FAFC),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
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
      onChanged: onChanged ?? (_) => _touchForm(),
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
        if (_cfg.whatsappEnabled) ...[
          FilledButton.icon(
            onPressed: _canContactWhatsApp ? _openWhatsApp : null,
            icon: Icon(_canContactWhatsApp ? Icons.chat_rounded : Icons.lock_outline_rounded),
            label: Text(_cfg.whatsappButtonLabel, style: const TextStyle(fontWeight: FontWeight.w900)),
            style: FilledButton.styleFrom(
              backgroundColor: _canContactWhatsApp ? _waGreen : _waGreen.withValues(alpha: 0.35),
              disabledBackgroundColor: _waGreen.withValues(alpha: 0.28),
              foregroundColor: Colors.white,
              disabledForegroundColor: Colors.white.withValues(alpha: 0.85),
              padding: const EdgeInsets.symmetric(vertical: 14),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            ),
          ),
          if (_isSendMoney && _canContact && !_cashAppOpened)
            Padding(
              padding: const EdgeInsets.only(top: 6),
              child: Text(
                'Send on WhatsApp unlocks after you tap Pay on Cash App.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: isDark ? Colors.amber.shade200 : const Color(0xFFB45309)),
              ),
            ),
        ],
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

class _SendMoneyReceiptDialog extends StatefulWidget {
  const _SendMoneyReceiptDialog({
    required this.receipt,
    required this.templateId,
    required this.isDark,
    required this.isComplete,
    required this.savedRecipients,
    required this.onApplyRecipient,
    required this.onTemplateChanged,
    required this.onSaveRecipient,
    required this.onListChanged,
  });

  final NgmyHelpCenterSendMoneyReceipt receipt;
  final String templateId;
  final bool isDark;
  final bool isComplete;
  final List<NgmyHelpCenterSavedRecipient> savedRecipients;
  final ValueChanged<NgmyHelpCenterSavedRecipient> onApplyRecipient;
  final ValueChanged<String> onTemplateChanged;
  final Future<void> Function() onSaveRecipient;
  final Future<void> Function() onListChanged;

  @override
  State<_SendMoneyReceiptDialog> createState() => _SendMoneyReceiptDialogState();
}

class _SendMoneyReceiptDialogState extends State<_SendMoneyReceiptDialog> {
  bool _busy = false;
  late String _templateId;
  NgmyTransferDeliveryStatus _deliveryStatus = NgmyTransferDeliveryStatus.hidden;
  DateTime? _deliveredAt;
  final GlobalKey _previewKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    _templateId = widget.templateId;
  }

  Future<Uint8List> _captureReceiptPng() async {
    await Future.delayed(const Duration(milliseconds: 180));
    await WidgetsBinding.instance.endOfFrame;
    final boundary = _previewKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
    if (boundary == null) throw Exception('Receipt preview is not ready yet.');
    final image = await boundary.toImage(pixelRatio: 3.0);
    final bytes = (await image.toByteData(format: ui.ImageByteFormat.png))?.buffer.asUint8List();
    if (bytes == null) throw Exception('Could not render receipt image.');
    return bytes;
  }

  Future<void> _downloadReceipt() async {
    if (_busy || !widget.isComplete) return;
    setState(() => _busy = true);
    try {
      final bytes = await _captureReceiptPng();
      final msg = await downloadNgmyQrImage(bytes, widget.receipt.pngFilename);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(msg), backgroundColor: const Color(0xFF16A34A)),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Download failed: $e'), backgroundColor: const Color(0xFFEF4444)),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _saveRecipient() async {
    if (_busy || !widget.isComplete) return;
    setState(() => _busy = true);
    try {
      await widget.onSaveRecipient();
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _pickDeliveryStatus() async {
    await showNgmyTransferDeliveryStatusPicker(
      context,
      selected: _deliveryStatus,
      onSelect: (status, at) {
        setState(() {
          _deliveryStatus = status;
          _deliveredAt = status == NgmyTransferDeliveryStatus.arrived ? (at ?? DateTime.now()) : at;
        });
      },
    );
  }

  Future<void> _editDeliveredTime() async {
    if (_deliveryStatus != NgmyTransferDeliveryStatus.arrived) return;
    final picked = await showNgmyTransferDeliveryTimePicker(
      context,
      initial: _deliveredAt ?? DateTime.now(),
    );
    if (picked != null && mounted) {
      setState(() => _deliveredAt = picked);
    }
  }

  Future<void> _pickTemplate() async {
    await showNgmyTransferReceiptTemplatePicker(
      context,
      selectedId: _templateId,
      onSelect: (id) {
        setState(() => _templateId = id);
        widget.onTemplateChanged(id);
      },
    );
  }

  Future<void> _showSavedRecipients() async {
    await showNgmySavedRecipientsDialog(
      context,
      recipients: widget.savedRecipients,
      onApply: widget.onApplyRecipient,
      onListChanged: widget.onListChanged,
    );
  }

  @override
  Widget build(BuildContext context) {
    final panelBg = widget.isDark ? const Color(0xFF0C1220) : Colors.white;
    final border = _accent.withValues(alpha: 0.35);

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 20),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 440, maxHeight: 720),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: Material(
            color: panelBg,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Container(
                  padding: const EdgeInsets.fromLTRB(14, 10, 6, 10),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: widget.isDark
                          ? [const Color(0xFF0E7490), const Color(0xFF164E63)]
                          : [const Color(0xFF06B6D4), const Color(0xFF0891B2)],
                    ),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.receipt_long_rounded, color: Colors.white, size: 20),
                      const SizedBox(width: 8),
                      const Expanded(
                        child: Text(
                          'Money Transfer Receipt',
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                        ),
                      ),
                      IconButton(
                        tooltip: 'Delivery status',
                        onPressed: _busy ? null : _pickDeliveryStatus,
                        icon: Icon(
                          _deliveryStatus == NgmyTransferDeliveryStatus.arrived
                              ? Icons.check_circle_rounded
                              : _deliveryStatus == NgmyTransferDeliveryStatus.hidden
                                  ? Icons.local_shipping_outlined
                                  : Icons.local_shipping_rounded,
                          color: _deliveryStatus == NgmyTransferDeliveryStatus.arrived
                              ? const Color(0xFF86EFAC)
                              : Colors.white,
                          size: 20,
                        ),
                        visualDensity: VisualDensity.compact,
                      ),
                      IconButton(
                        tooltip: 'Receipt template',
                        onPressed: _busy ? null : _pickTemplate,
                        icon: const Icon(Icons.palette_outlined, color: Colors.white, size: 20),
                        visualDensity: VisualDensity.compact,
                      ),
                      IconButton(
                        tooltip: 'Saved recipients',
                        onPressed: _busy ? null : _showSavedRecipients,
                        icon: Badge(
                          isLabelVisible: widget.savedRecipients.isNotEmpty,
                          label: Text('${widget.savedRecipients.length}'),
                          child: const Icon(Icons.people_outline_rounded, color: Colors.white, size: 20),
                        ),
                        visualDensity: VisualDensity.compact,
                      ),
                      IconButton(
                        onPressed: _busy ? null : () => Navigator.pop(context),
                        icon: const Icon(Icons.close_rounded, color: Colors.white, size: 20),
                        visualDensity: VisualDensity.compact,
                      ),
                    ],
                  ),
                ),
                Flexible(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.fromLTRB(14, 14, 14, 8),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        if (!widget.isComplete)
                          Container(
                            margin: const EdgeInsets.only(bottom: 12),
                            padding: const EdgeInsets.all(10),
                            decoration: BoxDecoration(
                              color: const Color(0xFFF59E0B).withValues(alpha: widget.isDark ? 0.14 : 0.12),
                              borderRadius: BorderRadius.circular(10),
                              border: Border.all(color: const Color(0xFFF59E0B).withValues(alpha: 0.45)),
                            ),
                            child: Text(
                              'Fill receiver name, phone, country, transfer amount, and your phone to download or save.',
                              style: TextStyle(fontSize: 10, height: 1.35, fontWeight: FontWeight.w600, color: widget.isDark ? Colors.amber.shade100 : const Color(0xFFB45309)),
                            ),
                          ),
                        RepaintBoundary(
                          key: _previewKey,
                          child: NgmyTransferReceiptPreview(
                            receipt: widget.receipt,
                            templateId: _templateId,
                            deliveryStatus: _deliveryStatus,
                            deliveredAt: _deliveredAt,
                            onEditDeliveredTime:
                                _deliveryStatus == NgmyTransferDeliveryStatus.arrived ? _editDeliveredTime : null,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(14, 8, 14, 16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      FilledButton.icon(
                        onPressed: (_busy || !widget.isComplete) ? null : _downloadReceipt,
                        icon: _busy
                            ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                            : const Icon(Icons.download_rounded),
                        label: const Text('Download receipt', style: TextStyle(fontWeight: FontWeight.w900)),
                        style: FilledButton.styleFrom(
                          backgroundColor: _accent,
                          foregroundColor: const Color(0xFF042F2E),
                          padding: const EdgeInsets.symmetric(vertical: 13),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                      ),
                      const SizedBox(height: 8),
                      OutlinedButton.icon(
                        onPressed: (_busy || !widget.isComplete) ? null : _saveRecipient,
                        icon: const Icon(Icons.person_add_alt_1_rounded),
                        label: const Text('Save recipient', style: TextStyle(fontWeight: FontWeight.w800)),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: widget.isDark ? Colors.white : const Color(0xFF0F172A),
                          side: BorderSide(color: border),
                          padding: const EdgeInsets.symmetric(vertical: 13),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
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
