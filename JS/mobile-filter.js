/* checkbox-filter */
$(document).ready(function () {
  $('.mobile-category-btn').click(function () {
    $('.checkbox-content__inner').toggleClass('checkbox-content__inner--active');
    $('.mobile-category-btn').toggleClass('mobile-category-btn--active');
    $('.checkbox-content__item').removeClass('checkbox-unselected');
  });
});

const labelCheck = document.querySelectorAll('.checkbox');
const checkInner = document.querySelectorAll('.checkbox-content__inner');
const filterTitle = document.querySelector('.mobile-category-btn');
const closBtn = document.querySelectorAll('.checkbox-content__btn');

filterTitle.addEventListener('click', () => {
  labelCheck.forEach(e => {
    checkInner.forEach(el => {
      closBtn.forEach(ele => {
        if (!el.classList.contains('checkbox-content__inner--active')) {
          e.checked = false;
          e.disabled = false;
          if ((e.checked == false && !el.classList.contains('checkbox-content__inner--active'))) {
            el.classList.remove('checkbox-selected');
            ele.classList.remove('checkbox-selected');
          }
        } else if (el.classList.contains('checkbox-content__inner--active')) {
          e.checked = true;
          e.disabled = true;
        }
      })
    })
  });
});

checkInner.forEach( (e) => {
  e.addEventListener('click',  (e) => {
    const label = e.currentTarget.dataset.path;
    checkInner.forEach( ()  =>{
      document.querySelector(`[data-path='${label}']`).classList.add('checkbox-selected');
    });
  });
});

closBtn.forEach( (e) => {
  e.addEventListener('click', (e) => {
    const disabledLabel = e.currentTarget.dataset.active;
    const closeLabel = e.currentTarget.dataset.close;

    closBtn.forEach( () => {
      document.querySelector(`[data-active='${disabledLabel}']`).classList.remove('checkbox-selected');
      document.querySelector(`[data-open='${closeLabel}']`).classList.remove('checkbox-selected');

      labelCheck.forEach( () => {
        document.querySelector(`[data-checked='${disabledLabel}']`).checked = false;
        document.querySelector(`[data-checked='${disabledLabel}']`).disabled = false;
      });
    });
  });
});

labelCheck.forEach( (e) => {
  e.addEventListener('click', (e) => {
    const checkedInput = e.currentTarget.dataset.checked;

  labelCheck.forEach( (e) => {
    document.querySelector(`[data-active='${checkedInput}']`).classList.add('checkbox-selected');
  })
  })
})
