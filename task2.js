//Break and continue usage
console.log("--- Break Statement Usage ---");
console.log("Finding the first 'prime' number (simulated check) between 10 and 20:");
for (let num = 10; num <= 20; num++) {
    console.log(`Checking number: ${num}`);
    // Simulate a prime check: Let's say 13 is our "first prime" for this example
    if (num === 13) {
        console.log(`Found a 'prime' number: ${num}. Exiting loop.`);
        break; 
    }
}
console.log("\nSearching for 'banana' in a fruit list:");
const fruits = ["apple", "orange", "banana", "grape", "kiwi"];
const searchTerm = "banana";
let foundFruit = false;

for (let i = 0; i < fruits.length; i++) {
    console.log(`Currently checking: ${fruits[i]}`);
    if (fruits[i] === searchTerm) {
        console.log(`Found '${searchTerm}' at index ${i}.`);
        foundFruit = true;
        break; 
    }
}

if (!foundFruit) {
    console.log(`'${searchTerm}' not found in the list.`);
}
console.log("\n--- Break in a while loop (stop after 5 iterations) ---");
let counter = 1;
while (true) {
    console.log(`Iteration: ${counter}`);
    if (counter === 5) {
        console.log("Counter reached 5. Breaking loop.");
        break; 
    }
    counter++;
}
console.log("Loop finished due to break.");

console.log("\n--- Continue Statement Usage ---");
console.log("Printing only odd numbers between 1 and 10:");
for (let num = 1; num <= 10; num++) {
    if (num % 2 === 0) { 
        console.log(`Skipping even number: ${num}`);
        continue; 
    }
    console.log(`Odd number: ${num}`);
}
console.log("\nProcessing non-null/non-undefined values in a mixed array:");
const data = [10, null, 20, undefined, 30, 40, null, 50];

for (let i = 0; i < data.length; i++) {
    if (data[i] === null || data[i] === undefined) {
        console.log(`Skipping invalid value at index ${i}: ${data[i]}`);
        continue; 
    }
    console.log(`Processing valid value: ${data[i]} (doubled: ${data[i] * 2})`);
}

console.log("\n--- Continue in a while loop (print even numbers up to 10) ---");
let currentNum = 0;
while (currentNum < 10) {
    currentNum++;
    if (currentNum % 2 !== 0) { 
        console.log(`Skipping odd number: ${currentNum}`);
        continue; 
    }
    console.log(`Even number found: ${currentNum}`);
}

//condition statement practice
//console.log("--- Simple if statement (JavaScript) ---");
let age = 20;
if (age >= 18) {
    console.log("You are old enough to vote.");
}
let ageBoundary = 18;
if (ageBoundary >= 18) {
    console.log("At 18, you are eligible to vote.");
}
let ageYoung = 16;
if (ageYoung >= 18) {
    console.log("You are old enough to vote. (This won't print)");
}
console.log("\n");
console.log("--- if-else block (JavaScript) ---");
let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day!");
} else {
    console.log("It's not too hot today.");
}
let temperatureBoundary = 30;
if (temperatureBoundary > 30) {
    console.log("It's a hot day! (This won't print)");
} else {
    console.log("It's 30 degrees or less.");
}
console.log("\n");
console.log("--- Multiple conditions with else if (JavaScript) ---");
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D or F");
}
let scoreBBoundary = 80;
if (scoreBBoundary >= 90) {
    console.log("Grade: A");
} else if (scoreBBoundary >= 80) {
    console.log("Grade: B (Exact boundary)");
} else if (scoreBBoundary >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D or F");
}
let scoreFail = 55;
if (scoreFail >= 90) {
    console.log("Grade: A");
} else if (scoreFail >= 80) {
    console.log("Grade: B");
} else if (scoreFail >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D or F (Failing score)");
}
console.log("\n");
console.log("--- Switch Statement for Menu Selection (JavaScript) ---");
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}

console.log(`Day 3 is: ${getDayName(3)}`);
console.log(`Day 7 is: ${getDayName(7)}`);
console.log(`Day 0 is: ${getDayName(0)}`); 
console.log(`Day 8 is: ${getDayName(8)}`); 
function getFruitColor(fruit) {
    let color;
    switch (fruit.toLowerCase()) { 
        case "apple":
            color = "Red or Green";
            break;
        case "banana":
            color = "Yellow";
            break;
        case "blueberry":
            color = "Blue";
            break;
        default:
            color = "Color not known for this fruit.";
    }
    return color;
}
console.log(`\nColor of Apple: ${getFruitColor("Apple")}`);
console.log(`Color of banana: ${getFruitColor("banana")}`);
console.log(`Color of grape: ${getFruitColor("grape")}`); 

//loop control practice
console.log("--- while loop (Print numbers 1 to 10) ---");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++; // Increment the counter
}
console.log("\n--- while loop (Condition initially false) ---");
let j = 11;
while (j <= 10) {
    console.log(j);
    j++;
}
console.log("Loop did not run as condition was initially false.");
/*
console.log("\n--- while loop (Infinite loop - DO NOT RUN INDEFINITELY!) ---");
let k = 1;
while (k > 0) {
    console.log("This will print forever unless stopped.");
    if (k === 3) { 
        break;
    }
    k++;
}
*/
console.log("\n");
console.log("--- do-while loop (Prompt user for correct input) ---");
/*
let userInput;
let correctPassword = "password123";

do {
    userInput = prompt("Please enter the password:"); 
    if (userInput !== correctPassword) {
        alert("Incorrect password. Please try again."); 
    }
} while (userInput !== correctPassword);

alert("Correct password entered! Access granted.");
console.log("Correct password entered in browser simulation.");
*/
console.log("--- Simulating do-while loop for Node.js/Console ---");
let attempt = 0;
let maxAttempts = 3;
const correctCode = "secret";
let enteredCode = "";

do {
    attempt++;
    console.log(`Attempt ${attempt}: Enter code (simulated incorrect input)`);
    if (attempt === 1) {
        enteredCode = "wrong";
    } else if (attempt === 2) {
        enteredCode = "mistake";
    } else {
        enteredCode = correctCode; 
    }

    if (enteredCode !== correctCode) {
        console.log("Incorrect code. Try again.");
    }

} while (enteredCode !== correctCode && attempt < maxAttempts);

if (enteredCode === correctCode) {
    console.log("Correct code entered! Access granted.");
} else {
    console.log("Max attempts reached. Access denied.");
}
console.log("\n"); 

console.log("--- for loop (Sum of first N natural numbers) ---");
let N = 5;
let sum = 0;
for (let i_for = 1; i_for <= N; i_for++) { 
    sum += i_for; 
    console.log(`Adding ${i_for}, current sum: ${sum}`);
}
console.log(`The sum of the first ${N} natural numbers is: ${sum}`);
console.log("\n--- for loop (N is 0) ---");
let N_zero = 0;
let sum_zero = 0;
for (let i_zero = 1; i_zero <= N_zero; i_zero++) {
    sum_zero += i_zero;
}
console.log(`The sum of the first ${N_zero} natural numbers is: ${sum_zero}`);
console.log("\n--- for loop (N is negative) ---");
let N_negative = -3;
let sum_negative = 0;
for (let i_negative = 1; i_negative <= N_negative; i_negative++) {
    sum_negative += i_negative;
}
console.log(`The sum of the first ${N_negative} natural numbers is: ${sum_negative}`); // Sum will be 0
console.log("\n"); 
console.log("--- Nested for loops (Multiplication Table up to 5x5) ---");

const tableSize = 5;

for (let outer_i = 1; outer_i <= tableSize; outer_i++) {
    let row = "";
    for (let inner_j = 1; inner_j <= tableSize; inner_j++) {
        row += `${outer_i * inner_j}\t`; 
    }
    console.log(row); 
}

console.log("\n--- Nested for loops (Simple Pattern) ---");
const patternSize = 4;
for (let pattern_i = 1; pattern_i <= patternSize; pattern_i++) {
    let line = "";
    for (let pattern_j = 1; pattern_j <= pattern_i; pattern_j++) { 
        line += "* ";
    }
    console.log(line);
}
