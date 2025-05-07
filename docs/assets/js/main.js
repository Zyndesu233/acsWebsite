let activities = document.getElementById("activities");
let articles = document.getElementById("articles");
let about = document.getElementById("about")


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

//genArticles();

function scrollCheck() {
    const currentY = window.scrollY;

    const activitiesHeight = activities.offsetHeight;
    const activitiesTop = activities.offsetTop-100;
    let activitiesNav = document.getElementById("nav-item-1");
    if(currentY > activitiesTop && currentY <= activitiesTop+activitiesHeight) {
        activitiesNav.classList.add("currentSection");
    } else {
        activitiesNav.classList.remove("currentSection");
    }

    const articlesHeight = articles.offsetHeight;
    const articlesTop = articles.offsetTop-100;
    let articlesNav = document.getElementById("nav-item-2");
    if(currentY > articlesTop && currentY <= articlesTop+articlesHeight) {
        articlesNav.classList.add("currentSection");
    } else {
        articlesNav.classList.remove("currentSection");
    }

    const aboutHeight = about.offsetHeight;
    const aboutTop = about.offsetTop-100;
    let aboutNav = document.getElementById("nav-item-3");
    if(currentY > aboutTop && currentY <= aboutTop+aboutHeight) {
        aboutNav.classList.add("currentSection");
    } else {
        aboutNav.classList.remove("currentSection");
    }
}

window.addEventListener("scroll", scrollCheck);