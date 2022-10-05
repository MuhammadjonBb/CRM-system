import { createErrorSpan } from "../components/crateErrorLabel.js";

export const validateForm = (nameInput, surnameInput, lastNameInput) => {
  let isOk = true;
  const errorsWrap = document.querySelector('.form__errors');
  const contactInputs = document.querySelectorAll('.contact__input');

  errorsWrap.innerHTML = '';


  if (nameInput.value.trim() === '') {
    nameInput.classList.add('input-err');
    isOk = false
    createErrorSpan('Поле имени обязательна для заполнения!', errorsWrap);
  }

  if (surnameInput.value.trim() === '') {
    surnameInput.classList.add('input-err');
    isOk = false
    createErrorSpan('Поле фамилии обязательна для заполнения!', errorsWrap);
  }

  if (nameInput.value.trim().length > 30 || surnameInput.value.trim().length > 30 || lastNameInput.value.trim().length > 30) {
    [nameInput, surnameInput, lastNameInput].forEach(el => {
      if (el.value.trim().length > 30) el.classList.add('input-err');
    });
    isOk = false
    createErrorSpan('Введите не более 30 симовлов!', errorsWrap);
  }

  if (contactInputs.length) {
    const valuesArr = Array.from(contactInputs, el => el.value.trim());
    if (valuesArr.includes('')) {
      isOk = false
      createErrorSpan('Заполните все поля для контактов!', errorsWrap);
    }
  }

  return isOk;
}
