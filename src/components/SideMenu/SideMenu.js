import './SideMenu.css';

import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import HeaderAccountLink from "../HeaderAccountLink/HeaderAccountLink";
import MenuOverlay from "../MenuOverlay/MenuOverlay";

export default function SideMenu({ isOpen, onClose }) {
    return (
    <MenuOverlay isOpen={isOpen}>
        <div className={`side-menu ${isOpen ? `side-menu_active` : ""}`}>
            <button className="side-menu__button-close" type="button" onClick={onClose} ></button>
            <HeaderNavigation isSideMenuOpen={true} onClose={onClose} />
            <HeaderAccountLink isSideMenuOpen={true} onClose={onClose} />
        </div>
    </MenuOverlay>
    )
}
