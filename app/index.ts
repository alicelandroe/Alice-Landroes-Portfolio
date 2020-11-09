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
        <div id="contact-link">
            <a href="contact.html">Kontakt &#10132; </a>
        </div>
    </div>
`;

if (header) {
    header.innerHTML = headerHtml;
}

const hamburger = document.querySelector('.hamburger');
const openHamburger: HTMLElement | null = document.querySelector('.open-hamburger');
const body = document.querySelector('body');

function openHamburgerMenu() {
    if (!openHamburger || !hamburger) {
        return;
    }

    openHamburger.style.left = '0vw';
    hamburger.classList.add('is-active');
}

function closeHamburgerMenu() {
    if (!openHamburger || !hamburger) {
        return;
    }

    openHamburger.style.left = '-100vw';
    hamburger.classList.remove('is-active');
}

function toggleHamburgerMenu() {
    if (!openHamburger) {
        return;
    }

    const isOpen = openHamburger.style.left === '0vw';

    if (isOpen) {
        closeHamburgerMenu();
    } else {
        openHamburgerMenu();
    }
}

if (hamburger) {
    hamburger.addEventListener('click', toggleHamburgerMenu); 
}

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
const frontendProjects = document.querySelector("#frontend-projects");

function createProjectCard(project: any) {
    return `
        <div class="project project__${project.name}">
            <div class="project__text">
                <h3 class="project__title">${project.title}</h3>
                <p class="project__description">
                    ${project.description}
                </p>
                <a href="${project.link}" class="project__button"
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
        link: "project-werkstad.html",
        title: "Werkstad",
        description: "Träffa folk som vill göra världen bättre",
        image: "werkstad-hand-photo.png",
        imageAlt: "werkstad app picture"
    },
    {
        name: "xperience",
        link: "xperience.html",
        title: "Xperience",
        description: "Upplev hemmabio, på riktigt",
        image: "xperience-card-image.png",
        imageAlt: "werkstad app picture"
    },
    {
        name: "werkstad",
        link: "werkstad.html",
        title: "Werkstad",
        description: "Träffa folk som vill göra världen bättre",
        image: "werkstad-hand-photo.png",
        imageAlt: "werkstad app picture"
    },
]

const frontendProjectsSpecifications = [
    {
        name: "photo-gallery",
        link: "project-photogallery.html", // TODO: Add correct link
        title: "Interaktivt fotogalleri",
        description: "...med JavaScript och jQuery",
        image: "photo-gallery.png",
        imageAlt: "Interaktivt fotogalleri"
    },
    {
        name: "wheel-of-success",
        link: "https://wheel-of-success-6577a.web.app/",
        title: "Wheel of Success",
        description: "lorem ipson la da lita do",
        image: "wheel-of-success.png",
        imageAlt: "Wheel of success"
    },
    {
        name: "dashboard",
        link: "https://web-app-bb3f1.web.app/",
        title: "Web Dashboard",
        description: "lorem ipson la da lita do",
        image: "web-app.png",
        imageAlt: "Web App Dashboard"
    },
    {
        name: "api-project",
        link: "https://api-directory-cd3cb.web.app/",
        title: "API project",
        description: "lorem ipson la da lita do",
        image: "api.png",
        imageAlt: "API project"
    },
]

if (uxProjects) {
    uxProjectsSpecifications.forEach(p => {
        uxProjects.innerHTML += createProjectCard(p);
    })
}

if (frontendProjects) {
    frontendProjectsSpecifications.forEach(p => {
        frontendProjects.innerHTML += createProjectCard(p);
    })
}

function createCornerBlobHtml() {
    const cornerBlobHtml = `
        <svg width="163" height="93" viewBox="0 0 163 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M102.352 54.3645H54.6413C25.3957 54.3645 2.55301 29.0974 5.49303 0H163V93C152.008 69.4311 128.358 54.3645 102.352 54.3645Z" fill="#D17446"/>
            <path d="M115.715 55.0212H77.2111C47.4884 55.0212 24.1122 29.6204 26.5752 0H163V65L155.731 62.2752C142.935 57.4783 129.381 55.0212 115.715 55.0212Z" fill="#97CDC2"/>
        </svg>
    `

    const div = document.createElement('div');
    div.id = 'corner-blob-svg';

    const isHomePage = window.location.pathname === "/" || window.location.pathname === "index.html";
    if (!isHomePage) {
        div.classList.add('hide-when-mobile');
    }

    div.innerHTML = cornerBlobHtml;

    return div;
}

const navItems: HTMLElement | null = document.querySelector('.nav-items');

if (navItems) {
    const isLargeScreen = navItems.style.display == 'none'
}

const cornerBlob = createCornerBlobHtml();

if (header) {
    header.appendChild(cornerBlob);
}