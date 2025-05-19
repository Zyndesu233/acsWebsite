function MyApp() {
    const[eventList, setEventList] = React.useState([{
        name: "鏈鋸人動畫展 – 香港",
        interval: "2025年1月17日 (五) 至 2025年3月16日 (日)",
        date: "2025年1月17日 (五) ",
        time: "",
        venue: "旺角創興廣場地庫 INCUBASE Arena 新址",
        imageSource: "chainsaw.jpg",
        clicked: false,
    },
    {
        name: "V家鑄台絕唱 II",
        interval: "",
        date: "2025年2月23日 (日)",
        time: "20:00",
        venue: "荃灣大會堂演奏廳",
        imageSource: "vocaloid_esstentials.jpg"
    },
    {
        name: "卡拉OK會聚",
        interval: "",
        date: "2025年2月28日 (五)",
        time: "19:00 - 21:30",
        venue: "本社會室(龐萬倫學生中心203室)",
        imageSource: "karaoke.png"
    },
    {
        name: "文化祭",
        interval: "2025年3月28日 (五) 及 3月31日 (一)",
        date: "2025年3月28日 (五)",
        time: "12:00 - 19:00",
        venue: "文化廣場",
        imageSource: "bunkasai.png",
        clicked: true,
        clickedContent: "話咁快活動原來已經結束咗半個月🤯半個月前嘅日本文化祭......究竟我哋搞咗啲乜？一齊嚟睇下啦！😋"
    },
    {
        name: "聯校電影包場",
        interval: "",
        date: "2025年4月4日 (五)",
        time: "19:00",
        venue: "九龍塘又一城 Festival Grand Cinema",
        imageSource: "miku_film.png"
    },
    {
        name: "女僕座談會",
        interval: "",
        date: "2025年4月12日 (六)",
        time: "15:30-17:00",
        venue: "利黃瑤璧樓LT3",
        imageSource: "maid_cafe.png"
    },
    {
        name: "同人室樂聚",
        interval: "2025年5月10日 (六) 及 2025年5月11日 (日)",
        date: "2025年5月10日 (六)",
        time: "20:30",
        venue: "荃灣大會堂文娛廳",
        imageSource: "doujin_music.png"
    }]);

    const[dateOrder, setDayOrder] = React.useState("descending");

    const dateAscendingOrder = (o1, o2) => {
        if(o1.date === o2.date || !o1.date || !o2.date) return 0;
        return o1.date < o2.date? -1: 1;
    }

    const dateDescendingOrder = (o1, o2) => {
        if(o1.date === o2.date || !o1.date || !o2.date) return 0;
        return o1.date < o2.date? 1: -1;
    }

    function sortByDate(order) {
        let tempEventList = [...eventList];
        if(order==="descending") {
            tempEventList.sort(dateDescendingOrder);
            setDayOrder("ascending");
        } else if(order==="ascending") {
            tempEventList.sort(dateAscendingOrder);
            setDayOrder("descending");
        }
        setEventList(tempEventList);
    }

    function displayClickedBackground(index) {
        let background = document.getElementById("event-clicked-background-"+index);
        background.classList.add("active");
    }

    function closeClickedBackground(index) {
        let background = document.getElementById("event-clicked-background-"+index);
        background.classList.remove("active");
    }

    return (
        <main>
            <div className="title-container">
                <div className="section-title">活動</div>
                <div className="sort-function" onClick={()=>sortByDate(dateOrder)}>
                    日期
                    <img src="./assets/img/utilities/sort.svg" />
                </div>
            </div>
            {eventList.map((e, i) => 
                <div className="event-container" id={`event-container-${i}`} key={i}>
                    <img src={`./assets/img/activities/thumb/${e.imageSource}`} onClick={()=>displayClickedBackground(i)} />
                    <div className='event-description' onClick={()=>displayClickedBackground(i)}>
                        <div className='event-title'>{e.name}</div>
                        <div className='event-detail'>
                            {`日期：${e.interval===""? e.date: e.interval}`}<br />
                            {e.time? "時間："+e.time: ""} <br />
                            {`地點：${e.venue}`}
                        </div>
                    </div>
                    {e.clicked?
                        <div className="event-clicked-background" id={`event-clicked-background-${i}`}>
                            <div className="event-clicked-container" id={`event-clicked-container-${i}`}>
                                <div className="close-button" onClick={() => closeClickedBackground(i)}></div>
                                <div className="event-clicked-content">
                                    {e.clickedContent}
                                </div>
                            </div>
                        </div>
                        :""
                    }
                </div>
            )}
        </main>
    );
}

const appEl = document.getElementById("activities-app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);