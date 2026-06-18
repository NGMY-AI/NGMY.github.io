part of 'ngmy_invoice_templates.dart';

const _luxGold = Color(0xFFD4AF37);
const _luxGoldLight = Color(0xFFF5E6B8);
const _luxGoldDark = Color(0xFF8B6914);
const _luxIvory = Color(0xFFF8F4EA);
const _luxBlack = Color(0xFF080808);

/// Shared royal/presidential invoice chrome for Essential Luxury variants.
class _EssentialLuxuryCtx {
  _EssentialLuxuryCtx(this.data, this.template);

  final NgmyInvoicePreviewData data;
  final NgmyInvoiceTemplate template;

  NgmyInvoiceTemplate get t => template;
  Color get accent => t.accent;
  Color get accent2 => t.accent2;

  bool get isEstimate => data.documentKind == 'estimate';
  String get docLabel => isEstimate ? 'ESTIMATE' : 'INVOICE';
  String get docRibbon => isEstimate ? 'CERTIFIED REPAIR ESTIMATE' : 'BY ROYAL APPOINTMENT · OFFICIAL INVOICE';
  String get docSuite => isEstimate ? 'NGMY ESTIMATE STUDIO' : 'PREMIUM INVOICE SUITE';
  String get docWatermark => isEstimate ? 'CERTIFIED ESTIMATE' : 'ROYAL EXCHEQUER';
  String get docBinding => isEstimate
      ? 'This estimate is valid for the period stated and subject to on-site verification.'
      : 'This document constitutes a binding executive agreement.';

  String get biz => data.businessName.isEmpty ? 'YOUR EXCELLENCY' : data.businessName.toUpperCase();
  String get invNo => data.invoiceNo.isEmpty ? '1' : data.invoiceNo;
  String get issued => data.issuedDate.isEmpty ? '--/--/----' : data.issuedDate;
  String get due => data.dueDate.isEmpty ? '—' : data.dueDate;
  String get client => data.clientName.isEmpty ? 'Distinguished Client' : data.clientName;
  String get item => data.itemName.isEmpty ? 'Premium Service' : data.itemName;
  String get qty => data.itemQty.isEmpty ? '1' : data.itemQty;
  String get lineTotal => data.subtotal.toStringAsFixed(2);
  String get balanceDue => data.isPaid ? '0.00' : lineTotal;
  String get total => lineTotal;
  bool get isPaid => data.isPaid;
  String get headline => data.itemName.isEmpty ? 'Executive Services Invoice' : data.itemName;
  String get summary => data.itemDesc.trim().isNotEmpty
      ? data.itemDesc.trim()
      : (data.paymentInfo.trim().isNotEmpty ? data.paymentInfo.trim() : 'With highest regard for your patronage and trust.');
  String get quote => data.paymentInfo.trim().isNotEmpty
      ? data.paymentInfo.trim()
      : 'It is our honor to serve you with distinction and excellence.';

  Widget royalShell({required Widget body, Widget? topBand, CustomPainter? overlay, bool showCrownBand = true}) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            Color.lerp(t.gradient.first, _luxBlack, 0.08)!,
            Color.lerp(t.gradient.last, _luxBlack, 0.22)!,
            Color.lerp(t.gradient.first, _luxBlack, 0.35)!,
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: _luxGold, width: 2.8),
        boxShadow: [
          BoxShadow(color: accent.withOpacity(0.42), blurRadius: 28, spreadRadius: 2),
          BoxShadow(color: _luxGold.withOpacity(0.18), blurRadius: 12, offset: const Offset(0, 4)),
          BoxShadow(color: Colors.black.withOpacity(0.55), blurRadius: 16, offset: const Offset(0, 8)),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(11),
        child: Stack(
          children: [
            Positioned.fill(child: CustomPaint(painter: _DamaskPainter(accent.withOpacity(0.08), _luxGold.withOpacity(0.05)))),
            Positioned.fill(child: CustomPaint(painter: _LinenPainter(_luxGold.withOpacity(0.025)))),
            if (overlay != null) Positioned.fill(child: CustomPaint(painter: overlay)),
            Positioned.fill(child: CustomPaint(painter: _CornerFlourishPainter(_luxGold.withOpacity(0.82)))),
            if (data.isPaid) Positioned(right: 20, top: 72, child: paidStampSeal()),
            Positioned.fill(
              child: IgnorePointer(
                child: Center(
                  child: Transform.rotate(
                    angle: -0.18,
                    child: Text(
                      docWatermark,
                      style: TextStyle(
                        color: _luxGold.withOpacity(0.045),
                        fontSize: 42,
                        fontWeight: FontWeight.w900,
                        letterSpacing: 6,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Positioned.fill(
              child: Padding(
                padding: const EdgeInsets.all(9),
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    border: Border.all(color: _luxGold.withOpacity(0.55), width: 1.2),
                    borderRadius: BorderRadius.circular(5),
                  ),
                ),
              ),
            ),
            Positioned.fill(
              child: Padding(
                padding: const EdgeInsets.all(14),
                child: DecoratedBox(
                  decoration: BoxDecoration(
                    border: Border.all(color: _luxGold.withOpacity(0.22), width: 0.8),
                    borderRadius: BorderRadius.circular(3),
                  ),
                ),
              ),
            ),
            Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                if (topBand != null) topBand else if (showCrownBand) crownBand(),
                Padding(padding: const EdgeInsets.fromLTRB(16, 12, 16, 14), child: body),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget crownBand() => Container(
        padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 12),
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [_luxGoldDark, _luxGold, _luxGoldLight, _luxGold, _luxGoldDark],
            stops: const [0, 0.25, 0.5, 0.75, 1],
          ),
          border: Border(bottom: BorderSide(color: _luxGoldLight.withOpacity(0.6), width: 1)),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.workspace_premium_rounded, color: _luxBlack.withOpacity(0.75), size: 16),
            const SizedBox(width: 8),
            Text(
              docRibbon,
              style: TextStyle(color: _luxBlack.withOpacity(0.88), fontWeight: FontWeight.w900, fontSize: 8, letterSpacing: 2.2),
            ),
            const SizedBox(width: 8),
            Icon(Icons.workspace_premium_rounded, color: _luxBlack.withOpacity(0.75), size: 16),
          ],
        ),
      );

  Widget goldRule({double pad = 8}) => Padding(
        padding: EdgeInsets.symmetric(vertical: pad),
        child: Row(
          children: [
            Expanded(child: Container(height: 1, color: _luxGold.withOpacity(0.55))),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: Icon(Icons.diamond_rounded, size: 10, color: _luxGold),
            ),
            Expanded(child: Container(height: 1, color: _luxGold.withOpacity(0.55))),
          ],
        ),
      );

  Widget royalTitle(String text, {double size = 20, Color? color}) => ShaderMask(
        shaderCallback: (r) => LinearGradient(colors: [_luxGoldLight, _luxGold, _luxGoldDark]).createShader(r),
        child: Text(
          text,
          textAlign: TextAlign.center,
          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: size, letterSpacing: 2.5, height: 1.05),
        ),
      );

  Widget subtitle(String text) => Text(
        text,
        textAlign: TextAlign.center,
        style: TextStyle(color: _luxIvory.withOpacity(0.72), fontSize: 9, letterSpacing: 1.6, fontWeight: FontWeight.w600),
      );

  Widget photo({double size = 92, BoxShape shape = BoxShape.circle, BorderRadius? radius}) {
    final bytes = data.providerPhotoBytes;
    Widget img;
    if (bytes != null && bytes.isNotEmpty) {
      img = Image.memory(bytes, fit: BoxFit.cover, width: size, height: size);
    } else {
      img = Container(
        color: const Color(0xFF141010),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.person_rounded, size: size * 0.38, color: _luxGold.withOpacity(0.75)),
            Text('PORTRAIT', style: TextStyle(color: _luxGold.withOpacity(0.55), fontSize: 7, letterSpacing: 1.2, fontWeight: FontWeight.w800)),
          ],
        ),
      );
    }
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: shape,
        borderRadius: shape == BoxShape.rectangle ? (radius ?? BorderRadius.circular(8)) : null,
        border: Border.all(color: _luxGold, width: 2.5),
        boxShadow: [
          BoxShadow(color: _luxGold.withOpacity(0.45), blurRadius: 14),
          BoxShadow(color: accent.withOpacity(0.25), blurRadius: 6),
        ],
      ),
      child: ClipRRect(
        borderRadius: shape == BoxShape.circle ? BorderRadius.circular(size) : (radius ?? BorderRadius.circular(6)),
        child: img,
      ),
    );
  }

  Widget metaChip(String label, String value) => Expanded(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 6),
          decoration: BoxDecoration(
            color: Colors.black.withOpacity(0.35),
            border: Border.all(color: _luxGold.withOpacity(0.35)),
          ),
          child: Column(
            children: [
              Text(label, style: TextStyle(color: _luxGold, fontSize: 7, fontWeight: FontWeight.w900, letterSpacing: 1.1)),
              const SizedBox(height: 3),
              Text(value, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w800, fontSize: 10)),
            ],
          ),
        ),
      );

  Widget luxeTable() => Container(
        decoration: BoxDecoration(
          border: Border.all(color: _luxGold.withOpacity(0.5)),
          color: Colors.black.withOpacity(0.28),
        ),
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: [_luxGoldDark, _luxGold, _luxGoldDark]),
              ),
              child: Row(
                children: const [
                  Expanded(child: Text('DESCRIPTION', style: TextStyle(color: _luxBlack, fontSize: 8, fontWeight: FontWeight.w900, letterSpacing: 1))),
                  SizedBox(width: 36, child: Text('QTY', textAlign: TextAlign.center, style: TextStyle(color: _luxBlack, fontSize: 8, fontWeight: FontWeight.w900))),
                  SizedBox(width: 58, child: Text('AMOUNT', textAlign: TextAlign.right, style: TextStyle(color: _luxBlack, fontSize: 8, fontWeight: FontWeight.w900))),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
              child: Row(
                children: [
                  Expanded(child: Text(item, style: const TextStyle(color: _luxIvory, fontSize: 11, fontWeight: FontWeight.w700))),
                  SizedBox(width: 36, child: Text(qty, textAlign: TextAlign.center, style: TextStyle(color: _luxIvory.withOpacity(0.9), fontSize: 10))),
                  SizedBox(width: 58, child: Text('\$$lineTotal', textAlign: TextAlign.right, style: const TextStyle(color: _luxGoldLight, fontSize: 11, fontWeight: FontWeight.w900))),
                ],
              ),
            ),
          ],
        ),
      );

  Widget totalPlaque({String label = 'TOTAL DUE'}) {
    final dueLabel = isPaid ? 'BALANCE DUE' : label;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11),
      decoration: BoxDecoration(
        gradient: const LinearGradient(colors: [_luxGoldDark, _luxGold, _luxGoldLight, _luxGold]),
        borderRadius: BorderRadius.circular(4),
        boxShadow: [BoxShadow(color: _luxGold.withOpacity(0.35), blurRadius: 10, offset: const Offset(0, 3))],
      ),
      child: Row(
        children: [
          Icon(Icons.workspace_premium_rounded, color: _luxBlack.withOpacity(0.7), size: 18),
          const SizedBox(width: 8),
          Text(dueLabel, style: TextStyle(color: _luxBlack.withOpacity(0.85), fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.2)),
          const Spacer(),
          Text('\$$balanceDue', style: const TextStyle(color: _luxBlack, fontWeight: FontWeight.w900, fontSize: 22, height: 1)),
        ],
      ),
    );
  }

  /// Gold crown stamp — same on every Essential Luxury template when paid.
  Widget paidStampSeal() => Transform.rotate(
        angle: -0.32,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(6),
            border: Border.all(color: _luxGold, width: 2.4),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [_luxGoldDark.withOpacity(0.92), _luxBlack.withOpacity(0.82)],
            ),
            boxShadow: [
              BoxShadow(color: _luxGold.withOpacity(0.5), blurRadius: 12, offset: const Offset(0, 2)),
            ],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.workspace_premium_rounded, color: _luxGoldLight, size: 18),
              const SizedBox(height: 2),
              const Text(
                'PAID',
                style: TextStyle(color: _luxGoldLight, fontWeight: FontWeight.w900, fontSize: 14, letterSpacing: 2.6),
              ),
            ],
          ),
        ),
      );

  Widget sigRow() => Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(child: _sig('AUTHORIZED SIGNATURE', data.providerSignature)),
          const SizedBox(width: 8),
          Expanded(child: _sig('CLIENT SIGNATURE', data.clientSignature)),
        ],
      );

  Widget _sig(String label, List<Offset?> points) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: TextStyle(color: _luxGold, fontSize: 7, fontWeight: FontWeight.w900, letterSpacing: 0.9)),
          const SizedBox(height: 4),
          Container(
            height: 38,
            decoration: BoxDecoration(
              color: _luxIvory,
              border: Border.all(color: _luxGold.withOpacity(0.65)),
              borderRadius: BorderRadius.circular(2),
            ),
            child: previewSignature(points, height: 38, color: const Color(0xFF1A1208)),
          ),
        ],
      );

  Widget royalSeal() => Container(
        width: 52,
        height: 52,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(color: _luxGold, width: 2.5),
          gradient: RadialGradient(
            colors: [_luxGold.withOpacity(0.25), Colors.black.withOpacity(0.65)],
          ),
          boxShadow: [BoxShadow(color: _luxGold.withOpacity(0.3), blurRadius: 8)],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.verified_rounded, color: _luxGoldLight, size: 18),
            Text('OFFICIAL', style: TextStyle(color: _luxGold, fontSize: 5, fontWeight: FontWeight.w900, letterSpacing: 0.6)),
            Text('SEAL', style: TextStyle(color: _luxGold.withOpacity(0.7), fontSize: 4, fontWeight: FontWeight.w800, letterSpacing: 0.5)),
          ],
        ),
      );

  Widget bottomBar() => Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          prestigeStrip(),
          goldRule(pad: 6),
          luxeTable(),
          const SizedBox(height: 8),
          totalPlaque(),
          const SizedBox(height: 8),
          if (data.paymentInfo.trim().isNotEmpty) paymentHonorBlock(),
          if (data.paymentInfo.trim().isNotEmpty) const SizedBox(height: 8),
          sigRow(),
          const SizedBox(height: 10),
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              royalSeal(),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      biz,
                      style: TextStyle(color: _luxGoldLight, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 1.4),
                    ),
                    const SizedBox(height: 2),
                    Text('$docLabel #$invNo · Issued $issued · Valid until $due', style: TextStyle(color: _luxIvory.withOpacity(0.58), fontSize: 8)),
                    Text(docBinding, style: TextStyle(color: _luxIvory.withOpacity(0.42), fontSize: 7, fontStyle: FontStyle.italic)),
                  ],
                ),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text('POWERED BY NGMY', style: TextStyle(color: _luxGold.withOpacity(0.72), fontSize: 7, letterSpacing: 1.4, fontWeight: FontWeight.w900)),
                  Text(docSuite, style: TextStyle(color: _luxIvory.withOpacity(0.35), fontSize: 6, letterSpacing: 0.8)),
                ],
              ),
            ],
          ),
          const SizedBox(height: 8),
          Container(
            height: 3,
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [_luxGoldDark, _luxGold, _luxGoldLight, _luxGold, _luxGoldDark]),
            ),
          ),
        ],
      );

  Widget prestigeStrip() => Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
        decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.38),
          border: Border.all(color: _luxGold.withOpacity(0.4)),
        ),
        child: Row(
          children: [
            Icon(Icons.account_balance_rounded, color: _luxGold, size: 14),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                'Prepared exclusively for $client',
                style: TextStyle(color: _luxIvory.withOpacity(0.82), fontSize: 9, fontWeight: FontWeight.w700, letterSpacing: 0.4),
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
              decoration: BoxDecoration(
                border: Border.all(color: _luxGold.withOpacity(0.65)),
                color: accent.withOpacity(0.15),
              ),
              child: Text('${isEstimate ? 'EST' : 'INV'}-$invNo', style: TextStyle(color: _luxGoldLight, fontSize: 8, fontWeight: FontWeight.w900, letterSpacing: 1)),
            ),
          ],
        ),
      );

  Widget paymentHonorBlock() => Container(
        width: double.infinity,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [accent.withOpacity(0.08), Colors.black.withOpacity(0.35)],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          border: Border(left: BorderSide(color: _luxGold, width: 3)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('PAYMENT & TERMS', style: TextStyle(color: _luxGold, fontSize: 7, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
            const SizedBox(height: 4),
            Text(data.paymentInfo.trim(), style: TextStyle(color: _luxIvory.withOpacity(0.78), fontSize: 9, height: 1.35)),
          ],
        ),
      );
}

class _NgmyEssentialLuxuryInvoice extends StatelessWidget {
  final NgmyInvoicePreviewData data;
  final NgmyInvoiceTemplate template;

  const _NgmyEssentialLuxuryInvoice({required this.data, required this.template});

  @override
  Widget build(BuildContext context) {
    final c = _EssentialLuxuryCtx(data, template);
    return switch (template.layout) {
      NgmyInvoiceLayout.essentialHerald => _herald(c),
      NgmyInvoiceLayout.essentialBulletin => _bulletin(c),
      NgmyInvoiceLayout.essentialChronicle => _chronicle(c),
      NgmyInvoiceLayout.essentialGazette => _gazette(c),
      NgmyInvoiceLayout.essentialWire => _wire(c),
      NgmyInvoiceLayout.essentialFlash => _flash(c),
      NgmyInvoiceLayout.essentialDispatch => _dispatch(c),
      NgmyInvoiceLayout.essentialRose => _rose(c),
      NgmyInvoiceLayout.essentialMidnight => _midnight(c),
      _ => _broadcast(c),
    };
  }

  /// 1 Crimson — Imperial decree broadcast.
  Widget _broadcast(_EssentialLuxuryCtx c) {
    return c.royalShell(
      showCrownBand: false,
      topBand: Container(
        padding: const EdgeInsets.symmetric(vertical: 8),
        decoration: BoxDecoration(
          gradient: LinearGradient(colors: [c.accent, c.accent2]),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.campaign_rounded, color: Colors.white, size: 14),
            SizedBox(width: 6),
            Text('IMPERIAL INVOICE BULLETIN', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 2)),
          ],
        ),
      ),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                flex: 3,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    c.royalTitle(c.biz, size: 16),
                    c.subtitle('BY APPOINTMENT TO DISTINGUISHED CLIENTELE'),
                    const SizedBox(height: 10),
                    Text(c.headline.toUpperCase(), style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w900, fontSize: 15, height: 1.12)),
                    const SizedBox(height: 6),
                    Text(c.summary, style: TextStyle(color: _luxIvory.withOpacity(0.78), fontSize: 10, height: 1.35)),
                    const SizedBox(height: 8),
                    _detailLine(Icons.person_outline_rounded, 'Honored Client: ${c.client}'),
                    if (c.data.clientEmail.isNotEmpty) _detailLine(Icons.mail_outline_rounded, c.data.clientEmail),
                  ],
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                flex: 2,
                child: Column(
                  children: [
                    c.photo(size: 98),
                    const SizedBox(height: 8),
                    _quotePanel(c),
                  ],
                ),
              ),
            ],
          ),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 2 Gold — Royal herald crest.
  Widget _herald(_EssentialLuxuryCtx c) {
    return c.royalShell(
      overlay: _CrestPainter(c.accent.withOpacity(0.08)),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.shield_moon_rounded, color: _luxGold, size: 32),
          const SizedBox(height: 6),
          c.photo(size: 86),
          const SizedBox(height: 8),
          c.royalTitle(c.isEstimate ? 'GOLD HERALD ESTIMATE' : 'ROYAL HERALD', size: 18),
          Text(c.biz, style: TextStyle(color: _luxGoldLight, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 2)),
          c.goldRule(),
          Row(
            children: [
              c.metaChip('CLIENT', c.client),
              const SizedBox(width: 6),
              c.metaChip(c.docLabel, '#${c.invNo}'),
              const SizedBox(width: 6),
              c.metaChip('DUE', c.due),
            ],
          ),
          const SizedBox(height: 10),
          Text(c.headline, textAlign: TextAlign.center, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w700, fontSize: 13)),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 3 Sapphire — Presidential letterhead.
  Widget _bulletin(_EssentialLuxuryCtx c) {
    return c.royalShell(
      body: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.black.withOpacity(0.4),
              border: Border(bottom: BorderSide(color: _luxGold, width: 2)),
            ),
            child: Row(
              children: [
                c.photo(size: 68, shape: BoxShape.rectangle, radius: BorderRadius.circular(4)),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      c.royalTitle('PRESIDENTIAL OFFICE', size: 14),
                      Text(c.biz, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w800, fontSize: 11)),
                      Text('Executive Invoice · #${c.invNo}', style: TextStyle(color: c.accent, fontSize: 9, fontWeight: FontWeight.w700)),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 10),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(10),
            color: c.accent.withOpacity(0.12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('TO: ${c.client}', style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w900, fontSize: 12)),
                Text(c.summary, style: TextStyle(color: _luxIvory.withOpacity(0.75), fontSize: 10, height: 1.35)),
              ],
            ),
          ),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 4 Emerald — Royal chronicle ledger.
  Widget _chronicle(_EssentialLuxuryCtx c) {
    return c.royalShell(
      body: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(child: c.royalTitle(c.isEstimate ? 'EMERALD CHRONICLE ESTIMATE' : 'THE CHRONICLE', size: 17)),
              c.photo(size: 54),
            ],
          ),
          Text(c.biz, style: TextStyle(color: _luxIvory.withOpacity(0.65), fontSize: 9, letterSpacing: 1.2)),
          const SizedBox(height: 8),
          Row(children: [c.metaChip('CLIENT', c.client), const SizedBox(width: 6), c.metaChip('ISSUED', c.issued), const SizedBox(width: 6), c.metaChip('TOTAL', '\$${c.total}')]),
          const SizedBox(height: 10),
          IntrinsicHeight(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Expanded(child: Text(c.summary, style: TextStyle(color: _luxIvory.withOpacity(0.8), fontSize: 10, height: 1.4))),
                Container(width: 1, margin: const EdgeInsets.symmetric(horizontal: 10), color: _luxGold.withOpacity(0.4)),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(c.headline, style: TextStyle(color: c.accent, fontWeight: FontWeight.w800, fontSize: 12)),
                      Text('Due ${c.due}', style: TextStyle(color: _luxIvory.withOpacity(0.55), fontSize: 9)),
                    ],
                  ),
                ),
              ],
            ),
          ),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 5 Violet — Luxury gazette cover.
  Widget _gazette(_EssentialLuxuryCtx c) {
    final bytes = c.data.providerPhotoBytes;
    return c.royalShell(
      body: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: SizedBox(
              height: 118,
              child: Stack(
                fit: StackFit.expand,
                children: [
                  if (bytes != null && bytes.isNotEmpty)
                    Image.memory(bytes, fit: BoxFit.cover)
                  else
                    Container(
                      decoration: BoxDecoration(gradient: LinearGradient(colors: [c.accent2, c.accent.withOpacity(0.4)])),
                      child: Icon(Icons.photo_camera_front_outlined, size: 36, color: _luxGold.withOpacity(0.35)),
                    ),
                  Container(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [Colors.transparent, Colors.black.withOpacity(0.88)],
                      ),
                    ),
                  ),
                  Positioned(
                    left: 12,
                    bottom: 10,
                    right: 12,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        c.royalTitle('GAZETTE', size: 22),
                        Text(c.biz, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w800, fontSize: 11)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 10),
          Text('Prepared for ${c.client}', style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w800, fontSize: 12)),
          Text(c.headline, style: TextStyle(color: c.accent, fontWeight: FontWeight.w700, fontSize: 11)),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 6 Platinum — Executive wire ledger (luxury, not terminal).
  Widget _wire(_EssentialLuxuryCtx c) {
    return c.royalShell(
      body: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(width: 10, height: 10, decoration: BoxDecoration(color: _luxGold, shape: BoxShape.circle)),
              const SizedBox(width: 8),
              Text('PLATINUM EXECUTIVE WIRE', style: TextStyle(color: _luxGold, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.5)),
            ],
          ),
          c.goldRule(pad: 6),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              c.photo(size: 64, shape: BoxShape.rectangle),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(c.biz, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w900, fontSize: 12)),
                    _ledgerLine('Reference', 'INV-${c.invNo}'),
                    _ledgerLine('Beneficiary', c.client),
                    _ledgerLine('Settlement', '\$${c.total} USD'),
                    _ledgerLine('Maturity', c.due),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(c.headline, style: TextStyle(color: c.accent, fontWeight: FontWeight.w700, fontSize: 11)),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 7 Amber — Imperial flash decree.
  Widget _flash(_EssentialLuxuryCtx c) {
    return c.royalShell(
      overlay: _DiagonalFlashPainter(c.accent.withOpacity(0.22)),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Align(
            alignment: Alignment.centerRight,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: [c.accent, c.accent2]),
                border: Border.all(color: _luxGold, width: 1),
              ),
              child: Text(c.isEstimate ? 'ESTIMATE · VALID 30 DAYS' : 'URGENT ROYAL NOTICE', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 8, letterSpacing: 1.3)),
            ),
          ),
          const SizedBox(height: 12),
          c.royalTitle(c.isEstimate ? 'AMBER FLASH ESTIMATE' : c.biz, size: 17),
          if (!c.isEstimate) Text(c.biz, style: TextStyle(color: _luxGoldLight.withOpacity(0.85), fontWeight: FontWeight.w700, fontSize: 10, letterSpacing: 1)),
          Text(c.headline.toUpperCase(), style: TextStyle(color: _luxGoldLight, fontWeight: FontWeight.w800, fontSize: 13, letterSpacing: 0.8)),
          const SizedBox(height: 10),
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              c.photo(size: 96),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(c.client, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w900, fontSize: 13)),
                    Text('${c.docLabel} #${c.invNo} · Valid until ${c.due}', style: TextStyle(color: _luxIvory.withOpacity(0.6), fontSize: 9)),
                    const SizedBox(height: 6),
                    Text(c.summary, style: TextStyle(color: _luxIvory.withOpacity(0.72), fontSize: 9, height: 1.35, fontStyle: FontStyle.italic)),
                  ],
                ),
              ),
            ],
          ),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 8 Ocean — Maritime royal dispatch.
  Widget _dispatch(_EssentialLuxuryCtx c) {
    return c.royalShell(
      showCrownBand: false,
      topBand: ClipPath(
        clipper: _WaveTopClipper(),
        child: Container(
          height: 56,
          width: double.infinity,
          alignment: Alignment.center,
          decoration: BoxDecoration(gradient: LinearGradient(colors: [c.accent, c.accent2])),
          child: const Text('ROYAL DISPATCH', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 3)),
        ),
      ),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(c.biz, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w900, fontSize: 12)),
                    _detailLine(Icons.anchor_rounded, 'Manifest #${c.invNo}'),
                    _detailLine(Icons.person_rounded, 'Commander: ${c.client}'),
                    _detailLine(Icons.schedule_rounded, '${c.issued} → ${c.due}'),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.all(5),
                decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: _luxGold, width: 2)),
                child: Container(
                  padding: const EdgeInsets.all(4),
                  decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: c.accent, width: 2)),
                  child: c.photo(size: 70),
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(c.summary, style: TextStyle(color: _luxIvory.withOpacity(0.78), fontSize: 10, fontStyle: FontStyle.italic, height: 1.35)),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 9 Rose — Victorian royal invitation.
  Widget _rose(_EssentialLuxuryCtx c) {
    return c.royalShell(
      overlay: _OrnateCornerPainter(_luxGold.withOpacity(0.75)),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text('✦  ✦  ✦', style: TextStyle(color: _luxGold, fontSize: 12, letterSpacing: 6)),
          c.royalTitle('ROYAL INVITATION TO PAY', size: 15),
          Text(c.biz, style: TextStyle(color: _luxIvory.withOpacity(0.8), fontSize: 10, letterSpacing: 2, fontStyle: FontStyle.italic)),
          const SizedBox(height: 10),
          c.photo(size: 78, shape: BoxShape.rectangle, radius: BorderRadius.circular(40)),
          const SizedBox(height: 10),
          Text('Dear ${c.client},', style: TextStyle(color: _luxIvory.withOpacity(0.9), fontSize: 11, fontStyle: FontStyle.italic)),
          const SizedBox(height: 6),
          Text(c.headline, textAlign: TextAlign.center, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w600, fontSize: 12)),
          const SizedBox(height: 6),
          Text(
            c.quote.length > 110 ? '${c.quote.substring(0, 107)}...' : c.quote,
            textAlign: TextAlign.center,
            style: TextStyle(color: _luxIvory.withOpacity(0.62), fontSize: 9, fontStyle: FontStyle.italic, height: 1.4),
          ),
          c.bottomBar(),
        ],
      ),
    );
  }

  /// 10 Midnight News — full royal layout, circular portrait, gold & silver night desk.
  Widget _midnight(_EssentialLuxuryCtx c) {
    return c.royalShell(
      showCrownBand: false,
      topBand: Container(
        padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 12),
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            colors: [Color(0xFF050508), Color(0xFF1E293B), Color(0xFF050508)],
          ),
          border: Border(bottom: BorderSide(color: _luxGold.withOpacity(0.55), width: 1.2)),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.nightlight_round, color: _luxGold.withOpacity(0.9), size: 14),
            const SizedBox(width: 8),
            c.royalTitle('MIDNIGHT NEWS', size: 11),
            const SizedBox(width: 8),
            Icon(Icons.nightlight_round, color: _luxGold.withOpacity(0.9), size: 14),
          ],
        ),
      ),
      body: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            c.isEstimate ? 'CERTIFIED NIGHT DESK ESTIMATE' : 'OFFICIAL MIDNIGHT EDITION',
            textAlign: TextAlign.center,
            style: TextStyle(color: _luxIvory.withOpacity(0.55), fontSize: 8, letterSpacing: 1.8, fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          c.royalTitle(c.biz, size: 17),
          c.subtitle('EXECUTIVE NIGHT BULLETIN · ${c.docLabel} #${c.invNo}'),
          c.goldRule(),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              c.photo(size: 96),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(c.client, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w900, fontSize: 13)),
                    if (c.data.clientEmail.isNotEmpty)
                      Text(c.data.clientEmail, style: TextStyle(color: _luxIvory.withOpacity(0.55), fontSize: 8)),
                    const SizedBox(height: 8),
                    Text(c.headline, style: const TextStyle(color: _luxIvory, fontWeight: FontWeight.w700, fontSize: 12, height: 1.2)),
                    const SizedBox(height: 6),
                    Text(c.summary, style: TextStyle(color: _luxIvory.withOpacity(0.72), fontSize: 9, height: 1.35)),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              c.metaChip('ISSUED', c.issued),
              const SizedBox(width: 6),
              c.metaChip('DUE', c.due),
            ],
          ),
          c.bottomBar(),
        ],
      ),
    );
  }

  Widget _detailLine(IconData icon, String text) => Padding(
        padding: const EdgeInsets.only(bottom: 4),
        child: Row(
          children: [
            Icon(icon, size: 12, color: _luxGold),
            const SizedBox(width: 6),
            Expanded(child: Text(text, style: TextStyle(color: _luxIvory.withOpacity(0.88), fontSize: 9, height: 1.2))),
          ],
        ),
      );

  Widget _ledgerLine(String k, String v) => Padding(
        padding: const EdgeInsets.only(bottom: 3),
        child: Row(
          children: [
            SizedBox(width: 72, child: Text(k.toUpperCase(), style: TextStyle(color: _luxGold.withOpacity(0.75), fontSize: 7, letterSpacing: 0.8))),
            Expanded(child: Text(v, style: const TextStyle(color: _luxIvory, fontSize: 9, fontWeight: FontWeight.w700))),
          ],
        ),
      );

  Widget _quotePanel(_EssentialLuxuryCtx c) => Container(
        width: double.infinity,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.35),
          border: Border.all(color: _luxGold.withOpacity(0.55)),
          borderRadius: BorderRadius.circular(4),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('"', style: TextStyle(color: _luxGold, fontSize: 26, height: 0.7, fontWeight: FontWeight.w900)),
            Text(
              c.quote.length > 85 ? '${c.quote.substring(0, 82)}...' : c.quote,
              style: TextStyle(color: _luxIvory.withOpacity(0.88), fontSize: 8, fontStyle: FontStyle.italic, height: 1.35),
            ),
            const SizedBox(height: 4),
            Text('— ${c.client}', style: TextStyle(color: _luxGold, fontSize: 7, fontWeight: FontWeight.w800)),
          ],
        ),
      );
}

class _DamaskPainter extends CustomPainter {
  _DamaskPainter(this.c1, this.c2);
  final Color c1;
  final Color c2;

  @override
  void paint(Canvas canvas, Size size) {
    final p1 = Paint()..color = c1;
    final p2 = Paint()..color = c2;
    for (var x = 0.0; x < size.width; x += 24) {
      for (var y = 0.0; y < size.height; y += 24) {
        canvas.drawCircle(Offset(x + 6, y + 6), 1.2, (x + y).toInt() % 48 == 0 ? p2 : p1);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DamaskPainter oldDelegate) => false;
}

class _CrestPainter extends CustomPainter {
  _CrestPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..style = PaintingStyle.stroke..strokeWidth = 1;
    canvas.drawCircle(Offset(size.width / 2, size.height * 0.22), 80, paint);
    canvas.drawCircle(Offset(size.width / 2, size.height * 0.22), 60, paint);
  }

  @override
  bool shouldRepaint(covariant _CrestPainter oldDelegate) => false;
}

class _DiagonalFlashPainter extends CustomPainter {
  _DiagonalFlashPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    canvas.drawPath(
      Path()
        ..moveTo(0, size.height * 0.28)
        ..lineTo(size.width, 0)
        ..lineTo(size.width, size.height * 0.42)
        ..lineTo(0, size.height * 0.72)
        ..close(),
      paint,
    );
  }

  @override
  bool shouldRepaint(covariant _DiagonalFlashPainter oldDelegate) => oldDelegate.color != color;
}

class _WaveTopClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    final path = Path()..lineTo(0, size.height - 10);
    path.quadraticBezierTo(size.width * 0.25, size.height, size.width * 0.5, size.height - 8);
    path.quadraticBezierTo(size.width * 0.75, size.height - 14, size.width, size.height - 4);
    path.lineTo(size.width, 0);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

class _OrnateCornerPainter extends CustomPainter {
  _OrnateCornerPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..style = PaintingStyle.stroke..strokeWidth = 2;
    const len = 36.0;
    for (final origin in [Offset.zero, Offset(size.width, 0), Offset(0, size.height), Offset(size.width, size.height)]) {
      final sx = origin.dx == 0 ? 1.0 : -1.0;
      final sy = origin.dy == 0 ? 1.0 : -1.0;
      canvas.drawLine(origin, origin + Offset(len * sx, 0), paint);
      canvas.drawLine(origin, origin + Offset(0, len * sy), paint);
      canvas.drawLine(origin, origin + Offset(len * sx * 0.7, len * sy * 0.7), paint);
    }
  }

  @override
  bool shouldRepaint(covariant _OrnateCornerPainter oldDelegate) => oldDelegate.color != color;
}

class _CornerFlourishPainter extends CustomPainter {
  _CornerFlourishPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.6;
    const len = 48.0;
    const inset = 6.0;
    final corners = [
      Offset(inset, inset),
      Offset(size.width - inset, inset),
      Offset(inset, size.height - inset),
      Offset(size.width - inset, size.height - inset),
    ];
    for (final origin in corners) {
      final sx = origin.dx < size.width / 2 ? 1.0 : -1.0;
      final sy = origin.dy < size.height / 2 ? 1.0 : -1.0;
      canvas.drawLine(origin, origin + Offset(len * sx, 0), paint);
      canvas.drawLine(origin, origin + Offset(0, len * sy), paint);
      final arcPaint = Paint()
        ..color = color
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.2;
      canvas.drawArc(
        Rect.fromCircle(center: origin + Offset(12 * sx, 12 * sy), radius: 10),
        sx > 0 ? (sy > 0 ? 3.14 : 1.57) : (sy > 0 ? 4.71 : 0),
        1.57,
        false,
        arcPaint,
      );
    }
  }

  @override
  bool shouldRepaint(covariant _CornerFlourishPainter oldDelegate) => oldDelegate.color != color;
}

class _LinenPainter extends CustomPainter {
  _LinenPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..strokeWidth = 0.5;
    for (var y = 0.0; y < size.height; y += 5) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
  }

  @override
  bool shouldRepaint(covariant _LinenPainter oldDelegate) => false;
}
