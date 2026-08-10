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

/// Default brown-skin avatars applied when gender is chosen.
const kNgmyCashierDefaultMaleAvatar = '👨🏾';
const kNgmyCashierDefaultFemaleAvatar = '👩🏾';

/// Mostly brown / deep skin-tone options; a few lighter tones for choice.
const List<String> kNgmyCashierMaleAvatars = [
  '👨🏾',
  '👨🏽',
  '👨🏻',
  '👨🏿',
  '🧔‍♂️',
  '👨🏾‍🦱',
  '👨🏽‍🦱',
  '👨🏿‍🦱',
  '👨🏾‍💼',
  '👨🏽‍💼',
  '👨🏿‍💼',
  '👨🏾‍🎓',
  '👨🏽‍🎓',
  '👨',
];

const List<String> kNgmyCashierFemaleAvatars = [
  '👩🏾',
  '👩🏽',
  '👩🏻',
  '👩🏿',
  '👩🏾‍🦱',
  '👩🏽‍🦱',
  '👩🏿‍🦱',
  '👩🏾‍💼',
  '👩🏽‍💼',
  '👩🏿‍💼',
  '👩🏾‍🎓',
  '👩🏽‍🎓',
  '👩',
  '🧕',
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
