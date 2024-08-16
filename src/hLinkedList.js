import { Node } from "./hNode";

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(val) {
        const tempNode = new Node(val);
        if (this.head == null) {
            this.head = tempNode;
            this.tail = tempNode;
        } else {
            this.tail.next = tempNode;
            this.tail = tempNode;
        }
    }
    prepend(val) {
        const tempNode = new Node(val, this.head);//point to head as next
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
        let currNode = new Node();
        currNode = this.head;
        if (this.head == null) {
            console.log("cant pop already empty");
            return;
        }
        else if (this.head.next == null) {
            this.head == null;
            this.tail == null;
        } else {
            while (currNode.next.next != null) {
                currNode = currNode.next;
            }
            currNode.next = null;
            this.tail = currNode;
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