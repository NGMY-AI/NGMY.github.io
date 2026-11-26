import 'ngmy_help_center.dart';
import 'ngmy_help_center_fx.dart';

/// Professional NGMY money-transfer quote receipt (no Cash App tag).
class NgmyHelpCenterSendMoneyReceipt {
  const NgmyHelpCenterSendMoneyReceipt({
    required this.reference,
    required this.createdAt,
    required this.senderName,
    required this.senderPhone,
    required this.senderEmail,
    required this.receiverName,
    required this.receiverPhone,
    required this.receiverCountry,
    required this.transferAmount,
    required this.serviceFee,
    required this.recipientGets,
    required this.feeDescription,
    this.serviceName = 'Send Money',
    this.fx,
  });

  final String reference;
  final DateTime createdAt;
  final String senderName;
  final String senderPhone;
  final String senderEmail;
  final String receiverName;
  final String receiverPhone;
  final String receiverCountry;
  final double transferAmount;
  final double serviceFee;
  final double recipientGets;
  final String feeDescription;
  final String serviceName;

  /// Local currency and the rate at the moment of the transfer (null when no country matched).
  final NgmyFxQuote? fx;

  /// "They receive" / "983,969 TZS", or null when there is no country.
  String? get localCurrencyLabel => fx?.rowLabel;
  String? get localCurrencyValue => fx?.valueFor(recipientGets);

  factory NgmyHelpCenterSendMoneyReceipt.fromForm({
    required String reference,
    required String senderName,
    required String senderPhone,
    required String senderEmail,
    required String receiverName,
    required String receiverPhone,
    required String receiverCountry,
    required String transferAmountText,
    String serviceName = 'Send Money',
    NgmyFxQuote? fx,
  }) {
    final amount = double.tryParse(transferAmountText.trim()) ?? 0;
    final fee = ngmyHelpCenterMoneyTransferFee(amount);
    return NgmyHelpCenterSendMoneyReceipt(
      reference: reference,
      createdAt: DateTime.now(),
      senderName: senderName.trim(),
      senderPhone: senderPhone.trim(),
      senderEmail: senderEmail.trim(),
      receiverName: receiverName.trim(),
      receiverPhone: receiverPhone.trim(),
      receiverCountry: receiverCountry.trim(),
      transferAmount: amount,
      serviceFee: fee,
      recipientGets: amount - fee,
      feeDescription: ngmyHelpCenterMoneyTransferFeeDescription(amount),
      serviceName: serviceName,
      fx: fx,
    );
  }

  String get formattedDate {
    final d = createdAt;
    final mm = d.month.toString().padLeft(2, '0');
    final dd = d.day.toString().padLeft(2, '0');
    final hh = d.hour.toString().padLeft(2, '0');
    final min = d.minute.toString().padLeft(2, '0');
    return '${d.year}-$mm-$dd $hh:$min';
  }

  String get pngFilename {
    final safeRef = reference.replaceAll(RegExp(r'[^\w\-]+'), '-');
    return 'NGMY-Receipt-$safeRef';
  }

  String toShareText() {
    final buf = StringBuffer()
      ..writeln('NGMY MONEY TRANSFER RECEIPT')
      ..writeln('━━━━━━━━━━━━━━━━━━━━━━━━')
      ..writeln('Reference: $reference')
      ..writeln('Date: $formattedDate')
      ..writeln()
      ..writeln('SENDER')
      ..writeln('Name: ${senderName.isEmpty ? '—' : senderName}')
      ..writeln('Phone: ${senderPhone.isEmpty ? '—' : senderPhone}');
    if (senderEmail.isNotEmpty) buf.writeln('Email: $senderEmail');
    buf
      ..writeln()
      ..writeln('RECEIVER')
      ..writeln('Full name: $receiverName')
      ..writeln('Phone: $receiverPhone')
      ..writeln('Destination country: $receiverCountry')
      ..writeln()
      ..writeln('TRANSFER SUMMARY')
      ..writeln('Transfer amount: \$${transferAmount.toStringAsFixed(2)}')
      ..writeln('$feeDescription: \$${serviceFee.toStringAsFixed(2)}')
      ..writeln('Recipient receives: \$${recipientGets.toStringAsFixed(2)}');
    if (fx != null) buf.writeln('$localCurrencyLabel: $localCurrencyValue');
    buf
      ..writeln()
      ..writeln('This is a fee quote from NGMY Help Center.')
      ..writeln('NGMY.ORG');
    return buf.toString().trim();
  }
}
