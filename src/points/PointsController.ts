export default class PointsController{
    score: number;
    elem: HTMLSpanElement;
    addTime: number;
    stepScore: number;
    constructor(elem: HTMLSpanElement){
        this.elem = elem
        this.score = 0;
        this.stepScore = 1;
        this.addTime = 1500;
        this.init();
    }
    init(): void{        
        setInterval(() => {
            if (this.score < 9) {
                this.elem.innerText = `0${ this.score += this.stepScore}`;
            }else{
                this.elem.innerText = `${ this.score += this.stepScore}`;
            }

        }, this.addTime)
    }
    resetPoints(): void{
        this.score = 0;
    }
    startPoints(): void{
        this.score = 1;
        this.init();
    }

    set addPoints(newPoints: number){
        this.score += newPoints;
    }

    get getPoints():number{
        return this.score;
    }
    
}