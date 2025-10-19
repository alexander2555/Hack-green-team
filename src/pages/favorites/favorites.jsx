import { useEffect } from "react";
import { useState } from "react";

export const Favorites = () => {
  const [data, setData] = useState([{ name: "Хакатон", value: 1 }]);
  const [name, setName] = useState("Было");

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  const handleClick = () => {
    setData([{ name: "Update React", value: 2 }]);
  };

  const handleGetData = () => {
    const getData = localStorage.getItem("myData");
    const newData = JSON.parse(getData);
    console.log(newData[0].name);
    const newName = newData[0].name;
    setName(newName);
  };

  return (
    <div>
      <div>LocalStorage</div>
      <div>
        {data.map(({ name, value }) => (
          <div key={name}>
            name: {name}, value: {value}
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Обновить данные</button>
      <button onClick={handleGetData}>Получить данные</button>
      <div>Name: {name}</div>
    </div>
  );
};
