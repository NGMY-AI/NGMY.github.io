import 'package:flutter/material.dart';

import 'ngmy_countries.dart';

/// Destination country combo box: type to filter the list live, or tap the arrow on the
/// right to open the full country list. Users see names only.
class NgmyCountryComboField extends StatefulWidget {
  const NgmyCountryComboField({
    super.key,
    required this.controller,
    required this.decoration,
    required this.isDark,
    required this.onTyped,
    required this.onPicked,
    this.textCapitalization = TextCapitalization.words,
  });

  final TextEditingController controller;
  final InputDecoration decoration;
  final bool isDark;

  /// The user typed in the field.
  final ValueChanged<String> onTyped;

  /// The user picked a country from the list.
  final ValueChanged<NgmyCountry> onPicked;
  final TextCapitalization textCapitalization;

  @override
  State<NgmyCountryComboField> createState() => _NgmyCountryComboFieldState();
}

class _NgmyCountryComboFieldState extends State<NgmyCountryComboField> {
  final LayerLink _link = LayerLink();
  final OverlayPortalController _portal = OverlayPortalController();
  final FocusNode _focus = FocusNode();
  final Object _tapGroup = Object();
  bool _showAll = false;
  double _width = 280;

  @override
  void dispose() {
    _focus.dispose();
    super.dispose();
  }

  void _open({required bool all}) {
    setState(() => _showAll = all);
    if (!_portal.isShowing) _portal.show();
  }

  void _close() {
    if (_portal.isShowing) setState(() => _portal.hide());
  }

  void _toggleFullList() {
    if (_portal.isShowing && _showAll) {
      _close();
    } else {
      _open(all: true);
    }
  }

  void _pick(NgmyCountry c) {
    widget.controller.value = TextEditingValue(
      text: c.name,
      selection: TextSelection.collapsed(offset: c.name.length),
    );
    _close();
    _focus.unfocus();
    widget.onPicked(c);
  }

  Widget _list(BuildContext context) {
    final items = _showAll ? ngmyCountriesSorted : ngmyFilterCountries(widget.controller.text);
    final isDark = widget.isDark;
    return CompositedTransformFollower(
      link: _link,
      showWhenUnlinked: false,
      targetAnchor: Alignment.bottomLeft,
      offset: const Offset(0, 4),
      child: Align(
        alignment: Alignment.topLeft,
        child: TapRegion(
          groupId: _tapGroup,
          child: SizedBox(
            width: _width,
            child: Material(
              elevation: 8,
              borderRadius: BorderRadius.circular(12),
              color: isDark ? const Color(0xFF1E293B) : Colors.white,
              clipBehavior: Clip.antiAlias,
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxHeight: 260),
                child: items.isEmpty
                    ? Padding(
                        padding: const EdgeInsets.all(14),
                        child: Text(
                          'No country found',
                          style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : Colors.black54),
                        ),
                      )
                    : ListView.builder(
                        padding: const EdgeInsets.symmetric(vertical: 4),
                        shrinkWrap: true,
                        itemCount: items.length,
                        itemBuilder: (context, i) {
                          final c = items[i];
                          return InkWell(
                            onTap: () => _pick(c),
                            child: Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                              child: Text(
                                c.name,
                                style: TextStyle(
                                  fontSize: 13,
                                  fontWeight: FontWeight.w600,
                                  color: isDark ? Colors.white : const Color(0xFF0F172A),
                                ),
                              ),
                            ),
                          );
                        },
                      ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth.isFinite) _width = constraints.maxWidth;
      return TapRegion(
        groupId: _tapGroup,
        onTapOutside: (_) => _close(),
        child: CompositedTransformTarget(
          link: _link,
          child: OverlayPortal(
            controller: _portal,
            overlayChildBuilder: _list,
            child: TextField(
              controller: widget.controller,
              focusNode: _focus,
              textCapitalization: widget.textCapitalization,
              onChanged: (v) {
                widget.onTyped(v);
                _open(all: false);
              },
              decoration: widget.decoration.copyWith(
                suffixIcon: IconButton(
                  tooltip: 'Show all countries',
                  icon: Icon(_portal.isShowing ? Icons.arrow_drop_up_rounded : Icons.arrow_drop_down_rounded),
                  onPressed: _toggleFullList,
                ),
              ),
            ),
          ),
        ),
      );
    });
  }
}
