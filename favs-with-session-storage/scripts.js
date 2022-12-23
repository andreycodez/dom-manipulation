const cards = document.querySelectorAll('.card');

const showFavs = (cards) => {
  const arr = sessionStorage.favorites;
  cards.forEach((card) => {
    if (arr && arr.split('/').includes(card.dataset.id)) {
      card.style.background = 'red';
      card.setAttribute('data-fav', 'true');
    }
  });
};

showFavs(cards);

const addElToSession = (el) => {
  if (!sessionStorage?.favorites?.split('/').includes(el)) {
    sessionStorage.favorites += sessionStorage.favorites.length
      ? `/${el}`
      : `${el}`;
  }
};

const deleteElFromSession = (el) => {
  const arr = sessionStorage.favorites.split('/');
  if (arr.includes(el)) {
    const index = arr.indexOf(el);
    arr.splice(index, 1);
    sessionStorage.favorites = arr.join('/');
  }
};

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const color = card.dataset.fav === 'false' ? 'red' : '';
    const value = card.dataset.fav === 'false' ? true : false;
    card.style.background = color;
    card.setAttribute('data-fav', value.toString());
    if (value && sessionStorage.hasOwnProperty('favorites')) {
      addElToSession(card.dataset.id);
    } else if (value) {
      sessionStorage.setItem('favorites', '');
      addElToSession(card.dataset.id);
    } else {
      deleteElFromSession(card.dataset.id);
    }
  });
});
