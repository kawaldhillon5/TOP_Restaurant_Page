import "./home.css";
import channaMasala from "./images/Channa-masala.jpg";
import dalMakani from "./images/dal-makani.webp";
import paneerBhurji from "./images/paneer-bhurji.webp";

const home = function(){

    // containers for home page
    const homeContent = document.createElement("div");
    const leftContent = document.createElement("div");
    const rightContent = document.createElement("div");
    const leftTop = document.createElement("div");
    const leftTopLeft = document.createElement("div");
    const leftTopRight = document.createElement("div");
    const leftBottom = document.createElement("div");
    const leftBottomLeft = document.createElement("div");
    const leftBottomRight = document.createElement("div");
    const rightHead = document.createElement("div");
    const rightTop = document.createElement("div");
    const rightMiddle = document.createElement("div");
    const rightBottom = document.createElement("div");
    const rightTopLeft = document.createElement("div");
    const rightTopRight = new Image();
    const rightMiddleLeft = new Image();
    const rightMiddleRight = document.createElement("div");
    const rightBottomLeft = document.createElement("div");
    const rightBottomRight = new Image();

    // setting ids and classes for each container

    homeContent.setAttribute("id","home-main")

    leftContent.setAttribute("id", "home-left");
    leftTop.setAttribute("id","left-text");
    leftBottom.setAttribute("id","left-quote");
    leftTopLeft.setAttribute("id","left-top-left");
    leftTopRight.setAttribute("id","left-top-right");
    leftBottomLeft.setAttribute("id","left-bottom-left");
    leftBottomRight.setAttribute("id","left-bottom-right");

    leftTopLeft.textContent = "Why Dine at Dhillon's";
    leftTopRight.textContent = "Our food is popular as the cuisine offers great flavors and tastes that linger on. From fancy chicken dishes to different types of bread.";
    leftBottomLeft.textContent = "One cannot think well, love well, sleep well, if one has not dined well.";
    leftBottomRight.textContent = "- Virginia Woolf";

    rightContent.setAttribute("id","home-right");
    rightHead.setAttribute("id", "right-head");
    rightHead.classList.add("right-card");
    rightTop.classList.add("right-card");
    rightMiddle.classList.add("right-card");
    rightBottom.classList.add("right-card");
    rightTopLeft.setAttribute("class", "crad-text");
    rightMiddleRight.setAttribute("class", "crad-text");
    rightBottomLeft.setAttribute("class", "crad-text");
    rightTopRight.setAttribute("class", "card-img");
    rightMiddleLeft.setAttribute("class", "card-img");
    rightBottomRight.setAttribute("class", "card-img");
    
    rightHead.textContent = "Our Popular Dishes";
    rightTopLeft.textContent = "Chana masala originated in northern India. “Chana” means chickpea and “masala” refers to a blend of spices";
    rightMiddleRight.textContent = "Dal Makhani id made with Whole Black Lentils and Kidney Beans";
    rightBottomLeft.textContent = "Paneer Bhurji is a Popular dish made with Paneer(cheese)";

    rightTopRight.src = channaMasala;
    rightMiddleLeft.src = dalMakani;
    rightBottomRight.src = paneerBhurji;
    rightTopRight.alt = "Channa-masala"
    rightMiddleLeft.alt = "dal-makani"
    rightBottomRight.alt = "paneer-bhurji"

    homeContent.appendChild(leftContent);
    leftContent.appendChild(leftTop);
    leftContent.appendChild(leftBottom);
    leftTop.appendChild(leftTopLeft);
    leftTop.appendChild(leftTopRight);
    leftBottom.appendChild(leftBottomLeft);
    leftBottom.appendChild(leftBottomRight);

    homeContent.appendChild(rightContent);
    rightContent.appendChild(rightHead);
    rightContent.appendChild(rightTop);
    rightContent.appendChild(rightMiddle);
    rightContent.appendChild(rightBottom);
    rightTop.appendChild(rightTopLeft);
    rightTop.appendChild(rightTopRight);
    rightMiddle.appendChild(rightMiddleLeft);
    rightMiddle.appendChild(rightMiddleRight);
    rightBottom.appendChild(rightBottomLeft);
    rightBottom.appendChild(rightBottomRight);

    return homeContent;
}

export default home;