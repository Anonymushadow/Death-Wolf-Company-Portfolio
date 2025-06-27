import './Header.css';
import { useModeText } from "@hooks/useModeText";

export const Header = () => {
  const text = useModeText("home", "header");

  return (
    <section className="home__section home__header__section">
      <div className="home__header__section__text__container">
        <h1> { text.title } </h1>
        <h3 className="home__header__section__text__content"> { text.text } { text.text2 ? <span className='home__header__section__text__content__special gradient__primary__text'>{text.text2}</span> : "" }</h3>
      </div>
      <div className="home__header__section__img__container">
        <img src={ text.img } alt="Violet Death Wolf Image" className="home__header__section__img" deaggable="false" />
      </div>
    </section>
  );
};
