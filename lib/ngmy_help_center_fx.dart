import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_countries.dart';
import 'ngmy_help_center_phone.dart';

/// Live USD rates (free, no key): the same source as the NGMY currency converter.
const String kNgmyFxRatesUrl = 'https://open.er-api.com/v6/latest/USD';

/// A saved copy is used for at most this long when a fresh fetch fails.
const Duration kNgmyFxMaxCacheAge = Duration(hours: 24);

/// NGMY pays a little under the live mid rate, like other transfer apps (about 1%).
/// The reduced rate is the one shown and used everywhere.
const double kNgmyFxMargin = 0.01;

/// The rate NGMY uses: live mid rate minus [kNgmyFxMargin].
double ngmyFxRateAfterMargin(double liveRate) => liveRate * (1 - kNgmyFxMargin);

const String _kFxCacheKey = 'ngmy_fx_usd_rates_v1';

/// Currencies normally used without cents: whole numbers with thousands separators.
const Set<String> kNgmyWholeNumberCurrencies = {
  'CDF', 'UGX', 'TZS', 'KES', 'RWF', 'BIF', 'SSP', 'SOS', 'GHS', 'NGN', 'XOF', 'XAF',
  'DJF', 'GNF', 'KMF', 'MGA', 'MWK', 'XPF', 'JPY', 'KRW', 'KPW', 'VND', 'LAK', 'KHR',
  'IDR', 'IRR', 'IQD', 'LBP', 'SYP', 'YER', 'UZS', 'MMK', 'PYG', 'CLP', 'COP', 'ISK', 'VUV',
};

/// USD rates and when the source last updated them.
class NgmyFxRates {
  const NgmyFxRates({required this.rates, required this.updatedAt, required this.fetchedAt});

  final Map<String, double> rates;
  final DateTime updatedAt;
  final DateTime fetchedAt;

  double? rateFor(String code) => rates[code.toUpperCase()];

  Map<String, dynamic> toJson() => {
        'rates': rates,
        'updatedAt': updatedAt.millisecondsSinceEpoch,
        'fetchedAt': fetchedAt.millisecondsSinceEpoch,
      };

  static NgmyFxRates? fromJson(Map<String, dynamic> j) {
    final raw = j['rates'];
    if (raw is! Map) return null;
    final rates = <String, double>{};
    raw.forEach((k, v) {
      if (v is num) rates[k.toString().toUpperCase()] = v.toDouble();
    });
    if (rates.isEmpty) return null;
    return NgmyFxRates(
      rates: rates,
      updatedAt: DateTime.fromMillisecondsSinceEpoch((j['updatedAt'] as num?)?.toInt() ?? 0),
      fetchedAt: DateTime.fromMillisecondsSinceEpoch((j['fetchedAt'] as num?)?.toInt() ?? 0),
    );
  }

  /// Reads the open.er-api.com answer.
  static NgmyFxRates? fromApi(Map<String, dynamic> j, {DateTime? now}) {
    if (j['result'] != 'success') return null;
    final raw = j['rates'];
    if (raw is! Map) return null;
    final rates = <String, double>{};
    raw.forEach((k, v) {
      if (v is num) rates[k.toString().toUpperCase()] = v.toDouble();
    });
    if (rates.isEmpty) return null;
    final unix = (j['time_last_update_unix'] as num?)?.toInt();
    final at = now ?? DateTime.now();
    return NgmyFxRates(
      rates: rates,
      updatedAt: unix == null ? at : DateTime.fromMillisecondsSinceEpoch(unix * 1000),
      fetchedAt: at,
    );
  }
}

NgmyFxRates? _memoryRates;

/// Fresh rates from the source; a saved copy no older than 24 hours if that fails; else null.
Future<NgmyFxRates?> ngmyLoadUsdRates({http.Client? client}) async {
  final now = DateTime.now();
  try {
    final c = client ?? http.Client();
    final res = await c.get(Uri.parse(kNgmyFxRatesUrl)).timeout(const Duration(seconds: 12));
    if (client == null) c.close();
    if (res.statusCode == 200) {
      final parsed = NgmyFxRates.fromApi(jsonDecode(res.body) as Map<String, dynamic>, now: now);
      if (parsed != null) {
        _memoryRates = parsed;
        try {
          final prefs = await SharedPreferences.getInstance();
          await prefs.setString(_kFxCacheKey, jsonEncode(parsed.toJson()));
        } catch (_) {}
        return parsed;
      }
    }
  } catch (_) {}
  var cached = _memoryRates;
  if (cached == null) {
    try {
      final prefs = await SharedPreferences.getInstance();
      final s = prefs.getString(_kFxCacheKey);
      if (s != null) cached = NgmyFxRates.fromJson(jsonDecode(s) as Map<String, dynamic>);
    } catch (_) {}
  }
  if (cached != null && ngmyFxCacheIsFresh(cached, now)) return cached;
  return null;
}

bool ngmyFxCacheIsFresh(NgmyFxRates r, DateTime now) =>
    !r.fetchedAt.isAfter(now) && now.difference(r.fetchedAt) <= kNgmyFxMaxCacheAge;

/// The recipient amount in local money: USD after all fees × rate.
double ngmyConvertUsd(double usdAfterFees, double rate) => usdAfterFees * rate;

String _groupThousands(String intDigits) {
  final buf = StringBuffer();
  for (var i = 0; i < intDigits.length; i++) {
    if (i > 0 && (intDigits.length - i) % 3 == 0) buf.write(',');
    buf.write(intDigits[i]);
  }
  return buf.toString();
}

/// 251400 TZS → "251,400"; 92.5 EUR → "92.50".
String ngmyFormatLocalAmount(double amount, String currencyCode) {
  final whole = kNgmyWholeNumberCurrencies.contains(currencyCode.toUpperCase());
  final neg = amount < 0;
  final fixed = amount.abs().toStringAsFixed(whole ? 0 : 2);
  final parts = fixed.split('.');
  final grouped = _groupThousands(parts[0]);
  final body = parts.length > 1 ? '$grouped.${parts[1]}' : grouped;
  return neg ? '-$body' : body;
}

/// The rate itself: "2,668.41" for big rates, "0.9125" for small ones.
String ngmyFormatRate(double rate) {
  if (rate >= 1) {
    final parts = rate.toStringAsFixed(2).split('.');
    return '${_groupThousands(parts[0])}.${parts[1]}';
  }
  return rate.toStringAsFixed(4);
}

const List<String> _kMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

String ngmyFormatFxDate(DateTime d) => '${_kMonths[d.month - 1]} ${d.day}, ${d.year}';

/// The destination country for whatever is in the country field: an exact name or alias,
/// or a known keyword (like DRC) whose calling code belongs to one country only.
NgmyCountry? ngmyHelpCenterCountryFor(String text) {
  final exact = ngmyCountryByName(text);
  if (exact != null) return exact;
  final code = ngmyHelpCenterDialCodeForCountry(text);
  if (code == null) return null;
  final matches = ngmyCountriesForDialCode(code);
  return matches.length == 1 ? matches.first : null;
}

/// The local-currency figure for one transfer, frozen at the moment it was made.
class NgmyFxQuote {
  const NgmyFxQuote({
    required this.currencyName,
    required this.currencyCode,
    required this.rate,
    required this.updatedAt,
  });

  final String currencyName;
  final String currencyCode;

  /// The rate used (live rate minus the NGMY margin). Null when it could not be loaded.
  final double? rate;
  final DateTime? updatedAt;

  static NgmyFxQuote? forCountry(NgmyCountry? country, NgmyFxRates? rates) {
    if (country == null) return null;
    final live = rates?.rateFor(country.currencyCode);
    return NgmyFxQuote(
      currencyName: country.currencyName,
      currencyCode: country.currencyCode,
      rate: live == null ? null : ngmyFxRateAfterMargin(live),
      updatedAt: rates?.updatedAt,
    );
  }

  bool get hasRate => rate != null && rate! > 0;

  String get rowLabel => 'They receive';

  /// "251,400 TZS" or "rate unavailable right now".
  String valueFor(double usdAfterFees) {
    if (!hasRate) return 'rate unavailable right now';
    return '${ngmyFormatLocalAmount(ngmyConvertUsd(usdAfterFees, rate!), currencyCode)} $currencyCode';
  }

  /// "Rate used: 1 USD = 2,668.41 TZS · updated Nov 25, 2026".
  String? get rateLine {
    if (!hasRate) return null;
    final when = updatedAt == null ? '' : ' · updated ${ngmyFormatFxDate(updatedAt!)}';
    return 'Rate used: 1 USD = ${ngmyFormatRate(rate!)} $currencyCode$when';
  }
}
