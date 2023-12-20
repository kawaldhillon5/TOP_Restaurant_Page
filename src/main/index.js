import "./styles.css";
import home from "../home/home.js";
import menu from "../menu/menu.js";
import about from "../about/about.js";

const run = function (){

    const content = document.querySelector("#content");
    const homebtn = document.querySelector("#home");
    
    homebtn.addEventListener("click", () => {
        content.textContent = "";
        content.appendChild(home());
    });
    const menubtn = document.querySelector("#menu");
    menubtn.addEventListener("click", () => {
        content.textContent = "";
        content.appendChild(menu());
    });
    const aboutbtn = document.querySelector("#about");
    aboutbtn.addEventListener("click", () => {
        content.textContent = "";
        content.appendChild(about());
    });

}

run();