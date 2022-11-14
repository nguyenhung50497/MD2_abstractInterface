import {Animal} from './AbstractClass/Animal'
import {Tiger} from "./Animals/Tiger";
import {Chicken} from "./Animals/Chicken";

let animals: Animal[] = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item, index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
})