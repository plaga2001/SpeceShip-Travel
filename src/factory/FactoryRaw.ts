import Enemy from "../enemys/Enemys"

export default interface Factory{
    create_enemy(elem: HTMLElement): Enemy;
}