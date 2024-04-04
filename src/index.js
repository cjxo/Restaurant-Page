import "./styles.css";

// https://dishingupthedirt.com/recipes/harvest-duck-stew/
//import DuckStewImage from "./DuckStew.jpg";

//import DuckSalad from "./DuckSalad.jpeg";

//https://rivercottagefarm.net/roasted-duck-101/
//import DuckRoasted from "./DuckRoasted.jpg";

//import DuckColalge from "./DuckCollageNoSpace.png";
//import DuckColalge from "./DuckCollage_.png";
import DuckColalge from "./DuckCollage_space_rounded.png"

const images = document.querySelector(".images");

const duckStew = document.createElement("img");
duckStew.src = DuckColalge;
duckStew.width = "600";
//duckStew.height = "647";
duckStew.height = "660";

images.append(duckStew);