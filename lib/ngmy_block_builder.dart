import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// BLOCK BUILDER: snap blocks together to make games, art, stories and music.
// ═════════════════════════════════════════════════════════════════════════════

const List<String> kBbEmoji = ['🦖', '🐘', '🌍', '🚀', '🐦', '🐠', '⭐', '🦋', '🐱', '🐶', '⚛️', '🪐', '🐝', '🍎', '🤖', '👻'];
const List<(String, Color)> kBbColors = [
  ('red', Color(0xFFEF4444)),
  ('orange', Color(0xFFFB923C)),
  ('yellow', Color(0xFFFACC15)),
  ('green', Color(0xFF4ADE80)),
  ('blue', Color(0xFF38BDF8)),
  ('purple', Color(0xFFA78BFA)),
  ('pink', Color(0xFFF472B6)),
  ('white', Color(0xFFFFFFFF)),
];
const List<String> kBbDrums = ['kick', 'snare', 'hat', 'clap'];
const List<String> kBbConds = ['touching the edge', 'touching another sprite', 'score is more than 5', 'score is more than 10', 'coin flip'];
const List<String> kBbInst = ['bell', 'piano', 'flute', 'marimba'];
const List<(String, List<Color>)> kBbBackdrops = [
  ('Space', [Color(0xFF05060F), Color(0xFF14123A)]),
  ('Grass', [Color(0xFF7DD3FC), Color(0xFF4ADE80)]),
  ('Ocean', [Color(0xFF0EA5E9), Color(0xFF0C4A6E)]),
  ('Sunset', [Color(0xFFFB923C), Color(0xFF7C3AED)]),
  ('Paper', [Color(0xFFF8FAFC), Color(0xFFE2E8F0)]),
];

class BbDef {
  const BbDef(this.kind, this.tpl, this.cat, this.kinds, this.defaults, {this.isC = false, this.isHat = false});
  final String kind;
  final String tpl;
  final String cat;
  final String kinds; // one letter per param: n number, t text, c colour, e emoji, d drum, q condition, i instrument
  final List<dynamic> defaults;
  final bool isC;
  final bool isHat;
}

const Map<String, Color> kBbCat = {
  'Events': Color(0xFFFACC15),
  'Motion': Color(0xFF38BDF8),
  'Looks': Color(0xFFA78BFA),
  'Sound': Color(0xFFF472B6),
  'Control': Color(0xFFFB923C),
  'Pen': Color(0xFF34D399),
  'Score': Color(0xFFF87171),
};

const List<BbDef> kBbDefs = [
  BbDef('flag', 'when ▶ is pressed', 'Events', '', [], isHat: true),
  BbDef('tap', 'when I am tapped', 'Events', '', [], isHat: true),
  BbDef('move', 'move {0} steps', 'Motion', 'n', [10]),
  BbDef('turn', 'turn right {0}°', 'Motion', 'n', [15]),
  BbDef('turnl', 'turn left {0}°', 'Motion', 'n', [15]),
  BbDef('goto', 'go to x {0} y {1}', 'Motion', 'nn', [50, 50]),
  BbDef('rand', 'go to a random place', 'Motion', '', []),
  BbDef('face', 'point in direction {0}', 'Motion', 'n', [0]),
  BbDef('bounce', 'bounce if on the edge', 'Motion', '', []),
  BbDef('say', 'say {0}', 'Looks', 't', ['Hello!']),
  BbDef('sayfor', 'say {0} for {1} sec', 'Looks', 'tn', ['Hi!', 2]),
  BbDef('size', 'change size by {0}', 'Looks', 'n', [10]),
  BbDef('setsize', 'set size to {0} %', 'Looks', 'n', [100]),
  BbDef('color', 'glow {0}', 'Looks', 'c', [3]),
  BbDef('costume', 'become {0}', 'Looks', 'e', [0]),
  BbDef('show', 'show', 'Looks', '', []),
  BbDef('hide', 'hide', 'Looks', '', []),
  BbDef('note', 'play note {0}', 'Sound', 'n', [0]),
  BbDef('drum', 'play drum {0}', 'Sound', 'd', [0]),
  BbDef('pitch', 'change pitch by {0}', 'Sound', 'n', [2]),
  BbDef('inst', 'instrument {0}', 'Sound', 'i', [0]),
  BbDef('wait', 'wait {0} sec', 'Control', 'n', [0.5]),
  BbDef('repeat', 'repeat {0} times', 'Control', 'n', [10], isC: true),
  BbDef('forever', 'forever', 'Control', '', [], isC: true),
  BbDef('if', 'if {0}', 'Control', 'q', [0], isC: true),
  BbDef('stop', 'stop everything', 'Control', '', []),
  BbDef('pendown', 'pen down', 'Pen', '', []),
  BbDef('penup', 'pen up', 'Pen', '', []),
  BbDef('pencolor', 'pen colour {0}', 'Pen', 'c', [4]),
  BbDef('clear', 'clear drawing', 'Pen', '', []),
  BbDef('setscore', 'set score to {0}', 'Score', 'n', [0]),
  BbDef('addscore', 'change score by {0}', 'Score', 'n', [1]),
  BbDef('sayscore', 'say the score', 'Score', '', []),
];

final Map<String, BbDef> _kDefByKind = {for (final d in kBbDefs) d.kind: d};

class Blk {
  Blk(this.kind, [List<dynamic>? p, List<Blk>? kids])
      : p = p ?? List<dynamic>.from(_kDefByKind[kind]?.defaults ?? const []),
        kids = kids ?? [];
  final String kind;
  final List<dynamic> p;
  final List<Blk> kids;

  BbDef get def => _kDefByKind[kind]!;

  Blk copy() => Blk(kind, List<dynamic>.from(p), [for (final k in kids) k.copy()]);

  Map<String, dynamic> toJson() => {'k': kind, 'p': p, if (kids.isNotEmpty) 'c': [for (final k in kids) k.toJson()]};

  static Blk? fromJson(dynamic j) {
    if (j is! Map || !_kDefByKind.containsKey(j['k'])) return null;
    return Blk(j['k'] as String, List<dynamic>.from((j['p'] ?? []) as List), [for (final c in (j['c'] ?? []) as List) ?Blk.fromJson(c)]);
  }
}

class BbScript {
  BbScript(this.hat, [List<Blk>? body]) : body = body ?? [];
  Blk hat;
  final List<Blk> body;
}

class BbSprite {
  BbSprite(this.emoji, this.x0, this.y0, [this.dir0 = 0]) {
    reset();
  }
  int emoji;
  double x0, y0, dir0;
  final List<BbScript> scripts = [];
  double x = 0, y = 0, dir = 0, size = 100;
  bool visible = true, penDown = false;
  int glow = -1, penColor = 4, inst = 0;
  int pitch = 0;
  String say = '';
  double sayTimer = 0;
  double lastX = 0, lastY = 0;

  void reset() {
    x = x0;
    y = y0;
    dir = dir0;
    size = 100;
    visible = true;
    penDown = false;
    glow = -1;
    penColor = 4;
    pitch = 0;
    inst = 0;
    say = '';
    sayTimer = 0;
    lastX = x;
    lastY = y;
  }
}

class _Fr {
  _Fr(this.list, {this.loop = 0, this.owner});
  final List<Blk> list;
  int i = 0;
  int loop;
  final Blk? owner;
}

class _Th {
  _Th(this.sp, this.script, List<Blk> body) : st = [_Fr(body)];
  final BbSprite sp;
  final BbScript script;
  final List<_Fr> st;
  double wait = 0;
  bool done = false;
}

class _Seg {
  _Seg(this.x1, this.y1, this.x2, this.y2, this.c);
  final double x1, y1, x2, y2;
  final Color c;
}

BbSprite _s(int e, double x, double y, [double d = 0]) => BbSprite(e, x, y, d);

List<BbScript> _sc(List<(String, List<Blk>)> l) => [for (final e in l) BbScript(Blk(e.$1), e.$2)];

class BbProject {
  BbProject(this.name, this.sprites, [this.backdrop = 0]);
  String name;
  final List<BbSprite> sprites;
  int backdrop;

  Map<String, dynamic> toJson() => {
        'n': name,
        'bg': backdrop,
        's': [
          for (final s in sprites)
            {
              'e': s.emoji,
              'x': s.x0,
              'y': s.y0,
              'd': s.dir0,
              'sc': [
                for (final sc in s.scripts) {'h': sc.hat.kind, 'b': [for (final b in sc.body) b.toJson()]},
              ],
            },
        ],
      };

  static BbProject? fromJson(dynamic j) {
    try {
      final m = j as Map;
      final sprites = <BbSprite>[];
      for (final sj in m['s'] as List) {
        final s = BbSprite(((sj['e'] as num).toInt()) % kBbEmoji.length, (sj['x'] as num).toDouble(), (sj['y'] as num).toDouble(), (sj['d'] as num).toDouble());
        for (final sc in sj['sc'] as List) {
          final hat = sc['h'] as String;
          if (!_kDefByKind.containsKey(hat)) continue;
          s.scripts.add(BbScript(Blk(hat), [for (final b in sc['b'] as List) ?Blk.fromJson(b)]));
        }
        sprites.add(s);
      }
      if (sprites.isEmpty) return null;
      return BbProject((m['n'] ?? 'Project').toString(), sprites, (m['bg'] as num?)?.toInt() ?? 0);
    } catch (_) {
      return null;
    }
  }
}

List<BbProject> bbStarters() => [
      BbProject('Bouncing dino', [
        _s(0, 30, 50, 25)..scripts.addAll(_sc([('flag', [Blk('forever', null, [Blk('move', [3]), Blk('bounce')])])])),
      ]),
      BbProject('Draw a star', [
        _s(14, 30, 70, 0)..scripts.addAll(_sc([('flag', [Blk('clear'), Blk('pendown'), Blk('pencolor', [2]), Blk('repeat', [5], [Blk('move', [60]), Blk('turn', [144])]), Blk('penup')])])),
      ], 4),
      BbProject('Rainbow spiral', [
        _s(6, 50, 50, 0)..scripts.addAll(_sc([('flag', [Blk('clear'), Blk('pendown'), Blk('repeat', [60], [Blk('move', [4]), Blk('turn', [20]), Blk('pencolor', [0]), Blk('move', [8]), Blk('turn', [20])])])])),
      ]),
      BbProject('Planet orbit', [
        _s(11, 70, 50, 90)..scripts.addAll(_sc([('flag', [Blk('pendown'), Blk('pencolor', [7]), Blk('forever', null, [Blk('move', [2]), Blk('turn', [3])])])])),
        _s(2, 50, 50, 0)..scripts.addAll(_sc([('tap', [Blk('sayfor', ['I am Earth!', 2]), Blk('note', [7])])])),
      ]),
      BbProject('Melody maker', [
        _s(14, 50, 50, 0)
          ..scripts.addAll(_sc([
            ('flag', [Blk('inst', [0]), Blk('repeat', [8], [Blk('note', [0]), Blk('pitch', [2]), Blk('wait', [0.25])]), Blk('say', ['Nice tune!'])]),
            ('tap', [Blk('drum', [0]), Blk('size', [10]), Blk('wait', [0.2]), Blk('size', [-10])]),
          ])),
      ], 3),
      BbProject('Catch the bee', [
        _s(12, 50, 50, 40)
          ..scripts.addAll(_sc([
            ('flag', [Blk('setscore', [0]), Blk('forever', null, [Blk('move', [4]), Blk('bounce'), Blk('if', [2], [Blk('say', ['You win! 🎉']), Blk('stop')])])]),
            ('tap', [Blk('addscore', [1]), Blk('note', [7]), Blk('turn', [97]), Blk('rand')]),
          ])),
      ], 1),
      BbProject('Space chase', [
        _s(3, 20, 80, 0)
          ..scripts.addAll(_sc([('flag', [Blk('forever', null, [Blk('move', [3]), Blk('turn', [4]), Blk('bounce')])])])),
        _s(15, 70, 30, 180)
          ..scripts.addAll(_sc([
            ('flag', [Blk('forever', null, [Blk('move', [2]), Blk('turn', [-3]), Blk('bounce'), Blk('if', [1], [Blk('say', ['Boo!']), Blk('drum', [1]), Blk('rand'), Blk('wait', [1]), Blk('say', [''])])])]),
          ])),
      ]),
    ];

class NgmyBlockBuilder extends StatefulWidget {
  const NgmyBlockBuilder({super.key});

  @override
  State<NgmyBlockBuilder> createState() => _NgmyBlockBuilderState();
}

class _NgmyBlockBuilderState extends State<NgmyBlockBuilder> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  late BbProject _proj;
  int _spr = 0;
  String _cat = 'Motion';
  Blk? _sel; // selected block (or hat)
  List<_Th> _threads = [];
  bool _running = false;
  double _score = 0;
  final List<_Seg> _lines = [];
  final math.Random _rnd = math.Random();
  Size _stage = const Size(300, 300);
  int _dragSprite = -1;
  List<BbProject> _starters = [];
  List<BbProject> _saved = [];

  BbSprite get _cur => _proj.sprites[_spr.clamp(0, _proj.sprites.length - 1)];

  @override
  void initState() {
    super.initState();
    _starters = bbStarters();
    _proj = BbProject.fromJson(_starters[0].toJson())!;
    startFrames();
    _loadSaved();
  }

  Future<void> _loadSaved() async {
    try {
      final p = await SharedPreferences.getInstance();
      final raw = p.getString('ngmy_block_projects_v1');
      if (raw == null) return;
      final list = [for (final j in jsonDecode(raw) as List) ?BbProject.fromJson(j)];
      if (mounted) setState(() => _saved = list);
    } catch (_) {}
  }

  Future<void> _persist() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString('ngmy_block_projects_v1', jsonEncode([for (final s in _saved) s.toJson()]));
    } catch (_) {}
  }

  // ── Running ────────────────────────────────────────────────────────────────

  void _resetWorld() {
    for (final s in _proj.sprites) {
      s.reset();
    }
    _lines.clear();
    _score = 0;
  }

  void _run() {
    _resetWorld();
    _threads = [
      for (final s in _proj.sprites)
        for (final sc in s.scripts)
          if (sc.hat.kind == 'flag') _Th(s, sc, sc.body),
    ];
    setState(() => _running = true);
  }

  void _stop() {
    setState(() {
      _threads = [];
      _running = false;
      _resetWorld();
    });
  }

  void _tapSprite(BbSprite s) {
    for (final sc in s.scripts) {
      if (sc.hat.kind != 'tap') continue;
      if (_threads.any((t) => identical(t.script, sc) && !t.done)) continue;
      _threads.add(_Th(s, sc, sc.body));
    }
    _running = _threads.isNotEmpty;
  }

  @override
  void onFrame(double dt) {
    var changed = false;
    for (final s in _proj.sprites) {
      if (s.sayTimer > 0) {
        s.sayTimer -= dt;
        if (s.sayTimer <= 0) s.say = '';
      }
    }
    if (_threads.isNotEmpty) {
      changed = true;
      for (final t in List<_Th>.from(_threads)) {
        _step(t, dt);
      }
      _threads.removeWhere((t) => t.done);
      if (_threads.isEmpty) _running = false;
    }
    if (changed) setState(() {});
  }

  bool _edge(BbSprite s) => s.x <= 3 || s.x >= 97 || s.y <= 3 || s.y >= 97;

  bool _touchingOther(BbSprite s) {
    final r = 8 + s.size / 100 * 6;
    for (final o in _proj.sprites) {
      if (identical(o, s) || !o.visible) continue;
      if ((Offset(o.x, o.y) - Offset(s.x, s.y)).distance < r) return true;
    }
    return false;
  }

  bool _cond(int q, BbSprite s) {
    switch (q) {
      case 0:
        return _edge(s);
      case 1:
        return _touchingOther(s);
      case 2:
        return _score > 5;
      case 3:
        return _score > 10;
      default:
        return _rnd.nextBool();
    }
  }

  double _n(Blk b, int i) => (b.p.length > i && b.p[i] is num) ? (b.p[i] as num).toDouble() : double.tryParse('${b.p.length > i ? b.p[i] : 0}') ?? 0;

  void _move(BbSprite s, double steps) {
    final a = s.dir * math.pi / 180;
    final ox = s.x, oy = s.y;
    s.x = (s.x + math.cos(a) * steps * 0.5).clamp(0.0, 100.0);
    s.y = (s.y + math.sin(a) * steps * 0.5).clamp(0.0, 100.0);
    if (s.penDown && (s.x != ox || s.y != oy) && _lines.length < 6000) {
      _lines.add(_Seg(ox, oy, s.x, s.y, kBbColors[s.penColor % kBbColors.length].$2));
    }
  }

  void _step(_Th t, double dt) {
    if (t.wait > 0) {
      t.wait -= dt;
      if (t.wait > 0) return;
    }
    var guard = 0;
    while (guard++ < 300) {
      if (t.st.isEmpty) {
        t.done = true;
        return;
      }
      final fr = t.st.last;
      if (fr.i >= fr.list.length) {
        final o = fr.owner;
        if (o != null && (o.kind == 'repeat' || o.kind == 'forever')) {
          if (fr.loop == -1 || --fr.loop > 0) {
            fr.i = 0;
            return; // one picture per round, so you can see it move
          }
        }
        t.st.removeLast();
        continue;
      }
      final b = fr.list[fr.i++];
      final s = t.sp;
      switch (b.kind) {
        case 'move':
          _move(s, _n(b, 0));
        case 'turn':
          s.dir = (s.dir + _n(b, 0)) % 360;
        case 'turnl':
          s.dir = (s.dir - _n(b, 0)) % 360;
        case 'goto':
          s.x = _n(b, 0).clamp(0, 100);
          s.y = _n(b, 1).clamp(0, 100);
        case 'rand':
          s.x = 8 + _rnd.nextDouble() * 84;
          s.y = 8 + _rnd.nextDouble() * 84;
        case 'face':
          s.dir = _n(b, 0) % 360;
        case 'bounce':
          if (_edge(s)) {
            if (s.x <= 3 || s.x >= 97) s.dir = (180 - s.dir) % 360;
            if (s.y <= 3 || s.y >= 97) s.dir = (-s.dir) % 360;
            s.x = s.x.clamp(4.0, 96.0);
            s.y = s.y.clamp(4.0, 96.0);
          }
        case 'say':
          s.say = '${b.p.isEmpty ? '' : b.p[0]}';
          s.sayTimer = 0;
        case 'sayfor':
          s.say = '${b.p.isEmpty ? '' : b.p[0]}';
          s.sayTimer = _n(b, 1);
          t.wait = s.sayTimer;
        case 'size':
          s.size = (s.size + _n(b, 0)).clamp(10.0, 400.0);
        case 'setsize':
          s.size = _n(b, 0).clamp(10.0, 400.0);
        case 'color':
          s.glow = _n(b, 0).round() % kBbColors.length;
        case 'costume':
          s.emoji = _n(b, 0).round() % kBbEmoji.length;
        case 'show':
          s.visible = true;
        case 'hide':
          s.visible = false;
        case 'note':
          NgmyTone.playNote(kBbInst[s.inst % kBbInst.length], (_n(b, 0) + s.pitch).round(), ms: 450, volume: 0.55);
        case 'drum':
          NgmyTone.drum(kBbDrums[_n(b, 0).round() % kBbDrums.length], volume: 0.7);
        case 'pitch':
          s.pitch = (s.pitch + _n(b, 0).round()).clamp(-24, 36);
        case 'inst':
          s.inst = _n(b, 0).round();
        case 'wait':
          t.wait = _n(b, 0).clamp(0, 30).toDouble();
        case 'repeat':
          final n = _n(b, 0).round();
          if (n > 0) t.st.add(_Fr(b.kids, loop: n, owner: b));
        case 'forever':
          t.st.add(_Fr(b.kids, loop: -1, owner: b));
        case 'if':
          if (_cond(_n(b, 0).round(), s)) t.st.add(_Fr(b.kids));
        case 'stop':
          for (final x in _threads) {
            x.done = true;
          }
          return;
        case 'pendown':
          s.penDown = true;
        case 'penup':
          s.penDown = false;
        case 'pencolor':
          s.penColor = _n(b, 0).round() % kBbColors.length;
        case 'clear':
          _lines.clear();
        case 'setscore':
          _score = _n(b, 0);
        case 'addscore':
          _score += _n(b, 0);
        case 'sayscore':
          s.say = 'Score: ${_score.round()}';
      }
      if (t.wait > 0) return;
    }
  }

  // ── Editing ────────────────────────────────────────────────────────────────

  List<Blk>? _listOf(Blk target) {
    List<Blk>? find(List<Blk> l) {
      if (l.contains(target)) return l;
      for (final b in l) {
        final r = find(b.kids);
        if (r != null) return r;
      }
      return null;
    }

    for (final sc in _cur.scripts) {
      final r = find(sc.body);
      if (r != null) return r;
    }
    return null;
  }

  BbScript? _scriptOfHat(Blk h) {
    for (final sc in _cur.scripts) {
      if (identical(sc.hat, h)) return sc;
    }
    return null;
  }

  void _add(BbDef d) {
    final nb = Blk(d.kind);
    setState(() {
      if (d.isHat) {
        final sc = BbScript(nb);
        _cur.scripts.add(sc);
        _sel = nb;
        return;
      }
      final sel = _sel;
      if (sel == null) {
        if (_cur.scripts.isEmpty) _cur.scripts.add(BbScript(Blk('flag')));
        _cur.scripts.last.body.add(nb);
      } else {
        final hatScript = _scriptOfHat(sel);
        if (hatScript != null) {
          hatScript.body.insert(0, nb);
        } else if (sel.def.isC) {
          sel.kids.add(nb);
        } else {
          final l = _listOf(sel);
          if (l == null) {
            if (_cur.scripts.isEmpty) _cur.scripts.add(BbScript(Blk('flag')));
            _cur.scripts.last.body.add(nb);
          } else {
            l.insert(l.indexOf(sel) + 1, nb);
          }
        }
      }
      _sel = nb;
    });
    NgmyTone.playNote('bell', 12 + (kBbDefs.indexWhere((x) => x.kind == d.kind) % 12), ms: 160, volume: 0.35);
  }

  void _deleteSel() {
    final sel = _sel;
    if (sel == null) return;
    setState(() {
      final sc = _scriptOfHat(sel);
      if (sc != null) {
        _cur.scripts.remove(sc);
      } else {
        _listOf(sel)?.remove(sel);
      }
      _sel = null;
    });
  }

  void _moveSel(int dir) {
    final sel = _sel;
    if (sel == null) return;
    final sc = _scriptOfHat(sel);
    setState(() {
      if (sc != null) {
        final i = _cur.scripts.indexOf(sc);
        final j = i + dir;
        if (j >= 0 && j < _cur.scripts.length) {
          _cur.scripts.removeAt(i);
          _cur.scripts.insert(j, sc);
        }
        return;
      }
      final l = _listOf(sel);
      if (l == null) return;
      final i = l.indexOf(sel);
      final j = i + dir;
      if (j >= 0 && j < l.length) {
        l.removeAt(i);
        l.insert(j, sel);
      }
    });
  }

  void _duplicateSel() {
    final sel = _sel;
    if (sel == null || _scriptOfHat(sel) != null) return;
    final l = _listOf(sel);
    if (l == null) return;
    setState(() {
      final c = sel.copy();
      l.insert(l.indexOf(sel) + 1, c);
      _sel = c;
    });
  }

  Future<void> _editParam(Blk b, int i, String kind) async {
    switch (kind) {
      case 'c':
        setState(() => b.p[i] = ((b.p[i] as num).toInt() + 1) % kBbColors.length);
      case 'e':
        setState(() => b.p[i] = ((b.p[i] as num).toInt() + 1) % kBbEmoji.length);
      case 'd':
        setState(() => b.p[i] = ((b.p[i] as num).toInt() + 1) % kBbDrums.length);
      case 'q':
        setState(() => b.p[i] = ((b.p[i] as num).toInt() + 1) % kBbConds.length);
      case 'i':
        setState(() => b.p[i] = ((b.p[i] as num).toInt() + 1) % kBbInst.length);
      default:
        final ctl = TextEditingController(text: '${b.p[i]}');
        final v = await showDialog<String>(
          context: context,
          builder: (ctx) => AlertDialog(
            backgroundColor: const Color(0xFF1B1B1F),
            title: Text(kind == 't' ? 'Type the words' : 'Type a number', style: const TextStyle(color: Colors.white, fontSize: 16)),
            content: TextField(controller: ctl, autofocus: true, style: const TextStyle(color: Colors.white), keyboardType: kind == 't' ? TextInputType.text : const TextInputType.numberWithOptions(decimal: true, signed: true), onSubmitted: (s) => Navigator.pop(ctx, s)),
            actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')), FilledButton(onPressed: () => Navigator.pop(ctx, ctl.text), child: const Text('OK'))],
          ),
        );
        if (v == null) return;
        setState(() => b.p[i] = kind == 't' ? v : (double.tryParse(v.trim()) ?? 0));
    }
  }

  void _loadProject(BbProject p) {
    _stop();
    setState(() {
      _proj = BbProject.fromJson(p.toJson())!;
      _spr = 0;
      _sel = null;
    });
  }

  Future<void> _saveDialog() async {
    final ctl = TextEditingController(text: _proj.name);
    final name = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('Name your project', style: TextStyle(color: Colors.white, fontSize: 16)),
        content: TextField(controller: ctl, autofocus: true, style: const TextStyle(color: Colors.white)),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')), FilledButton(onPressed: () => Navigator.pop(ctx, ctl.text), child: const Text('Save'))],
      ),
    );
    if (name == null || name.trim().isEmpty) return;
    _proj.name = name.trim();
    final copy = BbProject.fromJson(_proj.toJson())!;
    setState(() {
      _saved.removeWhere((s) => s.name == copy.name);
      _saved.insert(0, copy);
    });
    await _persist();
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Saved "${copy.name}" on this phone')));
  }

  Future<void> _projectsDialog() async {
    await showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF1B1B1F),
        title: const Text('Open a project', style: TextStyle(color: Colors.white, fontSize: 16)),
        content: SizedBox(
          width: 320,
          child: ListView(shrinkWrap: true, children: [
            const Padding(padding: EdgeInsets.only(bottom: 4), child: Text('EXAMPLES TO REMIX', style: TextStyle(color: Colors.white38, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1))),
            for (final p in _starters)
              ListTile(
                dense: true,
                leading: Text(kBbEmoji[p.sprites.first.emoji], style: const TextStyle(fontSize: 22)),
                title: Text(p.name, style: const TextStyle(color: Colors.white)),
                onTap: () {
                  Navigator.pop(ctx);
                  _loadProject(p);
                },
              ),
            if (_saved.isNotEmpty) const Padding(padding: EdgeInsets.only(top: 8, bottom: 4), child: Text('MY PROJECTS', style: TextStyle(color: Colors.white38, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1))),
            for (final p in _saved)
              ListTile(
                dense: true,
                leading: Text(kBbEmoji[p.sprites.first.emoji], style: const TextStyle(fontSize: 22)),
                title: Text(p.name, style: const TextStyle(color: Colors.white)),
                trailing: IconButton(
                  icon: const Icon(Icons.delete_outline_rounded, color: Colors.white38, size: 20),
                  onPressed: () {
                    setState(() => _saved.remove(p));
                    _persist();
                    Navigator.pop(ctx);
                  },
                ),
                onTap: () {
                  Navigator.pop(ctx);
                  _loadProject(p);
                },
              ),
          ]),
        ),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close'))],
      ),
    );
  }

  // ── UI ─────────────────────────────────────────────────────────────────────

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'BLOCK BUILDER',
      accent: const Color(0xFFFACC15),
      help: 'Build your own games, art and music by snapping blocks together, like Scratch.\n\n1. Tap a block colour (Motion, Looks, Sound...) and tap a block to add it to your script. The block you tapped last is highlighted: new blocks go right after it. Tap a "repeat" or "forever" block and new blocks go inside it.\n2. Tap a number or word inside a block to change it. Colours and sounds change each time you tap them.\n3. Press Play to run. Press Stop to start over.\n\nEvent blocks (yellow) start your scripts: "when ▶ is pressed" starts when you press Play, and "when I am tapped" starts when you tap your character on the stage.\n\nOpen the Examples to see how a bouncing animal, a spiral drawing, an orbiting planet, a melody and a catch game are built. Change them and make them yours! Press Save to keep your project on this phone.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'block-builder'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share a picture')],
      stage: Column(children: [
        LayoutBuilder(builder: (context, box) {
          final side = math.min(box.maxWidth - 20, MediaQuery.of(context).size.height * 0.30);
          return Padding(
            padding: const EdgeInsets.fromLTRB(10, 8, 10, 4),
            child: Center(
              child: SizedBox(
                width: side,
                height: side,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(18),
                  child: RepaintBoundary(
                    key: _shot,
                    child: LayoutBuilder(builder: (context, b2) {
                      _stage = Size(b2.maxWidth, b2.maxHeight);
                      return GestureDetector(
                        onTapDown: (d) => _stageTap(d.localPosition),
                        onPanStart: (d) => _dragSprite = _hitSprite(d.localPosition),
                        onPanUpdate: (d) {
                          if (_dragSprite < 0 || _running) return;
                          final s = _proj.sprites[_dragSprite];
                          setState(() {
                            s.x0 = (d.localPosition.dx / _stage.width * 100).clamp(3.0, 97.0);
                            s.y0 = (100 - d.localPosition.dy / _stage.height * 100).clamp(3.0, 97.0);
                            s.reset();
                          });
                        },
                        child: CustomPaint(size: _stage, painter: _StagePainter(this)),
                      );
                    }),
                  ),
                ),
              ),
            ),
          );
        }),
        Expanded(child: _codeArea()),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioButton(icon: _running ? Icons.stop_rounded : Icons.play_arrow_rounded, label: _running ? 'Stop' : 'Play', color: _running ? const Color(0xFFF87171) : const Color(0xFF4ADE80), onTap: _running ? _stop : _run),
          StudioButton(icon: Icons.folder_open_rounded, label: 'Examples', onTap: _projectsDialog),
          StudioButton(icon: Icons.save_rounded, label: 'Save', onTap: _saveDialog),
          StudioButton(icon: Icons.note_add_rounded, label: 'New', onTap: () => _loadProject(BbProject('My project', [BbSprite(0, 50, 50)]))),
        ]),
        StudioRow(label: 'ACTOR', children: [
          for (var i = 0; i < _proj.sprites.length; i++)
            StudioChip(label: kBbEmoji[_proj.sprites[i].emoji], selected: i == _spr, color: const Color(0xFFFACC15), onTap: () => setState(() {
                  _spr = i;
                  _sel = null;
                })),
          StudioChip(label: '+ Add', selected: false, color: const Color(0xFF4ADE80), onTap: () {
            if (_proj.sprites.length >= 5) return;
            setState(() {
              _proj.sprites.add(BbSprite(_rnd.nextInt(kBbEmoji.length), 20 + _rnd.nextDouble() * 60, 20 + _rnd.nextDouble() * 60));
              _spr = _proj.sprites.length - 1;
              _sel = null;
            });
          }),
          StudioChip(label: 'Change look', selected: false, color: const Color(0xFFA78BFA), onTap: () => setState(() {
                _cur.emoji = (_cur.emoji + 1) % kBbEmoji.length;
                _cur.reset();
              })),
          StudioChip(label: 'Backdrop', selected: false, color: const Color(0xFF38BDF8), onTap: () => setState(() => _proj.backdrop = (_proj.backdrop + 1) % kBbBackdrops.length)),
          if (_proj.sprites.length > 1) StudioChip(label: 'Remove', icon: Icons.delete_outline_rounded, selected: false, color: const Color(0xFFF87171), onTap: () => setState(() {
                _proj.sprites.removeAt(_spr);
                _spr = 0;
                _sel = null;
              })),
        ]),
        StudioRow(children: [
          for (final c in kBbCat.entries) StudioChip(label: c.key, selected: _cat == c.key, color: c.value, onTap: () => setState(() => _cat = c.key)),
        ]),
        StudioRow(children: [
          for (final d in kBbDefs.where((d) => d.cat == _cat))
            GestureDetector(
              onTap: () => _add(d),
              child: Container(
                margin: const EdgeInsets.only(right: 6),
                padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 8),
                decoration: BoxDecoration(color: kBbCat[d.cat]!.withValues(alpha: 0.85), borderRadius: BorderRadius.circular(10)),
                child: Text(d.tpl.replaceAllMapped(RegExp(r'\{\d\}'), (m) => '…'), style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w800, fontSize: 12.5)),
              ),
            ),
        ]),
        if (_sel != null)
          StudioRow(label: 'BLOCK', children: [
            StudioButton(icon: Icons.arrow_upward_rounded, label: 'Up', onTap: () => _moveSel(-1)),
            StudioButton(icon: Icons.arrow_downward_rounded, label: 'Down', onTap: () => _moveSel(1)),
            StudioButton(icon: Icons.copy_rounded, label: 'Copy', onTap: _duplicateSel),
            StudioButton(icon: Icons.delete_rounded, label: 'Delete', color: const Color(0xFFF87171), onTap: _deleteSel),
          ]),
      ]),
    );
  }

  int _hitSprite(Offset p) {
    for (var i = _proj.sprites.length - 1; i >= 0; i--) {
      final s = _proj.sprites[i];
      if (!s.visible) continue;
      final c = Offset(s.x / 100 * _stage.width, (100 - s.y) / 100 * _stage.height);
      if ((c - p).distance < 22 + s.size / 100 * 12) return i;
    }
    return -1;
  }

  void _stageTap(Offset p) {
    final i = _hitSprite(p);
    if (i < 0) return;
    if (!_running && _threads.isEmpty) _resetWorld();
    setState(() {
      _spr = i;
      _tapSprite(_proj.sprites[i]);
    });
  }

  Widget _codeArea() {
    final s = _cur;
    if (s.scripts.isEmpty) {
      return const Center(child: Padding(padding: EdgeInsets.all(24), child: Text('Tap a colour below, then a block, to start your script.\nOr open Examples to see ready-made ones.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white38, height: 1.5))));
    }
    return ListView(padding: const EdgeInsets.fromLTRB(10, 4, 10, 10), children: [
      for (final sc in s.scripts)
        Container(
          margin: const EdgeInsets.only(bottom: 10),
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.04), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            _blockTile(sc.hat, hat: true),
            ..._blocks(sc.body, 0),
          ]),
        ),
    ]);
  }

  List<Widget> _blocks(List<Blk> l, int depth) {
    final out = <Widget>[];
    for (final b in l) {
      out.add(Padding(padding: EdgeInsets.only(left: depth * 16.0), child: _blockTile(b)));
      if (b.def.isC) {
        out.addAll(_blocks(b.kids, depth + 1));
        if (b.kids.isEmpty) {
          out.add(Padding(
            padding: EdgeInsets.only(left: (depth + 1) * 16.0, top: 2, bottom: 2),
            child: Text(identical(_sel, b) ? 'new blocks go in here' : 'empty: tap this block, then pick one', style: const TextStyle(color: Colors.white30, fontSize: 11)),
          ));
        }
      }
    }
    return out;
  }

  Widget _blockTile(Blk b, {bool hat = false}) {
    final d = b.def;
    final col = kBbCat[d.cat]!;
    final sel = identical(_sel, b);
    final spans = <InlineSpan>[];
    var last = 0;
    for (final m in RegExp(r'\{(\d)\}').allMatches(d.tpl)) {
      if (m.start > last) spans.add(TextSpan(text: d.tpl.substring(last, m.start)));
      final i = int.parse(m.group(1)!);
      final kind = d.kinds[i];
      String label;
      switch (kind) {
        case 'c':
          label = kBbColors[(b.p[i] as num).toInt() % kBbColors.length].$1;
        case 'e':
          label = kBbEmoji[(b.p[i] as num).toInt() % kBbEmoji.length];
        case 'd':
          label = kBbDrums[(b.p[i] as num).toInt() % kBbDrums.length];
        case 'q':
          label = kBbConds[(b.p[i] as num).toInt() % kBbConds.length];
        case 'i':
          label = kBbInst[(b.p[i] as num).toInt() % kBbInst.length];
        default:
          final v = b.p[i];
          label = v is num ? (v == v.roundToDouble() ? '${v.round()}' : '$v') : '$v';
          if (label.isEmpty) label = '…';
      }
      spans.add(WidgetSpan(
        alignment: PlaceholderAlignment.middle,
        child: GestureDetector(
          onTap: () => _editParam(b, i, kind),
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 3),
            padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.85), borderRadius: BorderRadius.circular(9)),
            child: Text(label, style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 12.5)),
          ),
        ),
      ));
      last = m.end;
    }
    if (last < d.tpl.length) spans.add(TextSpan(text: d.tpl.substring(last)));
    return GestureDetector(
      onTap: () => setState(() => _sel = sel ? null : b),
      child: Container(
        margin: const EdgeInsets.only(top: 3),
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
        decoration: BoxDecoration(
          color: col.withValues(alpha: 0.9),
          borderRadius: BorderRadius.vertical(top: Radius.circular(hat ? 18 : 8), bottom: const Radius.circular(8)),
          border: Border.all(color: sel ? Colors.white : Colors.transparent, width: 2.2),
        ),
        child: Text.rich(TextSpan(children: spans, style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w800, fontSize: 13))),
      ),
    );
  }
}

class _StagePainter extends CustomPainter {
  _StagePainter(this.s);
  final _NgmyBlockBuilderState s;

  @override
  void paint(Canvas canvas, Size size) {
    final bd = kBbBackdrops[s._proj.backdrop % kBbBackdrops.length];
    canvas.drawRect(Offset.zero & size, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: bd.$2).createShader(Offset.zero & size));
    Offset at(double x, double y) => Offset(x / 100 * size.width, (100 - y) / 100 * size.height);
    for (final l in s._lines) {
      canvas.drawLine(at(l.x1, l.y1), at(l.x2, l.y2), Paint()..color = l.c..strokeWidth = 2.4..strokeCap = StrokeCap.round);
    }
    for (var i = 0; i < s._proj.sprites.length; i++) {
      final sp = s._proj.sprites[i];
      if (!sp.visible) continue;
      final c = at(sp.x, sp.y);
      final fs = 34 * sp.size / 100;
      if (sp.glow >= 0) {
        canvas.drawCircle(c, fs * 0.8, Paint()..color = kBbColors[sp.glow % kBbColors.length].$2.withValues(alpha: 0.45)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10));
      }
      if (i == s._spr) {
        canvas.drawCircle(c, fs * 0.72, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.white54);
      }
      final tp = TextPainter(text: TextSpan(text: kBbEmoji[sp.emoji % kBbEmoji.length], style: TextStyle(fontSize: fs)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, c - Offset(tp.width / 2, tp.height / 2));
      // A tiny dot shows which way it faces.
      final a = -sp.dir * math.pi / 180;
      canvas.drawCircle(c + Offset(math.cos(a), math.sin(a)) * (fs * 0.72), 3, Paint()..color = Colors.white70);
      if (sp.say.isNotEmpty) {
        final t = TextPainter(text: TextSpan(text: sp.say, style: const TextStyle(color: Colors.black, fontSize: 12, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr, maxLines: 2, ellipsis: '…')..layout(maxWidth: size.width * 0.5);
        final r = RRect.fromRectAndRadius(Rect.fromLTWH(c.dx - t.width / 2 - 7, c.dy - fs * 0.85 - t.height - 12, t.width + 14, t.height + 8), const Radius.circular(10));
        final shifted = r.shift(Offset((r.left < 2 ? 2 - r.left : (r.right > size.width - 2 ? size.width - 2 - r.right : 0)), 0));
        canvas.drawRRect(shifted, Paint()..color = Colors.white);
        t.paint(canvas, Offset(shifted.left + 7, shifted.top + 4));
      }
    }
    final tp = TextPainter(text: TextSpan(text: 'Score ${s._score.round()}', style: TextStyle(color: bd.$2.first.computeLuminance() > 0.5 ? Colors.black54 : Colors.white70, fontSize: 11.5, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(canvas, Offset(size.width - tp.width - 8, 6));
  }

  @override
  bool shouldRepaint(covariant _StagePainter old) => true;
}
