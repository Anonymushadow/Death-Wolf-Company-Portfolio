import "./DarkWarningAlert.css";

export const DarkWarningAlert = ({ title, text, cta, handleClick, isClosing }) => {
  return (
    <div className={`dark__warning__alert__bg ${isClosing ? "fade-out-bg" : ""}`}>
      <div className={`dark__warning__alert__container ${isClosing ? "fade-out-modal" : ""}`}>
        <div className="dark__warning__alert__title__container">
          <h2 className="dark__warning__alert__title">{title}</h2>
        </div>
        <div className="dark__warning__alert__text__container">
          <h5 className="dark__warning__alert__text">{text}</h5>
        </div>
        <div className="dark__warning__alert__cta__container">
          <button className="dark__warning__alert__cta" onClick={handleClick}>
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
};
