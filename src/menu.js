//menu.js
import filetMignon from "./Filet_Mignon.jpg";
import ribEyes from "./Ribeyes.jpg";
import newYorkStrip from "./nystrip.jpg";
import porterhouse from "./porterhouse.jpg";
const content = document.querySelector('#content');
export function createMenu() {
    const restaurantMenu = document.createElement('h1');
    //Filet mignon
    const menuContainer = document.createElement('div');
    const menuTitle = document.createElement('h3');
    const menuDescription = document.createElement('p');
    const imgContainer = document.createElement('div');
    const menuImage = document.createElement('img');
    menuImage.src = filetMignon;

    menuContainer.classList.add('menu-container');
    menuDescription.classList.add('menu-description');
    imgContainer.classList.add('img-container');
    menuImage.classList.add('menu-image');

    restaurantMenu.textContent = 'Signature Dishes'
    menuTitle.textContent = 'The Filet Mignon'
    menuDescription.textContent = 'The most tender and elegant cut of beef, known for its buttery texture and subtle, refined flavor. Served thick-cut and best enjoyed in its pure form, highlighted by our delicate seasoning.'

    content.appendChild(restaurantMenu);
    content.appendChild(menuContainer);
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuDescription);
    menuContainer.appendChild(imgContainer);
    imgContainer.appendChild(menuImage);

    //Ribeye
    const ribContainer = document.createElement('div');
    const ribTitle = document.createElement('h3');
    const ribDescription = document.createElement('p');
    const ribImgContainer = document.createElement('div');
    const ribImage = document.createElement('img');
    ribImage.src = ribEyes;

    ribContainer.classList.add('menu-container');
    ribDescription.classList.add('menu-description');
    ribImgContainer.classList.add('img-container');
    ribImage.classList.add('menu-image');

    ribTitle.textContent = 'Ribeye'
    ribDescription.textContent = 'The essential choice for flavor lovers. This cut is characterized by its generous marbling, which melts during cooking to deliver a rich, unparalleled beefy taste and exceptional juiciness.'

    content.appendChild(ribContainer);
    ribContainer.appendChild(ribTitle);
    ribContainer.appendChild(ribDescription);
    ribContainer.appendChild(ribImgContainer);
    ribImgContainer.appendChild(ribImage);

    //New York Strip
    const stripContainer = document.createElement('div');
    const stripTitle = document.createElement('h3');
    const stripDescription = document.createElement('p');
    const stripImgContainer = document.createElement('div');
    const stripImage = document.createElement('img');
    stripImage.src = newYorkStrip;

    stripContainer.classList.add('menu-container');
    stripDescription.classList.add('menu-description');
    stripImgContainer.classList.add('img-container');
    stripImage.classList.add('menu-image');

    stripTitle.textContent = 'New York Strip';
    stripDescription.textContent = 'A superb steak that perfectly balances texture and taste. Leaner than the Ribeye, it offers a robust, classic beef flavor and satisfying chew, typically served boneless with a beautiful seared crust.'

    content.appendChild(stripContainer);
    stripContainer.appendChild(stripTitle);
    stripContainer.appendChild(stripDescription);
    stripContainer.appendChild(stripImgContainer);
    stripImgContainer.appendChild(stripImage);

    //Porterhouse
    const porterContainer = document.createElement('div');
    const porterTitle = document.createElement('h3');
    const porterDescription = document.createElement('p');
    const porterImgContainer = document.createElement('div');
    const porterImage = document.createElement('img');
    porterImage.src = porterhouse;

    porterContainer.classList.add('menu-container');
    porterDescription.classList.add('menu-description');
    porterImgContainer.classList.add('img-container');
    porterImage.classList.add('menu-image');

    porterTitle.textContent = 'Porterhouse';
    porterDescription.textContent = 'The ultimate choice for sharing or for the hearty appetite. This magnificent cut is two steaks in one: the robust flavor of the New York Strip on one side and the unmatched tenderness of the Filet Mignon on the other.'

    content.appendChild(porterContainer);
    porterContainer.appendChild(porterTitle);
    porterContainer.appendChild(porterDescription);
    porterContainer.appendChild(porterImgContainer);
    porterImgContainer.appendChild(porterImage);
}