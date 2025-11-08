//menu.js
import filetMignon from "./Filet_Mignon.jpg";
import ribEyes from "./Ribeyes.jpg";
import newYorkStrip from "./nystrip.jpg";
import porterHouse from "./porterhouse.jpg";

function createMenuSection(titleMenu, menuDetails, imgSource) {
    //1 create al necessary elements
    const menuContainer = document.createElement('div');
    const menuTitle = document.createElement('h3');
    const menuDescription = document.createElement('p');
    const menuImage = document.createElement('img');

    //2 set content and classes
    menuTitle.textContent = titleMenu;
    menuDescription.textContent = menuDetails;
    menuImage.src = imgSource;
    menuContainer.classList.add('menu-container');
    menuDescription.classList.add('menu-description');
    menuImage.classList.add('menu-image');

    //3 assemble the elements
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuDescription);
    menuContainer.appendChild(menuImage);

    //4 return the assembled elements
    return menuContainer
}

const content = document.querySelector('#content');
export function createMenu() {
    const restaurantMenu = document.createElement('h1');
    restaurantMenu.textContent = 'Signature Dishes'
    content.appendChild(restaurantMenu);

    //Filet mignon
    const dish1Details = 'The most tender and elegant cut of beef, known for its buttery texture and subtle, refined flavor. Served thick-cut and best enjoyed in its pure form, highlighted by our delicate seasoning.';
    const dish1 = createMenuSection('The Filet Mignon', dish1Details, filetMignon)
    content.appendChild(dish1);    

    //Ribeye
    const dish2Details = 'The essential choice for flavor lovers. This cut is characterized by its generous marbling, which melts during cooking to deliver a rich, unparalleled beefy taste and exceptional juiciness.'
    const dish2 = createMenuSection('Ribeye', dish2Details, ribEyes)
    content.appendChild(dish2);

    //New York Strip
    const dish3Details = 'A superb steak that perfectly balances texture and taste. Leaner than the Ribeye, it offers a robust, classic beef flavor and satisfying chew, typically served boneless with a beautiful seared crust.'
    const dish3 = createMenuSection('New York Strip', dish3Details, newYorkStrip);
    content.appendChild(dish3);

    //Porterhouse
    const dish4Details = 'The ultimate choice for sharing or for the hearty appetite. This magnificent cut is two steaks in one: the robust flavor of the New York Strip on one side and the unmatched tenderness of the Filet Mignon on the other.'
    const dish4 = createMenuSection('Porterhouse', dish4Details, porterHouse);
    content.appendChild(dish4);
}