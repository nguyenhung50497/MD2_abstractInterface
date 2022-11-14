import {Rectangle} from "./Rectangle";
import {Colorable} from './Colorable';

export class Square extends Rectangle implements Colorable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    howToColor(): any {
        if (this.width > 0) {
        return `Color all four sides.`}
        else {
        return `Canot `
        }
    }
}
