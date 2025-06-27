import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import { useModeText } from "@hooks/useModeText";

export const Navbar = () => {
    const text = useModeText("portfolio", "navbar");
    
    const getLinkClass = ({ isActive }) => isActive ? 'portfolio__navbar__link__selected portfolio__navbar__link' : 'portfolio__navbar__link';

    return (
        <div className="portfolio__navbar">
            <div className="portfolio__navbar__content">
                <NavLink className={getLinkClass} to={text[0].to}>{text[0].name}</NavLink>
                <NavLink className={getLinkClass} to={text[1].to}>{text[1].name}</NavLink>
            </div>
        </div>
    )
}