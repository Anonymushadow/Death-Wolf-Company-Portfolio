import './Work.css';
import { useModeText } from "@hooks/useModeText";

export const Work = () => {
  const text = useModeText("portfolio", "work");

  return (
    <section className="portfolio__section portfolio__work__section">
      <div className="portfolio__work__section__title__container">
        <h2 className="portfolio__work__section__title"> { text.title } </h2>
      </div>
      <div className="portfolio__work__section__items__container">
        {
          text.items.map((item, index)=> (
            <div className="portfolio__work__section__item__container" key={index}>
              <div className="portfolio__work__section__item__img__container">
                <img src={item.img} alt="" className="portfolio__work__section__item__img" />
              </div>
              <h3 className="portfolio__work__section__item__title"> { item.title } </h3>
              <p className="portfolio__work__section__description"> { item.text } </p>
            </div>    
          ))
        }
        </div>
    </section>
  );
};
