import "./ClientInfoContent.css";
import { useModeText } from "@hooks/useModeText"

export const ClientInfoContent = ({ data, changeRender, changeRenderItem, primaryColor })=> {
    const sections = useModeText("clientCardInfo");
    const text = useModeText("portfolio");
    const { projects = [] } = text.projects;

    return (
        <>
            <p className="card__info__projects__slogan">{ data.text }</p>
            <p className="card__info__projects__topic">{ sections[0] } {data.topic}</p>
            <p className="card__info__projects__description">{ data.description }</p>
            {
                data.web ? <p className="card__info__projects__link__p">{ sections[1] } <a href={`https://${data.web}`} target="_blank" style={{color: primaryColor}}>{data.web}</a></p> : null
            }
            <div className="card__info__projects__social__container">
                <h2 className="card__info__projects__social__title" style={{ WebkitTextFillColor: data.primaryColor }}>{ sections[2] }</h2>
                <div className="card__info__projects__social__tags__container">
                    {
                        data.social.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" className="card__info__projects__social__tag">{ social.name }</a>
                        ))
                    }
                </div>
            </div>
            <div className="card__info__projects__colaborations__container">
                <h2 className="card__info__projects__colaborations__title" style={{ WebkitTextFillColor: data.primaryColor }}>{ sections[3] }</h2>
                <div className="card__info__projects__colaborations__tags__container">
                    {
                        data.colaboraciones.map((colaboracion, index) => (
                            <h6 
                                key={index} 
                                className="card__info__projects__colaborations__tag" 
                                onClick={(e)=> {
                                    e.preventDefault();
                                    changeRender(false);
                                    const item = projects.find(project => project.id === colaboracion.id);
                                    changeRenderItem(item);
                                }}
                            >
                                { colaboracion.text }
                            </h6>
                        ))
                    }
                </div>
            </div>
        </>
    )
}