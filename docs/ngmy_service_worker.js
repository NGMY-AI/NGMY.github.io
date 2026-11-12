/* NGMY PWA — cache-first shell so the app opens offline after one online visit. */
'use strict';

function ngmySwQuiet() {}

const CACHE_PREFIX = 'ngmy-pwa-';
function ngmySwBasePath() {
  var p = self.location.pathname || '/';
  return p.replace(/[^/]*$/, '') || '/';
}
const SCOPE_PATH = ngmySwBasePath();
const CACHE_NAME = CACHE_PREFIX + '20261112211517';

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
const PRECACHE_REVS = {"./.last_build_id": "5235aea4b116a165", "./.nojekyll": "d41d8cd98f00b204", "./404.html": "09bd1aa05b17cca8", "./CNAME": "4bd60f2c33459b12", "./assets/AssetManifest.bin": "0c458ff21ba7b428", "./assets/AssetManifest.bin.json": "64c671a3df778ee1", "./assets/FontManifest.json": "d583bb643b4d2d98", "./assets/assets/avatars/Michelle.glb": "6735c9edb47dc756", "./assets/assets/avatars/Soldier.glb": "0998e2b4baf1dfd2", "./assets/assets/avatars/Xbot.glb": "0fe16ad39ef83bd4", "./assets/assets/bio_link_icons/facebook.png": "8df53074d921d7a5", "./assets/assets/bio_link_icons/instagram.png": "d635dc103fe1dcf6", "./assets/assets/bio_link_icons/tiktok.png": "82ec4e42f2613ce1", "./assets/assets/bio_link_icons/youtube.png": "c76185bfa63f406b", "./assets/assets/data/body3d.bin": "ec168ccfeb62cdd8", "./assets/assets/data/body3d_lite.bin": "a48e51ea7ab5d9a8", "./assets/assets/data/elements.json": "79edcccba9ceff17", "./assets/assets/data/three.min.js": "cd7f71f87efb21f0", "./assets/assets/data/world110.json": "a65afd67dfd337d1", "./assets/assets/fonts/NotoColorEmoji.ttf": "46d5c51b979f9196", "./assets/assets/fonts/Roboto-Bold.ttf": "a68db3b33213fa13", "./assets/assets/fonts/Roboto-Light.ttf": "8d252992868e895b", "./assets/assets/fonts/Roboto-Medium.ttf": "989d2dff37a09f19", "./assets/assets/fonts/Roboto-Regular.ttf": "8f793587dcf03f31", "./assets/assets/images/advisors/bible_study_teacher_f.jpg": "29f4f22a98b0d5da", "./assets/assets/images/advisors/bible_study_teacher_m.jpg": "ff4aaf2e9e71a8c0", "./assets/assets/images/advisors/career_coach_m.jpg": "93eaf3c1a012a08c", "./assets/assets/images/advisors/companion_f.jpg": "f76e14b70b5dfc1a", "./assets/assets/images/advisors/companion_m.jpg": "c785791e7892c70b", "./assets/assets/images/advisors/doctor_f.jpg": "2fb4053d5c88288a", "./assets/assets/images/advisors/doctor_m.jpg": "93ab165ee30e339f", "./assets/assets/images/advisors/financial_advisor_f.jpg": "b73dd5b4ef697af4", "./assets/assets/images/advisors/financial_advisor_m.jpg": "c3fdc7f3f688070c", "./assets/assets/images/advisors/fitness_coach_m.jpg": "2c4892cf19c6a8d4", "./assets/assets/images/advisors/lawyer_f.jpg": "bb96eddd81558c79", "./assets/assets/images/advisors/lawyer_m.jpg": "018e938f444c7f7d", "./assets/assets/images/advisors/marriage_advisor_f.jpg": "646e6a35a27c6584", "./assets/assets/images/advisors/marriage_advisor_m.jpg": "404ebe463967f8dc", "./assets/assets/images/advisors/mshauri_m.jpg": "ff42ea519c862b13", "./assets/assets/images/advisors/pastor_m.jpg": "ad2c06e956c3b10f", "./assets/assets/images/advisors/person_alex_remy.jpg": "b5106a12c81c6a71", "./assets/assets/images/advisors/person_alisa_john.jpg": "df5efdb5760200c3", "./assets/assets/images/advisors/person_anna_amuri.jpg": "9e22ea4ae807ae2a", "./assets/assets/images/advisors/person_chloe_mitchell.jpg": "29f4f22a98b0d5da", "./assets/assets/images/advisors/person_grace_anderson.jpg": "28a7a1921587f0bd", "./assets/assets/images/advisors/person_isaiah_john.jpg": "ff4aaf2e9e71a8c0", "./assets/assets/images/advisors/person_jeremiah_nesto.jpg": "e9e4437a3bdf0523", "./assets/assets/images/advisors/person_mina.jpg": "5bd415401c0e6761", "./assets/assets/images/advisors/person_miriam.jpg": "bb20fabb5caa0232", "./assets/assets/images/advisors/person_nia_robertson.jpg": "9e04a5e61fe48eef", "./assets/assets/images/advisors/person_olivia_bennett.jpg": "16114f92d325cb68", "./assets/assets/images/advisors/person_sophie_morgan.jpg": "5605b640ef282d0c", "./assets/assets/images/advisors/person_susie.jpg": "dfa9dbbce9d2c097", "./assets/assets/images/advisors/person_suzana_mbuto.jpg": "264bede99d5d85f8", "./assets/assets/images/advisors/person_suzana_vanessa.jpg": "38237d53e4ae906e", "./assets/assets/images/advisors/teacher_f.jpg": "1315f58bbde3952f", "./assets/assets/images/advisors/teacher_m.jpg": "44e0974febbe21c3", "./assets/assets/images/advisors/therapist_f.jpg": "084b863611f7e7e7", "./assets/assets/images/ngmy_document_ask_icon.png": "788668a305c84d51", "./assets/assets/images/ngmy_logo.png": "5586df2d5317bc40", "./assets/assets/images/swahili/1432405972618-c60b0225b8f9.jpg": "14f45da805baf036", "./assets/assets/images/swahili/1435527173128-983b87201f4d.jpg": "9a87fa619f48d10c", "./assets/assets/images/swahili/1444464666168-49d633b86797.jpg": "544f9eb53330a921", "./assets/assets/images/swahili/1456513080510-7bf3a84b82f8.jpg": "7b3d1898c7daa7f2", "./assets/assets/images/swahili/1457383457550-47a5cfdbab17.jpg": "76bb841b413450b3", "./assets/assets/images/swahili/1472214103451-9374bd1c798e.jpg": "c0ac3a1dc4673092", "./assets/assets/images/swahili/1487956382158-bb926046304a.jpg": "b5a2fc643ef48af3", "./assets/assets/images/swahili/1488132828189-4e416661b680.jpg": "ccf0f0a648e53412", "./assets/assets/images/swahili/1489112318845-bcfb7233b1a1.jpg": "d6047de722c07aa5", "./assets/assets/images/swahili/1489275259429-70f6ef5705c1.jpg": "c2feaab1c55ba531", "./assets/assets/images/swahili/1490127252417-7c393f993ee4.jpg": "2a78d4a759c9bc39", "./assets/assets/images/swahili/1491414416654-c4de0c986af8.jpg": "39e2bfd22ffe0364", "./assets/assets/images/swahili/1491929536571-bdbc57e72324.jpg": "0cff9bc1ae3fdbfd", "./assets/assets/images/swahili/1492684223066-81342ee5ff30.jpg": "aed8e728c05eb132", "./assets/assets/images/swahili/1493612276216-ee3925520721.jpg": "50c05a9712ce81d6", "./assets/assets/images/swahili/1493836512294-502baa1986e2.jpg": "e6beb67dd421f9a3", "./assets/assets/images/swahili/1494790108377-be9c29b29330.jpg": "17b3056765b573b6", "./assets/assets/images/swahili/1495020689067-958852a7765e.jpg": "707236a951d9c03f", "./assets/assets/images/swahili/1501743411739-de52ea0ce6a0.jpg": "8ebaf53f6b773057", "./assets/assets/images/swahili/1502355984-b735cb2550ce.jpg": "2f3beb0596c01236", "./assets/assets/images/swahili/1502663656924-a7163d645e0c.jpg": "b571839eac2184ff", "./assets/assets/images/swahili/1504674900247-0877df9cc836.jpg": "d877a9a45e0bbc56", "./assets/assets/images/swahili/1506869640319-fe1a24fd76dc.jpg": "d13a02c040a5f37c", "./assets/assets/images/swahili/1507003211169-0a1dd7228f2d.jpg": "d08e722720e15ce2", "./assets/assets/images/swahili/1507206130118-b5907f817163.jpg": "a338cc4eef37530e", "./assets/assets/images/swahili/1508455858334-95337ba25607.jpg": "d2bd933a2de93a98", "./assets/assets/images/swahili/1515378791036-0648a3ef77b2.jpg": "08efff83255e0306", "./assets/assets/images/swahili/1516382022989-cd771ab91fb1.jpg": "acfde0ef27eaba58", "./assets/assets/images/swahili/1516749712236-67f5688a642a.jpg": "c8da476816145350", "./assets/assets/images/swahili/1517545084371-4a575dde2a02.jpg": "990e10c95917f8cf", "./assets/assets/images/swahili/1517836357463-d25dfeac3438.jpg": "22ac9cf58e160258", "./assets/assets/images/swahili/1517870662726-c1d98ee36250.jpg": "3e2aadddd4d22042", "./assets/assets/images/swahili/1517884885877-a46b0f5327db.jpg": "9401d0c311f36f86", "./assets/assets/images/swahili/1518281361980-b26bfd556770.jpg": "9aed03947f17ba53", "./assets/assets/images/swahili/1518843875459-f738682238a6.jpg": "9d2533782b71faa0", "./assets/assets/images/swahili/1519681393784-d120267933ba.jpg": "041376ef01b84037", "./assets/assets/images/swahili/1519996529931-28324d5a630e.jpg": "dd16782e9ce8c014", "./assets/assets/images/swahili/1520006507663-f34ed4a17b4c.jpg": "6e86e6459536d67a", "./assets/assets/images/swahili/1520187044487-b2efb58f0cba.jpg": "b399060eba27cfba", "./assets/assets/images/swahili/1521791136064-7986c2920216.jpg": "c6db5c1b3e92496b", "./assets/assets/images/swahili/1522771739844-6a9f6d5f14af.jpg": "d20942479e2ff712", "./assets/assets/images/swahili/1524601500432-1e1a4c71d692.jpg": "2b9058417ae82bd3", "./assets/assets/images/swahili/1525206809752-65312b959c88.jpg": "38843db89f2c7470", "./assets/assets/images/swahili/1530013255753-3f6578d19059.jpg": "b1e7cd2957490876", "./assets/assets/images/swahili/1531379410502-63bfe8cdaf6f.jpg": "dd6aa938cfada159", "./assets/assets/images/swahili/1531873252757-8c22fa9e7a98.jpg": "4216da4d674300a2", "./assets/assets/images/swahili/1535588986102-0e9c0c60cba2.jpg": "1a0088db20ae99b6", "./assets/assets/images/swahili/1536816579748-4ecb3f03d72a.jpg": "94ec046160f1cf6c", "./assets/assets/images/swahili/1541089404510-5c9a779841fc.jpg": "914109d51aca581b", "./assets/assets/images/swahili/1541480601022-2308c0f02487.jpg": "bb2dc206b78875e3", "./assets/assets/images/swahili/1542014740373-51ad6425eb7c.jpg": "a6f46ea5fbb61e09", "./assets/assets/images/swahili/1542229538-4d8784038379.jpg": "970247b722a5c415", "./assets/assets/images/swahili/1543265489-6130022b8561.jpg": "f52eda042647e4e8", "./assets/assets/images/swahili/1543807535-eceef0bc6599.jpg": "8643d7ee0b9ffa97", "./assets/assets/images/swahili/1543980932-b5fc649a8000.jpg": "632d8f48601b19e1", "./assets/assets/images/swahili/1544787219-7f47ccb76574.jpg": "dc3ba3cf33f72398", "./assets/assets/images/swahili/1548550023-2bdb3c5beed7.jpg": "888bb94df7f053da", "./assets/assets/images/swahili/1548780607-46c78f38182d.jpg": "664ca80f27d084eb", "./assets/assets/images/swahili/1549068294-04a001ee0638.jpg": "eaa72967bd81550c", "./assets/assets/images/swahili/1549923746-c502d488b3ea.jpg": "780b3bcc5d1e37e4", "./assets/assets/images/swahili/1552452380-4137214f33b6.jpg": "9702a3c8398d31f4", "./assets/assets/images/swahili/1552664730-d307ca884978.jpg": "eb7890911034a92c", "./assets/assets/images/swahili/1552846573-47e482355fa7.jpg": "2aa5d7f127cbd9dd", "./assets/assets/images/swahili/1552862750-746b8f6f7f25.jpg": "313a58917241275d", "./assets/assets/images/swahili/1553729784-e91953dec042.jpg": "c60d9ff2d8218efe", "./assets/assets/images/swahili/1554188572-9d184b57d8e2.jpg": "6ee4cc82c51e043e", "./assets/assets/images/swahili/1556848527-f7c548b972b2.jpg": "7b7846eb16f543f8", "./assets/assets/images/swahili/1556911220-e15b29be8c8f.jpg": "449de511870e0c9b", "./assets/assets/images/swahili/1557050543-4d5f4e07ef46.jpg": "7a9168bad1b45c1c", "./assets/assets/images/swahili/1557176278-3326a3193580.jpg": "3e7e51b8d358ef97", "./assets/assets/images/swahili/1558541966-ee7182e26d63.jpg": "94825a65c349890f", "./assets/assets/images/swahili/1559150182-a7144f7628f9.jpg": "398f9260528813f8", "./assets/assets/images/swahili/1559769732-3a943df124b0.jpg": "1cf4f944af49bcba", "./assets/assets/images/swahili/1560707854-fb9a10eeaace.jpg": "ca13fc7a304e737c", "./assets/assets/images/swahili/1560986752-2e31d9507413.jpg": "9f08bac675ad5fbc", "./assets/assets/images/swahili/1561089489-f13d5e730d72.jpg": "1bdab76d3dcfcdd9", "./assets/assets/images/swahili/1563176137-45a7f3917371_portrait.jpg": "f2c86afe3f5d630b", "./assets/assets/images/swahili/1564013799919-ab600027ffc6.jpg": "ae504053e3bc72f9", "./assets/assets/images/swahili/1566653223195-e09604588c9f.jpg": "9ac278fe1da71618", "./assets/assets/images/swahili/1570563169510-ac9c2c3cad68.jpg": "336b13e50d69f143", "./assets/assets/images/swahili/1572707691993-29c96332f6be.jpg": "9cfd4808fd2fbe9c", "./assets/assets/images/swahili/1573376670329-0261ea9fde97.jpg": "6c3aae752966006e", "./assets/assets/images/swahili/1578125468943-b963a1daa385.jpg": "cff0840828fdfb5f", "./assets/assets/images/swahili/1578625155481-7bc40a6481b6.jpg": "5f6830227a490609", "./assets/assets/images/swahili/1578651714116-2a1645b70c0f.jpg": "839fd3e092ed8a0a", "./assets/assets/images/swahili/1580446623001-3abf670c5c55.jpg": "94acdccd7831caad", "./assets/assets/images/swahili/1581889470536-467bdbe30cd0.jpg": "cb211aaf3ee4f0bf", "./assets/assets/images/swahili/1582213782179-e0d53f98f2ca.jpg": "e233bda21954cf00", "./assets/assets/images/swahili/1582298538104-fe2e74c27f59.jpg": "1cf3d695387c4335", "./assets/assets/images/swahili/1583162814461-3879bd80fd77.jpg": "f84481a50fe37b1d", "./assets/assets/images/swahili/1583264277168-58ceba4b84e7.jpg": "535b8c7a792fd1b7", "./assets/assets/images/swahili/1586276632510-a680c3db9a10.jpg": "da506a3125670203", "./assets/assets/images/swahili/1586473219010-2ffc57b0d282.jpg": "e6fc1fb96430f8e2", "./assets/assets/images/swahili/1586726370832-3440a511e479.jpg": "0b0966a7bb3c9790", "./assets/assets/images/swahili/1592890288564-76628a30a657.jpg": "e3a3e279776c3379", "./assets/assets/images/swahili/1593100126453-19b562a800c1.jpg": "091be342a9cd2f1b", "./assets/assets/images/swahili/1594383538644-66fcb99ae1ed.jpg": "aef95c4b294896a6", "./assets/assets/images/swahili/1597213669181-6276d2315b55.jpg": "18cf8cd58ac63cc8", "./assets/assets/images/swahili/1600041967514-701d405228c6.jpg": "21bd96ad26d281ef", "./assets/assets/images/swahili/1600603406200-5b2a104684ac.jpg": "78f674c5bbde10f2", "./assets/assets/images/swahili/1612883833766-7930d960e16f.jpg": "7f9b98833b515871", "./assets/assets/images/swahili/1612996860234-f1322906438a.jpg": "cd15145074a7ef3e", "./assets/assets/images/swahili/1618037087830-5e746497905b.jpg": "3aeb7a6559ab5dcb", "./assets/assets/images/swahili/1618886614638-80e3c103d31a.jpg": "28db15d02b9b40b9", "./assets/assets/images/swahili/1619016145369-0ff98d539993.jpg": "1b3fba7cb210ad1b", "./assets/assets/images/swahili/1621273974250-faeb23660cdf.jpg": "2b12c2bef557ac88", "./assets/assets/images/swahili/1622768766607-922825162edc.jpg": "29cff3b2ecf196e2", "./assets/assets/images/swahili/1632144130358-6cfeed023e27.jpg": "288d51bbbc913a31", "./assets/assets/images/swahili/1633092539352-4d458d94cfe4.jpg": "e73824ea0044b174", "./assets/assets/images/swahili/1633613286848-e6f43bbafb8d.jpg": "3efad976afd50001", "./assets/assets/images/swahili/1636320966479-4842be49dd2e.jpg": "5124b92468528c65", "./assets/assets/images/swahili/1636592358465-37c526b978d2.jpg": "f090c9b191dca1de", "./assets/assets/images/swahili/1636987050384-9b079c700f63.jpg": "63ed68a5654acea6", "./assets/assets/images/swahili/1639600281360-2c158cb8391a.jpg": "875ff97cfba3983e", "./assets/assets/images/swahili/1642943392730-ae57c9b77522.jpg": "7b80652d11d94cca", "./assets/assets/images/swahili/1646340621112-dd3c96797887.jpg": "3f7abdb03a687da1", "./assets/assets/images/swahili/1655506207889-4f130f49797f.jpg": "7eb58b2dfb371912", "./assets/assets/images/swahili/1656019838845-757b4200dfd5.jpg": "cfdd411f11bdac50", "./assets/assets/images/swahili/1659352152794-b1cf311f112c.jpg": "e64be63c8bcfb6bf", "./assets/assets/images/swahili/1659924086637-803c92f2dac8.jpg": "222ee0528df4fad1", "./assets/assets/images/swahili/1660489744575-81ab10cf06b7_portrait.jpg": "53fbc0afc70dd936", "./assets/assets/images/swahili/1672266353368-7df4d6d963de.jpg": "1e8ee97d16d237e9", "./assets/assets/images/swahili/1673048297932-ad2caa4a7a59.jpg": "82813ebded743ecd", "./assets/assets/images/swahili/1673515336414-0db19994707f.jpg": "5975eab8b3b69ba8", "./assets/assets/images/swahili/1678923685297-0ade9816275e.jpg": "d5d75ff8895200ac", "./assets/assets/images/swahili/1685031924917-aa16bb9d2c25.jpg": "be4460c433d4089d", "./assets/assets/images/swahili/1687585612416-c7e45dbb27d5.jpg": "ea419c2043750ca1", "./assets/assets/images/swahili/1689143947647-062e1a24bf2d.jpg": "b97080884046f127", "./assets/assets/images/swahili/1690681737765-87873d223aff.jpg": "1c1d3dac5ab35147", "./assets/assets/images/swahili/1691071666279-58adb714d0b8.jpg": "ce1001bcb0ed1ac0", "./assets/assets/images/swahili/1697142985510-86fa2ea314d9.jpg": "f1962d5616995e01", "./assets/assets/images/swahili/1697639659506-ada9b78ae2ae.jpg": "dc1a90f8cd1d6a46", "./assets/assets/images/swahili/1699870225928-f366b1f04679.jpg": "30940ea5684ad68e", "./assets/assets/images/swahili/1702065612691-877a245777ad.jpg": "e3e49835d8777e2e", "./assets/assets/images/swahili/1702065612921-fcf9e698dccc.jpg": "36b7eed4bc71250a", "./assets/assets/images/swahili/1704265586142-db3e17d0dea0.jpg": "b40fb0b7f69bfecc", "./assets/assets/images/swahili/1711871549711-4717086bfab9.jpg": "efbacddebabe5e38", "./assets/assets/images/swahili/1713947501966-34897f21162e.jpg": "81a1c85322212183", "./assets/assets/images/swahili/1718382341267-aef8a9e4ecef.jpg": "349edd93198dcdf7", "./assets/assets/images/swahili/1738739907433-10601360cee3.jpg": "83e9c785ceb80202", "./assets/assets/images/swahili/1758270704286-83476deb3bd1.jpg": "f440ae534cc0caab", "./assets/assets/images/swahili/1758274252296-a63b1d7d4bb8.jpg": "c9a81fb0e406c0c5", "./assets/assets/images/swahili/1758525224242-cdcf50a54d58.jpg": "ec5dfa9012fd2e75", "./assets/assets/images/swahili/1758599543122-fc551c9b4b1c.jpg": "c980a24244679cf7", "./assets/assets/images/swahili/1758599668796-cdd37f4ecb66.jpg": "0dc18bd027a0e6aa", "./assets/assets/images/swahili/1758600432914-2b5f4483c7b8.jpg": "07a2f945a2fe4c72", "./assets/assets/images/swahili/1758600588075-337dfa176a31.jpg": "0fd4324c12573f3c", "./assets/assets/images/swahili/1758600588332-f115280edb2e.jpg": "6e5e4199ca3fb9fd", "./assets/assets/images/swahili/1758686254563-5c5ab338c8b9.jpg": "e7ba4d96271564ce", "./assets/assets/images/swahili/1758691030490-fe1cb6c972ce.jpg": "d82db5c57741e734", "./assets/assets/images/swahili/1758691463384-771db2f192b3.jpg": "656f23dec749836b", "./assets/assets/images/swahili/1758874572647-407688dfd807.jpg": "7032f713538ea46e", "./assets/assets/images/swahili/1759405185577-4ba456d4bdc7.jpg": "6bbd6cc7bd3328b6", "./assets/assets/images/swahili/1760114852784-ec280f0a62e2.jpg": "c1f47f6199025725", "./assets/assets/images/swahili/1760897008085-61143d503763.jpg": "9da69484615e8f98", "./assets/assets/images/swahili/1762328003206-03a1ff078062.jpg": "2e82aa1ce7ae2e0b", "./assets/assets/images/swahili/1762328006833-b1c850d57618.jpg": "3ab4322af138d36c", "./assets/assets/images/swahili/1762328022007-edc2c770d350.jpg": "5eb59b5206e52937", "./assets/assets/images/swahili/1762351934738-2af558786537.jpg": "8df44e2c699cea0f", "./assets/assets/images/swahili/1763727288483-ea361a563531.jpg": "b98dabaf6ceabc1d", "./assets/assets/images/swahili/1764351661329-8d76178e02b3.jpg": "7e8ec9fb3ab15b54", "./assets/assets/images/swahili/1766229034549-0103e6d4a75f.jpg": "05c72d4b5f68d4c9", "./assets/assets/images/swahili/1766970096331-78c8af007a3b.jpg": "c81779e25b6fdcb8", "./assets/assets/images/swahili/1768299582669-430739acc3d9.jpg": "2b605d62218fff23", "./assets/assets/images/swahili/1768751947109-d2a99be1aa9c.jpg": "f1dde9b8e297b2f5", "./assets/assets/images/swahili/1769708046949-108aa733f753.jpg": "1830a03d0a26c77f", "./assets/assets/images/swahili/1771570665615-453f75881df2.jpg": "bbb7263d0ffc0413", "./assets/assets/images/swahili/1774619511446-f2af7584db46.jpg": "9b6d15b85881191c", "./assets/assets/images/swahili/1774674534737-8a5fc71699b8.jpg": "c05e3beab6106149", "./assets/assets/images/swahili/1774797405372-52737eeafc1e.jpg": "9a17c04d13515e96", "./assets/assets/images/swahili/1775163024488-e88e4a71179f.jpg": "c09cfc1fc3d23491", "./assets/assets/images/swahili/1775308519753-e8aee2262bf3.jpg": "5de48747d0ea67d3", "./assets/assets/images/swahili/1776883591149-e93c3027c51f.jpg": "24b64dcc5a447e1a", "./assets/assets/images/swahili/1778342261377-9248c3dd10fd.jpg": "248e5d956b79344b", "./assets/assets/images/swahili/1778502802065-d24cd36b5731.jpg": "46b3094e2512e451", "./assets/assets/images/swahili/1779133558796-c7bf60f22208.jpg": "22117a2585d7a835", "./assets/assets/images/swahili/1780027684177-d297178ea31c.jpg": "392999a984c89113", "./assets/assets/images/swahili/1781935307689-920207af57db.jpg": "00bee4c82ddc30c7", "./assets/assets/news_fonts/AbrilFatface-Regular.ttf": "8c6847c75ae35d0c", "./assets/assets/news_fonts/OldStandard-Bold.ttf": "62043bcac6936cc1", "./assets/assets/news_fonts/OldStandard-Italic.ttf": "e15459ba33dae663", "./assets/assets/news_fonts/OldStandard-Regular.ttf": "5d36040c5873ad77", "./assets/assets/news_fonts/UnifrakturCook-Bold.ttf": "f1f39b8b466277ef", "./assets/assets/sounds/README.md": "7d70514fd92d1ff7", "./assets/assets/sounds/YTMP3GG_YouTube_Kaching-sound-effect-sound-sounds-sounde_Media_a7Vue-A0BOY_007_128k.mp3": "7092bb58b64971d5", "./assets/assets/sounds/income_cash.mp3": "7092bb58b64971d5", "./assets/assets/twemoji/1f1f9-1f1ff.png": "82728ba56ae88cd8", "./assets/assets/twemoji/1f1fa-1f1f8.png": "8fc9e2f18b560223", "./assets/assets/twemoji/1f30a.png": "ceca0789a6e5352b", "./assets/assets/twemoji/1f319.png": "582f426ea93b0594", "./assets/assets/twemoji/1f31e.png": "ab6e013f80110ad4", "./assets/assets/twemoji/1f33f.png": "3d7ba4d0f9dfa0e2", "./assets/assets/twemoji/1f347.png": "f7b6ea8263815300", "./assets/assets/twemoji/1f34a.png": "3f5caead6872798d", "./assets/assets/twemoji/1f34f.png": "e4a72c6f0188d9e9", "./assets/assets/twemoji/1f352.png": "db99e6137ae2d006", "./assets/assets/twemoji/1f36b.png": "99b0e6c94d813eaa", "./assets/assets/twemoji/1f36c.png": "07e2dabf0a6ee7a6", "./assets/assets/twemoji/1f373.png": "bca52699c7f46c4f", "./assets/assets/twemoji/1f381.png": "55898fa8b8df2b1c", "./assets/assets/twemoji/1f389.png": "bdb5d64480323253", "./assets/assets/twemoji/1f393.png": "ceb0f758fa96aa54", "./assets/assets/twemoji/1f3a8.png": "489face11257c208", "./assets/assets/twemoji/1f3ae.png": "e6da782937b09c73", "./assets/assets/twemoji/1f3af.png": "06b300d40615d296", "./assets/assets/twemoji/1f3b5.png": "509cd03904e64d1a", "./assets/assets/twemoji/1f3e0.png": "4b45c9c4ca608fe6", "./assets/assets/twemoji/1f3e2.png": "49ee96e053f63337", "./assets/assets/twemoji/1f42c.png": "bb41830430ddd01c", "./assets/assets/twemoji/1f44d.png": "4a32750fe064ddf8", "./assets/assets/twemoji/1f44f.png": "1f0833639cc6fbb9", "./assets/assets/twemoji/1f464.png": "a21ac1e46d02b168", "./assets/assets/twemoji/1f468-1f3fb-200d-1f9b1.png": "a36b3c9d0e06701a", "./assets/assets/twemoji/1f468-1f3fb.png": "79bb75dfbcb56e1e", "./assets/assets/twemoji/1f468-1f3fd-200d-1f393.png": "4b2e51d3837f3470", "./assets/assets/twemoji/1f468-1f3fd-200d-1f4bc.png": "f055b502e4c671c2", "./assets/assets/twemoji/1f468-1f3fd-200d-1f9b1.png": "6aac46ae418ca14d", "./assets/assets/twemoji/1f468-1f3fd.png": "8be6d25475a33741", "./assets/assets/twemoji/1f468-1f3fe-200d-1f393.png": "faf324b6573d1ddb", "./assets/assets/twemoji/1f468-1f3fe-200d-1f4bc.png": "f84e6ab150e87c8d", "./assets/assets/twemoji/1f468-1f3fe-200d-1f9b1.png": "0fc9a89b1938c43a", "./assets/assets/twemoji/1f468-1f3fe-200d-1f9b2.png": "0365f0e88919e661", "./assets/assets/twemoji/1f468-1f3fe.png": "2828f4b7d4a3b358", "./assets/assets/twemoji/1f468-1f3ff-200d-1f4bc.png": "eea0f282675d8714", "./assets/assets/twemoji/1f468-1f3ff-200d-1f9b1.png": "e7315ba3f328d4b2", "./assets/assets/twemoji/1f468-1f3ff-200d-1f9b2.png": "4a1eb6e4647a238e", "./assets/assets/twemoji/1f468-1f3ff.png": "255c7b0f74e9993b", "./assets/assets/twemoji/1f468-200d-1f393.png": "1b01872f4909954c", "./assets/assets/twemoji/1f468-200d-1f4bc.png": "d2b44b09eb1e78af", "./assets/assets/twemoji/1f468.png": "ddd49436665b49b1", "./assets/assets/twemoji/1f469-1f3fb-200d-1f393.png": "a15fba7c6865f4cc", "./assets/assets/twemoji/1f469-1f3fb-200d-1f9b1.png": "915bbce6d47ab4fc", "./assets/assets/twemoji/1f469-1f3fb.png": "ddfe84ec2eec6b6f", "./assets/assets/twemoji/1f469-1f3fd-200d-1f393.png": "50c6484981bbd19f", "./assets/assets/twemoji/1f469-1f3fd-200d-1f4bc.png": "71988374b3f54f5d", "./assets/assets/twemoji/1f469-1f3fd-200d-1f9b1.png": "ea66abb1f617a509", "./assets/assets/twemoji/1f469-1f3fd.png": "f73cada71f99c6ee", "./assets/assets/twemoji/1f469-1f3fe-200d-1f393.png": "ed48537e5ec2a52c", "./assets/assets/twemoji/1f469-1f3fe-200d-1f4bc.png": "f3ce85c559867f44", "./assets/assets/twemoji/1f469-1f3fe-200d-1f9b1.png": "141499ca435baf72", "./assets/assets/twemoji/1f469-1f3fe-200d-1f9b3.png": "9197fe0c7e7d3e8b", "./assets/assets/twemoji/1f469-1f3fe.png": "50d6ad17ef4da7a8", "./assets/assets/twemoji/1f469-1f3ff-200d-1f4bc.png": "1b269128c98fb5b7", "./assets/assets/twemoji/1f469-1f3ff-200d-1f9b1.png": "c3c6c80bb8cdcf88", "./assets/assets/twemoji/1f469-1f3ff-200d-1f9b3.png": "018bc682f1820455", "./assets/assets/twemoji/1f469-1f3ff.png": "9c6f1693c937b37f", "./assets/assets/twemoji/1f469-200d-1f393.png": "bc4ceed0b95c0222", "./assets/assets/twemoji/1f469-200d-1f4bc.png": "5910e54508c02d2d", "./assets/assets/twemoji/1f469.png": "837643d3c7072b92", "./assets/assets/twemoji/1f499.png": "467cc46fff85ec3a", "./assets/assets/twemoji/1f4a1.png": "cddcb146e40e2855", "./assets/assets/twemoji/1f4aa.png": "2717083cb41fc015", "./assets/assets/twemoji/1f4b0.png": "7440490f6d702efa", "./assets/assets/twemoji/1f4bc.png": "fc251e20f90bb724", "./assets/assets/twemoji/1f4c5.png": "c22d7ab7235506c9", "./assets/assets/twemoji/1f4c8.png": "2b5373f624e6a849", "./assets/assets/twemoji/1f4ca.png": "4a56f162dc667d8c", "./assets/assets/twemoji/1f4cb.png": "57826d2f0468e14e", "./assets/assets/twemoji/1f4cc.png": "730a5af2c5b23401", "./assets/assets/twemoji/1f4ce.png": "080891cecd392202", "./assets/assets/twemoji/1f4da.png": "9779d6223243e1e3", "./assets/assets/twemoji/1f4dd.png": "a837460f7144f3e1", "./assets/assets/twemoji/1f4de.png": "5d28428f24ad7910", "./assets/assets/twemoji/1f50d.png": "0992646745fa597f", "./assets/assets/twemoji/1f525.png": "4862859d393b2a68", "./assets/assets/twemoji/1f52c.png": "af904e72dbe90088", "./assets/assets/twemoji/1f58c.png": "bc71bc037caffdb2", "./assets/assets/twemoji/1f5a4.png": "2d8d0f6b741fc113", "./assets/assets/twemoji/1f5c2.png": "b67d33b35e09dbf4", "./assets/assets/twemoji/1f600.png": "e78e35bed487156d", "./assets/assets/twemoji/1f60a.png": "f3dc4d5d73a22e9f", "./assets/assets/twemoji/1f60d.png": "7df0abbe6af9d220", "./assets/assets/twemoji/1f60e.png": "88ada2fb42252591", "./assets/assets/twemoji/1f634.png": "e05fc242525b92fd", "./assets/assets/twemoji/1f642.png": "39a7d733bfd9e00e", "./assets/assets/twemoji/1f64c.png": "6f8a3a69b6068769", "./assets/assets/twemoji/1f680.png": "ba144bc65dc6e3c7", "./assets/assets/twemoji/1f6d2.png": "61822a6c767d93fe", "./assets/assets/twemoji/1f914.png": "5fb4adfc0cd59bed", "./assets/assets/twemoji/1f91d.png": "93f2145274471188", "./assets/assets/twemoji/1f929.png": "121fe41ff17c002c", "./assets/assets/twemoji/1f973.png": "a400b6f9bc215e20", "./assets/assets/twemoji/1f9d4-200d-2642-fe0f.png": "82e2545609a232fe", "./assets/assets/twemoji/1f9d4.png": "4159eef9389e436a", "./assets/assets/twemoji/1f9d5.png": "56098b3830913c12", "./assets/assets/twemoji/1fa75.png": "e09ecd762b11181e", "./assets/assets/twemoji/1faa3.png": "51853fd31cce3cb9", "./assets/assets/twemoji/2139.png": "a0b183f97a68e698", "./assets/assets/twemoji/23f0.png": "0bfac4d5a95007e8", "./assets/assets/twemoji/2615.png": "c8cfa4ddc8ead6a5", "./assets/assets/twemoji/26a0.png": "67bc03a2a5af4886", "./assets/assets/twemoji/26a1.png": "78140684f45698ca", "./assets/assets/twemoji/26c4.png": "4a8ba8e3051d3c6f", "./assets/assets/twemoji/2705.png": "ef35182d3e35a35f", "./assets/assets/twemoji/2708.png": "4092b23b2885d030", "./assets/assets/twemoji/2709.png": "7b85299402563352", "./assets/assets/twemoji/2728.png": "f0b83452d2b81550", "./assets/assets/twemoji/2764.png": "d881b7fa7626554b", "./assets/assets/twemoji/2b50.png": "7db170b9ef39da80", "./assets/assets/video_studio/yt_news_desk.png": "febdf8539bea3565", "./assets/assets/video_studio/yt_studio_curved.png": "695a3919a3720a43", "./assets/fonts/MaterialIcons-Regular.otf": "f4d5b13f9813e444", "./assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2988b9d3f047f158", "./assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af971", "./assets/shaders/ink_sparkle.frag": "2815c3cf1e7af2d8", "./assets/shaders/stretch_effect.frag": "f0ab847ccb98001d", "./canvaskit/canvaskit.js": "7dadf4a04a0349ef", "./canvaskit/canvaskit.wasm": "b4751756f5a70ea5", "./canvaskit/chromium/canvaskit.js": "ceafeb10aaadee4c", "./canvaskit/chromium/canvaskit.wasm": "687faaed6161619a", "./canvaskit/skwasm.js": "9f70d800e2d27fbe", "./canvaskit/skwasm.wasm": "c96d862d9259766e", "./canvaskit/skwasm_heavy.js": "92feb29b5061f1d4", "./canvaskit/skwasm_heavy.wasm": "dd384615d028fcf8", "./canvaskit/webparagraph/canvaskit.js": "d1037ee4a7e59f39", "./canvaskit/webparagraph/canvaskit.wasm": "0a6920d986be45bf", "./canvaskit/wimp.js": "0f59c28e92c43474", "./canvaskit/wimp.wasm": "c8a7a40d867c889d", "./favicon.png": "a3ec9f47956e32ba", "./flutter.js": "755336c430d7f9f9", "./flutter.js.map": "dc4c394199e37bc6", "./flutter_bootstrap.js": "c3d754ea8e561696", "./icons/Icon-192.png": "8e567229b2f2936d", "./icons/Icon-512.png": "e1d50c8edfacd3ff", "./icons/Icon-maskable-192.png": "8e567229b2f2936d", "./icons/Icon-maskable-512.png": "e1d50c8edfacd3ff", "./icons/apple-touch-icon-180.png": "183e2b89f97418af", "./index.html": "09bd1aa05b17cca8", "./main.dart.js": "f6c6fd5f2530648c", "./main.dart.js_1.part.js": "fc65cd7383f2f7c1", "./main.dart.js_10.part.js": "d7956fbb9bef1763", "./main.dart.js_100.part.js": "f46bb901c3fc9db4", "./main.dart.js_106.part.js": "e4de8709b301e0da", "./main.dart.js_108.part.js": "f0fd17524a395b6b", "./main.dart.js_109.part.js": "5c644e4e24965517", "./main.dart.js_11.part.js": "4f7dbc8a322a28b7", "./main.dart.js_110.part.js": "46508f4251ca3669", "./main.dart.js_111.part.js": "fc6bf84463b1f4c2", "./main.dart.js_112.part.js": "34315ff5c8f42c17", "./main.dart.js_115.part.js": "dd4040e058757859", "./main.dart.js_116.part.js": "ef31cf51e71e2312", "./main.dart.js_117.part.js": "a2080b55882bc73a", "./main.dart.js_118.part.js": "d3761cf18ac661a2", "./main.dart.js_119.part.js": "92e59f9c87e76933", "./main.dart.js_12.part.js": "3d8df735c94e173d", "./main.dart.js_122.part.js": "9a4b8e65a02f5a60", "./main.dart.js_126.part.js": "c5d7da846930f95f", "./main.dart.js_128.part.js": "e8ef18d73643bfc6", "./main.dart.js_13.part.js": "87b42154b3fdc074", "./main.dart.js_130.part.js": "4c4af330e28bc1fb", "./main.dart.js_131.part.js": "92acaa5285b6c753", "./main.dart.js_132.part.js": "f9ab82bb53427022", "./main.dart.js_133.part.js": "bae38e3d3d5e3103", "./main.dart.js_134.part.js": "d5c623f9c735cc50", "./main.dart.js_137.part.js": "81e852500277bd88", "./main.dart.js_138.part.js": "882fb1cca87cf09a", "./main.dart.js_140.part.js": "64a1b044041c8d4f", "./main.dart.js_141.part.js": "84232af085d5e22b", "./main.dart.js_142.part.js": "fc0f6f31cf5e7900", "./main.dart.js_144.part.js": "a66a8144e40f3458", "./main.dart.js_145.part.js": "9ee60b463242a359", "./main.dart.js_146.part.js": "204efb57b0bba839", "./main.dart.js_149.part.js": "1af22dce329059c9", "./main.dart.js_150.part.js": "a20fc92b5b1f2b78", "./main.dart.js_151.part.js": "0eda076a398f21d0", "./main.dart.js_152.part.js": "6c88e6a6b5c39b6d", "./main.dart.js_153.part.js": "1c8b72a098ab0912", "./main.dart.js_155.part.js": "ff1b6922a14aac15", "./main.dart.js_156.part.js": "15fc02f798093a2c", "./main.dart.js_158.part.js": "b5de657c7fd77d4f", "./main.dart.js_159.part.js": "45f3d2e8cafcc61b", "./main.dart.js_160.part.js": "a5c055f44fec0caf", "./main.dart.js_165.part.js": "f026ed861e812609", "./main.dart.js_166.part.js": "91c487c5a5b9945f", "./main.dart.js_167.part.js": "becfe59b862a0925", "./main.dart.js_168.part.js": "94c909617c59e8e3", "./main.dart.js_169.part.js": "52fcfea66d3fd320", "./main.dart.js_170.part.js": "3a0061d48b1086d1", "./main.dart.js_171.part.js": "6c9459ff20b83837", "./main.dart.js_172.part.js": "53db3ab5540d80ca", "./main.dart.js_173.part.js": "5ba458b414764643", "./main.dart.js_174.part.js": "bc2c736775f34d35", "./main.dart.js_175.part.js": "c9745690e2268881", "./main.dart.js_176.part.js": "5d4becba94e03673", "./main.dart.js_179.part.js": "86f44c006a911d5f", "./main.dart.js_180.part.js": "06a555c2fb2e9264", "./main.dart.js_181.part.js": "c61e29c43f691b9f", "./main.dart.js_182.part.js": "fecfd82070648d12", "./main.dart.js_187.part.js": "5d5c2c0a72fd18db", "./main.dart.js_188.part.js": "1e325ab9c37cc25a", "./main.dart.js_189.part.js": "297fb91c604bcc5b", "./main.dart.js_19.part.js": "4e02e74314dcb092", "./main.dart.js_190.part.js": "91a97083d4a6b34b", "./main.dart.js_194.part.js": "936c4a3105ce2992", "./main.dart.js_195.part.js": "00e7b44e64d195c5", "./main.dart.js_196.part.js": "0c6c48c75274f941", "./main.dart.js_197.part.js": "4f09b1779fb52c18", "./main.dart.js_198.part.js": "eb8471b08d02bbba", "./main.dart.js_199.part.js": "e95b5c10a3c9ba42", "./main.dart.js_2.part.js": "9b8b839b8eddc1fb", "./main.dart.js_20.part.js": "a4fda2f09422450b", "./main.dart.js_200.part.js": "7721529d0c23f4e1", "./main.dart.js_201.part.js": "cb83bf6f553ff53d", "./main.dart.js_203.part.js": "9d1c968c4a1ed39e", "./main.dart.js_207.part.js": "5c8fa10fd1ff5eeb", "./main.dart.js_208.part.js": "225990867eea3617", "./main.dart.js_209.part.js": "ad41d3abef7b30f4", "./main.dart.js_21.part.js": "2534ab77191bea30", "./main.dart.js_210.part.js": "5c7b00f2d0bf8345", "./main.dart.js_211.part.js": "571159aa02ffbe83", "./main.dart.js_212.part.js": "08001ecae1a9537a", "./main.dart.js_214.part.js": "a1a3134634fdc8aa", "./main.dart.js_216.part.js": "02a544bc63de0acd", "./main.dart.js_217.part.js": "e573d0d020a4495d", "./main.dart.js_218.part.js": "a90db1cab9a87ecb", "./main.dart.js_22.part.js": "38166d2e8f253ee5", "./main.dart.js_222.part.js": "6a4860ea7eb863ca", "./main.dart.js_223.part.js": "8c9e66a9919904c9", "./main.dart.js_224.part.js": "02121800407ede2f", "./main.dart.js_225.part.js": "774a0b92deccac55", "./main.dart.js_226.part.js": "bc458c513b0424f8", "./main.dart.js_227.part.js": "112a8c6af5ede8c6", "./main.dart.js_228.part.js": "20cbe9908d86161f", "./main.dart.js_229.part.js": "0a6c45c5d5141f71", "./main.dart.js_23.part.js": "01aae7a3e86fdbe3", "./main.dart.js_230.part.js": "61634af6a7433698", "./main.dart.js_234.part.js": "54aaf4bee1630446", "./main.dart.js_235.part.js": "4476b5edf45df782", "./main.dart.js_236.part.js": "6c26d624c44abd4f", "./main.dart.js_237.part.js": "b06ed82e3db86ed2", "./main.dart.js_238.part.js": "0fd06a178cfd0a43", "./main.dart.js_239.part.js": "2ce24f427dd10b51", "./main.dart.js_24.part.js": "b7f6bb7f394d04cf", "./main.dart.js_240.part.js": "4e5e06fbde8a904c", "./main.dart.js_241.part.js": "04c54d08560045ba", "./main.dart.js_242.part.js": "c2bfc7124f79fbfe", "./main.dart.js_243.part.js": "406a120acc424790", "./main.dart.js_244.part.js": "206039ce5db35bf1", "./main.dart.js_245.part.js": "917326bcd8982f38", "./main.dart.js_247.part.js": "59b24e09f7eb97e6", "./main.dart.js_248.part.js": "29897400499bc288", "./main.dart.js_249.part.js": "d9ca3b3932cb8c2c", "./main.dart.js_25.part.js": "092c19611be21dd3", "./main.dart.js_250.part.js": "187760ef4afc0d12", "./main.dart.js_251.part.js": "4b06f74d31c90f48", "./main.dart.js_254.part.js": "64bc7be9b04950c6", "./main.dart.js_256.part.js": "43463feb8684d2cd", "./main.dart.js_257.part.js": "a70f1a6b9f84c004", "./main.dart.js_258.part.js": "aadc0671aded2605", "./main.dart.js_260.part.js": "a19af525fd7c006b", "./main.dart.js_261.part.js": "97da9726616df684", "./main.dart.js_262.part.js": "ed884fbcc236c019", "./main.dart.js_263.part.js": "699027233dc5aa33", "./main.dart.js_264.part.js": "814a4e9fa89cf602", "./main.dart.js_265.part.js": "8d57820cf1304913", "./main.dart.js_266.part.js": "3486d11b6e05fe09", "./main.dart.js_267.part.js": "32e2ac948f6bdfcd", "./main.dart.js_268.part.js": "041c7499de859920", "./main.dart.js_271.part.js": "0fccd97f3116a8b6", "./main.dart.js_272.part.js": "0fed37dd18af9ac3", "./main.dart.js_273.part.js": "ddbd86f3f2af6ce1", "./main.dart.js_274.part.js": "764c341772590c6d", "./main.dart.js_275.part.js": "1607f50a219e77b5", "./main.dart.js_276.part.js": "d819df9a021c2d4a", "./main.dart.js_277.part.js": "ad33bad100b86e1f", "./main.dart.js_278.part.js": "23000ca47b41b157", "./main.dart.js_279.part.js": "521ad1b7e79ec3db", "./main.dart.js_28.part.js": "698da7ad4bca65b5", "./main.dart.js_282.part.js": "9fcb498c3ca4bf5e", "./main.dart.js_284.part.js": "9a37949b4fd2e403", "./main.dart.js_285.part.js": "1dd5a22926669512", "./main.dart.js_286.part.js": "a5f7914aeb04a41a", "./main.dart.js_287.part.js": "e6401db6e0a8acd4", "./main.dart.js_288.part.js": "ac08201878a12626", "./main.dart.js_289.part.js": "cd5d321073180aa7", "./main.dart.js_291.part.js": "f7a101891a2ac3cf", "./main.dart.js_292.part.js": "4eeb978b3763d9aa", "./main.dart.js_293.part.js": "38f7e1631532e5bd", "./main.dart.js_295.part.js": "4a12577a7d363dc1", "./main.dart.js_296.part.js": "026d5daf92afceb4", "./main.dart.js_297.part.js": "10b8a65d2d90b7dc", "./main.dart.js_300.part.js": "ae31c1a899e9aa99", "./main.dart.js_302.part.js": "2b851989bc1e8c94", "./main.dart.js_305.part.js": "8fb3af55f077f784", "./main.dart.js_306.part.js": "e6e7186f5e3ce030", "./main.dart.js_307.part.js": "98f98e4cd319cc39", "./main.dart.js_308.part.js": "ea4b9de0b66ebc99", "./main.dart.js_309.part.js": "7b83281a564c483f", "./main.dart.js_31.part.js": "713715abda433f3e", "./main.dart.js_310.part.js": "f75d8a3aaa109287", "./main.dart.js_311.part.js": "3b98f42315e5c132", "./main.dart.js_313.part.js": "6d037c29529f1364", "./main.dart.js_314.part.js": "52b126dea1b77ed1", "./main.dart.js_315.part.js": "a245103e382b7c81", "./main.dart.js_316.part.js": "0f78d7e43089e7e6", "./main.dart.js_317.part.js": "c2e85eb4aad9312d", "./main.dart.js_319.part.js": "886dbb2b3b7f4e41", "./main.dart.js_32.part.js": "b59a7a5d2ac6a0c8", "./main.dart.js_320.part.js": "c5251ef0499dd1b5", "./main.dart.js_321.part.js": "26ac5dcc52550d82", "./main.dart.js_322.part.js": "57087f0c71896c9b", "./main.dart.js_323.part.js": "a18d29afa5dbc96d", "./main.dart.js_324.part.js": "13893fbacc326948", "./main.dart.js_326.part.js": "1c5ab0849fe0a349", "./main.dart.js_327.part.js": "7b63aed4ef6cdc6d", "./main.dart.js_328.part.js": "59d1ff793242e3fb", "./main.dart.js_33.part.js": "bd09a9b306393e06", "./main.dart.js_330.part.js": "3c2e37f21efac8b6", "./main.dart.js_331.part.js": "53762fcb4609d768", "./main.dart.js_332.part.js": "feb7aa4ad08799f8", "./main.dart.js_333.part.js": "77c56af366342f8f", "./main.dart.js_334.part.js": "7486ba0402391928", "./main.dart.js_335.part.js": "57422ad514e68a77", "./main.dart.js_339.part.js": "ce0a91124d992e73", "./main.dart.js_34.part.js": "c737050c78a89f1e", "./main.dart.js_340.part.js": "26924f3b29872004", "./main.dart.js_341.part.js": "b540e72dc6312870", "./main.dart.js_342.part.js": "7a817df8d5733300", "./main.dart.js_343.part.js": "e96b4568d350f66e", "./main.dart.js_345.part.js": "2e40548a0e404750", "./main.dart.js_346.part.js": "3b271b8c5a42d9ce", "./main.dart.js_347.part.js": "0f3d499481658e75", "./main.dart.js_348.part.js": "79f55e85d8f9bf2c", "./main.dart.js_349.part.js": "3db9e0e4cd5af8f9", "./main.dart.js_35.part.js": "3f0575d8e89e69aa", "./main.dart.js_350.part.js": "61e60817fb1f3c83", "./main.dart.js_36.part.js": "63c408b826ea6eac", "./main.dart.js_37.part.js": "e65242ffd6febcf0", "./main.dart.js_38.part.js": "a07b1934418adc7d", "./main.dart.js_39.part.js": "fbf133036ae7d3e8", "./main.dart.js_4.part.js": "590bf98f0000c0af", "./main.dart.js_44.part.js": "f18c88c7a26fb93a", "./main.dart.js_5.part.js": "d008ff7c9e5f84e9", "./main.dart.js_50.part.js": "40f78c20032c9f6f", "./main.dart.js_55.part.js": "a6acfd1d16b0024d", "./main.dart.js_56.part.js": "1ae5aec9d4fd1059", "./main.dart.js_57.part.js": "8436fee668d39e97", "./main.dart.js_59.part.js": "77d46b54ebf895e6", "./main.dart.js_61.part.js": "a6423e114332ecd9", "./main.dart.js_62.part.js": "dcadae55dade1624", "./main.dart.js_63.part.js": "53793757cbe0a8a3", "./main.dart.js_64.part.js": "37d888f9de776e23", "./main.dart.js_65.part.js": "ebf2010f4a1b3bbf", "./main.dart.js_66.part.js": "1250381da4884c58", "./main.dart.js_67.part.js": "8d473b1614950791", "./main.dart.js_68.part.js": "30ea07f335c726eb", "./main.dart.js_69.part.js": "28500f3841273101", "./main.dart.js_7.part.js": "f8bb677f210136be", "./main.dart.js_70.part.js": "fb1081ac804f707f", "./main.dart.js_71.part.js": "b1115374b5f1eb7e", "./main.dart.js_72.part.js": "7e698d6cc662047a", "./main.dart.js_74.part.js": "34a7e61ed7941994", "./main.dart.js_77.part.js": "054638609e3b07ec", "./main.dart.js_8.part.js": "b50257297bd7811c", "./main.dart.js_82.part.js": "7812036b466e80cb", "./main.dart.js_83.part.js": "48da36d6130f81b8", "./main.dart.js_84.part.js": "fbf32f88095d20bf", "./main.dart.js_88.part.js": "fb9dae348c55079e", "./main.dart.js_89.part.js": "2bd3f7938561031a", "./main.dart.js_9.part.js": "a9fa2d0636f735a2", "./main.dart.js_90.part.js": "fc73814bb7133279", "./main.dart.js_91.part.js": "37629169ee08090c", "./main.dart.js_96.part.js": "7ab61411c1f29b94", "./main.dart.js_98.part.js": "ab998f99e8444a7b", "./main.dart.js_99.part.js": "4cb956d822a178ef", "./manifest.json": "1eb9129f25c3d832", "./ngmy_studio_fast_export.js": "3fbe007c828dff2d", "./ngmy_voice_capture.js": "97db5caa6f03d506", "./og-share.png": "e1d50c8edfacd3ff", "./version.json": "9953574e1e1aff9e", "./": "09bd1aa05b17cca8"};
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
  // The map of the world for the Earth Globe, so it works offline the very first time, even if it was never opened online.
  './assets/assets/data/world110.json',
  // The Body Explorer (the anatomy and the 3D engine), so it opens offline the very first time too.
  './assets/assets/data/body3d.bin',
  './assets/assets/data/body3d_lite.bin',
  './assets/assets/data/three.min.js',
  // The three characters of the city, so the people look right offline from the very first visit too.
  './assets/assets/avatars/Xbot.glb',
  './assets/assets/avatars/Michelle.glb',
  './assets/assets/avatars/Soldier.glb',
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
