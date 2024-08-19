// export function cout(a) {
//     console.log(a);
// }
// eslint-disable-next-line no-unused-vars
import { LinkedList } from "./hLinkedList";
//import { Node } from "./hNode";

export class Hashmap {
    constructor() {
        this.loadFactor = 0.75;
        this.buckets = new Array(16).fill(null);
        this.capacity = this.buckets.length;
        this.overload = this.capacity * this.loadFactor;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.capacity;
    }

    // eslint-disable-next-line no-unused-vars
    set(key, value) {

        /*this creates the params as a node first then...
         if hashtable already HAS key then
                overwrite
            elseif check this.length() >= OVERLOAD
                resize hashtable
                and insert into hashtable
            else(theres space available)
                insert into hashtable*/
    }//end set

    get(key) {
        const getIndex = this.hash(key);
        if (this.buckets[getIndex] == null) {
            return null;
        } else {
            let currList = this.buckets[getIndex];
            currList.hGet(key);
        }
    }//end get

    has(key) {
        const getIndex = this.hash(key);
        if (this.buckets[getIndex] == null) {
            return false;
        } else {
            let currList = this.buckets[getIndex];
            currList.hHas(key);
        }
    }

    remove(key) {
        const remIndex = this.hash(key);
        if (this.has(key)) {
            // eslint-disable-next-line no-unused-vars
            let currList = this.buckets[remIndex];
        } else {
            return false;
        }
    }
}