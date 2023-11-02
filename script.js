// Tonight you will be demonstrating your ability to work with expressions, statements, and variables. Create an HTML page and link an external JavaScript file to it. Inside the JavaScript file:



// Define a variable “myGreeting” and place a string containing a generic greeting inside it.

let myGreeting = "Hello There!";


// Output the contents of “myGreeting” using console.log(...).

console.log(myGreeting);


// Define a constant variable “pi” and place a number containing the value for Pi inside of it.

const pi = 8; 


// Attempt to re-assign “pi” to something else - what happens? Why?

let pi =7;
console.log(pi);

// when a value is assigned to pi it is unable to be reassigned because const stands for constant and cant be changed, 
// trying to change the value of pi gave an error because pi was already given a value of 8.


// Define a new variable “myNumber” and place a number of your choice inside it.

let myNumber = 10;


// Call the “min” function inside of the “Math” object on both “myNumber” and “pi” - what is the result? Why?

let answer = Math.min (myNumber, pi);

// the result was 8 because the number that was chosen was the smallest number out of "myNumber" and "pi" (8 is smaller than 10)