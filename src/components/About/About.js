import React from 'react';
import './About.css';
import '../../blocks/container.css';
import authorPicture from '../../images/author_square.png';
function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__wrapper">
                    <img className="about__image" src={authorPicture} alt="Картинка автора"></img>
                    <div className="about__text">
                        <h2 className="about__text-heading">Об авторе</h2>
                        <p className="about__text-subtitle">Это блок с описанием автора проекта. Автор- Зиновьев Андрей, владею навыками базовой разработки React (useState, Context, useRef, Switch, Router, ProtectedRouter). Также могу подключать базу данных на сервере и использовать ее для хранения данных.</p>
                        <p className="about__text-subtitle">Обучение было долгим и сложным, особенно ООП и его основы, но эти основы я усвоил и осилил. Потом я освоил основу работы с API на nodejs и разработку интерфейса на React.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;