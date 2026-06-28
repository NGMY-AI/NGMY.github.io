import 'dart:async';

import 'dart:convert';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_studio_hub.dart';
import 'ngmy_virtual_device_browser.dart';

const String _kPrefsPrefix = 'ngmy_virtual_device_v1_';

void showNgmyVirtualDevice({
  required BuildContext context,
  String? userEmail,
}) {
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      fullscreenDialog: true,
      builder: (_) => NgmyVirtualDeviceScreen(userEmail: userEmail ?? ''),
    ),
  );
}

class NgmyVirtualDeviceIdentity {
  NgmyVirtualDeviceIdentity({
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
  static String _key(String email) => '$_kPrefsPrefix${email.trim().toLowerCase()}';

  static Future<NgmyVirtualDeviceIdentity> loadOrCreate(String userEmail) async {
    final prefs = await SharedPreferences.getInstance();
    final key = _key(userEmail);
    final raw = prefs.getString(key);
    if (raw != null && raw.isNotEmpty) {
      try {
        final decoded = jsonDecode(raw);
        if (decoded is Map) {
          return NgmyVirtualDeviceIdentity.fromJson(Map<String, dynamic>.from(decoded));
        }
      } catch (_) {}
    }
    final created = _generate();
    await prefs.setString(key, jsonEncode(created.toJson()));
    return created;
  }

  static Future<NgmyVirtualDeviceIdentity> factoryReset(String userEmail) async {
    final prefs = await SharedPreferences.getInstance();
    final created = _generate();
    await prefs.setString(_key(userEmail), jsonEncode(created.toJson()));
    return created;
  }

  static Future<NgmyVirtualDeviceIdentity> relocate(String userEmail, NgmyVirtualDeviceIdentity current) async {
    final spot = _randomLocation();
    final next = NgmyVirtualDeviceIdentity(
      serialNumber: current.serialNumber,
      modelName: current.modelName,
      deviceId: current.deviceId,
      macAddress: current.macAddress,
      imei: current.imei,
      osName: current.osName,
      osVersion: current.osVersion,
      virtualCity: spot.$1,
      virtualCountry: spot.$2,
      virtualLat: spot.$3,
      virtualLng: spot.$4,
      timezone: spot.$5,
      createdAt: current.createdAt,
    );
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(userEmail), jsonEncode(next.toJson()));
    return next;
  }

  static NgmyVirtualDeviceIdentity _generate() {
    final r = Random.secure();
    final serial = List.generate(4, (_) => r.nextInt(256)).map((b) => b.toRadixString(16).padLeft(2, '0').toUpperCase()).join();
    final spot = _randomLocation();
    return NgmyVirtualDeviceIdentity(
      serialNumber: 'VND-${serial.substring(0, 4)}-${serial.substring(4, 8)}',
      modelName: 'NGMY Virtual Phone ${_modelVariants[r.nextInt(_modelVariants.length)]}',
      deviceId: _hex(r, 16),
      macAddress: '${_hex(r, 1)}:${_hex(r, 1)}:${_hex(r, 1)}:${_hex(r, 1)}:${_hex(r, 1)}:${_hex(r, 1)}'.toUpperCase(),
      imei: List.generate(15, (_) => r.nextInt(10)).join(),
      osName: 'NGMY OS',
      osVersion: '${r.nextInt(3) + 12}.${r.nextInt(5)}.${r.nextInt(9)}',
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

  static const _modelVariants = ['Air', 'Pro', 'Lite', 'Max', 'Mini'];

  static (String, String, double, double, String) _randomLocation() {
    const spots = [
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
    ];
    return spots[Random.secure().nextInt(spots.length)];
  }
}

class NgmyVirtualDeviceScreen extends StatefulWidget {
  const NgmyVirtualDeviceScreen({super.key, required this.userEmail});

  final String userEmail;

  @override
  State<NgmyVirtualDeviceScreen> createState() => _NgmyVirtualDeviceScreenState();
}

class _NgmyVirtualDeviceScreenState extends State<NgmyVirtualDeviceScreen> {
  NgmyVirtualDeviceIdentity? _device;
  NgmyVirtualDeviceBrowserControls? _browser;
  var _tab = 0;
  var _loading = true;
  var _powerOn = true;

  @override
  void initState() {
    super.initState();
    unawaited(_boot());
  }

  Future<void> _boot() async {
    final d = await NgmyVirtualDeviceStore.loadOrCreate(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _device = d;
      _loading = false;
    });
  }

  Future<void> _factoryReset() async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('New virtual device?'),
        content: const Text(
          'This wipes the current virtual phone and creates a brand-new one with a new serial number and location.',
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Create new')),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    setState(() => _loading = true);
    final d = await NgmyVirtualDeviceStore.factoryReset(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _device = d;
      _loading = false;
      _tab = 0;
      _powerOn = true;
    });
    await _browser?.goHome();
  }

  Future<void> _relocate() async {
    final current = _device;
    if (current == null) return;
    final d = await NgmyVirtualDeviceStore.relocate(widget.userEmail, current);
    if (!mounted) return;
    setState(() => _device = d);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Virtual location → ${d.locationLabel}')));
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF1F5F9);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        title: const Text('Virtual Device'),
        actions: [
          IconButton(
            tooltip: 'Relocate device',
            onPressed: _device == null ? null : () => unawaited(_relocate()),
            icon: const Icon(Icons.public_rounded),
          ),
          IconButton(
            tooltip: 'New device',
            onPressed: _device == null ? null : () => unawaited(_factoryReset()),
            icon: const Icon(Icons.refresh_rounded),
          ),
        ],
      ),
      body: _loading || _device == null
          ? const Center(child: CircularProgressIndicator())
          : LayoutBuilder(
              builder: (context, constraints) {
                final phoneW = constraints.maxWidth.clamp(280.0, 420.0);
                return Center(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                    child: Column(
                      children: [
                        Text(
                          'Watch on a separate virtual phone — not on your real device.',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Theme.of(context).colorScheme.onSurface.withValues(alpha: 0.65),
                            fontSize: 13,
                            height: 1.4,
                          ),
                        ),
                        const SizedBox(height: 16),
                        _VirtualPhoneFrame(
                          width: phoneW,
                          device: _device!,
                          powerOn: _powerOn,
                          tab: _tab,
                          browser: _browser,
                          onBrowserReady: (c) => _browser = c,
                          onTab: (i) => setState(() => _tab = i),
                          onPowerToggle: () => setState(() => _powerOn = !_powerOn),
                        ),
                      ],
                    ),
                  ),
                );
              },
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
    required this.browser,
    required this.onBrowserReady,
    required this.onTab,
    required this.onPowerToggle,
  });

  final double width;
  final NgmyVirtualDeviceIdentity device;
  final bool powerOn;
  final int tab;
  final NgmyVirtualDeviceBrowserControls? browser;
  final void Function(NgmyVirtualDeviceBrowserControls controls) onBrowserReady;
  final void Function(int index) onTab;
  final VoidCallback onPowerToggle;

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
                        ? NgmyVirtualDeviceBrowser(onReady: onBrowserReady)
                        : _DeviceInfoPanel(device: device))
                    : const _PowerOffScreen(),
              ),
              if (powerOn && tab == 0) _BrowserToolbar(controls: browser),
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

class _BrowserToolbar extends StatelessWidget {
  const _BrowserToolbar({required this.controls});

  final NgmyVirtualDeviceBrowserControls? controls;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xFF1F2937),
      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          _tool(Icons.arrow_back_rounded, () async => await controls?.goBack()),
          _tool(Icons.arrow_forward_rounded, () async => await controls?.goForward()),
          _tool(Icons.home_rounded, () async => await controls?.goHome()),
          _tool(Icons.refresh_rounded, () async => await controls?.reload()),
        ],
      ),
    );
  }

  Widget _tool(IconData icon, Future<void> Function()? tap) {
    return IconButton(
      visualDensity: VisualDensity.compact,
      iconSize: 20,
      color: Colors.white70,
      onPressed: controls == null || tap == null ? null : () => unawaited(tap()),
      icon: Icon(icon),
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
        const Text('This is a standalone virtual device', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
        const SizedBox(height: 4),
        Text(
          'Browsing and video playback happen inside this phone — separate from your real device.',
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
