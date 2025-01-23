const logo = document.getElementById("hideLogo");
const button = document.getElementById("showBar1");
const navbar = document.getElementById("navBar1");
const body = document.getElementById("body")
const head = document.getElementById("header")

button.addEventListener("click", () => {
    navbar.classList.toggle("navDis1");
    navbar.classList.toggle("navDis2");
    logo.classList.toggle("navDis1");
    body.classList.toggle("block_scroll")
});

window.onscroll = function() {scrollHead()};

function scrollHead() {
    if (document.documentElement.scrollTop > 50 & window.innerWidth < 1000) {
    head.classList.add("header_color");
    }
    if (document.documentElement.scrollTop < 50) {
    head.classList.remove("header_color");
    }
 }
