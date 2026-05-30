import 'dart:convert';
import 'package:crypto/crypto.dart';

String hashPassword(String password) {
  final bytes = utf8.encode(password);
  return sha256.convert(bytes).toString();
}

String formatCurrency(double amount) {
  String str = amount.toStringAsFixed(2);
  List<String> parts = str.split('.');
  RegExp reg = RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))');
  parts[0] = parts[0].replaceAllMapped(reg, (Match m) => '${m[1]},');
  return parts.join('.');
}

const String investmentRequestPrefix = 'INVEST_REQUEST|';

bool isInvestmentRequestDetails(String? details) {
  return details != null && details.startsWith(investmentRequestPrefix);
}

Map<String, String> parseInvestmentRequestDetails(String? details) {
  final out = <String, String>{};
  if (!isInvestmentRequestDetails(details)) return out;
  final parts = details!.split('|');
  for (final p in parts.skip(1)) {
    final idx = p.indexOf(':');
    if (idx <= 0 || idx >= p.length - 1) continue;
    out[p.substring(0, idx)] = p.substring(idx + 1);
  }
  return out;
}

String buildInvestmentRequestDetails({
  required String plan,
  required double amount,
  required double roi,
  required String payer,
}) {
  return '$investmentRequestPrefix'
      'plan:$plan|'
      'amount:${amount.toStringAsFixed(2)}|'
      'roi:${roi.toStringAsFixed(6)}|'
      'payer:$payer';
}

String? missingColumnFromPostgrestError(Object error) {
  final text = error.toString();
  final m = RegExp("Could not find the '([^']+)' column").firstMatch(text);
  return m?.group(1);
}

bool isMissingTablePostgrestError(Object error, String table) {
  return error.toString().contains("Could not find the table 'public.$table'");
}

String mimeForVideoExt(String ext) {
  switch (ext) {
    case 'mov': return 'video/quicktime';
    case 'webm': return 'video/webm';
    case 'mkv': return 'video/x-matroska';
    case 'avi': return 'video/x-msvideo';
    case 'mp3': return 'audio/mpeg';
    case 'wav': return 'audio/wav';
    case 'm4a': return 'audio/mp4';
    case 'ogg': return 'audio/ogg';
    default: return 'video/mp4';
  }
}

String mimeForImageExt(String ext) {
  switch (ext) {
    case 'png': return 'image/png';
    case 'webp': return 'image/webp';
    case 'gif': return 'image/gif';
    case 'heic': return 'image/heic';
    case 'heif': return 'image/heif';
    default: return 'image/jpeg';
  }
}

String friendlyStorageError(Object error) {
  final msg = error.toString().toLowerCase();
  if (msg.contains('bucket') && msg.contains('not found')) {
    return 'Storage bucket "media" is missing. Please create a public bucket named "media" in Supabase Storage.';
  }
  if (msg.contains('row-level security') || msg.contains('policy') || msg.contains('403')) {
    return 'Storage upload blocked by RLS policies. Enable public uploads for the "media" bucket in Supabase.';
  }
  if (msg.contains('anonymous') || msg.contains('signup')) {
    return 'Anonymous uploads are disabled. Enable Anonymous sign-in in Supabase → Auth → Providers.';
  }
  if (msg.contains('payload too large') || msg.contains('413')) {
    return 'File is too large. Try a shorter video (under 60MB) or a smaller photo.';
  }
  if (msg.contains('connection') || msg.contains('timeout')) {
    return 'Upload timed out. Check your internet connection and try again.';
  }
  return 'Cloud upload failed. Ensure "media" bucket exists and policies allow uploads.';
}
