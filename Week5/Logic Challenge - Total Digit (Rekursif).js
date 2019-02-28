function totalDigitRekursif(angka) {
    // you can only write your code here!
    if(angka == 0) return 0;

	var newangka = angka.toString();
	var firstangka = newangka[0];
	// console.log(firstangka)
	var result = newangka.slice(1)
	// console.log(hasil)
	return Number(firstangka) + totalDigitRekursif(Number(result));

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5
  