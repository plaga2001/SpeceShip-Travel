import Enemy from '../enemys/Enemys';
import Factory from '../factory/FactoryRaw'
import Player from '../player/PlayerRaw'

export default class Canvas{
    canvas: HTMLElement;
    private player: Player| null;
    private factorys: Factory[];
    private speed: number;
    private interval: any;
    constructor(htmlCanvas: HTMLElement){
        this.canvas = htmlCanvas;
        this.player = null;
        this.factorys = [];
        this.speed = 1000;
        this.interval = null;
        this.create_player()
    }
    start(): void{
        this.player!.move()
        this.interval = setInterval(() => {
            const randon = Math.round(Math.random() * ((this.factorys.length - 1) - 0) - 0)
            const enemy: Enemy = this.factorys[randon].create_enemy(this.canvas);
            enemy.move();
            
        }, this.speed)  
    }
    add_factory(factory: Factory){
        this.factorys.push(factory)
    }
    private create_player(){
        this.player = new Player(this.canvas);
    }
    reset_game(): void{
        clearInterval(this.interval);
    }
}