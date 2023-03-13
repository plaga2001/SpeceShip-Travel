import Coords from "./CoordsInterface";

export default interface Enemy{
    name: String;
    elem: HTMLElement;
    coords: Coords;
    TIME: number;
    move(): void;
    colition(): void;
}