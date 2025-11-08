// index.js
import "./styles.css";
import "./home.css";
import "./menu.css";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const contactBtn = document.querySelector('#contact-btn');

function initPage() {
    homeBtn.classList.add('active');
    createHome();
}
initPage();

function setActiveButton(clickedButton) {
    const allNavButtons = document.querySelectorAll('.nav-btn')

    allNavButtons.forEach(button => {
        button.classList.remove('active');
    })

    clickedButton.classList.add('active');
}


homeBtn.addEventListener('click', () =>{
    content.innerHTML = '';
    setActiveButton(homeBtn);
    createHome();
});

menuBtn.addEventListener('click', () =>{
    content.innerHTML = '';
    setActiveButton(menuBtn)
    createMenu();
});

contactBtn.addEventListener('click', ()=>{
    content.innerHTML = '';
    setActiveButton(contactBtn);
    createContact();
});
