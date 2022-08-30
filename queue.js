/*
const q = [];
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

// dequeue
// q.shift()
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            //newNode.next = null;
            this.last = newNode;
        }
        return ++this.size;
        
    }

    dequeue() {
        if(!this.first) {
            return null;
        }
        const temp = this.first;
        if(this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        //temp.next = null;
        this.size--;
        return temp.value;
    }
}