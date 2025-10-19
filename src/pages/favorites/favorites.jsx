import { useState } from "react";
import { getFavorites } from "../../utils";
import { Sample } from "../../components/sample/sample";
import { getMember } from "../../data";
// import { data } from "../../data";
import { Button } from "../../elements/button/button";
import { removeFromFavorites } from "../../utils";

export const Favorites = () => {
  const [favorites, setFavorites] = useState(getFavorites());

  const handleRemove = (id) => {
    removeFromFavorites(id);
    const updatedFavorites = getFavorites();
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <div>LocalStorage</div>
      <div>
        {favorites.map((item) => {
          const member = getMember(`${item}`);
          return (
            <>
              <div key={item}>
                <Sample
                  name={member.name}
                  age={member.age}
                  contacts={member.contacts}
                />
                <Button
                  lable="Удалить"
                  backgroundColor="red"
                  onClick={() => handleRemove(item)}
                />
              </div>

              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};
