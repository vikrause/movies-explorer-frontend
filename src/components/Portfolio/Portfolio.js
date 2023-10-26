import IconLink from "../../images/icon__link.svg"
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link hover-link" href="https://github.com/vikrause/how-to-learn" target="_blank" rel="noreferrer">
                        Статичный сайт
                        <img className="portfolio__link-img" alt="Ссылка на сайт" src={IconLink}/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link hover-link" href="https://github.com/vikrause/russian-travel" target="_blank" rel="noreferrer">
                        Адаптивный сайт
                        <img className="portfolio__link-img" alt="Ссылка на сайт" src={IconLink}/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link hover-link" href="https://github.com/vikrause/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
                        Одностраничное приложение
                        <img className="portfolio__link-img" alt="Ссылка на сайт" src={IconLink}/>
                    </a>
                </li>
            </ul>
    </section>
    )
}