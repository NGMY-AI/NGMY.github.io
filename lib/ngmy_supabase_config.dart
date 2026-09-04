/// Supabase project connection — update anon key from Dashboard → Project Settings → API.
const String kNgmySupabaseUrl = 'https://gvufllqqxjnpicmkxzcg.supabase.co';

/// Anon (public) key — must match your Supabase project. If saves fail with
/// "Invalid API key", paste the current anon key from the Supabase dashboard here.
const String kNgmySupabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dWZsbHFxeGpucGljbWt4emNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjA1OTksImV4cCI6MjA5NTM5NjU5OX0.NoJnis6t_RLSJOHu5iLdjGaCTxVj5ZAFnG3gBZ3XYbM';

bool ngmySupabaseErrorIsInvalidApiKey(Object error) {
  final text = error.toString().toLowerCase();
  return text.contains('invalid api key') ||
      text.contains('invalid jwt') ||
      text.contains('jwt expired') ||
      (text.contains('401') && text.contains('api key'));
}

bool ngmySupabaseErrorIsMissingTable(Object error, String table) {
  return error.toString().contains("Could not find the table 'public.$table'");
}

String ngmySupabaseSaveFailureMessage(Object? lastError) {
  if (lastError != null && ngmySupabaseErrorIsInvalidApiKey(lastError)) {
    return 'Could not reach the server. Try again in a moment.';
  }
  return 'Could not sync to the cloud right now. Try again in a moment.';
}
