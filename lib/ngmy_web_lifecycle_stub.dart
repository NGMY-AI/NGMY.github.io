/// Registers a callback when the page is hidden or the user leaves (non-web: no-op).
void ngmyRegisterPageHiddenHandler(void Function() onHidden) {}

/// Registers a callback when the page becomes visible again (non-web: no-op).
void ngmyRegisterPageVisibleHandler(void Function() onVisible) {}
