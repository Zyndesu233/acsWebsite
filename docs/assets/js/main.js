let activities = document.getElementById("activities");
let monthShelf = document.getElementById("monthly-shelf");
let bookshelf = document.getElementById("bookshelf");

function genActivities() {
    const events = [
        ["https://imgur.com/A19ey0m.jpeg", "鏈鋸人動畫展 – 香港", "日期：2025年1月17日至2025年3月16日<br>地點：旺角創興廣場地庫 INCUBASE Arena 新址"],
        ["https://imgur.com/85XzeVp.jpeg", "V家鑄台絕唱 II", "日期：2025年2月23日（日）<br>時間：20:00<br>地點：荃灣大會堂演奏廳"],
        ["https://imgur.com/LpHBIjA.png", "卡拉OK會聚", "日期：2025 年 2 月 28 日（五）<br>時間：19:00 - 21:30<br>地點：本社會室（龐萬倫學生中心 203 室）"]
    ];

    for(let i=0; i<events.length; i++) {
        activities.innerHTML += "<div class='event-container'><img src='"+events[i][0]+"' /><div class='event-description'><div class='event-title'>"+events[i][1]+"</div><div class='event-detail'>"+events[i][2]+"</div></div></div>";
    }
}

function genMonthly() {
    // post = [img, ig], start from feb, sorted
    const posts = [
        ["https://imgur.com/nYKSNnS.png", "https://www.instagram.com/p/DGHbxdlz2F5/"],
        ["https://imgur.com/FhrekHp.png", "https://www.instagram.com/p/DH2DCxJTc7f/"],
        ["https://imgur.com/NmQZ4gI.png", ""]
    ];

    for(let i=0; i<posts.length; i++) {
        monthShelf.innerHTML += "<a class='monthly' href='"+posts[i][1]+"' target='_blank'><img src='"+posts[i][0]+"' /></a>";
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