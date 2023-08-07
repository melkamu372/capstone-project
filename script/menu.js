const hamBtn = document.getElementById('ham-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu');
const menuNav = document.getElementById('menu-nav-list');

function openMenu() {
  hamBtn.classList.toggle('hid');
  menu.classList.toggle('hid');
}

function closeMenu() {
  hamBtn.classList.toggle('hid');
  menu.classList.toggle('hid');
}

hamBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuNav.addEventListener('click', closeMenu);