// NGMY Agent Cursor — draws a pointer that follows the agent's clicks / focus / typing,
// so the user watching the live view can see what the advisor is doing.
(() => {
  if (window.__ngmyCursor) return;
  window.__ngmyCursor = true;

  let host, pointer, tag, x = 40, y = 40, tagTimer = 0;

  function mount() {
    if (host || !document.documentElement) return;
    host = document.createElement('div');
    host.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483647;';
    const root = host.attachShadow({ mode: 'closed' });
    root.innerHTML = `
      <style>
        .p{position:fixed;left:0;top:0;width:26px;height:26px;transform:translate(40px,40px);
           transition:transform .35s cubic-bezier(.2,.8,.2,1);filter:drop-shadow(0 2px 3px rgba(0,0,0,.45));}
        .r{position:fixed;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;
           border:3px solid #3b82f6;animation:r .6s ease-out forwards;}
        @keyframes r{from{transform:scale(.3);opacity:1}to{transform:scale(1.6);opacity:0}}
        .t{position:fixed;left:0;top:0;padding:3px 8px;border-radius:999px;background:#3b82f6;color:#fff;
           font:600 12px system-ui,sans-serif;opacity:0;transition:opacity .2s, transform .35s cubic-bezier(.2,.8,.2,1);}
      </style>
      <svg class="p" viewBox="0 0 24 24"><path d="M3 2l7.5 19 2.4-7.6L20.5 11z" fill="#fff" stroke="#111" stroke-width="1.6" stroke-linejoin="round"/></svg>
      <div class="t">typing…</div>`;
    pointer = root.querySelector('.p');
    tag = root.querySelector('.t');
    host.__root = root;
    (document.body || document.documentElement).appendChild(host);
  }

  function move(nx, ny) {
    mount();
    if (!pointer || !Number.isFinite(nx) || !Number.isFinite(ny)) return;
    x = nx; y = ny;
    pointer.style.transform = `translate(${x - 3}px,${y - 2}px)`;
    tag.style.transform = `translate(${x + 18}px,${y + 18}px)`;
  }

  function ripple(rx, ry) {
    mount();
    if (!host) return;
    const r = document.createElement('div');
    r.className = 'r';
    r.style.left = rx + 'px';
    r.style.top = ry + 'px';
    host.__root.appendChild(r);
    setTimeout(() => r.remove(), 650);
  }

  function centerOf(el) {
    if (!el || !el.getBoundingClientRect) return null;
    const b = el.getBoundingClientRect();
    if (!b.width && !b.height) return null;
    return { x: b.left + Math.min(24, b.width / 2), y: b.top + b.height / 2 };
  }

  function pointFrom(e) {
    if (e.isTrusted && (e.clientX || e.clientY)) return { x: e.clientX, y: e.clientY };
    return centerOf(e.target);
  }

  addEventListener('mousemove', (e) => { if (e.clientX || e.clientY) move(e.clientX, e.clientY); }, true);
  addEventListener('mousedown', (e) => { const p = pointFrom(e); if (p) { move(p.x, p.y); ripple(p.x, p.y); } }, true);
  addEventListener('click', (e) => {
    if (e.clientX || e.clientY) return; // real mouse clicks already handled by mousedown
    const p = centerOf(e.target);
    if (p) { move(p.x, p.y); ripple(p.x, p.y); }
  }, true);
  addEventListener('focusin', (e) => {
    const t = e.target;
    if (!t || !/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) && !t.isContentEditable) return;
    const p = centerOf(t);
    if (p) move(p.x, p.y);
  }, true);
  const typing = () => {
    mount();
    if (!tag) return;
    const p = centerOf(document.activeElement);
    if (p) move(p.x, p.y);
    tag.style.opacity = '1';
    clearTimeout(tagTimer);
    tagTimer = setTimeout(() => { tag.style.opacity = '0'; }, 900);
  };
  addEventListener('input', typing, true);
  addEventListener('keydown', typing, true);
  document.addEventListener('DOMContentLoaded', mount);
})();
