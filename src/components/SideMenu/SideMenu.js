import './SideMenu.css';

import Navigation from "../Navigation/Navigation";
import HeaderAccountLink from "../HeaderAccountLink/HeaderAccountLink";
import MenuOverlay from "../MenuOverlay/MenuOverlay";

export default function SideMenu({ isOpen, onClose }) {
    return (
    <MenuOverlay isOpen={isOpen}>
        <div className={`side-menu ${isOpen ? `side-menu_active` : ""}`}>
            <button className="side-menu__button-close hover-button" type="button" onClick={onClose} ></button>
            <Navigation isSideMenuOpen={true} onClose={onClose} />
            <HeaderAccountLink isSideMenuOpen={true} onClose={onClose} />
        </div>
    </MenuOverlay>
    )
}
