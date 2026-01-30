// Context để chia sẻ âm thanh toàn ứng dụng
import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useSound } from "../hooks/useSound";

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const soundUtils = useSound();

  return (
    <SoundContext.Provider value={soundUtils}>{children}</SoundContext.Provider>
  );
};

SoundProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};
