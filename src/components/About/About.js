import React from 'react';
import './About.css';
import '../../blocks/container.css';
import authorPicture from '../../images/image-03.png';
function About() {
    return (
        <div className="main__about">
            <div className="container">
                <div className="main__about-wrapper">
                    <img className="about__image" src={authorPicture} alt="Картинка автора"></img>
                    <div className="main__about-text">
                        <h2 className="main__about-wrapper-heading">Об авторе</h2>
                        <p className="main__about-wrapper-subtitle">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                        <p className="main__about-wrapper-subtitle">Также можно рассказать о процессе обучения в Практикуме, чем вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;