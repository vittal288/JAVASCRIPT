JEST is NPM library from FB for Javascript testing Solutions or Test Runner like Karma 
--> Jest is a complete and easy to set up JavaScript testing solution. 
-->In fact, Jest works out of the box for any React project.

@@@@ How to run Test cases for JS:
Go to : D:\Vittal\POCs\JAVASCRIPT\Algorithm_DataStructure\AlgoCasts\exercises>jest (run the command)

o/p-->
Test Suites: 26 failed, 1 passed, 27 total
Tests:       78 failed, 30 skipped, 32 passed, 140 total
Snapshots:   0 total
Time:        29.099s
Ran all test suites.

@@@ HOW to run one test file :
jest <dirName>/tes-file.js --watch 
Example : jest folder_name/test.js --watch OR jest <folder_name> --watch 


@@ HOW TO DEBUG 
--> put debugger in code
--> invoke that particular method or line of code
--> dir> node inspect file_name.js , to enter into DEBUG mode
--> C and ENTER , to executing the next line like F10 in browser 
--> repl (either this command, to enter into JS console )
--> type or keyed the variable you want to inspect that 


@@@ COMPLEXITY 

@@ RUNTIME Complexity or Big O Notation{ related PROCESSOR} (see the screen shot for more info screen_shots/run-time-complexity.PNG)
--> Constant Time : always ONE UNIT OF process time : no algorithm such in the world as of now
--> Logarthmic Time : log(n)
--> Linear Complexity: if input parameter increased by one then operation to be perfomed by processor is one time to execute that algorithm : n+1
    --> while reversing a string 
--> Qua Linear -->n*log(n)
--> Quadratic Complexity (n^2):if input parameter increased by one then operation to be perfomed by processor is multiple of n time 
    --> while performing matrix operation 
-->Exponential Time (2n)

@@ SPACE COMPLEXITY {Related to MEMORY}
-->How much memory space is required by doubling the problem set 


@@@ MEMOIZATION 
// HOW TO IMPROVE, fibonacci recursive run time run time complexity : i.e  Memoization 
// store the result of fib function to some memory or cache,   if fib is called with same parameter in recursive method 


@@@@ DATA STRUCTURES @@@@
---> Organazing the information(or data) with opimized runtime complexity for adding, editing and removing data 
1. STACK (FILO)
2. QUEUE (FIFO)
3. LINKED LIST 

@@@ LINKED LIST @@@@@
---> sample linked list (have a look of screen shot in AlgoCasts/exercises/linkedlist/screenshots/basic-linked-list.PNG)
const nodeOne ={
    data:123
}
const nodeTwo ={
    data:246
}

nodeOne.next = nodeTwo;

@@@ CIRCULAR LINKED LISR @@@
--> The end of linked is pointing to any one node in the in the list 


@@@ GENERATORS @@@
--> GENERATORS are the special kind of function and executes the functions lines till it encounters the 
    yeild line ;
--> Next if same functions calls then yield statement will replace as placeholder for a variable

--> Use of generator is, we can buila for loop to iterate linked list with for ...of loop

function *numbers(){
    const result = 1+1;
    return 20+ (yield result);
}

const generator = numbers();
console.log(generator.next()) ---> {"value":2, "done":false};
console.log(generator.next(30)) ---> {"value":50, "done":true};


@@@@ TREE @@@@
--> Tree Traversal, 2 ways we can iterate with tree 
--> 1. Breadth-First Traversal(screen-shots/tree/breadth-first.png): Traverse each level of tree from left to right 
--> 2. Depth-First Traversal(screen-shots/tree/depth-first.png): From top(root) to bottom level from left side 


@@@ BINARY TREE @@@
--> A left node of tree is less than the parent node value and right node value should be greater than parent node 
    2
   / \
  0   3

@@@ BINARY SEARCH TREE @@@ 
-->Every node as 2 childrens 
---> Left node should less than its parent and right node should have greater than parent 

