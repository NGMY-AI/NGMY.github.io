/// Every country a member can send money to: name, ISO code, phone calling code
/// (no +), and the local currency. Users only see the names; the rest is data.
class NgmyCountry {
  const NgmyCountry(
    this.name,
    this.iso,
    this.dialCode,
    this.currencyName,
    this.currencyCode, {
    this.aliases = const [],
  });

  final String name;
  final String iso;
  final String dialCode;
  final String currencyName;
  final String currencyCode;

  /// Other names people type (DRC, UK, Ivory Coast...). Used for search and matching.
  final List<String> aliases;
}

const List<NgmyCountry> kNgmyCountries = [
  // Africa
  NgmyCountry('Algeria', 'DZ', '213', 'Algerian Dinar', 'DZD'),
  NgmyCountry('Angola', 'AO', '244', 'Angolan Kwanza', 'AOA'),
  NgmyCountry('Benin', 'BJ', '229', 'West African CFA Franc', 'XOF'),
  NgmyCountry('Botswana', 'BW', '267', 'Botswana Pula', 'BWP'),
  NgmyCountry('Burkina Faso', 'BF', '226', 'West African CFA Franc', 'XOF'),
  NgmyCountry('Burundi', 'BI', '257', 'Burundian Franc', 'BIF'),
  NgmyCountry('Cameroon', 'CM', '237', 'Central African CFA Franc', 'XAF'),
  NgmyCountry('Cape Verde', 'CV', '238', 'Cape Verdean Escudo', 'CVE', aliases: ['Cabo Verde']),
  NgmyCountry('Central African Republic', 'CF', '236', 'Central African CFA Franc', 'XAF', aliases: ['CAR']),
  NgmyCountry('Chad', 'TD', '235', 'Central African CFA Franc', 'XAF'),
  NgmyCountry('Comoros', 'KM', '269', 'Comorian Franc', 'KMF'),
  NgmyCountry('DR Congo', 'CD', '243', 'Congolese Franc', 'CDF',
      aliases: ['Democratic Republic of the Congo', 'Democratic Republic of Congo', 'DRC', 'DRC Congo', 'Congo Kinshasa', 'Kinshasa']),
  NgmyCountry('Congo Republic', 'CG', '242', 'Central African CFA Franc', 'XAF',
      aliases: ['Republic of the Congo', 'Republic of Congo', 'Congo Brazzaville', 'Brazzaville']),
  NgmyCountry('Djibouti', 'DJ', '253', 'Djiboutian Franc', 'DJF'),
  NgmyCountry('Egypt', 'EG', '20', 'Egyptian Pound', 'EGP'),
  NgmyCountry('Equatorial Guinea', 'GQ', '240', 'Central African CFA Franc', 'XAF'),
  NgmyCountry('Eritrea', 'ER', '291', 'Eritrean Nakfa', 'ERN'),
  NgmyCountry('Eswatini', 'SZ', '268', 'Swazi Lilangeni', 'SZL', aliases: ['Swaziland']),
  NgmyCountry('Ethiopia', 'ET', '251', 'Ethiopian Birr', 'ETB'),
  NgmyCountry('Gabon', 'GA', '241', 'Central African CFA Franc', 'XAF'),
  NgmyCountry('Gambia', 'GM', '220', 'Gambian Dalasi', 'GMD', aliases: ['The Gambia']),
  NgmyCountry('Ghana', 'GH', '233', 'Ghanaian Cedi', 'GHS'),
  NgmyCountry('Guinea', 'GN', '224', 'Guinean Franc', 'GNF'),
  NgmyCountry('Guinea-Bissau', 'GW', '245', 'West African CFA Franc', 'XOF', aliases: ['Guinea Bissau']),
  NgmyCountry('Ivory Coast', 'CI', '225', 'West African CFA Franc', 'XOF', aliases: ["Cote d'Ivoire", "Côte d'Ivoire"]),
  NgmyCountry('Kenya', 'KE', '254', 'Kenyan Shilling', 'KES'),
  NgmyCountry('Lesotho', 'LS', '266', 'Lesotho Loti', 'LSL'),
  NgmyCountry('Liberia', 'LR', '231', 'Liberian Dollar', 'LRD'),
  NgmyCountry('Libya', 'LY', '218', 'Libyan Dinar', 'LYD'),
  NgmyCountry('Madagascar', 'MG', '261', 'Malagasy Ariary', 'MGA'),
  NgmyCountry('Malawi', 'MW', '265', 'Malawian Kwacha', 'MWK'),
  NgmyCountry('Mali', 'ML', '223', 'West African CFA Franc', 'XOF'),
  NgmyCountry('Mauritania', 'MR', '222', 'Mauritanian Ouguiya', 'MRU'),
  NgmyCountry('Mauritius', 'MU', '230', 'Mauritian Rupee', 'MUR'),
  NgmyCountry('Morocco', 'MA', '212', 'Moroccan Dirham', 'MAD'),
  NgmyCountry('Mozambique', 'MZ', '258', 'Mozambican Metical', 'MZN'),
  NgmyCountry('Namibia', 'NA', '264', 'Namibian Dollar', 'NAD'),
  NgmyCountry('Niger', 'NE', '227', 'West African CFA Franc', 'XOF'),
  NgmyCountry('Nigeria', 'NG', '234', 'Nigerian Naira', 'NGN'),
  NgmyCountry('Reunion', 'RE', '262', 'Euro', 'EUR', aliases: ['Réunion']),
  NgmyCountry('Rwanda', 'RW', '250', 'Rwandan Franc', 'RWF'),
  NgmyCountry('Sao Tome and Principe', 'ST', '239', 'Sao Tome Dobra', 'STN', aliases: ['Sao Tome']),
  NgmyCountry('Senegal', 'SN', '221', 'West African CFA Franc', 'XOF'),
  NgmyCountry('Seychelles', 'SC', '248', 'Seychellois Rupee', 'SCR'),
  NgmyCountry('Sierra Leone', 'SL', '232', 'Sierra Leonean Leone', 'SLE'),
  NgmyCountry('Somalia', 'SO', '252', 'Somali Shilling', 'SOS'),
  NgmyCountry('South Africa', 'ZA', '27', 'South African Rand', 'ZAR'),
  NgmyCountry('South Sudan', 'SS', '211', 'South Sudanese Pound', 'SSP'),
  NgmyCountry('Sudan', 'SD', '249', 'Sudanese Pound', 'SDG'),
  NgmyCountry('Tanzania', 'TZ', '255', 'Tanzanian Shilling', 'TZS'),
  NgmyCountry('Togo', 'TG', '228', 'West African CFA Franc', 'XOF'),
  NgmyCountry('Tunisia', 'TN', '216', 'Tunisian Dinar', 'TND'),
  NgmyCountry('Uganda', 'UG', '256', 'Ugandan Shilling', 'UGX'),
  NgmyCountry('Zambia', 'ZM', '260', 'Zambian Kwacha', 'ZMW'),
  NgmyCountry('Zimbabwe', 'ZW', '263', 'Zimbabwe Gold', 'ZWG'),
  // North and Central America, Caribbean
  NgmyCountry('United States', 'US', '1', 'US Dollar', 'USD', aliases: ['USA', 'US', 'America', 'United States of America']),
  NgmyCountry('Canada', 'CA', '1', 'Canadian Dollar', 'CAD'),
  NgmyCountry('Mexico', 'MX', '52', 'Mexican Peso', 'MXN'),
  NgmyCountry('Belize', 'BZ', '501', 'Belize Dollar', 'BZD'),
  NgmyCountry('Guatemala', 'GT', '502', 'Guatemalan Quetzal', 'GTQ'),
  NgmyCountry('El Salvador', 'SV', '503', 'US Dollar', 'USD'),
  NgmyCountry('Honduras', 'HN', '504', 'Honduran Lempira', 'HNL'),
  NgmyCountry('Nicaragua', 'NI', '505', 'Nicaraguan Cordoba', 'NIO'),
  NgmyCountry('Costa Rica', 'CR', '506', 'Costa Rican Colon', 'CRC'),
  NgmyCountry('Panama', 'PA', '507', 'Panamanian Balboa', 'PAB'),
  NgmyCountry('Cuba', 'CU', '53', 'Cuban Peso', 'CUP'),
  NgmyCountry('Haiti', 'HT', '509', 'Haitian Gourde', 'HTG'),
  NgmyCountry('Dominican Republic', 'DO', '1', 'Dominican Peso', 'DOP'),
  NgmyCountry('Jamaica', 'JM', '1', 'Jamaican Dollar', 'JMD'),
  NgmyCountry('Trinidad and Tobago', 'TT', '1', 'Trinidad and Tobago Dollar', 'TTD'),
  NgmyCountry('Bahamas', 'BS', '1', 'Bahamian Dollar', 'BSD'),
  NgmyCountry('Barbados', 'BB', '1', 'Barbadian Dollar', 'BBD'),
  NgmyCountry('Antigua and Barbuda', 'AG', '1', 'East Caribbean Dollar', 'XCD'),
  NgmyCountry('Dominica', 'DM', '1', 'East Caribbean Dollar', 'XCD'),
  NgmyCountry('Grenada', 'GD', '1', 'East Caribbean Dollar', 'XCD'),
  NgmyCountry('Saint Kitts and Nevis', 'KN', '1', 'East Caribbean Dollar', 'XCD'),
  NgmyCountry('Saint Lucia', 'LC', '1', 'East Caribbean Dollar', 'XCD'),
  NgmyCountry('Saint Vincent and the Grenadines', 'VC', '1', 'East Caribbean Dollar', 'XCD'),
  NgmyCountry('Puerto Rico', 'PR', '1', 'US Dollar', 'USD'),
  // South America
  NgmyCountry('Argentina', 'AR', '54', 'Argentine Peso', 'ARS'),
  NgmyCountry('Bolivia', 'BO', '591', 'Bolivian Boliviano', 'BOB'),
  NgmyCountry('Brazil', 'BR', '55', 'Brazilian Real', 'BRL'),
  NgmyCountry('Chile', 'CL', '56', 'Chilean Peso', 'CLP'),
  NgmyCountry('Colombia', 'CO', '57', 'Colombian Peso', 'COP'),
  NgmyCountry('Ecuador', 'EC', '593', 'US Dollar', 'USD'),
  NgmyCountry('Guyana', 'GY', '592', 'Guyanese Dollar', 'GYD'),
  NgmyCountry('Paraguay', 'PY', '595', 'Paraguayan Guarani', 'PYG'),
  NgmyCountry('Peru', 'PE', '51', 'Peruvian Sol', 'PEN'),
  NgmyCountry('Suriname', 'SR', '597', 'Surinamese Dollar', 'SRD'),
  NgmyCountry('Uruguay', 'UY', '598', 'Uruguayan Peso', 'UYU'),
  NgmyCountry('Venezuela', 'VE', '58', 'Venezuelan Bolivar', 'VES'),
  // Europe
  NgmyCountry('Albania', 'AL', '355', 'Albanian Lek', 'ALL'),
  NgmyCountry('Andorra', 'AD', '376', 'Euro', 'EUR'),
  NgmyCountry('Armenia', 'AM', '374', 'Armenian Dram', 'AMD'),
  NgmyCountry('Austria', 'AT', '43', 'Euro', 'EUR'),
  NgmyCountry('Azerbaijan', 'AZ', '994', 'Azerbaijani Manat', 'AZN'),
  NgmyCountry('Belarus', 'BY', '375', 'Belarusian Ruble', 'BYN'),
  NgmyCountry('Belgium', 'BE', '32', 'Euro', 'EUR'),
  NgmyCountry('Bosnia and Herzegovina', 'BA', '387', 'Convertible Mark', 'BAM', aliases: ['Bosnia']),
  NgmyCountry('Bulgaria', 'BG', '359', 'Euro', 'EUR'),
  NgmyCountry('Croatia', 'HR', '385', 'Euro', 'EUR'),
  NgmyCountry('Cyprus', 'CY', '357', 'Euro', 'EUR'),
  NgmyCountry('Czechia', 'CZ', '420', 'Czech Koruna', 'CZK', aliases: ['Czech Republic']),
  NgmyCountry('Denmark', 'DK', '45', 'Danish Krone', 'DKK'),
  NgmyCountry('Estonia', 'EE', '372', 'Euro', 'EUR'),
  NgmyCountry('Finland', 'FI', '358', 'Euro', 'EUR'),
  NgmyCountry('France', 'FR', '33', 'Euro', 'EUR'),
  NgmyCountry('Georgia', 'GE', '995', 'Georgian Lari', 'GEL'),
  NgmyCountry('Germany', 'DE', '49', 'Euro', 'EUR'),
  NgmyCountry('Greece', 'GR', '30', 'Euro', 'EUR'),
  NgmyCountry('Hungary', 'HU', '36', 'Hungarian Forint', 'HUF'),
  NgmyCountry('Iceland', 'IS', '354', 'Icelandic Krona', 'ISK'),
  NgmyCountry('Ireland', 'IE', '353', 'Euro', 'EUR'),
  NgmyCountry('Italy', 'IT', '39', 'Euro', 'EUR'),
  NgmyCountry('Kosovo', 'XK', '383', 'Euro', 'EUR'),
  NgmyCountry('Latvia', 'LV', '371', 'Euro', 'EUR'),
  NgmyCountry('Liechtenstein', 'LI', '423', 'Swiss Franc', 'CHF'),
  NgmyCountry('Lithuania', 'LT', '370', 'Euro', 'EUR'),
  NgmyCountry('Luxembourg', 'LU', '352', 'Euro', 'EUR'),
  NgmyCountry('Malta', 'MT', '356', 'Euro', 'EUR'),
  NgmyCountry('Moldova', 'MD', '373', 'Moldovan Leu', 'MDL'),
  NgmyCountry('Monaco', 'MC', '377', 'Euro', 'EUR'),
  NgmyCountry('Montenegro', 'ME', '382', 'Euro', 'EUR'),
  NgmyCountry('Netherlands', 'NL', '31', 'Euro', 'EUR', aliases: ['Holland']),
  NgmyCountry('North Macedonia', 'MK', '389', 'Macedonian Denar', 'MKD', aliases: ['Macedonia']),
  NgmyCountry('Norway', 'NO', '47', 'Norwegian Krone', 'NOK'),
  NgmyCountry('Poland', 'PL', '48', 'Polish Zloty', 'PLN'),
  NgmyCountry('Portugal', 'PT', '351', 'Euro', 'EUR'),
  NgmyCountry('Romania', 'RO', '40', 'Romanian Leu', 'RON'),
  NgmyCountry('Russia', 'RU', '7', 'Russian Ruble', 'RUB'),
  NgmyCountry('San Marino', 'SM', '378', 'Euro', 'EUR'),
  NgmyCountry('Serbia', 'RS', '381', 'Serbian Dinar', 'RSD'),
  NgmyCountry('Slovakia', 'SK', '421', 'Euro', 'EUR'),
  NgmyCountry('Slovenia', 'SI', '386', 'Euro', 'EUR'),
  NgmyCountry('Spain', 'ES', '34', 'Euro', 'EUR'),
  NgmyCountry('Sweden', 'SE', '46', 'Swedish Krona', 'SEK'),
  NgmyCountry('Switzerland', 'CH', '41', 'Swiss Franc', 'CHF'),
  NgmyCountry('Turkey', 'TR', '90', 'Turkish Lira', 'TRY', aliases: ['Turkiye', 'Türkiye']),
  NgmyCountry('Ukraine', 'UA', '380', 'Ukrainian Hryvnia', 'UAH'),
  NgmyCountry('United Kingdom', 'GB', '44', 'Pound Sterling', 'GBP', aliases: ['UK', 'England', 'Britain', 'Great Britain', 'Scotland', 'Wales']),
  NgmyCountry('Vatican City', 'VA', '379', 'Euro', 'EUR', aliases: ['Vatican']),
  // Middle East
  NgmyCountry('Bahrain', 'BH', '973', 'Bahraini Dinar', 'BHD'),
  NgmyCountry('Iran', 'IR', '98', 'Iranian Rial', 'IRR'),
  NgmyCountry('Iraq', 'IQ', '964', 'Iraqi Dinar', 'IQD'),
  NgmyCountry('Israel', 'IL', '972', 'Israeli Shekel', 'ILS'),
  NgmyCountry('Jordan', 'JO', '962', 'Jordanian Dinar', 'JOD'),
  NgmyCountry('Kuwait', 'KW', '965', 'Kuwaiti Dinar', 'KWD'),
  NgmyCountry('Lebanon', 'LB', '961', 'Lebanese Pound', 'LBP'),
  NgmyCountry('Oman', 'OM', '968', 'Omani Rial', 'OMR'),
  NgmyCountry('Palestine', 'PS', '970', 'Israeli Shekel', 'ILS'),
  NgmyCountry('Qatar', 'QA', '974', 'Qatari Riyal', 'QAR'),
  NgmyCountry('Saudi Arabia', 'SA', '966', 'Saudi Riyal', 'SAR'),
  NgmyCountry('Syria', 'SY', '963', 'Syrian Pound', 'SYP'),
  NgmyCountry('United Arab Emirates', 'AE', '971', 'UAE Dirham', 'AED', aliases: ['UAE', 'Dubai']),
  NgmyCountry('Yemen', 'YE', '967', 'Yemeni Rial', 'YER'),
  // Asia
  NgmyCountry('Afghanistan', 'AF', '93', 'Afghan Afghani', 'AFN'),
  NgmyCountry('Bangladesh', 'BD', '880', 'Bangladeshi Taka', 'BDT'),
  NgmyCountry('Bhutan', 'BT', '975', 'Bhutanese Ngultrum', 'BTN'),
  NgmyCountry('Brunei', 'BN', '673', 'Brunei Dollar', 'BND'),
  NgmyCountry('Cambodia', 'KH', '855', 'Cambodian Riel', 'KHR'),
  NgmyCountry('China', 'CN', '86', 'Chinese Yuan', 'CNY'),
  NgmyCountry('Hong Kong', 'HK', '852', 'Hong Kong Dollar', 'HKD'),
  NgmyCountry('India', 'IN', '91', 'Indian Rupee', 'INR'),
  NgmyCountry('Indonesia', 'ID', '62', 'Indonesian Rupiah', 'IDR'),
  NgmyCountry('Japan', 'JP', '81', 'Japanese Yen', 'JPY'),
  NgmyCountry('Kazakhstan', 'KZ', '7', 'Kazakhstani Tenge', 'KZT'),
  NgmyCountry('Kyrgyzstan', 'KG', '996', 'Kyrgyzstani Som', 'KGS'),
  NgmyCountry('Laos', 'LA', '856', 'Lao Kip', 'LAK'),
  NgmyCountry('Macau', 'MO', '853', 'Macanese Pataca', 'MOP'),
  NgmyCountry('Malaysia', 'MY', '60', 'Malaysian Ringgit', 'MYR'),
  NgmyCountry('Maldives', 'MV', '960', 'Maldivian Rufiyaa', 'MVR'),
  NgmyCountry('Mongolia', 'MN', '976', 'Mongolian Tugrik', 'MNT'),
  NgmyCountry('Myanmar', 'MM', '95', 'Myanmar Kyat', 'MMK', aliases: ['Burma']),
  NgmyCountry('Nepal', 'NP', '977', 'Nepalese Rupee', 'NPR'),
  NgmyCountry('North Korea', 'KP', '850', 'North Korean Won', 'KPW'),
  NgmyCountry('Pakistan', 'PK', '92', 'Pakistani Rupee', 'PKR'),
  NgmyCountry('Philippines', 'PH', '63', 'Philippine Peso', 'PHP'),
  NgmyCountry('Singapore', 'SG', '65', 'Singapore Dollar', 'SGD'),
  NgmyCountry('South Korea', 'KR', '82', 'South Korean Won', 'KRW', aliases: ['Korea']),
  NgmyCountry('Sri Lanka', 'LK', '94', 'Sri Lankan Rupee', 'LKR'),
  NgmyCountry('Taiwan', 'TW', '886', 'New Taiwan Dollar', 'TWD'),
  NgmyCountry('Tajikistan', 'TJ', '992', 'Tajikistani Somoni', 'TJS'),
  NgmyCountry('Thailand', 'TH', '66', 'Thai Baht', 'THB'),
  NgmyCountry('Timor-Leste', 'TL', '670', 'US Dollar', 'USD', aliases: ['East Timor']),
  NgmyCountry('Turkmenistan', 'TM', '993', 'Turkmenistani Manat', 'TMT'),
  NgmyCountry('Uzbekistan', 'UZ', '998', 'Uzbekistani Som', 'UZS'),
  NgmyCountry('Vietnam', 'VN', '84', 'Vietnamese Dong', 'VND'),
  // Oceania
  NgmyCountry('Australia', 'AU', '61', 'Australian Dollar', 'AUD'),
  NgmyCountry('Fiji', 'FJ', '679', 'Fijian Dollar', 'FJD'),
  NgmyCountry('Kiribati', 'KI', '686', 'Australian Dollar', 'AUD'),
  NgmyCountry('Marshall Islands', 'MH', '692', 'US Dollar', 'USD'),
  NgmyCountry('Micronesia', 'FM', '691', 'US Dollar', 'USD'),
  NgmyCountry('Nauru', 'NR', '674', 'Australian Dollar', 'AUD'),
  NgmyCountry('New Zealand', 'NZ', '64', 'New Zealand Dollar', 'NZD'),
  NgmyCountry('Palau', 'PW', '680', 'US Dollar', 'USD'),
  NgmyCountry('Papua New Guinea', 'PG', '675', 'Papua New Guinean Kina', 'PGK'),
  NgmyCountry('Samoa', 'WS', '685', 'Samoan Tala', 'WST'),
  NgmyCountry('Solomon Islands', 'SB', '677', 'Solomon Islands Dollar', 'SBD'),
  NgmyCountry('Tonga', 'TO', '676', 'Tongan Paanga', 'TOP'),
  NgmyCountry('Tuvalu', 'TV', '688', 'Australian Dollar', 'AUD'),
  NgmyCountry('Vanuatu', 'VU', '678', 'Vanuatu Vatu', 'VUV'),
];

String _norm(String s) => s.trim().toLowerCase().replaceAll('’', "'");

/// Countries sorted by name, for the dropdown.
List<NgmyCountry> get ngmyCountriesSorted =>
    [...kNgmyCountries]..sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));

/// The country whose name or alias is exactly [text] (any case), or null.
NgmyCountry? ngmyCountryByName(String text) {
  final t = _norm(text);
  if (t.isEmpty) return null;
  for (final c in kNgmyCountries) {
    if (_norm(c.name) == t) return c;
  }
  for (final c in kNgmyCountries) {
    if (c.aliases.any((a) => _norm(a) == t)) return c;
  }
  return null;
}

/// Live filter for the dropdown: names (or aliases) containing [query].
/// Empty query returns the full list.
List<NgmyCountry> ngmyFilterCountries(String query) {
  final all = ngmyCountriesSorted;
  final q = _norm(query);
  if (q.isEmpty) return all;
  final starts = <NgmyCountry>[];
  final contains = <NgmyCountry>[];
  for (final c in all) {
    final name = _norm(c.name);
    if (name.startsWith(q)) {
      starts.add(c);
    } else if (name.contains(q) || c.aliases.any((a) => _norm(a).contains(q))) {
      contains.add(c);
    }
  }
  return [...starts, ...contains];
}

/// Every country with calling code [dialCode] (no +).
List<NgmyCountry> ngmyCountriesForDialCode(String dialCode) =>
    kNgmyCountries.where((c) => c.dialCode == dialCode).toList();

/// The calling code typed at the start of a phone number.
///
/// Needs a leading + (or 00); without it nothing is detected. Calling codes never start
/// with another code, so the first 1 to 4 digits that match a code are the code.
/// Returns null when no code is typed yet or the digits match no code.
String? ngmyCallingCodeInPhone(String raw) {
  var t = raw.trim().replaceAll(RegExp(r'[\s\-().]'), '');
  if (t.startsWith('00')) {
    t = '+${t.substring(2)}';
  }
  if (!t.startsWith('+')) return null;
  final digits = t.substring(1).replaceAll(RegExp(r'[^\d]'), '');
  for (var len = 1; len <= 4 && len <= digits.length; len++) {
    final prefix = digits.substring(0, len);
    if (kNgmyCountries.any((c) => c.dialCode == prefix)) return prefix;
  }
  return null;
}

/// The country to auto-select for a typed recipient phone number.
///
/// Null when no calling code is typed yet, or when the code is shared by more than one
/// country (like +1 for the US, Canada and the Caribbean): then the user picks.
NgmyCountry? ngmyCountryForPhone(String raw) {
  final code = ngmyCallingCodeInPhone(raw);
  if (code == null) return null;
  final matches = ngmyCountriesForDialCode(code);
  return matches.length == 1 ? matches.first : null;
}
