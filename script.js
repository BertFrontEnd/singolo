/* Menu */

const myLinks = document.querySelector('.header__menu ul');

myLinks.addEventListener('click', e => {
  const links = myLinks.querySelectorAll('a');
  links.forEach(el => el.classList.remove('menu-active'));
  e.target.classList.add('menu-active');
});

/* Screen */

const btnHomeVertical = document.querySelector('.slider__iphone_vertical-home');
const btnHomeHorizontal = document.querySelector(
  '.slider__iphone_horizontal-home'
);
const btnHomeMiddle = document.querySelector('.slider__iphone_middle-home');

btnHomeVertical.addEventListener('click', () => {
  const iphone = document.querySelector('.slider__iphone_vertical-pic');
  iphone.classList.toggle('switch');
});

btnHomeHorizontal.addEventListener('click', () => {
  const iphone = document.querySelector('.slider__iphone_horizontal-pic');
  iphone.classList.toggle('switch');
});

btnHomeMiddle.addEventListener('click', () => {
  const iphone = document.querySelector('.slider__iphone_middle-pic');
  iphone.classList.toggle('switch');
});

/* Slider */

const myIphones = document.querySelectorAll('.phone');
const leftArrow = document.querySelector('.slider__prev');
const rightArrow = document.querySelector('.slider__next');
const bgColor = document.querySelector('.slider');

let currentIphone = 0;
let isEnabled = true;

function changeCurrentIphone(n) {
  currentIphone = (n + myIphones.length) % myIphones.length;
}

function hideIphone(direction) {
  isEnabled = false;
  myIphones[currentIphone].classList.add(direction);
  myIphones[currentIphone].addEventListener('animationend', function() {
    this.classList.remove('slider-active', direction);
  });
}

function showIphone(direction) {
  myIphones[currentIphone].classList.add('next', direction);
  myIphones[currentIphone].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('slider-active');
    isEnabled = true;
  });
}

function nextIphone(n) {
  hideIphone('to-left');
  changeCurrentIphone(n + 1);
  showIphone('from-right');
}

function previousIphone(n) {
  hideIphone('to-right');
  changeCurrentIphone(n - 1);
  showIphone('from-left');
}

leftArrow.addEventListener('click', () => {
  if (isEnabled) {
    nextIphone(currentIphone);
    bgColor.classList.toggle('bg-color');
  }
});

rightArrow.addEventListener('click', () => {
  if (isEnabled) {
    previousIphone(currentIphone);
    bgColor.classList.toggle('bg-color');
  }
});

/* Tabs */

const myTab = document.querySelector('.portfolio__list ul');
const myPictures = document.querySelector('.portfolio__images ul');
const picturesShuffle = document.querySelectorAll('.portfolio__images ul img');

myTab.addEventListener('click', e => {
  const tabs = myTab.querySelectorAll('li');
  if (e.target.tagName === 'LI' && !e.target.classList.contains('tab-active')) {
    tabs.forEach(el => el.classList.remove('tab-active'));
  }
  e.target.classList.add('tab-active');

  picturesSrc = [];
  picturesShuffle.forEach(el => picturesSrc.push(el.src));
  picturesSrc.sort(() => Math.random() - 1);
  for (let i = 0; i < picturesSrc.length; i++) {
    picturesShuffle[i].src = picturesSrc[i];
  }

  picturesShuffle.forEach(el => el.classList.remove('pic-active'));
});

myPictures.addEventListener('click', e => {
  picturesShuffle.forEach(el => el.classList.remove('pic-active'));
  e.target.classList.add('pic-active');
});

/* Form */

const myForm = document.querySelector('form');
const myPopup = document.querySelector('.pop-up');
const btnForm = document.querySelector('form button');
const btnPopup = document.querySelector('.pop-up button');

myForm.addEventListener('submit', e => {
  e.preventDefault();
  if (myForm.checkValidity()) {
    document.querySelector(
      '.pop-up__message_subject span'
    ).innerText = document.querySelector('.subject').value
      ? document.querySelector('.subject').value
      : 'Singolo';
    document.querySelector(
      '.pop-up__message_description span'
    ).innerText = document.querySelector('.description').value
      ? document.querySelector('.description').value
      : 'Portfolio project';
  }

  myPopup.classList.remove('pop-up__hidden');
  document.body.style.overflow = 'hidden';
  myForm.reset();
});

btnPopup.addEventListener('click', () => {
  myPopup.classList.add('pop-up__hidden');
  document.body.style.overflow = 'auto';
});
