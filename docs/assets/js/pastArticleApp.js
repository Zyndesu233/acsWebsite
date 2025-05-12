function MyApp() {
    const[pastArticleList, setPastArticleList] = React.useState([
        {
            name: "漫家燈火 一期會刊",
            imageSource: "29-01.png",
            bookLink: "https://heyzine.com/flip-book/c51ed606f0.html"
        },
        {
            name: "花火瀾漫 二期會刊",
            imageSource: "28-02.png",
            bookLink: "https://heyzine.com/flip-book/922188a818.html"
        },
        {
            name: "花火瀾漫 一期會刊",
            imageSource: "28-01.png",
            bookLink: "https://heyzine.com/flip-book/12b94637ef.html"
        },
        {
            name: "夢凝漫空 二期會刊",
            imageSource: "27-02.png",
            bookLink: "https://heyzine.com/flip-book/00a0fcb504.html"
        },
        {
            name: "夢凝漫空 一期會刊",
            imageSource: "27-01.jpg",
            bookLink: "https://issuu.com/cuhkacs27/docs/_"
        },
        {
            name: "千戀漫花 二期會刊",
            imageSource: "24-02.png",
            bookLink: "https://heyzine.com/flip-book/4383918236.html"
        },
        {
            name: "皓月漫千 一期會刊",
            imageSource: "23-01.png",
            bookLink: ""
        },
        {
            name: "百漫大道 一期會刊",
            imageSource: "11-01.png",
            bookLink: ""
        }
    ]);

    return (
        <main>
            {pastArticleList.map((e, i) => (
                <a className="book-container" href={e.bookLink} target="_blank" key={i}>
                    <div className="book-img-container">
                        <img src={`./assets/img/past-articles/${e.imageSource}`} />
                    </div>
                    <div className="book-detail">{e.name}</div>
                </a>
            ))}
        </main>
    );
}

const appEl = document.getElementById("past-article-shelf");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);