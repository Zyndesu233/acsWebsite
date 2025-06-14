function MyApp() {
    const[monthlyList, setMonthlyList] = React.useState([
        {
            name: "放學後失眠的你",
            date: "2025年2月16日",
            imageSource: "February.png",
            insLink: "https://www.instagram.com/p/DGHbxdlz2F5/"
        },
        {
            name: "Girls Band Cry",
            date: "2025年3月31日",
            imageSource: "March.png",
            insLink: "https://www.instagram.com/p/DH2DCxJTc7f/"
        },
        {
            name: "我推的孩子結局評價",
            date: "2025年4月28日",
            imageSource: "April.png",
            insLink: "https://www.instagram.com/p/DI_HIptT-gV/"
        },
        {
            name: "一桿青空",
            date: "2025年5月30日",
            imageSource: "May.png",
            insLink: "https://www.instagram.com/p/DKQ6dLnT0T_/"
        }
    ]);

    return (
        <main>
            {monthlyList.map((e, i) => (
                <a key={i} className="monthly" href={e.insLink} target='_blank'>
                    <img src={`./assets/img/monthly/${e.imageSource}`} />
                </a>
            ))}
        </main>
    );
}

const appEl = document.getElementById("monthly-shelf");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);