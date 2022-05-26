var stars = [];
var changed = false;
var currentRated = 0;
for (var i = 1; i <= 5; i++) {
    let star = document.createElement("span");
    star.className = "star";
    star.id = i;
    star.innerHTML = "★";
    star.addEventListener("mouseover", function(e) {
        changed = true;
        currentRated = parseInt(e.target.id);
        for (var i = 1; i <= 5; i++) {
            if (i <= parseInt(this.id)) {
                stars[i - 1].classList.add("active");
            } else {
                stars[i - 1].classList.remove("active");
            }
        }
    });
    stars.push(star);

}

var total = 0;

var starContainer = document.getElementById("star-container");


stars.forEach((star) => {
    starContainer.appendChild(star);
})

function setWidths() {
    var ratings = document.querySelectorAll(".bar");
    total = 0;
    ratings.forEach((rating) => {
        total += parseInt(rating.getAttribute("data-rating"));
    });
    ratings.forEach((bar) => {
        var is = bar.querySelector(".is");
        let math = (parseInt(bar.getAttribute("data-rating")) / total) * 100;
        math = Math.round(math);

        is.style.width = math + "%";
    });
}

setWidths();
var commentBox = document.getElementById("comment");
var comments = document.querySelector("#comments");

var submit = document.getElementById("leave-comment");
submit.addEventListener("click", function(e) {
    if (currentRated !== 0) {
        let r = document.getElementById(currentRated + "-stars");
        r.dataset.rating = r.getAttribute("data-rating") + 1;
        setWidths();
        if (commentBox.value !== "") {
            document.querySelector("#no-comments").style.display = "none";
            let comment = document.createElement("div");
            comment.className = "comment";
            comment.innerHTML =

                `
            <span class='comment-head'><img src='../assets/pfp.jpg' class='pfp'><h5 class='username'>You</h5></span>
            <hr class='comment-hr'>
            <p class='content'>${commentBox.value.replace(/\n/g,"<br>")}</p>
            `;

            comments.appendChild(comment);

            commentBox.value = "";
            console.log("c")
        }
    }
});