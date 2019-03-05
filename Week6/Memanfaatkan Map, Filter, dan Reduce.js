// Memanfaatkan Map, Filter, dan Reduce

// Objectives
// Mampu memanfaatkan Map, Filter, dan Reduce

// Directions
// Selesaikan beberapa kasus dibawah ini menggunakan sintaks yang diminta!

// Tugas 1
// Buatlah sebuah code yang mentransformasi array menggunakan map!

// var transformArrToLowerCase = arr => {
//   // Ubah setiap element array menjadi lowercase!
// };

// console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

// Tugas 2
// Buatlah sebuah code yang melakukan filter ke array menggunakan filter!

// var filterArrUnder10 = arr => {
//   // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
// };

// console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

// Tugas 3
// Buatlah sebuah code yang mendapatkan nilai terbesar menggunakan reduce!

// var reduceFindMaximum = arr => {
//   // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
// }
// console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9

console.log('Tugas 1');
let arr = ['BUDI', 'MArNi', 'mukIDi'];
let transformArrToLowerCase = arr.map( inputarr => {
	return inputarr.toLowerCase();
});
console.log(transformArrToLowerCase); // ['budi', 'marni', 'mukidi']


console.log('\nTugas 2');
let arr1 = [1, 5, 12, 15, 20];
var filterArrUnder10 = arr1.filter( inputarr => {
	return inputarr > 10;
	// if(inputarr > 10){
	// 	return inputarr > 10
	// }
});

console.log(filterArrUnder10); // [12, 15, 20]


console.log('\nTugas 3');
let arr2 = [5, 1, 7, 6, 9];
let arr3 = arr2.sort(function(a,b){return a-b})
var reduceFindMaximum = arr3.reduce(() => {
return arr3[arr3.length -1];
});
console.log(reduceFindMaximum); // 9