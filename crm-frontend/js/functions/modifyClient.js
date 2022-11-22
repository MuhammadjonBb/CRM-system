import { url } from "../main.js";
export const modifyData = async (name, surname, lastname, contacts, id) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application.json' },
    body: JSON.stringify({
      name: name,
      surname: surname,
      lastName: lastname,
      contacts: contacts
      ,
    })
  })
  const data = await response.json();
  return data;
}
