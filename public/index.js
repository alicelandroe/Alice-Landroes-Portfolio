// HAMBURGER MENU 
const hamburger = document.querySelector('.hamburger');
const openHamburger = document.querySelector('.open-hamburger');

function openHamburgerMenu() {
    openHamburger.style.display = 'block';
    hamburger.classList.add('is-active');
}

function closeHamburgerMenu() {
    openHamburger.style.display = '';
    hamburger.classList.remove('is-active');
}

function toggleHamburgerMenu() {
    const isClosed = openHamburger.style.display === '';

    if (isClosed) {
        openHamburgerMenu();
    } else {
        closeHamburgerMenu();
    }
}

hamburger.addEventListener('click', toggleHamburgerMenu); 
// END: HAMBURGER MENU


