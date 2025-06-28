import "./Liquid.css";
import { useThemeTransition } from "@contexts/TransitionThemeContext";

export const Liquid = () => {
    const { showLiquidTransition, showFinalTransitionFrame, body, bodyBlackout } = useThemeTransition();

    return (
        <>
            {showLiquidTransition && (
                <video
                    ref={body}
                    src="/videos/body_transition.webm"
                    playsInline
                    muted
                    preload="auto"
                    autoPlay={false}  // NO se lo pongas true para controlarlo manualmente con JS
                    className="liquid__transition__effect"
                />
            )}

            {
                showFinalTransitionFrame && (
                    <div
                        ref={bodyBlackout}
                        className="liquid__transition__effect__container"
                    />
                )
            }
        </>
    );
}