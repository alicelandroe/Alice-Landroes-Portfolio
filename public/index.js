const hamburger = document.querySelector('.hamburger');
const openHamburger = document.querySelector('.open-hamburger');


hamburger.addEventListener('click', () => {
    if (openHamburger.style.display === '') {
        openHamburger.style.display = 'block';
        hamburger.classList.add('is-active');
    } else {
        openHamburger.style.display = '';
        hamburger.classList.remove('is-active');
    }
});




