/**
 * NGMY Video Studio — fast template export via WebCodecs + mp4-muxer.
 * Encodes canvas frames as fast as the CPU allows (much faster than real-time
 * MediaRecorder playback for long clips).
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
        bitrate: 8_000_000,
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
    console.warn('[ngmy fast export] audio fetch failed', e);
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
    console.warn('[ngmy fast export] audio decode failed', e);
    try {
      await decodeCtx.close();
    } catch (_) {}
    return null;
  }
}

async function encodeAudioTrack(muxer, audioBuffer, durationSec, onProgress) {
  if (!audioBuffer) return false;
  const targetRate = 48000;
  const channels = Math.min(2, audioBuffer.numberOfChannels || 1);
  let pcmBuffer = audioBuffer;
  if (audioBuffer.sampleRate !== targetRate) {
    try {
      const frames = Math.ceil(audioBuffer.duration * targetRate);
      const offline = new OfflineAudioContext(channels, frames, targetRate);
      const srcNode = offline.createBufferSource();
      srcNode.buffer = audioBuffer;
      srcNode.connect(offline.destination);
      srcNode.start(0);
      pcmBuffer = await offline.startRendering();
    } catch (e) {
      console.warn('[ngmy fast export] audio resample failed', e);
      return false;
    }
  }

  let audioConfigured = false;
  const audioEncoder = new AudioEncoder({
    output: (chunk, meta) => {
      if (audioConfigured) muxer.addAudioChunk(chunk, meta);
    },
    error: (e) => console.warn('[ngmy fast export] audio encoder', e),
  });

  try {
    const cfg = await AudioEncoder.isConfigSupported({
      codec: 'mp4a.40.2',
      sampleRate: targetRate,
      numberOfChannels: channels,
      bitrate: 128_000,
    });
    if (!cfg.supported) return false;
    audioEncoder.configure({
      codec: 'mp4a.40.2',
      sampleRate: targetRate,
      numberOfChannels: channels,
      bitrate: 128_000,
    });
    audioConfigured = true;
  } catch (e) {
    console.warn('[ngmy fast export] audio configure failed', e);
    return false;
  }

  const maxSamples = Math.min(
    pcmBuffer.length,
    Math.ceil(Math.max(0.1, durationSec) * targetRate),
  );
  const chunkSize = 1024;
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
      console.warn('[ngmy fast export] audio frame', e);
      break;
    }
    if (onProgress && offset % (chunkSize * 32) === 0) {
      onProgress(0.88 + (offset / maxSamples) * 0.08);
    }
  }

  try {
    await audioEncoder.flush();
  } catch (_) {}
  return true;
}

/**
 * @param {object} opts
 * @param {HTMLCanvasElement} opts.canvas
 * @param {number} opts.width
 * @param {number} opts.height
 * @param {number} opts.durationSec
 * @param {number} opts.fps
 * @param {string} [opts.videoSrc]
 * @param {(t:number)=>Promise<void>} opts.seekPaintAsync
 * @param {(p:number)=>void} [opts.onProgress]
 * @returns {Promise<Blob>}
 */
export async function ngmyStudioFastExport(opts) {
  if (!supported()) throw new Error('WebCodecs unavailable');

  const canvas = opts.canvas;
  const width = opts.width | 0;
  const height = opts.height | 0;
  const durationSec = Math.max(0.4, Number(opts.durationSec) || 3);
  const fps = Math.max(20, Math.min(30, Number(opts.fps) || 24));
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
    bitrate: 8_000_000,
    framerate: fps,
  });
  muxReady = true;

  const frameCount = Math.max(1, Math.ceil(durationSec * fps));
  const frameDurUs = Math.round(1_000_000 / fps);

  for (let i = 0; i < frameCount; i++) {
    const t = Math.min(i / fps, durationSec - 0.001);
    await seekPaintAsync(t);
    const frame = new VideoFrame(canvas, {
      timestamp: i * frameDurUs,
      duration: frameDurUs,
    });
    videoEncoder.encode(frame, { keyFrame: i % (fps * 2) === 0 });
    frame.close();
    if (opts.onProgress && (i === 0 || i % 6 === 0 || i === frameCount - 1)) {
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
