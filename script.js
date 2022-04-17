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
  const s1Coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation

// document.querySelectorAll('.nav__link').forEach(node => {
//   node.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation
// 1. Add event listener to the common parent element of all element that we interested in.
// 2. Determine what elemement originated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // Matching stragedy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
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
const h1 = document.querySelector('h1');

// Going downward: Selecting child element
console.log('Selecting child: ', h1.querySelectorAll('.highlight'));
console.log('h1 direct children: ', h1.childNodes);
console.log('h1 children: ', h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';

// Going upward, selecting parents
console.log('parent of the h1 element: ', h1.parentNode);

h1.closest('.header').style.backgroundColor = 'orangered';
h1.closest('h1').style.backgroundColor = 'blue';

// Going sideway: silbling
console.log('h1 prev silbling: ', h1.previousElementSibling);
console.log('h1 next silbling: ', h1.nextElementSibling);

// Get all the silbling elements
console.log('all sibling elements: ', h1.parentElement.children);
