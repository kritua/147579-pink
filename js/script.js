var buttonBurger = document.querySelector('.header__button-burger');
var buttonClose = document.querySelector('.header__button-close');
var menuBlock = document.querySelector('.header__menu');
var headerBlock = document.querySelector('.header');

buttonClose.classList.add('hidden');

function openMenu() {
  menuBlock.classList.remove('header__menu--hidden');
  headerBlock.classList.add('header--menu-opened');
  buttonBurger.classList.add('hidden');
  buttonClose.classList.remove('hidden');
}

function closeMenu() {
  menuBlock.classList.add('header__menu--hidden');
  headerBlock.classList.remove('header--menu-opened');
  buttonBurger.classList.remove('hidden');
  buttonClose.classList.add('hidden');
}

buttonBurger.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);

