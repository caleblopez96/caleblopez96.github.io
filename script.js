// FILE PENDING REFACTOR

// Selectors
const html = document.querySelector('html')
const ball = document.querySelector('.ball');
const body = document.querySelector('body');
const widget = document.querySelector('.widget');
const header = document.querySelectorAll('.headerLink');
const card = document.querySelectorAll('.card');
const job = document.querySelector('.job');

// invoking night mode on click
ball.addEventListener('click', () => {
    nightMode()
    ball.addEventListener('click', () =>{
        dayMode()
    })
});

// styles for night mode
const nightMode = () => {
    ball.classList.toggle('nightMode')
    widget.style.backgroundColor = '#fafafa'
    body.style.backgroundColor = '#0b1117'
    body.style.color = '#fafafa'
    headerNightColors()
    cardColors()
  /* add white icons as the source for footer links when night mode. */
};

// function that pushes dayMode styles
const dayMode = () => {
    ball.classList.toggle('.ball')
    widget.style.backgroundColor = '#fafafa'
    body.style.backgroundColor = '#fafafa'
    body.style.color = "#353839"
    headerDayColors()
};

const headerNightColors = () => {
    header.forEach(element => {
        element.style.color = '#fafafa'
    })
};

const headerDayColors = () => {
    header.forEach(element => {
        element.style.color = '#353839'
    })
}

// function that alters card colors for night mode
const cardColors = () => {
    card.forEach(element => {
        element.style.color = '#121212'
    })
};

// observer that observes when scroll to target
// change the background color change for a scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        /*entry.target.style.backgroundColor = intersecting ? "red" : "pink"; */ // chnage this to a scroll animation
    })
}, {threshold: .25}) // 25% must be visible

// observer.observe(job); 