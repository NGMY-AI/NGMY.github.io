# Income / cash sound

When a signed-in user **receives money** (clock-in payout, approved deposit, admin credit, etc.), the app plays a short cash sound.

## Add your audio

Copy your file here using **one** of these names:

| File name | Format |
|-----------|--------|
| `income_cash.mp3` | Recommended |
| `income_cash.wav` | OK |
| `income_cash.ogg` | OK |
| `income_cash.m4a` | OK |

**Example:** save your recording as:

```
assets/sounds/income_cash.mp3
```

Then rebuild and redeploy the web app (`.\publish-web.ps1`).

## Tips

- Keep it **short** (0.3–1.5 seconds) so repeated earnings do not feel noisy.
- Normalize volume; very loud files can startle users.
- Until a file is added, the app uses a brief system click on mobile only (no custom sound on web).

## Disable sound (optional)

Users can turn income sounds off in code via `NgmyIncomeSound.setEnabled(false)` — a Profile toggle can be added later if you want.
