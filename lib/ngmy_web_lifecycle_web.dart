import 'dart:html' as html;

/// Saves session/data when the user switches tabs, minimizes, or closes the page.
void ngmyRegisterPageHiddenHandler(void Function() onHidden) {
  html.document.onVisibilityChange.listen((_) {
    if (html.document.visibilityState == 'hidden') {
      onHidden();
    }
  });
  html.window.onPageHide.listen((_) => onHidden());
}

/// Fires when the user returns to the NGMY tab (fixes blank home after backgrounding on web/PWA).
void ngmyRegisterPageVisibleHandler(void Function() onVisible) {
  html.document.onVisibilityChange.listen((_) {
    if (html.document.visibilityState == 'visible') {
      onVisible();
    }
  });
  html.window.onPageShow.listen((_) => onVisible());
}
