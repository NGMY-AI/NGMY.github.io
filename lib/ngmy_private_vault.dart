import 'dart:convert';
import 'dart:math' as math;

import 'package:crypto/crypto.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_studio_slot_video.dart';
import 'ngmy_vault_blob_store.dart';
import 'ngmy_vault_html_video.dart';
import 'ngmy_vault_pick_video.dart';
import 'ngmy_vault_web_io.dart';

const _kPinKey = 'ngmy_vault_pin_v1';
const _kIndexKey = 'ngmy_vault_index_v1';

String _hashKey(String base, String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${base}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

String _hashPin(String pin, String userEmail) {
  final salt = userEmail.toLowerCase().trim();
  return sha256.convert(utf8.encode('ngmy-vault::$salt::$pin')).toString();
}

Future<bool> _hasPin(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  return (prefs.getString(_hashKey(_kPinKey, userEmail)) ?? '').isNotEmpty;
}

Future<void> _setPin(String userEmail, String pin) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_hashKey(_kPinKey, userEmail), _hashPin(pin, userEmail));
}

Future<bool> _verifyPin(String userEmail, String pin) async {
  final prefs = await SharedPreferences.getInstance();
  final stored = prefs.getString(_hashKey(_kPinKey, userEmail)) ?? '';
  return stored.isNotEmpty && stored == _hashPin(pin, userEmail);
}

enum NgmyVaultKind { photo, video }

class NgmyVaultItem {
  NgmyVaultItem({required this.id, required this.kind, required this.mime, required this.createdAt});
  final String id;
  final NgmyVaultKind kind;
  final String mime;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'kind': kind.name,
        'mime': mime,
        'createdAt': createdAt.toUtc().toIso8601String(),
      };

  factory NgmyVaultItem.fromJson(Map<String, dynamic> j) => NgmyVaultItem(
        id: (j['id'] ?? '').toString(),
        kind: j['kind'] == 'video' ? NgmyVaultKind.video : NgmyVaultKind.photo,
        mime: (j['mime'] ?? '').toString(),
        createdAt: DateTime.tryParse((j['createdAt'] ?? '').toString()) ?? DateTime.now(),
      );
}

Future<List<NgmyVaultItem>> _loadIndex(String userEmail) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_hashKey(_kIndexKey, userEmail));
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw) as List;
    return list.map((e) => NgmyVaultItem.fromJson(Map<String, dynamic>.from(e as Map))).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _saveIndex(String userEmail, List<NgmyVaultItem> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_hashKey(_kIndexKey, userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

String _guessImageMime(String name) {
  final n = name.toLowerCase();
  if (n.endsWith('.png')) return 'image/png';
  if (n.endsWith('.webp')) return 'image/webp';
  if (n.endsWith('.gif')) return 'image/gif';
  return 'image/jpeg';
}

String _extFromMime(String mime) {
  switch (mime) {
    case 'image/png':
      return 'png';
    case 'image/webp':
      return 'webp';
    case 'image/gif':
      return 'gif';
    case 'video/webm':
      return 'webm';
    case 'video/quicktime':
      return 'mov';
    case 'video/ogg':
      return 'ogv';
    case 'video/x-m4v':
      return 'm4v';
    case 'video/mp4':
      return 'mp4';
    default:
      if (mime.startsWith('video/')) return 'mp4';
      return 'jpg';
  }
}

/// Never surfaces anything about the vault in shared totals elsewhere in
/// Business Essentials — the whole point is that it stays invisible.
Future<int> ngmyQuickDialCount({required String userEmail}) async => 0;

Future<void> showNgmyQuickDialDialog(BuildContext context, {required String userEmail}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute(builder: (_) => _DialerScreen(userEmail: userEmail)),
  );
}

enum _Stage { unlock, setFirst, setConfirm }

class _DialerScreen extends StatefulWidget {
  const _DialerScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_DialerScreen> createState() => _DialerScreenState();
}

class _DialerScreenState extends State<_DialerScreen> with SingleTickerProviderStateMixin {
  String _digits = '';
  String _pending = '';
  _Stage _stage = _Stage.unlock;
  bool _ready = false;
  late final AnimationController _shakeCtrl;

  @override
  void initState() {
    super.initState();
    _shakeCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 420));
    _init();
  }

  Future<void> _init() async {
    final has = await _hasPin(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _stage = has ? _Stage.unlock : _Stage.setFirst;
      _ready = true;
    });
  }

  @override
  void dispose() {
    _shakeCtrl.dispose();
    super.dispose();
  }

  void _shake() {
    HapticFeedback.heavyImpact();
    _shakeCtrl.forward(from: 0);
  }

  void _addDigit(String d) {
    if (_digits.length >= 12) return;
    HapticFeedback.selectionClick();
    setState(() => _digits += d);
  }

  void _backspace() {
    if (_digits.isEmpty) return;
    HapticFeedback.selectionClick();
    setState(() => _digits = _digits.substring(0, _digits.length - 1));
  }

  void _clear() {
    if (_digits.isEmpty) return;
    HapticFeedback.mediumImpact();
    setState(() => _digits = '');
  }

  /// A real 10-digit number dials out for real — that's what keeps the
  /// disguise honest. Anything shorter is treated as a vault code instead.
  Future<void> _dialOut(String number) async {
    final uri = Uri(scheme: 'tel', path: number);
    try {
      if (await canLaunchUrl(uri)) await launchUrl(uri, mode: LaunchMode.externalApplication);
    } catch (_) {}
    if (mounted) setState(() => _digits = '');
  }

  Future<void> _submit() async {
    if (_digits.length == 10) {
      await _dialOut(_digits);
      return;
    }
    if (_digits.length < 4) {
      _shake();
      return;
    }
    switch (_stage) {
      case _Stage.setFirst:
        setState(() {
          _pending = _digits;
          _digits = '';
          _stage = _Stage.setConfirm;
        });
        return;
      case _Stage.setConfirm:
        if (_digits == _pending) {
          await _setPin(widget.userEmail, _digits);
          if (!mounted) return;
          Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (_) => _VaultGalleryScreen(userEmail: widget.userEmail)));
        } else {
          setState(() {
            _digits = '';
            _pending = '';
            _stage = _Stage.setFirst;
          });
          _shake();
        }
        return;
      case _Stage.unlock:
        final ok = await _verifyPin(widget.userEmail, _digits);
        if (ok) {
          if (!mounted) return;
          Navigator.of(context).pushReplacement(MaterialPageRoute(builder: (_) => _VaultGalleryScreen(userEmail: widget.userEmail)));
        } else {
          setState(() => _digits = '');
          _shake();
        }
        return;
    }
  }

  String get _hint {
    switch (_stage) {
      case _Stage.setFirst:
        return 'Enter code';
      case _Stage.setConfirm:
        return 'Confirm code';
      case _Stage.unlock:
        return '';
    }
  }

  @override
  Widget build(BuildContext context) {
    if (!_ready) {
      return const Scaffold(backgroundColor: Colors.black, body: SizedBox.shrink());
    }
    final screenW = MediaQuery.sizeOf(context).width;
    final keyGap = 16.0;
    final keySize = ((screenW - keyGap * 2) / 3 * 0.7).clamp(66.0, 88.0);
    final keypadWidth = keySize * 3 + keyGap * 2;

    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            Align(
              alignment: Alignment.topLeft,
              child: IconButton(
                onPressed: () => Navigator.of(context).maybePop(),
                icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white38, size: 18),
              ),
            ),
            const SizedBox(height: 12),
            AnimatedBuilder(
              animation: _shakeCtrl,
              builder: (context, child) {
                final t = _shakeCtrl.value;
                final dx = math.sin(t * math.pi * 5) * 10 * (1 - t);
                return Transform.translate(offset: Offset(dx, 0), child: child);
              },
              child: Column(
                children: [
                  SizedBox(
                    height: 16,
                    child: Text(_hint, style: const TextStyle(color: Colors.white38, fontSize: 12, fontWeight: FontWeight.w600)),
                  ),
                  const SizedBox(height: 10),
                  SizedBox(
                    height: 64,
                    child: FittedBox(
                      fit: BoxFit.scaleDown,
                      child: Text(
                        _digits.isEmpty ? ' ' : _digits,
                        style: const TextStyle(color: Colors.white, fontSize: 40, fontWeight: FontWeight.w400),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const Spacer(flex: 2),
            _keypad(keySize, keyGap),
            const SizedBox(height: 22),
            _callRow(keySize, keypadWidth),
            const Spacer(),
          ],
        ),
      ),
    );
  }

  Widget _keypad(double keySize, double keyGap) {
    final rows = <List<(String, String)>>[
      [('1', ''), ('2', 'ABC'), ('3', 'DEF')],
      [('4', 'GHI'), ('5', 'JKL'), ('6', 'MNO')],
      [('7', 'PQRS'), ('8', 'TUV'), ('9', 'WXYZ')],
      [('*', ''), ('0', '+'), ('#', '')],
    ];
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: rows
          .map(
            (row) => Padding(
              padding: EdgeInsets.symmetric(vertical: keyGap * 0.3),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: row
                    .map((k) => Padding(padding: EdgeInsets.symmetric(horizontal: keyGap / 2), child: _key(k.$1, k.$2, keySize)))
                    .toList(),
              ),
            ),
          )
          .toList(),
    );
  }

  Widget _key(String digit, String letters, double keySize) {
    return GestureDetector(
      onTap: () => _addDigit(digit),
      child: Container(
        width: keySize,
        height: keySize,
        decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF2C2C2E)),
        alignment: Alignment.center,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(digit, style: TextStyle(color: Colors.white, fontSize: keySize * 0.42, fontWeight: FontWeight.w400)),
            if (letters.isNotEmpty)
              Text(
                letters,
                style: TextStyle(color: Colors.white54, fontSize: keySize * 0.115, letterSpacing: 1.5, fontWeight: FontWeight.w600),
              ),
          ],
        ),
      ),
    );
  }

  Widget _callRow(double keySize, double keypadWidth) {
    return SizedBox(
      width: keypadWidth,
      height: keySize,
      child: Stack(
        alignment: Alignment.center,
        children: [
          GestureDetector(
            onTap: _submit,
            child: Container(
              width: keySize,
              height: keySize,
              decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF34C759)),
              child: Icon(Icons.call_rounded, color: Colors.white, size: keySize * 0.42),
            ),
          ),
          if (_digits.isNotEmpty)
            Align(
              alignment: Alignment.centerRight,
              child: GestureDetector(
                onTap: _backspace,
                onLongPress: _clear,
                child: SizedBox(
                  width: keySize * 0.8,
                  child: Icon(Icons.backspace_outlined, color: Colors.white54, size: keySize * 0.34),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _VaultGalleryScreen extends StatefulWidget {
  const _VaultGalleryScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_VaultGalleryScreen> createState() => _VaultGalleryScreenState();
}

class _VaultGalleryScreenState extends State<_VaultGalleryScreen> {
  List<NgmyVaultItem> _items = [];
  bool _loading = true;
  bool _selectMode = false;
  final Set<String> _selected = {};

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final items = await _loadIndex(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _items = items;
      _loading = false;
    });
  }

  Future<void> _addPhotos() async {
    final picker = ImagePicker();
    List<XFile> files;
    try {
      files = await picker.pickMultiImage(imageQuality: 90);
    } catch (_) {
      files = const [];
    }
    if (files.isEmpty) return;
    var added = 0;
    for (final f in files) {
      try {
        final bytes = await f.readAsBytes();
        if (bytes.isEmpty) continue;
        final id = '${DateTime.now().microsecondsSinceEpoch}_$added';
        final mime = _guessImageMime(f.name);
        final ok = await NgmyVaultBlobStore.put(id, bytes, mime: mime);
        if (!ok) continue;
        _items.insert(0, NgmyVaultItem(id: id, kind: NgmyVaultKind.photo, mime: mime, createdAt: DateTime.now()));
        added++;
      } catch (_) {}
    }
    if (added == 0) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not save photos. Try again with a smaller image.')),
      );
      return;
    }
    await _saveIndex(widget.userEmail, _items);
    if (!mounted) return;
    setState(() {});
    _notice('Saved $added photo${added == 1 ? '' : 's'} privately.');
  }

  Future<void> _addVideo() async {
    try {
      final picked = await ngmyVaultPickVideoBytes();
      if (picked == null) return;
      final id = '${DateTime.now().microsecondsSinceEpoch}_v';
      final ok = await NgmyVaultBlobStore.put(id, picked.bytes, mime: picked.mime);
      if (!ok) {
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not save video. Storage may be full — try a shorter clip.')),
        );
        return;
      }
      _items.insert(0, NgmyVaultItem(id: id, kind: NgmyVaultKind.video, mime: picked.mime, createdAt: DateTime.now()));
      await _saveIndex(widget.userEmail, _items);
      if (!mounted) return;
      setState(() {});
      _notice('Saved 1 video privately.');
    } on StateError catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.message)));
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not add that video. Try MP4 or a shorter clip.')),
      );
    }
  }

  void _notice(String saved) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("$saved Note: your phone's regular Photos app may still have the original — browsers can't remove it automatically."),
        duration: const Duration(seconds: 5),
      ),
    );
  }

  Widget _addOption(BuildContext ctx, {required String emoji, required String title, required String subtitle, required VoidCallback onTap}) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(18),
        onTap: () {
          Navigator.pop(ctx);
          onTap();
        },
        child: Container(
          padding: const EdgeInsets.all(14),
          margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 5),
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.05),
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
          ),
          child: Row(
            children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [_accent1, _accent2]),
                  borderRadius: BorderRadius.circular(14),
                ),
                alignment: Alignment.center,
                child: Text(emoji, style: const TextStyle(fontSize: 20)),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
                    const SizedBox(height: 2),
                    Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 11.5)),
                  ],
                ),
              ),
              Icon(Icons.chevron_right_rounded, color: Colors.white.withValues(alpha: 0.3)),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _showAddSheet() async {
    await showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF16121F),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const SizedBox(height: 10),
            Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2))),
            const SizedBox(height: 16),
            _addOption(ctx, emoji: '🖼️', title: 'Add photos', subtitle: 'Choose one or more from your gallery', onTap: _addPhotos),
            _addOption(ctx, emoji: '🎬', title: 'Add a video', subtitle: 'Choose a clip from your gallery', onTap: _addVideo),
            const SizedBox(height: 12),
          ],
        ),
      ),
    );
  }

  void _toggleSelect(String id) {
    setState(() {
      if (_selected.contains(id)) {
        _selected.remove(id);
      } else {
        _selected.add(id);
      }
      if (_selected.isEmpty) _selectMode = false;
    });
  }

  void _enterSelect(String id) {
    HapticFeedback.mediumImpact();
    setState(() {
      _selectMode = true;
      _selected.add(id);
    });
  }

  Future<void> _deleteSelected() async {
    final ids = Set<String>.from(_selected);
    for (final id in ids) {
      await NgmyVaultBlobStore.delete(id);
    }
    _items.removeWhere((e) => ids.contains(e.id));
    await _saveIndex(widget.userEmail, _items);
    if (!mounted) return;
    setState(() {
      _selected.clear();
      _selectMode = false;
    });
  }

  Future<void> _downloadSelected() async {
    final ids = Set<String>.from(_selected);
    var count = 0;
    for (final item in _items.where((e) => ids.contains(e.id))) {
      final bytes = await NgmyVaultBlobStore.getBytes(item.id);
      if (bytes == null) continue;
      final mime = item.kind == NgmyVaultKind.video
          ? (item.mime.trim().isEmpty ? 'video/mp4' : item.mime.trim())
          : (item.mime.trim().isEmpty ? 'image/jpeg' : item.mime.trim());
      final ext = _extFromMime(mime);
      final ok = await ngmyVaultDownloadBytes(bytes, 'ngmy_${item.id}.$ext', mime);
      if (ok) count++;
    }
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Downloaded $count item${count == 1 ? '' : 's'}.')));
    setState(() {
      _selected.clear();
      _selectMode = false;
    });
  }

  Future<void> _openViewer(int index) async {
    await Navigator.of(context).push(
      MaterialPageRoute(builder: (_) => _VaultViewerScreen(userEmail: widget.userEmail, items: _items, initialIndex: index)),
    );
    _reload();
  }

  static const _accent1 = Color(0xFF6366F1);
  static const _accent2 = Color(0xFFEC4899);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Color(0xFF0B0B14), Color(0xFF181229), Color(0xFF0B0F1C)],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              _header(),
              Expanded(
                child: _loading
                    ? const Center(child: CircularProgressIndicator(color: _accent1))
                    : _items.isEmpty
                        ? _empty()
                        : _grid(),
              ),
              if (_selectMode) _selectBar(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _header() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(8, 10, 16, 10),
      child: Row(
        children: [
          Material(
            color: Colors.transparent,
            child: InkWell(
              customBorder: const CircleBorder(),
              onTap: () => Navigator.of(context).maybePop(),
              child: Container(
                padding: const EdgeInsets.all(9),
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), shape: BoxShape.circle),
                child: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 16),
              ),
            ),
          ),
          const SizedBox(width: 12),
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(
              gradient: const LinearGradient(colors: [_accent1, _accent2]),
              borderRadius: BorderRadius.circular(12),
              boxShadow: [BoxShadow(color: _accent1.withValues(alpha: 0.4), blurRadius: 14, offset: const Offset(0, 5))],
            ),
            child: const Icon(Icons.lock_rounded, color: Colors.white, size: 18),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('My Vault', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                Text(
                  _items.isEmpty ? 'Nothing saved yet' : '${_items.length} item${_items.length == 1 ? '' : 's'}',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11.5, fontWeight: FontWeight.w600),
                ),
              ],
            ),
          ),
          Material(
            color: Colors.transparent,
            child: InkWell(
              customBorder: const CircleBorder(),
              onTap: _showAddSheet,
              child: Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [_accent1, _accent2]),
                  shape: BoxShape.circle,
                  boxShadow: [BoxShadow(color: _accent2.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4))],
                ),
                child: const Icon(Icons.add_rounded, color: Colors.white, size: 20),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _empty() {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 84,
            height: 84,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(colors: [_accent1.withValues(alpha: 0.18), _accent2.withValues(alpha: 0.14)]),
            ),
            child: const Icon(Icons.lock_outline_rounded, color: Colors.white38, size: 34),
          ),
          const SizedBox(height: 18),
          const Text('Nothing here yet', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
          const SizedBox(height: 6),
          Text('Photos and videos you add stay just for you', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 12.5)),
          const SizedBox(height: 20),
          Material(
            color: Colors.transparent,
            child: InkWell(
              borderRadius: BorderRadius.circular(24),
              onTap: _showAddSheet,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 12),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [_accent1, _accent2]),
                  borderRadius: BorderRadius.circular(24),
                  boxShadow: [BoxShadow(color: _accent2.withValues(alpha: 0.3), blurRadius: 14, offset: const Offset(0, 6))],
                ),
                child: const Text('Add photos or a video', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _grid() {
    return GridView.builder(
      padding: const EdgeInsets.fromLTRB(12, 4, 12, 16),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 8, crossAxisSpacing: 8),
      itemCount: _items.length,
      itemBuilder: (context, i) {
        final item = _items[i];
        final selected = _selected.contains(item.id);
        return GestureDetector(
          onTap: () => _selectMode ? _toggleSelect(item.id) : _openViewer(i),
          onLongPress: () {
            if (!_selectMode) _enterSelect(item.id);
          },
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 150),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: selected ? _accent1 : Colors.white.withValues(alpha: 0.06), width: selected ? 2 : 1),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.3), blurRadius: 8, offset: const Offset(0, 3))],
            ),
            child: Stack(
              fit: StackFit.expand,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(15),
                  child: item.kind == NgmyVaultKind.video ? _videoTile() : _photoTile(item),
                ),
                if (selected)
                  ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Container(color: _accent1.withValues(alpha: 0.22)),
                  ),
                if (_selectMode)
                  Positioned(
                    top: 6,
                    right: 6,
                    child: Container(
                      padding: const EdgeInsets.all(1.5),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: selected ? null : Colors.black38,
                        gradient: selected ? const LinearGradient(colors: [_accent1, _accent2]) : null,
                        border: selected ? null : Border.all(color: Colors.white70, width: 1.4),
                      ),
                      child: Icon(selected ? Icons.check_rounded : null, color: Colors.white, size: 15),
                    ),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _photoTile(NgmyVaultItem item) {
    return FutureBuilder<Uint8List?>(
      future: NgmyVaultBlobStore.getBytes(item.id),
      builder: (context, snap) {
        final bytes = snap.data;
        if (bytes == null) {
          return Container(
            color: Colors.white.withValues(alpha: 0.04),
            alignment: Alignment.center,
            child: const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 1.8, color: Colors.white24)),
          );
        }
        return Image.memory(bytes, fit: BoxFit.cover);
      },
    );
  }

  Widget _videoTile() {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF241B3A), Color(0xFF151024)]),
      ),
      alignment: Alignment.center,
      child: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.14), shape: BoxShape.circle),
        child: const Icon(Icons.play_arrow_rounded, color: Colors.white, size: 20),
      ),
    );
  }

  Widget _selectBar() {
    return Container(
      margin: const EdgeInsets.fromLTRB(14, 0, 14, 12),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.06),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.white.withValues(alpha: 0.1)),
      ),
      child: Row(
        children: [
          Text('${_selected.length} selected', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
          const Spacer(),
          _pillAction(Icons.download_rounded, 'Download', _selected.isEmpty ? null : _downloadSelected, const [_accent1, _accent2]),
          const SizedBox(width: 8),
          _pillAction(Icons.delete_outline_rounded, 'Delete', _selected.isEmpty ? null : _deleteSelected, const [Color(0xFFEF4444), Color(0xFFB91C1C)]),
        ],
      ),
    );
  }

  Widget _pillAction(IconData icon, String label, VoidCallback? onTap, List<Color> colors) {
    final enabled = onTap != null;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: onTap,
        child: Opacity(
          opacity: enabled ? 1 : 0.35,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(16)),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(icon, color: Colors.white, size: 15),
                const SizedBox(width: 5),
                Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _VaultViewerScreen extends StatefulWidget {
  const _VaultViewerScreen({required this.userEmail, required this.items, required this.initialIndex});
  final String userEmail;
  final List<NgmyVaultItem> items;
  final int initialIndex;

  @override
  State<_VaultViewerScreen> createState() => _VaultViewerScreenState();
}

class _VaultViewerScreenState extends State<_VaultViewerScreen> {
  late List<NgmyVaultItem> _items;
  late int _index;
  late final PageController _pageCtrl;
  bool _actionsVisible = false;

  @override
  void initState() {
    super.initState();
    _items = List.of(widget.items);
    _index = widget.initialIndex.clamp(0, math.max(0, _items.length - 1));
    _pageCtrl = PageController(initialPage: _index);
    // Videos need chrome for Download; photos stay immersive until tap.
    if (_items.isNotEmpty && _items[_index].kind == NgmyVaultKind.video) {
      _actionsVisible = true;
    }
  }

  @override
  void dispose() {
    _pageCtrl.dispose();
    super.dispose();
  }

  void _toggleActions() {
    HapticFeedback.lightImpact();
    setState(() => _actionsVisible = !_actionsVisible);
  }

  Future<void> _download() async {
    if (_items.isEmpty) return;
    final item = _items[_index];
    final bytes = await NgmyVaultBlobStore.getBytes(item.id);
    if (bytes == null || !mounted) return;
    final mime = item.kind == NgmyVaultKind.video
        ? (item.mime.trim().isEmpty ? 'video/mp4' : item.mime.trim())
        : (item.mime.trim().isEmpty ? 'image/jpeg' : item.mime.trim());
    final ext = _extFromMime(mime);
    final ok = await ngmyVaultDownloadBytes(bytes, 'ngmy_${item.id}.$ext', mime);
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(ok ? 'Downloaded.' : 'Could not download.')));
  }

  Future<void> _delete() async {
    if (_items.isEmpty) return;
    final item = _items[_index];
    await NgmyVaultBlobStore.delete(item.id);
    final all = await _loadIndex(widget.userEmail);
    all.removeWhere((e) => e.id == item.id);
    await _saveIndex(widget.userEmail, all);
    if (!mounted) return;
    if (_items.length <= 1) {
      Navigator.of(context).pop();
      return;
    }
    setState(() {
      _items.removeAt(_index);
      if (_index >= _items.length) _index = _items.length - 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_items.isEmpty) {
      return const Scaffold(backgroundColor: Colors.black, body: SizedBox.shrink());
    }
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          GestureDetector(
            onTap: () {
              // Don't steal taps from the HTML video controls — only toggle
              // chrome when the current page is a photo (or via long-press).
              final item = _items.isEmpty ? null : _items[_index];
              if (item?.kind == NgmyVaultKind.video) return;
              _toggleActions();
            },
            onLongPress: _toggleActions,
            child: PageView.builder(
              controller: _pageCtrl,
              itemCount: _items.length,
              onPageChanged: (i) => setState(() {
                _index = i;
                if (_items[i].kind == NgmyVaultKind.video) {
                  _actionsVisible = true;
                }
              }),
              itemBuilder: (context, i) => _page(_items[i]),
            ),
          ),
          AnimatedOpacity(
            opacity: _actionsVisible ? 1 : 0,
            duration: const Duration(milliseconds: 180),
            child: IgnorePointer(
              ignoring: !_actionsVisible,
              child: SafeArea(
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      child: Row(
                        children: [_roundBtn(Icons.close_rounded, () => Navigator.of(context).pop())],
                      ),
                    ),
                    const Spacer(),
                    Padding(
                      padding: const EdgeInsets.only(bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          _actionBtn(Icons.download_rounded, 'Download', _download),
                          const SizedBox(width: 24),
                          _actionBtn(Icons.delete_outline_rounded, 'Delete', _delete, color: const Color(0xFFEF4444)),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _page(NgmyVaultItem item) {
    if (item.kind == NgmyVaultKind.video) return _VaultVideoPage(itemId: item.id, mime: item.mime);
    return FutureBuilder<Uint8List?>(
      future: NgmyVaultBlobStore.getBytes(item.id),
      builder: (context, snap) {
        final bytes = snap.data;
        if (bytes == null) return const Center(child: CircularProgressIndicator(color: Colors.white54));
        return InteractiveViewer(
          minScale: 1,
          maxScale: 4,
          child: Center(child: Image.memory(bytes, fit: BoxFit.contain)),
        );
      },
    );
  }

  Widget _roundBtn(IconData icon, VoidCallback onTap) {
    return Material(
      color: Colors.black45,
      shape: const CircleBorder(),
      child: InkWell(
        customBorder: const CircleBorder(),
        onTap: onTap,
        child: Padding(padding: const EdgeInsets.all(10), child: Icon(icon, color: Colors.white, size: 20)),
      ),
    );
  }

  Widget _actionBtn(IconData icon, String label, VoidCallback onTap, {Color color = Colors.white}) {
    return Material(
      color: Colors.black54,
      borderRadius: BorderRadius.circular(16),
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, color: color, size: 24),
              const SizedBox(height: 4),
              Text(label, style: TextStyle(color: color, fontSize: 11, fontWeight: FontWeight.w700)),
            ],
          ),
        ),
      ),
    );
  }
}

class _VaultVideoPage extends StatefulWidget {
  const _VaultVideoPage({required this.itemId, required this.mime});
  final String itemId;
  final String mime;

  @override
  State<_VaultVideoPage> createState() => _VaultVideoPageState();
}

class _VaultVideoPageState extends State<_VaultVideoPage> {
  String? _blobUrl;
  String? _error;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final mime = widget.mime.trim().isEmpty ? 'video/mp4' : widget.mime.trim();
    try {
      final url = await NgmyVaultBlobStore.getObjectUrl(widget.itemId, mime);
      if (!mounted) return;
      if (url == null || url.isEmpty) {
        setState(() {
          _loading = false;
          _error = 'Video data missing. Re-add the clip from your gallery.';
        });
        return;
      }
      setState(() {
        _blobUrl = url;
        _loading = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'Could not open this video.';
      });
    }
  }

  @override
  void dispose() {
    final url = _blobUrl;
    if (url != null) {
      NgmyVaultBlobStore.revokeObjectUrl(url);
      ngmyVaultRevokeBlobUrl(url);
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Center(child: CircularProgressIndicator(color: Colors.white54));
    }
    if (_error != null) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontSize: 13)),
        ),
      );
    }
    final url = _blobUrl;
    if (url == null) {
      return const Center(child: Text('Video unavailable', style: TextStyle(color: Colors.white54)));
    }
    // Dedicated vault player with native controls — studio cover player is not
    // reliable for full-clip private vault playback.
    if (kIsWeb) return NgmyVaultHtmlVideo(source: url);
    return NgmyStudioSlotVideo(source: url);
  }
}
