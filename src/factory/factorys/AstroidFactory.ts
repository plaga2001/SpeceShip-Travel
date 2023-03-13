import Factory from "../FactoryRaw";
import AstroidEnemy from "../../enemys/enemysEntitys/AstroidEnemy";
import Coords from "../../enemys/CoordsInterface";

export default class CommetFactory implements Factory{
    create_enemy(elem: HTMLElement): AstroidEnemy{
        const height = elem.clientHeight;
        const width = elem.clientWidth;

        const element: HTMLElement = document.createElement('div');
        element.classList.add('Enemy', 'Astroid')
        elem.appendChild(element);

        const coords: Coords = {
            initial_X: Math.round(Math.random() * width),
            initial_Y: 0 - element.clientHeight,
            final_X: Math.round(Math.random() * width),
            final_Y: height
        }

        return new AstroidEnemy(coords, element);
    }
}