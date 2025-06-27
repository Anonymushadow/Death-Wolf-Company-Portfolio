import "./ErrorPage.css";
import { useModeText } from "@hooks/useModeText";
import { useNavigate } from "react-router-dom";
import { useThemeTransition } from "@contexts/TransitionThemeContext";

export const ErrorPage = () => {
    const navigate = useNavigate();
    const { darkMode } = useThemeTransition();
    const texts = useModeText("errorPage");

    const containerClass = darkMode ? "error__data__container error__data__container__wolf__bg" : "error__data__container error__data__container__sheep__bg"; 

    return (
        <div className={containerClass}>
            <div className="error__title__container">
                <h1 className="error__title" data-text="404">404</h1>
                <h1 className="error__title" data-text={texts.title}>{texts.title}</h1>
            </div>
            <h5 className="error__description">{texts.description}</h5>
            <button className="error__button" onClick={()=> navigate("/")}>{texts.cta}</button>
        </div>
    )
}