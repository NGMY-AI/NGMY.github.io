import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_virtual_phone.dart';
import 'ngmy_vphone_extra.dart';
import 'ngmy_vphone_link.dart';
import 'ngmy_vphone_player.dart';

// ═════════════════════════════════════════════════════════════════════════════
// The Phone Wall: 100 phones, each one a phone of its own (its own number, device ID, place and memory of what it watched).
// Four are in front, two in a row. Paste a video link and all four play it by themselves. When the video is over the next four
// phones come in and play it too, set after set, until all 100 have, and then it starts again from the first set.
// ═════════════════════════════════════════════════════════════════════════════

/// Which phones are in front: set after set, and round after round.
class PhoneWallPlan {
  PhoneWallPlan({this.total = 100, this.perSet = 4});
  final int total, perSet;
  int set = 0;
  int round = 1;

  int get sets => (total / perSet).ceil();
  List<int> get phones => [for (var i = set * perSet; i < math.min(total, (set + 1) * perSet); i++) i];
  int get behind => total - (set + 1) * perSet < 0 ? 0 : total - (set + 1) * perSet;

  /// Goes to the next set. Returns true when all the phones were done and it went back to the first set (a new round).
  bool next() {
    set++;
    if (set >= sets) {
      set = 0;
      round++;
      return true;
    }
    return false;
  }

  void restart() {
    set = 0;
    round = 1;
  }
}

/// One phone of the wall: who it is, and what it has watched.
class WallPhoneInfo {
  WallPhoneInfo(this.index, this.deviceId, this.number);
  final int index;
  final String deviceId, number;
  final List<String> watched = [];

  PhoneCity get where => kPhoneCities[index % kPhoneCities.length];

  Map<String, dynamic> toJson() => {'id': deviceId, 'n': number, 'w': watched};
}

const String _kWallPrefs = 'ngmy_phonewall_v1';

List<WallPhoneInfo> makeWallPhones({int count = 100, math.Random? random}) {
  final r = random ?? math.Random.secure();
  String hex(int n) => List.generate(n, (_) => r.nextInt(16).toRadixString(16)).join();
  final used = <String>{};
  return [
    for (var i = 0; i < count; i++)
      () {
        String id;
        do {
          id = '${hex(4)}-${hex(4)}-${hex(4)}-${hex(4)}'.toUpperCase();
        } while (!used.add(id));
        return WallPhoneInfo(i, id, '+1 555 01${r.nextInt(10)}${r.nextInt(10)}${r.nextInt(10)}${r.nextInt(10)}${r.nextInt(10)}');
      }(),
  ];
}

/// The wall inside the Phone: it opens when a video starts in the Videos app. [link] is played on all the phones, four at a time.
/// [onOneDevice] goes back to the single phone.
class NgmyPhoneWallView extends StatefulWidget {
  const NgmyPhoneWallView({super.key, required this.link, required this.onOneDevice});
  final VPhoneLink link;
  final VoidCallback onOneDevice;

  @override
  State<NgmyPhoneWallView> createState() => NgmyPhoneWallState();
}

class NgmyPhoneWallState extends State<NgmyPhoneWallView> {
  final plan = PhoneWallPlan();
  List<WallPhoneInfo> phones = [];
  VPhoneLink link = VPhoneLink.none;
  bool playing = false;
  bool loaded = false;
  int _token = 0;
  int _run = 0;
  Timer? _advance;

  @override
  void initState() {
    super.initState();
    link = widget.link;
    _load();
  }

  @override
  void dispose() {
    _advance?.cancel();
    super.dispose();
  }

  Future<void> _load() async {
    List<WallPhoneInfo>? read;
    try {
      final p = await SharedPreferences.getInstance();
      final raw = p.getString(_kWallPrefs);
      if (raw != null) {
        final list = jsonDecode(raw) as List;
        if (list.length == 100) {
          read = [
            for (var i = 0; i < list.length; i++)
              WallPhoneInfo(i, '${(list[i] as Map)['id']}', '${list[i]['n']}')..watched.addAll(((list[i]['w'] as List?) ?? const []).map((e) => '$e')),
          ];
        }
      }
    } catch (_) {}
    phones = read ?? makeWallPhones();
    if (read == null) _save();
    if (!mounted) return;
    setState(() => loaded = true);
    play(link);
  }

  Future<void> _save() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString(_kWallPrefs, jsonEncode([for (final i in phones) i.toJson()]));
    } catch (_) {}
  }

  /// The set that is in front starts the video: each of its phones remembers it watched it.
  void _startSet() {
    for (final i in plan.phones) {
      final w = phones[i].watched;
      if (w.isEmpty || w.last != link.url) {
        w.add(link.url);
        if (w.length > 20) w.removeAt(0);
      }
    }
    _save();
  }

  /// Plays [l] on the phones, from the first four.
  void play(VPhoneLink l) {
    if (!l.playable) return;
    _advance?.cancel();
    setState(() {
      link = l;
      playing = true;
      _token++;
      _run++;
      plan.restart();
    });
    _startSet();
  }

  /// The video of the phones in front is over. The next set comes in a moment later (once, even if all four tell us).
  void _ended(int token) {
    if (token != _token || !playing) return;
    _token++;
    _advance?.cancel();
    _advance = Timer(const Duration(milliseconds: 1500), nextSet);
  }

  void nextSet() {
    if (!playing) return;
    _advance?.cancel();
    setState(() {
      plan.next();
      _token++;
      _run++;
    });
    _startSet();
  }

  void stop() {
    _advance?.cancel();
    setState(() {
      playing = false;
      _token++;
    });
  }

  void restart() => play(link);

  /// Tells the wall that the video of the front set is over (what the players do by themselves; the buttons and the tests use it too).
  void videoEnded() => _ended(_token);

  @override
  Widget build(BuildContext context) {
    final first = plan.phones.isEmpty ? 0 : plan.phones.first + 1, last = plan.phones.isEmpty ? 0 : plan.phones.last + 1;
    return Column(children: [
      Padding(
        padding: const EdgeInsets.fromLTRB(12, 0, 4, 2),
        child: Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Set ${plan.set + 1} of ${plan.sets} · phones $first to $last · round ${plan.round}', key: const Key('wall-status'), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
              const SizedBox(height: 5),
              LinearProgressIndicator(value: (plan.set + 1) / plan.sets, minHeight: 5, backgroundColor: Colors.white12, color: const Color(0xFF38BDF8)),
            ]),
          ),
          IconButton(key: const Key('wall-skip'), tooltip: 'Next four phones', onPressed: playing ? nextSet : null, icon: const Icon(Icons.skip_next_rounded, color: Colors.white)),
          IconButton(key: const Key('wall-restart'), tooltip: 'Start again from phone 1', onPressed: link.playable ? restart : null, icon: const Icon(Icons.replay_rounded, color: Colors.white)),
          IconButton(key: const Key('wall-one'), tooltip: 'Back to one phone', onPressed: widget.onOneDevice, icon: const Icon(Icons.smartphone_rounded, color: Color(0xFF38BDF8))),
        ]),
      ),
      Expanded(child: loaded ? Padding(padding: const EdgeInsets.fromLTRB(8, 4, 14, 8), child: _wall()) : const Center(child: CircularProgressIndicator())),
    ]);
  }

  Widget _wall() {
    final token = _token;
    return LayoutBuilder(builder: (context, c) {
      const gap = 10.0, cap = 28.0;
      // Four phones that fill all the room there is: two across, two down, each as big as its share.
      final w = ((c.maxWidth - 8) - gap) / 2;
      final h = ((c.maxHeight - 8) - gap) / 2 - cap;
      return Stack(children: [
        // The phones waiting behind the four in front.
        for (final k in [2, 1])
          Positioned(
            left: 4 + k * 4.0,
            top: 4 - k * 3.0,
            right: 4 - k * 4.0,
            bottom: 4 + k * 3.0,
            child: IgnorePointer(child: Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(22), color: Colors.white.withValues(alpha: 0.03 * (3 - k)), border: Border.all(color: Colors.white.withValues(alpha: 0.10 * (3 - k)))))),
          ),
        Positioned.fill(
          left: 4,
          top: 4,
          right: 4,
          bottom: 4,
          child: AnimatedSwitcher(
            duration: const Duration(milliseconds: 600),
            transitionBuilder: (child, anim) => SlideTransition(position: Tween<Offset>(begin: const Offset(0.35, 0), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)), child: FadeTransition(opacity: anim, child: child)),
            child: KeyedSubtree(
              key: ValueKey('${plan.round}-${plan.set}-$_run'),
              child: OverflowBox(
                minWidth: 0,
                minHeight: 0,
                maxWidth: double.infinity,
                maxHeight: double.infinity,
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  for (var row = 0; row < 2; row++) ...[
                    if (row == 1) const SizedBox(height: gap),
                    Row(mainAxisSize: MainAxisSize.min, children: [
                      for (var col = 0; col < 2; col++) ...[
                        if (col == 1) const SizedBox(width: gap),
                        _phone(plan.phones.length > row * 2 + col ? plan.phones[row * 2 + col] : -1, row * 2 + col, w, h, cap, token),
                      ],
                    ]),
                  ],
                ]),
              ),
            ),
          ),
        ),
      ]);
    });
  }

  Widget _phone(int index, int position, double w, double h, double cap, int token) {
    if (index < 0) return SizedBox(width: w, height: h + cap);
    final info = phones[index];
    final small = math.min(w, h);
    final bezel = math.max(3.0, small * 0.03);
    return SizedBox(
      key: Key('wall-phone-$index'),
      width: w,
      height: h + cap,
      child: Column(children: [
        Container(
          width: w,
          height: h,
          padding: EdgeInsets.all(bezel),
          decoration: BoxDecoration(color: const Color(0xFF0A0A0C), borderRadius: BorderRadius.circular(small * 0.12), border: Border.all(color: const Color(0xFF3B3F4A), width: 1.5), boxShadow: [BoxShadow(color: const Color(0xFF38BDF8).withValues(alpha: 0.15), blurRadius: 14)]),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(small * 0.09),
            child: Stack(fit: StackFit.expand, children: [
              if (playing && link.playable)
                _Delayed(
                  // One after the other, so the first phone is not kept waiting by the others.
                  delay: Duration(milliseconds: 300 * position),
                  child: VPhonePlayer(key: ValueKey('p$index-$_run'), link: link, muted: true, cover: true, onEnded: () => _ended(token)),
                )
              else
                Container(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: kPhoneWallpapers[index % kPhoneWallpapers.length])), alignment: Alignment.center, child: Icon(Icons.smartphone_rounded, color: Colors.white.withValues(alpha: 0.7), size: small * 0.3)),
              // The little camera pill of a phone.
              Positioned(top: 4, left: 0, right: 0, child: IgnorePointer(child: Center(child: Container(width: small * 0.22, height: 7, decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(4)))))),
            ]),
          ),
        ),
        SizedBox(
          height: cap,
          child: Center(child: Text('Phone ${index + 1} · ${info.number} · ${info.where.name} · seen ${info.watched.length}', maxLines: 2, textAlign: TextAlign.center, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: math.max(8.0, math.min(10.5, w / 24)), height: 1.15))),
        ),
      ]),
    );
  }
}

/// Shows [child] after [delay] (black until then).
class _Delayed extends StatefulWidget {
  const _Delayed({required this.delay, required this.child});
  final Duration delay;
  final Widget child;

  @override
  State<_Delayed> createState() => _DelayedState();
}

class _DelayedState extends State<_Delayed> {
  bool _go = false;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    if (widget.delay == Duration.zero) {
      _go = true;
    } else {
      _t = Timer(widget.delay, () {
        if (mounted) setState(() => _go = true);
      });
    }
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => _go ? widget.child : const ColoredBox(color: Colors.black);
}
