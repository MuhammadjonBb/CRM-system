import { addContact, getContactsType } from "../functions/addContact.js";
import { createClientForm } from "./createModalForm.js"
import { render } from "../functions/render.js";
import { setClient } from "../functions/setClient.js";
import { getClientsData } from "../functions/getClients.js";
import { createClient } from "./createClient.js";
import { deleteClient } from "../functions/deleteClient.js";
import { modifyData } from "../functions/modifyClient.js";
import { validateForm } from "../functions/form-validate.js";
import { getClientData } from "../functions/getClientData.js";
import { closeModal } from "../functions/closeModal.js";
import { createLoader } from "../functions/createLoader.js";

const scrollUp = () => {
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';
}

const loader = elm => elm.querySelector('.btn-loader')


export const addClient = () => { // модальное окно добавления данных
  scrollUp();
  const createForm = createClientForm();
  const modal = document.createElement('div');
  const modalWrapper = document.createElement('div');
  const saveBtn = createForm.saveBtn

  modal.classList.add('modal', 'modal-active');
  modalWrapper.classList.add('modal__wrapper', 'modal-active');
  createForm.form.classList.add('add-client');


  // save
  saveBtn.addEventListener('click', () => {
    saveBtn.disabled = true
    createLoader(saveBtn);

    if (validateForm(createForm.inputName, createForm.inputSurname, createForm.inputLastName)) {
      document.querySelector('.clients__list table').innerHTML = ''; // clear table

      setClient(
        createForm.inputName.value,
        createForm.inputSurname.value,
        createForm.inputLastName.value,
        getContactsType()
      ).then(() => {
        getClientsData().then(data => render(data));
        modal.remove(createClient.contactsCell);
      })

      document.body.style.overflow = 'visible'; // enable scroll
      return;
    }
    saveBtn.disabled = false
    loader(saveBtn).remove()
  })

  // adding contact
  createForm.addClientBtn.addEventListener('click', () => {
    createForm.contactItems.append(addContact().contactWrapper);
    const contactWrappers = document.querySelectorAll('.modal__contact-item');
    if (contactWrappers.length === 10) createForm.addClientBtn.classList.toggle('modal__btn-contact--active');
  })

  // cancel button
  createForm.cancelBtn.addEventListener('click', () => {
    document?.querySelectorAll('.contact').forEach(el => el?.remove());
  })

  closeModal(modal, createForm.modalClose);

  modal.append(modalWrapper);
  modalWrapper.append(createForm.modalClose, createForm.modalTitle, createForm.form);

  return modal;
}

export const deledeClientModal = id => { // модальное окно удалления данных
  scrollUp();
  const createForm = createClientForm();
  const modal = document.createElement('div');
  const modalWrapper = document.createElement('div');
  const notify = document.createElement('p');
  const modalDeleteBtn = document.createElement('button');

  modal.classList.add('modal', 'modal-active');
  modalWrapper.classList.add('modal__wrapper', 'modal__wrapper-delete', 'modal-active');
  createForm.modalTitle.classList.add('modal__title-delete');
  notify.classList.add('modal__notify-delete');
  modalDeleteBtn.classList.add('modal__btn-delete', 'btn-primary', 'btn-reset');

  createForm.modalTitle.textContent = 'Удалить клиента';
  notify.textContent = 'Вы действительно хотите удалить данного клиента?';
  modalDeleteBtn.textContent = 'Удалить';

  modalDeleteBtn.addEventListener('click', () => {
    modalDeleteBtn.disabled = true
    createLoader(modalDeleteBtn);

    deleteClient(id)
      .then(() => {
        modal.remove();
        document.getElementById(id).remove(); // removing table-row
        document.body.style.overflow = 'visible';
        modalDeleteBtn.disabled = false
        return;
      })
  })

  closeModal(modal, createForm.modalClose);

  createForm.cancelBtn.addEventListener('click', () => {
    document.body.style.overflow = 'visible';
    modal.remove();
  })

  modal.append(modalWrapper);
  modalWrapper.append(createForm.modalClose, createForm.modalTitle, notify, modalDeleteBtn, createForm.cancelBtn);

  return modal;
}

export const modifyDataModal = id => { // модалбное окно изменения данныйх
  scrollUp();
  const createForm = createClientForm();
  const modal = document.createElement('div');
  const modalWrapper = document.createElement('div');
  const idSpan = document.createElement('span');
  const modalModifyBtn = document.createElement('button');
  const saveBtn = createForm.saveBtn

  modal.classList.add('modal');
  modalWrapper.classList.add('modal__wrapper', 'modal__wrapper-delete');
  modalModifyBtn.classList.add('modal__btn-modify', 'btn-primary', 'btn-reset');
  createForm.form.classList.add('modify-client');
  createForm.modalTitle.classList.add('modal__title-modify');
  idSpan.classList.add('modal__client-id');
  createForm.modalTitle.textContent = 'Изменить данные';
  idSpan.textContent = `ID: ${id}`;
  createForm.cancelBtn.textContent = 'Удалить клиента';

  // adding contact
  createForm.addClientBtn.addEventListener('click', () => {
    createForm.contactItems.append(addContact().contactWrapper);
    const contactWrappers = document.querySelectorAll('.modal__contact-item');
    if (contactWrappers.length === 10) createForm.addClientBtn.classList.toggle('modal__btn-contact--active');
  })

  // save
  createForm.saveBtn.addEventListener('click', () => {
    saveBtn.disabled = true
    createLoader(saveBtn);

    if (validateForm(createForm.inputName, createForm.inputSurname, createForm.inputLastName)) {
      document.querySelector('.clients__list table').innerHTML = '';
      modifyData(
        createForm.inputName.value,
        createForm.inputSurname.value,
        createForm.inputLastName.value,
        getContactsType(),
        id
      ).then(() => {
        getClientsData().then(data => render(data));
        modal.remove(createClient.contactsCell);
      })

      document.body.style.overflow = 'visible';
      return;
    }
    saveBtn.disabled = false
    loader(saveBtn).remove()
  })

  // delete
  createForm.cancelBtn.addEventListener('click', () => {
    deleteClient(id);
    document.getElementById(`${id.slice(3)}`).remove(); // removing table-row
    modal.remove();
    document.body.style.overflow = 'visible';
  })

  closeModal(modal, createForm.modalClose);



  // отображение данных кклиента в полях для ввода и тп.
  getClientData(id).then((data => {
    createForm.inputName.value = data.name;
    createForm.inputSurname.value = data.surname;
    createForm.inputLastName.value = data.lastName;
    data.contacts.forEach((el, index) => {
      // заполнение инпутов контакатов
      createForm.contactItems.append(addContact().contactWrapper);
      const inputs = document.querySelectorAll('.contact__input');
      inputs[index].value = el.value;

      // корректное отображение селекта
      const dropTypeBtns = document.querySelectorAll('.dropdown__btn');
      dropTypeBtns[index].setAttribute('data-type', el.type);
      dropTypeBtns[index].textContent = el.type;
      if (el.type === 'other') dropTypeBtns[index].textContent = 'Другое';
      if (el.type === 'tel') dropTypeBtns[index].textContent = 'Телефон';
      dropTypeBtns[index].append(addContact().dropIconSvg);
    })

    // removing loader
    const updateBtnLoader = document.querySelector('.update-loader span')
    updateBtnLoader.parentNode.classList.remove('update-loader')
    updateBtnLoader.remove()

    // displaying
    modal.classList.add('modal-active')
    modalWrapper.classList.add('modal-active')
  }))

  createForm.modalTitle.append(idSpan);
  modalWrapper.append(createForm.modalClose, createForm.modalTitle, createForm.form);
  modal.append(modalWrapper);

  return modal;
}
