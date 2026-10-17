part of 'main.dart';

/// Every place an advisor can take the user, plus the lookups that let an
/// advisor answer with real data from the app ("what's on file for Jane Doe?").
///
/// Registered once by [MainScreen]; advisor chats only add their own small
/// tool set on top (see [NgmyAiAppBridge]).
extension _NgmyAiAppPlaces on _MainScreenState {
  void _registerAiAppPlaces() {
    Future<String?> goTab(BuildContext ctx, int tab, String name) async {
      final nav = ngmyRootNavigatorKey.currentState;
      if (nav != null) nav.popUntil((r) => r.isFirst);
      _goToMainTab(tab);
      return 'Took you to $name.';
    }

    Future<String?> push(BuildContext ctx, Widget page, String routeName, String done) async {
      unawaited(NgmyNavigator.push(ctx, page, routeName: routeName));
      return done;
    }

    final u = widget.user;
    NgmyAiAppBridge.registerAppWide(
      context: () => mounted ? context : null,
      places: {
        'home': NgmyAiPlace(description: 'Home screen', open: (ctx, _) => goTab(ctx, 0, 'Home')),
        'tools': NgmyAiPlace(
          description: 'Tools tab — Business Card Creator, Menu Studio, Business Essentials',
          open: (ctx, _) => goTab(ctx, 1, 'Tools'),
        ),
        'slides': NgmyAiPlace(description: 'NGMY Slides tab — slide shows and stories', open: (ctx, _) => goTab(ctx, 2, 'Slides')),
        'services': NgmyAiPlace(
          description: 'Services tab — Civic Registry, NGMY Store, Help + Insurance, Document Scanner',
          open: (ctx, _) => goTab(ctx, 3, 'Services'),
        ),
        'media': NgmyAiPlace(description: 'Media tab — posts, videos, people to follow', open: (ctx, _) => goTab(ctx, 4, 'Media')),
        'studio': NgmyAiPlace(
          description: 'Studio tab — Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock',
          open: (ctx, _) => goTab(ctx, 5, 'Studio'),
        ),
        'profile': NgmyAiPlace(description: 'Their profile, wallet, settings and theme', open: (ctx, _) => goTab(ctx, 6, 'your Profile')),
        'civic_registry': NgmyAiPlace(
          description: 'Civic Registry — members, enrollment, rankings, contributions',
          open: (ctx, _) async {
            await civicRegistryWarmUnlockCache();
            if (!ctx.mounted) return null;
            return push(
              ctx,
              CivicRegistryScreen(
                user: u,
                allUsers: widget.allUsers,
                allTransactions: widget.allTransactions,
                onAddTransaction: widget.onAddTransaction,
                onDataChanged: widget.onDataChanged,
                config: widget.config,
              ),
              'CivicRegistryScreen',
              'Opened Civic Registry.',
            );
          },
        ),
        'civic_member': NgmyAiPlace(
          description: "Open one Civic Registry member's ID card",
          args: 'query = name, registry ID, phone or email',
          open: (ctx, args) async {
            final q = (args['query'] ?? args['registryId'] ?? args['name'] ?? '').trim();
            await _aiEnsureCivicLoaded();
            final found = _aiCivicSearch(q);
            if (found.error != null) return found.error;
            if (found.rows.isEmpty) return 'No Civic Registry member matches "$q".';
            final m = found.rows.first;
            unawaited(showNgmyCivicRegistryIdCardDialog(ctx, record: m));
            return 'Opened ${(m['fullName'] ?? 'the member').toString()}\'s ID card.';
          },
        ),
        'civic_voting': NgmyAiPlace(
          description: 'Civic voting — open polls, cast a vote, results',
          open: (ctx, _) => push(
            ctx,
            NgmyCivicVotingScreen(
              config: widget.config,
              userEmail: u.email,
              userPhone: u.phone,
              memberState: u.state,
              isAdmin: u.isAdmin,
            ),
            'NgmyCivicVotingScreen',
            'Opened Civic voting.',
          ),
        ),
        'civic_groups': NgmyAiPlace(
          description: 'Civic user groups — join or manage groups',
          open: (ctx, _) async {
            unawaited(openNgmyCivicUserGroupsHub(ctx, userEmail: u.email, userName: u.username, isAdmin: u.isAdmin));
            return 'Opened Civic groups.';
          },
        ),
        'store': NgmyAiPlace(
          description: 'NGMY Store — shop items from member stores',
          open: (ctx, _) => push(
            ctx,
            NgmyStoreScreen(
              user: u,
              allUsers: widget.allUsers,
              config: widget.config,
              onAddTransaction: widget.onAddTransaction,
              onDataChanged: widget.onDataChanged,
            ),
            'NgmyStoreScreen',
            'Opened NGMY Store.',
          ),
        ),
        'help_center': NgmyAiPlace(
          description: 'Help + Insurance — house workers, home help, insurance',
          open: (ctx, _) => push(
            ctx,
            NgmyHelpCenterScreen(
              configMap: widget.config.helpCenterHub,
              clientName: u.username.trim().isNotEmpty ? u.username.trim() : u.email,
              clientEmail: u.email,
              clientPhone: u.phone,
              isAdmin: u.isAdmin,
              appConfig: widget.config,
              user: u,
              onCharge: (amount, description) async => ngmyChargeUserWallet(
                user: u,
                allUsers: widget.allUsers,
                amount: amount,
                description: description,
                onAddTransaction: widget.onAddTransaction,
                transactions: widget.allTransactions,
              ),
              onDataChanged: widget.onDataChanged,
              onPersistConfig: () async {
                try {
                  final prefs = await SharedPreferences.getInstance();
                  await prefs.setString('app_config', jsonEncode(widget.config.toJson()));
                } catch (_) {}
                return true;
              },
            ),
            'NgmyHelpCenterScreen',
            'Opened Help + Insurance.',
          ),
        ),
        'business_cards': NgmyAiPlace(
          description: 'Business Card Creator${u.isAdmin ? ' (admin: also the Vote Ad Studio)' : ''}',
          open: (ctx, _) async {
            showNgmyBusinessCardStudioDialog(ctx, userEmail: u.email, isAdmin: u.isAdmin);
            return 'Opened Business Card Creator.';
          },
        ),
        'menu_studio': NgmyAiPlace(
          description: 'Menu Studio — restaurant menus and Bio link pages',
          open: (ctx, _) async {
            unawaited(showNgmyMenuStudioDialog(ctx, userEmail: u.email, isAdmin: u.isAdmin));
            return 'Opened Menu Studio.';
          },
        ),
        'business_essentials': NgmyAiPlace(
          description: 'Business Essentials — invoices, receipts, flyers and other business papers',
          open: (ctx, _) async {
            unawaited(showNgmyBusinessEssentialsHub(ctx, userEmail: u.email));
            return 'Opened Business Essentials.';
          },
        ),
      },
      lookups: {
        'civic_member': (
          description: 'Civic Registry member details by name, registry ID, phone or email (fields: query)',
          run: (args) async {
            final q = (args['query'] ?? args['name'] ?? '').trim();
            await _aiEnsureCivicLoaded();
            final found = _aiCivicSearch(q);
            if (found.error != null) return NgmyAiLookupResult(found.error!);
            if (found.rows.isEmpty) {
              return NgmyAiLookupResult('I checked Civic Registry and found no member matching "$q".', goTo: const [
                {'tool': 'civic_registry', 'label': 'Open Civic Registry'},
              ]);
            }
            final buf = StringBuffer(found.rows.length == 1
                ? 'Here is what Civic Registry has:\n'
                : 'I found ${found.rows.length} members matching "$q":\n');
            for (final m in found.rows) {
              buf.writeln();
              buf.writeln(_aiCivicSummary(m));
            }
            return NgmyAiLookupResult(buf.toString().trim(), goTo: [
              for (final m in found.rows.take(3))
                {
                  'tool': 'civic_member',
                  'query': (m['registryId'] ?? m['email'] ?? '').toString(),
                  'label': 'Open ${_aiFirstName(m)}\'s ID',
                },
              {'tool': 'civic_registry', 'label': 'Open Civic Registry'},
            ]);
          },
        ),
        'my_account': (
          description: "The user's own account: balance, points, Civic Registry status, store access",
          run: (_) async {
            final enrolled = u.isEnrolledInRegistry || NgmyCivicRegistryMembers.isEnrolled(widget.config, u.email);
            final lines = <String>[
              'Balance: \$${u.accountBalance.toStringAsFixed(2)}',
              'Points: ${u.points}',
              'Civic Registry: ${enrolled ? 'enrolled${(u.registryId ?? '').trim().isEmpty ? '' : ' (ID ${u.registryId})'}' : 'not enrolled yet'}',
              if (u.state.trim().isNotEmpty) 'State: ${u.state}',
              if (u.isAuthorizedRegistrar) 'Role: authorized registrar',
              if (u.canSellOnStore) 'NGMY Store: you can sell',
            ];
            return NgmyAiLookupResult('Here is your account:\n${lines.join('\n')}', goTo: const [
              {'tool': 'profile', 'label': 'Open my Profile'},
            ]);
          },
        ),
      },
    );
  }

  Future<void> _aiEnsureCivicLoaded() async {
    if (NgmyCivicRegistryMembers.listFrom(widget.config).isNotEmpty) return;
    try {
      await ngmyHydrateCivicRegistryMembersFromAllBackups(widget.config, widget.allUsers);
    } catch (e) {
      debugPrint('[ai-places] civic hydrate: $e');
    }
  }

  /// Search Civic Registry the way the signed-in user is allowed to see it:
  /// admins and registry kings see everyone, registrars see their own state,
  /// everyone else only their own record.
  ({List<Map<String, dynamic>> rows, String? error}) _aiCivicSearch(String query) {
    final u = widget.user;
    final q = query.trim().toLowerCase();
    if (q.isEmpty) return (rows: const [], error: 'Tell me the member\'s name, registry ID, phone or email.');
    final all = NgmyCivicRegistryMembers.listFrom(widget.config);
    final seeAll = u.isAdmin || u.isCivicRegistryKing || u.isCivicRegistryAdmin;
    final registrarState = u.isAuthorizedRegistrar
        ? NgmyCivicRegistryStats.registrarStateForUser(
            email: u.email,
            userState: u.state,
            applications: widget.config.civicRegistrarApplications,
          ).trim().toLowerCase()
        : '';
    bool visible(Map<String, dynamic> m) {
      if (seeAll) return true;
      if (registrarState.isNotEmpty && (m['state'] ?? '').toString().trim().toLowerCase() == registrarState) return true;
      return NgmyCivicRegistryMembers.emailKey((m['email'] ?? '').toString()) == NgmyCivicRegistryMembers.emailKey(u.email);
    }

    final digits = q.replaceAll(RegExp(r'\D'), '');
    int score(Map<String, dynamic> m) {
      final name = (m['fullName'] ?? '').toString().toLowerCase();
      final user = (m['username'] ?? '').toString().toLowerCase();
      final rid = (m['registryId'] ?? '').toString().toLowerCase();
      final email = (m['email'] ?? '').toString().toLowerCase();
      final phone = (m['phone'] ?? '').toString().replaceAll(RegExp(r'\D'), '');
      final nick = (m['nicknames'] ?? '').toString().toLowerCase();
      if (rid == q || email == q || name == q) return 100;
      if (digits.length >= 7 && phone.endsWith(digits)) return 95;
      if (name.startsWith(q) || user == q) return 80;
      final words = q.split(RegExp(r'\s+')).where((w) => w.isNotEmpty);
      if (words.every((w) => name.contains(w))) return 60;
      if (nick.contains(q) || user.contains(q) || email.contains(q) || rid.contains(q)) return 40;
      return 0;
    }

    final scored = <(int, Map<String, dynamic>)>[];
    var hidden = 0;
    for (final m in all) {
      final s = score(m);
      if (s == 0) continue;
      if (!visible(m)) {
        hidden++;
        continue;
      }
      scored.add((s, m));
    }
    scored.sort((a, b) => b.$1.compareTo(a.$1));
    if (scored.isEmpty && hidden > 0) {
      return (
        rows: const [],
        error: registrarState.isNotEmpty
            ? 'That member is outside the state you serve, so I can\'t show their record.'
            : 'Only registrars can look up other members.',
      );
    }
    return (rows: [for (final e in scored.take(5)) e.$2], error: null);
  }

  String _aiFirstName(Map<String, dynamic> m) {
    final n = (m['fullName'] ?? '').toString().trim();
    return n.isEmpty ? 'member' : n.split(RegExp(r'\s+')).first;
  }

  String _aiCivicSummary(Map<String, dynamic> m) {
    String v(String k) => (m[k] ?? '').toString().trim();
    String date(String k) {
      final d = DateTime.tryParse(v(k));
      if (d == null) return '';
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      final l = d.toLocal();
      return '${months[l.month - 1]} ${l.day}, ${l.year}';
    }

    final email = v('email');
    final rid = v('registryId');
    final status = NgmyCivicRegistryMembers.isDeceased(widget.config, email: email, registryId: rid)
        ? 'Deceased'
        : NgmyCivicRegistryMembers.isRemoved(widget.config, email: email, registryId: rid)
            ? 'Removed'
            : 'Active';
    final place = [v('city'), v('state')].where((s) => s.isNotEmpty).join(', ');
    final lines = <String>[
      '• ${v('fullName').isEmpty ? 'Unnamed member' : v('fullName')}',
      if (rid.isNotEmpty) '  Registry ID: $rid',
      '  Status: $status',
      if (place.isNotEmpty) '  Lives in: $place',
      if (v('phone').isNotEmpty) '  Phone: ${v('phone')}',
      if (email.isNotEmpty && !email.endsWith('@guest.ngmy')) '  Email: $email',
      if (v('dob').isNotEmpty) '  Date of birth: ${v('dob')}',
      if (v('homeAddress').isNotEmpty) '  Address: ${v('homeAddress')}',
      if (date('enrolledAt').isNotEmpty) '  Enrolled: ${date('enrolledAt')}',
      '  Family members: ${NgmyCivicRegistryMembers.familySizeOf(m)}',
      if (v('helps').isNotEmpty || v('missed').isNotEmpty) '  Helps: ${v('helps').isEmpty ? '0' : v('helps')} · Missed: ${v('missed').isEmpty ? '0' : v('missed')}',
    ];
    return lines.join('\n');
  }
}
