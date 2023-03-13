import Factory from "../FactoryRaw";
import TrashEnemy from "../../enemys/enemysEntitys/TrashEnemy";
import Coords from "../../enemys/CoordsInterface";

export default class CommetFactory implements Factory{
    create_enemy(elem: HTMLElement): TrashEnemy{
        const height = elem.clientHeight;
        const width = elem.clientWidth;

        const element: HTMLElement = document.createElement('div');
        element.classList.add('Enemy', 'Trash')
        elem.appendChild(element);

        const coords: Coords = {
            initial_X: Math.round(Math.random() * width),
            initial_Y: 0 - element.clientHeight,
            final_X: Math.round(Math.random() * width),
            final_Y: height
        }
        
        return new TrashEnemy(coords, element);
    }
}