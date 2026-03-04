const database = {
  docks: [
    {
      id: 1,
      location: "Shanghai, China",
      volume: "43.5",
    },
    {
      id: 2,
      location: "Busan, South Korea",
      volume: "21.6",
    },
    {
      id: 3,
      location: "Rotterdam, The Netherlands",
      volume: "14.35",
    },
    {
      id: 4,
      location: "Antwerp, Belgium",
      volume: "12.04",
    },
  ],
  haulers: [
    {
      id: 1,
      name: "Pioneering Spirit",
      dockId: 1,
    },
    {
      id: 2,
      name: "Boaty McBoatface",
      dockId: 3,
    },
    {
      id: 3,
      name: "Seawise Giant",
      dockId: 1,
    },
    {
      id: 4,
      name: "Big Boy",
      dockId: 1,
    },
    {
      id: 5,
      name: "Fat Man",
      dockId: 1,
    },
    {
      id: 6,
      name: "Little Boy",
      dockId: 4,
    },
  ],
  shippingShips: [
    {
      id: 1,
      name: "Esso Atlantic",
      haulerId: 6,
    },
    {
      id: 2,
      name: "Prairial",
      haulerId: 5,
    },
    {
      id: 3,
      name: "Palais Royal",
      haulerId: 4,
    },
    {
      id: 4,
      name: "Rivoli",
      haulerId: 3,
    },
    {
      id: 5,
      name: "Champs Elysee",
      haulerId: 2,
    },
    {
      id: 6,
      name: "Ever Ace",
      haulerId: 1,
    },
    {
      id: 7,
      name: "Nissei Maru",
      haulerId: 6,
    },
    {
      id: 8,
      name: "MSC Gulsun",
      haulerId: 5,
    },
    {
      id: 9,
      name: "HMM Rotterdam",
      haulerId: 4,
    },
    {
      id: 10,
      name: "CMA CGM Trocadero",
      haulerId: 3,
    },
  ],
};

export const getDocks = () => {
  return structuredClone(database.docks);
};

export const getHaulingShips = () => {
  return structuredClone(database.haulers);
};

export const getShippingShips = () => {
  return structuredClone(database.shippingShips);
};
