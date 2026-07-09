import 'package:flutter/material.dart';

import 'ngmy_swahili_curriculum.dart';

part 'ngmy_swahili_visual_semantics.dart';

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
  // Day 1 — people & descriptions (photos must match meaning, not random portraits)
  'mimi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1695835871463-ca6732c02551'), caption: 'I / me — pointing at self'),
  'wewe / ninyi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1673533583133-59fa5b2a80da'), caption: 'You — pointing at you'),
  'wewe': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1673533583133-59fa5b2a80da'), caption: 'You'),
  'yeye': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1681038097688-fbdc92bcaa76'), caption: 'He / she — another person'),
  'sisi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'We / us'),
  'yeye ni mrefu': SwahiliWordVisual(imageUrl: ngmySwahiliPhotoBody('photo-1567862140370-4ecd33c8e285'), caption: 'Tall — full height'),
  'yeye ni mfupi': SwahiliWordVisual(imageUrl: ngmySwahiliPhotoBody('photo-1738680482082-4defacddf94b'), caption: 'Short — full height'),
  'yeye ni wangu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519741497674-611481863552'), caption: 'Mine — my person'),
  'yeye ni daktari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1612349317150-e413f6a5b16d'), caption: 'Doctor'),
  'yeye ni maarufu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1772209254676-fbaa687f3060'), caption: 'Famous — paparazzi'),
  'wana furaha': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522075469751-3a6694fb2f61'), caption: 'They are happy'),
  'nina furaha': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1535713875002-d1d0cf377fde'), caption: 'I am happy — big smile'),
  'tuko hapa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524661135-423995f22d0b'), caption: 'We are here'),

  // Day 2 — having things
  'nina rafiki': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'Friend'),
  'nina tatizo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'), caption: 'Problem'),
  'nina simu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1511707171634-5f897ff02aa9'), caption: 'Phone'),
  'nina gari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1492144534655-ae79c964c9d7'), caption: 'Car'),
  'nina mtoto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1503454537195-1dcabb73ffb9'), caption: 'Child'),
  'nina yai': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1562918005-50afb98e5d32'), caption: 'Egg'),
  'nina habari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504711434969-e33886168f5c'), caption: 'News'),
  'nina nyumba': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1568605114967-8130f3a36994'), caption: 'House'),
  'nina matunda': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1610832958506-aa56368176cf'), caption: 'Fruits'),
  'nina mpango': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'), caption: 'Plan'),
  'sina wazo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'), caption: 'No idea'),
  'nina swali': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522202176988-66273c2fd55f'), caption: 'Question'),
  'nina kila kitu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1554224155-6726b3ff858f'), caption: 'Everything'),

  // Day 3 — feelings & place
  'niko hapa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524661135-423995f22d0b'), caption: 'I am here'),
  'niko nyumbani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1568605114967-8130f3a36994'), caption: 'At home'),
  'ninaumwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1576091160399-112ba8d25d1d'), caption: 'Sick'),
  'nimechoka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517841905240-472988babdf9'), caption: 'Tired'),
  'ninapika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1556910103-1c02745aae4d'), caption: 'Cooking'),
  'ninajaribu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1434030216411-0b793f4b4173'), caption: 'Trying'),
  'niko na wewe': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'With you'),
  'nimeoa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519741497674-611481863552'), caption: 'Married'),
  'mimi ni mtoto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1503454537195-1dcabb73ffb9'), caption: 'I am a child'),
  'mimi ni mrembo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524504388940-b1c1722653e1'), caption: 'Beautiful'),
  'mimi ni mtanashati': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1500648767791-00dcc994a43e'), caption: 'Handsome'),
  'sijambo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'), caption: 'I am fine'),

  // English Pictures — screenshot phrases
  'unaenda wapi?': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'), caption: 'Where going?'),
  'ninarudi nyumbani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1564013799919-ab600027ffc6'), caption: 'Going home'),
  'niko kazini sasa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1497366216548-37526070297c'), caption: 'At work now'),
  'niko shuleni': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1503676260728-1c00da094a0b'), caption: 'At school'),
  'leo nina shughuli nyingi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1484480974693-6ca0a78fb36b'), caption: 'Busy today'),
  'kesho nitapumzika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522771739844-6a9f6d5f14af'), caption: 'Rest tomorrow'),
  'hii ni muhimu sana': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'), caption: 'Very important'),
  'usisahau hilo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'), caption: "Don't forget"),
  'nimekumbuka sasa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'), caption: 'Remember now'),
  'nilisahau kabisa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'), caption: 'Forgot completely'),
  'hiyo ni wazo zuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'), caption: 'Good idea'),
  'ninahitaji msaada': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'), caption: 'Need help'),
  'chai ni moto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544787219-7f47ccb76574'), caption: 'Hot tea'),
  'maji ni baridi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1559827260-dc66d52bef19'), caption: 'Cold water'),
  'tembo ni kubwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1557050543-4d5f4e07ef46'), caption: 'Big elephant'),
  'panya ni mdogo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486297678162-eb2a19b0a32d'), caption: 'Small mouse'),
  'mimi ni mchangamfu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1535713875002-d1d0cf377fde'), caption: 'I am cheerful'),
  'yeye ana huzuni': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544005313-94ddf0286df2'), caption: 'Sad'),
  'mlango umefunguka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1493809842364-78817add7ffb'), caption: 'Open door'),
  'mlango umefungwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1502672260266-1c1ef2d93688'), caption: 'Closed door'),
  'puto linaenda juu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517884885877-a46b0f5327db'), caption: 'Balloon up'),
  'mpira unaenda chini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1763727288483-ea361a563531'), caption: 'Ball down'),
  'ndege': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1444464666168-49d633b86797'), caption: 'Bird'),
  'tai': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1457383457550-47a5cfdbab17'), caption: 'Eagle'),
  'bata': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1727760130512-9ad8392ae843'), caption: 'Duck'),
  'kuku': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1607623814075-e51df1bdc82f'), caption: 'Chicken'),
  'papa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1685031924917-aa16bb9d2c25'), caption: 'Pigeon'),

  // Day 4 — everyday phrases
  'naweza kusaidia': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'), caption: 'I can help'),
  'siwezi kwenda': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'), caption: "Can't go"),
  'kwasababu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'), caption: 'Because'),
  'ni sawa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'), caption: "It's okay"),
  'nipe maji': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1432405972618-c60b0225b8f9'), caption: 'Give me water'),
  'sawa, ngoja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515377905703-c4788e51af15'), caption: 'Okay, wait'),
  'ninakuja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518611012118-696072aa579a'), caption: 'I am coming'),
  'harakisha': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518611012118-696072aa579a'), caption: 'Hurry up'),
  'dakika moja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486312338219-ce68d2c6f44d'), caption: 'One minute'),
  'asante kwa kujali': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1771570665615-453f75881df2'), caption: 'Thank you for caring'),

  // Day 5 — glue words
  'habari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504711434969-e33886168f5c'), caption: 'How are you?'),
  'habari?': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504711434969-e33886168f5c'), caption: 'How are you?'),
  'nzuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'), caption: 'Good / fine'),
  'asante': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'), caption: 'Thank you'),
  'karibu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'Welcome'),
  'ndiyo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'), caption: 'Yes'),
  'hapana': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'), caption: 'No'),
  'na': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'And / with'),
  'leo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472214103451-9374bd1c798e'), caption: 'Today'),
  'kesho': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1506905925346-21bda4d32df4'), caption: 'Tomorrow'),
  'sana': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1484480974693-6ca0a78fb36b'), caption: 'Very / a lot'),
  'kidogo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486297678162-eb2a19b0a32d'), caption: 'A little'),
  'sasa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1497366216548-37526070297c'), caption: 'Now'),

  // English Pictures — extras
  'asubuhi ni mapema': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472214103451-9374bd1c798e'), caption: 'Morning is early'),
  'usiku wa manane': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519681393784-d120267933ba'), caption: 'Midnight'),
  'maua ni mazuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544726368-8f4b5475a7e4'), caption: 'Beautiful flowers'),

  // Elementary — numbers & essentials
  'moja': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'), caption: 'One'),
  'mbili': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'Two'),
  'tatu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523240795612-9a054b0db644'), caption: 'Three'),
  'nne': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'Four'),
  'tano': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523240795612-9a054b0db644'), caption: 'Five'),
  'jina langu ni…': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'), caption: 'My name is…'),
  'jina langu ni...': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1472099645785-5658abf4ff4e'), caption: 'My name is…'),
  'unaitwa nani?': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522202176988-66273c2fd55f'), caption: 'What is your name?'),
  'ninakupenda': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1771570665615-453f75881df2'), caption: 'I love you'),
  'kwaheri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'), caption: 'Goodbye'),
  'lala salama': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522771739844-6a9f6d5f14af'), caption: 'Sleep well'),
  'chakula': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504674900247-0877df9cc836'), caption: 'Food'),
  'maji': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1432405972618-c60b0225b8f9'), caption: 'Water'),
  'ninahitaji': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'), caption: 'I need'),
  'msaada': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'), caption: 'Help'),
  'wapi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'), caption: 'Where?'),
  'lini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1486312338219-ce68d2c6f44d'), caption: 'When?'),
  'nani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'Who?'),
  'nini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522202176988-66273c2fd55f'), caption: 'What?'),
  'hivi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552664730-d307ca884978'), caption: 'Like this'),
  'baba': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1500648767791-00dcc994a43e'), caption: 'Father'),
  'mama': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1438761681033-6461ffad8d80'), caption: 'Mother'),
  'kaka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507003211169-0a1dd7228f2d'), caption: 'Brother'),
  'dada': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1494790108377-be9c29b29330'), caption: 'Sister'),
  'bibi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1581578731548-c64695cc6952'), caption: 'Grandmother'),
  'babu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'), caption: 'Grandfather'),
  'tafadhali': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'), caption: 'Please'),
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

  // Manual overrides (highest priority).
  final manual = _kExactBySwahili[swKey] ?? _kExactBySwahili[swBare];
  if (manual != null) return manual;

  // Pre-mapped curriculum visuals — one accurate photo per lesson word.
  final curated = curriculumSwahiliVisual(swahili);
  if (curated != null) return curated;

  // Fallback keyword rules — whole-word matching only (no "mrefu" inside "maarufu").
  final hay = '$swBare ${english.toLowerCase()}';
  for (final rule in _kRules) {
    for (final kw in rule.keywords) {
      if (ngmySwahiliTokenMatch(hay, kw)) return rule.visual;
    }
  }
  return _kDefaultVisual;
}

/// Full-screen photo viewer — tap any lesson picture to enlarge.
Future<void> showSwahiliWordImageFullscreen(
  BuildContext context, {
  required SwahiliWordVisual visual,
  required String swahili,
  required String english,
}) {
  final hiRes = visual.imageUrl.replaceFirst(RegExp(r'w=\d+'), 'w=1400').replaceFirst(RegExp(r'h=\d+'), 'h=1050');

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
