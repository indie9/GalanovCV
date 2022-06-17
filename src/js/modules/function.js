function write() {
    console.log("neron bornig rome")
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navbar');
let body = document.querySelector('body');
let navlinks = document.getElementsByClassName('nav-link');
let toggleMenu = function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active-mobile-menu');
}
    
menuBtn.addEventListener('click', () => {
  toggleMenu();
});

for(let i = 0; i < navlinks.length; i++ ){
  navlinks[i].addEventListener('click', () => {

    var menu_is_active = menu.classList.contains('active');
    if (menu_is_active) {
      toggleMenu();
    }
  });
}

document.addEventListener('click', function fn(e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_hamburger = target == menuBtn || menuBtn.contains(target);
  var menu_is_active = menu.classList.contains('active');
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});

export {write};