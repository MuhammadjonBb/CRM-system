export const showMoreBtn = (txt) => {
  const btn = document.createElement('button');

  btn.classList.add('contacts__show-btn', 'btn-reset');
  btn.textContent = `+${txt}`;

  btn.addEventListener('click', () => {
    const parentWrap = btn.parentNode;
    const contactItems = parentWrap.querySelectorAll('.contacts__item');

    contactItems.forEach(el => {
      el.style.display = 'block';
      btn.style.display = 'none';
    })
  })

  return btn;
}
