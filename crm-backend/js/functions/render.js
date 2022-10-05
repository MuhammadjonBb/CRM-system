import { createClient } from "../components/createClietnt.js";
import { createContact } from "../components/createContact.js";
import { createTableLoader } from "../components/createTableLoader.js";
import { showMoreBtn } from "./show-more-contacts.js";

export const editStr = str => {
  const date = `${str.slice(8, 10)}.${str.slice(5, 7)}.${str.slice(0, 4)}`;
  const time = `${str.slice(11, 16)}`;
  return { date, time }
}

export const render = data => {
  const wrapper = document.querySelector('.clients__list');
  const table = document.querySelector('.clients__list table');

  data.forEach(el => {
    const fullname = `${el.surname} ${el.name} ${el.lastName}`;

    const client = createClient
      (
        el.id.slice(3),
        fullname,
        editStr(el.createdAt).date,
        editStr(el.updatedAt).date,
        createContact(el.contacts),
        editStr(el.createdAt).time,
        editStr(el.updatedAt).time
      )

    table.append(client.tRow);
  });
  const contactItems = document.querySelectorAll('.contacts__list');
  contactItems.forEach((el, index) => {
    if (contactItems[index].childNodes.length > 5) {
      contactItems[index].querySelectorAll('.contacts__item:nth-child(n + 5)').forEach(el => el.style.display = 'none');
      contactItems[index].append(showMoreBtn(contactItems[index].childNodes.length - 4));
    }
  })
}

