#!/usr/bin/env python3
"""Download Twemoji PNGs used by NgmyOfflineEmoji (notes + language flags)."""
from __future__ import annotations

import pathlib
import urllib.error
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'twemoji'
BASE = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72'

# Notes picker + templates + language flags.
EMOJIS = [
    '😀', '😊', '🙂', '😎', '🤩', '🥳', '😍', '🤔', '😴', '👍', '👏', '🙌', '💪', '🔥', '⭐', '✨',
    '📋', '📊', '📈', '💼', '🤝', '🎯', '✅', '📌', '🗂️', '📎', '💡', '🚀', '⏰', '📞', '✉️', '🏢',
    '❤️', '🏠', '🍳', '✈️', '🎉', '🎓', '📚', '💰', '🛒', '🎵', '🎮', '☕', '🌿', '🌞', '🌙', '🎁',
    '🎨', '🍒', '🍊', '🌞', '🍏', '🌿', '🌊', '🩵', '🐬', '🍇', '🍬', '🍫', '⛄', '🖤', '🪣', '🖌️', '✨',
]


def names_for(emoji: str) -> list[str]:
    runes = [ord(c) for c in emoji]
    full = '-'.join(f'{r:x}' for r in runes)
    no_vs = '-'.join(f'{r:x}' for r in runes if r != 0xFE0F)
    out = []
    if full:
        out.append(full)
    if no_vs and no_vs != full:
        out.append(no_vs)
    return out


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    ok = 0
    for emoji in EMOJIS:
        for name in names_for(emoji):
            dest = OUT / f'{name}.png'
            if dest.exists() and dest.stat().st_size > 0:
                ok += 1
                continue
            url = f'{BASE}/{name}.png'
            try:
                with urllib.request.urlopen(url, timeout=30) as resp:
                    data = resp.read()
                if len(data) < 32:
                    print('skip tiny', name)
                    continue
                dest.write_bytes(data)
                print('ok', name, emoji)
                ok += 1
            except urllib.error.HTTPError as e:
                print('miss', name, emoji, e.code)
            except Exception as e:  # noqa: BLE001
                print('err', name, emoji, e)
    print(f'done — {ok} files in {OUT}')


if __name__ == '__main__':
    main()
