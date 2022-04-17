'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scroll button
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Matching stragedy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tab components
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove tab active
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  // add tab active
  clicked.classList.add('operations__tab--active');

  // Remove tabs content active
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  // Active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Refactor code
function handleHover(e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(sibling => {
      if (sibling !== link) sibling.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}

// Menu fade animation
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const initialCords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  if (window.scrollY > initialCords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// // Event propagation
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK: ', e.target, e.currentTarget);
//   console.log(
//     'compare currentTarget and this keyword: ',
//     this === e.currentTarget
//   );

//   // Stop propagation
//   //   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER: ', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV: ', e.target, e.currentTarget);
//   },
//   true
// );

// DOM traversing
// const h1 = document.querySelector('h1');

// // Going downward: Selecting child element
// console.log('Selecting child: ', h1.querySelectorAll('.highlight'));
// console.log('h1 direct children: ', h1.childNodes);
// console.log('h1 children: ', h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'black';

// // Going upward, selecting parents
// console.log('parent of the h1 element: ', h1.parentNode);

// h1.closest('.header').style.backgroundColor = 'orangered';
// h1.closest('h1').style.backgroundColor = 'blue';

// // Going sideway: silbling
// console.log('h1 prev silbling: ', h1.previousElementSibling);
// console.log('h1 next silbling: ', h1.nextElementSibling);

// // Get all the silbling elements
// console.log('all sibling elements: ', h1.parentElement.children);
