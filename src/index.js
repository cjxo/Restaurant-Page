import "./styles.css";
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

const homeButton = document.querySelector("nav li:nth-child(1) button");
const menuButton = document.querySelector("nav li:nth-child(2) button");
const contactButton = document.querySelector("nav li:nth-child(3) button");
const divContent = document.getElementById("content");

function resetContent(newContentArray) {
    homeButton.setAttribute("class", "");
    menuButton.setAttribute("class", "");
    contactButton.setAttribute("class", "");
    while (divContent.firstChild) {
        divContent.firstChild.remove();
    }
    
    divContent.append(...newContentArray);
}

window.addEventListener("DOMContentLoaded", () => {
    resetContent(renderHome());
    homeButton.classList.add("toggled");
})

homeButton.addEventListener("click", (e) => {
    resetContent(renderHome());
    homeButton.classList.add("toggled");
});

menuButton.addEventListener("click", (e) => {
    resetContent(renderMenu());
    menuButton.classList.add("toggled");
})

contactButton.addEventListener("click", (e) => {
    resetContent(renderContact());
    contactButton.classList.add("toggled");
});