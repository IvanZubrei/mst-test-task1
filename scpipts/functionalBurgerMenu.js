
  function toggleMenu () {
    document.querySelector('html').classList.toggle('no-scrolling');
    document.querySelector('.menu__list').classList.toggle('menu__list--active');
    document.querySelector('.box-blur').classList.toggle('d-flex');
    document.querySelector('.box-blur').classList.toggle('blur');
    document.querySelector('.menu__btn').classList.toggle('menu__btn--open');
  }

  function removeMenu () {
    document.querySelector('html').classList.remove('no-scrolling');
    document.querySelector('.menu__list').classList.remove('menu__list--active');
    document.querySelector('.box-blur').classList.remove('blur');
    document.querySelector('.menu__btn').classList.remove('menu__btn--open');    
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu__btn').addEventListener("click", () => {    
      toggleMenu();
    });
    document.querySelectorAll('.menu__list-link').forEach( link => {  
      link.addEventListener('click', () => {
        toggleMenu();
      })
    });
    
    document.querySelector('.box-blur').addEventListener('click', event => {              
      if (event.target.className == 'box-blur blur') {
        removeMenu ();       
      } 
    });
  });

