import { loaderSvg } from "../svg.js";

export const createLoader = btn => {
  const span = document.createElement('span');
  span.innerHTML = loaderSvg;
  span.classList.add('btn-loader');
  btn.prepend(span);

  return span;
}
