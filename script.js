const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const sideMenu = document.getElementById('side-menu');

// Open Menu
menuButton.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

// Close Menu
closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});

// Close menu if clicked outside
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove('active');
    }
});