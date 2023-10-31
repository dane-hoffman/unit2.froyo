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
//const froyoList = [vanilla,strawberry,coffee,chocolate,mint,fudge];