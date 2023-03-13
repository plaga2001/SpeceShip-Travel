import Enemy from '../enemys/Enemys';
import Factory from '../factory/FactoryRaw'
import Player from '../player/PlayerRaw'

export default class Canvas{
    canvas: HTMLElement;
    private player: Player | null | SVGElement;
    private factorys: Factory[];
    speed: number;
    private interval: any;
    constructor(htmlCanvas: HTMLElement, player: Player){
        this.canvas = htmlCanvas;
        this.player = player;
        this.factorys = [];
        this.speed = 1000;
        this.interval = null;
    }
    start(): void{
        this.generate_enemies();
        this.interval = setInterval(() => {
            const randon = Math.round(Math.random() * ((this.factorys.length - 1) - 0) - 0)
            const enemy: Enemy = this.factorys[randon].create_enemy(this.canvas);
            enemy.move();
            
        }, this.speed)  
    }
    add_factory(factory: Factory){
        this.factorys.push(factory)
    }
    reset_game(): void{
        clearInterval(this.interval);
    }
    private generate_enemies(): void{
        
    }
}