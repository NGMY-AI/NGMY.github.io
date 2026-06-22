import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_qr_download.dart';
import 'ngmy_repair_estimate_ai.dart';
import 'ngmy_repair_estimate_business_store.dart';
import 'ngmy_repair_estimate_payments.dart';
import 'ngmy_repair_estimate_preview.dart';

/// Photo → repair estimate → compact preview → download.
Future<void> showNgmyRepairEstimateFlow({
  required BuildContext context,
  required String geminiApiKey,
  required Future<String> Function() refreshApiKey,
  String initialCity = '',
  String initialState = '',
  String businessName = '',
  String businessPhone = '',
  String businessAddress = '',
  dynamic user,
  dynamic config,
  bool isAdmin = false,
  Future<bool> Function(double amount, String description)? onCharge,
  VoidCallback? onDataChanged,
  Future<bool> Function()? onPersistConfig,
}) async {
  if (config != null && user != null && onCharge != null && onDataChanged != null && onPersistConfig != null) {
    final email = ((user as dynamic).email as String?) ?? '';
    final admin = isAdmin || ((user as dynamic).isAdmin == true);
    if (!admin && !NgmyRepairEstimatePayments.hasActiveSubscription(config, email)) {
      final paid = await NgmyRepairEstimatePayments.confirmAndChargeMonthlyAccess(
        context: context,
        user: user,
        config: config,
        onCharge: onCharge,
        onDataChanged: onDataChanged,
        onPersistConfig: onPersistConfig,
      );
      if (!paid) return;
    }
  }

  if (!context.mounted) return;
  await showDialog<void>(
    context: context,
    barrierColor: const Color(0xFF060B14),
    builder: (ctx) => Dialog(
      backgroundColor: const Color(0xFF0F172A),
      insetPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 14),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
      child: _RepairEstimateSheet(
        geminiApiKey: geminiApiKey,
        refreshApiKey: refreshApiKey,
        initialCity: initialCity,
        initialState: initialState,
        seedBusinessName: businessName,
        seedBusinessPhone: businessPhone,
        seedBusinessStreet: businessAddress,
        user: user,
        config: config,
        isAdmin: isAdmin,
        onCharge: onCharge,
        onDataChanged: onDataChanged,
        onPersistConfig: onPersistConfig,
      ),
    ),
  );
}

class _RepairEstimateSheet extends StatefulWidget {
  const _RepairEstimateSheet({
    required this.geminiApiKey,
    required this.refreshApiKey,
    required this.initialCity,
    required this.initialState,
    required this.seedBusinessName,
    required this.seedBusinessPhone,
    required this.seedBusinessStreet,
    this.user,
    this.config,
    this.isAdmin = false,
    this.onCharge,
    this.onDataChanged,
    this.onPersistConfig,
  });

  final String geminiApiKey;
  final Future<String> Function() refreshApiKey;
  final String initialCity;
  final String initialState;
  final String seedBusinessName;
  final String seedBusinessPhone;
  final String seedBusinessStreet;
  final dynamic user;
  final dynamic config;
  final bool isAdmin;
  final Future<bool> Function(double amount, String description)? onCharge;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

  @override
  State<_RepairEstimateSheet> createState() => _RepairEstimateSheetState();
}

class _RepairEstimateSheetState extends State<_RepairEstimateSheet> {
  static const _accent = Color(0xFF0D9488);
  static const _accent2 = Color(0xFF14B8A6);
  static const _surface = Color(0xFF0F172A);
  static const _panel = Color(0xFF1E293B);

  final _cityC = TextEditingController();
  final _stateC = TextEditingController();
  final _notesC = TextEditingController();
  final _clientC = TextEditingController();
  final _previewKey = GlobalKey();
  Uint8List? _photoBytes;
  MemoryImage? _photoImage;
  String _mime = 'image/jpeg';
  String _templateId = kNgmyEstimateTemplateIds.first;
  NgmyRepairEstimateResult? _estimate;
  NgmyRepairEstimateBusinessInfo _business = const NgmyRepairEstimateBusinessInfo();
  bool _busy = false;
  bool _loadingBiz = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _cityC.text = widget.initialCity;
    _stateC.text = widget.initialState;
    _loadBusiness();
  }

  Future<void> _loadBusiness() async {
    final loc = [widget.initialCity, widget.initialState].where((s) => s.trim().isNotEmpty).join(', ');
    final info = await NgmyRepairEstimateBusinessStore.loadOrSeed(
      seedName: widget.seedBusinessName,
      seedPhone: widget.seedBusinessPhone,
      seedStreet: widget.seedBusinessStreet,
      seedCityStateZip: loc,
    );
    if (!mounted) return;
    setState(() {
      _business = info;
      _loadingBiz = false;
    });
  }

  @override
  void dispose() {
    _cityC.dispose();
    _stateC.dispose();
    _notesC.dispose();
    _clientC.dispose();
    super.dispose();
  }

  Future<void> _pickPhoto(ImageSource source) async {
    final img = await ImagePicker().pickImage(source: source, imageQuality: 85, maxWidth: 1400);
    if (img == null) return;
    final bytes = await img.readAsBytes();
    if (!mounted) return;
    setState(() {
      _photoBytes = bytes;
      _photoImage = MemoryImage(bytes);
      _mime = img.mimeType ?? 'image/jpeg';
      _estimate = null;
      _error = null;
    });
  }

  Future<bool> _ensureEstimateAccess() async {
    if (widget.config == null || widget.user == null || widget.onCharge == null) return true;
    final email = ((widget.user as dynamic).email as String?) ?? '';
    final admin = widget.isAdmin || ((widget.user as dynamic).isAdmin == true);
    if (admin || NgmyRepairEstimatePayments.hasActiveSubscription(widget.config, email)) return true;
    if (widget.onDataChanged == null || widget.onPersistConfig == null) return false;
    return NgmyRepairEstimatePayments.confirmAndChargeMonthlyAccess(
      context: context,
      user: widget.user,
      config: widget.config,
      onCharge: widget.onCharge!,
      onDataChanged: widget.onDataChanged!,
      onPersistConfig: widget.onPersistConfig!,
    );
  }

  Future<void> _generate() async {
    if (_photoBytes == null) {
      setState(() => _error = 'Add a photo first — we scan it even if you skip notes.');
      return;
    }
    if (!await _ensureEstimateAccess()) return;
    if (!mounted) return;
    setState(() {
      _busy = true;
      _error = null;
    });
    var key = widget.geminiApiKey.trim();
    if (key.isEmpty) key = (await widget.refreshApiKey()).trim();
    final out = await ngmyGenerateRepairEstimate(
      apiKey: key,
      imageBytes: _photoBytes!,
      mimeType: _mime,
      city: _cityC.text.trim(),
      state: _stateC.text.trim(),
      userNotes: _notesC.text.trim(),
    );
    if (!mounted) return;
    setState(() {
      _busy = false;
      _estimate = out.result;
      _error = out.error;
    });
  }

  Future<void> _download() async {
    try {
      await Future.delayed(const Duration(milliseconds: 150));
      await WidgetsBinding.instance.endOfFrame;
      final boundary = _previewKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) throw Exception('Preview not ready.');
      final image = await boundary.toImage(pixelRatio: 2);
      final bytes = (await image.toByteData(format: ui.ImageByteFormat.png))?.buffer.asUint8List();
      if (bytes == null) throw Exception('Could not render estimate.');
      final slug = DateTime.now().millisecondsSinceEpoch;
      final msg = await downloadNgmyQrImage(bytes, 'estimate_${_templateId}_$slug');
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg), backgroundColor: const Color(0xFF16A34A)));
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Download failed: $e')));
      }
    }
  }

  NgmyRepairEstimatePreviewData _previewData() {
    final e = _estimate!;
    final now = DateTime.now();
    final issued = '${now.month.toString().padLeft(2, '0')}/${now.day.toString().padLeft(2, '0')}/${now.year}';
    final due = now.add(const Duration(days: 30));
    final dueStr = '${due.month.toString().padLeft(2, '0')}/${due.day.toString().padLeft(2, '0')}/${due.year}';
    final jobLoc = [_cityC.text.trim(), _stateC.text.trim()].where((s) => s.isNotEmpty).join(', ');
    final bizCity = _business.cityStateZip.trim().isNotEmpty ? _business.cityStateZip.trim() : jobLoc;
    return NgmyRepairEstimatePreviewData(
      templateId: _templateId,
      businessName: _business.name,
      businessPhone: _business.phone,
      businessStreet: _business.street,
      businessCityStateZip: bizCity,
      estimateNo: '${now.millisecondsSinceEpoch % 100000}',
      issuedDate: issued,
      validUntil: dueStr,
      clientName: _clientC.text.trim(),
      estimate: e,
      photoBytes: _photoBytes,
    );
  }

  void _openBusinessProfile() {
    final nameC = TextEditingController(text: _business.name);
    final phoneC = TextEditingController(text: _business.phone);
    final streetC = TextEditingController(text: _business.street);
    final cityC = TextEditingController(text: _business.cityStateZip);
    final emailC = TextEditingController(text: _business.email);

    showDialog<void>(
      context: context,
      barrierColor: const Color(0xFF060B14),
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF131B2E),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        title: const Row(
          children: [
            Icon(Icons.storefront_rounded, color: _accent, size: 22),
            SizedBox(width: 8),
            Text('Your business', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
          ],
        ),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _bizField(nameC, 'Business name', Icons.business_rounded),
              const SizedBox(height: 8),
              _bizField(phoneC, 'Phone', Icons.phone_rounded),
              const SizedBox(height: 8),
              _bizField(streetC, 'Street address', Icons.home_work_rounded),
              const SizedBox(height: 8),
              _bizField(cityC, 'City, state, ZIP', Icons.location_on_rounded),
              const SizedBox(height: 8),
              _bizField(emailC, 'Email (optional)', Icons.email_outlined),
              const SizedBox(height: 10),
              Text(
                'Saved on this device only — not uploaded to the cloud.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10),
              ),
            ],
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(
            onPressed: () async {
              final info = NgmyRepairEstimateBusinessInfo(
                name: nameC.text.trim(),
                phone: phoneC.text.trim(),
                street: streetC.text.trim(),
                cityStateZip: cityC.text.trim(),
                email: emailC.text.trim(),
              );
              await NgmyRepairEstimateBusinessStore.save(info);
              if (!mounted) return;
              setState(() => _business = info);
              if (ctx.mounted) Navigator.pop(ctx);
              if (mounted) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Business info saved on this device.'), backgroundColor: Color(0xFF16A34A)),
                );
              }
            },
            style: FilledButton.styleFrom(backgroundColor: _accent),
            child: const Text('Save'),
          ),
        ],
      ),
    );
  }

  Widget _bizField(TextEditingController c, String hint, IconData icon) {
    return TextField(
      controller: c,
      style: const TextStyle(color: Colors.white, fontSize: 13),
      decoration: InputDecoration(
        hintText: hint,
        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 12),
        prefixIcon: Icon(icon, size: 18, color: Colors.white38),
        filled: true,
        fillColor: const Color(0xFF0A1222),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
      ),
    );
  }

  Widget _pricingBreakdownCard() {
    final e = _estimate!;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [_panel, _surface],
        ),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: _accent.withValues(alpha: 0.4)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: _accent.withValues(alpha: 0.2),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(Icons.verified_rounded, size: 14, color: Color(0xFF5EEAD4)),
                    const SizedBox(width: 4),
                    Text(
                      'Fair market · ${e.jobTierLabel}',
                      style: const TextStyle(color: Color(0xFF99F6E4), fontSize: 10, fontWeight: FontWeight.w800),
                    ),
                  ],
                ),
              ),
              const Spacer(),
              Text(
                '\$${e.total.toStringAsFixed(2)}',
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(e.itemName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
          const SizedBox(height: 10),
          if (e.estimatedLaborHours > 0 && e.laborRatePerHour > 0)
            _breakdownRow(
              'Labor',
              '${e.estimatedLaborHours.toStringAsFixed(1)} hr × \$${e.laborRatePerHour.toStringAsFixed(0)}/hr',
              e.laborCost,
            )
          else
            _breakdownRow('Labor', 'Skilled repair time', e.laborCost),
          const SizedBox(height: 4),
          _breakdownRow('Materials', 'Parts at retail cost', e.materialsCost),
          if (e.pricingNote.trim().isNotEmpty) ...[
            const SizedBox(height: 8),
            Text(
              e.pricingNote.trim(),
              style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 10, height: 1.35, fontStyle: FontStyle.italic),
            ),
          ],
        ],
      ),
    );
  }

  Widget _breakdownRow(String label, String detail, double amount) {
    return Row(
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(label, style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 11, fontWeight: FontWeight.w700)),
              Text(detail, style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 9)),
            ],
          ),
        ),
        Text('\$${amount.toStringAsFixed(2)}', style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 11, fontWeight: FontWeight.w800)),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final maxH = MediaQuery.sizeOf(context).height * 0.92;
    final previewMaxH = MediaQuery.sizeOf(context).height * 0.38;

    return ConstrainedBox(
      constraints: BoxConstraints(maxHeight: maxH),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            padding: const EdgeInsets.fromLTRB(14, 12, 6, 12),
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [_accent.withValues(alpha: 0.35), _surface]),
              border: Border(bottom: BorderSide(color: _accent.withValues(alpha: 0.25))),
            ),
            child: Row(
              children: [
                Material(
                  color: Colors.transparent,
                  child: InkWell(
                    onTap: _loadingBiz ? null : _openBusinessProfile,
                    borderRadius: BorderRadius.circular(24),
                    child: Container(
                      width: 46,
                      height: 46,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(colors: [_accent, _accent2]),
                        border: Border.all(color: Colors.white24),
                      ),
                      child: Icon(
                        _business.name.trim().isNotEmpty ? Icons.store_rounded : Icons.person_rounded,
                        color: Colors.white,
                        size: 22,
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('Repair Estimate', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                      Text(
                        _business.name.trim().isEmpty ? 'Fair AI pricing · tap profile for your business' : _business.name.trim(),
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.58), fontSize: 11),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ],
                  ),
                ),
                IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.close_rounded, color: Colors.white70),
                ),
              ],
            ),
          ),
          Flexible(
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(14, 12, 14, 14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  GestureDetector(
                    onTap: _showPhotoOptions,
                    child: Container(
                      height: 148,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: _photoImage == null ? _accent.withValues(alpha: 0.5) : Colors.white12,
                          width: _photoImage == null ? 1.5 : 1,
                        ),
                        color: _panel,
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: _photoImage == null
                          ? Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Container(
                                  padding: const EdgeInsets.all(12),
                                  decoration: BoxDecoration(
                                    color: _accent.withValues(alpha: 0.15),
                                    shape: BoxShape.circle,
                                  ),
                                  child: Icon(Icons.photo_camera_rounded, color: _accent.withValues(alpha: 0.95), size: 32),
                                ),
                                const SizedBox(height: 8),
                                const Text('Photograph the repair', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                                Text(
                                  'AI prices from the photo — notes optional',
                                  style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11),
                                ),
                              ],
                            )
                          : Stack(
                              fit: StackFit.expand,
                              children: [
                                Image(
                                  image: _photoImage!,
                                  width: double.infinity,
                                  height: 148,
                                  fit: BoxFit.cover,
                                  gaplessPlayback: true,
                                  filterQuality: FilterQuality.medium,
                                ),
                                Positioned(
                                  right: 8,
                                  bottom: 8,
                                  child: Material(
                                    color: Colors.black54,
                                    borderRadius: BorderRadius.circular(8),
                                    child: InkWell(
                                      onTap: _showPhotoOptions,
                                      borderRadius: BorderRadius.circular(8),
                                      child: const Padding(
                                        padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                                        child: Row(
                                          mainAxisSize: MainAxisSize.min,
                                          children: [
                                            Icon(Icons.refresh_rounded, color: Colors.white, size: 14),
                                            SizedBox(width: 4),
                                            Text('Retake', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      Expanded(child: _field(_cityC, 'City (for local rates)', Icons.location_city_rounded)),
                      const SizedBox(width: 8),
                      SizedBox(width: 88, child: _field(_stateC, 'State', Icons.map_rounded)),
                    ],
                  ),
                  const SizedBox(height: 8),
                  _field(_notesC, 'Describe the issue (optional)', Icons.edit_note_rounded, maxLines: 2),
                  const SizedBox(height: 8),
                  _field(_clientC, 'Customer name (optional)', Icons.person_outline_rounded),
                  const SizedBox(height: 12),
                  Text('Document style', style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 11, fontWeight: FontWeight.w800)),
                  const SizedBox(height: 8),
                  Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: kNgmyEstimateTemplateIds.map((id) {
                      final selected = _templateId == id;
                      return Material(
                        color: selected ? _accent.withValues(alpha: 0.22) : _panel,
                        borderRadius: BorderRadius.circular(10),
                        child: InkWell(
                          onTap: () => setState(() => _templateId = id),
                          borderRadius: BorderRadius.circular(10),
                          child: Container(
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(10),
                              border: Border.all(color: selected ? _accent : Colors.white12),
                            ),
                            child: Text(
                              ngmyEstimateTemplateLabel(id),
                              style: TextStyle(
                                color: selected ? const Color(0xFF99F6E4) : Colors.white60,
                                fontWeight: FontWeight.w800,
                                fontSize: 11,
                              ),
                            ),
                          ),
                        ),
                      );
                    }).toList(),
                  ),
                  const SizedBox(height: 14),
                  FilledButton.icon(
                    onPressed: _busy ? null : _generate,
                    icon: _busy
                        ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                        : const Icon(Icons.price_check_rounded, size: 20),
                    label: Text(_busy ? 'Analyzing job & pricing…' : 'Get fair estimate'),
                    style: FilledButton.styleFrom(
                      backgroundColor: _accent,
                      foregroundColor: Colors.white,
                      minimumSize: const Size(double.infinity, 48),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                  ),
                  if (_error != null) ...[
                    const SizedBox(height: 8),
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: const Color(0xFF7F1D1D).withValues(alpha: 0.35),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Text(_error!, style: const TextStyle(color: Color(0xFFFECACA), fontSize: 12)),
                    ),
                  ],
                  if (_estimate != null) ...[
                    const SizedBox(height: 16),
                    _pricingBreakdownCard(),
                    const SizedBox(height: 14),
                    Text('Document preview', style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontSize: 11, fontWeight: FontWeight.w700)),
                    const SizedBox(height: 8),
                    Container(
                      width: double.infinity,
                      constraints: BoxConstraints(maxHeight: previewMaxH),
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: const Color(0xFF020617),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: Colors.white10),
                      ),
                      child: Center(
                        child: FittedBox(
                          fit: BoxFit.contain,
                          child: RepaintBoundary(
                            key: _previewKey,
                            child: NgmyRepairEstimatePreview(data: _previewData()),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 12),
                    OutlinedButton.icon(
                      onPressed: _download,
                      icon: const Icon(Icons.download_rounded, size: 18),
                      label: const Text('Download estimate'),
                      style: OutlinedButton.styleFrom(
                        foregroundColor: const Color(0xFF99F6E4),
                        side: BorderSide(color: _accent.withValues(alpha: 0.65)),
                        minimumSize: const Size(double.infinity, 46),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  void _showPhotoOptions() {
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF131B2E),
      barrierColor: const Color(0xFF060B14),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(16))),
      builder: (ctx) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: const Icon(Icons.camera_alt_rounded, color: _accent),
              title: const Text('Take photo', style: TextStyle(color: Colors.white)),
              onTap: () {
                Navigator.pop(ctx);
                _pickPhoto(ImageSource.camera);
              },
            ),
            ListTile(
              leading: const Icon(Icons.photo_library_rounded, color: _accent),
              title: const Text('Choose from gallery', style: TextStyle(color: Colors.white)),
              onTap: () {
                Navigator.pop(ctx);
                _pickPhoto(ImageSource.gallery);
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _field(TextEditingController c, String hint, IconData icon, {int maxLines = 1}) {
    return TextField(
      controller: c,
      maxLines: maxLines,
      style: const TextStyle(color: Colors.white, fontSize: 13),
      decoration: InputDecoration(
        hintText: hint,
        hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.35), fontSize: 12),
        prefixIcon: Icon(icon, size: 18, color: Colors.white38),
        filled: true,
        fillColor: _panel,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
      ),
    );
  }
}
