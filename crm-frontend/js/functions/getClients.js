import { url } from "../main.js";
export const getClientsData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
