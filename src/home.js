import DuckColalge from "./DuckCollage_space_rounded.png"
import { createDescCard } from "./util";

export default function renderMenu() {
    const introString = 
        `In Quack Bistro, we take great pleasure in showcasing the culinary talent
        that honors duck in all of its flavorful splendor. Our menu highlights a
        wide variety of duck cuisine, with dishes ranging from soft confit, stews, to crispy skin.
        Each bite is a symphony of flavors, textures, and scents, enhanced by the use of our locally-grown
        seasonal ingredients. Whether you are a food blogger, food connoisseur of fine
        dining, or simply desiring a delectable meal with friends a familty, Quack Bistro
        serves you with an unforgettable dining experience with every dish leaving you
        wanting for more.`;

    let nodes = [];
    const divDescription = document.createElement("div");
    divDescription.classList.add("description");

    const divIntroString = document.createElement("div");
    divIntroString.textContent = introString;

    divDescription.appendChild(createDescCard("Welcome to Quack Bistro.", divIntroString));
    
    const ulSchedule = document.createElement("ul");
    const liWeekday = document.createElement("li");
    const liWeekend = document.createElement("li");

    liWeekday.textContent = "Weekdays: 8am - 6pm";
    liWeekend.textContent = "Weekends: 8am - 4pm";

    ulSchedule.append(liWeekday, liWeekend);

    divDescription.appendChild(createDescCard("Schedule Hours", ulSchedule));

    const divImage = document.createElement("div");
    divImage.classList.add("images");

    const duckLivesMatter = document.createElement("img");
    duckLivesMatter.src = DuckColalge;
    duckLivesMatter.width = "600";
    //duckStew.height = "647";
    duckLivesMatter.height = "660";

    divImage.appendChild(duckLivesMatter);

    return [divDescription, divImage];
}