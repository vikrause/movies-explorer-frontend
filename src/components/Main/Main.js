import React from "react";
import Promo from "../Promo/Promo";

import "./Main.css"
import AboutProject from "../AboutProject/AboutProject";

export default function Main() {
    return (
        <div className="main">
            <Promo />
            <AboutProject />
        </div>
    )
}