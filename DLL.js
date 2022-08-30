class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if(!this.tail) return undefined;
        const removedNode = this.tail;
        if(this.length === 1) {
            
            this.head = null;
            this.tail = null;
        } else {
            const prevNode = removedNode.prev;
            removedNode.prev = null;
            prevNode.next = null;
            this.tail = prevNode;
             
        }
        this.length --;
        return removedNode;
    }

    shift() {
        if(!this.head) return undefined;
        const removedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const nextNode = removedNode.next;
            removedNode.next = null;
            nextNode.prev = null;
            this.head = nextNode;
        }
        this.length--;
        return removedNode;
    }
}