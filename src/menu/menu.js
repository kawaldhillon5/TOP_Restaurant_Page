import "./menu.css";
const menu = function(){
    let i = 0
    const menuMain = document.createElement("div");
    menuMain.setAttribute("id", "main");
    const menuText = document.createElement("div");
    menuText.setAttribute("id","menu-text");
    menuText.textContent = "Our Menu";
    const menuCard = document.createElement("div");
    menuCard.setAttribute("id", "menu-card-area");
    menuMain.appendChild(menuText);
    menuMain.appendChild(menuCard);

    const menuCat = ["Starters","Veg Curries", "Non Veg Curries", "Breads", "Salads", "Drinks"];
    const menuItem = [
        ["Kale Ki Chaat (Veg)","Palak Ki Chaat (Veg)","Papdi Chaat (Veg)","Momos","Samosa Rolls (Veg)","Veg Pakora (Veg)"],
        ['Aloo Gobi (Veg)','Paneer Tikka Masala (Veg)','Paneer Lababdar','Palak Paneer (Veg)','Shahi Paneer (Veg)','Soy Chaap Masala (Veg)','Karahi Gobi Mutter (Veg'],
        ['Chicken Tikka Masala','Butter Chicken','Chicken Lababdar','Chicken Palak','Chicken Kadai','Avani Chicken Curry','Chicken Vindaloo','Chicken Korma'],
        ['Naan','Tandoori Roti','Roomali Roti','Lachedar Paratha','Kulcha'],
        ['Spring Salad (Veg)','Mango Salad (Veg)','Kachumber Salad'],
        ['Shiraz','Malbec','Zinfandel','Virgin Mojito','Masala Chai Tea','Fiji Water 500 ml']
    ];

    const menuCardCreator = function(arr){
        let l = 0
        arr[i].forEach(() =>{l = l + 1;})
        const menuItems = document.createElement("div");
        menuItems.classList.add("menu-items");

        for(let j = 0;j<= l; j++){
            let value = (menuItem[i][j]);
            console.log(menuItem[i][j]);
            const text = document.createElement("div")
            text.textContent =  `${value}`;
            menuItems.appendChild(text);
        }
        return menuItems;
    }

    menuCat.forEach((cat) => {

        const menuItemsMain = document.createElement("div");
        menuItemsMain.classList.add("menu-card");

        const menuItemsText = document.createElement("div");
        menuItemsText.classList.add("menu-item-cat");
        menuItemsText.textContent = `${cat}`;

        menuItemsMain.appendChild(menuItemsText);

       
        menuItemsMain.appendChild(menuCardCreator(menuItem));
        menuCard.appendChild(menuItemsMain);
        i = i + 1;
    });

    return menuMain;
    
}

export default menu;