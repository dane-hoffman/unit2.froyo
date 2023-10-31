//A visitor receives a prompt upon opening the website
let input = prompt("Please provide a list of flavors. Separate each on with a comma '',''")
//to enter a list of comma-separated froyo flavors
//The user types, "vanilla,vanilla,vanilla,strawberry,coffee,coffee"; should console.log vanilla = 3, strawberry = 1, coffee = 2;
//
//console.log(input);

//The user's input striing is split into an array of strings.
let onlineOrder = [];
onlineOrder = input.split(",");

//Define the list of available flavors
const froyoList = ["vanilla","strawberry","coffee","chocolate","mint","fudge"];

//create an object to keep count of how many orders of each flavor.
let onlineOrderFlavorCount = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
    chocolate: 0,
    mint: 0,
    fudge: 0,
};
//Use a loop to iterate though the array of flavors
for (let i=0; i<onlineOrder.length; i++) {
    //check if the online order input is included in the list of flavors in froyoList
        const flavor = onlineOrder[i].trim();
    //If the input does include a string within the list of flavors, add it to the onlineOrderFlavorCount;
        if (froyoList.includes(flavor)) {
            onlineOrderFlavorCount[flavor]++;
        }
}

//Create a function to display in the console, "You have ordered [count] of [flavor]"
const displayOnlineOrderTotal = (count,flavor) => {
    return `You have ordered ${count} of ${flavor}`;
};
//iterate through the object and add the updated values from the array, to the display function
for (const flavor in onlineOrderFlavorCount) {
//use the flavor and count of each item in the object,and display the total amount of that flavor
    const count = onlineOrderFlavorCount[flavor];
//only if the flavor is ordered
    if (count > 0){
        console.log(displayOnlineOrderTotal(count, flavor));
        //otherwise, let the user know that flavor is not in the  list.
    } else{
        console.log(`Did you not want to try ${flavor}? It's delicious!`);
    }
}
        

// console.log(onlineOrderFlavorCount);