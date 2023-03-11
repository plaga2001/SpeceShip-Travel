export default interface Counter{
    htmlElement: HTMLElement;
    initial_number: number;
    start(): void
    subtrac(suv: number): void
    add(add: number): void
}