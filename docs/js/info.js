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