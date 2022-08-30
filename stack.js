/*
const stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube"); */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if(!this.size) {
            return undefined;
        } else {
            const currentFirst = this.first;
            this.first = currentFirst.next;
            currentFirst.next = null;
            this.size--;
            return currentFirst;
        }
    }
}
