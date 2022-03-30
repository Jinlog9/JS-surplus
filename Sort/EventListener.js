import Box from "./Box.js";
import {
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
} from "./SortAlgo.js";
import { randomData } from "./util.js";

export const EventListener = () => {
  const sortUl = document.querySelector(".sort-ul");
  sortUl.addEventListener("click", ({ target }) => {
    if (target.tagName === "LI") {
      const id = target.getAttribute("id");
      switch (id) {
        case "bubble":
          Box.valueInit();
          bubbleSort(randomData);
          break;
        case "selection":
          Box.valueInit();
          selectionSort(randomData);
          break;
        case "insertion":
          Box.valueInit();
          insertionSort(randomData);
          break;
        case "merge":
          Box.valueInit();
          mergeSort(randomData);
          break;
        case "quick":
          Box.valueInit();
          quickSort(randomData);
          break;
      }
    }
  });
};
