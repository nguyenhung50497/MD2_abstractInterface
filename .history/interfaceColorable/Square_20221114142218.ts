import {Rectangle} from "./Rectangle";
import {Colorable} from './Colorable';

export class Square extends Rectangle intmplemes Colorable {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    howToColor(): string {
        
    }
}
