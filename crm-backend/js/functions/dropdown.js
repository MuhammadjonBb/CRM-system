export const dropdown = (btn, dropdown) => {
  btn.addEventListener('click', () => {
    dropdown.classList.add('visible');
    btn.classList.toggle('is-active');
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown__btn')) {
      const dropdowns = document.getElementsByClassName('dropdown__content');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('visible')) {
          openDropdown.classList.remove('visible');
        }
      }
    }
  });
}

