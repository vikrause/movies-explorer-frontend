import "./AboutProject.css"
export default function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <h2 className="about-project__title">
                О проекте
            </h2>
            <div className="about-project__container">
                <div className="about-project__description">
                    <h3 className="about-project__subtitle">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="about-project__description-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__description">
                    <h3 className="about-project__subtitle">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="about-project__description-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="about-project__duration">
                <div className="about-project__weeks about-project__weeks_one">
                    1 неделя
                </div>
                <div className="about-project__weeks about-project__weeks_four">
                    4 недели
                </div>
            </div>
            <div className="about-project__caption">
                <div className="about-project__caption-text about-project__caption-text_back_end">
                    Back-end
                </div>
                <div className="about-project__caption-text about-project__caption-text_front_end">
                    Front-end
                </div>
            </div>
        </section>
    )
}