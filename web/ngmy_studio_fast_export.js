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
  // Level 3.0 only covers ~720x480 — phones (Safari) refuse it for HD/portrait
  // 1080x1920, so try levels that fit the frame first.
  const big = width * height > 414720;
  const candidates = big
    ? ['avc1.640028', 'avc1.4D4028', 'avc1.42E028', 'avc1.640033', 'avc1.42E01F']
    : ['avc1.42E01F', 'avc1.42E01E', 'avc1.4D401F', 'avc1.64001F'];
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
    // No copy: a second full copy of a long clip can run a phone out of memory.
    const audioBuffer = await decodeCtx.decodeAudioData(buffer);
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
    // Only the video encoder is required — sound is copied from the file
    // (AudioEncoder is optional, used only when copying isn't possible).
    return (
      typeof VideoEncoder !== 'undefined' &&
      typeof VideoFrame !== 'undefined' &&
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

  // 1) Picture first. Encoded pieces are kept aside and the file is assembled at
  //    the end — reading the sound needs the whole clip in memory, and doing that
  //    while the phone is decoding video starves the decoder (the picture stalls).
  const videoChunks = [];
  let encoderError = null;
  const encoder = new VideoEncoder({
    output: (chunk, meta) => videoChunks.push({ chunk, meta }),
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
  // Phones stall if the clip plays faster than normal, so only computers speed up.
  const maxRate = Math.max(1, Math.min(2, Number(o.maxRate) || 1));
  let rate = 1;
  let smoothRun = 0;
  let lastResync = 0;
  let lastPresented = 0;
  let lastTs = -1;
  let frames = 0;
  let rvfcFrames = 0;
  let pollFrames = 0;
  let lastCaptureWall = performance.now();
  let lastRvfcWall = 0;
  let lastClockT = -1;
  let lastClockMoveWall = performance.now();
  const setRate = (r) => {
    rate = r;
    for (const v of all) v.playbackRate = r;
  };

  await new Promise((resolve, reject) => {
    let finished = false;
    let waiting = false;
    let nudges = 0;
    let watchdog = null;
    let poller = null;
    const finish = (err) => {
      if (finished) return;
      finished = true;
      clearInterval(watchdog);
      clearInterval(poller);
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

    // One frame at clip time t (seconds), from either source.
    const capture = (t) => {
      if (finished) return false;
      if (isCancelled()) {
        finish(new Error('cancelled'));
        return false;
      }
      if (encoderError) {
        finish(encoderError);
        return false;
      }
      const nowWall = performance.now();
      // Keep other screens in step — rarely, since every jump makes the phone re-decode.
      if (nowWall - lastResync > 2000) {
        for (const v of others) {
          if (!v.ended && Math.abs(v.currentTime - t) > 0.6) {
            lastResync = nowWall;
            try {
              v.currentTime = t;
            } catch (_) {}
          }
        }
      }
      const ts = Math.round(t * 1_000_000);
      if (lastTs < 0 || ts - lastTs >= minGapUs) {
        try {
          paint();
          const frame = new VideoFrame(canvas, { timestamp: ts, duration: frameUs });
          encoder.encode(frame, { keyFrame: frames % (fps * 2) === 0 });
          frame.close();
          frames++;
          lastTs = ts;
          lastCaptureWall = nowWall;
          nudges = 0;
        } catch (e) {
          finish(e);
          return false;
        }
      }
      onProgress(Math.min(0.85, (t / durationSec) * 0.85));
      if (t >= durationSec - 0.03) {
        finish();
        return false;
      }
      // Encoder falling behind: pause and let it catch up. Time comes from the clip, so pausing is harmless.
      if (!waiting && encoder.encodeQueueSize > 6) {
        waiting = true;
        for (const v of all) v.pause();
        drainThenPlay();
      }
      return true;
    };

    const onFrame = (_now, meta) => {
      if (finished) return;
      lastRvfcWall = performance.now();
      rvfcFrames++;
      // Falling behind = the browser showed frames we never got to see. (Uneven timing
      // inside phone recordings is normal and doesn't count.)
      const presented = Number(meta.presentedFrames) || 0;
      if (lastPresented > 0 && presented > lastPresented) {
        const missed = presented - lastPresented - 1;
        if (missed >= 2 && rate > 0.4) {
          smoothRun = 0;
          setRate(Math.max(0.4, rate * 0.8));
        } else if (missed === 0 && rate < maxRate && ++smoothRun > fps) {
          smoothRun = 0;
          setRate(Math.min(maxRate, rate * 1.15));
        }
      }
      lastPresented = presented;
      if (capture(meta.mediaTime)) video.requestVideoFrameCallback(onFrame);
    };

    // Backup: if frame reports go quiet while the clip's clock keeps moving, grab
    // frames from the clock instead (some phones stop reporting mid-clip).
    poller = setInterval(() => {
      if (finished || waiting) return;
      const t = video.currentTime;
      if (t !== lastClockT) {
        lastClockT = t;
        lastClockMoveWall = performance.now();
      }
      if (performance.now() - lastRvfcWall < 350) return;
      if (video.paused || video.readyState < 2) return;
      if (lastTs < 0 || Math.round(t * 1_000_000) - lastTs >= minGapUs) {
        if (capture(t)) pollFrames++;
      }
    }, Math.max(20, Math.round(1000 / fps / 1.5)));

    watchdog = setInterval(() => {
      if (finished) return;
      if (isCancelled()) return finish(new Error('cancelled'));
      if (waiting) return;
      const quiet = performance.now() - lastCaptureWall;
      // Nearly done: keep what we have.
      if (quiet > 3000 && frames > 0 && lastTs / 1_000_000 >= durationSec - 0.5) return finish();
      // Stuck: nudge the clip (pause, normal speed, play) instead of giving up.
      if (quiet > 3000 * (nudges + 1) && nudges < 8) {
        nudges++;
        for (const v of all) v.pause();
        setRate(1);
        setTimeout(playAll, 150);
        return;
      }
      if (quiet > 30000) {
        const clockStuck = performance.now() - lastClockMoveWall > 5000;
        finish(
          new Error(
            `video stalled at ${video.currentTime.toFixed(1)}s/${durationSec.toFixed(0)}s, ` +
              `${frames} frames (${rvfcFrames} rv, ${pollFrames} clk), ` +
              `${clockStuck ? 'clip stopped' : 'clip moving'}, ready ${video.readyState}`,
          ),
        );
        return;
      }
      if (video.paused && !video.ended) playAll();
    }, 1000);

    video.addEventListener('ended', onEnded);
    video.requestVideoFrameCallback(onFrame);
    setRate(rate);
    playAll();
  });

  await encoder.flush();
  encoder.close();
  if (frames < 2) throw new Error('no frames captured');
  for (const v of all) {
    v.pause();
    v.playbackRate = 1;
  }

  // 2) Sound, now that the decoder is idle. Copy the clip's AAC as-is when possible.
  onProgress(0.87);
  let audio = null;
  let aCodec = null;
  let channels = 2;
  let pass = null;
  window.__ngmyLastExportSound = o.audioSrc ? 'none: no sound found in clip' : 'none: no clip';
  if (o.audioSrc) {
    pass = await readAacTrack(o.audioSrc, durationSec);
    if (pass) window.__ngmyLastExportSound = 'copied';
    if (!pass && typeof AudioEncoder !== 'undefined') {
      const decoded = await decodeAudioBuffer(o.audioSrc);
      if (!decoded) window.__ngmyLastExportSound = 'none: ' + (_lastAacReadError || 'sound could not be read');
      if (decoded && decoded.duration > 0.05) {
        channels = Math.min(2, decoded.numberOfChannels || 1);
        aCodec = await pickAudioCodec(channels);
        if (aCodec) {
          audio = await resampleTo48k(decoded, Math.min(decoded.duration, durationSec), channels);
          window.__ngmyLastExportSound = 'encoded';
        } else {
          window.__ngmyLastExportSound = 'none: no audio encoder';
        }
      }
    } else if (!pass) {
      window.__ngmyLastExportSound = 'none: ' + (_lastAacReadError || 'sound could not be copied');
    }
  }

  // 3) Assemble the file.
  const muxer = new Muxer({
    target: new ArrayBufferTarget(),
    video: { codec: 'avc', width, height, frameRate: fps },
    audio: pass
      ? { codec: 'aac', sampleRate: pass.sampleRate, numberOfChannels: pass.channels }
      : audio
        ? { codec: aCodec.mux, sampleRate: 48000, numberOfChannels: channels }
        : undefined,
    fastStart: 'in-memory',
    firstTimestampBehavior: 'offset',
  });
  for (const { chunk, meta } of videoChunks) muxer.addVideoChunk(chunk, meta);
  videoChunks.length = 0;
  onProgress(0.9);
  if (pass) {
    pass.chunks.forEach((c, i) => {
      muxer.addAudioChunkRaw(
        c.data,
        'key',
        c.timestamp,
        c.duration,
        i === 0
          ? { decoderConfig: { codec: pass.codec, sampleRate: pass.sampleRate, numberOfChannels: pass.channels, description: pass.description } }
          : undefined,
      );
    });
  } else if (audio) {
    await encodePcm(muxer, aCodec.codec, audio, channels, durationSec);
  }
  onProgress(0.97);
  muxer.finalize();
  const buffer = muxer.target.buffer;
  if (!buffer || buffer.byteLength === 0) throw new Error('empty file');
  return new Blob([buffer], { type: 'video/mp4' });
}

window.ngmyStudioMediaTimeExport = ngmyStudioMediaTimeExport;
window.ngmyStudioMediaTimeExportSupported = mediaTimeSupported;

// ── Sound passthrough ──────────────────────────────────────────────────────
// Phone videos already carry AAC sound. Copy those packets straight into the
// new file — no AudioEncoder needed (older iPhones don't have one), no quality
// loss, and much faster than decoding and re-encoding.

let _mp4boxPromise = null;
let _lastAacReadError = '';
function loadMp4Box() {
  if (!_mp4boxPromise) {
    _mp4boxPromise = import('https://cdn.jsdelivr.net/npm/mp4box@0.5.3/+esm').then((m) => m.default || m);
  }
  return _mp4boxPromise;
}

async function readAacTrack(src, durationSec) {
  _lastAacReadError = '';
  let buffer;
  try {
    buffer = await (await fetch(src)).arrayBuffer();
  } catch (_) {
    _lastAacReadError = 'clip fetch failed';
    return null;
  }
  if (!buffer || buffer.byteLength < 16) {
    _lastAacReadError = 'empty clip';
    return null;
  }
  let MP4Box;
  try {
    MP4Box = await loadMp4Box();
  } catch (_) {
    _lastAacReadError = 'mp4 reader did not load';
    return null;
  }
  return new Promise((resolve) => {
    let settled = false;
    const done = (v) => {
      if (!settled) {
        settled = true;
        resolve(v);
      }
    };
    try {
      const file = MP4Box.createFile();
      let track = null;
      const samples = [];
      file.onError = () => done(null);
      file.onReady = (info) => {
        track = (info.audioTracks || [])[0] || null;
        if (!track) {
          _lastAacReadError = 'clip has no sound track';
          return done(null);
        }
        if (!String(track.codec || '').startsWith('mp4a')) {
          _lastAacReadError = 'sound is ' + track.codec;
          return done(null);
        }
        file.setExtractionOptions(track.id, null, { nbSamples: 1_000_000 });
        file.start();
      };
      file.onSamples = (_id, _user, list) => {
        for (const s of list) samples.push(s);
      };
      buffer.fileStart = 0;
      file.appendBuffer(buffer);
      file.flush();
      setTimeout(() => {
        if (!track || samples.length === 0) return done(null);
        let description = null;
        try {
          const trak = file.getTrackById(track.id);
          for (const entry of trak.mdia.minf.stbl.stsd.entries) {
            description = findAudioSpecificConfig(entry);
            if (description) break;
          }
        } catch (_) {}
        // iPhone .mov files may hide it where mp4box can't reach — AAC-LC's config is
        // just the sample rate and channel count, so build it.
        if (!description) description = aacLcConfig(track.audio.sample_rate, track.audio.channel_count);
        if (!description) return done(null);
        const chunks = [];
        for (const s of samples) {
          const ts = (s.cts / s.timescale) * 1_000_000;
          if (ts / 1_000_000 >= durationSec) break;
          chunks.push({ data: new Uint8Array(s.data), timestamp: Math.round(ts), duration: Math.round((s.duration / s.timescale) * 1_000_000) });
        }
        if (chunks.length === 0) return done(null);
        done({
          sampleRate: track.audio.sample_rate,
          channels: track.audio.channel_count,
          codec: track.codec,
          description: new Uint8Array(description),
          chunks,
        });
      }, 0);
    } catch (_) {
      done(null);
    }
  });
}

/** Find the AAC AudioSpecificConfig in a sample entry (also inside QuickTime 'wave' boxes). */
function findAudioSpecificConfig(box, depth = 0) {
  if (!box || depth > 4) return null;
  // mp4box keeps the ES descriptor at esds.esd (0.5.x) or esds.esds (older builds).
  const es = box.esds && (box.esds.esd || box.esds.esds);
  const d = es && es.descs && es.descs[0];
  if (d && d.descs && d.descs[0] && d.descs[0].data && d.descs[0].data.length >= 2) return d.descs[0].data;
  for (const child of box.boxes || []) {
    const found = findAudioSpecificConfig(child, depth + 1);
    if (found) return found;
  }
  if (box.type !== 'esds' && box.esds) return findAudioSpecificConfig(box.esds, depth + 1);
  return null;
}

/** Two-byte AudioSpecificConfig for AAC-LC (object type 2). */
function aacLcConfig(sampleRate, channels) {
  const rates = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
  const idx = rates.indexOf(Number(sampleRate));
  const ch = Number(channels) || 0;
  if (idx < 0 || ch < 1 || ch > 7) return null;
  return new Uint8Array([(2 << 3) | (idx >> 1), ((idx & 1) << 7) | (ch << 3)]);
}

/** What this browser can do — shown in error messages so failures can be traced. */
export function ngmyStudioExportDiag() {
  const has = (n) => (typeof globalThis[n] !== 'undefined' ? 1 : 0);
  let rvfc = 0;
  try {
    rvfc = 'requestVideoFrameCallback' in HTMLVideoElement.prototype ? 1 : 0;
  } catch (_) {}
  let mr = 0;
  try {
    mr = typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported('video/mp4') ? 1 : 0;
  } catch (_) {}
  return `VE${has('VideoEncoder')} AE${has('AudioEncoder')} RV${rvfc} MR${mr}`;
}
window.ngmyStudioExportDiag = ngmyStudioExportDiag;
