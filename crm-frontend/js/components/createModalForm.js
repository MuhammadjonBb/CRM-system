import { svgContact } from "../svg.js";
export const createClientForm = () => {
  const modalTitle = document.createElement('h2');
  const modalClose = document.createElement('button');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const labelName = document.createElement('label');
  const inputSurname = document.createElement('input');
  const labelSurname = document.createElement('label');
  const inputLastName = document.createElement('input');
  const labelLastName = document.createElement('label');
  const requiredName = document.createElement('span');
  const requiredSurname = document.createElement('span');
  const addClientBtn = document.createElement('button');
  const clientBtnSvg = document.createElement('span');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const contactsWrap = document.createElement('div');
  const contactItems = document.createElement('div');
  const formFloatingName = document.createElement('span');
  const formFloatingSurname = document.createElement('span');
  const formFloatingLastName = document.createElement('span');
  const errorsBlock = document.createElement('div');

  modalTitle.classList.add('modal__title');
  modalClose.classList.add('modal__close-btn', 'btn-reset');
  form.classList.add('modal__form', 'flex');
  formFloatingName.classList.add('form-floating');
  formFloatingSurname.classList.add('form-floating');
  formFloatingLastName.classList.add('form-floating');
  inputName.classList.add('modal__input');
  inputSurname.classList.add('modal__input');
  inputLastName.classList.add('modal__input');
  labelName.classList.add('modal__label');
  labelSurname.classList.add('modal__label');
  labelLastName.classList.add('modal__label');
  addClientBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active', 'btn-reset');
  saveBtn.classList.add('modal__btn-save', 'btn-reset', 'btn-primary');
  cancelBtn.classList.add('modal__btn-cancel', 'btn-reset');
  clientBtnSvg.classList.add('btn-contact__svg', 'btn-contact__svg');
  requiredName.classList.add('modal__input-item');
  requiredSurname.classList.add('modal__input-item');
  contactsWrap.classList.add('modal__contact', 'flex');
  errorsBlock.classList.add('form__errors');

  labelName.for = 'floatingName';
  labelSurname.for = 'floatingSurname';
  labelLastName.for = 'floatingLastName';
  inputName.id = 'floatingName';
  inputSurname.id = 'floatingSurname';
  inputLastName.id = 'floatingLastName';
  inputName.type = 'text';
  inputSurname.type = 'text';
  inputLastName.type = 'text';
  inputName.placeholder = 'text';
  inputSurname.placeholder = 'text';
  inputLastName.placeholder = 'text';

  modalTitle.textContent = 'Новый клиент';
  labelName.textContent = 'Имя';
  labelSurname.textContent = 'Фамилия';
  labelLastName.textContent = 'Отчество';

  addClientBtn.textContent = 'Добавить контакт';
  addClientBtn.type = 'button';
  saveBtn.textContent = 'Сохранить';
  saveBtn.type = 'button';
  cancelBtn.textContent = 'Отмена';
  cancelBtn.type = 'button';

  requiredName.textContent = '*';
  requiredSurname.textContent = '*';

  clientBtnSvg.innerHTML = svgContact;

  labelName.append(requiredName);
  labelSurname.append(requiredSurname);
  formFloatingName.append(inputName, labelName);
  formFloatingSurname.append(inputSurname, labelSurname);
  formFloatingLastName.append(inputLastName, labelLastName);
  contactsWrap.append(contactItems, addClientBtn);
  form.append(
    formFloatingName,
    formFloatingSurname,
    formFloatingLastName,
    contactsWrap,
    errorsBlock,
    saveBtn,
    cancelBtn,

  );
  addClientBtn.append(clientBtnSvg);

  const inputs = [inputName, inputSurname];
  inputs.forEach(el => {
    el.addEventListener('input', () => el.classList.remove('input-err'));
  })

  return {
    form,
    modalClose,
    modalTitle,
    cancelBtn,
    inputName,
    inputSurname,
    inputLastName,
    labelName,
    labelSurname,
    labelLastName,
    contactsWrap,
    addClientBtn,
    contactItems,
    saveBtn,
    errorsBlock
  }
}
