import { getShippingShips, getHaulingShips } from "./database.js";

export const ShippingShipList = () => {
  const shippingShips = getShippingShips();

  let shippingShipsHTML = "<ul>";

  for (const shippingShip of shippingShips) {
    shippingShipsHTML += `<li data-type="shippingShip" data-id="${shippingShip.id}" data-hauler-id="${shippingShip.haulerId}">${shippingShip.name}</li>`;
  }

  shippingShipsHTML += "</ul>";

  return shippingShipsHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "shippingShip") {
    const haulerId = parseInt(itemClicked.dataset.haulerId);
    const haulers = getHaulingShips();
    let haulingShip = { name: "Incorrect" };

    for (const hauler of haulers) {
      if (hauler.id === haulerId) {
        haulingShip = hauler;
      }
    }
    window.alert(
      `${itemClicked.textContent} is being hauled by ${haulingShip.name}`,
    );
  }
});
