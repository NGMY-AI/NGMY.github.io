/* NGMY PWA — cache-first shell so the app opens offline after one online visit. */
'use strict';

function ngmySwQuiet() {}

const CACHE_PREFIX = 'ngmy-pwa-';
function ngmySwBasePath() {
  var p = self.location.pathname || '/';
  return p.replace(/[^/]*$/, '') || '/';
}
const SCOPE_PATH = ngmySwBasePath();
const CACHE_NAME = CACHE_PREFIX + '20261026012443';

/** Same-origin proxy target — never appears in the browser as bright-handler. */
const NGMY_EDGE_UPSTREAM =
  'https://gvufllqqxjnpicmkxzcg.supabase.co/functions/v1/bright-handler';
const NGMY_REST_UPSTREAM =
  'https://gvufllqqxjnpicmkxzcg.supabase.co/rest/v1';

/** ngmy_settings keys that must never download via REST (legacy rows may hold PII). */
const NGMY_SENSITIVE_SETTINGS_KEYS = new Set([
  'civic_self_enrollment_settings',
  'civic_cities_rooms',
  'civic_help_mode_settings',
  'civic_deleted_contribution_ids',
  'civic_contribution_receipt_removed',
  'civic_registry_members',
  'civic_registry_pins',
  'civic_recovery_emails',
  'civic_recovery_inbox',
  'civic_state_registrar_subscriptions',
  'store_sell_access_emails',
  'management_operational_lists',
  'family_tree_photo_access',
  'civic_help_campaign_spendings',
  'game_invites',
  'store_inquiries',
  'store_orders',
  'media_virtual_profiles',
  'ngmy_family_tree_backup_codes_v1',
  'ngmy_family_tree_qr_stashes_v1',
]);

function ngmyIsApiSyncPath(url) {
  return url.pathname === '/api/sync' || url.pathname.endsWith('/api/sync');
}

/** Guest deep links are not real files — GitHub Pages serves 404.html (the SPA). */
function ngmyIsGuestDeepLink(url) {
  return /\/(bio|menu|local-bio|local-menu|invoice|app)\/[^/]+/i.test(url.pathname || '');
}

function ngmyIsApiRestPath(url) {
  return url.pathname.indexOf('/api/rest/v1') !== -1;
}

function ngmyRestUpstreamUrl(url) {
  var idx = url.pathname.indexOf('/api/rest/v1');
  var suffix = url.pathname.substring(idx + '/api/rest/v1'.length);
  return NGMY_REST_UPSTREAM + suffix + url.search;
}

function ngmySensitiveSettingsKey(url) {
  if (url.pathname.indexOf('ngmy_settings') === -1) return '';
  var params = url.searchParams;
  var raw = params.get('key') || '';
  if (raw.indexOf('eq.') === 0) raw = raw.substring(3);
  try {
    raw = decodeURIComponent(raw);
  } catch (_) {}
  return raw.trim();
}

function ngmyBlockSensitiveSettingsGet(request, url) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return null;
  var key = ngmySensitiveSettingsKey(url);
  if (!key) return null;
  if (key.indexOf('civic_') === 0 || NGMY_SENSITIVE_SETTINGS_KEYS.has(key)) {
    return new Response('[]', {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return null;
}

function ngmyBlockSensitiveRest(request, url) {
  var path = url.pathname || '';
  if (path.indexOf('/rpc/') !== -1) return null;
  var blockedTables = [
    'users_store_contact',
    'password_reset_otp',
    'live_help_codes',
    'live_support_sessions',
    'help_applications',
    'help_businesses',
    'help_requests',
  ];
  if (request.method === 'GET' || request.method === 'HEAD') {
    for (var i = 0; i < blockedTables.length; i++) {
      if (path.indexOf(blockedTables[i]) !== -1) {
        return new Response('[]', {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }
  }
  return ngmyBlockSensitiveSettingsGet(request, url);
}

async function ngmyProxyApiSync(request) {
  var headers = new Headers(request.headers);
  if (!headers.get('content-type')) headers.set('content-type', 'application/json');
  var body = await request.text();
  var res = await fetch(NGMY_EDGE_UPSTREAM, {
    method: 'POST',
    headers: headers,
    body: body,
  });
  var text = await res.text();
  return new Response(text, {
    status: res.status,
    statusText: res.statusText,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function ngmyProxyApiRest(request) {
  var url = new URL(request.url);
  var blocked = ngmyBlockSensitiveRest(request, url);
  if (blocked) return blocked;

  var headers = new Headers(request.headers);
  var upstream = ngmyRestUpstreamUrl(url);
  var init = {
    method: request.method,
    headers: headers,
  };
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    init.body = await request.clone().arrayBuffer();
  }
  var res = await fetch(upstream, init);
  return res;
}

/** './path' -> content hash for every published file. Unchanged files are copied
 *  from the previous deploy's cache instead of being downloaded again. */
const PRECACHE_REVS = {"./.last_build_id": "14678e4d64ebd8ad", "./.nojekyll": "d41d8cd98f00b204", "./404.html": "820cedb7acab34f6", "./CNAME": "4bd60f2c33459b12", "./assets/AssetManifest.bin": "255974b68dca2b62", "./assets/AssetManifest.bin.json": "16fed5ab1ed27bad", "./assets/FontManifest.json": "d583bb643b4d2d98", "./assets/assets/bio_link_icons/facebook.png": "8df53074d921d7a5", "./assets/assets/bio_link_icons/instagram.png": "d635dc103fe1dcf6", "./assets/assets/bio_link_icons/tiktok.png": "82ec4e42f2613ce1", "./assets/assets/bio_link_icons/youtube.png": "c76185bfa63f406b", "./assets/assets/data/body3d.bin": "ec168ccfeb62cdd8", "./assets/assets/data/body3d_lite.bin": "a48e51ea7ab5d9a8", "./assets/assets/data/elements.json": "79edcccba9ceff17", "./assets/assets/data/three.min.js": "cd7f71f87efb21f0", "./assets/assets/data/world110.json": "a65afd67dfd337d1", "./assets/assets/fonts/NotoColorEmoji.ttf": "46d5c51b979f9196", "./assets/assets/fonts/Roboto-Bold.ttf": "a68db3b33213fa13", "./assets/assets/fonts/Roboto-Light.ttf": "8d252992868e895b", "./assets/assets/fonts/Roboto-Medium.ttf": "989d2dff37a09f19", "./assets/assets/fonts/Roboto-Regular.ttf": "8f793587dcf03f31", "./assets/assets/images/advisors/bible_study_teacher_f.jpg": "29f4f22a98b0d5da", "./assets/assets/images/advisors/bible_study_teacher_m.jpg": "ff4aaf2e9e71a8c0", "./assets/assets/images/advisors/career_coach_m.jpg": "93eaf3c1a012a08c", "./assets/assets/images/advisors/companion_f.jpg": "f76e14b70b5dfc1a", "./assets/assets/images/advisors/companion_m.jpg": "c785791e7892c70b", "./assets/assets/images/advisors/doctor_f.jpg": "2fb4053d5c88288a", "./assets/assets/images/advisors/doctor_m.jpg": "93ab165ee30e339f", "./assets/assets/images/advisors/financial_advisor_f.jpg": "b73dd5b4ef697af4", "./assets/assets/images/advisors/financial_advisor_m.jpg": "c3fdc7f3f688070c", "./assets/assets/images/advisors/fitness_coach_m.jpg": "2c4892cf19c6a8d4", "./assets/assets/images/advisors/lawyer_f.jpg": "bb96eddd81558c79", "./assets/assets/images/advisors/lawyer_m.jpg": "018e938f444c7f7d", "./assets/assets/images/advisors/marriage_advisor_f.jpg": "646e6a35a27c6584", "./assets/assets/images/advisors/marriage_advisor_m.jpg": "404ebe463967f8dc", "./assets/assets/images/advisors/mshauri_m.jpg": "ff42ea519c862b13", "./assets/assets/images/advisors/pastor_m.jpg": "ad2c06e956c3b10f", "./assets/assets/images/advisors/person_alex_remy.jpg": "b5106a12c81c6a71", "./assets/assets/images/advisors/person_alisa_john.jpg": "df5efdb5760200c3", "./assets/assets/images/advisors/person_anna_amuri.jpg": "9e22ea4ae807ae2a", "./assets/assets/images/advisors/person_chloe_mitchell.jpg": "29f4f22a98b0d5da", "./assets/assets/images/advisors/person_grace_anderson.jpg": "28a7a1921587f0bd", "./assets/assets/images/advisors/person_isaiah_john.jpg": "ff4aaf2e9e71a8c0", "./assets/assets/images/advisors/person_jeremiah_nesto.jpg": "e9e4437a3bdf0523", "./assets/assets/images/advisors/person_mina.jpg": "5bd415401c0e6761", "./assets/assets/images/advisors/person_miriam.jpg": "bb20fabb5caa0232", "./assets/assets/images/advisors/person_nia_robertson.jpg": "9e04a5e61fe48eef", "./assets/assets/images/advisors/person_olivia_bennett.jpg": "16114f92d325cb68", "./assets/assets/images/advisors/person_sophie_morgan.jpg": "5605b640ef282d0c", "./assets/assets/images/advisors/person_susie.jpg": "dfa9dbbce9d2c097", "./assets/assets/images/advisors/person_suzana_mbuto.jpg": "264bede99d5d85f8", "./assets/assets/images/advisors/person_suzana_vanessa.jpg": "38237d53e4ae906e", "./assets/assets/images/advisors/teacher_f.jpg": "1315f58bbde3952f", "./assets/assets/images/advisors/teacher_m.jpg": "44e0974febbe21c3", "./assets/assets/images/advisors/therapist_f.jpg": "084b863611f7e7e7", "./assets/assets/images/ngmy_document_ask_icon.png": "788668a305c84d51", "./assets/assets/images/ngmy_logo.png": "5586df2d5317bc40", "./assets/assets/images/swahili/1432405972618-c60b0225b8f9.jpg": "14f45da805baf036", "./assets/assets/images/swahili/1435527173128-983b87201f4d.jpg": "9a87fa619f48d10c", "./assets/assets/images/swahili/1444464666168-49d633b86797.jpg": "544f9eb53330a921", "./assets/assets/images/swahili/1456513080510-7bf3a84b82f8.jpg": "7b3d1898c7daa7f2", "./assets/assets/images/swahili/1457383457550-47a5cfdbab17.jpg": "76bb841b413450b3", "./assets/assets/images/swahili/1472214103451-9374bd1c798e.jpg": "c0ac3a1dc4673092", "./assets/assets/images/swahili/1487956382158-bb926046304a.jpg": "b5a2fc643ef48af3", "./assets/assets/images/swahili/1488132828189-4e416661b680.jpg": "ccf0f0a648e53412", "./assets/assets/images/swahili/1489112318845-bcfb7233b1a1.jpg": "d6047de722c07aa5", "./assets/assets/images/swahili/1489275259429-70f6ef5705c1.jpg": "c2feaab1c55ba531", "./assets/assets/images/swahili/1490127252417-7c393f993ee4.jpg": "2a78d4a759c9bc39", "./assets/assets/images/swahili/1491414416654-c4de0c986af8.jpg": "39e2bfd22ffe0364", "./assets/assets/images/swahili/1491929536571-bdbc57e72324.jpg": "0cff9bc1ae3fdbfd", "./assets/assets/images/swahili/1492684223066-81342ee5ff30.jpg": "aed8e728c05eb132", "./assets/assets/images/swahili/1493612276216-ee3925520721.jpg": "50c05a9712ce81d6", "./assets/assets/images/swahili/1493836512294-502baa1986e2.jpg": "e6beb67dd421f9a3", "./assets/assets/images/swahili/1494790108377-be9c29b29330.jpg": "17b3056765b573b6", "./assets/assets/images/swahili/1495020689067-958852a7765e.jpg": "707236a951d9c03f", "./assets/assets/images/swahili/1501743411739-de52ea0ce6a0.jpg": "8ebaf53f6b773057", "./assets/assets/images/swahili/1502355984-b735cb2550ce.jpg": "2f3beb0596c01236", "./assets/assets/images/swahili/1502663656924-a7163d645e0c.jpg": "b571839eac2184ff", "./assets/assets/images/swahili/1504674900247-0877df9cc836.jpg": "d877a9a45e0bbc56", "./assets/assets/images/swahili/1506869640319-fe1a24fd76dc.jpg": "d13a02c040a5f37c", "./assets/assets/images/swahili/1507003211169-0a1dd7228f2d.jpg": "d08e722720e15ce2", "./assets/assets/images/swahili/1507206130118-b5907f817163.jpg": "a338cc4eef37530e", "./assets/assets/images/swahili/1508455858334-95337ba25607.jpg": "d2bd933a2de93a98", "./assets/assets/images/swahili/1515378791036-0648a3ef77b2.jpg": "08efff83255e0306", "./assets/assets/images/swahili/1516382022989-cd771ab91fb1.jpg": "acfde0ef27eaba58", "./assets/assets/images/swahili/1516749712236-67f5688a642a.jpg": "c8da476816145350", "./assets/assets/images/swahili/1517545084371-4a575dde2a02.jpg": "990e10c95917f8cf", "./assets/assets/images/swahili/1517836357463-d25dfeac3438.jpg": "22ac9cf58e160258", "./assets/assets/images/swahili/1517870662726-c1d98ee36250.jpg": "3e2aadddd4d22042", "./assets/assets/images/swahili/1517884885877-a46b0f5327db.jpg": "9401d0c311f36f86", "./assets/assets/images/swahili/1518281361980-b26bfd556770.jpg": "9aed03947f17ba53", "./assets/assets/images/swahili/1518843875459-f738682238a6.jpg": "9d2533782b71faa0", "./assets/assets/images/swahili/1519681393784-d120267933ba.jpg": "041376ef01b84037", "./assets/assets/images/swahili/1519996529931-28324d5a630e.jpg": "dd16782e9ce8c014", "./assets/assets/images/swahili/1520006507663-f34ed4a17b4c.jpg": "6e86e6459536d67a", "./assets/assets/images/swahili/1520187044487-b2efb58f0cba.jpg": "b399060eba27cfba", "./assets/assets/images/swahili/1521791136064-7986c2920216.jpg": "c6db5c1b3e92496b", "./assets/assets/images/swahili/1522771739844-6a9f6d5f14af.jpg": "d20942479e2ff712", "./assets/assets/images/swahili/1524601500432-1e1a4c71d692.jpg": "2b9058417ae82bd3", "./assets/assets/images/swahili/1525206809752-65312b959c88.jpg": "38843db89f2c7470", "./assets/assets/images/swahili/1530013255753-3f6578d19059.jpg": "b1e7cd2957490876", "./assets/assets/images/swahili/1531379410502-63bfe8cdaf6f.jpg": "dd6aa938cfada159", "./assets/assets/images/swahili/1531873252757-8c22fa9e7a98.jpg": "4216da4d674300a2", "./assets/assets/images/swahili/1535588986102-0e9c0c60cba2.jpg": "1a0088db20ae99b6", "./assets/assets/images/swahili/1536816579748-4ecb3f03d72a.jpg": "94ec046160f1cf6c", "./assets/assets/images/swahili/1541089404510-5c9a779841fc.jpg": "914109d51aca581b", "./assets/assets/images/swahili/1541480601022-2308c0f02487.jpg": "bb2dc206b78875e3", "./assets/assets/images/swahili/1542014740373-51ad6425eb7c.jpg": "a6f46ea5fbb61e09", "./assets/assets/images/swahili/1542229538-4d8784038379.jpg": "970247b722a5c415", "./assets/assets/images/swahili/1543265489-6130022b8561.jpg": "f52eda042647e4e8", "./assets/assets/images/swahili/1543807535-eceef0bc6599.jpg": "8643d7ee0b9ffa97", "./assets/assets/images/swahili/1543980932-b5fc649a8000.jpg": "632d8f48601b19e1", "./assets/assets/images/swahili/1544787219-7f47ccb76574.jpg": "dc3ba3cf33f72398", "./assets/assets/images/swahili/1548550023-2bdb3c5beed7.jpg": "888bb94df7f053da", "./assets/assets/images/swahili/1548780607-46c78f38182d.jpg": "664ca80f27d084eb", "./assets/assets/images/swahili/1549068294-04a001ee0638.jpg": "eaa72967bd81550c", "./assets/assets/images/swahili/1549923746-c502d488b3ea.jpg": "780b3bcc5d1e37e4", "./assets/assets/images/swahili/1552452380-4137214f33b6.jpg": "9702a3c8398d31f4", "./assets/assets/images/swahili/1552664730-d307ca884978.jpg": "eb7890911034a92c", "./assets/assets/images/swahili/1552846573-47e482355fa7.jpg": "2aa5d7f127cbd9dd", "./assets/assets/images/swahili/1552862750-746b8f6f7f25.jpg": "313a58917241275d", "./assets/assets/images/swahili/1553729784-e91953dec042.jpg": "c60d9ff2d8218efe", "./assets/assets/images/swahili/1554188572-9d184b57d8e2.jpg": "6ee4cc82c51e043e", "./assets/assets/images/swahili/1556848527-f7c548b972b2.jpg": "7b7846eb16f543f8", "./assets/assets/images/swahili/1556911220-e15b29be8c8f.jpg": "449de511870e0c9b", "./assets/assets/images/swahili/1557050543-4d5f4e07ef46.jpg": "7a9168bad1b45c1c", "./assets/assets/images/swahili/1557176278-3326a3193580.jpg": "3e7e51b8d358ef97", "./assets/assets/images/swahili/1558541966-ee7182e26d63.jpg": "94825a65c349890f", "./assets/assets/images/swahili/1559150182-a7144f7628f9.jpg": "398f9260528813f8", "./assets/assets/images/swahili/1559769732-3a943df124b0.jpg": "1cf4f944af49bcba", "./assets/assets/images/swahili/1560707854-fb9a10eeaace.jpg": "ca13fc7a304e737c", "./assets/assets/images/swahili/1560986752-2e31d9507413.jpg": "9f08bac675ad5fbc", "./assets/assets/images/swahili/1561089489-f13d5e730d72.jpg": "1bdab76d3dcfcdd9", "./assets/assets/images/swahili/1563176137-45a7f3917371_portrait.jpg": "f2c86afe3f5d630b", "./assets/assets/images/swahili/1564013799919-ab600027ffc6.jpg": "ae504053e3bc72f9", "./assets/assets/images/swahili/1566653223195-e09604588c9f.jpg": "9ac278fe1da71618", "./assets/assets/images/swahili/1570563169510-ac9c2c3cad68.jpg": "336b13e50d69f143", "./assets/assets/images/swahili/1572707691993-29c96332f6be.jpg": "9cfd4808fd2fbe9c", "./assets/assets/images/swahili/1573376670329-0261ea9fde97.jpg": "6c3aae752966006e", "./assets/assets/images/swahili/1578125468943-b963a1daa385.jpg": "cff0840828fdfb5f", "./assets/assets/images/swahili/1578625155481-7bc40a6481b6.jpg": "5f6830227a490609", "./assets/assets/images/swahili/1578651714116-2a1645b70c0f.jpg": "839fd3e092ed8a0a", "./assets/assets/images/swahili/1580446623001-3abf670c5c55.jpg": "94acdccd7831caad", "./assets/assets/images/swahili/1581889470536-467bdbe30cd0.jpg": "cb211aaf3ee4f0bf", "./assets/assets/images/swahili/1582213782179-e0d53f98f2ca.jpg": "e233bda21954cf00", "./assets/assets/images/swahili/1582298538104-fe2e74c27f59.jpg": "1cf3d695387c4335", "./assets/assets/images/swahili/1583162814461-3879bd80fd77.jpg": "f84481a50fe37b1d", "./assets/assets/images/swahili/1583264277168-58ceba4b84e7.jpg": "535b8c7a792fd1b7", "./assets/assets/images/swahili/1586276632510-a680c3db9a10.jpg": "da506a3125670203", "./assets/assets/images/swahili/1586473219010-2ffc57b0d282.jpg": "e6fc1fb96430f8e2", "./assets/assets/images/swahili/1586726370832-3440a511e479.jpg": "0b0966a7bb3c9790", "./assets/assets/images/swahili/1592890288564-76628a30a657.jpg": "e3a3e279776c3379", "./assets/assets/images/swahili/1593100126453-19b562a800c1.jpg": "091be342a9cd2f1b", "./assets/assets/images/swahili/1594383538644-66fcb99ae1ed.jpg": "aef95c4b294896a6", "./assets/assets/images/swahili/1597213669181-6276d2315b55.jpg": "18cf8cd58ac63cc8", "./assets/assets/images/swahili/1600041967514-701d405228c6.jpg": "21bd96ad26d281ef", "./assets/assets/images/swahili/1600603406200-5b2a104684ac.jpg": "78f674c5bbde10f2", "./assets/assets/images/swahili/1612883833766-7930d960e16f.jpg": "7f9b98833b515871", "./assets/assets/images/swahili/1612996860234-f1322906438a.jpg": "cd15145074a7ef3e", "./assets/assets/images/swahili/1618037087830-5e746497905b.jpg": "3aeb7a6559ab5dcb", "./assets/assets/images/swahili/1618886614638-80e3c103d31a.jpg": "28db15d02b9b40b9", "./assets/assets/images/swahili/1619016145369-0ff98d539993.jpg": "1b3fba7cb210ad1b", "./assets/assets/images/swahili/1621273974250-faeb23660cdf.jpg": "2b12c2bef557ac88", "./assets/assets/images/swahili/1622768766607-922825162edc.jpg": "29cff3b2ecf196e2", "./assets/assets/images/swahili/1632144130358-6cfeed023e27.jpg": "288d51bbbc913a31", "./assets/assets/images/swahili/1633092539352-4d458d94cfe4.jpg": "e73824ea0044b174", "./assets/assets/images/swahili/1633613286848-e6f43bbafb8d.jpg": "3efad976afd50001", "./assets/assets/images/swahili/1636320966479-4842be49dd2e.jpg": "5124b92468528c65", "./assets/assets/images/swahili/1636592358465-37c526b978d2.jpg": "f090c9b191dca1de", "./assets/assets/images/swahili/1636987050384-9b079c700f63.jpg": "63ed68a5654acea6", "./assets/assets/images/swahili/1639600281360-2c158cb8391a.jpg": "875ff97cfba3983e", "./assets/assets/images/swahili/1642943392730-ae57c9b77522.jpg": "7b80652d11d94cca", "./assets/assets/images/swahili/1646340621112-dd3c96797887.jpg": "3f7abdb03a687da1", "./assets/assets/images/swahili/1655506207889-4f130f49797f.jpg": "7eb58b2dfb371912", "./assets/assets/images/swahili/1656019838845-757b4200dfd5.jpg": "cfdd411f11bdac50", "./assets/assets/images/swahili/1659352152794-b1cf311f112c.jpg": "e64be63c8bcfb6bf", "./assets/assets/images/swahili/1659924086637-803c92f2dac8.jpg": "222ee0528df4fad1", "./assets/assets/images/swahili/1660489744575-81ab10cf06b7_portrait.jpg": "53fbc0afc70dd936", "./assets/assets/images/swahili/1672266353368-7df4d6d963de.jpg": "1e8ee97d16d237e9", "./assets/assets/images/swahili/1673048297932-ad2caa4a7a59.jpg": "82813ebded743ecd", "./assets/assets/images/swahili/1673515336414-0db19994707f.jpg": "5975eab8b3b69ba8", "./assets/assets/images/swahili/1678923685297-0ade9816275e.jpg": "d5d75ff8895200ac", "./assets/assets/images/swahili/1685031924917-aa16bb9d2c25.jpg": "be4460c433d4089d", "./assets/assets/images/swahili/1687585612416-c7e45dbb27d5.jpg": "ea419c2043750ca1", "./assets/assets/images/swahili/1689143947647-062e1a24bf2d.jpg": "b97080884046f127", "./assets/assets/images/swahili/1690681737765-87873d223aff.jpg": "1c1d3dac5ab35147", "./assets/assets/images/swahili/1691071666279-58adb714d0b8.jpg": "ce1001bcb0ed1ac0", "./assets/assets/images/swahili/1697142985510-86fa2ea314d9.jpg": "f1962d5616995e01", "./assets/assets/images/swahili/1697639659506-ada9b78ae2ae.jpg": "dc1a90f8cd1d6a46", "./assets/assets/images/swahili/1699870225928-f366b1f04679.jpg": "30940ea5684ad68e", "./assets/assets/images/swahili/1702065612691-877a245777ad.jpg": "e3e49835d8777e2e", "./assets/assets/images/swahili/1702065612921-fcf9e698dccc.jpg": "36b7eed4bc71250a", "./assets/assets/images/swahili/1704265586142-db3e17d0dea0.jpg": "b40fb0b7f69bfecc", "./assets/assets/images/swahili/1711871549711-4717086bfab9.jpg": "efbacddebabe5e38", "./assets/assets/images/swahili/1713947501966-34897f21162e.jpg": "81a1c85322212183", "./assets/assets/images/swahili/1718382341267-aef8a9e4ecef.jpg": "349edd93198dcdf7", "./assets/assets/images/swahili/1738739907433-10601360cee3.jpg": "83e9c785ceb80202", "./assets/assets/images/swahili/1758270704286-83476deb3bd1.jpg": "f440ae534cc0caab", "./assets/assets/images/swahili/1758274252296-a63b1d7d4bb8.jpg": "c9a81fb0e406c0c5", "./assets/assets/images/swahili/1758525224242-cdcf50a54d58.jpg": "ec5dfa9012fd2e75", "./assets/assets/images/swahili/1758599543122-fc551c9b4b1c.jpg": "c980a24244679cf7", "./assets/assets/images/swahili/1758599668796-cdd37f4ecb66.jpg": "0dc18bd027a0e6aa", "./assets/assets/images/swahili/1758600432914-2b5f4483c7b8.jpg": "07a2f945a2fe4c72", "./assets/assets/images/swahili/1758600588075-337dfa176a31.jpg": "0fd4324c12573f3c", "./assets/assets/images/swahili/1758600588332-f115280edb2e.jpg": "6e5e4199ca3fb9fd", "./assets/assets/images/swahili/1758686254563-5c5ab338c8b9.jpg": "e7ba4d96271564ce", "./assets/assets/images/swahili/1758691030490-fe1cb6c972ce.jpg": "d82db5c57741e734", "./assets/assets/images/swahili/1758691463384-771db2f192b3.jpg": "656f23dec749836b", "./assets/assets/images/swahili/1758874572647-407688dfd807.jpg": "7032f713538ea46e", "./assets/assets/images/swahili/1759405185577-4ba456d4bdc7.jpg": "6bbd6cc7bd3328b6", "./assets/assets/images/swahili/1760114852784-ec280f0a62e2.jpg": "c1f47f6199025725", "./assets/assets/images/swahili/1760897008085-61143d503763.jpg": "9da69484615e8f98", "./assets/assets/images/swahili/1762328003206-03a1ff078062.jpg": "2e82aa1ce7ae2e0b", "./assets/assets/images/swahili/1762328006833-b1c850d57618.jpg": "3ab4322af138d36c", "./assets/assets/images/swahili/1762328022007-edc2c770d350.jpg": "5eb59b5206e52937", "./assets/assets/images/swahili/1762351934738-2af558786537.jpg": "8df44e2c699cea0f", "./assets/assets/images/swahili/1763727288483-ea361a563531.jpg": "b98dabaf6ceabc1d", "./assets/assets/images/swahili/1764351661329-8d76178e02b3.jpg": "7e8ec9fb3ab15b54", "./assets/assets/images/swahili/1766229034549-0103e6d4a75f.jpg": "05c72d4b5f68d4c9", "./assets/assets/images/swahili/1766970096331-78c8af007a3b.jpg": "c81779e25b6fdcb8", "./assets/assets/images/swahili/1768299582669-430739acc3d9.jpg": "2b605d62218fff23", "./assets/assets/images/swahili/1768751947109-d2a99be1aa9c.jpg": "f1dde9b8e297b2f5", "./assets/assets/images/swahili/1769708046949-108aa733f753.jpg": "1830a03d0a26c77f", "./assets/assets/images/swahili/1771570665615-453f75881df2.jpg": "bbb7263d0ffc0413", "./assets/assets/images/swahili/1774619511446-f2af7584db46.jpg": "9b6d15b85881191c", "./assets/assets/images/swahili/1774674534737-8a5fc71699b8.jpg": "c05e3beab6106149", "./assets/assets/images/swahili/1774797405372-52737eeafc1e.jpg": "9a17c04d13515e96", "./assets/assets/images/swahili/1775163024488-e88e4a71179f.jpg": "c09cfc1fc3d23491", "./assets/assets/images/swahili/1775308519753-e8aee2262bf3.jpg": "5de48747d0ea67d3", "./assets/assets/images/swahili/1776883591149-e93c3027c51f.jpg": "24b64dcc5a447e1a", "./assets/assets/images/swahili/1778342261377-9248c3dd10fd.jpg": "248e5d956b79344b", "./assets/assets/images/swahili/1778502802065-d24cd36b5731.jpg": "46b3094e2512e451", "./assets/assets/images/swahili/1779133558796-c7bf60f22208.jpg": "22117a2585d7a835", "./assets/assets/images/swahili/1780027684177-d297178ea31c.jpg": "392999a984c89113", "./assets/assets/images/swahili/1781935307689-920207af57db.jpg": "00bee4c82ddc30c7", "./assets/assets/news_fonts/AbrilFatface-Regular.ttf": "8c6847c75ae35d0c", "./assets/assets/news_fonts/OldStandard-Bold.ttf": "62043bcac6936cc1", "./assets/assets/news_fonts/OldStandard-Italic.ttf": "e15459ba33dae663", "./assets/assets/news_fonts/OldStandard-Regular.ttf": "5d36040c5873ad77", "./assets/assets/news_fonts/UnifrakturCook-Bold.ttf": "f1f39b8b466277ef", "./assets/assets/sounds/README.md": "7d70514fd92d1ff7", "./assets/assets/sounds/YTMP3GG_YouTube_Kaching-sound-effect-sound-sounds-sounde_Media_a7Vue-A0BOY_007_128k.mp3": "7092bb58b64971d5", "./assets/assets/sounds/income_cash.mp3": "7092bb58b64971d5", "./assets/assets/twemoji/1f1f9-1f1ff.png": "82728ba56ae88cd8", "./assets/assets/twemoji/1f1fa-1f1f8.png": "8fc9e2f18b560223", "./assets/assets/twemoji/1f30a.png": "ceca0789a6e5352b", "./assets/assets/twemoji/1f319.png": "582f426ea93b0594", "./assets/assets/twemoji/1f31e.png": "ab6e013f80110ad4", "./assets/assets/twemoji/1f33f.png": "3d7ba4d0f9dfa0e2", "./assets/assets/twemoji/1f347.png": "f7b6ea8263815300", "./assets/assets/twemoji/1f34a.png": "3f5caead6872798d", "./assets/assets/twemoji/1f34f.png": "e4a72c6f0188d9e9", "./assets/assets/twemoji/1f352.png": "db99e6137ae2d006", "./assets/assets/twemoji/1f36b.png": "99b0e6c94d813eaa", "./assets/assets/twemoji/1f36c.png": "07e2dabf0a6ee7a6", "./assets/assets/twemoji/1f373.png": "bca52699c7f46c4f", "./assets/assets/twemoji/1f381.png": "55898fa8b8df2b1c", "./assets/assets/twemoji/1f389.png": "bdb5d64480323253", "./assets/assets/twemoji/1f393.png": "ceb0f758fa96aa54", "./assets/assets/twemoji/1f3a8.png": "489face11257c208", "./assets/assets/twemoji/1f3ae.png": "e6da782937b09c73", "./assets/assets/twemoji/1f3af.png": "06b300d40615d296", "./assets/assets/twemoji/1f3b5.png": "509cd03904e64d1a", "./assets/assets/twemoji/1f3e0.png": "4b45c9c4ca608fe6", "./assets/assets/twemoji/1f3e2.png": "49ee96e053f63337", "./assets/assets/twemoji/1f42c.png": "bb41830430ddd01c", "./assets/assets/twemoji/1f44d.png": "4a32750fe064ddf8", "./assets/assets/twemoji/1f44f.png": "1f0833639cc6fbb9", "./assets/assets/twemoji/1f464.png": "a21ac1e46d02b168", "./assets/assets/twemoji/1f468-1f3fb-200d-1f9b1.png": "a36b3c9d0e06701a", "./assets/assets/twemoji/1f468-1f3fb.png": "79bb75dfbcb56e1e", "./assets/assets/twemoji/1f468-1f3fd-200d-1f393.png": "4b2e51d3837f3470", "./assets/assets/twemoji/1f468-1f3fd-200d-1f4bc.png": "f055b502e4c671c2", "./assets/assets/twemoji/1f468-1f3fd-200d-1f9b1.png": "6aac46ae418ca14d", "./assets/assets/twemoji/1f468-1f3fd.png": "8be6d25475a33741", "./assets/assets/twemoji/1f468-1f3fe-200d-1f393.png": "faf324b6573d1ddb", "./assets/assets/twemoji/1f468-1f3fe-200d-1f4bc.png": "f84e6ab150e87c8d", "./assets/assets/twemoji/1f468-1f3fe-200d-1f9b1.png": "0fc9a89b1938c43a", "./assets/assets/twemoji/1f468-1f3fe-200d-1f9b2.png": "0365f0e88919e661", "./assets/assets/twemoji/1f468-1f3fe.png": "2828f4b7d4a3b358", "./assets/assets/twemoji/1f468-1f3ff-200d-1f4bc.png": "eea0f282675d8714", "./assets/assets/twemoji/1f468-1f3ff-200d-1f9b1.png": "e7315ba3f328d4b2", "./assets/assets/twemoji/1f468-1f3ff-200d-1f9b2.png": "4a1eb6e4647a238e", "./assets/assets/twemoji/1f468-1f3ff.png": "255c7b0f74e9993b", "./assets/assets/twemoji/1f468-200d-1f393.png": "1b01872f4909954c", "./assets/assets/twemoji/1f468-200d-1f4bc.png": "d2b44b09eb1e78af", "./assets/assets/twemoji/1f468.png": "ddd49436665b49b1", "./assets/assets/twemoji/1f469-1f3fb-200d-1f393.png": "a15fba7c6865f4cc", "./assets/assets/twemoji/1f469-1f3fb-200d-1f9b1.png": "915bbce6d47ab4fc", "./assets/assets/twemoji/1f469-1f3fb.png": "ddfe84ec2eec6b6f", "./assets/assets/twemoji/1f469-1f3fd-200d-1f393.png": "50c6484981bbd19f", "./assets/assets/twemoji/1f469-1f3fd-200d-1f4bc.png": "71988374b3f54f5d", "./assets/assets/twemoji/1f469-1f3fd-200d-1f9b1.png": "ea66abb1f617a509", "./assets/assets/twemoji/1f469-1f3fd.png": "f73cada71f99c6ee", "./assets/assets/twemoji/1f469-1f3fe-200d-1f393.png": "ed48537e5ec2a52c", "./assets/assets/twemoji/1f469-1f3fe-200d-1f4bc.png": "f3ce85c559867f44", "./assets/assets/twemoji/1f469-1f3fe-200d-1f9b1.png": "141499ca435baf72", "./assets/assets/twemoji/1f469-1f3fe-200d-1f9b3.png": "9197fe0c7e7d3e8b", "./assets/assets/twemoji/1f469-1f3fe.png": "50d6ad17ef4da7a8", "./assets/assets/twemoji/1f469-1f3ff-200d-1f4bc.png": "1b269128c98fb5b7", "./assets/assets/twemoji/1f469-1f3ff-200d-1f9b1.png": "c3c6c80bb8cdcf88", "./assets/assets/twemoji/1f469-1f3ff-200d-1f9b3.png": "018bc682f1820455", "./assets/assets/twemoji/1f469-1f3ff.png": "9c6f1693c937b37f", "./assets/assets/twemoji/1f469-200d-1f393.png": "bc4ceed0b95c0222", "./assets/assets/twemoji/1f469-200d-1f4bc.png": "5910e54508c02d2d", "./assets/assets/twemoji/1f469.png": "837643d3c7072b92", "./assets/assets/twemoji/1f499.png": "467cc46fff85ec3a", "./assets/assets/twemoji/1f4a1.png": "cddcb146e40e2855", "./assets/assets/twemoji/1f4aa.png": "2717083cb41fc015", "./assets/assets/twemoji/1f4b0.png": "7440490f6d702efa", "./assets/assets/twemoji/1f4bc.png": "fc251e20f90bb724", "./assets/assets/twemoji/1f4c5.png": "c22d7ab7235506c9", "./assets/assets/twemoji/1f4c8.png": "2b5373f624e6a849", "./assets/assets/twemoji/1f4ca.png": "4a56f162dc667d8c", "./assets/assets/twemoji/1f4cb.png": "57826d2f0468e14e", "./assets/assets/twemoji/1f4cc.png": "730a5af2c5b23401", "./assets/assets/twemoji/1f4ce.png": "080891cecd392202", "./assets/assets/twemoji/1f4da.png": "9779d6223243e1e3", "./assets/assets/twemoji/1f4dd.png": "a837460f7144f3e1", "./assets/assets/twemoji/1f4de.png": "5d28428f24ad7910", "./assets/assets/twemoji/1f50d.png": "0992646745fa597f", "./assets/assets/twemoji/1f525.png": "4862859d393b2a68", "./assets/assets/twemoji/1f52c.png": "af904e72dbe90088", "./assets/assets/twemoji/1f58c.png": "bc71bc037caffdb2", "./assets/assets/twemoji/1f5a4.png": "2d8d0f6b741fc113", "./assets/assets/twemoji/1f5c2.png": "b67d33b35e09dbf4", "./assets/assets/twemoji/1f600.png": "e78e35bed487156d", "./assets/assets/twemoji/1f60a.png": "f3dc4d5d73a22e9f", "./assets/assets/twemoji/1f60d.png": "7df0abbe6af9d220", "./assets/assets/twemoji/1f60e.png": "88ada2fb42252591", "./assets/assets/twemoji/1f634.png": "e05fc242525b92fd", "./assets/assets/twemoji/1f642.png": "39a7d733bfd9e00e", "./assets/assets/twemoji/1f64c.png": "6f8a3a69b6068769", "./assets/assets/twemoji/1f680.png": "ba144bc65dc6e3c7", "./assets/assets/twemoji/1f6d2.png": "61822a6c767d93fe", "./assets/assets/twemoji/1f914.png": "5fb4adfc0cd59bed", "./assets/assets/twemoji/1f91d.png": "93f2145274471188", "./assets/assets/twemoji/1f929.png": "121fe41ff17c002c", "./assets/assets/twemoji/1f973.png": "a400b6f9bc215e20", "./assets/assets/twemoji/1f9d4-200d-2642-fe0f.png": "82e2545609a232fe", "./assets/assets/twemoji/1f9d4.png": "4159eef9389e436a", "./assets/assets/twemoji/1f9d5.png": "56098b3830913c12", "./assets/assets/twemoji/1fa75.png": "e09ecd762b11181e", "./assets/assets/twemoji/1faa3.png": "51853fd31cce3cb9", "./assets/assets/twemoji/2139.png": "a0b183f97a68e698", "./assets/assets/twemoji/23f0.png": "0bfac4d5a95007e8", "./assets/assets/twemoji/2615.png": "c8cfa4ddc8ead6a5", "./assets/assets/twemoji/26a0.png": "67bc03a2a5af4886", "./assets/assets/twemoji/26a1.png": "78140684f45698ca", "./assets/assets/twemoji/26c4.png": "4a8ba8e3051d3c6f", "./assets/assets/twemoji/2705.png": "ef35182d3e35a35f", "./assets/assets/twemoji/2708.png": "4092b23b2885d030", "./assets/assets/twemoji/2709.png": "7b85299402563352", "./assets/assets/twemoji/2728.png": "f0b83452d2b81550", "./assets/assets/twemoji/2764.png": "d881b7fa7626554b", "./assets/assets/twemoji/2b50.png": "7db170b9ef39da80", "./assets/assets/video_studio/yt_news_desk.png": "febdf8539bea3565", "./assets/assets/video_studio/yt_studio_curved.png": "695a3919a3720a43", "./assets/fonts/MaterialIcons-Regular.otf": "508a3e994eab85d1", "./assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c", "./assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af971", "./assets/shaders/ink_sparkle.frag": "2815c3cf1e7af2d8", "./assets/shaders/stretch_effect.frag": "f0ab847ccb98001d", "./canvaskit/canvaskit.js": "0e52934f95b3110d", "./canvaskit/canvaskit.wasm": "55ed327d19d29777", "./canvaskit/chromium/canvaskit.js": "c9789bccdd6aa497", "./canvaskit/chromium/canvaskit.wasm": "9b3afceb708d74bd", "./canvaskit/skwasm.js": "514fe49598370b06", "./canvaskit/skwasm.wasm": "3140d44e18c506c8", "./canvaskit/skwasm_heavy.js": "b0f50d611a7641ff", "./canvaskit/skwasm_heavy.wasm": "76b8aa19738d3558", "./canvaskit/webparagraph/canvaskit.js": "003f529b235d9f71", "./canvaskit/webparagraph/canvaskit.wasm": "8cecf3b9c2e82705", "./canvaskit/wimp.js": "e6084b5f6628d1ff", "./canvaskit/wimp.wasm": "9173d3df97ed5176", "./favicon.png": "a3ec9f47956e32ba", "./flutter.js": "6c17417d16074f99", "./flutter_bootstrap.js": "0aa0429bc5f69d62", "./icons/Icon-192.png": "8e567229b2f2936d", "./icons/Icon-512.png": "e1d50c8edfacd3ff", "./icons/Icon-maskable-192.png": "8e567229b2f2936d", "./icons/Icon-maskable-512.png": "e1d50c8edfacd3ff", "./icons/apple-touch-icon-180.png": "183e2b89f97418af", "./index.html": "820cedb7acab34f6", "./main.dart.js": "2b0a35fe7a00dd87", "./main.dart.js_1.part.js": "b63c650f4130ec46", "./main.dart.js_10.part.js": "54fcb2e051428ee9", "./main.dart.js_100.part.js": "09944514b83646aa", "./main.dart.js_102.part.js": "50a17742cfdda1f2", "./main.dart.js_103.part.js": "f6e7c6b79ad41871", "./main.dart.js_104.part.js": "3a6becc14f22fd9d", "./main.dart.js_106.part.js": "633b5ab5ede0a49c", "./main.dart.js_107.part.js": "18cd83d1b1603ba6", "./main.dart.js_109.part.js": "5e91c857833f22d4", "./main.dart.js_11.part.js": "d82b7bb911d54bc4", "./main.dart.js_110.part.js": "8dffdfac310eba25", "./main.dart.js_112.part.js": "c1619962142950ac", "./main.dart.js_113.part.js": "9978aae3089234f8", "./main.dart.js_114.part.js": "0a35fb8529802a2c", "./main.dart.js_116.part.js": "b07bde16f81f17c8", "./main.dart.js_119.part.js": "facc8da2dfa7a901", "./main.dart.js_12.part.js": "6e68a46a7510bb33", "./main.dart.js_120.part.js": "e3ef3314fe801433", "./main.dart.js_121.part.js": "39bbc045181a95e4", "./main.dart.js_123.part.js": "66b3f0695ad218e6", "./main.dart.js_124.part.js": "9ae62ccad16f151d", "./main.dart.js_125.part.js": "91ee20b0f2a40bc7", "./main.dart.js_126.part.js": "20872ac26143d695", "./main.dart.js_127.part.js": "94634c2c3648e90a", "./main.dart.js_129.part.js": "88634f4d4aa957d0", "./main.dart.js_130.part.js": "c2a0fd43847cde13", "./main.dart.js_133.part.js": "604fb3b9984eb5ac", "./main.dart.js_134.part.js": "5d676b175c72525f", "./main.dart.js_135.part.js": "7837e673f17223ff", "./main.dart.js_136.part.js": "6f81e1d493c17662", "./main.dart.js_139.part.js": "b2786a32260f344a", "./main.dart.js_14.part.js": "f32c8f33d2dcd9cf", "./main.dart.js_140.part.js": "a86ca6cf0ba7f8c0", "./main.dart.js_141.part.js": "5b8bdc84919a8702", "./main.dart.js_142.part.js": "83b4333a47873ea2", "./main.dart.js_143.part.js": "f9ec20769f579027", "./main.dart.js_146.part.js": "8fc1ff8fdf938627", "./main.dart.js_147.part.js": "301346226cd878c5", "./main.dart.js_148.part.js": "e4474151a3b0f0ca", "./main.dart.js_151.part.js": "48648f35f0bb0535", "./main.dart.js_152.part.js": "95ad916ffb4ec93c", "./main.dart.js_153.part.js": "7822646778af0d29", "./main.dart.js_154.part.js": "8409ad03cd542c35", "./main.dart.js_155.part.js": "b718aa9331ddbcf0", "./main.dart.js_156.part.js": "81dd2da217e3336c", "./main.dart.js_157.part.js": "19f59d3a4b4b166b", "./main.dart.js_158.part.js": "02039eab730c0b4f", "./main.dart.js_16.part.js": "564424877c5793d6", "./main.dart.js_160.part.js": "58cb3657985f8433", "./main.dart.js_162.part.js": "1db83970feb204f4", "./main.dart.js_163.part.js": "39e9176c4222a06c", "./main.dart.js_164.part.js": "3256647bdaee1eb6", "./main.dart.js_165.part.js": "096a928fa6692ac4", "./main.dart.js_166.part.js": "d2f8b10ac7f31681", "./main.dart.js_168.part.js": "7bf2395c73b5681f", "./main.dart.js_17.part.js": "57cb417b160f0b2b", "./main.dart.js_170.part.js": "c257023f3f42ec91", "./main.dart.js_171.part.js": "f607557581cbf911", "./main.dart.js_172.part.js": "dddc1e969f137419", "./main.dart.js_176.part.js": "f17e0a82d818c14f", "./main.dart.js_178.part.js": "8ff910afd8714732", "./main.dart.js_179.part.js": "53b3e4dcc52e3d90", "./main.dart.js_18.part.js": "c2e95590a9821e69", "./main.dart.js_180.part.js": "7b2eaafec4fe10a7", "./main.dart.js_181.part.js": "ab87b055a8c6d073", "./main.dart.js_182.part.js": "37ddc30e349c572f", "./main.dart.js_184.part.js": "f7366024cb5ce173", "./main.dart.js_185.part.js": "eb1eb267a1559fcf", "./main.dart.js_186.part.js": "61ae8111ec370152", "./main.dart.js_187.part.js": "a4be0b50ae5004c6", "./main.dart.js_188.part.js": "a70182537adec3f1", "./main.dart.js_189.part.js": "919556bf56d03d03", "./main.dart.js_19.part.js": "dcebe6e8bb7270b1", "./main.dart.js_190.part.js": "465945f88eef6f10", "./main.dart.js_191.part.js": "d290ec160550adc4", "./main.dart.js_192.part.js": "2339d8e6e7366734", "./main.dart.js_193.part.js": "6ec6c7cb9a2e97bc", "./main.dart.js_194.part.js": "b8330546ea9d1a51", "./main.dart.js_195.part.js": "04af5f26f12016be", "./main.dart.js_196.part.js": "862774259aae6188", "./main.dart.js_197.part.js": "7fa6019f02235162", "./main.dart.js_199.part.js": "11f423890ba8490c", "./main.dart.js_2.part.js": "d1cfb87dd62873c6", "./main.dart.js_20.part.js": "050671d7a9641c1b", "./main.dart.js_200.part.js": "cb034cc129346da5", "./main.dart.js_201.part.js": "028f486444320b83", "./main.dart.js_202.part.js": "931d907234828086", "./main.dart.js_203.part.js": "511423310d9af8ad", "./main.dart.js_205.part.js": "327711998b1c0577", "./main.dart.js_206.part.js": "18dd33a26f9195a8", "./main.dart.js_207.part.js": "343295a269ac2f7e", "./main.dart.js_208.part.js": "8a16240134919439", "./main.dart.js_209.part.js": "732471f68baf1b0d", "./main.dart.js_210.part.js": "8e6399520fab005d", "./main.dart.js_211.part.js": "d432c759e276ba56", "./main.dart.js_212.part.js": "84c8e0027adcd5bb", "./main.dart.js_213.part.js": "0ac350759a6839f6", "./main.dart.js_214.part.js": "c3970ebf44816557", "./main.dart.js_218.part.js": "418eb27fe8b0d152", "./main.dart.js_219.part.js": "8b6f46313ddd9868", "./main.dart.js_220.part.js": "920ae47a20825339", "./main.dart.js_221.part.js": "fe8e9c9ef1a10977", "./main.dart.js_222.part.js": "11cd17848fb2c5ed", "./main.dart.js_223.part.js": "bee2c7577eac2a4b", "./main.dart.js_224.part.js": "fd792b824c03ae04", "./main.dart.js_227.part.js": "f85058e153979c8e", "./main.dart.js_229.part.js": "b44eaee7f955b547", "./main.dart.js_23.part.js": "0ad85da94674a03a", "./main.dart.js_231.part.js": "e62851b155b55ad5", "./main.dart.js_234.part.js": "17cab5196c716da4", "./main.dart.js_235.part.js": "41c874a2b4383962", "./main.dart.js_236.part.js": "6335e6557b291a42", "./main.dart.js_237.part.js": "a6ea6de8779965cf", "./main.dart.js_238.part.js": "bbe19c196dd099e5", "./main.dart.js_239.part.js": "0ff5efda0d59fa92", "./main.dart.js_240.part.js": "a8df78f8f4e15f7c", "./main.dart.js_241.part.js": "4f0901d7117d07ca", "./main.dart.js_242.part.js": "c7c452b931ecb7ba", "./main.dart.js_243.part.js": "cb0d0d272bd49405", "./main.dart.js_244.part.js": "aca29d59e6b57bdb", "./main.dart.js_245.part.js": "ee6d6804e2868bae", "./main.dart.js_246.part.js": "17b1f725d3f04544", "./main.dart.js_247.part.js": "b48c5589b7712be4", "./main.dart.js_248.part.js": "bddce8793ade4482", "./main.dart.js_249.part.js": "a86a3d3922959208", "./main.dart.js_250.part.js": "d1aa019fd884bd77", "./main.dart.js_252.part.js": "52f70fe1ce7b3c04", "./main.dart.js_253.part.js": "ba81d1e8b437210b", "./main.dart.js_254.part.js": "cc6cb53a9d47c377", "./main.dart.js_255.part.js": "7479c5d1e5445376", "./main.dart.js_257.part.js": "a07777c5d0d05e14", "./main.dart.js_258.part.js": "5d59568770d72397", "./main.dart.js_259.part.js": "c5567582226d69dc", "./main.dart.js_26.part.js": "9cee937cf89222bf", "./main.dart.js_260.part.js": "1fec7428b066e6cb", "./main.dart.js_261.part.js": "49f5535dd862bdae", "./main.dart.js_262.part.js": "da0714cf9bb030ee", "./main.dart.js_27.part.js": "e405b856c82209c0", "./main.dart.js_28.part.js": "0e7a6a9864371fb8", "./main.dart.js_29.part.js": "7622e3ab0f5b8c30", "./main.dart.js_3.part.js": "45c939530c8fec6f", "./main.dart.js_30.part.js": "4356400cc246bae0", "./main.dart.js_31.part.js": "93ab4c9499d53e6c", "./main.dart.js_32.part.js": "beef5c119fc95399", "./main.dart.js_33.part.js": "1d2eea2b23c3c6c1", "./main.dart.js_36.part.js": "063ab76824241adf", "./main.dart.js_4.part.js": "a8d9e9b139ae70b7", "./main.dart.js_41.part.js": "dad30c9fd509b06e", "./main.dart.js_42.part.js": "8bfbcf0895737eaa", "./main.dart.js_45.part.js": "b9cc750d5cf9639e", "./main.dart.js_46.part.js": "137d632c4a8eb1d3", "./main.dart.js_47.part.js": "1aadc0db1d4183c8", "./main.dart.js_49.part.js": "3dd4a3b84d95d21c", "./main.dart.js_51.part.js": "c053edca89194370", "./main.dart.js_52.part.js": "b6c226591b7147f3", "./main.dart.js_53.part.js": "7dfa995f6f103809", "./main.dart.js_54.part.js": "1ead62543fe66f19", "./main.dart.js_55.part.js": "53ed927db800c849", "./main.dart.js_56.part.js": "0328f20842c7857f", "./main.dart.js_57.part.js": "f8fdaf09bbf47f6a", "./main.dart.js_58.part.js": "329985413fb3bef7", "./main.dart.js_59.part.js": "771bce75f02945a4", "./main.dart.js_60.part.js": "eaa4e935ea70f143", "./main.dart.js_61.part.js": "e50bac31a2521402", "./main.dart.js_62.part.js": "88babf79b9b72783", "./main.dart.js_63.part.js": "4fbc1ce367e46908", "./main.dart.js_64.part.js": "c0e5693f487432cd", "./main.dart.js_66.part.js": "df2b149a480185d6", "./main.dart.js_69.part.js": "16ad6a9501b25d7e", "./main.dart.js_7.part.js": "fb1d131080929c04", "./main.dart.js_73.part.js": "8842bff2c361f4e1", "./main.dart.js_77.part.js": "496eacd467ed087c", "./main.dart.js_78.part.js": "f9cbc85af5001010", "./main.dart.js_79.part.js": "85c44e89bdc782cd", "./main.dart.js_8.part.js": "89d0b2edf43aeb66", "./main.dart.js_82.part.js": "f07d61bafc21f5be", "./main.dart.js_83.part.js": "ebcd13ecc1fc081b", "./main.dart.js_86.part.js": "dcd24c736e57c8ac", "./main.dart.js_88.part.js": "a3ec80d7e33f8d18", "./main.dart.js_89.part.js": "9ec1830b2581431f", "./main.dart.js_9.part.js": "6b2c35e41eff6168", "./main.dart.js_90.part.js": "31a4bbf30171905a", "./main.dart.js_91.part.js": "0786c8989785f05c", "./main.dart.js_94.part.js": "fcb2babb4abdf35f", "./main.dart.js_95.part.js": "f9043c9762748ee1", "./main.dart.js_96.part.js": "2fc0f0f878710aa6", "./main.dart.js_97.part.js": "9cbd758e351c1ff3", "./main.dart.js_98.part.js": "53735fc215f5b8a4", "./main.dart.js_99.part.js": "21e00f99378bf9f9", "./manifest.json": "1eb9129f25c3d832", "./ngmy_studio_fast_export.js": "3fbe007c828dff2d", "./ngmy_voice_capture.js": "97db5caa6f03d506", "./og-share.png": "e1d50c8edfacd3ff", "./version.json": "8fdbf42aa2633102", "./": "820cedb7acab34f6"};
const PRECACHE_URLS = Object.keys(PRECACHE_REVS);
const REV_HEADER = 'x-ngmy-rev';

function relFromUrl(url) {
  var path = url.pathname || '/';
  var base = SCOPE_PATH.endsWith('/') ? SCOPE_PATH : SCOPE_PATH + '/';
  if (path.indexOf(base) === 0) path = path.substring(base.length);
  else if (path.charAt(0) === '/') path = path.substring(1);
  return './' + path;
}

function revForUrl(url) {
  return PRECACHE_REVS[relFromUrl(url)] || '';
}

/** Stores [res] tagged with its deploy content hash so later deploys can reuse it. */
async function putWithRev(cache, key, res) {
  var url = new URL(typeof key === 'string' ? key : key.url, self.location.href);
  var rev = revForUrl(url);
  if (!rev) return cache.put(key, res);
  var headers = new Headers(res.headers);
  headers.set(REV_HEADER, rev);
  var tagged = new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: headers,
  });
  return cache.put(key, tagged);
}

/** Copies entries whose content hash is unchanged from older NGMY caches. */
async function reuseUnchangedFromOldCaches(cache) {
  var keys = (await caches.keys()).filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME);
  for (var k of keys) {
    var old = await caches.open(k);
    var reqs = await old.keys();
    for (var req of reqs) {
      var url = new URL(req.url);
      var want = revForUrl(url);
      if (!want) continue;
      var hit = await old.match(req);
      if (!hit || hit.headers.get(REV_HEADER) !== want) continue;
      if (await cache.match(req)) continue;
      await cache.put(req, hit);
    }
  }
}

const CRITICAL_OFFLINE_URLS = [
  './',
  './index.html',
  './flutter_bootstrap.js',
  './flutter.js',
  './main.dart.js',
  './canvaskit/canvaskit.js',
  './canvaskit/canvaskit.wasm',
  './canvaskit/chromium/canvaskit.js',
  './canvaskit/chromium/canvaskit.wasm',
  './assets/AssetManifest.bin.json',
  './assets/AssetManifest.bin',
  './assets/FontManifest.json',
  './assets/assets/fonts/Roboto-Light.ttf',
  './assets/assets/fonts/Roboto-Regular.ttf',
  './assets/assets/fonts/Roboto-Medium.ttf',
  './assets/assets/fonts/Roboto-Bold.ttf',
  './assets/assets/fonts/NotoColorEmoji.ttf',
  './assets/assets/twemoji/1f4dd.png',
  './assets/assets/twemoji/1f1fa-1f1f8.png',
  './assets/assets/twemoji/1f1f9-1f1ff.png',
  './assets/assets/twemoji/1f3a8.png',
  './assets/assets/twemoji/1f352.png',
  './assets/assets/twemoji/1f34a.png',
  './assets/assets/twemoji/1f31e.png',
  './assets/assets/twemoji/1f34f.png',
  './assets/assets/twemoji/1f33f.png',
  './assets/assets/twemoji/1f30a.png',
  './assets/assets/twemoji/1fa75.png',
  './assets/assets/twemoji/1f42c.png',
  './assets/assets/twemoji/1f347.png',
  './assets/assets/twemoji/1f36c.png',
  './assets/assets/twemoji/1f36b.png',
  './assets/assets/twemoji/26c4.png',
  './assets/assets/twemoji/1f5a4.png',
  './assets/assets/twemoji/1faa3.png',
  './assets/assets/twemoji/1f58c.png',
  './assets/assets/twemoji/2728.png',
  './assets/assets/twemoji/1f389.png',
  './assets/fonts/MaterialIcons-Regular.otf',
  './assets/packages/cupertino_icons/assets/CupertinoIcons.ttf',
  './manifest.json',
  './favicon.png',
  './icons/Icon-192.png',
  './ngmy_service_worker.js',
];

function criticalPartUrls() {
  return PRECACHE_URLS.filter((u) => /main\.dart\.js.*\.part\.js/i.test(u));
}

function absoluteShellUrls() {
  const origin = self.location.origin;
  const base = SCOPE_PATH.endsWith('/') ? SCOPE_PATH : SCOPE_PATH + '/';
  return [
    origin + base,
    origin + base + 'index.html',
    origin + '/',
    origin + '/index.html',
  ];
}

async function cacheAbsoluteShell(cache) {
  for (const abs of absoluteShellUrls()) {
    try {
      const hit = await cache.match(abs);
      if (hit) continue;
      const rel = abs.replace(self.location.origin, '');
      const fromRel = await cache.match('./index.html') || await cache.match('index.html');
      if (fromRel) {
        await cache.put(abs, fromRel.clone());
        continue;
      }
      await precacheUrl(cache, abs);
    } catch (e) {
      ngmySwQuiet('[ngmy-sw] absolute shell', abs, e);
    }
  }
}

async function shellCachedIn(cache) {
  for (const u of INDEX_CANDIDATES) {
    const hit = await cache.match(new Request(u));
    if (hit) return true;
  }
  for (const abs of absoluteShellUrls()) {
    const hit = await cache.match(abs);
    if (hit) return true;
  }
  return false;
}

async function offlineDocumentFromCache(cache) {
  for (const u of INDEX_CANDIDATES) {
    const hit = await cache.match(new Request(u));
    if (hit) return hit;
  }
  for (const abs of absoluteShellUrls()) {
    const hit = await cache.match(abs);
    if (hit) return hit;
  }
  return undefined;
}

async function offlineDocumentAnyCache() {
  const hit = await offlineDocument();
  if (hit) return hit;
  const keys = await caches.keys();
  for (const k of keys.filter((x) => x.startsWith(CACHE_PREFIX))) {
    const c = await caches.open(k);
    const doc = await offlineDocumentFromCache(c);
    if (doc) return doc;
  }
  return undefined;
}

async function precacheUrl(cache, url) {
  try {
    if (await cache.match(url)) return true;
    const res = await fetch(new Request(url, { cache: 'reload' }));
    if (res && res.ok) {
      await putWithRev(cache, url, res);
      return true;
    }
  } catch (e) {
    ngmySwQuiet('[ngmy-sw] precache skip', url, e);
  }
  return false;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        await reuseUnchangedFromOldCaches(cache);
      } catch (e) {
        ngmySwQuiet('[ngmy-sw] reuse old cache', e);
      }
      // Only the boot shell is downloaded up front. Everything else (advisor
      // photos, other wasm variants, twemoji, …) is cached the first time the
      // app requests it — precaching all published files cost ~100 MB and
      // ~390 requests on every first visit and every deploy.
      const allCritical = CRITICAL_OFFLINE_URLS.concat(criticalPartUrls());
      for (const url of allCritical) {
        await precacheUrl(cache, url);
      }
      await cacheAbsoluteShell(cache);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const allCritical = CRITICAL_OFFLINE_URLS.concat(criticalPartUrls());
      for (const url of allCritical) {
        const hit = await cache.match(url);
        if (!hit) await precacheUrl(cache, url);
      }
      await cacheAbsoluteShell(cache);
      const ready = await shellCachedIn(cache);

      if (ready) {
        const keys = await caches.keys();
        await Promise.all(
          keys
            .filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME)
            .map((k) => caches.delete(k)),
        );
      } else {
        ngmySwQuiet('[ngmy-sw] keep prior cache — new shell not ready yet');
      }

      await self.clients.claim();
      await restoreAllAlarms();
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.postMessage({ type: 'CACHE_READY' });
      }
    })(),
  );
});

function scopeUrl(path) {
  return new URL(path, self.location.origin).href;
}

const INDEX_CANDIDATES = [
  scopeUrl(SCOPE_PATH),
  scopeUrl(SCOPE_PATH + 'index.html'),
  './index.html',
  'index.html',
];

async function cacheLookup(request) {
  const current = await caches.open(CACHE_NAME);
  const exact = await current.match(request);
  if (exact) return exact;
  const loose = await current.match(request, { ignoreSearch: true });
  if (loose) return loose;
  // Shell scripts must come from this deploy's cache. Searching every old
  // cache made phones keep the previous main.dart.js after a refresh.
  let url;
  try { url = new URL(request.url); } catch (_) { url = null; }
  if (url && isCriticalScript(url)) return undefined;
  const hit = await caches.match(request);
  if (hit) return hit;
  return caches.match(request, { ignoreSearch: true });
}

async function cacheLookupByPathname(url) {
  const cache = await caches.open(CACHE_NAME);
  const keys = await cache.keys();
  for (const req of keys) {
    if (new URL(req.url).pathname === url.pathname) {
      const match = await cache.match(req);
      if (match) return match;
    }
  }
  return undefined;
}

async function offlineDocument() {
  for (const u of INDEX_CANDIDATES) {
    const hit = await cacheLookup(new Request(u));
    if (hit) return hit;
  }
  for (const abs of absoluteShellUrls()) {
    const hit = await caches.match(abs);
    if (hit) return hit;
  }
  return undefined;
}

function isInScope(url) {
  if (SCOPE_PATH === '/' || SCOPE_PATH === '') return true;
  return url.pathname.startsWith(SCOPE_PATH) || url.pathname === '/' || url.pathname.endsWith('index.html');
}

function isAppShellAsset(url) {
  if (url.pathname.endsWith('/') || url.pathname.endsWith('index.html')) return true;
  return /\.(js|wasm|json|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|otf|css|html|bin|symbols)$/i.test(url.pathname);
}

function isCriticalScript(url) {
  return /\/(main\.dart\.js|flutter_bootstrap\.js|flutter\.js|canvaskit|dart_sdk)/i.test(url.pathname);
}

function isCriticalFont(url) {
  return /MaterialIcons-Regular\.otf|CupertinoIcons\.ttf/i.test(url.pathname);
}

const ALARM_STORE = 'ngmy-alarms-v1';
const alarmTimers = new Map();

async function loadStoredAlarms() {
  try {
    const cache = await caches.open(ALARM_STORE);
    const hit = await cache.match('alarms.json');
    if (!hit) return [];
    const list = await hit.json();
    return Array.isArray(list) ? list : [];
  } catch (e) {
    ngmySwQuiet('[ngmy-sw] load alarms failed', e);
    return [];
  }
}

async function saveStoredAlarms(alarms) {
  try {
    const cache = await caches.open(ALARM_STORE);
    await cache.put('alarms.json', new Response(JSON.stringify(alarms), {
      headers: { 'Content-Type': 'application/json' },
    }));
  } catch (e) {
    ngmySwQuiet('[ngmy-sw] save alarms failed', e);
  }
}

function cancelAlarmTimer(id) {
  const tid = alarmTimers.get(id);
  if (tid != null) {
    clearTimeout(tid);
    alarmTimers.delete(id);
  }
}

async function fireAlarm(alarm) {
  cancelAlarmTimer(alarm.id);
  try {
    await self.registration.showNotification(alarm.title || 'Wake up', {
      body: alarm.body || 'Your NGMY wake alarm',
      requireInteraction: true,
      silent: false,
      tag: alarm.id,
      vibrate: [800, 300, 800, 300, 800],
      data: { alarmId: alarm.id },
    });
  } catch (e) {
    ngmySwQuiet('[ngmy-sw] showNotification failed', e);
  }
  const remaining = (await loadStoredAlarms()).filter((a) => a.id !== alarm.id);
  await saveStoredAlarms(remaining);
}

function scheduleAlarmTimer(alarm) {
  if (!alarm || !alarm.id || !alarm.at) return;
  cancelAlarmTimer(alarm.id);
  const delay = new Date(alarm.at).getTime() - Date.now();
  if (delay <= 0) return;
  if (delay > 7 * 24 * 60 * 60 * 1000) return;
  const tid = setTimeout(() => fireAlarm(alarm), delay);
  alarmTimers.set(alarm.id, tid);
}

async function upsertAlarm(alarm) {
  const list = await loadStoredAlarms();
  const next = list.filter((a) => a.id !== alarm.id);
  next.push({
    id: alarm.id,
    at: alarm.at,
    title: alarm.title || 'Wake up',
    body: alarm.body || 'Your NGMY wake alarm',
  });
  await saveStoredAlarms(next);
  scheduleAlarmTimer(next[next.length - 1]);
}

async function restoreAllAlarms() {
  const list = await loadStoredAlarms();
  const now = Date.now();
  const kept = [];
  for (const alarm of list) {
    const at = new Date(alarm.at).getTime();
    if (at <= now) continue;
    kept.push(alarm);
    scheduleAlarmTimer(alarm);
  }
  if (kept.length !== list.length) await saveStoredAlarms(kept);
}

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || !data.type) return;

  if (data.type === 'SCHEDULE_ALARM') {
    event.waitUntil(
      upsertAlarm({
        id: data.id,
        at: data.at,
        title: data.title,
        body: data.body,
      }),
    );
    return;
  }

  if (data.type === 'ENSURE_CACHED') {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const urls = Array.isArray(data.urls) ? data.urls : [];
        for (const raw of urls) {
          const rel = raw.startsWith('./') ? raw : './' + raw;
          const hit = await cache.match(rel);
          if (hit) continue;
          await precacheUrl(cache, rel);
        }
      })(),
    );
  }
});

// ── Runtime caches for other sites (kept across deploys; trimmed to a size) ──
const RT_FONTS = 'ngmy-rt-fonts-v1';
const RT_MEDIA = 'ngmy-rt-media-v1';

function ngmyIsRuntimeFont(url) {
  return url.hostname === 'fonts.gstatic.com' || url.hostname === 'fonts.googleapis.com';
}

function ngmyIsRuntimeImage(url, request) {
  if (request.destination === 'image') return true;
  if (/\.(png|jpe?g|webp|gif|svg|avif|ico|bmp)(\?|$)/i.test(url.pathname)) return true;
  // Supabase storage pictures (avatars, posts, slides) and twemoji/CDN art.
  if (/\/storage\/v1\/object\/(public|sign)\//.test(url.pathname)) return true;
  return /(^|\.)(twemoji\.maxcdn\.com|cdn\.jsdelivr\.net|images\.unsplash\.com|api\.openverse\.org|live\.staticflickr\.com|upload\.wikimedia\.org)$/i.test(url.hostname);
}

async function ngmyTrim(cacheName, max) {
  try {
    const c = await caches.open(cacheName);
    const keys = await c.keys();
    for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i]);
  } catch (_) {}
}

function ngmyCacheable(res) {
  return res && (res.ok || res.type === 'opaque');
}

async function ngmyCacheFirst(cacheName, request, max) {
  const c = await caches.open(cacheName);
  const hit = await c.match(request);
  if (hit) return hit;
  try {
    const res = await fetch(request);
    if (ngmyCacheable(res)) {
      await c.put(request, res.clone());
      ngmyTrim(cacheName, max);
    }
    return res;
  } catch (e) {
    const any = await c.match(request, { ignoreSearch: true });
    if (any) return any;
    throw e;
  }
}

async function ngmyStaleWhileRevalidate(cacheName, request, max) {
  const c = await caches.open(cacheName);
  const hit = await c.match(request);
  const net = fetch(request)
    .then(async (res) => {
      if (ngmyCacheable(res)) {
        await c.put(request, res.clone());
        ngmyTrim(cacheName, max);
      }
      return res;
    })
    .catch(() => null);
  if (hit) return hit;
  const res = await net;
  if (res) return res;
  const any = await c.match(request, { ignoreSearch: true });
  return any || new Response('', { status: 504, statusText: 'Offline' });
}

self.addEventListener('fetch', (event) => {
  var url = new URL(event.request.url);

  // POST /api/sync — same-origin proxy; DevTools never shows bright-handler.
  if (event.request.method === 'POST' && url.origin === self.location.origin && ngmyIsApiSyncPath(url)) {
    event.respondWith(ngmyProxyApiSync(event.request));
    return;
  }

  // /api/rest/v1/* — same-origin PostgREST proxy (hides supabase.co URLs).
  if (url.origin === self.location.origin && ngmyIsApiRestPath(url)) {
    event.respondWith(ngmyProxyApiRest(event.request));
    return;
  }

  if (event.request.method !== 'GET') return;

  // Other sites: the fonts the engine fetches for symbols (▶ ★ ⚜ ♛ …) and pictures shown in
  // the app. Kept on the phone once seen, so offline they still draw instead of a box with an X.
  if (url.origin !== self.location.origin) {
    if (ngmyIsRuntimeFont(url)) {
      event.respondWith(ngmyCacheFirst(RT_FONTS, event.request, 400));
    } else if (ngmyIsRuntimeImage(url, event.request)) {
      event.respondWith(ngmyStaleWhileRevalidate(RT_MEDIA, event.request, 900));
    }
    return;
  }
  if (!isInScope(url)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Always fetch version.json from network so phones detect new deploys.
      if (url.pathname.endsWith('version.json')) {
        try {
          const net = await fetch(event.request, { cache: 'no-store' });
          if (net && net.ok) return net;
        } catch (_) {}
        const cached = await cacheLookup(event.request);
        if (cached) return cached;
        return fetch(event.request);
      }

      let cached = await cacheLookup(event.request);
      if (!cached && (isAppShellAsset(url) || isCriticalScript(url))) {
        cached = await cacheLookupByPathname(url);
      }

      const shellAsset =
        isAppShellAsset(url) || isCriticalScript(url) || isCriticalFont(url);

      // A previous publisher corrupted flutter_bootstrap.js into
      // `async load({){`. Never serve that cached copy.
      if (shellAsset && cached && /flutter_bootstrap\.js$/i.test(url.pathname)) {
        try {
          const probe = await cached.clone().text();
          if (probe.indexOf('async load({){') !== -1) cached = null;
        } catch (_) {}
      }

      // Cache-first for shell assets — required for iOS offline (onLine is unreliable).
      // No background re-fetch: this cache is per deploy, so a cached asset is
      // already the current build's file (re-fetching re-downloaded ~30 MB per load).
      if (shellAsset && cached) {
        return cached;
      }

      if (!self.navigator.onLine && shellAsset) {
        const offlineFallback = await cacheLookupByPathname(url);
        if (offlineFallback) return offlineFallback;
        if (url.pathname.indexOf('canvaskit') !== -1) {
          const alt = await cache.match('./canvaskit/canvaskit.wasm')
            || await cache.match('canvaskit/canvaskit.wasm')
            || await cache.match('./canvaskit/canvaskit.js')
            || await cache.match('canvaskit/canvaskit.js');
          if (alt) return alt;
        }
        return new Response('Offline — asset not cached: ' + url.pathname, {
          status: 503,
          statusText: 'Offline cache miss',
        });
      }

      if (event.request.mode === 'navigate') {
        // Network-first for HTML when online so deploy checks and new builds reach PWAs.
        if (self.navigator.onLine) {
          try {
            const net = await fetch(event.request, { cache: 'no-store' });
            if (net && net.status === 200) {
              cache.put(event.request, net.clone());
              await cacheAbsoluteShell(cache);
              return net;
            }
            // /bio/{slug} is not a file. GitHub Pages returns 404.html (the Flutter
            // shell) with status 404 — still serve that HTML, or the cached shell.
            if (ngmyIsGuestDeepLink(url) && net) {
              const shell = await offlineDocumentAnyCache();
              if (shell) return shell;
              var ct = (net.headers && net.headers.get('content-type')) || '';
              if (ct.indexOf('text/html') !== -1) return net;
            }
          } catch (_) {}
        }
        const cachedNav = await offlineDocumentAnyCache();
        if (cachedNav) {
          if (self.navigator.onLine) {
            event.waitUntil(
              fetch(event.request, { cache: 'no-store' })
                .then((res) => {
                  if (res && res.status === 200) {
                    cache.put(event.request, res.clone());
                    return cacheAbsoluteShell(cache);
                  }
                })
                .catch(() => {}),
            );
          }
          return cachedNav;
        }
        try {
          const net = await fetch(event.request);
          if (net && net.status === 200) {
            cache.put(event.request, net.clone());
            return net;
          }
        } catch (_) {}
        return new Response(
          '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NGMY Offline</title></head><body style="font-family:system-ui;background:#121212;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;text-align:center;padding:24px"><div><h2>NGMY is offline</h2><p>Open the app once while online so it can cache for offline use.</p><button onclick="location.reload()" style="margin-top:16px;padding:12px 24px;border:none;border-radius:8px;background:#00B25A;color:#fff;font-weight:700">Retry</button></div></body></html>',
          { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
        );
      }

      if (cached) {
        return cached;
      }

      try {
        const res = await fetch(event.request);
        if (res && res.status === 200) {
          event.waitUntil(putWithRev(cache, event.request, res.clone()).catch(() => {}));
        }
        return res;
      } catch (_) {
        const fallback = await cacheLookupByPathname(url);
        if (fallback) return fallback;
        return cached;
      }
    })(),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    (async () => {
      const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      for (const client of all) {
        if ('focus' in client) {
          client.focus();
          return;
        }
      }
      if (self.clients.openWindow) {
        await self.clients.openWindow(scopeUrl(SCOPE_PATH));
      }
    })(),
  );
});
