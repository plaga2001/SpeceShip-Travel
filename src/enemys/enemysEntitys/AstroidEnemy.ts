import Enemy from "../Enemys";
import Coords from "../CoordsInterface";

export default class AstroidEnemy implements Enemy{
    des_points: number;
    coords: Coords;
    constructor(coords: Coords){
        this.des_points = 90;
        this.coords = coords
    }
    mover(): void {
        
    }
    colition(): void {
        
    }
}