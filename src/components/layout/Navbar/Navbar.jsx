import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useThemeTransition } from '@contexts/TransitionThemeContext';
import { useModeText } from "@hooks/useModeText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from 'react';

export const Navbar = () => {
  const { handleTransition, bar, circle } = useThemeTransition();
  const text = useModeText("navbar");
  const [menuClose, setMenuClose] = useState(true);
  const menuRef = useRef(null);

  const getLinkClass = ({ isActive }) => isActive ? 'navbar__selected__link gradient__secondary__text' : 'gradient__secondary__text';

  const toggleMenu = () => {
    if (!menuRef.current) return;
    setMenuClose(prev => !prev);
    menuRef.current.classList.toggle("navbar__mobile__bar__active");
  };

  const handleLinkClick = () => {
    if (!menuClose) toggleMenu();
  };

  const executeTransition = () => {
    handleLinkClick();
    handleTransition();
  };

  const renderLinks = (start, end, extraClass = "") => (
  text.slice(start, end).map(({ link, title }, idx) => (
    <NavLink
      key={idx}
      to={link}
      className={({ isActive }) => 
        `${getLinkClass({ isActive })} ${extraClass}`
      }
      onClick={handleLinkClick}
    >
      {title}
    </NavLink>
  ))
);

  return (
    <nav className="navbar">
      <div className="navbar__mobile__bar" ref={menuRef}>
        <div className="navbar__mobile__bar__items__container">
          {renderLinks(0, 2)}
        </div>
        <div className="navbar__mobile__bar__items__container">
          {renderLinks(2, 4)}
        </div>
      </div>

      <div className="navbar__bar">
        <FontAwesomeIcon
          className="navbar__menu__button"
          onClick={toggleMenu}
          icon={menuClose ? faBars : faTimes}
        />

        <div className="navbar__bar__items__container">
          {renderLinks(0, 2, "navbar__item__link__desktop")}
        </div>

        <div className="navbar__bar__image__container__space">
          <div
            className="navbar__bar__image__container"
            onClick={executeTransition}
            ref={circle}
          >
            <img
              src="/images/generic/navbar_logo.png"
              alt="Logo"
              className="navbar__bar__image"
              draggable="false"
            />
          </div>
        </div>

        <div className="navbar__bar__items__container">
          {renderLinks(2, 4, "navbar__item__link__desktop")}
        </div>

        <div className="navbar__transition__bar" ref={bar}></div>
      </div>
    </nav>
  );
};
