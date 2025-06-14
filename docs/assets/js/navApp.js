function MyApp() {
    const[navItemList, setNavItemList] = React.useState([{
        name: "活動",
        link: "#activities"
    },
    {
        name: "會刊",
        link: "#articles"
    },
    {
        name: "關於",
        link: "#about"
    }]); 

    return (
    <main>
        <a id="nav-icon-container" href="#main-img">
            <img id="nav-icon" src="./assets/img/cuhkacs30/acs30word.png" />
        </a>
        <div id="nav-items">
            {navItemList.map((e, i) => 
                <a className="nav-item" key={i} id={`nav-item-${i}`} href={e.link}>{e.name}</a>
            )}
        </div>
        <div className="nav-links">
            <a className="nav-link" href="https://cuacs.org/">
                <img src="./assets/img/cuhkacs.png" />
            </a>
            <a className="nav-link" href="https://www.instagram.com/cuhkacs/">
                <img src="./assets/img/cuhkacs.png" /><img src="./assets/img/social-media/Instagram_Glyph_White.svg" />
            </a>
            <a className="nav-link" href="https://www.facebook.com/CUHKACS">
                <img src="./assets/img/cuhkacs.png" /><img src="./assets/img/social-media/Facebook_Logo_Secondary.png" />
            </a>
            <a className="nav-link" href="https://www.instagram.com/cuhkacs30/">
                <img src="./assets/img/social-media/Instagram_Glyph_White.svg" /> 漫漫翔夜
            </a>
        </div>
    </main>
    );
}

const appEl = document.getElementById("nav-app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);