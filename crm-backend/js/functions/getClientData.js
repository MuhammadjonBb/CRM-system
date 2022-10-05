import { url } from "../main.js";

export const getClientData = async (id) => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
}
