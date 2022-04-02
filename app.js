const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener("dragstart", function () {
    draggedItem = item;
    setTimeout(function () {
      item.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", function () {
    setTimeout(function () {
      item.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener("dragover", (e) => {
      e.preventDefault();
      list.style.backgroundColor = `var(--selected)`;
    });

    list.addEventListener("dragenter", (e) => {
      e.preventDefault();
      list.style.backgroundColor = `var(--selected)`;
    });

    list.addEventListener("dragleave", () => {
      list.style.backgroundColor = `var(--lists-bg)`;
    });

    list.addEventListener("drop", () => {
      list.append(draggedItem);
      list.style.backgroundColor = `var(--lists-bg)`;
    });
  }
}
