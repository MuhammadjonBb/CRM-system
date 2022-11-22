export const sortTable = () => {
  const table = document.querySelector('.clients__list table');
  const headers = document.querySelectorAll('.headings__btn');
  const wrapper = document.querySelector('.clients__list');

  const directions = Array.from(headers).map(() => '');

  const transform = (type, content) => {
    switch (type) {
      case 'id':
        parseFloat(content)
      case 'create':
      case 'update':
        return content.split('.').reverse().join('-')
      case 'text':
      default:
        return content
    }
  }

  const sortColumn = index => {
    const type = headers[index].getAttribute('data-type');
    const rows = wrapper.querySelectorAll('tr');
    const direction = directions[index] || 'sortUp';
    const multiply = direction === 'sortUp' ? 1 : -1;
    const newRows = Array.from(rows);
    newRows.sort((row1, row2) => {
      const cellA = row1.querySelectorAll('td')[index].textContent;
      const cellB = row2.querySelectorAll('td')[index].textContent;

      console.log(row1.querySelectorAll('td')[index]);
      console.log(row2.querySelectorAll('td')[index]);

      const a = transform(type, cellA);
      const b = transform(type, cellB);
      console.log(typeof a);

      switch (true) {
        case a > b:
          return 1 * multiply
        case a < b:
          return -1 * multiply
        case a === b:
          return 0
      }
    });


    [].forEach.call(rows, row => table.removeChild(row));

    directions[index] = direction === 'sortUp' ? 'sortDown' : 'sortUp';

    newRows.forEach(newRow => table.appendChild(newRow));
  }

  Array.from(headers).forEach((el, index) => {
    el.addEventListener('click', () => sortColumn(index));
  })

}
