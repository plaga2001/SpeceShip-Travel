import Enemy from "../Enemys";
import Coords from "../CoordsInterface";

export default class TrashEnemy implements Enemy{
    name: String;
    elem: HTMLElement;
    coords: Coords; 
    TIME: number;
    constructor(coords: Coords, elem: HTMLElement){
        this.name = "Trash";
        this.elem = elem;
        this.coords = coords;
        this.TIME = 5000;
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
        ], this.TIME);
        
        setTimeout(() => {
            this.elem.remove();
        }, this.TIME)

    }   
    colition(): void {
        
    }
}