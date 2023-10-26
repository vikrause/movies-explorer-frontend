import "./AuthFooter.css"
import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./AuthFooter.css"

export default function AuthFooter({ buttonText, text, linkText, path}) {
    const location = useLocation();

    return (
        <section className={`auth-footer ${location.pathname === "/signup" ? "auth-footer_place_signup" : ""}`}>
            <button className="auth-footer__button hover-button" type="submit">{buttonText}</button>
            <div className="auth-footer__text-container">
                <p className="auth-footer__text">{text}</p>
                <Link to={path} className="auth-footer__link hover-link">{linkText}</Link>
            </div>
        </section>
    )
}