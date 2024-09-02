import { Node } from "./hNode";

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(key, value) {
        const tempNode = new Node(key, value);
        if (this.head == null) {
            this.head = tempNode;
            this.tail = tempNode;
        } else {
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
    }
    prepend(key, value) {
        const tempNode = new Node(key, value, this.head);//point to head as next
        if (this.tail == null) {//if tail is null then that means linked list is empty
            this.head = tempNode;
            this.tail = tempNode;
        }
        this.head = tempNode;
    }
    size() {
        let currNode = new Node();
        currNode = this.head;
        let sizeN = 0;
        while (currNode.next != null) {
            sizeN++;
            currNode = currNode.next;
        }
        sizeN++;
        return sizeN;
    }
    headFirst() {
        if (this.head == null) {
            return 'null';
        }
        return this.head;
    }
    tailLast() {
        if (this.tail == null) {
            return 'null';
        }
        return this.tail;
    }
    at(index) {
        let currNode = new Node();
        currNode = this.head;
        let sizeN = 0;
        while (currNode != null) {
            sizeN++;
            if (sizeN == index) {
                return currNode;
            }
            currNode = currNode.next;
        }
        return "invalid index";
    }
    pop() {
        let temp = new Node();
        let currNode = new Node();
        currNode = this.head;
        if (this.head == null) {
            console.log("cant pop already empty");
            return;
        }
        else if (this.head.next == null) {
            this.head == null;
            this.tail == null;
            return currNode;
        } else {
            while (currNode.next.next != null) {
                currNode = currNode.next;
            }
            temp = currNode.next;
            currNode.next = null;
            this.tail = currNode;
            return temp;
        }
    }

    clearBucket() {
        this.head = null;
        this.tail = null;
    }

    hGet(key) {
        let currNode = new Node();
        currNode = this.head;
        while (currNode != null) {
            if (key == currNode.key) {
                return currNode.value;
            }
            currNode = currNode.next;
        }
        return null;
    }
    hHas(key) {
        let currNode = new Node();
        currNode = this.head;
        while (currNode != null) {
            if (key == currNode.key) {
                return true;
            }
            currNode = currNode.next;
        }
        return false;
    }
    hRemove(key) {
        let currNode = new Node();
        currNode = this.head;
        if (this.head.key == key) {
            currNode = this.head.next;
            this.head.next = null;
            this.head = currNode;
        } else {
            while (currNode != null) {
                if (currNode.next.key == key) {
                    currNode.next = currNode.next.next;
                    return true;
                }
            }
            return false;
        }
    }
    hKeys(arr) {
        let currNode = new Node();
        currNode = this.head;
        while (currNode != null) {
            arr.push(currNode.key);
            currNode = currNode.next;
        }
        return arr;
    }
    hVals(arr) {
        let currNode = new Node();
        currNode = this.head;
        while (currNode != null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }

    hEntries(eString) {
        let currNode = new Node();
        currNode = this.head;
        while (currNode != null) {
            eString += `[${currNode.key},${currNode.value}], `;
            currNode = currNode.next;
        }
        return eString;
    }

    hReplace(key, value) {
        let currNode = new Node();
        currNode = this.head;
        while (currNode != null) {
            if (currNode.key == key) {
                currNode.value == value;
                return;
            }
        }
    }

    contains(val) {
        let currNode = new Node();
        currNode = this.head;
        while (currNode != null) {
            if (currNode.value == val) {
                return true;
            }
            currNode = currNode.next;
        }
        return false;
    }
    find(val) {
        let currNode = new Node();
        currNode = this.head;
        let sizeN = 0;
        while (currNode != null) {
            sizeN++;
            if (currNode.value == val) {
                return sizeN;
            }
            currNode = currNode.next;
        }
        return null;
    }
    toString() {
        let currNode = new Node();
        currNode = this.head;
        while (currNode != null) {
            console.log(`( ${currNode.value} ) -> `);
            currNode = currNode.next;
        }
        console.log('null');
    }
}