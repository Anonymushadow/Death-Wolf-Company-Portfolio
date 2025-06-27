// Buscador.jsx
import "./Buscador.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Buscador = ({ valor, onChange, title, placeholder }) => {
  return (
    <div className="buscador__container">
      {title && <h1 className="buscador__title">{title}</h1>}
      <div className="buscador__bar__container">
        <input
          type="text"
          className="buscador__bar"
          placeholder={placeholder || "Buscar..."}
          value={valor}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="buscador__button__container">
          <FontAwesomeIcon icon={faSearch} className="buscador__button" />
        </div>
      </div>
    </div>
  );
};
