// All cards/items select
const allItems = document.querySelectorAll('.item');
// All sorting buttons/elements
const allSortItems = document.querySelectorAll('.sortElement');
const main = document.getElementById('main');
const favs = document.getElementById('favs');

// Add the event listener to add/delete
allItems.forEach((item) => {
  item.addEventListener('click', () => {
    const direction = item.parentElement.id === 'main' ? 'toFavs' : 'toMain';
    updateCollections(item.id, direction);
  });
});

const updateCollections = (id, direction) => {
  // Directions to remove/append 'toFavs' 'toMain'
  let element;
  const params = direction === 'toFavs' ? [main, favs] : [favs, main];

  Object.values(params[0].children).map((item) => {
    if (item.id === id) {
      element = item;
      item.remove();
      const icon = element.getElementsByClassName('fa-solid')[0];
      console.log(icon.classList);
      const classesList = Object.values(icon.classList).includes(
        'fa-heart-circle-plus'
      )
        ? ['fa-heart-circle-plus', 'fa-heart-crack']
        : ['fa-heart-crack', 'fa-heart-circle-plus'];
      icon.classList.remove(classesList[0]);
      icon.classList.add(classesList[1]);
      params[1].appendChild(element);
    }
  });
};
