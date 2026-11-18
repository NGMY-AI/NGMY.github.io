import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_hati_kuhowa_templates.dart';
import 'package:ngmy/ngmy_hati_pins.dart';
import 'package:shared_preferences/shared_preferences.dart';

// Pinning a Hati paper (the last choice in the ⋯ menu next to Play): a pinned paper comes first in the paper picker, in
// the order they were pinned; up to four; the same choice unpins; the pins are kept on the device.
void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('pinned papers come first, up to four, and pinning again unpins', () async {
    await ngmyHatiPinsLoad();
    expect(ngmyHatiPinnedFirst(kNgmyHatiKuhowaTemplates, (t) => t.id).first.id, 'kuhowa_elegant_navy');

    expect(await ngmyHatiTogglePin('photo_roses'), NgmyHatiPinResult.pinned);
    expect(await ngmyHatiTogglePin('royal_maroon'), NgmyHatiPinResult.pinned);
    final shown = ngmyHatiPinnedFirst(kNgmyHatiKuhowaTemplates, (t) => t.id);
    expect(shown.take(2).map((t) => t.id), ['photo_roses', 'royal_maroon']);
    expect(shown.length, kNgmyHatiKuhowaTemplates.length, reason: 'nothing lost or doubled');

    expect(await ngmyHatiTogglePin('photo_curtain'), NgmyHatiPinResult.pinned);
    expect(await ngmyHatiTogglePin('kuhowa_gold_star'), NgmyHatiPinResult.pinned);
    expect(await ngmyHatiTogglePin('royal_navy'), NgmyHatiPinResult.full, reason: 'four at most');
    expect(ngmyHatiPins.value.length, kNgmyHatiMaxPins);

    expect(await ngmyHatiTogglePin('royal_maroon'), NgmyHatiPinResult.unpinned);
    expect(ngmyHatiPins.value, ['photo_roses', 'photo_curtain', 'kuhowa_gold_star']);
    final saved = (await SharedPreferences.getInstance()).getStringList('ngmy_hati_pins');
    expect(saved, ['photo_roses', 'photo_curtain', 'kuhowa_gold_star'], reason: 'kept on the device');
  });

  test('a Hati document knows which paper it was made from', () {
    expect(ngmyHatiPaperIdOfDeck(ngmyBuildHatiKuhowaDeck(templateId: 'photo_sunset')), 'photo_sunset');
    expect(ngmyHatiPaperIdOfDeck(ngmyBuildHatiKuhoweshaDeck(templateId: 'royal_teal')), 'royal_teal');
    expect(ngmyHatiPaperIdOfDeck(ngmyBuildHatiMalipoAwamuDeck(templateId: 'kuhowa_gold_star')), 'kuhowa_gold_star');
  });
}
