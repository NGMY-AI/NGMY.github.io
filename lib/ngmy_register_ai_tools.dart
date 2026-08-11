import 'package:flutter/material.dart';

import 'ngmy_ai_app_bridge.dart';
import 'ngmy_doc_share_gate_ui.dart';
import 'ngmy_fun_games.dart';
import 'ngmy_studio_hub.dart' show showNgmyStandaloneQuoteCalc;
import 'ngmy_swahili_school.dart';
import 'ngmy_creator_recorder_studio.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_video_studio.dart';
import 'ngmy_phone_unlock.dart';
import 'ngmy_stripe_payments.dart';

void ngmyRegisterAiAppTools({
  required BuildContext Function() context,
  required String userEmail,
  dynamic user,
  dynamic config,
  Future<bool> Function(double amount, String description)? onCharge,
  VoidCallback? onDataChanged,
  Future<bool> Function()? onPersistConfig,
}) {
  NgmyAiAppBridge.register(
    context: context,
    tools: {
      'spark_lounge': (ctx) async {
        showNgmyFunGamesDialog(ctx, userEmail: userEmail);
        return 'Opened Play Zone — love match, confidence, riddles & fortune.';
      },
      'fun_games': (ctx) async {
        showNgmyFunGamesDialog(ctx, userEmail: userEmail);
        return 'Opened Play Zone.';
      },
      'video_studio': (ctx) async {
        showNgmyVideoStudio(ctx);
        return 'Opened Video Studio — add clips, templates, then Download.';
      },
      'phone_unlock': (ctx) async {
        await showNgmyPhoneUnlock(
          ctx,
          userEmail: userEmail,
          isAdmin: NgmyStripePayments.isAdmin(user),
        );
        return 'Opened Phone Unlock — quick links for Google, Chrome, and Settings.';
      },
      'virtual_device': (ctx) async {
        await showNgmyPhoneUnlock(
          ctx,
          userEmail: userEmail,
          isAdmin: NgmyStripePayments.isAdmin(user),
        );
        return 'Opened Phone Unlock — quick links for Google, Chrome, and Settings.';
      },
      'swahili_school': (ctx) async {
        showNgmySwahiliSchool(context: ctx, userEmail: userEmail);
        return 'Opened Kiswahili School — learn English with Mwalimu Amina.';
      },
      'mechanic_lab': (ctx) async {
        showNgmySwahiliSchool(context: ctx, userEmail: userEmail);
        return 'Opened Kiswahili School.';
      },
      'recorder_studio': (ctx) async {
        showNgmyCreatorRecorderStudio(ctx, userEmail: userEmail);
        return 'Opened Recorder Studio — photos, voice memos, and video.';
      },
      'qr_generator': (ctx) async {
        await showNgmyQrGeneratorDialog(
          ctx,
          userEmail: userEmail.isEmpty ? null : userEmail,
          user: user,
          config: config,
          onCharge: onCharge,
          onDataChanged: onDataChanged,
        );
        return 'Opened QR Generator.';
      },
      'quote_calc': (ctx) async {
        showNgmyStandaloneQuoteCalc(
          ctx,
          userEmail: userEmail,
          user: user,
          config: config,
          onCharge: onCharge,
          onDataChanged: onDataChanged,
        );
        return 'Opened Quote Calc.';
      },
      'doc_share': (ctx) async {
        if (userEmail.trim().isEmpty || user == null) return 'Sign in to open Doc Share.';
        openNgmyDocShare(
          context: ctx,
          user: user,
          config: config,
          onCharge: onCharge ?? (amount, description) async => false,
          onDataChanged: onDataChanged ?? () {},
          onPersistConfig: onPersistConfig ?? () async => false,
        );
        return 'Opened Doc Share.';
      },
    },
  );
}
