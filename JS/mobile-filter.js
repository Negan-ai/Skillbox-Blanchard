/* checkbox-filter */
$(document).ready(function () {
  $('.mobile-category-btn').click(function () {
    $('.checkbox-content__item').toggleClass('checkbox-content__label--active');
    $('.mobile-category-btn').toggleClass('mobile-category-btn--active');
    $('.checkbox-content__item').removeClass('checkbox-unselected');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.checkbox-content__item').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const label = e.currentTarget.dataset.path;
      document.querySelectorAll('.checkbox-content__item').forEach(function () {
        document.querySelector(`[data-target='${label}']`).classList.add('checkbox-selected');
      });
      const labelStatus = e.currentTarget.dataset.open;
      document.querySelectorAll('.checkbox-content__item').forEach(function () {
        document.querySelector(`[data-close='${labelStatus}']`).classList.add('checkbox-selected');
      });
    });
  });
  document.querySelectorAll('.checkbox-content__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const disabledLabel = e.currentTarget.dataset.active;

      document.querySelectorAll('.checkbox-content__item').forEach(function (e) {
        document.querySelector(`[data-disable='${disabledLabel}']`).removeAttribute('disabled');

        if (e.classList.contains('checkbox-content__label--active')) {
          document.querySelector(`[data-disable='${disabledLabel}']`).classList.add('checkbox-selected');
        } else {
          document.querySelector(`[data-disable='${disabledLabel}']`).classList.add('checkbox-unselected');
        }
      });
    });
  });
});






