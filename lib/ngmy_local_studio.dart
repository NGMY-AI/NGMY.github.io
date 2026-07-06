import 'package:flutter/material.dart';

import 'ngmy_menu_studio.dart';
import 'ngmy_studio_backend.dart';

/// Device-local menu experiment — Business Essentials. No Supabase.
Future<void> showNgmyLocalMenuStudioDialog(BuildContext context, {required String userEmail}) {
  return showNgmyMenuStudioDialog(
    context,
    userEmail: userEmail,
    backend: NgmyStudioPublishBackend.localDevice,
    homeFilter: NgmyStudioHomeFilter.menusOnly,
  );
}

/// Device-local bio experiment — Business Essentials. No Supabase.
Future<void> showNgmyLocalBioStudioDialog(BuildContext context, {required String userEmail}) {
  return showNgmyMenuStudioDialog(
    context,
    userEmail: userEmail,
    backend: NgmyStudioPublishBackend.localDevice,
    homeFilter: NgmyStudioHomeFilter.biosOnly,
  );
}
