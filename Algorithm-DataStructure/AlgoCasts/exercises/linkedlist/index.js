// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


//LinkedList by defalut it will be having empty node 
class LinkedList {

    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        // this time,.head is an empty poinint default null node 
        const node = new Node(data, this.head);

        // update the head of linked list to new node 
        this.head = node;
    }

    size() {
        let counter = 0;
        let node = this.head;

        // while executes for truthy value
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {

        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {

        // if there are no nodes 
        if (!this.head) {
            return;
        }

        // refernce to next node 
        this.head = this.head.next;
    }

    removeLast() {
        // if there are no nodes 
        if (!this.head) {
            return
        }

        // if there is only one node
        if (!this.head.next) {
            this.head = null;
            return;
        }


        // if more than one nodes in the list 
        let prevoius = this.head;
        let node = this.head.next;

        while (node.next) {
            prevoius = node;
            node = node.next;
        }
        prevoius.next = null;
    }

    insertLast(data) {

        // if there is no nodes
        // if (!this.head) {
        //     this.head = new Node(data);  
        //     return this.head;          
        // }

        // //  if there is only one node i.e head node 
        // if(!this.head.next){
        //     this.head.next = data;
        //     return this.head.next;
        // }


        // // if more than one nodes 
        // let node = this.head;

        // while (node) {
        //     if (!node.next) {
        //         node.next = new Node(data);                
        //         return node;
        //     }
        //     node = node.next;
        //     return node;
        // }


        // USING GETLASTNODE method 

        let last = this.getLast();
        if (last) {
            // There are some existing nodes in the chain 
            last.next = new Node(data);
        } else {
            // there are no nodes in the chain 
            this.head = new Node(data);
        }
    }

    getAt(index) {

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        // if more than, linked list length  or out of bounce 
        return null;
    }

    removeAt(index) {

        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        // if index is out of the bound OR  if node is the last node 
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // handle out of the bound case 
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    // ### GENERATORS 
    // --> GENERATORS are the special kind of function and executes the functions lines till it encounters the 
    // yeild line ;
    //--> Next,  if same functions calls then yield statement will replace as placeholder for a variable 

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}


module.exports = { Node, LinkedList };
