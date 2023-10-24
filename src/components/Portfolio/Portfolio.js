import IconLink from "../../images/icon__link.svg"
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="">
                        Статичный сайт
                        <img className="portfolio__link_img" alt="Ссылка на сайт" src={IconLink}/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="">
                        Адаптивный сайт
                        <img className="portfolio__link_img" alt="Ссылка на сайт" src={IconLink}/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="">
                        Одностраничное приложение
                        <img className="portfolio__link_img" alt="Ссылка на сайт" src={IconLink}/>
                    </a>
                </li>
            </ul>
    </section>
    )
}