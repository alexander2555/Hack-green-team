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
    name_1: "Александра",
    photo: Odysseus,
    about: "Профессионализм",
    contacts: {
      email: "alexander2555@yandex.ru",
      telegram: "@alexa_derw",
    },
    responsibilities: "Главный разработчик",
    age: 42,
    involvement: 100,
  },
  {
    id: "2",
    name: "Арам",
    name_1: "Арама",
    photo: Man,
    about: "Неизвестно",
    contacts: {
      email: "hrayryan77@gmail.com",
      telegram: "@Am17153",
    },
    responsibilities: "Нет",
    involvement: 2,
    age: 22,
  },
  {
    id: "3",
    name: "Виталий",
    name_1: "Виталия",
    photo: Mercury,
    about: "Непостоянство",
    contacts: {
      email: "vitalikhshiluk29@icloud.com",
      telegram: "@vs_Hash",
    },
    responsibilities: "Нет",
    involvement: 10,
    age: 22,
  },
  {
    id: "4",
    name: "Дмитрий",
    name_1: "Дмитрия",
    photo: Diomedes,
    about: "Упорство",
    contacts: {
      email: "dimenerds@gmail.com",
      telegram: "@Dimeger",
    },
    responsibilities: "Общее руководство",
    age: 45,
    involvement: 100,
    badge: "Team Leader",
  },
];

export const data = {
  team,
  members,
};

export * from "./helpers/get-member";
