import "./styles.css";
import home from "../home/home.js";
import menu from "../menu/menu.js";
import about from "../about/about.js";

const run = function (){

    const content = document.querySelector("#content");
    const homebtn = document.querySelector("#home");
    const menubtn = document.querySelector("#menu");
    const aboutbtn = document.querySelector("#about");

    content.appendChild(home());
    homebtn.classList.add("selected");

    homebtn.addEventListener("click", () => {
        content.textContent = "";
        content.appendChild(home());
        homebtn.classList.add("selected");
        menubtn.classList.remove("selected");
        aboutbtn.classList.remove("selected");
    });

    menubtn.addEventListener("click", () => {
        content.textContent = "";
        content.appendChild(menu());
        homebtn.classList.remove("selected");
        menubtn.classList.add("selected");
        aboutbtn.classList.remove("selected");

    });

    aboutbtn.addEventListener("click", () => {
        content.textContent = "";
        content.appendChild(about());
        homebtn.classList.remove("selected");
        menubtn.classList.remove("selected");
        aboutbtn.classList.add("selected");

    });

}

run();