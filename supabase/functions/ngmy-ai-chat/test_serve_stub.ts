// Test only: stands in for the web server so a test can call the Edge Function's handler directly, with no network port.
export function serve(handler: (req: Request) => Promise<Response> | Response): void {
  (globalThis as Record<string, unknown>).__edgeHandler = handler;
}
