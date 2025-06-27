// Cards.jsx
import "./Cards.css";
import { useState } from "react";
import { clientsImages } from "@data/common/clientsImages";
import { CardInfo } from "../CardInfo/CardInfo";

export const Cards = ({ items, cta, getTitle, getText, getImage, isPack }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClick = (data, show) => {
    setShowInfo(show);
    setSelectedItem(data);
  };

  return (
    <div className="cards__container">
      {items.map((item, index) => (
        <div
          className="card__container"
          style={{ backgroundImage: `url(${getImage(item)})` }}
          key={index}
        >
          <div className="card__filter"></div>
          <div className="card__text__container">
            <h2 className="card__title">{getTitle(item)}</h2>
            <div className="card__description__container">
              <p className="card__description">{getText(item)}</p>
              <button
                className="card__description__button"
                onClick={() => handleClick(item, true)}
              >
                {cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {showInfo && (
        <CardInfo 
          data={selectedItem} 
          closeInfo={handleClick} 
          isPack={isPack}
          setData={handleClick}
        />)}
    </div>
  );
};
