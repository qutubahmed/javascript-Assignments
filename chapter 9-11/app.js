// var city = prompt(`wirte the name of city?`)
// if (city === `karachi`){
//     alert(`Welcome to the city of lights`)
// }
// else {
//     alert (`get the hell out from here`)
// }

// var gender = prompt(`What is yor Gender`);
// if(gender === `male`){
//     alert(`good morning sir`)
// }
// else if(gender === `female`){
//     alert (`good morning Ma,am`)
// }

// var color_of_road = prompt(`What is the color of signal right now`);
// if(color_of_road === `red`){
//     document.write(`MUST STOP <br>`)
// }
// else if(color_of_road === `yellow`){
//     document.write(`Ready to move <br>`)
// }
// else if(color_of_road === `green`){
//     document.write(`Move Now <br>`)
// }

// var remaining_fuel = +prompt(`how much petrol is in your car?`);
// if (remaining_fuel <= 0.25){
//     alert(`Please refill the fuel in your car`)
// }


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }





// document.write("<h1>Mark Sheet<h1/>" + "<br>");

// var subject1 = +prompt("Enter the obtained marks of subject 1");
// var subject2 = +prompt("Enter the obtained marks of subject 2");
// var subject3 = +prompt("Enter the obtained marks of subject 3");

// var maximumMarks = 300;

// var marksObtained = subject1 + subject2 + subject3;

// var totalMarks = (subject1 + subject2 + subject3) / 300;

// var percentage = totalMarks * 100;

// if(percentage >=80 && percentage <= 100){
//     document.write(`Total Marks : ${maximumMarks} <br>`);
//     document.write(`Marks Obtained : ${marksObtained} <br>`);
//     document.write(`Percentage : ${percentage} % <br>`);
//     document.write(`Grade : A+ <br>`);
//     document.write(`Remarks : Excellent`)
// }
// else if(percentage >= 70 && percentage < 80){
//     document.write(`Total Marks : ${maximumMarks} <br>`);
//     document.write(`Marks Obtained : ${marksObtained} <br>`);
//     document.write(`Percentage : ${percentage} % <br>`);
//     document.write(`Grade : A <br>`);
//     document.write(`Remarks : Good`)
// }
// else if(percentage >= 60 && percentage < 70){
//     document.write(`Total Marks : ${maximumMarks} <br>`);
//     document.write(`Marks Obtained : ${marksObtained} <br>`);
//     document.write(`Percentage : ${percentage} % <br>`);
//     document.write(`Grade : B <br>`);
//     document.write(`Remarks : You Need To Improve`)
// }
// else{
//     document.write(`Total Marks : ${maximumMarks}`);
//     document.write(`Marks Obtained : ${marksObtained}`);
//     document.write(`Percentage : ${percentage} %`);
//     document.write(`Grade : Fail`);
//     document.write(`Remarks : Sorry`)
// }



// document.write(`<h1>Guess Game</h1> <br>`);

// var guessValue = 5;
// var inputValue = +prompt("Guess the value from 1 to 10","Enter the value to guess the number");
// if (inputValue === 5){
//     alert(`Bingo! your Answer is Correct`)
// }
// else if(inputValue === 6){
//     alert("you are too close")
// }
// else if(inputValue === 7){
//     alert("you are too high")
// }
// else if(inputValue === 8){
//     alert("you are too close")
// }
// else if(inputValue === 9){
//     alert("you are too HIGH")
// }
// else if(inputValue === 10){
//     alert("you are too High")
// }
// else if(inputValue === 4){
//     alert("you are too close")
// }
// else if(inputValue === 3){
//     alert("Number is small")
// }
// else if(inputValue === 2){
//     alert("Number is small")
// }
// else if(inputValue === 1){
//     alert("Number is small")
// }
// else{
//     alert("You enter wrong value")
// }



// You can use the following JavaScript program to check if a given number is divisible by 3 and show a message to the user accordingly:

// javascript
// Function to check if a number is divisible by 3
// function isDivisibleBy3(number) {
//     return number % 3 === 0;
// }

// Prompt the user to enter a number
// let userInput = prompt("Enter a number:");

// Convert user input to a number
// let number = parseInt(userInput);

// Check if the number is divisible by 3 and show a message
// if (isDivisibleBy3(number)) {
//     alert(`${number} is divisible by 3.`);
// } else {
//     alert(`${number} is not divisible by 3.`);
// }










// Prompt the user to enter a number
// let userInput = prompt("Enter a number:");

// Convert user input to a number
// let number = parseInt(userInput);

// Check if the number is divisible by 3 and show a message
// if (userInput % 3 === 0) {
//     alert(`${userInput} is divisible by 3.`);
// } else {
//     alert(`${userInput} is not divisible by 3.`);
// }








// Prompt the user to enter a number
// let userInput = prompt("Enter a number:");

// Convert user input to a number
// let number = parseInt(userInput);

// Check if the number is even or odd and show a message
// if (userInput % 2 === 0) {
//     alert(`${userInput} is an even number.`);
// } else {
//     alert(`${userInput} is an odd number.`);
// }



// var inputTemp = +prompt(`Enter the Temperature of your Area`);
// if(inputTemp >= 40){
//     alert("It is too hot outside.")
// }
// else if(inputTemp >= 30){
//     alert("The Weather Today is Normal")
// }
// else if(inputTemp >= 20){
//     alert(`Todays weather is cool`)
// }
// else if(inputTemp >= 10){
//     alert(`OMG! Today's weather is so COOL`)
// }

// var value1 = +prompt("enter your first value");
// var operator = prompt("enter your operator");
// var value2 = +prompt("Enter your Second value");

// if (operator === "+") {
//     alert(value1 + value2)
// }
// else if (operator === "-") {
//     alert(value1 - value2)
// }
// else if (operator === "*") {
//     alert(value1 * value2)
// }
// else if (operator === "/") {
//     alert(value1 / value2)
// }
// else if (operator === "%") {
//     alert(value1 % value2)
// }
// else {
//     alert(`you enter wrong value`)
// }

