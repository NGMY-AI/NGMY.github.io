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
