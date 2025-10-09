// console.log("Tisha");
// console.log("Helloo Tishaa!");

// // variables
// fullName = "Sumaiya Taslim Tisha";
// age = 22;
// console.log(fullName);
// console.log(age);

// //using reserved keywords
// let _name = "sumaiya";
// console.log(_name);

// //in block
// {
//   let a = 5;
//   console.log(a);
// }
// {
//   let a = 10;
//   console.log(a);
// }

// //object for a student
// const student = {
//   fullname: "Tisha",
//   age: 22,
//   cgpa: 0.0,
//   isPass: true,
// };

// console.log(student["age"]);
//practice
// const product = {
//   prodname: "Parker Jotter Standard CT Ball Pen",
//   rating: 4,
//   offer: 5,
//   price: 270,
// };
// console.log(product);

// const profile = {
//   title: "Shradha",
//   post: 195,
//   followers: 569,
//   following: 4,
//   isFollow: false,
// };
// console.log(profile);

// Arithmetic operator
// let a = 5;
// let b = 2;
// let c = a + b;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", c);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);
// a--;
// console.log("a = ", a);

//if-else problem

// let num = prompt("Enter any number : ");
// let grade;
// if (num >= 80 && num <= 100) {
//   grade = "A+";
// } else if (num >= 70 && num <= 79) {
//   grade = "A";
// } else if (num >= 60 && num <= 69) {
//   grade = "A-";
// } else {
//   grade = "fail";
// }

// //loop
// for (let i = 1; i <= 5; i++) {
//   console.log("tisha");
// }

// //game number
// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while (userNum != gameNum) {
//   userNum = prompt("You entered wrong number. Guess again : ");
// }

// console.log("Congratulations, you entered the right number");

// //strings
// let str = "tisha";
// console.log(str);

// //q1
// let fullName = prompt("Enter your fullname without spaces");
// let username = "@" + fullName + fullName.length;
// console.log(username);

// //arrays
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// companies.splice(2, 1, "Ola");
// companies.push("Amazon");
// console.log(companies);

// // output all as string in even
// let n = prompt("Enter any number: ");
// let result = "";
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     result += "um...";
//   } else {
//     result += i + " ";
//   }
// }
// console.log(result);

//output in newline
// let n = prompt("Enter any number: ");
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// //vowels
// function countvowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// const input = prompt("Enter a string: ");
// console.log(countvowels(input));
