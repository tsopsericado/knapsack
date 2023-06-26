const object = [{name:"1", weight:2, value:6},
    {name:"2", weight:5, value:3},
    {name:"3", weight:4, value:1},
    {name:"4", weight:6, value:12},
    {name:"5", weight:1, value:4},
    {name:"6", weight:3, value:1},
    {name:"7", weight:9, value:2},
    {name:"8", weight:11, value:6},
    {name:"9", weight:7, value:1},
    {name:"10", weight:0, value:13},
    {name:"11", weight:4, value:11},
    {name:"12", weight:7, value:13},
    {name:"13", weight:5, value:3},
    {name:"14", weight:1, value:4},
    {name:"15", weight:9, value:5},
    {name:"16", weight:11, value:2},
    {name:"17", weight:16, value:2},
    {name:"18", weight:3, value:1},
    {name:"19", weight:1, value:13},
    {name:"20", weight:0, value:2}
]

//function to fill knapsack with loot
let maxWeight= 50
items = 20

function fillKnapsack(maxWeight, items) {
 //create object to store knapsack info
    let knapsack = {
        capacity: maxWeight, 
        items: [],
        totalWeight:0,
        totalValue:0,
    };
    
    // Loop through items and add to knapsack if weight is within capacity limit
    for (let i = 0; i < items.lenght; i++)
    {
        let item = items[i];

        if (knapsack.totalWeight + item.weight <= maxWeight) {
            knapsack.items.push(item);
            knapsack.totalWeight += item.value;
        } else {

            //if item weight exceeds capacity limit, skip it and move to next item in the list 
            continue;
        }
    }
    return knapsack;

    //return object containing info about filled knapsack
 

//List of 20 different items that can be selected and put in the knapsack

}







// //List of 20 different items that can be selected and put in the knapsack

// function knapsack(capacity, array) {
// const obj = [{name:"1", weight:2, value:6},
//     {name:"2", weight:5, value:3},
//     {name:"3", weight:4, value:1},
//     {name:"4", weight:6, value:12},
//     {name:"5", weight:1, value:4},
//     {name:"6", weight:3, value:1},
//     {name:"7", weight:9, value:2},
//     {name:"8", weight:11, value:6},
//     {name:"9", weight:7, value:1},
//     {name:"10", weight:0, value:13},
//     {name:"11", weight:4, value:11},
//     {name:"12", weight:7, value:13},
//     {name:"13", weight:5, value:3},
//     {name:"14", weight:1, value:4},
//     {name:"15", weight:9, value:5},
//     {name:"16", weight:11, value:2},
//     {name:"17", weight:16, value:2},
//     {name:"18", weight:3, value:1},
//     {name:"19", weight:1, value:13},
//     {name:"20", weight:0, value:2}]

// let totalWeight = 0 
// let totalValue = 0
// let n = obj.length
// arr = []

// for (let i = 0; i <=n; i++) {
//     if (totalWeight <= capacity) {
//         totalWeight += obj[i].weight
//         totalValue += obj[i].value
//         arr.push(obj[i])   
//     }
//     number_of_items = arr.length
// }
//    return{number_of_items, totalValue, totalWeight, arr}
// }
// console.log(knapsack(50));




// CALLBACK FUNCTION


//ITS A FUNCTION 

