export const closeModal = (modal, btn) => {
  // close modal
  btn.addEventListener('click', () => {
    modal.remove();
    document.body.style.overflow = 'visible';
  })

  // close modal on click on overlay
  document.addEventListener('click', e => {
    if (e.target == modal) {
      document.body.style.overflow = 'visible';
      modal.remove();
    }
  })
}
