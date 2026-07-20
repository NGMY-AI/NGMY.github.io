import 'package:flutter/material.dart';

import 'ngmy_marriage_agreement_templates.dart';
import 'ngmy_slides_models.dart';

const String kNgmyMarriageDeckKind = 'marriage_agreement';
const String kMarriageLocked = 'marriage_locked';
const String kMarriageFieldPrefix = 'marriage_field_';
const String kMarriageSignPrefix = 'marriage_sign_';

bool ngmyMarriageElementIsLocked(NgmySlideElement e) =>
    e.fileName == kMarriageLocked || e.fileName.startsWith('${kMarriageLocked}_');

bool ngmyMarriageElementIsField(NgmySlideElement e) => e.fileName.startsWith(kMarriageFieldPrefix);

bool ngmyMarriageElementIsSignZone(NgmySlideElement e) => e.fileName.startsWith(kMarriageSignPrefix);

/// Pack elements on the same row closer after a name field shrinks.
void ngmyMarriagePackRow(NgmySlide slide, double anchorY) {
  const yTol = 0.03;
  final items = <NgmySlideElement>[];
  for (final e in slide.elements) {
    if (e.fileName.startsWith('${kMarriageLocked}_box_')) continue;
    final cy = e.y + e.h * 0.5;
    if ((cy - anchorY).abs() < yTol) items.add(e);
  }
  if (items.length < 2) return;
  items.sort((a, b) => a.x.compareTo(b.x));
  var x = items.first.x;
  for (final e in items) {
    final dx = x - e.x;
    if (dx.abs() > 0.0001) {
      e.x = x;
      if (ngmyMarriageElementIsField(e)) {
        final key = e.fileName.replaceFirst(kMarriageFieldPrefix, '').split(':').first;
        for (final b in slide.elements) {
          if (b.fileName == '${kMarriageLocked}_box_$key') b.x += dx;
        }
      }
    }
    x += e.w + 0.006;
  }
}

/// Shrink editable field width when user types a short name.
///
/// Fields tagged with a third `:baseFontSize` segment (see _hBlank's
/// autoShrinkFont param) additionally shrink their FONT SIZE instead of
/// letting long text wrap onto a second line — a witness name that's too
/// long to fit at the normal size otherwise wraps, throwing that one row
/// out of alignment with every other name in the table (which stay on a
/// single line). Fields without that third segment keep the old
/// width-only behavior unchanged.
void ngmyMarriageAutoFitField(NgmySlideElement e, String text) {
  if (!ngmyMarriageElementIsField(e)) return;
  final parts = e.fileName.split(':');
  final maxW = parts.length > 1 ? (double.tryParse(parts[1]) ?? e.w) : e.w;
  final baseFontSize = parts.length > 2 ? double.tryParse(parts[2]) : null;
  final t = text.trim();
  if (t.isEmpty) {
    e.w = maxW;
    if (baseFontSize != null) e.fontSize = baseFontSize;
    return;
  }
  if (baseFontSize != null) {
    final perCharAtBase = baseFontSize * 0.001;
    final naturalW = t.length * perCharAtBase + 0.028;
    if (naturalW <= maxW) {
      e.fontSize = baseFontSize;
      e.w = naturalW.clamp(0.06, maxW);
    } else {
      e.fontSize = ((maxW - 0.028) / (t.length * 0.001)).clamp(7.0, baseFontSize);
      e.w = maxW;
    }
    return;
  }
  // Per-character width must scale with the field's own font size — this
  // was a flat 0.0115 tuned for Marriage Agreement's small blanks (~11.5pt).
  // Applied unchanged to a much bigger field (e.g. Hati ya Kuhoweya's 30pt
  // editable section header), it drastically underestimated the width
  // needed, shrinking the box until the text had to wrap onto a second
  // line even though there was room on the paper for it to stay on one.
  final perChar = e.fontSize * 0.001;
  e.w = (t.length * perChar + 0.028).clamp(0.06, maxW);
}

Future<void> launchNgmyMarriageAgreement({
  required BuildContext context,
  required List<NgmySlideDeck> savedDecks,
  required void Function(NgmySlideDeck deck) openDraftEditor,
  required void Function(NgmySlideDeck deck) openSavedDeck,
}) async {
  final existing = savedDecks.where((d) => d.isMarriageAgreement).toList();

  if (existing.isNotEmpty) {
    final action = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF1C1917),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 44,
                  height: 4,
                  decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)),
                ),
              ),
              const SizedBox(height: 18),
              const Text('Hati ya Kuhowesha', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 8),
              Text(
                'Una hati ${existing.length} zilizohifadhiwa.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13),
              ),
              const SizedBox(height: 16),
              FilledButton.icon(
                onPressed: () => Navigator.pop(ctx, 'continue'),
                icon: const Icon(Icons.edit_document),
                label: Text('Endelea na "${existing.first.name}"'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFFB8860B),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
              const SizedBox(height: 10),
              OutlinedButton.icon(
                onPressed: () => Navigator.pop(ctx, 'new'),
                icon: const Icon(Icons.add_rounded),
                label: const Text('Hati mpya (chagua muundo)'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: Colors.white70,
                  side: const BorderSide(color: Colors.white24),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
            ],
          ),
        ),
      ),
    );

    if (action == 'continue') {
      openSavedDeck(existing.first.copy());
      return;
    }
    if (action != 'new') return;
  }

  if (!context.mounted) return;
  final templateId = await showNgmyMarriageTemplatePicker(context);
  if (templateId == null || !context.mounted) return;
  openDraftEditor(ngmyBuildMarriageAgreementDeck(templateId: templateId));
}
