import './main.scss'
import Canvas from './canvas/Canvas';
import Player from './player/PlayerRaw';
import CommetFactory from './factory/factorys/CommetFactory';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="Space">
    <div class="Star" id="canvas">
      <svg width="115" height="257" viewBox="0 0 115 257" fill="none" xmlns="http://www.w3.org/2000/svg" class="Player">
        <path d="M16.348 30.0745V14.5816H29.8774H83.4314H98.0882V30.0745H115V226.014H98.0882V242.418H57.2181H16.348V226.014H0V30.0745H16.348Z" fill="url(#paint0_linear_124_2)"/>
        <path d="M29.8774 0V14.5816H83.4314V0H29.8774Z" fill="url(#paint1_linear_124_2)"/>
        <path d="M29.8774 242.418V257H83.4314V242.418H29.8774Z" fill="url(#paint2_linear_124_2)"/>
        <defs>
        <linearGradient id="paint0_linear_124_2" x1="8.5" y1="-2.95683e-07" x2="115" y2="257" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DADADA"/>
        <stop offset="1" stop-color="#949494"/>
        </linearGradient>
        <linearGradient id="paint1_linear_124_2" x1="8.5" y1="-2.95683e-07" x2="115" y2="257" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DADADA"/>
        <stop offset="1" stop-color="#949494"/>
        </linearGradient>
        <linearGradient id="paint2_linear_124_2" x1="8.5" y1="-2.95683e-07" x2="115" y2="257" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DADADA"/>
        <stop offset="1" stop-color="#949494"/>
        </linearGradient>
        </defs>
      </svg>
      <div class="Timing">Distance: <span id="distance">00</span></div>
      <div class="Counter">Score: <span id="score">00</span></div>  
    </div>
  </main>
`;

const $canvas: HTMLElement = document.querySelector<HTMLElement>('#canvas') as HTMLElement;
const $player: SVGElement = document.querySelector('#player') as SVGElement;

const commetFactory: CommetFactory = new CommetFactory()
const canvas = new Canvas($canvas, 5, $player);
canvas.add_factory(commetFactory);

canvas.start()
