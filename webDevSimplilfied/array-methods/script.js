const items = [
    {name:'Bike',     price :100},
    {name:'TV',       price :200},
    {name:'Album',    price :10},
    {name:'Book',     price :5},
    {name:'Phone',    price :500},
    {name:'Computer', price :1000},
    {name:'Keyboard',  price :25},
]

// filter method will not alter original array 
// const filteredItems = items.filter(item=>{
//     return item.price <=100;
// })
// console.log(filteredItems);
// console.log(items);



// map method will not alter the original array but return an new array 
// const itemNames = items.map(item=>{
//     return item.name;
// })
// console.log(itemNames);
// console.log(items);


// const foundItem = items.find(item=>{
//     return item.name ==='Book';
// })

// console.log(foundItem);
// console.log(items);

// items.forEach(item=>{
//     console.log(item.name)
// })

// some method: inside array if condition met for any one item then returns and true 
// const hasExpensiveItems = items.some(item=>{
//     return item.price >= 1000;
// })

// console.log(hasExpensiveItems);

// every method: inside array if condition is met for all items , then returns true otherwise false 

// const hasAllExpensiveItems = items.every(item=>{
//     return item.price >= 0;
// })

// console.log(hasAllExpensiveItems);

// reduce method : entire array reduced to an one entity 
// const totalPriceOfAllItems =  items.reduce((currentTotal, item)=>{
//         console.log(currentTotal);
//         return currentTotal+item.price
// }, 0);

// // 0 means : initial value of currentTotal

// console.log(totalPriceOfAllItems);


const items1 = [2,3,4,6]
const hasMyItem = items1.includes(7);
console.log(hasMyItem);