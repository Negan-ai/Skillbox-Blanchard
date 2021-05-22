/* POST */
$(document).ready(function () {

  //E-mail Ajax Send
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      // alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});
// form //
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },

    tel: {
      required: true,
      minLength: 10,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length == 10
      }
    },
  },
  messages: {
    name: {
      required: 'Как Вас зовут?',
      minLength: 'Не менее двух символов!'
    },

    tel: {
      required: 'Введите Ваш телефон',
      minLength: 'Не менее десяти символов!'
    }
  },
});
