// Selectors
const ball = document.querySelector('.ball');
const body = document.querySelector('body');
const widget = document.querySelector('.widget');
const header = document.querySelectorAll('.headerLink');
const card = document.querySelectorAll('.card');
const contributions = document.querySelector('#contributions');

// invoking night mode on click
ball.addEventListener('click', () => {
    nightMode()
});

// styles for night mode
const nightMode = () => {
    ball.classList.toggle('nightMode')
    widget.style.backgroundColor = '#fafafa'
    body.style.backgroundColor = '#0b1117'
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
        element.style.color = '#121212'
    })
};

// function that alters footer colors for night mode
/* work in progress. need to complete this fix */
const footerLinkColors = () => {
    footerLinks.foreach(element => {
        element.style.backgroundColor = '#fafafa'
        element.style.borderRadius = '50%'
    })
};


/* function that displays animation of github contributions in the last year... Finish/fix

let updates = 0;

const commitCountAnimation = anime({
    targets: '#contributions',
    translateX: 270,
    delay: 1000,
    direction: 'alternate',
    loop: 3,
    easing: 'easeInOutCirc',
    update: function(anim) {
        updates++
        contributions.value = 'progress :'+Math.round(anim.progress)+'%';
        updates.valueOf = 'updates : '+ updates;
    }
})
*/