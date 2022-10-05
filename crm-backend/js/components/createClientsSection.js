import { addClient } from "./createModal.js";
import { addUserSvg } from "../svg.js";
import { createTableLoader } from "./createTableLoader.js";

export const createClientsSection = () => {
  const main = document.createElement('main');
  const section = document.createElement('section');
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const clientsWrapp = document.createElement('div');
  const title = document.createElement('h1');
  const clientsBlock = document.createElement('div');
  const clientsTable = document.createElement('table');
  const table = document.createElement('table');
  const tableRow = document.createElement('tr');
  const span = document.createElement('span');
  const idBtn = document.createElement('button');
  const fullNameBtn = document.createElement('button');
  const createdTimeBtn = document.createElement('button');
  const changedTimeBtn = document.createElement('button');
  const addUserModalBtn = document.createElement('button');
  const userIcon = document.createElement('span');


  // arrow icon
  const createArrowIcon = () => {
    const arrowIcon = document.createElement('img');
    arrowIcon.classList.add('headings__icon');
    arrowIcon.src = '../img/arrow.svg';
    arrowIcon.alt = 'стрелка';
    return arrowIcon;
  }

  section.classList.add('clients');
  container.classList.add('container');
  title.classList.add('clients__title', 'text-reset');
  title.textContent = 'Клиенты';
  wrapper.classList.add('clients__wrap');
  clientsWrapp.classList.add('clients__items-wrap');
  clientsBlock.classList.add('clients__list');
  table.classList.add('clients__sort-table');
  tableRow.classList.add('clients__headings', 'headings', 'list-reset', 'flex');
  addUserModalBtn.classList.add('clients__btn', 'btn-secondary', 'btn-reset', 'flex');
  span.classList.add('headings__item-span');
  span.textContent = 'А-Я';
  userIcon.innerHTML = addUserSvg
  addUserModalBtn.textContent = 'Добавить клиента';


  addUserModalBtn.prepend(userIcon);
  addUserModalBtn.addEventListener('click', () => document.body.append(addClient()));

  main.append(section);
  section.append(container);
  container.append(title, wrapper);
  wrapper.append(clientsWrapp, clientsWrapp, addUserModalBtn);
  clientsBlock.append(clientsTable, createTableLoader());
  clientsWrapp.append(table, clientsBlock);
  table.append(tableRow);

  const createSortCell = (btn, text, attr) => {
    const cell = document.createElement('td');
    cell.classList.add('headings__item', 'flex');
    btn.textContent = text;
    btn.setAttribute('data-type', attr);
    btn.append(createArrowIcon());
    btn.classList.add('headings__btn', 'flex', 'btn-reset');
    btn.addEventListener('click', () => btn.classList.toggle('rotate'));
    cell.append(btn);
    tableRow.append(cell);
  }

  const createDefaultCell = text => {
    const cell = document.createElement('td');
    cell.classList.add('headings__item', 'flex');
    cell.textContent = text;
    tableRow.append(cell);
  }

  createSortCell(idBtn, 'ID', 'id');
  createSortCell(fullNameBtn, 'Фамилия Имя Отчество', 'text');
  createSortCell(createdTimeBtn, 'Дата и время создания', 'create');
  createSortCell(changedTimeBtn, 'Последние изменения', 'update');
  createDefaultCell('Контакты');
  createDefaultCell('Действия');

  fullNameBtn.appendChild(span);
  document.body.append(main);
}
