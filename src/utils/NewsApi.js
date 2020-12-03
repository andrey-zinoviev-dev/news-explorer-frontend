import React from 'react';

class NewsApi extends React.Component {
    constructor(newsUrl) {
        super(newsUrl);
        this.newsUrl = newsUrl;
    }
    _handleResponse(res) {
        if(res) {
            return res.json();
        }
        return Promise.reject(`Ошибка: Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`);
    }
    _handleError(err) {
        return err
    }
    getNews(topic) {
        return fetch(`${this.newsUrl}/everything?q=${topic}&apiKey=a04321bff2e74be5a4252bd593523c7e&pageSize=100`)
        .then(this._handleResponse)
        .catch(this._handleError)
    }
}
const newsApi = new NewsApi('https://nomoreparties.co/news/v2');
export default newsApi;