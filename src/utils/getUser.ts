const users = [
  {
    id: "id1",
    name: "Aida",
    lastName: "Albarrán"
  },
  {
    id: "id2",
    name: "Daniela",
    lastName: "Pérez"
  },
];

interface User {
  id: string;
  name: string;
  lastName: string;
}

export const getUser = (token: string): User => users.find((user) => user.id === token);