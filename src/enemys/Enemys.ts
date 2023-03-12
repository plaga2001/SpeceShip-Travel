import Coords from "./CoordsInterface";

export default interface Enemy{
    elem: HTMLElement;
    des_points: number;
    coords: Coords;
    move(): void;
    colition(): void;
}