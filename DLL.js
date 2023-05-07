class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if(!this.length) {
            this.head = node;
            this.tail = node; 
        } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
        }
        this.length++;
        return this;
    }

    // DLL.pop() pops the last element and returns it
    pop(){
        if(!this.length) return undefined;
        if(this.length === 1){
            const poppedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return poppedNode;
        } else {
            const poppedNode = this.tail;
            const newTail = this.tail.prev;
            this.tail.next = null;
            this.tail.prev = null;
            newTail.next = this.head;
            this.tail = newTail;
            this.length--;
            return poppedNode;
        }
    }
    // remove the head
    shift(){
        if(!this.length) return undefined;
        const oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        this.head = this.head.next;
        this.head.prev = null;
        oldHead.next = null;
        this.length--;
        return oldHead;

    }
}