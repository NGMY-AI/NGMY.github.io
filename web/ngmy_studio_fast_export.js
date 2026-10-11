/**
 * NGMY Video Studio — fast template export via WebCodecs + mp4-muxer.
 * Used for long clips on desktop; phones under 2 min use smooth real-time export.
 */
import { Muxer, ArrayBufferTarget } from 'https://cdn.jsdelivr.net/npm/mp4-muxer@5.1.3/+esm';

function supported() {
  try {
    return (
      typeof VideoEncoder !== 'undefined' &&
      typeof VideoFrame !== 'undefined' &&
      typeof AudioEncoder !== 'undefined'
    );
  } catch (_) {
    return false;
  }
}

async function pickVideoCodec(width, height, fps) {
  const candidates = ['avc1.42E01E', 'avc1.4D401E', 'avc1.64001E'];
  for (const codec of candidates) {
    try {
      const result = await VideoEncoder.isConfigSupported({
        codec,
        width,
        height,
        bitrate: 10_000_000,
        framerate: fps,
      });
      if (result.supported) return codec;
    } catch (_) {}
  }
  return null;
}

async function decodeAudioBuffer(src) {
  if (!src || !src.trim()) return null;
  let buffer;
  try {
    const resp = await fetch(src);
    buffer = await resp.arrayBuffer();
  } catch (e) {
    void ('[ngmy fast export] audio fetch failed', e);
    return null;
  }
  if (!buffer || buffer.byteLength === 0) return null;
  const decodeCtx = new AudioContext();
  try {
    const audioBuffer = await decodeCtx.decodeAudioData(buffer.slice(0));
    try {
      await decodeCtx.close();
    } catch (_) {}
    return audioBuffer;
  } catch (e) {
    void ('[ngmy fast export] audio decode failed', e);
    try {
      await decodeCtx.close();
    } catch (_) {}
    return null;
  }
}

async function encodeAudioTrack(muxer, audioBuffer, videoDurationSec, onProgress) {
  if (!audioBuffer) return false;
  const targetRate = 48000;
  const channels = Math.min(2, audioBuffer.numberOfChannels || 1);
  const audioDurationSec = Math.min(
    audioBuffer.duration > 0 ? audioBuffer.duration : videoDurationSec,
    videoDurationSec > 0 ? videoDurationSec : audioBuffer.duration,
  );
  let pcmBuffer = audioBuffer;
  if (audioBuffer.sampleRate !== targetRate) {
    try {
      const frames = Math.ceil(audioDurationSec * targetRate);
      const offline = new OfflineAudioContext(channels, frames, targetRate);
      const srcNode = offline.createBufferSource();
      srcNode.buffer = audioBuffer;
      srcNode.connect(offline.destination);
      srcNode.start(0);
      pcmBuffer = await offline.startRendering();
    } catch (e) {
      void ('[ngmy fast export] audio resample failed', e);
      return false;
    }
  }

  let audioConfigured = false;
  const audioEncoder = new AudioEncoder({
    output: (chunk, meta) => {
      if (audioConfigured) muxer.addAudioChunk(chunk, meta);
    },
    error: (e) => void ('[ngmy fast export] audio encoder', e),
  });

  try {
    const cfg = await AudioEncoder.isConfigSupported({
      codec: 'mp4a.40.2',
      sampleRate: targetRate,
      numberOfChannels: channels,
      bitrate: 256_000,
    });
    if (!cfg.supported) return false;
    audioEncoder.configure({
      codec: 'mp4a.40.2',
      sampleRate: targetRate,
      numberOfChannels: channels,
      bitrate: 256_000,
    });
    audioConfigured = true;
  } catch (e) {
    void ('[ngmy fast export] audio configure failed', e);
    return false;
  }

  const maxSamples = Math.min(
    pcmBuffer.length,
    Math.ceil(Math.max(0.1, audioDurationSec) * targetRate),
  );
  const chunkSize = 2048;
  for (let offset = 0; offset < maxSamples; offset += chunkSize) {
    const count = Math.min(chunkSize, maxSamples - offset);
    const interleaved = new Float32Array(count * channels);
    for (let i = 0; i < count; i++) {
      for (let c = 0; c < channels; c++) {
        const ch = pcmBuffer.getChannelData(Math.min(c, pcmBuffer.numberOfChannels - 1));
        interleaved[i * channels + c] = ch[offset + i] || 0;
      }
    }
    const ts = Math.round((offset / targetRate) * 1_000_000);
    try {
      const audioData = new AudioData({
        format: 'f32',
        sampleRate: targetRate,
        numberOfFrames: count,
        numberOfChannels: channels,
        timestamp: ts,
        data: interleaved,
      });
      audioEncoder.encode(audioData);
      audioData.close();
    } catch (e) {
      void ('[ngmy fast export] audio frame', e);
      break;
    }
    if (onProgress && offset % (chunkSize * 16) === 0) {
      onProgress(0.88 + (offset / maxSamples) * 0.08);
    }
  }

  try {
    await audioEncoder.flush();
  } catch (_) {}
  return true;
}

export async function ngmyStudioFastExport(opts) {
  if (!supported()) throw new Error('WebCodecs unavailable');

  const canvas = opts.canvas;
  const width = opts.width | 0;
  const height = opts.height | 0;
  const durationSec = Math.max(0.4, Number(opts.durationSec) || 3);
  const fps = Math.max(24, Math.min(30, Number(opts.fps) || 30));
  const seekPaintAsync = opts.seekPaintAsync;
  if (!canvas || !seekPaintAsync) throw new Error('invalid fast export args');

  const codec = await pickVideoCodec(width, height, fps);
  if (!codec) throw new Error('no avc codec');

  let decodedAudio = null;
  if (opts.videoSrc) {
    decodedAudio = await decodeAudioBuffer(opts.videoSrc);
  }

  const muxer = new Muxer({
    target: new ArrayBufferTarget(),
    video: { codec: 'avc', width, height, frameRate: fps },
    audio: decodedAudio
      ? { codec: 'aac', sampleRate: 48000, numberOfChannels: Math.min(2, decodedAudio.numberOfChannels || 1) }
      : undefined,
    fastStart: 'in-memory',
  });

  let muxReady = false;
  const videoEncoder = new VideoEncoder({
    output: (chunk, meta) => {
      if (muxReady) muxer.addVideoChunk(chunk, meta);
    },
    error: (e) => {
      throw e;
    },
  });

  videoEncoder.configure({
    codec,
    width,
    height,
    bitrate: 10_000_000,
    framerate: fps,
  });
  muxReady = true;

  const frameCount = Math.max(1, Math.round(durationSec * fps));
  const frameDurUs = Math.round(1_000_000 / fps);

  for (let i = 0; i < frameCount; i++) {
    const t = Math.min(i / fps, durationSec);
    await seekPaintAsync(t);
    const frame = new VideoFrame(canvas, {
      timestamp: Math.round(i * frameDurUs),
      duration: frameDurUs,
    });
    videoEncoder.encode(frame, { keyFrame: i % (fps * 2) === 0 });
    frame.close();
    if (opts.onProgress && (i === 0 || i % 8 === 0 || i === frameCount - 1)) {
      opts.onProgress(Math.min(0.87, i / frameCount));
    }
  }

  await videoEncoder.flush();

  if (decodedAudio) {
    await encodeAudioTrack(muxer, decodedAudio, durationSec, opts.onProgress);
  }

  muxer.finalize();
  const buffer = muxer.target.buffer;
  if (!buffer || buffer.byteLength === 0) throw new Error('empty mux');
  return new Blob([buffer], { type: 'video/mp4' });
}

export function ngmyStudioFastExportSupported() {
  return supported();
}

window.ngmyStudioFastExport = ngmyStudioFastExport;
window.ngmyStudioFastExportSupported = ngmyStudioFastExportSupported;

// ── Media-time export ───────────────────────────────────────────────────────
// Every frame is stamped with the clip's own clock (requestVideoFrameCallback
// mediaTime), never wall time. A slow phone can drop frames, but the file
// never plays too fast, too slow, or freezes while the sound keeps going.
// Sound comes straight from the file with exact timestamps, so it stays in sync.

function mediaTimeSupported() {
  try {
    return (
      supported() &&
      typeof HTMLVideoElement !== 'undefined' &&
      'requestVideoFrameCallback' in HTMLVideoElement.prototype
    );
  } catch (_) {
    return false;
  }
}

async function pickAudioCodec(channels) {
  const options = [
    { mux: 'aac', codec: 'mp4a.40.2' },
    { mux: 'opus', codec: 'opus' },
  ];
  for (const o of options) {
    try {
      const r = await AudioEncoder.isConfigSupported({
        codec: o.codec,
        sampleRate: 48000,
        numberOfChannels: channels,
        bitrate: 192_000,
      });
      if (r.supported) return o;
    } catch (_) {}
  }
  return null;
}

function seekTo(v, t) {
  return new Promise((resolve) => {
    if (Math.abs(v.currentTime - t) < 0.001 && v.readyState >= 2) return resolve();
    const done = () => {
      v.removeEventListener('seeked', done);
      resolve();
    };
    v.addEventListener('seeked', done);
    try {
      v.currentTime = t;
    } catch (_) {
      resolve();
    }
    setTimeout(done, 4000);
  });
}

async function resampleTo48k(audioBuffer, durationSec, channels) {
  if (audioBuffer.sampleRate === 48000) return audioBuffer;
  const frames = Math.max(1, Math.ceil(durationSec * 48000));
  const offline = new OfflineAudioContext(channels, frames, 48000);
  const node = offline.createBufferSource();
  node.buffer = audioBuffer;
  node.connect(offline.destination);
  node.start(0);
  return offline.startRendering();
}

async function encodePcm(muxer, codec, pcm, channels, durationSec) {
  let failed = null;
  const enc = new AudioEncoder({
    output: (chunk, meta) => muxer.addAudioChunk(chunk, meta),
    error: (e) => {
      failed = e;
    },
  });
  enc.configure({ codec, sampleRate: 48000, numberOfChannels: channels, bitrate: 192_000 });
  const total = Math.min(pcm.length, Math.ceil(durationSec * 48000));
  const chunk = 4096;
  const data = [];
  for (let c = 0; c < channels; c++) data.push(pcm.getChannelData(Math.min(c, pcm.numberOfChannels - 1)));
  for (let off = 0; off < total && !failed; off += chunk) {
    const n = Math.min(chunk, total - off);
    const planar = new Float32Array(n * channels);
    for (let c = 0; c < channels; c++) planar.set(data[c].subarray(off, off + n), c * n);
    const ad = new AudioData({
      format: 'f32-planar',
      sampleRate: 48000,
      numberOfFrames: n,
      numberOfChannels: channels,
      timestamp: Math.round((off / 48000) * 1_000_000),
      data: planar,
    });
    enc.encode(ad);
    ad.close();
    if (enc.encodeQueueSize > 32) await new Promise((r) => setTimeout(r, 0));
  }
  await enc.flush();
  enc.close();
  if (failed) throw failed;
}

export async function ngmyStudioMediaTimeExport(o) {
  if (!mediaTimeSupported()) throw new Error('media-time export unavailable');
  const canvas = o.canvas;
  const video = o.video;
  const others = (o.others || []).filter((v) => v && v !== video);
  const paint = o.paint;
  const width = o.width | 0;
  const height = o.height | 0;
  const fps = Math.max(24, Math.min(30, Number(o.fps) || 30));
  const onProgress = o.onProgress || (() => {});
  const isCancelled = o.isCancelled || (() => false);
  if (!canvas || !video || !paint || !width || !height) throw new Error('invalid export args');
  const durationSec = Math.max(0.4, Number(o.durationSec) || video.duration || 1);

  const vCodec = await pickVideoCodec(width, height, fps);
  if (!vCodec) throw new Error('no H.264 encoder');

  // Sound: decode the original file once. If the clip has sound we can't encode, give up
  // so the caller uses the live recorder instead of saving a silent video.
  let audio = null;
  let aCodec = null;
  let channels = 2;
  if (o.audioSrc) {
    const decoded = await decodeAudioBuffer(o.audioSrc);
    if (decoded && decoded.duration > 0.05) {
      channels = Math.min(2, decoded.numberOfChannels || 1);
      aCodec = await pickAudioCodec(channels);
      if (!aCodec) throw new Error('no audio encoder');
      audio = await resampleTo48k(decoded, Math.min(decoded.duration, durationSec), channels);
    }
  }

  const muxer = new Muxer({
    target: new ArrayBufferTarget(),
    video: { codec: 'avc', width, height, frameRate: fps },
    audio: audio ? { codec: aCodec.mux, sampleRate: 48000, numberOfChannels: channels } : undefined,
    fastStart: 'in-memory',
    firstTimestampBehavior: 'offset',
  });

  let encoderError = null;
  const encoder = new VideoEncoder({
    output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
    error: (e) => {
      encoderError = e;
    },
  });
  encoder.configure({ codec: vCodec, width, height, bitrate: o.bitrate || 8_000_000, framerate: fps });

  const all = [video, ...others];
  for (const v of all) {
    v.muted = true;
    v.playbackRate = 1;
    v.pause();
  }
  await Promise.all(all.map((v) => seekTo(v, 0)));

  const frameUs = Math.round(1_000_000 / fps);
  const minGapUs = frameUs - 2000;
  let lastTs = -1;
  let frames = 0;
  // Slow phone: play the clip slower so every frame still gets captured.
  // Timestamps come from the clip, so the saved video keeps its real speed.
  let rate = 1;
  let smoothRun = 0;
  const setRate = (r) => {
    rate = r;
    for (const v of all) v.playbackRate = r;
  };
  let lastFrameWall = performance.now();

  await new Promise((resolve, reject) => {
    let finished = false;
    let waiting = false;
    let watchdog = null;
    const finish = (err) => {
      if (finished) return;
      finished = true;
      if (watchdog) clearInterval(watchdog);
      video.removeEventListener('ended', onEnded);
      for (const v of all) v.pause();
      if (err) reject(err);
      else resolve();
    };
    const onEnded = () => setTimeout(() => finish(), 120);
    const playAll = () => {
      for (const v of all) {
        if (!v.ended) v.play().catch(() => {});
      }
    };
    const drainThenPlay = () => {
      if (finished) return;
      if (encoder.encodeQueueSize > 2) {
        setTimeout(drainThenPlay, 15);
        return;
      }
      waiting = false;
      playAll();
    };
    const onFrame = (_now, meta) => {
      if (finished) return;
      if (isCancelled()) return finish(new Error('cancelled'));
      if (encoderError) return finish(encoderError);
      lastFrameWall = performance.now();
      const t = meta.mediaTime;
      // Keep other screens in step with the main clip.
      for (const v of others) {
        if (!v.ended && Math.abs(v.currentTime - t) > 0.3) {
          try {
            v.currentTime = t;
          } catch (_) {}
        }
      }
      const ts = Math.round(t * 1_000_000);
      if (lastTs >= 0) {
        const gap = ts - lastTs;
        if (gap > frameUs * 1.6 && rate > 0.25) {
          smoothRun = 0;
          setRate(Math.max(0.25, rate * 0.75));
        } else if (gap < frameUs * 1.2 && rate < 1 && ++smoothRun > fps) {
          smoothRun = 0;
          setRate(Math.min(1, rate * 1.15));
        }
      }
      if (lastTs < 0 || ts - lastTs >= minGapUs) {
        try {
          paint();
          const frame = new VideoFrame(canvas, { timestamp: ts, duration: Math.round(1_000_000 / fps) });
          encoder.encode(frame, { keyFrame: frames % (fps * 2) === 0 });
          frame.close();
          frames++;
          lastTs = ts;
        } catch (e) {
          return finish(e);
        }
      }
      onProgress(Math.min(0.85, (t / durationSec) * 0.85));
      if (t >= durationSec - 0.03) return finish();
      video.requestVideoFrameCallback(onFrame);
      // Encoder falling behind: pause and let it catch up. Time comes from the clip, so pausing is harmless.
      if (!waiting && encoder.encodeQueueSize > 6) {
        waiting = true;
        for (const v of all) v.pause();
        drainThenPlay();
      }
    };
    watchdog = setInterval(() => {
      if (isCancelled()) return finish(new Error('cancelled'));
      if (!waiting && performance.now() - lastFrameWall > 15000) {
        finish(frames > 0 && lastTs / 1_000_000 >= durationSec - 0.5 ? null : new Error('video stalled'));
        return;
      }
      if (!waiting && video.paused && !video.ended) playAll();
    }, 1000);
    video.addEventListener('ended', onEnded);
    video.requestVideoFrameCallback(onFrame);
    playAll();
  });

  await encoder.flush();
  encoder.close();
  if (frames < 2) throw new Error('no frames captured');
  onProgress(0.88);
  if (audio) await encodePcm(muxer, aCodec.codec, audio, channels, durationSec);
  onProgress(0.97);
  muxer.finalize();
  const buffer = muxer.target.buffer;
  if (!buffer || buffer.byteLength === 0) throw new Error('empty file');
  return new Blob([buffer], { type: 'video/mp4' });
}

window.ngmyStudioMediaTimeExport = ngmyStudioMediaTimeExport;
window.ngmyStudioMediaTimeExportSupported = mediaTimeSupported;
