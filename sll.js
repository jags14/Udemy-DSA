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
            // this.next = null;
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

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var pre = current;
        while(current.next){
            pre = current;
            current = current.next;
        }
        
        this.tail = pre;
        this.tail.next = null;
        this.size--;
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = this.head.next;
        currentHead.next = null;
        this.size--;
        return currentHead;
        
    }

    getNode(n){
        if(n < 0 || n >= this.size) return null;
        let currentNode = this.head;
        for(let counter = 0; counter<n; counter++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    setNode(n, val) {
        const currentNode = this.getNode(n);
        if(!currentNode) return false;
        if(currentNode){
            currentNode.data = val;
            return true;
        }
    }

    insert(n, val) {
        if( n < 0 || n > this.size) return false;
        if(n === 0){
            return !!this.addFirst(val);
        } else if(n === this.size){
            return !!this.push(val);
        } else {
            const newNode = new Node(val);
            const preNode = this.getNode(n-1);
            const nextNode = this.getNode(n);
            preNode.next = newNode;
            newNode.next = nextNode;
        }
        this.size++;
        return true;
    }

    remove(n) {
        if ( n < 0 || n > this.size) return undefined;
        if ( n === 0) {
            return this.shift();
        } else if( n === this.size -1) {
            return this.pop();
        } else {
            //const givenNode = this.getNode(n);
            const prevNode = this.getNode(n-1);
            const removedNode = prevNode.next;
            // const afterNode = this.getNode(n +1)
            const afterNode = removedNode.next;
           // givenNode.next = null;
            prevNode.next = afterNode;
            return removedNode;
        }
    }
}