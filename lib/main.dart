import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;

import 'package:crypto/crypto.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:video_player/video_player.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Supabase.initialize(
    url: 'https://gvufllqqxjnpicmkxzcg.supabase.co',
    anonKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dWZsbHFxeGpucGljbWt4emNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjA1OTksImV4cCI6MjA5NTM5NjU5OX0.NoJnis6t_RLSJOHu5iLdjGaCTxVj5ZAFnG3gBZ3XYbM',
  );
  runApp(const NGMYApp());
}

// --- DATA MODELS ---

String _hashPassword(String password) {
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

enum TransactionType { deposit, withdrawal, adminAdd, adminRemove, reimbursement }
enum TransactionStatus { pending, approved, rejected }
enum PaymentMethod { cashApp, bitcoin, system }

class AppTransaction {
  final String id;
  final String userEmail;
  final double amount;
  final TransactionType type;
  final PaymentMethod method;
  final String? sourceDetails;
  final String? screenshotPath;
  final String? verificationCode;
  TransactionStatus status;
  final DateTime timestamp;

  AppTransaction({
    required this.id, required this.userEmail, required this.amount,
    required this.type, required this.method, this.sourceDetails,
    this.screenshotPath, this.verificationCode, this.status = TransactionStatus.pending,
    required this.timestamp,
  });

  Map<String, dynamic> toJson() => {
    'id': id, 'userEmail': userEmail, 'amount': amount,
    'type': type.index, 'method': method.index,
    'sourceDetails': sourceDetails, 'screenshotPath': screenshotPath,
    'verificationCode': verificationCode, 'status': status.index,
    'timestamp': timestamp.toUtc().toIso8601String(),
  };

  factory AppTransaction.fromJson(Map<String, dynamic> json) {
    DateTime parseDate(dynamic v) {
      if (v == null || v == "null" || v.toString().isEmpty) return DateTime.now();
      try {
        final d = DateTime.parse(v.toString());
        return d.isUtc ? d.toLocal() : d;
      } catch (_) { return DateTime.now(); }
    }
    return AppTransaction(
      id: json['id'] ?? '',
      userEmail: json['userEmail'] ?? '',
      amount: (json['amount'] ?? 0.0).toDouble(),
      type: TransactionType.values[(json['type'] ?? 0) as int],
      method: PaymentMethod.values[(json['method'] ?? 0) as int],
      sourceDetails: json['sourceDetails'],
      screenshotPath: json['screenshotPath'],
      verificationCode: json['verificationCode'],
      status: TransactionStatus.values[(json['status'] ?? 0) as int],
      timestamp: parseDate(json['timestamp']),
    );
  }
}

class AppConfig {
  String officialCashApp;
  String officialBitcoin;
  String termsAndConditions;
  String privacyPolicy;
  String loanPhone;
  String loanHowItWorks;
  AppConfig({
    this.officialCashApp = 'NGMYpay',
    this.officialBitcoin = 'bc1q...',
    this.termsAndConditions = 'Welcome to NGMY. By using our services, you agree to...',
    this.privacyPolicy = 'We value your privacy. We collect data only to...',
    this.loanPhone = '706-623-7963',
    this.loanHowItWorks = '1. Submit your loan application with collateral details\n2. Your application will be reviewed within a few hours\n3. If approved, the loan amount will be credited to your account\n4. Make payments over 2 months (total repayment: loan + 36% interest)\n5. Upon full repayment, your collateral is released',
  });
  Map<String, dynamic> toJson() => {
    'officialCashApp': officialCashApp,
    'officialBitcoin': officialBitcoin,
    'termsAndConditions': termsAndConditions,
    'privacyPolicy': privacyPolicy,
    'loanPhone': loanPhone,
    'loanHowItWorks': loanHowItWorks,
  };
  factory AppConfig.fromJson(Map<String, dynamic> json) => AppConfig(
    officialCashApp: json['officialCashApp'] ?? 'NGMYpay',
    officialBitcoin: json['officialBitcoin'] ?? 'bc1q...',
    termsAndConditions: json['termsAndConditions'] ?? 'Welcome to NGMY. By using our services, you agree to...',
    privacyPolicy: json['privacyPolicy'] ?? 'We value your privacy. We collect data only to...',
    loanPhone: json['loanPhone'] ?? '706-623-7963',
    loanHowItWorks: json['loanHowItWorks'] ?? '1. Submit your loan application with collateral details\n2. Your application will be reviewed within a few hours\n3. If approved, the loan amount will be credited to your account\n4. Make payments over 2 months (total repayment: loan + 36% interest)\n5. Upon full repayment, your collateral is released',
  );
}

class InvestmentPlan {
  String name; double price; double roi;
  InvestmentPlan({required this.name, required this.price, required this.roi});
  Map<String, dynamic> toJson() => {'name': name, 'price': price, 'roi': roi};
  factory InvestmentPlan.fromJson(Map<String, dynamic> json) => InvestmentPlan(name: json['name'], price: json['price'], roi: json['roi']);
}

class MediaPost {
  final String id;
  final String userEmail;
  final String username;
  final String videoUrl;
  final String caption;
  final DateTime timestamp;
  int likes;

  MediaPost({required this.id, required this.userEmail, required this.username, required this.videoUrl, required this.caption, required this.timestamp, this.likes = 0});

  Map<String, dynamic> toJson() => {
    'id': id, 'userEmail': userEmail, 'username': username, 'videoUrl': videoUrl,
    'caption': caption, 'timestamp': timestamp.toUtc().toIso8601String(), 'likes': likes
  };

  factory MediaPost.fromJson(Map<String, dynamic> json) {
    return MediaPost(
      id: json['id'] ?? '',
      userEmail: json['userEmail'] ?? '',
      username: json['username'] ?? 'User',
      videoUrl: json['videoUrl'] ?? '',
      caption: json['caption'] ?? '',
      timestamp: DateTime.parse(json['timestamp'] ?? DateTime.now().toIso8601String()).toLocal(),
      likes: json['likes'] ?? 0,
    );
  }
}

class ActiveInvestment {
  String name; double amount; double dailyROI; final DateTime purchaseDate;
  double totalEarned; int daysClockedIn;
  ActiveInvestment({required this.name, required this.amount, required this.dailyROI, required this.purchaseDate, this.totalEarned = 0.0, this.daysClockedIn = 0});
  Map<String, dynamic> toJson() => {'name': name, 'amount': amount, 'dailyROI': dailyROI, 'purchaseDate': purchaseDate.toUtc().toIso8601String(), 'totalEarned': totalEarned, 'daysClockedIn': daysClockedIn};
  factory ActiveInvestment.fromJson(Map<String, dynamic> json) {
    DateTime parseDate(dynamic v) {
      if (v == null || v == "null" || v.toString().isEmpty) return DateTime.now();
      try {
        final d = DateTime.parse(v.toString());
        return d.isUtc ? d.toLocal() : d;
      } catch (_) { return DateTime.now(); }
    }
    return ActiveInvestment(
      name: json['name'], 
      amount: (json['amount'] ?? 0.0).toDouble(), 
      dailyROI: (json['dailyROI'] ?? 0.0).toDouble(), 
      purchaseDate: parseDate(json['purchaseDate']), 
      totalEarned: (json['totalEarned'] ?? 0.0).toDouble(), 
      daysClockedIn: json['daysClockedIn'] ?? 0
    );
  }
  double get dailyAmount => amount * dailyROI;
  int get daysLeft => 261 - daysClockedIn;
}

class UserData {
  String email; String phone; String username; double accountBalance; double totalProfit;
  bool isClockedIn; DateTime? clockInStartTime; bool isAdmin; ActiveInvestment? activeInvestment;
  String status; // active, suspended, verified, disabled
  bool forceLogout; int referralCount; int points;
  String? profilePicturePath;
  bool isAuthorizedRegistrar;
  DateTime? lastClockInDate;
  String passwordHash;
  UserData({this.email = '', this.phone = '', this.username = 'User', this.accountBalance = 0.0, this.totalProfit = 0.0, this.isClockedIn = false, this.clockInStartTime, this.isAdmin = false, this.activeInvestment, this.status = 'active', this.forceLogout = false, this.referralCount = 0, this.points = 0, this.profilePicturePath, this.isAuthorizedRegistrar = false, this.lastClockInDate, this.passwordHash = ''});
  double get totalInvestmentAmount {
    if (activeInvestment == null) return 0.0;
    if (activeInvestment!.daysLeft <= 0) return 0.0;
    return activeInvestment!.amount;
  }
  bool get alreadyClockedInToday {
    if (lastClockInDate == null) return false;
    final now = DateTime.now();
    return lastClockInDate!.year == now.year && 
           lastClockInDate!.month == now.month && 
           lastClockInDate!.day == now.day;
  }
  double get currentTodayEarnings {
    if (!isClockedIn || clockInStartTime == null || activeInvestment == null) return 0.0;
    final elapsed = DateTime.now().difference(clockInStartTime!);
    final totalDaily = activeInvestment!.dailyAmount;
    double earnings = (totalDaily / 24.0) * (elapsed.inSeconds / 3600.0);
    return earnings > totalDaily ? totalDaily : earnings;
  }
  Map<String, dynamic> toJson() => {'email': email, 'phone': phone, 'username': username, 'accountBalance': accountBalance, 'totalProfit': totalProfit, 'isClockedIn': isClockedIn, 'clockInStartTime': clockInStartTime?.toUtc().toIso8601String(), 'isAdmin': isAdmin, 'activeInvestment': activeInvestment?.toJson(), 'status': status, 'forceLogout': forceLogout, 'referralCount': referralCount, 'points': points, 'profilePicturePath': profilePicturePath, 'isAuthorizedRegistrar': isAuthorizedRegistrar, 'lastClockInDate': lastClockInDate?.toUtc().toIso8601String(), 'passwordHash': passwordHash};
  factory UserData.fromJson(Map<String, dynamic> json) {
    DateTime? parseDate(dynamic v) {
      if (v == null || v == "null" || v.toString().isEmpty) return null;
      try {
        final d = DateTime.parse(v.toString());
        return d.isUtc ? d.toLocal() : d;
      } catch (_) { return null; }
    }
    ActiveInvestment? parseActiveInvestment(dynamic raw) {
      if (raw == null) return null;
      try {
        if (raw is Map<String, dynamic>) return ActiveInvestment.fromJson(raw);
        if (raw is Map) return ActiveInvestment.fromJson(Map<String, dynamic>.from(raw));
        if (raw is String && raw.trim().isNotEmpty) {
          final decoded = jsonDecode(raw);
          if (decoded is Map<String, dynamic>) return ActiveInvestment.fromJson(decoded);
          if (decoded is Map) return ActiveInvestment.fromJson(Map<String, dynamic>.from(decoded));
        }
      } catch (_) {}
      return null;
    }
    return UserData(
      email: json['email'] ?? '', 
      phone: json['phone'] ?? '', 
      username: json['username'] ?? 'User', 
      accountBalance: (json['accountBalance'] ?? 0.0).toDouble(), 
      totalProfit: (json['totalProfit'] ?? 0.0).toDouble(), 
      isClockedIn: json['isClockedIn'] ?? false, 
      clockInStartTime: parseDate(json['clockInStartTime']), 
      isAdmin: json['isAdmin'] ?? false, 
      activeInvestment: parseActiveInvestment(json['activeInvestment']), 
      status: json['status'] ?? 'active', 
      forceLogout: json['forceLogout'] ?? false, 
      referralCount: json['referralCount'] ?? 0, 
      points: json['points'] ?? 0, 
      profilePicturePath: json['profilePicturePath'], 
      isAuthorizedRegistrar: json['isAuthorizedRegistrar'] ?? false, 
      lastClockInDate: parseDate(json['lastClockInDate']),
      passwordHash: json['passwordHash'] ?? ''
    );
  }
}

// --- MAIN APP ---

class NGMYApp extends StatefulWidget {
  const NGMYApp({super.key});
  @override State<NGMYApp> createState() => _NGMYAppState();
}

class _NGMYAppState extends State<NGMYApp> {
  ThemeMode _themeMode = ThemeMode.dark;
  UserData? _currentUser;
  bool _isLoading = true;
  List<AppTransaction> _allTransactions = [];
  List<UserData> _allUsers = [];
  AppConfig _config = AppConfig();
  List<InvestmentPlan> _globalPlans = [
    InvestmentPlan(name: 'Starter Plan', price: 5.0, roi: 0.0286),
    InvestmentPlan(name: 'Starter Plan', price: 20.0, roi: 0.0286),
    InvestmentPlan(name: 'Basic Plan', price: 30.0, roi: 0.0286),
    InvestmentPlan(name: 'Bronze Plan', price: 50.0, roi: 0.0286),
    InvestmentPlan(name: 'Bronze Plan', price: 100.0, roi: 0.0286),
    InvestmentPlan(name: 'Gold Plan', price: 200.0, roi: 0.0286)
  ];
  List<MediaPost> _allMedia = [];

  RealtimeChannel? _usersChannel;
  RealtimeChannel? _transactionsChannel;
  RealtimeChannel? _mediaChannel;
  StreamSubscription<AuthState>? _authSub;
  bool _isSyncing = false;

  @override void initState() {
    super.initState();
    _loadData().then((_) {
      _subscribeToRealtime();
      _subscribeToAuthState();
    });
  }

  @override void dispose() {
    try { _usersChannel?.unsubscribe(); } catch (_) {}
    try { _transactionsChannel?.unsubscribe(); } catch (_) {}
    try { _mediaChannel?.unsubscribe(); } catch (_) {}
    try { _authSub?.cancel(); } catch (_) {}
    super.dispose();
  }

  final supabase = Supabase.instance.client;

  void _subscribeToAuthState() {
    _authSub = supabase.auth.onAuthStateChange.listen((data) {
      final authUser = data.session?.user;
      final email = authUser?.email?.toLowerCase().trim();
      if (email == null || email.isEmpty) return;
      final fullName = (authUser?.userMetadata?['full_name'] ?? '').toString().trim();
      _signInOrCreateFromGoogle(email, fullName: fullName);
    });
    final current = supabase.auth.currentUser;
    final email = current?.email?.toLowerCase().trim();
    if (email != null && email.isNotEmpty) {
      final fullName = (current?.userMetadata?['full_name'] ?? '').toString().trim();
      _signInOrCreateFromGoogle(email, fullName: fullName);
    }
  }

  Future<void> _signInOrCreateFromGoogle(String email, {String fullName = ''}) async {
    final admins = ['kbpabloqr@gmail.com', 'ngumoyaking@gmail.com', 'appbusiness321@gmail.com', 'appbusiness84@gmail.com'];
    final idx = _allUsers.indexWhere((u) => u.email.toLowerCase().trim() == email);
    if (!mounted) return;
    setState(() {
      if (idx == -1) {
        final user = UserData(
          email: email,
          username: fullName.isNotEmpty ? fullName : email.split('@').first,
          isAdmin: admins.contains(email),
          // Google users do not need local password flow.
          passwordHash: '',
        );
        _allUsers.add(user);
        _currentUser = user;
      } else {
        if (fullName.isNotEmpty) {
          _allUsers[idx].username = fullName;
        }
        _currentUser = _allUsers[idx];
      }
    });
    await _saveData();
  }

  void _subscribeToRealtime() {
    try {
      _usersChannel = supabase
          .channel('public:users')
          .onPostgresChanges(
            event: PostgresChangeEvent.all,
            schema: 'public',
            table: 'users',
            callback: (payload) => _onUsersChange(payload),
          )
          .subscribe();

      _transactionsChannel = supabase
          .channel('public:transactions')
          .onPostgresChanges(
            event: PostgresChangeEvent.all,
            schema: 'public',
            table: 'transactions',
            callback: (payload) => _onTransactionsChange(payload),
          )
          .subscribe();

      _mediaChannel = supabase
          .channel('public:media')
          .onPostgresChanges(
            event: PostgresChangeEvent.all,
            schema: 'public',
            table: 'media',
            callback: (payload) => _onMediaChange(payload),
          )
          .subscribe();
      debugPrint('Realtime subscriptions active');
    } catch (e) {
      debugPrint('Realtime subscribe error: $e');
    }
  }

  void _onMediaChange(PostgresChangePayload payload) {
    if (_isSyncing) return;
    try {
      if (payload.eventType == PostgresChangeEvent.delete) {
        final id = (payload.oldRecord['id'] ?? '').toString();
        if (id.isEmpty) return;
        setState(() => _allMedia.removeWhere((m) => m.id == id));
      } else {
        final post = MediaPost.fromJson(payload.newRecord);
        setState(() {
          final idx = _allMedia.indexWhere((m) => m.id == post.id);
          if (idx == -1) {
            _allMedia.add(post);
          } else {
            _allMedia[idx] = post;
          }
        });
      }
    } catch (e) {
      debugPrint('Media realtime apply error: $e');
    }
  }

  void _onUsersChange(PostgresChangePayload payload) {
    if (_isSyncing) return;
    try {
      if (payload.eventType == PostgresChangeEvent.delete) {
        final email = (payload.oldRecord['email'] ?? '').toString().toLowerCase().trim();
        if (email.isEmpty) return;
        setState(() => _allUsers.removeWhere((u) => u.email.toLowerCase().trim() == email));
      } else {
        final newRow = payload.newRecord;
        final updatedUser = UserData.fromJson(newRow);
        final email = updatedUser.email.toLowerCase().trim();
        if (email.isEmpty) return;
        setState(() {
          final idx = _allUsers.indexWhere((u) => u.email.toLowerCase().trim() == email);
          if (idx == -1) {
            _allUsers.add(updatedUser);
          } else {
            _allUsers[idx] = updatedUser;
          }
          if (_currentUser != null && _currentUser!.email.toLowerCase().trim() == email) {
            if (updatedUser.forceLogout) {
              _currentUser = null;
            } else {
              _currentUser = updatedUser;
            }
          }
        });
      }
    } catch (e) {
      debugPrint('Users realtime apply error: $e');
    }
  }

  void _onTransactionsChange(PostgresChangePayload payload) {
    if (_isSyncing) return;
    try {
      if (payload.eventType == PostgresChangeEvent.delete) {
        final id = (payload.oldRecord['id'] ?? '').toString();
        if (id.isEmpty) return;
        setState(() => _allTransactions.removeWhere((t) => t.id == id));
      } else {
        final tx = AppTransaction.fromJson(payload.newRecord);
        setState(() {
          final idx = _allTransactions.indexWhere((t) => t.id == tx.id);
          if (idx == -1) {
            _allTransactions.add(tx);
          } else {
            _allTransactions[idx] = tx;
          }
        });
      }
    } catch (e) {
      debugPrint('Transactions realtime apply error: $e');
    }
  }

  Future<void> _loadData() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      
      String? safeGet(String key) {
        try {
          final val = prefs.getString(key);
          if (val == null || val.trim().isEmpty || val == "null") return null;
          final trimmed = val.trim();
          // Reject corrupted/binary-like strings (can crash jsonDecode on Windows).
          if (trimmed.contains('\u0000')) {
            prefs.remove(key);
            return null;
          }
          if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) return null;
          return trimmed;
        } catch (_) { return null; }
      }

      // 1. Load Local Config & Plans First
      final plansJson = safeGet('investment_plans');
      if (plansJson != null) {
        try {
          final decoded = jsonDecode(plansJson);
          if (decoded is List) _globalPlans = decoded.map((e) => InvestmentPlan.fromJson(e)).toList();
        } catch (_) {}
      }
      
      final configJson = safeGet('app_config');
      if (configJson != null) {
        try {
          final map = jsonDecode(configJson);
          if (map is Map<String, dynamic>) _config = AppConfig.fromJson(map);
        } catch (_) {}
      }

      // 2. Fetch Users & Transactions from Supabase
      try {
        final usersData = await supabase.from('users').select();
        if (usersData != null) {
          _allUsers = (usersData as List).map((e) => UserData.fromJson(e)).toList();
        }

        final transData = await supabase.from('transactions').select();
        if (transData != null) {
          _allTransactions = (transData as List).map((e) => AppTransaction.fromJson(e)).toList();
        }

        final mediaData = await supabase.from('media').select();
        if (mediaData != null) {
          _allMedia = (mediaData as List).map((e) => MediaPost.fromJson(e)).toList();
        }
      } catch (e) {
        debugPrint("Supabase Load Error: $e. Falling back to local.");
        final uLocal = safeGet('all_users');
        if (uLocal != null) {
          try {
            _allUsers = (jsonDecode(uLocal) as List).map((e) => UserData.fromJson(e)).toList();
          } catch (_) {
            prefs.remove('all_users');
          }
        }
        final tLocal = safeGet('all_transactions');
        if (tLocal != null) {
          try {
            _allTransactions = (jsonDecode(tLocal) as List).map((e) => AppTransaction.fromJson(e)).toList();
          } catch (_) {
            prefs.remove('all_transactions');
          }
        }
      }

      // 3. Handle Current User Session
      final userJson = safeGet('current_user');
      if (userJson != null) {
        try { 
          final map = jsonDecode(userJson);
          if (map is Map<String, dynamic>) {
            final localUser = UserData.fromJson(map);
            final index = _allUsers.indexWhere((u) => u.email.toLowerCase().trim() == localUser.email.toLowerCase().trim());
            if (index != -1) {
              _currentUser = _allUsers[index];
            } else {
              _currentUser = localUser;
            }
          }
        } catch (_) {}
      }
      
      // Ensure admins are updated
      final admins = ['kbpabloqr@gmail.com', 'ngumoyaking@gmail.com', 'appbusiness321@gmail.com', 'appbusiness84@gmail.com'];
      for (var u in _allUsers) if (admins.contains(u.email.toLowerCase().trim())) u.isAdmin = true;

    } catch (e) { debugPrint("General load error: $e"); }
    if (mounted) setState(() => _isLoading = false);
  }

  Future<void> _saveData() async {
    _isSyncing = true;
    try {
      final prefs = await SharedPreferences.getInstance();

      // Normalize/merge users BEFORE syncing so stale duplicates can't overwrite
      // fresh account state (e.g., activeInvestment disappearing after purchase).
      _allUsers.removeWhere((u) => u.email.trim().isEmpty);
      final mergedByEmail = <String, UserData>{};
      for (final u in _allUsers) {
        final key = u.email.toLowerCase().trim();
        if (key.isEmpty) continue;
        mergedByEmail[key] = u;
      }
      if (_currentUser != null) {
        final key = _currentUser!.email.toLowerCase().trim();
        if (key.isNotEmpty) {
          mergedByEmail[key] = _currentUser!;
        }
      }
      _allUsers = mergedByEmail.values.toList();

      if (_currentUser != null) {
        final email = _currentUser!.email.toLowerCase().trim();
        if (email.isNotEmpty) {
          final merged = mergedByEmail[email];
          if (merged != null) _currentUser = merged;
          await prefs.setString('current_user', jsonEncode(_currentUser!.toJson()));
        }
      }
      
      // Sync all transactions to Supabase
      if (_allTransactions.isNotEmpty) {
        try {
          await supabase.from('transactions').upsert(_allTransactions.map((e) => e.toJson()).toList());
        } catch (e) {
          debugPrint("Transaction sync error: $e");
        }
      }
      
      // Sync all users to Supabase (deduped list)
      if (_allUsers.isNotEmpty) {
        try {
          await supabase.from('users').upsert(_allUsers.map((e) => e.toJson()).toList());
        } catch (e) {
          debugPrint("User sync error: $e");
        }
      }

      if (_allMedia.isNotEmpty) {
        try {
          await supabase.from('media').upsert(_allMedia.map((e) => e.toJson()).toList());
        } catch (e) {
          debugPrint("Media sync error: $e");
        }
      }

      await prefs.setString('all_transactions', jsonEncode(_allTransactions.map((e) => e.toJson()).toList()));
      await prefs.setString('all_users', jsonEncode(_allUsers.map((e) => e.toJson()).toList()));
      await prefs.setString('investment_plans', jsonEncode(_globalPlans.map((e) => e.toJson()).toList()));
      await prefs.setString('app_config', jsonEncode(_config.toJson()));
      await prefs.setString('all_media', jsonEncode(_allMedia.map((e) => e.toJson()).toList()));
      
    } catch (e) { debugPrint("Save error: $e"); }
    finally {
      Future.delayed(const Duration(milliseconds: 800), () => _isSyncing = false);
    }
  }

  @override Widget build(BuildContext context) {
    if (_isLoading) return const MaterialApp(debugShowCheckedModeBanner: false, home: Scaffold(body: Center(child: CircularProgressIndicator())));
    return MaterialApp(
      title: 'NGMY', debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: const Color(0xFF00B25A), brightness: Brightness.light, scaffoldBackgroundColor: const Color(0xFFF0F4F0), cardColor: Colors.white),
      darkTheme: ThemeData(useMaterial3: true, colorSchemeSeed: const Color(0xFFBB86FC), brightness: Brightness.dark, scaffoldBackgroundColor: const Color(0xFF0A0A0A), cardColor: const Color(0xFF1E1E1E)),
      themeMode: _themeMode,
      home: _currentUser == null
          ? AuthScreen(
              allUsers: _allUsers,
              onGoogleLogin: () async {
                try {
                  final launched = await supabase.auth.signInWithOAuth(
                    OAuthProvider.google,
                    redirectTo: 'io.supabase.flutter://login-callback',
                  );
                  if (!launched) return 'Could not open Google login screen.';
                  return null;
                } catch (e) {
                  return 'Google login failed: $e';
                }
              },
              onResetPasswordByEmail: (email, newHash) async {
                final emailNorm = email.toLowerCase().trim();
                debugPrint('[ResetPW] Starting reset for $emailNorm');
                _isSyncing = true;

                try {
                  // 1. Try to update the password in Supabase users table
                  final result = await supabase
                      .from('users')
                      .update({'passwordHash': newHash})
                      .eq('email', emailNorm)
                      .select();
                  
                  debugPrint('[ResetPW] Supabase update result: ${result.length} rows');

                  // 2. If user doesn't exist in the custom table yet, we can't update.
                  // But usually they should exist if they have an account.
                  // If they don't, we'll let the onAuthComplete handle it during next login
                  // or create it now if we want. Let's ensure it exists.
                  if (result.isEmpty) {
                     debugPrint('[ResetPW] User not found in custom table, inserting new record');
                     await supabase.from('users').insert({
                       'email': emailNorm,
                       'passwordHash': newHash,
                       'username': emailNorm.split('@').first,
                     });
                  }

                  // 3. Update the local list immediately so login works without restart
                  final idx = _allUsers.indexWhere((u) => u.email.toLowerCase().trim() == emailNorm);
                  if (mounted) {
                    setState(() {
                      if (idx != -1) {
                        _allUsers[idx].passwordHash = newHash;
                        debugPrint('[ResetPW] Updated existing local user');
                      } else {
                        _allUsers.add(UserData(email: emailNorm, passwordHash: newHash, username: emailNorm.split('@').first));
                        debugPrint('[ResetPW] Added new user to local list');
                      }
                    });
                  }

                  // 4. Force save to SharedPreferences
                  final prefs = await SharedPreferences.getInstance();
                  await prefs.setString('all_users', jsonEncode(_allUsers.map((e) => e.toJson()).toList()));
                  
                  debugPrint('[ResetPW] Reset completed successfully');
                  _isSyncing = false;
                  return true;
                } catch (e) {
                  debugPrint('[ResetPW] Error: $e');
                  _isSyncing = false;
                  return false;
                }
              },
              onAuthComplete: (e, p, u, passwordHash, isLogin) async {
              final admins = ['kbpabloqr@gmail.com', 'ngumoyaking@gmail.com', 'appbusiness321@gmail.com', 'appbusiness84@gmail.com'];
              final email = e.toLowerCase().trim();
              
      if (isLogin) {
                final index = _allUsers.indexWhere((u) => u.email.toLowerCase().trim() == email);
                if (index != -1) {
                  // Ensure local password hash is updated if it was empty or different (e.g., after reset)
                  _allUsers[index].passwordHash = passwordHash;
                  setState(() => _currentUser = _allUsers[index]); 
                }
              } else {
                final user = UserData(email: email, phone: p, username: u, isAdmin: admins.contains(email), passwordHash: passwordHash);
                setState(() { 
                  _currentUser = user; 
                  _allUsers.add(user); 
                });
              }
              await _saveData();
            })
          : MainScreen(
              user: _currentUser!, allTransactions: _allTransactions, allUsers: _allUsers, globalPlans: _globalPlans,
              allMedia: _allMedia,
              config: _config,
              onThemeChanged: (m) => setState(() => _themeMode = m), currentThemeMode: _themeMode, 
              onLogout: () async { 
                try {
                  final p = await SharedPreferences.getInstance();
                  await p.remove('current_user');
                } catch (_) {}
                setState(() => _currentUser = null); 
              },
              onDataChanged: () => _saveData(),
              onAddTransaction: (t) { setState(() => _allTransactions.add(t)); _saveData(); },
              onProcessTransaction: (t, approve) { setState(() {
                t.status = approve ? TransactionStatus.approved : TransactionStatus.rejected;
                final targetIndex = _allUsers.indexWhere((u) => u.email == t.userEmail);
                if (targetIndex == -1) return;
                if (approve) {
                  if (t.type == TransactionType.deposit || t.type == TransactionType.adminAdd || t.type == TransactionType.reimbursement) {
                    _allUsers[targetIndex].accountBalance += t.amount;
                  }
                  // For withdrawals: balance already deducted at submit, just approve.
                } else {
                  // Rejection: refund the user if it was a withdrawal (we deducted on submit).
                  if (t.type == TransactionType.withdrawal) {
                    _allUsers[targetIndex].accountBalance += t.amount;
                  }
                }
                if (_currentUser != null && _currentUser!.email == t.userEmail) _currentUser = _allUsers[targetIndex];
              }); _saveData(); },
              onAddPlan: (p) { setState(() { _globalPlans.add(p); _globalPlans.sort((a, b) => a.price.compareTo(b.price)); }); _saveData(); },
              onPostMedia: (post) { setState(() => _allMedia.insert(0, post)); _saveData(); },
            ),
    );
  }
}

// --- UI COMPONENTS ---

class FloatingTitle extends StatelessWidget {
  final String title; final Widget? leading; final Widget? trailing; final VoidCallback? onTap;
  const FloatingTitle({super.key, required this.title, this.leading, this.trailing, this.onTap});
  @override Widget build(BuildContext context) { return GestureDetector(onTap: onTap, child: Container(height: 60, padding: const EdgeInsets.symmetric(horizontal: 10), decoration: BoxDecoration(color: Theme.of(context).cardColor, borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 15, offset: const Offset(0, 5))]), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [leading ?? const SizedBox(width: 40), Expanded(child: Center(child: Text(title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15, letterSpacing: 1)))), trailing ?? const SizedBox(width: 40)]))); }
}

// --- SCREENS ---

class AuthScreen extends StatefulWidget {
  final List<UserData> allUsers;
  final Function(String, String, String, String, bool) onAuthComplete;
  final Future<String?> Function() onGoogleLogin;
  final Future<bool> Function(String email, String newPasswordHash) onResetPasswordByEmail;
  const AuthScreen({super.key, required this.onAuthComplete, required this.allUsers, required this.onGoogleLogin, required this.onResetPasswordByEmail});
  @override State<AuthScreen> createState() => _AuthScreenState();
}
class _AuthScreenState extends State<AuthScreen> {
  bool _isLogin = true; 
  final _e = TextEditingController(); 
  final _p = TextEditingController(); 
  final _s = TextEditingController();
  final _u = TextEditingController();

  void _submit() {
    final email = _e.text.toLowerCase().trim();
    final phone = _p.text.trim();
    final username = _u.text.trim();
    
    if (email.isEmpty || !email.endsWith('@gmail.com')) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Please enter a valid Gmail address')));
      return;
    }
    
    final password = _s.text;
    if (password.isEmpty || password.length < 6) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Password must be at least 6 characters')));
      return;
    }

    if (_isLogin) {
      final user = widget.allUsers.firstWhere(
        (u) => u.email.toLowerCase().trim() == email, 
        orElse: () => UserData(email: '')
      );
      
      final enteredHash = _hashPassword(password);
      debugPrint('[Login] email=$email storedHash=${user.passwordHash.isEmpty ? "(empty)" : "${user.passwordHash.substring(0, 8)}..."} enteredHash=${enteredHash.substring(0, 8)}...');
      
      // If user exists and hash matches, proceed immediately
      if (user.email.isNotEmpty && user.passwordHash.isNotEmpty && user.passwordHash == enteredHash) {
        widget.onAuthComplete(email, '', '', enteredHash, true);
        return;
      }
      
      // Fallback: If not found locally or hash mismatch, check Supabase directly
      // This is crucial after a password reset to ensure we have the absolute latest data.
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Checking credentials...')));
      
      Supabase.instance.client
          .from('users')
          .select()
          .eq('email', email)
          .maybeSingle()
          .then((fresh) {
            if (fresh == null) {
              if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Account not found. Please Sign Up first.')));
              return;
            }
            
            final dbHash = (fresh['passwordHash'] ?? '').toString();
            if (dbHash.isNotEmpty && dbHash == enteredHash) {
              // Password matches Supabase, let's login and update local state
              widget.onAuthComplete(email, '', '', enteredHash, true);
            } else {
              if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Incorrect password')));
            }
          })
          .catchError((err) {
            if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Login error: $err')));
          });
    } else {
      if (username.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Please enter a username')));
        return;
      }
      if (phone.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Please enter a phone number')));
        return;
      }
      
      final existsEmail = widget.allUsers.any((u) => u.email.toLowerCase().trim() == email);
      if (existsEmail) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('This email is already registered. Please Login.')));
        return;
      }
      final existsUser = widget.allUsers.any((u) => u.username.toLowerCase().trim() == username.toLowerCase().trim());
      if (existsUser) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Username already taken')));
        return;
      }
      final existsPhone = widget.allUsers.any((u) => u.phone.trim() == phone);
      if (existsPhone) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Phone number already registered')));
        return;
      }
      
      widget.onAuthComplete(email, phone, username, _hashPassword(password), false);
    }
  }

  void _showForgotPassword() {
    final emailCtl = TextEditingController(text: _e.text);
    final codeCtl = TextEditingController();
    final newPwCtl = TextEditingController();
    final confirmCtl = TextEditingController();
    int step = 1;
    bool isLoading = false;

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (c) => StatefulBuilder(builder: (ctx, setLocal) {
        Future<void> sendCode() async {
          final email = emailCtl.text.toLowerCase().trim();
          if (email.isEmpty || !email.endsWith('@gmail.com')) {
            ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter a valid Gmail address')));
            return;
          }
          setLocal(() => isLoading = true);
          try {
            await Supabase.instance.client.auth.signInWithOtp(
              email: email,
              shouldCreateUser: true,
            );
            setLocal(() {
              isLoading = false;
              step = 2;
            });
            ScaffoldMessenger.of(ctx).showSnackBar(
              SnackBar(content: Text('Verification code sent to $email. Check your inbox (and spam folder).'), backgroundColor: Colors.green, duration: const Duration(seconds: 5)),
            );
          } catch (e) {
            setLocal(() => isLoading = false);
            final err = e.toString();
            debugPrint('signInWithOtp error: $err');
            String msg = err;
            if (err.toLowerCase().contains('rate') || err.toLowerCase().contains('too many') || err.toLowerCase().contains('over_email_send_rate_limit')) {
              msg = 'Too many emails sent recently. Wait ~1 hour and try again, or configure custom SMTP in Supabase.';
            } else if (err.toLowerCase().contains('signup') && err.toLowerCase().contains('disabled')) {
              msg = 'Email signup is disabled in Supabase. Enable it in Authentication > Providers > Email.';
            }
            ScaffoldMessenger.of(ctx).showSnackBar(
              SnackBar(content: Text(msg), backgroundColor: Colors.red, duration: const Duration(seconds: 8)),
            );
          }
        }

        Future<void> verifyAndReset() async {
          final email = emailCtl.text.toLowerCase().trim();
          final code = codeCtl.text.trim();
          final pw = newPwCtl.text;
          final confirm = confirmCtl.text;

          if (code.length < 6) {
            if (ctx.mounted) ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Enter the 6-digit verification code')));
            return;
          }
          if (pw.length < 6) {
            if (ctx.mounted) ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Password must be at least 6 characters')));
            return;
          }
          if (pw != confirm) {
            if (ctx.mounted) ScaffoldMessenger.of(ctx).showSnackBar(const SnackBar(content: Text('Passwords do not match')));
            return;
          }

          setLocal(() => isLoading = true);
          try {
            await Supabase.instance.client.auth.verifyOTP(
              type: OtpType.email,
              email: email,
              token: code,
            );

            try {
              await Supabase.instance.client.auth.updateUser(
                UserAttributes(password: pw),
              );
            } catch (_) {}

            final ok = await widget.onResetPasswordByEmail(email, _hashPassword(pw));

            try { await Supabase.instance.client.auth.signOut(); } catch (_) {}

            if (!ctx.mounted) return;
            Navigator.pop(c);
            
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Text(ok
                    ? 'Password reset successful! Log in with your new password.'
                    : 'Password updated but profile not found. Sign up first or contact support.'),
                  backgroundColor: ok ? Colors.green : Colors.orange,
                  duration: const Duration(seconds: 4),
                ),
              );
            }
          } catch (e) {
            if (ctx.mounted) {
              setLocal(() => isLoading = false);
              ScaffoldMessenger.of(ctx).showSnackBar(
                SnackBar(content: Text('Verification failed: ${e.toString()}'), backgroundColor: Colors.red),
              );
            }
          }
        }

        return AlertDialog(
          title: Text(step == 1 ? 'Reset Password' : 'Enter Verification Code'),
          content: SingleChildScrollView(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: step == 1
                  ? [
                      const Text(
                        'Enter your email and we will send a 6-digit verification code to your inbox.',
                        style: TextStyle(fontSize: 12, color: Colors.grey),
                      ),
                      const SizedBox(height: 15),
                      TextField(
                        controller: emailCtl,
                        keyboardType: TextInputType.emailAddress,
                        decoration: InputDecoration(
                          labelText: 'Gmail Address',
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                      ),
                    ]
                  : [
                      Text('Code sent to ${emailCtl.text}', style: const TextStyle(fontSize: 12, color: Colors.grey)),
                      const SizedBox(height: 15),
                      TextField(
                        controller: codeCtl,
                        keyboardType: TextInputType.number,
                        maxLength: 6,
                        decoration: InputDecoration(
                          labelText: '6-digit Code',
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                      ),
                      TextField(
                        controller: newPwCtl,
                        obscureText: true,
                        decoration: InputDecoration(
                          labelText: 'New Password (min 6 chars)',
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                      ),
                      const SizedBox(height: 12),
                      TextField(
                        controller: confirmCtl,
                        obscureText: true,
                        decoration: InputDecoration(
                          labelText: 'Confirm New Password',
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                      ),
                      TextButton(
                        onPressed: isLoading ? null : sendCode,
                        child: const Text('Resend code'),
                      ),
                    ],
            ),
          ),
          actions: [
            TextButton(onPressed: isLoading ? null : () => Navigator.pop(c), child: const Text('CANCEL')),
            ElevatedButton(
              onPressed: isLoading ? null : (step == 1 ? sendCode : verifyAndReset),
              child: isLoading
                  ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : Text(step == 1 ? 'SEND CODE' : 'RESET PASSWORD'),
            ),
          ],
        );
      }),
    );
  }

  @override Widget build(BuildContext context) {
    return Scaffold(body: Center(child: SingleChildScrollView(padding: const EdgeInsets.all(30), child: Column(children: [
      const Icon(Icons.blur_on_rounded, size: 80, color: Color(0xFF6200EE)),
      const SizedBox(height: 20), Text(_isLogin ? 'Login to NGMY' : 'Create Account', style: const TextStyle(fontSize: 26, fontWeight: FontWeight.bold)),
      const SizedBox(height: 40),
      if (!_isLogin) ...[
        TextField(controller: _u, decoration: InputDecoration(labelText: 'Username', border: OutlineInputBorder(borderRadius: BorderRadius.circular(15)))),
        const SizedBox(height: 20),
      ],
      TextField(controller: _e, decoration: InputDecoration(labelText: 'Gmail Address', border: OutlineInputBorder(borderRadius: BorderRadius.circular(15)))),
      if (!_isLogin) ...[
        const SizedBox(height: 20), 
        TextField(controller: _p, decoration: InputDecoration(labelText: 'Phone Number', border: OutlineInputBorder(borderRadius: BorderRadius.circular(15)))),
      ],
      const SizedBox(height: 20),
      TextField(controller: _s, obscureText: true, decoration: InputDecoration(labelText: 'Password', border: OutlineInputBorder(borderRadius: BorderRadius.circular(15)))),
      const SizedBox(height: 30),
      ElevatedButton(
        onPressed: _submit, 
        style: ElevatedButton.styleFrom(minimumSize: const Size(double.infinity, 55), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)), backgroundColor: const Color(0xFF6200EE), foregroundColor: Colors.white), 
        child: Text(_isLogin ? 'LOGIN' : 'SIGN UP')
      ),
      if (_isLogin) ...[
        const SizedBox(height: 12),
        OutlinedButton.icon(
          onPressed: () async {
            final err = await widget.onGoogleLogin();
            if (!mounted || err == null) return;
            ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(err)));
          },
          icon: const Icon(Icons.g_mobiledata_rounded, size: 24),
          label: const Text('Continue with Google'),
          style: OutlinedButton.styleFrom(minimumSize: const Size(double.infinity, 50)),
        ),
      ],
      if (_isLogin)
        TextButton(
          onPressed: _showForgotPassword,
          child: const Text('Forgot Password?', style: TextStyle(color: Color(0xFF6200EE), fontWeight: FontWeight.w600)),
        ),
      TextButton(onPressed: () => setState(() => _isLogin = !_isLogin), child: Text(_isLogin ? "Don't have an account? Sign Up" : "Back to Login")),
      const SizedBox(height: 50),
      TextButton(
        onPressed: () async {
          final confirm = await showDialog<bool>(context: context, builder: (c) => AlertDialog(title: const Text('Reset System?'), content: const Text('This will clear all local data and log everyone out. Use only if you are getting loading errors.'), actions: [TextButton(onPressed:()=>Navigator.pop(c, false), child: const Text('CANCEL')), TextButton(onPressed:()=>Navigator.pop(c, true), child: const Text('RESET', style: TextStyle(color: Colors.red)))]));
          if (confirm == true) {
            final p = await SharedPreferences.getInstance();
            await p.clear();
            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('System Reset. Please restart the app.')));
          }
        }, 
        child: const Text('Trouble logging in? Reset App Data', style: TextStyle(color: Colors.grey, fontSize: 10))
      ),
    ]))));
  }
}

class MainScreen extends StatefulWidget {
  final UserData user; final List<AppTransaction> allTransactions; final List<UserData> allUsers; final List<InvestmentPlan> globalPlans; 
  final List<MediaPost> allMedia; final AppConfig config;
  final Function(ThemeMode) onThemeChanged; final ThemeMode currentThemeMode; final VoidCallback onLogout; final VoidCallback onDataChanged;
  final Function(AppTransaction) onAddTransaction; final Function(AppTransaction, bool) onProcessTransaction; final Function(InvestmentPlan) onAddPlan;
  final Function(MediaPost) onPostMedia;

  const MainScreen({super.key, required this.user, required this.allTransactions, required this.allUsers, required this.globalPlans, required this.allMedia, required this.config, required this.onThemeChanged, required this.currentThemeMode, required this.onLogout, required this.onDataChanged, required this.onAddTransaction, required this.onProcessTransaction, required this.onAddPlan, required this.onPostMedia});
  @override State<MainScreen> createState() => _MainScreenState();
}
class _MainScreenState extends State<MainScreen> {
  int _idx = 0; Timer? _t; int _syncCounter = 0;
  @override void initState() {
    super.initState();
    _t = Timer.periodic(const Duration(seconds: 1), (t) { 
      if (widget.user.forceLogout) { widget.user.forceLogout = false; widget.onDataChanged(); widget.onLogout(); return; }
      if (widget.user.isClockedIn) {
        double earned = 0;
        bool completed = false;
        setState(() {
          if (widget.user.currentTodayEarnings >= (widget.user.activeInvestment?.dailyAmount ?? 0)) {
            earned = widget.user.currentTodayEarnings;
            widget.user.accountBalance += earned;
            widget.user.totalProfit += earned;
            widget.user.activeInvestment!.totalEarned += earned;
            widget.user.activeInvestment!.daysClockedIn++;
            widget.user.isClockedIn = false;
            widget.user.clockInStartTime = null;
            completed = true;
          }
        });
        
        if (completed) {
          if (earned > 0) {
            widget.onAddTransaction(AppTransaction(
              id: DateTime.now().toString(),
              userEmail: widget.user.email,
              amount: earned,
              type: TransactionType.reimbursement,
              method: PaymentMethod.system,
              sourceDetails: 'Clock-in daily earnings',
              status: TransactionStatus.approved,
              timestamp: DateTime.now(),
            ));
          }
          widget.onDataChanged(); // Immediate sync on completion
        } else {
          // Throttle cloud sync to every 30 seconds to prevent "quick/stuttery" UI
          _syncCounter++;
          if (_syncCounter >= 30) {
            _syncCounter = 0;
            widget.onDataChanged();
          }
        }
      }
    });
  }
  @override void dispose() { _t?.cancel(); super.dispose(); }

  @override Widget build(BuildContext context) {
    final sorted = List<AppTransaction>.from(widget.allTransactions)..sort((a, b) => b.timestamp.compareTo(a.timestamp));
    final pages = [
      HomeScreen(user: widget.user, onClockIn: () { 
        final now = DateTime.now();
        if (now.weekday == DateTime.saturday || now.weekday == DateTime.sunday) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Market is closed on weekends!')));
          return;
        }
        if (widget.user.activeInvestment == null) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('You need an active investment plan to earn!')));
          return;
        }
        if (widget.user.lastClockInDate != null) {
          final last = widget.user.lastClockInDate!;
          if (last.year == now.year && last.month == now.month && last.day == now.day) {
            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('You have already clocked in today!')));
            return;
          }
        }
        setState(() { 
          widget.user.isClockedIn = true; 
          widget.user.clockInStartTime = DateTime.now(); 
          widget.user.lastClockInDate = DateTime.now();
        }); 
        widget.onDataChanged(); 
      }, allTransactions: sorted, onProcess: widget.onProcessTransaction, allUsers: widget.allUsers, globalPlans: widget.globalPlans, onAddPlan: widget.onAddPlan, onAddTransaction: widget.onAddTransaction, onDataChanged: widget.onDataChanged, config: widget.config),
      InvestScreen(user: widget.user, plans: widget.globalPlans, onInvest: (n, p, r) {
        final currentInvested = widget.user.totalInvestmentAmount;
        final cost = math.max(0.0, p - currentInvested);
        if (widget.user.accountBalance < cost) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Insufficient balance to buy this plan!')));
          return;
        }
        setState(() {
          widget.user.accountBalance -= cost;
          // When buying a plan, we create a fresh ActiveInvestment instance to reset progress.
          // For upgrades, the user pays the difference and starts a fresh 261-day cycle.
          widget.user.activeInvestment = ActiveInvestment(
            name: n, 
            amount: p, 
            dailyROI: r, 
            purchaseDate: DateTime.now(),
            daysClockedIn: 0,
            totalEarned: 0.0
          );
        });
        if (cost > 0) {
          widget.onAddTransaction(AppTransaction(
            id: DateTime.now().toString(),
            userEmail: widget.user.email,
            amount: cost,
            type: TransactionType.adminRemove,
            method: PaymentMethod.system,
            sourceDetails: 'Investment plan purchase/upgrade: $n',
            status: TransactionStatus.approved,
            timestamp: DateTime.now(),
          ));
        }
        widget.onDataChanged();
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Successfully purchased $n!')));
      }),
      WalletScreen(user: widget.user, transactions: sorted.where((t) => t.userEmail == widget.user.email).toList(), onAdd: widget.onAddTransaction, config: widget.config, onDataChanged: widget.onDataChanged),
      NgmyHubScreen(user: widget.user),
      MediaHubScreen(user: widget.user, allMedia: widget.allMedia, onPost: widget.onPostMedia),
      StatsScreen(user: widget.user, transactions: sorted),
      ProfileScreen(user: widget.user, config: widget.config, onThemeChanged: widget.onThemeChanged, currentThemeMode: widget.currentThemeMode, onLogout: widget.onLogout, onDataChanged: widget.onDataChanged),
    ];
    return Scaffold(
      body: Stack(children: [
        pages[_idx],
        Positioned(left: 15, right: 15, bottom: 25, child: SafeArea(child: Container(height: 75, decoration: BoxDecoration(color: Theme.of(context).colorScheme.surface.withOpacity(0.9), borderRadius: BorderRadius.circular(35), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.2), blurRadius: 15, offset: const Offset(0, 5))], border: Border.all(color: Colors.white.withOpacity(0.05))), child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [_nav(0, Icons.home_rounded), _nav(1, Icons.trending_up_rounded), _nav(2, Icons.account_balance_wallet_rounded), _navC(3), _nav(4, Icons.play_circle_fill_rounded), _nav(5, Icons.bar_chart_rounded), _nav(6, Icons.person_rounded)])))),
      ]),
    );
  }
  Widget _nav(int i, IconData icon) => IconButton(onPressed: () => setState(() => _idx = i), icon: Icon(icon, color: _idx == i ? Theme.of(context).colorScheme.primary : Colors.grey, size: 28));
  Widget _navC(int i) => GestureDetector(onTap: () => setState(() => _idx = i), child: Transform.translate(offset: const Offset(0, -10), child: Container(width: 60, height: 60, decoration: BoxDecoration(gradient: const LinearGradient(colors: [Color(0xFF6200EE), Color(0xFFBB86FC)]), shape: BoxShape.circle, boxShadow: [BoxShadow(color: const Color(0xFF6200EE).withOpacity(0.4), blurRadius: 12, offset: const Offset(0, 4))], border: Border.all(color: _idx == i ? Colors.white : Colors.transparent, width: 2)), child: const Center(child: Text('NGMY', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 10))))));
}

class HomeScreen extends StatefulWidget {
  final UserData user; final VoidCallback onClockIn; final List<AppTransaction> allTransactions; final List<UserData> allUsers; final List<InvestmentPlan> globalPlans; final AppConfig config;
  final Function(AppTransaction, bool) onProcess; final Function(InvestmentPlan) onAddPlan; final Function(AppTransaction) onAddTransaction; final VoidCallback onDataChanged;
  const HomeScreen({super.key, required this.user, required this.onClockIn, required this.allTransactions, required this.onProcess, required this.allUsers, required this.globalPlans, required this.onAddPlan, required this.onAddTransaction, required this.onDataChanged, required this.config});

  @override State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with SingleTickerProviderStateMixin {
  late AnimationController _smokeCtrl;
  late Animation<double> _smokeRot;
  Timer? _liveTicker;
  int _liveStart = 0;

  @override void initState() {
    super.initState();
    _smokeCtrl = AnimationController(vsync: this, duration: const Duration(seconds: 10))..repeat();
    _smokeRot = Tween<double>(begin: 0, end: 2 * math.pi).animate(_smokeCtrl);
    _liveTicker = Timer.periodic(const Duration(seconds: 6), (_) {
      if (!mounted) return;
      setState(() => _liveStart++);
    });
  }

  @override void dispose() {
    _liveTicker?.cancel();
    _smokeCtrl.dispose();
    super.dispose();
  }

  @override Widget build(BuildContext context) {
    bool isLight = Theme.of(context).brightness == Brightness.light;
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(20, 10, 20, 150),
          child: Column(
            children: [
              FloatingTitle(
                title: 'GROWTH INCOME',
                onTap: widget.user.isAdmin ? () => Navigator.push(context, MaterialPageRoute(builder: (c) => AdminDashboard(user: widget.user, allTransactions: widget.allTransactions, onProcess: widget.onProcess, allUsers: widget.allUsers, globalPlans: widget.globalPlans, onAddPlan: widget.onAddPlan, onAddTransaction: widget.onAddTransaction, onDataChanged: widget.onDataChanged, config: widget.config))) : null,
                leading: InkWell(
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (c) => LoanServiceScreen(user: widget.user, config: widget.config))),
                  child: Container(
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(color: isLight ? const Color(0xFF00B25A) : Colors.transparent, shape: BoxShape.circle),
                    child: Icon(Icons.attach_money_rounded, color: isLight ? Colors.white : Colors.greenAccent, size: 20),
                  ),
                ),
                trailing: IconButton(
                  icon: const Icon(Icons.campaign_rounded, color: Colors.orangeAccent), 
                  onPressed: () {},
                ),
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(child: _money(context, 'Today', '\$${formatCurrency(widget.user.currentTodayEarnings)}', Colors.green)),
                  const SizedBox(width: 15),
                  Expanded(child: _money(context, 'Balance', '\$${formatCurrency(widget.user.accountBalance)}', Colors.blue)),
                ],
              ),
              const SizedBox(height: 30),
              // MAIN FRAME FOR THE CIRCLE
              Container(
                width: double.infinity,
                height: 230,
                decoration: BoxDecoration(
                  color: Theme.of(context).cardColor,
                  borderRadius: BorderRadius.circular(25),
                  border: isLight ? Border.all(color: const Color(0xFF00B25A).withOpacity(0.2), width: 1.5) : null,
                  boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 10, offset: const Offset(0, 4))],
                ),
                child: Stack(
                  children: [
                    Positioned(
                      top: 12,
                      left: 12,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: const Color(0xFF00B25A),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          widget.user.username.toUpperCase(),
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 9),
                        ),
                      ),
                    ),
                    Align(
                      alignment: Alignment.center,
                      child: _clock(context),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 40),
              _status(context),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(child: _info(context, 'Total Profit', '\$${formatCurrency(widget.user.totalProfit + widget.user.currentTodayEarnings)}')),
                  const SizedBox(width: 15),
                  Expanded(child: _info(context, 'Total Investment', '\$${formatCurrency(widget.user.totalInvestmentAmount)}')),
                ],
              ),
              const SizedBox(height: 20),
              _live(context),
            ],
          ),
        ),
      ),
    );
  }

  Widget _money(BuildContext ctx, String l, String v, Color c) {
    bool isLight = Theme.of(ctx).brightness == Brightness.light;
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Theme.of(ctx).cardColor,
        borderRadius: BorderRadius.circular(25),
        border: isLight ? Border.all(color: const Color(0xFF00B25A).withOpacity(0.2), width: 1.5) : null,
        boxShadow: [BoxShadow(color: c.withOpacity(0.12), blurRadius: 15, offset: const Offset(0, 6))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(l, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.grey)),
          const SizedBox(height: 5),
          FittedBox(child: Text(v, style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: isLight ? const Color(0xFF00964D) : c, fontFamily: 'monospace'))),
        ],
      ),
    );
  }

  Widget _info(BuildContext ctx, String l, String v) {
    bool isLight = Theme.of(ctx).brightness == Brightness.light;
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Theme.of(ctx).cardColor,
        borderRadius: BorderRadius.circular(20),
        border: isLight ? Border.all(color: const Color(0xFF00B25A).withOpacity(0.1), width: 1) : null,
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 12, offset: const Offset(0, 5))],
      ),
      child: Column( crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(l, style: const TextStyle(fontSize: 11, color: Colors.grey, fontWeight: FontWeight.bold)),
        const SizedBox(height: 5),
        Text(v, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w900, fontFamily: 'monospace', color: isLight ? const Color(0xFF00964D) : null)),
      ]),
    );
  }

  Widget _status(BuildContext ctx) {
    bool isLight = Theme.of(ctx).brightness == Brightness.light;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 15),
      decoration: BoxDecoration(
        color: Theme.of(ctx).cardColor,
        borderRadius: BorderRadius.circular(20),
        border: isLight ? Border.all(color: const Color(0xFF00B25A).withOpacity(0.2)) : null,
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 10, offset: const Offset(0, 4))],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Text('Network Status', style: TextStyle(fontWeight: FontWeight.bold)),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              gradient: isLight ? const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF81C784)]) : null,
              color: isLight ? null : Colors.green.withOpacity(0.1),
              borderRadius: BorderRadius.circular(20),
              boxShadow: isLight ? [BoxShadow(color: const Color(0xFF00B25A).withOpacity(0.3), blurRadius: 8)] : null,
            ),
            child: Row(
              children: [
                Icon(Icons.fiber_manual_record, size: 8, color: isLight ? Colors.white : Colors.green),
                const SizedBox(width: 8),
                Text('ACTIVE', style: TextStyle(color: isLight ? Colors.white : Colors.green, fontSize: 10, fontWeight: FontWeight.w900)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _clock(BuildContext ctx) {
    bool active = widget.user.isClockedIn;
    bool alreadyDone = widget.user.alreadyClockedInToday && !active;
    
    return GestureDetector(
      onTap: (active || alreadyDone || widget.user.activeInvestment == null) 
        ? (alreadyDone ? null : () {
            if (widget.user.activeInvestment == null) {
              ScaffoldMessenger.of(ctx).showSnackBar(
                const SnackBar(content: Text('You need an active investment plan to earn!'))
              );
            }
          })
        : widget.onClockIn,
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Animated Smoke Effect
          AnimatedBuilder(
            animation: _smokeCtrl,
            builder: (context, child) {
              return Transform.rotate(
                angle: active ? _smokeRot.value : 0,
                child: Container(
                  width: 220, height: 220,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: (alreadyDone ? Colors.grey : const Color(0xFF00B25A)).withOpacity(0.03),
                    boxShadow: [
                      BoxShadow(
                        color: (alreadyDone ? Colors.grey : const Color(0xFF00B25A)).withOpacity(0.08),
                        blurRadius: active ? (30 + (math.sin(_smokeCtrl.value * 2 * math.pi) * 10)) : 30,
                        spreadRadius: 2,
                      )
                    ],
                  ),
                ),
              );
            },
          ),
          // Floating particles / stars
          ...List.generate(5, (i) {
            double angle = (i * 2 * math.pi / 5);
            return AnimatedBuilder(
              animation: _smokeCtrl,
              builder: (context, child) {
                double currentAngle = active ? (angle + _smokeRot.value) : angle;
                return Transform.translate(
                  offset: Offset(math.cos(currentAngle) * 90, math.sin(currentAngle) * 90),
                  child: Icon(Icons.wb_sunny_rounded, size: 6, color: (alreadyDone ? Colors.grey : Colors.amber).withOpacity(active ? 0.4 : 0.2)),
                );
              },
            );
          }),
          // Outer ring
          Container(
            width: 180, height: 180,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: (alreadyDone ? Colors.grey : const Color(0xFF00B25A)).withOpacity(0.12), width: 12),
            ),
          ),
          // Main inner circle
          Container(
            width: 145, height: 145,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: active 
                  ? [const Color(0xFF00B25A), const Color(0xFF00894B)]
                  : (alreadyDone 
                      ? [Colors.grey.shade600, Colors.grey.shade800]
                      : [Colors.grey.shade400, Colors.grey.shade600]),
              ),
              boxShadow: [
                BoxShadow(
                  color: (active ? const Color(0xFF00B25A) : Colors.grey).withOpacity(0.4),
                  blurRadius: 15,
                  offset: const Offset(0, 8),
                )
              ],
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                AnimatedBuilder(
                  animation: _smokeCtrl,
                  builder: (context, child) {
                    double scale = active ? (1.0 + math.sin(_smokeCtrl.value * 2 * math.pi) * 0.1) : 1.0;
                    double dailyGoal = widget.user.activeInvestment?.dailyAmount ?? 1.0;
                    if (dailyGoal <= 0) dailyGoal = 1.0;
                    double progress = widget.user.currentTodayEarnings / dailyGoal;
                    if (progress > 1.0) progress = 1.0;

                    return Transform.scale(
                      scale: scale,
                      child: ShaderMask(
                        shaderCallback: (Rect bounds) {
                          return LinearGradient(
                            begin: Alignment.bottomCenter,
                            end: Alignment.topCenter,
                            stops: [progress, progress],
                            colors: [
                              Colors.white, 
                              Colors.white.withOpacity(0.2)
                            ],
                          ).createShader(bounds);
                        },
                        child: Icon(alreadyDone ? Icons.check_circle_rounded : Icons.card_giftcard_rounded, color: Colors.white, size: 40),
                      ),
                    );
                  },
                ),
                const SizedBox(height: 8),
                Text(alreadyDone ? 'Completed' : 'Daily Earnings', style: const TextStyle(color: Colors.white70, fontSize: 9, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                if (!alreadyDone) Text(
                  '\$${formatCurrency(widget.user.currentTodayEarnings)}',
                  style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900),
                ),
                if (!active && !alreadyDone) const Text('ACTIVATE', style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.bold)),
                if (alreadyDone) const Text('TOMORROW', style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.bold)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  String _maskName(String email, String username) {
    final base = username.isNotEmpty && username != 'User' ? username : email.split('@').first;
    if (base.length <= 2) return '${base.substring(0, 1)}***';
    if (base.length <= 4) return '${base.substring(0, 2)}***';
    return '${base.substring(0, 3)}***${base.substring(base.length - 1)}';
  }

  String _timeAgo(DateTime t) {
    final localT = t.isUtc ? t.toLocal() : t;
    final diff = DateTime.now().difference(localT);
    if (diff.isNegative) return 'just now';
    if (diff.inMinutes < 1) return 'just now';
    if (diff.inMinutes < 60) return '${diff.inMinutes}m ago';
    if (diff.inHours < 24) return '${diff.inHours}h ago';
    return '${diff.inDays}d ago';
  }

  Widget _live(BuildContext ctx) {
    final recent = widget.allTransactions
        .where((t) =>
            t.type == TransactionType.deposit ||
            t.type == TransactionType.withdrawal ||
            t.type == TransactionType.adminRemove ||
            t.type == TransactionType.reimbursement)
        .toList()
      ..sort((a, b) => b.timestamp.compareTo(a.timestamp));
    List<AppTransaction> shown = [];
    if (recent.isNotEmpty) {
      final count = recent.length < 3 ? recent.length : 3;
      final start = _liveStart % recent.length;
      for (int i = 0; i < count; i++) {
        shown.add(recent[(start + i) % recent.length]);
      }
    }
    return Container(
      padding: const EdgeInsets.all(20),
      width: double.infinity,
      decoration: BoxDecoration(
        color: Theme.of(ctx).cardColor,
        borderRadius: BorderRadius.circular(25),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 15, offset: const Offset(0, 6))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.fiber_manual_record, color: Colors.green, size: 10),
              SizedBox(width: 10),
              Text('LIVE ACTIVITY', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Colors.grey, letterSpacing: 1)),
            ],
          ),
          const SizedBox(height: 15),
          if (shown.isEmpty)
            const Center(child: Text('No recent activity', style: TextStyle(fontSize: 13, color: Colors.grey, fontWeight: FontWeight.w500)))
          else
            ...shown.map((t) {
              final user = widget.allUsers.firstWhere(
                (u) => u.email.toLowerCase().trim() == t.userEmail.toLowerCase().trim(),
                orElse: () => UserData(email: t.userEmail, username: 'User'),
              );
              final isDeposit = t.type == TransactionType.deposit;
              final isWithdrawal = t.type == TransactionType.withdrawal;
              final isInvestment = t.type == TransactionType.adminRemove;
              final isClockIn = t.type == TransactionType.reimbursement;
              final name = _maskName(user.email, user.username);
              final actionText = isDeposit
                  ? 'deposited'
                  : isWithdrawal
                      ? 'withdrew'
                      : isInvestment
                          ? 'bought plan'
                          : isClockIn
                              ? 'earned (clock-in)'
                              : 'updated account';
              final rowColor = isDeposit
                  ? Colors.green
                  : isWithdrawal
                      ? Colors.blue
                      : isInvestment
                          ? Colors.purple
                          : Colors.teal;
              final rowIcon = isDeposit
                  ? Icons.arrow_downward
                  : isWithdrawal
                      ? Icons.arrow_upward
                      : isInvestment
                          ? Icons.trending_up_rounded
                          : Icons.access_time_filled;
              return Padding(
                padding: const EdgeInsets.symmetric(vertical: 6),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        color: rowColor.withOpacity(0.15),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Icon(
                        rowIcon,
                        size: 14,
                        color: rowColor,
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Align(
                        alignment: Alignment.center,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              '$name $actionText',
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600),
                            ),
                            const SizedBox(width: 8),
                            const Text('•', style: TextStyle(fontSize: 12, color: Colors.grey)),
                            const SizedBox(width: 8),
                            Text(
                              _timeAgo(t.timestamp),
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 10, color: Colors.grey),
                            ),
                          ],
                        ),
                      ),
                    ),
                    Text(
                      '\$${formatCurrency(t.amount)}',
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.bold,
                        color: rowColor,
                      ),
                    ),
                  ],
                ),
              );
            }),
        ],
      ),
    );
  }
}

// --- ADMIN DASHBOARD ---

class AdminDashboard extends StatefulWidget {
  final UserData user; final List<AppTransaction> allTransactions; final List<UserData> allUsers; final List<InvestmentPlan> globalPlans; final AppConfig config;
  final Function(AppTransaction, bool) onProcess; final Function(InvestmentPlan) onAddPlan; final Function(AppTransaction) onAddTransaction; final VoidCallback onDataChanged;

  const AdminDashboard({super.key, required this.user, required this.allTransactions, required this.onProcess, required this.allUsers, required this.globalPlans, required this.onAddPlan, required this.onAddTransaction, required this.onDataChanged, required this.config});
  @override State<AdminDashboard> createState() => _AdminDashboardState();
}
class _AdminDashboardState extends State<AdminDashboard> {
  int _idx = 0; final _search = TextEditingController(); bool _isSearching = false; String _query = '';

  @override Widget build(BuildContext context) {
    bool isDark = Theme.of(context).brightness == Brightness.dark;
    final pages = [
      _adminHome(isDark), 
      _adminUsers(isDark),
      _adminInvest(isDark), 
      _adminLegal(isDark), 
      _adminWallet(isDark), 
      _adminMedia(isDark),
    ];
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0F111A) : const Color(0xFFF9FAFC),
      appBar: AppBar(
        backgroundColor: isDark ? const Color(0xFF161922) : Colors.white,
        elevation: 0,
        centerTitle: false,
        leading: IconButton(icon: Icon(Icons.arrow_back_ios_new_rounded, color: isDark ? Colors.white : Colors.black, size: 18), onPressed: () => Navigator.pop(context)),
        title: Text(_menuName(), style: TextStyle(color: isDark ? Colors.white : Colors.black, fontWeight: FontWeight.bold, fontSize: 16)),
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(60),
          child: _topNav(isDark),
        ),
      ),
      body: pages[_idx],
    );
  }

  Widget _topNav(bool isDark) {
    return Container(
      height: 60,
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF161922) : Colors.white,
        border: Border(top: BorderSide(color: isDark ? Colors.white10 : Colors.black12, width: 0.5)),
      ),
      child: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Row(
          children: [
            _navItem(0, Icons.home_outlined, 'Home', isDark),
            _navItem(1, Icons.people_outline, 'Users', isDark),
            _navItem(2, Icons.trending_up_rounded, 'Invest', isDark),
            _navItem(3, Icons.edit_note_rounded, 'Creator', isDark),
            _navItem(4, Icons.account_balance_wallet_outlined, 'Wallet', isDark),
            _navItem(5, Icons.play_circle_outline, 'Media', isDark),
          ],
        ),
      ),
    );
  }

  Widget _navItem(int i, IconData icon, String label, bool isDark) {
    bool selected = _idx == i;
    return GestureDetector(
      onTap: () => setState(() => _idx = i),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        decoration: BoxDecoration(
          border: selected ? const Border(bottom: BorderSide(color: Color(0xFF00B25A), width: 3)) : null,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: selected ? const Color(0xFF00B25A) : (isDark ? Colors.white38 : Colors.grey), size: 20),
            const SizedBox(height: 4),
            Text(label, style: TextStyle(color: selected ? (isDark ? Colors.white : Colors.black) : (isDark ? Colors.white38 : Colors.grey), fontWeight: selected ? FontWeight.bold : FontWeight.normal, fontSize: 11)),
          ],
        ),
      ),
    );
  }

  String _menuName() => ["DASHBOARD", "USERS", "PLANS", "CREATOR", "WALLET", "MEDIA"][_idx];

  Widget _adminHome(bool isDark) => SingleChildScrollView(
    padding: const EdgeInsets.all(20), 
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start, 
      children: [
        Text('System Hub', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 22, color: isDark ? Colors.white : Colors.black)),
        const SizedBox(height: 25),
        
        // Overview Stats Frame
        Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
            borderRadius: BorderRadius.circular(20),
            boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 10)],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('QUICK STATS', style: TextStyle(color: Colors.grey, fontSize: 10, fontWeight: FontWeight.bold)),
              const SizedBox(height: 15),
              Row(children: [
                Expanded(child: _miniStat('Users', '${widget.allUsers.length}', Icons.people, Colors.blue)),
                Container(width: 1, height: 40, color: Colors.grey.withOpacity(0.2)),
                Expanded(child: _miniStat('Pending', '${widget.allTransactions.where((t)=>t.status == TransactionStatus.pending).length}', Icons.pending_actions, Colors.orange)),
                Container(width: 1, height: 40, color: Colors.grey.withOpacity(0.2)),
                Expanded(child: _miniStat('Revenue', '\$${formatCurrency(widget.allTransactions.where((t)=>t.status == TransactionStatus.approved && t.type == TransactionType.deposit).fold(0.0, (s,t)=>s+t.amount))}', Icons.monetization_on, Colors.green)),
              ]),
            ],
          ),
        ),
        const SizedBox(height: 30),
        
        Text('Additional Services', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: isDark ? Colors.white : Colors.black)),
        const SizedBox(height: 15),
        
        // Grid of Management Frames (ONLY items NOT in the top tabs)
        GridView.count(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          crossAxisCount: 2,
          mainAxisSpacing: 15,
          crossAxisSpacing: 15,
          childAspectRatio: 1.4,
          children: [
            _menuFrame('Loan Center', Icons.handshake_outlined, Colors.teal, () => _showLoanAdmin(isDark), isDark),
            _menuFrame('App Status', Icons.settings_suggest_rounded, Colors.blueGrey, () {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('System components running normally.')));
            }, isDark),
            // Add other non-tab services here as needed
          ],
        ),
        const SizedBox(height: 50),
      ],
    ),
  );

  Widget _miniStat(String l, String v, IconData i, Color c) => Column(children: [
    Icon(i, color: c, size: 18),
    const SizedBox(height: 5),
    Text(v, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
    Text(l, style: const TextStyle(color: Colors.grey, fontSize: 9)),
  ]);

  Widget _menuFrame(String title, IconData icon, Color color, VoidCallback onTap, bool isDark) => InkWell(
    onTap: onTap,
    borderRadius: BorderRadius.circular(20),
    child: Container(
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: color.withOpacity(0.1)),
        boxShadow: [BoxShadow(color: color.withOpacity(0.05), blurRadius: 8, offset: const Offset(0, 4))],
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: color.withOpacity(0.1), shape: BoxShape.circle),
            child: Icon(icon, color: color, size: 24),
          ),
          const SizedBox(height: 10),
          Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
        ],
      ),
    ),
  );

  void _showLoanAdmin(bool isDark) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (c) => Container(
        height: MediaQuery.of(context).size.height * 0.7,
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF0F111A) : Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(30)),
        ),
        padding: const EdgeInsets.all(25),
        child: Column(
          children: [
            Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.withOpacity(0.3), borderRadius: BorderRadius.circular(10))),
            const SizedBox(height: 20),
            const Text('Loan Management Center', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const SizedBox(height: 30),
            _addressEditor(isDark), // This now contains the loan phone and how-it-works editor
            const Spacer(),
            ElevatedButton(onPressed: () => Navigator.pop(c), child: const Text('CLOSE')),
          ],
        ),
      ),
    );
  }

  Widget _statCard(String t, String v, IconData i, Color c, bool isDark) => Container(
    padding: const EdgeInsets.all(20),
    decoration: BoxDecoration(color: isDark ? const Color(0xFF1C1F2E) : Colors.white, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: isDark ? Colors.black.withOpacity(0.24) : c.withOpacity(0.05), blurRadius: 10)]),
    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Icon(i, color: c), const SizedBox(height: 10),
      Text(t, style: TextStyle(color: isDark ? Colors.white38 : Colors.grey, fontSize: 12)),
      Text(v, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 22, color: isDark ? Colors.white : Colors.black)),
    ]),
  );

  Widget _addressEditor(bool isDark) {
    final cTag = TextEditingController(text: widget.config.officialCashApp);
    final bAddr = TextEditingController(text: widget.config.officialBitcoin);
    final lPhone = TextEditingController(text: widget.config.loanPhone);
    final lHow = TextEditingController(text: widget.config.loanHowItWorks);
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(color: isDark ? const Color(0xFF1C1F2E) : Colors.white, borderRadius: BorderRadius.circular(20)),
      child: Column(children: [
        TextField(controller: cTag, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: InputDecoration(labelText: 'Admin Cash App Tag', labelStyle: TextStyle(color: isDark ? Colors.white60 : Colors.grey), border: const OutlineInputBorder())),
        const SizedBox(height: 15),
        TextField(controller: bAddr, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: InputDecoration(labelText: 'Admin Bitcoin Address', labelStyle: TextStyle(color: isDark ? Colors.white60 : Colors.grey), border: const OutlineInputBorder())),
        const SizedBox(height: 15),
        TextField(controller: lPhone, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: InputDecoration(labelText: 'Loan Support Phone', labelStyle: TextStyle(color: isDark ? Colors.white60 : Colors.grey), border: const OutlineInputBorder())),
        const SizedBox(height: 15),
        TextField(controller: lHow, maxLines: 5, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: InputDecoration(labelText: 'Loan - How It Works Text', labelStyle: TextStyle(color: isDark ? Colors.white60 : Colors.grey), border: const OutlineInputBorder())),
        const SizedBox(height: 20),
        ElevatedButton(onPressed: () { 
          widget.config.officialCashApp = cTag.text; 
          widget.config.officialBitcoin = bAddr.text; 
          widget.config.loanPhone = lPhone.text;
          widget.config.loanHowItWorks = lHow.text;
          widget.onDataChanged(); 
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Settings Updated'))); 
        }, style: ElevatedButton.styleFrom(minimumSize: const Size(double.infinity, 50), backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white), child: const Text('SAVE ALL SETTINGS'))
      ]),
    );
  }

  Widget _adminMedia(bool isDark) => Center(child: Text('MEDIA MODERATION CONTENT', style: TextStyle(color: isDark ? Colors.white : Colors.black)));

  Widget _adminLegal(bool isDark) {
    final tCtrl = TextEditingController(text: widget.config.termsAndConditions);
    final pCtrl = TextEditingController(text: widget.config.privacyPolicy);
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Legal Content Editor', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: isDark ? Colors.white : Colors.black)),
          const SizedBox(height: 20),
          _editorBox('Terms & Conditions', tCtrl, isDark),
          const SizedBox(height: 20),
          _editorBox('Privacy Policy', pCtrl, isDark),
          const SizedBox(height: 30),
          ElevatedButton(
            onPressed: () {
              setState(() { widget.config.termsAndConditions = tCtrl.text; widget.config.privacyPolicy = pCtrl.text; });
              widget.onDataChanged();
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Legal Info Updated!')));
            },
            style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white, minimumSize: const Size(double.infinity, 55), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15))),
            child: const Text('SAVE ALL CHANGES'),
          ),
        ],
      ),
    );
  }
  Widget _editorBox(String l, TextEditingController c, bool isDark) => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
    Text(l, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: isDark ? Colors.white60 : Colors.grey)),
    const SizedBox(height: 8),
    TextField(controller: c, maxLines: 6, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: InputDecoration(filled: true, fillColor: isDark ? const Color(0xFF1C1F2E) : Colors.white, border: const OutlineInputBorder())),
  ]);

  Widget _adminInvest(bool isDark) {
    final n = TextEditingController(); final p = TextEditingController(); final r = TextEditingController();
    return Padding(padding: const EdgeInsets.all(20), child: Column(children: [
      ElevatedButton.icon(icon: const Icon(Icons.add), label: const Text('CREATE NEW PLAN'), style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white, minimumSize: const Size(double.infinity, 50)), onPressed: () {
        n.clear(); p.clear(); r.clear();
        showDialog(context: context, builder: (c) => AlertDialog(title: const Text('New Plan'), content: Column(mainAxisSize: MainAxisSize.min, children: [TextField(controller: n, decoration: const InputDecoration(labelText: 'Name')), TextField(controller: p, decoration: const InputDecoration(labelText: 'Price'), keyboardType: TextInputType.number), TextField(controller: r, decoration: const InputDecoration(labelText: 'ROI'), keyboardType: TextInputType.number)]), actions: [TextButton(onPressed:()=>Navigator.pop(c), child:const Text('CANCEL')), ElevatedButton(onPressed: (){ widget.onAddPlan(InvestmentPlan(name: n.text, price: double.parse(p.text), roi: double.parse(r.text))); Navigator.pop(c); setState((){}); }, child: const Text('ADD'))]));
      }),
      const SizedBox(height: 20),
      Expanded(child: ListView(children: widget.globalPlans.map((pl) => Card(elevation: 0, color: isDark ? const Color(0xFF1C1F2E) : Colors.white, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)), child: ListTile(
        title: Text(pl.name, style: TextStyle(fontWeight: FontWeight.bold, color: isDark ? Colors.white : Colors.black)), 
        subtitle: Text('\$${formatCurrency(pl.price)} - ${(pl.roi*100).toStringAsFixed(2)}% ROI', style: TextStyle(color: isDark ? Colors.white60 : Colors.black54)), 
        trailing: Row(mainAxisSize: MainAxisSize.min, children: [
          IconButton(icon: const Icon(Icons.edit, size: 20, color: Colors.blue), onPressed: () {
            n.text = pl.name; p.text = pl.price.toString(); r.text = pl.roi.toString();
            showDialog(context: context, builder: (c) => AlertDialog(title: const Text('Edit Plan'), content: Column(mainAxisSize: MainAxisSize.min, children: [TextField(controller: n, decoration: const InputDecoration(labelText: 'Name')), TextField(controller: p, decoration: const InputDecoration(labelText: 'Price'), keyboardType: TextInputType.number), TextField(controller: r, decoration: const InputDecoration(labelText: 'ROI'), keyboardType: TextInputType.number)]), actions: [
              TextButton(onPressed:()=>Navigator.pop(c), child:const Text('CANCEL')), 
              ElevatedButton(onPressed: (){ setState(() { pl.name = n.text; pl.price = double.parse(p.text); pl.roi = double.parse(r.text); widget.globalPlans.sort((a,b)=>a.price.compareTo(b.price)); }); widget.onDataChanged(); Navigator.pop(c); }, child: const Text('SAVE'))
            ]));
          }),
          IconButton(icon: const Icon(Icons.delete_outline, size: 20, color: Colors.red), onPressed: () { setState(() { widget.globalPlans.remove(pl); }); widget.onDataChanged(); }),
        ]),
      ))).toList()))
    ]));
  }

  Widget _adminWallet(bool isDark) {
    final cTag = TextEditingController(text: widget.config.officialCashApp);
    final bAddr = TextEditingController(text: widget.config.officialBitcoin);
    
    final pendingDeposits = widget.allTransactions.where((t) => t.type == TransactionType.deposit && t.status == TransactionStatus.pending).toList();
    final approvedDeposits = widget.allTransactions.where((t) => (t.type == TransactionType.deposit || t.type == TransactionType.adminAdd) && t.status != TransactionStatus.pending).toList();
    final pendingWithdrawals = widget.allTransactions.where((t) => t.type == TransactionType.withdrawal && t.status == TransactionStatus.pending).toList();
    final approvedWithdrawals = widget.allTransactions.where((t) => t.type == TransactionType.withdrawal && t.status != TransactionStatus.pending).toList();

    return ListView(
      padding: const EdgeInsets.all(20),
      children: [
        // Payment Settings Frame
        Container(
          padding: const EdgeInsets.all(20),
          margin: const EdgeInsets.only(bottom: 30),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF1C1F2E) : Colors.white,
            borderRadius: BorderRadius.circular(20),
            boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 10)],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('PAYMENT CONTROLS', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: Colors.grey)),
              const SizedBox(height: 15),
              TextField(controller: cTag, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: InputDecoration(labelText: 'Admin Cash App Tag', labelStyle: TextStyle(color: isDark ? Colors.white60 : Colors.grey), border: const OutlineInputBorder())),
              const SizedBox(height: 15),
              TextField(controller: bAddr, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: InputDecoration(labelText: 'Admin Bitcoin Address', labelStyle: TextStyle(color: isDark ? Colors.white60 : Colors.grey), border: const OutlineInputBorder())),
              const SizedBox(height: 15),
              ElevatedButton(
                onPressed: () { 
                  widget.config.officialCashApp = cTag.text; 
                  widget.config.officialBitcoin = bAddr.text; 
                  widget.onDataChanged(); 
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Payment Settings Updated'))); 
                }, 
                style: ElevatedButton.styleFrom(minimumSize: const Size(double.infinity, 50), backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white), 
                child: const Text('SAVE PAYMENT SETTINGS')
              )
            ],
          ),
        ),

        _sectionHeader(Icons.attach_money_rounded, 'Deposit & Investment Requests', pendingDeposits.length, isDark),
        ...pendingDeposits.map((t) => _depositCard(t, isDark)),
        ...approvedDeposits.map((t) => _depositCard(t, isDark)),
        
        const SizedBox(height: 30),
        _sectionHeader(Icons.outbox_rounded, 'Withdrawal Requests', pendingWithdrawals.length, isDark, iconColor: Colors.blue),
        ...pendingWithdrawals.map((t) => _withdrawalCard(t, isDark)),
        ...approvedWithdrawals.map((t) => _withdrawalCard(t, isDark)),
      ],
    );
  }

  Widget _sectionHeader(IconData icon, String title, int pendingCount, bool isDark, {Color iconColor = const Color(0xFF00B25A)}) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(children: [
          Icon(icon, color: iconColor, size: 24),
          const SizedBox(width: 10),
          Text(title, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: isDark ? Colors.white : const Color(0xFF1A1C1E))),
        ]),
        const SizedBox(height: 5),
        Text('Pending: $pendingCount', style: TextStyle(color: isDark ? Colors.white38 : Colors.grey, fontSize: 12)),
        const SizedBox(height: 15),
      ],
    );
  }

  Widget _depositCard(AppTransaction t, bool isDark) {
    final user = widget.allUsers.firstWhere((u) => u.email == t.userEmail, orElse: () => UserData(email: t.userEmail));
    bool isPending = t.status == TransactionStatus.pending;
    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      decoration: BoxDecoration(color: isDark ? const Color(0xFF1C1F2E) : Colors.white, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 10)]),
      child: Column(children: [
        Container(
          padding: const EdgeInsets.all(15),
          decoration: BoxDecoration(
            color: t.status == TransactionStatus.approved ? const Color(0xFF00B25A) : (t.status == TransactionStatus.rejected ? Colors.redAccent : const Color(0xFF00B25A)),
            borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
          ),
          child: Row(children: [
            CircleAvatar(backgroundColor: Colors.white24, child: Text(user.username.isNotEmpty ? user.username[0].toUpperCase() : '?', style: const TextStyle(color: Colors.white))),
            const SizedBox(width: 12),
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('@${user.username}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
              Text('ID: NGMY/USR/${user.email.hashCode.abs().toString().padLeft(6, '0').substring(0, 6)}', style: const TextStyle(color: Colors.white70, fontSize: 10)),
            ]),
            const Spacer(),
            Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
              Text('\$${formatCurrency(t.amount)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 18)),
              Container(padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2), decoration: BoxDecoration(color: Colors.white.withOpacity(0.2), borderRadius: BorderRadius.circular(5)), child: Text(t.status.name.toUpperCase(), style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.bold))),
            ]),
          ]),
        ),
        Padding(padding: const EdgeInsets.all(15), child: Column(children: [
          Row(children: [
            Expanded(child: _detailBox('Payment Method', t.method.name.toUpperCase(), isDark, color: isDark ? Colors.blue.withOpacity(0.1) : const Color(0xFFE8F0FF))),
            const SizedBox(width: 10),
            Expanded(child: _detailBox('Cash App Tag', t.sourceDetails ?? 'N/A', isDark, color: isDark ? Colors.green.withOpacity(0.1) : const Color(0xFFE8FDF2))),
          ]),
          if (t.verificationCode != null) ...[const SizedBox(height: 10), _detailBox('Verification Code', t.verificationCode!, isDark, color: isDark ? Colors.purple.withOpacity(0.1) : const Color(0xFFF5E8FF), center: true, bigText: true)],
          const SizedBox(height: 10),
          _screenshotBox(t, isDark),
          const SizedBox(height: 10),
          Row(children: [
            IconButton(icon: Icon(Icons.delete_outline, color: isDark ? Colors.white60 : const Color(0xFF1A1C1E)), onPressed: () { setState(() { widget.allTransactions.remove(t); }); widget.onDataChanged(); }),
            const Spacer(),
            if (isPending) ...[
              TextButton(onPressed: () { widget.onProcess(t, false); setState(() {}); }, child: const Text('REJECT', style: TextStyle(color: Colors.red))),
              const SizedBox(width: 10),
              ElevatedButton(onPressed: () { widget.onProcess(t, true); setState(() {}); }, style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white), child: const Text('APPROVE')),
            ]
          ]),
        ])),
      ]),
    );
  }

  Widget _screenshotBox(AppTransaction t, bool isDark) => Container(
    width: double.infinity,
    decoration: BoxDecoration(border: Border.all(color: isDark ? Colors.white10 : Colors.grey.withOpacity(0.2)), borderRadius: BorderRadius.circular(10)),
    child: Column(children: [
      Container(width: double.infinity, padding: const EdgeInsets.all(8), decoration: BoxDecoration(color: isDark ? Colors.white.withOpacity(0.05) : const Color(0xFF1A1C1E).withOpacity(0.8), borderRadius: const BorderRadius.vertical(top: Radius.circular(9))), child: Text('Payment Screenshot', style: TextStyle(color: isDark ? Colors.white70 : Colors.white, fontSize: 10, fontWeight: FontWeight.bold))),
      if (t.screenshotPath != null) GestureDetector(onTap: () => showDialog(context: context, builder: (c) => AlertDialog(content: Image.file(File(t.screenshotPath!)))), child: Container(height: 120, alignment: Alignment.center, child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [Icon(Icons.image, size: 40, color: isDark ? Colors.white24 : Colors.grey), Text('View Screenshot', style: TextStyle(color: isDark ? Colors.white38 : Colors.grey, fontSize: 12))])))
      else Container(height: 120, alignment: Alignment.center, child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [Text('Transaction details', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: isDark ? Colors.white : Colors.black)), const SizedBox(height: 10), Row(mainAxisAlignment: MainAxisAlignment.center, children: [const Icon(Icons.check, color: Colors.green, size: 16), const SizedBox(width: 5), Text('Complete', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14, color: isDark ? Colors.white70 : Colors.black87))]), Text('Payment sent successfully', style: TextStyle(color: isDark ? Colors.white38 : Colors.grey, fontSize: 11))])),
    ]),
  );

  Widget _withdrawalCard(AppTransaction t, bool isDark) {
    final user = widget.allUsers.firstWhere((u) => u.email == t.userEmail, orElse: () => UserData(email: t.userEmail));
    bool isPending = t.status == TransactionStatus.pending;
    return Container(
      margin: const EdgeInsets.only(bottom: 20), padding: const EdgeInsets.all(15),
      decoration: BoxDecoration(color: isDark ? const Color(0xFF1C1F2E) : Colors.white, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 10)]),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          CircleAvatar(backgroundColor: Colors.blue.withOpacity(0.1), child: Text(user.username.isNotEmpty ? user.username[0].toUpperCase() : '?', style: const TextStyle(color: Colors.blue))),
          const SizedBox(width: 12),
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('@${user.username}', style: TextStyle(fontWeight: FontWeight.bold, color: isDark ? Colors.white : Colors.black)),
            Text('ID: NGMY/USR/${user.email.hashCode.abs().toString().padLeft(6, '0').substring(0, 6)}', style: TextStyle(color: isDark ? Colors.white38 : Colors.grey, fontSize: 10)),
            Text(user.email, style: const TextStyle(color: Colors.blue, fontSize: 10)),
          ]),
          const Spacer(),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text('\$${formatCurrency(t.amount)}', style: const TextStyle(color: Color(0xFF00B25A), fontWeight: FontWeight.bold, fontSize: 18)),
            Container(padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2), decoration: BoxDecoration(color: t.status == TransactionStatus.approved ? Colors.green.withOpacity(0.1) : (t.status == TransactionStatus.rejected ? Colors.red.withOpacity(0.1) : Colors.grey.withOpacity(0.1)), borderRadius: BorderRadius.circular(10)), child: Text(t.status.name.toUpperCase(), style: TextStyle(color: t.status == TransactionStatus.approved ? Colors.green : (t.status == TransactionStatus.rejected ? Colors.red : (isDark ? Colors.white60 : Colors.grey)), fontSize: 9, fontWeight: FontWeight.bold))),
          ]),
        ]),
        const SizedBox(height: 15),
        Container(padding: const EdgeInsets.all(12), decoration: BoxDecoration(color: isDark ? Colors.white.withOpacity(0.03) : const Color(0xFFFFF9E7), borderRadius: BorderRadius.circular(15), border: Border.all(color: isDark ? Colors.white10 : Colors.orange.withOpacity(0.1))), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
          _subDetail('Requested', '\$${formatCurrency(t.amount)}', isDark),
          _subDetail('Fee (15%)', '-\$${formatCurrency(t.amount * 0.15)}', isDark, valueColor: Colors.red),
          _subDetail('Send to User', '\$${formatCurrency(t.amount * 0.85)}', isDark, valueColor: Colors.green),
        ])),
        const SizedBox(height: 15),
        Text('Method: ${t.method.name}', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: isDark ? Colors.white70 : Colors.black)),
        Text('Account: ${t.sourceDetails ?? "Unknown"}', style: TextStyle(fontSize: 12, color: isDark ? Colors.white38 : Colors.black54)),
        const SizedBox(height: 15),
        Row(children: [
          IconButton(icon: Icon(Icons.delete_outline, color: isDark ? Colors.white60 : const Color(0xFF1A1C1E)), onPressed: () { setState(() { widget.allTransactions.remove(t); }); widget.onDataChanged(); }),
          const Spacer(),
          if (isPending) ...[
            TextButton(onPressed: () { widget.onProcess(t, false); setState(() {}); }, child: const Text('REJECT', style: TextStyle(color: Colors.red))),
            const SizedBox(width: 10),
            ElevatedButton(onPressed: () { widget.onProcess(t, true); setState(() {}); }, style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white), child: const Text('APPROVE')),
          ]
        ])
      ]),
    );
  }

  Widget _subDetail(String l, String v, bool isDark, {Color valueColor = Colors.black}) => Column(children: [Text(l, style: TextStyle(color: isDark ? Colors.white38 : Colors.grey, fontSize: 10)), const SizedBox(height: 4), Text(v, style: TextStyle(color: isDark && valueColor == Colors.black ? Colors.white : valueColor, fontWeight: FontWeight.bold, fontSize: 12))]);

  Widget _detailBox(String label, String value, bool isDark, {Color color = Colors.grey, bool center = false, bool bigText = false}) => Container(
    padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(10)),
    child: Column(crossAxisAlignment: center ? CrossAxisAlignment.center : CrossAxisAlignment.start, children: [
      Text(label, style: TextStyle(color: isDark ? Colors.blueAccent : Colors.blueAccent, fontSize: 10, fontWeight: FontWeight.bold)),
      const SizedBox(height: 4),
      Text(value, style: TextStyle(color: bigText ? (isDark ? Colors.purpleAccent : Colors.purple) : (isDark ? Colors.white : Colors.black87), fontWeight: FontWeight.bold, fontSize: bigText ? 24 : 14)),
    ]),
  );

  Widget _adminUsers(bool isDark) {
    final filtered = widget.allUsers.where((u) => u.email.toLowerCase().contains(_query)).toList();
    return Column(children: [
      Padding(padding: const EdgeInsets.all(15), child: TextField(controller: _search, style: TextStyle(color: isDark ? Colors.white : Colors.black), decoration: InputDecoration(hintText: 'Search users...', hintStyle: TextStyle(color: isDark ? Colors.white38 : Colors.grey), prefixIcon: Icon(Icons.search, color: isDark ? Colors.white38 : Colors.grey), filled: true, fillColor: isDark ? const Color(0xFF1C1F2E) : Colors.white, border: OutlineInputBorder(borderRadius: BorderRadius.circular(15), borderSide: BorderSide.none)), onChanged: (v) => setState(() => _query = v.toLowerCase()))),
      Expanded(child: ListView(padding: const EdgeInsets.symmetric(horizontal: 15), children: filtered.map((u) => Card(elevation: 0, color: isDark ? const Color(0xFF1C1F2E) : Colors.white, margin: const EdgeInsets.only(bottom: 10), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)), child: ExpansionTile(
        iconColor: isDark ? Colors.white : Colors.black,
        collapsedIconColor: isDark ? Colors.white60 : Colors.black54,
        leading: CircleAvatar(backgroundColor: u.status == 'active' ? Colors.green : Colors.red, child: Text(u.username.isNotEmpty ? u.username[0].toUpperCase() : '?', style: const TextStyle(color: Colors.white))),
        title: Text(u.username, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14, color: isDark ? Colors.white : Colors.black)),
        subtitle: Text(u.email, style: TextStyle(fontSize: 11, color: isDark ? Colors.white38 : Colors.black54)),
        children: [
          Padding(padding: const EdgeInsets.all(15), child: Wrap(spacing: 8, runSpacing: 8, children: [
            _sBtn('Active', Icons.check, Colors.green, () { u.status = 'active'; widget.onDataChanged(); setState((){}); }),
            _sBtn('Suspend', Icons.pause, Colors.orange, () { u.status = 'suspended'; widget.onDataChanged(); setState((){}); }),
            _sBtn('Add \$', Icons.add, Colors.blue, () => _prompt(context, 'Add Money', (val) {
              final amt = double.tryParse(val) ?? 0;
              if (amt <= 0) return;
              u.accountBalance += amt;
              widget.onAddTransaction(AppTransaction(
                id: DateTime.now().toString(),
                userEmail: u.email,
                amount: amt,
                type: TransactionType.adminAdd,
                method: PaymentMethod.system,
                sourceDetails: 'Admin credit',
                status: TransactionStatus.approved,
                timestamp: DateTime.now(),
              ));
              widget.onDataChanged();
              setState(() {});
            })),
            _sBtn('Logout', Icons.logout, Colors.redAccent, () { u.forceLogout = true; widget.onDataChanged(); setState((){}); }),
            _sBtn('Delete', Icons.delete, isDark ? Colors.white12 : Colors.black, () { widget.allUsers.remove(u); widget.onDataChanged(); setState((){}); }),
          ]))
        ],
      ))).toList())),
    ]);
  }

  void _prompt(BuildContext ctx, String title, Function(String) onSave) {
    final ctrl = TextEditingController();
    showDialog(context: ctx, builder: (c) => AlertDialog(title: Text(title), content: TextField(controller: ctrl, keyboardType: TextInputType.number), actions: [TextButton(onPressed:()=>Navigator.pop(c), child:const Text('CANCEL')), ElevatedButton(onPressed: (){ onSave(ctrl.text); Navigator.pop(c); }, child:const Text('SAVE'))]));
  }
  Widget _sBtn(String l, IconData i, Color c, VoidCallback onTap) => ElevatedButton.icon(onPressed: onTap, icon: Icon(i, size: 14), label: Text(l, style: const TextStyle(fontSize: 10)), style: ElevatedButton.styleFrom(backgroundColor: c, foregroundColor: Colors.white));
}

// --- STANDARD SCREENS ---

class WalletScreen extends StatefulWidget {
  final UserData user; final List<AppTransaction> transactions; final Function(AppTransaction) onAdd; final AppConfig config; final VoidCallback onDataChanged;
  const WalletScreen({super.key, required this.user, required this.transactions, required this.onAdd, required this.config, required this.onDataChanged});
  @override State<WalletScreen> createState() => _WalletScreenState();
}
class _WalletScreenState extends State<WalletScreen> {
  final _amt = TextEditingController(); final _handle = TextEditingController(); PaymentMethod _method = PaymentMethod.cashApp;
  int _view = 0; // 0: Deposit, 1: Withdraw, 2: History

  void _submitWithdraw() async {
    final amount = double.tryParse(_amt.text) ?? 0;
    if (amount <= 0) return;

    if (amount > widget.user.accountBalance) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Insufficient balance. You have \$${formatCurrency(widget.user.accountBalance)}'))
      );
      return;
    }

    final fee = amount * 0.15;
    final receive = amount - fee;

    String handle = _handle.text;
    if (_method == PaymentMethod.cashApp && !handle.startsWith('\$')) handle = '\$$handle';

    widget.onAdd(AppTransaction(
      id: DateTime.now().toString(),
      userEmail: widget.user.email,
      amount: amount,
      type: TransactionType.withdrawal,
      method: _method,
      sourceDetails: '($handle) - Fee: \$${formatCurrency(fee)} - You receive: \$${formatCurrency(receive)}',
      timestamp: DateTime.now()
    ));

    setState(() {
      widget.user.accountBalance -= amount;
    });
    widget.onDataChanged();

    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text('Withdrawal request sent! You will receive \$${formatCurrency(receive)} after 15% fee.')
    ));
    _amt.clear(); _handle.clear();
  }

  @override Widget build(BuildContext context) {
    return Scaffold(body: SafeArea(child: SingleChildScrollView(padding: const EdgeInsets.fromLTRB(20, 10, 20, 150), child: Column(children: [
      const FloatingTitle(title: 'MY WALLET'), const SizedBox(height: 20),
      Container(width: double.infinity, height: 180, decoration: BoxDecoration(gradient: const LinearGradient(colors: [Color(0xFF2E3192), Color(0xFF1BFFFF)]), borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: Colors.blue.withOpacity(0.3), blurRadius: 20, offset: const Offset(0, 10))]), child: Stack(alignment: Alignment.center, children: [
        const Positioned(top: 20, child: Icon(Icons.account_balance_wallet_rounded, color: Colors.white24, size: 40)),
        Column(mainAxisAlignment: MainAxisAlignment.center, children: [const Text('Available Balance', style: TextStyle(color: Colors.white70, fontSize: 14)), const SizedBox(height: 5), Text('\$${formatCurrency(widget.user.accountBalance)}', style: const TextStyle(color: Colors.white, fontSize: 36, fontWeight: FontWeight.w900))]),
      ])),
      const SizedBox(height: 30),
      Row(children: [
        Expanded(child: InkWell(onTap: () => setState(() => _view = 0), child: _wNav(0, Icons.add_to_photos_rounded, 'DEPOSIT'))),
        const SizedBox(width: 15),
        Expanded(child: InkWell(onTap: () => setState(() => _view = 1), child: _wNav(1, Icons.outbox_rounded, 'WITHDRAW'))),
        const SizedBox(width: 15),
        Expanded(child: InkWell(onTap: () => setState(() => _view = 2), child: _wNav(2, Icons.history_rounded, 'HISTORY'))),
      ]),
      const SizedBox(height: 30),
      _walletBody(),
    ]))));
  }

  Widget _wNav(int i, IconData ic, String l) => Container(padding: const EdgeInsets.symmetric(vertical: 15), decoration: BoxDecoration(color: _view == i ? Theme.of(context).colorScheme.primary : Theme.of(context).cardColor, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 10)]), child: Column(children: [Icon(ic, color: _view == i ? Colors.white : Theme.of(context).colorScheme.primary, size: 20), const SizedBox(height: 5), Text(l, style: TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: _view == i ? Colors.white : Colors.grey))]));

  Widget _walletBody() {
    if (_view == 2) {
      return Container(width: double.infinity, padding: const EdgeInsets.all(20), decoration: BoxDecoration(color: Theme.of(context).cardColor, borderRadius: BorderRadius.circular(25), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.12), blurRadius: 15)]), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        const Text('TRANSACTION HISTORY', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.grey)), const SizedBox(height: 15),
        if (widget.transactions.isEmpty) const Center(child: Text('Empty', style: TextStyle(color: Colors.grey, fontSize: 12)))
        else ...widget.transactions.map((t) {
          final incoming = t.type == TransactionType.deposit || t.type == TransactionType.adminAdd || t.type == TransactionType.reimbursement;
          final icon = incoming ? Icons.arrow_downward : Icons.arrow_upward;
          final color = t.status == TransactionStatus.approved ? Colors.green : (t.status == TransactionStatus.pending ? Colors.orange : Colors.red);
          final typeLabel = switch (t.type) {
            TransactionType.deposit => 'Deposit',
            TransactionType.withdrawal => 'Withdrawal',
            TransactionType.adminAdd => 'Admin Credit',
            TransactionType.adminRemove => 'Investment/Purchase',
            TransactionType.reimbursement => 'Reimbursement',
          };
          return Container(
            margin: const EdgeInsets.only(bottom: 12),
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Theme.of(context).brightness == Brightness.dark ? Colors.white.withOpacity(0.04) : Colors.white,
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: Colors.grey.withOpacity(0.2)),
              boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.04), blurRadius: 8)],
            ),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(color: color.withOpacity(0.15), borderRadius: BorderRadius.circular(10)),
                  child: Icon(icon, size: 18, color: color),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(typeLabel, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12)),
                      const SizedBox(height: 2),
                      Text('${t.method.name.toUpperCase()} • ${t.status.name.toUpperCase()}', style: const TextStyle(color: Colors.grey, fontSize: 10)),
                      if ((t.sourceDetails ?? '').isNotEmpty)
                        Padding(
                          padding: const EdgeInsets.only(top: 2),
                          child: Text(t.sourceDetails!, style: const TextStyle(color: Colors.grey, fontSize: 10), maxLines: 2, overflow: TextOverflow.ellipsis),
                        ),
                    ],
                  ),
                ),
                const SizedBox(width: 8),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Text('${incoming ? '+' : '-'}\$${formatCurrency(t.amount)}', style: TextStyle(fontWeight: FontWeight.bold, color: incoming ? Colors.green : Colors.blue)),
                    Text('${t.timestamp.month}/${t.timestamp.day}/${t.timestamp.year}', style: const TextStyle(color: Colors.grey, fontSize: 9)),
                  ],
                )
              ],
            ),
          );
        }).toList()
      ]));
    }
    bool isDep = _view == 0;
    return Container(padding: const EdgeInsets.all(25), decoration: BoxDecoration(color: Theme.of(context).cardColor, borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.12), blurRadius: 15)]), child: Column(children: [
      Text(isDep ? 'DEPOSIT FUNDS' : 'WITHDRAW FUNDS', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)), const SizedBox(height: 25),
      TextField(controller: _amt, keyboardType: TextInputType.number, decoration: InputDecoration(labelText: 'Amount (\$)', border: OutlineInputBorder(borderRadius: BorderRadius.circular(15)))), 
      if (isDep) ...[
        const SizedBox(height: 15),
        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [10, 50, 100, 500].map((v) => GestureDetector(onTap: () => setState(() => _amt.text = v.toString()), child: Container(padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 8), decoration: BoxDecoration(color: Theme.of(context).colorScheme.primary.withOpacity(0.1), borderRadius: BorderRadius.circular(10), border: Border.all(color: Theme.of(context).colorScheme.primary.withOpacity(0.3))), child: Text('\$$v', style: TextStyle(fontWeight: FontWeight.bold, color: Theme.of(context).colorScheme.primary, fontSize: 12))))).toList()),
        const SizedBox(height: 25),
        ElevatedButton(onPressed: () {
          final double? a = double.tryParse(_amt.text);
          if (a != null && a > 0) Navigator.push(context, MaterialPageRoute(builder: (c) => SubmitPaymentPage(user: widget.user, amount: a, onAdd: widget.onAdd, config: widget.config)));
        }, style: ElevatedButton.styleFrom(minimumSize: const Size(double.infinity, 55), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)), backgroundColor: Theme.of(context).colorScheme.primary, foregroundColor: Colors.white), child: const Text('DEPOSIT FUNDS')),
      ] else ...[
        const SizedBox(height: 20),
        DropdownButtonFormField<PaymentMethod>(value: _method, decoration: InputDecoration(border: OutlineInputBorder(borderRadius: BorderRadius.circular(15))), items: const [DropdownMenuItem(value: PaymentMethod.cashApp, child: Text('Cash App')), DropdownMenuItem(value: PaymentMethod.bitcoin, child: Text('Bitcoin'))], onChanged: (v) => setState(() => _method = v!)), const SizedBox(height: 15),
        TextField(controller: _handle, decoration: InputDecoration(labelText: _method == PaymentMethod.cashApp ? 'Cash App Tag' : 'Bitcoin Address', border: OutlineInputBorder(borderRadius: BorderRadius.circular(15))), onChanged: (v) { if (_method == PaymentMethod.cashApp && !v.startsWith('\$')) _handle.text = '\$$v'; }),
        const SizedBox(height: 25),
        ElevatedButton(onPressed: _submitWithdraw, style: ElevatedButton.styleFrom(minimumSize: const Size(double.infinity, 55), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)), backgroundColor: Theme.of(context).colorScheme.primary, foregroundColor: Colors.white), child: const Text('WITHDRAW FUNDS')),
        const SizedBox(height: 15),
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: Colors.orange.withOpacity(0.12),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: Colors.orange.withOpacity(0.4)),
          ),
          child: const Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(Icons.info_outline, color: Colors.orange, size: 18),
              SizedBox(width: 8),
              Expanded(
                child: Text(
                  'Note: A 15% withdrawal fee will be deducted from your withdrawal amount. For example, if you withdraw \$100, you will receive \$85.',
                  style: TextStyle(fontSize: 12, color: Colors.orange, fontWeight: FontWeight.w500),
                ),
              ),
            ],
          ),
        ),
      ],
    ]));
  }
}

// --- NEW SUBMIT PAYMENT PAGE ---

class SubmitPaymentPage extends StatefulWidget {
  final UserData user; final double amount; final Function(AppTransaction) onAdd; final AppConfig config;
  const SubmitPaymentPage({super.key, required this.user, required this.amount, required this.onAdd, required this.config});
  @override State<SubmitPaymentPage> createState() => _SubmitPaymentPageState();
}
class _SubmitPaymentPageState extends State<SubmitPaymentPage> {
  PaymentMethod _method = PaymentMethod.cashApp; final _tag = TextEditingController(); File? _shot; late String _vCode;
  @override void initState() { super.initState(); _vCode = (10000 + math.Random().nextInt(89999)).toString(); }

  @override Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Submit Payment Request', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)), centerTitle: true),
      body: SingleChildScrollView(padding: const EdgeInsets.all(20), child: Column(children: [
        Container(width: double.infinity, padding: const EdgeInsets.all(20), decoration: BoxDecoration(color: Colors.green.withOpacity(0.05), border: Border.all(color: Colors.green.withOpacity(0.2)), borderRadius: BorderRadius.circular(15)), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Amount:', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.grey)), Text('\$${formatCurrency(widget.amount)}', style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w900, color: Colors.green))])),
        const SizedBox(height: 30),
        const Align(alignment: Alignment.centerLeft, child: Text('Select Payment Method', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13, color: Colors.grey))),
        const SizedBox(height: 15),
        Row(children: [
          Expanded(child: _payOpt(PaymentMethod.cashApp, Icons.attach_money, 'Cash App')),
          const SizedBox(width: 15),
          Expanded(child: _payOpt(PaymentMethod.bitcoin, Icons.currency_bitcoin, 'Bitcoin')),
        ]),
        const SizedBox(height: 25),
        _instCard(),
        const SizedBox(height: 20),
        TextField(controller: _tag, decoration: InputDecoration(labelText: _method == PaymentMethod.cashApp ? 'Your Cash App Tag' : 'Your BTC Wallet', border: OutlineInputBorder(borderRadius: BorderRadius.circular(15)), hintText: _method == PaymentMethod.cashApp ? 'Starts with \$' : ''), onChanged: (v) { if (_method == PaymentMethod.cashApp && !v.startsWith('\$')) _tag.text = '\$$v'; }),
        const SizedBox(height: 25),
        _codeBox(),
        const SizedBox(height: 25),
        GestureDetector(onTap: () async { final img = await ImagePicker().pickImage(source: ImageSource.gallery); if (img != null) setState(() => _shot = File(img.path)); }, child: Container(width: double.infinity, padding: const EdgeInsets.all(25), decoration: BoxDecoration(color: Colors.blue.withOpacity(0.05), border: Border.all(color: Colors.blue.withOpacity(0.3), style: BorderStyle.solid), borderRadius: BorderRadius.circular(20)), child: Column(children: [const Icon(Icons.cloud_upload_outlined, color: Colors.blue, size: 35), const SizedBox(height: 10), Text(_shot == null ? 'Click to upload payment screenshot' : 'Screenshot Attached!', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: Colors.blue)), const Text('PNG, JPG (Required)', style: TextStyle(fontSize: 9, color: Colors.grey))]))),
        const SizedBox(height: 20),
        Container(padding: const EdgeInsets.all(15), decoration: BoxDecoration(color: Colors.amber.withOpacity(0.1), borderRadius: BorderRadius.circular(15)), child: const Text('Your request is being processed. Once verified, your funds will be credited to your account.', style: TextStyle(fontSize: 10, color: Colors.orange, fontWeight: FontWeight.bold), textAlign: TextAlign.center)),
        const SizedBox(height: 30),
        Row(children: [
          Expanded(child: OutlinedButton(onPressed: () => Navigator.pop(context), style: OutlinedButton.styleFrom(minimumSize: const Size(0, 55), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15))), child: const Text('Cancel'))),
          const SizedBox(width: 15),
          Expanded(child: ElevatedButton(onPressed: () {
            if (_shot == null || _tag.text.isEmpty) return;
            String t = _tag.text; if (_method == PaymentMethod.cashApp && !t.startsWith('\$')) t = '\$$t';
            widget.onAdd(AppTransaction(id: DateTime.now().toString(), userEmail: widget.user.email, amount: widget.amount, type: TransactionType.deposit, method: _method, sourceDetails: t, screenshotPath: _shot!.path, verificationCode: _vCode, timestamp: DateTime.now()));
            Navigator.pop(context);
          }, style: ElevatedButton.styleFrom(minimumSize: const Size(0, 55), backgroundColor: Colors.green, foregroundColor: Colors.white, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15))), child: const Text('Submit'))),
        ]),
        const SizedBox(height: 50),
      ])),
    );
  }

  Widget _payOpt(PaymentMethod m, IconData i, String l) {
    bool sel = _method == m;
    return GestureDetector(onTap: () => setState(() => _method = m), child: Container(padding: const EdgeInsets.symmetric(vertical: 20), decoration: BoxDecoration(color: sel ? Colors.green.withOpacity(0.1) : Colors.transparent, border: Border.all(color: sel ? Colors.green : Colors.grey.shade300, width: 2), borderRadius: BorderRadius.circular(15)), child: Column(children: [Icon(i, color: sel ? Colors.green : Colors.grey, size: 30), const SizedBox(height: 8), Text(l, style: TextStyle(fontWeight: FontWeight.bold, color: sel ? Colors.green : Colors.grey, fontSize: 13))])));
  }

  Widget _instCard() {
    String addr = _method == PaymentMethod.cashApp ? widget.config.officialCashApp : widget.config.officialBitcoin;
    return Container(padding: const EdgeInsets.all(20), decoration: BoxDecoration(color: Colors.grey.withOpacity(0.05), borderRadius: BorderRadius.circular(15)), child: Column(children: [
      Row(children: [Icon(_method == PaymentMethod.cashApp ? Icons.attach_money : Icons.currency_bitcoin, color: Colors.green, size: 18), const SizedBox(width: 10), Text(_method == PaymentMethod.cashApp ? 'Our Cash App Tag' : 'Our BTC Address', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12))]),
      const SizedBox(height: 15),
      Container(padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 12), decoration: BoxDecoration(color: Colors.white, border: Border.all(color: Colors.grey.shade200), borderRadius: BorderRadius.circular(10)), child: Row(children: [Expanded(child: Text(addr, style: const TextStyle(fontFamily: 'monospace', fontSize: 12, fontWeight: FontWeight.bold))), IconButton(icon: const Icon(Icons.copy, size: 16), onPressed: () => Clipboard.setData(ClipboardData(text: addr)))]))
    ]));
  }

  Widget _codeBox() {
    return Container(padding: const EdgeInsets.all(20), decoration: BoxDecoration(color: Colors.green.withOpacity(0.05), border: Border.all(color: Colors.green.withOpacity(0.2)), borderRadius: BorderRadius.circular(15)), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Your Code:', style: TextStyle(color: Colors.grey, fontWeight: FontWeight.bold, fontSize: 12)), Text(_vCode, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: Colors.green, letterSpacing: 2))]),
      const SizedBox(height: 15),
      _bullet('1. Send \$${formatCurrency(widget.amount)} to ${_method == PaymentMethod.cashApp ? widget.config.officialCashApp : 'the BTC address'}'),
      _bullet('2. Include this code $_vCode in the payment note'),
      _bullet('3. Submit this form after sending payment'),
    ]));
  }
  Widget _bullet(String t) => Padding(padding: const EdgeInsets.only(top: 5), child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [const Text('• ', style: TextStyle(color: Colors.green, fontWeight: FontWeight.bold)), Expanded(child: Text(t, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w500)))]));
}

// --- LOAN SERVICES SCREEN ---

class LoanServiceScreen extends StatelessWidget {
  final UserData user;
  final AppConfig config;
  const LoanServiceScreen({super.key, required this.user, required this.config});

  @override
  Widget build(BuildContext context) {
    bool isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0F111A) : const Color(0xFFF5F7FB),
      appBar: AppBar(
        title: const Text('Loan Services', style: TextStyle(fontWeight: FontWeight.bold)),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header Card
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(25),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF00B25A), Color(0xFF00894B)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(25),
                boxShadow: [BoxShadow(color: const Color(0xFF00B25A).withOpacity(0.3), blurRadius: 15, offset: const Offset(0, 8))],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(color: Colors.white.withOpacity(0.2), borderRadius: BorderRadius.circular(12)),
                        child: const Icon(Icons.attach_money_rounded, color: Colors.white, size: 28),
                      ),
                      const SizedBox(width: 15),
                      const Text('Loan Services', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 24)),
                    ],
                  ),
                  const SizedBox(height: 15),
                  Text(
                    'Need fast cash? Call ${config.loanPhone} or apply for a loan with collateral-backed security below',
                    style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.4),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 30),

            const Text('Apply for New Loan', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
            const SizedBox(height: 15),
            ElevatedButton.icon(
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Loan application form opening...')));
              },
              icon: const Icon(Icons.attach_money_rounded),
              label: const Text('Apply for a Loan', style: TextStyle(fontWeight: FontWeight.bold)),
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF00B25A),
                foregroundColor: Colors.white,
                minimumSize: const Size(double.infinity, 60),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
              ),
            ),
            const SizedBox(height: 30),

            // How It Works Box
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1C1F2E) : const Color(0xFFE8F0FF),
                borderRadius: BorderRadius.circular(25),
                border: Border.all(color: Colors.blue.withOpacity(0.1)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Row(
                        children: [
                          Icon(Icons.description_outlined, color: Colors.blue, size: 22),
                          SizedBox(width: 10),
                          Text('How It Works', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                        ],
                      ),
                      ElevatedButton.icon(
                        onPressed: () => _showCalculator(context),
                        icon: const Icon(Icons.calculate_outlined, size: 18),
                        label: const Text('Calculator', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.deepPurple,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(horizontal: 15),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 20),
                  Text(
                    config.loanHowItWorks,
                    style: TextStyle(fontSize: 13, height: 1.8, color: isDark ? Colors.white70 : Colors.black87),
                  ),
                  const SizedBox(height: 20),
                  
                  // Warning Box
                  Container(
                    padding: const EdgeInsets.all(15),
                    decoration: BoxDecoration(
                      color: Colors.red.withOpacity(0.05),
                      borderRadius: BorderRadius.circular(15),
                      border: Border.all(color: Colors.red.withOpacity(0.1)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Row(
                          children: [
                            Icon(Icons.warning_amber_rounded, color: Colors.orange, size: 16),
                            SizedBox(width: 8),
                            Text('Late Payment Fees', style: TextStyle(color: Colors.brown, fontWeight: FontWeight.bold, fontSize: 12)),
                          ],
                        ),
                        const SizedBox(height: 8),
                        _warnItem('A one-time late fee of up to 10% may apply if payment is not received within 10 days'),
                        _warnItem('Additional fees apply if unpaid after 15 days'),
                        const Divider(height: 20),
                        const Row(
                          children: [
                            Icon(Icons.gavel_rounded, color: Colors.redAccent, size: 16),
                            SizedBox(width: 8),
                            Text('Default & Collateral Policy', style: TextStyle(color: Colors.brown, fontWeight: FontWeight.bold, fontSize: 12)),
                          ],
                        ),
                        const SizedBox(height: 8),
                        _warnItem('Loan considered in default after 15 days late'),
                        _warnItem('Lender has the right to recover pledged collateral'),
                      ],
                    ),
                  ),
                  const SizedBox(height: 15),
                  const Row(
                    children: [
                      Icon(Icons.warning_rounded, color: Colors.orange, size: 14),
                      SizedBox(width: 8),
                      Expanded(child: Text('Maximum 3 active loans per user. Collateral may be seized.', style: TextStyle(color: Colors.brown, fontSize: 10, fontWeight: FontWeight.bold))),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 50),
          ],
        ),
      ),
    );
  }

  Widget _warnItem(String t) => Padding(
    padding: const EdgeInsets.only(bottom: 4),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text('• ', style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
        Expanded(child: Text(t, style: const TextStyle(color: Colors.redAccent, fontSize: 10, height: 1.4))),
      ],
    ),
  );

  void _showCalculator(BuildContext context) {
    final amt = TextEditingController();
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (c) => StatefulBuilder(
        builder: (context, setST) {
          double? loan = double.tryParse(amt.text);
          double interest = (loan ?? 0) * 0.36;
          double total = (loan ?? 0) + interest;
          double monthly = total / 2;

          return Container(
            height: MediaQuery.of(context).size.height * 0.6,
            decoration: BoxDecoration(
              color: Theme.of(context).scaffoldBackgroundColor,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(30)),
            ),
            padding: const EdgeInsets.all(25),
            child: Column(
              children: [
                Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.withOpacity(0.3), borderRadius: BorderRadius.circular(10))),
                const SizedBox(height: 20),
                const Text('Loan Calculator', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
                const SizedBox(height: 25),
                TextField(
                  controller: amt,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(labelText: 'Loan Amount (\$)', border: OutlineInputBorder()),
                  onChanged: (v) => setST(() {}),
                ),
                const SizedBox(height: 30),
                _calcRow('Interest (36%)', '\$${formatCurrency(interest)}', Colors.orange),
                const Divider(height: 30),
                _calcRow('Total Repayment', '\$${formatCurrency(total)}', Colors.blue),
                const SizedBox(height: 10),
                _calcRow('Monthly (2 Months)', '\$${formatCurrency(monthly)}', Colors.green),
                const Spacer(),
                ElevatedButton(
                  onPressed: () => Navigator.pop(context),
                  style: ElevatedButton.styleFrom(minimumSize: const Size(double.infinity, 55), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15))),
                  child: const Text('CLOSE'),
                ),
              ],
            ),
          );
        }
      ),
    );
  }

  Widget _calcRow(String l, String v, Color c) => Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: [
      Text(l, style: const TextStyle(fontWeight: FontWeight.w500)),
      Text(v, style: TextStyle(color: c, fontWeight: FontWeight.w900, fontSize: 18)),
    ],
  );
}

class InvestScreen extends StatelessWidget {
  final UserData user; final List<InvestmentPlan> plans; final Function(String, double, double) onInvest;
  const InvestScreen({super.key, required this.user, required this.plans, required this.onInvest});
  @override Widget build(BuildContext context) {
    return Scaffold(body: SafeArea(child: SingleChildScrollView(padding: const EdgeInsets.fromLTRB(20, 10, 20, 150), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      const FloatingTitle(title: 'INVESTMENT PLANS'), const SizedBox(height: 20),
      if (user.activeInvestment != null) ...[const Text('ACTIVE ASSET', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: Colors.grey)), const SizedBox(height: 15), _activeCard(context, user.activeInvestment!), const SizedBox(height: 30)],
      const Text('AVAILABLE PLANS', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: Colors.grey)), const SizedBox(height: 15),
      ...plans.map((p) => _planRow(context, p)),
    ]))));
  }
  Widget _activeCard(BuildContext ctx, ActiveInvestment inv) => Container(
    height: 200, width: double.infinity, padding: const EdgeInsets.all(24), 
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(24), 
      gradient: const LinearGradient(colors: [Color(0xFF2E3192), Color(0xFF1BFFFF)]), 
      boxShadow: [BoxShadow(color: Colors.blue.withOpacity(0.3), blurRadius: 15, offset: const Offset(0, 8))]
    ), 
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start, 
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween, 
          children: [
            Text(inv.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 18)), 
            const Icon(Icons.contactless, color: Colors.white70)
          ]
        ),
        const SizedBox(height: 10),
        Text(
          'Making \$${formatCurrency(inv.dailyAmount)} Daily',
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
        ),
        const Spacer(), 
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween, 
          children: [
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [const Text('INVESTED', style: TextStyle(color: Colors.white70, fontSize: 10)), Text('\$${formatCurrency(inv.amount)}', style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold))]), 
            Column(crossAxisAlignment: CrossAxisAlignment.center, children: [const Text('DAILY ROI', style: TextStyle(color: Colors.white70, fontSize: 10)), Text('${(inv.dailyROI * 100).toStringAsFixed(2)}%', style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold))]), 
            Column(crossAxisAlignment: CrossAxisAlignment.end, children: [const Text('DAYS LEFT', style: TextStyle(color: Colors.white70, fontSize: 10)), Text('${inv.daysLeft} d', style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold))])
          ]
        )
      ]
    )
  );

  Widget _planRow(BuildContext ctx, InvestmentPlan p) {
    final cur = user.totalInvestmentAmount;
    final price = p.price;
    final diff = price - cur;
    final daily = price * p.roi;
    final total = daily * 261; // 261 work days in a year (excluding weekends)

    final active = user.activeInvestment;
    final isExpired = active != null && active.daysLeft <= 0;
    
    bool isCurrent = active != null && active.name == p.name && price == active.amount && !isExpired;
    bool canAfford = user.accountBalance >= diff;
    bool isUpgrade = !isExpired && active != null && price > active.amount;
    bool isDowngrade = !isExpired && active != null && price < active.amount;

    String buttonText = "Invest Now";
    if (isCurrent) {
      buttonText = "Active";
    } else if (isUpgrade) {
      buttonText = "Upgrade Now";
    } else if (isExpired && price == (active?.amount ?? 0)) {
      buttonText = "Renew Plan";
    }

    final isDark = Theme.of(ctx).brightness == Brightness.dark;
    final cardBg = isDark ? const Color(0xFF1E1E1E) : Colors.white;
    final textColor = isDark ? Colors.white : Colors.black87;
    final subColor = isDark ? Colors.white70 : Colors.black54;

    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      decoration: BoxDecoration(
        color: cardBg,
        gradient: isDark ? null : const LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [Color(0xFF00B25A), Color(0xFF00964D)],
        ),
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
        border: Border.all(color: Colors.white.withOpacity(0.1)),
      ),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(p.name, style: TextStyle(color: isDark ? textColor : Colors.white, fontWeight: FontWeight.bold, fontSize: 18)),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            _tag(ctx, '${(p.roi * 100).toStringAsFixed(2)}%'),
                            const SizedBox(width: 8),
                            _tag(ctx, '261d'),
                          ],
                        ),
                      ],
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        Text('\$${formatCurrency(price)}', style: TextStyle(color: isDark ? textColor : Colors.white, fontWeight: FontWeight.bold, fontSize: 24)),
                        Text('Investment', style: TextStyle(color: isDark ? subColor : Colors.white70, fontSize: 10)),
                      ],
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                Row(
                  children: [
                    Expanded(child: _infoBox(ctx, 'Daily', '\$${formatCurrency(daily)}')),
                    const SizedBox(width: 10),
                    Expanded(child: _infoBox(ctx, 'Total', '\$${formatCurrency(total)}')),
                    const SizedBox(width: 10),
                    Expanded(child: _infoBox(ctx, 'Days', '261')),
                  ],
                ),
              ],
            ),
          ),
          Container(
            width: double.infinity,
            margin: const EdgeInsets.fromLTRB(20, 0, 20, 20),
            child: ElevatedButton(
              onPressed: (isCurrent || isDowngrade || !canAfford)
                  ? null 
                  : () => onInvest(p.name, price, p.roi),
              style: ElevatedButton.styleFrom(
                backgroundColor: isDark ? const Color(0xFF6200EE) : Colors.white,
                foregroundColor: isDark ? Colors.white : const Color(0xFF00964D),
                disabledBackgroundColor: (isDark ? Colors.grey : Colors.white).withOpacity(0.3),
                disabledForegroundColor: isDark ? Colors.grey : const Color(0xFF00964D).withOpacity(0.6),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                elevation: 0,
                padding: const EdgeInsets.symmetric(vertical: 15),
              ),
              child: Text(buttonText.toUpperCase(), style: const TextStyle(fontWeight: FontWeight.bold)),
            ),
          ),
        ],
      ),
    );
  }

  Widget _tag(BuildContext ctx, String text) {
    final isDark = Theme.of(ctx).brightness == Brightness.dark;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: isDark ? Colors.white.withOpacity(0.1) : Colors.white.withOpacity(0.2),
        borderRadius: BorderRadius.circular(5),
      ),
      child: Text(text, style: TextStyle(color: isDark ? Colors.white70 : Colors.white, fontSize: 10, fontWeight: FontWeight.bold)),
    );
  }

  Widget _infoBox(BuildContext ctx, String label, String value) {
    final isDark = Theme.of(ctx).brightness == Brightness.dark;
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: isDark ? Colors.white.withOpacity(0.05) : Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: TextStyle(color: isDark ? Colors.white60 : Colors.white70, fontSize: 10)),
          const SizedBox(height: 4),
          Text(value, style: TextStyle(color: isDark ? Colors.white : Colors.white, fontWeight: FontWeight.bold, fontSize: 14)),
        ],
      ),
    );
  }
}

class StatsScreen extends StatelessWidget {
  final UserData user; final List<AppTransaction> transactions;
  const StatsScreen({super.key, required this.user, required this.transactions});
  @override Widget build(BuildContext context) {
    final approved = transactions.where((t) => t.status == TransactionStatus.approved);
    final totalVol = approved.where((t) => t.type == TransactionType.deposit).fold(0.0, (s, t) => s + t.amount);
    final totalPay = approved.where((t) => t.type == TransactionType.withdrawal).fold(0.0, (s, t) => s + t.amount);
    return Scaffold(body: SafeArea(child: SingleChildScrollView(padding: const EdgeInsets.fromLTRB(20, 10, 20, 150), child: Column(children: [
      const FloatingTitle(title: 'PLATFORM STATS'), const SizedBox(height: 25),
      GridView.count(shrinkWrap: true, physics: const NeverScrollableScrollPhysics(), crossAxisCount: 2, mainAxisSpacing: 15, crossAxisSpacing: 15, childAspectRatio: 1.3, children: [_sTile(context, 'Total Volume', '\$${formatCurrency(totalVol)}', Icons.account_balance, Colors.blue), _sTile(context, 'Total Profit', '\$${formatCurrency(user.totalProfit)}', Icons.auto_graph, Colors.purple), _sTile(context, 'Total Payout', '\$${formatCurrency(totalPay)}', Icons.payments, Colors.green), _sTile(context, 'Global Rank', '#1', Icons.public, Colors.orange)]),
      const SizedBox(height: 25),
      Container(width: double.infinity, padding: const EdgeInsets.all(20), decoration: BoxDecoration(color: Theme.of(context).cardColor, borderRadius: BorderRadius.circular(25), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.12), blurRadius: 15)]), child: const Column(children: [Text('REAL-TIME GROWTH', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1)), SizedBox(height: 20), Icon(Icons.show_chart_rounded, size: 80, color: Colors.blueAccent), Text('Data is synced live from your account.', style: TextStyle(color: Colors.grey, fontWeight: FontWeight.bold, fontSize: 12))])),
    ]))));
  }
  Widget _sTile(BuildContext ctx, String l, String v, IconData i, Color c) => Container(padding: const EdgeInsets.all(15), decoration: BoxDecoration(color: Theme.of(ctx).cardColor, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 10, offset: const Offset(0, 4))]), child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [Icon(i, color: c, size: 24), const SizedBox(height: 8), Text(l, style: const TextStyle(fontSize: 10, color: Colors.grey, fontWeight: FontWeight.bold)), Text(v, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w900))]));
}

class ProfileScreen extends StatefulWidget {
  final UserData user; final AppConfig config; final Function(ThemeMode) onThemeChanged; final ThemeMode currentThemeMode; final VoidCallback onLogout; final VoidCallback onDataChanged;
  const ProfileScreen({super.key, required this.user, required this.config, required this.onThemeChanged, required this.currentThemeMode, required this.onLogout, required this.onDataChanged});

  @override State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override Widget build(BuildContext context) {
    return Scaffold(body: SafeArea(child: SingleChildScrollView(padding: const EdgeInsets.fromLTRB(20, 10, 20, 150), child: Column(children: [
      const FloatingTitle(title: 'MY PROFILE'), const SizedBox(height: 30),
      GestureDetector(
        onTap: () async {
          final img = await ImagePicker().pickImage(source: ImageSource.gallery);
          if (img != null) {
            setState(() { widget.user.profilePicturePath = img.path; });
            widget.onDataChanged();
          }
        },
        child: Stack(alignment: Alignment.center, children: [
          CircleAvatar(
            radius: 50,
            backgroundColor: Colors.grey.shade300,
            backgroundImage: widget.user.profilePicturePath != null ? FileImage(File(widget.user.profilePicturePath!)) : null,
            child: widget.user.profilePicturePath == null ? const Icon(Icons.person, size: 40, color: Colors.white) : null,
          ),
          if (widget.user.status == 'verified') Positioned(bottom: 0, right: 0, child: Container(padding: const EdgeInsets.all(2), decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle), child: const Icon(Icons.verified, color: Colors.blue, size: 24))),
          if (widget.user.status != 'active' && widget.user.status != 'verified') Positioned(top: 0, right: 0, child: Container(padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4), decoration: BoxDecoration(color: Colors.red, borderRadius: BorderRadius.circular(10)), child: Text(widget.user.status.toUpperCase(), style: const TextStyle(color: Colors.white, fontSize: 8, fontWeight: FontWeight.bold)))),
        ]),
      ),
      const SizedBox(height: 20),
      _box(context, 'Contact', [
        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Personal Info', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)), IconButton(icon: const Icon(Icons.edit, size: 16, color: Colors.blue), onPressed: () => _editMe(context))]),
        const Divider(),
        _row(Icons.person_outline, 'Username', widget.user.username),
        const SizedBox(height: 10),
        _row(Icons.email_outlined, 'Email', widget.user.email),
        const SizedBox(height: 10),
        _row(Icons.phone_android_outlined, 'Phone', widget.user.phone.isEmpty ? 'Not set' : widget.user.phone)
      ]), const SizedBox(height: 15),
      _box(context, 'Account Information', [
        _pair('Account ID', 'NGMY/USR/${widget.user.email.hashCode.abs().toString().padLeft(6, '0').substring(0, 6)}'),
        const Divider(), 
        _pair('Account Type', widget.user.isAdmin ? 'System Administrator' : 'Premium Investor')
      ]), const SizedBox(height: 15),
      _box(context, 'My Prizes', [Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('NGMY Points', style: TextStyle(fontWeight: FontWeight.bold)), Text(widget.user.points.toString(), style: TextStyle(color: Colors.amber[900], fontWeight: FontWeight.w900, fontSize: 18))])]), const SizedBox(height: 15),
      _box(context, 'Legal Information', [
        InkWell(
          onTap: () => _showLegal(context, 'Terms & Conditions', widget.config.termsAndConditions),
          child: Row(children: [const Icon(Icons.description_outlined, size: 20), const SizedBox(width: 12), const Text('Terms & Conditions'), const Spacer(), const Icon(Icons.chevron_right, color: Colors.grey)]),
        ),
        const Divider(height: 30),
        InkWell(
          onTap: () => _showLegal(context, 'Privacy Policy', widget.config.privacyPolicy),
          child: Row(children: [const Icon(Icons.privacy_tip_outlined, size: 20), const SizedBox(width: 12), const Text('Privacy Policy'), const Spacer(), const Icon(Icons.chevron_right, color: Colors.grey)]),
        ),
      ]),
      const SizedBox(height: 15),
      _box(context, 'Appearance', [Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [_tOp(context, ThemeMode.light, Icons.light_mode, 'Light'), _tOp(context, ThemeMode.dark, Icons.dark_mode, 'Dark'), _tOp(context, ThemeMode.system, Icons.brightness_auto, 'Auto')])]), const SizedBox(height: 30),
      ElevatedButton(onPressed: widget.onLogout, style: ElevatedButton.styleFrom(backgroundColor: Colors.redAccent, foregroundColor: Colors.white, minimumSize: const Size(double.infinity, 55), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)), elevation: 5), child: const Text('LOGOUT ACCOUNT', style: TextStyle(fontWeight: FontWeight.bold))),
    ]))));
  }

  void _editMe(BuildContext ctx) {
    final e = TextEditingController(text: widget.user.email); final p = TextEditingController(text: widget.user.phone); final n = TextEditingController(text: widget.user.username);
    showDialog(context: ctx, builder: (c) => AlertDialog(title: const Text('Edit Profile'), content: Column(mainAxisSize: MainAxisSize.min, children: [TextField(controller: n, decoration: const InputDecoration(labelText: 'Username')), TextField(controller: e, decoration: const InputDecoration(labelText: 'Email')), TextField(controller: p, decoration: const InputDecoration(labelText: 'Phone'))]), actions: [TextButton(onPressed:()=>Navigator.pop(c), child:const Text('CANCEL')), ElevatedButton(onPressed: (){ widget.user.username = n.text; widget.user.email = e.text; widget.user.phone = p.text; widget.onDataChanged(); Navigator.pop(c); setState((){}); }, child: const Text('SAVE'))]));
  }

  void _showLegal(BuildContext ctx, String title, String content) {
    showModalBottomSheet(
      context: ctx,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (c) => Container(
        height: MediaQuery.of(ctx).size.height * 0.85,
        decoration: BoxDecoration(
          color: Theme.of(ctx).scaffoldBackgroundColor,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(30)),
        ),
        child: Column(
          children: [
            Container(
              margin: const EdgeInsets.only(top: 10),
              width: 50, height: 5,
              decoration: BoxDecoration(color: Colors.grey.withOpacity(0.3), borderRadius: BorderRadius.circular(10)),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(25, 20, 15, 10),
              child: Row(
                children: [
                  Text(title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: 0.5)),
                  const Spacer(),
                  IconButton(
                    onPressed: () => Navigator.pop(c), 
                    icon: Container(
                      padding: const EdgeInsets.all(5),
                      decoration: BoxDecoration(color: Colors.grey.withOpacity(0.1), shape: BoxShape.circle),
                      child: const Icon(Icons.close_rounded, size: 20),
                    ),
                  ),
                ],
              ),
            ),
            const Divider(height: 1),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.all(25),
                child: Text(
                  content,
                  style: const TextStyle(fontSize: 14, height: 1.6, letterSpacing: 0.3, fontWeight: FontWeight.w400),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
  Widget _row(IconData i, String l, String v) => Row(children: [Icon(i, size: 18, color: Colors.grey), const SizedBox(width: 12), Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(l, style: const TextStyle(fontSize: 10, color: Colors.grey)), Text(v, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w500))])]);
  Widget _box(BuildContext ctx, String t, List<Widget> c) => Container(width: double.infinity, padding: const EdgeInsets.all(20), decoration: BoxDecoration(color: Theme.of(ctx).cardColor, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 15, offset: const Offset(0, 5))]), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(t, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Colors.grey)), const SizedBox(height: 15), ...c]));
  Widget _pair(String l, String v) => Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(l, style: const TextStyle(fontSize: 13)), Text(v, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13))]);
  Widget _tOp(BuildContext ctx, ThemeMode m, IconData i, String l) { bool sel = widget.currentThemeMode == m; return GestureDetector(onTap: () => widget.onThemeChanged(m), child: Column(children: [Icon(i, color: sel ? Theme.of(ctx).colorScheme.primary : Colors.grey, size: 28), const SizedBox(height: 5), Text(l, style: TextStyle(fontSize: 10, color: sel ? Theme.of(ctx).colorScheme.primary : Colors.grey))])); }
}
class NgmyHubScreen extends StatefulWidget {
  final UserData user;
  const NgmyHubScreen({super.key, required this.user});

  @override
  State<NgmyHubScreen> createState() => _NgmyHubScreenState();
}

class _NgmyHubScreenState extends State<NgmyHubScreen> with SingleTickerProviderStateMixin {
  late AnimationController _animCtrl;

  @override
  void initState() {
    super.initState();
    _animCtrl = AnimationController(vsync: this, duration: const Duration(seconds: 4))..repeat();
  }

  @override
  void dispose() {
    _animCtrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    // Gradient Sets
    final topColors = isDark 
      ? [const Color(0xFF6A1B9A), const Color(0xFFD84315)] 
      : [const Color(0xFFAB47BC), const Color(0xFFFF7043)];
    
    final civicColors = isDark
      ? [const Color(0xFF3949AB), const Color(0xFF512DA8)]
      : [const Color(0xFF7986CB), const Color(0xFF9575CD)];

    final storeColors = isDark
      ? [const Color(0xFFC2185B), const Color(0xFF7B1FA2)]
      : [const Color(0xFFF06292), const Color(0xFFBA68C8)];

    final jobColors = isDark
      ? [const Color(0xFFE65100), const Color(0xFFBF360C)]
      : [const Color(0xFFFF8A65), const Color(0xFFF4511E)];

    final helpColors = isDark
      ? [const Color(0xFF880E4F), const Color(0xFF4A148C)]
      : [const Color(0xFFF06292), const Color(0xFF9C27B0)];

    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              const FloatingTitle(title: 'NGMY HUB'),
              const SizedBox(height: 20),
              // Main Top Card
              Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 20),
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: topColors,
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: BorderRadius.circular(30),
                  boxShadow: [
                    BoxShadow(
                      color: topColors[0].withOpacity(0.3),
                      blurRadius: 15,
                      offset: const Offset(0, 8),
                    )
                  ],
                ),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        _animatedStar(30),
                        const SizedBox(width: 15),
                        _animatedStar(50),
                        const SizedBox(width: 15),
                        _animatedStar(30),
                      ],
                    ),
                    const SizedBox(height: 15),
                    const Text(
                      'NGMY Services',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 32),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      'Next Generation - Make Yours',
                      style: TextStyle(color: Colors.white.withOpacity(0.9), fontSize: 14, fontWeight: FontWeight.w500),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 25),
              // 2x2 Grid of cards
              GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 2,
                mainAxisSpacing: 15,
                crossAxisSpacing: 15,
                childAspectRatio: 1.6,
                children: [
                  _hubBox('Civic Registry', Icons.shield_outlined, civicColors, () => Navigator.push(context, MaterialPageRoute(builder: (c) => CivicRegistryScreen(user: widget.user)))),
                  _hubBox('NGMY Store', Icons.shopping_bag_outlined, storeColors, () {}), 
                  _hubBox('Job Marketplace', Icons.business_center_outlined, jobColors, () => Navigator.push(context, MaterialPageRoute(builder: (c) => JobMarketplaceScreen(user: widget.user)))),
                  _hubBox('Help Center', Icons.support_agent_rounded, helpColors, () {}),
                ],
              ),
              const SizedBox(height: 100),
            ],
          ),
        ),
      ),
    );
  }

  Widget _animatedStar(double size) {
    return AnimatedBuilder(
      animation: _animCtrl,
      builder: (context, child) {
        return Transform(
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.001) // perspective
            ..rotateY(_animCtrl.value * 2 * math.pi),
          alignment: Alignment.center,
          child: Icon(Icons.star_rounded, color: Colors.white, size: size),
        );
      },
    );
  }

  Widget _hubBox(String title, IconData icon, List<Color> colors, VoidCallback onTap) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(20),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10),
        decoration: BoxDecoration(
          gradient: LinearGradient(colors: colors, begin: Alignment.topLeft, end: Alignment.bottomRight),
          borderRadius: BorderRadius.circular(20),
          boxShadow: [
            BoxShadow(
              color: colors[0].withOpacity(0.3),
              blurRadius: 10,
              offset: const Offset(0, 5),
            )
          ],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 28, color: Colors.white),
            const SizedBox(height: 8),
            Text(
              title,
              textAlign: TextAlign.center,
              style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: Colors.white),
            ),
          ],
        ),
      ),
    );
  }
}

class CivicRegistryScreen extends StatefulWidget {
  final UserData user;
  const CivicRegistryScreen({super.key, required this.user});

  @override
  State<CivicRegistryScreen> createState() => _CivicRegistryScreenState();
}

class _CivicRegistryScreenState extends State<CivicRegistryScreen> {
  int _activeTab = 0; // 0: Search, 1: Enroll, 2: Members, 3: Rankings

  @override
  Widget build(BuildContext context) {
    bool isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0A0A0A) : const Color(0xFFF5F7FB),
      appBar: AppBar(
        title: const Text('Civic Registry', style: TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            // Top Header Card
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(25),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF6200EE), Color(0xFF3700B3)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(25),
                boxShadow: [BoxShadow(color: const Color(0xFF6200EE).withOpacity(0.3), blurRadius: 15, offset: const Offset(0, 8))],
              ),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(color: Colors.white.withOpacity(0.2), borderRadius: BorderRadius.circular(15)),
                    child: const Icon(Icons.shield_rounded, color: Colors.white, size: 30),
                  ),
                  const SizedBox(width: 20),
                  const Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Civic Registry', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 22)),
                        Text('Community Identity & Trust System', style: TextStyle(color: Colors.white70, fontSize: 12)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),

            // Authorized Registrar Card
            Container(
              padding: const EdgeInsets.all(15),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1E1E1E) : Colors.white,
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Colors.green.withOpacity(0.3)),
              ),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(color: Colors.green.withOpacity(0.1), borderRadius: BorderRadius.circular(12)),
                    child: const Icon(Icons.verified_user_rounded, color: Colors.green, size: 24),
                  ),
                  const SizedBox(width: 15),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('Authorized Registrar', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                        Text('Georgia • 0 registered', style: TextStyle(color: Colors.grey.shade600, fontSize: 11)),
                      ],
                    ),
                  ),
                  ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF00B25A),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 0),
                      minimumSize: const Size(0, 35),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    ),
                    child: const Text('Activate Help Mode', style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold)),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 25),

            // Tabs Grid
            Row(
              children: [
                Expanded(child: _tabItem(0, 'Search', Icons.search_rounded)),
                const SizedBox(width: 15),
                Expanded(child: _tabItem(1, 'Enroll', Icons.add_rounded)),
              ],
            ),
            const SizedBox(height: 15),
            Row(
              children: [
                Expanded(child: _tabItem(2, 'Members', Icons.people_outline_rounded)),
                const SizedBox(width: 15),
                Expanded(child: _tabItem(3, 'Rankings', Icons.bookmark_border_rounded)),
              ],
            ),
            const SizedBox(height: 30),

            // Search/Action Box
            if (_activeTab == 0) _searchSection(isDark),
            if (_activeTab == 1) _enrollSection(isDark),
            
            const SizedBox(height: 30),

            // About Section
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(25),
              decoration: BoxDecoration(
                color: const Color(0xFFE3F2FD).withOpacity(isDark ? 0.05 : 1.0),
                borderRadius: BorderRadius.circular(25),
                border: Border.all(color: Colors.blue.withOpacity(0.1)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Row(
                    children: [
                      Icon(Icons.info_outline_rounded, color: Colors.blue, size: 20),
                      SizedBox(width: 10),
                      Text('About Civic Registry', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 15)),
                    ],
                  ),
                  const SizedBox(height: 15),
                  _aboutItem('Community-based identity and records system'),
                  _aboutItem('Public can verify if someone is registered and "clean"'),
                  _aboutItem('Private details visible only to Admin & Authorized Registrars'),
                  _aboutItem('Contribution tracking builds community accountability'),
                  _aboutItem('Apply to become an Authorized Registrar and help manage the registry'),
                ],
              ),
            ),
            const SizedBox(height: 50),
          ],
        ),
      ),
    );
  }

  Widget _tabItem(int index, String label, IconData icon) {
    bool isSelected = _activeTab == index;
    bool isDark = Theme.of(context).brightness == Brightness.dark;
    return InkWell(
      onTap: () => setState(() => _activeTab = index),
      borderRadius: BorderRadius.circular(20),
      child: Container(
        height: 80,
        decoration: BoxDecoration(
          color: isSelected ? const Color(0xFF6200EE) : (isDark ? const Color(0xFF1E1E1E) : Colors.white),
          borderRadius: BorderRadius.circular(20),
          boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.03), blurRadius: 10, offset: const Offset(0, 5))],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: isSelected ? Colors.white : Colors.grey, size: 24),
            const SizedBox(height: 8),
            Text(label, style: TextStyle(color: isSelected ? Colors.white : Colors.grey, fontWeight: FontWeight.bold, fontSize: 12)),
          ],
        ),
      ),
    );
  }

  Widget _searchSection(bool isDark) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1E1E1E) : Colors.white,
        borderRadius: BorderRadius.circular(25),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 15)],
      ),
      child: Column(
        children: [
          TextField(
            decoration: InputDecoration(
              hintText: 'Search by name or ID number...',
              hintStyle: const TextStyle(fontSize: 13, color: Colors.grey),
              prefixIcon: const Icon(Icons.search, size: 20),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(15), borderSide: BorderSide.none),
              filled: true,
              fillColor: isDark ? Colors.black.withOpacity(0.2) : Colors.grey.shade50,
            ),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF6200EE),
              foregroundColor: Colors.white,
              minimumSize: const Size(double.infinity, 55),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
              elevation: 0,
            ),
            child: const Text('Search Registry', style: TextStyle(fontWeight: FontWeight.bold)),
          ),
        ],
      ),
    );
  }

  Widget _enrollSection(bool isDark) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: isDark ? const Color(0xFF1E1E1E) : Colors.white,
        borderRadius: BorderRadius.circular(25),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 15)],
      ),
      child: const Column(
        children: [
          Text('Enrollment Form', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
          SizedBox(height: 10),
          Text('Enroll new members to the community registry.', textAlign: TextAlign.center, style: TextStyle(color: Colors.grey, fontSize: 12)),
          SizedBox(height: 20),
          // Forms could go here
        ],
      ),
    );
  }

  Widget _aboutItem(String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('• ', style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold)),
          Expanded(child: Text(text, style: TextStyle(color: Colors.grey.shade700, fontSize: 11, height: 1.4))),
        ],
      ),
    );
  }
}

class JobMarketplaceScreen extends StatefulWidget {
  final UserData user;
  const JobMarketplaceScreen({super.key, required this.user});

  @override
  State<JobMarketplaceScreen> createState() => _JobMarketplaceScreenState();
}

class _JobMarketplaceScreenState extends State<JobMarketplaceScreen> {
  int _activeTab = 0; // 0: Find Jobs, 1: My Jobs, 2: Claimed

  @override
  Widget build(BuildContext context) {
    bool isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0A0A0A) : const Color(0xFFF5F7FB),
      appBar: AppBar(
        title: const Text('Job Marketplace', style: TextStyle(fontWeight: FontWeight.bold)),
        centerTitle: true,
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            // Top Header Card
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(25),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFFFF5722), Color(0xFFE64A19)],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(25),
                boxShadow: [BoxShadow(color: const Color(0xFFFF5722).withOpacity(0.3), blurRadius: 15, offset: const Offset(0, 8))],
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('Job Marketplace', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 24)),
                        Text('Find work or post jobs', style: TextStyle(color: Colors.white.withOpacity(0.8), fontSize: 13)),
                      ],
                    ),
                  ),
                  Column(
                    children: [
                      _actionButton(Icons.person_add_alt_1_rounded, 'Apply'),
                      const SizedBox(height: 10),
                      _actionButton(Icons.business_center_rounded, 'Post'),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 25),

            // Tabs Bar
            Container(
              height: 55,
              padding: const EdgeInsets.all(5),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1E1E1E) : Colors.white,
                borderRadius: BorderRadius.circular(15),
                boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.03), blurRadius: 10)],
              ),
              child: Row(
                children: [
                  Expanded(child: _tabButton(0, 'Find Jobs')),
                  Expanded(child: _tabButton(1, 'My Jobs')),
                  Expanded(child: _tabButton(2, 'Claimed')),
                ],
              ),
            ),
            const SizedBox(height: 25),

            // Content Area
            Container(
              width: double.infinity,
              padding: const EdgeInsets.symmetric(vertical: 60),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF1E1E1E) : Colors.white,
                borderRadius: BorderRadius.circular(25),
                boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.03), blurRadius: 15)],
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.business_center_outlined, size: 60, color: Colors.grey.shade400),
                  const SizedBox(height: 15),
                  Text('No jobs available', style: TextStyle(color: Colors.grey.shade500, fontWeight: FontWeight.w500, fontSize: 14)),
                ],
              ),
            ),
            const SizedBox(height: 50),
          ],
        ),
      ),
    );
  }

  Widget _actionButton(IconData icon, String label) {
    return Container(
      width: 90,
      height: 38,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.05), blurRadius: 5)],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, size: 16, color: const Color(0xFFE64A19)),
          const SizedBox(width: 8),
          Text(label, style: const TextStyle(color: Color(0xFFE64A19), fontWeight: FontWeight.bold, fontSize: 11)),
        ],
      ),
    );
  }

  Widget _tabButton(int index, String label) {
    bool isSelected = _activeTab == index;
    return GestureDetector(
      onTap: () => setState(() => _activeTab = index),
      child: Container(
        alignment: Alignment.center,
        decoration: BoxDecoration(
          gradient: isSelected 
              ? const LinearGradient(colors: [Color(0xFFFF5722), Color(0xFFE64A19)]) 
              : null,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Text(
          label,
          style: TextStyle(
            color: isSelected ? Colors.white : Colors.grey.shade600,
            fontWeight: FontWeight.bold,
            fontSize: 12,
          ),
        ),
      ),
    );
  }
}

class MediaHubScreen extends StatefulWidget {
  final UserData user;
  final List<MediaPost> allMedia;
  final Function(MediaPost) onPost;

  const MediaHubScreen({super.key, required this.user, required this.allMedia, required this.onPost});

  @override
  State<MediaHubScreen> createState() => _MediaHubScreenState();
}

class _MediaHubScreenState extends State<MediaHubScreen> {
  final _captionController = TextEditingController();

  Future<void> _pickAndPost() async {
    final picker = ImagePicker();
    final video = await picker.pickVideo(source: ImageSource.gallery);
    
    if (video == null) return;

    // In a real app, we would upload the video to Supabase Storage first.
    // For now, we use the local path as the "URL" for testing.
    final post = MediaPost(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      userEmail: widget.user.email,
      username: widget.user.username,
      videoUrl: video.path,
      caption: _captionController.text,
      timestamp: DateTime.now(),
    );

    widget.onPost(post);
    _captionController.clear();
    if (mounted) Navigator.pop(context);
  }

  void _showPostDialog() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (c) => Container(
        padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom, left: 20, right: 20, top: 20),
        decoration: BoxDecoration(
          color: Theme.of(context).scaffoldBackgroundColor,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(25)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('Share a Video', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 15),
            TextField(
              controller: _captionController,
              decoration: const InputDecoration(hintText: 'Write a caption...', border: OutlineInputBorder()),
              maxLines: 3,
            ),
            const SizedBox(height: 20),
            ElevatedButton.icon(
              onPressed: _pickAndPost,
              icon: const Icon(Icons.video_library_rounded),
              label: const Text('Select Video & Post'),
              style: ElevatedButton.styleFrom(
                minimumSize: const Size(double.infinity, 50),
                backgroundColor: const Color(0xFFE64A19),
                foregroundColor: Colors.white,
              ),
            ),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('MEDIA HUB', style: TextStyle(fontWeight: FontWeight.w900, letterSpacing: 1.5)),
        centerTitle: true,
        actions: [
          IconButton(onPressed: _showPostDialog, icon: const Icon(Icons.add_box_outlined, size: 28)),
        ],
      ),
      body: widget.allMedia.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(Icons.video_collection_outlined, size: 60, color: Colors.grey.withOpacity(0.5)),
                  const SizedBox(height: 15),
                  const Text('No videos shared yet', style: TextStyle(color: Colors.grey)),
                ],
              ),
            )
          : ListView.builder(
              padding: const EdgeInsets.fromLTRB(0, 0, 0, 150),
              itemCount: widget.allMedia.length,
              itemBuilder: (context, index) {
                return VideoPostWidget(post: widget.allMedia[index]);
              },
            ),
    );
  }
}

class VideoPostWidget extends StatefulWidget {
  final MediaPost post;
  const VideoPostWidget({super.key, required this.post});

  @override
  State<VideoPostWidget> createState() => _VideoPostWidgetState();
}

class _VideoPostWidgetState extends State<VideoPostWidget> {
  late VideoPlayerController _controller;
  bool _isInitialized = false;

  @override
  void initState() {
    super.initState();
    if (widget.post.videoUrl.startsWith('http')) {
      _controller = VideoPlayerController.networkUrl(Uri.parse(widget.post.videoUrl));
    } else {
      _controller = VideoPlayerController.file(File(widget.post.videoUrl));
    }

    _controller.initialize().then((_) {
      if (mounted) {
        setState(() {
          _isInitialized = true;
          _controller.setLooping(true);
        });
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor,
        border: Border(top: BorderSide(color: Colors.grey.withOpacity(0.1)), bottom: BorderSide(color: Colors.grey.withOpacity(0.1))),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.all(12),
            child: Row(
              children: [
                const CircleAvatar(radius: 18, child: Icon(Icons.person, size: 20)),
                const SizedBox(width: 12),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(widget.post.username, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
                    Text(widget.post.userEmail, style: const TextStyle(color: Colors.grey, fontSize: 11)),
                  ],
                ),
                const Spacer(),
                const Icon(Icons.more_vert, size: 20),
              ],
            ),
          ),
          GestureDetector(
            onTap: () {
              setState(() {
                _controller.value.isPlaying ? _controller.pause() : _controller.play();
              });
            },
            child: AspectRatio(
              aspectRatio: _isInitialized ? _controller.value.aspectRatio : 16 / 9,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  if (_isInitialized) VideoPlayer(_controller) else const Center(child: CircularProgressIndicator()),
                  if (_isInitialized && !_controller.value.isPlaying)
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(color: Colors.black.withOpacity(0.4), shape: BoxShape.circle),
                      child: const Icon(Icons.play_arrow_rounded, color: Colors.white, size: 40),
                    ),
                ],
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Icon(Icons.favorite_border_rounded, size: 26, color: Theme.of(context).colorScheme.primary),
                    const SizedBox(width: 15),
                    const Icon(Icons.chat_bubble_outline_rounded, size: 24),
                    const SizedBox(width: 15),
                    const Icon(Icons.send_rounded, size: 24),
                    const Spacer(),
                    const Icon(Icons.bookmark_border_rounded, size: 26),
                  ],
                ),
                const SizedBox(height: 10),
                Text('${widget.post.likes} likes', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                const SizedBox(height: 5),
                RichText(
                  text: TextSpan(
                    style: TextStyle(color: Theme.of(context).brightness == Brightness.dark ? Colors.white : Colors.black87, fontSize: 13),
                    children: [
                      TextSpan(text: widget.post.username, style: const TextStyle(fontWeight: FontWeight.bold)),
                      const TextSpan(text: ' '),
                      TextSpan(text: widget.post.caption),
                    ],
                  ),
                ),
                const SizedBox(height: 5),
                Text(_timeAgo(widget.post.timestamp), style: const TextStyle(color: Colors.grey, fontSize: 10)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  String _timeAgo(DateTime t) {
    final diff = DateTime.now().difference(t);
    if (diff.inMinutes < 1) return 'just now';
    if (diff.inMinutes < 60) return '${diff.inMinutes}m ago';
    if (diff.inHours < 24) return '${diff.inHours}h ago';
    return '${diff.inDays}d ago';
  }
}

