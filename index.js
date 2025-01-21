const logo = document.getElementById("hideLogo");
const button = document.getElementById("showBar1");
const navbar = document.getElementById("navBar1");
const body = document.getElementById("body")

button.addEventListener("click", () => {
    navbar.classList.toggle("navDis1");
    navbar.classList.toggle("navDis2");
    logo.classList.toggle("navDis1");
    body.classList.toggle("block_scroll")
});

