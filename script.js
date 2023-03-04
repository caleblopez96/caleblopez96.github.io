
// use bootstrap to implement dropdown hamburger menu for mobile

// Selectors
const html = document.querySelector('html');
const body = document.querySelector('body');
const header = document.querySelectorAll('.headerLink');
const card = document.querySelectorAll('.card');
const jobs = document.querySelectorAll('.job');
const schools = document.querySelectorAll('.school');
const toggleIcon = document.querySelector('.toggleIcon');

// Color Variables
const offWhite = '#fafafa';
const offBlack = '#353839';


let isNightMode = false;
toggleIcon.addEventListener('click', () => {
    isNightMode = !isNightMode;
    isNightMode ? (nightMode(), toggleIcon.setAttribute('src', '/icons/sun.png')) : (dayMode(), toggleIcon.setAttribute('src', 'icons/icons8-night-mode-20.png'));
});

// Function that contains styles for nightmode
const nightMode = function() {
    body.style.backgroundColor = '#0b1117'
    body.style.color = offWhite
    headerNightColors()
    cardColors()
};

// function that contains styles for daymode
const dayMode = function() {
    body.style.backgroundColor = offWhite
    body.style.color = offBlack
    headerDayColors()
};

// function that contains style changes for header for night
const headerNightColors = () => {
    header.forEach(element => {
        element.style.color = offWhite
    })
};

// function that contains style changes for header for day
const headerDayColors = () => {
    header.forEach(element => {
        element.style.color = offBlack
    })
};

// function that contains styles for cards
const cardColors = () => {
    card.forEach(element => {
        element.style.color = '#121212';
    })
};

// intersection observer to observe animation.
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry => {
        const intersecting = entry.isIntersecting
        entry.target.style.animation = intersecting ? 'slide-in-fwd-center 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both' : 'none'
    }))
});

jobs.forEach(job => observer.observe(job));

schools.forEach(school => observer.observe(school));
