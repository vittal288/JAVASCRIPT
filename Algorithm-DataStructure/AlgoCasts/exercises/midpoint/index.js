// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {

    let node = list.getFirst(); // list.head;
    if (!node) {
        return;
    }

    let slow = node;
    let fast = node;

    //execute while , unitl fast node finds it next fast nodes 
    while (fast.next && fast.next.next) {
        // advance slow node by one    
        slow = slow.next;
        // advance fast node by two 
        fast = fast.next.next
    }
    // slow alwasy point to midpoint of a list 
    return slow;
}

module.exports = midpoint;
