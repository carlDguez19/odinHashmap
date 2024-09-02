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

let values2 = test.values();
let nullCounter = 0;
for (let i = 0; i < values2.length; i++) {
    console.log(values2[i]);
    if (values2[i] == null) {
        nullCounter++;
    }
}
if (nullCounter == values2.length) {
    console.log("\n\nEMPTY!!!!!");
}

let totalKeys = test.length();
console.log("\n\nTotal keys: " + totalKeys);

let boolTest = test.has("hat");//if not cleared above on line 35 then true else false
console.log("has 'hat' : " + boolTest);

let boolRem = test.remove("hat");
console.log("remove 'hat' : " + boolRem);

let boolTest2 = test.has("hat");//if not cleared above on line 35 then true else false
console.log("has 'hat' : " + boolTest2);

let getTest = test.get("lion");
console.log(getTest);