import { randomData, checkTime } from "./util.js";
import { colors } from "./constants.js";
export default class Box {
  el;
  size;
  static boxes = [];
  constructor(id, size, bgColor) {
    this.el = document.createElement("div");
    this.el.id = id;
    this.size = size;
    this.el.style.height = `${10 * this.size}px`;
    this.el.style.backgroundColor = `${bgColor}`;
    this.el.classList.add("box");
  }

  static valueInit() {
    const section = document.querySelector(".sort-wrapper");
    section.innerHTML = "";
    this.boxes = [];
    for (let i = 0; i < randomData.length; i++) {
      const box = new Box(i, randomData[i], colors[i]);
      this.boxes.push(box);
    }

    for (let item of Box.boxes) {
      section.appendChild(item.el);
    }
  }

  static swapBox(index1, index2) {
    let temp = this.boxes[index1];
    this.boxes[index1] = this.boxes[index2];
    this.boxes[index2] = temp;

    this.render();
  }

  static render() {
    const section = document.querySelector(".sort-wrapper");
    for (let item of Box.boxes) {
      section.appendChild(item.el);
    }
  }
}
