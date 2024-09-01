import { Hashmap } from "./hashmap";
// eslint-disable-next-line no-unused-vars
import { LinkedList } from "./hLinkedList";

let test = new Hashmap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');



let result = test.entries();
console.log(result);

let values = test.values();
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

let keys = test.keys();
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}

//test.clear();

// let values2 = test.values();
// if (values.length == 0) {
//     console.log("\n\nEMPTY!!!!!!!!!!");
// } else {
//     for (let i = 0; i < values2.length; i++) {
//         console.log(values2[i]);
//     }
// }