// A safe place on this device for things people type and keep (Business Essentials: notes, contacts, tasks, medicines, places,
// hotlines, words, quick dial, reminders).
//
// Why: everything used to go into the browser's small storage (localStorage, about 5 MB for the whole site), which the app also fills
// with every user, every transaction and the whole app setup. Once it was full, a new note or contact silently failed to save, and
// what was typed disappeared. On the web this now writes to IndexedDB (the browser's large storage, where note photos already live)
// AND keeps a copy in the small storage when there is room. Reading takes whichever copy is newer, so nothing older can win.
// On phones and in tests it is SharedPreferences, as before.

export 'ngmy_local_store_stub.dart' if (dart.library.html) 'ngmy_local_store_web.dart';
