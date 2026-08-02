import 'ngmy_phone_integrations.dart';

/// Opens in-app NGMY tools when the AI forgets the action block.
List<NgmyPhoneAction> ngmyInferOpenToolActionsFromUserMessage(String userText) {
  final lower = userText.trim().toLowerCase();
  if (lower.isEmpty) return const [];
  if (!RegExp(r'\b(open|launch|start|show|take me to|go to)\b').hasMatch(lower)) {
    return const [];
  }

  String? tool;
  if (RegExp(r'\b(video studio|edit video|template video)\b').hasMatch(lower)) {
    tool = 'video_studio';
  } else if (RegExp(r'\b(phone unlock|google lock|frp|factory reset protection|account locked|unlock phone|virtual device|virtual phone)\b').hasMatch(lower)) {
    tool = 'phone_unlock';
  } else if (RegExp(r'\b(swahili|kiswahili|learn swahili|swahili school)\b').hasMatch(lower)) {
    tool = 'swahili_school';
  } else if (RegExp(r'\b(mechanic lab|3d mechanic|car mechanic)\b').hasMatch(lower)) {
    tool = 'swahili_school';
  } else if (RegExp(r'\b(recorder studio|voice memo|record video|record audio|take photo|photo studio)\b').hasMatch(lower)) {
    tool = 'recorder_studio';
  } else if (RegExp(r'\b(qr generator|qr code|make qr)\b').hasMatch(lower)) {
    tool = 'qr_generator';
  } else if (RegExp(r'\b(quote calc|pick two|invoice|estimate)\b').hasMatch(lower)) {
    tool = 'quote_calc';
  } else if (RegExp(r'\b(doc share|share file|upload file)\b').hasMatch(lower)) {
    tool = 'doc_share';
  } else if (RegExp(r'\b(play zone|fun games|fun break|love match|riddles|fortune|confidence quote)\b').hasMatch(lower)) {
    tool = 'spark_lounge';
  } else if (RegExp(r'\b(creator toolkit|tool hub|studio hub)\b').hasMatch(lower)) {
    return const [];
  }

  if (tool == null) return const [];
  return [NgmyPhoneAction(type: 'open_tool', fields: {'tool': tool})];
}
