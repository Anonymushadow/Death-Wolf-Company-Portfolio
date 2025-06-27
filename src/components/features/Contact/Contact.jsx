import "./Contact.css";
import { useState } from "react";
import { socialMedias } from "@data/common/social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModeText } from "@hooks/useModeText";
import { useThemeTransition } from "@contexts/TransitionThemeContext";

export const Contact = () => {
    const text = useModeText("contact");
    const { darkMode } = useThemeTransition();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSend = () => {
        const { name, email, message } = formData;
        if (!name || !email || !message) return;

        const fullMessage = `Nombre: ${name}\nEmail: ${email}\n\nMensaje: ${message}`;
        const whatsappURL = `${socialMedias[1].link}?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappURL, "_blank");
    };

    const containerClass = darkMode ? "contact__section contact__section__wolf__bg" : "contact__section contact__section__sheep__bg";

    return (
        <div className={containerClass}>
            <div className="contact__section__content__container">
                <div className="contact__section__content__title__container">
                    <h1>{text.title}</h1>
                    <p>{text.text}</p>
                </div>

                <div className="contact__section__content__form">
                    <input
                        type="text"
                        name="name"
                        className="contact__section__content__form__input"
                        placeholder={text.placeholders[0]}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        className="contact__section__content__form__input"
                        placeholder={text.placeholders[1]}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        className="contact__section__content__form__input"
                        placeholder={text.placeholders[2]}
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <div className="contact__section__content__form__button__container">
                        <button
                            className="contact__section__content__form__button"
                            onClick={handleSend}
                        >
                            {text.cta}
                        </button>
                    </div>
                </div>
            </div>

            <div className="contact__section__social">
                {socialMedias.map((media, index) => (
                    <div className="contact__section__social__item" key={index}>
                        <FontAwesomeIcon
                            className="contact__section__social__item__icon"
                            icon={media.icon}
                        />
                        <p className="contact__section__social__item__title">{media.text}</p>
                        <a
                            className="contact__section__social__item__link"
                            href={media.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {media.number ? `+${media.number}` : ""}
                            {media.dir ? ` ${media.dir}` : ""}
                            {media.name ? ` ${media.name}` : ""}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
