/// Gender + avatar emoji helpers for Cashier debtors.
enum NgmyCashierGender { male, female }

extension NgmyCashierGenderX on NgmyCashierGender {
  String get storageValue => this == NgmyCashierGender.male ? 'male' : 'female';
  String get label => this == NgmyCashierGender.male ? 'Male' : 'Female';
}

NgmyCashierGender? ngmyCashierGenderFromStorage(String raw) {
  switch (raw.trim().toLowerCase()) {
    case 'male':
      return NgmyCashierGender.male;
    case 'female':
      return NgmyCashierGender.female;
    default:
      return null;
  }
}

/// Default brown-skin avatars applied when gender is chosen (curly / afro hair).
const kNgmyCashierDefaultMaleAvatar = '👨🏾‍🦱';
const kNgmyCashierDefaultFemaleAvatar = '👩🏾‍🦱';

/// Open-hair icons use varied black hairstyles (afros, curls, fades, beards).
/// Cap / graduation / hijab icons are left unchanged.
const List<String> kNgmyCashierMaleAvatars = [
  // Open hair — different black styles
  '👨🏾‍🦱', // medium-dark · curly / afro
  '👨🏿‍🦱', // dark · curly / afro
  '👨🏽‍🦱', // medium · curly / afro
  '👨🏾', // medium-dark · short cut
  '👨🏿', // dark · short cut
  '👨🏽', // medium · short cut
  '🧔‍♂️', // beard
  '👨🏾‍🦲', // medium-dark · bald / fade
  '👨🏿‍🦲', // dark · bald / fade
  '👨🏻‍🦱', // lighter · curly
  // Covered / capped — leave as they are
  '👨🏾‍💼',
  '👨🏽‍💼',
  '👨🏿‍💼',
  '👨🏾‍🎓',
  '👨🏽‍🎓',
];

const List<String> kNgmyCashierFemaleAvatars = [
  // Open hair — different black styles
  '👩🏾‍🦱', // medium-dark · curly / afro
  '👩🏿‍🦱', // dark · curly / afro
  '👩🏽‍🦱', // medium · curly / afro
  '👩🏾', // medium-dark · straight / long
  '👩🏿', // dark · straight / long
  '👩🏽', // medium · straight / long
  '👩🏻‍🦱', // lighter · curly
  '👩🏾‍🦳', // medium-dark · natural gray / silver
  '👩🏿‍🦳', // dark · natural gray / silver
  // Covered / capped — leave as they are
  '🧕', // headscarf
  '👩🏾‍💼',
  '👩🏽‍💼',
  '👩🏿‍💼',
  '👩🏾‍🎓',
  '👩🏽‍🎓',
];

String ngmyCashierDefaultAvatar(NgmyCashierGender gender) =>
    gender == NgmyCashierGender.male
        ? kNgmyCashierDefaultMaleAvatar
        : kNgmyCashierDefaultFemaleAvatar;

List<String> ngmyCashierAvatarsFor(NgmyCashierGender gender) =>
    gender == NgmyCashierGender.male
        ? kNgmyCashierMaleAvatars
        : kNgmyCashierFemaleAvatars;

String ngmyCashierResolveAvatar({
  required NgmyCashierGender? gender,
  required String avatarEmoji,
}) {
  if (avatarEmoji.trim().isNotEmpty) return avatarEmoji.trim();
  if (gender == null) return '👤';
  return ngmyCashierDefaultAvatar(gender);
}
