{
  const btnBurgerMenu = document.querySelector('.header__nav-burger');
  const btnCloseMenu = document.querySelector('.header__nav-burger--close');
  const menu = document.querySelector('.header__top-bar');

  btnBurgerMenu.addEventListener('click', () => {
    menu.classList.add('__open');
  });
  
  btnCloseMenu.addEventListener('click', () => {
    menu.classList.remove('__open');
  });
}

{
  const btns = document.querySelectorAll('button.__contacts');
  const btnClose = document.querySelector('.form-wrapper__close-button')
  const form = document.querySelector('.abs-background.__form');
  const inputs = form.querySelectorAll('.form__field.__important .form__field-input');
  const submit = form.querySelector('.form__button-submit');

  const gratitude = document.querySelector('.abs-background.__gratitude');
  const gratitudeBtnSuper = gratitude.querySelector('.gratitude__button');
  const gratitudeBtnClsoe = gratitude.querySelector('.gratitude__close-button');
  

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      form.classList.add('__open');
    });
  });

  btnClose.addEventListener('click', () => {
    form.classList.remove('__open');
  });

  form.onsubmit = function(e){
    e.preventDefault();
  };

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      if(input.value.trim().length > 0) {
        submit.disabled = false;
      }
    });
  });

  submit.addEventListener('click', () => {
    let isSuccess = true;
    inputs.forEach((input) => {
      const field = input.parentElement;
      const fieldPhoneNumber = field.parentElement;

      if(input.value.trim().length === 0) {
        isSuccess = false;
        field.classList.add('__error');
        fieldPhoneNumber.classList.add('__error');
      } else {
        field.classList.remove('__error');
        fieldPhoneNumber.classList.remove('__error');
      }
    });

    if(isSuccess) {
      form.classList.remove('__open');
      gratitude.classList.add('__open');
    }
  });
  
  gratitudeBtnSuper.onclick = gratitudeBtnClsoe.onclick = () => {
    gratitude.classList.remove('__open');
  }
}

{
  const acceptCookies = document.querySelector('.accept-cookies');
  const btnAccept = document.querySelector('.accept-cookies__button--accept');
  const btnDecline = document.querySelector('.accept-cookies__button--decline');
  const btnClose = document.querySelector('.accept-cookies__close-button');

 
  btnAccept.onclick = btnDecline.onclick = btnClose.onclick = () => {
    acceptCookies.classList.remove('__open');
  }
}