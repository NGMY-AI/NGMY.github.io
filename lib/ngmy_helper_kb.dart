import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_network_resilience.dart';

const String kNgmyHelperKbPrefsKey = 'ngmy_helper_kb_v1';
const String kNgmyHelperKbCloudKey = 'ngmy_helper_kb';

/// Rich answer block — admin can mix text, media, links, signatures, etc.
class NgmyHelperKbBlock {
  final String type; // text | heading | image | video | link | signature | bullets | divider
  final String content;
  final String? url;
  final String? label;

  const NgmyHelperKbBlock({
    required this.type,
    this.content = '',
    this.url,
    this.label,
  });

  Map<String, dynamic> toJson() => {
        'type': type,
        if (content.isNotEmpty) 'content': content,
        if (url != null && url!.isNotEmpty) 'url': url,
        if (label != null && label!.isNotEmpty) 'label': label,
      };

  factory NgmyHelperKbBlock.fromJson(Map<String, dynamic> json) => NgmyHelperKbBlock(
        type: (json['type'] ?? 'text').toString(),
        content: (json['content'] ?? '').toString(),
        url: json['url']?.toString(),
        label: json['label']?.toString(),
      );
}

class NgmyHelperKbQuestion {
  final String id;
  final String question;
  final List<NgmyHelperKbBlock> answerBlocks;
  final String? thumbnailPath;
  final bool printable;
  final int sortOrder;

  const NgmyHelperKbQuestion({
    required this.id,
    required this.question,
    this.answerBlocks = const [],
    this.thumbnailPath,
    this.printable = false,
    this.sortOrder = 0,
  });

  NgmyHelperKbQuestion copyWith({
    String? id,
    String? question,
    List<NgmyHelperKbBlock>? answerBlocks,
    String? thumbnailPath,
    bool? printable,
    int? sortOrder,
  }) =>
      NgmyHelperKbQuestion(
        id: id ?? this.id,
        question: question ?? this.question,
        answerBlocks: answerBlocks ?? this.answerBlocks,
        thumbnailPath: thumbnailPath ?? this.thumbnailPath,
        printable: printable ?? this.printable,
        sortOrder: sortOrder ?? this.sortOrder,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'question': question,
        'answerBlocks': answerBlocks.map((b) => b.toJson()).toList(),
        if (thumbnailPath != null && thumbnailPath!.isNotEmpty) 'thumbnailPath': thumbnailPath,
        'printable': printable,
        'sortOrder': sortOrder,
      };

  factory NgmyHelperKbQuestion.fromJson(Map<String, dynamic> json) => NgmyHelperKbQuestion(
        id: (json['id'] ?? '').toString(),
        question: (json['question'] ?? '').toString(),
        answerBlocks: (json['answerBlocks'] as List?)
                ?.map((e) => NgmyHelperKbBlock.fromJson(Map<String, dynamic>.from(e as Map)))
                .toList() ??
            const [],
        thumbnailPath: json['thumbnailPath']?.toString(),
        printable: json['printable'] == true,
        sortOrder: json['sortOrder'] is num ? (json['sortOrder'] as num).toInt() : 0,
      );
}

class NgmyHelperKbCategory {
  final String id;
  final String title;
  final IconData icon;
  final int colorValue;
  final List<NgmyHelperKbQuestion> questions;
  final int sortOrder;

  const NgmyHelperKbCategory({
    required this.id,
    required this.title,
    required this.icon,
    required this.colorValue,
    this.questions = const [],
    this.sortOrder = 0,
  });

  NgmyHelperKbCategory copyWith({
    String? id,
    String? title,
    IconData? icon,
    int? colorValue,
    List<NgmyHelperKbQuestion>? questions,
    int? sortOrder,
  }) =>
      NgmyHelperKbCategory(
        id: id ?? this.id,
        title: title ?? this.title,
        icon: icon ?? this.icon,
        colorValue: colorValue ?? this.colorValue,
        questions: questions ?? this.questions,
        sortOrder: sortOrder ?? this.sortOrder,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'icon': _iconToKey(icon),
        'colorValue': colorValue,
        'sortOrder': sortOrder,
        'questions': questions.map((q) => q.toJson()).toList(),
      };

  factory NgmyHelperKbCategory.fromJson(Map<String, dynamic> json) => NgmyHelperKbCategory(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? 'Category').toString(),
        icon: _iconFromKey((json['icon'] ?? 'help').toString()),
        colorValue: json['colorValue'] is num ? (json['colorValue'] as num).toInt() : 0xFF64748B,
        sortOrder: json['sortOrder'] is num ? (json['sortOrder'] as num).toInt() : 0,
        questions: (json['questions'] as List?)
                ?.map((e) => NgmyHelperKbQuestion.fromJson(Map<String, dynamic>.from(e as Map)))
                .toList() ??
            const [],
      );
}

String _iconToKey(IconData icon) {
  final map = <IconData, String>{
    Icons.show_chart_rounded: 'investments',
    Icons.sports_esports_rounded: 'games',
    Icons.account_balance_wallet_rounded: 'loans',
    Icons.download_rounded: 'withdrawals',
    Icons.swap_horiz_rounded: 'deposits',
    Icons.verified_user_rounded: 'civic',
    Icons.storefront_rounded: 'store',
    Icons.work_rounded: 'jobs',
    Icons.replay_rounded: 'refunds',
    Icons.person_rounded: 'account',
    Icons.music_note_rounded: 'music',
    Icons.help_rounded: 'help',
  };
  for (final e in map.entries) {
    if (e.key.codePoint == icon.codePoint) return e.value;
  }
  return 'help';
}

IconData _iconFromKey(String key) {
  switch (key) {
    case 'investments':
      return Icons.show_chart_rounded;
    case 'games':
      return Icons.sports_esports_rounded;
    case 'loans':
      return Icons.account_balance_wallet_rounded;
    case 'withdrawals':
      return Icons.download_rounded;
    case 'deposits':
      return Icons.swap_horiz_rounded;
    case 'civic':
      return Icons.verified_user_rounded;
    case 'store':
      return Icons.storefront_rounded;
    case 'jobs':
      return Icons.work_rounded;
    case 'refunds':
      return Icons.replay_rounded;
    case 'account':
      return Icons.person_rounded;
    case 'music':
      return Icons.music_note_rounded;
    default:
      return Icons.help_rounded;
  }
}

List<NgmyHelperKbBlock> _blocks(String text, {List<NgmyHelperKbBlock>? extra}) => [
      NgmyHelperKbBlock(type: 'text', content: text),
      ...?extra,
    ];

NgmyHelperKbQuestion _q(String id, String question, String answer, {bool printable = false}) =>
    NgmyHelperKbQuestion(
      id: id,
      question: question,
      answerBlocks: _blocks(answer),
      printable: printable,
    );

/// Built-in categories shown when admin has not customized yet.
List<NgmyHelperKbCategory> ngmyHelperKbDefaultCategories() => [
      NgmyHelperKbCategory(
        id: 'investments',
        title: 'Investments',
        icon: Icons.show_chart_rounded,
        colorValue: 0xFF22C55E,
        sortOrder: 0,
        questions: [
          _q('inv1', 'How do I buy an investment plan?', 'Open Invest from the bottom menu, pick a plan, and confirm purchase from your NGMY balance. Once active, clock in on weekdays before 12:00 PM to earn daily returns.'),
          _q('inv2', 'When do I get paid from my plan?', 'Daily clock-in earnings accrue until 12:00 PM. Your payout is credited after you complete the clock-in session for that day.'),
          _q('inv3', 'Can I have more than one plan?', 'You can hold one active investment plan at a time. Upgrade by purchasing a higher plan when your balance allows.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'games',
        title: 'Games',
        icon: Icons.sports_esports_rounded,
        colorValue: 0xFF8B5CF6,
        sortOrder: 1,
        questions: [
          _q('gam1', 'How do NGMY games work?', 'Games are skill-based activities in the Games hub. Your score and accuracy can affect rewards depending on the game mode and admin settings.'),
          _q('gam2', 'Why did my game payout change?', 'Some games reduce payout when mistakes or missed inputs occur. Read the score summary after each round for details.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'loans',
        title: 'Loans',
        icon: Icons.account_balance_wallet_rounded,
        colorValue: 0xFFF97316,
        sortOrder: 2,
        questions: [
          _q('loan1', 'How do I apply for a loan?', 'Go to Loans in the app, submit your application with collateral details, and wait for admin review. Approved loans credit your balance.'),
          _q('loan2', 'What is the repayment period?', 'Standard loans run about two months with interest included in the total repayment shown at approval.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'withdrawals',
        title: 'Withdrawals',
        icon: Icons.download_rounded,
        colorValue: 0xFF3B82F6,
        sortOrder: 3,
        questions: [
          _q('wd1', 'How do I withdraw money?', 'Open Wallet → Withdraw, choose your method (Cash App, Zelle, Bitcoin, etc.), enter amount and details, then submit. Admin approval may be required.'),
          _q('wd2', 'Why is my withdrawal pending?', 'Withdrawals stay pending until an admin reviews them. Check Transaction History for APPROVED, PENDING, or REJECTED status.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'deposits',
        title: 'Deposits',
        icon: Icons.swap_horiz_rounded,
        colorValue: 0xFF14B8A6,
        sortOrder: 4,
        questions: [
          _q('dep1', 'How do I deposit funds?', 'Wallet → Deposit, pick a method, send payment using the official NGMY payment info shown, then submit your receipt or reference.'),
          _q('dep2', 'How long until my deposit posts?', 'Deposits appear as PENDING until verified. Approved deposits increase your spendable balance immediately.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'civic',
        title: 'Civic Registry',
        icon: Icons.verified_user_rounded,
        colorValue: 0xFFA78BFA,
        sortOrder: 5,
        questions: [
          _q('civ1', 'What is Civic Registry?', 'Civic Registry tracks member enrollment, contributions, and community standing. Admins may run help campaigns that members can contribute to.'),
          _q('civ2', 'What does “missed” mean on my profile?', 'Missed counts track periods you did not contribute during an active civic campaign. Too many missed marks can affect your status label.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'store',
        title: 'NGMY Store',
        icon: Icons.storefront_rounded,
        colorValue: 0xFFEC4899,
        sortOrder: 6,
        questions: [
          _q('sto1', 'How do I buy from NGMY Store?', 'Browse listings, open an item, and follow checkout. Payment typically comes from your NGMY balance or method shown on the listing.'),
          _q('sto2', 'How do I sell in the store?', 'Selling requires admin approval. Once granted, use Sell Item from the store area to create listings with photos and price.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'jobs',
        title: 'Jobs & Creator',
        icon: Icons.work_rounded,
        colorValue: 0xFFEA580C,
        sortOrder: 7,
        questions: [
          _q('job1', 'How do I find jobs?', 'Open Job Marketplace → Find Jobs to browse open posts. Apply from a job card if you are an approved worker.'),
          _q('job2', 'How do I post a job?', 'Job Marketplace → Post lets owners create job listings. Workers can claim jobs from the Claimed tab after approval.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'refunds',
        title: 'Refunds',
        icon: Icons.replay_rounded,
        colorValue: 0xFFEF4444,
        sortOrder: 8,
        questions: [
          _q('ref1', 'Can I get a refund?', 'Refunds depend on the product or service. Contact support through Wallet or admin channels with your transaction ID and reason.'),
          _q('ref2', 'How long do refunds take?', 'Approved refunds return to your NGMY balance or original method per admin policy. Check Transaction History for updates.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'account',
        title: 'Account',
        icon: Icons.person_rounded,
        colorValue: 0xFF38BDF8,
        sortOrder: 9,
        questions: [
          _q('acc1', 'How do I update my profile?', 'Open Profile / Settings to edit username, photo, and linked payment details where available.'),
          _q('acc2', 'I forgot my password — what now?', 'Use the login reset flow or contact an admin registrar if your account is managed through NGMY enrollment.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'music',
        title: 'Music Charts',
        icon: Icons.music_note_rounded,
        colorValue: 0xFFC084FC,
        sortOrder: 10,
        questions: [
          _q('mus1', 'What are Music Charts?', 'Music Charts highlight trending tracks and creator uploads inside NGMY media features when enabled by admin.'),
          _q('mus2', 'How do I upload music?', 'Use Media Hub or Studio tools to publish audio/video content. Follow posting limits shown on your account.'),
        ],
      ),
      NgmyHelperKbCategory(
        id: 'help',
        title: 'Help Center',
        icon: Icons.help_rounded,
        colorValue: 0xFF0D9488,
        sortOrder: 11,
        questions: [
          _q('hlp1', 'Where can I get live help?', 'Browse categories here for instant answers. When AI messages are available, use Chat for personalized help.'),
          _q('hlp2', 'How do daily Helper limits work?', 'Each user gets a set number of AI Helper messages per 24 hours. When the limit is used, this Help Topics library opens automatically.'),
        ],
      ),
    ];

class NgmyHelperKbStore {
  static List<NgmyHelperKbCategory>? _cache;

  static List<NgmyHelperKbCategory> get cached => _cache ?? ngmyHelperKbDefaultCategories();

  static List<NgmyHelperKbCategory> parseCategories(List<dynamic>? raw) {
    if (raw == null || raw.isEmpty) return ngmyHelperKbDefaultCategories();
    final list = raw.map((e) => NgmyHelperKbCategory.fromJson(Map<String, dynamic>.from(e as Map))).toList()
      ..sort((a, b) => a.sortOrder.compareTo(b.sortOrder));
    return list.isEmpty ? ngmyHelperKbDefaultCategories() : list;
  }

  static Map<String, dynamic> payloadFrom(List<NgmyHelperKbCategory> categories) => {
        'categories': categories.map((c) => c.toJson()).toList(),
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      };

  static Future<void> _persistLocal(List<NgmyHelperKbCategory> categories) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(kNgmyHelperKbPrefsKey, jsonEncode(payloadFrom(categories)));
      _cache = categories;
    } catch (e) {
      debugPrint('[helper kb] local save: $e');
    }
  }

  static Future<List<NgmyHelperKbCategory>> loadLocal() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(kNgmyHelperKbPrefsKey);
      if (raw == null || raw.trim().isEmpty) return ngmyHelperKbDefaultCategories();
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return ngmyHelperKbDefaultCategories();
      final cats = decoded['categories'];
      if (cats is! List) return ngmyHelperKbDefaultCategories();
      final list = parseCategories(cats);
      _cache = list;
      return list;
    } catch (e) {
      debugPrint('[helper kb] local load: $e');
      return ngmyHelperKbDefaultCategories();
    }
  }

  static Future<Map<String, dynamic>?> _fetchCloudRow() async {
    try {
      if (!await ngmyCanReachCloud()) return null;
      return await ngmyDbRelaySettingsFetch(kNgmyHelperKbCloudKey);
    } catch (e) {
      debugPrint('[helper kb] cloud fetch: $e');
    }
    return null;
  }

  static Future<bool> _upsertCloud(Map<String, dynamic> payload) async {
    try {
      if (!await ngmyCanReachCloud()) return false;
      return await ngmyDbRelaySettingsUpsert(kNgmyHelperKbCloudKey, payload);
    } catch (e) {
      debugPrint('[helper kb] cloud upsert: $e');
      return false;
    }
  }

  static Future<List<NgmyHelperKbCategory>> hydrate() async {
    final local = await loadLocal();
    _cache = local;
    final cloud = await _fetchCloudRow();
    if (cloud != null && cloud['categories'] is List) {
      final remote = parseCategories(cloud['categories'] as List);
      if (remote.isNotEmpty) {
        _cache = remote;
        await _persistLocal(remote);
        return remote;
      }
    }
    return local;
  }

  static Future<bool> save(List<NgmyHelperKbCategory> categories) async {
    await _persistLocal(categories);
    return _upsertCloud(payloadFrom(categories));
  }
}
