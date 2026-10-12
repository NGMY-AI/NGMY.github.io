/**
 * NGMY voice capture — records the microphone straight from the browser's
 * audio system (no speech-recognition service), shows a live level, and hands
 * back a small 16 kHz WAV for the AI to transcribe. Works in Chrome, Edge,
 * Safari and on iPhone.
 */
(function () {
  let ctx = null;
  let stream = null;
  let source = null;
  let proc = null;
  let chunks = [];
  let rate = 48000;
  let onLevel = null;

  function teardown() {
    try {
      if (proc) proc.disconnect();
    } catch (_) {}
    try {
      if (source) source.disconnect();
    } catch (_) {}
    if (stream) stream.getTracks().forEach((t) => t.stop());
    if (ctx) ctx.close().catch(() => {});
    ctx = null;
    stream = null;
    source = null;
    proc = null;
    onLevel = null;
  }

  async function start(levelCallback) {
    teardown();
    chunks = [];
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('not-supported');
    }
    // Create + resume the audio context first, while we're still inside the tap.
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) throw new Error('not-supported');
    ctx = new AC();
    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch (_) {}
    }
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
    } catch (e) {
      teardown();
      throw new Error((e && e.name) || 'not-allowed');
    }
    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch (_) {}
    }
    rate = ctx.sampleRate;
    onLevel = levelCallback || null;
    source = ctx.createMediaStreamSource(stream);
    proc = ctx.createScriptProcessor(4096, 1, 1);
    proc.onaudioprocess = (e) => {
      const d = e.inputBuffer.getChannelData(0);
      chunks.push(new Float32Array(d));
      if (onLevel) {
        let peak = 0;
        for (let i = 0; i < d.length; i += 8) {
          const v = Math.abs(d[i]);
          if (v > peak) peak = v;
        }
        try {
          onLevel(Math.min(1, peak * 1.8));
        } catch (_) {}
      }
    };
    source.connect(proc);
    proc.connect(ctx.destination);
    return true;
  }

  function downsample(pcm, from, to) {
    if (from === to) return pcm;
    const ratio = from / to;
    const out = new Float32Array(Math.floor(pcm.length / ratio));
    for (let i = 0; i < out.length; i++) {
      const start = Math.floor(i * ratio);
      const end = Math.min(pcm.length, Math.floor((i + 1) * ratio));
      let sum = 0;
      for (let j = start; j < end; j++) sum += pcm[j];
      out[i] = sum / Math.max(1, end - start);
    }
    return out;
  }

  function wav(samples, sampleRate) {
    const buf = new ArrayBuffer(44 + samples.length * 2);
    const v = new DataView(buf);
    const str = (o, s) => {
      for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i));
    };
    str(0, 'RIFF');
    v.setUint32(4, 36 + samples.length * 2, true);
    str(8, 'WAVE');
    str(12, 'fmt ');
    v.setUint32(16, 16, true);
    v.setUint16(20, 1, true);
    v.setUint16(22, 1, true);
    v.setUint32(24, sampleRate, true);
    v.setUint32(28, sampleRate * 2, true);
    v.setUint16(32, 2, true);
    v.setUint16(34, 16, true);
    str(36, 'data');
    v.setUint32(40, samples.length * 2, true);
    let o = 44;
    for (let i = 0; i < samples.length; i++, o += 2) {
      const s = Math.max(-1, Math.min(1, samples[i]));
      v.setInt16(o, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return new Uint8Array(buf);
  }

  function toBase64(bytes) {
    let bin = '';
    const step = 0x8000;
    for (let i = 0; i < bytes.length; i += step) {
      bin += String.fromCharCode.apply(null, bytes.subarray(i, i + step));
    }
    return btoa(bin);
  }

  async function stop() {
    const sampleRate = rate;
    const parts = chunks;
    chunks = [];
    teardown();
    let total = 0;
    for (const p of parts) total += p.length;
    const pcm = new Float32Array(total);
    let off = 0;
    for (const p of parts) {
      pcm.set(p, off);
      off += p.length;
    }
    const seconds = total / sampleRate;
    if (seconds < 0.3) return { b64: '', mime: 'audio/wav', seconds };
    const bytes = wav(downsample(pcm, sampleRate, 16000), 16000);
    return { b64: toBase64(bytes), mime: 'audio/wav', seconds };
  }

  window.ngmyVoiceCapture = {
    start,
    stop,
    cancel: teardown,
    supported: () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
  };
})();
