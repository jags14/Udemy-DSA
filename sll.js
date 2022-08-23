class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addFirst(val) {
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            this.next = null;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this;
    }

    // add a node at the end of the linkedlist
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            // If list is empty
            this.head = newNode;
            this.tail = this.head;
            this.next = null
        } else {
            // If list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
}