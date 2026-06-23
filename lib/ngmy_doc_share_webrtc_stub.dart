import 'ngmy_doc_share_models.dart';



const String kNgmyDocShareWebRtcAnswerPrefix = 'NGMYDOCSYNC3A';



Future<String?> createOfferQr({

  required String ownerEmail,

  required List<NgmyDocShareItem> items,

}) async =>

    null;



Future<String?> createShortOfferQr({

  required String ownerEmail,

  required List<NgmyDocShareItem> items,

}) async =>

    null;



Future<String?> pollAnswerForOffer(String offerToken) async => null;



Future<void> applyAnswerQr(String raw) async {}



Future<({String answerQr, Future<List<NgmyDocShareItem>> transfer})?> beginReceiveOffer({

  required String raw,

  required String recipientEmail,

  void Function(int received, int total)? onProgress,

}) async =>

    null;



Future<void> stopWebRtc() async {}



bool get isWebRtcSenderActive => false;

