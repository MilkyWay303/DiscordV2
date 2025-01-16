const logo = document.getElementById("hideLogo");
const button = document.getElementById("showBar1");
const navbar = document.getElementById("navBar1");

button.addEventListener("click", () => {
    navbar.classList.toggle("navDis1");
    navbar.classList.toggle("navDis2");
    logo.classList.toggle("navDis1");
});

