import React from 'react';
import './Preloader.css'
function Preloader() {
    return (
        <section className="preloader">
            <i class="circle-preloader"></i>
            <span className="preloader__span">Идет поиск новостей...</span>
        </section>
    )
}
export default Preloader;