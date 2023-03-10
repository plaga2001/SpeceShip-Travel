import Enemy from "../EnemiesRaw";

export class CommetEnemy implements Enemy{
    disPoints: Number;

    constructor(points: Number){
        this.disPoints = points;
    }

    getCords(): Object {
       return{
        
       }
    }

    renderEnemy(): void {
        
    }
}