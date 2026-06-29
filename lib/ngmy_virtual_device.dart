import 'dart:async';
import 'dart:convert';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_bottom_nav_frame.dart';
import 'ngmy_studio_colors.dart';
import 'ngmy_virtual_device_media.dart';
import 'ngmy_virtual_device_media_view.dart';

const String _kFleetPrefsPrefix = 'ngmy_virtual_device_fleet_v2_';
const String _kLegacyPrefsPrefix = 'ngmy_virtual_device_v1_';
const int kNgmyDefaultVirtualDeviceCount = 20;
const int kNgmyVirtualDeviceGridColumns = 4;

void showNgmyVirtualDevice({
  required BuildContext context,
  String? userEmail,
}) {
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmyVirtualDeviceFleetScreen(userEmail: userEmail ?? ''),
    ),
  );
}

Future<void> showNgmyVirtualDeviceLinkSearch(BuildContext context, {required int deviceCount}) async {
  final controller = TextEditingController(
    text: NgmyVirtualDevicePlayback.active.value?.originalUrl ?? '',
  );
  final pasted = await showDialog<String>(
    context: context,
    builder: (ctx) {
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      return AlertDialog(
        title: const Text('Paste video link'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'YouTube, TikTok, Instagram, or Facebook — plays on all $deviceCount devices.',
              style: TextStyle(color: Theme.of(ctx).colorScheme.onSurface.withValues(alpha: 0.65), fontSize: 13),
            ),
            const SizedBox(height: 14),
            TextField(
              controller: controller,
              autofocus: true,
              maxLines: 3,
              decoration: InputDecoration(
                hintText: 'https://youtube.com/watch?v=…',
                filled: true,
                fillColor: isDark ? const Color(0xFF151B28) : const Color(0xFFF8FAFC),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () {
              NgmyVirtualDevicePlayback.clear();
              Navigator.pop(ctx);
            },
            child: const Text('Clear'),
          ),
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () => Navigator.pop(ctx, controller.text.trim()),
            style: FilledButton.styleFrom(backgroundColor: kNgmyStudioHubAccent),
            child: const Text('Play on all devices'),
          ),
        ],
      );
    },
  );
  controller.dispose();
  if (!context.mounted || pasted == null || pasted.isEmpty) return;
  final target = NgmyVirtualDeviceMedia.parse(pasted);
  if (target == null) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Could not read that link. Paste a YouTube, TikTok, Instagram, or Facebook URL.')),
    );
    return;
  }
  await Future<void>.delayed(const Duration(milliseconds: 150));
  if (!context.mounted) return;
  NgmyVirtualDevicePlayback.active.value = target;
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text('Playing ${target.label} on all $deviceCount devices')),
  );
}

class NgmyVirtualDeviceIdentity {
  NgmyVirtualDeviceIdentity({
    required this.id,
    required this.label,
    required this.serialNumber,
    required this.modelName,
    required this.deviceId,
    required this.macAddress,
    required this.imei,
    required this.osName,
    required this.osVersion,
    required this.virtualCity,
    required this.virtualCountry,
    required this.virtualLat,
    required this.virtualLng,
    required this.timezone,
    required this.createdAt,
  });

  final String id;
  final String label;
  final String serialNumber;
  final String modelName;
  final String deviceId;
  final String macAddress;
  final String imei;
  final String osName;
  final String osVersion;
  final String virtualCity;
  final String virtualCountry;
  final double virtualLat;
  final double virtualLng;
  final String timezone;
  final String createdAt;

  String get locationLabel => '$virtualCity, $virtualCountry';

  Map<String, dynamic> toJson() => {
        'id': id,
        'label': label,
        'serialNumber': serialNumber,
        'modelName': modelName,
        'deviceId': deviceId,
        'macAddress': macAddress,
        'imei': imei,
        'osName': osName,
        'osVersion': osVersion,
        'virtualCity': virtualCity,
        'virtualCountry': virtualCountry,
        'virtualLat': virtualLat,
        'virtualLng': virtualLng,
        'timezone': timezone,
        'createdAt': createdAt,
      };

  factory NgmyVirtualDeviceIdentity.fromJson(Map<String, dynamic> json) {
    return NgmyVirtualDeviceIdentity(
      id: (json['id'] ?? '').toString(),
      label: (json['label'] ?? 'Virtual Device').toString(),
      serialNumber: (json['serialNumber'] ?? '').toString(),
      modelName: (json['modelName'] ?? 'NGMY Virtual Phone').toString(),
      deviceId: (json['deviceId'] ?? '').toString(),
      macAddress: (json['macAddress'] ?? '').toString(),
      imei: (json['imei'] ?? '').toString(),
      osName: (json['osName'] ?? 'NGMY OS').toString(),
      osVersion: (json['osVersion'] ?? '1.0').toString(),
      virtualCity: (json['virtualCity'] ?? 'Unknown').toString(),
      virtualCountry: (json['virtualCountry'] ?? '').toString(),
      virtualLat: (json['virtualLat'] as num?)?.toDouble() ?? 0,
      virtualLng: (json['virtualLng'] as num?)?.toDouble() ?? 0,
      timezone: (json['timezone'] ?? 'UTC').toString(),
      createdAt: (json['createdAt'] ?? '').toString(),
    );
  }
}

class NgmyVirtualDeviceStore {
  static String _fleetKey(String email) => '$_kFleetPrefsPrefix${email.trim().toLowerCase()}';

  static Future<List<NgmyVirtualDeviceIdentity>> loadFleet(String userEmail) async {
    final prefs = await SharedPreferences.getInstance();
    final key = _fleetKey(userEmail);
    final raw = prefs.getString(key);
    if (raw != null && raw.isNotEmpty) {
      try {
        final decoded = jsonDecode(raw);
        if (decoded is List && decoded.isNotEmpty) {
          final fleet = decoded
              .whereType<Map>()
              .map((e) => NgmyVirtualDeviceIdentity.fromJson(Map<String, dynamic>.from(e)))
              .where((d) => d.id.isNotEmpty && d.serialNumber.isNotEmpty)
              .toList();
          if (fleet.length >= kNgmyDefaultVirtualDeviceCount) return fleet;
          final topped = _topUpFleet(fleet);
          await _saveFleet(userEmail, topped);
          return topped;
        }
      } catch (_) {}
    }

    final legacy = prefs.getString('$_kLegacyPrefsPrefix${userEmail.trim().toLowerCase()}');
    if (legacy != null && legacy.isNotEmpty) {
      try {
        final decoded = jsonDecode(legacy);
        if (decoded is Map) {
          final one = NgmyVirtualDeviceIdentity.fromJson(Map<String, dynamic>.from(decoded));
          final fleet = _topUpFleet([one]);
          await _saveFleet(userEmail, fleet);
          return fleet;
        }
      } catch (_) {}
    }

    final fleet = _createDefaultFleet();
    await _saveFleet(userEmail, fleet);
    return fleet;
  }

  static List<NgmyVirtualDeviceIdentity> _topUpFleet(List<NgmyVirtualDeviceIdentity> existing) {
    final usedSerials = existing.map((e) => e.serialNumber).toSet();
    final usedImeis = existing.map((e) => e.imei).toSet();
    final usedMacs = existing.map((e) => e.macAddress).toSet();
    final usedLocations = existing.map((e) => e.timezone).toSet();
    final next = List<NgmyVirtualDeviceIdentity>.from(existing);
    var slot = existing.length;
    while (next.length < kNgmyDefaultVirtualDeviceCount) {
      next.add(_generateUnique(slot: slot, usedSerials: usedSerials, usedImeis: usedImeis, usedMacs: usedMacs, usedTimezones: usedLocations));
      slot++;
    }
    return next;
  }

  static Future<NgmyVirtualDeviceIdentity> addDevice(String userEmail) async {
    final fleet = await loadFleet(userEmail);
    final usedSerials = fleet.map((e) => e.serialNumber).toSet();
    final usedImeis = fleet.map((e) => e.imei).toSet();
    final usedMacs = fleet.map((e) => e.macAddress).toSet();
    final usedTimezones = fleet.map((e) => e.timezone).toSet();
    final device = _generateUnique(
      slot: fleet.length,
      usedSerials: usedSerials,
      usedImeis: usedImeis,
      usedMacs: usedMacs,
      usedTimezones: usedTimezones,
    );
    fleet.add(device);
    await _saveFleet(userEmail, fleet);
    return device;
  }

  static Future<void> _saveFleet(String userEmail, List<NgmyVirtualDeviceIdentity> fleet) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_fleetKey(userEmail), jsonEncode(fleet.map((e) => e.toJson()).toList()));
  }

  static List<NgmyVirtualDeviceIdentity> _createDefaultFleet() {
    final usedSerials = <String>{};
    final usedImeis = <String>{};
    final usedMacs = <String>{};
    final usedTimezones = <String>{};
    return List.generate(
      kNgmyDefaultVirtualDeviceCount,
      (i) => _generateUnique(
        slot: i,
        usedSerials: usedSerials,
        usedImeis: usedImeis,
        usedMacs: usedMacs,
        usedTimezones: usedTimezones,
        locationIndex: i,
      ),
    );
  }

  static NgmyVirtualDeviceIdentity _generateUnique({
    required int slot,
    required Set<String> usedSerials,
    required Set<String> usedImeis,
    required Set<String> usedMacs,
    required Set<String> usedTimezones,
    int? locationIndex,
  }) {
    final r = Random.secure();
    var spot = _kLocationPool[(locationIndex ?? slot) % _kLocationPool.length];
    var serial = '';
    var imei = '';
    var mac = '';

    for (var attempt = 0; attempt < 64; attempt++) {
      final idx = (locationIndex ?? slot + attempt) % _kLocationPool.length;
      final candidate = _kLocationPool[idx];
      if (usedTimezones.contains(candidate.$5) && usedTimezones.length < _kLocationPool.length) {
        continue;
      }
      spot = candidate;

      final serialRaw = List.generate(4, (_) => r.nextInt(256))
          .map((b) => b.toRadixString(16).padLeft(2, '0').toUpperCase())
          .join();
      serial = 'VND-${serialRaw.substring(0, 4)}-${serialRaw.substring(4, 8)}';
      imei = List.generate(15, (_) => r.nextInt(10)).join();
      mac = List.generate(6, (_) => r.nextInt(256).toRadixString(16).padLeft(2, '0')).join(':').toUpperCase();

      if (!usedSerials.contains(serial) && !usedImeis.contains(imei) && !usedMacs.contains(mac)) {
        break;
      }
    }

    usedSerials.add(serial);
    usedImeis.add(imei);
    usedMacs.add(mac);
    usedTimezones.add(spot.$5);

    final model = _kModelPool[slot % _kModelPool.length];
    final os = _kOsPool[slot % _kOsPool.length];

    return NgmyVirtualDeviceIdentity(
      id: 'vd_${DateTime.now().microsecondsSinceEpoch}_${slot}_${r.nextInt(99999)}',
      label: 'Device ${(slot + 1).toString().padLeft(2, '0')}',
      serialNumber: serial,
      modelName: model,
      deviceId: _hex(r, 16),
      macAddress: mac,
      imei: imei,
      osName: os.$1,
      osVersion: os.$2,
      virtualCity: spot.$1,
      virtualCountry: spot.$2,
      virtualLat: spot.$3,
      virtualLng: spot.$4,
      timezone: spot.$5,
      createdAt: DateTime.now().toUtc().toIso8601String(),
    );
  }

  static String _hex(Random r, int pairs) {
    return List.generate(pairs, (_) => r.nextInt(256).toRadixString(16).padLeft(2, '0')).join();
  }

  static const _kModelPool = [
    'NGMY Virtual Phone Air',
    'NGMY Virtual Phone Pro',
    'NGMY Virtual Phone Lite',
    'NGMY Virtual Phone Max',
    'NGMY Virtual Tab Mini',
    'NGMY Virtual Phone Ultra',
    'NGMY Virtual Phone Neo',
    'NGMY Virtual Phone Edge',
    'NGMY Virtual Phone Flex',
    'NGMY Virtual Phone Core',
    'NGMY Virtual Phone Nova',
    'NGMY Virtual Phone Pulse',
    'NGMY Virtual Phone Apex',
    'NGMY Virtual Phone Zen',
    'NGMY Virtual Phone Spark',
    'NGMY Virtual Phone Wave',
    'NGMY Virtual Phone Orbit',
    'NGMY Virtual Phone Prism',
    'NGMY Virtual Phone Flux',
    'NGMY Virtual Phone Echo',
  ];

  static const _kOsPool = [
    ('NGMY OS', '14.2.1'),
    ('VirtualDroid', '13.8.4'),
    ('NGMY OS', '15.0.0'),
    ('VirtualDroid', '14.1.2'),
    ('NGMY Tab OS', '12.9.7'),
    ('NGMY OS', '13.5.3'),
    ('VirtualDroid', '15.2.0'),
    ('NGMY OS', '14.8.1'),
    ('NGMY Tab OS', '13.2.4'),
    ('VirtualDroid', '12.6.9'),
    ('NGMY OS', '16.0.1'),
    ('VirtualDroid', '14.9.0'),
    ('NGMY Tab OS', '14.0.3'),
    ('NGMY OS', '13.1.8'),
    ('VirtualDroid', '13.4.5'),
    ('NGMY OS', '15.3.2'),
    ('NGMY Tab OS', '12.4.1'),
    ('VirtualDroid', '16.1.0'),
    ('NGMY OS', '14.4.6'),
    ('VirtualDroid', '15.0.8'),
  ];

  static const _kLocationPool = [
    ('Tokyo', 'Japan', 35.6762, 139.6503, 'Asia/Tokyo'),
    ('London', 'United Kingdom', 51.5074, -0.1278, 'Europe/London'),
    ('New York', 'United States', 40.7128, -74.0060, 'America/New_York'),
    ('Paris', 'France', 48.8566, 2.3522, 'Europe/Paris'),
    ('Sydney', 'Australia', -33.8688, 151.2093, 'Australia/Sydney'),
    ('Dubai', 'UAE', 25.2048, 55.2708, 'Asia/Dubai'),
    ('Toronto', 'Canada', 43.6532, -79.3832, 'America/Toronto'),
    ('Berlin', 'Germany', 52.5200, 13.4050, 'Europe/Berlin'),
    ('Seoul', 'South Korea', 37.5665, 126.9780, 'Asia/Seoul'),
    ('São Paulo', 'Brazil', -23.5505, -46.6333, 'America/Sao_Paulo'),
    ('Mumbai', 'India', 19.0760, 72.8777, 'Asia/Kolkata'),
    ('Lagos', 'Nigeria', 6.5244, 3.3792, 'Africa/Lagos'),
    ('Mexico City', 'Mexico', 19.4326, -99.1332, 'America/Mexico_City'),
    ('Singapore', 'Singapore', 1.3521, 103.8198, 'Asia/Singapore'),
    ('Amsterdam', 'Netherlands', 52.3676, 4.9041, 'Europe/Amsterdam'),
    ('Cairo', 'Egypt', 30.0444, 31.2357, 'Africa/Cairo'),
    ('Stockholm', 'Sweden', 59.3293, 18.0686, 'Europe/Stockholm'),
    ('Bangkok', 'Thailand', 13.7563, 100.5018, 'Asia/Bangkok'),
    ('Johannesburg', 'South Africa', -26.2041, 28.0473, 'Africa/Johannesburg'),
    ('Hong Kong', 'Hong Kong', 22.3193, 114.1694, 'Asia/Hong_Kong'),
  ];
}

/// Grid of 20 unique virtual phones — tap one to open YouTube on that device.
class NgmyVirtualDeviceFleetScreen extends StatefulWidget {
  const NgmyVirtualDeviceFleetScreen({super.key, required this.userEmail});

  final String userEmail;

  @override
  State<NgmyVirtualDeviceFleetScreen> createState() => _NgmyVirtualDeviceFleetScreenState();
}

class _NgmyVirtualDeviceFleetScreenState extends State<NgmyVirtualDeviceFleetScreen> {
  List<NgmyVirtualDeviceIdentity> _fleet = [];
  var _loading = true;

  @override
  void initState() {
    super.initState();
    unawaited(_boot());
  }

  @override
  void dispose() {
    NgmyVirtualDevicePlayback.clear();
    super.dispose();
  }

  Future<void> _boot() async {
    final fleet = await NgmyVirtualDeviceStore.loadFleet(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _fleet = fleet;
      _loading = false;
    });
    NgmyVirtualDevicePlayback.deviceCount = fleet.length;
  }

  Future<void> _addDevice() async {
    setState(() => _loading = true);
    final device = await NgmyVirtualDeviceStore.addDevice(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _fleet = [..._fleet, device];
      _loading = false;
    });
    NgmyVirtualDevicePlayback.deviceCount = _fleet.length;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Added ${device.label} · ${device.serialNumber}')),
    );
  }

  void _openDevice(NgmyVirtualDeviceIdentity device) {
    Navigator.of(context).push(
      MaterialPageRoute<void>(
        builder: (_) => NgmyVirtualDeviceDetailScreen(device: device),
      ),
    );
  }

  Future<void> _openLinkSearch() => showNgmyVirtualDeviceLinkSearch(context, deviceCount: _fleet.length);

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF1F5F9);

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 6, 15, 8),
              child: Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 20),
                    onPressed: () => Navigator.of(context).pop(),
                  ),
                  Expanded(
                    child: NgmySculptedBottomNavFrame(
                      child: Row(
                        children: [
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 12),
                              child: Text(
                                _loading ? 'Virtual Devices' : 'Virtual Devices (${_fleet.length})',
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                  fontWeight: FontWeight.w900,
                                  fontSize: 15,
                                  letterSpacing: 0.2,
                                  color: isDark ? Colors.white : const Color(0xFF0F172A),
                                ),
                              ),
                            ),
                          ),
                          Material(
                            color: Colors.transparent,
                            child: InkWell(
                              onTap: _openLinkSearch,
                              customBorder: const CircleBorder(),
                              child: Padding(
                                padding: const EdgeInsets.all(12),
                                child: Icon(
                                  Icons.search_rounded,
                                  size: NgmyBottomNavMetrics.sideIconSize,
                                  color: kNgmyStudioHubAccent,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator())
                  : ValueListenableBuilder<NgmyVirtualMediaTarget?>(
                      valueListenable: NgmyVirtualDevicePlayback.active,
                      builder: (context, media, _) {
                        final showMasterPlayer = media != null && (ModalRoute.of(context)?.isCurrent ?? true);
                        return CustomScrollView(
                          slivers: [
                            SliverToBoxAdapter(
                              child: Padding(
                                padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    if (media != null) ...[
                                      Container(
                                        width: double.infinity,
                                        margin: const EdgeInsets.only(bottom: 10),
                                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                                        decoration: BoxDecoration(
                                          color: kNgmyStudioHubAccent.withValues(alpha: 0.12),
                                          borderRadius: BorderRadius.circular(12),
                                          border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.35)),
                                        ),
                                        child: Row(
                                          children: [
                                            Icon(Icons.play_circle_fill_rounded, color: kNgmyStudioHubAccent, size: 18),
                                            const SizedBox(width: 8),
                                            Expanded(
                                              child: Text(
                                                'Now playing ${media.label} on all ${_fleet.length} devices',
                                                style: TextStyle(
                                                  fontSize: 12,
                                                  fontWeight: FontWeight.w700,
                                                  color: isDark ? Colors.white : const Color(0xFF0F172A),
                                                ),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      if (showMasterPlayer) ...[
                                        ClipRRect(
                                          borderRadius: BorderRadius.circular(16),
                                          child: AspectRatio(
                                            aspectRatio: 16 / 9,
                                            child: RepaintBoundary(
                                              child: NgmyVirtualDeviceMediaView(
                                                key: ValueKey('fleet_master_${media.playUrlAudible}'),
                                                viewKey: 'fleet_master',
                                                playUrl: media.playUrlAudible,
                                                useEmbedHtml: media.usesEmbedHtml,
                                              ),
                                            ),
                                          ),
                                        ),
                                        const SizedBox(height: 12),
                                      ],
                                    ],
                                    Text(
                                      media != null
                                          ? 'All ${_fleet.length} phones below mirror this video. Tap any phone for full screen.'
                                          : '${_fleet.length} separate virtual phones — 4 per row. Tap search above to paste a link, or tap a phone to open it.',
                                      style: TextStyle(
                                        color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.65),
                                        fontSize: 13,
                                        height: 1.4,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            SliverPadding(
                              padding: const EdgeInsets.fromLTRB(10, 0, 10, 88),
                              sliver: SliverGrid(
                                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                                  crossAxisCount: kNgmyVirtualDeviceGridColumns,
                                  mainAxisSpacing: 10,
                                  crossAxisSpacing: 8,
                                  childAspectRatio: 0.52,
                                ),
                                delegate: SliverChildBuilderDelegate(
                                  (context, index) {
                                    final device = _fleet[index];
                                    return _MiniVirtualPhoneCard(
                                      device: device,
                                      media: media,
                                      onTap: () => _openDevice(device),
                                    );
                                  },
                                  childCount: _fleet.length,
                                  addAutomaticKeepAlives: false,
                                ),
                              ),
                            ),
                          ],
                        );
                      },
                    ),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _loading ? null : () => unawaited(_addDevice()),
        icon: const Icon(Icons.add_rounded),
        label: const Text('Add device'),
        backgroundColor: kNgmyStudioHubAccent,
      ),
    );
  }
}

class _MiniVirtualPhoneCard extends StatelessWidget {
  const _MiniVirtualPhoneCard({
    required this.device,
    required this.onTap,
    this.media,
  });

  final NgmyVirtualDeviceIdentity device;
  final VoidCallback onTap;
  final NgmyVirtualMediaTarget? media;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Column(
          children: [
            Expanded(
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(14),
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF1E293B), Color(0xFF0F172A)],
                  ),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.1)),
                  boxShadow: [
                    BoxShadow(
                      color: kNgmyStudioHubAccent.withValues(alpha: 0.18),
                      blurRadius: 8,
                      offset: const Offset(0, 3),
                    ),
                  ],
                ),
                padding: const EdgeInsets.all(4),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(10),
                  child: ColoredBox(
                    color: Colors.black,
                    child: Column(
                      children: [
                        _MiniStatusBar(device: device),
                        Expanded(
                          child: media != null
                              ? NgmyVirtualDeviceMediaView(
                                  key: ValueKey('${device.id}_${media!.playUrlMuted}'),
                                  viewKey: '${device.id}_mini',
                                  playUrl: media!.playUrlMuted,
                                  compact: true,
                                  useEmbedHtml: media!.usesEmbedHtml,
                                )
                              : Container(
                                  width: double.infinity,
                                  color: const Color(0xFF0F0F0F),
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Icon(Icons.play_circle_filled_rounded, color: Colors.red.shade600, size: 22),
                                      const SizedBox(height: 4),
                                      Text(
                                        'YouTube',
                                        style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 7, fontWeight: FontWeight.w700),
                                      ),
                                    ],
                                  ),
                                ),
                        ),
                        Container(
                          color: const Color(0xFF111827),
                          padding: const EdgeInsets.symmetric(vertical: 3),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Icon(Icons.touch_app_rounded, size: 9, color: kNgmyStudioHubAccent.withValues(alpha: 0.85)),
                              const SizedBox(width: 3),
                              Text('Tap', style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 7)),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            const SizedBox(height: 4),
            Text(
              device.label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                fontSize: 9,
                fontWeight: FontWeight.w800,
                color: Theme.of(context).colorScheme.onSurface,
              ),
            ),
            Text(
              device.virtualCity,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: 8, color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.55)),
            ),
            Text(
              device.serialNumber,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: 7, color: kNgmyStudioHubAccent.withValues(alpha: 0.85), letterSpacing: 0.2),
            ),
          ],
        ),
      ),
    );
  }
}

class _MiniStatusBar extends StatelessWidget {
  const _MiniStatusBar({required this.device});

  final NgmyVirtualDeviceIdentity device;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF111827),
      padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 2),
      child: Row(
        children: [
          Expanded(
            child: Text(
              device.serialNumber.split('-').last,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 5.5),
              overflow: TextOverflow.ellipsis,
            ),
          ),
          Icon(Icons.wifi_rounded, size: 7, color: Colors.white.withValues(alpha: 0.45)),
        ],
      ),
    );
  }
}

/// Full-screen single virtual device — YouTube browser loads only when opened.
class NgmyVirtualDeviceDetailScreen extends StatefulWidget {
  const NgmyVirtualDeviceDetailScreen({super.key, required this.device});

  final NgmyVirtualDeviceIdentity device;

  @override
  State<NgmyVirtualDeviceDetailScreen> createState() => _NgmyVirtualDeviceDetailScreenState();
}

class _NgmyVirtualDeviceDetailScreenState extends State<NgmyVirtualDeviceDetailScreen> {
  var _tab = 0;
  var _powerOn = true;

  Future<void> _pasteLink() => showNgmyVirtualDeviceLinkSearch(
        context,
        deviceCount: NgmyVirtualDevicePlayback.deviceCount,
      );

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF1F5F9);

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 6, 15, 8),
              child: Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back_ios_new_rounded, size: 20),
                    onPressed: () => Navigator.of(context).pop(),
                  ),
                  Expanded(
                    child: NgmySculptedBottomNavFrame(
                      child: Row(
                        children: [
                          Expanded(
                            child: Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 12),
                              child: Text(
                                '${widget.device.label} · ${widget.device.serialNumber}',
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(
                                  fontWeight: FontWeight.w900,
                                  fontSize: 14,
                                  letterSpacing: 0.2,
                                  color: isDark ? Colors.white : const Color(0xFF0F172A),
                                ),
                              ),
                            ),
                          ),
                          Material(
                            color: Colors.transparent,
                            child: InkWell(
                              onTap: () => unawaited(
                                showNgmyVirtualDeviceLinkSearch(
                                  context,
                                  deviceCount: NgmyVirtualDevicePlayback.deviceCount,
                                ),
                              ),
                              customBorder: const CircleBorder(),
                              child: Padding(
                                padding: const EdgeInsets.all(12),
                                child: Icon(
                                  Icons.search_rounded,
                                  size: NgmyBottomNavMetrics.sideIconSize,
                                  color: kNgmyStudioHubAccent,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: ValueListenableBuilder<NgmyVirtualMediaTarget?>(
                valueListenable: NgmyVirtualDevicePlayback.active,
                builder: (context, media, _) {
                  return LayoutBuilder(
                    builder: (context, constraints) {
                      final phoneW = constraints.maxWidth.clamp(280.0, 420.0);
                      return Center(
                        child: SingleChildScrollView(
                          padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
                          child: Column(
                            children: [
                              Text(
                                media != null
                                    ? 'Playing ${media.label} on this device · ${widget.device.locationLabel}'
                                    : '${widget.device.locationLabel} · ${widget.device.timezone}\n'
                                        'Separate from your real phone — unique serial & identity.',
                                textAlign: TextAlign.center,
                                style: TextStyle(
                                  color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.65),
                                  fontSize: 12,
                                  height: 1.4,
                                ),
                              ),
                              const SizedBox(height: 16),
                              _VirtualPhoneFrame(
                                width: phoneW,
                                device: widget.device,
                                powerOn: _powerOn,
                                tab: _tab,
                                media: media,
                                onPasteLink: () => unawaited(_pasteLink()),
                                onTab: (i) => setState(() => _tab = i),
                                onPowerToggle: () => setState(() => _powerOn = !_powerOn),
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _VirtualPhoneFrame extends StatelessWidget {
  const _VirtualPhoneFrame({
    required this.width,
    required this.device,
    required this.powerOn,
    required this.tab,
    required this.onPasteLink,
    required this.onTab,
    required this.onPowerToggle,
    this.media,
  });

  final double width;
  final NgmyVirtualDeviceIdentity device;
  final bool powerOn;
  final int tab;
  final VoidCallback onPasteLink;
  final void Function(int index) onTab;
  final VoidCallback onPowerToggle;
  final NgmyVirtualMediaTarget? media;

  @override
  Widget build(BuildContext context) {
    final height = width * 2.05;
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(36),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF1E293B), Color(0xFF0F172A)],
        ),
        boxShadow: [
          BoxShadow(color: kNgmyStudioHubAccent.withValues(alpha: 0.35), blurRadius: 28, offset: const Offset(0, 12)),
          BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 18, offset: const Offset(0, 8)),
        ],
        border: Border.all(color: Colors.white.withValues(alpha: 0.12), width: 2),
      ),
      padding: const EdgeInsets.all(10),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(28),
        child: ColoredBox(
          color: Colors.black,
          child: Column(
            children: [
              _VirtualStatusBar(device: device, powerOn: powerOn),
              Expanded(
                child: powerOn
                        ? (tab == 0
                        ? (media != null
                            ? NgmyVirtualDeviceMediaView(
                                key: ValueKey('${device.id}_full_${media!.playUrlAudible}'),
                                viewKey: '${device.id}_full',
                                playUrl: media!.playUrlAudible,
                                useEmbedHtml: media!.usesEmbedHtml,
                              )
                            : _NoVideoYetPanel(onPasteLink: onPasteLink))
                        : _DeviceInfoPanel(device: device))
                    : const _PowerOffScreen(),
              ),
              _VirtualHomeBar(
                tab: tab,
                powerOn: powerOn,
                onTab: onTab,
                onPowerToggle: onPowerToggle,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _VirtualStatusBar extends StatelessWidget {
  const _VirtualStatusBar({required this.device, required this.powerOn});

  final NgmyVirtualDeviceIdentity device;
  final bool powerOn;

  @override
  Widget build(BuildContext context) {
    final now = TimeOfDay.now();
    final clock =
        '${now.hourOfPeriod == 0 ? 12 : now.hourOfPeriod}:${now.minute.toString().padLeft(2, '0')} ${now.period == DayPeriod.am ? 'AM' : 'PM'}';
    return Container(
      color: const Color(0xFF111827),
      padding: const EdgeInsets.fromLTRB(14, 8, 14, 6),
      child: Column(
        children: [
          Row(
            children: [
              Text(clock, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
              const Spacer(),
              Text(device.label, style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 9)),
              const SizedBox(width: 6),
              const Icon(Icons.signal_cellular_alt_rounded, color: Colors.white70, size: 14),
              const SizedBox(width: 4),
              const Icon(Icons.wifi_rounded, color: Colors.white70, size: 14),
              const SizedBox(width: 4),
              const Icon(Icons.battery_full_rounded, color: Colors.white70, size: 14),
            ],
          ),
          if (powerOn) ...[
            const SizedBox(height: 4),
            Row(
              children: [
                Icon(Icons.smartphone_rounded, size: 12, color: kNgmyStudioHubAccent.withValues(alpha: 0.9)),
                const SizedBox(width: 4),
                Expanded(
                  child: Text(
                    device.serialNumber,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 9, letterSpacing: 0.4),
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
                Text(
                  device.virtualCity,
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 9),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }
}

class _NoVideoYetPanel extends StatelessWidget {
  const _NoVideoYetPanel({required this.onPasteLink});

  final VoidCallback onPasteLink;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      color: const Color(0xFF0F0F0F),
      child: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.smart_display_outlined, color: Colors.white.withValues(alpha: 0.35), size: 40),
            const SizedBox(height: 10),
            Text(
              'No video yet',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 12, fontWeight: FontWeight.w700),
            ),
            const SizedBox(height: 4),
            Text(
              'Tap search above to paste a link',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 10),
            ),
            const SizedBox(height: 14),
            OutlinedButton.icon(
              onPressed: onPasteLink,
              style: OutlinedButton.styleFrom(foregroundColor: kNgmyStudioHubAccent, side: BorderSide(color: kNgmyStudioHubAccent.withValues(alpha: 0.5))),
              icon: const Icon(Icons.search_rounded, size: 16),
              label: const Text('Paste a link'),
            ),
          ],
        ),
      ),
    );
  }
}

class _VirtualHomeBar extends StatelessWidget {
  const _VirtualHomeBar({
    required this.tab,
    required this.powerOn,
    required this.onTab,
    required this.onPowerToggle,
  });

  final int tab;
  final bool powerOn;
  final void Function(int index) onTab;
  final VoidCallback onPowerToggle;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF111827),
      padding: const EdgeInsets.fromLTRB(12, 6, 12, 10),
      child: Row(
        children: [
          _nav(Icons.play_circle_outline_rounded, 'YouTube', tab == 0, powerOn, () => onTab(0)),
          const SizedBox(width: 8),
          _nav(Icons.info_outline_rounded, 'Device', tab == 1, powerOn, () => onTab(1)),
          const Spacer(),
          IconButton(
            visualDensity: VisualDensity.compact,
            tooltip: powerOn ? 'Power off' : 'Power on',
            onPressed: onPowerToggle,
            icon: Icon(
              powerOn ? Icons.power_settings_new_rounded : Icons.power_off_rounded,
              color: powerOn ? const Color(0xFF22C55E) : Colors.redAccent,
            ),
          ),
        ],
      ),
    );
  }

  Widget _nav(IconData icon, String label, bool active, bool enabled, VoidCallback onTap) {
    final color = !enabled
        ? Colors.white24
        : active
            ? kNgmyStudioHubAccent
            : Colors.white54;
    return Expanded(
      child: Material(
        color: active && enabled ? kNgmyStudioHubAccent.withValues(alpha: 0.15) : Colors.transparent,
        borderRadius: BorderRadius.circular(10),
        child: InkWell(
          onTap: enabled ? onTap : null,
          borderRadius: BorderRadius.circular(10),
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 6),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(icon, size: 18, color: color),
                Text(label, style: TextStyle(color: color, fontSize: 9, fontWeight: FontWeight.w700)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _PowerOffScreen extends StatelessWidget {
  const _PowerOffScreen();

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.power_settings_new_rounded, color: Colors.white24, size: 48),
          SizedBox(height: 8),
          Text('Powered off', style: TextStyle(color: Colors.white38, fontSize: 12)),
        ],
      ),
    );
  }
}

class _DeviceInfoPanel extends StatelessWidget {
  const _DeviceInfoPanel({required this.device});

  final NgmyVirtualDeviceIdentity device;

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(12),
      children: [
        Text(device.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
        const SizedBox(height: 4),
        Text(
          'Independent virtual hardware — not linked to your iPhone or real device.',
          style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 10, height: 1.35),
        ),
        const SizedBox(height: 12),
        _row('Serial', device.serialNumber),
        _row('Model', device.modelName),
        _row('Device ID', device.deviceId),
        _row('IMEI', device.imei),
        _row('MAC', device.macAddress),
        _row('OS', '${device.osName} ${device.osVersion}'),
        _row('Location', device.locationLabel),
        _row('Coordinates', '${device.virtualLat.toStringAsFixed(4)}, ${device.virtualLng.toStringAsFixed(4)}'),
        _row('Timezone', device.timezone),
        _row('Provisioned', device.createdAt.length >= 10 ? device.createdAt.substring(0, 10) : device.createdAt),
      ],
    );
  }

  Widget _row(String label, String value) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label.toUpperCase(), style: TextStyle(color: Colors.white.withValues(alpha: 0.4), fontSize: 8, letterSpacing: 0.8)),
          const SizedBox(height: 2),
          Text(value, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w600)),
        ],
      ),
    );
  }
}
