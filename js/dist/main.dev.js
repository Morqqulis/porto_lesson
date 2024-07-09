"use strict";

new VenoBox({
  selector: ".testimonials__link, .portfolio__link",
  numeration: true,
  infinigall: true,
  share: true,
  autoplay: true
});
var mixer = mixitup('.portfolio__gallery');
wow = new WOW({
  boxClass: 'wow',
  // default
  animateClass: 'animated',
  // default
  offset: 0,
  // default
  mobile: true,
  // default
  live: true // default

});
wow.init();
document.addEventListener("click", function (e) {
  var tar = e.target;

  if (tar.closest('.burger')) {
    tar.closest(".burger").classList.toggle('burger--active');
    toggleClass('header__nav', 'header__nav--open');
  }
});

function toggleClass(string, newClass) {
  select = document.querySelector('.' + string);
  newClass = select.classList.toggle(newClass);
  return string, newClass;
}