//A visitor receives a prompt upon opening the website
let input = prompt("Please provide a list of flavors. Separate each on with a comma '',''")
//to enter a list of comma-separated froyo flavors
//The user types, "vanilla,vanilla,vanilla,strawberry,coffee,coffee"; should console.log vanilla = 3, strawberry = 1, coffee = 2;
//
console.log(input);

//The user's input striing is split into an array of strings.
let onlineOrder = [];
onlineOrder = input.split(",");
console.log(onlineOrder);

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





console.log(onlineOrderFlavorCount);