// HAMBURGER MENU 
const hamburger = document.querySelector('.hamburger');
const openHamburger = document.querySelector('.open-hamburger');

function openHamburgerMenu() {
    openHamburger.style.left = '0vw';
    hamburger.classList.add('is-active');
}

function closeHamburgerMenu() {
    openHamburger.style.left = '-100vw';
    hamburger.classList.remove('is-active');
}

function toggleHamburgerMenu() {
    const isOpen = openHamburger.style.left === '0vw';

    if (isOpen) {
        closeHamburgerMenu();
    } else {
        openHamburgerMenu();
    }
}

hamburger.addEventListener('click', toggleHamburgerMenu); 
// END: HAMBURGER MENU


