export default class Player{
    playerHTML: HTMLElement;
    originHTML: HTMLElement;
    constructor(elem: HTMLElement){
        this.originHTML = elem;
        this.playerHTML = document.createElement('div');
    }
    move(){
        this.playerHTML.classList.add('Player');
        this.originHTML.appendChild(this.playerHTML);
        this.originHTML.addEventListener('mousemove', (e) => {
            this.playerHTML.style.top = `${ e.clientY }px`;
            this.playerHTML.style.left = `${ e.clientX }px`
        })
        this.originHTML.addEventListener('touchmove', (e) => {
            this.playerHTML.style.top = `${ e.targetTouches[0].pageY }px`;
            this.playerHTML.style.left = `${ e.targetTouches[0].pageX }px`
        })
    }   
}