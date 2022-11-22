export const createTableLoader = () => {
  const loaderBlock = document.createElement('div');
  const loader = document.createElement('div');

  loaderBlock.classList.add('mask', 'display', 'flex');
  loader.classList.add('loader');

  loaderBlock.append(loader);
  return loaderBlock
}
