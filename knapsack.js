//function to fill knapsack with loot

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
            kknapsack.totalWeight += item.value;
        } else {

            //if item weight exceeds capacity limit, skip it and move to next item in the list 
            continue;
        }
    }
    return knapsack;

    //return object containing info about filled knapsack
} 

//List of 20 different items that can be selected and put in the knapsack

let items = [{name:"N",weight:x, value:y}]

items