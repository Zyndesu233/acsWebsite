let activities = document.getElementById("activities");
let articles = document.getElementById("articles");
let about = document.getElementById("about")

function scrollCheck() {
    const currentY = window.scrollY;

    const activitiesHeight = activities.offsetHeight;
    const activitiesTop = activities.offsetTop-100;
    let activitiesNav = document.getElementById("nav-item-0");
    if(currentY > activitiesTop && currentY <= activitiesTop+activitiesHeight) {
        activitiesNav.classList.add("currentSection");
    } else {
        activitiesNav.classList.remove("currentSection");
    }

    const articlesHeight = articles.offsetHeight;
    const articlesTop = articles.offsetTop-100;
    let articlesNav = document.getElementById("nav-item-1");
    if(currentY > articlesTop && currentY <= articlesTop+articlesHeight) {
        articlesNav.classList.add("currentSection");
    } else {
        articlesNav.classList.remove("currentSection");
    }

    const aboutHeight = about.offsetHeight;
    const aboutTop = about.offsetTop-100;
    let aboutNav = document.getElementById("nav-item-2");
    if(currentY > aboutTop && currentY <= aboutTop+aboutHeight) {
        aboutNav.classList.add("currentSection");
    } else {
        aboutNav.classList.remove("currentSection");
    }
}

window.addEventListener("scroll", scrollCheck);