const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener("dragstart", () => {
    console.log("dragStart");
    draggedItem = item;
  });

  item.addEventListener("dragend", () => {
    console.log("dragend");
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[i];
  }
}
