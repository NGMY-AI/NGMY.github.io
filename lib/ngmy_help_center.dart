import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Money transfer service id in Help Center.
const String kNgmyHelpCenterSendMoneyId = 'send_money';

/// NGMY fee on send-money transfers (7% when amount is \$30 or more).
const double kNgmyHelpCenterMoneyTransferFeeRate = 0.07;

/// Transfers under this amount use a flat fee instead of the percentage.
const double kNgmyHelpCenterMoneyTransferMinAmount = 30.0;

/// Flat fee for transfers under \$30.
const double kNgmyHelpCenterMoneyTransferFlatFee = 2.0;

double ngmyHelpCenterMoneyTransferFee(double amount) {
  if (amount <= 0) return 0;
  if (amount < kNgmyHelpCenterMoneyTransferMinAmount) return kNgmyHelpCenterMoneyTransferFlatFee;
  return amount * kNgmyHelpCenterMoneyTransferFeeRate;
}

String ngmyHelpCenterMoneyTransferFeeDescription(double amount) {
  if (amount < kNgmyHelpCenterMoneyTransferMinAmount) {
    return 'NGMY service fee (\$2 flat under \$30)';
  }
  return 'NGMY service fee (7%)';
}

bool ngmyHelpCenterIsSendMoney(NgmyHelpCenterService service) =>
    service.id == kNgmyHelpCenterSendMoneyId ||
    service.name.toLowerCase().contains('send money') ||
    service.name.toLowerCase().contains('money transfer');

bool ngmyHelpCenterIsGeneralHelp(NgmyHelpCenterService service) =>
    service.id == 'general_help' || service.name.toLowerCase().contains('general help');

bool ngmyHelpCenterIsMovingDelivery(NgmyHelpCenterService service) =>
    service.id == 'moving_delivery' ||
    service.name.toLowerCase().contains('moving') ||
    service.name.toLowerCase().contains('delivery');

bool ngmyHelpCenterIsHouseFixture(NgmyHelpCenterService service) =>
    service.id == 'house_fixture' ||
    service.name.toLowerCase().contains('house fixture') ||
    service.name.toLowerCase().contains('home repair');

IconData ngmyHelpCenterServiceIcon(NgmyHelpCenterService service) {
  if (ngmyHelpCenterIsSendMoney(service)) return Icons.attach_money_rounded;
  return ngmyHelpCenterIconData(service.icon);
}

/// Delivery rate per mile when trip is over [kNgmyHelpCenterDeliveryMinMilesForRate].
const double kNgmyHelpCenterDeliveryRatePerMile = 2.50;

/// Under this mileage, price is confirmed on WhatsApp instead of auto-calculated.
const double kNgmyHelpCenterDeliveryMinMilesForRate = 10.0;

double? ngmyHelpCenterDeliveryEstimate(String mileageText) {
  final miles = double.tryParse(mileageText.trim());
  if (miles == null || miles <= 0) return null;
  if (miles <= kNgmyHelpCenterDeliveryMinMilesForRate) return null;
  return miles * kNgmyHelpCenterDeliveryRatePerMile;
}

/// One selectable service in the Help Center (admin-configurable).
class NgmyHelpCenterService {
  const NgmyHelpCenterService({
    required this.id,
    required this.name,
    required this.description,
    this.icon = 'support_agent',
    this.defaultPrice = '0',
    this.defaultQty = '1',
    this.enabled = true,
  });

  final String id;
  final String name;
  final String description;
  final String icon;
  final String defaultPrice;
  final String defaultQty;
  final bool enabled;

  Map<String, dynamic> toMap() => {
        'id': id,
        'name': name,
        'description': description,
        'icon': icon,
        'defaultPrice': defaultPrice,
        'defaultQty': defaultQty,
        'enabled': enabled,
      };

  factory NgmyHelpCenterService.fromMap(Map<String, dynamic> map) {
    return NgmyHelpCenterService(
      id: (map['id'] ?? '').toString().trim().isEmpty ? _newId() : map['id'].toString(),
      name: (map['name'] ?? 'Service').toString(),
      description: (map['description'] ?? '').toString(),
      icon: (map['icon'] ?? 'support_agent').toString(),
      defaultPrice: (map['defaultPrice'] ?? '0').toString(),
      defaultQty: (map['defaultQty'] ?? '1').toString(),
      enabled: map['enabled'] != false,
    );
  }

  NgmyHelpCenterService copyWith({
    String? id,
    String? name,
    String? description,
    String? icon,
    String? defaultPrice,
    String? defaultQty,
    bool? enabled,
  }) {
    return NgmyHelpCenterService(
      id: id ?? this.id,
      name: name ?? this.name,
      description: description ?? this.description,
      icon: icon ?? this.icon,
      defaultPrice: defaultPrice ?? this.defaultPrice,
      defaultQty: defaultQty ?? this.defaultQty,
      enabled: enabled ?? this.enabled,
    );
  }
}

/// Admin-controlled Help Center hub settings (stored in AppConfig.helpCenterHub).
class NgmyHelpCenterConfig {
  const NgmyHelpCenterConfig({
    this.enabled = true,
    this.title = 'NGMY Help Center',
    this.subtitle = 'Direct support — no forms, no waiting',
    this.posterHeadline = 'Need help? We are one tap away.',
    this.posterBody =
        'Choose the service you need below. We will prepare a ready-to-send request summary for you — then open WhatsApp or call us directly. Nothing is submitted inside the app.',
    this.steps = const [
      'Pick a service',
      'Review your request summary',
      'Send via WhatsApp or call',
    ],
    this.phone = '706-623-7963',
    this.whatsappLink = '',
    this.whatsappEnabled = true,
    this.callEnabled = true,
    this.whatsappButtonLabel = 'Send on WhatsApp',
    this.callButtonLabel = 'Call Now',
    this.cashAppTag = 'NGMYpay',
    this.cashAppEnabled = true,
    this.cashAppButtonLabel = 'Pay on Cash App',
    this.supportName = 'NGMY Support',
    this.services = const [],
  });

  final bool enabled;
  final String title;
  final String subtitle;
  final String posterHeadline;
  final String posterBody;
  final List<String> steps;
  final String phone;
  final String whatsappLink;
  final bool whatsappEnabled;
  final bool callEnabled;
  final String whatsappButtonLabel;
  final String callButtonLabel;
  final String cashAppTag;
  final bool cashAppEnabled;
  final String cashAppButtonLabel;
  final String supportName;
  final List<NgmyHelpCenterService> services;

  static List<NgmyHelpCenterService> defaultServices() => const [
        NgmyHelpCenterService(
          id: 'house_fixture',
          name: 'House Fixture',
          description: 'Repairs, installs, and home fixes',
          icon: 'home_repair_service',
          defaultPrice: '150',
          defaultQty: '1',
        ),
        NgmyHelpCenterService(
          id: 'send_money',
          name: 'Send Money',
          description: 'Money transfer — 7% fee (\$2 flat under \$30)',
          icon: 'attach_money',
          defaultPrice: '100',
          defaultQty: '1',
        ),
        NgmyHelpCenterService(
          id: 'moving_delivery',
          name: 'Moving & Delivery',
          description: '\$2.50/mile over 10 mi · under 10 mi quoted on WhatsApp',
          icon: 'local_shipping',
          defaultPrice: '0',
          defaultQty: '1',
        ),
        NgmyHelpCenterService(
          id: 'general_help',
          name: 'General Help',
          description: 'Ask us anything — describe your full request',
          icon: 'support_agent',
          defaultPrice: '0',
          defaultQty: '1',
        ),
      ];

  factory NgmyHelpCenterConfig.defaults() => NgmyHelpCenterConfig(services: defaultServices());

  List<NgmyHelpCenterService> activeServices() => services.where((s) => s.enabled && s.name.trim().isNotEmpty).toList();

  String digitsPhone() => phone.replaceAll(RegExp(r'[^\d+]'), '');

  String cashAppDisplayTag() {
    final raw = cashAppTag.trim();
    if (raw.isEmpty) return '';
    return raw.startsWith(r'$') ? raw : '\$$raw';
  }

  String resolvedCashAppUrl() {
    final raw = cashAppTag.trim();
    if (raw.isEmpty) return '';
    final handle = raw.startsWith(r'$') ? raw.substring(1) : raw;
    if (handle.isEmpty) return '';
    return 'https://cash.app/\$$handle';
  }

  String sendMoneyPayFirstNote() =>
      'Send the full transfer amount on Cash App first. After payment, tap Send on WhatsApp with your request. If you skip Cash App, your money will not be sent.';

  String cashAppButtonLabelForAmount(double amount) {
    final base = cashAppButtonLabel.trim().isEmpty ? 'Pay on Cash App' : cashAppButtonLabel.trim();
    if (amount > 0) return '$base \$${amount.toStringAsFixed(2)}';
    return base;
  }

  String resolvedWhatsAppUrl({String? prefilledText}) {
    final custom = whatsappLink.trim();
    if (custom.isNotEmpty) {
      if (prefilledText == null || prefilledText.trim().isEmpty) return custom;
      final uri = Uri.tryParse(custom);
      if (uri != null && uri.host.contains('wa.me')) {
        final digits = uri.pathSegments.isNotEmpty ? uri.pathSegments.first : digitsPhone();
        return 'https://wa.me/$digits?text=${Uri.encodeComponent(prefilledText)}';
      }
      final sep = custom.contains('?') ? '&' : '?';
      return '$custom${sep}text=${Uri.encodeComponent(prefilledText)}';
    }
    final digits = digitsPhone();
    if (digits.isEmpty) return '';
    final params = prefilledText != null && prefilledText.trim().isNotEmpty ? '?text=${Uri.encodeComponent(prefilledText)}' : '';
    return 'https://wa.me/$digits$params';
  }

  String buildRequestMessage({
    required NgmyHelpCenterService service,
    required String clientName,
    String clientEmail = '',
    String clientPhone = '',
    String receiverName = '',
    String receiverPhone = '',
    String receiverCountry = '',
    String senderCashAppTag = '',
    String helpTopic = '',
    String helpDetails = '',
    String preferredContact = '',
    String helpLocation = '',
    String pickupAddress = '',
    String deliveryAddress = '',
    String mileage = '',
    String jobDescription = '',
    String serviceAddress = '',
    String fixtureType = '',
    String problemDetails = '',
    String preferredSchedule = '',
    String urgency = '',
    String notes = '',
    String? qty,
    String? price,
    String? reference,
  }) {
    final ref = reference ?? _newReference();
    final isMoney = ngmyHelpCenterIsSendMoney(service);
    final isGeneral = ngmyHelpCenterIsGeneralHelp(service);
    final isDelivery = ngmyHelpCenterIsMovingDelivery(service);
    final isHouse = ngmyHelpCenterIsHouseFixture(service);
    final buf = StringBuffer()
      ..writeln('*${supportName.trim().isEmpty ? 'NGMY Help Request' : supportName.trim()}*')
      ..writeln('━━━━━━━━━━━━━━━━')
      ..writeln('Service: *${service.name}*')
      ..writeln('Reference: $ref')
      ..writeln('Sender: ${clientName.trim().isEmpty ? 'Client' : clientName.trim()}');
    if (clientEmail.trim().isNotEmpty) buf.writeln('Sender email: ${clientEmail.trim()}');
    if (clientPhone.trim().isNotEmpty) buf.writeln('Sender phone: ${clientPhone.trim()}');

    if (isMoney) {
      final amount = double.tryParse((price ?? service.defaultPrice).trim()) ?? 0;
      final fee = ngmyHelpCenterMoneyTransferFee(amount);
      final recipientGets = amount - fee;
      if (receiverName.trim().isNotEmpty) buf.writeln('Receiver name: *${receiverName.trim()}*');
      if (receiverPhone.trim().isNotEmpty) buf.writeln('Receiver phone: ${receiverPhone.trim()}');
      if (receiverCountry.trim().isNotEmpty) buf.writeln('Destination country: ${receiverCountry.trim()}');
      buf
        ..writeln('Transfer amount: \$${amount.toStringAsFixed(2)}')
        ..writeln('${ngmyHelpCenterMoneyTransferFeeDescription(amount)}: \$${fee.toStringAsFixed(2)}')
        ..writeln('Recipient receives: \$${recipientGets.toStringAsFixed(2)}');
      if (senderCashAppTag.trim().isNotEmpty) {
        final tag = senderCashAppTag.trim().startsWith(r'$') ? senderCashAppTag.trim() : '\$${senderCashAppTag.trim()}';
        buf.writeln('Sender Cash App (payment from): $tag');
      }
    } else if (isGeneral) {
      if (helpTopic.trim().isNotEmpty) buf.writeln('Topic: *${helpTopic.trim()}*');
      if (helpDetails.trim().isNotEmpty) buf.writeln('Details: ${helpDetails.trim()}');
      if (helpLocation.trim().isNotEmpty) buf.writeln('Location: ${helpLocation.trim()}');
      if (preferredContact.trim().isNotEmpty) buf.writeln('Best time to reach me: ${preferredContact.trim()}');
    } else if (isDelivery) {
      if (pickupAddress.trim().isNotEmpty) buf.writeln('Pickup address: ${pickupAddress.trim()}');
      if (deliveryAddress.trim().isNotEmpty) buf.writeln('Delivery address: ${deliveryAddress.trim()}');
      final miles = double.tryParse(mileage.trim());
      if (miles != null && miles > 0) {
        buf.writeln('Mileage: ${miles.toStringAsFixed(1)} mi');
        final est = ngmyHelpCenterDeliveryEstimate(mileage);
        if (est != null) {
          buf.writeln('Est. delivery fee: \$${est.toStringAsFixed(2)} (\$${kNgmyHelpCenterDeliveryRatePerMile.toStringAsFixed(2)}/mi)');
        } else {
          buf.writeln('Est. delivery fee: Quote on WhatsApp (10 miles or less)');
        }
      }
    } else if (isHouse) {
      if (serviceAddress.trim().isNotEmpty) buf.writeln('Service address: ${serviceAddress.trim()}');
      if (fixtureType.trim().isNotEmpty) buf.writeln('Fixture / area: ${fixtureType.trim()}');
      if (jobDescription.trim().isNotEmpty) buf.writeln('Job description: ${jobDescription.trim()}');
      if (problemDetails.trim().isNotEmpty) buf.writeln('Problem details: ${problemDetails.trim()}');
      if (urgency.trim().isNotEmpty) buf.writeln('Urgency: ${urgency.trim()}');
      if (preferredSchedule.trim().isNotEmpty) buf.writeln('Preferred schedule: ${preferredSchedule.trim()}');
    } else {
      if (jobDescription.trim().isNotEmpty) buf.writeln('Job description: ${jobDescription.trim()}');
      final q = qty ?? service.defaultQty;
      final p = _fmt(price ?? service.defaultPrice);
      final total = (double.tryParse(q) ?? 1) * (double.tryParse(p) ?? 0);
      buf
        ..writeln('Qty: $q')
        ..writeln('Est. rate: \$$p')
        ..writeln('Est. total: \$${total.toStringAsFixed(2)}');
    }

    if (!isMoney && !isGeneral && !isDelivery && !isHouse && service.description.trim().isNotEmpty) {
      buf.writeln('Details: ${service.description.trim()}');
    }
    if (notes.trim().isNotEmpty) buf.writeln('Notes: ${notes.trim()}');
    buf.writeln();
    buf.writeln(isMoney
        ? 'Please process this money transfer request. I understand the NGMY service fee applies (\$2 under \$30, otherwise 7%). I paid via Cash App.'
        : isDelivery
            ? 'Please confirm this moving/delivery request. Thank you!'
            : isHouse
                ? 'Please confirm this home repair request. Thank you!'
                : 'Please contact me about this service. Thank you!');
    return buf.toString().trim();
  }

  Map<String, dynamic> toMap() => {
        'enabled': enabled,
        'title': title,
        'subtitle': subtitle,
        'posterHeadline': posterHeadline,
        'posterBody': posterBody,
        'steps': steps,
        'phone': phone,
        'whatsappLink': whatsappLink,
        'whatsappEnabled': whatsappEnabled,
        'callEnabled': callEnabled,
        'whatsappButtonLabel': whatsappButtonLabel,
        'callButtonLabel': callButtonLabel,
        'cashAppTag': cashAppTag,
        'cashAppEnabled': cashAppEnabled,
        'cashAppButtonLabel': cashAppButtonLabel,
        'supportName': supportName,
        'services': services.map((s) => s.toMap()).toList(),
      };

  factory NgmyHelpCenterConfig.fromMap(Map<String, dynamic>? raw) {
    if (raw == null || raw.isEmpty) return NgmyHelpCenterConfig.defaults();
    final stepsRaw = raw['steps'];
    final servicesRaw = raw['services'];
    final services = servicesRaw is List && servicesRaw.isNotEmpty
        ? servicesRaw.map((e) => NgmyHelpCenterService.fromMap(Map<String, dynamic>.from(e as Map))).toList()
        : defaultServices();
    return NgmyHelpCenterConfig(
      enabled: raw['enabled'] != false,
      title: (raw['title'] ?? 'NGMY Help Center').toString(),
      subtitle: (raw['subtitle'] ?? '').toString(),
      posterHeadline: (raw['posterHeadline'] ?? '').toString(),
      posterBody: (raw['posterBody'] ?? '').toString(),
      steps: stepsRaw is List
          ? stepsRaw.map((e) => e.toString()).where((e) => e.trim().isNotEmpty).toList()
          : const ['Pick a service', 'Review your request summary', 'Send via WhatsApp or call'],
      phone: (raw['phone'] ?? '').toString(),
      whatsappLink: (raw['whatsappLink'] ?? '').toString(),
      whatsappEnabled: raw['whatsappEnabled'] != false,
      callEnabled: raw['callEnabled'] != false,
      whatsappButtonLabel: (raw['whatsappButtonLabel'] ?? 'Send on WhatsApp').toString(),
      callButtonLabel: (raw['callButtonLabel'] ?? 'Call Now').toString(),
      cashAppTag: (raw['cashAppTag'] ?? 'NGMYpay').toString(),
      cashAppEnabled: raw['cashAppEnabled'] != false,
      cashAppButtonLabel: (raw['cashAppButtonLabel'] ?? 'Pay on Cash App').toString(),
      supportName: (raw['supportName'] ?? 'NGMY Support').toString(),
      services: services,
    );
  }

  NgmyHelpCenterConfig copyWith({
    bool? enabled,
    String? title,
    String? subtitle,
    String? posterHeadline,
    String? posterBody,
    List<String>? steps,
    String? phone,
    String? whatsappLink,
    bool? whatsappEnabled,
    bool? callEnabled,
    String? whatsappButtonLabel,
    String? callButtonLabel,
    String? cashAppTag,
    bool? cashAppEnabled,
    String? cashAppButtonLabel,
    String? supportName,
    List<NgmyHelpCenterService>? services,
  }) {
    return NgmyHelpCenterConfig(
      enabled: enabled ?? this.enabled,
      title: title ?? this.title,
      subtitle: subtitle ?? this.subtitle,
      posterHeadline: posterHeadline ?? this.posterHeadline,
      posterBody: posterBody ?? this.posterBody,
      steps: steps ?? this.steps,
      phone: phone ?? this.phone,
      whatsappLink: whatsappLink ?? this.whatsappLink,
      whatsappEnabled: whatsappEnabled ?? this.whatsappEnabled,
      callEnabled: callEnabled ?? this.callEnabled,
      whatsappButtonLabel: whatsappButtonLabel ?? this.whatsappButtonLabel,
      callButtonLabel: callButtonLabel ?? this.callButtonLabel,
      cashAppTag: cashAppTag ?? this.cashAppTag,
      cashAppEnabled: cashAppEnabled ?? this.cashAppEnabled,
      cashAppButtonLabel: cashAppButtonLabel ?? this.cashAppButtonLabel,
      supportName: supportName ?? this.supportName,
      services: services ?? this.services,
    );
  }
}

IconData ngmyHelpCenterIconData(String name) {
  switch (name) {
    case 'home_repair_service':
      return Icons.home_repair_service_rounded;
    case 'send_rounded':
      return Icons.send_rounded;
    case 'local_shipping':
      return Icons.local_shipping_rounded;
    case 'plumbing':
      return Icons.plumbing_rounded;
    case 'electrical_services':
      return Icons.electrical_services_rounded;
    case 'cleaning_services':
      return Icons.cleaning_services_rounded;
    case 'attach_money':
      return Icons.attach_money_rounded;
    default:
      return Icons.support_agent_rounded;
  }
}

const List<Map<String, String>> kNgmyHelpCenterIconChoices = [
  {'id': 'support_agent', 'label': 'Support'},
  {'id': 'home_repair_service', 'label': 'Home repair'},
  {'id': 'send_rounded', 'label': 'Send money'},
  {'id': 'local_shipping', 'label': 'Delivery'},
  {'id': 'plumbing', 'label': 'Plumbing'},
  {'id': 'electrical_services', 'label': 'Electrical'},
  {'id': 'cleaning_services', 'label': 'Cleaning'},
  {'id': 'attach_money', 'label': 'Payments'},
];

String _newId() => 'svc_${DateTime.now().millisecondsSinceEpoch}_${math.Random().nextInt(999)}';

String _newReference() {
  final now = DateTime.now();
  final stamp = '${now.year}${now.month.toString().padLeft(2, '0')}${now.day.toString().padLeft(2, '0')}';
  return 'HC-$stamp-${math.Random().nextInt(9000) + 1000}';
}

String _fmt(String v) {
  final n = double.tryParse(v.trim()) ?? 0;
  return n.toStringAsFixed(2);
}
