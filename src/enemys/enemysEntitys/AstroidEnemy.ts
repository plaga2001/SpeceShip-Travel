import Enemy from "../Enemys";
import Coords from "../CoordsInterface";

export default class AstroidEnemy implements Enemy{
    name: String;
    elem: HTMLElement;
    coords: Coords; 
    time: number;
    constructor(coords: Coords, elem: HTMLElement){
        this.name = "Astroid"
        this.elem = elem;
        this.coords = coords;   
        this.time = 8000;
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