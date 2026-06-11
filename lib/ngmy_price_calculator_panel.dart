import 'package:flutter/material.dart';

/// Premium price calculator section for G-Services Iron Triangle dialog.
class NgmyPriceCalculatorPanel extends StatelessWidget {
  const NgmyPriceCalculatorPanel({
    super.key,
    required this.cityController,
    required this.stateController,
    required this.serviceController,
    required this.othersPriceController,
    required this.myPriceController,
    required this.discount,
    required this.onDiscountChanged,
    required this.onFieldChanged,
    required this.onScanTap,
    required this.onInvoiceTap,
    required this.onEstimateTap,
    required this.city,
    required this.service,
    required this.others,
    required this.mine,
    required this.netMine,
    required this.discountAmt,
    required this.belowMarket,
    required this.showPriceResult,
  });

  final TextEditingController cityController;
  final TextEditingController stateController;
  final TextEditingController serviceController;
  final TextEditingController othersPriceController;
  final TextEditingController myPriceController;
  final double discount;
  final ValueChanged<double> onDiscountChanged;
  final VoidCallback onFieldChanged;
  final VoidCallback onScanTap;
  final VoidCallback onInvoiceTap;
  final VoidCallback onEstimateTap;
  final String city;
  final String service;
  final double others;
  final double mine;
  final double netMine;
  final double discountAmt;
  final double belowMarket;
  final bool showPriceResult;

  static const _accent = Color(0xFF10B981);
  static const _accent2 = Color(0xFF06B6D4);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF0C4A6E), Color(0xFF0F172A), Color(0xFF042F2E)],
        ),
        border: Border.all(color: _accent.withValues(alpha: 0.45)),
        boxShadow: [
          BoxShadow(color: _accent.withValues(alpha: 0.18), blurRadius: 18, spreadRadius: 1),
          BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 6)),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            Positioned(
              left: -28,
              top: -24,
              child: IgnorePointer(
                child: Container(
                  width: 110,
                  height: 110,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: RadialGradient(
                      colors: [
                        _accent2.withValues(alpha: 0.18),
                        _accent.withValues(alpha: 0.06),
                        Colors.transparent,
                      ],
                    ),
                  ),
                ),
              ),
            ),
            Positioned(
              left: -6,
              top: 36,
              child: IgnorePointer(
                child: Icon(
                  Icons.account_balance_wallet_rounded,
                  size: 72,
                  color: _accent2.withValues(alpha: 0.12),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: onEstimateTap,
                          borderRadius: BorderRadius.circular(10),
                          child: Ink(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              gradient: const LinearGradient(colors: [_accent, _accent2]),
                            ),
                            child: const Icon(Icons.account_balance_wallet_rounded, color: Colors.white, size: 18),
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      const Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Price Calculator', style: TextStyle(fontWeight: FontWeight.w900, color: Colors.white, fontSize: 15)),
                            Text('Compare & quote smarter', style: TextStyle(color: Colors.white54, fontSize: 10)),
                          ],
                        ),
                      ),
                      _toolBtn(icon: Icons.qr_code_scanner_rounded, colors: const [Color(0xFF7C3AED), Color(0xFF5B21B6)], onTap: onScanTap),
                      const SizedBox(width: 8),
                      _toolBtn(icon: Icons.receipt_long_rounded, colors: const [_accent, Color(0xFF059669)], onTap: onInvoiceTap),
                    ],
                  ),
                  const SizedBox(height: 14),
                  Row(
                    children: [
                      Expanded(child: _field(controller: cityController, hint: 'City', icon: Icons.location_city_rounded)),
                      const SizedBox(width: 8),
                      Expanded(child: _field(controller: stateController, hint: 'State', icon: Icons.map_rounded)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  _field(controller: serviceController, hint: 'Service / fixture', icon: Icons.handyman_rounded),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Expanded(child: _field(controller: othersPriceController, hint: 'Market rate (\$)', icon: Icons.storefront_rounded, number: true)),
                      const SizedBox(width: 8),
                      Expanded(child: _field(controller: myPriceController, hint: 'Your price (\$)', icon: Icons.sell_rounded, number: true)),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    decoration: BoxDecoration(
                      color: Colors.black.withValues(alpha: 0.28),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                    ),
                    child: Column(
                      children: [
                        Row(
                          children: [
                            const Icon(Icons.local_offer_rounded, color: _accent, size: 16),
                            const SizedBox(width: 6),
                            const Text('Discount', style: TextStyle(color: Colors.white70, fontSize: 12, fontWeight: FontWeight.w700)),
                            const Spacer(),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                              decoration: BoxDecoration(
                                color: _accent.withValues(alpha: 0.18),
                                borderRadius: BorderRadius.circular(20),
                                border: Border.all(color: _accent.withValues(alpha: 0.45)),
                              ),
                              child: Text('${discount.toStringAsFixed(0)}%', style: const TextStyle(color: _accent, fontWeight: FontWeight.w900, fontSize: 12)),
                            ),
                          ],
                        ),
                        SliderTheme(
                          data: SliderThemeData(
                            trackHeight: 4,
                            thumbShape: const RoundSliderThumbShape(enabledThumbRadius: 7),
                            overlayShape: const RoundSliderOverlayShape(overlayRadius: 14),
                            activeTrackColor: _accent,
                            inactiveTrackColor: Colors.white.withValues(alpha: 0.12),
                            thumbColor: Colors.white,
                          ),
                          child: Slider(value: discount, min: 0, max: 20, divisions: 20, onChanged: onDiscountChanged),
                        ),
                      ],
                    ),
                  ),
                  if (showPriceResult) ...[
                    const SizedBox(height: 14),
                    _resultCard(),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _toolBtn({required IconData icon, required List<Color> colors, required VoidCallback onTap}) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(10),
        child: Ink(
          width: 38,
          height: 38,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            gradient: LinearGradient(colors: colors),
            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.45), blurRadius: 8, offset: const Offset(0, 3))],
          ),
          child: Icon(icon, color: Colors.white, size: 20),
        ),
      ),
    );
  }

  Widget _field({
    required TextEditingController controller,
    required String hint,
    required IconData icon,
    bool number = false,
  }) {
    return TextField(
      controller: controller,
      keyboardType: number ? const TextInputType.numberWithOptions(decimal: true) : TextInputType.text,
      onChanged: (_) => onFieldChanged(),
      style: const TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600),
      decoration: InputDecoration(
        hintText: hint,
        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.32), fontSize: 12),
        prefixIcon: Icon(icon, size: 16, color: Colors.white.withValues(alpha: 0.45)),
        filled: true,
        fillColor: Colors.black.withValues(alpha: 0.32),
        contentPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 12),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1))),
        enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1))),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: const BorderSide(color: _accent, width: 1.4)),
      ),
    );
  }

  Widget _resultCard() {
    final title = service.isNotEmpty && city.isNotEmpty
        ? '$service · $city'
        : service.isNotEmpty
            ? service
            : city.isNotEmpty
                ? city
                : 'Your quote';

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(14),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            Colors.black.withValues(alpha: 0.35),
            _accent.withValues(alpha: 0.12),
          ],
        ),
        border: Border.all(color: _accent.withValues(alpha: 0.55)),
      ),
      child: Column(
        children: [
          Text(title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14)),
          if (others > 0) ...[
            const SizedBox(height: 6),
            Text('Market: \$${others.toStringAsFixed(2)}', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 12)),
          ],
          if (mine > 0) ...[
            const SizedBox(height: 12),
            Text('YOUR PRICE', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 2)),
            ShaderMask(
              shaderCallback: (b) => const LinearGradient(colors: [Color(0xFF6EE7B7), Color(0xFF34D399), Color(0xFF10B981)]).createShader(b),
              child: Text(
                '\$${netMine.toStringAsFixed(2)}',
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 36, height: 1),
              ),
            ),
            if (discountAmt > 0.009) ...[
              const SizedBox(height: 8),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('\$${mine.toStringAsFixed(2)}', style: TextStyle(color: Colors.white.withValues(alpha: 0.4), decoration: TextDecoration.lineThrough, fontSize: 13)),
                  const SizedBox(width: 8),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: _accent.withValues(alpha: 0.2),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: _accent.withValues(alpha: 0.5)),
                    ),
                    child: Text('Save \$${discountAmt.toStringAsFixed(2)}', style: const TextStyle(color: _accent, fontWeight: FontWeight.w800, fontSize: 11)),
                  ),
                ],
              ),
            ],
          ],
          if (others > 0 && mine > 0 && belowMarket > 0.009) ...[
            const SizedBox(height: 10),
            Text('✓ \$${belowMarket.toStringAsFixed(2)} below market', style: const TextStyle(color: Color(0xFF6EE7B7), fontWeight: FontWeight.w800, fontSize: 12)),
          ] else if (others > 0 && mine > 0 && belowMarket < -0.009) ...[
            const SizedBox(height: 10),
            Text('Above market by \$${(-belowMarket).toStringAsFixed(2)}', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w800, fontSize: 12)),
          ],
        ],
      ),
    );
  }
}
