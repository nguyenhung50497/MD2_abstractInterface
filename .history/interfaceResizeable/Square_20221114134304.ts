import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable"

export class Square extends Rectangle implements  {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
}
