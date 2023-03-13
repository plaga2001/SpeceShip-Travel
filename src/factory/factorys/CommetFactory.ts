import Factory from "../FactoryRaw";
import CommetEnemy from "../../enemys/enemysEntitys/CommetEnemy";
import Coords from "../../enemys/CoordsInterface";

export default class CommetFactory implements Factory{
    create_enemy(elem: HTMLElement): CommetEnemy{
        const height = elem.clientHeight;
        const width = elem.clientWidth;

        const element: HTMLElement = document.createElement('div');
        element.classList.add('Enemy', 'Commet')
        elem.appendChild(element);

        const coords: Coords = {
            initial_X: width,
            initial_Y: Math.round(Math.random() * height),
            final_X: 0 - element.clientWidth,
            final_Y: Math.round(Math.random() * height),
        }

        return new CommetEnemy(coords, element);
    }
}