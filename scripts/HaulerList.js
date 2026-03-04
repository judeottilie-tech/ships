import { getHaulingShips, getShippingShips } from "./database.js";

export const HaulerList = () => {
  const haulers = getHaulingShips();

  let haulersHTML = "<ul>";

  for (const hauler of haulers) {
    haulersHTML += `<li data-type="hauler" data-id="${hauler.id}">${hauler.name}</li>`;
  }

  haulersHTML += "</ul>";

  return haulersHTML;
};


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "hauler") {
            
            const haulerId = parseInt(itemClicked.dataset.id)
            const shippingShips = getShippingShips()
            let count = 0

            for (const shippingShip of shippingShips) {
                if (shippingShip.haulerId === haulerId) {
                    count++
                }
            }
         window.alert(`This hauler is carrying ${count} shipping ships`);
    }
})

        // Was a hauler list item clicked?
            // Get the id of the hauler clicked
            // Start a counter variable at 0
            // Iterate all of the shipping ships
                // Does the haulerId foreign key match the id?
                    // Increase the counter by 1
