import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useThemeTransition } from '@contexts/TransitionThemeContext';
import { useLang } from '@contexts/LanguageContext';
import { socialMedias } from '@data/common/social';

export const Footer = () => {
  const { footer, handleTransition, darkMode } = useThemeTransition();
  const { lang, setLang, texts } = useLang();

  const text = darkMode ? texts.footer.wolf : texts.footer.sheep;
  const menuText = darkMode ? texts.navbar.wolf : texts.navbar.sheep;

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en');
  const handleBeastButton = () => handleTransition();

  const renderMenu = () =>
    menuText.map((item, index) => (
      <h6 className="footer__content__menu__item gradient__secondary__text" key={`menu-${index}`}>
        <NavLink to={item.link}>{item.title}</NavLink>
      </h6>
    ));

  const renderContacts = () => (
    <>
      <h6 className="footer__content__contacts__data__item gradient__secondary__text">
        {socialMedias[0].dir}
      </h6>
      <h6 className="footer__content__contacts__data__item gradient__secondary__text">
        +{socialMedias[1].number}
      </h6>
      <div className="footer__content__contacts__data__item__spacer"></div>
    </>
  );

  const renderSocials = () =>
    socialMedias.map((social, index) => (
      <a
        key={`social-${index}`}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="footer__content__contacts__rrss__item"
      >
        <FontAwesomeIcon icon={social.icon} />
      </a>
    ));

  const renderLegal = () =>
    text.legal.content.map((item, index) => (
      <h6 className="footer__content__legal__item gradient__secondary__text" key={`legal-${index}`}>
        <a href={item.link}>{item.text}</a>
      </h6>
    ));

  return (
    <div className="footer" ref={footer}>
      <div className="footer__content__container">
        <div className="footer__content__data__container">

          {/* Logo */}
          <div className="footer__content__img__container">
            <img
              src="/public/images/generic/footer_logo.png"
              alt=""
              className="footer__content__img"
            />
          </div>

          {/* Menu */}
          <div className="footer__content__menu__container">
            <p className="footer__content__title">{text.menu}</p>
            <div className="footer__content__menu">{renderMenu()}</div>
          </div>

          {/* Contact & RRSS */}
          <div className="footer__content__contacts__container">
            <div className="footer__content__contacts">
              <p className="footer__content__title">{text.contact}</p>
              <div className="footer__content__contacts__data">{renderContacts()}</div>
            </div>

            <div className="footer__content__contacts__rrss">
              <p className="footer__content__title">{text.social}</p>
              <div className="footer__content__contacts__rrss__container">
                {renderSocials()}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="footer__content__legal__container">
            <p className="footer__content__title">{text.legal.title}</p>
            <div className="footer__content__legal">
              {renderLegal()}
              <p>
                <FontAwesomeIcon
                  icon={text.language}
                  onClick={toggleLang}
                  className="footer__lang__icon"
                />
              </p>
            </div>
          </div>

        </div>

        {/* Call to action */}
        <div className="footer__content__button__unleash__container">
          <button
            className="footer__content__button__unleash"
            onClick={handleBeastButton}
          >
            {text.cta}
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright__container">
        <div className="footer__copyright__container__text__container">
          <h5 className="gradient__secondary__text">{text.rights}</h5>
        </div>
      </div>
    </div>
  );
};
