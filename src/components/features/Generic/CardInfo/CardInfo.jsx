import "./CardInfo.css";
import { useThemeTransition } from "@contexts/TransitionThemeContext";
import { clientsLogos, clientsImages } from "@data/common/clientsImages";
import { ProjectInfoContent } from "../ProjectInfoContent/ProjectInfoContent";
import { ClientInfoContent } from "../ClientInfoContent/ClientInfoContent";
import { useState } from "react";

export const CardInfo = ({ data, closeInfo, isPack, setData }) => {
  const { darkMode } = useThemeTransition();
  const [renderPack, setRenderPack] = useState(isPack);
  const [renderItem, setRenderItem] = useState(null);

  return (
    <div className="card__info__background">
      <div className="card__info__container">
        <button onClick={() => closeInfo(null, false)} className="card__info__close__button">x</button>

        <div
          className="card__info__image__container"
          style={
            darkMode
              ? {boxShadow: `0 5px 10px ${data.primaryColor}`}
              : {boxShadow: '0 5px 10px var(--color__primary__liso)'}
          }
        >
          <div className="card__info__image__clipper">
            <img src={clientsImages[data.img]} className="card__info__background__image" alt="Client background" />
          </div>
          {darkMode && (
            <div 
              className="card__info__logo__container"
              style={{ border: `2px solid ${data.primaryColor}` }}
            >
              <img src={clientsLogos[data.logo]} className="card__info__logo__img" alt="Client logo" />
            </div>
          )}
        </div>

        <h2 className="card__info__title" style={{ WebkitTextFillColor: data.primaryColor }}>{data.title || data.enterprise}</h2>

        <div className="card__info">
          {renderPack ? (
              <ClientInfoContent data={data} changeRender={setRenderPack} changeRenderItem={setRenderItem} primaryColor={data.primaryColor}/>
            ) : (
              <ProjectInfoContent data={renderItem ? renderItem : data} changeRenderItem={setRenderItem} changeRender={setRenderPack} isPack={isPack} primaryColor={data.primaryColor ? data.primaryColor : ""}/>
            )}
        </div>
      </div>
    </div>
  );
};
