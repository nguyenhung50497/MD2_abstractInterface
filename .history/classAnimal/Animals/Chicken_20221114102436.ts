import {Animal} from "../AbstractClass/Animal";

export class Chicken extends Animal {
    makeSound(): string {
        return "Chicken: cluck-cluck!";
    }
}