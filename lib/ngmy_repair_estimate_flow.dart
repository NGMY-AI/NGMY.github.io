import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_invoice_protected_preview.dart';
import 'ngmy_invoice_templates.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_repair_estimate_ai.dart';

/// Photo → AI repair estimate → luxury template preview → download.
Future<void> showNgmyRepairEstimateFlow({
  required BuildContext context,
  required String geminiApiKey,
  required Future<String> Function() refreshApiKey,
  String initialCity = '',
  String initialState = '',
  String businessName = '',
  String businessPhone = '',
  String businessAddress = '',
  void Function(NgmyRepairEstimateResult estimate, String templateId)? onApplyToInvoice,
}) async {
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _RepairEstimateSheet(
      geminiApiKey: geminiApiKey,
      refreshApiKey: refreshApiKey,
      initialCity: initialCity,
      initialState: initialState,
      businessName: businessName,
      businessPhone: businessPhone,
      businessAddress: businessAddress,
      onApplyToInvoice: onApplyToInvoice,
    ),
  );
}

class _RepairEstimateSheet extends StatefulWidget {
  const _RepairEstimateSheet({
    required this.geminiApiKey,
    required this.refreshApiKey,
    required this.initialCity,
    required this.initialState,
    required this.businessName,
    required this.businessPhone,
    required this.businessAddress,
    this.onApplyToInvoice,
  });

  final String geminiApiKey;
  final Future<String> Function() refreshApiKey;
  final String initialCity;
  final String initialState;
  final String businessName;
  final String businessPhone;
  final String businessAddress;
  final void Function(NgmyRepairEstimateResult estimate, String templateId)? onApplyToInvoice;

  @override
  State<_RepairEstimateSheet> createState() => _RepairEstimateSheetState();
}

class _RepairEstimateSheetState extends State<_RepairEstimateSheet> {
  final _cityC = TextEditingController();
  final _stateC = TextEditingController();
  final _notesC = TextEditingController();
  final _clientC = TextEditingController();
  final _previewKey = GlobalKey();
  Uint8List? _photoBytes;
  String _mime = 'image/jpeg';
  String _templateId = kNgmyEstimateTemplateIds.first;
  NgmyRepairEstimateResult? _estimate;
  bool _busy = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _cityC.text = widget.initialCity;
    _stateC.text = widget.initialState;
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
    final img = await ImagePicker().pickImage(source: source, imageQuality: 88, maxWidth: 1600);
    if (img == null) return;
    final bytes = await img.readAsBytes();
    if (!mounted) return;
    setState(() {
      _photoBytes = bytes;
      _mime = img.mimeType ?? 'image/jpeg';
      _estimate = null;
      _error = null;
    });
  }

  Future<void> _generate() async {
    if (_photoBytes == null) {
      setState(() => _error = 'Take or upload a photo first.');
      return;
    }
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
      await Future.delayed(const Duration(milliseconds: 200));
      await WidgetsBinding.instance.endOfFrame;
      final boundary = _previewKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) throw Exception('Preview not ready.');
      final image = await boundary.toImage(pixelRatio: 3);
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

  NgmyInvoicePreviewData _previewData() {
    final e = _estimate!;
    final now = DateTime.now();
    final issued = '${now.month.toString().padLeft(2, '0')}/${now.day.toString().padLeft(2, '0')}/${now.year}';
    final due = now.add(const Duration(days: 30));
    final dueStr = '${due.month.toString().padLeft(2, '0')}/${due.day.toString().padLeft(2, '0')}/${due.year}';
    final loc = [_cityC.text.trim(), _stateC.text.trim()].where((s) => s.isNotEmpty).join(', ');
    return NgmyInvoicePreviewData(
      templateId: _templateId,
      documentKind: 'estimate',
      businessName: widget.businessName.isNotEmpty ? widget.businessName : 'Your Business',
      bizStreet: widget.businessAddress,
      bizCityStateZip: loc,
      bizPhone: widget.businessPhone,
      invoiceNo: '${now.millisecondsSinceEpoch % 100000}',
      issuedDate: issued,
      dueDate: dueStr,
      clientName: _clientC.text.trim().isEmpty ? 'Valued Customer' : _clientC.text.trim(),
      clientEmail: '',
      itemName: e.itemName,
      itemPrice: e.total.toStringAsFixed(2),
      itemQty: '1',
      itemDiscount: '0',
      itemDesc: e.combinedDescription,
      paymentInfo: e.paymentTerms,
      subtotal: e.total,
      providerSignature: const [],
      clientSignature: const [],
      providerPhotoBytes: _photoBytes,
    );
  }

  @override
  Widget build(BuildContext context) {
    final h = MediaQuery.sizeOf(context).height * 0.92;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Container(
        height: h,
        margin: const EdgeInsets.fromLTRB(12, 12, 12, 16),
        decoration: BoxDecoration(
          color: const Color(0xFF0A1222),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: const Color(0xFFD4AF37).withValues(alpha: 0.35)),
        ),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      gradient: const LinearGradient(colors: [Color(0xFFD4AF37), Color(0xFFCA8A04)]),
                    ),
                    child: const Icon(Icons.handyman_rounded, color: Colors.white, size: 20),
                  ),
                  const SizedBox(width: 10),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('AI Repair Estimate', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                        Text('Photo → city pricing → luxury PDF', style: TextStyle(color: Colors.white54, fontSize: 11)),
                      ],
                    ),
                  ),
                  IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                ],
              ),
            ),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    GestureDetector(
                      onTap: () => _showPhotoOptions(),
                      child: Container(
                        height: 160,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: const Color(0xFF10B981).withValues(alpha: 0.5), width: 1.5),
                          color: Colors.black26,
                          image: _photoBytes != null
                              ? DecorationImage(image: MemoryImage(_photoBytes!), fit: BoxFit.cover)
                              : null,
                        ),
                        child: _photoBytes == null
                            ? const Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Icon(Icons.add_a_photo_rounded, color: Color(0xFF10B981), size: 40),
                                  SizedBox(height: 8),
                                  Text('Tap to photograph fixture / job site', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
                                ],
                              )
                            : null,
                      ),
                    ),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        Expanded(child: _field(_cityC, 'City', Icons.location_city_rounded)),
                        const SizedBox(width: 8),
                        Expanded(child: _field(_stateC, 'State', Icons.map_rounded)),
                      ],
                    ),
                    const SizedBox(height: 8),
                    _field(_notesC, 'What needs fixing? (optional)', Icons.notes_rounded, maxLines: 2),
                    const SizedBox(height: 8),
                    _field(_clientC, 'Customer name (optional)', Icons.person_outline_rounded),
                    const SizedBox(height: 12),
                    Text('Estimate template', style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 12, fontWeight: FontWeight.w800)),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children: kNgmyEstimateTemplateIds.map((id) {
                        final selected = _templateId == id;
                        return ChoiceChip(
                          label: Text(ngmyEstimateTemplateLabel(id)),
                          selected: selected,
                          onSelected: (_) => setState(() => _templateId = id),
                          selectedColor: const Color(0xFFD4AF37).withValues(alpha: 0.35),
                          labelStyle: TextStyle(
                            color: selected ? const Color(0xFFF5E6B8) : Colors.white70,
                            fontWeight: FontWeight.w800,
                            fontSize: 11,
                          ),
                        );
                      }).toList(),
                    ),
                    const SizedBox(height: 14),
                    FilledButton.icon(
                      onPressed: _busy ? null : _generate,
                      icon: _busy
                          ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Icon(Icons.auto_awesome_rounded),
                      label: Text(_busy ? 'Analyzing photo…' : 'Generate estimate'),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF10B981),
                        minimumSize: const Size(double.infinity, 48),
                      ),
                    ),
                    if (_error != null) ...[
                      const SizedBox(height: 10),
                      Text(_error!, style: const TextStyle(color: Color(0xFFF87171), fontSize: 12)),
                    ],
                    if (_estimate != null) ...[
                      const SizedBox(height: 16),
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: const Color(0xFF10B981).withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: const Color(0xFF10B981).withValues(alpha: 0.4)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(_estimate!.itemName, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                            const SizedBox(height: 4),
                            Text(
                              '\$${_estimate!.total.toStringAsFixed(2)}',
                              style: const TextStyle(color: Color(0xFF6EE7B7), fontWeight: FontWeight.w900, fontSize: 28),
                            ),
                            if (_estimate!.locationNote.isNotEmpty)
                              Padding(
                                padding: const EdgeInsets.only(top: 6),
                                child: Text(_estimate!.locationNote, style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 11)),
                              ),
                          ],
                        ),
                      ),
                      const SizedBox(height: 14),
                      RepaintBoundary(
                        key: _previewKey,
                        child: NgmyInvoiceProtectedPreview(
                          locked: false,
                          child: NgmyInvoicePreview(data: _previewData()),
                        ),
                      ),
                      const SizedBox(height: 12),
                      Row(
                        children: [
                          Expanded(
                            child: OutlinedButton.icon(
                              onPressed: _download,
                              icon: const Icon(Icons.download_rounded),
                              label: const Text('Download'),
                              style: OutlinedButton.styleFrom(foregroundColor: const Color(0xFF10B981)),
                            ),
                          ),
                          const SizedBox(width: 10),
                          if (widget.onApplyToInvoice != null)
                            Expanded(
                              child: FilledButton.icon(
                                onPressed: () {
                                  widget.onApplyToInvoice!(_estimate!, _templateId);
                                  Navigator.pop(context);
                                  ScaffoldMessenger.of(context).showSnackBar(
                                    const SnackBar(content: Text('Estimate loaded into invoice editor.'), backgroundColor: Color(0xFF16A34A)),
                                  );
                                },
                                icon: const Icon(Icons.receipt_long_rounded, size: 18),
                                label: const Text('Use in invoice'),
                                style: FilledButton.styleFrom(backgroundColor: const Color(0xFFD4AF37)),
                              ),
                            ),
                        ],
                      ),
                    ],
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _showPhotoOptions() {
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF1E293B),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(16))),
      builder: (ctx) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: const Icon(Icons.camera_alt_rounded, color: Color(0xFF10B981)),
              title: const Text('Take photo', style: TextStyle(color: Colors.white)),
              onTap: () {
                Navigator.pop(ctx);
                _pickPhoto(ImageSource.camera);
              },
            ),
            ListTile(
              leading: const Icon(Icons.photo_library_rounded, color: Color(0xFF10B981)),
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
        fillColor: Colors.black26,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
      ),
    );
  }
}
