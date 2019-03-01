
/*
==================================
Array Mastery: Group Odd Evens
==================================

[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"

aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
  
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"

input: [2, 8, 10]
output: "EVENS: 2, 8, 10"

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Gunakan Jiwa Pantang Menyerahmu dalam mengerjakannya yang Kreatif dan Imajinatif!
*/

function groupOddEven(arr){
	var odd = [];
	var even = [];

	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			even.push(arr[i]);
		}else{
			odd.push(arr[i]);
		}
	}

	if(even % 2 === 0 || odd % 2 !== 0){
		return 'ODDS: ' + odd + ' EVENS: ' + even 
	}else if(even !== 0){
		return 'EVENS: ' + even
	}else if(odd !== 0){
		return 'ODDS: ' + odd
	}else{
		return " "
	}


}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""
