import './main.scss'
import Player from './player/PlayerRaw';
import PointsController from './points/PointsController';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="Space">
    <div class="Star">
      <div class="Commet"></div>
      <div class="Player"></div>
      <div class="Timing">Distance: <span id="distance">00</span></div>
      <div class="Counter">Score: <span id="score">00</span></div>  
    </div>
  </main>
`;

const data: HTMLDivElement = document.querySelector<HTMLDivElement>('.Player') as HTMLDivElement;
const score: HTMLSpanElement = document.getElementById('score') as HTMLSpanElement;

const playerInit: Player = new Player(data);
const pointsInit: PointsController = new PointsController(score);
