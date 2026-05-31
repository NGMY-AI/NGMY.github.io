import 'dart:async';
import 'dart:io';

Future<bool> ngmyNativeReachabilityProbe(Duration timeout) async {
  final result = await InternetAddress.lookup('example.com').timeout(timeout);
  return result.isNotEmpty && result.first.rawAddress.isNotEmpty;
}
