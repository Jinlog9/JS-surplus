export default class Box {
    el;
    size;
    static boxes = new Set();
    constructor(size, bgColor) {
        this.el = document.createElement("div");
        this.size = size;   
        this.el.style.height = `${10 * this.size}px`;
        this.el.style.backgroundColor = `${bgColor}`;
        this.el.classList.add("box");
    }

    render() {
        // 두 값을 바꿔서 다시 그려주는 함수
    }
}