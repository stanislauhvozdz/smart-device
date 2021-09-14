// аккардеон
let adres = document.querySelector('#adres');
let nav = document.querySelector('#nav');
let adresList = document.querySelector('.contact-details__list');
let navList = document.querySelector('.navigation__list');

window.addEventListener('resize', () => {
  if (window.innerWidth < 769) {
    navList.classList.add('_active')
    adresList.classList.add('_active')
  } else {
    navList.classList.remove('_active')
    adresList.classList.remove('_active')
  };
});

adres.addEventListener('click', function () {
  adresList.classList.toggle('_active');
  adres.classList.toggle('footer__toogle--active')
  if (!navList.classList.contains('_active')) {
    navList.classList.add('_active');
    nav.classList.add('footer__toogle--active')
  }
});

nav.addEventListener('click', function () {
  navList.classList.toggle('_active');
  nav.classList.toggle('footer__toogle--active')
  if (!adresList.classList.contains('_active')) {
    adresList.classList.add('_active');
    adres.classList.add('footer__toogle--active')
  }
});


// попап
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelector('#popup-show');
let closePopupButton = document.querySelector('.popup__close');

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

let inputText = document.querySelector('input[type="text"]');
let inputTel = document.querySelector('input[type="tel"]');
let inputCheck = document.querySelector('input[type="checkbox"]');
let textarea = document.querySelector('textarea');

let formInputText = popup.querySelector('input[type="text"]')

openPopupButtons.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('popup--active');
  formInputText.focus();
})

closePopupButton.addEventListener('click', () => {
  popup.classList.remove('popup--active');
});

document.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('popup--active');
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscKey(evt)) {
    popup.classList.remove('popup--active');
  }
});

// валидация
let form = document.querySelector('form')

form.addEventListener('submit', function (evt) {
  if (!inputText.value || !inputTel.value || !inputCheck.checked) {
    evt.preventDefault();
  } else {
    localStorage.setItem("login", loginLogin.value);
    localStorage.setItem("tel", inputTel.value);
    localStorage.setItem("message", textarea.value);
  }
})

// maska
function maskPhone(selector, masked = '+7 (___) ___-__-__') {
  const elems = document.querySelectorAll(selector);

  function mask(event) {
    const keyCode = event.keyCode;
    const template = masked,
      def = template.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    console.log(template);
    let i = 0,
      newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, this.value.length).replace(/_+/g,
      function (a) {
        return "\\d{1," + a.length + "}";
      }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type === "blur" && this.value.length < 5) {
      this.value = "";
    }
  }

  for (const elem of elems) {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }
}
maskPhone('input[type="tel"]');

// Плавные якорные ссылки
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}