import { getDocks, getHaulingShips } from "./database.js";

export const DockList = () => {
  const docks = getDocks();

  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-id="${dock.id}" data-location="${dock.location}">${dock.location} dock can hold ${dock.volume} million tons of cargo</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "dock") {
    const dockId = parseInt(itemClicked.dataset.id);
    const haulers = getHaulingShips();
    const matchingHaulers = [];

    for (const hauler of haulers) {
      if (hauler.dockId === dockId) {
        matchingHaulers.push(hauler.name);
      }
    }

    window.alert(`${itemClicked.textContent}`)
    
    if (matchingHaulers.length === 0) {
      window.alert(
        `The ${itemClicked.dataset.location} dock is currently unloading nothing`,
      );
    } else {
      window.alert(
        `The ${itemClicked.dataset.location} dock is currently unloading ${matchingHaulers.join(", ")}`); }
  }
});
