/*
==================================
Array Mastery: Smallest Number
==================================

[INSTRUKSI]
Function smallestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info test case, bukan harus divalidasi/dicek).
smallestNumber akan mengembalikan angka yang terkecil dari array tersebut.

[CONTOH]
input: [4, 2, 5, 1]
output: 2

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Gunakan Jiwa Pantang Menyerahmu dalam mengerjakannya yang Kreatif dan Imajinatif!
*/
function smallestNumber(arr){
	var nilai = 0;

	for(var i = 0; i < arr.length; i++){
		if(i === 0){
			nilai = arr[0]
			// console.log(nilai)
		}
		// console.log(nilai)
		if(arr[i] < nilai){
			// console.log(arr[i])
			// console.log(nilai)
			nilai = arr[i]
		}
	}
	return nilai
}

// TEST CASES
console.log(smallestNumber([5, 2, 1, 4])); // 1
console.log(smallestNumber([999, 5, 0, 1, 4, 998])); // 0
console.log(smallestNumber([15, 32, 11, 14])); // 11
console.log(smallestNumber([5, 4, 3, 2, 1, 0])); // 0
console.log(smallestNumber([123, 321, 143, 313])); // 123
