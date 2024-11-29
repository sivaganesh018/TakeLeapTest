// 1st question 1.create mathematical operation using let, var and const methods using javascript and print the values in console accordingly.

// Using 'let' 
let number1 = 10;
let number2 = 5;
let sum = number1 + number2;
let difference = number1 - number2;

console.log("Using 'let':");
console.log(`Sum: ${sum}`);           // Output: 15
console.log(`Difference: ${difference}`); // Output: 5

// Update values
number1 = 20;
number2 = 10;
sum = number1 + number2;
difference = number1 - number2;

console.log("Updated using 'let':");
console.log(`Sum: ${sum}`);           // Output: 30
console.log(`Difference: ${difference}`); // Output: 10

// Using 'var' 
var product = number1 * number2;
console.log("Using 'var':");
console.log(`Product: ${product}`);   // Output: 200

// Updating 'var' variable
number1 = 15; // Re-using 'let' variable
product = number1 * number2;
console.log("Updated using 'var':");
console.log(`Product: ${product}`);   // Output: 150

// Using 'const' 
const pi = 3.14159;
const radius = 7;
const areaOfCircle = pi * radius * radius;

console.log("Using 'const':");
console.log(`Value of Pi: ${pi}`);          // Output: 3.14159
console.log(`Radius: ${radius}`);           // Output: 7
console.log(`Area of Circle: ${areaOfCircle}`); // Output: 153.93804





// 2nd question write a function to implement map, reduce, filter, and flatmap using javascript.
const numbers = [1, 2, 3, 4];
const result = numbers.map((number) => number * number);

console.log(result); // [1, 4, 9, 16]

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); // 10

const numbers2 = [1, -2, 3, -4];
const positiveNumbers = numbers2.filter((number) => number > 0);

console.log(positiveNumbers); // [1, 3]

const arr = [1, 2, 3];
const output = arr.flatMap(num => [num, num * 2]);
console.log(output);
// Output: [1, 2, 2, 4, 3, 6]


  
  // 3rd question Give an example of creating a callback function in javascript.

function displayGreetings(displayName){
    console.log("Hello")
    displayName()
    console.log("Good Morning")
}


function displayName(){
    console.log("Siva Ganesh")
}

  displayGreetings(displayName)

  // 4th question .write a program to reverse a string using arrays in javascript.

  // Function to reverse a string
function reverseString(inputString) {
    let stringArray = inputString.split('');
    
    let reversedArray = stringArray.reverse();
    
    let reversedString = reversedArray.join('');
    
    return reversedString;
  }
  
  const originalString = "Hello, World!";
  const reversed = reverseString(originalString);
  
  console.log(`Original String: ${originalString}`); // Output: Hello, World!
  console.log(`Reversed String: ${reversed}`);       // Output: !dlroW ,olleH