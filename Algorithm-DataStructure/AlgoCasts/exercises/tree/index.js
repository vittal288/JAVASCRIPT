// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        let node = new Node(data);
        this.children.push(node);
    }
    remove(data) {
        this.children = this.children.filter((data) => {
            return data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // traverse a tree with node and its children from left to right 

    //Algorithm
    // 1. Create an empty array 
    // 2. Take out the root element or node of the array and push into above array 
    // 3. Take out the first element of an array 
    // 4. Then check if, pushed item(root node) has children , then push all its children to same array to end position 
    // 5. Repeat the 3rd and 4th step, and pass as argument to an passing function 
    traverseBF(fn) {
        //1
        let arr = [];

        //2 and 3
        arr.push(this.root);

        //3,4 and 5th
        while (arr.length) {
            // take out the first element of an array 
            const node = arr.shift();
            // ES 5
            //for(let child of node.children){
            //        arr.push(child);
            // }

            // ES 6
            // push elements to end of an array 
            arr.push(...node.children);
            fn(node);
        }
    }


    traverseDF(fn) {
        let arr =[this.root];

        while(arr.length){
            let node = arr.shift();

            // push all nodes to the beginning of an array 
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = { Tree, Node };
