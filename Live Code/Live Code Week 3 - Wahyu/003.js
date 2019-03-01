/*
==================================
Array Mastery: Pair Up
==================================

[INSTRUKSI]
Setiap student ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.

[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
input: []
output: []

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
- Gunakan Jiwa Pantang Menyerahmu dalam mengerjakannya yang Kreatif dan Imajinatif!
*/

function pairUp(namastudent){
	var nilai = [];
	var hasil = '';

	for(var i = 0; i < namastudent.length; i+=2){

		if (namastudent[i+1] === undefined) {
			hasil = namastudent[i] + ' dan Instruktur '
			nilai.push(hasil)
		}else if(namastudent.length % 2 === 0 || namastudent.length % 2 !== 0){
			hasil = namastudent[i]+ ' dan ' + namastudent[i + 1] 
			nilai.push(hasil)
		}

	}
	return nilai
}

// TEST CASES
console.log(pairUp(['Budi', 'Badu'])); // ['Budi dan Badu']
console.log(pairUp(['Budi'])); // ['Budi dan Instruktur']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri'])); // ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'James'])); // ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
console.log(pairUp([])); // []
