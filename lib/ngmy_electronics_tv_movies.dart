import 'package:flutter/material.dart';

import 'ngmy_ads3d.dart';

// The adverts of the lab TV channels. They are the same real looking NGMY commercials as the NGMY Ads app (a phone in
// a studio, a 3D hero object and an end card), drawn in ngmy_ads3d.dart.

/// Which NGMY ad each TV advert plays: 0 Construction Lab, 1 Electronics Lab, 2 Advisors, 3 Game Center,
/// 4 Civic Registry, 5 Creator Hub, 6 Business Cards, 7 Store.
const List<int> _kTvAdToAd3D = [11, 9, 10, 8, 0, 12, 13, 2];

/// The NGMY ad (an index into kNgmyAds3D) that TV advert [ad] plays.
int ngmyTvAdSpecIndex(int ad) => _kTvAdToAd3D[ad.clamp(0, _kTvAdToAd3D.length - 1)];

/// One frame of TV advert [ad] at the running time [t]. Each advert is ten seconds, then it plays again.
void paintNgmyTvAd(Canvas c, Size s, int ad, double t, {NgmyAdTap? tap}) {
  paintNgmyAd3D(c, s, ngmyTvAdSpecIndex(ad), t % kNgmyAdLength, tap: tap);
}
