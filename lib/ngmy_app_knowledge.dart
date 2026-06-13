/// Live NGMY app knowledge for the AI helper — rebuilt whenever the user sends a message.
class NgmyAppKnowledge {
  static String build({
    required Map<String, dynamic> viewer,
    required Map<String, dynamic> config,
    required List<Map<String, dynamic>> transactions,
    required List<Map<String, dynamic>> investmentPlans,
    required List<Map<String, dynamic>> announcements,
    required int mediaPostCount,
    required int userCount,
    DateTime? generatedAt,
  }) {
    final now = generatedAt ?? DateTime.now();
    final isAdmin = viewer['isAdmin'] == true;
    final email = (viewer['email'] ?? '').toString();
    final username = (viewer['username'] ?? 'User').toString();
    final balance = (viewer['accountBalance'] ?? 0.0);
    final buf = StringBuffer()
      ..writeln('LIVE NGMY APP DATABASE (auto-updated ${now.toUtc().toIso8601String()}):')
      ..writeln('Use ONLY this section for current menus, counts, and wallet state. If something is not listed, say you do not have live data for it right now.')
      ..writeln()
      ..writeln('=== Main app menus (all users) ===')
      ..writeln('- Home: balance, clock-in, quick actions, games, loans, civic registry links')
      ..writeln('- Media Hub: posts, stories, likes, comments, profiles')
      ..writeln('- NGMY Store: listings, cart, orders, seller tools')
      ..writeln('- News & NGMY Helper: announcements + AI chat (this screen)')
      ..writeln('- Profile: settings, wallet, transaction history, theme, logout')
      ..writeln('- Invest: investment plans, purchase, ROI / clock-in earnings')
      ..writeln('- Jobs marketplace, worksheets, family tree, QR tools, fun games (from Home)')
      ..writeln();

    if (isAdmin) {
      buf
        ..writeln('=== Admin Dashboard menus (this user is admin) ===')
        ..writeln('- Admin Home: overview & shortcuts')
        ..writeln('- Users: search, balances, force logout, worker/helper approval')
        ..writeln('- Invest: create/edit investment plans for all users')
        ..writeln('- Legal: terms, privacy, popups')
        ..writeln('- Wallet: approve/reject deposits & withdrawals, payment tags (Cash App / Bitcoin)')
        ..writeln('- Media: moderate posts, delivery tools')
        ..writeln('- Store: listings, orders, inquiries')
        ..writeln('- NGMY AI (Management Menus): API key, Helper limits, app logo')
        ..writeln();
    }

    buf
      ..writeln('=== Viewer ===')
      ..writeln('Username: $username | Email: $email | Admin: $isAdmin')
      ..writeln('Balance (stored): \$${balance is num ? balance.toStringAsFixed(2) : balance}')
      ..writeln('Registered users (cloud/local): $userCount | Media posts: $mediaPostCount')
      ..writeln();

    final pendingDeposits = _count(transactions, type: 0, status: 0);
    final pendingWithdrawals = _count(transactions, type: 1, status: 0);
    final approvedDeposits = _count(transactions, type: 0, status: 1);
    final approvedWithdrawals = _count(transactions, type: 1, status: 1);
    buf
      ..writeln('=== Wallet activity (sample from live list, max ${transactions.length} rows) ===')
      ..writeln('Pending deposits: $pendingDeposits | Pending withdrawals: $pendingWithdrawals')
      ..writeln('Approved deposits (in sample): $approvedDeposits | Approved withdrawals (in sample): $approvedWithdrawals');

    if (isAdmin && (pendingDeposits > 0 || pendingWithdrawals > 0)) {
      buf.writeln('Admin action needed: open Admin Dashboard → Wallet to approve or reject.');
      for (final t in transactions) {
        final type = _int(t['type']);
        final status = _int(t['status']);
        if (status != 0) continue;
        if (type != 0 && type != 1) continue;
        final kind = type == 0 ? 'deposit' : 'withdrawal';
        final amt = t['amount'];
        final who = (t['userEmail'] ?? t['user_email'] ?? '').toString();
        buf.writeln('- PENDING $kind: \$${amt} for $who (id ${t['id']})');
      }
    }
    buf.writeln();

    if (investmentPlans.isNotEmpty) {
      buf.writeln('=== Investment plans (live) ===');
      for (final p in investmentPlans.take(12)) {
        final name = (p['name'] ?? p['title'] ?? 'Plan').toString();
        final price = p['price'] ?? p['amount'];
        buf.writeln('- $name: \$${price}');
      }
      buf.writeln();
    }

    final cashTag = (config['officialCashApp'] ?? '').toString().trim();
    final btc = (config['officialBitcoin'] ?? '').toString().trim();
    if (cashTag.isNotEmpty || btc.isNotEmpty) {
      buf.writeln('=== Official payment info ===');
      if (cashTag.isNotEmpty) buf.writeln('Cash App: $cashTag');
      if (btc.isNotEmpty) buf.writeln('Bitcoin: $btc');
      buf.writeln();
    }

    if (announcements.isNotEmpty) {
      buf.writeln('=== Recent announcements ===');
      for (final a in announcements.take(5)) {
        final msg = (a['message'] ?? a['title'] ?? '').toString();
        if (msg.isEmpty) continue;
        final short = msg.length > 120 ? '${msg.substring(0, 120)}…' : msg;
        buf.writeln('- $short');
      }
      buf.writeln();
    }

    final newsClosed = config['ngmyChatClosed'] == true;
    buf.writeln(
      'Community News feed ${newsClosed ? "CLOSED — regular users cannot post new community news" : "OPEN — users can post community news"}.',
    );
    buf.writeln('NGMY Helper AI chat is ALWAYS available — news open/closed does not affect AI assistance.');
    return buf.toString().trim();
  }

  static int _count(List<Map<String, dynamic>> list, {required int type, required int status}) {
    var n = 0;
    for (final t in list) {
      if (_int(t['type']) == type && _int(t['status']) == status) n++;
    }
    return n;
  }

  static int _int(dynamic v) {
    if (v is int) return v;
    if (v is num) return v.toInt();
    return int.tryParse(v?.toString() ?? '') ?? -1;
  }
}
