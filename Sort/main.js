import Box from "./Box.js";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from "./SortAlgo.js";
import { EventListener } from "./EventListener.js";

const init = () => {
  Box.valueInit();
  EventListener();
};

init();
