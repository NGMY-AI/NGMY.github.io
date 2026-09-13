part of 'ngmy_marriage_agreement_templates.dart';

const _kMahariItems = [
  ('👤', 'Kichwa cha Mtu', '[Kiasi cha Fedha (mfano: \$1,000)]'),
  ('🐐', 'Mbuzi', '[Idadi (mfano: 2)]'),
  ('🐍', "Ng'oka", '[Maelezo]'),
  ('🏺', 'Mmoko', '[Maelezo]'),
  ('➕', '[Kipengele kingine]', '[Maelezo]'),
  ('➕', '[Kipengele kingine]', '[Maelezo]'),
];

List<NgmySlideElement> _mMahariList(double x, double y, double w, {required int ink, required int accent, int count = 4}) {
  final out = <NgmySlideElement>[];
  var cy = y;
  final n = count.clamp(1, _kMahariItems.length);
  for (var i = 0; i < n; i++) {
    final (emoji, name, hint) = _kMahariItems[i];
    out.addAll(_mMahariRow(i + 1, emoji, name, hint, x, cy, w, ink: ink, accent: accent));
    cy += 0.042;
  }
  return out;
}

List<NgmySlideElement> _mEmptyPage2(NgmyMarriagePaperTemplate tpl) => const [];

// ── 1. HATI YA NDOA — one full certificate, same structure as the sample ──

List<NgmySlideElement> _layoutRingsNdoaPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  return [
    ..._mRings(0.41, 0.022, 0.070, ink: ink),
    _mLockedText('HATI YA NDOA', x: cx, y: 0.092, w: cw, h: 0.052, fontSize: 34, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Hati ya Makubaliano ya Ndoa', x: cx, y: 0.144, w: cw, h: 0.020, fontSize: 13, fontWeight: FontWeight.w600, align: TextAlign.center, color: ink, tag: 'subtitle'),
    ..._mOrnamentRule(0.16, 0.168, 0.68, ink: ink),
    ..._mPill('TAARIFA ZA WANANDOA', 0.190, 0.18, 0.64, ink: ink),
    ..._mLabelLine('Jina la Mume:', 'groom_name', cx, 0.232, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Jina la Mke:', 'bride_name', cx, 0.270, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Tarehe ya Ndoa:', 'tarehe', cx, 0.308, cw, ink: ink, fontSize: 12, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'bride_house', cx, 0.346, cw, ink: ink, fontSize: 12),
    ..._mPill('TAMKO LA MAKUBALIANO', 0.390, 0.18, 0.64, ink: ink),
    ..._mStaticPara(
      'Sisi, wanandoa, tunakubali kwa hiari na kwa moyo mmoja kuingia katika ndoa hii kwa mapenzi, heshima na ushirikiano. Tunajitolea kuwa wapenzi, washirika na msaada wa maisha yote, tukifuata maadili ya familia, desturi zetu na mafundisho mema kwa ajili ya mustakabali bora.',
      cx,
      0.430,
      cw,
      0.108,
      ink: ink,
      fontSize: 11.5,
    ),
    ..._mOrnamentRule(0.20, 0.542, 0.60, ink: ink),
    ..._mPill('MASHAHIDI', 0.564, 0.22, 0.56, ink: ink),
    ..._mCertWitnessCol('mume', cx, 0.604, colW, ink: ink, fill: ink, textColor: 0xFFFFFFFF),
    ..._mCertWitnessCol('mke', cx + colW + 0.04, 0.604, colW, ink: ink, fill: ink, textColor: 0xFFFFFFFF),
    ..._mPill('SAHIHI ZA WANANDOA', 0.718, 0.18, 0.64, ink: ink),
    _mLockedText('Mume', x: cx, y: 0.758, w: colW, h: 0.018, fontSize: 11, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'mume_h'),
    _mLockedText('Mke', x: cx + colW + 0.04, y: 0.758, w: colW, h: 0.018, fontSize: 11, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'mke_h'),
    ..._mInlineSign('mchumba_mume', cx, 0.782, colW, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + colW + 0.04, 0.782, colW, ink: ink),
    ..._mPill('MWANDISHI / MSIMAMIZI', 0.824, 0.16, 0.68, ink: ink),
    ..._mLabelLine('Jina:', 'mwandishi', cx, 0.864, 0.36, ink: ink, fontSize: 10, startText: '[Jina]'),
    ..._mInlineSign('witness_mume_2', cx + 0.38, 0.864, 0.42, ink: ink),
    ..._mNgmyMark(0.900, ink: ink),
  ];
}

List<NgmySlideElement> _layoutRingsNdoaPage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 2. TAARIFA ZA WANANDOA — male / female cards with person marks ─────────

List<NgmySlideElement> _layoutCoupleCardsPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.09;
  const cw = 0.82;
  return [
    _mLockedText('TAREHE:', x: 0.62, y: 0.028, w: 0.28, h: 0.014, fontSize: 8, fontWeight: FontWeight.w800, align: TextAlign.right, color: ink, tag: 'dt_l'),
    _mBlank('tarehe', 0.70, 0.042, 0.20, ink: ink, fontSize: 9, startText: '__ / __ / ____'),
    ..._mRings(0.42, 0.026, 0.048, ink: ink),
    _mLockedText('TAARIFA ZA WANANDOA', x: cx, y: 0.078, w: cw, h: 0.034, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    ..._mOrnamentRule(0.20, 0.114, 0.60, ink: ink),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: 0.138, w: cw, h: 0.268, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.2, tag: 'card_m'),
    ..._mPersonMark(cx + cw / 2 - 0.036, 0.146, 0.072, female: false, fill: ink),
    _mLockedText('TAARIFA ZA MUME', x: cx, y: 0.222, w: cw, h: 0.022, fontSize: 13, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'cm_h'),
    ..._mLabelLine('Jina la Mume:', 'groom_name', cx + 0.04, 0.254, cw - 0.08, ink: ink, fontSize: 11),
    ..._mLabelLine('Familia:', 'groom_family', cx + 0.04, 0.292, cw - 0.08, ink: ink, fontSize: 11),
    ..._mLabelLine('Nyumba:', 'groom_house', cx + 0.04, 0.330, cw - 0.08, ink: ink, fontSize: 11),
    ..._mLabelLine('Anwani:', 'groom_name2', cx + 0.04, 0.368, cw - 0.08, ink: ink, fontSize: 11),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: 0.422, w: cw, h: 0.268, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.2, tag: 'card_k'),
    ..._mPersonMark(cx + cw / 2 - 0.036, 0.430, 0.072, female: true, fill: 0xFF7A3B4A),
    _mLockedText('TAARIFA ZA MKE', x: cx, y: 0.506, w: cw, h: 0.022, fontSize: 13, fontWeight: FontWeight.w900, align: TextAlign.center, color: 0xFF7A3B4A, tag: 'ck_h'),
    ..._mLabelLine('Jina la Mke:', 'bride_name', cx + 0.04, 0.538, cw - 0.08, ink: ink, fontSize: 11),
    ..._mLabelLine('Familia:', 'bride_family', cx + 0.04, 0.576, cw - 0.08, ink: ink, fontSize: 11),
    ..._mLabelLine('Nyumba:', 'bride_house', cx + 0.04, 0.614, cw - 0.08, ink: ink, fontSize: 11),
    ..._mLabelLine('Anwani:', 'bride_name2', cx + 0.04, 0.652, cw - 0.08, ink: ink, fontSize: 11),
    ..._mPill('MAELEZO YA ZIADA', 0.706, 0.20, 0.60, ink: ink),
    ..._mLabelLine('Historia:', 'maelezo_ziada', cx, 0.748, cw, ink: ink, startText: '[Maelezo]'),
    ..._mLabelLine('Malengo:', 'groom_family2', cx, 0.786, cw, ink: ink),
    ..._mInlineSign('mchumba_mume', cx, 0.830, 0.38, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + 0.42, 0.830, 0.40, ink: ink),
    ..._mLabelLine('Mwandishi:', 'mwandishi', cx, 0.872, cw, ink: ink, startText: '[Jina]'),
    ..._mNgmyMark(0.906, ink: ink),
  ];
}

List<NgmySlideElement> _layoutCoupleCardsPage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 3. HATI YA KUHOWESHA — one-page formal letter ───────────────────────────

List<NgmySlideElement> _layoutKuhoweshaFormPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.03) / 2;
  return [
    ..._mRings(0.12, 0.022, 0.044, ink: ink),
    _mLockedText('TAREHE:', x: 0.68, y: 0.026, w: 0.22, h: 0.014, fontSize: 8, fontWeight: FontWeight.w800, align: TextAlign.center, color: ink, tag: 'dt_l'),
    _mBlank('tarehe', 0.70, 0.042, 0.20, ink: ink, fontSize: 9, startText: '__ / __ / ____'),
    _mLockedText('HATI YA KUHOWESHA', x: cx, y: 0.072, w: cw, h: 0.036, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Makubaliano ya Ndoa', x: cx, y: 0.108, w: cw, h: 0.018, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'sub'),
    ..._mOrnamentRule(0.20, 0.128, 0.60, ink: ink),
    ..._mRun([
      const NgmyMSeg.text('Mimi '),
      const NgmyMSeg.blank('groom_name', 0.22),
      const NgmyMSeg.text(', wa jamaa ya '),
      const NgmyMSeg.blank('groom_family', 0.20),
    ], cx, 0.152, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('Nyumba ya '),
      const NgmyMSeg.blank('groom_house', 0.20),
      const NgmyMSeg.text(', nimetowa mahari ya kuhoweya'),
    ], cx, 0.186, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('kijana wangu '),
      const NgmyMSeg.blank('groom_name2', 0.20),
      const NgmyMSeg.text(' na '),
      const NgmyMSeg.blank('bride_name', 0.20),
    ], cx, 0.220, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('binti wa '),
      const NgmyMSeg.blank('bride_family', 0.20),
      const NgmyMSeg.text(', Nyumba ya '),
      const NgmyMSeg.blank('bride_house', 0.18),
    ], cx, 0.254, ink: ink, fontSize: 11),
    ..._mPill('NIMETOWEA', 0.292, 0.24, 0.52, ink: ink),
    _mLockedText('Vitu vifuatavyo vimetolewa:', x: cx, y: 0.330, w: cw, h: 0.018, fontSize: 11, fontWeight: FontWeight.w600, color: ink, tag: 'nim_sub'),
    ..._mMahariList(cx, 0.354, cw, ink: ink, accent: tpl.accent, count: 4),
    ..._mPill('MASHAHIDI', 0.534, 0.24, 0.52, ink: ink),
    ..._mChevronHeader('UPANDE WA MKE', cx, 0.574, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('UPANDE WA MUME', cx + colW + 0.03, 0.574, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mLabelLine('1. Jina:', 'witness_mke_1_name', cx, 0.612, colW, ink: ink, fontSize: 10),
    ..._mLabelLine('1. Jina:', 'witness_mume_1_name', cx + colW + 0.03, 0.612, colW, ink: ink, fontSize: 10),
    ..._mInlineSign('witness_mke_1', cx, 0.648, colW, ink: ink),
    ..._mInlineSign('witness_mume_1', cx + colW + 0.03, 0.648, colW, ink: ink),
    ..._mLabelLine('2. Jina:', 'witness_mke_2_name', cx, 0.690, colW, ink: ink, fontSize: 10),
    ..._mLabelLine('2. Jina:', 'witness_mume_2_name', cx + colW + 0.03, 0.690, colW, ink: ink, fontSize: 10),
    ..._mInlineSign('witness_mke_2', cx, 0.726, colW, ink: ink),
    ..._mInlineSign('witness_mume_2', cx + colW + 0.03, 0.726, colW, ink: ink),
    ..._mPill('MWANDISHI', 0.770, 0.26, 0.48, ink: ink),
    ..._mLabelLine('Jina:', 'mwandishi', cx, 0.810, 0.40, ink: ink, startText: '[Jina]'),
    ..._mInlineSign('mchumba_mume', cx + 0.42, 0.810, 0.38, ink: ink),
    ..._mInlineSign('mchumba_mke', cx, 0.850, cw, ink: ink),
    ..._mNgmyMark(0.890, ink: ink),
  ];
}

List<NgmySlideElement> _layoutKuhoweshaFormPage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 4. MASHUA / MAHARI ─────────────────────────────────────────────────────

List<NgmySlideElement> _layoutMahariPandePage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  return [
    _mLockedText('MASHUA / MAHARI', x: cx, y: 0.032, w: cw, h: 0.038, fontSize: 24, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Makubaliano kwa Pande Zote', x: cx, y: 0.072, w: cw, h: 0.018, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'sub'),
    ..._mOrnamentRule(0.20, 0.094, 0.60, ink: ink),
    ..._mStaticPara(
      'Kwa mapenzi na ridhaa ya pande zote, wanandoa wanakubali masharti yafuatayo kama sehemu ya heshima na upendo kati yao.',
      cx,
      0.118,
      cw,
      0.048,
      ink: ink,
      fontSize: 11,
    ),
    ..._mPill('SHARTI LA MASHUA / MAHARI', 0.174, 0.14, 0.72, ink: ink),
    ..._mLabelLine('1. Pesa / fedha:', 'mahari_1_amount', cx, 0.218, cw, ink: ink, startText: '[Kiasi]'),
    ..._mLabelLine('2. Vitu vya nyumba:', 'mahari_2_amount', cx, 0.256, cw, ink: ink),
    ..._mLabelLine('3. Masharti mengine:', 'mahari_3_amount', cx, 0.294, cw, ink: ink),
    ..._mLabelLine('4. Muda wa malipo:', 'mahari_4_amount', cx, 0.332, cw, ink: ink),
    ..._mMahariList(cx, 0.372, cw, ink: ink, accent: tpl.accent, count: 4),
    ..._mLabelLine('Mume:', 'groom_name', cx, 0.548, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Mke:', 'bride_name', cx, 0.586, cw, ink: ink, fontSize: 12),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: 0.626, w: cw, h: 0.056, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.1, tag: 'quote'),
    ..._mStaticPara('"Mahari ni heshima, si bei ya mwanamke."', cx + 0.03, 0.638, cw - 0.06, 0.034, ink: ink, fontSize: 13),
    ..._mPersonMark(cx + colW / 2 - 0.028, 0.694, 0.056, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.04 + colW / 2 - 0.028, 0.694, 0.056, female: true, fill: 0xFF7A3B4A),
    ..._mChevronHeader('UPANDE WA MUME', cx, 0.756, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('UPANDE WA MKE', cx + colW + 0.04, 0.756, colW, fill: 0xFF7A3B4A, textColor: 0xFFFFFFFF),
    ..._mInlineSign('mchumba_mume', cx, 0.796, colW, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + colW + 0.04, 0.796, colW, ink: ink),
    ..._mLabelLine('Mwandishi:', 'mwandishi', cx, 0.840, cw, ink: ink, startText: '[Jina]'),
    ..._mLabelLine('Tarehe:', 'tarehe', cx, 0.876, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mNgmyMark(0.910, ink: ink),
  ];
}

List<NgmySlideElement> _layoutMahariPandePage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 5. SHERIA ZA FAMILIA ───────────────────────────────────────────────────

List<NgmySlideElement> _layoutFamiliaMtiPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  return [
    _mLockedText('🌳', x: 0.42, y: 0.022, w: 0.16, h: 0.042, fontSize: 26, align: TextAlign.center, tag: 'tree'),
    _mLockedText('NGOZI / SHERIA ZA FAMILIA', x: cx, y: 0.066, w: cw, h: 0.032, fontSize: 18, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Makubaliano ya Pamoja', x: cx, y: 0.100, w: cw, h: 0.018, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'sub'),
    ..._mOrnamentRule(0.20, 0.122, 0.60, ink: ink),
    ..._mStaticPara(
      'Kwa heshima na maelewano, familia zinakubaliana na sheria na kanuni zifuatazo za kuongoza nyumba na maisha ya pamoja.',
      cx,
      0.146,
      cw,
      0.048,
      ink: ink,
      fontSize: 11,
    ),
    ..._mLabelLine('1. Uaminifu:', 'mahari_1_name', cx, 0.204, cw, ink: ink),
    ..._mLabelLine('2. Heshima ya familia:', 'mahari_2_name', cx, 0.242, cw, ink: ink),
    ..._mLabelLine('3. Matunzo ya watoto:', 'mahari_3_name', cx, 0.280, cw, ink: ink),
    ..._mLabelLine('4. Malezi ya nyumba:', 'mahari_4_name', cx, 0.318, cw, ink: ink),
    ..._mLabelLine('5. Usaidizi wa pamoja:', 'mahari_5_name', cx, 0.356, cw, ink: ink),
    ..._mLabelLine('6. Msada wa wazazi:', 'mahari_6_name', cx, 0.394, cw, ink: ink),
    ..._mLabelLine('7. Migogoro na ufumbuzi:', 'mahari_1_amount', cx, 0.432, cw, ink: ink),
    ..._mLabelLine('8. Sharti jingine:', 'mahari_2_amount', cx, 0.470, cw, ink: ink),
    ..._mPill('WANANDOA', 0.514, 0.26, 0.48, ink: ink),
    ..._mLabelLine('Jina la Mume:', 'groom_name', cx, 0.556, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Jina la Mke:', 'bride_name', cx, 0.596, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Familia ya mume:', 'groom_family', cx, 0.636, cw, ink: ink),
    ..._mLabelLine('Familia ya mke:', 'bride_family', cx, 0.676, cw, ink: ink),
    ..._mPersonMark(cx + colW / 2 - 0.026, 0.714, 0.052, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.04 + colW / 2 - 0.026, 0.714, 0.052, female: true, fill: 0xFF5A3A48),
    ..._mInlineSign('mchumba_mume', cx, 0.774, colW, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + colW + 0.04, 0.774, colW, ink: ink),
    ..._mLabelLine('Mwandishi:', 'mwandishi', cx, 0.818, cw, ink: ink, startText: '[Jina]'),
    ..._mLabelLine('Tarehe:', 'tarehe', cx, 0.856, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'bride_house', cx, 0.894, cw, ink: ink),
  ];
}

List<NgmySlideElement> _layoutFamiliaMtiPage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 6. NDOA YA PAMOJA — dual husband / wife columns ────────────────────────

List<NgmySlideElement> _layoutNdoaSafiPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.09;
  const cw = 0.82;
  final colW = (cw - 0.04) / 2;
  return [
    _mLockedShape(shape: NgmySlideShapeKind.hexagon, x: 0.12, y: 0.020, w: 0.034, h: 0.026, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.2, tag: 'lan_l'),
    _mLockedShape(shape: NgmySlideShapeKind.hexagon, x: 0.846, y: 0.020, w: 0.034, h: 0.026, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.2, tag: 'lan_r'),
    _mLockedText('MAKUBALIANO YA NDOA', x: cx, y: 0.050, w: cw, h: 0.032, fontSize: 18, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Hati ya Mume na Mke', x: cx, y: 0.084, w: cw, h: 0.016, fontSize: 11, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'sub'),
    ..._mOrnamentRule(0.20, 0.104, 0.60, ink: ink),
    ..._mPersonMark(cx + colW / 2 - 0.032, 0.126, 0.064, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.04 + colW / 2 - 0.032, 0.126, 0.064, female: true, fill: 0xFF7A3B4A),
    ..._mChevronHeader('MUME', cx, 0.200, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('MKE', cx + colW + 0.04, 0.200, colW, fill: 0xFF7A3B4A, textColor: 0xFFFFFFFF),
    ..._mLabelLine('Jina:', 'groom_name', cx, 0.240, colW, ink: ink),
    ..._mLabelLine('Jina:', 'bride_name', cx + colW + 0.04, 0.240, colW, ink: ink),
    ..._mLabelLine('Familia:', 'groom_family', cx, 0.278, colW, ink: ink),
    ..._mLabelLine('Familia:', 'bride_family', cx + colW + 0.04, 0.278, colW, ink: ink),
    ..._mLabelLine('Nyumba:', 'groom_house', cx, 0.316, colW, ink: ink),
    ..._mLabelLine('Nyumba:', 'bride_house', cx + colW + 0.04, 0.316, colW, ink: ink),
    ..._mLabelLine('Tarehe:', 'groom_name2', cx, 0.354, colW, ink: ink, startText: '__ / __'),
    ..._mLabelLine('Tarehe:', 'bride_name2', cx + colW + 0.04, 0.354, colW, ink: ink, startText: '__ / __'),
    ..._mPill('MASHARTI YA NDOA', 0.400, 0.20, 0.60, ink: ink),
    ..._mLabelLine('1. Mahari:', 'mahari_1_amount', cx, 0.444, cw, ink: ink, startText: '[Kiasi]'),
    ..._mLabelLine('2. Nyumba ya pamoja:', 'mahari_2_amount', cx, 0.482, cw, ink: ink),
    ..._mLabelLine('3. Heshima na umilele:', 'mahari_3_amount', cx, 0.520, cw, ink: ink),
    ..._mLabelLine('4. Sharti jingine:', 'mahari_4_amount', cx, 0.558, cw, ink: ink),
    ..._mStaticPara(
      'Kwa kila mmoja, ndoa hii ni ahadi ya kusaidiana. Hii ni makubaliano ya ndoa kati ya mume na mke kwa ridhaa ya familia zao.',
      cx,
      0.600,
      cw,
      0.056,
      ink: ink,
      fontSize: 11,
    ),
    ..._mPill('SAHIHI ZA SHAHIDI', 0.664, 0.20, 0.60, ink: ink),
    ..._mLabelLine('Shahidi mume:', 'witness_mume_1_name', cx, 0.706, colW, ink: ink, fontSize: 10),
    ..._mLabelLine('Shahidi mke:', 'witness_mke_1_name', cx + colW + 0.04, 0.706, colW, ink: ink, fontSize: 10),
    ..._mInlineSign('witness_mume_1', cx, 0.744, colW, ink: ink),
    ..._mInlineSign('witness_mke_1', cx + colW + 0.04, 0.744, colW, ink: ink),
    ..._mInlineSign('mchumba_mume', cx, 0.788, colW, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + colW + 0.04, 0.788, colW, ink: ink),
    ..._mLabelLine('Tarehe ya hati:', 'tarehe', cx, 0.830, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Mwandishi:', 'mwandishi', cx, 0.868, cw, ink: ink, startText: '[Jina]'),
    ..._mNgmyMark(0.904, ink: ink),
  ];
}

List<NgmySlideElement> _layoutNdoaSafiPage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 7. PETE PANA ───────────────────────────────────────────────────────────

List<NgmySlideElement> _layoutPeteWidePage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.05) / 2;
  return [
    ..._mRings(0.38, 0.024, 0.100, ink: ink),
    _mLockedText('PETE ZA UMOJA', x: cx, y: 0.132, w: cw, h: 0.040, fontSize: 26, fontWeight: FontWeight.w900, align: TextAlign.center, color: _certGold, tag: 'title'),
    _mLockedText('Hati ya Heshima ya Ndoa', x: cx, y: 0.174, w: cw, h: 0.020, fontSize: 13, fontWeight: FontWeight.w600, align: TextAlign.center, color: ink, tag: 'sub'),
    ..._mOrnamentRule(0.16, 0.198, 0.68, ink: ink),
    ..._mLabelLine('Mume:', 'groom_name', cx, 0.230, cw, ink: ink, fontSize: 14),
    ..._mLabelLine('Mke:', 'bride_name', cx, 0.278, cw, ink: ink, fontSize: 14),
    ..._mLabelLine('Tarehe:', 'tarehe', cx, 0.326, cw, ink: ink, fontSize: 14, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'bride_house', cx, 0.374, cw, ink: ink, fontSize: 14),
    ..._mStaticPara(
      'Kwa mapenzi na ridhaa, tunaunganisha maisha yetu mbele ya familia na jamii. Pete hizi ni alama ya ahadi yetu.',
      cx,
      0.428,
      cw,
      0.060,
      ink: ink,
      fontSize: 13,
    ),
    ..._mLabelLine('Familia ya mume:', 'groom_family', cx, 0.498, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Familia ya mke:', 'bride_family', cx, 0.540, cw, ink: ink, fontSize: 12),
    ..._mPill('MAHARI', 0.586, 0.28, 0.44, ink: ink),
    ..._mMahariList(cx, 0.628, cw, ink: ink, accent: tpl.accent, count: 3),
    ..._mPersonMark(cx + colW / 2 - 0.028, 0.760, 0.056, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.05 + colW / 2 - 0.028, 0.760, 0.056, female: true, fill: 0xFF7A3B4A),
    ..._mInlineSign('mchumba_mume', cx, 0.824, colW, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + colW + 0.05, 0.824, colW, ink: ink),
    ..._mLabelLine('Mwandishi:', 'mwandishi', cx, 0.868, cw, ink: ink, startText: '[Jina]'),
    ..._mNgmyMark(0.904, ink: ink),
  ];
}

List<NgmySlideElement> _layoutPeteWidePage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 8. MUHURI WA FAMILIA ───────────────────────────────────────────────────

List<NgmySlideElement> _layoutMuhuriCrestPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  return [
    ..._mSeal(0.50, 0.070, 0.11, accent: _certGold, ink: ink),
    _mLockedText('HATI RASMI YA NDOA', x: cx, y: 0.136, w: cw, h: 0.036, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Muhuri wa Familia', x: cx, y: 0.174, w: cw, h: 0.018, fontSize: 12, fontWeight: FontWeight.w700, align: TextAlign.center, color: tpl.accent, tag: 'sub'),
    ..._mOrnamentRule(0.16, 0.196, 0.68, ink: ink),
    ..._mPill('TAARIFA RASMI', 0.220, 0.22, 0.56, ink: ink),
    ..._mLabelLine('Jina kamili la mume:', 'groom_name', cx, 0.264, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Jina kamili la mke:', 'bride_name', cx, 0.304, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Familia ya mume:', 'groom_family', cx, 0.344, cw, ink: ink),
    ..._mLabelLine('Familia ya mke:', 'bride_family', cx, 0.384, cw, ink: ink),
    ..._mLabelLine('Nyumba ya mume:', 'groom_house', cx, 0.424, cw, ink: ink),
    ..._mLabelLine('Nyumba ya mke:', 'bride_house', cx, 0.464, cw, ink: ink),
    ..._mLabelLine('Tarehe ya hati:', 'tarehe', cx, 0.504, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mPill('MAHARI / VITU VYA KUTOA', 0.548, 0.16, 0.68, ink: ink),
    ..._mMahariList(cx, 0.590, cw, ink: ink, accent: tpl.accent, count: 3),
    ..._mPill('MASHAHIDI', 0.726, 0.24, 0.52, ink: ink),
    ..._mLabelLine('Shahidi mume:', 'witness_mume_1_name', cx, 0.768, colW, ink: ink, fontSize: 10),
    ..._mLabelLine('Shahidi mke:', 'witness_mke_1_name', cx + colW + 0.04, 0.768, colW, ink: ink, fontSize: 10),
    ..._mInlineSign('mchumba_mume', cx, 0.810, colW, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + colW + 0.04, 0.810, colW, ink: ink),
    ..._mLabelLine('Mwandishi:', 'mwandishi', cx, 0.854, cw, ink: ink, startText: '[Jina]'),
    ..._mNgmyMark(0.890, ink: ink),
  ];
}

List<NgmySlideElement> _layoutMuhuriCrestPage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 9. FOMU YA NDOA ────────────────────────────────────────────────────────

List<NgmySlideElement> _layoutFomuWaziPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.03) / 2;
  return [
    _mLockedText('FOMU YA NDOA', x: cx, y: 0.028, w: cw, h: 0.034, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Sehemu ya kujaza', x: cx, y: 0.064, w: cw, h: 0.016, fontSize: 11, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'sub'),
    ..._mOrnamentRule(0.22, 0.084, 0.56, ink: ink),
    ..._mPill('A. TAARIFA ZA MUME', 0.108, 0.16, 0.68, ink: ink),
    ..._mLabelLine('1. Jina kamili:', 'groom_name', cx, 0.150, cw, ink: ink),
    ..._mLabelLine('2. Familia:', 'groom_family', cx, 0.188, cw, ink: ink),
    ..._mLabelLine('3. Nyumba:', 'groom_house', cx, 0.226, cw, ink: ink),
    ..._mLabelLine('4. Maelezo:', 'groom_name2', cx, 0.264, cw, ink: ink),
    ..._mPill('B. TAARIFA ZA MKE', 0.308, 0.16, 0.68, ink: ink),
    ..._mLabelLine('5. Jina kamili:', 'bride_name', cx, 0.350, cw, ink: ink),
    ..._mLabelLine('6. Familia:', 'bride_family', cx, 0.388, cw, ink: ink),
    ..._mLabelLine('7. Nyumba:', 'bride_house', cx, 0.426, cw, ink: ink),
    ..._mLabelLine('8. Maelezo:', 'bride_name2', cx, 0.464, cw, ink: ink),
    ..._mPill('C. MAHARI', 0.508, 0.16, 0.68, ink: ink),
    ..._mMahariList(cx, 0.550, cw, ink: ink, accent: tpl.accent, count: 4),
    ..._mPill('D. SAHIHI', 0.728, 0.22, 0.56, ink: ink),
    ..._mInlineSign('mchumba_mume', cx, 0.770, colW, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + colW + 0.03, 0.770, colW, ink: ink),
    ..._mLabelLine('Mwandishi:', 'mwandishi', cx, 0.814, cw, ink: ink, startText: '[Jina]'),
    ..._mLabelLine('Tarehe ya fomu:', 'tarehe', cx, 0.852, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'groom_family2', cx, 0.890, cw, ink: ink),
  ];
}

List<NgmySlideElement> _layoutFomuWaziPage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);

// ── 10. UPENDO WA DHAHABU — one ornate sheet, not a sparse two-pager ───────

List<NgmySlideElement> _layoutUpendoOrnatePage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  return [
    ..._mRings(0.41, 0.020, 0.056, ink: ink),
    ..._mOrnamentRule(0.14, 0.078, 0.72, ink: ink),
    _mLockedText('UPENDO WA DHAHABU', x: cx, y: 0.096, w: cw, h: 0.036, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Hati ya Mapenzi na Ahadi', x: cx, y: 0.134, w: cw, h: 0.018, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'sub'),
    ..._mOrnamentRule(0.14, 0.156, 0.72, ink: ink),
    ..._mPersonMark(cx + colW / 2 - 0.034, 0.178, 0.068, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.04 + colW / 2 - 0.034, 0.178, 0.068, female: true, fill: ink),
    _mLockedText('MUME', x: cx, y: 0.254, w: colW, h: 0.016, fontSize: 10, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'mume_lbl'),
    _mLockedText('MKE', x: cx + colW + 0.04, y: 0.254, w: colW, h: 0.016, fontSize: 10, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'mke_lbl'),
    ..._mLabelLine('Jina la Mume:', 'groom_name', cx, 0.280, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Jina la Mke:', 'bride_name', cx, 0.318, cw, ink: ink, fontSize: 12),
    ..._mLabelLine('Familia ya mume:', 'groom_family', cx, 0.356, cw, ink: ink),
    ..._mLabelLine('Familia ya mke:', 'bride_family', cx, 0.394, cw, ink: ink),
    ..._mLabelLine('Tarehe:', 'tarehe', cx, 0.432, cw, ink: ink, fontSize: 12, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'bride_house', cx, 0.470, cw, ink: ink, fontSize: 12),
    ..._mStaticPara(
      'Kwa upendo, heshima na ahadi, tunaunganisha mioyo yetu. Hati hii ni kumbukumbu ya siku tuliyochagua kuwa moja.',
      cx,
      0.514,
      cw,
      0.052,
      ink: ink,
      fontSize: 12,
    ),
    ..._mPill('MAHARI YA UPENDO', 0.574, 0.20, 0.60, ink: ink),
    ..._mMahariList(cx, 0.616, cw, ink: ink, accent: tpl.accent, count: 3),
    ..._mPill('MASHAHIDI WA UPENDO', 0.752, 0.16, 0.68, ink: ink),
    ..._mLabelLine('Shahidi mume:', 'witness_mume_1_name', cx, 0.792, colW, ink: ink, fontSize: 10),
    ..._mLabelLine('Shahidi mke:', 'witness_mke_1_name', cx + colW + 0.04, 0.792, colW, ink: ink, fontSize: 10),
    ..._mInlineSign('mchumba_mume', cx, 0.832, colW, ink: ink),
    ..._mInlineSign('mchumba_mke', cx + colW + 0.04, 0.832, colW, ink: ink),
    ..._mLabelLine('Mwandishi:', 'mwandishi', cx, 0.872, cw, ink: ink, startText: '[Jina]'),
    ..._mNgmyMark(0.906, ink: ink),
  ];
}

List<NgmySlideElement> _layoutUpendoOrnatePage2(NgmyMarriagePaperTemplate tpl) => _mEmptyPage2(tpl);
