import Coords from "../CoordsInterface";
import Enemy from "../Enemys";

export default class CommetEnemy implements Enemy{
    elem: HTMLElement;
    des_points: number;
    coords: Coords; 
    constructor(coords: Coords, elem: HTMLElement){
        this.elem = elem;
        this.des_points = 200;
        this.coords = coords;
    }
    move(): void {
        console.log(this.coords.initial_X)
        this.elem.style.top = `${ this.coords.initial_Y }px`;
        this.elem.style.left = `${ this.coords.initial_X }px`
    }   
    colition(): void {
        
    }
}