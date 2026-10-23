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

  // ── Editing (drag and drop) ────────────────────────────────────────────────

  List<Blk>? _listOf(Blk target) {
    List<Blk>? find(List<Blk> l) {
      if (l.contains(target)) return l;
      for (final b in l) {
        final r = find(b.kids);
        if (r != null) return r;
      }
      return null;
    }

    for (final sprite in _proj.sprites) {
      for (final sc in sprite.scripts) {
        final r = find(sc.body);
        if (r != null) return r;
      }
    }
    return null;
  }

  bool _listIn(Blk root, List<Blk> list) {
    if (identical(root.kids, list)) return true;
    for (final k in root.kids) {
      if (_listIn(k, list)) return true;
    }
    return false;
  }

  /// Drop [d] into [list] at [index].
  void _dropInto(List<Blk> list, int index, _Drag d) {
    final b = d.blk;
    if (b.def.isHat) return;
    // A block can't go inside itself.
    if (!d.fresh && _listIn(b, list)) return;
    setState(() {
      var at = index;
      Blk put = b;
      if (d.fresh) {
        put = Blk(b.kind, List<dynamic>.from(b.p));
      } else {
        final src = _listOf(b);
        if (src != null) {
          final si = src.indexOf(b);
          src.removeAt(si);
          if (identical(src, list) && si < at) at--;
        }
      }
      list.insert(at.clamp(0, list.length), put);
    });
    NgmyTone.playNote('bell', 24, ms: 120, volume: 0.3);
  }

  void _dropNewScript(_Drag d) {
    final b = d.blk;
    setState(() {
      if (b.def.isHat) {
        _cur.scripts.add(BbScript(Blk(b.kind)));
      } else {
        final sc = BbScript(Blk('flag'));
        if (d.fresh) {
          sc.body.add(Blk(b.kind, List<dynamic>.from(b.p)));
        } else {
          _listOf(b)?.remove(b);
          sc.body.add(b);
        }
        _cur.scripts.add(sc);
      }
    });
    NgmyTone.playNote('bell', 28, ms: 140, volume: 0.3);
  }

  void _trash(_Drag d) {
    if (d.fresh) return;
    setState(() {
      if (d.script != null) {
        _cur.scripts.remove(d.script);
      } else {
        _listOf(d.blk)?.remove(d.blk);
      }
    });
    NgmyTone.play(110, ms: 160, sweep: -0.4, volume: 0.3);
  }

  void _quickAdd(BbDef d) {
    setState(() {
      if (d.isHat) {
        _cur.scripts.add(BbScript(Blk(d.kind)));
      } else {
        if (_cur.scripts.isEmpty) _cur.scripts.add(BbScript(Blk('flag')));
        _cur.scripts.last.body.add(Blk(d.kind));
      }
    });
    NgmyTone.playNote('bell', 12 + (kBbDefs.indexWhere((x) => x.kind == d.kind) % 12), ms: 160, volume: 0.35);
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
    Widget tile(BuildContext ctx, BbProject p, {bool mine = false}) => GestureDetector(
          onTap: () {
            Navigator.pop(ctx);
            _loadProject(p);
          },
          child: Container(
            margin: const EdgeInsets.only(bottom: 8),
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
            child: Row(children: [
              Container(width: 44, height: 44, alignment: Alignment.center, decoration: BoxDecoration(color: kBbBackdrops[p.backdrop % kBbBackdrops.length].$2.first, borderRadius: BorderRadius.circular(10)), child: Text(kBbEmoji[p.sprites.first.emoji], style: const TextStyle(fontSize: 24))),
              const SizedBox(width: 12),
              Expanded(child: Text(p.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800))),
              if (mine)
                IconButton(
                  icon: const Icon(Icons.delete_outline_rounded, color: Colors.white38, size: 20),
                  onPressed: () {
                    setState(() => _saved.remove(p));
                    _persist();
                    Navigator.pop(ctx);
                  },
                ),
            ]),
          ),
        );
    await showDialog<void>(
      context: context,
      builder: (ctx) => Dialog(
        backgroundColor: const Color(0xFF17171C),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: SizedBox(
            width: 340,
            child: ListView(shrinkWrap: true, children: [
              const Text('Open a project', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
              const SizedBox(height: 12),
              const Text('EXAMPLES TO REMIX', style: TextStyle(color: Colors.white38, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1)),
              const SizedBox(height: 6),
              for (final p in _starters) tile(ctx, p),
              if (_saved.isNotEmpty) ...[
                const SizedBox(height: 8),
                const Text('MY PROJECTS', style: TextStyle(color: Colors.white38, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1)),
                const SizedBox(height: 6),
                for (final p in _saved) tile(ctx, p, mine: true),
              ],
            ]),
          ),
        ),
      ),
    );
  }

  // ── UI ─────────────────────────────────────────────────────────────────────

  static const Map<String, IconData> _catIcon = {
    'Events': Icons.flag_rounded,
    'Motion': Icons.open_with_rounded,
    'Looks': Icons.visibility_rounded,
    'Sound': Icons.music_note_rounded,
    'Control': Icons.loop_rounded,
    'Pen': Icons.edit_rounded,
    'Score': Icons.emoji_events_rounded,
  };

  bool _dragging = false;

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'BLOCK BUILDER',
      accent: const Color(0xFFFACC15),
      help: 'Build your own games, art and music by dragging blocks, like Scratch.\n\n1. Pick a colour at the bottom (Motion, Looks, Sound...).\n2. Press and hold a block for a moment, then drag it into the big grey area. Blocks click into place under each other. You can also just tap a block to add it to the end.\n3. Tap a number or word inside a block to change it. Colours and sounds change each time you tap them.\n4. Press Play. Press Stop to start over.\n\nYellow blocks start a script: "when ▶ is pressed" starts when you press Play, and "when I am tapped" starts when you tap your character on the stage.\n\nTo throw a block away, drag it onto the bin that appears. Open Examples to see ready-made projects and change them to make them yours. Press Save to keep your project on this phone.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'block-builder'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share a picture')],
      stage: Column(children: [
        _topPanel(),
        Expanded(child: _workspace()),
        _drawer(),
      ]),
    );
  }

  Widget _topPanel() {
    return LayoutBuilder(builder: (context, box) {
      final side = math.min(box.maxWidth * 0.5, 200.0);
      return Padding(
        padding: const EdgeInsets.fromLTRB(10, 8, 10, 6),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(
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
          const SizedBox(width: 10),
          Expanded(
            child: SizedBox(
              height: side,
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                GestureDetector(
                  onTap: _running ? _stop : _run,
                  child: Container(
                    height: 50,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(colors: _running ? const [Color(0xFFF87171), Color(0xFFDC2626)] : const [Color(0xFF4ADE80), Color(0xFF16A34A)]),
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [BoxShadow(color: (_running ? const Color(0xFFF87171) : const Color(0xFF4ADE80)).withValues(alpha: 0.4), blurRadius: 12, offset: const Offset(0, 4))],
                    ),
                    child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Icon(_running ? Icons.stop_rounded : Icons.play_arrow_rounded, color: Colors.white, size: 28),
                      const SizedBox(width: 4),
                      Text(_running ? 'Stop' : 'Play', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                    ]),
                  ),
                ),
                const SizedBox(height: 8),
                Text('ACTORS', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
                const SizedBox(height: 4),
                Wrap(spacing: 6, runSpacing: 6, children: [
                  for (var i = 0; i < _proj.sprites.length; i++)
                    GestureDetector(
                      onTap: () => setState(() => _spr = i),
                      child: Container(
                        width: 38,
                        height: 38,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(color: Colors.white.withValues(alpha: i == _spr ? 0.18 : 0.06), borderRadius: BorderRadius.circular(11), border: Border.all(color: i == _spr ? const Color(0xFFFACC15) : Colors.white12, width: i == _spr ? 2 : 1)),
                        child: Text(kBbEmoji[_proj.sprites[i].emoji], style: const TextStyle(fontSize: 20)),
                      ),
                    ),
                  if (_proj.sprites.length < 5) _miniBtn(Icons.add_rounded, () => setState(() {
                        _proj.sprites.add(BbSprite(_rnd.nextInt(kBbEmoji.length), 20 + _rnd.nextDouble() * 60, 20 + _rnd.nextDouble() * 60));
                        _spr = _proj.sprites.length - 1;
                      }), const Color(0xFF4ADE80)),
                ]),
                const Spacer(),
                Wrap(spacing: 6, runSpacing: 6, children: [
                  _miniBtn(Icons.face_rounded, () => setState(() {
                        _cur.emoji = (_cur.emoji + 1) % kBbEmoji.length;
                        _cur.reset();
                      }), const Color(0xFFA78BFA)),
                  _miniBtn(Icons.wallpaper_rounded, () => setState(() => _proj.backdrop = (_proj.backdrop + 1) % kBbBackdrops.length), const Color(0xFF38BDF8)),
                  _miniBtn(Icons.folder_open_rounded, _projectsDialog, Colors.white70),
                  _miniBtn(Icons.save_rounded, _saveDialog, Colors.white70),
                  _miniBtn(Icons.note_add_rounded, () => _loadProject(BbProject('My project', [BbSprite(0, 50, 50)])), Colors.white70),
                  if (_proj.sprites.length > 1) _miniBtn(Icons.delete_outline_rounded, () => setState(() {
                        _proj.sprites.removeAt(_spr);
                        _spr = 0;
                      }), const Color(0xFFF87171)),
                ]),
              ]),
            ),
          ),
        ]),
      );
    });
  }

  Widget _miniBtn(IconData icon, VoidCallback onTap, Color c) => GestureDetector(
        onTap: onTap,
        child: Container(width: 38, height: 38, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(11), border: Border.all(color: Colors.white12)), child: Icon(icon, color: c, size: 20)),
      );

  Widget _workspace() {
    final s = _cur;
    return Container(
      margin: const EdgeInsets.fromLTRB(8, 0, 8, 6),
      decoration: BoxDecoration(color: const Color(0xFF1B1D24), borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white10)),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(18),
        child: Stack(children: [
          Positioned.fill(child: CustomPaint(painter: _DotsPainter())),
          ListView(padding: const EdgeInsets.fromLTRB(12, 12, 12, 90), children: [
            for (final sc in s.scripts)
              Padding(
                padding: const EdgeInsets.only(bottom: 18),
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  _hatRow(sc),
                  _slot(sc.body, 0),
                  ..._blocks(sc.body),
                ]),
              ),
            DragTarget<_Drag>(
              onWillAcceptWithDetails: (_) => true,
              onAcceptWithDetails: (d) => _dropNewScript(d.data),
              builder: (context, cand, rej) => AnimatedContainer(
                duration: const Duration(milliseconds: 150),
                height: s.scripts.isEmpty ? 220 : (cand.isNotEmpty ? 90 : 60),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: cand.isNotEmpty ? const Color(0xFFFACC15).withValues(alpha: 0.12) : Colors.transparent,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: cand.isNotEmpty ? const Color(0xFFFACC15) : Colors.white12, width: cand.isNotEmpty ? 2 : 1),
                ),
                child: Text(s.scripts.isEmpty ? 'Drag a block here to start\n(or tap a block below)' : 'Drop here for a new script', textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontWeight: FontWeight.w700, fontSize: 13, height: 1.4)),
              ),
            ),
          ]),
          if (_dragging)
            Positioned(
              right: 12,
              bottom: 12,
              child: DragTarget<_Drag>(
                onWillAcceptWithDetails: (_) => true,
                onAcceptWithDetails: (d) => _trash(d.data),
                builder: (context, cand, rej) => AnimatedContainer(
                  duration: const Duration(milliseconds: 150),
                  width: cand.isNotEmpty ? 76 : 64,
                  height: cand.isNotEmpty ? 76 : 64,
                  decoration: BoxDecoration(color: const Color(0xFFEF4444).withValues(alpha: cand.isNotEmpty ? 0.95 : 0.75), shape: BoxShape.circle, boxShadow: [BoxShadow(color: const Color(0xFFEF4444).withValues(alpha: 0.5), blurRadius: 16)]),
                  child: const Icon(Icons.delete_rounded, color: Colors.white, size: 30),
                ),
              ),
            ),
        ]),
      ),
    );
  }

  Widget _hatRow(BbScript sc) {
    return Row(children: [
      Draggable<_Drag>(
        data: _Drag(sc.hat, fresh: false, script: sc),
        onDragStarted: () => setState(() => _dragging = true),
        onDragEnd: (_) => setState(() => _dragging = false),
        feedback: Material(color: Colors.transparent, child: Opacity(opacity: 0.9, child: _blockView(sc.hat, hat: true, editable: false))),
        childWhenDragging: Opacity(opacity: 0.3, child: _blockView(sc.hat, hat: true, editable: false)),
        child: _blockView(sc.hat, hat: true, editable: false),
      ),
    ]);
  }

  Widget _slot(List<Blk> list, int index) {
    return DragTarget<_Drag>(
      onWillAcceptWithDetails: (d) => !d.data.blk.def.isHat,
      onAcceptWithDetails: (d) => _dropInto(list, index, d.data),
      builder: (context, cand, rej) => AnimatedContainer(
        duration: const Duration(milliseconds: 120),
        height: cand.isNotEmpty ? 38 : 8,
        margin: EdgeInsets.symmetric(vertical: cand.isNotEmpty ? 2 : 0),
        decoration: BoxDecoration(color: cand.isNotEmpty ? Colors.white.withValues(alpha: 0.22) : Colors.transparent, borderRadius: BorderRadius.circular(8), border: cand.isNotEmpty ? Border.all(color: Colors.white70, width: 1.5) : null),
      ),
    );
  }

  List<Widget> _blocks(List<Blk> l) {
    final out = <Widget>[];
    for (var i = 0; i < l.length; i++) {
      out.add(_blockWidget(l[i]));
      out.add(_slot(l, i + 1));
    }
    return out;
  }

  Widget _blockWidget(Blk b) {
    final view = b.def.isC ? _cBlock(b) : _blockView(b, editable: true);
    return Draggable<_Drag>(
      data: _Drag(b, fresh: false),
      onDragStarted: () => setState(() => _dragging = true),
      onDragEnd: (_) => setState(() => _dragging = false),
      feedback: Material(color: Colors.transparent, child: Opacity(opacity: 0.92, child: b.def.isC ? _cBlock(b, preview: true) : _blockView(b, editable: false))),
      childWhenDragging: Opacity(opacity: 0.25, child: view),
      child: view,
    );
  }

  Widget _cBlock(Blk b, {bool preview = false}) {
    final col = kBbCat[b.def.cat]!;
    final dark = Color.lerp(col, Colors.black, 0.28)!;
    return Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
      _blockView(b, editable: !preview),
      IntrinsicHeight(
        child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Container(width: 18, color: col),
          Padding(
            padding: const EdgeInsets.only(left: 6),
            child: ConstrainedBox(
              constraints: const BoxConstraints(minWidth: 170),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: preview
                  ? [for (final k in b.kids) _blockView(k, editable: false)]
                  : [_slot(b.kids, 0), ..._blocks(b.kids)]),
            ),
          ),
        ]),
      ),
      Container(
        width: 150,
        height: 16,
        decoration: BoxDecoration(color: col, borderRadius: const BorderRadius.vertical(bottom: Radius.circular(10)), border: Border(bottom: BorderSide(color: dark, width: 2.5))),
      ),
    ]);
  }

  /// A single block, drawn with the little notch on top and bump underneath.
  Widget _blockView(Blk b, {bool hat = false, required bool editable}) {
    final d = b.def;
    final col = kBbCat[d.cat]!;
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
      final oval = Container(
        margin: const EdgeInsets.symmetric(horizontal: 3),
        padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 3),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12)),
        child: Text(label, style: TextStyle(color: Color.lerp(col, Colors.black, 0.45), fontWeight: FontWeight.w900, fontSize: 13)),
      );
      spans.add(WidgetSpan(alignment: PlaceholderAlignment.middle, child: editable ? GestureDetector(onTap: () => _editParam(b, i, kind), child: oval) : oval));
      last = m.end;
    }
    if (last < d.tpl.length) spans.add(TextSpan(text: d.tpl.substring(last)));
    final isHat = hat || d.isHat;
    return CustomPaint(
      painter: _BlockPainter(col, isHat),
      child: Padding(
        padding: EdgeInsets.fromLTRB(14, isHat ? 16 : 9, 16, 10),
        child: Text.rich(TextSpan(children: spans, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14, shadows: [Shadow(color: Colors.black26, blurRadius: 1, offset: Offset(0, 1))]))),
      ),
    );
  }

  Widget _drawer() {
    final defs = kBbDefs.where((d) => d.cat == _cat).toList();
    return Container(
      decoration: BoxDecoration(color: const Color(0xFF14151B), border: Border(top: BorderSide(color: Colors.white.withValues(alpha: 0.1)))),
      padding: const EdgeInsets.fromLTRB(0, 8, 0, 10),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        SizedBox(
          height: 58,
          child: ListView(scrollDirection: Axis.horizontal, padding: const EdgeInsets.symmetric(horizontal: 10), children: [
            for (final c in kBbCat.entries)
              GestureDetector(
                onTap: () => setState(() => _cat = c.key),
                child: Container(
                  width: 64,
                  margin: const EdgeInsets.only(right: 8),
                  decoration: BoxDecoration(color: c.value.withValues(alpha: _cat == c.key ? 1 : 0.25), borderRadius: BorderRadius.circular(14), border: Border.all(color: _cat == c.key ? Colors.white : Colors.transparent, width: 2)),
                  child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                    Icon(_catIcon[c.key], color: _cat == c.key ? Colors.white : c.value, size: 22),
                    Text(c.key, style: TextStyle(color: _cat == c.key ? Colors.white : c.value, fontSize: 10, fontWeight: FontWeight.w900)),
                  ]),
                ),
              ),
          ]),
        ),
        const SizedBox(height: 8),
        SizedBox(
          height: defs.any((d) => d.isC) ? 92 : 56,
          child: ListView(scrollDirection: Axis.horizontal, padding: const EdgeInsets.symmetric(horizontal: 10), children: [
            for (final d in defs)
              Padding(
                padding: const EdgeInsets.only(right: 12),
                child: Align(
                  alignment: Alignment.topLeft,
                  child: LongPressDraggable<_Drag>(
                    delay: const Duration(milliseconds: 130),
                    data: _Drag(Blk(d.kind), fresh: true),
                    onDragStarted: () => setState(() => _dragging = true),
                    onDragEnd: (_) => setState(() => _dragging = false),
                    feedback: Material(color: Colors.transparent, child: Opacity(opacity: 0.92, child: d.isC ? _cBlock(Blk(d.kind), preview: true) : _blockView(Blk(d.kind), hat: d.isHat, editable: false))),
                    child: GestureDetector(onTap: () => _quickAdd(d), child: d.isC ? _cBlock(Blk(d.kind), preview: true) : _blockView(Blk(d.kind), hat: d.isHat, editable: false)),
                  ),
                ),
              ),
          ]),
        ),
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
}

class _Drag {
  _Drag(this.blk, {required this.fresh, this.script});
  final Blk blk;
  final bool fresh;
  final BbScript? script;
}

class _BlockPainter extends CustomPainter {
  _BlockPainter(this.color, this.hat);
  final Color color;
  final bool hat;

  @override
  void paint(Canvas canvas, Size size) {
    const r = 9.0;
    final w = size.width, h = size.height;
    final path = Path();
    if (hat) {
      path.moveTo(0, 22);
      path.quadraticBezierTo(w * 0.28, -6, w * 0.62, 12);
      path.quadraticBezierTo(w * 0.8, 20, w, 18);
      path.lineTo(w, h - r);
    } else {
      path.moveTo(0, r);
      path.quadraticBezierTo(0, 0, r, 0);
      path.lineTo(14, 0);
      path.lineTo(18, 5);
      path.lineTo(32, 5);
      path.lineTo(36, 0);
      path.lineTo(w - r, 0);
      path.quadraticBezierTo(w, 0, w, r);
      path.lineTo(w, h - r);
    }
    path.quadraticBezierTo(w, h, w - r, h);
    path.lineTo(36, h);
    path.lineTo(32, h + 5);
    path.lineTo(18, h + 5);
    path.lineTo(14, h);
    path.lineTo(r, h);
    path.quadraticBezierTo(0, h, 0, h - r);
    path.close();
    canvas.drawPath(path.shift(const Offset(0, 2)), Paint()..color = Color.lerp(color, Colors.black, 0.35)!);
    canvas.drawPath(path, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(color, Colors.white, 0.12)!, color]).createShader(Rect.fromLTWH(0, 0, w, h)));
    canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white.withValues(alpha: 0.18));
  }

  @override
  bool shouldRepaint(covariant _BlockPainter old) => old.color != color || old.hat != hat;
}

class _DotsPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()..color = Colors.white.withValues(alpha: 0.05);
    for (var x = 8.0; x < size.width; x += 22) {
      for (var y = 8.0; y < size.height; y += 22) {
        canvas.drawCircle(Offset(x, y), 1.2, p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DotsPainter old) => false;
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
