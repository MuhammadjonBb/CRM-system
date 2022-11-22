import { cancelSvg, dropdownSvg } from "../svg.js";

export const addContact = () => {
  const contactWrapper = document.createElement('div');
  const dropdownWrapper = document.createElement('div');
  const dropBtn = document.createElement('button');
  const dropIconSvg = document.createElement('span');
  const dropContent = document.createElement('div');
  const input = document.createElement('input');
  const deleteBtn = document.createElement('button');
  const deleteTooltip = document.createElement('span');

  contactWrapper.classList.add('modal__contact-item', 'contact', 'contact-active');
  dropdownWrapper.classList.add('contact__dropdown', 'dropdown');
  dropBtn.classList.add('dropdown__btn', 'btn-reset');
  dropContent.classList.add('dropdown__content');
  input.classList.add('contact__input');
  deleteBtn.classList.add('contact__delete-btn', 'btn-reset', 'tooltip');
  deleteTooltip.classList.add('tooltiptext');


  dropBtn.textContent = 'Телефон';
  dropBtn.type = 'button';
  dropBtn.setAttribute('data-type', 'tel');
  dropIconSvg.innerHTML = dropdownSvg;
  dropContent.id = 'contact-dropdown';
  input.placeholder = 'Введите данные контакта';
  deleteBtn.innerHTML = cancelSvg;
  deleteTooltip.textContent = 'Удалить';

  const createDropContentBtn = (text, type, typeBtn) => {
    const btn = document.createElement('button');
    btn.classList.add('dropdown__content-btn', 'btn-reset');
    btn.setAttribute('data-type', type);
    btn.type = 'button';
    btn.textContent = text;
    btn.addEventListener('click', (e) => {
      typeBtn.textContent = btn.textContent;
      typeBtn.setAttribute('data-type', e.target.getAttribute('data-type'));
      typeBtn.append(dropIconSvg);
      dropContent.classList.toggle('visible');
      dropBtn.classList.toggle('is-active');
    })
    return btn;
  }

  dropContent.append(createDropContentBtn('Телефон', 'tel', dropBtn));
  dropContent.append(createDropContentBtn('Другое', 'other', dropBtn));
  dropContent.append(createDropContentBtn('Vk', 'Vk', dropBtn));
  dropContent.append(createDropContentBtn('Facebook', 'Facebook', dropBtn));
  dropContent.append(createDropContentBtn('Twitter', 'Twitter', dropBtn));

  // dropdown function
  dropBtn.addEventListener('click', () => {
    dropContent.classList.toggle('visible');
    dropBtn.classList.toggle('is-active');
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown__btn')) {
      const dropdowns = document.getElementsByClassName('dropdown__content');
      for (let i = 0; i < dropdowns.length; i++) {
        ;
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('visible')) {
          openDropdown.classList.remove('visible');
        }
      }
    }
  });


  deleteBtn.addEventListener('click', e => {
    e.currentTarget.parentNode.remove();
    const contactWrappers = document.querySelectorAll('.modal__contact-item');
    contactWrappers.length > 9
      ? document.querySelector('.modal__btn-contact').classList.toggle('modal__btn-contact--active')
      : document.querySelector('.modal__btn-contact').classList.add('modal__btn-contact--active')
  })


  dropBtn.append(dropIconSvg);
  contactWrapper.append(dropdownWrapper, input, deleteBtn);
  dropdownWrapper.append(dropBtn, dropContent);
  deleteBtn.append(deleteTooltip);

  return { contactWrapper, input, dropBtn, dropIconSvg }
}

export const getContactsType = () => {
  const contactTypes = [];

  const inputs = document.querySelectorAll('.contact__input');

  document.querySelectorAll('.dropdown__btn').forEach((el, index) => {
    const attr = el.getAttribute('data-type');
    const inputVal = inputs[index].value;

    const obj = { type: attr, value: inputVal }

    contactTypes.push(obj);
  })

  return contactTypes;
}

