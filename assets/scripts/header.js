// Toggling the main nav
const hamburgerIcon = document.querySelector('#hamburger-menu-container');
const sidebar = document.querySelector('nav');
const line1 = document.querySelector('#line-1');
const line2 = document.querySelector('#line-2');
const line3 = document.querySelector('#line-3');

hamburgerIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    sidebar.classList.toggle('active');

    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
}



// Toggling sub-links inside the nav

// The containers
const subAboutLinks = document.querySelector('.about-links');
const subQuickLinks = document.querySelector('.quick-links');
const subNewsLinks = document.querySelector('.news-links');
const subStatsLinks = document.querySelector('.stats-links');

// The togglers
const subAboutToggler = document.querySelector('#about-toggler');
const subQuickLinksToggler = document.querySelector('#quick-links-toggler');
const subNewsToggler = document.querySelector('#news-toggler');
const subStatsToggler = document.querySelector('#stats-toggler');

// Making shit work
// Need to refactor this thing to make use of loops and dictionaries / objects
subAboutToggler.addEventListener('click', function() {
    sidebar.style.background = "red";
});


// subQuickLinksToggler
// subNewsToggler
// subStatsToggler
