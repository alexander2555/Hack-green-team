import { getFavorites } from './get-favorites';
import { LOCALSTORAGE_ITEM_NAME } from '../constants/constants';

export const addToFavorites = (id) => {
  const favorites = getFavorites(LOCALSTORAGE_ITEM_NAME);

  if (favorites.find((i) => i.id === id)) return;

  localStorage.setItem(
    LOCALSTORAGE_ITEM_NAME,
    JSON.stringify([...favorites, ...id])
  );
};
