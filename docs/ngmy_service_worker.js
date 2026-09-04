/* NGMY PWA — cache-first shell so the app opens offline after one online visit. */
'use strict';

const CACHE_PREFIX = 'ngmy-pwa-';
function ngmySwBasePath() {
  var p = self.location.pathname || '/';
  return p.replace(/[^/]*$/, '') || '/';
}
const SCOPE_PATH = ngmySwBasePath();
const CACHE_NAME = CACHE_PREFIX + '20260904161025';

/** Same-origin proxy target — never appears in the browser as bright-handler. */
const NGMY_EDGE_UPSTREAM =
  'https://gvufllqqxjnpicmkxzcg.supabase.co/functions/v1/bright-handler';
const NGMY_REST_UPSTREAM =
  'https://gvufllqqxjnpicmkxzcg.supabase.co/rest/v1';
const NGMY_SUPABASE_ANON =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dWZsbHFxeGpucGljbWt4emNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjA1OTksImV4cCI6MjA5NTM5NjU5OX0.NoJnis6t_RLSJOHu5iLdjGaCTxVj5ZAFnG3gBZ3XYbM';

/** ngmy_settings keys that must never download via REST (legacy rows may hold PII). */
const NGMY_SENSITIVE_SETTINGS_KEYS = new Set([
  'civic_self_enrollment_settings',
  'civic_cities_rooms',
  'civic_help_mode_settings',
  'civic_deleted_contribution_ids',
  'civic_contribution_receipt_removed',
  'civic_registry_members',
  'civic_registry_pins',
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
  if (request.method !== 'GET') return null;
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

async function ngmyProxyApiSync(request) {
  var headers = new Headers(request.headers);
  if (!headers.get('apikey')) headers.set('apikey', NGMY_SUPABASE_ANON);
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
  var blocked = ngmyBlockSensitiveSettingsGet(request, url);
  if (blocked) return blocked;

  var headers = new Headers(request.headers);
  if (!headers.get('apikey')) headers.set('apikey', NGMY_SUPABASE_ANON);
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

const PRECACHE_URLS = ["./.last_build_id", "./.nojekyll", "./404.html", "./CNAME", "./assets/AssetManifest.bin", "./assets/AssetManifest.bin.json", "./assets/FontManifest.json", "./assets/NOTICES", "./assets/assets/bio_link_icons/facebook.png", "./assets/assets/bio_link_icons/instagram.png", "./assets/assets/bio_link_icons/tiktok.png", "./assets/assets/bio_link_icons/youtube.png", "./assets/assets/fonts/NotoColorEmoji.ttf", "./assets/assets/fonts/Roboto-Bold.ttf", "./assets/assets/fonts/Roboto-Light.ttf", "./assets/assets/fonts/Roboto-Medium.ttf", "./assets/assets/fonts/Roboto-Regular.ttf", "./assets/assets/images/advisors/bible_study_teacher_f.jpg", "./assets/assets/images/advisors/bible_study_teacher_m.jpg", "./assets/assets/images/advisors/career_coach_m.jpg", "./assets/assets/images/advisors/companion_f.jpg", "./assets/assets/images/advisors/companion_m.jpg", "./assets/assets/images/advisors/doctor_f.jpg", "./assets/assets/images/advisors/doctor_m.jpg", "./assets/assets/images/advisors/financial_advisor_f.jpg", "./assets/assets/images/advisors/financial_advisor_m.jpg", "./assets/assets/images/advisors/fitness_coach_m.jpg", "./assets/assets/images/advisors/lawyer_f.jpg", "./assets/assets/images/advisors/lawyer_m.jpg", "./assets/assets/images/advisors/marriage_advisor_f.jpg", "./assets/assets/images/advisors/marriage_advisor_m.jpg", "./assets/assets/images/advisors/mshauri_m.jpg", "./assets/assets/images/advisors/pastor_m.jpg", "./assets/assets/images/advisors/person_alex_remy.jpg", "./assets/assets/images/advisors/person_alisa_john.jpg", "./assets/assets/images/advisors/person_anna_amuri.jpg", "./assets/assets/images/advisors/person_chloe_mitchell.jpg", "./assets/assets/images/advisors/person_grace_anderson.jpg", "./assets/assets/images/advisors/person_isaiah_john.jpg", "./assets/assets/images/advisors/person_jeremiah_nesto.jpg", "./assets/assets/images/advisors/person_mina.jpg", "./assets/assets/images/advisors/person_miriam.jpg", "./assets/assets/images/advisors/person_nia_robertson.jpg", "./assets/assets/images/advisors/person_olivia_bennett.jpg", "./assets/assets/images/advisors/person_sophie_morgan.jpg", "./assets/assets/images/advisors/person_susie.jpg", "./assets/assets/images/advisors/person_suzana_mbuto.jpg", "./assets/assets/images/advisors/person_suzana_vanessa.jpg", "./assets/assets/images/advisors/teacher_f.jpg", "./assets/assets/images/advisors/teacher_m.jpg", "./assets/assets/images/advisors/therapist_f.jpg", "./assets/assets/images/ngmy_document_ask_icon.png", "./assets/assets/images/ngmy_logo.png", "./assets/assets/images/swahili/1432405972618-c60b0225b8f9.jpg", "./assets/assets/images/swahili/1435527173128-983b87201f4d.jpg", "./assets/assets/images/swahili/1444464666168-49d633b86797.jpg", "./assets/assets/images/swahili/1456513080510-7bf3a84b82f8.jpg", "./assets/assets/images/swahili/1457383457550-47a5cfdbab17.jpg", "./assets/assets/images/swahili/1472214103451-9374bd1c798e.jpg", "./assets/assets/images/swahili/1487956382158-bb926046304a.jpg", "./assets/assets/images/swahili/1488132828189-4e416661b680.jpg", "./assets/assets/images/swahili/1489112318845-bcfb7233b1a1.jpg", "./assets/assets/images/swahili/1489275259429-70f6ef5705c1.jpg", "./assets/assets/images/swahili/1490127252417-7c393f993ee4.jpg", "./assets/assets/images/swahili/1491414416654-c4de0c986af8.jpg", "./assets/assets/images/swahili/1491929536571-bdbc57e72324.jpg", "./assets/assets/images/swahili/1492684223066-81342ee5ff30.jpg", "./assets/assets/images/swahili/1493612276216-ee3925520721.jpg", "./assets/assets/images/swahili/1493836512294-502baa1986e2.jpg", "./assets/assets/images/swahili/1494790108377-be9c29b29330.jpg", "./assets/assets/images/swahili/1495020689067-958852a7765e.jpg", "./assets/assets/images/swahili/1501743411739-de52ea0ce6a0.jpg", "./assets/assets/images/swahili/1502355984-b735cb2550ce.jpg", "./assets/assets/images/swahili/1502663656924-a7163d645e0c.jpg", "./assets/assets/images/swahili/1504674900247-0877df9cc836.jpg", "./assets/assets/images/swahili/1506869640319-fe1a24fd76dc.jpg", "./assets/assets/images/swahili/1507003211169-0a1dd7228f2d.jpg", "./assets/assets/images/swahili/1507206130118-b5907f817163.jpg", "./assets/assets/images/swahili/1508455858334-95337ba25607.jpg", "./assets/assets/images/swahili/1515378791036-0648a3ef77b2.jpg", "./assets/assets/images/swahili/1516382022989-cd771ab91fb1.jpg", "./assets/assets/images/swahili/1516749712236-67f5688a642a.jpg", "./assets/assets/images/swahili/1517545084371-4a575dde2a02.jpg", "./assets/assets/images/swahili/1517836357463-d25dfeac3438.jpg", "./assets/assets/images/swahili/1517870662726-c1d98ee36250.jpg", "./assets/assets/images/swahili/1517884885877-a46b0f5327db.jpg", "./assets/assets/images/swahili/1518281361980-b26bfd556770.jpg", "./assets/assets/images/swahili/1518843875459-f738682238a6.jpg", "./assets/assets/images/swahili/1519681393784-d120267933ba.jpg", "./assets/assets/images/swahili/1519996529931-28324d5a630e.jpg", "./assets/assets/images/swahili/1520006507663-f34ed4a17b4c.jpg", "./assets/assets/images/swahili/1520187044487-b2efb58f0cba.jpg", "./assets/assets/images/swahili/1521791136064-7986c2920216.jpg", "./assets/assets/images/swahili/1522771739844-6a9f6d5f14af.jpg", "./assets/assets/images/swahili/1524601500432-1e1a4c71d692.jpg", "./assets/assets/images/swahili/1525206809752-65312b959c88.jpg", "./assets/assets/images/swahili/1530013255753-3f6578d19059.jpg", "./assets/assets/images/swahili/1531379410502-63bfe8cdaf6f.jpg", "./assets/assets/images/swahili/1531873252757-8c22fa9e7a98.jpg", "./assets/assets/images/swahili/1535588986102-0e9c0c60cba2.jpg", "./assets/assets/images/swahili/1536816579748-4ecb3f03d72a.jpg", "./assets/assets/images/swahili/1541089404510-5c9a779841fc.jpg", "./assets/assets/images/swahili/1541480601022-2308c0f02487.jpg", "./assets/assets/images/swahili/1542014740373-51ad6425eb7c.jpg", "./assets/assets/images/swahili/1542229538-4d8784038379.jpg", "./assets/assets/images/swahili/1543265489-6130022b8561.jpg", "./assets/assets/images/swahili/1543807535-eceef0bc6599.jpg", "./assets/assets/images/swahili/1543980932-b5fc649a8000.jpg", "./assets/assets/images/swahili/1544787219-7f47ccb76574.jpg", "./assets/assets/images/swahili/1548550023-2bdb3c5beed7.jpg", "./assets/assets/images/swahili/1548780607-46c78f38182d.jpg", "./assets/assets/images/swahili/1549068294-04a001ee0638.jpg", "./assets/assets/images/swahili/1549923746-c502d488b3ea.jpg", "./assets/assets/images/swahili/1552452380-4137214f33b6.jpg", "./assets/assets/images/swahili/1552664730-d307ca884978.jpg", "./assets/assets/images/swahili/1552846573-47e482355fa7.jpg", "./assets/assets/images/swahili/1552862750-746b8f6f7f25.jpg", "./assets/assets/images/swahili/1553729784-e91953dec042.jpg", "./assets/assets/images/swahili/1554188572-9d184b57d8e2.jpg", "./assets/assets/images/swahili/1556848527-f7c548b972b2.jpg", "./assets/assets/images/swahili/1556911220-e15b29be8c8f.jpg", "./assets/assets/images/swahili/1557050543-4d5f4e07ef46.jpg", "./assets/assets/images/swahili/1557176278-3326a3193580.jpg", "./assets/assets/images/swahili/1558541966-ee7182e26d63.jpg", "./assets/assets/images/swahili/1559150182-a7144f7628f9.jpg", "./assets/assets/images/swahili/1559769732-3a943df124b0.jpg", "./assets/assets/images/swahili/1560707854-fb9a10eeaace.jpg", "./assets/assets/images/swahili/1560986752-2e31d9507413.jpg", "./assets/assets/images/swahili/1561089489-f13d5e730d72.jpg", "./assets/assets/images/swahili/1563176137-45a7f3917371_portrait.jpg", "./assets/assets/images/swahili/1564013799919-ab600027ffc6.jpg", "./assets/assets/images/swahili/1566653223195-e09604588c9f.jpg", "./assets/assets/images/swahili/1570563169510-ac9c2c3cad68.jpg", "./assets/assets/images/swahili/1572707691993-29c96332f6be.jpg", "./assets/assets/images/swahili/1573376670329-0261ea9fde97.jpg", "./assets/assets/images/swahili/1578125468943-b963a1daa385.jpg", "./assets/assets/images/swahili/1578625155481-7bc40a6481b6.jpg", "./assets/assets/images/swahili/1578651714116-2a1645b70c0f.jpg", "./assets/assets/images/swahili/1580446623001-3abf670c5c55.jpg", "./assets/assets/images/swahili/1581889470536-467bdbe30cd0.jpg", "./assets/assets/images/swahili/1582213782179-e0d53f98f2ca.jpg", "./assets/assets/images/swahili/1582298538104-fe2e74c27f59.jpg", "./assets/assets/images/swahili/1583162814461-3879bd80fd77.jpg", "./assets/assets/images/swahili/1583264277168-58ceba4b84e7.jpg", "./assets/assets/images/swahili/1586276632510-a680c3db9a10.jpg", "./assets/assets/images/swahili/1586473219010-2ffc57b0d282.jpg", "./assets/assets/images/swahili/1586726370832-3440a511e479.jpg", "./assets/assets/images/swahili/1592890288564-76628a30a657.jpg", "./assets/assets/images/swahili/1593100126453-19b562a800c1.jpg", "./assets/assets/images/swahili/1594383538644-66fcb99ae1ed.jpg", "./assets/assets/images/swahili/1597213669181-6276d2315b55.jpg", "./assets/assets/images/swahili/1600041967514-701d405228c6.jpg", "./assets/assets/images/swahili/1600603406200-5b2a104684ac.jpg", "./assets/assets/images/swahili/1612883833766-7930d960e16f.jpg", "./assets/assets/images/swahili/1612996860234-f1322906438a.jpg", "./assets/assets/images/swahili/1618037087830-5e746497905b.jpg", "./assets/assets/images/swahili/1618886614638-80e3c103d31a.jpg", "./assets/assets/images/swahili/1619016145369-0ff98d539993.jpg", "./assets/assets/images/swahili/1621273974250-faeb23660cdf.jpg", "./assets/assets/images/swahili/1622768766607-922825162edc.jpg", "./assets/assets/images/swahili/1632144130358-6cfeed023e27.jpg", "./assets/assets/images/swahili/1633092539352-4d458d94cfe4.jpg", "./assets/assets/images/swahili/1633613286848-e6f43bbafb8d.jpg", "./assets/assets/images/swahili/1636320966479-4842be49dd2e.jpg", "./assets/assets/images/swahili/1636592358465-37c526b978d2.jpg", "./assets/assets/images/swahili/1636987050384-9b079c700f63.jpg", "./assets/assets/images/swahili/1639600281360-2c158cb8391a.jpg", "./assets/assets/images/swahili/1642943392730-ae57c9b77522.jpg", "./assets/assets/images/swahili/1646340621112-dd3c96797887.jpg", "./assets/assets/images/swahili/1655506207889-4f130f49797f.jpg", "./assets/assets/images/swahili/1656019838845-757b4200dfd5.jpg", "./assets/assets/images/swahili/1659352152794-b1cf311f112c.jpg", "./assets/assets/images/swahili/1659924086637-803c92f2dac8.jpg", "./assets/assets/images/swahili/1660489744575-81ab10cf06b7_portrait.jpg", "./assets/assets/images/swahili/1672266353368-7df4d6d963de.jpg", "./assets/assets/images/swahili/1673048297932-ad2caa4a7a59.jpg", "./assets/assets/images/swahili/1673515336414-0db19994707f.jpg", "./assets/assets/images/swahili/1678923685297-0ade9816275e.jpg", "./assets/assets/images/swahili/1685031924917-aa16bb9d2c25.jpg", "./assets/assets/images/swahili/1687585612416-c7e45dbb27d5.jpg", "./assets/assets/images/swahili/1689143947647-062e1a24bf2d.jpg", "./assets/assets/images/swahili/1690681737765-87873d223aff.jpg", "./assets/assets/images/swahili/1691071666279-58adb714d0b8.jpg", "./assets/assets/images/swahili/1697142985510-86fa2ea314d9.jpg", "./assets/assets/images/swahili/1697639659506-ada9b78ae2ae.jpg", "./assets/assets/images/swahili/1699870225928-f366b1f04679.jpg", "./assets/assets/images/swahili/1702065612691-877a245777ad.jpg", "./assets/assets/images/swahili/1702065612921-fcf9e698dccc.jpg", "./assets/assets/images/swahili/1704265586142-db3e17d0dea0.jpg", "./assets/assets/images/swahili/1711871549711-4717086bfab9.jpg", "./assets/assets/images/swahili/1713947501966-34897f21162e.jpg", "./assets/assets/images/swahili/1718382341267-aef8a9e4ecef.jpg", "./assets/assets/images/swahili/1738739907433-10601360cee3.jpg", "./assets/assets/images/swahili/1758270704286-83476deb3bd1.jpg", "./assets/assets/images/swahili/1758274252296-a63b1d7d4bb8.jpg", "./assets/assets/images/swahili/1758525224242-cdcf50a54d58.jpg", "./assets/assets/images/swahili/1758599543122-fc551c9b4b1c.jpg", "./assets/assets/images/swahili/1758599668796-cdd37f4ecb66.jpg", "./assets/assets/images/swahili/1758600432914-2b5f4483c7b8.jpg", "./assets/assets/images/swahili/1758600588075-337dfa176a31.jpg", "./assets/assets/images/swahili/1758600588332-f115280edb2e.jpg", "./assets/assets/images/swahili/1758686254563-5c5ab338c8b9.jpg", "./assets/assets/images/swahili/1758691030490-fe1cb6c972ce.jpg", "./assets/assets/images/swahili/1758691463384-771db2f192b3.jpg", "./assets/assets/images/swahili/1758874572647-407688dfd807.jpg", "./assets/assets/images/swahili/1759405185577-4ba456d4bdc7.jpg", "./assets/assets/images/swahili/1760114852784-ec280f0a62e2.jpg", "./assets/assets/images/swahili/1760897008085-61143d503763.jpg", "./assets/assets/images/swahili/1762328003206-03a1ff078062.jpg", "./assets/assets/images/swahili/1762328006833-b1c850d57618.jpg", "./assets/assets/images/swahili/1762328022007-edc2c770d350.jpg", "./assets/assets/images/swahili/1762351934738-2af558786537.jpg", "./assets/assets/images/swahili/1763727288483-ea361a563531.jpg", "./assets/assets/images/swahili/1764351661329-8d76178e02b3.jpg", "./assets/assets/images/swahili/1766229034549-0103e6d4a75f.jpg", "./assets/assets/images/swahili/1766970096331-78c8af007a3b.jpg", "./assets/assets/images/swahili/1768299582669-430739acc3d9.jpg", "./assets/assets/images/swahili/1768751947109-d2a99be1aa9c.jpg", "./assets/assets/images/swahili/1769708046949-108aa733f753.jpg", "./assets/assets/images/swahili/1771570665615-453f75881df2.jpg", "./assets/assets/images/swahili/1774619511446-f2af7584db46.jpg", "./assets/assets/images/swahili/1774674534737-8a5fc71699b8.jpg", "./assets/assets/images/swahili/1774797405372-52737eeafc1e.jpg", "./assets/assets/images/swahili/1775163024488-e88e4a71179f.jpg", "./assets/assets/images/swahili/1775308519753-e8aee2262bf3.jpg", "./assets/assets/images/swahili/1776883591149-e93c3027c51f.jpg", "./assets/assets/images/swahili/1778342261377-9248c3dd10fd.jpg", "./assets/assets/images/swahili/1778502802065-d24cd36b5731.jpg", "./assets/assets/images/swahili/1779133558796-c7bf60f22208.jpg", "./assets/assets/images/swahili/1780027684177-d297178ea31c.jpg", "./assets/assets/images/swahili/1781935307689-920207af57db.jpg", "./assets/assets/sounds/README.md", "./assets/assets/sounds/YTMP3GG_YouTube_Kaching-sound-effect-sound-sounds-sounde_Media_a7Vue-A0BOY_007_128k.mp3", "./assets/assets/sounds/income_cash.mp3", "./assets/assets/twemoji/1f1f9-1f1ff.png", "./assets/assets/twemoji/1f1fa-1f1f8.png", "./assets/assets/twemoji/1f30a.png", "./assets/assets/twemoji/1f319.png", "./assets/assets/twemoji/1f31e.png", "./assets/assets/twemoji/1f33f.png", "./assets/assets/twemoji/1f347.png", "./assets/assets/twemoji/1f34a.png", "./assets/assets/twemoji/1f34f.png", "./assets/assets/twemoji/1f352.png", "./assets/assets/twemoji/1f36b.png", "./assets/assets/twemoji/1f36c.png", "./assets/assets/twemoji/1f373.png", "./assets/assets/twemoji/1f381.png", "./assets/assets/twemoji/1f389.png", "./assets/assets/twemoji/1f393.png", "./assets/assets/twemoji/1f3a8.png", "./assets/assets/twemoji/1f3ae.png", "./assets/assets/twemoji/1f3af.png", "./assets/assets/twemoji/1f3b5.png", "./assets/assets/twemoji/1f3e0.png", "./assets/assets/twemoji/1f3e2.png", "./assets/assets/twemoji/1f42c.png", "./assets/assets/twemoji/1f44d.png", "./assets/assets/twemoji/1f44f.png", "./assets/assets/twemoji/1f464.png", "./assets/assets/twemoji/1f468-1f3fb-200d-1f9b1.png", "./assets/assets/twemoji/1f468-1f3fb.png", "./assets/assets/twemoji/1f468-1f3fd-200d-1f393.png", "./assets/assets/twemoji/1f468-1f3fd-200d-1f4bc.png", "./assets/assets/twemoji/1f468-1f3fd-200d-1f9b1.png", "./assets/assets/twemoji/1f468-1f3fd.png", "./assets/assets/twemoji/1f468-1f3fe-200d-1f393.png", "./assets/assets/twemoji/1f468-1f3fe-200d-1f4bc.png", "./assets/assets/twemoji/1f468-1f3fe-200d-1f9b1.png", "./assets/assets/twemoji/1f468-1f3fe-200d-1f9b2.png", "./assets/assets/twemoji/1f468-1f3fe.png", "./assets/assets/twemoji/1f468-1f3ff-200d-1f4bc.png", "./assets/assets/twemoji/1f468-1f3ff-200d-1f9b1.png", "./assets/assets/twemoji/1f468-1f3ff-200d-1f9b2.png", "./assets/assets/twemoji/1f468-1f3ff.png", "./assets/assets/twemoji/1f468-200d-1f393.png", "./assets/assets/twemoji/1f468-200d-1f4bc.png", "./assets/assets/twemoji/1f468.png", "./assets/assets/twemoji/1f469-1f3fb-200d-1f393.png", "./assets/assets/twemoji/1f469-1f3fb-200d-1f9b1.png", "./assets/assets/twemoji/1f469-1f3fb.png", "./assets/assets/twemoji/1f469-1f3fd-200d-1f393.png", "./assets/assets/twemoji/1f469-1f3fd-200d-1f4bc.png", "./assets/assets/twemoji/1f469-1f3fd-200d-1f9b1.png", "./assets/assets/twemoji/1f469-1f3fd.png", "./assets/assets/twemoji/1f469-1f3fe-200d-1f393.png", "./assets/assets/twemoji/1f469-1f3fe-200d-1f4bc.png", "./assets/assets/twemoji/1f469-1f3fe-200d-1f9b1.png", "./assets/assets/twemoji/1f469-1f3fe-200d-1f9b3.png", "./assets/assets/twemoji/1f469-1f3fe.png", "./assets/assets/twemoji/1f469-1f3ff-200d-1f4bc.png", "./assets/assets/twemoji/1f469-1f3ff-200d-1f9b1.png", "./assets/assets/twemoji/1f469-1f3ff-200d-1f9b3.png", "./assets/assets/twemoji/1f469-1f3ff.png", "./assets/assets/twemoji/1f469-200d-1f393.png", "./assets/assets/twemoji/1f469-200d-1f4bc.png", "./assets/assets/twemoji/1f469.png", "./assets/assets/twemoji/1f499.png", "./assets/assets/twemoji/1f4a1.png", "./assets/assets/twemoji/1f4aa.png", "./assets/assets/twemoji/1f4b0.png", "./assets/assets/twemoji/1f4bc.png", "./assets/assets/twemoji/1f4c5.png", "./assets/assets/twemoji/1f4c8.png", "./assets/assets/twemoji/1f4ca.png", "./assets/assets/twemoji/1f4cb.png", "./assets/assets/twemoji/1f4cc.png", "./assets/assets/twemoji/1f4ce.png", "./assets/assets/twemoji/1f4da.png", "./assets/assets/twemoji/1f4dd.png", "./assets/assets/twemoji/1f4de.png", "./assets/assets/twemoji/1f50d.png", "./assets/assets/twemoji/1f525.png", "./assets/assets/twemoji/1f52c.png", "./assets/assets/twemoji/1f58c.png", "./assets/assets/twemoji/1f5a4.png", "./assets/assets/twemoji/1f5c2.png", "./assets/assets/twemoji/1f600.png", "./assets/assets/twemoji/1f60a.png", "./assets/assets/twemoji/1f60d.png", "./assets/assets/twemoji/1f60e.png", "./assets/assets/twemoji/1f634.png", "./assets/assets/twemoji/1f642.png", "./assets/assets/twemoji/1f64c.png", "./assets/assets/twemoji/1f680.png", "./assets/assets/twemoji/1f6d2.png", "./assets/assets/twemoji/1f914.png", "./assets/assets/twemoji/1f91d.png", "./assets/assets/twemoji/1f929.png", "./assets/assets/twemoji/1f973.png", "./assets/assets/twemoji/1f9d4-200d-2642-fe0f.png", "./assets/assets/twemoji/1f9d4.png", "./assets/assets/twemoji/1f9d5.png", "./assets/assets/twemoji/1fa75.png", "./assets/assets/twemoji/1faa3.png", "./assets/assets/twemoji/2139.png", "./assets/assets/twemoji/23f0.png", "./assets/assets/twemoji/2615.png", "./assets/assets/twemoji/26a0.png", "./assets/assets/twemoji/26a1.png", "./assets/assets/twemoji/26c4.png", "./assets/assets/twemoji/2705.png", "./assets/assets/twemoji/2708.png", "./assets/assets/twemoji/2709.png", "./assets/assets/twemoji/2728.png", "./assets/assets/twemoji/2764.png", "./assets/assets/twemoji/2b50.png", "./assets/assets/video_studio/yt_news_desk.png", "./assets/assets/video_studio/yt_studio_curved.png", "./assets/fonts/MaterialIcons-Regular.otf", "./assets/packages/cupertino_icons/assets/CupertinoIcons.ttf", "./assets/packages/flutter_map/lib/assets/flutter_map_logo.png", "./assets/shaders/ink_sparkle.frag", "./assets/shaders/stretch_effect.frag", "./canvaskit/canvaskit.js", "./canvaskit/canvaskit.js.symbols", "./canvaskit/canvaskit.wasm", "./canvaskit/chromium/canvaskit.js", "./canvaskit/chromium/canvaskit.js.symbols", "./canvaskit/chromium/canvaskit.wasm", "./canvaskit/skwasm.js", "./canvaskit/skwasm.js.symbols", "./canvaskit/skwasm.wasm", "./canvaskit/skwasm_heavy.js", "./canvaskit/skwasm_heavy.js.symbols", "./canvaskit/skwasm_heavy.wasm", "./canvaskit/webparagraph/canvaskit.js", "./canvaskit/webparagraph/canvaskit.js.symbols", "./canvaskit/webparagraph/canvaskit.wasm", "./canvaskit/wimp.js", "./canvaskit/wimp.js.symbols", "./canvaskit/wimp.wasm", "./favicon.png", "./flutter.js", "./flutter_bootstrap.js", "./icons/Icon-192.png", "./icons/Icon-512.png", "./icons/Icon-maskable-192.png", "./icons/Icon-maskable-512.png", "./index.html", "./main.dart.js", "./manifest.json", "./ngmy_studio_fast_export.js", "./og-share.png", "./version.json"];

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
      console.warn('[ngmy-sw] absolute shell', abs, e);
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
    const res = await fetch(new Request(url, { cache: 'reload' }));
    if (res && res.ok) {
      await cache.put(url, res.clone());
      return true;
    }
  } catch (e) {
    console.warn('[ngmy-sw] precache skip', url, e);
  }
  return false;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const allCritical = CRITICAL_OFFLINE_URLS.concat(criticalPartUrls());
      for (const url of allCritical) {
        await precacheUrl(cache, url);
      }
      const rest = PRECACHE_URLS.filter(
        (u) => allCritical.indexOf(u) === -1,
      );
      await Promise.allSettled(rest.map((url) => precacheUrl(cache, url)));
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
        console.warn('[ngmy-sw] keep prior cache — new shell not ready yet');
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
    console.warn('[ngmy-sw] load alarms failed', e);
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
    console.warn('[ngmy-sw] save alarms failed', e);
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
    console.warn('[ngmy-sw] showNotification failed', e);
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

  if (url.origin !== self.location.origin) return;
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

      // Cache-first for shell assets — required for iOS offline (onLine is unreliable).
      if (shellAsset && cached) {
        if (self.navigator.onLine) {
          event.waitUntil(
            fetch(event.request)
              .then((res) => {
                if (res && res.status === 200) return cache.put(event.request, res.clone());
              })
              .catch(() => {}),
          );
        }
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
        if (self.navigator.onLine) {
          event.waitUntil(
            fetch(event.request)
              .then((res) => {
                if (res && res.status === 200) return cache.put(event.request, res.clone());
              })
              .catch(() => {}),
          );
        }
        return cached;
      }

      try {
        const res = await fetch(event.request);
        if (res && res.status === 200) {
          cache.put(event.request, res.clone());
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
