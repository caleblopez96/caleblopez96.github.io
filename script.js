const ball = document.querySelector('.ball');
const body = document.querySelector('body');
const widget = document.querySelector('.widget');
const header = document.querySelectorAll('.headerLink');
const card = document.querySelectorAll('.card');


ball.addEventListener('click', ()=> {
    nightMode()
});

const nightMode = () => {
    ball.classList.toggle('nightMode')
    widget.style.backgroundColor = '#fafafa'
    body.style.backgroundColor = '#171717'
    body.style.color = '#fafafa'
    headerNightColors()
    cardNightColors()
  /* add white icons as the source for footer links when night mode. */
};

const dayMode = () => {
    ball.classList.toggle('ball')
    body.style.backgroundColor = '#fafafa'
    widget.style.backgroundColor = '#fafafa'
};

const headerNightColors = () => {
    header.forEach(element => {
        element.style.color = '#fafafa'
    })
};

const cardNightColors = () => {
    card.forEach(element => {
        element.style.color = '#353839'
        element.style.backgroundColor = '#555555'
    })
};

const footerLinkColors = () => {
    footerLinks.foreach(element => {
        element.style.backgroundColor = '#fafafa'
        element.style.borderRadius = '50%'
    })
};
