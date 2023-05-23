const hamburgermenu = document.querySelector('#hamburger-menu');
const closingmenu = document.querySelector('#close-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu');
const menuList = document.querySelector('#hamburger-list');

function openmenu() {
  mobileMenuContainer.classList.remove('hidden');
}
hamburgermenu.addEventListener('click', openmenu);
function closemenu() {
  mobileMenuContainer.classList.add('hidden');
}
closingmenu.addEventListener('click', closemenu);
menuList.addEventListener('click', closemenu);