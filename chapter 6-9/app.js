document.write("<h3>Result:</h3>");
var a = 10;
document.write("The value of a is: " + a + "<br>");

document.write("-------------------------------" + "<br>" + "<br>");

++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>" + "<br>");

a++;
document.write("The value of a++ is: 11" + "<br>");
document.write("The value of a++ is: " + a + "<br>" + "<br>");

--a;
document.write("The value of --a is: " + a + "<br>");
document.write("The value of --a is: " + a + "<br>" + "<br>");


a--;
document.write("The value of a-- is: 11" + "<br>");
document.write("The value of a-- is: " + a + "<br>");

document.write("<br>" + "<br>" + "<br>" + "<br>")


document.write("<h4>THe value after Execution</h4>" + "<br>")

let x = 2;
let y = 1;
var result = --x - --y + ++y + y--;

document.write("--x " + "= 1" + "<br>");
document.write("--x - --y" + "= 1 - 0" + "<br>");
document.write("--x - --y + ++y " + "= 1 - 0 + 1" + "<br>");
document.write("--x - --y + ++y + y-- " + "= 1 - 0 + 1 + 1" + "<br>");


// var input = prompt("what is your name?");
// alert("welcome to our website " + input)

// multiplication table 

// let input = +prompt("write the value to print multiplication table");
// document.write(input * 1 + "=" + input + "<br>")
// document.write(input * 2 + "=" + input + "<br>")
// document.write(input + 3 + "=" + input + "<br>")
// document.write(input + 4 + "=" + input + "<br>")
// document.write(input + 5 + "=" + input + "<br>")

// document.write("<h3>Multiplication Table</h3>");
// let input = +prompt("write the table" , 5);
// document.write(input + " x " + 1  + " = " + input * 1 + "<br>")
// document.write(input + " x " + 2  + " = " + input * 2 + "<br>")
// document.write(input + " x " + 3  + " = " + input * 3 + "<br>")
// document.write(input + " x " + 4  + " = " + input * 4 + "<br>")
// document.write(input + " x " + 5  + " = " + input * 5 + "<br>")
// document.write(input + " x " + 6  + " = " + input * 6 + "<br>")
// document.write(input + " x " + 7  + " = " + input * 7 + "<br>")
// document.write(input + " x " + 8  + " = " + input * 8 + "<br>")
// document.write(input + " x " + 9  + " = " + input * 9 + "<br>")
// document.write(input + " x " + 10 + " = " + input * 10 + "<br>")

document.write("<h3>Subjects < >   Total Marks  < >   Obtained Marks  < >   Percentage</h3>")

var subject1 = prompt("what is your subject 1");
var subject2 = prompt("what is your subject 2");
var subject3 = prompt("what is your subject 3");

var urdu = subject1;
var english = subject2;
var maths = subject3;

// document.write(subject1 + "<br>");
// document.write(subject2 + "<br>");
// document.write(subject3 + "<br>");


var maxMarks = 100;

var obt_Marks1 = +prompt("write down your obtained marks of urdu");
var obt_Marks2 = +prompt("write down your obtained marks of english");
var obt_Marks3 = +prompt("write down your obtained marks of maths");

var percentage_Subject_1 = obt_Marks1 * 100 / maxMarks;
var percentage_Subject_2 = obt_Marks2 * 100 / maxMarks;
var percentage_Subject_3 = obt_Marks3 * 100 / maxMarks;

document.write(`${subject1} = ${percentage_Subject_1} <br>`);
document.write(`${subject2} = ${percentage_Subject_2} <br>`);
document.write(`${subject3} = ${percentage_Subject_3} <br>`);

var sum = (obt_Marks1 + obt_Marks2 + obt_Marks3) * 100;
var percentage = sum / 300;
document.write(`Total Percentage = ${percentage}`)


// Function to get user input
// function getUserInput(promptMsg) {
//     return parseFloat(prompt(promptMsg));
// }

// Take three subjects' names from the user
// let subject1 = prompt("Enter the name of first subject:");
// let subject2 = prompt("Enter the name of second subject:");
// let subject3 = prompt("Enter the name of third subject:");

// Total marks for each subject
// let totalMarks = 100;

// Take obtained marks for first subject from the user
// let obtainedMarksSubject1 = getUserInput(`Enter obtained marks for ${subject1}:`);

// Take obtained marks for remaining 2 subjects from the user
// let obtainedMarksSubject2 = getUserInput(`Enter obtained marks for ${subject2}:`);
// let obtainedMarksSubject3 = getUserInput(`Enter obtained marks for ${subject3}:`);

// Calculate total marks
// let totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write(`Total marks obtained: ${totalObtainedMarks}/${totalMarks * 3} <br>`);
// document.write(`Percentage: ${percentage.toFixed(2)}%`);