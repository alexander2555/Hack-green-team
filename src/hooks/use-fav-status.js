import { useEffect, useState } from 'react';
import { addToFavorites, getFavorites, removeFromFavorites } from '../utils';

export const useFavStatus = (id) => {
  const [favStatus, setFavStatus] = useState(false);

  const changeFavStatus = () => {
    favStatus ? removeFromFavorites(id) : addToFavorites(id);
    setFavStatus(!favStatus);
  };

  useEffect(() => {
    setFavStatus(getFavorites().includes(id));
  }, [id]);

  return { favStatus, changeFavStatus };
};
