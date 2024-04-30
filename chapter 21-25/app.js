// Question no. 1


// var firstName = `qutub`;
// var lastName = `ahmed`;

// var fullName = `${firstName} ${lastName}`;

// alert (`Hello ${fullName} Welcome! to our website`)

// Question no. 2

// var userInput = prompt(`What is tour favourite mobile phone model`);
// for(var i = 0; i < userInput.length ; i++){
//     document.write(`my favourite mobile phone model is: ${userInput} <br>`);
//     document.write("Length of string is: " + userInput.length)
//     break
// }


// Questioin no. 3

// var word = `pakistani`;
// var index = word.indexOf(`n`);
// document.write(`String: ${word}`)
// document.write(`index of letter n is: ${index}`)

// Qustioin no. 4

// var word = `hello world`;
// var index = word.lastIndexOf(`l`);
// document.write(`String: ${word} <br>`)
// document.write(`Last index of letter L is: ${index}`)

// Question no. 5

// var word =`pakistani`;
// var index = word.charAt(3);
// document.write(`String: ${word} <br>`);
// document.write(`Character at index no 3 is: ${index}`)


// Question no. 6

// var firstName = "qutub  ";
// var lastName = "ahmed";
// var string = firstName.concat(lastName)
// document.write(string)


// Question no.7


// var word = "hyderabad";
// document.write(`city = ${word} <br>`)
// var replaceWord = word.replace("hyder" , "islam")
// document.write(`after replacement = ${replaceWord}`)


// Question no. 8

// var message = "ali and sami are best friend. they play cricket and football together.";
// var replaceWord =  message.replace(/and/g, "&");
// document.write(`${message} <br>`)
// document.write(replaceWord)


// Question no. 9


// const str = "472";
// const num = Number(str);

// document.write(`Value : ${str} <br>`);
// document.write(`Type : String <br>`);
// document.write(`value : ${num} <br>`);
// document.write(`Type : Number`)


// Question no. 10

// var userInput = prompt(`write your input in small letters`);
// var $upperCase = userInput.toUpperCase();
// document.write(`${$upperCase}`)


// Question no. 11

// var userInput = prompt("Enter a string");
// var firstChar = userInput.slice(0 , 1);
// firstChar = firstChar.toUpperCase()
// var otherchar = userInput.slice(1);
// otherchar = otherchar.toLowerCase();

// var string = firstChar + otherchar;
// alert(string);


// Question no. 12


// var num = 35.36;
// document.write("Number: " + num + "<br>")
// var numToString = num.toString().replace("." , "");
// document.write("Result: " + numToString)


// Question no. 13

// var username = prompt("Enter your username:");


// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//     alert("Please enter a valid username without special symbols [@ . , !]");
// } else {
//     alert("Username accepted: " + username);
// }


// Question no. 14


// var bakeryItem = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// var userInput = prompt("What is your order sir/ma'am?")
// let found = false;

// for ( var i = 0; i < bakeryItem.length; i++){
//     if (userInput === bakeryItem[i]){
//         found = true;
//         break
//     }
// }

// if(found){
//     alert(`${userInput} is available at index ${i} in bakery`)
// }
// else{
//     alert(`we are sorry ${userInput} is not available in our bakery`)
// }


// Question no. 15

// function isValidPassword(password) {


//     if (password.length < 6) {
//         return false;
//     }



//     if (!isNaN(parseInt(password[0]))) {
//         return false;
//     }

//     let hasAlphabet = false;
//     let hasNumber = false;
//     for (let i = 0; i < password.length; i++) {
//         const charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabet = true;
//         } else if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }

//     return hasAlphabet && hasNumber;
// }

// let password = prompt("Enter a password:");

// while (!isValidPassword(password)) {
//     password = prompt("Enter a valid password (must contain alphabets and numbers, not start with a number, and be at least 6 characters long):");
// }

// Question no. 16

// var university = "university of karachi";
// var arrayUniversity = university.split(" ");
// document.write(arrayUniversity)

// Question no. 17

// var userInput = prompt("Enter your value")
// var lastChar = userInput.charAt(userInput.length-1);
// document.write(`userInput: ${userInput} <br>`);
// document.write(`the last character of user input is: ${lastChar}`);


// Question no. 18

// var str = "the quick brown fox jumps over the lazy dog";
// var word = "the";
// var count = 0;

// var words = str.split(" ");

// words.forEach(function (w){
//     if (w == word){
//         count++;
//     }
// })

// document.write(str + "<br>");
// document.write(`the word ${word} appears ${count} times in the string`)