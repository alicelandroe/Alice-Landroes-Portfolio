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

var morphing = anime({
	targets: '#morphing .path',
	d: [	
		{ value: 'M40.8,-52.2C54.7,-54.6,69.1,-46.4,68.7,-35C68.4,-23.6,53.3,-9,51.2,7.5C49,24.1,59.8,42.6,57.8,56.7C55.9,70.7,41.1,80.1,27.5,76C14,71.8,1.7,54.1,-14.2,49.1C-30,44.1,-49.4,51.9,-56,47C-62.7,42.2,-56.5,24.7,-59,8.4C-61.5,-7.9,-72.7,-23.1,-69.8,-32.9C-67,-42.8,-50.1,-47.3,-36.2,-44.8C-22.2,-42.3,-11.1,-32.9,1.2,-34.8C13.5,-36.6,26.9,-49.7,40.8,-52.2Z' },
        { value: 'M34.1,-42.7C47.6,-44.4,64.4,-40.7,72.5,-30.8C80.6,-20.9,79.9,-4.8,77.5,11C75,26.8,70.7,42.2,60.8,51.3C50.8,60.5,35.1,63.3,23,57.4C10.8,51.5,2.1,36.8,-9.9,33.4C-22,30,-37.5,38,-45.5,35.6C-53.6,33.2,-54.2,20.5,-60.4,6C-66.6,-8.5,-78.4,-24.8,-78.1,-39.9C-77.8,-55,-65.4,-68.7,-50.4,-66.4C-35.3,-64,-17.7,-45.5,-3.7,-39.7C10.3,-34,20.6,-41,34.1,-42.7Z' },
        { value: 'M40.8,-52.2C54.7,-54.6,69.1,-46.4,68.7,-35C68.4,-23.6,53.3,-9,51.2,7.5C49,24.1,59.8,42.6,57.8,56.7C55.9,70.7,41.1,80.1,27.5,76C14,71.8,1.7,54.1,-14.2,49.1C-30,44.1,-49.4,51.9,-56,47C-62.7,42.2,-56.5,24.7,-59,8.4C-61.5,-7.9,-72.7,-23.1,-69.8,-32.9C-67,-42.8,-50.1,-47.3,-36.2,-44.8C-22.2,-42.3,-11.1,-32.9,1.2,-34.8C13.5,-36.6,26.9,-49.7,40.8,-52.2Z' },

    ],
    backgroundColor: '#FFF',
	easing: 'easeInOutSine',
	duration: 10000,
	direction: 'infinite alternate',
	loop: true
});

var x = anime({
    targets: "stop",
    stopColor: [ { value: "#ab13ab" }, { value: "#333" }, { value: "#ab13ab" }],
    duration: 10000,
    easing: 'easeInOutSine',
    direction: 'infinite alternate',
    loop: true
}
)
