// import firstNews from '../images/image_08.png';
// import secondNews from '../images/image_04.png';
// import thirdNews from '../images/image_07.png';

const news = [
    {
        id: 1,
        keyword: "Парки",
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2020/11/AP20322511095550.jpg",
        date: "2020-11-27T20:54:24Z",
        title: "Национальные достояние - парки",
        link: "https://www.foxnews.com/world/ethiopia-declares-victory-tigray-capital",
        text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков - охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
        source: "лента.ру"
    },
    {
        id: 2,
        keyword: "Чудеса",
        image: "https://static-41.sinclairstoryline.com/resources/media/7856ef52-9218-4330-b3de-44067548edb5-large16x9_062420webCapture.PNG?1606597772270",
        date: "2020-11-02T18:51:00Z",
        title: "Лесные огоньки: история одной фотографии",
        link: "https://www.forbes.com/sites/johnnavin/2020/11/28/5-asset-managers-hitting-the-new-highs-list-this-week/",
        text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.",
        source: "медуза"
    },
    {
        id: 3,
        keyword: "Просторы",
        image: "https://static-41.sinclairstoryline.com/resources/media/7856ef52-9218-4330-b3de-44067548edb5-large16x9_062420webCapture.PNG?1606597772270",
        date: "2020-11-12T18:51:00Z",
        title: "Первозданная тайга»: новый фотопроект Игоря Шпиленка",
        link: "https://13wham.com/news/local/record-number-of-covid-19-cases-reported-in-monroe-county",
        text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где",
        source: "риа"
    },
    {
        id: 4,
        keyword: "Парки",
        image: "https://static-41.sinclairstoryline.com/resources/media/7856ef52-9218-4330-b3de-44067548edb5-large16x9_062420webCapture.PNG?1606597772270",
        date: "2 августа, 2019",
        title: "Карточка 4",
        link: "https://www.nj.com/news/2020/11/full-november-beaver-moon-and-lunar-eclipse-to-put-on-a-sky-show-this-week.html",
        text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков - охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
        source: "лента.ру"
    },
    {
        id: 5,
        keyword: "Парки",
        image: "https://www.nj.com/resizer/aIkoLOrdLt17x_fDPpHjqqlEttM=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/L2KM3Q73MZCSRJJFSHXJKORHXI.JPG",
        date: "2 августа, 2019",
        title: "Карточка 5",
        link: "https://www.mercurynews.com/2020/11/28/santa-clara-county-to-release-new-covid-19-restrictions-on-heels-of-san-francisco/",
        text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.",
        source: "медуза"
    },
    {
        id: 6,
        keyword: "Парки",
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2020/11/Matt-Patricia.jpg",
        date: "2 августа, 2019",
        title: "Карточка 6",
        link: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SHBjOTljS2U5MHPSAQA?oc=5",
        text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где",
        source: "риа"
    },
    {
        id: 7,
        keyword: "Парки",
        image: "https://www.mercurynews.com/wp-content/uploads/2020/11/SJM-L-SCCBAN-1129-5.jpg?w=1024&h=683",
        date: "2 августа, 2019",
        title: "Карточка 7",
        link: "https://www.cbssports.com/college-football/news/alabama-vs-auburn-prediction-pick-odds-point-spread-live-stream-tv-channel-footbal-game-lines/",
        text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков - охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
        source: "лента.ру"
    },
    {
        id: 8,
        keyword: "Парки",
        image: null,
        date: "2 августа, 2019",
        title: "Карточка 8",
        link: "https://www.billboard.com/articles/columns/pop/9490844/selena-gomez-saved-by-the-bell-kidney-transplant-joke",
        text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.",
        source: "медуза"
    },
    {
        id: 9,
        keyword: "Парки",
        image: "",
        date: "2 августа, 2019",
        title: "Карточка 9",
        link: "https://nypost.com/2020/11/28/how-to-watch-mike-tyson-vs-roy-jones-jr-odds-special-rules/",
        text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где",
        source: "риа"
    },
    {
        id: 10,
        keyword: "Парки",
        image: "https://sportshub.cbsistatic.com/i/r/2019/12/01/5eaa8807-c9a5-46f4-9f02-9d9b3af35e9b/thumbnail/1200x675/c408b948c3504ba97d02c819fc8158fb/2019-iron-bowl-alabama-auburn.jpg",
        date: "2 августа, 2019",
        title: "Карточка 10",
        link: "https://www.foxnews.com/world/ethiopia-declares-victory-tigray-capital",
        text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков - охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
        source: "лента.ру"
    },
]
// const moreNews = [
//     {
//     id: 4,
//     image: firstNews,
//     date: "2 августа, 2019",
//     title: "Национальные достояние - парки",
//     text: "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков - охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
//     source: "лента.ру"
//     },
//     {
//         id: 5,
//         image: secondNews,
//         date: "2 августа, 2019",
//         title: "Лесные огоньки: история одной фотографии",
//         text: "Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.",
//         source: "медуза"
//     },
//     {
//         id: 6,
//         image: thirdNews,
//         date: "2 августа, 2019",
//         title: "Первозданная тайга»: новый фотопроект Игоря Шпиленка",
//         text: "Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где",
//         source: "риа"
//     }
// ]
export {
    news
};