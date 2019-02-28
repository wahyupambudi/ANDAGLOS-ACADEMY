function hapusSimbol(str) {
  // you can only write your code here!

  var hasil = str.match(/[0-9 , A-Z]+/gi);
  var hasil1 = String(hasil);
  
  var nilai = ''
  for(var i=0; i < hasil1.length; i++){
  	// console.log(hasil1[i])
  	if(hasil1[i] !== ',' && hasil1[i] !== ' '){
  		nilai +=hasil1[i];
  	}
  }

  return nilai;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
