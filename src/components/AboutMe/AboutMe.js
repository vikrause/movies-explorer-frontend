import "./AboutMe.css";
import StudentPhoto from "../../images/Student_photo.jpg"
export default function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
            <div className="about-me__description">
                <h3 className="about-me__description-name">Виктория</h3>
                <p className="about-me__description-about">Фронтенд-разработчик, 23 года</p>
                <p className="about-me__description-text">
                    Я родилась в солнечном городе Сочи, окончила колледж по специальности Садово-паркового строительства. Сейчас живу в Москве. С самого детства меня привлекала любая деятельность, связанная с творчеством. Больше года старалась попасть в геймдев на вакансию концепт-художника, но поняла, что это не моя профессия. Два года назад я попробовала написать страничку, используя HTML и CSS, и какого было мое удивление! Оказалось, можно создавать прекрасные вещи при помощи кода. Благодаря пройденному курсу Веб-разработчика от Яндекс.Практикума, в моих руках теперь есть необходимые инструменты для воплощениях всех моих кодовых шедевров.
                </p>

                <a className="about-me__link hover-link" href="https://github.com/vikrause" target="_blank" rel="noreferrer">
                    Github
                </a>
            </div>
                <img className="about-me__photo" alt="Фото студента" src={StudentPhoto} />
            </div>
        </section>
    )
}
