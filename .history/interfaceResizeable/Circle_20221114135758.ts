import {Shape} from "./Shape";
import {Resizeable} from "./Resizeable"

export class Circle extends Shape implements Resizeable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    resize(percents: number): number {
        return this.calculateArea + this.calculateArea() * percents / 100;
    }
}
