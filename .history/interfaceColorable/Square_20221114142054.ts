import {Rectangle} from "./Rectangle";
import {Colorable} from './Colorable';

export class Square extends Rectangle implements Color {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
}
