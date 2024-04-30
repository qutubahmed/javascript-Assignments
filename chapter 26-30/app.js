// Question no.1

// let userInput = prompt("Enter a positive integer:");
// let number = parseInt(userInput);

// if (number > 0 && !isNaN(number)) {
//     let roundOff = Math.round(number);
//     let floorValue = Math.floor(number);
//     let ceilValue = Math.ceil(number);

//     document.write("<h2>Number: " + number + "</h2>");
//     document.write("<h2>Round Off Value: " + roundOff + "</h2>");
//     document.write("<h2>Floor Value: " + floorValue + "</h2>");
//     document.write("<h2>Ceil Value: " + ceilValue + "</h2>");
// } else {
//     document.write("<h2>Please enter a valid positive integer.</h2>");
// }

//Question no.2

// let userInput1 = prompt("Enter a negative floating-point number:");
// let number1 = parseFloat(userInput1);

// if (number1 < 0 && !isNaN(number1)) {
//     let roundOff1 = Math.round(number1);
//     let floorValue1 = Math.floor(number1);
//     let ceilValue1 = Math.ceil(number1);

//     document.write("<h2>Number: " + number1 + "</h2>");
//     document.write("<h2>Round Off Value: " + roundOff1 + "</h2>");
//     document.write("<h2>Floor Value: " + floorValue1 + "</h2>");
//     document.write("<h2>Ceil Value: " + ceilValue1 + "</h2>");
// } else {
//     document.write("<h2>Please enter a valid negative floating-point number.</h2>");
// }

// Question no.3

// var input = prompt("enter a value");
// var num = parseFloat(input);

// if(!isNaN(num)){
//     let absolutValue = Math.abs(num);
//     document.write(`absolute value of ${num} is ${absolutValue}`);
// }
// else{
//     document.write(`please write avalid value`);
// }

// Question no. 4

// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write(`the random value of dice is: ${diceValue}`)

// Question no. 5

// var coinValue = Math.floor(Math.random() * 2) + 1;
// document.write(`the random value of dice is: ${coinValue}  <br>`)

// if (coinValue == 2){
//     document.write(`Random coin value = Heads`)
// }
// else{
//     document.write(`Random coin value = Tails`)
// }

// Question no. 6

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`The random number between 1 and 100 is: ${randomNumber}`)

// Question no. 7

// var userInput = prompt("Enter your weight");
// var weight;

// if (userInput.includes("kgs") || userInput.includes("kilograms")) {
//     userInput = userInput.replace("kgs", "").replace("kilograms", "")
//     weight = parseFloat(userInput)
// }
// else {
//     weight = parseFloat(userInput)
// }


// if (!isNaN(weight)) {
//     document.write("Your weight is: " + weight + " kgs.");
// }
// else {
//     document.write("Please enter a valid weight.");
// }

// Question no. 8

// var secretNumber = 4 ;
// var userSecret = +prompt("Enter your value")

// if(userSecret > 4){
//     alert("your value is big")
// }
// else if(userSecret < 4){
//     alert("your value is small")
// }
// else {
//     alert("congratulation you win")
// }

// Question no. 9

