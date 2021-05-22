/* checkbox */
const checkboxItems = document.querySelectorAll('.checkbox-content__item');
const checkboxItem = document.querySelector('.checkbox-content__item');
const checkboxLabeles = document.querySelectorAll('.checkbox-content__label');
const checkboxLabel = document.querySelector('.checkbox-content__label');
const inputCheckbox = document.querySelectorAll('checkbox');
const closeCheckbox = document.querySelector('.checkbox-content__btn');

$(document).ready(function () {
  $('.mobile-category-btn').click(function () {
    $('.checkbox-content__label').toggleClass('checkbox-content__label--active');
    $('.mobile-category-btn').toggleClass('mobile-category-btn--active');
  });
});

form = document.querySelector('form');

form.onclick = function(event) {
  event.target.style.backgroundColor = 'yellow';

  alert("target = " + event.target.tagName + ", this=" + this.tagName);

  // event.target.style.backgroundColor = '';
};

checkboxItems.forEach( (e) => {
  e.onclick = function(event) {
    event.target.classList.add('checkbox-selected');
  }
})






