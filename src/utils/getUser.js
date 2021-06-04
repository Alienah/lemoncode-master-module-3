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

export const getUser = (token) => users.find((user) => user.id === token);