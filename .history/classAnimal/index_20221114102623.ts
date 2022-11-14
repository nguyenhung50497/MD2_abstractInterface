import {Tiger} from "./Animals/Tiger";
import {Chicken} from "./Animals/Chicken";

let animals: A = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound())
})