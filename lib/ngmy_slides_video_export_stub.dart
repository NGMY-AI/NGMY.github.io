import 'package:flutter/widgets.dart';

import 'ngmy_slides_models.dart';

/// Recording a slide video needs the browser, so on other platforms this only says so.
/// Returns a message to show, or null when the video was saved.
Future<String?> ngmyExportSlidesVideo(BuildContext context, NgmySlideDeck deck) async =>
    'Downloading the slides as a video works in the web app.';
