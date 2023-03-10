export default class Player{
    elem: HTMLDivElement
    frec: number;
    moveY: number;
    moveX: number;
    steps: number;
    constructor(elem: HTMLDivElement){
        this.elem = elem;
        this.frec = 100;
        this.moveY = 0;
        this.moveX = 0;
        this.steps = 50;
        this.init();
    }
    init(): void{
        window.addEventListener("keydown", (e) => {
            let key = e.key;
            if (key === "ArrowUp" || key === "w") {
                this.moveY += this.steps;
            }
            if (key === "ArrowDown" || key === "s") {
                this.moveY -= this.steps;
            }
            if (key === "ArrowLeft" || key === "a") {
                this.moveX -= this.steps;
            }
            if (key === "ArrowRight" || key === "d") {
                this.moveX += this.steps;
            }
        }, false)
        this.movement();
    }

    movement(): void{
        setInterval(() => {
            this.elem.style.bottom = `${ this.moveY }px`;
            this.elem.style.left = `${ this.moveX }px`;
        }, this.frec)
    }
}