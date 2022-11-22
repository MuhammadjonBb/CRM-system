import { url } from "../main.js";
export const deleteClient = async id => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  })

  const data = await response.json();
  return data;
}
