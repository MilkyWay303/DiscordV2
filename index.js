// function showBar1() {
//     const element = document.getElementById("navBar1");  // Get the DIV element
//     element.classList.remove("navDis1"); // Remove mystyle class from DIV
//     element.classList.add("navDis2"); // Add newone class to DIV
//   }

// function showBar1() {
//     var element = document.querySelector("#navBar1");
//     element.classList.replace("navDis1", "navDis2");
// }

const logo = document.getElementById("hideLogo");
const button = document.getElementById("showBar1");
const navbar = document.getElementById("navBar1");

button.addEventListener("click", () => {
    navbar.classList.toggle("navDis1");
    navbar.classList.toggle("navDis2");
    logo.classList.toggle("navDis1");
});

