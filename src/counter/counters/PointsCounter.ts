import Counter from "../Counters";

export default class PointsCounter implements Counter{
    htmlElement: HTMLElement;
    initial_number: number;
    constructor(element: HTMLElement){
        this.htmlElement = element;
        this.initial_number = 0;
    }
    start(): void {
        setInterval(() => {
            this.htmlElement.innerText = `${ this.initial_number }`;
        }, 100)
    }
    subtrac(suv: number): void {
        this.initial_number -= suv;
    }
    add(add: number): void {
        this.initial_number += add;
    }
}