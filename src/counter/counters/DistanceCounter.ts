import Counter from "../Counters";

export default class DistanceCounter implements Counter{
    htmlElement: HTMLElement;
    initial_number: number;
    constructor(elem: HTMLElement){
        this.htmlElement = elem;
        this.initial_number = 0;
    }
    start(): void {
        setInterval(() => {
            this.htmlElement.innerText = `${ this.initial_number }`
        }, 400)
    }
    subtrac(suv: number): void {
        this.initial_number -= suv;
    }
    add(add: number): void {
        this.initial_number += add;        
    }
}