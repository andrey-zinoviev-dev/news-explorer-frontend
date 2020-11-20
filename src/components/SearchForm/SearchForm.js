import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <form className="main__search">
            <input className="main__search-input" name="keyword" placeholder="Введите тему новости" autoComplete="off" />
            <button type="submit" className="main__search-submit">Искать</button>
        </form>
    )
}

export default SearchForm;