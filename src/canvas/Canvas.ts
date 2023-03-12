import Enemy from '../enemys/Enemys';
import Factory from '../factory/FactoryRaw'
import Player from '../player/PlayerRaw'

export default class Canvas{
    canvas: HTMLElement;
    dificult: number;
    player: Player | null | SVGElement;
    factorys: Factory[];
    speed: number;
    constructor(htmlCanvas: HTMLElement, dificult: number, player: Player){
        this.canvas = htmlCanvas;
        this.dificult = dificult;
        this.player = player;
        this.factorys = [];
        this.speed = 60;
    }
    start(): void{
        this.factorys.forEach(elem => {
            (elem.create_enemy(this.canvas)).move()
        })
    }
    add_factory(factory: Factory){
        this.factorys.push(factory)
    }
}