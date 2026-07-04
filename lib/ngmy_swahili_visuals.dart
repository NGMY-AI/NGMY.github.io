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

String _normSw(String s) => s.toLowerCase().replaceAll(RegExp(r'\s+'), ' ').trim();

/// Exact Swahili phrase → accurate photo (checked before fuzzy keywords).
final Map<String, SwahiliWordVisual> _kExactBySwahili = {
  // Day 1 — people & descriptions (must be precise)
  'mimi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1573497019942-588160662972'), caption: 'I / me'),
  'wewe / ninyi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529626455594-4ff0802cfb7e'), caption: 'You'),
  'wewe': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529626455594-4ff0802cfb7e'), caption: 'You'),
  'yeye': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507003211169-0a1dd7228f2d'), caption: 'He / she'),
  'sisi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'We / us'),
  'yeye ni mrefu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1549068106-59e7450f2715'), caption: 'Tall person'),
  'yeye ni mfupi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1554151226-359781764f2e'), caption: 'Short person'),
  'yeye ni wangu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1516589177282-624d5c390378'), caption: 'Mine / belonging'),
  'yeye ni daktari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1612349317150-e413f6a5b16d'), caption: 'Doctor'),
  'yeye ni maarufu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1501386761578-906134185365'), caption: 'Famous'),
  'wana furaha': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1511895426323-d378787e0c77'), caption: 'They are happy'),
  'nina furaha': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1492569970923-495fc4252774'), caption: 'I am happy'),
  'tuko hapa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524661135-423995f22d0b'), caption: 'We are here'),

  // Day 2 — having things
  'nina rafiki': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'), caption: 'Friend'),
  'nina tatizo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'), caption: 'Problem'),
  'nina simu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1511707171634-5f897ff02aa9'), caption: 'Phone'),
  'nina gari': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1492144534655-ae79c964c9d7'), caption: 'Car'),
  'nina mtoto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1503454537195-1dcabb73ffb9'), caption: 'Child'),
  'nina yai': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1582722871255-59a9b313aa56'), caption: 'Egg'),
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
  'nimechoka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507652315927-83513e683177'), caption: 'Tired'),
  'ninapika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1556910103-1c02745aae4d'), caption: 'Cooking'),
  'ninajaribu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1434030216411-0b793f4b4173'), caption: 'Trying'),
  'niko na wewe': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529333166436-1ea58s2c6c7d'), caption: 'With you'),
  'nimeoa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519741497674-611481863552'), caption: 'Married'),
  'mimi ni mtoto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1503454537195-1dcabb73ffb9'), caption: 'I am a child'),
  'mimi ni mrembo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524504388940-b1c1722653e1'), caption: 'Beautiful'),
  'mimi ni mtanashati': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1500648767791-00dcc994a43e'), caption: 'Handsome'),
  'sijambo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'), caption: 'I am fine'),

  // English Pictures — screenshot phrases
  'unaenda wapi?': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1488646953014-85cb44e25828'), caption: 'Where going?'),
  'ninarudi nyumbani': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1564013799919-ab600027ffc6'), caption: 'Going home'),
  'niko kazini sasa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1497366216548-37526070297c'), caption: 'At work now'),
  'niko shuleni': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523050854058-8df90110c9f1'), caption: 'At school'),
  'leo nina shughuli nyingi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1484480974693-6ca0a78fb36b'), caption: 'Busy today'),
  'kesho nitapumzika': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522771739844-6a9f6d5f14af'), caption: 'Rest tomorrow'),
  'hii ni muhimu sana': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'), caption: 'Very important'),
  'usisahau hilo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'), caption: "Don't forget"),
  'nimekumbuka sasa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1516328768425-f75fbb26e079'), caption: 'Remember now'),
  'nilisahau kabisa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'), caption: 'Forgot completely'),
  'hiyo ni wazo zuri': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1531482615710-79163e85c220'), caption: 'Good idea'),
  'ninahitaji msaada': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'), caption: 'Need help'),
  'chai ni moto': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515823662972-da6a65736362'), caption: 'Hot tea'),
  'maji ni baridi': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1559827260-dc66d52bef19'), caption: 'Cold water'),
  'tembo ni kubwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1556949032-609b381a9e86'), caption: 'Big elephant'),
  'panya ni mdogo': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1425086631105-6118147560eb'), caption: 'Small mouse'),
  'mimi ni mchangamfu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1492569970923-495fc4252774'), caption: 'I am cheerful'),
  'yeye ana huzuni': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544717297-f9e8a7844d22'), caption: 'Sad'),
  'mlango umefunguka': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1493809842364-78817add7ffb'), caption: 'Open door'),
  'mlango umefungwa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1502672260266-1c1ef2d93688'), caption: 'Closed door'),
  'puto linaenda juu': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1530103862676-de8c9de3801f'), caption: 'Balloon up'),
  'mpira unaenda chini': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1612872086494-b27904a33731'), caption: 'Ball down'),
  'ndege': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1444464666168-49d633b86797'), caption: 'Bird'),
  'tai': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1452574850495-f6623c6830f2'), caption: 'Eagle'),
  'bata': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1559827260-dc66d52bef19'), caption: 'Duck'),
  'kuku': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1548558933-2bdb6c285060'), caption: 'Chicken'),
  'papa': SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1552728089-57d71959a45f'), caption: 'Pigeon'),
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
  _VisualRule(['they are happy', 'wana furaha'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1511895426323-d378787e0c77'))),
  _VisualRule(['i am happy', 'nina furaha'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1492569970923-495fc4252774'))),
  _VisualRule(['she/he is tall', 'is tall', 'ni mrefu', 'mrefu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1549068106-59e7450f2715'))),
  _VisualRule(['she/he is short', 'is short', 'ni mfupi', 'mfupi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1554151226-359781764f2e'))),
  _VisualRule(['she/he is mine', 'ni wangu', ' is mine'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1516589177282-624d5c390378'))),
  _VisualRule(['at work', 'kazini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1497366216548-37526070297c'))),
  _VisualRule(['at school', 'shuleni', 'shule'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1523050854058-8df90110c9f1'))),
  _VisualRule(['doctor', 'daktari'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1612349317150-e413f6a5b16d'))),
  _VisualRule(['famous', 'maarufu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1501386761578-906134185365'))),
  _VisualRule(['we are here', 'tuko hapa', 'i am here', 'niko hapa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524661135-423995f22d0b'))),
  _VisualRule(['at home', 'nyumbani'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1568605114967-8130f3a36994'))),
  _VisualRule(['have a friend', 'rafiki'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule(['have a phone', 'simu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1511707171634-5f897ff02aa9'))),
  _VisualRule(['have a car', 'gari'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1492144534655-ae79c964c9d7'))),
  _VisualRule(['have a child', 'mtoto'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1503454537195-1dcabb73ffb9'))),
  _VisualRule(['egg', 'yai'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1582722871255-59a9b313aa56'))),
  _VisualRule(['have news', 'habari'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504711434969-e33886168f5c'))),
  _VisualRule(['house', 'nyumba'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1568605114967-8130f3a36994'))),
  _VisualRule(['fruits', 'matunda'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1610832958506-aa56368176cf'))),
  _VisualRule(['water', 'maji'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1548839140-29a7492991ef'))),
  _VisualRule(['food', 'chakula', 'cooking', 'pika'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1504674900247-0877df9cc836'))),
  _VisualRule(['help', 'msaada', 'saidia'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'))),
  _VisualRule(['question', 'swali'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1522202176988-66273c2fd55f'))),
  _VisualRule(['problem', 'tatizo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1450101499163-c8848c66ca85'))),
  _VisualRule(['sick', 'umwa', 'ninaumwa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1576091160399-112ba8d25d1d'))),
  _VisualRule(['tired', 'choka', 'nimechoka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507652315927-83513e683177'))),
  _VisualRule(['married', 'nimeoa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519741497674-611481863552'))),
  _VisualRule(['beautiful', 'mrembo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1524504388940-b1c1722653e1'))),
  _VisualRule(['handsome', 'mtanashati'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1500648767791-00dcc994a43e'))),
  _VisualRule(['important', 'muhimu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1454165804606-c3d57bc86b40'))),
  _VisualRule(['forget', 'sahau'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1586281380349-632531db7ed4'))),
  _VisualRule(['remember', 'kumbuka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1516328768425-f75fbb26e079'))),
  _VisualRule(['good idea', 'wazo zuri', 'wazo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1531482615710-79163e85c220'))),
  _VisualRule(['hot', 'moto', 'tea is hot'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1515823662972-da6a65736362'))),
  _VisualRule(['cold', 'baridi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1559827260-dc66d52bef19'))),
  _VisualRule(['elephant', 'tembo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1556949032-609b381a9e86'))),
  _VisualRule(['mouse', 'panya'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1425086631105-6118147560eb'))),
  _VisualRule(['big', 'kubwa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1556949032-609b381a9e86'))),
  _VisualRule(['small', 'ndogo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1425086631105-6118147560eb'))),
  _VisualRule(['sad', 'huzuni'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544717297-f9e8a7844d22'))),
  _VisualRule(['open', 'funguka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1493809842364-78817add7ffb'))),
  _VisualRule(['closed', 'fungwa'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1502672260266-1c1ef2d93688'))),
  _VisualRule(['balloon', 'puto', 'up', 'juu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1530103862676-de8c9de3801f'))),
  _VisualRule(['ball', 'mpira', 'down', 'chini'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1612872086494-b27904a33731'))),
  _VisualRule(['bird', 'ndege'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1444464666168-49d633b86797'))),
  _VisualRule(['eagle', 'tai'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1452574850495-f6623c6830f2'))),
  _VisualRule(['duck', 'bata'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1559827260-dc66d52bef19'))),
  _VisualRule(['chicken', 'kuku'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1548558933-2bdb6c285060'))),
  _VisualRule(['please', 'tafadhali'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1521791136064-7986c2920216'))),
  _VisualRule(['thank', 'asante'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1516328768425-f75fbb26e079'))),
  _VisualRule(['welcome', 'karibu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529333166436-1ea58s2c6c7d'))),
  _VisualRule(['coming', 'ninakuja', 'kuja'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518611012118-696072aa579a'))),
  _VisualRule(['wait', 'ngoja'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1517298057117-f31d1766b743'))),
  _VisualRule(['father', 'baba'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1500648767791-00dcc994a43e'))),
  _VisualRule(['mother', 'mama'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1438761681033-6461ffad8d80'))),
  _VisualRule(['brother', 'kaka'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507003211169-0a1dd7228f2d'))),
  _VisualRule(['sister', 'dada'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1494790108377-be9c29b29330'))),
  _VisualRule(['grandmother', 'bibi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1581578731548-c64695cc6952'))),
  _VisualRule(['grandfather', 'babu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1560250097-0b93528c311a'))),
  _VisualRule(['love', 'penda'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1518191107774-662f443fd367'))),
  _VisualRule(['morning', 'asubuhi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1470252649378-9c29740c9e59'))),
  _VisualRule(['night', 'usiku'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1519681393784-d120267933ba'))),
  _VisualRule(['today', 'leo'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1470252649378-9c29740c9e59'))),
  _VisualRule(['tomorrow', 'kesho'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1506905925346-21bda4d32df4'))),
  _VisualRule(['read', 'soma', 'learning'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1456513080510-7bf3a84b82f8'))),
  _VisualRule(['speak', 'ongea'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1573497019942-588160662972'))),
  _VisualRule(['strong', 'nguvu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1581009146145-b5ef050c2a1d'))),
  _VisualRule(['weak', 'dhaifu'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1544717297-f9e8a7844d22'))),
  _VisualRule([' i / me', 'mimi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1573497019942-588160662972'))),
  _VisualRule([' you', 'wewe'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529626455594-4ff0802cfb7e'))),
  _VisualRule([' we ', 'sisi'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1529156069898-49953e39b3ac'))),
  _VisualRule([' they', 'wana'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1511895426323-d378787e0c77'))),
  _VisualRule([' he ', ' she ', 'yeye'], SwahiliWordVisual(imageUrl: ngmySwahiliPhoto('photo-1507003211169-0a1dd7228f2d'))),
];

const _kDefaultVisual = SwahiliWordVisual(
  imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=960&h=720&fit=crop&q=92&auto=format&dpr=2',
  caption: 'Learn',
);

SwahiliWordVisual resolveSwahiliWordVisual({required String swahili, required String english}) {
  final swKey = _normSw(swahili);
  final exact = _kExactBySwahili[swKey];
  if (exact != null) return exact;

  final hay = '${swKey} ${english.toLowerCase()}';
  for (final rule in _kRules) {
    for (final kw in rule.keywords) {
      if (hay.contains(kw)) return rule.visual;
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
