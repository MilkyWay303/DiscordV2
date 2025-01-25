const logo = document.getElementById("hideLogo");
const button = document.getElementById("showBar1");
const navbar = document.getElementById("navBar1");
const body = document.getElementById("body")
const head = document.getElementById("header")


window.onscroll = function() {scrollHead()};

function scrollHead() {
    if (document.documentElement.scrollTop > 50 & window.innerWidth < 1000) {
    head.classList.add("header_color");
    }
    if (document.documentElement.scrollTop < 50) {
    head.classList.remove("header_color");
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "322px";
    document.getElementById("mySidenav").style.paddingLeft = "24px"
    logo.classList.toggle("navDis1");
    body.classList.toggle("block_scroll")
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("mySidenav").style.paddingLeft = "0px";
    logo.classList.toggle("navDis1");
    body.classList.toggle("block_scroll")
}