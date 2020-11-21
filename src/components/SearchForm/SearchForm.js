import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <input className="search__form-input" name="keyword" placeholder="Введите тему новости" autoComplete="off" />
                <button type="submit" className="search__form-submit">Искать</button>
            </form>
        </section>
        
    )
}

export default SearchForm;