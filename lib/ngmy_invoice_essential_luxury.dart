part of 'ngmy_invoice_templates.dart';

/// Shared invoice fields + reusable blocks for Essential Luxury variants.
class _EssentialLuxuryCtx {
  _EssentialLuxuryCtx(this.data, this.template);

  final NgmyInvoicePreviewData data;
  final NgmyInvoiceTemplate template;

  NgmyInvoiceTemplate get t => template;
  String get biz => data.businessName.isEmpty ? 'YOUR BRAND' : data.businessName.toUpperCase();
  String get invNo => data.invoiceNo.isEmpty ? '1' : data.invoiceNo;
  String get issued => data.issuedDate.isEmpty ? '--/--/----' : data.issuedDate;
  String get due => data.dueDate.isEmpty ? '—' : data.dueDate;
  String get client => data.clientName.isEmpty ? 'Client Name' : data.clientName;
  String get item => data.itemName.isEmpty ? 'Service' : data.itemName;
  String get qty => data.itemQty.isEmpty ? '1' : data.itemQty;
  String get total => data.subtotal.toStringAsFixed(2);
  String get headline => data.itemName.isEmpty ? 'Professional Services Invoice' : data.itemName;
  String get summary => data.itemDesc.trim().isNotEmpty
      ? data.itemDesc.trim()
      : (data.paymentInfo.trim().isNotEmpty ? data.paymentInfo.trim() : 'Thank you for choosing our services.');
  String get quote => data.paymentInfo.trim().isNotEmpty
      ? data.paymentInfo.trim()
      : 'We appreciate your business and look forward to serving you again.';

  BoxDecoration shellDecoration({BorderRadius? radius}) => BoxDecoration(
        gradient: LinearGradient(colors: t.gradient, begin: Alignment.topLeft, end: Alignment.bottomRight),
        borderRadius: radius ?? BorderRadius.circular(14),
        border: Border.all(color: t.accent.withOpacity(0.35)),
        boxShadow: [BoxShadow(color: t.accent.withOpacity(0.22), blurRadius: 18, spreadRadius: 1)],
      );

  Widget poweredBy() => Center(
        child: Text(
          'POWERED BY: NGMY',
          style: TextStyle(color: Colors.white.withOpacity(0.5), letterSpacing: 1.4, fontWeight: FontWeight.w800, fontSize: 8),
        ),
      );

  Widget photoCircle({double size = 100, double border = 3}) => _photoFrame(
        width: size,
        height: size,
        shape: BoxShape.circle,
        borderWidth: border,
      );

  Widget photoSquare({double size = 96}) => _photoFrame(
        width: size,
        height: size,
        shape: BoxShape.rectangle,
        borderRadius: BorderRadius.circular(10),
        borderWidth: 2,
      );

  Widget photoOval({double w = 88, double h = 112}) => _photoFrame(
        width: w,
        height: h,
        shape: BoxShape.rectangle,
        borderRadius: BorderRadius.circular(999),
        borderWidth: 2,
      );

  Widget photoHex({double size = 96}) => ClipPath(
        clipper: _HexClipper(),
        child: _photoFrame(width: size, height: size, shape: BoxShape.rectangle, borderWidth: 0, innerOnly: true),
      );

  Widget _photoFrame({
    required double width,
    required double height,
    required BoxShape shape,
    BorderRadius? borderRadius,
    double borderWidth = 3,
    bool innerOnly = false,
  }) {
    final child = _photoImage(width, height);
    if (innerOnly) {
      return SizedBox(width: width, height: height, child: child);
    }
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        shape: shape,
        borderRadius: shape == BoxShape.rectangle ? borderRadius : null,
        border: Border.all(color: t.accent, width: borderWidth),
        boxShadow: [BoxShadow(color: t.accent.withOpacity(0.3), blurRadius: 10)],
      ),
      child: ClipRRect(
        borderRadius: shape == BoxShape.circle
            ? BorderRadius.circular(width)
            : (borderRadius ?? BorderRadius.circular(8)),
        child: child,
      ),
    );
  }

  Widget _photoImage(double w, double h) {
    final bytes = data.providerPhotoBytes;
    if (bytes != null && bytes.isNotEmpty) {
      return Image.memory(bytes, fit: BoxFit.cover, width: w, height: h);
    }
    return Container(
      color: const Color(0xFF141414),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.person_rounded, size: w * 0.35, color: t.accent.withOpacity(0.65)),
          const SizedBox(height: 4),
          Text('YOUR PHOTO', style: TextStyle(color: Colors.white.withOpacity(0.4), fontSize: 7, fontWeight: FontWeight.w700)),
        ],
      ),
    );
  }

  Widget sigRow() => Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(child: _sig('PROVIDER', data.providerSignature)),
          const SizedBox(width: 8),
          Expanded(child: _sig('CLIENT', data.clientSignature)),
        ],
      );

  Widget _sig(String label, List<Offset?> points) => Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: TextStyle(color: t.accent, fontSize: 7, fontWeight: FontWeight.w800, letterSpacing: 0.8)),
          const SizedBox(height: 3),
          Container(
            height: 34,
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.96),
              borderRadius: BorderRadius.circular(4),
              border: Border.all(color: t.accent.withOpacity(0.35)),
            ),
            child: previewSignature(points, height: 34, color: const Color(0xFF0F172A)),
          ),
        ],
      );

  Widget itemTable({bool compact = false}) => Column(
        children: [
          Container(
            padding: EdgeInsets.symmetric(horizontal: 10, vertical: compact ? 5 : 7),
            decoration: BoxDecoration(
              color: t.accent.withOpacity(0.15),
              border: Border(left: BorderSide(color: t.accent, width: 3)),
            ),
            child: Row(
              children: [
                Expanded(child: Text('DESCRIPTION', style: TextStyle(color: t.accent, fontSize: 7, fontWeight: FontWeight.w900))),
                SizedBox(width: 40, child: Text('QTY', textAlign: TextAlign.center, style: TextStyle(color: t.accent, fontSize: 7, fontWeight: FontWeight.w900))),
                SizedBox(width: 52, child: Text('AMOUNT', textAlign: TextAlign.right, style: TextStyle(color: t.accent, fontSize: 7, fontWeight: FontWeight.w900))),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            child: Row(
              children: [
                Expanded(child: Text(item, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w700))),
                SizedBox(width: 40, child: Text(qty, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withOpacity(0.88), fontSize: 10))),
                SizedBox(width: 52, child: Text('\$$total', textAlign: TextAlign.right, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800))),
              ],
            ),
          ),
        ],
      );

  Widget totalBar({String? label}) => Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 14),
        decoration: BoxDecoration(
          gradient: LinearGradient(colors: [t.accent, t.accent2]),
        ),
        child: Row(
          children: [
            Text(label ?? 'TOTAL DUE', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1)),
            const Spacer(),
            Text('\$$total', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
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
    final ctx = _EssentialLuxuryCtx(data, template);
    return switch (template.layout) {
      NgmyInvoiceLayout.essentialHerald => _buildHerald(ctx),
      NgmyInvoiceLayout.essentialBulletin => _buildBulletin(ctx),
      NgmyInvoiceLayout.essentialChronicle => _buildChronicle(ctx),
      NgmyInvoiceLayout.essentialGazette => _buildGazette(ctx),
      NgmyInvoiceLayout.essentialWire => _buildWire(ctx),
      NgmyInvoiceLayout.essentialFlash => _buildFlash(ctx),
      NgmyInvoiceLayout.essentialDispatch => _buildDispatch(ctx),
      NgmyInvoiceLayout.essentialRose => _buildRose(ctx),
      NgmyInvoiceLayout.essentialMidnight => _buildMidnight(ctx),
      _ => _buildBroadcast(ctx),
    };
  }

  /// 1 — NGMY NEWS broadcast (photo right, quote box, key details).
  Widget _buildBroadcast(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 620),
      decoration: c.shellDecoration(),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: Stack(
          children: [
            Positioned(right: -30, top: 60, child: Icon(Icons.public, size: 160, color: Colors.white.withOpacity(0.04))),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(child: Text(c.biz, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
                      _dotGrid(),
                    ],
                  ),
                  Text('INVOICE · STAY PROFESSIONAL. STAY AHEAD.', style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 7)),
                  const SizedBox(height: 12),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        flex: 3,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            _badge(c, 'BREAKING INVOICE'),
                            const SizedBox(height: 8),
                            Text(c.headline.toUpperCase(), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17, height: 1.1)),
                            const SizedBox(height: 6),
                            Text(c.summary, style: TextStyle(color: Colors.white.withOpacity(0.82), fontSize: 10, height: 1.35)),
                            const SizedBox(height: 10),
                            _bullet(c, Icons.person_outline, 'Bill To: ${c.client}'),
                            _bullet(c, Icons.receipt_long, 'Invoice #${c.invNo} · \$${c.total}'),
                            Text('Issued ${c.issued} · Due ${c.due}', style: TextStyle(color: Colors.white54, fontSize: 9)),
                          ],
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        flex: 2,
                        child: Column(
                          children: [
                            c.photoCircle(size: 104),
                            const SizedBox(height: 8),
                            _quoteBox(c),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  c.itemTable(),
                  const SizedBox(height: 8),
                  c.sigRow(),
                  const SizedBox(height: 8),
                  _triFooter(c),
                  const SizedBox(height: 6),
                  c.poweredBy(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// 2 — Heraldic crest: centered hex photo, symmetrical columns.
  Widget _buildHerald(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 640),
      decoration: c.shellDecoration(),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: Column(
          children: [
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 14),
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: [c.t.accent.withOpacity(0.35), Colors.transparent]),
                border: Border(bottom: BorderSide(color: c.t.accent, width: 2)),
              ),
              child: Column(
                children: [
                  Icon(Icons.shield_rounded, size: 28, color: c.t.accent),
                  const SizedBox(height: 6),
                  c.photoHex(size: 88),
                  const SizedBox(height: 8),
                  Text(c.biz, style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 14, letterSpacing: 2)),
                  Text('OFFICIAL INVOICE HERALD', style: TextStyle(color: Colors.white54, fontSize: 8, letterSpacing: 1.2)),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                children: [
                  Row(
                    children: [
                      Expanded(child: _crestPanel(c, 'CLIENT', c.client, c.data.clientEmail)),
                      const SizedBox(width: 10),
                      Expanded(child: _crestPanel(c, 'INVOICE', '#${c.invNo}', 'Due ${c.due}')),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Text(c.headline, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
                  const SizedBox(height: 8),
                  c.itemTable(compact: true),
                  const SizedBox(height: 10),
                  c.totalBar(label: 'ROYAL TOTAL'),
                  const SizedBox(height: 8),
                  c.sigRow(),
                  const SizedBox(height: 6),
                  c.poweredBy(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// 3 — Bulletin: bold left stripe, photo top-left square, stacked content.
  Widget _buildBulletin(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 620),
      decoration: c.shellDecoration(radius: BorderRadius.circular(4)),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(4),
        child: IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(width: 8, color: c.t.accent),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(14, 14, 14, 12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          c.photoSquare(size: 78),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('BULLETIN', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 22, letterSpacing: 3, height: 1)),
                                Text(c.biz, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11)),
                                Text('#${c.invNo} · ${c.issued}', style: TextStyle(color: Colors.white54, fontSize: 9)),
                              ],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 14),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.all(10),
                        color: c.t.accent.withOpacity(0.12),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('TO: ${c.client}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                            if (c.data.clientEmail.isNotEmpty) Text(c.data.clientEmail, style: TextStyle(color: Colors.white70, fontSize: 9)),
                          ],
                        ),
                      ),
                      const SizedBox(height: 10),
                      Text(c.headline, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14)),
                      const SizedBox(height: 6),
                      Text(c.summary, style: TextStyle(color: Colors.white.withOpacity(0.75), fontSize: 10, height: 1.4)),
                      const SizedBox(height: 10),
                      c.itemTable(),
                      const SizedBox(height: 8),
                      Align(alignment: Alignment.centerRight, child: Text('\$$c.total', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 22))),
                      const SizedBox(height: 8),
                      c.sigRow(),
                      const SizedBox(height: 6),
                      c.poweredBy(),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  /// 4 — Chronicle: three stat cards + newspaper columns.
  Widget _buildChronicle(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 630),
      decoration: c.shellDecoration(),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: Padding(
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Text('THE CHRONICLE', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 1.5)),
                  const Spacer(),
                  c.photoCircle(size: 56, border: 2),
                ],
              ),
              Text(c.biz, style: TextStyle(color: Colors.white.withOpacity(0.6), fontSize: 9)),
              const SizedBox(height: 12),
              Row(
                children: [
                  Expanded(child: _statCard(c, 'CLIENT', c.client)),
                  const SizedBox(width: 6),
                  Expanded(child: _statCard(c, 'DUE DATE', c.due)),
                  const SizedBox(width: 6),
                  Expanded(child: _statCard(c, 'TOTAL', '\$$c.total')),
                ],
              ),
              const SizedBox(height: 12),
              Container(
                height: 1,
                color: c.t.accent.withOpacity(0.4),
                margin: const EdgeInsets.symmetric(vertical: 8),
              ),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: Text(c.summary, style: TextStyle(color: Colors.white.withOpacity(0.8), fontSize: 9, height: 1.45)),
                  ),
                  Container(width: 1, height: 80, color: Colors.white24, margin: const EdgeInsets.symmetric(horizontal: 10)),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(c.headline, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                        const SizedBox(height: 6),
                        Text('Invoice #${c.invNo}', style: TextStyle(color: c.t.accent, fontSize: 9)),
                        Text('Issued ${c.issued}', style: TextStyle(color: Colors.white54, fontSize: 8)),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              c.itemTable(compact: true),
              const SizedBox(height: 8),
              c.sigRow(),
              const SizedBox(height: 6),
              c.poweredBy(),
            ],
          ),
        ),
      ),
    );
  }

  /// 5 — Gazette: full-width photo banner header, card body.
  Widget _buildGazette(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 650),
      decoration: c.shellDecoration(),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Stack(
              alignment: Alignment.bottomLeft,
              children: [
                SizedBox(
                  height: 130,
                  width: double.infinity,
                  child: c.data.providerPhotoBytes != null && c.data.providerPhotoBytes!.isNotEmpty
                      ? Image.memory(c.data.providerPhotoBytes!, fit: BoxFit.cover, width: double.infinity, height: 130)
                      : Container(
                          color: c.t.accent2,
                          child: Center(child: Icon(Icons.photo_camera_front_outlined, size: 40, color: Colors.white24)),
                        ),
                ),
                Container(
                  height: 130,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: [Colors.transparent, c.t.gradient.first.withOpacity(0.95)],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(14),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('GAZETTE', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 24, letterSpacing: 4)),
                      Text(c.biz, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                    ],
                  ),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.06),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: c.t.accent.withOpacity(0.25)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Bill To: ${c.client}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                        Text('Invoice #${c.invNo} · ${c.issued}', style: TextStyle(color: Colors.white60, fontSize: 9)),
                        const SizedBox(height: 8),
                        Text(c.headline, style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w700, fontSize: 12)),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),
                  c.itemTable(),
                  const SizedBox(height: 8),
                  c.totalBar(),
                  const SizedBox(height: 8),
                  c.sigRow(),
                  const SizedBox(height: 6),
                  c.poweredBy(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// 6 — Wire: dense ticker / terminal style, inline small photo.
  Widget _buildWire(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 580),
      decoration: BoxDecoration(
        color: const Color(0xFF0A0C10),
        borderRadius: BorderRadius.circular(6),
        border: Border.all(color: c.t.accent.withOpacity(0.5)),
      ),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(width: 8, height: 8, decoration: BoxDecoration(color: c.t.accent, shape: BoxShape.circle)),
                const SizedBox(width: 6),
                Text('PLATINUM WIRE · LIVE INVOICE', style: TextStyle(color: c.t.accent, fontSize: 8, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
                const Spacer(),
                Text('${DateTime.now().hour}:${DateTime.now().minute.toString().padLeft(2, '0')}', style: TextStyle(color: Colors.white38, fontSize: 8)),
              ],
            ),
            const SizedBox(height: 10),
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                c.photoSquare(size: 52),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(c.biz, style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w800, fontSize: 11, fontFamily: 'monospace')),
                      Text('INV_${c.invNo}  CLIENT=${c.client.toUpperCase()}', style: const TextStyle(color: Colors.white70, fontSize: 8, fontFamily: 'monospace')),
                      Text('AMT=\$$c.total  DUE=${c.due}', style: TextStyle(color: c.t.accent.withOpacity(0.9), fontSize: 9, fontFamily: 'monospace', fontWeight: FontWeight.w700)),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10),
            ...List.generate(4, (i) {
              final lines = ['▸ ${c.headline}', '▸ Issued ${c.issued}', '▸ ${c.summary}', '▸ Status: AWAITING PAYMENT'];
              return Padding(
                padding: const EdgeInsets.only(bottom: 3),
                child: Text(lines[i], style: TextStyle(color: Colors.white.withOpacity(0.75), fontSize: 9, fontFamily: 'monospace', height: 1.3)),
              );
            }),
            const SizedBox(height: 8),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              color: c.t.accent.withOpacity(0.1),
              child: Row(
                children: [
                  Expanded(child: Text(c.item, style: const TextStyle(color: Colors.white, fontSize: 9))),
                  Text('x$c.qty', style: TextStyle(color: Colors.white54, fontSize: 9)),
                  const SizedBox(width: 12),
                  Text('\$$c.total', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 12)),
                ],
              ),
            ),
            const SizedBox(height: 8),
            c.sigRow(),
            const SizedBox(height: 6),
            c.poweredBy(),
          ],
        ),
      ),
    );
  }

  /// 7 — Flash: diagonal split layout.
  Widget _buildFlash(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 620),
      decoration: c.shellDecoration(),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: Stack(
          children: [
            Positioned.fill(
              child: CustomPaint(painter: _DiagonalFlashPainter(c.t.accent.withOpacity(0.55))),
            ),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Align(
                    alignment: Alignment.topRight,
                    child: Transform.rotate(
                      angle: -0.08,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                        color: c.t.accent,
                        child: const Text('FLASH INVOICE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.5)),
                      ),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text(c.biz, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                  Text(c.headline.toUpperCase(), style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w800, fontSize: 14)),
                  const SizedBox(height: 16),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      c.photoCircle(size: 110, border: 4),
                      const SizedBox(width: 14),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('${c.client}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                            Text('#${c.invNo} · Due ${c.due}', style: TextStyle(color: Colors.white70, fontSize: 9)),
                            const SizedBox(height: 8),
                            Text('\$$c.total', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 28, height: 1)),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  c.itemTable(compact: true),
                  const SizedBox(height: 8),
                  c.sigRow(),
                  const SizedBox(height: 6),
                  c.poweredBy(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// 8 — Dispatch: wave header, nautical double-ring photo.
  Widget _buildDispatch(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 630),
      decoration: c.shellDecoration(),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: Column(
          children: [
            ClipPath(
              clipper: _WaveTopClipper(),
              child: Container(
                height: 72,
                width: double.infinity,
                color: c.t.accent,
                alignment: Alignment.center,
                child: Text('OCEAN DISPATCH', style: TextStyle(color: Colors.white.withOpacity(0.95), fontWeight: FontWeight.w900, fontSize: 16, letterSpacing: 3)),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(c.biz, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                            Text('Port of Invoice #${c.invNo}', style: TextStyle(color: c.t.accent, fontSize: 9)),
                            const SizedBox(height: 8),
                            Text('Captain: ${c.client}', style: TextStyle(color: Colors.white.withOpacity(0.85), fontSize: 10)),
                            Text('Sailed ${c.issued} · Arrives ${c.due}', style: TextStyle(color: Colors.white54, fontSize: 8)),
                          ],
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.all(4),
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(color: c.t.accent2, width: 3),
                        ),
                        child: Container(
                          padding: const EdgeInsets.all(3),
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            border: Border.all(color: c.t.accent, width: 2),
                          ),
                          child: c.photoCircle(size: 72, border: 0),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      border: Border.all(color: c.t.accent.withOpacity(0.4)),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Text(c.summary, style: TextStyle(color: Colors.white.withOpacity(0.8), fontSize: 10, fontStyle: FontStyle.italic)),
                  ),
                  const SizedBox(height: 10),
                  c.itemTable(),
                  const SizedBox(height: 8),
                  c.totalBar(label: 'CARGO TOTAL'),
                  const SizedBox(height: 8),
                  c.sigRow(),
                  const SizedBox(height: 6),
                  c.poweredBy(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// 9 — Rose: ornate corners, oval photo, elegant frame.
  Widget _buildRose(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 640),
      decoration: c.shellDecoration(),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: Stack(
          children: [
            Positioned.fill(child: CustomPaint(painter: _OrnateCornerPainter(c.t.accent.withOpacity(0.6)))),
            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                children: [
                  Text('✦', style: TextStyle(color: c.t.accent, fontSize: 16)),
                  Text(c.biz, style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w400, fontSize: 14, letterSpacing: 3, fontStyle: FontStyle.italic)),
                  const Text('INVOICE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w300, fontSize: 22, letterSpacing: 8)),
                  const SizedBox(height: 12),
                  c.photoOval(w: 80, h: 100),
                  const SizedBox(height: 12),
                  Text('Dear ${c.client},', style: TextStyle(color: Colors.white.withOpacity(0.9), fontSize: 11, fontStyle: FontStyle.italic)),
                  const SizedBox(height: 6),
                  Text(c.headline, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 12)),
                  const SizedBox(height: 8),
                  Text(c.quote.length > 100 ? '${c.quote.substring(0, 97)}...' : c.quote, textAlign: TextAlign.center, style: TextStyle(color: Colors.white60, fontSize: 9, fontStyle: FontStyle.italic, height: 1.4)),
                  const SizedBox(height: 12),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text('No. ${c.invNo}', style: TextStyle(color: c.t.accent, fontSize: 9)),
                      Text('  ·  ', style: TextStyle(color: Colors.white38, fontSize: 9)),
                      Text('\$$c.total', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w800, fontSize: 14)),
                    ],
                  ),
                  const SizedBox(height: 10),
                  c.itemTable(compact: true),
                  const SizedBox(height: 8),
                  c.sigRow(),
                  const SizedBox(height: 6),
                  c.poweredBy(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  /// 10 — Midnight: split panel cinematic layout.
  Widget _buildMidnight(_EssentialLuxuryCtx c) {
    return Container(
      constraints: const BoxConstraints(minHeight: 620),
      decoration: BoxDecoration(
        color: Colors.black,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: c.t.accent.withOpacity(0.5)),
        boxShadow: [BoxShadow(color: c.t.accent.withOpacity(0.2), blurRadius: 24)],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(14),
        child: IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                flex: 2,
                child: Container(
                  color: const Color(0xFF050505),
                  padding: const EdgeInsets.all(14),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('MIDNIGHT', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 20, letterSpacing: 2)),
                      Text('NEWS INVOICE', style: TextStyle(color: Colors.white38, fontSize: 8, letterSpacing: 2)),
                      const SizedBox(height: 16),
                      Center(child: c.photoCircle(size: 100)),
                      const SizedBox(height: 12),
                      Text(c.client, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                      if (c.data.clientEmail.isNotEmpty) Text(c.data.clientEmail, style: TextStyle(color: Colors.white54, fontSize: 8)),
                      const Spacer(),
                      Text('#${c.invNo}', style: TextStyle(color: c.t.accent, fontSize: 10, fontWeight: FontWeight.w700)),
                      Text('${c.issued}', style: TextStyle(color: Colors.white38, fontSize: 8)),
                    ],
                  ),
                ),
              ),
              Container(width: 2, color: c.t.accent),
              Expanded(
                flex: 3,
                child: Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [c.t.gradient.last, c.t.gradient.first],
                      begin: Alignment.topRight,
                      end: Alignment.bottomLeft,
                    ),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(c.biz, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
                      const SizedBox(height: 8),
                      Text(c.headline.toUpperCase(), style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 15, height: 1.15)),
                      const SizedBox(height: 8),
                      Text(c.summary, style: TextStyle(color: Colors.white.withOpacity(0.8), fontSize: 9, height: 1.35)),
                      const SizedBox(height: 12),
                      c.itemTable(compact: true),
                      const SizedBox(height: 12),
                      Container(
                        padding: const EdgeInsets.symmetric(vertical: 8),
                        decoration: BoxDecoration(
                          border: Border(top: BorderSide(color: c.t.accent, width: 2)),
                        ),
                        child: Row(
                          children: [
                            Text('TOTAL', style: TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.w700)),
                            const Spacer(),
                            Text('\$$c.total', style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 20)),
                          ],
                        ),
                      ),
                      const SizedBox(height: 8),
                      c.sigRow(),
                      const SizedBox(height: 4),
                      c.poweredBy(),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _badge(_EssentialLuxuryCtx c, String text) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        decoration: BoxDecoration(color: c.t.accent, borderRadius: BorderRadius.circular(4)),
        child: Text(text, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 8, letterSpacing: 1.1)),
      );

  Widget _bullet(_EssentialLuxuryCtx c, IconData icon, String text) => Padding(
        padding: const EdgeInsets.only(bottom: 4),
        child: Row(
          children: [
            Icon(icon, size: 11, color: c.t.accent),
            const SizedBox(width: 5),
            Expanded(child: Text(text, style: TextStyle(color: Colors.white.withOpacity(0.88), fontSize: 9))),
          ],
        ),
      );

  Widget _quoteBox(_EssentialLuxuryCtx c) => Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          border: Border.all(color: Colors.white30),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('"', style: TextStyle(color: c.t.accent, fontSize: 24, height: 0.7, fontWeight: FontWeight.w900)),
            Text(
              c.quote.length > 90 ? '${c.quote.substring(0, 87)}...' : c.quote,
              style: TextStyle(color: Colors.white.withOpacity(0.88), fontSize: 8, fontStyle: FontStyle.italic, height: 1.35),
            ),
            const SizedBox(height: 4),
            Text('— ${c.client}', style: TextStyle(color: c.t.accent, fontSize: 7, fontWeight: FontWeight.w700)),
          ],
        ),
      );

  Widget _triFooter(_EssentialLuxuryCtx c) => Row(
        children: [
          Container(padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6), color: c.t.accent, child: Text(c.biz.length > 12 ? '${c.biz.substring(0, 12)}…' : c.biz, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 7))),
          Expanded(child: Container(padding: const EdgeInsets.symmetric(vertical: 6), color: Colors.black, child: Text('TOTAL \$${c.total}', textAlign: TextAlign.center, style: TextStyle(color: c.t.accent, fontWeight: FontWeight.w900, fontSize: 10)))),
          Container(padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6), color: c.t.accent2, child: Text('#${c.invNo}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 7))),
        ],
      );

  Widget _crestPanel(_EssentialLuxuryCtx c, String title, String line1, String line2) => Container(
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          border: Border.all(color: c.t.accent.withOpacity(0.45)),
          borderRadius: BorderRadius.circular(8),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(title, style: TextStyle(color: c.t.accent, fontSize: 8, fontWeight: FontWeight.w900, letterSpacing: 1)),
            const SizedBox(height: 4),
            Text(line1, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11)),
            Text(line2, style: TextStyle(color: Colors.white60, fontSize: 8)),
          ],
        ),
      );

  Widget _statCard(_EssentialLuxuryCtx c, String label, String value) => Container(
        padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 8),
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.05),
          border: Border(top: BorderSide(color: c.t.accent, width: 2)),
        ),
        child: Column(
          children: [
            Text(label, style: TextStyle(color: c.t.accent, fontSize: 7, fontWeight: FontWeight.w900)),
            const SizedBox(height: 4),
            Text(value, textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 10)),
          ],
        ),
      );

  Widget _dotGrid() => SizedBox(
        width: 32,
        height: 32,
        child: GridView.count(
          crossAxisCount: 3,
          mainAxisSpacing: 2,
          crossAxisSpacing: 2,
          physics: const NeverScrollableScrollPhysics(),
          children: List.generate(9, (_) => Container(decoration: BoxDecoration(color: Colors.white.withOpacity(0.22), shape: BoxShape.circle))),
        ),
      );
}

class _HexClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    final path = Path();
    final w = size.width;
    final h = size.height;
    path.moveTo(w * 0.5, 0);
    path.lineTo(w, h * 0.25);
    path.lineTo(w, h * 0.75);
    path.lineTo(w * 0.5, h);
    path.lineTo(0, h * 0.75);
    path.lineTo(0, h * 0.25);
    path.close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

class _DiagonalFlashPainter extends CustomPainter {
  _DiagonalFlashPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    canvas.drawPath(
      Path()
        ..moveTo(0, size.height * 0.35)
        ..lineTo(size.width, 0)
        ..lineTo(size.width, size.height * 0.55)
        ..lineTo(0, size.height * 0.9)
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
    final path = Path()..lineTo(0, size.height - 12);
    path.quadraticBezierTo(size.width * 0.25, size.height, size.width * 0.5, size.height - 8);
    path.quadraticBezierTo(size.width * 0.75, size.height - 16, size.width, size.height - 6);
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
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    const len = 28.0;
    for (final origin in [Offset.zero, Offset(size.width, 0), Offset(0, size.height), Offset(size.width, size.height)]) {
      final sx = origin.dx == 0 ? 1.0 : -1.0;
      final sy = origin.dy == 0 ? 1.0 : -1.0;
      canvas.drawLine(origin, origin + Offset(len * sx, 0), paint);
      canvas.drawLine(origin, origin + Offset(0, len * sy), paint);
    }
  }

  @override
  bool shouldRepaint(covariant _OrnateCornerPainter oldDelegate) => oldDelegate.color != color;
}
