import Coords from "./CoordsInterface";

export default interface Enemy{
    name: String;
    elem: HTMLElement;
    coords: Coords;
    time: number;
    move(): void;
    colition(): void;
}