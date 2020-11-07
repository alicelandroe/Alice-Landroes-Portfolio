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
        <div class="nav-items__page-links">
            <a href="about.html">Om mig</a>
            <a href="projects.html">Projekt</a>
        </div>
        <a id="contact-link" href="contact.html">Kontakt &#10132; </a>
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

const uxProjects = document.querySelector("#ux-projects");

function createProjectCard(project) {
    return `
        <div class="project project__${project.name}">
            <div class="project__text">
                <h3 class="project__title">${project.title}</h3>
                <p class="project__description">
                    ${project.description}
                </p>
                <a href="${project.name}.html" class="project__button"
                >Se projekt</a
                >
            </div>
            <div class="project__image">
                <img src="images/${project.image}" alt="${project.imageAlt}" />
            </div>
        </div>
    `
}

const uxProjectsSpecifications = [
    {
        name: "werkstad",
        title: "Werkstad",
        description: "Träffa folk som vill göra världen bättre",
        image: "werkstad-hand-photo.png",
        imageAlt: "werkstad app picture"
    },
    {
        name: "xperience",
        title: "Xperience",
        description: "Upplev hemmabio, på riktigt",
        image: "werkstad-hand-photo.png",
        imageAlt: "werkstad app picture"
    },
    {
        name: "werkstad",
        title: "Werkstad",
        description: "Träffa folk som vill göra världen bättre",
        image: "werkstad-hand-photo.png",
        imageAlt: "werkstad app picture"
    },
]

uxProjectsSpecifications.forEach(p => {
    uxProjects.innerHTML += createProjectCard(p);
})