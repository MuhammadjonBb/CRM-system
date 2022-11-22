export const createErrorSpan = (txt, wrapper) => {
  const span = document.createElement('span');
  span.classList.add('form__error-span');
  span.textContent = txt;
  wrapper.append(span);
}
