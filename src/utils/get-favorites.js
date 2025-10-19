import { LOCALSTORAGE_ITEM_NAME } from '../constants/constants';

export const getFavorites = () =>
  JSON.parse(localStorage.getItem(LOCALSTORAGE_ITEM_NAME)) || [];
