import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_studio_colors.dart';
import 'ngmy_doc_share_gate_ui.dart';
import 'ngmy_fun_games.dart';
import 'ngmy_hud_tech_shell.dart';
import 'ngmy_iron_triangle_panel.dart';
import 'ngmy_invoice_creator.dart';
import 'ngmy_swahili_school.dart';
import 'ngmy_creator_recorder_studio.dart';
import 'ngmy_price_calculator_panel.dart';
import 'ngmy_price_product_scanner.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_video_studio.dart';
import 'ngmy_phone_unlock.dart';
import 'ngmy_stripe_payments.dart';
export 'ngmy_studio_colors.dart';

/// Bottom-nav icon for the Creator Toolkit tab.
class NgmyStudioHubNavIcon extends StatelessWidget {
  const NgmyStudioHubNavIcon({super.key, this.dimmed = false, this.size = 30});

  final bool dimmed;
  final double size;

  @override
  Widget build(BuildContext context) {
    final fg = dimmed ? Colors.grey : Colors.white;
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        gradient: dimmed
            ? null
            : const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2],
              ),
        color: dimmed ? Colors.transparent : null,
        border: dimmed ? Border.all(color: Colors.grey.shade400, width: 1.4) : null,
        boxShadow: dimmed
            ? null
            : [
                BoxShadow(
                  color: kNgmyStudioHubAccent.withValues(alpha: 0.38),
                  blurRadius: 10,
                  offset: const Offset(0, 3),
                ),
              ],
      ),
      child: Icon(Icons.dashboard_customize_rounded, size: size * 0.58, color: fg),
    );
  }
}

/// Main tab — Doc Share + hub letter tools up top; studios at the bottom.
class NgmyCreatorHubTab extends StatelessWidget {
  const NgmyCreatorHubTab({
    super.key,
      required this.userEmail,
      required this.bottomScrollPadding,
      this.user,
      this.config,
      this.onCharge,
      this.onDataChanged,
      this.onPersistConfig,
    });

    final String userEmail;
    final double bottomScrollPadding;
    final dynamic user;
    final dynamic config;
    final Future<bool> Function(double amount, String description)? onCharge;
    final VoidCallback? onDataChanged;
    final Future<bool> Function()? onPersistConfig;

    @override
    Widget build(BuildContext context) {
      // Pinned order: Doc Share → Quote Calc → QR Generator → Play Zone → Kiswahili School → Recorder Studio → rest.
      final tools = <_CreatorTool>[
        _CreatorTool(
          icon: Icons.folder_shared_rounded,
          colors: const [Color(0xFF0D9488), Color(0xFF059669)],
          title: 'Doc Share',
          subtitle: 'Upload & share any file',
          onTap: () {
            if (userEmail.trim().isEmpty) return;
          openNgmyDocShare(
            context: context,
            user: user ?? _HubGuestUser(userEmail),
            config: config,
            onCharge: onCharge ?? (amount, description) async => false,
            onDataChanged: onDataChanged ?? () {},
            onPersistConfig: onPersistConfig ?? () async => false,
          );
        },
      ),
      _CreatorTool(
        icon: Icons.request_quote_rounded,
        colors: const [Color(0xFF16A34A), Color(0xFF065F46)],
        title: 'Quote Calc',
        subtitle: 'Invoices, rates & estimates',
        onTap: () {
          showNgmyStandaloneQuoteCalc(
            context,
            userEmail: userEmail,
            user: user,
            config: config,
            onCharge: onCharge,
            onDataChanged: onDataChanged,
          );
        },
      ),
      _CreatorTool(
        icon: Icons.qr_code_2_rounded,
        colors: const [Color(0xFF2563EB), Color(0xFF7C3AED)],
        title: 'QR Generator',
        subtitle: 'Create & save QR codes',
        onTap: () {
          unawaited(showNgmyQrGeneratorDialog(
            context,
            userEmail: userEmail.isEmpty ? null : userEmail,
            user: user,
          ));
        },
      ),
      _CreatorTool(
        icon: Icons.interests_rounded,
        colors: const [Color(0xFF7C3AED), Color(0xFF06B6D4)],
        title: 'Play Zone',
        subtitle: 'Love match · riddles · daily fun',
        onTap: () {
          showNgmyFunGamesDialog(context, userEmail: userEmail.isEmpty ? null : userEmail);
        },
      ),
      _CreatorTool(
        icon: Icons.translate_rounded,
        colors: const [Color(0xFF059669), Color(0xFF14B8A6)],
        title: 'Kiswahili School',
        subtitle: 'Jifunze Kiingereza kwa picha na Mwalimu Amina',
        onTap: () => showNgmySwahiliSchool(
          context: context,
          userEmail: userEmail,
          user: user,
        ),
      ),
      _CreatorTool(
        icon: Icons.mic_rounded,
        colors: const [Color(0xFF059669), Color(0xFF14B8A6)],
        title: 'Recorder Studio',
        subtitle: 'Video · record · play',
        onTap: () {
          showNgmyCreatorRecorderStudio(context, userEmail: userEmail);
        },
      ),
      _CreatorTool(
        icon: Icons.movie_creation_rounded,
        colors: const [Color(0xFF6D28D9), Color(0xFF9333EA)],
        title: 'Video Studio',
        subtitle: 'Templates, clips & export',
        onTap: () => showNgmyVideoStudio(context),
      ),
      _CreatorTool(
        icon: Icons.phonelink_lock_rounded,
        colors: const [Color(0xFF0EA5E9), Color(0xFF6366F1)],
        title: 'Phone Unlock',
        subtitle: 'Google lock · Chrome · Settings links',
        onTap: () => showNgmyPhoneUnlock(
          context,
          userEmail: userEmail,
          isAdmin: NgmyStripePayments.isAdmin(user),
        ),
      ),
    ];

    return Scaffold(
      backgroundColor: Theme.of(context).brightness == Brightness.dark
          ? const Color(0xFF121212)
          : const Color(0xFFF1F5F9),
      body: SafeArea(
        bottom: false,
        child: NgmyHudMotion(
          builder: (context, pulse, scan, orbit) {
            return CustomScrollView(
              slivers: [
                SliverToBoxAdapter(
                  child: Padding(
                    padding: EdgeInsets.fromLTRB(20, 10, 20, bottomScrollPadding),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        _CreatorHubTitle(pulse: pulse, orbit: orbit, scan: scan),
                        const SizedBox(height: 18),
                        GridView.builder(
                          shrinkWrap: true,
                          physics: const NeverScrollableScrollPhysics(),
                          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                            crossAxisCount: 2,
                            mainAxisSpacing: 12,
                            crossAxisSpacing: 12,
                            childAspectRatio: 1.08,
                          ),
                          itemCount: tools.length,
                          itemBuilder: (_, i) => _CreatorToolCard(
                            tool: tools[i],
                            pulse: pulse,
                            scan: scan,
                            orbit: orbit,
                            phase: i * 0.11,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}

class _CreatorHubTitle extends StatelessWidget {
  const _CreatorHubTitle({required this.pulse, required this.orbit, required this.scan});

  final double pulse;
  final double orbit;
  final double scan;

  @override
  Widget build(BuildContext context) {
    const colors = [kNgmyStudioHubAccent, kNgmyStudioHubAccent2];
    return NgmyHudTechFrame(
      colors: colors,
      pulse: pulse,
      scan: scan,
      orbit: orbit,
      borderRadius: 18,
      padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
      child: Row(
        children: [
          NgmyHudMiniOrb(
            colors: colors,
            pulse: pulse,
            orbit: orbit,
            size: 52,
            icon: Icons.auto_awesome_mosaic_rounded,
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'CREATOR TOOLKIT',
                  style: TextStyle(
                    color: NgmyHudInk.title(context),
                    fontWeight: FontWeight.w900,
                    fontSize: 20,
                    letterSpacing: 1.2,
                    shadows: [
                      Shadow(color: kNgmyStudioHubAccent.withValues(alpha: 0.5 + pulse * 0.3), blurRadius: 14),
                    ],
                  ),
                ),
                const SizedBox(height: 3),
                Text(
                  'Live studio · tools online',
                  style: TextStyle(
                    color: NgmyHudInk.subtitle(context, pulse: pulse),
                    fontWeight: FontWeight.w700,
                    fontSize: 12,
                    letterSpacing: 0.4,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _CreatorTool {
  const _CreatorTool({
    required this.icon,
    required this.colors,
    required this.title,
    required this.subtitle,
    required this.onTap,
  });

  final IconData icon;
  final List<Color> colors;
  final String title;
  final String subtitle;
  final VoidCallback onTap;
}

class _CreatorToolCard extends StatelessWidget {
  const _CreatorToolCard({
    required this.tool,
    required this.pulse,
    required this.scan,
    required this.orbit,
    required this.phase,
  });

  final _CreatorTool tool;
  final double pulse;
  final double scan;
  final double orbit;
  final double phase;

  @override
  Widget build(BuildContext context) {
    return SizedBox.expand(
      child: NgmyHudTechFrame(
        colors: tool.colors,
        pulse: pulse,
        scan: scan,
        orbit: orbit,
        phase: phase,
        onTap: tool.onTap,
        padding: const EdgeInsets.fromLTRB(12, 12, 12, 10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Expanded(
              child: Center(
                child: NgmyHudMiniOrb(
                  colors: tool.colors,
                  pulse: pulse,
                  orbit: (orbit + phase) % 1.0,
                  size: 72,
                  icon: tool.icon,
                ),
              ),
            ),
            Text(
              tool.title,
              textAlign: TextAlign.center,
              style: TextStyle(
                color: NgmyHudInk.title(context),
                fontWeight: FontWeight.w900,
                fontSize: 14,
                letterSpacing: 0.3,
              ),
            ),
            const SizedBox(height: 2),
            Text(
              tool.subtitle,
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                color: NgmyHudInk.subtitle(context),
                fontSize: 10.5,
                height: 1.25,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

void showNgmyStandaloneQuoteCalc(
  BuildContext context, {
  String userEmail = '',
  dynamic user,
  dynamic config,
  Future<bool> Function(double amount, String description)? onCharge,
  VoidCallback? onDataChanged,
}) {
  showDialog<void>(
    context: context,
    barrierColor: Colors.black87,
    builder: (_) => _StandaloneQuoteCalcDialog(
      userEmail: userEmail,
      user: user,
      config: config,
      onCharge: onCharge,
      onDataChanged: onDataChanged,
    ),
  );
}

class _StandaloneQuoteCalcDialog extends StatefulWidget {
  const _StandaloneQuoteCalcDialog({
    this.userEmail = '',
    this.user,
    this.config,
    this.onCharge,
    this.onDataChanged,
  });

  final String userEmail;
  final dynamic user;
  final dynamic config;
  final Future<bool> Function(double amount, String description)? onCharge;
  final VoidCallback? onDataChanged;

  @override
  State<_StandaloneQuoteCalcDialog> createState() => _StandaloneQuoteCalcDialogState();
}

class _StandaloneQuoteCalcDialogState extends State<_StandaloneQuoteCalcDialog> {
  final _cityC = TextEditingController();
  final _stateC = TextEditingController();
  final _serviceC = TextEditingController();
  final _othersPriceC = TextEditingController();
  final _myPriceC = TextEditingController();

  bool _triFast = false;
  bool _triCheap = true;
  bool _triGood = true;
  int _triDropCursor = 0;
  double _discount = 0;

  @override
  void dispose() {
    _cityC.dispose();
    _stateC.dispose();
    _serviceC.dispose();
    _othersPriceC.dispose();
    _myPriceC.dispose();
    super.dispose();
  }

  double _num(String raw) => double.tryParse(raw.trim()) ?? 0;

  void _triangleSetOn(String key, bool on) {
    switch (key) {
      case 'fast':
        _triFast = on;
      case 'cheap':
        _triCheap = on;
      case 'good':
        _triGood = on;
    }
  }

  String _nextTriangleDrop(Set<String> candidates) {
    const order = ['fast', 'cheap', 'good'];
    for (var i = 0; i < order.length; i++) {
      final idx = (_triDropCursor + i) % order.length;
      final key = order[idx];
      if (candidates.contains(key)) {
        _triDropCursor = (idx + 1) % order.length;
        return key;
      }
    }
    return candidates.first;
  }

  void _setTriangleOption(String key, bool value) {
    setState(() {
      if (!value) {
        _triangleSetOn(key, false);
        return;
      }
      final onKeys = <String>{
        if (_triFast) 'fast',
        if (_triCheap) 'cheap',
        if (_triGood) 'good',
      };
      if (onKeys.length >= 2 && !onKeys.contains(key)) {
        final dropCandidates = onKeys.difference({key});
        if (dropCandidates.isNotEmpty) {
          _triangleSetOn(dropCandidates.length == 1 ? dropCandidates.first : _nextTriangleDrop(dropCandidates), false);
        }
      }
      _triangleSetOn(key, true);
    });
  }

  String _triangleResult() {
    if (_triCheap && _triGood) return 'Cheap + Good = Not Fast — quality at low cost takes time.';
    if (_triFast && _triGood) return 'Fast + Good = Not Cheap — speed with quality costs more.';
    if (_triFast && _triCheap) return 'Fast + Cheap = Not Good — quick and affordable, but quality suffers.';
    return 'Pick any 2 options. The 3rd one turns off automatically.';
  }

  void _toast(String msg) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  @override
  Widget build(BuildContext context) {
    final others = _num(_othersPriceC.text);
    final mine = _num(_myPriceC.text);
    final netMine = mine - (mine * (_discount / 100));
    final discountAmt = mine - netMine;
    final belowMarket = others - netMine;
    final city = _cityC.text.trim();
    final service = _serviceC.text.trim();
    final showPriceResult = mine > 0 || others > 0;
    final dialogW = MediaQuery.of(context).size.width > 480 ? 400.0 : MediaQuery.of(context).size.width - 28;

    return Dialog(
      insetPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 20),
      backgroundColor: Colors.transparent,
      child: NgmyHudMotion(
        builder: (context, pulse, scan, orbit) {
          const colors = [Color(0xFF16A34A), Color(0xFF065F46)];
          return NgmyToolkitAlivePanel(
            colors: colors,
            pulse: pulse,
            scan: scan,
            orbit: orbit,
            width: dialogW,
            maxHeight: MediaQuery.of(context).size.height * 0.9,
            borderRadius: 18,
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(12, 4, 12, 12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  NgmyToolkitAliveHeader(
                    title: 'Quote Calc',
                    subtitle: 'Rates · triangle · invoices',
                    colors: colors,
                    pulse: pulse,
                    orbit: orbit,
                    icon: Icons.request_quote_rounded,
                    dense: true,
                    onClose: () => Navigator.pop(context),
                  ),
                  const SizedBox(height: 6),
                  NgmyToolkitAliveSection(
                    colors: colors,
                    pulse: pulse,
                    scan: scan,
                    orbit: orbit,
                    phase: 0.12,
                    child: NgmyIronTrianglePanel(
                      triFast: _triFast,
                      triCheap: _triCheap,
                      triGood: _triGood,
                      resultText: _triangleResult(),
                      onToggle: _setTriangleOption,
                    ),
                  ),
                  const SizedBox(height: 12),
                  NgmyToolkitAliveSection(
                    colors: const [Color(0xFF22C55E), Color(0xFF0EA5E9)],
                    pulse: pulse,
                    scan: scan,
                    orbit: orbit,
                    phase: 0.28,
                    child: NgmyPriceCalculatorPanel(
                      cityController: _cityC,
                      stateController: _stateC,
                      serviceController: _serviceC,
                      othersPriceController: _othersPriceC,
                      myPriceController: _myPriceC,
                      discount: _discount,
                      onDiscountChanged: (v) => setState(() => _discount = v),
                      onFieldChanged: () => setState(() {}),
                      city: city,
                      service: service,
                      others: others,
                      mine: mine,
                      netMine: netMine,
                      discountAmt: discountAmt,
                      belowMarket: belowMarket,
                      showPriceResult: showPriceResult,
                      onEstimateTap: () => _toast('Repair Estimate opens from NGMY Hub. Quote Calc is ready here.'),
                      onInvoiceTap: () => showNgmyStandaloneInvoiceTool(
                        context,
                        userEmail: widget.userEmail,
                        user: widget.user,
                        config: widget.config,
                        onCharge: widget.onCharge,
                        onDataChanged: widget.onDataChanged,
                        service: service,
                        amount: netMine > 0 ? netMine : mine,
                      ),
                      onScanTap: () => openNgmyPriceProductScanner(
                        context,
                        onApplyPrice: (name, price, type) {
                          if (name.isNotEmpty) _serviceC.text = name;
                          if (type.isNotEmpty && _serviceC.text.trim().isEmpty) _serviceC.text = type;
                          if (price > 0) _myPriceC.text = price.toStringAsFixed(2);
                          setState(() {});
                        },
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

void showNgmyStandaloneInvoiceTool(
  BuildContext context, {
  String userEmail = '',
  dynamic user,
  dynamic config,
  Future<bool> Function(double amount, String description)? onCharge,
  VoidCallback? onDataChanged,
  String service = '',
  double amount = 0,
}) {
  showNgmyInvoiceCreator(
    context,
    userEmail: userEmail,
    user: user,
    config: config,
    onCharge: onCharge,
    onDataChanged: onDataChanged,
    initialService: service,
    initialAmount: amount,
  );
}

class _HubGuestUser {
  const _HubGuestUser(this.email);
  final String email;
  bool get isAdmin => false;
}
