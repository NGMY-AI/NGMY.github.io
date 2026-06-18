part of 'ngmy_invoice_templates.dart';

const _stdGold = Color(0xFFD4AF37);
const _stdGoldLight = Color(0xFFF5E6B8);

bool ngmyIsStandardLuxuryLayout(NgmyInvoiceLayout layout) {
  return layout == NgmyInvoiceLayout.standardCorporateLux ||
      layout == NgmyInvoiceLayout.standardCreativeLux ||
      layout == NgmyInvoiceLayout.standardClassicLux ||
      layout == NgmyInvoiceLayout.standardMinimalLux ||
      layout == NgmyInvoiceLayout.standardDiamondLux;
}

class _NgmyStandardLuxuryInvoice extends StatelessWidget {
  const _NgmyStandardLuxuryInvoice({required this.data, required this.template});

  final NgmyInvoicePreviewData data;
  final NgmyInvoiceTemplate template;

  @override
  Widget build(BuildContext context) {
    final c = _StandardLuxCtx(data, template);
    switch (template.layout) {
      case NgmyInvoiceLayout.standardCorporateLux:
        return _corporate(c);
      case NgmyInvoiceLayout.standardCreativeLux:
        return _creative(c);
      case NgmyInvoiceLayout.standardClassicLux:
        return _classic(c);
      case NgmyInvoiceLayout.standardMinimalLux:
        return _minimal(c);
      case NgmyInvoiceLayout.standardDiamondLux:
        return _diamond(c);
      default:
        return _classic(c);
    }
  }

  Widget _corporate(_StandardLuxCtx c) {
    return c.shell(
      overlay: _StdCorporatePainter(c.accent, c.accent2),
      header: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [c.accent, c.accent.withOpacity(0.7)]),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: Colors.white.withOpacity(0.25)),
              boxShadow: [BoxShadow(color: c.accent.withOpacity(0.45), blurRadius: 10)],
            ),
            child: const Icon(Icons.apartment_rounded, color: Colors.white, size: 24),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('EXECUTIVE CORPORATE SUITE', style: TextStyle(fontSize: 7, letterSpacing: 1.6, color: c.text.withOpacity(0.55), fontWeight: FontWeight.w800)),
                Text(c.biz, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: c.text, letterSpacing: 0.3)),
                ...c.bizLines(),
              ],
            ),
          ),
          c.invoiceBadge(fontSize: 22),
        ],
      ),
      infoPanel: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(child: c.luxBox('INVOICE TO', [c.client, if (data.clientEmail.isNotEmpty) data.clientEmail])),
          const SizedBox(width: 10),
          Expanded(child: c.luxBox('COMPANY', [c.biz, ...c.bizLineStrings()])),
        ],
      ),
    );
  }

  Widget _creative(_StandardLuxCtx c) {
    return c.shell(
      overlay: _StdCreativePainter(c.accent, c.accent2),
      header: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: [c.accent, c.accent2]),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: const Text('CREATIVE STUDIO', style: TextStyle(color: Colors.white, fontSize: 7, fontWeight: FontWeight.w900, letterSpacing: 1.4)),
              ),
              const Spacer(),
              Text('#${c.invNo}', style: TextStyle(color: c.text.withOpacity(0.6), fontSize: 9, fontWeight: FontWeight.w700)),
            ],
          ),
          const SizedBox(height: 10),
          ShaderMask(
            shaderCallback: (r) => LinearGradient(colors: [c.accent, c.accent2, Colors.white]).createShader(r),
            child: Text(c.biz.toUpperCase(), style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 1.2)),
          ),
          Text('Artisan invoice · curated for distinction', style: TextStyle(fontSize: 8, color: c.text.withOpacity(0.55), fontStyle: FontStyle.italic)),
          ...c.bizLines(),
          const SizedBox(height: 8),
          Align(alignment: Alignment.centerRight, child: c.invoiceBadge(fontSize: 26, gradient: true)),
        ],
      ),
      infoPanel: Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          gradient: LinearGradient(colors: [c.accent.withOpacity(0.18), c.accent2.withOpacity(0.12)]),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: c.accent.withOpacity(0.45)),
        ),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('PREPARED FOR', style: TextStyle(fontSize: 8, letterSpacing: 1.4, color: c.accent, fontWeight: FontWeight.w800)),
                  const SizedBox(height: 4),
                  Text(c.client, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: c.text)),
                  if (data.clientEmail.isNotEmpty) Text(data.clientEmail, style: TextStyle(fontSize: 9, color: c.text.withOpacity(0.7))),
                ],
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text('Issued ${c.issued}', style: TextStyle(fontSize: 9, color: c.text.withOpacity(0.75))),
                Text('Due ${c.due}', style: TextStyle(fontSize: 9, color: c.text.withOpacity(0.75))),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _classic(_StandardLuxCtx c) {
    return c.shell(
      overlay: _StdClassicPainter(c.accent2),
      header: Column(
        children: [
          Row(
            children: [
              Icon(Icons.auto_awesome, color: c.accent2, size: 16),
              Expanded(
                child: Container(
                  height: 1,
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                  decoration: BoxDecoration(gradient: LinearGradient(colors: [Colors.transparent, c.accent2.withOpacity(0.7), Colors.transparent])),
                ),
              ),
              Icon(Icons.auto_awesome, color: c.accent2, size: 16),
            ],
          ),
          const SizedBox(height: 10),
          Text('INVOICE', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w300, color: c.text.withOpacity(0.95), letterSpacing: 6)),
          const SizedBox(height: 4),
          Text(c.biz, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: c.accent, letterSpacing: 1)),
          ...c.bizLines(align: TextAlign.center),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              c.metaPill('No. ${c.invNo}'),
              const SizedBox(width: 8),
              c.metaPill(c.issued),
            ],
          ),
        ],
      ),
      infoPanel: c.clientPanel(),
    );
  }

  Widget _minimal(_StandardLuxCtx c) {
    return c.shell(
      overlay: _StdMinimalPainter(c.accent),
      header: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 36,
            height: 3,
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [c.accent, c.accent.withOpacity(0.3)]),
              borderRadius: BorderRadius.circular(2),
            ),
          ),
          const SizedBox(height: 12),
          Text(c.biz, style: TextStyle(fontSize: 20, fontWeight: FontWeight.w300, color: c.text, letterSpacing: 0.5)),
          Text('Refined minimal invoice', style: TextStyle(fontSize: 8, color: c.text.withOpacity(0.45), letterSpacing: 2, fontWeight: FontWeight.w600)),
          ...c.bizLines(),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(child: Divider(color: c.accent.withOpacity(0.35), thickness: 0.8)),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: Text('INVOICE', style: TextStyle(fontSize: 11, letterSpacing: 3, fontWeight: FontWeight.w800, color: c.accent)),
              ),
              Expanded(child: Divider(color: c.accent.withOpacity(0.35), thickness: 0.8)),
            ],
          ),
          const SizedBox(height: 6),
          Text('#${c.invNo}  ·  ${c.issued}', style: TextStyle(fontSize: 9, color: c.text.withOpacity(0.55))),
        ],
      ),
      infoPanel: Container(
        padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 14),
        decoration: BoxDecoration(
          border: Border(left: BorderSide(color: c.accent, width: 3)),
        ),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('BILL TO', style: TextStyle(fontSize: 7, letterSpacing: 1.6, color: c.accent, fontWeight: FontWeight.w800)),
                  const SizedBox(height: 4),
                  Text(c.client, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: c.text)),
                  if (data.clientEmail.isNotEmpty) Text(data.clientEmail, style: TextStyle(fontSize: 9, color: c.text.withOpacity(0.6))),
                ],
              ),
            ),
            Text('Due ${c.due}', style: TextStyle(fontSize: 9, color: c.text.withOpacity(0.55))),
          ],
        ),
      ),
    );
  }

  Widget _diamond(_StandardLuxCtx c) {
    return c.shell(
      overlay: _StdDiamondPainter(c.accent, c.accent2),
      header: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(colors: [c.accent2.withOpacity(0.3), c.accent.withOpacity(0.15)]),
              border: Border.all(color: c.accent.withOpacity(0.5), width: 1.5),
            ),
            child: Icon(Icons.diamond_outlined, color: c.accent, size: 26),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(c.biz, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: c.text)),
                Text('Crystal-clear billing', style: TextStyle(fontSize: 8, color: c.accent, fontWeight: FontWeight.w700, letterSpacing: 0.8)),
                ...c.bizLines(),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              ShaderMask(
                shaderCallback: (r) => LinearGradient(colors: [c.accent, c.accent2]).createShader(r),
                child: const Text('INVOICE', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 2)),
              ),
              Text('#${c.invNo}', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: c.text.withOpacity(0.7))),
              Text(c.issued, style: TextStyle(fontSize: 8, color: c.text.withOpacity(0.55))),
            ],
          ),
        ],
      ),
      infoPanel: c.clientPanel(),
    );
  }
}

class _StandardLuxCtx {
  _StandardLuxCtx(this.data, this.template);

  final NgmyInvoicePreviewData data;
  final NgmyInvoiceTemplate template;

  Color get accent => template.accent;
  Color get accent2 => template.accent2;
  bool get light => template.lightBackground;
  Color get text => template.headerText;

  String get biz => data.businessName.isEmpty ? 'Your Business' : data.businessName;
  String get invNo => data.invoiceNo.isEmpty ? '1' : data.invoiceNo;
  String get issued => data.issuedDate.isEmpty ? '--/--/----' : data.issuedDate;
  String get due => data.dueDate.isEmpty ? '—' : data.dueDate;
  String get client => data.clientName.isEmpty ? 'Client Name' : data.clientName;

  Color get panel => light ? Colors.black.withOpacity(0.03) : Colors.white.withOpacity(0.07);
  Color get panelBorder => light ? Colors.black.withOpacity(0.08) : Colors.white.withOpacity(0.18);

  List<Widget> bizLines({TextAlign align = TextAlign.start}) {
    return [
      if (data.bizStreet.trim().isNotEmpty)
        Text(data.bizStreet.trim(), textAlign: align, style: TextStyle(fontSize: 9, color: text.withOpacity(0.8))),
      if (data.bizCityStateZip.trim().isNotEmpty)
        Text(data.bizCityStateZip.trim(), textAlign: align, style: TextStyle(fontSize: 9, color: text.withOpacity(0.8))),
      if (data.bizPhone.trim().isNotEmpty)
        Text(data.bizPhone.trim(), textAlign: align, style: TextStyle(fontSize: 9, color: text.withOpacity(0.8))),
    ];
  }

  List<String> bizLineStrings() {
    return [
      if (data.bizStreet.trim().isNotEmpty) data.bizStreet.trim(),
      if (data.bizCityStateZip.trim().isNotEmpty) data.bizCityStateZip.trim(),
      if (data.bizPhone.trim().isNotEmpty) data.bizPhone.trim(),
    ];
  }

  Widget invoiceBadge({double fontSize = 24, bool gradient = false}) {
    final label = gradient
        ? ShaderMask(
            shaderCallback: (r) => LinearGradient(colors: [accent, accent2]).createShader(r),
            child: Text('INVOICE', style: TextStyle(fontSize: fontSize, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 2)),
          )
        : Text('INVOICE', style: TextStyle(fontSize: fontSize, fontWeight: FontWeight.w900, color: accent, letterSpacing: 2));
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        color: light ? Colors.white.withOpacity(0.85) : Colors.black.withOpacity(0.35),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: accent.withOpacity(0.55), width: 1.2),
        boxShadow: [BoxShadow(color: accent.withOpacity(0.2), blurRadius: 8)],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          label,
          const SizedBox(height: 2),
          Text('#$invNo', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: text.withOpacity(0.8))),
          Text(issued, style: TextStyle(fontSize: 8, color: text.withOpacity(0.6))),
        ],
      ),
    );
  }

  Widget metaPill(String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        border: Border.all(color: accent2.withOpacity(0.5)),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Text(label, style: TextStyle(fontSize: 8, color: text.withOpacity(0.85), letterSpacing: 0.5)),
    );
  }

  Widget luxBox(String title, List<String> lines) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 10),
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: [accent, accent.withOpacity(0.75)]),
            borderRadius: const BorderRadius.vertical(top: Radius.circular(8)),
          ),
          child: Text(title, style: const TextStyle(fontSize: 8, fontWeight: FontWeight.w900, color: Colors.white, letterSpacing: 1.2)),
        ),
        Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            color: light ? Colors.white : Colors.white.withOpacity(0.06),
            borderRadius: const BorderRadius.vertical(bottom: Radius.circular(8)),
            border: Border.all(color: accent.withOpacity(0.35)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: lines.map((l) => Padding(padding: const EdgeInsets.only(bottom: 2), child: Text(l, style: TextStyle(fontSize: 9, color: light ? Colors.black87 : text)))).toList(),
          ),
        ),
      ],
    );
  }

  Widget clientPanel() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: panel,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: panelBorder),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('CLIENT', style: TextStyle(fontSize: 8, letterSpacing: 1.4, fontWeight: FontWeight.w800, color: accent)),
                const SizedBox(height: 4),
                Text(client, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: text)),
                if (data.clientEmail.trim().isNotEmpty) Text(data.clientEmail.trim(), style: TextStyle(fontSize: 10, color: text.withOpacity(0.75))),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text('Issued: $issued', style: TextStyle(fontSize: 9, color: text.withOpacity(0.8))),
              Text('Due: $due', style: TextStyle(fontSize: 9, color: text.withOpacity(0.8))),
            ],
          ),
        ],
      ),
    );
  }

  Widget shell({required Widget header, required Widget infoPanel, CustomPainter? overlay}) {
    final borderColor = light ? accent.withOpacity(0.45) : _stdGold.withOpacity(0.65);
    return Container(
      width: double.infinity,
      constraints: const BoxConstraints(minHeight: 560),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: template.gradient, begin: Alignment.topLeft, end: Alignment.bottomRight),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: borderColor, width: light ? 1.8 : 2.2),
        boxShadow: [
          BoxShadow(color: accent.withOpacity(0.28), blurRadius: 20, spreadRadius: 1),
          if (!light) BoxShadow(color: _stdGold.withOpacity(0.12), blurRadius: 12),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(13),
        child: Stack(
          children: [
            if (overlay != null) Positioned.fill(child: CustomPaint(painter: overlay)),
            Positioned.fill(child: _InvoiceWatermarks(lightBackground: light)),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 12),
              child: DefaultTextStyle(
                style: TextStyle(color: text),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    header,
                    const SizedBox(height: 12),
                    infoPanel,
                    const SizedBox(height: 12),
                    _tableHeader(),
                    const SizedBox(height: 4),
                    _tableRow(),
                    const SizedBox(height: 10),
                    _totals(),
                    if (data.itemDesc.trim().isNotEmpty) ...[
                      const SizedBox(height: 8),
                      Text(data.itemDesc.trim(), style: TextStyle(color: text.withOpacity(0.92), fontSize: 11)),
                    ],
                    if (data.paymentInfo.trim().isNotEmpty) ...[
                      const SizedBox(height: 8),
                      _paymentBlock(),
                    ],
                    const SizedBox(height: 10),
                    Center(child: Text('By signing, both parties agree to the services described herein.', style: TextStyle(color: text.withOpacity(0.78), fontSize: 9))),
                    const SizedBox(height: 10),
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(child: _sigBlock('SERVICE PROVIDER', data.providerSignature)),
                        const SizedBox(width: 8),
                        Expanded(child: _sigBlock('CLIENT', data.clientSignature)),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Row(
                      children: [
                        Expanded(child: Text('WITH GRATITUDE FOR YOUR BUSINESS', style: TextStyle(fontSize: 8, letterSpacing: 1, fontWeight: FontWeight.w700, color: text.withOpacity(0.55)))),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(border: Border.all(color: accent.withOpacity(0.45)), borderRadius: BorderRadius.circular(20)),
                          child: Text('STANDARD LUXURY', style: TextStyle(fontSize: 7, letterSpacing: 1, color: accent, fontWeight: FontWeight.w800)),
                        ),
                      ],
                    ),
                    const SizedBox(height: 10),
                    Center(child: Text('POWERED BY: NGMY', style: TextStyle(color: text.withOpacity(0.75), letterSpacing: 1.4, fontWeight: FontWeight.w800, fontSize: 9))),
                  ],
                ),
              ),
            ),
            if (data.isPaid) Positioned(left: 14, top: 14, child: _paidStamp()),
          ],
        ),
      ),
    );
  }

  Widget _tableHeader() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 7, horizontal: 10),
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [accent, Color.lerp(accent, accent2, 0.5)!]),
        borderRadius: BorderRadius.circular(8),
        boxShadow: [BoxShadow(color: accent.withOpacity(0.25), blurRadius: 6, offset: const Offset(0, 2))],
      ),
      child: Row(
        children: [
          Expanded(child: Text('ITEM DESCRIPTION', style: const TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: Colors.white))),
          const SizedBox(width: 52, child: Text('PRICE', textAlign: TextAlign.center, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: Colors.white))),
          const SizedBox(width: 36, child: Text('QTY', textAlign: TextAlign.center, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: Colors.white))),
          const SizedBox(width: 44, child: Text('DISC.', textAlign: TextAlign.center, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: Colors.white))),
          const SizedBox(width: 60, child: Text('TOTAL', textAlign: TextAlign.right, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: Colors.white))),
        ],
      ),
    );
  }

  Widget _tableRow() {
    final name = data.itemName.isEmpty ? 'Item' : data.itemName;
    final price = _fmt(data.itemPrice);
    final qty = data.itemQty.isEmpty ? '1' : data.itemQty;
    final disc = '${_num(data.itemDiscount).toStringAsFixed(0)}%';
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 10),
      decoration: BoxDecoration(border: Border(bottom: BorderSide(color: light ? Colors.black12 : Colors.white12))),
      child: Row(
        children: [
          Expanded(child: Text(name, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: text))),
          SizedBox(width: 52, child: Text('\$$price', textAlign: TextAlign.center, style: TextStyle(fontSize: 11, color: text))),
          SizedBox(width: 36, child: Text(qty, textAlign: TextAlign.center, style: TextStyle(fontSize: 11, color: text))),
          SizedBox(width: 44, child: Text(disc, textAlign: TextAlign.center, style: TextStyle(fontSize: 11, color: text))),
          SizedBox(width: 60, child: Text('\$${data.subtotal.toStringAsFixed(2)}', textAlign: TextAlign.right, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: text))),
        ],
      ),
    );
  }

  Widget _totals() {
    final due = data.isPaid ? 0.0 : data.subtotal;
    return Align(
      alignment: Alignment.centerRight,
      child: Container(
        width: 220,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(10), border: Border.all(color: panelBorder)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            if (data.isPaid) ...[
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
                decoration: BoxDecoration(
                  gradient: LinearGradient(colors: light ? [const Color(0xFF059669), const Color(0xFF10B981)] : [accent, accent2]),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.verified_rounded, size: 16, color: light ? Colors.white : Colors.white),
                    const SizedBox(width: 6),
                    Text('PAID', style: TextStyle(color: light ? Colors.white : Colors.white, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 2.2)),
                  ],
                ),
              ),
              const SizedBox(height: 8),
            ],
            Text('Subtotal', style: TextStyle(fontSize: 11, color: text.withOpacity(0.8))),
            Text('\$${data.subtotal.toStringAsFixed(2)}', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: text)),
            const SizedBox(height: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: [accent, Color.lerp(accent, accent2, 0.4)!]),
                borderRadius: BorderRadius.circular(6),
              ),
              child: Row(
                children: [
                  Text(data.isPaid ? 'BALANCE DUE' : 'TOTAL DUE', style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: Colors.white)),
                  const Spacer(),
                  Text('\$${due.toStringAsFixed(2)}', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w900, color: Colors.white)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _paymentBlock() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(8), border: Border.all(color: panelBorder)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('PAYMENT & NOTES', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, color: accent)),
          const SizedBox(height: 4),
          Text(data.paymentInfo.trim(), style: TextStyle(color: text.withOpacity(0.92), fontSize: 11, height: 1.35)),
        ],
      ),
    );
  }

  Widget _sigBlock(String label, List<Offset?> points) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(color: panel, borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: text)),
          const SizedBox(height: 6),
          Container(
            height: 48,
            width: double.infinity,
            decoration: BoxDecoration(
              color: light ? Colors.white : Colors.white.withOpacity(0.96),
              borderRadius: BorderRadius.circular(6),
              border: Border.all(color: accent.withOpacity(0.35)),
            ),
            child: previewSignature(points, height: 48, color: const Color(0xFF0F172A)),
          ),
          const SizedBox(height: 4),
          Text('Sign Here', style: TextStyle(fontSize: 8, color: text.withOpacity(0.55), fontStyle: FontStyle.italic)),
        ],
      ),
    );
  }

  Widget _paidStamp() {
    final border = light ? accent : _stdGold;
    return Transform.rotate(
      angle: -0.22,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(6),
          border: Border.all(color: border, width: 2.2),
          color: light ? Colors.white.withOpacity(0.92) : Colors.black.withOpacity(0.55),
          boxShadow: [BoxShadow(color: border.withOpacity(0.35), blurRadius: 8)],
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.workspace_premium_rounded, color: border, size: 16),
            Text('PAID', style: TextStyle(color: border, fontWeight: FontWeight.w900, fontSize: 16, letterSpacing: 2.5)),
          ],
        ),
      ),
    );
  }

  String _fmt(String v) => _num(v).toStringAsFixed(2);
  double _num(String v) => double.tryParse(v.trim()) ?? 0;
}

class _StdCorporatePainter extends CustomPainter {
  _StdCorporatePainter(this.accent, this.accent2);
  final Color accent;
  final Color accent2;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..style = PaintingStyle.fill;
    paint.color = accent.withOpacity(0.12);
    canvas.drawPath(Path()
      ..moveTo(size.width * 0.68, 0)
      ..lineTo(size.width, 0)
      ..lineTo(size.width, size.height * 0.2)
      ..close(), paint);
    paint.color = accent2.withOpacity(0.1);
    canvas.drawPath(Path()
      ..moveTo(0, size.height * 0.82)
      ..lineTo(0, size.height)
      ..lineTo(size.width * 0.3, size.height)
      ..close(), paint);
    final frame = Paint()
      ..color = accent.withOpacity(0.25)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(10, 10, size.width - 20, size.height - 20), const Radius.circular(8)), frame);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _StdCreativePainter extends CustomPainter {
  _StdCreativePainter(this.accent, this.accent2);
  final Color accent;
  final Color accent2;

  @override
  void paint(Canvas canvas, Size size) {
    final rnd = math.Random(11);
    final paint = Paint();
    for (var i = 0; i < 6; i++) {
      paint.shader = RadialGradient(colors: [accent.withOpacity(0.2), Colors.transparent]).createShader(Rect.fromCircle(center: Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height * 0.4), radius: 40 + rnd.nextDouble() * 30));
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), 30 + rnd.nextDouble() * 20, paint);
    }
    paint.shader = null;
    paint.color = accent2.withOpacity(0.08);
    paint.style = PaintingStyle.stroke;
    paint.strokeWidth = 1;
    canvas.drawLine(Offset(size.width * 0.1, size.height * 0.15), Offset(size.width * 0.9, size.height * 0.08), paint);
    canvas.drawLine(Offset(size.width * 0.05, size.height * 0.92), Offset(size.width * 0.95, size.height * 0.88), paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _StdClassicPainter extends CustomPainter {
  _StdClassicPainter(this.gold);
  final Color gold;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = gold.withOpacity(0.2)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(8, 8, size.width - 16, size.height - 16), const Radius.circular(10)), paint);
    paint.color = gold.withOpacity(0.08);
    paint.style = PaintingStyle.fill;
    canvas.drawCircle(Offset(size.width - 20, 20), 12, paint);
    canvas.drawCircle(Offset(20, size.height - 20), 10, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _StdMinimalPainter extends CustomPainter {
  _StdMinimalPainter(this.accent);
  final Color accent;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = accent.withOpacity(0.12)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.8;
    canvas.drawLine(Offset(size.width * 0.08, 52), Offset(size.width * 0.92, 52), paint);
    paint.color = accent.withOpacity(0.06);
    paint.style = PaintingStyle.fill;
    canvas.drawRect(Rect.fromLTWH(size.width - 60, size.height - 60, 40, 40), paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _StdDiamondPainter extends CustomPainter {
  _StdDiamondPainter(this.accent, this.accent2);
  final Color accent;
  final Color accent2;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..style = PaintingStyle.stroke..strokeWidth = 1;
    paint.color = accent.withOpacity(0.15);
    for (var i = 0; i < 4; i++) {
      final cx = size.width * (0.15 + i * 0.22);
      final cy = size.height * 0.12;
      canvas.drawPath(Path()
        ..moveTo(cx, cy - 14)
        ..lineTo(cx + 10, cy)
        ..lineTo(cx, cy + 14)
        ..lineTo(cx - 10, cy)
        ..close(), paint);
    }
    paint.color = accent2.withOpacity(0.08);
    paint.style = PaintingStyle.fill;
    final rnd = math.Random(3);
    for (var i = 0; i < 12; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() * 2 + 0.5, paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
