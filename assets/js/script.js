"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/** Title change */
document.addEventListener("DOMContentLoaded", function () {
  const textArray = [
    "a Software Engineer",
    "a Designer",
    "a Fullstack Developer",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 150; // Typing speed in milliseconds
  const delayBetweenWords = 1500; // Pause after typing a word
  const changingText = document.querySelector(".changing-text");

  function typeEffect() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
      changingText.textContent = currentText.substring(0, charIndex--);
    } else {
      changingText.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords); // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, 300); // Pause before typing next word
    } else {
      setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }
  }

  typeEffect();
});

/*click aniamtio*/
document.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  document.body.appendChild(ripple);
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

/*mouse move aniamtio*/
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  document.body.appendChild(trail);
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;

  setTimeout(() => {
    trail.remove();
  }, 500);
});

/*scroll aniamtio*/

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  function revealSections() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Trigger on page load in case sections are already in view
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}
