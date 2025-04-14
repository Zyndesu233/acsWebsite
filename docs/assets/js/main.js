let mainImg = document.getElementById("main-img");
let activities = document.getElementById("activities");
let articles = document.getElementById("articles");
let monthShelf = document.getElementById("monthly-shelf");
let bookshelf = document.getElementById("bookshelf");

function genActivities() {
    const events = [
        ["chainsaw.jpg", "鏈鋸人動畫展 – 香港", "日期：2025年1月17日至2025年3月16日<br>地點：旺角創興廣場地庫 INCUBASE Arena 新址"],
        ["vocaloid_esstentials.jpg", "V家鑄台絕唱 II", "日期：2025年2月23日（日）<br>時間：20:00<br>地點：荃灣大會堂演奏廳"],
        ["karaoke.png", "卡拉OK會聚", "日期：2025年2月28日（五）<br>時間：19:00 - 21:30<br>地點：本社會室（龐萬倫學生中心203室）"],
        ["bunkasai.png", "文化祭", "日期：2025年3月28日（五）及3月31日（一）<br>時間：12:00 - 19:00<br>地點：文化廣場"],
        ["miku_film.png", "聯校電影包場", "日期：2025年4月4日（五）<br>時間19:00<br>地點：九龍塘又一城 Festival Grand Cinema"],
        ["maid_cafe.png", "女僕座談會", "日期：2025年4月12日（六）<br>時間15:30-17:00<br>地點：利黃瑤璧樓LT3"]
    ];

    for(let i=events.length-1; i>=0; i--) {
        activities.innerHTML += "<div class='event-container'><img src='./assets/img/activities/"+events[i][0]+"' /><div class='event-description'><div class='event-title'>"+events[i][1]+"</div><div class='event-detail'>"+events[i][2]+"</div></div></div>";
    }
}

function genMonthly() {
    // post = [img, ig], start from feb, sorted
    const posts = [
        ["February.png", "https://www.instagram.com/p/DGHbxdlz2F5/"],
        ["March.png", "https://www.instagram.com/p/DH2DCxJTc7f/"],
        ["April.jpg", ""]
    ];

    for(let i=0; i<posts.length; i++) {
        monthShelf.innerHTML += "<a class='monthly' href='"+posts[i][1]+"' target='_blank'><img src='./assets/img/monthly/"+posts[i][0]+"' /></a>";
    }
}

function genArticles() {
    // book = [name, img, online-bk]
    const books = [
        ["漫家燈火 一期會刊", "https://imgur.com/zDp1YgA.png", "https://heyzine.com/flip-book/c51ed606f0.html"],
        ["花火瀾漫 二期會刊", "https://imgur.com/pZq2cQO.png", "https://heyzine.com/flip-book/922188a818.html"],
        ["花火瀾漫 一期會刊", "https://imgur.com/zb2d78T.png", "https://heyzine.com/flip-book/12b94637ef.html"],
        ["夢凝漫空 二期會刊", "https://imgur.com/bu352WS.png", "https://heyzine.com/flip-book/00a0fcb504.html"],
        ["夢凝漫空 一期會刊", "https://imgur.com/Kaq2RgW.png", "https://issuu.com/cuhkacs27/docs/_"],
        ["千戀漫花 二期會刊", "https://imgur.com/hC95jrG.png", "https://heyzine.com/flip-book/4383918236.html"],
        ["皓月漫千 一期會刊", "https://imgur.com/FpaCAcO.png", ""],
        ["百漫大道 一期會刊", "https://imgur.com/8crudua.png", ""]
    ];

    for(let i=0; i<books.length; i++) {
        bookshelf.innerHTML += "<a class='book-container' href='"+books[i][2]+"' target='_blank'><div class='book-img-container'><img src='"+books[i][1]+"' /></div><div class='book-detail'>"+books[i][0]+"</div></a>";
    }
}

genActivities();
genArticles();
genMonthly();

function scrollCheck() {
    const currentY = window.scrollY;

    const mainImgHeight = mainImg.offsetHeight;
    const mainImgTop = mainImg.offsetTop-100;
    let mainImgNav = document.getElementById("nav-item-1");
    if(currentY > mainImgTop && currentY <= mainImgTop+mainImgHeight) {
        mainImgNav.classList.add("currentSection");
    } else {
        mainImgNav.classList.remove("currentSection");
    }

    const activitiesHeight = activities.offsetHeight;
    const activitiesTop = activities.offsetTop-100;
    let activitiesNav = document.getElementById("nav-item-2");
    if(currentY > activitiesTop && currentY <= activitiesTop+activitiesHeight) {
        activitiesNav.classList.add("currentSection");
    } else {
        activitiesNav.classList.remove("currentSection");
    }

    const articlesHeight = articles.offsetHeight;
    const articlesTop = articles.offsetTop-100;
    let articlesNav = document.getElementById("nav-item-3");
    if(currentY > articlesTop && currentY <= articlesTop+articlesHeight) {
        articlesNav.classList.add("currentSection");
    } else {
        articlesNav.classList.remove("currentSection");
    }

    const aboutHeight = about.offsetHeight;
    const aboutTop = about.offsetTop-100;
    let aboutNav = document.getElementById("nav-item-4");
    if(currentY > aboutTop && currentY <= aboutTop+aboutHeight) {
        aboutNav.classList.add("currentSection");
    } else {
        aboutNav.classList.remove("currentSection");
    }
}

window.addEventListener("scroll", scrollCheck);