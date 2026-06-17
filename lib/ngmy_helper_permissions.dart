import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_helper_call_memory.dart';

/// Permanent Helper access flags — saved per account on this device.
class NgmyHelperPermissions {
  final bool contacts;
  final bool calendar;
  final bool calls;
  final bool allGrantedOnce;

  const NgmyHelperPermissions({
    this.contacts = false,
    this.calendar = false,
    this.calls = false,
    this.allGrantedOnce = false,
  });

  static const empty = NgmyHelperPermissions();

  bool get allGranted => contacts && calendar && calls;

  NgmyHelperPermissions copyWith({
    bool? contacts,
    bool? calendar,
    bool? calls,
    bool? allGrantedOnce,
  }) {
    return NgmyHelperPermissions(
      contacts: contacts ?? this.contacts,
      calendar: calendar ?? this.calendar,
      calls: calls ?? this.calls,
      allGrantedOnce: allGrantedOnce ?? this.allGrantedOnce,
    );
  }

  Map<String, dynamic> toJson() => {
        'contacts': contacts,
        'calendar': calendar,
        'calls': calls,
        'allGrantedOnce': allGrantedOnce,
      };

  factory NgmyHelperPermissions.fromJson(Map<String, dynamic> json) {
    return NgmyHelperPermissions(
      contacts: json['contacts'] == true,
      calendar: json['calendar'] == true,
      calls: json['calls'] == true,
      allGrantedOnce: json['allGrantedOnce'] == true,
    );
  }
}

class NgmyHelperPermissionStore {
  static const _keyPrefix = 'ngmy_helper_permissions_v1_';

  static String _key(String email) => '$_keyPrefix${email.toLowerCase().trim()}';

  static Future<NgmyHelperPermissions> load(String email) async {
    if (email.trim().isEmpty) return NgmyHelperPermissions.empty;
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_key(email));
    if (raw == null || raw.isEmpty) return NgmyHelperPermissions.empty;
    try {
      return NgmyHelperPermissions.fromJson(Map<String, dynamic>.from(jsonDecode(raw) as Map));
    } catch (e) {
      debugPrint('[helper-perms] load: $e');
      return NgmyHelperPermissions.empty;
    }
  }

  static Future<void> save(String email, NgmyHelperPermissions perms) async {
    if (email.trim().isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key(email), jsonEncode(perms.toJson()));
  }

  static Future<NgmyHelperPermissions> grantAll(String email) async {
    final next = NgmyHelperPermissions(
      contacts: true,
      calendar: true,
      calls: true,
      allGrantedOnce: true,
    );
    await save(email, next);
    return next;
  }

  static Future<NgmyHelperPermissions> grant(String email, {bool? contacts, bool? calendar, bool? calls}) async {
    final current = await load(email);
    final next = current.copyWith(
      contacts: contacts ?? true,
      calendar: calendar ?? true,
      calls: calls ?? true,
      allGrantedOnce: true,
    );
    await save(email, next);
    return next;
  }

  static String summaryForAi(NgmyHelperPermissions perms, {int contactCount = 0, int callMemoryCount = 0, int calendarCount = 0}) {
    final buf = StringBuffer('NGMY DEVICE CONNECTIONS (saved on this phone — do not ask again if granted):\n');
    buf.writeln('- Contacts: ${perms.contacts ? 'GRANTED ($contactCount names linked)' : 'NOT YET — ask user to say "allow access" ONCE, then never ask again'}');
    buf.writeln('- Calendar: ${perms.calendar ? 'GRANTED ($calendarCount NGMY events saved)' : 'NOT YET — one-time "allow access"'}');
    buf.writeln('- Calls / voicemail memory: ${perms.calls ? 'GRANTED ($callMemoryCount saved calls)' : 'NOT YET — one-time "allow access"'}');
    if (perms.allGrantedOnce) {
      buf.writeln('User already granted access on this device — NEVER ask for screenshots, manual contact linking, or permission again unless they revoked.');
    }
    return buf.toString().trim();
  }
}

bool ngmyUserGrantsHelperAccess(String text) {
  final t = text.toLowerCase().trim();
  if (RegExp(r'\b(yes|yeah|yep|sure|ok|okay|allow|grant|connect|enable|approve|give)\b').hasMatch(t) &&
      RegExp(r'\b(access|permission|contacts|calendar|calls|everything|all|phone|connect)\b').hasMatch(t)) {
    return true;
  }
  if (RegExp(r'\ballow access\b').hasMatch(t)) return true;
  if (RegExp(r'\bconnect my (phone|contacts|calendar)\b').hasMatch(t)) return true;
  return false;
}

bool ngmyUserAsksCalendarRead(String text) {
  final t = text.toLowerCase();
  return RegExp(
    r"\b(what'?s|what is|show|read|check|list).{0,40}(my )?(calendar|schedule|appointments|events)\b|"
    r'\b(calendar|schedule).{0,20}(right now|today|this week)\b',
  ).hasMatch(t);
}

bool ngmyUserNeedsHelperAccess(String text) {
  final t = text.toLowerCase();
  return ngmyUserAsksWhoCalled(text) ||
      ngmyUserAsksCalendarRead(text) ||
      RegExp(r'\b(call|text|message|whatsapp)\s+\w').hasMatch(t);
}
