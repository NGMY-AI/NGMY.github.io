import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_admin_slides_vault.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_transfer.dart' show ngmySlidesDeckCopyForImport;

const _bg = Color(0xFF0A1020);
const _card = Color(0xFF131C33);
const _edge = Color(0x1AFFFFFF);
const _blue = Color(0xFF3B82F6);
const _violet = Color(0xFF8B5CF6);
const _mint = Color(0xFF34D399);
const _grad = LinearGradient(colors: [_blue, _violet]);

/// Admin only: choose any presentations and save them to the database, or bring saved ones back.
Future<void> showNgmyAdminSlidesVault(
  BuildContext context, {
  required List<NgmySlideDeck> decks,
  required Future<void> Function(List<NgmySlideDeck> imported) onRestore,
  Future<List<Map<String, dynamic>>?> Function()? listLoader,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _VaultSheet(decks: decks, onRestore: onRestore, listLoader: listLoader ?? NgmyAdminSlidesVault.list),
  );
}

class _VaultSheet extends StatefulWidget {
  const _VaultSheet({required this.decks, required this.onRestore, required this.listLoader});

  final List<NgmySlideDeck> decks;
  final Future<void> Function(List<NgmySlideDeck> imported) onRestore;
  final Future<List<Map<String, dynamic>>?> Function() listLoader;

  @override
  State<_VaultSheet> createState() => _VaultSheetState();
}

class _VaultSheetState extends State<_VaultSheet> {
  final Set<String> _picked = {};
  List<Map<String, dynamic>>? _saved;
  bool _loading = true;
  bool _busy = false;
  int _tab = 0;
  String? _note;
  bool _noteIsError = false;

  @override
  void initState() {
    super.initState();
    unawaited(_refresh());
  }

  Future<void> _refresh() async {
    final list = await widget.listLoader();
    if (!mounted) return;
    setState(() {
      _saved = list;
      _loading = false;
    });
  }

  void _say(String text, {bool error = false}) {
    _note = text;
    _noteIsError = error;
  }

  Future<void> _save() async {
    final decks = widget.decks.where((d) => _picked.contains(d.id)).toList();
    if (decks.isEmpty || _busy) return;
    setState(() {
      _busy = true;
      _note = null;
    });
    final n = await NgmyAdminSlidesVault.save(decks);
    if (!mounted) return;
    setState(() {
      _busy = false;
      if (n == decks.length) {
        _say('Saved $n presentation${n == 1 ? '' : 's'} to the database.');
        _picked.clear();
        _tab = 1;
      } else if (n == 0) {
        _say('Could not save. Check the connection and try again.', error: true);
      } else {
        _say('Saved $n of ${decks.length}. Try the rest again.', error: true);
      }
    });
    await _refresh();
  }

  Future<void> _restore(Map<String, dynamic> item) async {
    if (_busy) return;
    setState(() {
      _busy = true;
      _note = null;
    });
    final deck = await NgmyAdminSlidesVault.load((item['id'] ?? '').toString());
    if (deck == null) {
      if (!mounted) return;
      setState(() {
        _busy = false;
        _say('Could not open that saved presentation.', error: true);
      });
      return;
    }
    final copy = ngmySlidesDeckCopyForImport(deck);
    copy.transferReceived = false;
    await widget.onRestore([copy]);
    if (!mounted) return;
    setState(() {
      _busy = false;
      _say('"${deck.name}" is back in your presentations.');
    });
  }

  Future<void> _delete(Map<String, dynamic> item) async {
    if (_busy) return;
    final name = (item['name'] ?? 'this presentation').toString();
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: _card,
        title: const Text('Delete from the database?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
        content: Text('"$name" will be removed from the database. Your own copy stays in your presentations.', style: const TextStyle(color: Colors.white70)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Keep it')),
          TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete', style: TextStyle(color: Color(0xFFF87171)))),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    setState(() => _busy = true);
    await NgmyAdminSlidesVault.remove((item['id'] ?? '').toString());
    if (!mounted) return;
    setState(() => _busy = false);
    await _refresh();
  }

  String _when(String raw) {
    final t = DateTime.tryParse(raw)?.toLocal();
    if (t == null) return '';
    const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return '${m[t.month - 1]} ${t.day}';
  }

  // ── Pieces ──────────────────────────────────────────────────────────────

  Widget _deckBadge(IconData icon, {double size = 44}) => Container(
        width: size,
        height: size,
        decoration: BoxDecoration(gradient: _grad, borderRadius: BorderRadius.circular(size * 0.3)),
        child: Icon(icon, color: Colors.white, size: size * 0.5),
      );

  Widget _tabButton(int i, IconData icon, String label, int count) {
    final on = _tab == i;
    return Expanded(
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () => setState(() => _tab = i),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          padding: const EdgeInsets.symmetric(vertical: 11),
          decoration: BoxDecoration(gradient: on ? _grad : null, borderRadius: BorderRadius.circular(14)),
          child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            Icon(icon, size: 17, color: on ? Colors.white : Colors.white54),
            const SizedBox(width: 7),
            Text(label, style: TextStyle(color: on ? Colors.white : Colors.white54, fontWeight: FontWeight.w800, fontSize: 13.5)),
            if (count > 0) ...[
              const SizedBox(width: 7),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 1.5),
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: on ? 0.25 : 0.1), borderRadius: BorderRadius.circular(10)),
                child: Text('$count', style: TextStyle(color: on ? Colors.white : Colors.white60, fontSize: 11, fontWeight: FontWeight.w900)),
              ),
            ],
          ]),
        ),
      ),
    );
  }

  Widget _pickTile(NgmySlideDeck d) {
    final on = _picked.contains(d.id);
    return GestureDetector(
      onTap: () => setState(() => on ? _picked.remove(d.id) : _picked.add(d.id)),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: on ? _blue.withValues(alpha: 0.14) : _card,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: on ? _blue : _edge, width: on ? 1.8 : 1),
        ),
        child: Row(children: [
          _deckBadge(Icons.slideshow_rounded),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(d.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14.5)),
              const SizedBox(height: 3),
              Text('${d.slides.length} slide${d.slides.length == 1 ? '' : 's'}', style: const TextStyle(color: Colors.white38, fontSize: 11.5, fontWeight: FontWeight.w600)),
            ]),
          ),
          AnimatedContainer(
            duration: const Duration(milliseconds: 150),
            width: 26,
            height: 26,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: on ? _grad : null,
              border: on ? null : Border.all(color: Colors.white24, width: 1.6),
            ),
            child: on ? const Icon(Icons.check_rounded, color: Colors.white, size: 17) : null,
          ),
        ]),
      ),
    );
  }

  Widget _savedTile(Map<String, dynamic> item) {
    final when = _when((item['savedAt'] ?? '').toString());
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.fromLTRB(12, 12, 8, 12),
      decoration: BoxDecoration(color: _card, borderRadius: BorderRadius.circular(18), border: Border.all(color: _edge)),
      child: Row(children: [
        _deckBadge(Icons.cloud_done_rounded),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text((item['name'] ?? 'Presentation').toString(), maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14.5)),
            const SizedBox(height: 3),
            Text('${item['slides'] ?? '?'} slides${when.isEmpty ? '' : ' · saved $when'}', style: const TextStyle(color: Colors.white38, fontSize: 11.5, fontWeight: FontWeight.w600)),
          ]),
        ),
        _roundAction(Icons.download_rounded, _mint, 'Bring it back', _busy ? null : () => _restore(item)),
        const SizedBox(width: 6),
        _roundAction(Icons.delete_outline_rounded, const Color(0xFFF87171), 'Delete', _busy ? null : () => _delete(item)),
      ]),
    );
  }

  Widget _roundAction(IconData icon, Color color, String tip, VoidCallback? onTap) => Tooltip(
        message: tip,
        child: GestureDetector(
          onTap: onTap,
          child: Container(
            width: 38,
            height: 38,
            decoration: BoxDecoration(color: color.withValues(alpha: onTap == null ? 0.06 : 0.14), shape: BoxShape.circle),
            child: Icon(icon, color: onTap == null ? Colors.white24 : color, size: 19),
          ),
        ),
      );

  Widget _empty(IconData icon, String title, String body) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 36),
        child: Column(children: [
          Icon(icon, size: 46, color: Colors.white24),
          const SizedBox(height: 12),
          Text(title, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 15)),
          const SizedBox(height: 4),
          Text(body, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white38, fontSize: 12.5)),
        ]),
      );

  @override
  Widget build(BuildContext context) {
    final saved = _saved ?? const <Map<String, dynamic>>[];
    final allPicked = widget.decks.isNotEmpty && _picked.length == widget.decks.length;
    return Container(
      constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.9),
      decoration: const BoxDecoration(
        color: _bg,
        borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
        border: Border(top: BorderSide(color: Color(0x33FFFFFF))),
      ),
      child: SafeArea(
        top: false,
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          const SizedBox(height: 10),
          Container(width: 42, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(3))),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 16, 14, 4),
            child: Row(children: [
              _deckBadge(Icons.cloud_sync_rounded, size: 46),
              const SizedBox(width: 12),
              const Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('Slides database', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)),
                  SizedBox(height: 2),
                  Text('Admin only · keep as many as you like', style: TextStyle(color: Colors.white38, fontSize: 12, fontWeight: FontWeight.w600)),
                ]),
              ),
              if (_busy) const Padding(padding: EdgeInsets.only(right: 8), child: SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.4))),
              IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white54)),
            ]),
          ),
          Container(
            margin: const EdgeInsets.fromLTRB(18, 10, 18, 12),
            padding: const EdgeInsets.all(4),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: BorderRadius.circular(18), border: Border.all(color: _edge)),
            child: Row(children: [
              _tabButton(0, Icons.cloud_upload_rounded, 'Save', widget.decks.length),
              _tabButton(1, Icons.inventory_2_rounded, 'Saved', saved.length),
            ]),
          ),
          if (_note != null)
            Container(
              width: double.infinity,
              margin: const EdgeInsets.fromLTRB(18, 0, 18, 10),
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
              decoration: BoxDecoration(
                color: (_noteIsError ? const Color(0xFFF87171) : _mint).withValues(alpha: 0.12),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: (_noteIsError ? const Color(0xFFF87171) : _mint).withValues(alpha: 0.4)),
              ),
              child: Row(children: [
                Icon(_noteIsError ? Icons.error_outline_rounded : Icons.check_circle_rounded, size: 18, color: _noteIsError ? const Color(0xFFF87171) : _mint),
                const SizedBox(width: 8),
                Expanded(child: Text(_note!, style: const TextStyle(color: Colors.white, fontSize: 12.5, fontWeight: FontWeight.w700))),
              ]),
            ),
          Flexible(
            child: ListView(
              shrinkWrap: true,
              padding: const EdgeInsets.fromLTRB(18, 0, 18, 12),
              children: [
                if (_tab == 0) ...[
                  Row(children: [
                    Expanded(child: Text(_picked.isEmpty ? 'Tap the ones to save' : '${_picked.length} picked', style: const TextStyle(color: Colors.white54, fontSize: 12.5, fontWeight: FontWeight.w700))),
                    if (widget.decks.isNotEmpty)
                      GestureDetector(
                        onTap: () => setState(() {
                          if (allPicked) {
                            _picked.clear();
                          } else {
                            _picked.addAll(widget.decks.map((d) => d.id));
                          }
                        }),
                        child: Text(allPicked ? 'Clear' : 'Pick all', style: const TextStyle(color: Color(0xFF93C5FD), fontWeight: FontWeight.w800, fontSize: 13)),
                      ),
                  ]),
                  const SizedBox(height: 10),
                  if (widget.decks.isEmpty) _empty(Icons.slideshow_rounded, 'No presentations yet', 'Make one first, then save it here.'),
                  for (final d in widget.decks) _pickTile(d),
                ] else ...[
                  if (_loading)
                    const Padding(padding: EdgeInsets.symmetric(vertical: 40), child: Center(child: CircularProgressIndicator()))
                  else if (_saved == null)
                    _empty(Icons.cloud_off_rounded, 'Could not reach the database', 'Check the connection, then open this again.')
                  else if (saved.isEmpty)
                    _empty(Icons.inventory_2_outlined, 'Nothing saved yet', 'Save some presentations and they will show up here.'),
                  for (final item in saved) _savedTile(item),
                ],
              ],
            ),
          ),
          if (_tab == 0)
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 4, 18, 14),
              child: GestureDetector(
                onTap: _picked.isEmpty || _busy ? null : _save,
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 160),
                  height: 54,
                  decoration: BoxDecoration(
                    gradient: _picked.isEmpty ? null : _grad,
                    color: _picked.isEmpty ? Colors.white.withValues(alpha: 0.07) : null,
                    borderRadius: BorderRadius.circular(18),
                    boxShadow: _picked.isEmpty ? null : [BoxShadow(color: _violet.withValues(alpha: 0.4), blurRadius: 18, offset: const Offset(0, 6))],
                  ),
                  child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                    Icon(Icons.cloud_upload_rounded, color: _picked.isEmpty ? Colors.white30 : Colors.white, size: 21),
                    const SizedBox(width: 9),
                    Flexible(
                      child: FittedBox(
                        fit: BoxFit.scaleDown,
                        child: Text(
                          _picked.isEmpty ? 'Pick presentations to save' : 'Save ${_picked.length} to the database',
                          style: TextStyle(color: _picked.isEmpty ? Colors.white30 : Colors.white, fontWeight: FontWeight.w900, fontSize: 15),
                        ),
                      ),
                    ),
                  ]),
                ),
              ),
            )
          else
            const SizedBox(height: 10),
        ]),
      ),
    );
  }
}
