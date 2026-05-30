import 'ngmy_offline_stub.dart' if (dart.library.html) 'ngmy_offline_web.dart';

Future<bool> ngmyDeviceIsOnline() => ngmyPlatformIsOnline();
