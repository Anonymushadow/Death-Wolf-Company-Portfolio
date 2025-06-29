import "./Dark.css";
import { useEffect, useRef, useState } from "react";
import { useModeText } from "@hooks/useModeText";
import { DarkWarningAlert } from "@components/feedback/DarkWarningAlert/DarkWarningAlert";

export const Dark = () => {
  const glitchRef = useRef(null);
  const timeoutIdRef = useRef(null); // para guardar el timeout
  const texts = useModeText("dark");
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  let warningData = {
    title: texts.warningTitle,
    text: texts.warningText,
    cta: texts.warningCTA,
  };

  // Cuando warningActive cambia
  useEffect(() => {
  const triggerPossession = () => {
    if (!glitchRef.current) return;

    glitchRef.current.classList.remove("glitch__effect__container__possessed");
    void glitchRef.current.offsetWidth;
    glitchRef.current.classList.add("glitch__effect__container__possessed");

    const nextGlitchIn = Math.random() * 4000 + 3000;
    timeoutIdRef.current = setTimeout(triggerPossession, nextGlitchIn);
  };

  if (showModal) {
    clearTimeout(timeoutIdRef.current); // pausa glitch mientras el modal está abierto
  } else {
    triggerPossession(); // reanuda glitch cuando modal se cierra
  }

  return () => clearTimeout(timeoutIdRef.current);
}, [showModal]);

  const handleClick = () => {
    if (isClosing) return; // evita doble click

    if (showModal) {
      setIsClosing(true); // activa animación de salida
      setTimeout(() => {
        setShowModal(false);
        setIsClosing(false);
      }, 400); // igual al tiempo de animación CSS
    } else {
      setShowModal(true); // abre directamente
    }
  };

  return (
    <>
      {showModal && (
        <DarkWarningAlert
          {...warningData}
          handleClick={handleClick}
          isClosing={isClosing}
        />
      )}
      <div
        ref={glitchRef}
        className="glitch__effect__container"
      ></div>

      <div className="dark__content__container">
        <h1 className="dark__content__title">{texts.title}</h1>
        <button
          className="dark__content__button"
          onClick={handleClick}
        >
          {texts.cta}
        </button>
      </div>
    </>
  );
};
