import menuFunction from "./MenuPage.js";
import aboutFunction from "./AboutPage.js";
import homeFunction from "./HomePage.js";
import './style.css';

const content = document.querySelector('#content');    

const homebtn = document.querySelector("#homeButton");
const menubtn = document.querySelector("#menuButton");
const aboutbtn = document.querySelector("#aboutButton");

homebtn.addEventListener("click",homeFunction);
menubtn.addEventListener("click", menuFunction);
aboutbtn.addEventListener("click",aboutFunction);




