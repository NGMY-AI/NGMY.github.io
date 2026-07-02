import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import 'ngmy_business_card_models.dart';
import 'ngmy_business_card_studio.dart';

/// Scroll padding so list content can pass behind the floating bottom nav.
double ngmyMarketHubBottomPadding(BuildContext context) {
  return 110 + MediaQuery.paddingOf(context).bottom;
}

/// NGMY Market Hub — 4 framed sections: Business Cards, Live Trading, Market Search, Saved Cards.
class NgmyMarketHubScreen extends StatefulWidget {
  const NgmyMarketHubScreen({
    super.key,
    required this.userEmail,
    this.username = '',
  });

  final String userEmail;
  final String username;

  @override
  State<NgmyMarketHubScreen> createState() => _NgmyMarketHubScreenState();
}

class _NgmyMarketHubScreenState extends State<NgmyMarketHubScreen> {
  static const String _alphaVantageKey = 'EWBJQBP572GSBOBK';
  static const List<String> _defaultSymbols = ['SPY', 'AAPL', 'TSLA', 'NVDA'];

  final _symbolCtrl = TextEditingController(text: 'AAPL');
  final _cardStudioKey = GlobalKey<NgmyBusinessCardStudioState>();
  NgmyBusinessCardDocument? _activeCard;

  final List<NgmyMarketQuote> _quotes = [];
  bool _marketLoading = false;
  String? _marketError;
  DateTime? _marketUpdatedAt;

  @override
  void initState() {
    super.initState();
    unawaited(_loadMarketQuotes(_defaultSymbols));
  }

  @override
  void dispose() {
    _symbolCtrl.dispose();
    super.dispose();
  }

  Future<void> _loadMarketQuotes(List<String> symbols) async {
    final cleanSymbols = symbols
        .map((s) => s.trim().toUpperCase())
        .where((s) => s.isNotEmpty)
        .toSet()
        .take(5)
        .toList();
    if (cleanSymbols.isEmpty) return;
    setState(() {
      _marketLoading = true;
      _marketError = null;
    });
    try {
      final loaded = <NgmyMarketQuote>[];
      for (final symbol in cleanSymbols) {
        final quote = await _fetchMarketQuote(symbol);
        if (quote != null) loaded.add(quote);
      }
      if (!mounted) return;
      setState(() {
        if (loaded.isNotEmpty) {
          _quotes
            ..clear()
            ..addAll(loaded);
          _marketUpdatedAt = DateTime.now();
        }
        _marketError = loaded.isEmpty ? 'No market quote came back. Try a different symbol.' : null;
        _marketLoading = false;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _marketError = 'Market data could not load right now.';
        _marketLoading = false;
      });
    }
  }

  Future<NgmyMarketQuote?> _fetchMarketQuote(String symbol) async {
    final uri = Uri.https('www.alphavantage.co', '/query', {
      'function': 'GLOBAL_QUOTE',
      'symbol': symbol,
      'apikey': _alphaVantageKey,
    });
    final res = await http.get(uri).timeout(const Duration(seconds: 12));
    if (res.statusCode != 200) return null;
    final data = jsonDecode(res.body);
    if (data is! Map<String, dynamic>) return null;
    final raw = data['Global Quote'];
    if (raw is! Map) return null;
    return NgmyMarketQuote.fromAlpha(Map<String, dynamic>.from(raw));
  }

  void _searchMarketSymbol() {
    final symbol = _symbolCtrl.text.trim().toUpperCase();
    if (symbol.isEmpty) return;
    unawaited(_loadMarketQuotes([symbol, ..._defaultSymbols.where((s) => s != symbol)]));
  }

  void _openSavedCard(NgmyBusinessCardDocument doc) {
    setState(() => _activeCard = doc);
    _cardStudioKey.currentState?.loadDocument(doc);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Card loaded in Business Card Studio (Frame 1).')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final bottomPad = ngmyMarketHubBottomPadding(context);
    final top = _quotes.isNotEmpty ? _quotes.first : null;
    return Scaffold(
      backgroundColor: const Color(0xFF05070C),
      body: SafeArea(
        bottom: false,
        child: SingleChildScrollView(
          padding: EdgeInsets.fromLTRB(16, 12, 16, bottomPad),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _hubHero(top),
              const SizedBox(height: 16),
              _hubFrame(
                index: 1,
                title: 'Business Card Studio',
                subtitle: '20+ pro templates · drag to move · save & download',
                icon: Icons.badge_rounded,
                colors: const [Color(0xFF0B1020), Color(0xFF312E81), Color(0xFF065F46)],
                accent: const Color(0xFF22C55E),
                child: NgmyBusinessCardStudio(
                  key: _cardStudioKey,
                  userEmail: widget.userEmail,
                  compact: true,
                  initialDocument: _activeCard,
                  onDocumentChanged: (d) => _activeCard = d,
                ),
              ),
              const SizedBox(height: 14),
              _hubFrame(
                index: 2,
                title: 'Live Trading Dashboard',
                subtitle: 'Real-time watchlist powered by Alpha Vantage',
                icon: Icons.candlestick_chart_rounded,
                colors: const [Color(0xFF0B1020), Color(0xFF111827), Color(0xFF064E3B)],
                accent: const Color(0xFF22C55E),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    if (top != null) ...[
                      Text(top.symbol, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 13)),
                      Text('\$${top.price.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 32)),
                      _changePill(top),
                      const SizedBox(height: 10),
                    ],
                    _overviewRow(),
                    const SizedBox(height: 12),
                    if (_marketError != null && _quotes.isEmpty)
                      Text(_marketError!, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700))
                    else if (_marketLoading && _quotes.isEmpty)
                      const Center(child: Padding(padding: EdgeInsets.all(24), child: CircularProgressIndicator(color: Color(0xFF22C55E))))
                    else
                      ..._quotes.map(_quoteTile),
                  ],
                ),
              ),
              const SizedBox(height: 14),
              _hubFrame(
                index: 3,
                title: 'Market Search & Pulse',
                subtitle: 'Look up symbols and refresh your watchlist',
                icon: Icons.search_rounded,
                colors: const [Color(0xFF0B1020), Color(0xFF1E3A5F), Color(0xFF0F172A)],
                accent: const Color(0xFF38BDF8),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Row(
                      children: [
                        Expanded(
                          child: TextField(
                            controller: _symbolCtrl,
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
                            textCapitalization: TextCapitalization.characters,
                            decoration: InputDecoration(
                              hintText: 'Search symbol, ex: AAPL',
                              hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35)),
                              prefixIcon: const Icon(Icons.search_rounded, color: Color(0xFF38BDF8)),
                              filled: true,
                              fillColor: const Color(0xFF05070C),
                              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                            ),
                            onSubmitted: (_) => _searchMarketSymbol(),
                          ),
                        ),
                        const SizedBox(width: 8),
                        FilledButton(
                          onPressed: _marketLoading ? null : _searchMarketSymbol,
                          style: FilledButton.styleFrom(
                            backgroundColor: const Color(0xFF38BDF8),
                            foregroundColor: Colors.black,
                            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
                          ),
                          child: _marketLoading
                              ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.black))
                              : const Icon(Icons.arrow_forward_rounded),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: _defaultSymbols
                          .map(
                            (s) => ActionChip(
                              label: Text(s, style: const TextStyle(fontWeight: FontWeight.w800)),
                              backgroundColor: const Color(0xFF05070C),
                              side: BorderSide(color: Colors.white.withValues(alpha: 0.12)),
                              onPressed: () {
                                _symbolCtrl.text = s;
                                _searchMarketSymbol();
                              },
                            ),
                          )
                          .toList(),
                    ),
                    if (_marketUpdatedAt != null) ...[
                      const SizedBox(height: 10),
                      Text(
                        'Last updated ${_timestamp(_marketUpdatedAt!)}',
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11, fontWeight: FontWeight.w700),
                      ),
                    ],
                  ],
                ),
              ),
              const SizedBox(height: 14),
              _hubFrame(
                index: 4,
                title: 'My Saved Business Cards',
                subtitle: 'Cards stored on this device — open to edit in Frame 1',
                icon: Icons.folder_special_rounded,
                colors: const [Color(0xFF0B1020), Color(0xFF3B0764), Color(0xFF134E4A)],
                accent: const Color(0xFFA78BFA),
                child: NgmyBusinessCardGallery(
                  userEmail: widget.userEmail,
                  onOpen: _openSavedCard,
                ),
              ),
              const SizedBox(height: 12),
              Text(
                'Market data by Alpha Vantage. Quotes may be delayed. Business cards are saved locally on your device.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.42), fontSize: 11, height: 1.35),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _hubHero(NgmyMarketQuote? top) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(30),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF0B1020), Color(0xFF111827), Color(0xFF064E3B)],
        ),
        border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: 0.28)),
        boxShadow: [BoxShadow(color: const Color(0xFF22C55E).withValues(alpha: 0.16), blurRadius: 30, offset: const Offset(0, 16))],
      ),
      child: Stack(
        children: [
          Positioned(right: -26, top: -28, child: Icon(Icons.hub_rounded, color: Colors.white.withValues(alpha: 0.08), size: 150)),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    width: 48,
                    height: 48,
                    decoration: BoxDecoration(color: const Color(0xFF22C55E), borderRadius: BorderRadius.circular(16)),
                    child: const Icon(Icons.dashboard_customize_rounded, color: Colors.black, size: 26),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('NGMY MARKET HUB', style: TextStyle(color: const Color(0xFF86EFAC), fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 1.1)),
                        const SizedBox(height: 2),
                        Text('Creators + Live Markets', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 14),
              Text(
                widget.username.trim().isEmpty ? 'Design business cards and track live markets in one hub.' : 'Welcome ${widget.username.trim()} — 4 frames below: cards, trading, search, saved.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.68), fontSize: 12, height: 1.35, fontWeight: FontWeight.w600),
              ),
              if (top != null) ...[
                const SizedBox(height: 12),
                Row(
                  children: [
                    Text('Top mover: ${top.symbol} ', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11)),
                    _changePill(top),
                  ],
                ),
              ],
            ],
          ),
        ],
      ),
    );
  }

  Widget _hubFrame({
    required int index,
    required String title,
    required String subtitle,
    required IconData icon,
    required List<Color> colors,
    required Color accent,
    required Widget child,
  }) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: colors),
        border: Border.all(color: accent.withValues(alpha: 0.28)),
        boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.12), blurRadius: 22, offset: const Offset(0, 10))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(color: accent.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(14)),
                child: Icon(icon, color: accent, size: 22),
              ),
              const SizedBox(width: 10),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(8)),
                child: Text('FRAME $index', style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1)),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                    Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.52), fontSize: 10, height: 1.2)),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),
          child,
        ],
      ),
    );
  }

  Widget _overviewRow() {
    final gainers = _quotes.where((q) => q.change >= 0).length;
    final losers = _quotes.where((q) => q.change < 0).length;
    return Row(
      children: [
        Expanded(child: _miniStat('Watching', '${_quotes.length}', Icons.remove_red_eye_rounded, const Color(0xFF38BDF8))),
        const SizedBox(width: 8),
        Expanded(child: _miniStat('Green', '$gainers', Icons.trending_up_rounded, const Color(0xFF22C55E))),
        const SizedBox(width: 8),
        Expanded(child: _miniStat('Red', '$losers', Icons.trending_down_rounded, const Color(0xFFEF4444))),
      ],
    );
  }

  Widget _miniStat(String label, String value, IconData icon, Color color) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFF05070C),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: color.withValues(alpha: 0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: color, size: 18),
          const SizedBox(height: 8),
          Text(value, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
          Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.52), fontWeight: FontWeight.w700, fontSize: 10)),
        ],
      ),
    );
  }

  Widget _quoteTile(NgmyMarketQuote quote) {
    final positive = quote.change >= 0;
    final color = positive ? const Color(0xFF22C55E) : const Color(0xFFEF4444);
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFF05070C),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
      ),
      child: Row(
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(color: color.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
            child: Icon(positive ? Icons.arrow_upward_rounded : Icons.arrow_downward_rounded, color: color, size: 20),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(quote.symbol, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                Text('Open \$${quote.open.toStringAsFixed(2)} • Vol ${quote.volumeLabel}', style: TextStyle(color: Colors.white.withValues(alpha: 0.52), fontSize: 10)),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text('\$${quote.price.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
              _changePill(quote),
            ],
          ),
        ],
      ),
    );
  }

  Widget _changePill(NgmyMarketQuote quote) {
    final positive = quote.change >= 0;
    final color = positive ? const Color(0xFF22C55E) : const Color(0xFFEF4444);
    return Container(
      margin: const EdgeInsets.only(top: 4),
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(color: color.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(999)),
      child: Text(
        '${positive ? '+' : ''}${quote.change.toStringAsFixed(2)} (${quote.changePercent})',
        style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 10),
      ),
    );
  }

  String _timestamp(DateTime date) {
    final d = date.isUtc ? date.toLocal() : date;
    final hour12 = d.hour == 0 ? 12 : (d.hour > 12 ? d.hour - 12 : d.hour);
    final minute = d.minute.toString().padLeft(2, '0');
    final ampm = d.hour >= 12 ? 'PM' : 'AM';
    return '$hour12:$minute $ampm';
  }
}

class NgmyMarketQuote {
  const NgmyMarketQuote({
    required this.symbol,
    required this.open,
    required this.price,
    required this.change,
    required this.changePercent,
    required this.volume,
  });

  final String symbol;
  final double open;
  final double price;
  final double change;
  final String changePercent;
  final int volume;

  String get volumeLabel {
    if (volume >= 1000000000) return '${(volume / 1000000000).toStringAsFixed(1)}B';
    if (volume >= 1000000) return '${(volume / 1000000).toStringAsFixed(1)}M';
    if (volume >= 1000) return '${(volume / 1000).toStringAsFixed(1)}K';
    return volume.toString();
  }

  factory NgmyMarketQuote.fromAlpha(Map<String, dynamic> json) {
    double parseDouble(String key) => double.tryParse((json[key] ?? '0').toString().replaceAll('%', '')) ?? 0;
    int parseInt(String key) => int.tryParse((json[key] ?? '0').toString()) ?? 0;
    return NgmyMarketQuote(
      symbol: (json['01. symbol'] ?? '').toString().trim().toUpperCase(),
      open: parseDouble('02. open'),
      price: parseDouble('05. price'),
      volume: parseInt('06. volume'),
      change: parseDouble('09. change'),
      changePercent: (json['10. change percent'] ?? '0%').toString(),
    );
  }
}
