import './About.css';
import { useModeText } from "@hooks/useModeText";
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const text = useModeText("home", "about");
  const navigate = useNavigate();

  const navigateToPack = () => {
    navigate('/about');
  };

  return (
    <section className="home__section home__about__section">
      <div className="home__about__section__img__container">
        <img src={text.img} alt="About us Image" className="home__about__section__img" />
      </div>
      <div className="home__about__section__text__container">
        <h2> { text.title } </h2>
        <p> { text.text } </p>
        <button className="home__about__section__button" onClick={navigateToPack}> { text.cta } </button>
      </div>
    </section>
  );
};
