import React from 'react';
import './About.css';
import '../../blocks/container.css';
import authorPicture from '../../images/image-03.png';
function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__wrapper">
                    <img className="about__image" src={authorPicture} alt="Картинка автора"></img>
                    <div className="about__text">
                        <h2 className="about__text-heading">Об авторе</h2>
                        <p className="about__text-subtitle">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                        <p className="about__text-subtitle">Также можно рассказать о процессе обучения в Практикуме, чем вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;