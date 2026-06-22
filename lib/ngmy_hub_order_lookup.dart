import 'package:flutter/material.dart';

import 'ngmy_civic_registry_members.dart';

/// Look up an order / reference # for Civic Registry, Store, or Help Center.
void showNgmyHubOrderLookup({
  required BuildContext context,
  required String channel,
  required dynamic config,
  required String userEmail,
  String initialQuery = '',
}) {
  final queryC = TextEditingController(text: initialQuery.trim());
  showDialog<void>(
    context: context,
    builder: (ctx) => AlertDialog(
      backgroundColor: const Color(0xFF0F172A),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      title: Row(
        children: [
          Icon(_channelIcon(channel), color: _channelColor(channel), size: 22),
          const SizedBox(width: 8),
          Text(_channelTitle(channel), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
        ],
      ),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          TextField(
            controller: queryC,
            autofocus: initialQuery.trim().isEmpty,
            style: const TextStyle(color: Colors.white),
            decoration: InputDecoration(
              hintText: _channelHint(channel),
              hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.4)),
              filled: true,
              fillColor: const Color(0xFF1E293B),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
              prefixIcon: const Icon(Icons.tag_rounded, color: Colors.white54, size: 20),
            ),
            textInputAction: TextInputAction.search,
            onSubmitted: (_) => _runLookup(ctx, channel, config, userEmail, queryC.text),
          ),
        ],
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
        FilledButton(
          onPressed: () => _runLookup(ctx, channel, config, userEmail, queryC.text),
          style: FilledButton.styleFrom(backgroundColor: _channelColor(channel)),
          child: const Text('Look up'),
        ),
      ],
    ),
  );
}

void _runLookup(BuildContext ctx, String channel, dynamic config, String userEmail, String raw) {
  final q = raw.trim();
  if (q.isEmpty) {
    ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter an order or reference number.')));
    return;
  }
  final key = q.toLowerCase();
  String? title;
  String? body;

  switch (channel) {
    case 'store':
      final orders = List<Map<String, dynamic>>.from(
        ((config as dynamic).storeOrders as List?)?.map((e) => Map<String, dynamic>.from(e as Map)) ?? const [],
      );
      Map<String, dynamic>? match;
      for (final o in orders) {
        final id = (o['id'] ?? '').toString().toLowerCase();
        final tracking = (o['trackingId'] ?? '').toString().toLowerCase();
        final code = (o['paymentVerificationCode'] ?? '').toString().toLowerCase();
        if (id == key || tracking == key || code == key || id.contains(key) || tracking.contains(key)) {
          match = o;
          break;
        }
      }
      if (match == null) {
        ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(content: Text('No store order found for "$q".')));
        return;
      }
      title = (match['title'] ?? 'Store order').toString();
      final status = (match['fulfillmentStatus'] ?? match['paymentStatus'] ?? 'pending').toString();
      final tracking = (match['trackingId'] ?? '').toString();
      body = 'Status: $status${tracking.isNotEmpty ? '\nTracking: $tracking' : ''}';
      break;
    case 'help':
      final reqs = List<Map<String, dynamic>>.from(
        ((config as dynamic).helpRequests as List?)?.map((e) => Map<String, dynamic>.from(e as Map)) ?? const [],
      );
      Map<String, dynamic>? match;
      for (final r in reqs) {
        final id = (r['id'] ?? '').toString().toLowerCase();
        if (id == key || id.contains(key)) {
          match = r;
          break;
        }
      }
      if (match == null) {
        ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(content: Text('No help request found for "$q".')));
        return;
      }
      title = (match['serviceName'] ?? match['title'] ?? 'Help request').toString();
      body = 'Status: ${(match['status'] ?? 'open').toString()}';
      break;
    case 'civic':
    default:
      NgmyCivicRegistryMembers.migrateFromLegacyUsers(config, const []);
      final members = NgmyCivicRegistryMembers.listFrom(config);
      Map<String, dynamic>? match;
      for (final m in members) {
        final reg = (m['registryId'] ?? '').toString().toLowerCase();
        final email = (m['email'] ?? '').toString().toLowerCase();
        if (reg == key || reg.contains(key) || email == key) {
          match = m;
          break;
        }
      }
      if (match == null) {
        ScaffoldMessenger.of(ctx).showSnackBar(SnackBar(content: Text('No civic registry record for "$q".')));
        return;
      }
      title = (match['fullName'] ?? 'Member').toString();
      body = 'Registry ID: ${(match['registryId'] ?? '—').toString()}\nState: ${(match['state'] ?? '').toString()}';
      break;
  }

  Navigator.pop(ctx);
  showDialog<void>(
    context: ctx,
    builder: (dCtx) => AlertDialog(
      backgroundColor: const Color(0xFF0F172A),
      title: Text(title ?? 'Found', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
      content: Text(body ?? '', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), height: 1.4)),
      actions: [TextButton(onPressed: () => Navigator.pop(dCtx), child: const Text('OK'))],
    ),
  );
}

String _channelTitle(String channel) {
  switch (channel) {
    case 'store':
      return 'Store order lookup';
    case 'help':
      return 'Help request lookup';
    default:
      return 'Civic registry lookup';
  }
}

String _channelHint(String channel) {
  switch (channel) {
    case 'store':
      return 'Order # or tracking ID';
    case 'help':
      return 'Request / order #';
    default:
      return 'Registry ID';
  }
}

IconData _channelIcon(String channel) {
  switch (channel) {
    case 'store':
      return Icons.shopping_bag_outlined;
    case 'help':
      return Icons.support_agent_rounded;
    default:
      return Icons.shield_outlined;
  }
}

Color _channelColor(String channel) {
  switch (channel) {
    case 'store':
      return const Color(0xFFDB2777);
    case 'help':
      return const Color(0xFF9333EA);
    default:
      return const Color(0xFF6366F1);
  }
}
