import React from 'react';
import './Preloader.css'
function Preloader() {
    return (
        <section className="preloader">
            <i className="circle-preloader"></i>
            <span className="preloader__span">Идет поиск новостей...</span>
        </section>
    )
}
export default Preloader;