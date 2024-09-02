import { LinkedList } from "./hLinkedList";
import { Node } from "./hNode";

export class Hashmap {
    constructor() {
        this.loadFactor = 0.75;
        this.buckets = new Array(16).fill(null);
        this.capacity = this.buckets.length;
        this.overload = this.capacity * this.loadFactor;
        this.totalKeys = 0;
    }

    resize() {
        let currNode = new Node();
        let oldArrEntries = this.buckets;
        this.capacity *= 2;//this.capacity = newCap;
        this.totalKeys = 0;
        this.buckets = new Array(this.capacity).fill(null);
        for (let i = 0; i < oldArrEntries.length; i++) {
            if (oldArrEntries[i]) {
                let currList = oldArrEntries[i];
                while (currList) {//while list is full go through linked list pop off each entry, return it and set in new size array
                    currNode = currList.pop();
                    this.set(currNode.key, currNode.value);
                    this.totalKeys += 1;
                }//end while
            }//end if
        }//end for
    }//end resize function

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.capacity;
    }

    set(key, value) {
        let temp = new Node();
        temp.key = key;
        temp.value = value;
        const i = this.hash(key);
        if (this.has(key)) {
            //overwrite
            // const i = this.hash(key)
            let currList = this.buckets[i];
            currList.hReplace(key, value);
        } else if (this.totalKeys >= this.overload) {
            //resize
            this.resize();
            //set currNode into new size hash &%&%&%&%%&%&%&&%%% WE MUST CHECK IF this.buckets[i] is null if it is we must create a linked list first
            //const i = this.hash(key);
            let currList = this.buckets[i];
            if (currList == null) {
                const someList = new LinkedList();
                this.buckets[i] = someList;
                currList = this.buckets[i];
                currList.append(key, value);
                this.totalKeys++;
            } else {
                currList.append(key, value);
                this.totalKeys++;
            }
        } else {
            //set currNode into new size hash?
            //const i = this.hash(key)
            let currList = this.buckets[i];
            if (currList == null) {
                const someList = new LinkedList();
                this.buckets[i] = someList;
                currList = this.buckets[i];
                currList.append(key, value);
                this.totalKeys++;
            } else {
                currList.append(key, value);
                this.totalKeys++;
            }
        }
    }//end set

    get(key) {//returns value of specified key
        const getIndex = this.hash(key);
        if (this.buckets[getIndex] == null) {
            return null;
        } else {
            let currList = this.buckets[getIndex];//let currList = new LinkedList()
            let getVal = currList.hGet(key);
            return getVal;
        }
    }//end get

    has(key) {//returns boolean on presence of key
        const getIndex = this.hash(key);
        if (this.buckets[getIndex] == null) {
            return false;
        } else {
            let currList = this.buckets[getIndex];
            let boolT = currList.hHas(key);
            return boolT;
        }
    }

    remove(key) {//removes the specified key
        const remIndex = this.hash(key);
        if (this.has(key)) {
            // eslint-disable-next-line no-unused-vars
            let currList = this.buckets[remIndex];
            let remBool = currList.hRemove(key);
            return remBool;
        } else {
            return false;
        }
    }

    length() {//returns the total amount of keys in the hashmap
        return this.totalKeys;
    }

    clear() {//clears the hashmap
        let currList = new LinkedList();
        for (let i = 0; i < this.capacity; i++) {
            currList = this.buckets[i];
            if (currList != null) {
                currList.clearBucket();
            }
        }
    }

    keys() {//returns array with all keys in hashmap
        let keysArr = [];
        console.log("\n\nkeys array: ");
        for (let i = 0; i < this.capacity; i++) {
            let currList = this.buckets[i];
            if (currList != null) {
                keysArr = currList.hKeys(keysArr);
            }
        }
        return keysArr;
    }

    values() {//returns array with all values in hashmap
        let keysArr = [];
        console.log("\n\nvalue array: ");
        for (let i = 0; i < this.capacity; i++) {
            let currList = this.buckets[i];
            if (currList != null) {
                keysArr = currList.hVals(keysArr);
            }
        }
        return keysArr;
    }

    entries() {
        let entryString = "[";
        let result = "";
        for (let i = 0; i < this.capacity; i++) {
            let currList = new LinkedList();
            currList = this.buckets[i];
            if (currList != null) {
                result += currList.hEntries(entryString);
            }
            //if currList != null MAYBE
        }
        return result;
    }
}