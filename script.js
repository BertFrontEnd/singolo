const myAnchors = document.querySelector(
  '.header .header__inner .header__menu ul'
);

myAnchors.addEventListener('click', e => {
  const links = myAnchors.querySelectorAll('a');
  console.log(links);
  const anchor = document.querySelector('.header');
  console.log(anchor);

  links.forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');

  anchor.classList.add('sticky');
  if (e.target === links[0]) {
    anchor.classList.remove('sticky');
  }
});

const myPhoneVertical = document.querySelector(
  '.slider .slider__inner .slider__iphone_main .slider__iphone_vertical'
);
const myPhoneHorizontal = document.querySelector(
  '.slider .slider__inner .slider__iphone_main .slider__iphone_horizontal'
);
const myPhoneMiddle = document.querySelector(
  '.slider .slider__inner .slider__iphone_middle img'
);

myPhoneVertical.addEventListener('click', () => {
  const iphone = document.querySelector(
    '.slider .slider__inner .slider__iphone_main .slider__iphone_vertical_pic'
  );
  iphone.classList.toggle('switch');
});

myPhoneHorizontal.addEventListener('click', () => {
  const iphone = document.querySelector(
    '.slider .slider__inner .slider__iphone_main .slider__iphone_horizontal_pic'
  );
  iphone.classList.toggle('switch');
});

myPhoneMiddle.addEventListener('click', () => {
  const iphone = document.querySelector(
    '.slider .slider__inner .slider__iphone_middle .slider__iphone_middle_pic'
  );
  iphone.classList.toggle('switch');
});

const myIphones = document.querySelectorAll('.phone');
/* console.log(myIphones);
console.log(myIphones.length);
console.log(myIphones[0]);
console.log(myIphones[1]); */

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
