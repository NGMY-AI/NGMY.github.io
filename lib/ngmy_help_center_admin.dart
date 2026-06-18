import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_help_center.dart';

/// Admin sheet — configure Help Center poster, contacts, and services.
Future<void> showNgmyHelpCenterAdminSheet({
  required BuildContext context,
  required bool isDark,
  required Map<String, dynamic> initialConfig,
  required Future<bool> Function(Map<String, dynamic> config) onSave,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyHelpCenterAdminSheet(
      isDark: isDark,
      initial: NgmyHelpCenterConfig.fromMap(initialConfig),
      onSave: onSave,
    ),
  );
}

class _NgmyHelpCenterAdminSheet extends StatefulWidget {
  const _NgmyHelpCenterAdminSheet({
    required this.isDark,
    required this.initial,
    required this.onSave,
  });

  final bool isDark;
  final NgmyHelpCenterConfig initial;
  final Future<bool> Function(Map<String, dynamic> config) onSave;

  @override
  State<_NgmyHelpCenterAdminSheet> createState() => _NgmyHelpCenterAdminSheetState();
}

class _NgmyHelpCenterAdminSheetState extends State<_NgmyHelpCenterAdminSheet> {
  late bool _enabled;
  late bool _waOn;
  late bool _callOn;
  late bool _cashAppOn;
  late final TextEditingController _titleC;
  late final TextEditingController _subtitleC;
  late final TextEditingController _headlineC;
  late final TextEditingController _bodyC;
  late final TextEditingController _phoneC;
  late final TextEditingController _waLinkC;
  late final TextEditingController _waLabelC;
  late final TextEditingController _callLabelC;
  late final TextEditingController _cashAppC;
  late final TextEditingController _cashAppLabelC;
  late final TextEditingController _supportC;
  late final List<TextEditingController> _stepCs;
  final List<_ServiceDraft> _serviceDrafts = [];
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    final c = widget.initial;
    _enabled = c.enabled;
    _waOn = c.whatsappEnabled;
    _callOn = c.callEnabled;
    _cashAppOn = c.cashAppEnabled;
    _titleC = TextEditingController(text: c.title);
    _subtitleC = TextEditingController(text: c.subtitle);
    _headlineC = TextEditingController(text: c.posterHeadline);
    _bodyC = TextEditingController(text: c.posterBody);
    _phoneC = TextEditingController(text: c.phone);
    _waLinkC = TextEditingController(text: c.whatsappLink);
    _waLabelC = TextEditingController(text: c.whatsappButtonLabel);
    _callLabelC = TextEditingController(text: c.callButtonLabel);
    _cashAppC = TextEditingController(text: c.cashAppTag);
    _cashAppLabelC = TextEditingController(text: c.cashAppButtonLabel);
    _supportC = TextEditingController(text: c.supportName);
    _stepCs = (c.steps.isEmpty ? NgmyHelpCenterConfig.defaults().steps : c.steps)
        .map((s) => TextEditingController(text: s))
        .toList();
    final services = c.services.isEmpty ? NgmyHelpCenterConfig.defaultServices() : c.services;
    for (final s in services) {
      _serviceDrafts.add(_ServiceDraft.fromService(s));
    }
  }

  @override
  void dispose() {
    for (final c in [_titleC, _subtitleC, _headlineC, _bodyC, _phoneC, _waLinkC, _waLabelC, _callLabelC, _cashAppC, _cashAppLabelC, _supportC, ..._stepCs]) {
      c.dispose();
    }
    for (final d in _serviceDrafts) {
      d.dispose();
    }
    super.dispose();
  }

  NgmyHelpCenterConfig _buildConfig() {
    final services = _serviceDrafts.map((d) => d.toService()).toList();
    return NgmyHelpCenterConfig(
      enabled: _enabled,
      title: _titleC.text.trim(),
      subtitle: _subtitleC.text.trim(),
      posterHeadline: _headlineC.text.trim(),
      posterBody: _bodyC.text.trim(),
      steps: _stepCs.map((c) => c.text.trim()).where((s) => s.isNotEmpty).toList(),
      phone: _phoneC.text.trim(),
      whatsappLink: _waLinkC.text.trim(),
      whatsappEnabled: _waOn,
      callEnabled: _callOn,
      whatsappButtonLabel: _waLabelC.text.trim().isEmpty ? 'Send on WhatsApp' : _waLabelC.text.trim(),
      callButtonLabel: _callLabelC.text.trim().isEmpty ? 'Call Now' : _callLabelC.text.trim(),
      cashAppTag: _cashAppC.text.trim().isEmpty ? 'NGMYpay' : _cashAppC.text.trim(),
      cashAppEnabled: _cashAppOn,
      cashAppButtonLabel: _cashAppLabelC.text.trim().isEmpty ? 'Pay on Cash App' : _cashAppLabelC.text.trim(),
      supportName: _supportC.text.trim(),
      services: services,
    );
  }

  Future<void> _save() async {
    if (_saving) return;
    setState(() => _saving = true);
    try {
      final ok = await widget.onSave(_buildConfig().toMap());
      if (!mounted) return;
      if (ok) Navigator.pop(context);
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  void _addService() {
    setState(() {
      _serviceDrafts.add(_ServiceDraft.fromService(
        NgmyHelpCenterService(
          id: 'svc_${DateTime.now().millisecondsSinceEpoch}',
          name: 'New Service',
          description: '',
          icon: 'support_agent',
        ),
      ));
    });
  }

  @override
  Widget build(BuildContext context) {
    final sheetBg = widget.isDark ? const Color(0xFF12151F) : Colors.white;
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    return Padding(
      padding: EdgeInsets.only(bottom: bottom),
      child: DraggableScrollableSheet(
        initialChildSize: 0.92,
        minChildSize: 0.5,
        maxChildSize: 0.96,
        builder: (_, scroll) => Container(
          decoration: BoxDecoration(
            color: sheetBg,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(22)),
          ),
          child: Column(
            children: [
              const SizedBox(height: 10),
              Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.grey.withOpacity(0.35), borderRadius: BorderRadius.circular(2))),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 14, 12, 8),
                child: Row(
                  children: [
                    const Expanded(
                      child: Text('Help Center', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900)),
                    ),
                    Switch(value: _enabled, onChanged: (v) => setState(() => _enabled = v)),
                    Text(_enabled ? 'ON' : 'OFF', style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w800)),
                  ],
                ),
              ),
              Expanded(
                child: ListView(
                  controller: scroll,
                  padding: const EdgeInsets.fromLTRB(20, 0, 20, 24),
                  children: [
                    _section('Poster & instructions'),
                    _tf(_titleC, 'Screen title'),
                    _tf(_subtitleC, 'Subtitle'),
                    _tf(_headlineC, 'Poster headline', maxLines: 2),
                    _tf(_bodyC, 'Poster body (what users should do)', maxLines: 4),
                    const SizedBox(height: 8),
                    Text('Steps', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: widget.isDark ? Colors.white60 : Colors.black54)),
                    ...List.generate(_stepCs.length, (i) => Padding(padding: const EdgeInsets.only(top: 8), child: _tf(_stepCs[i], 'Step ${i + 1}'))),
                    const SizedBox(height: 20),
                    _section('Contact buttons'),
                    _tf(_supportC, 'Support / business name (in message)'),
                    _tf(_phoneC, 'Phone number', keyboard: TextInputType.phone),
                    _tf(_cashAppC, 'Cash App tag (Send Money)', hint: r'$NGMYpay'),
                    SwitchListTile(
                      contentPadding: EdgeInsets.zero,
                      title: const Text('Show Cash App button for Send Money'),
                      value: _cashAppOn,
                      onChanged: (v) => setState(() => _cashAppOn = v),
                    ),
                    _tf(_cashAppLabelC, 'Cash App button label'),
                    _tf(_waLinkC, 'WhatsApp link (optional — leave blank to use phone)', hint: 'https://wa.me/17066237963'),
                    SwitchListTile(
                      contentPadding: EdgeInsets.zero,
                      title: const Text('Show WhatsApp button'),
                      value: _waOn,
                      onChanged: (v) => setState(() => _waOn = v),
                    ),
                    _tf(_waLabelC, 'WhatsApp button label'),
                    SwitchListTile(
                      contentPadding: EdgeInsets.zero,
                      title: const Text('Show Call button'),
                      value: _callOn,
                      onChanged: (v) => setState(() => _callOn = v),
                    ),
                    _tf(_callLabelC, 'Call button label'),
                    const SizedBox(height: 20),
                    Row(
                      children: [
                        Expanded(child: _section('Services')),
                        TextButton.icon(onPressed: _addService, icon: const Icon(Icons.add_rounded, size: 18), label: const Text('Add')),
                      ],
                    ),
                    ..._serviceDrafts.asMap().entries.map((e) => _serviceEditor(e.key, e.value)),
                    const SizedBox(height: 24),
                    FilledButton(
                      onPressed: _saving ? null : _save,
                      style: FilledButton.styleFrom(
                        padding: const EdgeInsets.symmetric(vertical: 14),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: _saving
                          ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                          : const Text('Save Help Center', style: TextStyle(fontWeight: FontWeight.w900)),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _section(String title) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10, top: 4),
      child: Text(title, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w900, color: Color(0xFF7C3AED))),
    );
  }

  Widget _tf(TextEditingController c, String label, {int maxLines = 1, String? hint, TextInputType? keyboard}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: TextField(
        controller: c,
        maxLines: maxLines,
        keyboardType: keyboard,
        decoration: InputDecoration(
          labelText: label,
          hintText: hint,
          filled: true,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
        ),
      ),
    );
  }

  Widget _serviceEditor(int index, _ServiceDraft d) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: Colors.grey.withOpacity(0.25)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(child: Text('Service ${index + 1}', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12))),
              Switch(
                value: d.enabled,
                onChanged: (v) => setState(() => d.enabled = v),
              ),
              IconButton(
                icon: const Icon(Icons.delete_outline_rounded, size: 20, color: Colors.redAccent),
                onPressed: () => setState(() {
                  d.dispose();
                  _serviceDrafts.removeAt(index);
                }),
              ),
            ],
          ),
          TextField(
            decoration: const InputDecoration(labelText: 'Service name', isDense: true),
            controller: d.nameC,
          ),
          const SizedBox(height: 8),
          TextField(
            decoration: const InputDecoration(labelText: 'Description', isDense: true),
            controller: d.descC,
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              Expanded(
                child: TextField(
                  decoration: const InputDecoration(labelText: 'Default price', isDense: true),
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  controller: d.priceC,
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: TextField(
                  decoration: const InputDecoration(labelText: 'Default qty', isDense: true),
                  keyboardType: TextInputType.number,
                  controller: d.qtyC,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          DropdownButtonFormField<String>(
            value: kNgmyHelpCenterIconChoices.any((c) => c['id'] == d.icon) ? d.icon : 'support_agent',
            decoration: const InputDecoration(labelText: 'Icon', isDense: true),
            items: kNgmyHelpCenterIconChoices
                .map((c) => DropdownMenuItem(value: c['id'], child: Text(c['label']!)))
                .toList(),
            onChanged: (v) {
              if (v != null) setState(() => d.icon = v);
            },
          ),
        ],
      ),
    );
  }
}

class _ServiceDraft {
  _ServiceDraft({
    required this.id,
    required this.nameC,
    required this.descC,
    required this.priceC,
    required this.qtyC,
    required this.icon,
    this.enabled = true,
  });

  final String id;
  final TextEditingController nameC;
  final TextEditingController descC;
  final TextEditingController priceC;
  final TextEditingController qtyC;
  String icon;
  bool enabled;

  factory _ServiceDraft.fromService(NgmyHelpCenterService s) {
    return _ServiceDraft(
      id: s.id,
      nameC: TextEditingController(text: s.name),
      descC: TextEditingController(text: s.description),
      priceC: TextEditingController(text: s.defaultPrice),
      qtyC: TextEditingController(text: s.defaultQty),
      icon: s.icon,
      enabled: s.enabled,
    );
  }

  NgmyHelpCenterService toService() => NgmyHelpCenterService(
        id: id,
        name: nameC.text.trim().isEmpty ? 'Service' : nameC.text.trim(),
        description: descC.text.trim(),
        defaultPrice: priceC.text.trim().isEmpty ? '0' : priceC.text.trim(),
        defaultQty: qtyC.text.trim().isEmpty ? '1' : qtyC.text.trim(),
        icon: icon,
        enabled: enabled,
      );

  void dispose() {
    nameC.dispose();
    descC.dispose();
    priceC.dispose();
    qtyC.dispose();
  }
}
