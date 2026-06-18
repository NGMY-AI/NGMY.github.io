import 'dart:math' as math;

import 'package:flutter/material.dart';

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
          description: 'Money transfer & remittance help',
          icon: 'send_rounded',
          defaultPrice: '0',
          defaultQty: '1',
        ),
        NgmyHelpCenterService(
          id: 'moving_delivery',
          name: 'Moving & Delivery',
          description: 'Pickup, drop-off, and hauling',
          icon: 'local_shipping',
          defaultPrice: '85',
          defaultQty: '1',
        ),
        NgmyHelpCenterService(
          id: 'general_help',
          name: 'General Help',
          description: 'Talk to us about anything',
          icon: 'support_agent',
          defaultPrice: '0',
          defaultQty: '1',
        ),
      ];

  factory NgmyHelpCenterConfig.defaults() => NgmyHelpCenterConfig(services: defaultServices());

  List<NgmyHelpCenterService> activeServices() => services.where((s) => s.enabled && s.name.trim().isNotEmpty).toList();

  String digitsPhone() => phone.replaceAll(RegExp(r'[^\d+]'), '');

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
    String notes = '',
    String? qty,
    String? price,
    String? reference,
  }) {
    final ref = reference ?? _newReference();
    final q = qty ?? service.defaultQty;
    final p = _fmt(price ?? service.defaultPrice);
    final total = (double.tryParse(q) ?? 1) * (double.tryParse(p) ?? 0);
    final buf = StringBuffer()
      ..writeln('*${supportName.trim().isEmpty ? 'NGMY Help Request' : supportName.trim()}*')
      ..writeln('━━━━━━━━━━━━━━━━')
      ..writeln('Service: *${service.name}*')
      ..writeln('Reference: $ref')
      ..writeln('Client: ${clientName.trim().isEmpty ? 'Client' : clientName.trim()}');
    if (clientEmail.trim().isNotEmpty) buf.writeln('Email: ${clientEmail.trim()}');
    buf
      ..writeln('Qty: $q')
      ..writeln('Est. rate: \$$p')
      ..writeln('Est. total: \$${total.toStringAsFixed(2)}');
    if (service.description.trim().isNotEmpty) buf.writeln('Details: ${service.description.trim()}');
    if (notes.trim().isNotEmpty) buf.writeln('Notes: ${notes.trim()}');
    buf.writeln();
    buf.writeln('Please contact me about this service. Thank you!');
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
