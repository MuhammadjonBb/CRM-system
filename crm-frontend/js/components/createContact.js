const createContactLink = (tooltipTextContent, contactKind, iconSrc, type) => {
  const span = document.createElement('span');
  const contactIcon = document.createElement('img');
  const item = document.createElement('li');
  const link = document.createElement('a')

  span.classList.add('contacts__tooltip', 'tooltiptext', 'type');
  contactIcon.classList.add('contacts__icon');
  item.classList.add('tooltip', 'contacts__item');
  link.classList.add('contacts__link')

  contactIcon.alt = contactKind;
  contactIcon.src = iconSrc;

  if (type === 'tel') {
    link.href = `tel:${tooltipTextContent}`
    span.textContent = `${contactKind}: `
    link.textContent = `${tooltipTextContent}`
  } else if (type === 'email') {
    link.href = `mailto:${tooltipTextContent}`
    span.textContent = `${contactKind}: `
    link.textContent = tooltipTextContent
  } else {
    span.textContent = tooltipTextContent
  }

  span.append(link);
  item.append(contactIcon, span);

  return item;
}

export const createContact = arr => {
  const list = document.createElement('ul');
  list.classList.add('contacts__list', 'tooltip-contact', 'list-reset');

  const src = {
    tel: '../img/tel.svg',
    fb: '../img/fb.svg',
    tw: '../img/tw.svg',
    vk: '../img/vk.svg',
    other: '../img/another-tel.svg',
  };

  arr.forEach(el => {
    switch (el.type) {
      case 'tel':
        list.append(createContactLink(el.value, 'Телефон', src.tel, 'tel'));
        break;
      case 'Vk':
        list.append(createContactLink(el.value, 'ВК', src.vk, 'email'));
        break;
      case 'Facebook':
        list.append(createContactLink(el.value, 'Фейсбук', src.fb, 'email'));
        break;
      case 'Twitter':
        list.append(createContactLink(el.value, 'Твиттер', src.tw, 'email'));
        break;
      case 'other':
        list.append(createContactLink(el.value, 'Другое', src.other, 'other'));
        break;
    }

  })

  return list;
}
