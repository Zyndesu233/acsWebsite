// Credit: Coach Wong
const delay = getComputedStyle(document.documentElement).getPropertyValue('--animation-duration').slice(0, -2);

// thumb, main, ig
const data = [
    ["oiHDMwK", "4KTitvl", "DEl246TzSvy"],
    ["Twxdlio", "C5tNj9l", "DEjp7uDTEuK"],
    ["qwfGR4x", "oTyeXsH", "DEoYDMbTvlo"],
    ["E7IcX2g", "H89cV92", "DEuAjOLz152"],
    ["o55uuEC", "2VEtxBB", "DEthovYzYo9"],
    ["8hJBwpb", "Lel602H", "DEhFJi7TQqE"],
    ["yujLpyP", "AabSIoO", "DEfHeHhT6Bw"],
    ["JdGuDUj", "WU5tOY5", "DEgqPEqTfcF"],
    ["7PMp1ns", "Q4IMpv7", "DEe6T1GTsQZ"],
    ["A7C89bU", "7lhCEgv", "DEmcc72Tyn9"],
    ["E4wG307", "jAFCpHo", "DEqyi68ztPY"],
    ["fkXK0QL", "jTQK1ZE", "DEwHk-KzmE0"],
    ["XyOsK2N", "VgUCyMj", "DErpfVGTZGG"],
    ["4cDdfAH", "BaI9TA2", "DErOAxCzIms"],
    ["oaVBq6U", "IgcKdRw", "DEjOdO2TAST"],
    ["lsMrUqb", "Onuwq8y", "DEozgtGTCin"]
];

let container = document.getElementById("visual-navi");
let img = document.getElementById("member-main-img");

function genButton() {
    for (let i = 0; i < data.length; i++) {
        container.innerHTML += "<div class='visual-navi-item' id='item-" + i + "' style='background-image: url(https://imgur.com/" + data[i][0] + ".png);' onclick='changeImage(" + i + ");'>";
    }
}

genButton();

let cooldown = false;

function changeImage(id = 0) {
    if(cooldown) {
        return;
    }
    cooldown = true;
    img.classList.add("animation");
    setTimeout(function () {
        img.style.backgroundImage = "url(https://imgur.com/" + data[id][1] + ".png)";
        let item = document.getElementById("item-" + id);
        let items = document.getElementsByClassName("visual-navi-item");
        let container = document.getElementById("main-img-container");
        container.href = "https://www.instagram.com/p/"+data[id][2];
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("current");
        }
        item.classList.add("current");
        img.classList.remove("animation");
        cooldown = false;
    }, delay);
}

changeImage();