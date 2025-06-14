function MyApp() {
    const memberList = [{
        id: 0,
        name: "Tiger",
        position: "會長",
        imageSource: "Tiger.png"
    },
    {
        id: 1,
        name: "Issac",
        position: "內務副會長",
        imageSource: "Issac.png"
    },
    {
        id: 2,
        name: "Jacky",
        position: "外務副會長",
        imageSource: "Jacky.png"
    },
    {
        id: 3,
        name: "Vincy",
        position: "秘書",
        imageSource: "Vincy.png"
    },
    {
        id: 4,
        name: "Tin",
        position: "財政",
        imageSource: "Tin.png"
    },
    {
        id: 5,
        name: "Bobo",
        position: "宣傳",
        imageSource: "bobo.png"
    },
    {
        id: 6,
        name: "Wendy",
        position: "宣傳",
        imageSource: "wendy.png"
    },
    {
        id: 7,
        name: "Eric",
        position: "資訊",
        imageSource: "Eric.png",
        igLink: "",
        description: "hello"
    },
    {
        id: 8,
        name: "Ramasses",
        position: "資訊",
        imageSource: "Ramasses.png"
    },
    {
        id: 9,
        name: "Kelly",
        position: "市拓",
        imageSource: "Kelly.png"
    },  
    {
        id: 10,
        name: "Benny",
        position: "市拓",
        imageSource: "benny.png"
    },
    {
        id: 11,
        name: "Pearl",
        position: "出版",
        imageSource: "Pearl.png"
    },
    {
        id: 12,
        name: "John",
        position: "出版",
        imageSource: "John.png"
    },
    {
        id: 13,
        name: "Sing",
        position: "人力",
        imageSource: "Sing.png"
    },
    {
        id: 14,
        name: "Philip",
        position: "總務",
        imageSource: "Philip.png"
    },
    {
        id: 15,
        name: "Keith",
        position: "總務",
        imageSource: "Keith.png"
    }];

    const[currentMember, setCurrentMember] = React.useState(7);

    return (
        <main>
            <div id="character-picture">
                <img src={`./assets/img/characters/fullPicture/${memberList[currentMember].imageSource}`} />
            </div>
            <div id="character-description">
                <div id="character-name">{memberList[currentMember].name} / {memberList[currentMember].position}</div>
                {memberList[currentMember].description}
            </div>
        </main>
    );
}

const appEl = document.getElementById("character-app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);