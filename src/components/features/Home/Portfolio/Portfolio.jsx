import './Portfolio.css';
import { useLang } from '@contexts/LanguageContext';

export const Portfolio = () => {
  const { texts } = useLang();
  const text = texts.portfolio.sheep.work;

  return (
    <section className="home__section home__portfolio__section">
      <div className="home__portfolio__section__title__container">
        <h2 className="home__portfolio__section__title"> { text.title } </h2>
      </div>
      <div className="home__portfolio__section__items__container">
        {
          text.items.map((item, index)=> (
            <div className="home__portfolio__section__item__container" key={index}>
              <div className="home__portfolio__section__item__img__container">
                <img src={item.img} alt="" className="home__portfolio__section__item__img" />
              </div>
              <h3 className="home__portfolio__section__item__title"> { item.title } </h3>
              <p className="home__portfolio__section__description"> { item.text } </p>
            </div>    
          ))
        }
        </div>
    </section>
  );
};
