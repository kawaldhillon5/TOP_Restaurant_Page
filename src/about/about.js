import "./about.css";
const about = function(){

    const aboutMain = document.createElement("div");
    aboutMain.setAttribute("id","about-main");

    const contentAdder = function (arr){

        let n = 0;
        const div = document.createElement("div");
        arr.forEach(element => {
           
            const elm = document.createElement("p");
            elm.classList.add("elm");
            elm.textContent = element;
            div.appendChild(elm);
            
        });
        return div;
    };

    const address = ["111 Punjab Street,", "Punjab, KS,", "PPP 777"];
    const openHours = ["Mon - Fri  10 am to 9 pm ","Sat - Sun  11 am to 11:30 pm"];

    const aboutTop = document.createElement("div");
    aboutTop.setAttribute("id","about-top");
    aboutMain.appendChild(aboutTop);

    const aboutTopTop = document.createElement("div");
    aboutTopTop.setAttribute("id","about-top-top");
    const aboutTopBottom = document.createElement("div");
    aboutTopBottom.setAttribute("id","about-top-bottom");
    aboutTopTop.classList.add("top");

    aboutTopTop.textContent = "Our Story";
    aboutTopBottom.textContent = "We are a Family Owned Authentic Punjabi Restaurant. Our commitment is to provide Food and Experience that is Reminiscent of Home and Punjab.";

    aboutTop.appendChild(aboutTopTop);
    aboutTop.appendChild(aboutTopBottom);

    const aboutBottom = document.createElement("div");
    aboutBottom.setAttribute("id","about-bottom");
    aboutMain.appendChild(aboutBottom);
    const Middle = document.createElement("div");
    Middle.setAttribute("id","bottom-middle");
    aboutBottom.appendChild(Middle);

    const aboutMiddleTop = document.createElement("div");
    aboutMiddleTop.setAttribute("id","about-middle-top");
    const aboutMiddleBottom = contentAdder(address);
    aboutMiddleBottom.setAttribute("id","about-middle-bottom");
    aboutMiddleTop.classList.add("top");

    aboutMiddleTop.textContent = "Our Address";

    Middle.appendChild(aboutMiddleTop);
    Middle.appendChild(aboutMiddleBottom);

    const Bottom = document.createElement("div");
    Bottom.setAttribute("id","bottom-bottom");
    aboutBottom.appendChild(Bottom);

    const aboutBottomTop = document.createElement("div");
    aboutBottomTop.setAttribute("id","about-bottom-top");
    const aboutBottomBottom = contentAdder(openHours);
    aboutBottomBottom.setAttribute("id","about-bottom-bottom");
    aboutBottomTop.classList.add("top");

    aboutBottomTop.textContent = "Open Hours";

    Bottom.appendChild(aboutBottomTop);
    Bottom.appendChild(aboutBottomBottom);


    return aboutMain;
}

export default about;