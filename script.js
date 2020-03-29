/* Menu */

const myMenu = document.querySelector('.header__menu');

document.addEventListener('scroll', e => {
  const curPos = window.scrollY;
  const sections = document.querySelectorAll('.for-scroll');
  const links = document.querySelectorAll('.header .link');

  sections.forEach(el => {
    let indent = 0;
    if (window.matchMedia('(screen and (max-width: 767px)').matches) {
      indent = 71;
    } else {
      indent = 95;
    }

    if (
      el.offsetTop - indent <= curPos &&
      el.offsetTop + el.offsetHeight > curPos
    ) {
      links.forEach(a => {
        a.classList.remove('menu-active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('menu-active');
        }
      });
    }
  });

  if (
    document.documentElement.scrollTop +
      document.documentElement.clientHeight ===
    document.documentElement.scrollHeight
  ) {
    myMenu.querySelector('a.menu-active').classList.remove('menu-active');
    links[links.length - 1].classList.add('menu-active');
  }
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
const borderImg = document.querySelectorAll('.portfolio__images ul li img');

myTab.addEventListener('click', e => {
  const tabs = myTab.querySelectorAll('li');

  if (e.target.tagName === 'LI' && !e.target.classList.contains('tab-active')) {
    tabs.forEach(el => el.classList.remove('tab-active'));

    const picturesShuffle = myPictures.querySelectorAll('li');

    myPictures.insertAdjacentElement(
      'afterbegin',
      picturesShuffle[picturesShuffle.length - 1]
    );
  }

  borderImg.forEach(el => el.classList.remove('pic-active'));
  e.target.classList.add('tab-active');
});

myPictures.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    borderImg.forEach(el => {
      el.classList.remove('pic-active');
    });
    e.target.classList.add('pic-active');
  }
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
      '.pop-up__message-subject span'
    ).innerText = document.querySelector('.subject').value
      ? document.querySelector('.subject').value
      : 'no subject';
    document.querySelector(
      '.pop-up__message-description span'
    ).innerText = document.querySelector('.description').value
      ? document.querySelector('.description').value
      : 'no description';
  }

  myPopup.classList.remove('pop-up__hidden');
  document.body.style.overflow = 'hidden';
});

btnPopup.addEventListener('click', () => {
  myPopup.classList.add('pop-up__hidden');
  document.body.style.overflow = 'auto';
  myForm.reset();
});

/* Burger */

const btnBurger = document.querySelector('.header__burger');
const btnBurgerMenu = document.querySelector('nav');
const burgerLogo = document.querySelector('.burger-logo');

btnBurger.addEventListener('click', e => {
  e.preventDefault();
  btnBurger.classList.toggle('burger-active');
  btnBurgerMenu.classList.toggle('burger-menu-active');

  if (btnBurgerMenu.classList.contains('burger-menu-active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  if (burgerLogo.style.display === 'block') {
    burgerLogo.style.display = 'none';
  } else {
    burgerLogo.style.display = 'block';
  }
});

const burgerMenu = document.querySelector('header ul');
console.log(burgerMenu);

burgerMenu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    btnBurger.classList.remove('burger-active');
    console.log(btnBurger);
    btnBurgerMenu.classList.remove('burger-menu-active');
    console.log(btnBurgerMenu);

    if (burgerLogo.style.display === 'block') {
      burgerLogo.style.display = 'none';
    } else {
      burgerLogo.style.display = 'block';
    }
  }

  document.body.style.overflow = 'auto';
});
