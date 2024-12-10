const element = document.getElementById('header');
window.addEventListener('scroll', function () {

  if (window.scrollY > 1) {
        element.classList.add("header-background");
    } else {
        element.classList.remove("header-background");
    }
});