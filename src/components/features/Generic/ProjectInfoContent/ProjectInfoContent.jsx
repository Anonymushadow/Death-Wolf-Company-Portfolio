import "./ProjectInfoContent.css";
import { useModeText } from "@hooks/useModeText";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProjectInfoContent = ({ data, changeRender, isPack, changeRenderItem, primaryColor }) => {
  const [clientLabel, yearLabel, rolLabel, linkLabel, techLabel] = useModeText("projectCardInfo");

  return (
    <>
      <p className="card__info__projects__client">{clientLabel} {data.client}</p>
      <p className="card__info__projects__year">
        {yearLabel} {data.year} | {rolLabel} {data.rol}
      </p>

      {data.link ? (
        <p className="card__info__projects__link__p">
          {linkLabel}{" "}
          <a
            href={`https://${data.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className={isPack ? "" : "card__info__projects__link"}
            style={isPack ? { color: primaryColor } : {}}
          >
            {data.link}
          </a>
        </p>
      ) : (
        <p className="card__info__projects__link__p">
          {linkLabel}{" "}
          <span
            href={`https://${data.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className={isPack ? "" : "card__info__projects__link"}
            style={isPack ? { color: primaryColor } : {}}
          >
            {data.note}
          </span>
        </p>
      )}

      <p className="card__info__projects__description">{data.description}</p>

      {data.technologies?.length > 0 && (
        <div className="card__info__projects__technologies__container">
          <h2 className="card__info__projects__technologies__title" style={isPack ? { WebkitTextFillColor: primaryColor } : {}}>{techLabel}</h2>
          <div className="card__info__projects__technologies__tags__container">
            {data.technologies.map((tech, index) => (
              <p key={index} className="card__info__projects__technologies__tag">{tech}</p>
            ))}
          </div>
        </div>
      )}
      { 
        isPack && (
          <button 
            onClick={ ()=> { 
                changeRenderItem(null);
                changeRender(true);
              }
            }
          className="card__info__projects__prev__button" 
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        ) 
      }
    </>
  );
};
