/* NGMY PWA — cache-first shell so the app opens offline after one online visit. */
'use strict';

function ngmySwQuiet() {}

const CACHE_PREFIX = 'ngmy-pwa-';
function ngmySwBasePath() {
  var p = self.location.pathname || '/';
  return p.replace(/[^/]*$/, '') || '/';
}
const SCOPE_PATH = ngmySwBasePath();
const CACHE_NAME = CACHE_PREFIX + '20261123050520';

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
const PRECACHE_REVS = {"./.last_build_id": "9fe55d5a3876f16f", "./.nojekyll": "d41d8cd98f00b204", "./404.html": "dac1bead7096d3f1", "./CNAME": "4bd60f2c33459b12", "./assets/AssetManifest.bin": "5a14871fce6b79a5", "./assets/AssetManifest.bin.json": "024f8265284dd3bd", "./assets/FontManifest.json": "ce2d94be6353c086", "./assets/assets/avatars/Michelle.glb": "6735c9edb47dc756", "./assets/assets/avatars/Michelle.ngmyav": "ef3609be97e45758", "./assets/assets/avatars/Soldier.glb": "0998e2b4baf1dfd2", "./assets/assets/avatars/Soldier.ngmyav": "1f3ed7ad5776ddfe", "./assets/assets/avatars/Xbot.glb": "0fe16ad39ef83bd4", "./assets/assets/avatars/Xbot.ngmyav": "05709e9e7ee11e61", "./assets/assets/bio_link_icons/facebook.png": "8df53074d921d7a5", "./assets/assets/bio_link_icons/instagram.png": "d635dc103fe1dcf6", "./assets/assets/bio_link_icons/tiktok.png": "82ec4e42f2613ce1", "./assets/assets/bio_link_icons/youtube.png": "c76185bfa63f406b", "./assets/assets/data/body3d.bin": "ec168ccfeb62cdd8", "./assets/assets/data/body3d_lite.bin": "a48e51ea7ab5d9a8", "./assets/assets/data/elements.json": "79edcccba9ceff17", "./assets/assets/data/three.min.js": "cd7f71f87efb21f0", "./assets/assets/data/world110.json": "a65afd67dfd337d1", "./assets/assets/fonts/NotoColorEmoji.ttf": "46d5c51b979f9196", "./assets/assets/fonts/Roboto-Bold.ttf": "a68db3b33213fa13", "./assets/assets/fonts/Roboto-Light.ttf": "8d252992868e895b", "./assets/assets/fonts/Roboto-Medium.ttf": "989d2dff37a09f19", "./assets/assets/fonts/Roboto-Regular.ttf": "8f793587dcf03f31", "./assets/assets/hati/exact_curtain.jpg": "a1a071f654a85ffd", "./assets/assets/hati/exact_curtain_notitle.jpg": "9e7b73fec42a1f39", "./assets/assets/hati/exact_kifalme.jpg": "81d649b06dd1b26e", "./assets/assets/hati/exact_kifalme_couple.jpg": "360af3a8e862b9d5", "./assets/assets/hati/exact_kifalme_notitle.jpg": "a783940e72099c64", "./assets/assets/hati/exact_kijiji.jpg": "a905da771002dd0f", "./assets/assets/hati/exact_kijiji_couple.jpg": "f28c467be87f8e98", "./assets/assets/hati/exact_kijiji_notitle.jpg": "c37bc6e5b16931ca", "./assets/assets/hati/exact_kijiji_parents.jpg": "0493b84ff8a01420", "./assets/assets/hati/exact_roses.jpg": "9c1956cfc3bc1dfb", "./assets/assets/hati/exact_roses_notitle.jpg": "fb6544583e8b6a1d", "./assets/assets/hati/exact_sunset.jpg": "72bf1eb0c761a557", "./assets/assets/hati/exact_sunset_notitle.jpg": "34106c3815dd6264", "./assets/assets/hati/exact_village.jpg": "2a0df767c0f136a6", "./assets/assets/hati/exact_village_couple.jpg": "932d0041308c881b", "./assets/assets/hati/exact_village_notitle.jpg": "b378f7658b597b6a", "./assets/assets/images/advisors/bible_study_teacher_f.jpg": "29f4f22a98b0d5da", "./assets/assets/images/advisors/bible_study_teacher_m.jpg": "ff4aaf2e9e71a8c0", "./assets/assets/images/advisors/career_coach_m.jpg": "93eaf3c1a012a08c", "./assets/assets/images/advisors/companion_f.jpg": "f76e14b70b5dfc1a", "./assets/assets/images/advisors/companion_m.jpg": "c785791e7892c70b", "./assets/assets/images/advisors/doctor_f.jpg": "2fb4053d5c88288a", "./assets/assets/images/advisors/doctor_m.jpg": "93ab165ee30e339f", "./assets/assets/images/advisors/financial_advisor_f.jpg": "b73dd5b4ef697af4", "./assets/assets/images/advisors/financial_advisor_m.jpg": "c3fdc7f3f688070c", "./assets/assets/images/advisors/fitness_coach_m.jpg": "2c4892cf19c6a8d4", "./assets/assets/images/advisors/lawyer_f.jpg": "bb96eddd81558c79", "./assets/assets/images/advisors/lawyer_m.jpg": "018e938f444c7f7d", "./assets/assets/images/advisors/marriage_advisor_f.jpg": "646e6a35a27c6584", "./assets/assets/images/advisors/marriage_advisor_m.jpg": "404ebe463967f8dc", "./assets/assets/images/advisors/mshauri_m.jpg": "ff42ea519c862b13", "./assets/assets/images/advisors/pastor_m.jpg": "ad2c06e956c3b10f", "./assets/assets/images/advisors/person_alex_remy.jpg": "b5106a12c81c6a71", "./assets/assets/images/advisors/person_alisa_john.jpg": "df5efdb5760200c3", "./assets/assets/images/advisors/person_anna_amuri.jpg": "9e22ea4ae807ae2a", "./assets/assets/images/advisors/person_chloe_mitchell.jpg": "29f4f22a98b0d5da", "./assets/assets/images/advisors/person_grace_anderson.jpg": "28a7a1921587f0bd", "./assets/assets/images/advisors/person_isaiah_john.jpg": "ff4aaf2e9e71a8c0", "./assets/assets/images/advisors/person_jeremiah_nesto.jpg": "e9e4437a3bdf0523", "./assets/assets/images/advisors/person_mina.jpg": "5bd415401c0e6761", "./assets/assets/images/advisors/person_miriam.jpg": "bb20fabb5caa0232", "./assets/assets/images/advisors/person_nia_robertson.jpg": "9e04a5e61fe48eef", "./assets/assets/images/advisors/person_olivia_bennett.jpg": "16114f92d325cb68", "./assets/assets/images/advisors/person_sophie_morgan.jpg": "5605b640ef282d0c", "./assets/assets/images/advisors/person_susie.jpg": "dfa9dbbce9d2c097", "./assets/assets/images/advisors/person_suzana_mbuto.jpg": "264bede99d5d85f8", "./assets/assets/images/advisors/person_suzana_vanessa.jpg": "38237d53e4ae906e", "./assets/assets/images/advisors/teacher_f.jpg": "1315f58bbde3952f", "./assets/assets/images/advisors/teacher_m.jpg": "44e0974febbe21c3", "./assets/assets/images/advisors/therapist_f.jpg": "084b863611f7e7e7", "./assets/assets/images/ngmy_document_ask_icon.png": "788668a305c84d51", "./assets/assets/images/ngmy_logo.png": "5586df2d5317bc40", "./assets/assets/images/swahili/1432405972618-c60b0225b8f9.jpg": "14f45da805baf036", "./assets/assets/images/swahili/1435527173128-983b87201f4d.jpg": "9a87fa619f48d10c", "./assets/assets/images/swahili/1444464666168-49d633b86797.jpg": "544f9eb53330a921", "./assets/assets/images/swahili/1456513080510-7bf3a84b82f8.jpg": "7b3d1898c7daa7f2", "./assets/assets/images/swahili/1457383457550-47a5cfdbab17.jpg": "76bb841b413450b3", "./assets/assets/images/swahili/1472214103451-9374bd1c798e.jpg": "c0ac3a1dc4673092", "./assets/assets/images/swahili/1487956382158-bb926046304a.jpg": "b5a2fc643ef48af3", "./assets/assets/images/swahili/1488132828189-4e416661b680.jpg": "ccf0f0a648e53412", "./assets/assets/images/swahili/1489112318845-bcfb7233b1a1.jpg": "d6047de722c07aa5", "./assets/assets/images/swahili/1489275259429-70f6ef5705c1.jpg": "c2feaab1c55ba531", "./assets/assets/images/swahili/1490127252417-7c393f993ee4.jpg": "2a78d4a759c9bc39", "./assets/assets/images/swahili/1491414416654-c4de0c986af8.jpg": "39e2bfd22ffe0364", "./assets/assets/images/swahili/1491929536571-bdbc57e72324.jpg": "0cff9bc1ae3fdbfd", "./assets/assets/images/swahili/1492684223066-81342ee5ff30.jpg": "aed8e728c05eb132", "./assets/assets/images/swahili/1493612276216-ee3925520721.jpg": "50c05a9712ce81d6", "./assets/assets/images/swahili/1493836512294-502baa1986e2.jpg": "e6beb67dd421f9a3", "./assets/assets/images/swahili/1494790108377-be9c29b29330.jpg": "17b3056765b573b6", "./assets/assets/images/swahili/1495020689067-958852a7765e.jpg": "707236a951d9c03f", "./assets/assets/images/swahili/1501743411739-de52ea0ce6a0.jpg": "8ebaf53f6b773057", "./assets/assets/images/swahili/1502355984-b735cb2550ce.jpg": "2f3beb0596c01236", "./assets/assets/images/swahili/1502663656924-a7163d645e0c.jpg": "b571839eac2184ff", "./assets/assets/images/swahili/1504674900247-0877df9cc836.jpg": "d877a9a45e0bbc56", "./assets/assets/images/swahili/1506869640319-fe1a24fd76dc.jpg": "d13a02c040a5f37c", "./assets/assets/images/swahili/1507003211169-0a1dd7228f2d.jpg": "d08e722720e15ce2", "./assets/assets/images/swahili/1507206130118-b5907f817163.jpg": "a338cc4eef37530e", "./assets/assets/images/swahili/1508455858334-95337ba25607.jpg": "d2bd933a2de93a98", "./assets/assets/images/swahili/1515378791036-0648a3ef77b2.jpg": "08efff83255e0306", "./assets/assets/images/swahili/1516382022989-cd771ab91fb1.jpg": "acfde0ef27eaba58", "./assets/assets/images/swahili/1516749712236-67f5688a642a.jpg": "c8da476816145350", "./assets/assets/images/swahili/1517545084371-4a575dde2a02.jpg": "990e10c95917f8cf", "./assets/assets/images/swahili/1517836357463-d25dfeac3438.jpg": "22ac9cf58e160258", "./assets/assets/images/swahili/1517870662726-c1d98ee36250.jpg": "3e2aadddd4d22042", "./assets/assets/images/swahili/1517884885877-a46b0f5327db.jpg": "9401d0c311f36f86", "./assets/assets/images/swahili/1518281361980-b26bfd556770.jpg": "9aed03947f17ba53", "./assets/assets/images/swahili/1518843875459-f738682238a6.jpg": "9d2533782b71faa0", "./assets/assets/images/swahili/1519681393784-d120267933ba.jpg": "041376ef01b84037", "./assets/assets/images/swahili/1519996529931-28324d5a630e.jpg": "dd16782e9ce8c014", "./assets/assets/images/swahili/1520006507663-f34ed4a17b4c.jpg": "6e86e6459536d67a", "./assets/assets/images/swahili/1520187044487-b2efb58f0cba.jpg": "b399060eba27cfba", "./assets/assets/images/swahili/1521791136064-7986c2920216.jpg": "c6db5c1b3e92496b", "./assets/assets/images/swahili/1522771739844-6a9f6d5f14af.jpg": "d20942479e2ff712", "./assets/assets/images/swahili/1524601500432-1e1a4c71d692.jpg": "2b9058417ae82bd3", "./assets/assets/images/swahili/1525206809752-65312b959c88.jpg": "38843db89f2c7470", "./assets/assets/images/swahili/1530013255753-3f6578d19059.jpg": "b1e7cd2957490876", "./assets/assets/images/swahili/1531379410502-63bfe8cdaf6f.jpg": "dd6aa938cfada159", "./assets/assets/images/swahili/1531873252757-8c22fa9e7a98.jpg": "4216da4d674300a2", "./assets/assets/images/swahili/1535588986102-0e9c0c60cba2.jpg": "1a0088db20ae99b6", "./assets/assets/images/swahili/1536816579748-4ecb3f03d72a.jpg": "94ec046160f1cf6c", "./assets/assets/images/swahili/1541089404510-5c9a779841fc.jpg": "914109d51aca581b", "./assets/assets/images/swahili/1541480601022-2308c0f02487.jpg": "bb2dc206b78875e3", "./assets/assets/images/swahili/1542014740373-51ad6425eb7c.jpg": "a6f46ea5fbb61e09", "./assets/assets/images/swahili/1542229538-4d8784038379.jpg": "970247b722a5c415", "./assets/assets/images/swahili/1543265489-6130022b8561.jpg": "f52eda042647e4e8", "./assets/assets/images/swahili/1543807535-eceef0bc6599.jpg": "8643d7ee0b9ffa97", "./assets/assets/images/swahili/1543980932-b5fc649a8000.jpg": "632d8f48601b19e1", "./assets/assets/images/swahili/1544787219-7f47ccb76574.jpg": "dc3ba3cf33f72398", "./assets/assets/images/swahili/1548550023-2bdb3c5beed7.jpg": "888bb94df7f053da", "./assets/assets/images/swahili/1548780607-46c78f38182d.jpg": "664ca80f27d084eb", "./assets/assets/images/swahili/1549068294-04a001ee0638.jpg": "eaa72967bd81550c", "./assets/assets/images/swahili/1549923746-c502d488b3ea.jpg": "780b3bcc5d1e37e4", "./assets/assets/images/swahili/1552452380-4137214f33b6.jpg": "9702a3c8398d31f4", "./assets/assets/images/swahili/1552664730-d307ca884978.jpg": "eb7890911034a92c", "./assets/assets/images/swahili/1552846573-47e482355fa7.jpg": "2aa5d7f127cbd9dd", "./assets/assets/images/swahili/1552862750-746b8f6f7f25.jpg": "313a58917241275d", "./assets/assets/images/swahili/1553729784-e91953dec042.jpg": "c60d9ff2d8218efe", "./assets/assets/images/swahili/1554188572-9d184b57d8e2.jpg": "6ee4cc82c51e043e", "./assets/assets/images/swahili/1556848527-f7c548b972b2.jpg": "7b7846eb16f543f8", "./assets/assets/images/swahili/1556911220-e15b29be8c8f.jpg": "449de511870e0c9b", "./assets/assets/images/swahili/1557050543-4d5f4e07ef46.jpg": "7a9168bad1b45c1c", "./assets/assets/images/swahili/1557176278-3326a3193580.jpg": "3e7e51b8d358ef97", "./assets/assets/images/swahili/1558541966-ee7182e26d63.jpg": "94825a65c349890f", "./assets/assets/images/swahili/1559150182-a7144f7628f9.jpg": "398f9260528813f8", "./assets/assets/images/swahili/1559769732-3a943df124b0.jpg": "1cf4f944af49bcba", "./assets/assets/images/swahili/1560707854-fb9a10eeaace.jpg": "ca13fc7a304e737c", "./assets/assets/images/swahili/1560986752-2e31d9507413.jpg": "9f08bac675ad5fbc", "./assets/assets/images/swahili/1561089489-f13d5e730d72.jpg": "1bdab76d3dcfcdd9", "./assets/assets/images/swahili/1563176137-45a7f3917371_portrait.jpg": "f2c86afe3f5d630b", "./assets/assets/images/swahili/1564013799919-ab600027ffc6.jpg": "ae504053e3bc72f9", "./assets/assets/images/swahili/1566653223195-e09604588c9f.jpg": "9ac278fe1da71618", "./assets/assets/images/swahili/1570563169510-ac9c2c3cad68.jpg": "336b13e50d69f143", "./assets/assets/images/swahili/1572707691993-29c96332f6be.jpg": "9cfd4808fd2fbe9c", "./assets/assets/images/swahili/1573376670329-0261ea9fde97.jpg": "6c3aae752966006e", "./assets/assets/images/swahili/1578125468943-b963a1daa385.jpg": "cff0840828fdfb5f", "./assets/assets/images/swahili/1578625155481-7bc40a6481b6.jpg": "5f6830227a490609", "./assets/assets/images/swahili/1578651714116-2a1645b70c0f.jpg": "839fd3e092ed8a0a", "./assets/assets/images/swahili/1580446623001-3abf670c5c55.jpg": "94acdccd7831caad", "./assets/assets/images/swahili/1581889470536-467bdbe30cd0.jpg": "cb211aaf3ee4f0bf", "./assets/assets/images/swahili/1582213782179-e0d53f98f2ca.jpg": "e233bda21954cf00", "./assets/assets/images/swahili/1582298538104-fe2e74c27f59.jpg": "1cf3d695387c4335", "./assets/assets/images/swahili/1583162814461-3879bd80fd77.jpg": "f84481a50fe37b1d", "./assets/assets/images/swahili/1583264277168-58ceba4b84e7.jpg": "535b8c7a792fd1b7", "./assets/assets/images/swahili/1586276632510-a680c3db9a10.jpg": "da506a3125670203", "./assets/assets/images/swahili/1586473219010-2ffc57b0d282.jpg": "e6fc1fb96430f8e2", "./assets/assets/images/swahili/1586726370832-3440a511e479.jpg": "0b0966a7bb3c9790", "./assets/assets/images/swahili/1592890288564-76628a30a657.jpg": "e3a3e279776c3379", "./assets/assets/images/swahili/1593100126453-19b562a800c1.jpg": "091be342a9cd2f1b", "./assets/assets/images/swahili/1594383538644-66fcb99ae1ed.jpg": "aef95c4b294896a6", "./assets/assets/images/swahili/1597213669181-6276d2315b55.jpg": "18cf8cd58ac63cc8", "./assets/assets/images/swahili/1600041967514-701d405228c6.jpg": "21bd96ad26d281ef", "./assets/assets/images/swahili/1600603406200-5b2a104684ac.jpg": "78f674c5bbde10f2", "./assets/assets/images/swahili/1612883833766-7930d960e16f.jpg": "7f9b98833b515871", "./assets/assets/images/swahili/1612996860234-f1322906438a.jpg": "cd15145074a7ef3e", "./assets/assets/images/swahili/1618037087830-5e746497905b.jpg": "3aeb7a6559ab5dcb", "./assets/assets/images/swahili/1618886614638-80e3c103d31a.jpg": "28db15d02b9b40b9", "./assets/assets/images/swahili/1619016145369-0ff98d539993.jpg": "1b3fba7cb210ad1b", "./assets/assets/images/swahili/1621273974250-faeb23660cdf.jpg": "2b12c2bef557ac88", "./assets/assets/images/swahili/1622768766607-922825162edc.jpg": "29cff3b2ecf196e2", "./assets/assets/images/swahili/1632144130358-6cfeed023e27.jpg": "288d51bbbc913a31", "./assets/assets/images/swahili/1633092539352-4d458d94cfe4.jpg": "e73824ea0044b174", "./assets/assets/images/swahili/1633613286848-e6f43bbafb8d.jpg": "3efad976afd50001", "./assets/assets/images/swahili/1636320966479-4842be49dd2e.jpg": "5124b92468528c65", "./assets/assets/images/swahili/1636592358465-37c526b978d2.jpg": "f090c9b191dca1de", "./assets/assets/images/swahili/1636987050384-9b079c700f63.jpg": "63ed68a5654acea6", "./assets/assets/images/swahili/1639600281360-2c158cb8391a.jpg": "875ff97cfba3983e", "./assets/assets/images/swahili/1642943392730-ae57c9b77522.jpg": "7b80652d11d94cca", "./assets/assets/images/swahili/1646340621112-dd3c96797887.jpg": "3f7abdb03a687da1", "./assets/assets/images/swahili/1655506207889-4f130f49797f.jpg": "7eb58b2dfb371912", "./assets/assets/images/swahili/1656019838845-757b4200dfd5.jpg": "cfdd411f11bdac50", "./assets/assets/images/swahili/1659352152794-b1cf311f112c.jpg": "e64be63c8bcfb6bf", "./assets/assets/images/swahili/1659924086637-803c92f2dac8.jpg": "222ee0528df4fad1", "./assets/assets/images/swahili/1660489744575-81ab10cf06b7_portrait.jpg": "53fbc0afc70dd936", "./assets/assets/images/swahili/1672266353368-7df4d6d963de.jpg": "1e8ee97d16d237e9", "./assets/assets/images/swahili/1673048297932-ad2caa4a7a59.jpg": "82813ebded743ecd", "./assets/assets/images/swahili/1673515336414-0db19994707f.jpg": "5975eab8b3b69ba8", "./assets/assets/images/swahili/1678923685297-0ade9816275e.jpg": "d5d75ff8895200ac", "./assets/assets/images/swahili/1685031924917-aa16bb9d2c25.jpg": "be4460c433d4089d", "./assets/assets/images/swahili/1687585612416-c7e45dbb27d5.jpg": "ea419c2043750ca1", "./assets/assets/images/swahili/1689143947647-062e1a24bf2d.jpg": "b97080884046f127", "./assets/assets/images/swahili/1690681737765-87873d223aff.jpg": "1c1d3dac5ab35147", "./assets/assets/images/swahili/1691071666279-58adb714d0b8.jpg": "ce1001bcb0ed1ac0", "./assets/assets/images/swahili/1697142985510-86fa2ea314d9.jpg": "f1962d5616995e01", "./assets/assets/images/swahili/1697639659506-ada9b78ae2ae.jpg": "dc1a90f8cd1d6a46", "./assets/assets/images/swahili/1699870225928-f366b1f04679.jpg": "30940ea5684ad68e", "./assets/assets/images/swahili/1702065612691-877a245777ad.jpg": "e3e49835d8777e2e", "./assets/assets/images/swahili/1702065612921-fcf9e698dccc.jpg": "36b7eed4bc71250a", "./assets/assets/images/swahili/1704265586142-db3e17d0dea0.jpg": "b40fb0b7f69bfecc", "./assets/assets/images/swahili/1711871549711-4717086bfab9.jpg": "efbacddebabe5e38", "./assets/assets/images/swahili/1713947501966-34897f21162e.jpg": "81a1c85322212183", "./assets/assets/images/swahili/1718382341267-aef8a9e4ecef.jpg": "349edd93198dcdf7", "./assets/assets/images/swahili/1738739907433-10601360cee3.jpg": "83e9c785ceb80202", "./assets/assets/images/swahili/1758270704286-83476deb3bd1.jpg": "f440ae534cc0caab", "./assets/assets/images/swahili/1758274252296-a63b1d7d4bb8.jpg": "c9a81fb0e406c0c5", "./assets/assets/images/swahili/1758525224242-cdcf50a54d58.jpg": "ec5dfa9012fd2e75", "./assets/assets/images/swahili/1758599543122-fc551c9b4b1c.jpg": "c980a24244679cf7", "./assets/assets/images/swahili/1758599668796-cdd37f4ecb66.jpg": "0dc18bd027a0e6aa", "./assets/assets/images/swahili/1758600432914-2b5f4483c7b8.jpg": "07a2f945a2fe4c72", "./assets/assets/images/swahili/1758600588075-337dfa176a31.jpg": "0fd4324c12573f3c", "./assets/assets/images/swahili/1758600588332-f115280edb2e.jpg": "6e5e4199ca3fb9fd", "./assets/assets/images/swahili/1758686254563-5c5ab338c8b9.jpg": "e7ba4d96271564ce", "./assets/assets/images/swahili/1758691030490-fe1cb6c972ce.jpg": "d82db5c57741e734", "./assets/assets/images/swahili/1758691463384-771db2f192b3.jpg": "656f23dec749836b", "./assets/assets/images/swahili/1758874572647-407688dfd807.jpg": "7032f713538ea46e", "./assets/assets/images/swahili/1759405185577-4ba456d4bdc7.jpg": "6bbd6cc7bd3328b6", "./assets/assets/images/swahili/1760114852784-ec280f0a62e2.jpg": "c1f47f6199025725", "./assets/assets/images/swahili/1760897008085-61143d503763.jpg": "9da69484615e8f98", "./assets/assets/images/swahili/1762328003206-03a1ff078062.jpg": "2e82aa1ce7ae2e0b", "./assets/assets/images/swahili/1762328006833-b1c850d57618.jpg": "3ab4322af138d36c", "./assets/assets/images/swahili/1762328022007-edc2c770d350.jpg": "5eb59b5206e52937", "./assets/assets/images/swahili/1762351934738-2af558786537.jpg": "8df44e2c699cea0f", "./assets/assets/images/swahili/1763727288483-ea361a563531.jpg": "b98dabaf6ceabc1d", "./assets/assets/images/swahili/1764351661329-8d76178e02b3.jpg": "7e8ec9fb3ab15b54", "./assets/assets/images/swahili/1766229034549-0103e6d4a75f.jpg": "05c72d4b5f68d4c9", "./assets/assets/images/swahili/1766970096331-78c8af007a3b.jpg": "c81779e25b6fdcb8", "./assets/assets/images/swahili/1768299582669-430739acc3d9.jpg": "2b605d62218fff23", "./assets/assets/images/swahili/1768751947109-d2a99be1aa9c.jpg": "f1dde9b8e297b2f5", "./assets/assets/images/swahili/1769708046949-108aa733f753.jpg": "1830a03d0a26c77f", "./assets/assets/images/swahili/1771570665615-453f75881df2.jpg": "bbb7263d0ffc0413", "./assets/assets/images/swahili/1774619511446-f2af7584db46.jpg": "9b6d15b85881191c", "./assets/assets/images/swahili/1774674534737-8a5fc71699b8.jpg": "c05e3beab6106149", "./assets/assets/images/swahili/1774797405372-52737eeafc1e.jpg": "9a17c04d13515e96", "./assets/assets/images/swahili/1775163024488-e88e4a71179f.jpg": "c09cfc1fc3d23491", "./assets/assets/images/swahili/1775308519753-e8aee2262bf3.jpg": "5de48747d0ea67d3", "./assets/assets/images/swahili/1776883591149-e93c3027c51f.jpg": "24b64dcc5a447e1a", "./assets/assets/images/swahili/1778342261377-9248c3dd10fd.jpg": "248e5d956b79344b", "./assets/assets/images/swahili/1778502802065-d24cd36b5731.jpg": "46b3094e2512e451", "./assets/assets/images/swahili/1779133558796-c7bf60f22208.jpg": "22117a2585d7a835", "./assets/assets/images/swahili/1780027684177-d297178ea31c.jpg": "392999a984c89113", "./assets/assets/images/swahili/1781935307689-920207af57db.jpg": "00bee4c82ddc30c7", "./assets/assets/news_fonts/AbrilFatface-Regular.ttf": "8c6847c75ae35d0c", "./assets/assets/news_fonts/OldStandard-Bold.ttf": "62043bcac6936cc1", "./assets/assets/news_fonts/OldStandard-Italic.ttf": "e15459ba33dae663", "./assets/assets/news_fonts/OldStandard-Regular.ttf": "5d36040c5873ad77", "./assets/assets/news_fonts/UnifrakturCook-Bold.ttf": "f1f39b8b466277ef", "./assets/assets/sounds/README.md": "7d70514fd92d1ff7", "./assets/assets/sounds/YTMP3GG_YouTube_Kaching-sound-effect-sound-sounds-sounde_Media_a7Vue-A0BOY_007_128k.mp3": "7092bb58b64971d5", "./assets/assets/sounds/income_cash.mp3": "7092bb58b64971d5", "./assets/assets/twemoji/1f1f9-1f1ff.png": "82728ba56ae88cd8", "./assets/assets/twemoji/1f1fa-1f1f8.png": "8fc9e2f18b560223", "./assets/assets/twemoji/1f30a.png": "ceca0789a6e5352b", "./assets/assets/twemoji/1f319.png": "582f426ea93b0594", "./assets/assets/twemoji/1f31e.png": "ab6e013f80110ad4", "./assets/assets/twemoji/1f33f.png": "3d7ba4d0f9dfa0e2", "./assets/assets/twemoji/1f347.png": "f7b6ea8263815300", "./assets/assets/twemoji/1f34a.png": "3f5caead6872798d", "./assets/assets/twemoji/1f34f.png": "e4a72c6f0188d9e9", "./assets/assets/twemoji/1f352.png": "db99e6137ae2d006", "./assets/assets/twemoji/1f36b.png": "99b0e6c94d813eaa", "./assets/assets/twemoji/1f36c.png": "07e2dabf0a6ee7a6", "./assets/assets/twemoji/1f373.png": "bca52699c7f46c4f", "./assets/assets/twemoji/1f381.png": "55898fa8b8df2b1c", "./assets/assets/twemoji/1f389.png": "bdb5d64480323253", "./assets/assets/twemoji/1f393.png": "ceb0f758fa96aa54", "./assets/assets/twemoji/1f3a8.png": "489face11257c208", "./assets/assets/twemoji/1f3ae.png": "e6da782937b09c73", "./assets/assets/twemoji/1f3af.png": "06b300d40615d296", "./assets/assets/twemoji/1f3b5.png": "509cd03904e64d1a", "./assets/assets/twemoji/1f3e0.png": "4b45c9c4ca608fe6", "./assets/assets/twemoji/1f3e2.png": "49ee96e053f63337", "./assets/assets/twemoji/1f42c.png": "bb41830430ddd01c", "./assets/assets/twemoji/1f44d.png": "4a32750fe064ddf8", "./assets/assets/twemoji/1f44f.png": "1f0833639cc6fbb9", "./assets/assets/twemoji/1f464.png": "a21ac1e46d02b168", "./assets/assets/twemoji/1f468-1f3fb-200d-1f9b1.png": "a36b3c9d0e06701a", "./assets/assets/twemoji/1f468-1f3fb.png": "79bb75dfbcb56e1e", "./assets/assets/twemoji/1f468-1f3fd-200d-1f393.png": "4b2e51d3837f3470", "./assets/assets/twemoji/1f468-1f3fd-200d-1f4bc.png": "f055b502e4c671c2", "./assets/assets/twemoji/1f468-1f3fd-200d-1f9b1.png": "6aac46ae418ca14d", "./assets/assets/twemoji/1f468-1f3fd.png": "8be6d25475a33741", "./assets/assets/twemoji/1f468-1f3fe-200d-1f393.png": "faf324b6573d1ddb", "./assets/assets/twemoji/1f468-1f3fe-200d-1f4bc.png": "f84e6ab150e87c8d", "./assets/assets/twemoji/1f468-1f3fe-200d-1f9b1.png": "0fc9a89b1938c43a", "./assets/assets/twemoji/1f468-1f3fe-200d-1f9b2.png": "0365f0e88919e661", "./assets/assets/twemoji/1f468-1f3fe.png": "2828f4b7d4a3b358", "./assets/assets/twemoji/1f468-1f3ff-200d-1f4bc.png": "eea0f282675d8714", "./assets/assets/twemoji/1f468-1f3ff-200d-1f9b1.png": "e7315ba3f328d4b2", "./assets/assets/twemoji/1f468-1f3ff-200d-1f9b2.png": "4a1eb6e4647a238e", "./assets/assets/twemoji/1f468-1f3ff.png": "255c7b0f74e9993b", "./assets/assets/twemoji/1f468-200d-1f393.png": "1b01872f4909954c", "./assets/assets/twemoji/1f468-200d-1f4bc.png": "d2b44b09eb1e78af", "./assets/assets/twemoji/1f468.png": "ddd49436665b49b1", "./assets/assets/twemoji/1f469-1f3fb-200d-1f393.png": "a15fba7c6865f4cc", "./assets/assets/twemoji/1f469-1f3fb-200d-1f9b1.png": "915bbce6d47ab4fc", "./assets/assets/twemoji/1f469-1f3fb.png": "ddfe84ec2eec6b6f", "./assets/assets/twemoji/1f469-1f3fd-200d-1f393.png": "50c6484981bbd19f", "./assets/assets/twemoji/1f469-1f3fd-200d-1f4bc.png": "71988374b3f54f5d", "./assets/assets/twemoji/1f469-1f3fd-200d-1f9b1.png": "ea66abb1f617a509", "./assets/assets/twemoji/1f469-1f3fd.png": "f73cada71f99c6ee", "./assets/assets/twemoji/1f469-1f3fe-200d-1f393.png": "ed48537e5ec2a52c", "./assets/assets/twemoji/1f469-1f3fe-200d-1f4bc.png": "f3ce85c559867f44", "./assets/assets/twemoji/1f469-1f3fe-200d-1f9b1.png": "141499ca435baf72", "./assets/assets/twemoji/1f469-1f3fe-200d-1f9b3.png": "9197fe0c7e7d3e8b", "./assets/assets/twemoji/1f469-1f3fe.png": "50d6ad17ef4da7a8", "./assets/assets/twemoji/1f469-1f3ff-200d-1f4bc.png": "1b269128c98fb5b7", "./assets/assets/twemoji/1f469-1f3ff-200d-1f9b1.png": "c3c6c80bb8cdcf88", "./assets/assets/twemoji/1f469-1f3ff-200d-1f9b3.png": "018bc682f1820455", "./assets/assets/twemoji/1f469-1f3ff.png": "9c6f1693c937b37f", "./assets/assets/twemoji/1f469-200d-1f393.png": "bc4ceed0b95c0222", "./assets/assets/twemoji/1f469-200d-1f4bc.png": "5910e54508c02d2d", "./assets/assets/twemoji/1f469.png": "837643d3c7072b92", "./assets/assets/twemoji/1f499.png": "467cc46fff85ec3a", "./assets/assets/twemoji/1f4a1.png": "cddcb146e40e2855", "./assets/assets/twemoji/1f4aa.png": "2717083cb41fc015", "./assets/assets/twemoji/1f4b0.png": "7440490f6d702efa", "./assets/assets/twemoji/1f4bc.png": "fc251e20f90bb724", "./assets/assets/twemoji/1f4c5.png": "c22d7ab7235506c9", "./assets/assets/twemoji/1f4c8.png": "2b5373f624e6a849", "./assets/assets/twemoji/1f4ca.png": "4a56f162dc667d8c", "./assets/assets/twemoji/1f4cb.png": "57826d2f0468e14e", "./assets/assets/twemoji/1f4cc.png": "730a5af2c5b23401", "./assets/assets/twemoji/1f4ce.png": "080891cecd392202", "./assets/assets/twemoji/1f4da.png": "9779d6223243e1e3", "./assets/assets/twemoji/1f4dd.png": "a837460f7144f3e1", "./assets/assets/twemoji/1f4de.png": "5d28428f24ad7910", "./assets/assets/twemoji/1f50d.png": "0992646745fa597f", "./assets/assets/twemoji/1f525.png": "4862859d393b2a68", "./assets/assets/twemoji/1f52c.png": "af904e72dbe90088", "./assets/assets/twemoji/1f58c.png": "bc71bc037caffdb2", "./assets/assets/twemoji/1f5a4.png": "2d8d0f6b741fc113", "./assets/assets/twemoji/1f5c2.png": "b67d33b35e09dbf4", "./assets/assets/twemoji/1f600.png": "e78e35bed487156d", "./assets/assets/twemoji/1f60a.png": "f3dc4d5d73a22e9f", "./assets/assets/twemoji/1f60d.png": "7df0abbe6af9d220", "./assets/assets/twemoji/1f60e.png": "88ada2fb42252591", "./assets/assets/twemoji/1f634.png": "e05fc242525b92fd", "./assets/assets/twemoji/1f642.png": "39a7d733bfd9e00e", "./assets/assets/twemoji/1f64c.png": "6f8a3a69b6068769", "./assets/assets/twemoji/1f680.png": "ba144bc65dc6e3c7", "./assets/assets/twemoji/1f6d2.png": "61822a6c767d93fe", "./assets/assets/twemoji/1f914.png": "5fb4adfc0cd59bed", "./assets/assets/twemoji/1f91d.png": "93f2145274471188", "./assets/assets/twemoji/1f929.png": "121fe41ff17c002c", "./assets/assets/twemoji/1f973.png": "a400b6f9bc215e20", "./assets/assets/twemoji/1f9d4-200d-2642-fe0f.png": "82e2545609a232fe", "./assets/assets/twemoji/1f9d4.png": "4159eef9389e436a", "./assets/assets/twemoji/1f9d5.png": "56098b3830913c12", "./assets/assets/twemoji/1fa75.png": "e09ecd762b11181e", "./assets/assets/twemoji/1faa3.png": "51853fd31cce3cb9", "./assets/assets/twemoji/2139.png": "a0b183f97a68e698", "./assets/assets/twemoji/23f0.png": "0bfac4d5a95007e8", "./assets/assets/twemoji/2615.png": "c8cfa4ddc8ead6a5", "./assets/assets/twemoji/26a0.png": "67bc03a2a5af4886", "./assets/assets/twemoji/26a1.png": "78140684f45698ca", "./assets/assets/twemoji/26c4.png": "4a8ba8e3051d3c6f", "./assets/assets/twemoji/2705.png": "ef35182d3e35a35f", "./assets/assets/twemoji/2708.png": "4092b23b2885d030", "./assets/assets/twemoji/2709.png": "7b85299402563352", "./assets/assets/twemoji/2728.png": "f0b83452d2b81550", "./assets/assets/twemoji/2764.png": "d881b7fa7626554b", "./assets/assets/twemoji/2b50.png": "7db170b9ef39da80", "./assets/assets/video_studio/yt_news_desk.png": "febdf8539bea3565", "./assets/assets/video_studio/yt_studio_curved.png": "695a3919a3720a43", "./assets/fonts/MaterialIcons-Regular.otf": "d38006c800e3da06", "./assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2988b9d3f047f158", "./assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af971", "./assets/shaders/ink_sparkle.frag": "2815c3cf1e7af2d8", "./assets/shaders/stretch_effect.frag": "f0ab847ccb98001d", "./canvaskit/canvaskit.js": "7dadf4a04a0349ef", "./canvaskit/canvaskit.wasm": "b4751756f5a70ea5", "./canvaskit/chromium/canvaskit.js": "ceafeb10aaadee4c", "./canvaskit/chromium/canvaskit.wasm": "687faaed6161619a", "./canvaskit/skwasm.js": "6f2142db617183a0", "./canvaskit/skwasm.wasm": "1193e7e1b1f1f90f", "./canvaskit/skwasm_heavy.js": "28dde2a02fe4adb3", "./canvaskit/skwasm_heavy.wasm": "d4c6412e42d11404", "./canvaskit/webparagraph/canvaskit.js": "d1037ee4a7e59f39", "./canvaskit/webparagraph/canvaskit.wasm": "0a6920d986be45bf", "./canvaskit/wimp.js": "6616a3744adf8dff", "./canvaskit/wimp.wasm": "c55b38d45ae444f4", "./favicon.png": "a3ec9f47956e32ba", "./flutter.js": "755336c430d7f9f9", "./flutter.js.map": "dc4c394199e37bc6", "./flutter_bootstrap.js": "b99fe12e193617eb", "./icons/Icon-192.png": "8e567229b2f2936d", "./icons/Icon-512.png": "e1d50c8edfacd3ff", "./icons/Icon-maskable-192.png": "8e567229b2f2936d", "./icons/Icon-maskable-512.png": "e1d50c8edfacd3ff", "./icons/apple-touch-icon-180.png": "183e2b89f97418af", "./index.html": "dac1bead7096d3f1", "./main.dart.js": "48fb18cf6e328e0b", "./main.dart.js_1.part.js": "c76e9e7a20683a3b", "./main.dart.js_10.part.js": "f2dc7f6b07d14e69", "./main.dart.js_104.part.js": "515214efe1fdc305", "./main.dart.js_105.part.js": "0d3d1e8f21c1012f", "./main.dart.js_106.part.js": "1dcf37824fe27bd4", "./main.dart.js_107.part.js": "725e0bee2757f292", "./main.dart.js_108.part.js": "7ec146bfff03cf6e", "./main.dart.js_11.part.js": "51796005d47e5f42", "./main.dart.js_112.part.js": "a954fca7bf149ede", "./main.dart.js_113.part.js": "872da6781d1fee8a", "./main.dart.js_114.part.js": "0491f476dde38e1b", "./main.dart.js_115.part.js": "eac1ac874e9b6624", "./main.dart.js_12.part.js": "bb9766642fc6eaaa", "./main.dart.js_127.part.js": "501b6f595742b508", "./main.dart.js_128.part.js": "f9da04065e192a81", "./main.dart.js_13.part.js": "26015db2ae9fbd5c", "./main.dart.js_130.part.js": "8b4274fa7c4b59d1", "./main.dart.js_131.part.js": "e60cb4abab130500", "./main.dart.js_132.part.js": "6ea17d932a91d0af", "./main.dart.js_133.part.js": "d0ae8fa9efc97e80", "./main.dart.js_134.part.js": "fa19c0888c36f7b0", "./main.dart.js_135.part.js": "0fb4a4f94022fd03", "./main.dart.js_136.part.js": "5c201de91b305c94", "./main.dart.js_137.part.js": "00fe3ea8becc2238", "./main.dart.js_138.part.js": "3cff8c91afc1db3c", "./main.dart.js_139.part.js": "aef86fdbce8f1cbf", "./main.dart.js_140.part.js": "bcb4b5ad751e9cfd", "./main.dart.js_141.part.js": "948a8d1889587127", "./main.dart.js_142.part.js": "756c4aeba9df28f8", "./main.dart.js_145.part.js": "b488c0a023d9c01c", "./main.dart.js_148.part.js": "58c9e09e024a13c2", "./main.dart.js_154.part.js": "ceaa78d128b92d0a", "./main.dart.js_155.part.js": "434e2afbe164d416", "./main.dart.js_156.part.js": "c552ab5c7bbc1fcd", "./main.dart.js_16.part.js": "a7d8db40c582ba34", "./main.dart.js_162.part.js": "e54d87fb8f1fb20a", "./main.dart.js_163.part.js": "0f3a249f3902b8ea", "./main.dart.js_164.part.js": "62cacb92366bfab6", "./main.dart.js_165.part.js": "8afdbeb922c5671f", "./main.dart.js_166.part.js": "ffc7ff53af66046a", "./main.dart.js_17.part.js": "c6163797a1e75752", "./main.dart.js_171.part.js": "09e200599dd358a4", "./main.dart.js_173.part.js": "4e10fa451b496ba6", "./main.dart.js_175.part.js": "f7ae6208d6eed1af", "./main.dart.js_176.part.js": "2c20dc699887ebc0", "./main.dart.js_178.part.js": "c9ef29a9c8e47491", "./main.dart.js_179.part.js": "33a604d367e5c9ae", "./main.dart.js_186.part.js": "37dc03a76ac7c0ee", "./main.dart.js_187.part.js": "f9ec11d6ca49c1ae", "./main.dart.js_190.part.js": "54b4ea597ded82f1", "./main.dart.js_191.part.js": "93d727cff59657b8", "./main.dart.js_192.part.js": "57cd2e88c1112901", "./main.dart.js_194.part.js": "35c99796e36788a6", "./main.dart.js_195.part.js": "06307c7a29706e72", "./main.dart.js_196.part.js": "7a8ad7175ad55f08", "./main.dart.js_197.part.js": "191dc51b83ccb5c8", "./main.dart.js_2.part.js": "6dee6379a618d2c3", "./main.dart.js_201.part.js": "57df6f56e83b1249", "./main.dart.js_202.part.js": "55092b97d6b8a576", "./main.dart.js_203.part.js": "3b31d04e8e0a2ca8", "./main.dart.js_205.part.js": "92bc9035791455cd", "./main.dart.js_21.part.js": "abae5e365c5d43fb", "./main.dart.js_210.part.js": "4c6e18db123bc8df", "./main.dart.js_214.part.js": "5972c3b4a9579374", "./main.dart.js_215.part.js": "6a125154ff0a20c1", "./main.dart.js_217.part.js": "6350fff16cdf90d2", "./main.dart.js_22.part.js": "48b0981d4f174680", "./main.dart.js_221.part.js": "c6c4a0ce881b9c73", "./main.dart.js_223.part.js": "ff07c9a16d15e62a", "./main.dart.js_224.part.js": "d955cd30e9e7eb39", "./main.dart.js_225.part.js": "751e34a4472c5a84", "./main.dart.js_226.part.js": "6f9a1a8d167cbdff", "./main.dart.js_227.part.js": "8e9b9bcde9072893", "./main.dart.js_231.part.js": "be973a28b15bfe97", "./main.dart.js_232.part.js": "1d0b502078ce46b9", "./main.dart.js_233.part.js": "1b01e14bb0897256", "./main.dart.js_236.part.js": "985bae83cf5de9ce", "./main.dart.js_237.part.js": "e392743e93cb22b9", "./main.dart.js_238.part.js": "0d8f33ac3742c3af", "./main.dart.js_241.part.js": "2320c2733c96c88d", "./main.dart.js_242.part.js": "607d2401623f3109", "./main.dart.js_243.part.js": "a597e3410a4b3529", "./main.dart.js_244.part.js": "f19271ebc3ec51bf", "./main.dart.js_245.part.js": "50126b31e1779dee", "./main.dart.js_246.part.js": "d0f04fda9011d81e", "./main.dart.js_247.part.js": "34e26d9e5744afba", "./main.dart.js_248.part.js": "08b92b47db9a43d3", "./main.dart.js_249.part.js": "d705da094f6d0667", "./main.dart.js_25.part.js": "dcccb86422b6b63d", "./main.dart.js_251.part.js": "2fd916576e132a8a", "./main.dart.js_252.part.js": "dead797eace9cb94", "./main.dart.js_253.part.js": "90109f8fc5b2410c", "./main.dart.js_254.part.js": "134f03c481a07260", "./main.dart.js_258.part.js": "b0ca7cb058c57ced", "./main.dart.js_259.part.js": "e340fa26b2c1ec59", "./main.dart.js_260.part.js": "ee6e7d53f51c6f05", "./main.dart.js_261.part.js": "78a8e2af31ed8f80", "./main.dart.js_263.part.js": "1ab14f983b824556", "./main.dart.js_264.part.js": "0e66e33cb5ad65d3", "./main.dart.js_266.part.js": "9d60c1c7ee21af01", "./main.dart.js_269.part.js": "90e17546e8db6b2d", "./main.dart.js_270.part.js": "716360d69437ae62", "./main.dart.js_271.part.js": "7a9e65291fcd87d7", "./main.dart.js_272.part.js": "00e8036b5e2bd77b", "./main.dart.js_273.part.js": "b6438bb19e691ef3", "./main.dart.js_274.part.js": "eb11ce6555b3804e", "./main.dart.js_275.part.js": "1147e402c11a8ae6", "./main.dart.js_276.part.js": "e03497cd856db38f", "./main.dart.js_277.part.js": "21e5d596089235bb", "./main.dart.js_278.part.js": "3efb6c376d708e44", "./main.dart.js_279.part.js": "e526d251c8f80af2", "./main.dart.js_283.part.js": "ffa0289b15ecb1af", "./main.dart.js_285.part.js": "771cd390c5a1b02b", "./main.dart.js_287.part.js": "3f3560465a07053c", "./main.dart.js_288.part.js": "f5165a79fd404bd0", "./main.dart.js_289.part.js": "b95f8b5c5f52a215", "./main.dart.js_293.part.js": "c145990b1be7b41b", "./main.dart.js_297.part.js": "7889f4ff4147d95b", "./main.dart.js_298.part.js": "ab116c904811a9e0", "./main.dart.js_299.part.js": "e7c887d3f41e6fb9", "./main.dart.js_301.part.js": "e4f5e53c5ad2ded6", "./main.dart.js_303.part.js": "2a1782aac378ed75", "./main.dart.js_308.part.js": "217193134b13eb9f", "./main.dart.js_309.part.js": "646e6cf4a0a6a253", "./main.dart.js_310.part.js": "9935574b66fb358d", "./main.dart.js_311.part.js": "692f16729a9a17e7", "./main.dart.js_312.part.js": "b94ec88c9520c93e", "./main.dart.js_313.part.js": "68d9e23fdaec7560", "./main.dart.js_315.part.js": "42e26076cd7c6f81", "./main.dart.js_316.part.js": "ec31d74fd6314e92", "./main.dart.js_317.part.js": "1848565241e5cb35", "./main.dart.js_318.part.js": "a829588e5df3c17a", "./main.dart.js_320.part.js": "261c75f643011299", "./main.dart.js_321.part.js": "f319146233f2d95d", "./main.dart.js_322.part.js": "eb51b4a72f2056f2", "./main.dart.js_324.part.js": "7933baacc08a9d69", "./main.dart.js_326.part.js": "5eb2f0f07a94bc6f", "./main.dart.js_329.part.js": "8371be55dde35717", "./main.dart.js_33.part.js": "43480ab0670fcef2", "./main.dart.js_330.part.js": "389ea1e2335306aa", "./main.dart.js_331.part.js": "f98c84631a22c7d4", "./main.dart.js_333.part.js": "5c55492dddebb686", "./main.dart.js_334.part.js": "7be79f690bc2c2a3", "./main.dart.js_335.part.js": "d23185c6b2b12cd0", "./main.dart.js_336.part.js": "9c1af5fd86b10783", "./main.dart.js_337.part.js": "8d7b0fd6d889eaf3", "./main.dart.js_338.part.js": "281f0685197f2f31", "./main.dart.js_339.part.js": "c65db0bec5d8f5a9", "./main.dart.js_34.part.js": "e0e568f2655b1df2", "./main.dart.js_340.part.js": "7fd20ef832f86d44", "./main.dart.js_342.part.js": "2482e631c69c4706", "./main.dart.js_345.part.js": "54384faf6dc84f18", "./main.dart.js_347.part.js": "0d615dcf63e5e817", "./main.dart.js_348.part.js": "6872da54988d1f9b", "./main.dart.js_349.part.js": "100dfd08ed082699", "./main.dart.js_35.part.js": "8355b8ebe90d5e3a", "./main.dart.js_350.part.js": "680ef574be9e293d", "./main.dart.js_351.part.js": "28e741248344280c", "./main.dart.js_352.part.js": "f7f52c06b55a2728", "./main.dart.js_354.part.js": "403f7a50a6922a65", "./main.dart.js_355.part.js": "a5934c43d0377e04", "./main.dart.js_356.part.js": "e261264feafb8467", "./main.dart.js_357.part.js": "36d38ab8fbd2fe62", "./main.dart.js_358.part.js": "31fa864233dffc54", "./main.dart.js_36.part.js": "0b866e2dc593042e", "./main.dart.js_364.part.js": "565a1ff57e7b025d", "./main.dart.js_365.part.js": "b39b4149d5ca520b", "./main.dart.js_366.part.js": "9b0036030e903b4e", "./main.dart.js_367.part.js": "d7723a26f50577a1", "./main.dart.js_368.part.js": "fe8bed06c9ab9ead", "./main.dart.js_37.part.js": "1468ac3840f4ba28", "./main.dart.js_370.part.js": "2e02c0a76b656d97", "./main.dart.js_371.part.js": "3844e2d5f7610452", "./main.dart.js_373.part.js": "54451682e29349a0", "./main.dart.js_374.part.js": "12a48121634ea952", "./main.dart.js_375.part.js": "b4309759d927fdb2", "./main.dart.js_379.part.js": "8808321215c24090", "./main.dart.js_38.part.js": "d008c690963e3326", "./main.dart.js_382.part.js": "a3e32dbfcbcda51d", "./main.dart.js_384.part.js": "04d9304a395dfb49", "./main.dart.js_385.part.js": "d1e6fb15ccbcf852", "./main.dart.js_387.part.js": "cab96e583368b7b9", "./main.dart.js_390.part.js": "f0b83e91c7a9a658", "./main.dart.js_395.part.js": "38b390bf349fc928", "./main.dart.js_396.part.js": "323a15212efd517b", "./main.dart.js_397.part.js": "bb4a409ec21337d2", "./main.dart.js_398.part.js": "8cf4b6f7797ae130", "./main.dart.js_4.part.js": "92c3f1495e0a06d9", "./main.dart.js_40.part.js": "1fa61028ae5a251e", "./main.dart.js_400.part.js": "6dd01cefa376faf1", "./main.dart.js_401.part.js": "cf57603e75df5157", "./main.dart.js_402.part.js": "c2fbe757b900629a", "./main.dart.js_403.part.js": "17da80c27c3c9d18", "./main.dart.js_404.part.js": "d8627b5a5ff14257", "./main.dart.js_405.part.js": "d23246e0bea58855", "./main.dart.js_406.part.js": "adb46427a72ffd19", "./main.dart.js_407.part.js": "dbf40e8433533860", "./main.dart.js_408.part.js": "487cf2c965499d34", "./main.dart.js_409.part.js": "76591f0839e60bc0", "./main.dart.js_41.part.js": "840b65c174884d01", "./main.dart.js_410.part.js": "d071e59e27444e2a", "./main.dart.js_413.part.js": "5efedb135c22f4ce", "./main.dart.js_415.part.js": "0729d1b98914a47d", "./main.dart.js_416.part.js": "cb08bb04aad7ba16", "./main.dart.js_417.part.js": "2c76a2a45fcbeabc", "./main.dart.js_418.part.js": "bddd5c9e5e4fe731", "./main.dart.js_419.part.js": "76e045feb2395c93", "./main.dart.js_420.part.js": "98083e8562d82061", "./main.dart.js_423.part.js": "3b2b3f33dd5f09ba", "./main.dart.js_425.part.js": "5d37b8140c2343fa", "./main.dart.js_426.part.js": "177efcf9b63c2ed6", "./main.dart.js_428.part.js": "9b6682109a8970e2", "./main.dart.js_430.part.js": "bf8038a9ca87bb06", "./main.dart.js_431.part.js": "28f455c1b69cdbea", "./main.dart.js_432.part.js": "88e6413636ead02f", "./main.dart.js_433.part.js": "2cc652b2c6e1318f", "./main.dart.js_434.part.js": "23107c6d0729c0d1", "./main.dart.js_435.part.js": "42bbef2e4adc91c9", "./main.dart.js_437.part.js": "677f75ef71befcbb", "./main.dart.js_438.part.js": "fcbc5420eb68bbd9", "./main.dart.js_439.part.js": "5073f6a736960160", "./main.dart.js_44.part.js": "b86839d07e44093f", "./main.dart.js_443.part.js": "bc40c607adb2a040", "./main.dart.js_444.part.js": "96c569c3f44d27ab", "./main.dart.js_445.part.js": "37310bd7ec13d142", "./main.dart.js_446.part.js": "da5746fc1db4d25a", "./main.dart.js_448.part.js": "27aa495b808b8d61", "./main.dart.js_449.part.js": "5adb2303cd90d7fb", "./main.dart.js_450.part.js": "757525edc92d2a0b", "./main.dart.js_454.part.js": "76af2383cda45a62", "./main.dart.js_456.part.js": "44e1e57c0a08a816", "./main.dart.js_460.part.js": "fd9958cbcd24c104", "./main.dart.js_461.part.js": "3e27c0f0b186be59", "./main.dart.js_462.part.js": "a638a55d09e623cc", "./main.dart.js_463.part.js": "6325491b992dcee0", "./main.dart.js_464.part.js": "3166d5afcdae437c", "./main.dart.js_465.part.js": "bc0f39492534e5c0", "./main.dart.js_466.part.js": "26bd97f77774410d", "./main.dart.js_467.part.js": "4345c9f90caad061", "./main.dart.js_468.part.js": "80ec52ba88a73a47", "./main.dart.js_469.part.js": "877fc43d4c1562db", "./main.dart.js_470.part.js": "e62eb0c6b980c439", "./main.dart.js_471.part.js": "df8a50d75965f033", "./main.dart.js_472.part.js": "32e20a586e500544", "./main.dart.js_473.part.js": "dbc4faf0cb499d0a", "./main.dart.js_474.part.js": "ceeae33bfe0f33bb", "./main.dart.js_475.part.js": "8c1aee88ffa54272", "./main.dart.js_476.part.js": "29fb372cc1e6b873", "./main.dart.js_477.part.js": "4c40b9cb56a7ac0e", "./main.dart.js_479.part.js": "6e0993593ab571bb", "./main.dart.js_480.part.js": "4f39e2d13259e186", "./main.dart.js_482.part.js": "86bca7a8ab8629a1", "./main.dart.js_486.part.js": "0cdbcb95f268e639", "./main.dart.js_487.part.js": "5ea46dd869f7d812", "./main.dart.js_489.part.js": "4853298845bc106c", "./main.dart.js_49.part.js": "07934c46a2455414", "./main.dart.js_490.part.js": "9ec64e6ecaf90b02", "./main.dart.js_491.part.js": "4c07b9826e8c54c6", "./main.dart.js_492.part.js": "f6bf1f189543992e", "./main.dart.js_493.part.js": "430d568c318289d3", "./main.dart.js_499.part.js": "c23d646a8d4e8ac1", "./main.dart.js_50.part.js": "3823ad70b71eac03", "./main.dart.js_500.part.js": "c8f9099c1bf6f9e0", "./main.dart.js_501.part.js": "4caed2247aeb422b", "./main.dart.js_502.part.js": "b653fe83548b2411", "./main.dart.js_503.part.js": "b9ab9020c19dd0ca", "./main.dart.js_504.part.js": "0a47acd492aee52c", "./main.dart.js_505.part.js": "7f664c35fc901259", "./main.dart.js_506.part.js": "856ab7be2580fe0b", "./main.dart.js_507.part.js": "ca3c8bdaffa7392f", "./main.dart.js_509.part.js": "eb4180a007e3f34f", "./main.dart.js_510.part.js": "cb21dfd6544e02cf", "./main.dart.js_511.part.js": "e367cf18869b946e", "./main.dart.js_512.part.js": "01666cff82e8c71a", "./main.dart.js_513.part.js": "cc8203a106bc9829", "./main.dart.js_514.part.js": "896e6d43b36107a4", "./main.dart.js_515.part.js": "a3d30a723f9f5e39", "./main.dart.js_516.part.js": "061030f2c542efbb", "./main.dart.js_523.part.js": "523197474c1e5274", "./main.dart.js_524.part.js": "8f1f334d84271e5f", "./main.dart.js_525.part.js": "75726c16fae6204a", "./main.dart.js_526.part.js": "08f7858f3b035115", "./main.dart.js_527.part.js": "e4dc08b47600d391", "./main.dart.js_528.part.js": "ee54392d3b484949", "./main.dart.js_53.part.js": "cf8de0fe230a58a2", "./main.dart.js_530.part.js": "cfcf97b1f20287c0", "./main.dart.js_533.part.js": "7d40a4492185570a", "./main.dart.js_534.part.js": "82cfc56094e61af7", "./main.dart.js_535.part.js": "2790750d8b26ff00", "./main.dart.js_536.part.js": "abf64fdaec0072b0", "./main.dart.js_537.part.js": "569aafc2f6ad4c60", "./main.dart.js_538.part.js": "395e97aac3a8f8a9", "./main.dart.js_544.part.js": "e5a4959c0c880ab9", "./main.dart.js_546.part.js": "f9405db48364d0af", "./main.dart.js_547.part.js": "46912ec69ffcf8a3", "./main.dart.js_549.part.js": "baf0d280b7b46b41", "./main.dart.js_55.part.js": "6fafdb20a3ddf6d9", "./main.dart.js_550.part.js": "ee8a7c7471974d64", "./main.dart.js_551.part.js": "fa9db59ac967d075", "./main.dart.js_553.part.js": "59b9959f6284bba2", "./main.dart.js_554.part.js": "aae6042cc4ad6da4", "./main.dart.js_555.part.js": "672b25e19c445f4d", "./main.dart.js_556.part.js": "58b6de530cceac18", "./main.dart.js_557.part.js": "23367b153b8aad39", "./main.dart.js_56.part.js": "4222efe17c7c2ad4", "./main.dart.js_57.part.js": "c908b9dd0e017fb3", "./main.dart.js_58.part.js": "6b404756dbf86c38", "./main.dart.js_59.part.js": "a7b6ef7031a94836", "./main.dart.js_6.part.js": "57224b92f87e11b8", "./main.dart.js_60.part.js": "45776bbfb1ccaaf6", "./main.dart.js_61.part.js": "86fd479700d11cbd", "./main.dart.js_62.part.js": "1ee352c266e2afb9", "./main.dart.js_65.part.js": "25f2c418965742f2", "./main.dart.js_66.part.js": "83d1e442c069fd11", "./main.dart.js_67.part.js": "dc2f03218f0b9cbe", "./main.dart.js_73.part.js": "ecdd706b26557a75", "./main.dart.js_81.part.js": "1d51003378c7d2d5", "./main.dart.js_87.part.js": "a59595dc35fc647f", "./main.dart.js_92.part.js": "57e6cf1733f8d0a1", "./main.dart.js_95.part.js": "5096cf88593d2878", "./main.dart.js_96.part.js": "ac1ba84fc5643f58", "./main.dart.js_97.part.js": "3657dba0dc186308", "./main.dart.js_99.part.js": "52faae5e1b1bb426", "./manifest.json": "1eb9129f25c3d832", "./ngmy_studio_fast_export.js": "e7a2704358c4c060", "./ngmy_voice_capture.js": "97db5caa6f03d506", "./og-share.png": "e1d50c8edfacd3ff", "./version.json": "b660e88ae036c057", "./": "dac1bead7096d3f1"};
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
  // The advisors' own photos (2.3 MB), so every advisor shows their real face offline from the very first visit and
  // never falls back to an older picture when the phone has no internet.
  './assets/assets/images/advisors/bible_study_teacher_f.jpg',
  './assets/assets/images/advisors/bible_study_teacher_m.jpg',
  './assets/assets/images/advisors/career_coach_m.jpg',
  './assets/assets/images/advisors/companion_f.jpg',
  './assets/assets/images/advisors/companion_m.jpg',
  './assets/assets/images/advisors/doctor_f.jpg',
  './assets/assets/images/advisors/doctor_m.jpg',
  './assets/assets/images/advisors/financial_advisor_f.jpg',
  './assets/assets/images/advisors/financial_advisor_m.jpg',
  './assets/assets/images/advisors/fitness_coach_m.jpg',
  './assets/assets/images/advisors/lawyer_f.jpg',
  './assets/assets/images/advisors/lawyer_m.jpg',
  './assets/assets/images/advisors/marriage_advisor_f.jpg',
  './assets/assets/images/advisors/marriage_advisor_m.jpg',
  './assets/assets/images/advisors/mshauri_m.jpg',
  './assets/assets/images/advisors/pastor_m.jpg',
  './assets/assets/images/advisors/person_alex_remy.jpg',
  './assets/assets/images/advisors/person_alisa_john.jpg',
  './assets/assets/images/advisors/person_anna_amuri.jpg',
  './assets/assets/images/advisors/person_chloe_mitchell.jpg',
  './assets/assets/images/advisors/person_grace_anderson.jpg',
  './assets/assets/images/advisors/person_isaiah_john.jpg',
  './assets/assets/images/advisors/person_jeremiah_nesto.jpg',
  './assets/assets/images/advisors/person_mina.jpg',
  './assets/assets/images/advisors/person_miriam.jpg',
  './assets/assets/images/advisors/person_nia_robertson.jpg',
  './assets/assets/images/advisors/person_olivia_bennett.jpg',
  './assets/assets/images/advisors/person_sophie_morgan.jpg',
  './assets/assets/images/advisors/person_susie.jpg',
  './assets/assets/images/advisors/person_suzana_mbuto.jpg',
  './assets/assets/images/advisors/person_suzana_vanessa.jpg',
  './assets/assets/images/advisors/teacher_f.jpg',
  './assets/assets/images/advisors/teacher_m.jpg',
  './assets/assets/images/advisors/therapist_f.jpg',
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
    // 'no-cache' asks the server whether the copy the browser just downloaded for the app is still current, and
    // reuses it when it is ('reload' downloaded main.dart.js, the engine and fonts a second time on every first visit).
    const res = await fetch(new Request(url, { cache: 'no-cache' }));
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
        // Network-first for HTML when online so deploy checks and new builds reach PWAs — but never waiting long: a
        // weak or blocked connection (Wi-Fi with no internet) used to hold the Loading NGMY screen until it gave up.
        // After 2.5 seconds the copy kept on the phone opens, and the new page is still saved for the next start.
        if (self.navigator.onLine) {
          try {
            const netP = fetch(event.request, { cache: 'no-store' });
            const kept = await offlineDocumentAnyCache();
            let net;
            if (kept) {
              net = await Promise.race([
                netP.catch(() => null),
                new Promise((r) => setTimeout(() => r('slow'), 2500)),
              ]);
              if (net === 'slow' || !net) {
                event.waitUntil(
                  netP
                    .then((res) => {
                      if (res && res.status === 200) {
                        cache.put(event.request, res.clone());
                        return cacheAbsoluteShell(cache);
                      }
                    })
                    .catch(() => {}),
                );
                return kept;
              }
            } else {
              net = await netP;
            }
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
