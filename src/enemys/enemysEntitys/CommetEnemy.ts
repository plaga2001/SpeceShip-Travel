import Coords from "../CoordsInterface";
import Enemy from "../Enemys";

export default class CommetEnemy implements Enemy{
    name: String;
    elem: HTMLElement;
    coords: Coords; 
    time: number;
    constructor(coords: Coords, elem: HTMLElement){
        this.name = "Commet";
        this.elem = elem;
        this.coords = coords;
        this.time = 2000;
    }
    move(): void {
        this.elem.animate([
            {
                top: `${ this.coords.initial_Y }px`,
                left: `${ this.coords.initial_X }px`
            },
            {
                top: `${ this.coords.final_Y }px`,
                left: `${ this.coords.final_X }px`
            }
        ], this.time);
        
        setTimeout(() => {
            this.elem.remove();
        }, this.time)
    }   
    colition(): void {
        
    }
}