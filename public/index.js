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
        <a href="uxdesign.html">Projekt</a>
        <!-- <a href="code.html">Kod</a> -->
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

// BLOB animation

// var morphing = anime({
// 	targets: '#morphing .path',
// 	d: [	
// 		// { value: 'M40.8,-52.2C54.7,-54.6,69.1,-46.4,68.7,-35C68.4,-23.6,53.3,-9,51.2,7.5C49,24.1,59.8,42.6,57.8,56.7C55.9,70.7,41.1,80.1,27.5,76C14,71.8,1.7,54.1,-14.2,49.1C-30,44.1,-49.4,51.9,-56,47C-62.7,42.2,-56.5,24.7,-59,8.4C-61.5,-7.9,-72.7,-23.1,-69.8,-32.9C-67,-42.8,-50.1,-47.3,-36.2,-44.8C-22.2,-42.3,-11.1,-32.9,1.2,-34.8C13.5,-36.6,26.9,-49.7,40.8,-52.2Z' },
//         { value: 'M34.1,-42.7C47.6,-44.4,64.4,-40.7,72.5,-30.8C80.6,-20.9,79.9,-4.8,77.5,11C75,26.8,70.7,42.2,60.8,51.3C50.8,60.5,35.1,63.3,23,57.4C10.8,51.5,2.1,36.8,-9.9,33.4C-22,30,-37.5,38,-45.5,35.6C-53.6,33.2,-54.2,20.5,-60.4,6C-66.6,-8.5,-78.4,-24.8,-78.1,-39.9C-77.8,-55,-65.4,-68.7,-50.4,-66.4C-35.3,-64,-17.7,-45.5,-3.7,-39.7C10.3,-34,20.6,-41,34.1,-42.7Z' },
//         { value: 'M39.9,-63.5C48.8,-56.3,51.3,-40.4,56.1,-26.6C61,-12.7,68.3,-0.9,67.8,10.5C67.3,21.9,59,32.9,48.8,39.1C38.5,45.2,26.2,46.4,16.2,44.6C6.1,42.7,-1.8,37.8,-12.4,37C-23.1,36.3,-36.6,39.9,-47.6,36.2C-58.6,32.6,-67.2,21.7,-67,10.8C-66.7,-0.1,-57.6,-11.1,-51.8,-23.5C-45.9,-35.9,-43.3,-49.5,-35.2,-57.1C-27.1,-64.7,-13.5,-66.1,1,-67.6C15.5,-69.1,30.9,-70.7,39.9,-63.5Z'},
//         { value: 'M41.5,-56.8C53.7,-56.8,63.3,-45,64.7,-32.4C66.1,-19.7,59.3,-6.1,56.5,7.6C53.8,21.3,55.1,35.1,48.9,42.7C42.8,50.3,29.2,51.7,18.7,47.3C8.2,42.9,0.8,32.7,-6.3,27.8C-13.4,22.8,-20.2,23.1,-32.8,21.3C-45.4,19.6,-63.8,15.7,-69.7,7C-75.7,-1.7,-69.2,-15.2,-64.3,-30.8C-59.4,-46.5,-56.1,-64.3,-45.6,-65.1C-35.2,-66,-17.6,-49.8,-1.5,-47.6C14.7,-45.3,29.3,-56.9,41.5,-56.8Z'},
//         { value: 'M42.2,-60.3C52.8,-58.9,58,-43.9,64.4,-29.5C70.9,-15.1,78.5,-1.4,80.2,14.1C82,29.5,77.7,46.6,66,53.6C54.4,60.7,35.2,57.7,19.2,59.9C3.2,62.1,-9.7,69.5,-24.1,70.5C-38.6,71.6,-54.5,66.4,-65.9,55.7C-77.4,45.1,-84.2,29.1,-76.1,17.2C-68.1,5.3,-45.1,-2.4,-35.8,-13.6C-26.4,-24.9,-30.7,-39.6,-27,-44.1C-23.3,-48.6,-11.6,-42.8,2.1,-46.1C15.8,-49.4,31.7,-61.7,42.2,-60.3Z'},
//         { value: 'M32.4,-40.8C47.4,-40.7,68.8,-41,79.8,-32C90.8,-23.1,91.4,-4.9,86.3,10.6C81.3,26.2,70.7,39.1,58.5,47.6C46.3,56,32.5,60,18,66.8C3.4,73.6,-11.9,83.2,-18.3,75.3C-24.7,67.5,-22.2,42.3,-34.1,29.2C-46,16.1,-72.4,15.1,-81.5,6.7C-90.5,-1.8,-82.3,-17.8,-73.6,-32.3C-64.9,-46.8,-55.8,-59.8,-43.5,-61.1C-31.2,-62.4,-15.6,-52,-3.5,-46.6C8.7,-41.2,17.3,-40.8,32.4,-40.8Z'},
//         { value: 'M41.9,-69.3C50.6,-59.5,51.6,-41.8,48.9,-28.1C46.2,-14.4,39.7,-4.8,33.8,1.6C27.8,8.1,22.4,11.4,20.7,23.7C19,35.9,21,57.1,14.8,66C8.7,74.8,-5.7,71.4,-16.5,64.5C-27.3,57.5,-34.7,46.9,-42.4,37.2C-50.1,27.4,-58.1,18.5,-63.2,6.9C-68.2,-4.7,-70.3,-18.9,-63.5,-27.1C-56.8,-35.2,-41.1,-37.4,-29,-45.7C-16.9,-54,-8.5,-68.4,4,-74.7C16.5,-80.9,33.1,-79.1,41.9,-69.3Z'},
//         { value: 'M40.8,-52.2C54.7,-54.6,69.1,-46.4,68.7,-35C68.4,-23.6,53.3,-9,51.2,7.5C49,24.1,59.8,42.6,57.8,56.7C55.9,70.7,41.1,80.1,27.5,76C14,71.8,1.7,54.1,-14.2,49.1C-30,44.1,-49.4,51.9,-56,47C-62.7,42.2,-56.5,24.7,-59,8.4C-61.5,-7.9,-72.7,-23.1,-69.8,-32.9C-67,-42.8,-50.1,-47.3,-36.2,-44.8C-22.2,-42.3,-11.1,-32.9,1.2,-34.8C13.5,-36.6,26.9,-49.7,40.8,-52.2Z' },
//     ],
// 	easing: 'easeInOutSine',
// 	duration: 30000,
// 	direction: 'infinite alternate',
// 	loop: true
// });


// var colorChange = anime({
//     targets: "#grad1 stop",
//     stopColor: [ { value: "#E2CFCF" }, { value: "#E7D69C" }, { value: "#BDCEC1" }, { value: "#B6C4D5" }, { value: "#BBAED5" }, { value: "#BDCEC1" }, { value: "#E3C4AC" }, { value: "#E2CFCF" }],
//     duration: 30000,
//     easing: 'easeInOutSine',
//     direction: 'infinite alternate',
//     loop: true
// })
