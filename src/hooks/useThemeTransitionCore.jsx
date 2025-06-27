/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState, useCallback } from 'react';
import { playGlitchTransition, playLiquidTransition } from '@modules/transitionAnimations';

export const useThemeTransitionCore = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'wolf');
  const [isTransition, setIsTransition] = useState(false);
  const [showLiquidTransition, setShowLiquid] = useState(true);
  const [showFinalTransitionFrame, setShowFinalFrame] = useState(true);

  const audioLiquidRef = useRef(null);
  const audioGlitchStartRef = useRef(null);
  const audioGlitchEndRef = useRef(null);

   // Precarga de audios
  const precacheAudios = () => {
    audioLiquidRef.current = new Audio('/audios/blood.mp3');
    audioLiquidRef.current.preload = 'auto';

    audioGlitchStartRef.current = new Audio('/audios/exorcism voices.mp3');
    audioGlitchStartRef.current.preload = 'auto';

    audioGlitchEndRef.current = new Audio('/audios/meat hit.mp3');
    audioGlitchEndRef.current.preload = 'auto';

    // Forzamos el "cacheo" pidiendo el duration (truco sucio pero efectivo)
    audioLiquidRef.current.load();
    audioGlitchStartRef.current.load();
    audioGlitchEndRef.current.load();
  };
  
  useEffect(() => {
    precacheAudios();
  }, []);

  const refs = {
    bar: useRef(null),
    circle: useRef(null),
    footer: useRef(null),
    body: useRef(null),
    glitch: useRef(null),
    bodyBlackout: useRef(null),
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('wolf', darkMode);
    localStorage.setItem('theme', darkMode ? 'wolf' : 'sheep');
  }, [darkMode]);

  const handleTransition = useCallback(() => {
    if (isTransition) return;
    setIsTransition(true);

    if (darkMode) {
      playLiquidTransition({
        ...refs,
        setDarkMode,
        audio: audioLiquidRef.current,
        finish: () => setIsTransition(false)
      });
    } else {
      playGlitchTransition({
        glitch: refs.glitch.current,
        setDarkMode,
        audioStart: audioGlitchStartRef.current,
        audioEnd: audioGlitchEndRef.current,
        finish: () => setIsTransition(false)
      });
    }
  }, [darkMode, isTransition]);

  const playAudio = (audioRef) => {
    if (audioRef?.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const stopAudio = (audioRef) => {
    if (audioRef?.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return {
    darkMode,
    isTransition,
    handleTransition,
    showLiquidTransition,
    showFinalTransitionFrame,
    ...refs
  };
};
