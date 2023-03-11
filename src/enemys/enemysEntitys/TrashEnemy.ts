import Enemy from "../Enemys";
import Coords from "../CoordsInterface";

export default class TrashEnemy implements Enemy{
    des_points: number;
    coords: Coords;
    constructor(coords: Coords){
        this.des_points = 110;
        this.coords = coords;
    }
    mover(): void {
        
    }
    colition(): void {
        
    }
}