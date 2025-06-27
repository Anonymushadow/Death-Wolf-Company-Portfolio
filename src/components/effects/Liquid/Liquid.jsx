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
                    className="liquid__transition__effect"
                >

                </video>
            )}

            {
                showFinalTransitionFrame && (
                    <img
                        ref={bodyBlackout}
                        src="/images/generic/black.png"
                        alt="Frame final"
                        className="liquid__transition__effect__final__frame"
                    />
                )
            }
        </>
    );
}