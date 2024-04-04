import "./styles.css";
import renderMenu from "./home";
import renderContact from "./contact";

// https://dishingupthedirt.com/recipes/harvest-duck-stew/
//import DuckStewImage from "./DuckStew.jpg";

//import DuckSalad from "./DuckSalad.jpeg";

//https://rivercottagefarm.net/roasted-duck-101/
//import DuckRoasted from "./DuckRoasted.jpg";

//import DuckColalge from "./DuckCollageNoSpace.png";
//import DuckColalge from "./DuckCollage_.png";

const homeButton = document.querySelector("nav li:nth-child(1) button");
const menuButton = document.querySelector("nav li:nth-child(2) button");
const contactButton = document.querySelector("nav li:nth-child(3) button");
const divContent = document.getElementById("content");

function resetContent(newContentArray) {
    while (divContent.firstChild) {
        divContent.firstChild.remove();
    }
    
    divContent.append(...newContentArray);
}

window.addEventListener("DOMContentLoaded", () => {
    resetContent(renderMenu());    
})

homeButton.addEventListener("click", (e) => {
    resetContent(renderMenu());
});

contactButton.addEventListener("click", (e) => {
    resetContent(renderContact());
});