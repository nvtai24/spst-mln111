// Component điều khiển âm thanh
import { useSoundContext } from "../../contexts/SoundContext";
import "./SoundControls.css";

const SoundControls = () => {
  const {
    toggleBackgroundMusic,
    toggleSoundEffects,
    isBackgroundMusicEnabled,
    isSoundEffectsEnabled,
  } = useSoundContext();

  return (
    <div className="sound-controls">
      <button
        className={`sound-btn ${isBackgroundMusicEnabled ? "enabled" : "disabled"}`}
        onClick={toggleBackgroundMusic}
        title="Bật/Tắt nhạc nền"
      >
        🎵 {isBackgroundMusicEnabled ? "ON" : "OFF"}
      </button>
      <button
        className={`sound-btn ${isSoundEffectsEnabled ? "enabled" : "disabled"}`}
        onClick={toggleSoundEffects}
        title="Bật/Tắt hiệu ứng âm thanh"
      >
        🔊 {isSoundEffectsEnabled ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default SoundControls;
