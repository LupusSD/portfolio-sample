function readMore() {
    var dots = document.getElementById("dots")
    var more = document.getElementById("more")
    var btn = document.getElementById("btn")

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        more.style.display = "none";
        btn.innerHTML = "Read more";
    } else {
        dots.style.display = "none";
        more.style.display = "inline";
        btn.innerHTML="Close"
    }
}