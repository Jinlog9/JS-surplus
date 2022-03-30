import Box from "./Box.js";
import { bubbleSort, selectionSort } from "./SortAlgo.js";
import { randomData } from "./util.js";

export const EventListener = () => {
  const sortUl = document.querySelector(".sort-ul");
  sortUl.addEventListener("click", ({ target }) => {
    if (target.tagName === "LI") {
      const id = target.getAttribute("id");
      console.log(Box.boxes);
      switch (id) {
        case "bubble":
          Box.valueInit();
          bubbleSort(randomData);
          break;
        case "selection":
          Box.valueInit();
          selectionSort(randomData);
          break;
      }
    }
  });
};
