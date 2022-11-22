import { createHeader } from './components/createHeader.js';
import { createClientsSection } from './components/createClientsSection.js';
import { getClientsData } from './functions/getClients.js';
import { render } from './functions/render.js';
import { sortTable } from './functions/sortTable.js';
import { filterTable } from './functions/filterTable.js';

export const url = 'http://localhost:3000/api/clients';

// dom content
const createApp = () => {
  try {
    createHeader();
    createClientsSection();
    getClientsData().then(data => render(data));
    document.addEventListener('DOMContentLoaded', () => {
      sortTable();
      filterTable();
    })

  } catch (err) {
    console.error(err);
  } finally {
    window.onload = () => {
      document.querySelector('.mask').classList.remove('display')
      document.querySelector('.clients__list table').classList.add('on-load')
    }
  }
}
createApp();
