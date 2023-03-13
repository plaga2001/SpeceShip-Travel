import './main.scss'
import Canvas from './canvas/Canvas';
import CommetFactory from './factory/factorys/CommetFactory';
import TrashFactory from './factory/factorys/TrashFactory';
import AstroidFactory from './factory/factorys/AstroidFactory'
import Player from './player/PlayerRaw';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="Space">
    <div class="Star" id="canvas">
      <div class="Counter Distance">Distance: <span id="distance">00</span></div>
      <div class="Counter Points">Score: <span id="score">00</span></div>  
      <div class="btnA ">
        <button class="btn" id="iniciar">Incioar</button>
        <button class="btn" id="parar">Parar</button>
      </div>
    </div>
  </main>
`;

const $canvas: HTMLElement = document.querySelector<HTMLElement>('#canvas') as HTMLElement;

const commetFactory: CommetFactory = new CommetFactory();
const trashFactory: TrashFactory = new TrashFactory();
const astroidFactory: AstroidFactory = new AstroidFactory();

const canvas = new Canvas($canvas);
canvas.add_factory(commetFactory);
canvas.add_factory(astroidFactory);
canvas.add_factory(trashFactory);

document.querySelector('#iniciar')!.addEventListener('click', () => {
  canvas.start();
})

document.querySelector('#parar')!.addEventListener('click', () => {
  canvas.reset_game();
});