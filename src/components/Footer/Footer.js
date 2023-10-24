import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </p>
            <div className="footer__copyright">
                <p className="footer__year">&copy; {new Date().getFullYear()}</p>
                <ul className="footer__links">
                    <li className="footer__item">
                        <a className="footer__link" href="" target="_blank" rel="noreferrer">
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="" target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}