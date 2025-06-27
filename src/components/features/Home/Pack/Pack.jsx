import './Pack.css';
import { useLang } from '@contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { clientsLogos, clientsFilterLogos } from '@data/common/clientsImages';

export const Pack = () => {
  const { texts } = useLang();
  const text = texts.pack;

  const navigate = useNavigate();

  const navigateToPack = () => {
    navigate('/pack');
  };

    return (
        <section className="home__section home__pack__section">
            <div className="home__pack__section__title__container">
                <h2 className="home__pack__section__title"> {text.title} </h2>
            </div>
            <div className="home__pack__section__items__container">
                {
                    text.wolf.manada.slice(0, 3).map((item) => (
                        <div className="home__pack__section__item__container" key={ item.id }>
                            <div className="home__pack__section__item__img__container">
                                <img src={ clientsLogos[item.logo] } alt={ item.enterprise } className="home__pack__section__item__img" />
                                <img src={ clientsFilterLogos[item.filterLogo] } alt={ item.enterprise } className="home__pack__section__item__img__filter" />
                            </div>
                            <h3 className="home__pack__section__item__title gradient__primary__text"> { item.enterprise } </h3>
                            <p className="home__pack__section__description"> { item.text } </p>
                        </div>
                    ))
                }
            </div>
            <div className="home__pack__section__button__container">
                <button className="home__pack__section__button" onClick={navigateToPack}> {text.cta} </button>
            </div>
        </section>
    );
};
