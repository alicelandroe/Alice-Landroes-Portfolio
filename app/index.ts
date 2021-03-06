// HAMBURGER MENU

console.log(`Hej! 

Vad kul att du kikar här. 

Jag har byggt denna sidan från scratch med HTML, SASS och Vanilla JS.  

Letar ni efter en UX designer som har lite koll på kod också?

Kontakta mig så snackar vi!`);

const header = document.querySelector("header");
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
        <a href="index.html" tabindex="-1">Hem</a>
        <a href="about.html" tabindex="-1">Om mig</a>
        <a href="projects.html" tabindex="-1">Projekt</a>
        <a href="contact.html" tabindex="-1">Kontakt</a>
        </div>
    </div>

    <!-- navigation: tablet size and up -->
    <div class="nav-items">
        <div>
            <a href="index.html" tabindex="0">Alice Landrö</a>
        </div>
        <div class="nav-items__page-links">
            <a href="projects.html" tabindex="0">Projekt</a>
            <a href="about.html" tabindex="0">Om mig</a>
        </div>
        <div id="contact-link">
            <a href="contact.html" tabindex="0">Kontakt &#10132; </a>
        </div>
    </div>
`;

if (header) {
  header.innerHTML = headerHtml;
}

const hamburger = document.querySelector(".hamburger");
const openHamburger: HTMLElement | null = document.querySelector(
  ".open-hamburger"
);
const body = document.querySelector("body");

function openHamburgerMenu() {
  if (!openHamburger || !hamburger) {
    return;
  }

  openHamburger.style.left = "0vw";
  hamburger.classList.add("is-active");
}

function closeHamburgerMenu() {
  if (!openHamburger || !hamburger) {
    return;
  }

  openHamburger.style.left = "-100vw";
  hamburger.classList.remove("is-active");
}

function toggleHamburgerMenu() {
  if (!openHamburger) {
    return;
  }

  const isOpen = openHamburger.style.left === "0vw";

  if (isOpen) {
    closeHamburgerMenu();
  } else {
    openHamburgerMenu();
  }
}

if (hamburger) {
  hamburger.addEventListener("click", toggleHamburgerMenu);
}

// END: HAMBURGER MENU

const uxProjects = document.querySelector("#ux-projects");
const frontendProjects = document.querySelector("#frontend-projects");

function createProjectCard(project: any) {
  return `
        <a href="${project.link}" class="project project__${project.color}">
            <div class="project__text">
                <h3 class="project__title">${project.title}</h3>
                <p class="project__description">
                    ${project.description}
                </p>
            </div>
            <div class="project__image">
                <img src="images/${project.image}" alt="${project.imageAlt}" />
            </div>
        </a>
    `;
}

const uxProjectsSpecifications = [
  {
    color: "peach",
    link: "project-treddy.html",
    title: "Treddy",
    description: "Design av hemsida för en startup",
    image: "treddy-card-image.png",
    imageAlt: "Treddy hemsida",
  },
  {
    color: "green",
    link: "project-marks-kommun.html",
    title: "Kommunens coronasida",
    description: "Enklare att hitta coronainformation",
    image: "marks kommun project card image.png",
    imageAlt: "mark kommuns coronahemsida",
  },
  {
    color: "orange",
    link: "project-werkstad.html",
    title: "Werkstad",
    description: "Träffa folk som vill göra världen bättre",
    image: "werkstad-hand-photo.png",
    imageAlt: "werkstad appen",
  },
];

const frontendProjectsSpecifications = [
  {
    color: "purple",
    link: "project-web-app.html",
    title: "Web Dashboard",
    description: "Responsiva JavaScript diagram", // ALICE: Add description
    image: "web app card image.png",
    imageAlt: "Web App Dashboard",
  },
  {
    color: "pink",
    link: "project-api.html",
    title: "Anställdskatalog",
    description: "med API, CSS, HTML och JavaScript", // ALICE: Add description
    image: "api project card image.png",
    imageAlt: "API project",
  },
  // {
  //     color: "blue",
  //     link: "project-photogallery.html", // TODO: Add correct link
  //     title: "Interaktivt fotogalleri",
  //     description: "...med JavaScript och jQuery",
  //     image: "photo-gallery.png",
  //     imageAlt: "Interaktivt fotogalleri"
  // },
  {
    color: "blue",
    link: "project-wheel-of-success.html",
    title: "Wheel of Success",
    description: "Ett ordgissningsspel", // ALICE: Add description
    image: "wheel of success card image.png",
    imageAlt: "Wheel of success",
  },
];

if (uxProjects) {
  uxProjectsSpecifications.forEach((p) => {
    uxProjects.innerHTML += createProjectCard(p);
  });
}

if (frontendProjects) {
  frontendProjectsSpecifications.forEach((p) => {
    frontendProjects.innerHTML += createProjectCard(p);
  });
}

function createCornerBlobHtml() {
  const cornerBlobHtml = `
        <svg width="163" height="93" viewBox="0 0 163 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M102.352 54.3645H54.6413C25.3957 54.3645 2.55301 29.0974 5.49303 0H163V93C152.008 69.4311 128.358 54.3645 102.352 54.3645Z" fill="#D17446"/>
            <path d="M115.715 55.0212H77.2111C47.4884 55.0212 24.1122 29.6204 26.5752 0H163V65L155.731 62.2752C142.935 57.4783 129.381 55.0212 115.715 55.0212Z" fill="#97CDC2"/>
        </svg>
    `;

  const div = document.createElement("div");
  div.id = "corner-blob-svg";

  const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html";
  if (!isHomePage) {
    div.classList.add("hide-when-mobile");
  }

  div.innerHTML = cornerBlobHtml;

  return div;
}

const navItems: HTMLElement | null = document.querySelector(".nav-items");

if (navItems) {
  const isLargeScreen = navItems.style.display == "none";
}

const cornerBlob = createCornerBlobHtml();

if (header) {
  header.appendChild(cornerBlob);
}
