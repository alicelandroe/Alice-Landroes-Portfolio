// HAMBURGER MENU 
const hamburger = document.querySelector('.hamburger');
const openHamburger = document.querySelector('.open-hamburger');
const grayOverlay = document.querySelector('.gray-overlay');
const body = document.querySelector('body');

function openHamburgerMenu() {
    openHamburger.style.left = '0vw';
    hamburger.classList.add('is-active');
    grayOverlay.classList.add('gray-overlay--show');
}

function closeHamburgerMenu() {
    openHamburger.style.left = '-100vw';
    hamburger.classList.remove('is-active');
    grayOverlay.classList.remove('gray-overlay--show');
}

function toggleHamburgerMenu() {
    const isOpen = openHamburger.style.left === '0vw';

    if (isOpen) {
        closeHamburgerMenu();
    } else {
        openHamburgerMenu();
    }
}

const closeHamburgerMenuOnClickOutside = e => {
    const outsideHamburgerMenu = e.target.classList.contains('gray-overlay');
    const menuIsOpen = hamburger.classList.contains('is-active');
    if (outsideHamburgerMenu && menuIsOpen)
    {
        closeHamburgerMenu();
    }
}

hamburger.addEventListener('click', toggleHamburgerMenu); 

document.addEventListener('click', closeHamburgerMenuOnClickOutside);

// END: HAMBURGER MENU


