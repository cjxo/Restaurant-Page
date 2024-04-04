import { createDescCard } from "./util";

// https://www.parsnipsandpastries.com/duck-confit-crostini/
import DuckConfitCrostiniWithParsnipPureeAndFig from "./DuckConfitCrostiniWithParsnipPureeAndFig.png"

// https://gooddinnermom.com/roasted-garlic-soup/
import RoastedGarlicSoupwithParmesanCheese from "./RoastedGarlicSoupwithParmesanCheese.jpg"

// https://whiteplateblankslate.com/hoisin-duck-bao/
import HosinDuckBao from "./HosinDuckBao.png"

// https://easyfood.ie/recipe/hoisin-duck-and-cucumber-bites/
import HoisinDuckAndCucumberBites from "./HoisinDuckAndCucumberBites.jpg"

// https://dishingupthedirt.com/recipes/harvest-duck-stew/
import HarvestDuckStew from "./DuckStew.jpg";

//https://rivercottagefarm.net/roasted-duck-101/
import RoastedDuck from "./DuckRoasted.jpg";

//https://www.krumpli.co.uk/roast-duck-legs/
import SlowRoastDuckLegs from "./SlowRoastDuckLegs.png";

// https://www.thepioneerwoman.com/food-cooking/recipes/a39540224/peach-bellini-recipe/
import PeachBellini from "./PeachBellini.jpg"

// https://valentinascorner.com/chocolate-milkshake-recipe/
import ChocolateMilkshake from "./ChocolateMilkshake.jpg";

// https://divascancook.com/strawberry-soda-recipe-juneteenth/
import StrawberrySoda from "./StrawberrySoda.jpg";

function createFoodListItem(foodName, costInDollarsStr, description) {
    const liResult = document.createElement("li");
    const divNameAndPrice = document.createElement("div");
    divNameAndPrice.setAttribute("class", "name-and-price");

    const divName = document.createElement("div");
    divName.textContent = foodName;

    const divPrice = document.createElement("div");
    divPrice.textContent = costInDollarsStr;

    divNameAndPrice.append(divName, divPrice);

    const divDescription = document.createElement("div");
    divDescription.setAttribute("class", "food-description");
    divDescription.textContent = description;

    liResult.append(divNameAndPrice, divDescription);

    return(liResult);
}

function createFoodCategory(categoryName, foodDatabase) {
    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "menu-container");
    
    const divListContainer = document.createElement("div");
    divListContainer.setAttribute("class", "list-container");
    
    const divImageContainer = document.createElement("div");
    divImageContainer.setAttribute("class", "menu-images");

    const ulFoods = document.createElement("ul");

    foodDatabase.forEach((food, idx) => {
        ulFoods.appendChild(createFoodListItem(`(${idx + 1}) ` + food.name, "$" + food.price, food.description));
        
        const img = document.createElement("img");
        img.src = food.imageSrc;

        const imgNumber = document.createElement("div");
        imgNumber.textContent = `(${idx + 1})`;

        const divImageNumberPair = document.createElement("div");
        divImageNumberPair.setAttribute("class", "image-number-pair");
        divImageNumberPair.append(img, imgNumber);

        divImageContainer.append(divImageNumberPair);
    });

    divListContainer.appendChild(ulFoods);
    
    divContainer.append(divListContainer, divImageContainer);

    return createDescCard(categoryName, divContainer);
}

export default function renderMenu() {
    // the hardest part is researching foods
    const appetizerList = [
        {
            name: "Duck Confit Crostini With Parsnip Puree and Fig",
            price: "7",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: DuckConfitCrostiniWithParsnipPureeAndFig,
        },
        {
            name: "Roasted Garlic Soup with Parmesan Cheese",
            price: "4",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: RoastedGarlicSoupwithParmesanCheese,
        },
        {
            name: "Hoisin Duck Bao",
            price: "8",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: HosinDuckBao,
        },
        {
            name: "Hoisin Duck And Cucumber Bites",
            price: "7",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: HoisinDuckAndCucumberBites
        }
    ];

    const entreeList = [
        {
            name: "Harvest Duck Stew",
            price: "11",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: HarvestDuckStew
        },
        {
            name: "Roasted Duck",
            price: "12",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: RoastedDuck
        },
        {
            name: "Slow Roast Duck Legs",
            price: "14",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: SlowRoastDuckLegs
        }
    ];

    const beverageList = [
        {
            name: "Peach Bellini",
            price: "4",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: PeachBellini
        },
        {
            name: "Chocolate Milkshake",
            price: "3",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: ChocolateMilkshake
        },
        {
            name: "Strawberry Soda",
            price: "3",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
            imageSrc: StrawberrySoda
        }
    ];

    const divMenu = document.createElement("div");
    divMenu.setAttribute("class", "menu");
    divMenu.append(
        createFoodCategory("Appetizer", appetizerList),
        createFoodCategory("Entrée", entreeList),
        createFoodCategory("Beverage", beverageList)
    );
    return [divMenu];
}