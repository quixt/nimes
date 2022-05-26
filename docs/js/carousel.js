var currentIndex = 0;
var carousel = document.getElementById("carousel");

function setImage(index) {
    carousel.style.backgroundImage = "url(" + "../assets/" + images[index] + ")";

}

function timer() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    setImage(currentIndex);

    setTimeout(timer, 6000);
}

function next() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    setImage(currentIndex);
}

function prev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    setImage(currentIndex);
}


setImage(currentIndex);
setTimeout(timer, 6000);