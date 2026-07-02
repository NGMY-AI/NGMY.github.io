import 'ngmy_phone_integrations.dart';

/// Infer admin send_email actions when the AI did not append an action block.
List<NgmyPhoneAction> ngmyInferSendEmailActionsFromUserMessage(
  String userText, {
  required bool isAdmin,
}) {
  if (!isAdmin) return const [];
  final text = userText.trim();
  if (text.isEmpty) return const [];

  final lower = text.toLowerCase();
  final wantsSend = lower.contains('send email') ||
      lower.contains('send an email') ||
      lower.contains('send a message to') ||
      lower.contains('email ') ||
      lower.contains('write an email') ||
      lower.contains('write email');
  if (!wantsSend) return const [];

  final emailMatch = RegExp(r'[\w.+-]+@[\w.-]+\.\w+').firstMatch(text);
  if (emailMatch == null) return const [];
  final to = emailMatch.group(0)!.trim();

  var subject = 'Message from NGMY';
  final subjectMatch = RegExp(r'(?:subject|title)\s*[:\-]\s*(.+)$', caseSensitive: false).firstMatch(text);
  if (subjectMatch != null) {
    subject = subjectMatch.group(1)!.trim();
  }

  var body = '';
  final sayingMatch = RegExp(
    r'(?:saying|that says|with message|message:|body:|write:|text:)\s*(.+)$',
    caseSensitive: false,
  ).firstMatch(text);
  if (sayingMatch != null) {
    body = sayingMatch.group(1)!.trim();
  }

  return [
    NgmyPhoneAction(
      type: 'send_email',
      fields: {
        'to': to,
        'subject': subject,
        if (body.isNotEmpty) 'body': body,
      },
    ),
  ];
}

List<NgmyPhoneAction> ngmyFilterAdminOnlyPhoneActions(List<NgmyPhoneAction> actions, {required bool isAdmin}) {
  if (isAdmin) return actions;
  return actions.where((a) => a.type != 'send_email').toList();
}
