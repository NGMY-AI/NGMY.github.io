import 'package:flutter/material.dart';

import 'ngmy_edge_invoke.dart';

/// NGMY Store access granted by an admin (no application). Each granted
/// account is a store with a name and a short description; helper gift cards
/// show both so the store is recognised when it scans the gift QR.
class NgmyStoreAccessApi {
  static Future<Map<String, dynamic>> _call(String action, [Map<String, dynamic> extra = const {}]) async {
    try {
      final res = await ngmyEdgeInvoke({'action': action, ...extra}, timeout: const Duration(seconds: 25));
      return res ?? {'ok': false, 'error': 'No connection. Try again.'};
    } catch (_) {
      return {'ok': false, 'error': 'No connection. Try again.'};
    }
  }

  /// [target] is the account's email or phone number.
  static Future<Map<String, dynamic>> grant({
    required String target,
    required String storeName,
    required String description,
  }) =>
      _call('storeGrant', {'target': target, 'storeName': storeName, 'description': description});

  // Not 'email': that key is stripped from every signed-in request.
  static Future<Map<String, dynamic>> revoke(String storeEmail) => _call('storeRevoke', {'storeEmail': storeEmail});
  static Future<Map<String, dynamic>> list() => _call('storeList');
  static Future<Map<String, dynamic>> mine() => _call('storeMine');
}

/// Granted stores, kept for the helper gift store picker.
class NgmyStoreAccessCache {
  static List<Map<String, dynamic>> stores = [];

  static Future<List<Map<String, dynamic>>> load() async {
    final res = await NgmyStoreAccessApi.list();
    if (res['ok'] == true && res['stores'] is List) {
      stores = (res['stores'] as List).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    }
    return stores;
  }

  /// Helper gift store options for granted stores (same shape as listing-based ones).
  static List<Map<String, dynamic>> giftOptions() => stores.map((s) {
        final email = (s['email'] ?? '').toString().toLowerCase().trim();
        final name = (s['storeName'] ?? '').toString().trim();
        final desc = (s['description'] ?? '').toString().trim();
        return <String, dynamic>{
          'id': 'store_$email',
          'title': name.isEmpty ? email.split('@').first : name,
          'address': desc.isEmpty ? 'NGMY store' : desc,
          'description': desc,
          'sellerEmail': email,
          'sellerName': name,
        };
      }).where((o) => (o['sellerEmail'] as String).isNotEmpty).toList();
}

const Color _kStorePurple = Color(0xFF6200EE);

/// Admin sheet: give an account NGMY Store access by email or phone, with
/// its store name and description. Lists current stores with Remove.
Future<void> showNgmyStoreAccessAdminSheet(BuildContext context, {VoidCallback? onChanged}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _StoreAccessSheet(onChanged: onChanged),
  );
}

class _StoreAccessSheet extends StatefulWidget {
  const _StoreAccessSheet({this.onChanged});
  final VoidCallback? onChanged;

  @override
  State<_StoreAccessSheet> createState() => _StoreAccessSheetState();
}

class _StoreAccessSheetState extends State<_StoreAccessSheet> {
  final _targetC = TextEditingController();
  final _nameC = TextEditingController();
  final _descC = TextEditingController();
  List<Map<String, dynamic>> _stores = [];
  bool _loading = true;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void dispose() {
    _targetC.dispose();
    _nameC.dispose();
    _descC.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    final list = await NgmyStoreAccessCache.load();
    if (!mounted) return;
    setState(() {
      _stores = list;
      _loading = false;
    });
  }

  void _snack(String text, {bool error = false}) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(text), backgroundColor: error ? Colors.red.shade700 : const Color(0xFF059669)),
    );
  }

  Future<void> _grant() async {
    final target = _targetC.text.trim();
    final name = _nameC.text.trim();
    if (target.isEmpty || name.isEmpty) {
      _snack('Enter the email or phone number, and the store name.', error: true);
      return;
    }
    setState(() => _busy = true);
    final res = await NgmyStoreAccessApi.grant(target: target, storeName: name, description: _descC.text.trim());
    if (!mounted) return;
    setState(() => _busy = false);
    if (res['ok'] == true) {
      final who = (res['store'] as Map?)?['email'] ?? target;
      _snack('$name now has NGMY Store access ($who).');
      _targetC.clear();
      _nameC.clear();
      _descC.clear();
      widget.onChanged?.call();
      _load();
    } else {
      _snack((res['error'] ?? 'Could not grant access.').toString(), error: true);
    }
  }

  Future<void> _revoke(Map<String, dynamic> s) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text('Remove ${s['storeName']}?'),
        content: const Text('This account will no longer have NGMY Store access.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Remove')),
        ],
      ),
    );
    if (ok != true) return;
    final res = await NgmyStoreAccessApi.revoke((s['email'] ?? '').toString());
    if (!mounted) return;
    if (res['ok'] == true) {
      _snack('Store access removed.');
      widget.onChanged?.call();
      _load();
    } else {
      _snack((res['error'] ?? 'Could not remove.').toString(), error: true);
    }
  }

  InputDecoration _dec(String label, IconData icon, {String? hint}) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return InputDecoration(
      labelText: label,
      hintText: hint,
      prefixIcon: Icon(icon, size: 19, color: _kStorePurple),
      filled: true,
      isDense: true,
      fillColor: isDark ? const Color(0xFF1F2633) : const Color(0xFFF6F8FB),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
      focusedBorder: const OutlineInputBorder(
        borderRadius: BorderRadius.all(Radius.circular(12)),
        borderSide: BorderSide(color: _kStorePurple, width: 1.6),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final tile = isDark ? const Color(0xFF1F2633) : const Color(0xFFF6F8FB);
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.9, maxWidth: 560),
        margin: const EdgeInsets.fromLTRB(10, 10, 10, 12),
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF151A24) : Colors.white,
          borderRadius: BorderRadius.circular(22),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 12, 8, 0),
              child: Row(
                children: [
                  const Icon(Icons.storefront_rounded, color: _kStorePurple),
                  const SizedBox(width: 8),
                  Expanded(child: Text('Store access', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: ink))),
                  IconButton(onPressed: () => Navigator.pop(context), icon: Icon(Icons.close_rounded, color: muted)),
                ],
              ),
            ),
            Flexible(
              child: ListView(
                shrinkWrap: true,
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 16),
                children: [
                  Text(
                    'Give a store NGMY Store access without applying. Its name and description show on helper gift cards.',
                    style: TextStyle(fontSize: 12, color: muted, height: 1.35),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _targetC,
                    decoration: _dec('Account email or phone number *', Icons.alternate_email_rounded),
                  ),
                  const SizedBox(height: 10),
                  TextField(
                    controller: _nameC,
                    textCapitalization: TextCapitalization.words,
                    decoration: _dec('Store name *', Icons.store_rounded),
                  ),
                  const SizedBox(height: 10),
                  TextField(
                    controller: _descC,
                    maxLines: 2,
                    decoration: _dec('Description', Icons.notes_rounded, hint: 'e.g. African groceries · 123 Main St, Macon'),
                  ),
                  const SizedBox(height: 12),
                  SizedBox(
                    height: 46,
                    child: ElevatedButton.icon(
                      onPressed: _busy ? null : _grant,
                      icon: _busy
                          ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Icon(Icons.verified_rounded, size: 18),
                      label: const Text('Give store access', style: TextStyle(fontWeight: FontWeight.w800)),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: _kStorePurple,
                        foregroundColor: Colors.white,
                        elevation: 0,
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(13)),
                      ),
                    ),
                  ),
                  const SizedBox(height: 18),
                  Text('Stores (${_stores.length})', style: TextStyle(fontWeight: FontWeight.w900, color: ink)),
                  const SizedBox(height: 8),
                  if (_loading)
                    const Padding(padding: EdgeInsets.all(20), child: Center(child: CircularProgressIndicator()))
                  else if (_stores.isEmpty)
                    Text('No stores yet.', style: TextStyle(color: muted, fontSize: 12))
                  else
                    ..._stores.map((s) => Container(
                          margin: const EdgeInsets.only(bottom: 8),
                          padding: const EdgeInsets.fromLTRB(12, 10, 4, 10),
                          decoration: BoxDecoration(color: tile, borderRadius: BorderRadius.circular(12)),
                          child: Row(
                            children: [
                              const CircleAvatar(
                                radius: 18,
                                backgroundColor: Color(0x226200EE),
                                child: Icon(Icons.storefront_rounded, size: 18, color: _kStorePurple),
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text((s['storeName'] ?? '').toString(), style: TextStyle(fontWeight: FontWeight.w800, color: ink)),
                                    if ((s['description'] ?? '').toString().isNotEmpty)
                                      Text((s['description'] ?? '').toString(), style: TextStyle(fontSize: 11.5, color: muted)),
                                    Text(
                                      [s['email'], s['phone']].where((e) => (e ?? '').toString().isNotEmpty).join(' · '),
                                      style: TextStyle(fontSize: 11, color: muted),
                                    ),
                                  ],
                                ),
                              ),
                              IconButton(
                                tooltip: 'Remove store access',
                                onPressed: () => _revoke(s),
                                icon: Icon(Icons.remove_circle_outline_rounded, color: Colors.red.shade400),
                              ),
                            ],
                          ),
                        )),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
