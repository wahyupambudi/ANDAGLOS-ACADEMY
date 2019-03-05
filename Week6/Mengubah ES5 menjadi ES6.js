console.log('Tugas 1');
// Ubahlah seluruh var pada kode JavaScript dibawah ini menjadi let atau const!

// var phi = 3.14;
// var power = 2;
// var radius = 0;
// var calculateArea = function (radius) {
//   return phi * Math.pow(radius, power);
// }

// radius = 21;
// var area21 = calculateArea(radius);

// radius = 7;
// var area7 = calculateArea(radius);

// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

const phi = 3.14;
const power = 2;
let radius = 0;
const calculateArea = function (radius) {
  return phi * Math.pow(radius, power);
}

radius = 21;
const area21 = calculateArea(radius);

radius = 7;
const area7 = calculateArea(radius);

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);



console.log('\nTugas 2');
// Ubahlah anonymous functions dibawah ini menjadi ES6 Arrow Function!

//   const multiply = function (num1, num2) {
//     return num1 * num2;
//   }

//   const divide = function (num1, num2) {
//     return num1 / num2;
//   }

//   const doubleMe = function (num) {
//     return num * 2;
//   }

//   console.log(multiply(5,2));
//   console.log(divide(10,2));

const multiply = (num1, num2) => { return num1 * num2 };

const divide = (num1, num2) => { return num1 / num2 };

const doubleMe = num => { return num * 2};

console.log(multiply(5,2));
console.log(divide(10,2));
console.log(doubleMe(8));