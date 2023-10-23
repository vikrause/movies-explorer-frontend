import { Link } from "react-router-dom";

import React from "react";
import './HeaderAccountLink.css'

export default function HeaderAccountLink({ isSideMenuOpen, onClose }) {
    return (
        <Link to="/profile" className={`header-account-link ${isSideMenuOpen ? "header-account-link_place_side" : "header-account-link_hidden"}`} onClick={onClose}>
            Аккаунт
        </Link>
    )

}
