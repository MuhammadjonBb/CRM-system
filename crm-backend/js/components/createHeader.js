export const createHeader = () => {
  const header = document.createElement('header');
  const container = document.createElement('div');
  const logo = document.createElement('img');
  const searchInput = document.createElement('input');

  header.classList.add('header');
  container.classList.add('header__wrapper', 'flex');
  logo.classList.add('header__logo', 'logo');
  searchInput.classList.add('header__input', 'input');

  searchInput.placeholder = 'Введите запрос';
  logo.src = '../img/logo.svg';
  logo.alt = 'Логотип';

  container.append(logo, searchInput);
  header.append(container);
  document.body.prepend(header);

  return searchInput;
}
