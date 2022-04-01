//https://edabit.com/challenges/javascript

/*Fix the code in the code tab to pass this challenge (only sintax errors). Loog at the examples below
to get an idea of what the function should do */

// A -- squeared(5) => 25
// B -- squeared(9) => 81
// C -- squeared(100) => 10000
/*
function squaed(b){
    return a * a
} */
function squeared(a){
    return a * a;
}
console.log(squeared(5))

/*
You are counting points for a basketball game, given the amount of 2-pointers scored and 3.
pointers scored, find the final points for teh team adn return that value
*/
// A -- points(1, 1) => 5
// B -- points(7, 5) => 29
// C -- points(38, 8) => 100
function points(doubles, triples){
    return doubles * 2 + triples * 3 
}
console.log(points(7, 5));

//Write a function that converts hours into seconds 
// A -- howManySeconds(2) => 7200
// B -- howManySeconds(10) => 36000
// C -- howManySeconds(24) => 86400

function howManySeconds(hours){
    return hours * 3600;
}
console.log(howManySeconds(2))

//Intercambiar de lugar los valores de variables
let change = "rouge";
let change2 = "green";
let aux;
aux = change;
change = change2;
change2 = aux;
console.log(change, change2);
