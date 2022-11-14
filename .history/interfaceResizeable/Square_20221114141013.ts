import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable"

export class Square extends Rectangle implements Resizeable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    resize(percents: number): string {
        return `SquareArea:
        Before: ${this.calculateArea()}
        After: ${this.calculateArea() * (1 + percents / 100)}`
    }
}
