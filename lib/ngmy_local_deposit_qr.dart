import 'dart:convert';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'main.dart';
import 'ngmy_nav.dart';
import 'ngmy_network_resilience.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_worksheet_helpers.dart';

/// Short QR prefix for admin-generated local Growth Income deposit codes.
const String kNgmyLocalDepositQrPrefix = 'NGMYLOCALDEP1';

String _stashKey(String token) => 'ngmy_local_deposit_qr_v1_${token.trim()}';
String _codeKey(String code) => 'ngmy_local_deposit_code_v1_${code.trim().toUpperCase()}';

String _generateToken() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  final r = Random.secure();
  return 'LD${List.generate(10, (_) => chars[r.nextInt(chars.length)]).join()}';
}

class NgmyLocalDepositPeek {
  const NgmyLocalDepositPeek({
    required this.found,
    required this.alreadyUsed,
    required this.wrongAccount,
    required this.notConfigured,
    required this.requiresVerification,
    this.amount = 0,
    this.lockedToEmail = '',
  });

  final bool found;
  final bool alreadyUsed;
  final bool wrongAccount;
  /// QR was created without both user email and verification code.
  final bool notConfigured;
  final bool requiresVerification;
  final double amount;
  final String lockedToEmail;
}

class NgmyLocalDepositRedeemResult {
  const NgmyLocalDepositRedeemResult._({
    required this.success,
    this.amount = 0,
    this.errorMessage,
  });

  final bool success;
  final double amount;
  final String? errorMessage;

  factory NgmyLocalDepositRedeemResult.ok(double amount) =>
      NgmyLocalDepositRedeemResult._(success: true, amount: amount);

  factory NgmyLocalDepositRedeemResult.fail(String message) =>
      NgmyLocalDepositRedeemResult._(success: false, errorMessage: message);
}

/// Admin local deposit: send money by the user's verification code (no scan
/// required), or optionally create a QR/share code. Credits land in the user's
/// Local Growth Income wallet when they open it.
class NgmyLocalDepositQr {
  static String generateCode() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    final r = Random.secure();
    return List.generate(6, (_) => chars[r.nextInt(chars.length)]).join();
  }

  static String? normalizeCode(String raw) {
    final t = raw.trim().toUpperCase().replaceAll(RegExp(r'[^A-Z0-9]'), '');
    if (t.length < 5 || t.length > 6) return null;
    return t;
  }

  static bool looksLikeCode(String raw) {
    final t = raw.trim();
    if (t.isEmpty || t.length > 6) return false;
    if (t.contains('|') || t.contains(':') || t.contains('/') || t.contains('.') || t.contains(' ')) return false;
    if (RegExp(r'^(NGMY|HTTP)', caseSensitive: false).hasMatch(t)) return false;
    return RegExp(r'^[A-Za-z0-9]{5,6}$').hasMatch(t);
  }

  static Future<({String qrPayload, String code, double amount})?> create({
    required String adminEmail,
    required double amount,
    required String lockedToEmail,
    required String requiredVerificationCode,
  }) async {
    if (amount <= 0) return null;
    final locked = ngmyNormalizeEmail(lockedToEmail.trim());
    final verify = requiredVerificationCode.trim();
    if (locked.isEmpty || verify.isEmpty) return null;
    final token = _generateToken();
    final code = generateCode();
    final now = DateTime.now().toUtc().toIso8601String();
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _stashKey(token),
          'value': {
            'amount': amount,
            'adminEmail': adminEmail.toLowerCase().trim(),
            'lockedToEmail': locked,
            'requiredVerificationCode': verify,
            'shortCode': code,
            'createdAt': now,
            'redeemedBy': '',
          },
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _codeKey(code),
          'value': {'token': token, 'updatedAt': now, 'redeemed': false},
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[local deposit qr] create: $e');
      return null;
    }
    return (qrPayload: '$kNgmyLocalDepositQrPrefix|$token', code: code, amount: amount);
  }

  static Future<Map<String, dynamic>?> _loadStash(String token) async {
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _stashKey(token))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final value = row?['value'];
      if (value is Map) return Map<String, dynamic>.from(value);
    } catch (e) {
      debugPrint('[local deposit qr] load: $e');
    }
    return null;
  }

  static Future<String?> _loadTokenForCode(String code) async {
    final normalized = normalizeCode(code);
    if (normalized == null) return null;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _codeKey(normalized))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final value = row?['value'];
      if (value is! Map) return null;
      if (value['redeemed'] == true) return null;
      return (value['token'] ?? '').toString().trim();
    } catch (e) {
      debugPrint('[local deposit qr] code lookup: $e');
    }
    return null;
  }

  static String? _tokenFromRaw(String raw) {
    final text = raw.trim();
    if (text.startsWith('$kNgmyLocalDepositQrPrefix|')) {
      final token = text.substring(kNgmyLocalDepositQrPrefix.length + 1).trim();
      return token.isEmpty ? null : token;
    }
    return null;
  }

  static bool accountHasPendingDepositVerification({
    required List<AppTransaction> transactions,
    required String localUserEmail,
    required String verificationCode,
  }) {
    final code = verificationCode.trim();
    if (code.isEmpty) return false;
    final userKey = localUserEmail.toLowerCase().trim();
    return transactions.any(
      (t) =>
          t.userEmail.toLowerCase().trim() == userKey &&
          t.type == TransactionType.deposit &&
          t.status == TransactionStatus.pending &&
          (t.verificationCode ?? '').trim() == code,
    );
  }

  static NgmyLocalDepositRedeemResult? _validateRedeemEligibility({
    required Map<String, dynamic> value,
    required String redeemerEmail,
    required String? verificationCode,
    List<AppTransaction>? localTransactions,
    String? localUserEmail,
  }) {
    final locked = ngmyNormalizeEmail((value['lockedToEmail'] ?? '').toString());
    final requiredVerify = (value['requiredVerificationCode'] ?? '').toString().trim();
    if (locked.isEmpty || requiredVerify.isEmpty) {
      return NgmyLocalDepositRedeemResult.fail(
        'This deposit is not assigned to an account. Admin must set the user email and verification code.',
      );
    }
    if (locked != ngmyNormalizeEmail(redeemerEmail)) {
      return NgmyLocalDepositRedeemResult.fail('This deposit is for another NGMY account.');
    }
    final provided = (verificationCode ?? '').trim();
    if (provided.isEmpty) {
      return NgmyLocalDepositRedeemResult.fail('Enter the verification code from your deposit request.');
    }
    if (provided != requiredVerify) {
      return NgmyLocalDepositRedeemResult.fail('Verification code does not match this deposit.');
    }
    if (localTransactions != null && localUserEmail != null) {
      if (!accountHasPendingDepositVerification(
        transactions: localTransactions,
        localUserEmail: localUserEmail,
        verificationCode: requiredVerify,
      )) {
        return NgmyLocalDepositRedeemResult.fail(
          'That verification code is not on your pending local deposit. Submit a deposit request first.',
        );
      }
    }
    return null;
  }

  static NgmyLocalDepositPeek _peekFromStash(Map<String, dynamic> value, String redeemerEmail) {
    final redeemedBy = (value['redeemedBy'] ?? '').toString().trim();
    if (redeemedBy.isNotEmpty) {
      return const NgmyLocalDepositPeek(
        found: true,
        alreadyUsed: true,
        wrongAccount: false,
        notConfigured: false,
        requiresVerification: false,
      );
    }
    final locked = ngmyNormalizeEmail((value['lockedToEmail'] ?? '').toString());
    final verify = (value['requiredVerificationCode'] ?? '').toString().trim();
    if (locked.isEmpty || verify.isEmpty) {
      return NgmyLocalDepositPeek(
        found: true,
        alreadyUsed: false,
        wrongAccount: false,
        notConfigured: true,
        requiresVerification: false,
        amount: (value['amount'] as num? ?? 0).toDouble(),
      );
    }
    if (locked != ngmyNormalizeEmail(redeemerEmail)) {
      return NgmyLocalDepositPeek(
        found: true,
        alreadyUsed: false,
        wrongAccount: true,
        notConfigured: false,
        requiresVerification: true,
        amount: (value['amount'] as num? ?? 0).toDouble(),
        lockedToEmail: locked,
      );
    }
    return NgmyLocalDepositPeek(
      found: true,
      alreadyUsed: false,
      wrongAccount: false,
      notConfigured: false,
      requiresVerification: true,
      amount: (value['amount'] as num? ?? 0).toDouble(),
      lockedToEmail: locked,
    );
  }

  static Future<NgmyLocalDepositPeek> peekRaw({
    required String raw,
    required String redeemerEmail,
  }) async {
    final token = _tokenFromRaw(raw);
    if (token == null) {
      return const NgmyLocalDepositPeek(
        found: false,
        alreadyUsed: false,
        wrongAccount: false,
        notConfigured: false,
        requiresVerification: false,
      );
    }
    final value = await _loadStash(token);
    if (value == null) {
      return const NgmyLocalDepositPeek(
        found: false,
        alreadyUsed: false,
        wrongAccount: false,
        notConfigured: false,
        requiresVerification: false,
      );
    }
    return _peekFromStash(value, redeemerEmail);
  }

  static Future<NgmyLocalDepositPeek> peekCode({
    required String code,
    required String redeemerEmail,
  }) async {
    final token = await _loadTokenForCode(code);
    if (token == null || token.isEmpty) {
      return const NgmyLocalDepositPeek(
        found: false,
        alreadyUsed: false,
        wrongAccount: false,
        notConfigured: false,
        requiresVerification: false,
      );
    }
    final value = await _loadStash(token);
    if (value == null) {
      return const NgmyLocalDepositPeek(
        found: false,
        alreadyUsed: false,
        wrongAccount: false,
        notConfigured: false,
        requiresVerification: false,
      );
    }
    return _peekFromStash(value, redeemerEmail);
  }

  static Future<NgmyLocalDepositRedeemResult> redeemByCode({
    required String code,
    required String redeemerEmail,
    required String verificationCode,
    required List<AppTransaction> localTransactions,
    required String localUserEmail,
  }) async {
    final token = await _loadTokenForCode(code);
    if (token == null || token.isEmpty) {
      return NgmyLocalDepositRedeemResult.fail('That deposit code is invalid or already used.');
    }
    return redeem(
      raw: '$kNgmyLocalDepositQrPrefix|$token',
      redeemerEmail: redeemerEmail,
      verificationCode: verificationCode,
      localTransactions: localTransactions,
      localUserEmail: localUserEmail,
    );
  }

  static Future<NgmyLocalDepositRedeemResult> redeem({
    required String raw,
    required String redeemerEmail,
    required String verificationCode,
    required List<AppTransaction> localTransactions,
    required String localUserEmail,
  }) async {
    final token = _tokenFromRaw(raw);
    if (token == null) return NgmyLocalDepositRedeemResult.fail('Invalid deposit QR.');

    final value = await _loadStash(token);
    if (value == null) return NgmyLocalDepositRedeemResult.fail('That deposit QR is invalid or already used.');

    final peek = _peekFromStash(value, redeemerEmail);
    if (peek.alreadyUsed) {
      return NgmyLocalDepositRedeemResult.fail('This deposit code was already used.');
    }
    if (peek.notConfigured) {
      return NgmyLocalDepositRedeemResult.fail(
        'This deposit is not assigned to an account. Admin must set the user email and verification code.',
      );
    }
    if (peek.wrongAccount) {
      return NgmyLocalDepositRedeemResult.fail('This deposit is for another NGMY account.');
    }

    final eligibility = _validateRedeemEligibility(
      value: value,
      redeemerEmail: redeemerEmail,
      verificationCode: verificationCode,
      localTransactions: localTransactions,
      localUserEmail: localUserEmail,
    );
    if (eligibility != null) return eligibility;

    final amount = (value['amount'] as num? ?? 0).toDouble();
    if (amount <= 0) return NgmyLocalDepositRedeemResult.fail('Invalid deposit amount.');

    final now = DateTime.now().toUtc().toIso8601String();
    final redeemer = ngmyNormalizeEmail(redeemerEmail);
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _stashKey(token))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final latest = row?['value'];
      if (latest is! Map) return NgmyLocalDepositRedeemResult.fail('Could not apply deposit. Try again.');
      final latestMap = Map<String, dynamic>.from(latest);
      if ((latestMap['redeemedBy'] ?? '').toString().trim().isNotEmpty) {
        return NgmyLocalDepositRedeemResult.fail('This deposit code was already used.');
      }
      final reCheck = _validateRedeemEligibility(
        value: latestMap,
        redeemerEmail: redeemerEmail,
        verificationCode: verificationCode,
        localTransactions: localTransactions,
        localUserEmail: localUserEmail,
      );
      if (reCheck != null) return reCheck;

      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _stashKey(token),
          'value': {
            ...latestMap,
            'redeemedBy': redeemer,
            'redeemedAt': now,
          },
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);

      final shortCode = (latestMap['shortCode'] ?? '').toString().trim();
      if (shortCode.isNotEmpty) {
        await Supabase.instance.client.from('ngmy_settings').upsert([
          {
            'key': _codeKey(shortCode),
            'value': {'token': token, 'redeemed': true, 'redeemedAt': now},
            'updated_at': now,
          },
        ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      }
    } catch (e) {
      debugPrint('[local deposit qr] redeem: $e');
      return NgmyLocalDepositRedeemResult.fail('Could not apply deposit. Check connection and try again.');
    }

    return NgmyLocalDepositRedeemResult.ok(amount);
  }

  static String _inboxKey(String email) => 'ngmy_local_deposit_inbox_v1_${ngmyNormalizeEmail(email)}';

  /// Admin credits the user remotely — user does not need to scan QR or enter a code.
  /// Money lands in their Local Growth Income wallet the next time they open it (or immediately if online sync runs).
  static Future<NgmyLocalDepositRedeemResult> adminSendToUser({
    required String adminEmail,
    required double amount,
    required String lockedToEmail,
    required String verificationCode,
    String? shortCode,
    String? qrToken,
  }) async {
    if (amount <= 0) return NgmyLocalDepositRedeemResult.fail('Enter a valid amount.');
    final locked = ngmyNormalizeEmail(lockedToEmail);
    final verify = verificationCode.trim();
    if (locked.isEmpty || !locked.contains('@')) {
      return NgmyLocalDepositRedeemResult.fail('Enter the user\'s NGMY email.');
    }
    if (verify.isEmpty) {
      return NgmyLocalDepositRedeemResult.fail('Enter the deposit verification code.');
    }

    var token = (qrToken ?? '').trim();
    var code = (shortCode ?? '').trim().toUpperCase();
    if (token.isEmpty && code.isNotEmpty) {
      token = (await _loadTokenForCode(code))?.trim() ?? '';
    }

    // Ensure a one-time stash exists so the same funds can't also be QR-redeemed later.
    if (token.isEmpty) {
      final created = await create(
        adminEmail: adminEmail,
        amount: amount,
        lockedToEmail: locked,
        requiredVerificationCode: verify,
      );
      if (created == null) {
        return NgmyLocalDepositRedeemResult.fail('Could not prepare deposit. Check connection and try again.');
      }
      code = created.code;
      token = created.qrPayload.substring(kNgmyLocalDepositQrPrefix.length + 1).trim();
    }

    final now = DateTime.now().toUtc().toIso8601String();
    final admin = ngmyNormalizeEmail(adminEmail);
    final creditId = 'admin_push_${DateTime.now().microsecondsSinceEpoch}';

    try {
      final value = await _loadStash(token);
      if (value == null) {
        return NgmyLocalDepositRedeemResult.fail('Could not load deposit record. Try again.');
      }
      if ((value['redeemedBy'] ?? '').toString().trim().isNotEmpty) {
        return NgmyLocalDepositRedeemResult.fail('This deposit was already sent or redeemed.');
      }

      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _stashKey(token),
          'value': {
            ...value,
            'redeemedBy': 'admin_push:$admin',
            'redeemedAt': now,
            'adminPushed': true,
            'adminPushId': creditId,
          },
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);

      final short = code.isNotEmpty ? code : (value['shortCode'] ?? '').toString().trim();
      if (short.isNotEmpty) {
        await Supabase.instance.client.from('ngmy_settings').upsert([
          {
            'key': _codeKey(short),
            'value': {'token': token, 'redeemed': true, 'redeemedAt': now, 'adminPushed': true},
            'updated_at': now,
          },
        ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
      }

      final inboxRow = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _inboxKey(locked))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final inboxRaw = inboxRow?['value'];
      final inbox = inboxRaw is Map ? Map<String, dynamic>.from(inboxRaw) : <String, dynamic>{};
      final credits = (inbox['credits'] as List?)
              ?.whereType<Map>()
              .map((e) => Map<String, dynamic>.from(e))
              .toList() ??
          <Map<String, dynamic>>[];
      credits.add({
        'id': creditId,
        'amount': amount,
        'verificationCode': verify,
        'adminEmail': admin,
        'shortCode': short,
        'token': token,
        'createdAt': now,
        'status': 'pending',
      });
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _inboxKey(locked),
          'value': {'credits': credits, 'updatedAt': now},
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[local deposit qr] admin send: $e');
      return NgmyLocalDepositRedeemResult.fail('Could not send deposit. Check connection and try again.');
    }

    return NgmyLocalDepositRedeemResult.ok(amount);
  }

  /// Lists admin-pushed credits that have not been claimed on this account yet.
  /// Call [markCreditsClaimed] after applying them locally so a failed save can retry.
  static Future<List<({String id, double amount, String verificationCode})>> claimPendingCredits(
    String userEmail,
  ) async {
    final email = ngmyNormalizeEmail(userEmail);
    if (email.isEmpty) return const [];
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _inboxKey(email))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final value = row?['value'];
      if (value is! Map) return const [];
      final inbox = Map<String, dynamic>.from(value);
      final credits = (inbox['credits'] as List?)
              ?.whereType<Map>()
              .map((e) => Map<String, dynamic>.from(e))
              .toList() ??
          <Map<String, dynamic>>[];
      final claimed = <({String id, double amount, String verificationCode})>[];
      for (final c in credits) {
        if ((c['status'] ?? 'pending').toString() != 'pending') continue;
        final amount = (c['amount'] as num? ?? 0).toDouble();
        final id = (c['id'] ?? '').toString();
        if (amount <= 0 || id.isEmpty) continue;
        claimed.add((
          id: id,
          amount: amount,
          verificationCode: (c['verificationCode'] ?? '').toString(),
        ));
      }
      return claimed;
    } catch (e) {
      debugPrint('[local deposit qr] claim pending: $e');
      return const [];
    }
  }

  static Future<void> markCreditsClaimed(String userEmail, Iterable<String> creditIds) async {
    final email = ngmyNormalizeEmail(userEmail);
    final ids = creditIds.map((e) => e.trim()).where((e) => e.isNotEmpty).toSet();
    if (email.isEmpty || ids.isEmpty) return;
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _inboxKey(email))
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      final value = row?['value'];
      if (value is! Map) return;
      final inbox = Map<String, dynamic>.from(value);
      final credits = (inbox['credits'] as List?)
              ?.whereType<Map>()
              .map((e) => Map<String, dynamic>.from(e))
              .toList() ??
          <Map<String, dynamic>>[];
      final now = DateTime.now().toUtc().toIso8601String();
      var changed = false;
      for (final c in credits) {
        final id = (c['id'] ?? '').toString();
        if (!ids.contains(id)) continue;
        if ((c['status'] ?? '').toString() == 'claimed') continue;
        c['status'] = 'claimed';
        c['claimedAt'] = now;
        changed = true;
      }
      if (!changed) return;
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _inboxKey(email),
          'value': {'credits': credits, 'updatedAt': now},
          'updated_at': now,
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[local deposit qr] mark claimed: $e');
    }
  }
}

String ngmyAppWhatsAppDigits(AppConfig config) {
  final phone = config.helpPhone.trim().isNotEmpty ? config.helpPhone.trim() : config.loanPhone.trim();
  return phone.replaceAll(RegExp(r'[^\d]'), '');
}

Future<void> ngmyOpenAppWhatsApp(AppConfig config, String message) async {
  final digits = ngmyAppWhatsAppDigits(config);
  if (digits.isEmpty || message.trim().isEmpty) return;
  final uri = Uri.parse('https://wa.me/$digits?text=${Uri.encodeComponent(message.trim())}');
  try {
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  } catch (_) {}
}

Uint8List? _decodeDataUrl(String dataUrl) {
  final path = dataUrl.trim();
  if (!path.startsWith('data:') || !path.contains(',')) return null;
  try {
    return base64Decode(path.split(',').last);
  } catch (_) {
    return null;
  }
}

Future<String?> _uploadLocalProofPublicUrl({
  required String realEmail,
  required String transactionId,
  required String screenshotDataUrl,
}) async {
  final bytes = _decodeDataUrl(screenshotDataUrl);
  if (bytes == null || bytes.isEmpty) return null;
  var mime = 'image/jpeg';
  if (screenshotDataUrl.contains('image/png')) mime = 'image/png';
  final ext = mime.contains('png') ? 'png' : 'jpg';
  final emailSafe = ngmyNormalizeEmail(realEmail).replaceAll(RegExp(r'[^a-z0-9@._-]'), '_');
  final txnSafe = transactionId.replaceAll(RegExp(r'[^a-zA-Z0-9._-]'), '_');
  final storagePath = 'wallet-proofs/local_$emailSafe/$txnSafe.$ext';
  try {
    await Supabase.instance.client.storage.from('media').uploadBinary(
          storagePath,
          bytes,
          fileOptions: FileOptions(upsert: true, contentType: mime),
        ).timeout(kNgmyCloudWriteTimeout);
    return Supabase.instance.client.storage.from('media').getPublicUrl(storagePath);
  } catch (e) {
    debugPrint('[local deposit whatsapp] proof upload: $e');
    return null;
  }
}

Future<void> ngmyShareLocalWalletWhatsApp({
  required AppConfig config,
  required String message,
  String? screenshotDataUrl,
  String? realEmail,
  String? transactionId,
}) async {
  var fullMessage = message.trim();
  Uint8List? imageBytes;
  if (screenshotDataUrl != null && screenshotDataUrl.trim().isNotEmpty) {
    imageBytes = _decodeDataUrl(screenshotDataUrl);
    if (realEmail != null && transactionId != null) {
      final url = await _uploadLocalProofPublicUrl(
        realEmail: realEmail,
        transactionId: transactionId,
        screenshotDataUrl: screenshotDataUrl,
      );
      if (url != null && url.isNotEmpty) {
        fullMessage = '$fullMessage\n\nPayment screenshot: $url';
      }
    }
  }

  if (imageBytes != null && imageBytes.isNotEmpty) {
    try {
      await Share.shareXFiles(
        [XFile.fromData(imageBytes, mimeType: 'image/jpeg', name: 'ngmy_payment.jpg')],
        text: fullMessage,
        subject: 'NGMY payment proof',
      );
      return;
    } catch (_) {}
  }

  await ngmyOpenAppWhatsApp(config, fullMessage);
}

String ngmyLocalDepositWhatsAppMessage({
  required UserData user,
  required String realEmail,
  required AppTransaction transaction,
  required AppConfig config,
}) {
  final method = transaction.method == PaymentMethod.cashApp ? 'Cash App' : 'Bitcoin';
  final code = (transaction.verificationCode ?? '').trim();
  final handle = (transaction.sourceDetails ?? '').trim();
  final payTo = transaction.method == PaymentMethod.cashApp ? config.officialCashApp : config.officialBitcoin;
  final buf = StringBuffer()
    ..writeln('*NGMY Local Growth Income — Deposit Request*')
    ..writeln('Amount: *\$${formatCurrency(transaction.amount)}*')
    ..writeln('User: ${user.username.trim().isEmpty ? 'User' : user.username.trim()}')
    ..writeln('Account: $realEmail')
    ..writeln('Pay to: $payTo ($method)')
    ..writeln('Sender $method: ${handle.isEmpty ? '(see screenshot)' : handle}');
  if (code.isNotEmpty) buf.writeln('Verification code: *$code*');
  buf.writeln('Payment screenshot attached.');
  buf.writeln('Submitted today via NGMY Local Wallet.');
  return buf.toString();
}

String ngmyLocalWithdrawWhatsAppMessage({
  required UserData user,
  required String realEmail,
  required double amount,
  required double fee,
  required double receive,
  required String cashAppTag,
}) {
  final tag = cashAppTag.startsWith(r'$') ? cashAppTag : '\$$cashAppTag';
  return [
    '*NGMY Local Growth Income — Withdrawal Request*',
    'User: ${user.username.trim().isEmpty ? 'User' : user.username.trim()}',
    'Account: $realEmail',
    'Withdraw amount: *\$${formatCurrency(amount)}*',
    'Fee (15%): \$${formatCurrency(fee)}',
    'Send to user: *\$${formatCurrency(receive)}*',
    'Cash App tag: *$tag*',
    'Send payment to this Cash App tag.',
  ].join('\n');
}

Future<({double amount, String lockedToEmail, String verificationCode})?> showNgmyAdminLocalDepositCreateDialog(
  BuildContext context,
) async {
  final amountC = TextEditingController();
  final emailC = TextEditingController();
  final verifyC = TextEditingController();
  final result = await showModalBottomSheet<({double amount, String lockedToEmail, String verificationCode})>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      final bg = isDark ? const Color(0xFF121A26) : Colors.white;
      final fg = isDark ? const Color(0xFFF8FAFC) : const Color(0xFF0F172A);
      final muted = isDark ? const Color(0xFF94A3B8) : const Color(0xFF64748B);
      final inset = MediaQuery.viewInsetsOf(ctx).bottom;

      InputDecoration field(String label, {String? hint, Widget? prefix}) => InputDecoration(
            labelText: label,
            hintText: hint,
            prefix: prefix,
            filled: true,
            fillColor: isDark ? const Color(0xFF0B1220) : const Color(0xFFF8FAFC),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: BorderSide(color: isDark ? const Color(0xFF243041) : const Color(0xFFE2E8F0)),
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(16),
              borderSide: BorderSide(color: WorksheetPalette.green, width: 1.6),
            ),
          );

      void submit() {
        final a = double.tryParse(amountC.text.trim());
        if (a == null || a <= 0) {
          ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter a valid amount.')));
          return;
        }
        final email = emailC.text.trim();
        if (email.isEmpty || !email.contains('@')) {
          ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter the user\'s NGMY email.')));
          return;
        }
        final verify = verifyC.text.trim();
        if (verify.isEmpty) {
          ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter the deposit verification code.')));
          return;
        }
        Navigator.pop(ctx, (amount: a, lockedToEmail: email, verificationCode: verify));
      }

      return Padding(
        padding: EdgeInsets.only(bottom: inset),
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: bg,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
            border: Border(top: BorderSide(color: WorksheetPalette.green.withValues(alpha: 0.35))),
          ),
          child: SafeArea(
            top: false,
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Center(
                    child: Container(
                      width: 40,
                      height: 4,
                      margin: const EdgeInsets.only(bottom: 16),
                      decoration: BoxDecoration(
                        color: muted.withValues(alpha: 0.35),
                        borderRadius: BorderRadius.circular(99),
                      ),
                    ),
                  ),
                  Row(
                    children: [
                      Container(
                        width: 48,
                        height: 48,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(14),
                          gradient: LinearGradient(
                            colors: [WorksheetPalette.green, WorksheetPalette.green.withValues(alpha: 0.7)],
                          ),
                        ),
                        child: const Icon(Icons.payments_rounded, color: Colors.white),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Local deposit', style: TextStyle(color: fg, fontWeight: FontWeight.w900, fontSize: 18)),
                            const SizedBox(height: 2),
                            Text(
                              'Use the user’s deposit verification code. You can send money now — they don’t need to scan.',
                              style: TextStyle(color: muted, fontSize: 12.5, height: 1.35),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 18),
                  TextField(
                    controller: amountC,
                    keyboardType: const TextInputType.numberWithOptions(decimal: true),
                    decoration: field('Amount', hint: '50.00', prefix: const Text('\$ ')),
                    autofocus: true,
                    style: TextStyle(color: fg, fontWeight: FontWeight.w700, fontSize: 18),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: emailC,
                    keyboardType: TextInputType.emailAddress,
                    decoration: field('User email', hint: 'user@gmail.com'),
                    style: TextStyle(color: fg),
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: verifyC,
                    keyboardType: TextInputType.number,
                    decoration: field('Verification code', hint: 'From their deposit request'),
                    style: TextStyle(color: fg, fontWeight: FontWeight.w800, letterSpacing: 1.2),
                  ),
                  const SizedBox(height: 18),
                  FilledButton(
                    onPressed: submit,
                    style: FilledButton.styleFrom(
                      backgroundColor: WorksheetPalette.green,
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                    child: const Text('Continue', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                  ),
                  const SizedBox(height: 8),
                  TextButton(
                    onPressed: () => Navigator.pop(ctx),
                    child: Text('Cancel', style: TextStyle(color: muted, fontWeight: FontWeight.w700)),
                  ),
                ],
              ),
            ),
          ),
        ),
      );
    },
  );
  amountC.dispose();
  emailC.dispose();
  verifyC.dispose();
  return result;
}

Future<void> showNgmyAdminLocalDepositQrFlow(
  BuildContext context, {
  required String adminEmail,
}) async {
  final input = await showNgmyAdminLocalDepositCreateDialog(context);
  if (input == null || input.amount <= 0 || !context.mounted) return;

  final action = await showModalBottomSheet<String>(
    context: context,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      final isDark = Theme.of(ctx).brightness == Brightness.dark;
      final bg = isDark ? const Color(0xFF121A26) : Colors.white;
      final fg = isDark ? const Color(0xFFF8FAFC) : const Color(0xFF0F172A);
      final muted = isDark ? const Color(0xFF94A3B8) : const Color(0xFF64748B);
      return DecoratedBox(
        decoration: BoxDecoration(
          color: bg,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(26)),
        ),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(20, 14, 20, 18),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(
                  child: Container(
                    width: 40,
                    height: 4,
                    margin: const EdgeInsets.only(bottom: 16),
                    decoration: BoxDecoration(color: muted.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(99)),
                  ),
                ),
                Text('Send \$${formatCurrency(input.amount)}', style: TextStyle(color: fg, fontWeight: FontWeight.w900, fontSize: 18)),
                const SizedBox(height: 6),
                Text(
                  'To ${input.lockedToEmail}\nCode ${input.verificationCode}',
                  style: TextStyle(color: muted, height: 1.4, fontSize: 13),
                ),
                const SizedBox(height: 16),
                FilledButton.icon(
                  onPressed: () => Navigator.pop(ctx, 'send'),
                  style: FilledButton.styleFrom(
                    backgroundColor: WorksheetPalette.green,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 15),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                  ),
                  icon: const Icon(Icons.send_rounded),
                  label: const Text('Send money now', style: TextStyle(fontWeight: FontWeight.w900)),
                ),
                const SizedBox(height: 10),
                OutlinedButton.icon(
                  onPressed: () => Navigator.pop(ctx, 'qr'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: fg,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                  ),
                  icon: const Icon(Icons.qr_code_2_rounded),
                  label: const Text('Create QR / share code', style: TextStyle(fontWeight: FontWeight.w800)),
                ),
                const SizedBox(height: 8),
                Text(
                  'Send money now credits their Local Growth Income wallet automatically. QR is optional.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: muted, fontSize: 11.5, height: 1.35),
                ),
              ],
            ),
          ),
        ),
      );
    },
  );
  if (action == null || !context.mounted) return;

  if (action == 'send') {
    showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (_) => const Center(child: CircularProgressIndicator()),
    );
    final sent = await NgmyLocalDepositQr.adminSendToUser(
      adminEmail: adminEmail,
      amount: input.amount,
      lockedToEmail: input.lockedToEmail,
      verificationCode: input.verificationCode,
    );
    if (context.mounted) Navigator.pop(context);
    if (!context.mounted) return;
    if (!sent.success) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(sent.errorMessage ?? 'Could not send deposit.')),
      );
      return;
    }
    await showDialog<void>(
      context: context,
      builder: (ctx) {
        final isDark = Theme.of(ctx).brightness == Brightness.dark;
        return AlertDialog(
          backgroundColor: isDark ? const Color(0xFF151B28) : Colors.white,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
          title: const Text('Money sent', style: TextStyle(fontWeight: FontWeight.w900)),
          content: Text(
            '\$${formatCurrency(input.amount)} is on the way to ${input.lockedToEmail}. '
            'It appears in their Local Growth Income wallet when they open it — no QR scan needed.',
            style: TextStyle(height: 1.4, color: isDark ? Colors.white70 : const Color(0xFF475569)),
          ),
          actions: [
            FilledButton(
              onPressed: () => Navigator.pop(ctx),
              style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
              child: const Text('Done'),
            ),
          ],
        );
      },
    );
    return;
  }

  final created = await NgmyLocalDepositQr.create(
    adminEmail: adminEmail,
    amount: input.amount,
    lockedToEmail: input.lockedToEmail,
    requiredVerificationCode: input.verificationCode,
  );
  if (!context.mounted) return;
  if (created == null) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Could not create deposit QR. Check your connection and try again.')),
    );
    return;
  }

  await NgmyNavigator.push<void>(
    context,
    _NgmyLocalDepositQrPage(
      qrPayload: created.qrPayload,
      code: created.code,
      amount: created.amount,
      lockedToEmail: input.lockedToEmail,
      verificationCode: input.verificationCode,
      adminEmail: adminEmail,
    ),
    fullscreenDialog: true,
  );
}

class _NgmyLocalDepositQrPage extends StatefulWidget {
  const _NgmyLocalDepositQrPage({
    required this.qrPayload,
    required this.code,
    required this.amount,
    required this.lockedToEmail,
    required this.verificationCode,
    required this.adminEmail,
  });

  final String qrPayload;
  final String code;
  final double amount;
  final String lockedToEmail;
  final String verificationCode;
  final String adminEmail;

  @override
  State<_NgmyLocalDepositQrPage> createState() => _NgmyLocalDepositQrPageState();
}

class _NgmyLocalDepositQrPageState extends State<_NgmyLocalDepositQrPage> {
  final GlobalKey _qrCaptureKey = GlobalKey();
  bool _downloading = false;
  bool _sending = false;
  bool _sent = false;

  void _copy(String text, String label) {
    Clipboard.setData(ClipboardData(text: text));
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('$label copied')));
  }

  Future<void> _downloadQr() async {
    if (_downloading) return;
    setState(() => _downloading = true);
    try {
      final bytes = await NgmyBrandedQrWidget.capturePng(_qrCaptureKey, pixelRatio: 4);
      if (bytes == null || bytes.isEmpty) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Could not capture QR image.')));
        }
        return;
      }
      final msg = await downloadNgmyQrImage(bytes, 'ngmy_local_deposit_qr.png');
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    } finally {
      if (mounted) setState(() => _downloading = false);
    }
  }

  Future<void> _sendNow() async {
    if (_sending || _sent) return;
    setState(() => _sending = true);
    final token = widget.qrPayload.startsWith('$kNgmyLocalDepositQrPrefix|')
        ? widget.qrPayload.substring(kNgmyLocalDepositQrPrefix.length + 1).trim()
        : '';
    final result = await NgmyLocalDepositQr.adminSendToUser(
      adminEmail: widget.adminEmail,
      amount: widget.amount,
      lockedToEmail: widget.lockedToEmail,
      verificationCode: widget.verificationCode,
      shortCode: widget.code,
      qrToken: token,
    );
    if (!mounted) return;
    setState(() {
      _sending = false;
      _sent = result.success;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(
          result.success
              ? 'Sent \$${formatCurrency(widget.amount)} — user gets it in Local Growth Income (no scan needed).'
              : (result.errorMessage ?? 'Could not send.'),
        ),
        backgroundColor: result.success ? WorksheetPalette.green : null,
      ),
    );
  }

  Widget _copyChip({required String label, required VoidCallback onTap}) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(20),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
        decoration: BoxDecoration(
          color: WorksheetPalette.green.withValues(alpha: 0.12),
          borderRadius: BorderRadius.circular(20),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.copy_rounded, size: 14, color: WorksheetPalette.green),
            const SizedBox(width: 6),
            Text(label, style: TextStyle(color: WorksheetPalette.green, fontWeight: FontWeight.w800, fontSize: 12)),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF081018) : const Color(0xFFF3F7FB);
    final card = isDark ? const Color(0xFF121A26) : Colors.white;
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = titleColor.withValues(alpha: 0.65);
    final locked = widget.lockedToEmail.trim();
    final verify = widget.verificationCode.trim();

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        surfaceTintColor: Colors.transparent,
        title: const Text('Local deposit', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: Stack(
        children: [
          Positioned(
            top: -70,
            right: -40,
            child: IgnorePointer(
              child: Container(
                width: 190,
                height: 190,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: RadialGradient(
                    colors: [
                      WorksheetPalette.green.withValues(alpha: isDark ? 0.18 : 0.12),
                      WorksheetPalette.green.withValues(alpha: 0),
                    ],
                  ),
                ),
              ),
            ),
          ),
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 16),
              child: Column(
                children: [
                  Expanded(
                    child: SingleChildScrollView(
                      child: Column(
                        children: [
                          Container(
                            width: double.infinity,
                            padding: const EdgeInsets.all(20),
                            decoration: BoxDecoration(
                              color: card,
                              borderRadius: BorderRadius.circular(24),
                              border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.3)),
                            ),
                            child: Column(
                              children: [
                                Text(
                                  '\$${formatCurrency(widget.amount)}',
                                  style: TextStyle(fontWeight: FontWeight.w900, fontSize: 34, color: WorksheetPalette.green),
                                ),
                                const SizedBox(height: 6),
                                Text('Local Growth Income deposit', style: TextStyle(fontSize: 13, color: muted)),
                                if (locked.isNotEmpty) ...[
                                  const SizedBox(height: 10),
                                  Text(locked, textAlign: TextAlign.center, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: titleColor)),
                                ],
                                if (verify.isNotEmpty) ...[
                                  const SizedBox(height: 4),
                                  Text('Verification: $verify', textAlign: TextAlign.center, style: TextStyle(fontSize: 12, color: muted)),
                                ],
                                const SizedBox(height: 18),
                                Container(
                                  width: double.infinity,
                                  padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 14),
                                  decoration: BoxDecoration(
                                    color: WorksheetPalette.green.withValues(alpha: isDark ? 0.16 : 0.1),
                                    borderRadius: BorderRadius.circular(18),
                                  ),
                                  child: Column(
                                    children: [
                                      Text('UNIQUE CODE', style: TextStyle(color: muted, fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
                                      const SizedBox(height: 6),
                                      Text(
                                        widget.code,
                                        style: TextStyle(
                                          color: titleColor,
                                          fontWeight: FontWeight.w900,
                                          fontSize: 30,
                                          letterSpacing: 4,
                                          fontFeatures: const [FontFeature.tabularFigures()],
                                        ),
                                      ),
                                      const SizedBox(height: 8),
                                      Text(
                                        'You can send with this code — user does not need to scan.',
                                        textAlign: TextAlign.center,
                                        style: TextStyle(color: muted, fontSize: 12, height: 1.35),
                                      ),
                                    ],
                                  ),
                                ),
                                const SizedBox(height: 18),
                                NgmyBrandedQrWidget(data: widget.qrPayload, large: true, captureKey: _qrCaptureKey),
                                const SizedBox(height: 14),
                                Wrap(
                                  spacing: 8,
                                  runSpacing: 8,
                                  alignment: WrapAlignment.center,
                                  children: [
                                    _copyChip(label: 'Copy code', onTap: () => _copy(widget.code, 'Code')),
                                    _copyChip(label: 'Copy email', onTap: () => _copy(locked, 'Email')),
                                    if (verify.isNotEmpty)
                                      _copyChip(label: 'Copy verification', onTap: () => _copy(verify, 'Verification')),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  FilledButton.icon(
                    onPressed: (_sending || _sent) ? null : _sendNow,
                    style: FilledButton.styleFrom(
                      backgroundColor: WorksheetPalette.green,
                      foregroundColor: Colors.white,
                      disabledBackgroundColor: WorksheetPalette.green.withValues(alpha: 0.45),
                      padding: const EdgeInsets.symmetric(vertical: 15),
                      minimumSize: const Size(double.infinity, 52),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                    icon: _sending
                        ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                        : Icon(_sent ? Icons.check_circle_rounded : Icons.send_rounded),
                    label: Text(
                      _sent ? 'Money sent' : 'Send money now',
                      style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15),
                    ),
                  ),
                  const SizedBox(height: 8),
                  OutlinedButton.icon(
                    onPressed: _downloading ? null : _downloadQr,
                    style: OutlinedButton.styleFrom(
                      foregroundColor: titleColor,
                      minimumSize: const Size(double.infinity, 48),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    ),
                    icon: const Icon(Icons.download_rounded, size: 18),
                    label: Text(_downloading ? 'Saving…' : 'Download QR (optional)', style: const TextStyle(fontWeight: FontWeight.w800)),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Send money now deposits to their Local Growth Income wallet automatically.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: muted, fontSize: 11.5, height: 1.35),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
