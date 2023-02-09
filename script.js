// FILE PENDING REFACTOR

// Selectors
const html = document.querySelector('html')
const ball = document.querySelector('.ball');
const body = document.querySelector('body');
const widget = document.querySelector('.widget');
const header = document.querySelectorAll('.headerLink');
const card = document.querySelectorAll('.card');
const jobs = document.querySelectorAll('.job');
const schools = document.querySelectorAll('.school');

// Global Variables
const offWhite = '#fafafa';
const offBlack = '#353839';

// Functions invokes day/night modes
ball.addEventListener('click', () => {
    nightMode()
        ball.addEventListener('click', () =>{
        dayMode()
    });
});

// Function that contains styles for nightmode
const nightMode = () => {
    ball.classList.toggle('nightMode')
    widget.style.backgroundColor = offWhite
    body.style.backgroundColor = '#0b1117'
    body.style.color = offWhite
    headerNightColors()
    cardColors()
};

// function that contains styles for daymode
const dayMode = () => {
    ball.classList.toggle('.ball')
    widget.style.backgroundColor = offWhite
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

// observer that observes when scroll to target
// change the background color change for a scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry => {
        const intersecting = entry.isIntersecting
        entry.target.style.animation = intersecting ? 'slide-in-fwd-center 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both' : 'none'
    }))
}, /*{threshold: .1}*/);

jobs.forEach((job => {
    observer.observe(job)
}));

schools.forEach((school => {
    observer.observe(school)
}));