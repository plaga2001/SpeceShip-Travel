import Coords from "../CoordsInterface";
import Enemy from "../Enemys";

export default class CommetEnemy implements Enemy{
    des_points: number;
    coords: Coords; 
    constructor(coords: Coords){
        this.des_points = 200;
        this.coords = coords;
    }
    mover(): void {
        
    }
    colition(): void {
        
    }
}