import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bio_urls.dart';
import 'package:ngmy/ngmy_cloud_policy.dart';
import 'package:ngmy/ngmy_web_api_base.dart';

void main() {
  group('ngmyWebApiBasePath', () {
    test('home stays at site root so /api/sync is not nested', () {
      expect(ngmyWebApiBasePath('/'), '');
      expect(ngmyWebApiBasePath(''), '');
      expect(ngmyWebApiBasePath('/index.html'), '');
    });

    test('a published bio URL must still call /api/sync at the site root', () {
      expect(ngmyWebApiBasePath('/bio/kbpablo'), '');
      expect(ngmyWebApiBasePath('/bio/12kbpabloq'), '');
      expect(ngmyWebApiBasePath('/bio/kbpablo/'), '');
    });

    test('other guest deep links also strip down to the site root', () {
      expect(ngmyWebApiBasePath('/menu/lunch'), '');
      expect(ngmyWebApiBasePath('/local-bio/ana'), '');
      expect(ngmyWebApiBasePath('/invoice/abc'), '');
    });

    test('GitHub project pages keep /NGMY.github.io and drop /bio/slug', () {
      expect(ngmyWebApiBasePath('/NGMY.github.io'), '/NGMY.github.io');
      expect(ngmyWebApiBasePath('/NGMY.github.io/'), '/NGMY.github.io');
      expect(ngmyWebApiBasePath('/NGMY.github.io/bio/kbpablo'), '/NGMY.github.io');
    });
  });

  group('published bio slug', () {
    test('public URL uses a 200 homepage query so Instagram can open it', () {
      expect(ngmyBioPublicUrlForSlug('KBPablo'), 'https://ngmy.org/?b=kbpablo');
      expect(ngmyBioPublicUrlForSlug('https://ngmy.org/bio/kbpablo'), 'https://ngmy.org/?b=kbpablo');
      expect(ngmyBioPublicUrlForSlug('https://ngmy.org/?b=kbpablo'), 'https://ngmy.org/?b=kbpablo');
    });

    test('digits after letters are dropped so URL and stored key stay aligned', () {
      expect(ngmySanitizeBioSlug('MyBio123'), 'mybio');
      expect(ngmySanitizeBioSlug('12kbpablo'), '12kbpablo');
      expect(ngmySanitizeBioSlug('https://ngmy.org/?b=kbpablo'), 'kbpablo');
    });
  });

  group('bio publish cloud policy', () {
    test('per-slug bio keys stay public even if the slug contains email', () {
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_bio_pub_emailme'), isTrue);
      expect(NgmyCloudPolicy.allowNgmySettingsKey('ngmy_bio_pub_kbpablo'), isTrue);
      expect(NgmyCloudPolicy.settingsKeyPublicReadable('ngmy_bio_publish_registry'), isTrue);
    });
  });
}
