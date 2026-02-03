// Hook để quản lý âm thanh trong ứng dụng
import { useRef, useState, useEffect } from "react";
import { createSimpleSound } from "../utils/soundUtils";

export const useSound = () => {
  const [isBackgroundMusicEnabled, setIsBackgroundMusicEnabled] =
    useState(true);
  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(true);
  const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] =
    useState(false);
  const backgroundIntervalRef = useRef(null);
  const audioRefs = useRef({});

  // Khởi tạo audio objects cho file thực
  useEffect(() => {
    // Nhạc nền
    audioRefs.current.backgroundMusic = new Audio(
      "/audio/background-music.mp3",
    );
    audioRefs.current.backgroundMusic.loop = true;
    audioRefs.current.backgroundMusic.volume = 0.3;

    // Sound effects
    audioRefs.current.clickSound = new Audio("/audio/click-sound.mp3");
    audioRefs.current.clickSound.volume = 0.5;

    audioRefs.current.successSound = new Audio("/audio/success-sound.mp3");
    audioRefs.current.successSound.volume = 0.6;

    audioRefs.current.menuSound = new Audio("/audio/menu-sound.mp3");
    audioRefs.current.menuSound.volume = 0.4;

    // Preload audio
    Object.values(audioRefs.current).forEach((audio) => {
      audio.preload = "auto";
    });

    // Cleanup function
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  const playBackgroundMusic = () => {
    if (isBackgroundMusicEnabled && audioRefs.current.backgroundMusic) {
      setIsBackgroundMusicPlaying(true);
      audioRefs.current.backgroundMusic.play().catch(console.log);
    }
  };

  const stopBackgroundMusic = () => {
    setIsBackgroundMusicPlaying(false);
    if (audioRefs.current.backgroundMusic) {
      audioRefs.current.backgroundMusic.pause();
      audioRefs.current.backgroundMusic.currentTime = 0;
    }
    if (backgroundIntervalRef.current) {
      clearInterval(backgroundIntervalRef.current);
      backgroundIntervalRef.current = null;
    }
  };

  const playClickSound = () => {
    if (isSoundEffectsEnabled && audioRefs.current.clickSound) {
      audioRefs.current.clickSound.currentTime = 0;
      audioRefs.current.clickSound.play().catch(console.log);
    }
  };

  const playSuccessSound = () => {
    if (isSoundEffectsEnabled && audioRefs.current.successSound) {
      audioRefs.current.successSound.currentTime = 0;
      audioRefs.current.successSound.play().catch(console.log);
    }
  };

  const playMenuSound = () => {
    if (isSoundEffectsEnabled && audioRefs.current.menuSound) {
      audioRefs.current.menuSound.currentTime = 0;
      audioRefs.current.menuSound.play().catch(console.log);
    }
  };

  const toggleBackgroundMusic = () => {
    const newState = !isBackgroundMusicEnabled;
    setIsBackgroundMusicEnabled(newState);

    if (!newState) {
      stopBackgroundMusic();
    } else if (audioRefs.current.backgroundMusic) {
      playBackgroundMusic();
    }
  };

  const toggleSoundEffects = () => {
    setIsSoundEffectsEnabled(!isSoundEffectsEnabled);
  };

  return {
    playBackgroundMusic,
    stopBackgroundMusic,
    playClickSound,
    playSuccessSound,
    playMenuSound,
    toggleBackgroundMusic,
    toggleSoundEffects,
    isBackgroundMusicEnabled,
    isSoundEffectsEnabled,
    isBackgroundMusicPlaying,
  };
};
