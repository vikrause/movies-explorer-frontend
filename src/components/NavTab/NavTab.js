import {Link} from "react-router-dom";

import "./NavTab.css"

export default function NavTab() {
    return (
        <nav className="nav-tab">
            <ul className="nav-tab__list">
                <li className="nav-tab__item">
                    <a href="#about-project" className="nav-tab__link hover-button">
                        О проекте
                    </a>
                </li>
                <li className="nav-tab__item">
                    <a href="#techs" className="nav-tab__link hover-button">
                        Технологии
                    </a>
                </li>
                <li className="nav-tab__item">
                    <a href="#about-me" className="nav-tab__link hover-button">
                        Студент
                    </a>
                </li>
            </ul>
        </nav>
    )
}