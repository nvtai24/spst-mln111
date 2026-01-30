// Hook để quản lý âm thanh trong ứng dụng
import { useRef, useState } from "react";
import { createSimpleSound } from "../utils/soundUtils";

export const useSound = () => {
  const [isBackgroundMusicEnabled, setIsBackgroundMusicEnabled] =
    useState(true);
  const [isSoundEffectsEnabled, setIsSoundEffectsEnabled] = useState(true);
  const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] =
    useState(false);
  const backgroundIntervalRef = useRef(null);

  const playBackgroundMusic = () => {
    if (!isBackgroundMusicEnabled || isBackgroundMusicPlaying) return;

    setIsBackgroundMusicPlaying(true);

    const playLoop = () => {
      if (isBackgroundMusicEnabled && isBackgroundMusicPlaying) {
        // Giai điệu nhạc nền đơn giản
        createSimpleSound(261, 0.4, "sine", 0.08)
          .then(() => createSimpleSound(294, 0.4, "sine", 0.08))
          .then(() => createSimpleSound(329, 0.4, "sine", 0.08))
          .then(() => createSimpleSound(261, 0.4, "sine", 0.08));
      }
    };

    playLoop();
    backgroundIntervalRef.current = setInterval(playLoop, 3000);
  };

  const stopBackgroundMusic = () => {
    setIsBackgroundMusicPlaying(false);
    if (backgroundIntervalRef.current) {
      clearInterval(backgroundIntervalRef.current);
      backgroundIntervalRef.current = null;
    }
  };

  const playClickSound = () => {
    if (isSoundEffectsEnabled) {
      createSimpleSound(800, 0.1, "square", 0.2);
    }
  };

  const playSuccessSound = () => {
    if (isSoundEffectsEnabled) {
      createSimpleSound(523, 0.2, "sine", 0.3)
        .then(() => createSimpleSound(659, 0.2, "sine", 0.3))
        .then(() => createSimpleSound(784, 0.3, "sine", 0.3));
    }
  };

  const playMenuSound = () => {
    if (isSoundEffectsEnabled) {
      createSimpleSound(440, 0.15, "triangle", 0.25);
    }
  };

  const toggleBackgroundMusic = () => {
    const newState = !isBackgroundMusicEnabled;
    setIsBackgroundMusicEnabled(newState);

    if (!newState) {
      stopBackgroundMusic();
    } else if (isBackgroundMusicPlaying) {
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
