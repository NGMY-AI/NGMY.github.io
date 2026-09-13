import 'ngmy_hati_kuhowa_templates.dart';
import 'ngmy_marriage_agreement_templates.dart';
import 'ngmy_slides_models.dart';

const _kHatiNdoaIntro =
    'Sisi, familia ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], '
    'na familia ya [Jina la Jamii ya Mke], nyumba ya [Jina la Nyumba ya Mke], '
    'tunathibitisha rasmi ndoa kati ya [Jina la Mume] na [Jina la Mke]. '
    'Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka '
    'kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.';

const _kHatiNdoaMahariItems = [
  'Kichwa cha Mtu: Dollar elfu ishirini (\$20,000)',
  'Mbuzi Mbili',
  'Ngyoka',
  'Mmoko',
];

/// Same page as Hati ya Kuhowa / Kuhowesha — title, TAREHE, intro frame,
/// NIMETOWA, MASHAHIDI, MWANDISHI — on the Hati ya Ndoa paper templates.
NgmySlideDeck ngmyBuildMarriageAgreementDeck({required String templateId, String state = ''}) {
  final tpl = ngmyMarriageTemplateById(templateId) ?? kNgmyMarriagePaperTemplates.first;
  return ngmyBuildHatiLookDeck(
    name: tpl.name,
    themeId: 'marriage_${tpl.id}',
    deckKind: 'marriage_agreement',
    paperStyle: tpl.paperStyle,
    background: tpl.background,
    ink: tpl.ink,
    accent: tpl.accent,
    title: 'HATI YA NDOA',
    introText: _kHatiNdoaIntro,
    sectionLabel: 'NIMETOWA',
    mahariItems: _kHatiNdoaMahariItems,
    state: state,
  );
}
