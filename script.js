const myAnchors = document.querySelector(
  '.header .header__inner .header__menu ul'
);
const mySlider = document.querySelector('.slider');
const myPhoneVertical = document.querySelector(
  '.slider .slider__inner .slider__iphone .slider__iphone_vertical'
);
const myPhoneHorizontal = document.querySelector(
  '.slider .slider__inner .slider__iphone .slider__iphone_horizontal'
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
