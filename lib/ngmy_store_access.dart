import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_circle_cropper.dart';
import 'ngmy_edge_invoke.dart';
import 'ngmy_state_picker.dart';
import 'ngmy_upload_shrink.dart';

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
        final where = [s['address'], s['city'], s['state']]
            .map((e) => (e ?? '').toString().trim())
            .where((e) => e.isNotEmpty)
            .join(', ');
        return <String, dynamic>{
          'id': 'store_$email',
          'title': name.isEmpty ? email.split('@').first : name,
          // Shown on the gift card: where the store is, then what it sells.
          'address': [where, desc].where((e) => e.isNotEmpty).join(' · ').isEmpty
              ? 'NGMY store'
              : [where, desc].where((e) => e.isNotEmpty).join(' · '),
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
    if (target.isEmpty) {
      _snack('Enter the account email or phone number.', error: true);
      return;
    }
    setState(() => _busy = true);
    final res = await NgmyStoreAccessApi.grant(target: target, storeName: name, description: _descC.text.trim());
    if (!mounted) return;
    setState(() => _busy = false);
    if (res['ok'] == true) {
      final who = (res['store'] as Map?)?['email'] ?? target;
      _snack('$who now has NGMY Store access. They will be asked to set up their store.');
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
                    'Give an account NGMY Store access without applying. They get a pop-up to set up their store (name, address, picture), then can post up to 4 items.',
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
                    decoration: _dec('Store name (optional)', Icons.store_rounded),
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

// ── Store owner profile (pop-up after an admin grants access) ───────────────

class NgmyStoreProfileApi {
  static Future<Map<String, dynamic>> saveProfile(Map<String, dynamic> form) =>
      NgmyStoreAccessApi._call('storeSaveProfile', form);
  static Future<Map<String, dynamic>> directory() => NgmyStoreAccessApi._call('storeDirectory');
}

bool _profilePromptOpen = false;

/// Asks the server whether this account owns a store. When it does, the
/// caller turns on the sell tools, and the owner is asked once to fill in
/// the store profile (name, address, city, state, picture).
Future<Map<String, dynamic>?> ngmyCheckMyStore(BuildContext context, {bool promptProfile = true}) async {
  final res = await NgmyStoreAccessApi.mine();
  final store = res['ok'] == true && res['store'] is Map ? Map<String, dynamic>.from(res['store'] as Map) : null;
  if (store == null) return null;
  if (promptProfile && store['profileDone'] != true && context.mounted && !_profilePromptOpen) {
    _profilePromptOpen = true;
    try {
      await showNgmyStoreProfileSheet(context, store: store, firstTime: true);
    } finally {
      _profilePromptOpen = false;
    }
  }
  return store;
}

Future<bool> showNgmyStoreProfileSheet(
  BuildContext context, {
  required Map<String, dynamic> store,
  bool firstTime = false,
}) async {
  final saved = await showModalBottomSheet<bool>(
    context: context,
    isScrollControlled: true,
    isDismissible: !firstTime,
    enableDrag: !firstTime,
    backgroundColor: Colors.transparent,
    builder: (_) => _StoreProfileSheet(store: store, firstTime: firstTime),
  );
  return saved == true;
}

class _StoreProfileSheet extends StatefulWidget {
  const _StoreProfileSheet({required this.store, required this.firstTime});
  final Map<String, dynamic> store;
  final bool firstTime;

  @override
  State<_StoreProfileSheet> createState() => _StoreProfileSheetState();
}

class _StoreProfileSheetState extends State<_StoreProfileSheet> {
  late final TextEditingController _nameC = TextEditingController(text: (widget.store['storeName'] ?? '').toString());
  late final TextEditingController _addressC = TextEditingController(text: (widget.store['address'] ?? '').toString());
  late final TextEditingController _cityC = TextEditingController(text: (widget.store['city'] ?? '').toString());
  late final TextEditingController _descC = TextEditingController(text: (widget.store['description'] ?? '').toString());
  late String _state = kNgmyUsStates.contains((widget.store['state'] ?? '').toString())
      ? (widget.store['state'] ?? '').toString()
      : kNgmyUsStates.first;
  Uint8List? _photo;
  bool _busy = false;

  Future<void> _pickPhoto() async {
    final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1600, imageQuality: 90);
    if (file == null) return;
    final raw = await file.readAsBytes();
    if (!mounted) return;
    final cropped = await showNgmyCircleCropper(context, raw);
    if (cropped == null) return;
    final shrunk = ngmyShrinkImageForUpload(cropped, mime: 'image/jpeg', maxSide: 600, quality: 82);
    setState(() => _photo = shrunk.bytes);
  }

  Future<void> _save() async {
    setState(() => _busy = true);
    final res = await NgmyStoreProfileApi.saveProfile({
      'storeName': _nameC.text.trim(),
      'address': _addressC.text.trim(),
      'city': _cityC.text.trim(),
      'state': _state,
      'description': _descC.text.trim(),
      if (_photo != null) 'photoBase64': base64Encode(_photo!),
      if (_photo != null) 'photoMime': 'image/jpeg',
    });
    if (!mounted) return;
    setState(() => _busy = false);
    if (res['ok'] == true) {
      Navigator.pop(context, true);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Store saved. Tap Sell to post up to 4 items.'), backgroundColor: Color(0xFF059669)),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text((res['error'] ?? 'Could not save.').toString()), backgroundColor: Colors.red.shade700),
      );
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
    final photoUrl = (widget.store['photoUrl'] ?? '').toString();
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.92, maxWidth: 560),
        margin: const EdgeInsets.fromLTRB(10, 10, 10, 12),
        clipBehavior: Clip.antiAlias,
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF151A24) : Colors.white,
          borderRadius: BorderRadius.circular(24),
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(
                padding: const EdgeInsets.fromLTRB(18, 18, 10, 16),
                decoration: const BoxDecoration(
                  gradient: LinearGradient(colors: [Color(0xFF4C1D95), Color(0xFF7C3AED)]),
                ),
                child: Row(
                  children: [
                    const Icon(Icons.storefront_rounded, color: Colors.white, size: 26),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            widget.firstTime ? 'Your NGMY store is ready' : 'Store profile',
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17),
                          ),
                          Text(
                            widget.firstTime
                                ? 'NGMY gave you store access. Set up your store so members can find you.'
                                : 'This is what members see in Stores and on helper gift cards.',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 12),
                          ),
                        ],
                      ),
                    ),
                    if (!widget.firstTime)
                      IconButton(
                        onPressed: () => Navigator.pop(context),
                        icon: const Icon(Icons.close_rounded, color: Colors.white),
                      ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 16, 16, 16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Center(
                      child: GestureDetector(
                        onTap: _pickPhoto,
                        child: Stack(
                          clipBehavior: Clip.none,
                          children: [
                            Container(
                              width: 100,
                              height: 100,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                border: Border.all(color: _kStorePurple, width: 2),
                                color: isDark ? const Color(0xFF1F2633) : const Color(0xFFF1F5F9),
                              ),
                              clipBehavior: Clip.antiAlias,
                              child: _photo != null
                                  ? Image.memory(_photo!, width: 100, height: 100, fit: BoxFit.cover)
                                  : (photoUrl.isNotEmpty
                                      ? Image.network(photoUrl, width: 100, height: 100, fit: BoxFit.cover)
                                      : Icon(Icons.storefront_rounded, size: 44, color: muted)),
                            ),
                            const Positioned(
                              right: -2,
                              bottom: -2,
                              child: CircleAvatar(
                                radius: 15,
                                backgroundColor: _kStorePurple,
                                child: Icon(Icons.camera_alt_rounded, size: 16, color: Colors.white),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Center(child: Text('Store picture *', style: TextStyle(fontSize: 11, color: muted))),
                    const SizedBox(height: 12),
                    TextField(
                      controller: _nameC,
                      textCapitalization: TextCapitalization.words,
                      decoration: _dec('Store name *', Icons.store_rounded),
                    ),
                    const SizedBox(height: 10),
                    TextField(controller: _addressC, decoration: _dec('Store address *', Icons.place_rounded)),
                    const SizedBox(height: 10),
                    TextField(controller: _cityC, decoration: _dec('City', Icons.location_city_rounded)),
                    const SizedBox(height: 10),
                    DropdownButtonFormField<String>(
                      value: _state,
                      isExpanded: true,
                      decoration: _dec('State *', Icons.map_rounded),
                      items: kNgmyUsStates.map((s) => DropdownMenuItem(value: s, child: Text(s))).toList(),
                      onChanged: (v) => setState(() => _state = v ?? _state),
                    ),
                    const SizedBox(height: 10),
                    TextField(
                      controller: _descC,
                      maxLines: 2,
                      decoration: _dec('What you sell', Icons.notes_rounded, hint: 'e.g. African food, spices, fufu flour'),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Each store can post up to 4 items. Your store shows on helper gift cards with this information.',
                      style: TextStyle(fontSize: 11.5, color: muted, height: 1.3),
                    ),
                    const SizedBox(height: 14),
                    SizedBox(
                      height: 48,
                      child: ElevatedButton.icon(
                        onPressed: _busy ? null : _save,
                        icon: _busy
                            ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                            : const Icon(Icons.check_circle_rounded, size: 18),
                        label: const Text('Save store', style: TextStyle(fontWeight: FontWeight.w800)),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: _kStorePurple,
                          foregroundColor: Colors.white,
                          elevation: 0,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                      ),
                    ),
                    if (widget.firstTime)
                      TextButton(
                        onPressed: () => Navigator.pop(context, false),
                        child: Text('Later', style: TextStyle(color: ink.withValues(alpha: 0.6))),
                      ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// ── Stores directory (everyone) ─────────────────────────────────────────────

/// Opens the list of NGMY stores, filterable by state and city. Tapping a
/// store returns it so the Store screen can show only that store's items.
Future<Map<String, dynamic>?> showNgmyStoresDirectory(BuildContext context, {String userState = ''}) {
  return showModalBottomSheet<Map<String, dynamic>>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _StoresDirectorySheet(userState: userState),
  );
}

class _StoresDirectorySheet extends StatefulWidget {
  const _StoresDirectorySheet({required this.userState});
  final String userState;

  @override
  State<_StoresDirectorySheet> createState() => _StoresDirectorySheetState();
}

class _StoresDirectorySheetState extends State<_StoresDirectorySheet> {
  List<Map<String, dynamic>> _stores = [];
  bool _loading = true;
  String? _error;
  String _state = '';
  String _city = '';

  @override
  void initState() {
    super.initState();
    _state = widget.userState.trim();
    _load();
  }

  static bool _same(dynamic a, String b) => (a ?? '').toString().trim().toLowerCase() == b.trim().toLowerCase();

  Future<void> _load() async {
    final res = await NgmyStoreProfileApi.directory();
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (res['ok'] == true && res['stores'] is List) {
        _stores = (res['stores'] as List)
            .whereType<Map>()
            .map((e) => Map<String, dynamic>.from(e))
            .where((s) => s['profileDone'] == true)
            .toList();
        // Nothing in the member's state yet: show every state instead of an empty list.
        if (_state.isNotEmpty && !_stores.any((s) => _same(s['state'], _state))) _state = '';
      } else {
        _error = (res['error'] ?? 'Could not load stores.').toString();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final tile = isDark ? const Color(0xFF1F2633) : const Color(0xFFF6F8FB);
    final states = _stores.map((s) => (s['state'] ?? '').toString().trim()).where((s) => s.isNotEmpty).toSet().toList()..sort();
    final inState = _stores.where((s) => _state.isEmpty || _same(s['state'], _state)).toList();
    final cities = inState.map((s) => (s['city'] ?? '').toString().trim()).where((s) => s.isNotEmpty).toSet().toList()..sort();
    final shown = inState.where((s) => _city.isEmpty || _same(s['city'], _city)).toList();

    Widget chip(String label, bool on, VoidCallback onTap) => Padding(
          padding: const EdgeInsets.only(right: 6),
          child: ChoiceChip(
            label: Text(label, style: const TextStyle(fontSize: 12)),
            selected: on,
            onSelected: (_) => onTap(),
            selectedColor: _kStorePurple.withValues(alpha: 0.25),
            visualDensity: VisualDensity.compact,
          ),
        );

    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.9, maxWidth: 620),
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
                Expanded(child: Text('Stores', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: ink))),
                IconButton(onPressed: () => Navigator.pop(context), icon: Icon(Icons.close_rounded, color: muted)),
              ],
            ),
          ),
          if (states.isNotEmpty)
            SizedBox(
              height: 40,
              child: ListView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 14),
                children: [
                  chip('All states', _state.isEmpty, () => setState(() {
                        _state = '';
                        _city = '';
                      })),
                  for (final s in states)
                    chip(s, _same(s, _state), () => setState(() {
                          _state = s;
                          _city = '';
                        })),
                ],
              ),
            ),
          if (cities.length > 1)
            SizedBox(
              height: 40,
              child: ListView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 14),
                children: [
                  chip('All cities', _city.isEmpty, () => setState(() => _city = '')),
                  for (final c in cities) chip(c, _same(c, _city), () => setState(() => _city = c)),
                ],
              ),
            ),
          Flexible(
            child: _loading
                ? const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
                : (shown.isEmpty
                    ? Padding(
                        padding: const EdgeInsets.all(30),
                        child: Text(_error ?? 'No stores here yet.', textAlign: TextAlign.center, style: TextStyle(color: muted)),
                      )
                    : ListView.builder(
                        shrinkWrap: true,
                        padding: const EdgeInsets.fromLTRB(14, 6, 14, 16),
                        itemCount: shown.length,
                        itemBuilder: (_, i) {
                          final s = shown[i];
                          final photo = (s['photoUrl'] ?? '').toString();
                          return Container(
                            margin: const EdgeInsets.only(bottom: 10),
                            decoration: BoxDecoration(color: tile, borderRadius: BorderRadius.circular(16)),
                            child: InkWell(
                              borderRadius: BorderRadius.circular(16),
                              onTap: () => Navigator.pop(context, s),
                              child: Padding(
                                padding: const EdgeInsets.all(12),
                                child: Row(
                                  children: [
                                    Container(
                                      width: 58,
                                      height: 58,
                                      decoration: BoxDecoration(
                                        shape: BoxShape.circle,
                                        border: Border.all(color: _kStorePurple, width: 2),
                                        color: isDark ? const Color(0xFF334155) : Colors.white,
                                      ),
                                      clipBehavior: Clip.antiAlias,
                                      child: photo.isEmpty
                                          ? const Icon(Icons.storefront_rounded, color: _kStorePurple)
                                          : Image.network(photo, width: 58, height: 58, fit: BoxFit.cover),
                                    ),
                                    const SizedBox(width: 12),
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            (s['storeName'] ?? '').toString(),
                                            maxLines: 1,
                                            overflow: TextOverflow.ellipsis,
                                            style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: ink),
                                          ),
                                          if ((s['description'] ?? '').toString().isNotEmpty)
                                            Text(
                                              (s['description'] ?? '').toString(),
                                              maxLines: 2,
                                              overflow: TextOverflow.ellipsis,
                                              style: TextStyle(fontSize: 12, color: ink.withValues(alpha: 0.8)),
                                            ),
                                          const SizedBox(height: 2),
                                          Text(
                                            [s['address'], s['city'], s['state']]
                                                .where((e) => (e ?? '').toString().trim().isNotEmpty)
                                                .join(', '),
                                            maxLines: 1,
                                            overflow: TextOverflow.ellipsis,
                                            style: TextStyle(fontSize: 11, color: muted),
                                          ),
                                        ],
                                      ),
                                    ),
                                    const Icon(Icons.chevron_right_rounded, color: _kStorePurple),
                                  ],
                                ),
                              ),
                            ),
                          );
                        },
                      )),
          ),
        ],
      ),
    );
  }
}
