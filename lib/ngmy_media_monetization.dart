/// Optional link, video preview limit, pay-to-continue, and watch-to-earn on media posts.
class NgmyMediaMonetization {
  const NgmyMediaMonetization({
    this.externalLink = '',
    this.previewSeconds = 0,
    this.continuePrice = 0,
    this.watchReward = 0,
    this.watchRequiredSeconds = 0,
    this.rewardedViewers = const [],
  });

  final String externalLink;
  final int previewSeconds;
  final double continuePrice;
  final double watchReward;
  final int watchRequiredSeconds;
  final List<String> rewardedViewers;

  bool get hasLink => externalLink.trim().isNotEmpty;
  bool get hasPreviewLimit => previewSeconds > 0;
  bool get hasPayToContinue => continuePrice > 0;
  bool get hasWatchReward => watchReward > 0 && watchRequiredSeconds > 0 && hasLink;

  static NgmyMediaMonetization fromJson(Map<String, dynamic> json) {
    final nested = json['monetization'];
    final Map<String, dynamic> m = nested is Map ? Map<String, dynamic>.from(nested) : json;
    return NgmyMediaMonetization(
      externalLink: (m['externalLink'] ?? m['linkUrl'] ?? '').toString().trim(),
      previewSeconds: (m['previewSeconds'] as num?)?.toInt() ?? 0,
      continuePrice: (m['continuePrice'] as num?)?.toDouble() ?? 0,
      watchReward: (m['watchReward'] as num?)?.toDouble() ?? 0,
      watchRequiredSeconds: (m['watchRequiredSeconds'] as num?)?.toInt() ?? 0,
      rewardedViewers: List<String>.from(m['rewardedViewers'] ?? m['rewarded_viewers'] ?? const []),
    );
  }

  Map<String, dynamic> toJson() => {
        'externalLink': externalLink,
        'previewSeconds': previewSeconds,
        'continuePrice': continuePrice,
        'watchReward': watchReward,
        'watchRequiredSeconds': watchRequiredSeconds,
        'rewardedViewers': rewardedViewers,
      };

  void applyTo(Map<String, dynamic> row) {
    row['monetization'] = toJson();
    row['externalLink'] = externalLink;
    row['previewSeconds'] = previewSeconds;
    row['continuePrice'] = continuePrice;
    row['watchReward'] = watchReward;
    row['watchRequiredSeconds'] = watchRequiredSeconds;
    row['rewardedViewers'] = rewardedViewers;
  }

  static void mergeIntoPostFields(Map<String, dynamic> target, NgmyMediaMonetization m) {
    m.applyTo(target);
  }

  bool hasClaimed(String email) {
    final key = email.toLowerCase().trim();
    return rewardedViewers.any((e) => e.toLowerCase().trim() == key);
  }

  String scheduleLabel() {
    if (hasWatchReward) {
      return 'Earn \$${watchReward.toStringAsFixed(2)} after ${watchRequiredSeconds}s on link';
    }
    if (hasPreviewLimit) return 'Preview ${previewSeconds}s';
    if (hasLink) return 'Link attached';
    return '';
  }
}
