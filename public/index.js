// HAMBURGER MENU 
const header = document.querySelector('header');
const headerHtml = `
    <!-- hamburger menu -->
    <button class="hamburger hamburger--squeeze" type="button">
        <span class="hamburger-box">
        <span class="hamburger-inner"></span>
        </span>
    </button>

    <!-- hamburger menu opened -->
    <div class="open-hamburger">
        <div class="mobile-nav-items">
        <a href="index.html">Hem</a>
        <a href="about.html">Om mig</a>
        <a href="projects.html">Projekt</a>
        <a href="contact.html">Kontakt</a>
        </div>
    </div>

    <!-- navigation: tablet size and up -->
    <div class="nav-items">
        <div>
        <a href="index.html">Alice Landrö</a>
        </div>
        <div>
        <a href="about.html">Om mig</a>
        <a href="projects.html">Projekt</a>
        <a id="contact-link" href="contact.html">Kontakt &#10132; </a>
        </div>
    </div>
`;

header.innerHTML = headerHtml;
const hamburger = document.querySelector('.hamburger');
const openHamburger = document.querySelector('.open-hamburger');
const body = document.querySelector('body');

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

const footer = document.querySelector('footer');

const footerHtml = `
    <footer>
        <div class="footer__links">
            <a>LinkedIn</a>
            <a>GitHub</a>
            <a>Kontakt</a>
        </div>
        <div class="footer__copyright">
            © Alice Landrö 2020
        </div>
    </footer>`

if (footer) {
    footer.classList.add('footer');
    footer.innerHTML = footerHtml
}