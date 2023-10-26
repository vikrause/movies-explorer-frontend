import "./AuthHeader.css"
import React from "react";
import {Link} from "react-router-dom";

export default function AuthHeader({ title }) {
    return (
        <section className="auth-header">
            <Link to="/" className="auth-header__logo hover-button"></Link>
            <h1 className="auth-header__title">{title}</h1>
        </section>
    )
}