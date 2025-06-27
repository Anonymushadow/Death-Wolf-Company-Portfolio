import "./About.css";
import { useModeText } from "@hooks/useModeText";
import { NavLink } from 'react-router-dom';
import { useThemeTransition } from '@contexts/TransitionThemeContext';

export const About = () => {
    const text = useModeText("about");
    const { handleTransition } = useThemeTransition();

    return (
        <>
            {text.map((section, index) => (
                <section className="about__section" key={index}>
                    {section.firstTitle ? (
                        <h1 className="about__section__title about__section__first__title">
                            {section.firstTitle}
                        </h1>
                    ) : (
                        <h2 className="about__section__title">
                            {section.title}
                        </h2>
                    )}

                    <p className="about__section__text">
                        {section.text}
                        {section.glitch && (
                            <NavLink
                                to="/dark"
                                className="about__section__glitch__words"
                                data-text={section.glitch}
                            >
                                {section.unglitch}
                            </NavLink>
                        )}
                        {section.text2}
                    </p>

                    {section.cta && (
                        <button className="about__section__button" onClick={handleTransition}>
                            {section.cta}
                        </button>
                    )}
                </section>
            ))}
        </>
    );
};
