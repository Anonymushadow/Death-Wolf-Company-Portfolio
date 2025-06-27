import './Contact.css';
import { socialMedias } from '@data/common/social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModeText } from "@hooks/useModeText";

export const Contact = () => {
  const text = useModeText("home", "contact");

  return (
    <section className="home__section home__contact__section">
      <div className="home__contact__section__text__container">
        <h2 className="home__contact__section__text__title"> { text.title } </h2>
        <p className="home__contact__section__text__description"> { text.text } </p>
        <h5 className="home__contact__section__text__mail gradient__primary__text"> { socialMedias[0].dir } </h5>
        <div className="home__contact__section__text__social__icons__container">
          {
            socialMedias.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="home__contact__section__text__social__icon" >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            )
          )
          }
        </div>
      </div>
      <div className="home__contact__section__img__container">
        <img src={ text.img } alt="" className="home__contact__section__img" />
      </div>
    </section>
  );
};
