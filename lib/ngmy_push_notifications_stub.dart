import 'package:flutter/material.dart';

Future<bool> ngmyPushIsSupported() async => false;

Future<bool> ngmyPushHasPermission() async => false;

Future<bool> ngmyPushRequestPermission() async => false;

Future<void> ngmyPushShow({required String title, required String body, String? tag}) async {}

Future<void> ngmyPushMaybePrompt(BuildContext context, String userEmail) async {}
