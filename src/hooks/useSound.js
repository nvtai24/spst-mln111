// Hook để quản lý âm thanh trong ứng dụng
import { useRef, useState, useEffect, useCallback } from "react";

// Audio configuration
const AUDIO_CONFIG = {
  backgroundMusic: {
    src: "/audio/background-music.mp3",
    volume: 0.3,
    loop: true,
  },
  clickSound: { src: "/audio/click-sound.mp3", volume: 0.5, poolSize: 3 },
  successSound: { src: "/audio/success-sound.mp3", volume: 0.6, poolSize: 2 },
  menuSound: { src: "/audio/menu-sound.mp3", volume: 0.4, poolSize: 2 },
  congratsSound: { src: "/audio/congrats-sound.mp3", volume: 0.7, poolSize: 1 },
};

// Preload và cache audio buffer toàn cục
const audioCache = new Map();
const audioContext =
  typeof window !== "undefined"
    ? new (window.AudioContext || window.webkitAudioContext)()
    : null;

// Hàm preload audio buffer
const preloadAudioBuffer = async (src) => {
  if (audioCache.has(src)) return audioCache.get(src);

  try {
    const response = await fetch(src);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext?.decodeAudioData(arrayBuffer);
    audioCache.set(src, audioBuffer);
    return audioBuffer;
  } catch (error) {
    console.log("Failed to preload audio:", src, error);
    return null;
  }
};

// Tạo audio element với preload
const createPreloadedAudio = (src, volume, loop = false) => {
  const audio = new Audio();
  audio.preload = "auto";
  audio.volume = volume;
  audio.loop = loop;
  audio.src = src; // Set src sau preload để trigger loading
  return audio;
};

// Tạo pool audio cho sound effects (tránh delay khi play liên tục)
const createAudioPool = (src, volume, poolSize = 3) => {
  const pool = [];
  for (let i = 0; i < poolSize; i++) {
    pool.push(createPreloadedAudio(src, volume));
  }
  return pool;
};

export const useSound = () => {
  const [isBackgroundMusicEnabled, setIsBackgroundMusicEnabled] =
    useState(true);
  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(true);
  const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] =
    useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);

  const backgroundIntervalRef = useRef(null);
  const audioRefs = useRef({});
  const audioPoolRefs = useRef({});
  const poolIndexRefs = useRef({ click: 0, success: 0, menu: 0, congrats: 0 });

  // Khởi tạo và preload audio
  useEffect(() => {
    const initAudio = async () => {
      // Preload tất cả audio buffers song song
      const preloadPromises = Object.values(AUDIO_CONFIG).map((config) =>
        preloadAudioBuffer(config.src),
      );

      // Nhạc nền - chỉ cần 1 instance
      const bgConfig = AUDIO_CONFIG.backgroundMusic;
      audioRefs.current.backgroundMusic = createPreloadedAudio(
        bgConfig.src,
        bgConfig.volume,
        bgConfig.loop,
      );

      // Sound effects - dùng pool để play nhanh hơn
      audioPoolRefs.current.click = createAudioPool(
        AUDIO_CONFIG.clickSound.src,
        AUDIO_CONFIG.clickSound.volume,
        AUDIO_CONFIG.clickSound.poolSize,
      );

      audioPoolRefs.current.success = createAudioPool(
        AUDIO_CONFIG.successSound.src,
        AUDIO_CONFIG.successSound.volume,
        AUDIO_CONFIG.successSound.poolSize,
      );

      audioPoolRefs.current.menu = createAudioPool(
        AUDIO_CONFIG.menuSound.src,
        AUDIO_CONFIG.menuSound.volume,
        AUDIO_CONFIG.menuSound.poolSize,
      );

      audioPoolRefs.current.congrats = createAudioPool(
        AUDIO_CONFIG.congratsSound.src,
        AUDIO_CONFIG.congratsSound.volume,
        AUDIO_CONFIG.congratsSound.poolSize,
      );

      // Đợi preload xong
      await Promise.all(preloadPromises);
      setIsAudioReady(true);
    };

    initAudio();

    // Cleanup function
    return () => {
      if (audioRefs.current.backgroundMusic) {
        audioRefs.current.backgroundMusic.pause();
        audioRefs.current.backgroundMusic.src = "";
      }
      Object.values(audioPoolRefs.current).forEach((pool) => {
        pool?.forEach((audio) => {
          audio.pause();
          audio.src = "";
        });
      });
    };
  }, []);

  const playBackgroundMusic = useCallback(() => {
    if (isBackgroundMusicEnabled && audioRefs.current.backgroundMusic) {
      setIsBackgroundMusicPlaying(true);
      // Resume AudioContext nếu bị suspended (browser policy)
      if (audioContext?.state === "suspended") {
        audioContext.resume();
      }
      audioRefs.current.backgroundMusic.play().catch(console.log);
    }
  }, [isBackgroundMusicEnabled]);

  const stopBackgroundMusic = useCallback(() => {
    setIsBackgroundMusicPlaying(false);
    if (audioRefs.current.backgroundMusic) {
      audioRefs.current.backgroundMusic.pause();
      audioRefs.current.backgroundMusic.currentTime = 0;
    }
    if (backgroundIntervalRef.current) {
      clearInterval(backgroundIntervalRef.current);
      backgroundIntervalRef.current = null;
    }
  }, []);

  // Helper để play từ pool (round-robin)
  const playFromPool = useCallback(
    (poolKey) => {
      if (!isSoundEffectsEnabled) return;

      const pool = audioPoolRefs.current[poolKey];
      if (!pool || pool.length === 0) return;

      // Round-robin để chọn audio tiếp theo
      const index = poolIndexRefs.current[poolKey];
      const audio = pool[index];
      poolIndexRefs.current[poolKey] = (index + 1) % pool.length;

      // Reset và play
      audio.currentTime = 0;
      audio.play().catch(console.log);
    },
    [isSoundEffectsEnabled],
  );

  const playClickSound = useCallback(() => {
    playFromPool("click");
  }, [playFromPool]);

  const playSuccessSound = useCallback(() => {
    playFromPool("success");
  }, [playFromPool]);

  const playMenuSound = useCallback(() => {
    playFromPool("menu");
  }, [playFromPool]);

  const playCongratsSound = useCallback(() => {
    playFromPool("congrats");
  }, [playFromPool]);

  const toggleBackgroundMusic = useCallback(() => {
    const newState = !isBackgroundMusicEnabled;
    setIsBackgroundMusicEnabled(newState);

    if (!newState) {
      stopBackgroundMusic();
    } else if (audioRefs.current.backgroundMusic) {
      playBackgroundMusic();
    }
  }, [isBackgroundMusicEnabled, stopBackgroundMusic, playBackgroundMusic]);

  const toggleSoundEffects = useCallback(() => {
    setIsSoundEffectsEnabled(!isSoundEffectsEnabled);
  }, [isSoundEffectsEnabled]);

  return {
    playBackgroundMusic,
    stopBackgroundMusic,
    playClickSound,
    playSuccessSound,
    playMenuSound,
    playCongratsSound,
    toggleBackgroundMusic,
    toggleSoundEffects,
    isBackgroundMusicEnabled,
    isSoundEffectsEnabled,
    isBackgroundMusicPlaying,
    isAudioReady,
  };
};
