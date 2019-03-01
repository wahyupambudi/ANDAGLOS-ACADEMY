/*
==================================
Array Mastery: Love Me Not
==================================

[INSTRUKSI]
Seorang perempuan sedang menderita kegalauan, dia terus menerus beirfikir apakah seseorang tersebut menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia 
suka atau tidak, perempuan tersebut membuat sebuah program untuk mengekspresikan kegalauannya.
Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)

[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Gunakan Jiwa Pantang Menyerahmu dalam mengerjakannya yang Kreatif dan Imajinatif!
*/

function loveMeNot(arr){
	var love = 0;
	var notlove = 0;

	for(var i = 0; i < arr.length; i++){
		if(arr[i] === true){
			love++
		}else if (arr[i] === false) {
			notlove ++
		}
	}
	if(love > notlove){
		return "HE LOVES ME!"
	}else if(love < notlove){
		return "HE DOES NOT LOVE ME :("
	}else{
		return "GALAU"
	}
	// return arr;
}

// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("
