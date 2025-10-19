import Diomedes from "../assets/Diomedes.png";
import Odysseus from "../assets/Odysseus.png";
import Man from "../assets/Man.png";
import Mercury from "../assets/Mercury.png";

const team = {
  name: "Hackathon Green Team",
  description: "Team description",
};

const members = [
  {
    id: "1",
    name: "Александр",
    photo: Odysseus,
    about: "Профессионализм",
    contacts: {
      email: "alexander2555@yandex.ru",
      telegram: "@alexa_derw",
    },
    responsibilities: "Главный разработчик",
    age: 42,
  },
  {
    id: "2",
    name: "Арам",
    photo: Man,
    about: "Неизвестно",
    contacts: {
      email: "hrayryan77@gmail.com",
      telegram: "@Am17153",
    },
    responsibilities: "Нет",
    age: 22,
  },
  {
    id: "3",
    name: "Виталий",
    photo: Mercury,
    about: "Непостоянство",
    contacts: {
      email: "vitalikhshiluk29@icloud.com",
      telegram: "@vs_Hash",
    },
    responsibilities: "Нет",
    age: 22,
  },
  {
    id: "4",
    name: "Дмитрий",
    photo: Diomedes,
    about: "Упорство",
    contacts: {
      email: "dimenerds@gmail.com",
      telegram: "@Dimeger",
    },
    responsibilities: "Общее руководство",
    age: 45,
    badge: "Тимлид",
  },
];

export const data = {
  team,
  members,
};

export * from "./helpers/get-member";
