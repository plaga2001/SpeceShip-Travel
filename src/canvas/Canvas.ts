import Factory from '../factory/FactoryRaw'
import Player from '../player/PlayerRaw'

export default class Canvas{
    canvas: HTMLElement;
    dificult: number;
    player: Player | null;
    factorys: Factory[];
    speed: number;
    constructor(htmlCanvas: HTMLElement, dificult: number){
        this.canvas = htmlCanvas;
        this.dificult = dificult;
        this.player = null;
        this.factorys = [];
        this.speed = 60;
    }
    add_factory(factory: Factory){
        this.factorys.push(factory)
    }
}