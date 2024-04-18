// var multiarray = [];
// multiarray.push([]);
// console.log(multiarray)

// var multidimensioalarray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(multidimensioalarray[0] + "<br>")
// document.write(multidimensioalarray[1] + "<br>")
// document.write(multidimensioalarray[2] + "<br>")


// document.write(`1 <br>`)
// document.write(`2 <br>`)
// document.write(`3 <br>`)
// document.write(`4 <br>`)
// document.write(`5 <br>`)
// document.write(`6 <br>`)
// document.write(`7 <br>`)
// document.write(`8 <br>`)
// document.write(`9 <br>`)
// document.write(`10 <br>`)




// var table = +prompt("Enter a Multiplication table:")
// var length1 = +prompt("Enter a Length for the Table of 2:")

// document.write("<h2>Multiplication Table of " + table + "</h2>" + "<br>");


// for (var i = 1; i <= length1; i++) {
//     document.write(`${table} x ${i} = ${table * i} <br>`)
// }


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(`element at Index ${i} is ${fruits[i]} <br>`)
// }


// for (var i = 1; i <= 10; i++) {
//     document.write(i + ",")
// }
// for (var i = 10; i > 0; i--) {
//     document.write(i + ",")
// }

// this is for even numbers

// for (var i = 0; i <= 14; i++) {
//         if (i % 2 == 0) {
//             document.write(`${i} ,`)
//         }
//     }


// this is for odd numbers

// for (var i = 0; i <= 19; i++) {
//         if (i % 3 == 0) {
//             document.write(`${i} ,`)
//         }
//     }

// this is for series


// for (var i = 1; i <= 20; i++) {
//         if (i % 2 == 0) {
//             document.write(`${i}k `)
//         }
//     }





// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt(`what do you want to buy from our store?`);


// var myCounter = i;
// var foodFound = false

// for (var i = 0; i < bakeryItems.length; i++) {
//     if (bakeryItems[i] == userInput) {
//         myCounter = i;
//         foodFound = true;
//         break;
//     }
//     console.log(i);
// }

// if (foodFound === true) {
//     alert(`Your order is at index no ${i}`)
// }
// else if (!userInput) {
//     alert(`please insert your order`)
// }
// else {
//     alert(`we are sorry ${userInput} is not available on our store`)
// }


// var numbers = [24, 53, 78, 91, 12];
// var largest = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i]
//     }
// }

// alert(`the largest number in array is ${largest}`)

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// alert(`The smallest number in the array is: ${smallest}`);


for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + " ")
    }
}