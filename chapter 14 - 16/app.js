var array = [];
var array1 = [{}];
var stringArray = ["pakistan" , "india" , "bangladesh" , "afghanistan"];
var numberArray = [1 , 2 , 3 , 4 , 5 , 6];
var booleanArray = [true , false];
var mixedArray = [{} , "qutub" , 181395 , true];
var education_available_in_pakistan = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phill." , "PhD"];


document.write("<h1>Qualification</h1>" + "<br>");

document.write("1. " + education_available_in_pakistan[0] + "<br>");
document.write("2. " + education_available_in_pakistan[1] + "<br>");
document.write("3. " + education_available_in_pakistan[2] + "<br>");
document.write("4. " + education_available_in_pakistan[3] + "<br>");
document.write("5. " + education_available_in_pakistan[4] + "<br>");
document.write("6. " + education_available_in_pakistan[5] + "<br>");
document.write("7. " + education_available_in_pakistan[6] + "<br>");
document.write("8. " + education_available_in_pakistan[7] + "<br>");

var students = ["micheal" , "john" , "tony"];
var studentsScore = [320 , 230 , 480];
var totalMarks = 500;

var percentage1 = (studentsScore[0] * 100) / totalMarks;
var percentage2 = (studentsScore[1] * 100) / totalMarks;
var percentage3 = (studentsScore[2] * 100) / totalMarks;


document.write(`Score of ${students[0]} is ${studentsScore[0]}. percentage: ${percentage1}% <br>`)
document.write(`Score of ${students[1]} is ${studentsScore[1]}. percentage: ${percentage2}% <br>`)
document.write(`Score of ${students[2]} is ${studentsScore[2]}. percentage: ${percentage3}% <br>`)

var colors = ["red" , "green" , "blue"];
document.write("<b>Origional Array</b>: " + colors + "<br><br>")

var ques1 = prompt("what color you want to add to the beginning?");
colors.splice( 0 , 0 ,ques1)
document.write("<b>After adding one more element from beginning:</b>" + colors + "<br><br>");

var ques2 = prompt("What color do you want to add to the end");
colors.push(ques2);
document.write("<b>after adding one more element in last:</b> " + colors + "<br><br>");

colors.unshift("purple" , "black");
document.write("<b>after adding two more colors in the beginning:</b> " + colors + "<br><br>")

colors.shift();
document.write("<b>After the deleting the first element in Array:</b>" + colors + "<br><br>")

colors.pop();
document.write("<b>After the deleting the last element in the Array: </b>" + colors + "<br><br>")

var ques3_index = prompt("Tell us on which index do you want to add a color in Array:");
var color_name = prompt("Enter the color name")
colors.splice(ques3_index , 0 , color_name );
document.write("<b>After entering the desired position: </b>" + colors + "<br><br>")

var ques4 = prompt("on which index do you wnat to delete the color");
var ques5  = prompt("How many colors do you want to delete")

colors.splice(ques4 , ques5)
document.write(`<b>After deleting some elements on user desire:</b> ${colors}`);

var scores_of_students = [100 , 400 , 300 , 200 , 500 , 800 , 700 , 600 , 900];
document.write(`Scores of students: ${scores_of_students} <br>`)
var ordered_scores_of_students = scores_of_students.sort();
document.write(`Ordered Scores of students: ${ordered_scores_of_students} <br>`);

var cities = ["karachi" , "lahore" , "islamabad" , "quetta" , "peshawar"];
document.write(`<b>Selected Cities: </b> ${cities} <br>`)
var selected_cities = cities.splice(2 , 2);
document.write(`<b>Selected Cities:</b> ${selected_cities}`)

var array = ["this" , "is" , "my" , "cat"];
document.write(`Array: ${array} <br>`);
var string = array.join(' ');
document.write(`String: ${string}`)



var array = [];
array.push("pakistan")
array.push("india")
array.push("iran")
array.push("iraq")
document.write(array + "<br>")


var array2 = [];
array2.unshift("first")
array2.unshift("second")
array2.unshift("third")

document.write(array2 +"<br>")

document.write(array2[0] + "<br>")
document.write(array2[1] + "<br>")
document.write(array2[2] + "<br>")



let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`<select><option>${manufacturers[0]}</option><option>${manufacturers[1]}</option><option>${manufacturers[2]}</option><option>${manufacturers[3]}</option><option>${manufacturers[4]}</option><option>${manufacturers[5]}</option></select> <br><br>`)


