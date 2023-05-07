class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while(currentNode) {
            if(newNode.value < currentNode.value){
                currentNode = currentNode.left || newNode;
            } else {
                currentNode = currentNode.right || newNode;
            }
        }
        return this;
    }
    
    search(val) {
        if(!root){
            return null;
        }
        let currNode = this.root;
        while(currNode) {
            if(currNode.value === val){
                return true;
            } else if(val > currNode.value) {
                currNode = currNode.right;
            } else {
                currNode = currNode.left;
            }
        }
        return false;
    }
}