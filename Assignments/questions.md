 ### Hacker Rank Questions:
* [Reduce String](https://www.hackerrank.com/challenges/reduced-string/problem)
* [Divisible Sum Pairs](https://www.hackerrank.com/challenges/divisible-sum-pairs/problem)
* [Kangroo Prob](https://www.hackerrank.com/challenges/kangaroo/problem)
* [Tree Traversal](https://www.hackerrank.com/challenges/tree-preorder-traversal/problem)




*List of Questions were asked in the interview*
# JavaScript  
1. Remove Duplicates from an array and objects 
2. How to find out the missing number in the array [1,2,3,5,6,7] and if array contains 2 lac of records 
3. How to implement 2POWn or basePOWn (example 2^3 or 3^4 or a^b)
4. Implement inheritance with realstic example 
5. write method product to return an product of all parameters product(2)(3)(4)(6)
6. What is the closure and what are the advantages and disadvantages of closures and how it leads to memory leak.
    1. [closure memory leaks ](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)
7. How to create immutable objects(immutable.js through library but how it works internally) in Javascript(because object is reference type,reserved a same memory through it entire life cycle)
8. Reorder the given array as following passion (right side even element and odd elements left side) without using temporary array 
```
GIVEN ARRAY [1,2,4,5,7,9,6]
O/p --> [1,5,7,9,2,4,6]
```
9. Reverse the given phrase "Welcome to possible" to "possible to welcome" without using array built in array or array methods 

10. What is the deep copy and shallow copy 
11. Implement custom methods cal,apply and bind 
12. What is the use of arrowed functions in ES6, spread operators 
13. What are the difference between constructor methods and prototypes methods in js and how to implement in typescript  
14. how to create multi threading in js 
15. how to execute js code parellel and series 

# HTML
1. How to refresh the page using meta tag and what is the use of meta tag 
2. 


# CSS
1. How to highlight last letter of character in string 

# Angular 2+
1. How change detections happen internally [check here](https://www.youtube.com/watch?v=CUxD91DWkGM)
2. What is the monomorphism in ZONEJS(change detections)

### Angular Best Practices or SPA framework best practices 
1. **Implement immutability component or data structure** if component will not change through out its life span and for doing this we can intimate Angular to do not involve in change detection cycle and it will increase the performance of the page. 
    * For Example static menu component 
    * If page contains the tab and each tab has to be maintain its states if uses switched between the tabs 
# Which is the best JS framework to develope an Enterprise application 
* Both does the same job to build large page SPA 
* Angular comes with ready make framework and everything is tightly coupled *but ReactJS is just library*
* Angular shipped with all the components and router library init *but in reactJS we have to include seperately*

* Angular Does not support shadow virtual domming, instead of this Angular has change detection algorithm to reflect the changes in very efficient manner and we have flexibility to enable and disable for selective components *But reactJS supports very extensively by maintaining two snapshot of DOM one is Real and one is virtual and every time if changes happens in the DOM it compares both snapshots and update only change part*

* For Angular we can write the code in TypeScript(which comes with tones of feature for angular too) *but for ReactJS development we can use the JSX or Typescript(but this will not support extensively and community support is very less)*

* Since Angular app can develop application one who comes from other language background like Java or C# and they can easily pick up *but for reactJS they have to learn JS*

* For Angular We have to select the angulared components if we wanted to depend on third party *but in ReactJS we can use normal JS libraries*

* In Angular State management is little hard and challenge to maintain *in ReactJS we can easily maintain since it supports the one way data direction flow*

* All Angular application looks similar because it can be build with NGCLI and continues the same code structure *but with reactJS since is JS library for we have to install lot of JS plugins, hence code maintenance is quite challenge and scaffolding will not be similar form project to project or everybody(developers)  have to synch common structure or Design Patterns*

* *React governs with view layer with proper state of an object and it does not realy care about which or what JS libraries you use for development* 

* *Since react supports virtual DOM application is quite faster in performance*

* *ReactJS can easily integrate with Ruby and python or other frameworks*

* *ReactJS can be used where data changeable is huge on regular basis*

* Angular learning curve is easy *but in ReactJS is quite more because there are lot of new terminologies like Redux,stores and dispatches and props*

* Angular is Javascript on HTML and *ReactJS is HTML on JS*

* Angular is client side rendering **but can be rendered server side too using angular universal** but *ReactJS is server side rendering*



    | Angular                                          | REACTJS     |
    | -------------------------------------------------|--------------
    | This is ready made framework to develope an SPA  | This is just a library, for rotuer and       |
      and it comes with router part as well 


