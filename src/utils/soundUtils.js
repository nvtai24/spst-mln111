// Utility để tạo âm thanh đơn giản bằng Web Audio API
export const createSimpleSound = async (
  frequency,
  duration,
  type = "sine",
  volume = 0.3,
) => {
  try {
    const audioContext = new (
      window.AudioContext || window.webkitAudioContext
    )();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      volume,
      audioContext.currentTime + 0.01,
    );
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + duration,
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);

    return new Promise((resolve) => {
      oscillator.onended = () => {
        audioContext.close();
        resolve();
      };
    });
  } catch (error) {
    console.log("Audio not supported:", error);
    return Promise.resolve();
  }
};

export const playClickSound = () => {
  createSimpleSound(800, 0.1, "square", 0.2);
};

export const playSuccessSound = async () => {
  await createSimpleSound(523, 0.2, "sine", 0.3);
  await createSimpleSound(659, 0.2, "sine", 0.3);
  await createSimpleSound(784, 0.3, "sine", 0.3);
};

export const playMenuSound = () => {
  createSimpleSound(440, 0.15, "triangle", 0.25);
};
