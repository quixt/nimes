var info = document.getElementsByClassName("info")[0];
var desc = info.querySelector(".info-desc");
var sec = info.querySelector("section");
var descImg = info.querySelector(".info-img");

function setDesc(el) {
    sec.style.display = "block";
    desc.innerHTML = el.getAttribute("data-desc");
    descImg.src = el.getAttribute("data-src");
}

function empty() {
    info.style.display = "none";
}

var info2 = document.getElementsByClassName("info")[1];
var desc2 = info2.querySelector(".info-desc");
var sec2 = info2.querySelector("section");
var descImg2 = info2.querySelector(".info-img");

function setDesc2(el) {
    sec2.style.display = "block";
    desc2.innerHTML = el.getAttribute("data-desc");
    descImg2.src = el.getAttribute("data-src");
}

function empty2() {
    info.style.display = "none";
}