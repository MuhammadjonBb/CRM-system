import { url } from "../main.js";
export const setClient = async (name, surname, lastname, contacts) => {
  const response = await fetch(url, {
    method: 'POST',
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
