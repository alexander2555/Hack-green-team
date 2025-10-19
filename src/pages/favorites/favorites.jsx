import { useState } from "react";
import { getFavorites } from "../../utils";
import { Card } from "../../components/card/card";
import { removeFromFavorites } from "../../utils";
import { data } from "../../data";

import styles from "./favorites.module.css";
import { useEffect } from "react";

export const Favorites = () => {
  const [favorites, setFavorites] = useState(getFavorites());
  const [fm, setFm] = useState([]);

  const handleRemove = (id) => {
    removeFromFavorites(id);
    const updatedFavorites = getFavorites();
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    const newFm = data.members.filter((item) => favorites.includes(item.id));
    setFm(newFm);
  }, [favorites]);

  return (
    <div>
      <div className={styles.mainContainer}>
        {fm.map((member) => (
          <div key={member.id}>
            <Card
              item={member}
              cusstomButton={true}
              lable="Исключить"
              backgroundColor="#b66363ff"
              onClick={() => handleRemove(member.id)}
              path={"/team-member/"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
