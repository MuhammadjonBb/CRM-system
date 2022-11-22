import { createLoader } from "../functions/createLoader.js";
import { deledeClientModal, modifyDataModal } from "./createModal.js";

export const createClient = (id, fullName, createdDate, lastChanges, contacts, createdTime, updateedTime) => {
  const tRow = document.createElement('tr');
  const idCell = document.createElement('td');
  const fullNameCell = document.createElement('td');
  const createdDateCell = document.createElement('td');
  const lastChangesCell = document.createElement('td');
  const contactsCell = document.createElement('td');
  const updateCell = document.createElement('td');
  const deleteCell = document.createElement('td');
  const updateBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const createdTimeSpan = document.createElement('span');
  const updateedTimeSpan = document.createElement('span');

  tRow.classList.add('clients__table-row', 'client');
  idCell.classList.add('client__cell', 'client__cell-1',);
  fullNameCell.classList.add('client__cell', 'client__cell-2');
  createdDateCell.classList.add('client__cell', 'client__cell-3');
  lastChangesCell.classList.add('client__cell', 'client__cell-4');
  contactsCell.classList.add('client__cell', 'client__cell-5');
  updateCell.classList.add('client__cell', 'client__cell-6');
  deleteCell.classList.add('client__cell', 'client__cell-7');
  updateBtn.classList.add('client__btn', 'client__update-btn', 'btn-reset');
  deleteBtn.classList.add('client__btn', 'client__delete-btn', 'btn-reset');
  createdTimeSpan.classList.add('client__time');
  updateedTimeSpan.classList.add('client__time');

  updateBtn.textContent = 'Изменить';
  deleteBtn.textContent = 'Удалить';

  deleteBtn.addEventListener('click', e => {
    const parent = (e.currentTarget.parentNode).parentNode;
    const id = `166${parent.getAttribute('id')}`;
    document.body.append(deledeClientModal(id));
  })

  updateBtn.addEventListener('click', e => {
    const target = e.currentTarget;
    target.classList.add('update-loader');
    target.prepend(createLoader(target))
    const parent = (e.currentTarget.parentNode).parentNode;
    const id = `166${parent.getAttribute('id')}`;
    document.body.append(modifyDataModal(id));
  })

  tRow.id = id;
  idCell.textContent = id;
  fullNameCell.textContent = fullName;
  createdDateCell.textContent = createdDate;
  lastChangesCell.textContent = lastChanges;
  createdTimeSpan.textContent = createdTime;
  updateedTimeSpan.textContent = updateedTime;

  updateCell.append(updateBtn);
  deleteCell.append(deleteBtn);
  createdDateCell.append(createdTimeSpan);
  lastChangesCell.append(updateedTimeSpan);
  contactsCell.append(contacts);

  tRow.append(idCell, fullNameCell, createdDateCell, lastChangesCell, contactsCell, updateCell, deleteCell);

  return {
    fullNameCell,
    idCell,
    createdDateCell,
    lastChangesCell,
    updateCell,
    deleteCell,
    tRow,
    contactsCell,
  }
}
