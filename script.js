const myHeader = document.querySelector('.header');
const mySlider = document.querySelector('.slider');
const myPhoneVertical = document.querySelector(
  '.slider .slider__inner .slider__iphone .slider__iphone_vertical'
);
const myPhoneHorizontal = document.querySelector(
  '.slider .slider__inner .slider__iphone .slider__iphone_horizontal'
);

myHeader.addEventListener('click', e => {
  const links = myHeader.querySelectorAll(
    '.header__inner .header__menu ul li a'
  );
  const anchor = document.querySelector('.header');

  links.forEach(el => el.classList.remove('active'));
  e.target.classList.add('active');

  anchor.classList.add('sticky');
  if (e.target === links[0]) {
    anchor.classList.remove('sticky');
  }
});

myPhoneVertical.addEventListener('click', () => {
  const iphone = document.querySelector(
    '.slider .slider__inner .slider__iphone .slider__iphone_vertical_pic'
  );
  iphone.classList.toggle('switch');
});

myPhoneHorizontal.addEventListener('click', () => {
  const iphone = document.querySelector(
    '.slider .slider__inner .slider__iphone .slider__iphone_horizontal_pic'
  );
  iphone.classList.toggle('switch');
});
