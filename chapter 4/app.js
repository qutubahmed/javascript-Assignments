var three_Variable_In_One_statemant = ["userName" , "userId" , "userPassword"]


// legal values

var Geeks;
var Geeks_for_Geeks;
var $Geeks;
var _Geeks;
var Geeks123; 

// illegal values

var a = "Geeks-for-Geeks";  // Hyphens not allowed
var b = "123Geeks";  // Can not start with numbers
var c = "Geeks for Geeks";  // Spaces not allowed
var d = "!Geeks_for_Geeks"; // exclamation mark not allowed
var e = "%geek for Geeks"; // percentage marks not allowed



document.write("<h1>Rules For naming JS Variables</h1>" )

document.write("a variable can only contain numbers, $ and _" + " " +"For Example:$my_1stvariable" + "<br>");
document.write("varaible must begin with letter, $ or _. for Example: $name , _name , or name." + "<br>");
document.write("variables name be case sensitive" + "<br>");
document.write("variables name should not be JS keywords")
