part of 'ngmy_marriage_agreement_templates.dart';

const _kMahariItems = [
  ('👤', 'Kichwa cha Mtu', '[Kiasi cha Fedha (mfano: \$1,000)]'),
  ('🐐', 'Mbuzi', '[Idadi (mfano: 2)]'),
  ('🐍', "Ng'oka", '[Maelezo]'),
  ('🏺', 'Mmoko', '[Maelezo]'),
  ('➕', '[Kipengele kingine]', '[Maelezo]'),
  ('➕', '[Kipengele kingine]', '[Maelezo]'),
];

List<NgmySlideElement> _mMahariList(double x, double y, double w, {required int ink, required int accent, int count = 5}) {
  final out = <NgmySlideElement>[];
  var cy = y;
  final n = count.clamp(1, _kMahariItems.length);
  for (var i = 0; i < n; i++) {
    final (emoji, name, hint) = _kMahariItems[i];
    out.addAll(_mMahariRow(i + 1, emoji, name, hint, x, cy, w, ink: ink, accent: accent));
    cy += 0.046;
  }
  return out;
}

List<NgmySlideElement> _mIntroNarrative(double x, double y, {required int ink, double fontSize = 11}) {
  final out = <NgmySlideElement>[];
  var cy = y;
  out.addAll(_mRun([
    const NgmyMSeg.text('Mimi '),
    const NgmyMSeg.blank('bride_name', 0.18),
    const NgmyMSeg.text(', binti wa familia ya '),
    const NgmyMSeg.blank('bride_family', 0.2),
  ], x, cy, ink: ink, fontSize: fontSize));
  cy += 0.038;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('bride_house', 0.18),
    const NgmyMSeg.text(', ninathibitisha kwa hiari yangu kuwa'),
  ], x, cy, ink: ink, fontSize: fontSize));
  cy += 0.038;
  out.addAll(_mRun([
    const NgmyMSeg.text('nimemkubali '),
    const NgmyMSeg.blank('groom_name', 0.18),
    const NgmyMSeg.text(', mwana wa familia ya '),
    const NgmyMSeg.blank('groom_family', 0.2),
  ], x, cy, ink: ink, fontSize: fontSize));
  cy += 0.038;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('groom_house', 0.18),
    const NgmyMSeg.text(', kuwa mchumba wangu rasmi.'),
  ], x, cy, ink: ink, fontSize: fontSize));
  cy += 0.040;
  out.addAll(_mRun([
    const NgmyMSeg.text('Aidha, mimi '),
    const NgmyMSeg.blank('groom_name2', 0.18),
    const NgmyMSeg.text(', mwana wa familia ya '),
    const NgmyMSeg.blank('groom_family2', 0.18),
  ], x, cy, ink: ink, fontSize: fontSize));
  cy += 0.038;
  out.addAll(_mRun([
    const NgmyMSeg.text('Nyumba ya '),
    const NgmyMSeg.blank('groom_house2', 0.18),
    const NgmyMSeg.text(', ninathibitisha kuwa nimemchukua'),
  ], x, cy, ink: ink, fontSize: fontSize));
  cy += 0.038;
  out.addAll(_mRun([
    const NgmyMSeg.blank('bride_name2', 0.18),
    const NgmyMSeg.text(' kuwa mchumba wangu rasmi kwa nia ya kufunga ndoa.'),
  ], x, cy, ink: ink, fontSize: fontSize));
  return out;
}

// ── 1. HATI YA NDOA — interlocking rings, pill headers ─────────────────────

List<NgmySlideElement> _layoutRingsNdoaPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final out = <NgmySlideElement>[
    ..._mRings(0.42, 0.022, 0.072),
    _mLockedText('HATI YA NDOA', x: cx, y: 0.100, w: cw, h: 0.048, fontSize: 28, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Hati ya Makubaliano ya Ndoa', x: cx, y: 0.150, w: cw, h: 0.022, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: ink, tag: 'subtitle'),
    ..._mOrnamentRule(0.18, 0.176, 0.64, ink: ink),
    ..._mPill('TAARIFA ZA WANANDOA', 0.200, 0.18, 0.64, ink: ink),
    ..._mLabelLine('Jina la Mume:', 'groom_name', cx, 0.250, cw, ink: ink),
    ..._mLabelLine('Jina la Mke:', 'bride_name', cx, 0.292, cw, ink: ink),
    ..._mLabelLine('Tarehe ya Ndoa:', 'tarehe', cx, 0.334, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'bride_house', cx, 0.376, cw, ink: ink),
    ..._mPill('TAMKO LA MAKUBALIANO', 0.430, 0.18, 0.64, ink: ink),
    ..._mStaticPara(
      'Sisi, wanandoa, tunakubali kwa hiari na kwa moyo mmoja kuingia katika ndoa hii kwa mapenzi, heshima na ushirikiano. Tunajitolea kuwa wapenzi, washirika na msaada wa maisha yote, tukifuata maadili ya familia, desturi zetu na mafundisho mema kwa ajili ya mustakabali bora.',
      cx,
      0.478,
      cw,
      0.16,
      ink: ink,
      fontSize: 11.5,
    ),
    ..._mOrnamentRule(0.22, 0.660, 0.56, ink: ink),
    ..._mRun([
      const NgmyMSeg.text('Familia ya '),
      const NgmyMSeg.blank('groom_family', 0.20),
      const NgmyMSeg.text(' na familia ya '),
      const NgmyMSeg.blank('bride_family', 0.20),
    ], cx, 0.690, ink: ink, fontSize: 11),
    ..._mStaticPara('zinashuhudia na kutoa baraka zao kwa ndoa hii.', cx, 0.732, cw, 0.04, ink: ink, fontSize: 11),
    ..._mNgmyMark(0.860, ink: ink),
  ];
  return out;
}

List<NgmySlideElement> _layoutRingsNdoaPage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  final out = <NgmySlideElement>[
    ..._mPill('MASHAHIDI', 0.040, 0.18, 0.64, ink: ink),
    ..._mChevronHeader('Shahidi wa Mume', cx, 0.086, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('Shahidi wa Mke', cx + colW + 0.04, 0.086, colW, fill: ink, textColor: 0xFFFFFFFF),
  ];
  var y = 0.128;
  for (var n = 1; n <= 2; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.04, y, colW, ink: ink, accent: tpl.accent));
    y += 0.092;
  }
  out.addAll(_mPill('SAHIHI ZA WANANDOA', y + 0.012, 0.18, 0.64, ink: ink));
  y += 0.056;
  const boxH = 0.20;
  final boxW = cw * 0.42;
  out.addAll(_mPersonMark(cx + boxW / 2 - 0.034, y, 0.068, female: false, fill: ink));
  out.addAll(_mPersonMark(cx + cw - boxW / 2 - 0.034, y, 0.068, female: true, fill: 0xFF7A3B4A));
  y += 0.078;
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y, boxW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + cw - boxW, y, boxW, boxH, ink: ink, accent: tpl.accent));
  y += boxH + 0.028;
  out.addAll(_mPill('MWANDISHI / MSIMAMIZI', y, 0.18, 0.64, ink: ink));
  y += 0.042;
  out.addAll(_mLabelLine('Jina:', 'mwandishi', cx, y, 0.38, ink: ink, startText: '[Jina]'));
  out.addAll(_mLabelLine('Tarehe:', 'maelezo_ziada', cx + 0.40, y, 0.40, ink: ink, startText: '__ / __ / ____'));
  out.addAll(_mNgmyMark(0.880, ink: ink));
  return out;
}

// ── 2. TAARIFA ZA WANANDOA — male / female person cards ────────────────────

List<NgmySlideElement> _layoutCoupleCardsPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.09;
  const cw = 0.82;
  final out = <NgmySlideElement>[
    ..._mRings(0.44, 0.018, 0.048),
    _mLockedText('TAARIFA ZA WANANDOA', x: cx, y: 0.072, w: cw, h: 0.036, fontSize: 20, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    ..._mOrnamentRule(0.22, 0.112, 0.56, ink: ink),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: 0.140, w: cw, h: 0.30, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.1, tag: 'card_mume'),
    ..._mPersonMark(cx + 0.018, 0.154, 0.078, female: false, fill: ink),
    _mLockedText('TAARIFA ZA MUME', x: cx + 0.110, y: 0.168, w: 0.68, h: 0.024, fontSize: 13, fontWeight: FontWeight.w900, color: ink, tag: 'cm_h'),
    ..._mLabelLine('Jina la Mume:', 'groom_name', cx + 0.110, 0.202, 0.68, ink: ink),
    ..._mLabelLine('Familia:', 'groom_family', cx + 0.110, 0.242, 0.68, ink: ink),
    ..._mLabelLine('Nyumba:', 'groom_house', cx + 0.110, 0.282, 0.68, ink: ink),
    ..._mLabelLine('Tarehe:', 'groom_name2', cx + 0.110, 0.322, 0.68, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Anwani:', 'groom_family2', cx + 0.110, 0.362, 0.68, ink: ink),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: 0.458, w: cw, h: 0.30, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.1, tag: 'card_mke'),
    ..._mPersonMark(cx + 0.018, 0.472, 0.078, female: true, fill: 0xFF7A3B4A),
    _mLockedText('TAARIFA ZA MKE', x: cx + 0.110, y: 0.486, w: 0.68, h: 0.024, fontSize: 13, fontWeight: FontWeight.w900, color: 0xFF7A3B4A, tag: 'ck_h'),
    ..._mLabelLine('Jina la Mke:', 'bride_name', cx + 0.110, 0.520, 0.68, ink: ink),
    ..._mLabelLine('Familia:', 'bride_family', cx + 0.110, 0.560, 0.68, ink: ink),
    ..._mLabelLine('Nyumba:', 'bride_house', cx + 0.110, 0.600, 0.68, ink: ink),
    ..._mLabelLine('Tarehe:', 'bride_name2', cx + 0.110, 0.640, 0.68, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Anwani:', 'groom_house2', cx + 0.110, 0.680, 0.68, ink: ink),
    ..._mPill('MAELEZO YA ZIADA', 0.778, 0.20, 0.60, ink: ink),
    ..._mLabelLine('Historia:', 'maelezo_ziada', cx, 0.824, cw, ink: ink, startText: '[Maelezo]'),
    ..._mLabelLine('Tarehe ya hati:', 'tarehe', cx, 0.868, cw, ink: ink, startText: '__ / __ / ____'),
  ];
  return out;
}

List<NgmySlideElement> _layoutCoupleCardsPage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.09;
  const cw = 0.82;
  final out = <NgmySlideElement>[
    ..._mPill('MAHARI / VITU VYA KUTOA', 0.040, 0.16, 0.68, ink: ink),
    _mLockedText('Mchumba atatoa vitu vifuatavyo:', x: cx, y: 0.084, w: cw, h: 0.022, fontSize: 11, fontWeight: FontWeight.w600, color: ink, tag: 'mahari_sub'),
    ..._mMahariList(cx, 0.116, cw, ink: ink, accent: tpl.accent, count: 5),
  ];
  var y = 0.360;
  out.addAll(_mPill('MASHAHIDI', y, 0.20, 0.60, ink: ink));
  y += 0.046;
  final colW = (cw - 0.03) / 2;
  out.addAll(_mChevronHeader('UPANDE WA MUME', cx, y, colW, fill: ink, textColor: 0xFFFFFFFF));
  out.addAll(_mChevronHeader('UPANDE WA MKE', cx + colW + 0.03, y, colW, fill: 0xFF7A3B4A, textColor: 0xFFFFFFFF));
  y += 0.042;
  for (var n = 1; n <= 2; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.03, y, colW, ink: ink, accent: tpl.accent));
    y += 0.090;
  }
  y += 0.016;
  const boxH = 0.18;
  final boxW = cw * 0.42;
  out.addAll(_mPersonMark(cx + 0.012, y, 0.056, female: false, fill: ink));
  out.addAll(_mPersonMark(cx + cw - boxW + 0.012, y, 0.056, female: true, fill: 0xFF7A3B4A));
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y + 0.062, boxW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + cw - boxW, y + 0.062, boxW, boxH, ink: ink, accent: tpl.accent));
  return out;
}

// ── 3. BARUA YA KUHOWESHA — formal letter + numbered gifts ─────────────────

List<NgmySlideElement> _layoutKuhoweshaFormPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final out = <NgmySlideElement>[
    ..._mRings(0.12, 0.028, 0.050),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: 0.66, y: 0.028, w: 0.24, h: 0.048, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.0, tag: 'tarehe_box'),
    _mLockedText('TAREHE:', x: 0.66, y: 0.032, w: 0.24, h: 0.014, fontSize: 8, fontWeight: FontWeight.w800, align: TextAlign.center, color: ink, tag: 'tarehe_lbl'),
    _mBlank('tarehe', 0.67, 0.048, 0.22, ink: ink, fontSize: 8.5, startText: '__ / __ / ____'),
    _mLockedText('HATI YA KUHOWESHA', x: cx, y: 0.092, w: cw, h: 0.040, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Makubaliano ya Ndoa', x: cx, y: 0.134, w: cw, h: 0.020, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'subtitle'),
    ..._mOrnamentRule(0.20, 0.158, 0.60, ink: ink),
    ..._mIntroNarrative(cx, 0.186, ink: ink, fontSize: 10.5),
    ..._mPill('NIMETOWEA', 0.470, 0.22, 0.56, ink: ink),
    _mLockedText('Mchumba atatoa vitu vifuatavyo:', x: cx, y: 0.514, w: cw, h: 0.020, fontSize: 10.5, fontWeight: FontWeight.w600, color: ink, tag: 'mahari_sub'),
    ..._mMahariList(cx, 0.544, cw, ink: ink, accent: tpl.accent, count: 6),
  ];
  return out;
}

List<NgmySlideElement> _layoutKuhoweshaFormPage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.03) / 2;
  final out = <NgmySlideElement>[
    ..._mPill('MASHAHIDI', 0.040, 0.22, 0.56, ink: ink),
    ..._mChevronHeader('UPANDE WA MUME', cx, 0.086, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('UPANDE WA MKE', cx + colW + 0.03, 0.086, colW, fill: ink, textColor: 0xFFFFFFFF),
  ];
  var y = 0.128;
  for (var n = 1; n <= 3; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.03, y, colW, ink: ink, accent: tpl.accent));
    y += 0.088;
  }
  y += 0.020;
  const boxH = 0.18;
  final boxW = cw * 0.40;
  out.addAll(_mPartySignBox('mchumba_mume', 'MCHUMBA (MUME)', cx, y, boxW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MCHUMBA (MKE)', cx + cw - boxW, y, boxW, boxH, ink: ink, accent: tpl.accent));
  y += boxH + 0.024;
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: tpl.accent));
  return out;
}

// ── 4. MAHARI YA PANDE — terms + quote + dual signs ────────────────────────

List<NgmySlideElement> _layoutMahariPandePage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  return [
    _mLockedText('MASHUA / MAHARI', x: cx, y: 0.036, w: cw, h: 0.040, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Makubaliano kwa Pande Zote', x: cx, y: 0.078, w: cw, h: 0.020, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'subtitle'),
    ..._mOrnamentRule(0.22, 0.102, 0.56, ink: ink),
    ..._mStaticPara(
      'Kwa mapenzi na ridhaa ya pande zote, wanandoa wanakubali masharti yafuatayo kama sehemu ya heshima na upendo kati yao.',
      cx,
      0.128,
      cw,
      0.055,
      ink: ink,
      fontSize: 11,
    ),
    ..._mPill('SHARTI LA MASHUA / MAHARI', 0.192, 0.14, 0.72, ink: ink),
    ..._mLabelLine('1. Pesa / fedha:', 'mahari_1_amount', cx, 0.240, cw, ink: ink, startText: '[Kiasi]'),
    ..._mLabelLine('2. Vitu vya nyumba:', 'mahari_2_amount', cx, 0.282, cw, ink: ink, startText: '[Maelezo]'),
    ..._mLabelLine('3. Masharti mengine:', 'mahari_3_amount', cx, 0.324, cw, ink: ink, startText: '[Maelezo]'),
    ..._mLabelLine('4. Muda wa malipo:', 'mahari_4_amount', cx, 0.366, cw, ink: ink, startText: '[Tarehe / awamu]'),
    ..._mMahariList(cx, 0.416, cw, ink: ink, accent: tpl.accent, count: 4),
    ..._mRun([
      const NgmyMSeg.text('Mume: '),
      const NgmyMSeg.blank('groom_name', 0.28),
      const NgmyMSeg.text('   Mke: '),
      const NgmyMSeg.blank('bride_name', 0.28),
    ], cx, 0.620, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('Familia ya mume: '),
      const NgmyMSeg.blank('groom_family', 0.28),
    ], cx, 0.662, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('Familia ya mke: '),
      const NgmyMSeg.blank('bride_family', 0.28),
    ], cx, 0.704, ink: ink, fontSize: 11),
    _mLockedShape(shape: NgmySlideShapeKind.rectangle, x: cx, y: 0.752, w: cw, h: 0.090, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.0, tag: 'quote'),
    ..._mStaticPara(
      '"Mahari ni heshima, si bei ya mwanamke."',
      cx + 0.03,
      0.772,
      cw - 0.06,
      0.050,
      ink: ink,
      fontSize: 13,
    ),
    ..._mLabelLine('Tarehe:', 'tarehe', cx, 0.860, cw, ink: ink, startText: '__ / __ / ____'),
  ];
}

List<NgmySlideElement> _layoutMahariPandePage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  final out = <NgmySlideElement>[
    ..._mPill('SAHIHI ZA WATU WALIOHUSIKA', 0.040, 0.12, 0.76, ink: ink),
    ..._mPersonMark(cx + colW / 2 - 0.036, 0.090, 0.072, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.04 + colW / 2 - 0.036, 0.090, 0.072, female: true, fill: 0xFF7A3B4A),
    ..._mChevronHeader('UPANDE WA MUME', cx, 0.176, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('UPANDE WA MKE', cx + colW + 0.04, 0.176, colW, fill: 0xFF7A3B4A, textColor: 0xFFFFFFFF),
  ];
  var y = 0.218;
  for (var n = 1; n <= 2; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.04, y, colW, ink: ink, accent: tpl.accent));
    y += 0.092;
  }
  y += 0.016;
  const boxH = 0.19;
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y, colW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + colW + 0.04, y, colW, boxH, ink: ink, accent: tpl.accent));
  y += boxH + 0.024;
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: tpl.accent));
  return out;
}

// ── 5. SHERIA ZA FAMILIA — green tree header ───────────────────────────────

List<NgmySlideElement> _layoutFamiliaMtiPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  return [
    _mLockedText('🌳', x: 0.42, y: 0.024, w: 0.16, h: 0.050, fontSize: 28, align: TextAlign.center, tag: 'tree'),
    _mLockedText('NGOZI / SHERIA ZA FAMILIA', x: cx, y: 0.078, w: cw, h: 0.036, fontSize: 18, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Makubaliano ya Pamoja', x: cx, y: 0.116, w: cw, h: 0.020, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'subtitle'),
    ..._mOrnamentRule(0.22, 0.140, 0.56, ink: ink),
    ..._mStaticPara(
      'Kwa heshima na maelewano, familia zinakubaliana na sheria na kanuni zifuatazo za kuongoza nyumba na maisha ya pamoja.',
      cx,
      0.168,
      cw,
      0.055,
      ink: ink,
      fontSize: 11,
    ),
    ..._mRun([
      const NgmyMSeg.text('1. Uaminifu: '),
      const NgmyMSeg.blank('mahari_1_name', 0.50),
    ], cx, 0.236, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('2. Heshima ya familia: '),
      const NgmyMSeg.blank('mahari_2_name', 0.42),
    ], cx, 0.278, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('3. Matunzo ya watoto: '),
      const NgmyMSeg.blank('mahari_3_name', 0.42),
    ], cx, 0.320, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('4. Malezi ya nyumba: '),
      const NgmyMSeg.blank('mahari_4_name', 0.44),
    ], cx, 0.362, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('5. Usaidizi wa pamoja: '),
      const NgmyMSeg.blank('mahari_5_name', 0.42),
    ], cx, 0.404, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('6. Msada wa wazazi: '),
      const NgmyMSeg.blank('mahari_6_name', 0.44),
    ], cx, 0.446, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('7. Migogoro na ufumbuzi: '),
      const NgmyMSeg.blank('mahari_1_amount', 0.38),
    ], cx, 0.488, ink: ink, fontSize: 11),
    ..._mRun([
      const NgmyMSeg.text('8. Sharti jingine: '),
      const NgmyMSeg.blank('mahari_2_amount', 0.46),
    ], cx, 0.530, ink: ink, fontSize: 11),
    ..._mPill('WANANDOA', 0.582, 0.24, 0.52, ink: ink),
    ..._mLabelLine('Jina la Mume:', 'groom_name', cx, 0.630, cw, ink: ink),
    ..._mLabelLine('Jina la Mke:', 'bride_name', cx, 0.672, cw, ink: ink),
    ..._mLabelLine('Familia ya mume:', 'groom_family', cx, 0.714, cw, ink: ink),
    ..._mLabelLine('Familia ya mke:', 'bride_family', cx, 0.756, cw, ink: ink),
    ..._mLabelLine('Nyumba:', 'groom_house', cx, 0.798, cw, ink: ink),
    ..._mLabelLine('Tarehe:', 'tarehe', cx, 0.840, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'bride_house', cx, 0.882, cw, ink: ink),
  ];
}

List<NgmySlideElement> _layoutFamiliaMtiPage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  final out = <NgmySlideElement>[
    ..._mPill('SAHIHI ZA WAKUBALIANO', 0.040, 0.16, 0.68, ink: ink),
    ..._mPersonMark(cx + colW / 2 - 0.036, 0.088, 0.072, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.04 + colW / 2 - 0.036, 0.088, 0.072, female: true, fill: 0xFF5A3A48),
    ..._mChevronHeader('UPANDE WA MUME', cx, 0.176, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('UPANDE WA MKE', cx + colW + 0.04, 0.176, colW, fill: ink, textColor: 0xFFFFFFFF),
  ];
  var y = 0.218;
  for (var n = 1; n <= 2; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.04, y, colW, ink: ink, accent: tpl.accent));
    y += 0.092;
  }
  y += 0.012;
  const boxH = 0.19;
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y, colW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + colW + 0.04, y, colW, boxH, ink: ink, accent: tpl.accent));
  y += boxH + 0.022;
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: tpl.accent));
  return out;
}

// ── 6. NDOA YA PAMOJA — dual columns from the start ────────────────────────

List<NgmySlideElement> _layoutNdoaSafiPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.09;
  const cw = 0.82;
  final colW = (cw - 0.04) / 2;
  return [
    _mLockedShape(shape: NgmySlideShapeKind.hexagon, x: 0.12, y: 0.022, w: 0.036, h: 0.028, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.2, tag: 'lantern_l'),
    _mLockedShape(shape: NgmySlideShapeKind.hexagon, x: 0.844, y: 0.022, w: 0.036, h: 0.028, fillColor: 0x00000000, strokeColor: _certGold, strokeWidth: 1.2, tag: 'lantern_r'),
    _mLockedText('MAKUBALIANO YA NDOA', x: cx, y: 0.054, w: cw, h: 0.034, fontSize: 18, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Hati ya Mume na Mke', x: cx, y: 0.090, w: cw, h: 0.018, fontSize: 11, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'subtitle'),
    ..._mOrnamentRule(0.22, 0.112, 0.56, ink: ink),
    ..._mPersonMark(cx + colW / 2 - 0.034, 0.136, 0.068, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.04 + colW / 2 - 0.034, 0.136, 0.068, female: true, fill: 0xFF7A3B4A),
    ..._mChevronHeader('MUME', cx, 0.216, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('MKE', cx + colW + 0.04, 0.216, colW, fill: 0xFF7A3B4A, textColor: 0xFFFFFFFF),
    ..._mLabelLine('Jina:', 'groom_name', cx, 0.258, colW, ink: ink),
    ..._mLabelLine('Jina:', 'bride_name', cx + colW + 0.04, 0.258, colW, ink: ink),
    ..._mLabelLine('Familia:', 'groom_family', cx, 0.300, colW, ink: ink),
    ..._mLabelLine('Familia:', 'bride_family', cx + colW + 0.04, 0.300, colW, ink: ink),
    ..._mLabelLine('Nyumba:', 'groom_house', cx, 0.342, colW, ink: ink),
    ..._mLabelLine('Nyumba:', 'bride_house', cx + colW + 0.04, 0.342, colW, ink: ink),
    ..._mLabelLine('Tarehe:', 'groom_name2', cx, 0.384, colW, ink: ink, startText: '__ / __'),
    ..._mLabelLine('Tarehe:', 'bride_name2', cx + colW + 0.04, 0.384, colW, ink: ink, startText: '__ / __'),
    ..._mPill('MASHARTI YA NDOA', 0.436, 0.20, 0.60, ink: ink),
    ..._mLabelLine('1. Mahari:', 'mahari_1_amount', cx, 0.484, cw, ink: ink, startText: '[Kiasi]'),
    ..._mLabelLine('2. Nyumba ya pamoja:', 'mahari_2_amount', cx, 0.526, cw, ink: ink),
    ..._mLabelLine('3. Heshima na umilele:', 'mahari_3_amount', cx, 0.568, cw, ink: ink),
    ..._mLabelLine('4. Sharti jingine:', 'mahari_4_amount', cx, 0.610, cw, ink: ink),
    ..._mStaticPara(
      'Kwa kila mmoja, ndoa hii ni ahadi ya kusaidiana. Hii ni makubaliano ya ndoa kati ya mume na mke kwa ridhaa ya familia zao.',
      cx,
      0.662,
      cw,
      0.070,
      ink: ink,
      fontSize: 11,
    ),
    ..._mLabelLine('Tarehe ya hati:', 'tarehe', cx, 0.746, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'groom_family2', cx, 0.788, cw, ink: ink),
    ..._mNgmyMark(0.860, ink: ink),
  ];
}

List<NgmySlideElement> _layoutNdoaSafiPage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.09;
  const cw = 0.82;
  final colW = (cw - 0.04) / 2;
  final out = <NgmySlideElement>[
    ..._mPill('SAHIHI ZA SHAHIDI', 0.040, 0.18, 0.64, ink: ink),
  ];
  var y = 0.086;
  for (var n = 1; n <= 2; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.04, y, colW, ink: ink, accent: tpl.accent));
    y += 0.092;
  }
  y += 0.016;
  const boxH = 0.20;
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y, colW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + colW + 0.04, y, colW, boxH, ink: ink, accent: tpl.accent));
  y += boxH + 0.028;
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: tpl.accent));
  return out;
}

// ── 7. PETE PANA — larger rings, more gold, open spacing ───────────────────

List<NgmySlideElement> _layoutPeteWidePage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  return [
    ..._mRings(0.38, 0.028, 0.108),
    _mLockedText('PETE ZA UMOJA', x: cx, y: 0.150, w: cw, h: 0.044, fontSize: 26, fontWeight: FontWeight.w900, align: TextAlign.center, color: _certGold, tag: 'title'),
    _mLockedText('Hati ya Heshima ya Ndoa', x: cx, y: 0.196, w: cw, h: 0.022, fontSize: 13, fontWeight: FontWeight.w600, align: TextAlign.center, color: ink, tag: 'subtitle'),
    ..._mOrnamentRule(0.16, 0.226, 0.68, ink: ink),
    ..._mLabelLine('Mume:', 'groom_name', cx, 0.268, cw, ink: ink, fontSize: 13),
    ..._mLabelLine('Mke:', 'bride_name', cx, 0.322, cw, ink: ink, fontSize: 13),
    ..._mLabelLine('Tarehe:', 'tarehe', cx, 0.376, cw, ink: ink, fontSize: 13, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'bride_house', cx, 0.430, cw, ink: ink, fontSize: 13),
    ..._mStaticPara(
      'Kwa mapenzi na ridhaa, tunaunganisha maisha yetu mbele ya familia na jamii. Pete hizi ni alama ya ahadi yetu.',
      cx,
      0.490,
      cw,
      0.080,
      ink: ink,
      fontSize: 13,
    ),
    ..._mRun([
      const NgmyMSeg.text('Familia ya '),
      const NgmyMSeg.blank('groom_family', 0.24),
      const NgmyMSeg.text('  ·  '),
      const NgmyMSeg.blank('bride_family', 0.24),
    ], cx, 0.586, ink: ink, fontSize: 12),
    ..._mPill('MAHARI', 0.640, 0.28, 0.44, ink: ink),
    ..._mMahariList(cx, 0.686, cw, ink: ink, accent: tpl.accent, count: 4),
  ];
}

List<NgmySlideElement> _layoutPeteWidePage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.05) / 2;
  final out = <NgmySlideElement>[
    ..._mRings(0.42, 0.024, 0.060),
    ..._mPill('MASHAHIDI', 0.100, 0.24, 0.52, ink: ink),
    ..._mPersonMark(cx + colW / 2 - 0.034, 0.146, 0.068, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.05 + colW / 2 - 0.034, 0.146, 0.068, female: true, fill: 0xFF7A3B4A),
  ];
  var y = 0.230;
  for (var n = 1; n <= 2; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.05, y, colW, ink: ink, accent: tpl.accent));
    y += 0.100;
  }
  y += 0.020;
  const boxH = 0.20;
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y, colW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + colW + 0.05, y, colW, boxH, ink: ink, accent: tpl.accent));
  y += boxH + 0.028;
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: tpl.accent));
  return out;
}

// ── 8. MUHURI WA FAMILIA — large crest / seal ──────────────────────────────

List<NgmySlideElement> _layoutMuhuriCrestPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  return [
    ..._mSeal(0.50, 0.086, 0.13, accent: _certGold, ink: ink),
    _mLockedText('HATI RASMI YA NDOA', x: cx, y: 0.168, w: cw, h: 0.040, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Muhuri wa Familia', x: cx, y: 0.210, w: cw, h: 0.020, fontSize: 12, fontWeight: FontWeight.w700, align: TextAlign.center, color: tpl.accent, tag: 'subtitle'),
    ..._mOrnamentRule(0.18, 0.236, 0.64, ink: ink),
    ..._mPill('TAARIFA RASMI', 0.264, 0.22, 0.56, ink: ink),
    ..._mLabelLine('Jina kamili la mume:', 'groom_name', cx, 0.314, cw, ink: ink),
    ..._mLabelLine('Jina kamili la mke:', 'bride_name', cx, 0.360, cw, ink: ink),
    ..._mLabelLine('Familia ya mume:', 'groom_family', cx, 0.406, cw, ink: ink),
    ..._mLabelLine('Familia ya mke:', 'bride_family', cx, 0.452, cw, ink: ink),
    ..._mLabelLine('Nyumba ya mume:', 'groom_house', cx, 0.498, cw, ink: ink),
    ..._mLabelLine('Nyumba ya mke:', 'bride_house', cx, 0.544, cw, ink: ink),
    ..._mLabelLine('Tarehe ya hati:', 'tarehe', cx, 0.590, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mIntroNarrative(cx, 0.640, ink: ink, fontSize: 10),
  ];
}

List<NgmySlideElement> _layoutMuhuriCrestPage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final out = <NgmySlideElement>[
    ..._mPill('MAHARI / VITU VYA KUTOA', 0.036, 0.16, 0.68, ink: ink),
    ..._mMahariList(cx, 0.082, cw, ink: ink, accent: tpl.accent, count: 5),
    ..._mPill('MASHAHIDI', 0.328, 0.24, 0.52, ink: ink),
  ];
  final colW = (cw - 0.03) / 2;
  var y = 0.374;
  for (var n = 1; n <= 2; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.03, y, colW, ink: ink, accent: tpl.accent));
    y += 0.090;
  }
  const boxH = 0.17;
  final boxW = cw * 0.36;
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y + 0.012, boxW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mSeal(0.50, y + 0.096, 0.15, accent: _certGold, ink: ink));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + cw - boxW, y + 0.012, boxW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mFooter(cx, 0.82, cw, ink: ink, accent: tpl.accent));
  return out;
}

// ── 9. FOMU YA NDOA — lined numbered form ──────────────────────────────────

List<NgmySlideElement> _layoutFomuWaziPage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  return [
    _mLockedText('FOMU YA NDOA', x: cx, y: 0.032, w: cw, h: 0.036, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Sehemu ya kujaza — ukurasa wa kwanza', x: cx, y: 0.070, w: cw, h: 0.018, fontSize: 10.5, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'subtitle'),
    ..._mOrnamentRule(0.22, 0.092, 0.56, ink: ink),
    ..._mPill('A. TAARIFA ZA MUME', 0.118, 0.16, 0.68, ink: ink),
    ..._mLabelLine('1. Jina kamili:', 'groom_name', cx, 0.164, cw, ink: ink),
    ..._mLabelLine('2. Familia:', 'groom_family', cx, 0.206, cw, ink: ink),
    ..._mLabelLine('3. Nyumba:', 'groom_house', cx, 0.248, cw, ink: ink),
    ..._mLabelLine('4. Maelezo:', 'groom_name2', cx, 0.290, cw, ink: ink),
    ..._mPill('B. TAARIFA ZA MKE', 0.340, 0.16, 0.68, ink: ink),
    ..._mLabelLine('5. Jina kamili:', 'bride_name', cx, 0.386, cw, ink: ink),
    ..._mLabelLine('6. Familia:', 'bride_family', cx, 0.428, cw, ink: ink),
    ..._mLabelLine('7. Nyumba:', 'bride_house', cx, 0.470, cw, ink: ink),
    ..._mLabelLine('8. Maelezo:', 'bride_name2', cx, 0.512, cw, ink: ink),
    ..._mPill('C. MAHARI', 0.562, 0.16, 0.68, ink: ink),
    ..._mMahariList(cx, 0.608, cw, ink: ink, accent: tpl.accent, count: 5),
    ..._mLabelLine('Tarehe ya fomu:', 'tarehe', cx, 0.850, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'groom_family2', cx, 0.892, cw, ink: ink),
  ];
}

List<NgmySlideElement> _layoutFomuWaziPage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.03) / 2;
  final out = <NgmySlideElement>[
    ..._mPill('D. MASHAHIDI', 0.036, 0.18, 0.64, ink: ink),
    ..._mChevronHeader('UPANDE WA MUME', cx, 0.082, colW, fill: ink, textColor: 0xFFFFFFFF),
    ..._mChevronHeader('UPANDE WA MKE', cx + colW + 0.03, 0.082, colW, fill: ink, textColor: 0xFFFFFFFF),
  ];
  var y = 0.124;
  for (var n = 1; n <= 3; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.03, y, colW, ink: ink, accent: tpl.accent));
    y += 0.088;
  }
  out.addAll(_mPill('E. SAHIHI', y + 0.008, 0.22, 0.56, ink: ink));
  y += 0.050;
  const boxH = 0.17;
  final boxW = cw * 0.40;
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y, boxW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + cw - boxW, y, boxW, boxH, ink: ink, accent: tpl.accent));
  y += boxH + 0.020;
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: tpl.accent));
  return out;
}

// ── 10. UPENDO WA DHAHABU — ornate rose + couple icons ─────────────────────

List<NgmySlideElement> _layoutUpendoOrnatePage1(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  return [
    ..._mRings(0.42, 0.020, 0.056),
    ..._mOrnamentRule(0.14, 0.080, 0.72, ink: ink),
    _mLockedText('UPENDO WA DHAHABU', x: cx, y: 0.100, w: cw, h: 0.040, fontSize: 22, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'title'),
    _mLockedText('Hati ya Mapenzi na Ahadi', x: cx, y: 0.142, w: cw, h: 0.020, fontSize: 12, fontWeight: FontWeight.w600, align: TextAlign.center, color: tpl.accent, tag: 'subtitle'),
    ..._mOrnamentRule(0.14, 0.166, 0.72, ink: ink),
    ..._mPersonMark(0.18, 0.196, 0.080, female: false, fill: ink),
    ..._mPersonMark(0.74, 0.196, 0.080, female: true, fill: ink),
    _mLockedText('MUME', x: 0.16, y: 0.284, w: 0.14, h: 0.018, fontSize: 10, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'mume_lbl'),
    _mLockedText('MKE', x: 0.72, y: 0.284, w: 0.14, h: 0.018, fontSize: 10, fontWeight: FontWeight.w900, align: TextAlign.center, color: ink, tag: 'mke_lbl'),
    ..._mLabelLine('Jina la Mume:', 'groom_name', cx, 0.318, cw, ink: ink),
    ..._mLabelLine('Jina la Mke:', 'bride_name', cx, 0.360, cw, ink: ink),
    ..._mLabelLine('Familia ya mume:', 'groom_family', cx, 0.402, cw, ink: ink),
    ..._mLabelLine('Familia ya mke:', 'bride_family', cx, 0.444, cw, ink: ink),
    ..._mLabelLine('Tarehe:', 'tarehe', cx, 0.486, cw, ink: ink, startText: '__ / __ / ____'),
    ..._mLabelLine('Mahali:', 'bride_house', cx, 0.528, cw, ink: ink),
    ..._mStaticPara(
      'Kwa upendo, heshima na ahadi, tunaunganisha mioyo yetu. Hati hii ni kumbukumbu ya siku tuliyochagua kuwa moja.',
      cx,
      0.580,
      cw,
      0.070,
      ink: ink,
      fontSize: 12,
    ),
    ..._mPill('MAHARI YA UPENDO', 0.662, 0.20, 0.60, ink: ink),
    ..._mMahariList(cx, 0.708, cw, ink: ink, accent: tpl.accent, count: 4),
  ];
}

List<NgmySlideElement> _layoutUpendoOrnatePage2(NgmyMarriagePaperTemplate tpl) {
  final ink = tpl.ink;
  const cx = 0.10;
  const cw = 0.80;
  final colW = (cw - 0.04) / 2;
  final out = <NgmySlideElement>[
    ..._mOrnamentRule(0.16, 0.028, 0.68, ink: ink),
    ..._mPill('MASHAHIDI WA UPENDO', 0.052, 0.16, 0.68, ink: ink),
    ..._mPersonMark(cx + 0.010, 0.100, 0.056, female: false, fill: ink),
    ..._mPersonMark(cx + colW + 0.050, 0.100, 0.056, female: true, fill: ink),
  ];
  var y = 0.168;
  for (var n = 1; n <= 2; n++) {
    out.addAll(_mWitnessRow('mume', n, cx, y, colW, ink: ink, accent: tpl.accent));
    out.addAll(_mWitnessRow('mke', n, cx + colW + 0.04, y, colW, ink: ink, accent: tpl.accent));
    y += 0.094;
  }
  y += 0.012;
  const boxH = 0.20;
  out.addAll(_mPartySignBox('mchumba_mume', 'MUME', cx, y, colW, boxH, ink: ink, accent: tpl.accent));
  out.addAll(_mPartySignBox('mchumba_mke', 'MKE', cx + colW + 0.04, y, colW, boxH, ink: ink, accent: tpl.accent));
  y += boxH + 0.024;
  out.addAll(_mFooter(cx, y, cw, ink: ink, accent: tpl.accent));
  return out;
}
