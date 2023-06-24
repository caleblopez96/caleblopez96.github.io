import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  // Selectors
  const body = document.querySelector('body');
  const header = document.querySelectorAll('.headerLink');
  const card = document.querySelectorAll('.card');
  const jobs = document.querySelectorAll('.job');
  const schools = document.querySelectorAll('.school');
  const toggleIcon = document.querySelector('.toggleIcon');
  const gitHubContributions = document.querySelector('.githubContributions');

  // Color Variables
  const offWhite = '#fafafa';
  const offBlack = '#353839';

  // night mode function
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    toggleIcon.addEventListener('click', () => {
      setIsNightMode(prevMode => !prevMode);
    });
  }, []);

  // Function that contains styles for night mode
  useEffect(() => {
    if (isNightMode) {
      nightMode();
      toggleIcon.setAttribute('src', 'icons/sun.png');
    } else {
      dayMode();
      toggleIcon.setAttribute('src', 'icons/moon.png');
    }
  }, [isNightMode]);

  const nightMode = () => {
    body.style.backgroundColor = '#0b1117';
    body.style.color = offWhite;
    headerNightColors();
    cardColors();
  }

  const dayMode = () => {
    body.style.backgroundColor = offWhite;
    body.style.color = offBlack;
    headerDayColors();
  }

  const headerNightColors = () => {
    header.forEach(element => {
      element.style.color = offWhite;
    })
  }

  const headerDayColors = () => {
    header.forEach(element => {
      element.style.color = offBlack;
    })
  }

  const cardColors = () => {
    card.forEach(element => {
      element.style.color = '#121212';
    })
  }

  // Intersection observer to observe when animation needs to play.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting;
      entry.target.style.animation = intersecting ? 'slide-in-fwd-center 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both' : 'none';
    });
  });

  // Applying intersection observer to elements
  const observeElements = (...elements) => {
    elements.forEach(element => observer.observe(element));
  }

  useEffect(() => {
    observeElements(...jobs, ...schools);
  }, [jobs, schools]);

  return (
    <div>
      {}
    </div>
  );
};

export default MyComponent;