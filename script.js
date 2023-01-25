// Selectors
const ball = document.querySelector('.ball');
const body = document.querySelector('body');
const widget = document.querySelector('.widget');
const header = document.querySelectorAll('.headerLink');
const card = document.querySelectorAll('.card');

// invoking night mode when ball is clicked
ball.addEventListener('click', ()=> {
    nightMode()
});

// styles for night mode
const nightMode = () => {
    ball.classList.toggle('nightMode')
    widget.style.backgroundColor = '#fafafa'
    body.style.backgroundColor = '#171717'
    body.style.color = '#fafafa'
    headerNightColors()
    cardNightColors()
  /* add white icons as the source for footer links when night mode. */
};

// function that pushes dayMode styles
const dayMode = () => {
    ball.classList.toggle('ball')
    body.style.backgroundColor = '#fafafa'
    widget.style.backgroundColor = '#fafafa'
};

// function that alters header links for night mode.
const headerNightColors = () => {
    header.forEach(element => {
        element.style.color = '#fafafa'
    })
};

// function that alters card colors for night mode
const cardNightColors = () => {
    card.forEach(element => {
        element.style.color = '#252525'
        element.style.backgroundColor = '#555555'
    })
};

// function that alters footer colors for night mode
const footerLinkColors = () => {
    footerLinks.foreach(element => {
        element.style.backgroundColor = '#fafafa'
        element.style.borderRadius = '50%'
    })
};
