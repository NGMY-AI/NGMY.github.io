import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_countries.dart';
import 'package:ngmy/ngmy_help_center_fx.dart';
import 'package:ngmy/ngmy_help_center_phone.dart';
import 'package:ngmy/ngmy_help_center_send_money_receipt.dart';

void main() {
  group('calling code detection', () {
    test('known codes pick the country', () {
      expect(ngmyCountryForPhone('+255 712 345678')?.name, 'Tanzania');
      expect(ngmyCountryForPhone('+243812345678')?.name, 'DR Congo');
      expect(ngmyCountryForPhone('+254')?.name, 'Kenya');
      expect(ngmyCountryForPhone('+256 7')?.name, 'Uganda');
      expect(ngmyCountryForPhone('+250')?.name, 'Rwanda');
      expect(ngmyCountryForPhone('+27 82')?.name, 'South Africa');
      expect(ngmyCountryForPhone('+44 7700')?.name, 'United Kingdom');
    });

    test('no code typed yet selects nothing', () {
      expect(ngmyCountryForPhone(''), isNull);
      expect(ngmyCountryForPhone('712 345678'), isNull);
      expect(ngmyCountryForPhone('+'), isNull);
      expect(ngmyCountryForPhone('+2'), isNull);
      expect(ngmyCountryForPhone('+25'), isNull);
    });

    test('shared codes are never guessed', () {
      expect(ngmyCallingCodeInPhone('+1 416 555'), '1');
      expect(ngmyCountryForPhone('+1 416 555 0100'), isNull);
      expect(ngmyCountryForPhone('+7 701'), isNull);
    });

    test('calling codes never overlap and every country has full data', () {
      final codes = kNgmyCountries.map((c) => c.dialCode).toSet();
      for (final a in codes) {
        for (final b in codes) {
          if (a != b) expect(b.startsWith(a), isFalse, reason: '$a is a prefix of $b');
        }
      }
      final isos = <String>{};
      for (final c in kNgmyCountries) {
        expect(c.name, isNotEmpty);
        expect(c.iso.length, 2);
        expect(isos.add(c.iso), isTrue, reason: 'duplicate ${c.iso}');
        expect(c.currencyName, isNotEmpty);
        expect(c.currencyCode.length, 3);
      }
      expect(kNgmyCountries.length, greaterThan(190));
    });

    test('receiver phone formatter keeps a typed calling code', () {
      const f = NgmyHelpCenterReceiverLocalFormatter();
      String fmt(String t) => f.formatEditUpdate(TextEditingValue.empty, TextEditingValue(text: t)).text;
      expect(fmt('+243 81'), '+24381');
      expect(fmt('0712345678'), '712 345678');
    });
  });

  group('country list', () {
    test('typing filters live', () {
      expect(ngmyFilterCountries('tan').map((c) => c.name), contains('Tanzania'));
      final congo = ngmyFilterCountries('congo').map((c) => c.name).toList();
      expect(congo, containsAll(['DR Congo', 'Congo Republic']));
      expect(ngmyFilterCountries('').length, kNgmyCountries.length);
    });

    test('names map to the right calling code and currency', () {
      expect(ngmyHelpCenterDialCodeForCountry('DR Congo'), '243');
      expect(ngmyHelpCenterDialCodeForCountry('Congo Republic'), '242');
      expect(ngmyHelpCenterDialCodeForCountry('Nicaragua'), '505');
      expect(ngmyHelpCenterDialCodeForCountry('Papua New Guinea'), '675');
      expect(ngmyHelpCenterCountryFor('DRC')?.currencyCode, 'CDF');
      expect(ngmyHelpCenterCountryFor('Tanzania')?.currencyCode, 'TZS');
      expect(ngmyHelpCenterCountryFor('Atlantis'), isNull);
    });
  });

  group('rounding', () {
    test('whole-number currencies get thousands separators and no cents', () {
      expect(ngmyFormatLocalAmount(251400.4, 'TZS'), '251,400');
      expect(ngmyFormatLocalAmount(229959.1066, 'CDF'), '229,959');
      expect(ngmyFormatLocalAmount(1234567.5, 'UGX'), '1,234,568');
      expect(ngmyFormatLocalAmount(999.4, 'KES'), '999');
      for (final code in ['CDF', 'UGX', 'TZS', 'KES', 'RWF', 'BIF', 'SSP', 'SOS', 'GHS', 'NGN', 'XOF', 'XAF']) {
        expect(kNgmyWholeNumberCurrencies, contains(code));
      }
    });

    test('other currencies get 2 decimals', () {
      expect(ngmyFormatLocalAmount(91.245, 'EUR'), '91.25');
      expect(ngmyFormatLocalAmount(1234.5, 'ZAR'), '1,234.50');
      expect(ngmyFormatLocalAmount(0, 'GBP'), '0.00');
    });
  });

  group('conversion', () {
    final rates = NgmyFxRates(
      rates: const {'TZS': 2514.0, 'CDF': 2299.591066, 'EUR': 0.91246},
      updatedAt: DateTime(2026, 11, 25),
      fetchedAt: DateTime(2026, 11, 25, 8),
    );

    test('uses the after-fee USD amount times the live rate minus the NGMY margin', () {
      final tz = NgmyFxQuote.forCountry(ngmyCountryByName('Tanzania'), rates)!;
      expect(kNgmyFxMargin, 0.01);
      expect(tz.rowLabel, 'They receive');
      expect(tz.valueFor(100), '248,886 TZS');
      expect(tz.rateLine, 'Rate used: 1 USD = 2,488.86 TZS · updated Nov 25, 2026');
      final eu = NgmyFxQuote.forCountry(ngmyCountryByName('France'), rates)!;
      expect(eu.valueFor(93), '84.01 EUR');
      expect(eu.rateLine, startsWith('Rate used: 1 USD = 0.9033 EUR ·'));
    });

    test('no rate shows rate unavailable, never a number', () {
      final q = NgmyFxQuote.forCountry(ngmyCountryByName('DR Congo'), null)!;
      expect(q.rowLabel, 'They receive');
      expect(q.valueFor(100), 'rate unavailable right now');
      expect(q.rateLine, isNull);
    });

    test('receipt converts the after-fee amount with the rate at transfer time', () {
      final r = NgmyHelpCenterSendMoneyReceipt.fromForm(
        reference: 'X1',
        senderName: 'A',
        senderPhone: '1',
        senderEmail: '',
        receiverName: 'B',
        receiverPhone: '+243 812 345678',
        receiverCountry: 'DR Congo',
        transferAmountText: '100',
        fx: NgmyFxQuote.forCountry(ngmyCountryByName('DR Congo'), rates),
      );
      final expected = ngmyFormatLocalAmount(r.recipientGets * 2299.591066 * 0.99, 'CDF');
      expect(r.recipientGets, lessThan(100));
      expect(r.localCurrencyLabel, 'They receive');
      expect(r.localCurrencyValue, '$expected CDF');
      expect(r.toShareText(), contains('They receive: $expected CDF'));
    });

    test('cache is used for at most 24 hours', () {
      final now = DateTime(2026, 11, 26, 7);
      expect(ngmyFxCacheIsFresh(rates, now), isTrue);
      expect(ngmyFxCacheIsFresh(rates, DateTime(2026, 11, 26, 9)), isFalse);
    });

    test('reads the open.er-api.com answer', () {
      final r = NgmyFxRates.fromApi({
        'result': 'success',
        'time_last_update_unix': 1795564951,
        'rates': {'USD': 1, 'TZS': 2668.414979},
      })!;
      expect(r.rateFor('tzs'), 2668.414979);
      expect(NgmyFxRates.fromApi({'result': 'error'}), isNull);
    });
  });
}
