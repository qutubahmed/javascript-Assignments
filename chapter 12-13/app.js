// var number = +923072208835;
// if (number === +923072208835)
// alert("checked")
// else{
//     alert("not correct")
// }

// let userInput1 = +prompt(`Enter the First Integer`);
// let userInput2 = +prompt(`Enter the Second integer`);

// if (userInput1 === userInput2){
//     alert("values are equal")
// }
// else{
//     let largeNumber = userInput1 > userInput2 ? userInput1 : userInput2
//     alert(`the larger integer is : ${largeNumber}`)
// }

// var userInput= +prompt("Enter the value you want to know?");

// if(userInput > 0){
//     alert(`The number is positive`)
// }
// else if (userInput < 0){
//     alert(`The number is negative`)
// }
// else {
//     alert(`This is Zero.`)
// }

// var vowels1 = "a";
// var vowels2 = "e";
// var vowels3 = "i";
// var vowels4 = "o";
// var vowels5 = "u";

// var userInput = prompt("Enter a string character");
// if (userInput === vowels1) {
//     alert(true)
// }
// else if (userInput === vowels2) {
//     alert(true)
// }
// else if (userInput === vowels3) {
//     alert(true)
// }
// else if (userInput === vowels4) {
//     alert(true)
// }
// else if (userInput === vowels5) {
//     alert(true)
// }
// else {
//     alert(false)
// }


// var password = "qutubahmed";
// var inputPassword = prompt("Enter your Password");
// if (!inputPassword){
//     alert("Please Enter your password.")
// }
// else if (inputPassword === password){
//     alert("your password is correct.")
// }
// else{
//     alert ("incorrect Password")
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }


// var time ;
// var inputTime = +prompt("Type a number to take a time");
// if(time >= 0 && time < 1200){
//     alert("good morning")
// } 
// else if(time >= 1200 && time < 1700){
//     alert("Good afternoon")
// }
// else if(time >= 1700 && time < 2100){
//     alert ("Good evening")
// }
// else if (time >=2100 && time <= 2350)
//     alert("Good Night")



// let timeInput = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");


// let time = parseInt(timeInput);

// if (time >= 0 && time <= 2359) {
//     let hours = Math.floor(time / 100);
//     let minutes = time % 100;

//     if (hours >= 0 && hours < 12) {
//         if (hours === 0) {
//             hours = 12;
//         }
//         alert(`${hours}:${minutes} AM`);
//     }

//     else {
//         if (hours > 12) {
//             hours -= 12;
//         }
//         alert(`${hours}:${minutes} PM`);
//     }
// } else {
//     alert("Invalid input. Please enter a time between 0 and 2359.");
// }


