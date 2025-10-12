// // leap year
// function isLeapYear(year) {
//   if (year % 100 !== 0 && year % 4 === 0) {
//     return true;
//   }
//   if (year % 100 === 0 && year % 400 === 0) {
//     return true;
//   }
//   return false;
// }
// const isLeap = isLeapYear(2100);
// console.log(isLeap);

// // average odd numbers
// function oddAverage(numbers) {
//   const odds = [];
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       odds.push(number);
//     }
//   }
//   let sum = 0;
//   for (const number of odds) {
//     sum = sum + number;
//   }
//   const count = odds.length;
//   console.log(sum, count);
//   const avg = sum / count;
//   return avg;
// }
// const numbers = [12, 43, 55, 54, 96, 7];
// const avg = oddAverage(numbers);
// console.log(avg);

// // array duplicate elements remove
// const numbers = [12, 13, 14, 24, 25, 24, 12];
// function noDuplicate(array) {
//   const unique = [];
//   for (const item of array) {
//     if (unique.includes(item) === false) {
//       unique.push(item);
//     }
//   }
//   return unique;
// }
// const uniqueArray = noDuplicate(numbers);
// console.log(uniqueArray);

// // calculate some mathematics thing
// console.log(Math.ceil(1.2345));

// // simple date and time
// const today = new date();
// const date = new date("2025-10-12");
// console.log(date.getMonth());
// console.log(date.getDay());
// const specificDate = new date(2091, 0, 26);
// console.log(specificDate);

// // variable swap
// let a = 5;
// let b = 7;
// console.log(a, b);
// const temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// // another way variable swap using distructing
// let x = 32;
// let y = 25;
// console.log(x, y);
// [x, y] = [y, x];
// console.log(x, y);
