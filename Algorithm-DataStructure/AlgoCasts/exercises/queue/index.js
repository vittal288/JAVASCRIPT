// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;



// To implement Queue from scratch, we are making use of normal ARRAY but restricting other core methods of it as listed below  
// sift(),push(),splice() and slice() but allowing  remove() and add() by reimplementing below methods
// unshift() ---> add()
// pop() --> remove()
class Queue {
    
    constructor(parameter){
        this.data =[]
    }

    add(record){
        this.data.unshift(record)
    }

    remove(){
        return this.data.pop();        
    }
}

module.exports = Queue;
