const ball = document.querySelector('.ball');
const body = document.querySelector('body');
const widget = document.querySelector('.widget');
const header = document.querySelectorAll('.headerLink');
const card = document.querySelectorAll('.card');

const nightMode = () => {
    body.style.backgroundColor = '#171717'
    ball.classList.toggle('nightMode')
    widget.style.backgroundColor = '#fafafa'
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

ball.addEventListener('click', ()=> {
    nightMode()
});

const headerNightColors = () => {
    header.forEach(element => {
        element.style.color = '#fafafa'
    })
};

const cardNightColors = () => {
    card.forEach(element => {
        element.style.color = '#353839'
    })
};

const footerLinkColors = () => {
    footerLinks.foreach(element => {
        element.style.backgroundColor = '#fafafa'
        element.style.borderRadius = '50%'
    })
};
