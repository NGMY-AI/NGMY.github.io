import 'package:flutter/material.dart';

/// Visual cue for a Swahili/English lesson word — always a real photograph.
class SwahiliWordVisual {
  const SwahiliWordVisual({
    required this.imageUrl,
    this.caption,
    this.gradient = const [Color(0xFFE2E8F0), Color(0xFFCBD5E1)],
  });

  final String imageUrl;
  final String? caption;
  final List<Color> gradient;
}

/// Sharp Unsplash crop — no tiny/blurry thumbs.
String ngmySwahiliPhoto(String photoId, {int w = 960, int h = 720}) {
  return 'https://images.unsplash.com/$photoId?w=$w&h=$h&fit=crop&q=92&auto=format&dpr=2';
}

/// Full-body portrait crop — use for tall / short so height is visible, not a face close-up.
String ngmySwahiliPhotoBody(String photoId) {
  return 'https://images.unsplash.com/$photoId?w=720&h=1080&fit=crop&crop=entropy&q=92&auto=format&dpr=2';
}

String _normSw(String s) => s.toLowerCase().replaceAll(RegExp(r'\s+'), ' ').trim();

/// Strip punctuation so "Habari?" matches "habari".
String _normSwKey(String s) => _normSw(s).replaceAll(RegExp(r"[!?.,'""''`…]"), '').trim();

/// Exact Swahili phrase → accurate photo (checked before fuzzy keywords).
final Map<String, SwahiliWordVisual> _kExactBySwahili = {
  // Day 1 — people & descriptions (every photo below has been downloaded and visually verified to match its word)
  'mimi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1600603406200-5b2a104684ac'), caption: 'I / me'),
  'wewe / ninyi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1502663656924-a7163d645e0c'), caption: 'You — pointing at you'),
  'wewe': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1502663656924-a7163d645e0c'), caption: 'You'),
  'yeye': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1583264277168-58ceba4b84e7'), caption: 'He / she'),
  'sisi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1543807535-eceef0bc6599'), caption: 'We / us'),
  'yeye ni mrefu': SwahiliWordVisual(imageUrl: ngmySwahiliPhotoBody('photo-1563176137-45a7f3917371'), caption: 'Tall — noticeably taller'),
  'yeye ni mfupi': SwahiliWordVisual(imageUrl: ngmySwahiliPhotoBody('photo-1660489744575-81ab10cf06b7'), caption: 'Short — the shorter one'),
  'yeye ni wangu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1525206809752-65312b959c88'), caption: 'Mine — close and loving'),
  'yeye ni daktari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758691463384-771db2f192b3'), caption: 'Doctor'),
  'yeye ni maarufu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1691071666279-58adb714d0b8'), caption: 'Famous — red carpet crowd'),
  'wana furaha': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1582298538104-fe2e74c27f59'), caption: 'They are happy'),
  'nina furaha': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1572707691993-29c96332f6be'), caption: 'I am happy — big smile'),
  'tuko hapa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1506869640319-fe1a24fd76dc'), caption: 'We are here'),

  // Day 2 — having things
  'nina rafiki': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524601500432-1e1a4c71d692'), caption: 'Friend'),
  'nina tatizo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1493836512294-502baa1986e2'), caption: 'Problem'),
  'nina simu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1592890288564-76628a30a657'), caption: 'Phone'),
  'nina gari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1580446623001-3abf670c5c55'), caption: 'Car'),
  'nina mtoto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1557176278-3326a3193580'), caption: 'Child'),
  'nina yai': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1536816579748-4ecb3f03d72a'), caption: 'Egg'),
  'nina habari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1495020689067-958852a7765e'), caption: 'News'),
  'nina nyumba': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1672266353368-7df4d6d963de'), caption: 'House'),
  'nina matunda': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519996529931-28324d5a630e'), caption: 'Fruits'),
  'nina mpango': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1583162814461-3879bd80fd77'), caption: 'Plan'),
  'sina wazo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1702065612691-877a245777ad'), caption: 'No idea'),
  'nina swali': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758270704286-83476deb3bd1'), caption: 'Question'),
  'nina kila kitu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1768751947109-d2a99be1aa9c'), caption: 'Everything'),

  // Day 3 — feelings & place
  'niko hapa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1776883591149-e93c3027c51f'), caption: 'I am here'),
  'niko nyumbani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1690681737765-87873d223aff'), caption: 'At home'),
  'ninaumwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1655506207889-4f130f49797f'), caption: 'Sick'),
  'nimechoka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1554188572-9d184b57d8e2'), caption: 'Tired'),
  'ninapika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1556911220-e15b29be8c8f'), caption: 'Cooking'),
  'ninajaribu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517836357463-d25dfeac3438'), caption: 'Trying'),
  'niko na wewe': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1541089404510-5c9a779841fc'), caption: 'With you'),
  'nimeoa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1612883833766-7930d960e16f'), caption: 'Married'),
  'mimi ni mtoto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1678923685297-0ade9816275e'), caption: 'I am a child'),
  'mimi ni mrembo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1494790108377-be9c29b29330'), caption: 'Beautiful'),
  'mimi ni mtanashati': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1618886614638-80e3c103d31a'), caption: 'Handsome'),
  'sijambo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1632144130358-6cfeed023e27'), caption: 'I am fine'),

  // English Pictures — screenshot phrases
  'unaenda wapi?': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1762351934738-2af558786537'), caption: 'Where going?'),
  'ninarudi nyumbani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1778502802065-d24cd36b5731'), caption: 'Going home'),
  'niko kazini sasa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507206130118-b5907f817163'), caption: 'At work now'),
  'niko shuleni': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1561089489-f13d5e730d72'), caption: 'At school'),
  'leo nina shughuli nyingi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586473219010-2ffc57b0d282'), caption: 'Busy today'),
  'kesho nitapumzika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1489275259429-70f6ef5705c1'), caption: 'Rest tomorrow'),
  'hii ni muhimu sana': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1622768766607-922825162edc'), caption: 'Very important'),
  'usisahau hilo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1697142985510-86fa2ea314d9'), caption: "Don't forget"),
  'nimekumbuka sasa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552862750-746b8f6f7f25'), caption: 'Remember now'),
  'nilisahau kabisa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1639600281360-2c158cb8391a'), caption: 'Forgot completely'),
  'hiyo ni wazo zuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1493612276216-ee3925520721'), caption: 'Good idea'),
  'ninahitaji msaada': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586726370832-3440a511e479'), caption: 'Need help'),
  'chai ni moto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544787219-7f47ccb76574'), caption: 'Hot tea'),
  'maji ni baridi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1578125468943-b963a1daa385'), caption: 'Cold water'),
  'tembo ni kubwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1557050543-4d5f4e07ef46'), caption: 'Big elephant'),
  'panya ni mdogo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1779133558796-c7bf60f22208'), caption: 'Small mouse'),
  'mimi ni mchangamfu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1572707691993-29c96332f6be'), caption: 'I am cheerful'),
  'yeye ana huzuni': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1636592358465-37c526b978d2'), caption: 'Sad'),
  'mlango umefunguka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1570563169510-ac9c2c3cad68'), caption: 'Open door'),
  'mlango umefungwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1566653223195-e09604588c9f'), caption: 'Closed door'),
  'puto linaenda juu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517884885877-a46b0f5327db'), caption: 'Balloon up'),
  'mpira unaenda chini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1763727288483-ea361a563531'), caption: 'Ball down'),
  'ndege': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1444464666168-49d633b86797'), caption: 'Bird'),
  'tai': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1457383457550-47a5cfdbab17'), caption: 'Eagle'),
  'bata': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586276632510-a680c3db9a10'), caption: 'Duck'),
  'kuku': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1548550023-2bdb3c5beed7'), caption: 'Chicken'),
  'papa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1685031924917-aa16bb9d2c25'), caption: 'Pigeon'),

  // Day 4 — everyday phrases
  'naweza kusaidia': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1697639659506-ada9b78ae2ae'), caption: 'I can help'),
  'siwezi kwenda': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1778342261377-9248c3dd10fd'), caption: "Can't go"),
  'kwasababu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1702065612921-fcf9e698dccc'), caption: 'Because'),
  'nilikuwa kazini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1713947501966-34897f21162e'), caption: 'Was at work'),
  'ni sawa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758599543122-fc551c9b4b1c'), caption: "It's okay"),
  'tafadhali': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1520187044487-b2efb58f0cba'), caption: 'Please'),
  'nipe maji': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1548780607-46c78f38182d'), caption: 'Give me water'),
  'sawa, ngoja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1516749712236-67f5688a642a'), caption: 'Okay, wait'),
  'ninakuja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1612996860234-f1322906438a'), caption: 'I am coming'),
  'harakisha': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1581889470536-467bdbe30cd0'), caption: 'Hurry up'),
  'dakika moja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1704265586142-db3e17d0dea0'), caption: 'One minute'),
  'asante kwa kujali': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1559769732-3a943df124b0'), caption: 'Thank you for caring'),

  // Day 5 — glue words
  'habari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758525224242-cdcf50a54d58'), caption: 'How are you?'),
  'habari?': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758525224242-cdcf50a54d58'), caption: 'How are you?'),
  'nzuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758600588075-337dfa176a31'), caption: 'Good / fine'),
  'asante': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1502355984-b735cb2550ce'), caption: 'Thank you'),
  'karibu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1558541966-ee7182e26d63'), caption: 'Welcome'),
  'ndiyo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1516382022989-cd771ab91fb1'), caption: 'Yes'),
  'hapana': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1489112318845-bcfb7233b1a1'), caption: 'No'),
  'na': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1673515336414-0db19994707f'), caption: 'And / with'),
  'leo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1642943392730-ae57c9b77522'), caption: 'Today'),
  'kesho': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1687585612416-c7e45dbb27d5'), caption: 'Tomorrow'),
  'sana': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1673048297932-ad2caa4a7a59'), caption: 'Very / a lot'),
  'kidogo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1535588986102-0e9c0c60cba2'), caption: 'A little'),
  'sasa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488132828189-4e416661b680'), caption: 'Now'),

  // English Pictures — extras
  'asubuhi ni mapema': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472214103451-9374bd1c798e'), caption: 'Morning is early'),
  'usiku wa manane': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519681393784-d120267933ba'), caption: 'Midnight'),
  'maua ni mazuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1559150182-a7144f7628f9'), caption: 'Beautiful flowers'),

  // Elementary — numbers & essentials
  'moja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1520006507663-f34ed4a17b4c'), caption: 'One'),
  'mbili': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1491414416654-c4de0c986af8'), caption: 'Two'),
  'tatu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1762328006833-b1c850d57618'), caption: 'Three'),
  'nne': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1762328022007-edc2c770d350'), caption: 'Four'),
  'tano': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1556848527-f7c548b972b2'), caption: 'Five'),
  'jina langu ni…': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1600603406200-5b2a104684ac'), caption: 'My name is…'),
  'jina langu ni...': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1600603406200-5b2a104684ac'), caption: 'My name is…'),
  'unaitwa nani?': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1689143947647-062e1a24bf2d'), caption: 'What is your name?'),
  'ninakupenda': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1771570665615-453f75881df2'), caption: 'I love you'),
  'kwaheri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758600432914-2b5f4483c7b8'), caption: 'Goodbye'),
  'lala salama': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522771739844-6a9f6d5f14af'), caption: 'Sleep well'),
  'chakula': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504674900247-0877df9cc836'), caption: 'Food'),
  'maji': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1432405972618-c60b0225b8f9'), caption: 'Water'),
  'ninahitaji': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'), caption: 'I need'),
  'msaada': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'), caption: 'Help'),
  'wapi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1764351661329-8d76178e02b3'), caption: 'Where?'),
  'lini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1541480601022-2308c0f02487'), caption: 'When?'),
  'nani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1689143947647-062e1a24bf2d'), caption: 'Who?'),
  'nini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1633613286848-e6f43bbafb8d'), caption: 'What?'),
  'hivi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'), caption: 'Like this'),
  'baba': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1549068294-04a001ee0638'), caption: 'Father'),
  'mama': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560707854-fb9a10eeaace'), caption: 'Mother'),
  'kaka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507003211169-0a1dd7228f2d'), caption: 'Brother'),
  'dada': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1494790108377-be9c29b29330'), caption: 'Sister'),
  'bibi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758686254563-5c5ab338c8b9'), caption: 'Grandmother'),
  'babu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758691030490-fe1cb6c972ce'), caption: 'Grandfather'),

  // Intermediate — verbs, time & daily life
  'ninakula': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552846573-47e482355fa7'), caption: 'I am eating'),
  'ninakunywa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1619016145369-0ff98d539993'), caption: 'I am drinking'),
  'ninasoma': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1553729784-e91953dec042'), caption: 'I am reading'),
  'ninaenda': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1487956382158-bb926046304a'), caption: 'I am going'),
  'ninarudi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1564013799919-ab600027ffc6'), caption: 'I am returning'),
  'ninafanya kazi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515378791036-0648a3ef77b2'), caption: 'I am working'),
  'ninacheza': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1774674534737-8a5fc71699b8'), caption: 'I am playing'),
  'ninaongea': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1542229538-4d8784038379'), caption: 'I am speaking'),
  'ninasikiliza': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1718382341267-aef8a9e4ecef'), caption: 'I am listening'),
  'ninaelewa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1531379410502-63bfe8cdaf6f'), caption: 'I understand'),
  'sielewi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1781935307689-920207af57db'), caption: "I don't understand"),
  'rafiki yangu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524601500432-1e1a4c71d692'), caption: 'My friend'),
  'nyumba yako': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1672266353368-7df4d6d963de'), caption: 'Your house'),
  'asubuhi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472214103451-9374bd1c798e'), caption: 'Morning'),
  'jioni': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552452380-4137214f33b6'), caption: 'Evening'),
  'usiku': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519681393784-d120267933ba'), caption: 'Night'),
  'saa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1541480601022-2308c0f02487'), caption: 'Hour / clock'),
  'dakika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1704265586142-db3e17d0dea0'), caption: 'Minute'),
  'wiki': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1435527173128-983b87201f4d'), caption: 'Week'),
  'mwezi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1578625155481-7bc40a6481b6'), caption: 'Month'),
  'mwaka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560986752-2e31d9507413'), caption: 'Year'),
  'hapa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1776883591149-e93c3027c51f'), caption: 'Here'),
  'huko': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1762328003206-03a1ff078062'), caption: 'There (far)'),
  'hivi karibuni': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518281361980-b26bfd556770'), caption: 'Soon'),

  // Advanced — past, future & complex sentences
  'nilikula': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517870662726-c1d98ee36250'), caption: 'I ate'),
  'nitakula': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1659352152794-b1cf311f112c'), caption: 'I will eat'),
  'nimefika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1766970096331-78c8af007a3b'), caption: 'I have arrived'),
  'nimepotea': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1699870225928-f366b1f04679'), caption: 'I am lost'),
  'ninahisi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1572707691993-29c96332f6be'), caption: 'I feel'),
  'ninaogopa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1646340621112-dd3c96797887'), caption: 'I am afraid'),
  'ninafurahi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1501743411739-de52ea0ce6a0'), caption: 'I am rejoicing'),
  'ninataka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586726370832-3440a511e479'), caption: 'I want'),
  'lazima': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1633092539352-4d458d94cfe4'), caption: 'Must'),
  'labda': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1702065612691-877a245777ad'), caption: 'Maybe'),
  'bila': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1573376670329-0261ea9fde97'), caption: 'Without'),
  'kwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1673515336414-0db19994707f'), caption: 'For / by / with'),
  'kutoka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1759405185577-4ba456d4bdc7'), caption: 'From'),
  'hadi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1768299582669-430739acc3d9'), caption: 'Until'),
  'wakati': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1704265586142-db3e17d0dea0'), caption: 'When / time'),
  'kwa nini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1633613286848-e6f43bbafb8d'), caption: 'Why?'),
  'jinsi gani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'), caption: 'How?'),
  'ingawa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1618037087830-5e746497905b'), caption: 'Although'),
  'lakini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1618037087830-5e746497905b'), caption: 'But'),
  'kama': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1766229034549-0103e6d4a75f'), caption: 'If / like'),
  'bado': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518281361980-b26bfd556770'), caption: 'Still / not yet'),
  'tayari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1760114852784-ec280f0a62e2'), caption: 'Already / ready'),
  'mara moja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1659924086637-803c92f2dac8'), caption: 'Once / immediately'),
  'mara nyingi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1594383538644-66fcb99ae1ed'), caption: 'Often'),

  // Fluent — idioms, culture & natural speech
  'pole': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1760897008085-61143d503763'), caption: 'Sorry / take it easy'),
  'pole pole': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1508455858334-95337ba25607'), caption: 'Slowly / gently'),
  'hakuna matata': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1738739907433-10601360cee3'), caption: 'No worries'),
  'safari njema': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1774619511446-f2af7584db46'), caption: 'Good journey'),
  'hongera': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1492684223066-81342ee5ff30'), caption: 'Congratulations'),
  'heri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1780027684177-d297178ea31c'), caption: 'Blessings / happy'),
  'afya': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518843875459-f738682238a6'), caption: 'Health'),
  'amani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1491929536571-bdbc57e72324'), caption: 'Peace'),
  'upendo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1771570665615-453f75881df2'), caption: 'Love'),
  'uaminifu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1549923746-c502d488b3ea'), caption: 'Honesty / loyalty'),
  'heshima': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1549923746-c502d488b3ea'), caption: 'Respect'),
  'jambo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758525224242-cdcf50a54d58'), caption: 'Hello'),
  'shikamoo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1593100126453-19b562a800c1'), caption: 'Greeting to elder'),
  'marahaba': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758691030490-fe1cb6c972ce'), caption: 'Reply to Shikamoo'),
  'vizuri sana': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1543980932-b5fc649a8000'), caption: 'Very well done'),
  'si vizuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758600588332-f115280edb2e'), caption: 'Not good'),
  'nakubali': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1516382022989-cd771ab91fb1'), caption: 'I agree'),
  'sikubali': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1489112318845-bcfb7233b1a1'), caption: 'I disagree'),
  'tunaendelea': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758599668796-cdd37f4ecb66'), caption: 'We continue'),
  'nimekosa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1639600281360-2c158cb8391a'), caption: 'I missed / was wrong'),
  'samahani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1600041967514-701d405228c6'), caption: 'Excuse me / sorry'),
  'tafadhali subiri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1520187044487-b2efb58f0cba'), caption: 'Please wait'),
  'naweza kuongea kiswahili': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1542229538-4d8784038379'), caption: 'I can speak Swahili'),
  'ninajifunza kiswahili': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1553729784-e91953dec042'), caption: 'I am learning Swahili'),
  'mazungumzo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758274252296-a63b1d7d4bb8'), caption: 'Conversation'),

  // Near Native — proverbs, nuance & mastery
  'haraka haraka haina baraka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1578651714116-2a1645b70c0f'), caption: 'Hurry has no blessing'),
  'mgeni ni kuku mleao': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1636320966479-4842be49dd2e'), caption: 'A guest is fed well'),
  'umoja ni nguvu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1636987050384-9b079c700f63'), caption: 'Unity is strength'),
  'elimu ni taa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1774797405372-52737eeafc1e'), caption: 'Education is a lamp'),
  'mchumwa huota mwenyewe': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1775308519753-e8aee2262bf3'), caption: 'The sting comes back'),
  'penye nia pana njia': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1656019838845-757b4200dfd5'), caption: "Where there's a will, there's a way"),
  'mtegemea nundu haachi kunona': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1530013255753-3f6578d19059'), caption: 'Relying on others'),
  'asiyefunzwa na mamaye hufunzwa na ulimwengu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517545084371-4a575dde2a02'), caption: 'The world teaches hard lessons'),
  'kidole kimoja hakivunji chawa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1582213782179-e0d53f98f2ca'), caption: 'Teamwork is needed'),
  'mwenye macho haambiwi tazama': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1490127252417-7c393f993ee4'), caption: 'The obvious needs no telling'),
  'la kuvunda halina ubani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1542014740373-51ad6425eb7c'), caption: 'What is rotten cannot be disguised'),
  'mchagua jembe si mkulima': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1531873252757-8c22fa9e7a98'), caption: 'Tools alone do not make skill'),
  'njia ya mwongo ni fupi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1543265489-6130022b8561'), caption: "A liar's road is short"),
  'usicheze na chui': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1597213669181-6276d2315b55'), caption: "Don't play with danger"),
  'bahati nzuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1711871549711-4717086bfab9'), caption: 'Good luck'),
  'kwa hakika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1632144130358-6cfeed023e27'), caption: 'Certainly / indeed'),
  'kwa kweli': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1621273974250-faeb23660cdf'), caption: 'Truly / honestly'),
  'bila shaka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1632144130358-6cfeed023e27'), caption: 'Without doubt'),
  'kwa upande mwingine': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1766229034549-0103e6d4a75f'), caption: 'On the other hand'),
  'kwa mujibu wa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1775163024488-e88e4a71179f'), caption: 'According to'),
  'ni muhimu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1622768766607-922825162edc'), caption: 'It is important'),
  'si rahisi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517836357463-d25dfeac3438'), caption: "It's not easy"),
  'ni rahisi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1758874572647-407688dfd807'), caption: "It's easy"),
  'nimefikia': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1766970096331-78c8af007a3b'), caption: 'I have achieved'),
  'mimi ni mzungumzaji': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1542229538-4d8784038379'), caption: 'I am a speaker'),
  'kiswahili ni lugha yangu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1769708046949-108aa733f753'), caption: 'Swahili is my language'),
};

class _VisualRule {
  const _VisualRule(this.keywords, this.visual);

  final List<String> keywords;
  final SwahiliWordVisual visual;
}

/// Longer / more specific keywords first.
final _kRules = <_VisualRule>[
  _VisualRule(['where are you going', 'unaenda wapi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['going back home', 'ninarudi nyumbani'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1564013799919-ab600027ffc6'))),
  _VisualRule(['they are happy', 'wana furaha'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522075469751-3a6694fb2f61'))),
  _VisualRule(['i am happy', 'nina furaha'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1535713875002-d1d0cf377fde'))),
  _VisualRule(['she/he is tall', 'is tall', 'ni mrefu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhotoBody('photo-1567862140370-4ecd33c8e285'))),
  _VisualRule(['she/he is short', 'is short', 'ni mfupi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhotoBody('photo-1738680482082-4defacddf94b'))),
  _VisualRule(['she/he is mine', 'ni wangu', ' is mine'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519741497674-611481863552'))),
  _VisualRule(['at work', 'kazini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1497366216548-37526070297c'))),
  _VisualRule(['at school', 'shuleni', 'shule'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1503676260728-1c00da094a0b'))),
  _VisualRule(['doctor', 'daktari'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1612349317150-e413f6a5b16d'))),
  _VisualRule(['famous', 'maarufu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1772209254676-fbaa687f3060'))),
  _VisualRule(['we are here', 'tuko hapa', 'i am here', 'niko hapa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524661135-423995f22d0b'))),
  _VisualRule(['at home', 'nyumbani'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1568605114967-8130f3a36994'))),
  _VisualRule(['have a friend', 'rafiki'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule(['have a phone', 'simu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1511707171634-5f897ff02aa9'))),
  _VisualRule(['have a car', 'gari'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1492144534655-ae79c964c9d7'))),
  _VisualRule(['have a child', 'mtoto'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1503454537195-1dcabb73ffb9'))),
  _VisualRule(['egg', 'yai'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1562918005-50afb98e5d32'))),
  _VisualRule(['have news', 'habari'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504711434969-e33886168f5c'))),
  _VisualRule(['house', 'nyumba'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1568605114967-8130f3a36994'))),
  _VisualRule(['fruits', 'matunda'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1610832958506-aa56368176cf'))),
  _VisualRule(['water', 'maji'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1432405972618-c60b0225b8f9'))),
  _VisualRule(['food', 'chakula', 'cooking', 'pika'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504674900247-0877df9cc836'))),
  _VisualRule(['help', 'msaada', 'saidia'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'))),
  _VisualRule(['question', 'swali'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522202176988-66273c2fd55f'))),
  _VisualRule(['problem', 'tatizo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['sick', 'umwa', 'ninaumwa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1576091160399-112ba8d25d1d'))),
  _VisualRule(['tired', 'choka', 'nimechoka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517841905240-472988babdf9'))),
  _VisualRule(['married', 'nimeoa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519741497674-611481863552'))),
  _VisualRule(['beautiful', 'mrembo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524504388940-b1c1722653e1'))),
  _VisualRule(['handsome', 'mtanashati'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1500648767791-00dcc994a43e'))),
  _VisualRule(['important', 'muhimu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'))),
  _VisualRule(['forget', 'sahau'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'))),
  _VisualRule(['remember', 'kumbuka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'))),
  _VisualRule(['good idea', 'wazo zuri', 'wazo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'))),
  _VisualRule(['hot', 'moto', 'tea is hot'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544787219-7f47ccb76574'))),
  _VisualRule(['cold', 'baridi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1559827260-dc66d52bef19'))),
  _VisualRule(['elephant', 'tembo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1557050543-4d5f4e07ef46'))),
  _VisualRule(['mouse', 'panya'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486297678162-eb2a19b0a32d'))),
  _VisualRule(['big', 'kubwa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1557050543-4d5f4e07ef46'))),
  _VisualRule(['small', 'ndogo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486297678162-eb2a19b0a32d'))),
  _VisualRule(['sad', 'huzuni'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544005313-94ddf0286df2'))),
  _VisualRule(['open', 'funguka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1493809842364-78817add7ffb'))),
  _VisualRule(['closed', 'fungwa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1502672260266-1c1ef2d93688'))),
  _VisualRule(['balloon', 'puto', 'up', 'juu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517884885877-a46b0f5327db'))),
  _VisualRule(['ball', 'mpira', 'down', 'chini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1763727288483-ea361a563531'))),
  _VisualRule(['bird', 'ndege'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1444464666168-49d633b86797'))),
  _VisualRule(['eagle', 'tai'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1457383457550-47a5cfdbab17'))),
  _VisualRule(['duck', 'bata'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1727760130512-9ad8392ae843'))),
  _VisualRule(['chicken', 'kuku'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1607623814075-e51df1bdc82f'))),
  _VisualRule(['please', 'tafadhali'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'))),
  _VisualRule(['thank', 'asante'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'))),
  _VisualRule(['welcome', 'karibu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule(['coming', 'ninakuja', 'kuja'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518611012118-696072aa579a'))),
  _VisualRule(['wait', 'ngoja'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515377905703-c4788e51af15'))),
  _VisualRule(['father', 'baba'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1500648767791-00dcc994a43e'))),
  _VisualRule(['mother', 'mama'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1438761681033-6461ffad8d80'))),
  _VisualRule(['brother', 'kaka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507003211169-0a1dd7228f2d'))),
  _VisualRule(['sister', 'dada'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1494790108377-be9c29b29330'))),
  _VisualRule(['grandmother', 'bibi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1581578731548-c64695cc6952'))),
  _VisualRule(['grandfather', 'babu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'))),
  _VisualRule(['love', 'penda'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1771570665615-453f75881df2'))),
  _VisualRule(['morning', 'asubuhi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472214103451-9374bd1c798e'))),
  _VisualRule(['night', 'usiku'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519681393784-d120267933ba'))),
  _VisualRule(['today', 'leo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472214103451-9374bd1c798e'))),
  _VisualRule(['tomorrow', 'kesho'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1506905925346-21bda4d32df4'))),
  _VisualRule(['read', 'soma', 'learning'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1456513080510-7bf3a84b82f8'))),
  _VisualRule(['speak', 'ongea'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'))),
  _VisualRule(['strong', 'nguvu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1534438327276-14e5300c3a48'))),
  _VisualRule(['weak', 'dhaifu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544005313-94ddf0286df2'))),
  _VisualRule([' i / me', 'mimi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1695835871463-ca6732c02551'))),
  _VisualRule([' you', 'wewe'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1673533583133-59fa5b2a80da'))),
  _VisualRule([' we ', 'sisi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule([' they', 'wana'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522075469751-3a6694fb2f61'))),
  _VisualRule([' he ', ' she ', 'yeye'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1681038097688-fbdc92bcaa76'))),
  _VisualRule(['can help', 'kusaidia', 'naweza'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'))),
  _VisualRule(["can't go", 'siwezi', 'kwenda'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['because', 'kwasababu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'))),
  _VisualRule(["it's okay", 'ni sawa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'))),
  _VisualRule(['hurry', 'harakisha'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518611012118-696072aa579a'))),
  _VisualRule(['one minute', 'dakika'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486312338219-ce68d2c6f44d'))),
  _VisualRule(['good / fine', 'nzuri'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'))),
  _VisualRule(['yes', 'ndiyo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'))),
  _VisualRule(['no', 'hapana'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['very', 'sana'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1484480974693-6ca0a78fb36b'))),
  _VisualRule(['a little', 'kidogo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486297678162-eb2a19b0a32d'))),
  _VisualRule(['now', 'sasa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1497366216548-37526070297c'))),
  _VisualRule(['early', 'mapema'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472214103451-9374bd1c798e'))),
  _VisualRule(['midnight', 'manane'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519681393784-d120267933ba'))),
  _VisualRule(['flowers', 'maua', 'mazuri'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544726368-8f4b5475a7e4'))),
  _VisualRule(['goodbye', 'kwaheri'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['sleep well', 'lala salama', 'lala'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522771739844-6a9f6d5f14af'))),
  _VisualRule(['i need', 'hitaji', 'ninahitaji'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'))),
  _VisualRule(['where', 'wapi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['when', 'lini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486312338219-ce68d2c6f44d'))),
  _VisualRule(['who', 'nani'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule(['what', 'nini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522202176988-66273c2fd55f'))),
  _VisualRule(['my name', 'jina langu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'))),
  _VisualRule(['eating', 'ninakula', 'kula'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504674900247-0877df9cc836'))),
  _VisualRule(['drinking', 'ninakunywa', 'kunywa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1432405972618-c60b0225b8f9'))),
  _VisualRule(['reading', 'studying', 'ninasoma'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1456513080510-7bf3a84b82f8'))),
  _VisualRule(['i am going', 'ninaenda'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['returning', 'ninarudi', 'rudi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1564013799919-ab600027ffc6'))),
  _VisualRule(['working', 'ninafanya kazi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1497366216548-37526070297c'))),
  _VisualRule(['playing', 'ninacheza', 'cheza'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1579952363873-27f3bade9f55'))),
  _VisualRule(['speaking', 'ninaongea', 'ongea'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'))),
  _VisualRule(['listening', 'sikiliza', 'ninasikiliza'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1456513080510-7bf3a84b82f8'))),
  _VisualRule(['understand', 'elewa', 'ninaelewa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'))),
  _VisualRule(["don't understand", 'sielewi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['evening', 'jioni'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472214103451-9374bd1c798e'))),
  _VisualRule(['hour', 'clock', 'saa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486312338219-ce68d2c6f44d'))),
  _VisualRule(['week', 'wiki'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1484480974693-6ca0a78fb36b'))),
  _VisualRule(['month', 'mwezi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1506905925346-21bda4d32df4'))),
  _VisualRule(['year', 'mwaka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1506905925346-21bda4d32df4'))),
  _VisualRule(['there', 'huko'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['here', 'hapa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524661135-423995f22d0b'))),
  _VisualRule(['soon', 'karibuni'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518611012118-696072aa579a'))),
  _VisualRule(['want', 'ninataka', 'taka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['must', 'lazima'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'))),
  _VisualRule(['maybe', 'labda'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'))),
  _VisualRule(['why', 'kwa nini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522202176988-66273c2fd55f'))),
  _VisualRule(['how', 'jinsi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'))),
  _VisualRule(['but', 'lakini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['if', 'kama'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'))),
  _VisualRule(['still', 'not yet', 'bado'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515377905703-c4788e51af15'))),
  _VisualRule(['ready', 'already', 'tayari'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'))),
  _VisualRule(['sorry', 'excuse', 'pole', 'samahani'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1771570665615-453f75881df2'))),
  _VisualRule(['congratulations', 'hongera'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523240795612-9a054b0db644'))),
  _VisualRule(['peace', 'amani'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519681393784-d120267933ba'))),
  _VisualRule(['health', 'afya'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1576091160399-112ba8d25d1d'))),
  _VisualRule(['conversation', 'mazungumzo', 'speak swahili'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'))),
  _VisualRule(['learning', 'jifunza', 'ninajifunza'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1456513080510-7bf3a84b82f8'))),
  _VisualRule(['lost', 'potea', 'nimepotea'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['afraid', 'ogopa', 'ninaogopa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['rejoice', 'furahi', 'ninafurahi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1535713875002-d1d0cf377fde'))),
  _VisualRule(['arrived', 'fika', 'nimefika'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524661135-423995f22d0b'))),
  _VisualRule(['feel', 'hisi', 'ninahisi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1535713875002-d1d0cf377fde'))),
  _VisualRule(['without', 'bila'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['until', 'hadi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515377905703-c4788e51af15'))),
  _VisualRule(['although', 'ingawa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'))),
  _VisualRule(['unity', 'umoja', 'proverb'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule(['education', 'elimu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1456513080510-7bf3a84b82f8'))),
  _VisualRule(['luck', 'bahati'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523240795612-9a054b0db644'))),
  _VisualRule(['certainly', 'hakika', 'kweli'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'))),
  _VisualRule(['easy', 'rahisi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'))),
  _VisualRule(['difficult', 'si rahisi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1434030216411-0b793f4b4173'))),
  _VisualRule(['achieved', 'fikia', 'nimefikia'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523240795612-9a054b0db644'))),
  _VisualRule(['speaker', 'mzungumzaji'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'))),
  _VisualRule(['language', 'lugha'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1456513080510-7bf3a84b82f8'))),
  _VisualRule(['rest', 'pumzika', 'nitapumzika'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522771739844-6a9f6d5f14af'))),
  _VisualRule(['tasks', 'shughuli', 'busy'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1484480974693-6ca0a78fb36b'))),
  _VisualRule(['cheerful', 'mchangamfu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1535713875002-d1d0cf377fde'))),
  _VisualRule(['trying', 'jaribu', 'ninajaribu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1434030216411-0b793f4b4173'))),
  _VisualRule(['married', 'nimeoa', 'oa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519741497674-611481863552'))),
  _VisualRule(['give me', 'nipe'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'))),
  _VisualRule(['everything', 'kila kitu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1554224155-6726b3ff858f'))),
  _VisualRule(['no idea', 'sina wazo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'))),
  _VisualRule(['was at work', 'nilikuwa kazini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1497366216548-37526070297c'))),
  _VisualRule(['agree', 'kubali', 'nakubali'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule(['disagree', 'sikubali'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['continue', 'endelea', 'tunaendelea'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518611012118-696072aa579a'))),
  _VisualRule(['wrong', 'kosa', 'nimekosa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['please wait', 'subiri'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515377905703-c4788e51af15'))),
  _VisualRule(['greeting', 'jambo', 'shikamoo', 'marahaba'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule(['well done', 'vizuri'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523240795612-9a054b0db644'))),
  _VisualRule(['honest', 'uaminifu', 'respect', 'heshima'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'))),
  _VisualRule(['blessing', 'heri', 'baraka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523240795612-9a054b0db644'))),
  _VisualRule(['journey', 'safari'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['patience', 'pole pole'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515377905703-c4788e51af15'))),
  _VisualRule(['no worries', 'hakuna matata'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1535713875002-d1d0cf377fde'))),
  _VisualRule(['upendo', 'love you', 'kupenda'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1771570665615-453f75881df2'))),
  _VisualRule(['my friend', 'rafiki yangu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule(['your house', 'nyumba yako'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1568605114967-8130f3a36994'))),
  _VisualRule(['past', 'nilikula', 'nilisahau'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'))),
  _VisualRule(['future', 'nitakula', 'nitapumzika'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1506905925346-21bda4d32df4'))),
  _VisualRule(['once', 'mara moja'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486312338219-ce68d2c6f44d'))),
  _VisualRule(['often', 'mara nyingi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1484480974693-6ca0a78fb36b'))),
  _VisualRule(['completely', 'kabisa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'))),
  _VisualRule(['from', 'kutoka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'))),
  _VisualRule(['for / by', 'kwa '], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
];

const _kDefaultVisual = SwahiliWordVisual(
  imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=960&h=720&fit=crop&q=92&auto=format&dpr=2',
  caption: 'Learn',
);

SwahiliWordVisual resolveSwahiliWordVisual({required String swahili, required String english}) {
  final swKey = _normSw(swahili);
  final swBare = _normSwKey(swahili);
  final exact = _kExactBySwahili[swKey] ?? _kExactBySwahili[swBare];
  if (exact != null) return exact;

  final hay = '$swBare ${english.toLowerCase()}';
  for (final rule in _kRules) {
    for (final kw in rule.keywords) {
      if (hay.contains(kw)) return rule.visual;
    }
  }
  return _kDefaultVisual;
}

/// Full-screen photo viewer — tap any lesson picture to enlarge.
/// Scales a photo URL up for full-screen viewing while keeping its original
/// aspect ratio — forcing a fixed landscape size here would make Unsplash
/// re-crop portrait (full-body) photos and cut off the top/bottom.
String _upscaleSwahiliPhotoUrl(String url, {int targetLongSide = 1600}) {
  final wMatch = RegExp(r'w=(\d+)').firstMatch(url);
  final hMatch = RegExp(r'h=(\d+)').firstMatch(url);
  if (wMatch == null || hMatch == null) return url;
  final w = int.parse(wMatch.group(1)!);
  final h = int.parse(hMatch.group(1)!);
  if (w <= 0 || h <= 0) return url;
  final scale = targetLongSide / (w > h ? w : h);
  final newW = (w * scale).round();
  final newH = (h * scale).round();
  return url.replaceFirst(RegExp(r'w=\d+'), 'w=$newW').replaceFirst(RegExp(r'h=\d+'), 'h=$newH');
}

Future<void> showSwahiliWordImageFullscreen(
  BuildContext context, {
  required SwahiliWordVisual visual,
  required String swahili,
  required String english,
}) {
  final hiRes = _upscaleSwahiliPhotoUrl(visual.imageUrl);

  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Close photo',
    barrierColor: Colors.black.withValues(alpha: 0.92),
    pageBuilder: (_, __, ___) {
      return SafeArea(
        child: Material(
          color: Colors.transparent,
          child: Column(
            children: [
              Align(
                alignment: Alignment.topRight,
                child: IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.close_rounded, color: Colors.white, size: 28),
                ),
              ),
              Expanded(
                child: InteractiveViewer(
                  minScale: 0.8,
                  maxScale: 4,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(16),
                      child: Image.network(
                        hiRes,
                        fit: BoxFit.contain,
                        filterQuality: FilterQuality.high,
                        loadingBuilder: (_, child, progress) {
                          if (progress == null) return child;
                          return const Center(child: CircularProgressIndicator(color: Colors.white));
                        },
                        errorBuilder: (_, __, ___) => Center(
                          child: Text(english, style: const TextStyle(color: Colors.white70, fontSize: 16)),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
                child: Column(
                  children: [
                    Text(swahili, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                    const SizedBox(height: 6),
                    Text(english, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w700, fontSize: 15)),
                    const SizedBox(height: 8),
                    Text('Pinch to zoom · tap outside to close', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11)),
                  ],
                ),
              ),
            ],
          ),
        ),
      );
    },
  );
}

/// Compact picture tile — tap to open full screen.
class SwahiliWordVisualTile extends StatelessWidget {
  const SwahiliWordVisualTile({
    super.key,
    required this.visual,
    required this.swahili,
    required this.english,
    this.size = 76,
    this.compact = false,
  });

  final SwahiliWordVisual visual;
  final String swahili;
  final String english;
  final double size;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => showSwahiliWordImageFullscreen(context, visual: visual, swahili: swahili, english: english),
        borderRadius: BorderRadius.circular(compact ? 12 : 16),
        child: Stack(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(compact ? 12 : 16),
              child: SizedBox(
                width: size,
                height: size,
                child: _SwahiliPhoto(visual: visual, fill: true),
              ),
            ),
            Positioned(
              right: 4,
              bottom: 4,
              child: Container(
                padding: const EdgeInsets.all(3),
                decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), borderRadius: BorderRadius.circular(6)),
                child: const Icon(Icons.zoom_in_rounded, color: Colors.white, size: 12),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Large hero picture — tap to open full screen.
class SwahiliWordVisualHero extends StatelessWidget {
  const SwahiliWordVisualHero({
    super.key,
    required this.visual,
    required this.swahili,
    required this.english,
  });

  final SwahiliWordVisual visual;
  final String swahili;
  final String english;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => showSwahiliWordImageFullscreen(context, visual: visual, swahili: swahili, english: english),
        borderRadius: BorderRadius.circular(20),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(20),
          child: SizedBox(
            width: double.infinity,
            height: 200,
            child: Stack(
              fit: StackFit.expand,
              children: [
                _SwahiliPhoto(visual: visual, fill: true, hero: true),
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: Container(
                    padding: const EdgeInsets.fromLTRB(14, 24, 14, 12),
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [Colors.transparent, Colors.black.withValues(alpha: 0.62)],
                      ),
                    ),
                    child: Row(
                      children: [
                        Expanded(
                          child: Text(
                            english,
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15, shadows: [Shadow(blurRadius: 6, color: Colors.black45)]),
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(8)),
                          child: const Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(Icons.fullscreen_rounded, color: Colors.white, size: 16),
                              SizedBox(width: 4),
                              Text('Tap', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11)),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _SwahiliPhoto extends StatelessWidget {
  const _SwahiliPhoto({required this.visual, this.fill = false, this.hero = false});

  final SwahiliWordVisual visual;
  final bool fill;
  final bool hero;

  @override
  Widget build(BuildContext context) {
    return Image.network(
      visual.imageUrl,
      fit: BoxFit.cover,
      width: fill ? double.infinity : null,
      height: fill ? double.infinity : null,
      filterQuality: FilterQuality.high,
      loadingBuilder: (_, child, progress) {
        if (progress == null) return child;
        return Container(
          color: visual.gradient.first,
          child: const Center(child: SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2))),
        );
      },
      errorBuilder: (_, __, ___) => Container(
        color: visual.gradient.first,
        child: Center(
          child: Icon(Icons.image_not_supported_outlined, color: Colors.white.withValues(alpha: 0.7), size: hero ? 40 : 28),
        ),
      ),
    );
  }
}

/// Number badge like social-media vocabulary posts.
class SwahiliLessonNumberBadge extends StatelessWidget {
  const SwahiliLessonNumberBadge({super.key, required this.number, this.color = const Color(0xFF7C3AED)});

  final int number;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 28,
      height: 28,
      alignment: Alignment.center,
      decoration: BoxDecoration(color: color, shape: BoxShape.circle),
      child: Text(
        '$number',
        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13),
      ),
    );
  }
}
