import Coords from "./CoordsInterface";

export default interface Enemy{
    des_points: number;
    coords: Coords;
    mover(): void;
    colition(): void;
}