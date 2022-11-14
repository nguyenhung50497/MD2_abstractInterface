import {Circle} from './Circle'
import {Rectangle} from './Rectangle'
import {Square} from './Square'

let circle = new Circle('Circle', 5)
let rectangle = new Rectangle(5, 6, "Rectangle")
let square = new Square('Square', 10)

console.log(circle.calculateArea())
console.log(rectangle.calculateArea())
console.log(square.calculateArea())

