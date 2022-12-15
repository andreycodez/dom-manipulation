// All cards/items select
const allItems = document.querySelectorAll('.item');
// All sorting buttons/elements
const allSortItems = document.querySelectorAll('.sortElement');
const main = document.getElementById('main');

// Add sort items onclick event
allSortItems.forEach((item) => {
  const id = item.id;
  const sortDirection = item.dataset.sort;
  item.addEventListener('click', (e) => {
    e.preventDefault();
    sortData(item.dataset.container, item.dataset.sort);
  });
});

const sortData = (dataContainerId, direction) => {
  const container = document.getElementById(dataContainerId);
  const arrItems = [];
  container.childNodes.forEach((item) => {
    if (item.nodeType === 1) arrItems.push(item);
  });
  arrItems.sort((a, b) => {
    if (+a.id > +b.id) {
      return direction === 'a-z' ? 1 : -1;
    } else if (+a.id < +b.id) {
      return direction === 'a-z' ? -1 : 1;
    } else {
      return 0;
    }
  });
  // container.childNodes.forEach((item) => {
  //   item.remove();
  // });
  arrItems.map((item) => {
    container.appendChild(item);
  });
  arrItems.map((item) => {
    container.appendChild(item);
  });
};
