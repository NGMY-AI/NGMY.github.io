import 'package:flutter/material.dart';



import 'ngmy_civic_registry_stats.dart';

import 'ngmy_civic_state_switches.dart';



class NgmyCivicRegistryUserRow {

  final String email;

  final String username;

  final String state;

  final bool isAuthorizedRegistrar;

  final bool isCivicRegistryKing;

  final bool isCivicRegistryAdmin;

  final int stateSwitchesUsed;

  final String anchorState;

  final bool isEnrolledInRegistry;



  const NgmyCivicRegistryUserRow({

    required this.email,

    required this.username,

    required this.state,

    required this.isAuthorizedRegistrar,

    required this.isCivicRegistryKing,

    required this.isCivicRegistryAdmin,

    required this.stateSwitchesUsed,

    required this.anchorState,

    this.isEnrolledInRegistry = false,

  });

}



void showNgmyResetCivicStateSwitchesSheet(

  BuildContext context, {

  required bool isDark,

  required List<NgmyCivicRegistryUserRow> users,

  required void Function(NgmyCivicRegistryUserRow user) onReset,

}) {

  showModalBottomSheet<void>(

    context: context,

    isScrollControlled: true,

    backgroundColor: Colors.transparent,

    builder: (ctx) => _ResetCivicStateSwitchesSheet(

      isDark: isDark,

      users: users,

      onReset: onReset,

    ),

  );

}



class _ResetCivicStateSwitchesSheet extends StatefulWidget {

  final bool isDark;

  final List<NgmyCivicRegistryUserRow> users;

  final void Function(NgmyCivicRegistryUserRow user) onReset;



  const _ResetCivicStateSwitchesSheet({

    required this.isDark,

    required this.users,

    required this.onReset,

  });



  @override

  State<_ResetCivicStateSwitchesSheet> createState() => _ResetCivicStateSwitchesSheetState();

}



class _ResetCivicStateSwitchesSheetState extends State<_ResetCivicStateSwitchesSheet> {

  final _q = TextEditingController();



  @override

  void dispose() {

    _q.dispose();

    super.dispose();

  }



  @override

  Widget build(BuildContext context) {

    final isDark = widget.isDark;

    final query = _q.text.trim().toLowerCase();

    final filtered = widget.users.where((u) {

      if (query.isEmpty) return true;

      return u.email.toLowerCase().contains(query) ||

          u.username.toLowerCase().contains(query);

    }).toList()

      ..sort((a, b) => b.stateSwitchesUsed.compareTo(a.stateSwitchesUsed));



    return Padding(

      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),

      child: Align(

        alignment: Alignment.bottomCenter,

        child: Container(

          constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.88),

          margin: const EdgeInsets.fromLTRB(14, 14, 14, 18),

          padding: const EdgeInsets.fromLTRB(18, 12, 18, 18),

          decoration: BoxDecoration(

            color: isDark ? const Color(0xFF0F111A) : Colors.white,

            borderRadius: BorderRadius.circular(26),

            border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),

          ),

          child: Column(

            children: [

              Container(

                width: 40,

                height: 4,

                decoration: BoxDecoration(

                  color: Colors.grey.withValues(alpha: 0.35),

                  borderRadius: BorderRadius.circular(10),

                ),

              ),

              const SizedBox(height: 12),

              const Text(

                'Reset State Change Limit',

                style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18),

              ),

              const SizedBox(height: 6),

              Text(

                'Users get ${NgmyCivicStateSwitches.maxSwitches} state changes after their first state. Reset restores all ${NgmyCivicStateSwitches.maxSwitches}.',

                style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54, height: 1.35),

              ),

              const SizedBox(height: 12),

              TextField(

                controller: _q,

                onChanged: (_) => setState(() {}),

                decoration: InputDecoration(

                  hintText: 'Search by name or email…',

                  prefixIcon: const Icon(Icons.search),

                  filled: true,

                  fillColor: isDark ? const Color(0xFF1C1F2E) : const Color(0xFFF8FAFC),

                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),

                ),

              ),

              const SizedBox(height: 10),

              Expanded(

                child: filtered.isEmpty

                    ? Center(

                        child: Text(

                          'No users found.',

                          style: TextStyle(color: isDark ? Colors.white54 : Colors.black54),

                        ),

                      )

                    : ListView.builder(

                        itemCount: filtered.length,

                        itemBuilder: (_, i) {

                          final u = filtered[i];

                          final left = NgmyCivicStateSwitches.remainingSwitches(

                            isAdmin: false,

                            isCivicRegistryAdmin: u.isCivicRegistryAdmin,

                            switchesUsed: u.stateSwitchesUsed,

                          );

                          return ListTile(

                            title: Text(u.username, style: const TextStyle(fontWeight: FontWeight.w800)),

                            subtitle: Text(

                              '${u.email}\nAnchor: ${u.anchorState.isEmpty ? '—' : u.anchorState} · Used ${u.stateSwitchesUsed}/${NgmyCivicStateSwitches.maxSwitches} · Left $left',

                              style: const TextStyle(fontSize: 11, height: 1.3),

                            ),

                            isThreeLine: true,

                            trailing: TextButton(

                              onPressed: u.stateSwitchesUsed == 0 && !u.isCivicRegistryAdmin

                                  ? null

                                  : () {

                                      widget.onReset(u);

                                      setState(() {});

                                    },

                              child: const Text('Reset'),

                            ),

                          );

                        },

                      ),

              ),

            ],

          ),

        ),

      ),

    );

  }

}



void showNgmyManageRegistryByStateSheet(

  BuildContext context, {

  required bool isDark,

  required List<String> usStates,

  required List<Map<String, dynamic>> applications,

  required List<NgmyCivicRegistryUserRow> users,

  required void Function(String email, bool isKing) onToggleKing,

  required void Function(String email, bool isRegistryAdmin) onToggleRegistryAdmin,

  List<NgmyCivicRegistryUserRow> Function()? readUsers,

}) {

  showModalBottomSheet<void>(

    context: context,

    isScrollControlled: true,

    backgroundColor: Colors.transparent,

    builder: (ctx) => _ManageRegistryByStateSheet(

      isDark: isDark,

      usStates: usStates,

      applications: applications,

      users: users,

      readUsers: readUsers,

      onToggleKing: onToggleKing,

      onToggleRegistryAdmin: onToggleRegistryAdmin,

    ),

  );

}



class _ManageRegistryByStateSheet extends StatefulWidget {

  final bool isDark;

  final List<String> usStates;

  final List<Map<String, dynamic>> applications;

  final List<NgmyCivicRegistryUserRow> users;

  final List<NgmyCivicRegistryUserRow> Function()? readUsers;

  final void Function(String email, bool isKing) onToggleKing;

  final void Function(String email, bool isRegistryAdmin) onToggleRegistryAdmin;



  const _ManageRegistryByStateSheet({

    required this.isDark,

    required this.usStates,

    required this.applications,

    required this.users,

    this.readUsers,

    required this.onToggleKing,

    required this.onToggleRegistryAdmin,

  });



  @override

  State<_ManageRegistryByStateSheet> createState() => _ManageRegistryByStateSheetState();

}



class _ManageRegistryByStateSheetState extends State<_ManageRegistryByStateSheet> {

  late String _selected;



  @override

  void initState() {

    super.initState();

    _selected = widget.usStates.isNotEmpty ? widget.usStates.first : '';

  }



  List<NgmyCivicRegistryUserRow> get _liveUsers =>

      widget.readUsers != null ? widget.readUsers!() : widget.users;



  @override

  Widget build(BuildContext context) {

    final isDark = widget.isDark;

    final liveUsers = _liveUsers;

    final enrolledMembers = liveUsers

        .where((u) =>

            u.isEnrolledInRegistry &&

            u.state.trim().toLowerCase() == _selected.trim().toLowerCase())

        .length;



    final listed = NgmyCivicRegistryStats.registrarsListedForState(

      state: _selected,

      applications: widget.applications,

      users: liveUsers,

    );

    final registrars = listed.map((u) => u as NgmyCivicRegistryUserRow).toList();



    final activeSlots = NgmyCivicRegistryStats.activeRegistrarsInState(

      state: _selected,

      applications: widget.applications,

      users: liveUsers,

    );

    final slotsLeft = NgmyCivicRegistryStats.slotsRemaining(

      state: _selected,

      applications: widget.applications,

      users: liveUsers,

    );



    return Padding(

      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),

      child: Align(

        alignment: Alignment.bottomCenter,

        child: Container(

          constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.92),

          margin: const EdgeInsets.fromLTRB(14, 14, 14, 18),

          padding: const EdgeInsets.fromLTRB(18, 12, 18, 18),

          decoration: BoxDecoration(

            color: isDark ? const Color(0xFF0F111A) : Colors.white,

            borderRadius: BorderRadius.circular(26),

            border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),

          ),

          child: Column(

            crossAxisAlignment: CrossAxisAlignment.stretch,

            children: [

              const Text(

                'Manage Registry by State',

                style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18),

              ),

              const SizedBox(height: 6),

              Text(

                'Tap a registrar to grant King (state approvals) or Civic Registry Admin (all states, no slot limit).',

                style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54, height: 1.35),

              ),

              const SizedBox(height: 10),

              DropdownButtonFormField<String>(

                value: widget.usStates.contains(_selected) ? _selected : widget.usStates.first,

                decoration: InputDecoration(

                  labelText: 'Select state',

                  filled: true,

                  fillColor: isDark ? const Color(0xFF1C1F2E) : const Color(0xFFF8FAFC),

                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),

                ),

                items: widget.usStates.map((s) => DropdownMenuItem(value: s, child: Text(s))).toList(),

                onChanged: (v) {

                  if (v == null) return;

                  setState(() => _selected = v);

                },

              ),

              const SizedBox(height: 12),

              Container(

                padding: const EdgeInsets.all(14),

                decoration: BoxDecoration(

                  color: const Color(0xFF6200EE).withValues(alpha: 0.08),

                  borderRadius: BorderRadius.circular(16),

                  border: Border.all(color: const Color(0xFF6200EE).withValues(alpha: 0.25)),

                ),

                child: Column(

                  crossAxisAlignment: CrossAxisAlignment.start,

                  children: [

                    Text(

                      _selected,

                      style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: Color(0xFF6200EE)),

                    ),

                    const SizedBox(height: 10),

                    Text(

                      'Active registrars: $activeSlots / $kNgmyMaxRegistrarsPerState',

                      style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white : Colors.black87),

                    ),

                    Text(

                      'Total enrolled members: $enrolledMembers',

                      style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),

                    ),

                    Text(

                      'Registrar slots left: $slotsLeft',

                      style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),

                    ),

                  ],

                ),

              ),

              const SizedBox(height: 12),

              Text(

                'Authorized Registrars in $_selected',

                style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : Colors.black87),

              ),

              const SizedBox(height: 8),

              Expanded(

                child: registrars.isEmpty

                    ? Center(

                        child: Text(

                          'No authorized registrars in this state yet.',

                          style: TextStyle(color: isDark ? Colors.white54 : Colors.black54),

                        ),

                      )

                    : ListView.builder(

                        itemCount: registrars.length,

                        itemBuilder: (_, i) {

                          final u = registrars[i];

                          return Card(

                            margin: const EdgeInsets.only(bottom: 10),

                            color: isDark ? const Color(0xFF1C1F2E) : const Color(0xFFF8FAFC),

                            child: Padding(

                              padding: const EdgeInsets.fromLTRB(12, 8, 12, 4),

                              child: Column(

                                crossAxisAlignment: CrossAxisAlignment.start,

                                children: [

                                  Text(u.username, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),

                                  Text(u.email, style: TextStyle(fontSize: 11, color: isDark ? Colors.white54 : Colors.black54)),

                                  const SizedBox(height: 4),

                                  SwitchListTile(

                                    contentPadding: EdgeInsets.zero,

                                    dense: true,

                                    title: const Text('King', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),

                                    subtitle: const Text(

                                      'Approve registrar requests & change states in this state',

                                      style: TextStyle(fontSize: 10),

                                    ),

                                    value: u.isCivicRegistryKing,

                                    activeThumbColor: const Color(0xFFEAB308),

                                    onChanged: (on) {

                                      widget.onToggleKing(u.email, on);

                                      setState(() {});

                                    },

                                  ),

                                  SwitchListTile(

                                    contentPadding: EdgeInsets.zero,

                                    dense: true,

                                    title: const Text('Civic Registry Admin', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),

                                    subtitle: const Text(

                                      'Serve any state · does not use a registrar slot',

                                      style: TextStyle(fontSize: 10),

                                    ),

                                    value: u.isCivicRegistryAdmin,

                                    activeThumbColor: const Color(0xFF6200EE),

                                    onChanged: (on) {

                                      widget.onToggleRegistryAdmin(u.email, on);

                                      setState(() {});

                                    },

                                  ),

                                ],

                              ),

                            ),

                          );

                        },

                      ),

              ),

            ],

          ),

        ),

      ),

    );

  }

}

