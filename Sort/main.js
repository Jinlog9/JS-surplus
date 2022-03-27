import Box from "./Box.js";
import { bubbleSort, selectionSort, insertionSort, mergeSort } from "./SortAlgo.js";
import { randomData, checkTime } from "./util.js";
import { colors } from "./constants.js";

const init = () => {
    for(let i = 0; i < randomData.length; i++) {
        const box = new Box(randomData[i], colors[i]);
        Box.boxes.add(box);
    }
    render();
}

const render = () => {
    const section = document.querySelector(".sort-wrapper");
    const values = [];
    for(let item of Box.boxes) {
        values.push(item.size);
        section.appendChild(item.el);
    }
    mergeSort(values);
}

init();