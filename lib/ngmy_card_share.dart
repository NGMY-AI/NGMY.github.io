import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_business_card_models.dart';
import 'ngmy_card_nfc.dart';

// ═════════════════════════════════════════════════════════════════════════════
// SHARING A BUSINESS CARD with another phone: a contact file (vCard) that the share sheet can send by AirDrop or any app, a QR code any phone camera
// can read, and (where the phone allows it) writing the card onto an NFC tag. The other person gets the name, job, company, phone, email, website,
// address and logo as a new contact.
// ═════════════════════════════════════════════════════════════════════════════

String _esc(String s) => s.replaceAll('\\', '\\\\').replaceAll('\r\n', '\\n').replaceAll('\n', '\\n').replaceAll(',', '\\,').replaceAll(';', '\\;');

/// Long lines are folded the way the vCard format asks (a line break and a space), so every phone reads them.
String _fold(String line) {
  if (line.length <= 74) return line;
  final b = StringBuffer(line.substring(0, 74));
  for (var i = 74; i < line.length; i += 73) {
    b.write('\r\n ');
    b.write(line.substring(i, i + 73 > line.length ? line.length : i + 73));
  }
  return b.toString();
}

/// The card as a contact (vCard 3.0). With [withPhoto] the logo goes in too, when it is small enough.
String ngmyVCard(NgmyBusinessCardDocument d, {bool withPhoto = true}) {
  final name = d.fullName.trim();
  final parts = name.split(RegExp(r'\s+')).where((p) => p.isNotEmpty).toList();
  final family = parts.length > 1 ? parts.last : '';
  final given = parts.length > 1 ? parts.sublist(0, parts.length - 1).join(' ') : name;
  final lines = <String>[
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:${_esc(family)};${_esc(given)};;;',
    'FN:${_esc(name.isEmpty ? (d.company.trim().isEmpty ? 'NGMY contact' : d.company.trim()) : name)}',
    if (d.company.trim().isNotEmpty) 'ORG:${_esc(d.company.trim())}',
    if (d.jobTitle.trim().isNotEmpty) 'TITLE:${_esc(d.jobTitle.trim())}',
    if (d.phone.trim().isNotEmpty) 'TEL;TYPE=CELL:${d.phone.trim()}',
    if (d.email.trim().isNotEmpty) 'EMAIL;TYPE=INTERNET:${d.email.trim()}',
    if (d.website.trim().isNotEmpty) 'URL:${d.website.trim()}',
    if (d.address.trim().isNotEmpty) 'ADR;TYPE=WORK:;;${_esc(d.address.trim())};;;;',
    if (d.tagline.trim().isNotEmpty) 'NOTE:${_esc(d.tagline.trim())}',
  ];
  final logo = d.logoBytes;
  if (withPhoto && logo != null && logo.length <= 30000) {
    final png = logo.length > 4 && logo[0] == 0x89 && logo[1] == 0x50;
    lines.add('PHOTO;ENCODING=b;TYPE=${png ? 'PNG' : 'JPEG'}:${base64Encode(logo)}');
  }
  lines.add('END:VCARD');
  return '${lines.map(_fold).join('\r\n')}\r\n';
}

NgmyBusinessCardDocument? ngmyCardFromJson(String json) {
  try {
    final map = jsonDecode(json);
    if (map is Map) return NgmyBusinessCardDocument.fromJson(Map<String, dynamic>.from(map));
  } catch (_) {}
  return null;
}

/// The file name for a card: the person's name, with nothing a file name cannot hold.
String ngmyCardFileName(NgmyBusinessCardDocument d) {
  final base = (d.fullName.trim().isEmpty ? 'ngmy_business_card' : d.fullName.trim()).replaceAll(RegExp(r'[^A-Za-z0-9 _-]'), '').trim().replaceAll(' ', '_');
  return '${base.isEmpty ? 'ngmy_business_card' : base}.vcf';
}

/// Sends the card with the phone's share sheet: AirDrop to a phone held close, Messages, WhatsApp, Mail and so on.
/// Returns true when the share sheet opened.
Future<bool> ngmyShareCard(NgmyBusinessCardDocument d) async {
  try {
    final bytes = Uint8List.fromList(utf8.encode(ngmyVCard(d)));
    final res = await Share.shareXFiles(
      [XFile.fromData(bytes, mimeType: 'text/vcard', name: ngmyCardFileName(d))],
      subject: d.fullName.trim().isEmpty ? 'My business card' : '${d.fullName.trim()} · business card',
      text: 'My business card. Open the file to add me to your contacts.',
    );
    return res.status != ShareResultStatus.unavailable;
  } catch (_) {
    return false;
  }
}

/// The share sheet for a card: a QR code, AirDrop or any app, the contact text, and NFC where the phone can write it.
Future<void> showNgmyCardShareSheet(BuildContext context, String cardJson) {
  final doc = ngmyCardFromJson(cardJson);
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _CardShareSheet(doc: doc),
  );
}

class _CardShareSheet extends StatefulWidget {
  const _CardShareSheet({required this.doc});
  final NgmyBusinessCardDocument? doc;

  @override
  State<_CardShareSheet> createState() => _CardShareSheetState();
}

class _CardShareSheetState extends State<_CardShareSheet> {
  String note = '';
  bool busy = false;

  void _say(String t) {
    if (mounted) setState(() => note = t);
  }

  Future<void> _share() async {
    final d = widget.doc;
    if (d == null || busy) return;
    setState(() => busy = true);
    final ok = await ngmyShareCard(d);
    if (!mounted) return;
    setState(() => busy = false);
    if (!ok) {
      await Clipboard.setData(ClipboardData(text: ngmyVCard(d, withPhoto: false)));
      _say('This phone could not open the share sheet, so the contact text was copied. Paste it into a message, or show the QR code.');
    }
  }

  Future<void> _copy() async {
    final d = widget.doc;
    if (d == null) return;
    await Clipboard.setData(ClipboardData(text: ngmyVCard(d, withPhoto: false)));
    _say('Copied. Paste it into a message or a note.');
  }

  Future<void> _nfc() async {
    final d = widget.doc;
    if (d == null || busy) return;
    setState(() => busy = true);
    _say('Hold the back of the phone against an NFC tag or sticker…');
    final err = await ngmyNfcWrite(ngmyVCard(d, withPhoto: false), d.fullName);
    if (!mounted) return;
    setState(() => busy = false);
    _say(err ?? 'Done! Anyone who taps that tag with their phone gets your card.');
  }

  @override
  Widget build(BuildContext context) {
    final d = widget.doc;
    final nfc = ngmyNfcAvailable();
    Widget action(IconData icon, String title, String sub, VoidCallback? onTap, Color color) => GestureDetector(
          onTap: onTap,
          child: Opacity(
            opacity: onTap == null ? 0.5 : 1,
            child: Container(
              margin: const EdgeInsets.only(bottom: 10),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(16), border: Border.all(color: color.withValues(alpha: 0.7))),
              child: Row(children: [
                Container(width: 42, height: 42, decoration: BoxDecoration(color: color.withValues(alpha: 0.25), shape: BoxShape.circle), child: Icon(icon, color: color)),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                    Text(sub, style: const TextStyle(color: Colors.white60, fontSize: 12, height: 1.25)),
                  ]),
                ),
              ]),
            ),
          ),
        );
    return SafeArea(
      child: Container(
        margin: const EdgeInsets.fromLTRB(10, 0, 10, 10),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: const Color(0xFF111827), borderRadius: BorderRadius.circular(26), border: Border.all(color: Colors.white24)),
        child: SingleChildScrollView(
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              const Expanded(child: Text('Share my business card', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18))),
              IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
            ]),
            if (d == null)
              const Padding(padding: EdgeInsets.symmetric(vertical: 20), child: Text('This card could not be read.', style: TextStyle(color: Colors.white70)))
            else ...[
              Center(
                child: Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(18)),
                  child: QrImageView(data: ngmyVCard(d, withPhoto: false), size: 200, version: QrVersions.auto, errorCorrectionLevel: QrErrorCorrectLevel.L, backgroundColor: Colors.white),
                ),
              ),
              const SizedBox(height: 6),
              const Center(child: Text('Point any phone camera here to add me as a contact', style: TextStyle(color: Colors.white60, fontSize: 12))),
              const SizedBox(height: 14),
              action(Icons.ios_share_rounded, 'AirDrop or send', 'Hold your phone close to another iPhone and pick AirDrop, or send it by Messages, WhatsApp or email.', busy ? null : _share, const Color(0xFF38BDF8)),
              action(Icons.nfc_rounded, 'Tap to share with NFC', nfc ? 'Write your card onto an NFC tag or sticker. Anyone who taps it gets your card.' : 'Writing NFC tags works in Chrome on Android phones. On an iPhone use AirDrop or the QR code.', nfc && !busy ? _nfc : null, const Color(0xFF4ADE80)),
              action(Icons.copy_rounded, 'Copy contact text', 'Paste my details into any message.', _copy, const Color(0xFFF2B01E)),
              if (note.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 2), child: Text(note, style: const TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w700, fontSize: 12.5, height: 1.3))),
            ],
          ]),
        ),
      ),
    );
  }
}
