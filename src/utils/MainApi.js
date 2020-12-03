import React from 'react';

class MainApi extends React.Component {
    constructor({baseUrl, headers}) {
        super({baseUrl, headers});
        this.baseUrl = baseUrl;
        this.headers = headers;
    }
    _handleResponse(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`${res.status}`)
    }
    _handleError(err) {
        return err
    }
    registerUser({email, password, name}) {
        return fetch(`${this.baseUrl}/signup`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
        .then(this._handleResponse)
        .catch(this._handleError)
    }
    loginUser({email, password}) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(this._handleResponse)
        .catch(this._handleError)
    }
    getUser(token) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }
    saveArticle(token, {keyword, title, text, date, source, link, image}) {
        return fetch(`${this.baseUrl}/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                keyword,
                title,
                text,
                date,
                source,
                link,
                image,
            })
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }
    deleteArticle(token, cardId) {
        return fetch(`${this.baseUrl}/articles/${cardId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }
    getSavedArticles(token) {
        return fetch(`${this.baseUrl}/articles`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.t29.students.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default mainApi;