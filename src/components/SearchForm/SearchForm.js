import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
    const [searchInputValue, setSearchInputValue] = React.useState("");
    function changeInputValueOnChange(evt) {
        const {name, value} = evt.target;
        setSearchInputValue(value);
    }
    function submit(evt) {
        props.onSearchSubmit(evt, searchInputValue);
    }
    return (
        <section className="search">
            <form className="search__form" onSubmit={submit}>
                <input className="search__form-input" name="keyword" placeholder="Введите тему новости" autoComplete="off" required={true} onInput={changeInputValueOnChange}/>
                <button type="submit" className="search__form-submit">Искать</button>
            </form>
        </section>
        
    )
}

export default SearchForm;