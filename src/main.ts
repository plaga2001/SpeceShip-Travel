import './main.scss'

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