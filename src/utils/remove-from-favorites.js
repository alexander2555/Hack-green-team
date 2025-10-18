import { getFavorites } from './get-favorites';
import { LOCALSTORAGE_ITEM_NAME } from '../constants/constants';

export const removeFromFavorites = (id) => {
  const favorites = getFavorites(LOCALSTORAGE_ITEM_NAME);

  if (!favorites.length) return;

  const removeIndex = favorites.findIndex((i) => i === id);

  if (removeIndex < 0) return;

  const newFavorites = favorites.splice(removeIndex, 1);

  localStorage.setItem(LOCALSTORAGE_ITEM_NAME, JSON.stringify(newFavorites));
};
