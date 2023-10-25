import "./AuthHeader.css"
import React from "react";
import {Link} from "react-router-dom";

export default function AuthHeader({ title }) {
    return (
        <section className="auth-header">
            <Link to="/" className="auth-header__logo"></Link>
            <h2 className="auth-header__title">{title}</h2>
        </section>
    )
}