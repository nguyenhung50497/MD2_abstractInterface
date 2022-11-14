import {Circle} from './Circle'
import {Rectangle} from './Rectangle'
import {Square} from './Square'

let circle = new Circle('Circle', 5)
let rectangle = new Rectangle(5, 6, "Rectangle")
let square = new Square('Square', 10)

console.log(circle.resize(Math.floor(Math.random() * 100) + 1))
console.log(rectangle.resize(Math.floor(Math.random() * 100) + 1))
console.log(square.resize(Math.floor(Math.random() * 100) + 1));
