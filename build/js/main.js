let adres = document.querySelector('#adres');
let nav = document.querySelector('#nav');
let adresList = document.querySelector('.contact-details__list');
let navList = document.querySelector('.navigation__list');

adres.addEventListener('click', function() {
  adresList.classList.toggle('_active');
})

nav.addEventListener('click', function() {
  navList.classList.toggle('_active');
})