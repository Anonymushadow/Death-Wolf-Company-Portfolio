import "./Dark.css";
import { useEffect } from "react";
import { useThemeTransition } from "@contexts/TransitionThemeContext";
import { GlitchEffect } from "@components/effects/Glitch/GlitchEffect";
import { useModeText } from "@hooks/useModeText";

export const Dark = () => {
    const { glitch } = useThemeTransition();
    const texts = useModeText("dark"); 

    useEffect(() => {
        let timeoutId;

        const triggerPossession = () => {
            if (!glitch.current) return;

            glitch.current.classList.remove("glitch__effect__container__possessed");
            void glitch.current.offsetWidth;
            glitch.current.classList.add("glitch__effect__container__possessed");

            // Generar un nuevo tiempo aleatorio para el próximo glitch
            const nextGlitchIn = Math.random() * 4000 + 3000; // entre 3s y 7s

            timeoutId = setTimeout(triggerPossession, nextGlitchIn);
        };

        triggerPossession(); // primer disparo

        return () => clearTimeout(timeoutId); // cleanup cuando el componente se desmonta
    }, [glitch]);

    return (
        <>
            <GlitchEffect />
            <div className="dark__content__container">
                <h1 className="dark__content__title">
                    { texts.title }
                </h1>
                <button className="dark__content__button">{ texts.cta }</button>
            </div>
        </>
    );
};
