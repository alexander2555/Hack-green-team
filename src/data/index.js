const team = {
  name: 'Hackathon Green Team',
  description: 'Team description',
};

const members = [
  {
    id: '1',
    name: 'Александр',
    photo: 'https://picsum.photos/200',
    about: 'about text 1',
    contacts: {
      email: 'alexander2555@yandex.ru',
      telegram: '@alexa_derw',
    },
    responsibilities: 'responsibilities 1',
    age: 42,
  },
  {
    id: '2',
    name: 'Арам',
    photo: 'https://picsum.photos/200',
    about: 'about text 2',
    contacts: {
      email: 'hrayryan77@gmail.com',
      telegram: '@Am17153',
    },
    responsibilities: 'responsibilities 2',
    age: 42,
  },
  {
    id: '3',
    name: 'Виталий',
    photo: 'https://picsum.photos/200',
    about: 'about text 3',
    contacts: {
      email: 'vitalikhshiluk29@icloud.com',
      telegram: '@vs_Hash',
    },
    responsibilities: 'responsibilities 3',
    age: 42,
  },
  {
    id: '4',
    name: 'Дмитрий',
    photo: 'https://picsum.photos/200',
    about: 'about text 4',
    contacts: {
      email: 'dimenerds@gmail.com',
      telegram: '@Dimeger',
    },
    responsibilities: 'responsibilities 4',
    age: 42,
  },
];

export const data = {
  team,
  members,
};

export * from './helpers/get-member';
