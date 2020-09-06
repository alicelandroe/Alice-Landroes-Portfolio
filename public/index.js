const hamburger = document.querySelector('.hamburger');
const openHamburger = document.querySelector('.open-hamburger');
const closeHamburger = document.querySelector('.close-hamburger');

hamburger.addEventListener('click', () => {
    openHamburger.style.display = 'block';
});

closeHamburger.addEventListener('click', () => {
    openHamburger.style.display = 'none';
});


