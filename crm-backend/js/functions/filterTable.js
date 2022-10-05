import { getClientsData } from "./getClients.js";
import { editStr, render } from "./render.js";

export const filterTable = () => {
  const input = document.querySelector('.header__input');
  let timeoutID = null;

  input.addEventListener('input', () => {
    document.querySelector('.clients__list table').innerHTML = ''; // очистка таблицы
    const value = input.value;

    if (timeoutID) clearTimeout(timeoutID);

    const filter = async () => { // основной функционал фильтра
      const data = await getClientsData();
      const result = []
      // массив определенных данных
      const idArr = data.map(el => el.id);
      const fullnamesArr = data.map(el => `${el.surname} ${el.name} ${el?.lastName}`);
      const createdDatesArr = data.map(el => `${editStr(el.createdAt).date} ${editStr(el.createdAt).time}`);
      const updatedDatesArr = data.map(el => `${editStr(el.updatedAt).date} ${editStr(el.updatedAt).time}`);

      data.forEach((el, index) => {
        if (idArr[index].includes(value)
          || fullnamesArr[index].includes(value)
          || createdDatesArr[index].includes(value)
          || updatedDatesArr[index].includes(value))
          result.push(el);
      });

      render(result);
    }

    timeoutID = setTimeout(filter, 300);
  })
}
